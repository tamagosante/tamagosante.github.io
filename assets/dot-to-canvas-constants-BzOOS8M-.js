import{x as e}from"./canvasConstantsV2-LYT_ojpB.js";var t={NODE_WIDTH:160,NODE_HEIGHT:64,H_GAP:80,V_GAP:64,MARGIN:40,COLUMNS:4},n=e.TEXT,r=`Straight`,i=`arrow-`,a=1500,o={GRAPH_NAME:`Canvas`,RANKDIR:`LR`,INDENT:`  `},s={DOT_TO_CANVAS:`dot-to-canvas`,CANVAS_TO_DOT:`canvas-to-dot`},c={JSON:`json`,CANVAS:`canvas`},l={DOT:`dot`,JSON:`json`},u={PLAYGROUND:`playground`,TESTING:`testing`},d={NODES:`Nodes`,EDGES:`Edges`,EDGE_ATTRS:`Edge attributes`,COMMENTS:`Comments`,SKIPS:`Skipped statements`,LAYOUT:`Layout`,REVERSE:`Reverse (canvas → DOT)`,ROUND_TRIP:`Round-trip`},f={MIN_SCALE:.1,MAX_SCALE:2.5,ZOOM_STEP:.0015,DEFAULT_SCALE:1,FIT_PADDING:48,MAX_FIT_SCALE:1,NODE_WIDTH:t.NODE_WIDTH,NODE_HEIGHT:t.NODE_HEIGHT,CURVE_MIN_OFFSET:20,CURVE_OFFSET_RATIO:.15,BOW_CLEARANCE_PADDING:24},p={BACKGROUND:`hsl(var(--card))`,BORDER_COLOR:`hsl(var(--border))`,BORDER_WIDTH:`1px`,BORDER_STYLE:`solid`,BORDER_RADIUS:6,TEXT_COLOR:`hsl(var(--card-foreground))`,FONT_SIZE:`13px`,FONT_WEIGHT:`500`,TEXT_ALIGN:`center`,PADDING:8,TITLE_FONT_WEIGHT:700},m={BACKGROUND:`hsl(var(--muted) / 0.3)`,BORDER_COLOR:`hsl(var(--border))`,BORDER_WIDTH:`1px`,BORDER_STYLE:`dashed`,BORDER_RADIUS:10,PADDING:8,LABEL_COLOR:`hsl(var(--muted-foreground))`,LABEL_FONT_SIZE:`12px`,LABEL_FONT_WEIGHT:`600`},h={STROKE_COLOR:`hsl(var(--foreground))`,STROKE_WIDTH:1.5,ARROWHEAD_WIDTH:10,ARROWHEAD_HEIGHT:7,DASH_DASHED:`8,4`,DASH_DOTTED:`2,4`,LABEL_FONT_SIZE:11,LABEL_COLOR:`hsl(var(--muted-foreground))`,LABEL_HALO:`hsl(var(--background))`,LABEL_HALO_WIDTH:3},g=`preview-arrowhead-`,_=`digraph Flow {
  rankdir=LR;

  start   [label="Start"];
  collect [label="Collect Input"];
  decide  [label="Valid?"];
  process [label="Process"];
  fail    [label="Show Error"];
  done    [label="Done"];

  start -> collect;
  collect -> decide;
  decide -> process [label="yes"];
  decide -> fail    [label="no"];
  process -> done;
  fail -> collect;
}
`;export{_,o as a,n as c,u as d,f,p as g,g as h,s as i,c as l,m,i as n,l as o,h as p,r,t as s,a as t,d as u};