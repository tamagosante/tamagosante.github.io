import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{f as t}from"./forms-B7BVNXre.js";import{t as n}from"./react-vendor-AaAAdbhg.js";import{Vt as r}from"./radix-ui-D0bHPE5O.js";import{t as i}from"./Breadcrumbs-1WPAGHYa.js";import{n as a,r as o,t as s}from"./BreadcrumbsReveal-TPfDL3yV.js";import{t as c}from"./useGridLayout-CckxamO7.js";import{t as l}from"./DynamicGrid-DrcNdrbD.js";import{a as u,o as d,s as f}from"./pointer-CbAKJOdv.js";import{a as p,c as m,d as h,f as g,l as _,o as v,r as y,t as b,u as x}from"./targets-CkxyElsA.js";var S=e(t(),1),C=n(),w=`light-reflection`,T={rowFractions:[1],rows:[{colFractions:[.26,.74]}]},ee=`light-reflection-grid`,te=`Examples`,ne=`Viewport`,re=`w-full shrink`,E=[3.2,1.7,3.2],D={initialYaw:.6,initialPitch:.12,distance:2.6,target:[0,-.7,0],dragRadians:4,minPitch:-.22,maxPitch:.5,damping:7,autoYawSpeed:.05,autoRotateDelayMs:2500},O={initial:6,max:16,wheelStep:60},k=[{radius:1.75,speed:.31,phase:0,height:.15,bobSpeed:.53,size:.13},{radius:1.35,speed:-.42,phase:2.2,height:.55,bobSpeed:.71,size:.1},{radius:2.05,speed:.23,phase:4.1,height:-.25,bobSpeed:.37,size:.15}],A=.28,j=.01;function M(){let e=!1,t=0;return n=>{n.down&&(e||(t=0),t+=Math.abs(n.dx)+Math.abs(n.dy));let r=e&&!n.down&&t<j;return e=n.down,r}}var N=(e,t,n)=>Math.min(n,Math.max(t,e));function P(e){let t={yaw:e.initialYaw,pitch:e.initialPitch},n={...t},r=M();return{update(i,a){let o=r(i);i.down?(t.yaw-=i.dx*e.dragRadians,t.pitch=N(t.pitch-i.dy*e.dragRadians,e.minPitch,e.maxPitch)):i.idleMs>e.autoRotateDelayMs&&(t.yaw+=e.autoYawSpeed*a);let s=1-Math.exp(-e.damping*a);n.yaw+=(t.yaw-n.yaw)*s,n.pitch+=(t.pitch-n.pitch)*s;let c=Math.cos(n.pitch);return{position:[e.target[0]+e.distance*c*Math.sin(n.yaw),e.target[1]+e.distance*Math.sin(n.pitch),e.target[2]+e.distance*c*Math.cos(n.yaw)],tapped:o}}}}function F(e,t){let n=[t[0]-e[0],t[1]-e[1],t[2]-e[2]],r=Math.hypot(n[0],n[1],n[2]),i=[n[0]/r,n[1]/r,n[2]/r],a=Math.hypot(i[2],i[0]),o=[-i[2]/a,0,i[0]/a];return{right:o,up:[o[1]*i[2]-o[2]*i[1],o[2]*i[0]-o[0]*i[2],o[0]*i[1]-o[1]*i[0]],distance:r}}var ie=`
vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
`,ae=`
vec3 cameraRay(vec2 fragCoord, vec3 ro, vec3 target, float focal) {
  vec2 ndc = (2.0 * fragCoord - uResolution) / min(uResolution.x, uResolution.y);
  vec3 f = normalize(target - ro);
  vec3 r = normalize(cross(f, vec3(0.0, 1.0, 0.0)));
  vec3 u = cross(r, f);
  return normalize(f * focal + r * ndc.x + u * ndc.y);
}
`,[oe,se,ce]=E.map(e=>e.toFixed(3)),[le,ue,de]=D.target.map(e=>e.toFixed(3)),fe=`#version 300 es
precision highp float;
in vec2 vUv;
uniform vec2 uResolution;
uniform vec3 uCamPos;
uniform float uTime;
uniform int uBounces;
uniform float uDepthView;
uniform vec4 uOrbs[3];
out vec4 fragColor;

const int ORB_COUNT = 3;
const int MAX_BOUNCES = ${O.max};
const vec3 ROOM = vec3(${oe}, ${se}, ${ce});
const vec3 TARGET = vec3(${le}, ${ue}, ${de});
const vec3 ORB_COLORS[3] = vec3[3](
  vec3(1.0, 0.32, 0.18),
  vec3(0.25, 0.75, 1.0),
  vec3(0.85, 0.3, 1.0)
);
const vec4 CHROME_BALL = vec4(-0.7, -1.0, 0.0, 0.7);
const vec4 GOLD_BALL = vec4(0.72, -1.27, 0.5, 0.43);

const int MAT_ROOM = 0;
const int MAT_CHROME = 1;
const int MAT_GOLD = 2;
const int MAT_ORB = 3;

const float FOCAL = 1.25;
const float NUDGE = 0.0015;
const float MIN_THROUGHPUT = 0.012;
const float FRAME_WIDTH = 0.07;
const float STRIP_HEIGHT = 1.28;
const float STRIP_HALF_WIDTH = 0.022;
const float TAU = 6.28318530718;

struct Hit {
  float t;
  vec3 n;
  int material;
  int orb;
};

${ae}
${ie}

float sphereDistance(vec3 ro, vec3 rd, vec4 sphere) {
  vec3 oc = ro - sphere.xyz;
  float b = dot(oc, rd);
  float h = b * b - dot(oc, oc) + sphere.w * sphere.w;
  if (h < 0.0) return -1.0;
  return -b - sqrt(h);
}

void hitSphere(vec3 ro, vec3 rd, vec4 sphere, int material, int orb, inout Hit hit) {
  float t = sphereDistance(ro, rd, sphere);
  if (t > 0.0 && t < hit.t) {
    hit.t = t;
    hit.n = (ro + rd * t - sphere.xyz) / sphere.w;
    hit.material = material;
    hit.orb = orb;
  }
}

Hit traceScene(vec3 ro, vec3 rd) {
  // Inside a box, the ray can only leave through the far plane on each axis.
  vec3 safeRd = mix(rd, vec3(1e-5), lessThan(abs(rd), vec3(1e-5)));
  vec3 side = step(vec3(0.0), safeRd) * 2.0 - 1.0;
  vec3 ts = (side * ROOM - ro) / safeRd;

  Hit hit;
  hit.material = MAT_ROOM;
  hit.orb = 0;
  if (ts.x < ts.y && ts.x < ts.z) {
    hit.t = ts.x;
    hit.n = vec3(-side.x, 0.0, 0.0);
  } else if (ts.y < ts.z) {
    hit.t = ts.y;
    hit.n = vec3(0.0, -side.y, 0.0);
  } else {
    hit.t = ts.z;
    hit.n = vec3(0.0, 0.0, -side.z);
  }

  hitSphere(ro, rd, CHROME_BALL, MAT_CHROME, 0, hit);
  hitSphere(ro, rd, GOLD_BALL, MAT_GOLD, 0, hit);
  for (int i = 0; i < ORB_COUNT; i++) hitSphere(ro, rd, uOrbs[i], MAT_ORB, i, hit);
  return hit;
}

// Analytic occlusion of a sphere seen from a surface point: gives the balls contact shadows.
float sphereOcclusion(vec3 p, vec3 n, vec4 sphere) {
  vec3 toSphere = sphere.xyz - p;
  float d2 = dot(toSphere, toSphere);
  float cosine = max(dot(n, toSphere / sqrt(d2)), 0.0);
  return 1.0 - cosine * sphere.w * sphere.w / d2;
}

vec3 orbLighting(vec3 p, vec3 n) {
  vec3 sum = vec3(0.0);
  for (int i = 0; i < ORB_COUNT; i++) {
    vec3 toOrb = uOrbs[i].xyz - p;
    float d2 = dot(toOrb, toOrb);
    sum += ORB_COLORS[i] * max(dot(n, toOrb / sqrt(d2)), 0.0) / (0.25 + d2);
  }
  return sum;
}

// The light each orb scatters into the air along this stretch of ray: reads as bloom.
vec3 orbHalos(vec3 ro, vec3 rd, float maxT) {
  vec3 sum = vec3(0.0);
  for (int i = 0; i < ORB_COUNT; i++) {
    vec3 toOrb = uOrbs[i].xyz - ro;
    float t = clamp(dot(toOrb, rd), 0.0, maxT);
    vec3 miss = toOrb - rd * t;
    sum += ORB_COLORS[i] * uOrbs[i].w * uOrbs[i].w * 0.35 / (0.012 + dot(miss, miss));
  }
  return sum;
}

vec3 neon(vec3 p) {
  float along = atan(p.z, p.x) / TAU + uTime * 0.025;
  return 0.5 + 0.5 * cos(TAU * (vec3(0.0, 0.33, 0.67) + along));
}

// Shades one hit. Writes what the next bounce gets: the head-on reflectance of the surface.
vec3 shade(Hit hit, vec3 p, out vec3 f0) {
  if (hit.material == MAT_ORB) {
    f0 = vec3(0.0);
    return ORB_COLORS[hit.orb] * 5.0;
  }
  if (hit.material == MAT_CHROME) {
    f0 = vec3(0.93, 0.94, 0.96);
    return vec3(0.0);
  }
  if (hit.material == MAT_GOLD) {
    f0 = vec3(1.0, 0.76, 0.34);
    return vec3(0.0);
  }

  // Two axes at their limit means this point is on an edge of the box: dark metal frame.
  vec3 edge = step(ROOM - FRAME_WIDTH, abs(p));
  if (edge.x + edge.y + edge.z >= 2.0) {
    f0 = vec3(0.02);
    return vec3(0.012) + orbLighting(p, hit.n) * 0.04;
  }

  bool isWall = abs(hit.n.y) < 0.5;
  if (isWall && abs(abs(p.y) - STRIP_HEIGHT) < STRIP_HALF_WIDTH) {
    f0 = vec3(0.0);
    return neon(p) * 4.0;
  }
  if (isWall || hit.n.y < 0.0) {
    f0 = vec3(0.91, 0.92, 0.94);
    return vec3(0.0);
  }

  // Polished black floor: reflects at grazing angles, shows light from the orbs up close.
  f0 = vec3(0.14);
  vec2 cell = abs(fract(p.xz) - 0.5);
  float groove = smoothstep(0.485, 0.5, max(cell.x, cell.y));
  float occlusion = sphereOcclusion(p, hit.n, CHROME_BALL) * sphereOcclusion(p, hit.n, GOLD_BALL);
  return (vec3(0.05, 0.055, 0.07) + groove * 0.12) * orbLighting(p, hit.n) * occlusion;
}

vec3 depthColor(float depth) {
  return 0.5 + 0.5 * cos(TAU * (depth * 0.85 + vec3(0.55, 0.75, 0.95)));
}

vec3 radiance(vec3 ro, vec3 rd) {
  vec3 light = vec3(0.0);
  vec3 throughput = vec3(1.0);
  int depth = 0;

  for (int bounce = 0; bounce <= uBounces; bounce++) {
    Hit hit = traceScene(ro, rd);
    vec3 p = ro + rd * hit.t;
    vec3 f0;
    light += throughput * (orbHalos(ro, rd, hit.t) + shade(hit, p, f0));
    depth = bounce;

    float grazing = pow(1.0 - clamp(-dot(rd, hit.n), 0.0, 1.0), 5.0);
    throughput *= f0 + (1.0 - f0) * grazing;
    if (max(throughput.r, max(throughput.g, throughput.b)) < MIN_THROUGHPUT) break;
    ro = p + hit.n * NUDGE;
    rd = reflect(rd, hit.n);
  }
  float span = float(max(uBounces, 1));
  return mix(light, depthColor(float(depth) / span), uDepthView);
}

// One tick per possible bounce, top right, since the wheel otherwise has no readout.
float bounceGauge(vec2 frag) {
  const float PITCH = 7.0;
  const float TICK_HEIGHT = 10.0;
  const float MARGIN = 16.0;
  vec2 p = frag - vec2(uResolution.x - MARGIN - PITCH * float(MAX_BOUNCES), uResolution.y - MARGIN - TICK_HEIGHT);
  if (p.x < 0.0 || p.y < 0.0 || p.y > TICK_HEIGHT || p.x > PITCH * float(MAX_BOUNCES)) return 0.0;
  if (fract(p.x / PITCH) > 0.55) return 0.0;
  return floor(p.x / PITCH) < float(uBounces) ? 0.9 : 0.2;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec3 color = radiance(uCamPos, cameraRay(frag + vec2(0.25, -0.25), uCamPos, TARGET, FOCAL));
  color += radiance(uCamPos, cameraRay(frag + vec2(-0.25, 0.25), uCamPos, TARGET, FOCAL));
  color = aces(color * 0.5);
  color = pow(color, vec3(1.0 / 2.2));

  vec2 centered = vUv - 0.5;
  color *= 1.0 - dot(centered, centered) * 0.7;
  color = mix(color, vec3(1.0), bounceGauge(frag));
  fragColor = vec4(color, 1.0);
}
`,pe=4,me=`uOrbs[0]`,he=(e,t,n)=>Math.min(n,Math.max(t,e));function ge(e){let{program:t,uniforms:n}=_(e,x,fe),r=P(D),i=new Float32Array(k.length*pe),a=O.initial,o=!1,s=0;return{frame({time:c,dt:l,width:u,height:d,pointer:f}){let p=r.update(f,l);p.tapped&&(o=!o),a=he(a-f.wheel/O.wheelStep,0,O.max),s+=(+!!o-s)*(1-Math.exp(-6*l)),k.forEach((e,t)=>{let n=c*e.speed+e.phase;i.set([Math.cos(n)*e.radius,e.height+Math.sin(c*e.bobSpeed+e.phase)*A,Math.sin(n)*e.radius,e.size],t*pe)}),e.useProgram(t),e.uniform2f(n.uResolution,u,d),e.uniform3f(n.uCamPos,p.position[0],p.position[1],p.position[2]),e.uniform1f(n.uTime,c),e.uniform1i(n.uBounces,Math.round(a)),e.uniform1f(n.uDepthView,s),e.uniform4fv(n[me],i),h(e,null,u,d)},dispose(){e.deleteProgram(t)}}}var _e={id:`infinity-room`,title:`Infinity Room`,tagline:`A mirrored box: scroll to add reflections one at a time`,description:`Every wall is a mirror, so each bounce adds one more room to the tunnel. Scroll down to zero and the mirrors go black; scroll back up and watch the depth build, tick by tick. Tap to colour each pixel by how many bounces its light took.`,techniques:[`Recursive ray tracing`,`Fresnel (Schlick)`,`Analytic spheres`,`Bounce-depth view`],controls:[`Drag to orbit`,`Scroll for bounces (0–16)`,`Tap for depth view`,`Idle → auto-rotate`],pixelRatioCap:1,factory:ge},ve={initialYaw:.3,initialPitch:.18,distance:4.3,target:[0,0,0],dragRadians:4,minPitch:-1.2,maxPitch:1.2,damping:7,autoYawSpeed:.08,autoRotateDelayMs:2500},ye=1.7,be=[{size:.42,speed:[.5,.37,.43],phase:[0,1.1,2.3],reach:[.7,.55,.6]},{size:.68,speed:[.23,.31,.19],phase:[1.7,.4,3.1],reach:[.32,.28,.3]},{size:.46,speed:[.41,.29,.53],phase:[3.3,2.1,.7],reach:[.95,.6,.7]},{size:.38,speed:[.33,.47,.27],phase:[5.1,3.7,1.9],reach:[.85,.8,.5]},{size:.34,speed:[.57,.21,.39],phase:[2.4,5.3,4.2],reach:[.6,.95,.75]},{size:.3,speed:[.27,.59,.33],phase:[4.4,.9,5.7],reach:[1.05,.5,.9]},{size:.26,speed:[.61,.43,.23],phase:[.8,4.6,3.6],reach:[.75,1,.95]}],xe={maxReach:1.5,followRate:5},Se={impulse:4.2,stiffness:26,damping:4.5},I={initialNm:340,minNm:120,maxNm:760,nmPerWheelPixel:.35},Ce=`#version 300 es
precision highp float;
in vec2 vUv;
uniform vec2 uResolution;
uniform vec3 uCamPos;
uniform float uTime;
uniform float uFilmNm;
uniform vec4 uBlobs[7];
out vec4 fragColor;

const int BLOB_COUNT = 7;
const float FOCAL = ${ye.toFixed(3)};
const vec3 TARGET = vec3(0.0);
const float BLEND = 0.42;
const float BOUND_RADIUS = 3.4;
const int PRIMARY_STEPS = 72;
const int REFLECTION_STEPS = 22;
const float FAR = 9.0;
const float TAU = 6.28318530718;

${ae}
${ie}

float smoothMin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / k;
  return min(a, b) - h * h * k * 0.25;
}

float surface(vec3 p) {
  float d = length(p - uBlobs[0].xyz) - uBlobs[0].w;
  for (int i = 1; i < BLOB_COUNT; i++) {
    d = smoothMin(d, length(p - uBlobs[i].xyz) - uBlobs[i].w, BLEND);
  }
  // Slow surface tension ripples.
  float ripple = sin(p.x * 7.0 + uTime * 0.9) * sin(p.y * 8.0 - uTime * 0.7) * sin(p.z * 7.5 + uTime * 0.5);
  return d + ripple * 0.012;
}

vec3 surfaceNormal(vec3 p) {
  const vec2 e = vec2(1.0, -1.0) * 0.0012;
  return normalize(
    e.xyy * surface(p + e.xyy) +
    e.yyx * surface(p + e.yyx) +
    e.yxy * surface(p + e.yxy) +
    e.xxx * surface(p + e.xxx)
  );
}

// Returns the distance to the surface along the ray, or -1.0.
float march(vec3 ro, vec3 rd, float start, float stop, int steps) {
  float t = start;
  for (int i = 0; i < steps; i++) {
    float d = surface(ro + rd * t);
    if (d < 0.0008 * t) return t;
    t += d * 0.92;
    if (t > stop) break;
  }
  return -1.0;
}

// Soft-edged rectangle on the plane one unit along the light's axis.
float softbox(vec2 uv, vec2 halfSize, float softness) {
  vec2 edge = 1.0 - smoothstep(halfSize - softness, halfSize + softness, abs(uv));
  return edge.x * edge.y;
}

// The studio, in HDR. Only reflections ever see these lights, as in a product shot.
vec3 studio(vec3 d) {
  vec3 color = mix(vec3(0.012, 0.012, 0.018), vec3(0.075, 0.08, 0.105), smoothstep(-0.7, 0.9, d.y));
  if (d.y > 0.02) color += vec3(1.0, 0.97, 0.92) * 9.0 * softbox(d.xz / d.y, vec2(1.15, 0.5), 0.05);
  if (d.x < -0.02) color += vec3(1.0, 0.62, 0.34) * 5.0 * softbox(d.yz / -d.x, vec2(1.3, 0.12), 0.03);
  if (d.x > 0.02) color += vec3(0.3, 0.55, 1.0) * 5.5 * softbox(d.yz / d.x, vec2(0.9, 0.26), 0.05);
  if (d.z < -0.02) color += vec3(0.95, 0.32, 0.7) * 3.0 * softbox(d.xy / -d.z, vec2(1.6, 0.05), 0.02);
  // A low strip of floor bounce, so undersides never reflect pure black.
  color += vec3(0.14, 0.12, 0.2) * (1.0 - smoothstep(-0.85, -0.2, d.y));
  return color;
}

// What the camera sees past the object: dim enough that the chrome holds all the attention.
vec3 backdrop(vec3 d) {
  float horizon = exp(-abs(d.y + 0.05) * 5.0);
  return vec3(0.007, 0.008, 0.013) + vec3(0.03, 0.028, 0.05) * horizon;
}

// Smooth pseudo-noise; the film's thickness drifts with it like oil on water.
float filmFlow(vec3 p) {
  vec3 q = p * 1.7 + vec3(0.0, uTime * 0.09, uTime * 0.05);
  float n = sin(q.x + sin(q.y * 1.3 + uTime * 0.11)) * sin(q.y * 1.1 + sin(q.z * 1.7));
  n += 0.5 * sin(q.z * 2.3 + sin(q.x * 2.1 - uTime * 0.07)) * sin(q.x * 1.9 + q.y);
  return n / 1.5;
}

// Interference between light reflected off the film's top and off the metal beneath it.
vec3 thinFilm(float cosI, float thicknessNm) {
  const float FILM_INDEX = 1.38;
  const vec3 WAVELENGTHS = vec3(640.0, 535.0, 455.0);
  float sinT2 = (1.0 - cosI * cosI) / (FILM_INDEX * FILM_INDEX);
  float pathDifference = 2.0 * FILM_INDEX * thicknessNm * sqrt(1.0 - sinT2);
  return 0.5 + 0.5 * cos(TAU * pathDifference / WAVELENGTHS);
}

vec3 chromeTint(vec3 p, vec3 n, vec3 view) {
  float cosI = clamp(dot(n, -view), 0.0, 1.0);
  float thickness = uFilmNm * (1.0 + 0.42 * filmFlow(p));
  // Metal keeps most of its mirror; the film colours it without turning it to paint.
  vec3 film = mix(vec3(1.0), thinFilm(cosI, thickness) * 1.55, 0.78);
  float grazing = pow(1.0 - cosI, 5.0);
  return mix(vec3(0.82, 0.84, 0.88), vec3(1.0), grazing) * film;
}

vec3 chrome(vec3 p, vec3 rd) {
  vec3 n = surfaceNormal(p);
  vec3 tint = chromeTint(p, n, rd);
  vec3 bounced = reflect(rd, n);

  // One extra march, so the blobs reflect each other and not only the room.
  float t = march(p + n * 0.012, bounced, 0.012, 3.0, REFLECTION_STEPS);
  if (t < 0.0) return tint * studio(bounced);
  vec3 q = p + n * 0.012 + bounced * t;
  vec3 m = surfaceNormal(q);
  return tint * chromeTint(q, m, bounced) * studio(reflect(bounced, m));
}

void main() {
  vec3 rd = cameraRay(gl_FragCoord.xy, uCamPos, TARGET, FOCAL);

  // Skip the empty space: most of the frame never gets near the blobs.
  float b = dot(uCamPos, rd);
  float h = b * b - dot(uCamPos, uCamPos) + BOUND_RADIUS * BOUND_RADIUS;
  float t = -1.0;
  if (h > 0.0) t = march(uCamPos, rd, max(-b - sqrt(h), 0.0), FAR, PRIMARY_STEPS);

  vec3 color = t > 0.0 ? chrome(uCamPos + rd * t, rd) : backdrop(rd);
  color = pow(aces(color), vec3(1.0 / 2.2));

  vec2 centered = vUv - 0.5;
  color *= 1.0 - dot(centered, centered) * 0.6;
  fragColor = vec4(color, 1.0);
}
`,we=4,Te=`uBlobs[0]`,Ee=0,De=[0,1,2],Oe=(e,t,n)=>Math.min(n,Math.max(t,e));function ke(e){let{program:t,uniforms:n}=_(e,x,Ce),r=P(ve),i=new Float32Array(be.length*we),a=I.initialNm,o=0,s=0,c=0,l=[0,0,0],f=(e,t,n,r)=>{let{right:i,up:a,distance:o}=F(e,ve.target),s=o/ye,c=Math.hypot(t*s,n*s),u=c>xe.maxReach?xe.maxReach/c:1;for(let e of De){let o=(i[e]*t+a[e]*n)*s*u;l[e]+=(o-l[e])*r}};return{frame({time:p,dt:m,width:g,height:_,pointer:v}){let y=r.update(v,m),[b,x]=u(v,d(g,_));a=Oe(a+v.wheel*I.nmPerWheelPixel,I.minNm,I.maxNm),y.tapped&&(s+=Se.impulse),s+=(-Se.stiffness*o-Se.damping*s)*m,o+=s*m;let S=1-Math.exp(-xe.followRate*m),C=v.inside&&!v.down;c+=(+!!C-c)*S,C&&f(y.position,b,x,S),be.forEach((e,t)=>{for(let n of De){let r=Math.sin(p*e.speed[n]+e.phase[n])*e.reach[n]*(1+o);i[t*we+n]=t===Ee?r+(l[n]-r)*c:r}i[t*we+De.length]=e.size}),e.useProgram(t),e.uniform2f(n.uResolution,g,_),e.uniform3f(n.uCamPos,y.position[0],y.position[1],y.position[2]),e.uniform1f(n.uTime,p),e.uniform1f(n.uFilmNm,a),e.uniform4fv(n[Te],i),h(e,null,g,_)},dispose(){e.deleteProgram(t)}}}var Ae={id:`liquid-chrome`,title:`Liquid Chrome`,tagline:`Molten metal in a photo studio, under an oil-slick film`,description:`Chrome has no colour of its own: everything here is a reflection of softboxes kept out of shot. A film a few hundred nanometres thick adds interference colours that shift with thickness and viewing angle, the same effect as a soap bubble. Blobs also reflect each other, one bounce deep.`,techniques:[`SDF metaballs`,`Thin-film interference`,`HDR studio lighting`,`Self-reflection`],controls:[`Move to pull a blob`,`Drag to orbit`,`Scroll for film thickness`,`Tap to burst`],pixelRatioCap:1,factory:ke},L=Math.PI*2,je=1.5,R={epsilon:1e-5,escapeDistance:12,minEnergy:.01},z={budgetMs:8,raysPerClockCheck:64,maxSegments:48e3,floatsPerVertex:5,verticesPerSegment:2},Me={fullFloat:4e7,halfFloat:25e4},B={minNm:380,maxNm:700,lutSize:256,nmPerMicrometre:1e3},Ne=[.8191725134,.6710436067,.5497004779],V={grabRadius:.07,minMirrorLength:.06,wheelRadians:.0015,drawnReflectance:[.97,.97,.97]},H={arcSegments:96,floatsPerVertex:6,aimLength:.14,handleSizePx:11,mirrorColor:[1,1,1,.28],glassColor:[.55,.85,1,.38],handleColor:[1,1,1,.55],hotHandleColor:[1,.82,.35,1],emitterColor:[1,.82,.35,.9]},Pe=.22,Fe=.9,U=[0,0,0,0];function Ie(e,t,n){e.anchor[0]+=t,e.anchor[1]+=n;for(let r of e.shapes){let e=r.kind===`segment`?[r.a,r.b]:[r.center];for(let r of e)r[0]+=t,r[1]+=n}}function Le(e,t,n){let r=Math.cos(n),i=Math.sin(n),a=e[0]-t[0],o=e[1]-t[1];e[0]=t[0]+a*r-o*i,e[1]=t[1]+a*i+o*r}function Re(e,t){for(let n of e.shapes)n.kind===`segment`?(Le(n.a,e.anchor,t),Le(n.b,e.anchor,t)):(Le(n.center,e.anchor,t),n.start+=t,n.end+=t)}function ze(e,t){return{anchor:[e,t],shapes:[{kind:`segment`,a:[e,t],b:[e,t],material:{kind:`mirror`,reflectance:[...V.drawnReflectance],roughness:0}}],movable:!1,drawn:!0}}function Be(e){let t=e.shapes[0];return t.kind===`segment`?Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]):0}function Ve(e){let t=e.shapes[0];t.kind===`segment`&&(e.anchor[0]=(t.a[0]+t.b[0])/2,e.anchor[1]=(t.a[1]+t.b[1])/2)}function He(e){let{emitter:t}=e,n=[{kind:`emitter`,position:t.position,move(e,n){t.position[0]=e,t.position[1]=n}}];for(let t of e.bodies){t.movable&&n.push({kind:`body`,position:t.anchor,move:(e,n)=>Ie(t,e-t.anchor[0],n-t.anchor[1])});let e=t.shapes[0];if(t.drawn&&e.kind===`segment`)for(let r of[e.a,e.b])n.push({kind:`endpoint`,position:r,move(e,n){r[0]=e,r[1]=n,Ve(t)}})}return n}function Ue(e,t,n){let r=null,i=V.grabRadius;for(let a of e){let e=Math.hypot(a.position[0]-t,a.position[1]-n);e<=i&&(r=a,i=e)}return r}function We(e){let t=e.bodies.flatMap(e=>e.shapes),n=He(e),r=!1,i=null,a=()=>{t=e.bodies.flatMap(e=>e.shapes),n=He(e)},o=(t,r)=>{if(i=Ue(n,t,r),i)return!1;let o=ze(t,r);e.bodies.push(o),a();let s=o.shapes[0].kind===`segment`?o.shapes[0].b:null;return i=n.find(e=>e.position===s)??null,!0},s=()=>{i=null;let t=e.bodies.filter(e=>!e.drawn||Be(e)>=V.minMirrorLength);return t.length!==e.bodies.length&&(e.bodies=t,a(),!0)},c=(t,n,r)=>{let i=r*V.wheelRadians,a=Ue(e.bodies.filter(e=>e.movable||e.drawn).map(e=>({body:e,position:e.anchor})),t,n);a?Re(a.body,i):e.emitter.angle+=i};return{scene:e,shapes:()=>t,handles:()=>n,hot:(e,t)=>i??Ue(n,e,t),update({x:e,y:t,down:n,wheel:a}){let l=!1;if(n&&!r&&(l=o(e,t)||l),n&&i){let[n,r]=i.position;(n!==e||r!==t)&&(i.move(e,t),l=!0)}return!n&&r&&(l=s()||l),r=n,a!==0&&(c(e,t,a),l=!0),l}}}var Ge=`#version 300 es
in vec2 aPosition;
in vec3 aColor;
uniform vec2 uExtent;
out vec3 vColor;
void main() {
  vColor = aColor;
  gl_Position = vec4(aPosition / uExtent, 0.0, 1.0);
}
`,Ke=`#version 300 es
precision highp float;
in vec3 vColor;
out vec4 fragColor;
void main() {
  fragColor = vec4(vColor, 1.0);
}
`,qe=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
uniform sampler2D uAccum;
uniform float uExposure;
uniform float uGlow;
out vec4 fragColor;

const int GLOW_TAPS = 12;
const float GLOW_RADIUS = 7.0;
const float GOLDEN_ANGLE = 2.39996;

vec3 energyAt(ivec2 pixel, ivec2 limit) {
  return texelFetch(uAccum, clamp(pixel, ivec2(0), limit), 0).rgb;
}

${ie}

void main() {
  ivec2 limit = textureSize(uAccum, 0) - ivec2(1);
  ivec2 pixel = ivec2(gl_FragCoord.xy);

  vec3 sharp = energyAt(pixel, limit) * 0.4;
  sharp += energyAt(pixel + ivec2(1, 0), limit) * 0.15;
  sharp += energyAt(pixel - ivec2(1, 0), limit) * 0.15;
  sharp += energyAt(pixel + ivec2(0, 1), limit) * 0.15;
  sharp += energyAt(pixel - ivec2(0, 1), limit) * 0.15;

  vec3 glow = vec3(0.0);
  for (int i = 0; i < GLOW_TAPS; i++) {
    float index = float(i) + 0.5;
    float radius = GLOW_RADIUS * sqrt(index / float(GLOW_TAPS));
    float angle = index * GOLDEN_ANGLE;
    ivec2 offset = ivec2(round(vec2(cos(angle), sin(angle)) * radius));
    glow += energyAt(pixel + offset, limit);
  }
  glow /= float(GLOW_TAPS);

  vec3 color = aces((sharp + glow * uGlow) * uExposure);
  // The table itself: a faint vignette so the frame is not pure black.
  vec2 centered = vUv - 0.5;
  color += vec3(0.012, 0.014, 0.022) * (1.0 - dot(centered, centered) * 1.6);
  fragColor = vec4(pow(color, vec3(1.0 / 2.2)), 1.0);
}
`,Je=`#version 300 es
in vec2 aPosition;
in vec4 aColor;
uniform vec2 uExtent;
uniform float uPointSize;
out vec4 vColor;
void main() {
  vColor = aColor;
  gl_PointSize = uPointSize;
  gl_Position = vec4(aPosition / uExtent, 0.0, 1.0);
}
`,Ye=`#version 300 es
precision highp float;
in vec4 vColor;
uniform float uRoundPoints;
out vec4 fragColor;
void main() {
  float alpha = vColor.a;
  if (uRoundPoints > 0.5) {
    float r = length(gl_PointCoord - 0.5) * 2.0;
    alpha *= (1.0 - smoothstep(0.82, 1.0, r)) * smoothstep(0.35, 0.55, r);
  }
  fragColor = vec4(vColor.rgb, alpha);
}
`;function Xe(e){return e.material.kind===`glass`?H.glassColor:H.mirrorColor}function W(e,t,n,r){e.push(t,n,r[0],r[1],r[2],r[3])}function Ze(e,t){let n=e.start+(e.end-e.start)*t/H.arcSegments;return[e.center[0]+e.rx*Math.cos(n),e.center[1]+e.ry*Math.sin(n)]}function Qe(e,t){let n=Xe(t);if(t.kind===`segment`)W(e,t.a[0],t.a[1],n),W(e,t.b[0],t.b[1],n);else for(let r=0;r<H.arcSegments;r++){let[i,a]=Ze(t,r),[o,s]=Ze(t,r+1);W(e,i,a,n),W(e,o,s,n)}}function $e(e,t){let{position:n,angle:r,spread:i}=t.scene.emitter;i>=Math.PI||(W(e,n[0],n[1],H.emitterColor),W(e,n[0]+Math.cos(r)*H.aimLength,n[1]+Math.sin(r)*H.aimLength,H.emitterColor))}function et(e,t){return e===t?H.hotHandleColor:e.kind===`emitter`?H.emitterColor:H.handleColor}function tt(e){let{program:t,uniforms:n}=_(e,Je,Ye),r=e.createVertexArray(),i=e.createBuffer(),a=H.floatsPerVertex*Float32Array.BYTES_PER_ELEMENT;e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,i);let o=e.getAttribLocation(t,`aPosition`),s=e.getAttribLocation(t,`aColor`);return e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,a,0),e.enableVertexAttribArray(s),e.vertexAttribPointer(s,4,e.FLOAT,!1,a,2*Float32Array.BYTES_PER_ELEMENT),e.bindVertexArray(null),{draw(a,o,s){let c=[];for(let e of a.shapes())Qe(c,e);$e(c,a);let l=c.length/H.floatsPerVertex,u=a.handles();for(let e of u)W(c,e.position[0],e.position[1],et(e,s));e.useProgram(t),e.uniform2f(n.uExtent,o[0],o[1]),e.uniform1f(n.uPointSize,H.handleSizePx),e.bindVertexArray(r),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array(c),e.DYNAMIC_DRAW),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.uniform1f(n.uRoundPoints,0),e.drawArrays(e.LINES,0,l),e.uniform1f(n.uRoundPoints,1),e.drawArrays(e.POINTS,l,u.length),e.disable(e.BLEND),e.bindVertexArray(null)},dispose(){e.deleteProgram(t),e.deleteBuffer(i),e.deleteVertexArray(r)}}}function nt(e,t,n,r,i,a){let o=e.b[0]-e.a[0],s=e.b[1]-e.a[1],c=r*s-i*o;if(c===0)return;let l=e.a[0]-t,u=e.a[1]-n,d=(l*s-u*o)/c;if(d<=R.epsilon||d>=a.t)return;let f=(l*i-u*r)/c;if(f<0||f>1)return;let p=Math.hypot(o,s);a.t=d,a.nx=s/p,a.ny=-o/p,a.material=e.material}function rt(e,t,n){return((e-t)%L+L)%L<=n-t}function it(e,t,n,r,i,a){let o=(t-e.center[0])/e.rx,s=(n-e.center[1])/e.ry,c=r/e.rx,l=i/e.ry,u=c*c+l*l,d=o*c+s*l,f=o*o+s*s-1,p=d*d-u*f;if(p<0)return;let m=Math.sqrt(p),h=e.end-e.start>=L;for(let t of[(-d-m)/u,(-d+m)/u]){if(t<=R.epsilon||t>=a.t)continue;let n=o+c*t,r=s+l*t;if(!h&&!rt(Math.atan2(r,n),e.start,e.end))continue;let i=n/e.rx,u=r/e.ry,d=Math.hypot(i,u);a.t=t,a.nx=i/d,a.ny=u/d,a.material=e.material;return}}function at(e,t,n,r,i,a,o){a.t=o;for(let o of e)o.kind===`segment`?nt(o,t,n,r,i,a):it(o,t,n,r,i,a);return a.t<o}function ot(e,t,n,r){let i=e*n+t*r;return[e-2*i*n,t-2*i*r]}function st(e,t,n,r,i){let a=-(e*n+t*r),o=i*i*(1-a*a);if(o>1)return null;let s=Math.sqrt(1-o),c=i*a-s;return[i*e+c*n,i*t+c*r]}function ct(e,t,n){let r=t/n*Math.sqrt(Math.max(0,1-e*e));if(r>=1)return 1;let i=Math.sqrt(1-r*r),a=(t*e-n*i)/(t*e+n*i),o=(n*e-t*i)/(n*e+t*i);return(a*a+o*o)/2}function lt(e,t){let n=t/B.nmPerMicrometre;return e.cauchyA+e.cauchyB/(n*n)}function G(e,t,n,r,i){let a=(e-n)*(e<n?r:i);return t*Math.exp(-.5*a*a)}function ut(e){let t=G(e,1.056,599.8,.0264,.0323)+G(e,.362,442,.0624,.0374)+G(e,-.065,501.1,.049,.0382),n=G(e,.821,568.8,.0213,.0247)+G(e,.286,530.9,.0613,.0322),r=G(e,1.217,437,.0845,.0278)+G(e,.681,459,.0385,.0725);return[Math.max(0,3.2406*t-1.5372*n-.4986*r),Math.max(0,-.9689*t+1.8758*n+.0415*r),Math.max(0,.0557*t-.204*n+1.057*r)]}function dt(e){return B.minNm+e*(B.maxNm-B.minNm)}function ft(){let e=new Float32Array(B.lutSize*3),t=[0,0,0];for(let n=0;n<B.lutSize;n++){let r=ut(dt((n+.5)/B.lutSize));e.set(r,n*3),t[0]+=r[0],t[1]+=r[1],t[2]+=r[2]}for(let n=0;n<B.lutSize;n++)e[n*3]*=B.lutSize/t[0],e[n*3+1]*=B.lutSize/t[1],e[n*3+2]*=B.lutSize/t[2];return e}var pt=ft();function mt(e){return Math.min(B.lutSize-1,Math.floor(e*B.lutSize))*3}var ht=e=>(e()+e()-1)*Math.SQRT2;function gt(e,t,n,r,i,a,o,s){let c={t:0,nx:0,ny:0,material:_t},[l,u]=n,[d,f]=r,[p,m,h]=a;for(let n=0;n<=t;n++){let t=at(e,l,u,d,f,c,R.escapeDistance),n=l+d*c.t,r=u+f*c.t,a=1/Math.max(Math.abs(d),Math.abs(f));if(s(l,u,n,r,p*a,m*a,h*a),!t)return;if(c.material.kind===`mirror`){let{reflectance:e,roughness:t}=c.material;if(p*=e[0],m*=e[1],h*=e[2],Math.max(p,m,h)<R.minEnergy)return;[d,f]=ot(d,f,c.nx,c.ny),t>0&&([d,f]=vt(d,f,ht(o)*t))}else[d,f]=yt(c,d,f,i,o);l=n,u=r}}var _t={kind:`mirror`,reflectance:[0,0,0],roughness:0};function vt(e,t,n){let r=Math.cos(n),i=Math.sin(n);return[e*r-t*i,e*i+t*r]}function yt(e,t,n,r,i){if(e.material.kind!==`glass`)return[t,n];let a=lt(e.material,r),o=t*e.nx+n*e.ny<0,s=o?e.nx:-e.nx,c=o?e.ny:-e.ny,l=o?1:a,u=o?a:1,d=-(t*s+n*c);if(i()>=ct(d,l,u)){let e=st(t,n,s,c,l/u);if(e)return e}return ot(t,n,s,c)}function bt(e){let t=[.5,.5,.5],n=()=>{for(let e=0;e<t.length;e++)t[e]=(t[e]+Ne[e])%1};return{emit(r,i,a,o){n();let[s,c,l]=t,u=r.angle+(c-.5)*r.spread,d=(s-.5)*r.width,f=mt(l);gt(i,a,[r.position[0]-Math.sin(r.angle)*d,r.position[1]+Math.cos(r.angle)*d],[Math.cos(u),Math.sin(u)],dt(l),[pt[f],pt[f+1],pt[f+2]],e,o)},reset(){t.fill(.5)}}}var xt=`EXT_float_blend`,St=0;function Ct(e){return e.getExtension(xt)?{format:v(e).rgba,convergedRays:Me.fullFloat}:{format:m(e).rgba,convergedRays:Me.halfFloat}}function wt(e,t){let n=We(t()),r=bt(Math.random),i=tt(e),a=Ct(e),o=_(e,Ge,Ke),s=_(e,x,qe),c=new Float32Array(z.maxSegments*z.verticesPerSegment*z.floatsPerVertex),l=e.createVertexArray(),f=e.createBuffer(),m=z.floatsPerVertex*Float32Array.BYTES_PER_ELEMENT;e.bindVertexArray(l),e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferData(e.ARRAY_BUFFER,c.byteLength,e.DYNAMIC_DRAW);let g=e.getAttribLocation(o.program,`aPosition`),v=e.getAttribLocation(o.program,`aColor`);e.enableVertexAttribArray(g),e.vertexAttribPointer(g,2,e.FLOAT,!1,m,0),e.enableVertexAttribArray(v),e.vertexAttribPointer(v,3,e.FLOAT,!1,m,2*Float32Array.BYTES_PER_ELEMENT),e.bindVertexArray(null);let S=null,C=0,w=0,T=(e,t,n,r,i,a,o)=>{c[w++]=e,c[w++]=t,c[w++]=i,c[w++]=a,c[w++]=o,c[w++]=n,c[w++]=r,c[w++]=i,c[w++]=a,c[w++]=o},ee=()=>{S&&(e.bindFramebuffer(e.FRAMEBUFFER,S.fbo),e.clearColor(U[0],U[1],U[2],U[3]),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),C=0,r.reset())},te=(t,n)=>{(S?.width!==t||S.height!==n)&&(S&&p(e,S),S=y(e,t,n,a.format,e.NEAREST),ee())},ne=()=>{let{emitter:e,maxBounces:t}=n.scene,i=n.shapes(),a=(t+1)*z.verticesPerSegment*z.floatsPerVertex,o=performance.now()+z.budgetMs;w=0;let s=0;for(;w+a<=c.length&&(r.emit(e,i,t,T),s+=1,!(s%z.raysPerClockCheck===0&&performance.now()>o)););C+=s},re=(t,n,r)=>{S&&(e.bindFramebuffer(e.FRAMEBUFFER,S.fbo),e.viewport(0,0,t,n),e.useProgram(o.program),e.uniform2f(o.uniforms.uExtent,r[0],r[1]),e.bindVertexArray(l),e.bindBuffer(e.ARRAY_BUFFER,f),e.bufferSubData(e.ARRAY_BUFFER,0,c,0,w),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.drawArrays(e.LINES,0,w/z.floatsPerVertex),e.disable(e.BLEND),e.bindVertexArray(null),e.bindFramebuffer(e.FRAMEBUFFER,null))},E=(t,r,i)=>{if(!S)return;let a=r/(2*i[1]),o=Fe*n.scene.exposure*a/Math.max(C,1);e.useProgram(s.program),e.uniform1i(s.uniforms.uAccum,b(e,S,St)),e.uniform1f(s.uniforms.uExposure,o),e.uniform1f(s.uniforms.uGlow,Pe),h(e,null,t,r)};return{frame({width:e,height:t,pointer:r}){let o=d(e,t),[s,c]=u(r,o);te(e,t),n.update({x:s,y:c,down:r.down,wheel:r.wheel})&&ee(),C<a.convergedRays&&(ne(),re(e,t,o)),E(e,t,o),i.draw(n,o,r.inside?n.hot(s,c):null)},dispose(){S&&p(e,S),i.dispose(),e.deleteProgram(o.program),e.deleteProgram(s.program),e.deleteBuffer(f),e.deleteVertexArray(l)}}}var Tt=(e=.96,t=0)=>({kind:`mirror`,reflectance:[e,e,e],roughness:t}),Et=e=>({kind:`mirror`,reflectance:e,roughness:0}),Dt={kind:`glass`,cauchyA:1.46,cauchyB:.021},Ot={kind:`glass`,cauchyA:1.319,cauchyB:.012},kt=e=>({anchor:[0,0],shapes:e,movable:!1,drawn:!1}),At=(e,t)=>({anchor:e,shapes:t,movable:!0,drawn:!1}),jt=(e,t,n)=>({kind:`segment`,a:e,b:t,material:n}),K=(e,t,n,r,i,a)=>({kind:`arc`,center:e,rx:t,ry:n,start:r,end:i,material:a});function Mt(e,t,n,r,i){let a=i=>{let a=r+i/n*L;return[e[0]+t*Math.cos(a),e[1]+t*Math.sin(a)]};return Array.from({length:n},(e,t)=>jt(a(t),a(t+1),i(t)))}function Nt(){let e=.86;return{emitter:{position:[-.95,0],angle:0,spread:0,width:e*2},bodies:[At([0,0],[K([0,0],e,e,-Math.PI/2,Math.PI/2,Tt())])],maxBounces:6,exposure:.3}}function Pt(){return{emitter:{position:[-.885,-.104],angle:.34,spread:0,width:.035},bodies:[At([0,0],Mt([0,0],.52,3,Math.PI/2,()=>Dt)),At([.85,-.15],[jt([.75,.25],[.95,-.55],Tt(.97))])],maxBounces:12,exposure:.09}}function Ft(){let e=.62;return{emitter:{position:[.95,0],angle:Math.PI,spread:0,width:e*2},bodies:[At([0,0],[K([0,0],e,e,0,L,Ot)])],maxBounces:8,exposure:.5}}function It(){let e=.97,t=.72;return{emitter:{position:[-Math.sqrt(e*e-t*t),0],angle:0,spread:L,width:0},bodies:[kt([K([0,0],e,t,0,L,Tt())])],maxBounces:7,exposure:.25}}function Lt(){let e=[[1,.45,.5],[.5,1,.55],[.45,.6,1]];return{emitter:{position:[-.25,-.1],angle:.72,spread:.035,width:.01},bodies:[kt(Mt([0,0],.94,6,Math.PI/6,t=>Et(e[t%e.length])))],maxBounces:26,exposure:.1}}function Rt(){let e=.42,t=.56,n=Tt(.985);return{emitter:{position:[-.2,-.12],angle:.5,spread:.006,width:.004},bodies:[kt([jt([-.42,t],[e,t],n),jt([-.42,-.56],[e,-.56],n),K([e,0],t,t,-Math.PI/2,Math.PI/2,n),K([-.42,0],t,t,Math.PI/2,Math.PI*1.5,n)])],maxBounces:40,exposure:.08}}var q={coffeeCup:Nt,prismBench:Pt,raindrop:Ft,whisperingGallery:It,tintedChamber:Lt,stadium:Rt},zt=[`Drag a dot to move it`,`Drag empty space to draw a mirror`,`Collapse a drawn mirror to delete it`,`Scroll to rotate`],Bt=[`Drag the source`,`Drag empty space to draw a mirror`,`Collapse a drawn mirror to delete it`,`Scroll to aim`];function J({build:e,...t}){return{...t,pixelRatioCap:je,factory:t=>wt(t,e)}}var Vt=[J({id:`coffee-cup`,title:`Coffee Cup Caustic`,tagline:`The bright curve inside a mug, from parallel light`,description:`Parallel rays strike a circular mirror and pile up along a curve called a nephroid, the shape you see on the surface of your coffee. No one draws it: it is where a million reflected rays happen to be densest.`,techniques:[`Light tracing`,`Additive HDR`,`Low-discrepancy sampling`,`Caustics`],controls:zt,build:q.coffeeCup}),J({id:`prism-bench`,title:`Prism Bench`,tagline:`White in, rainbow out, then folded by a mirror`,description:`Every photon carries one wavelength, and glass bends each by its own amount. Rotate the prism away from minimum deviation and watch the fan swing; push it far enough and the far face reflects the beam instead.`,techniques:[`Spectral rendering`,`Cauchy dispersion`,`Fresnel`,`Total internal reflection`],controls:zt,build:q.prismBench}),J({id:`raindrop`,title:`Raindrop`,tagline:`Where a rainbow comes from, one drop at a time`,description:`Sunlight enters a drop, reflects off its inside and leaves. One internal reflection gathers near 42° and paints the primary bow; two gather near 51° for the fainter, colour-flipped secondary.`,techniques:[`Internal reflection`,`Dispersion`,`Fresnel splitting`],controls:zt,build:q.raindrop}),J({id:`whispering-gallery`,title:`Whispering Gallery`,tagline:`An ellipse sends everything to its other focus`,description:`A source at one focus of an elliptical mirror lands every ray on the other focus, in any direction. Nudge the source off the focus and the point opens into a caustic with sharp cusps. Later bounces collapse toward the long axis.`,techniques:[`Conic reflection`,`Focal geometry`,`Caustics`],controls:Bt,build:q.whisperingGallery}),J({id:`tinted-chamber`,title:`Tinted Chamber`,tagline:`Walls that keep score in colour`,description:`A hexagon of coloured mirrors, each absorbing different primaries. A beam's colour is a record of the walls it has touched, so the star pattern fades through its own history as the light loses energy.`,techniques:[`Multi-bounce paths`,`Spectral absorption`,`Tinted reflectance`],controls:Bt,build:q.tintedChamber}),J({id:`stadium`,title:`Chaos Stadium`,tagline:`A tight beam, shredded by two round ends`,description:`A Bunimovich stadium is a billiard table with provably chaotic paths: rays that start together diverge exponentially at every curved bounce. A near-laser fills the whole room within a few reflections.`,techniques:[`Chaotic billiards`,`Long light paths`,`Divergence`],controls:Bt,build:q.stadium})],Ht=1.5,Y={initialNm:540,minNm:420,maxNm:680,nmPerWheelPixel:.2,worldPerNm:13e-5},Ut=.16,Wt=.05,Gt=-1e3,Kt=.04,qt=.08,Jt=.018,Yt=.1,X={initialSource:[-.85,0],barrierX:-.35,barrierHalfThickness:.012,slitOffset:.16,slitHalfWidth:.025,samplesPerSlit:5},Z={initialSource:[-.9,-.3],mirrorY:-.6},Xt=X.samplesPerSlit*2,Zt=.3,Qt=.6,$t=(e,t,n)=>Math.min(n,Math.max(t,e));function en(e){let{barrierX:t,slitOffset:n,slitHalfWidth:r,samplesPerSlit:i}=X,a=[];for(let o of[-n,n])for(let n=0;n<i;n++){let s=o+r*(2*n/(i-1)-1),c=Math.hypot(t-e[0],s-e[1]),l=1/(i*Math.sqrt(c+Wt));a.push({x:t,y:s,path:c,amplitude:l})}return a}function tn(e){return[{x:e[0],y:e[1],path:0,amplitude:1},{x:e[0],y:2*Z.mirrorY-e[1],path:0,amplitude:-1}]}var nn=[{initialSource:X.initialSource,barrierX:X.barrierX,mirrorY:Gt,maxSourceX:X.barrierX-qt,minSourceY:-1/0,emitters:en},{initialSource:Z.initialSource,barrierX:Gt,mirrorY:Z.mirrorY,maxSourceX:1/0,minSourceY:Z.mirrorY+qt,emitters:tn}];function rn(e,t,n){let r=n[0]-Kt,i=n[1]-Kt;return[$t(t[0],-r,Math.min(e.maxSourceX,r)),$t(t[1],Math.max(e.minSourceY,-i),i)]}var an=`#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform vec3 uTint;
uniform vec2 uSource;
uniform float uWavenumber;
uniform float uPhase;
uniform float uBarrierX;
uniform float uMirrorY;
uniform int uEmitterCount;
uniform vec4 uEmitters[${Xt}]; // x, y, path already travelled, amplitude
out vec4 fragColor;

const float SOFTENING = ${Wt.toFixed(3)};
const float BARRIER_HALF_THICKNESS = ${X.barrierHalfThickness.toFixed(3)};
const float SLIT_OFFSET = ${X.slitOffset.toFixed(3)};
const float SLIT_HALF_WIDTH = ${X.slitHalfWidth.toFixed(3)};
const float SCREEN_WIDTH = ${Yt.toFixed(3)};
const float MARKER_RADIUS = ${Jt.toFixed(3)};
const float EXPOSURE = ${Zt.toFixed(3)};
const float CREST_MIX = ${Qt.toFixed(3)};
const float SCREEN_EDGE_WIDTH = 0.006;
const vec3 SCREEN_EDGE_COLOR = vec3(0.12);
const vec3 BARRIER_COLOR = vec3(0.09, 0.1, 0.12);
const vec3 MIRROR_COLOR = vec3(0.55, 0.6, 0.68);
const float MIRROR_SHEEN_FALLOFF = 9.0;
const float MIRROR_BASE_SHADE = 0.12;

${ie}

vec2 phasor(vec2 from, float path, float amplitude, vec2 p) {
  float r = length(p - from);
  float phase = uWavenumber * (path + r);
  return amplitude / sqrt(r + SOFTENING) * vec2(cos(phase), sin(phase));
}

vec2 field(vec2 p) {
  if (p.x < uBarrierX) return phasor(uSource, 0.0, 1.0, p);
  vec2 sum = vec2(0.0);
  for (int i = 0; i < uEmitterCount; i++) {
    vec4 e = uEmitters[i];
    sum += phasor(e.xy, e.z, e.w, p);
  }
  return sum;
}

bool inBarrier(vec2 p) {
  return abs(p.x - uBarrierX) < BARRIER_HALF_THICKNESS && abs(abs(p.y) - SLIT_OFFSET) > SLIT_HALF_WIDTH;
}

/** The time average of 2 * wave^2 is the intensity, so crests move without shifting the fringes' brightness. */
float brightness(vec2 psi) {
  float wave = psi.x * cos(uPhase) + psi.y * sin(uPhase);
  return mix(dot(psi, psi), 2.0 * wave * wave, CREST_MIX);
}

void main() {
  float shortSide = min(uResolution.x, uResolution.y);
  vec2 p = (2.0 * gl_FragCoord.xy - uResolution) / shortSide;
  float screenX = uResolution.x / shortSide - SCREEN_WIDTH;

  vec3 color;
  if (p.y < uMirrorY) {
    float sheen = exp((p.y - uMirrorY) * MIRROR_SHEEN_FALLOFF);
    color = MIRROR_COLOR * (MIRROR_BASE_SHADE + sheen);
  } else if (inBarrier(p)) {
    color = BARRIER_COLOR;
  } else if (p.x > screenX) {
    vec2 psi = field(vec2(screenX, p.y));
    color = uTint * EXPOSURE * dot(psi, psi);
    if (p.x < screenX + SCREEN_EDGE_WIDTH) color = SCREEN_EDGE_COLOR;
  } else {
    color = uTint * EXPOSURE * brightness(field(p));
  }

  color += vec3(1.0 - smoothstep(MARKER_RADIUS * 0.6, MARKER_RADIUS, length(p - uSource)));
  fragColor = vec4(pow(aces(color), vec3(1.0 / 2.2)), 1.0);
}
`,on=4,sn=`uEmitters[0]`,cn=(e,t,n)=>Math.min(n,Math.max(t,e));function ln(e){let{program:t,uniforms:n}=_(e,x,an),r=M(),i=new Float32Array(Xt*on),a=nn.map(e=>e.initialSource),o=0,s=Y.initialNm,c=0;return{frame({dt:l,width:u,height:f,pointer:p}){r(p)&&(o=(o+1)%nn.length);let m=nn[o],g=d(u,f),_=p.down?p.dx*2*g[0]:0,v=p.down?p.dy*2*g[1]:0,[y,b]=a[o],x=rn(m,[y+_,b+v],g);a[o]=x,s=cn(s+p.wheel*Y.nmPerWheelPixel,Y.minNm,Y.maxNm);let S=s*Y.worldPerNm;c=(c+L*Ut/S*l)%L;let C=ut(s),w=Math.max(C[0],C[1],C[2]),T=m.emitters(x);T.forEach((e,t)=>{i.set([e.x,e.y,e.path,e.amplitude],t*on)}),e.useProgram(t),e.uniform2f(n.uResolution,u,f),e.uniform3f(n.uTint,C[0]/w,C[1]/w,C[2]/w),e.uniform2f(n.uSource,x[0],x[1]),e.uniform1f(n.uWavenumber,L/S),e.uniform1f(n.uPhase,c),e.uniform1f(n.uBarrierX,m.barrierX),e.uniform1f(n.uMirrorY,m.mirrorY),e.uniform1i(n.uEmitterCount,T.length),e.uniform4fv(n[sn],i),h(e,null,u,f)},dispose(){e.deleteProgram(t)}}}var un={id:`wave-tank`,title:`Wave Tank`,tagline:`Light as waves: fringes from two slits, and from one source and its reflection`,description:`Every pixel adds up the waves reaching it, so bands of light and dark form wherever path lengths agree or cancel. Two slits split one source into two. Lloyd's mirror does it with a reflection, half a wave out of step, which is why the fringe touching the mirror is dark. The strip on the right is the time-averaged pattern.`,techniques:[`Phasor summation`,`Huygens slits`,`Image source`,`Spectral colour`],controls:[`Drag to move the source`,`Scroll for wavelength`,`Tap to switch double slit / Lloyd's mirror`],pixelRatioCap:Ht,factory:ln},Q=[_e,Ae,...Vt,un],$=r();function dn(e){let t=(0,C.c)(28),{logger:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`Light Reflection`}],t[0]=r):r=t[0];let u=r,[d,p]=o(),m;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(m={initialLayout:T,storageKey:ee},t[1]=m):m=t[1];let h=c(m),[_,v]=(0,S.useState)(Q[0].id),y;t[2]===_?y=t[3]:(y=Q.find(e=>e.id===_)??Q[0],t[2]=_,t[3]=y);let b=y,x;t[4]===n?x=t[5]:(x=e=>{v(e),n?.info(`example selected: ${e}`,w)},t[4]=n,t[5]=x);let E=x,D;t[6]!==b.id||t[7]!==E?(D={title:te,bare:!0,content:(0,$.jsx)(f,{className:re,examples:Q,activeId:b.id,onSelect:E})},t[6]=b.id,t[7]=E,t[8]=D):D=t[8];let O;t[9]===b?O=t[10]:(O={title:ne,bare:!0,content:(0,$.jsx)(g,{example:b},b.id)},t[9]=b,t[10]=O);let k;t[11]!==D||t[12]!==O?(k={"0-0":D,"0-1":O},t[11]=D,t[12]=O,t[13]=k):k=t[13];let A=k,j;t[14]!==p||t[15]!==d?(j=(0,$.jsx)(a,{showBreadcrumbs:d,onShowBreadcrumbsChange:p}),t[14]=p,t[15]=d,t[16]=j):j=t[16];let M;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,$.jsx)(`div`,{"data-test":`light-reflection-header`,className:`page-header p-6 pb-0 flex-shrink-0`,children:(0,$.jsx)(`div`,{"data-test":`light-reflection-breadcrumbs`,className:`breadcrumb-section`,children:(0,$.jsx)(i,{items:u})})}),t[17]=M):M=t[17];let N;t[18]===d?N=t[19]:(N=(0,$.jsx)(s,{show:d,children:M}),t[18]=d,t[19]=N);let P;t[20]!==A||t[21]!==h||t[22]!==n?(P=(0,$.jsx)(`div`,{"data-test":`light-reflection-content`,className:`page-content flex-1 p-6 h-full min-h-0`,children:(0,$.jsx)(l,{grid:h,cells:A,logger:n})}),t[20]=A,t[21]=h,t[22]=n,t[23]=P):P=t[23];let F;return t[24]!==N||t[25]!==P||t[26]!==j?(F=(0,$.jsxs)(`div`,{"data-test":`light-reflection-demo-page`,className:`light-reflection-demo-page relative flex-1 flex flex-col h-full`,children:[j,N,P]}),t[24]=N,t[25]=P,t[26]=j,t[27]=F):F=t[27],F}export{dn as LightReflectionDemoPage};