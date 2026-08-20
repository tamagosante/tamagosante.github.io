import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{d as t}from"./forms-CI8_RRjb.js";import{Bt as n}from"./radix-ui-C8Se2y1c.js";import"./logService-CQM1g_5B.js";import"./utils-Cm2GyVkP.js";import"./globalStore-Ba1-GtLJ.js";import{I as r,Ra as i,Ri as a,ka as o,lo as s,sa as c,tn as l}from"./icons-DcmmbT62.js";import"./use-mobile-D8inaGCB.js";import{t as u}from"./button-CNwkKyGm.js";import"./input-Da1xeAta.js";import"./tooltip-BIpGbgaa.js";import"./AudioPanel-YLA4dPtL.js";import"./simple-popover-OjTaYWSJ.js";import"./ChunksPanel-CJmWw7ui.js";import"./label-Df9NoWUT.js";import"./switch-BYRDi5PV.js";import"./DraggablePopover-B4ec0NB7.js";import"./select-B9wKpyBO.js";import"./checkbox-Cbmcccc-.js";import"./badge-d7RN2Zf4.js";import"./popover-C-Iyoi82.js";import"./ConfigurableButton-fBgnx1tk.js";import"./card-BE24rvio.js";import"./dropdown-menu-BS4trEEm.js";import"./split-button-DWoSeMLo.js";import"./pythonTranscribeApiService-D0T4zkRa.js";import"./language.types-D6VYkBXK.js";import"./slider-CFdfkaZW.js";import"./diContainer-bBJ9ntOG.js";import"./OllamaApi-Cn9JEFzq.js";import"./WaveformVisualizer-C3oXbg1J.js";import"./CanvasStateV2-C-us0TBQ.js";import"./canvasConstantsV2-Dmm71p_T.js";import"./CanvasConfigurationV2-DFoWeH3k.js";import"./CanvasApiClient-CMDNpMd2.js";import"./highlightPalette-B3Tdrb8O.js";import"./font-gallery-constants-DSZdJwin.js";import"./liveCounterConfig-B57ubENg.js";import"./file-explorer-constants-DkGaQBIG.js";import"./pinyin-audio-constants-CqIqRYoT.js";import"./apiSyncActions-BDkeS_Nn.js";import"./markdown-constants-CDqONpTJ.js";import"./markdownToHtml-B3Pt03-8.js";import"./aniterms-avatars-B0-sa6VH.js";import"./loopyPresets-BVrXWtj_.js";import"./smartTimeExtractionUtils-DTLqRZ4z.js";import"./AudioButton-Byj-q35-.js";import"./markdownUtils-Cayi_9cX.js";import"./typescript-BXd4BHpq.js";import"./fenceLanguages-B1i_TJl9.js";/* empty css                           */import{t as d}from"./MarkdownTextarea-BHyKNb_D.js";import"./analyze-CS9tziqF.js";import{s as f}from"./useMarkdownV2-0tawLXJE.js";import{t as p}from"./setCursorPosition-C9jQzJkW.js";import"./MobileLogClient-Bcv_BAFj.js";import"./markdownDebugLogger-BgpYTSn9.js";import"./liveReplacementSettings-Dxq0MY7e.js";import"./HighlightedText-BoxA2OII.js";import"./SlashCommandMenu-C1iuYl6o.js";import{Hi as m}from"./index-CLM4l6gr.js";import{t as h}from"./UiButtonWithExpandOption-DRQ-6d_6.js";import{n as g,t as _}from"./DictionaryTermPopover-DANH39ZL.js";import{n as v,r as y,t as b}from"./DebugHistoryCard-DuikwuNM.js";var x=e(t(),1),S=[{term:`Photosynthesis`,definition:`The process by which green plants convert light energy into chemical energy stored as glucose.`},{term:`Mitochondria`,definition:`The organelle that generates most of a cell's ATP — its 'powerhouse'.`},{term:`Osmosis`,definition:`Net movement of a solvent across a semipermeable membrane toward higher solute concentration.`},{term:`Diffusion`,definition:`Net movement of particles from a region of higher concentration to one of lower concentration.`}];function C(e){return e.trim().toLowerCase()}var w=new Map(S.map(e=>[C(e.term),e])),T=e=>w.get(C(e)),E=n(),D=(0,x.createContext)(!0),O=(0,x.createContext)(()=>{}),k=(0,x.createContext)(()=>{}),A=(0,x.createContext)(null),j=(0,x.createContext)(null),M={"A1-h1":`# Hello`,"A2-h2":`## Hello`,"A3-h3":`### Hello`,"A4-blockquote":`> Quote`,"A5-hr":`---`,"B1-ul-single":`- item`,"B2-ul-multiple":`- one
- two`,"B3-ol-single":`1. item`,"B4-ol-multiple":`1. one
2. two`,"B5-ol-large":`10. item`,"C1-bold":`**bold**`,"C2-italic":`*italic*`,"C3-code":"`code`","C4-strike":`~~strike~~`,"C5-mixed":`**bold** and *italic*`,"C6-double":`**one** **two**`,"CF1-simple":"```\nhello\n```","CF2-lang":"```python\nx = 1\n```","CF3-list-trap":"```\n1. not a list\n- not a list\n```","CF4-empty-body":"```\n\n```","CF5-multiline":"```\nline1\nline2\nline3\n```","CF6-surrounded":"before\n```\ncode\n```\nafter","CF7-heading-trap":"```\n# not a heading\n> not a quote\n```","CF8-gentle":`A Gentle Introduction to Fntents

\`\`\`
Preface                                                                        3
1  Literal Meaning                                                             59
\`\`\`

[1]`,"CF9-ts":'```ts\nconst greet = (name: string) => `hi ${name}`;\ngreet("world");\n```',"CF10-tsx":'```tsx\nfunction Badge() {\n  return <span className="b">{42}</span>;\n}\n```',"CF11-diff":"```diff\n- type Outcome = 'Toggled' | 'Unchanged'\n+ type Outcome = 'Toggled' | 'Unchanged' | 'AtMax'\n```","D1-single":`line1
line2`,"D2-blank":`line1

line2`,"D3-multi":`line1


line2`,"E1-simple":`| A | B |
| - | - |
| 1 | 2 |`,"E2-bold":`| **A** | B |
| - | - |
| 1 | 2 |`,"E3-italic":`| *A* | B |
| - | - |
| 1 | 2 |`,"E4-multi":`| **A** | *B* |
| - | - |
| \`1\` | 2 |`,"F1-h+p":`# Header
Paragraph`,"F2-h+ul":`## H2
- item`,"F3-q+ul":`> Quote
- item`,"F4-ul+h":`- item
## Header`,"G1-h-bold":`# **Bold Header**`,"G2-ul-bold":`- **bold item**`,"G3-q-bold":`> **bold quote**`,"H1-txt+tbl":`Text
| A | B |
| - | - |
| 1 | 2 |`,"H2-tbl+txt":`| A | B |
| - | - |
| 1 | 2 |
Text`,"H3-h+tbl":`## Header
| A | B |
| - | - |
| 1 | 2 |`,"H4-tbl+ul":`| A | B |
| - | - |
| 1 | 2 |
- item`,"H5-b+tbl":`**bold**
| A | B |
| - | - |
| 1 | 2 |`,"H6-fmt-tbl":`| **A** | B |
| - | - |
| 1 | 2 |
- item`,"I1-h+tbl+ul":`## H
| A | B |
| - | - |
| 1 | 2 |
- item`,"I2-fmt-tbl":`## H
| **A** | B |
| - | - |
| 1 | 2 |
- item`,"I3-b+tbl+ul":`**bold**
| A | B |
| - | - |
| 1 | 2 |
- item`,"J1-tbl+h+ul":`| **A** | B |
| - | - |
| 1 | 2 |
# Header
- hello`,"J2-tbl+h+p":`| **A** | B |
| - | - |
| 1 | 2 |
# Header
paragraph`,"J3-tbl+h2+ul":`| *A* | B |
| - | - |
| 1 | 2 |
## Header
- item one
- item two`,"K1-link":`[(1) Datenschutz](https://dsgvo-gesetz.de/nr-1/)`,"K2-link-long":`[(1) Datenschutz als Grundrecht](https://dsgvo-gesetz.de/erwaegungsgruende/nr-1/)`,"K3-link-bold":`**[Bold Link](https://example.com)**`,"K4-link-italic":`*[Italic Link](https://example.com)*`,"K5-txt+link":`See [this link](https://example.com) for info`,"K6-multi-link":`[One](https://example.com/one) and [Two](https://example.com/two)`,"L1-h+link":`## Header
[Click here](https://example.com)`,"L2-ul+link":`- [Link item](https://example.com)
- normal item`,"L3-ol+link":`1. [First](https://example.com/first)
2. [Second](https://example.com/second)`,"L4-q+link":`> Quote with [link](https://example.com)`,"L5-link+tbl":`[Link](https://example.com)
| A | B |
| - | - |
| 1 | 2 |`,"L6-tbl+link":`| A | B |
| - | - |
| 1 | 2 |
[After table](https://example.com)`,"M1-tbl-link":`| [A](https://example.com) | B |
| - | - |
| 1 | 2 |`,"M2-tbl-multi":`| [A](https://example.com/a) | [B](https://example.com/b) |
| - | - |
| [1](https://example.com/1) | 2 |`,"M3-tbl-bold-link":`| **[Bold](https://example.com)** | B |
| - | - |
| 1 | 2 |`,"W1-wiki-simple":`[[Node Title]]`,"W2-wiki-text":`See [[My Note]] for details`,"W3-wiki-bold":`**[[Bold Link]]**`,"W4-wiki-italic":`*[[Italic Link]]*`,"W5-wiki-multi":`[[One]] and [[Two]]`,"W6-wiki-list":`- [[First Item]]
- [[Second Item]]`,"W7-wiki-mixed":`[[Wiki Link]] and [Regular](https://example.com)`,"W8-wiki-table":`| [[A]] | B |
| - | - |
| 1 | 2 |`,"DT1-simple":`{{Photosynthesis}}`,"DT2-in-text":`Plants live by {{Photosynthesis}} every day.`,"DT3-bold":`**{{Mitochondria}}**`,"DT4-multi":`{{Osmosis}} and {{Diffusion}}`,"DT5-list":`- {{Photosynthesis}}
- {{Osmosis}}`,"DT6-case-insensitive":`{{photosynthesis}}`,"DT7-unknown":`{{Quasar}}`,"BC35-full":`## **Estimation** of **User** **Support**
| **Category** | **Count** |
| - | - |
| Active | 10 |
| **Idle** | 5 |
- Idle Users`,"T1-empty":``,"T2-one-line":`one`,"T3-two-lines":`one
two`,"T4-three-lines":`one
two
three`,"T5-trailing-newline":`one
`,"T6-double-newline":`one

two`,"TD1-unchecked":`- [ ] buy milk`,"TD2-checked":`- [x] finished task`,"TD3-mixed":`- [ ] open
- [x] done`,"TD4-with-format":`- [ ] **bold** task with *italic*`,"TD5-empty-content":`- [ ] `,"TD6-multi-open":`- [ ] first
- [ ] second
- [ ] third`,"TD7-nested-indent":`- [ ] top
  - [ ] nested`,"TD8-mixed-with-ul":`- [ ] task
- regular item`,"TM1-tag":`#feature`,"TM2-tag-multi":`#bug-fix and #enhancement`,"TM3-mention":`@john`,"TM4-mention-multi":`@alice and @bob`,"TM5-tag-mention":`#task for @developer`,"TM6-tag-bold":`**#important**`,"TM7-mention-list":`- @team-lead
- @developer`,"TM8-tag-table":`| #status | Owner |
| - | - |
| #done | @john |`,"IME1-empty":``,"IME2-partial":`Xin `,"IME3-mid-word":`Hello thế`,"IME4-with-format":`**Việt Nam**`,"IME5-list-item":`- Xin chào`,"IME6-after-enter":`Line 1
`,"IME7-multi-line":`Dòng một
Dòng hai`,"IME8-mixed":`Hello **Việt Nam** world`,"IME9-table-cell":`| Tên | Tuổi |
| - | - |
| Nam | 25 |`,"IME10-header":`## Tiêu đề`};function N({id:e,initialValue:t}){let[n,r]=(0,x.useState)(t),i=(0,x.useContext)(D),a=(0,x.useContext)(O),o=(0,x.useContext)(k),s=(0,x.useContext)(A),c=(0,x.useContext)(j),l=(0,x.useRef)(null),u=(0,x.useRef)(n);u.current=n;let[p,m]=(0,x.useState)(null);(0,x.useEffect)(()=>{if(c?.current)return c.current.set(e,r),()=>{c.current?.delete(e)}},[e,c]);let h=(0,x.useCallback)(e=>{s?.current||m(e)},[s]),g=(0,x.useRef)(i);g.current!==i&&(g.current=i,m(null));let _=p??(i?`preview`:`raw`),v=(0,x.useRef)(_);v.current=_;let y=n.split(`
`).length,b=e.startsWith(`BC35`),S=e.startsWith(`I`)||e.startsWith(`J`),C=b?280:S?200:y<=1?48:y<=2?64:y<=4?100:y<=6?140:180,w=(0,x.useCallback)(()=>{let e=window.getSelection();if(!e||!l.current)return null;let t=l.current.querySelector(`[contenteditable]`);if(!t||!t.contains(e.anchorNode))return null;let n=e.getRangeAt(0),r=n.cloneRange();r.selectNodeContents(t),r.setEnd(n.startContainer,n.startOffset);let i=r.toString().length,{cursorPos:a}=f(t),o=u.current,s=o.substring(0,Math.min(a,o.length)).split(`
`);return{line:s.length,column:s[s.length-1].length+1,position:i,markdownPosition:a,content:o,cursorContext:`${o.substring(Math.max(0,a-10),a)}{|}${o.substring(a,Math.min(o.length,a+10))}`.replace(/\n/g,`↵`)}},[]),T=(0,x.useCallback)(()=>{if(!l.current)return;let e=l.current.querySelector(`[contenteditable]`);if(!e)return;let t=window.getSelection();if(!t||t.rangeCount===0)return e.innerHTML;let n=t.getRangeAt(0);if(!e.contains(n.startContainer))return e.innerHTML;let r=n.startContainer,i=n.startOffset,a=n.endContainer,o=n.endOffset,s=n.collapsed,c=document.createTextNode(`�`);n.insertNode(c);let u=e.innerHTML;c.remove();let d=document.createRange();try{d.setStart(r,i),s?d.collapse(!0):d.setEnd(a,o),t.removeAllRanges(),t.addRange(d)}catch{}return u},[]),M=(0,x.useCallback)(()=>{let t=w();t&&(a({id:e,...t,value:t.content,mode:v.current}),o({timestamp:Date.now(),type:`click`,textareaId:e,line:t.line,column:t.column,position:t.position,markdownPosition:t.markdownPosition,content:t.content,cursorContext:t.cursorContext,mode:v.current,innerHTML:T()}))},[e,w,a,o,T]),N=(0,x.useRef)([]),P=(0,x.useCallback)(t=>{let n=t.key,r=Date.now(),i=w()?.markdownPosition??0;N.current.push({key:n,timestamp:r,positionBefore:i}),requestAnimationFrame(()=>{let t=N.current;N.current=[];let n=w();n&&t.forEach((r,i)=>{let s=t.length-1-i,c=n.markdownPosition-s,l=n.content.slice(0,-s)||n.content;a({id:e,...n,value:n.content,mode:v.current}),o({timestamp:r.timestamp,type:`keystroke`,textareaId:e,line:n.line,column:n.column-s,position:n.position-s,markdownPosition:c,content:i===t.length-1?n.content:l,cursorContext:n.cursorContext,key:r.key,mode:v.current,innerHTML:i===t.length-1?T():void 0})})})},[e,w,a,o,T]);return(0,E.jsxs)(`div`,{ref:l,className:`test-cell flex flex-col border border-border rounded overflow-hidden bg-card`,"data-test":`test-cell-${e}`,onKeyDown:P,children:[(0,E.jsxs)(`div`,{className:`cell-header px-1.5 py-0.5 bg-muted border-b border-border flex items-center justify-between`,children:[(0,E.jsx)(`span`,{className:`text-[10px] font-mono font-medium text-muted-foreground truncate`,children:e}),(0,E.jsxs)(`span`,{className:`text-[9px] text-muted-foreground/60`,children:[n.length,`ch`]})]}),(0,E.jsx)(`div`,{className:`cell-content [&_.markdown-textarea]:!min-h-0 [&_.markdown-textarea]:!p-1`,style:{height:C},onClick:M,children:(0,E.jsx)(d,{value:n,onChange:r,className:`h-full text-xs`,mode:_,onModeChange:h,showHints:!1,"data-test":`textarea-${e}`})})]})}function P(){let[e,t]=(0,x.useState)(!0),[n,d]=(0,x.useState)(null),[f,S]=(0,x.useState)(!1),[C,w]=(0,x.useState)([]),[P,F]=(0,x.useState)(void 0),[I,L]=(0,x.useState)(()=>v().lastTextareaId??null),[R,z]=(0,x.useState)(()=>v().textareaHistory??[]),[B,V]=(0,x.useState)(0),H=(0,x.useRef)(!1),U=(0,x.useRef)(new Map),W=(0,x.useCallback)((e,t,n)=>{z(r=>{let i=r.filter(t=>t.textareaId!==e),a=[{textareaId:e,firstEvent:t,fullHistory:n},...i].slice(0,20);return y({...v(),lastTextareaId:e,textareaHistory:a}),a})},[]);(0,x.useEffect)(()=>{let e=v(),t=e.lastTextareaId,n=(e.textareaHistory??[]).find(e=>e.textareaId===t);if(t&&n?.firstEvent){w(n.fullHistory??[n.firstEvent]);let e=M[n.textareaId];F(n.firstEvent.type===`click`?n.firstEvent.content:e),setTimeout(()=>{let e=document.querySelector(`[data-test="test-cell-${t}"]`);if(e){e.scrollIntoView({behavior:`smooth`,block:`center`});let t=e.querySelector(`[contenteditable="true"]`);t&&(t.focus(),p(t,n.firstEvent.markdownPosition))}},100)}},[]);let G=(0,x.useCallback)((e,t)=>{if(t.type===`keystroke`||e.length===0)return!1;let n=e[e.length-1];return n.markdownPosition===t.markdownPosition&&n.content===t.content},[]),K=(0,x.useCallback)(e=>{H.current||L(t=>{if(t!==null&&t!==e.textareaId){w([e]);let t=M[e.textareaId];F(e.type===`click`?e.content:t),W(e.textareaId,e,[e])}else w(t=>{if(G(t,e))return t;if(t.length===0){let t=M[e.textareaId];F(e.type===`click`?e.content:t),W(e.textareaId,e,[e])}return[...t,e]});return e.textareaId})},[W,G,!1]);(0,x.useEffect)(()=>{if(I&&C.length>0){let e=C[0];W(I,e,C)}},[C,I,W]);let q=(0,x.useCallback)(()=>{w([]),F(void 0),I&&z(e=>{let t=e.map(e=>e.textareaId===I?{...e,fullHistory:[]}:e);return y({...v(),textareaHistory:t}),t})},[I]),J=(0,x.useCallback)(()=>{V(e=>e+1),d(null),w([]),L(null)},[]),Y=(0,x.useCallback)(e=>{let t=document.querySelector(`[data-test="test-cell-${e}"]`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),t.classList.add(`ring-2`,`ring-primary`,`ring-offset-2`),t.querySelector(`[contenteditable="true"]`)?.focus(),setTimeout(()=>{t.classList.remove(`ring-2`,`ring-primary`,`ring-offset-2`)},1500))},[]),X=(0,x.useCallback)(e=>{let t=document.querySelector(`[data-test="test-cell-${e.textareaId}"]`);if(!t)return;t.scrollIntoView({behavior:`smooth`,block:`center`}),t.classList.add(`ring-2`,`ring-primary`,`ring-offset-2`);let n=e.fullHistory??[e.firstEvent];w(n);let r=M[e.textareaId];F(e.firstEvent.type===`click`?e.firstEvent.content:r);let i=n[n.length-1],a=U.current.get(e.textareaId);a&&a(i.content),requestAnimationFrame(()=>{let e=t.querySelector(`[contenteditable="true"]`);e&&(e.focus(),p(e,i.markdownPosition))}),setTimeout(()=>{t.classList.remove(`ring-2`,`ring-primary`,`ring-offset-2`)},1500),L(e.textareaId),W(e.textareaId,e.firstEvent,n)},[W]),Z=(0,x.useCallback)(()=>{z([]),y({...v(),textareaHistory:[]})},[]),ee=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Markdown Test Extended`}],te=(0,x.useCallback)(()=>{if(!n)return;let e=`ID: ${n.id}
Mode: ${n.mode}
Position: ${n.position}
Line: ${n.line}, Column: ${n.column}
Value: \`${n.value.replace(/\n/g,`\\n`)}\``;navigator.clipboard.writeText(e),S(!0),setTimeout(()=>S(!1),1500)},[n]),Q=Object.entries(M),$=(0,x.useRef)(null),ne=g($,T,!0),re={"A: Headers":Q.filter(([e])=>e.startsWith(`A`)),"B: Lists":Q.filter(([e])=>e.startsWith(`B`)&&!e.startsWith(`BC`)),"C: Format":Q.filter(([e])=>e.startsWith(`C`)&&!e.startsWith(`CF`)),"CF: Code Fences":Q.filter(([e])=>e.startsWith(`CF`)),"D: Newlines":Q.filter(([e])=>e.startsWith(`D`)&&!e.startsWith(`DT`)),"E: Tables":Q.filter(([e])=>e.startsWith(`E`)),"F: Block+Block":Q.filter(([e])=>e.startsWith(`F`)),"G: Block+Fmt":Q.filter(([e])=>e.startsWith(`G`)),"H: Table+":Q.filter(([e])=>e.startsWith(`H`)),"I: Combined":Q.filter(([e])=>e.startsWith(`I`)),"J: Table First":Q.filter(([e])=>e.startsWith(`J`)),"K: Links":Q.filter(([e])=>e.startsWith(`K`)),"L: Link+Block":Q.filter(([e])=>e.startsWith(`L`)),"M: Link+Table":Q.filter(([e])=>e.startsWith(`M`)),"W: Wiki-Links":Q.filter(([e])=>e.startsWith(`W`)),"DT: Dictionary {{term}}":Q.filter(([e])=>e.startsWith(`DT`)),"T: Typing":Q.filter(([e])=>e.startsWith(`T`)&&!e.startsWith(`TD`)),"TD: Todo":Q.filter(([e])=>e.startsWith(`TD`)),"BC-35":Q.filter(([e])=>e.startsWith(`BC`))};return(0,E.jsx)(D.Provider,{value:e,children:(0,E.jsx)(O.Provider,{value:d,children:(0,E.jsx)(k.Provider,{value:K,children:(0,E.jsx)(A.Provider,{value:H,children:(0,E.jsx)(j.Provider,{value:U,children:(0,E.jsxs)(`div`,{className:`markdown-test-extended-page flex-1 flex flex-col h-full`,"data-test":`markdown-test-extended-page`,children:[(0,E.jsx)(`div`,{className:`debug-status-bar px-4 py-1.5 bg-muted/50 border-b border-border flex items-center gap-4 text-xs font-mono flex-shrink-0`,children:n?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(`span`,{className:`font-semibold text-primary`,children:n.id}),(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`|`}),(0,E.jsxs)(`span`,{children:[`Pos: `,(0,E.jsx)(`span`,{className:`text-foreground`,children:n.position})]}),(0,E.jsxs)(`span`,{children:[`Ln: `,(0,E.jsx)(`span`,{className:`text-foreground`,children:n.line})]}),(0,E.jsxs)(`span`,{children:[`Col: `,(0,E.jsx)(`span`,{className:`text-foreground`,children:n.column})]}),(0,E.jsx)(`span`,{className:`text-muted-foreground`,children:`|`}),(0,E.jsx)(`span`,{className:n.mode===`preview`?`text-green-600`:`text-orange-500`,children:n.mode}),(0,E.jsxs)(u,{variant:`ghost`,size:`sm`,onClick:te,className:`h-5 px-1.5 gap-1 text-xs`,"data-test":`copy-cursor-info`,children:[f?(0,E.jsx)(s,{className:`w-3 h-3 text-green-500`}):(0,E.jsx)(o,{className:`w-3 h-3`}),f?`Copied`:`Copy`]})]}):(0,E.jsx)(`span`,{className:`text-muted-foreground italic`,children:`Click in a textarea to see cursor info`})}),(0,E.jsxs)(`div`,{className:`page-header px-4 py-2 flex-shrink-0 border-b border-border`,children:[(0,E.jsx)(m,{items:ee}),(0,E.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[(0,E.jsx)(a,{className:`w-5 h-5 text-primary`}),(0,E.jsx)(`h1`,{className:`text-xl font-bold`,children:`Markdown Test Extended`}),(0,E.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`(`,Q.length,` test cases)`]}),(0,E.jsx)(`div`,{className:`flex-1`}),I&&(0,E.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>Y(I),expandDirection:`down`,expandTitle:`Textarea History`,headerActions:(0,E.jsx)(u,{variant:`ghost`,size:`sm`,onClick:Z,className:`h-6 px-2`,title:`Clear history`,"data-test":`clear-textarea-history`,disabled:R.length===0,children:(0,E.jsx)(r,{className:`w-3 h-3`})}),expandContent:(0,E.jsx)(`div`,{className:`flex flex-col h-full overflow-y-auto`,"data-test":`textarea-history-list`,children:R.length===0?(0,E.jsx)(`span`,{className:`text-xs text-muted-foreground p-2`,children:`No history yet`}):R.map((e,t)=>(0,E.jsxs)(`button`,{onClick:()=>X(e),className:`text-left text-xs font-mono px-2 py-1.5 hover:bg-muted transition-colors ${t===0?`text-primary font-semibold`:`text-muted-foreground`}`,"data-test":`textarea-history-item-${e.textareaId}`,children:[(0,E.jsx)(`span`,{children:e.textareaId}),(0,E.jsxs)(`span`,{className:`ml-2 text-[9px] text-muted-foreground/70`,children:[`@`,e.firstEvent.markdownPosition]})]},e.textareaId))}),popoverSize:{width:180,height:250},resizable:!1,title:`Scroll to ${I}`,dataTest:`scroll-to-last-textarea`,className:`h-8`,children:(0,E.jsx)(`span`,{className:`text-xs font-mono`,children:I})}),(0,E.jsxs)(u,{variant:`outline`,size:`sm`,onClick:J,className:`gap-1.5`,"data-test":`reset-all-textareas`,children:[(0,E.jsx)(l,{className:`w-4 h-4`}),`Reset`]}),(0,E.jsx)(u,{variant:e?`default`:`outline`,size:`sm`,onClick:()=>t(!e),className:`gap-1.5`,"data-test":`global-mode-toggle`,children:e?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(c,{className:`w-4 h-4`}),`Preview`]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(i,{className:`w-4 h-4`}),`Raw`]})})]})]}),(0,E.jsxs)(`div`,{className:`page-content flex-1 p-2 overflow-y-auto min-h-0`,children:[(0,E.jsx)(b,{history:C,onClear:q,initialContent:P,isReplayingRef:H,textareaRegistryRef:U}),(0,E.jsx)(`div`,{"data-test":`dictionary-demo-surface`,ref:$,className:`space-y-3`,children:Object.entries(re).map(([e,t])=>(0,E.jsxs)(`div`,{className:`group-section`,children:[(0,E.jsx)(`div`,{className:`group-header text-xs font-semibold text-muted-foreground mb-1 px-1`,children:e}),(0,E.jsx)(`div`,{className:`grid gap-1.5`,style:{gridTemplateColumns:e===`BC-35`?`1fr`:`repeat(auto-fill, minmax(140px, 1fr))`},children:t.map(([e,t])=>(0,E.jsx)(N,{id:e,initialValue:t},`${e}-${B}`))})]},e))}),(0,E.jsx)(_,{state:ne})]})]})})})})})})}export{P as MarkdownTestExtendedPage};