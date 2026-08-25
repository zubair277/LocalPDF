import{r as u,j as e}from"./react-vendor-Bc7KCos-.js";const T=[{id:"camerascan",title:"Scan Document",desc:"Use your camera to scan any document and export it as a PDF",category:"Scan & Workflow",synonyms:["camera","scan","photograph","capture","mobile scan","phone scan","document scanner","scan to pdf","receipt scan","invoice scan","physical document","take photo","snap","digitize paper","scan paper","shoot document"]},{id:"workflow",title:"Workflow Builder",desc:"Chain multiple PDF operations in one automated pipeline",category:"Scan & Workflow",synonyms:["workflow","automate","automation","batch","pipeline","chain","multi step","bulk","process multiple","sequence","scheduled","trigger","combine operations","multi tool","assembly line"]},{id:"merge",title:"Merge PDFs",desc:"Combine multiple PDFs into one document",category:"Page Management",synonyms:["merge","combine","join","unite","concatenate","put together","stitch","append","add together","fuse","blend","attach","bind","collect","consolidate","gather","pool","assemble","link","connect","chain pdfs","two pdfs one","multiple pdfs one file"]},{id:"compress",title:"Compress PDF",desc:"Reduce PDF file size while maintaining quality",category:"Page Management",synonyms:["compress","reduce size","shrink","make smaller","optimize","minimize","decrease size","reduce file size","lighter","smaller file","cut size","lower mb","reduce kb","slim down","deflate","squish","thin","compressor","too big","large file"]},{id:"split",title:"Split PDF",desc:"Separate PDF into individual pages or specific ranges",category:"Page Management",synonyms:["split","separate","divide","break","extract pages","take out","remove pages","isolate","cut pdf","part of pdf","page range","subset","portion","slice","detach","segment","chunk","pull out pages","individual pages","one page"]},{id:"organize",title:"Organize Pages",desc:"Rotate, delete, reorder, or rearrange PDF pages",category:"Page Management",synonyms:["organize","reorder","rearrange","delete pages","move pages","sort pages","manage pages","page order","arrange","restructure","shuffle","swap pages","resequence","change order","reorganize","page management"]},{id:"rotatepdf",title:"Rotate PDF",desc:"Rotate individual pages or entire PDF at 90°, 180°, 270°",category:"Page Management",synonyms:["rotate","turn","flip page","landscape","portrait","orientation","90 degrees","180 degrees","270 degrees","upside down","fix orientation","sideways","tilted","wrong way","spin","clockwise","counterclockwise"]},{id:"cropresize",title:"Crop & Resize",desc:"Crop margins, resize pages to standard sizes like A4, Letter",category:"Page Management",synonyms:["crop","resize","trim","cut margins","change size","adjust size","scale","change dimensions","page size","paper size","a4","letter","shrink page","enlarge page","margin","border","frame","cut out","clip"]},{id:"pdftozip",title:"PDF to ZIP",desc:"Bundle multiple PDFs into a single compressed ZIP archive",category:"Page Management",synonyms:["pdf to zip","zip","archive","bundle","package","compress to zip","zip file","download zip","export zip","multiple files","tar","archive download","batch download"]},{id:"editpdftext",title:"Edit PDF & Signature",desc:"Click any text to edit in-place, add signatures and annotations",category:"Edit & Annotate",synonyms:["edit pdf","edit text","change text","modify text","fix typo","correct text","update text","rewrite","inline edit","signature","sign","add text","write on pdf","annotate","mark up","draw on pdf","fill pdf","pdf editor","add signature","esign","digital signature","free draw","highlight","stamp","comment","note"]},{id:"signpdf",title:"Sign PDF",desc:"Draw, type or photograph your signature and place it on any page",category:"Edit & Annotate",synonyms:["sign","signature","esign","e-sign","electronic signature","digital signature","sign contract","autograph"]},{id:"pdftohandwriting",title:"PDF to Handwriting",desc:"Turn a PDF or typed text into realistic handwritten notes",category:"Edit & Annotate",synonyms:["handwriting","handwritten","assignment","notes","cursive","text to handwriting"]},{id:"handwritingtopdf",title:"Handwriting to PDF",desc:"Convert handwritten pages to typed text, layout preserved",category:"Convert from PDF",synonyms:["handwriting to text","handwritten","ocr handwriting","scan notes","digitise notes","transcribe"]},{id:"gstfilingprep",title:"GST Filing Prep",desc:"Prepare SCN reply and appeal bundles under the GST portal 5MB limit",category:"Business",synonyms:["gst","scn reply","appeal","apl-01","apl-03","gst portal","5mb","annexure"]},{id:"fillform",title:"Fill PDF Form",desc:"Fill a fillable PDF and lock the answers in",category:"Edit & Annotate",synonyms:["fill form","fillable","form filler","complete form","type in form","acroform","application form"]},{id:"redact",title:"Redact PDF",desc:"Permanently remove sensitive text and information",category:"Edit & Annotate",synonyms:["redact","censor","black out","remove text","hide information","obscure","mask","delete sensitive","cover up","blot out","sanitize","expunge","erase","conceal","scrub","wipe","pixel out","anonymize"]},{id:"watermark",title:"Add Watermark",desc:"Protect documents with text or image watermarks",category:"Edit & Annotate",synonyms:["watermark","add watermark","stamp","brand","mark","overlay text","logo on pdf","text overlay","protect","draft","confidential","mark document","add logo","background text","diagonal text"]},{id:"pagenumbers",title:"Add Page Numbers",desc:"Automatically number PDF pages with custom formatting",category:"Edit & Annotate",synonyms:["page numbers","number pages","add numbers","pagination","page numbering","add page count","folio","page counter","numbering","page index"]},{id:"headerfooter",title:"Headers & Footers",desc:"Add custom headers and footers with text, dates, page numbers",category:"Edit & Annotate",synonyms:["header","footer","add header","add footer","top text","bottom text","running header","running footer","document header","page footer","top of page","bottom of page","masthead"]},{id:"flatten",title:"Flatten PDF",desc:"Make PDFs permanently non-editable — removes forms, annotations, scripts",category:"Edit & Annotate",synonyms:["flatten","non editable","non-editable","read only","readonly","lock content","finalize","static pdf","remove forms","remove annotations","strip metadata","make permanent","freeze","bake","rasterize","lock editing","prevent editing","no edit"]},{id:"invertpdf",title:"Invert PDF Colours",desc:"Convert PDFs to dark mode, light mode, sepia, or high contrast",category:"Edit & Annotate",synonyms:["invert","dark mode","night mode","flip colours","sepia","high contrast","negative","colour invert","light mode","theme","dark theme","accessibility","eye strain","color scheme","reverse colors"]},{id:"wordtopdf",title:"Word to PDF",desc:"Convert .doc and .docx files to PDF with perfect formatting",category:"Convert → PDF",synonyms:["word to pdf","docx to pdf","doc to pdf","convert word","office to pdf","microsoft word","word document","word file","docx","doc","msword","convert doc","convert docx"]},{id:"images",title:"Images to PDF",desc:"Convert JPG, PNG images to PDF — batch convert multiple images",category:"Convert → PDF",synonyms:["image to pdf","jpg to pdf","png to pdf","picture to pdf","photo to pdf","jpeg to pdf","convert image","webp to pdf","gif to pdf","bmp to pdf","tiff to pdf","photos to document","pics to pdf","screenshot to pdf","batch images"]},{id:"exceltopdf",title:"Excel to PDF",desc:"Convert .xlsx spreadsheets to pixel-perfect PDFs",category:"Convert → PDF",synonyms:["excel to pdf","xlsx to pdf","xls to pdf","xlsm to pdf","spreadsheet to pdf","convert excel","csv to pdf","workbook to pdf","table to pdf","google sheets","numbers to pdf","excel file","spreadsheet"]},{id:"pptxtopdf",title:"PowerPoint to PDF",desc:"Convert .pptx presentations to PDF",category:"Convert → PDF",synonyms:["pptx to pdf","powerpoint to pdf","presentation to pdf","slides to pdf","convert ppt","ppt to pdf","keynote to pdf","deck to pdf","slideshow to pdf","google slides","impress to pdf"]},{id:"htmlpdf",title:"HTML to PDF",desc:"Convert HTML files or code to professional PDFs",category:"Convert → PDF",synonyms:["html to pdf","webpage to pdf","convert html","web page to pdf","url to pdf","website to pdf","html file","save webpage","web to pdf","site to pdf","browser to pdf"]},{id:"texttopdf",title:"Create PDF",desc:"Write rich text with formatting, images & styles — export as PDF",category:"Convert → PDF",synonyms:["create pdf","text to pdf","write pdf","new pdf","blank pdf","word processor","rich text","pdf creator","type pdf","make pdf from scratch","build pdf","generate pdf","blank page","new document","make document"]},{id:"markdownpdf",title:"Markdown to PDF",desc:"Convert .md Markdown files to beautifully formatted PDFs",category:"Convert → PDF",synonyms:["markdown to pdf","md to pdf","convert markdown","markdown converter","markdown document","md file","readme to pdf","markdown","md","obsidian","notion export","markup to pdf"]},{id:"csvpdf",title:"CSV ↔ PDF Converter",desc:"Convert CSV spreadsheets to PDFs, or extract tables from PDFs to CSV",category:"Convert → PDF",synonyms:["csv to pdf","pdf to csv","spreadsheet to pdf","table converter","export csv","import table","data to pdf","csv converter","tabular data","comma separated","tsv","delimiter","data export","data import"]},{id:"audiotopdf",title:"Audio to PDF",desc:"Transcribe audio files to editable PDF using on-device Whisper AI",category:"Convert → PDF",synonyms:["audio to pdf","speech to pdf","voice to pdf","transcribe","transcription","mp3 to pdf","recording to pdf","convert audio","voice notes","meeting notes","lecture notes","podcast transcript","wav to pdf","m4a to pdf","voice transcript","whisper","asr","speech recognition"]},{id:"ebooktopdf",title:"eBook to PDF",desc:"Convert EPUB, TXT & HTML eBooks to beautifully typeset PDFs",category:"Convert → PDF",synonyms:["ebook to pdf","epub to pdf","mobi to pdf","kindle to pdf","convert ebook","azw to pdf","fb2 to pdf","ebook converter","digital book","reader file","epub file","book to pdf"]},{id:"pdftodocx",title:"PDF to Word",desc:"Convert PDF to editable .docx files",category:"Convert → Other",synonyms:["pdf to word","pdf to docx","pdf to doc","convert pdf to word","export word","editable word","word from pdf","pdf docx","make editable","pdf to microsoft word","extract to word","word document from pdf"]},{id:"pdftojpg",title:"PDF to JPG",desc:"Convert PDF pages to high-quality JPG images up to 600 DPI",category:"Convert → Other",synonyms:["pdf to jpg","pdf to image","convert pdf to jpeg","pdf to png","export pdf as image","save pdf as picture","pdf to photo","turn pdf into image","extract images","pdf to bitmap","rasterize pdf","pdf snapshot","screenshot pdf"]},{id:"pdftoexcel",title:"PDF to Excel",desc:"Extract tables from PDF into editable XLSX spreadsheets",category:"Convert → Other",synonyms:["pdf to excel","pdf to xlsx","pdf to spreadsheet","table from pdf","extract table","pdf to xls","convert table pdf","data from pdf","pdf data extraction","table extraction","numbers from pdf","pdf to csv"]},{id:"pdftopptx",title:"PDF to PowerPoint",desc:"Convert PDF to editable .pptx presentations",category:"Convert → Other",synonyms:["pdf to pptx","pdf to powerpoint","pdf to slides","convert to presentation","pdf to ppt","make slides from pdf","pdf to deck","presentation from pdf","pdf to keynote"]},{id:"extract",title:"Extract Text",desc:"Copy text from PDF documents without formatting issues",category:"Convert → Other",synonyms:["extract text","copy text","get text","text from pdf","read text","pull text","parse text","grab text","plain text","raw text","copy content","text extraction","retrieve text","dump text","scrape text"]},{id:"pdftohtml",title:"PDF to HTML",desc:"Convert PDF to pixel-accurate HTML — colors, fonts, tables preserved",category:"Convert → Other",synonyms:["pdf to html","pdf to web","pdf to webpage","convert pdf html","pdf to website","html from pdf","export html","pdf to online","publish pdf","pdf to web page","html export"]},{id:"pdftoadudio",title:"PDF to Audio",desc:"Listen to any PDF read aloud using text-to-speech",category:"Convert → Other",synonyms:["pdf to audio","pdf to speech","listen to pdf","text to speech","tts","read pdf aloud","pdf reader","accessibility","speak pdf","narrate pdf","audio from pdf","pdf voice","read out","audiobook from pdf"]},{id:"pdfttoepub",title:"PDF to EPUB",desc:"Convert PDF documents into portable eBook files for any e-reader",category:"Convert → Other",synonyms:["pdf to epub","pdf to ebook","convert pdf ebook","epub converter","kindle epub","apple books","kobo","google play books","read pdf","epub format","e-reader","e reader","ebook from pdf"]},{id:"encryptpdf",title:"Encrypt PDF",desc:"Password-protect PDFs with strong encryption",category:"Security & Privacy",synonyms:["encrypt","password protect","secure","lock","add password","protect pdf","set password","password","encryption","aes","secure document","safe pdf","restrict access","access control","owner password","user password"]},{id:"unlockpdf",title:"Unlock PDF",desc:"Remove printing, copying and editing restrictions",category:"Security & Privacy",synonyms:["unlock","remove restrictions","enable printing","allow copying","permissions","owner password","unrestrict","cannot print"]},{id:"autoredact",title:"Auto-Redact PII",desc:"Find and remove Aadhaar, PAN, cards, emails and phone numbers",category:"Security & Privacy",synonyms:["redact","personal information","pii","aadhaar","pan","anonymise","anonymize","gdpr","sensitive data"]},{id:"removepassword",title:"Remove Password",desc:"Unlock password-protected PDFs and remove encryption",category:"Security & Privacy",synonyms:["unlock","remove password","decrypt","unprotect","remove security","open locked pdf","crack pdf","break password","password removal","unsecure","remove restriction","unlock pdf","forgotten password","lost password"]},{id:"privacyscanner",title:"Privacy Risk Scanner",desc:"Detect Aadhaar, PAN, cards, emails & hidden metadata",category:"Security & Privacy",synonyms:["privacy scan","find personal data","pii","sensitive data","personal information","detect email","detect phone","gdpr scan","data leak scan","privacy check","aadhaar","pan card","metadata","hidden data","aadhar","credit card number","bank account","ifsc","gst number","privacy risk","data exposure"]},{id:"fingerprint",title:"Fingerprint Generator",desc:"Generate SHA-256, SHA-1 & MD5 cryptographic hashes to verify file integrity",category:"Security & Privacy",synonyms:["fingerprint","hash","sha256","sha1","md5","checksum","integrity","verify","tamper detection","file proof","certificate","duplicate detect","verify file","file hash","cryptographic","document proof","authenticity","signature hash"]},{id:"chatpdf",title:"Chat with PDF",desc:"Ask questions and get AI insights from your PDFs",category:"AI Tools",synonyms:["chat","ask questions","ai","analyze","understand","explain pdf","question answer","qa pdf","talk to pdf","query pdf","ai chat","conversational","gpt pdf","llm pdf","summarize with ai","understand document","ai assistant","pdf bot","ask ai","interrogate"]},{id:"summary",title:"AI PDF Summarizer",desc:"Summarize any PDF with on-device AI — no upload, 100% private",category:"AI Tools",synonyms:["summarize","summary","tldr","abstract","brief","overview","key points","shorten","digest","condense","distill","highlights","main points","executive summary","gist","essence","synopsis","nutshell","bullet points","ai summary","summarizer"]},{id:"ocr",title:"Searchable PDF",desc:"Extract text from scanned or image-based PDFs using AI recognition",category:"AI Tools",synonyms:["ocr","optical character recognition","scan text","scanned pdf","make searchable","searchable pdf","image to text","recognize text","digitize text","handwriting","scanned document","non searchable","non-searchable","image pdf","text recognition","computer vision"]},{id:"compare",title:"Compare PDFs",desc:"View two PDF files side-by-side for easy comparison",category:"AI Tools",synonyms:["compare","diff","difference","side by side","contrast","check changes","compare versions","differences","what changed","track changes","delta","version compare","before after","two versions","document diff"]},{id:"repair",title:"Repair PDF",desc:"Fix corrupted, truncated, or broken PDF files",category:"AI Tools",synonyms:["repair pdf","fix pdf","corrupt pdf","broken pdf","recover pdf","damaged pdf","pdf not opening","restore pdf","invalid pdf","error pdf","corrupted","truncated","incomplete pdf","fix broken","recover corrupted","pdf fix"]},{id:"gstinvoice",title:"GST Invoice Generator",desc:"Create legally compliant GST Tax Invoices with CGST, SGST, IGST",category:"Business",synonyms:["gst invoice","tax invoice","india billing","cgst","sgst","igst","hsn code","generate invoice","bill of supply","create invoice","invoice generator","gst bill","proforma","e-invoice","tds","india tax","indian invoice","gst compliant","business invoice","commercial invoice"]},{id:"posbill",title:"POS Bill Generator",desc:"Create instant GST-compliant bills for any shop with thermal receipt printing",category:"Business",synonyms:["pos","point of sale","billing","shopkeeper","retail","cash register","thermal receipt","cart","checkout","cashier","shop bill","b2c billing","barcode","payment","retail billing","shop management","store billing","sales receipt","till","counter"]},{id:"gstfilingprep",title:"GST Filing Prep",desc:"Compress & split PDFs to meet GST portal upload limits",category:"Business",synonyms:["gst filing","gst return","gstr","gstr-1","gstr-3b","tax filing","india tax","prepare gst","gst document","input tax credit","itc","gst report","reconciliation","gst portal","5mb limit","scn reply","appeal","show cause notice","apl-01","gst upload"]},{id:"p2pshare",title:"P2P File Share",desc:"Send any file directly to another browser — no server, no upload",category:"Collaborate & Share",synonyms:["share pdf","send pdf","peer to peer","p2p","direct share","transfer file","send without upload","no cloud share","private transfer","local share","webrtc","browser to browser","send directly","file transfer","share without server","airdrop","nearby share"]},{id:"whiteboard",title:"Collab Whiteboard",desc:"Real-time P2P drawing — no server, no upload",category:"Collaborate & Share",synonyms:["whiteboard","collaborate","draw together","shared canvas","real time drawing","online whiteboard","team whiteboard","collab board","live drawing","brainstorm","sketch","doodle","drawing board","creative board","joint canvas","miro","figma whiteboard","draw"]}],L={camerascan:["scan a document with my camera","take a photo of a paper and make a pdf","digitize a paper receipt","scan paper to pdf with my phone","capture a physical document"],workflow:["automate multiple pdf steps","run several pdf tools in a row","batch process many pdfs at once","build a pdf pipeline","chain pdf operations together"],merge:["merge multiple pdfs into one","combine two pdf files into a single document","join several pdfs together","put my pdfs into one file","i want to merge pdf files","combine pdfs into a single document"],compress:["reduce the size of my pdf","make my pdf smaller","shrink a large pdf","my pdf is too big to email","lower the file size of a pdf","compress a pdf to upload it"],split:["split a pdf into separate pages","extract specific pages from a pdf","break a pdf into parts","separate the pages of a pdf","take out a few pages from a pdf","divide a pdf into multiple files"],organize:["rearrange the pages of my pdf","delete pages from a pdf","reorder pdf pages","move pages around in a pdf","sort the pages of a document"],rotatepdf:["rotate the pages of my pdf","fix sideways pages in a pdf","turn a page ninety degrees","my pdf is upside down","change the orientation of pages"],cropresize:["crop the margins of a pdf","resize a pdf to a4","trim the white borders of a pdf","change the page size of a pdf","make pages letter size"],pdftozip:["put multiple pdfs into a zip","bundle pdfs into an archive","download several pdfs as a zip","package my pdf files together"],editpdftext:["edit the text inside a pdf","change the words in a pdf","sign a pdf document","add my signature to a pdf","fix a typo in a pdf","write on a pdf","fill out a pdf form"],redact:["black out sensitive text","hide private information in a pdf","permanently remove confidential text","censor parts of a pdf","redact personal data before sharing"],watermark:["add a watermark to my pdf","stamp confidential on every page","put my logo on a pdf","add a draft watermark","brand my document"],pagenumbers:["add page numbers to a pdf","number the pages of my document","insert pagination into a pdf"],headerfooter:["add a header and footer to a pdf","put text at the top of every page","add a running footer with the date"],flatten:["make my pdf non editable","lock a pdf so it cannot be changed","flatten the form fields of a pdf","make a pdf read only","prevent editing of a pdf"],invertpdf:["make my pdf dark mode","invert pdf colours for night reading","reduce eye strain reading a pdf","convert a pdf to a dark theme"],wordtopdf:["convert word to pdf","turn a docx into a pdf","save my word document as a pdf","change a doc into a pdf"],images:["convert images to pdf","make a pdf from photos","combine jpg images into a pdf","turn pictures into a pdf","convert png to pdf"],exceltopdf:["convert excel to pdf","turn a spreadsheet into a pdf","save an xlsx as a pdf"],pptxtopdf:["convert powerpoint to pdf","turn slides into a pdf","save a presentation as a pdf"],htmlpdf:["convert html to pdf","save a webpage as a pdf","turn a website into a pdf"],texttopdf:["create a new pdf from scratch","write a pdf document","make a pdf with formatted text","type something and export it as pdf"],markdownpdf:["convert markdown to pdf","turn a md file into a pdf","export a readme to pdf"],csvpdf:["convert csv to pdf","turn a csv into a pdf table","export tabular data to pdf"],audiotopdf:["transcribe audio to a pdf","convert a recording into a text pdf","turn voice notes into a pdf","make a transcript from an mp3"],ebooktopdf:["convert epub to pdf","turn an ebook into a pdf","change a kindle book into a pdf"],pdftodocx:["convert pdf to word","make a pdf editable in word","turn a pdf into a docx","export a pdf to a word document"],pdftojpg:["convert pdf to images","save pdf pages as jpg","turn a pdf into png images","export a pdf as a picture"],pdftoexcel:["extract tables from a pdf into excel","convert a pdf to a spreadsheet","get data from a pdf into xlsx"],pdftopptx:["convert pdf to powerpoint","turn a pdf into slides","make a presentation from a pdf"],extract:["extract text from a pdf","copy all the text out of a pdf","get the plain text of a pdf"],pdftohtml:["convert pdf to html","turn a pdf into a webpage"],pdftoadudio:["read my pdf aloud","listen to a pdf","convert a pdf to speech","text to speech for a pdf"],pdfttoepub:["convert pdf to epub","turn a pdf into an ebook","read a pdf on my kindle"],encryptpdf:["password protect a pdf","add a password to my pdf","encrypt a pdf","secure a pdf with a password","lock a pdf"],removepassword:["remove the password from a pdf","unlock a protected pdf","decrypt a pdf","open a locked pdf","i forgot my pdf password"],privacyscanner:["scan a pdf for personal data","find aadhaar or pan in a pdf","check a pdf for sensitive information","detect private info before sharing"],fingerprint:["generate a hash of a file","check the integrity of a file","get the sha256 checksum","verify a file has not changed"],chatpdf:["ask questions about my pdf","chat with a pdf using ai","talk to my document","get answers from a pdf"],summary:["summarize a pdf","give me a tldr of this document","get the key points of a pdf","shorten a long pdf"],ocr:["make a scanned pdf searchable","extract text from a scanned document","run ocr on an image pdf","recognize text in scanned pages"],compare:["compare two pdfs","see the difference between two pdfs","check what changed between versions","diff two documents"],repair:["fix a corrupted pdf","repair a broken pdf","my pdf will not open","recover a damaged pdf"],gstinvoice:["create a gst invoice","make a tax invoice with cgst and sgst","generate an indian gst bill"],posbill:["create a shop bill","point of sale billing for my store","print a thermal receipt","retail checkout bill"],gstfilingprep:["prepare a pdf for gst portal upload","compress a pdf under five mb for gst","split documents for gst filing"],p2pshare:["send a file to another browser","share a pdf without uploading","transfer a file directly","peer to peer file sharing"],whiteboard:["draw together in real time","collaborative whiteboard with a friend","shared drawing board"]};T.forEach(r=>{r.phrases=L[r.id]||[]});const F=new Set(["i","me","my","mine","we","our","us","you","your","yours","want","wants","wanting","wanted","wanna","need","needs","needed","would","will","shall","like","please","pls","plz","help","trying","try","how","what","whats","which","where","when","why","who","do","does","did","doing","can","could","should","must","may","to","too","the","a","an","and","or","of","for","with","into","in","on","at","from","by","this","that","these","those","there","it","its","is","are","am","was","were","be","been","being","have","has","had","get","getting","got","way","ways","some","any","all","im","ive","id","ill","lets","let","just","quick","quickly","easy","easily","online","free","simple","simply","now","then","so","if","as","about","want to","go","want a","wanna a","one","two","three","four","five","six","seven","eight","nine","ten","couple","few","several","multiple","many","both"]),A=new Set(["pdf","pdfs","file","files","document","documents"]);function P(r){return r.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(s=>s.length>0)}function R(r){return r.filter(s=>!F.has(s)&&!A.has(s)&&!/^\d+$/.test(s))}function O(r,s){const d=r.length,i=s.length;if(d===0)return i;if(i===0)return d;const a=Array.from({length:d+1},(o,c)=>[c]);for(let o=1;o<=i;o++)a[0][o]=o;for(let o=1;o<=d;o++)for(let c=1;c<=i;c++)a[o][c]=r[o-1]===s[c-1]?a[o-1][c-1]:1+Math.min(a[o-1][c],a[o][c-1],a[o-1][c-1]);return a[d][i]}function j(r,s){if(s.includes(r))return 1;if(r.includes(s))return .95;const d=O(r,s),i=Math.max(r.length,s.length);return i===0?1:1-d/i}function z(r,s){if(r.includes(s))return!0;if(s.length>=4){for(const d of r)if(d.length>=4&&j(d,s)>=.8)return!0}return!1}function G(r,s,d,i){let a=0;const o=i.toLowerCase().trim(),c=d.join(" "),x=r.title.toLowerCase(),g=r.desc.toLowerCase(),v=r.category.toLowerCase();if(x===o)return 1e4;o.length>=3&&x.includes(o)&&(a+=240),o.includes(x)&&(a+=150),o.length>=4&&g.includes(o)&&(a+=70),o.length>=4&&v.includes(o)&&(a+=40);for(const n of r.synonyms){const h=n.includes(" ");if(n===o){a+=320;continue}if((n.length>=4||h)&&o.includes(n)){a+=175;continue}if((n.length>=4||h)&&c&&c.includes(n)){a+=150;continue}if(o.length>=4&&n.includes(o)){a+=90;continue}const l=P(n).filter(f=>!F.has(f));if(l.length){let f=0;for(const p of l)z(d,p)&&f++;if(f){const p=f/l.length;a+=f*24+(p===1?45:0)}}}for(const n of r.phrases||[]){const h=n.toLowerCase();if(o.includes(h)){a+=450;continue}if(o.length>=5&&h.includes(o)){a+=320;continue}const l=P(h).filter(p=>!F.has(p)&&!A.has(p)&&!/^\d+$/.test(p));if(!l.length||!d.length)continue;let f=0;for(const p of l)z(d,p)&&f++;if(f){const p=f/l.length,y=f/d.length;a+=f*30+p*80+y*120,p>=.6&&y>=.6&&(a+=130)}}for(const n of d){if(n.length<2)continue;x.includes(n)&&(a+=46),g.includes(n)&&(a+=18),v.includes(n)&&(a+=14);for(const l of r.synonyms){if(l.includes(n)){a+=30;break}const f=P(l);let p=!1;for(const y of f){if(y===n){a+=40,p=!0;break}if(y.length>=4&&n.length>=4&&j(n,y)>=.85){a+=24,p=!0;break}}if(p)break}const h=P(x);for(const l of h){if(l===n){a+=42;break}if(l.length>=4&&n.length>=4&&j(n,l)>=.82){a+=22;break}}}return a}function B(r,s){if(!s.toLowerCase().trim())return r;const i=P(s);if(i.length===0)return r;const a=R(i),o=r.map(g=>({tool:g,score:G(g,i,a,s)})),c=28,x=o.filter(g=>g.score>=c).sort((g,v)=>v.score-g.score);return x.length===0&&a.length===0?r:x.map(g=>g.tool)}const S=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M5 3L9 7L5 11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),N=()=>e.jsxs("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",children:[e.jsx("circle",{cx:"7.5",cy:"7.5",r:"5.5",stroke:"currentColor",strokeWidth:"1.6"}),e.jsx("path",{d:"M11.5 11.5L15 15",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})]}),W=()=>e.jsx("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",children:e.jsx("path",{d:"M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"})}),q=({tools:r,onSelectTool:s,onClose:d})=>{const[i,a]=u.useState(""),[o,c]=u.useState(0),[x]=u.useState(()=>{try{return JSON.parse(localStorage.getItem("ihp_recents")||"[]").slice(0,5)}catch{return[]}}),g=u.useRef(null),v=u.useRef(null),n=u.useRef({}),h=u.useMemo(()=>T.map(t=>{const m=r?.find(b=>b.id===t.id);return{...t,icon:m?.icon||null}}),[r]),l=u.useMemo(()=>B(h,i),[i,h]),f=u.useMemo(()=>{if(i.trim())return null;const t={};return h.forEach(m=>{t[m.category]||(t[m.category]=[]),t[m.category].push(m)}),t},[i,h]),p=u.useMemo(()=>i.trim()?l:f?Object.values(f).flat():h,[i,l,f,h]);u.useEffect(()=>{c(0)},[i]),u.useEffect(()=>{const t=n.current[o];t&&t.scrollIntoView({block:"nearest",behavior:"smooth"})},[o]),u.useEffect(()=>{const t=setTimeout(()=>g.current?.focus(),50);return()=>clearTimeout(t)},[]);const y=u.useCallback(t=>{try{const m=JSON.parse(localStorage.getItem("ihp_recents")||"[]"),b=[t,...m.filter(w=>w!==t)].slice(0,5);localStorage.setItem("ihp_recents",JSON.stringify(b))}catch{}s(t),d()},[s,d]),E=u.useCallback(t=>{t.key==="ArrowDown"?(t.preventDefault(),c(m=>Math.min(m+1,p.length-1))):t.key==="ArrowUp"?(t.preventDefault(),c(m=>Math.max(m-1,0))):t.key==="Enter"?(t.preventDefault(),p[o]&&y(p[o].id)):t.key==="Escape"&&(t.preventDefault(),d())},[p,o,y,d]),C=t=>{if(!t.icon)return e.jsx("span",{style:{fontSize:"13px",color:"#71717a",fontFamily:"inherit",fontWeight:600},children:t.title.slice(0,2).toUpperCase()});const m=t.icon;return e.jsx(m,{style:{width:16,height:16}})};let D=-1;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
      .tsp-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgba(0,0,0,0.72);
  backdrop-filter: blur(18px) saturate(0.8);
  -webkit-backdrop-filter: blur(18px) saturate(0.8);
  padding: 12px 16px;
  padding-top: max(12px, env(safe-area-inset-top));
  animation: tsp-overlay-in 0.18s ease;
}
        @keyframes tsp-overlay-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
       .tsp-shell {
  font-family: inherit;
  width: 100%;
  max-width: 640px;
  background: #111111;
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: auto;
  max-height: 75dvh;
  animation: tsp-shell-in 0.22s cubic-bezier(0.32, 0.72, 0, 1);
  box-shadow: 0 0 0 1px rgba(255,255,255,0.04), 0 32px 80px rgba(0,0,0,0.9);
}
       @media (min-width: 600px) {
  .tsp-overlay {
    padding: 80px 20px 40px;
  }
  .tsp-shell {
    max-height: 78dvh;
  }
}
        @keyframes tsp-shell-in {
          from { opacity: 0; transform: scale(0.96) translateY(6px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .tsp-search-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 18px;
          height: 58px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        @media (min-width: 600px) {
          .tsp-search-bar { height: 62px; padding: 0 20px; }
        }
        .tsp-search-icon { color: #555; flex-shrink: 0; }
        .tsp-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #f5f5f5;
          font-size: 15.5px;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: inherit;
          caret-color: #fff;
        }
        @media (min-width: 600px) {
          .tsp-input { font-size: 16px; }
        }
        .tsp-input::placeholder { color: #444; }
        .tsp-clear {
          width: 24px; height: 24px; border-radius: 50%;
          background: rgba(255,255,255,0.08);
          border: none; cursor: pointer; display: flex;
          align-items: center; justify-content: center;
          color: #777; transition: background 0.15s, color 0.15s;
          flex-shrink: 0;
        }
        .tsp-clear:hover { background: rgba(255,255,255,0.14); color: #ccc; }
        .tsp-esc {
          display: none;
          align-items: center; gap: 4px; cursor: pointer; border: none;
          background: transparent; padding: 0;
        }
        @media (min-width: 600px) {
          .tsp-esc { display: flex; }
        }
        .tsp-esc-key {
          background: rgba(255,255,255,0.08);
          color: #555; font-size: 10px; font-family: inherit;
          font-weight: 600; letter-spacing: 0.04em;
          border-radius: 5px; padding: 3px 7px;
          border: 1px solid rgba(255,255,255,0.06);
          line-height: 1.4;
        }
        .tsp-esc-label { color: #444; font-size: 11.5px; white-space: nowrap; }
        .tsp-list {
          flex: 1; overflow-y: auto; overflow-x: hidden;
          padding: 6px 0 env(safe-area-inset-bottom);
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .tsp-list::-webkit-scrollbar { width: 4px; }
        .tsp-list::-webkit-scrollbar-track { background: transparent; }
        .tsp-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 2px; }
        .tsp-section-header {
          padding: 16px 20px 6px;
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.09em; text-transform: uppercase;
          color: #444;
        }
        .tsp-item {
          display: flex; align-items: center; gap: 13px;
          padding: 10px 14px;
          margin: 0 6px;
          cursor: pointer;
          border-radius: 10px;
          transition: background 0.1s;
          border: 1px solid transparent;
          position: relative;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
        @media (min-width: 600px) {
          .tsp-item { padding: 9px 14px; margin: 0 8px; }
        }
        .tsp-item:active { background: rgba(255,255,255,0.05) !important; }
        .tsp-item-active {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.07);
        }
       .tsp-icon-wrap {
  width: 34px; height: 34px; border-radius: 8px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.07);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0; color: #888;
  transition: background 0.1s, color 0.1s;
}
.tsp-icon-wrap svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}
        .tsp-item-active .tsp-icon-wrap { background: rgba(255,255,255,0.1); color: #e5e5e5; }
        @media (min-width: 600px) {
          .tsp-icon-wrap { width: 32px; height: 32px; }
        }
        .tsp-text { flex: 1; min-width: 0; }
        .tsp-title {
          font-size: 14px; font-weight: 500; color: #ccc;
          letter-spacing: -0.01em; white-space: nowrap;
          overflow: hidden; text-overflow: ellipsis;
          transition: color 0.1s;
          line-height: 1.3;
        }
        .tsp-item-active .tsp-title { color: #f5f5f5; }
        .tsp-desc {
          font-size: 11.5px; color: #555; margin-top: 1px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          line-height: 1.35;
        }
        .tsp-item-active .tsp-desc { color: #666; }
        .tsp-chevron { color: #333; flex-shrink: 0; transition: color 0.1s; }
        .tsp-item-active .tsp-chevron { color: #666; }
        .tsp-empty {
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 60px 24px;
          gap: 10px;
        }
        .tsp-empty-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          display: flex; align-items: center; justify-content: center;
          color: #444;
          margin-bottom: 4px;
        }
        .tsp-empty-title { color: #555; font-size: 14px; font-weight: 500; }
        .tsp-empty-sub { color: #333; font-size: 12px; text-align: center; line-height: 1.5; }
        .tsp-footer {
          display: none;
          align-items: center; justify-content: space-between;
          padding: 10px 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        @media (min-width: 600px) { .tsp-footer { display: flex; } }
        .tsp-shortcuts { display: flex; align-items: center; gap: 14px; }
        .tsp-shortcut { display: flex; align-items: center; gap: 5px; }
        .tsp-kbd {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 5px; padding: 2px 6px;
          font-family: inherit; font-size: 10px;
          color: #555; font-weight: 600;
          letter-spacing: 0.03em; line-height: 1.5;
        }
        .tsp-kbd-label { color: #3a3a3a; font-size: 11px; }
        .tsp-result-count {
          font-size: 11px; color: #333; font-variant-numeric: tabular-nums;
        }
        .tsp-divider {
          height: 1px; background: rgba(255,255,255,0.05);
          margin: 4px 14px;
        }
        .tsp-mobile-handle { display: none; }
        .tsp-category-pill {
          font-size: 10px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: #3a3a3a;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 4px; padding: 1px 6px; margin-left: 6px;
          flex-shrink: 0;
        }
      `}),e.jsx("div",{className:"tsp-overlay",onClick:d,children:e.jsxs("div",{className:"tsp-shell",onClick:t=>t.stopPropagation(),children:[e.jsx("div",{className:"tsp-mobile-handle",children:e.jsx("div",{className:"tsp-mobile-handle-bar"})}),e.jsxs("div",{className:"tsp-search-bar",children:[e.jsx("div",{className:"tsp-search-icon",children:e.jsx(N,{})}),e.jsx("input",{ref:g,className:"tsp-input",value:i,onChange:t=>a(t.target.value),onKeyDown:E,placeholder:"Search tools or describe what you need…",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1}),i?e.jsx("button",{className:"tsp-clear",onClick:()=>{a(""),g.current?.focus()},"aria-label":"Clear",children:e.jsx(W,{})}):e.jsx("button",{className:"tsp-esc",onClick:d,"aria-label":"Close",children:e.jsx("span",{className:"tsp-esc-key",children:"ESC"})})]}),e.jsx("div",{className:"tsp-list",ref:v,children:p.length===0?e.jsxs("div",{className:"tsp-empty",children:[e.jsx("div",{className:"tsp-empty-icon",children:e.jsx(N,{})}),e.jsx("p",{className:"tsp-empty-title",children:"No tools found"}),e.jsx("p",{className:"tsp-empty-sub",children:'Try different keywords like "combine", "shrink", "sign" or "scan"'})]}):i.trim()?l.map((t,m)=>{D++;const b=D,w=o===b;return e.jsxs("div",{ref:k=>{n.current[b]=k},className:`tsp-item${w?" tsp-item-active":""}`,onClick:()=>y(t.id),onMouseEnter:()=>c(b),children:[e.jsx("div",{className:"tsp-icon-wrap",children:C(t)}),e.jsxs("div",{className:"tsp-text",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsx("div",{className:"tsp-title",children:t.title}),e.jsx("span",{className:"tsp-category-pill",children:t.category})]}),e.jsx("div",{className:"tsp-desc",children:t.desc})]}),e.jsx("div",{className:"tsp-chevron",children:e.jsx(S,{})})]},t.id)}):Object.entries(f||{}).map(([t,m],b)=>e.jsxs("div",{children:[b>0&&e.jsx("div",{className:"tsp-divider"}),e.jsx("div",{className:"tsp-section-header",children:t}),m.map(w=>{D++;const k=D,M=o===k;return e.jsxs("div",{ref:I=>{n.current[k]=I},className:`tsp-item${M?" tsp-item-active":""}`,onClick:()=>y(w.id),onMouseEnter:()=>c(k),children:[e.jsx("div",{className:"tsp-icon-wrap",children:C(w)}),e.jsxs("div",{className:"tsp-text",children:[e.jsx("div",{className:"tsp-title",children:w.title}),e.jsx("div",{className:"tsp-desc",children:w.desc})]}),e.jsx("div",{className:"tsp-chevron",children:e.jsx(S,{})})]},w.id)})]},t))}),e.jsxs("div",{className:"tsp-footer",children:[e.jsxs("div",{className:"tsp-shortcuts",children:[e.jsxs("div",{className:"tsp-shortcut",children:[e.jsx("span",{className:"tsp-kbd",children:"↑↓"}),e.jsx("span",{className:"tsp-kbd-label",children:"Navigate"})]}),e.jsxs("div",{className:"tsp-shortcut",children:[e.jsx("span",{className:"tsp-kbd",children:"↵"}),e.jsx("span",{className:"tsp-kbd-label",children:"Select"})]}),e.jsxs("div",{className:"tsp-shortcut",children:[e.jsx("span",{className:"tsp-kbd",children:"ESC"}),e.jsx("span",{className:"tsp-kbd-label",children:"Close"})]})]}),i.trim()&&e.jsxs("span",{className:"tsp-result-count",children:[l.length," result",l.length!==1?"s":""]})]})]})})]})};export{q as default};
