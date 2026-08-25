import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const probe = createServer();
await new Promise((accept, reject) => probe.listen(0, "127.0.0.1", accept).once("error", reject));
const port = probe.address().port;
await new Promise((accept) => probe.close(accept));

const server = spawn(process.execPath, [resolve(root, "scripts/serve-recovered.mjs")], {
  cwd: root,
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});
let stderr = "";
server.stderr.on("data", (chunk) => { stderr += chunk; });

try {
  await new Promise((accept, reject) => {
    const timeout = setTimeout(() => reject(new Error("Local server startup timed out")), 5000);
    server.stdout.on("data", (chunk) => {
      if (chunk.toString().includes("Recovered application available")) {
        clearTimeout(timeout);
        accept();
      }
    });
    server.once("exit", (code) => reject(new Error(`Local server exited ${code}: ${stderr}`)));
  });

  const checks = [
    ["/", "text/html"],
    ["/merge-pdf", "text/html"],
    ["/workflow", "text/html"],
    ["/blog", "text/html"],
    ["/assets/WorkflowTool-DJnNLXUP.js", "text/javascript"],
    ["/assets/Blog-GoU6g3km.js", "text/javascript"],
    ["/assets/blog-posts-FRy920l-.js", "text/javascript"],
    ["/background-worker.js", "text/javascript"],
    ["/gs-worker.js", "text/javascript"],
    ["/gs-worker.wasm", "application/wasm"],
    ["/vendor/tesseract/lang/eng.traineddata.gz", "application/octet-stream"],
    ["/vendor/transformers/transformers.min.js", "text/javascript"],
    ["/vendor/kokoro/kokoro.web.js", "text/javascript"],
    ["/vendor/models/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/onnx/model_quantized.onnx", "application/octet-stream"],
    ["/vendor/models/Xenova/distilbart-cnn-6-6/resolve/main/onnx/encoder_model_quantized.onnx", "application/octet-stream"],
    ["/vendor/models/Xenova/distilbart-cnn-6-6/resolve/main/onnx/decoder_model_merged_quantized.onnx", "application/octet-stream"],
    ["/vendor/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/main/onnx/model_quantized.onnx", "application/octet-stream"],
    ["/vendor/models/Xenova/distilbart-cnn-6-6/resolve/main/config.json", "application/json"],
    ["/vendor/models/Xenova/distilbart-cnn-6-6/resolve/main/tokenizer.json", "application/json"],
    ["/vendor/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/main/config.json", "application/json"],
    ["/vendor/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/main/tokenizer.json", "application/json"],
    ["/vendor/fonts/pptx.css", "text/css"],
  ];
  for (const [pathname, contentType] of checks) {
    const response = await fetch(`http://127.0.0.1:${port}${pathname}`, { method: "HEAD" });
    assert.equal(response.status, 200, pathname);
    assert.match(response.headers.get("content-type") || "", new RegExp(contentType.replace("/", "\\/")), pathname);
  }
  console.log(`PASS: ${checks.length} local HTTP routes/assets return 200 with expected content types`);
} finally {
  server.kill("SIGTERM");
  await new Promise((accept) => server.once("exit", accept));
}
