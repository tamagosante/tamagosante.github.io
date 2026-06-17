import{n as e,r as t}from"./rolldown-runtime-Dw2cE7zH.js";import{d as n}from"./forms-CI8_RRjb.js";import{Bt as r,Kt as i}from"./radix-ui-C8Se2y1c.js";import{u as a}from"./chunk-4WY6JWTD-DDC7ghW_.js";import"./utils-Cm2GyVkP.js";import{$t as o,Ar as s,At as c,Ei as l,Gt as u,M as d,Mi as f,Pa as p,Si as m,Sr as h,T as g,Ua as _,Va as ee,Vn as v,Wi as y,Yr as b,_i as x,a as S,b as C,bi as w,ea as te,gn as ne,hi as re,hn as ie,ia as ae,l as oe,na as se,nn as T,oa as E,qr as ce,qt as D,si as O,tn as k,u as A}from"./icons-BIJjXrT7.js";import{r as j,t as M}from"./use-mobile-D8inaGCB.js";import{t as N}from"./button-CNwkKyGm.js";import"./input-Da1xeAta.js";import"./tooltip-Dahpdpvz.js";import"./collapsible-CyvmX-PP.js";import{t as le}from"./label-Dg9Pr07Y.js";import{t as ue}from"./switch-avuCK4lg.js";import"./DraggablePopover-kxW1ylPJ.js";import"./select-D8wzRtB1.js";import{n as de,r as P,t as fe}from"./popover-D5JO1VVR.js";import"./ConfigurableButton-rk1-1Tze.js";import"./dropdown-menu-DXZfABQb.js";import"./isomorphicContainer-AbNX7LgQ.js";import{t as F}from"./diContainer-C9Ahjm8z.js";import{a as I,s as pe,t as me}from"./OllamaApi-BSLaFXwz.js";import"./canvasConstantsV2-Cefn18bd.js";import{r as he,t as L}from"./CanvasStateV2-3X0E_cF7.js";import"./CanvasConfigurationV2-CXjU2vNX.js";import"./CanvasApiClient-Bo57tOWT.js";import"./apiSyncActions-BQW9reFy.js";import"./markdownToHtml-URzgayPs.js";import"./measureTextWidth-Sv8vqDMB.js";import"./nodeGeometryUtils-DvGD4oM3.js";import"./CanvasNodeBuilderV2-BBMf6sjI.js";import{n as ge}from"./markdownUtils-BZ39tRL5.js";import"./MobileLogClient-CkufQNd1.js";import{n as R}from"./useCanvasStateV2-BpJzc072.js";import"./SlashCommandMenu-CkbKw2dC.js";import"./MobileLogViewer-Cz1pciKq.js";import"./chatTriggerEvents-BjBofUkn.js";import{t as _e}from"./useSlashCommands-G7xhr3M8.js";import{t as ve}from"./MobileSheet-CrPq61wr.js";import{t as ye}from"./HighlightManager-B-hPV3-Z.js";import{i as be,n as xe,r as Se,t as Ce}from"./loadFeatures-BIaEddtE.js";import{t as z}from"./tracing-BGeNFGcq.js";import{i as B}from"./SpecView-CxaWMeUh.js";import"./spec-view-D-igCyLQ.js";import"./parseFeatureContent-BUdvXf4F.js";import{t as V}from"./CanvasV2ApiFacade-DX0OXuy7.js";import{i as we}from"./userStoreLocalStorage-7XOWcJFV.js";import{t as Te}from"./TextEditingService-DA-8T0ww.js";import{t as Ee}from"./useLongPress-CGonzB4N.js";import{n as De,t as Oe}from"./FloatingInput-DAhZTIRf.js";import{n as ke,t as H}from"./pruneDefaultStructures-de7xoVKk.js";import"./treeHelpers-D_vdCAHS.js";import{t as U}from"./DraggableCrudTree-CduuMn1Z.js";import"./userCanvasStateStorage-DG4OUHr0.js";import"./userStore-Da6_RJsk.js";import{t as Ae}from"./UserButton-D0f7vgyJ.js";var W=t(n(),1),je=class e{constructor(e,t,n,r,i,a=null,o=[],s=[],c=new Map,l=new Map){this.id=e,this.title=t,this.content=n,this.createdAt=r,this.updatedAt=i,this.opLog=a,this.topics=o,this.pinnedLineIndices=s,this.highlightsByLineIndex=c,this.parentLineIdByIndex=l}static create(t,n=``){let r=new Date;return new e(crypto.randomUUID(),t,n,r,r)}static fromData(t){return new e(t.id,t.title,t.content,new Date(t.createdAt),new Date(t.updatedAt),t.opLog??null,t.topics??[])}toJSON(){let e={id:this.id,title:this.title,content:this.content,createdAt:this.createdAt.toISOString(),updatedAt:this.updatedAt.toISOString()};return this.opLog&&(e.opLog=this.opLog),this.topics.length>0&&(e.topics=this.topics),e}updateContent(e){this.content=e,this.updatedAt=new Date}updateOpLog(e){this.opLog=e,this.updatedAt=new Date}updateTitle(e){this.title=e,this.updatedAt=new Date}updateTopics(e){this.topics=e,this.updatedAt=new Date}updatePinnedLineIndices(e){this.pinnedLineIndices=e,this.updatedAt=new Date}updateHighlightsByLineIndex(e){this.highlightsByLineIndex=e,this.updatedAt=new Date}},Me=`Untitled`,Ne=`ghichu_notes`,G=`ghichu_settings`,Pe=`ghichu.floatingInput`,Fe=`append-content`,Ie=`scroll`,Le=`relative`,Re=`edit`,ze=`focus`,Be=`logs`,Ve=`projects`,He=`data`,Ue=`ghichu_local_mode`,We=`ghichu-selftest`,Ge=`ghichu-headless`,K=`__selftest_`,Ke=`ghichu_e2e_presets`,qe=`e-ebxHdN-I`,Je=`Ws-WTNBFsQ`,Ye=`sans`,Xe=.5,Ze=`show`,Qe=`rgba(255, 165, 0, 0.4)`,$e=-9999,et=-9999,tt=`watcher-v2`,nt={sans:`font-sans`,mono:`font-mono`},rt=`TEXT`;function it(e,t){let n=e.typeData;return n?.isTopic?{id:n.topicId??e.id,lineId:e.id,noteId:t,parentTopicId:n.parentTopicId??null,title:n.topicTitle??e.content??``,createdAt:n.topicCreatedAt??e.createdAt,updatedAt:e.updatedAt}:null}function at(e,t,n){let r=[...t].sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),i=r.map(e=>e.content??``).join(`<br>`),a=r[0],o=r[r.length-1],s=[],c=[],l=new Map,u=[];for(let t=0;t<r.length;t++){let n=r[t],i=n.typeData,a=it(n,e);a&&s.push(a),i?.isPinned&&c.push(t),i?.highlights&&i.highlights.length>0&&l.set(t,i.highlights),u.push({lineId:n.id,parentLineId:i?.parentLineId??null,text:n.content??``,lastModified:n.updatedAt})}let d=n||`Untitled`,f=u.length>0?{ops:[],snapshot:{lines:u,atOpIndex:0}}:null;return new je(e,d,i,a?new Date(a.createdAt):new Date,o?new Date(o.updatedAt):new Date,f,s,c,l)}var ot=class{api;canvasId=null;constructor(){this.api=V(void 0,we()??`default-user`)}setCanvasId(e){this.canvasId=e}getCanvasId(){if(!this.canvasId)throw Error(`CanvasStoreNoteRepository: canvasId not set. Call setCanvasId() first.`);return this.canvasId}resolveCanvasName(e){let t=L.getState().state;if(t)for(let n of Object.values(t.projects))for(let t of Object.values(n.workspaces)){let n=t.canvases[e];if(n)return n.name}}async getAll(){let e=this.getCanvasId(),t=this.resolveCanvasName(e);return[at(e,await this.api.nodes.list(e,rt),t)]}async getById(e){let t=this.getCanvasId();if(e!==t)return null;let n=this.resolveCanvasName(t);return at(t,await this.api.nodes.list(t,rt),n)}async create(e){return new je(this.getCanvasId(),e.title,e.content,new Date,new Date,e.opLog,e.topics)}async update(e){let t=this.getCanvasId(),n=[...await this.api.nodes.list(t,rt)].sort((e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()),r=e.content?e.content.split(/<br\s*\/?>/):[],i=new Map;if(e.topics.length>0){let t=new Map(e.topics.map(e=>[e.lineId,e]));for(let e=0;e<n.length;e++){let r=t.get(n[e].id);r&&i.set(e,r)}if(i.size<e.topics.length)for(let t of e.topics){if([...i.values()].some(e=>e.id===t.id))continue;let e=r.findIndex((e,n)=>!i.has(n)&&e===t.title);e!==-1&&i.set(e,t)}}let a=new Set(e.pinnedLineIndices),o=Math.max(n.length,r.length);for(let s=0;s<o;s++){let o=n[s],c=r[s],l=i.get(s),u=a.has(s),d=e.highlightsByLineIndex.get(s),f=e.parentLineIdByIndex.get(s)??null;if(o&&c!==void 0){let e=o.typeData,t=l?!e?.isTopic:!!e?.isTopic,n=u!==!!e?.isPinned,r=o.content!==c,i=(d?.length??0)>0||(e?.highlights?.length??0)>0,a=(f??null)!==(e?.parentLineId??null);if(r||t||n||i||a){let e={};l&&(e.isTopic=!0,e.topicId=l.id,e.topicTitle=l.title,e.parentTopicId=l.parentTopicId,e.topicCreatedAt=l.createdAt),u&&(e.isPinned=!0),d&&d.length>0&&(e.highlights=d),f&&(e.parentLineId=f),await this.api.nodes.update(o.id,{id:o.id,version:o.version,content:c,typeData:Object.keys(e).length>0?e:{}})}}else if(!o&&c!==void 0){let e={};l&&(e.isTopic=!0,e.topicId=l.id,e.topicTitle=l.title,e.parentTopicId=l.parentTopicId,e.topicCreatedAt=l.createdAt),u&&(e.isPinned=!0),d&&d.length>0&&(e.highlights=d),f&&(e.parentLineId=f),await this.api.nodes.create(t,{type:rt,x:$e,y:et,content:c,...Object.keys(e).length>0?{typeData:e}:{}})}else if(o&&c===void 0)try{await this.api.nodes.delete(o.id)}catch{}}return e}async delete(e){let t=this.getCanvasId();if(e!==t)return;let n=await this.api.nodes.list(t,rt);for(let e of n)try{await this.api.nodes.delete(e.id)}catch{}}async deleteAllNodes(){let e=this.getCanvasId(),t=await this.api.nodes.list(e);if(t.length===0)return 0;try{await this.api.nodes.batchDelete(e,t.map(e=>e.id))}catch{for(let e of t)try{await this.api.nodes.delete(e.id)}catch{}}return t.length}},st=class{async getAll(){let e=localStorage.getItem(Ne);return e?JSON.parse(e).map(e=>je.fromData(e)):[]}async getById(e){return(await this.getAll()).find(t=>t.id===e)??null}async create(e){let t=await this.getAll();return t.push(e),this.persist(t),e}async update(e){let t=await this.getAll(),n=t.findIndex(t=>t.id===e.id);if(n===-1)throw Error(`Note ${e.id} not found`);return t[n]=e,this.persist(t),e}async delete(e){let t=await this.getAll(),n=t.filter(t=>t.id!==e);if(n.length===t.length)throw Error(`Note ${e} not found`);this.persist(n)}persist(e){localStorage.setItem(Ne,JSON.stringify(e.map(e=>e.toJSON())))}},ct={displayMode:Ie,timestampFormat:Le,ghichuMode:Re,editSubMode:ze,showTimestamps:!1,showCardBorders:!1,fontStyle:Ye,markdownPreview:!1,disableTextSelection:!0,scrollPosition:-1,leftPanelRatio:Xe,leftPanelCollapsed:!1,lineActionsMode:Ze},lt=class{load(){try{let e=localStorage.getItem(G);return e?{...ct,...JSON.parse(e)}:{...ct}}catch{return{...ct}}}save(e){localStorage.setItem(G,JSON.stringify(e))}},ut=class{constructor(e){this.repository=e,z.debug(`ghichu.note.init`)}async getAll(){return z.t(`ghichu.note.getAll`),this.repository.getAll()}async getById(e){return z.t(`ghichu.note.getById`,{id:e}),this.repository.getById(e)}async create(e,t=``){z.debug(`ghichu.note.create.start`,{title:e});let n=je.create(e,t),r=await this.repository.create(n);return z.info(`ghichu.note.create.complete`,{id:r.id,title:e}),r}async appendContent(e,t){z.debug(`ghichu.note.appendContent.start`,{id:e,textLength:t.length});let n=await this.repository.getById(e);if(!n)throw Error(`Note ${e} not found`);let r=n.content.length>0?`<br>`:``;n.updateContent(n.content+r+t);let i=await this.repository.update(n);return z.info(`ghichu.note.appendContent.complete`,{id:e}),i}async updateContent(e,t){z.debug(`ghichu.note.updateContent.start`,{id:e,contentLength:t.length});let n=await this.repository.getById(e);if(!n)throw Error(`Note ${e} not found`);n.updateContent(t);let r=await this.repository.update(n);return z.info(`ghichu.note.updateContent.complete`,{id:e}),r}async updateTitle(e,t){z.debug(`ghichu.note.updateTitle.start`,{id:e,title:t});let n=await this.repository.getById(e);if(!n)throw Error(`Note ${e} not found`);n.updateTitle(t);let r=await this.repository.update(n);return z.info(`ghichu.note.updateTitle.complete`,{id:e,title:t}),r}async saveOpLog(e,t,n,r=[],i=[],a,o){z.debug(`ghichu.note.saveOpLog.start`,{id:e,topicCount:r.length});let s=await this.repository.getById(e);if(!s)throw Error(`Note ${e} not found`);s.updateOpLog(t),s.updateContent(n),s.updateTopics(r),s.updatePinnedLineIndices(i),a&&s.updateHighlightsByLineIndex(a),o&&(s.parentLineIdByIndex=o);let c=await this.repository.update(s);return z.info(`ghichu.note.saveOpLog.complete`,{id:e}),c}async delete(e){z.debug(`ghichu.note.delete.start`,{id:e}),await this.repository.delete(e),z.info(`ghichu.note.delete.complete`,{id:e})}},dt=class{constructor(e){this.repository=e,z.debug(`ghichu.settings.init`)}getAll(){return z.t(`ghichu.settings.getAll`),this.repository.load()}update(e,t){z.debug(`ghichu.settings.update`,{key:e,value:t});let n={...this.repository.load(),[e]:t};return this.repository.save(n),n}toggleDisplayMode(){z.debug(`ghichu.settings.toggleDisplayMode`);let e=this.getAll();return this.update(`displayMode`,e.displayMode===`scroll`?`wrap`:`scroll`)}toggleTimestampFormat(){z.debug(`ghichu.settings.toggleTimestampFormat`);let e=this.getAll();return this.update(`timestampFormat`,e.timestampFormat===`relative`?`absolute`:`relative`)}toggleGhichuMode(){z.debug(`ghichu.settings.toggleGhichuMode`);let e=this.getAll();return this.update(`ghichuMode`,e.ghichuMode===`edit`?`view`:`edit`)}toggleEditSubMode(){z.debug(`ghichu.settings.toggleEditSubMode`);let e=this.getAll();return this.update(`editSubMode`,{focus:`write`,write:`highlight`,highlight:`focus`}[e.editSubMode])}setEditSubMode(e){return z.debug(`ghichu.settings.setEditSubMode`,{mode:e}),this.update(`editSubMode`,e)}toggleShowTimestamps(){z.debug(`ghichu.settings.toggleShowTimestamps`);let e=this.getAll();return this.update(`showTimestamps`,!e.showTimestamps)}toggleShowCardBorders(){z.debug(`ghichu.settings.toggleShowCardBorders`);let e=this.getAll();return this.update(`showCardBorders`,!e.showCardBorders)}toggleFontStyle(){z.debug(`ghichu.settings.toggleFontStyle`);let e=this.getAll();return this.update(`fontStyle`,e.fontStyle===`sans`?`mono`:`sans`)}toggleMarkdownPreview(){z.debug(`ghichu.settings.toggleMarkdownPreview`);let e=this.getAll();return this.update(`markdownPreview`,!e.markdownPreview)}toggleDisableTextSelection(){z.debug(`ghichu.settings.toggleDisableTextSelection`);let e=this.getAll();return this.update(`disableTextSelection`,!e.disableTextSelection)}toggleLeftPanelCollapsed(){z.debug(`ghichu.settings.toggleLeftPanelCollapsed`);let e=this.getAll();return this.update(`leftPanelCollapsed`,!e.leftPanelCollapsed)}toggleLineActionsMode(){z.debug(`ghichu.settings.toggleLineActionsMode`);let e=this.getAll();return this.update(`lineActionsMode`,{show:`hide`,hide:`disable`,disable:`show`}[e.lineActionsMode])}saveAll(e){z.debug(`ghichu.settings.saveAll`),this.repository.save(e)}setRepository(e){this.repository=e}},ft=class{commands=new Map;register(e){let t=this.commands.get(e.scope)??[];t.push(e),this.commands.set(e.scope,t)}unregister(e){for(let[t,n]of this.commands){let r=n.filter(t=>t.id!==e);r.length===0?this.commands.delete(t):this.commands.set(t,r)}}execute(e,t){let n=this.commands.get(e);return!n||n.length===0?!1:(n[0].execute(t),!0)}getCommands(e){return this.commands.get(e)??[]}},pt=class{resolve(e,t){if(!e.startsWith(`/`))return null;let n=e.slice(1).toLowerCase(),r=t.find(e=>{let t=e.trigger.toLowerCase();return n===t||n.startsWith(t+` `)});return r?{command:r,args:e.slice(1+r.trigger.length).trimStart()}:null}execute(e,t){e.command.onSelect({query:e.args,fullText:t,cursorPosition:t.length,slashPosition:0})}},mt=class e{constructor(e,t,n,r,i,a,o){this.id=e,this.lineId=t,this.noteId=n,this.parentTopicId=r,this.title=i,this.createdAt=a,this.updatedAt=o}static create(t,n,r,i=null){let a=new Date;return new e(crypto.randomUUID(),t,n,i,r,a,a)}static fromData(t){return new e(t.id,t.lineId,t.noteId,t.parentTopicId,t.title,new Date(t.createdAt),new Date(t.updatedAt))}toJSON(){return{id:this.id,lineId:this.lineId,noteId:this.noteId,parentTopicId:this.parentTopicId,title:this.title,createdAt:this.createdAt.toISOString(),updatedAt:this.updatedAt.toISOString()}}updateTitle(e){this.title=e,this.updatedAt=new Date}reparent(e){this.parentTopicId=e,this.updatedAt=new Date}},ht=class{topics=new Map;loadTopics(e,t){z.debug(`ghichu.topic.load`,{noteId:e,count:t.length}),this.topics.set(e,t.map(mt.fromData))}getTopics(e){return z.t(`ghichu.topic.getTopics`,{noteId:e}),this.topics.get(e)??[]}getAllTopics(){z.t(`ghichu.topic.getAllTopics`);let e=[];return this.topics.forEach(t=>e.push(...t)),e}getTopicForLine(e,t){z.t(`ghichu.topic.getTopicForLine`,{noteId:e,lineId:t});let n=this.topics.get(e);return n?n.find(e=>e.lineId===t)??null:null}createTopic(e,t,n,r=null){z.debug(`ghichu.topic.create.start`,{noteId:e,lineId:t,title:n});let i=mt.create(t,e,n,r),a=this.topics.get(e)??[];return a.push(i),this.topics.set(e,a),z.info(`ghichu.topic.create.complete`,{noteId:e,topicId:i.id}),i}deleteTopic(e,t){z.debug(`ghichu.topic.delete.start`,{noteId:e,topicId:t});let n=this.topics.get(e);if(!n)return!1;let r=n.findIndex(e=>e.id===t);return r===-1?!1:(n.splice(r,1),z.info(`ghichu.topic.delete.complete`,{noteId:e,topicId:t}),!0)}deleteTopicByLineId(e,t){z.debug(`ghichu.topic.deleteByLineId.start`,{noteId:e,lineId:t});let n=this.topics.get(e);if(!n)return!1;let r=n.findIndex(e=>e.lineId===t);return r===-1?!1:(n.splice(r,1),z.info(`ghichu.topic.deleteByLineId.complete`,{noteId:e,lineId:t}),!0)}serializeTopics(e){z.t(`ghichu.topic.serialize`,{noteId:e});let t=this.topics.get(e);return t?t.map(e=>e.toJSON()):[]}removeTopics(e){z.debug(`ghichu.topic.remove`,{noteId:e}),this.topics.delete(e)}};function gt(e,t={}){typeof fetch>`u`||fetch(`/__console/scope/${Ge}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({level:`log`,args:[e,JSON.stringify(t,null,2)]})}).catch(()=>{})}var _t=class{saveTimer=null;notes=[];_pinnedLineIds=[];_highlightsByLineId=new Map;getPinnedLineIds(){return this._pinnedLineIds}setPinnedLineIds(e,t){this._pinnedLineIds=e,t&&this.schedulePersist(t)}getHighlightsByLineId(){return this._highlightsByLineId}setLineHighlights(e,t,n){t.length>0?this._highlightsByLineId.set(e,t):this._highlightsByLineId.delete(e),n&&this.schedulePersist(n)}constructor(e,t,n){this.noteService=e,this.textService=t,this.topicService=n}async loadAll(){let e=await this.noteService.getAll();if(e.length>0)return{notes:e,active:e[0]};let t=await this.noteService.create(Me);return{notes:[t],active:t}}initTextEditing(e){let t=e.id;if(this.topicService.loadTopics(t,e.topics),e.opLog)this.textService.loadLog(t,e.opLog);else if(e.content.trim().length>0){this.textService.removeLog(t);let n=e.content.split(/<br\s*\/?>/);for(let e of n)this.textService.addEntry(t,e)}let n=this.textService.getLines(t),r=e.pinnedLineIndices.filter(e=>e<n.length).map(e=>n[e].lineId);this._pinnedLineIds=r;let i=new Map;for(let[t,r]of e.highlightsByLineIndex)t<n.length&&i.set(n[t].lineId,r);return this._highlightsByLineId=i,{lines:n,pinnedLineIds:r,highlightsByLineId:i}}async selectNote(e){return this.noteService.getById(e)}async createNote(e=Me){let t=await this.noteService.create(e);return this.notes=[t,...this.notes],t}async renameNote(e,t){return this.noteService.updateTitle(e,t)}appendContent(e,t,n,r){let i=this.textService.getLines(e);return i.length===1&&i[0].text===``&&t!==``?this.textService.applyEdit(e,[t]):this.textService.addEntry(e,t,n,r),this.schedulePersist(e),this.textService.getLines(e)}applyEdit(e,t){return this.textService.applyEdit(e,t),this.schedulePersist(e),this.textService.getLines(e)}reorderLines(e,t,n,r){return this.textService.reorderLines(e,t,n,r),this.schedulePersist(e),this.textService.getLines(e)}undo(e){return this.textService.undo(e),this.schedulePersist(e),this.textService.getLines(e)}redo(e){return this.textService.redo(e),this.schedulePersist(e),this.textService.getLines(e)}canUndo(e){return this.textService.canUndo(e)}canRedo(e){return this.textService.canRedo(e)}getLines(e){return this.textService.getLines(e)}getOps(e){return this.textService.getLog(e).getOps()}getEventLog(e){return this.textService.getLog(e).getEventLog()}getTopics(e){return this.topicService.getTopics(e)}getTopicLineIds(e){return new Set(this.topicService.getTopics(e).map(e=>e.lineId))}getTopicParents(e){let t=this.topicService.getTopics(e),n=new Map(t.map(e=>[e.id,e.lineId])),r=new Map;for(let e of t){let t=e.parentTopicId?n.get(e.parentTopicId)??null:null;r.set(e.lineId,t)}return r}createTopic(e,t,n,r=null){let i=null;r&&(i=this.topicService.getTopicForLine(e,r)?.id??null);let a=this.topicService.createTopic(e,t,n,i);return this.textService.getLog(e).appendEvent({type:`topic-created`,lineId:t,title:n,timestamp:new Date().toISOString()}),this.schedulePersist(e),a}removeTopic(e,t){this.topicService.deleteTopicByLineId(e,t),this.textService.getLog(e).appendEvent({type:`topic-removed`,lineId:t,timestamp:new Date().toISOString()}),this.schedulePersist(e)}async deleteNote(e){await this.noteService.delete(e),this.textService.removeLog(e),this.topicService.removeTopics(e)}async initialize(){let{notes:e,active:t}=await this.loadAll();return this.notes=e,this.initTextEditing(t),this.getLines(t.id).length===0&&this.appendContent(t.id,``),gt(`initialize`,{noteCount:e.length,activeId:t.id,activeTitle:t.title,lineCount:this.getLines(t.id).length}),{notes:e,active:t}}async selectAndInit(e){let t=await this.selectNote(e);return t?(this.initTextEditing(t),gt(`selectAndInit`,{id:t.id,title:t.title,lineCount:this.getLines(t.id).length}),t):(gt(`selectAndInit_not_found`,{id:e}),null)}async deleteAndSelectNext(e){if(await this.deleteNote(e),this.notes=this.notes.filter(t=>t.id!==e),this.notes.length===0){let t=await this.createNote();return this.initTextEditing(t),gt(`deleteAndSelectNext_created_default`,{deletedId:e,newId:t.id}),{remaining:this.notes,nextActive:t}}let t=this.notes[0];return this.initTextEditing(t),gt(`deleteAndSelectNext`,{deletedId:e,remainingCount:this.notes.length,nextId:t.id,nextTitle:t.title}),{remaining:this.notes,nextActive:t}}flushPendingSave(){if(this.saveTimer){clearTimeout(this.saveTimer),this.saveTimer=null;let e=this.notes;for(let t of e){let e=this.textService.serializeLog(t.id);if(!e)continue;let n=this.textService.getLines(t.id),r=n.map(e=>e.text).join(`<br>`),i=this.topicService.serializeTopics(t.id),a=new Set(this._pinnedLineIds),o=n.map((e,t)=>a.has(e.lineId)?t:-1).filter(e=>e>=0),s=new Map;for(let[e,t]of this._highlightsByLineId){let r=n.findIndex(t=>t.lineId===e);r>=0&&t.length>0&&s.set(r,t)}let c=new Map;for(let e=0;e<n.length;e++)n[e].parentLineId&&c.set(e,n[e].parentLineId);this.noteService.saveOpLog(t.id,e,r,i,o,s,c)}}}schedulePersist(e){this.saveTimer&&clearTimeout(this.saveTimer),this.saveTimer=setTimeout(async()=>{let t=this.textService.serializeLog(e);if(!t)return;let n=this.textService.getLines(e),r=n.map(e=>e.text).join(`<br>`),i=this.topicService.serializeTopics(e),a=new Set(this._pinnedLineIds),o=n.map((e,t)=>a.has(e.lineId)?t:-1).filter(e=>e>=0),s=new Map;for(let[e,t]of this._highlightsByLineId){let r=n.findIndex(t=>t.lineId===e);r>=0&&t.length>0&&s.set(r,t)}let c=new Map;for(let e=0;e<n.length;e++)n[e].parentLineId&&c.set(e,n[e].parentLineId);try{await this.noteService.saveOpLog(e,t,r,i,o,s,c)}catch{}},400)}},vt=class{constructor(e){this.facade=e}testMap={initialize_loads_notes:()=>this.testInitializeLoadsNotes(),select_and_init:()=>this.testSelectAndInit(),delete_and_select_next:()=>this.testDeleteAndSelectNext(),list_messages:()=>this.testListMessages(),append_message:()=>this.testAppendMessage(),append_and_read_back:()=>this.testAppendAndReadBack(),delete_latest_message:()=>this.testDeleteLatestMessage()};getGroups(){return[{label:`Lifecycle`,tests:[`initialize_loads_notes`,`select_and_init`,`delete_and_select_next`]},{label:`Messages`,tests:[`list_messages`,`append_message`,`append_and_read_back`,`delete_latest_message`]}]}getTestNames(){return this.getGroups().flatMap(e=>e.tests)}async runAll(){this.log(`suite_start`,{timestamp:new Date().toISOString()}),this.resetActiveNoteId();let e=[];for(let t of this.getTestNames())e.push(await this.runTest(t));let t={total:e.length,passed:e.filter(e=>e.passed).length,failed:e.filter(e=>!e.passed).length,results:e};return this.log(`suite_summary`,{total:t.total,passed:t.passed,failed:t.failed,failedTests:t.results.filter(e=>!e.passed).map(e=>e.name)}),t}async runSingle(e){return this.runTest(e)}async runTest(e){let t=this.testMap[e];return t?t():{name:e,passed:!1,durationMs:0,error:`Unknown test: ${e}`}}async testInitializeLoadsNotes(){let e=`initialize_loads_notes`;this.logTestMarker(e);let t=Date.now();try{let{notes:n,active:r}=await this.facade.initialize();return r?n.length===0?this.fail(e,t,`No notes after initialize`):this.facade.getLines(r.id)?this.pass(e,t):this.fail(e,t,`getLines returned falsy`):this.fail(e,t,`No active note after initialize`)}catch(n){return this.fail(e,t,String(n))}}async testSelectAndInit(){let e=`select_and_init`;this.logTestMarker(e);let t=Date.now();try{let{notes:n}=await this.facade.initialize();if(n.length<1)return this.fail(e,t,`Need at least 1 note`);let r=n[n.length-1],i=await this.facade.selectAndInit(r.id);return i?i.id===r.id?this.pass(e,t):this.fail(e,t,`Expected id ${r.id}, got ${i.id}`):this.fail(e,t,`selectAndInit returned null for id ${r.id}`)}catch(n){return this.fail(e,t,String(n))}}async testDeleteAndSelectNext(){let e=`delete_and_select_next`;this.logTestMarker(e);let t=Date.now();try{let n=await this.facade.createNote(`${K}temp`),{remaining:r,nextActive:i}=await this.facade.deleteAndSelectNext(n.id);return i?r.some(e=>e.id===n.id)?this.fail(e,t,`Deleted note still in remaining list`):this.pass(e,t):this.fail(e,t,`No nextActive after delete`)}catch(n){return this.fail(e,t,String(n))}}async testListMessages(){let e=`list_messages`;this.logTestMarker(e);let t=Date.now();try{let n=await this.getActiveNoteId(),r=this.facade.getLines(n);return this.log(`list_messages_result`,{noteId:n,lineCount:r.length,lines:r.map((e,t)=>({index:t,lineId:e.lineId,text:e.text.slice(0,100),hasParent:!!e.parentLineId,parentLineId:e.parentLineId??null}))}),this.pass(e,t)}catch(n){return this.fail(e,t,String(n))}}async testAppendMessage(){let e=`append_message`;this.logTestMarker(e);let t=Date.now();try{let n=await this.getActiveNoteId(),r=this.facade.getLines(n).length,i=this.marker();this.facade.appendContent(n,i);let a=this.facade.getLines(n);if(a.length!==r+1)return this.fail(e,t,`Expected ${r+1} lines, got ${a.length}`);let o=a[a.length-1];return o.text===i?this.pass(e,t):this.fail(e,t,`Last line is "${o.text}", expected "${i}"`)}catch(n){return this.fail(e,t,String(n))}}async testAppendAndReadBack(){let e=`append_and_read_back`;this.logTestMarker(e);let t=Date.now();try{let{active:n}=await this.facade.initialize(),r=this.marker();this.facade.appendContent(n.id,r);let i=this.facade.getLines(n.id);if(!i.some(e=>e.text===r))return this.fail(e,t,`Marker "${r}" not found in ${i.length} lines`);let a=i.filter(e=>e.text!==r).map(e=>e.text);return this.facade.applyEdit(n.id,a),this.pass(e,t)}catch(n){return this.fail(e,t,String(n))}}async testDeleteLatestMessage(){let e=`delete_latest_message`;this.logTestMarker(e);let t=Date.now();try{let n=await this.getActiveNoteId(),r=this.facade.getLines(n);if(r.length===0)return this.fail(e,t,`No lines to delete`);let i=r[r.length-1],a=r.slice(0,-1).map(e=>e.text);this.facade.applyEdit(n,a);let o=this.facade.getLines(n);return o.length===r.length-1?o.some(e=>e.lineId===i.lineId)?this.fail(e,t,`Line "${i.text}" still present after delete`):this.pass(e,t):this.fail(e,t,`Expected ${r.length-1} lines, got ${o.length}`)}catch(n){return this.fail(e,t,String(n))}}activeNoteId=null;async getActiveNoteId(){if(this.activeNoteId)return this.activeNoteId;let{active:e}=await this.facade.initialize();return this.activeNoteId=e.id,e.id}resetActiveNoteId(){this.activeNoteId=null}marker(){return`${K}${Date.now()}_${crypto.randomUUID().slice(0,8)}`}logTestMarker(e){let t=new Date().toISOString();this.logRaw(`${t} ======= ${e} ========`)}pass(e,t){let n={name:e,passed:!0,durationMs:Date.now()-t};return this.log(`test_pass`,{name:e,durationMs:n.durationMs}),n}fail(e,t,n){let r={name:e,passed:!1,durationMs:Date.now()-t,error:n};return this.log(`test_fail`,{name:e,durationMs:r.durationMs,error:n}),r}logRaw(e){typeof fetch>`u`||fetch(`/__console/scope/${We}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({level:`log`,args:[e]})}).catch(()=>{})}log(e,t){typeof fetch>`u`||fetch(`/__console/scope/${We}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({level:`log`,args:[e,JSON.stringify(t,null,2)]})}).catch(()=>{})}},yt=class{load(){try{let e=localStorage.getItem(Ke);return e?JSON.parse(e).map(e=>({...e,steps:e.steps.map(e=>typeof e==`string`?{method:e,delayMs:0}:e)})):[]}catch{return[]}}save(e){localStorage.setItem(Ke,JSON.stringify(e))}create(e,t=[]){let n=this.load(),r={id:crypto.randomUUID(),name:e,steps:t};return n.push(r),this.save(n),r}update(e,t){let n=this.load(),r=n.findIndex(t=>t.id===e);return r===-1?null:(n[r]={...n[r],...t},this.save(n),n[r])}remove(e){let t=this.load(),n=t.filter(t=>t.id!==e);return n.length===t.length?!1:(this.save(n),!0)}};function bt(e,t,n){e.getLines(t).length>0&&e.applyEdit(t,[]),n(e,t)}var xt=[{name:`Nested Topics + Sibling`,notation:`[A,A1][B]`,build:(e,t)=>{bt(e,t,(e,t)=>{e.appendContent(t,`Topic A`);let n=e.getLines(t),r=n[n.length-1];e.createTopic(t,r.lineId,r.text),e.appendContent(t,`Child A1`,void 0,r.lineId),e.appendContent(t,`Topic B`);let i=e.getLines(t),a=i[i.length-1];e.createTopic(t,a.lineId,a.text)})}},{name:`Deep Nesting`,notation:`[A,A1,[A1a]]`,build:(e,t)=>{bt(e,t,(e,t)=>{e.appendContent(t,`Topic A`);let n=e.getLines(t),r=n[n.length-1];e.createTopic(t,r.lineId,r.text),e.appendContent(t,`Sub-Topic A1`,void 0,r.lineId);let i=e.getLines(t),a=i[i.length-1];e.createTopic(t,a.lineId,a.text,r.lineId),e.appendContent(t,`Leaf A1a`,void 0,a.lineId)})}},{name:`Flat Messages`,notation:`msg,msg,msg`,build:(e,t)=>{bt(e,t,(e,t)=>{e.appendContent(t,`First message`),e.appendContent(t,`Second message`),e.appendContent(t,`Third message`)})}},{name:`Mixed Topics + Messages`,notation:`[A,A1],msg,[B]`,build:(e,t)=>{bt(e,t,(e,t)=>{e.appendContent(t,`Topic A`);let n=e.getLines(t),r=n[n.length-1];e.createTopic(t,r.lineId,r.text),e.appendContent(t,`Child A1`,void 0,r.lineId),e.appendContent(t,`A loose message`),e.appendContent(t,`Topic B`);let i=e.getLines(t),a=i[i.length-1];e.createTopic(t,a.lineId,a.text)})}},{name:`Empty Canvas`,notation:`(empty)`,build:(e,t)=>{e.getLines(t).length>0&&e.applyEdit(t,[])}}],St=class{constructor(e){this.facade=e}getFixtures(){return xt}apply(e,t){let n=xt.find(t=>t.name===e);if(!n)throw Error(`Fixture "${e}" not found`);n.build(this.facade,t)}},q=new class{_eventBus=null;_repository=null;_settingsRepository=null;_noteService=null;_settingsService=null;_textEditingService=null;_commandRegistry=null;_topicService=null;_noteFacade=null;_slashCommandResolver=null;_selfTestService=null;_e2ePresetService=null;_fixtureService=null;get eventBus(){return this._eventBus||=new be,this._eventBus}get repository(){return this._repository||=localStorage.getItem(`ghichu_local_mode`)===`true`?new st:new ot,this._repository}get settingsRepository(){return this._settingsRepository||=new lt,this._settingsRepository}get settingsService(){return this._settingsService||=new dt(this.settingsRepository),this._settingsService}get noteService(){return this._noteService||=new ut(this.repository),this._noteService}get textEditingService(){return this._textEditingService||=new Te,this._textEditingService}get commandRegistry(){return this._commandRegistry||=new ft,this._commandRegistry}get topicService(){return this._topicService||=new ht,this._topicService}get slashCommandResolver(){return this._slashCommandResolver||=new pt,this._slashCommandResolver}get noteFacade(){return this._noteFacade||=new _t(this.noteService,this.textEditingService,this.topicService),this._noteFacade}get selfTestService(){return this._selfTestService||=new vt(this.noteFacade),this._selfTestService}get e2ePresetService(){return this._e2ePresetService||=new yt,this._e2ePresetService}get fixtureService(){return this._fixtureService||=new St(this.noteFacade),this._fixtureService}setCanvasId(e){let t=this.repository;t instanceof ot&&t.setCanvasId(e),this._noteService=null,this._noteFacade=null}resolveCanvasId(){let e=L.getState().state,t=e?.activeProjectId,n=t?e?.projects[t]:null,r=n?.activeWorkspaceId;return(r?n?.workspaces[r]:null)?.activeCanvasId??void 0}setRepository(e){this._repository=e,this._noteService=null}setSettingsRepository(e){this._settingsRepository=e,this._settingsService=null}reset(){this._eventBus=null,this._repository=null,this._settingsRepository=null,this._noteService=null,this._settingsService=null,this._textEditingService=null,this._commandRegistry=null,this._topicService=null,this._noteFacade=null,this._slashCommandResolver=null,this._selfTestService=null}resetForTest(){this._repository=null,this._settingsRepository=null,this._noteService=null,this._settingsService=null,this._textEditingService=null,this._commandRegistry=null,this._topicService=null,this._noteFacade=null,this._slashCommandResolver=null,this._selfTestService=null,this.eventBus.emit({type:`GHICHU_RESET`,timestamp:Date.now()})}},Ct=[{label:`Notes`,getService:e=>e.noteFacade,methods:[{name:`loadAll`},{name:`getNotes`},{name:`getActiveNote`},{name:`getPinnedLineIds`}]},{label:`Settings`,getService:e=>e.settingsService,methods:[{name:`getAll`},{name:`toggleDisplayMode`}]},{label:`Topics`,getService:e=>e.topicService,methods:[{name:`getAllTopics`}]}],wt=e({default:()=>Tt}),Tt=`# @version 2.1.0
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
`,Et=e({default:()=>Dt}),Dt=`# @version 2.0.0
@v2.0.0 @latest-SV-2
Feature: Left Panel
  The left panel provides tabbed navigation for feature specs, operation logs,
  project tree, and self-tests, with undo/redo controls and URL-synced tab state.

  # Tabs
  @added-GL-1
  Scenario: The left panel shows a "Features" tab
  @added-GL-1
  Scenario: The left panel shows a "Logs" tab
  @added-GL-5
  Scenario: The left panel shows a "Projects" tab
  @added-SV-2
  Scenario: The left panel shows an "E2E" tab
  @added-GL-2
  Scenario: The active tab is reflected in the URL as a ?tab= search param
  @added-GL-2
  Scenario: Navigating to ?tab=logs opens the Logs tab directly
  @added-GL-5
  Scenario: Navigating to ?tab=projects opens the Projects tab directly
  @added-SV-2
  Scenario: Navigating to ?tab=e2e opens the E2E tab directly
  @added-GL-2
  Scenario: The default tab is "Features" when no ?tab= param is present
  @added-GL-2
  Scenario: Switching tabs updates the URL without a full page reload

  # Collapsible Panel
  @added-GL-5
  Scenario: The left panel can be collapsed to a narrow icon strip
  @added-GL-5
  Scenario: Collapsed panel shows tab icons that expand and switch tab on click
  @added-GL-5
  Scenario: The collapsed state persists via settings

  # Logs Tab
  @added-GL-1
  Scenario: The Logs tab shows all operations from the active note
  @added-GL-1
  Scenario: Each log entry displays a timestamp, operation type, and text preview
  @added-GL-1
  Scenario: Insert operations are shown in green
  @added-GL-1
  Scenario: Delete operations are shown in red
  @added-GL-1
  Scenario: Update operations are shown in yellow
  @added-GL-1
  Scenario: Undo events are shown in blue
  @added-GL-1
  Scenario: Redo events are shown in purple
  @added-GL-1
  Scenario: Log entries are displayed in reverse chronological order (newest first)
  @added-GL-1
  Scenario: An empty state message is shown when there are no operations

  # Projects Tab
  @added-GL-5
  Scenario: The Projects tab shows a tree of projects, workspaces, and canvases
  @added-GL-5
  Scenario: Selecting a canvas switches the active note storage to that canvas

  # E2E Tab
  @added-SV-2
  Scenario: The E2E tab shows the self-test panel with run-all and run-single buttons

  # Undo/Redo Controls
  @added-GU-1
  Scenario: Undo and redo buttons are visible in the tab bar
  @added-GU-1
  Scenario: The undo button is disabled when there is nothing to undo
  @added-GU-1
  Scenario: The redo button is disabled when there is nothing to redo
  @added-GU-1
  Scenario: Clicking undo reverses the last editor operation
  @added-GU-1
  Scenario: Clicking redo reapplies the last undone operation

  # Settings
  @added-GL-1
  Scenario: The settings gear icon only appears when the Features tab is active

  # Changelog
  # v2.0.0 SV-2 — added E2E tab, Projects tab, collapsible panel scenarios
  # v1.0.0 GL-5 — initial left panel spec with tabs, logs, undo/redo, URL sync
`,Ot=e({default:()=>kt}),kt=`Feature: Note Lifecycle
  As a user I want to create, load, and manage notes
  So that I can organize my thoughts

  Scenario: Initialize loads notes from canvas
    Given a note facade
    When I initialize the facade
    Then the result should contain notes
    And the result should have an active note

  Scenario: Initialize creates a default note on empty canvas
    Given a note facade
    When I initialize the facade
    Then the result should contain at least 1 note

  Scenario: Select and initialize a note
    Given a note facade
    And I have initialized the facade
    When I select the active note
    Then the selected note should have lines

  Scenario: Delete note and select next
    Given a note facade
    And I have initialized the facade
    When I create a temporary note
    And I delete the temporary note
    Then the temporary note should not be in the remaining list
    And there should be an active note after deletion
`,At=e({default:()=>jt}),jt=`Feature: Note Messages
  As a user I want to add and remove messages in a note
  So that I can build content incrementally

  Scenario: Append a message to a note
    Given a note facade
    And I have initialized the facade
    When I append a message "hello world"
    Then the last line should be "hello world"
    And the line count should have increased by 1

  Scenario: Append and read back a message
    Given a note facade
    And I have initialized the facade
    When I append a unique marker message
    Then the marker message should be found in the lines

  Scenario: Delete the latest message
    Given a note facade
    And I have initialized the facade
    When I delete the last line
    Then the line count should have decreased by 1

  Scenario: List all messages
    Given a note facade
    And I have initialized the facade
    When I list all messages
    Then I should receive an array of lines
`,Mt=e({default:()=>Nt}),Nt=`Feature: Pin Persistence
  As a user I want pinned messages to survive page reload
  So that my important messages stay pinned

  Scenario: Pin a line and verify it exists in memory
    Given a note facade
    And I have initialized the facade
    And I append a message "Important note"
    When I pin the last line
    Then the last line should be pinned

  Scenario: Persist and reload pinned line via typeData
    Given a note facade
    And I have initialized the facade
    And I append a message "Pinned note"
    When I pin the last line
    And I trigger a persist with pins
    And I wait for persist to complete
    And I reload the note from canvas API
    Then the reloaded note should have pinned lines

  Scenario: Pin shows in editor after persist and reload
    Given a note facade
    And I have initialized the facade
    And I append a message "Editor pin test"
    When I pin the last line
    And I trigger a persist with pins
    And I wait for persist to complete
    And I reload the facade from API
    Then the editor should show a pinned banner
    And the pinned banner should contain "Editor pin test"

  Scenario: isPinned survives roundtrip on a TEXT node
    Given a note facade
    And I have initialized the facade
    When I create a TEXT node with isPinned via API
    And I read the pinned TEXT node back via API
    Then the TEXT node should have isPinned preserved
`,Pt=e({default:()=>Ft}),Ft=`# @version 1.0.0
@v1.0.0 @latest-SV-2
Feature: Self-Verifying Tests
  The E2E panel provides in-browser self-tests that exercise facade lifecycle
  methods against real storage without mocks or external test runners.

  # E2E Tab
  @added-SV-2
  Scenario: An "E2E" tab appears in the left panel tab bar
  @added-SV-2
  Scenario: Clicking the E2E tab shows the self-test panel
  @added-SV-2
  Scenario: The E2E tab is URL-synced via ?tab=e2e

  # Test List
  @added-SV-2
  Scenario: The panel lists all registered self-test cases by name
  @added-SV-2
  Scenario: Each test shows a status icon (idle, running, passed, failed)
  @added-SV-2
  Scenario: Each test has a play button to run it individually

  # Run All
  @added-SV-2
  Scenario: A "Run All" button runs every test sequentially
  @added-SV-2
  Scenario: All tests show "running" status while the suite executes
  @added-SV-2
  Scenario: A summary bar shows pass/fail counts after the suite completes
  @added-SV-2
  Scenario: The summary bar is green when all tests pass
  @added-SV-2
  Scenario: The summary bar is red when any test fails

  # Run Single
  @added-SV-2
  Scenario: Clicking a test's play button runs only that test
  @added-SV-2
  Scenario: The test shows "running" status while executing
  @added-SV-2
  Scenario: The test shows "passed" or "failed" when complete

  # Test Results
  @added-SV-2
  Scenario: A passing test shows a green check icon
  @added-SV-2
  Scenario: A failing test shows a red X icon and an error message
  @added-SV-2
  Scenario: Test duration is shown in the title tooltip on hover

  # Test Cases
  @added-SV-2
  Scenario: "initialize_loads_notes" verifies facade.initialize() returns notes and lines
  @added-SV-2
  Scenario: "append_and_read_back" writes a marker line, reads it back, and cleans up
  @added-SV-2
  Scenario: "select_and_init" selects a different note and verifies text editing init
  @added-SV-2
  Scenario: "delete_and_select_next" creates a temp note, deletes it, verifies next selection

  # Logging
  @added-SV-3
  Scenario: Each test logs a timestamp marker before execution to the ghichu-selftest scope
  @added-SV-2
  Scenario: Test results are logged to the ghichu-selftest Vite scoped log

  # Changelog
  # v1.0.0 SV-2/SV-3 — initial self-verifying spec with E2E tab, test list, run-all, run-single, logging
`,It=e({default:()=>Lt}),Lt=`# @version 1.0.0
@v1.0.0 @latest-FA-1
Feature: Settings
  User preferences for the editor are persisted via the SettingsService
  and exposed through toggle functions in the settings sheet.

  # Display Mode
  @added-FA-1
  Scenario: The display mode can be toggled between "scroll" and "wrap"
  @added-FA-1
  Scenario: The display mode persists across page reloads

  # Timestamp Format
  @added-FA-1
  Scenario: The timestamp format can be toggled between "relative" and "absolute"
  @added-FA-1
  Scenario: The timestamp format persists across page reloads

  # Ghichu Mode
  @added-FA-1
  Scenario: The editor mode can be toggled between "edit" and "view"
  @added-FA-1
  Scenario: The editor mode persists across page reloads

  # Show Timestamps
  @added-FA-1
  Scenario: Timestamps on editor lines can be toggled on and off
  @added-FA-1
  Scenario: The show timestamps setting persists across page reloads

  # Card Borders
  @added-FA-1
  Scenario: Card borders on editor lines can be toggled on and off
  @added-FA-1
  Scenario: The card borders setting persists across page reloads

  # Font Style
  @added-FA-1
  Scenario: The font style can be toggled between "sans" and "mono"
  @added-FA-1
  Scenario: The font style persists across page reloads

  # Markdown Preview
  @added-FA-1
  Scenario: Markdown preview can be toggled on and off
  @added-FA-1
  Scenario: The markdown preview setting persists across page reloads

  # Left Panel
  @added-FA-1
  Scenario: The left panel collapsed state persists across page reloads

  # Scroll Position
  @added-FA-1
  Scenario: The scroll position is saved with debounce as the user scrolls

  # Architecture
  @added-FA-1
  Scenario: Toggle logic lives in SettingsService, not in the React hook
  @added-FA-1
  Scenario: The hook is a thin consumer that delegates to service toggle methods

  # Changelog
  # v1.0.0 FA-1 — initial settings spec with all toggles, persistence, and framework-agnostic architecture
`,Rt=e({default:()=>zt}),zt=`# @version 2.8.0
@v2.8.0 @latest-SC-1
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
  @added-US-2
  Scenario: An empty note starts with a blank editable line and autofocus
  @added-US-2
  Scenario: Tapping empty space below lines focuses the last line

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
  @added-US-1
  Scenario: Timestamps are hidden by default and can be toggled on
  @added-US-1
  Scenario: Card borders are hidden by default and can be toggled on
  @added-US-2
  Scenario: Font style can be toggled between sans-serif and monospace
  @added-US-2
  Scenario: The editor defaults to edit mode

  # Context Menu
  @added-CM-1
  Scenario: Long-pressing a line opens a context menu
  @added-CM-3
  Scenario: The context menu includes Copy, Create Topic, and Delete options
  @added-CM-2
  Scenario: Tapping to close the context menu does not highlight the line
  @added-GU-2
  Scenario: Hovering a line shows a more options button in the top right
  @added-GU-2
  Scenario: Clicking the more options button opens the context menu

  # Collapsible Lines
  @added-GU-2
  Scenario: A chevron icon appears left of multiline content
  @added-GU-2
  Scenario: Clicking the chevron collapses the line to three rows
  @added-GU-2
  Scenario: Clicking the chevron again expands the line back to full height
  @added-GU-2
  Scenario: The context menu includes a Collapse or Expand option

  # Slash Commands
  @added-SC-1
  Scenario: Typing "/" in the floating input shows a slash command menu
  @added-SC-1
  Scenario: The /ollama command sends a prompt and appends the AI response
  @added-SC-1
  Scenario: The /summarize command summarizes all note content via Ollama
  @added-SC-1
  Scenario: Pressing Enter with a slash command executes it instead of appending text

  # Layout
  @added-TP-1
  Scenario: Left and right panels scroll independently
  @added-TP-1
  Scenario: Both panels fill the full page height
  @added-GL-2 @updated-US-1
  Scenario: Card borders and shadow are optional via settings
  @added-GL-5 @updated-US-1
  Scenario: Timestamps are optional and appear below the card when enabled

  # Changelog
  # v2.8.0 SC-1  — added slash commands (/ollama, /summarize) with command menu
  # v2.7.0 GU-4  — added collapsible lines, hover more options button, context menu on desktop
  # v2.6.0 US-2  — added font style, autofocus, tap-empty-space, edit mode default
  # v2.5.0 GL-5  — added card styling and timestamp bottom-left alignment
  # v2.4.0 EL-1  — added display settings section (word wrap toggle via settings sheet)
  # v2.3.0 ES-13 — added undo/redo section (3 new scenarios)
  # v2.2.1 FI-7  — updated floating input append scenario wording
  # v2.2.0 FI-5  — added floating input append scenario
  # v2.0.0 ES-9  — rewritten for blame-style line-based editing (breaking)
  # v1.0.0 TP-1  — initial two-column layout spec
`,Bt=e({default:()=>Vt}),Vt=`Feature: Topic Persistence
  As a user I want topics to survive page reload
  So that my organizational structure is preserved

  Scenario: typeData survives roundtrip on a TEXT node
    Given a note facade
    And I have initialized the facade
    When I create a TEXT node with typeData via API
    And I read the TEXT node back via API
    Then the TEXT node should have typeData preserved

  Scenario: Create a topic and verify it exists in memory
    Given a note facade
    And I have initialized the facade
    And I append a message "Topic heading"
    When I create a topic on the last line
    Then the last line should be a topic

  Scenario: Persist and reload topic via typeData
    Given a note facade
    And I have initialized the facade
    When I trigger a persist
    And I wait for persist to complete
    And I reload the note from canvas API
    Then the reloaded note should have topics
`,Ht=e({default:()=>Ut}),Ut=`# @version 4.3.0
@v4.3.0 @latest-EL-3
Feature: Topics
  Lines in the editor can be marked as topics to organize content hierarchically.
  Topics are persistent annotations that survive text edits and undo/redo.

  # Creating Topics
  @added-CT-1
  Scenario: A "Create Topic" option appears in the editor line menu
  @added-CT-1
  Scenario: Clicking "Create Topic" marks the line as a topic
  @added-CT-1
  Scenario: A topic line shows a visual indicator
  @added-CT-1
  Scenario: A topic line displays its text as the topic title

  # Topic Structure
  @added-CT-1
  Scenario: Multiple lines can each be their own topic
  @added-CT-1
  Scenario: A topic persists when the line text is edited
  @added-CT-1
  Scenario: Deleting a topic line removes the topic
  @added-CT-1
  Scenario: Removing topic status from a line keeps the line text intact
  @added-CT-1
  Scenario: Undo and redo do not affect topic status

  # Highlighting and Input Routing
  @added-CT-4
  Scenario: Clicking a topic line highlights it
  @added-CT-4
  Scenario: Clicking a highlighted topic line unhighlights it
  @added-CT-4
  Scenario: Only one line can be highlighted at a time
  @added-CT-4
  Scenario: Messages sent while a topic is highlighted appear under that topic
  @added-CT-4
  Scenario: Messages sent under a topic are indented
  @added-CT-4
  Scenario: Messages sent with no topic highlighted appear at the end
  @added-CT-4
  Scenario: Messages sent with no topic highlighted are not indented

  # View Topic (Detailed View)
  @added-CT-4
  Scenario: A "View Topic" option appears in the menu for topic lines
  @added-CT-4
  Scenario: Clicking "View Topic" shows only that topic's children
  @added-CT-4
  Scenario: A breadcrumb bar shows the topic title with back and exit buttons
  @added-CT-4
  Scenario: Clicking back or exit returns to the full editor view

  # Sub-Topics
  @implemented-NT-1
  Scenario: A line under a topic can become a sub-topic
  @implemented-NT-1
  Scenario: Sub-topics are visually nested under their parent topic
  @implemented-NT-2
  Scenario: Messages sent while a nested topic is highlighted insert under that sub-topic

  # Collapsing Topics
  @implemented-NT-4
  Scenario: Collapsing a topic hides all its descendants recursively
  @implemented-NT-5
  Scenario: Collapse strips appear on nested lines for each ancestor topic
  @implemented-NT-5
  Scenario: Clicking a collapse strip collapses the corresponding ancestor topic

  # Topic Toggle via Double-Click
  @implemented-GU-7
  Scenario: Double-clicking the left edge of a non-topic line turns it into a topic
  @implemented-GU-8
  Scenario: Double-clicking the left edge of a topic line removes its topic status
  @implemented-GU-8
  Scenario: Single-click on the left edge is delayed 200ms so a double-click can cancel it
  @implemented-GU-8
  Scenario: The left-edge hover shadow only appears on non-topic lines when not in edit sub-mode

  # Moving Messages
  @implemented-GK-1
  Scenario: A "Move Up" option appears in the context menu for a message
  @implemented-GK-1
  Scenario: A "Move Down" option appears in the context menu for a message
  @updated-EL-3
  Scenario: Moving a topic moves it together with all its children as a block
  @updated-EL-3
  Scenario: Move Up swaps the message with the previous sibling at the same nesting level
  @updated-EL-3
  Scenario: Move Down swaps the message with the next sibling at the same nesting level
  @implemented-GK-1
  Scenario: "Move Up" is hidden when the message is the first sibling at its level
  @implemented-GK-1
  Scenario: "Move Down" is hidden when the message is the last sibling at its level

  # Branching (planned)
  @planned-CT-1
  Scenario: A topic can be branched into a new editor view
  @planned-CT-1
  Scenario: A branch carries the context of its parent topic

  # Changelog
  # v4.3.0 EL-3 — hierarchy-aware block moves: topics move with children, siblings at same level
  # v4.2.0 GK-1 — move messages up/down via context menu
  # v4.1.0 GU-8 — double-click toggles topic (create + remove), single-click delay, hover shadow scoping
  # v4.0.0 NT-4/NT-5/NT-6/GU-7 — topic collapse (recursive hide, collapse strips, double-click to create topic)
  # v3.0.0 NT-1/NT-2 — sub-topics implemented: nesting, depth-based indentation, nested message insertion
  # v2.0.0 CT-4 — added highlight, input routing, indentation, view topic with breadcrumb
  # v1.0.0 CT-1 — initial topics spec with create, structure, sub-topics, and branching
`,Wt=e({default:()=>Gt}),Gt=`# @version 2.0.0
@v2.0.0 @latest-FA-1
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

  # Slash Command Resolution
  @added-FA-1
  Scenario: SlashCommandResolver matches a "/" prefixed input against command candidates
  @added-FA-1
  Scenario: SlashCommandResolver extracts arguments after the trigger word
  @added-FA-1
  Scenario: SlashCommandResolver returns null when no command matches
  @added-FA-1
  Scenario: The orchestrator delegates slash command resolution to SlashCommandResolver

  # Changelog
  # v2.0.0 FA-1 — added SlashCommandResolver scenarios for framework-agnostic command parsing
  # v1.0.0 CS-1 — initial command registry with floating input integration
`,Kt=e({default:()=>qt}),qt=`# @version 1.2.0
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
`,Jt=e({default:()=>Yt}),Yt=`# @version 1.0.0
@v1.0.0 @latest-EL-3
Feature: Message Context Menu
  Each message line has a context menu for quick actions like copying,
  moving, organizing into topics, and deleting.

  # Visibility
  @added-EL-3
  Scenario: A 3-dot button appears on hover over a message line
  @added-EL-3
  Scenario: The 3-dot button stays visible while the menu is open
  @added-EL-3
  Scenario: The 3-dot button hides when the menu closes
  @added-EL-3
  Scenario: Long-pressing a message line opens the context menu
  @added-EL-3
  Scenario: Clicking the 3-dot button opens the context menu
  @added-EL-3
  Scenario: Clicking outside the menu closes it

  # Actions — Copy
  @added-EL-3
  Scenario: A "Copy" option appears in the context menu
  @added-EL-3
  Scenario: Clicking "Copy" copies the message text to the clipboard

  # Actions — Move
  @added-EL-3
  Scenario: A "Move Up" option appears when the message can move up
  @added-EL-3
  Scenario: A "Move Down" option appears when the message can move down
  @added-EL-3
  Scenario: "Move Up" is hidden when the message is already the first sibling
  @added-EL-3
  Scenario: "Move Down" is hidden when the message is already the last sibling
  @added-EL-3
  Scenario: Moving a topic moves the topic and all its children as a block
  @added-EL-3
  Scenario: Move Up and Move Down operate on siblings at the same nesting level

  # Actions — Collapse
  @added-EL-3
  Scenario: A "Collapse" option appears for an expanded message
  @added-EL-3
  Scenario: An "Expand" option appears for a collapsed message
  @added-EL-3
  Scenario: Clicking "Collapse" hides the message's descendants
  @added-EL-3
  Scenario: Clicking "Expand" reveals the message's descendants

  # Actions — Topic
  @added-EL-3
  Scenario: A "Create Topic" option appears for a non-topic message
  @added-EL-3
  Scenario: A "Remove Topic" option appears for a topic message
  @added-EL-3
  Scenario: Clicking "Create Topic" marks the message as a topic
  @added-EL-3
  Scenario: Clicking "Remove Topic" removes topic status but keeps the text
  @added-EL-3
  Scenario: A "View Topic" option appears for topic messages
  @added-EL-3
  Scenario: "View Topic" is not shown for non-topic messages
  @added-EL-3
  Scenario: Clicking "View Topic" navigates to the detailed topic view

  # Actions — Delete
  @added-EL-3
  Scenario: A "Delete" option appears in the context menu
  @added-EL-3
  Scenario: The "Delete" option is styled as a destructive action
  @added-EL-3
  Scenario: Clicking "Delete" removes the message

  # Grouping — Separators
  @added-EL-3
  Scenario: "View Topic" is separated from the edit actions by a divider
  @added-EL-3
  Scenario: Copy and Move actions are separated from topic actions by a divider
  @added-EL-3
  Scenario: Topic and collapse actions are separated from Delete by a divider

  # Changelog
  # v1.0.0 EL-3 — initial context menu spec
`,Xt=e({default:()=>Zt}),Zt=`# @version 3.0.0
@v3.0.0 @latest-FB-1
Feature: Floating Input
  A command input bar that floats at the bottom center of the editor area.

  # FAB / Expand Behavior
  @added-FB-1
  Scenario: Input bar starts in collapsed state showing only a FAB button
  @added-FB-1
  Scenario: Tapping the FAB button expands the full input bar
  @added-FB-1
  Scenario: The input bar slides in from the right when expanding
  @added-FB-1
  Scenario: The textarea receives focus after expanding

  # Swipe Gestures (Touch)
  @added-FB-1
  Scenario: Swiping right on the input bar collapses it to the FAB
  @added-FB-1
  Scenario: Partial swipe below threshold snaps the input bar back
  @added-FB-1
  Scenario: During swipe the input bar moves with the finger
  @added-FB-1
  Scenario: During swipe the input bar fades out progressively

  # Auto-Resize Textarea
  @added-FB-1
  Scenario: The input field expands vertically when text overflows
  @added-FB-1
  Scenario: The input field does not exceed maximum height

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
  @added-EL-1 @updated-FB-1
  Scenario: Tapping the config button opens a popover with menu options
  @added-EL-1
  Scenario: Tapping Settings opens the settings sheet
  @added-FB-1
  Scenario: The config popover contains a Log Viewer option
  @added-FB-1
  Scenario: Tapping Log Viewer opens the mobile log viewer
  @added-FB-1
  Scenario: The config popover contains a Dashboard option
  @added-FB-1
  Scenario: Tapping Dashboard opens the mobile dashboard

  # Slash Commands
  @added-FB-1
  Scenario: Typing a slash shows the command menu
  @added-FB-1
  Scenario: The slash command menu appears above the input field
  @added-FB-1
  Scenario: Arrow keys navigate the command menu options
  @added-FB-1
  Scenario: Pressing Enter selects the highlighted command
  @added-FB-1
  Scenario: Pressing Escape closes the slash command menu

  # Changelog
  # v3.0.0 FB-1  — added FAB toggle, swipe gestures, slash commands, auto-resize, dashboard/log viewer
  # v2.2.0 EL-1  — added config button with popover and settings sheet integration
  # v2.1.0 SB-1  — added send button to the right of the input
  # v2.0.0 KS-1  — shortcuts routed through keyboard system with scoping, added Escape and Ctrl+/
  # v1.1.1 FI-7  — updated submit scenario wording for append-to-editor behavior
  # v1.1.0 FI-3  — moved into floating-input/ sub-directory
  # v1.0.0 FI-2  — initial floating input spec
`,Qt=Ce(Object.assign({"/src/apps/ghichu/__specifications__/features/keyboard-event-service.feature":wt,"/src/apps/ghichu/__specifications__/features/left-panel.feature":Et,"/src/apps/ghichu/__specifications__/features/note-lifecycle.feature":Ot,"/src/apps/ghichu/__specifications__/features/note-messages.feature":At,"/src/apps/ghichu/__specifications__/features/pin-persistence.feature":Mt,"/src/apps/ghichu/__specifications__/features/self-verifying.feature":Pt,"/src/apps/ghichu/__specifications__/features/settings.feature":It,"/src/apps/ghichu/__specifications__/features/text-editor.feature":Rt,"/src/apps/ghichu/__specifications__/features/topic-persistence.feature":Bt,"/src/apps/ghichu/__specifications__/features/topics.feature":Ht,"/src/apps/ghichu/modules/events/commands/commands.feature":Wt,"/src/apps/ghichu/modules/events/text-editing/text-editing.feature":Kt,"/src/apps/ghichu/ui/components/ghichu-message-context-menu/ghichu-message-context-menu.feature":Jt,"/src/apps/ghichu/ui/molecules/floating-input/floating-input.feature":Xt})),$t={"I append a message {string}":`I append a message {string}`,"I have initialized the facade":`I have initialized the facade`,"a note facade":`a note facade`},J={"I append a message {string}":`I append a message {string}`,"I append a unique marker message":`I append a unique marker message`,"I create a TEXT node with isPinned via API":`I create a TEXT node with isPinned via API`,"I create a TEXT node with typeData via API":`I create a TEXT node with typeData via API`,"I create a temporary note":`I create a temporary note`,"I create a topic on the last line":`I create a topic on the last line`,"I delete the last line":`I delete the last line`,"I delete the temporary note":`I delete the temporary note`,"I initialize the facade":`I initialize the facade`,"I list all messages":`I list all messages`,"I pin the last line":`I pin the last line`,"I read the TEXT node back via API":`I read the TEXT node back via API`,"I read the pinned TEXT node back via API":`I read the pinned TEXT node back via API`,"I reload the facade from API":`I reload the facade from API`,"I reload the note from canvas API":`I reload the note from canvas API`,"I select the active note":`I select the active note`,"I trigger a persist":`I trigger a persist`,"I trigger a persist with pins":`I trigger a persist with pins`,"I wait for persist to complete":`I wait for persist to complete`},Y={"I should receive an array of lines":`I should receive an array of lines`,"the TEXT node should have isPinned preserved":`the TEXT node should have isPinned preserved`,"the TEXT node should have typeData preserved":`the TEXT node should have typeData preserved`,"the editor should show a pinned banner":`the editor should show a pinned banner`,"the last line should be a topic":`the last line should be a topic`,"the last line should be pinned":`the last line should be pinned`,"the last line should be {string}":`the last line should be {string}`,"the line count should have decreased by {int}":`the line count should have decreased by {int}`,"the line count should have increased by {int}":`the line count should have increased by {int}`,"the marker message should be found in the lines":`the marker message should be found in the lines`,"the pinned banner should contain {string}":`the pinned banner should contain {string}`,"the reloaded note should have pinned lines":`the reloaded note should have pinned lines`,"the reloaded note should have topics":`the reloaded note should have topics`,"the result should contain at least {int} note":`the result should contain at least {int} note`,"the result should contain notes":`the result should contain notes`,"the result should have an active note":`the result should have an active note`,"the selected note should have lines":`the selected note should have lines`,"the temporary note should not be in the remaining list":`the temporary note should not be in the remaining list`,"there should be an active note after deletion":`there should be an active note after deletion`};function X(e,t){if(!e)throw Error(t)}function Z(e){let t=e.initResult?.active?.id;if(!t)throw Error(`No active note — call 'I have initialized the facade' first`);return t}function Q(e,t){typeof fetch>`u`||fetch(`/__console/scope/${We}`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({level:`log`,args:[e,JSON.stringify(t,null,2)]})}).catch(()=>{})}var en={[$t[`a note facade`]]:async e=>{e.container=q,e.facade=q.noteFacade,e.api=V(void 0,we()??`default-user`),e.canvasId=qe;try{await e.api.canvases.get(qe),e.container.setCanvasId(qe)}catch(t){let n=t instanceof Error?t.message:String(t);if(n.includes(`404`)||n.includes(`not found`)){Q(`e2e_canvas_missing`,{canvasId:qe,workspaceId:Je});try{let t;try{t=(await e.api.workspaces.get(Je)).id}catch{let n=await e.api.projects.create(`e2e-test-project`);t=(await e.api.workspaces.create(n.id,`e2e-test-workspace`)).id,Q(`e2e_workspace_created`,{projectId:n.id,workspaceId:t})}let n=await e.api.canvases.create(t,`e2e-test-canvas`);Q(`e2e_canvas_created`,{newCanvasId:n.id,name:n.name}),e.container.setCanvasId(n.id),e.canvasId=n.id}catch(e){throw Error(`E2E canvas "${qe}" does not exist and could not auto-create. Error: ${e}`)}return}throw t}},[$t[`I have initialized the facade`]]:async e=>{e.initResult=await e.facade.initialize();let t=e.facade.getLines(e.initResult.active.id);Q(`4_init_facade`,{activeId:e.initResult.active.id,noteCount:e.initResult.notes.length,lineCount:t.length,lineTexts:t.map(e=>e.text.slice(0,50))})},[$t[`I append a message {string}`]]:(e,t)=>{let n=Z(e);e.linesBefore=e.facade.getLines(n),e.facade.appendContent(n,t.string0)},[J[`I initialize the facade`]]:async e=>{e.initResult=await e.facade.initialize()},[J[`I select the active note`]]:async e=>{let t=Z(e);e.selectedNote=await e.facade.selectAndInit(t)},[J[`I create a temporary note`]]:async e=>{e.tempNote=await e.facade.createNote(`${K}bdd_temp`)},[J[`I delete the temporary note`]]:async e=>{if(!e.tempNote)throw Error(`No temporary note to delete`);e.deleteResult=await e.facade.deleteAndSelectNext(e.tempNote.id)},[J[`I append a unique marker message`]]:e=>{let t=Z(e);e.linesBefore=e.facade.getLines(t),e.markerText=`${K}${Date.now()}_${crypto.randomUUID().slice(0,8)}`,e.facade.appendContent(t,e.markerText)},[J[`I delete the last line`]]:e=>{let t=Z(e);e.linesBefore=e.facade.getLines(t);let n=e.linesBefore.slice(0,-1).map(e=>e.text);e.facade.applyEdit(t,n)},[J[`I list all messages`]]:e=>{let t=Z(e);e.linesAfter=e.facade.getLines(t)},[J[`I create a TEXT node with typeData via API`]]:async e=>{e.testNodeTypeData={isTopic:!0,topicTitle:`BDD test topic`,customField:42};let t=await e.api.nodes.create(e.canvasId,{type:`TEXT`,x:-9999,y:-9999,content:`__bdd_typedata_test__`,typeData:e.testNodeTypeData});e.testNodeId=t.id,Q(`typedata_create`,{id:t.id,sentTypeData:e.testNodeTypeData,returnedTypeData:t.typeData})},[J[`I read the TEXT node back via API`]]:async e=>{X(!!e.testNodeId,`No test node ID — create a TEXT node first`),e.readBackNode=await e.api.nodes.get(e.testNodeId),Q(`typedata_readback`,{id:e.readBackNode.id,content:e.readBackNode.content,typeData:e.readBackNode.typeData,type:e.readBackNode.type});try{await e.api.nodes.delete(e.testNodeId)}catch{}},[J[`I create a topic on the last line`]]:e=>{let t=Z(e),n=e.facade.getLines(t);X(n.length>0,`No lines to create topic on`);let r=n[n.length-1];e.facade.createTopic(t,r.lineId,r.text)},[J[`I trigger a persist`]]:async e=>{let t=Z(e),n=e.container.textEditingService,r=e.container.topicService,i=e.container.noteService,a=n.serializeLog(t);if(a){let e=n.getLines(t).map(e=>e.text).join(`<br>`),o=r.serializeTopics(t);await i.saveOpLog(t,a,e,o)}},[J[`I wait for persist to complete`]]:async()=>{await new Promise(e=>setTimeout(e,500))},[J[`I reload the note from canvas API`]]:async e=>{e.reloadedNote=(await e.container.repository.getAll())[0]??null,Q(`reloaded_note`,{found:!!e.reloadedNote,id:e.reloadedNote?.id,title:e.reloadedNote?.title,contentLength:e.reloadedNote?.content.length,topicCount:e.reloadedNote?.topics.length,topics:e.reloadedNote?.topics})},[Y[`the result should contain notes`]]:e=>{X(!!e.initResult,`No init result`),X(e.initResult.notes.length>0,`Expected notes but got empty array`)},[Y[`the result should have an active note`]]:e=>{X(!!e.initResult?.active,`Expected an active note`)},[Y[`the result should contain at least {int} note`]]:(e,t)=>{X(!!e.initResult,`No init result`),X(e.initResult.notes.length>=t.int0,`Expected at least ${t.int0} note(s), got ${e.initResult.notes.length}`)},[Y[`the selected note should have lines`]]:e=>{X(!!e.selectedNote,`No selected note`),X(e.facade.getLines(e.selectedNote.id).length>=0,`getLines returned undefined`)},[Y[`the temporary note should not be in the remaining list`]]:e=>{X(!!e.deleteResult,`No delete result`),X(!!e.tempNote,`No temp note reference`),X(!e.deleteResult.remaining.some(t=>t.id===e.tempNote.id),`Temporary note still in remaining list`)},[Y[`there should be an active note after deletion`]]:e=>{X(!!e.deleteResult,`No delete result`),X(!!e.deleteResult.nextActive,`No active note after deletion`)},[Y[`the last line should be {string}`]]:(e,t)=>{let n=Z(e),r=e.facade.getLines(n);X(r.length>0,`No lines in note`);let i=r[r.length-1];X(i.text===t.string0,`Expected last line "${t.string0}", got "${i.text}"`)},[Y[`the last line should not be {string}`]]:(e,t)=>{let n=Z(e),r=e.facade.getLines(n);if(r.length===0)return;let i=r[r.length-1];X(i.text!==t.string0,`Last line is still "${t.string0}"`)},[Y[`the line count should have increased by {int}`]]:(e,t)=>{X(!!e.linesBefore,`No linesBefore recorded`);let n=Z(e),r=e.facade.getLines(n),i=e.linesBefore.length+t.int0;X(r.length===i,`Expected ${i} lines, got ${r.length}`)},[Y[`the line count should have decreased by {int}`]]:(e,t)=>{X(!!e.linesBefore,`No linesBefore recorded`);let n=Z(e),r=e.facade.getLines(n),i=e.linesBefore.length-t.int0;X(r.length===i,`Expected ${i} lines, got ${r.length}`)},[Y[`the marker message should be found in the lines`]]:e=>{X(!!e.markerText,`No marker text recorded`);let t=Z(e),n=e.facade.getLines(t);X(n.some(t=>t.text===e.markerText),`Marker "${e.markerText}" not found in ${n.length} lines`)},[Y[`I should receive an array of lines`]]:e=>{X(!!e.linesAfter,`No lines result`),X(Array.isArray(e.linesAfter),`Lines is not an array`)},[Y[`the TEXT node should have typeData preserved`]]:e=>{X(!!e.readBackNode,`No read-back node — run 'I read the TEXT node back via API' first`);let t=e.readBackNode.typeData;Q(`typedata_assertion`,{sent:e.testNodeTypeData,received:t,typeDataIsUndefined:t===void 0,typeDataIsNull:t===null}),X(t!=null,`typeData is ${t} — backend does NOT preserve typeData on TEXT nodes`),X(t.isTopic===!0,`typeData.isTopic is ${t?.isTopic}, expected true`),X(t.topicTitle===`BDD test topic`,`typeData.topicTitle is "${t?.topicTitle}", expected "BDD test topic"`)},[Y[`the last line should be a topic`]]:e=>{let t=Z(e),n=e.facade.getLines(t);X(n.length>0,`No lines`);let r=n[n.length-1],i=e.facade.getTopicLineIds(t);X(i.has(r.lineId),`Line "${r.text}" (${r.lineId}) is not a topic. Topic lineIds: ${[...i].join(`, `)}`)},[Y[`the canvas API should have TEXT nodes`]]:async e=>{let t=await e.api.nodes.list(e.canvasId,`TEXT`);Q(`api_text_nodes`,{count:t.length,ids:t.map(e=>e.id)}),X(t.length>0,`No TEXT nodes found on canvas ${e.canvasId}`)},[Y[`the reloaded note should have topics`]]:e=>{X(!!e.reloadedNote,`No reloaded note`),Q(`reloaded_topics`,{topicCount:e.reloadedNote.topics.length,topics:e.reloadedNote.topics}),X(e.reloadedNote.topics.length>0,`Reloaded note has 0 topics — they were lost on reload`)},[J[`I pin the last line`]]:e=>{let t=Z(e),n=e.facade.getLines(t);X(n.length>0,`No lines to pin`);let r=n[n.length-1];e.pinnedLineIds=[...e.pinnedLineIds??[],r.lineId],e.facade.setPinnedLineIds(e.pinnedLineIds,t),Q(`pin_line`,{lineId:r.lineId,text:r.text,pinnedIds:e.pinnedLineIds})},[J[`I trigger a persist with pins`]]:async e=>{let t=Z(e),n=e.container.textEditingService,r=e.container.topicService,i=e.container.noteService,a=n.serializeLog(t);if(a){let o=n.getLines(t),s=o.map(e=>e.text).join(`<br>`),c=r.serializeTopics(t),l=new Set(e.pinnedLineIds??[]),u=o.map((e,t)=>l.has(e.lineId)?t:-1).filter(e=>e>=0);Q(`persist_with_pins`,{pinnedLineIds:e.pinnedLineIds,pinnedIndices:u,lineCount:o.length}),await i.saveOpLog(t,a,s,c,u)}},[J[`I create a TEXT node with isPinned via API`]]:async e=>{e.testNodeTypeData={isPinned:!0};let t=await e.api.nodes.create(e.canvasId,{type:`TEXT`,x:-9999,y:-9999,content:`__bdd_pin_test__`,typeData:e.testNodeTypeData});e.testNodeId=t.id,Q(`pin_typedata_create`,{id:t.id,sentTypeData:e.testNodeTypeData,returnedTypeData:t.typeData})},[J[`I read the pinned TEXT node back via API`]]:async e=>{X(!!e.testNodeId,`No test node ID — create a TEXT node first`),e.readBackNode=await e.api.nodes.get(e.testNodeId),Q(`pin_typedata_readback`,{id:e.readBackNode.id,content:e.readBackNode.content,typeData:e.readBackNode.typeData});try{await e.api.nodes.delete(e.testNodeId)}catch{}},[Y[`the last line should be pinned`]]:e=>{let t=Z(e),n=e.facade.getLines(t);X(n.length>0,`No lines`);let r=n[n.length-1],i=e.pinnedLineIds??[];X(i.includes(r.lineId),`Line "${r.text}" (${r.lineId}) is not pinned. Pinned IDs: ${i.join(`, `)}`)},[Y[`the reloaded note should have pinned lines`]]:e=>{X(!!e.reloadedNote,`No reloaded note`),Q(`reloaded_pins`,{pinnedCount:e.reloadedNote.pinnedLineIndices.length,pinnedLineIndices:e.reloadedNote.pinnedLineIndices}),X(e.reloadedNote.pinnedLineIndices.length>0,`Reloaded note has 0 pinned lines — they were lost on reload`)},[Y[`the TEXT node should have isPinned preserved`]]:e=>{X(!!e.readBackNode,`No read-back node`);let t=e.readBackNode.typeData;Q(`pin_typedata_assertion`,{sent:e.testNodeTypeData,received:t}),X(t!=null,`typeData is ${t} — backend does NOT preserve typeData`),X(t.isPinned===!0,`typeData.isPinned is ${t?.isPinned}, expected true`)},[J[`I reload the facade from API`]]:async e=>{window.dispatchEvent(new Event(`ghichu:reload`)),await new Promise(e=>setTimeout(e,1e3)),e.pinnedLineIds=e.facade.getPinnedLineIds(),Q(`reload_facade`,{pinnedLineIds:e.pinnedLineIds})},[Y[`the editor should show a pinned banner`]]:async e=>{let t=null;for(let e=0;e<50&&(t=document.querySelector(`[data-test='ghichu-pinned-banner']`),!t);e++)await new Promise(e=>setTimeout(e,100));Q(`check_banner`,{bannerFound:!!t,bannerHTML:t?.innerHTML?.slice(0,200)??null,pinnedLineIds:e.pinnedLineIds}),X(!!t,`No pinned banner found in the DOM — [data-test='ghichu-pinned-banner'] is missing after 1s`)},[Y[`the pinned banner should contain {string}`]]:async(e,t)=>{let n=[];for(let e=0;e<50;e++){let e=document.querySelector(`[data-test='ghichu-pinned-banner']`);if(e){let r=e.querySelectorAll(`[data-test='ghichu-pinned-banner-item']`);if(n=Array.from(r).map(e=>e.textContent??``),n.some(e=>e.includes(t.string0)))break}await new Promise(e=>setTimeout(e,100))}Q(`check_banner_content`,{expected:t.string0,found:n}),X(n.some(e=>e.includes(t.string0)),`Pinned banner does not contain "${t.string0}". Items: ${n.join(`, `)}`)}},tn=new B;tn.register(`ghichu`,{features:[`Note Lifecycle`,`Note Messages`,`Topic Persistence`,`Pin Persistence`],createContext:()=>({facade:null}),stepDefinitions:en});var nn=Se({name:`ghichu`,tracePrefix:`ghichu`,container:q,getEventBus:e=>e.eventBus,facades:Ct,features:Qt,bdd:{features:[{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/topics.feature`,feature:`Topics`,description:`Lines in the editor can be marked as topics to organize content hierarchically. Topics are persistent annotations that survive text edits and undo/redo.`,scenarios:[{scenario:`A "Create Topic" option appears in the editor line menu`,tags:[`@added-CT-1`],line:9},{scenario:`Clicking "Create Topic" marks the line as a topic`,tags:[`@added-CT-1`],line:11},{scenario:`A topic line shows a visual indicator`,tags:[`@added-CT-1`],line:13},{scenario:`A topic line displays its text as the topic title`,tags:[`@added-CT-1`],line:15},{scenario:`Multiple lines can each be their own topic`,tags:[`@added-CT-1`],line:19},{scenario:`A topic persists when the line text is edited`,tags:[`@added-CT-1`],line:21},{scenario:`Deleting a topic line removes the topic`,tags:[`@added-CT-1`],line:23},{scenario:`Removing topic status from a line keeps the line text intact`,tags:[`@added-CT-1`],line:25},{scenario:`Undo and redo do not affect topic status`,tags:[`@added-CT-1`],line:27},{scenario:`Clicking a topic line highlights it`,tags:[`@added-CT-4`],line:31},{scenario:`Clicking a highlighted topic line unhighlights it`,tags:[`@added-CT-4`],line:33},{scenario:`Only one line can be highlighted at a time`,tags:[`@added-CT-4`],line:35},{scenario:`Messages sent while a topic is highlighted appear under that topic`,tags:[`@added-CT-4`],line:37},{scenario:`Messages sent under a topic are indented`,tags:[`@added-CT-4`],line:39},{scenario:`Messages sent with no topic highlighted appear at the end`,tags:[`@added-CT-4`],line:41},{scenario:`Messages sent with no topic highlighted are not indented`,tags:[`@added-CT-4`],line:43},{scenario:`A "View Topic" option appears in the menu for topic lines`,tags:[`@added-CT-4`],line:47},{scenario:`Clicking "View Topic" shows only that topic's children`,tags:[`@added-CT-4`],line:49},{scenario:`A breadcrumb bar shows the topic title with back and exit buttons`,tags:[`@added-CT-4`],line:51},{scenario:`Clicking back or exit returns to the full editor view`,tags:[`@added-CT-4`],line:53},{scenario:`A line under a topic can become a sub-topic`,tags:[`@implemented-NT-1`],line:57},{scenario:`Sub-topics are visually nested under their parent topic`,tags:[`@implemented-NT-1`],line:59},{scenario:`Messages sent while a nested topic is highlighted insert under that sub-topic`,tags:[`@implemented-NT-2`],line:61},{scenario:`Collapsing a topic hides all its descendants recursively`,tags:[`@implemented-NT-4`],line:65},{scenario:`Collapse strips appear on nested lines for each ancestor topic`,tags:[`@implemented-NT-5`],line:67},{scenario:`Clicking a collapse strip collapses the corresponding ancestor topic`,tags:[`@implemented-NT-5`],line:69},{scenario:`Double-clicking the left edge of a non-topic line turns it into a topic`,tags:[`@implemented-GU-7`],line:73},{scenario:`Double-clicking the left edge of a topic line removes its topic status`,tags:[`@implemented-GU-8`],line:75},{scenario:`Single-click on the left edge is delayed 200ms so a double-click can cancel it`,tags:[`@implemented-GU-8`],line:77},{scenario:`The left-edge hover shadow only appears on non-topic lines when not in edit sub-mode`,tags:[`@implemented-GU-8`],line:79},{scenario:`A "Move Up" option appears in the context menu for a message`,tags:[`@implemented-GK-1`],line:83},{scenario:`A "Move Down" option appears in the context menu for a message`,tags:[`@implemented-GK-1`],line:85},{scenario:`Moving a topic moves it together with all its children as a block`,tags:[`@updated-EL-3`],line:87},{scenario:`Move Up swaps the message with the previous sibling at the same nesting level`,tags:[`@updated-EL-3`],line:89},{scenario:`Move Down swaps the message with the next sibling at the same nesting level`,tags:[`@updated-EL-3`],line:91},{scenario:`"Move Up" is hidden when the message is the first sibling at its level`,tags:[`@implemented-GK-1`],line:93},{scenario:`"Move Down" is hidden when the message is the last sibling at its level`,tags:[`@implemented-GK-1`],line:95},{scenario:`A topic can be branched into a new editor view`,tags:[`@planned-CT-1`],line:99},{scenario:`A branch carries the context of its parent topic`,tags:[`@planned-CT-1`],line:101}],tags:[`@v4.3.0`,`@latest-EL-3`]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/topic-persistence.feature`,feature:`Topic Persistence`,description:`As a user I want topics to survive page reload So that my organizational structure is preserved`,scenarios:[{scenario:`typeData survives roundtrip on a TEXT node`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I create a TEXT node with typeData via API`,`I read the TEXT node back via API`],Then:[`the TEXT node should have typeData preserved`]},line:5},{scenario:`Create a topic and verify it exists in memory`,steps:{Given:[`a note facade`,`I have initialized the facade`,{text:`I append a message "Topic heading"`,template:`I append a message {string}`,params:{string0:`Topic heading`}}],When:[`I create a topic on the last line`],Then:[`the last line should be a topic`]},line:12},{scenario:`Persist and reload topic via typeData`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I trigger a persist`,`I wait for persist to complete`,`I reload the note from canvas API`],Then:[`the reloaded note should have topics`]},line:19}]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/text-editor.feature`,feature:`Text Editor`,description:`A two-column note-taking app with per-line timestamps and persistent storage.`,scenarios:[{scenario:`Each line shows its own timestamp in a gutter column`,tags:[`@added-ES-9`],line:8},{scenario:`Clicking a line makes it editable`,tags:[`@added-ES-9`],line:10},{scenario:`Editing a line updates only that line's timestamp`,tags:[`@added-ES-9`],line:12},{scenario:`Text submitted from the floating input appears as a new line`,tags:[`@added-FI-5`,`@updated-FI-7`],line:14},{scenario:`Saved lines and timestamps reappear after reloading the page`,tags:[`@added-ES-9`],line:16},{scenario:`An empty note starts with a blank editable line and autofocus`,tags:[`@added-US-2`],line:18},{scenario:`Tapping empty space below lines focuses the last line`,tags:[`@added-US-2`],line:20},{scenario:`A default note is created on first visit`,tags:[`@added-TP-7`],line:24},{scenario:`Creating a new note opens an empty editor`,tags:[`@added-TP-7`],line:26},{scenario:`Deleting a note switches to the next available note`,tags:[`@added-TP-7`],line:28},{scenario:`Pressing Ctrl+Z undoes the last change`,tags:[`@added-ES-13`],line:32},{scenario:`Pressing Ctrl+Shift+Z redoes the undone change`,tags:[`@added-ES-13`],line:34},{scenario:`Undo and redo work while typing in a line`,tags:[`@added-ES-13`],line:36},{scenario:`Pressing Ctrl+Shift+N creates a new note`,tags:[`@added-TP-3`],line:40},{scenario:`Pressing Ctrl+Shift+Backspace deletes the current note`,tags:[`@added-TP-3`],line:42},{scenario:`Lines default to horizontal scroll (no word wrap)`,tags:[`@added-EL-1`],line:46},{scenario:`Word wrap can be toggled globally via the settings sheet`,tags:[`@added-EL-1`],line:48},{scenario:`A config button in the floating input opens the settings`,tags:[`@added-EL-1`],line:50},{scenario:`Timestamps are hidden by default and can be toggled on`,tags:[`@added-US-1`],line:52},{scenario:`Card borders are hidden by default and can be toggled on`,tags:[`@added-US-1`],line:54},{scenario:`Font style can be toggled between sans-serif and monospace`,tags:[`@added-US-2`],line:56},{scenario:`The editor defaults to edit mode`,tags:[`@added-US-2`],line:58},{scenario:`Long-pressing a line opens a context menu`,tags:[`@added-CM-1`],line:62},{scenario:`The context menu includes Copy, Create Topic, and Delete options`,tags:[`@added-CM-3`],line:64},{scenario:`Tapping to close the context menu does not highlight the line`,tags:[`@added-CM-2`],line:66},{scenario:`Hovering a line shows a more options button in the top right`,tags:[`@added-GU-2`],line:68},{scenario:`Clicking the more options button opens the context menu`,tags:[`@added-GU-2`],line:70},{scenario:`A chevron icon appears left of multiline content`,tags:[`@added-GU-2`],line:74},{scenario:`Clicking the chevron collapses the line to three rows`,tags:[`@added-GU-2`],line:76},{scenario:`Clicking the chevron again expands the line back to full height`,tags:[`@added-GU-2`],line:78},{scenario:`The context menu includes a Collapse or Expand option`,tags:[`@added-GU-2`],line:80},{scenario:`Typing "/" in the floating input shows a slash command menu`,tags:[`@added-SC-1`],line:84},{scenario:`The /ollama command sends a prompt and appends the AI response`,tags:[`@added-SC-1`],line:86},{scenario:`The /summarize command summarizes all note content via Ollama`,tags:[`@added-SC-1`],line:88},{scenario:`Pressing Enter with a slash command executes it instead of appending text`,tags:[`@added-SC-1`],line:90},{scenario:`Left and right panels scroll independently`,tags:[`@added-TP-1`],line:94},{scenario:`Both panels fill the full page height`,tags:[`@added-TP-1`],line:96},{scenario:`Card borders and shadow are optional via settings`,tags:[`@added-GL-2`,`@updated-US-1`],line:98},{scenario:`Timestamps are optional and appear below the card when enabled`,tags:[`@added-GL-5`,`@updated-US-1`],line:100}],tags:[`@v2.8.0`,`@latest-SC-1`]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/settings.feature`,feature:`Settings`,description:`User preferences for the editor are persisted via the SettingsService and exposed through toggle functions in the settings sheet.`,scenarios:[{scenario:`The display mode can be toggled between "scroll" and "wrap"`,tags:[`@added-FA-1`],line:9},{scenario:`The display mode persists across page reloads`,tags:[`@added-FA-1`],line:11},{scenario:`The timestamp format can be toggled between "relative" and "absolute"`,tags:[`@added-FA-1`],line:15},{scenario:`The timestamp format persists across page reloads`,tags:[`@added-FA-1`],line:17},{scenario:`The editor mode can be toggled between "edit" and "view"`,tags:[`@added-FA-1`],line:21},{scenario:`The editor mode persists across page reloads`,tags:[`@added-FA-1`],line:23},{scenario:`Timestamps on editor lines can be toggled on and off`,tags:[`@added-FA-1`],line:27},{scenario:`The show timestamps setting persists across page reloads`,tags:[`@added-FA-1`],line:29},{scenario:`Card borders on editor lines can be toggled on and off`,tags:[`@added-FA-1`],line:33},{scenario:`The card borders setting persists across page reloads`,tags:[`@added-FA-1`],line:35},{scenario:`The font style can be toggled between "sans" and "mono"`,tags:[`@added-FA-1`],line:39},{scenario:`The font style persists across page reloads`,tags:[`@added-FA-1`],line:41},{scenario:`Markdown preview can be toggled on and off`,tags:[`@added-FA-1`],line:45},{scenario:`The markdown preview setting persists across page reloads`,tags:[`@added-FA-1`],line:47},{scenario:`The left panel collapsed state persists across page reloads`,tags:[`@added-FA-1`],line:51},{scenario:`The scroll position is saved with debounce as the user scrolls`,tags:[`@added-FA-1`],line:55},{scenario:`Toggle logic lives in SettingsService, not in the React hook`,tags:[`@added-FA-1`],line:59},{scenario:`The hook is a thin consumer that delegates to service toggle methods`,tags:[`@added-FA-1`],line:61}],tags:[`@v1.0.0`,`@latest-FA-1`]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/self-verifying.feature`,feature:`Self-Verifying Tests`,description:`The E2E panel provides in-browser self-tests that exercise facade lifecycle methods against real storage without mocks or external test runners.`,scenarios:[{scenario:`An "E2E" tab appears in the left panel tab bar`,tags:[`@added-SV-2`],line:9},{scenario:`Clicking the E2E tab shows the self-test panel`,tags:[`@added-SV-2`],line:11},{scenario:`The E2E tab is URL-synced via ?tab=e2e`,tags:[`@added-SV-2`],line:13},{scenario:`The panel lists all registered self-test cases by name`,tags:[`@added-SV-2`],line:17},{scenario:`Each test shows a status icon (idle, running, passed, failed)`,tags:[`@added-SV-2`],line:19},{scenario:`Each test has a play button to run it individually`,tags:[`@added-SV-2`],line:21},{scenario:`A "Run All" button runs every test sequentially`,tags:[`@added-SV-2`],line:25},{scenario:`All tests show "running" status while the suite executes`,tags:[`@added-SV-2`],line:27},{scenario:`A summary bar shows pass/fail counts after the suite completes`,tags:[`@added-SV-2`],line:29},{scenario:`The summary bar is green when all tests pass`,tags:[`@added-SV-2`],line:31},{scenario:`The summary bar is red when any test fails`,tags:[`@added-SV-2`],line:33},{scenario:`Clicking a test's play button runs only that test`,tags:[`@added-SV-2`],line:37},{scenario:`The test shows "running" status while executing`,tags:[`@added-SV-2`],line:39},{scenario:`The test shows "passed" or "failed" when complete`,tags:[`@added-SV-2`],line:41},{scenario:`A passing test shows a green check icon`,tags:[`@added-SV-2`],line:45},{scenario:`A failing test shows a red X icon and an error message`,tags:[`@added-SV-2`],line:47},{scenario:`Test duration is shown in the title tooltip on hover`,tags:[`@added-SV-2`],line:49},{scenario:`"initialize_loads_notes" verifies facade.initialize() returns notes and lines`,tags:[`@added-SV-2`],line:53},{scenario:`"append_and_read_back" writes a marker line, reads it back, and cleans up`,tags:[`@added-SV-2`],line:55},{scenario:`"select_and_init" selects a different note and verifies text editing init`,tags:[`@added-SV-2`],line:57},{scenario:`"delete_and_select_next" creates a temp note, deletes it, verifies next selection`,tags:[`@added-SV-2`],line:59},{scenario:`Each test logs a timestamp marker before execution to the ghichu-selftest scope`,tags:[`@added-SV-3`],line:63},{scenario:`Test results are logged to the ghichu-selftest Vite scoped log`,tags:[`@added-SV-2`],line:65}],tags:[`@v1.0.0`,`@latest-SV-2`]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/pin-persistence.feature`,feature:`Pin Persistence`,description:`As a user I want pinned messages to survive page reload So that my important messages stay pinned`,scenarios:[{scenario:`Pin a line and verify it exists in memory`,steps:{Given:[`a note facade`,`I have initialized the facade`,{text:`I append a message "Important note"`,template:`I append a message {string}`,params:{string0:`Important note`}}],When:[`I pin the last line`],Then:[`the last line should be pinned`]},line:5},{scenario:`Persist and reload pinned line via typeData`,steps:{Given:[`a note facade`,`I have initialized the facade`,{text:`I append a message "Pinned note"`,template:`I append a message {string}`,params:{string0:`Pinned note`}}],When:[`I pin the last line`,`I trigger a persist with pins`,`I wait for persist to complete`,`I reload the note from canvas API`],Then:[`the reloaded note should have pinned lines`]},line:12},{scenario:`Pin shows in editor after persist and reload`,steps:{Given:[`a note facade`,`I have initialized the facade`,{text:`I append a message "Editor pin test"`,template:`I append a message {string}`,params:{string0:`Editor pin test`}}],When:[`I pin the last line`,`I trigger a persist with pins`,`I wait for persist to complete`,`I reload the facade from API`],Then:[`the editor should show a pinned banner`,{text:`the pinned banner should contain "Editor pin test"`,template:`the pinned banner should contain {string}`,params:{string0:`Editor pin test`}}]},line:22},{scenario:`isPinned survives roundtrip on a TEXT node`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I create a TEXT node with isPinned via API`,`I read the pinned TEXT node back via API`],Then:[`the TEXT node should have isPinned preserved`]},line:33}]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/note-messages.feature`,feature:`Note Messages`,description:`As a user I want to add and remove messages in a note So that I can build content incrementally`,scenarios:[{scenario:`Append a message to a note`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[{text:`I append a message "hello world"`,template:`I append a message {string}`,params:{string0:`hello world`}}],Then:[{text:`the last line should be "hello world"`,template:`the last line should be {string}`,params:{string0:`hello world`}},{text:`the line count should have increased by 1`,template:`the line count should have increased by {int}`,params:{int0:1}}]},line:5},{scenario:`Append and read back a message`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I append a unique marker message`],Then:[`the marker message should be found in the lines`]},line:12},{scenario:`Delete the latest message`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I delete the last line`],Then:[{text:`the line count should have decreased by 1`,template:`the line count should have decreased by {int}`,params:{int0:1}}]},line:18},{scenario:`List all messages`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I list all messages`],Then:[`I should receive an array of lines`]},line:24}]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/note-lifecycle.feature`,feature:`Note Lifecycle`,description:`As a user I want to create, load, and manage notes So that I can organize my thoughts`,scenarios:[{scenario:`Initialize loads notes from canvas`,steps:{Given:[`a note facade`],When:[`I initialize the facade`],Then:[`the result should contain notes`,`the result should have an active note`]},line:5},{scenario:`Initialize creates a default note on empty canvas`,steps:{Given:[`a note facade`],When:[`I initialize the facade`],Then:[{text:`the result should contain at least 1 note`,template:`the result should contain at least {int} note`,params:{int0:1}}]},line:11},{scenario:`Select and initialize a note`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I select the active note`],Then:[`the selected note should have lines`]},line:16},{scenario:`Delete note and select next`,steps:{Given:[`a note facade`,`I have initialized the facade`],When:[`I create a temporary note`,`I delete the temporary note`],Then:[`the temporary note should not be in the remaining list`,`there should be an active note after deletion`]},line:22}]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/left-panel.feature`,feature:`Left Panel`,description:`The left panel provides tabbed navigation for feature specs, operation logs, project tree, and self-tests, with undo/redo controls and URL-synced tab state.`,scenarios:[{scenario:`The left panel shows a "Features" tab`,tags:[`@added-GL-1`],line:9},{scenario:`The left panel shows a "Logs" tab`,tags:[`@added-GL-1`],line:11},{scenario:`The left panel shows a "Projects" tab`,tags:[`@added-GL-5`],line:13},{scenario:`The left panel shows an "E2E" tab`,tags:[`@added-SV-2`],line:15},{scenario:`The active tab is reflected in the URL as a ?tab= search param`,tags:[`@added-GL-2`],line:17},{scenario:`Navigating to ?tab=logs opens the Logs tab directly`,tags:[`@added-GL-2`],line:19},{scenario:`Navigating to ?tab=projects opens the Projects tab directly`,tags:[`@added-GL-5`],line:21},{scenario:`Navigating to ?tab=e2e opens the E2E tab directly`,tags:[`@added-SV-2`],line:23},{scenario:`The default tab is "Features" when no ?tab= param is present`,tags:[`@added-GL-2`],line:25},{scenario:`Switching tabs updates the URL without a full page reload`,tags:[`@added-GL-2`],line:27},{scenario:`The left panel can be collapsed to a narrow icon strip`,tags:[`@added-GL-5`],line:31},{scenario:`Collapsed panel shows tab icons that expand and switch tab on click`,tags:[`@added-GL-5`],line:33},{scenario:`The collapsed state persists via settings`,tags:[`@added-GL-5`],line:35},{scenario:`The Logs tab shows all operations from the active note`,tags:[`@added-GL-1`],line:39},{scenario:`Each log entry displays a timestamp, operation type, and text preview`,tags:[`@added-GL-1`],line:41},{scenario:`Insert operations are shown in green`,tags:[`@added-GL-1`],line:43},{scenario:`Delete operations are shown in red`,tags:[`@added-GL-1`],line:45},{scenario:`Update operations are shown in yellow`,tags:[`@added-GL-1`],line:47},{scenario:`Undo events are shown in blue`,tags:[`@added-GL-1`],line:49},{scenario:`Redo events are shown in purple`,tags:[`@added-GL-1`],line:51},{scenario:`Log entries are displayed in reverse chronological order (newest first)`,tags:[`@added-GL-1`],line:53},{scenario:`An empty state message is shown when there are no operations`,tags:[`@added-GL-1`],line:55},{scenario:`The Projects tab shows a tree of projects, workspaces, and canvases`,tags:[`@added-GL-5`],line:59},{scenario:`Selecting a canvas switches the active note storage to that canvas`,tags:[`@added-GL-5`],line:61},{scenario:`The E2E tab shows the self-test panel with run-all and run-single buttons`,tags:[`@added-SV-2`],line:65},{scenario:`Undo and redo buttons are visible in the tab bar`,tags:[`@added-GU-1`],line:69},{scenario:`The undo button is disabled when there is nothing to undo`,tags:[`@added-GU-1`],line:71},{scenario:`The redo button is disabled when there is nothing to redo`,tags:[`@added-GU-1`],line:73},{scenario:`Clicking undo reverses the last editor operation`,tags:[`@added-GU-1`],line:75},{scenario:`Clicking redo reapplies the last undone operation`,tags:[`@added-GU-1`],line:77},{scenario:`The settings gear icon only appears when the Features tab is active`,tags:[`@added-GL-1`],line:81}],tags:[`@v2.0.0`,`@latest-SV-2`]},{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-dir/watcher-v1/src/apps/ghichu/__specifications__/features/keyboard-event-service.feature`,feature:`Keyboard Event Service`,description:`Provides scoped keyboard shortcuts for the Ghichu app.`,scenarios:[{scenario:`Pressing a registered shortcut triggers its action`,tags:[`@added-TP-3`],line:8},{scenario:`Pressing an unregistered key does nothing`,tags:[`@added-TP-3`],line:10},{scenario:`Shortcuts with modifier keys only trigger when all modifiers are held`,tags:[`@added-TP-3`],line:12},{scenario:`Shortcuts can be scoped to only fire in specific contexts`,tags:[`@added-KS-1`],line:16},{scenario:`Editor shortcuts do not interfere while typing in the floating input`,tags:[`@added-TP-3`,`@updated-KS-1`],line:18},{scenario:`Undo and redo work while typing in a line`,tags:[`@added-ES-13`],line:20},{scenario:`Pressing Ctrl+/ focuses the floating input from anywhere`,tags:[`@added-KS-1`],line:22},{scenario:`Pressing Escape blurs the floating input`,tags:[`@added-KS-1`],line:24},{scenario:`Pressing Enter in the floating input invokes the command registry instead of calling appendContent directly`,tags:[`@added-CS-1`],line:28},{scenario:`The default append-content command is registered by the orchestrator`,tags:[`@added-CS-1`],line:30},{scenario:`Shortcuts only work within the Ghichu app`,tags:[`@added-TP-3`],line:34},{scenario:`Shortcuts stop working after leaving the page`,tags:[`@added-TP-3`],line:36}],tags:[`@v2.1.0`,`@latest-CS-1`]}],registry:tn}}),rn=t(i(),1),an=V(void 0,we()??`default-user`);function on(){let[e,t]=(0,W.useState)([]),[n,r]=(0,W.useState)(null),[i,a]=(0,W.useState)(!0),[o,s]=(0,W.useState)([]),[c,l]=(0,W.useState)(!1),[u,d]=(0,W.useState)(!1),[f,p]=(0,W.useState)([]),[m,h]=(0,W.useState)(new Set),[g,_]=(0,W.useState)(new Map),[ee,v]=(0,W.useState)(null),[y,b]=(0,W.useState)([]),[x,S]=(0,W.useState)(new Map),C=q.noteFacade,w=(0,W.useCallback)(e=>{s(C.getLines(e)),l(C.canUndo(e)),d(C.canRedo(e)),p(C.getEventLog(e)),h(C.getTopicLineIds(e)),_(C.getTopicParents(e)),b(C.getPinnedLineIds()),S(C.getHighlightsByLineId())},[C]),te=(0,W.useCallback)(async()=>{a(!0);try{let{notes:e,active:n}=await C.initialize();t(e),r(n),b(C.getPinnedLineIds()),S(C.getHighlightsByLineId()),w(n.id)}catch(e){F.clientLogsApiClient.sendLogs(`4_load_notes_error`,{error:String(e)},`ghichu-persist-debug.log`)}a(!1)},[C,w]);(0,W.useEffect)(()=>{he().then(()=>{let e=q.resolveCanvasId();e&&q.setCanvasId(e),te()})},[]);let ne=(0,W.useCallback)(async e=>{let t=await C.selectAndInit(e);t&&(r(t),b(C.getPinnedLineIds()),S(C.getHighlightsByLineId()),w(t.id))},[C,w]),re=(0,W.useCallback)(async e=>{let n=await C.createNote(e);return t(e=>[n,...e]),r(n),w(n.id),n},[C,w]),ie=(0,W.useCallback)(async(e,i)=>{let a=await C.renameNote(e,i);t(t=>t.map(t=>t.id===e?a:t)),n?.id===e&&r(a),L.getState().projectCanvas.updateMetadata(e,{name:i}),await an.canvases.update(e,i)},[C,n]),ae=(0,W.useCallback)((e,t,r)=>{n&&(C.appendContent(n.id,e,t,r),w(n.id))},[n,C,w]),oe=(0,W.useCallback)(e=>{n&&(C.applyEdit(n.id,e),w(n.id))},[n,C,w]),se=(0,W.useCallback)((e,t,r)=>{n&&(C.reorderLines(n.id,e,t,r),w(n.id))},[n,C,w]),T=(0,W.useCallback)((e,t)=>{if(!n)return;let r=C.getLines(n.id).map((n,r)=>r===e?t:n.text);C.applyEdit(n.id,r),w(n.id)},[n,C,w]),E=(0,W.useCallback)(()=>{n&&(C.undo(n.id),w(n.id))},[n,C,w]),ce=(0,W.useCallback)(()=>{n&&(C.redo(n.id),w(n.id))},[n,C,w]),D=(0,W.useCallback)((e,t,r)=>{n&&(C.createTopic(n.id,e,t,r??null),w(n.id))},[n,C,w]),O=(0,W.useCallback)(e=>v(e),[]),k=(0,W.useCallback)(()=>v(null),[]),A=(0,W.useCallback)(e=>{n&&(C.removeTopic(n.id,e),w(n.id))},[n,C,w]),j=(0,W.useCallback)(async e=>{let{remaining:n,nextActive:i}=await C.deleteAndSelectNext(e);t(n),r(i),i&&w(i.id)},[C,w]),M=(0,W.useCallback)(()=>{n&&w(n.id)},[n,w]),N=(0,W.useCallback)(e=>{C.setPinnedLineIds(e,n?.id)},[C,n]),le=(0,W.useCallback)((e,t)=>{C.setLineHighlights(e,t,n?.id)},[C,n]);return(0,W.useEffect)(()=>()=>C.flushPendingSave(),[C]),{notes:e,activeNote:n,loadNotes:te,lines:o,operations:f,canUndo:c,canRedo:u,isLoading:i,selectNote:ne,createNote:re,renameNote:ie,appendContent:ae,applyEdit:oe,reorderLines:se,updateLine:T,undo:E,redo:ce,deleteNote:j,topicLineIds:m,topicParents:g,focusedTopicLineId:ee,focusTopic:O,clearFocus:k,createTopic:D,removeTopic:A,refreshState:M,initialPinnedLineIds:y,syncPinnedLineIds:N,initialHighlightsByLineId:x,syncHighlights:le}}function sn({onNewNote:e,onDeleteNote:t,onUndo:n,onRedo:r,onFloatingSubmit:i,onFloatingEscape:a,onFocusFloatingInput:o,onGlobalEscape:s,isTouchDevice:c}){return(0,W.useMemo)(()=>[{combo:{key:`n`,ctrlKey:!0,shiftKey:!0},handler:e,scope:[`global`,`editor`,`floating-input`]},{combo:{key:`Backspace`,ctrlKey:!0,shiftKey:!0},handler:t,scope:[`global`,`editor`]},{combo:{key:`z`,ctrlKey:!0},handler:n,scope:[`global`,`editor`]},{combo:{key:`z`,ctrlKey:!0,shiftKey:!0},handler:r,scope:[`global`,`editor`]},{combo:{key:`/`,ctrlKey:!0},handler:o,scope:[`global`,`editor`]},{combo:{key:`Escape`},handler:s,scope:[`global`,`editor`]},{combo:c?{key:`Enter`}:{key:`Enter`,ctrlKey:!0},handler:i,scope:`floating-input`},{combo:{key:`Escape`},handler:a,scope:`floating-input`}],[e,t,n,r,i,a,o,s,c])}var cn=`data-keyboard-scope`;function ln(){let e=document.activeElement;if(!e)return`global`;let t=e.closest(`[${cn}]`);if(t){let e=t.getAttribute(cn);if(e)return e}return e.contentEditable===`true`||[`INPUT`,`TEXTAREA`].includes(e.nodeName)?`editor`:`global`}function un(e,t){let n=e.scope;return n?(Array.isArray(n)?n:[n]).includes(t):t===`global`}function dn(e){let t=[];return e.ctrlKey&&t.push(`ctrl`),e.metaKey&&t.push(`meta`),e.shiftKey&&t.push(`shift`),e.altKey&&t.push(`alt`),`${t.join(`+`)}-${e.key.toLowerCase()}`}function fn(e){return dn({key:e.key,ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey,altKey:e.altKey})}var pn=class{bindings=new Map;target=null;boundHandler=null;attach(e=document){this.target&&this.detach(),this.target=e,this.boundHandler=e=>this.handleKeyDown(e),this.target.addEventListener(`keydown`,this.boundHandler)}detach(){this.target&&this.boundHandler&&this.target.removeEventListener(`keydown`,this.boundHandler),this.target=null,this.boundHandler=null}register(e){let t=dn(e.combo),n=this.bindings.get(t)??[];return n.push(e),this.bindings.set(t,n),()=>{let n=this.bindings.get(t);if(n){let r=n.indexOf(e);r!==-1&&n.splice(r,1),n.length===0&&this.bindings.delete(t)}}}registerMany(e){let t=e.map(e=>this.register(e));return()=>t.forEach(e=>e())}unregisterAll(){this.bindings.clear()}destroy(){this.unregisterAll(),this.detach()}handleKeyDown(e){let t=fn(e),n=this.bindings.get(t);if(!n||n.length===0)return;let r=ln(),i=n.find(e=>un(e,r));i&&(i.preventDefault!==!1&&e.preventDefault(),i.handler(e))}};function mn(e,t){let n=(0,W.useRef)(null);return(0,W.useEffect)(()=>(n.current=new pn,()=>{n.current?.destroy(),n.current=null}),[]),(0,W.useEffect)(()=>{let t=n.current,r=e.current;if(!(!t||!r))return t.attach(r),()=>t.detach()},[e]),(0,W.useEffect)(()=>{let e=n.current;if(e)return e.registerMany(t)},[t]),n}function hn(e,t,n){let r=e=>t.has(e.lineId)&&n?n.get(e.lineId)??e.parentLineId:e.parentLineId,i=new Map,a=t=>{if(i.has(t))return i.get(t);let n=e.find(e=>e.lineId===t);if(!n)return i.set(t,0),0;let o=r(n);if(!o)return i.set(t,0),0;let s=a(o)+1;return i.set(t,s),s};return e.map((e,n)=>{let i=t.has(e.lineId);return{line:e,index:n,ownerTopicLineId:r(e),isTopic:i,depth:a(e.lineId)}})}function gn(e,t){return e.filter(e=>e.ownerTopicLineId===t)}function _n(e,t){let n=[],r=gn(e,t);for(let t of r)n.push(t),t.isTopic&&n.push(..._n(e,t.line.lineId));return n}function vn(e,t){let n=_n(e,t);if(n.length>0)return n[n.length-1].index+1;let r=e.findIndex(e=>e.isTopic&&e.line.lineId===t);return r>=0?r+1:e.length}var yn=new I;function bn(e){return[{id:`ollama`,name:`Ollama`,trigger:`ollama`,description:`Send a prompt to Ollama and append the response`,onSelect:t=>{let n=t.query.trim();n&&xn(n,e)}},{id:`summarize`,name:`Summarize`,trigger:`summarize`,description:`Summarize content (topic if highlighted, otherwise all)`,onSelect:()=>{let t=e.getFocusedTopicText(),n=e.getFocusedTopicTitle(),r=t??e.getAllText();r.trim()&&xn(n?`Summarize the topic "${n}":\n\n${r}`:`Summarize the following notes concisely:\n\n${r}`,e)}},{id:`agent-expand`,name:`Expand`,trigger:`expand`,description:`Expand on the highlighted topic or last message with more detail`,onSelect:()=>{let t=e.getFocusedTopicText(),n=e.getFocusedTopicTitle();if(t&&n){xn(`Expand on the topic "${n}" with more detail and ideas. Here is the existing content:\n\n${t}`,e);return}let r=e.getLines(),i=r[r.length-1]?.text??``;i.trim()&&xn(`Expand on this with more detail:\n\n${i}`,e)}},{id:`agent-rewrite`,name:`Rewrite`,trigger:`rewrite`,description:`Rewrite the highlighted topic or last message more clearly`,onSelect:t=>{let n=t.query.trim(),r=e.getFocusedTopicText(),i=e.getFocusedTopicTitle();if(r&&i){xn(n?`Rewrite the topic "${i}" with this instruction: ${n}\n\nContent:\n${r}`:`Rewrite the topic "${i}" more clearly and concisely:\n\n${r}`,e);return}let a=e.getLines(),o=a[a.length-1]?.text??``;o.trim()&&xn(n?`Rewrite this with the instruction: ${n}\n\n${o}`:`Rewrite this more clearly and concisely:\n\n${o}`,e)}},{id:`agent-ask`,name:`Ask`,trigger:`ask`,description:`Ask a question about your notes or the highlighted topic`,onSelect:t=>{let n=t.query.trim();if(!n)return;let r=e.getFocusedTopicText(),i=e.getFocusedTopicTitle(),a=r&&i?`Topic "${i}":\n${r}`:e.getAllText();a.trim()&&xn(`Given these notes:\n\n${a}\n\nAnswer this question: ${n}`,e)}},{id:`model`,name:`Model`,trigger:`model`,description:`Switch Ollama model (current: ${yn.getSelectedModel()??yn.getDefaultModel()})`,onSelect:t=>{let n=t.query.trim();if(!n){let t=yn.getSelectedModel()??yn.getDefaultModel();e.appendContent(`Current model: ${t}. Available: ${me.join(`, `)}`);return}let r=me.find(e=>e.toLowerCase().startsWith(n.toLowerCase()));r?(yn.saveSelectedModel(r),e.appendContent(`Model switched to: ${r}`)):e.appendContent(`Unknown model "${n}". Available: ${me.join(`, `)}`)}}]}async function xn(e,t){t.appendContent(`...`);let n=yn.getSelectedModel()??yn.getDefaultModel(),r=new pe({baseUrl:yn.getBaseUrl(),defaultModel:n}),i=[{role:`user`,content:e}],a=``;try{if(await r.chat(i,n,{stream:!0,onStreamChunk:e=>{a+=e;let n=t.getLines().length-1;n>=0&&t.updateLine(n,a)}}),!a){let e=t.getLines();t.updateLine(e.length-1,`No response`)}}catch(e){t.appendContent(`Error: ${e instanceof Error?e.message:`Unknown error`}`)}}function Sn(e){let t=(0,W.useRef)(null),n=(0,W.useRef)(null),{notes:r,activeNote:i,loadNotes:a,lines:o,operations:s,canUndo:c,canRedo:l,isLoading:u,appendContent:d,applyEdit:f,reorderLines:p,updateLine:m,undo:h,redo:g,createNote:_,renameNote:ee,selectNote:v,deleteNote:y,topicLineIds:b,topicParents:x,focusedTopicLineId:S,focusTopic:C,clearFocus:w,createTopic:te,removeTopic:ne,refreshState:re,initialPinnedLineIds:ie,syncPinnedLineIds:ae,initialHighlightsByLineId:oe,syncHighlights:se}=on(),T=(0,W.useMemo)(()=>hn(o,b,x),[o,b,x]),E=(0,W.useMemo)(()=>bn({appendContent:d,updateLine:m,getLines:()=>o,getFocusedTopicText:()=>{if(!S)return null;let e=gn(T,S);return e.length===0?null:e.map(e=>e.line.text).join(`
`)},getFocusedTopicTitle:()=>S?o.find(e=>e.lineId===S)?.text??null:null,getAllText:()=>o.map(e=>e.text).join(`
`)}),[d,m,o,S,T]),{isOpen:ce,filteredCommands:D,selectedIndex:O,handleKeyDown:k,handleChange:A,selectCommand:M,close:N,menuPosition:le}=_e({commands:E,inputRef:t});(0,W.useEffect)(()=>(q.commandRegistry.register({id:Fe,scope:Pe,execute:e=>{S?d(e,vn(T,S),S):d(e)}}),()=>{q.commandRegistry.unregister(Fe)}),[d,S,T]);let ue=(0,W.useCallback)(()=>{_()},[_]),de=(0,W.useCallback)(()=>{i&&y(i.id)},[i,y]),P=(0,W.useCallback)(()=>{let e=t.current?.value.trim();if(!e)return;if(ce&&D.length>0){M(D[O]),t.current&&(t.current.value=``,t.current.style.height=`auto`);return}let r=q.slashCommandResolver.resolve(e,E);if(r){q.slashCommandResolver.execute(r,e),t.current&&(t.current.value=``,t.current.style.height=`auto`,t.current.focus());return}q.commandRegistry.execute(Pe,e),t.current&&(t.current.value=``,t.current.style.height=`auto`,t.current.focus()),requestAnimationFrame(()=>{let e=n.current;e&&e.scrollTo({top:e.scrollHeight,behavior:`smooth`})})},[ce,D,O,M,E]),fe=(0,W.useCallback)(()=>{t.current?.blur(),e.current?.focus()},[e]),F=(0,W.useCallback)(()=>{t.current?.focus()},[]),I=(0,W.useRef)(0);return mn(e,sn({onNewNote:ue,onDeleteNote:de,onUndo:h,onRedo:g,onFloatingSubmit:P,onFloatingEscape:fe,onFocusFloatingInput:F,onGlobalEscape:(0,W.useCallback)(()=>{let e=Date.now();e-I.current<=300?(t.current?.focus(),I.current=0):I.current=e},[]),isTouchDevice:j()})),{floatingInputRef:t,editorScrollRef:n,handleFloatingSubmit:P,notes:r,activeNote:i,loadNotes:a,selectNote:v,createNote:_,renameNote:ee,lines:o,groupedLines:T,operations:s,canUndo:c,canRedo:l,isLoading:u,appendContent:d,applyEdit:f,reorderLines:p,undo:h,redo:g,topicLineIds:b,topicParents:x,focusedTopicLineId:S,focusTopic:C,clearFocus:w,createTopic:te,removeTopic:ne,refreshState:re,initialPinnedLineIds:ie,syncPinnedLineIds:ae,initialHighlightsByLineId:oe,syncHighlights:se,slashMenu:{isOpen:ce,filteredCommands:D,selectedIndex:O,handleKeyDown:k,handleChange:A,menuPosition:le,selectCommand:M,close:N}}}function Cn(){let e=q.settingsService,[t,n]=(0,W.useState)(()=>e.getAll()),r=(0,W.useCallback)(()=>n(e.toggleDisplayMode()),[e]),i=(0,W.useCallback)(()=>n(e.toggleTimestampFormat()),[e]),a=(0,W.useCallback)(()=>n(e.toggleGhichuMode()),[e]),o=(0,W.useCallback)(()=>n(e.toggleEditSubMode()),[e]),s=(0,W.useCallback)(()=>n(e.toggleShowTimestamps()),[e]),c=(0,W.useCallback)(()=>n(e.toggleShowCardBorders()),[e]),l=(0,W.useCallback)(()=>n(e.toggleFontStyle()),[e]),u=(0,W.useCallback)(()=>n(e.toggleMarkdownPreview()),[e]),d=(0,W.useCallback)(()=>n(e.toggleDisableTextSelection()),[e]),f=(0,W.useCallback)(()=>n(e.toggleLineActionsMode()),[e]),p=(0,W.useCallback)(t=>n(e.setEditSubMode(t)),[e]),m=(0,W.useRef)(null),h=(0,W.useCallback)(t=>{m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{e.update(`scrollPosition`,t)},400)},[e]),g=(0,W.useRef)(null),_=(0,W.useCallback)(t=>{g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{e.update(`leftPanelRatio`,t)},400)},[e]),ee=(0,W.useCallback)(()=>n(e.toggleLeftPanelCollapsed()),[e]);return{...t,toggleDisplayMode:r,toggleTimestampFormat:i,toggleGhichuMode:a,toggleEditSubMode:o,toggleShowTimestamps:s,toggleShowCardBorders:c,toggleFontStyle:l,toggleMarkdownPreview:u,toggleDisableTextSelection:d,toggleLineActionsMode:f,setEditSubModeTo:p,setScrollPosition:h,setLeftPanelRatio:_,toggleLeftPanelCollapsed:ee}}var $=r(),wn=`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-muted active:bg-muted/70 transition-colors`,Tn=[{label:`Orange`,value:`rgba(255, 165, 0, 0.4)`},{label:`Yellow`,value:`rgba(255, 255, 0, 0.4)`},{label:`Green`,value:`rgba(0, 200, 100, 0.3)`},{label:`Blue`,value:`rgba(100, 149, 237, 0.35)`},{label:`Pink`,value:`rgba(255, 105, 180, 0.35)`}];function En({isHighlightMode:e,highlightColor:t,onToggle:n,onSetColor:r,onClear:i,onExtract:a}){let[o,s]=(0,W.useState)(!1);return(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-line-highlight-split`,children:[(0,$.jsxs)(`div`,{className:`relative flex items-center h-8 gap-0`,children:[(0,$.jsxs)(`button`,{"data-test":`ghichu-editor-line-toggle-highlight-mode`,onClick:n,className:`flex items-center flex-1 h-full pl-3 pr-1 gap-2 text-sm hover:bg-muted active:bg-muted/70 rounded-sm transition-colors`,children:[(0,$.jsx)(h,{className:`h-3.5 w-3.5`}),e?`Highlight: On`:`Highlight: Off`]}),(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-highlight-expand`,onClick:()=>s(!o),className:`h-full w-6 flex items-center justify-center hover:bg-muted active:bg-muted/70 rounded-sm transition-colors`,children:(0,$.jsx)(ae,{className:`h-3.5 w-3.5 transition-transform ${o?`rotate-90`:``}`})})]}),o&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-line-highlight-colors`,className:`flex items-center gap-1 px-3 py-1.5`,children:[Tn.map(e=>(0,$.jsx)(`button`,{"data-test":`ghichu-highlight-color-${e.label.toLowerCase()}`,onClick:()=>r(e.value),title:e.label,className:`h-7 w-7 rounded-full border transition-all ${t===e.value?`ring-2 ring-primary ring-offset-1`:`border-border hover:scale-110`}`,style:{backgroundColor:e.value}},e.value)),i&&(0,$.jsx)(`button`,{"data-test":`ghichu-highlight-clear`,onClick:i,title:`Clear highlights`,className:`ml-auto text-xs text-muted-foreground hover:text-destructive transition-colors`,children:(0,$.jsx)(S,{className:`h-3.5 w-3.5`})})]}),a&&(0,$.jsxs)(`button`,{"data-test":`ghichu-highlight-extract`,onClick:a,className:`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs hover:bg-muted active:bg-muted/70 transition-colors text-muted-foreground`,children:[(0,$.jsx)(x,{className:`h-3 w-3`}),`Extract highlights`]})]})]})}function Dn(){return(0,$.jsx)(`div`,{"data-test":`ghichu-menu-separator`,className:`my-1 h-px bg-border`})}function On({children:e,text:t,isTopic:n,isCollapsed:r,isPinned:i,onDelete:a,onCreateTopic:o,onRemoveTopic:c,onFocusTopic:l,onToggleCollapse:u,onTogglePin:m,onMoveUp:h,onMoveDown:g,isHighlightMode:ee,onToggleHighlightMode:v,highlightColor:y,onSetHighlightColor:b,onClearHighlights:x,onExtractHighlights:C,preventNativeSelect:ne=!1,onMenuOpenChange:ie,lineActionsMode:ae=`show`}){let[oe,E]=(0,W.useState)(!1),[ce,D]=(0,W.useState)(!1),O=(0,W.useRef)(0),A=(0,W.useRef)(null),j=(0,W.useRef)(null),M=(0,W.useRef)(`button`),le=ae===`hide`?`opacity-0`:ae===`disable`?`opacity-0 pointer-events-none`:``,ue=(0,W.useCallback)(e=>{e?(D(!0),E(!0)):(E(!1),O.current=Date.now(),requestAnimationFrame(()=>D(!1))),ie?.(e)},[ie]),F=(0,W.useCallback)(()=>{E(!1),navigator.clipboard.writeText(t)},[t]),I=(0,W.useCallback)(()=>{E(!1),a()},[a]),pe=(0,W.useCallback)(()=>{E(!1),n?c():o()},[n,o,c]),me=(0,W.useCallback)(()=>{E(!1),l?.()},[l]),he=(0,W.useCallback)(()=>{E(!1),h?.()},[h]),L=(0,W.useCallback)(()=>{E(!1),g?.()},[g]),ge=(0,W.useCallback)(()=>{E(!1),u()},[u]),R=(0,W.useCallback)(()=>{E(!1),m()},[m]),_e=(0,W.useCallback)(()=>{E(!1),v?.()},[v]),ve=(0,W.useCallback)((e,t)=>{let n=A.current?.getBoundingClientRect(),r=j.current;!n||!r||(r.style.left=`${e-n.left}px`,r.style.right=``,r.style.top=`${t-n.top}px`,M.current=`cursor`)},[]),{handlers:ye}=Ee({onLongPress:e=>{if(oe||Date.now()-O.current<300)return;let t=e.touches?.[0]??e.changedTouches?.[0];t&&ve(t.clientX,t.clientY),ue(!0)}});return(0,$.jsxs)(fe,{open:oe,onOpenChange:ue,children:[(0,$.jsxs)(`div`,{"data-test":`ghichu-message-context-menu`,ref:A,className:`group/menu relative ${ne?`select-none`:``}`,onContextMenu:e=>{e.preventDefault(),ve(e.clientX,e.clientY),ue(!0)},...ye,children:[e,(0,$.jsx)(de,{asChild:!0,children:(0,$.jsx)(`div`,{ref:j,"data-test":`ghichu-editor-line-menu-anchor`,className:`absolute pointer-events-none w-0 h-0`,style:{top:4,right:4}})}),(0,$.jsx)(N,{"data-test":`ghichu-editor-line-menu`,variant:`ghost`,size:`icon`,className:`absolute top-1 right-1 h-6 w-6 text-muted-foreground/40 hover:text-foreground transition-colors pointer-events-auto ${ce?`flex`:`hidden group-hover/menu:flex`} ${le}`,onClick:()=>{j.current&&(j.current.style.left=``,j.current.style.right=`4px`,j.current.style.top=`4px`),M.current=`button`,ue(!0)},onMouseDown:e=>e.preventDefault(),children:(0,$.jsx)(w,{className:`h-3 w-3`})})]}),(0,$.jsxs)(P,{"data-test":`ghichu-editor-line-menu-popover`,align:M.current===`cursor`?`start`:`end`,side:`bottom`,sideOffset:4,collisionPadding:16,sticky:`always`,avoidCollisions:!0,hideWhenDetached:!1,onOpenAutoFocus:e=>e.preventDefault(),className:`w-40 p-1`,children:[l&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(`button`,{"data-test":`ghichu-editor-line-view-details`,onClick:me,className:wn,children:[(0,$.jsx)(re,{className:`h-3.5 w-3.5`}),`View details`]}),(0,$.jsx)(Dn,{})]}),(0,$.jsxs)(`button`,{"data-test":`ghichu-editor-line-copy`,onClick:F,className:wn,children:[(0,$.jsx)(f,{className:`h-3.5 w-3.5`}),`Copy`]}),h&&(0,$.jsxs)(`button`,{"data-test":`ghichu-editor-line-move-up`,onClick:he,className:wn,children:[(0,$.jsx)(p,{className:`h-3.5 w-3.5`}),`Move Up`]}),g&&(0,$.jsxs)(`button`,{"data-test":`ghichu-editor-line-move-down`,onClick:L,className:wn,children:[(0,$.jsx)(_,{className:`h-3.5 w-3.5`}),`Move Down`]}),(0,$.jsx)(Dn,{}),(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-toggle-topic`,onClick:pe,className:wn,children:n?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(S,{className:`h-3.5 w-3.5`}),`Remove Topic`]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(s,{className:`h-3.5 w-3.5`}),`Create Topic`]})}),(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-toggle-collapse`,onClick:ge,className:wn,children:r?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(te,{className:`h-3.5 w-3.5`}),`Expand`]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(se,{className:`h-3.5 w-3.5`}),`Collapse`]})}),(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-toggle-pin`,onClick:R,className:wn,children:i?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(T,{className:`h-3.5 w-3.5`}),`Unpin`]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(k,{className:`h-3.5 w-3.5`}),`Pin`]})}),v&&(0,$.jsx)(En,{isHighlightMode:!!ee,highlightColor:y,onToggle:_e,onSetColor:e=>{E(!1),b?.(e)},onClear:x?()=>{E(!1),x()}:void 0,onExtract:C?()=>{E(!1),C()}:void 0}),(0,$.jsx)(Dn,{}),(0,$.jsxs)(`button`,{"data-test":`ghichu-editor-line-delete`,onClick:I,className:`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10 active:bg-destructive/20 transition-colors`,children:[(0,$.jsx)(d,{className:`h-3.5 w-3.5`}),`Delete`]})]})]})}function kn({text:e,highlights:t}){let n=(0,W.useRef)(null),r=(0,W.useRef)(null),i=(0,W.useRef)(null);return(0,W.useLayoutEffect)(()=>{let n=r.current,a=i.current;if(!n||!a||t.length===0){a&&(a.innerHTML=``);return}let o=document.createDocumentFragment(),s=n.firstChild;if(!s||s.nodeType!==Node.TEXT_NODE){a.innerHTML=``;return}for(let r of t){let t=Math.max(0,Math.min(r.start,e.length)),i=Math.max(t,Math.min(r.end,e.length));if(t>=i)continue;let a=document.createRange();a.setStart(s,t),a.setEnd(s,i);let c=a.getClientRects(),l=n.getBoundingClientRect();for(let e of c){let t=document.createElement(`div`);t.setAttribute(`data-test`,`ghichu-highlight-segment`),t.style.position=`absolute`,t.style.left=`${e.left-l.left}px`,t.style.top=`${e.top-l.top}px`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.backgroundColor=r.color,t.style.borderRadius=`2px`,t.style.pointerEvents=`none`,o.appendChild(t)}}a.innerHTML=``,a.appendChild(o)},[e,t]),t.length===0?(0,$.jsx)($.Fragment,{children:e}):(0,$.jsxs)(`div`,{"data-test":`ghichu-highlight-container`,ref:n,className:`relative`,children:[(0,$.jsx)(`div`,{ref:i,className:`absolute inset-0 pointer-events-none`}),(0,$.jsx)(`span`,{ref:r,className:`relative`,children:e})]})}var An=`Double press backspace to delete`,jn=`Type something...`,Mn=2e3;function Nn(e){return new Date(e).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}function Pn(e){let t=Date.now()-new Date(e).getTime(),n=Math.floor(t/1e3);if(n<60)return`now`;let r=Math.floor(n/60);if(r<60)return`${r}m`;let i=Math.floor(r/60);return i<24?`${i}h`:`${Math.floor(i/24)}d`}function Fn(e,t){return t===`relative`?Pn(e):Nn(e)}function In({groupedLines:e,topicLineIds:t,highlightedLineId:n,editingLineId:r,isFocused:i,showTimestamps:a,showCardBorders:o,fontStyle:s,markdownPreview:c,timestampFormat:l,ghichuMode:u,editSubMode:d,lineActionsMode:f,onLineEdit:p,onDeleteLine:m,onMoveLine:h,onCreateTopic:g,onRemoveTopic:_,onFocusTopic:ee,onHighlightLine:v,onInsertLine:y,onStartEditing:b,onStopEditing:x,pinnedLineIds:S,onTogglePin:C,highlightsByLineId:w,onToggleTextHighlight:te,onToggleHighlightMode:ne,highlightColor:re,onSetHighlightColor:ie,onClearLineHighlights:ae,onExtractHighlights:oe}){let se=(0,W.useRef)(null),[T,E]=(0,W.useState)(new Set),[ce,D]=(0,W.useState)(null),O=d===`highlight`,k=(0,W.useCallback)(e=>{E(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),A=(0,W.useCallback)(t=>{let n=t.ownerTopicLineId;for(;n;){if(T.has(n))return!0;n=e.find(e=>e.line.lineId===n)?.ownerTopicLineId??null}return!1},[T,e]),j=(0,W.useCallback)(n=>{let r=[],i=n.ownerTopicLineId;for(;i;)t.has(i)&&r.unshift(i),i=e.find(e=>e.line.lineId===i)?.ownerTopicLineId??null;return r},[e,t]),M=(0,W.useCallback)(t=>{if(t.target!==t.currentTarget)return;if(u!==`edit`||O){v(null),x();return}let r=[...e].reverse().find(e=>!A(e));if(!r)return;let i=r.line.lineId;if(n===i){let e=t.currentTarget.querySelector(`[data-line-id="${i}"] [data-test="ghichu-editor-text"]`);if(e){e.contentEditable=`true`,e.focus({preventScroll:!0});let t=document.createRange();t.selectNodeContents(e),t.collapse(!1);let n=window.getSelection();n?.removeAllRanges(),n?.addRange(t)}b(i)}else v(i)},[u,O,e,A,n,v,b,x]);return(0,$.jsxs)($.Fragment,{children:[O&&(0,$.jsx)(`style`,{children:`.ghichu-hl-sel::selection, .ghichu-hl-sel *::selection { background: ${re}; }`}),(0,$.jsx)(`div`,{"data-test":`ghichu-editor`,className:`min-h-full cursor-text`,onClick:M,children:e.length===0?null:(()=>{let i=!1;return e.map((E,O)=>{if(A(E))return null;let M=!i;return i=!0,(0,$.jsx)(Hn,{ref:O===e.length-1?se:void 0,line:E.line,isTopic:E.isTopic,isFirst:M,isCollapsed:T.has(E.line.lineId),isHighlighted:n===E.line.lineId,isEditing:r===E.line.lineId,depth:E.depth,showTimestamps:a,showCardBorders:o,fontStyle:s,markdownPreview:c,timestampFormat:l,ghichuMode:u,editSubMode:d,lineActionsMode:f,onEdit:e=>p(E.index,e),onDelete:()=>m(E.index),onMoveUp:(()=>{let t=e.filter(e=>e.ownerTopicLineId===E.ownerTopicLineId),n=t.findIndex(e=>e.line.lineId===E.line.lineId);if(n<=0)return;let r=t[n-1].index,i=E.isTopic?_n(e,E.line.lineId):[],a=(i.length>0?i[i.length-1].index:E.index)-E.index+1;return()=>h(E.index,r,a)})(),onMoveDown:(()=>{let t=e.filter(e=>e.ownerTopicLineId===E.ownerTopicLineId),n=t.findIndex(e=>e.line.lineId===E.line.lineId);if(n<0||n>=t.length-1)return;let r=t[n+1],i=r.isTopic?_n(e,r.line.lineId):[],a=i.length>0?i[i.length-1].index:r.index,o=E.isTopic?_n(e,E.line.lineId):[],s=o.length>0?o[o.length-1].index:E.index,c=a-s;return()=>h(s+1,E.index,c)})(),onCreateTopic:()=>{let e=E.ownerTopicLineId&&t.has(E.ownerTopicLineId)?E.ownerTopicLineId:void 0;g(E.line.lineId,E.line.text,e)},onRemoveTopic:()=>_(E.line.lineId),onFocusTopic:()=>ee(E.line.lineId),onToggleHighlight:()=>v(n===E.line.lineId?null:E.line.lineId),onToggleCollapse:E.isTopic||E.line.text.includes(`
`)||E.line.text.length>120?()=>k(E.line.lineId):void 0,isPinned:S.has(E.line.lineId),onTogglePin:()=>C(E.line.lineId),highlights:w.get(E.line.lineId)??[],onToggleTextHighlight:(e,t)=>te(E.line.lineId,e,t),onToggleHighlightMode:ne,highlightColor:re,onSetHighlightColor:ie,onClearHighlights:()=>ae(E.line.lineId),onExtractHighlights:()=>oe(E.line.lineId),ancestorTopicIds:j(E),onCollapseAncestor:k,hoveredStripTopicId:ce,onHoverStrip:D,onInsertAbove:()=>y(E.index,E.ownerTopicLineId??void 0),onInsertBelow:()=>y(E.index+1,E.ownerTopicLineId??void 0),onStartEditing:()=>b(E.line.lineId),onStopEditing:x,autoFocus:e.length===1&&E.line.text.trim()===``&&E.index===0},`${E.line.lineId}-${E.line.lastModified}`)})})()})]})}function Ln(e){let t=[];for(let n of e.childNodes)n.nodeType===Node.TEXT_NODE?t.push(n.textContent??``):n.nodeName===`BR`?t.push(`
`):n.nodeType===Node.ELEMENT_NODE&&t.push(Ln(n));return t.join(``)}function Rn(e){e.focus({preventScroll:!0});let t=document.createRange();t.selectNodeContents(e),t.collapse(!1);let n=window.getSelection();n?.removeAllRanges(),n?.addRange(t)}function zn(e){return e.includes(`
`)?e.split(`
`).map((e,t,n)=>(0,$.jsxs)(`span`,{children:[e,t<n.length-1&&(0,$.jsx)(`br`,{})]},t)):e}function Bn(e,t,n){let[r,i]=(0,W.useState)(null),a=(0,W.useRef)(null),o=(0,W.useCallback)((e,t=!0)=>{a.current&&clearTimeout(a.current),i(e),t&&(a.current=setTimeout(()=>i(null),Mn))},[]),s=(0,W.useCallback)(()=>{a.current&&clearTimeout(a.current),i(null)},[]);return(0,W.useEffect)(()=>()=>{a.current&&clearTimeout(a.current)},[]),{placeholder:(0,W.useMemo)(()=>r||(e&&t&&n.trim()===``?jn:null),[r,e,t,n]),showPlaceholder:o,clearPlaceholder:s}}var Vn=24,Hn=(0,W.forwardRef)(function({line:e,isTopic:t,isCollapsed:n,isHighlighted:r,isEditing:i,depth:a,showTimestamps:s,showCardBorders:c,fontStyle:l,markdownPreview:u,timestampFormat:d,ghichuMode:f,editSubMode:p,lineActionsMode:m,onEdit:h,onDelete:g,onMoveUp:_,onMoveDown:ee,onCreateTopic:v,onRemoveTopic:y,onFocusTopic:b,onToggleHighlight:x,onToggleCollapse:S,isPinned:C,onTogglePin:w,highlights:te,onToggleTextHighlight:ne,onToggleHighlightMode:re,highlightColor:ie,onSetHighlightColor:oe,onClearHighlights:se,onExtractHighlights:T,ancestorTopicIds:ce,onCollapseAncestor:D,hoveredStripTopicId:O,onHoverStrip:k,onInsertAbove:A,onInsertBelow:j,onStartEditing:M,onStopEditing:N,autoFocus:le,isFirst:ue},de){let P=(0,W.useRef)(null);(0,W.useImperativeHandle)(de,()=>P.current,[]);let fe=f===`edit`,F=p===`highlight`,I=fe&&i&&!F,pe=e.text.includes(`
`)||e.text.length>120,me=t||pe,he=m===`hide`?`opacity-0`:m===`disable`?`opacity-0 pointer-events-none`:``,[L,R]=(0,W.useState)(!1),[_e,ve]=(0,W.useState)(e.text.trim()!==``),{placeholder:ye,showPlaceholder:be,clearPlaceholder:xe}=Bn(I,L,e.text),Se=(0,W.useRef)(0),Ce=(0,W.useRef)(!1),z=(0,W.useCallback)(e=>{Ce.current=e},[]),{swipeType:B,dragProgress:V,handleTouchStart:we,handleTouchMove:Te,handleTouchEnd:Ee}=De(),Oe=(0,W.useCallback)(()=>{if(!F)return;let e=window.getSelection();if(!e||e.rangeCount===0||e.isCollapsed)return;let t=e.getRangeAt(0),n=P.current;if(!n||!n.contains(t.startContainer)||!n.contains(t.endContainer))return;let r=document.createRange();r.setStart(n,0),r.setEnd(t.startContainer,t.startOffset);let i=r.toString().length,a=i+t.toString().length;e.removeAllRanges(),a>i&&ne(i,a)},[F,ne]),ke=(0,W.useRef)(null),H=(0,W.useCallback)(e=>{if(I||F||!r||Ce.current)return;let t=P.current;if(t){let n=document.caretRangeFromPoint?.(e.clientX,e.clientY);if(n){let e=document.createRange();e.setStart(t,0),e.setEnd(n.startContainer,n.startOffset),ke.current=e.toString().length}}M()},[I,F,r,M]),U=(0,W.useRef)(!1),Ae=(0,W.useCallback)(()=>{I||F||Ce.current||r||(U.current=!0,x())},[I,F,r,x]),je=(0,W.useCallback)(()=>{if(!(I||F||r)){if(U.current){U.current=!1;return}x()}},[I,F,r,x]),Me=(0,W.useCallback)(n=>{I||e.text.trim()===``||(n.preventDefault(),t?y():v())},[I,t,e.text,v,y]);(0,W.useEffect)(()=>{I&&(le?requestAnimationFrame(()=>{let e=P.current;e&&(e.textContent?.trim()===``&&(e.textContent=``),Rn(e))}):i&&requestAnimationFrame(()=>{let e=P.current;if(!e)return;e.focus({preventScroll:!0});let t=ke.current;if(t!==null){ke.current=null;let n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),r=t,i;for(;i=n.nextNode();){if(r<=i.length){let e=window.getSelection();if(e){let t=document.createRange();t.setStart(i,r),t.collapse(!0),e.removeAllRanges(),e.addRange(t)}return}r-=i.length}}}))},[le,i,I,e.text]);let Ne=(0,W.useCallback)(()=>{R(!0)},[]),G=(0,W.useCallback)(()=>{if(R(!1),!P.current)return;xe();let t=Ln(P.current);ve(t.trim()!==``),t!==e.text&&h(t),N()},[e.text,e.lineId,I,h,xe,N]),Pe=(0,W.useCallback)(()=>{P.current&&ve((P.current.textContent??``).trim()!==``)},[]),Fe=(0,W.useCallback)(t=>{if(t.key===`Escape`){t.preventDefault(),P.current?.blur();return}if(t.key===`Backspace`){if(!P.current)return;if(Ln(P.current).trim()===``||e.text.trim()===``){t.preventDefault();let e=Date.now();e-Se.current<=300?(Se.current=0,xe(),g()):(Se.current=e,be(An));return}xe()}else t.key!==`Shift`&&t.key!==`Control`&&t.key!==`Alt`&&t.key!==`Meta`&&(xe(),Se.current=0)},[e.text,g,be,xe]);return(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-line-container`,"data-line-id":e.lineId,className:`relative ${ue?``:`pt-3`}`,style:a>0?{paddingLeft:a*Vn}:void 0,children:[r&&!I&&(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-insert-above`,className:`absolute -top-2.5 left-1/2 -translate-x-1/2 z-20 h-5 w-5 flex items-center justify-center text-muted-foreground/60 hover:text-foreground active:text-foreground transition-colors ${he}`,onClick:e=>{e.stopPropagation(),A()},title:`Insert line above`,children:(0,$.jsx)(o,{className:`h-3 w-3`})}),(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-insert-below`,className:`absolute -bottom-2.5 left-1/2 -translate-x-1/2 z-20 h-5 w-5 flex items-center justify-center text-muted-foreground/60 hover:text-foreground active:text-foreground transition-colors ${he}`,onClick:e=>{e.stopPropagation(),j()},title:`Insert line below`,children:(0,$.jsx)(o,{className:`h-3 w-3`})})]}),ce.map((e,t)=>{let n=O===e;return(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-collapse`,className:`absolute top-3 bottom-0 w-4 flex justify-center transition-colors ${n?`bg-muted/50`:``} ${he}`,style:{left:-(a-t)*Vn-16},onClick:()=>D(e),onMouseEnter:()=>k(e),onMouseLeave:()=>k(null),onTouchStart:()=>k(e),onTouchEnd:()=>k(null),children:(0,$.jsx)(`div`,{className:`h-full transition-all ${n?`w-0.5 bg-primary/40`:`w-px bg-border`}`})},e)}),me&&S?(0,$.jsx)(`button`,{"data-test":`ghichu-editor-line-collapse`,className:`absolute -left-4 -top-1 -bottom-1 w-4 flex items-start mt-4 justify-center text-muted-foreground/60 hover:text-foreground rounded-l transition-colors ${O===e.lineId?`bg-muted/50 text-foreground`:`hover:bg-muted/50`} ${he}`,onClick:S,onMouseEnter:()=>k(e.lineId),onMouseLeave:()=>k(null),onTouchStart:()=>k(e.lineId),onTouchEnd:()=>k(null),children:n?(0,$.jsx)(ae,{className:`h-3 w-3`}):(0,$.jsx)(E,{className:`h-3 w-3`})}):null,(0,$.jsx)(On,{text:e.text,isTopic:t,isCollapsed:n,isPinned:C,onDelete:g,onCreateTopic:v,onRemoveTopic:y,onFocusTopic:b,onToggleCollapse:S??(()=>{}),onTogglePin:w,onMoveUp:_,onMoveDown:ee,isHighlightMode:F,onToggleHighlightMode:re,highlightColor:ie,onSetHighlightColor:oe,onClearHighlights:te.length>0?se:void 0,onExtractHighlights:te.length>0?T:void 0,preventNativeSelect:!I,onMenuOpenChange:z,lineActionsMode:m,children:(0,$.jsxs)(`div`,{className:`min-w-0`,children:[(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-line`,className:`group relative ${nt[l]} text-sm min-h-[37px] transition-colors ${c?`rounded-md border bg-card px-3 py-2 shadow-sm`:`border border-transparent px-1 py-0.5`} ${F?`cursor-crosshair`:I?``:`cursor-pointer active:bg-muted/30`} ${B?.direction===`right`?B.mode===`rapid`?`!bg-orange-200 dark:!bg-orange-800/40 rounded`:`!bg-orange-100 dark:!bg-orange-900/30 rounded`:B?.direction===`left`?B.mode===`rapid`?`!bg-blue-200 dark:!bg-blue-800/40 rounded`:`!bg-blue-100 dark:!bg-blue-900/30 rounded`:``} ${t?`border-l-4 border-l-primary/60 pl-3`:``} ${r&&!I?c?`border-primary/30 bg-primary/10`:`bg-primary/10 rounded`:c?t?`border-y-border border-r-border`:`border-border`:``}`,style:V===0?void 0:{backgroundColor:V>0?`rgba(255, 165, 0, ${Math.abs(V)*.35})`:`rgba(100, 149, 237, ${Math.abs(V)*.35})`,borderRadius:4},onTouchStart:we,onTouchMove:Te,onTouchEnd:e=>{Ae(),Ee(e)},onMouseDown:H,onClick:je,children:[(V!==0||B)&&(0,$.jsx)(`span`,{"data-test":`ghichu-editor-line-swipe-badge`,className:`absolute top-1 right-8 z-20 rounded px-1.5 py-0.5 text-[10px] font-mono font-bold leading-none pointer-events-none select-none`,style:{color:V>0||B?.direction===`right`?`rgb(180, 90, 0)`:`rgb(50, 90, 180)`,backgroundColor:V>0||B?.direction===`right`?`rgba(255, 165, 0, 0.15)`:`rgba(100, 149, 237, 0.15)`},children:B?B.mode===`rapid`?`⚡`:`→`:Math.round(Math.abs(V)*100)}),!I&&!F&&(0,$.jsx)(`div`,{"data-test":`ghichu-editor-line-topic-hint`,className:`absolute left-0 top-0 bottom-0 w-5 z-10 hover:shadow-[inset_4px_0_8px_-4px_rgba(0,0,0,0.15)] transition-shadow`,onDoubleClick:Me}),u&&!I?(0,$.jsx)(`span`,{"data-test":`ghichu-editor-text`,ref:P,className:`block min-w-0 break-words prose prose-sm dark:prose-invert max-w-none ${n?`overflow-hidden max-h-[4.5em]`:``}`,dangerouslySetInnerHTML:{__html:ge(e.text)||e.text}}):(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-text-wrapper`,className:`relative`,children:[(0,$.jsx)(`span`,{"data-test":`ghichu-editor-text`,ref:P,contentEditable:I,suppressContentEditableWarning:!0,onFocus:I?Ne:void 0,onBlur:I?G:void 0,onInput:I?Pe:void 0,onKeyDown:I?Fe:void 0,onMouseUp:F?Oe:void 0,className:`block min-w-0 outline-none break-words ${I||F?`select-text`:``} ${F?`cursor-crosshair ghichu-hl-sel`:``} ${n?`overflow-hidden max-h-[4.5em]`:`whitespace-pre-wrap`}`,children:!I&&te.length>0?(0,$.jsx)(kn,{text:e.text,highlights:te}):zn(e.text)}),ye&&!_e&&(0,$.jsx)(`span`,{"data-test":`ghichu-editor-placeholder`,className:`pointer-events-none absolute inset-0 text-muted-foreground/40 select-none`,children:ye})]})]}),s&&(0,$.jsx)(`span`,{"data-test":`ghichu-editor-timestamp`,className:`text-muted-foreground/60 text-[10px] select-none mt-0.5 ml-1 block`,children:Fn(e.lastModified,d)})]})})]})}),Un=`Unnamed`,Wn=500;function Gn(e){let t=new Map,n=e.map(e=>{let t=!e.title||e.title.trim()===``||e.title===`Untitled`;return{note:e,label:t?Un:e.title,isUnnamed:t}});for(let{label:e}of n)t.set(e,(t.get(e)??0)+1);let r=new Map;return n.map(({note:e,label:n})=>{if((t.get(n)??1)<=1)return{id:e.id,title:e.title,displayTitle:n};let i=(r.get(n)??0)+1;return r.set(n,i),{id:e.id,title:e.title,displayTitle:`${n} (${i})`}})}function Kn({notes:e,activeNoteId:t,onSelectNote:n,onCloseNote:r,onCreateNote:i,onRenameNote:a}){let s=(0,W.useMemo)(()=>Gn(e),[e]);return s.length===0?null:(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-tabbar`,className:`flex shrink-0 items-center gap-0 overflow-x-auto border-b bg-muted/30`,children:[s.map(e=>(0,$.jsx)(qn,{tab:e,isActive:e.id===t,onSelect:()=>n(e.id),onClose:r?()=>r(e.id):void 0,onRename:a?t=>a(e.id,t):void 0},e.id)),i&&(0,$.jsx)(N,{"data-test":`ghichu-editor-tab-create`,variant:`ghost`,size:`icon`,className:`h-9 w-9 shrink-0 text-muted-foreground hover:text-foreground active:bg-muted/70`,onClick:i,title:`New note`,children:(0,$.jsx)(o,{className:`h-3.5 w-3.5`})})]})}function qn({tab:e,isActive:t,onSelect:n,onClose:r,onRename:i}){let[a,o]=(0,W.useState)(!1),s=(0,W.useRef)(null),c=(0,W.useRef)(null),l=(0,W.useRef)(!1),u=(0,W.useCallback)(()=>{i&&(o(!0),requestAnimationFrame(()=>{s.current?.select()}))},[i]),d=(0,W.useCallback)(()=>{i&&(o(!0),requestAnimationFrame(()=>{s.current?.select()}))},[i]),f=(0,W.useCallback)(()=>{l.current=!1,c.current=setTimeout(()=>{l.current=!0,d()},Wn)},[d]),p=(0,W.useCallback)(()=>{c.current&&=(clearTimeout(c.current),null)},[]),m=(0,W.useCallback)(()=>{a||l.current||n()},[a,n]),h=(0,W.useCallback)(()=>{let t=s.current?.value.trim();t&&t!==e.title&&t!==e.displayTitle&&i?.(t),o(!1)},[e.title,e.displayTitle,i]),g=(0,W.useCallback)(e=>{e.key===`Enter`?(e.preventDefault(),h()):e.key===`Escape`&&(e.preventDefault(),o(!1))},[h]);return(0,$.jsxs)(`div`,{"data-test":`ghichu-editor-tab`,className:`group flex items-center gap-1 border-r px-3 py-1.5 text-xs cursor-pointer transition-colors ${t?`bg-background text-foreground border-b-2 border-b-primary`:`text-muted-foreground hover:text-foreground hover:bg-muted/50 active:bg-muted/70`}`,onClick:m,onDoubleClick:u,onTouchStart:f,onTouchEnd:p,children:[a?(0,$.jsx)(`input`,{"data-test":`ghichu-editor-tab-rename`,ref:s,defaultValue:e.title,onBlur:h,onKeyDown:g,className:`w-24 bg-transparent outline-none border-b border-primary text-xs`,autoFocus:!0}):(0,$.jsx)(`span`,{"data-test":`ghichu-editor-tab-title`,className:`truncate max-w-32`,children:e.displayTitle}),r&&!a&&(0,$.jsx)(N,{"data-test":`ghichu-editor-tab-close`,variant:`ghost`,size:`icon`,className:`h-4 w-4 shrink-0 transition-opacity ${t?`opacity-100`:`group-hover:opacity-100 md:opacity-0`}`,onClick:e=>{e.stopPropagation(),r()},children:(0,$.jsx)(S,{className:`h-3 w-3`})})]})}var Jn=(0,W.forwardRef)(function(e,t){return(0,$.jsx)(Oe,{ref:t,placeholder:`Type a message...`,...e})});function Yn(e){return new Date(e).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`,second:`2-digit`})}function Xn(e){switch(e.type){case`insert`:return`INSERT L${e.line}`;case`delete`:return`DELETE L${e.line}`;case`update`:return`UPDATE L${e.line}`;case`undo`:return`UNDO ${e.targetOp.type.toUpperCase()}`;case`redo`:return`REDO ${e.targetOp.type.toUpperCase()}`;case`topic-created`:return`TOPIC+`;case`topic-removed`:return`TOPIC-`}}function Zn(e){switch(e){case`insert`:return`text-green-600 dark:text-green-400`;case`delete`:return`text-red-600 dark:text-red-400`;case`update`:return`text-yellow-600 dark:text-yellow-400`;case`undo`:return`text-blue-600 dark:text-blue-400`;case`redo`:return`text-purple-600 dark:text-purple-400`;case`topic-created`:return`text-teal-600 dark:text-teal-400`;case`topic-removed`:return`text-orange-600 dark:text-orange-400`}}function Qn(e){switch(e.type){case`insert`:case`update`:return e.text;case`undo`:case`redo`:return`targetOp`in e&&`text`in e.targetOp?e.targetOp.text:null;case`delete`:return null;case`topic-created`:return e.title;case`topic-removed`:return null}}function $n({operations:e}){return e.length===0?(0,$.jsx)(`p`,{"data-test":`ghichu-log-viewer-empty`,className:`p-4 text-sm text-muted-foreground`,children:`No operations yet.`}):(0,$.jsx)(`div`,{"data-test":`ghichu-log-viewer`,className:`h-full overflow-y-auto p-2`,children:(0,$.jsx)(`div`,{"data-test":`ghichu-log-viewer-list`,className:`space-y-0.5`,children:[...e].reverse().map((t,n)=>{let r=Qn(t);return(0,$.jsxs)(`div`,{"data-test":`ghichu-log-entry`,className:`flex items-start gap-2 rounded px-2 py-1 font-mono text-xs hover:bg-muted/50`,children:[(0,$.jsx)(`span`,{"data-test":`ghichu-log-entry-time`,className:`shrink-0 text-muted-foreground/60`,children:Yn(t.timestamp)}),(0,$.jsx)(`span`,{"data-test":`ghichu-log-entry-label`,className:`shrink-0 font-semibold ${Zn(t.type)}`,children:Xn(t)}),r&&(0,$.jsx)(`span`,{"data-test":`ghichu-log-entry-text`,className:`min-w-0 truncate text-muted-foreground`,children:r})]},e.length-1-n)})})})}function er(){let[e,t]=(0,W.useState)(navigator.onLine),[n,r]=(0,W.useState)({registered:!1,state:`none`,scope:null,cachedAssets:0}),[i,a]=(0,W.useState)(null),o=(0,W.useCallback)(async()=>{let e=0;try{let t=await caches.keys();for(let n of t){let t=await(await caches.open(n)).keys();e+=t.length}}catch{}if(!(`serviceWorker`in navigator)){r({registered:!1,state:`none`,scope:null,cachedAssets:e});return}let t=await navigator.serviceWorker.getRegistrations();if(t.length>0){let n=t[0],i=`none`;n.installing?i=`installing`:n.waiting?i=`waiting`:n.active&&(i=`active`),r({registered:!0,state:i,scope:n.scope,cachedAssets:e})}else r({registered:!1,state:`none`,scope:null,cachedAssets:e})},[]);(0,W.useEffect)(()=>{let e=()=>t(!0),n=()=>t(!1);return window.addEventListener(`online`,e),window.addEventListener(`offline`,n),o(),()=>{window.removeEventListener(`online`,e),window.removeEventListener(`offline`,n)}},[o]);let s=(0,W.useCallback)(async()=>{if(!(`serviceWorker`in navigator))return;let e=await navigator.serviceWorker.getRegistrations();for(let t of e)await t.unregister();a(`Unregistered. Reload to take effect.`),await o()},[o]),c=(0,W.useCallback)(async()=>{let e=await caches.keys();await Promise.all(e.map(e=>caches.delete(e))),a(`Cleared ${e.length} cache(s)`),await o(),setTimeout(()=>a(null),3e3)},[o]),l=(0,W.useCallback)(async()=>{if(!(`serviceWorker`in navigator))return;let e=await navigator.serviceWorker.getRegistrations();for(let t of e)t.waiting&&t.waiting.postMessage({type:`SKIP_WAITING`});a(`Activating... reload page`),setTimeout(()=>{window.location.reload()},500)},[]),d=(0,W.useCallback)(async()=>{try{let e=await caches.open(tt),t=0,n=new Set,r=await fetch(window.location.href,{cache:`reload`});await e.put(window.location.href,r),t++,n.add(window.location.href);let i=performance.getEntriesByType(`resource`).map(e=>e.name).filter(e=>e.startsWith(window.location.origin)&&!n.has(e)),s=[...Array.from(document.querySelectorAll(`script[src]`)).map(e=>e.src),...Array.from(document.querySelectorAll(`link[href]`)).map(e=>e.href)].filter(e=>e.startsWith(window.location.origin)&&!n.has(e)),c=[...new Set([...i,...s])];a(`Caching ${c.length+1} assets...`);for(let r of c)if(!n.has(r)){n.add(r);try{let n=await fetch(r,{cache:`reload`});n.ok&&(await e.put(r,n),t++)}catch{}}a(`Cached ${t} assets`),await o(),setTimeout(()=>a(null),5e3)}catch(e){a(`Cache failed: ${e}`)}},[o]);return(0,$.jsxs)(`div`,{"data-test":`ghichu-pwa-status`,className:`flex flex-col gap-3 border-t pt-4`,children:[(0,$.jsx)(`h3`,{className:`text-sm font-medium`,children:`PWA Status`}),(0,$.jsx)(`div`,{"data-test":`ghichu-pwa-network`,className:`flex items-center gap-2`,children:e?(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(oe,{className:`h-4 w-4 text-green-500`}),(0,$.jsx)(`span`,{className:`text-sm text-green-600`,children:`Online`})]}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(A,{className:`h-4 w-4 text-red-500`}),(0,$.jsx)(`span`,{className:`text-sm text-red-600`,children:`Offline`})]})}),(0,$.jsxs)(`div`,{"data-test":`ghichu-pwa-sw`,className:`flex flex-col gap-1`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(`span`,{className:`text-sm`,children:`Service Worker:`}),n.registered?(0,$.jsx)(`span`,{className:`text-sm ${n.state===`active`?`text-green-600`:`text-yellow-600`}`,children:n.state}):(0,$.jsx)(`span`,{className:`text-sm text-muted-foreground`,children:`not registered`}),n.state===`waiting`&&(0,$.jsx)(N,{"data-test":`ghichu-pwa-skip-waiting`,variant:`outline`,size:`sm`,className:`h-6 px-2 text-xs`,onClick:()=>void l(),children:`Activate`})]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(`span`,{className:`text-sm`,children:`Cached assets:`}),(0,$.jsx)(`span`,{className:`text-sm ${n.cachedAssets>0?`text-green-600`:`text-muted-foreground`}`,children:n.cachedAssets})]}),n.scope&&(0,$.jsxs)(`p`,{className:`text-xs text-muted-foreground truncate`,children:[`Scope: `,n.scope]})]}),(0,$.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsxs)(N,{"data-test":`ghichu-pwa-refresh`,variant:`outline`,size:`sm`,className:`flex-1 gap-1`,onClick:()=>void o(),children:[(0,$.jsx)(u,{className:`h-3 w-3`}),`Refresh`]}),(0,$.jsx)(N,{"data-test":`ghichu-pwa-force-cache`,variant:`outline`,size:`sm`,className:`flex-1`,onClick:()=>void d(),children:`Force cache`})]}),(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(N,{"data-test":`ghichu-pwa-clear-cache`,variant:`outline`,size:`sm`,className:`flex-1`,onClick:()=>void c(),children:`Clear cache`}),n.registered&&(0,$.jsx)(N,{"data-test":`ghichu-pwa-unregister`,variant:`outline`,size:`sm`,className:`flex-1 text-destructive hover:text-destructive`,onClick:()=>void s(),children:`Unregister`})]})]}),i&&(0,$.jsx)(`p`,{"data-test":`ghichu-pwa-action-status`,className:`text-xs text-muted-foreground`,children:i}),(0,$.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:n.cachedAssets>0?`App is cached for offline use.`:`Click Force cache to enable offline support.`})]})}var tr=`ghichu-data.json`,nr=`Notes`,rr=`Local Notes`;function ir(){let e=localStorage.getItem(Ne);if(!e||JSON.parse(e).length===0){let e=je.create(nr);localStorage.setItem(Ne,JSON.stringify([e.toJSON()]))}let t=L.getState().state;if(!(t&&Object.keys(t.projects).length>0)){let e=L.getState().project.create(rr);e&&ke(e)}}function ar(e){return e.map(e=>{let t=`# ${e.title}`,n=(e.content?.trim()??``).replace(/<br\s*\/?>/gi,`
`);return n?`${t}\n\n${n}`:t}).join(`

---

`)}function or(){return{version:1,exportedAt:new Date().toISOString(),notes:JSON.parse(localStorage.getItem(`ghichu_notes`)??`[]`),settings:JSON.parse(localStorage.getItem(`ghichu_settings`)??`{}`)}}function sr(e,t){if(t)localStorage.setItem(Ne,JSON.stringify(e.notes)),localStorage.setItem(G,JSON.stringify(e.settings));else{let t=JSON.parse(localStorage.getItem(`ghichu_notes`)??`[]`),n=Array.isArray(e.notes)?e.notes:[],r=new Set(t.map(e=>e.id)),i=[...t,...n.filter(e=>!r.has(e.id))];localStorage.setItem(Ne,JSON.stringify(i))}}function cr({onReload:e}){let[t,n]=(0,W.useState)(()=>localStorage.getItem(Ue)===`true`),[r,i]=(0,W.useState)(!1),[a,o]=(0,W.useState)(null),[s,c]=(0,W.useState)(!1),[l,u]=(0,W.useState)(null),f=(0,W.useRef)(null),p=(0,W.useCallback)(t=>{localStorage.setItem(Ue,String(t)),n(t),t&&ir(),q.reset(),e()},[e]),h=(0,W.useCallback)(()=>{localStorage.removeItem(Ne),localStorage.removeItem(G),ir(),c(!1),q.reset(),e()},[e]),g=(0,W.useCallback)(()=>{let e=or(),t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=tr,r.click(),URL.revokeObjectURL(n)},[]),_=(0,W.useCallback)(async()=>{let e=ar(JSON.parse(localStorage.getItem(`ghichu_notes`)??`[]`));await navigator.clipboard.writeText(e),u(`Copied to clipboard`),setTimeout(()=>u(null),2e3)},[]),ee=(0,W.useCallback)(()=>{f.current?.click()},[]),v=(0,W.useCallback)(async t=>{let n=t.target.files?.[0];if(n){try{let t=await n.text(),i=JSON.parse(t);if(i.version!==1||!i.notes){o(`Invalid file format`);return}sr(i,r),q.reset(),e(),o(`Imported ${Array.isArray(i.notes)?i.notes.length:0} notes`)}catch{o(`Failed to parse file`)}t.target.value=``}},[r,e]);return(0,$.jsxs)(`div`,{"data-test":`ghichu-data-panel`,className:`flex flex-col gap-6 p-4`,children:[(0,$.jsxs)(`div`,{"data-test":`ghichu-data-local-mode`,className:`flex flex-col gap-2`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,$.jsx)(le,{htmlFor:`local-mode-toggle`,className:`text-sm font-medium`,children:`Local storage mode`}),(0,$.jsx)(ue,{"data-test":`ghichu-local-mode-toggle`,id:`local-mode-toggle`,checked:t,onCheckedChange:p})]}),(0,$.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:t?`Data stored in browser only. No backend sync.`:`Data synced with backend API.`})]}),(0,$.jsxs)(`div`,{"data-test":`ghichu-data-export`,className:`flex flex-col gap-2`,children:[(0,$.jsxs)(N,{"data-test":`ghichu-export-button`,variant:`outline`,size:`sm`,className:`w-full justify-start gap-2`,onClick:g,children:[(0,$.jsx)(m,{className:`h-4 w-4`}),`Export data`]}),(0,$.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Downloads notes and settings as JSON.`})]}),(0,$.jsxs)(`div`,{"data-test":`ghichu-data-copy-markdown`,className:`flex flex-col gap-2`,children:[(0,$.jsxs)(N,{"data-test":`ghichu-copy-markdown-button`,variant:`outline`,size:`sm`,className:`w-full justify-start gap-2`,onClick:()=>void _(),children:[(0,$.jsx)(y,{className:`h-4 w-4`}),`Copy as markdown`]}),l&&(0,$.jsx)(`p`,{"data-test":`ghichu-copy-status`,className:`text-xs text-muted-foreground`,children:l}),(0,$.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Copies all notes to clipboard in markdown format.`})]}),(0,$.jsxs)(`div`,{"data-test":`ghichu-data-import`,className:`flex flex-col gap-3`,children:[(0,$.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,$.jsx)(le,{htmlFor:`overwrite-toggle`,className:`text-sm`,children:`Overwrite existing data`}),(0,$.jsx)(ue,{"data-test":`ghichu-overwrite-toggle`,id:`overwrite-toggle`,checked:r,onCheckedChange:i})]}),(0,$.jsxs)(N,{"data-test":`ghichu-import-button`,variant:`outline`,size:`sm`,className:`w-full justify-start gap-2`,onClick:ee,children:[(0,$.jsx)(C,{className:`h-4 w-4`}),`Import data`]}),(0,$.jsx)(`input`,{ref:f,type:`file`,accept:`.json`,className:`hidden`,onChange:e=>void v(e)}),a&&(0,$.jsx)(`p`,{"data-test":`ghichu-import-status`,className:`text-xs text-muted-foreground`,children:a})]}),(0,$.jsxs)(`div`,{"data-test":`ghichu-data-clear`,className:`flex flex-col gap-2 border-t pt-4`,children:[s?(0,$.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,$.jsx)(N,{"data-test":`ghichu-clear-confirm`,variant:`destructive`,size:`sm`,className:`flex-1`,onClick:h,children:`Confirm clear`}),(0,$.jsx)(N,{"data-test":`ghichu-clear-cancel`,variant:`outline`,size:`sm`,className:`flex-1`,onClick:()=>c(!1),children:`Cancel`})]}):(0,$.jsxs)(N,{"data-test":`ghichu-clear-button`,variant:`outline`,size:`sm`,className:`w-full justify-start gap-2 text-destructive hover:text-destructive`,onClick:()=>c(!0),children:[(0,$.jsx)(d,{className:`h-4 w-4`}),`Clear local data`]}),(0,$.jsx)(`p`,{className:`text-xs text-muted-foreground`,children:`Removes all notes and settings from browser storage.`})]}),(0,$.jsx)(er,{})]})}var lr=V(void 0,we()??`default-user`);function ur({onCanvasSelected:e}){let t=R(e=>e.state?.projects??{}),n=R(e=>e.state?.activeProjectId??null),r=R(e=>(n?e.state?.projects[n]:null)?.activeWorkspaceId??null),i=R(e=>{let t=n?e.state?.projects[n]:null;return(r?t?.workspaces[r]:null)?.activeCanvasId??null}),a=(0,W.useMemo)(()=>{let e=new Set;return n&&e.add(`project-${n}`),r&&e.add(`workspace-${r}`),e},[n,r]),o=(0,W.useMemo)(()=>Object.values(t).sort((e,t)=>(e.sortOrder??0)-(t.sortOrder??0)).map(e=>({id:`project-${e.id}`,label:e.name,data:{type:`project`,id:e.id},children:Object.values(e.workspaces).sort((e,t)=>(e.sortOrder??0)-(t.sortOrder??0)).map(t=>({id:`workspace-${t.id}`,label:t.name,data:{type:`workspace`,id:t.id,projectId:e.id},children:Object.values(t.canvases).sort((e,t)=>(e.sortOrder??0)-(t.sortOrder??0)).map(n=>({id:`canvas-${n.id}`,label:n.name,data:{type:`canvas`,id:n.id,workspaceId:t.id,projectId:e.id},children:[]}))}))})),[t]),s=(0,W.useCallback)(t=>{if(t.data?.type===`canvas`){let{id:n,workspaceId:r,projectId:i}=t.data,a=L.getState();a.project.switch(i),a.workspace.switch(r),a.projectCanvas.switch(n),e(n,r,i)}},[e]),c=(0,W.useCallback)(async(e,t)=>{let n=L.getState();if(e.startsWith(`project-`)){let r=e.replace(`project-`,``);await lr.projects.update(r,t),n.project.updateMetadata(r,{name:t})}else if(e.startsWith(`workspace-`)){let r=e.replace(`workspace-`,``);await lr.workspaces.update(r,t),n.workspace.updateMetadata(r,{name:t})}else if(e.startsWith(`canvas-`)){let r=e.replace(`canvas-`,``);await lr.canvases.update(r,t),n.projectCanvas.updateMetadata(r,{name:t})}},[]),l=(0,W.useCallback)(async e=>{let t=L.getState();if(e.startsWith(`project-`)){let n=e.replace(`project-`,``);await lr.projects.delete(n),t.project.delete(n)}else if(e.startsWith(`workspace-`)){let n=e.replace(`workspace-`,``);await lr.workspaces.delete(n),t.workspace.delete(n)}else if(e.startsWith(`canvas-`)){let n=e.replace(`canvas-`,``);await lr.canvases.delete(n),t.projectCanvas.delete(n)}},[]),u=(0,W.useCallback)(e=>{let t=[];if(e.data?.type===`project`&&t.push({id:`add-workspace`,label:`Add Workspace`,icon:(0,$.jsx)(b,{className:`h-3.5 w-3.5`}),onClick:async()=>{let t=e.data.id,n=await lr.workspaces.create(t,`New Workspace`),r=L.getState();r.project.switch(t),r.workspace.create(n.name,null,n.id),H(t,n.id)}}),e.data?.type===`workspace`){let{id:n,projectId:r}=e.data;t.push({id:`add-canvas`,label:`Add Canvas`,icon:(0,$.jsx)(O,{className:`h-3.5 w-3.5`}),onClick:async()=>{let e=await lr.canvases.create(n,`New Canvas`),t=L.getState();t.project.switch(r),t.workspace.switch(n),t.projectCanvas.create(e.name,e.id)}}),t.push({id:`add-sub-workspace`,label:`Add Workspace`,icon:(0,$.jsx)(b,{className:`h-3.5 w-3.5`}),onClick:async()=>{let e=await lr.workspaces.create(r,`New Workspace`),t=L.getState();t.project.switch(r),t.workspace.create(e.name,null,e.id),H(r,e.id)}})}return t.length>0?t:null},[]);return o.length===0?(0,$.jsxs)(`div`,{"data-test":`ghichu-project-tree-empty`,className:`flex flex-col p-2`,children:[(0,$.jsx)(`div`,{"data-test":`ghichu-project-tree-user`,className:`flex items-center gap-2 px-2 pb-2 border-b mb-2`,children:(0,$.jsx)(Ae,{variant:`ghost`,size:`sm`})}),(0,$.jsx)(`p`,{className:`px-2 text-sm text-muted-foreground`,children:`No projects yet.`})]}):(0,$.jsxs)(`div`,{"data-test":`ghichu-project-tree`,className:`h-full overflow-y-auto p-2`,children:[(0,$.jsx)(`div`,{"data-test":`ghichu-project-tree-user`,className:`flex items-center gap-2 px-2 pb-2 border-b mb-2`,children:(0,$.jsx)(Ae,{variant:`ghost`,size:`sm`})}),(0,$.jsx)(U,{data:o,onItemClick:s,onUpdate:c,onDelete:l,selectedId:i?`canvas-${i}`:null,defaultExpandedIds:a,enableEdit:!0,enableDelete:!0,enableDrag:!1,moreOptionsItems:u})]})}var dr=[{id:Be,label:`Logs`,icon:c},{id:Ve,label:`Projects`,icon:ce},{id:He,label:`Data`,icon:l}],fr=new Set(dr.map(e=>e.id));function pr(e){return e&&fr.has(e)?e:Be}function mr({collapsed:e,operations:t,canUndo:n,canRedo:r,onUndo:i,onRedo:o,onToggleCollapse:s,onCanvasSelected:c,onReload:l}){let[u,d]=a(),f=pr(u.get(`tab`)),p=(0,W.useCallback)(e=>{d(t=>{let n=new URLSearchParams(t);return e===`logs`?n.delete(`tab`):n.set(`tab`,e),n},{replace:!0})},[d]);return e?(0,$.jsxs)(`div`,{"data-test":`ghichu-left-panel-collapsed`,className:`flex h-full w-10 flex-col items-center border-r bg-muted/20 py-1 animate-in fade-in duration-300`,children:[(0,$.jsx)(N,{"data-test":`ghichu-left-panel-expand`,variant:`ghost`,size:`icon`,className:`h-8 w-8 mb-1`,onClick:s,title:`Expand left panel`,children:(0,$.jsx)(ie,{className:`h-4 w-4`})}),dr.map(e=>{let t=e.icon,n=f===e.id;return(0,$.jsx)(N,{"data-test":`ghichu-tab-collapsed-${e.id}`,variant:`ghost`,size:`icon`,className:`h-8 w-8 ${n?`text-primary bg-primary/10`:`text-muted-foreground`}`,onClick:()=>{(0,rn.flushSync)(()=>p(e.id)),s()},title:e.label,children:(0,$.jsx)(t,{className:`h-4 w-4`})},e.id)})]}):(0,$.jsxs)(`div`,{"data-test":`ghichu-left-panel`,className:`flex h-full flex-col`,children:[(0,$.jsxs)(`div`,{"data-test":`ghichu-left-panel-tabs`,className:`flex shrink-0 items-center border-b`,children:[(0,$.jsx)(N,{"data-test":`ghichu-left-panel-collapse`,variant:`ghost`,size:`icon`,className:`h-7 w-7 ml-1 shrink-0`,onClick:s,title:`Collapse left panel`,children:(0,$.jsx)(ne,{className:`h-3.5 w-3.5`})}),(0,$.jsx)(`div`,{className:`flex min-w-0 flex-1 items-center overflow-x-auto`,children:dr.map(e=>{let t=e.icon;return(0,$.jsxs)(`button`,{"data-test":`ghichu-tab-${e.id}`,className:`flex shrink-0 items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${f===e.id?`border-b-2 border-primary text-primary`:`text-muted-foreground hover:text-foreground`}`,onClick:()=>p(e.id),children:[(0,$.jsx)(t,{className:`h-3.5 w-3.5`}),e.label]},e.id)})}),(0,$.jsxs)(`div`,{className:`flex shrink-0 items-center gap-0.5 pr-2`,children:[(0,$.jsx)(N,{"data-test":`ghichu-left-panel-undo`,variant:`ghost`,size:`icon`,className:`h-7 w-7`,disabled:!n,onClick:i,title:`Undo (Ctrl+Z)`,children:(0,$.jsx)(g,{className:`h-3.5 w-3.5`})}),(0,$.jsx)(N,{"data-test":`ghichu-left-panel-redo`,variant:`ghost`,size:`icon`,className:`h-7 w-7`,disabled:!r,onClick:o,title:`Redo (Ctrl+Shift+Z)`,children:(0,$.jsx)(D,{className:`h-3.5 w-3.5`})})]})]}),(0,$.jsxs)(`div`,{"data-test":`ghichu-left-panel-content`,className:`min-h-0 flex-1 overflow-y-auto`,children:[f===`logs`&&(0,$.jsx)($n,{operations:t}),f===`projects`&&(0,$.jsx)(ur,{onCanvasSelected:c}),f===`data`&&(0,$.jsx)(cr,{onReload:l})]})]})}var hr={edit:`Edit`,view:`View`},gr={focus:`Focus`,write:`Write`,highlight:`Highlight`},_r={show:`Show`,hide:`Hide`,disable:`Disable`};function vr({isOpen:e,onOpenChange:t,displayMode:n,onToggleDisplayMode:r,timestampFormat:i,onToggleTimestampFormat:a,ghichuMode:o,onToggleGhichuMode:s,editSubMode:c,onToggleEditSubMode:l,showTimestamps:u,onToggleShowTimestamps:d,showCardBorders:f,onToggleShowCardBorders:p,fontStyle:m,onToggleFontStyle:h,markdownPreview:g,onToggleMarkdownPreview:_,disableTextSelection:ee,onToggleDisableTextSelection:v,lineActionsMode:y,onToggleLineActionsMode:b,onClearAllLines:x,container:S}){return(0,$.jsx)(ve,{isOpen:e,onOpenChange:t,container:S,header:`Settings`,blocks:[{id:`mode`,section:`Mode`,items:[{id:`ghichu-mode`,label:`Mode`,value:hr[o],onClick:s},...o===`edit`?[{id:`edit-sub-mode`,label:`Edit Mode`,value:gr[c],onClick:l}]:[]]},{id:`text`,section:`User Interface`,title:`Text`,items:[{id:`font-style`,label:`Font`,value:m===`sans`?`Sans Serif`:`Monospace`,onClick:h},{id:`word-wrap`,label:`Word Wrap`,value:n===`wrap`?`On`:`Off`,onClick:r},{id:`markdown-preview`,label:`Markdown`,value:g?`On`:`Off`,onClick:_}]},{id:`cards`,section:`User Interface`,title:`Cards`,items:[{id:`show-card-borders`,label:`Card Borders`,value:f?`On`:`Off`,onClick:p},{id:`show-timestamps`,label:`Timestamps`,value:u?`On`:`Off`,onClick:d},...u?[{id:`timestamp-format`,label:`Timestamp Format`,value:i===`relative`?`Relative`:`Absolute`,onClick:a}]:[]]},{id:`interactions`,section:`User Interface`,title:`Interactions`,items:[{id:`line-actions-mode`,label:`Line Actions`,value:_r[y],onClick:b},{id:`disable-text-selection`,label:`Text Selection`,value:ee?`Off`:`On`,onClick:v}]},{id:`debug`,section:`Debug`,items:[{id:`clear-all-lines`,label:`Clear All Messages`,onClick:x}]}]})}var yr=V(void 0,we()??`default-user`);function br(){let e=(0,W.useRef)(null),t=(0,W.useRef)(null),{floatingInputRef:n,editorScrollRef:r,handleFloatingSubmit:i,notes:a,activeNote:o,loadNotes:s,selectNote:c,createNote:l,renameNote:u,lines:d,groupedLines:f,operations:p,canUndo:m,canRedo:h,isLoading:g,appendContent:_,applyEdit:y,reorderLines:b,undo:x,redo:C,topicLineIds:w,focusedTopicLineId:te,focusTopic:ne,clearFocus:re,createTopic:ie,removeTopic:ae,refreshState:oe,initialPinnedLineIds:se,syncPinnedLineIds:T,initialHighlightsByLineId:E,syncHighlights:ce,slashMenu:D}=Sn(e),{displayMode:O,timestampFormat:A,ghichuMode:j,editSubMode:le,showTimestamps:ue,showCardBorders:de,fontStyle:P,markdownPreview:fe,disableTextSelection:F,lineActionsMode:I,scrollPosition:pe,leftPanelRatio:me,leftPanelCollapsed:he,toggleDisplayMode:ge,toggleTimestampFormat:_e,toggleGhichuMode:ve,toggleEditSubMode:be,toggleShowTimestamps:xe,toggleShowCardBorders:Se,toggleFontStyle:Ce,toggleMarkdownPreview:z,toggleDisableTextSelection:B,toggleLineActionsMode:V,setEditSubModeTo:we,setScrollPosition:Te,setLeftPanelRatio:Ee,toggleLeftPanelCollapsed:De}=Cn(),[Oe,ke]=(0,W.useState)(()=>localStorage.getItem(Ue)===`true`),H=R(e=>e.state?.activeProjectId??null),U=R(e=>(H?e.state?.projects[H]:null)?.activeWorkspaceId??null),Ae=R(e=>{let t=H?e.state?.projects[H]:null;return(U?t?.workspaces[U]:null)?.activeCanvasId??null}),je=R(e=>{let t=H?e.state?.projects[H]:null;return(U?t?.workspaces[U]:null)?.canvases??null}),Me=(0,W.useMemo)(()=>Oe?a.map(e=>({id:e.id,title:e.title})):je?Object.values(je).sort((e,t)=>e.createdAt-t.createdAt).map(e=>({id:e.id,title:e.name})):[],[je,Oe,a]),Ne=(0,W.useRef)(!1),G=(0,W.useRef)(me);(0,W.useEffect)(()=>{if(g||Ne.current)return;Ne.current=!0;let e=r.current;e&&requestAnimationFrame(()=>{pe===-1?e.scrollTo({top:e.scrollHeight}):e.scrollTo({top:pe})})},[g,pe,r]),(0,W.useEffect)(()=>{let e=()=>{s()};return window.addEventListener(`ghichu:reload`,e),()=>window.removeEventListener(`ghichu:reload`,e)},[s]),(0,W.useEffect)(()=>{},[r]);let Pe=(0,W.useCallback)(()=>{let e=r.current;e&&Te(e.scrollTop)},[r,Te]),Fe=le===`highlight`,Ie=F&&j===`edit`&&!Fe;(0,W.useEffect)(()=>{let e=r.current;if(!e||!Ie)return;let t=e=>{(e.target instanceof HTMLElement?e.target:e.target?.parentElement)?.isContentEditable||e.preventDefault()},n=()=>{let e=window.getSelection();e&&e.toString().length>0&&e.removeAllRanges()};return e.addEventListener(`selectstart`,t),e.addEventListener(`dragstart`,t),e.addEventListener(`touchend`,n),e.addEventListener(`touchcancel`,n),()=>{e.removeEventListener(`selectstart`,t),e.removeEventListener(`dragstart`,t),e.removeEventListener(`touchend`,n),e.removeEventListener(`touchcancel`,n)}},[Ie,r]);let[Le,Re]=(0,W.useState)(!1),[ze,Be]=(0,W.useState)(!1),[Ve,He]=(0,W.useState)(null),[We,Ge]=(0,W.useState)(null),[K,Ke]=(0,W.useState)(null),[Ye,Xe]=(0,W.useState)(new Set),[Ze,$e]=(0,W.useState)(new Map),et=(0,W.useRef)(new ye),[tt,rt]=(0,W.useState)(Qe);(0,W.useEffect)(()=>{$e(new Map(E))},[E]),(0,W.useEffect)(()=>{se.length>0?Xe(new Set(se)):Xe(new Set)},[se]);let it=(0,W.useCallback)(e=>{Xe(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),T([...n]),n})},[T]),at=(0,W.useCallback)(e=>{let t=r.current;if(!t)return;let n=t.querySelector(`[data-line-id="${e}"]`);if(n){let r=n.offsetTop-t.offsetTop-2;t.scrollTo({top:r,behavior:`smooth`}),He(e)}},[r]),ot=(0,W.useMemo)(()=>Ye.size===0?[]:d.filter(e=>Ye.has(e.lineId)),[d,Ye]),st=(0,W.useCallback)((e,t,n)=>{let r=et.current;$e(i=>{let a=i.get(e)??[],o=r.findOverlapping(a,t,n),s;if(o.length>0){let e=new Set(o.map(e=>e.id));s=a.filter(t=>!e.has(t.id))}else{let e=r.createHighlight({start:t,end:n,color:tt});s=[...a,e]}let c=new Map(i);return s.length>0?c.set(e,s):c.delete(e),ce(e,s),c})},[ce,tt]),ct=(0,W.useCallback)(e=>{He(e),Ge(null),e&&w.has(e)?ne(e):re()},[w,ne,re]),lt=(0,W.useCallback)(e=>{Ge(e)},[]),ut=(0,W.useCallback)(()=>{Ge(null)},[]),dt=(0,W.useCallback)(e=>{ft.current=r.current?.scrollTop??0,Ke(e),requestAnimationFrame(()=>{r.current?.scrollTo({top:0})})},[r]),ft=(0,W.useRef)(0),pt=(0,W.useCallback)(()=>{Ke(null),requestAnimationFrame(()=>{r.current?.scrollTo({top:ft.current})})},[r]),mt=(0,W.useMemo)(()=>K?d.find(e=>e.lineId===K)?.text??`Details`:null,[K,d]),ht=(0,W.useMemo)(()=>{if(!K)return f;let e=gn(f,K);if(e.length>0)return e;let t=f.find(e=>e.line.lineId===K);return t?[t]:[]},[K,f]),gt=(0,W.useCallback)((e,t)=>{y(d.map((n,r)=>r===e?t:n.text))},[d,y]),_t=(0,W.useCallback)(e=>{y(d.filter((t,n)=>n!==e).map(e=>e.text))},[d,y]),vt=(0,W.useCallback)((e,t,n)=>{b(e,t,n)},[b]),yt=(0,W.useCallback)((e,t)=>{let n=null;if((0,rn.flushSync)(()=>{_(``,e,t);let r=q.noteFacade.getLines(o?.id??``)[e];r&&(n=r.lineId,He(r.lineId),Ge(r.lineId))}),n){let e=r.current?.querySelector(`[data-line-id="${n}"] [data-test="ghichu-editor-text"]`);if(e){e.contentEditable=`true`,e.focus({preventScroll:!0});let t=document.createRange();t.selectNodeContents(e),t.collapse(!1);let n=window.getSelection();n?.removeAllRanges(),n?.addRange(t)}}},[_,o,r]),bt=(0,W.useCallback)(async()=>{q.noteFacade.flushPendingSave();let e=q.repository;`deleteAllNodes`in e&&await e.deleteAllNodes(),o&&(q.textEditingService.removeLog(o.id),q.topicService.removeTopics(o.id)),He(null),Xe(new Set),re(),await s()},[o,re,s]),xt=(0,W.useCallback)((e,t,n)=>{q.setCanvasId(e),He(null),Ge(null),s()},[s]);(0,W.useEffect)(()=>q.eventBus.subscribe(e=>{e.type===`GHICHU_BDD_TAB_ACTIVATED`&&xt(qe,Je,``)}),[xt]);let St=(0,W.useCallback)(e=>{e!==Ae&&(L.getState().projectCanvas.switch(e),xt(e,U??``,H??``))},[Ae,U,H,xt]),Ct=(0,W.useCallback)(async()=>{if(!U||!H)return;let e=await yr.canvases.create(U,`New Canvas`),t=L.getState();t.project.switch(H),t.workspace.switch(U),t.projectCanvas.create(e.name,e.id),xt(e.id,U,H)},[U,H,xt]),wt=(0,W.useCallback)(async(e,t)=>{await yr.canvases.update(e,t),L.getState().projectCanvas.updateMetadata(e,{name:t})},[]),Tt=M();return(0,$.jsxs)(`div`,{"data-test":`ghichu-page`,ref:e,tabIndex:-1,className:`relative flex h-full w-full overflow-hidden outline-none ${nt[P]}`,children:[(0,$.jsx)(`div`,{className:`hidden overflow-hidden border-r md:block transition-[width] duration-200 ease-in-out ${he?`w-10`:``}`,style:he?void 0:{width:`${me*100}%`},children:(0,$.jsx)(mr,{collapsed:he,operations:p,canUndo:m,canRedo:h,onUndo:x,onRedo:C,onToggleCollapse:De,onCanvasSelected:xt,onReload:()=>{ke(localStorage.getItem(Ue)===`true`),s()}})}),!he&&(0,$.jsx)(`div`,{"data-test":`ghichu-resize-handle`,className:`hidden md:flex w-1.5 shrink-0 cursor-col-resize items-center justify-center hover:bg-primary/10 active:bg-primary/20 transition-colors`,onMouseDown:t=>{t.preventDefault();let n=t.clientX,r=G.current,i=e.current;if(!i)return;let a=i.offsetWidth,o=e=>{let t=e.clientX-n,o=Math.min(.8,Math.max(.15,r+t/a));G.current=o;let s=i.querySelector(`[data-test='ghichu-left-panel'], [data-test='ghichu-left-panel-collapsed']`)?.parentElement;s&&(s.style.width=`${o*100}%`)},s=()=>{document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,s),Ee(G.current)};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,s)},onTouchStart:t=>{let n=t.touches[0];if(!n)return;let r=n.clientX,i=G.current,a=e.current;if(!a)return;let o=a.offsetWidth,s=e=>{let t=e.touches[0];if(!t)return;let n=t.clientX-r,s=Math.min(.8,Math.max(.15,i+n/o));G.current=s;let c=a.querySelector(`[data-test='ghichu-left-panel'], [data-test='ghichu-left-panel-collapsed']`)?.parentElement;c&&(c.style.width=`${s*100}%`)},c=()=>{document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),Ee(G.current)};document.addEventListener(`touchmove`,s),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c)},children:(0,$.jsx)(`div`,{className:`w-px h-8 bg-border rounded-full`})}),Tt&&(0,$.jsx)(`div`,{"data-test":`ghichu-mobile-sidebar`,className:`absolute inset-0 w-full max-w-[100vw] overflow-hidden bg-background transition-transform duration-300 ease-in-out`,style:{transform:ze?`translateX(0)`:`translateX(-100%)`},children:(0,$.jsx)(mr,{collapsed:!1,operations:p,canUndo:m,canRedo:h,onUndo:x,onRedo:C,onToggleCollapse:()=>Be(!1),onCanvasSelected:(e,t,n)=>{xt(e,t,n),Be(!1)},onReload:()=>{ke(localStorage.getItem(`ghichu_local_mode`)===`true`),s()}})}),(0,$.jsxs)(`div`,{"data-test":`ghichu-right-panel`,ref:t,className:`relative flex flex-1 flex-col overflow-hidden transition-transform duration-300 ease-in-out md:!translate-x-0`,style:{transform:Tt&&ze?`translateX(100%)`:`translateX(0)`},children:[(0,$.jsxs)(`div`,{"data-test":`ghichu-tabbar-row`,className:`flex shrink-0 items-center`,children:[(0,$.jsx)(N,{"data-test":`ghichu-mobile-sidebar-trigger`,variant:`ghost`,size:`icon`,className:`h-8 w-8 shrink-0 md:hidden`,onClick:()=>Be(!0),children:(0,$.jsx)(v,{className:`h-4 w-4`})}),(0,$.jsx)(`div`,{className:`min-w-0 flex-1`,children:(0,$.jsx)(Kn,{notes:Me,activeNoteId:Ae,onSelectNote:St,onCreateNote:()=>void Ct(),onRenameNote:(e,t)=>void wt(e,t)})})]}),K&&mt&&(0,$.jsxs)(`div`,{"data-test":`ghichu-topic-breadcrumb`,className:`flex shrink-0 items-center gap-2 border-b bg-muted/30 px-4 py-2`,children:[(0,$.jsx)(N,{"data-test":`ghichu-topic-breadcrumb-back`,variant:`ghost`,size:`icon`,className:`h-6 w-6`,onClick:pt,children:(0,$.jsx)(ee,{className:`h-4 w-4`})}),(0,$.jsx)(`span`,{"data-test":`ghichu-topic-breadcrumb-title`,className:`text-sm font-medium truncate`,children:mt}),(0,$.jsxs)(N,{"data-test":`ghichu-topic-breadcrumb-exit`,variant:`ghost`,size:`sm`,className:`ml-auto h-6 px-2 text-xs text-muted-foreground`,onClick:pt,children:[(0,$.jsx)(S,{className:`mr-1 h-3 w-3`}),`Exit`]})]}),ot.length>0&&(0,$.jsxs)(`div`,{"data-test":`ghichu-pinned-banner`,className:`flex shrink-0 items-center gap-1.5 border-b px-4 py-1`,children:[(0,$.jsx)(k,{className:`h-3 w-3 shrink-0 text-muted-foreground/50`}),(0,$.jsx)(`div`,{"data-test":`ghichu-pinned-banner-items`,className:`flex min-w-0 flex-1 items-center gap-1 overflow-x-auto`,children:ot.map(e=>(0,$.jsx)(`button`,{"data-test":`ghichu-pinned-banner-item`,onClick:()=>at(e.lineId),className:`shrink-0 truncate rounded px-1.5 py-0.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted active:bg-muted/70 transition-colors max-w-[200px]`,children:e.text||`Empty line`},e.lineId))})]}),(0,$.jsx)(`div`,{"data-test":`ghichu-editor-scroll`,ref:r,onScroll:Pe,className:`flex-1 overflow-y-auto p-4 pb-20 ${Ie?`select-none`:`select-text`}`,style:Ie?{WebkitTouchCallout:`none`,WebkitUserSelect:`none`}:void 0,children:!g&&(0,$.jsx)(In,{groupedLines:ht,topicLineIds:w,highlightedLineId:Ve,editingLineId:We,isFocused:!!K,showTimestamps:ue,showCardBorders:de,fontStyle:P,markdownPreview:fe,timestampFormat:A,ghichuMode:j,onLineEdit:gt,onDeleteLine:_t,onMoveLine:vt,onCreateTopic:(e,t,n)=>{ie(e,t,n),ne(e)},onRemoveTopic:ae,onFocusTopic:dt,onHighlightLine:ct,onInsertLine:yt,onStartEditing:lt,onStopEditing:ut,pinnedLineIds:Ye,onTogglePin:it,editSubMode:le,lineActionsMode:I,highlightsByLineId:Ze,onToggleTextHighlight:st,onToggleHighlightMode:()=>we(Fe?`focus`:`highlight`),highlightColor:tt,onSetHighlightColor:rt,onExtractHighlights:e=>{let t=Ze.get(e);if(!t||t.length===0)return;let n=d.find(t=>t.lineId===e);if(!n)return;w.has(e)||ie(e,n.text);let r=[...t].sort((e,t)=>e.start-t.start).map(e=>n.text.slice(e.start,e.end).trim()).filter(Boolean).join(` `),i=f.findIndex(t=>t.line.lineId===e);i<0||!r||_(r,i+1,e)},onClearLineHighlights:e=>{$e(t=>{let n=new Map(t);return n.delete(e),ce(e,[]),n})}})}),(0,$.jsx)(Jn,{ref:n,onSubmit:i,onSettingsOpen:()=>Re(!0),onKeyDown:D.handleKeyDown,onInputChange:D.handleChange,slashMenu:{isOpen:D.isOpen,filteredCommands:D.filteredCommands,selectedIndex:D.selectedIndex,menuPosition:D.menuPosition,selectCommand:D.selectCommand,close:D.close}}),(0,$.jsx)(vr,{isOpen:Le,onOpenChange:Re,displayMode:O,onToggleDisplayMode:ge,timestampFormat:A,onToggleTimestampFormat:_e,ghichuMode:j,onToggleGhichuMode:ve,editSubMode:le,onToggleEditSubMode:be,showTimestamps:ue,onToggleShowTimestamps:xe,showCardBorders:de,onToggleShowCardBorders:Se,fontStyle:P,onToggleFontStyle:Ce,markdownPreview:fe,onToggleMarkdownPreview:z,disableTextSelection:F,onToggleDisableTextSelection:B,lineActionsMode:I,onToggleLineActionsMode:V,onClearAllLines:bt,container:t.current})]})]})}function xr(){return(0,$.jsx)(xe,{app:nn,onTabChange:(0,W.useCallback)(e=>{e===`bdd`&&q.eventBus.emit({type:`GHICHU_BDD_TAB_ACTIVATED`,timestamp:Date.now()})},[]),children:(0,$.jsx)(br,{})})}export{xr as GhichuAppShell};