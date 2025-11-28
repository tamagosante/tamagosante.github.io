import{G as k,H as v,J as d,K as w,N as S,O as C}from"./index-DwyiOqV9.js";import"./react-vendor-D8eeR_U7.js";import"./utils-C8_IF706.js";import"./radix-ui-DhTjIcH-.js";import"./ui-utils-BxIQ3qGg.js";import"./icons-CEg_I59O.js";const P="canvas_state_";function u(e){return`${P}${e}`}const h={"user-anna":{projectName:"Marketing Dashboard",nodes:[{x:100,y:100,content:`🎯 ANNA'S CANVAS

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
- PostgreSQL`}]}};function $(e,t){const s=h[e];return s?s.nodes.map(a=>({id:d(10),x:a.x,y:a.y,width:220,type:v.TEXT,content:a.content})):[{id:d(10),x:100,y:100,width:220,type:v.TEXT,content:`👤 ${t.toUpperCase()}'S CANVAS

Welcome to your personal canvas!
If you see this, the user switch worked!`},{id:d(10),x:350,y:100,width:200,type:v.TEXT,content:`📝 Notes

Create and organize your thoughts here.`}]}function T(e,t){const s=h[e];return(s==null?void 0:s.projectName)??`${t}'s Project`}function b(e,t){const s=Date.now(),a=`project-${e}`,n=`workspace-${e}`,r=`canvas-${e}`,o=T(e,t),c={nodes:$(e,t),arrows:[],groups:[],selectedNodes:[],selectedArrows:[],selectedGroups:[],layers:[],activeLayerId:null},i={offset:{x:50,y:50},scale:1,targetView:null},p={id:r,name:`${t}'s Canvas`,createdAt:s,lastModified:s,coreState:c,viewState:i},l={id:n,name:`${t}'s Workspace`,createdAt:s,lastModified:s,canvases:{[r]:p},activeCanvasId:r},f={id:a,name:o,createdAt:s,lastModified:s,workspaces:{[n]:l},activeWorkspaceId:n};return{version:"3.6.8",dataVersion:"1.1.0",flags:{debug:{logEvents:!1,showDebugOverlay:!0},feature:{}},preferences:{segmentedButtons:{}},state:{projects:{[a]:f},activeProjectId:a}}}function j(){var i;const e=S.getState(),t={};if((i=e.state)!=null&&i.projects)for(const[p,l]of Object.entries(e.state.projects)){if(p==="workflow-templates-project")continue;const f={};for(const[m,g]of Object.entries(l.workspaces)){const y={};for(const[A,N]of Object.entries(g.canvases)){const{undoTree:O,...x}=N;y[A]=x}f[m]={...g,canvases:y}}t[p]={...l,workspaces:f}}const{temporaryArrow:s,selectionBox:a,dragInfo:n,resizingNode:r,...o}=e.uiState,c=e.extensions?{registry:e.extensions.registry,settings:e.extensions.settings}:void 0;return{version:e.version,dataVersion:e.dataVersion,state:{...e.state,projects:t},uiState:o,flags:e.flags,preferences:e.preferences,extensions:c,actions:e.actions}}async function U(e){if(!e)return;const t=u(e),s=j();try{const a=JSON.stringify(s),n=await w(a);localStorage.setItem(t,n)}catch(a){console.error(`[UserCanvasState] Failed to save canvas state for user: ${e}`,a)}}async function V(e){var a,n;if(!e)return;const t=j(),s={projects:((a=t.state)==null?void 0:a.projects)??{},activeProjectId:((n=t.state)==null?void 0:n.activeProjectId)??null,preferences:t.preferences??{},actions:t.actions??{}};try{const r=JSON.stringify(s),o=await C.saveUserState(e,r);o.success?console.log(`[UserCanvasState] Synced canvas state to API for user: ${e}`):console.error(`[UserCanvasState] API sync failed for user: ${e}`,o.error)}catch(r){console.error(`[UserCanvasState] API sync error for user: ${e}`,r)}}async function E(e){if(!e)return null;const t=u(e);try{const s=localStorage.getItem(t);if(!s)return console.log(`[UserCanvasState] No saved state for user: ${e}`),null;const a=await k(s),n=JSON.parse(a);return console.log(`[UserCanvasState] Loaded canvas state for user: ${e}`),n}catch(s){return console.error(`[UserCanvasState] Failed to load canvas state for user: ${e}`,s),null}}function F(e){const t=S.getState();S.setState({version:e.version??t.version,dataVersion:e.dataVersion??t.dataVersion,state:e.state??t.state,uiState:e.uiState??t.uiState,flags:e.flags??t.flags,preferences:e.preferences??t.preferences,extensions:e.extensions??t.extensions,actions:e.actions??t.actions}),console.log("[UserCanvasState] Applied loaded state to canvas store")}async function R(e,t,s){var r;const a=window.location.pathname.startsWith("/new-home");e&&(await U(e),a&&await V(e));let n=null;if(a)try{const o=await C.getUserState(t);if(o.success&&((r=o.data)!=null&&r.canvasState)){const c=JSON.parse(o.data.canvasState);n={state:{projects:c.projects??{},activeProjectId:c.activeProjectId??null},preferences:c.preferences??{},actions:c.actions??{}}}}catch(o){console.log(`[UserCanvasState] API fetch failed for user: ${t}`,o)}if(n||(n=await E(t)),!n){console.log(`[UserCanvasState] Creating default state for user: ${s}`),n=b(t,s);const o=u(t),c=JSON.stringify(n),i=await w(c);localStorage.setItem(o,i)}F(n)}export{F as applyCanvasState,b as createDefaultCanvasStateForUser,u as getCanvasStateKey,E as loadCanvasStateForUser,U as saveCanvasStateForUser,R as switchCanvasStateForUser,V as syncCanvasStateToApiForUser};
