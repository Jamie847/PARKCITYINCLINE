import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    email?: string;
    list?: string;
  } | null;

  const email = body?.email?.trim().toLowerCase() ?? "";
  if (!EMAIL.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a real email." },
      { status: 400 },
    );
  }

  const list = body?.list || "PCI Launch";
  const sheet = await writeToSheet(email, list);
  const mailchimp = await writeToMailchimp(email, list);

  if (sheet.stored || mailchimp.stored) {
    return NextResponse.json({
      ok: true,
      stored: true,
      already: Boolean(sheet.already || mailchimp.already),
    });
  }

  if (sheet.error || mailchimp.error) {
    return NextResponse.json(
      { ok: false, error: sheet.error || mailchimp.error },
      { status: 502 },
    );
  }

  console.warn(
    "[subscribe] No Google Sheet webhook or Mailchimp keys — address accepted but NOT stored:",
    email,
  );
  return NextResponse.json({ ok: true, stored: false });
}

async function writeToSheet(email: string, list: string) {
  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!url) return { stored: false };

  try {
    const response = await fetch(url, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        list,
        source: "parkcityincline.com",
      }),
    });
    const payload = (await response.json().catch(() => null)) as {
      ok?: boolean;
      already?: boolean;
      error?: string;
    } | null;

    if (!response.ok || !payload?.ok) {
      return {
        stored: false,
        error: payload?.error || "The signup sheet could not add that address.",
      };
    }

    return { stored: true, already: Boolean(payload.already) };
  } catch {
    return { stored: false, error: "The signup sheet did not respond." };
  }
}

async function writeToMailchimp(email: string, list: string) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  if (!apiKey || !audienceId || !server) return { stored: false };

  const response = await fetch(
    `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`any:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        tags: [list],
      }),
    },
  );

  if (!response.ok) {
    const payload = (await response.json().catch(() => null)) as {
      title?: string;
    } | null;
    if (payload?.title === "Member Exists") {
      return { stored: true, already: true };
    }
    return { stored: false, error: "Mailchimp could not add that address." };
  }

  return { stored: true };
}
