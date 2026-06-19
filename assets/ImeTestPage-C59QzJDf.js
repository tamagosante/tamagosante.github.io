import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{d as t}from"./forms-CI8_RRjb.js";import{Bt as n}from"./radix-ui-C8Se2y1c.js";import"./isomorphicContainer-AbNX7LgQ.js";import"./diContainer-C9Ahjm8z.js";import"./OllamaApi-BSLaFXwz.js";import"./language.types-Dd45sEJd.js";import"./vietnameseTypingCore-GEbj0sTH.js";import"./useMarkdownV2-BP9bxQjU.js";import"./MobileLogClient-CkufQNd1.js";import"./markdownDebugLogger-DtSqzNv5.js";import{t as r}from"./Breadcrumbs-DsALbPpX.js";import{t as i}from"./RichtextMarkdownTextarea-C46qOjzj.js";var a=e(t(),1),o=n(),s={"A1-empty":``,"A2-single-char":`A`,"A3-single-word":`Hello`,"A4-trailing-newline":`Hello
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
Vietnamese here`},c=48,l=64,u=100,d=140;function f({id:e,initialValue:t}){let[n,r]=(0,a.useState)(t),[s,f]=(0,a.useState)(0),p=(0,a.useRef)(null),m=n.split(`
`).length,h=n.includes(`| `)?d:m<=1?c:m<=2?l:u,g=(0,a.useCallback)(()=>{r(t),p.current?.setValue(t)},[t]);return(0,o.jsxs)(`div`,{"data-test":`ime-cell-${e}`,className:`border rounded-md overflow-hidden`,children:[(0,o.jsxs)(`div`,{"data-test":`cell-header`,className:`flex items-center justify-between px-2 py-1 bg-muted text-xs`,children:[(0,o.jsx)(`span`,{"data-test":`cell-id`,className:`font-mono font-medium`,children:e}),(0,o.jsxs)(`div`,{"data-test":`cell-info`,className:`flex items-center gap-2 text-muted-foreground`,children:[(0,o.jsxs)(`span`,{"data-test":`cell-cursor`,children:[`P:`,s,`/`,n.length]}),(0,o.jsx)(`button`,{"data-test":`cell-reset`,onClick:g,className:`hover:text-foreground`,title:`Reset to initial value`,children:`↻`})]})]}),(0,o.jsx)(`div`,{style:{height:h},children:(0,o.jsx)(i,{ref:p,value:n,onChange:r,onCursorChange:f,showModeToggle:!1,showClearButton:!1})})]})}function p(){let e=Object.keys(s).reduce((e,t)=>{let n=t[0];return e[n]||(e[n]=[]),e[n].push(t),e},{}),t={A:`Empty / Basic`,B:`Vietnamese Text`,C:`Vietnamese + Formatting`,D:`Vietnamese in Lists`,E:`Enter Key Scenarios`,F:`Vietnamese in Headings`,G:`Vietnamese in Tables`,H:`Blockquotes`,I:`Mixed English + Vietnamese`,J:`Cursor + IME Edge Cases`};return(0,o.jsxs)(`div`,{"data-test":`ime-test-page`,className:`flex-1 flex flex-col h-full`,children:[(0,o.jsxs)(`div`,{"data-test":`page-header`,className:`p-4 pb-2 flex-shrink-0`,children:[(0,o.jsx)(r,{items:[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`IME Test`}]}),(0,o.jsx)(`h1`,{"data-test":`page-title`,className:`text-xl font-bold mt-2`,children:`IME Test Grid — RichtextMarkdownTextarea`}),(0,o.jsx)(`p`,{"data-test":`page-description`,className:`text-sm text-muted-foreground`,children:`Test fixtures for Vietnamese IME with real-time markdown rendering. Each cell uses RichtextMarkdownTextarea (V2 hook).`})]}),(0,o.jsx)(`div`,{"data-test":`page-content`,className:`flex-1 overflow-y-auto min-h-0 p-4 pt-2`,children:Object.entries(e).map(([e,n])=>(0,o.jsxs)(`div`,{"data-test":`group-${e}`,className:`mb-6`,children:[(0,o.jsxs)(`h2`,{"data-test":`group-title`,className:`text-sm font-semibold text-muted-foreground mb-2`,children:[`Group `,e,`: `,t[e]||`Other`]}),(0,o.jsx)(`div`,{"data-test":`group-grid`,className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3`,children:n.map(e=>(0,o.jsx)(f,{id:e,initialValue:s[e]},e))})]},e))})]})}export{p as ImeTestPage};