import{n as e}from"./CanvasModelsV2-XG4v-uhq.js";var t=e=>({x:e.x+e.width/2,y:e.y+e.height/2}),n=(e,n)=>{let r=t(e),i=n.x-r.x,a=n.y-r.y;if(i===0&&a===0)return r;let o=i===0?1/0:e.width/2/Math.abs(i),s=a===0?1/0:e.height/2/Math.abs(a),c=Math.min(o,s);return{x:r.x+i*c,y:r.y+a*c}},r=(e,r,i,a)=>{let o=t(e),s=t(r),c=n(e,s),l=n(r,o),u=s.x-o.x,d=s.y-o.y,f=Math.hypot(u,d)||1,p=u/f,m=d/f,h={x:l.x-p*i,y:l.y-m*i},g=-m,_=p;return{start:c,end:h,tip:l,baseLeft:{x:h.x+g*a,y:h.y+_*a},baseRight:{x:h.x-g*a,y:h.y-_*a}}},i=(e,t,n,r)=>{let i=t.x-e.x,a=t.y-e.y,o=Math.hypot(i,a)||1,s=i/o,c=a/o,l=t.x-s*n,u=t.y-c*n,d=-c,f=s;return{tip:t,baseLeft:{x:l+d*r,y:u+f*r},baseRight:{x:l-d*r,y:u-f*r}}},a={NODE_WIDTH:160,NODE_HEIGHT:64,H_GAP:80,V_GAP:64,MARGIN:40,COLUMNS:4},o=e.TEXT,s=`Straight`,c=`arrow-`,l=1500,u={GRAPH_NAME:`Canvas`,RANKDIR:`LR`,INDENT:`  `},d={DOT_TO_CANVAS:`dot-to-canvas`,CANVAS_TO_DOT:`canvas-to-dot`},f={JSON:`json`,CANVAS:`canvas`},p={DOT:`dot`,JSON:`json`},m={PLAYGROUND:`playground`,TESTING:`testing`},h={NODES:`Nodes`,EDGES:`Edges`,EDGE_ATTRS:`Edge attributes`,COMMENTS:`Comments`,SKIPS:`Skipped statements`,LAYOUT:`Layout`,REVERSE:`Reverse (canvas → DOT)`,ROUND_TRIP:`Round-trip`},g={MIN_SCALE:.1,MAX_SCALE:2.5,ZOOM_STEP:.0015,DEFAULT_SCALE:1,FIT_PADDING:48,FIT_PADDING_MAX_RATIO:.1,MAX_FIT_SCALE:1,NODE_WIDTH:a.NODE_WIDTH,NODE_HEIGHT:a.NODE_HEIGHT,CURVE_MIN_OFFSET:20,CURVE_OFFSET_RATIO:.15,BOW_CLEARANCE_PADDING:24},_={BACKGROUND:`hsl(var(--card))`,BORDER_COLOR:`hsl(var(--border))`,BORDER_WIDTH:`1px`,BORDER_STYLE:`solid`,BORDER_RADIUS:6,TEXT_COLOR:`hsl(var(--card-foreground))`,FONT_SIZE:`13px`,FONT_WEIGHT:`500`,TEXT_ALIGN:`center`,PADDING:8,TITLE_FONT_WEIGHT:700},v={BACKGROUND:`hsl(var(--muted) / 0.3)`,BORDER_COLOR:`hsl(var(--border))`,BORDER_WIDTH:`1px`,BORDER_STYLE:`dashed`,BORDER_RADIUS:10,PADDING:8,LABEL_COLOR:`hsl(var(--muted-foreground))`,LABEL_FONT_SIZE:`12px`,LABEL_FONT_WEIGHT:`600`},y={STROKE_COLOR:`hsl(var(--foreground))`,STROKE_WIDTH:1.5,ARROWHEAD_WIDTH:10,ARROWHEAD_HEIGHT:7,DASH_DASHED:`8,4`,DASH_DOTTED:`2,4`,LABEL_FONT_SIZE:11,LABEL_COLOR:`hsl(var(--muted-foreground))`,LABEL_HALO:`hsl(var(--background))`,LABEL_HALO_WIDTH:3},b=`preview-arrowhead-`,x=`digraph Flow {
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
`;export{x as _,u as a,n as b,o as c,m as d,g as f,_ as g,b as h,d as i,f as l,v as m,c as n,p as o,y as p,s as r,a as s,l as t,h as u,i as v,r as y};