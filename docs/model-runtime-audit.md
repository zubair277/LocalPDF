# Model and Runtime Audit

Audit date: 2026-08-25. Metadata was checked against the exact npm releases and official Hugging Face model API records named by the recovered chunks. No general claim is made beyond that evidence.

| Feature | Recovered model(s) | Runtime | Model status | Evidence / decision |
|---|---|---|---|---|
| Compare PDFs | `Xenova/distilbart-cnn-6-6` | Local Transformers.js 2.17.2 + local ONNX WASM | **Bundled** | Exact model card reports Apache-2.0. Pinned encoder and merged-decoder quantized graphs plus configuration/tokenizer files are local. |
| Summarize PDF | DistilBART above; `Xenova/distilbert-base-uncased-distilled-squad` | Local Transformers.js 2.17.2 + local ONNX WASM | **Bundled** | Exact ONNX card identifies the upstream model; its upstream model card explicitly declares Apache-2.0. Both quantized model packs are local. |
| PDF to EPUB AI mode | `Xenova/distilbart-cnn-6-6` | Local Transformers.js 2.17.2 + local ONNX WASM | **Bundled** | Uses the same local pinned DistilBART pack as Compare. Heuristic mode remains local as before. |
| Audio to PDF | `Xenova/whisper-small.en`, `whisper-medium.en`, `whisper-large-v3`, `whisper-small`, `whisper-medium` | Local Transformers.js 2.17.2 + local ONNX WASM | External weights | Official model metadata reports Apache-2.0 for all five. Bundling all selectable variants would add several large model families, so model download/cache behavior is preserved. |
| PDF to Audio | `onnx-community/Kokoro-82M-v1.0-ONNX` q8 | Local Kokoro JS 1.2.1 + local Transformers/ONNX WASM | **Bundled** | npm runtime and official model metadata report Apache-2.0. Pinned model revision `1939ad2…`, q8 SHA-256 `fbae9257…`, 92,361,116 bytes. Runtime, WASM, model metadata, q8 graph, and voices resolve locally. |

The runtime npm packages declare Apache-2.0 and their license files are copied into `dist/vendor`. Model weights are never uploaded; inference remains in browser workers. Remaining external model traffic goes only to `huggingface.co` and only for Audio-to-PDF's five selectable Whisper models.

This model/runtime conclusion does not cover the separately recovered Ghostscript WASM. Its deployed worker artifacts contain no embedded license notice, so this audit makes no legal redistribution claim for that binary.
