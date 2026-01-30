import{G as x,H as w,J as N,K as v,N as d,O as S}from"./index-BbgB-sev.js";import"./react-vendor-Byz07MLO.js";import"./utils-DjFvUtuq.js";import"./radix-ui-B6r6BEmy.js";import"./ui-utils-BxIQ3qGg.js";import"./icons-Detj0uxE.js";const k="canvas_state_";function u(e){return`${k}${e}`}const C={"user-anna":{projectName:"Marketing Dashboard",nodes:[{x:100,y:100,content:`🎯 ANNA'S CANVAS

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
- PostgreSQL`}]}};function $(e,t){const s=C[e];return s?s.nodes.map(a=>({id:d(8),x:a.x,y:a.y,width:220,type:v.TEXT,content:a.content})):[{id:d(8),x:100,y:100,width:220,type:v.TEXT,content:`👤 ${t.toUpperCase()}'S CANVAS

Welcome to your personal canvas!
If you see this, the user switch worked!`},{id:d(8),x:350,y:100,width:200,type:v.TEXT,content:`📝 Notes

Create and organize your thoughts here.`}]}function U(e,t){const s=C[e];return(s==null?void 0:s.projectName)??`${t}'s Project`}function b(e,t){const s=Date.now(),a=`project-${e}`,o=`workspace-${e}`,n=`canvas-${e}`,r=U(e,t),f={nodes:$(e,t),arrows:[],groups:[],selectedNodes:[],selectedArrows:[],selectedGroups:[],layers:[],activeLayerId:null},c={offset:{x:50,y:50},scale:1,targetView:null},i={id:n,name:`${t}'s Canvas`,createdAt:s,lastModified:s,coreState:f,viewState:c},l={id:o,name:`${t}'s Workspace`,createdAt:s,lastModified:s,canvases:{[n]:i},activeCanvasId:n},p={id:a,name:r,createdAt:s,lastModified:s,workspaces:{[o]:l},activeWorkspaceId:o};return{version:"3.6.8",dataVersion:"1.1.0",flags:{debug:{logEvents:!1,showDebugOverlay:!0},feature:{}},preferences:{segmentedButtons:{}},state:{projects:{[a]:p},activeProjectId:a}}}function T(){var c;const e=S.getState(),t={};if((c=e.state)!=null&&c.projects)for(const[i,l]of Object.entries(e.state.projects)){if(i==="workflow-templates-project")continue;const p={};for(const[h,g]of Object.entries(l.workspaces)){const y={};for(const[m,A]of Object.entries(g.canvases)){const{undoTree:F,...j}=A;y[m]=j}p[h]={...g,canvases:y}}t[i]={...l,workspaces:p}}const{temporaryArrow:s,selectionBox:a,dragInfo:o,resizingNode:n,...r}=e.uiState,f=e.extensions?{registry:e.extensions.registry,settings:e.extensions.settings}:void 0;return{version:e.version,dataVersion:e.dataVersion,state:{...e.state,projects:t},uiState:r,flags:e.flags,preferences:e.preferences,extensions:f,actions:e.actions}}async function V(e){if(!e)return;const t=u(e),s=T();try{const a=JSON.stringify(s),o=await w(a);localStorage.setItem(t,o),console.log(`[UserCanvasState] Saved canvas state to localStorage for user: ${e}`),N.saveUserState(e,a).then(n=>{n.success?console.log(`[UserCanvasState] Synced canvas state to API for user: ${e}`):console.warn(`[UserCanvasState] API sync failed for user: ${e}`,n.error)}).catch(n=>{console.warn(`[UserCanvasState] API sync error for user: ${e}`,n)})}catch(a){console.error(`[UserCanvasState] Failed to save canvas state for user: ${e}`,a)}}async function P(e){if(!e)return null;const t=u(e);try{const s=localStorage.getItem(t);if(!s)return console.log(`[UserCanvasState] No saved state for user: ${e}`),null;const a=await x(s),o=JSON.parse(a);return console.log(`[UserCanvasState] Loaded canvas state for user: ${e}`),o}catch(s){return console.error(`[UserCanvasState] Failed to load canvas state for user: ${e}`,s),null}}function E(e){const t=S.getState();S.setState({version:e.version??t.version,dataVersion:e.dataVersion??t.dataVersion,state:e.state??t.state,uiState:e.uiState??t.uiState,flags:e.flags??t.flags,preferences:e.preferences??t.preferences,extensions:e.extensions??t.extensions,actions:e.actions??t.actions}),console.log("[UserCanvasState] Applied loaded state to canvas store")}async function M(e,t,s){e&&await V(e);let a=await P(t);if(!a){console.log(`[UserCanvasState] Creating default state for user: ${s}`),a=b(t,s);const o=u(t),n=JSON.stringify(a),r=await w(n);localStorage.setItem(o,r)}E(a)}export{E as applyCanvasState,b as createDefaultCanvasStateForUser,u as getCanvasStateKey,P as loadCanvasStateForUser,V as saveCanvasStateForUser,M as switchCanvasStateForUser};
