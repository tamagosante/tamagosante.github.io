import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t}from"./forms-CGyoCzTL.js";import{t as n}from"./react-vendor-DiEuJ95v.js";import{Vt as r}from"./radix-ui-ChmltTHn.js";import{t as i}from"./CodeHighlightEditor-Cy64VYNS.js";import{t as a}from"./ExtendedTestPage-BVsP7dE3.js";var o=n(),s=e(t(),1),c=r(),l=10,u=280,d={TIER_1:64,TIER_2:88,TIER_3:120,TIER_4:160,TIER_5:210,MAX:280};function f(e){let t=(0,o.c)(11),{value:n,onChange:r,mode:a,registerSetValue:l}=e,u=(0,s.useRef)(null),d,f;if(t[0]===l?(d=t[1],f=t[2]):(d=()=>{l(e=>{u.current?.setValue(e)})},f=[l],t[0]=l,t[1]=d,t[2]=f),(0,s.useEffect)(d,f),a===`preview`){let e;return t[3]!==r||t[4]!==n?(e=(0,c.jsx)(i,{ref:u,initialText:n,onChange:r,className:`h-full`}),t[3]=r,t[4]=n,t[5]=e):e=t[5],e}let p;t[6]===r?p=t[7]:(p=e=>r(e.target.value),t[6]=r,t[7]=p);let m;return t[8]!==p||t[9]!==n?(m=(0,c.jsx)(`textarea`,{"data-test":`code-highlight-raw-textarea`,className:`code-highlight-raw-textarea w-full h-full resize-none bg-transparent outline-none font-mono text-sm p-3 leading-relaxed`,value:n,onChange:p,spellCheck:!1,autoCorrect:`off`,autoCapitalize:`off`,autoComplete:`off`,wrap:`off`}),t[8]=p,t[9]=n,t[10]=m):m=t[10],m}var p=e=>e.querySelector(`textarea`);function m(e,t){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,`value`)?.set?.call(e,t)}var h={pageTitle:`Code Highlight Extended`,breadcrumbLabel:`Code Highlight Extended`,pageDataTest:`code-highlight-extended-page`,previewLabel:`Preview`,rawLabel:`Raw`,gridMinColumnWidth:u,renderEditor:e=>(0,c.jsx)(f,{...e}),readCursorInfo:e=>{let t=p(e);if(!t)return null;let n=t.selectionStart??0,r=t.value,i=r.substring(0,n).split(`
`);return{line:i.length,column:i[i.length-1].length+1,position:n,markdownPosition:n,content:r,cursorContext:`${r.substring(Math.max(0,n-l),n)}{|}${r.substring(n,Math.min(r.length,n+l))}`.replace(/\n/g,`↵`)}},getInnerHTML:e=>e.querySelector(`[data-test="code-highlight-editor-overlay"]`)?.innerHTML,computeCellHeight:(e,t)=>{let n=t.split(`
`).length;return n<=1?d.TIER_1:n<=2?d.TIER_2:n<=4?d.TIER_3:n<=6?d.TIER_4:n<=10?d.TIER_5:d.MAX},replayStrategy:{getEditor:e=>p(e),setCursor:(e,t)=>{e.setSelectionRange(t,t)},applyKey:(e,t)=>{let n=e;m(n,t.content),n.dispatchEvent(new Event(`input`,{bubbles:!0})),requestAnimationFrame(()=>n.setSelectionRange(t.position,t.position))}}},g={"A1-control-flow":`if (x > 0) {
  return x;
} else {
  while (x) break;
}`,"A2-import-export":`import { foo } from './module';
export const bar = foo;
export default bar;`,"A3-declarations":`function f() {}
class C {}
const x = 1;
let y = 2;
var z = 3;`,"A4-operators-kw":`typeof x;
x instanceof C;
const c = new C();
delete obj.key;`,"B1-bool-null":`const a = true;
const b = false;
const c = null;
const d = undefined;`,"B2-decimal-float":`const n = 42;
const f = 3.14;
const e = 1.5e10;`,"B3-hex-bin-oct":`const h = 0xff;
const b = 0b1010;
const o = 0o755;`,"B4-bigint":`const big = 9007199254740991n;
const hexBig = 0xffn;`,"C1-single-double":`const s = 'hello';
const d = "world";`,"C2-template":"const t = `hello world`;","C3-interpolation":"const t = `sum is ${a + b} done`;","C4-nested-template":"const t = `outer ${`inner ${x}`} end`;","D1-line":`// a line comment
const x = 1; // trailing comment`,"D2-block":`/* a block comment */
const y = 2;`,"D3-multiline-block":`/*
 * multi-line
 * block comment
 */
function f() {}`,"E1-literal-flags":`const re = /ab+c/gi;
const d = /\\d{2,4}/u;`,"E2-regex-vs-division":`const half = 10 / 2;
const re = /\\w+/g;`,"F1-arrow-spread":`const f = (x) => x * 2;
const arr = [...a, ...b];`,"F2-optional-nullish":`const v = obj?.prop ?? fallback;
obj?.method?.();`,"F3-comparison-logical":`const ok = a === b && c !== d || e >= f;`,"G1-annotations":`const n: number = 1;
const s: string = 'x';
let ok: boolean = true;`,"G2-generics":`function id<T>(value: T): T {
  return value;
}`,"G3-constraints":`type Keys<T extends object> = keyof T;`,"G4-union-intersection":`type U = string | number | null;
type I = A & B & C;`,"G5-keyof-typeof":`type K = keyof Config;
type V = typeof defaults;`,"H1-function":"function greet(name: string): string {\n  return `Hi ${name}`;\n}","H2-class-members":`class Point {
  x = 0;
  move(dx: number) {
    this.x += dx;
  }
}`,"H3-interface-type":`interface User {
  id: number;
  name: string;
}
type Id = number;`,"H4-enum":`enum Color {
  Red,
  Green,
  Blue,
}`,"H5-params":`function add(a: number, b: number = 0): number {
  return a + b;
}`,"I1-access-modifiers":`class S {
  public a = 1;
  private b = 2;
  protected c = 3;
}`,"I2-readonly-static":`class S {
  readonly id = 1;
  static count = 0;
}`,"I3-decorator":`@Component({ selector: 'app' })
class AppComponent {}`,"J1-function-call":"const total = compute(a, b);\nsetBadge(`${hits.length} found`);","J2-method-call":`store.setState({ selected: hits.map((h) => h.id) });
nodes.filter((n) => n.active);`,"J3-chained-call":`list.filter(ok).map(fn).forEach(log);`,"J4-optional-generic-call":`api?.fetch?.();
const v = useMemo<number>(calc);`},_=e=>t=>t.startsWith(e),v={fixtures:g,groups:[{name:`A: Keywords`,match:_(`A`)},{name:`B: Literals & Numbers`,match:_(`B`)},{name:`C: Strings & Templates`,match:_(`C`)},{name:`D: Comments`,match:_(`D`)},{name:`E: Regex`,match:_(`E`)},{name:`F: Operators`,match:_(`F`)},{name:`G: Types & Generics`,match:_(`G`)},{name:`H: Declarations`,match:_(`H`)},{name:`I: Decorators & Modifiers`,match:_(`I`)},{name:`J: Function & Method Calls`,match:_(`J`)}],adapter:h};function y(){let e=(0,o.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,c.jsx)(a,{config:v}),e[0]=t):t=e[0],t}export{y as CodeHighlightExtendedPage};