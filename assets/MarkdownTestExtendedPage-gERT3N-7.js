import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t}from"./forms-CGyoCzTL.js";import{t as n}from"./react-vendor-DiEuJ95v.js";import{Vt as r}from"./radix-ui-ChmltTHn.js";import{Ja as i,_n as a,ba as o,ko as s,os as c,yo as l,z as ee}from"./icons-DkyGDSyC.js";import{t as u}from"./button-CFnAbYyw.js";import{t as te}from"./Breadcrumbs-92L1JUgL.js";import{n as ne}from"./useMarkdownV2-CIVKfVgR.js";import{t as re}from"./UiButtonWithExpandOption-BXaVks_s.js";import{t as d}from"./MarkdownTextarea-BGAP1iAq.js";import{t as f}from"./setCursorPosition-p8Y3dZpE.js";import{n as p,t as m}from"./DictionaryTermPopover-B7Bf_mvm.js";import{n as h,r as ie,t as ae}from"./DebugHistoryCard-V7clOExt.js";var g=e(t(),1),oe=n(),_=[{term:`Photosynthesis`,definition:`The process by which green plants convert light energy into chemical energy stored as glucose.`},{term:`Mitochondria`,definition:`The organelle that generates most of a cell's ATP — its 'powerhouse'.`},{term:`Osmosis`,definition:`Net movement of a solvent across a semipermeable membrane toward higher solute concentration.`},{term:`Diffusion`,definition:`Net movement of particles from a region of higher concentration to one of lower concentration.`}];function v(e){return e.trim().toLowerCase()}var y=new Map(_.map(e=>[v(e.term),e])),b=e=>y.get(v(e)),x=r(),se=(0,g.createContext)(!0),ce=(0,g.createContext)(()=>{}),le=(0,g.createContext)(()=>{}),ue=(0,g.createContext)(null),de=(0,g.createContext)(null),S={"A1-h1":`# Hello`,"A2-h2":`## Hello`,"A3-h3":`### Hello`,"A4-blockquote":`> Quote`,"A5-hr":`---`,"B1-ul-single":`- item`,"B2-ul-multiple":`- one
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
| Nam | 25 |`,"IME10-header":`## Tiêu đề`};function fe({id:e,initialValue:t}){let[n,r]=(0,g.useState)(t),i=(0,g.useContext)(se),a=(0,g.useContext)(ce),o=(0,g.useContext)(le),s=(0,g.useContext)(ue),c=(0,g.useContext)(de),l=(0,g.useRef)(null),ee=(0,g.useRef)(n);ee.current=n;let[u,te]=(0,g.useState)(null);(0,g.useEffect)(()=>{if(c?.current)return c.current.set(e,r),()=>{c.current?.delete(e)}},[e,c]);let re=(0,g.useCallback)(e=>{s?.current||te(e)},[s]),f=(0,g.useRef)(i);f.current!==i&&(f.current=i,te(null));let p=u??(i?`preview`:`raw`),m=(0,g.useRef)(p);m.current=p;let h=n.split(`
`).length,ie=e.startsWith(`BC35`),ae=e.startsWith(`I`)||e.startsWith(`J`),oe=ie?280:ae?200:h<=1?48:h<=2?64:h<=4?100:h<=6?140:180,_=(0,g.useCallback)(()=>{let e=window.getSelection();if(!e||!l.current)return null;let t=l.current.querySelector(`[contenteditable]`);if(!t||!t.contains(e.anchorNode))return null;let n=e.getRangeAt(0),r=n.cloneRange();r.selectNodeContents(t),r.setEnd(n.startContainer,n.startOffset);let i=r.toString().length,{cursorPos:a}=ne(t),o=ee.current,s=o.substring(0,Math.min(a,o.length)).split(`
`);return{line:s.length,column:s[s.length-1].length+1,position:i,markdownPosition:a,content:o,cursorContext:`${o.substring(Math.max(0,a-10),a)}{|}${o.substring(a,Math.min(o.length,a+10))}`.replace(/\n/g,`↵`)}},[]),v=(0,g.useCallback)(()=>{if(!l.current)return;let e=l.current.querySelector(`[contenteditable]`);if(!e)return;let t=window.getSelection();if(!t||t.rangeCount===0)return e.innerHTML;let n=t.getRangeAt(0);if(!e.contains(n.startContainer))return e.innerHTML;let r=n.startContainer,i=n.startOffset,a=n.endContainer,o=n.endOffset,s=n.collapsed,c=document.createTextNode(`�`);n.insertNode(c);let ee=e.innerHTML;c.remove();let u=document.createRange();try{u.setStart(r,i),s?u.collapse(!0):u.setEnd(a,o),t.removeAllRanges(),t.addRange(u)}catch{}return ee},[]),y=(0,g.useCallback)(()=>{let t=_();t&&(a({id:e,...t,value:t.content,mode:m.current}),o({timestamp:Date.now(),type:`click`,textareaId:e,line:t.line,column:t.column,position:t.position,markdownPosition:t.markdownPosition,content:t.content,cursorContext:t.cursorContext,mode:m.current,innerHTML:v()}))},[e,_,a,o,v]),b=(0,g.useRef)([]),S=(0,g.useCallback)(t=>{let n=t.key,r=Date.now(),i=_()?.markdownPosition??0;b.current.push({key:n,timestamp:r,positionBefore:i}),requestAnimationFrame(()=>{let t=b.current;b.current=[];let n=_();n&&t.forEach((r,i)=>{let s=t.length-1-i,c=n.markdownPosition-s,l=n.content.slice(0,-s)||n.content;a({id:e,...n,value:n.content,mode:m.current}),o({timestamp:r.timestamp,type:`keystroke`,textareaId:e,line:n.line,column:n.column-s,position:n.position-s,markdownPosition:c,content:i===t.length-1?n.content:l,cursorContext:n.cursorContext,key:r.key,mode:m.current,innerHTML:i===t.length-1?v():void 0})})})},[e,_,a,o,v]);return(0,x.jsxs)(`div`,{ref:l,className:`test-cell flex flex-col border border-border rounded overflow-hidden bg-card`,"data-test":`test-cell-${e}`,onKeyDown:S,children:[(0,x.jsxs)(`div`,{className:`cell-header px-1.5 py-0.5 bg-muted border-b border-border flex items-center justify-between`,children:[(0,x.jsx)(`span`,{className:`text-[10px] font-mono font-medium text-muted-foreground truncate`,children:e}),(0,x.jsxs)(`span`,{className:`text-[9px] text-muted-foreground/60`,children:[n.length,`ch`]})]}),(0,x.jsx)(`div`,{className:`cell-content [&_.markdown-textarea]:!min-h-0 [&_.markdown-textarea]:!p-1`,style:{height:oe},onClick:y,children:(0,x.jsx)(d,{value:n,onChange:r,className:`h-full text-xs`,mode:p,onModeChange:re,showHints:!1,"data-test":`textarea-${e}`})})]})}function C(){let e=(0,oe.c)(76),[t,n]=(0,g.useState)(!0),[r,ne]=(0,g.useState)(null),[d,_]=(0,g.useState)(!1),v;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(v=[],e[0]=v):v=e[0];let[y,C]=(0,g.useState)(v),[Le,w]=(0,g.useState)(void 0),[T,Re]=(0,g.useState)(Ie),[E,ze]=(0,g.useState)(Fe),[Be,Ve]=(0,g.useState)(0),He=(0,g.useRef)(!1),D;e[1]===Symbol.for(`react.memo_cache_sentinel`)?(D=new Map,e[1]=D):D=e[1];let Ue=(0,g.useRef)(D),O;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(O=(e,t,n)=>{ze(r=>{let i=r.filter(t=>t.textareaId!==e),a=[{textareaId:e,firstEvent:t,fullHistory:n},...i].slice(0,20),o=h();return ie({...o,lastTextareaId:e,textareaHistory:a}),a})},e[2]=O):O=e[2];let k=O,A,j;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(A=()=>{let e=h(),t=e.lastTextareaId,n=(e.textareaHistory??[]).find(e=>e.textareaId===t);if(t&&n?.firstEvent){let e=n.fullHistory??[n.firstEvent];C(e);let r=S[n.textareaId];w(n.firstEvent.type===`click`?n.firstEvent.content:r),setTimeout(()=>{let e=document.querySelector(`[data-test="test-cell-${t}"]`);if(e){e.scrollIntoView({behavior:`smooth`,block:`center`});let t=e.querySelector(`[contenteditable="true"]`);t&&(t.focus(),f(t,n.firstEvent.markdownPosition))}},100)}},j=[],e[3]=A,e[4]=j):(A=e[3],j=e[4]),(0,g.useEffect)(A,j);let We=Pe,M;e[5]===Symbol.for(`react.memo_cache_sentinel`)?(M=e=>{He.current||Re(t=>{if(t!==null&&t!==e.textareaId){C([e]);let t=S[e.textareaId];w(e.type===`click`?e.content:t),k(e.textareaId,e,[e])}else C(t=>{if(We(t,e))return t;if(t.length===0){let t=S[e.textareaId];w(e.type===`click`?e.content:t),k(e.textareaId,e,[e])}return[...t,e]});return e.textareaId})},e[5]=M):M=e[5];let Ge=M,N,P;e[6]!==T||e[7]!==y?(N=()=>{if(T&&y.length>0){let e=y[0];k(T,e,y)}},P=[y,T,k],e[6]=T,e[7]=y,e[8]=N,e[9]=P):(N=e[8],P=e[9]),(0,g.useEffect)(N,P);let F;e[10]===T?F=e[11]:(F=()=>{C([]),w(void 0),T&&ze(e=>{let t=e.map(e=>e.textareaId===T?{...e,fullHistory:[]}:e),n=h();return ie({...n,textareaHistory:t}),t})},e[10]=T,e[11]=F);let Ke=F,I;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(I=()=>{Ve(Ne),ne(null),C([]),Re(null)},e[12]=I):I=e[12];let qe=I,Je=Me,Ye;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(Ye=e=>{let t=document.querySelector(`[data-test="test-cell-${e.textareaId}"]`);if(!t)return;t.scrollIntoView({behavior:`smooth`,block:`center`}),t.classList.add(`ring-2`,`ring-primary`,`ring-offset-2`);let n=e.fullHistory??[e.firstEvent];C(n);let r=S[e.textareaId];w(e.firstEvent.type===`click`?e.firstEvent.content:r);let i=n[n.length-1],a=Ue.current.get(e.textareaId);a&&a(i.content),requestAnimationFrame(()=>{let e=t.querySelector(`[contenteditable="true"]`);e&&(e.focus(),f(e,i.markdownPosition))}),setTimeout(()=>{t.classList.remove(`ring-2`,`ring-primary`,`ring-offset-2`)},1500),Re(e.textareaId),k(e.textareaId,e.firstEvent,n)},e[13]=Ye):Ye=e[13];let Xe=Ye,Ze;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(Ze=()=>{ze([]);let e=h();ie({...e,textareaHistory:[]})},e[14]=Ze):Ze=e[14];let Qe=Ze,$e;e[15]===Symbol.for(`react.memo_cache_sentinel`)?($e=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Markdown Test Extended`}],e[15]=$e):$e=e[15];let et=$e,tt;e[16]===r?tt=e[17]:(tt=()=>{if(!r)return;let e=`ID: ${r.id}
Mode: ${r.mode}
Position: ${r.position}
Line: ${r.line}, Column: ${r.column}
Value: \`${r.value.replace(/\n/g,`\\n`)}\``;navigator.clipboard.writeText(e),_(!0),setTimeout(()=>_(!1),1500)},e[16]=r,e[17]=tt);let nt=tt,L=Object.entries(S),rt=(0,g.useRef)(null),it=p(rt,b,!0),at={"A: Headers":L.filter(je),"B: Lists":L.filter(Ae),"C: Format":L.filter(ke),"CF: Code Fences":L.filter(Oe),"D: Newlines":L.filter(De),"E: Tables":L.filter(Ee),"F: Block+Block":L.filter(Te),"G: Block+Fmt":L.filter(we),"H: Table+":L.filter(Ce),"I: Combined":L.filter(Se),"J: Table First":L.filter(xe),"K: Links":L.filter(be),"L: Link+Block":L.filter(ye),"M: Link+Table":L.filter(ve),"W: Wiki-Links":L.filter(_e),"DT: Dictionary {{term}}":L.filter(ge),"T: Typing":L.filter(he),"TD: Todo":L.filter(me),"BC-35":L.filter(pe)},ot=se,st=ce,ct=le,lt=ue,ut=de,R;e[18]!==d||e[19]!==r||e[20]!==nt?(R=(0,x.jsx)(`div`,{className:`debug-status-bar px-4 py-1.5 bg-muted/50 border-b border-border flex items-center gap-4 text-xs font-mono flex-shrink-0`,children:r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:`font-semibold text-primary`,children:r.id}),(0,x.jsx)(`span`,{className:`text-muted-foreground`,children:`|`}),(0,x.jsxs)(`span`,{children:[`Pos: `,(0,x.jsx)(`span`,{className:`text-foreground`,children:r.position})]}),(0,x.jsxs)(`span`,{children:[`Ln: `,(0,x.jsx)(`span`,{className:`text-foreground`,children:r.line})]}),(0,x.jsxs)(`span`,{children:[`Col: `,(0,x.jsx)(`span`,{className:`text-foreground`,children:r.column})]}),(0,x.jsx)(`span`,{className:`text-muted-foreground`,children:`|`}),(0,x.jsx)(`span`,{className:r.mode===`preview`?`text-green-600`:`text-orange-500`,children:r.mode}),(0,x.jsxs)(u,{variant:`ghost`,size:`sm`,onClick:nt,className:`h-5 px-1.5 gap-1 text-xs`,"data-test":`copy-cursor-info`,children:[d?(0,x.jsx)(c,{className:`w-3 h-3 text-green-500`}):(0,x.jsx)(l,{className:`w-3 h-3`}),d?`Copied`:`Copy`]})]}):(0,x.jsx)(`span`,{className:`text-muted-foreground italic`,children:`Click in a textarea to see cursor info`})}),e[18]=d,e[19]=r,e[20]=nt,e[21]=R):R=e[21];let dt;e[22]===Symbol.for(`react.memo_cache_sentinel`)?(dt=(0,x.jsx)(te,{items:et}),e[22]=dt):dt=e[22];let ft,pt;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(ft=(0,x.jsx)(o,{className:`w-5 h-5 text-primary`}),pt=(0,x.jsx)(`h1`,{className:`text-xl font-bold`,children:`Markdown Test Extended`}),e[23]=ft,e[24]=pt):(ft=e[23],pt=e[24]);let z;e[25]===L?z=e[26]:(z=(0,x.jsxs)(`span`,{className:`text-xs text-muted-foreground`,children:[`(`,L.length,` test cases)`]}),e[25]=L,e[26]=z);let mt;e[27]===Symbol.for(`react.memo_cache_sentinel`)?(mt=(0,x.jsx)(`div`,{className:`flex-1`}),e[27]=mt):mt=e[27];let B;e[28]!==T||e[29]!==E?(B=T&&(0,x.jsx)(re,{variant:`ghost`,size:`sm`,onClick:()=>Je(T),expandDirection:`down`,expandTitle:`Textarea History`,headerActions:(0,x.jsx)(u,{variant:`ghost`,size:`sm`,onClick:Qe,className:`h-6 px-2`,title:`Clear history`,"data-test":`clear-textarea-history`,disabled:E.length===0,children:(0,x.jsx)(ee,{className:`w-3 h-3`})}),expandContent:(0,x.jsx)(`div`,{className:`flex flex-col h-full overflow-y-auto`,"data-test":`textarea-history-list`,children:E.length===0?(0,x.jsx)(`span`,{className:`text-xs text-muted-foreground p-2`,children:`No history yet`}):E.map((e,t)=>(0,x.jsxs)(`button`,{onClick:()=>Xe(e),className:`text-left text-xs font-mono px-2 py-1.5 hover:bg-muted transition-colors ${t===0?`text-primary font-semibold`:`text-muted-foreground`}`,"data-test":`textarea-history-item-${e.textareaId}`,children:[(0,x.jsx)(`span`,{children:e.textareaId}),(0,x.jsxs)(`span`,{className:`ml-2 text-[9px] text-muted-foreground/70`,children:[`@`,e.firstEvent.markdownPosition]})]},e.textareaId))}),popoverSize:{width:180,height:250},resizable:!1,title:`Scroll to ${T}`,dataTest:`scroll-to-last-textarea`,className:`h-8`,children:(0,x.jsx)(`span`,{className:`text-xs font-mono`,children:T})}),e[28]=T,e[29]=E,e[30]=B):B=e[30];let ht;e[31]===Symbol.for(`react.memo_cache_sentinel`)?(ht=(0,x.jsxs)(u,{variant:`outline`,size:`sm`,onClick:qe,className:`gap-1.5`,"data-test":`reset-all-textareas`,children:[(0,x.jsx)(a,{className:`w-4 h-4`}),`Reset`]}),e[31]=ht):ht=e[31];let gt=t?`default`:`outline`,V;e[32]===t?V=e[33]:(V=()=>n(!t),e[32]=t,e[33]=V);let H;e[34]===t?H=e[35]:(H=t?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i,{className:`w-4 h-4`}),`Preview`]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(s,{className:`w-4 h-4`}),`Raw`]}),e[34]=t,e[35]=H);let U;e[36]!==gt||e[37]!==V||e[38]!==H?(U=(0,x.jsx)(u,{variant:gt,size:`sm`,onClick:V,className:`gap-1.5`,"data-test":`global-mode-toggle`,children:H}),e[36]=gt,e[37]=V,e[38]=H,e[39]=U):U=e[39];let W;e[40]!==z||e[41]!==B||e[42]!==U?(W=(0,x.jsxs)(`div`,{className:`page-header px-4 py-2 flex-shrink-0 border-b border-border`,children:[dt,(0,x.jsxs)(`div`,{className:`flex items-center gap-2 mt-1`,children:[ft,pt,z,mt,B,ht,U]})]}),e[40]=z,e[41]=B,e[42]=U,e[43]=W):W=e[43];let G;e[44]!==Ke||e[45]!==Le||e[46]!==y?(G=(0,x.jsx)(ae,{history:y,onClear:Ke,initialContent:Le,isReplayingRef:He,textareaRegistryRef:Ue}),e[44]=Ke,e[45]=Le,e[46]=y,e[47]=G):G=e[47];let _t=Object.entries(at).map(e=>{let[t,n]=e;return(0,x.jsxs)(`div`,{className:`group-section`,children:[(0,x.jsx)(`div`,{className:`group-header text-xs font-semibold text-muted-foreground mb-1 px-1`,children:t}),(0,x.jsx)(`div`,{className:`grid gap-1.5`,style:{gridTemplateColumns:t===`BC-35`?`1fr`:`repeat(auto-fill, minmax(140px, 1fr))`},children:n.map(e=>{let[t,n]=e;return(0,x.jsx)(fe,{id:t,initialValue:n},`${t}-${Be}`)})})]},t)}),K;e[48]===_t?K=e[49]:(K=(0,x.jsx)(`div`,{"data-test":`dictionary-demo-surface`,ref:rt,className:`space-y-3`,children:_t}),e[48]=_t,e[49]=K);let q;e[50]===it?q=e[51]:(q=(0,x.jsx)(m,{state:it}),e[50]=it,e[51]=q);let J;e[52]!==G||e[53]!==K||e[54]!==q?(J=(0,x.jsxs)(`div`,{className:`page-content flex-1 p-2 overflow-y-auto min-h-0`,children:[G,K,q]}),e[52]=G,e[53]=K,e[54]=q,e[55]=J):J=e[55];let Y;e[56]!==R||e[57]!==W||e[58]!==J?(Y=(0,x.jsxs)(`div`,{className:`markdown-test-extended-page flex-1 flex flex-col h-full`,"data-test":`markdown-test-extended-page`,children:[R,W,J]}),e[56]=R,e[57]=W,e[58]=J,e[59]=Y):Y=e[59];let X;e[60]!==ut.Provider||e[61]!==Y?(X=(0,x.jsx)(ut.Provider,{value:Ue,children:Y}),e[60]=ut.Provider,e[61]=Y,e[62]=X):X=e[62];let Z;e[63]!==lt.Provider||e[64]!==X?(Z=(0,x.jsx)(lt.Provider,{value:He,children:X}),e[63]=lt.Provider,e[64]=X,e[65]=Z):Z=e[65];let Q;e[66]!==ct.Provider||e[67]!==Z?(Q=(0,x.jsx)(ct.Provider,{value:Ge,children:Z}),e[66]=ct.Provider,e[67]=Z,e[68]=Q):Q=e[68];let $;e[69]!==st.Provider||e[70]!==Q?($=(0,x.jsx)(st.Provider,{value:ne,children:Q}),e[69]=st.Provider,e[70]=Q,e[71]=$):$=e[71];let vt;return e[72]!==t||e[73]!==ot.Provider||e[74]!==$?(vt=(0,x.jsx)(ot.Provider,{value:t,children:$}),e[72]=t,e[73]=ot.Provider,e[74]=$,e[75]=vt):vt=e[75],vt}function pe(e){let[t]=e;return t.startsWith(`BC`)}function me(e){let[t]=e;return t.startsWith(`TD`)}function he(e){let[t]=e;return t.startsWith(`T`)&&!t.startsWith(`TD`)}function ge(e){let[t]=e;return t.startsWith(`DT`)}function _e(e){let[t]=e;return t.startsWith(`W`)}function ve(e){let[t]=e;return t.startsWith(`M`)}function ye(e){let[t]=e;return t.startsWith(`L`)}function be(e){let[t]=e;return t.startsWith(`K`)}function xe(e){let[t]=e;return t.startsWith(`J`)}function Se(e){let[t]=e;return t.startsWith(`I`)}function Ce(e){let[t]=e;return t.startsWith(`H`)}function we(e){let[t]=e;return t.startsWith(`G`)}function Te(e){let[t]=e;return t.startsWith(`F`)}function Ee(e){let[t]=e;return t.startsWith(`E`)}function De(e){let[t]=e;return t.startsWith(`D`)&&!t.startsWith(`DT`)}function Oe(e){let[t]=e;return t.startsWith(`CF`)}function ke(e){let[t]=e;return t.startsWith(`C`)&&!t.startsWith(`CF`)}function Ae(e){let[t]=e;return t.startsWith(`B`)&&!t.startsWith(`BC`)}function je(e){let[t]=e;return t.startsWith(`A`)}function Me(e){let t=document.querySelector(`[data-test="test-cell-${e}"]`);t&&(t.scrollIntoView({behavior:`smooth`,block:`center`}),t.classList.add(`ring-2`,`ring-primary`,`ring-offset-2`),t.querySelector(`[contenteditable="true"]`)?.focus(),setTimeout(()=>{t.classList.remove(`ring-2`,`ring-primary`,`ring-offset-2`)},1500))}function Ne(e){return e+1}function Pe(e,t){if(t.type===`keystroke`||e.length===0)return!1;let n=e[e.length-1];return n.markdownPosition===t.markdownPosition&&n.content===t.content}function Fe(){return h().textareaHistory??[]}function Ie(){return h().lastTextareaId??null}export{C as MarkdownTestExtendedPage};