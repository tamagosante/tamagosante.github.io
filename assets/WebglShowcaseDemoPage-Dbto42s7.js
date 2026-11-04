import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{d as t}from"./forms-CGyoCzTL.js";import{t as n}from"./react-vendor-DiEuJ95v.js";import{Vt as r}from"./radix-ui-ChmltTHn.js";import{t as i}from"./utils-DB5AfRrk.js";import{t as a}from"./Breadcrumbs-DkPghYrB.js";import{t as o}from"./badge-C4lxIcZ1.js";var s=e(t(),1),c=n(),l=4096,u={perceptionRadius:.11,separationRadius:.035,separation:2.6,alignment:1.4,cohesion:1.1,maxForce:1.8,minSpeed:.28,maxSpeed:.62,wander:.35},d={margin:.28,turn:2.4},f={radius:.7,speed:.45,headingSpread:.9},p={radius:.32,flee:6.5,scare:1.4,scareRadius:.45},m={length:.024,span:.016,farScale:.6,farHaze:.35};function h(e,t){let n=e/t;return n>=1?[n,1]:[1,1/n]}function g(e,t){return[(e.x*2-1)*t[0],(e.y*2-1)*t[1]]}var _=`#version 300 es
out vec2 vUv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`;function v(e,t,n,r){e.bindFramebuffer(e.FRAMEBUFFER,t),e.viewport(0,0,n,r),e.drawArrays(e.TRIANGLES,0,3)}function ee(e,t,n){let r=e.createShader(t);if(!r)throw Error(`gl.createShader failed`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`Shader compile error:\n${t}`)}return r}function y(e,t,n){let r=ee(e,e.VERTEX_SHADER,t),i=ee(e,e.FRAGMENT_SHADER,n),a=e.createProgram();if(!a)throw Error(`gl.createProgram failed`);if(e.attachShader(a,r),e.attachShader(a,i),e.linkProgram(a),e.deleteShader(r),e.deleteShader(i),!e.getProgramParameter(a,e.LINK_STATUS))throw Error(`Program link error:\n${e.getProgramInfoLog(a)}`);let o={},s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let t=0;t<s;t++){let n=e.getActiveUniform(a,t);if(!n)continue;let r=e.getUniformLocation(a,n.name);r&&(o[n.name]=r)}return{program:a,uniforms:o}}var te=[`EXT_color_buffer_float`,`EXT_color_buffer_half_float`];function ne(e){if(!te.some(t=>e.getExtension(t)))throw Error(`This GPU cannot render to floating-point textures.`);return{rgba:{internalFormat:e.RGBA16F,format:e.RGBA,type:e.HALF_FLOAT},rg:{internalFormat:e.RG16F,format:e.RG,type:e.HALF_FLOAT},r:{internalFormat:e.R16F,format:e.RED,type:e.HALF_FLOAT}}}function re(e){if(!e.getExtension(te[0]))throw Error(`This GPU cannot render to 32-bit float textures.`);return{rgba:{internalFormat:e.RGBA32F,format:e.RGBA,type:e.FLOAT},rg:{internalFormat:e.RG32F,format:e.RG,type:e.FLOAT}}}function b(e,t,n){let r=t>n?t/n:n/t,i=Math.round(e),a=Math.round(e*r);return t>n?{w:a,h:i}:{w:i,h:a}}function x(e,t,n,{internalFormat:r,format:i,type:a},o){let s=e.createTexture(),c=e.createFramebuffer();if(!s||!c)throw Error(`Failed to allocate render target`);if(e.bindTexture(e.TEXTURE_2D,s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,t,n,0,i,a,null),e.bindFramebuffer(e.FRAMEBUFFER,c),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,s,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw Error(`Render target is not framebuffer-complete on this GPU.`);return e.viewport(0,0,t,n),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,null),{texture:s,fbo:c,width:t,height:n,texelX:1/t,texelY:1/n}}function S(e,t,n,r,i){let a={read:x(e,t,n,r,i),write:x(e,t,n,r,i),swap(){[a.read,a.write]=[a.write,a.read]},width:t,height:n,texelX:1/t,texelY:1/n};return a}function C(e,t){e.deleteTexture(t.texture),e.deleteFramebuffer(t.fbo)}function w(e,t){C(e,t.read),C(e,t.write)}function T(e,t,n){return e.activeTexture(e.TEXTURE0+n),e.bindTexture(e.TEXTURE_2D,t.texture),n}var ie=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
out vec4 outColor;
`,ae=`
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
`,oe=`
uint pcg(uint v) {
  uint state = v * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand(inout uint s) {
  s = pcg(s);
  return float(s) * (1.0 / 4294967296.0);
}
`,se=ie+oe+`
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
`,ce=ie+ae+`
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
`,le=`#version 300 es
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
${oe}
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
`,ue=ie+ae+`
in vec3 vBary;
in float vFar;
uniform float uFarHaze;
const float EDGE_EPS = 1e-4;
void main() {
  float edge = min(min(vBary.x, vBary.y), vBary.z);
  float alpha = smoothstep(0.0, max(fwidth(edge), EDGE_EPS), edge);
  outColor = vec4(mix(INK, CLAY, vFar * uFarHaze), alpha);
}
`,de=Math.PI*2;function fe(e){let t={update:y(e,_,se),sky:y(e,_,ce),birds:y(e,le,ue)},n=S(e,64,64,re(e).rgba,e.NEAREST),r=Math.random()*de,i=0,a=t=>(e.useProgram(t.program),t.uniforms),o=({dt:o,extent:s,pointer:c,hunting:l,scare:m})=>{let h=a(t.update);e.uniform1i(h.uState,T(e,n.read,0)),e.uniform1i(h.uSize,64),e.uniform1ui(h.uSeed,i),e.uniform1f(h.uSpawnAll,+(i===0)),e.uniform1f(h.uDt,o),e.uniform2f(h.uExtent,s[0],s[1]),e.uniform2f(h.uRadii,u.perceptionRadius,u.separationRadius),e.uniform3f(h.uWeights,u.separation,u.alignment,u.cohesion),e.uniform1f(h.uMaxForce,u.maxForce),e.uniform2f(h.uSpeed,u.minSpeed,u.maxSpeed),e.uniform1f(h.uWander,u.wander),e.uniform2f(h.uEdges,d.margin,d.turn),e.uniform3f(h.uSeedShape,f.radius,f.speed,f.headingSpread),e.uniform1f(h.uSeedHeading,r),e.uniform2f(h.uPointer,c[0],c[1]),e.uniform1f(h.uPredator,+!!l),e.uniform2f(h.uFlee,p.radius,p.flee),e.uniform2f(h.uScare,m?p.scare:0,p.scareRadius),v(e,n.write.fbo,64,64),n.swap(),i++},s=(n,r,i)=>{let o=a(t.sky);e.uniform2f(o.uExtent,n[0],n[1]),v(e,null,r,i)},c=r=>{let i=a(t.birds);e.uniform1i(i.uState,T(e,n.read,0)),e.uniform1i(i.uSize,64),e.uniform2f(i.uExtent,r[0],r[1]),e.uniform2f(i.uShape,m.length,m.span),e.uniform1f(i.uFarScale,m.farScale),e.uniform1f(i.uFarHaze,m.farHaze),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,l*3),e.disable(e.BLEND)};return{step:o,render(e,t,n){s(e.extent,t,n),c(e.extent)},dispose(){w(e,n),Object.values(t).forEach(t=>e.deleteProgram(t.program))}}}function pe(e){let t=fe(e);return{frame({dt:e,width:n,height:r,pointer:i}){let a=h(n,r),o={dt:e,extent:a,pointer:g(i,a),hunting:i.inside,scare:i.clicks>0};t.step(o),t.render(o,n,r)},dispose(){t.dispose()}}}var me=Math.round(l*l/1e6),he={id:`flock`,title:`Murmuration`,tagline:`${l} starlings, each one watching all the others`,description:`Every bird is one texel of a 64×64 float texture. Each frame a fragment shader lets every bird look at every other bird, ${me} million reads, and steer by Reynolds' three rules: keep your distance, match your neighbours' heading, drift to their centre. Nobody leads; the shape of the flock is emergent. The birds are drawn from gl_VertexID with no vertex buffers.`,techniques:[`Boids`,`Brute-force O(N²) on the GPU`,`GPGPU state textures`,`Attribute-less rendering`,`Analytic AA`],controls:[`Hover to hunt like a hawk`,`Click to scatter the flock`],pixelRatioCap:2,factory:pe},E={simResolution:128,dyeResolution:1024,pressureIterations:22,pressureDecay:.8,velocityDissipation:.18,dyeDissipation:.9,curlStrength:28},D={radius:.0022,force:6e3,dyeIntensity:.16,dragBoost:1.8},O={count:9,ringRadius:.035,speed:900,intensity:.32},k={delayMs:2500,amplitudeX:.3,amplitudeY:.24,frequencyX:.53,frequencyY:.71,phaseOffset:Math.PI,forceScale:1.1,intensity:.1},ge=1100,_e=2.2,A=[[.851,.467,.341],[.957,.702,.38],[.898,.42,.52],[.42,.62,.85],[.941,.86,.74]],ve=Math.PI*2;function j(e,t,n=0){let r=e/_e+n,i=Math.floor(r),a=r-i,o=A[(i%A.length+A.length)%A.length],s=A[((i+1)%A.length+A.length)%A.length],c=a*a*(3-2*a);return[(o[0]+(s[0]-o[0])*c)*t,(o[1]+(s[1]-o[1])*c)*t,(o[2]+(s[2]-o[2])*c)*t]}function ye(e){for(let t=0;t<7;t++){let n=Math.random()*ve;e.splat(Math.random(),Math.random(),Math.cos(n)*ge,Math.sin(n)*ge,j(0,D.dyeIntensity*2,t))}}function be(e,t,n,r,i){for(let a=0;a<O.count;a++){let o=a/O.count*ve,s=Math.cos(o),c=Math.sin(o);e.splat(t+s*O.ringRadius/r,n+c*O.ringRadius,s*O.speed,c*O.speed,j(i,O.intensity,a/O.count))}}function xe(e,t){return{x:.5+k.amplitudeX*Math.sin(e*k.frequencyX+t),y:.5+k.amplitudeY*Math.sin(e*k.frequencyY+t*.5)}}function Se(e,t,n){[0,k.phaseOffset].forEach((r,i)=>{let a=xe(t,r),o=xe(t-n,r);e.splat(a.x,a.y,(a.x-o.x)*D.force*k.forceScale,(a.y-o.y)*D.force*k.forceScale,j(t,k.intensity,i*A.length*.5))})}var M=`#version 300 es
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
`,Ce={splat:M+`
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
`};function we(e){let t=ne(e),n=Object.fromEntries(Object.entries(Ce).map(([t,n])=>[t,y(e,_,n)])),r=null,i=1,a=t=>(e.useProgram(t.program),t.uniforms),o=t=>v(e,t.fbo,t.width,t.height),s=(t,r)=>{let i=a(n.scale);e.uniform1f(i.uValue,1),e.uniform1i(i.uSource,T(e,t,0)),o(r)},c=t=>{w(e,t.velocity),w(e,t.dye),w(e,t.pressure),C(e,t.divergence),C(e,t.curl)},l=(n,r)=>{let i=b(E.simResolution,n,r),a=b(E.dyeResolution,n,r);return{key:`${i.w}x${i.h}`,velocity:S(e,i.w,i.h,t.rg,e.LINEAR),dye:S(e,a.w,a.h,t.rgba,e.LINEAR),pressure:S(e,i.w,i.h,t.r,e.NEAREST),divergence:x(e,i.w,i.h,t.r,e.NEAREST),curl:x(e,i.w,i.h,t.r,e.NEAREST)}},u=(t,r,s,c)=>{let l=a(n.splat);e.uniform1i(l.uTarget,T(e,t.read,0)),e.uniform1f(l.uAspect,i),e.uniform2f(l.uPoint,r,s),e.uniform3f(l.uColor,c[0],c[1],c[2]),e.uniform1f(l.uRadius,D.radius*Math.max(i,1)),o(t.write),t.swap()};return{resize(e,t){i=e/t;let n=b(E.simResolution,e,t);if(r&&r.key===`${n.w}x${n.h}`)return;let a=l(e,t);r&&(s(r.velocity.read,a.velocity.read),s(r.dye.read,a.dye.read),c(r)),r=a},splat(e,t,n,i,a){r&&(u(r.velocity,e,t,[n,i,0]),u(r.dye,e,t,a))},step(t){if(!r)return;let{velocity:i,pressure:s,divergence:c,curl:l,dye:u}=r,d=t=>e.uniform2f(t.uTexel,i.texelX,i.texelY),f=a(n.curl);d(f),e.uniform1i(f.uVelocity,T(e,i.read,0)),o(l),f=a(n.vorticity),d(f),e.uniform1i(f.uVelocity,T(e,i.read,0)),e.uniform1i(f.uCurl,T(e,l,1)),e.uniform1f(f.uCurlStrength,E.curlStrength),e.uniform1f(f.uDt,t),o(i.write),i.swap(),f=a(n.divergence),d(f),e.uniform1i(f.uVelocity,T(e,i.read,0)),o(c),f=a(n.scale),e.uniform1f(f.uValue,E.pressureDecay),e.uniform1i(f.uSource,T(e,s.read,0)),o(s.write),s.swap(),f=a(n.pressure),d(f),e.uniform1i(f.uDivergence,T(e,c,1));for(let t=0;t<E.pressureIterations;t++)e.uniform1i(f.uPressure,T(e,s.read,0)),o(s.write),s.swap();f=a(n.gradient),d(f),e.uniform1i(f.uPressure,T(e,s.read,0)),e.uniform1i(f.uVelocity,T(e,i.read,1)),o(i.write),i.swap(),f=a(n.advect),d(f),e.uniform1f(f.uDt,t),e.uniform1i(f.uVelocity,T(e,i.read,0)),e.uniform1i(f.uSource,T(e,i.read,0)),e.uniform1f(f.uDissipation,E.velocityDissipation),o(i.write),i.swap(),e.uniform1i(f.uVelocity,T(e,i.read,0)),e.uniform1i(f.uSource,T(e,u.read,1)),e.uniform1f(f.uDissipation,E.dyeDissipation),o(u.write),u.swap()},render(t,i){if(!r)return;let o=a(n.display);e.uniform2f(o.uTexel,r.dye.texelX,r.dye.texelY),e.uniform1i(o.uDye,T(e,r.dye.read,0)),v(e,null,t,i)},dispose(){r&&c(r),Object.values(n).forEach(t=>e.deleteProgram(t.program))}}}function Te(e){let t=we(e),n=!1;return{frame({time:e,dt:r,width:i,height:a,pointer:o}){t.resize(i,a),n||=(ye(t),!0);let s=i/a;if(o.clicks>0&&be(t,o.x,o.y,s,e),o.inside&&(o.dx!==0||o.dy!==0)){let n=o.dx*(s<1?s:1)*D.force,r=o.dy/(s>1?s:1)*D.force,i=D.dyeIntensity*(o.down?D.dragBoost:1);t.splat(o.x,o.y,n,r,j(e,i))}else o.idleMs>k.delayMs&&Se(t,e,r);t.step(r),t.render(i,a)},dispose(){t.dispose()}}}var Ee={id:`fluid`,title:`Ink in Water`,tagline:`Real-time Navier–Stokes on the GPU`,description:`An incompressible fluid solved entirely in fragment shaders: advect, re-inject vorticity, project out divergence with ~20 Jacobi passes, every frame. Your cursor pushes velocity and drops dye; leave it alone and two emitters keep stirring.`,techniques:[`Stable fluids`,`Ping-pong FBOs`,`Half-float targets`,`Vorticity confinement`,`Jacobi solver`],controls:[`Move to stir`,`Drag for richer ink`,`Click to bloom`,`Idle → self-stirring`],pixelRatioCap:2,factory:Te},P={initialYaw:.7,initialPitch:.32,initialDistance:2.55,minDistance:1.4,maxDistance:4.5,dragRadians:4,pitchLimit:1.45,wheelZoom:.0012,damping:7,autoYawSpeed:.09,autoRotateDelayMs:2500},De={base:8,swing:2,speed:.11},Oe=`#version 300 es
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
`,ke=(e,t,n)=>Math.min(n,Math.max(t,e));function Ae(e){let{program:t,uniforms:n}=y(e,_,Oe),r={yaw:P.initialYaw,pitch:P.initialPitch,distance:P.initialDistance},i={...r};return{frame({time:a,dt:o,width:s,height:c,pointer:l}){l.down?(r.yaw-=l.dx*P.dragRadians,r.pitch=ke(r.pitch-l.dy*P.dragRadians,-P.pitchLimit,P.pitchLimit)):l.idleMs>P.autoRotateDelayMs&&(r.yaw+=P.autoYawSpeed*o),r.distance=ke(r.distance*Math.exp(l.wheel*P.wheelZoom),P.minDistance,P.maxDistance);let u=1-Math.exp(-P.damping*o);i.yaw+=(r.yaw-i.yaw)*u,i.pitch+=(r.pitch-i.pitch)*u,i.distance+=(r.distance-i.distance)*u;let d=Math.cos(i.pitch);e.useProgram(t),e.uniform2f(n.uResolution,s,c),e.uniform3f(n.uCamPos,i.distance*d*Math.sin(i.yaw),i.distance*Math.sin(i.pitch),i.distance*d*Math.cos(i.yaw)),e.uniform1f(n.uPower,De.base+De.swing*Math.sin(a*De.speed)),v(e,null,s,c)},dispose(){e.deleteProgram(t)}}}var je={id:`mandelbulb`,title:`Breathing Mandelbulb`,tagline:`A 3D fractal, raymarched per pixel`,description:`No meshes: every pixel casts a ray and sphere-traces the Mandelbulb's analytic distance estimate. The fractal power drifts between 6 and 10, so the surface slowly grows and dissolves its own spires.`,techniques:[`Sphere tracing`,`Distance estimator`,`Soft shadows`,`Ambient occlusion`,`Orbit traps`],controls:[`Drag to orbit`,`Scroll to zoom`,`Idle → auto-rotate`],pixelRatioCap:1,factory:Ae},Me=1.5,Ne=262144,F={arms:3,winding:4.2,armSpread:.38,escapeMargin:1.05,patternSpeed:.12,spawnRadius:.95,radialExponent:1.6,orbitSpeed:.34,coreRadius:.18,inwardPull:.05,respawnRate:.06},I={scale:1.7,strength:.11,drift:.06,response:1.8},L={hoverPull:.05,holdPull:.32,softening:.08,burst:1.6,burstRadius:.35},R={fadePerFrame:.92,referenceHz:60,pointSize:1.6,intensity:.045,exposure:1.35,hotSpeed:.9},z=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
out vec4 outColor;
`,Pe=`
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 AMBER = vec3(0.957, 0.702, 0.38);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
const vec3 DUSK = vec3(0.42, 0.62, 0.85);
`,Fe=z+`
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
`,Ie=`#version 300 es
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
${Pe}
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
`,Le=z+`
in vec3 vColor;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  outColor = vec4(vColor * (1.0 - smoothstep(0.4, 1.0, d)), 1.0);
}
`,Re=z+`
in vec2 vUv;
uniform sampler2D uSource;
uniform float uValue;
void main() { outColor = uValue * texture(uSource, vUv); }
`,ze=z+Pe+`
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
`;function Be(e){let t=ne(e).rgba,n={update:y(e,_,Fe),points:y(e,Ie,Le),fade:y(e,_,Re),display:y(e,_,ze)},r=S(e,512,512,re(e).rgba,e.NEAREST),i=null,a=0,o=t=>(e.useProgram(t.program),t.uniforms),s=t=>v(e,t.fbo,t.width,t.height),c=({time:t,dt:i,extent:c,pointer:l,pull:u,burst:d})=>{let f=o(n.update);e.uniform1i(f.uState,T(e,r.read,0)),e.uniform1i(f.uSize,512),e.uniform1ui(f.uSeed,a),e.uniform1f(f.uSpawnAll,+(a===0)),e.uniform1f(f.uRespawnChance,F.respawnRate*i),e.uniform1f(f.uTime,t),e.uniform1f(f.uDt,i),e.uniform1f(f.uArms,F.arms),e.uniform1f(f.uWinding,F.winding),e.uniform1f(f.uArmSpread,F.armSpread),e.uniform1f(f.uSpawnRadius,F.spawnRadius),e.uniform1f(f.uRadialExponent,F.radialExponent),e.uniform1f(f.uPatternAngle,t*F.patternSpeed),e.uniform1f(f.uEscapeRadius,Math.hypot(c[0],c[1])*F.escapeMargin),e.uniform1f(f.uOrbitSpeed,F.orbitSpeed),e.uniform1f(f.uCoreRadius,F.coreRadius),e.uniform1f(f.uInwardPull,F.inwardPull),e.uniform3f(f.uFlow,I.scale,I.strength,I.drift),e.uniform1f(f.uResponse,I.response),e.uniform2f(f.uPointer,l[0],l[1]),e.uniform1f(f.uPull,u),e.uniform1f(f.uSoftening,L.softening),e.uniform1f(f.uBurst,d),e.uniform1f(f.uBurstRadius,L.burstRadius),s(r.write),r.swap(),a++},l=(t,r)=>{let i=o(n.fade);e.uniform1i(i.uSource,T(e,t.read,0)),e.uniform1f(i.uValue,R.fadePerFrame**+(r*R.referenceHz)),s(t.write)},u=(t,i)=>{let a=o(n.points);e.uniform1i(a.uState,T(e,r.read,0)),e.uniform1i(a.uSize,512),e.uniform2f(a.uExtent,i[0],i[1]),e.uniform1f(a.uPointSize,R.pointSize),e.uniform1f(a.uIntensity,R.intensity),e.uniform1f(a.uSpawnRadius,F.spawnRadius),e.uniform1f(a.uHotSpeed,R.hotSpeed),e.bindFramebuffer(e.FRAMEBUFFER,t.write.fbo),e.viewport(0,0,t.width,t.height),e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE),e.drawArrays(e.POINTS,0,Ne),e.disable(e.BLEND),t.swap()};return{resize(n,r){i&&i.width===n&&i.height===r||(i&&w(e,i),i=S(e,n,r,t,e.LINEAR))},step(e){c(e)},render(t,r,a){if(!i)return;l(i,t.dt),u(i,t.extent);let s=o(n.display);e.uniform1i(s.uTrail,T(e,i.read,0)),e.uniform1f(s.uExposure,R.exposure),v(e,null,r,a)},dispose(){w(e,r),i&&w(e,i),Object.values(n).forEach(t=>e.deleteProgram(t.program))}}}function Ve(e){let t=Be(e);return{frame({time:e,dt:n,width:r,height:i,pointer:a}){t.resize(r,i);let o=h(r,i),s={time:e,dt:n,extent:o,pointer:g(a,o),pull:a.inside?a.down?L.holdPull:L.hoverPull:0,burst:a.clicks>0?L.burst:0};t.step(s),t.render(s,r,i)},dispose(){t.dispose()}}}var He={id:`particles`,title:`Particle Galaxy`,tagline:`${Math.round(Ne/1024)}k stars, simulated and drawn on the GPU`,description:`Every star's position and velocity live in one texel of a 512×512 float texture, integrated by a fragment shader. They orbit on a flat rotation curve, swirl through curl noise and stream along slowly turning spiral arms; the points are drawn without a single vertex buffer and pile up additively into fading light trails.`,techniques:[`GPGPU state textures`,`Attribute-less rendering`,`Curl noise`,`Additive trails`,`PCG hashing`],controls:[`Hover to tug stars`,`Hold to pull harder`,`Click to scatter`],pixelRatioCap:Me,factory:Ve},Ue={resolution:512},We={u:1,v:.5,dt:1},Ge={perSecond:720,minPerFrame:1,maxPerFrame:24},B=[{feed:.0545,kill:.062},{feed:.0367,kill:.0649},{feed:.029,kill:.057},{feed:.078,kill:.061}],Ke=.0015,V={radius:18e-5,strength:.5,clickRadius:.0012,clickStrength:1},H={count:9,margin:.15},U={delayMs:4e3,amplitudeX:.36,amplitudeY:.32,frequencyX:.23,frequencyY:.31,intervalSeconds:.35},W={low:.08,mid:.22,high:.36,reliefScale:6},G=`#version 300 es
precision highp float;
precision highp sampler2D;
in vec2 vUv;
out vec4 outColor;
uniform vec2 uTexel;
`,qe={init:G+`
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
`};function Je(e){let t=Math.min(Math.floor(e),B.length-2),n=e-t,r=B[t],i=B[t+1];return{feed:r.feed+(i.feed-r.feed)*n,kill:r.kill+(i.kill-r.kill)*n}}function Ye(e){let t=ne(e).rg,n=Object.fromEntries(Object.entries(qe).map(([t,n])=>[t,y(e,_,n)])),r=null,i=1,a=0,o=0,s=t=>(e.useProgram(t.program),t.uniforms),c=t=>v(e,t.fbo,t.width,t.height),l=(t,r,a,o,l)=>{let u=s(n.seed);e.uniform1i(u.uState,T(e,t.read,0)),e.uniform1f(u.uAspect,i),e.uniform2f(u.uPoint,r,a),e.uniform1f(u.uRadius,o*Math.max(i,1)),e.uniform1f(u.uStrength,l),c(t.write),t.swap()},u=e=>{let t=1-2*H.margin;for(let n=0;n<H.count;n++){let n=H.margin+Math.random()*t,r=H.margin+Math.random()*t;l(e,n,r,V.clickRadius,V.clickStrength)}},d=(a,o)=>{i=a/o;let l=b(Ue.resolution,a,o);if(r&&r.width===l.w&&r.height===l.h)return r;let d=S(e,l.w,l.h,t,e.LINEAR);if(r){let t=s(n.copy);e.uniform1i(t.uSource,T(e,r.read,0)),c(d.read),w(e,r)}else s(n.init),c(d.read),u(d);return r=d,d},f=(t,r)=>{let{feed:i,kill:o}=Je(a),l=s(n.update);e.uniform2f(l.uTexel,t.texelX,t.texelY),e.uniform1f(l.uDu,We.u),e.uniform1f(l.uDv,We.v),e.uniform1f(l.uFeed,i),e.uniform1f(l.uKill,o),e.uniform1f(l.uDt,We.dt);for(let n=0;n<r;n++)e.uniform1i(l.uState,T(e,t.read,0)),c(t.write),t.swap()},p=(t,r,i)=>{let a=s(n.display);e.uniform2f(a.uTexel,t.texelX,t.texelY),e.uniform1i(a.uState,T(e,t.read,0)),e.uniform3f(a.uRamp,W.low,W.mid,W.high),e.uniform1f(a.uRelief,W.reliefScale),v(e,null,r,i)};return{frame({time:e,dt:t,width:n,height:r,pointer:i}){let s=d(n,r);if(a=Math.min(Math.max(a+i.wheel*Ke,0),B.length-1),i.clicks>0&&l(s,i.x,i.y,V.clickRadius,V.clickStrength),i.inside&&(i.dx!==0||i.dy!==0))l(s,i.x,i.y,V.radius,V.strength);else if(i.idleMs>U.delayMs&&(o+=t,o>=U.intervalSeconds)){o=0;let t=.5+U.amplitudeX*Math.sin(e*U.frequencyX),n=.5+U.amplitudeY*Math.sin(e*U.frequencyY);l(s,t,n,V.radius,V.strength)}let c=Math.min(Math.max(Math.round(t*Ge.perSecond),Ge.minPerFrame),Ge.maxPerFrame);f(s,c),p(s,n,r)},dispose(){r&&w(e,r),Object.values(n).forEach(t=>e.deleteProgram(t.program))}}}var Xe={id:`reaction`,title:`Living Coral`,tagline:`Gray-Scott reaction–diffusion`,description:`Two virtual chemicals on a 512-cell grid: one is fed in, the other consumes it to copy itself and slowly dies. A dozen update passes per frame grow branching coral out of a few seeds; scrolling slides the feed and kill rates into mitosis, labyrinths and worms.`,techniques:[`Reaction–diffusion`,`9-point Laplacian`,`Ping-pong FBOs`,`Relief lighting`],controls:[`Move to seed`,`Click for a big seed`,`Scroll to morph the pattern`,`Idle → self-seeding`],pixelRatioCap:1,factory:Ye},K={length:800,carLength:5},q={desiredSpeed:30,headway:1.5,maxAccel:.5,comfortDecel:1.5,minGap:2,freeExponent:4,gapFloor:.1,noise:.08},J={timeScale:3,subStep:.05,maxSubSteps:12},Ze={speed:8,speedNoise:.4},Qe={duration:1.2,decel:6,clickTolerance:.14},Y={ringRadius:.74,roadHalfWidth:.04,edgeLine:.004,carWidth:.02,historyGap:.05,startAngle:Math.PI/2},X={bins:512,rows:256,rowInterval:.5,fade:.28},Z=`#version 300 es
precision highp float;
precision highp int;
precision highp sampler2D;
out vec4 outColor;
`,$e=`
const vec3 INK = vec3(0.078, 0.078, 0.075);
const vec3 ASPHALT = vec3(0.16, 0.155, 0.15);
const vec3 CLAY = vec3(0.851, 0.467, 0.341);
const vec3 AMBER = vec3(0.957, 0.702, 0.38);
const vec3 CREAM = vec3(0.941, 0.933, 0.902);
vec3 speedColor(float t) { return mix(CLAY, CREAM, smoothstep(0.0, 1.0, t)); }
`,et=Z+`
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
`,tt=Z+`
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
`,nt=Z+$e+`
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
`,rt=`#version 300 es
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
${$e}
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
`,it=Z+`
in vec2 vLocal;
in vec3 vColor;
const float AA_EPS = 1e-4;
void main() {
  vec2 inside = (1.0 - abs(vLocal)) / max(fwidth(vLocal), AA_EPS);
  outColor = vec4(vColor, clamp(min(inside.x, inside.y), 0.0, 1.0));
}
`,at=-1,ot=-1;function st(e){let t={update:y(e,_,et),history:y(e,_,tt),scene:y(e,_,nt),cars:y(e,rt,it)},n=S(e,96,1,re(e).rgba,e.NEAREST),r={internalFormat:e.RGBA8,format:e.RGBA,type:e.UNSIGNED_BYTE},i=x(e,X.bins,X.rows,r,e.LINEAR);e.bindTexture(e.TEXTURE_2D,i.texture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT);let a=36,o=0,s=0,c=0,l=0,u=null,d=t=>(e.useProgram(t.program),t.uniforms),f=r=>{let i=d(t.update);e.uniform1i(i.uState,T(e,n.read,0)),e.uniform1i(i.uCount,a),e.uniform1ui(i.uSeed,o++),e.uniform1f(i.uSpawnAll,+!!r.spawnAll),e.uniform1i(i.uInsert,r.insert??at),e.uniform1f(i.uDt,r.dt??0),e.uniform2f(i.uRoad,K.length,K.carLength),e.uniform4f(i.uIdm,q.desiredSpeed,q.headway,q.maxAccel,q.comfortDecel),e.uniform4f(i.uIdmExtra,q.minGap,q.freeExponent,q.gapFloor,q.noise),e.uniform2f(i.uSeedSpeed,Ze.speed,Ze.speedNoise),e.uniform1f(i.uBrakeAt,r.brakeAt??ot),e.uniform2f(i.uBrake,Qe.duration,Qe.decel),v(e,n.write.fbo,96,1),n.swap()},p=()=>{l=(l+1)%X.rows;let r=d(t.history);e.uniform1i(r.uState,T(e,n.read,0)),e.uniform1i(r.uCount,a),e.uniform1i(r.uBins,X.bins),e.uniform2f(r.uRoad,K.length,K.carLength),e.uniform1f(r.uColorSpeed,15),e.bindFramebuffer(e.FRAMEBUFFER,i.fbo),e.viewport(0,l,X.bins,1),e.drawArrays(e.TRIANGLES,0,3)},m=e=>{e>a?(a++,f({insert:a-1})):e<a&&a--};return f({spawnAll:!0}),{step({dt:e,targetCount:t,brakeAt:n}){for(m(t),s=Math.min(s+e*J.timeScale,J.subStep*J.maxSubSteps),n!==null&&(u=n);s>=J.subStep;)f({dt:J.subStep,brakeAt:u??ot}),u=null,s-=J.subStep,c+=J.subStep,c>=X.rowInterval&&(c-=X.rowInterval,p())},render({extent:r},o,s){let c=Y.ringRadius,u=d(t.scene);e.uniform2f(u.uExtent,r[0],r[1]),e.uniform3f(u.uRing,c,Y.roadHalfWidth,Y.edgeLine),e.uniform1f(u.uHistoryRadius,c-Y.roadHalfWidth-Y.historyGap),e.uniform1f(u.uStartAngle,Y.startAngle),e.uniform1i(u.uHistory,T(e,i,0)),e.uniform1f(u.uNewestRow,l),e.uniform1f(u.uRows,X.rows),e.uniform1f(u.uFade,X.fade),v(e,null,o,s);let f=d(t.cars);e.uniform1i(f.uState,T(e,n.read,0)),e.uniform2f(f.uExtent,r[0],r[1]),e.uniform2f(f.uRoad,K.length,K.carLength),e.uniform1f(f.uRingRadius,c),e.uniform1f(f.uStartAngle,Y.startAngle),e.uniform1f(f.uCarWidth,Y.carWidth),e.uniform1f(f.uColorSpeed,15),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.drawArrays(e.TRIANGLES,0,a*6),e.disable(e.BLEND)},dispose(){w(e,n),C(e,i),Object.values(t).forEach(t=>e.deleteProgram(t.program))}}}var ct=Math.PI*2;function lt(e,t){if(e.clicks===0)return null;let[n,r]=g(e,t);if(Math.abs(Math.hypot(n,r)-Y.ringRadius)>Qe.clickTolerance)return null;let i=(Math.atan2(r,n)-Y.startAngle)/ct;return(i-Math.floor(i))*K.length}function ut(e){let t=st(e),n=36;return{frame({dt:e,width:r,height:i,pointer:a}){let o=h(r,i);n=Math.min(Math.max(n-a.wheel/40,8),96);let s={dt:e,extent:o,targetCount:Math.round(n),brakeAt:lt(a,o)};t.step(s),t.render(s,r,i)},dispose(){t.dispose()}}}var Q=[je,Ee,Xe,He,he,{id:`traffic`,title:`Phantom Jam`,tagline:`A traffic jam with no cause, forming out of nothing on a ring road`,description:`Cars drive one lane in a circle, each following the Intelligent Driver Model: speed up towards a desired speed, keep a safe time gap, brake for the car ahead. With no accident and no bottleneck, small hesitations grow as they pass back from driver to driver until stop-and-go waves appear, as in Sugiyama's 2008 experiment. The whole sim runs in a fragment shader; the disc inside the ring is its space–time diagram, newest at the rim, and the jams show up as stripes drifting backwards against the traffic.`,techniques:[`Intelligent Driver Model`,`GPU sub-stepping`,`Space–time diagram`,`Polar mapping`,`Ring buffers`],controls:[`Click the road to make a driver slam the brakes`,`Scroll to add or remove cars`],pixelRatioCap:2,factory:ut}],$=r(),dt=2;function ft(e){let t=(0,c.c)(10),{examples:n,activeId:r,onSelect:a}=e,o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(`p`,{"data-test":`webgl-example-list-intro`,className:`text-xs uppercase tracking-wider text-muted-foreground`,children:`Raw WebGL2 · zero libraries`}),t[0]=o):o=t[0];let s;if(t[1]!==r||t[2]!==n||t[3]!==a){let e;t[5]!==r||t[6]!==a?(e=(e,t)=>{let n=e.id===r;return(0,$.jsxs)(`button`,{"data-test":`webgl-example-item`,"data-testid":e.id,type:`button`,"aria-pressed":n,onClick:()=>a(e.id),className:i(`flex flex-col gap-2 rounded-xl border p-4 text-left transition-colors`,n?`border-primary bg-accent`:`hover:bg-accent/50`),children:[(0,$.jsxs)(`div`,{"data-test":`webgl-example-heading`,className:`flex items-baseline gap-3`,children:[(0,$.jsx)(`span`,{"data-test":`webgl-example-index`,className:`font-mono text-xs text-muted-foreground`,children:String(t+1).padStart(dt,`0`)}),(0,$.jsx)(`span`,{"data-test":`webgl-example-title`,className:`font-semibold`,children:e.title})]}),(0,$.jsx)(`span`,{"data-test":`webgl-example-tagline`,className:`text-sm text-muted-foreground`,children:e.tagline}),n&&(0,$.jsx)(`p`,{"data-test":`webgl-example-description`,className:`text-sm leading-relaxed`,children:e.description}),(0,$.jsx)(`div`,{"data-test":`webgl-example-techniques`,className:`flex flex-wrap gap-1`,children:e.techniques.map(pt)})]},e.id)},t[5]=r,t[6]=a,t[7]=e):e=t[7],s=n.map(e),t[1]=r,t[2]=n,t[3]=a,t[4]=s}else s=t[4];let l;return t[8]===s?l=t[9]:(l=(0,$.jsxs)(`aside`,{"data-test":`webgl-example-list`,className:`flex w-[25vw] shrink-0 flex-col gap-3 overflow-y-auto`,children:[o,s]}),t[8]=s,t[9]=l),l}function pt(e){return(0,$.jsx)(o,{"data-test":`webgl-technique-badge`,variant:`secondary`,children:e},e)}var mt=1e3,ht=1/30,gt={alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:`high-performance`};function _t(e){let t={x:.5,y:.5,dx:0,dy:0,down:!1,inside:!1,clicks:0,wheel:0,idleMs:0},n=-1/0,r=!1,i=t=>{let n=e.getBoundingClientRect();return{x:(t.clientX-n.left)/Math.max(n.width,1),y:1-(t.clientY-n.top)/Math.max(n.height,1)}},a=e=>{let a=i(e);r?(t.dx+=a.x-t.x,t.dy+=a.y-t.y,t.x=a.x,t.y=a.y,t.inside=!0,n=performance.now()):o(e)},o=e=>{let n=i(e);t.x=n.x,t.y=n.y,t.inside=!0,r=!0},s=r=>{o(r),t.down=!0,t.clicks+=1,n=performance.now(),e.setPointerCapture(r.pointerId)},c=n=>{t.down=!1,e.hasPointerCapture(n.pointerId)&&e.releasePointerCapture(n.pointerId)},l=()=>{t.inside=!1,r=!1},u=e=>{e.preventDefault(),t.wheel+=e.deltaY,n=performance.now()};return e.addEventListener(`pointermove`,a),e.addEventListener(`pointerenter`,o),e.addEventListener(`pointerdown`,s),e.addEventListener(`pointerup`,c),e.addEventListener(`pointercancel`,c),e.addEventListener(`pointerleave`,l),e.addEventListener(`wheel`,u,{passive:!1}),{take(e){let r={...t,idleMs:e-n};return t.dx=0,t.dy=0,t.clicks=0,t.wheel=0,r},dispose(){e.removeEventListener(`pointermove`,a),e.removeEventListener(`pointerenter`,o),e.removeEventListener(`pointerdown`,s),e.removeEventListener(`pointerup`,c),e.removeEventListener(`pointercancel`,c),e.removeEventListener(`pointerleave`,l),e.removeEventListener(`wheel`,u)}}}var vt=`WEBGL_lose_context`;function yt(e,t,n){let r=e.getContext(`webgl2`,gt);if(!r)throw Error(`WebGL2 is not available in this browser.`);let i=()=>{let n=Math.min(window.devicePixelRatio||1,t.pixelRatioCap),r=Math.max(1,Math.round(e.clientWidth*n)),i=Math.max(1,Math.round(e.clientHeight*n));(e.width!==r||e.height!==i)&&(e.width=r,e.height=i)};i();let a=new ResizeObserver(i);a.observe(e);let o=t.factory(r),s=_t(e),c=performance.now(),l=c,u=c,d=0,f=0,p=t=>{f=requestAnimationFrame(p);let r=Math.min((t-l)/mt,ht);l=t,o.frame({time:(t-c)/mt,dt:r,width:e.width,height:e.height,pointer:s.take(t)}),d+=1,t-u>=500&&(n({fps:d*mt/(t-u),width:e.width,height:e.height}),u=t,d=0)};return f=requestAnimationFrame(p),()=>{cancelAnimationFrame(f),a.disconnect(),s.dispose(),o.dispose(),r.getExtension(vt)?.loseContext()}}function bt(e,t){let n=(0,c.c)(7),[r,i]=(0,s.useState)(null),[a,o]=(0,s.useState)(null),l,u;n[0]!==e||n[1]!==t?(l=()=>{let n=e.current;if(n)try{return yt(n,t,i)}catch(e){let t=e;o(t instanceof Error?t.message:String(t));return}},u=[e,t],n[0]=e,n[1]=t,n[2]=l,n[3]=u):(l=n[2],u=n[3]),(0,s.useEffect)(l,u);let d;return n[4]!==a||n[5]!==r?(d={stats:r,error:a},n[4]=a,n[5]=r,n[6]=d):d=n[6],d}function xt(e){let t=(0,c.c)(18),{example:n}=e,r=(0,s.useRef)(null),{stats:i,error:a}=bt(r,n),o;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(o=(0,$.jsx)(`canvas`,{"data-test":`webgl-canvas`,ref:r,className:`absolute inset-0 h-full w-full cursor-crosshair touch-none select-none`}),t[0]=o):o=t[0];let l;t[1]===n.title?l=t[2]:(l=(0,$.jsx)(`span`,{"data-test":`webgl-hud-title`,className:`text-sm font-semibold text-white/90`,children:n.title}),t[1]=n.title,t[2]=l);let u;t[3]===i?u=t[4]:(u=i&&(0,$.jsxs)(`span`,{"data-test":`webgl-hud-stats`,children:[Math.round(i.fps),` fps · `,i.width,`×`,i.height]}),t[3]=i,t[4]=u);let d;t[5]!==l||t[6]!==u?(d=(0,$.jsxs)(`div`,{"data-test":`webgl-hud`,className:`pointer-events-none absolute left-4 top-4 flex items-baseline gap-3 font-mono text-xs text-white/70`,children:[l,u]}),t[5]=l,t[6]=u,t[7]=d):d=t[7];let f;t[8]===n.controls?f=t[9]:(f=n.controls.map(St),t[8]=n.controls,t[9]=f);let p;t[10]===f?p=t[11]:(p=(0,$.jsx)(`div`,{"data-test":`webgl-controls-hint`,className:`pointer-events-none absolute bottom-4 left-4 right-4 flex flex-wrap gap-2`,children:f}),t[10]=f,t[11]=p);let m;t[12]===a?m=t[13]:(m=a&&(0,$.jsx)(`div`,{"data-test":`webgl-error`,className:`absolute inset-0 flex items-center justify-center p-8 text-center text-sm text-red-300`,children:(0,$.jsx)(`pre`,{"data-test":`webgl-error-message`,className:`whitespace-pre-wrap font-mono`,children:a})}),t[12]=a,t[13]=m);let h;return t[14]!==d||t[15]!==p||t[16]!==m?(h=(0,$.jsxs)(`div`,{"data-test":`webgl-viewport`,className:`relative min-w-0 flex-1 overflow-hidden rounded-xl border bg-black`,children:[o,d,p,m]}),t[14]=d,t[15]=p,t[16]=m,t[17]=h):h=t[17],h}function St(e){return(0,$.jsx)(`span`,{"data-test":`webgl-control-chip`,className:`rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur`,children:e},e)}var Ct=`webgl-showcase`;function wt(e){let t=(0,c.c)(14),{logger:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=[{label:`Home`,href:`/`},{label:`Demo`,href:`/demo`},{label:`WebGL Showcase`}],t[0]=r):r=t[0];let i=r,[o,l]=(0,s.useState)(Q[0].id),u;t[1]===o?u=t[2]:(u=Q.find(e=>e.id===o)??Q[0],t[1]=o,t[2]=u);let d=u,f;t[3]===n?f=t[4]:(f=e=>{l(e),n?.info(`example selected: ${e}`,Ct)},t[3]=n,t[4]=f);let p=f,m;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,$.jsx)(`div`,{"data-test":`webgl-showcase-header`,className:`page-header p-6 pb-0 flex-shrink-0`,children:(0,$.jsx)(`div`,{"data-test":`webgl-showcase-breadcrumbs`,className:`breadcrumb-section`,children:(0,$.jsx)(a,{items:i})})}),t[5]=m):m=t[5];let h;t[6]!==d.id||t[7]!==p?(h=(0,$.jsx)(ft,{examples:Q,activeId:d.id,onSelect:p}),t[6]=d.id,t[7]=p,t[8]=h):h=t[8];let g;t[9]===d?g=t[10]:(g=(0,$.jsx)(xt,{example:d},d.id),t[9]=d,t[10]=g);let _;return t[11]!==h||t[12]!==g?(_=(0,$.jsxs)(`div`,{"data-test":`webgl-showcase-demo-page`,className:`webgl-showcase-demo-page flex-1 flex flex-col h-full`,children:[m,(0,$.jsxs)(`div`,{"data-test":`webgl-showcase-content`,className:`page-content flex flex-1 gap-6 p-6 min-h-0`,children:[h,g]})]}),t[11]=h,t[12]=g,t[13]=_):_=t[13],_}export{wt as WebglShowcaseDemoPage};