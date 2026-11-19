var e={"A1-h1":`# Hello`,"A2-h2":`## Hello`,"A3-h3":`### Hello`,"A4-blockquote":`> Quote`,"A5-hr":`---`,"B1-ul-single":`- item`,"B2-ul-multiple":`- one
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
| Nam | 25 |`,"IME10-header":`## Tiêu đề`},t=[{name:`A: Headers`,match:e=>e.startsWith(`A`),layout:`grid`},{name:`B: Lists`,match:e=>e.startsWith(`B`)&&!e.startsWith(`BC`),layout:`grid`},{name:`C: Format`,match:e=>e.startsWith(`C`)&&!e.startsWith(`CF`),layout:`grid`},{name:`CF: Code Fences`,match:e=>e.startsWith(`CF`),layout:`grid`},{name:`D: Newlines`,match:e=>e.startsWith(`D`)&&!e.startsWith(`DT`),layout:`grid`},{name:`E: Tables`,match:e=>e.startsWith(`E`),layout:`grid`},{name:`F: Block+Block`,match:e=>e.startsWith(`F`),layout:`grid`},{name:`G: Block+Fmt`,match:e=>e.startsWith(`G`),layout:`grid`},{name:`H: Table+`,match:e=>e.startsWith(`H`),layout:`grid`},{name:`I: Combined`,match:e=>e.startsWith(`I`),layout:`grid`},{name:`J: Table First`,match:e=>e.startsWith(`J`),layout:`grid`},{name:`K: Links`,match:e=>e.startsWith(`K`),layout:`grid`},{name:`L: Link+Block`,match:e=>e.startsWith(`L`),layout:`grid`},{name:`M: Link+Table`,match:e=>e.startsWith(`M`),layout:`grid`},{name:`W: Wiki-Links`,match:e=>e.startsWith(`W`),layout:`grid`},{name:`DT: Dictionary {{term}}`,match:e=>e.startsWith(`DT`),layout:`grid`},{name:`T: Typing`,match:e=>e.startsWith(`T`)&&!e.startsWith(`TD`),layout:`grid`},{name:`TD: Todo`,match:e=>e.startsWith(`TD`),layout:`grid`},{name:`BC-35`,match:e=>e.startsWith(`BC`),layout:`single`}];export{t as n,e as t};