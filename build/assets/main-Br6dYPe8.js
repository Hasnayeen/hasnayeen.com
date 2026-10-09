import{A as e,B as t,C as n,Ct as r,D as i,Dt as a,Et as o,G as s,H as c,K as l,M as u,O as d,Ot as f,Q as p,R as m,S as h,St as g,T as _,Tt as v,U as y,V as b,W as x,X as S,Y as C,Z as w,_ as T,_t as E,a as D,at as O,b as k,bt as ee,c as te,ct as ne,d as re,dt as A,f as j,ft as ie,g as ae,ht as oe,i as se,it as ce,j as le,k as M,l as N,m as ue,mt as de,n as P,nt as F,o as fe,ot as I,p as L,q as R,rt as pe,s as me,t as z,tt as B,u as he,ut as ge,v as _e,vt as ve,w as ye,wt as be,xt as xe,y as Se}from"./three.module-BCkzDqst.js";function Ce(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new te,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=we(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=we(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function we(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new me(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Te(e){let t=new P({canvas:e,antialias:!1,powerPreference:`high-performance`});return t.shadowMap.enabled=!0,t.shadowMap.type=1,t.outputColorSpace=ne,t}var Ee=class{light;center=new o;radius=60;constructor(e,t=2048){this.light=new k(16777215,2),this.light.castShadow=!0,this.light.shadow.mapSize.set(t,t),this.light.shadow.bias=-4e-4,this.light.shadow.normalBias=.04,this.light.shadow.radius=3,e.add(this.light),e.add(this.light.target)}fitToBounds(e){let t=e.getBoundingSphere(new de);this.center.copy(t.center),this.radius=t.radius*1.05;let n=this.light.shadow.camera;n.left=-this.radius,n.right=this.radius,n.top=this.radius,n.bottom=-this.radius,n.near=1,n.far=this.radius*4,n.updateProjectionMatrix(),this.light.target.position.copy(this.center)}setDirection(e){let t=e.clone().normalize();this.light.position.copy(this.center).addScaledVector(t,this.radius*2),this.light.target.updateMatrixWorld()}},De=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * p;
  }
`,Oe=`
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform float uGlow;
  uniform float uStars;
  varying vec3 vDir;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.65));
    col = mix(col, uHorizon, smoothstep(0.0, -0.05, h));

    float sd = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSunColor * uGlow * (0.18 * pow(sd, 6.0) + 0.6 * pow(sd, 64.0) + 2.5 * smoothstep(0.9993, 0.9998, sd));

    vec2 sp = d.xz / (d.y + 1.2) * 220.0;
    vec2 cell = floor(sp);
    vec2 fc = fract(sp) - 0.5;
    vec2 jitter = (vec2(hash(cell + 1.7), hash(cell + 9.2)) - 0.5) * 0.6;
    float star = step(0.9965, hash(cell)) * smoothstep(0.14, 0.0, length(fc - jitter)) * smoothstep(0.05, 0.4, h);
    col += vec3(1.0, 0.95, 0.85) * star * uStars;

    gl_FragColor = vec4(col, 1.0);
  }
`,ke=class{renderer;scene;mesh;fogColor=new j;uniforms={uTop:{value:new j},uHorizon:{value:new j},uSunDir:{value:new o(0,1,0)},uSunColor:{value:new j},uGlow:{value:1},uStars:{value:0}};pmrem;envScene=new ge;envRT=null;material;constructor(e,t,n=3e3){this.renderer=e,this.scene=t,this.material=new A({uniforms:this.uniforms,vertexShader:De,fragmentShader:Oe,side:1,depthWrite:!1,fog:!1}),this.mesh=new c(new oe(n*.9,32,16),this.material),this.mesh.renderOrder=-1e3,this.mesh.frustumCulled=!1,this.mesh.name=`sky`,t.add(this.mesh),t.fog=new _(16777215,.003),this.pmrem=new z(e),this.envScene.add(new c(new oe(50,32,16),this.material))}follow(e){this.mesh.position.copy(e.position)}apply(e,t=!0){let n=this.uniforms;n.uTop.value.set(e.skyTop),n.uHorizon.value.set(e.skyHorizon),n.uSunDir.value.set(...e.sunDir).normalize(),n.uSunColor.value.set(e.sunColor),n.uGlow.value=e.sunGlow,n.uStars.value=e.stars,this.fogColor.set(e.skyHorizon);let r=this.scene.fog;r.color.copy(this.fogColor),r.density=e.fogDensity,this.scene.environmentIntensity=e.envIntensity,t&&(this.envRT?.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,.02),this.scene.environment=this.envRT.texture)}},Ae=class e extends c{constructor(t,n={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let r=this,i=n.color===void 0?new j(8355711):new j(n.color),s=n.textureWidth||512,c=n.textureHeight||512,l=n.clipBias||0,u=n.shader||e.ReflectorShader,p=n.multisample===void 0?4:n.multisample,m=new S,h=new o,_=new o,v=new o,y=new b,x=new o(0,0,-1),C=new a,w=new o,T=new o,E=new a,D=new b,O=new f(s,c,{samples:p,type:d}),k=new A({name:u.name===void 0?`unspecified`:u.name,uniforms:g.clone(u.uniforms),fragmentShader:u.fragmentShader,vertexShader:u.vertexShader});k.uniforms.tDiffuse.value=O.texture,k.uniforms.color.value=i,k.uniforms.textureMatrix.value=D,this.material=k,this.onBeforeRender=function(e,t,n){let i=this.getReflectionCamera(n);if(_.setFromMatrixPosition(r.matrixWorld),v.setFromMatrixPosition(n.matrixWorld),y.extractRotation(r.matrixWorld),h.set(0,0,1),h.applyMatrix4(y),w.subVectors(_,v),w.dot(h)>0&&this.forceUpdate===!1)return;w.reflect(h).negate(),w.add(_),y.extractRotation(n.matrixWorld),x.set(0,0,-1),x.applyMatrix4(y),x.add(v),T.subVectors(_,x),T.reflect(h).negate(),T.add(_),i.position.copy(w),i.up.set(0,1,0),i.up.applyMatrix4(y),i.up.reflect(h),i.lookAt(T),i.far=n.far,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),D.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),D.multiply(i.projectionMatrix),D.multiply(i.matrixWorldInverse),D.multiply(r.matrixWorld),m.setFromNormalAndCoplanarPoint(h,_),m.applyMatrix4(i.matrixWorldInverse),C.set(m.normal.x,m.normal.y,m.normal.z,m.constant);let a=i.projectionMatrix;i.isOrthographicCamera?(E.x=(Math.sign(C.x)+a.elements[8])/a.elements[0],E.y=(Math.sign(C.y)+a.elements[9])/a.elements[5],E.z=-n.far,E.w=1):(E.x=(Math.sign(C.x)+a.elements[8])/a.elements[0],E.y=(Math.sign(C.y)+a.elements[9])/a.elements[5],E.z=-1,E.w=(1+a.elements[10])/a.elements[14]),C.multiplyScalar(2/C.dot(E)),a.elements[2]=C.x,a.elements[6]=C.y,i.isOrthographicCamera?(a.elements[10]=C.z-l,a.elements[14]=C.w-1):(a.elements[10]=C.z+1-l,a.elements[14]=C.w),r.visible=!1;let o=e.getRenderTarget(),s=e.xr.enabled,c=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(O),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,i),e.xr.enabled=s,e.shadowMap.autoUpdate=c,e.setRenderTarget(o);let u=n.viewport;u!==void 0&&e.state.viewport(u),r.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return O},this.dispose=function(){O.dispose(),r.material.dispose()},this.getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};Ae.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var je={name:`ProcWater`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null},uTime:{value:0},uShallow:{value:new j},uDeep:{value:new j},uReflect:{value:.35},uDistort:{value:.5},uRain:{value:0},uSunDir:{value:new o(0,1,0)},uSunColor:{value:new j},uGlint:{value:0},uFogColor:{value:new j},uFogDensity:{value:.003}},vertexShader:`
    uniform mat4 textureMatrix;
    varying vec4 vUv;
    varying vec3 vWorld;
    void main() {
      vUv = textureMatrix * vec4(position, 1.0);
      vec4 w = modelMatrix * vec4(position, 1.0);
      vWorld = w.xyz;
      gl_Position = projectionMatrix * viewMatrix * w;
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec3 uShallow;
    uniform vec3 uDeep;
    uniform float uReflect;
    uniform float uDistort;
    uniform float uRain;
    uniform vec3 uSunDir;
    uniform vec3 uSunColor;
    uniform float uGlint;
    uniform vec3 uFogColor;
    uniform float uFogDensity;
    varying vec4 vUv;
    varying vec3 vWorld;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

    vec2 wave(vec2 p, vec2 d, float f, float a, float s, float t) {
      return normalize(d) * (a * f * cos(dot(normalize(d), p) * f + t * s));
    }

    vec2 waveGrad(vec2 p, float t) {
      vec2 g = vec2(0.0);
      g += wave(p, vec2( 0.80,  0.60), 0.25, 0.048, 0.6, t);
      g += wave(p, vec2(-0.50,  0.86), 0.42, 0.024, 0.8, t);
      g += wave(p, vec2( 0.20, -0.98), 0.75, 0.0107, 1.1, t);
      g += wave(p, vec2(-0.90, -0.40), 1.30, 0.0038, 1.5, t);
      return g;
    }

    vec2 rainRings(vec2 p, float t) {
      vec2 sum = vec2(0.0);
      for (int k = 0; k < 2; k++) {
        vec2 q = p * (1.4 + float(k) * 0.9) + float(k) * 17.0;
        vec2 cell = floor(q);
        vec2 f = fract(q) - 0.5;
        float h = hash(cell);
        float ph = fract(t * 0.8 + h);
        float r = length(f);
        float ring = smoothstep(0.05, 0.0, abs(r - ph * 0.45)) * (1.0 - ph);
        sum += normalize(f + 1e-4) * ring * step(0.35, h);
      }
      return sum * 0.12;
    }

    void main() {
      vec2 g = waveGrad(vWorld.xz, uTime) + rainRings(vWorld.xz, uTime) * uRain;
      vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
      vec3 V = normalize(cameraPosition - vWorld);
      float ndv = clamp(dot(N, V), 0.0, 1.0);

      vec2 uv = vUv.xy / vUv.w + g * uDistort;
      vec3 refl = texture2D(tDiffuse, uv).rgb;

      float fres = uReflect + (1.0 - uReflect) * pow(1.0 - ndv, 4.0);
      vec3 body = mix(uShallow, uDeep, smoothstep(0.35, 1.0, ndv) * 0.6);
      vec3 col = mix(body, refl, fres);

      vec3 H = normalize(V + normalize(uSunDir));
      col += uSunColor * pow(max(dot(N, H), 0.0), 260.0) * uGlint;

      float dist = length(cameraPosition - vWorld);
      float f = 1.0 - exp(-pow(dist * uFogDensity, 2.0));
      col = mix(col, uFogColor, clamp(f, 0.0, 1.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `},Me=class{mesh;u;scale;constructor(e=0,t=4e3,n={}){this.scale=n.scale??.75,this.mesh=new Ae(new w(t,t),{textureWidth:1024,textureHeight:1024,clipBias:.003,multisample:n.samples??4,shader:je}),this.mesh.rotation.x=-Math.PI/2,this.mesh.position.y=e,this.mesh.name=`water`,this.u=this.mesh.material.uniforms}resize(e,t){this.mesh.getRenderTarget().setSize(Math.max(256,Math.round(e*this.scale)),Math.max(256,Math.round(t*this.scale)))}update(e){this.u.uTime.value=e}apply(e){this.u.uShallow.value.set(e.shallow),this.u.uDeep.value.set(e.deep),this.u.uReflect.value=e.reflect,this.u.uDistort.value=e.distort,this.u.uRain.value=e.rain,this.u.uSunDir.value.set(...e.sunDir).normalize(),this.u.uSunColor.value.set(e.sunColor),this.u.uGlint.value=e.glint,this.u.uFogColor.value.set(e.fogColor),this.u.uFogDensity.value=e.fogDensity}};function Ne(e,t,n,r=.35){let i=document.createElement(`canvas`);i.width=i.height=128;let a=i.getContext(`2d`),o=a.createRadialGradient(64,64,8,64,64,62);o.addColorStop(0,`rgba(0,0,0,1)`),o.addColorStop(.55,`rgba(0,0,0,0.6)`),o.addColorStop(1,`rgba(0,0,0,0)`),a.fillStyle=o,a.fillRect(0,0,128,128);let s=new N(i),l=new c(new w(e*1.35,t*1.35),new y({map:s,transparent:!0,opacity:r,depthWrite:!1,fog:!1}));return l.rotation.x=-Math.PI/2,l.position.y=n+.03,l.renderOrder=1,l.name=`contactShadow`,l}var Pe={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},V=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Fe=new R(-1,1,1,-1,0,1),Ie=new class extends te{constructor(){super(),this.setAttribute(`position`,new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new ye([0,2,0,0,2,0],2))}},Le=class{constructor(e){this._mesh=new c(Ie,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Fe)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Re=class extends V{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof A?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=g.clone(e.uniforms),this.material=new A({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Le(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ze=class extends V{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Be=class extends V{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Ve=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new v);this._width=n.width,this._height=n.height,t=new f(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:d}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Re(Pe),this.copyPass.material.blending=0,this.timer=new ee}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}ze!==void 0&&(r instanceof ze?n=!0:r instanceof Be&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new v);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},He=class extends V{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new j}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Ue={name:`GTAOShader`,defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:`x`,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new v},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new b},cameraProjectionMatrixInverse:{value:new b},cameraWorldMatrix:{value:new b},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new o(-1,-1,-1)},sceneBoxMax:{value:new o(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},We={name:`GTAODepthShader`,defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ge={name:`GTAOBlendShader`,uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Ke(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=qe(t),r=n.length,i=new Uint8Array(r*4);for(let e=0;e<r;++e){let t=n[e],a=2*Math.PI*t/r,s=new o(Math.cos(a),Math.sin(a),0).normalize();i[e*4]=(s.x*.5+.5)*255,i[e*4+1]=(s.y*.5+.5)*255,i[e*4+2]=127,i[e*4+3]=255}let a=new T(i,t,t);return a.wrapS=I,a.wrapT=I,a.needsUpdate=!0,a}function qe(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),n=t*t,r=Array(n).fill(0),i=Math.floor(t/2),a=t-1;for(let e=1;e<=n;){if(i===-1&&a===t?(a=t-2,i=0):(a===t&&(a=0),i<0&&(i=t-1)),r[i*t+a]!==0){a-=2,i++;continue}r[i*t+a]=e++,a++,i--}return r}var Je={name:`PoissonDenoiseShader`,defines:{SAMPLES:16,SAMPLE_VECTORS:Ye(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new v},cameraProjectionMatrixInverse:{value:new b},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ye(e,t,n){let r=Xe(e,t,n),i=`vec3[SAMPLES](`;for(let t=0;t<e;t++){let n=r[t];i+=`vec3(${n.x}, ${n.y}, ${n.z})${t<e-1?`,`:`)`}`}return i}function Xe(e,t,n){let r=[];for(let i=0;i<e;i++){let a=2*Math.PI*t*i/e,s=(i/(e-1))**n;r.push(new o(Math.cos(a),Math.sin(a),s))}return r}var Ze=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,r,i,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,s=Math.floor(e+o),c=Math.floor(t+o),l=(3-Math.sqrt(3))/6,u=(s+c)*l,d=s-u,f=c-u,p=e-d,m=t-f,h,g;p>m?(h=1,g=0):(h=0,g=1);let _=p-h+l,v=m-g+l,y=p-1+2*l,b=m-1+2*l,x=s&255,S=c&255,C=this.perm[x+this.perm[S]]%12,w=this.perm[x+h+this.perm[S+g]]%12,T=this.perm[x+1+this.perm[S+1]]%12,E=.5-p*p-m*m;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[C],p,m));let D=.5-_*_-v*v;D<0?r=0:(D*=D,r=D*D*this._dot(this.grad3[w],_,v));let O=.5-y*y-b*b;return O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[T],y,b)),70*(n+r+i)}noise3d(e,t,n){let r,i,a,o,s=(e+t+n)*(1/3),c=Math.floor(e+s),l=Math.floor(t+s),u=Math.floor(n+s),d=1/6,f=(c+l+u)*d,p=c-f,m=l-f,h=u-f,g=e-p,_=t-m,v=n-h,y,b,x,S,C,w;g>=_?_>=v?(y=1,b=0,x=0,S=1,C=1,w=0):g>=v?(y=1,b=0,x=0,S=1,C=0,w=1):(y=0,b=0,x=1,S=1,C=0,w=1):_<v?(y=0,b=0,x=1,S=0,C=1,w=1):g<v?(y=0,b=1,x=0,S=0,C=1,w=1):(y=0,b=1,x=0,S=1,C=1,w=0);let T=g-y+d,E=_-b+d,D=v-x+d,O=g-S+2*d,k=_-C+2*d,ee=v-w+2*d,te=g-1+3*d,ne=_-1+3*d,re=v-1+3*d,A=c&255,j=l&255,ie=u&255,ae=this.perm[A+this.perm[j+this.perm[ie]]]%12,oe=this.perm[A+y+this.perm[j+b+this.perm[ie+x]]]%12,se=this.perm[A+S+this.perm[j+C+this.perm[ie+w]]]%12,ce=this.perm[A+1+this.perm[j+1+this.perm[ie+1]]]%12,le=.6-g*g-_*_-v*v;le<0?r=0:(le*=le,r=le*le*this._dot3(this.grad3[ae],g,_,v));let M=.6-T*T-E*E-D*D;M<0?i=0:(M*=M,i=M*M*this._dot3(this.grad3[oe],T,E,D));let N=.6-O*O-k*k-ee*ee;N<0?a=0:(N*=N,a=N*N*this._dot3(this.grad3[se],O,k,ee));let ue=.6-te*te-ne*ne-re*re;return ue<0?o=0:(ue*=ue,o=ue*ue*this._dot3(this.grad3[ce],te,ne,re)),32*(r+i+a+o)}noise4d(e,t,n,r){let i=this.grad4,a=this.simplex,o=this.perm,s=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,l,u,d,f,p,m=(e+t+n+r)*s,h=Math.floor(e+m),g=Math.floor(t+m),_=Math.floor(n+m),v=Math.floor(r+m),y=(h+g+_+v)*c,b=h-y,x=g-y,S=_-y,C=v-y,w=e-b,T=t-x,E=n-S,D=r-C,O=w>T?32:0,k=w>E?16:0,ee=T>E?8:0,te=w>D?4:0,ne=T>D?2:0,re=+(E>D),A=O+k+ee+te+ne+re,j=+(a[A][0]>=3),ie=+(a[A][1]>=3),ae=+(a[A][2]>=3),oe=+(a[A][3]>=3),se=+(a[A][0]>=2),ce=+(a[A][1]>=2),le=+(a[A][2]>=2),M=+(a[A][3]>=2),N=+(a[A][0]>=1),ue=+(a[A][1]>=1),de=+(a[A][2]>=1),P=+(a[A][3]>=1),F=w-j+c,fe=T-ie+c,I=E-ae+c,L=D-oe+c,R=w-se+2*c,pe=T-ce+2*c,me=E-le+2*c,z=D-M+2*c,B=w-N+3*c,he=T-ue+3*c,ge=E-de+3*c,_e=D-P+3*c,ve=w-1+4*c,ye=T-1+4*c,be=E-1+4*c,xe=D-1+4*c,Se=h&255,Ce=g&255,we=_&255,Te=v&255,Ee=o[Se+o[Ce+o[we+o[Te]]]]%32,De=o[Se+j+o[Ce+ie+o[we+ae+o[Te+oe]]]]%32,Oe=o[Se+se+o[Ce+ce+o[we+le+o[Te+M]]]]%32,ke=o[Se+N+o[Ce+ue+o[we+de+o[Te+P]]]]%32,Ae=o[Se+1+o[Ce+1+o[we+1+o[Te+1]]]]%32,je=.6-w*w-T*T-E*E-D*D;je<0?l=0:(je*=je,l=je*je*this._dot4(i[Ee],w,T,E,D));let Me=.6-F*F-fe*fe-I*I-L*L;Me<0?u=0:(Me*=Me,u=Me*Me*this._dot4(i[De],F,fe,I,L));let Ne=.6-R*R-pe*pe-me*me-z*z;Ne<0?d=0:(Ne*=Ne,d=Ne*Ne*this._dot4(i[Oe],R,pe,me,z));let Pe=.6-B*B-he*he-ge*ge-_e*_e;Pe<0?f=0:(Pe*=Pe,f=Pe*Pe*this._dot4(i[ke],B,he,ge,_e));let V=.6-ve*ve-ye*ye-be*be-xe*xe;return V<0?p=0:(V*=V,p=V*V*this._dot4(i[Ae],ve,ye,be,xe)),27*(l+u+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}_dot4(e,t,n,r,i){return e[0]*t+e[1]*n+e[2]*r+e[3]*i}},Qe=class e extends V{constructor(e,t,n=512,r=512,i,a,o){super(),this.width=n,this.height=r,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Ke(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new f(this.width,this.height,{type:d,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new A({defines:Object.assign({},Ue.defines),uniforms:g.clone(Ue.uniforms),vertexShader:Ue.vertexShader,fragmentShader:Ue.fragmentShader,blending:0,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new x,this.normalMaterial.blending=0,this.pdMaterial=new A({defines:Object.assign({},Je.defines),uniforms:g.clone(Je.uniforms),vertexShader:Je.vertexShader,fragmentShader:Je.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new A({defines:Object.assign({},We.defines),uniforms:g.clone(We.uniforms),vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,blending:0}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new A({uniforms:g.clone(Pe.uniforms),vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this.blendMaterial=new A({uniforms:g.clone(Ge.uniforms),vertexShader:Ge.vertexShader,fragmentShader:Ge.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:5,blendSrc:208,blendDst:200,blendEquation:100,blendSrcAlpha:206,blendDstAlpha:200,blendEquationAlpha:100}),this._fsQuad=new Le(null),this._originalClearColor=new j,this.setGBuffer(i?i.depthTexture:void 0,i?i.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e===void 0?(this.depthTexture=new Se,this.depthTexture.format=_e,this.depthTexture.type=be,this.normalRenderTarget=new f(this.width,this.height,{minFilter:l,magFilter:l,type:d,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0):(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1);let n=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?`w`:`x`;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ye(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,n,r){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case e.OUTPUT.Off:break;case e.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case e.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=r.texture,this.copyMaterial.blending=0,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:n);break;default:console.warn(`THREE.GTAOPass: Unknown output type.`)}}_renderPass(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,r,i){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,r=t.clearColor||r,i=t.clearAlpha||i,r!=null&&(e.setClearColor(r),e.setClearAlpha(i||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Ze,n=e*e*4,i=new Uint8Array(n);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let a=n,o=r;i[(n*e+r)*4]=(t.noise(a,o)*.5+.5)*255,i[(n*e+r)*4+1]=(t.noise(a+e,o)*.5+.5)*255,i[(n*e+r)*4+2]=(t.noise(a,o+e)*.5+.5)*255,i[(n*e+r)*4+3]=(t.noise(a+e,o+e)*.5+.5)*255}let a=new T(i,e,e,F,r);return a.wrapS=I,a.wrapT=I,a.needsUpdate=!0,a}};Qe.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var $e={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},et=class e extends V{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new v(256,256):new v(e.x,e.y),this.clearColor=new j(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new f(i,a,{type:d,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new f(i,a,{type:d,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new f(i,a,{type:d,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let s=$e;this.highPassUniforms=g.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new A({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new v(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new o(1,1,1),new o(1,1,1),new o(1,1,1),new o(1,1,1),new o(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=g.clone(Pe.uniforms),this.blendMaterial=new A({uniforms:this.copyUniforms,vertexShader:Pe.vertexShader,fragmentShader:Pe.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new j,this._oldClearAlpha=1,this._basic=new y,this._fsQuad=new Le(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new v(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new A({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new v(.5,.5)},direction:{value:new v(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new A({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};et.BlurDirectionX=new v(1,0),et.BlurDirectionY=new v(0,1);var tt={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},nt=class extends V{constructor(){super(),this.isOutputPass=!0,this.uniforms=g.clone(tt.uniforms),this.material=new pe({name:tt.name,uniforms:this.uniforms,vertexShader:tt.vertexShader,fragmentShader:tt.fragmentShader}),this._fsQuad=new Le(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},L.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},rt=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,it={name:`OutlineShader`,uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},uTexel:{value:new v(1/1920,1/1080)},uNear:{value:.5},uFar:{value:2e3},uInk:{value:new j(.3,.25,.2)},uCrease:{value:.4},uSilhouette:{value:.3},uWidth:{value:1},uFadeDist:{value:600}},vertexShader:rt,fragmentShader:`
    #include <packing>
    uniform sampler2D tDiffuse;
    uniform sampler2D tNormal;
    uniform sampler2D tDepth;
    uniform vec2 uTexel;
    uniform float uNear;
    uniform float uFar;
    uniform vec3 uInk;
    uniform float uCrease;
    uniform float uSilhouette;
    uniform float uWidth;
    uniform float uFadeDist;
    varying vec2 vUv;

    float linZ(vec2 uv) {
      float d = texture2D(tDepth, uv).x;
      return -perspectiveDepthToViewZ(d, uNear, uFar);
    }
    vec3 nrm(vec2 uv) { return texture2D(tNormal, uv).xyz * 2.0 - 1.0; }

    void main() {
      vec4 base = texture2D(tDiffuse, vUv);
      vec2 o = uTexel * uWidth;

      float zc = linZ(vUv);
      float zl = linZ(vUv + vec2(-o.x, 0.0));
      float zr = linZ(vUv + vec2( o.x, 0.0));
      float zu = linZ(vUv + vec2(0.0,  o.y));
      float zd = linZ(vUv + vec2(0.0, -o.y));
      float dz = max(max(abs(zl - zc), abs(zr - zc)), max(abs(zu - zc), abs(zd - zc)));
      float sil = smoothstep(0.010, 0.035, dz / max(zc, 0.001));

      vec3 nc = nrm(vUv);
      float dn = 1.0 - min(
        min(dot(nc, nrm(vUv + vec2(-o.x, 0.0))), dot(nc, nrm(vUv + vec2(o.x, 0.0)))),
        min(dot(nc, nrm(vUv + vec2(0.0, o.y))),  dot(nc, nrm(vUv + vec2(0.0, -o.y))))
      );
      float crease = smoothstep(0.22, 0.55, dn);

      float fade = 1.0 - smoothstep(uFadeDist * 0.5, uFadeDist, zc);
      float edge = clamp(max(sil * uSilhouette, crease * uCrease) * fade, 0.0, 1.0);
      gl_FragColor = vec4(mix(base.rgb, base.rgb * uInk, edge), base.a);
    }
  `},at={name:`GradeShader`,uniforms:{tDiffuse:{value:null},uRes:{value:new v(1920,1080)},uTime:{value:0},uTilt:{value:2.5},uTiltCenter:{value:.5},uTiltWidth:{value:.25},uCA:{value:.001},uVignette:{value:.2},uGrain:{value:.03},uLift:{value:new o(0,0,0)},uGain:{value:new o(1,1,1)},uSat:{value:1},uTint:{value:new o(1,1,1)}},vertexShader:rt,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uRes;
    uniform float uTime;
    uniform float uTilt;
    uniform float uTiltCenter;
    uniform float uTiltWidth;
    uniform float uCA;
    uniform float uVignette;
    uniform float uGrain;
    uniform vec3 uLift;
    uniform vec3 uGain;
    uniform float uSat;
    uniform vec3 uTint;
    varying vec2 vUv;

    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

    vec3 sampleCA(vec2 uv) {
      vec2 d = uv - 0.5;
      float k = uCA * dot(d, d) * 4.0;
      return vec3(
        texture2D(tDiffuse, uv + d * k).r,
        texture2D(tDiffuse, uv).g,
        texture2D(tDiffuse, uv - d * k).b
      );
    }

    void main() {
      float band = smoothstep(uTiltWidth, uTiltWidth + 0.35, abs(vUv.y - uTiltCenter));
      float r = band * uTilt;
      vec3 col;
      if (r < 0.4) {
        col = sampleCA(vUv);
      } else {
        col = vec3(0.0);
        const int N = 12;
        for (int i = 0; i < N; i++) {
          float a = float(i) * 2.399963;
          float rr = sqrt((float(i) + 0.5) / float(N));
          vec2 off = vec2(cos(a), sin(a)) * rr * r / uRes;
          col += sampleCA(vUv + off);
        }
        col /= float(N);
      }

      col = col * uGain + uLift;
      float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(vec3(l), col, uSat) * uTint;

      vec2 p = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
      col *= 1.0 - uVignette * smoothstep(0.35, 1.0, length(p));

      col += (hash(vUv * uRes + fract(uTime) * 100.0) - 0.5) * uGrain;
      gl_FragColor = vec4(max(col, 0.0), 1.0);
    }
  `},ot=class{renderer;scene;camera;composer;gtao;bloom;outline;grade;hidden=[];dpr=1;constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n,e.toneMapping=6,e.toneMappingExposure=1;let r=new f(1,1,{type:d,samples:4});this.composer=new Ve(e,r),this.composer.addPass(new He(t,n)),this.gtao=new Qe(t,n,1,1),this.gtao.updateGtaoMaterial({radius:1,distanceExponent:1.5,thickness:1.5,scale:1,samples:16}),this.gtao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16}),this.composer.addPass(this.gtao);let i=this.gtao.render.bind(this.gtao);this.gtao.render=(e,t,n,r,a)=>{let o=this.hidden.filter(e=>e.visible);this.scene.traverseVisible(e=>{let t=e.material;t&&(Array.isArray(t)?t.some(e=>e.transparent):t.transparent)&&!o.includes(e)&&o.push(e)}),o.forEach(e=>e.visible=!1),i(e,t,n,r,a),o.forEach(e=>e.visible=!0)},this.outline=new Re(it),this.outline.uniforms.tNormal.value=this.gtao.normalTexture,this.outline.uniforms.tDepth.value=this.gtao.depthTexture,this.composer.addPass(this.outline),this.bloom=new et(new v(1,1),.3,.5,.9),this.composer.addPass(this.bloom),this.composer.addPass(new nt),this.grade=new Re(at),this.composer.addPass(this.grade)}excludeFromGBuffer(...e){this.hidden.push(...e)}setSize(e,t,n){this.dpr=n,this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.composer.setPixelRatio(n),this.composer.setSize(e,t);let r=e*n,i=t*n;this.outline.uniforms.uTexel.value.set(1/r,1/i),this.grade.uniforms.uRes.value.set(r,i)}apply(e){this.gtao.blendIntensity=e.ao.intensity,this.gtao.updateGtaoMaterial({radius:e.ao.radius}),this.bloom.strength=e.bloom.strength,this.bloom.radius=e.bloom.radius,this.bloom.threshold=e.bloom.threshold;let t=this.outline.uniforms;t.uCrease.value=e.outline.crease,t.uSilhouette.value=e.outline.silhouette,t.uWidth.value=e.outline.width*this.dpr,t.uFadeDist.value=e.outline.fadeDist,t.uInk.value.setRGB(...e.outline.ink);let n=this.grade.uniforms;n.uTilt.value=e.tilt.blur*this.dpr,n.uTiltCenter.value=e.tilt.center,n.uTiltWidth.value=e.tilt.width,n.uCA.value=e.ca,n.uVignette.value=e.vignette,n.uGrain.value=e.grain,n.uLift.value.set(...e.grade.lift),n.uGain.value.set(...e.grade.gain),n.uSat.value=e.grade.sat,n.uTint.value.set(...e.grade.tint)}render(e){this.outline.uniforms.uNear.value=this.camera.near,this.outline.uniforms.uFar.value=this.camera.far,this.grade.uniforms.uTime.value=e,this.composer.render()}},st={day:{atmosphere:{skyTop:`#9fd0d2`,skyHorizon:`#c9e4e0`,fogDensity:.0028,sunDir:[.2,.66,.72],sunColor:`#fff0d8`,sunGlow:.6,stars:0,envIntensity:.6},water:{shallow:`#86cbc7`,deep:`#4fa5a8`,reflect:.35,distort:.5,rain:0,glint:.6},sunIntensity:2.4,hemi:{sky:`#bfe3e0`,ground:`#7d8a80`,intensity:1},exposure:1,lit:0,glow:.1,wet:0,wind:1,rain:0,post:{ao:{intensity:1,radius:1},bloom:{strength:.25,radius:.5,threshold:.95},outline:{crease:.22,silhouette:.12,width:1,fadeDist:600,ink:[.58,.56,.54]},tilt:{blur:1.5,center:.5,width:.3},ca:5e-4,vignette:.18,grain:.02,grade:{lift:[0,.008,.01],gain:[1,1.02,1.02],sat:.92,tint:[.99,1.01,1.01]}}},dusk:{atmosphere:{skyTop:`#5d7f96`,skyHorizon:`#e3a98a`,fogDensity:.0036,sunDir:[.2,.16,.97],sunColor:`#ffb27a`,sunGlow:.8,stars:0,envIntensity:.35},water:{shallow:`#6f9fa0`,deep:`#3f6470`,reflect:.4,distort:.5,rain:0,glint:.7},sunIntensity:1.2,hemi:{sky:`#8fa7c0`,ground:`#6b5548`,intensity:.45},exposure:.95,lit:.55,glow:.4,wet:0,wind:1,rain:0,post:{ao:{intensity:1,radius:1},bloom:{strength:.32,radius:.5,threshold:.9},outline:{crease:.3,silhouette:.2,width:1,fadeDist:600,ink:[.42,.36,.32]},tilt:{blur:2,center:.5,width:.28},ca:8e-4,vignette:.3,grain:.03,grade:{lift:[.01,.006,.01],gain:[1.04,1,.97],sat:.98,tint:[1.02,1,.98]}}},rain:{atmosphere:{skyTop:`#7d8f93`,skyHorizon:`#a5b4b4`,fogDensity:.005,sunDir:[.2,.66,.72],sunColor:`#dfe8e8`,sunGlow:0,stars:0,envIntensity:.55},water:{shallow:`#6e8f8f`,deep:`#4a6a6c`,reflect:.3,distort:.7,rain:1,glint:0},sunIntensity:.35,hemi:{sky:`#b6c6c6`,ground:`#67726f`,intensity:1.1},exposure:1,lit:.45,glow:.5,wet:1,wind:1.6,rain:1,post:{ao:{intensity:1,radius:1},bloom:{strength:.4,radius:.6,threshold:.9},outline:{crease:.3,silhouette:.18,width:1,fadeDist:500,ink:[.5,.5,.5]},tilt:{blur:2,center:.5,width:.28},ca:8e-4,vignette:.3,grain:.04,grade:{lift:[0,.006,.006],gain:[.98,1,1],sat:.8,tint:[.98,1.01,1.01]}}},night:{atmosphere:{skyTop:`#1a1813`,skyHorizon:`#1e1b15`,fogDensity:.0044,sunDir:[-.5,.55,.6],sunColor:`#8ea2c4`,sunGlow:0,stars:.35,envIntensity:.25},water:{shallow:`#1d211e`,deep:`#101410`,reflect:.45,distort:.5,rain:0,glint:0},sunIntensity:.32,hemi:{sky:`#4d4840`,ground:`#2a2015`,intensity:.45},exposure:.95,lit:1,glow:.55,wet:0,wind:.8,rain:0,post:{ao:{intensity:1,radius:1},bloom:{strength:.55,radius:.55,threshold:.8},outline:{crease:.5,silhouette:.35,width:1,fadeDist:500,ink:[.22,.17,.1]},tilt:{blur:3,center:.45,width:.22},ca:.0015,vignette:.5,grain:.05,grade:{lift:[.012,.008,0],gain:[1.05,1,.9],sat:.95,tint:[1.04,1,.9]}}}},ct=/^#[0-9a-fA-F]{6}$/;function lt(e,t,n){if(typeof e==`number`&&typeof t==`number`)return e+(t-e)*n;if(typeof e==`string`&&typeof t==`string`)return ct.test(e)&&ct.test(t)?`#${new j(e).lerp(new j(t),n).getHexString()}`:n<.5?e:t;if(Array.isArray(e)&&Array.isArray(t))return e.map((e,r)=>lt(e,t[r],n));if(e&&t&&typeof e==`object`&&typeof t==`object`){let r={};for(let i of Object.keys(e))r[i]=lt(e[i],t[i],n);return r}return t}var ut=class{tg;current;name;from;to;t=1;duration=1.6;hero=[];constructor(e,t=`day`){this.tg=e,this.name=t,this.current=st[t],this.from=this.to=this.current,this.push(this.current,!0)}registerHeroLight(e){this.hero.push({light:e,base:e.intensity}),e.intensity*=this.current.lit}set(e,t=!1){this.name=e,this.from=this.current,this.to=st[e],this.t=+!!t,t&&(this.current=this.to,this.push(this.current,!0))}update(e){if(this.t>=1)return;this.t=Math.min(1,this.t+e/this.duration);let t=this.t*this.t*(3-2*this.t);this.current=lt(this.from,this.to,t),this.push(this.current,this.t>=1)}push(e,t){let n=this.tg;n.atmosphere.apply(e.atmosphere,t),n.water.apply({...e.water,sunDir:e.atmosphere.sunDir,sunColor:e.atmosphere.sunColor,fogColor:e.atmosphere.skyHorizon,fogDensity:e.atmosphere.fogDensity}),n.sun.light.color.set(e.atmosphere.sunColor),n.sun.light.intensity=e.sunIntensity,n.sun.setDirection(new o(...e.atmosphere.sunDir)),n.hemi.color.set(e.hemi.sky),n.hemi.groundColor.set(e.hemi.ground),n.hemi.intensity=e.hemi.intensity,n.renderer.toneMappingExposure=e.exposure,n.shared.uLit.value=e.lit,n.shared.uWet.value=e.wet,n.shared.uWind.value=e.wind,n.glow.value=e.glow,n.rain.value=e.rain,n.post.apply(e.post)}};function dt(){return{uTime:{value:0},uLit:{value:0},uWind:{value:1},uWet:{value:0}}}function ft(e,t,n={}){return e.onBeforeCompile=e=>{e.uniforms.uTime=t.uTime,e.uniforms.uLit=t.uLit,e.uniforms.uWind=t.uWind,e.uniforms.uWet=t.uWet;let r=e.vertexShader,i=e.fragmentShader;r=r.replace(`#include <common>`,`#include <common>
       uniform float uTime; uniform float uWind;
       ${n.emissive?`attribute vec4 aEmit; varying vec4 vEmit;`:``}
       ${n.sway?`attribute float aSway;`:``}`),r=r.replace(`#include <begin_vertex>`,`#include <begin_vertex>
       ${n.emissive?`vEmit = aEmit;`:``}
       ${n.sway?`{
         vec4 wp = modelMatrix * vec4(transformed, 1.0);
         float w = sin(uTime * 1.6 + wp.x * 0.35 + wp.z * 0.27) + 0.5 * sin(uTime * 2.7 + wp.x * 0.9);
         transformed.x += w * aSway * uWind * 0.12;
         transformed.z += w * aSway * uWind * 0.08;
       }`:``}`),i=i.replace(`#include <common>`,`#include <common>
       uniform float uLit; uniform float uWet;
       ${n.emissive?`varying vec4 vEmit;`:``}`),n.wet&&(i=i.replace(`#include <color_fragment>`,`#include <color_fragment>
         diffuseColor.rgb *= mix(1.0, 0.72, uWet);`),i=i.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
         roughnessFactor = mix(roughnessFactor, roughnessFactor * 0.35, uWet);`)),n.emissive&&(i=i.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
         totalEmissiveRadiance += vEmit.rgb * ${n.emissiveFromAlbedo?`diffuseColor.rgb * `:``}step(vEmit.a, uLit);`)),e.vertexShader=r,e.fragmentShader=i},e.customProgramCacheKey=()=>`patch:${!!n.emissive}|${!!n.emissiveFromAlbedo}|${!!n.sway}|${!!n.wet}`,e}var pt=class{mesh;uGlow={value:1};constructor(t,n){let r=Math.max(1,t.length),i=new w(1,1),a=new le;a.index=i.index,a.setAttribute(`position`,i.getAttribute(`position`));let o=new Float32Array(r*3),s=new Float32Array(r),l=new Float32Array(r*3),u=new Float32Array(r*2),d=new j;t.forEach((e,t)=>{o.set(e.pos,t*3),s[t]=e.size,d.set(e.color).multiplyScalar(e.intensity??1.5),l.set([d.r,d.g,d.b],t*3),u[t*2]=Math.random(),u[t*2+1]=e.flicker??0}),a.setAttribute(`iPos`,new e(o,3)),a.setAttribute(`iSize`,new e(s,1)),a.setAttribute(`iColor`,new e(l,3)),a.setAttribute(`iFlick`,new e(u,2)),a.instanceCount=t.length;let f=new A({uniforms:{uTime:n,uGlow:this.uGlow},vertexShader:`
        attribute vec3 iPos; attribute float iSize; attribute vec3 iColor; attribute vec2 iFlick;
        uniform float uTime; uniform float uGlow;
        varying vec2 vP; varying vec3 vCol;
        void main() {
          vec4 mv = viewMatrix * modelMatrix * vec4(iPos, 1.0);
          float fl = 1.0 - iFlick.y * (0.5 + 0.5 * sin(uTime * (6.0 + iFlick.x * 7.0) + iFlick.x * 40.0));
          mv.xy += position.xy * iSize;
          vP = position.xy * 2.0;
          vCol = iColor * fl * uGlow;
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        varying vec2 vP; varying vec3 vCol;
        void main() {
          float d = length(vP);
          float a = exp(-d * d * 3.5) * (1.0 - smoothstep(0.8, 1.0, d));
          gl_FragColor = vec4(vCol, a);
        }
      `,transparent:!0,depthWrite:!1,blending:2});this.mesh=new c(a,f),this.mesh.frustumCulled=!1,this.mesh.renderOrder=10,this.mesh.name=`glow`}},mt=class{mesh;uRain={value:0};constructor(t,n,r,i){let a=new w(1,1),o=new le;o.index=a.index,o.setAttribute(`position`,a.getAttribute(`position`));let s=new Float32Array(r*4);for(let e=0;e<r;e++)s[e*4]=Math.random()*n.x,s[e*4+1]=Math.random()*n.y,s[e*4+2]=Math.random()*n.z,s[e*4+3]=.7+Math.random()*.6;o.setAttribute(`iOff`,new e(s,4)),o.instanceCount=r;let l=new A({uniforms:{uTime:i,uRain:this.uRain,uCenter:{value:t.clone()},uSize:{value:n.clone()}},vertexShader:`
        attribute vec4 iOff;
        uniform float uTime; uniform vec3 uCenter; uniform vec3 uSize;
        varying float vA;
        void main() {
          vec3 p = iOff.xyz;
          p.y = mod(p.y - uTime * 22.0 * iOff.w, uSize.y);
          p = p - 0.5 * uSize + uCenter;
          vec3 toCam = cameraPosition - p;
          vec3 right = normalize(cross(vec3(0.0, 1.0, 0.0), toCam));
          vec3 w = p + right * position.x * 0.05 + vec3(0.0, 1.0, 0.0) * position.y * 1.4;
          vA = 0.5 * smoothstep(0.0, 4.0, p.y - uCenter.y + 0.5 * uSize.y);
          gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
        }
      `,fragmentShader:`
        uniform float uRain; varying float vA;
        void main() { gl_FragColor = vec4(vec3(0.8, 0.9, 1.0) * 1.1, vA * 0.35 * uRain); }
      `,transparent:!0,depthWrite:!1});this.mesh=new c(o,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=11,this.mesh.name=`rain`}};function ht(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,20,64,64,62);n.addColorStop(0,`rgba(255,255,255,0)`),n.addColorStop(.55,`rgba(255,255,255,0.9)`),n.addColorStop(.8,`rgba(255,255,255,0.25)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new N(e);return r.colorSpace=ne,r}function gt(e,t,n,r,i){let a=new c(new w(e*2.6,e*2.6),new y({map:n,transparent:!0,opacity:.45,depthWrite:!1,fog:!1}));return a.rotation.x=-Math.PI/2,a.position.set(r,t+.02,i),a.renderOrder=2,a.name=`foam`,a}var _t=Math.PI/180,vt=e=>Math.atan2(Math.sin(e),Math.cos(e)),yt=class{camera;dom;target=new o;goalTarget=new o;azimuth=46.5*_t;elevation=30*_t;distance=150;fov=20;gAz=this.azimuth;gEl=this.elevation;gDist=this.distance;gFov=this.fov;minDistance=20;maxDistance=400;minElevation=6*_t;maxElevation=78*_t;drift=!1;driftSpeed=.05;stiffness=7;enabled=!0;panBounds=null;dragging=null;last=new v;teardown=[];constructor(e,n){this.camera=e,this.dom=n;let r=this.dom,i=e=>{this.enabled&&(this.dragging=e.button===2||e.shiftKey?`pan`:`orbit`,this.last.set(e.clientX,e.clientY),r.setPointerCapture(e.pointerId))},a=e=>{if(!this.dragging)return;let n=e.clientX-this.last.x,r=e.clientY-this.last.y;this.last.set(e.clientX,e.clientY),this.dragging===`orbit`?(this.gAz-=n*.005,this.gEl=t.clamp(this.gEl+r*.004,this.minElevation,this.maxElevation)):this.pan(n,r)},o=e=>{this.dragging=null,r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId)},s=e=>{this.enabled&&(e.preventDefault(),this.gDist=t.clamp(this.gDist*Math.exp(e.deltaY*.001),this.minDistance,this.maxDistance))},c=e=>e.preventDefault();n.addEventListener(`pointerdown`,i),n.addEventListener(`pointermove`,a),n.addEventListener(`pointerup`,o),n.addEventListener(`wheel`,s,{passive:!1}),n.addEventListener(`contextmenu`,c),this.teardown.push(()=>{n.removeEventListener(`pointerdown`,i),n.removeEventListener(`pointermove`,a),n.removeEventListener(`pointerup`,o),n.removeEventListener(`wheel`,s),n.removeEventListener(`contextmenu`,c)})}pan(e,t){let n=2*this.gDist*Math.tan(this.fov*_t/2)/Math.max(1,this.dom.clientHeight),r=new o(Math.cos(this.gAz),0,-Math.sin(this.gAz)),i=new o(-Math.sin(this.gAz),0,-Math.cos(this.gAz));this.goalTarget.addScaledVector(r,-e*n).addScaledVector(i,t*n/Math.max(.3,Math.sin(this.gEl))),this.panBounds&&this.panBounds.clampPoint(this.goalTarget,this.goalTarget)}setView(e,n=!1){this.goalTarget.set(...e.target),this.gAz=this.azimuth+vt(e.azimuth*_t-this.azimuth),this.gEl=t.clamp(e.elevation*_t,this.minElevation,this.maxElevation),this.gDist=e.distance,this.gFov=e.fov??20,n&&(this.target.copy(this.goalTarget),this.azimuth=this.gAz,this.elevation=this.gEl,this.distance=this.gDist,this.fov=this.gFov)}distanceToFrame(e,t=.65){let n=e.getBoundingSphere(new de).radius,r=this.gFov*_t,i=2*Math.atan(Math.tan(r/2)*this.camera.aspect);return n/(t*Math.sin(Math.min(r,i)/2))}frame(e,t=.65,n=!1){let r=e.getCenter(new o);this.setView({name:`frame`,target:[r.x,r.y,r.z],azimuth:this.gAz/_t,elevation:this.gEl/_t,distance:this.distanceToFrame(e,t)},n),this.maxDistance=Math.max(this.maxDistance,this.gDist*2)}update(e){this.drift&&!this.dragging&&(this.gAz+=this.driftSpeed*e);let t=1-Math.exp(-this.stiffness*e);this.target.lerp(this.goalTarget,t),this.azimuth+=(this.gAz-this.azimuth)*t,this.elevation+=(this.gEl-this.elevation)*t,this.distance+=(this.gDist-this.distance)*t,Math.abs(this.fov-this.gFov)>.01&&(this.fov+=(this.gFov-this.fov)*t,this.camera.fov=this.fov,this.camera.updateProjectionMatrix());let n=Math.cos(this.elevation);this.camera.position.set(this.target.x+Math.sin(this.azimuth)*n*this.distance,this.target.y+Math.sin(this.elevation)*this.distance,this.target.z+Math.cos(this.azimuth)*n*this.distance),this.camera.lookAt(this.target)}dispose(){this.teardown.forEach(e=>e())}};function bt(e,n,r,i){let a=-1/0;for(let o of e.surfaces){if(n<o.min[0]||n>o.max[0]||r<o.min[1]||r>o.max[1])continue;let e=o.y0;if(o.y1!==void 0){let i=o.axis===`z`?(r-o.min[1])/(o.max[1]-o.min[1]):(n-o.min[0])/(o.max[0]-o.min[0]);e=o.y0+(o.y1-o.y0)*t.clamp(i,0,1)}e<=i&&e>a&&(a=e)}return a}var xt=class{camera;dom;nav;mode=`first`;pos=new o;yaw=0;pitch=0;velY=0;radius=.3;height=1.7;eye=1.6;walkSpeed=2.4;runSpeed=5;stepUp=.5;gravity=18;thirdDistance=4.5;figure=null;keys=new Set;locked=!1;teardown=[];tmp=new o;enabled=!0;constructor(e,n,r){this.camera=e,this.dom=n,this.nav=r,this.pos.copy(r.spawn);let i=e=>{this.keys.add(e.code),e.code===`KeyV`&&(this.mode=this.mode===`first`?`third`:`first`),e.code===`Space`&&this.hop()},a=e=>this.keys.delete(e.code),o=()=>{this.locked||n.requestPointerLock?.()},s=()=>{this.locked=document.pointerLockElement===n},c=e=>{this.locked&&this.enabled&&(this.yaw-=e.movementX*.0023,this.pitch=t.clamp(this.pitch-e.movementY*.0023,-1.35,1.35))},l=e=>{this.mode===`third`&&(this.thirdDistance=t.clamp(this.thirdDistance*Math.exp(e.deltaY*.001),1.5,12))};window.addEventListener(`keydown`,i),window.addEventListener(`keyup`,a),n.addEventListener(`click`,o),document.addEventListener(`pointerlockchange`,s),document.addEventListener(`mousemove`,c),n.addEventListener(`wheel`,l,{passive:!0}),this.teardown.push(()=>{window.removeEventListener(`keydown`,i),window.removeEventListener(`keyup`,a),n.removeEventListener(`click`,o),document.removeEventListener(`pointerlockchange`,s),document.removeEventListener(`mousemove`,c),n.removeEventListener(`wheel`,l)})}setNav(e){this.nav=e,this.pos.copy(e.spawn),this.velY=0}hop(){if(!this.enabled)return;let e=bt(this.nav,this.pos.x,this.pos.z,this.pos.y+.05);Math.abs(this.pos.y-e)<.05&&(this.velY=4.5)}blocked(e,t,n){let r=this.radius;for(let i of this.nav.blockers)if(!(i.max.y<n+this.stepUp||i.min.y>n+this.height)&&e+r>i.min.x&&e-r<i.max.x&&t+r>i.min.z&&t-r<i.max.z)return!0;return!1}tryMove(e,t){let n=this.pos.x+e,r=this.pos.z+t;this.blocked(n,this.pos.z,this.pos.y)&&(e=0),this.blocked(this.pos.x,r,this.pos.y)&&(t=0);let i=this.pos.x+e,a=this.pos.z+t;bt(this.nav,i,a,this.pos.y+this.stepUp)!==-1/0&&(this.pos.x=i,this.pos.z=a)}update(e){if(!this.enabled)return;e=Math.min(e,.05);let t=this.keys,n=(t.has(`KeyW`)||t.has(`ArrowUp`)?1:0)-(t.has(`KeyS`)||t.has(`ArrowDown`)?1:0),r=(t.has(`KeyD`)||t.has(`ArrowRight`)?1:0)-(t.has(`KeyA`)||t.has(`ArrowLeft`)?1:0);if(n!==0||r!==0){let i=(t.has(`ShiftLeft`)||t.has(`ShiftRight`)?this.runSpeed:this.walkSpeed)*e,a=Math.sin(this.yaw),o=Math.cos(this.yaw),s=(-a*n+o*r)*i,c=(-o*n-a*r)*i,l=Math.hypot(s,c)||1;this.tryMove(s/l*i,c/l*i),this.figure&&this.mode===`third`&&(this.figure.rotation.y=Math.atan2(-s,-c))}let i=bt(this.nav,this.pos.x,this.pos.z,this.pos.y+this.stepUp);this.velY-=this.gravity*e,this.pos.y+=this.velY*e,i!==-1/0&&this.pos.y<=i&&(this.pos.y=i,this.velY=0),this.pos.y<this.nav.waterY-3&&(this.pos.copy(this.nav.spawn),this.velY=0),this.applyCamera()}applyCamera(){let e=this.camera,t=this.tmp.set(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch));if(this.figure&&(this.figure.visible=this.mode===`third`,this.figure.position.copy(this.pos)),this.mode===`first`){e.position.set(this.pos.x,this.pos.y+this.eye,this.pos.z),e.lookAt(e.position.clone().add(t));return}let n=new o(this.pos.x,this.pos.y+1.4,this.pos.z),r=t.clone().multiplyScalar(-1),i=new ce(n,r),a=this.thirdDistance,s=new o;for(let e of this.nav.blockers)e.containsPoint(n)||i.intersectBox(e,s)&&(a=Math.min(a,Math.max(.6,s.distanceTo(n)-.3)));e.position.copy(n).addScaledVector(r,a),e.lookAt(n)}dispose(){this.teardown.forEach(e=>e()),document.pointerLockElement===this.dom&&document.exitPointerLock()}};function St(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}var Ct=class e{seed;state;constructor(e){this.seed=e,this.state=e>>>0}static from(t){return new e(typeof t==`string`?St(t):t>>>0)}next(){this.state=this.state+1831565813>>>0;let e=this.state;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return Math.floor(e+(t-e+1)*this.next())}chance(e){return this.next()<e}sign(){return this.next()<.5?-1:1}jitter(e){return 1+(this.next()*2-1)*e}pick(e){if(e.length===0)throw Error(`Rng.pick on empty array`);return e[Math.floor(this.next()*e.length)]}weighted(e){let t=0;for(let[,n]of e)t+=n;let n=this.next()*t;for(let[t,r]of e)if(n-=r,n<=0)return t;return e[e.length-1][0]}shuffle(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(this.next()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}gauss(){return(this.next()+this.next()+this.next()-1.5)/.5}fork(t){return new e(St(`${t}#${this.seed}`))}},wt=class{defs;rng;parts=new Map;constructor(e,t){this.defs=e,this.rng=t}addGeometry(e,n,r,i={}){let a=this.defs[e];if(!a)throw Error(`GeometryBuilder: unknown bucket "${e}"`);let o=n.index?n.toNonIndexed():n;o!==n&&n.dispose(),o.applyMatrix4(r);let s=o.getAttribute(`position`),c=s.count,l=new j(i.color??16777215),u=i.jitter??.05;if(u>0){let e={h:0,s:0,l:0};l.getHSL(e),l.setHSL(e.h,e.s,t.clamp(e.l*(1+(this.rng.next()*2-1)*u),0,1))}let d=new Float32Array(c*3),f=i.gradient;for(let e=0;e<c;e++){let n=1;if(f){let r=t.clamp((s.getY(e)-f.y0)/(f.y1-f.y0||1),0,1);n=f.from+(f.to-f.from)*r}d[e*3]=l.r*n,d[e*3+1]=l.g*n,d[e*3+2]=l.b*n}if(o.setAttribute(`color`,new me(d,3)),a.emissive){let e=new j(i.emit??0).multiplyScalar(i.emitIntensity??1),t=i.emitThreshold??this.rng.next(),n=new Float32Array(c*4);for(let r=0;r<c;r++)n[r*4]=e.r,n[r*4+1]=e.g,n[r*4+2]=e.b,n[r*4+3]=t;o.setAttribute(`aEmit`,new me(n,4))}if(a.sway){o.computeBoundingBox();let e=o.boundingBox,t=e.max.y-e.min.y||1,n=new Float32Array(c),r=i.sway??0;for(let a=0;a<c;a++){let o=(s.getY(a)-e.min.y)/t,c=i.swayFrom===`top`?1-o:o;n[a]=r*c*c}o.setAttribute(`aSway`,new me(n,1))}let p=this.parts.get(e);p||this.parts.set(e,p=[]),p.push(o)}matrix(e,t){let n=new B().setFromEuler(new h(t?.[0]??0,t?.[1]??0,t?.[2]??0,`XYZ`));return new b().compose(new o(...e),n,new o(1,1,1))}box(e,t,n,r={}){let[i,a,o]=t,s=new fe(i,a,o);s.translate(0,a/2,0);let c=s.getAttribute(`uv`),l=[[o,a],[o,a],[i,o],[i,o],[i,a],[i,a]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;c.setXY(n,c.getX(n)*l[e][0],c.getY(n)*l[e][1])}this.addGeometry(e,s,this.matrix(n,r.rot),r)}cyl(e,t,n,r,i,a,o={}){let s=new ae(t,n,r,i,1);s.translate(0,r/2,0);let c=s.getAttribute(`uv`),l=Math.PI*2*Math.max(t,n);for(let e=0;e<c.count;e++)c.setXY(e,c.getX(e)*l,c.getY(e)*r);this.addGeometry(e,s,this.matrix(a,o.rot),o)}cone(e,t,n,r,i,a={}){this.cyl(e,.001,t,n,r,i,a)}gable(e,t,r,i,a,o={}){let s=new ie;s.moveTo(-t/2,0),s.lineTo(t/2,0),s.lineTo(0,r),s.closePath();let c=new n(s,{depth:i,bevelEnabled:!1});c.translate(0,0,-i/2),this.addGeometry(e,c,this.matrix(a,o.rot),o)}plane(e,t,n,r,i={}){let a=new w(t,n),o=a.getAttribute(`uv`);for(let e=0;e<o.count;e++)o.setXY(e,o.getX(e)*t,o.getY(e)*n);this.addGeometry(e,a,this.matrix(r,i.rot),i)}tube(e,t,n,r={},i=4){if(t.length<2)return;let a=new he(t,!1,`centripetal`),o=Math.max(2,t.length*3),s=new xe(a,o,n,i,!1);this.addGeometry(e,s,new b,r)}build(){let e=new i;for(let[t,n]of this.parts){let r=this.defs[t],i=Ce(n,!1);if(n.forEach(e=>e.dispose()),!i)continue;i.computeBoundingSphere(),i.computeBoundingBox();let a=new c(i,r.material);a.name=t,a.castShadow=r.castShadow??!0,a.receiveShadow=r.receiveShadow??!0,e.add(a)}return this.parts.clear(),e}get partCount(){let e=0;for(let t of this.parts.values())e+=t.length;return e}};function Tt(e,t=e){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`);if(!r)throw Error(`2D canvas unavailable`);return{canvas:n,ctx:r}}function Et(e,t){let{canvas:n,ctx:r}=Tt(e),i=r.createImageData(e,e);for(let n=0;n<e;n++)for(let r=0;r<e;r++){let[a,o,s]=t(r/e,n/e,r,n),c=(n*e+r)*4;i.data[c]=a,i.data[c+1]=o,i.data[c+2]=s,i.data[c+3]=255}return r.putImageData(i,0,0),n}function Dt(e,t={}){let{srgb:n=!0,repeat:r=!0,anisotropy:i=8}=t,a=new N(e);return a.colorSpace=n?ne:``,r&&(a.wrapS=I,a.wrapT=I),a.anisotropy=i,a.generateMipmaps=!0,a.minFilter=m,a.needsUpdate=!0,a}var Ot=e=>Math.max(0,Math.min(255,Math.round(e)));function kt(e,t,n){return[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n]}var At=class{size;canvas;ctx;x=0;y=0;rowH=0;tex=null;constructor(e=2048){this.size=e;let{canvas:t,ctx:n}=Tt(e);this.canvas=t,this.ctx=n,n.fillStyle=`#000`,n.fillRect(0,0,e,e)}add(e,t,n,r){if(this.x+t>this.size&&(this.x=0,this.y+=this.rowH+2,this.rowH=0),this.y+n>this.size)throw Error(`SignAtlas full`);let{x:i,y:a}=this,o=this.ctx;return o.save(),o.translate(i,a),o.beginPath(),o.rect(0,0,t,n),o.clip(),Nt(o,e,t,n,r),o.restore(),this.x+=t+2,this.rowH=Math.max(this.rowH,n),{u0:i/this.size,u1:(i+t)/this.size,v0:1-(a+n)/this.size,v1:1-a/this.size}}texture(){return this.tex||=Dt(this.canvas,{srgb:!0,repeat:!1}),this.tex}};function jt(e,t,n,r,i){let a=i?t*.8:n*.62,o=i?Math.max(1,Math.floor(n/(a*1.15))):Math.max(1,Math.floor(t/(a*1.15)));e.lineCap=`round`,e.lineJoin=`round`,e.lineWidth=Math.max(2,a*.11);for(let s=0;s<o;s++){let c=i?(t-a)/2:(t-o*a*1.15)/2+s*a*1.15,l=i?(n-o*a*1.15)/2+s*a*1.15:(n-a)/2,u=r.int(2,4);for(let t=0;t<u;t++){e.beginPath();let t=r.int(2,3);for(let n=0;n<t;n++){let t=c+r.int(0,3)*(a/3),i=l+r.int(0,3)*(a/3);n===0?e.moveTo(t,i):e.lineTo(t,i)}e.stroke()}r.chance(.4)&&(e.beginPath(),e.arc(c+r.range(.2,.8)*a,l+r.range(.2,.8)*a,a*.12,0,Math.PI*2),e.stroke())}}function Mt(e,t,n,r,i){if(t.pseudo){jt(e,n*.9,r*.9,i,!!t.vertical);return}let a=t.font??`bold 100px "Arial Black", Impact, sans-serif`,o=Math.floor(r*.62);if(e.font=a.replace(/\d+px/,`${o}px`),e.textAlign=`center`,e.textBaseline=`middle`,t.vertical){let i=[...t.text],s=Math.min(o,r/i.length);e.font=a.replace(/\d+px/,`${Math.floor(s*.85)}px`),i.forEach((t,a)=>e.fillText(t,n/2,(a+.5)*s+(r-i.length*s)/2))}else{let i=e.measureText(t.text).width;i>n*.92&&(e.font=a.replace(/\d+px/,`${Math.floor(o*n*.92/i)}px`)),e.fillText(t.text,n/2,r/2+2)}}function Nt(e,t,n,r,i){if(e.fillStyle=t.style===`neon`?`#050403`:t.bg,e.fillRect(0,0,n,r),e.strokeStyle=t.style===`neon`?t.fg:`rgba(0,0,0,0.35)`,e.lineWidth=Math.max(2,r*.05),e.strokeRect(e.lineWidth/2,e.lineWidth/2,n-e.lineWidth,r-e.lineWidth),e.fillStyle=t.fg,e.strokeStyle=t.fg,t.style===`neon`&&(e.shadowColor=t.fg,e.shadowBlur=r*.18),Mt(e,t,n,r,i),e.shadowBlur=0,t.style===`painted`||t.style===`banner`){for(let t=0;t<n*r*.004;t++)e.fillStyle=`rgba(0,0,0,${i.range(.04,.16)})`,e.fillRect(i.range(0,n),i.range(0,r),i.range(1,3),i.range(1,3));let t=e.createLinearGradient(0,0,0,r);t.addColorStop(0,`rgba(0,0,0,0)`),t.addColorStop(1,`rgba(20,12,4,0.28)`),e.fillStyle=t,e.fillRect(0,0,n,r)}}function Pt(e,t,n,r,i,a,s,c=`#ffffff`,l=2.5){let u=new w(r,i),d=u.getAttribute(`uv`);for(let e=0;e<d.count;e++)d.setXY(e,n.u0+d.getX(e)*(n.u1-n.u0),n.v0+d.getY(e)*(n.v1-n.v0));let f=new b().compose(new o(...a),new B().setFromEuler(new h(0,s,0)),new o(1,1,1));e.addGeometry(t,u,f,{color:`#ffffff`,jitter:0,emit:c,emitIntensity:l})}function Ft(e,t,n=.08,r=12){let i=e.distanceTo(t)*n,a=[];for(let n=0;n<=r;n++){let o=n/r,s=e.clone().lerp(t,o);s.y-=4*i*o*(1-o),a.push(s)}return a}function It(e,t,n,r,i=.02,a=.06,s=`#1b1b1b`){e.tube(t,Ft(new o(...n),new o(...r),a),i,{color:s,jitter:0},3)}function Lt(e,t,n,r,i,a){let s=new o(...r),c=new o(...i),l=a.sag??.09,u=a.spacing??.55,d=Ft(s,c,l,24);e.tube(a.wireBucket,d,.012,{color:`#151515`,jitter:0},3);let f=Math.max(2,Math.floor(s.distanceTo(c)/u));for(let r=1;r<f;r++){let i=r/f,o=s.clone().lerp(c,i);o.y-=4*s.distanceTo(c)*l*i*(1-i);let u=n.pick(a.palette),d=(a.bulbSize??.11)*n.jitter(.15);e.cyl(a.bulbBucket,d*.5,d*.5,d,6,[o.x,o.y-d,o.z],{emit:u,emitIntensity:a.intensity??4,color:u,jitter:0}),t.push({pos:[o.x,o.y-d*.5,o.z],size:(a.glowSize??1)*n.jitter(.2),color:u,intensity:1.2,flicker:.03})}}function Rt(e,t){let n=new te;return n.setAttribute(`position`,new ye([-e/2,0,0,e/2,0,0,0,-t,0],3)),n.setAttribute(`normal`,new ye([0,0,1,0,0,1,0,0,1],3)),n.setAttribute(`uv`,new ye([0,0,e,0,e/2,t],2)),n}function zt(e,t,n,r,i){let a=new o(...n),s=new o(...r),c=i.sag??.1,[l,u]=i.flag??[.3,.42];e.tube(i.bucket,Ft(a,s,c,16),.008,{color:`#222`,jitter:0,sway:0},3);let d=s.clone().sub(a),f=-Math.atan2(d.z,d.x),p=d.length(),m=Math.max(2,Math.floor(p/(i.spacing??.45)));for(let n=1;n<m;n++){let r=n/m,d=a.clone().lerp(s,r);d.y-=4*p*c*r*(1-r);let g=Rt(l*t.jitter(.1),u*t.jitter(.15)),_=new b().compose(d,new B().setFromEuler(new h(0,f,0)),new o(1,1,1));e.addGeometry(i.bucket,g,_,{color:t.pick(i.palette),sway:1,swayFrom:`top`,jitter:.06})}}function Bt(e){let{length:t,beam:n,depth:r}=e,i=e.sheer??.25,a=e.bow??1.8,o=e.stern??5,s=e.rake??.3,c=e.stations??16,l=e.sections??8,u=[],d=[],f=2*l+1;for(let e=0;e<=c;e++){let l=e/c,d=Math.abs(2*l-1),p=l>.5?a:o,m=n/2*Math.max(.02,1-d**+p),h=r+i*d**2,g=l>.6?s*((l-.6)/.4)**2:0,_=(l-.5)*t;for(let e=0;e<f;e++){let t=(e/(f-1)-.5)*Math.PI,n=m*Math.sin(t),r=g+(h-g)*(1-Math.cos(t));u.push(n,r,_)}}for(let e=0;e<c;e++)for(let t=0;t<f-1;t++){let n=e*f+t,r=n+1,i=n+f,a=i+1;d.push(n,i,r,r,i,a)}let p=new te;p.setAttribute(`position`,new ye(u,3));let m=[];for(let e=0;e<=c;e++)for(let i=0;i<f;i++)m.push(e/c*t,i/(f-1)*(n+r));return p.setAttribute(`uv`,new ye(m,2)),p.setIndex(d),p.computeVertexNormals(),p}function Vt(e,t,n){let r=e=>new s({vertexColors:!0,...e}),i=ft(r({map:t.conc,roughness:.92,metalness:0}),e,{wet:!0}),a=ft(r({map:t.conc,roughness:.85,color:`#e8c26a`}),e,{wet:!0}),o=ft(r({map:t.wood,roughness:.8}),e,{wet:!0}),c=ft(r({color:`#3a4145`,roughness:.55,metalness:.6}),e,{wet:!0}),l=ft(r({color:`#6b7072`,roughness:.9}),e,{wet:!0}),u=ft(r({color:`#d8d4c8`,roughness:.8}),e,{wet:!0}),d=ft(r({color:`#2a3438`,roughness:.15,metalness:.1,emissive:`#ffffff`,emissiveIntensity:1}),e,{emissive:!0,wet:!0}),f=ft(r({color:`#111111`,roughness:.6,emissive:`#ffffff`,emissiveIntensity:1}),e,{emissive:!0}),p=ft(r({map:n,roughness:.5,emissive:`#ffffff`,emissiveIntensity:1}),e,{emissive:!0,emissiveFromAlbedo:!0}),m=ft(r({color:`#ffffff`,roughness:.9,side:2}),e,{sway:!0,wet:!0}),h=r({color:`#ffffff`,roughness:.9}),g=ft(r({map:t.wood,roughness:.75,side:2}),e,{wet:!0});return{concrete:{material:i},accent:{material:a},wood:{material:o},metal:{material:c,castShadow:!0},roof:{material:l},trim:{material:u},glass:{material:d,emissive:!0},bulb:{material:f,emissive:!0},sign:{material:p,emissive:!0,castShadow:!1},fabric:{material:m,sway:!0},cable:{material:h,castShadow:!1},hull:{material:g}}}function Ht(e,t,n){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}var Ut=e=>e*e*(3-2*e);function Wt(e,t,n=0,r=0){let i=Math.floor(e),a=Math.floor(t),o=Ut(e-i),s=Ut(t-a),c=e=>r>0?(e%r+r)%r:e,l=c(i),u=c(i+1),d=c(a),f=c(a+1),p=Ht(l,d,n),m=Ht(u,d,n),h=Ht(l,f,n),g=Ht(u,f,n);return p+(m-p)*o+(h-p)*s+(p-m-h+g)*o*s}function Gt(e,t,n={}){let{seed:r=0,octaves:i=4,gain:a=.5,period:o=0}=n,s=1,c=0,l=0,u=1;for(let n=0;n<i;n++)c+=s*Wt(e*u,t*u,r+n*101,o>0?o*u:0),l+=s,s*=a,u*=2;return c/l}function Kt(e=256,t=7,n=[168,175,172]){return Et(e,(r,i)=>{let a=Gt(r*8,i*8,{seed:t,octaves:4,period:8}),o=Gt(r*32+9,i*32,{seed:t+5,octaves:2,period:32}),s=Gt(r*4,i*24,{seed:t+11,octaves:3,period:8}),c=(a-.5)*36+(o-.5)*22-s*10,l=r*e%64,u=i*e%64;return(l<1.5||u<1.5)&&(c-=18),[Ot(n[0]+c),Ot(n[1]+c),Ot(n[2]+c)]})}function qt(e=256,t=21){return Et(e,(e,n)=>{let r=Math.sin((e*10+Gt(e*6,n*2,{seed:t,octaves:3,period:6})*4)*Math.PI*2)*.5+.5,i=Gt(e*16,n*64,{seed:t+2,octaves:3,period:16}),a=kt([150,112,78],[110,78,52],r*.45+(i-.5)*.5);return[Ot(a[0]),Ot(a[1]),Ot(a[2])]})}function Jt(){let e=Kt(256,7),t=qt(256,21),n=Dt(e),r=Dt(t);return n.repeat.set(1/3,1/3),r.repeat.set(1/2,1/2),{conc:n,wood:r}}var H=3.2,U=3.2,Yt=0;function Xt(e,t,n,r,i,a,o,s,c=`#9aa3a1`,l=0){e.box(t,[n,r,i],[a,o,s],{color:c,rot:[0,l,0],gradient:{y0:o,y1:o+3,from:.72,to:1}})}function Zt(e,t,n,r,i,a,s,c=1.1,l=1,u=`#ffb060`,d=3.2){let f=new B().setFromEuler(new h(0,s,0)),p=new o(0,0,1).applyQuaternion(f),m=r+p.x*.03,g=a+p.z*.03,_=new b().compose(new o(m,i,g),f,new o(1,1,1)),v=new w(c,l),y=v.getAttribute(`uv`);for(let e=0;e<y.count;e++)y.setXY(e,y.getX(e)*c,y.getY(e)*l);e.addGeometry(`glass`,v,_,{color:`#ffffff`,emit:u,emitIntensity:d,jitter:0});let x=.08;new o(1,0,0).applyQuaternion(f),new o(0,1,0);let S=m+p.x*.02,C=g+p.z*.02,T=i-l/2,E=(t,n,r,i)=>{e.box(`trim`,[n,r,i],[S+t.x,T+t.y,C+t.z],{color:`#3c3833`,jitter:.03,rot:[0,s,0]})};E(new o(0,0,0),c+x*2,x,.1),E(new o(0,l,0),c+x*2,x,.1),E(new o(-c/2,l/2,0),x,l,.1),E(new o(c/2,l/2,0),x,l,.1),E(new o(0,l/2,0),.05,l,.06),t.push({pos:[m+p.x*.4,i,g+p.z*.4],size:2.6*n.jitter(.2),color:u,intensity:1.4,flicker:0})}function Qt(e,t,n,r,i,a,s){let c=new o(t,a,n),l=new o(r,a,i),u=c.distanceTo(l),d=Math.max(2,Math.round(u/1.4));for(let t=0;t<=d;t++){let n=c.clone().lerp(l,t/d);e.box(`metal`,[.06,1,.06],[n.x,a,n.z],{color:`#2e3336`,jitter:.04})}let f=[c.clone().setY(a+1),l.clone().setY(a+1)],p=[c.clone().setY(a+.55),l.clone().setY(a+.55)];e.tube(`metal`,f,.035,{color:`#2e3336`,jitter:0},4),e.tube(`metal`,p,.02,{color:`#2e3336`,jitter:0},3)}function $t(e,t,n,r,i,a){e.box(`trim`,[.8,.55,.35],[t,n,r],{color:`#c9cdc9`,rot:[0,i,0],jitter:.05}),e.box(`metal`,[.5,.06,.02],[t,n+.28,r],{color:`#555`,rot:[0,i,0],jitter:0})}function en(e,t,n,r,i,a){e.cyl(`trim`,.22,.17,.35,8,[n,r,i],{color:a.pick([`#8a4f3a`,`#5d6e5a`,`#77716a`]),jitter:.06});let o=a.range(.5,1);e.cone(`fabric`,a.range(.25,.45),o,7,[n,r+.3,i],{color:a.pick([`#4d6b48`,`#5d7a4a`,`#3d5a44`]),sway:.8,jitter:.08})}function tn(e,t,n,r,i,a,s,c,l=`#ff5a3a`){let u=new o(r,i,a),d=new o(s,i,c),f=u.distanceTo(d),p=Math.max(2,Math.floor(f/1.1)),m=Ft(u,d,.06,16);e.tube(`cable`,m,.015,{color:`#151515`,jitter:0},3);for(let r=1;r<p;r++){let i=r/p,a=u.clone().lerp(d,i);a.y-=4*f*.06*i*(1-i);let o=.22*n.jitter(.12);e.cyl(`bulb`,o*.6,o*.6,o*1.3,8,[a.x,a.y-o*1.5,a.z],{emit:l,emitIntensity:4.5,color:l,jitter:0,sway:.6,swayFrom:`top`}),t.push({pos:[a.x,a.y-o,a.z],size:1.8,color:l,intensity:1.6,flicker:.08})}}function nn(e,t){let n=Ct.from(e),r=new At(2048),a=n.fork(`signs`),l=Vt(t,Jt(),r.texture());rn={buckets:l,atlas:r},an=0,pn=[],mn=[],hn=[],gn=0,_n=0;let u=new wt(l,n.fork(`geo`)),d=[],f=[],p=-17/2,m=-12.5/2,h=[-7.5,-4.5,-1.5,1.5,4.5,7.5],g=[-5.2,-1.8,1.8,5.2],_=[],v=new i;v.name=`deck-railings`,yn(`main`,p,m,8.5,6.25,!1);for(let e of h)for(let t of g){let r=e+n.range(-.15,.15),i=t+n.range(-.15,.15);u.cyl(`concrete`,.34,.38,4.4,10,[r,-1.2,i],{color:`#7d8380`,gradient:{y0:-1.2,y1:.6,from:.42,to:1},jitter:.05}),n.chance(.4)&&u.cyl(`metal`,.42,.42,.18,12,[r+.35,.55,i],{color:`#1c1c1c`,rot:[0,0,Math.PI/2],jitter:.02}),_.push({x:r,z:i,r:.6})}u.box(`concrete`,[17,.7,12.5],[0,2.5,0],{color:`#8b918d`,jitter:.03}),u.box(`concrete`,[17.5,.28,13],[0,2.92,0],{color:`#7c8280`,jitter:.03}),u.box(`wood`,[16,.06,11.5],[0,U,0],{color:`#a08058`,jitter:.06}),W(`main`,v,-8.2,-5.95,-2.2,-5.95,U),W(`main`,v,.2,-5.95,8.2,-5.95,U),W(`main`,v,-8.2,5.95,8.2,5.95,U),W(`main`,v,-8.2,-5.95,-8.2,5.95,U),W(`main`,v,8.2,-5.95,8.2,3.65,U);let b={x:-4.2,z:-1.2,w:6.2,d:7,floors:5},x={x:3.6,z:.2,w:7.2,d:8.2,floors:3},S=e=>U+e*H,C=[`#9aa3a1`,`#a8aca4`,`#8f9a96`,`#b0a894`],w=(e,t=-1,r)=>{let i=n.fork(r);for(let n=0;n<e.floors;n++){let r=S(n),a=n===t,o=a?`accent`:`concrete`,s=a?`#d9b96a`:i.pick(C);Xt(u,o,e.w,H,e.d,e.x,r,e.z,s),u.box(`concrete`,[e.w+.35,.18,e.d+.35],[e.x,r+H-.18,e.z],{color:`#7a7f7c`,jitter:.03}),n===e.floors-1&&(u.box(`concrete`,[e.w+.2,.5,.15],[e.x,r+H,e.z+e.d/2],{color:`#868b88`,jitter:.04}),u.box(`concrete`,[e.w+.2,.5,.15],[e.x,r+H,e.z-e.d/2],{color:`#868b88`,jitter:.04}));let c=n===0?3:4;for(let t=0;t<c;t++){let a=e.x-e.w/2+e.w/(c+1)*(t+1)+i.range(-.15,.15),o=r+(n===0?1.9:1.7);Zt(u,d,i,a,o,e.z+e.d/2,0,n===0?1.3:1,1.05)}for(let t=0;t<2;t++){let n=e.z-e.d/2+e.d/3*(t+1);Zt(u,d,i,e.x+e.w/2,r+1.7,n,Math.PI/2,.9,.95)}if($t(u,e.x-e.w/2+i.range(.5,e.w-.5),r+i.range(1.2,2.2),e.z+e.d/2+.25,0,i),i.chance(.7)){let t=e.x+i.range(-e.w/2+.5,e.w/2-.5);u.cyl(`metal`,.05,.05,H,6,[t,r,e.z+e.d/2+.12],{color:`#4a4f52`,jitter:.02})}if(i.chance(.6)&&en(u,d,e.x+i.range(-2,2),r+H-.05,e.z+e.d/2-.6,i),n===0){let t=e.w*.7;u.box(`fabric`,[t,.08,1.4],[e.x,r+2.6,e.z+e.d/2+.7],{color:i.pick([`#c96f3f`,`#7fa3a0`,`#b8452e`]),rot:[.28,0,0],sway:.25,swayFrom:`top`,jitter:.04}),u.box(`wood`,[1.1,2.2,.15],[e.x-1.2,r,e.z+e.d/2+.02],{color:`#5a3d28`,jitter:.04}),u.box(`glass`,[1.9,1.5,.1],[e.x+1.3,r+.5,e.z+e.d/2+.02],{color:`#ffffff`,emit:`#ffc27a`,emitIntensity:2.6,jitter:0}),d.push({pos:[e.x+1.3,r+1.4,e.z+e.d/2+.6],size:3.4,color:`#ffc27a`,intensity:1.3})}}};w(b,2,`left`),w(x,-1,`right`);let T=S(x.floors);u.box(`concrete`,[3.4,2.4,3],[x.x-1.2,T,x.z-1.4],{color:`#a3a8a4`,gradient:{y0:T,y1:T+2.4,from:.8,to:1}}),u.box(`glass`,[1.2,1.3,.12],[x.x-1.2,T+.5,x.z-1.4+1.55],{color:`#fff`,emit:`#ffe9b8`,emitIntensity:3.4,jitter:0}),d.push({pos:[x.x-1.2,T+1.4,x.z+.6],size:4.2,color:`#ffe9b8`,intensity:1.5}),Qt(u,x.x-x.w/2+.2,x.z+x.d/2-.2,x.x+x.w/2-.2,x.z+x.d/2-.2,T,n),Qt(u,x.x-x.w/2+.2,x.z-x.d/2+.2,x.x+x.w/2-.2,x.z-x.d/2+.2,T,n);let E=n.fork(`roof`);for(let e=0;e<3;e++)u.cyl(`metal`,.55,.55,1.4,12,[x.x+E.range(-2.5,2.5),T,x.z+E.range(-3,3)],{color:`#5d6a6e`,jitter:.05});u.box(`wood`,[1,.7,1],[x.x+2.2,T,x.z-2.6],{color:`#8a6a48`,jitter:.07}),u.box(`wood`,[.8,.55,.8],[x.x+2.2,T+.7,x.z-2.6],{color:`#93744e`,jitter:.07}),u.cyl(`metal`,.09,.09,2.2,6,[x.x-2.8,T,x.z+2.4],{color:`#444`,jitter:0}),It(u,`cable`,[x.x-2.6,T+1.9,x.z+2.2],[x.x+2.4,T+1.9,x.z+2.2],.012,.04);for(let e=0;e<5;e++)u.box(`fabric`,[.5,.65,.03],[x.x-2+e*1,T+1.15,x.z+2.2],{color:E.pick([`#e8e2d2`,`#9db8c4`,`#c47a6a`,`#d9c26a`]),sway:1,swayFrom:`top`,jitter:.05});let D=S(b.floors);u.box(`metal`,[1.2,3.2,1.2],[b.x-1.4,D,b.z-1.8],{color:`#4c5257`,jitter:.04});for(let e=0;e<5;e++)u.cyl(`metal`,.03,.05,E.range(2,4.5),5,[b.x+E.range(-2.5,2.5),D,b.z+E.range(-3,2)],{color:`#333`,jitter:0});u.cyl(`trim`,.5,.1,.25,12,[b.x+1.8,D+1.6,b.z+1.6],{color:`#cfd4d2`,rot:[.9,.4,0],jitter:.02});let O=8.6,k=3.4,ee=U;for(let[e,t]of[[-.35,-.35],[.35,-.35],[-.35,.35],[.35,.35]])u.cyl(`metal`,.06,.08,21,6,[O+e,ee,k+t],{color:`#2c2f31`,jitter:.02});for(let e=0;e<21;e+=1.6)u.box(`metal`,[.9,.07,.07],[O,ee+e,3.75],{color:`#2c2f31`,jitter:0}),u.box(`metal`,[.07,.07,.9],[8.95,ee+e,k],{color:`#2c2f31`,jitter:0});u.box(`metal`,[1.6,.15,.15],[O,24.2,k],{color:`#2c2f31`,jitter:0}),u.cyl(`bulb`,.09,.09,.16,8,[O,24.3,k],{emit:`#ff3b30`,emitIntensity:5,color:`#ff3b30`,jitter:0}),d.push({pos:[O,24.55,k],size:2.2,color:`#ff3b30`,intensity:2,flicker:.4}),It(u,`cable`,[O,22.2,k],[x.x+2,T+1,x.z+1],.02,.05),It(u,`cable`,[O,19.2,k],[b.x+1.5,D+.5,b.z+2],.02,.08),It(u,`cable`,[b.x,D+2,b.z],[x.x,T+2,x.z],.018,.07);let ne=r.add({text:`OASIS HARBOUR`,style:`neon`,bg:`#050403`,fg:`#ffb14e`},1024,160,a),re=r.add({text:`OASIS`,style:`lightbox`,bg:`#e8c26a`,fg:`#2a2015`,vertical:!0},160,640,a),A=r.add({text:`YOROZUYA`,style:`lightbox`,bg:`#b8d48a`,fg:`#22331a`},512,160,a),ie=r.add({text:`x`,style:`painted`,bg:`#c96f4a`,fg:`#ffe2b8`,pseudo:!0},640,160,a),ae=r.add({text:`ラーメン 24`,style:`painted`,bg:`#a83a2e`,fg:`#ffe9c4`},512,170,a),ce=r.add({text:`B2`,style:`neon`,bg:`#050403`,fg:`#7ad4ff`},200,200,a),le=r.add({text:`KISSATEN`,style:`lightbox`,bg:`#7fa3a0`,fg:`#10201e`},512,150,a);r.texture().needsUpdate=!0,Pt(u,`sign`,ne,7.5,1.1,[0,2.75,6.53],0,`#ffb14e`,3.2),d.push({pos:[0,2.8000000000000003,7.05],size:7,color:`#ff9a3c`,intensity:1.1,flicker:.12}),Pt(u,`sign`,re,.9,3.4,[x.x+x.w/2+.15,S(1)+1.2,x.z+1],Math.PI/2,`#ffd98a`,2.8),d.push({pos:[x.x+x.w/2+.7,S(1)+1.2,x.z+1],size:4,color:`#ffd98a`,intensity:1.2}),Pt(u,`sign`,A,3.2,.9,[x.x-.5,S(0)+2.5,x.z+x.d/2+.1],0,`#d8ff9a`,2.6),Pt(u,`sign`,ie,4.2,.95,[b.x,S(0)+2.55,b.z+b.d/2+.1],0,`#ffcf8a`,2.4),d.push({pos:[b.x,S(0)+2.4,b.z+b.d/2+.7],size:5,color:`#ffB060`,intensity:.9}),Pt(u,`sign`,ae,1.6,.55,[x.x-2.2,S(0)+1.9,x.z+x.d/2+.12],0,`#ff8a6a`,2.5),Pt(u,`sign`,ce,.6,.6,[-3.4,2.8000000000000003,6.53],0,`#7ad4ff`,3);let M=n.fork(`deck`);for(let e=0;e<14;e++){let e=M.range(-7.5,7.5),t=M.range(-5.25,3.75);if(Math.abs(e-b.x)<3.4&&Math.abs(t-b.z)<4||Math.abs(e-x.x)<4&&Math.abs(t-x.z)<4.6)continue;let n=M.pick([`crate`,`barrel`,`stool`,`plant`]);n===`crate`?u.box(`wood`,[.6,.6,.6],[e,U,t],{color:`#8a6f4c`,rot:[0,M.range(0,3),0],jitter:.08}):n===`barrel`?u.cyl(`metal`,.3,.32,.85,10,[e,U,t],{color:M.pick([`#4d6b72`,`#7a4a3a`,`#5d5d5d`]),jitter:.06}):n===`stool`?u.box(`wood`,[.4,.45,.4],[e,U,t],{color:`#6e5138`,jitter:.07}):en(u,d,e,U,t,M)}for(let[e,t]of[[-7.5,5.25],[7.1,5.25]])u.cyl(`metal`,.06,.08,3.4,8,[e,U,t],{color:`#2c2f31`,jitter:.02}),u.cyl(`bulb`,.12,.16,.3,8,[e,6.6,t],{emit:`#ffd9a0`,emitIntensity:5,color:`#ffd9a0`,jitter:0}),d.push({pos:[e,6.7,t],size:2.6,color:`#ffd9a0`,intensity:1.8});Lt(u,d,M,[-7.9,6.300000000000001,5.55],[7.9,6.300000000000001,5.55],{wireBucket:`cable`,bulbBucket:`bulb`,palette:[`#ffe2a0`,`#ffd9a0`,`#fff2cc`],spacing:.55,glowSize:1.1}),tn(u,d,M,b.x-2.4,S(0)+2.9,b.z+b.d/2+.5,b.x+2.4,b.z+b.d/2+.5),tn(u,d,M,x.x-2.8,S(0)+2.7,x.z+x.d/2+.6,x.x+2.8,x.z+x.d/2+.6),zt(u,M,[O,23.2,k],[b.x+2,D+1,b.z+2],{bucket:`fabric`,palette:[`#d94f3d`,`#e8c26a`,`#7fa3a0`,`#e8e2d2`,`#4d6b72`],spacing:.45});let N=.7;for(let e=0;e<12;e++){let t=e/11,n=9.299999999999999+t*4.2,r=U-t*2.5;u.box(`wood`,[.9,.12,1.6],[n,r-.12,4.65],{color:`#7d6142`,jitter:.06})}u.box(`wood`,[5.4,.15,.1],[11.3,2,5.55],{color:`#5d4a34`,rot:[0,0,-.42],jitter:.03});let ue=14.5,de=4.65;u.box(`wood`,[3.2,.18,2.6],[ue,.52,de],{color:`#7d6142`,jitter:.06});for(let[e,t]of[[-1.4,-1.1],[1.4,-1.1],[-1.4,1.1],[1.4,1.1]])u.cyl(`wood`,.14,.16,2.3,8,[ue+e,-1,de+t],{color:`#5d4a34`,gradient:{y0:-1,y1:.5,from:.45,to:1}}),_.push({x:ue+e,z:de+t,r:.45});mn.push({id:`jetty`,minX:12.9,minZ:3.3500000000000005,maxX:16.1,maxZ:5.95},{id:`stair`,minX:8.9,minZ:3.65,maxX:13.899999999999999,maxZ:5.65}),hn.push({x:-6.5,z:9.5,r:3.2},{x:-3.2,z:11.5,r:2.2});let P={cx:-1,cz:-13.2,w:12,h:7.5},F=P.cx-P.w/2,I=P.cz-P.h/2,L=n.fork(`north`);for(let e=0;e<4;e++)for(let t=0;t<3;t++){let n=F+1.2+e*((P.w-2.4)/3)+L.range(-.12,.12),r=I+1+t*((P.h-2)/2)+L.range(-.12,.12);u.cyl(`concrete`,.3,.34,4.4,10,[n,-1.2,r],{color:`#7d8380`,gradient:{y0:-1.2,y1:.6,from:.42,to:1},jitter:.05}),_.push({x:n,z:r,r:.55})}u.box(`concrete`,[P.w,.7,P.h],[P.cx,2.5,P.cz],{color:`#8b918d`,jitter:.03}),u.box(`concrete`,[P.w+.4,.28,P.h+.4],[P.cx,2.92,P.cz],{color:`#7c8280`,jitter:.03}),u.box(`wood`,[P.w-.8,.06,P.h-.8],[P.cx,U,P.cz],{color:`#9a7c52`,jitter:.06}),yn(`north`,F,I,F+P.w,I+P.h,!1),W(`north`,v,F+.3,I+.3,F+P.w-.3,I+.3,U),W(`north`,v,F+.3,I+P.h-.3,-2.2,I+P.h-.3,U),W(`north`,v,.2,I+P.h-.3,F+P.w-.3,I+P.h-.3,U),W(`north`,v,F+.3,I+.3,F+.3,I+P.h-.3,U),W(`north`,v,F+P.w-.3,I+.3,F+P.w-.3,I+P.h-.3,U);let R={x:-2.5,z:-14.2,w:5.5,d:4,floors:2};for(let e=0;e<R.floors;e++){let t=S(e);Xt(u,`concrete`,R.w,H,R.d,R.x,t,R.z,L.pick(C)),u.box(`concrete`,[R.w+.3,.18,R.d+.3],[R.x,t+H-.18,R.z],{color:`#7a7f7c`,jitter:.03});for(let e=0;e<3;e++)Zt(u,d,L,R.x-R.w/2+R.w/4*(e+1),t+1.7,R.z+R.d/2,0,.95,.95);Zt(u,d,L,R.x+R.w/2,t+1.7,R.z,Math.PI/2,.9,.9),$t(u,R.x-1.5,t+1.6,R.z+R.d/2+.25,0,L),L.chance(.6)&&en(u,d,R.x+L.range(-2,2),t+H-.05,R.z+R.d/2-.5,L)}let pe=S(R.floors);u.cyl(`metal`,.12,.12,1.8,8,[R.x+1.8,pe,R.z-1.2],{color:`#4a4f52`,jitter:.03}),u.box(`wood`,[.9,.6,.9],[R.x-1.6,pe,R.z-1],{color:`#8a6f4c`,jitter:.07}),u.box(`wood`,[.7,.5,.7],[R.x-1.6,pe+.6,R.z-1],{color:`#93744e`,jitter:.07}),It(u,`cable`,[R.x-2.2,pe+1.6,R.z+1.2],[R.x+2.2,pe+1.6,R.z+1.2],.012,.04);for(let e=0;e<4;e++)u.box(`fabric`,[.45,.6,.03],[R.x-1.6+e*1,pe+.9,R.z+1.2],{color:L.pick([`#e8e2d2`,`#9db8c4`,`#c47a6a`]),sway:1,swayFrom:`top`,jitter:.05});Pt(u,`sign`,le,3,.85,[R.x,S(0)+2.5,R.z+R.d/2+.1],0,`#c4ecdd`,2.4),d.push({pos:[R.x,S(0)+2.4,R.z+R.d/2+.7],size:4.2,color:`#9fd8c4`,intensity:1});let z={x:3.1,z:-15.2};u.box(`wood`,[1.8,4.6,1.8],[z.x,U,z.z],{color:`#6e5138`,gradient:{y0:U,y1:7.8,from:.7,to:1},jitter:.05}),u.box(`roof`,[2.4,.18,2.4],[z.x,7.8,z.z],{color:`#4c5257`,jitter:.03}),u.cyl(`bulb`,.14,.18,.34,8,[z.x,8,z.z],{emit:`#ffd9a0`,emitIntensity:4.5,color:`#ffd9a0`,jitter:0}),d.push({pos:[z.x,8.2,z.z],size:2.8,color:`#ffd9a0`,intensity:1.7});for(let e=0;e<6;e++){let e=L.range(F+1,F+P.w-1),t=L.range(I+P.h-2.6,I+P.h-.8);Math.abs(e-R.x)<3.2&&Math.abs(t-R.z)<2.6||(L.chance(.5)?u.box(`wood`,[.6,.6,.6],[e,U,t],{color:`#8a6f4c`,rot:[0,L.range(0,3),0],jitter:.08}):u.cyl(`metal`,.3,.32,.85,10,[e,U,t],{color:`#4d6b72`,jitter:.06}))}u.cyl(`metal`,.06,.08,3.2,8,[F+1,U,I+P.h-1],{color:`#2c2f31`,jitter:.02}),u.cyl(`bulb`,.12,.16,.3,8,[F+1,6.4,I+P.h-1],{emit:`#ffd9a0`,emitIntensity:4.5,color:`#ffd9a0`,jitter:0}),d.push({pos:[F+1,6.5,I+P.h-1],size:2.4,color:`#ffd9a0`,intensity:1.6}),It(u,`cable`,[b.x-1,D+1,b.z-2],[R.x+1,pe+.8,R.z+1],.018,.1);let B={x:-1,z0:-6.25,z1:-9.45,w:2},ge=Math.abs(B.z1-B.z0)+.8,_e=(B.z0+B.z1)/2;u.box(`wood`,[.16,.3,ge],[B.x-B.w/2,3.0500000000000003,_e],{color:`#5d4a34`,jitter:.04}),u.box(`wood`,[.16,.3,ge],[B.x+B.w/2,3.0500000000000003,_e],{color:`#5d4a34`,jitter:.04});let ve=Math.floor(ge/.34);for(let e=0;e<=ve;e++){let t=B.z0+.2-e/ve*(ge-.2);u.box(`wood`,[B.w,.08,.28],[B.x,3.18,t],{color:`#7d6142`,jitter:.07})}Qt(u,B.x-B.w/2,B.z0+.1,B.x-B.w/2,B.z1-.1,U,n),Qt(u,B.x+B.w/2,B.z0+.1,B.x+B.w/2,B.z1-.1,U,n);for(let e of[-B.w/2,B.w/2])u.cyl(`wood`,.13,.15,4.800000000000001,8,[B.x+e,-1,_e],{color:`#5d4a34`,gradient:{y0:-1,y1:.5,from:.45,to:1},jitter:.04}),_.push({x:B.x+e,z:_e,r:.4});Lt(u,d,L,[B.x,5.9,B.z0+.2],[B.x,5.9,B.z1-.2],{wireBucket:`cable`,bulbBucket:`bulb`,palette:[`#ffe2a0`,`#ffd9a0`,`#fff2cc`],spacing:.5,glowSize:1}),It(u,`cable`,[B.x-B.w/2,4.2,_e],[F+2,3.4000000000000004,I+P.h],.012,.03),It(u,`cable`,[B.x+B.w/2,4.2,_e],[2,3.4000000000000004,m],.012,.03);let be=u.build();be.name=`harbour-static`,be.add(v);let xe=Ne(P.w+3,P.h+3,0,.35);xe.position.set(P.cx,.03,P.cz),be.add(xe);let Se=[],Ce=[],we=n.fork(`boats`),Te=l.hull.material,Ee=(e,t,n,r,a)=>{let u=new i,f=e===`row`?{length:3.6,beam:1.3,depth:.55,sheer:.2,bow:1.6,stern:4,rake:.1}:e===`skiff`?{length:4.2,beam:1.6,depth:.6,sheer:.15,bow:1.8,stern:8,rake:.15}:{length:7,beam:2.4,depth:.9,sheer:.3,bow:2,stern:6,rake:.25},p=Bt({...f,stations:14,sections:7}),m=p.getAttribute(`position`).count,h=new Float32Array(m*3),g=new j(we.pick([`#7a8a8c`,`#a8aca4`,`#8a6a4c`,`#5d6a72`]));for(let e=0;e<m;e++)h[e*3]=g.r,h[e*3+1]=g.g,h[e*3+2]=g.b;p.setAttribute(`color`,new me(h,3));let v=new c(p,Te);v.castShadow=v.receiveShadow=!0,u.add(v);let y=l.trim.material,b=l.wood.material,x=(e,t,n,r,i,a=0)=>{let o=new c(e,t);o.position.set(n,r,i),o.rotation.y=a,o.castShadow=!0,u.add(o)};if(e!==`cabin`){for(let e=-1;e<=1;e++)x(new fe(1.1,.05,.28),b,0,.42,e*.9);let e=new c(new oe(.07,8,8),new s({color:`#111`,emissive:`#ffcf8a`,emissiveIntensity:4}));e.position.set(0,.8,f.length/2-.4),u.add(e),d.push({pos:[t,1,n],size:1.4,color:`#ffcf8a`,intensity:1.4})}else{x(new fe(1.8,1.1,2.2),b,0,.55,-.6),x(new fe(2,.12,2.4),y,0,1.68,-.6);let e=new c(new oe(.08,8,8),new s({color:`#111`,emissive:`#ffd9a0`,emissiveIntensity:4}));e.position.set(0,1.9,.8),u.add(e),d.push({pos:[t,2,n],size:1.8,color:`#ffd9a0`,intensity:1.6})}u.position.set(t,Yt,n),u.rotation.y=r,_.push({x:t,z:n,r:f.length/2.4}),Se.push(u);let S;a&&(S=new he([new o(t,Yt,n),new o(t-14,Yt,n+10),new o(t-26,Yt,n-6),new o(t-8,Yt,n-14)],!0)),Ce.push({g:u,phase:we.range(0,6),path:S,t:we.next(),speed:we.range(.008,.016)})};Ee(`cabin`,-6.5,9.5,.5,!1),Ee(`row`,-3.2,11.5,-.3,!1),Ee(`skiff`,-16,-7,1.1,!0);let De=new i,Oe=[],ke=new y({color:`#f2f4f2`,side:2});for(let e=0;e<4;e++){let t=new i,n=new te;n.setAttribute(`position`,new ye([0,0,0,.9,0,.25,.9,0,-.25],3)),n.computeVertexNormals();let r=new c(n,ke),a=new c(n,ke);a.rotation.y=Math.PI,t.add(r,a),De.add(t),Oe.push({pivot:t,wingL:r,wingR:a,r:22+e*7,h:22+e*3,speed:.12+e*.02,phase:e*1.7})}let Ae=[],je=(e,t,n,r,i,a)=>Ae.push(new se(new o(e-r/2,t,n-a/2),new o(e+r/2,t+i,n+a/2)));je(b.x,U,b.z,b.w,b.floors*H,b.d),je(x.x,U,x.z,x.w,x.floors*H,x.d),je(x.x-1.2,T,x.z-1.4,3.4,2.4,3),je(O,ee,k,1,21,1),je(R.x,U,R.z,R.w,R.floors*H,R.d),je(z.x,U,z.z,1.8,4.8,1.8);let Me=new se().setFromObject(be);Me.expandByPoint(new o(ue,N,de));let Pe={surfaces:[{min:[p,m],max:[8.5,6.25],y0:3.2600000000000002},{min:[9.1,3.85],max:[13.7,5.45],y0:U,y1:N,axis:`x`},{min:[12.9,3.3500000000000005],max:[16.1,5.95],y0:N},{min:[x.x-x.w/2,x.z-x.d/2],max:[x.x+x.w/2,x.z+x.d/2],y0:T},{min:[F,I],max:[F+P.w,I+P.h],y0:3.2600000000000002},{min:[B.x-B.w/2,B.z1],max:[B.x+B.w/2,B.z0],y0:3.24}],blockers:Ae,spawn:new o(.5,3.2600000000000002,4.6),waterY:Yt,bounds:Me},V=Me.getCenter(new o);return{staticGroup:be,boats:Se,boatData:Ce,birds:De,birdData:Oe,glows:d,nav:Pe,bounds:Me,views:[{name:`Reference`,target:[V.x,V.y*.62,V.z],azimuth:46.5,elevation:30,distance:170},{name:`Rooftops`,target:[0,D,0],azimuth:46.5,elevation:42,distance:78},{name:`Shopfronts`,target:[0,4.800000000000001,5.5],azimuth:20,elevation:14,distance:34},{name:`Waterline`,target:[0,1.6,0],azimuth:116,elevation:5,distance:52},{name:`The stair`,target:[12.5,2.2,de],azimuth:100,elevation:18,distance:32},{name:`Back`,target:[V.x,V.y*.62,V.z],azimuth:226.5,elevation:28,distance:170},{name:`Yorozuya`,target:[x.x,S(1),x.z+3],azimuth:70,elevation:22,distance:40},{name:`North deck`,target:[P.cx,4.7,P.cz+1],azimuth:35,elevation:24,distance:38}],viewDesc:[`The pier as it was drawn: thirty degrees up, forty-six and a half round.`,`Tanks, laundry and antennas above the harbour.`,`Awning shade, lantern light and supper smoke.`,`Piles, foam and hulls at the waterline.`,`Twelve steps down to the jetty boat.`,`The back: pipes, dishes and washing lines.`,`Green lightbox alley — noodles, day and night.`,`Over the lit bridge: kissaten, tower and laundry.`],heroSpots:[new o(0,4.800000000000001,6.4),new o(b.x,S(0)+2.4,b.z+4.2),new o(x.x,T+1.4,x.z+1),new o(O,11.2,k),new o(R.x,S(0)+2.4,R.z+2.8)],signAtlas:r,foamAnchors:_,smokeSources:[new o(x.x-2.8,T+2.2,x.z+2.4),new o(b.x-1.4,D+3.4,b.z-1.8),new o(R.x+1.8,pe+1.8,R.z-1.2)],lanternPivots:f}}var rn=null,an=0,on=[`SOBA`,`RAMEN`,`TEA`,`BOOKS`,`SAIL`,`FISH`,`NOODLE`,`TACKLE`,`KITE`,`BEANS`],sn=[`#7fa3a0`,`#c96f4a`,`#d9c26a`,`#8a5f8a`,`#4d6b72`,`#a83a2e`],cn=[`#10201e`,`#ffe2b8`,`#2a2015`,`#f2e8d8`,`#e8f2f0`,`#ffe9c4`],ln=[`#9aa3a1`,`#a8aca4`,`#b0a894`,`#8f9a96`,`#c4b896`],un=[`#c96f3f`,`#7fa3a0`,`#b8452e`,`#4d6b72`];function dn(){let e=an,t=3.4+Math.random()*1.6,n=3+Math.random()*1.4,r=1+Math.floor(Math.random()*3);return{w:t,d:n,floors:r,h:r*H,label:`${on[e%on.length]} ${e+1}`,bg:sn[e%sn.length],fg:cn[e%cn.length],wall:ln[e%ln.length],awning:un[e%un.length],seed:Math.random()*1e9|0}}function fn(e,t,n){if(!rn)throw Error(`buildUserBlock: generate a harbour first`);an++;let r=Ct.from(`userblock-${n.seed}`),i=new wt(rn.buckets,r.fork(`geo`)),a=[],{w:s,d:c,floors:l}=n;for(let o=0;o<l;o++){let u=U+o*H;Xt(i,`concrete`,s,H,c,e,u,t,n.wall),i.box(`concrete`,[s+.3,.18,c+.3],[e,u+H-.18,t],{color:`#7a7f7c`,jitter:.03}),o===l-1&&i.box(`concrete`,[s+.15,.45,.12],[e,u+H,t+c/2],{color:`#868b88`,jitter:.04});let d=Math.max(2,Math.round(s/1.6));for(let n=0;n<d;n++)Zt(i,a,r,e-s/2+s/(d+1)*(n+1)+r.range(-.1,.1),u+1.7,t+c/2,0,.95,.95);Zt(i,a,r,e+s/2,u+1.6,t,Math.PI/2,.85,.9),$t(i,e-s/2+r.range(.6,s-.6),u+r.range(1.2,2),t+c/2+.25,0,r),r.chance(.5)&&i.cyl(`metal`,.05,.05,H,6,[e+r.range(-s/2+.4,s/2-.4),u,t+c/2+.12],{color:`#4a4f52`,jitter:.02}),o===0&&(i.box(`fabric`,[s*.66,.08,1.2],[e,u+2.55,t+c/2+.6],{color:n.awning,rot:[.28,0,0],sway:.25,swayFrom:`top`,jitter:.04}),i.box(`wood`,[1,2.1,.14],[e-s/4,u,t+c/2+.02],{color:`#5a3d28`,jitter:.04}),i.box(`glass`,[1.6,1.4,.1],[e+s/4,u+.5,t+c/2+.02],{color:`#ffffff`,emit:`#ffc27a`,emitIntensity:2.2,jitter:0}),a.push({pos:[e+s/4,u+1.3,t+c/2+.5],size:3,color:`#ffc27a`,intensity:1.2}))}let u=U+l*H;i.box(`wood`,[.8,.55,.8],[e-s/4,u,t-c/4],{color:`#8a6f4c`,jitter:.07}),i.cyl(`metal`,.4,.4,1.1,10,[e+s/4,u,t-c/4],{color:`#5d6a6e`,jitter:.05});let d=rn.atlas.add({text:n.label,style:`lightbox`,bg:n.bg,fg:n.fg},512,150,r);rn.atlas.texture().needsUpdate=!0,Pt(i,`sign`,d,Math.min(3,s*.72),.8,[e,5.7,t+c/2+.1],0,`#ffffff`,2.2),a.push({pos:[e,5.6,t+c/2+.6],size:3.6,color:n.bg,intensity:.9});let f=i.build();return f.name=`user-block-${n.seed}`,{group:f,glows:a,blocker:new se(new o(e-s/2,U,t-c/2),new o(e+s/2,U+n.h,t+c/2))}}var pn=[],mn=[],hn=[],gn=0,_n=0,vn=1.3;function yn(e,t,n,r,i,a){let o={id:e,minX:t,minZ:n,maxX:r,maxZ:i,topY:3.2600000000000002,userBuilt:a,spans:[]};return pn.push(o),o}function bn(e){return Math.abs(e.x1-e.x0)>=Math.abs(e.z1-e.z0)?`x`:`z`}function xn(e,t,n,r,i){let a=new wt(rn.buckets,Ct.from(`rail-${gn++}`));return Qt(a,e,t,n,r,i,Ct.from(`railj-${gn}`)),a.build()}function Sn(e){e.traverse(e=>{let t=e;t.isMesh&&t.geometry?.dispose?.()})}function Cn(e){for(let t of e.meshes)e.parent.remove(t),Sn(t);e.meshes=[];let t=bn(e),n=t===`x`?Math.min(e.x0,e.x1):Math.min(e.z0,e.z1),r=t===`x`?Math.max(e.x0,e.x1):Math.max(e.z0,e.z1),i=t===`x`?e.z0:e.x0,a=[...e.gaps].sort((e,t)=>e-t),o=[],s=n;for(let e of a)e-vn>s+.15&&o.push([s,e-vn]),s=Math.max(s,e+vn);s+.15<r&&o.push([s,r]);for(let[n,r]of o){if(r-n<.3)continue;let a=xn(t===`x`?n:i,t===`x`?i:n,t===`x`?r:i,t===`x`?i:r,e.y);e.meshes.push(a),e.parent.add(a)}}function W(e,t,n,r,i,a,o){let s=pn.find(t=>t.id===e);if(!s)throw Error(`addDeckSpan: unknown deck ${e}`);let c={deckId:e,x0:n,z0:r,x1:i,z1:a,y:o,gaps:[],meshes:[],parent:t};s.spans.push(c),Cn(c)}function wn(e,t,n){return bn(e)===`x`?Math.abs(n-e.z0)<.8&&t>=Math.min(e.x0,e.x1)-.1&&t<=Math.max(e.x0,e.x1)+.1:Math.abs(t-e.x0)<.8&&n>=Math.min(e.z0,e.z1)-.1&&n<=Math.max(e.z0,e.z1)+.1}function Tn(e,t,n){let r=pn.find(t=>t.id===e);if(!r)return!1;for(let e of r.spans){if(!wn(e,t,n))continue;let r=bn(e)===`x`?t:n;return e.gaps.some(e=>Math.abs(e-r)<.5)||(e.gaps.push(r),Cn(e)),!0}return!1}function En(e,t,n){let r=pn.find(t=>t.id===e);if(!r)return!1;for(let e of r.spans){if(!wn(e,t,n))continue;let r=bn(e)===`x`?t:n,i=e.gaps.findIndex(e=>Math.abs(e-r)<.6);if(i>=0)return e.gaps.splice(i,1),Cn(e),!0}return!1}function Dn(e){let t=pn.findIndex(t=>t.id===e);t>=0&&pn.splice(t,1)}function On(e,t,n){return e.minX<t.maxX+n&&e.maxX>t.minX-n&&e.minZ<t.maxZ+n&&e.maxZ>t.minZ-n}function kn(e,n,r,i){let a=(e+r)/2,o=(n+i)/2;if(Math.hypot(a,o)+Math.hypot(r-e,i-n)/2>60)return!1;let s={id:`new`,minX:e,minZ:n,maxX:r,maxZ:i};for(let e of pn)if(On(s,e,1.2))return!1;for(let e of mn)if(On(s,e,.8))return!1;for(let a of hn){let o=t.clamp(a.x,e,r),s=t.clamp(a.z,n,i);if(Math.hypot(a.x-o,a.z-s)<a.r+1)return!1}return!0}function An(e,n,r,i,a){let o=(e+r)/2,s=(n+i)/2,c=null,l=14;for(let u of pn)if(!(a&&u.id!==a)){if(i<=u.minZ-1.2){let n=Math.max(u.minX+1.6,e+1.6),a=Math.min(u.maxX-1.6,r-1.6);if(a>n&&u.minZ-i<l){let e=t.clamp(o,n,a);c={deckId:u.id,ax:e,az:u.minZ,bx:e,bz:i},l=u.minZ-i}}if(n>=u.maxZ+1.2){let i=Math.max(u.minX+1.6,e+1.6),a=Math.min(u.maxX-1.6,r-1.6);if(a>i&&n-u.maxZ<l){let e=t.clamp(o,i,a);c={deckId:u.id,ax:e,az:u.maxZ,bx:e,bz:n},l=n-u.maxZ}}if(r<=u.minX-1.2){let e=Math.max(u.minZ+1.6,n+1.6),a=Math.min(u.maxZ-1.6,i-1.6);if(a>e&&u.minX-r<l){let n=t.clamp(s,e,a);c={deckId:u.id,ax:u.minX,az:n,bx:r,bz:n},l=u.minX-r}}if(e>=u.maxX+1.2){let r=Math.max(u.minZ+1.6,n+1.6),a=Math.min(u.maxZ-1.6,i-1.6);if(a>r&&e-u.maxX<l){let n=t.clamp(s,r,a);c={deckId:u.id,ax:u.maxX,az:n,bx:e,bz:n},l=e-u.maxX}}}return c}function jn(e){if(!rn)throw Error(`buildDeckBridge: generate a harbour first`);let t=Ct.from(`bridge-${e.ax.toFixed(1)}-${e.az.toFixed(1)}-${e.bx.toFixed(1)}-${e.bz.toFixed(1)}`),n=new wt(rn.buckets,t),r=[],i=[],a=Math.abs(e.ax-e.bx)<.01,o=Math.hypot(e.bx-e.ax,e.bz-e.az),s=(e.ax+e.bx)/2,c=(e.az+e.bz)/2,l=Math.atan2(e.bx-e.ax,e.bz-e.az),u=Math.cos(l)*1.1,d=-Math.sin(l)*1.1;n.box(`wood`,[.16,.3,o+.8],[s+u,3.0500000000000003,c+d],{color:`#5d4a34`,rot:[0,l,0],jitter:.04}),n.box(`wood`,[.16,.3,o+.8],[s-u,3.0500000000000003,c-d],{color:`#5d4a34`,rot:[0,l,0],jitter:.04});let f=Math.max(2,Math.floor(o/.34));for(let t=0;t<=f;t++){let r=t/f;n.box(`wood`,[2,.08,.28],[e.ax+(e.bx-e.ax)*r,3.18,e.az+(e.bz-e.az)*r],{color:`#7d6142`,rot:[0,l,0],jitter:.07})}Qt(n,e.ax+u,e.az+d,e.bx+u,e.bz+d,U,t),Qt(n,e.ax-u,e.az-d,e.bx-u,e.bz-d,U,t);for(let e of[-1,1])n.cyl(`wood`,.13,.15,4.800000000000001,8,[s+u*e,-1,c+d*e],{color:`#5d4a34`,gradient:{y0:-1,y1:.5,from:.45,to:1},jitter:.04}),i.push({x:s+u*e,z:c+d*e,r:.4});Lt(n,r,t,[e.ax,5.800000000000001,e.az],[e.bx,5.800000000000001,e.bz],{wireBucket:`cable`,bulbBucket:`bulb`,palette:[`#ffe2a0`,`#ffd9a0`,`#fff2cc`],spacing:.5,glowSize:1});let p=n.build();return p.name=`user-bridge`,{group:p,glows:r,foamAnchors:i,surface:a?{min:[s-1.1,Math.min(e.az,e.bz)],max:[s+1.1,Math.max(e.az,e.bz)],y0:3.24}:{min:[Math.min(e.ax,e.bx),c-1.1],max:[Math.max(e.ax,e.bx),c+1.1],y0:3.24}}}var Mn={S:{w:7,d:6,maxBuildings:1},M:{w:11,d:8,maxBuildings:2},L:{w:14,d:10,maxBuildings:2}};function Nn(e=`M`,t=1){let n=Mn[e];return{size:e,w:n.w,d:n.d,buildings:Math.max(0,Math.min(t,n.maxBuildings)),label:`PIER ${_n+1}`,seed:Math.random()*1e9|0}}function Pn(e,t,n){if(!rn)throw Error(`buildUserDeck: generate a harbour first`);let r=e-n.w/2,i=e+n.w/2,a=t-n.d/2,o=t+n.d/2;if(!kn(r,a,i,o))return null;let s=An(r,a,i,o);if(!s)return null;let c=`user-deck-${_n++}`,l=Ct.from(`userdeck-${n.seed}`),u=new wt(rn.buckets,l.fork(`geo`)),d=[],f=[],p=[],m=Math.max(3,Math.round(n.w/3.2)),h=Math.max(3,Math.round(n.d/3.2));for(let e=0;e<m;e++)for(let t=0;t<h;t++){let i=r+1+e/(m-1)*(n.w-2)+l.range(-.1,.1),o=a+1+t/(h-1)*(n.d-2)+l.range(-.1,.1);u.cyl(`concrete`,.3,.34,4.4,10,[i,-1.2,o],{color:`#7d8380`,gradient:{y0:-1.2,y1:.6,from:.42,to:1},jitter:.05}),p.push({x:i,z:o,r:.55})}u.box(`concrete`,[n.w,.7,n.d],[e,2.5,t],{color:`#8b918d`,jitter:.03}),u.box(`concrete`,[n.w+.4,.28,n.d+.4],[e,2.92,t],{color:`#7c8280`,jitter:.03}),u.box(`wood`,[n.w-.8,.06,n.d-.8],[e,U,t],{color:`#9a7c52`,jitter:.06});let g=u.build();g.name=c,g.userData.deckId=c,yn(c,r,a,i,o,!0),W(c,g,r+.3,a+.3,i-.3,a+.3,U),W(c,g,r+.3,o-.3,i-.3,o-.3,U),W(c,g,r+.3,a+.3,r+.3,o-.3,U),W(c,g,i-.3,a+.3,i-.3,o-.3,U),Tn(c,s.bx,s.bz),Tn(s.deckId,s.ax,s.az);let _=jn(s);_.group.userData.deckId=c,g.add(_.group),d.push(..._.glows),p.push(..._.foamAnchors);let v=Fn(c,s),y=.9,b=2.6,x=r+y,S=i-y,C=a+y,w=o-y;v===`S`?w=o-y-b:v===`N`?C=a+y+b:v===`W`?x=r+y+b:S=i-y-b;let T=[],E=(e,t,n,r)=>{if(n-e<2.8||r-t<2.6)return;let i=dn(),a=Math.min(i.w,n-e-.3),o=Math.min(i.d,r-t-.3),s=fn((e+n)/2,(t+r)/2,{...i,w:a,d:o});s.group.userData.deckId=c,g.add(s.group),d.push(...s.glows),f.push(s.blocker),T.push({x:(e+n)/2,z:(t+r)/2,w:a,d:o})};if(n.buildings===1)E(x,C,S,w);else if(n.buildings>=2){if(S-x>=w-C){let e=(x+S)/2;E(x,C,e-.25,w),E(e+.25,C,S,w)}else{let e=(C+w)/2;E(x,C,S,e-.25),E(x,e+.25,S,w)}}let D=l.fork(`props`),O=v===`E`?r+1:i-1,k=v===`N`?a+1:o-1,ee=new wt(rn.buckets,D.fork(`lamp`));ee.cyl(`metal`,.06,.08,3.2,8,[O,U,k],{color:`#2c2f31`,jitter:.02}),ee.cyl(`bulb`,.12,.16,.3,8,[O,6.4,k],{emit:`#ffd9a0`,emitIntensity:4.5,color:`#ffd9a0`,jitter:0});let te=ee.build();te.userData.deckId=c,g.add(te),d.push({pos:[O,6.5,k],size:2.4,color:`#ffd9a0`,intensity:1.6});for(let e=0;e<4;e++){let t=new wt(rn.buckets,D.fork(`crate${e}`)),n=D.range(r+1,i-1),s=D.range(a+1,o-1);if(T.some(e=>n>e.x-e.w/2-.5&&n<e.x+e.w/2+.5&&s>e.z-e.d/2-.5&&s<e.z+e.d/2+.5))continue;t.box(`wood`,[.6,.6,.6],[n,U,s],{color:`#8a6f4c`,rot:[0,D.range(0,3),0],jitter:.08});let l=t.build();l.userData.deckId=c,g.add(l)}let ne=new wt(rn.buckets,D.fork(`lights`));Lt(ne,d,D,[r+.8,6.2,a+.8],[i-.8,6.2,o-.8],{wireBucket:`cable`,bulbBucket:`bulb`,palette:[`#ffe2a0`,`#ffd9a0`,`#fff2cc`],spacing:.6,glowSize:1});let re=ne.build();re.userData.deckId=c,g.add(re);let A=Ne(n.w+3,n.d+3,0,.35);return A.position.set(e,.03,t),A.userData.deckId=c,g.add(A),{id:c,group:g,glows:d,blockers:f,foamAnchors:p,surfaces:[{min:[r,a],max:[i,o],y0:3.2600000000000002},_.surface],landing:s,minX:r,minZ:a,maxX:i,maxZ:o}}function Fn(e,t){let n=pn.find(t=>t.id===e);if(!n)return`S`;let r=.6;return Math.abs(t.bz-n.maxZ)<r?`S`:Math.abs(t.bz-n.minZ)<r?`N`:Math.abs(t.bx-n.maxX)<r?`E`:`W`}function In(e){Dn(e)}function Ln(e,t){for(let n=pn.length-1;n>=0;n--){let r=pn[n];if(e>=r.minX&&e<=r.maxX&&t>=r.minZ&&t<=r.maxZ)return r.id}return null}function Rn(e){return pn.find(t=>t.id===e)??null}function zn(e){return e===`main`?`MAIN DECK`:e===`north`?`NORTH DECK`:e.replace(/-/g,` `).toUpperCase()}var Bn=`
  attribute float aH;
  attribute float aJit;
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vH;
  varying float vJit;
  void main() {
    vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vH = aH;
    vJit = aJit;
    gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  }
`,Vn=`
  uniform vec3 uRock;        // grey-blue rock, pre-tinted toward fog
  uniform vec3 uSnow;
  uniform vec3 uForest;
  uniform vec3 uFog;         // horizon / fog colour (synced from Atmosphere)
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform float uBrightness; // ~sun intensity: dims the range at dusk/night
  uniform float uFogDensity;
  uniform float uFogScale;   // <1 so the ranges survive as silhouettes
  uniform float uMaxFog;
  uniform float uHaze;       // global haze multiplier (0.75 = haze reduced 25%)
  uniform float uSnowline;   // aH where snow starts (2.0 = never)
  uniform float uTreeline;   // aH where forest gives way to rock
  uniform float uMist;       // mist-band strength
  uniform float uMistY1;
  uniform float uMistY2;
  uniform float uMistW;
  uniform float uTownGlow;   // mainland night lights
  varying vec3 vWorld;
  varying vec3 vNormal;
  varying float vH;
  varying float vJit;

  float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i), b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0)), d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec3 N = normalize(vNormal) * (gl_FrontFacing ? 1.0 : -1.0);
    float ndl = max(dot(N, normalize(uSunDir)), 0.0);

    // faceted rock, per-face jitter baked in aJit, lit simply + dimmed at night
    vec3 col = uRock * vJit * (0.42 + 0.85 * ndl) * uBrightness;
    col *= mix(vec3(1.0), uSunColor, 0.3);

    // forested base with patchy upper edge
    float g = vnoise(vWorld.xz * 0.02);
    float forest = (1.0 - smoothstep(uTreeline - 0.12, uTreeline + 0.14, vH + (g - 0.5) * 0.35)) * step(0.005, vH);
    col = mix(col, uForest * vJit * (0.5 + 0.6 * ndl) * uBrightness, forest * 0.9);

    // snow cap with a broken, noisy lower edge
    float n = vnoise(vWorld.xz * 0.03 + vWorld.y * 0.017);
    float snow = 1.0 - smoothstep(uSnowline - 0.1, uSnowline + 0.1, vH + (n - 0.5) * 0.4);
    vec3 snowCol = uSnow * (0.55 + 0.6 * ndl) * uBrightness;
    col = mix(col, snowCol, snow);

    // thin mist bands clinging to the slopes, broken up by noise
    if (uMist > 0.001) {
      float bn = vnoise(vWorld.xz * 0.012 + vec2(0.0, uMistY1 * 0.01));
      float b1 = exp(-pow((vWorld.y - uMistY1 - (bn - 0.5) * 60.0) / uMistW, 2.0));
      float b2 = exp(-pow((vWorld.y - uMistY2 - (bn - 0.5) * 60.0) / uMistW, 2.0));
      col = mix(col, uFog, clamp(max(b1, b2 * 0.7), 0.0, 1.0) * uMist);
    }

    // faint town speckle low on the mainland mass, mainly at night
    if (uTownGlow > 0.001 && vH < 0.3) {
      vec2 cell = floor(vWorld.xz * 0.06);
      float lit = step(0.7, hash(cell)) * smoothstep(0.3, 0.04, vH);
      col = mix(col, vec3(1.0, 0.7, 0.4), lit * uTownGlow * 0.6);
    }

    // aerial perspective: wash toward the sky, crests dissolve a little more
    float dist = length(cameraPosition - vWorld);
    float f = 1.0 - exp(-pow(dist * uFogDensity * uFogScale, 2.0));
    f = clamp(f + vH * 0.12 * (1.0 - f), 0.0, uMaxFog);
    col = mix(col, uFog, clamp(f, 0.0, 1.0) * uHaze);
    gl_FragColor = vec4(col, 1.0);
  }
`;function Hn(e){let n=Ct.from(e.seed),r=[];for(let i=0;i<e.peaks;i++){let a=e.peaks===1?.5:i/(e.peaks-1),o=e.a0+(e.a1-e.a0)*a+(n.next()-.5)*.06,s=e.radius+(n.next()-.5)*2*e.radiusWobble,c=e.height[0]+n.next()*(e.height[1]-e.height[0]),l=e.baseR[0]+n.next()*(e.baseR[1]-e.baseR[0]),u=7+Math.floor(n.next()*3),d=new ue(l,c,u,3);d.translate(0,c/2,0);let f=n.next()*Math.PI*2,p=n.next()*Math.PI*2,m=n.next()*Math.PI*2,h=3+Math.floor(n.next()*2),g=5+Math.floor(n.next()*3),_=(n.next()-.5)*l*.5,v=n.next()*Math.PI*2,y=d.getAttribute(`position`),b=new Float32Array(y.count);for(let n=0;n<y.count;n++){let r=t.clamp(y.getY(n)/c,0,1),i=Math.atan2(y.getX(n),y.getZ(n)),a=.5*Math.sin(i*h+f)+.3*Math.sin(i*g+p)+.2*Math.sin(r*7+m),o=1+e.crag*a*(1-r*.55);y.setX(n,y.getX(n)*o+Math.cos(v)*_*r*r),y.setZ(n,y.getZ(n)*o+Math.sin(v)*_*r*r),b[n]=r}if(d.setAttribute(`aH`,new me(b,1)),d.rotateY(n.next()*Math.PI*2),d.translate(Math.sin(o)*s,e.skirtY,Math.cos(o)*s),r.push(d),i<e.peaks-1&&n.chance(.8)){let a=e.a0+(e.a1-e.a0)*((i+.5)/(e.peaks-1)),o=e.radius+(n.next()-.5)*2*e.radiusWobble,s=c*(.3+n.next()*.25),u=new ue(l*(.9+n.next()*.5),s,7,1);u.translate(0,s/2,0);let d=u.getAttribute(`position`),f=new Float32Array(d.count);for(let e=0;e<d.count;e++)f[e]=t.clamp(d.getY(e)/s,0,1);u.setAttribute(`aH`,new me(f,1)),u.translate(Math.sin(a)*o,e.skirtY,Math.cos(a)*o),r.push(u)}}let i=Ce(r,!1);r.forEach(e=>e.dispose());let a=i.index?i.toNonIndexed():i;a!==i&&i.dispose();let o=Ct.from(`${e.seed}#jit`),s=a.getAttribute(`position`).count,c=new Float32Array(s);for(let e=0;e<s;e+=3){let t=.88+o.next()*.24;c[e]=c[e+1]=c[e+2]=t}return a.setAttribute(`aJit`,new me(c,1)),a.computeVertexNormals(),a}function Un(e){let t=Ct.from(e.seed),n=e.segments??120,r=e.skirtY??-10,i=2+Math.floor(t.next()*3),a=5+Math.floor(t.next()*4),o=t.next()*Math.PI*2,s=t.next()*Math.PI*2,c=[],l=[],u=[];if(e.plateaus)for(let n=0;n<e.plateaus.count;n++)c.push(t.next()),l.push(e.plateaus.min+t.next()*(e.plateaus.max-e.plateaus.min)),u.push(.015+t.next()*.03);let d=[],f=[],p=[];for(let m=0;m<=n;m++){let h=m/n,g=e.a0+(e.a1-e.a0)*h,_=e.baseH+e.amp*(.65*Math.sin(h*Math.PI*2*i+o)+.35*Math.sin(h*Math.PI*2*a+s));_=Math.max(_,e.baseH*.5);for(let e=0;e<c.length;e++){let t=Math.abs(h-c[e])/u[e];t<1&&(_+=l[e]*(.5+.5*Math.cos(t*Math.PI)))}let v=e.radius+e.radiusWobble*Math.sin(h*Math.PI*4+1)+(t.next()-.5)*20,y=Math.sin(g)*v,b=Math.cos(g)*v;if(d.push(y,r,b,y,_,b),f.push(0,1),m<n){let e=m*2;p.push(e,e+1,e+2,e+1,e+3,e+2)}}let m=new te;m.setAttribute(`position`,new ye(d,3)),m.setAttribute(`aH`,new ye(f,1));let h=n*2+2,g=new Float32Array(h).fill(1);return m.setAttribute(`aJit`,new me(g,1)),m.setIndex(p),m.computeVertexNormals(),m}function Wn(e){return new A({uniforms:{uRock:{value:new j(`#8aa0a8`)},uSnow:{value:new j(`#f2f5f2`)},uForest:{value:new j(`#4d6b48`)},uFog:{value:new j(`#c9e4e0`)},uSunDir:{value:new o(.2,.66,.72)},uSunColor:{value:new j(`#fff0d8`)},uBrightness:{value:1},uFogDensity:{value:.0028},uFogScale:{value:e.fogScale},uMaxFog:{value:e.maxFog},uHaze:{value:.75},uSnowline:{value:e.snowline},uTreeline:{value:e.treeline},uMist:{value:e.mist},uMistY1:{value:e.mistY1},uMistY2:{value:e.mistY2},uMistW:{value:e.mistW},uTownGlow:{value:0}},vertexShader:Bn,fragmentShader:Vn,side:2,depthWrite:!0,fog:!1})}var Gn=class{group=new i;mats=[];constructor(e=7){this.group.name=`distant-background`;let n=Math.PI*2,r=Math.PI,i=t.degToRad(50),a=r-i,o=r+i,s=t.degToRad(8),l=(e,t,n,r)=>{let i=Wn(t),a=new c(e,i);return a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1,a.renderOrder=-10,this.group.add(a),this.mats.push({mat:i,rockTint:new j(n),rockAmt:r}),a};l(Hn({seed:`far-a#${e}`,a0:o+s,a1:a-s+n,radius:1520,radiusWobble:130,peaks:9,height:[300,460],baseR:[200,330],crag:.22,skirtY:-12}),{fogScale:.34,maxFog:.85,snowline:.42,treeline:.3,mist:.55,mistY1:95,mistY2:210,mistW:34},`#7d94a8`,.55),l(Hn({seed:`mid-a#${e}`,a0:o+s*.5,a1:a-s*.5+n,radius:1150,radiusWobble:100,peaks:8,height:[120,220],baseR:[170,280],crag:.16,skirtY:-12}),{fogScale:.38,maxFog:.72,snowline:.82,treeline:.48,mist:.4,mistY1:55,mistY2:120,mistW:26},`#6d8a80`,.6),l(Hn({seed:`far-main#${e}`,a0:a-s*.5,a1:o+s*.5,radius:1720,radiusWobble:90,peaks:4,height:[200,320],baseR:[220,320],crag:.2,skirtY:-12}),{fogScale:.32,maxFog:.88,snowline:.5,treeline:.32,mist:.5,mistY1:80,mistY2:170,mistW:30},`#7d94a8`,.5),l(Un({radius:1350,radiusWobble:50,a0:a,a1:o,seed:`mainland#${e}`,baseH:34,amp:12,plateaus:{count:16,min:5,max:15},segments:120}),{fogScale:.36,maxFog:.78,snowline:2,treeline:.55,mist:.25,mistY1:30,mistY2:60,mistW:18,town:!0},`#74888a`,.55)}sync(e,t,n,r,i,a){for(let{mat:o,rockTint:s,rockAmt:c}of this.mats){let l=o.uniforms;l.uFog.value.copy(e),l.uRock.value.copy(e).lerp(s,c),l.uSnow.value.set(`#f2f5f2`).lerp(e,.25),l.uForest.value.set(`#4d6b48`).lerp(e,.45),l.uSunDir.value.copy(r),l.uSunColor.value.copy(i),l.uBrightness.value=a,l.uFogDensity.value=t,l.uTownGlow.value=n}}},Kn=document.getElementById(`scene`),qn=Te(Kn),G=new ge,K=new C(20,innerWidth/innerHeight,2,3500);K.position.set(80,70,110);var Jn=dt(),Yn=new Ee(G),Xn=new M(`#bfe3e0`,`#7d8a80`,1);G.add(Xn);var Zn=new ke(qn,G),Qn=new Gn(7);G.add(Qn.group);var $n=new Me(0,4e3,{scale:.6,samples:4});G.add($n.mesh);var er=new ot(qn,G,K);er.excludeFromGBuffer(Zn.mesh,$n.mesh);var tr=new yt(K,Kn),q=new i;G.add(q);var J=null,nr=null,rr=null,ir=[],ar=null,or=[],sr=[],cr=[],lr=null,ur=`orbit`,dr=new Set,fr=.6,pr=0,mr=0,hr=new ut({renderer:qn,sun:Yn,hemi:Xn,atmosphere:Zn,water:$n,post:er,shared:Jn,glow:{value:1},rain:{value:0}},`day`);function gr(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,30);return n.addColorStop(0,`rgba(220,220,220,0.55)`),n.addColorStop(1,`rgba(220,220,220,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),new N(e)}var _r=gr(),vr=ht();function yr(){let e=[],t=(t,n)=>{let r=t.index?t.toNonIndexed():t,i=r.getAttribute(`position`).count,a=new Float32Array(i*3),o=new j(n);for(let e=0;e<i;e++)a[e*3]=o.r,a[e*3+1]=o.g,a[e*3+2]=o.b;return r.setAttribute(`color`,new me(a,3)),e.push(r),r},n=new fe(.12,.75,.12);n.translate(-.1,.375,0);let r=new fe(.12,.75,.12);r.translate(.1,.375,0);let i=new fe(.4,.55,.22);i.translate(0,1.02,0);let a=new oe(.11,8,8);a.translate(0,1.45,0),t(n,`#2c2c30`),t(r,`#2c2c30`),t(i,`#ffffff`),t(a,`#d9a583`);let o=Ce(e,!1),c=new s({vertexColors:!0,roughness:.9}),l=[`#c96f4a`,`#7fa3a0`,`#d9c26a`,`#8a4f3a`,`#5d6e5a`,`#b8452e`,`#e8e2d2`,`#4d6b72`],d=new u(o,c,8);d.castShadow=!0;let f=new b;or=[];for(let e=0;e<8;e++)f.makeTranslation(e*1.2-4,3.26,4.2-e%3),d.setMatrixAt(e,f),d.setColorAt(e,new j(l[e%l.length])),or.push({t:Math.random(),speed:.02+Math.random()*.02,offset:Math.random()*6});return d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0),d}function br(){q.traverse(e=>{let t=e;(t.isMesh||e.isInstancedMesh)&&t.geometry?.dispose?.()}),q.clear(),ir=[],sr=[],cr=[]}function xr(e){br(),Er=[],kr=[],Ar=1,jr=null,Ir=null,Lr=null,$&&($.visible=!1),ei(null),Q&&(Q.visible=!1),X=Y===`add`?Nn(Dr,Or):null,J=nn(e,Jn),q.add(J.staticGroup);for(let e of J.boatData)q.add(e.g);q.add(J.birds),nr=new pt(J.glows,Jn.uTime),hr.tg.glow=nr.uGlow,q.add(nr.mesh),rr=new mt(new o(0,10,0),new o(50,24,50),1500,Jn.uTime),hr.tg.rain=rr.uRain,q.add(rr.mesh);for(let e of J.foamAnchors){let t=gt(e.r,0,vr,e.x,e.z);ir.push(t),q.add(t)}q.add(Ne(22,17,0,.4));let t=[[`#ffb060`,14,14],[`#ffc27a`,11,12],[`#ffd9a0`,10,12],[`#ff8a5a`,8,10],[`#d8ff9a`,6,9],[`#7ad4ff`,5,8]];J.heroSpots.slice(0,6).forEach((e,n)=>{let[r,i,a]=t[n%t.length],o=new p(r,i,a,2);o.position.copy(e),q.add(o),cr.push(o),hr.registerHeroLight(o)}),ar=yr(),q.add(ar);for(let e of J.smokeSources)for(let t=0;t<8;t++){let t=new ve({map:_r,transparent:!0,opacity:.25,depthWrite:!1}),n=new E(t);n.position.copy(e),n.userData.src=e.clone(),q.add(n),sr.push({s:n,seed:Math.random()*10})}Yn.fitToBounds(J.bounds),tr.panBounds=J.bounds.clone().expandByScalar(8),Cr(),lr?lr.setNav(J.nav):(lr=new xt(K,Kn,J.nav),lr.enabled=!1),wr(0,!0),li(),document.getElementById(`hud-loader`).style.display=`none`}var Sr=0;function Cr(){let e=document.getElementById(`hud-views`);e.innerHTML=``,J.views.forEach((t,n)=>{let r=document.createElement(`button`);r.textContent=`${n+1} ${t.name}`,n===Sr&&r.classList.add(`on`),r.onclick=()=>wr(n),e.appendChild(r)})}function wr(e,t=!1){if(!J)return;Sr=e;let n=J.views[e];tr.setView(n,t),document.getElementById(`view-name`).textContent=n.name,document.getElementById(`view-desc`).textContent=J.viewDesc[e],document.querySelector(`.crumb`).textContent=`— 0${e+1} / 0${J.views.length} VIEWS`,[...document.getElementById(`hud-views`).children].forEach((t,n)=>t.classList.toggle(`on`,n===e))}document.querySelectorAll(`#seg-tod button`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`#seg-tod button`).forEach(e=>e.classList.remove(`on`)),e.classList.add(`on`),hr.set(e.getAttribute(`data-tod`))})}),document.querySelectorAll(`#seg-mode button`).forEach(e=>{e.addEventListener(`click`,()=>Tr(e.getAttribute(`data-mode`)))});function Tr(e){ur=e,e!==`orbit`&&$r(null),document.querySelectorAll(`#seg-mode button`).forEach(t=>t.classList.toggle(`on`,t.getAttribute(`data-mode`)===e));let t=e===`orbit`;tr.enabled=t,lr&&(lr.enabled=!t),t?(K.fov=20,K.near=2,K.far=3500,K.updateProjectionMatrix(),J&&wr(Sr)):(K.fov=e===`walk`?65:55,K.near=.1,K.far=2600,K.updateProjectionMatrix())}document.getElementById(`btn-drift`).onclick=e=>{tr.drift=!tr.drift,e.target.classList.toggle(`on`,tr.drift)},document.getElementById(`btn-ref`).onclick=()=>{Tr(`orbit`),wr(0)},document.getElementById(`btn-frame`).onclick=()=>J&&tr.frame(J.bounds,.68),document.getElementById(`btn-controls`).onclick=()=>document.getElementById(`hud-help`).classList.toggle(`hidden`),document.getElementById(`btn-regen`).onclick=()=>{let e=Number(document.getElementById(`seed`).value);document.getElementById(`hud-loader`).style.display=`flex`,setTimeout(()=>xr(e),30)},document.getElementById(`seed`).onchange=e=>{let t=Number(e.target.value);document.getElementById(`hud-loader`).style.display=`flex`,setTimeout(()=>xr(t),30)},window.addEventListener(`keydown`,e=>{dr.add(e.code)}),window.addEventListener(`keyup`,e=>{dr.delete(e.code)});var Y=null,Er=[],X=null,Dr=`M`,Or=1,kr=[],Ar=1,jr=null,Mr=null,Z=null,Nr=!1,Pr=null,Fr=new o,Q=null,Ir=null,Lr=null,$=null,Rr=new O,zr=new v,Br=!1,Vr=0,Hr=0,Ur=U+.06,Wr=new S(new o(0,1,0),0),Gr=new o;function Kr(){return J?J.glows.concat(Er.flatMap(e=>e.glows),kr.flatMap(e=>e.glows)):[]}function qr(){J&&(nr&&(q.remove(nr.mesh),nr.mesh.geometry.dispose(),nr.mesh.material.dispose()),nr=new pt(Kr(),Jn.uTime),hr.tg.glow=nr.uGlow,q.add(nr.mesh))}function Jr(){Mr||(Mr=new c(new fe(1,1,1),new y({transparent:!0,opacity:.3,depthWrite:!1})),Mr.visible=!1,G.add(Mr)),Z||(Z=new c(new fe(1,1,1),new y({transparent:!0,opacity:.3,depthWrite:!1})),Z.visible=!1,G.add(Z))}function Yr(){Mr&&(Mr.visible=!1),Z&&(Z.visible=!1),Nr=!1,Pr=null}function Xr(e,t){if(!J||!X)return{fits:!1,landing:null};let n=X.w,r=X.d,i=kn(e-n/2,t-r/2,e+n/2,t+r/2);return{fits:i,landing:i?An(e-n/2,t-r/2,e+n/2,t+r/2):null}}function Zr(){if(!X)return`Add a deck`;let e=X.buildings===0?`open platform`:`${X.buildings} shop${X.buildings>1?`s`:``}`;return`Next: ${X.label} — ${X.w.toFixed(0)}×${X.d.toFixed(0)}m, ${e} (click open water to place, Esc to done)`}function Qr(){Dr===`S`&&Or>1&&(Or=1),X=Nn(Dr,Or),document.querySelectorAll(`#seg-decksize button`).forEach(e=>e.classList.toggle(`on`,e.getAttribute(`data-s`)===Dr)),document.querySelectorAll(`#seg-deckbldg button`).forEach(e=>{let t=Number(e.getAttribute(`data-b`));e.classList.toggle(`on`,t===Or),e.disabled=Dr===`S`&&t>1}),document.getElementById(`btn-add-deck`).title=Zr()}function $r(e){Y=e,e===`add`?Qr():X=null,e!==`bridge`&&(jr=null,ei(null)),$&&($.visible=!1),document.getElementById(`hud-deck`).classList.toggle(`hidden`,e!==`add`),document.getElementById(`btn-add-deck`).classList.toggle(`on`,e===`add`),document.getElementById(`btn-bridge`).classList.toggle(`on`,e===`bridge`),document.getElementById(`btn-del-deck`).classList.toggle(`on`,e===`remove`),Kn.style.cursor=e===`add`?`crosshair`:e===null?``:`pointer`,e===`add`?(Jr(),document.getElementById(`btn-add-deck`).title=Zr()):Yr(),e===`bridge`&&ei(`Bridge: click a first deck…`),Q&&(Q.visible=!1),Ir=null,Lr=null}function ei(e){let t=document.getElementById(`hud-hint`);e?(t.textContent=e,t.classList.remove(`hidden`)):t.classList.add(`hidden`)}function ti(e,t){if(!J)return{ok:!1,msg:``};if(e===t)return{ok:!1,msg:`Same deck — click a different one.`};let n=Rn(e),r=Rn(t);if(!n||!r)return{ok:!1,msg:``};let i=An(r.minX,r.minZ,r.maxX,r.maxZ,e);if(!i)return{ok:!1,msg:`No facing edge in range — decks must share an edge direction within 14 m.`};Tn(e,i.ax,i.az),Tn(t,i.bx,i.bz);let a=jn(i),o=Ar++;a.group.userData.bridgeId=o,q.add(a.group),J.nav.surfaces.push(a.surface);let s=[];for(let e of a.foamAnchors){let t=gt(e.r,0,vr,e.x,e.z);s.push(t),ir.push(t),q.add(t)}return kr.push({id:o,group:a.group,glows:a.glows,foam:s,surface:a.surface,aDeck:e,ax:i.ax,az:i.az,bDeck:t,bx:i.bx,bz:i.bz}),qr(),{ok:!0,msg:`Linked ${zn(e)} ↔ ${zn(t)}.`}}function ni(e,t){if(!J)return;let n=kr.findIndex(t=>t.id===e);if(n<0)return;let[r]=kr.splice(n,1);q.remove(r.group),ri(r.group);for(let e of r.foam){q.remove(e);let t=ir.indexOf(e);t>=0&&ir.splice(t,1),e.geometry.dispose()}let i=J.nav.surfaces.indexOf(r.surface);i>=0&&J.nav.surfaces.splice(i,1),t!==r.aDeck&&En(r.aDeck,r.ax,r.az),t!==r.bDeck&&En(r.bDeck,r.bx,r.bz),qr()}function ri(e){e.traverse(e=>{let t=e;t.isMesh&&t.geometry?.dispose?.()})}function ii(e){if(!J||!X)return;let t=X,n=Pn(e.x,e.z,t);if(!n)return;q.add(n.group);for(let e of n.blockers)J.nav.blockers.push(e);for(let e of n.surfaces)J.nav.surfaces.push(e);let r=[];for(let e of n.foamAnchors){let t=gt(e.r,0,vr,e.x,e.z);r.push(t),ir.push(t),q.add(t)}let i=J.nav.spawn;i.x>n.minX&&i.x<n.maxX&&i.z>n.minZ&&i.z<n.maxZ&&i.set(-1,Ur,5.2),Er.push({id:n.id,group:n.group,glows:n.glows,blockers:n.blockers,surfaces:n.surfaces,foam:r,landing:n.landing,minX:n.minX,minZ:n.minZ,maxX:n.maxX,maxZ:n.maxZ}),qr(),Qr()}function ai(e){if(!J)return;let t=Er.findIndex(t=>t.id===e);if(t<0)return;let[n]=Er.splice(t,1);q.remove(n.group),ri(n.group);for(let e of n.foam){q.remove(e);let t=ir.indexOf(e);t>=0&&ir.splice(t,1),e.geometry.dispose()}for(let e of n.blockers){let t=J.nav.blockers.indexOf(e);t>=0&&J.nav.blockers.splice(t,1)}for(let e of n.surfaces){let t=J.nav.surfaces.indexOf(e);t>=0&&J.nav.surfaces.splice(t,1)}En(n.landing.deckId,n.landing.ax,n.landing.az);for(let e of kr.filter(e=>e.aDeck===n.id||e.bDeck===n.id))ni(e.id,n.id);In(n.id),Q&&(Q.visible=!1),Ir=null,Lr=null,qr()}function oi(e){zr.set(e.clientX/innerWidth*2-1,-(e.clientY/innerHeight)*2+1)}function si(e,t,n){let r=e===`hover`?Q:$;if(r&&=(G.remove(r),r.dispose(),null),t){let e=Rn(t);e&&(r=new D(new se(new o(e.minX,Ur-1,e.minZ),new o(e.maxX,Ur+9,e.maxZ)),n),G.add(r))}e===`hover`?Q=r:$=r}function ci(){if(Jr(),!J||ur!==`orbit`||!Y||!Br){Yr(),Q&&(Q.visible=!1),$&&($.visible=!1),Ir=null,Lr=null,Y?Kn.style.cursor=Y===`add`?`crosshair`:`pointer`:Kn.style.cursor=``;return}if(Rr.setFromCamera(zr,K),Y===`bridge`){Yr();let e=Rr.ray.intersectPlane(Wr,Gr),t=e?Ln(e.x,e.z):null;Ir=t,si(`hover`,t,16777215);let n=null;if(jr&&t&&t!==jr){let e=Rn(t);e&&(n=An(e.minX,e.minZ,e.maxX,e.maxZ,jr))}if(n&&Z){let e=Math.hypot(n.bx-n.ax,n.bz-n.az);Z.visible=!0,Z.scale.set(Math.abs(n.bx-n.ax)>.01?e:2.2,.15,Math.abs(n.bx-n.ax)>.01?2.2:e),Z.position.set((n.ax+n.bx)/2,Ur,(n.az+n.bz)/2),Z.material.color.set(`#7dff9a`)}else Z&&(Z.visible=!1);Kn.style.cursor=`pointer`;return}if(Y===`add`&&X){Q&&(Q.visible=!1),Ir=null;let e=Rr.ray.intersectPlane(Wr,Gr);if(e&&Mr&&Z){let{fits:t,landing:n}=Xr(e.x,e.z);Nr=t&&n!==null,Pr=n,Fr.set(e.x,0,e.z);let r=X.w,i=X.d;if(Mr.visible=!0,Mr.scale.set(r,.7,i),Mr.position.set(e.x,Ur-.35,e.z),Mr.material.color.set(Nr?`#7dff9a`:`#ff5a4a`),n){let e=Math.hypot(n.bx-n.ax,n.bz-n.az);Z.visible=!0,Z.scale.set(Math.abs(n.bx-n.ax)>.01?e:2.2,.15,Math.abs(n.bx-n.ax)>.01?2.2:e),Z.position.set((n.ax+n.bx)/2,Ur,(n.az+n.bz)/2),Z.material.color.set(Nr?`#7dff9a`:`#ff5a4a`)}else Z.visible=!1;Kn.style.cursor=`crosshair`}else Yr()}else if(Y===`remove`){Yr();let e=Rr.intersectObjects([...Er.map(e=>e.group),...kr.map(e=>e.group)],!0),t=null,n=null;if(e.length>0){let r=e[0].object;for(;r&&r.userData.deckId===void 0&&r.userData.bridgeId===void 0;)r=r.parent;let i=r?.userData.bridgeId;i!==void 0&&kr.some(e=>e.id===i)?n=i:(t=r?.userData.deckId??null,t&&!Er.some(e=>e.id===t)&&(t=null))}if(Ir=t,Lr=n,Q&&=(G.remove(Q),Q.dispose(),null),n!==null){let e=kr.find(e=>e.id===n);if(e){let t=new o((e.ax+e.bx)/2,Ur,(e.az+e.bz)/2);Q=new D(new se(t.clone().add(new o(-2.4,-1,-2.4)),t.clone().add(new o(2.4,3.4,2.4))),16729156),G.add(Q)}}else if(t!==null){let e=Er.find(e=>e.id===t);e&&(Q=new D(new se(new o(e.minX,Ur-1,e.minZ),new o(e.maxX,Ur+9,e.maxZ)),16729156),G.add(Q))}Kn.style.cursor=`pointer`}}document.getElementById(`btn-add-deck`).onclick=()=>{ur!==`orbit`&&Tr(`orbit`),$r(Y===`add`?null:`add`)},document.getElementById(`btn-bridge`).onclick=()=>{ur!==`orbit`&&Tr(`orbit`),$r(Y===`bridge`?null:`bridge`)},document.getElementById(`btn-del-deck`).onclick=()=>{ur!==`orbit`&&Tr(`orbit`),$r(Y===`remove`?null:`remove`)},document.querySelectorAll(`#seg-decksize button`).forEach(e=>{e.addEventListener(`click`,()=>{Dr=e.getAttribute(`data-s`),Qr()})}),document.querySelectorAll(`#seg-deckbldg button`).forEach(e=>{e.addEventListener(`click`,()=>{e.disabled||(Or=Number(e.getAttribute(`data-b`)),Qr())})}),Kn.addEventListener(`pointerdown`,e=>{Vr=e.clientX,Hr=e.clientY}),Kn.addEventListener(`pointerup`,e=>{if(Y&&ur===`orbit`&&!(e.button!==0||e.shiftKey)&&!(Math.hypot(e.clientX-Vr,e.clientY-Hr)>6)){if(oi(e),Br=!0,Y===`add`)ci(),Nr&&Pr&&ii(Fr);else if(Y===`bridge`){ci();let e=Rr.ray.intersectPlane(Wr,Gr),t=e?Ln(e.x,e.z):null;t?jr===null?(jr=t,si(`source`,t,15254122),ei(`${zn(t)} selected — now click a second deck.`)):t===jr?(jr=null,$&&($.visible=!1),ei(`Bridge: click a first deck…`)):(ei(ti(jr,t).msg),jr=null,$&&($.visible=!1)):(jr=null,$&&($.visible=!1),ei(`Bridge: click a first deck…`))}else Y===`remove`&&(Lr===null?Ir!==null&&ai(Ir):ni(Lr))}}),Kn.addEventListener(`pointermove`,e=>{oi(e),Br=!0}),Kn.addEventListener(`pointerleave`,()=>{Br=!1}),window.addEventListener(`keydown`,e=>{e.code===`Escape`&&$r(null)});function li(){let e=innerWidth,t=innerHeight,n=Math.min(devicePixelRatio,2);er.setSize(e,t,n),$n.resize(e*n,t*n),K.aspect=e/t,K.updateProjectionMatrix()}window.addEventListener(`resize`,li);var ui=new re,di=new b,fi=new o,pi=new B,mi=new o(1,1,1),hi=new o(.2,.66,.72),gi=new j(`#fff0d8`);function _i(){requestAnimationFrame(_i);let e=Math.min(ui.getDelta(),.05),n=ui.elapsedTime;Jn.uTime.value=n,hr.update(e),Zn.follow(K);let r=hr.current.atmosphere;if(hi.set(...r.sunDir).normalize(),gi.set(r.sunColor),Qn.sync(Zn.fogColor,G.fog.density,hr.current.lit,hi,gi,t.clamp(hr.current.sunIntensity/2.4,.1,1)),J){for(let r of J.boatData)if(r.path&&(ur!==`boat`||r!==J.boatData[2])){r.t=(r.t+e*r.speed)%1;let t=r.path.getPointAt(r.t),i=r.path.getTangentAt(r.t);r.g.position.set(t.x,mr+Math.sin(n*1.1+r.phase)*.05,t.z),r.g.rotation.y=Math.atan2(i.x,i.z),r.g.rotation.z=Math.sin(n*.9+r.phase)*.025}else if(ur===`boat`&&r===J.boatData[2]){let i=+!!dr.has(`KeyW`)-!!dr.has(`KeyS`),a=+!!dr.has(`KeyA`)-!!dr.has(`KeyD`);fr+=a*e*.9,pr=t.clamp(pr+i*e*3,-1.5,3.5),pr*=1-e*.4,r.g.position.x+=Math.sin(fr)*pr*e,r.g.position.z+=Math.cos(fr)*pr*e,r.g.position.y=mr+Math.sin(n*1.1)*.05,r.g.rotation.y=fr;let s=new o(Math.sin(fr),0,Math.cos(fr)).multiplyScalar(-8);K.position.lerp(new o(r.g.position.x+s.x,6.5,r.g.position.z+s.z),1-Math.exp(-4*e)),K.lookAt(r.g.position.x,1.5,r.g.position.z)}else r.g.position.y=mr+Math.sin(n*1.1+r.phase)*.04,r.g.rotation.z=Math.sin(n*.9+r.phase)*.025,r.g.rotation.x=Math.sin(n*1.3+r.phase)*.015;for(let e of J.birdData){let t=n*e.speed+e.phase;e.pivot.position.set(Math.cos(t)*e.r,e.h+Math.sin(n*.5+e.phase)*1.5,Math.sin(t)*e.r),e.pivot.rotation.y=-t;let r=Math.sin(n*10+e.phase)*.6;e.wingL.rotation.x=r,e.wingR.rotation.x=-r}if(ir.forEach((e,t)=>{let r=1+Math.sin(n*.8+t)*.06;e.scale.set(r,r,1),e.material.opacity=.35+Math.sin(n*.9+t*2)*.08}),$n.update(n),ar&&ur===`orbit`){for(let t=0;t<8;t++){let r=or[t];r.t=(r.t+e*r.speed)%1;let i=r.t*Math.PI*2,a=Math.cos(i+r.offset)*6.4,o=2.2+Math.sin(i*1.3+r.offset)*3.4;fi.set(a,3.26+Math.abs(Math.sin(n*8+t))*.03,o),pi.setFromEuler(new h(0,i,0)),di.compose(fi,pi,mi),ar.setMatrixAt(t,di)}ar.instanceMatrix.needsUpdate=!0}for(let{s:e,seed:t}of sr){let r=(n*.25+t)%1,i=e.userData.src;e.position.set(i.x+Math.sin((r*6+t)*2)*.4,i.y+r*5,i.z+r*1.2);let a=.8+r*2.4;e.scale.set(a,a,1),e.material.opacity=.28*(1-r)}}ur===`orbit`?tr.update(e):ur===`walk`&&lr&&lr.update(e),ci(),er.render(n)}xr(1),_i();