import { access, readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { basename, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const assets = resolve(root, "dist/assets");
const main = await readFile(resolve(assets, "index-AX28eR3E.js"), "utf8");
const files = new Set(await readdir(assets));
const relativeImports = [
  ...main.matchAll(/(?:from\s*["']|import\(\s*["'])(\.\/[^"']+)/g),
].map((match) => basename(match[1]));
const recoveredLateArtifacts = new Set([
  "WorkflowTool-DJnNLXUP.js",
  "Blog-GoU6g3km.js",
  "BlogPost-C8zx0wrA.js",
  "BlogIndex-vf6xaC3P.js",
  "blog-posts-FRy920l-.js",
]);
const exactArtifactHashes = new Map([
  ["recovered/WorkflowTool-DJnNLXUP.js", "c774210f1cc8bcc20e3dc33138a7d08a09d72c477cce904949364fd320ca8cd3"],
  ["recovered/Blog-GoU6g3km.js", "98141dbd6846c0c19f1437089ce8f1485aeb73a86dc6070e35034a31ac9f3f1f"],
  ["recovered/BlogPost-C8zx0wrA.js", "4103f509ef89ce6df4986bfc389f8a729135321cfe3e39677ad631b0b9e2e5c0"],
  ["recovered/BlogIndex-vf6xaC3P.js", "a34e9919896f48a64ccb9933a79d180089a72f4c91382e1c2b33b8ed4a7b7289"],
  ["recovered/blog-posts-FRy920l-.js", "ea3941e43dfb6ef28d4d3df2ac2565e812ef9ca004613c1973431d8e7912fe72"],
  ["vendor-src/ghostscript/background-worker.js", "f414af2243b0d0d52c788565acd50a98be1d17cadcb7872f0b685d0adbc6c4eb"],
  ["vendor-src/ghostscript/gs-worker.js", "1df703c3bcc5a05a13e49bfa4699c692e611787cf382bca72e02a0bf4f7cffd5"],
  ["vendor-src/ghostscript/gs-worker.wasm", "2d093d358b088dfa678ad3edc1ccaddfbd5d42addecb452b4d16e5bd13db0232"],
  ["vendor-src/models/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/1939ad2a8e416c0acfeecc08a694d14ef25f2231/onnx/model_quantized.onnx", "fbae9257e1e05ffc727e951ef9b9c98418e6d79f1c9b6b13bd59f5c9028a1478"],
  ["vendor-src/models/Xenova/distilbart-cnn-6-6/resolve/6b476295a3cf27d5b20e8c8b847a54ab8e5d0df9/onnx/encoder_model_quantized.onnx", "14d9b2d8fb1b6ebf7133046eaba3ea0dc0539be0523caa14c3e9b22131518a02"],
  ["vendor-src/models/Xenova/distilbart-cnn-6-6/resolve/6b476295a3cf27d5b20e8c8b847a54ab8e5d0df9/onnx/decoder_model_merged_quantized.onnx", "7a584dce621f77e39008055b6ef4ae9d3698241758e568edf3e5b0ad5fd6ccb2"],
  ["vendor-src/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/ac4f4e5e413ba923fd1a0091e2c2234d553d77fb/onnx/model_quantized.onnx", "6394ab8110b83faf8ebb38d9366552ec430922b5b8c7513f41134be3aa3dea24"],
]);
const unexpected = [...new Set(relativeImports)].filter(
  (file) => !files.has(file),
);

await access(resolve(root, "dist/index.html"));
await access(resolve(assets, "index-C7wPnfL7.css"));
await access(resolve(assets, "Dashboard-C3JB9zw0.js"));
await access(resolve(assets, "chevron-down-B25xREwk.js"));
for (const file of recoveredLateArtifacts) await access(resolve(assets, file));
for (const [file, expected] of exactArtifactHashes) {
  const digest = createHash("sha256").update(await readFile(resolve(root, file))).digest("hex");
  if (digest !== expected) throw new Error(`Checksum mismatch for ${file}`);
}
await access(resolve(root, "dist/background-worker.js"));
await access(resolve(root, "dist/gs-worker.js"));
await access(resolve(root, "dist/gs-worker.wasm"));
await access(resolve(root, "dist/vendor/models/onnx-community/Kokoro-82M-v1.0-ONNX/resolve/main/onnx/model_quantized.onnx"));
await access(resolve(root, "dist/vendor/models/Xenova/distilbart-cnn-6-6/resolve/main/onnx/encoder_model_quantized.onnx"));
await access(resolve(root, "dist/vendor/models/Xenova/distilbart-cnn-6-6/resolve/main/onnx/decoder_model_merged_quantized.onnx"));
await access(resolve(root, "dist/vendor/models/Xenova/distilbert-base-uncased-distilled-squad/resolve/main/onnx/model_quantized.onnx"));

if (unexpected.length) {
  throw new Error(`Unexpected missing imports: ${unexpected.join(", ")}`);
}

console.log(`PASS: ${files.size} production assets assembled`);
console.log("PASS: every required recovered relative import resolves");
console.log("PASS: Workflow and all Blog route artifacts are present");
console.log("PASS: Workflow Ghostscript worker/loader/WASM chain is present");
console.log("PASS: pinned Kokoro q8 model is present");
console.log("PASS: pinned DistilBART and DistilBERT quantized models are present");
console.log(`PASS: ${exactArtifactHashes.size} exact recovered/pinned artifact checksums match`);
