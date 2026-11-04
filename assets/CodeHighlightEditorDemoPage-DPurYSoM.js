import{t as e}from"./react-vendor-DiEuJ95v.js";import{Vt as t}from"./radix-ui-ChmltTHn.js";import{t as n}from"./Breadcrumbs-DkPghYrB.js";import{t as r}from"./CodeHighlightEditor-Cy64VYNS.js";var i=e(),a=t(),o=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Code Highlight Editor`}],s=`// Type directly on top of the colored tokens.
// Caret + selection are visible; text is rendered by the overlay below.

interface User {
  id: number;
  name: string;
}

function greet<T extends User>(user: T): string {
  const tag = \`#\${user.id}\`;
  return \`Hello, \${user.name} (\${tag})!\`;
}

const re = /[a-z]+/gi;
/* multi-line
   block comment */
export const ready = true;`;function c(e){let t=(0,i.c)(2),c;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,a.jsxs)(`div`,{"data-test":`code-highlight-editor-demo-header`,className:`flex-shrink-0 p-6 pb-0`,children:[(0,a.jsx)(`div`,{"data-test":`breadcrumb-section`,className:`mb-4`,children:(0,a.jsx)(n,{items:o})}),(0,a.jsx)(`h1`,{"data-test":`page-title`,className:`mb-2 text-3xl font-bold`,children:`Code Highlight Editor`}),(0,a.jsx)(`p`,{"data-test":`page-description`,className:`mb-4 text-gray-600`,children:`Inline overlay editor — type directly on highlighted tokens. A transparent textarea on top owns input, IME and selection; a highlighted overlay underneath paints the colored tokens. The caret stays glued to the right token via shared box-model and scroll synchronization.`})]}),t[0]=c):c=t[0];let l;return t[1]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,a.jsxs)(`div`,{"data-test":`code-highlight-editor-demo-page`,className:`flex h-full flex-1 flex-col`,children:[c,(0,a.jsx)(`div`,{"data-test":`code-highlight-editor-demo-content`,className:`min-h-0 flex-1 overflow-y-auto p-6 pt-0`,children:(0,a.jsx)(`div`,{"data-test":`code-highlight-editor-demo-frame`,className:`h-full min-h-[400px] overflow-hidden rounded-md border border-border bg-background`,children:(0,a.jsx)(r,{initialText:s,className:`h-full`})})})]}),t[1]=l):l=t[1],l}export{c as CodeHighlightEditorDemoPage};