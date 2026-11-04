import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t}from"./forms-CGyoCzTL.js";import{t as n}from"./react-vendor-DiEuJ95v.js";import{Vt as r}from"./radix-ui-ChmltTHn.js";import{t as i}from"./Breadcrumbs-DkPghYrB.js";import{t as a}from"./RichtextMarkdownTextarea-BIlH2xMB.js";var o=n(),s=e(t(),1),c=r(),l={"A1-empty":``,"A2-single-char":`A`,"A3-single-word":`Hello`,"A4-trailing-newline":`Hello
`,"A5-two-lines":`Hello
World`,"B1-vn-simple":`Xin chào`,"B2-vn-diacritics":`Hôm nay trời đẹp`,"B3-vn-all-tones":`á à ả ã ạ ắ ằ ẳ ẵ ặ`,"B4-vn-circumflex":`ô ơ ê â ư`,"B5-vn-sentence":`Việt Nam là đất nước tươi đẹp`,"C1-vn-bold":`**Việt Nam**`,"C2-vn-italic":`*Xin chào*`,"C3-vn-code":"`Hôm nay`","C4-vn-mixed":`**Xin** *chào* thế giới`,"C5-vn-strike":`~~Hôm nay~~`,"D1-vn-ul":`- Xin chào
- Tạm biệt`,"D2-vn-ol":`1. Một
2. Hai
3. Ba`,"D3-vn-ul-empty":`- Xin chào
- `,"D4-vn-nested":`- Một
  - Hai
  - Ba`,"D5-vn-mixed-list":`- **Việt Nam**
- *Hà Nội*`,"E1-before-enter":`- item one`,"E2-after-enter":`- item one
- `,"E3-two-items":`- một
- hai`,"E4-removal-target":`- một
- hai
- `,"E5-plain-enter":`Dòng một
Dòng hai`,"F1-h1-vn":`# Tiêu đề`,"F2-h2-vn":`## Phần mục`,"F3-h3-vn":`### Chi tiết`,"F4-h-mixed":`# Tiêu đề
Nội dung bên dưới`,"F5-h-list":`## Danh sách
- Một
- Hai`,"G1-vn-table":`| Tên | Tuổi |
| - | - |
| Nam | 25 |`,"G2-vn-table-bold":`| **Tên** | Tuổi |
| - | - |
| Nam | 25 |`,"G3-vn-table-multi":`| Tên | Quê quán |
| - | - |
| Hà Nội | Việt Nam |
| Huế | Việt Nam |`,"H1-vn-quote":`> Xin chào thế giới`,"H2-vn-quote-multi":`> Dòng một
> Dòng hai`,"H3-vn-quote-format":`> **Việt Nam** là *đẹp*`,"I1-mixed-simple":`Hello Việt Nam`,"I2-mixed-bold":`The word **chào** means hello`,"I3-mixed-list":`- English item
- Mục tiếng Việt`,"I4-mixed-header":`## Vietnamese: Tiêu đề`,"I5-mixed-table":`| English | Tiếng Việt |
| - | - |
| Hello | Xin chào |`,"J1-cursor-start":`Hôm nay`,"J2-cursor-mid":`Xin chào thế giới`,"J3-cursor-end-bold":`**Hôm nay**`,"J4-empty-list-enter":`- `,"J5-after-table":`| A | B |
| - | - |
| 1 | 2 |
Vietnamese here`},u=48,d=64,f=100,p=140;function m(e){let t=(0,o.c)(26),{id:n,initialValue:r}=e,[i,l]=(0,s.useState)(r),[m,h]=(0,s.useState)(0),g=(0,s.useRef)(null),_=i.split(`
`).length,v=i.includes(`| `)?p:_<=1?u:_<=2?d:f,y;t[0]===r?y=t[1]:(y=()=>{l(r),g.current?.setValue(r)},t[0]=r,t[1]=y);let b=y,x=`ime-cell-${n}`,S;t[2]===n?S=t[3]:(S=(0,c.jsx)(`span`,{"data-test":`cell-id`,className:`font-mono font-medium`,children:n}),t[2]=n,t[3]=S);let C;t[4]!==m||t[5]!==i.length?(C=(0,c.jsxs)(`span`,{"data-test":`cell-cursor`,children:[`P:`,m,`/`,i.length]}),t[4]=m,t[5]=i.length,t[6]=C):C=t[6];let w;t[7]===b?w=t[8]:(w=(0,c.jsx)(`button`,{"data-test":`cell-reset`,onClick:b,className:`hover:text-foreground`,title:`Reset to initial value`,children:`↻`}),t[7]=b,t[8]=w);let T;t[9]!==C||t[10]!==w?(T=(0,c.jsxs)(`div`,{"data-test":`cell-info`,className:`flex items-center gap-2 text-muted-foreground`,children:[C,w]}),t[9]=C,t[10]=w,t[11]=T):T=t[11];let E;t[12]!==S||t[13]!==T?(E=(0,c.jsxs)(`div`,{"data-test":`cell-header`,className:`flex items-center justify-between px-2 py-1 bg-muted text-xs`,children:[S,T]}),t[12]=S,t[13]=T,t[14]=E):E=t[14];let D;t[15]===v?D=t[16]:(D={height:v},t[15]=v,t[16]=D);let O;t[17]===i?O=t[18]:(O=(0,c.jsx)(a,{ref:g,value:i,onChange:l,onCursorChange:h,showModeToggle:!1,showClearButton:!1}),t[17]=i,t[18]=O);let k;t[19]!==D||t[20]!==O?(k=(0,c.jsx)(`div`,{style:D,children:O}),t[19]=D,t[20]=O,t[21]=k):k=t[21];let A;return t[22]!==k||t[23]!==x||t[24]!==E?(A=(0,c.jsxs)(`div`,{"data-test":x,className:`border rounded-md overflow-hidden`,children:[E,k]}),t[22]=k,t[23]=x,t[24]=E,t[25]=A):A=t[25],A}function h(){let e=(0,o.c)(1),t;if(e[0]===Symbol.for(`react.memo_cache_sentinel`)){let n=Object.keys(l).reduce(_,{}),r={A:`Empty / Basic`,B:`Vietnamese Text`,C:`Vietnamese + Formatting`,D:`Vietnamese in Lists`,E:`Enter Key Scenarios`,F:`Vietnamese in Headings`,G:`Vietnamese in Tables`,H:`Blockquotes`,I:`Mixed English + Vietnamese`,J:`Cursor + IME Edge Cases`};t=(0,c.jsxs)(`div`,{"data-test":`ime-test-page`,className:`flex-1 flex flex-col h-full`,children:[(0,c.jsxs)(`div`,{"data-test":`page-header`,className:`p-4 pb-2 flex-shrink-0`,children:[(0,c.jsx)(i,{items:[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`IME Test`}]}),(0,c.jsx)(`h1`,{"data-test":`page-title`,className:`text-xl font-bold mt-2`,children:`IME Test Grid — RichtextMarkdownTextarea`}),(0,c.jsx)(`p`,{"data-test":`page-description`,className:`text-sm text-muted-foreground`,children:`Test fixtures for Vietnamese IME with real-time markdown rendering. Each cell uses RichtextMarkdownTextarea (V2 hook).`})]}),(0,c.jsx)(`div`,{"data-test":`page-content`,className:`flex-1 overflow-y-auto min-h-0 p-4 pt-2`,children:Object.entries(n).map(e=>{let[t,n]=e;return(0,c.jsxs)(`div`,{"data-test":`group-${t}`,className:`mb-6`,children:[(0,c.jsxs)(`h2`,{"data-test":`group-title`,className:`text-sm font-semibold text-muted-foreground mb-2`,children:[`Group `,t,`: `,r[t]||`Other`]}),(0,c.jsx)(`div`,{"data-test":`group-grid`,className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`,children:n.map(g)})]},t)})})]}),e[0]=t}else t=e[0];return t}function g(e){return(0,c.jsx)(m,{id:e,initialValue:l[e]},e)}function _(e,t){let n=t[0];return e[n]||(e[n]=[]),e[n].push(t),e}export{h as ImeTestPage};