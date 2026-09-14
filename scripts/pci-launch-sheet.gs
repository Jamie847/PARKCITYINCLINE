/**
 * PCI Launch — paste this into the Google Sheet:
 * https://docs.google.com/spreadsheets/d/1okWQQgeDYmYguXmtYCsDjNHlI3gj-9K-9Jv-2BzD5GI/edit
 *
 * Deploy: Extensions → Apps Script → paste → Deploy → New deployment
 *   Type: Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Copy the Web app URL into Render as GOOGLE_SHEETS_WEBHOOK_URL.
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const data = JSON.parse(e.postData.contents);
    const email = String(data.email || "")
      .trim()
      .toLowerCase();
    if (!email || email.indexOf("@") === -1) {
      return json_({ ok: false, error: "Missing email" });
    }

    const sheet = getOrCreateSheet_();
    const existing = sheet
      .getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1)
      .getValues()
      .flat()
      .map(function (value) {
        return String(value).trim().toLowerCase();
      });

    if (existing.indexOf(email) !== -1) {
      return json_({ ok: true, already: true });
    }

    sheet.appendRow([
      new Date(),
      email,
      data.list || "PCI Launch",
      data.source || "parkcityincline.com",
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("Signups");
  if (!sheet) {
    sheet = ss.insertSheet("Signups");
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Email", "List", "Source"]);
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 180);
    sheet.setColumnWidth(2, 260);
    sheet.setColumnWidth(3, 140);
    sheet.setColumnWidth(4, 200);
  }
  return sheet;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
