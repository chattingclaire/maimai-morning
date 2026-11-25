const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bed-Ig-MIe2I.js","./audio-BRieI7eG.js","./clutter-DHevLKD7.js","./decor-By-ybW0o.js","./desk-C641Usrq.js","./exterior-CX6r3nJg.js","./fixtures-Ba2ujtkr.js","./plants-CLtTb6T_.js"])))=>i.map(i=>d[i]);
import{$ as e,$t as t,A as n,At as r,B as i,C as a,Ct as o,D as s,Dt as c,E as l,Et as u,F as d,Ft as f,G as p,I as m,Jt as h,K as g,Kt as _,Lt as v,M as y,N as b,Nt as x,O as S,Ot as C,P as w,Pt as T,Q as E,Qt as D,R as ee,Rt as te,St as O,T as ne,Tt as k,U as re,Ut as ie,V as ae,Vt as oe,W as se,Wt as ce,X as le,Xt as ue,Y as de,Yt as fe,Z as pe,_ as me,_n as A,_t as he,a as ge,b as _e,bt as j,c as ve,ct as ye,d as be,et as xe,f as Se,fn as Ce,g as we,gn as M,gt as Te,h as Ee,hn as N,ht as De,i as Oe,it as ke,jt as Ae,k as je,l as Me,lt as Ne,m as Pe,mn as Fe,mt as Ie,n as Le,nn as Re,nt as ze,o as Be,ot as P,p as Ve,pt as He,r as Ue,rn as We,rt as Ge,s as Ke,sn as qe,st as Je,t as Ye,tn as Xe,un as Ze,ut as Qe,v as $e,vn as et,w as tt,wt as nt,x as rt,xt as it,y as at,yn as ot,z as st,zt as ct}from"./audio-BRieI7eG.js";var lt=new m,ut=new Re,dt=new M,ft=new WeakMap;function pt(e){let t=[];if(e.traverse(e=>{e.isSunLight===!0&&e.visible===!0&&e.castShadow===!0&&t.push(e)}),t.length===0)return null;lt.makeEmpty(),e.traverse(e=>{e.isMesh===!0&&e.castShadow===!0&&lt.expandByObject(e)}),lt.getBoundingSphere(ut);let n=ut.center,r=Math.max(ut.radius,1),i=[];for(let a of t){let t=ft.get(a);t===void 0&&(t=new Ge,t.castShadow=!0,ft.set(a,t)),t.color.copy(a.color),t.intensity=a.intensity,t.shadow.mapSize.copy(a.shadow.mapSize);let o=t.shadow.camera;o.left=-r,o.right=r,o.top=r,o.bottom=-r,o.near=r*.5,o.far=r*3.5,o.updateProjectionMatrix(),dt.setFromMatrixPosition(a.matrixWorld).normalize(),t.target.position.copy(n),t.position.copy(n).addScaledVector(dt,r*2),e.add(t,t.target),t.target.updateMatrixWorld(),t.updateMatrixWorld(),a.visible=!1,i.push({sunLight:a,bakeLight:t})}return i}function mt(e,t){for(let{sunLight:n,bakeLight:r}of t)e.remove(r,r.target),n.visible=!0}var ht=null,gt=null,_t=null,vt=null,yt=0,bt=null,xt=null,St=null,Ct=0,wt=0,Tt=0,Et=null,Dt=0,Ot=new M,kt=new M,At=new m,jt=null,Mt=1,Nt=class extends he{constructor(e=1,t=1,n=1,r,i,a){super(16777215,1),this.isLightProbeGrid=!0,this.type=`LightProbeGridWebGL`,this.width=e,this.height=t,this.depth=n,this.resolution=new M(r===void 0?Math.max(1,Math.round(e)):r,i===void 0?Math.max(1,Math.round(t)):i,a===void 0?Math.max(1,Math.round(n)):a),this.boundingBox=new m,this.priority=0,this.texture=null,this._renderTarget=null,this._bounceTarget=null,this._bouncePass=-1,this.updateBoundingBox()}getProbePosition(e,t,n,r){let i=this.position,a=this.resolution,o=this.width,s=this.height,c=this.depth;return r.set(i.x-o/2+(e+.5)*o/a.x,i.y-s/2+(t+.5)*s/a.y,i.z-c/2+(n+.5)*c/a.z),r}updateBoundingBox(){kt.set(this.width,this.height,this.depth),this.boundingBox.setFromCenterAndSize(this.position,kt)}bake(e,t,n={}){let r=this.resolution,i=r.x*r.y*r.z,{bounces:a=0,start:o=0,count:s=i-o,pass:c=0}=n,l=o+s;if(!Number.isInteger(o)||!Number.isInteger(s)||o<0||s<0||l>i)throw RangeError(`THREE.LightProbeGridWebGL: Invalid probe range.`);if(!Number.isInteger(c)||c<0||!Number.isInteger(a)||a<0)throw RangeError(`THREE.LightProbeGridWebGL: Pass and bounce counts must be non-negative integers.`);if(a>0&&s!==i)throw RangeError(`THREE.LightProbeGridWebGL: For ranged baking, use pass instead of bounces.`);if(s===0)return;if(c>0&&o>0&&this._bouncePass!==c)throw Error(`THREE.LightProbeGridWebGL: Start each indirect pass at probe 0.`);this._ensureTextures(),this.updateBoundingBox(),Lt(n),Rt(i),It();let u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.autoClear,m=e.xr.enabled,h=e.shadowMap.autoUpdate,g=t.matrixWorldAutoUpdate,_=this.visible,v=this.texture,y=this._renderTarget,b=y.viewport.clone(),x=null;try{this.visible=!0,g===!0&&(t.updateMatrixWorld(!0),t.matrixWorldAutoUpdate=!1),x=pt(t),e.shadowMap.autoUpdate=!1,e.shadowMap.needsUpdate=!0;for(let n=c;n<=c+a;n++)this._updateBakeTexture(e,n,o),this._captureProbes(e,t,o,l),this._repackProbes(e,o,l)}finally{y.viewport.copy(b),e.setRenderTarget(u,d,f),e.autoClear=p,e.xr.enabled=m,e.shadowMap.autoUpdate=h,x!==null&&mt(t,x),t.matrixWorldAutoUpdate=g,this.visible=_,this.texture=v}}_updateBakeTexture(e,t,n){if(t===0)this.texture=jt,n===0&&(this._bouncePass=-1);else{if(n===0){let n=this._renderTarget;this._bounceTarget===null&&(this._bounceTarget=n.clone()),e.initRenderTarget(n),e.initRenderTarget(this._bounceTarget),At.min.set(0,0,0),At.max.set(n.width,n.height,n.depth),e.copyTextureToTexture(n.texture,this._bounceTarget.texture,At),this._bouncePass=t}this.texture=this._bounceTarget.texture}}_captureProbes(e,t,n,r){let{x:i,y:a,z:o}=this.resolution,s=i*o;_t.material=vt,vt.uniforms.envMap.value=xt.texture;for(let c=n;c<r;c++){let n=c%i,r=Math.floor(c/s),l=Math.floor(c/i)%o;this.getProbePosition(n,r,l,Ot),St.position.copy(Ot),e.autoClear=!0,St.update(e,t);let u=n+r*i+l*i*a;e.autoClear=!1,Et.viewport.set(0,u,9,1),e.setRenderTarget(Et),e.render(ht,gt)}}_repackProbes(e,t,n){let{x:r,y:i,z:a}=this.resolution,o=r*a,s=Math.floor(t/o),c=Math.floor(n/o),l=a+2,u=this._renderTarget;for(let e of bt)e.uniforms.batchTexture.value=Et.texture,e.uniforms.resolution.value.copy(this.resolution);for(let d=0;d<a;d++){let f=s*r+k.clamp(t%o-d*r,0,r),p=c*r+k.clamp(n%o-d*r,0,r);for(let t=f;t<p;){let n=t%r,o=Math.floor(t/r),s=Math.min(r-n,p-t),c=1;s===r&&(c=Math.min(i-o,Math.floor((p-t)/r))),u.viewport.set(n,o,s,c);for(let t=0;t<7;t++){_t.material=bt[t],_t.material.uniforms.sliceZ.value=d;let n=t*l;e.setRenderTarget(u,n+Mt+d),e.render(ht,gt),d===0&&(e.setRenderTarget(u,n),e.render(ht,gt)),d===a-1&&(e.setRenderTarget(u,n+Mt+a),e.render(ht,gt))}t+=s*c}}}_ensureTextures(){if(this._renderTarget!==null)return;let e=this.resolution,t=e.x,n=e.y,r=7*(e.z+2),i=new et(t,n,r,{format:ce,type:Je,minFilter:j,magFilter:j,generateMipmaps:!1,depthBuffer:!1});this._renderTarget=i,this.texture=i.texture}dispose(){this._bounceTarget!==null&&(this._bounceTarget.dispose(),this._bounceTarget=null,this._bouncePass=-1),this._renderTarget!==null&&(this._renderTarget.dispose(),this._renderTarget=null,this.texture=null),super.dispose()}};function Pt(){ht===null&&(gt=new v(-1,1,1,-1,0,1),_t=new C(new ct(2,2)),ht=new D,ht.add(_t))}function Ft(e){Pt(),e!==yt&&(vt!==null&&vt.dispose(),vt=new t({precision:`highp`,defines:{CUBEMAP_SIZE:e},uniforms:{envMap:{value:null}},vertexShader:`
				void main() {
					gl_Position = vec4( position.xy, 0.0, 1.0 );
				}
			`,fragmentShader:`
				#include <common>

				uniform samplerCube envMap;

				void main() {

					int coefIndex = int( gl_FragCoord.x );

					vec3 accum0 = vec3( 0.0 );
					vec3 accum1 = vec3( 0.0 );
					vec3 accum2 = vec3( 0.0 );
					vec3 accum3 = vec3( 0.0 );
					vec3 accum4 = vec3( 0.0 );
					vec3 accum5 = vec3( 0.0 );
					vec3 accum6 = vec3( 0.0 );
					vec3 accum7 = vec3( 0.0 );
					vec3 accum8 = vec3( 0.0 );
					float totalWeight = 0.0;
					float pixelSize = 2.0 / float( CUBEMAP_SIZE );

					for ( int face = 0; face < 6; face ++ ) {

						for ( int iy = 0; iy < CUBEMAP_SIZE; iy ++ ) {

							for ( int ix = 0; ix < CUBEMAP_SIZE; ix ++ ) {

								// WebGL cubemaps have a left-handed orientation (flip = -1)
								float col = ( float( ix ) + 0.5 ) * pixelSize - 1.0;
								float row = 1.0 - ( float( iy ) + 0.5 ) * pixelSize;

								vec3 coord;

								if ( face == 0 ) coord = vec3( 1.0, row, -col );
								else if ( face == 1 ) coord = vec3( -1.0, row, col );
								else if ( face == 2 ) coord = vec3( col, 1.0, -row );
								else if ( face == 3 ) coord = vec3( col, -1.0, row );
								else if ( face == 4 ) coord = vec3( col, row, 1.0 );
								else coord = vec3( -col, row, -1.0 );

								float lengthSq = dot( coord, coord );
								float weight = 4.0 / ( sqrt( lengthSq ) * lengthSq );
								totalWeight += weight;

								vec3 dir = normalize( coord );
								vec3 cw = textureCube( envMap, coord ).rgb * weight;

								// band 0
								accum0 += cw * 0.282095;

								// band 1
								accum1 += cw * ( 0.488603 * dir.y );
								accum2 += cw * ( 0.488603 * dir.z );
								accum3 += cw * ( 0.488603 * dir.x );

								// band 2
								accum4 += cw * ( 1.092548 * ( dir.x * dir.y ) );
								accum5 += cw * ( 1.092548 * ( dir.y * dir.z ) );
								accum6 += cw * ( 0.315392 * ( 3.0 * dir.z * dir.z - 1.0 ) );
								accum7 += cw * ( 1.092548 * ( dir.x * dir.z ) );
								accum8 += cw * ( 0.546274 * ( dir.x * dir.x - dir.y * dir.y ) );

							}

						}

					}

					float norm = 4.0 * PI / totalWeight;

					vec3 accum;
					if ( coefIndex == 0 ) accum = accum0;
					else if ( coefIndex == 1 ) accum = accum1;
					else if ( coefIndex == 2 ) accum = accum2;
					else if ( coefIndex == 3 ) accum = accum3;
					else if ( coefIndex == 4 ) accum = accum4;
					else if ( coefIndex == 5 ) accum = accum5;
					else if ( coefIndex == 6 ) accum = accum6;
					else if ( coefIndex == 7 ) accum = accum7;
					else accum = accum8;

					gl_FragColor = vec4( accum * norm, 1.0 );

				}
			`}),yt=e)}function It(){if(bt===null){Pt(),bt=[];for(let e=0;e<7;e++)bt[e]=new t({precision:`highp`,defines:{TEXTURE_INDEX:e},uniforms:{batchTexture:{value:null},resolution:{value:new M},sliceZ:{value:0}},vertexShader:`
		void main() {
			gl_Position = vec4( position.xy, 0.0, 1.0 );
		}
	`,fragmentShader:`
				uniform sampler2D batchTexture;
				uniform vec3 resolution;
				uniform int sliceZ;

				void main() {

					int ix = int( gl_FragCoord.x );
					int iy = int( gl_FragCoord.y );
					int iz = sliceZ;

					int probeIndex = ix + iy * int( resolution.x ) + iz * int( resolution.x ) * int( resolution.y );

					// Read 9 SH coefficients from the batch texture row
					vec4 c0 = texelFetch( batchTexture, ivec2( 0, probeIndex ), 0 );
					vec4 c1 = texelFetch( batchTexture, ivec2( 1, probeIndex ), 0 );
					vec4 c2 = texelFetch( batchTexture, ivec2( 2, probeIndex ), 0 );
					vec4 c3 = texelFetch( batchTexture, ivec2( 3, probeIndex ), 0 );
					vec4 c4 = texelFetch( batchTexture, ivec2( 4, probeIndex ), 0 );
					vec4 c5 = texelFetch( batchTexture, ivec2( 5, probeIndex ), 0 );
					vec4 c6 = texelFetch( batchTexture, ivec2( 6, probeIndex ), 0 );
					vec4 c7 = texelFetch( batchTexture, ivec2( 7, probeIndex ), 0 );
					vec4 c8 = texelFetch( batchTexture, ivec2( 8, probeIndex ), 0 );

					// Pack into the output format for this texture index
					#if TEXTURE_INDEX == 0
						gl_FragColor = vec4( c0.rgb, c1.r );
					#elif TEXTURE_INDEX == 1
						gl_FragColor = vec4( c1.gb, c2.rg );
					#elif TEXTURE_INDEX == 2
						gl_FragColor = vec4( c2.b, c3.rgb );
					#elif TEXTURE_INDEX == 3
						gl_FragColor = vec4( c4.rgb, c5.r );
					#elif TEXTURE_INDEX == 4
						gl_FragColor = vec4( c5.gb, c6.rg );
					#elif TEXTURE_INDEX == 5
						gl_FragColor = vec4( c6.b, c7.rgb );
					#else
						gl_FragColor = vec4( c8.rgb, 0.0 );
					#endif

				}
			`})}}function Lt(e){jt===null&&(jt=new pe(new Uint16Array(4),1,1,1),jt.type=Qe,jt.minFilter=j,jt.magFilter=j,jt.needsUpdate=!0);let{cubemapSize:t=8,near:n=.1,far:r=100}=e;(xt===null||t!==Ct||n!==wt||r!==Tt)&&(xt!==null&&xt.dispose(),xt=new y(t,{type:Qe}),St=new de(n,r,xt),Ct=t,wt=n,Tt=r),Ft(t)}function Rt(e){(Et===null||Dt!==e)&&(Et!==null&&Et.dispose(),Et=new ot(9,e,{type:Je,minFilter:f,magFilter:f,depthBuffer:!1}),Dt=e)}function zt(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Bt=class e{constructor(e=1){this.f=zt(e)}next(){return this.f()}range(e,t){return e+(t-e)*this.f()}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.f()*e.length)]}chance(e){return this.f()<e}sign(){return this.f()<.5?-1:1}gauss(){let e=0;for(;e===0;)e=this.f();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*this.f())}fork(){return new e(Math.floor(this.f()*2147483647))}},Vt=(e,t=0,n=1)=>e<t?t:e>n?n:e,Ht=(e,t,n)=>e+(t-e)*n,Ut=(e,t,n)=>{let r=Vt((n-e)/(t-e));return r*r*(3-2*r)};function Wt(e,t,n){let r=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,1442695041)|0;return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Gt(e,t,n,r){let i=Math.imul(e,374761393)+Math.imul(t,668265263)+Math.imul(n,2246822519)+Math.imul(r,1442695041)|0;return i=Math.imul(i^i>>>13,1274126177),((i^i>>>16)>>>0)/4294967296}var Kt=Wt,qt=(e,t)=>(e%t+t)%t;function Jt(e,t,n=0,r=0){let i=Math.floor(e),a=Math.floor(t),o=e-i,s=t-a,c=o*o*o*(o*(o*6-15)+10),l=s*s*s*(s*(s*6-15)+10),u=i,d=i+1,f=a,p=a+1;r&&(u=qt(u,r),d=qt(d,r),f=qt(f,r),p=qt(p,r));let m=Wt(u,f,n),h=Wt(d,f,n),g=Wt(u,p,n),_=Wt(d,p,n);return m+(h-m)*c+(g-m)*l+(m-h-g+_)*c*l}function Yt(e,t,n,r=0){let i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=e-i,c=t-a,l=n-o,u=s*s*(3-2*s),d=c*c*(3-2*c),f=l*l*(3-2*l),p=(e,t,n)=>Gt(i+e,a+t,o+n,r),m=Ht(p(0,0,0),p(1,0,0),u),h=Ht(p(0,1,0),p(1,1,0),u),g=Ht(p(0,0,1),p(1,0,1),u),_=Ht(p(0,1,1),p(1,1,1),u);return Ht(Ht(m,h,d),Ht(g,_,d),f)}function Xt(e,t,{oct:n=4,gain:r=.5,lac:i=2,seed:a=0,period:o=0}={}){let s=.5,c=0,l=0,u=1;for(let d=0;d<n;d++)c+=s*Jt(e*u,t*u,a+d*17,o?Math.round(o*u):0),l+=s,s*=r,u*=i;return c/l}function Zt(e,t,n,{oct:r=4,gain:i=.5,lac:a=2,seed:o=0}={}){let s=.5,c=0,l=0,u=1;for(let d=0;d<r;d++)c+=s*Yt(e*u,t*u,n*u,o+d*17),l+=s,s*=i,u*=a;return c/l}function Qt(e,t,n=0,r=0){let i=Math.floor(e),a=Math.floor(t),o=9,s=9,c=0;for(let l=-1;l<=1;l++)for(let u=-1;u<=1;u++){let d=i+u,f=a+l,p=r?qt(d,r):d,m=r?qt(f,r):f,h=d+Wt(p,m,n),g=f+Wt(p,m,n+101),_=Math.hypot(h-e,g-t);_<o?(s=o,o=_,c=Wt(p,m,n+202)):_<s&&(s=_)}return[o,s,c]}var F={uniforms:{giBoxMin:{value:new M(-1,-1,-1)},giBoxMax:{value:new M(1,1,1)},giProbePos:{value:new M},giScale:{value:1},giK:{value:1.6},giSpecOcc:{value:.012},giFallback:{value:new g(0,0,0)},giExt:{value:.3},uTime:{value:0},giShadowK:{value:0},giCapA:{value:Array.from({length:8},()=>new A(0,-10,0,0))},giCapB:{value:Array.from({length:8},()=>new M(0,-10,0))},giCatBound:{value:new A(0,-10,0,0)},giWin:{value:new A(1.5,1.6,-.2,.8)},giContactK:{value:0},giContactSun:{value:0},giContact:{value:Array.from({length:10},()=>new A(0,-10,0,0))},giContactBound:{value:new A(0,-10,0,0)},giSunOn:{value:0},giSunDisk:{value:1},giSunDir:{value:new M(0,1,0)},giSunCol:{value:new g(0,0,0)},giSunMat:{value:new c},giSunMap:{value:null},giSunMapD:{value:null},giSunTex:{value:new A(1/2048,1e-4,0,.02)},giSunOff:{value:.002},giCatMap:{value:null},giCatMat:{value:new c},giCatOn:{value:0}}};{let e=n;e.lights_fragment_maps=e.lights_fragment_maps.replace(`iblIrradiance += getIBLIrradiance( geometryNormal );`,`#if !defined( USE_GI ) && NUM_LIGHT_PROBE_GRIDS == 0
			iblIrradiance += getIBLIrradiance( geometryNormal );
			#endif`),e.lights_fragment_begin=e.lights_fragment_begin.replace(`#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )`,`#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct ) && !defined( USE_GI )`).replace(`#if NUM_LIGHT_PROBE_GRIDS > 0`,`#if NUM_LIGHT_PROBE_GRIDS > 0 && !defined( USE_GI )`),e.lights_fragment_begin.split(`!defined( USE_GI )`).length!==3&&console.warn(`[gi] lights_fragment_begin patch did not apply - three.js version mismatch?`);let t=e.envmap_physical_pars_fragment;e.envmap_physical_pars_fragment=t.replace(`vec3 getIBLRadiance(`,`#ifdef GI_BOXPROJ
	uniform vec3 giBoxMin; uniform vec3 giBoxMax; uniform vec3 giProbePos;
	vec3 giBoxProject( vec3 v ) {
		vec3 r1 = ( giBoxMax - vGiW ) / v; vec3 r2 = ( giBoxMin - vGiW ) / v; vec3 rm = max( r1, r2 );
		float d = min( min( rm.x, rm.y ), rm.z );
		return normalize( vGiW + v * d - giProbePos );
	}
	#endif
	vec3 getIBLRadiance(`).replace(/(vec3 getIBLRadiance\([\s\S]*?reflectVec = transformDirectionByInverseViewMatrix\( reflectVec, viewMatrix \);)/,`$1
			#ifdef GI_BOXPROJ
			reflectVec = giBoxProject( reflectVec );
			#endif`),e.envmap_physical_pars_fragment!==t&&e.envmap_physical_pars_fragment.includes(`reflectVec = giBoxProject`)||console.warn(`[gi] envmap chunk patch did not apply — three.js version mismatch?`)}var $t=`
#ifdef USE_GI
attribute vec3 gi; attribute vec3 gd;
varying vec3 vGi; varying vec3 vGd; varying vec3 vGiW;
#ifdef GI_BACK
attribute vec3 giB; varying vec3 vGiB;
#endif
#endif
`,en=`
#ifdef USE_GI
{
	vec4 gw = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
	gw = instanceMatrix * gw;
	#endif
	gw = modelMatrix * gw; vGiW = gw.xyz; vGi = gi; vGd = ( viewMatrix * vec4( gd, 0.0 ) ).xyz;
	#ifdef GI_BACK
	vGiB = giB;
	#endif
}
#endif
`,tn=`
#ifdef USE_GI
varying vec3 vGi; varying vec3 vGd; varying vec3 vGiW;
uniform float giScale; uniform float giK; uniform float giSpecOcc; uniform vec3 giFallback; uniform vec3 giTrans; uniform float giExt;
uniform float giShadowK; uniform vec4 giCapA[ 8 ]; uniform vec3 giCapB[ 8 ]; uniform vec4 giCatBound; uniform vec4 giWin;
uniform float giContactK; uniform float giContactSun; uniform vec4 giContact[ 10 ]; uniform vec4 giContactBound;
#ifdef GI_DYN
uniform float giDyn;
#endif
#ifdef GI_BACK
varying vec3 vGiB;
#endif
uniform float giSunOn; uniform vec3 giSunDir; uniform vec3 giSunCol; uniform mat4 giSunMat; uniform vec4 giSunTex; uniform float giSunOff;
uniform sampler2D giSunMap; uniform sampler2D giSunMapD;
uniform sampler2DShadow giCatMap; uniform mat4 giCatMat; uniform float giCatOn;
float giIgn( vec2 p ) { return fract( 52.9829189 * fract( dot( p, vec2( 0.06711056, 0.00583715 ) ) ) ); }
// How much of the sun a point of the room sees (0..1). The sun is a disc half a degree across: the shadow of a thing
// is sharp where it touches and wider the further away it is (PCSS: the mean depth of what is in the way, round the
// point, gives the width of the penumbra). Outside the maps nothing gets sun: every sunbeam comes in by the window.
float giSunVisibility( vec3 w, vec3 nW, float ndl ) {
	vec3 wp = w + nW * ( giSunOff * ( 1.0 + 3.0 * ( 1.0 - ndl ) ) );
	vec3 s = ( giSunMat * vec4( wp, 1.0 ) ).xyz;
	if ( s.x <= 0.003 || s.x >= 0.997 || s.y <= 0.003 || s.y >= 0.997 || s.z >= 1.0 || s.z <= 0.0 ) return 0.0;
	float texel = giSunTex.x, tn = sqrt( max( 0.0, 1.0 - ndl * ndl ) ) / max( ndl, 0.2 );
	float zr = s.z - giSunTex.y * ( 0.6 + 1.5 * min( tn, 4.0 ) );      // (giSunTex.y: one texel, in units of depth)
	float rot = giIgn( gl_FragCoord.xy ) * 6.2831853;
	// what is in the way, round the point
	float sr = giSunTex.w, bs = 0.0, bn = 0.0;
	for ( int i = 0; i < 12; i ++ ) {
		float fi = float( i ), r = sqrt( ( fi + 0.5 ) / 12.0 ) * sr, a = fi * 2.39996 + rot;
		float d = textureLod( giSunMap, s.xy + r * vec2( cos( a ), sin( a ) ), 0.0 ).r;
		if ( d < zr ) { bs += d; bn += 1.0; }
	}
	float lit = 1.0;
	if ( bn > 11.5 ) lit = 0.0;
	else if ( bn > 0.5 ) {
		float pr = clamp( ( zr - bs / bn ) * giSunTex.z, texel * 1.5, sr );
		lit = 0.0;
		for ( int i = 0; i < 20; i ++ ) {
			float fi = float( i ), r = sqrt( ( fi + 0.5 ) / 20.0 ) * pr, a = fi * 2.39996 + rot * 1.618 + 0.5;
			lit += step( zr, textureLod( giSunMap, s.xy + r * vec2( cos( a ), sin( a ) ), 0.0 ).r );
		}
		lit /= 20.0;
	}
	if ( lit <= 0.0 ) return 0.0;
	// the things that can be knocked about (near what they shade: a fixed, small blur)
	{
		float ld = 0.0;
		for ( int i = 0; i < 8; i ++ ) {
			float fi = float( i ), r = sqrt( ( fi + 0.5 ) / 8.0 ) * texel * 4.0, a = fi * 2.39996 + rot;
			ld += step( zr, textureLod( giSunMapD, s.xy + r * vec2( cos( a ), sin( a ) ), 0.0 ).r );
		}
		lit *= ld / 8.0;
	}
	// the cat
	if ( giCatOn > 0.5 && lit > 0.0 ) {
		vec4 c = giCatMat * vec4( wp, 1.0 );
		c.xyz /= c.w;
		if ( c.x > 0.0 && c.x < 1.0 && c.y > 0.0 && c.y < 1.0 && c.z < 1.0 ) {
			float t = 1.5 / 2048.0, cz = c.z - 0.0006, k = 0.0;
			k += textureLod( giCatMap, vec3( c.xy + vec2( -t, -t ), cz ), 0.0 ); k += textureLod( giCatMap, vec3( c.xy + vec2( t, -t ), cz ), 0.0 );
			k += textureLod( giCatMap, vec3( c.xy + vec2( -t, t ), cz ), 0.0 ); k += textureLod( giCatMap, vec3( c.xy + vec2( t, t ), cz ), 0.0 );
			lit *= k * 0.25;
		}
	}
	return lit;
}
#endif
`,nn=`
#include <lights_fragment_maps>
#ifdef USE_GI
// sum-animals: where the cat touches the room. A paw on the sill, the body lying on the duvet: right round the contact
// the light is shut out - the soft dark that says she stands ON it. The paws and the trunk as spheres, each taking off
// the share of the sky it covers (cosine-weighted: (r / d)^2 at most); the paws take some of the sun as well.
float giCo = 0.0, giCoS = 0.0;
if ( giContactK > 0.0 ) {
	vec3 gcc = giContactBound.xyz - vGiW;
	if ( dot( gcc, gcc ) < giContactBound.w * giContactBound.w ) {
		vec3 gnW = inverseTransformDirection( normalize( nonPerturbedNormal ), viewMatrix );
		for ( int i = 0; i < 10; i ++ ) {
			vec3 cd = giContact[ i ].xyz - vGiW; float cr = giContact[ i ].w, cl2 = max( dot( cd, cd ), 1e-8 );
			float co = clamp( dot( gnW, cd ) * inversesqrt( cl2 ), 0.0, 1.0 ) * min( 1.0, cr * cr / cl2 );
			giCo += co; if ( i < 4 ) giCoS += co;
		}
		giCo = min( giCo, 1.0 ) * giContactK; giCoS = min( giCoS, 1.0 ) * giContactSun;
	}
}
{
	#ifdef GI_BACK
	vec3 gF = gl_FrontFacing ? vGi : vGiB; vec3 gBk = gl_FrontFacing ? vGiB : vGi;
	#else
	vec3 gF = vGi;
	#endif
	if ( dot( vGd, vGd ) > 1e-6 && gl_FrontFacing ) {
		float ga = dot( normal, vGd ); float gb = dot( nonPerturbedNormal, vGd );
		gF *= clamp( ( 1.0 + giK * ga ) / max( 0.3, 1.0 + giK * gb ), 0.0, 2.5 );
	}
	#ifdef GI_BACK
	gF += gBk * giTrans;
	#endif
	gF = gF * giScale + giFallback;
	if ( vGiW.z < -0.33 ) gF *= giExt;
	// sum-animals: the cat's shadow. The room is lit through the window, a big soft light: seen from a point of the
	// room, each part of the cat (a capsule) covers a share of the window's disc - all of it right under the cat, less
	// and less further away. That share of the light is taken off, as far as this point's light comes from the window
	// at all (vGd is the mean direction of its baked light).
	if ( giShadowK > 0.0 ) {
		vec3 gcb = giCatBound.xyz - vGiW;
		if ( dot( gcb, gcb ) < giCatBound.w * giCatBound.w ) {
			vec3 gL = giWin.xyz - vGiW; float gdW = length( gL ); gL /= gdW;
			float gTan = giWin.w / gdW, gOcc = 0.0;
			for ( int i = 0; i < 8; i ++ ) {
				vec3 ca = giCapA[ i ].xyz - vGiW, cab = giCapB[ i ] - giCapA[ i ].xyz; float cr = giCapA[ i ].w;
				// the point of the capsule's axis nearest to the ray towards the window
				float abab = dot( cab, cab ), abL = dot( cab, gL ), aL = dot( ca, gL ), aab = dot( ca, cab );
				float den = abab - abL * abL;
				float ct = den > 1e-7 ? clamp( ( aL * abL - aab ) / den, 0.0, 1.0 ) : 0.0;
				vec3 cc = ca + cab * ct;
				float along = dot( cc, gL );
				if ( along <= 0.0 ) continue;
				float off = length( cc - gL * along ), rl = max( along * gTan, 1e-4 );      // rl: radius of the window's cone there
				gOcc += min( 1.0, ( cr * cr ) / ( rl * rl ) ) * ( 1.0 - smoothstep( abs( rl - cr ), rl + cr, off ) );
			}
			float gDir = smoothstep( 0.1, 0.6, dot( vGd, ( viewMatrix * vec4( gL, 0.0 ) ).xyz ) );
			gF *= 1.0 - giShadowK * gDir * min( gOcc, 1.0 ) * ( 1.0 - smoothstep( 0.7, 1.0, length( gcb ) / giCatBound.w ) );
		}
	}
	gF *= 1.0 - giCo;
	#if defined( GI_DYN ) && NUM_LIGHT_PROBE_GRIDS > 0
	// sum-animals: a thing that has been moved from where it was baked takes the light of where it is now
	if ( giDyn > 0.0 ) {
		vec3 gN = normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
		gF = mix( gF, getLightProbeGridIrradiance( probesSH[ 0 ], probesMin[ 0 ], probesMax[ 0 ], probesResolution[ 0 ], vGiW, gN ) * RECIPROCAL_PI, giDyn );
	}
	#endif
	irradiance += gF * PI;
	#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance *= smoothstep( 0.0, giSpecOcc, dot( gF, vec3( 0.3333 ) ) );
	#endif
}
// sum-animals: the sun, in real time (inside the room; outside, its light is in the bake)
if ( giSunOn > 0.5 && vGiW.z > -0.33 ) {
	vec3 sunV = normalize( ( viewMatrix * vec4( giSunDir, 0.0 ) ).xyz );
	vec3 nG = normalize( nonPerturbedNormal );
	float ndlG = dot( nG, sunV );
	#ifdef GI_BACK
	bool sBack = ndlG < 0.0;      // thin, translucent things lit from behind (curtains, leaves)
	#else
	bool sBack = false;
	#endif
	if ( ndlG > 0.0 || sBack ) {
		vec3 nGW = inverseTransformDirection( nG, viewMatrix );
		float sv = giSunVisibility( vGiW, sBack ? - nGW : nGW, abs( ndlG ) );
		if ( sv > 0.0 ) {
			if ( ndlG > 0.0 ) {
				IncidentLight sl; sl.direction = sunV; sl.color = giSunCol * ( sv * smoothstep( 0.0, 0.06, ndlG ) * ( 1.0 - giCoS ) ); sl.visible = true;
				RE_Direct( sl, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
			}
			#ifdef GI_BACK
			else irradiance += giTrans * giSunCol * ( sv * - ndlG );
			#endif
		}
	}
}
#endif
`;function rn(e,t={}){e.defines=e.defines||{},e.defines.USE_GI=``,t.back&&(e.defines.GI_BACK=``),t.box!==!1&&(e.defines.GI_BOXPROJ=``);let n={value:t.trans||new g(0,0,0)};return e.userData.giTrans=n,e.onBeforeCompile=e=>{Object.assign(e.uniforms,F.uniforms,{giTrans:n}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>`+$t).replace(`#include <project_vertex>`,`#include <project_vertex>`+en),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>`+tn).replace(`#include <lights_fragment_maps>`,nn),t.onCompile&&t.onCompile(e)},e.customProgramCacheKey=()=>`gi|`+(t.key||``),e}function an(e,t){let n=e.clone(),r=e.onBeforeCompile;n.defines={...e.defines||{},GI_DYN:``},n.userData.giTrans=e.userData.giTrans,n.onBeforeCompile=(n,i)=>{r.call(e,n,i),n.uniforms.giDyn=t};let i=e.customProgramCacheKey?e.customProgramCacheKey():``;return n.customProgramCacheKey=()=>i+`|dyn`,n}function on(e){let t=[],n=new Map;return e.updateMatrixWorld(!0),e.traverse(r=>{if(!r.isMesh||r.userData.gi===!1)return;let i=Array.isArray(r.material)?r.material[0]:r.material;if(!i||!i.defines||i.defines.USE_GI===void 0)return;let a=r.name||`mesh`;for(let t=r.parent;t&&t!==e;t=t.parent)a=(t.name||`g`)+`/`+a;let o=n.get(a)||0;n.set(a,o+1);let s=!!(r.isInstancedMesh&&r.userData.giInstanced);t.push({mesh:r,key:a+`#`+o,inst:s,back:i.defines.GI_BACK!==void 0,count:s?r.count:r.geometry.attributes.position.count})}),t}function sn(e,t,n){e.mesh.geometry.setAttribute(t,e.inst?new He(n,3):new ee(n,3))}function cn(e,t){let n=new DataView(t);if(n.getUint32(0,!0)!==1195983409)return{ok:!1,reason:`bad magic`};let r=n.getUint32(4,!0),i=JSON.parse(new TextDecoder().decode(new Uint8Array(t,8,r))),a=(4-(8+r)%4)%4,o=new Uint16Array(t,8+r+a),s=new Map(i.meshes.map(e=>[e.key,e])),c=0,l=0;for(let t of on(e)){let e=s.get(t.key);if(!e||e.count!==t.count||e.back!==t.back){l++,ln(t);continue}let n=e.off;for(let e of t.back?[`gi`,`gd`,`giB`]:[`gi`,`gd`]){let r=new Float32Array(t.count*3);for(let e=0;e<r.length;e++)r[e]=xe.fromHalfFloat(o[n++]);sn(t,e,r)}c++}return{ok:!0,applied:c,stale:l,meta:i.meta}}function ln(e){for(let t of e.back?[`gi`,`gd`,`giB`]:[`gi`,`gd`]){let n=new Float32Array(e.count*3);t!==`gd`&&n.fill(.06),sn(e,t,n)}}function un(e){for(let t of on(e))ln(t)}function dn(e,t,n,r,i,a=256){let o=new y(a,{type:Qe,generateMipmaps:!0,minFilter:it}),s=new de(.03,200,o);s.position.copy(n);let c=t.environment;t.environment=null,s.update(e,t);let l=new je(e),u=l.fromCubemap(o.texture).texture;return l.dispose(),o.dispose(),c&&c.dispose?.(),t.environment=u,F.uniforms.giProbePos.value.copy(n),F.uniforms.giBoxMin.value.copy(r),F.uniforms.giBoxMax.value.copy(i),u}var fn=8;function pn(e){fn=e}function mn(e,t){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}function hn(e,t,n){let r=new Float32Array(e*t);for(let i=0;i<t;i++)for(let a=0;a<e;a++)r[i*e+a]=n(a/e,i/t,a,i);return r}function gn(e,t,n,r=1,i=!0){let a=new Uint8Array(t*n*4),o=(r,a)=>(i?(r=(r+t)%t,a=(a+n)%n):(r=Math.min(t-1,Math.max(0,r)),a=Math.min(n-1,Math.max(0,a))),e[a*t+r]);for(let e=0;e<n;e++)for(let n=0;n<t;n++){let i=(o(n+1,e)-o(n-1,e))*.5*r,s=(o(n,e+1)-o(n,e-1))*.5*r,c=1/Math.hypot(i,s,1),l=(e*t+n)*4;a[l]=(-i*c*.5+.5)*255,a[l+1]=(-s*c*.5+.5)*255,a[l+2]=(c*.5+.5)*255,a[l+3]=255}return a}function _n(e,{srgb:t=!1,repeat:n=null,aniso:r=fn,wrap:i=!0,flipY:a=!1,mip:o=!0}={}){return e.colorSpace=t?ue:``,e.wrapS=e.wrapT=i?fe:p,e.generateMipmaps=o,e.minFilter=o?it:j,e.magFilter=j,e.anisotropy=r,e.flipY=a,n&&e.repeat.set(n[0],n[1]),e.needsUpdate=!0,e}function vn(t,n,r,i){return _n(new e(t,n,r,ce,Ce),i)}function yn(e,t={}){return _n(new ae(e),{flipY:!0,...t})}function bn(e,t,n,r,i={}){return vn(gn(e,t,n,r,i.wrap!==!1),t,n,i)}function xn(e,t,n,r,i,a){let o=new Uint8Array(e*t*4);for(let a=0;a<e*t;a++)o[a*4]=n?n[a]*255:255,o[a*4+1]=r?r[a]*255:255,o[a*4+2]=i?i[a]*255:255,o[a*4+3]=255;return vn(o,e,t,a)}function Sn(e,t,n,r={}){let i=new Uint8Array(e*t*4);for(let r=0;r<t;r++)for(let a=0;a<e;a++){let o=n(a/e,r/t,a,r),s=(r*e+a)*4;i[s]=o[0]*255,i[s+1]=o[1]*255,i[s+2]=o[2]*255,i[s+3]=o.length>3?o[3]*255:255}return vn(i,e,t,{srgb:!0,...r})}function Cn(e){let t=0,n=0,r=0,i=e.length/4,a=e=>(e/255)**2.2;for(let i=0;i<e.length;i+=16)t+=a(e[i]),n+=a(e[i+1]),r+=a(e[i+2]);let o=4/i;return[t*o,n*o,r*o]}var wn=(e,t,n)=>new g().setRGB(e,t,n,ue),Tn=e=>e**2.2;function I(e,t={}){let n=t.phys?new x(e):new T(e);return rn(n,t),t.bake&&(n.userData.bake=t.bake),n}var En=new Map;function Dn(e,t){return En.has(e)||En.set(e,t()),En.get(e)}var On=new Float32Array(65536);{let e=new Bt(90210);for(let t=0;t<65536;t++)On[t]=e.next()}function kn(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r;i=i*i*(3-2*i),a=a*a*(3-2*a);let o=n&255,s=n+1&255,c=(r&255)<<8,l=(r+1&255)<<8,u=On[c|o],d=On[c|s],f=On[l|o],p=On[l|s];return u+(d-u)*i+(f-u+(u-d-f+p)*i)*a}function An(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(t),s=e-a,c=t-o,l=s*s*s*(s*(s*6-15)+10),u=c*c*c*(c*(c*6-15)+10),d=a%r,f=o%i;d<0&&(d+=r),f<0&&(f+=i);let p=d+1===r?0:d+1,m=f+1===i?0:f+1,h=Kt(d,f,n),g=Kt(p,f,n),_=Kt(d,m,n),v=Kt(p,m,n);return h+(g-h)*l+(_-h)*u+(h-g-_+v)*l*u}function jn(e,t,n,r,i,a){let o=.5,s=0,c=0,l=1;for(let u=0;u<n;u++)s+=o*An(e*l,t*l,r+u*17,i*l,a*l),c+=o,o*=.5,l*=2;return s/c}var Mn=e=>e<=0?0:e>=1?1:e*e*(3-2*e);function Nn(e,t,n,r,i){let a=new Uint8Array(t*n*4),o=.5/r,s=.5/i;for(let r=0;r<n;r++){let i=(r===0?n-1:r-1)*t,c=(r===n-1?0:r+1)*t,l=r*t;for(let n=0;n<t;n++){let r=(e[l+(n===t-1?0:n+1)]-e[l+(n===0?t-1:n-1)])*o,u=(e[c+n]-e[i+n])*s,d=1/Math.sqrt(r*r+u*u+1),f=(l+n)*4;a[f]=(-r*d*.5+.5)*255+.5,a[f+1]=(-u*d*.5+.5)*255+.5,a[f+2]=(d*.5+.5)*255+.5,a[f+3]=255}}return a}function Pn(){return Dn(`wallN`,()=>{let e=1024,t=900/e,n=new Float32Array(e*e),r=new Bt(4711);for(let i=0;i<13e3;i++){let i=r.range(0,e),a=r.range(0,e),o=r.range(0,Math.PI),s=r.next(),c=s>.93,l=(c?r.range(3.4,5.4):1.2+s*2.5)/t,u=(c?r.range(1.3,2.1):r.range(.75,1.5))/t,d=(c?.5:.25+s*.16)*r.range(.7,1.3),f=Math.cos(o),p=Math.sin(o),m=Math.ceil(l)+1,h=Math.floor(i),g=Math.floor(a);for(let e=-m;e<=m;e++)for(let t=-m;t<=m;t++){let r=h+t+.5-i,o=g+e+.5-a,s=(r*f+o*p)/l,c=(o*f-r*p)/u,m=1-s*s-c*c;if(m<=0)continue;let _=d*Mn(m/.6),v=(g+e&1023)<<10|h+t&1023;_>n[v]&&(n[v]=_)}}let i=new Float32Array(e*e),a=t=>{let r=(t+e-1&1023)<<10,a=t<<10,o=(t+1&1023)<<10,s=t/e;for(let t=0;t<e;t++){let c=t+e-1&1023,l=t+1&1023,u=t/e,d=(n[a|t]*4+(n[a|c]+n[a|l]+n[r|t]+n[o|t])*2+n[r|c]+n[r|l]+n[o|c]+n[o|l])/16;i[a|t]=d+(kn(u*256,s*256)-.5)*.075+(kn(u*512+31.7,s*512+11.3)-.5)*.04}};for(let t=0;t<e;t++)a(t);return vn(Nn(i,e,e,t,t),e,e,{})})}function Fn(){return Dn(`wallLow`,()=>{let e=3200/256,t=.03,n=new Float32Array(65536),r=new Uint8Array(262144);for(let e=0;e<256;e++)for(let t=0;t<256;t++)n[e*256+t]=(jn(t/256*5,e/256*5,3,61,5,5)-.5)*7;for(let i=0;i<256;i++)for(let a=0;a<256;a++){let o=a/256,s=i/256,c=(i*256+a)*4,l=(n[i*256+(a+1)%256]-n[i*256+(a+256-1)%256])/(2*e),u=(n[(i+1)%256*256+a]-n[(i+256-1)%256*256+a])/(2*e),d=.5+(jn(o*3,s*3,3,71,3,3)-.5)*1.1+(An(o*11,s*2,73,11,2)-.5)*.45,f=.5+(jn(o*4,s*4,3,83,4,4)-.5)*1.1+(An(o*13,s*2,89,13,2)-.5)*.6;r[c]=(.5+Vt(l/t,-1,1)*.5)*255+.5,r[c+1]=(.5+Vt(u/t,-1,1)*.5)*255+.5,r[c+2]=Vt(d)*255+.5,r[c+3]=Vt(f)*255+.5}return vn(r,256,256,{aniso:2})})}function In(e,t,n,r,i){let a={tWallLow:{value:Fn()},uWallLow:{value:new A(e,e,t[0],t[1])},uWallAmp:{value:new M(n*.06,r,i)}};return{key:`wall`,onCompile(e){Object.assign(e.uniforms,a),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D tWallLow; uniform vec4 uWallLow; uniform vec3 uWallAmp;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
#ifdef USE_NORMALMAP_TANGENTSPACE
{
	vec4 wl = texture2D( tWallLow, vNormalMapUv * uWallLow.xy + uWallLow.zw );
	normal = normalize( normal - ( tbn[0] * ( wl.x - 0.5 ) + tbn[1] * ( wl.y - 0.5 ) ) * uWallAmp.x );
	diffuseColor.rgb *= 1.0 + ( wl.z - 0.5 ) * uWallAmp.y;
	roughnessFactor = clamp( roughnessFactor + ( wl.w - 0.5 ) * uWallAmp.z, 0.05, 1.0 );
}
#endif`)}}}function Ln(){return Dn(`lacN`,()=>bn(hn(512,512,(e,t)=>Xt(e*64,t*64,{oct:3,seed:21,period:64})),512,512,1.4))}function Rn(e=.4,t=.12){return Dn(`smudge`+e+t,()=>xn(512,512,null,hn(512,512,(n,r)=>Vt(e+(Xt(n*6,r*6,{oct:5,seed:33,period:6})-.5)*2*t+(Xt(n*90,r*90,{oct:2,seed:35,period:90})-.5)*t*.5)),null))}function zn(){return Dn(`sillR`,()=>{let e=1024,t=new Float32Array(e*256);for(let n=0;n<256;n++)for(let r=0;r<e;r++){let i=r/e,a=n/256,o=a*.25,s=Mn((o-.035)/.13)*(1-Mn((o-.205)/.04)),c=jn(i*6,a*2,4,91,6,2),l=An(i*5,a*9,93,5,9),u=kn(i*512,a*128),d=u>.9?(u-.9)*10:0;t[n*e+r]=Vt(.25+s*(.03+.085*Mn((c-.38)/.3))+(c-.5)*.04+(l-.5)*.03+d*(.06+.14*s))}return xn(e,256,null,t,null,{repeat:[1,4]})})}function Bn(e=.3,t=2,n=96){return Dn(`weave${e}|${t}|${n}`,()=>{let r=n;return bn(hn(512,512,(t,n)=>{let i=t*r,a=n*r,o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=o+s&1,d=.75+e*(Kt(o,7,1)-.5)*1.6,f=.75+e*(Kt(3,s,2)-.5)*1.6,p=Math.max(0,1-Math.abs(c-.5)*2/d),m=Math.max(0,1-Math.abs(l-.5)*2/f),h=Math.sqrt(p)*(u?1:.55)*(.6+.4*Math.sin(l*Math.PI)),g=Math.sqrt(m)*(u?.55:1)*(.6+.4*Math.sin(c*Math.PI));return Math.max(h,g)+(Jt(t*40,n*40,4,40)-.5)*.25*e}),512,512,t)})}function Vn(){return Dn(`floor`,()=>{let e=2048,t=.19,n=1.29,r=new Float32Array(e*e),i=new Float32Array(e*e),a=new Uint8Array(e*e*4),o=new Bt(77),s=(e,t)=>{let n=Math.abs(e-t)%1;return Math.min(n,1-n)},c=[];for(let e=0;e<12;e++){let t=0;for(let n=0;n<300&&(t=o.next(),e>0&&s(t,c[e-1])<.27||e>1&&s(t,c[e-2])<.09||e===11&&s(t,c[0])<.27||e>=10&&s(t,c[(e+2)%12])<.09);n++);c.push(t)}let l=[];for(let e=0;e<36;e++){let e=o.chance(.62),t=o.chance(.14);l.push({ox:o.range(0,256),oy:o.range(0,256),lum:Vt(o.gauss()*.04,-.085,.085),warm:o.range(-1,1),c0:e?o.range(.03,.16):o.chance(.5)?o.range(-.5,-.12):o.range(.31,.7),h0:e?o.range(.012,.05):o.range(0,.2),k:(e?o.range(.03,.085):o.range(0,.05))*o.sign(),rw:o.range(.0048,.0085),ring:o.range(.07,.13),gloss:o.range(-.03,.03),ks:o.range(.15,1.14),kt:o.range(.045,.145),kr:t?o.range(.0045,.008):0})}let u=new Float32Array(65536);for(let e=0;e<256;e++)for(let t=0;t<256;t++)u[e*256+t]=jn(t/256*4,e/256*6,4,23,4,6);let d=new Float32Array(e),f=new Int32Array(13).fill(e);for(let n=2047;n>=0;n--){let r=n/e*12,i=Math.floor(r);d[n]=(r-i)*t,f[i]=n}let p=new Float64Array(4),m=o=>{let s=o/e,m=o>>3,h=(o&7)/8,g=(m&255)*256,_=(m+1&255)*256,v=!(o&7);for(let m=0;m<12;m++){let y=s*3+c[m],b=Math.floor(y),x=(y-b)*n,S=l[m*3+b%3],C=S.h0+S.k*(x-.645),w=C*C,T=x*2.6+S.ox,E=x*7+S.ox,D=x*23+S.oy,ee=x<n-x?x:n-x,te=ee<.0026?Mn((.0026-ee)/.0019):0,O=x-S.ks,ne=S.kr,k=ne>0&&O>-.1&&O<.1,re=S.c0,ie=S.oy,ae=S.ox,oe=1/S.rw,se=S.ring,ce=1+S.lum,le=S.warm,ue=.3+S.gloss,de=f[m+1];for(let n=f[m];n<de;n++){let s=d[n],c=s-re,l=kn(T,s*22+ie),f=kn(E,s*260+ie),m=kn(D,s*700+ae),y=Math.sqrt(c*c+w)+(l-.5)*.016+(f-.5)*.002,b=0,x=0;if(k){let e=s-S.kt;y+=2.4*S.rw*Math.exp(-(O*O*.16+e*e)/(ne*ne*6)),x=Math.sqrt(O*O*.6+e*e)/ne,x<1.3&&(b=1-Mn((x-.5)/.75))}let C=y*oe,ee=C+.85*kn(C*.31+ae,ie+7.3),de=ee-Math.floor(ee),fe=(de<.14?de/.14:1)*(1-Mn((de-.18)/.6))*(.45+f),pe=(f-.5)*.11+(m-.5)*.08+(l-.5)*.09-fe*se,me=s<t-s?s:t-s,A=te;if(me<.0017){let e=Mn((.0017-me)/.0013);e>A&&(A=e)}let he=ce*(1+pe)*(1-b*(.34+.07*Math.sin(x*10)))*(1-.42*A),ge=pe<0?-pe:0,_e=.784*he*(1+.012*le),j=.679*he*(1-.1*ge-.04*b),ve=.543*he*(1-.28*ge-.12*b-.03*le);_e>1&&(_e=1),j>1&&(j=1),ve>1&&(ve=1);let ye=o*e+n,be=n>>3,xe=(n&7)/8,Se=be+1&255,Ce=u[g+be],we=u[_+be],M=Ce+(u[g+Se]-Ce)*xe,Te=M+(we+(u[_+Se]-we)*xe-M)*h;r[ye]=-.32*A-.05*fe-.03*(1-m)-.03*b;let Ee=ue+fe*.045+(.5-m)*.05+(Te-.5)*.16+A*.35+b*.06;i[ye]=Ee<.12?.12:Ee>1?1:Ee;let N=ye*4;a[N]=_e*255+.5,a[N+1]=j*255+.5,a[N+2]=ve*255+.5,a[N+3]=255,v&&!(n&7)&&(p[0]+=Tn(_e),p[1]+=Tn(j),p[2]+=Tn(ve),p[3]++)}}};for(let t=0;t<e;t++)m(t);let h=[1/2.2800000000000002,1/3.87];return{map:vn(a,e,e,{srgb:!0,repeat:h,aniso:16}),normalMap:vn(Nn(r,e,e,1.1132812500000002,1.8896484375),e,e,{repeat:h,aniso:16}),roughnessMap:xn(e,e,null,i,null,{repeat:h,aniso:16}),avg:[p[0]/p[3],p[1]/p[3],p[2]/p[3]]}})}function Hn(){let e={},t=Pn(),n=Ln(),r=(e,t,n)=>{let r=e.clone();return r.repeat.set(t,n),r.needsUpdate=!0,r};e.wall=I({color:wn(.925,.925,.915),roughness:.93,normalMap:r(t,1/.9,1/.9),normalScale:new N(1,1)},In(.9/3.2,[0,0],1,.045,.07)),e.ceiling=I({color:wn(.94,.94,.935),roughness:.95,normalMap:r(t,1/1.1,1/1.1),normalScale:new N(.55,.55)},In(1.1/3.2,[.37,.61],.8,.035,.05));let i=Vn();e.floor=I({map:i.map,normalMap:i.normalMap,roughnessMap:i.roughnessMap,roughness:1,normalScale:new N(1,1),envMapIntensity:1},{bake:{albedo:i.avg}});let a=Rn(.42,.12);return e.white=I({color:wn(.93,.93,.925),roughness:1,roughnessMap:r(a,1.3,1.3),normalMap:r(n,14,14),normalScale:new N(.12,.12)}),e.whiteMatte=I({color:wn(.92,.92,.91),roughness:.78,normalMap:r(n,10,10),normalScale:new N(.2,.2)}),e.sill=I({color:wn(.9,.9,.89),roughness:1,roughnessMap:zn(),normalMap:r(n,12,12),normalScale:new N(.08,.08)}),e.frame=I({color:wn(.115,.125,.135),roughness:.52,metalness:0,normalMap:r(n,40,40),normalScale:new N(.25,.25)}),e.rubber=I({color:wn(.05,.05,.05),roughness:.85}),e.handle=I({color:wn(.085,.09,.095),roughness:.34,metalness:0,normalMap:r(n,30,30),normalScale:new N(.12,.12)}),e.silicone=I({color:wn(.74,.745,.74),roughness:.4}),e.caulk=I({color:wn(.85,.85,.835),roughness:.62}),e.shadowGap=I({color:wn(.035,.035,.035),roughness:.9}),e.baseboard=I({color:wn(.93,.93,.92),roughness:.5,normalMap:r(n,12,12),normalScale:new N(.15,.15)}),e.metal=I({color:wn(.78,.78,.79),roughness:.32,metalness:1}),e.chrome=I({color:wn(.9,.9,.9),roughness:.12,metalness:1}),e.blackMetal=I({color:wn(.07,.07,.075),roughness:.45,metalness:.6}),e.plasticWhite=I({color:wn(.9,.9,.89),roughness:.38,normalMap:r(n,20,20),normalScale:new N(.08,.08)}),e.plasticBlack=I({color:wn(.06,.06,.065),roughness:.4}),e.exteriorWall=I({color:wn(.82,.8,.76),roughness:.95},{box:!1}),e.blocker=I({color:new g(0,0,0),side:2},{bake:{albedo:[0,0,0],twoSided:!0}}),e}function Un(e,t={}){let{slub:n=.3,threads:r=96,rep:i=6,trans:a=0,sheen:o=.35,rough:s=.95,nscale:c=.8,side:l=0,key:u=``}=t,d=Bn(n,2,r).clone();d.repeat.set(i,i),d.needsUpdate=!0;let f=t.transColor||e.clone().multiplyScalar(.9),p=I({color:e,roughness:s,normalMap:d,normalScale:new N(c,c),sheen:o,sheenRoughness:.6,sheenColor:e.clone().lerp(new g(1,1,1),.5),side:l},{phys:!0,back:a>0||l===2,trans:new g(f.r*a*2.2,f.g*a*2.2,f.b*a*2.2),key:`fab`+u,onCompile:t.onCompile});return p.userData.bake={albedo:[e.r,e.g,e.b],trans:a,transColor:[f.r,f.g,f.b],twoSided:!0},p}var L={W:4.8,D:4,H:2.5,wallT:.32,win:{x0:.55,x1:2.45,y0:.86,y1:2.26,mullion:1.74,frameZ0:-.205,frameZ1:-.135,glassZ:-.17},door:{z0:2.72,z1:3.62,h:2.02}},Wn={x0:.12,x1:1.56,z0:1.92,z1:3.98,top:.5},Gn={x0:2.68,x1:3.78,z0:.02,z1:.64,top:.74},Kn={x0:3.8,x1:4.78,z0:0,z1:.6,h:2.12},qn={x0:.95,x1:2.05,y0:.14,y1:.74,z0:.03,z1:.13},Jn={rodY:2.38,z:.19,left:[.34,.66],right:[2.34,2.62],bottom:.06},Yn={x0:1.64,x1:2.06,z0:3.54,z1:3.97,top:.5},Xn={x0:1.8,x1:3.5,z0:1.38,z1:2.92},Zn={x0:3.08,x1:3.76,depth:.2,y:[1.32,1.68]},Qn={x0:2.7,x1:3.04,y0:1.05,y1:1.92},$n={x0:0,x1:.2,z0:.28,z1:.86,y:2},er={px:{n:[1,0,0],u:[0,0,-1],v:[0,1,0]},nx:{n:[-1,0,0],u:[0,0,1],v:[0,1,0]},py:{n:[0,1,0],u:[1,0,0],v:[0,0,-1]},ny:{n:[0,-1,0],u:[1,0,0],v:[0,0,1]},pz:{n:[0,0,1],u:[1,0,0],v:[0,1,0]},nz:{n:[0,0,-1],u:[-1,0,0],v:[0,1,0]}};function tr(e,t,n,r){let i=[],a=e-t;if(t>0)for(let r=0;r<n;r++)i.push(-e+t*r/n);let o=Math.max(1,Math.ceil(2*a/r));for(let e=0;e<=o;e++)i.push(-a+2*a*e/o);if(t>0)for(let e=1;e<=n;e++)i.push(a+t*e/n);return i}function nr(e,t,n,r={}){let i=[e/2,t/2,n/2],a=Math.min(r.r??.003,Math.min(...i)*.999),o=r.rs??2,s=r.maxEdge??.08,c=r.skip||[],l=[],u=[],d=[],f=[];for(let e in er){if(c.includes(e))continue;let t=er[e],n=e=>e[0]?0:e[1]?1:2,r=n(t.u),p=n(t.v),m=n(t.n),h=t.u[r],g=t.v[p],_=t.n[m],v=tr(i[r],a,o,s),y=tr(i[p],a,o,s),b=l.length/3;for(let e=0;e<y.length;e++)for(let n=0;n<v.length;n++){let o=[0,0,0];o[r]=v[n]*h,o[p]=y[e]*g,o[m]=i[m]*_;let s=[0,0,0],c=0,f=[0,0,0];for(let e=0;e<3;e++){let t=i[e]-a;s[e]=Math.max(-t,Math.min(t,o[e])),f[e]=o[e]-s[e],c+=f[e]*f[e]}c=Math.sqrt(c);let b,x,S;c<1e-9?(b=t.n[0],x=t.n[1],S=t.n[2]):(b=f[0]/c,x=f[1]/c,S=f[2]/c),l.push(s[0]+b*a,s[1]+x*a,s[2]+S*a),u.push(b,x,S),d.push(v[n]+i[r],y[e]+i[p])}let x=v.length;for(let e=0;e<y.length-1;e++)for(let t=0;t<x-1;t++){let n=b+e*x+t,r=n+1,i=n+x+1,a=n+x;f.push(n,r,i,n,i,a)}}let p=new st;return p.setAttribute(`position`,new P(l,3)),p.setAttribute(`normal`,new P(u,3)),p.setAttribute(`uv`,new P(d,2)),p.setIndex(f),p}function R(e,t,n,r,i,a,o){return nr(r,i,a,o).translate(e+r/2,t+i/2,n+a/2)}function rr(e,t,n=.05){let r=Math.max(1,Math.ceil(e/n)),i=Math.max(1,Math.ceil(t/n)),a=new ct(e,t,r,i),o=a.attributes.uv;for(let n=0;n<o.count;n++)o.setXY(n,o.getX(n)*e,o.getY(n)*t);return a}function ir(e,t,{tubular:n=32,radial:r=8,cap:i=!0,curve:a=null,uvScale:o=1}={}){let s=a||new re(e,!1,`centripetal`),c=typeof t==`function`?t:()=>t,l=s.computeFrenetFrames(n,!1),u=[],d=[],f=[],p=[],m=new M,h=0,g=new M;for(let e=0;e<=n;e++){let t=e/n;s.getPointAt(t,m),e>0&&(h+=m.distanceTo(g)),g.copy(m);let i=l.normals[e],a=l.binormals[e],p=c(t);for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,n=Math.cos(t),s=Math.sin(t),c=n*i.x+s*a.x,l=n*i.y+s*a.y,g=n*i.z+s*a.z;u.push(m.x+c*p,m.y+l*p,m.z+g*p),d.push(c,l,g),f.push(e/r*o,h*o)}}let _=r+1;for(let e=0;e<n;e++)for(let t=0;t<r;t++){let n=e*_+t,r=n+_,i=r+1,a=n+1;p.push(n,a,r,r,a,i)}if(i)for(let e of[0,1]){let t=e*n,i=e;s.getPointAt(i,m);let a=l.tangents[t],o=e?1:-1,c=u.length/3;u.push(m.x,m.y,m.z),d.push(a.x*o,a.y*o,a.z*o),f.push(.5,.5);for(let e=0;e<=r;e++){let n=t*_+e;u.push(u[n*3],u[n*3+1],u[n*3+2]),d.push(a.x*o,a.y*o,a.z*o),f.push(0,0)}for(let t=0;t<r;t++)e?p.push(c,c+1+t,c+2+t):p.push(c,c+2+t,c+1+t)}let v=new st;return v.setAttribute(`position`,new P(u,3)),v.setAttribute(`normal`,new P(d,3)),v.setAttribute(`uv`,new P(f,2)),v.setIndex(p),v}function ar(e,t=32){return new Te(e.map(e=>new N(Math.max(e[0],1e-5),e[1])),t)}function or(e,t,n,r=20,i=e){return new le(i,e,n-t,r,1,!1).translate(0,(t+n)/2,0)}function sr(e){let t=e.filter(Boolean).map(e=>e.index?e:Ee(e)),n=[`position`,`normal`,`uv`],r=Object.keys(t[0].attributes).filter(e=>!n.includes(e)&&t.every(t=>t.attributes[e]));for(let e of t)for(let t of Object.keys(e.attributes))!n.includes(t)&&!r.includes(t)&&e.deleteAttribute(t);for(let e of t)e.attributes.uv||e.setAttribute(`uv`,new P(new Float32Array(e.attributes.position.count*2),2));return Pe(t,!1)}function cr(e,t,n,{closedU:r=!1}={}){let i=new Float32Array((t+1)*(n+1)*3),a=new Float32Array((t+1)*(n+1)*2),o=[],s=new M;for(let r=0;r<=n;r++)for(let o=0;o<=t;o++){e(o/t,r/n,s);let c=r*(t+1)+o;i[c*3]=s.x,i[c*3+1]=s.y,i[c*3+2]=s.z,a[c*2]=o/t,a[c*2+1]=r/n}for(let e=0;e<n;e++)for(let n=0;n<t;n++){let r=e*(t+1)+n,i=r+1,a=r+t+2,s=r+t+1;o.push(r,i,a,r,a,s)}let c=new st;if(c.setAttribute(`position`,new ee(i,3)),c.setAttribute(`uv`,new ee(a,2)),c.setIndex(o),c.computeVertexNormals(),r){let e=c.attributes.normal;for(let r=0;r<=n;r++){let n=r*(t+1),i=n+t,a=e.getX(n)+e.getX(i),o=e.getY(n)+e.getY(i),s=e.getZ(n)+e.getZ(i),c=Math.hypot(a,o,s)||1;e.setXYZ(n,a/c,o/c,s/c),e.setXYZ(i,a/c,o/c,s/c)}}return c}function lr(e,t,n=``){let r=new C(e,t);return r.name=n,r}function ur(e,...t){let n=new Ne;n.name=e;for(let e of t)e&&n.add(e);return n}function dr(e,t,n,r){let i=[e,...n.filter(n=>n>e&&n<t),t].sort((e,t)=>e-t),a=[];for(let e=0;e<i.length-1;e++){let t=Math.max(1,Math.ceil((i[e+1]-i[e])/r));for(let n=0;n<t;n++)a.push(i[e]+(i[e+1]-i[e])*n/t)}return a.push(t),a}function fr(e,t,n,r){let i=dr(0,e,n.flatMap(e=>[e.x0,e.x1]),r),a=dr(0,t,n.flatMap(e=>[e.y0,e.y1]),r),o=new Int32Array(i.length*a.length).fill(-1),s=[],c=[],l=[],u=[],d=(e,t)=>{let n=t*i.length+e;return o[n]<0&&(o[n]=s.length/3,s.push(i[e],a[t],0),l.push(0,0,1),c.push(i[e],a[t])),o[n]};for(let e=0;e<a.length-1;e++)for(let t=0;t<i.length-1;t++){let r=(i[t]+i[t+1])/2,o=(a[e]+a[e+1])/2;if(n.some(e=>r>e.x0&&r<e.x1&&o>e.y0&&o<e.y1))continue;let s=d(t,e),c=d(t+1,e),l=d(t+1,e+1),f=d(t,e+1);u.push(s,c,l,s,l,f)}let f=new st;return f.setAttribute(`position`,new P(s,3)),f.setAttribute(`normal`,new P(l,3)),f.setAttribute(`uv`,new P(c,2)),f.setIndex(u),f}function pr(){let e=new t({transparent:!0,depthWrite:!1,side:2,blending:5,blendEquation:100,blendSrc:201,blendDst:205,uniforms:{envMap:{value:null},giBoxMin:F.uniforms.giBoxMin,giBoxMax:F.uniforms.giBoxMax,giProbePos:F.uniforms.giProbePos,uDirt:{value:1},uTint:{value:new g(.86,.93,.9)}},vertexShader:`
      attribute vec2 psize;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec2 vS;
      void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; vN = normalize(mat3(modelMatrix) * normal); vUv = uv; vS = psize.x > 0.0 ? psize : vec2(1.0); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      precision highp float;
      uniform samplerCube envMap; uniform vec3 giBoxMin, giBoxMax, giProbePos; uniform float uDirt; uniform vec3 uTint;
      varying vec3 vW; varying vec3 vN; varying vec2 vUv; varying vec2 vS;
      float h(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * n2(p); p *= 2.03; a *= .5; } return s; }
      vec3 roomAt(vec3 R, float lod){
        vec3 r1 = (giBoxMax - vW) / R, r2 = (giBoxMin - vW) / R, rm = max(r1, r2);
        return textureLod(envMap, normalize(vW + R * min(min(rm.x, rm.y), rm.z) - giProbePos), lod).rgb;
      }
      void main(){
        vec3 V = normalize(cameraPosition - vW); vec3 N = normalize(vN); if (dot(N, V) < 0.0) N = -N;
        float f = 0.04 + 0.96 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
        // the two panes of a sealed unit are never flat or parallel: reflections bend and split towards the edges
        vec3 bow = vec3((vUv - 0.5) * vec2(0.034, 0.024), 0.0);
        vec3 Ra = reflect(-V, normalize(N + bow)), Rb = reflect(-V, normalize(N - bow * 0.7 + vec3(0.003, 0.002, 0.0)));
        vec3 refl = (roomAt(Ra, 0.5) * 0.6 + roomAt(Rb, 1.5) * 0.4) * uTint;
        float fr = 1.0 - pow(1.0 - f, 3.0);                           // four glass/air surfaces
        // dust: thin overall film, more where the cloth never reaches (gasket, bottom corners), faint wiping
        // arcs, a little dried rain on the outside, a few specks
        vec2 p = vUv * vS, e2 = min(p, vS - p);
        float haze = fbm(p * 3.1 + 7.0);
        float edge = smoothstep(0.06, 0.0, min(e2.x, e2.y));
        float corner = smoothstep(0.2, 0.0, length(vec2(e2.x, p.y)));
        vec2 q = p + vec2(0.25, 0.45);
        float wipe = smoothstep(0.45, 0.8, fbm(vec2(length(q) * 30.0, atan(q.y, q.x) * 3.0)));
        float streak = smoothstep(0.62, 0.95, fbm(vec2(p.x * 150.0, p.y * 2.0))) * smoothstep(0.35, 0.8, fbm(vec2(p.x * 9.0, p.y * 0.7 + 3.0)));
        vec2 sp = p * 150.0, ci = floor(sp);
        float speck = step(0.94, h(ci + 5.1)) * smoothstep(0.2, 0.06, length(fract(sp) - 0.5 - (vec2(h(ci), h(ci + 17.3)) - 0.5) * 0.5));
        float dirt = uDirt * (0.006 + 0.012 * haze * haze + 0.020 * edge * (0.4 + haze) + 0.022 * corner * haze + 0.005 * wipe * haze + 0.006 * streak + 0.02 * speck);
        // dust scatters the bright sky: a faint pale veil in front of the outside
        vec3 veil = vec3(0.50, 0.60, 0.74) * dirt;
        float a = clamp(f * 0.9 + dirt * 0.7, 0.0, 1.0);
        gl_FragColor = vec4(refl * fr + veil, a);
      }`});return e.userData.bake={ignore:!0},e.userData.isGlass=!0,e}function mr(e){let{M:t}=e,{W:n,D:r,H:i,wallT:a,win:o}=L,s=ur(`room`),l=(e,t,n,r={})=>{let i=lr(e,t,n);return Object.assign(i.userData,r),s.add(i),i};l(rr(n,r,.03).rotateX(-Math.PI/2).translate(n/2,0,r/2),t.floor,`floor`),l(rr(n,r,.06).rotateX(Math.PI/2).translate(n/2,i,r/2),t.ceiling,`ceiling`),l(fr(n,i,[o],.04),t.wall,`wallWindow`),l(rr(n,i,.045).rotateY(Math.PI).translate(n/2,i/2,r),t.wall,`wallBack`),l(rr(r,i,.045).rotateY(Math.PI/2).translate(0,i/2,r/2),t.wall,`wallLeft`),l(rr(r,i,.045).rotateY(-Math.PI/2).translate(n,i/2,r/2),t.wall,`wallRight`);let u=o.x1-o.x0,d=o.y1-o.y0;l(sr([rr(a,d,.03).rotateY(Math.PI/2).translate(o.x0,(o.y0+o.y1)/2,-a/2),rr(a,d,.03).rotateY(-Math.PI/2).translate(o.x1,(o.y0+o.y1)/2,-a/2),rr(u,a,.03).rotateX(Math.PI/2).translate((o.x0+o.x1)/2,o.y1,-a/2),rr(u,a,.03).rotateX(-Math.PI/2).translate((o.x0+o.x1)/2,o.y0,-a/2)]),t.wall,`reveal`);let f=t.blocker,p=.5;l(sr([rr(n+2*p,r+2*p,2).rotateX(-Math.PI/2).translate(n/2,-.03,r/2),rr(n+2*p,r+2*p,2).rotateX(Math.PI/2).translate(n/2,i+.03,r/2),rr(r+2*p,i+2*p,2).rotateY(Math.PI/2).translate(-.03,i/2,r/2),rr(r+2*p,i+2*p,2).rotateY(-Math.PI/2).translate(n+.03,i/2,r/2),rr(n+2*p,i+2*p,2).rotateY(Math.PI).translate(n/2,i/2,r+.03)]),f,`blocker`,{gi:!1});let m=7.5;l(fr(n+12,i+m+3.5,[{x0:n+6-o.x1,x1:n+6-o.x0,y0:o.y0+m,y1:o.y1+m}],2).rotateY(Math.PI).translate(n+6,-7.5,-a),t.exteriorWall,`facade`,{gi:!1});let h=o.frameZ0,g=o.frameZ1,_=g-h,v=.062,y=[],b=(e,t,n,r,i=h,a=_,o=.004)=>R(e,t,i,n,r,a,{r:o,rs:2,maxEdge:.12});y.push(b(o.x0,o.y0,v,d),b(o.x1-v,o.y0,v,d)),y.push(b(o.x0,o.y0,u,v),b(o.x0,o.y1-v,u,v)),y.push(b(o.mullion-.04,o.y0,.08,d));let x=o.x0+v,S=o.mullion-.04,C=o.y0+v,w=o.y1-v,T=.018,E=g-.028;y.push(b(x,C,T,w-C,E,.02,.003),b(S-T,C,T,w-C,E,.02,.003),b(x,C,S-x,T,E,.02,.003),b(x,w-T,S-x,T,E,.02,.003)),l(sr(y),t.frame,`winFrame`);let D=o.mullion+.012,te=o.x1-.03,O=o.y0+.03,ne=o.y1-.03,k=.074,re=g-.035,ie=.052,ae=[];ae.push(b(D,O,k,ne-O,re,ie,.006),b(te-k,O,k,ne-O,re,ie,.006),b(D,O,te-D,k,re,ie,.006),b(D,ne-k,te-D,k,re,ie,.006)),l(sr(ae),t.frame,`winSash`);let oe=[],ce=o.glassZ+.004,le=(e,t,n,r,i=.007)=>{oe.push(b(e,t,i,r-t,ce,.012,.002),b(n-i,t,i,r-t,ce,.012,.002),b(e,t,n-e,i,ce,.012,.002),b(e,r-i,n-e,i,ce,.012,.002))};le(x+T,C+T,S-T,w-T),le(D+k,O+k,te-k,ne-k),l(sr(oe),t.rubber,`winGasket`);let ue=D+k/2,de=(O+ne)/2-.02,fe=re+ie;l(sr([R(ue-.015,de-.034,fe,.03,.068,.009,{r:.0045,rs:3}),or(.009,0,.034,16).rotateX(Math.PI/2).translate(ue,de,fe+.004),R(ue-.0095,de-.116,fe+.03,.019,.128,.0125,{r:.006,rs:4})]),t.handle||t.frame,`winHandle`);let pe=pr();e.glass=pe;let me=(e,t,n,r,i)=>{let a=new ct(n-e,r-t).translate((e+n)/2,(t+r)/2,o.glassZ),s=new Float32Array(a.attributes.position.count*2);for(let i=0;i<s.length;i+=2)s[i]=n-e,s[i+1]=r-t;a.setAttribute(`psize`,new ee(s,2));let c=l(a,pe,i,{gi:!1});return c.renderOrder=5,c};me(x,C,S,w,`glassL`),me(D+k-.01,O+k-.01,te-k+.01,ne-k+.01,`glassR`);let A=u+.1;l(R(o.x0-.05,o.y0-.028,g-.01,A,.03,-g+.01+.045,{r:.012,rs:4,maxEdge:.016}),t.sill,`sill`);let he=[],ge=.07,_e=.014,j={r:.005,rs:3,maxEdge:.1};he.push(R(0,0,0,n,ge,_e,j),R(0,0,r-_e,n,ge,_e,j),R(0,0,0,_e,ge,r,j)),he.push(R(n-_e,0,0,_e,ge,L.door.z0-.07,j),R(n-_e,0,L.door.z1+.07,_e,ge,r-L.door.z1-.07,j)),l(sr(he),t.baseboard,`baseboards`);let ve=L.door.z0,ye=L.door.z1,be=L.door.h,xe=.065,Se=.018;l(sr([R(n-Se,0,ve-xe,Se,be+xe,xe,{r:.004,maxEdge:.08}),R(n-Se,0,ye,Se,be+xe,xe,{r:.004,maxEdge:.08}),R(n-Se,be,ve-xe,Se,xe,ye-ve+2*xe,{r:.004,maxEdge:.08})]),t.baseboard,`doorFrame`),l(R(n-.012,.008,ve+.003,.012,be-.01,ye-ve-.006,{r:.002,maxEdge:.06}),t.whiteMatte,`doorLeaf`);let Ce=1.03,we=ve+.075;l(sr([or(.026,0,.007,24).rotateZ(Math.PI/2).translate(n-.012,Ce,we),or(.0095,0,.05,16).rotateZ(Math.PI/2).translate(n-.012,Ce,we),ir([new M(n-.057,Ce,we),new M(n-.06,Ce,we+.02),new M(n-.06,Ce,we+.12)],.0095,{tubular:14,radial:12}),or(.024,0,.006,24).rotateZ(Math.PI/2).translate(n-.012,.9450000000000001,we)]),t.metal,`doorHandle`);let Te=(e,n,r,i,a,o=!1)=>{let s=e=>o?nr(.056,.056,.005,{r:.002,rs:2}).rotateX(.045).translate(e,0,.0105):R(e-.028,-.028,.009,.056,.056,8e-4,{r:.002,rs:2}),c=[R(-.0405,-.0405,0,.081,.081,.009,{r:.004,rs:3}),s(0)];a&&c.push(R(.0405,-.0405,0,.081,.081,.009,{r:.004,rs:3}),s(.081));let u=l(sr(c),t.plasticWhite,`plate`);return u.position.set(e,n,r),u.rotation.y=i,u};Te(n,1.08,ve-.2,-Math.PI/2,!1,!0),Te(3.2,.32,0,0,!0),Te(0,.3,1.65,Math.PI/2,!1);let Ee=t.silicone||t.plasticWhite,N=t.caulk||t.baseboard,De=t.shadowGap||t.rubber,Oe=t.handle||t.frame,ke=o.y0+.002,Ae=.0068,je={r:.0012,rs:1,maxEdge:.12};l(sr([nr(Ae,o.y1-ke,Ae,je).rotateY(Math.PI/4).translate(o.x0,(o.y1+ke)/2,g),nr(Ae,o.y1-ke,Ae,je).rotateY(Math.PI/4).translate(o.x1,(o.y1+ke)/2,g),nr(u,Ae,Ae,je).rotateX(Math.PI/4).translate((o.x0+o.x1)/2,o.y1,g),nr(u,Ae,Ae,je).rotateX(Math.PI/4).translate((o.x0+o.x1)/2,ke,g)]),Ee,`winSeal`);let Me=.0016,Ne=.0028,Pe=8e-4;l(sr([b(D-Me,O-Me,2*Me,ne-O+2*Me,g,Ne,Pe),b(te-Me,O-Me,2*Me,ne-O+2*Me,g,Ne,Pe),b(D-Me,O-Me,te-D+2*Me,2*Me,g,Ne,Pe),b(D-Me,ne-Me,te-D+2*Me,2*Me,g,Ne,Pe)]),t.rubber,`winSashSeal`);let Fe={r:.0055,rs:3};l(sr([R(te+5e-4,O+.014,g-.002,.017,.062,.022,Fe),R(te+5e-4,ne-.084,g-.002,.017,.07,.022,Fe)]),Oe,`winHinges`);let Ie=[],Le=(e,t,n,r,i)=>Ie.push(nr(n,.0013,8e-4,{r:3e-4,rs:1}).rotateZ(i).translate(e,t,r)),Re=re+ie,ze=.061*Math.SQRT2,Be=.053*Math.SQRT2,P=Math.PI/4;Le(D+k/2,O+k/2,ze,Re,P),Le(te-k/2,ne-k/2,ze,Re,P),Le(te-k/2,O+k/2,ze,Re,-P),Le(D+k/2,ne-k/2,ze,Re,-P),Le(o.x0+v/2,o.y0+v/2,Be,g,P),Le(o.x1-v/2,o.y1-v/2,Be,g,P),Le(o.x1-v/2,o.y0+v/2,Be,g,-P),Le(o.x0+v/2,o.y1-v/2,Be,g,-P),l(sr(Ie),t.rubber,`winMitres`);let Ve=n-.012-.0075,He=ye-.002,Ue=.0072,We=[];for(let e of[.245,be-.245])We.push(or(Ue,e-.05,e-8e-4,16).translate(Ve,0,He),or(Ue,e+8e-4,e+.05,16).translate(Ve,0,He));l(sr(We),t.metal,`doorHinges`);let Ge={r:8e-4,rs:1,maxEdge:.12},Ke=.06440000000000001,qe=.0053,Je=.0052;l(sr([R(0,Ke,0,n,qe,Je,Ge),R(0,Ke,r-Je,n,qe,Je,Ge),R(0,Ke,0,Je,qe,r,Ge),R(n-Je,Ke,0,Je,qe,L.door.z0-.07,Ge),R(n-Je,Ke,L.door.z1+.07,Je,qe,r-L.door.z1-.07,Ge)]),N,`bbCaulk`);let Ye=[],Xe=[],Ze=(e,t,n,r,i)=>{let a=new c().makeRotationY(r).setPosition(e,t,n);for(let e=0;e<i;e++){let t=e*.081;Ye.push(ar([[.0238,.0094],[.0238,.0118],[.0228,.0128],[.0206,.0128],[.0196,.0121],[.0196,.0101]],28).rotateX(Math.PI/2).translate(t,0,0).applyMatrix4(a),new se(.0197,28).translate(t,0,.0101).applyMatrix4(a));for(let e of[-1,1])Xe.push(new se(.0026,12).translate(t+e*.0095,0,.0104).applyMatrix4(a))}};Ze(3.2,.32,0,0,2),Ze(0,.3,1.65,Math.PI/2,1),l(sr(Ye),t.plasticWhite,`socketRims`);let Qe={r:4e-4,rs:1,maxEdge:.3};return Xe.push(R(n-.0065,0,ve-2e-4,.0065,be,.0034,Qe),R(n-.0065,0,ye-.0032,.0065,be,.0034,Qe),R(n-.0065,be-.0024,ve,.0065,.0026,ye-ve,Qe),R(n-.009,2e-4,ve,.009,.0078,ye-ve,Qe),or(.0034,0,8e-4,12).rotateZ(Math.PI/2).translate(n-.018,.9480000000000001,we),R(n-.0188,.937,we-.0014,8e-4,.011,.0028,{r:3e-4,rs:1})),l(sr(Xe),De,`shadowGaps`),e.bake={portal:{x0:o.x0,x1:o.x1,y0:o.y0,y1:o.y1,z:0,area:u*d},room:[5e-4,5e-4,5e-4,n-5e-4,i-5e-4,r-5e-4]},e.roomBox={min:new M(0,0,0),max:new M(n,i,r)},s}var hr=24,gr=27;try{let e=new URLSearchParams(location.search).get(`sun`);e&&([hr,gr]=e.split(`,`).map(Number))}catch{}var _r=Math.PI/180,vr=new M(Math.sin(hr*_r)*Math.cos(gr*_r),Math.sin(gr*_r),-Math.cos(hr*_r)*Math.cos(gr*_r)).normalize(),yr={az:hr,el:gr,dir:vr.toArray(),color:[1,.89,.74],E:3.4,radius:.0047},br=()=>yr.color.map(e=>e*yr.E),xr={zenith:[.13,.26,.62],horizon:[.62,.74,.93],glow:[.5,.38,.22],halo:[1.6,1.25,.8],haloK:14,glowDir:yr.dir,ground:[.035,.045,.03],display:.3};function Sr(){let e=new t({side:1,depthWrite:!1,fog:!1,uniforms:{uTime:F.uniforms.uTime,uExt:F.uniforms.giExt,uSunDisk:F.uniforms.giSunDisk,uZenith:{value:new M(...xr.zenith)},uHorizon:{value:new M(...xr.horizon)},uGlow:{value:new M(...xr.glow)},uHalo:{value:new M(...xr.halo)},uSunDir:{value:new M(...yr.dir)},uGround:{value:new M(...xr.ground)},uSunCol:{value:new M(...br())},uSunCos:{value:Math.cos(yr.radius)}},vertexShader:`varying vec3 vD; void main(){ vD = position; vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0); gl_Position = p.xyww; }`,fragmentShader:`
      precision highp float;
      varying vec3 vD; uniform float uTime, uExt, uSunDisk, uSunCos; uniform vec3 uZenith, uHorizon, uGlow, uHalo, uSunDir, uGround, uSunCol;
      float h(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
      float n2(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
      const mat2 ROT = mat2(0.8, 0.6, -0.6, 0.8);
      float fbm3(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 3; i++) { s += a * n2(p); p = ROT * p * 2.03 + 7.1; a *= .5; } return s / 0.875; }
      float fbm5(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 5; i++) { s += a * n2(p); p = ROT * p * 2.03 + 7.1; a *= .5; } return s / 0.97; }
      void main(){
        vec3 d = normalize(vD);
        if (d.y < 0.0) { gl_FragColor = vec4(mix(uHorizon * 0.6, uGround, smoothstep(0.0, -0.12, d.y)) * uExt, 1.0); return; }
        float t = sqrt(d.y);
        float g = max(dot(d, uSunDir), 0.0), g2 = g * g, gh = pow(g, ${xr.haloK.toFixed(1)});
        // the analytic sky of the bake ...
        vec3 base = mix(uHorizon, uZenith, t) + uGlow * g2 + uHalo * gh;
        // ... with the structure a clear morning sky has: deeper blue away from the sun, a pale band at the horizon
        vec3 sky = base * mix(vec3(0.86, 0.92, 1.04), vec3(1.0), smoothstep(-0.2, 0.7, dot(d, uSunDir)));
        sky = mix(sky, uHorizon * vec3(1.02, 1.01, 0.98), exp(-d.y * 14.0) * 0.45);
        vec2 drift = vec2(uTime * 0.006, uTime * 0.0022);

        // high cirrus: a few long, thin streaks
        vec2 q = d.xz / (d.y + 0.25) * 1.1 + drift * 0.4;
        float ci = smoothstep(0.58, 0.9, fbm3(vec2(q.x * 0.7 + q.y * 0.4, q.y * 3.2 - q.x * 0.5) + 11.3)) * smoothstep(0.03, 0.25, d.y);
        sky = mix(sky, base * vec3(1.12, 1.1, 1.06) + uHalo * gh * 0.6, ci * 0.35);

        // fair-weather cumulus, low over the far trees: tops lit by the sun, grey-blue undersides, bright rims towards the sun
        vec2 p = d.xz / (d.y + 0.06) * 0.9 + drift;
        float dn = fbm5(p * 1.3 + vec2(fbm3(p * 0.6 + 2.0), fbm3(p * 0.6 + 7.0)) * 0.8);
        float band = smoothstep(0.02, 0.07, d.y) * (1.0 - smoothstep(0.18, 0.42, d.y));
        float cov = smoothstep(0.6, 0.72, dn) * band, thick = smoothstep(0.64, 0.86, dn);
        float lit = clamp(0.5 + 0.5 * (n2(p * 4.0 + 3.1) - 0.5) * 2.0 + (d.y - 0.12) * 2.0, 0.0, 1.0);
        vec3 cTop = vec3(1.25, 1.2, 1.12) + uGlow * (1.2 * g2);
        vec3 cBot = vec3(0.52, 0.58, 0.7);
        vec3 cloud = mix(cBot, cTop, lit) * mix(1.0, 0.82, thick * (1.0 - g2)) + uHalo * (gh * (1.0 - thick) * 1.5);
        sky = mix(sky, cloud, cov * 0.9);

        // the sun itself (left out of the light probes and the reflections: there the sun is a light of its own)
        if (uSunDisk > 0.0 && dot(d, uSunDir) > uSunCos * 0.99999) {
          float r = acos(clamp(dot(d, uSunDir), -1.0, 1.0)) / acos(uSunCos);
          float limb = 1.0 - 0.55 * (1.0 - sqrt(max(0.0, 1.0 - r * r)));
          sky += uSunCol * (2400.0 * limb * smoothstep(1.0, 0.92, r) * uSunDisk * (1.0 - cov * 0.97));
        }
        gl_FragColor = vec4(sky * uExt * 0.3, 1.0);
      }`}),n=new C(new We(1,48,24),e);return n.name=`sky`,n.frustumCulled=!1,n.renderOrder=-10,n.userData.gi=!1,n.userData.bakeOccluder=!1,e.userData.bake={ignore:!0},n}var Cr=`modulepreload`,wr=function(e,t){return new URL(e,t).href},Tr={},Er=function(e){return e.pathname.endsWith(`.css`)},Dr=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Or=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=wr(t,n);let r=s(t),i=Er(r);return Dr(Tr,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Cr,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},kr=Object.assign({"./parts/bed.js":()=>Or(()=>import(`./bed-Ig-MIe2I.js`),__vite__mapDeps([0,1]),import.meta.url),"./parts/clutter.js":()=>Or(()=>import(`./clutter-DHevLKD7.js`),__vite__mapDeps([2,1]),import.meta.url),"./parts/decor.js":()=>Or(()=>import(`./decor-By-ybW0o.js`),__vite__mapDeps([3,1]),import.meta.url),"./parts/desk.js":()=>Or(()=>import(`./desk-C641Usrq.js`),__vite__mapDeps([4,1]),import.meta.url),"./parts/exterior.js":()=>Or(()=>import(`./exterior-CX6r3nJg.js`),__vite__mapDeps([5,1]),import.meta.url),"./parts/fixtures.js":()=>Or(()=>import(`./fixtures-Ba2ujtkr.js`),__vite__mapDeps([6,1]),import.meta.url),"./parts/plants.js":()=>Or(()=>import(`./plants-CLtTb6T_.js`),__vite__mapDeps([7,1]),import.meta.url)});async function Ar(e=()=>{}){let t=new D,n={M:Hn(),rng:new Bt(20261112),scene:t,colliders:[],animated:[]};e(`walls`),t.add(mr(n)),t.add(Sr());let r=new URLSearchParams(location.search).get(`only`),i=r?r.split(`,`):null,a=[];for(let e in kr){let t=e.split(`/`).pop().replace(`.js`,``);(!i||i.includes(t))&&a.push(await kr[e]())}a.sort((e,t)=>(e.order||0)-(t.order||0));for(let r of a){e(r.label||`things`);let i=await r.build(n);i&&t.add(i),await new Promise(e=>setTimeout(e,0))}return n.bake.sky=xr,n.bake.maxDepth=9,n.bake.sun={dir:yr.dir,E:br(),cos:Math.cos(yr.radius),zCut:-.33},{scene:t,ctx:n}}var jr=new st;jr.setAttribute(`position`,new P([-1,-1,0,3,-1,0,-1,3,0],3)),jr.setAttribute(`uv`,new P([0,0,2,0,0,2],2));var Mr=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,Nr=class{constructor(e,n,r={}){this.mat=new t({vertexShader:Mr,fragmentShader:e,uniforms:n,depthTest:!1,depthWrite:!1,...r}),this.mesh=new C(jr,this.mat),this.mesh.frustumCulled=!1,this.cam=new i}get u(){return this.mat.uniforms}render(e,t){e.setRenderTarget(t),e.render(this.mesh,this.cam)}},Pr=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tDepth; uniform mat4 uProj; uniform mat4 uProjInv; uniform vec2 uRes; uniform float uRadius; uniform float uFrame; uniform float uNear; uniform float uFar;
vec3 viewPos(vec2 uv){ float d = texture2D(tDepth, uv).x; vec4 c = uProjInv * vec4(uv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); return c.xyz / c.w; }
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void main(){
  float d0 = texture2D(tDepth, vUv).x;
  if (d0 >= 0.99999) { gl_FragColor = vec4(1.0); return; }
  vec3 P = viewPos(vUv);
  vec2 px = 1.0 / uRes;
  vec3 dxa = viewPos(vUv + vec2(px.x, 0.0)) - P, dxb = P - viewPos(vUv - vec2(px.x, 0.0));
  vec3 dya = viewPos(vUv + vec2(0.0, px.y)) - P, dyb = P - viewPos(vUv - vec2(0.0, px.y));
  vec3 dx = abs(dxa.z) < abs(dxb.z) ? dxa : dxb, dy = abs(dya.z) < abs(dyb.z) ? dya : dyb;
  vec3 N = normalize(cross(dx, dy));
  float n1 = ign(gl_FragCoord.xy + uFrame * 5.588238), n2 = ign(gl_FragCoord.yx * 1.37 + 31.7 + uFrame * 3.17);
  vec3 rv = normalize(vec3(cos(n1 * 6.2831853), sin(n1 * 6.2831853), 0.0));
  vec3 T = normalize(rv - N * dot(rv, N)), B = cross(N, T);
  float occ = 0.0, wsum = 0.0;
  const int NS = 14;
  for (int i = 0; i < NS; i++) {
    float fi = (float(i) + n2) / float(NS);
    float a = float(i) * 2.399963 + n1 * 6.2831853;
    float cz = sqrt(1.0 - fi * 0.92), sr = sqrt(1.0 - cz * cz);
    vec3 dir = T * (cos(a) * sr) + B * (sin(a) * sr) + N * cz;
    float rad = uRadius * mix(0.12, 1.0, fract(fi * 7.31 + n1) * fract(fi * 7.31 + n1));
    vec3 S = P + dir * rad + N * 0.004;
    vec4 c = uProj * vec4(S, 1.0); vec2 suv = c.xy / c.w * 0.5 + 0.5;
    if (suv.x < 0.0 || suv.x > 1.0 || suv.y < 0.0 || suv.y > 1.0) continue;
    float sz = viewPos(suv).z;
    float diff = sz - S.z;                       // >0: geometry in front of the sample
    float range = smoothstep(0.0, 1.0, uRadius / max(1e-4, abs(P.z - sz)));
    occ += step(0.0025, diff) * range * cz; wsum += cz;
  }
  float ao = 1.0 - occ / max(wsum, 1e-4);
  gl_FragColor = vec4(ao, -P.z, 0.0, 1.0);
}`,Fr=`
precision highp float;
varying vec2 vUv; uniform sampler2D tAO; uniform vec2 uDir;
void main(){
  vec4 c = texture2D(tAO, vUv); float z = c.y; float s = c.x, w = 1.0;
  for (int i = -3; i <= 3; i++) { if (i == 0) continue;
    vec4 t = texture2D(tAO, vUv + uDir * float(i) * 1.3);
    float k = exp(-abs(t.y - z) / (0.02 * z + 0.002)) * (1.0 - abs(float(i)) * 0.18);
    s += t.x * k; w += k; }
  gl_FragColor = vec4(s / w, z, 0.0, 1.0);
}`,Ir=`
precision highp float;
varying vec2 vUv; uniform sampler2D tColor; uniform sampler2D tAO; uniform sampler2D tDepth; uniform mat4 uInvPV;
uniform float uAO; uniform float uWeight; uniform float uExt; uniform int uPart;   // uPart 0: all (outside * uExt), 1: room only, 2: outside only
void main(){
  vec3 c = texture2D(tColor, vUv).rgb; float ao = texture2D(tAO, vUv).x;
  float d = texture2D(tDepth, vUv).x;
  vec4 wp = uInvPV * vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0);
  float isExt = (d >= 0.99999 || wp.z / wp.w < -0.33) ? 1.0 : 0.0;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float k = mix(1.0, ao, uAO * (1.0 - smoothstep(0.6, 2.5, l)) * (1.0 - 0.5 * isExt));
  vec3 o = min(c, vec3(60.0)) * k * uWeight;
  if (uPart == 0) o *= mix(1.0, uExt, isExt); else if (uPart == 1) o *= 1.0 - isExt; else o *= isExt;
  gl_FragColor = vec4(o, 1.0);
}`,Lr=`precision highp float; varying vec2 vUv; uniform sampler2D tA; uniform sampler2D tB; uniform float uK; void main(){ gl_FragColor = vec4(texture2D(tA, vUv).rgb + texture2D(tB, vUv).rgb * uK, 1.0); }`,Rr=`
precision highp float;
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThresh;
void main(){
  vec3 a = texture2D(tSrc, vUv).rgb * 4.0;
  a += texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb
     + texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  a /= 8.0;
  if (uThresh > 0.0) { float l = max(a.r, max(a.g, a.b)); a *= smoothstep(uThresh * 0.5, uThresh * 2.0, l); }
  gl_FragColor = vec4(a, 1.0);
}`,zr=`
precision highp float;
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uTexel;
void main(){
  vec3 s = texture2D(tSrc, vUv + uTexel * vec2(-1.0, 0.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 0.0)).rgb
         + texture2D(tSrc, vUv + uTexel * vec2(0.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(0.0, 1.0)).rgb;
  s = s * 2.0 + texture2D(tSrc, vUv + uTexel * vec2(-1.0, -1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, -1.0)).rgb
    + texture2D(tSrc, vUv + uTexel * vec2(-1.0, 1.0)).rgb + texture2D(tSrc, vUv + uTexel * vec2(1.0, 1.0)).rgb;
  gl_FragColor = vec4(s / 12.0, 1.0);
}`,Br=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tBloom;
uniform float uExposure, uBloom, uVignette, uGrain, uSeed, uSat, uContrast, uPeak, uFade, uVib, uShoulder;
uniform vec3 uShadowTint, uMidTint, uHighTint, uWB;
uniform int uMode; // 0 = sRGB 8-bit, 1 = PQ BT.2020
uniform vec2 uRes;
float luma(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
// Uchimura filmic curve; P = peak output. Same toe/linear section for SDR and HDR so the two grades match.
float uchi(float x, float P){
  const float a = 1.0, m = 0.22, l = 0.4, c = 1.33, b = 0.0;
  float l0 = ((P - m) * l) / a, S0 = m + l0, S1 = m + a * l0, C2 = (a * P) / (P - S1), CP = -C2 / P;
  float w0 = 1.0 - smoothstep(0.0, m, x), w2 = step(m + l0, x), w1 = 1.0 - w0 - w2;
  float T = m * pow(x / m, c) + b, Lc = m + a * (x - m), Sc = P - (P - S1) * exp(CP * (x - S0));
  // sum-animals: a longer shoulder (rational, same slope where it starts): a sunbeam on a white duvet keeps its weave
  float y = max(x - S0, 0.0) * a / (P - S1);
  Sc = mix(Sc, S1 + (P - S1) * y / (1.0 + y), uShoulder);
  return T * w0 + Lc * w1 + Sc * w2;
}
vec3 tonemap(vec3 c, float P){
  float l = max(luma(c), 1e-5), lt = uchi(l, P);
  vec3 byLum = c * (lt / l);
  vec3 byCh = vec3(uchi(c.r, P), uchi(c.g, P), uchi(c.b, P));
  vec3 o = mix(byLum, byCh, 0.55);
  // roll saturated highlights towards white instead of clipping to a primary
  float over = smoothstep(0.75 * P, 1.05 * P, max(o.r, max(o.g, o.b)));
  return mix(o, vec3(min(luma(o), P)), over * 0.6);
}
vec3 pq(vec3 nits){ vec3 y = pow(clamp(nits / 10000.0, 0.0, 1.0), vec3(0.1593017578125)); return pow((0.8359375 + 18.8515625 * y) / (1.0 + 18.6875 * y), vec3(78.84375)); }
vec3 srgb(vec3 c){ return mix(c * 12.92, 1.055 * pow(max(c, 0.0), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main(){
  vec3 c = texture2D(tColor, vUv).rgb;
  c += texture2D(tBloom, vUv).rgb * uBloom;
  c *= uExposure * uWB;
  // vignette (in light, before the curve)
  vec2 q = vUv - 0.5; q.x *= uRes.x / uRes.y * 0.82;
  c *= mix(1.0, smoothstep(1.05, 0.25, length(q)), uVignette);
  // look: tint by tonal range, saturation, contrast around mid grey
  float l = luma(c);
  float sh = 1.0 - smoothstep(0.0, 0.25, l), hi = smoothstep(0.35, 1.6, l);
  c *= mix(mix(uMidTint, uShadowTint, sh), uHighTint, hi);
  l = luma(c);
  float gm = clamp((c.g - max(c.r, c.b)) / max(l, 1e-4), 0.0, 1.0);   // how 'foliage green' this pixel is
  c = mix(vec3(l), c, uSat * (1.0 + uVib * gm));
  c.r += gm * uVib * 0.10 * l;
  c = pow(max(c, 0.0) / 0.18, vec3(uContrast)) * 0.18;
  c *= uFade;
  if (uMode == 0) {
    c = tonemap(c, 1.0);
    c = srgb(clamp(c, 0.0, 1.0));
    float g = hash(gl_FragCoord.xy + uSeed * 91.7) - 0.5;
    c += g * (uGrain * (1.0 - 0.6 * luma(c)) + 1.0 / 255.0);
    gl_FragColor = vec4(c, 1.0);
  } else {
    c = tonemap(c, uPeak / 203.0);            // 1.0 == SDR reference white == 203 nits
    c = mat3(0.6274, 0.0691, 0.0164, 0.3293, 0.9195, 0.0880, 0.0433, 0.0114, 0.8956) * c; // 709 -> 2020
    vec3 e = pq(max(c, 0.0) * 203.0);
    float g = hash(gl_FragCoord.xy + uSeed * 91.7) - 0.5;
    e += g * (uGrain * 0.35 + 1.0 / 1023.0);
    gl_FragColor = vec4(e, 1.0);
  }
}`,Vr=`precision highp float; varying vec2 vUv; uniform sampler2D tSrc; uniform float uWeight; void main(){ gl_FragColor = vec4(texture2D(tSrc, vUv).rgb * uWeight, 1.0); }`,Hr=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tDepth; uniform mat4 uInvPV; uniform vec3 uCam;
uniform sampler2D uSunMap; uniform sampler2D uSunMapD; uniform mat4 uSunMat; uniform vec4 uSunTex;
uniform sampler2DShadow uCatMap; uniform mat4 uCatMat; uniform float uCatOn;
uniform vec3 uSunDir; uniform vec3 uSunCol; uniform float uDensity; uniform float uFrame; uniform vec3 uBoxMin; uniform vec3 uBoxMax;
float ign(vec2 p){ return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }
void main(){
  float d = texture2D(tDepth, vUv).x;
  vec4 wp = uInvPV * vec4(vUv * 2.0 - 1.0, d * 2.0 - 1.0, 1.0); wp.xyz /= wp.w;
  vec3 ro = uCam, rd = wp.xyz - ro; float tEnd = length(rd); rd /= max(tEnd, 1e-5);
  vec3 iv = 1.0 / (rd + vec3(1e-7)), ta = (uBoxMin - ro) * iv, tb = (uBoxMax - ro) * iv, tn = min(ta, tb), tf = max(ta, tb);
  float a = max(max(tn.x, tn.y), max(tn.z, 0.0)), b = min(min(tf.x, tf.y), min(tf.z, tEnd));
  if (b <= a) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  const int N = VOL_STEPS;
  float dt = (b - a) / float(N), j = ign(gl_FragCoord.xy + mod(uFrame, 32.0) * 5.588238), acc = 0.0;
  for (int i = 0; i < N; i++) {
    vec3 p = ro + rd * (a + (float(i) + j) * dt);
    vec3 s = (uSunMat * vec4(p, 1.0)).xyz;
    if (s.x <= 0.0 || s.x >= 1.0 || s.y <= 0.0 || s.y >= 1.0 || s.z >= 1.0) continue;
    float z = s.z - uSunTex.y * 2.0;
    float v = step(z, textureLod(uSunMap, s.xy, 0.0).r) * step(z, textureLod(uSunMapD, s.xy, 0.0).r);
    if (v > 0.0 && uCatOn > 0.5) {
      vec4 c = uCatMat * vec4(p, 1.0); c.xyz /= c.w;
      if (c.x > 0.0 && c.x < 1.0 && c.y > 0.0 && c.y < 1.0 && c.z < 1.0) v *= textureLod(uCatMap, vec3(c.xy, c.z - 0.001), 0.0);
    }
    acc += v;
  }
  float mu = dot(rd, uSunDir), g = 0.5;
  float hg = (1.0 - g * g) / (12.566371 * pow(max(1.0 + g * g - 2.0 * g * mu, 1e-4), 1.5));
  gl_FragColor = vec4(uSunCol * (acc * dt * uDensity * mix(0.0796, hg, 0.6)), 1.0);
}`,Ur=`
precision highp float;
varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 uDir;
void main(){
  vec3 s = texture2D(tSrc, vUv).rgb * 0.2270;
  s += (texture2D(tSrc, vUv + uDir * 1.3846).rgb + texture2D(tSrc, vUv - uDir * 1.3846).rgb) * 0.3162;
  s += (texture2D(tSrc, vUv + uDir * 3.2308).rgb + texture2D(tSrc, vUv - uDir * 3.2308).rgb) * 0.0703;
  gl_FragColor = vec4(s, 1.0);
}`,Wr=`precision highp float; varying vec2 vUv; uniform sampler2D tSrc; void main(){ vec3 c = texture2D(tSrc, vUv).rgb; float l = dot(c, vec3(0.2126, 0.7152, 0.0722)); gl_FragColor = vec4(log(max(l, 1e-6)), l, 0.0, 1.0); }`,Gr=class{constructor(e,t,n){this.r=e,this.scene=t,this.camera=n,this.look={exposure:1,bloom:.055,vignette:.28,grain:.012,sat:1,contrast:1,peak:1e3,shadowTint:new g(.92,.98,1.1),midTint:new g(1,1,1),highTint:new g(1,1,1),wb:new g(1,1,1),ao:.85,aoRadius:.16,bloomThresh:0,fade:1,ext:.21,extHdr:.55,vib:.5},this.ao=new Nr(Pr,{tDepth:{value:null},uProj:{value:new c},uProjInv:{value:new c},uRes:{value:new N},uRadius:{value:.16},uFrame:{value:0},uNear:{value:.1},uFar:{value:100}}),this.aoBlur=new Nr(Fr,{tAO:{value:null},uDir:{value:new N}}),this.comp=new Nr(Ir,{tColor:{value:null},tAO:{value:null},tDepth:{value:null},uInvPV:{value:new c},uAO:{value:1},uWeight:{value:1},uExt:{value:1},uPart:{value:0}}),this.combine=new Nr(Lr,{tA:{value:null},tB:{value:null},uK:{value:1}}),this.compAdd=new Nr(Ir,this.comp.mat.uniforms,{blending:5,blendEquation:100,blendSrc:201,blendDst:201}),this.down=new Nr(Rr,{tSrc:{value:null},uTexel:{value:new N},uThresh:{value:0}}),this.up=new Nr(zr,{tSrc:{value:null},uTexel:{value:new N}},{blending:5,blendEquation:100,blendSrc:201,blendDst:201}),this.copy=new Nr(Vr,{tSrc:{value:null},uWeight:{value:1}}),this.final=new Nr(Br,{tColor:{value:null},tBloom:{value:null},uExposure:{value:1},uBloom:{value:.05},uVignette:{value:.3},uGrain:{value:.01},uSeed:{value:0},uSat:{value:1},uVib:{value:.5},uContrast:{value:1},uPeak:{value:1e3},uFade:{value:1},uShadowTint:{value:new g},uMidTint:{value:new g},uHighTint:{value:new g},uWB:{value:new g},uMode:{value:0},uRes:{value:new N},uShoulder:{value:0}}),this.frame=0,this.w=0,this.h=0,this.msaa=4,this.vol=null,this.volOn=!1,this.meter=new Nr(Wr,{tSrc:{value:null}}),this.meterLum=0,this.meterHi=0,this.meterBusy=!1,this.meterT=0,this.meterSpot=0}setVolume(e){if(!e){this.volOn=!1;return}let t=e.sun;this.volDensity=e.density??.02;let n=n=>new Nr(Hr.replace(`VOL_STEPS`,String(n)),{tDepth:{value:null},uInvPV:{value:new c},uCam:{value:new M},uSunMap:t.map,uSunMapD:t.mapD,uSunMat:t.mat,uSunTex:t.tex,uCatMap:t.catMap,uCatMat:t.catMat,uCatOn:t.catOn,uSunDir:t.dir,uSunCol:t.col,uDensity:{value:this.volDensity},uFrame:{value:0},uBoxMin:{value:e.boxMin.clone()},uBoxMax:{value:e.boxMax.clone()}});this.vol=n(e.steps||40),this.volBlur=new Nr(Ur,{tSrc:{value:null},uDir:{value:new N}}),this.volAdd=new Nr(Vr,{tSrc:{value:null},uWeight:{value:1}},{blending:5,blendEquation:100,blendSrc:201,blendDst:201}),this.volOn=!0}_volume(){if(!this.volOn||!this.vol)return;let e=this.r,t=this.camera,n=Math.ceil(this.w/2),r=Math.ceil(this.h/2);if(!this.rtVol||this.rtVol.width!==n||this.rtVol.height!==r){this.rtVol&&(this.rtVol.dispose(),this.rtVol2.dispose());let e={type:Qe,minFilter:j,magFilter:j,depthBuffer:!1};this.rtVol=new ot(n,r,e),this.rtVol2=new ot(n,r,e)}let i=this.vol.u;i.tDepth.value=this.rtMain.depthTexture,i.uInvPV.value.multiplyMatrices(t.matrixWorld,t.projectionMatrixInverse),i.uCam.value.setFromMatrixPosition(t.matrixWorld),i.uFrame.value=this.frame,i.uDensity.value=this.volDensity,this.vol.render(e,this.rtVol),this.volBlur.u.tSrc.value=this.rtVol.texture,this.volBlur.u.uDir.value.set(1/n,0),this.volBlur.render(e,this.rtVol2),this.volBlur.u.tSrc.value=this.rtVol2.texture,this.volBlur.u.uDir.value.set(0,1/r),this.volBlur.render(e,this.rtVol);let a=e.autoClear;e.autoClear=!1,this.volAdd.u.tSrc.value=this.rtVol.texture,this.volAdd.render(e,this.rtComp),e.autoClear=a}_meter(){let e=this.mips[this.mips.length-1],t=this.r;if(!e||this.meterBusy||!t.readRenderTargetPixelsAsync)return;this.rtMeter&&this.rtMeter.width===e.width&&this.rtMeter.height===e.height||(this.rtMeter&&this.rtMeter.dispose(),this.rtMeter=new ot(e.width,e.height,{type:Je,minFilter:f,magFilter:f,depthBuffer:!1}),this.meterBuf=new Float32Array(e.width*e.height*4)),this.meter.u.tSrc.value=e.texture,this.meter.render(t,this.rtMeter);let n=e.width,r=e.height,i=this.meterBuf;this.meterBusy=!0,t.readRenderTargetPixelsAsync(this.rtMeter,0,0,n,r,i).then(()=>{let e=0,t=0,a=new Float32Array(n*r),o=3.5+36*this.meterSpot,s=5+36*this.meterSpot;for(let c=0;c<r;c++)for(let l=0;l<n;l++){let u=(l+.5)/n-.5,d=(c+.5)/r-.5,f=Math.exp(-(u*u*o+d*d*s));e+=i[(c*n+l)*4]*f,t+=f,a[c*n+l]=i[(c*n+l)*4+1]}this.meterLum=Math.exp(e/t),a.sort(),this.meterHi=a[Math.min(a.length-1,Math.floor(a.length*.95))]}).catch(()=>{}).finally(()=>{this.meterBusy=!1})}setSize(e,t,{msaa:n=4}={}){if(e===this.w&&t===this.h&&n===this.msaa)return;this.dispose(),this.w=e,this.h=t,this.msaa=n;let r={type:Qe,minFilter:j,magFilter:j,depthBuffer:!1};this.rtMain=new ot(e,t,{...r,depthBuffer:!0,samples:n}),this.rtMain.depthTexture=new ze(e,t,Fe),this.rtMain.depthTexture.minFilter=this.rtMain.depthTexture.magFilter=f;let i=Math.ceil(e/2),a=Math.ceil(t/2),o={...r,minFilter:j};this.rtAO=new ot(i,a,o),this.rtAO2=new ot(i,a,o),this.rtComp=new ot(e,t,r),this.mips=[];let s=e,c=t;for(let e=0;e<6;e++)s=Math.max(2,Math.ceil(s/2)),c=Math.max(2,Math.ceil(c/2)),this.mips.push(new ot(s,c,r));this.rtAccum=null,this.rtOut=null}dispose(){for(let e of[`rtMain`,`rtAO`,`rtAO2`,`rtComp`,`rtAccum`,`rtAccumExt`,`rtComb`,`rtOut`,`rtSdr`,`rtVol`,`rtVol2`,`rtMeter`])this[e]&&(this[e].dispose(),this[e]=null);this.mips&&this.mips.forEach(e=>e.dispose()),this.mips=[],this.w=0}_sceneAndAO(e,t,n){let r=this.r,i=this.camera,a=this.look;r.setRenderTarget(this.rtMain),r.clear(),r.render(this.scene,i);let o=this.rtAO.width,s=this.rtAO.height,c=this.ao.u;c.tDepth.value=this.rtMain.depthTexture,c.uProj.value.copy(i.projectionMatrix),c.uProjInv.value.copy(i.projectionMatrixInverse),c.uRes.value.set(o,s),c.uRadius.value=a.aoRadius,c.uFrame.value=this.frame%64,this.ao.render(r,this.rtAO),this.aoBlur.u.tAO.value=this.rtAO.texture,this.aoBlur.u.uDir.value.set(1/o,0),this.aoBlur.render(r,this.rtAO2),this.aoBlur.u.tAO.value=this.rtAO2.texture,this.aoBlur.u.uDir.value.set(0,1/s),this.aoBlur.render(r,this.rtAO);let l=this.comp.u;l.tColor.value=this.rtMain.texture,l.tAO.value=this.rtAO.texture,l.uAO.value=a.ao,l.uWeight.value=t,l.tDepth.value=this.rtMain.depthTexture,l.uInvPV.value.multiplyMatrices(i.matrixWorld,i.projectionMatrixInverse),l.uExt.value=a.ext,l.uPart.value=0,(n?this.compAdd:this.comp).render(r,e),this.frame++}_sync(){F.uniforms.giExt.value=1}_combine(e){this.rtComb||=new ot(this.w,this.h,{type:Qe,minFilter:j,magFilter:j,depthBuffer:!1});let t=this.combine.u;return t.tA.value=this.rtAccum.texture,t.tB.value=this.rtAccumExt.texture,t.uK.value=e,this.combine.render(this.r,this.rtComb),this.rtComb}_bloom(e){let t=this.r,n=e;for(let e=0;e<this.mips.length;e++){let r=this.mips[e];this.down.u.tSrc.value=n.texture,this.down.u.uTexel.value.set(1/n.width,1/n.height),this.down.u.uThresh.value=e===0?this.look.bloomThresh:0,this.down.render(t,r),n=r}let r=t.autoClear;t.autoClear=!1;for(let e=this.mips.length-1;e>0;e--){let n=this.mips[e],r=this.mips[e-1];this.up.u.tSrc.value=n.texture,this.up.u.uTexel.value.set(1/n.width,1/n.height),this.up.render(t,r)}return t.autoClear=r,this.mips[0]}_final(e,t,n,r){let i=this.final.u,a=this.look;i.tColor.value=e.texture,i.tBloom.value=t.texture,i.uExposure.value=a.exposure,i.uBloom.value=a.bloom/this.mips.length*6,i.uVignette.value=a.vignette,i.uGrain.value=a.grain,i.uSeed.value=this.frame*.37%17,i.uSat.value=a.sat,i.uVib.value=a.vib,i.uContrast.value=a.contrast,i.uPeak.value=a.peak,i.uFade.value=a.fade,i.uShadowTint.value.copy(a.shadowTint),i.uMidTint.value.copy(a.midTint),i.uHighTint.value.copy(a.highTint),i.uWB.value.copy(a.wb),i.uShoulder.value=a.shoulder??0,i.uMode.value=r,i.uRes.value.set(this.w,this.h),this.final.render(this.r,n)}render(){this._sync(),this._sceneAndAO(this.rtComp,1,!1),this._volume();let e=this._bloom(this.rtComp);++this.meterT%6==0&&this._meter(),this._final(this.rtComp,e,null,0)}renderAccum(e,t,n=0){let r=this.r;this.rtAccum||=new ot(this.w,this.h,{type:Je,minFilter:j,magFilter:j,depthBuffer:!1}),this.rtAccumExt||=new ot(this.w,this.h,{type:Qe,minFilter:j,magFilter:j,depthBuffer:!1}),r.setClearColor(0,1),r.setRenderTarget(this.rtAccum),r.clear(),r.setRenderTarget(this.rtAccumExt),r.clear(),this._sync();for(let n=0;n<e;n++)t(n,e),this._sceneAndAOAccum(1/e);return this.present(n)}present(e){let t=this._combine(e===1?this.look.extHdr:this.look.ext),n=this._bloom(t);return e===0?(this._final(t,n,null,0),null):e===1?(this.rtOut||=new ot(this.w,this.h,{type:Qe,minFilter:f,magFilter:f,depthBuffer:!1}),this._final(t,n,this.rtOut,1),this.rtOut):(this.rtSdr||=new ot(this.w,this.h,{type:Ce,minFilter:f,magFilter:f,depthBuffer:!1}),this._final(t,n,this.rtSdr,0),this.rtSdr)}_sceneAndAOAccum(e){let t=this.r,n=t.autoClear;t.autoClear=!0;let r=this.camera,i=this.look;t.setRenderTarget(this.rtMain),t.clear(),t.render(this.scene,r);let a=this.rtAO.width,o=this.rtAO.height,s=this.ao.u;s.tDepth.value=this.rtMain.depthTexture,s.uProj.value.copy(r.projectionMatrix),s.uProjInv.value.copy(r.projectionMatrixInverse),s.uRes.value.set(a,o),s.uRadius.value=i.aoRadius,s.uFrame.value=this.frame%64,this.ao.render(t,this.rtAO),this.aoBlur.u.tAO.value=this.rtAO.texture,this.aoBlur.u.uDir.value.set(1/a,0),this.aoBlur.render(t,this.rtAO2),this.aoBlur.u.tAO.value=this.rtAO2.texture,this.aoBlur.u.uDir.value.set(0,1/o),this.aoBlur.render(t,this.rtAO);let c=this.comp.u;c.tColor.value=this.rtMain.texture,c.tAO.value=this.rtAO.texture,c.uAO.value=i.ao,c.uWeight.value=e,c.tDepth.value=this.rtMain.depthTexture,c.uInvPV.value.multiplyMatrices(r.matrixWorld,r.projectionMatrixInverse),t.autoClear=!1,c.uPart.value=1,this.compAdd.render(t,this.rtAccum),c.uPart.value=2,this.compAdd.render(t,this.rtAccumExt),t.autoClear=n,this.frame++}},Kr={exposure:9.5,key:.14,hiKey:1.5,ext:.42,extHdr:.8,dust:.006,vib:.3,bloom:.05,shoulder:1,vignette:.15,grain:.012,sat:1.08,contrast:1.02,peak:1e3,ao:1,aoRadius:.16,shadowTint:[.95,.99,1.06],midTint:[1,1,1],highTint:[1.02,1,.97],wb:[1,.99,.97]};function qr(e,t={}){let n={...Kr,...t};for(let t of Object.keys(n))Array.isArray(n[t])?e.look[t]=new g(n[t][0],n[t][1],n[t][2]):e.look[t]=n[t]}var Jr=826430032,Yr=.886227,Xr=1.023328,Zr=.858086,Qr=class e{constructor(e,t,n,r){this.res=new M(e,t,n),this.depth=7*(n+2),this.data=r,this.min=new M,this.max=new M,this._c=new Float32Array(27)}setBounds(e,t){return this.min.copy(e),this.max.copy(t),this}static fromGrid(n,r){let a=r.resolution,o=a.x,s=a.y,c=a.z,l=7*(c+2),u=o*l,d=new ot(u,s,{type:Je,format:ce,depthBuffer:!1,minFilter:f,magFilter:f}),p=new t({glslVersion:ye,uniforms:{tex:{value:r.texture},nx:{value:o}},vertexShader:`void main() { gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`precision highp float; precision highp sampler3D;
        uniform sampler3D tex; uniform int nx; out vec4 o;
        void main() { ivec2 p = ivec2(gl_FragCoord.xy); int s = p.x / nx; o = texelFetch(tex, ivec3(p.x - s * nx, p.y, s), 0); }`,depthTest:!1,depthWrite:!1}),m=new st;m.setAttribute(`position`,new P([-1,-1,0,3,-1,0,-1,3,0],3));let h=new C(m,p);h.frustumCulled=!1;let g=n.getRenderTarget();n.setRenderTarget(d),n.render(h,new i);let _=new Float32Array(u*s*4);n.readRenderTargetPixels(d,0,0,u,s,_),n.setRenderTarget(g),d.dispose(),p.dispose(),m.dispose();let v=new Float32Array(_.length);for(let e=0;e<l;e++)for(let t=0;t<s;t++)for(let n=0;n<o;n++){let r=(t*u+e*o+n)*4,i=((e*s+t)*o+n)*4;v[i]=_[r],v[i+1]=_[r+1],v[i+2]=_[r+2],v[i+3]=_[r+3]}return new e(o,s,c,v).setBounds(r.boundingBox.min,r.boundingBox.max)}static fromBuffer(t){let n=new Uint32Array(t,0,4);if(n[0]!==Jr)throw Error(`not a probe file`);let r=new Float32Array(t,16,6);return new e(n[1],n[2],n[3],new Float32Array(t.slice(40))).setBounds(new M(r[0],r[1],r[2]),new M(r[3],r[4],r[5]))}toBuffer(){let e=new ArrayBuffer(40+this.data.byteLength);return new Uint32Array(e,0,4).set([Jr,this.res.x,this.res.y,this.res.z]),new Float32Array(e,16,6).set([...this.min.toArray(),...this.max.toArray()]),new Float32Array(e,40).set(this.data),e}makeTexture(){let e=new pe(this.data,this.res.x,this.res.y,this.depth);return e.format=ce,e.type=Je,e.minFilter=j,e.magFilter=j,e.wrapS=e.wrapT=e.wrapR=p,e.unpackAlignment=1,e.needsUpdate=!0,e}_addProbe(e,t,n,r){let{x:i,y:a,z:o}=this.res,s=this.data,c=this._c,l=o+2,u=[];for(let r=0;r<7;r++){let o=(((r*l+1+n)*a+t)*i+e)*4;u.push(s[o],s[o+1],s[o+2],s[o+3])}for(let e=0;e<27;e++)c[e]+=r*u[e]}irradianceAt(e,t,n=new g){let{x:r,y:i,z:a}=this.res,o=k.clamp((e.x-this.min.x)/(this.max.x-this.min.x)*r-.5,0,r-1),s=k.clamp((e.y-this.min.y)/(this.max.y-this.min.y)*i-.5,0,i-1),c=k.clamp((e.z-this.min.z)/(this.max.z-this.min.z)*a-.5,0,a-1),l=Math.floor(o),u=Math.floor(s),d=Math.floor(c),f=Math.min(l+1,r-1),p=Math.min(u+1,i-1),m=Math.min(d+1,a-1),h=o-l,_=s-u,v=c-d;this._c.fill(0);for(let[e,t]of[[l,1-h],[f,h]])for(let[n,r]of[[u,1-_],[p,_]])for(let[i,a]of[[d,1-v],[m,v]]){let o=t*r*a;o>1e-6&&this._addProbe(e,n,i,o)}let y=this._c,b=t.x,x=t.y,S=t.z,C=[Yr,Xr*x,Xr*S,Xr*b,Zr*b*x,Zr*x*S,.743125*S*S-.247708,Zr*b*S,.429043*(b*b-x*x)],w=0,T=0,E=0;for(let e=0;e<9;e++)w+=y[e*3]*C[e],T+=y[e*3+1]*C[e],E+=y[e*3+2]*C[e];return n.setRGB(Math.max(0,w),Math.max(0,T),Math.max(0,E))}},$r=4,ei=`
precision highp float;
varying vec2 vUv; uniform sampler2D tDepth;
void main(){ gl_FragDepth = texture2D(tDepth, vUv).r; gl_FragColor = vec4(0.0); }`,ti=`
	float lPh = aLeaf.z * 6.2832;
	float lTw = aLeaf.w * ( 0.22 * sin( uTime * ( 5.5 + 3.5 * aLeaf.z ) + lPh ) + 0.09 * sin( uTime * ( 13.0 + 5.0 * aLeaf.z ) + lPh * 2.7 ) );
	vec3 transformed = vec3( position );
	transformed.z += position.x * lTw * ( 0.35 + 0.65 * position.y );`,ni=`
	vec4 lW = modelMatrix * ( instanceMatrix * vec4( transformed, 1.0 ) );
	vec3 lA = ( modelMatrix * ( instanceMatrix * vec4( 0.0, 0.0, 0.0, 1.0 ) ) ).xyz;
	float lG = 0.55 + 0.45 * sin( dot( lA.xz, vec2( 0.23, 0.11 ) ) - uTime * 0.8 ) * sin( dot( lA.xz, vec2( -0.07, 0.19 ) ) - uTime * 0.37 + 1.3 );
	lW.xyz += vec3( 0.955, 0.0, -0.296 ) * ( lG * 0.05 * sin( uTime * 1.6 + dot( lA, vec3( 1.3, 0.7, 1.1 ) ) ) ) + vec3( 0.0, 0.018 * lG * sin( uTime * 2.2 + lA.x * 3.1 + lA.z * 1.7 ), 0.0 );
	vec4 mvPosition = viewMatrix * lW;
	gl_Position = projectionMatrix * mvPosition;`,ri=`
precision highp float;
varying vec2 vUv; uniform sampler2D tDepth;
void main(){
  float d = texture2D(tDepth, vUv).r;
  vec3 e = fract(d * vec3(1.0, 255.0, 65025.0)); e -= e.yzz * vec3(1.0 / 255.0, 1.0 / 255.0, 0.0);
  gl_FragColor = vec4(e, 1.0);
}`;function ii(e){let t=new ot(e,e,{format:h,type:Ce,minFilter:f,magFilter:f,depthBuffer:!0,generateMipmaps:!1});return t.depthTexture=new ze(e,e,Fe),t.depthTexture.minFilter=t.depthTexture.magFilter=f,t}var ai=class{constructor(e,n,{size:a=2048}={}){this.r=e,this.scene=n,this.size=a,this.dir=new M().fromArray(yr.dir).normalize(),this.irradiance=new g().setRGB(...br()).multiplyScalar(Math.PI);let o=L.win,s=L.wallT,l=new M((o.x0+o.x1)/2,(o.y0+o.y1)/2,-s/2),u=new v(-1,1,1,-1,.5,60);u.position.copy(l).addScaledVector(this.dir,34),u.up.set(0,1,0),u.lookAt(l),u.updateMatrixWorld(!0);let d=u.matrixWorldInverse,f=new M,p=1/0,m=-1/0,h=1/0,_=-1/0;for(let e of[o.x0,o.x1])for(let t of[o.y0,o.y1])for(let n of[-s-.03,.03])f.set(e,t,n).applyMatrix4(d),p=Math.min(p,f.x),m=Math.max(m,f.x),h=Math.min(h,f.y),_=Math.max(_,f.y);let y=Math.max(m-p,_-h)/2+.12,b=(p+m)/2,x=(h+_)/2;u.left=b-y,u.right=b+y,u.bottom=x-y,u.top=x+y;let S=0;for(let e of[0,L.W])for(let t of[0,L.H])for(let n of[0,L.D])S=Math.max(S,-f.set(e,t,n).applyMatrix4(d).z);u.far=S+.3,u.updateProjectionMatrix(),u.layers.set(3),this.cam=u,this.meters=2*y,this.range=u.far-u.near,this.mat=new c().set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(u.projectionMatrix).multiply(u.matrixWorldInverse),this.rtS=ii(a),this.rtB=ii(a),this.rtD=ii(a),this.leafMesh=null,this.copyDepth=new C(new ct(2,2),new t({vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:ei,uniforms:{tDepth:{value:this.rtB.depthTexture}},depthTest:!0,depthWrite:!0,depthFunc:1,colorWrite:!1})),this.copyDepth.frustumCulled=!1,this.copyCam=new i,this.cpu=null,this.dynamic=[],this.depthMat=new r({side:2}),this._mats=new Map;let w=F.uniforms,T=this.meters/a;w.giSunDir.value.copy(this.dir),w.giSunCol.value.copy(this.irradiance),w.giSunMat.value.copy(this.mat),w.giSunMap.value=this.rtS.depthTexture,w.giSunMapD.value=this.rtD.depthTexture,w.giSunTex.value.set(1/a,T/this.range,this.range*Math.tan(yr.radius)/this.meters,.06/this.meters),w.giSunOff.value=T*1.5,this.renderDynamic()}_depthFor(e){let t=Array.isArray(e.material)?e.material[0]:e.material;if(e.name===`leaves`&&e.isInstancedMesh&&t.map){let e=this._mats.get(`leaves`);return e||(e=new r({map:t.map,alphaTest:.5,side:2}),e.onBeforeCompile=e=>{e.uniforms.uTime=F.uniforms.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute vec4 aLeaf;
uniform float uTime;`).replace(`#include <uv_vertex>`,`#include <uv_vertex>
              vMapUv = aLeaf.xy + vec2( mix( uv.x, 1.0 - uv.x, step( 0.5, fract( aLeaf.z * 17.0 ) ) ), 1.0 - uv.y ) * 0.25;`).replace(`#include <begin_vertex>`,ti).replace(`#include <project_vertex>`,ni)},e.customProgramCacheKey=()=>`sun-leaves-wind`,this._mats.set(`leaves`,e)),e}if(t&&t.alphaTest>0&&(t.map||t.alphaMap)){let e=t.uuid,n=this._mats.get(e);return n||(n=new r({map:t.map,alphaMap:t.alphaMap,alphaTest:t.alphaTest,side:2}),this._mats.set(e,n)),n}return this.depthMat}_caster(e,t){if(!e.isMesh||e.userData.sunCaster===!1||e.name===`sky`)return!1;for(let n=e;n;n=n.parent)if(!n.visible||t.has(n)||n.name&&n.name.startsWith(`prop:`))return!1;let n=Array.isArray(e.material)?e.material[0]:e.material;return!(!n||n.transparent&&(n.depthWrite===!1||n.opacity<.6)||n.blending===2)}renderStatic(e=[]){let t=this.r,n=this.scene,r=new Set(e),i=[];n.traverse(e=>{(e.isMesh||e.isPoints||e.isLine||e.isSprite)&&(i.push([e,e.visible,e.material,e.layers.mask]),this._caster(e,r)?e.name===`leaves`&&e.isInstancedMesh?(this.leafMesh=e,this.leafMat=this._depthFor(e),e.visible=!1):(e.material=this._depthFor(e),e.layers.enable(3)):e.visible=!1)});let a={t:t.getRenderTarget(),ac:t.autoClear,bg:n.background,ov:n.overrideMaterial,cc:t.getClearColor(new g),ca:t.getClearAlpha(),sm:t.shadowMap.autoUpdate};n.background=null,n.overrideMaterial=null,t.shadowMap.autoUpdate=!1,t.setRenderTarget(this.rtB),t.autoClear=!0,t.setClearColor(0,0),t.clear(!0,!0,!0),t.render(n,this.cam);for(let[e,t,n,r]of i)e.visible=t,e.material=n,e.layers.mask=r;this.leafMesh&&this.leafMesh.layers.enable($r),n.background=a.bg,t.setRenderTarget(a.t),t.autoClear=a.ac,t.setClearColor(a.cc,a.ca),t.shadowMap.autoUpdate=a.sm,F.uniforms.giSunOn.value=1,this.updateLeaves(),this._readBack()}updateLeaves(){let e=this.r,t=this.scene,n={t:e.getRenderTarget(),ac:e.autoClear,ov:t.overrideMaterial,bg:t.background,sm:e.shadowMap.autoUpdate};if(e.shadowMap.autoUpdate=!1,e.autoClear=!1,e.setRenderTarget(this.rtS),e.render(this.copyDepth,this.copyCam),this.leafMesh&&this.leafMat){let n=this.leafMesh.visible;this.leafMesh.visible=!0,t.overrideMaterial=this.leafMat,t.background=null,this.cam.layers.set($r),e.render(t,this.cam),this.cam.layers.set(3),this.leafMesh.visible=n}t.overrideMaterial=n.ov,t.background=n.bg,e.setRenderTarget(n.t),e.autoClear=n.ac,e.shadowMap.autoUpdate=n.sm}addDynamic(e){e.traverse(e=>{e.isMesh&&e.layers.enable(3)}),this.dynamic.push(e)}renderDynamic(){let e=this.r,t=this.scene,n={t:e.getRenderTarget(),ac:e.autoClear,ov:t.overrideMaterial,bg:t.background,sm:e.shadowMap.autoUpdate};t.overrideMaterial=this.depthMat,t.background=null,e.shadowMap.autoUpdate=!1,e.setRenderTarget(this.rtD),e.autoClear=!1,e.clearDepth(),this.dynamic.length&&e.render(t,this.cam),t.overrideMaterial=n.ov,t.background=n.bg,e.setRenderTarget(n.t),e.autoClear=n.ac,e.shadowMap.autoUpdate=n.sm}_readBack(){let e=this.r,n=Math.min(1024,this.size),r=new ot(n,n,{type:Ce,minFilter:f,magFilter:f,depthBuffer:!1}),a=new t({vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:ri,uniforms:{tDepth:{value:this.rtS.depthTexture}},depthTest:!1,depthWrite:!1}),o=new C(new ct(2,2),a);o.frustumCulled=!1;let s=e.getRenderTarget();e.setRenderTarget(r),e.render(o,new i);let c=new Uint8Array(n*n*4);e.readRenderTargetPixels(r,0,0,n,n,c),e.setRenderTarget(s);let l=new Float32Array(n*n);for(let e=0;e<n*n;e++)l[e]=c[e*4]/255+c[e*4+1]/65025+c[e*4+2]/16581375;this.cpu={n,d:l},r.dispose(),a.dispose(),o.geometry.dispose()}visibleAt(e){if(!this.cpu)return 0;let t=oi.copy(e).applyMatrix4(this.mat);if(t.x<=0||t.x>=1||t.y<=0||t.y>=1||t.z>=1)return 0;let{n,d:r}=this.cpu,i=t.z-3*this.meters/n/this.range,a=t.x*n-.5,o=t.y*n-.5,s=0,c=0;for(let e=-2;e<=2;e++)for(let t=-2;t<=2;t++){let l=Math.min(n-1,Math.max(0,Math.round(a+t*1.5))),u=Math.min(n-1,Math.max(0,Math.round(o+e*1.5)));s+=+(r[u*n+l]>=i),c++}return s/c}dispose(){this.rtS.dispose(),this.rtB.dispose(),this.rtD.dispose()}},oi=new M,si=`
uniform float giSunOn; uniform vec3 giSunCol; uniform mat4 giSunMat; uniform vec4 giSunTex; uniform sampler2D giSunMap; uniform sampler2D giSunMapD;
float sunRecvVis( vec3 w ) {
	vec3 s = ( giSunMat * vec4( w, 1.0 ) ).xyz;
	if ( s.x <= 0.0 || s.x >= 1.0 || s.y <= 0.0 || s.y >= 1.0 || s.z >= 1.0 ) return 0.0;
	float z = s.z - giSunTex.y * 4.0, t = giSunTex.x * 2.0, k = 0.0;
	for ( int i = 0; i < 4; i ++ ) { vec2 o = vec2( i == 1 || i == 3 ? t : - t, i >= 2 ? t : - t ); k += step( z, textureLod( giSunMap, s.xy + o, 0.0 ).r ) * step( z, textureLod( giSunMapD, s.xy + o, 0.0 ).r ); }
	return k * 0.25;
}
`;function ci(e){let t=e.onBeforeCompile,r=e.customProgramCacheKey?e.customProgramCacheKey.bind(e):()=>``;return e.onBeforeCompile=(r,i)=>{t&&t.call(e,r,i);let a=F.uniforms;Object.assign(r.uniforms,{giSunOn:a.giSunOn,giSunCol:a.giSunCol,giSunMat:a.giSunMat,giSunTex:a.giSunTex,giSunMap:a.giSunMap,giSunMapD:a.giSunMapD});let o=n.lights_fragment_begin.replace(`getDirectionalLightInfo( directionalLight, directLight );`,`getDirectionalLightInfo( directionalLight, directLight );
		if ( UNROLLED_LOOP_INDEX == 0 && giSunOn > 0.5 ) directLight.color = giSunCol * sunRecvVis( ( ( vec4( - vViewPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz );`);r.fragmentShader=r.fragmentShader.replace(`#include <common>`,`#include <common>
`+si).replace(`#include <lights_fragment_begin>`,o)},e.customProgramCacheKey=()=>r()+`|sunrecv`,e}var li={x0:L.win.x0,x1:L.win.x1,y0:L.win.y0,y1:L.win.y1,z:0};function ui(e){e.outputColorSpace=O,e.toneMapping=0,e.shadowMap.enabled=!0,e.shadowMap.type=1,pn(Math.min(16,e.capabilities.getMaxAnisotropy()))}async function di(e,t,{onProgress:n=()=>{},giUrl:r}={}){let{scene:i,ctx:a}=await Ar(e=>n(e));i.updateMatrixWorld(!0);let o=new Gr(e,i,t);qr(o),n(`light`);let s=!1;try{let e=await fetch(r||`./bedroom/gi.bin`,{cache:`force-cache`});if(e.ok){let t=cn(i,await e.arrayBuffer());s=t.ok,t.stale&&console.warn(`[gi] stale meshes`,t.stale)}}catch(e){console.warn(e)}s||(un(i),console.warn(`[gi] no bake found - flat placeholder lighting`));let c=a.roomBox,l=new M(2.35,1.3,2),u=()=>{F.uniforms.giExt.value=o.look.ext,F.uniforms.giSunDisk.value=0;for(let t=0;t<2;t++){let t=dn(e,i,l,c.min,c.max,256);a.glass&&(a.glass.uniforms.envMap.value=t)}F.uniforms.giExt.value=1,F.uniforms.giSunDisk.value=1};return u(),{scene:i,ctx:a,pipe:o,refreshEnv:u,baked:s}}async function fi(e,t,{hide:n=[],res:r=[16,8,14],cubemapSize:i=16,probesUrl:a,capture:o=!1}={}){let s=new Nt(L.W,L.H,L.D,r[0],r[1],r[2]);s.position.set(L.W/2,L.H/2,L.D/2),s.name=`probeGrid`,s.updateBoundingBox(),t.add(s);let c=new M().fromArray(yr.dir).normalize(),l=new g().setRGB(...br()).multiplyScalar(Math.PI),u=new Ge(16777215,1);u.name=`sunKey`,u.castShadow=!0,u.shadow.mapSize.set(2048,2048),Object.assign(u.shadow.camera,{left:-.7,right:.7,top:.7,bottom:-.7,near:.05,far:6}),u.shadow.radius=6,u.shadow.bias=-4e-4,u.shadow.normalBias=.01;let d=new Ge(16777215,1);d.name=`windowFill`,t.add(u,u.target,d,d.target);let f=null;if(!o)try{let e=await fetch(a||`./bedroom/probes.bin`,{cache:`force-cache`});if(e.ok){let t=Qr.fromBuffer(await e.arrayBuffer());t.res.equals(s.resolution)?(f=t,s.texture=t.makeTexture()):console.warn(`[probes] file has another resolution - capturing`)}}catch(e){console.warn(`[probes]`,e)}let p=()=>{let r=n.map(e=>e.visible);n.forEach(e=>{e.visible=!1});let a=u.color.clone(),o=d.color.clone(),c=F.uniforms,l=c.giCatOn.value;return u.color.setScalar(0),d.color.setScalar(0),c.giCatOn.value=0,c.giExt.value=1,c.giSunDisk.value=0,t.updateMatrixWorld(!0),s.texture&&!s._renderTarget&&(s.texture=null),s.bake(e,t,{cubemapSize:i,near:.02,far:60}),c.giSunDisk.value=1,c.giCatOn.value=l,u.color.copy(a),d.color.copy(o),n.forEach((e,t)=>{e.visible=r[t]}),f=Qr.fromGrid(e,s),f};f||p();let m=new M((li.x0+li.x1)/2,(li.y0+li.y1)/2+.1,-.3),h=new M,_=new M,v=new g,y=new g;return{grid:s,key:u,fill:d,capture:p,follow:(e,{gain:t=.6,sunVis:n=0}={})=>{h.copy(m).sub(e).normalize(),f.irradianceAt(e,h,v),f.irradianceAt(e,_.copy(h).negate(),y),d.color.setRGB(Math.max(0,v.r-y.r),Math.max(0,v.g-y.g),Math.max(0,v.b-y.b)).multiplyScalar(.5*t),d.intensity=1,d.target.position.copy(e),d.position.copy(e).addScaledVector(h,2.5),d.target.updateMatrixWorld(),d.updateMatrixWorld(),u.color.copy(l).multiplyScalar(n),u.intensity=1,u.target.position.copy(e),u.position.copy(e).addScaledVector(c,2.5),u.target.updateMatrixWorld(),u.updateMatrixWorld();let r=F.uniforms;return u.shadow.map&&u.shadow.map.depthTexture&&(r.giCatMap.value=u.shadow.map.depthTexture,r.giCatMat.value=u.shadow.matrix,r.giCatOn.value=+(r.giSunOn.value>.5)),v},win:m,get probes(){return f}}}function pi(e,{density:t=.02,steps:n=40}={}){let r=F.uniforms;e.setVolume({sun:{map:r.giSunMap,mapD:r.giSunMapD,mat:r.giSunMat,tex:r.giSunTex,dir:r.giSunDir,col:r.giSunCol,catMap:r.giCatMap,catMat:r.giCatMat,catOn:r.giCatOn},boxMin:new M(.01,.01,-.3),boxMax:new M(L.W-.01,L.H-.01,L.D-.01),density:t,steps:n})}function mi(){let e=F.uniforms;return{Map:e.giSunMap,MapD:e.giSunMapD,Mat:e.giSunMat,On:e.giSunOn,Irr:e.giSunCol,Tex:e.giSunTex}}var hi=[[`chest`,`hips`,.058],[`chest`,`head`,.046],[`arm_upper_L`,`paw_front_L`,.019],[`arm_upper_R`,`paw_front_R`,.019],[`thigh_L`,`foot_L`,.022],[`thigh_R`,`foot_R`,.022],[`tail_01`,`tail_04`,.017],[`tail_04`,`tail_07`,.014]],gi=new M,_i=new M;function vi(e,t=.75){let n=F.uniforms;if(n.giShadowK.value=e?t:0,!e)return;let r=0;for(let[t,i,a]of hi)!e[t]||!e[i]||r>=8||(e[t].getWorldPosition(gi),e[i].getWorldPosition(_i),t===`chest`&&i===`head`&&_i.addScaledVector(_i.clone().sub(gi).normalize(),.04),n.giCapA.value[r].set(gi.x,gi.y,gi.z,a),n.giCapB.value[r].copy(_i),r++);for(;r<8;r++)n.giCapA.value[r].set(0,-10,0,0),n.giCapB.value[r].set(0,-10,0);e.chest.getWorldPosition(gi),e.hips.getWorldPosition(_i),gi.add(_i).multiplyScalar(.5),n.giCatBound.value.set(gi.x,gi.y,gi.z,1.1),n.giWin.value.set((li.x0+li.x1)/2,(li.y0+li.y1)/2,-.17,.78)}var yi=[[`toe_front_L`,.024],[`toe_front_R`,.024],[`toe_hind_L`,.025],[`toe_hind_R`,.025],[`chest`,.062],[`vol_belly`,.06],[`hips`,.058],[`head`,.042],[`tail_04`,.017],[`tail_06`,.014]];function bi(e,{strength:t=.85,sun:n=.55}={}){let r=F.uniforms;if(r.giContactK.value=e?t:0,r.giContactSun.value=n,!e)return;let i=0;for(let[t,n]of yi){if(i>=10)break;e[t]?(e[t].getWorldPosition(gi),r.giContact.value[i++].set(gi.x,gi.y,gi.z,n)):r.giContact.value[i++].set(0,-10,0,0)}for(;i<10;i++)r.giContact.value[i].set(0,-10,0,0);e.chest.getWorldPosition(gi),e.hips.getWorldPosition(_i),gi.add(_i).multiplyScalar(.5),r.giContactBound.value.set(gi.x,gi.y,gi.z,.75)}var xi=`
attribute vec4 aRnd;
uniform float uTime, uScale, giSunOn; uniform mat4 giSunMat; uniform vec4 giSunTex; uniform sampler2D giSunMap; uniform sampler2D giSunMapD;
uniform vec3 giSunCol, giSunDir;
varying vec3 vCol; varying float vA;
void main() {
  float t = uTime;
  vec3 p = position;
  // wandering in the slow air of a room: a few unrelated sines per speck, a slow settling
  p += vec3(sin(t * (0.05 + 0.07 * aRnd.x) + aRnd.y * 40.0), sin(t * (0.035 + 0.05 * aRnd.z) + aRnd.x * 31.0), sin(t * (0.06 + 0.04 * aRnd.w) + aRnd.z * 23.0)) * (0.05 + 0.05 * aRnd.y);
  p.y += 0.12 - mod(t * (0.003 + 0.005 * aRnd.w) + aRnd.y * 0.24, 0.24);
  float v = 0.0;
  vec3 s = (giSunMat * vec4(p, 1.0)).xyz;
  if (giSunOn > 0.5 && s.x > 0.0 && s.x < 1.0 && s.y > 0.0 && s.y < 1.0 && s.z < 1.0) {
    float z = s.z - giSunTex.y * 2.0;
    v = step(z, textureLod(giSunMap, s.xy, 0.0).r) * step(z, textureLod(giSunMapD, s.xy, 0.0).r);
  }
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  float dist = -mv.z;
  vec3 ray = normalize(p - cameraPosition);
  float mu = max(dot(ray, giSunDir), 0.0);
  float ph = 0.25 + 3.0 * pow(mu, 5.0);
  float tw = 0.3 + 0.7 * pow(0.5 + 0.5 * sin(t * (1.2 + 2.6 * aRnd.x) + aRnd.w * 50.0), 8.0);
  vA = v * ph * tw * smoothstep(0.12, 0.45, dist) * (1.0 - smoothstep(3.5, 5.5, dist));
  vCol = giSunCol;
  gl_PointSize = clamp(uScale * (0.0010 + 0.0014 * aRnd.z) / max(dist, 0.05), 1.0, 5.0);
  gl_Position = vA > 0.0 ? projectionMatrix * mv : vec4(2.0, 2.0, 2.0, 1.0);
}`,Si=`
varying vec3 vCol; varying float vA; uniform float uK;
void main() {
  vec2 q = gl_PointCoord - 0.5; float r = dot(q, q) * 4.0;
  float a = exp(-r * 3.0) * (1.0 - smoothstep(0.6, 1.0, r));
  gl_FragColor = vec4(vCol * (vA * a * uK), 1.0);
}`;function Ci({count:e=2400,brightness:n=.02}={}){let r=new M().fromArray(yr.dir).negate(),i=L.win,a=new Float32Array(e*3),o=new Float32Array(e*4),s=12345,c=()=>(s=s*16807%2147483647,s/2147483647);for(let t=0,n=0;t<e&&n<e*20;n++){let e,n,s;if(c()<.85){let t=.15+c()*4.2;e=i.x0+(i.x1-i.x0)*c()+r.x*t+(c()-.5)*.25,n=i.y0+(i.y1-i.y0)*c()+r.y*t+(c()-.5)*.25,s=r.z*t+(c()-.5)*.25}else e=c()*L.W,n=c()*L.H,s=c()*L.D;e<.03||e>L.W-.03||n<.03||n>L.H-.03||s<.03||s>L.D-.03||(a[t*3]=e,a[t*3+1]=n,a[t*3+2]=s,o[t*4]=c(),o[t*4+1]=c(),o[t*4+2]=c(),o[t*4+3]=c(),t++)}let l=new st;l.setAttribute(`position`,new ee(a,3)),l.setAttribute(`aRnd`,new ee(o,4));let u=F.uniforms,d=new t({uniforms:{uTime:u.uTime,giSunMap:u.giSunMap,giSunMapD:u.giSunMapD,giSunMat:u.giSunMat,giSunTex:u.giSunTex,giSunCol:u.giSunCol,giSunOn:u.giSunOn,giSunDir:u.giSunDir,uScale:{value:800},uK:{value:n}},vertexShader:xi,fragmentShader:Si,transparent:!0,depthWrite:!1,depthTest:!0,blending:2}),f=new oe(l,d);return f.name=`motes`,f.frustumCulled=!1,f.renderOrder=60,f.userData.gi=!1,f.userData.sunCaster=!1,f.userData.bakeOccluder=!1,f.update=(e,t)=>{d.uniforms.uScale.value=t/(2*Math.tan(e.fov*Math.PI/360))},f}var wi={bed:JSON.parse(`{"nx":50,"nz":70,"data":[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.534,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.948,0.5,0.556,0.549,0.5,0.5,0.5,0.5,0.5,0.5,0.543,0.554,0.561,0.564,0.563,0.547,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.948,0.5,0.565,0.575,0.579,0.577,0.576,0.573,0.576,0.58,0.584,0.583,0.585,0.588,0.577,0.552,0.5,0.5,0.5,0.501,0.501,0.501,0.503,0.508,0.511,0.514,0.516,0.518,0.518,0.517,0.516,0.515,0.515,0.512,0.509,0.508,0.503,0.503,0.502,0.501,0.502,0.503,0.502,0.501,0.501,0.501,0.501,0.502,0.502,0.501,0.501,0.502,0.502,0.503,0.502,0.501,0.503,0.503,0.5,0.506,0.512,0.514,0.518,0.516,0.505,0.502,0.5,0.5,0.5,0.5,0.948,0.5,0.563,0.586,0.592,0.595,0.592,0.593,0.594,0.597,0.6,0.599,0.606,0.593,0.585,0.555,0.5,0.5,0.5,0.5,0.524,0.544,0.546,0.555,0.564,0.572,0.571,0.576,0.576,0.577,0.58,0.58,0.583,0.586,0.586,0.584,0.578,0.572,0.576,0.574,0.565,0.562,0.554,0.55,0.544,0.547,0.549,0.551,0.57,0.581,0.587,0.588,0.584,0.575,0.576,0.573,0.57,0.581,0.584,0.587,0.593,0.589,0.586,0.58,0.572,0.508,0.5,0.5,0.5,0.5,0.948,0.5,0.552,0.588,0.6,0.607,0.607,0.607,0.606,0.609,0.615,0.613,0.606,0.597,0.588,0.556,0.5,0.5,0.5,0.501,0.537,0.558,0.566,0.579,0.585,0.589,0.588,0.587,0.589,0.589,0.591,0.592,0.596,0.598,0.598,0.599,0.598,0.597,0.596,0.598,0.598,0.593,0.591,0.588,0.584,0.606,0.618,0.622,0.625,0.622,0.618,0.62,0.617,0.607,0.598,0.594,0.593,0.603,0.596,0.603,0.602,0.608,0.606,0.593,0.578,0.519,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.588,0.609,0.612,0.617,0.616,0.615,0.618,0.622,0.621,0.611,0.603,0.587,0.556,0.5,0.5,0.5,0.501,0.542,0.568,0.576,0.582,0.588,0.588,0.591,0.583,0.584,0.586,0.586,0.588,0.592,0.595,0.597,0.595,0.596,0.595,0.593,0.592,0.592,0.591,0.585,0.584,0.604,0.618,0.624,0.623,0.629,0.628,0.624,0.62,0.617,0.609,0.6,0.601,0.598,0.606,0.609,0.619,0.616,0.602,0.6,0.594,0.579,0.514,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.588,0.608,0.616,0.62,0.619,0.621,0.623,0.627,0.626,0.615,0.607,0.587,0.559,0.5,0.5,0.5,0.501,0.545,0.573,0.582,0.59,0.596,0.594,0.582,0.58,0.576,0.58,0.578,0.577,0.581,0.586,0.587,0.59,0.589,0.591,0.59,0.588,0.587,0.599,0.602,0.613,0.614,0.616,0.621,0.621,0.626,0.626,0.623,0.615,0.608,0.603,0.609,0.602,0.604,0.606,0.613,0.614,0.608,0.596,0.593,0.587,0.574,0.509,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.586,0.61,0.621,0.623,0.623,0.622,0.624,0.628,0.628,0.618,0.605,0.586,0.56,0.5,0.5,0.5,0.5,0.552,0.574,0.586,0.587,0.587,0.589,0.584,0.578,0.575,0.576,0.584,0.582,0.583,0.587,0.593,0.597,0.605,0.594,0.596,0.597,0.593,0.605,0.607,0.613,0.612,0.605,0.61,0.617,0.618,0.618,0.615,0.61,0.599,0.596,0.597,0.601,0.6,0.606,0.605,0.613,0.601,0.589,0.591,0.582,0.569,0.506,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.583,0.61,0.623,0.625,0.622,0.62,0.62,0.623,0.625,0.616,0.605,0.59,0.562,0.5,0.5,0.5,0.5,0.553,0.574,0.576,0.579,0.583,0.584,0.583,0.579,0.588,0.576,0.575,0.579,0.579,0.58,0.586,0.593,0.599,0.611,0.602,0.602,0.601,0.603,0.605,0.613,0.615,0.612,0.599,0.6,0.607,0.615,0.611,0.609,0.594,0.585,0.584,0.585,0.59,0.596,0.596,0.601,0.594,0.588,0.584,0.576,0.56,0.505,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.58,0.609,0.62,0.624,0.621,0.623,0.619,0.619,0.62,0.613,0.605,0.593,0.565,0.5,0.5,0.5,0.507,0.554,0.569,0.578,0.578,0.581,0.588,0.587,0.598,0.588,0.583,0.577,0.574,0.576,0.573,0.576,0.583,0.592,0.601,0.605,0.598,0.599,0.602,0.605,0.609,0.611,0.612,0.611,0.602,0.602,0.618,0.614,0.612,0.604,0.585,0.592,0.589,0.596,0.591,0.594,0.591,0.578,0.588,0.583,0.565,0.551,0.504,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.576,0.606,0.615,0.619,0.621,0.617,0.613,0.609,0.61,0.609,0.605,0.596,0.569,0.5,0.5,0.5,0.511,0.555,0.567,0.574,0.58,0.586,0.591,0.593,0.589,0.592,0.585,0.58,0.576,0.575,0.576,0.58,0.577,0.581,0.593,0.603,0.601,0.6,0.604,0.604,0.614,0.613,0.613,0.613,0.619,0.611,0.609,0.617,0.617,0.605,0.587,0.582,0.597,0.598,0.594,0.592,0.589,0.597,0.602,0.586,0.57,0.555,0.506,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.571,0.605,0.611,0.613,0.617,0.613,0.607,0.604,0.606,0.611,0.607,0.597,0.572,0.5,0.5,0.5,0.518,0.557,0.569,0.578,0.585,0.587,0.593,0.596,0.598,0.591,0.586,0.577,0.577,0.571,0.571,0.572,0.575,0.571,0.575,0.588,0.596,0.597,0.601,0.606,0.605,0.611,0.617,0.621,0.628,0.628,0.617,0.617,0.613,0.61,0.588,0.588,0.6,0.6,0.59,0.59,0.595,0.605,0.599,0.588,0.574,0.556,0.505,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.565,0.604,0.611,0.612,0.616,0.61,0.604,0.601,0.604,0.607,0.605,0.597,0.574,0.5,0.5,0.5,0.524,0.561,0.572,0.575,0.581,0.588,0.589,0.601,0.601,0.599,0.592,0.585,0.573,0.566,0.563,0.566,0.569,0.565,0.564,0.567,0.582,0.587,0.589,0.597,0.604,0.6,0.609,0.615,0.62,0.624,0.633,0.605,0.615,0.612,0.602,0.596,0.606,0.6,0.588,0.588,0.598,0.599,0.603,0.59,0.579,0.555,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.559,0.606,0.616,0.616,0.612,0.608,0.603,0.601,0.603,0.607,0.605,0.598,0.578,0.5,0.5,0.5,0.527,0.561,0.581,0.572,0.573,0.583,0.584,0.577,0.598,0.605,0.607,0.592,0.584,0.574,0.565,0.554,0.565,0.567,0.563,0.561,0.559,0.575,0.585,0.591,0.601,0.61,0.596,0.62,0.631,0.627,0.626,0.623,0.609,0.616,0.6,0.598,0.605,0.599,0.593,0.583,0.594,0.598,0.605,0.594,0.577,0.555,0.502,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.552,0.604,0.615,0.619,0.617,0.611,0.605,0.604,0.607,0.607,0.609,0.602,0.582,0.5,0.5,0.5,0.526,0.562,0.571,0.566,0.564,0.567,0.564,0.566,0.582,0.607,0.606,0.616,0.591,0.578,0.571,0.567,0.564,0.573,0.57,0.566,0.561,0.557,0.572,0.583,0.589,0.598,0.601,0.611,0.625,0.633,0.622,0.62,0.599,0.61,0.604,0.606,0.602,0.598,0.595,0.585,0.595,0.6,0.608,0.589,0.578,0.554,0.502,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.545,0.603,0.615,0.619,0.62,0.616,0.61,0.608,0.608,0.607,0.61,0.606,0.586,0.5,0.5,0.5,0.535,0.554,0.561,0.557,0.555,0.558,0.562,0.568,0.574,0.587,0.604,0.603,0.6,0.584,0.573,0.57,0.573,0.581,0.583,0.575,0.57,0.565,0.552,0.57,0.577,0.586,0.602,0.607,0.622,0.631,0.62,0.621,0.612,0.602,0.607,0.604,0.6,0.598,0.601,0.588,0.596,0.604,0.61,0.591,0.579,0.552,0.504,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.539,0.603,0.613,0.616,0.619,0.619,0.613,0.609,0.608,0.607,0.611,0.605,0.589,0.5,0.5,0.5,0.541,0.555,0.553,0.544,0.543,0.545,0.549,0.555,0.562,0.572,0.589,0.599,0.599,0.59,0.58,0.584,0.59,0.592,0.591,0.582,0.574,0.587,0.558,0.553,0.572,0.586,0.59,0.612,0.617,0.621,0.62,0.618,0.614,0.606,0.598,0.605,0.601,0.597,0.597,0.595,0.596,0.608,0.61,0.593,0.582,0.552,0.507,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.601,0.614,0.615,0.615,0.616,0.611,0.608,0.605,0.603,0.607,0.602,0.589,0.553,0.5,0.5,0.544,0.558,0.555,0.544,0.539,0.538,0.539,0.542,0.549,0.56,0.571,0.589,0.595,0.594,0.597,0.595,0.596,0.599,0.599,0.592,0.584,0.578,0.567,0.559,0.56,0.585,0.599,0.608,0.621,0.623,0.623,0.621,0.614,0.603,0.593,0.603,0.606,0.598,0.597,0.592,0.596,0.609,0.611,0.595,0.582,0.555,0.512,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.541,0.596,0.611,0.611,0.611,0.609,0.604,0.601,0.598,0.596,0.599,0.6,0.587,0.56,0.5,0.5,0.544,0.563,0.555,0.544,0.539,0.537,0.536,0.536,0.538,0.548,0.562,0.574,0.588,0.604,0.617,0.614,0.603,0.601,0.601,0.598,0.597,0.574,0.568,0.57,0.565,0.57,0.598,0.617,0.616,0.622,0.617,0.615,0.615,0.606,0.599,0.603,0.6,0.595,0.598,0.592,0.599,0.606,0.612,0.598,0.579,0.558,0.512,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.547,0.591,0.601,0.608,0.603,0.601,0.598,0.595,0.59,0.586,0.587,0.591,0.583,0.56,0.5,0.5,0.543,0.564,0.554,0.543,0.538,0.536,0.534,0.533,0.535,0.541,0.555,0.568,0.581,0.607,0.622,0.62,0.609,0.597,0.598,0.6,0.597,0.568,0.565,0.571,0.577,0.586,0.593,0.616,0.623,0.616,0.619,0.609,0.612,0.609,0.606,0.607,0.602,0.592,0.596,0.591,0.597,0.608,0.612,0.603,0.568,0.559,0.51,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.551,0.581,0.586,0.582,0.578,0.57,0.558,0.55,0.543,0.537,0.535,0.534,0.529,0.519,0.5,0.5,0.544,0.568,0.556,0.543,0.537,0.535,0.533,0.533,0.535,0.54,0.55,0.562,0.581,0.609,0.625,0.629,0.615,0.599,0.587,0.594,0.585,0.569,0.559,0.571,0.582,0.609,0.624,0.624,0.615,0.615,0.609,0.613,0.601,0.603,0.606,0.609,0.608,0.6,0.597,0.591,0.591,0.608,0.614,0.605,0.563,0.557,0.507,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.535,0.529,0.523,0.518,0.515,0.511,0.5,0.5,0.5,0.5,0.5,0.5,0.505,0.502,0.5,0.5,0.541,0.566,0.558,0.544,0.537,0.535,0.534,0.535,0.537,0.54,0.546,0.555,0.575,0.597,0.616,0.625,0.633,0.612,0.594,0.577,0.573,0.564,0.552,0.562,0.585,0.615,0.626,0.636,0.635,0.627,0.616,0.611,0.605,0.604,0.604,0.603,0.617,0.603,0.596,0.593,0.588,0.603,0.612,0.607,0.575,0.555,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.525,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.535,0.558,0.556,0.546,0.539,0.538,0.538,0.54,0.541,0.544,0.546,0.549,0.561,0.584,0.604,0.619,0.621,0.616,0.596,0.577,0.559,0.564,0.566,0.564,0.569,0.602,0.624,0.638,0.646,0.639,0.623,0.616,0.609,0.607,0.607,0.602,0.613,0.604,0.592,0.594,0.594,0.6,0.608,0.603,0.589,0.547,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.723,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.527,0.548,0.552,0.547,0.546,0.546,0.545,0.543,0.543,0.546,0.549,0.55,0.558,0.57,0.589,0.604,0.61,0.61,0.598,0.573,0.558,0.557,0.569,0.592,0.607,0.606,0.606,0.628,0.636,0.646,0.64,0.634,0.621,0.606,0.608,0.609,0.611,0.602,0.604,0.593,0.602,0.596,0.606,0.608,0.589,0.537,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.729,0.72,0.688,0.64,0.5,0.5,0.5,0.5,0.538,0.54,0.5,0.5,0.5,0.5,0.5,0.521,0.542,0.546,0.548,0.542,0.54,0.545,0.552,0.554,0.554,0.552,0.552,0.554,0.559,0.571,0.588,0.598,0.595,0.592,0.579,0.555,0.558,0.565,0.59,0.614,0.629,0.629,0.601,0.627,0.638,0.651,0.642,0.626,0.61,0.607,0.613,0.612,0.605,0.606,0.6,0.612,0.596,0.602,0.606,0.586,0.544,0.505,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.729,0.729,0.717,0.684,0.649,0.617,0.595,0.579,0.573,0.56,0.5,0.5,0.5,0.5,0.5,0.515,0.537,0.544,0.546,0.546,0.555,0.558,0.559,0.555,0.556,0.555,0.553,0.553,0.554,0.559,0.569,0.581,0.585,0.578,0.582,0.577,0.556,0.563,0.589,0.623,0.637,0.643,0.639,0.608,0.625,0.635,0.634,0.614,0.607,0.61,0.621,0.621,0.62,0.616,0.617,0.606,0.592,0.599,0.6,0.588,0.55,0.508,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.727,0.731,0.723,0.705,0.67,0.638,0.614,0.597,0.582,0.563,0.5,0.5,0.5,0.5,0.5,0.512,0.536,0.544,0.545,0.546,0.553,0.559,0.559,0.559,0.555,0.555,0.555,0.556,0.552,0.554,0.559,0.563,0.569,0.576,0.577,0.576,0.576,0.566,0.573,0.607,0.633,0.65,0.651,0.642,0.614,0.616,0.627,0.618,0.592,0.603,0.61,0.617,0.617,0.613,0.6,0.604,0.6,0.591,0.595,0.582,0.551,0.508,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.726,0.731,0.728,0.706,0.683,0.651,0.621,0.602,0.59,0.562,0.5,0.5,0.5,0.5,0.5,0.523,0.535,0.543,0.546,0.547,0.55,0.556,0.558,0.56,0.561,0.556,0.555,0.555,0.553,0.551,0.551,0.554,0.557,0.564,0.57,0.57,0.57,0.575,0.583,0.589,0.612,0.64,0.653,0.648,0.636,0.597,0.611,0.608,0.593,0.601,0.603,0.614,0.618,0.607,0.601,0.601,0.593,0.581,0.588,0.579,0.549,0.507,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.725,0.731,0.728,0.711,0.682,0.65,0.623,0.605,0.588,0.556,0.5,0.5,0.5,0.5,0.5,0.537,0.555,0.557,0.553,0.551,0.552,0.553,0.555,0.558,0.56,0.56,0.555,0.554,0.552,0.549,0.545,0.549,0.553,0.56,0.563,0.56,0.56,0.564,0.577,0.579,0.6,0.617,0.642,0.647,0.635,0.62,0.588,0.602,0.591,0.592,0.597,0.604,0.608,0.607,0.604,0.596,0.594,0.575,0.581,0.573,0.546,0.505,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.7,0.725,0.73,0.726,0.714,0.682,0.649,0.62,0.604,0.585,0.536,0.5,0.5,0.5,0.5,0.5,0.5,0.567,0.578,0.578,0.572,0.571,0.565,0.563,0.562,0.558,0.558,0.556,0.553,0.551,0.548,0.547,0.544,0.548,0.553,0.561,0.562,0.563,0.556,0.561,0.571,0.586,0.604,0.623,0.637,0.633,0.614,0.601,0.591,0.599,0.585,0.583,0.602,0.618,0.609,0.606,0.6,0.591,0.584,0.575,0.567,0.542,0.502,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.703,0.725,0.73,0.724,0.711,0.679,0.645,0.621,0.602,0.584,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.564,0.587,0.597,0.595,0.589,0.589,0.585,0.583,0.581,0.576,0.567,0.557,0.552,0.55,0.548,0.547,0.545,0.548,0.554,0.561,0.568,0.563,0.559,0.565,0.572,0.585,0.607,0.623,0.622,0.606,0.602,0.602,0.6,0.605,0.599,0.604,0.619,0.612,0.61,0.606,0.595,0.585,0.575,0.56,0.542,0.504,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.704,0.725,0.73,0.721,0.701,0.674,0.633,0.617,0.602,0.582,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.576,0.599,0.607,0.606,0.605,0.603,0.598,0.601,0.599,0.592,0.583,0.58,0.573,0.566,0.56,0.552,0.546,0.548,0.556,0.565,0.568,0.558,0.569,0.578,0.584,0.596,0.61,0.609,0.604,0.605,0.605,0.597,0.598,0.599,0.601,0.616,0.615,0.614,0.611,0.596,0.584,0.575,0.569,0.545,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.706,0.726,0.731,0.721,0.697,0.664,0.623,0.612,0.602,0.58,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.575,0.602,0.608,0.613,0.612,0.613,0.611,0.611,0.608,0.605,0.603,0.6,0.593,0.587,0.58,0.573,0.561,0.551,0.559,0.567,0.577,0.564,0.575,0.58,0.584,0.594,0.6,0.619,0.627,0.627,0.618,0.594,0.595,0.595,0.608,0.609,0.609,0.609,0.598,0.58,0.576,0.572,0.547,0.502,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.707,0.728,0.734,0.722,0.695,0.658,0.618,0.61,0.598,0.575,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.585,0.6,0.609,0.612,0.607,0.612,0.608,0.609,0.619,0.619,0.616,0.615,0.61,0.603,0.594,0.586,0.575,0.567,0.567,0.572,0.558,0.57,0.574,0.575,0.582,0.61,0.622,0.635,0.631,0.623,0.605,0.602,0.591,0.596,0.61,0.615,0.596,0.593,0.581,0.577,0.576,0.547,0.502,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.71,0.729,0.734,0.722,0.695,0.655,0.617,0.607,0.593,0.571,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.592,0.611,0.617,0.616,0.616,0.614,0.612,0.62,0.622,0.619,0.624,0.623,0.618,0.611,0.605,0.595,0.577,0.559,0.563,0.561,0.566,0.57,0.571,0.604,0.621,0.637,0.647,0.651,0.647,0.625,0.611,0.612,0.61,0.602,0.61,0.607,0.606,0.58,0.58,0.58,0.549,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.712,0.73,0.734,0.721,0.698,0.661,0.619,0.612,0.593,0.567,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.598,0.617,0.621,0.613,0.613,0.609,0.614,0.619,0.621,0.622,0.621,0.621,0.62,0.617,0.602,0.581,0.557,0.589,0.603,0.605,0.607,0.608,0.613,0.626,0.634,0.641,0.647,0.649,0.645,0.621,0.62,0.62,0.619,0.603,0.6,0.601,0.598,0.579,0.578,0.552,0.504,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.716,0.732,0.734,0.721,0.699,0.661,0.624,0.611,0.593,0.564,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.607,0.618,0.618,0.608,0.609,0.605,0.609,0.621,0.622,0.617,0.617,0.619,0.618,0.604,0.577,0.553,0.581,0.607,0.631,0.637,0.628,0.623,0.621,0.619,0.616,0.617,0.623,0.632,0.628,0.627,0.629,0.628,0.62,0.603,0.579,0.581,0.57,0.572,0.553,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.719,0.734,0.735,0.724,0.7,0.668,0.638,0.613,0.593,0.557,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.582,0.608,0.614,0.612,0.608,0.61,0.605,0.608,0.618,0.625,0.622,0.621,0.618,0.597,0.568,0.55,0.555,0.592,0.614,0.641,0.654,0.632,0.614,0.604,0.61,0.606,0.601,0.611,0.624,0.634,0.641,0.645,0.642,0.631,0.61,0.584,0.58,0.568,0.55,0.501,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.723,0.735,0.735,0.724,0.7,0.669,0.642,0.615,0.592,0.55,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.575,0.605,0.612,0.617,0.615,0.611,0.609,0.61,0.624,0.62,0.621,0.615,0.588,0.553,0.549,0.551,0.574,0.592,0.619,0.639,0.621,0.611,0.63,0.632,0.63,0.62,0.606,0.604,0.615,0.63,0.637,0.635,0.63,0.619,0.595,0.586,0.564,0.549,0.504,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.727,0.736,0.734,0.722,0.7,0.66,0.636,0.611,0.591,0.544,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.585,0.61,0.616,0.617,0.618,0.616,0.607,0.614,0.618,0.621,0.607,0.577,0.55,0.549,0.548,0.553,0.593,0.613,0.636,0.617,0.646,0.661,0.655,0.656,0.651,0.638,0.618,0.604,0.618,0.625,0.629,0.628,0.625,0.612,0.599,0.586,0.547,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.73,0.738,0.733,0.718,0.692,0.657,0.627,0.609,0.589,0.539,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.602,0.615,0.615,0.611,0.615,0.607,0.614,0.614,0.616,0.594,0.567,0.548,0.55,0.548,0.549,0.592,0.622,0.622,0.631,0.666,0.665,0.664,0.66,0.664,0.656,0.634,0.614,0.599,0.61,0.611,0.614,0.613,0.608,0.602,0.595,0.549,0.503,0.5,0.5,0.5,0.5,0.948,0.5,0.714,0.734,0.737,0.731,0.714,0.681,0.65,0.614,0.604,0.586,0.537,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.587,0.612,0.621,0.617,0.611,0.608,0.608,0.608,0.608,0.585,0.555,0.549,0.55,0.548,0.566,0.579,0.596,0.597,0.641,0.671,0.67,0.664,0.665,0.664,0.653,0.634,0.618,0.605,0.59,0.585,0.587,0.586,0.586,0.587,0.586,0.569,0.504,0.5,0.5,0.5,0.5,0.948,0.5,0.721,0.735,0.733,0.723,0.695,0.661,0.637,0.599,0.599,0.586,0.538,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.605,0.621,0.617,0.615,0.618,0.612,0.609,0.604,0.583,0.553,0.552,0.551,0.55,0.563,0.574,0.598,0.627,0.661,0.678,0.68,0.67,0.672,0.669,0.658,0.642,0.634,0.622,0.608,0.596,0.584,0.577,0.577,0.583,0.596,0.574,0.511,0.5,0.5,0.5,0.5,0.948,0.5,0.711,0.691,0.662,0.633,0.608,0.589,0.576,0.571,0.574,0.573,0.536,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.6,0.618,0.619,0.615,0.615,0.619,0.615,0.598,0.577,0.556,0.555,0.553,0.551,0.565,0.58,0.608,0.64,0.661,0.672,0.674,0.669,0.672,0.667,0.654,0.644,0.638,0.625,0.615,0.603,0.594,0.585,0.587,0.59,0.599,0.578,0.518,0.5,0.5,0.5,0.5,0.948,0.5,0.687,0.5,0.5,0.5,0.5,0.5,0.514,0.508,0.509,0.513,0.515,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.58,0.608,0.619,0.615,0.612,0.608,0.608,0.596,0.564,0.553,0.554,0.553,0.551,0.576,0.595,0.627,0.651,0.665,0.67,0.672,0.663,0.665,0.66,0.654,0.652,0.645,0.636,0.627,0.62,0.611,0.597,0.591,0.594,0.601,0.575,0.53,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.507,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.608,0.619,0.614,0.615,0.611,0.603,0.584,0.556,0.55,0.55,0.55,0.549,0.576,0.61,0.634,0.651,0.655,0.657,0.647,0.649,0.652,0.645,0.643,0.649,0.637,0.63,0.622,0.616,0.608,0.599,0.597,0.59,0.598,0.576,0.537,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.602,0.619,0.614,0.614,0.613,0.601,0.577,0.548,0.547,0.547,0.547,0.547,0.571,0.609,0.637,0.648,0.648,0.647,0.636,0.641,0.645,0.641,0.639,0.632,0.627,0.62,0.616,0.611,0.606,0.607,0.596,0.587,0.594,0.569,0.537,0.5,0.5,0.5,0.5,0.948,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.59,0.61,0.609,0.609,0.608,0.592,0.564,0.535,0.536,0.535,0.535,0.535,0.564,0.591,0.621,0.629,0.633,0.631,0.626,0.639,0.64,0.63,0.63,0.622,0.615,0.608,0.603,0.596,0.599,0.595,0.588,0.576,0.581,0.556,0.525,0.5,0.5,0.5,0.5]}`),desk:{nx:56,nz:32,data:[.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.74,.74,.74,.74,.74,.74,.74,.74,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.752,.752,.752,.752,.752,.74,.74,.74,.74,.74,.74,.74,.756,.757,.758,.758,.757,.756,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.752,.752,.752,.752,.753,.752,.752,.74,.74,.74,.74,.74,.74,.74,.756,.758,.758,.759,.758,.757,.756,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.752,.752,.752,.752,.753,.752,.752,.74,.74,.74,.74,.74,.74,.74,.757,.758,.76,1,.758,.757,.756,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.752,.752,.752,.753,.752,.752,.74,.74,.74,.74,.74,.74,.74,.756,.758,.758,.759,.758,.757,.756,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.752,.752,.752,.752,.752,.752,.74,.74,.74,.74,.74,.74,.74,.756,.757,1.15,.758,.757,.756,.74,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.752,.752,.752,.752,.753,.752,.752,.74,.74,.74,.74,.74,.74,.74,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.753,.753,.752,.752,.752,.752,.752,.752,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.752,.752,.752,.752,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,1.171,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.749,.75,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,1.055,1.143,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,1.065,1.086,1.112,1.07,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.742,.742,.74,.74,.74,.74,.74,.74,.74,.755,.756,.756,.756,.756,.756,.756,1.037,1.071,1.087,1.089,1.074,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.742,.742,.74,.74,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,1.038,1.063,1.077,1.077,1.061,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.742,.742,.74,.74,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,1.048,1.058,1.056,1.039,.74,.74,.74,.898,.746,.838,.74,.74,.74,.74,.74,.742,.742,.74,.74,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.838,.845,.746,.746,.74,.74,.74,.74,.74,.742,.741,.74,.74,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.74,.746,.886,.746,.74,.74,.74,.74,.74,.742,.741,.74,.746,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.74,.74,.838,.74,.74,.74,.74,.74,.74,.742,.741,.74,.75,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.742,.741,.74,.75,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.755,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.742,.74,.74,.748,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.748,.748,.748,.748,.74,.74,.74,.74,.74,.74,.74,.75,.748,.748,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.748,.748,.748,.74,.74,.74,.74,.74,.74,.747,.748,.748,.748,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.748,.748,.748,.748,.74,.74,.74,.74,.74,.748,.748,.748,.748,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.74,.74,.74,.74,.75,.748,.748,.74,.74,.74,.74,.74,.74,.748,.748,.748,.748,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.74,.755,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.748,.748,.748,.746,.74,.74,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.756,.74,.755,.74,.755,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.748,.748,.748,.74,.74,.74,.756,.756,.756,.756,.756,.756,.756,.747,.74,.74,.74,.74,.74,.755,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.748,.748,.748,.74,.74,.746,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.832,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.832,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.794,.794,.794,.74,.74,.74,.744,.742,.74,.74,.74,.74,.74,.74,.746,.74,.74,.74,.832,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.794,.794,.794,.74,.74,.74,.744,.742,.74,.74,.74,.74,.746,.74,.74,.74,.74,.74,.832,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.794,.794,.794,.74,.74,.74,.744,.741,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.832,.832,.832,.832,.832,.832,.831,.74,.74,.74,.74,.74,.74,.74,.74,.794,.74,.74,.74,.74,.744,.741,.74,.74,.74,.74,.74,.74,.74,.745,.74,.74,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.742,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.746,.74,.74,.74,.744,.74,.74,.74,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.742,.74,.74,.74,.74,.74,.74,.74,.752,.74,.74,.74,.74,.74,.751,.74,.74,.74,.74,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.832,.832,.832,.832,.832,.832,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.831,.832,.832,.74,.74,.74,.74,.74,.74,.74,.761,.761,.74,.74,.74,.74,.74,.74,.836,.836,.836,.836,.836,.836,.821,.794,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.761,.761,.74,.74,.74,.74,.74,.74,.836,.836,.836,.836,.836,.836,.821,.794,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.76,.759,.74,.74,.74,.74,.74,.74,.836,.836,.849,.836,.836,.836,.821,.794,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.849,.836,.836,.836,.821,.794,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.836,.849,.836,.836,.821,.794,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.836,.848,.836,.836,.821,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.836,.847,.85,.836,.821,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.836,.836,.836,.836,.821,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.836,.836,.836,.836,.821,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.836,.836,.836,.836,.836,.836,.821,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.794,.794,.794,.794,.794,.794,.794,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.772,.772,.772,.772,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74,.74]},shelfLow:{nx:35,nz:11,data:[1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.535,1.535,1.535,1.535,1.535,1.535,1.535,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.509,1.509,1.509,1.509,1.509,1.509,1.32,1.32,1.32,1.32,1.556,1.556,1.556,1.556,1.556,1.556,1.556,1.556,1.32,1.32,1.32,1.32,1.525,1.525,1.525,1.525,1.525,1.525,1.32,1.32,1.32,1.32,1.32,1.499,1.499,1.499,1.499,1.499,1.32,1.32,1.32,1.32,1.32,1.32,1.499,1.499,1.499,1.499,1.499,1.32,1.32,1.32,1.32,1.32,1.32,1.546,1.546,1.546,1.546,1.546,1.546,1.546,1.32,1.32,1.32,1.549,1.549,1.549,1.549,1.549,1.549,1.549,1.32,1.32,1.32,1.32,1.522,1.522,1.522,1.522,1.522,1.522,1.522,1.32,1.32,1.32,1.32,1.514,1.514,1.514,1.514,1.514,1.514,1.514,1.32,1.32,1.32,1.32,1.505,1.505,1.505,1.505,1.505,1.505,1.416,1.32,1.32,1.32,1.32,1.46,1.46,1.46,1.46,1.46,1.46,1.32,1.32,1.32,1.32,1.32,1.361,1.361,1.361,1.361,1.361,1.361,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.348,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.364,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.364,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.364,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.364,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.348,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.348,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.348,1.32,1.32,1.32,1.32,1.364,1.364,1.364,1.364,1.364,1.364,1.348,1.32,1.32,1.32,1.32,1.348,1.348,1.348,1.364,1.364,1.364,1.348,1.32,1.32,1.32,1.32,1.32,1.32,1.326,1.325,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.323,1.39,1.39,1.325,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.391,1.386,1.387,1.323,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.325,1.391,1.391,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32,1.32]},shelfHigh:{nx:35,nz:11,data:[1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.715,1.839,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.805,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.805,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.805,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.805,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.805,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.715,1.839,1.858,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,2.004,1.76,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.793,1.833,2.009,1.68,1.68,1.68,1.68,1.68,1.68,1.68,2.127,1.798,1.806,1.775,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.761,2.043,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.796,1.796,1.693,1.68,1.68,1.68,1.68,1.68,1.68,1.794,1.78,1.781,1.78,1.779,1.794,1.68,1.68,1.68,1.68,1.68,1.781,1.783,1.782,1.782,1.779,1.779,1.68,1.68,1.68,1.68,1.68,1.781,1.783,1.782,1.781,1.781,1.781,1.68,1.68,1.68,1.68,1.68,1.779,1.781,1.784,1.783,1.784,1.781,1.68,1.68,1.68,1.68,1.68,1.794,1.78,1.782,1.779,1.779,1.794,1.68,1.68,1.68,1.68,1.68,1.68,1.693,1.796,1.796,1.693,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68,1.68]}};function Ti(e,t,n=ee){let r=0;for(let[e,n]of t)r+=n-e;let i=new e.array.constructor(r*e.itemSize),a=0;for(let[n,r]of t)i.set(e.array.subarray(n*e.itemSize,r*e.itemSize),a),a+=(r-n)*e.itemSize;return new n(i,e.itemSize,e.normalized)}function Ei(e){let t=e.children.find(e=>e.name===`plants`),n=t&&t.userData.sillPlant;if(!n||t.userData.sillSplit)return null;t.userData.sillSplit=!0;let r=[],i=t.children.find(e=>e.name===`stems`);{let e=i.geometry,a=new st;for(let t of Object.keys(e.attributes))a.setAttribute(t,Ti(e.attributes[t],n.verts));let o=e.index.array,s=[],c=[],[[l,u],[d,f]]=n.verts,p=d-(u-l),m=0;for(let[e,t]of n.index){for(;m<e;m++)c.push(o[m]);for(;m<t;m++){let e=o[m];s.push(e>=d?e-p:e-l)}}for(;m<o.length;m++)c.push(o[m]);a.setIndex(s),e.setIndex(c);let h=new C(a,i.material);h.name=`sillStems`,h.frustumCulled=!1,t.add(h),r.push(h)}return n.leaves.forEach(([e,n],i)=>{let a=t.children.find(e=>e.name===`leaves`+i);if(!a||n<=e)return;let o=n-e,s=a.geometry,c=new st,l=new st;c.setIndex(s.index),l.setIndex(s.index);for(let t of Object.keys(s.attributes)){let r=s.attributes[t];r.isInstancedBufferAttribute?(c.setAttribute(t,Ti(r,[[e,n]],He)),l.setAttribute(t,Ti(r,[[0,e],[n,r.count]],He))):(c.setAttribute(t,r),l.setAttribute(t,r))}s.boundingBox&&(c.boundingBox=s.boundingBox.clone(),l.boundingBox=s.boundingBox.clone()),s.boundingSphere&&(c.boundingSphere=s.boundingSphere.clone(),l.boundingSphere=s.boundingSphere.clone());let u=new De(c,a.material,o);u.instanceMatrix=Ti(a.instanceMatrix,[[e,n]],He),a.instanceColor&&(u.instanceColor=Ti(a.instanceColor,[[e,n]],He)),u.name=`sillLeaves`+i,u.userData={...a.userData},u.frustumCulled=!1;let d=a.count;a.geometry=l,a.instanceMatrix=Ti(a.instanceMatrix,[[0,e],[n,d]],He),a.instanceColor&&=Ti(a.instanceColor,[[0,e],[n,d]],He),a.count=d-o,a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),t.add(u),r.push(u)}),e.updateMatrixWorld(!0),{pivot:new M().fromArray(n.pivot),meshes:r}}var Di=[`plants/sillStems`,...[0,1,2,3,4,5,6,7].map(e=>`plants/sillLeaves`+e)],Oi=new c,ki=new c,Ai=new c,ji=new c;function Mi(e,t,n,r,i,a,o){Oi.makeTranslation(r,i+.004,a).multiply(Ai.makeRotationY(o)).multiply(ki.makeScale(1,.2,1)).multiply(Ai.makeRotationX(-Math.PI/2)).multiply(ji.makeTranslation(-n.x,-n.y,-n.z));for(let n of e)t.add(n),n.matrixAutoUpdate=!1,n.matrix.copy(Oi),n.matrixWorldNeedsUpdate=!0,n.frustumCulled=!1}var Ni={STATIC:1,CAT:2,PROP:4,DEBRIS:8},Pi=[{id:`deskMug`,name:`马克杯`,nodes:[`desk/mug`],shape:`cyl`,mass:.32,made:`ceramic`},{id:`bottle`,name:`保温杯`,nodes:[`clutter/bottleBody`,`clutter/bottleSteel`,`clutter/bottleLoop`],shape:`cyl`,mass:.4,made:`metal`},{id:`deskHairTie`,name:`发圈`,nodes:[`desk/hairTie`],shape:`cyl`,mass:.006,made:`soft`,toy:!0},{id:`waterGlass`,name:`水杯`,nodes:[`fixtures/nightstand/waterGlass`],shape:`cyl`,mass:.3,made:`glass`},{id:`alarmClock`,name:`闹钟`,nodes:[`fixtures/nightstand/alarmClock`],shape:`box`,mass:.22,made:`plastic`,skip:[`clockSpill`,`clockGlow`]},{id:`lipBalm`,name:`润唇膏`,nodes:[`fixtures/nightstand/lipBalm`],shape:`cyl`,mass:.03,made:`plastic`,toy:!0},{id:`glasses`,name:`眼镜`,nodes:[`fixtures/nightstand/glasses`],shape:`box`,mass:.035,made:`plastic`},{id:`paperback`,name:`小说`,nodes:[`fixtures/nightstand/paperback`],shape:`box`,mass:.22,made:`paper`},{id:`hairTieA`,name:`发圈`,nodes:[`fixtures/nightstand/hairTieA`],shape:`cyl`,mass:.006,made:`soft`,toy:!0},{id:`hairTieB`,name:`发圈`,nodes:[`fixtures/nightstand/hairTieB`],shape:`cyl`,mass:.006,made:`soft`,toy:!0},{id:`sillVase`,name:`白瓷花器`,nodes:[`fixtures/sillThings/sillPouch`],shape:`cyl`,mass:.3,made:`soft`},{id:`candle`,name:`香薰蜡烛`,nodes:[`fixtures/sillThings/candleJar`],shape:`cyl`,mass:.36,made:`glass`},{id:`matchbox`,name:`火柴盒`,nodes:[`fixtures/sillThings/matchbox`],shape:`box`,mass:.02,made:`paper`,toy:!0},{id:`dish`,name:`小碟子`,nodes:[`fixtures/sillThings/trinketDish`],shape:`cyl`,mass:.12,made:`ceramic`},{id:`sillPlant`,name:`绿萝`,nodes:[`plants/saucerSill`,`plants/potSill`,`plants/soilSill`],soft:Di,shape:`cyl`,mass:.85,made:`ceramic`,plant:!0},{id:`notebooks`,name:`笔记本`,nodes:[`fixtures/sillThings/sillBooks/bookA`,`fixtures/sillThings/sillBooks/bookB`,`fixtures/sillThings/sillBooks/bookC`],shape:`box`,mass:.7,made:`paper`},{id:`pencil`,name:`铅笔`,nodes:[`fixtures/sillThings/sillBooks/pencil`],shape:`box`,mass:.008,made:`wood`,toy:!0},{id:`plush`,name:`毛绒玩具`,nodes:[`bed/plush`],shape:`box`,mass:.12,made:`soft`,toy:!0},{id:`bedPhone`,name:`手机`,nodes:[`bed/phone`,`bed/phoneLenses`],shape:`box`,mass:.19,made:`plastic`},{id:`bedBook`,name:`书`,nodes:[`bed/bookPages`,`bed/bookCover`],shape:`box`,mass:.35,made:`paper`},{id:`bedHairTie`,name:`发圈`,nodes:[`bed/hairTie`],shape:`cyl`,mass:.006,made:`soft`,toy:!0},{id:`floorMug`,name:`马克杯`,nodes:[`decor/mug`],shape:`cyl`,mass:.32,made:`ceramic`},{id:`yogaMat`,name:`瑜伽垫`,nodes:[`decor/yogaMat`,`decor/yogaMatBands`],shape:`cyl`,axis:`x`,mass:.9,made:`soft`},{id:`storageBox`,name:`收纳箱`,nodes:[`fixtures/wardrobe/storageBox`],shape:`box`,mass:1.1,made:`paper`}],Fi={ceramic:!0,glass:!0};function Ii(e,t){let n=e;for(let e of t.split(`/`))if(n=n.children.find(t=>t.name===e),!n)return null;return n}var Li=new m,Ri=new m,zi=class{constructor(e,t,n,r){this.def=e,this.id=e.id,this.name=e.name,this.made=e.made,this.fragile=!!Fi[e.made],this.toy=!!e.toy;let i=e.nodes.map(e=>Ii(t,e)).filter(Boolean);if(i.length!==e.nodes.length)throw Error(`prop ${e.id}: node not found`);let o=new Set(e.skip||[]);this.left=[],t.updateMatrixWorld(!0),Li.makeEmpty();for(let e of i)e.traverse(e=>{e.isMesh&&(o.has(e.name)?this.left.push(e):(e.geometry.boundingBox||e.geometry.computeBoundingBox(),Li.union(Ri.copy(e.geometry.boundingBox).applyMatrix4(e.matrixWorld))))});this.soft=(e.soft||[]).map(e=>Ii(t,e)).filter(Boolean);let c=Li.getSize(new M),u=Li.getCenter(new M);this.size=c,this.home=u.clone(),this.homeBase=Li.min.y;let d,f=new a;if(e.shape===`cyl`){if(e.axis===`x`)d=new at(Math.max(c.y,c.z)/2,Math.max(c.y,c.z)/2,c.x,14),f.setFromEuler(0,0,Math.PI/2),this.radius=c.x/2;else{let e=Math.max(c.x,c.z)/2;d=new at(e,e,Math.max(c.y,.004),14),this.radius=e}}else e.shape===`sphere`?(this.radius=Math.max(c.x,c.y,c.z)/2,d=new l(this.radius)):(d=new me(new s(Math.max(c.x,.004)/2,Math.max(c.y,.004)/2,Math.max(c.z,.004)/2)),this.radius=Math.hypot(c.x,c.z)/2);this.halfHeight=c.y/2,this.body=new we({mass:e.mass,material:r,shape:d,position:new s(u.x,u.y+5e-4,u.z),quaternion:f,linearDamping:.1,angularDamping:e.made===`soft`?.6:.25,collisionFilterGroup:Ni.PROP,collisionFilterMask:Ni.STATIC|Ni.CAT|Ni.PROP,allowSleep:!0,sleepSpeedLimit:.06,sleepTimeLimit:.5}),this.body.previousQuaternion.copy(this.body.quaternion),this.body.interpolatedQuaternion.copy(this.body.quaternion),this.body.updateAABB(),this.body.prop=this,this.group=new Ne,this.group.name=`prop:`+e.id,this.group.position.copy(this.body.position),this.group.quaternion.copy(this.body.quaternion),t.add(this.group),this.group.updateMatrixWorld(!0);for(let e of i)this.group.attach(e);for(let e of this.soft)this.group.attach(e);for(let e of this.left)t.attach(e);this.giDyn={value:0};let p=new Map;this.materials=[],this.group.traverse(e=>{if(!e.isMesh)return;let t=e=>!e||!e.defines||e.defines.USE_GI===void 0?e:(p.has(e)||(p.set(e,an(e,this.giDyn)),this.materials.push(p.get(e))),p.get(e));e.material=Array.isArray(e.material)?e.material.map(t):t(e.material)}),this.moved=!1,this.knocked=!1,this.broken=!1,this.lastSoundT=-1,n.addBody(this.body),this.body.sleep(),this.world=n,this.scene=t}sync(e){let t=this.body;if(this.group.position.copy(t.interpolatedPosition),this.group.quaternion.copy(t.interpolatedQuaternion),this.moved)this.giDyn.value<1&&(this.giDyn.value=Math.min(1,this.giDyn.value+e/.25));else{let e=t.position;if(Math.abs(e.x-this.home.x)+Math.abs(e.y-this.home.y)+Math.abs(e.z-this.home.z)>.012||Math.abs(t.quaternion.w-t.initQuaternion.w)>.002){this.moved=!0;for(let e of this.left)e.visible=!1}}}remove(){this.world.removeBody(this.body),this.group.removeFromParent();for(let e of this.left)e.visible=!1}};function Bi(e,t,n){let r=[];for(let i of Pi)try{r.push(new zi(i,e,t,n))}catch(e){console.warn(`[props]`,e.message)}for(let e of r)e.body.addEventListener(`wakeup`,()=>{let t=e.body.aabb;for(let n of r){if(n===e||n.broken||n.body.sleepState!==we.SLEEPING)continue;let r=n.body.aabb,i=.02;t.lowerBound.x-i<r.upperBound.x&&t.upperBound.x+i>r.lowerBound.x&&t.lowerBound.y-i<r.upperBound.y&&t.upperBound.y+i>r.lowerBound.y&&t.lowerBound.z-i<r.upperBound.z&&t.upperBound.z+i>r.lowerBound.z&&n.body.wakeUp()}});return r}function Vi(e){let t=e*7919+13,n=()=>(t=t*16807%2147483647,t/2147483647),r=4+Math.floor(n()*3),i=[];for(let e=0;e<r;e++){let t=(e+(n()-.5)*.7)/r*Math.PI*2,a=.55+n()*.5;i.push([Math.cos(t)*a,Math.sin(t)*a])}let a=[],o=.5;for(let e=0;e<r;e++){let[t,n]=i[e],[s,c]=i[(e+1)%r];a.push(0,o,0,s,o,c,t,o,n,0,-.5,0,t,-.5,n,s,-.5,c),a.push(t,o,n,s,o,c,s,-.5,c,t,o,n,s,-.5,c,t,-.5,n)}let s=new st;return s.setAttribute(`position`,new P(a,3)),s.computeVertexNormals(),s}var Hi=class{constructor(e,t){this.scene=e,this.world=t,this.items=[],this.geos=[1,2,3,4,5].map(Vi),this.geo=new qe(1,0)}burst(e){let t=e.body.position,n=e.def.mass>.25?13:8,r=null,i=null,a=-1,o=new Set;for(let t of e.soft)t.traverse(e=>o.add(e));if(e.group.traverse(e=>{if(e.isMesh&&!o.has(e)&&e.material&&e.material.isMeshStandardMaterial){let t=e.geometry.attributes.position.count;t>a&&(a=t,r=e.material,i=e.geometry)}}),!r)return;let c=r.userData&&r.userData.bake&&r.userData.bake.albedo,l=c?new g(c[0],c[1],c[2]):r.color.clone(),u=i.attributes.color;if(u&&r.vertexColors&&!c){let e=0,t=0,n=0,r=Math.max(1,Math.floor(u.count/400)),i=0;for(let a=0;a<u.count;a+=r)e+=u.getX(a),t+=u.getY(a),n+=u.getZ(a),i++;l.r*=e/i,l.g*=t/i,l.b*=n/i}let d=e.made===`glass`,f=ci(new T({color:l,roughness:d?.08:Math.max(.25,r.roughness??.4),metalness:0,transparent:d,opacity:d?.4:1,side:2}));for(let r=0;r<n;r++){let n=.009+Math.random()*.016,i=.0022+Math.random()*.0012,a=new C(this.geos[r%this.geos.length],f);a.scale.set(n,i,n);let o=new we({mass:.01,shape:new me(new s(n*.7,i*.5,n*.7)),position:new s(t.x+(Math.random()-.5)*e.radius,t.y+.01+Math.random()*.03,t.z+(Math.random()-.5)*e.radius),velocity:new s((Math.random()-.5)*2.2,.5+Math.random()*1.4,(Math.random()-.5)*2.2),angularVelocity:new s(Math.random()*20,Math.random()*20,Math.random()*20),linearDamping:.25,angularDamping:.4,collisionFilterGroup:Ni.DEBRIS,collisionFilterMask:Ni.STATIC,allowSleep:!0,sleepSpeedLimit:.05,sleepTimeLimit:.4});o.quaternion.setFromEuler(Math.random()*6,Math.random()*6,Math.random()*6),this.scene.add(a),this.world.addBody(o),this.items.push({mesh:a,body:o})}for(;this.items.length>260;){let e=this.items.shift();this.scene.remove(e.mesh),this.world.removeBody(e.body)}}crumbs(e,t){this.soil||=ci(new T({color:new g(.035,.026,.02),roughness:1,flatShading:!0}));for(let n=0;n<t;n++){let t=.004+Math.random()*.009,n=new C(this.geo,this.soil);n.scale.set(t,t*.7,t);let r=new we({mass:.005,shape:new l(t*.6),position:new s(e.x+(Math.random()-.5)*.08,e.y+Math.random()*.04,e.z+(Math.random()-.5)*.08),velocity:new s((Math.random()-.5)*1.4,.3+Math.random()*.9,(Math.random()-.5)*1.4),linearDamping:.5,angularDamping:.8,collisionFilterGroup:Ni.DEBRIS,collisionFilterMask:Ni.STATIC,allowSleep:!0,sleepSpeedLimit:.06,sleepTimeLimit:.3});this.scene.add(n),this.world.addBody(r),this.items.push({mesh:n,body:r})}}update(){for(let e of this.items)e.body.sleepState!==we.SLEEPING&&(e.mesh.position.copy(e.body.interpolatedPosition),e.mesh.quaternion.copy(e.body.interpolatedQuaternion))}},Ui=[{id:`bed`,x0:.1,x1:1.58,z0:1.9,z1:3.984,yTop:1.3,base:.5,cell:.03,bottom:.3},{id:`desk`,x0:2.68,x1:3.78,z0:.02,z1:.64,yTop:1.29,base:.74,cell:.02,bottom:.715},{id:`shelfLow`,x0:3.08,x1:3.76,z0:0,z1:.2,yTop:1.655,base:1.32,cell:.02,bottom:1.302},{id:`shelfHigh`,x0:3.08,x1:3.76,z0:0,z1:.2,yTop:2.45,base:1.68,cell:.02,bottom:1.662}],Wi=L.W,Gi=L.D,Ki=L.H,qi=L.win,Ji=.3,Yi=[[`floor`,-.3,-.3,-.3,Wi+Ji,0,Gi+Ji],[`ceiling`,-.3,Ki,-.3,Wi+Ji,Ki+Ji,Gi+Ji],[`wallLeft`,-.3,0,-.3,0,Ki,Gi+Ji],[`wallRight`,Wi,0,-.3,Wi+Ji,Ki,Gi+Ji],[`wallBack`,-.3,0,Gi,Wi+Ji,Ki,Gi+Ji],[`wallWinL`,-.3,0,-.3,qi.x0,Ki,0],[`wallWinR`,qi.x1,0,-.3,Wi+Ji,Ki,0],[`wallWinLow`,qi.x0,0,-.3,qi.x1,qi.y0-.03,0],[`wallWinTop`,qi.x0,qi.y1,-.3,qi.x1,Ki,0],[`windowGlass`,qi.x0,qi.y0-.03,-.3,qi.x1,qi.y1,qi.glassZ+.035],[`sill`,.5,.832,-.2,2.5,.862,.07],[`radiator`,.95,.12,0,2.05,.74,.13],[`bedBase`,.1,0,1.9,1.58,.5,3.984],[`headboard`,.1,0,3.94,1.58,.95,3.984],[`nsTop`,1.65,.478,3.555,2.05,.5,3.955],[`nsBody`,1.68,.15,3.585,2.02,.478,3.925],[`nsLeg1`,1.66,0,3.565,1.701,.48,3.606],[`nsLeg2`,1.999,0,3.565,2.04,.48,3.606],[`nsLeg3`,1.66,0,3.904,1.701,.48,3.945],[`nsLeg4`,1.999,0,3.904,2.04,.48,3.945],[`bookPile`,2.158,0,3.621,2.442,.03,3.959],[`deskLeg`,2.682,0,.032,2.702,.715,.63],[`deskPedestal`,3.4,0,.032,3.778,.715,.63],[`deskPanel`,2.702,.415,.034,3.4,.715,.05],[`bin`,2.756,0,.194,2.988,.275,.426],[`chairSeat`,2.95,.39,.76,3.4,.445,1.2],[`chairBack`,2.94,.445,1.17,3.41,.82,1.29],[`plantShelf`,0,1.98,.28,.2,2,.86],[`plantPot`,.026,2,.476,.184,2.14,.634],[`wardrobe`,3.8,0,0,4.78,2.12,.6],[`hamper`,4.371,0,.782,4.76,.4,1.154],[`backpack`,4.509,0,1.436,4.781,.45,1.759],[`sneakers`,4.44,0,2.29,4.742,.11,2.541],[`floorBooks`,.069,0,1.055,.333,.114,1.378]],Xi=[[`lampGlobe`,2.4,2.078,2,.165]],Zi={spawn:{x:2.65,z:2.3,yaw:Math.PI*.9},rug:{x0:1.8,x1:3.5,z0:1.38,z1:2.92,y:.02},bed:{x0:.1,x1:1.58,z0:1.9,z1:3.94,y:.5},sill:{x0:.5,x1:2.5,z0:-.2,z1:.09,y:.862,open:[0,1]},desk:{x0:2.68,x1:3.78,z0:.02,z1:.64,y:.74,open:[0,1]},wardrobeTop:{x0:3.8,x1:4.78,z0:0,z1:.6,y:2.12,open:[-.3,.95]},nightstand:{x0:1.65,x1:2.05,z0:3.555,z1:3.955,y:.5,open:[.5,-.87]},chair:{x0:2.95,x1:3.4,z0:.76,z1:1.2,y:.445},shelfHigh:{x0:3.08,x1:3.76,z0:0,z1:.2,y:1.68,open:[0,1]},radiator:{x0:.95,x1:2.05,z0:0,z1:.13,y:.74}};function Qi(e,t,n){for(let r of Object.values(Zi))if(r.open&&e>r.x0-.03&&e<r.x1+.03&&n>r.z0-.03&&n<r.z1+.03&&t>r.y-.03&&t<r.y+.3)return r.open;return null}function $i(e,t,n=.06){return t.x>e.x0-n&&t.x<e.x1+n&&t.z>e.z0-n&&t.z<e.z1+n&&t.y>e.y-.08&&t.y<e.y+.45}function ea(e,t){let n=(n,r,i,a,o)=>{let c=new we({mass:0,material:t,shape:n,position:new s(r,i,a),collisionFilterGroup:Ni.STATIC,collisionFilterMask:Ni.CAT|Ni.PROP|Ni.DEBRIS});return o&&c.quaternion.copy(o),c.updateAABB(),e.addBody(c),c};for(let[e,t,r,i,a,o,c]of Yi)n(new me(new s((a-t)/2,(o-r)/2,(c-i)/2)),(t+a)/2,(r+o)/2,(i+c)/2).name=e;for(let[e,t,r,i,a]of Xi)n(new l(a),t,r,i).name=e;let r=new a().setFromEuler(-Math.PI/2,0,0);for(let e of Ui){let t=wi[e.id];if(!t){console.warn(`[colliders] no height field for`,e.id,`- run tools/colliders.mjs`),n(new me(new s((e.x1-e.x0)/2,(e.base-e.bottom)/2,(e.z1-e.z0)/2)),(e.x0+e.x1)/2,(e.base+e.bottom)/2,(e.z0+e.z1)/2);continue}let i=[];for(let e=0;e<t.nx;e++)i.push(t.data.slice(e*t.nz,(e+1)*t.nz));n(new _e(i,{elementSize:e.cell,minValue:e.bottom}),e.x0,0,e.z1,r).name=`hf:`+e.id}}var ta={x0:1.8,x1:3.5,z0:1.38,z1:2.92,y:.012},na=.045;function ra(e,t,n,r){if(n<e.x0||n>e.x1||r<e.z0||r>e.z1)return null;let i=Math.min(t.nx-1,Math.max(0,(n-e.x0)/e.cell)),a=Math.min(t.nz-1,Math.max(0,(e.z1-r)/e.cell)),o=Math.floor(i),s=Math.floor(a),c=Math.min(t.nx-1,o+1),l=Math.min(t.nz-1,s+1),u=i-o,d=a-s,f=t.data,p=f[o*t.nz+s],m=f[c*t.nz+s],h=f[o*t.nz+l],g=f[c*t.nz+l];return(p*(1-u)+m*u)*(1-d)+(h*(1-u)+g*u)*d}var ia={h:-1/0,rect:null};function aa(e,t,n,r=!0){let i=-1/0,a=null;for(let o of Yi){let s=o[0],c=o[1],l=o[3],u=o[4],d=o[5],f=r&&s===`sill`?na:o[6];e<c||e>u||t<l||t>f||d>n||d<=i||(i=d,a=o)}e>=ta.x0&&e<=ta.x1&&t>=ta.z0&&t<=ta.z1&&ta.y<=n&&ta.y>i&&(i=ta.y,a=[`rug`,ta.x0,0,ta.z0,ta.x1,ta.y,ta.z1]);for(let r of Ui){let o=wi[r.id];if(!o)continue;let s=ra(r,o,e,t);s!==null&&s<=n&&s>i&&(i=s,a=[r.id,r.x0,r.bottom,r.z0,r.x1,s,r.z1])}return a&&r&&a[0]===`sill`&&(a=[`sill`,a[1],a[2],a[3],a[4],a[5],na]),ia.h=i,ia.rect=a,ia}var oa=827345223,sa=.15;function ca(e){let t=new DataView(e);if(t.getUint32(0,!0)!==oa)throw Error(`not a light patch file`);let n=t.getUint32(4,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),i=8+n+(4-(8+n)%4)%4,a=0;for(let e of r.meshes)a+=e.n;let o=new Uint32Array(e,i,a),s=new Uint16Array(e,i+a*4),c=0,l=0,u=e=>{let t=new Float32Array(e);for(let n=0;n<e;n++)t[n]=xe.fromHalfFloat(s[l++]);return t};return r.meshes.map(e=>{let t=o.subarray(c,c+e.n);return c+=e.n,{key:e.key,back:e.back,idx:t,gi:u(e.n*3),gd:u(e.n*3),gb:e.back?u(e.n*3):null}})}var la=new M,ua=class{constructor(e,t){let n=new Map(on(e).map(e=>[e.key,e.mesh]));this.parts=[];for(let e of ca(t)){let t=n.get(e.key);if(!t){console.warn(`[footprints] no mesh for`,e.key);continue}let r=t.geometry,i=e.idx.length,a=e.back?[`gi`,`gd`,`giB`]:[`gi`,`gd`],o=e.back?[e.gi,e.gd,e.gb]:[e.gi,e.gd];if(a.some(e=>!r.attributes[e]))continue;let s=a.map(t=>{let n=r.attributes[t].array,a=new Float32Array(i*3);for(let t=0;t<i;t++){let r=e.idx[t]*3;a[t*3]=n[r],a[t*3+1]=n[r+1],a[t*3+2]=n[r+2]}return a}),c=new Float32Array(i*3),l=r.attributes.position;for(let n=0;n<i;n++)la.fromBufferAttribute(l,e.idx[n]).applyMatrix4(t.matrixWorld),c[n*3]=la.x,c[n*3+1]=la.y,c[n*3+2]=la.z;this.parts.push({mesh:t,names:a,idx:e.idx,from:s,to:o,pos:c,k:new Float32Array(i),dirty:!1})}this.fading=[]}bind(e){for(let t of e){let e=t.home,n=t.size,r=e.x-n.x/2,i=e.x+n.x/2,a=e.y-n.y/2,o=e.y+n.y/2,s=e.z-n.z/2,c=e.z+n.z/2;t.footprint=[],this.parts.forEach((e,n)=>{let l=[],u=[];for(let t=0;t<e.idx.length;t++){let n=e.pos[t*3],d=e.pos[t*3+1],f=e.pos[t*3+2],p=Math.max(r-n,0,n-i),m=Math.max(a-d,0,d-o),h=Math.max(s-f,0,f-c),g=Math.hypot(p,m,h);g>=.15||(l.push(t),u.push(1-k.smoothstep(g,sa*.45,sa)))}l.length&&t.footprint.push({pi:n,ids:l,ws:u})})}}release(e){e.footprint&&!e.footprintGone&&(e.footprintGone=!0,this.fading.push({prop:e,t:0}))}update(e){if(this.fading.length){for(let t=this.fading.length-1;t>=0;t--){let n=this.fading[t];n.t=Math.min(1,n.t+e/.3);for(let{pi:e,ids:t,ws:r}of n.prop.footprint){let i=this.parts[e];for(let e=0;e<t.length;e++){let a=t[e],o=r[e]*n.t;o>i.k[a]&&(i.k[a]=o,i.dirty=!0)}}n.t>=1&&this.fading.splice(t,1)}for(let e of this.parts)e.dirty&&(e.dirty=!1,e.names.forEach((t,n)=>{let r=e.mesh.geometry.attributes[t],i=r.array,a=e.from[n],o=e.to[n];for(let t=0;t<e.idx.length;t++){let n=e.k[t];if(n<=0)continue;let r=e.idx[t]*3,s=t*3;i[r]=a[s]+(o[s]-a[s])*n,i[r+1]=a[s+1]+(o[s+1]-a[s+1])*n,i[r+2]=a[s+2]+(o[s+2]-a[s+2])*n}r.needsUpdate=!0}))}}},da=`// Maimai - iris and pupil, procedural (GLSL ES 3.00, no textures, needs highp float in the fragment shader).
//
//   vec4 irisColor(vec2 p, float dilate)
//     p       position on the iris disc in iris radii (|p| = 1 at the outer edge of the limbal ring, +y up,
//             +x to the viewer's right)
//     dilate  0 = thinnest slit ... 1 = wide oval (ref3/iris r0c0 ... r0c3; 1/3 and 2/3 are the middle panels)
//     returns rgb = unlit surface colour (sRGB 0..1; PUPIL inside the pupil), a = 1 inside the pupil, 0 outside,
//             with a soft edge of +-IRIS_PUPIL_SOFT
//   float irisPupil(vec2 p, float dilate, out float dist)   the pupil coverage alone (no texture work)
//   vec3  irisPupilShape(float dilate)                      (half-width, half-height, outline exponent)
//
//   irisDetail (global, default 1.0) fades the fibres: 1 = all of them, 0 = smooth zones only.  The shortest fibre
//   wavelength is 1/30 of the iris radius (2 px when the iris is 120 px across; under 3 % of the fibre power lies
//   below that), so use 1.0 from 120 px up and fade out below, e.g.
//       irisDetail = clamp((irisDiameterPx - 50.0) / 70.0, 0.0, 1.0);
//   The mean tone at a given radius moves by less than 3 % over the whole range of irisDetail.  To drive it as a
//   uniform instead of assigning the global, \`#define IRIS_DETAIL_UNIFORM\` before this file.
//
// All tones are mixes of the five palette colours below (retune them freely: the zone tables are relative to
// IRIS).  Everything else was traced from ref3/iris with parts/eye/measure.py: the pupil outlines, the radial tone
// and warmth profile, the fibre contrast by radius, the limbal ring.  \`measure.py compare\` renders test.html and
// prints the errors against the sheet; \`measure.py tune\` refits the two tables between the <...> markers.

const vec3 IRIS       = vec3(126.0, 134.0, 142.0) / 255.0;
const vec3 IRIS_LIGHT = vec3(160.0, 166.0, 170.0) / 255.0;
const vec3 IRIS_DARK  = vec3( 86.0,  94.0, 104.0) / 255.0;
const vec3 IRIS_RING  = vec3( 96.0,  78.0,  66.0) / 255.0;
const vec3 PUPIL      = vec3( 10.0,   9.0,  10.0) / 255.0;

#ifdef IRIS_DETAIL_UNIFORM
uniform float irisDetail;
#else
float irisDetail = 1.0;
#endif

const float IRIS_TAU = 6.28318530718;

// ---- pupil ---------------------------------------------------------------------------------------------------
// Half-width of the pupil at height y:  g(y) = w * (1 - (y/h)^2)^e  about IRIS_PUPIL_CENTRE.
// e = 0.5 is an ellipse, e = 1 a pointed lens, e > 1 a needle with drawn-out tips (its last part is thinner than
// the soft edge and fades: the slit of panel r0c0 is black over +-0.49 and a hairline out to +-0.56).
// Nodes = the four sheet panels (dilate 0, 1/3, 2/3, 1) as (w, h, e), fitted with \`measure.py pupilfit\`; between
// them a monotone cubic (IRIS_PUPIL_M = slopes).
#ifndef IRIS_PUPIL_CENTRE                                  // in ref3/iris the pupil sits 2 % of the radius left of
#define IRIS_PUPIL_CENTRE vec2(-0.020, -0.004)             // centre (in ref3/eyeball it is centred): #define it as
#endif                                                     // vec2(0.0) before this file for a centred pupil
const float IRIS_PUPIL_SOFT   = 0.010;                    // half-width of the soft edge, iris radii
const vec3  IRIS_PUPIL_V[4] = vec3[4](vec3(0.0154, 0.6505, 2.045), vec3(0.0732, 0.5375, 0.994),
                                      vec3(0.1815, 0.5253, 0.672), vec3(0.4375, 0.7145, 0.542));
const vec3  IRIS_PUPIL_M[4] = vec3[4](vec3(0.0977, -0.4902, -4.2465), vec3(0.2261, -0.0661, -1.4789),
                                      vec3(0.4566, 0.0, -0.5557), vec3(0.9895, 0.8697, -0.102));   // d/d(dilate)

vec3 irisPupilShape(float dilate) {
    float x = clamp(dilate, 0.0, 1.0) * 3.0;
    int i = int(min(floor(x), 2.0));
    float t = x - float(i), t2 = t * t, t3 = t2 * t;
    return (2.0 * t3 - 3.0 * t2 + 1.0) * IRIS_PUPIL_V[i] + (t3 - 2.0 * t2 + t) / 3.0 * IRIS_PUPIL_M[i]
         + (3.0 * t2 - 2.0 * t3) * IRIS_PUPIL_V[i + 1] + (t3 - t2) / 3.0 * IRIS_PUPIL_M[i + 1];
}

// pupil coverage 0..1 at p; \`dist\` = signed distance estimate to the outline in iris radii (negative inside)
float irisPupil(vec2 p, float dilate, out float dist) {
    vec3 s = irisPupilShape(dilate);
    vec2 q = vec2(abs(p.x - IRIS_PUPIL_CENTRE.x), p.y - IRIS_PUPIL_CENTRE.y);
    float u = q.y / s.y;
    float t = max(1.0 - u * u, 0.0);
    float g = s.x * pow(t, s.z);
    if (s.z >= 1.0) {                                    // lens / needle: distance from the half-width function
        float gp = -2.0 * s.z * s.x * q.y / (s.y * s.y) * pow(max(t, 1e-6), s.z - 1.0);
        dist = (q.x - g) / sqrt(1.0 + gp * gp);
    } else {                                             // oval: distance from the implicit superellipse
        float k = 1.0 / s.z, xw = q.x / s.x;
        float f = pow(xw, k) + u * u - 1.0;
        vec2 gr = vec2(k * pow(max(xw, 1e-4), k - 1.0) / s.x, 2.0 * q.y / (s.y * s.y));
        dist = f / sqrt(dot(gr, gr) + 1e-12);
    }
    // near edge + far edge: where a pointed pupil is thinner than the soft edge it fades instead of staying black
    float e = IRIS_PUPIL_SOFT;
    float farEdge = mix(1.0, smoothstep(-e, e, q.x + g), smoothstep(0.8, 1.0, s.z));
    return clamp(smoothstep(-e, e, -dist) + farEdge - 1.0, 0.0, 1.0);
}

// ---- hash and noise --------------------------------------------------------------------------------------------
float irisHash(int x, int y, uint seed) {
    uint h = uint(x) * 0x9E3779B1u ^ uint(y) * 0x85EBCA77u ^ seed * 0xC2B2AE3Du;
    h ^= h >> 15; h *= 0x2C1B3C6Du; h ^= h >> 12; h *= 0x297A2D39u; h ^= h >> 15;
    return float(h >> 8) * (1.0 / 16777216.0);
}

// value noise in [-1, 1]; x is periodic with \`period\` cells (the angle), y is not (the radius)
float irisNoise(vec2 x, int period, uint seed) {
    vec2 f = floor(x);
    vec2 t = x - f;
    t = t * t * (3.0 - 2.0 * t);
    int ix = int(f.x), iy = int(f.y) + 4096;
    int x0 = ((ix % period) + period) % period, x1 = (x0 + 1) % period;
    float a = mix(irisHash(x0, iy, seed), irisHash(x1, iy, seed), t.x);
    float b = mix(irisHash(x0, iy + 1, seed), irisHash(x1, iy + 1, seed), t.x);
    return mix(a, b, t.y) * 2.0 - 1.0;
}

// ---- fibres ------------------------------------------------------------------------------------------------------
// Two layers in polar coordinates, both built from bands with a whole number of cells per turn.  At radius r only
// the two bands whose cell width 2 pi r / N lies in the wanted range are cross-faded, so the fibres keep one width
// from pupil to limbus and nothing finer is ever drawn.
//   fine:  a carrier with one cycle per cell and a slowly varying random envelope and phase (narrow-band noise):
//          wavelengths stay within about [0.8, 1.6] * IRIS_FINE_MIN
//   mid:   gradient noise stretched along the radius: wavelengths from IRIS_MID_MIN up, most of it at 2x that
const float IRIS_FINE_MIN = 0.041;      // fine layer: shortest cell = nominal wavelength, iris radii
const float IRIS_FINE_COH = 1.7;        // envelope cell, in wavelengths across the fibre ...
const float IRIS_FINE_LEN = 6.0;        // ... and along it
const float IRIS_MID_MIN  = 0.040;      // mid layer: narrowest cell, iris radii
const float IRIS_MID_LEN  = 4.0;        // cell length along the fibre, in cell widths

vec2 irisHash2(int i, int k, uint sd) {
    uint h = uint(i) * 0x9E3779B1u ^ uint(k) * 0x85EBCA77u ^ sd * 0xC2B2AE3Du;
    h ^= h >> 15; h *= 0x2C1B3C6Du; h ^= h >> 12; h *= 0x297A2D39u; h ^= h >> 15;
    return vec2(float(h & 0xFFFFu), float(h >> 16)) * (2.0 / 65535.0) - 1.0;
}

float irisFineBand(float turn, float lr, float j, float lean, uint seed) {
    float fn = floor(256.0 * exp2(-0.25 * j) + 0.5);   // cycles per turn
    float s = lr * fn / IRIS_TAU;                       // conformal radial coordinate (1 = one wavelength)
    float a = turn * fn + lean * s;
    float m = max(floor(fn / IRIS_FINE_COH + 0.5), 1.0); // envelope cells per turn
    int mi = int(m);
    uint sd = seed + uint(j) * 131u;
    vec2 x = vec2(a * m / fn, s / IRIS_FINE_LEN + 3.7 * j);
    vec2 f = floor(x);
    vec2 t = x - f; t = t * t * (3.0 - 2.0 * t);
    int i0 = ((int(f.x) % mi) + mi) % mi, i1 = (i0 + 1) % mi, k = int(f.y) + 4096;
    vec2 z = mix(mix(irisHash2(i0, k, sd), irisHash2(i1, k, sd), t.x),
                 mix(irisHash2(i0, k + 1, sd), irisHash2(i1, k + 1, sd), t.x), t.y);
    float ph = IRIS_TAU * fract(a);
    return z.x * cos(ph) - z.y * sin(ph);
}

// fine fibres leaning by atan(lean) from the radius: zero mean, about unit contrast
float irisFine(float turn, float lr, float lean, uint seed) {
    float u = 4.0 * (log2(256.0 * IRIS_FINE_MIN / IRIS_TAU) - lr / 0.69314718);     // band coordinate
    float j = ceil(u);
    float w1 = sin(1.5707963 * (j - u)); w1 *= w1;
    float w2 = 1.0 - w1;
    j = clamp(j, 0.0, 26.0);
    float v = w1 * irisFineBand(turn, lr, j, lean, seed) + w2 * irisFineBand(turn, lr, j + 1.0, lean, seed);
    return 2.3 * v / sqrt(w1 * w1 + w2 * w2);
}

float irisGrad(int i, int k, uint sd, vec2 d) {
    float h = irisHash(i, k, sd) * IRIS_TAU;
    return dot(vec2(cos(h), sin(h)), d);
}

float irisMidBand(float turn, float lr, float j, uint seed) {
    float fn = floor(256.0 * exp2(-0.25 * j) + 0.5);
    int n = int(fn);
    uint sd = seed + uint(j) * 131u;
    float s = lr * fn / IRIS_TAU;                       // conformal radial coordinate (1 = one cell width)
    vec2 x = vec2(turn * fn, s / IRIS_MID_LEN + 7.3 * j);
    vec2 f = floor(x);
    vec2 d = x - f;
    vec2 u = d * d * d * (d * (d * 6.0 - 15.0) + 10.0);
    int i0 = ((int(f.x) % n) + n) % n, i1 = (i0 + 1) % n, k = int(f.y) + 4096;
    return mix(mix(irisGrad(i0, k, sd, d), irisGrad(i1, k, sd, d - vec2(1.0, 0.0)), u.x),
               mix(irisGrad(i0, k + 1, sd, d - vec2(0.0, 1.0)), irisGrad(i1, k + 1, sd, d - vec2(1.0, 1.0)), u.x), u.y);
}

// broader radial streaks: zero mean, about unit contrast
float irisMid(float turn, float lr, uint seed) {
    float u = 4.0 * (log2(256.0 * IRIS_MID_MIN / IRIS_TAU) - lr / 0.69314718);
    float j = ceil(u);
    float w1 = sin(1.5707963 * (j - u)); w1 *= w1;
    float w2 = 1.0 - w1;
    j = clamp(j, 0.0, 26.0);
    float v = w1 * irisMidBand(turn, lr, j, seed) + w2 * irisMidBand(turn, lr, j + 1.0, seed);
    return 3.6 * v / sqrt(w1 * w1 + w2 * w2);
}

// ---- tone --------------------------------------------------------------------------------------------------------
float irisLuma(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }

// colour with luminance \`l\` (relative to IRIS) and warmth \`w\` (share of IRIS_RING), mixed from the palette only.
// The luminance has priority over the warmth where the palette cannot give both (light and warm).
vec3 irisTone(float l, float w) {
    float li = irisLuma(IRIS), ld = irisLuma(IRIS_DARK) / li, ll = irisLuma(IRIS_LIGHT) / li, lg = irisLuma(IRIS_RING) / li;
    w = clamp(w, 0.0, clamp((ll - l) / max(ll - lg, 1e-3), 0.0, 1.0));
    float lc = (l - w * lg) / max(1.0 - w, 1e-3);      // luminance wanted from the cool chain DARK - IRIS - LIGHT
    vec3 cool = lc < 1.0 ? mix(IRIS_DARK, IRIS, clamp((lc - ld) / max(1.0 - ld, 1e-3), 0.0, 1.0))
                         : mix(IRIS, IRIS_LIGHT, clamp((lc - 1.0) / max(ll - 1.0, 1e-3), 0.0, 1.0));
    return mix(cool, IRIS_RING, w);
}

// Zones by radius: (luminance relative to IRIS, warmth = share of IRIS_RING, fibre contrast).
// IRIS_ZONE: knots every 0.05 from r = 0 to 0.90: warm and darker round the slit, blue-grey and lightest at
// 0.60-0.72, browner and darker outwards.  IRIS_LIMBUS: knots every 0.01 from r = 0.895 to 0.995: the dark band
// (0.94-0.97, as dark as IRIS_DARK) and the thin brown ring (0.97-1.0).  The sheet's ring is lighter than its dark
// band (0.76 against 0.69 of the mid-iris luminance), so it comes out as 3/4 IRIS_RING + 1/4 IRIS_LIGHT.
// <IRIS_ZONE>
const vec3 IRIS_ZONE[19] = vec3[19](
    vec3(0.859, 0.46, 0.109), vec3(0.869, 0.46, 0.175), vec3(0.879, 0.46, 0.219), vec3(0.881, 0.37, 0.231),
    vec3(0.899, 0.33, 0.206), vec3(0.937, 0.30, 0.187), vec3(0.979, 0.25, 0.197), vec3(0.995, 0.22, 0.230),
    vec3(0.972, 0.16, 0.239), vec3(0.980, 0.10, 0.260), vec3(0.969, 0.05, 0.295), vec3(0.991, 0.02, 0.264),
    vec3(1.025, 0.01, 0.226), vec3(1.036, 0.02, 0.232), vec3(1.033, 0.05, 0.251), vec3(0.999, 0.12, 0.228),
    vec3(0.947, 0.22, 0.185), vec3(0.902, 0.40, 0.170), vec3(0.821, 0.62, 0.145));
// </IRIS_ZONE>
// <IRIS_LIMBUS>
const vec3 IRIS_LIMBUS[11] = vec3[11](
    vec3(0.829, 0.60, 0.148), vec3(0.799, 0.65, 0.141), vec3(0.771, 0.67, 0.134), vec3(0.741, 0.69, 0.127),
    vec3(0.710, 0.70, 0.119), vec3(0.691, 0.70, 0.112), vec3(0.691, 0.71, 0.109), vec3(0.691, 0.71, 0.073),
    vec3(0.768, 0.82, 0.036), vec3(0.748, 0.82, 0.000), vec3(0.748, 0.82, 0.000));
// </IRIS_LIMBUS>

vec3 irisZone(float rz, float r) {
    if (r >= 0.895) {
        float x = clamp((r - 0.895) * 100.0, 0.0, 10.0);
        int i = int(min(floor(x), 9.0));
        return mix(IRIS_LIMBUS[i], IRIS_LIMBUS[i + 1], x - float(i));
    }
    float x = clamp(rz, 0.0, 0.90) * 20.0;
    int i = int(min(floor(x), 17.0));
    return mix(IRIS_ZONE[i], IRIS_ZONE[i + 1], x - float(i));
}

vec4 irisColor(vec2 p, float dilate) {
    float r = length(p);
    float turn = (r > 1e-6 ? atan(p.y, p.x) : 0.0) / IRIS_TAU + 0.5;   // 0..1 round the iris
    float lr = log(max(r, 0.03));
    float detail = clamp(irisDetail, 0.0, 1.0);

    // zone radius: the warm inner zone is drawn out along the slit; the boundary of the brown outer zone (the
    // collarette) is scalloped; the limbus stays a circle
    float rz = mix(length(vec2(p.x, 0.65 * p.y)), r, smoothstep(0.25, 0.70, r));
    float scallop = irisNoise(vec2(turn * 26.0, 0.5), 26, 5u);
    rz += 0.022 * scallop * smoothstep(0.60, 0.74, r) * (1.0 - smoothstep(0.83, 0.89, r));
    vec3 zone = irisZone(rz, r);

    // fibres: two fine families that swing independently as they run outwards (so they cross at shallow
    // angles), over broader radial streaks and mottling
    vec2 wx = vec2(turn * 8.0, lr * 4.0);
    float warpA = 0.040 / IRIS_TAU * irisNoise(wx, 8, 11u);
    float warpB = 0.040 / IRIS_TAU * irisNoise(wx + vec2(0.0, 0.5), 8, 23u);
    float fine = (irisFine(turn + warpA, lr, 0.0, 101u) + 0.7 * irisFine(turn + warpB, lr, 0.0, 211u)) / 1.22;
    float mid = irisMid(turn + warpA, lr, 401u);
    float mott = irisNoise(vec2(turn * 34.0, lr * 4.5), 34, 41u);
    // the fine layer leads between the pupillary zone and the collarette, the broader streaks elsewhere
    float wf = 0.30 + 0.40 * smoothstep(0.10, 0.30, r) - 0.20 * smoothstep(0.76, 0.86, r);
    float tex = 0.4 * zone.z * (detail * (wf * fine + sqrt(0.81 - wf * wf) * mid) + smoothstep(0.0, 0.5, detail) * mott);
    // collarette: a thin lighter line along the scalloped boundary
    float cq = (rz - 0.80) / 0.018;
    float coll = exp(-cq * cq) * (1.0 - smoothstep(0.83, 0.89, r));
    float l = zone.x * (1.0 + tex + 0.07 * coll);
    float warm = zone.y + 0.3 * tex + 0.06 * coll;

    // pupil margin: darker and warmer, more so the wider the pupil
    float dist;
    float a = irisPupil(p, dilate, dist);
    float dm = max(dist, 0.0), dl = clamp(dilate, 0.0, 1.0);
    float dq = dm / 0.048;
    l *= 1.0 - 0.37 * dl * dl * exp(-dq * dq);
    warm += 0.80 * dl * exp(-dm / 0.09) * (1.0 - smoothstep(0.90, 0.97, r));

    return vec4(mix(irisTone(l, warm), PUPIL, a), a);
}
`,fa=`// Maimai - surface of the tongue, procedural (GLSL ES 3.00, no textures, highp float in the fragment shader).
// Counted and traced on ref3/mouth/r0c0 (dorsal view, tongue 177 px wide); \`python3 parts/tongue/make_test.py --measure\`
// renders test.html in headless Chrome and counts the sheet and the shader the same way (papillae_check.png).
//
//   uv  = the "uv" attribute of parts/tongue/build.py: u 0..1 from the cat's right margin to its left margin
//         (fraction of the local width), v 0 = buried root end, TONGUE_VROOT = root edge (the lobes), 1 = tip.
//         The underside carries the uv of the dorsal point above it: gate everything with the "dorsal" attribute.
//
//   float tongueRelief(vec2 uv)            height 0..1 of the filiform papillae: backward-pointing spines in a
//                                          herring-bone (they lean away from the median groove, apex towards the
//                                          throat), longest either side of the groove, small in the groove, round
//                                          grains towards the tip, nothing on the margin band, the last 5 % of the
//                                          tip and the buried root
//   vec3  tongueTint(vec2 uv, vec3 base)   albedo: base in LINEAR rgb (three.js diffuseColor) with paler papilla
//                                          tips, darker skin between them, the dark median groove and mottling
//                                          (all factors are linear-space; faded by tonguePixel it is base * groove)
//   vec3  tonguePap(vec2 uv)               (relief, zone weight 0..1, groove 0..1) - evaluate once, then use
//   vec3  tongueTintP(vec2 uv, vec3 base, vec3 pap)   and pap.x instead of calling both functions above
//   vec3  tongueUnderTint(vec2 uv, vec3 base)         underside: pale frenulum line, two faint veins (ref r0c1)
//   vec2  tongueMetric(vec2 uv)            position on the developed tongue in units of its width W: x from the
//                                          midline (+ = the cat's left), y from the root edge towards the tip
//                                          (tip at TONGUE_LREF = 1.706, the proportions of the drawing)
//   float tonguePixelOf(vec2 uv)           size of one pixel in units of W (uses dFdx / dFdy)
//
// Scale (sheet): 1490 papillae on the blade, 1000-1400 per W^2, mean spacing 0.030 W; a spine is about 0.045 W long
// and 0.012 W wide; they lean 60 deg (root) .. 40 deg (middle) .. 15 deg (tip) off the long axis; the smooth margin
// band is 0.07 W wide. The pattern is tied to uv, so it stretches with the tongue (state "long" = 1.35 x the drawing).
//
// Anti-aliasing: set the global  tonguePixel = tonguePixelOf(uv);  once per fragment before the calls. The spines
// fade between 0.22 and 0.70 lattice cells per pixel (cells 4.5 px .. 1.4 px, i.e. a tongue 160 .. 50 px wide on
// screen), the fine grains at half that scale. Faded, the relief is 0 and the tint is base * groove.
// With tonguePixel = 0 (the default) nothing fades.
//
// Wiring into a three.js MeshPhysicalMaterial (vertexColors: true; attributes uv and dorsal on the geometry), on the
// hooks skinMaterial() of index.html already uses. NOT run in a test: test.html (make_test.py) is plain WebGL2 and
// exercises tonguePap / tongueRelief / tongueTintP / tongueUnderTint / tonguePixel on a flat developed tongue.
//   vertex:    attribute float dorsal; varying vec2 vTongueUv; varying float vTongueDorsal;
//              ... vTongueUv = uv; vTongueDorsal = dorsal;                         (after <begin_vertex>)
//   fragment:  after <color_fragment>:
//                  float tgD = smoothstep(0.55, 0.95, vTongueDorsal);              // 1 on the papillae-bearing top
//                  tonguePixel = tonguePixelOf(vTongueUv);
//                  vec3 tgP = tonguePap(vTongueUv);
//                  float tgH = tgP.x * tgD;
//                  diffuseColor.rgb = mix(tongueUnderTint(vTongueUv, diffuseColor.rgb),
//                                         tongueTintP(vTongueUv, diffuseColor.rgb, tgP), tgD);
//              after <roughnessmap_fragment>:
//                  roughnessFactor *= mix(1.0, mix(1.30, 0.80, tgP.x), tgP.y * tgD);   // dull skin, shiny spines
//              after <normal_fragment_maps>:  (bump from the screen-space derivatives of the height)
//                  vec3 dpx = dFdx(vViewPosition), dpy = dFdy(vViewPosition);
//                  vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
//                  float det = dot(dpx, r1);
//                  normal = normalize(abs(det) * normal - TONGUE_BUMP * sign(det) * (dFdx(tgH) * r1 + dFdy(tgH) * r2));
//   TONGUE_BUMP = height of a spine in the units of vViewPosition = 0.012 x the width of the tongue in the scene
//   (W = 1.10 lower-canine units; 0.008 is subtle, 0.02 is rasp-like; above 0.03 the bump normals fold over).
//   Base colour: the vertex colours of build.py already shade the groove broadly, so the groove term here is
//   scaled by TONGUE_GROOVE_TINT (default 0.45); #define it 1.0 before this file for a flat base colour.

#ifndef TONGUE_GROOVE_TINT
#define TONGUE_GROOVE_TINT 0.45
#endif
#ifndef TONGUE_FINE                 // 0 = leave out the fine grains (halves the cost)
#define TONGUE_FINE 1
#endif

const float TONGUE_LREF  = 1.706;   // blade length / width of the drawing (build.LREF)
const float TONGUE_VROOT = 0.25;    // v of the root edge (build.V_ROOT)
const float TONGUE_ROOTL = 1.20;    // nominal length of the buried root, W
const float TONGUE_CELL  = 0.0285;   // spacing of the spines, W
const float TONGUE_GRAIN = 0.0155;  // spacing of the fine grains, W
// half-width / W of the outline at blade fraction 0, 0.025 .. 1 (build.G_TAB; check.py compares the two)
const float TONGUE_G[41] = float[41](
    0.497, 0.505, 0.519, 0.525, 0.522, 0.515, 0.505, 0.501, 0.4975, 0.497, 0.500, 0.500, 0.500, 0.500, 0.500,
    0.500, 0.500, 0.500, 0.497, 0.489, 0.4885, 0.483, 0.473, 0.4655, 0.453, 0.440, 0.4275, 0.415, 0.4015, 0.392,
    0.3815, 0.3695, 0.353, 0.3405, 0.325, 0.3055, 0.2855, 0.256, 0.2175, 0.163, 0.0);

float tonguePixel = 0.0;            // size of a pixel in units of W; set it per fragment (see above)

float tongueStation(vec2 uv) {      // -1 root end .. 0 root edge .. 1 tip
    return uv.y < TONGUE_VROOT ? uv.y / TONGUE_VROOT - 1.0 : (uv.y - TONGUE_VROOT) / (1.0 - TONGUE_VROOT);
}

float tongueHalfWidth(float t) {
    if (t <= 0.0) return mix(0.497, 0.36, clamp(-t, 0.0, 1.0));
    float x = min(t, 1.0) * 40.0;
    int i = int(min(floor(x), 39.0));
    float a = TONGUE_G[i], b = TONGUE_G[i + 1];
    return sqrt(mix(a * a, b * b, x - float(i)));
}

vec2 tongueMetric(vec2 uv) {
    float t = tongueStation(uv);
    return vec2((uv.x - 0.5) * 2.0 * tongueHalfWidth(t), t * (t < 0.0 ? TONGUE_ROOTL : TONGUE_LREF));
}

float tonguePixelOf(vec2 uv) {
    vec2 p = tongueMetric(uv);
    return length(max(abs(dFdx(p)), abs(dFdy(p))));
}

vec2 tongueHash2(vec2 c) {
    vec3 p3 = fract(vec3(c.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
}

float tongueNoise(vec2 p) {         // smooth value noise 0..1
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = tongueHash2(i).x, b = tongueHash2(i + vec2(1.0, 0.0)).x;
    float c = tongueHash2(i + vec2(0.0, 1.0)).x, d = tongueHash2(i + vec2(1.0, 1.0)).x;
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// the median groove as a tone, 0..1: a trough in the rear 45 %, a crease from there to 85 % of the blade
float tongueGroove(vec2 p, float t) {
    float s = mix(0.080, 0.038, smoothstep(0.36, 0.58, t));
    return exp(-p.x * p.x / (s * s)) * smoothstep(-0.45, 0.02, t) * (1.0 - smoothstep(0.70, 0.88, t));
}

// spines: staggered jittered lattice, one oriented tear-drop per cell; \`size\` 0..1, \`dir\` = unit vector base -> apex
float tongueSpines(vec2 p, float size, vec2 dir) {
    vec2 g = p / TONGUE_CELL;
    vec2 nrm = vec2(-dir.y, dir.x);
    float len = 0.050 * (0.30 + 0.70 * size), wid = 0.0082 * (0.70 + 0.30 * size);
    float h = 0.0;
    for (int j = -1; j <= 1; j++) {
        float row = floor(g.y) + float(j);
        float off = 0.5 * mod(row, 2.0);
        float col = floor(g.x - off);
        for (int i = -1; i <= 1; i++) {
            vec2 c = vec2(col + float(i), row);
            vec2 r = tongueHash2(c);
            float k = fract(r.x * 7.31 + r.y * 3.17), k2 = fract(r.x * 13.7 + r.y * 5.3);   // two more random numbers
            if (k2 < 0.06) continue;                                     // a bare spot now and then
            vec2 d = p - (c + vec2(off + 0.5, 0.5) + (r - 0.5) * 0.85) * TONGUE_CELL;
            vec2 dj = normalize(dir + nrm * (k2 - 0.53) * 0.55);         // each spine leans a little differently
            float s = dot(d, dj) / (len * (0.60 + 0.80 * k));            // -0.5 base .. +0.5 apex
            float b = dot(d, vec2(-dj.y, dj.x)) / (wid * (0.80 + 0.40 * r.x) * (1.0 - 0.40 * smoothstep(-0.2, 0.5, s)));
            float prof = smoothstep(-0.55, 0.26, s) * (1.0 - smoothstep(0.26, 0.50, s));
            h = max(h, (0.55 + 0.45 * r.y) * prof * exp(-b * b));
        }
    }
    return h;
}

float tongueGrains(vec2 p) {        // round grains 0..1
    vec2 g = p / TONGUE_GRAIN;
    float h = 0.0;
    for (int j = -1; j <= 1; j++) {
        float row = floor(g.y) + float(j);
        float off = 0.5 * mod(row, 2.0);
        float col = floor(g.x - off);
        for (int i = -1; i <= 1; i++) {
            vec2 c = vec2(col + float(i), row) + 91.0;
            vec2 r = tongueHash2(c);
            vec2 d = g - (c - 91.0 + vec2(off + 0.5, 0.5) + (r - 0.5) * 0.6);
            h = max(h, (0.5 + 0.5 * r.x) * exp(-dot(d, d) / 0.105));
        }
    }
    return h;
}

vec3 tonguePap(vec2 uv) {
    float t = tongueStation(uv);
    float xi = 2.0 * uv.x - 1.0, ax = abs(xi);
    vec2 p = tongueMetric(uv);
    float groove = tongueGroove(p, t);
    // where the spines grow: not on the margin band, the tip, the buried root
    float zone = (1.0 - smoothstep(0.66, 0.93, ax)) * (1.0 - smoothstep(0.80, 0.955, t)) * smoothstep(-0.60, -0.15, t);
    float size = zone * mix(1.0, 0.55, exp(-p.x * p.x / 0.0016)) * mix(1.0, 0.50, smoothstep(0.50, 0.86, t))
               * (0.72 + 0.56 * tongueNoise(p / 0.13 + 3.0));              // patches of longer and shorter spines
    // herring-bone: lean off the long axis, 0 on the midline and on the margin
    float ang = radians(mix(mix(62.0, 42.0, smoothstep(0.08, 0.40, t)), 14.0, smoothstep(0.45, 0.90, t)));
    ang *= clamp(p.x / 0.05, -1.0, 1.0) * (1.0 - smoothstep(0.72, 0.96, ax));
    vec2 dir = vec2(sin(ang), -cos(ang));                                   // apex: towards the root, away from the midline
    float fS = 1.0 - smoothstep(0.22, 0.70, tonguePixel / TONGUE_CELL);
    float h = 0.0;
    if (fS > 0.0 && zone > 0.002) h = tongueSpines(p, size, dir) * smoothstep(0.0, 0.22, size) * fS;
#if TONGUE_FINE
    float fG = 1.0 - smoothstep(0.22, 0.70, tonguePixel / TONGUE_GRAIN);
    float gz = (1.0 - smoothstep(0.86, 0.985, ax)) * (1.0 - smoothstep(0.90, 0.99, t)) * smoothstep(-0.60, -0.15, t);
    if (fG > 0.0 && gz > 0.002) h = max(h, tongueGrains(p) * gz * fG * mix(0.42, 0.26, zone));
#endif
    return vec3(h, zone * fS, groove);
}

float tongueRelief(vec2 uv) { return tonguePap(uv).x; }

vec3 tongueTintP(vec2 uv, vec3 base, vec3 pap) {
    vec2 p = tongueMetric(uv);
    vec3 c = base * mix(vec3(1.0), vec3(0.66, 0.49, 0.46), TONGUE_GROOVE_TINT * pap.z);
    float n = tongueNoise(p / 0.105 + 17.0) + 0.5 * tongueNoise(p / 0.047 + 5.0) - 0.75;      // -0.75 .. 0.75
    c *= 1.0 + n * vec3(0.10, 0.19, 0.21) * (1.0 - smoothstep(0.5, 1.5, tonguePixel / 0.047));
    c *= mix(vec3(1.0), vec3(0.900, 0.790, 0.765), pap.y * (1.0 - smoothstep(0.04, 0.40, pap.x)));   // skin between
    return mix(c, min(c * vec3(1.30, 1.62, 1.68) + 0.010, vec3(1.0)), smoothstep(0.18, 0.80, pap.x)); // pale tips
}

vec3 tongueTint(vec2 uv, vec3 base) { return tongueTintP(uv, base, tonguePap(uv)); }

vec3 tongueUnderTint(vec2 uv, vec3 base) {
    float t = tongueStation(uv);
    vec2 p = tongueMetric(uv);
    float along = smoothstep(-0.5, 0.0, t) * (1.0 - smoothstep(0.55, 0.80, t));
    float fren = exp(-p.x * p.x / 0.00020) * along;                                  // pale ridge on the midline
    float w = 0.012 * tongueNoise(vec2(p.y / 0.16, 3.0)) - 0.006;
    float vx = abs(p.x) - (0.085 + 0.07 * smoothstep(0.0, 1.2, p.y) + w);
    float vein = exp(-vx * vx / 0.00012) * smoothstep(-0.3, 0.05, t) * (1.0 - smoothstep(0.45, 0.75, t));
    vec3 c = base * (1.0 + (tongueNoise(p / 0.09 + 40.0) - 0.5) * vec3(0.03, 0.05, 0.05));
    c *= mix(vec3(1.0), vec3(0.90, 0.86, 0.95), 0.55 * vein);
    return mix(c, min(c * vec3(1.06, 1.13, 1.13), vec3(1.0)), 0.75 * fren);
}
`,pa={about:`pose-driven corrective shape keys of Body. r = rotation vector (axis * angle, rad) of a bone's local rotation relative to its rest pose. Default mode: weight = min over the listed bones of clamp(dot(r, rotvec) / |rotvec|^2, 0, 1). Mode 'near' (whole-pose correctives): weight = smoothstep(min over the bones of clamp(1 - |r - rotvec| / max(radius * |rotvec|, min_radius), 0, 1))`,drivers:[{key:`mush_sit`,bones:[`hips`,`thigh_L`,`shin_L`],rotvecs:[[-1.3067,.2133,-.153],[-.2357,-.1411,-.0465],[1.5037,-.0372,-.0192]],mode:`near`,radius:.97,min_radius:.45},{key:`mush_lie_h`,bones:[`hips`,`thigh_L`,`shin_L`],rotvecs:[[.0737,-.0011,.0643],[-.7488,-.1308,-.1784],[1.3133,.1114,-.0423]],mode:`near`,radius:.5,min_radius:.45},{key:`mush_lie_f`,bones:[`hips`,`arm_upper_L`,`arm_lower_L`],rotvecs:[[.0737,-.0011,.0643],[.3993,-.6125,-.7052],[-1.5775,-.3071,.381]],mode:`near`,radius:.5,min_radius:.45},{key:`mush_sitmid`,bones:[`hips`,`thigh_L`,`shin_L`],rotvecs:[[-1.0147,.1433,-.1183],[-.4233,-.1576,-.1086],[1.3423,-.048,-.007]],mode:`near`,radius:.35,min_radius:.3},{key:`mush_reach_L`,bones:[`arm_upper_L`],rotvecs:[[.3458,.0101,.0073]],mode:`near`,radius:1,min_radius:.3},{key:`mush_reach_R`,bones:[`arm_upper_R`],rotvecs:[[.0707,-.0021,-.0015]],mode:`near`,radius:1,min_radius:.3},{key:`mush_trot_fl2`,bones:[`arm_upper_L`,`arm_lower_L`,`hips`],rotvecs:[[.7344,.0214,.0156],[-1.0845,.0653,.0686],[0,0,0]],mode:`near`,radius:.01,min_radius:.7846,clips:[`Trot`]},{key:`mush_trot_fl5`,bones:[`arm_upper_L`,`arm_lower_L`,`hips`],rotvecs:[[.8002,.0233,.017],[-1.4753,.0888,.0933],[0,0,0]],mode:`near`,radius:.01,min_radius:.7846,clips:[`Trot`]},{key:`mush_trot_fl8`,bones:[`arm_upper_L`,`arm_lower_L`,`hips`],rotvecs:[[-.378,-.011,-.008],[.0165,-.001,-.001],[0,0,0]],mode:`near`,radius:.01,min_radius:.3215,clips:[`Trot`]},{key:`mush_trot_fl11`,bones:[`arm_upper_L`,`arm_lower_L`,`hips`],rotvecs:[[.3414,.0099,.0072],[-.668,.0402,.0423],[0,0,0]],mode:`near`,radius:.01,min_radius:.57,clips:[`Trot`]},{key:`mush_trot_fr1`,bones:[`arm_upper_R`,`arm_lower_R`,`hips`],rotvecs:[[-.378,.011,.008],[.0165,.001,.001],[0,0,0]],mode:`near`,radius:.01,min_radius:.3215,clips:[`Trot`]},{key:`mush_trot_fr4`,bones:[`arm_upper_R`,`arm_lower_R`,`hips`],rotvecs:[[.3414,-.0099,-.0072],[-.668,-.0402,-.0423],[0,0,0]],mode:`near`,radius:.01,min_radius:.57,clips:[`Trot`]},{key:`mush_trot_fr9`,bones:[`arm_upper_R`,`arm_lower_R`,`hips`],rotvecs:[[.7344,-.0214,-.0156],[-1.0845,-.0653,-.0686],[0,0,0]],mode:`near`,radius:.01,min_radius:.7846,clips:[`Trot`]},{key:`mush_trot_fr12`,bones:[`arm_upper_R`,`arm_lower_R`,`hips`],rotvecs:[[.8002,-.0233,-.017],[-1.4753,-.0888,-.0933],[0,0,0]],mode:`near`,radius:.01,min_radius:.7846,clips:[`Trot`]},{key:`mush_trot_hl1`,bones:[`thigh_L`,`shin_L`,`thigh_R`,`hips`],rotvecs:[[-.4423,-.0334,-.051],[.1748,.0022,.0012],[.6133,-.0463,-.0708],[0,0,0]],mode:`near`,radius:.01,min_radius:.5262,clips:[`Trot`]},{key:`mush_trot_hl7`,bones:[`thigh_L`,`shin_L`,`thigh_R`,`hips`],rotvecs:[[.6688,.0505,.0772],[-.2897,-.0037,-.0019],[-.5229,.0395,.0603],[0,0,0]],mode:`near`,radius:.01,min_radius:.5738,clips:[`Trot`]},{key:`mush_trot_hl10`,bones:[`thigh_L`,`shin_L`,`thigh_R`,`hips`],rotvecs:[[.3098,.0234,.0357],[.4987,.0063,.0033],[-.3277,.0247,.0378],[0,0,0]],mode:`near`,radius:.01,min_radius:.424,clips:[`Trot`]},{key:`mush_trot_hl12`,bones:[`thigh_L`,`shin_L`,`thigh_R`,`hips`],rotvecs:[[-.1649,-.0124,-.019],[.8462,.0107,.0057],[.1631,-.0123,-.0188],[0,0,0]],mode:`near`,radius:.01,min_radius:.7193,clips:[`Trot`]},{key:`mush_trot_hr0`,bones:[`thigh_R`,`shin_R`,`thigh_L`,`hips`],rotvecs:[[.6688,-.0505,-.0772],[-.2897,.0037,.0019],[-.5229,-.0395,-.0603],[0,0,0]],mode:`near`,radius:.01,min_radius:.5738,clips:[`Trot`]},{key:`mush_trot_hr3`,bones:[`thigh_R`,`shin_R`,`thigh_L`,`hips`],rotvecs:[[.3098,-.0234,-.0357],[.4987,-.0063,-.0033],[-.3277,-.0247,-.0378],[0,0,0]],mode:`near`,radius:.01,min_radius:.424,clips:[`Trot`]},{key:`mush_trot_hr5`,bones:[`thigh_R`,`shin_R`,`thigh_L`,`hips`],rotvecs:[[-.1649,.0124,.019],[.8462,-.0107,-.0057],[.1631,.0123,.0188],[0,0,0]],mode:`near`,radius:.01,min_radius:.7193,clips:[`Trot`]},{key:`mush_trot_hr8`,bones:[`thigh_R`,`shin_R`,`thigh_L`,`hips`],rotvecs:[[-.4423,.0334,.051],[.1748,-.0022,-.0012],[.6133,.0463,.0708],[0,0,0]],mode:`near`,radius:.01,min_radius:.5262,clips:[`Trot`]},{key:`mush_jst_fl4`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.4318,-.0838,-.3707],[-.7192,.1277,.653],[-.6261,.0656,-.3161],[.4327,.0337,.3641],[.8354,.1282,-.076],[.8255,-.1452,.0499],[-.3251,-.0093,.0125]],mode:`near`,radius:.01,min_radius:.8328,clips:[`Jump_Start`]},{key:`mush_jst_fl11`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.1466,-.3493,-.7248],[-1.5927,.2732,1.4047],[-.2658,.0243,-.6442],[.1531,.2433,.683],[.1577,.0181,-.3895],[.136,-.044,.3116],[-.6097,-.0204,.0265]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_fl18`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.2902,-.0084,-.0061],[-1.4426,.0869,.0913],[.1065,-.0015,-.0015],[-.2902,.0084,.0061],[.6537,.0493,.0754],[.6537,-.0493,-.0754],[-.1698,0,-0]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_fr4`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.4327,.0337,.3641],[-.7102,-.1369,-.6522],[-.6362,-.0975,.2504],[.4318,-.0838,-.3707],[.8354,.1282,-.076],[.8255,-.1452,.0499],[-.3251,-.0093,.0125]],mode:`near`,radius:.01,min_radius:.8279,clips:[`Jump_Start`]},{key:`mush_jst_fr10`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.1531,.2433,.683],[-1.5733,-.2931,-1.4035],[-.2934,-.0608,.4952],[.1466,-.3493,-.7248],[.1577,.0181,-.3895],[.136,-.044,.3116],[-.6097,-.0204,.0265]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_fr18`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.2902,.0084,.0061],[-1.4426,-.0869,-.0913],[.1065,.0015,.0015],[-.2902,-.0084,-.0061],[.6537,.0493,.0754],[.6537,-.0493,-.0754],[-.1698,0,-0]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_hl5`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[.8766,.1584,-.1368],[-.2079,.165,.2953],[-1.6128,.1903,-.0056],[.4212,-.1303,-.5124],[.4216,.0604,.4996],[.8621,-.1827,.0998],[-.4063,-.013,.0171]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_hl15`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.0146,-.0058,-.3089],[1.361,.1777,.1507],[-.5653,.2084,-.039],[.0354,-.2644,-.5469],[.0408,.1847,.5155],[-.0304,-.0127,.2495],[-.6656,-.0138,.0212]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_hl17`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[.4371,.0652,-.0671],[.0048,.0813,.1453],[2.09,.0092,.0274],[-.1597,-.1132,-.2275],[-.1571,.0806,.2147],[.4308,-.0762,.0468],[-.3703,-.006,.0082]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_hr5`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[.8621,-.1827,.0998],[-.1982,-.1575,-.289],[-1.6152,-.1415,.0335],[.4212,-.1303,-.5124],[.4216,.0604,.4996],[.8766,.1584,-.1368],[-.4063,-.013,.0171]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_hr15`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.0304,-.0127,.2495],[1.3729,-.1594,-.1517],[-.5687,-.1806,.0985],[.0354,-.2644,-.5469],[.0408,.1847,.5155],[-.0146,-.0058,-.3089],[-.6656,-.0138,.0212]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jst_hr17`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[.4308,-.0762,.0468],[.0093,-.0767,-.1421],[2.0894,-.0251,.0026],[-.1597,-.1132,-.2275],[-.1571,.0806,.2147],[.4371,.0652,-.0671],[-.3703,-.006,.0082]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Start`]},{key:`mush_jai_fl11`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.8602,-.0817,.0017],[-1.9033,.0744,.0998],[.1637,.0028,-.0365],[1.0889,-.0071,.2655],[-.3722,-.0339,-.1681],[-.339,.0516,.1624],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Air`]},{key:`mush_jai_fr12`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[1.072,-.0044,.269],[-.8483,.2727,-1.0292],[.3991,-.3377,1.2003],[.843,-.0821,5e-4],[-.3519,-.0304,-.166],[-.3185,.0495,.16],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Air`]},{key:`mush_jai_hl7`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.4172,-.0418,-.1727],[.8709,.1568,.0727],[-.2041,.0386,.1209],[.8983,-.0807,.0046],[1.1261,-.0132,.2577],[-.3842,.0563,.1679],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:.982,clips:[`Jump_Air`]},{key:`mush_jai_hr7`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.3842,.0563,.1679],[.8587,-.0749,-.0766],[-.1978,-.0271,.1893],[.8983,-.0807,.0046],[1.1261,-.0132,.2577],[-.4172,-.0418,-.1727],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:.982,clips:[`Jump_Air`]},{key:`mush_jla_fl0`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.8123,-.0829,-.0018],[-1.9033,.0744,.0998],[.1637,.0028,-.0365],[1.042,5e-4,.2751],[-.3158,-.024,-.1622],[-.2821,.0458,.1555],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Land`]},{key:`mush_jla_fl7`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.1487,.0117,-.1961],[-1.1862,.0418,.1528],[-1.4307,.0028,-.3281],[-.1503,-.0148,.1333],[-.0204,-.1195,-.4079],[-.0185,.1279,.3031],[.0258,-.0269,-.0032]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Land`]},{key:`mush_jla_fr3`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.2187,.1246,.2402],[-1.6631,-.1267,-.5271],[-.0089,-.268,.8098],[.2293,-.1201,-.7445],[-.3368,-.0507,-.7964],[-.3141,.1237,-.091],[.0803,-.2262,-.0028]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Land`]},{key:`mush_jla_fr7`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.1503,-.0148,.1333],[-1.1981,-.06,-.0935],[-1.4031,.0205,.3012],[-.1487,.0117,-.1961],[-.0204,-.1195,-.4079],[-.0185,.1279,.3031],[.0258,-.0269,-.0032]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Jump_Land`]},{key:`mush_jla_hl0`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.3158,-.024,-.1622],[.8709,.1568,.0727],[-.2041,.0386,.1209],[.8123,-.0829,-.0018],[1.042,5e-4,.2751],[-.2821,.0458,.1555],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:.916,clips:[`Jump_Land`]},{key:`mush_jla_hl3`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.3368,-.0507,-.7964],[.7523,.3927,.5317],[-.6966,.3461,-.3059],[.2293,-.1201,-.7445],[.2187,.1246,.2402],[-.3141,.1237,-.091],[.0803,-.2262,-.0028]],mode:`near`,radius:.01,min_radius:.8512,clips:[`Jump_Land`]},{key:`mush_jla_hr0`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.2821,.0458,.1555],[.8587,-.0749,-.0766],[-.1978,-.0271,.1893],[.8123,-.0829,-.0018],[1.042,5e-4,.2751],[-.3158,-.024,-.1622],[.2569,.0298,-.0236]],mode:`near`,radius:.01,min_radius:.916,clips:[`Jump_Land`]},{key:`mush_jla_hr3`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.3141,.1237,-.091],[.6496,-.0574,-.1387],[-.9316,-.0643,.1809],[.2293,-.1201,-.7445],[.2187,.1246,.2402],[-.3368,-.0507,-.7964],[.0803,-.2262,-.0028]],mode:`near`,radius:.01,min_radius:.8085,clips:[`Jump_Land`]},{key:`mush_str_fl19`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-1.8497,.1713,.2747],[.4174,.0619,-.4761],[.4247,-.2507,.4673],[-1.8307,.2902,.0865],[-.3114,-.0175,-.1684],[-.3047,.0673,.136],[.6811,-.001,-.0286]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stretch`]},{key:`mush_str_fl84`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.4545,.031,.0559],[-.5265,.0542,-.0523],[1.1276,-.0765,.0603],[-.4522,.0516,.0223],[-.3396,-.0277,-.0642],[-.3383,.0362,.0592],[.1307,-2e-4,-.0057]],mode:`near`,radius:.01,min_radius:.962,clips:[`Stretch`]},{key:`mush_str_fr19`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-1.8307,.2902,.0865],[.4643,.0778,-.2939],[.3231,.3121,-.0656],[-1.8497,.1713,.2747],[-.3114,-.0175,-.1684],[-.3047,.0673,.136],[.6811,-.001,-.0286]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stretch`]},{key:`mush_str_fr84`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.4522,.0516,.0223],[-.5162,-.0125,-.1178],[1.1053,.099,.0698],[-.4545,.031,.0559],[-.3396,-.0277,-.0642],[-.3383,.0362,.0592],[.1307,-2e-4,-.0057]],mode:`near`,radius:.01,min_radius:.9451,clips:[`Stretch`]},{key:`mush_str_hl19`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.3114,-.0175,-.1684],[-.2404,.1093,.1932],[.3942,.0844,-.1807],[-1.8497,.1713,.2747],[-1.8307,.2902,.0865],[-.3047,.0673,.136],[.6811,-.001,-.0286]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stretch`]},{key:`mush_str_hr19`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.3047,.0673,.136],[-.2313,-.0937,-.2045],[.3553,-.1087,.2398],[-1.8497,.1713,.2747],[-1.8307,.2902,.0865],[-.3114,-.0175,-.1684],[.6811,-.001,-.0286]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stretch`]},{key:`mush_sit_fl0`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.0021,.0048,-.0686],[.142,-.0095,.01],[-.6095,.0339,.0957],[.0889,-.0122,.0265],[-.2357,-.1411,-.0465],[-.3609,-.0729,.6571],[-1.3067,.2133,-.153]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Idle_Sit`,`Sit_Down`,`Stand_Up`,`Groom`]},{key:`mush_sit_fr0`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.0889,-.0122,.0265],[.107,.0066,-.0682],[-.5694,-.0463,-.0064],[-.0021,.0048,-.0686],[-.2357,-.1411,-.0465],[-.3609,-.0729,.6571],[-1.3067,.2133,-.153]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Idle_Sit`,`Sit_Down`,`Stand_Up`,`Groom`]},{key:`mush_sit_hl0`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.2357,-.1411,-.0465],[1.5037,-.0372,-.0192],[-1.5941,.2685,.2572],[-.0021,.0048,-.0686],[.0889,-.0122,.0265],[-.3609,-.0729,.6571],[-1.3067,.2133,-.153]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Sit`,`Sit_Down`,`Stand_Up`,`Groom`]},{key:`mush_sit_hl21`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.2357,-.1411,-.0465],[1.5037,-.0372,-.0192],[-1.5941,.2685,.2572],[-.0021,.0048,-.0686],[.0889,-.0122,.0265],[-.3609,-.0729,.6571],[-1.3067,.2133,-.153]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Sit`,`Sit_Down`,`Stand_Up`,`Groom`]},{key:`mush_sit_hr0`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.3609,-.0729,.6571],[1.7618,-.1217,.0249],[-1.5082,-.2617,-.1827],[-.0021,.0048,-.0686],[.0889,-.0122,.0265],[-.2357,-.1411,-.0465],[-1.3067,.2133,-.153]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Sit`,`Sit_Down`,`Stand_Up`,`Groom`]},{key:`mush_sit_hr21`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.3609,-.0729,.6571],[1.7618,-.1217,.0249],[-1.5082,-.2617,-.1827],[-.0021,.0048,-.0686],[.0889,-.0122,.0265],[-.2357,-.1411,-.0465],[-1.3067,.2133,-.153]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Sit`,`Sit_Down`,`Stand_Up`,`Groom`]},{key:`mush_sid_fl25`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.1682,.0117,-.0327],[.5725,-.045,.032],[-.965,.0413,-.0136],[.2577,-.0045,.0387],[-1.2214,-.3106,-.199],[-1.2673,.1837,.4956],[.0751,.098,-.0502]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Sit_Down`]},{key:`mush_sid_fr25`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.2577,-.0045,.0387],[.5177,.0629,-.1174],[-.9382,-.078,.0574],[.1682,.0117,-.0327],[-1.2214,-.3106,-.199],[-1.2673,.1837,.4956],[.0751,.098,-.0502]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Sit_Down`]},{key:`mush_sid_hl12`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.2477,-.0444,-.1689],[.3509,-.0482,.096],[-1.6386,.0951,.2074],[-.1954,-.0049,-.0171],[-.1231,.023,.0462],[-.216,.0946,.1826],[-.3269,-.019,-.0377]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Sit_Down`]},{key:`mush_sid_hl22`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.5501,-.1171,-.1906],[1.3177,-.0757,-.0539],[-1.9384,.135,.2671],[-.2605,-.0069,-.031],[-.1714,.0243,.0525],[-.544,.1201,.3396],[-.2647,.0312,-.0612]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Sit_Down`]},{key:`mush_sid_hr12`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.216,.0946,.1826],[.3453,.0358,-.1298],[-1.6355,-.0791,-.1704],[-.1954,-.0049,-.0171],[-.1231,.023,.0462],[-.2477,-.0444,-.1689],[-.3269,-.019,-.0377]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Sit_Down`]},{key:`mush_sid_hr22`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.544,.1201,.3396],[1.3656,.0141,.0105],[-1.9201,-.1216,-.2037],[-.2605,-.0069,-.031],[-.1714,.0243,.0525],[-.5501,-.1171,-.1906],[-.2647,.0312,-.0612]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Sit_Down`]},{key:`mush_stu_fl10`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.3064,-.0415,-.0587],[.1938,-.0175,.0077],[1.4409,-.0707,-.0204],[-.2724,.044,.0357],[-.8683,-.2099,-.0836],[-.9306,.0569,.3605],[.0674,.0994,-.037]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stand_Up`]},{key:`mush_stu_fr10`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.2724,.044,.0357],[.1859,.0164,-.0529],[1.4399,.0213,.0327],[-.3064,-.0415,-.0587],[-.8683,-.2099,-.0836],[-.9306,.0569,.3605],[.0674,.0994,-.037]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stand_Up`]},{key:`mush_stu_hl0`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.3381,-.1746,-.0617],[1.489,-.0367,-.0147],[-1.611,.2674,.2588],[.054,.005,-.0675],[.1451,-.0129,.0257],[-.4699,-.0555,.6651],[-1.2046,.2184,-.1403]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stand_Up`]},{key:`mush_stu_hl14`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-1.3184,-.1522,-.1327],[.5079,.0071,.0155],[.6411,.0873,-.0366],[.3774,-.0576,-.0136],[.3819,.0277,.0058],[-1.3357,.1057,.2298],[.7986,.0321,-.0199]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stand_Up`]},{key:`mush_stu_hr0`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.4699,-.0555,.6651],[1.7475,-.1219,.019],[-1.5251,-.2606,-.1848],[.054,.005,-.0675],[.1451,-.0129,.0257],[-.3381,-.1746,-.0617],[-1.2046,.2184,-.1403]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stand_Up`]},{key:`mush_stu_hr14`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-1.3357,.1057,.2298],[.5278,-.0098,.0234],[.6426,-.0979,-.017],[.3774,-.0576,-.0136],[.3819,.0277,.0058],[-1.3184,-.1522,-.1327],[.7986,.0321,-.0199]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Stand_Up`]},{key:`mush_lie_fl0`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.3993,-.6125,-.7052],[-1.5775,-.3071,.381],[.0586,-.0297,-.1228],[.3443,.5915,.7143],[-.7488,-.1308,-.1784],[-.7623,.0599,.2187],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_fl4`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.3993,-.6125,-.7052],[-1.5775,-.3071,.381],[.0586,-.0297,-.1228],[.3443,.5915,.7143],[-.7488,-.1308,-.1784],[-.7623,.0599,.2187],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_fr0`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.3443,.5915,.7143],[-1.6235,.3062,-.3842],[.109,-.0088,.0433],[.3993,-.6125,-.7052],[-.7488,-.1308,-.1784],[-.7623,.0599,.2187],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_fr4`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.3443,.5915,.7143],[-1.6235,.3062,-.3842],[.109,-.0088,.0433],[.3993,-.6125,-.7052],[-.7488,-.1308,-.1784],[-.7623,.0599,.2187],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_hl0`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.7488,-.1308,-.1784],[1.3133,.1114,-.0423],[-1.7158,.0548,.0656],[.3993,-.6125,-.7052],[.3443,.5915,.7143],[-.7623,.0599,.2187],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_hl103`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.7488,-.1308,-.1784],[1.3133,.1114,-.0423],[-1.7158,.0548,.0656],[.3993,-.6125,-.7052],[.3443,.5915,.7143],[-.7623,.0599,.2187],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_hr0`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.7623,.0599,.2187],[1.2588,-.066,-.1835],[-1.7305,-.0595,.1135],[.3993,-.6125,-.7052],[.3443,.5915,.7143],[-.7488,-.1308,-.1784],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lie_hr4`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.7623,.0599,.2187],[1.2588,-.066,-.1835],[-1.7305,-.0595,.1135],[.3993,-.6125,-.7052],[.3443,.5915,.7143],[-.7488,-.1308,-.1784],[.0737,-.0011,.0643]],mode:`near`,radius:.01,min_radius:.05,clips:[`Idle_Lie`,`Lie_Down`]},{key:`mush_lid_fl38`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.7408,-.0325,-.284],[-2.2624,.127,.3504],[.0953,.0153,-.4675],[.6865,-.0027,.2746],[-.5132,-.0899,-.1633],[-.5435,.0273,.1171],[.8244,-.0284,.0356]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_fl48`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.0025,-.6568,-.8556],[-1.1431,-.2797,.4547],[.0711,-.0305,-.123],[-.0558,.6365,.8527],[-.7853,-.1341,-.1835],[-.7987,.0664,.2211],[.1086,-.0022,.0643]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_fr40`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.6545,.153,.3679],[-2.3103,-.0179,-.2796],[.3734,.0226,.2776],[.7085,-.1842,-.3698],[-.5831,-.1022,-.1674],[-.6088,.0353,.1471],[.6902,-.0243,.0442]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_fr48`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.0558,.6365,.8527],[-1.1889,.2784,-.4575],[.1214,-.0075,.0433],[.0025,-.6568,-.8556],[-.7853,-.1341,-.1835],[-.7987,.0664,.2211],[.1086,-.0022,.0643]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_hl36`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.6984,-.1035,-.1906],[1.0175,.1059,-.0072],[-1.8988,-.077,-.0645],[.6165,.0801,-.2203],[.5615,-.1216,.2],[-.7331,.0518,.1123],[.7019,-.0273,.0302]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_hl48`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.7853,-.1341,-.1835],[1.3022,.1109,-.0422],[-1.7219,.0551,.0649],[.0025,-.6568,-.8556],[-.0558,.6365,.8527],[-.7987,.0664,.2211],[.1086,-.0022,.0643]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_hr36`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.7331,.0518,.1123],[1.0167,-.0337,-.0826],[-1.8679,-.0536,.0182],[.6165,.0801,-.2203],[.5615,-.1216,.2],[-.6984,-.1035,-.1906],[.7019,-.0273,.0302]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_lid_hr48`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.7987,.0664,.2211],[1.2478,-.0667,-.185],[-1.7366,-.059,.1126],[.0025,-.6568,-.8556],[-.0558,.6365,.8527],[-.7853,-.1341,-.1835],[.1086,-.0022,.0643]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Lie_Down`]},{key:`mush_gro_fl0`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.0035,.0048,-.0685],[.1363,-.0091,.0103],[-.6187,.0345,.0958],[.096,-.0123,.0264],[-.2437,-.1437,-.0477],[-.2884,-.0844,.6511],[-1.3047,.2134,-.1528]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Groom`]},{key:`mush_gro_fl21`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.055,-.2201,-.7058],[.0856,-.2206,1.0191],[-.6859,.4185,-.0565],[-.5168,-.3205,.0167],[.7371,.2965,-.6638],[.6252,-.4525,.6396],[-2.0896,.058,.06]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Groom`]},{key:`mush_gro_fr4`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.0172,-.0665,.025],[-.1707,-.045,-.2991],[-.5189,-.0555,.0901],[-.0317,-.0372,-.1823],[-.0021,-.0424,-.146],[-.1126,-.1588,.6541],[-1.4759,.1886,-.1229]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Groom`]},{key:`mush_gro_fr62`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[-.5168,-.3205,.0167],[-1.5799,-.3432,-1.3393],[-.2697,-.0968,.5378],[.055,-.2201,-.7058],[.7371,.2965,-.6638],[.6252,-.4525,.6396],[-2.0896,.058,.06]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Groom`]},{key:`mush_gro_hl21`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[.7371,.2965,-.6638],[1.5475,.1686,-.0498],[-1.8075,.4018,.4705],[.055,-.2201,-.7058],[-.5168,-.3205,.0167],[.6252,-.4525,.6396],[-2.0896,.058,.06]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Groom`]},{key:`mush_gro_hr21`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[.6252,-.4525,.6396],[1.5354,-.225,.086],[-1.8087,-.5053,-.647],[.055,-.2201,-.7058],[-.5168,-.3205,.0167],[.7371,.2965,-.6638],[-2.0896,.058,.06]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Groom`]},{key:`mush_wlk_fl5`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.4729,.0138,.01],[.228,-.0137,-.0144],[-1.271,.0174,.0185],[.0556,-.0016,-.0012],[-.1501,-.0113,-.0173],[-.2392,.018,.0276],[.1338,0,0]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Walk`]},{key:`mush_wlk_fl10`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.4415,.0128,.0094],[-1.5924,.0959,.1008],[1.2433,-.0171,-.0181],[.5315,-.0155,-.0113],[-.6107,-.0461,-.0704],[.2957,-.0223,-.0341],[.1338,0,0]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Walk`]},{key:`mush_wlk_fl17`,bones:[`arm_upper_L`,`arm_lower_L`,`paw_front_L`,`arm_upper_R`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.2785,.0081,.0059],[-.935,.0563,.0592],[.2564,-.0035,-.0037],[.7589,-.0221,-.0161],[-.0077,-6e-4,-9e-4],[-1.0906,.0823,.1258],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.9358,clips:[`Walk`]},{key:`mush_wlk_fr0`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.4415,-.0128,-.0094],[-1.5924,-.0959,-.1008],[1.2433,.0171,.0181],[.5315,.0155,.0113],[.2957,.0223,.0341],[-.6107,.0461,.0704],[.1338,0,0]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Walk`]},{key:`mush_wlk_fr7`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.2785,-.0081,-.0059],[-.935,-.0563,-.0592],[.2564,.0035,.0037],[.7589,.0221,.0161],[-1.0906,-.0823,-.1258],[-.0077,6e-4,9e-4],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.9358,clips:[`Walk`]},{key:`mush_wlk_fr15`,bones:[`arm_upper_R`,`arm_lower_R`,`paw_front_R`,`arm_upper_L`,`thigh_L`,`thigh_R`,`hips`],rotvecs:[[.4729,-.0138,-.01],[.228,.0137,.0144],[-1.271,-.0174,-.0185],[.0556,.0016,.0012],[-.2392,-.018,-.0276],[-.1501,.0113,.0173],[.1338,0,0]],mode:`near`,radius:.01,min_radius:1.0472,clips:[`Walk`]},{key:`mush_wlk_hl7`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-1.0906,-.0823,-.1258],[.8181,.0103,.0055],[.2377,.0049,.0061],[.7589,.0221,.0161],[.2785,-.0081,-.0059],[-.0077,6e-4,9e-4],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.9358,clips:[`Walk`]},{key:`mush_wlk_hl9`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.5772,-.0436,-.0666],[-.2837,-.0036,-.0019],[.1021,.0021,.0026],[.659,.0192,.014],[.4677,-.0136,-.0099],[.2258,-.017,-.026],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.5605,clips:[`Walk`]},{key:`mush_wlk_hl17`,bones:[`thigh_L`,`shin_L`,`foot_L`,`arm_upper_L`,`arm_upper_R`,`thigh_R`,`hips`],rotvecs:[[-.0077,-6e-4,-9e-4],[.1856,.0023,.0012],[-.5506,-.0113,-.0141],[.2785,.0081,.0059],[.7589,-.0221,-.0161],[-1.0906,.0823,.1258],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.9358,clips:[`Walk`]},{key:`mush_wlk_hr7`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.0077,6e-4,9e-4],[.1856,-.0023,-.0012],[-.5506,.0113,.0141],[.7589,.0221,.0161],[.2785,-.0081,-.0059],[-1.0906,-.0823,-.1258],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.9358,clips:[`Walk`]},{key:`mush_wlk_hr17`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-1.0906,.0823,.1258],[.8181,-.0103,-.0055],[.2377,-.0049,-.0061],[.2785,.0081,.0059],[.7589,-.0221,-.0161],[-.0077,-6e-4,-9e-4],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.9358,clips:[`Walk`]},{key:`mush_wlk_hr19`,bones:[`thigh_R`,`shin_R`,`foot_R`,`arm_upper_L`,`arm_upper_R`,`thigh_L`,`hips`],rotvecs:[[-.5772,.0436,.0666],[-.2837,.0036,.0019],[.1021,-.0021,-.0026],[.4677,.0136,.0099],[.659,-.0192,-.014],[.227,.0171,.0262],[.1338,0,0]],mode:`near`,radius:.01,min_radius:.5605,clips:[`Walk`]}]},ma=null,ha=null,ga=null,_a=null,va={blink:!0,follow:!0,furOn:!0,len:1,shells:26},ya=e=>({checked:va[e]!==!1,value:va[e]}),ba={hash:``};window.__errors=window.__errors||[];var xa=new M,Sa=.03,Ca=[[`Idle_Stand`,0,1],[`Walk`,.4496,.66667],[`Trot`,.9107,.46667],[`Run`,1.9818,.33333]],wa={uTime:{value:0},uWindDir:{value:new M(1,0,0)},uWindStr:{value:.5},uFurLen:{value:Sa},uW2L:{value:new u},uKeyDirV:{value:new M},uShellHead:{value:0},uLockAmp:{value:.1},uSpomOn:{value:0}},Ta=`
float h13(vec3 p){ p = fract(p*0.1031); p += dot(p, p.zyx+31.32); return fract((p.x+p.y)*p.z); }
vec3 h33(vec3 p){ p = fract(p*vec3(.1031,.1030,.0973)); p += dot(p, p.yxz+33.33); return fract((p.xxy+p.yxx)*p.zyx); }
float vnoise(vec3 p){
  vec3 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(mix(h13(i),h13(i+vec3(1,0,0)),f.x),mix(h13(i+vec3(0,1,0)),h13(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h13(i+vec3(0,0,1)),h13(i+vec3(1,0,1)),f.x),mix(h13(i+vec3(0,1,1)),h13(i+vec3(1,1,1)),f.x),f.y),f.z);
}`,Ea=`
vec3 windAt(vec3 wp, float seed){
  vec3 gp = wp * 7.0 - uWindDir * uTime * 2.4;
  float g = vnoise(gp) * 0.6 + vnoise(gp * 2.3 + 7.1) * 0.4;
  float gust = 0.25 + 1.6 * smoothstep(0.3, 0.8, g);
  vec3 side = normalize(cross(uWindDir, vec3(0.0, 1.0, 0.0)) + 1e-4);
  vec3 flutter = side * sin(uTime * 14.0 + seed * 6.283) * 0.3 * uWindStr * gust;
  return uWindDir * uWindStr * gust * 1.2 + flutter;
}`,Da=`
const mat3 RL0 = mat3(0.81467, 0.57683, -0.05977, -0.55545, 0.80576, 0.20548, 0.16669, -0.13420, 0.97683);
const mat3 RL1 = mat3(0.83319, -0.04849, 0.55086, -0.42529, 0.58051, 0.69437, -0.35345, -0.81281, 0.46305);
// The coat as a field: is the point q (rest space), at the fraction lay of the coat's depth, inside a hair?
// Hairs are thin pointed pieces that lie along the comb direction T and overlap like thatch - each rises from the skin
// at its root to its full height towards the tip. The coat is divided into small cells (~7 mm) and every cell measures
// its hairs from its own centre, so they follow the comb direction exactly (one global dot(position, direction)
// swirls like wood grain wherever the direction turns). Two independent cell lattices overlap, which hides the cell
// borders. pat = length of the pieces in units of 5.3 mm (velvet on the muzzle, long on the tail): every strip of hairs
// takes the power of two just below or just above it (a mix of shorter and longer hairs, no dithering on screen).
bool thatchAt(vec3 q, float lay, vec3 Tr, vec3 Br, float warp, float clump, float fw, float dn, float pat, out float tone, out float shade) {
  const float HAIR = 3400.0;                               // hairs per metre across the coat (0.3 mm apart)
  bool cov = false; tone = 0.5; shade = 1.0;
  float big = step(1.075 + dn * 0.15, pat), lp = log2(max(pat, 0.05));      // long hairs need cells twice the size
  for (int L = 0; L < 2; L++) {
    float fl = float(L), sc = (140.0 - 17.0 * fl) / (1.0 + big);
    mat3 RL = L == 0 ? RL0 : RL1;
    vec3 pc = RL * ((q + vec3(warp, -warp * 0.7, warp * 0.4) * 0.0009) * sc) + fl * vec3(0.37, 0.61, 0.19);
    float ch = h13(floor(pc) + 0.5 + fl * 19.0);
    vec3 qr = (transpose(RL) * (fract(pc) - 0.5)) / sc;                // offset from the cell centre, rest space
    float across = dot(qr, Br) * HAIR + ch * 37.0;
    float sid = floor(across) + floor(ch * 2048.0) * 3.0 + fl * 977.0;
    float sh = h11(sid + 3.1);
    float plen = exp2(clamp(floor(lp + h11(sid + 5.7)), -2.0, big));
    float along = dot(qr, Tr) * (190.0 / plen) + h11(sid) * 9.0;
    float u = fract(along);                                             // 0 = root, 1 = tip
    float top = (0.50 + 0.50 * h21(vec2(sid, floor(along)))) * smoothstep(0.0, 0.30, u) * (0.94 + 0.12 * clump);
    float t = lay / max(top, 1e-3);
    float fa = abs(fract(across) - 0.5);
    float w = mix(0.42, 0.05, pow(min(t, 1.0), 1.3)) * (0.8 + 0.4 * sh);
    w *= mix(1.0, smoothstep(1.02, 0.78, u), smoothstep(0.3, 0.8, t));      // pointed tip
    w = mix(w, 0.5, smoothstep(0.55, 1.3, fw));                             // far away / grazing: hairs merge instead of aliasing
    if (t <= 1.0 + dn * 0.2 && fa < w + dn * clamp(fw, 0.02, 0.5) * 0.9) {
      float s_ = 1.0 - (fa / max(w, 1e-3)) * (fa / max(w, 1e-3));
      if (!cov || s_ > shade) { tone = sh; shade = clamp(s_, 0.0, 1.0); }
      cov = true;
    }
  }
  return cov;
}
// Locks: neighbouring hairs lie together in soft streaks along the comb direction. They carry the coat's texture at the
// distances where single hairs are finer than a pixel (there a tone per hair would only be noise). streakNoise is value
// noise in (across / w, along / l), evaluated in the cell lattices and blended with windows that vanish at the cell
// borders, so it is continuous. Their length follows the hair length (pat); from far away they fade out - keeping them
// a few pixels wide at every distance was tried and made the whole coat look mottled (sync/02_fur_length).
float streakNoise(vec3 q, vec3 Tr, vec3 Br, float w, float l) {
  float acc = 0.0, wsum = 0.0;
  for (int L = 0; L < 2; L++) {
    float fl = float(L), sc = (140.0 - 17.0 * fl) * min(1.0, 0.0011 / w);      // cells of 7 mm, larger for wide streaks
    mat3 RL = L == 0 ? RL0 : RL1;
    vec3 pc = RL * (q * sc) + fl * vec3(0.37, 0.61, 0.19) + 11.3;
    vec3 f = fract(pc);
    float ch = h13(floor(pc) + 0.5 + fl * 23.0);
    vec3 qr = (transpose(RL) * (f - 0.5)) / sc;
    vec2 p = vec2(dot(qr, Br) / w, dot(qr, Tr) / l) + ch * vec2(41.0, 17.0);
    vec2 i = floor(p), u = p - i; u = u * u * (3.0 - 2.0 * u);
    float o = ch * 57.0 + fl * 5.0;
    float n = mix(mix(h21(i + o), h21(i + vec2(1.0, 0.0) + o), u.x), mix(h21(i + vec2(0.0, 1.0) + o), h21(i + vec2(1.0, 1.0) + o), u.x), u.y);
    vec3 e = min(f, 1.0 - f);
    float win = smoothstep(0.0, 0.18, e.x) * smoothstep(0.0, 0.18, e.y) * smoothstep(0.0, 0.18, e.z) + 1e-4;
    acc += n * win; wsum += win;
  }
  return acc / wsum;
}
float lockMul(vec3 q, vec3 Tr, vec3 Br, float pxB, float pat, float amp) {
  const float w = 0.0009;                                              // a lock is about a millimetre wide
  amp *= (1.0 - smoothstep(0.35, 0.9, pxB / w)) * mix(0.55, 1.0, smoothstep(0.3, 1.0, pat));      // finer than a pixel: gone (it would only mottle the coat); velvet is smoother
  if (amp < 0.004) return 1.0;
  return 1.0 + amp * (streakNoise(q, Tr, Br, w, max(0.0065 * pat, 2.2 * w)) - 0.5) * 2.8;
}`,Oa=null;function ka(e,t){let n=new T({color:16777215,roughness:.82,metalness:0,vertexColors:!0,map:Oa});return n.userData.layer={value:e},n.onBeforeCompile=e=>{Object.assign(e.uniforms,wa),e.uniforms.uLayer=n.userData.layer,e.defines=e.defines||{},t&&(e.defines.FUR_BASE=1),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        uniform float uLayer, uTime, uWindStr, uFurLen; uniform vec3 uWindDir; uniform mat3 uW2L;
        attribute float furLen, headW, furPat; attribute vec3 comb, furMat; varying float vHeadW, vPat; varying vec3 vMat;
        varying vec3 vRest; varying float vFur; varying vec3 vTipDirV; varying vec3 vCombR; varying vec3 vNrmR; varying vec2 vNz;
        ${Ta}
        ${Ea}`).replace(`#include <skinning_vertex>`,`#include <skinning_vertex>
        vRest = position; vFur = furLen; vCombR = comb; vNrmR = normal; vHeadW = headW; vPat = furPat; vMat = furMat;
        vNz = vec2((vnoise(position * 260.0) - 0.5) * 2.2 + (vnoise(position * 60.0) - 0.5) * 4.0, vnoise(position * 140.0));
        {
          vec3 nrm = normalize(objectNormal);
          float L = furLen * uFurLen;
          vec3 jit = vec3(vnoise(position * 60.0), vnoise(position * 60.0 + 5.3), vnoise(position * 60.0 + 11.7)) - 0.5;
          vec3 cmb = (skinMatrix * vec4(comb + jit * 0.40, 0.0)).xyz;
          cmb -= nrm * dot(cmb, nrm);
          vec3 wp = (modelMatrix * vec4(transformed, 1.0)).xyz;
          vec3 B = uW2L * (windAt(wp, h13(floor(position * 300.0))) + vec3(0.0, -0.35, 0.0));
          B -= nrm * min(0.0, dot(B, nrm)) * 0.8;
          // short cat coat lies flat along the comb direction; tail fur (long) stands out more
          float lie = mix(1.9, 0.85, smoothstep(0.35, 0.8, furLen));
          vec3 sdir = normalize(nrm * 1.0 + cmb * lie * (0.25 + 0.95 * uLayer * uLayer) + B * uLayer * 0.8);
          transformed += sdir * (L * uLayer);
          vTipDirV = normalize(normalMatrix * normalize(nrm + cmb * lie + B));
        }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uLayer, uShellHead, uLockAmp, uSpomOn; uniform vec3 uKeyDirV; varying float vHeadW, vPat; varying vec3 vMat;      // vMat = (fine, lie, contrast) of the coat here (parts/fur/regions.py)
        varying vec3 vRest; varying float vFur; varying vec3 vTipDirV; varying vec3 vCombR; varying vec3 vNrmR; varying vec2 vNz;
        float h11(float x){ return fract(sin(x * 127.1) * 43758.5453); }
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        ${Ta}
        ${Da}`).replace(`#include <color_fragment>`,`#include <color_fragment>
        float lay = uLayer;
        // tangent frame of the coat: strands run along the comb direction
        vec3 Nr = normalize(vNrmR);
        vec3 Tr = vCombR - Nr * dot(vCombR, Nr);
        Tr = length(Tr) > 1e-4 ? normalize(Tr) : normalize(cross(Nr, vec3(0.0, 0.0, 1.0)) + 1e-4);
        vec3 Br = normalize(cross(Nr, Tr));
        float warp = vNz.x;
        const float HAIR = 3400.0;                               // hairs per metre across the coat (0.3 mm apart)
        // hair spacings per pixel (from the position alone: where the comb direction turns, fwidth of the dot product
        // would count the turning as well and wrongly report a far-away coat)
        float fw = length(vec2(dot(dFdx(vRest), Br), dot(dFdy(vRest), Br))) * HAIR;
        float clump = clamp(vNz.y, 0.0, 1.0);
        float hTone = 0.5, hShade = 1.0;
        float pl = vPat;      // length of the hair pattern here (x 5.3 mm)
        #ifndef FUR_BASE
          if (vFur < 0.02) discard;
          float dn = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) - 0.5;      // dither: soft hair edges
          if (uShellHead > 0.5 && vHeadW + dn * 0.3 <= 0.5) discard;      // hybrid: the body's coat is ray-marched (parts/fur/spom.js)
          if (!thatchAt(vRest, lay, Tr, Br, warp, clump, fw, dn, pl, hTone, hShade)) discard;      // the hair field (THATCH)
        #endif
        float lockT = lockMul(vRest, Tr, Br, fw / 3400.0, pl, uLockAmp);      // soft streaks of the coat (THATCH)
        // colour: darker undercoat at the roots, lighter tips; close up every hair has its own tone and is shaded
        // across its width (round, not a flat flake)
        float furK = smoothstep(0.02, 0.25, vFur);
        vec3 rootDark = mix(vec3(0.62, 0.58, 0.54), vec3(1.0), smoothstep(0.0, 0.75, lay));
        // Under the ray-marched coat the bare skin must have the coat's own floor tone: in the creases of the body (stifle
        // fold, armpit, groin) the shells of two parts run into one another and the skin of one shows through the thin
        // edge of the other's coat - as dark slivers while the skin was painted as a dark undercoat.
        rootDark = mix(rootDark, vec3(0.86, 0.84, 0.81), uSpomOn * (uShellHead > 0.5 ? step(vHeadW, 0.5) : 1.0));     // slightly warm undercoat, dark between the hairs
        float streak = mix(1.0, 0.97, smoothstep(0.48, 0.76, clump) * 0.85);
        float tip = 1.0 + 0.07 * smoothstep(0.6, 1.0, lay);
        float furP = smoothstep(0.004, 0.05, vFur) * (0.35 + 0.65 * smoothstep(0.03, 0.13, vFur));     // velvet-short fur (paws, ears) is smooth
        float nearK = 1.0 - smoothstep(0.3, 0.9, fw);
        float hair = (1.0 + mix(0.03, 0.44, nearK) * (hTone - 0.5)) * mix(1.0, mix(0.68, 1.0, hShade), nearK) * mix(1.0, lockT, furP);
        vec3 tone = mix(vec3(1.0), rootDark * streak * tip, furK) * mix(1.0, hair, furP * 0.9);
        diffuseColor.rgb *= tone;`).replace(`#include <opaque_fragment>`,`
        {
          vec3 V = normalize(vViewPosition);
          vec3 T = normalize(vTipDirV);
          vec3 Hk = normalize(uKeyDirV + V);
          float th = dot(T, Hk);
          float kk = sqrt(max(0.0, 1.0 - th * th));
          float spec = pow(kk, 80.0) * 0.12 + pow(kk, 12.0) * 0.04;
          outgoingLight += vec3(1.0, 0.97, 0.92) * spec * lay * smoothstep(0.02, 0.2, vFur);
          float rim = pow(1.0 - abs(dot(normal, V)), 3.0);
          outgoingLight += diffuseColor.rgb * (rim * 0.18 + 0.03) * lay;
          outgoingLight += reflectedLight.indirectDiffuse * 0.26 * (1.0 - smoothstep(0.0, 0.08, vFur));     // thin bare skin (inner ear, pads) glows a little
        }
        #include <opaque_fragment>`)},n.customProgramCacheKey=()=>t?`catfurbase`:`catfurshell`,n}var z={uStFurLen:{value:Sa},uStLen:{value:1},uStEl0:{value:1},uStEl1:{value:.2},uStFly:{value:1},uStWidth:{value:1},uStYaw:{value:.3},uStWander:{value:.55},uStCurl:{value:.045},uStClump:{value:.14},uStCell:{value:.0026},uStGrav:{value:.07},uStWind:{value:.15},uStRoot:{value:.86},uStTip:{value:1.18},uStTone:{value:.12},uStSpec:{value:1.6},uStRim:{value:1},uStWrap:{value:.35},uStEnv:{value:1},uStAmb:{value:0},uStGain:{value:1},uStTint:{value:new M(1,1,1)},uStFloor:{value:1},uStOpacity:{value:1},uStA0:{value:.6},uStShMap:{value:null},uStShMat:{value:new c},uStShBias:{value:8e-4},uStShSoft:{value:3/2048},uStSunMap:{value:null},uStSunMapD:{value:null},uStSunMat:{value:new c},uStSunOn:{value:0},uStSunIrr:{value:new g},uStSunTex:{value:new A},uStSunK:{value:.5},uStSunWrap:{value:.05},uStGlow:{value:1},uStAmbK:{value:.62},uStSunSheen:{value:.35},uStFace:{value:.6},uStAmbShade:{value:1},uStGround:{value:-100},uStTouch:{value:Array.from({length:6},()=>new A(0,-10,0,.03))},uStTouchDir:{value:Array.from({length:6},()=>new A(0,0,0,0))},uStTouchOn:{value:0},uStMinPx:{value:1},uStLod:{value:1},uStFmin:{value:.05},uStPix:{value:.001},uStCam:{value:new M},uStMap:{value:null},uStMorph:{value:null},uStMorphInf:{value:[0]},uStDbg:{value:0}},Aa=.8,ja={len:.6,el:[1.2,2],yaw:2.2,curl:[1.7,5.2],clump:.5,bend:.7,w:[76e-6,127e-6],tip:1.02,spec:.5,fade:.32,a0:1,vary:.75,low:.9},Ma=e=>({len:e,el:[.9,2.2],yaw:3,curl:[0,0],clump:0,bend:.2,w:[9e-4,.0015],tip:.92,spec:0,fade:.5,a0:1,vary:.6,low:0}),Na=[{name:`down`,n:26e4,seed:5,minL:1.5,slices:[[0,1,1,0]],fib:4,wave:.22,lodPx:4e-4,root:.04,a:Ma(.3),b:Ma(.46)},{name:`under`,n:24e4,seed:77,minL:1.2,slices:[[0,1,2,2]],fib:1,wave:0,lodPx:0,root:.03,a:{len:.28,el:[1.5,3.2],yaw:4,curl:[2.6,7.5],clump:0,bend:.4,w:[63e-6,105e-6],tip:1,spec:0,fade:.25,a0:.8,vary:.5,low:.8},b:ja},{name:`guard`,n:28e4,seed:20261119,minL:.5,slices:[[0,.5,1,1],[.5,1,1,3]],fib:1,wave:0,lodPx:0,root:.03,a:ja,b:{len:1,el:[1,1],yaw:1,curl:[1,3.4],clump:1,bend:1,w:[9e-5,15e-5],tip:1.04,spec:1,fade:.4,a0:1,vary:1,low:1}}];function Pa(e,t,n,r){let i=k.smoothstep,a=(e,t,n)=>[e[0]+(t[0]-e[0])*n,e[1]+(t[1]-e[1])*n,e[2]+(t[2]-e[2])*n],o=i(n,.15,.75),s=i(-n,.45,.9),c=i(r,.2,.8),l=i(-r,.2,.8),u=(e,t,n)=>a(a(e,t,o),n,s),d=()=>u([12,.26,.4],[11.5,.21,.2],[14,.33,.8]);return/^(hips|spine|vol_back|vol_belly|root)/.test(e)?d():/^chest/.test(e)?a(d(),[14.5,.32,.7],c):/^neck_01/.test(e)?a(u([11,.26,.38],[10.5,.21,.25],[12.5,.3,.55]),[13,.3,.6],c):/^neck_02/.test(e)?a(u([10,.25,.35],[9.5,.21,.25],[10.5,.27,.42]),[10.5,.27,.42],c):/^shoulder/.test(e)?[11,.24,.35]:/^arm_upper/.test(e)?a([8.5,.24,.3],[10,.3,.5],l):/^arm_lower/.test(e)?a([4.5,.22,.15],[6,.27,.3],l):/^paw_front/.test(e)?[3,.22,.1]:/^(thigh|vol_thigh)/.test(e)?a([12,.25,.4],[15,.33,.8],l):/^shin/.test(e)?a([5.5,.22,.15],[7,.27,.3],l):/^foot/.test(e)?[3.2,.22,.1]:/^toe/.test(e)?[2.2,.23,.1]:/^tail_01/.test(e)?[12.5,.31,.6]:/^tail/.test(e)?[16,.38,.85]:/^ear_01/.test(e)?[2.5,.22,.1]:/^ear_02/.test(e)?[1.3,.22,0]:null}var Fa=1.6,Ia=2.4,La=null;function Ra(){let e=B.geometry,t=e.attributes.position,n=e.attributes.normal,r=e.attributes._fur,i=e.attributes._fpat,a=e.attributes.skinIndex,o=e.attributes.skinWeight,s=B.skeleton.bones,c=t.count,l=k.smoothstep,u=new Float32Array(c),d=new Float32Array(c),f=new Float32Array(c);for(let e=0;e<c;e++){let t=n.getX(e),c=n.getY(e),p=n.getZ(e),m=Fa*.5*(r.getX(e)*Sa*1e3+(i?i.getX(e):1)*5.3),h=[m,.22+.06*l(m,4,9),.08+.37*l(m,4,9)],g=0,_=0,v=0,y=0;for(let n=0;n<4;n++){let r=o.getComponent(e,n);if(r<=0)continue;let i=Pa(s[a.getComponent(e,n)].name,t,c,p)||h;g+=r*i[0],_+=r*i[1],v+=r*i[2],y+=r}u[e]=g/(y||1),d[e]=_/(y||1),f[e]=v/(y||1)}let p=new Int32Array(c),m=new Map,h=[],g=[],_=[];for(let e=0;e<c;e++){let n=Math.round(t.getX(e)*2e4)+`,`+Math.round(t.getY(e)*2e4)+`,`+Math.round(t.getZ(e)*2e4);m.has(n)||(m.set(n,h.length),h.push(t.getX(e)),g.push(t.getY(e)),_.push(t.getZ(e))),p[e]=m.get(n)}let v=h.length,y=.014,b=new Map,x=(e,t,n)=>(Math.floor(e/y)+512)*1048576+(Math.floor(t/y)+512)*1024+Math.floor(n/y)+512;for(let e=0;e<v;e++){let t=x(h[e],g[e],_[e]),n=b.get(t);n||b.set(t,n=[]),n.push(e)}let S=[u,d,f].map(e=>{let t=new Float32Array(v),n=new Float32Array(v);for(let r=0;r<c;r++)t[p[r]]+=e[r],n[p[r]]++;return t.map((e,t)=>e/n[t])}),C=S.map(()=>new Float32Array(v));for(let e=0;e<v;e++){let t=Math.min(.011,Math.max(.0025,9e-4*S[0][e])),n=Math.min(2*y,2.5*t),r=-.5/(t*t),i=n*n,a=Math.ceil(n/y),o=0,s=0,c=0,l=0;for(let t=-a;t<=a;t++)for(let n=-a;n<=a;n++)for(let u=-a;u<=a;u++){let a=b.get(x(h[e]+t*y,g[e]+n*y,_[e]+u*y));if(a)for(let t of a){let n=(h[t]-h[e])**2+(g[t]-g[e])**2+(_[t]-_[e])**2;if(n>i)continue;let a=Math.exp(n*r);o+=a,s+=a*S[0][t],c+=a*S[1][t],l+=a*S[2][t]}}C[0][e]=s/o,C[1][e]=c/o,C[2][e]=l/o}for(let e=0;e<c;e++)u[e]=C[0][p[e]],d[e]=C[1][p[e]],f[e]=C[2][p[e]];let w=new Float32Array(c);for(let e=0;e<c;e++)u[e]=Math.min(u[e],Ia*r.getX(e)*Sa*1e3),w[e]=d[e]/.6;La={len:u,el:w,fluff:f}}var za=[.3373,.1903,.1413,.0197,.0239,.1937,.0454,-.0316,-.0628],Ba=e=>`max(0.0, ${za[0]} + ${za[1]} * ${e}.y + ${za[2]} * ${e}.z + ${za[3]} * ${e}.x + ${za[4]} * ${e}.x * ${e}.y + ${za[5]} * ${e}.y * ${e}.z + ${za[6]} * (3.0 * ${e}.y * ${e}.y - 1.0) + ${za[7]} * ${e}.x * ${e}.z + ${za[8]} * (${e}.x * ${e}.x - ${e}.z * ${e}.z)) * PI * uStEnv`,Va=`
  uniform float uStEnv;
  #if NUM_LIGHT_PROBE_GRIDS > 0
  #define stRoomLight( wp, n ) getLightProbeGridIrradiance( probesSH[ 0 ], probesMin[ 0 ], probesMax[ 0 ], probesResolution[ 0 ], wp, n )
  #else
  #define stRoomLight( wp, n ) vec3( ${Ba(`n`)} )
  #endif`,Ha=`
  uniform float uStEnv;
  #if NUM_LIGHT_PROBE_GRIDS > 0
  #define stRoomLightF( n ) getLightProbeGridIrradiance( probesSH[ 0 ], probesMin[ 0 ], probesMax[ 0 ], probesResolution[ 0 ], ( ( vec4( - vViewPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz, n )
  #else
  #define stRoomLightF( n ) vec3( ${Ba(`n`)} )
  #endif`,Ua=[],Wa=null,Ga=new c,Ka=new M;function qa(e,t,n){let r=(e,t,n)=>{let r=Math.imul(e,374761393)^Math.imul(t,668265263)^Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1103515245),((r^r>>>16)>>>0)/4294967296},i=Math.floor(e),a=Math.floor(t),o=Math.floor(n),s=e=>e*e*(3-2*e),c=s(e-i),l=s(t-a),u=s(n-o),d=(e,t,n)=>e+(t-e)*n;return d(d(d(r(i,a,o),r(i+1,a,o),c),d(r(i,a+1,o),r(i+1,a+1,o),c),l),d(d(r(i,a,o+1),r(i+1,a,o+1),c),d(r(i,a+1,o+1),r(i+1,a+1,o+1),c),l),u)}function Ja(e,t,n){let r=B.geometry,i=r.attributes.position,a=r.attributes.normal,o=r.attributes.uv,s=r.attributes.color,c=r.attributes._fur,l=r.attributes.comb,u=r.attributes.skinIndex,d=r.attributes.skinWeight,f=r.attributes.furMat,p=r.index,m=p.count/3,h=bo(t),g=La.len,_=La.el,v=La.fluff,y=e=>k.smoothstep(e,n,1.5*n)/(Math.max(1.41*e,2.5)*.16),b=new Float32Array(m),x=new M,S=new M,C=new M,w=0;for(let e=0;e<m;e++){let t=p.getX(3*e),n=p.getX(3*e+1),r=p.getX(3*e+2);x.fromBufferAttribute(i,t),S.fromBufferAttribute(i,n).sub(x),C.fromBufferAttribute(i,r).sub(x);let a=S.cross(C).length()*5e5;b[e]=a*y((g[t]+g[n]+g[r])/3),w+=b[e]}let T=new Uint16Array(m),E=0;for(let t=0;t<m;t++)T[t]=Math.floor(b[t]*e/w+h()),E+=T[t];let D=new Uint32Array(E);for(let e=0;e<E;e++)D[e]=e;for(let e=E-1;e>0;e--){let t=Math.floor(h()*(e+1)),n=D[e];D[e]=D[t],D[t]=n}let ee=new Float32Array(E*3),te=new Float32Array(E*3),O=new Float32Array(E*3),ne=new Float32Array(E*3),re=new Float32Array(E*3),ie=new Float32Array(E*4),ae=new Float32Array(E*2),oe=new Float32Array(E*2),se=new Float32Array(E),ce=new Float32Array(E*3),le=new Uint16Array(E*4),ue=new Float32Array(E*4),de=new Int32Array(12),fe=new Float32Array(12),pe=0;for(let e=0;e<m;e++){if(!T[e])continue;let t=[p.getX(3*e),p.getX(3*e+1),p.getX(3*e+2)];for(let n=0;n<T[e];n++){let e=Math.sqrt(h()),n=h(),r=[1-e,e*(1-n),e*n],p=D[pe++],m=(e,n)=>r[0]*e.getComponent(t[0],n)+r[1]*e.getComponent(t[1],n)+r[2]*e.getComponent(t[2],n);for(let e=0;e<3;e++)ee[p*3+e]=m(i,e),te[p*3+e]=m(a,e),O[p*3+e]=m(l,e),ne[p*3+e]=s?m(s,e):1,re[p*3+e]=t[e];o&&(ae[p*2]=m(o,0),ae[p*2+1]=m(o,1)),oe[p*2]=r[0],oe[p*2+1]=r[1];let y=ee[p*3],b=ee[p*3+1],x=ee[p*3+2],S=e=>r[0]*e[t[0]]+r[1]*e[t[1]]+r[2]*e[t[2]];ie[p*4]=S(g)/(Sa*1e3)*(.89+.22*qa(y*60+3,b*60+3,x*60+3)),ie[p*4+1]=h(),ie[p*4+2]=S(_)*(f?1/Math.max(m(f,1),.2):1),ie[p*4+3]=h(),ce[p*3]=S(v),ce[p*3+1]=h(),ce[p*3+2]=m(c,0),se[p]=qa(y*95,b*95,x*95)+.5*qa(y*230+7,b*230+7,x*230+7)-.75;let C=0;for(let e=0;e<3;e++)for(let n=0;n<4;n++){let i=r[e]*d.getComponent(t[e],n);if(i<=0)continue;let a=u.getComponent(t[e],n),o=0;for(;o<C&&de[o]!==a;)o++;o===C&&(de[C]=a,fe[C]=0,C++),fe[o]+=i}let w=0;for(let e=0;e<4;e++){let t=-1,n=0;for(let e=0;e<C;e++)fe[e]>n&&(n=fe[e],t=e);t<0?(le[p*4+e]=0,ue[p*4+e]=0):(le[p*4+e]=de[t],ue[p*4+e]=n,w+=n,fe[t]=0)}for(let e=0;e<4;e++)ue[p*4+e]/=w||1}}let me=(e,t)=>new He(e,t);return{n:E,attrs:{iRoot:me(ee,3),iNrm:me(te,3),iComb:me(O,3),iCol:me(ne,3),iTri:me(re,3),iInfo:me(ie,4),iUv:me(ae,2),iBary:me(oe,2),iAux:me(se,1),iCoat:me(ce,3),skinIndex:me(le,4),skinWeight:me(ue,4)},perMm2:t=>y(t)*e/w}}function Ya(e,t,n,r){let i=new Ie,a=[],o=[];for(let e=0;e<=r;e++){let i=t+(n-t)*e/r;if(a.push(i,-1,0,i,1,0),e){let t=2*e-2;o.push(t,t+1,t+2,t+1,t+3,t+2)}}i.setAttribute(`position`,new P(a,3)),i.setIndex(o);for(let t in e)i.setAttribute(t,e[t]);return i}function Xa(e,t,n){let r=new Ae({color:16777215,side:2,transparent:!0,depthWrite:!1});r.userData.u={uStCount:{value:n},uKc:{value:new A(e.fib,e.lodPx,e.root,e.wave)}};for(let t of[`a`,`b`]){let n=e[t];r.userData.u[`uK`+t+`0`]={value:new A(n.len,n.el[0],n.el[1],n.yaw)},r.userData.u[`uK`+t+`1`]={value:new A(n.curl[0],n.curl[1],n.clump,n.bend)},r.userData.u[`uK`+t+`2`]={value:new A(n.w[0],n.w[1],n.tip,n.spec)},r.userData.u[`uK`+t+`3`]={value:new A(n.fade,n.a0,n.vary,n.low)}}return r.onBeforeCompile=e=>{Object.assign(e.uniforms,wa,z,r.userData.u),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
        #include <packing>
        #include <lights_pars_begin>
        #define ST_NM ${t}
        uniform float uTime, uWindStr, uStFurLen; uniform vec3 uWindDir; uniform mat3 uW2L;
        uniform float uStWrap, uStAmb, uStGain, uStSpec, uStRim, uStShBias, uStShSoft; uniform sampler2DShadow uStShMap; uniform mat4 uStShMat;
        // sum-animals: the room's sun maps (levels/bedroom/sunlight.js). The key light is the sun; how much of it reaches this
        // point past the window, the curtains, the leaves and the things on the sill (the cat's own shadow: uStShMap)
        uniform sampler2D uStSunMap, uStSunMapD; uniform mat4 uStSunMat; uniform float uStSunOn; uniform vec3 uStSunIrr; uniform vec4 uStSunTex;
        uniform float uStSunK, uStSunWrap, uStGlow, uStAmbK, uStSunSheen, uStGround, uStFace, uStAmbShade; varying vec3 vStGlow;
        uniform vec4 uStTouch[6], uStTouchDir[6]; uniform float uStTouchOn;
        float stSunRoom(vec3 w, vec2 j) {
          vec3 s = (uStSunMat * vec4(w, 1.0)).xyz;
          if (s.x <= 0.0 || s.x >= 1.0 || s.y <= 0.0 || s.y >= 1.0 || s.z >= 1.0) return 0.0;
          // as soft as the shadow really is here: how far behind the point the thing in the way is (one look-up) sets the
          // width of the penumbra (leaves far outside: wide; the window bars: narrow), then 4 look-ups across it. (This runs
          // for every vertex of every hair: kept to 6 look-ups.)
          float z = s.z - uStSunTex.y * 6.0, sw = uStSunTex.w * 0.5, dc = textureLod(uStSunMap, s.xy, 0.0).r;      // (uStSunTex.w: 6 cm, in the map)
          float r = dc < z ? clamp((z - dc) * uStSunTex.z, uStSunTex.x * 3.0, sw) : sw * 0.35, k = 0.0, a0 = j.x * 6.2832;
          for (int i = 0; i < 4; i++) { float a = a0 + float(i) * 1.5708; k += step(z, textureLod(uStSunMap, s.xy + vec2(cos(a), sin(a)) * r * (i < 2 ? 0.45 : 1.0), 0.0).r); }
          return k * 0.25 * step(z, textureLod(uStSunMapD, s.xy, 0.0).r);
        }
        uniform float uStLen, uStWidth, uStEl0, uStEl1, uStFly, uStYaw, uStWander, uStCurl, uStClump, uStCell, uStGrav, uStWind, uStTone;
        uniform float uStMinPx, uStLod, uStFmin, uStPix, uStCount, uStA0; uniform vec4 uKa0, uKa1, uKa2, uKa3, uKb0, uKb1, uKb2, uKb3, uKc; uniform vec3 uStTint;
        uniform vec3 uStCam; uniform sampler2D uStMap; uniform highp sampler2DArray uStMorph; uniform float uStMorphInf[${Math.max(t,1)}];
        attribute vec3 iRoot, iNrm, iComb, iCol, iTri; attribute vec4 iInfo; attribute vec2 iUv, iBary; attribute vec3 iCoat; attribute float iAux;
        varying vec3 vStCol, vStLight, vStSpec; varying float vStT, vStAlpha, vStAcross, vStRnd, vStFar, vStWide, vStPxW, vStLf; varying vec2 vStTF;
        ${Ta}
        ${Va}
        // gusts that travel with the wind, and a flutter of the hair's own (two sines: this runs for every vertex)
        vec3 stWindAt(vec3 wp, float seed) {
          float ph = dot(wp * 7.0 - uWindDir * uTime * 2.4, vec3(1.0, 0.6, 0.8));
          float gust = 0.25 + 1.6 * smoothstep(0.3, 0.8, 0.5 + 0.25 * sin(ph) + 0.25 * sin(ph * 2.3 + 1.7));
          vec3 side = normalize(cross(uWindDir, vec3(0.0, 1.0, 0.0)) + 1e-4);
          return (uWindDir * 1.2 + side * (sin(uTime * 14.0 + seed * 6.2832) * 0.3)) * (uWindStr * gust);
        }`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = normalize(iNrm);`).replace(`#include <begin_vertex>`,`
        // ---- the hair in the skin's REST space
        float stT = position.x;
        vec3 stR = h33(vec3(iInfo.y * 913.0 + 1.0, iInfo.y * 131.0 + 7.0, iInfo.w * 57.0 + 3.0));
        vec3 stN = normalize(iNrm);
        vec3 stTn = iComb - stN * dot(iComb, stN);
        stTn = dot(stTn, stTn) > 1e-8 ? normalize(stTn) : normalize(cross(stN, vec3(0.0, 0.0, 1.0)) + 1e-4);
        vec3 stB = cross(stN, stTn);
        // what this hair is like: by its place between the short and the long end of its bucket (no two kinds of hair)
        float stFl = iCoat.x;
        vec4 K0 = mix(uKa0, uKb0, iCoat.y), K1 = mix(uKa1, uKb1, iCoat.y), K2 = mix(uKa2, uKb2, iCoat.y), K3 = mix(uKa3, uKb3, iCoat.y);
        float stShort = 1.0 - smoothstep(0.078, 0.218, iInfo.x);      // velvet (face, paws, ears: hairs of 2 mm): 1 .. the body's coat (6.5 mm and more): 0
        // the lock this hair belongs to: a cell of the rest space, a few millimetres across
        vec3 stCp = iRoot / uStCell, stCi = floor(stCp), stCh = h33(stCi + 0.5);
        // direction: along the comb direction, wandering smoothly over the coat (iAux), every hair a little off; the
        // lower layers are scattered more
        float stYaw = iAux * 2.0 * uStWander * (1.0 - 0.5 * stShort) + (stR.x - 0.5) * 2.0 * uStYaw * (1.0 + (K0.w - 1.0) * stFl);
        vec3 stTj = stTn * cos(stYaw) + stB * sin(stYaw), stBj = cross(stN, stTj);
        // length: its share of the longest hairs' (velvet is of one length: the shares close up), its own, its lock's;
        // and in fluffy fur one long hair in forty stands out of the coat
        float stFly = step(0.975, fract(stR.y * 31.7)) * smoothstep(0.75, 0.95, K0.x) * stFl * uStFly;
        float stLf = mix(K0.x, 0.55 + 0.45 * K0.x, stShort) * mix(0.90, 1.10, stR.y) * mix(0.90, 1.08, stCh.y) * (1.0 + 0.30 * stFly);
        float stL = iInfo.x * uStFurLen * uStLen * stLf;
        // it leaves the skin at the coat's elevation (iInfo.z) and lies down towards the tip: an arc. In fluffy fur the
        // shorter hairs stand more upright (K0.yz); in sleek fur they lie with the long ones.
        float stE0 = min(iInfo.z * uStEl0 * (1.0 + (K0.y - 1.0) * stFl) * mix(0.85, 1.15, stR.z), 1.45);
        float stE1 = iInfo.z * uStEl0 * uStEl1 * (1.0 + (K0.z - 1.0) * stFl) * mix(0.5, 1.5, fract(stR.z * 7.3)) + 0.40 * stFly;
        float stDe = min(stE1 - stE0, -0.05), stE = stE0 + stDe * stT;
        vec3 transformed = iRoot + stL * (stTj * ((sin(stE) - sin(stE0)) / stDe) + stN * ((cos(stE0) - cos(stE)) / stDe));
        vec3 stTan = stTj * cos(stE) + stN * sin(stE);
        // no hair is straight: a slow wave to the side and up, its own phase (the under coat is crimped)
        float stCa = uStCurl * K1.x * mix(0.55, 1.0, stFl) * mix(0.5, 1.5, fract(stR.x * 5.7)), stPh = stR.y * 6.2832, stFq = K1.y;
        transformed += stL * stCa * (stBj * (sin(stT * stFq + stPh) - sin(stPh)) + stN * 0.5 * (cos(stT * stFq * 0.8 + stPh) - cos(stPh)) * stT);
        stTan = normalize(stTan + stCa * stFq * stBj * cos(stT * stFq + stPh));
        // towards the tip the hairs of a lock draw together (a little: strongly, the coat looks wet)
        vec3 stToC = ((stCi + 0.5 + (stCh - 0.5) * 0.5) - stCp) * uStCell;
        stToC -= stN * dot(stToC, stN);
        float stPull = uStClump * K1.z * (1.0 - 0.6 * stShort) * min(1.0, 0.4 * stL / max(length(stToC), 1e-5));
        transformed += stToC * (stPull * stT * stT);
        stTan = normalize(stTan + stToC * (stPull * 2.0 * stT / max(stL, 1e-5)));
        #if ST_NM > 0
        {
          ivec3 stI = ivec3(iTri + 0.5);
          float stB2 = 1.0 - iBary.x - iBary.y;
          for (int mi = 0; mi < ST_NM; mi++) {
            float mw = uStMorphInf[mi];
            if (mw != 0.0) transformed += mw * (iBary.x * texelFetch(uStMorph, ivec3(stI.x % 256, stI.x / 256, mi), 0).xyz
              + iBary.y * texelFetch(uStMorph, ivec3(stI.y % 256, stI.y / 256, mi), 0).xyz + stB2 * texelFetch(uStMorph, ivec3(stI.z % 256, stI.z / 256, mi), 0).xyz);
          }
        }
        #endif
        vStCol = texture2D(uStMap, iUv).rgb * iCol * uStTint * uStGain;`).replace(`#include <skinning_vertex>`,`#include <skinning_vertex>
        {
          vec3 stTanO = normalize(mat3(skinMatrix) * stTan);
          vec3 stNO = normalize(objectNormal);
          // gravity and wind bend the hair, more towards the tip (object space)
          vec3 stWp = (modelMatrix * vec4(transformed, 1.0)).xyz;
          vec3 stBw = uW2L * (stWindAt(stWp, iInfo.y) * uStWind + vec3(0.0, -uStGrav, 0.0)) * K1.w;
          vec3 stHand = vec3(0.0); float stHandW = 0.0;
          if (uStTouchOn > 0.5) {      // sum-animals: a hand stroking the coat (the places along the stroke, fading)
            for (int ti = 0; ti < 6; ti++) {
              vec4 tp = uStTouch[ti], td = uStTouchDir[ti];
              if (td.w <= 0.0) continue;
              vec3 dd = stWp - tp.xyz; float q = max(0.0, 1.0 - dot(dd, dd) / (tp.w * tp.w)), w = td.w * q * q;
              stHand += td.xyz * w; stHandW += w;
            }
          }
          stBw -= stNO * min(0.0, dot(stBw, stNO)) * 0.9;
          if (stHandW > 1e-3) {      // the hairs under the hand laid down along the stroke, close over the skin - their length
            // kept (the tip goes round to where the hair lies, it is not pulled out): from the hair's mean direction
            vec3 stHd = uW2L * stHand; stHd -= stNO * dot(stHd, stNO);
            if (dot(stHd, stHd) > 1e-10) {
              float stEm = stE0 + stDe * 0.5;
              vec3 stMidO = normalize(mat3(skinMatrix) * (stTj * cos(stEm) + stN * sin(stEm)));
              vec3 stLie = normalize(normalize(stHd) + stNO * 0.18);
              stBw += (stLie - stMidO) * min(stHandW, 1.0) * 0.9;
            }
          }
          transformed += stBw * (stL * stT * stT);
          stTanO = normalize(stTanO + stBw * (2.0 * stT));
          // the ribbon faces the camera. It is at least uStMinPx pixels wide; a hair finer than that is as much more
          // transparent. Far away only a share stF of the hairs is drawn, each standing for 1 / stF of them - for single
          // hairs chosen so that a drawn hair is about uStA0 opaque (fine, translucent, many deep); tufts are thinned
          // out once a pixel is larger than uKc.y (under the longer hairs they are no longer seen one by one).
          vec3 stToCam = uStCam - transformed;
          float stPx = max(uStPix * length(stToCam), 1e-7);                              // size of a pixel at the hair (m)
          vec3 stSide = normalize(cross(stTanO, stToCam) + 1e-9);
          float stMin = uStMinPx * stPx, stTuft = step(1.5, uKc.x);
          float stW0 = uStWidth * mix(K2.x, K2.y, smoothstep(0.047, 0.265, iInfo.x));      // the hair's (the tuft's) width here (m)
          float stF = clamp(uKc.y > 0.0 ? uKc.y / stPx : stW0 / (uStA0 * K3.y * stMin), uStFmin, 1.0) * uStLod;
          float stFade = clamp((stF * uStCount - float(gl_InstanceID)) / (0.08 * stF * uStCount + 1.0), 0.0, 1.0);      // the last hairs of the list fade in
          // a hair is broad in the depth of the coat (K3.w) and tapers to its tip; a tuft spreads
          float stW = stW0 / stF * mix((1.0 + K3.w * (1.0 - smoothstep(0.0, 0.5, stT))) * (1.0 - 0.6 * smoothstep(0.45, 1.0, stT)) * mix(0.75, 1.25, stR.y), mix(0.55, 1.5, stT), stTuft);
          // (a tuft seen end-on is a dot of its dark root with the nearly transparent tips on top of it - pepper: left out)
          vStAlpha = clamp(stW / stMin, 0.0, 1.0) * stFade * (1.0 - stTuft * smoothstep(0.80, 0.98, abs(dot(stTanO, stToCam)) / length(stToCam)));
          float stDraw = max(stW, stMin);
          transformed += stSide * (position.y * 0.5 * stDraw * step(1e-4, stFade));
          vStPxW = stDraw / stPx;
          vStWide = clamp(vStPxW - 1.2, 0.0, 1.0);
          // a hair only a few pixels long cannot be told from its neighbours: there the coat takes its mean tone, with
          // little contrast between root and tip or hair and hair (the face from a metre away is velvet, not stubble)
          vStFar = 1.0 - smoothstep(4.0, 16.0, stL / stPx);
          vStCol *= 1.0 + uStTone * K3.z * (1.0 - 0.75 * vStFar) * (1.0 - 0.4 * stShort) * ((stR.x - 0.5) + (stCh.x - 0.5) * 0.8);
          vStT = stT; vStAcross = position.y; vStRnd = stR.z;
          // (for the tone: how high in the coat a point of the hair is; tone at the top - of fluffy fur one sees the tips
          // and little else, a tenth lighter than the same hairs lying: evened out -, start of the tip's fade)
          vStLf = min(stLf, 1.0); vStTF = vec2(K2.z * mix(1.0, 0.90, smoothstep(0.45, 0.85, stFl)), K3.x);
          // ---- light, per vertex (view space). The coat is a soft volume on the skin's normal: the terminator is
          // wrapped (fur scatters light round it - a hard shadow edge reads as a hard surface).
          vec3 stNv = normalize(transformedNormal), stPv = (modelViewMatrix * vec4(transformed, 1.0)).xyz, stV = normalize(-stPv);
          vec3 stTv = normalize(normalMatrix * stTanO);
          float stSunK = uStSunOn > 0.5 ? stSunRoom((modelMatrix * vec4(transformed, 1.0)).xyz, stR.xy) : 1.0;      // sum-animals: in the sunbeam?
          float stSh = 1.0;                                       // the key light's shadow (cast by the skin), one jittered look-up
          {
            vec4 sc = uStShMat * (modelMatrix * vec4(transformed, 1.0));
            sc.xyz /= sc.w;
            if (sc.x > 0.0 && sc.x < 1.0 && sc.y > 0.0 && sc.y < 1.0 && sc.z < 1.0)
              stSh = texture(uStShMap, vec3(sc.xy + (vec2(stR.x, fract(stR.z * 3.7)) - 0.5) * uStShSoft, sc.z - uStShBias));
          }
          // (sum-animals: in the sun the room's light on the coat is held back - she must not glow all over -, in the shade
          // it is all she has)
          vec3 stIrr = ambientLightColor + vec3(uStAmb) + stRoomLight(stWp, inverseTransformDirection(stNv, viewMatrix)) * (uStSunOn > 0.5 ? mix(uStAmbShade, uStAmbK, stSunK) : 1.0);
          float stGr = smoothstep(0.0, 0.07, stWp.y - uStGround);      // sum-animals: 0 on what she stands on .. 1 seven cm up
          stIrr *= mix(0.42, 1.0, stGr);
          #if NUM_HEMI_LIGHTS > 0
          for (int li = 0; li < NUM_HEMI_LIGHTS; li++) stIrr += getHemisphereLightIrradiance(hemisphereLights[li], stNv);
          #endif
          vStSpec = vec3(0.0); vStGlow = vec3(0.0);
          vec3 stIrrRoom = stIrr;      // sum-animals: (the rim below is lit by the room, not by the sun - the sun has its own fringe)
          // sum-animals: the reflector - the room's light again, from a little above the camera, softly wrapped (in the
          // shade she was a dark shape; in the sun it is little next to the sun)
          stIrr += stIrrRoom * (uStFace * clamp((dot(stNv, normalize(stV + vec3(0.0, 0.45, 0.0))) + 0.35) / 1.35, 0.0, 1.0));
          #if NUM_DIR_LIGHTS > 0
          for (int li = 0; li < NUM_DIR_LIGHTS; li++) {
            vec3 stLd = directionalLights[li].direction, stLc = directionalLights[li].color;
            bool stSun = li == 0 && uStSunOn > 0.5;
            if (stSun) {      // sum-animals: the sun, where it gets in - and its light through the fringe of the coat
              vec3 stLs = uStSunIrr * stSunK;
              float stEdge = smoothstep(0.6, 0.97, 1.0 - abs(dot(stNv, stV)));     // only the outline of the body, seen from here
              float stBack = pow(max(0.0, dot(-stV, stLd)), 1.5);                  // the sun behind the hair
              float stSide = max(0.0, dot(stNv, stLd));                            // the side the sun is on
              float stUp = smoothstep(-0.45, 0.45, dot(stNv, stLd));                 // (the edge on the sun's side glows, the underside hardly)
              vStGlow = stLs * (uStGlow * stEdge * (1.2 * stBack * mix(0.25, 1.0, stUp) + 0.5 * stSide)) * mix(1.0, stSh, 0.6)
                * smoothstep(0.02, 0.12, stWp.y - uStGround) * mix(0.45, 1.0, 1.0 - stShort);      // (sum-animals: not round the paws on the sill; the velvet of the legs and face hardly lets the sun through)
              stLc = stLs * uStSunK;
            }
            float stW = stSun ? uStSunWrap : uStWrap;
            float stNl = clamp((dot(stNv, stLd) + stW) / (1.0 + stW), 0.0, 1.0);
            // (lights that cast shadows come first: the key light.) Round the terminator the light that arrives is
            // scattered light, and the shadow map there is a coin toss from hair to hair: no shadow test
            float stS = li == 0 ? mix(1.0, stSh, smoothstep(0.02, 0.30, dot(stNv, stLd))) : 1.0;
            stIrr += stLc * (stNl * stS);
            if (li < 2) {      // sum-animals: the sun's sheen, and the window's (light 1, lit only in the shade)
              // The sheen of the coat - the one the viewer's shell coat has (index.template.html, makeFurMaterial):
              // Kajiya-Kay on a direction between the skin's normal and the comb direction, leaning with gravity and
              // the wind; whitish, not shadowed, full where the shell coat is 6 mm deep. It is 0.05 - 0.13 of white on
              // the trunk - up to a third of the light on the flank -, and the albedo was baked against the sheets
              // WITH it (tools/sheet_calib.py): without it the strand coat was darker and browner than the shells by
              // just that much. There the direction is scattered by a noise and by the gusts, which spreads the two
              // narrow lobes (80, 12) into one broad soft one: here the broad lobe itself (a scatter from hair to
              // hair glitters).
              vec3 stCs = mat3(skinMatrix) * iComb, stGs = uW2L * (uWindDir * (uWindStr * 1.1) + vec3(0.0, -0.35, 0.0));
              stCs -= stNO * dot(stCs, stNO); stGs -= stNO * min(0.0, dot(stGs, stNO)) * 0.8;
              vec3 stTs = normalize(normalMatrix * normalize(stNO + stCs * 1.9 + stGs));
              float th = dot(stTs, normalize(stLd + stV)), kk = max(0.0, 1.0 - th * th);
              vStSpec += stLc * (stSun ? uStSunSheen : 1.0) * 1.111 * vec3(1.0, 0.97, 0.92) * (kk * kk * kk * kk * 0.075 * uStSpec * smoothstep(0.02, 0.2, iCoat.z) * smoothstep(0.0, 0.25, stT * stLf));      // (kk = sin2: sin^8)
            }
          }
          #endif
          vStLight = stIrr * RECIPROCAL_PI + pow(max(0.0, 1.0 - abs(dot(stNv, stV))), 2.5) * 0.26 * uStRim * (dot(uStSunOn > 0.5 ? stIrrRoom : stIrr, vec3(0.2126, 0.7152, 0.0722)) * RECIPROCAL_PI * 1.25);      // + light through the fringe of the outline
        }`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uStRoot, uStTip, uStOpacity; uniform int uStDbg; uniform vec4 uKc;
        varying vec3 vStCol, vStLight, vStSpec; varying float vStT, vStAlpha, vStAcross, vStRnd, vStFar, vStWide, vStPxW, vStLf; varying vec2 vStTF;
        varying vec3 vStGlow;
        float stH11(float x){ return fract(sin(x * 127.1) * 43758.5453); }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          float a = vStAlpha * uStOpacity * smoothstep(0.0, uKc.z, vStT), stFt = 1.0;
          if (uKc.x > 1.5) {
            // a tuft: fine fibres side by side, each with its own length, wave and tone; the ribbon itself has no edge.
            // A fibre is never finer than about a pixel: far away the tuft shows fewer of them (never one soft blade -
            // that is the smooth "skin" one would see under the coat).
            float fn = clamp(vStPxW / 3.0, 1.0, uKc.x);
            float fx = (vStAcross * 0.5 + 0.5) * fn + vStRnd * 13.0, fr = stH11(floor(fx) + vStRnd * 57.0), fl = 0.55 + 0.45 * fr;
            float d = abs(fract(fx) - 0.5 + uKc.w * sin(vStT * 7.0 + fr * 6.2832) * vStT) * 2.0;
            float aa = clamp(1.3 * fn / vStPxW, 0.04, 0.46);                                // the soft edge of a fibre, a good pixel wide
            a *= (1.0 - smoothstep(0.46 - aa, 0.46 + aa, d)) * (1.0 - smoothstep(vStTF.y * fl, fl, vStT)) * (1.0 - smoothstep(0.7, 1.0, abs(vStAcross)));
            stFt = 1.0 + 0.30 * (fr - 0.5);
          } else {
            // a hair: the tip fades over the last part, and seen wider than a pixel it is soft across (a fibre, not tape)
            a *= (1.0 - smoothstep(vStTF.y, 1.0, vStT)) * (1.0 - vStWide * smoothstep(0.15, 1.0, abs(vStAcross)));
          }
          if (a < 0.004) discard;
          diffuseColor.a = a;
          // dark in the depth of the coat (down there the hair stands in the others' shade), light at its top: by the
          // HEIGHT in the coat, not by the place along the hair - the tip of a short hair is half way down
          diffuseColor.rgb = vStCol * stFt * mix(mix(uStRoot, vStTF.x * uStTip, smoothstep(0.0, 0.62, vStT * vStLf)), 0.96, vStFar * 0.8);
          if (uStDbg == 1) diffuseColor.rgb = vec3(vStT, vStRnd, uKc.x / 8.0);
        }`).replace(`#include <lights_fragment_begin>`,`reflectedLight.directDiffuse = diffuseColor.rgb * vStLight;`).replace(`#include <lights_fragment_maps>`,``).replace(`#include <lights_fragment_end>`,``).replace(`#include <opaque_fragment>`,`
        outgoingLight += vStSpec;
        outgoingLight += vStGlow * vec3(1.0, 0.86, 0.62) * (0.5 + 0.5 * diffuseColor.rgb) * smoothstep(0.15, 0.8, vStT);      // sum-animals: sun through the tips
        if (uStDbg > 0) outgoingLight = uStDbg == 5 ? vStSpec * 3.0 : diffuseColor.rgb;
        #include <opaque_fragment>`)},r.customProgramCacheKey=()=>`catfurstrand23`,r}function Za(){let e=ka(0,!0),t=e.onBeforeCompile;return e.side=2,e.shadowSide=1,e.onBeforeCompile=(n,r)=>{t.call(e,n,r),Object.assign(n.uniforms,z);let i=`diffuseColor.rgb *= tone;`,a=`#include <opaque_fragment>`;!n.fragmentShader.includes(i)||!n.fragmentShader.includes(a)?window.__errors.push(`strand: skin hook not found`):n.fragmentShader=n.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uStRoot, uStGain, uStAmb, uStWrap, uStFloor; uniform vec3 uStTint;
        uniform sampler2D uStSunMap, uStSunMapD; uniform mat4 uStSunMat; uniform float uStSunOn; uniform vec3 uStSunIrr; uniform vec4 uStSunTex;
        uniform float uStSunK, uStSunWrap, uStAmbK, uStGround, uStFace, uStAmbShade;
        float stSunRoomF(vec3 w) {      // sum-animals: in the sunbeam? (4 look-ups)
          vec3 s = (uStSunMat * vec4(w, 1.0)).xyz;
          if (s.x <= 0.0 || s.x >= 1.0 || s.y <= 0.0 || s.y >= 1.0 || s.z >= 1.0) return 0.0;
          float z = s.z - uStSunTex.y * 6.0, t = uStSunTex.x * 2.5, k = 0.0;
          for (int i = 0; i < 4; i++) { vec2 o = vec2(i == 1 || i == 3 ? t : -t, i >= 2 ? t : -t); k += step(z, textureLod(uStSunMap, s.xy + o, 0.0).r) * step(z, textureLod(uStSunMapD, s.xy + o, 0.0).r); }
          return k * 0.25;
        }
        ${Ha}`).replace(i,`vec3 stAlb = diffuseColor.rgb; `+i).replace(a,`{
          float stK = smoothstep(0.012, 0.05, vFur) * uStFloor;
          float stSunKF = uStSunOn > 0.5 ? stSunRoomF(((vec4(-vViewPosition, 1.0) - viewMatrix[3]) * viewMatrix).xyz) : 1.0;
          vec3 stIrr = ambientLightColor + vec3(uStAmb) + stRoomLightF(inverseTransformDirection(normal, viewMatrix)) * (uStSunOn > 0.5 ? mix(uStAmbShade, uStAmbK, stSunKF) : 1.0);
          stIrr *= mix(0.42, 1.0, smoothstep(0.0, 0.07, ((vec4(-vViewPosition, 1.0) - viewMatrix[3]) * viewMatrix).y - uStGround));      // sum-animals: (near what she stands on)
          #if NUM_HEMI_LIGHTS > 0
          for (int li = 0; li < NUM_HEMI_LIGHTS; li++) stIrr += getHemisphereLightIrradiance(hemisphereLights[li], normal);
          #endif
          stIrr *= 1.0 + uStFace * clamp((dot(normal, normalize(normalize(vViewPosition) + vec3(0.0, 0.45, 0.0))) + 0.35) / 1.35, 0.0, 1.0);      // sum-animals: (the reflector, as on the hairs)
          #if NUM_DIR_LIGHTS > 0
          for (int li = 0; li < NUM_DIR_LIGHTS; li++) {
            float stNl = dot(normal, directionalLights[li].direction), stS = 1.0;
            #if defined(USE_SHADOWMAP) && NUM_DIR_LIGHT_SHADOWS > 0
            if (li == 0) {
              DirectionalLightShadow ds = directionalLightShadows[0];
              stS = mix(1.0, getShadow(directionalShadowMap[0], ds.shadowMapSize, ds.shadowIntensity, ds.shadowBias, ds.shadowRadius, vDirectionalShadowCoord[0]), smoothstep(0.02, 0.30, stNl));
            }
            #endif
            bool stSunF = li == 0 && uStSunOn > 0.5;
            float stWF = stSunF ? uStSunWrap : uStWrap;
            stIrr += (stSunF ? uStSunIrr * (stSunKF * uStSunK) : directionalLights[li].color) * (clamp((stNl + stWF) / (1.0 + stWF), 0.0, 1.0) * stS);
          }
          #endif
          float stSw = max(0.00016, 1.4 * fw / 3400.0);                          // a streak: a hair wide, or 1.4 pixels
          float stStreak = streakNoise(vRest, Tr, Br, stSw, stSw * 9.0);
          float stGz = pow(max(0.0, 1.0 - abs(dot(normal, normalize(vViewPosition)))), 2.0);
          outgoingLight = mix(outgoingLight, stAlb * uStTint * uStGain * uStRoot * mix(0.78 + 0.30 * stStreak, 1.25, stGz) * stIrr * RECIPROCAL_PI, stK);
        }
        #include <opaque_fragment>`)},e.customProgramCacheKey=()=>`catfurbase_strandfloor4`,e}function Qa(){let t=new URLSearchParams(ba.hash.slice(1)),n=os*+(t.get(`strands`)||1);for(let e of(t.get(`st`)||``).split(`,`).filter(Boolean)){let[t,n]=e.split(`:`),r=z[`uSt`+t[0].toUpperCase()+t.slice(1)];r&&r.value.isVector3?r.value.set(...n.split(`/`).map(Number)):r&&(r.value=+n,r.user=!0)}let r=(t.get(`layers`)||``).split(`,`).filter(Boolean),i=B.geometry,a=i.attributes.position,o=i.morphAttributes.position||[],s=o.length,c=Math.ceil(a.count/256),l=i.morphTargetsRelative,u=new Float32Array(256*c*4*Math.max(s,1));o.forEach((e,t)=>{for(let n=0;n<a.count;n++){let r=(t*256*c+n)*4;u[r]=e.getX(n)-(l?0:a.getX(n)),u[r+1]=e.getY(n)-(l?0:a.getY(n)),u[r+2]=e.getZ(n)-(l?0:a.getZ(n))}});let d=new E(u,256,c,Math.max(s,1));d.format=ce,d.type=Je,d.needsUpdate=!0,z.uStMorph.value=d,z.uStMorphInf.value=s?B.morphTargetInfluences:[0],z.uStMap.value=Oa||new e(new Uint8Array([255,255,255,255]),1,1),Oa||(z.uStMap.value.needsUpdate=!0),z.uStShMap.value=null,Ra();let f={};for(let e of Na){if(r.length&&!r.includes(e.name))continue;let t=Ja(e.n*n,e.seed,e.minL),i=Xa(e,s,t.n);f[e.name]=[2,3.5,7,12,16].map(e=>+t.perMm2(e).toFixed(2));for(let[n,r,a,o]of e.slices){let s=new Xe(Ya(t.attrs,n,r,a),i);s.bind(B.skeleton,B.bindMatrix),s.position.copy(B.position),s.quaternion.copy(B.quaternion),s.scale.copy(B.scale),s.frustumCulled=!1,s.castShadow=!1,s.receiveShadow=!1,s.renderOrder=150+o,s.visible=!1,s.userData.n=t.n,s.userData.K=e,s.userData.first=n===0,B.parent.add(s),Ua.push(s)}}Wa=Za();let p=Ua.filter(e=>e.userData.first);window.__THREE=w,window.__strands={meshes:Ua,n:p.reduce((e,t)=>e+t.userData.n,0),drawn:()=>p.reduce((e,t)=>e+t.geometry.instanceCount,0),perMm2:f,coat:La}}function $a(){let e=ya(`furOn`).checked&&ho===`strand`&&!!z.uStShMap.value;Ua.forEach(t=>{t.visible=e}),ho===`strand`&&(lo.forEach(e=>{e.visible=!1}),wa.uSpomOn.value=Aa),e&&Wa&&(B.material=Wa)}function eo(){if(ga&&ga.shadow.map&&ga.shadow.map.depthTexture&&z.uStShMap.value!==ga.shadow.map.depthTexture&&(z.uStShMap.value=ga.shadow.map.depthTexture,$a()),!Ua.length||!Ua[0].visible)return;z.uStFurLen.value=Sa*+ya(`len`).value,Ga.copy(B.matrixWorld).invert(),z.uStCam.value.copy(ha.position).applyMatrix4(Ga),z.uStPix.value=2/(ha.projectionMatrix.elements[5]*ma.domElement.height);let e=1e9;for(let t of[`head`,`chest`,`hips`,`tail_04`,`tail_07`,`paw_front_L`,`paw_front_R`,`foot_L`,`foot_R`])V[t]&&(e=Math.min(e,ha.position.distanceTo(V[t].getWorldPosition(Ka))));e>1e8&&(e=ha.position.distanceTo(fo.position));let t=z.uStPix.value*Math.max(e-.07,.02);for(let e of Ua){let n=e.userData.K,r=n.lodPx>0?n.lodPx/t:n.b.w[1]*z.uStWidth.value/(z.uStA0.value*Math.min(n.a.a0,n.b.a0)*z.uStMinPx.value*t);e.geometry.instanceCount=Math.max(1,Math.ceil(e.userData.n*Math.min(1,Math.min(1,Math.max(z.uStFmin.value,r))*z.uStLod.value)))}z.uStShMat.value=ga.shadow.matrix,z.uStEnv.user||(z.uStEnv.value=_a.environment?_a.environmentIntensity/.35:0)}var to={uDilate:{value:.8},uGlint:{value:1}},no=null,ro=[];function io(){let e=new x({color:16777215,roughness:.6,metalness:0,clearcoat:1,clearcoatRoughness:.05});return e.envMapIntensity=.28,e.defines=Object.assign(e.defines||{},{USE_UV:``}),e.onBeforeCompile=e=>{e.uniforms.uDilate=to.uDilate,e.uniforms.uGlint=to.uGlint,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying float vEyeSide;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vEyeSide = sign(position.x);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        uniform float uDilate, uGlint;
        varying float vEyeSide;
        float eyeGlint = 0.0;
        #define IRIS_PUPIL_CENTRE vec2(0.0)
        ${da}`).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          vec2 ip = vec2((vUv.x - 0.5) * 4.0, (0.5 - vUv.y) * 4.0);
          irisDetail = clamp((2.0 / max(max(fwidth(ip.x), fwidth(ip.y)), 1e-5) - 50.0) / 70.0, 0.0, 1.0);
          // iris texture from the part's shader; the pupil is drawn rounder than the part sheet's tall oval (head sheet: nearly round)
          vec4 ic = irisColor(ip, 0.0);
          ic.rgb = mix(ic.rgb, IRIS * 0.92, ic.a);
          float pd_;
          ic.a = irisPupil(vec2(ip.x, ip.y * 1.30), uDilate, pd_);
          ic.rgb = mix(ic.rgb, PUPIL, ic.a);
          float ir = length(ip);
          vec3 alb = mix(vec3(dot(ic.rgb, vec3(0.3, 0.6, 0.1))), ic.rgb, 0.80) * 0.84;       // tone as on the whole-cat sheet (greyer and darker than the part sheet)
          alb = mix(alb, vec3(0.17, 0.13, 0.11), smoothstep(0.985, 1.03, ir));        // beyond the limbus: dark rim, normally under the lids
          alb = mix(alb, vec3(0.86, 0.79, 0.75), smoothstep(1.08, 1.30, ir));        // sclera
          alb *= 1.0 - 0.30 * smoothstep(0.0, 0.95, ip.y) * (1.0 - ic.a);            // the upper lid shades the eye
          diffuseColor.rgb = pow(alb, vec3(2.2));
          // soft catchlight, on the viewer's upper right of both eyes as on the sheet (ip.x runs outwards on each eye)
          vec2 gp = (ip - vec2(0.36 * vEyeSide, 0.50)) / vec2(0.17, 0.14);
          eyeGlint = (1.0 - smoothstep(0.55, 1.0, length(gp))) * 0.9;
        }`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(eyeGlint) * uGlint;`)},e.customProgramCacheKey=()=>`cateye`,e}var ao=`
vec3 skHash(vec3 p){ p = fract(p * vec3(.1031, .1030, .0973)); p += dot(p, p.yxz + 33.33); return fract((p.xxy + p.yxx) * p.zyx); }
vec2 skCell(vec3 x){                       // distance to the nearest and the second nearest cell centre
  vec3 i = floor(x), f = fract(x); float d1 = 8.0, d2 = 8.0;
  for (int a = -1; a <= 1; a++) for (int b = -1; b <= 1; b++) for (int c = -1; c <= 1; c++) {
    vec3 g = vec3(float(a), float(b), float(c)); float d = length(g + skHash(i + g) - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return vec2(d1, d2);
}
float skH = 1.0, skHx = 0.0, skHy = 0.0, skFade = 0.0;`;function oo(e){let t=new x({color:16777215,vertexColors:!0,roughness:.48,metalness:0,clearcoat:.55,clearcoatRoughness:.25});return t.name=e.name,t.envMapIntensity=.8,t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float dorsal;
varying vec2 vTongueUv; varying float vTongueDorsal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vTongueUv = uv; vTongueDorsal = dorsal;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec2 vTongueUv; varying float vTongueDorsal;
`+fa+`
float tgD = 0.0, tgH = 0.0; vec3 tgP = vec3(0.0);`).replace(`#include <color_fragment>`,`#include <color_fragment>
        tgD = smoothstep(0.55, 0.95, vTongueDorsal);                 // 1 on the papillae-bearing top
        tonguePixel = tonguePixelOf(vTongueUv);
        tgP = tonguePap(vTongueUv);
        tgH = tgP.x * tgD;
        diffuseColor.rgb = mix(tongueUnderTint(vTongueUv, diffuseColor.rgb), tongueTintP(vTongueUv, diffuseColor.rgb, tgP), tgD);`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        roughnessFactor *= mix(1.0, mix(1.30, 0.80, tgP.x), tgP.y * tgD);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        {
          vec3 dpx = dFdx(vViewPosition), dpy = dFdy(vViewPosition);
          vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
          float det = dot(dpx, r1);
          normal = normalize(abs(det) * normal - 7.5e-5 * sign(det) * (dFdx(tgH) * r1 + dFdy(tgH) * r2));      // spine height = 0.012 tongue widths
        }`)},t.customProgramCacheKey=()=>`cattongue`,t}function so(e,t){let n=new x({color:16777215,vertexColors:!0,roughness:t.rough,metalness:0,clearcoat:t.coat,clearcoatRoughness:t.coatRough});return n.name=e.name,n.envMapIntensity=.8,t.freq&&(n.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vRestP;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vRestP = position;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vRestP;
`+ao).replace(`#include <color_fragment>`,`#include <color_fragment>
        {
          vec3 q = vRestP * ${t.freq.toFixed(1)};
          skFade = 1.0 - smoothstep(0.30, 0.85, length(fwidth(q)));          // no relief once the cells are smaller than ~2 px
          vec2 c = skCell(q);
          skH = ${t.kind===1?`1.0 - smoothstep(0.0, 0.60, c.x)`:`smoothstep(0.0, 0.24, c.y - c.x)`};
          skHx = dFdx(skH); skHy = dFdy(skH);
          diffuseColor.rgb *= mix(1.0, mix(${t.groove.toFixed(2)}, 1.0, skH), skFade);
        }`).replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, roughnessFactor * mix(1.35, 0.85, skH), skFade);`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
        {
          vec3 dpx = dFdx(vViewPosition), dpy = dFdy(vViewPosition);
          vec3 r1 = cross(dpy, normal), r2 = cross(normal, dpx);
          float det = dot(dpx, r1);
          normal = normalize(abs(det) * normal - ${t.bump.toExponential(3)} * skFade * sign(det) * (skHx * r1 + skHy * r2));
        }`)},n.customProgramCacheKey=()=>`catskin`+t.kind+t.freq),n}var co,B,lo=[],V={},uo=[],fo,po,mo={now:null,classic:null},ho=`shell`,H={},go={},_o={};function vo(){po.updateMatrixWorld(!0);let e=B.geometry,t=e.attributes.position,n=e.attributes.normal,r=e.attributes.skinIndex,i=e.attributes.skinWeight,a=B.skeleton,o=B.matrixWorld.clone().invert(),s=e=>e.getWorldPosition(new M).applyMatrix4(o),c=a.bones.map(e=>{let t=e.children.find(e=>e.isBone),n=t?s(t).sub(s(e)):e.parent&&e.parent.isBone?s(e).sub(s(e.parent)):new M(0,-1,0);return n.normalize(),/^(hips|spine|chest|neck|head|jaw|root)/.test(e.name)&&n.negate().add(new M(0,-.35,0)).normalize(),/^(shoulder|thigh)/.test(e.name)&&n.add(new M(0,0,-.6)).normalize(),/^ear_01/.test(e.name)&&n.multiplyScalar(.3),n});a.bones.forEach((e,t)=>{/^vol_|_tw\d?_[LR]$/.test(e.name)&&(c[t]=c[a.bones.indexOf(e.parent)])});let l=a.bones.map((e,t)=>/^(head|jaw)$/.test(e.name)?t:-1).filter(e=>e>=0),u=new M,d=new M,f=e=>{let t=0;for(let n=0;n<4;n++)l.includes(r.getComponent(e,n))&&(t+=i.getComponent(e,n));return t},p=[];for(let e=0;e<t.count;e++)f(e)>.9&&p.push([t.getZ(e),e]);p.sort((e,t)=>t[0]-e[0]);for(let[,e]of p.slice(0,24))d.add(u.fromBufferAttribute(t,e));d.multiplyScalar(1/24),d.z-=.004;let m=[];for(let e of[1,-1]){let t=new M,n=0;for(let r of ro){let i=r.geometry.attributes.position;for(let r=0;r<i.count;r++)i.getX(r)*e>0&&(t.x+=i.getX(r),t.y+=i.getY(r),t.z+=i.getZ(r),n++)}n&&m.push(t.multiplyScalar(1/n))}let h=new Float32Array(t.count*3),g=new M,_=new M;for(let e=0;e<t.count;e++){g.fromBufferAttribute(n,e).normalize(),_.set(0,0,0);for(let t=0;t<4;t++)_.addScaledVector(c[r.getComponent(e,t)],i.getComponent(e,t));let a=u.fromBufferAttribute(t,e).distanceTo(d),o=k.smoothstep(f(e),.15,.75)*(1-k.smoothstep(a,.046,.092));o>0&&_.lerp(u.fromBufferAttribute(t,e).sub(d).normalize(),o);for(let n of m){let r=1-k.smoothstep(u.fromBufferAttribute(t,e).distanceTo(n),.01,.022);r>0&&_.lerp(u.sub(n).normalize(),.85*r)}_.sub(g.clone().multiplyScalar(_.dot(g))),h.set([_.x,_.y,_.z],e*3)}e.setAttribute(`comb`,new ee(h,3))}function yo(){let e=B.geometry,t=e.attributes.position,n=e.attributes.normal,r=e.attributes._tuft,i=e.attributes.skinIndex,a=e.attributes.skinWeight,o=B.skeleton,s=bo(5);if(!r)return;let c=e.morphAttributes.position||[],l=[],u=[],d=[],f=[],p=c.map(()=>[]),m=new M,h=new M,g=new M,_=new M,v=new M,y=new M,b=e=>_.set(s()-.5,s()-.5,s()-.5).multiplyScalar(e);for(let e of[`L`,`R`]){let _=[`ear_01_`+e,`ear_02_`+e].map(e=>o.bones.findIndex(t=>t.name===e)),x=e=>{let t=0;for(let n=0;n<4;n++)_.includes(i.getComponent(e,n))&&(t+=a.getComponent(e,n));return t},S=[];for(let e=0;e<t.count;e++)x(e)>.3&&S.push(e);let C=S.map(e=>new M().fromBufferAttribute(t,e)),w=e=>{let t=0,n=1e9;for(let r=0;r<C.length;r++){let i=C[r].distanceToSquared(e);i<n&&(n=i,t=r)}return S[t]};for(let e=0;e<t.count;e++){h.fromBufferAttribute(r,e),h.set(h.x,h.z,-h.y);let o=h.length();if(!(o<1e-4||x(e)<.02)){g.fromBufferAttribute(n,e).normalize();for(let n=0;n<14;n++){m.fromBufferAttribute(t,e).add(b(.0034));let n=h.clone().multiplyScalar(.55+.45*s()).add(b(o*.1)),r=b(o*.1).clone(),_=[0,.2,.42,.66,.85,1].map(e=>m.clone().addScaledVector(n,e).addScaledVector(g,4e-4+.0014*Math.sin(e*Math.PI*.8)).addScaledVector(r,Math.sin(e*Math.PI)));y.crossVectors(n,g).normalize();let x=l.length/3;_.forEach((e,t)=>{let n=13e-5*(1-.6*t/5),r=w(e);for(let t of[-1,1]){v.copy(e).addScaledVector(y,t*n),l.push(v.x,v.y,v.z);for(let e=0;e<4;e++)u.push(i.getComponent(r,e)),d.push(a.getComponent(r,e));c.forEach((e,t)=>p[t].push(e.getX(r),e.getY(r),e.getZ(r)))}t&&f.push(x+2*t-2,x+2*t-1,x+2*t,x+2*t-1,x+2*t+1,x+2*t)})}}}}if(!l.length)return;let x=new st;x.setAttribute(`position`,new P(l,3)),x.setAttribute(`skinIndex`,new Ze(u,4)),x.setAttribute(`skinWeight`,new P(d,4)),x.setIndex(f),c.length&&(x.morphAttributes.position=p.map(e=>new P(e,3)),x.morphTargetsRelative=e.morphTargetsRelative);let S=new Xe(x,new Ae({color:16183012,transparent:!0,opacity:.22,side:2,depthWrite:!1}));S.bind(B.skeleton,B.bindMatrix),S.position.copy(B.position),S.quaternion.copy(B.quaternion),S.scale.copy(B.scale),c.length&&(S.morphTargetInfluences=B.morphTargetInfluences,S.morphTargetDictionary=B.morphTargetDictionary),S.frustumCulled=!1,S.renderOrder=200,S.castShadow=!1,B.parent.add(S)}function bo(e){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var xo={Neutral:{label:`默认`,m:{}},Happy:{label:`开心`,m:{eyes_happy:.45,smile:1,ears_forward:.3}},Surprised:{label:`惊讶`,m:{eyes_wide:1,mouth_open:.35,pupils_dilate:1}},Sleepy:{label:`困了`,m:{blink_L:1,blink_R:1,ears_back:.12,smile:.2}},Curious:{label:`好奇`,m:{ears_forward:1,eyes_wide:.35,pupils_dilate:.5},tilt:.32},Playful:{label:`调皮`,m:{mouth_open:1,tongue_long:1,smile:.6,eyes_happy:.25}},MouthOpen:{label:`张嘴`,m:{mouth_open:1.2}},Blep:{label:`吐舌尖`,m:{mouth_open:.55,tongue_out:1}},TongueLong:{label:`伸舌`,m:{mouth_open:1.2,tongue_long:1}},TongueLeft:{label:`舌左`,m:{mouth_open:1.2,tongue_left:1}},TongueRight:{label:`舌右`,m:{mouth_open:1.2,tongue_right:1}},TongueCurl:{label:`卷舌`,m:{mouth_open:1.2,tongue_curl:1}}},So=[`blink_L`,`blink_R`,`eyes_wide`,`eyes_happy`,`mouth_open`,`smile`,`tongue_out`,`tongue_long`,`tongue_left`,`tongue_right`,`tongue_curl`,`ears_back`,`ears_forward`,`pupils_dilate`],Co=13*Math.PI/180,wo={};function To(){for(let e of pa.drivers){e.rest||(e.b=e.bones.map(e=>V[e]),e.rest=e.b.map(e=>e?as(e).invert():null),e.k=e.rotvecs.map(e=>new M(...e)));let t=1;if(e.b.forEach((n,r)=>{if(!n){t=0;return}let i=e.rest[r].clone().multiply(n.quaternion);i.w<0&&(i.x=-i.x,i.y=-i.y,i.z=-i.z,i.w=-i.w);let a=Math.hypot(i.x,i.y,i.z),o=a>1e-9?2*Math.atan2(a,i.w)/a:0;t=e.mode===`near`?Math.min(t,Math.max(0,1-Math.hypot(i.x*o-e.k[r].x,i.y*o-e.k[r].y,i.z*o-e.k[r].z)/Math.max(e.radius*e.k[r].length(),e.min_radius))):Math.min(t,Math.max(0,(i.x*e.k[r].x+i.y*e.k[r].y+i.z*e.k[r].z)*o/e.k[r].lengthSq()))}),e.mode===`near`&&(t=t*t*(3-2*t)),e.clips&&t>0){let n=0,r=0;for(let t in go)r+=go[t],e.clips.includes(t)&&(n+=go[t]);t*=r>0?Math.min(1,n/r):0}wo[e.key]=window.__noFix?0:t}}var Eo=0,Do=Object.fromEntries(So.map(e=>[e,0])),Oo=`Neutral`,ko=0;function Ao(e){xo[e]&&(Oo=e)}Ao(`Neutral`);var jo=2.5,Mo=-1;function No(e){B&&To();let t={...xo[Oo].m};cs>0&&(t.mouth_open=Math.max(t.mouth_open||0,.95*Math.sin(Math.min(1,cs)*Math.PI))),ya(`blink`).checked&&(jo-=e,jo<=0&&Mo<0&&(Mo=0,jo=2+Math.random()*3.5));let n=0;Mo>=0&&(Mo+=e/.17,n=Math.sin(Math.min(1,Mo)*Math.PI),Mo>=1&&(Mo=-1));let r=Lo();if(r===`Sleep`&&(t.blink_L=t.blink_R=1,n=0),r===`Idle_Lie`&&(t.blink_L=Math.max(t.blink_L||0,.35),t.blink_R=Math.max(t.blink_R||0,.35)),r===`Groom`&&(t.blink_L=Math.max(t.blink_L||0,.6),t.blink_R=Math.max(t.blink_R||0,.6)),ls>.01){us-=e,us<=0&&ls>.6&&(us=3.2+Math.random()*2.5,ds=0);let r=0;ds>=0&&(ds+=e/1.5,r=ds<.35?ds/.35:ds<.55?1:Math.max(0,1-(ds-.55)/.45),ds>=1&&(ds=-1));let i=Math.max(.3*ls,r*ls);t.blink_L=Math.max(t.blink_L||0,i),t.blink_R=Math.max(t.blink_R||0,i),t.eyes_happy=Math.max(t.eyes_happy||0,.75*ls),t.smile=Math.max(t.smile||0,.6*ls),n*=1-ls}else ds=-1;let i=1-Math.exp(-e*10);for(let e of So){let r=t[e]||0;(e===`blink_L`||e===`blink_R`)&&(r=Math.max(r,n)),window.__blink!=null&&e.startsWith(`blink`)&&(r=window.__blink,Do[e]=r),Do[e]+=(r-Do[e])*(e.startsWith(`blink`)?.6:i)}for(let e of uo){let t=e.morphTargetDictionary,n=e.morphTargetInfluences;for(let e in t)n[t[e]]=e===`mouth_open`?Math.min(1.3,Math.max(0,Do.mouth_open+Eo/Co)):e in wo?wo[e]:Do[e]??0}ko+=((xo[Oo].tilt||0)+.14*ls-ko)*i}var Po=[`Sit_Down`,`Stand_Up`,`Jump_Start`,`Jump_Land`,`Lie_Down`,`Stretch`,`Meow`],Fo={mode:`loco`,clip:null,t:0,pos:new M,heading:0,speed:0,vy:0,phase:0,y:0};function Io(e){let t=H[e];t.reset(),t.setEffectiveWeight(go[e]),t.play()}function Lo(){let e=null,t=0;for(let n in _o)_o[n]>t&&(t=_o[n],e=n);return e}function U(e){for(let t in _o)_o[t]=e[t]||0}function Ro(e){let t=ss,n=1-Math.exp(-e/t),r=0;for(let e in go)go[e]+=(_o[e]-go[e])*n,go[e]<.001&&_o[e]===0&&(go[e]=0),r+=go[e];for(let e in go)H[e].setEffectiveWeight(r>0?go[e]/r:0)}var zo=0,Bo=new M,Vo=!1,Ho=0,Uo=0,Wo=new M,Go=new ie,Ko=new ie,qo=new ie,Jo=new ie,Yo=new ke;function Xo(e,t,n,r){fo.getWorldQuaternion(Jo),qo.setFromEuler(Yo.set(n,t,r,`YXZ`)),qo.premultiply(Jo).multiply(Jo.clone().invert()),e.parent.getWorldQuaternion(Ko),Go.copy(Ko).invert().multiply(qo).multiply(Ko).multiply(e.quaternion),e.quaternion.copy(Go)}var Zo=[`neck_02`,`head`,`ear_01_L`,`ear_01_R`,`jaw`,`shoulder_R`,`arm_upper_R`,`arm_lower_R`,`paw_front_R`],Qo={},$o={},es=null,ts=new ie,ns=new M(1,0,0);function rs(){for(let e of Zo){let t=V[e];t&&(Qo[e]||(Qo[e]=t.quaternion.clone(),$o[e]=t.quaternion.clone()),t.quaternion.equals($o[e])?t.quaternion.copy(Qo[e]):Qo[e].copy(t.quaternion))}}function is(e){rs();let t=0,n=0,r=![`T_Pose`,`Sleep`,`Groom`,`Lie_Down`,`Stretch`,`Jump_Start`,`Jump_Air`,`Jump_Land`].includes(Lo());if(zo+=((ya(`follow`).checked&&r?1:0)-zo)*(1-Math.exp(-e*4)),ya(`follow`).checked&&Vo&&V.head){V.head.getWorldPosition(Wo);let e=xa.copy(Bo).sub(Wo).normalize();fo.getWorldQuaternion(Jo),e.applyQuaternion(Jo.invert()),t=k.clamp(Math.atan2(e.x,e.z),-1.1,1.1),n=k.clamp(-Math.asin(k.clamp(e.y,-1,1)),-.6,.5),e.z<-.2&&(t*=.5)}window.__look&&(t=window.__look[0],n=window.__look[1],zo=1);let i=1-Math.exp(-e*5);if(Ho+=(t*zo-Ho)*i,Uo+=(n*zo-Uo)*i,fo.updateMatrixWorld(!0),Math.abs(Ho)+Math.abs(Uo)>1e-4&&(Xo(V.neck_02,Ho*.4,Uo*.35,0),V.neck_02.updateMatrixWorld(!0)),Math.abs(Ho)+Math.abs(Uo)+Math.abs(ko)>1e-4&&Xo(V.head,Ho*.6,Uo*.65,ko),Math.abs(Ho)>.02)for(let e of[`L`,`R`])Xo(V[`ear_01_`+e],-Ho*.25,0,0);V.jaw&&(es||=as(V.jaw),Eo=2*Math.acos(Math.min(1,Math.abs(ts.copy(es).invert().multiply(Qo.jaw).w))),Do.mouth_open>1e-4&&V.jaw.quaternion.multiply(ts.setFromAxisAngle(ns,Co*Do.mouth_open))),ws();for(let e of Zo)V[e]&&$o[e].copy(V[e].quaternion)}function as(e){let t=B.skeleton,n=t.bones.indexOf(e),r=t.bones.indexOf(e.parent),i=t.boneInverses[n].clone().invert();return r>=0&&i.premultiply(t.boneInverses[r]),new ie().setFromRotationMatrix(i)}var os=1,ss=.16,cs=0,ls=0,us=2,ds=-1,fs=new c;function ps(e){let t={isImageBitmapLoader:!0,load(t,n,r,i){let a=e.get(t);e.delete(t),(a?Promise.resolve(a):fetch(t).then(e=>e.blob())).then(e=>createImageBitmap(e,{premultiplyAlpha:`none`,colorSpaceConversion:`none`})).then(n,i)}};for(let e of[`setCrossOrigin`,`setWithCredentials`,`setRequestHeader`,`setPriority`,`setCache`,`setPath`,`setOptions`])t[e]=()=>t;return t}async function ms(e,{renderer:t,camera:n,key:r,scene:i,density:a=1,sun:s=null}){if(ma=t,ha=n,ga=r,_a=i,os=a,s)for(let e of[`Map`,`MapD`,`Mat`,`On`,`Irr`,`Tex`])s[e]&&(z[`uStSun`+e]=s[e]);let c=new Map,l=URL.createObjectURL;URL.createObjectURL=function(e){let t=l.call(URL,e);return e instanceof Blob&&c.set(t,e),t};let u;try{let t=new Ve;typeof createImageBitmap<`u`&&t.register(e=>(e.textureLoader=ps(c),{name:`sum_animals_bitmaps`})),u=await t.loadAsync(e)}finally{URL.createObjectURL=l}po=u.scene,fo=new Ne,fo.name=`Maimai`,fo.add(po),po.traverse(e=>{e.isSkinnedMesh&&e.geometry.attributes._fur&&(B=e),e.isBone&&(V[e.name]=e),e.isMesh&&e.morphTargetDictionary&&uo.push(e)}),po.traverse(e=>{if(!e.isMesh||(e.frustumCulled=!1,e===B))return;e.castShadow=!0;let t=e.material;t.vertexColors=t.name!==`Pupil`,t.name===`Eye`||t.name===`Cornea`?(t.name===`Eye`&&ro.push(e),e.material=no||=io(),e.castShadow=!1):(t.name===`Lid`&&(e.material=so(t,{rough:.5,coat:.45,coatRough:.3})),t.name===`Pupil`||t.name===`Glint`?e.visible=!1:(t.name===`Nose`&&(e.material=so(t,{rough:.5,coat:.3,coatRough:.4,freq:3400,bump:6e-5,kind:0,groove:.8})),t.name===`Tongue`&&(e.geometry.attributes._dorsal&&e.geometry.attributes.uv?(e.geometry.setAttribute(`dorsal`,e.geometry.attributes._dorsal),e.material=oo(t)):e.material=so(t,{rough:.5,coat:.55,coatRough:.25,freq:2600,bump:9e-5,kind:1,groove:.9})),t.name===`Teeth`&&(e.material=so(t,{rough:.16,coat:1,coatRough:.04}),e.material.ior=1.62,e.material.envMapIntensity=1.25),t.name===`Mouth`&&(e.material=so(t,{rough:.36,coat:1,coatRough:.09,freq:4600,bump:26e-6,kind:0,groove:.94})),t.name===`Whisker`&&(t.roughness=.4,t.color.multiplyScalar(.8),t.transparent=!0,t.opacity=.7,t.depthWrite=!1,e.renderOrder=160,e.castShadow=!1)))});let f=B.geometry;if(f.morphAttributes.position){let e=f.morphAttributes.position.map(()=>new P(new Float32Array(f.attributes.position.count*3),3)),t=!1;for(let[n,r]of Object.entries(B.morphTargetDictionary)){let i=f.attributes[`_n`+n.toLowerCase()];if(i){for(let t=0;t<i.count;t++)e[r].setXYZ(t,i.getX(t),i.getZ(t),-i.getY(t));t=!0}}t&&(f.morphAttributes.normal=e)}f.setAttribute(`furLen`,f.attributes._fur),f.setAttribute(`furMat`,f.attributes._fmat||new ee(new Float32Array(f.attributes.position.count*3).fill(1),3)),f.setAttribute(`furPat`,f.attributes._fpat||new ee(new Float32Array(f.attributes.position.count).fill(1),1)),vo(),Oa=B.material.map||null,Oa&&(Oa.anisotropy=8),B.material=ka(0,!0),mo.now=B.material,mo.now.side=2,mo.now.shadowSide=1,B.castShadow=!0,B.receiveShadow=!0,ho=`strand`,Qa(),yo(),$a(),co=new d(po);for(let e of u.animations){let t=co.clipAction(e);t.enabled=!0,t.setEffectiveWeight(0),t.play(),H[e.name]=t,go[e.name]=0,_o[e.name]=0}for(let e of[`Walk`,`Trot`,`Run`])H[e].timeScale=0;for(let e of Po)H[e].setLoop(o),H[e].clampWhenFinished=!0;return H.Stand_Up.timeScale=1.5,H.Sit_Down.timeScale=1.2,go.Idle_Stand=1,_o.Idle_Stand=1,co.update(0),fo.updateMatrixWorld(!0),{group:fo,bones:V,body:B,clips:Object.keys(H),update:Ts,headWorldPosition:e=>V.head?V.head.getWorldPosition(e):e.copy(fo.position),setDensity:e=>{z.uStLod.value=e},setGround:e=>{z.uStGround.value=e},setPet:e=>{ls=e},setGlint:e=>{to.uGlint.value=e},uniforms:{U:wa,ST:z,EYE:to},get mode(){return W},get clip(){return Lo()},dispose(){fo.removeFromParent()}}}var hs=.3,W=`loco`,gs=0,_s=0,vs=null,ys=null,bs=0;function G(e){W=e,gs=0,Fo.mode=e}function xs(e){return H[e].getClip().duration/(H[e].timeScale||1)}function Ss(e,t){let n={Idle_Stand:0,Walk:0,Trot:0,Run:0};if(e<=.02)n.Idle_Stand=1;else for(let t=0;t<Ca.length-1;t++){let[r,i]=Ca[t],[a,o]=Ca[t+1];if(e<=o||t===Ca.length-2){let t=Math.min(1,(e-i)/(o-i));n[r]=1-t,n[a]=t;break}}let r=0,i=0;for(let[t,a,o]of Ca.slice(1))n[t]>0&&(r+=n[t]/o*k.clamp(e/a,.55,1.4),i+=n[t]);i>0&&(Fo.phase=(Fo.phase+t*r/i)%1);for(let e of[`Walk`,`Trot`,`Run`])H[e].time=Fo.phase*H[e].getClip().duration;return n}function Cs(e,t){gs+=e,ss=.16,bs=t.swat||0,cs=cs>0?cs+e/.55:0,cs>1&&(cs=0);let n=t.speed>.08||!!t.wantMove;if(!t.grounded&&!t.charging&&(W!==`air`&&(t.vy>.5||t.vy<-1||W===`crouch`)&&(H.Jump_Start.paused=!1,G(`air`),H.Jump_Air.time=0,U({Jump_Air:1})),W===`air`)){ss=.07;return}if(W===`air`){G(`land`),Io(`Jump_Land`),U({Jump_Land:1}),ss=.06;return}if(W===`land`){if(ss=.07,gs<(n?.18:.4))return;G(`loco`)}if(t.charging){W!==`crouch`&&(G(`crouch`),Io(`Jump_Start`),U({Jump_Start:1})),ss=.09,H.Jump_Start.time>=hs&&(H.Jump_Start.time=hs,H.Jump_Start.paused=!0);return}if(W===`crouch`&&(H.Jump_Start.paused=!1,G(`loco`)),t.action===`meow`&&(W===`loco`&&!n?(G(`oneshot`),ys=`Meow`,Io(`Meow`),U({Meow:1})):cs=1e-4),t.action!==`stretch`||W!==`loco`&&W!==`sit`||n||(G(`oneshot`),ys=`Stretch`,Io(`Stretch`),U({Stretch:1})),t.action===`groom`&&!n&&(W===`sit`||W===`sitdown`?(G(`groom`),H.Groom.time=0,U({Groom:1})):W===`loco`&&(G(`sitdown`),Io(`Sit_Down`),U({Sit_Down:1}),ys=`groom`)),W===`oneshot`){if(n&&gs>.25)G(`loco`);else if(gs>xs(ys)-.12)ys===`Stretch`&&t.pose===`sit`?(G(`sit`),U({Idle_Sit:1})):G(`loco`);else return}if(t.scratch&&W!==`scratch`&&(G(`scratch`),H.Stretch.reset(),H.Stretch.setLoop(nt),H.Stretch.play(),H.Stretch.time=.4,U({Stretch:1})),W===`scratch`){if(t.scratch){H.Stretch.time>2.1&&(H.Stretch.time=.9);return}H.Stretch.setLoop(o),H.Stretch.clampWhenFinished=!0,G(`loco`)}let r=n?`stand`:t.pose||`stand`;switch(W){case`loco`:if(r===`sit`){G(`sitdown`),Io(`Sit_Down`),U({Sit_Down:1}),ys=null;return}if(r===`lie`||r===`sleep`){G(`liedown`),Io(`Lie_Down`),U({Lie_Down:1});return}break;case`sitdown`:if(r===`stand`){G(`standup`),Io(`Stand_Up`),U({Stand_Up:1});return}gs>xs(`Sit_Down`)&&(ys===`groom`?(ys=null,G(`groom`),H.Groom.time=0,U({Groom:1})):(G(`sit`),H.Idle_Sit.time=0,U({Idle_Sit:1})));return;case`sit`:case`groom`:if(r===`stand`){G(`standup`),Io(`Stand_Up`),U({Stand_Up:1});return}if(r===`lie`||r===`sleep`){ss=.35,G(`liedown`),Io(`Lie_Down`),H.Lie_Down.time=.5,gs=.5,U({Lie_Down:1});return}W===`groom`&&t.pose!==`sit`&&gs>xs(`Groom`)*2&&(G(`sit`),U({Idle_Sit:1}));return;case`standup`:if(gs>xs(`Stand_Up`)-.05)G(`loco`);else return;break;case`liedown`:if(r===`stand`){ss=.3,G(`loco`);break}gs>xs(`Lie_Down`)&&(G(r===`sleep`?`sleep`:`lie`),U(r===`sleep`?{Sleep:1}:{Idle_Lie:1}));return;case`lie`:case`sleep`:if(ss=.45,r===`stand`){G(`loco`);break}r===`sleep`&&W===`lie`&&gs>1.5&&(G(`sleep`),U({Sleep:1})),r===`lie`&&W===`sleep`&&(G(`lie`),U({Idle_Lie:1}));return;default:G(`loco`)}let i=Ss(t.speed,e);n?(_s=0,vs=null):_s+=e,!vs&&_s>7+Math.random()*6&&(vs=Math.random()<.55?`Look_Around`:`Tail_Swish`,H[vs].time=0,_s=0),vs&&(H[vs].time>xs(vs)-.2?vs=null:(i.Idle_Stand=0,i[vs]=1,ss=.4)),U(i)}function ws(){if(bs<=0||!V.arm_upper_R)return;let e=bs,t=k.smoothstep(e,0,.35)*(1-k.smoothstep(e,.55,.95)),n=k.smoothstep(e,.35,.55)*(1-k.smoothstep(e,.7,1));Xo(V.shoulder_R,0,-.42*t,0),V.shoulder_R.updateMatrixWorld(!0),Xo(V.arm_upper_R,.15*t,-1.5*t+.65*n,.1*t),V.arm_upper_R.updateMatrixWorld(!0),Xo(V.arm_lower_R,0,1*t-.7*n,0),V.arm_lower_R.updateMatrixWorld(!0),Xo(V.paw_front_R,0,.5*t-.3*n,0)}function Ts(e,t){wa.uTime.value+=e,Cs(e,t),Ro(e),co.update(e),No(e),Vo=!!t.look,t.look&&Bo.copy(t.look),is(e),B.updateMatrixWorld(),wa.uW2L.value.setFromMatrix4(fs.copy(B.matrixWorld).invert()),to.uDilate.value=.86+.14*(Do.pupils_dilate||0)-.55*Math.max(Do.eyes_happy||0,.6*(Do.blink_L||0)),wa.uKeyDirV.value.copy(ga.position).sub(ga.target.position).normalize().transformDirection(ha.matrixWorldInverse),eo()}var Es=.13,Ds=Es,Os={slow:.45,trot:.95,run:2.1},ks=Math.sqrt(8.4),As=Math.sqrt(28*1.65),js=.5,Ms=(e,t)=>Math.atan2(Math.sin(t-e),Math.cos(t-e)),Ns=class{constructor({world:e,catMat:t,spawn:n,ledges:r=[],bounds:i}){this.world=e,this.ledges=r,this.bounds=i,this.spawn=n,this.body=new we({mass:4,material:t,shape:new l(Ds),fixedRotation:!0,linearDamping:0,allowSleep:!1,collisionFilterGroup:Ni.CAT,collisionFilterMask:Ni.STATIC|Ni.PROP,position:new s(n.x,(n.y||0)+Ds+.01,n.z)}),e.addBody(this.body),this.yaw=n.yaw||0,this.grounded=!1,this.coyote=0,this.energy=100,this.charge=0,this.charging=!1,this.swipeT=0,this.swipeCd=0,this.swipeDone=!1,this.pose=`stand`,this.restT=0,this.scratching=!1,this.speed=0,this.turnRate=0,this.airT=0,this.launchT=0,this.feet=new M,this.drawnOff=new M,this._ray=new tt,this._from=new s,this._to=new s}get position(){return this.body.position}get forward(){return new M(Math.sin(this.yaw),0,Math.cos(this.yaw))}get sleeping(){return this.pose===`lie`&&this.restT>2.5}postStep(e){let t=!1;for(let e of this.world.contacts){let n;if(e.bi===this.body)n=-e.ni.y;else if(e.bj===this.body)n=e.ni.y;else continue;if(n>.5){t=!0;break}}this.launchT>0&&(this.launchT-=e,t=!1),this.grounded=t,this.airT=t?0:this.airT+e;let n=this.body.position,r=this.bounds;r&&(n.y<-.5||n.x<r.x0-.3||n.x>r.x1+.3||n.z<r.z0-.5||n.z>r.z1+.3||n.y>r.y1+.3)&&(n.set(this.spawn.x,.18,this.spawn.z),this.body.velocity.setZero())}update(e,t,n,r=!0){this.coyote=this.grounded?.12:Math.max(0,this.coyote-e);let i=this.body.velocity,a=new M(Math.sin(n),0,Math.cos(n)),o=new M(-Math.cos(n),0,Math.sin(n)),s=a.multiplyScalar(t.z).add(o.multiplyScalar(t.x));s.lengthSq()>1&&s.normalize();let c=s.lengthSq()>.01;(c||t.jumpHeld)&&(this.pose=`stand`),this.restT=this.pose===`lie`&&!c?this.restT+e:0;let l=c&&r;t.jumpHeld&&!this.charging&&this.coyote>0&&r&&!this.scratching&&(this.charging=!0,this.charge=0),this.charging&&(this.charge=Math.min(1,this.charge+e/js),t.jumpHeld||this.jump());let u=t.slow?Os.slow:t.run&&this.energy>1?Os.run:Os.trot;this.charging&&(u*=.2),this.scratching&&(u=0);let d=l?s.x*u:0,f=l?s.z*u:0;if(l&&this.grounded){let e=this.body.position,t=this.forward;if(this._from.set(e.x,e.y+.06,e.z),this._to.set(e.x+t.x*.3,e.y+.06,e.z+t.z*.3),this._ray.reset(),this.world.raycastClosest(this._from,this._to,{collisionFilterMask:Ni.STATIC,skipBackfaces:!0},this._ray),this._ray.hasHit&&this._ray.distance<.25){let e=this._ray.hitNormalWorld,t=d*e.x+f*e.z;t<0&&Math.abs(e.y)<.5&&(d-=t*e.x,f-=t*e.z)}}for(let e of this.ledges){let t=this.body.position;this.grounded&&t.x>e.x0&&t.x<e.x1&&Math.abs(t.y-Ds-e.y)<.05&&t.z<e.zEdge+.02&&t.z>e.zEdge-.035&&f>0&&s.z<.75&&(f=0)}if(this.grounded){let t=1-Math.exp(-12*e);i.x+=(d-i.x)*t,i.z+=(f-i.z)*t}else if(l){let t=1-Math.exp(-2.2*e);i.x+=(d-i.x)*t,i.z+=(f-i.z)*t}let p=this.yaw;if(l&&!this.scratching){let t=Ms(this.yaw,Math.atan2(s.x,s.z)),n=(this.grounded?8:3)*e;this.yaw+=Math.max(-n,Math.min(n,t))}this.turnRate=Ms(p,this.yaw)/Math.max(e,1e-4),this.speed=Math.hypot(i.x,i.z),t.run&&l&&this.grounded&&this.speed>1.4?this.energy-=7*e:this.energy+=(this.pose===`lie`?this.sleeping?16:8:this.pose===`sit`?5:2.5)*e,this.energy=Math.max(0,Math.min(100,this.energy)),this.swipeCd=Math.max(0,this.swipeCd-e),this.swipeT>0&&(this.swipeT+=e/.36,this.swipeT>=1&&(this.swipeT=0))}jump(){let e=this.charge;if(this.charging=!1,this.charge=0,this.coyote<=0)return!1;let t=2+6*e,n=this.energy>=t?e:e*.45;this.energy=Math.max(0,this.energy-t);let r=this.body.velocity;if(r.y=ks+(As-ks)*n,n>.15){let e=this.forward,t=r.x*e.x+r.z*e.z,i=Math.max(t,.45+1.3*n);r.x=e.x*i,r.z=e.z*i}return this.coyote=0,this.grounded=!1,this.launchT=.12,!0}startSwipe(){return this.swipeCd>0||this.pose===`lie`?!1:(this.swipeT=1e-4,this.swipeCd=.45,this.swipeDone=!1,!0)}pawTargets(e){let t=this.body.position,n=this.forward,r=this.drawnOff,i=t.x+r.x+n.x*.24,a=t.y-Ds+.1,o=t.z+r.z+n.z*.24,s=[];for(let t of e){if(t.broken)continue;let e=t.body.position,n=e.y-a;if(n<-.2-t.halfHeight||n>.3+t.halfHeight)continue;let r=Math.hypot(e.x-i,e.z-o);r>.17+t.radius||s.push([r,t])}return s.sort((e,t)=>e[0]-t[0]).slice(0,3).map(e=>e[1])}swat(e,t=null){let n=this.forward,r=(Math.random()-.5)*.5,i=new s(n.x-n.z*r,0,n.z+n.x*r);t&&(i.x+=t[0]*1.1,i.z+=t[1]*1.1),i.normalize(),i.y=.3,i.normalize();let a=e.body.mass,o=Math.min(2.6,Math.max(1.25,.75/Math.sqrt(a)));e.body.wakeUp(),e.body.applyImpulse(i.scale(o*a),new s(0,e.halfHeight*.4,0))}feetPosition(){let e=this.body.position;return this.feet.set(e.x,e.y-Ds,e.z)}},Ps=new M,Fs=[[`chest`,.068],[`hips`,.064],[`head`,.05],[`arm_lower_L`,.022],[`arm_lower_R`,.022],[`shin_L`,.024],[`shin_R`,.024],[`toe_front_L`,.022],[`toe_front_R`,.022],[`toe_hind_L`,.022],[`toe_hind_R`,.022]],Is=class{update(e,t,n){for(let[r,i]of Fs){let a=e[r];if(a){a.getWorldPosition(Ps);for(let e of t){if(e.broken||!e.group.parent)continue;let t=e.body,r=t.position;if(Math.abs(r.y-Ps.y)>i+e.halfHeight)continue;let a=r.x-Ps.x,o=r.z-Ps.z,s=Math.hypot(a,o),c=i+e.radius;if(s>=c||s<1e-5)continue;let l=a/s,u=o/s,d=n.position.x-r.x,f=n.position.z-r.z,p=Math.hypot(d,f)||1,m=(l*d+u*f)/p;if(m>0){l-=m*d/p,u-=m*f/p;let e=Math.hypot(l,u);if(e<.2)continue;l/=e,u/=e}let h=Math.min(.7,(c-s)*9),g=t.velocity.x*l+t.velocity.z*u;g<h&&(t.velocity.x+=l*(h-g),t.velocity.z+=u*(h-g),t.wakeUp())}}}}},Ls=class{constructor(e,t){this.camera=e,this.world=t,this._hit=new tt,this._from=new s,this._to=new s,this.yaw=Math.PI*.9,this.pitch=.3,this.curPitch=.3,this.dist=1.05,this.curDist=1.05,this.target=new M,this.dir=new M,this.initialized=!1,this.idleT=9}rotate(e,t){this.idleT=0,this.yaw-=e*.003,this.pitch=Math.max(-.35,Math.min(1.3,this.pitch+t*.0024))}zoom(e){this.dist=Math.max(.45,Math.min(2.6,this.dist*Math.exp(e*.0011)))}free(e,t,n=this.yaw){let r=Math.cos(e);t.set(-Math.sin(n)*r,Math.sin(e),-Math.cos(n)*r).normalize();let i=this.target,a=this.dist+.25;return this._from.set(i.x,i.y,i.z),this._to.set(i.x+t.x*a,i.y+t.y*a,i.z+t.z*a),this._hit.reset(),this.world.raycastClosest(this._from,this._to,{collisionFilterMask:Ni.STATIC,skipBackfaces:!0},this._hit),this._hit.hasHit?Math.max(.16,this._hit.distance-.14):this.dist}update(e,t,{orbit:n=0}={}){n&&(this.yaw+=e*n),this.initialized||=(this.target.copy(t),!0),this.target.lerp(t,1-Math.exp(-10*e));let r=this.pitch,i=-1;for(let e of[0,.35,.7]){let t=Math.min(1.35,this.pitch+e),n=this.free(t,this.dir);if(n>=this.dist*.8){r=t;break}n>i+.1&&(i=n,r=t)}if(this.idleT+=e,i>=0&&i<this.dist*.5&&this.idleT>.5){let t=0,n=i+.2;for(let e of[.6,-.6,1.2,-1.2,1.9,-1.9]){let r=this.free(Math.min(1.2,this.pitch+.2),this.dir,this.yaw+e);if(r>n&&(n=r,t=e,r>=this.dist*.8))break}t&&(this.yaw+=Math.sign(t)*Math.min(Math.abs(t),1.8*e))}this.curPitch+=(r-this.curPitch)*(1-Math.exp(-5*e));let a=this.free(this.curPitch,this.dir);this.curDist+=(a-this.curDist)*(1-Math.exp(-(a<this.curDist?30:4)*e)),this.camera.position.copy(this.target).addScaledVector(this.dir,this.curDist),this.camera.position.y<.06&&(this.camera.position.y=.06),this.camera.lookAt(this.target)}},Rs=640,zs=.08,Bs=.14,Vs=.035,Hs=.2,Us=.014,Ws=L.win.frameZ1,Gs=.3,Ks=[[0,0],[0,-.05],[0,.05],[-.05,0],[.05,0],[0,-.09],[0,.09],[-.09,0],[.09,0]],qs=new M,Js=new M,Ys=class{constructor(e){this.cat=e,this.body=e.body;let t=this.body.geometry.attributes.position.count,n=Math.max(1,Math.floor(t/Rs));this.idx=[];for(let e=0;e<t&&this.idx.length<Rs;e+=n)this.idx.push(e);this.pts=new Float32Array(this.idx.length*3),this.off=new M,this.pitch=0,this.target=new M,this.targetPitch=0,this.info={gap:0,shift:0,pitch:0,on:``}}update(e,t,n,r){let i=this.cat.group,a=this.target;a.set(0,0,0),this.targetPitch=0,r&&this._measure(t,n);let o=1-Math.exp(-e*(r?12:20));this.off.lerp(a,o),this.pitch+=(this.targetPitch-this.pitch)*o,i.position.add(this.off),i.rotation.order=`YXZ`,i.rotation.x=this.pitch,i.updateMatrixWorld(!0)}_measure(e,t){let n=this.cat.group,r=this.body,i=this.pts,a=this.target;n.rotation.order=`YXZ`,n.rotation.x=0,n.updateMatrixWorld(!0);let o=1/0;for(let e=0;e<this.idx.length;e++)r.getVertexPosition(this.idx[e],qs),qs.applyMatrix4(r.matrixWorld),i[e*3]=qs.x,i[e*3+1]=qs.y,i[e*3+2]=qs.z,qs.y<o&&(o=qs.y);let s=null,c=``;for(let[t,n]of Ks){let r=aa(e.x+t,e.z+n,e.y+.04,!1);if(!(!r.rect||e.y-r.h>.03)){s=r.rect.slice(),c=s[0],c===`sill`&&(s[6]=Math.min(s[6],na));break}}if(!s){this.info.on=`none`;return}this.info.on=c;let l=o+Us*2.5,u=1/0,d=-1/0,f=1/0,p=-1/0,m=0;for(let e=0;e<this.idx.length;e++){if(i[e*3+1]>l)continue;let t=i[e*3],n=i[e*3+2];t<u&&(u=t),t>d&&(d=t),n<f&&(f=n),n>p&&(p=n),m++}let h=0,g=0;if(m&&c!==`floor`&&c!==`rug`){let e=.012,t=s[1]+e,n=s[4]-e,r=s[6]-e,i=c===`sill`?Math.max(s[3],Ws)+e:s[3]+e,a=(e,t,n,r)=>r-n>t-e||t-e<Gs?(e+t)/2-(n+r)/2:n<e?e-n:r>t?t-r:0,o=Math.min(n-t,r-i)<Gs?Bs:zs;h=k.clamp(a(t,n,u,d),-o,o),g=k.clamp(a(i,r,f,p),-o,o)}Js.set(Math.sin(t),0,Math.cos(t));let _=1/0,v=1/0,y=1/0,b=0,x=0;for(let t=0;t<this.idx.length;t++){let n=i[t*3+1];if(n>l)continue;let r=i[t*3]+h,a=i[t*3+2]+g,o=aa(r,a,n+.05,!0).h;if(!(o>-1e9)||n-o>.12)continue;let s=n-o,c=(r-e.x-h)*Js.x+(a-e.z-g)*Js.z;s<_&&(_=s),c>.04&&s<v&&(v=s,b=c),c<-.04&&s<y&&(y=s,x=c)}if(!(_<1e9))return;let S=0,C=-_;v<1e9&&y<1e9&&b-x>.08&&(S=k.clamp((v-y)/(b-x),-.2,Hs),C=-Math.min(v-b*S,y-x*S)),a.set(h,k.clamp(C,-.07,Vs),g),this.targetPitch=S,this.info.gap=+_.toFixed(3),this.info.shift=+Math.hypot(h,g).toFixed(3),this.info.pitch=+S.toFixed(3)}},Xs={head:{bone:`head`,label:`头`,dist:.34,up:0,around:[Math.PI-.5,Math.PI+.5],pitch:.1},body:{bone:`spine_02`,label:`身体`,dist:.5,up:.02,around:[Math.PI/2-.25,-Math.PI/2+.25],pitch:.45},tail:{bone:`tail_03`,label:`尾巴`,dist:.42,up:0,around:[.75,-.75],pitch:.35},paw:{bone:`toe_front_L`,label:`爪子`,dist:.26,up:.03,around:[Math.PI-.7,Math.PI+.7],pitch:.18}},Zs=.11,Qs=1.4,$s=[[`chest`,`hips`,.072,`body`],[`hips`,`tail_01`,.06,`body`],[`neck_01`,`head`,.055,`head`],[`head`,null,.058,`head`],[`arm_upper_L`,`arm_lower_L`,.03,`paw`],[`arm_lower_L`,`toe_front_L`,.022,`paw`],[`arm_upper_R`,`arm_lower_R`,.03,`paw`],[`arm_lower_R`,`toe_front_R`,.022,`paw`],[`thigh_L`,`shin_L`,.04,`body`],[`shin_L`,`toe_hind_L`,.024,`paw`],[`thigh_R`,`shin_R`,.04,`body`],[`shin_R`,`toe_hind_R`,.024,`paw`],[`tail_01`,`tail_04`,.03,`tail`],[`tail_04`,`tail_07`,.026,`tail`]],ec=new M,tc=new M,nc=new M,rc=new M,ic=new M;function ac(e,t,n,r,i){nc.subVectors(r,n),rc.subVectors(e,n);let a=nc.dot(nc),o=nc.dot(t),s=nc.dot(rc),c=t.dot(rc),l=rc.dot(rc),u=a-o*o,d=a*c-s*o,f=a*l-s*s-i*i*a,p=d*d-u*f;if(p>=0&&u>1e-12){let c=(-d-Math.sqrt(p))/u,l=s+c*o;if(l>0&&l<a&&c>0)return c;rc.copy(e).sub(l<=0?n:r);let f=t.dot(rc),m=rc.dot(rc)-i*i,h=f*f-m;if(h>0){let e=-f-Math.sqrt(h);if(e>0)return e}}return-1}function oc(e,t){let n=null;for(let[r,i,a,o]of $s){let s=t[r];if(!s)continue;s.getWorldPosition(ec);let c;if(i){if(!t[i])continue;t[i].getWorldPosition(tc),c=ac(e.origin,e.direction,ec,tc,a)}else{rc.subVectors(e.origin,ec);let t=e.direction.dot(rc),n=rc.dot(rc)-a*a,r=t*t-n;c=r>0?-t-Math.sqrt(r):-1,tc.copy(ec)}if(c>0&&(!n||c<n.t)){let t=e.origin.clone().addScaledVector(e.direction,c);nc.subVectors(tc,ec);let r=nc.lengthSq(),i=r>0?k.clamp(rc.subVectors(t,ec).dot(nc)/r,0,1):0,a=t.clone().sub(ec.clone().addScaledVector(nc,i)).normalize();n={t:c,point:t,normal:a,part:o}}}return n}var sc=class{constructor(e,t,n=()=>0){this.camera=e,this.world=t,this.yawOf=n,this.yaw=0,this.pitch=.2,this.dist=.4,this.cYaw=0,this.cPitch=.2,this.cDist=.6,this.target=new M,this.part=`head`,this._dir=new M,this._hit=new tt,this._from=new s,this._to=new s}enter(e,t,n=`head`){this.cYaw=this.yaw=e.yaw,this.cPitch=this.pitch=Math.min(.9,e.curPitch),this.cDist=e.curDist,this.target.copy(t),this.look(n)}look(e){let t=Xs[e];this.part=e,this.dist=t.dist;let n=this.yawOf(),r=Math.PI*2,i=this.yaw,a=1/0;for(let e of t.around){let t=n+e;t+=r*Math.round((this.cYaw-t)/r),Math.abs(t-this.cYaw)<a&&(a=Math.abs(t-this.cYaw),i=t)}this.yaw=i,this.pitch=t.pitch}rotate(e,t){this.yaw-=e*.0045,this.pitch=k.clamp(this.pitch+t*.0035,-.75,1.4)}zoom(e){this.dist=k.clamp(this.dist*Math.exp(e*.0012),Zs,Qs)}update(e,t){let n=1-Math.exp(-e*7);this.target.lerp(t,1-Math.exp(-e*9)),this.cYaw+=(this.yaw-this.cYaw)*n,this.cPitch+=(this.pitch-this.cPitch)*n,this.cDist+=(this.dist-this.cDist)*n;let r=Math.cos(this.cPitch),i=this._dir.set(-Math.sin(this.cYaw)*r,Math.sin(this.cPitch),-Math.cos(this.cYaw)*r),a=this.target,o=this.cDist+.06;this._from.set(a.x,a.y,a.z),this._to.set(a.x+i.x*o,a.y+i.y*o,a.z+i.z*o),this._hit.reset(),this.world.raycastClosest(this._from,this._to,{collisionFilterMask:Ni.STATIC,skipBackfaces:!0},this._hit);let s=this._hit.hasHit?Math.max(.06,Math.min(this.cDist,this._hit.distance-.05)):this.cDist;this.camera.position.copy(a).addScaledVector(i,s),this.camera.position.y<.03&&(this.camera.position.y=.03),this.camera.lookAt(a)}},cc=class{constructor(e){this.U=e,this.slot=0,this.last=null,this.lastT=0,this.lastStroke=-9,this.level=0,this.active=!1,this.part=null}move(e,t){if(!e)return this.last=null,!1;this.part=e.part;let n=e.point;if(!this.last)return this.last=n.clone(),this.lastT=t,!1;let r=ic.subVectors(n,this.last),i=r.length();if(i<.006)return!1;if(r.addScaledVector(e.normal,-r.dot(e.normal)),r.lengthSq()<1e-8)return this.last.copy(n),!1;r.normalize();let a=i/Math.max(.001,t-this.lastT),o=k.clamp(.55+a*.9,.6,1.5),s=this.slot;return this.slot=(this.slot+1)%6,this.U.uStTouch.value[s].set(n.x-e.normal.x*.008,n.y-e.normal.y*.008,n.z-e.normal.z*.008,.04),this.U.uStTouchDir.value[s].set(r.x,r.y,r.z,o),this.U.uStTouchOn.value=1,this.last.copy(n),this.lastT=t,this.lastStroke=t,!0}release(){this.last=null}update(e,t){let n=0,r=Math.exp(-e*2.2);for(let e of this.U.uStTouchDir.value)e.w*=r,e.w<.02&&(e.w=0),n=Math.max(n,e.w);this.U.uStTouchOn.value=+(n>0),this.active=t-this.lastStroke<.4,this.level+=(+!!this.active-this.level)*(1-Math.exp(-e*(this.active?2:.7)))}},lc=[{id:`sill`,text:`跳上窗台`},{id:`watch`,text:`在窗台上看窗外`,goal:5,unit:`秒`},{id:`mug`,text:`把书桌上的马克杯拍下去`},{id:`clock`,text:`把闹钟拍下床头柜`},{id:`plant`,text:`把窗台上的绿萝推下去`},{id:`break`,text:`打碎 3 件东西`,goal:3},{id:`scratch`,text:`在地毯上磨爪`,goal:3,unit:`秒`},{id:`bednap`,text:`在床上睡一觉`,goal:5,unit:`秒`},{id:`sunbathe`,text:`趴在阳光里晒太阳`,goal:6,unit:`秒`},{id:`wardrobe`,text:`爬上衣柜顶`},{id:`pet`,text:`近看 Maimai，摸摸她`,goal:3,unit:`秒`},{id:`chaos`,text:`捣蛋值达到 500`,goal:500}],uc=class{constructor({onChange:e,onToast:t,onComplete:n}){this.score=0,this.combo=0,this.comboT=0,this.progress=Object.fromEntries(lc.map(e=>[e.id,0])),this.done=new Set,this.onChange=e,this.onToast=t,this.onComplete=n,this.allDone=!1}get multiplier(){return Math.min(3,1+.5*Math.max(0,this.combo-1))}mischief(e,t){this.combo=this.comboT>0?this.combo+1:1,this.comboT=3.5;let n=Math.round(e*this.multiplier);this.score+=n,this.onToast(`${t} +${n}`),this.advance(`chaos`,0,this.score),this.onChange()}advance(e,t=1,n){if(this.done.has(e))return;let r=lc.find(t=>t.id===e);r&&(this.progress[e]=n??this.progress[e]+t,this.progress[e]>=(r.goal??1)&&(this.progress[e]=r.goal??1,this.done.add(e),this.score+=50,this.onToast(`✔ ${r.text}  +50`,!0),e!==`chaos`&&this.advance(`chaos`,0,this.score),this.done.size===lc.length&&!this.allDone&&(this.allDone=!0,this.onComplete())),this.onChange())}update(e){this.comboT>0&&(this.comboT-=e,this.comboT<=0&&(this.combo=0,this.onChange()))}},K=e=>document.getElementById(e),dc=class{constructor(e){this.h=e,this.missionEls=new Map;let t=K(`missions`);for(let e of lc){let n=document.createElement(`li`);n.innerHTML=`<span class="check">○</span><span class="text"></span><span class="progress"></span>`,n.querySelector(`.text`).textContent=e.text,t.appendChild(n),this.missionEls.set(e.id,n)}K(`btn-play`).addEventListener(`click`,()=>e.onPlay()),K(`btn-help`).addEventListener(`click`,()=>e.onPause()),K(`btn-mute`).addEventListener(`click`,()=>this.setMuted(e.onMuteToggle())),K(`btn-quality`).addEventListener(`click`,()=>e.onQuality());for(let t of[`btn-close`,`btn-close-start`,`btn-close-exit`]){let n=K(t);n&&n.addEventListener(`click`,()=>e.onClose())}for(let t of document.querySelectorAll(`#close-panel [data-part]`))t.addEventListener(`click`,()=>e.onPart(t.dataset.part));this.floaters=[],this._v=new M}loading(e,t){K(`load-msg`).textContent=e,K(`load-bar`).style.width=`${Math.round(t*100)}%`}loadingDone(){let e=K(`loading`);e.style.opacity=0,setTimeout(()=>e.remove(),950)}loadingFailed(e){K(`load-msg`).textContent=e,K(`load-bar`).parentElement.style.display=`none`}showStart(e,t=!1){K(`start`).classList.toggle(`hidden`,!e),K(`btn-play`).textContent=t?`继续`:`开始`}gpuNote(e){let t=K(`gpu-note`);t.innerHTML=e,t.classList.remove(`hidden`)}showHUD(e){K(`hud`).classList.toggle(`hidden`,!e)}setScore(e,t,n){K(`score`).textContent=e,K(`combo`).textContent=t>1?`连击 ×${n.toFixed(1)}`:``}setEnergy(e){let t=`${Math.round(e)}%`;t!==this._energy&&(this._energy=t,K(`energy`).style.width=t)}setCharge(e){let t=`${Math.round(e*100)}%`;t!==this._charge&&(this._charge=t,K(`charge`).style.width=t,K(`charge`).parentElement.classList.toggle(`active`,e>0))}showClose(e,t){document.body.classList.toggle(`close`,e),K(`close-panel`).classList.toggle(`hidden`,!e),K(`btn-close`).textContent=e?`返回游戏 (V)`:`近看 Maimai (V)`;for(let e of document.querySelectorAll(`#close-panel [data-part]`))e.classList.toggle(`on`,e.dataset.part===t)}setMuted(e){K(`btn-mute`).textContent=e?`声音：关`:`声音：开`}setQuality(e){K(`btn-quality`).textContent=`画质：${e}`}hint(e){if(e===this._hint)return;this._hint=e;let t=K(`hint`);e&&(t.textContent=e),t.classList.toggle(`show`,!!e)}toast(e,t=!1){let n=document.createElement(`div`);n.className=`toast${t?` big`:``}`,n.textContent=e;let r=K(`toasts`);for(r.appendChild(n);r.children.length>4;)r.firstChild.remove();setTimeout(()=>n.remove(),3e3)}renderMissions(e){for(let t of lc){let n=this.missionEls.get(t.id),r=e.done.has(t.id);n.classList.toggle(`done`,r),n.querySelector(`.check`).textContent=r?`✓`:`○`;let i=e.progress[t.id],a=``;!r&&t.goal&&t.id!==`chaos`&&(a=t.unit?`${i.toFixed(1)} / ${t.goal} ${t.unit}`:`${i} / ${t.goal}`),n.querySelector(`.progress`).textContent=a}K(`mission-count`).textContent=`${e.done.size} / ${lc.length}`}float(e,t,{color:n=`#ffffff`,life:r=1.5,rise:i=.25,size:a=20}={}){let o=document.createElement(`div`);o.className=`floater`,o.textContent=e,o.style.color=n,o.style.fontSize=`${a}px`,K(`floaters`).appendChild(o),this.floaters.push({el:o,pos:t.clone(),life:r,max:r,rise:i})}updateFloaters(e,t){let n=window.innerWidth,r=window.innerHeight;for(let i=this.floaters.length-1;i>=0;i--){let a=this.floaters[i];if(a.life-=e,a.life<=0){a.el.remove(),this.floaters.splice(i,1);continue}a.pos.y+=a.rise/a.max*e;let o=this._v.copy(a.pos).project(t),s=1-a.life/a.max,c=o.z<1&&o.z>-1;a.el.style.opacity=c?Math.min(1,a.life*3)*Math.min(1,s*8):0,a.el.style.transform=`translate(${((o.x*.5+.5)*n).toFixed(1)}px, ${((-o.y*.5+.5)*r).toFixed(1)}px) translate(-50%, -50%)`}}},fc=new URLSearchParams(location.search),pc=`./`,mc=document.getElementById(`c`),hc=new b({canvas:mc,antialias:!1,powerPreference:`high-performance`,alpha:!1});hc.setPixelRatio(1),hc.info.autoReset=!1,ui(hc);var gc=hc.getContext(),_c=gc.getExtension(`WEBGL_debug_renderer_info`),vc=_c?String(gc.getParameter(_c.UNMASKED_RENDERER_WEBGL)):``,yc=/Intel|UHD|Iris|SwiftShader|llvmpipe|Microsoft Basic/i.test(vc)&&!/Arc/i.test(vc);console.log(`[gpu] `+vc);var bc=new te(56,window.innerWidth/window.innerHeight,.03,400),xc=`loading`,Sc=null,q=null,Cc=null,J=null,Y=null,wc=null,Tc=[],Ec=null,Dc=null,Oc=null,kc=null,Ac=null,jc=null,Mc=0,Nc=``,Pc=null,Fc=0,Ic=null,Lc=0,Rc=null,X=!1,zc=null,Bc=null,Vc=1;try{let e=parseFloat(localStorage.getItem(`maimai.brightness`));e>=.6&&e<=2&&(Vc=e)}catch{}var Z=new dc({onPlay:()=>rl(),onClose:()=>{xc===`playing`?X?ul():ll(`head`):(rl(),ll(`head`))},onPart:e=>{X&&(zc.look(e),Z.showClose(!0,e))},onPause:()=>il(),onMuteToggle:()=>tl(!Oe()),onQuality:()=>{$=Hc[(Hc.indexOf($)+1)%Hc.length],Uc=!0;try{localStorage.setItem(`maimai.quality`,$.id)}catch{}Xc()}}),Q=new uc({onChange:()=>{Z.setScore(Q.score,Q.combo,Q.multiplier),Z.renderMissions(Q)},onToast:(e,t)=>{Z.toast(e,t),t&&Ye()},onComplete:()=>{Z.toast(`今天想做的事都做完了。Maimai 很满意。`,!0)}}),Hc=[{id:`high`,label:`高`,density:1,msaa:4,min:.6,max:1.5},{id:`mid`,label:`中`,density:.7,msaa:4,min:.5,max:1.1},{id:`low`,label:`低`,density:.4,msaa:0,min:.4,max:.7}],$=Hc[yc?2:0],Uc=!1;try{let e=localStorage.getItem(`maimai.quality`),t=Hc.find(t=>t.id===(fc.get(`q`)||e));t&&($=t,Uc=!0)}catch{}var Wc=1,Gc=0,Kc=0,qc=0,Jc=60;function Yc(){let e=Math.min(window.devicePixelRatio||1,2);Wc=Math.max($.min,Math.min(Math.min($.max,e),Wc));let t=Math.max(320,Math.round(window.innerWidth*Wc)),n=Math.max(180,Math.round(window.innerHeight*Wc));hc.setSize(t,n,!1),bc.aspect=t/n,bc.updateProjectionMatrix(),q&&q.pipe.setSize(t,n,{msaa:$.msaa})}function Xc(){Z.setQuality($.label),J&&J.setDensity($.density),Wc=Math.min(Wc,$.max),Yc()}function Zc(e){if(Kc+=e,qc++,Kc<1)return;let t=Kc/qc*1e3;Jc=1e3/t,Kc=0,qc=0;let n=performance.now();n-Gc<1500||(t>21&&Wc>$.min?(Wc=Math.max($.min,Wc*.88),Gc=n,Yc()):t<12&&Wc<$.max?(Wc=Math.min($.max,Wc*1.08),Gc=n,Yc()):t>40&&Wc<=$.min&&!Uc&&$!==Hc[2]&&xc===`playing`&&($=Hc[Hc.indexOf($)+1],Gc=n,Xc(),Z.toast(`画面有点卡，画质调到了「${$.label}」（右下角可以改回来）`)))}window.addEventListener(`resize`,Yc);var Qc=null,$c=null;function el(){Qc||(Qc=new Audio(`${pc}bedroom/audio/ambience.m4a`),$c=new Audio(`${pc}bedroom/audio/music.m4a`),Qc.loop=!0,$c.loop=!0,Qc.volume=.8,$c.volume=.32,Qc.muted=$c.muted=Oe(),Qc.play().catch(()=>{}),$c.play().catch(()=>{}))}function tl(e){return ve(e),Qc&&(Qc.muted=$c.muted=e),Z.setMuted(e),e}function nl(){try{let e=mc.requestPointerLock?.();e&&e.catch&&e.catch(()=>{})}catch{}}function rl(){xc!==`loading`&&(Ue(),el(),xc=`playing`,Z.showStart(!1),Z.showHUD(!0),nl())}function il(){xc===`playing`&&(xc=`menu`,vl.clear(),Z.showStart(!0,!0),document.pointerLockElement&&document.exitPointerLock())}document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement||xc!==`playing`||X||fc.has(`nolock`)||il()});var al=new _,ol=new N,sl=new M;function cl(e){let t=Xs[e],n=J.bones[t.bone];return n?n.getWorldPosition(sl).setY(sl.y+t.up):sl.copy(J.group.position).setY(J.group.position.y+.2)}function ll(e=`head`){xc!==`playing`||X||(X=!0,vl.clear(),yl=!1,document.pointerLockElement&&document.exitPointerLock(),zc.enter(wc,cl(e),e),bc.near=.01,bc.updateProjectionMatrix(),J.setDensity(Math.max($.density,.85)),Z.showClose(!0,e))}function ul(){X&&(X=!1,pl=!1,ml=!1,fl.clear(),Bc.release(),wc.yaw=zc.cYaw,bc.near=.03,bc.updateProjectionMatrix(),J.setDensity($.density),mc.style.cursor=``,Z.showClose(!1))}function dl(e,t){return ol.set(e/window.innerWidth*2-1,-(t/window.innerHeight)*2+1),al.setFromCamera(ol,bc),oc(al.ray,J.bones)}var fl=new Map,pl=!1,ml=!1,hl=0,gl=0;mc.addEventListener(`pointerdown`,e=>{if(!X)return;e.preventDefault();try{mc.setPointerCapture(e.pointerId)}catch{}if(fl.set(e.pointerId,{x:e.clientX,y:e.clientY}),fl.size===2){pl=!1,ml=!1,Bc.release();let[e,t]=[...fl.values()];hl=Math.hypot(e.x-t.x,e.y-t.y);return}Ue();let t=e.button===0?dl(e.clientX,e.clientY):null;t?(ml=!0,Bc.release(),Bc.move(t,Lc),mc.style.cursor=`grabbing`):pl=!0}),mc.addEventListener(`pointermove`,e=>{if(!X)return;let t=fl.get(e.pointerId);if(t&&fl.size===2){t.x=e.clientX,t.y=e.clientY;let[n,r]=[...fl.values()],i=Math.hypot(n.x-r.x,n.y-r.y);hl>0&&zc.zoom((hl-i)*4),hl=i}else{if(t){let n=e.clientX-t.x,r=e.clientY-t.y;t.x=e.clientX,t.y=e.clientY,pl&&zc.rotate(n,r)}ml?Bc.move(dl(e.clientX,e.clientY),Lc):!pl&&e.pointerType===`mouse`&&performance.now()-gl>60&&(gl=performance.now(),mc.style.cursor=dl(e.clientX,e.clientY)?`grab`:``)}});var _l=e=>{fl.delete(e.pointerId),fl.size<2&&(hl=0),fl.size||(pl=!1,ml&&(ml=!1,Bc.release(),mc.style.cursor=`grab`))};mc.addEventListener(`pointerup`,_l),mc.addEventListener(`pointercancel`,_l),mc.addEventListener(`dblclick`,e=>{if(!X)return;let t=dl(e.clientX,e.clientY);t&&(zc.look(t.part),Z.showClose(!0,t.part))});var vl=new Set,yl=!1,bl=null,xl={Digit1:`head`,Digit2:`body`,Digit3:`tail`,Digit4:`paw`};window.addEventListener(`keydown`,e=>{if(xc===`menu`&&(e.code===`Enter`||e.code===`Space`))e.preventDefault(),rl();else if(xc===`playing`){if((e.code===`Space`||e.code.startsWith(`Arrow`)||e.code===`Tab`)&&e.preventDefault(),X){if(e.code===`KeyV`||e.code===`Escape`){e.repeat||ul();return}if(xl[e.code]){zc.look(xl[e.code]),Z.showClose(!0,xl[e.code]);return}if(/^(Key[WASD]|Arrow|Space)/.test(e.code))ul();else if(![`KeyQ`,`KeyP`,`KeyM`,`BracketLeft`,`BracketRight`,`KeyX`,`KeyZ`,`KeyG`,`KeyR`].includes(e.code))return}else if(e.code===`KeyV`&&!e.repeat){ll(`head`);return}if(vl.add(e.code),!e.repeat)switch(e.code){case`KeyQ`:Ml();break;case`KeyF`:Nl();break;case`KeyZ`:Pl(`lie`);break;case`KeyX`:Pl(`sit`);break;case`KeyG`:Y.grounded&&Y.speed<.2&&(Y.pose=`sit`,bl=`groom`);break;case`KeyR`:Y.grounded&&Y.speed<.2&&Y.pose!==`lie`&&(bl=`stretch`);break;case`KeyP`:document.body.classList.toggle(`photo`);break;case`BracketLeft`:case`BracketRight`:Vc=Math.max(.6,Math.min(2,Math.round((Vc+(e.code===`BracketRight`?.1:-.1))*10)/10));try{localStorage.setItem(`maimai.brightness`,String(Vc))}catch{}Z.toast(`亮度 ${Math.round(Vc*100)}%`);break;case`KeyM`:tl(!Oe());break;case`KeyH`:case`Escape`:il()}}}),window.addEventListener(`keyup`,e=>vl.delete(e.code)),window.addEventListener(`blur`,()=>vl.clear()),mc.addEventListener(`mousedown`,e=>{xc!==`playing`||X||(Ue(),document.pointerLockElement===mc?e.button===0&&Nl():(yl=!0,nl()))}),window.addEventListener(`mouseup`,()=>{yl=!1}),window.addEventListener(`mousemove`,e=>{xc===`playing`&&wc&&!X&&(document.pointerLockElement===mc||yl)&&wc.rotate(e.movementX,e.movementY)}),mc.addEventListener(`wheel`,e=>{e.preventDefault(),X?zc.zoom(e.deltaY):wc&&wc.zoom(e.deltaY)},{passive:!1}),mc.addEventListener(`contextmenu`,e=>e.preventDefault());var Sl=(...e)=>e.some(e=>vl.has(e));function Cl(){return{x:+!!Sl(`KeyD`,`ArrowRight`)-!!Sl(`KeyA`,`ArrowLeft`),z:+!!Sl(`KeyW`,`ArrowUp`)-!!Sl(`KeyS`,`ArrowDown`),run:Sl(`ShiftLeft`,`ShiftRight`),slow:Sl(`KeyC`),jumpHeld:Sl(`Space`)}}var wl={x:0,z:0,run:!1,slow:!1,jumpHeld:!1},Tl=new M,El=new M,Dl=new M,Ol=null,kl=0,Al=0,jl=0;function Ml(){bl=`meow`,ge(1.18),Z.float(`喵~`,J.headWorldPosition(Tl).add(new M(0,.12,0)),{color:`#ffd9a8`})}function Nl(){Y.startSwipe()&&be()}function Pl(e){!Y.grounded||Y.speed>.3||(Y.pose=Y.pose===e?`stand`:e)}var Fl={ceramic:`clink`,glass:`clink`,metal:`clink`,plastic:`thud`,paper:`thud`,wood:`thud`,soft:null};function Il(){if(!(Y.swipeT<.42||Y.swipeDone)){Y.swipeDone=!0;for(let e of Y.pawTargets(Tc)){let t=e.body.position;Y.swat(e,Qi(t.x,t.y-e.halfHeight,t.z)),Fl[e.made]===`clink`?Le(.5):Fl[e.made]&&Se(.2),e.toy&&Lc-(e.playT||-9)>2.5&&(e.playT=Lc,Q.mischief(4,`玩${e.name}`))}}}var Ll=3,Rl=new Set;function zl(){for(let e of Tc)e.body.addEventListener(`collide`,t=>{if(e.broken||t.body===Y.body)return;let n=Math.abs(t.contact.getImpactVelocityAlongNormal());e.fragile&&n>Ll?Rl.add(e):n>.9&&Lc-e.lastSoundT>.12&&(e.lastSoundT=Lc,Fl[e.made]===`clink`?Le(Math.min(1,n/3)):Fl[e.made]&&Se(Math.min(1,n/4*Math.sqrt(e.body.mass+.05))))})}function Bl(e){for(let t of Tc)t.broken||((t.body.sleepState!==we.SLEEPING||!t.moved||t.giDyn.value<1)&&t.sync(e),t.moved&&!t.footprintGone&&kc&&kc.release(t),!t.knocked&&t.homeBase>.25&&t.body.position.y-t.halfHeight<t.homeBase-.2&&(t.knocked=!0,Q.mischief(10,`${t.name}掉下去了`),t.id===`deskMug`&&Q.advance(`mug`),t.id===`alarmClock`&&Q.advance(`clock`),t.id===`sillPlant`&&Q.advance(`plant`)));for(let e of Rl)if(!e.broken){if(e.broken=!0,Ec.burst(e),e.def.plant&&Sc){let t=e.body,n=t.velocity.x,r=Math.max(.2,Math.abs(t.velocity.z));Mi(e.soft,q.scene,Sc.pivot,t.position.x,Math.max(0,t.position.y-e.halfHeight),t.position.z,Math.max(-.9,Math.min(.9,Math.atan2(n,r)))),Ec.crumbs(t.position,26)}e.remove(),Me(),Z.float(`啪！`,Tl.set(e.body.position.x,e.body.position.y+.12,e.body.position.z),{color:`#ffb4a8`,life:1.1}),Q.mischief(25,`打碎了${e.name}`),Q.advance(`break`)}Rl.clear(),Ec.update(),kc&&kc.update(e)}function Vl(e,t){let n=Y.feetPosition(),r=Y.grounded,i=r&&$i(Zi.sill,n),a=r&&$i(Zi.bed,n,0),o=r&&n.y<.06&&$i(Zi.rug,n,-.05);i&&(Q.advance(`sill`),Y.speed<.15&&Q.advance(`watch`,e)),r&&$i(Zi.wardrobeTop,n)&&Q.advance(`wardrobe`),a&&Y.sleeping&&Q.advance(`bednap`,e);let s=Mc>.3&&Y.pose===`lie`;s&&(Q.advance(`sunbathe`,e),Y.energy=Math.min(100,Y.energy+6*e)),Y.scratching=t&&vl.has(`KeyE`)&&o&&Y.pose===`stand`&&!Y.charging,Y.scratching&&(Q.advance(`scratch`,e),Al-=e,Al<=0&&(Ke(),Al=.3));let c=Bc&&Bc.level>.3;Y.pose===`lie`&&Y.restT>.8||c?(Ol||=Be(),kl-=e,kl<=0&&Y.sleeping&&!X&&(kl=1.3,Z.float(`z`,J.headWorldPosition(Tl).add(new M(.04,.1,0)),{color:`#cfe0ff`,life:2.2,rise:.3,size:18}))):Ol&&=(Ol.stop(),null),Bc&&Bc.active&&(Q.advance(`pet`,e),jl-=e,jl<=0&&(jl=1.8,Z.float(`呼噜呼噜~`,J.headWorldPosition(Tl).add(new M(0,.07,0)),{color:`#ffe2c4`,life:1.8,rise:.06,size:17})));let l=``;if(t&&!X){let e=Y.pose===`stand`?Y.pawTargets(Tc)[0]:null;!document.pointerLockElement&&!yl&&!fc.has(`nolock`)?l=`点一下画面，用鼠标转视角`:Y.sleeping?l=s?`在阳光里睡着了… 动一下就醒`:`睡着了… 动一下就醒`:s?l=`晒着太阳，暖洋洋的…`:Y.pose===`lie`?l=`趴着休息，再躺一会儿就睡着了`:Y.scratching?l=`磨爪中…`:e?l=`左键拍一下：${e.name}`:o&&!Q.done.has(`scratch`)?l=`按住 E 在地毯上磨爪`:i&&!Q.done.has(`watch`)?l=`停下来，看看窗外`:Y.energy<15?l=`累了，按 Z 趴下睡一会儿`:Mc>.3&&Y.pose===`stand`&&!Q.done.has(`sunbathe`)&&(l=`这里有太阳，按 Z 趴下晒一晒`)}return Z.hint(l),{onSill:i}}var Hl=performance.now(),Ul=new M,Wl=new M,Gl=new M,Kl=new M,ql=new Set([`loco`,`air`,`land`,`crouch`]),Jl=[`head`,`chest`,`hips`,`tail_02`,`paw_front_L`,`foot_R`];function Yl(){let e=0,t=0;for(let n of Tc)n.group.parent&&(t++,n.body.sleepState!==we.SLEEPING&&e++);let n=t+`:`+e;(e||n!==Nc)&&jc.renderDynamic(),Nc=n}function Xl(e){requestAnimationFrame(Xl);let t=Math.min(.05,Math.max(0,(e-Hl)/1e3));Hl=e,Lc+=t;let n=xc===`playing`,r=n&&!X?Cl():wl;Oc.friction=r.x!==0||r.z!==0||Y.charging||!Y.grounded||Y.launchT>0?0:.9,Y.update(t,r,wc.yaw,ql.has(J.mode)),Il(),Ac.update(J.bones,Tc,Y.body),Dc.step(1/60,t,4),Y.postStep(t),Bl(t),Yl();let i=Vl(t,n),a=Y.body.interpolatedPosition;Ul.set(a.x,a.y-Es,a.z),J.group.position.copy(Ul),J.group.rotation.y=Y.yaw,J.group.updateMatrixWorld(!0),J.headWorldPosition(El),X?Dl.copy(bc.position):i.onSill&&Y.speed<.15?Dl.set(El.x+Math.sin(Lc*.31)*.8,El.y-.1+Math.sin(Lc*.53)*.25,-3):(bc.getWorldDirection(Gl),Dl.copy(El).addScaledVector(Gl,2)),J.update(t,{speed:Y.speed,grounded:Y.grounded||Y.airT<.08,vy:Y.body.velocity.y,charging:Y.charging,pose:Y.sleeping?`sleep`:Y.pose,action:bl,scratch:Y.scratching,swat:Y.swipeT,wantMove:n&&(r.x!==0||r.z!==0||r.jumpHeld),look:Y.pose===`lie`?null:Dl}),Ic.update(t,Ul,Y.yaw,Y.grounded||Y.airT<.08),Y.drawnOff.copy(J.group.position).sub(Ul),bl=null,Bc.update(t,Lc),J.setPet(Bc.level);let o=0,s=0;for(let e of Jl){let t=J.bones[e];t&&(o+=jc.visibleAt(t.getWorldPosition(Tl).addScaledVector(jc.dir,.07)),s++)}Mc+=((s?o/s:0)-Mc)*(1-Math.exp(-t*10));let c=Cc.follow(Kl.set(Ul.x,Ul.y+.18,Ul.z),{sunVis:Mc*J.uniforms.ST.uStSunK.value});J.setGlint((.2126*c.r+.7152*c.g+.0722*c.b)/Math.PI*2.5),vi(J.bones),bi(J.bones);{let e=J.group.position,t=aa(e.x,e.z,e.y+.05);J.setGround(t.h>-1e9?t.h:-100)}let l=J.group.position;Wl.set(l.x,Ul.y+.2,l.z),X?zc.update(t,cl(zc.part)):wc.update(t,Wl,{orbit:n?0:.12}),Rc&&(bc.position.fromArray(Rc.pos),bc.lookAt(Tl.fromArray(Rc.target))),bc.updateMatrixWorld(!0),q.pipe.meterSpot=+!!X;let u=q.pipe.meterLum,d=q.pipe.meterHi,f=X?.06:.25,p=Kr.key*(X?1.6:1),m=Kr.hiKey*(X?2.5:1),h=(u>0?k.clamp(Math.min(p/u,d>0?m/d:1/0),Kr.exposure*f,Kr.exposure*1.8):Kr.exposure)*Vc;q.pipe.look.exposure+=(h-q.pipe.look.exposure)*(1-Math.exp(-t*1.3)),F.uniforms.uTime.value=Lc,!yc&&!(Fc++&1)&&jc.updateLeaves(),Pc&&Pc.update(bc,hc.domElement.height),hc.info.reset(),q.pipe.render(),Q.update(t),Z.setEnergy(Y.energy),Z.setCharge(Y.charging?Y.charge:0),Z.updateFloaters(t,bc),Zc(t)}var Zl={walls:`墙和地板`,outside:`窗外的树`,bed:`床和被子`,desk:`书桌`,plants:`绿萝`,things:`房间里的小东西`,light:`光线`};(async()=>{Z.setQuality($.label),Z.renderMissions(Q),Z.setScore(0,0,1);let e=0,t=t=>(Z.loading(t,Math.min(.95,++e/13)),new Promise(e=>setTimeout(e,0)));await t(`正在布置房间…`),q=await di(hc,bc,{onProgress:t=>{Z.loading(`正在布置房间：${Zl[t]||`家具`}…`,Math.min(.8,++e/13))}}),Sc=Ei(q.scene),await t(`正在叫醒 Maimai…`),Cc=await fi(hc,q.scene),J=await ms(`${pc}cats/maimai.glb`,{renderer:hc,camera:bc,key:Cc.key,scene:q.scene,sun:mi()}),q.scene.add(J.group),Ic=new Ys(J),await t(`最后收拾一下…`),Dc=new S({gravity:new s(0,-14,0)}),Dc.broadphase=new ne(Dc),Dc.allowSleep=!0,Dc.solver.iterations=12,Dc.defaultContactMaterial.friction=.4;let n=new rt(`static`),r=new rt(`prop`),i=new rt(`cat`);Oc=new $e(i,n,{friction:0,restitution:0}),Dc.addContactMaterial(Oc),Dc.addContactMaterial(new $e(i,r,{friction:.05,restitution:0})),Dc.addContactMaterial(new $e(r,n,{friction:.5,restitution:.12})),Dc.addContactMaterial(new $e(r,r,{friction:.5,restitution:.08})),ea(Dc,n);try{let e=await fetch(`${pc}bedroom/gi-noprops.bin`,{cache:`force-cache`});e.ok&&q.baked&&(kc=new ua(q.scene,await e.arrayBuffer()))}catch(e){console.warn(`[footprints]`,e)}Tc=Bi(q.scene,Dc,r),kc&&kc.bind(Tc),Ec=new Hi(q.scene,Dc),await t(`阳光照进来…`),jc=new ai(hc,q.scene,{size:yc?1024:2048});for(let e of Tc)jc.addDynamic(e.group);jc.renderStatic([J.group]),jc.renderDynamic(),J.group.visible=!1,q.refreshEnv(),J.group.visible=!0,pi(q.pipe,{density:Kr.dust,steps:yc?20:40}),Pc=Ci({count:yc?900:2400}),q.scene.add(Pc),zl(),Y=new Ns({world:Dc,catMat:i,spawn:Zi.spawn,bounds:{x0:0,x1:L.W,z0:-.3,z1:L.D,y1:L.H},ledges:[{x0:.5,x1:2.5,y:.862,zEdge:.07}]}),wc=new Ls(bc,Dc),Ac=new Is,zc=new sc(bc,Dc,()=>Y.yaw),Bc=new cc(J.uniforms.ST),Xc(),yc&&Z.gpuNote(`这台电脑现在用的是集成显卡（${vc.replace(/ANGLE \(|\)$/g,``).split(`,`)[1]||`Intel`}），这个房间会很卡。<br>如果有独立显卡：在 Windows「设置 → 系统 → 屏幕 → 显示卡」里把浏览器（Chrome 或 Edge）设成「高性能」，关掉浏览器再打开。在项目文件夹里也可以运行 <code>npm run play</code>，它会直接用独显打开游戏。`),Z.loading(`好了`,1),xc=`menu`,Z.loadingDone(),Z.showStart(!0),window.__game={renderer:hc,camera:bc,scene:q.scene,pipe:q.pipe,world:Dc,player:Y,rig:wc,props:Tc,game:Q,cat:J,hud:Z,light:Cc,keys:vl,footprints:kc,sun:jc,grounding:Ic,GI:F,get catSun(){return Mc},get state(){return xc},get fps(){return Jc},get closeOn(){return X},enterClose:ll,exitClose:ul,get closeCam(){return zc},get petting(){return Bc},hitAt:dl,get scale(){return Wc},get quality(){return $.id},gpu:vc,play:rl,setFreeCam:e=>{Rc=e}},window.__ready=!0,requestAnimationFrame(Xl)})().catch(e=>{console.error(e),window.__error=String(e&&e.stack||e),Z.loadingFailed(`加载失败：${e&&e.message?e.message:e}`)});export{yn as A,Xt as B,Un as C,Rn as D,wn as E,gn as F,Jt as G,Kt as H,bn as I,Qt as K,xn as L,vn as M,hn as N,Bn as O,mn as P,Bt as R,Kn as S,I as T,Ht as U,Zt as V,Ut as W,Qn as _,ur as a,Xn as b,lr as c,ir as d,Wn as f,$n as g,Yn as h,rr as i,Sn as j,Cn as k,nr as l,Gn as m,R as n,ar as o,Jn as p,or as r,sr as s,xr as t,cr as u,qn as v,Ln as w,Zn as x,L as y,Vt as z};