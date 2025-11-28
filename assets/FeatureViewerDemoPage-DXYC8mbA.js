import{n as e,r as t}from"./rolldown-runtime-Dw2cE7zH.js";import{d as n}from"./forms-CI8_RRjb.js";import{Bt as r}from"./radix-ui-q_jnKOvK.js";import"./input-dHv41uhx.js";import"./tooltip-uLJ2Sp5A.js";import{n as i,t as a}from"./FeatureViewer-6LSHrV6W.js";import{t as o}from"./Breadcrumbs-CLRulbmH.js";var s=e({default:()=>c}),c=`Feature: Slash Commands UI
  Visual presentation and interaction patterns for the slash command menu.

  # Menu Visibility
  Scenario: Menu appears when "/" typed at input start
  Scenario: Menu appears when "/" typed after whitespace
  Scenario: Menu stays hidden when "/" typed mid-word
  Scenario: Menu opens when "/command" text is pasted
  Scenario: Menu closes on Escape key
  Scenario: Menu closes when slash character deleted
  Scenario: Menu closes on click outside
  Scenario: Menu auto-closes when single match confirmed with space

  # Menu Positioning
  Scenario: Menu opens upward from cursor position
  Scenario: Menu follows cursor as user types
  Scenario: Menu appears above other canvas elements

  # Menu Layout
  Scenario: Menu constrains width for readability
  Scenario: Menu scrolls when commands exceed visible area
  Scenario: Long command names truncate with ellipsis
  Scenario: Long descriptions truncate with ellipsis

  # Command Filtering
  Scenario: All commands shown when no query typed
  Scenario: Commands filter as user types after slash
  Scenario: Fuzzy matching allows skipped characters like "cps" for "claude project select"
  Scenario: Exact matches appear before partial matches
  Scenario: More specific triggers take priority over shorter triggers
  Scenario: Empty state shows "No commands found" when no matches

  # Keyboard Navigation
  Scenario: Arrow Down moves selection to next command
  Scenario: Arrow Up moves selection to previous command
  Scenario: Arrow keys wrap around at list boundaries
  Scenario: Selected command visually highlighted
  Scenario: Selected item scrolls into view automatically
  Scenario: Selection resets to first item when filtered results change

  # Command Execution
  Scenario: Enter executes selected command and closes menu
  Scenario: Tab autocompletes trigger text without executing
  Scenario: Tab adds space after trigger for argument input
  Scenario: Click on command executes it and closes menu
  Scenario: Hover highlights non-selected items

  # Input Replacement
  Scenario: Command text replaced with result after execution
  Scenario: Cursor positioned at end of replacement text
  Scenario: Text before slash preserved after command execution
  Scenario: Text after cursor preserved after command execution

  # Multi-word Triggers
  Scenario: Menu stays open while typing multi-word trigger like "claude project"
  Scenario: Menu closes after space when full trigger matched
  Scenario: Menu closes after space when no multi-word trigger matches

  # Dynamic Commands
  Scenario: Dynamic command shows search results based on query
  Scenario: Dynamic command waits for minimum characters before searching
  Scenario: Dynamic command shows hint when query too short
  Scenario: Menu stays open on space when in dynamic command mode

  # Programmatic Execution
  Scenario: Commands can be triggered from context menus without opening menu

  # Command Display
  Scenario: Command name displayed prominently
  Scenario: Command description displayed below name
  Scenario: Command description updates based on current state
  Scenario: Command icon displays next to command name when provided
  Scenario: Dynamic command name shows count like "Agent Find (3 selected)"

  # Feedback
  Scenario: Toast shows when /mi toggles incoming mode
  Scenario: Warning toast shows when /translate selected has no content

  # Selector Popovers
  Scenario: Claude project selector opens on /claude project select
  Scenario: Ollama model selector opens on /ollama model select
  Scenario: Selector closes on /close command
`,l=e({default:()=>u}),u=`Feature: Slash Commands
  Chat input supports slash commands triggered by "/" at start or after whitespace.

  # AI Mode Commands
  Scenario: /claude switches input to Claude AI mode
  Scenario: /claude project select opens Claude project selector
  Scenario: /ollama switches input to Ollama LLM mode
  Scenario: /ollama model select opens Ollama model selector
  Scenario: /close resets mode and clears session history

  # Fork Commands
  Scenario: /fork continues chat using source wiki-link as context
  Scenario: /fork select opens selector to choose fork source
  Scenario: /fork model selects Ollama model for fork conversation

  # Agent Commands
  Scenario: /agent find queries nodes by natural language
  Scenario: /agent find page adds pagination to node search
  Scenario: /agent find selected searches only selected nodes
  Scenario: /agent find recent searches N most recently updated nodes
  Scenario: /agent tags suggests tags from previous message wiki-links
  Scenario: /agent tags selected suggests tags for selected nodes

  # Other Commands
  Scenario: /translate selected translates selected node content EN to VN
  Scenario: /mi toggles message incoming mode for left/right alignment

  # Menu Behavior
  Scenario: Menu opens on "/" at start or after whitespace
  Scenario: Fuzzy matching filters commands as user types
  Scenario: Arrow keys navigate menu selection
  Scenario: Tab autocompletes trigger without executing
  Scenario: Enter executes selected command
  Scenario: Escape closes menu
`,d=t(n(),1),f=r(),p=Object.assign({"/_docs/features/modules/text/slash-commands/slash-commands-ui.feature":s,"/_docs/features/modules/text/slash-commands/slash-commands.feature":l});function m(){return Object.entries(p).map(([e,t])=>i(t.default,e)).filter(e=>e.feature)}var h=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Feature Viewer`}];function g({logger:e}){let t=(0,d.useMemo)(()=>m(),[]),n=(0,d.useMemo)(()=>t.reduce((e,t)=>e+t.scenarios.length,0),[t]);return(0,f.jsxs)(`div`,{"data-test":`feature-viewer-demo-page`,className:`feature-viewer-demo-page flex-1 flex flex-col h-full`,children:[(0,f.jsxs)(`div`,{"data-test":`feature-viewer-header`,className:`page-header p-6 pb-4 flex-shrink-0`,children:[(0,f.jsx)(`div`,{"data-test":`feature-viewer-breadcrumbs`,className:`breadcrumb-section mb-4`,children:(0,f.jsx)(o,{items:h})}),(0,f.jsx)(`h1`,{"data-test":`feature-viewer-title`,className:`text-3xl font-bold mb-1`,children:`Feature Viewer`}),(0,f.jsxs)(`p`,{"data-test":`feature-viewer-subtitle`,className:`text-muted-foreground`,children:[t.length,` features, `,n,` scenarios`]})]}),(0,f.jsx)(`div`,{"data-test":`feature-viewer-content`,className:`page-content flex-1 p-6 pt-0 min-h-0`,children:(0,f.jsx)(a,{features:t})})]})}export{g as FeatureViewerDemoPage};