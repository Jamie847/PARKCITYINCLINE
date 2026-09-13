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

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;

  if (apiKey && audienceId && server) {
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
          tags: [body?.list || "PCI Launch"],
        }),
      },
    );

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as {
        title?: string;
      } | null;
      if (payload?.title === "Member Exists") {
        return NextResponse.json({ ok: true, already: true });
      }
      return NextResponse.json(
        { ok: false, error: "Mailchimp could not add that address." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
