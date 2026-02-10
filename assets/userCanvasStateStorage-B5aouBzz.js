import{G as k,H as C,J as v,K as S,N as d,O as w}from"./index-eHP58yiE.js";import"./react-vendor-Byz07MLO.js";import"./utils-DJ2ViQ2u.js";import"./radix-ui-v9Pxfv0s.js";import"./ui-utils-BxIQ3qGg.js";import"./icons-vtiX7BHn.js";const $="canvas_state_";function u(e){return`${$}${e}`}const j={"user-anna":{projectName:"Marketing Dashboard",nodes:[{x:100,y:100,content:`🎯 ANNA'S CANVAS

This is Anna's Marketing Dashboard.
If you see this, the user switch worked!`},{x:350,y:100,content:`📊 Campaign Ideas

- Social media strategy
- Email newsletter
- Product launch plan`},{x:100,y:280,content:`📅 Q1 Goals

- Increase engagement 20%
- Launch new website
- Brand refresh`}]},"user-bob":{projectName:"Dev Sandbox",nodes:[{x:100,y:100,content:`🔧 BOB'S CANVAS

This is Bob's Dev Sandbox.
If you see this, the user switch worked!`},{x:350,y:100,content:`💻 Current Sprint

- Fix auth bug
- Add unit tests
- Code review PR #42`},{x:100,y:280,content:`🚀 Tech Stack

- React + TypeScript
- Node.js backend
- PostgreSQL`}]}};function P(e,t){const s=j[e];return s?s.nodes.map(a=>({id:S(8),x:a.x,y:a.y,width:220,type:v.TEXT,content:a.content})):[{id:S(8),x:100,y:100,width:220,type:v.TEXT,content:`👤 ${t.toUpperCase()}'S CANVAS

Welcome to your personal canvas!
If you see this, the user switch worked!`},{id:S(8),x:350,y:100,width:200,type:v.TEXT,content:`📝 Notes

Create and organize your thoughts here.`}]}function T(e,t){const s=j[e];return(s==null?void 0:s.projectName)??`${t}'s Project`}function U(e,t){const s=Date.now(),a=`project-${e}`,o=`workspace-${e}`,n=`canvas-${e}`,r=T(e,t),c={nodes:P(e,t),arrows:[],groups:[],selectedNodes:[],selectedArrows:[],selectedGroups:[],layers:[],activeLayerId:null},i={offset:{x:50,y:50},scale:1,targetView:null},p={id:n,name:`${t}'s Canvas`,createdAt:s,lastModified:s,coreState:c,viewState:i},l={id:o,name:`${t}'s Workspace`,createdAt:s,lastModified:s,canvases:{[n]:p},activeCanvasId:n},f={id:a,name:r,createdAt:s,lastModified:s,workspaces:{[o]:l},activeWorkspaceId:o};return{version:"3.6.8",dataVersion:"1.1.0",flags:{debug:{logEvents:!1,showDebugOverlay:!0},feature:{}},preferences:{segmentedButtons:{}},state:{projects:{[a]:f},activeProjectId:a}}}function h(){var i;const e=d.getState(),t={};if((i=e.state)!=null&&i.projects)for(const[p,l]of Object.entries(e.state.projects)){if(p==="workflow-templates-project")continue;const f={};for(const[A,g]of Object.entries(l.workspaces)){const y={};for(const[m,N]of Object.entries(g.canvases)){const{undoTree:O,...x}=N;y[m]=x}f[A]={...g,canvases:y}}t[p]={...l,workspaces:f}}const{temporaryArrow:s,selectionBox:a,dragInfo:o,resizingNode:n,...r}=e.uiState,c=e.extensions?{registry:e.extensions.registry,settings:e.extensions.settings}:void 0;return{version:e.version,dataVersion:e.dataVersion,state:{...e.state,projects:t},uiState:r,flags:e.flags,preferences:e.preferences,extensions:c,actions:e.actions}}async function b(e){if(!e)return;const t=u(e),s=h();try{const a=JSON.stringify(s),o=await C(a);localStorage.setItem(t,o),console.log(`[UserCanvasState] Saved canvas state to localStorage for user: ${e}`)}catch(a){console.error(`[UserCanvasState] Failed to save canvas state for user: ${e}`,a)}}async function V(e){var a,o;if(!e)return;const t=h(),s={projects:((a=t.state)==null?void 0:a.projects)??{},activeProjectId:((o=t.state)==null?void 0:o.activeProjectId)??null,preferences:t.preferences??{},actions:t.actions??{}};try{const n=JSON.stringify(s),r=await w.saveUserState(e,n);r.success?console.log(`[UserCanvasState] Synced canvas state to API for user: ${e}`):console.error(`[UserCanvasState] API sync failed for user: ${e}`,r.error)}catch(n){console.error(`[UserCanvasState] API sync error for user: ${e}`,n)}}async function E(e){if(!e)return null;const t=u(e);try{const s=localStorage.getItem(t);if(!s)return console.log(`[UserCanvasState] No saved state for user: ${e}`),null;const a=await k(s),o=JSON.parse(a);return console.log(`[UserCanvasState] Loaded canvas state for user: ${e}`),o}catch(s){return console.error(`[UserCanvasState] Failed to load canvas state for user: ${e}`,s),null}}function F(e){const t=d.getState();d.setState({version:e.version??t.version,dataVersion:e.dataVersion??t.dataVersion,state:e.state??t.state,uiState:e.uiState??t.uiState,flags:e.flags??t.flags,preferences:e.preferences??t.preferences,extensions:e.extensions??t.extensions,actions:e.actions??t.actions}),console.log("[UserCanvasState] Applied loaded state to canvas store")}async function M(e,t,s){var o;e&&(await b(e),await V(e));let a=null;try{const n=await w.getUserState(t);if(n.success&&((o=n.data)!=null&&o.canvasState)){const r=JSON.parse(n.data.canvasState);a={state:{projects:r.projects??{},activeProjectId:r.activeProjectId??null},preferences:r.preferences??{},actions:r.actions??{}}}}catch(n){console.log(`[UserCanvasState] API fetch failed for user: ${t}`,n)}if(a||(a=await E(t)),!a){console.log(`[UserCanvasState] Creating default state for user: ${s}`),a=U(t,s);const n=u(t),r=JSON.stringify(a),c=await C(r);localStorage.setItem(n,c)}F(a)}export{F as applyCanvasState,U as createDefaultCanvasStateForUser,u as getCanvasStateKey,E as loadCanvasStateForUser,b as saveCanvasStateForUser,M as switchCanvasStateForUser,V as syncCanvasStateToApiForUser};
