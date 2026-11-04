import{n as e}from"./rolldown-runtime-XKyaHtl9.js";import{t}from"./SimpleEventBus-DY33iPLT.js";import{t as n}from"./tracing-DWJu8uQ_.js";import{i as r}from"./SpecView-_tWfpW21.js";import"./spec-view-2QqIKRJ2.js";var i=class{bus;serviceName=`counter`;_value=0;constructor(e){this.bus=e,n.debug(`counter.init`,{value:this._value})}getValue(){return n.t(`counter.getValue`,{value:this._value}),this._value}increment(e=1){n.debug(`counter.increment.start`,{amount:e,current:this._value});let t=this._value;this._value+=e,this.bus.emit({type:`COUNTER_INCREMENTED`,previousValue:t,newValue:this._value,timestamp:Date.now()}),n.info(`counter.increment.complete`,{previousValue:t,newValue:this._value})}reset(){n.debug(`counter.reset.start`,{current:this._value});let e=this._value;this._value=0,this.bus.emit({type:`COUNTER_RESET`,previousValue:e,timestamp:Date.now()}),n.info(`counter.reset.complete`,{previousValue:e})}},a=class{_eventBus=null;_counterService=null;get eventBus(){return this._eventBus||=new t,this._eventBus}get counterService(){return this._counterService||=new i(this.eventBus),this._counterService}reset(){this._counterService=null,this._eventBus=null}resetForTest(){this._counterService=null,this.eventBus.emit({type:`COUNTER_RESET`,previousValue:0,timestamp:Date.now()})}},o=new a,s={"I have incremented the counter":`I have incremented the counter`,"I have incremented the counter by {int}":`I have incremented the counter by {int}`,"a counter container":`a counter container`},c={"I increment the counter":`I increment the counter`,"I increment the counter by {int}":`I increment the counter by {int}`,"I reset the counter":`I reset the counter`},l={"the action log should contain a {string} action":`the action log should contain a {string} action`,"the counter value should be {int}":`the counter value should be {int}`};function u(e,t){if(!e)throw Error(t)}function d(){return new a}var f={[s[`a counter container`]]:e=>{e.container?e.container.resetForTest():e.container=d(),e.actionLog=[],e.container.eventBus.subscribe(t=>{e.actionLog.push(t)})},[s[`I have incremented the counter`]]:e=>{e.container.counterService.increment(),e.actionLog=[]},[s[`I have incremented the counter by {int}`]]:(e,t)=>{e.container.counterService.increment(t.int0),e.actionLog=[]},[c[`I increment the counter`]]:e=>{e.container.counterService.increment()},[c[`I increment the counter by {int}`]]:(e,t)=>{e.container.counterService.increment(t.int0)},[c[`I reset the counter`]]:e=>{e.container.counterService.reset()},[l[`the counter value should be {int}`]]:(e,t)=>{let n=e.container.counterService.getValue();u(n===t.int0,`Expected counter value ${t.int0}, got ${n}`)},[l[`the action log should contain a {string} action`]]:(e,t)=>{u(e.actionLog.some(e=>e.type===t.string0),`No "${t.string0}" action found in log. Actions: ${e.actionLog.map(e=>e.type).join(`, `)}`)}},p=new r;p.register(`counter`,{features:[`Counter Operations`],createContext:e=>({container:e.counterContainer??null,actionLog:[]}),stepDefinitions:f});var m=[{file:`/home/mine/dev/projects/2_typescript/nodejs/watcher-monorepo-v2/apps/watcher-v1/src/lib/controlled-architecture/example-counter/__specifications__/features/counter.feature`,feature:`Counter Operations`,description:`As a user I want to manage a counter So that I can track numeric values`,scenarios:[{scenario:`Get initial value`,steps:{Given:[`a counter container`],Then:[{text:`the counter value should be 0`,template:`the counter value should be {int}`,params:{int0:0}}]},line:5},{scenario:`Increment counter by 1`,steps:{Given:[`a counter container`],When:[`I increment the counter`],Then:[{text:`the counter value should be 1`,template:`the counter value should be {int}`,params:{int0:1}},{text:`the action log should contain a "COUNTER_INCREMENTED" action`,template:`the action log should contain a {string} action`,params:{string0:`COUNTER_INCREMENTED`}}]},line:9},{scenario:`Increment counter by custom amount`,steps:{Given:[`a counter container`],When:[{text:`I increment the counter by 5`,template:`I increment the counter by {int}`,params:{int0:5}}],Then:[{text:`the counter value should be 5`,template:`the counter value should be {int}`,params:{int0:5}}]},line:15},{scenario:`Multiple increments accumulate`,steps:{Given:[`a counter container`,`I have incremented the counter`],When:[`I increment the counter`],Then:[{text:`the counter value should be 2`,template:`the counter value should be {int}`,params:{int0:2}}]},line:20},{scenario:`Reset counter to zero`,steps:{Given:[`a counter container`,{text:`I have incremented the counter by 10`,template:`I have incremented the counter by {int}`,params:{int0:10}}],When:[`I reset the counter`],Then:[{text:`the counter value should be 0`,template:`the counter value should be {int}`,params:{int0:0}},{text:`the action log should contain a "COUNTER_RESET" action`,template:`the action log should contain a {string} action`,params:{string0:`COUNTER_RESET`}}]},line:26}]}],h=e({default:()=>g}),g=`Feature: Counter Operations
  As a user I want to manage a counter
  So that I can track numeric values

  Scenario: Get initial value
    Given a counter container
    Then the counter value should be 0

  Scenario: Increment counter by 1
    Given a counter container
    When I increment the counter
    Then the counter value should be 1
    And the action log should contain a "COUNTER_INCREMENTED" action

  Scenario: Increment counter by custom amount
    Given a counter container
    When I increment the counter by 5
    Then the counter value should be 5

  Scenario: Multiple increments accumulate
    Given a counter container
    And I have incremented the counter
    When I increment the counter
    Then the counter value should be 2

  Scenario: Reset counter to zero
    Given a counter container
    And I have incremented the counter by 10
    When I reset the counter
    Then the counter value should be 0
    And the action log should contain a "COUNTER_RESET" action
`;export{o as i,m as n,p as r,h as t};