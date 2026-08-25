const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const OUT = path.join(process.env.HOME, "Desktop", "ihatepdf-code", "extracted");
const seen = new Set();

function outputPath(url) {
  const u = new URL(url);
  let p = decodeURIComponent(u.pathname);

  if (!p || p.endsWith("/")) p += "index.html";

  p = p.replace(/^\/+/, "").replace(/\.\./g, "_");

  return path.join(OUT, p);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on("response", async response => {
    const url = response.url();

    if (!url.startsWith("https://www.ihatepdf.cv/")) return;
    if (seen.has(url)) return;

    seen.add(url);

    try {
      const body = await response.body();
      const file = outputPath(url);

      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, body);

      console.log("SAVED:", url);
    } catch {}
  });

  console.log("Opening https://www.ihatepdf.cv/");

  await page.goto("https://www.ihatepdf.cv/", {
    waitUntil: "networkidle",
    timeout: 120000
  });

  await page.waitForTimeout(10000);

  fs.writeFileSync(
    path.join(OUT, "resource-inventory.txt"),
    [...seen].sort().join("\n")
  );

  await browser.close();

  console.log("");
  console.log("DONE");
  console.log("Resources:", seen.size);
  console.log("Saved to:", OUT);
})();
