const L={preserveLineBreaks:!0,convertLinks:!0,convertLists:!0,convertTables:!0};function E(e){const t=e.match(/font-size:\s*([\d.]+)pt/i);if(t)return parseFloat(t[1]);const r=e.match(/font-size:\s*([\d.]+)px/i);return r?parseFloat(r[1])/1.333:null}function C(e){const t=e.getAttribute("style")||"",r=e.tagName.toLowerCase();return r==="b"||r==="strong"?!t.includes("font-weight:normal"):!!(t.includes("font-weight:700")||t.includes("font-weight:bold"))}function T(e){const t=e.getAttribute("style")||"",r=e.tagName.toLowerCase();return!!(r==="i"||r==="em"||t.includes("font-style:italic"))}function w(e){const t=e.getAttribute("style")||"",r=e.tagName.toLowerCase();return!!(r==="s"||r==="strike"||r==="del"||t.includes("text-decoration:line-through")||t.includes("text-decoration: line-through"))}function b(e){const t=e.getAttribute("style")||"",r=e.tagName.toLowerCase();return!!(r==="code"||r==="pre"||r==="tt"||t.includes("font-family")&&(t.includes("monospace")||t.includes("Consolas")||t.includes("Courier")||t.includes("Monaco")))}function A(e){return e>=20?1:e>=15?2:e>=12.5?3:null}function h(e,t,r,c=0){const s=e.querySelectorAll(":scope > li");let n="";const u="  ".repeat(c);return s.forEach(o=>{const a=r(o,t,c);n+=`${u}- ${a}
`}),n}function $(e,t,r,c=0){const s=e.querySelectorAll(":scope > li");let n="";const u="  ".repeat(c);return s.forEach((o,a)=>{const l=r(o,t,c);n+=`${u}${a+1}. ${l}
`}),n}function p(e,t,r){const c=e.querySelectorAll("tr");if(c.length===0)return"";let s="",n=!0,u=0;return c.forEach(o=>{const a=o.querySelectorAll("td, th"),l=[];a.forEach(d=>{const f=r(d,t).trim().replace(/\n/g," ");l.push(f)}),n&&(u=l.length),s+=`| ${l.join(" | ")} |
`,n&&(s+=`| ${Array(u).fill("---").join(" | ")} |
`,n=!1)}),s}function i(e,t,r={}){let c="";for(const s of Array.from(e.childNodes))s.nodeType===Node.TEXT_NODE?c+=s.textContent||"":s.nodeType===Node.ELEMENT_NODE&&(c+=N(s,t,r));return c}function g(e,t,r){let c="",s="";for(const n of Array.from(e.childNodes))if(n.nodeType===Node.TEXT_NODE)c+=n.textContent||"";else if(n.nodeType===Node.ELEMENT_NODE){const u=n,o=u.tagName.toLowerCase();o==="ul"?s+=h(u,t,g,r+1):o==="ol"?s+=$(u,t,g,r+1):c+=N(u,t)}return c.trim()+(s?`
`+s.trimEnd():"")}function N(e,t,r={}){const c=e.tagName.toLowerCase(),s=e.getAttribute("style")||"";switch(c){case"h1":return`# ${i(e,t,{insideHeading:!0})}
`;case"h2":return`## ${i(e,t,{insideHeading:!0})}
`;case"h3":return`### ${i(e,t,{insideHeading:!0})}
`;case"h4":return`#### ${i(e,t,{insideHeading:!0})}
`;case"h5":return`##### ${i(e,t,{insideHeading:!0})}
`;case"h6":return`###### ${i(e,t,{insideHeading:!0})}
`;case"p":return`${i(e,t)}
`;case"br":return`
`;case"hr":return`---
`;case"blockquote":return`> ${i(e,t).trim().replace(/\n/g,`
> `)}
`;case"a":if(t.convertLinks){const d=e.getAttribute("href")||"";return`[${i(e,t)}](${d})`}return i(e,t);case"ul":return t.convertLists?h(e,t,g):i(e,t);case"ol":return t.convertLists?$(e,t,g):i(e,t);case"li":return i(e,t);case"table":return t.convertTables?p(e,t,i):i(e,t);case"code":case"pre":return`\`${e.textContent||""}\``;case"strong":case"b":return s.includes("font-weight:normal")?i(e,t):`**${i(e,t)}**`;case"em":case"i":return`*${i(e,t)}*`;case"s":case"strike":case"del":return`~~${i(e,t)}~~`;case"meta":case"style":case"script":return""}let n=i(e,t,r);if(!r.insideHeading){const d=E(s);if(d){const f=A(d);if(f){const y="#".repeat(f);return n=n.replace(/^\*\*(.+)\*\*$/,"$1"),`${y} ${n.trim()}
`}}}const u=!r.insideHeading&&C(e),o=T(e),a=w(e);return b(e)?`\`${e.textContent||""}\``:(a&&(n=`~~${n}~~`),o&&(n=`*${n}*`),u&&(n=`**${n}**`),n)}function x(e){return e.replace(/\n{3,}/g,`

`).split(`
`).map(t=>t.trimEnd()).join(`
`).trim()}function k(e,t={}){const r={...L,...t},c=document.createElement("div");c.innerHTML=e;const s=i(c,r);return x(s)}function v(e){return e.includes("docs-internal-guid")||e.includes('id="docs-internal-guid')}export{k as h,v as i};
