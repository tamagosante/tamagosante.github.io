import{t as e}from"./react-vendor-DiEuJ95v.js";import{Vt as t}from"./radix-ui-ChmltTHn.js";import{t as n}from"./Breadcrumbs-92L1JUgL.js";import{t as r}from"./CodeHighlight-Bl7evZNq.js";var i=e(),a=t(),o=[{title:`Variables, keywords, numbers`,code:`// Declarations + literal types
const answer = 42;
const hex = 0xff_ff;
const big = 1_000_000n;
let pi = 3.14e0;`},{title:`Functions, types, generics`,code:`function format<T>(value: T, prefix: string): string {
  return \`\${prefix}: \${String(value)}\`;
}

interface User { id: number; name: string; }
type Pair<A, B> = readonly [A, B];`},{title:`Strings, templates, regex`,code:'const s = "hello\\nworld";\nconst r = /\\bfoo\\b/gi;\nconst t = `a${ `${1+2}` }b`;\nconst arr = [1, 2, 3];\nconst div = arr[0] / 2;     // division\nconst re2 = /[a-z]+/i;       // regex'},{title:`Multi-line block comment`,code:`/*
 * A doc block spanning
 * several lines.
 */
export const ready = true;`},{title:`Import / export, control flow`,code:`import { useState } from "react";

export function Counter() {
  const [n, setN] = useState(0);
  if (n > 10) return null;
  return n;
}`}];function s(){let e=(0,i.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,a.jsxs)(`div`,{"data-test":`code-highlight-demo`,style:{padding:`2rem`,maxWidth:`60rem`},children:[(0,a.jsx)(`h1`,{"data-test":`code-highlight-demo-title`,children:`Code Highlight Demo`}),(0,a.jsx)(`p`,{"data-test":`code-highlight-demo-intro`,children:`SH-2 → SH-5 deliverables. TypeScript L1 only — L2 lands in SH-7.`}),o.map(c)]}),e[0]=t):t=e[0],t}function c(e){return(0,a.jsx)(l,{title:e.title,code:e.code},e.title)}function l(e){let t=(0,i.c)(8),{title:n,code:o}=e,s;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(s={marginBottom:`1.5rem`},t[0]=s):s=t[0];let c;t[1]===n?c=t[2]:(c=(0,a.jsx)(`h2`,{"data-test":`code-highlight-demo-sample-title`,children:n}),t[1]=n,t[2]=c);let l;t[3]===o?l=t[4]:(l=(0,a.jsx)(r,{code:o,language:`source.ts`}),t[3]=o,t[4]=l);let u;return t[5]!==c||t[6]!==l?(u=(0,a.jsxs)(`section`,{"data-test":`code-highlight-demo-sample`,style:s,children:[c,l]}),t[5]=c,t[6]=l,t[7]=u):u=t[7],u}var u=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Code Highlight`}];function d(e){let t=(0,i.c)(2),r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,a.jsxs)(`div`,{"data-test":`code-highlight-demo-header`,className:`flex-shrink-0 p-6 pb-0`,children:[(0,a.jsx)(`div`,{"data-test":`breadcrumb-section`,className:`mb-4`,children:(0,a.jsx)(n,{items:u})}),(0,a.jsx)(`h1`,{"data-test":`page-title`,className:`mb-2 text-3xl font-bold`,children:`Code Highlight`}),(0,a.jsx)(`p`,{"data-test":`page-description`,className:`mb-4 text-gray-600`,children:`Custom layered (L1 syntactic + L2 semantic) TypeScript syntax highlighter. All scanning, parsing, and theming written in-repo with TextMate scope names.`})]}),t[0]=r):r=t[0];let o;return t[1]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,a.jsxs)(`div`,{"data-test":`code-highlight-demo-page`,className:`flex h-full flex-1 flex-col`,children:[r,(0,a.jsx)(`div`,{"data-test":`code-highlight-demo-content`,className:`min-h-0 flex-1 overflow-y-auto p-6 pt-0`,children:(0,a.jsx)(s,{})})]}),t[1]=o):o=t[1],o}export{d as CodeHighlightDemoPage};