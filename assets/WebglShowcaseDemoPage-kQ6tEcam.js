import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{f as t}from"./forms-B7BVNXre.js";import{t as n}from"./react-vendor-AaAAdbhg.js";import{Vt as r}from"./radix-ui-D0bHPE5O.js";import{t as i}from"./Breadcrumbs-1WPAGHYa.js";import{a,o,s}from"./pointer-CbAKJOdv.js";import{a as c,c as l,d as u,f as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./targets-CkxyElsA.js";var b=e(t(),1),x=n(),S=4096,C={perceptionRadius:.11,separationRadius:.035,separation:2.6,alignment:1.4,cohesion:1.1,maxForce:1.8,minSpeed:.28,maxSpeed:.62,wander:.35},ee={margin:.28,turn:2.4},te={radius:.7,speed:.45,headingSpread:.9},w={radius:.32,flee:6.5,scare:1.4,scareRadius:.45},T={length:.024,span:.016,farScale:.6,farHaze:.35},ne=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
out vec4 outColor;
`,re=`
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
`,ie=`
uint pcg(uint v) {
  uint state = v * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand(inout uint s) {
  s = pcg(s);
  return float(s) * (1.0 / 4294967296.0);
}
`,ae=ne+ie+`
uniform sampler2D uState;
uniform int uSize;
uniform uint uSeed;
uniform float uSpawnAll;
uniform float uDt;
uniform vec2 uExtent;
uniform vec2 uRadii;      // perception, separation
uniform vec3 uWeights;    // separation, alignment, cohesion
uniform float uMaxForce;
uniform vec2 uSpeed;      // min, max
uniform float uWander;
uniform vec2 uEdges;      // margin, turn
uniform vec3 uSeedShape;  // radius, speed, heading spread
uniform float uSeedHeading;
uniform vec2 uPointer;
uniform float uPredator;  // 1 while the pointer is over the canvas
uniform vec2 uFlee;       // radius, acceleration
uniform vec2 uScare;      // impulse, radius
const float TAU = 6.28318530718;
const float EPS = 1e-5;

vec4 seed(inout uint s) {
  float r = uSeedShape.x * sqrt(rand(s));
  float a = rand(s) * TAU;
  float heading = uSeedHeading + (rand(s) - 0.5) * uSeedShape.z;
  return vec4(r * vec2(cos(a), sin(a)), uSeedShape.y * vec2(cos(heading), sin(heading)));
}

/** Pushes back from each wall, growing smoothly from 0 at the margin to full turn at the edge. */
vec2 walls(vec2 p) {
  vec2 inner = uExtent - uEdges.x;
  vec2 over = smoothstep(inner, uExtent, abs(p));
  return -sign(p) * over * uEdges.y;
}

void main() {
  ivec2 cell = ivec2(gl_FragCoord.xy);
  uint rng = pcg(uint(cell.y * uSize + cell.x) ^ pcg(uSeed));
  if (uSpawnAll > 0.5) {
    outColor = seed(rng);
    return;
  }
  vec4 bird = texelFetch(uState, cell, 0);
  vec2 p = bird.xy;
  vec2 v = bird.zw;

  float perception2 = uRadii.x * uRadii.x;
  vec2 separation = vec2(0.0);
  vec2 heading = vec2(0.0);
  vec2 centre = vec2(0.0);
  float neighbours = 0.0;
  for (int y = 0; y < uSize; y++) {
    for (int x = 0; x < uSize; x++) {
      vec4 other = texelFetch(uState, ivec2(x, y), 0);
      vec2 d = other.xy - p;
      float d2 = dot(d, d);
      // d2 > 0 also skips this bird itself.
      if (d2 >= perception2 || d2 < EPS * EPS) continue;
      float dist = sqrt(d2);
      heading += other.zw;
      centre += other.xy;
      neighbours += 1.0;
      separation -= d / dist * max(1.0 - dist / uRadii.y, 0.0);
    }
  }

  vec2 steer = separation * uWeights.x;
  if (neighbours > 0.0) {
    steer += (heading / neighbours - v) * uWeights.y;
    steer += (centre / neighbours - p) * uWeights.z;
  }
  steer += (vec2(rand(rng), rand(rng)) - 0.5) * 2.0 * uWander;
  float force = length(steer);
  if (force > uMaxForce) steer *= uMaxForce / force;
  steer += walls(p);

  vec2 fromHawk = p - uPointer;
  float hawk = length(fromHawk);
  vec2 away = fromHawk / max(hawk, EPS);
  steer += away * uFlee.y * uPredator * max(1.0 - hawk / uFlee.x, 0.0);
  v += away * uScare.x * exp(-hawk * hawk / (uScare.y * uScare.y));

  v += steer * uDt;
  float speed = length(v);
  v = speed > EPS ? v / speed * clamp(speed, uSpeed.x, uSpeed.y) : vec2(uSpeed.x, 0.0);
  outColor = vec4(p + v * uDt, v);
}
`,oe=ne+re+`
in vec2 vUv;
uniform vec2 uExtent;
const vec2 SUN = vec2(0.35, 0.12);
const float SUN_GLOW = 0.22;
const float SUN_FALLOFF = 6.0;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 col = mix(CLAY, CREAM, smoothstep(0.0, 0.85, vUv.y));
  vec2 offset = (vUv - SUN) * uExtent;
  col = mix(col, CREAM, SUN_GLOW * exp(-dot(offset, offset) * SUN_FALLOFF));
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`,se=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uState;
uniform int uSize;
uniform vec2 uExtent;
uniform vec2 uShape;      // length, span
uniform float uFarScale;
out vec3 vBary;
out float vFar;
${ie}
const vec2 CORNERS[3] = vec2[3](vec2(0.6, 0.0), vec2(-0.4, 0.5), vec2(-0.4, -0.5));
const vec3 BARY[3] = vec3[3](vec3(1.0, 0.0, 0.0), vec3(0.0, 1.0, 0.0), vec3(0.0, 0.0, 1.0));
const float EPS = 1e-5;
void main() {
  int bird = gl_VertexID / 3;
  int corner = gl_VertexID % 3;
  vec4 s = texelFetch(uState, ivec2(bird % uSize, bird / uSize), 0);
  uint h = uint(bird);
  vFar = rand(h);
  vec2 dir = s.zw / max(length(s.zw), EPS);
  vec2 side = vec2(-dir.y, dir.x);
  vec2 local = CORNERS[corner] * uShape * mix(1.0, uFarScale, vFar);
  vec2 world = s.xy + dir * local.x + side * local.y;
  vBary = BARY[corner];
  gl_Position = vec4(world / uExtent, 0.0, 1.0);
}
`,ce=ne+re+`
in vec3 vBary;
in float vFar;
uniform float uFarHaze;
const float EDGE_EPS = 1e-4;
void main() {
  float edge = min(min(vBary.x, vBary.y), vBary.z);
  float alpha = smoothstep(0.0, max(fwidth(edge), EDGE_EPS), edge);
  outColor = vec4(mix(INK, CLAY, vFar * uFarHaze), alpha);
}
`,le=Math.PI*2;function ue(e){let t={update:p(e,y,ae),sky:p(e,y,oe),birds:p(e,se,ce)},n=m(e,64,64,h(e).rgba,e.NEAREST),r=Math.random()*le,i=0,a=t=>(e.useProgram(t.program),t.uniforms),o=({dt:o,extent:s,pointer:c,hunting:l,scare:d})=>{let f=a(t.update);e.uniform1i(f.uState,v(e,n.read,0)),e.uniform1i(f.uSize,64),e.uniform1ui(f.uSeed,i),e.uniform1f(f.uSpawnAll,+(i===0)),e.uniform1f(f.uDt,o),e.uniform2f(f.uExtent,s[0],s[1]),e.uniform2f(f.uRadii,C.perceptionRadius,C.separationRadius),e.uniform3f(f.uWeights,C.separation,C.alignment,C.cohesion),e.uniform1f(f.uMaxForce,C.maxForce),e.uniform2f(f.uSpeed,C.minSpeed,C.maxSpeed),e.uniform1f(f.uWander,C.wander),e.uniform2f(f.uEdges,ee.margin,ee.turn),e.uniform3f(f.uSeedShape,te.radius,te.speed,te.headingSpread),e.uniform1f(f.uSeedHeading,r),e.uniform2f(f.uPointer,c[0],c[1]),e.uniform1f(f.uPredator,+!!l),e.uniform2f(f.uFlee,w.radius,w.flee),e.uniform2f(f.uScare,d?w.scare:0,w.scareRadius),u(e,n.write.fbo,64,64),n.swap(),i++},s=(n,r,i)=>{let o=a(t.sky);e.uniform2f(o.uExtent,n[0],n[1]),u(e,null,r,i)},c=r=>{let i=a(t.birds);e.uniform1i(i.uState,v(e,n.read,0)),e.uniform1i(i.uSize,64),e.uniform2f(i.uExtent,r[0],r[1]),e.uniform2f(i.uShape,T.length,T.span),e.uniform1f(i.uFarScale,T.farScale),e.uniform1f(i.uFarHaze,T.farHaze),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,S*3),e.disable(e.BLEND)};return{step:o,render(e,t,n){s(e.extent,t,n),c(e.extent)},dispose(){f(e,n),Object.values(t).forEach(t=>e.deleteProgram(t.program))}}}function de(e){let t=ue(e);return{frame({dt:e,width:n,height:r,pointer:i}){let s=o(n,r),c={dt:e,extent:s,pointer:a(i,s),hunting:i.inside,scare:i.clicks>0};t.step(c),t.render(c,n,r)},dispose(){t.dispose()}}}var fe=Math.round(S*S/1e6),pe={id:`flock`,title:`Murmuration`,tagline:`${S} starlings, each one watching all the others`,description:`Every bird is one texel of a 64×64 float texture. Each frame a fragment shader lets every bird look at every other bird, ${fe} million reads, and steer by Reynolds' three rules: keep your distance, match your neighbours' heading, drift to their centre. Nobody leads; the shape of the flock is emergent. The birds are drawn from gl_VertexID with no vertex buffers.`,techniques:[`Boids`,`Brute-force O(N²) on the GPU`,`GPGPU state textures`,`Attribute-less rendering`,`Analytic AA`],controls:[`Hover to hunt like a hawk`,`Click to scatter the flock`],pixelRatioCap:2,factory:de},E={simResolution:128,dyeResolution:1024,pressureIterations:22,pressureDecay:.8,velocityDissipation:.18,dyeDissipation:.9,curlStrength:28},D={radius:.0022,force:6e3,dyeIntensity:.16,dragBoost:1.8},O={count:9,ringRadius:.035,speed:900,intensity:.32},k={delayMs:2500,amplitudeX:.3,amplitudeY:.24,frequencyX:.53,frequencyY:.71,phaseOffset:Math.PI,forceScale:1.1,intensity:.1},me=1100,he=2.2,A=[[.851,.467,.341],[.957,.702,.38],[.898,.42,.52],[.42,.62,.85],[.941,.86,.74]],ge=Math.PI*2;function j(e,t,n=0){let r=e/he+n,i=Math.floor(r),a=r-i,o=A[(i%A.length+A.length)%A.length],s=A[((i+1)%A.length+A.length)%A.length],c=a*a*(3-2*a);return[(o[0]+(s[0]-o[0])*c)*t,(o[1]+(s[1]-o[1])*c)*t,(o[2]+(s[2]-o[2])*c)*t]}function _e(e){for(let t=0;t<7;t++){let n=Math.random()*ge;e.splat(Math.random(),Math.random(),Math.cos(n)*me,Math.sin(n)*me,j(0,D.dyeIntensity*2,t))}}function ve(e,t,n,r,i){for(let a=0;a<O.count;a++){let o=a/O.count*ge,s=Math.cos(o),c=Math.sin(o);e.splat(t+s*O.ringRadius/r,n+c*O.ringRadius,s*O.speed,c*O.speed,j(i,O.intensity,a/O.count))}}function ye(e,t){return{x:.5+k.amplitudeX*Math.sin(e*k.frequencyX+t),y:.5+k.amplitudeY*Math.sin(e*k.frequencyY+t*.5)}}function be(e,t,n){[0,k.phaseOffset].forEach((r,i)=>{let a=ye(t,r),o=ye(t-n,r);e.splat(a.x,a.y,(a.x-o.x)*D.force*k.forceScale,(a.y-o.y)*D.force*k.forceScale,j(t,k.intensity,i*A.length*.5))})}var M=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 outColor;
uniform vec2 uTexel;
`,N=M+`
vec2 uvL() { return vUv - vec2(uTexel.x, 0.0); }
vec2 uvR() { return vUv + vec2(uTexel.x, 0.0); }
vec2 uvT() { return vUv + vec2(0.0, uTexel.y); }
vec2 uvB() { return vUv - vec2(0.0, uTexel.y); }
`,xe={splat:M+`
uniform sampler2D uTarget;
uniform float uAspect;
uniform vec3 uColor;
uniform vec2 uPoint;
uniform float uRadius;
void main() {
  vec2 p = vUv - uPoint;
  p.x *= uAspect;
  vec3 splat = exp(-dot(p, p) / uRadius) * uColor;
  outColor = vec4(texture(uTarget, vUv).xyz + splat, 1.0);
}
`,advect:M+`
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform float uDt;
uniform float uDissipation;
void main() {
  // Walk backwards along the velocity field and sample where this fluid came from.
  vec2 from = vUv - uDt * texture(uVelocity, vUv).xy * uTexel;
  outColor = texture(uSource, from) / (1.0 + uDissipation * uDt);
}
`,curl:N+`
uniform sampler2D uVelocity;
void main() {
  float l = texture(uVelocity, uvL()).y;
  float r = texture(uVelocity, uvR()).y;
  float t = texture(uVelocity, uvT()).x;
  float b = texture(uVelocity, uvB()).x;
  outColor = vec4(0.5 * (r - l - t + b), 0.0, 0.0, 1.0);
}
`,vorticity:N+`
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float uCurlStrength;
uniform float uDt;
void main() {
  float l = texture(uCurl, uvL()).x;
  float r = texture(uCurl, uvR()).x;
  float t = texture(uCurl, uvT()).x;
  float b = texture(uCurl, uvB()).x;
  float c = texture(uCurl, vUv).x;
  // Push along the gradient of |curl| to re-inject the small eddies numerical damping eats.
  vec2 force = 0.5 * vec2(abs(t) - abs(b), abs(r) - abs(l));
  force /= length(force) + 0.0001;
  force *= uCurlStrength * c;
  force.y *= -1.0;
  vec2 vel = texture(uVelocity, vUv).xy + force * uDt;
  outColor = vec4(clamp(vel, -1000.0, 1000.0), 0.0, 1.0);
}
`,divergence:N+`
uniform sampler2D uVelocity;
void main() {
  vec2 c = texture(uVelocity, vUv).xy;
  vec2 lu = uvL(), ru = uvR(), tu = uvT(), bu = uvB();
  float l = texture(uVelocity, lu).x;
  float r = texture(uVelocity, ru).x;
  float t = texture(uVelocity, tu).y;
  float b = texture(uVelocity, bu).y;
  // Reflective walls: mirror the normal component at the borders.
  if (lu.x < 0.0) l = -c.x;
  if (ru.x > 1.0) r = -c.x;
  if (tu.y > 1.0) t = -c.y;
  if (bu.y < 0.0) b = -c.y;
  outColor = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
}
`,scale:M+`
uniform sampler2D uSource;
uniform float uValue;
void main() { outColor = uValue * texture(uSource, vUv); }
`,pressure:N+`
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
void main() {
  float l = texture(uPressure, uvL()).x;
  float r = texture(uPressure, uvR()).x;
  float t = texture(uPressure, uvT()).x;
  float b = texture(uPressure, uvB()).x;
  float div = texture(uDivergence, vUv).x;
  outColor = vec4(0.25 * (l + r + t + b - div), 0.0, 0.0, 1.0);
}
`,gradient:N+`
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
void main() {
  float l = texture(uPressure, uvL()).x;
  float r = texture(uPressure, uvR()).x;
  float t = texture(uPressure, uvT()).x;
  float b = texture(uPressure, uvB()).x;
  vec2 vel = texture(uVelocity, vUv).xy - vec2(r - l, t - b);
  outColor = vec4(vel, 0.0, 1.0);
}
`,display:N+`
uniform sampler2D uDye;
const vec3 INK = vec3(0.078, 0.078, 0.075);
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 c = texture(uDye, vUv).rgb;
  float dx = length(texture(uDye, uvR()).rgb) - length(texture(uDye, uvL()).rgb);
  float dy = length(texture(uDye, uvT()).rgb) - length(texture(uDye, uvB()).rgb);
  vec3 n = normalize(vec3(dx, dy, length(uTexel)));
  float relief = clamp(dot(n, normalize(vec3(-0.4, 0.6, 1.0))) + 0.75, 0.75, 1.15);
  c *= relief;
  vec3 col = INK + c;
  col = vec3(1.0) - exp(-col * 1.6);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`};function Se(e){let t=l(e),n=Object.fromEntries(Object.entries(xe).map(([t,n])=>[t,p(e,y,n)])),r=null,i=1,a=t=>(e.useProgram(t.program),t.uniforms),o=t=>u(e,t.fbo,t.width,t.height),s=(t,r)=>{let i=a(n.scale);e.uniform1f(i.uValue,1),e.uniform1i(i.uSource,v(e,t,0)),o(r)},d=t=>{f(e,t.velocity),f(e,t.dye),f(e,t.pressure),c(e,t.divergence),c(e,t.curl)},h=(n,r)=>{let i=_(E.simResolution,n,r),a=_(E.dyeResolution,n,r);return{key:`${i.w}x${i.h}`,velocity:m(e,i.w,i.h,t.rg,e.LINEAR),dye:m(e,a.w,a.h,t.rgba,e.LINEAR),pressure:m(e,i.w,i.h,t.r,e.NEAREST),divergence:g(e,i.w,i.h,t.r,e.NEAREST),curl:g(e,i.w,i.h,t.r,e.NEAREST)}},b=(t,r,s,c)=>{let l=a(n.splat);e.uniform1i(l.uTarget,v(e,t.read,0)),e.uniform1f(l.uAspect,i),e.uniform2f(l.uPoint,r,s),e.uniform3f(l.uColor,c[0],c[1],c[2]),e.uniform1f(l.uRadius,D.radius*Math.max(i,1)),o(t.write),t.swap()};return{resize(e,t){i=e/t;let n=_(E.simResolution,e,t);if(r&&r.key===`${n.w}x${n.h}`)return;let a=h(e,t);r&&(s(r.velocity.read,a.velocity.read),s(r.dye.read,a.dye.read),d(r)),r=a},splat(e,t,n,i,a){r&&(b(r.velocity,e,t,[n,i,0]),b(r.dye,e,t,a))},step(t){if(!r)return;let{velocity:i,pressure:s,divergence:c,curl:l,dye:u}=r,d=t=>e.uniform2f(t.uTexel,i.texelX,i.texelY),f=a(n.curl);d(f),e.uniform1i(f.uVelocity,v(e,i.read,0)),o(l),f=a(n.vorticity),d(f),e.uniform1i(f.uVelocity,v(e,i.read,0)),e.uniform1i(f.uCurl,v(e,l,1)),e.uniform1f(f.uCurlStrength,E.curlStrength),e.uniform1f(f.uDt,t),o(i.write),i.swap(),f=a(n.divergence),d(f),e.uniform1i(f.uVelocity,v(e,i.read,0)),o(c),f=a(n.scale),e.uniform1f(f.uValue,E.pressureDecay),e.uniform1i(f.uSource,v(e,s.read,0)),o(s.write),s.swap(),f=a(n.pressure),d(f),e.uniform1i(f.uDivergence,v(e,c,1));for(let t=0;t<E.pressureIterations;t++)e.uniform1i(f.uPressure,v(e,s.read,0)),o(s.write),s.swap();f=a(n.gradient),d(f),e.uniform1i(f.uPressure,v(e,s.read,0)),e.uniform1i(f.uVelocity,v(e,i.read,1)),o(i.write),i.swap(),f=a(n.advect),d(f),e.uniform1f(f.uDt,t),e.uniform1i(f.uVelocity,v(e,i.read,0)),e.uniform1i(f.uSource,v(e,i.read,0)),e.uniform1f(f.uDissipation,E.velocityDissipation),o(i.write),i.swap(),e.uniform1i(f.uVelocity,v(e,i.read,0)),e.uniform1i(f.uSource,v(e,u.read,1)),e.uniform1f(f.uDissipation,E.dyeDissipation),o(u.write),u.swap()},render(t,i){if(!r)return;let o=a(n.display);e.uniform2f(o.uTexel,r.dye.texelX,r.dye.texelY),e.uniform1i(o.uDye,v(e,r.dye.read,0)),u(e,null,t,i)},dispose(){r&&d(r),Object.values(n).forEach(t=>e.deleteProgram(t.program))}}}function Ce(e){let t=Se(e),n=!1;return{frame({time:e,dt:r,width:i,height:a,pointer:o}){t.resize(i,a),n||=(_e(t),!0);let s=i/a;if(o.clicks>0&&ve(t,o.x,o.y,s,e),o.inside&&(o.dx!==0||o.dy!==0)){let n=o.dx*(s<1?s:1)*D.force,r=o.dy/(s>1?s:1)*D.force,i=D.dyeIntensity*(o.down?D.dragBoost:1);t.splat(o.x,o.y,n,r,j(e,i))}else o.idleMs>k.delayMs&&be(t,e,r);t.step(r),t.render(i,a)},dispose(){t.dispose()}}}var we={id:`fluid`,title:`Ink in Water`,tagline:`Real-time Navier–Stokes on the GPU`,description:`An incompressible fluid solved entirely in fragment shaders: advect, re-inject vorticity, project out divergence with ~20 Jacobi passes, every frame. Your cursor pushes velocity and drops dye; leave it alone and two emitters keep stirring.`,techniques:[`Stable fluids`,`Ping-pong FBOs`,`Half-float targets`,`Vorticity confinement`,`Jacobi solver`],controls:[`Move to stir`,`Drag for richer ink`,`Click to bloom`,`Idle → self-stirring`],pixelRatioCap:2,factory:Ce},P={initialYaw:.7,initialPitch:.32,initialDistance:2.55,minDistance:1.4,maxDistance:4.5,dragRadians:4,pitchLimit:1.45,wheelZoom:.0012,damping:7,autoYawSpeed:.09,autoRotateDelayMs:2500},Te={base:8,swing:2,speed:.11},Ee=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform vec2 uResolution;
uniform vec3 uCamPos;
uniform float uPower;

#define MAX_STEPS 140
#define SURFACE_EPS 0.0007
#define FRACTAL_ITERS 8
#define BAILOUT 2.0
#define BOUND_RADIUS 1.25
#define FOCAL_LENGTH 1.9
#define SHADOW_STEPS 32
#define SHADOW_MAX_DIST 2.5
#define SHADOW_SOFTNESS 10.0
#define AO_SAMPLES 5
#define GLOW_FALLOFF 28.0
#define GLOW_STRENGTH 0.55
#define FOG_DENSITY 0.035
#define EXPOSURE 1.35
#define GAMMA 2.2

const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 KEY_DIR = vec3(0.55, 0.75, -0.35);
const vec3 KEY_COLOR = vec3(1.0, 0.87, 0.74);
const vec3 SKY_COLOR = vec3(0.38, 0.48, 0.62);

vec3 toLinear(vec3 c) { return pow(c, vec3(GAMMA)); }

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

// Returns (distance estimate, orbit trap). Pole rotated to +y so the bulb stands upright.
vec2 map(vec3 pos) {
  vec3 p = pos.xzy;
  vec3 z = p;
  float dr = 1.0;
  float r = 0.0;
  float trap = 1e10;
  for (int i = 0; i < FRACTAL_ITERS; i++) {
    r = length(z);
    if (r > BAILOUT) break;
    float theta = acos(clamp(z.z / r, -1.0, 1.0)) * uPower;
    float phi = atan(z.y, z.x) * uPower;
    float rp = pow(r, uPower - 1.0);
    dr = rp * uPower * dr + 1.0;
    z = rp * r * vec3(sin(theta) * cos(phi), sin(theta) * sin(phi), cos(theta)) + p;
    trap = min(trap, dot(z, z));
  }
  return vec2(0.5 * log(r) * r / dr, trap);
}

vec2 boundingSphere(vec3 ro, vec3 rd, float radius) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - radius * radius;
  float h = b * b - c;
  if (h < 0.0) return vec2(-1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}

// x = hit distance (or -1), y = orbit trap, z = closest approach (for the glow).
vec3 march(vec3 ro, vec3 rd) {
  vec2 bound = boundingSphere(ro, rd, BOUND_RADIUS);
  if (bound.y < 0.0) return vec3(-1.0, 0.0, 1e3);
  float t = max(bound.x, 0.0);
  float closest = 1e3;
  for (int i = 0; i < MAX_STEPS; i++) {
    vec2 h = map(ro + rd * t);
    closest = min(closest, h.x);
    if (h.x < SURFACE_EPS * t) return vec3(t, h.y, 0.0);
    t += h.x;
    if (t > bound.y) break;
  }
  return vec3(-1.0, 0.0, closest);
}

// Tetrahedral central differences: 4 taps instead of 6.
vec3 calcNormal(vec3 p, float e) {
  const vec2 k = vec2(1.0, -1.0);
  return normalize(
    k.xyy * map(p + k.xyy * e).x + k.yyx * map(p + k.yyx * e).x +
    k.yxy * map(p + k.yxy * e).x + k.xxx * map(p + k.xxx * e).x);
}

float softShadow(vec3 ro, vec3 rd) {
  float res = 1.0;
  float t = 0.005;
  for (int i = 0; i < SHADOW_STEPS; i++) {
    float h = map(ro + rd * t).x;
    res = min(res, SHADOW_SOFTNESS * h / t);
    t += clamp(h, 0.005, 0.15);
    if (res < 0.002 || t > SHADOW_MAX_DIST) break;
  }
  return clamp(res, 0.0, 1.0);
}

float ambientOcclusion(vec3 p, vec3 n) {
  float occ = 0.0;
  float weight = 1.0;
  for (int i = 0; i < AO_SAMPLES; i++) {
    float h = 0.01 + 0.11 * float(i) / float(AO_SAMPLES - 1);
    occ += (h - map(p + n * h).x) * weight;
    weight *= 0.85;
  }
  return clamp(1.0 - 3.5 * occ, 0.0, 1.0);
}

vec3 background(vec3 rd) {
  float g = clamp(0.5 + 0.5 * rd.y, 0.0, 1.0);
  vec3 ink = toLinear(INK);
  return mix(ink * 0.6, ink * 1.6 + toLinear(CLAY) * 0.035, g);
}

vec3 shade(vec3 p, vec3 rd, vec3 n, float trap) {
  vec3 l = normalize(KEY_DIR);
  float occ = ambientOcclusion(p, n);
  float dif = clamp(dot(n, l), 0.0, 1.0) * softShadow(p + n * 0.002, l);
  float sky = clamp(0.5 + 0.5 * n.y, 0.0, 1.0);
  float bounce = clamp(0.5 - 0.5 * n.y, 0.0, 1.0);
  float fre = pow(clamp(1.0 + dot(n, rd), 0.0, 1.0), 3.0);
  float spe = pow(clamp(dot(n, normalize(l - rd)), 0.0, 1.0), 48.0) * dif;

  vec3 albedo = mix(toLinear(CLAY), toLinear(CREAM), smoothstep(0.25, 1.05, sqrt(trap)));
  vec3 light = 2.4 * dif * KEY_COLOR
             + 0.55 * sky * SKY_COLOR * occ
             + 0.30 * bounce * toLinear(CLAY) * occ
             + 0.80 * fre * toLinear(CREAM) * occ;
  return albedo * light + 1.1 * spe * KEY_COLOR;
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  vec3 ro = uCamPos;
  vec3 ww = normalize(-ro);
  vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
  vec3 vv = cross(uu, ww);
  vec3 rd = normalize(uv.x * uu + uv.y * vv + FOCAL_LENGTH * ww);

  vec3 bg = background(rd);
  vec3 hit = march(ro, rd);
  vec3 col;
  if (hit.x > 0.0) {
    vec3 p = ro + rd * hit.x;
    vec3 n = calcNormal(p, max(SURFACE_EPS * hit.x, 0.0002));
    col = shade(p, rd, n, hit.y);
    col = mix(col, bg, 1.0 - exp(-FOG_DENSITY * hit.x * hit.x));
  } else {
    col = bg + toLinear(CLAY) * GLOW_STRENGTH * exp(-hit.z * GLOW_FALLOFF);
  }

  col = vec3(1.0) - exp(-col * EXPOSURE);
  col = pow(col, vec3(1.0 / GAMMA));
  vec2 q = gl_FragCoord.xy / uResolution;
  col *= 0.35 + 0.65 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.18);
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`,De=(e,t,n)=>Math.min(n,Math.max(t,e));function Oe(e){let{program:t,uniforms:n}=p(e,y,Ee),r={yaw:P.initialYaw,pitch:P.initialPitch,distance:P.initialDistance},i={...r};return{frame({time:a,dt:o,width:s,height:c,pointer:l}){l.down?(r.yaw-=l.dx*P.dragRadians,r.pitch=De(r.pitch-l.dy*P.dragRadians,-P.pitchLimit,P.pitchLimit)):l.idleMs>P.autoRotateDelayMs&&(r.yaw+=P.autoYawSpeed*o),r.distance=De(r.distance*Math.exp(l.wheel*P.wheelZoom),P.minDistance,P.maxDistance);let d=1-Math.exp(-P.damping*o);i.yaw+=(r.yaw-i.yaw)*d,i.pitch+=(r.pitch-i.pitch)*d,i.distance+=(r.distance-i.distance)*d;let f=Math.cos(i.pitch);e.useProgram(t),e.uniform2f(n.uResolution,s,c),e.uniform3f(n.uCamPos,i.distance*f*Math.sin(i.yaw),i.distance*Math.sin(i.pitch),i.distance*f*Math.cos(i.yaw)),e.uniform1f(n.uPower,Te.base+Te.swing*Math.sin(a*Te.speed)),u(e,null,s,c)},dispose(){e.deleteProgram(t)}}}var ke={id:`mandelbulb`,title:`Breathing Mandelbulb`,tagline:`A 3D fractal, raymarched per pixel`,description:`No meshes: every pixel casts a ray and sphere-traces the Mandelbulb's analytic distance estimate. The fractal power drifts between 6 and 10, so the surface slowly grows and dissolves its own spires.`,techniques:[`Sphere tracing`,`Distance estimator`,`Soft shadows`,`Ambient occlusion`,`Orbit traps`],controls:[`Drag to orbit`,`Scroll to zoom`,`Idle → auto-rotate`],pixelRatioCap:1,factory:Oe},Ae=1.5,je=262144,F={arms:3,winding:4.2,armSpread:.38,escapeMargin:1.05,patternSpeed:.12,spawnRadius:.95,radialExponent:1.6,orbitSpeed:.34,coreRadius:.18,inwardPull:.05,respawnRate:.06},I={scale:1.7,strength:.11,drift:.06,response:1.8},L={hoverPull:.05,holdPull:.32,softening:.08,burst:1.6,burstRadius:.35},R={fadePerFrame:.92,referenceHz:60,pointSize:1.6,intensity:.045,exposure:1.35,hotSpeed:.9},z=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
out vec4 outColor;
`,Me=`
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 AMBER = vec3(0.957, 0.702, 0.38);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
const vec3 DUSK = vec3(0.42, 0.62, 0.85);
`,Ne=z+`
uint pcg(uint v) {
  uint state = v * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand(inout uint s) {
  s = pcg(s);
  return float(s) * (1.0 / 4294967296.0);
}

vec2 grad(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453) * 2.0 - 1.0;
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 w = f * f * (3.0 - 2.0 * f);
  float a = dot(grad(i), f);
  float b = dot(grad(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0));
  float c = dot(grad(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0));
  float d = dot(grad(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0));
  return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
}
const float OCTAVE_GAIN = 0.5;
const float OCTAVE_LACUNARITY = 2.03;
float potential(vec2 p, float t) {
  return noise(p + vec2(t, -0.7 * t)) + OCTAVE_GAIN * noise(p * OCTAVE_LACUNARITY - vec2(0.6 * t, t));
}
const float CURL_EPS = 0.01;
vec2 curl(vec2 p, float t) {
  float dy = potential(p + vec2(0.0, CURL_EPS), t) - potential(p - vec2(0.0, CURL_EPS), t);
  float dx = potential(p + vec2(CURL_EPS, 0.0), t) - potential(p - vec2(CURL_EPS, 0.0), t);
  return vec2(dy, -dx) / (2.0 * CURL_EPS);
}

uniform sampler2D uState;
uniform int uSize;
uniform uint uSeed;
uniform float uSpawnAll;
uniform float uRespawnChance;
uniform float uTime;
uniform float uDt;
uniform float uArms;
uniform float uWinding;
uniform float uArmSpread;
uniform float uSpawnRadius;
uniform float uRadialExponent;
uniform float uPatternAngle;
uniform float uEscapeRadius;
uniform float uOrbitSpeed;
uniform float uCoreRadius;
uniform float uInwardPull;
uniform vec3 uFlow;       // scale, strength, drift
uniform float uResponse;
uniform vec2 uPointer;
uniform float uPull;
uniform float uSoftening;
uniform float uBurst;
uniform float uBurstRadius;
const float TAU = 6.28318530718;
const float EPS = 1e-4;

vec2 spawn(inout uint s) {
  float r = uSpawnRadius * pow(rand(s), uRadialExponent);
  float arm = floor(rand(s) * uArms);
  float jitter = (rand(s) + rand(s) - 1.0) * uArmSpread;
  // Trailing arms: angle falls with radius, against the counter-clockwise spin.
  float theta = uPatternAngle + arm * TAU / uArms - r * uWinding + jitter;
  return r * vec2(cos(theta), sin(theta));
}

/** Flat rotation curve (speed rises, then plateaus past the core) plus a slight inward drift. */
vec2 orbit(vec2 p) {
  float r = length(p);
  vec2 tangent = vec2(-p.y, p.x) / max(r, EPS);
  return tangent * uOrbitSpeed * r / sqrt(r * r + uCoreRadius * uCoreRadius) - p * uInwardPull;
}

void main() {
  ivec2 cell = ivec2(gl_FragCoord.xy);
  vec4 s = texelFetch(uState, cell, 0);
  uint seed = pcg(uint(cell.y * uSize + cell.x) ^ pcg(uSeed));
  vec2 p = s.xy;
  vec2 v = s.zw;

  if (uSpawnAll > 0.5 || rand(seed) < uRespawnChance || length(p) > uEscapeRadius) {
    p = spawn(seed);
    outColor = vec4(p, orbit(p));
    return;
  }

  vec2 flow = orbit(p) + curl(p * uFlow.x, uTime * uFlow.z) * uFlow.y;
  v = mix(v, flow, 1.0 - exp(-uResponse * uDt));

  vec2 toPointer = uPointer - p;
  float d = length(toPointer);
  vec2 dir = toPointer / max(d, EPS);
  v += dir * uPull / (d + uSoftening) * uDt;
  v -= dir * uBurst * exp(-d * d / (uBurstRadius * uBurstRadius));

  outColor = vec4(p + v * uDt, v);
}
`,Pe=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uState;
uniform int uSize;
uniform vec2 uExtent;
uniform float uPointSize;
uniform float uIntensity;
uniform float uSpawnRadius;
uniform float uHotSpeed;
out vec3 vColor;
${Me}
const float DUSK_MIX = 0.55;
void main() {
  vec4 s = texelFetch(uState, ivec2(gl_VertexID % uSize, gl_VertexID / uSize), 0);
  gl_Position = vec4(s.xy / uExtent, 0.0, 1.0);
  gl_PointSize = uPointSize;
  float radial = clamp(length(s.xy) / uSpawnRadius, 0.0, 1.0);
  float heat = clamp(length(s.zw) / uHotSpeed, 0.0, 1.0);
  vec3 col = mix(AMBER, CLAY, smoothstep(0.08, 0.45, radial));
  col = mix(col, DUSK, smoothstep(0.6, 1.0, radial) * DUSK_MIX);
  col = mix(col, CREAM, heat * heat);
  vColor = col * uIntensity;
}
`,Fe=z+`
in vec3 vColor;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  outColor = vec4(vColor * (1.0 - smoothstep(0.4, 1.0, d)), 1.0);
}
`,Ie=z+`
in vec2 vUv;
uniform sampler2D uSource;
uniform float uValue;
void main() { outColor = uValue * texture(uSource, vUv); }
`,Le=z+Me+`
in vec2 vUv;
uniform sampler2D uTrail;
uniform float uExposure;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
void main() {
  vec3 light = vec3(1.0) - exp(-texture(uTrail, vUv).rgb * uExposure);
  vec3 col = INK + (vec3(1.0) - INK) * light;
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`;function Re(e){let t=l(e).rgba,n={update:p(e,y,Ne),points:p(e,Pe,Fe),fade:p(e,y,Ie),display:p(e,y,Le)},r=m(e,512,512,h(e).rgba,e.NEAREST),i=null,a=0,o=t=>(e.useProgram(t.program),t.uniforms),s=t=>u(e,t.fbo,t.width,t.height),c=({time:t,dt:i,extent:c,pointer:l,pull:u,burst:d})=>{let f=o(n.update);e.uniform1i(f.uState,v(e,r.read,0)),e.uniform1i(f.uSize,512),e.uniform1ui(f.uSeed,a),e.uniform1f(f.uSpawnAll,+(a===0)),e.uniform1f(f.uRespawnChance,F.respawnRate*i),e.uniform1f(f.uTime,t),e.uniform1f(f.uDt,i),e.uniform1f(f.uArms,F.arms),e.uniform1f(f.uWinding,F.winding),e.uniform1f(f.uArmSpread,F.armSpread),e.uniform1f(f.uSpawnRadius,F.spawnRadius),e.uniform1f(f.uRadialExponent,F.radialExponent),e.uniform1f(f.uPatternAngle,t*F.patternSpeed),e.uniform1f(f.uEscapeRadius,Math.hypot(c[0],c[1])*F.escapeMargin),e.uniform1f(f.uOrbitSpeed,F.orbitSpeed),e.uniform1f(f.uCoreRadius,F.coreRadius),e.uniform1f(f.uInwardPull,F.inwardPull),e.uniform3f(f.uFlow,I.scale,I.strength,I.drift),e.uniform1f(f.uResponse,I.response),e.uniform2f(f.uPointer,l[0],l[1]),e.uniform1f(f.uPull,u),e.uniform1f(f.uSoftening,L.softening),e.uniform1f(f.uBurst,d),e.uniform1f(f.uBurstRadius,L.burstRadius),s(r.write),r.swap(),a++},d=(t,r)=>{let i=o(n.fade);e.uniform1i(i.uSource,v(e,t.read,0)),e.uniform1f(i.uValue,R.fadePerFrame**+(r*R.referenceHz)),s(t.write)},g=(t,i)=>{let a=o(n.points);e.uniform1i(a.uState,v(e,r.read,0)),e.uniform1i(a.uSize,512),e.uniform2f(a.uExtent,i[0],i[1]),e.uniform1f(a.uPointSize,R.pointSize),e.uniform1f(a.uIntensity,R.intensity),e.uniform1f(a.uSpawnRadius,F.spawnRadius),e.uniform1f(a.uHotSpeed,R.hotSpeed),e.bindFramebuffer(e.FRAMEBUFFER,t.write.fbo),e.viewport(0,0,t.width,t.height),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.drawArrays(e.POINTS,0,je),e.disable(e.BLEND),t.swap()};return{resize(n,r){i&&i.width===n&&i.height===r||(i&&f(e,i),i=m(e,n,r,t,e.LINEAR))},step(e){c(e)},render(t,r,a){if(!i)return;d(i,t.dt),g(i,t.extent);let s=o(n.display);e.uniform1i(s.uTrail,v(e,i.read,0)),e.uniform1f(s.uExposure,R.exposure),u(e,null,r,a)},dispose(){f(e,r),i&&f(e,i),Object.values(n).forEach(t=>e.deleteProgram(t.program))}}}function ze(e){let t=Re(e);return{frame({time:e,dt:n,width:r,height:i,pointer:s}){t.resize(r,i);let c=o(r,i),l={time:e,dt:n,extent:c,pointer:a(s,c),pull:s.inside?s.down?L.holdPull:L.hoverPull:0,burst:s.clicks>0?L.burst:0};t.step(l),t.render(l,r,i)},dispose(){t.dispose()}}}var Be={id:`particles`,title:`Particle Galaxy`,tagline:`${Math.round(je/1024)}k stars, simulated and drawn on the GPU`,description:`Every star's position and velocity live in one texel of a 512×512 float texture, integrated by a fragment shader. They orbit on a flat rotation curve, swirl through curl noise and stream along slowly turning spiral arms; the points are drawn without a single vertex buffer and pile up additively into fading light trails.`,techniques:[`GPGPU state textures`,`Attribute-less rendering`,`Curl noise`,`Additive trails`,`PCG hashing`],controls:[`Hover to tug stars`,`Hold to pull harder`,`Click to scatter`],pixelRatioCap:Ae,factory:ze},Ve={resolution:512},He={u:1,v:.5,dt:1},Ue={perSecond:720,minPerFrame:1,maxPerFrame:24},B=[{feed:.0545,kill:.062},{feed:.0367,kill:.0649},{feed:.029,kill:.057},{feed:.078,kill:.061}],We=.0015,V={radius:18e-5,strength:.5,clickRadius:.0012,clickStrength:1},H={count:9,margin:.15},U={delayMs:4e3,amplitudeX:.36,amplitudeY:.32,frequencyX:.23,frequencyY:.31,intervalSeconds:.35},W={low:.08,mid:.22,high:.36,reliefScale:6},G=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 outColor;
uniform vec2 uTexel;
`,Ge={init:G+`
void main() { outColor = vec4(1.0, 0.0, 0.0, 1.0); }
`,copy:G+`
uniform sampler2D uSource;
void main() { outColor = texture(uSource, vUv); }
`,update:G+`
uniform sampler2D uState;
uniform float uDu;
uniform float uDv;
uniform float uFeed;
uniform float uKill;
uniform float uDt;
const float W_CENTRE = -1.0;
const float W_SIDE = 0.2;
const float W_CORNER = 0.05;
vec2 at(float x, float y) { return texture(uState, vUv + vec2(x, y) * uTexel).rg; }
void main() {
  vec2 c = at(0.0, 0.0);
  // 9-point Laplacian: isotropic enough that growth fronts stay round instead of square.
  vec2 lap = W_CENTRE * c
    + W_SIDE * (at(-1.0, 0.0) + at(1.0, 0.0) + at(0.0, -1.0) + at(0.0, 1.0))
    + W_CORNER * (at(-1.0, -1.0) + at(1.0, -1.0) + at(-1.0, 1.0) + at(1.0, 1.0));
  float u = c.r;
  float v = c.g;
  float uvv = u * v * v;
  float du = uDu * lap.r - uvv + uFeed * (1.0 - u);
  float dv = uDv * lap.g + uvv - (uFeed + uKill) * v;
  outColor = vec4(clamp(c + uDt * vec2(du, dv), 0.0, 1.0), 0.0, 1.0);
}
`,seed:G+`
uniform sampler2D uState;
uniform float uAspect;
uniform vec2 uPoint;
uniform float uRadius;
uniform float uStrength;
const float U_CONSUMED = 0.5;
void main() {
  vec2 p = vUv - uPoint;
  p.x *= uAspect;
  float g = exp(-dot(p, p) / uRadius) * uStrength;
  vec2 s = texture(uState, vUv).rg;
  outColor = vec4(max(s.r - g * U_CONSUMED, 0.0), min(s.g + g, 1.0), 0.0, 1.0);
}
`,display:G+`
uniform sampler2D uState;
uniform vec3 uRamp;
uniform float uRelief;
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
const vec3 LIGHT = vec3(-0.4, 0.6, 1.0);
const float AMBIENT = 0.35;
const float SHINE = 28.0;
const float SPECULAR = 0.22;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float v(vec2 offset) { return texture(uState, vUv + offset * uTexel).g; }
void main() {
  float c = v(vec2(0.0));
  float dx = v(vec2(1.0, 0.0)) - v(vec2(-1.0, 0.0));
  float dy = v(vec2(0.0, 1.0)) - v(vec2(0.0, -1.0));
  vec3 n = normalize(vec3(-dx * uRelief, -dy * uRelief, 1.0));
  vec3 l = normalize(LIGHT);
  float shade = clamp(dot(n, l) + AMBIENT, 0.7, 1.2);

  float lift = smoothstep(uRamp.x, uRamp.y, c);
  vec3 col = mix(mix(INK, CLAY, lift), CREAM, smoothstep(uRamp.y, uRamp.z, c));
  col *= shade;
  col += pow(max(dot(reflect(-l, n), vec3(0.0, 0.0, 1.0)), 0.0), SHINE) * SPECULAR * lift;
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`};function Ke(e){let t=Math.min(Math.floor(e),B.length-2),n=e-t,r=B[t],i=B[t+1];return{feed:r.feed+(i.feed-r.feed)*n,kill:r.kill+(i.kill-r.kill)*n}}function qe(e){let t=l(e).rg,n=Object.fromEntries(Object.entries(Ge).map(([t,n])=>[t,p(e,y,n)])),r=null,i=1,a=0,o=0,s=t=>(e.useProgram(t.program),t.uniforms),c=t=>u(e,t.fbo,t.width,t.height),d=(t,r,a,o,l)=>{let u=s(n.seed);e.uniform1i(u.uState,v(e,t.read,0)),e.uniform1f(u.uAspect,i),e.uniform2f(u.uPoint,r,a),e.uniform1f(u.uRadius,o*Math.max(i,1)),e.uniform1f(u.uStrength,l),c(t.write),t.swap()},h=e=>{let t=1-2*H.margin;for(let n=0;n<H.count;n++){let n=H.margin+Math.random()*t,r=H.margin+Math.random()*t;d(e,n,r,V.clickRadius,V.clickStrength)}},g=(a,o)=>{i=a/o;let l=_(Ve.resolution,a,o);if(r&&r.width===l.w&&r.height===l.h)return r;let u=m(e,l.w,l.h,t,e.LINEAR);if(r){let t=s(n.copy);e.uniform1i(t.uSource,v(e,r.read,0)),c(u.read),f(e,r)}else s(n.init),c(u.read),h(u);return r=u,u},b=(t,r)=>{let{feed:i,kill:o}=Ke(a),l=s(n.update);e.uniform2f(l.uTexel,t.texelX,t.texelY),e.uniform1f(l.uDu,He.u),e.uniform1f(l.uDv,He.v),e.uniform1f(l.uFeed,i),e.uniform1f(l.uKill,o),e.uniform1f(l.uDt,He.dt);for(let n=0;n<r;n++)e.uniform1i(l.uState,v(e,t.read,0)),c(t.write),t.swap()},x=(t,r,i)=>{let a=s(n.display);e.uniform2f(a.uTexel,t.texelX,t.texelY),e.uniform1i(a.uState,v(e,t.read,0)),e.uniform3f(a.uRamp,W.low,W.mid,W.high),e.uniform1f(a.uRelief,W.reliefScale),u(e,null,r,i)};return{frame({time:e,dt:t,width:n,height:r,pointer:i}){let s=g(n,r);if(a=Math.min(Math.max(a+i.wheel*We,0),B.length-1),i.clicks>0&&d(s,i.x,i.y,V.clickRadius,V.clickStrength),i.inside&&(i.dx!==0||i.dy!==0))d(s,i.x,i.y,V.radius,V.strength);else if(i.idleMs>U.delayMs&&(o+=t,o>=U.intervalSeconds)){o=0;let t=.5+U.amplitudeX*Math.sin(e*U.frequencyX),n=.5+U.amplitudeY*Math.sin(e*U.frequencyY);d(s,t,n,V.radius,V.strength)}let c=Math.min(Math.max(Math.round(t*Ue.perSecond),Ue.minPerFrame),Ue.maxPerFrame);b(s,c),x(s,n,r)},dispose(){r&&f(e,r),Object.values(n).forEach(t=>e.deleteProgram(t.program))}}}var Je={id:`reaction`,title:`Living Coral`,tagline:`Gray-Scott reaction–diffusion`,description:`Two virtual chemicals on a 512-cell grid: one is fed in, the other consumes it to copy itself and slowly dies. A dozen update passes per frame grow branching coral out of a few seeds; scrolling slides the feed and kill rates into mitosis, labyrinths and worms.`,techniques:[`Reaction–diffusion`,`9-point Laplacian`,`Ping-pong FBOs`,`Relief lighting`],controls:[`Move to seed`,`Click for a big seed`,`Scroll to morph the pattern`,`Idle → self-seeding`],pixelRatioCap:1,factory:qe},K={length:800,carLength:5},q={desiredSpeed:30,headway:1.5,maxAccel:.5,comfortDecel:1.5,minGap:2,freeExponent:4,gapFloor:.1,noise:.08},J={timeScale:3,subStep:.05,maxSubSteps:12},Ye={speed:8,speedNoise:.4},Xe={duration:1.2,decel:6,clickTolerance:.14},Y={ringRadius:.74,roadHalfWidth:.04,edgeLine:.004,carWidth:.02,historyGap:.05,startAngle:Math.PI/2},X={bins:512,rows:256,rowInterval:.5,fade:.28},Z=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
out vec4 outColor;
`,Ze=`
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 ASPHALT = vec3(0.16, 0.155, 0.15);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 AMBER = vec3(0.957, 0.702, 0.38);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
vec3 speedColor(float t) { return mix(CLAY, CREAM, smoothstep(0.0, 1.0, t)); }
`,Qe=Z+`
uint pcg(uint v) {
  uint state = v * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand(inout uint s) {
  s = pcg(s);
  return float(s) * (1.0 / 4294967296.0);
}

uniform sampler2D uState;
uniform int uCount;
uniform uint uSeed;
uniform float uSpawnAll;
uniform int uInsert;      // >= 0: only that car is (re)placed, everyone else holds still
uniform float uDt;
uniform vec2 uRoad;       // ring length, car length
uniform vec4 uIdm;        // v0, T, aMax, b
uniform vec4 uIdmExtra;   // s0, free exponent, gap floor, noise
uniform vec2 uSeedSpeed;  // speed, noise
uniform float uBrakeAt;   // ring position of a click this step, or < 0
uniform vec2 uBrake;      // duration, deceleration

void main() {
  int i = int(gl_FragCoord.x);
  vec4 car = texelFetch(uState, ivec2(i, 0), 0);
  uint rng = pcg(uint(i) ^ pcg(uSeed));
  float L = uRoad.x;
  if (i >= uCount) {
    outColor = car;
    return;
  }
  if (uSpawnAll > 0.5) {
    float speed = uSeedSpeed.x + (rand(rng) - 0.5) * 2.0 * uSeedSpeed.y;
    outColor = vec4(float(i) * L / float(uCount), speed, 0.0, 0.0);
    return;
  }
  if (uInsert >= 0) {
    if (i == uInsert) {
      // The new car slots into the gap between the last car and car 0, at the slower one's speed.
      vec4 behind = texelFetch(uState, ivec2(i - 1, 0), 0);
      vec4 ahead = texelFetch(uState, ivec2(0, 0), 0);
      float x = mod(behind.x + 0.5 * mod(ahead.x - behind.x, L), L);
      car = vec4(x, min(behind.y, ahead.y), 0.0, 0.0);
    }
    outColor = car;
    return;
  }

  vec4 leader = texelFetch(uState, ivec2((i + 1) % uCount, 0), 0);
  float x = car.x;
  float v = car.y;
  float braking = car.z;
  float headway = mod(leader.x - x, L);
  float gap = max(headway - uRoad.y, uIdmExtra.z);
  float dv = v - leader.y;

  float sStar = uIdmExtra.x + max(0.0, v * uIdm.y + v * dv / (2.0 * sqrt(uIdm.z * uIdm.w)));
  float acc = uIdm.z * (1.0 - pow(v / uIdm.x, uIdmExtra.y) - (sStar / gap) * (sStar / gap));
  acc += (rand(rng) - 0.5) * 2.0 * uIdmExtra.w;

  // A click brakes the one car whose stretch (its rear bumper up to its leader's rear) holds the spot.
  if (uBrakeAt >= 0.0 && mod(uBrakeAt - (x - uRoad.y), L) < headway) braking = uBrake.x;
  if (braking > 0.0) acc = min(acc, -uBrake.y);

  v = max(v + acc * uDt, 0.0);
  outColor = vec4(mod(x + v * uDt, L), v, max(braking - uDt, 0.0), 0.0);
}
`,$e=Z+`
uniform sampler2D uState;
uniform int uCount;
uniform int uBins;
uniform vec2 uRoad;       // ring length, car length
uniform float uColorSpeed;
void main() {
  float L = uRoad.x;
  float at = (gl_FragCoord.x / float(uBins)) * L;
  for (int i = 0; i < uCount; i++) {
    vec4 car = texelFetch(uState, ivec2(i, 0), 0);
    if (mod(car.x - at, L) < uRoad.y) {
      outColor = vec4(1.0, clamp(car.y / uColorSpeed, 0.0, 1.0), 0.0, 1.0);
      return;
    }
  }
  outColor = vec4(0.0);
}
`,et=Z+Ze+`
in vec2 vUv;
uniform vec2 uExtent;
uniform vec3 uRing;       // radius, half width, edge line width
uniform float uHistoryRadius;
uniform float uStartAngle;
uniform sampler2D uHistory;
uniform float uNewestRow;
uniform float uRows;
uniform float uFade;
const float TAU = 6.28318530718;
const float EDGE_INSET = 0.8;
const float EMPTY_LIFT = 0.04;
float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float band(float d, float halfWidth) {
  float aa = fwidth(d);
  return 1.0 - smoothstep(halfWidth - aa, halfWidth + aa, abs(d));
}
void main() {
  vec2 p = (vUv * 2.0 - 1.0) * uExtent;
  float r = length(p);
  float along = fract((atan(p.y, p.x) - uStartAngle) / TAU);
  vec3 col = INK;

  float disc = r / uHistoryRadius;
  if (disc < 1.0) {
    float row = uNewestRow - (1.0 - disc) * (uRows - 1.0);
    vec2 cell = texture(uHistory, vec2(along, (row + 0.5) / uRows)).rg;
    vec3 trace = mix(INK + EMPTY_LIFT, speedColor(cell.y), cell.x);
    col = mix(INK, trace, smoothstep(0.0, uFade, disc));
  }
  col = mix(col, INK, band(disc - 1.0, fwidth(disc)));

  float lane = r - uRing.x;
  col = mix(col, ASPHALT, band(lane, uRing.y));
  col = mix(col, CREAM, band(abs(lane) - uRing.y * EDGE_INSET, uRing.z * 0.5));
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`,tt=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
uniform sampler2D uState;
uniform vec2 uExtent;
uniform vec2 uRoad;       // ring length, car length
uniform float uRingRadius;
uniform float uStartAngle;
uniform float uCarWidth;
uniform float uColorSpeed;
out vec2 vLocal;
out vec3 vColor;
${Ze}
const float TAU = 6.28318530718;
const vec2 CORNERS[6] = vec2[6](
  vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
  vec2(-1.0, -1.0), vec2(1.0, 1.0), vec2(-1.0, 1.0)
);
void main() {
  int car = gl_VertexID / 6;
  vec2 corner = CORNERS[gl_VertexID % 6];
  vec4 s = texelFetch(uState, ivec2(car, 0), 0);
  float theta = uStartAngle + (s.x - 0.5 * uRoad.y) / uRoad.x * TAU;
  vec2 normal = vec2(cos(theta), sin(theta));
  vec2 tangent = vec2(-normal.y, normal.x);
  float halfLength = 0.5 * uRoad.y / uRoad.x * TAU * uRingRadius;
  vec2 world = normal * uRingRadius + tangent * corner.x * halfLength + normal * corner.y * 0.5 * uCarWidth;
  vLocal = corner;
  vColor = s.z > 0.0 ? AMBER : speedColor(s.y / uColorSpeed);
  gl_Position = vec4(world / uExtent, 0.0, 1.0);
}
`,nt=Z+`
in vec2 vLocal;
in vec3 vColor;
const float AA_EPS = 1e-4;
void main() {
  vec2 inside = (1.0 - abs(vLocal)) / max(fwidth(vLocal), AA_EPS);
  outColor = vec4(vColor, clamp(min(inside.x, inside.y), 0.0, 1.0));
}
`,rt=-1,it=-1;function at(e){let t={update:p(e,y,Qe),history:p(e,y,$e),scene:p(e,y,et),cars:p(e,tt,nt)},n=m(e,96,1,h(e).rgba,e.NEAREST),r={internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE},i=g(e,X.bins,X.rows,r,e.LINEAR);e.bindTexture(e.TEXTURE_2D,i.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT);let a=36,o=0,s=0,l=0,d=0,_=null,b=t=>(e.useProgram(t.program),t.uniforms),x=r=>{let i=b(t.update);e.uniform1i(i.uState,v(e,n.read,0)),e.uniform1i(i.uCount,a),e.uniform1ui(i.uSeed,o++),e.uniform1f(i.uSpawnAll,+!!r.spawnAll),e.uniform1i(i.uInsert,r.insert??rt),e.uniform1f(i.uDt,r.dt??0),e.uniform2f(i.uRoad,K.length,K.carLength),e.uniform4f(i.uIdm,q.desiredSpeed,q.headway,q.maxAccel,q.comfortDecel),e.uniform4f(i.uIdmExtra,q.minGap,q.freeExponent,q.gapFloor,q.noise),e.uniform2f(i.uSeedSpeed,Ye.speed,Ye.speedNoise),e.uniform1f(i.uBrakeAt,r.brakeAt??it),e.uniform2f(i.uBrake,Xe.duration,Xe.decel),u(e,n.write.fbo,96,1),n.swap()},S=()=>{d=(d+1)%X.rows;let r=b(t.history);e.uniform1i(r.uState,v(e,n.read,0)),e.uniform1i(r.uCount,a),e.uniform1i(r.uBins,X.bins),e.uniform2f(r.uRoad,K.length,K.carLength),e.uniform1f(r.uColorSpeed,15),e.bindFramebuffer(e.FRAMEBUFFER,i.fbo),e.viewport(0,d,X.bins,1),e.drawArrays(e.TRIANGLES,0,3)},C=e=>{e>a?(a++,x({insert:a-1})):e<a&&a--};return x({spawnAll:!0}),{step({dt:e,targetCount:t,brakeAt:n}){for(C(t),s=Math.min(s+e*J.timeScale,J.subStep*J.maxSubSteps),n!==null&&(_=n);s>=J.subStep;)x({dt:J.subStep,brakeAt:_??it}),_=null,s-=J.subStep,l+=J.subStep,l>=X.rowInterval&&(l-=X.rowInterval,S())},render({extent:r},o,s){let c=Y.ringRadius,l=b(t.scene);e.uniform2f(l.uExtent,r[0],r[1]),e.uniform3f(l.uRing,c,Y.roadHalfWidth,Y.edgeLine),e.uniform1f(l.uHistoryRadius,c-Y.roadHalfWidth-Y.historyGap),e.uniform1f(l.uStartAngle,Y.startAngle),e.uniform1i(l.uHistory,v(e,i,0)),e.uniform1f(l.uNewestRow,d),e.uniform1f(l.uRows,X.rows),e.uniform1f(l.uFade,X.fade),u(e,null,o,s);let f=b(t.cars);e.uniform1i(f.uState,v(e,n.read,0)),e.uniform2f(f.uExtent,r[0],r[1]),e.uniform2f(f.uRoad,K.length,K.carLength),e.uniform1f(f.uRingRadius,c),e.uniform1f(f.uStartAngle,Y.startAngle),e.uniform1f(f.uCarWidth,Y.carWidth),e.uniform1f(f.uColorSpeed,15),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,a*6),e.disable(e.BLEND)},dispose(){f(e,n),c(e,i),Object.values(t).forEach(t=>e.deleteProgram(t.program))}}}var ot=Math.PI*2;function st(e,t){if(e.clicks===0)return null;let[n,r]=a(e,t);if(Math.abs(Math.hypot(n,r)-Y.ringRadius)>Xe.clickTolerance)return null;let i=(Math.atan2(r,n)-Y.startAngle)/ot;return(i-Math.floor(i))*K.length}function ct(e){let t=at(e),n=36;return{frame({dt:e,width:r,height:i,pointer:a}){let s=o(r,i);n=Math.min(Math.max(n-a.wheel/40,8),96);let c={dt:e,extent:s,targetCount:Math.round(n),brakeAt:st(a,s)};t.step(c),t.render(c,r,i)},dispose(){t.dispose()}}}var Q=[ke,we,Je,Be,pe,{id:`traffic`,title:`Phantom Jam`,tagline:`A traffic jam with no cause, forming out of nothing on a ring road`,description:`Cars drive one lane in a circle, each following the Intelligent Driver Model: speed up towards a desired speed, keep a safe time gap, brake for the car ahead. With no accident and no bottleneck, small hesitations grow as they pass back from driver to driver until stop-and-go waves appear, as in Sugiyama's 2008 experiment. The whole sim runs in a fragment shader; the disc inside the ring is its space–time diagram, newest at the rim, and the jams show up as stripes drifting backwards against the traffic.`,techniques:[`Intelligent Driver Model`,`GPU sub-stepping`,`Space–time diagram`,`Polar mapping`,`Ring buffers`],controls:[`Click the road to make a driver slam the brakes`,`Scroll to add or remove cars`],pixelRatioCap:2,factory:ct}],$=r(),lt=`webgl-showcase`;function ut(e){let t=(0,x.c)(14),{logger:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`WebGL Showcase`}],t[0]=r):r=t[0];let a=r,[o,c]=(0,b.useState)(Q[0].id),l;t[1]===o?l=t[2]:(l=Q.find(e=>e.id===o)??Q[0],t[1]=o,t[2]=l);let u=l,f;t[3]===n?f=t[4]:(f=e=>{c(e),n?.info(`example selected: ${e}`,lt)},t[3]=n,t[4]=f);let p=f,m;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,$.jsx)(`div`,{"data-test":`webgl-showcase-header`,className:`page-header p-6 pb-0 flex-shrink-0`,children:(0,$.jsx)(`div`,{"data-test":`webgl-showcase-breadcrumbs`,className:`breadcrumb-section`,children:(0,$.jsx)(i,{items:a})})}),t[5]=m):m=t[5];let h;t[6]!==u.id||t[7]!==p?(h=(0,$.jsx)(s,{examples:Q,activeId:u.id,onSelect:p}),t[6]=u.id,t[7]=p,t[8]=h):h=t[8];let g;t[9]===u?g=t[10]:(g=(0,$.jsx)(d,{example:u},u.id),t[9]=u,t[10]=g);let _;return t[11]!==h||t[12]!==g?(_=(0,$.jsxs)(`div`,{"data-test":`webgl-showcase-demo-page`,className:`webgl-showcase-demo-page flex-1 flex flex-col h-full`,children:[m,(0,$.jsxs)(`div`,{"data-test":`webgl-showcase-content`,className:`page-content flex flex-1 gap-6 p-6 min-h-0`,children:[h,g]})]}),t[11]=h,t[12]=g,t[13]=_):_=t[13],_}export{ut as WebglShowcaseDemoPage};