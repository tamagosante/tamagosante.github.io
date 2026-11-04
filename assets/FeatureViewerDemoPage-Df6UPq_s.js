import{n as e}from"./rolldown-runtime-XKyaHtl9.js";import{t}from"./react-vendor-DiEuJ95v.js";import{Vt as n}from"./radix-ui-ChmltTHn.js";import{t as r}from"./Breadcrumbs-DkPghYrB.js";import{n as i,t as a}from"./parseFeatureContent-DirbmZZ6.js";var o=e({default:()=>s}),s=`Feature: Slash Commands UI
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
`,c=e({default:()=>l}),l=`Feature: Slash Commands
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
`,u=t(),d=n(),f=Object.assign({"/_docs/features/modules/text/slash-commands/slash-commands-ui.feature":o,"/_docs/features/modules/text/slash-commands/slash-commands.feature":c});function p(){return Object.entries(f).map(([e,t])=>a(t.default,e)).filter(e=>e.feature)}var m=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Feature Viewer`}];function h(e){let t=(0,u.c)(4),n;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=p(),t[0]=n):n=t[0];let a=n,o;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(o=a.reduce(g,0),t[1]=o):o=t[1];let s=o,c;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,d.jsxs)(`div`,{"data-test":`feature-viewer-header`,className:`page-header p-6 pb-4 flex-shrink-0`,children:[(0,d.jsx)(`div`,{"data-test":`feature-viewer-breadcrumbs`,className:`breadcrumb-section mb-4`,children:(0,d.jsx)(r,{items:m})}),(0,d.jsx)(`h1`,{"data-test":`feature-viewer-title`,className:`text-3xl font-bold mb-1`,children:`Feature Viewer`}),(0,d.jsxs)(`p`,{"data-test":`feature-viewer-subtitle`,className:`text-muted-foreground`,children:[a.length,` features, `,s,` scenarios`]})]}),t[2]=c):c=t[2];let l;return t[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,d.jsxs)(`div`,{"data-test":`feature-viewer-demo-page`,className:`feature-viewer-demo-page flex-1 flex flex-col h-full`,children:[c,(0,d.jsx)(`div`,{"data-test":`feature-viewer-content`,className:`page-content flex-1 p-6 pt-0 min-h-0`,children:(0,d.jsx)(i,{features:a})})]}),t[3]=l):l=t[3],l}function g(e,t){return e+t.scenarios.length}export{h as FeatureViewerDemoPage};