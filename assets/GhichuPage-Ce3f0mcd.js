import{n as e,r as t}from"./rolldown-runtime-Dw2cE7zH.js";import{d as n}from"./forms-CI8_RRjb.js";import{Bt as r}from"./radix-ui-q_jnKOvK.js";import"./utils-C5VWb_6C.js";import{Pi as i,Wr as a,_t as o,k as s,vt as c,yt as l}from"./icons-DQMG1WfA.js";import{t as u}from"./button-D2QHUBE5.js";import{t as d}from"./input-dHv41uhx.js";import"./tooltip-uLJ2Sp5A.js";import{t as f}from"./DraggablePopover-DNVAsXf6.js";import"./CanvasStateV2-CykgrMP0.js";import"./CanvasConfigurationV2-Ck49SwlD.js";import"./CanvasApiClient-BfYrtlcH.js";import"./diContainer-DpqvYH1s.js";import"./ollama-BVHkfTSZ.js";import"./OllamaApi-E25-vKge.js";import"./apiSyncActions-YwfzukkA.js";import"./markdownToHtml-7_o__anl.js";import{i as p,r as m,t as h}from"./popover-DqXktyPI.js";import{t as g}from"./MobileSheet-CAtf-xxE.js";import{t as _}from"./TextEditingService-DLN20gQO.js";import{n as v,t as y}from"./FeatureViewer-6LSHrV6W.js";var b=t(n(),1),x=class e{constructor(e,t,n,r,i,a=null){this.id=e,this.title=t,this.content=n,this.createdAt=r,this.updatedAt=i,this.opLog=a}static create(t,n=``){let r=new Date;return new e(crypto.randomUUID(),t,n,r,r)}static fromData(t){return new e(t.id,t.title,t.content,new Date(t.createdAt),new Date(t.updatedAt),t.opLog??null)}toJSON(){let e={id:this.id,title:this.title,content:this.content,createdAt:this.createdAt.toISOString(),updatedAt:this.updatedAt.toISOString()};return this.opLog&&(e.opLog=this.opLog),e}updateContent(e){this.content=e,this.updatedAt=new Date}updateOpLog(e){this.opLog=e,this.updatedAt=new Date}updateTitle(e){this.title=e,this.updatedAt=new Date}},S=`Untitled`,C=`ghichu_notes`,w=`ghichu_feature_viewer_config`,T=`ghichu.floatingInput`,E=`append-content`,D=`scroll`,O=`relative`,k=`view`,A=class{async getAll(){let e=localStorage.getItem(C);return e?JSON.parse(e).map(e=>x.fromData(e)):[]}async getById(e){return(await this.getAll()).find(t=>t.id===e)??null}async create(e){let t=await this.getAll();return t.push(e),this.persist(t),e}async update(e){let t=await this.getAll(),n=t.findIndex(t=>t.id===e.id);if(n===-1)throw Error(`Note ${e.id} not found`);return t[n]=e,this.persist(t),e}async delete(e){let t=await this.getAll(),n=t.filter(t=>t.id!==e);if(n.length===t.length)throw Error(`Note ${e} not found`);this.persist(n)}persist(e){localStorage.setItem(C,JSON.stringify(e.map(e=>e.toJSON())))}},ee=class{constructor(e){this.repository=e}getAll(){return this.repository.getAll()}getById(e){return this.repository.getById(e)}async create(e,t=``){let n=x.create(e,t);return this.repository.create(n)}async appendContent(e,t){let n=await this.repository.getById(e);if(!n)throw Error(`Note ${e} not found`);let r=n.content.length>0?`<br>`:``;return n.updateContent(n.content+r+t),this.repository.update(n)}async updateContent(e,t){let n=await this.repository.getById(e);if(!n)throw Error(`Note ${e} not found`);return n.updateContent(t),this.repository.update(n)}async updateTitle(e,t){let n=await this.repository.getById(e);if(!n)throw Error(`Note ${e} not found`);return n.updateTitle(t),this.repository.update(n)}async saveOpLog(e,t,n){let r=await this.repository.getById(e);if(!r)throw Error(`Note ${e} not found`);return r.updateOpLog(t),r.updateContent(n),this.repository.update(r)}delete(e){return this.repository.delete(e)}},te=class{commands=new Map;register(e){let t=this.commands.get(e.scope)??[];t.push(e),this.commands.set(e.scope,t)}unregister(e){for(let[t,n]of this.commands){let r=n.filter(t=>t.id!==e);r.length===0?this.commands.delete(t):this.commands.set(t,r)}}execute(e,t){let n=this.commands.get(e);return!n||n.length===0?!1:(n[0].execute(t),!0)}getCommands(e){return this.commands.get(e)??[]}},ne=class{saveTimer=null;constructor(e,t){this.noteService=e,this.textService=t}async loadAll(){let e=await this.noteService.getAll();if(e.length>0)return{notes:e,active:e[0]};let t=await this.noteService.create(S);return{notes:[t],active:t}}initTextEditing(e){let t=e.id;if(e.opLog)return this.textService.loadLog(t,e.opLog),this.textService.getLines(t);if(e.content.trim().length>0){let n=e.content.split(/<br\s*\/?>/).filter(e=>e.length>0);for(let e of n)this.textService.addEntry(t,e)}return this.textService.getLines(t)}async selectNote(e){return this.noteService.getById(e)}async createNote(e=S){return this.noteService.create(e)}appendContent(e,t){return this.textService.addEntry(e,t),this.schedulePersist(e),this.textService.getLines(e)}applyEdit(e,t){return this.textService.applyEdit(e,t),this.schedulePersist(e),this.textService.getLines(e)}undo(e){return this.textService.undo(e),this.schedulePersist(e),this.textService.getLines(e)}redo(e){return this.textService.redo(e),this.schedulePersist(e),this.textService.getLines(e)}canUndo(e){return this.textService.canUndo(e)}canRedo(e){return this.textService.canRedo(e)}getLines(e){return this.textService.getLines(e)}async deleteNote(e){await this.noteService.delete(e),this.textService.removeLog(e)}flushPendingSave(){this.saveTimer&&clearTimeout(this.saveTimer)}schedulePersist(e){this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{let t=this.textService.serializeLog(e);if(!t)return;let n=this.textService.getLines(e).map(e=>e.text).join(`<br>`);this.noteService.saveOpLog(e,t,n)},400)}},j=new class{_repository=null;_noteService=null;_textEditingService=null;_commandRegistry=null;_noteFacade=null;get repository(){return this._repository||=new A,this._repository}get noteService(){return this._noteService||=new ee(this.repository),this._noteService}get textEditingService(){return this._textEditingService||=new _,this._textEditingService}get commandRegistry(){return this._commandRegistry||=new te,this._commandRegistry}get noteFacade(){return this._noteFacade||=new ne(this.noteService,this.textEditingService),this._noteFacade}setRepository(e){this._repository=e,this._noteService=null}reset(){this._repository=null,this._noteService=null,this._textEditingService=null,this._commandRegistry=null,this._noteFacade=null}};function M(){let[e,t]=(0,b.useState)([]),[n,r]=(0,b.useState)(null),[i,a]=(0,b.useState)(!0),[o,s]=(0,b.useState)([]),[c,l]=(0,b.useState)(!1),[u,d]=(0,b.useState)(!1),f=j.noteFacade,p=(0,b.useCallback)(e=>{s(f.getLines(e)),l(f.canUndo(e)),d(f.canRedo(e))},[f]);(0,b.useEffect)(()=>{(async()=>{a(!0);let{notes:e,active:n}=await f.loadAll();t(e),r(n),f.initTextEditing(n),p(n.id),a(!1)})()},[]);let m=(0,b.useCallback)(async e=>{let t=await f.selectNote(e);t&&(r(t),f.initTextEditing(t),p(t.id))},[f,p]),h=(0,b.useCallback)(async e=>{let n=await f.createNote(e);return t(e=>[n,...e]),r(n),p(n.id),n},[f,p]),g=(0,b.useCallback)(e=>{n&&(f.appendContent(n.id,e),p(n.id))},[n,f,p]),_=(0,b.useCallback)(e=>{n&&(f.applyEdit(n.id,e),p(n.id))},[n,f,p]),v=(0,b.useCallback)(()=>{n&&(f.undo(n.id),p(n.id))},[n,f,p]),y=(0,b.useCallback)(()=>{n&&(f.redo(n.id),p(n.id))},[n,f,p]),x=(0,b.useCallback)(async e=>{await f.deleteNote(e),t(t=>{let i=t.filter(t=>t.id!==e);if(n?.id===e){let e=i[0]??null;r(e),e&&(f.initTextEditing(e),p(e.id))}return i})},[n,f,p]);return(0,b.useEffect)(()=>()=>f.flushPendingSave(),[f]),{notes:e,activeNote:n,lines:o,canUndo:c,canRedo:u,isLoading:i,selectNote:m,createNote:h,appendContent:g,applyEdit:_,undo:v,redo:y,deleteNote:x}}function N({onNewNote:e,onDeleteNote:t,onUndo:n,onRedo:r,onFloatingSubmit:i,onFloatingEscape:a,onFocusFloatingInput:o}){return(0,b.useMemo)(()=>[{combo:{key:`n`,ctrlKey:!0,shiftKey:!0},handler:e,scope:[`global`,`editor`,`floating-input`]},{combo:{key:`Backspace`,ctrlKey:!0,shiftKey:!0},handler:t,scope:[`global`,`editor`]},{combo:{key:`z`,ctrlKey:!0},handler:n,scope:[`global`,`editor`]},{combo:{key:`z`,ctrlKey:!0,shiftKey:!0},handler:r,scope:[`global`,`editor`]},{combo:{key:`/`,ctrlKey:!0},handler:o,scope:[`global`,`editor`]},{combo:{key:`Enter`},handler:i,scope:`floating-input`},{combo:{key:`Escape`},handler:a,scope:`floating-input`}],[e,t,n,r,i,a,o])}var P=`data-keyboard-scope`;function F(){let e=document.activeElement;if(!e)return`global`;let t=e.closest(`[${P}]`);if(t){let e=t.getAttribute(P);if(e)return e}return e.contentEditable===`true`||[`INPUT`,`TEXTAREA`].includes(e.nodeName)?`editor`:`global`}function I(e,t){let n=e.scope;return n?(Array.isArray(n)?n:[n]).includes(t):t===`global`}function L(e){let t=[];return e.ctrlKey&&t.push(`ctrl`),e.metaKey&&t.push(`meta`),e.shiftKey&&t.push(`shift`),e.altKey&&t.push(`alt`),`${t.join(`+`)}-${e.key.toLowerCase()}`}function R(e){return L({key:e.key,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey,altKey:e.altKey})}var z=class{bindings=new Map;target=null;boundHandler=null;attach(e=document){this.target&&this.detach(),this.target=e,this.boundHandler=e=>this.handleKeyDown(e),this.target.addEventListener(`keydown`,this.boundHandler)}detach(){this.target&&this.boundHandler&&this.target.removeEventListener(`keydown`,this.boundHandler),this.target=null,this.boundHandler=null}register(e){let t=L(e.combo),n=this.bindings.get(t)??[];return n.push(e),this.bindings.set(t,n),()=>{let n=this.bindings.get(t);if(n){let r=n.indexOf(e);r!==-1&&n.splice(r,1),n.length===0&&this.bindings.delete(t)}}}registerMany(e){let t=e.map(e=>this.register(e));return()=>t.forEach(e=>e())}unregisterAll(){this.bindings.clear()}destroy(){this.unregisterAll(),this.detach()}handleKeyDown(e){let t=R(e),n=this.bindings.get(t);if(!n||n.length===0)return;let r=F(),i=n.find(e=>I(e,r));i&&(i.preventDefault!==!1&&e.preventDefault(),i.handler(e))}};function B(e,t){let n=(0,b.useRef)(null);return(0,b.useEffect)(()=>(n.current=new z,()=>{n.current?.destroy(),n.current=null}),[]),(0,b.useEffect)(()=>{let t=n.current,r=e.current;if(!(!t||!r))return t.attach(r),()=>t.detach()},[e]),(0,b.useEffect)(()=>{let e=n.current;if(e)return e.registerMany(t)},[t]),n}function V(e){let t=(0,b.useRef)(null),n=(0,b.useRef)(null),{activeNote:r,lines:i,canUndo:a,canRedo:o,isLoading:s,appendContent:c,applyEdit:l,undo:u,redo:d,createNote:f,deleteNote:p}=M();(0,b.useEffect)(()=>(j.commandRegistry.register({id:E,scope:T,execute:e=>c(e)}),()=>{j.commandRegistry.unregister(E)}),[c]);let m=(0,b.useCallback)(()=>{f()},[f]),h=(0,b.useCallback)(()=>{r&&p(r.id)},[r,p]),g=(0,b.useCallback)(()=>{let e=t.current?.value.trim();e&&(j.commandRegistry.execute(T,e),t.current&&(t.current.value=``,t.current.focus()),requestAnimationFrame(()=>{let e=n.current;e&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})}))},[]);return B(e,N({onNewNote:m,onDeleteNote:h,onUndo:u,onRedo:d,onFloatingSubmit:g,onFloatingEscape:(0,b.useCallback)(()=>{t.current?.blur()},[]),onFocusFloatingInput:(0,b.useCallback)(()=>{t.current?.focus()},[])})),{floatingInputRef:t,editorScrollRef:n,handleFloatingSubmit:g,lines:i,canUndo:a,canRedo:o,isLoading:s,appendContent:c,applyEdit:l,undo:u,redo:d}}var H=r();function U(e){return new Date(e).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}function W(e){let t=Date.now()-new Date(e).getTime(),n=Math.floor(t/1e3);if(n<60)return`now`;let r=Math.floor(n/60);if(r<60)return`${r}m`;let i=Math.floor(r/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`}function G(e,t){return t===`relative`?W(e):U(e)}function K({lines:e,displayMode:t,timestampFormat:n,ghichuMode:r,onLineEdit:i,onDeleteLine:a}){return(0,H.jsx)(`div`,{"data-test":`ghichu-editor`,className:`min-h-full space-y-0.5`,children:e.length===0?(0,H.jsx)(`p`,{"data-test":`ghichu-editor-empty`,className:`text-muted-foreground text-sm`,children:`No content yet. Use the input below to add text.`}):e.map((e,o)=>(0,H.jsx)(J,{line:e,displayMode:t,timestampFormat:n,ghichuMode:r,onEdit:e=>i(o,e),onDelete:()=>a(o)},`${o}-${e.lastModified}`))})}var q={scroll:`overflow-x-auto whitespace-nowrap`,wrap:`whitespace-pre-wrap break-words`};function J({line:e,displayMode:t,timestampFormat:n,ghichuMode:r,onEdit:i,onDelete:a}){let o=(0,b.useRef)(null),[s,c]=(0,b.useState)(!1),l=r===`edit`,u=(0,b.useCallback)(()=>{let t=o.current?.textContent??``;t!==e.text&&i(t)},[e.text,i]),d=(0,b.useCallback)(()=>{l||c(e=>!e)},[l]);return(0,H.jsxs)(`div`,{"data-test":`ghichu-editor-line`,className:`group flex items-baseline gap-2 font-mono text-sm ${l?``:`cursor-pointer`} ${s&&!l?`bg-primary/10 rounded`:``}`,onClick:l?void 0:d,children:[(0,H.jsx)(`span`,{"data-test":`ghichu-editor-timestamp`,className:`text-muted-foreground/60 text-[10px] flex-shrink-0 select-none text-right ${n===`relative`?`w-4`:`w-10`}`,children:G(e.lastModified,n)}),(0,H.jsx)(`span`,{"data-test":`ghichu-editor-text`,ref:o,contentEditable:l,suppressContentEditableWarning:!0,onBlur:l?u:void 0,className:`flex-1 min-w-0 outline-none px-1 ${q[t]} ${l?`border-b border-transparent hover:border-border focus:border-primary`:`select-text`}`,children:e.text}),(0,H.jsx)(Y,{timestamp:e.lastModified,onDelete:a})]})}function Y({timestamp:e,onDelete:t}){let[n,r]=(0,b.useState)(!1),o=(0,b.useCallback)(()=>{r(!1),t()},[t]);return(0,H.jsxs)(`div`,{"data-test":`ghichu-editor-line-actions`,className:`flex items-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity`,children:[(0,H.jsx)(u,{"data-test":`ghichu-editor-line-calendar`,variant:`ghost`,size:`icon`,className:`h-6 w-6`,title:new Date(e).toLocaleString(),onMouseDown:e=>e.preventDefault(),children:(0,H.jsx)(i,{className:`h-3 w-3`})}),(0,H.jsxs)(h,{open:n,onOpenChange:r,children:[(0,H.jsx)(p,{asChild:!0,children:(0,H.jsx)(u,{"data-test":`ghichu-editor-line-menu`,variant:`ghost`,size:`icon`,className:`h-6 w-6`,onMouseDown:e=>e.preventDefault(),children:(0,H.jsx)(a,{className:`h-3 w-3`})})}),(0,H.jsx)(m,{"data-test":`ghichu-editor-line-menu-popover`,align:`end`,className:`w-36 p-1`,children:(0,H.jsxs)(`button`,{"data-test":`ghichu-editor-line-delete`,onClick:o,className:`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors`,children:[(0,H.jsx)(s,{className:`h-3.5 w-3.5`}),`Delete`]})})]})]})}var X=(0,b.forwardRef)(function({placeholder:e=`Type a command...`,onSubmit:t,onSettingsOpen:n},r){let[i,a]=(0,b.useState)(!1),o=()=>{a(!1),n?.()};return(0,H.jsxs)(`div`,{"data-test":`ghichu-floating-input`,"data-keyboard-scope":`floating-input`,className:`absolute bottom-2 left-0 right-0 flex gap-1 rounded-lg bg-white/80 py-1 backdrop-blur-sm dark:bg-zinc-900/80`,children:[(0,H.jsxs)(h,{open:i,onOpenChange:a,children:[(0,H.jsx)(p,{asChild:!0,children:(0,H.jsx)(u,{"data-test":`ghichu-floating-input-config`,variant:`ghost`,size:`icon`,onMouseDown:e=>e.preventDefault(),className:`h-11 w-11 shrink-0`,children:(0,H.jsx)(c,{className:`h-4 w-4`})})}),(0,H.jsx)(m,{"data-test":`ghichu-config-popover`,align:`start`,className:`w-40 p-1`,children:(0,H.jsx)(`button`,{"data-test":`ghichu-config-settings`,onClick:o,className:`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted transition-colors`,children:`Settings`})})]}),(0,H.jsx)(d,{"data-test":`ghichu-floating-input-field`,ref:r,placeholder:e,className:`h-11 text-base shadow-lg`}),(0,H.jsx)(u,{"data-test":`ghichu-floating-input-send`,variant:`ghost`,size:`icon`,onMouseDown:e=>e.preventDefault(),onClick:t,className:`h-11 w-11 shrink-0`,children:(0,H.jsx)(l,{className:`h-4 w-4`})})]})}),re=e({default:()=>ie}),ie=`# @version 2.1.0
@v2.1.0 @latest-CS-1
Feature: Keyboard Event Service
  Provides scoped keyboard shortcuts for the Ghichu app.

  # Shortcut Handling
  @added-TP-3
  Scenario: Pressing a registered shortcut triggers its action
  @added-TP-3
  Scenario: Pressing an unregistered key does nothing
  @added-TP-3
  Scenario: Shortcuts with modifier keys only trigger when all modifiers are held

  # Scoped Shortcuts
  @added-KS-1
  Scenario: Shortcuts can be scoped to only fire in specific contexts
  @added-TP-3 @updated-KS-1
  Scenario: Editor shortcuts do not interfere while typing in the floating input
  @added-ES-13
  Scenario: Undo and redo work while typing in a line
  @added-KS-1
  Scenario: Pressing Ctrl+/ focuses the floating input from anywhere
  @added-KS-1
  Scenario: Pressing Escape blurs the floating input

  # Command System Integration
  @added-CS-1
  Scenario: Pressing Enter in the floating input invokes the command registry instead of calling appendContent directly
  @added-CS-1
  Scenario: The default append-content command is registered by the orchestrator

  # Scope
  @added-TP-3
  Scenario: Shortcuts only work within the Ghichu app
  @added-TP-3
  Scenario: Shortcuts stop working after leaving the page

  # Changelog
  # v2.1.0 CS-1  — added command system integration scenarios for floating input
  # v2.0.0 KS-1  — rewrite: scope-based system replacing activeInEditor, added floating input shortcuts
  # v1.2.0 ES-13 — added specific undo/redo scenario, replaced vague "essential shortcuts"
  # v1.1.0 ES-7  — removed diffing section (moved to text-editing.feature)
  # v1.0.0 TP-3  — initial keyboard event spec
`,ae=e({default:()=>oe}),oe=`# @version 2.4.0
@v2.4.0 @latest-EL-1
Feature: Text Editor
  A two-column note-taking app with per-line timestamps and persistent storage.

  # Editing
  @added-ES-9
  Scenario: Each line shows its own timestamp in a gutter column
  @added-ES-9
  Scenario: Clicking a line makes it editable
  @added-ES-9
  Scenario: Editing a line updates only that line's timestamp
  @added-FI-5 @updated-FI-7
  Scenario: Text submitted from the floating input appears as a new line
  @added-ES-9
  Scenario: Saved lines and timestamps reappear after reloading the page

  # Notes
  @added-TP-7
  Scenario: A default note is created on first visit
  @added-TP-7
  Scenario: Creating a new note opens an empty editor
  @added-TP-7
  Scenario: Deleting a note switches to the next available note

  # Undo and Redo
  @added-ES-13
  Scenario: Pressing Ctrl+Z undoes the last change
  @added-ES-13
  Scenario: Pressing Ctrl+Shift+Z redoes the undone change
  @added-ES-13
  Scenario: Undo and redo work while typing in a line

  # Keyboard Shortcuts
  @added-TP-3
  Scenario: Pressing Ctrl+Shift+N creates a new note
  @added-TP-3
  Scenario: Pressing Ctrl+Shift+Backspace deletes the current note

  # Display Settings
  @added-EL-1
  Scenario: Lines default to horizontal scroll (no word wrap)
  @added-EL-1
  Scenario: Word wrap can be toggled globally via the settings sheet
  @added-EL-1
  Scenario: A config button in the floating input opens the settings

  # Layout
  @added-TP-1
  Scenario: Left and right panels scroll independently
  @added-TP-1
  Scenario: Both panels fill the full page height

  # Changelog
  # v2.4.0 EL-1  — added display settings section (word wrap toggle via settings sheet)
  # v2.3.0 ES-13 — added undo/redo section (3 new scenarios)
  # v2.2.1 FI-7  — updated floating input append scenario wording
  # v2.2.0 FI-5  — added floating input append scenario
  # v2.0.0 ES-9  — rewritten for blame-style line-based editing (breaking)
  # v1.0.0 TP-1  — initial two-column layout spec
`,se=e({default:()=>ce}),ce=`# @version 1.0.0
@v1.0.0 @latest-CS-1
Feature: Command Registry
  Provides a scoped command system for decoupling UI actions from domain logic.

  # Registration
  @added-CS-1
  Scenario: A command can be registered with a scope and execute callback
  @added-CS-1
  Scenario: A registered command can be unregistered by its ID

  # Execution
  @added-CS-1
  Scenario: Executing a scope runs the first registered command for that scope
  @added-CS-1
  Scenario: Executing a scope with no registered commands returns false
  @added-CS-1
  Scenario: The floating input uses the command registry instead of calling appendContent directly

  # Default Behavior
  @added-CS-1
  Scenario: The orchestrator registers the append-content command on mount
  @added-CS-1
  Scenario: The append-content command is unregistered on unmount

  # Changelog
  # v1.0.0 CS-1 — initial command registry with floating input integration
`,le=e({default:()=>ue}),ue=`# @version 1.2.0
@v1.2.0 @latest-ES-13
Feature: Event-Sourced Text Editing
  A line-based editing system where every change is tracked with timestamps.

  # Adding Content
  @added-ES-3
  Scenario: Submitting text adds a new line with a timestamp
  @added-ES-3
  Scenario: Each submitted line gets its own independent timestamp

  # Editing Content
  @added-ES-3
  Scenario: Editing a line updates only that line's timestamp
  @added-ES-3
  Scenario: Unedited lines keep their original timestamps

  # Undo and Redo
  @added-ES-3
  Scenario: Undoing restores the previous state
  @added-ES-3
  Scenario: Redoing reapplies the undone change
  @added-ES-3
  Scenario: Making a new edit after undo discards the redo history

  # Persistence
  @added-ES-3
  Scenario: All lines and timestamps survive a page reload
  @added-ES-3
  Scenario: Old notes without timestamps load with a single default timestamp

  # Diffing
  @added-ES-7 @updated-ES-13
  Scenario: Any two points in the editing history can be compared side by side
  @added-ES-13
  Scenario: Added lines are highlighted in green
  @added-ES-13
  Scenario: Removed lines are highlighted in red
  @added-ES-13
  Scenario: Modified lines are highlighted in yellow
  @added-ES-13
  Scenario: The right side always shows the latest version by default

  # Changelog
  # v1.2.0 ES-13 — added 4 color-coded diffing scenarios, removed duplicate timestamp section
  # v1.1.0 ES-7  — added diffing scenarios for side-by-side viewer
  # v1.0.0 ES-3  — initial event-sourced text editing spec
`,de=e({default:()=>fe}),fe=`# @version 2.2.0
@v2.2.0 @latest-EL-1
Feature: Floating Input
  A command input bar that floats at the bottom center of the editor area.

  # Visibility
  @added-FI-2
  Scenario: Input bar is always visible at the bottom of the editor
  @added-FI-2
  Scenario: Input bar stays in place when scrolling the editor content

  # Interaction (via keyboard system)
  @added-FI-2 @updated-KS-1
  Scenario: Pressing Enter adds the typed text to the editor content
  @added-FI-2 @updated-KS-1
  Scenario: Input clears after submitting
  @added-FI-2
  Scenario: Pressing Enter with empty input does nothing
  @added-FI-2
  Scenario: Typing in the input does not affect the editor behind it
  @added-KS-1
  Scenario: Pressing Escape blurs the floating input
  @added-KS-1
  Scenario: Pressing Ctrl+/ focuses the floating input from the editor

  # Send Button
  @added-SB-1
  Scenario: A send button is visible to the right of the input field
  @added-SB-1
  Scenario: Tapping the send button submits the input text to the editor
  @added-SB-1
  Scenario: Tapping the send button clears the input after submitting

  # Config Button
  @added-EL-1
  Scenario: A config button is visible to the left of the input field
  @added-EL-1
  Scenario: Tapping the config button opens a popover with a Settings option
  @added-EL-1
  Scenario: Tapping Settings opens the settings sheet

  # Changelog
  # v2.2.0 EL-1  — added config button with popover and settings sheet integration
  # v2.1.0 SB-1  — added send button to the right of the input
  # v2.0.0 KS-1  — shortcuts routed through keyboard system with scoping, added Escape and Ctrl+/
  # v1.1.1 FI-7  — updated submit scenario wording for append-to-editor behavior
  # v1.1.0 FI-3  — moved into floating-input/ sub-directory
  # v1.0.0 FI-2  — initial floating input spec
`,pe=Object.assign({"/src/apps/ghichu/_features/keyboard-event-service.feature":re,"/src/apps/ghichu/_features/text-editor.feature":ae,"/src/apps/ghichu/modules/events/commands/commands.feature":se,"/src/apps/ghichu/modules/events/text-editing/text-editing.feature":le,"/src/apps/ghichu/ui/molecules/floating-input/floating-input.feature":de});function me(){return Object.entries(pe).map(([e,t])=>v(t.default,e)).filter(e=>e.feature)}function he({showVersions:e=!0}){let t=(0,b.useMemo)(()=>me(),[]);return(0,H.jsx)(`div`,{"data-test":`ghichu-feature-viewer`,className:`h-full`,children:(0,H.jsx)(y,{features:t,showVersions:e})})}var Z=`features`,ge=[{id:Z,label:`Features`}],Q={showVersions:!0};function $(){try{let e=localStorage.getItem(w);return e?{...Q,...JSON.parse(e)}:Q}catch{return Q}}function _e(e){localStorage.setItem(w,JSON.stringify(e))}function ve(){let[e,t]=(0,b.useState)(Z),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(),[s,c]=(0,b.useState)($),l=(0,b.useCallback)((e,t)=>{c(n=>{let r={...n,[e]:t};return _e(r),r})},[]);return(0,H.jsxs)(`div`,{"data-test":`ghichu-left-panel`,className:`flex h-full flex-col`,children:[(0,H.jsxs)(`div`,{"data-test":`ghichu-left-panel-tabs`,className:`flex shrink-0 items-center border-b`,children:[ge.map(n=>(0,H.jsx)(`button`,{"data-test":`ghichu-tab-${n.id}`,className:`px-4 py-2 text-sm font-medium transition-colors ${e===n.id?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`}`,onClick:()=>t(n.id),children:n.label},n.id)),(0,H.jsx)(`div`,{className:`ml-auto pr-2`,children:(0,H.jsx)(`button`,{"data-test":`ghichu-left-panel-config-button`,className:`p-1.5 text-muted-foreground hover:text-foreground transition-colors`,onClick:e=>{a({x:e.clientX,y:e.clientY}),r(!0)},title:`Feature viewer settings`,children:(0,H.jsx)(o,{className:`h-3.5 w-3.5`})})})]}),(0,H.jsx)(`div`,{"data-test":`ghichu-left-panel-content`,className:`min-h-0 flex-1`,children:e===Z&&(0,H.jsx)(he,{showVersions:s.showVersions})}),(0,H.jsx)(f,{isVisible:n,onClose:()=>r(!1),title:`Feature Viewer Settings`,triggerPosition:i,children:(0,H.jsx)(`div`,{"data-test":`ghichu-feature-viewer-config`,className:`p-4 space-y-3`,children:(0,H.jsxs)(`label`,{"data-test":`ghichu-config-show-versions`,className:`flex items-center gap-3 cursor-pointer`,children:[(0,H.jsx)(`input`,{"data-test":`ghichu-config-show-versions-checkbox`,type:`checkbox`,checked:s.showVersions,onChange:e=>l(`showVersions`,e.target.checked),className:`h-4 w-4`}),(0,H.jsx)(`span`,{className:`text-sm`,children:`Show version badges`})]})})})]})}var ye={edit:`Edit`,view:`View`};function be({isOpen:e,onOpenChange:t,displayMode:n,onToggleDisplayMode:r,timestampFormat:i,onToggleTimestampFormat:a,ghichuMode:o,onToggleGhichuMode:s}){return(0,H.jsx)(g,{isOpen:e,onOpenChange:t,header:`Settings`,blocks:[{id:`mode`,items:[{id:`ghichu-mode`,label:`Mode: ${ye[o]}`,onClick:s}]},{id:`display`,items:[{id:`word-wrap`,label:`Word Wrap: ${n===`wrap`?`On`:`Off`}`,onClick:r},{id:`timestamp-format`,label:`Timestamps: ${i===`relative`?`Relative`:`Absolute`}`,onClick:a}]}]})}function xe(){let e=(0,b.useRef)(null),{floatingInputRef:t,editorScrollRef:n,handleFloatingSubmit:r,lines:i,isLoading:a,applyEdit:o}=V(e),[s,c]=(0,b.useState)(D),[l,u]=(0,b.useState)(O),[d,f]=(0,b.useState)(k),[p,m]=(0,b.useState)(!1),h=(0,b.useCallback)((e,t)=>{o(i.map((n,r)=>r===e?t:n.text))},[i,o]),g=(0,b.useCallback)(e=>{o(i.filter((t,n)=>n!==e).map(e=>e.text))},[i,o]),_=(0,b.useCallback)(()=>{c(e=>e===`scroll`?`wrap`:`scroll`)},[]),v=(0,b.useCallback)(()=>{u(e=>e===`relative`?`absolute`:`relative`)},[]),y=(0,b.useCallback)(()=>{f(e=>e===`edit`?`view`:`edit`)},[]);return(0,H.jsxs)(`div`,{"data-test":`ghichu-page`,ref:e,className:`flex h-full w-full overflow-hidden`,children:[(0,H.jsx)(`div`,{className:`hidden w-1/2 overflow-hidden border-r md:block`,children:(0,H.jsx)(ve,{})}),(0,H.jsxs)(`div`,{"data-test":`ghichu-right-panel`,className:`relative flex flex-1 flex-col overflow-hidden`,children:[(0,H.jsx)(`div`,{"data-test":`ghichu-editor-scroll`,ref:n,className:`flex-1 overflow-y-auto p-4 pb-20`,children:a?(0,H.jsx)(`div`,{"data-test":`ghichu-loading`,className:`text-muted-foreground`,children:`Loading...`}):(0,H.jsx)(K,{lines:i,displayMode:s,timestampFormat:l,ghichuMode:d,onLineEdit:h,onDeleteLine:g})}),(0,H.jsx)(X,{ref:t,onSubmit:r,onSettingsOpen:()=>m(!0)})]}),(0,H.jsx)(be,{isOpen:p,onOpenChange:m,displayMode:s,onToggleDisplayMode:_,timestampFormat:l,onToggleTimestampFormat:v,ghichuMode:d,onToggleGhichuMode:y})]})}export{xe as GhichuPage};