# Runtime External Hosts

The core PDF/office/OCR CDN URLs are rewritten to `/vendor/*` during `npm run build`. `npm run audit:runtime` fails for any unclassified external URL in generated application chunks.

## Functional external services and model weights

- `generativelanguage.googleapis.com` — Gemini streaming API; Chat with PDF sends extracted text/prompts.
- `makersuite.google.com` — user-initiated Gemini API-key management link.
- `stun.l.google.com`, `stun1.l.google.com`, `stun2.l.google.com` — WebRTC discovery for P2P Share/Collaborative Whiteboard.
- `huggingface.co` — only the five selectable Whisper model families used by Audio to PDF. Transformers runtime/WASM, DistilBART, DistilBERT QA, and Kokoro q8/voices are local.

## Explicit external navigation

- `razorpay.me` — payment/donation link.
- `peerlist.io`, `dev.to`, `medium.com`, `github.com` and the directory/product links embedded in `index.html` — user navigation, not processing APIs.

## Static metadata or non-fetch identifiers

- `schema.org`, `react.dev`, `reactrouter.com`, `ihatepdf.cv`, W3C and OOXML namespace URLs.

## Former badge/image hosts

Automatic presentation/marketing image requests are no longer retained in generated runtime. Their generated `<img>` sources use `/vendor/badges/external-listing.svg`; the surrounding user-initiated external links remain.

`acidtools.com`, `aigc160.com`, `aitechviral.com`, `aitoolzs.com`, `aixcollection.com`, `appalist.com`, `apphublist.com`, `appnetworker.com`, `appsytools.com`, `ashlist.com`, `beamtools.com`, `besttoolvault.com`, `dayslaunch.com`, `drchecker.net`, `fazier.com`, `goodaitools.com`, `huntfortools.com`, `latestaiupdates.com`, `launchclash.com`, `launchscroll.com`, `milliondothomepage.com`, `mylaunchstash.com`, `mystarttools.com`, `neeed.directory`, `open-launch.com`, `poweruptools.com`, `productlistdir.com`, `productwing.com`, `saasavenue.com`, `saasbadge.com`, `saasbranch.com`, `saascrawler.com`, `saasfield.com`, `saashubdirectory.com`, `saasnetworker.com`, `saasroots.com`, `saasscanner.com`, `saasstate.com`, `saasterritory.com`, `saastoolsdir.com`, `saaswheel.com`, `shinylaunch.com`, `smartkithub.com`, `softwarebolt.com`, `solvertools.com`, `sourcedir.com`, `stackdirectory.com`, `startupaideas.com`, `startupbase.io`, `startupbenchmarks.com`, `startupfa.me`, `startupfa.st`, `startupvessel.com`, `superaiboom.com`, `thatappshow.com`, `theapptools.com`, `thecoretools.com`, `thekeytools.com`, `themegatools.com`, `theonestartup.com`, `tinytoolhub.com`, `tooldynamo.com`, `toolignite.com`, `toolkitindex.com`, `toolnetworker.com`, `toolparade.com`, `toolsignal.com`, `toolslisthq.com`, `toolsunderradar.com`, `toptrendtools.com`, `toshilist.com`, `trustiner.com`, `turbo0.com`, `twelve.tools`, `unitelist.com`, `weliketools.com`, `wired.business`, `www.showmysites.com`, `www.superlaun.ch`, `yo.directory`.

Microsoft Clarity is removed from generated runtime. The build also removes obsolete preconnect/dns-prefetch hints for unpkg, jsDelivr, and cdnjs. PPTX conversion no longer requests arbitrary Google Fonts: it loads a bounded local catalogue and deterministically falls back through the recovered font-family mapping.
