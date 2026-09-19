import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{d as t}from"./forms-CI8_RRjb.js";import{Bt as n}from"./radix-ui-C8Se2y1c.js";import"./utils-Cm2GyVkP.js";import"./button-CNwkKyGm.js";import"./label-Df9NoWUT.js";import"./DraggablePopover-rqFiHpCR.js";import"./checkbox-BvvEhk2q.js";import"./markdown-constants-CDqONpTJ.js";import"./markdownUtils-CP4-5dU5.js";import"./typescript-BXd4BHpq.js";import"./fenceLanguages-B1i_TJl9.js";/* empty css                           */import"./setCursorPosition-LwFT5lYo.js";import"./UiButtonWithExpandOption-_6pWeXvh.js";import"./DebugHistoryCard-bxCiJGtz.js";import"./CodeHighlightView-Dqq5owkI.js";import"./useRealtimeHighlight-Dlxa9-LS.js";/* empty css                            */import{t as r}from"./CodeHighlightEditor-mC99lODU.js";import{t as i}from"./ExtendedTestPage-aYo4Nakb.js";var a=e(t(),1),o=n(),s=10,c=280,l={TIER_1:64,TIER_2:88,TIER_3:120,TIER_4:160,TIER_5:210,MAX:280};function u({value:e,onChange:t,mode:n,registerSetValue:i}){let s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{i(e=>{s.current?.setValue(e)})},[i]),n===`preview`?(0,o.jsx)(r,{ref:s,initialText:e,onChange:t,className:`h-full`}):(0,o.jsx)(`textarea`,{"data-test":`code-highlight-raw-textarea`,className:`code-highlight-raw-textarea w-full h-full resize-none bg-transparent outline-none font-mono text-sm p-3 leading-relaxed`,value:e,onChange:e=>t(e.target.value),spellCheck:!1,autoCorrect:`off`,autoCapitalize:`off`,autoComplete:`off`,wrap:`off`})}var d=e=>e.querySelector(`textarea`);function f(e,t){Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,`value`)?.set?.call(e,t)}var p={pageTitle:`Code Highlight Extended`,breadcrumbLabel:`Code Highlight Extended`,pageDataTest:`code-highlight-extended-page`,previewLabel:`Preview`,rawLabel:`Raw`,gridMinColumnWidth:c,renderEditor:e=>(0,o.jsx)(u,{...e}),readCursorInfo:e=>{let t=d(e);if(!t)return null;let n=t.selectionStart??0,r=t.value,i=r.substring(0,n).split(`
`);return{line:i.length,column:i[i.length-1].length+1,position:n,markdownPosition:n,content:r,cursorContext:`${r.substring(Math.max(0,n-s),n)}{|}${r.substring(n,Math.min(r.length,n+s))}`.replace(/\n/g,`↵`)}},getInnerHTML:e=>e.querySelector(`[data-test="code-highlight-editor-overlay"]`)?.innerHTML,computeCellHeight:(e,t)=>{let n=t.split(`
`).length;return n<=1?l.TIER_1:n<=2?l.TIER_2:n<=4?l.TIER_3:n<=6?l.TIER_4:n<=10?l.TIER_5:l.MAX},replayStrategy:{getEditor:e=>d(e),setCursor:(e,t)=>{e.setSelectionRange(t,t)},applyKey:(e,t)=>{let n=e;f(n,t.content),n.dispatchEvent(new Event(`input`,{bubbles:!0})),requestAnimationFrame(()=>n.setSelectionRange(t.position,t.position))}}},m={"A1-control-flow":`if (x > 0) {
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
const v = useMemo<number>(calc);`},h=e=>t=>t.startsWith(e),g={fixtures:m,groups:[{name:`A: Keywords`,match:h(`A`)},{name:`B: Literals & Numbers`,match:h(`B`)},{name:`C: Strings & Templates`,match:h(`C`)},{name:`D: Comments`,match:h(`D`)},{name:`E: Regex`,match:h(`E`)},{name:`F: Operators`,match:h(`F`)},{name:`G: Types & Generics`,match:h(`G`)},{name:`H: Declarations`,match:h(`H`)},{name:`I: Decorators & Modifiers`,match:h(`I`)},{name:`J: Function & Method Calls`,match:h(`J`)}],adapter:p};function _(){return(0,o.jsx)(i,{config:g})}export{_ as CodeHighlightExtendedPage};