const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const BASE = "https://www.ihatepdf.cv";
const OUT = path.join(process.env.HOME, "Desktop", "ihatepdf-code", "complete-resources");

const routes = [
  "/merge-pdf",
  "/split-pdf",
  "/compress-pdf",
  "/rotate-pdf",
  "/organize-pages",
  "/pdf-to-jpg",
  "/images-to-pdf",
  "/pdf-to-word",
  "/word-to-pdf",
  "/pdf-to-excel",
  "/excel-to-pdf",
  "/pdf-to-pptx",
  "/pptx-to-pdf",
  "/html-to-pdf",
  "/markdown-to-pdf",
  "/ebook-to-pdf",
  "/csv-to-pdf",
  "/extract-text",
  "/ocr-pdf",
  "/edit-pdf-text",
  "/fill-pdf-form",
  "/sign-pdf",
  "/add-signature",
  "/add-watermark",
  "/headers-footers",
  "/page-numbers",
  "/crop-resize-pdf",
  "/redact-pdf",
  "/auto-redact-pii",
  "/encrypt-pdf",
  "/remove-password",
  "/unlock-pdf",
  "/flatten-pdf",
  "/repair-pdf",
  "/compare-pdfs",
  "/fingerprint-pdf",
  "/privacy-scanner",
  "/invert-pdf",
  "/create-pdf",
  "/scan-to-pdf",
  "/chat-with-pdf",
  "/summarize-pdf",
  "/pdf-to-audio",
  "/audio-to-pdf",
  "/pdf-to-epub",
  "/pdf-to-html",
  "/pdf-to-zip",
  "/pdf-to-handwriting",
  "/handwriting-to-pdf",
  "/p2p-share",
  "/collab-whiteboard",
  "/gst-invoice",
  "/gst-filing-prep",
  "/pos-billing"
];

const seen = new Set();

function filename(url) {
  const u = new URL(url);
  let p = decodeURIComponent(u.pathname);

  if (!p || p.endsWith("/")) p += "index.html";

  p = p.replace(/^\/+/, "").replace(/\.\./g, "_");

  return path.join(OUT, p);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();

  for (const route of routes) {
    const page = await context.newPage();

    console.log(`\n=== ${route} ===`);

    page.on("response", async response => {
      const url = response.url();

      if (!url.startsWith(BASE)) return;
      if (seen.has(url)) return;

      seen.add(url);

      try {
        const body = await response.body();
        const file = filename(url);

        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, body);

        console.log("SAVED:", url);
      } catch {
        console.log("SKIPPED:", url);
      }
    });

    try {
      await page.goto(BASE + route, {
        waitUntil: "networkidle",
        timeout: 120000
      });

      await page.waitForTimeout(3000);
    } catch (error) {
      console.log("PAGE ERROR:", route);
    }

    await page.close();
  }

  fs.writeFileSync(
    path.join(OUT, "resource-inventory.txt"),
    [...seen].sort().join("\n")
  );

  await browser.close();

  console.log("\n==============================");
  console.log("CRAWL COMPLETE");
  console.log("==============================");
  console.log(`Resources captured: ${seen.size}`);
  console.log(`Saved to: ${OUT}`);
})();
