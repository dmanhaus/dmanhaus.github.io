(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Mr(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=Mr(Kd);function mc(e){return!!e||e===""}function nt(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Ie(o)?Zd(o):nt(o);if(r)for(const i in r)t[i]=r[i]}return t}else{if(Ie(e))return e;if(ze(e))return e}}const Jd=/;(?![^(]*\))/g,Yd=/:(.+)/;function Zd(e){const t={};return e.split(Jd).forEach(n=>{if(n){const o=n.split(Yd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function je(e){let t="";if(Ie(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const o=je(e[n]);o&&(t+=o+" ")}else if(ze(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function X(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=je(t)),n&&(e.style=nt(n)),e}const Qd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xd=Mr(Qd),$n=e=>Ie(e)?e:e==null?"":se(e)||ze(e)&&(e.toString===vc||!ue(e.toString))?JSON.stringify(e,gc,2):String(e),gc=(e,t)=>t&&t.__v_isRef?gc(e,t.value):Wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:yc(t)?{[`Set(${t.size})`]:[...t.values()]}:ze(t)&&!se(t)&&!wc(t)?String(t):t,Re={},Nn=[],Pt=()=>{},eh=()=>!1,th=/^on[^a-z]/,Er=e=>th.test(e),hi=e=>e.startsWith("onUpdate:"),ot=Object.assign,fi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},nh=Object.prototype.hasOwnProperty,ye=(e,t)=>nh.call(e,t),se=Array.isArray,Wn=e=>Fr(e)==="[object Map]",yc=e=>Fr(e)==="[object Set]",ue=e=>typeof e=="function",Ie=e=>typeof e=="string",pi=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",_c=e=>ze(e)&&ue(e.then)&&ue(e.catch),vc=Object.prototype.toString,Fr=e=>vc.call(e),oh=e=>Fr(e).slice(8,-1),wc=e=>Fr(e)==="[object Object]",mi=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rh=/-(\w)/g,It=Or(e=>e.replace(rh,(t,n)=>n?n.toUpperCase():"")),sh=/\B([A-Z])/g,An=Or(e=>e.replace(sh,"-$1").toLowerCase()),Lr=Or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qr=Or(e=>e?`on${Lr(e)}`:""),Ro=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let aa;const ih=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class bc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ut;try{return ut=this,t()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ah(e){return new bc(e)}function lh(e,t=ut){t&&t.active&&t.effects.push(e)}function kc(){return ut}function Sc(e){ut&&ut.cleanups.push(e)}const gi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Tc=e=>(e.w&an)>0,Dc=e=>(e.n&an)>0,ch=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=an},uh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];Tc(r)&&!Dc(r)?r.delete(e):t[n++]=r,r.w&=~an,r.n&=~an}t.length=n}},Ds=new WeakMap;let vo=0,an=1;const xs=30;let Dt;const kn=Symbol(""),$s=Symbol("");class yi{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lh(this,o)}run(){if(!this.active)return this.fn();let t=Dt,n=tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Dt,Dt=this,tn=!0,an=1<<++vo,vo<=xs?ch(this):la(this),this.fn()}finally{vo<=xs&&uh(this),an=1<<--vo,Dt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tn=!0;const xc=[];function ro(){xc.push(tn),tn=!1}function so(){const e=xc.pop();tn=e===void 0?!0:e}function yt(e,t,n){if(tn&&Dt){let o=Ds.get(e);o||Ds.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=gi()),$c(r)}}function $c(e,t){let n=!1;vo<=xs?Dc(e)||(e.n|=an,n=!Tc(e)):n=!e.has(Dt),n&&(e.add(Dt),Dt.deps.push(e))}function Ut(e,t,n,o,r,i){const a=Ds.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&se(e))a.forEach((c,u)=>{(u==="length"||u>=o)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":se(e)?mi(n)&&l.push(a.get("length")):(l.push(a.get(kn)),Wn(e)&&l.push(a.get($s)));break;case"delete":se(e)||(l.push(a.get(kn)),Wn(e)&&l.push(a.get($s)));break;case"set":Wn(e)&&l.push(a.get(kn));break}if(l.length===1)l[0]&&Ps(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);Ps(gi(c))}}function Ps(e,t){const n=se(e)?e:[...e];for(const o of n)o.computed&&ca(o);for(const o of n)o.computed||ca(o)}function ca(e,t){(e!==Dt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const dh=Mr("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pi)),hh=_i(),fh=_i(!1,!0),ph=_i(!0),ua=mh();function mh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=be(this);for(let i=0,a=this.length;i<a;i++)yt(o,"get",i+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ro();const o=be(this)[t].apply(this,n);return so(),o}}),e}function _i(e=!1,t=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Rh:Ec:t?Mc:Rc).get(o))return o;const a=se(o);if(!e&&a&&ye(ua,r))return Reflect.get(ua,r,i);const l=Reflect.get(o,r,i);return(pi(r)?Pc.has(r):dh(r))||(e||yt(o,"get",r),t)?l:Se(l)?a&&mi(r)?l:l.value:ze(l)?e?Bn(l):Fe(l):l}}const gh=Ac(),yh=Ac(!0);function Ac(e=!1){return function(n,o,r,i){let a=n[o];if(Qn(a)&&Se(a)&&!Se(r))return!1;if(!e&&(!yr(r)&&!Qn(r)&&(a=be(a),r=be(r)),!se(n)&&Se(a)&&!Se(r)))return a.value=r,!0;const l=se(n)&&mi(o)?Number(o)<n.length:ye(n,o),c=Reflect.set(n,o,r,i);return n===be(i)&&(l?Ro(r,a)&&Ut(n,"set",o,r):Ut(n,"add",o,r)),c}}function _h(e,t){const n=ye(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Ut(e,"delete",t,void 0),o}function vh(e,t){const n=Reflect.has(e,t);return(!pi(t)||!Pc.has(t))&&yt(e,"has",t),n}function wh(e){return yt(e,"iterate",se(e)?"length":kn),Reflect.ownKeys(e)}const Cc={get:hh,set:gh,deleteProperty:_h,has:vh,ownKeys:wh},bh={get:ph,set(e,t){return!0},deleteProperty(e,t){return!0}},kh=ot({},Cc,{get:fh,set:yh}),vi=e=>e,zr=e=>Reflect.getPrototypeOf(e);function Zo(e,t,n=!1,o=!1){e=e.__v_raw;const r=be(e),i=be(t);n||(t!==i&&yt(r,"get",t),yt(r,"get",i));const{has:a}=zr(r),l=o?vi:n?ki:Mo;if(a.call(r,t))return l(e.get(t));if(a.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function Qo(e,t=!1){const n=this.__v_raw,o=be(n),r=be(e);return t||(e!==r&&yt(o,"has",e),yt(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Xo(e,t=!1){return e=e.__v_raw,!t&&yt(be(e),"iterate",kn),Reflect.get(e,"size",e)}function da(e){e=be(e);const t=be(this);return zr(t).has.call(t,e)||(t.add(e),Ut(t,"add",e,e)),this}function ha(e,t){t=be(t);const n=be(this),{has:o,get:r}=zr(n);let i=o.call(n,e);i||(e=be(e),i=o.call(n,e));const a=r.call(n,e);return n.set(e,t),i?Ro(t,a)&&Ut(n,"set",e,t):Ut(n,"add",e,t),this}function fa(e){const t=be(this),{has:n,get:o}=zr(t);let r=n.call(t,e);r||(e=be(e),r=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return r&&Ut(t,"delete",e,void 0),i}function pa(){const e=be(this),t=e.size!==0,n=e.clear();return t&&Ut(e,"clear",void 0,void 0),n}function er(e,t){return function(o,r){const i=this,a=i.__v_raw,l=be(a),c=t?vi:e?ki:Mo;return!e&&yt(l,"iterate",kn),a.forEach((u,d)=>o.call(r,c(u),c(d),i))}}function tr(e,t,n){return function(...o){const r=this.__v_raw,i=be(r),a=Wn(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...o),d=n?vi:t?ki:Mo;return!t&&yt(i,"iterate",c?$s:kn),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:l?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:this}}function Sh(){const e={get(i){return Zo(this,i)},get size(){return Xo(this)},has:Qo,add:da,set:ha,delete:fa,clear:pa,forEach:er(!1,!1)},t={get(i){return Zo(this,i,!1,!0)},get size(){return Xo(this)},has:Qo,add:da,set:ha,delete:fa,clear:pa,forEach:er(!1,!0)},n={get(i){return Zo(this,i,!0)},get size(){return Xo(this,!0)},has(i){return Qo.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:er(!0,!1)},o={get(i){return Zo(this,i,!0,!0)},get size(){return Xo(this,!0)},has(i){return Qo.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tr(i,!1,!1),n[i]=tr(i,!0,!1),t[i]=tr(i,!1,!0),o[i]=tr(i,!0,!0)}),[e,n,t,o]}const[Th,Dh,xh,$h]=Sh();function wi(e,t){const n=t?e?$h:xh:e?Dh:Th;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ye(n,r)&&r in o?n:o,r,i)}const Ph={get:wi(!1,!1)},Ah={get:wi(!1,!0)},Ch={get:wi(!0,!1)},Rc=new WeakMap,Mc=new WeakMap,Ec=new WeakMap,Rh=new WeakMap;function Mh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eh(e){return e.__v_skip||!Object.isExtensible(e)?0:Mh(oh(e))}function Fe(e){return Qn(e)?e:bi(e,!1,Cc,Ph,Rc)}function Fh(e){return bi(e,!1,kh,Ah,Mc)}function Bn(e){return bi(e,!0,bh,Ch,Ec)}function bi(e,t,n,o,r){if(!ze(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=Eh(e);if(a===0)return e;const l=new Proxy(e,a===2?o:n);return r.set(e,l),l}function Un(e){return Qn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function yr(e){return!!(e&&e.__v_isShallow)}function Fc(e){return Un(e)||Qn(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function jr(e){return gr(e,"__v_skip",!0),e}const Mo=e=>ze(e)?Fe(e):e,ki=e=>ze(e)?Bn(e):e;function Si(e){tn&&Dt&&(e=be(e),$c(e.dep||(e.dep=gi())))}function Ti(e,t){e=be(e),e.dep&&Ps(e.dep)}function Se(e){return!!(e&&e.__v_isRef===!0)}function U(e){return Oc(e,!1)}function Rt(e){return Oc(e,!0)}function Oc(e,t){return Se(e)?e:new Oh(e,t)}class Oh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:Mo(t)}get value(){return Si(this),this._value}set value(t){const n=this.__v_isShallow||yr(t)||Qn(t);t=n?t:be(t),Ro(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Mo(t),Ti(this))}}function b(e){return Se(e)?e.value:e}const Lh={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Lc(e){return Un(e)?e:new Proxy(e,Lh)}class zh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>Si(this),()=>Ti(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function zc(e){return new zh(e)}function jh(e){const t=se(e)?new Array(e.length):{};for(const n in e)t[n]=Ih(e,n);return t}class qh{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ih(e,t,n){const o=e[t];return Se(o)?o:new qh(e,t,n)}var jc;class Bh{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jc]=!1,this._dirty=!0,this.effect=new yi(t,()=>{this._dirty||(this._dirty=!0,Ti(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=be(this);return Si(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}jc="__v_isReadonly";function Vh(e,t,n=!1){let o,r;const i=ue(e);return i?(o=e,r=Pt):(o=e.get,r=e.set),new Bh(o,r,i||!r,n)}function nn(e,t,n,o){let r;try{r=o?e(...o):e()}catch(i){qr(i,t,n)}return r}function At(e,t,n,o){if(ue(e)){const i=nn(e,t,n,o);return i&&_c(i)&&i.catch(a=>{qr(a,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(At(e[i],t,n,o));return r}function qr(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,l=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){nn(c,null,10,[e,a,l]);return}}Nh(e,n,r,o)}function Nh(e,t,n,o=!0){console.error(e)}let Eo=!1,As=!1;const Je=[];let Lt=0;const Kn=[];let Nt=null,gn=0;const qc=Promise.resolve();let Di=null;function Ye(e){const t=Di||qc;return e?t.then(this?e.bind(this):e):t}function Wh(e){let t=Lt+1,n=Je.length;for(;t<n;){const o=t+n>>>1;Fo(Je[o])<e?t=o+1:n=o}return t}function xi(e){(!Je.length||!Je.includes(e,Eo&&e.allowRecurse?Lt+1:Lt))&&(e.id==null?Je.push(e):Je.splice(Wh(e.id),0,e),Ic())}function Ic(){!Eo&&!As&&(As=!0,Di=qc.then(Vc))}function Hh(e){const t=Je.indexOf(e);t>Lt&&Je.splice(t,1)}function Uh(e){se(e)?Kn.push(...e):(!Nt||!Nt.includes(e,e.allowRecurse?gn+1:gn))&&Kn.push(e),Ic()}function ma(e,t=Eo?Lt+1:0){for(;t<Je.length;t++){const n=Je[t];n&&n.pre&&(Je.splice(t,1),t--,n())}}function Bc(e){if(Kn.length){const t=[...new Set(Kn)];if(Kn.length=0,Nt){Nt.push(...t);return}for(Nt=t,Nt.sort((n,o)=>Fo(n)-Fo(o)),gn=0;gn<Nt.length;gn++)Nt[gn]();Nt=null,gn=0}}const Fo=e=>e.id==null?1/0:e.id,Kh=(e,t)=>{const n=Fo(e)-Fo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vc(e){As=!1,Eo=!0,Je.sort(Kh);const t=Pt;try{for(Lt=0;Lt<Je.length;Lt++){const n=Je[Lt];n&&n.active!==!1&&nn(n,null,14)}}finally{Lt=0,Je.length=0,Bc(),Eo=!1,Di=null,(Je.length||Kn.length)&&Vc()}}function Gh(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Re;let r=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=o[d]||Re;p&&(r=n.map(m=>m.trim())),f&&(r=n.map(Ts))}let l,c=o[l=Qr(t)]||o[l=Qr(It(t))];!c&&i&&(c=o[l=Qr(An(t))]),c&&At(c,e,6,r);const u=o[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,At(u,e,6,r)}}function Nc(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},l=!1;if(!ue(e)){const c=u=>{const d=Nc(u,t,!0);d&&(l=!0,ot(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(ze(e)&&o.set(e,null),null):(se(i)?i.forEach(c=>a[c]=null):ot(a,i),ze(e)&&o.set(e,a),a)}function Ir(e,t){return!e||!Er(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,An(t))||ye(e,t))}let Ze=null,Br=null;function _r(e){const t=Ze;return Ze=e,Br=e&&e.type.__scopeId||null,t}function DA(e){Br=e}function xA(){Br=null}function $(e,t=Ze,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&xa(-1);const i=_r(t),a=e(...r);return _r(i),o._d&&xa(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function Xr(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:l,attrs:c,emit:u,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:w}=e;let v,x;const T=_r(e);try{if(n.shapeFlag&4){const A=r||o;v=Ot(d.call(A,A,f,i,m,p,g)),x=c}else{const A=t;v=Ot(A.length>1?A(i,{attrs:c,slots:l,emit:u}):A(i,null)),x=t.props?c:Jh(c)}}catch(A){ko.length=0,qr(A,e,1),v=V(ln)}let D=v;if(x&&w!==!1){const A=Object.keys(x),{shapeFlag:q}=D;A.length&&q&7&&(a&&A.some(hi)&&(x=Yh(x,a)),D=Pn(D,x))}return n.dirs&&(D=Pn(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),v=D,_r(T),v}const Jh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Er(n))&&((t||(t={}))[n]=e[n]);return t},Yh=(e,t)=>{const n={};for(const o in e)(!hi(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Zh(e,t,n){const{props:o,children:r,component:i}=e,{props:a,children:l,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?ga(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(a[p]!==o[p]&&!Ir(u,p))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:o===a?!1:o?a?ga(o,a,u):!0:!!a;return!1}function ga(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(t[i]!==e[i]&&!Ir(n,i))return!0}return!1}function Qh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Wc=e=>e.__isSuspense;function Xh(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Uh(e)}function ht(e,t){if(Ue){let n=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===n&&(n=Ue.provides=Object.create(o)),n[e]=t}}function F(e,t,n=!1){const o=Ue||Ze;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ue(t)?t.call(o.proxy):t}}function Vr(e,t){return $i(e,null,t)}const ya={};function fe(e,t,n){return $i(e,t,n)}function $i(e,t,{immediate:n,deep:o,flush:r,onTrack:i,onTrigger:a}=Re){const l=Ue;let c,u=!1,d=!1;if(Se(e)?(c=()=>e.value,u=yr(e)):Un(e)?(c=()=>e,o=!0):se(e)?(d=!0,u=e.some(x=>Un(x)||yr(x)),c=()=>e.map(x=>{if(Se(x))return x.value;if(Un(x))return _n(x);if(ue(x))return nn(x,l,2)})):ue(e)?t?c=()=>nn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),At(e,l,3,[p])}:c=Pt,t&&o){const x=c;c=()=>_n(x())}let f,p=x=>{f=v.onStop=()=>{nn(x,l,4)}};if(zo)return p=Pt,t?n&&At(t,l,3,[c(),d?[]:void 0,p]):c(),Pt;let m=d?[]:ya;const g=()=>{if(!!v.active)if(t){const x=v.run();(o||u||(d?x.some((T,D)=>Ro(T,m[D])):Ro(x,m)))&&(f&&f(),At(t,l,3,[x,m===ya?void 0:m,p]),m=x)}else v.run()};g.allowRecurse=!!t;let w;r==="sync"?w=g:r==="post"?w=()=>Ke(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),w=()=>xi(g));const v=new yi(c,w);return t?n?g():m=v.run():r==="post"?Ke(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&fi(l.scope.effects,v)}}function ef(e,t,n){const o=this.proxy,r=Ie(e)?e.includes(".")?Hc(o,e):()=>o[e]:e.bind(o,o);let i;ue(t)?i=t:(i=t.handler,n=t);const a=Ue;eo(this);const l=$i(r,i.bind(o),n);return a?eo(a):Sn(),l}function Hc(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function _n(e,t){if(!ze(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))_n(e.value,t);else if(se(e))for(let n=0;n<e.length;n++)_n(e[n],t);else if(yc(e)||Wn(e))e.forEach(n=>{_n(n,t)});else if(wc(e))for(const n in e)_n(e[n],t);return e}function Uc(e,t){e.shapeFlag&6&&e.component?Uc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Te(e){return ue(e)?{setup:e,name:e.name}:e}const Gn=e=>!!e.type.__asyncLoader,Kc=e=>e.type.__isKeepAlive,tf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Cn(),o=n.ctx;if(!o.renderer)return()=>{const T=t.default&&t.default();return T&&T.length===1?T[0]:T};const r=new Map,i=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:f}}}=o,p=f("div");o.activate=(T,D,A,q,O)=>{const W=T.component;u(T,D,A,0,l),c(W.vnode,T,D,A,W,l,q,T.slotScopeIds,O),Ke(()=>{W.isDeactivated=!1,W.a&&Hn(W.a);const ne=T.props&&T.props.onVnodeMounted;ne&&_t(ne,W.parent,T)},l)},o.deactivate=T=>{const D=T.component;u(T,p,null,1,l),Ke(()=>{D.da&&Hn(D.da);const A=T.props&&T.props.onVnodeUnmounted;A&&_t(A,D.parent,T),D.isDeactivated=!0},l)};function m(T){es(T),d(T,n,l,!0)}function g(T){r.forEach((D,A)=>{const q=Ls(D.type);q&&(!T||!T(q))&&w(A)})}function w(T){const D=r.get(T);!a||D.type!==a.type?m(D):a&&es(a),r.delete(T),i.delete(T)}fe(()=>[e.include,e.exclude],([T,D])=>{T&&g(A=>wo(T,A)),D&&g(A=>!wo(D,A))},{flush:"post",deep:!0});let v=null;const x=()=>{v!=null&&r.set(v,ts(n.subTree))};return Ho(x),Pi(x),Wr(()=>{r.forEach(T=>{const{subTree:D,suspense:A}=n,q=ts(D);if(T.type===q.type){es(q);const O=q.component.da;O&&Ke(O,A);return}m(T)})}),()=>{if(v=null,!t.default)return null;const T=t.default(),D=T[0];if(T.length>1)return a=null,T;if(!Xn(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return a=null,D;let A=ts(D);const q=A.type,O=Ls(Gn(A)?A.type.__asyncResolved||{}:q),{include:W,exclude:ne,max:ae}=e;if(W&&(!O||!wo(W,O))||ne&&O&&wo(ne,O))return a=A,D;const ge=A.key==null?q:A.key,_e=r.get(ge);return A.el&&(A=Pn(A),D.shapeFlag&128&&(D.ssContent=A)),v=ge,_e?(A.el=_e.el,A.component=_e.component,A.transition&&Uc(A,A.transition),A.shapeFlag|=512,i.delete(ge),i.add(ge)):(i.add(ge),ae&&i.size>parseInt(ae,10)&&w(i.values().next().value)),A.shapeFlag|=256,a=A,Wc(D.type)?D:A}}},Gc=tf;function wo(e,t){return se(e)?e.some(n=>wo(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function nf(e,t){Jc(e,"a",t)}function of(e,t){Jc(e,"da",t)}function Jc(e,t,n=Ue){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Nr(t,o,n),n){let r=n.parent;for(;r&&r.parent;)Kc(r.parent.vnode)&&rf(o,t,n,r),r=r.parent}}function rf(e,t,n,o){const r=Nr(t,e,o,!0);Ai(()=>{fi(o[t],r)},n)}function es(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function ts(e){return e.shapeFlag&128?e.ssContent:e}function Nr(e,t,n=Ue,o=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;ro(),eo(n);const l=At(t,n,e,a);return Sn(),so(),l});return o?r.unshift(i):r.push(i),i}}const Gt=e=>(t,n=Ue)=>(!zo||e==="sp")&&Nr(e,t,n),Yc=Gt("bm"),Ho=Gt("m"),sf=Gt("bu"),Pi=Gt("u"),Wr=Gt("bum"),Ai=Gt("um"),af=Gt("sp"),lf=Gt("rtg"),cf=Gt("rtc");function uf(e,t=Ue){Nr("ec",e,t)}function Ci(e,t){const n=Ze;if(n===null)return e;const o=Ur(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,l,c,u=Re]=t[i];ue(a)&&(a={mounted:a,updated:a}),a.deep&&_n(l),r.push({dir:a,instance:o,value:l,oldValue:void 0,arg:c,modifiers:u})}return e}function dn(e,t,n,o){const r=e.dirs,i=t&&t.dirs;for(let a=0;a<r.length;a++){const l=r[a];i&&(l.oldValue=i[a].value);let c=l.dir[o];c&&(ro(),At(c,n,8,[e.el,l,e,t]),so())}}const Zc="components";function Oo(e,t){return hf(Zc,e,!0,t)||e}const df=Symbol();function hf(e,t,n=!0,o=!1){const r=Ze||Ue;if(r){const i=r.type;if(e===Zc){const l=Ls(i,!1);if(l&&(l===t||l===It(t)||l===Lr(It(t))))return i}const a=_a(r[e]||i[e],t)||_a(r.appContext[e],t);return!a&&o?i:a}}function _a(e,t){return e&&(e[t]||e[It(t)]||e[Lr(It(t))])}function Uo(e,t,n,o){let r;const i=n&&n[o];if(se(e)||Ie(e)){r=new Array(e.length);for(let a=0,l=e.length;a<l;a++)r[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i&&i[a])}else if(ze(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(e[u],u,l,i&&i[l])}}else r=[];return n&&(n[o]=r),r}function wt(e,t,n={},o,r){if(Ze.isCE||Ze.parent&&Gn(Ze.parent)&&Ze.parent.isCE)return V("slot",t==="default"?null:{name:t},o&&o());let i=e[t];i&&i._c&&(i._d=!1),k();const a=i&&Qc(i(n)),l=j(xe,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Qc(e){return e.some(t=>Xn(t)?!(t.type===ln||t.type===xe&&!Qc(t.children)):!0)?e:null}const Cs=e=>e?lu(e)?Ur(e)||e.proxy:Cs(e.parent):null,vr=ot(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cs(e.parent),$root:e=>Cs(e.root),$emit:e=>e.emit,$options:e=>Ri(e),$forceUpdate:e=>e.f||(e.f=()=>xi(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>ef.bind(e)}),ff={get({_:e},t){const{ctx:n,setupState:o,data:r,props:i,accessCache:a,type:l,appContext:c}=e;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(o!==Re&&ye(o,t))return a[t]=1,o[t];if(r!==Re&&ye(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&ye(u,t))return a[t]=3,i[t];if(n!==Re&&ye(n,t))return a[t]=4,n[t];Rs&&(a[t]=0)}}const d=vr[t];let f,p;if(d)return t==="$attrs"&&yt(e,"get",t),d(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==Re&&ye(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,ye(p,t))return p[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:i}=e;return r!==Re&&ye(r,t)?(r[t]=n,!0):o!==Re&&ye(o,t)?(o[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:i}},a){let l;return!!n[a]||e!==Re&&ye(e,a)||t!==Re&&ye(t,a)||(l=i[0])&&ye(l,a)||ye(o,a)||ye(vr,a)||ye(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Rs=!0;function pf(e){const t=Ri(e),n=e.proxy,o=e.ctx;Rs=!1,t.beforeCreate&&va(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:l,provide:c,inject:u,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:w,deactivated:v,beforeDestroy:x,beforeUnmount:T,destroyed:D,unmounted:A,render:q,renderTracked:O,renderTriggered:W,errorCaptured:ne,serverPrefetch:ae,expose:ge,inheritAttrs:_e,components:Be,directives:Ve,filters:qe}=t;if(u&&mf(u,o,null,e.appContext.config.unwrapInjectedRef),a)for(const J in a){const re=a[J];ue(re)&&(o[J]=re.bind(n))}if(r){const J=r.call(n,n);ze(J)&&(e.data=Fe(J))}if(Rs=!0,i)for(const J in i){const re=i[J],he=ue(re)?re.bind(n,n):ue(re.get)?re.get.bind(n,n):Pt,$e=!ue(re)&&ue(re.set)?re.set.bind(n):Pt,it=P({get:he,set:$e});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ge=>it.value=Ge})}if(l)for(const J in l)Xc(l[J],o,n,J);if(c){const J=ue(c)?c.call(n):c;Reflect.ownKeys(J).forEach(re=>{ht(re,J[re])})}d&&va(d,e,"c");function Le(J,re){se(re)?re.forEach(he=>J(he.bind(n))):re&&J(re.bind(n))}if(Le(Yc,f),Le(Ho,p),Le(sf,m),Le(Pi,g),Le(nf,w),Le(of,v),Le(uf,ne),Le(cf,O),Le(lf,W),Le(Wr,T),Le(Ai,A),Le(af,ae),se(ge))if(ge.length){const J=e.exposed||(e.exposed={});ge.forEach(re=>{Object.defineProperty(J,re,{get:()=>n[re],set:he=>n[re]=he})})}else e.exposed||(e.exposed={});q&&e.render===Pt&&(e.render=q),_e!=null&&(e.inheritAttrs=_e),Be&&(e.components=Be),Ve&&(e.directives=Ve)}function mf(e,t,n=Pt,o=!1){se(e)&&(e=Ms(e));for(const r in e){const i=e[r];let a;ze(i)?"default"in i?a=F(i.from||r,i.default,!0):a=F(i.from||r):a=F(i),Se(a)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[r]=a}}function va(e,t,n){At(se(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xc(e,t,n,o){const r=o.includes(".")?Hc(n,o):()=>n[o];if(Ie(e)){const i=t[e];ue(i)&&fe(r,i)}else if(ue(e))fe(r,e.bind(n));else if(ze(e))if(se(e))e.forEach(i=>Xc(i,t,n,o));else{const i=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(i)&&fe(r,i,e)}}function Ri(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!r.length&&!n&&!o?c=t:(c={},r.length&&r.forEach(u=>wr(c,u,a,!0)),wr(c,t,a)),ze(t)&&i.set(t,c),c}function wr(e,t,n,o=!1){const{mixins:r,extends:i}=t;i&&wr(e,i,n,!0),r&&r.forEach(a=>wr(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const l=gf[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const gf={data:wa,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:mn,directives:mn,watch:_f,provide:wa,inject:yf};function wa(e,t){return t?e?function(){return ot(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function yf(e,t){return mn(Ms(e),Ms(t))}function Ms(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?ot(ot(Object.create(null),e),t):t}function _f(e,t){if(!e)return t;if(!t)return e;const n=ot(Object.create(null),e);for(const o in t)n[o]=Xe(e[o],t[o]);return n}function vf(e,t,n,o=!1){const r={},i={};gr(i,Hr,1),e.propsDefaults=Object.create(null),eu(e,t,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=o?r:Fh(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function wf(e,t,n,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,l=be(r),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(Ir(e.emitsOptions,p))continue;const m=t[p];if(c)if(ye(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const g=It(p);r[g]=Es(c,l,g,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{eu(e,t,r,i)&&(u=!0);let d;for(const f in l)(!t||!ye(t,f)&&((d=An(f))===f||!ye(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(r[f]=Es(c,l,f,void 0,e,!0)):delete r[f]);if(i!==l)for(const f in i)(!t||!ye(t,f)&&!0)&&(delete i[f],u=!0)}u&&Ut(e,"set","$attrs")}function eu(e,t,n,o){const[r,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(ar(c))continue;const u=t[c];let d;r&&ye(r,d=It(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ir(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(i){const c=be(n),u=l||Re;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Es(r,c,f,u[f],e,!ye(u,f))}}return a}function Es(e,t,n,o,r,i){const a=e[n];if(a!=null){const l=ye(a,"default");if(l&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=r;n in u?o=u[n]:(eo(r),o=u[n]=c.call(null,t),Sn())}else o=c}a[0]&&(i&&!l?o=!1:a[1]&&(o===""||o===An(n))&&(o=!0))}return o}function tu(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},l=[];let c=!1;if(!ue(e)){const d=f=>{c=!0;const[p,m]=tu(f,t,!0);ot(a,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return ze(e)&&o.set(e,Nn),Nn;if(se(i))for(let d=0;d<i.length;d++){const f=It(i[d]);ba(f)&&(a[f]=Re)}else if(i)for(const d in i){const f=It(d);if(ba(f)){const p=i[d],m=a[f]=se(p)||ue(p)?{type:p}:p;if(m){const g=Ta(Boolean,m.type),w=Ta(String,m.type);m[0]=g>-1,m[1]=w<0||g<w,(g>-1||ye(m,"default"))&&l.push(f)}}}const u=[a,l];return ze(e)&&o.set(e,u),u}function ba(e){return e[0]!=="$"}function ka(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Sa(e,t){return ka(e)===ka(t)}function Ta(e,t){return se(t)?t.findIndex(n=>Sa(n,e)):ue(t)&&Sa(t,e)?0:-1}const nu=e=>e[0]==="_"||e==="$stable",Mi=e=>se(e)?e.map(Ot):[Ot(e)],bf=(e,t,n)=>{if(t._n)return t;const o=$((...r)=>Mi(t(...r)),n);return o._c=!1,o},ou=(e,t,n)=>{const o=e._ctx;for(const r in e){if(nu(r))continue;const i=e[r];if(ue(i))t[r]=bf(r,i,o);else if(i!=null){const a=Mi(i);t[r]=()=>a}}},ru=(e,t)=>{const n=Mi(t);e.slots.default=()=>n},kf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=be(t),gr(t,"_",n)):ou(t,e.slots={})}else e.slots={},t&&ru(e,t);gr(e.slots,Hr,1)},Sf=(e,t,n)=>{const{vnode:o,slots:r}=e;let i=!0,a=Re;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(ot(r,t),!n&&l===1&&delete r._):(i=!t.$stable,ou(t,r)),a=t}else t&&(ru(e,t),a={default:1});if(i)for(const l in r)!nu(l)&&!(l in a)&&delete r[l]};function su(){return{app:null,config:{isNativeTag:eh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tf=0;function Df(e,t){return function(o,r=null){ue(o)||(o=Object.assign({},o)),r!=null&&!ze(r)&&(r=null);const i=su(),a=new Set;let l=!1;const c=i.app={_uid:Tf++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:Wf,get config(){return i.config},set config(u){},use(u,...d){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(c,...d)):ue(u)&&(a.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,f){if(!l){const p=V(o,r);return p.appContext=i,d&&t?t(p,u):e(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ur(p.component)||p.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c}};return c}}function Fs(e,t,n,o,r=!1){if(se(e)){e.forEach((p,m)=>Fs(p,t&&(se(t)?t[m]:t),n,o,r));return}if(Gn(o)&&!r)return;const i=o.shapeFlag&4?Ur(o.component)||o.component.proxy:o.el,a=r?null:i,{i:l,r:c}=e,u=t&&t.r,d=l.refs===Re?l.refs={}:l.refs,f=l.setupState;if(u!=null&&u!==c&&(Ie(u)?(d[u]=null,ye(f,u)&&(f[u]=null)):Se(u)&&(u.value=null)),ue(c))nn(c,l,12,[a,d]);else{const p=Ie(c),m=Se(c);if(p||m){const g=()=>{if(e.f){const w=p?d[c]:c.value;r?se(w)&&fi(w,i):se(w)?w.includes(i)||w.push(i):p?(d[c]=[i],ye(f,c)&&(f[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else p?(d[c]=a,ye(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(d[e.k]=a))};a?(g.id=-1,Ke(g,n)):g()}}}const Ke=Xh;function xf(e){return $f(e)}function $f(e,t){const n=ih();n.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=Pt,cloneNode:g,insertStaticContent:w}=e,v=(y,_,S,M=null,R=null,z=null,H=!1,L=null,N=!!_.dynamicChildren)=>{if(y===_)return;y&&!uo(y,_)&&(M=Z(y),rt(y,R,z,!0),y=null),_.patchFlag===-2&&(N=!1,_.dynamicChildren=null);const{type:E,ref:ee,shapeFlag:Y}=_;switch(E){case Fi:x(y,_,S,M);break;case ln:T(y,_,S,M);break;case ns:y==null&&D(_,S,M,H);break;case xe:Ve(y,_,S,M,R,z,H,L,N);break;default:Y&1?O(y,_,S,M,R,z,H,L,N):Y&6?qe(y,_,S,M,R,z,H,L,N):(Y&64||Y&128)&&E.process(y,_,S,M,R,z,H,L,N,pe)}ee!=null&&R&&Fs(ee,y&&y.ref,z,_||y,!_)},x=(y,_,S,M)=>{if(y==null)o(_.el=l(_.children),S,M);else{const R=_.el=y.el;_.children!==y.children&&u(R,_.children)}},T=(y,_,S,M)=>{y==null?o(_.el=c(_.children||""),S,M):_.el=y.el},D=(y,_,S,M)=>{[y.el,y.anchor]=w(y.children,_,S,M,y.el,y.anchor)},A=({el:y,anchor:_},S,M)=>{let R;for(;y&&y!==_;)R=p(y),o(y,S,M),y=R;o(_,S,M)},q=({el:y,anchor:_})=>{let S;for(;y&&y!==_;)S=p(y),r(y),y=S;r(_)},O=(y,_,S,M,R,z,H,L,N)=>{H=H||_.type==="svg",y==null?W(_,S,M,R,z,H,L,N):ge(y,_,R,z,H,L,N)},W=(y,_,S,M,R,z,H,L)=>{let N,E;const{type:ee,props:Y,shapeFlag:te,transition:ie,patchFlag:ve,dirs:Ae}=y;if(y.el&&g!==void 0&&ve===-1)N=y.el=g(y.el);else{if(N=y.el=a(y.type,z,Y&&Y.is,Y),te&8?d(N,y.children):te&16&&ae(y.children,N,null,M,R,z&&ee!=="foreignObject",H,L),Ae&&dn(y,null,M,"created"),Y){for(const Ee in Y)Ee!=="value"&&!ar(Ee)&&i(N,Ee,null,Y[Ee],z,y.children,M,R,B);"value"in Y&&i(N,"value",null,Y.value),(E=Y.onVnodeBeforeMount)&&_t(E,M,y)}ne(N,y,y.scopeId,H,M)}Ae&&dn(y,null,M,"beforeMount");const Ce=(!R||R&&!R.pendingBranch)&&ie&&!ie.persisted;Ce&&ie.beforeEnter(N),o(N,_,S),((E=Y&&Y.onVnodeMounted)||Ce||Ae)&&Ke(()=>{E&&_t(E,M,y),Ce&&ie.enter(N),Ae&&dn(y,null,M,"mounted")},R)},ne=(y,_,S,M,R)=>{if(S&&m(y,S),M)for(let z=0;z<M.length;z++)m(y,M[z]);if(R){let z=R.subTree;if(_===z){const H=R.vnode;ne(y,H,H.scopeId,H.slotScopeIds,R.parent)}}},ae=(y,_,S,M,R,z,H,L,N=0)=>{for(let E=N;E<y.length;E++){const ee=y[E]=L?Qt(y[E]):Ot(y[E]);v(null,ee,_,S,M,R,z,H,L)}},ge=(y,_,S,M,R,z,H)=>{const L=_.el=y.el;let{patchFlag:N,dynamicChildren:E,dirs:ee}=_;N|=y.patchFlag&16;const Y=y.props||Re,te=_.props||Re;let ie;S&&hn(S,!1),(ie=te.onVnodeBeforeUpdate)&&_t(ie,S,_,y),ee&&dn(_,y,S,"beforeUpdate"),S&&hn(S,!0);const ve=R&&_.type!=="foreignObject";if(E?_e(y.dynamicChildren,E,L,S,M,ve,z):H||he(y,_,L,null,S,M,ve,z,!1),N>0){if(N&16)Be(L,_,Y,te,S,M,R);else if(N&2&&Y.class!==te.class&&i(L,"class",null,te.class,R),N&4&&i(L,"style",Y.style,te.style,R),N&8){const Ae=_.dynamicProps;for(let Ce=0;Ce<Ae.length;Ce++){const Ee=Ae[Ce],kt=Y[Ee],En=te[Ee];(En!==kt||Ee==="value")&&i(L,Ee,kt,En,R,y.children,S,M,B)}}N&1&&y.children!==_.children&&d(L,_.children)}else!H&&E==null&&Be(L,_,Y,te,S,M,R);((ie=te.onVnodeUpdated)||ee)&&Ke(()=>{ie&&_t(ie,S,_,y),ee&&dn(_,y,S,"updated")},M)},_e=(y,_,S,M,R,z,H)=>{for(let L=0;L<_.length;L++){const N=y[L],E=_[L],ee=N.el&&(N.type===xe||!uo(N,E)||N.shapeFlag&70)?f(N.el):S;v(N,E,ee,null,M,R,z,H,!0)}},Be=(y,_,S,M,R,z,H)=>{if(S!==M){for(const L in M){if(ar(L))continue;const N=M[L],E=S[L];N!==E&&L!=="value"&&i(y,L,E,N,H,_.children,R,z,B)}if(S!==Re)for(const L in S)!ar(L)&&!(L in M)&&i(y,L,S[L],null,H,_.children,R,z,B);"value"in M&&i(y,"value",S.value,M.value)}},Ve=(y,_,S,M,R,z,H,L,N)=>{const E=_.el=y?y.el:l(""),ee=_.anchor=y?y.anchor:l("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:ie}=_;ie&&(L=L?L.concat(ie):ie),y==null?(o(E,S,M),o(ee,S,M),ae(_.children,S,ee,R,z,H,L,N)):Y>0&&Y&64&&te&&y.dynamicChildren?(_e(y.dynamicChildren,te,S,R,z,H,L),(_.key!=null||R&&_===R.subTree)&&Ei(y,_,!0)):he(y,_,S,ee,R,z,H,L,N)},qe=(y,_,S,M,R,z,H,L,N)=>{_.slotScopeIds=L,y==null?_.shapeFlag&512?R.ctx.activate(_,S,M,H,N):Me(_,S,M,R,z,H,N):Le(y,_,N)},Me=(y,_,S,M,R,z,H)=>{const L=y.component=zf(y,M,R);if(Kc(y)&&(L.ctx.renderer=pe),jf(L),L.asyncDep){if(R&&R.registerDep(L,J),!y.el){const N=L.subTree=V(ln);T(null,N,_,S)}return}J(L,y,_,S,R,z,H)},Le=(y,_,S)=>{const M=_.component=y.component;if(Zh(y,_,S))if(M.asyncDep&&!M.asyncResolved){re(M,_,S);return}else M.next=_,Hh(M.update),M.update();else _.el=y.el,M.vnode=_},J=(y,_,S,M,R,z,H)=>{const L=()=>{if(y.isMounted){let{next:ee,bu:Y,u:te,parent:ie,vnode:ve}=y,Ae=ee,Ce;hn(y,!1),ee?(ee.el=ve.el,re(y,ee,H)):ee=ve,Y&&Hn(Y),(Ce=ee.props&&ee.props.onVnodeBeforeUpdate)&&_t(Ce,ie,ee,ve),hn(y,!0);const Ee=Xr(y),kt=y.subTree;y.subTree=Ee,v(kt,Ee,f(kt.el),Z(kt),y,R,z),ee.el=Ee.el,Ae===null&&Qh(y,Ee.el),te&&Ke(te,R),(Ce=ee.props&&ee.props.onVnodeUpdated)&&Ke(()=>_t(Ce,ie,ee,ve),R)}else{let ee;const{el:Y,props:te}=_,{bm:ie,m:ve,parent:Ae}=y,Ce=Gn(_);if(hn(y,!1),ie&&Hn(ie),!Ce&&(ee=te&&te.onVnodeBeforeMount)&&_t(ee,Ae,_),hn(y,!0),Y&&oe){const Ee=()=>{y.subTree=Xr(y),oe(Y,y.subTree,y,R,null)};Ce?_.type.__asyncLoader().then(()=>!y.isUnmounted&&Ee()):Ee()}else{const Ee=y.subTree=Xr(y);v(null,Ee,S,M,y,R,z),_.el=Ee.el}if(ve&&Ke(ve,R),!Ce&&(ee=te&&te.onVnodeMounted)){const Ee=_;Ke(()=>_t(ee,Ae,Ee),R)}(_.shapeFlag&256||Ae&&Gn(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&Ke(y.a,R),y.isMounted=!0,_=S=M=null}},N=y.effect=new yi(L,()=>xi(E),y.scope),E=y.update=()=>N.run();E.id=y.uid,hn(y,!0),E()},re=(y,_,S)=>{_.component=y;const M=y.vnode.props;y.vnode=_,y.next=null,wf(y,_.props,M,S),Sf(y,_.children,S),ro(),ma(),so()},he=(y,_,S,M,R,z,H,L,N=!1)=>{const E=y&&y.children,ee=y?y.shapeFlag:0,Y=_.children,{patchFlag:te,shapeFlag:ie}=_;if(te>0){if(te&128){it(E,Y,S,M,R,z,H,L,N);return}else if(te&256){$e(E,Y,S,M,R,z,H,L,N);return}}ie&8?(ee&16&&B(E,R,z),Y!==E&&d(S,Y)):ee&16?ie&16?it(E,Y,S,M,R,z,H,L,N):B(E,R,z,!0):(ee&8&&d(S,""),ie&16&&ae(Y,S,M,R,z,H,L,N))},$e=(y,_,S,M,R,z,H,L,N)=>{y=y||Nn,_=_||Nn;const E=y.length,ee=_.length,Y=Math.min(E,ee);let te;for(te=0;te<Y;te++){const ie=_[te]=N?Qt(_[te]):Ot(_[te]);v(y[te],ie,S,null,R,z,H,L,N)}E>ee?B(y,R,z,!0,!1,Y):ae(_,S,M,R,z,H,L,N,Y)},it=(y,_,S,M,R,z,H,L,N)=>{let E=0;const ee=_.length;let Y=y.length-1,te=ee-1;for(;E<=Y&&E<=te;){const ie=y[E],ve=_[E]=N?Qt(_[E]):Ot(_[E]);if(uo(ie,ve))v(ie,ve,S,null,R,z,H,L,N);else break;E++}for(;E<=Y&&E<=te;){const ie=y[Y],ve=_[te]=N?Qt(_[te]):Ot(_[te]);if(uo(ie,ve))v(ie,ve,S,null,R,z,H,L,N);else break;Y--,te--}if(E>Y){if(E<=te){const ie=te+1,ve=ie<ee?_[ie].el:M;for(;E<=te;)v(null,_[E]=N?Qt(_[E]):Ot(_[E]),S,ve,R,z,H,L,N),E++}}else if(E>te)for(;E<=Y;)rt(y[E],R,z,!0),E++;else{const ie=E,ve=E,Ae=new Map;for(E=ve;E<=te;E++){const at=_[E]=N?Qt(_[E]):Ot(_[E]);at.key!=null&&Ae.set(at.key,E)}let Ce,Ee=0;const kt=te-ve+1;let En=!1,ra=0;const co=new Array(kt);for(E=0;E<kt;E++)co[E]=0;for(E=ie;E<=Y;E++){const at=y[E];if(Ee>=kt){rt(at,R,z,!0);continue}let Ft;if(at.key!=null)Ft=Ae.get(at.key);else for(Ce=ve;Ce<=te;Ce++)if(co[Ce-ve]===0&&uo(at,_[Ce])){Ft=Ce;break}Ft===void 0?rt(at,R,z,!0):(co[Ft-ve]=E+1,Ft>=ra?ra=Ft:En=!0,v(at,_[Ft],S,null,R,z,H,L,N),Ee++)}const sa=En?Pf(co):Nn;for(Ce=sa.length-1,E=kt-1;E>=0;E--){const at=ve+E,Ft=_[at],ia=at+1<ee?_[at+1].el:M;co[E]===0?v(null,Ft,S,ia,R,z,H,L,N):En&&(Ce<0||E!==sa[Ce]?Ge(Ft,S,ia,2):Ce--)}}},Ge=(y,_,S,M,R=null)=>{const{el:z,type:H,transition:L,children:N,shapeFlag:E}=y;if(E&6){Ge(y.component.subTree,_,S,M);return}if(E&128){y.suspense.move(_,S,M);return}if(E&64){H.move(y,_,S,pe);return}if(H===xe){o(z,_,S);for(let Y=0;Y<N.length;Y++)Ge(N[Y],_,S,M);o(y.anchor,_,S);return}if(H===ns){A(y,_,S);return}if(M!==2&&E&1&&L)if(M===0)L.beforeEnter(z),o(z,_,S),Ke(()=>L.enter(z),R);else{const{leave:Y,delayLeave:te,afterLeave:ie}=L,ve=()=>o(z,_,S),Ae=()=>{Y(z,()=>{ve(),ie&&ie()})};te?te(z,ve,Ae):Ae()}else o(z,_,S)},rt=(y,_,S,M=!1,R=!1)=>{const{type:z,props:H,ref:L,children:N,dynamicChildren:E,shapeFlag:ee,patchFlag:Y,dirs:te}=y;if(L!=null&&Fs(L,null,S,y,!0),ee&256){_.ctx.deactivate(y);return}const ie=ee&1&&te,ve=!Gn(y);let Ae;if(ve&&(Ae=H&&H.onVnodeBeforeUnmount)&&_t(Ae,_,y),ee&6)G(y.component,S,M);else{if(ee&128){y.suspense.unmount(S,M);return}ie&&dn(y,null,_,"beforeUnmount"),ee&64?y.type.remove(y,_,S,R,pe,M):E&&(z!==xe||Y>0&&Y&64)?B(E,_,S,!1,!0):(z===xe&&Y&384||!R&&ee&16)&&B(N,_,S),M&&un(y)}(ve&&(Ae=H&&H.onVnodeUnmounted)||ie)&&Ke(()=>{Ae&&_t(Ae,_,y),ie&&dn(y,null,_,"unmounted")},S)},un=y=>{const{type:_,el:S,anchor:M,transition:R}=y;if(_===xe){C(S,M);return}if(_===ns){q(y);return}const z=()=>{r(S),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(y.shapeFlag&1&&R&&!R.persisted){const{leave:H,delayLeave:L}=R,N=()=>H(S,z);L?L(y.el,z,N):N()}else z()},C=(y,_)=>{let S;for(;y!==_;)S=p(y),r(y),y=S;r(_)},G=(y,_,S)=>{const{bum:M,scope:R,update:z,subTree:H,um:L}=y;M&&Hn(M),R.stop(),z&&(z.active=!1,rt(H,y,_,S)),L&&Ke(L,_),Ke(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},B=(y,_,S,M=!1,R=!1,z=0)=>{for(let H=z;H<y.length;H++)rt(y[H],_,S,M,R)},Z=y=>y.shapeFlag&6?Z(y.component.subTree):y.shapeFlag&128?y.suspense.next():p(y.anchor||y.el),we=(y,_,S)=>{y==null?_._vnode&&rt(_._vnode,null,null,!0):v(_._vnode||null,y,_,null,null,null,S),ma(),Bc(),_._vnode=y},pe={p:v,um:rt,m:Ge,r:un,mt:Me,mc:ae,pc:he,pbc:_e,n:Z,o:e};let le,oe;return t&&([le,oe]=t(pe)),{render:we,hydrate:le,createApp:Df(we,le)}}function hn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ei(e,t,n=!1){const o=e.children,r=t.children;if(se(o)&&se(r))for(let i=0;i<o.length;i++){const a=o[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Qt(r[i]),l.el=a.el),n||Ei(a,l))}}function Pf(e){const t=e.slice(),n=[0];let o,r,i,a,l;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){t[o]=r,n.push(o);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<u?i=l+1:a=l;u<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}const Af=e=>e.__isTeleport,bo=e=>e&&(e.disabled||e.disabled===""),Da=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Os=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},Cf={__isTeleport:!0,process(e,t,n,o,r,i,a,l,c,u){const{mc:d,pc:f,pbc:p,o:{insert:m,querySelector:g,createText:w,createComment:v}}=u,x=bo(t.props);let{shapeFlag:T,children:D,dynamicChildren:A}=t;if(e==null){const q=t.el=w(""),O=t.anchor=w("");m(q,n,o),m(O,n,o);const W=t.target=Os(t.props,g),ne=t.targetAnchor=w("");W&&(m(ne,W),a=a||Da(W));const ae=(ge,_e)=>{T&16&&d(D,ge,_e,r,i,a,l,c)};x?ae(n,O):W&&ae(W,ne)}else{t.el=e.el;const q=t.anchor=e.anchor,O=t.target=e.target,W=t.targetAnchor=e.targetAnchor,ne=bo(e.props),ae=ne?n:O,ge=ne?q:W;if(a=a||Da(O),A?(p(e.dynamicChildren,A,ae,r,i,a,l),Ei(e,t,!0)):c||f(e,t,ae,ge,r,i,a,l,!1),x)ne||nr(t,n,q,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=Os(t.props,g);_e&&nr(t,_e,null,u,0)}else ne&&nr(t,O,W,u,1)}},remove(e,t,n,o,{um:r,o:{remove:i}},a){const{shapeFlag:l,children:c,anchor:u,targetAnchor:d,target:f,props:p}=e;if(f&&i(d),(a||!bo(p))&&(i(u),l&16))for(let m=0;m<c.length;m++){const g=c[m];r(g,t,n,!0,!!g.dynamicChildren)}},move:nr,hydrate:Rf};function nr(e,t,n,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:u,props:d}=e,f=i===2;if(f&&o(a,t,n),(!f||bo(d))&&c&16)for(let p=0;p<u.length;p++)r(u[p],t,n,2);f&&o(l,t,n)}function Rf(e,t,n,o,r,i,{o:{nextSibling:a,parentNode:l,querySelector:c}},u){const d=t.target=Os(t.props,c);if(d){const f=d._lpa||d.firstChild;if(t.shapeFlag&16)if(bo(t.props))t.anchor=u(a(e),t,l(e),n,o,r,i),t.targetAnchor=f;else{t.anchor=a(e);let p=f;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(f,t,d,n,o,r,i)}}return t.anchor&&a(t.anchor)}const Mf=Cf,xe=Symbol(void 0),Fi=Symbol(void 0),ln=Symbol(void 0),ns=Symbol(void 0),ko=[];let xt=null;function k(e=!1){ko.push(xt=e?null:[])}function Ef(){ko.pop(),xt=ko[ko.length-1]||null}let Lo=1;function xa(e){Lo+=e}function iu(e){return e.dynamicChildren=Lo>0?xt||Nn:null,Ef(),Lo>0&&xt&&xt.push(e),e}function K(e,t,n,o,r,i){return iu(s(e,t,n,o,r,i,!0))}function j(e,t,n,o,r){return iu(V(e,t,n,o,r,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function uo(e,t){return e.type===t.type&&e.key===t.key}const Hr="__vInternal",au=({key:e})=>e!=null?e:null,lr=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||Se(e)||ue(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,o=0,r=null,i=e===xe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&au(t),ref:t&&lr(t),scopeId:Br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(Oi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),Lo>0&&!a&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const V=Ff;function Ff(e,t=null,n=null,o=0,r=null,i=!1){if((!e||e===df)&&(e=ln),Xn(e)){const l=Pn(e,t,!0);return n&&Oi(l,n),Lo>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(e)]=l:xt.push(l)),l.patchFlag|=-2,l}if(Bf(e)&&(e=e.__vccOpts),t){t=Q(t);let{class:l,style:c}=t;l&&!Ie(l)&&(t.class=je(l)),ze(c)&&(Fc(c)&&!se(c)&&(c=ot({},c)),t.style=nt(c))}const a=Ie(e)?1:Wc(e)?128:Af(e)?64:ze(e)?4:ue(e)?2:0;return s(e,t,n,o,r,a,i,!0)}function Q(e){return e?Fc(e)||Hr in e?ot({},e):e:null}function Pn(e,t,n=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,l=t?br(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&au(l),ref:t&&t.ref?n&&r?se(r)?r.concat(lr(t)):[r,lr(t)]:lr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor}}function h(e=" ",t=0){return V(Fi,null,e,t)}function me(e="",t=!1){return t?(k(),j(ln,null,e)):V(ln,null,e)}function Ot(e){return e==null||typeof e=="boolean"?V(ln):se(e)?V(xe,null,e.slice()):typeof e=="object"?Qt(e):V(Fi,null,String(e))}function Qt(e){return e.el===null||e.memo?e:Pn(e)}function Oi(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Oi(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Hr in t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),o&64?(n=16,t=[h(t)]):n=8);e.children=t,e.shapeFlag|=n}function br(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=je([t.class,o.class]));else if(r==="style")t.style=nt([t.style,o.style]);else if(Er(r)){const i=t[r],a=o[r];a&&i!==a&&!(se(i)&&i.includes(a))&&(t[r]=i?[].concat(i,a):a)}else r!==""&&(t[r]=o[r])}return t}function _t(e,t,n,o=null){At(e,t,7,[n,o])}const Of=su();let Lf=0;function zf(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||Of,i={uid:Lf++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tu(o,r),emitsOptions:Nc(o,r),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:o.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gh.bind(null,i),e.ce&&e.ce(i),i}let Ue=null;const Cn=()=>Ue||Ze,eo=e=>{Ue=e,e.scope.on()},Sn=()=>{Ue&&Ue.scope.off(),Ue=null};function lu(e){return e.vnode.shapeFlag&4}let zo=!1;function jf(e,t=!1){zo=t;const{props:n,children:o}=e.vnode,r=lu(e);vf(e,n,r,t),kf(e,o);const i=r?qf(e,t):void 0;return zo=!1,i}function qf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jr(new Proxy(e.ctx,ff));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?uu(e):null;eo(e),ro();const i=nn(o,e,0,[e.props,r]);if(so(),Sn(),_c(i)){if(i.then(Sn,Sn),t)return i.then(a=>{$a(e,a,t)}).catch(a=>{qr(a,e,0)});e.asyncDep=i}else $a(e,i,t)}else cu(e,t)}function $a(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ze(t)&&(e.setupState=Lc(t)),cu(e,n)}let Pa;function cu(e,t,n){const o=e.type;if(!e.render){if(!t&&Pa&&!o.render){const r=o.template||Ri(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,u=ot(ot({isCustomElement:i,delimiters:l},a),c);o.render=Pa(r,u)}}e.render=o.render||Pt}eo(e),ro(),pf(e),so(),Sn()}function If(e){return new Proxy(e.attrs,{get(t,n){return yt(e,"get","$attrs"),t[n]}})}function uu(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=If(e))},slots:e.slots,emit:e.emit,expose:t}}function Ur(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Lc(jr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vr)return vr[n](e)}}))}function Ls(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function Bf(e){return ue(e)&&"__vccOpts"in e}const P=(e,t)=>Vh(e,t,zo);function Vf(){return Nf().slots}function Nf(){const e=Cn();return e.setupContext||(e.setupContext=uu(e))}function pt(e,t,n){const o=arguments.length;return o===2?ze(t)&&!se(t)?Xn(t)?V(e,null,[t]):V(e,t):V(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Xn(n)&&(n=[n]),V(e,t,n))}const Wf="3.2.39",Hf="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,Aa=yn&&yn.createElement("template"),Uf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?yn.createElementNS(Hf,e):yn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,r,i){const a=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Aa.innerHTML=o?`<svg>${e}</svg>`:e;const l=Aa.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Kf(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Gf(e,t,n){const o=e.style,r=Ie(n);if(n&&!r){for(const i in n)zs(o,i,n[i]);if(t&&!Ie(t))for(const i in t)n[i]==null&&zs(o,i,"")}else{const i=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const Ca=/\s*!important$/;function zs(e,t,n){if(se(n))n.forEach(o=>zs(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Jf(e,t);Ca.test(n)?e.setProperty(An(o),n.replace(Ca,""),"important"):e[o]=n}}const Ra=["Webkit","Moz","ms"],os={};function Jf(e,t){const n=os[t];if(n)return n;let o=It(t);if(o!=="filter"&&o in e)return os[t]=o;o=Lr(o);for(let r=0;r<Ra.length;r++){const i=Ra[r]+o;if(i in e)return os[t]=i}return t}const Ma="http://www.w3.org/1999/xlink";function Yf(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ma,t.slice(6,t.length)):e.setAttributeNS(Ma,t,n);else{const i=Gd(t);n==null||i&&!mc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Zf(e,t,n,o,r,i,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=mc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[du,Qf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let js=0;const Xf=Promise.resolve(),ep=()=>{js=0},tp=()=>js||(Xf.then(ep),js=du());function zn(e,t,n,o){e.addEventListener(t,n,o)}function np(e,t,n,o){e.removeEventListener(t,n,o)}function op(e,t,n,o,r=null){const i=e._vei||(e._vei={}),a=i[t];if(o&&a)a.value=o;else{const[l,c]=rp(t);if(o){const u=i[t]=sp(o,r);zn(e,l,u,c)}else a&&(np(e,l,a,c),i[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function rp(e){let t;if(Ea.test(e)){t={};let o;for(;o=e.match(Ea);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):An(e.slice(2)),t]}function sp(e,t){const n=o=>{const r=o.timeStamp||du();(Qf||r>=n.attached-1)&&At(ip(o,n.value),t,5,[o])};return n.value=e,n.attached=tp(),n}function ip(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const Fa=/^on[a-z]/,ap=(e,t,n,o,r=!1,i,a,l,c)=>{t==="class"?Kf(e,o,r):t==="style"?Gf(e,n,o):Er(t)?hi(t)||op(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lp(e,t,o,r))?Zf(e,t,o,i,a,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Yf(e,t,o,r))};function lp(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Fa.test(t)&&ue(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fa.test(t)&&Ie(n)?!1:t in e}const Oa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>Hn(t,n):t};function cp(e){e.target.composing=!0}function La(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const up={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=Oa(r);const i=o||r.props&&r.props.type==="number";zn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Ts(l)),e._assign(l)}),n&&zn(e,"change",()=>{e.value=e.value.trim()}),t||(zn(e,"compositionstart",cp),zn(e,"compositionend",La),zn(e,"change",La))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},i){if(e._assign=Oa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&Ts(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},dp={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},za=(e,t)=>n=>{if(!("key"in n))return;const o=An(n.key);if(t.some(r=>r===o||dp[r]===o))return e(n)},hu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ho(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),ho(e,!0),o.enter(e)):o.leave(e,()=>{ho(e,!1)}):ho(e,t))},beforeUnmount(e,{value:t}){ho(e,t)}};function ho(e,t){e.style.display=t?e._vod:"none"}const hp=ot({patchProp:ap},Uf);let ja;function fp(){return ja||(ja=xf(hp))}const pp=(...e)=>{const t=fp().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=mp(o);if(!r)return;const i=t._component;!ue(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function mp(e){return Ie(e)?document.querySelector(e):e}var gp=Object.defineProperty,qa=Object.getOwnPropertySymbols,yp=Object.prototype.hasOwnProperty,_p=Object.prototype.propertyIsEnumerable,Ia=(e,t,n)=>t in e?gp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vp=(e,t)=>{for(var n in t||(t={}))yp.call(t,n)&&Ia(e,n,t[n]);if(qa)for(var n of qa(t))_p.call(t,n)&&Ia(e,n,t[n]);return e},fu="usehead",Ba="head:count",rs="data-head-attrs",pu="data-meta-body",wp=(e,t,n)=>{const o=n.createElement(e);for(const r of Object.keys(t))if(r==="body"&&t.body===!0)o.setAttribute(pu,"true");else{let i=t[r];if(r==="key"||i===!1)continue;r==="children"?o.textContent=i:o.setAttribute(r,i)}return o};function Va(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var bp=e=>{const t=["key","id","name","property"];for(const n of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(o!==void 0)return{name:n,value:o}}},kp=()=>{const e=F(fu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Sp=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Tp=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(b(t)),Dp=e=>{const t=[],n=Object.keys(e);for(const o of n)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:vp({key:"default"},e[o])});break;default:if(Sp.includes(o)){const r=e[o];Array.isArray(r)?r.forEach(i=>{t.push({tag:o,props:i})}):r&&t.push({tag:o,props:r})}break}return t},Na=(e,t)=>{const n=e.getAttribute(rs);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const o=[];for(const r in t){const i=t[r];i!=null&&(i===!1?e.removeAttribute(r):e.setAttribute(r,i),o.push(r))}o.length?e.setAttribute(rs,o.join(",")):e.removeAttribute(rs)},xp=(e=window.document,t,n)=>{var o,r;const i=e.head,a=e.body;let l=i.querySelector(`meta[name="${Ba}"]`),c=a.querySelectorAll(`[${pu}]`);const u=l?Number(l.getAttribute("content")):0,d=[],f=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===t&&f.push(c[m]);if(l)for(let m=0,g=l.previousElementSibling;m<u;m++,g=(g==null?void 0:g.previousElementSibling)||null)((r=g==null?void 0:g.tagName)==null?void 0:r.toLowerCase())===t&&d.push(g);else l=e.createElement("meta"),l.setAttribute("name",Ba),l.setAttribute("content","0"),i.append(l);let p=n.map(m=>{var g;return{element:wp(m.tag,m.props,e),body:(g=m.props.body)!=null?g:!1}});p=p.filter(m=>{for(let g=0;g<d.length;g++){const w=d[g];if(Va(w,m.element))return d.splice(g,1),!1}for(let g=0;g<f.length;g++){const w=f[g];if(Va(w,m.element))return f.splice(g,1),!1}return!0}),f.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),d.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),p.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):i.insertBefore(m.element,l)}),l.setAttribute("content",""+(u-d.length+p.filter(m=>!m.body).length))},$p=e=>{let t=[],n=new Set;e&&t.push(Rt(e));const o={install(r){r.config.globalProperties.$head=o,r.provide(fu,o)},get headTags(){const r=[],i=t.map(a=>b(a).titleTemplate).reverse().find(a=>a!=null);return t.forEach(a=>{Dp(b(a)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=bp(c.props);if(u){let d=-1;for(let f=0;f<r.length;f++){const p=r[f],m=p.props[u.name],g=c.props[u.name];if(p.tag===c.tag&&m===g){d=f;break}}d!==-1&&r.splice(d,1)}}i&&c.tag==="title"&&(c.props.children=Tp(i,c.props.children)),r.push(c)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(i=>i!==r)},updateDOM(r=window.document){let i,a={},l={};const c={};for(const d of o.headTags){if(d.tag==="title"){i=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(a,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(l,d.props);continue}c[d.tag]=c[d.tag]||[],c[d.tag].push(d)}i!==void 0&&(r.title=i),Na(r.documentElement,a),Na(r.body,l);const u=new Set([...Object.keys(c),...n]);for(const d of u)xp(r,d,c[d]||[]);n.clear(),Object.keys(c).forEach(d=>n.add(d))}};return o},Pp=typeof window<"u",Ap=e=>{const t=kp(),n=U(e);t.addHeadObjs(n),Pp&&(Vr(()=>{t.updateDOM()}),Wr(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const cr=Symbol("v-click-clicks"),jn=Symbol("v-click-clicks-elements"),qs=Symbol("v-click-clicks-order-map"),ur=Symbol("v-click-clicks-disabled"),mu=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),Cp=Symbol("slidev-route"),Rp=Symbol("slidev-slide-context"),Fn="slidev-vclick-target",ss="slidev-vclick-hidden",Mp="slidev-vclick-fade",is="slidev-vclick-hidden-explicitly",fo="slidev-vclick-current",or="slidev-vclick-prior";function Wa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ep(e){return e!=null}function Fp(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(Ep))}const vn={theme:"default",title:"European Cruise 2022",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"european-cruise-2022",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},ke=vn;var fc;const on=(fc=ke.aspectRatio)!=null?fc:16/9;var pc;const Tn=(pc=ke.canvasWidth)!=null?pc:980,gu=Math.round(Tn/on),yu=P(()=>Fp(ke.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Fe({page:0,clicks:0});let Op=[],Lp=[];bt(Rn,"$syncUp",!0);bt(Rn,"$syncDown",!0);bt(Rn,"$paused",!1);bt(Rn,"$onSet",e=>Op.push(e));bt(Rn,"$onPatch",e=>Lp.push(e));bt(Rn,"$patch",async()=>!1);function _u(e,t,n=!1){const o=[];let r=!1,i=!1,a,l;const c=Fe(t);function u(m){o.push(m)}function d(m,g){clearTimeout(a),r=!0,c[m]=g,a=setTimeout(()=>r=!1,0)}function f(m){r||(clearTimeout(l),i=!0,Object.entries(m).forEach(([g,w])=>{c[g]=w}),l=setTimeout(()=>i=!1,0))}function p(m){let g;n?n&&window.addEventListener("storage",v=>{v&&v.key===m&&v.newValue&&f(JSON.parse(v.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",v=>f(v.data)));function w(){!n&&g&&!i?g.postMessage(be(c)):n&&!i&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(v=>v(c))}if(fe(c,w,{deep:!0}),n){const v=window.localStorage.getItem(m);v&&f(JSON.parse(v))}}return{init:p,onPatch:u,patch:d,state:c}}const{init:zp,onPatch:jp,patch:Ha,state:as}=_u(Rn,{page:1,clicks:0}),Mn=Fe({});let qp=[],Ip=[];bt(Mn,"$syncUp",!0);bt(Mn,"$syncDown",!0);bt(Mn,"$paused",!1);bt(Mn,"$onSet",e=>qp.push(e));bt(Mn,"$onPatch",e=>Ip.push(e));bt(Mn,"$patch",async()=>!1);const{init:Bp,onPatch:Vp,patch:vu,state:kr}=_u(Mn,{},!1),Np="modulepreload",Wp=function(e){return"/"+e},Ua={},io=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=Wp(r),r in Ua)return;Ua[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Np,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Ka;const Kt=typeof window<"u",Hp=e=>typeof e<"u",Up=Object.prototype.toString,Sr=e=>typeof e=="function",Kp=e=>typeof e=="number",wu=e=>typeof e=="string",Is=e=>Up.call(e)==="[object Object]",Bs=()=>+Date.now(),Dn=()=>{};Kt&&((Ka=window==null?void 0:window.navigator)==null?void 0:Ka.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ft(e){return typeof e=="function"?e():b(e)}function Gp(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const bu=e=>e();function Jp(e=bu){const t=U(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...i)=>{t.value&&e(...i)}}}function Yp(e){return e}function Zp(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(o.length),i=parseFloat(o)+t;return Number.isNaN(i)?e:i+r}function Qp(e,t){let n,o,r;const i=U(!0),a=()=>{i.value=!0,r()};fe(e,a,{flush:"sync"});const l=Sr(t)?t:t.get,c=Sr(t)?void 0:t.set,u=zc((d,f)=>(o=d,r=f,{get(){return i.value&&(n=l(),i.value=!1),o(),n},set(p){c==null||c(p)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cn(e){return kc()?(Sc(e),!0):!1}function Xp(e){if(!Se(e))return Fe(e);const t=new Proxy({},{get(n,o,r){return b(Reflect.get(e.value,o,r))},set(n,o,r){return Se(e.value[o])&&!Se(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fe(t)}function em(e){return typeof e=="function"?P(e):U(e)}var tm=Object.defineProperty,nm=Object.defineProperties,om=Object.getOwnPropertyDescriptors,Ga=Object.getOwnPropertySymbols,rm=Object.prototype.hasOwnProperty,sm=Object.prototype.propertyIsEnumerable,Ja=(e,t,n)=>t in e?tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,im=(e,t)=>{for(var n in t||(t={}))rm.call(t,n)&&Ja(e,n,t[n]);if(Ga)for(var n of Ga(t))sm.call(t,n)&&Ja(e,n,t[n]);return e},am=(e,t)=>nm(e,om(t));function lm(e){if(!Se(e))return jh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=zc(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[n]=o,e.value=r}else{const r=am(im({},e.value),{[n]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function cm(e,t=!0){Cn()?Yc(e):t?e():Ye(e)}function ku(e,t=!0){Cn()?Ho(e):t?e():Ye(e)}function um(e){Cn()&&Ai(e)}function dm(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:r=!1}=n;let i=null;const a=U(!1);function l(){i&&(clearInterval(i),i=null)}function c(){a.value=!1,l()}function u(){b(t)<=0||(a.value=!0,r&&e(),l(),i=setInterval(e,ft(t)))}if(o&&Kt&&u(),Se(t)){const d=fe(t,()=>{a.value&&Kt&&u()});cn(d)}return cn(c),{isActive:a,pause:c,resume:u}}function Su(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=Se(e),i=U(e);function a(l){if(arguments.length)return i.value=l,i.value;{const c=ft(n);return i.value=i.value===c?ft(o):c,i.value}}return r?a:[i,a]}var Ya=Object.getOwnPropertySymbols,hm=Object.prototype.hasOwnProperty,fm=Object.prototype.propertyIsEnumerable,pm=(e,t)=>{var n={};for(var o in e)hm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ya)for(var o of Ya(e))t.indexOf(o)<0&&fm.call(e,o)&&(n[o]=e[o]);return n};function mm(e,t,n={}){const o=n,{eventFilter:r=bu}=o,i=pm(o,["eventFilter"]);return fe(e,Gp(r,t),i)}var gm=Object.defineProperty,ym=Object.defineProperties,_m=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertySymbols,Tu=Object.prototype.hasOwnProperty,Du=Object.prototype.propertyIsEnumerable,Za=(e,t,n)=>t in e?gm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vm=(e,t)=>{for(var n in t||(t={}))Tu.call(t,n)&&Za(e,n,t[n]);if(Tr)for(var n of Tr(t))Du.call(t,n)&&Za(e,n,t[n]);return e},wm=(e,t)=>ym(e,_m(t)),bm=(e,t)=>{var n={};for(var o in e)Tu.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Tr)for(var o of Tr(e))t.indexOf(o)<0&&Du.call(e,o)&&(n[o]=e[o]);return n};function km(e,t,n={}){const o=n,{eventFilter:r}=o,i=bm(o,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:u}=Jp(r);return{stop:mm(e,t,wm(vm({},i),{eventFilter:a})),pause:l,resume:c,isActive:u}}function $t(e){var t;const n=ft(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Qe=Kt?window:void 0,Sm=Kt?window.document:void 0;function de(...e){let t,n,o,r;if(wu(e[0])?([n,o,r]=e,t=Qe):[t,n,o,r]=e,!t)return Dn;let i=Dn;const a=fe(()=>$t(t),c=>{i(),c&&(c.addEventListener(n,o,r),i=()=>{c.removeEventListener(n,o,r),i=Dn})},{immediate:!0,flush:"post"}),l=()=>{a(),i()};return cn(l),l}function Tm(e,t,n={}){const{window:o=Qe,ignore:r,capture:i=!0,detectIframe:a=!1}=n;if(!o)return;const l=U(!0);let c;const u=p=>{o.clearTimeout(c);const m=$t(e),g=p.composedPath();!m||m===p.target||g.includes(m)||!l.value||r&&r.length>0&&r.some(w=>{const v=$t(w);return v&&(p.target===v||g.includes(v))})||t(p)},d=[de(o,"click",u,{passive:!0,capture:i}),de(o,"pointerdown",p=>{const m=$t(e);l.value=!!m&&!p.composedPath().includes(m)},{passive:!0}),de(o,"pointerup",p=>{if(p.button===0){const m=p.composedPath();p.composedPath=()=>m,c=o.setTimeout(()=>u(p),50)}},{passive:!0}),a&&de(o,"blur",p=>{var m;const g=$t(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(p)})].filter(Boolean);return()=>d.forEach(p=>p())}const Dm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function xm(e,t,n={}){const{target:o=Qe,eventName:r="keydown",passive:i=!1}=n,a=Dm(e);return de(o,r,c=>{a(c)&&t(c)},i)}function $m(e={}){const{window:t=Qe}=e,n=Qp(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(de(t,"blur",n.trigger,!0),de(t,"focus",n.trigger,!0)),n}function Kr(e,t=!1){const n=U(),o=()=>n.value=Boolean(e());return o(),ku(o,t),n}function qn(e,t={}){const{window:n=Qe}=t,o=Kr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=U(!1),a=()=>{!o.value||(r||(r=n.matchMedia(e)),i.value=r.matches)};return cm(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),cn(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),i}const Pm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Am=Object.defineProperty,Qa=Object.getOwnPropertySymbols,Cm=Object.prototype.hasOwnProperty,Rm=Object.prototype.propertyIsEnumerable,Xa=(e,t,n)=>t in e?Am(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mm=(e,t)=>{for(var n in t||(t={}))Cm.call(t,n)&&Xa(e,n,t[n]);if(Qa)for(var n of Qa(t))Rm.call(t,n)&&Xa(e,n,t[n]);return e};function Em(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Zp(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Qe}=t;function r(l){return o?o.matchMedia(l).matches:!1}const i=l=>qn(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>i(c),enumerable:!0,configurable:!0}),l),{});return Mm({greater(l){return qn(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:i,smaller(l){return qn(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return qn(`(max-width: ${n(l)})`,t)},between(l,c){return qn(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return r(`(max-width: ${n(l)})`)},isInBetween(l,c){return r(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},a)}function Fm(e){return JSON.parse(JSON.stringify(e))}const Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ns="__vueuse_ssr_handlers__";Vs[Ns]=Vs[Ns]||{};const Om=Vs[Ns];function Lm(e,t){return Om[e]||t}function zm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var jm=Object.defineProperty,el=Object.getOwnPropertySymbols,qm=Object.prototype.hasOwnProperty,Im=Object.prototype.propertyIsEnumerable,tl=(e,t,n)=>t in e?jm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nl=(e,t)=>{for(var n in t||(t={}))qm.call(t,n)&&tl(e,n,t[n]);if(el)for(var n of el(t))Im.call(t,n)&&tl(e,n,t[n]);return e};const Bm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Et(e,t,n,o={}){var r;const{flush:i="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:f=Qe,eventFilter:p,onError:m=W=>{console.error(W)}}=o,g=(d?Rt:U)(t);if(!n)try{n=Lm("getDefaultStorage",()=>{var W;return(W=Qe)==null?void 0:W.localStorage})()}catch(W){m(W)}if(!n)return g;const w=ft(t),v=zm(w),x=(r=o.serializer)!=null?r:Bm[v],{pause:T,resume:D}=km(g,()=>A(g.value),{flush:i,deep:a,eventFilter:p});return f&&l&&de(f,"storage",O),O(),g;function A(W){try{W==null?n.removeItem(e):n.setItem(e,x.write(W))}catch(ne){m(ne)}}function q(W){if(!(W&&W.key!==e)){T();try{const ne=W?W.newValue:n.getItem(e);if(ne==null)return c&&w!==null&&n.setItem(e,x.write(w)),w;if(!W&&u){const ae=x.read(ne);return Sr(u)?u(ae,w):v==="object"&&!Array.isArray(ae)?nl(nl({},w),ae):ae}else return typeof ne!="string"?ne:x.read(ne)}catch(ne){m(ne)}finally{D()}}}function O(W){W&&W.key!==e||(g.value=q(W))}}function Vm(e){return qn("(prefers-color-scheme: dark)",e)}var Nm=Object.defineProperty,Wm=Object.defineProperties,Hm=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,Um=Object.prototype.hasOwnProperty,Km=Object.prototype.propertyIsEnumerable,rl=(e,t,n)=>t in e?Nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gm=(e,t)=>{for(var n in t||(t={}))Um.call(t,n)&&rl(e,n,t[n]);if(ol)for(var n of ol(t))Km.call(t,n)&&rl(e,n,t[n]);return e},Jm=(e,t)=>Wm(e,Hm(t));function $A(e,t={}){var n,o,r;const i=(n=t.draggingElement)!=null?n:Qe,a=(o=t.handle)!=null?o:e,l=U((r=ft(t.initialValue))!=null?r:{x:0,y:0}),c=U(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{ft(t.preventDefault)&&g.preventDefault(),ft(t.stopPropagation)&&g.stopPropagation()},f=g=>{var w;if(!u(g)||ft(t.exact)&&g.target!==ft(e))return;const v=ft(e).getBoundingClientRect(),x={x:g.pageX-v.left,y:g.pageY-v.top};((w=t.onStart)==null?void 0:w.call(t,x,g))!==!1&&(c.value=x,d(g))},p=g=>{var w;!u(g)||!c.value||(l.value={x:g.pageX-c.value.x,y:g.pageY-c.value.y},(w=t.onMove)==null||w.call(t,l.value,g),d(g))},m=g=>{var w;!u(g)||!c.value||(c.value=void 0,(w=t.onEnd)==null||w.call(t,l.value,g),d(g))};return Kt&&(de(a,"pointerdown",f,!0),de(i,"pointermove",p,!0),de(i,"pointerup",m,!0)),Jm(Gm({},lm(l)),{position:l,isDragging:P(()=>!!c.value),style:P(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var sl=Object.getOwnPropertySymbols,Ym=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Qm=(e,t)=>{var n={};for(var o in e)Ym.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&sl)for(var o of sl(e))t.indexOf(o)<0&&Zm.call(e,o)&&(n[o]=e[o]);return n};function Xm(e,t,n={}){const o=n,{window:r=Qe}=o,i=Qm(o,["window"]);let a;const l=Kr(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},u=fe(()=>$t(e),f=>{c(),l.value&&r&&f&&(a=new ResizeObserver(t),a.observe(f,i))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}function e0(e,t={}){const{immediate:n=!0,window:o=Qe}=t,r=U(!1);let i=null;function a(){!r.value||!o||(e(),i=o.requestAnimationFrame(a))}function l(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&l(),cn(c),{isActive:r,pause:c,resume:l}}function t0(e,t={width:0,height:0},n={}){const{box:o="content-box"}=n,r=U(t.width),i=U(t.height);return Xm(e,([a])=>{const l=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;l?(r.value=l.reduce((c,{inlineSize:u})=>c+u,0),i.value=l.reduce((c,{blockSize:u})=>c+u,0)):(r.value=a.contentRect.width,i.value=a.contentRect.height)},n),fe(()=>$t(e),a=>{r.value=a?t.width:0,i.value=a?t.height:0}),{width:r,height:i}}const il=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function n0(e,t={}){const{document:n=Sm,autoExit:o=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),i=U(!1);let a=il[0];const l=Kr(()=>{if(n){for(const w of il)if(w[1]in n)return a=w,!0}else return!1;return!1}),[c,u,d,,f]=a;async function p(){!l.value||(n!=null&&n[d]&&await n[u](),i.value=!1)}async function m(){if(!l.value)return;await p();const w=$t(r);w&&(await w[c](),i.value=!0)}async function g(){i.value?await p():await m()}return n&&de(n,f,()=>{i.value=!!(n!=null&&n[d])},!1),o&&cn(p),{isSupported:l,isFullscreen:i,enter:m,exit:p,toggle:g}}function o0(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:i=.1,window:a=Qe}=n,l=Kr(()=>a&&"IntersectionObserver"in a);let c=Dn;const u=l.value?fe(()=>({el:$t(e),root:$t(o)}),({el:f,root:p})=>{if(c(),!f)return;const m=new IntersectionObserver(t,{root:p,rootMargin:r,threshold:i});m.observe(f),c=()=>{m.disconnect(),c=Dn}},{immediate:!0,flush:"post"}):Dn,d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}const r0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function s0(e={}){const{reactive:t=!1,target:n=Qe,aliasMap:o=r0,passive:r=!0,onEventFired:i=Dn}=e,a=Fe(new Set),l={toJSON(){return{}},current:a},c=t?Fe(l):l,u=new Set,d=new Set;function f(w,v){w in c&&(t?c[w]=v:c[w].value=v)}function p(){for(const w of d)f(w,!1)}function m(w,v){var x,T;const D=(x=w.key)==null?void 0:x.toLowerCase(),q=[(T=w.code)==null?void 0:T.toLowerCase(),D].filter(Boolean);D&&(v?a.add(D):a.delete(D));for(const O of q)d.add(O),f(O,v);D==="meta"&&!v?(u.forEach(O=>{a.delete(O),f(O,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&v&&[...a,...q].forEach(O=>u.add(O))}de(n,"keydown",w=>(m(w,!0),i(w)),{passive:r}),de(n,"keyup",w=>(m(w,!1),i(w)),{passive:r}),de("blur",p,{passive:!0}),de("focus",p,{passive:!0});const g=new Proxy(c,{get(w,v,x){if(typeof v!="string")return Reflect.get(w,v,x);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const D=v.split(/[+_-]/g).map(A=>A.trim());c[v]=P(()=>D.every(A=>b(g[A])))}else c[v]=U(!1);const T=Reflect.get(w,v,x);return t?b(T):T}});return g}function PA(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:i=Qe,eventFilter:a}=e,l=U(r.x),c=U(r.y),u=U(null),d=w=>{t==="page"?(l.value=w.pageX,c.value=w.pageY):t==="client"&&(l.value=w.clientX,c.value=w.clientY),u.value="mouse"},f=()=>{l.value=r.x,c.value=r.y},p=w=>{if(w.touches.length>0){const v=w.touches[0];t==="page"?(l.value=v.pageX,c.value=v.pageY):t==="client"&&(l.value=v.clientX,c.value=v.clientY),u.value="touch"}},m=w=>a===void 0?d(w):a(()=>d(w),{}),g=w=>a===void 0?p(w):a(()=>p(w),{});return i&&(de(i,"mousemove",m,{passive:!0}),de(i,"dragover",m,{passive:!0}),n&&(de(i,"touchstart",g,{passive:!0}),de(i,"touchmove",g,{passive:!0}),o&&de(i,"touchend",f,{passive:!0}))),{x:l,y:c,sourceType:u}}var Ht;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ht||(Ht={}));function i0(e,t={}){const n=em(e),{threshold:o=50,onSwipe:r,onSwipeEnd:i,onSwipeStart:a}=t,l=Fe({x:0,y:0}),c=(O,W)=>{l.x=O,l.y=W},u=Fe({x:0,y:0}),d=(O,W)=>{u.x=O,u.y=W},f=P(()=>l.x-u.x),p=P(()=>l.y-u.y),{max:m,abs:g}=Math,w=P(()=>m(g(f.value),g(p.value))>=o),v=U(!1),x=U(!1),T=P(()=>w.value?g(f.value)>g(p.value)?f.value>0?Ht.LEFT:Ht.RIGHT:p.value>0?Ht.UP:Ht.DOWN:Ht.NONE),D=O=>t.pointerTypes?t.pointerTypes.includes(O.pointerType):!0,A=[de(e,"pointerdown",O=>{var W,ne;if(!D(O))return;x.value=!0,(ne=(W=n.value)==null?void 0:W.style)==null||ne.setProperty("touch-action","none");const ae=O.target;ae==null||ae.setPointerCapture(O.pointerId);const{clientX:ge,clientY:_e}=O;c(ge,_e),d(ge,_e),a==null||a(O)}),de(e,"pointermove",O=>{if(!D(O)||!x.value)return;const{clientX:W,clientY:ne}=O;d(W,ne),!v.value&&w.value&&(v.value=!0),v.value&&(r==null||r(O))}),de(e,"pointerup",O=>{var W,ne;!D(O)||(v.value&&(i==null||i(O,T.value)),x.value=!1,v.value=!1,(ne=(W=n.value)==null?void 0:W.style)==null||ne.setProperty("touch-action","initial"))})],q=()=>A.forEach(O=>O());return{isSwiping:Bn(v),direction:Bn(T),posStart:Bn(l),posEnd:Bn(u),distanceX:f,distanceY:p,stop:q}}var a0=Object.defineProperty,al=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,ll=(e,t,n)=>t in e?a0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u0=(e,t)=>{for(var n in t||(t={}))l0.call(t,n)&&ll(e,n,t[n]);if(al)for(var n of al(t))c0.call(t,n)&&ll(e,n,t[n]);return e};function AA(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:r="requestAnimationFrame"}=e,i=U(Bs()+n),a=()=>i.value=Bs()+n,l=r==="requestAnimationFrame"?e0(a,{immediate:o}):dm(a,r,{immediate:o});return t?u0({timestamp:i},l):i}var d0=Object.defineProperty,cl=Object.getOwnPropertySymbols,h0=Object.prototype.hasOwnProperty,f0=Object.prototype.propertyIsEnumerable,ul=(e,t,n)=>t in e?d0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p0=(e,t)=>{for(var n in t||(t={}))h0.call(t,n)&&ul(e,n,t[n]);if(cl)for(var n of cl(t))f0.call(t,n)&&ul(e,n,t[n]);return e};const m0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};p0({linear:Yp},m0);function jt(e,t,n,o={}){var r,i,a;const{clone:l=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:f}=o,p=Cn(),m=n||(p==null?void 0:p.emit)||((r=p==null?void 0:p.$emit)==null?void 0:r.bind(p))||((a=(i=p==null?void 0:p.proxy)==null?void 0:i.$emit)==null?void 0:a.bind(p==null?void 0:p.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const w=x=>l?Sr(l)?l(x):Fm(x):x,v=()=>Hp(e[t])?w(e[t]):f;if(c){const x=v(),T=U(x);return fe(()=>e[t],D=>T.value=w(D)),fe(T,D=>{(D!==e[t]||d)&&m(g,D)},{deep:d}),T}else return P({get(){return v()},set(x){m(g,x)}})}function CA({window:e=Qe}={}){if(!e)return U(!1);const t=U(e.document.hasFocus());return de(e,"blur",()=>{t.value=!1}),de(e,"focus",()=>{t.value=!0}),t}function g0(e={}){const{window:t=Qe,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=e,a=U(n),l=U(o),c=()=>{t&&(i?(a.value=t.innerWidth,l.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return c(),ku(c),de("resize",c,{passive:!0}),r&&de("orientationchange",c,{passive:!0}),{width:a,height:l}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof window<"u";function y0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const De=Object.assign;function ls(e,t){const n={};for(const o in t){const r=t[o];n[o]=Mt(r)?r.map(e):e(r)}return n}const So=()=>{},Mt=Array.isArray,_0=/\/$/,v0=e=>e.replace(_0,"");function cs(e,t,n="/"){let o,r={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(o=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),r=e(i)),l>-1&&(o=o||t.slice(0,l),a=t.slice(l,t.length)),o=S0(o!=null?o:t,n),{fullPath:o+(i&&"?")+i+a,path:o,query:r,hash:a}}function w0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function dl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function b0(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&to(t.matched[o],n.matched[r])&&xu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function to(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function xu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k0(e[n],t[n]))return!1;return!0}function k0(e,t){return Mt(e)?hl(e,t):Mt(t)?hl(t,e):e===t}function hl(e,t){return Mt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function S0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i-(i===o.length?1:0)).join("/")}var jo;(function(e){e.pop="pop",e.push="push"})(jo||(jo={}));var To;(function(e){e.back="back",e.forward="forward",e.unknown=""})(To||(To={}));function T0(e){if(!e)if(In){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),v0(e)}const D0=/^[^#]+#/;function x0(e,t){return e.replace(D0,"#")+t}function $0(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function P0(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=$0(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function fl(e,t){return(history.state?history.state.position-t:-1)+e}const Ws=new Map;function A0(e,t){Ws.set(e,t)}function C0(e){const t=Ws.get(e);return Ws.delete(e),t}let R0=()=>location.protocol+"//"+location.host;function $u(e,t){const{pathname:n,search:o,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),dl(c,"")}return dl(n,e)+o+r}function M0(e,t,n,o){let r=[],i=[],a=null;const l=({state:p})=>{const m=$u(e,location),g=n.value,w=t.value;let v=0;if(p){if(n.value=m,t.value=p,a&&a===g){a=null;return}v=w?p.position-w.position:0}else o(m);r.forEach(x=>{x(n.value,g,{delta:v,type:jo.pop,direction:v?v>0?To.forward:To.back:To.unknown})})};function c(){a=n.value}function u(p){r.push(p);const m=()=>{const g=r.indexOf(p);g>-1&&r.splice(g,1)};return i.push(m),m}function d(){const{history:p}=window;!p.state||p.replaceState(De({},p.state,{scroll:Gr()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:f}}function pl(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?Gr():null}}function E0(e){const{history:t,location:n}=window,o={value:$u(e,n)},r={value:t.state};r.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:R0()+e+c;try{t[d?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[d?"replace":"assign"](p)}}function a(c,u){const d=De({},t.state,pl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),o.value=c}function l(c,u){const d=De({},r.value,t.state,{forward:c,scroll:Gr()});i(d.current,d,!0);const f=De({},pl(o.value,c,null),{position:d.position+1},u);i(c,f,!1),o.value=c}return{location:o,state:r,push:l,replace:a}}function F0(e){e=T0(e);const t=E0(e),n=M0(e,t.state,t.location,t.replace);function o(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=De({location:"",base:e,go:o,createHref:x0.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function O0(e){return typeof e=="string"||e&&typeof e=="object"}function Pu(e){return typeof e=="string"||typeof e=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Au=Symbol("");var ml;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ml||(ml={}));function no(e,t){return De(new Error,{type:e,[Au]:!0},t)}function Bt(e,t){return e instanceof Error&&Au in e&&(t==null||!!(e.type&t))}const gl="[^/]+?",L0={sensitive:!1,strict:!1,start:!0,end:!0},z0=/[.+*?^${}()[\]/\\]/g;function j0(e,t){const n=De({},L0,t),o=[];let r=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(z0,"\\$&"),m+=40;else if(p.type===1){const{value:g,repeatable:w,optional:v,regexp:x}=p;i.push({name:g,repeatable:w,optional:v});const T=x||gl;if(T!==gl){m+=10;try{new RegExp(`(${T})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+A.message)}}let D=w?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;f||(D=v&&u.length<2?`(?:/${D})`:"/"+D),v&&(D+="?"),r+=D,m+=20,v&&(m+=-8),w&&(m+=-20),T===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(a),f={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",g=i[p-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function c(u){let d="",f=!1;for(const p of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const m of p)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:v}=m,x=g in u?u[g]:"";if(Mt(x)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Mt(x)?x.join("/"):x;if(!T)if(v)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);d+=T}}return d||"/"}return{re:a,score:o,keys:i,parse:l,stringify:c}}function q0(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function I0(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const i=q0(o[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-o.length)===1){if(yl(o))return 1;if(yl(r))return-1}return r.length-o.length}function yl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const B0={type:0,value:""},V0=/[a-zA-Z0-9_]/;function N0(e){if(!e)return[[]];if(e==="/")return[[B0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function f(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),a()):c===":"?(f(),n=1):p();break;case 4:p(),n=o;break;case 1:c==="("?n=2:V0.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}function W0(e,t,n){const o=j0(N0(e.path),n),r=De(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function H0(e,t){const n=[],o=new Map;t=wl({strict:!1,end:!0,sensitive:!1},t);function r(d){return o.get(d)}function i(d,f,p){const m=!p,g=U0(d);g.aliasOf=p&&p.record;const w=wl(t,d),v=[g];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of D)v.push(De({},g,{components:p?p.record.components:g.components,path:A,aliasOf:p?p.record:g}))}let x,T;for(const D of v){const{path:A}=D;if(f&&A[0]!=="/"){const q=f.record.path,O=q[q.length-1]==="/"?"":"/";D.path=f.record.path+(A&&O+A)}if(x=W0(D,f,w),p?p.alias.push(x):(T=T||x,T!==x&&T.alias.push(x),m&&d.name&&!vl(x)&&a(d.name)),g.children){const q=g.children;for(let O=0;O<q.length;O++)i(q[O],x,p&&p.children[O])}p=p||x,c(x)}return T?()=>{a(T)}:So}function a(d){if(Pu(d)){const f=o.get(d);f&&(o.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function c(d){let f=0;for(;f<n.length&&I0(d,n[f])>=0&&(d.record.path!==n[f].record.path||!Cu(d,n[f]));)f++;n.splice(f,0,d),d.record.name&&!vl(d)&&o.set(d.record.name,d)}function u(d,f){let p,m={},g,w;if("name"in d&&d.name){if(p=o.get(d.name),!p)throw no(1,{location:d});w=p.record.name,m=De(_l(f.params,p.keys.filter(T=>!T.optional).map(T=>T.name)),d.params&&_l(d.params,p.keys.map(T=>T.name))),g=p.stringify(m)}else if("path"in d)g=d.path,p=n.find(T=>T.re.test(g)),p&&(m=p.parse(g),w=p.record.name);else{if(p=f.name?o.get(f.name):n.find(T=>T.re.test(f.path)),!p)throw no(1,{location:d,currentLocation:f});w=p.record.name,m=De({},f.params,d.params),g=p.stringify(m)}const v=[];let x=p;for(;x;)v.unshift(x.record),x=x.parent;return{name:w,path:g,params:m,matched:v,meta:G0(v)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:r}}function _l(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function U0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:K0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function K0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function G0(e){return e.reduce((t,n)=>De(t,n.meta),{})}function wl(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Cu(e,t){return t.children.some(n=>n===e||Cu(e,n))}const Ru=/#/g,J0=/&/g,Y0=/\//g,Z0=/=/g,Q0=/\?/g,Mu=/\+/g,X0=/%5B/g,e1=/%5D/g,Eu=/%5E/g,t1=/%60/g,Fu=/%7B/g,n1=/%7C/g,Ou=/%7D/g,o1=/%20/g;function Li(e){return encodeURI(""+e).replace(n1,"|").replace(X0,"[").replace(e1,"]")}function r1(e){return Li(e).replace(Fu,"{").replace(Ou,"}").replace(Eu,"^")}function Hs(e){return Li(e).replace(Mu,"%2B").replace(o1,"+").replace(Ru,"%23").replace(J0,"%26").replace(t1,"`").replace(Fu,"{").replace(Ou,"}").replace(Eu,"^")}function s1(e){return Hs(e).replace(Z0,"%3D")}function i1(e){return Li(e).replace(Ru,"%23").replace(Q0,"%3F")}function a1(e){return e==null?"":i1(e).replace(Y0,"%2F")}function Dr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function l1(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const i=o[r].replace(Mu," "),a=i.indexOf("="),l=Dr(a<0?i:i.slice(0,a)),c=a<0?null:Dr(i.slice(a+1));if(l in t){let u=t[l];Mt(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function bl(e){let t="";for(let n in e){const o=e[n];if(n=s1(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Mt(o)?o.map(i=>i&&Hs(i)):[o&&Hs(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function c1(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Mt(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const u1=Symbol(""),kl=Symbol(""),zi=Symbol(""),Lu=Symbol(""),Us=Symbol("");function po(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Xt(e,t,n,o,r){const i=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(no(4,{from:n,to:t})):f instanceof Error?l(f):O0(f)?l(no(2,{from:t,to:f})):(i&&o.enterCallbacks[r]===i&&typeof f=="function"&&i.push(f),a())},u=e.call(o&&o.instances[r],t,n,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function us(e,t,n,o){const r=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(d1(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Xt(u,n,o,i,a))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=y0(u)?u.default:u;i.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Xt(p,n,o,i,a)()}))}}return r}function d1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Sl(e){const t=F(zi),n=F(Lu),o=P(()=>t.resolve(b(e.to))),r=P(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(to.bind(null,d));if(p>-1)return p;const m=Tl(c[u-2]);return u>1&&Tl(d)===m&&f[f.length-1].path!==m?f.findIndex(to.bind(null,c[u-2])):p}),i=P(()=>r.value>-1&&m1(n.params,o.value.params)),a=P(()=>r.value>-1&&r.value===n.matched.length-1&&xu(n.params,o.value.params));function l(c={}){return p1(c)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(So):Promise.resolve()}return{route:o,href:P(()=>o.value.href),isActive:i,isExactActive:a,navigate:l}}const h1=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sl,setup(e,{slots:t}){const n=Fe(Sl(e)),{options:o}=F(zi),r=P(()=>({[Dl(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[Dl(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:pt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),f1=h1;function p1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function m1(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Mt(r)||r.length!==o.length||o.some((i,a)=>i!==r[a]))return!1}return!0}function Tl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Dl=(e,t,n)=>e!=null?e:t!=null?t:n,g1=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=F(Us),r=P(()=>e.route||o.value),i=F(kl,0),a=P(()=>{let u=b(i);const{matched:d}=r.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),l=P(()=>r.value.matched[a.value]);ht(kl,P(()=>a.value+1)),ht(u1,l),ht(Us,r);const c=U();return fe(()=>[c.value,l.value,e.name],([u,d,f],[p,m,g])=>{d&&(d.instances[f]=u,m&&m!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!to(d,m)||!p)&&(d.enterCallbacks[f]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,f=l.value,p=f&&f.components[d];if(!p)return xl(n.default,{Component:p,route:u});const m=f.props[d],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,v=pt(p,De({},g,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return xl(n.default,{Component:v,route:u})||v}}});function xl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const y1=g1;function _1(e){const t=H0(e.routes,e),n=e.parseQuery||l1,o=e.stringifyQuery||bl,r=e.history,i=po(),a=po(),l=po(),c=Rt(Zt);let u=Zt;In&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ls.bind(null,C=>""+C),f=ls.bind(null,a1),p=ls.bind(null,Dr);function m(C,G){let B,Z;return Pu(C)?(B=t.getRecordMatcher(C),Z=G):Z=C,t.addRoute(Z,B)}function g(C){const G=t.getRecordMatcher(C);G&&t.removeRoute(G)}function w(){return t.getRoutes().map(C=>C.record)}function v(C){return!!t.getRecordMatcher(C)}function x(C,G){if(G=De({},G||c.value),typeof C=="string"){const oe=cs(n,C,G.path),y=t.resolve({path:oe.path},G),_=r.createHref(oe.fullPath);return De(oe,y,{params:p(y.params),hash:Dr(oe.hash),redirectedFrom:void 0,href:_})}let B;if("path"in C)B=De({},C,{path:cs(n,C.path,G.path).path});else{const oe=De({},C.params);for(const y in oe)oe[y]==null&&delete oe[y];B=De({},C,{params:f(C.params)}),G.params=f(G.params)}const Z=t.resolve(B,G),we=C.hash||"";Z.params=d(p(Z.params));const pe=w0(o,De({},C,{hash:r1(we),path:Z.path})),le=r.createHref(pe);return De({fullPath:pe,hash:we,query:o===bl?c1(C.query):C.query||{}},Z,{redirectedFrom:void 0,href:le})}function T(C){return typeof C=="string"?cs(n,C,c.value.path):De({},C)}function D(C,G){if(u!==C)return no(8,{from:G,to:C})}function A(C){return W(C)}function q(C){return A(De(T(C),{replace:!0}))}function O(C){const G=C.matched[C.matched.length-1];if(G&&G.redirect){const{redirect:B}=G;let Z=typeof B=="function"?B(C):B;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=T(Z):{path:Z},Z.params={}),De({query:C.query,hash:C.hash,params:"path"in Z?{}:C.params},Z)}}function W(C,G){const B=u=x(C),Z=c.value,we=C.state,pe=C.force,le=C.replace===!0,oe=O(B);if(oe)return W(De(T(oe),{state:typeof oe=="object"?De({},we,oe.state):we,force:pe,replace:le}),G||B);const y=B;y.redirectedFrom=G;let _;return!pe&&b0(o,Z,B)&&(_=no(16,{to:y,from:Z}),$e(Z,Z,!0,!1)),(_?Promise.resolve(_):ae(y,Z)).catch(S=>Bt(S)?Bt(S,2)?S:he(S):J(S,y,Z)).then(S=>{if(S){if(Bt(S,2))return W(De({replace:le},T(S.to),{state:typeof S.to=="object"?De({},we,S.to.state):we,force:pe}),G||y)}else S=_e(y,Z,!0,le,we);return ge(y,Z,S),S})}function ne(C,G){const B=D(C,G);return B?Promise.reject(B):Promise.resolve()}function ae(C,G){let B;const[Z,we,pe]=v1(C,G);B=us(Z.reverse(),"beforeRouteLeave",C,G);for(const oe of Z)oe.leaveGuards.forEach(y=>{B.push(Xt(y,C,G))});const le=ne.bind(null,C,G);return B.push(le),On(B).then(()=>{B=[];for(const oe of i.list())B.push(Xt(oe,C,G));return B.push(le),On(B)}).then(()=>{B=us(we,"beforeRouteUpdate",C,G);for(const oe of we)oe.updateGuards.forEach(y=>{B.push(Xt(y,C,G))});return B.push(le),On(B)}).then(()=>{B=[];for(const oe of C.matched)if(oe.beforeEnter&&!G.matched.includes(oe))if(Mt(oe.beforeEnter))for(const y of oe.beforeEnter)B.push(Xt(y,C,G));else B.push(Xt(oe.beforeEnter,C,G));return B.push(le),On(B)}).then(()=>(C.matched.forEach(oe=>oe.enterCallbacks={}),B=us(pe,"beforeRouteEnter",C,G),B.push(le),On(B))).then(()=>{B=[];for(const oe of a.list())B.push(Xt(oe,C,G));return B.push(le),On(B)}).catch(oe=>Bt(oe,8)?oe:Promise.reject(oe))}function ge(C,G,B){for(const Z of l.list())Z(C,G,B)}function _e(C,G,B,Z,we){const pe=D(C,G);if(pe)return pe;const le=G===Zt,oe=In?history.state:{};B&&(Z||le?r.replace(C.fullPath,De({scroll:le&&oe&&oe.scroll},we)):r.push(C.fullPath,we)),c.value=C,$e(C,G,B,le),he()}let Be;function Ve(){Be||(Be=r.listen((C,G,B)=>{if(!un.listening)return;const Z=x(C),we=O(Z);if(we){W(De(we,{replace:!0}),Z).catch(So);return}u=Z;const pe=c.value;In&&A0(fl(pe.fullPath,B.delta),Gr()),ae(Z,pe).catch(le=>Bt(le,12)?le:Bt(le,2)?(W(le.to,Z).then(oe=>{Bt(oe,20)&&!B.delta&&B.type===jo.pop&&r.go(-1,!1)}).catch(So),Promise.reject()):(B.delta&&r.go(-B.delta,!1),J(le,Z,pe))).then(le=>{le=le||_e(Z,pe,!1),le&&(B.delta&&!Bt(le,8)?r.go(-B.delta,!1):B.type===jo.pop&&Bt(le,20)&&r.go(-1,!1)),ge(Z,pe,le)}).catch(So)}))}let qe=po(),Me=po(),Le;function J(C,G,B){he(C);const Z=Me.list();return Z.length?Z.forEach(we=>we(C,G,B)):console.error(C),Promise.reject(C)}function re(){return Le&&c.value!==Zt?Promise.resolve():new Promise((C,G)=>{qe.add([C,G])})}function he(C){return Le||(Le=!C,Ve(),qe.list().forEach(([G,B])=>C?B(C):G()),qe.reset()),C}function $e(C,G,B,Z){const{scrollBehavior:we}=e;if(!In||!we)return Promise.resolve();const pe=!B&&C0(fl(C.fullPath,0))||(Z||!B)&&history.state&&history.state.scroll||null;return Ye().then(()=>we(C,G,pe)).then(le=>le&&P0(le)).catch(le=>J(le,C,G))}const it=C=>r.go(C);let Ge;const rt=new Set,un={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:v,getRoutes:w,resolve:x,options:e,push:A,replace:q,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Me.add,isReady:re,install(C){const G=this;C.component("RouterLink",f1),C.component("RouterView",y1),C.config.globalProperties.$router=G,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),In&&!Ge&&c.value===Zt&&(Ge=!0,A(r.location).catch(we=>{}));const B={};for(const we in Zt)B[we]=P(()=>c.value[we]);C.provide(zi,G),C.provide(Lu,Fe(B)),C.provide(Us,c);const Z=C.unmount;rt.add(C),C.unmount=function(){rt.delete(C),rt.size<1&&(u=Zt,Be&&Be(),Be=null,c.value=Zt,Ge=!1,Le=!1),Z()}}};return un}function On(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function v1(e,t){const n=[],o=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(u=>to(u,l))?o.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(u=>to(u,c))||r.push(c))}return[n,o,r]}const ds=U(!1),Do=U(!1),Vn=U(!1),w1=U(!0),Ks=Em({xs:460,...Pm}),xn=g0(),zu=s0(),b1=P(()=>xn.height.value-xn.width.value/on>180),ju=n0(Kt?document.body:null),Jn=$m(),k1=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")||((t=Jn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),S1=P(()=>{var e;return["BUTTON","A"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")});Et("slidev-camera","default");Et("slidev-mic","default");const dr=Et("slidev-scale",0),et=Et("slidev-show-overview",!1),hs=Et("slidev-presenter-cursor",!0),$l=Et("slidev-show-editor",!1);Et("slidev-editor-width",Kt?window.innerWidth*.4:100);const qu=Su(et);function Pl(e,t,n,o=r=>r){return e*o(.5-t*(.5-n))}function T1(e){return[-e[0],-e[1]]}function Tt(e,t){return[e[0]+t[0],e[1]+t[1]]}function vt(e,t){return[e[0]-t[0],e[1]-t[1]]}function St(e,t){return[e[0]*t,e[1]*t]}function D1(e,t){return[e[0]/t,e[1]/t]}function mo(e){return[e[1],-e[0]]}function Al(e,t){return e[0]*t[0]+e[1]*t[1]}function x1(e,t){return e[0]===t[0]&&e[1]===t[1]}function $1(e){return Math.hypot(e[0],e[1])}function P1(e){return e[0]*e[0]+e[1]*e[1]}function Cl(e,t){return P1(vt(e,t))}function Iu(e){return D1(e,$1(e))}function A1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function go(e,t,n){let o=Math.sin(n),r=Math.cos(n),i=e[0]-t[0],a=e[1]-t[1],l=i*r-a*o,c=i*o+a*r;return[l+t[0],c+t[1]]}function Gs(e,t,n){return Tt(e,St(vt(t,e),n))}function Rl(e,t,n){return Tt(e,St(t,n))}var{min:Ln,PI:C1}=Math,Ml=.275,yo=C1+1e-4;function R1(e,t={}){let{size:n=16,smoothing:o=.5,thinning:r=.5,simulatePressure:i=!0,easing:a=J=>J,start:l={},end:c={},last:u=!1}=t,{cap:d=!0,easing:f=J=>J*(2-J)}=l,{cap:p=!0,easing:m=J=>--J*J*J+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,w=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,v=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,x=Math.pow(n*o,2),T=[],D=[],A=e.slice(0,10).reduce((J,re)=>{let he=re.pressure;if(i){let $e=Ln(1,re.distance/n),it=Ln(1,1-$e);he=Ln(1,J+(it-J)*($e*Ml))}return(J+he)/2},e[0].pressure),q=Pl(n,r,e[e.length-1].pressure,a),O,W=e[0].vector,ne=e[0].point,ae=ne,ge=ne,_e=ae,Be=!1;for(let J=0;J<e.length;J++){let{pressure:re}=e[J],{point:he,vector:$e,distance:it,runningLength:Ge}=e[J];if(J<e.length-1&&g-Ge<3)continue;if(r){if(i){let pe=Ln(1,it/n),le=Ln(1,1-pe);re=Ln(1,A+(le-A)*(pe*Ml))}q=Pl(n,r,re,a)}else q=n/2;O===void 0&&(O=q);let rt=Ge<w?f(Ge/w):1,un=g-Ge<v?m((g-Ge)/v):1;q=Math.max(.01,q*Math.min(rt,un));let C=(J<e.length-1?e[J+1]:e[J]).vector,G=J<e.length-1?Al($e,C):1,B=Al($e,W)<0&&!Be,Z=G!==null&&G<0;if(B||Z){let pe=St(mo(W),q);for(let le=1/13,oe=0;oe<=1;oe+=le)ge=go(vt(he,pe),he,yo*oe),T.push(ge),_e=go(Tt(he,pe),he,yo*-oe),D.push(_e);ne=ge,ae=_e,Z&&(Be=!0);continue}if(Be=!1,J===e.length-1){let pe=St(mo($e),q);T.push(vt(he,pe)),D.push(Tt(he,pe));continue}let we=St(mo(Gs(C,$e,G)),q);ge=vt(he,we),(J<=1||Cl(ne,ge)>x)&&(T.push(ge),ne=ge),_e=Tt(he,we),(J<=1||Cl(ae,_e)>x)&&(D.push(_e),ae=_e),A=re,W=$e}let Ve=e[0].point.slice(0,2),qe=e.length>1?e[e.length-1].point.slice(0,2):Tt(e[0].point,[1,1]),Me=[],Le=[];if(e.length===1){if(!(w||v)||u){let J=Rl(Ve,Iu(mo(vt(Ve,qe))),-(O||q)),re=[];for(let he=1/13,$e=he;$e<=1;$e+=he)re.push(go(J,Ve,yo*2*$e));return re}}else{if(!(w||v&&e.length===1))if(d)for(let re=1/13,he=re;he<=1;he+=re){let $e=go(D[0],Ve,yo*he);Me.push($e)}else{let re=vt(T[0],D[0]),he=St(re,.5),$e=St(re,.51);Me.push(vt(Ve,he),vt(Ve,$e),Tt(Ve,$e),Tt(Ve,he))}let J=mo(T1(e[e.length-1].vector));if(v||w&&e.length===1)Le.push(qe);else if(p){let re=Rl(qe,J,q);for(let he=1/29,$e=he;$e<1;$e+=he)Le.push(go(re,qe,yo*3*$e))}else Le.push(Tt(qe,St(J,q)),Tt(qe,St(J,q*.99)),vt(qe,St(J,q*.99)),vt(qe,St(J,q)))}return T.concat(Le,D.reverse(),Me)}function M1(e,t={}){var n;let{streamline:o=.5,size:r=16,last:i=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:w=.5})=>[m,g,w]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(Gs(l[0],m,g/4))}l.length===1&&(l=[...l,[...Tt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=c[0],p=l.length-1;for(let m=1;m<l.length;m++){let g=i&&m===p?l[m].slice(0,2):Gs(f.point,l[m],a);if(x1(f.point,g))continue;let w=A1(g,f.point);if(d+=w,m<p&&!u){if(d<r)continue;u=!0}f={point:g,pressure:l[m][2]>=0?l[m][2]:.5,vector:Iu(vt(f.point,g)),distance:w,runningLength:d},c.push(f)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function E1(e,t={}){return R1(M1(e,t),t)}var F1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,r=n.length;o<r;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>t!==r)}}});function xr(e,t){return e-t}function O1(e){return e<0?-1:1}function $r(e){return[Math.abs(e),O1(e)]}function Bu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var L1=2,Wt=L1,ao=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var r;var t;const n=this.drauu.el,o=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*o,y:(e.pageY-i.top)*o,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const a=i.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*o,y:a.y*o,pressure:e.pressure}}}createElement(e,t){var r;const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(r=o.fill)!=null?r:"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Wt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},z1=class extends ao{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=E1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[r,i],a,l)=>{const[c,u]=l[(a+1)%l.length];return o.push(r,i,(r+c)/2,(i+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},j1=class extends ao{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=$r(e.x-this.start.x),[o,r]=$r(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[i,a]=[this.start.x,this.start.x+t*n].sort(xr),[l,c]=[this.start.y,this.start.y+o*r].sort(xr);this.attr("cx",(i+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-i)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Vu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),n.appendChild(o),n}var q1=class extends ao{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Bu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Vu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let i=o/r;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+r*i,n=this.start.y+r):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},I1=class extends ao{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=$r(e.x-this.start.x),[o,r]=$r(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[i,a]=[this.start.x,this.start.x+t*n].sort(xr),[l,c]=[this.start.y,this.start.y+o*r].sort(xr);this.attr("x",i),this.attr("y",l),this.attr("width",a-i),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function B1(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function V1(e,t,n){let o=t.x,r=t.y,i=n.x-o,a=n.y-r;if(i!==0||a!==0){const l=((e.x-o)*i+(e.y-r)*a)/(i*i+a*a);l>1?(o=n.x,r=n.y):l>0&&(o+=i*l,r+=a*l)}return i=e.x-o,a=e.y-r,i*i+a*a}function N1(e,t){let n=e[0];const o=[n];let r;for(let i=1,a=e.length;i<a;i++)r=e[i],B1(r,n)>t&&(o.push(r),n=r);return n!==r&&r&&o.push(r),o}function Js(e,t,n,o,r){let i=o,a=0;for(let l=t+1;l<n;l++){const c=V1(e[l],e[t],e[n]);c>i&&(a=l,i=c)}i>o&&(a-t>1&&Js(e,t,a,o,r),r.push(e[a]),n-a>1&&Js(e,a,n,o,r))}function W1(e,t){const n=e.length-1,o=[e[0]];return Js(e,0,n,t,o),o.push(e[n]),o}function El(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:N1(e,o),e=W1(e,o),e}var H1=class extends ao{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Bu();const t=Vu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=El(this.points,1,!0),this.count=0),this.attr("d",Ol(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ol(El(this.points,1,!0))),!e.getTotalLength()))}};function U1(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),angle:Math.atan2(o,n)}}function Fl(e,t,n,o){const r=t||e,i=n||e,a=.2,l=U1(r,i),c=l.angle+(o?Math.PI:0),u=l.length*a,d=e.x+Math.cos(c)*u,f=e.y+Math.sin(c)*u;return{x:d,y:f}}function K1(e,t,n){const o=Fl(n[t-1],n[t-2],e),r=Fl(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)} ${r.x.toFixed(Wt)},${r.y.toFixed(Wt)} ${e.x.toFixed(Wt)},${e.y.toFixed(Wt)}`}function Ol(e){return e.reduce((t,n,o,r)=>o===0?`M ${n.x.toFixed(Wt)},${n.y.toFixed(Wt)}`:`${t} ${K1(n,o,r)}`,"")}var G1=class extends ao{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const i=n[r];if(i.getTotalLength){const a=i.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=i.getPointAtLength(a*l/this.pathSubFactor),u=i.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:o||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,r=t.x1,i=t.x2,a=e.y1,l=e.y2,c=t.y1,u=t.y2,d=(n-o)*(c-u)-(a-l)*(r-i),f=(n*l-a*o)*(r-i)-(n-o)*(r*u-c*i),p=(n*l-a*o)*(c-u)-(a-l)*(r*u-c*i),m=(g,w,v)=>g>=w&&g<=v?!0:g>=v&&g<=w;if(d===0)return!1;{const g={x:f/d,y:p/d};return m(g.x,n,o)&&m(g.y,a,l)&&m(g.x,r,i)&&m(g.y,c,u)}}};function J1(e){return{draw:new H1(e),stylus:new z1(e),line:new q1(e),rectangle:new I1(e),ellipse:new j1(e),eraseLine:new G1(e)}}var Y1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=F1(),this._models=J1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),i=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Z1(e){return new Y1(e)}const Ys=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qt=Et("slidev-drawing-enabled",!1),RA=Et("slidev-drawing-pinned",!1),Q1=U(!1),X1=U(!1),eg=U(!1),qo=U(!1),wn=Xp(Et("slidev-drawing-brush",{color:Ys[0],size:4,mode:"stylus"})),Ll=U("stylus"),Nu=P(()=>ke.drawings.syncAll||zt.value);let Io=!1;const _o=P({get(){return Ll.value},set(e){Ll.value=e,e==="arrow"?(wn.mode="line",wn.arrowEnd=!0):(wn.mode=e,wn.arrowEnd=!1)}}),tg=Fe({brush:wn,acceptsInputTypes:P(()=>qt.value?void 0:["pen"]),coordinateTransform:!1}),tt=jr(Z1(tg));function ng(){tt.clear(),Nu.value&&vu(He.value,"")}function Wu(){var e;X1.value=tt.canRedo(),Q1.value=tt.canUndo(),eg.value=!!((e=tt.el)!=null&&e.children.length)}function og(e){Io=!0;const t=kr[e||He.value];t!=null?tt.load(t):tt.clear(),Io=!1}tt.on("changed",()=>{if(Wu(),!Io){const e=tt.dump(),t=He.value;(kr[t]||"")!==e&&Nu.value&&vu(t,tt.dump())}});Vp(e=>{Io=!0,e[He.value]!=null&&tt.load(e[He.value]||""),Io=!1,Wu()});Ye(()=>{fe(He,()=>{!tt.mounted||og()},{immediate:!0})});tt.on("start",()=>qo.value=!0);tt.on("end",()=>qo.value=!1);window.addEventListener("keydown",e=>{if(!qt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?tt.redo():tt.undo():e.code==="Escape"?qt.value=!1:e.code==="KeyL"&&t?_o.value="line":e.code==="KeyA"&&t?_o.value="arrow":e.code==="KeyS"&&t?_o.value="stylus":e.code==="KeyR"&&t?_o.value="rectangle":e.code==="KeyE"&&t?_o.value="ellipse":e.code==="KeyC"&&t?ng():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ys.length?wn.color=Ys[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ne(...e){return P(()=>e.every(t=>ft(t)))}function ct(e){return P(()=>!ft(e))}const zl=Vm(),fs=Et("slidev-color-schema","auto"),Zs=P(()=>ke.colorSchema!=="auto"),ji=P({get(){return Zs.value?ke.colorSchema==="dark":fs.value==="auto"?zl.value:fs.value==="dark"},set(e){Zs.value||(fs.value=e===zl.value?"auto":e?"dark":"light")}}),Hu=Su(ji);Kt&&fe(ji,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const hr=U(1),fr=P(()=>We.length-1),mt=U(0),qi=U(0);function rg(){mt.value>hr.value&&(mt.value-=1)}function sg(){mt.value<fr.value&&(mt.value+=1)}function ig(){if(mt.value>hr.value){let e=mt.value-qi.value;e<hr.value&&(e=hr.value),mt.value=e}}function ag(){if(mt.value<fr.value){let e=mt.value+qi.value;e>fr.value&&(e=fr.value),mt.value=e}}function lg(){const{escape:e,space:t,shift:n,left:o,right:r,up:i,down:a,enter:l,d:c,g:u,o:d}=zu,f=[{name:"next_space",key:Ne(t,ct(n)),fn:rn,autoRepeat:!0},{name:"prev_space",key:Ne(t,n),fn:sn,autoRepeat:!0},{name:"next_right",key:Ne(r,ct(n),ct(et)),fn:rn,autoRepeat:!0},{name:"prev_left",key:Ne(o,ct(n),ct(et)),fn:sn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:sn,autoRepeat:!0},{name:"next_down",key:Ne(a,ct(et)),fn:Bo,autoRepeat:!0},{name:"prev_up",key:Ne(i,ct(et)),fn:()=>Vo(!1),autoRepeat:!0},{name:"next_shift",key:Ne(r,n),fn:Bo,autoRepeat:!0},{name:"prev_shift",key:Ne(o,n),fn:()=>Vo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ne(c,ct(qt)),fn:Hu},{name:"toggle_overview",key:Ne(d,ct(qt)),fn:qu},{name:"hide_overview",key:Ne(e,ct(qt)),fn:()=>et.value=!1},{name:"goto",key:Ne(u,ct(qt)),fn:()=>Vn.value=!Vn.value},{name:"next_overview",key:Ne(r,et),fn:sg},{name:"prev_overview",key:Ne(o,et),fn:rg},{name:"up_overview",key:Ne(i,et),fn:ig},{name:"down_overview",key:Ne(a,et),fn:ag},{name:"goto_from_overview",key:Ne(l,et),fn:()=>{oo(mt.value),et.value=!1}}];return{customShortcuts:[],defaultShortcuts:f}}const Uu=Ne(ct(k1),ct(S1),w1);function cg(e,t,n=!1){typeof e=="string"&&(e=zu[e]);const o=Ne(e,Uu);let r=0,i;const a=()=>{if(clearTimeout(i),!o.value){r=0;return}n&&(i=setTimeout(a,Math.max(1e3-r*250,150)),r++),t()};return fe(o,a,{flush:"sync"})}function ug(e,t){return xm(e,n=>{!Uu.value||n.repeat||t()})}function dg(){const{customShortcuts:e,defaultShortcuts:t}=lg();new Map([...t,...e].map(o=>[o.key,o])).forEach(o=>{o.fn&&cg(o.key,o.fn,o.autoRepeat)}),ug("f",()=>ju.toggle())}const hg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},fg=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),pg=[fg];function mg(e,t){return k(),K("svg",hg,pg)}const gg={name:"carbon-close",render:mg};function Ii(e){var n,o;const t=(o=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const Ku=Te({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;F(I);const n=U(),o=t0(n),r=P(()=>t.width?t.width:o.width.value),i=P(()=>t.width?t.width/on:o.height.value);t.width&&Vr(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${i.value}px`)});const a=P(()=>r.value/i.value),l=P(()=>t.scale?t.scale:a.value<on?r.value/Tn:i.value*on/Tn),c=P(()=>({height:`${gu}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(mu,l),(d,f)=>(k(),K("div",{id:"slide-container",ref_key:"root",ref:n,class:je(b(u))},[s("div",{id:"slide-content",style:nt(b(c))},[wt(d.$slots,"default")],4),wt(d.$slots,"controls")],2))}});const Bi=Te({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=jt(e,"clicks",t),o=jt(e,"clicksElements",t),r=jt(e,"clicksDisabled",t),i=jt(e,"clicksOrderMap",t);o.value.length=0,ht(Cp,e.route),ht(Rp,e.context),ht(cr,n),ht(ur,r),ht(jn,o),ht(qs,i)},render(){var e,t;return this.$props.is?pt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),yg=["innerHTML"],_g=Te({__name:"DrawingPreview",props:{page:null},setup(e){return F(I),(t,n)=>b(kr)[e.page]?(k(),K("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(kr)[e.page]},null,8,yg)):me("v-if",!0)}}),vg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},wg=["onClick"],bg=Te({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t);function r(){o.value=!1}function i(m){oo(m),r()}function a(m){return m===mt.value}const l=Ks.smaller("xs"),c=Ks.smaller("sm"),u=4*16*2,d=2*16,f=P(()=>l.value?xn.width.value-u:c.value?(xn.width.value-u-d)/2:300),p=P(()=>Math.floor((xn.width.value-u)/(f.value+d)));return Vr(()=>{mt.value=He.value,qi.value=p.value}),(m,g)=>{const w=gg;return k(),K(xe,null,[Ci(s("div",vg,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${b(f)}px,1fr))`)},[(k(!0),K(xe,null,Uo(b(We).slice(0,-1),(v,x)=>(k(),K("div",{key:v.path,class:"relative"},[s("div",{class:je(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(x+1)}]),onClick:T=>i(+v.path)},[(k(),j(Ku,{key:v.path,width:b(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:$(()=>[V(b(Bi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:je(b(Ii)(v)),route:v,context:"overview"},null,8,["is","class","route"]),V(_g,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],10,wg),s("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${b(f)+5}px`)},$n(x+1),5)]))),128))],4)],512),[[hu,b(o)]]),b(o)?(k(),K("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[V(w)])):me("v-if",!0)],64)}}});const kg="/assets/logo.b72bde5d.png",Sg={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Tg=Te({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t);function r(){o.value=!1}return(i,a)=>(k(),j(Gc,null,[b(o)?(k(),K("div",Sg,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>r())}),s("div",{class:je(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[wt(i.$slots,"default")],2)])):me("v-if",!0)],1024))}}),Dg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},xg=["innerHTML"],$g=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:kg,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),h("dev ")])])],-1),Pg=Te({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t),r=P(()=>typeof ke.info=="string");return(i,a)=>(k(),j(Tg,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=l=>Se(o)?o.value=l:null),class:"px-6 py-4"},{default:$(()=>[s("div",Dg,[b(r)?(k(),K("div",{key:0,class:"mb-4",innerHTML:b(ke).info},null,8,xg)):me("v-if",!0),$g])]),_:1},8,["modelValue"]))}});const Ag=["disabled","onKeydown"],Cg=Te({__name:"Goto",setup(e){F(I);const t=U(),n=U(""),o=P(()=>{if(n.value.startsWith("/"))return!!We.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=td.value}});function r(){o.value&&(n.value.startsWith("/")?oo(n.value.substring(1)):oo(+n.value)),i()}function i(){Vn.value=!1}return fe(Vn,async a=>{var l,c;a?(await Ye(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),fe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,l)=>(k(),K("div",{id:"slidev-goto-dialog",class:je(["fixed right-5 bg-main transform transition-all",b(Vn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ci(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!b(Vn),class:je(["outline-none bg-transparent",{"text-red-400":!b(o)&&n.value}]),placeholder:"Goto...",onKeydown:[za(r,["enter"]),za(i,["escape"])],onBlur:i},null,42,Ag),[[up,n.value]])],2))}}),Rg=Te({__name:"Controls",setup(e){F(I);const t=Rt(),n=Rt();return(o,r)=>(k(),K(xe,null,[V(bg,{modelValue:b(et),"onUpdate:modelValue":r[0]||(r[0]=i=>Se(et)?et.value=i:null)},null,8,["modelValue"]),V(Cg),b(t)?(k(),j(b(t),{key:0})):me("v-if",!0),b(n)?(k(),j(b(n),{key:1,modelValue:b(ds),"onUpdate:modelValue":r[1]||(r[1]=i=>Se(ds)?ds.value=i:null)},null,8,["modelValue"])):me("v-if",!0),b(ke).info?(k(),j(Pg,{key:2,modelValue:b(Do),"onUpdate:modelValue":r[2]||(r[2]=i=>Se(Do)?Do.value=i:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Mg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Fg=[Eg];function Og(e,t){return k(),K("svg",Mg,Fg)}const Lg={name:"carbon-settings-adjust",render:Og},zg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jg=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),qg=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ig=[jg,qg];function Bg(e,t){return k(),K("svg",zg,Ig)}const Vg={name:"carbon-information",render:Bg},Ng={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wg=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Hg=[Wg];function Ug(e,t){return k(),K("svg",Ng,Hg)}const Kg={name:"carbon-download",render:Ug},Gg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jg=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Yg=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Zg=[Jg,Yg];function Qg(e,t){return k(),K("svg",Gg,Zg)}const Xg={name:"carbon-user-speaker",render:Qg},ey={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ty=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ny=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),oy=[ty,ny];function ry(e,t){return k(),K("svg",ey,oy)}const sy={name:"carbon-presentation-file",render:ry},iy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ay=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ly=[ay];function cy(e,t){return k(),K("svg",iy,ly)}const uy={name:"carbon-pen",render:cy},dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},hy=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),fy=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),py=[hy,fy];function my(e,t){return k(),K("svg",dy,py)}const gy={name:"ph-cursor-duotone",render:my},yy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_y=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),vy=[_y];function wy(e,t){return k(),K("svg",yy,vy)}const Gu={name:"ph-cursor-fill",render:wy},by={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ky=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Sy=[ky];function Ty(e,t){return k(),K("svg",by,Sy)}const Dy={name:"carbon-sun",render:Ty},xy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$y=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Py=[$y];function Ay(e,t){return k(),K("svg",xy,Py)}const Cy={name:"carbon-moon",render:Ay},Ry={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},My=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ey=[My];function Fy(e,t){return k(),K("svg",Ry,Ey)}const Oy={name:"carbon-apps",render:Fy},Ly={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zy=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),jy=[zy];function qy(e,t){return k(),K("svg",Ly,jy)}const Iy={name:"carbon-arrow-right",render:qy},By={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vy=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Ny=[Vy];function Wy(e,t){return k(),K("svg",By,Ny)}const Hy={name:"carbon-arrow-left",render:Wy},Uy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ky=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Gy=[Ky];function Jy(e,t){return k(),K("svg",Uy,Gy)}const Yy={name:"carbon-maximize",render:Jy},Zy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qy=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Xy=[Qy];function e_(e,t){return k(),K("svg",Zy,Xy)}const t_={name:"carbon-minimize",render:e_},n_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o_=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),r_=[o_];function s_(e,t){return k(),K("svg",n_,r_)}const i_={name:"carbon-checkmark",render:s_},a_={class:"select-list"},l_={class:"title"},c_={class:"items"},u_=["onClick"],d_=Te({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t,{passive:!0});return(r,i)=>{const a=i_;return k(),K("div",a_,[s("div",l_,$n(e.title),1),s("div",c_,[(k(!0),K(xe,null,Uo(e.items,l=>(k(),K("div",{key:l.value,class:je(["item",{active:b(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[V(a,{class:je(["text-green-500",{"opacity-0":b(o)!==l.value}])},null,8,["class"]),h(" "+$n(l.display||l.value),1)],10,u_))),128))])])}}});const Ju=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},h_=Ju(d_,[["__scopeId","data-v-7dd0eaca"]]),f_={class:"text-sm"},p_=Te({__name:"Settings",setup(e){F(I);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(k(),K("div",f_,[V(h_,{modelValue:b(dr),"onUpdate:modelValue":o[0]||(o[0]=r=>Se(dr)?dr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),m_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},g_=Te({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t,{passive:!0}),r=U();return Tm(r,()=>{o.value=!1}),(i,a)=>(k(),K("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:je({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>o.value=!b(o))},[wt(i.$slots,"button",{class:je({disabled:e.disabled})})],2),(k(),j(Gc,null,[b(o)?(k(),K("div",m_,[wt(i.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),y_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},rr={__name:"VerticalDivider",setup(e){return F(I),(t,n)=>(k(),K("div",y_))}},__={render(){return[]}},v_={class:"icon-btn"},w_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},b_={class:"my-auto"},k_={class:"opacity-50"},S_=Te({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;F(I);const n=Ks.smaller("md"),{isFullscreen:o,toggle:r}=ju,i=P(()=>Qs.value?`?password=${Qs.value}`:""),a=P(()=>`/presenter/${He.value}${i.value}`),l=P(()=>`/${He.value}${i.value}`),c=U(),u=()=>{c.value&&Jn.value&&c.value.contains(Jn.value)&&Jn.value.blur()},d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Rt(),p=Rt();return io(()=>import("./DrawingControls.bd63b8f4.js"),["assets/DrawingControls.bd63b8f4.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.637f4f40.js"]).then(m=>p.value=m.default),(m,g)=>{const w=t_,v=Yy,x=Hy,T=Iy,D=Oy,A=Cy,q=Dy,O=Gu,W=gy,ne=uy,ae=sy,ge=Oo("RouterLink"),_e=Xg,Be=Kg,Ve=Vg,qe=Lg;return k(),K("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(Vt)?me("v-if",!0):(k(),K("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Me)=>b(r)&&b(r)(...Me))},[b(o)?(k(),j(w,{key:0})):(k(),j(v,{key:1}))])),s("button",{class:je(["icon-btn",{disabled:!b(QD)}]),onClick:g[1]||(g[1]=(...Me)=>b(sn)&&b(sn)(...Me))},[V(x)],2),s("button",{class:je(["icon-btn",{disabled:!b(ZD)}]),title:"Next",onClick:g[2]||(g[2]=(...Me)=>b(rn)&&b(rn)(...Me))},[V(T)],2),b(Vt)?me("v-if",!0):(k(),K("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Me=>b(qu)())},[V(D)])),b(Zs)?me("v-if",!0):(k(),K("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Me=>b(Hu)())},[b(ji)?(k(),j(A,{key:0})):(k(),j(q,{key:1}))])),V(rr),b(Vt)?me("v-if",!0):(k(),K(xe,{key:3},[!b(zt)&&!b(n)&&b(f)?(k(),K(xe,{key:0},[V(b(f)),V(rr)],64)):me("v-if",!0),b(zt)?(k(),K("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Me=>hs.value=!b(hs))},[b(hs)?(k(),j(O,{key:0})):(k(),j(W,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!b(ke).drawings.presenterOnly&&!b(Vt)?(k(),K(xe,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Me=>qt.value=!b(qt))},[V(ne),b(qt)?(k(),K("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:b(wn).color})},null,4)):me("v-if",!0)]),V(rr)],64)):me("v-if",!0),b(Vt)?me("v-if",!0):(k(),K(xe,{key:5},[b(zt)?(k(),j(ge,{key:0,to:b(l),class:"icon-btn",title:"Play Mode"},{default:$(()=>[V(ae)]),_:1},8,["to"])):me("v-if",!0),b(GD)?(k(),j(ge,{key:1,to:b(a),class:"icon-btn",title:"Presenter Mode"},{default:$(()=>[V(_e)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(k(),K(xe,{key:6},[b(ke).download?(k(),K("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Me)=>b(Xs)&&b(Xs)(...Me))},[V(Be)])):me("v-if",!0)],64)),!b(zt)&&b(ke).info&&!b(Vt)?(k(),K("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Me=>Do.value=!b(Do))},[V(Ve)])):me("v-if",!0),!b(zt)&&!b(Vt)?(k(),j(g_,{key:8},{button:$(()=>[s("button",v_,[V(qe)])]),menu:$(()=>[V(p_)]),_:1})):me("v-if",!0),b(Vt)?me("v-if",!0):(k(),j(rr,{key:9})),s("div",w_,[s("div",b_,[h($n(b(He))+" ",1),s("span",k_,"/ "+$n(b(td)),1)])]),V(b(__))],34)],512)}}}),Yu={render(){return[]}},Zu={render(){return[]}},T_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},D_=Te({__name:"PresenterMouse",setup(e){return F(I),(t,n)=>{const o=Gu;return b(as).cursor?(k(),K("div",T_,[V(o,{class:"absolute",style:nt({left:`${b(as).cursor.x}%`,top:`${b(as).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),x_=Te({__name:"SlidesShow",props:{context:null},setup(e){F(I),fe(dt,()=>{var n,o;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((o=ps.value)==null?void 0:o.meta)&&ps.value.meta.preload!==!1&&(ps.value.meta.__preloaded=!0)},{immediate:!0});const t=Rt();return io(()=>import("./DrawingLayer.05337ac5.js"),[]).then(n=>t.value=n.default),(n,o)=>(k(),K(xe,null,[me(" Global Bottom "),V(b(Zu)),me(" Slides "),(k(!0),K(xe,null,Uo(b(We),r=>{var i,a;return k(),K(xe,{key:r.path},[((i=r.meta)==null?void 0:i.__preloaded)||r===b(dt)?Ci((k(),j(b(Bi),{key:0,is:r==null?void 0:r.component,clicks:r===b(dt)?b(Ct):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:je(b(Ii)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[hu,r===b(dt)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),V(b(Yu)),b(t)?(k(),j(b(t),{key:0})):me("v-if",!0),b(zt)?me("v-if",!0):(k(),j(D_,{key:1}))],64))}}),$_=Te({__name:"Play",setup(e){F(I),dg();const t=U();function n(i){var a;$l.value||((a=i.target)==null?void 0:a.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?rn():sn())}tx(t);const o=P(()=>b1.value||$l.value);Rt();const r=Rt();return io(()=>import("./DrawingControls.bd63b8f4.js"),["assets/DrawingControls.bd63b8f4.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.637f4f40.js"]).then(i=>r.value=i.default),(i,a)=>(k(),K(xe,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:nt(b(yu))},[V(Ku,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Yn)?b(xn).width.value:void 0,scale:b(dr),onPointerdown:n},{default:$(()=>[V(x_,{context:"slide"})]),controls:$(()=>[s("div",{class:je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(qo)?"pointer-events-none":""]])},[V(S_,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b(ke).drawings.presenterOnly&&!b(Vt)&&b(r)?(k(),j(b(r),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),V(Rg)],64))}});function Qu(e){const t=P(()=>e.value.path),n=P(()=>We.length-1),o=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=P(()=>Jr(o.value)),i=P(()=>We.find(p=>p.path===`${o.value}`)),a=P(()=>{var p,m,g;return(g=(m=(p=i.value)==null?void 0:p.meta)==null?void 0:m.slide)==null?void 0:g.id}),l=P(()=>{var p,m;return(m=(p=i.value)==null?void 0:p.meta)==null?void 0:m.layout}),c=P(()=>We.find(p=>p.path===`${Math.min(We.length,o.value+1)}`)),u=P(()=>We.filter(p=>{var m,g;return(g=(m=p.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((p,m)=>(Ni(p,m),p),[])),d=P(()=>Wi(u.value,i.value)),f=P(()=>Hi(d.value));return{route:e,path:t,total:n,currentPage:o,currentPath:r,currentRoute:i,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:f}}function Xu(e,t,n){const o=U(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),o.value+=1})});const r=P(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),i=P(()=>{var c,u,d;return+((d=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:r.value.length)}),a=P(()=>n.value<We.length-1||e.value<i.value),l=P(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:i,hasNext:a,hasPrev:l}}const P_=["id"],jl=Te({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=jt(n,"clicksElements",t),r=P(()=>({height:`${gu}px`,width:`${Tn}px`})),i=Rt();io(()=>import("./DrawingPreview.b635a527.js"),[]).then(u=>i.value=u.default);const a=P(()=>n.clicks),l=Xu(a,n.nav.currentRoute,n.nav.currentPage),c=P(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(I,Fe({nav:{...n.nav,...l},configs:ke,themeConfigs:P(()=>ke.themeConfig)})),(u,d)=>{var f;return k(),K("div",{id:b(c),class:"slide-container",style:nt(b(r))},[V(b(Zu)),V(b(Bi),{is:(f=e.route)==null?void 0:f.component,"clicks-elements":b(o),"onUpdate:clicks-elements":d[0]||(d[0]=p=>Se(o)?o.value=p:null),clicks:b(a),"clicks-disabled":!1,class:je(b(Ii)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(i)?(k(),j(b(i),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),V(b(Yu))],12,P_)}}}),A_=Te({__name:"PrintSlide",props:{route:null},setup(e){var i;const t=e;F(I);const n=Fe(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),o=P(()=>t.route),r=Qu(o);return(a,l)=>(k(),K(xe,null,[V(jl,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=c=>Se(n)?n.value=c:null),clicks:0,nav:b(r),route:b(o)},null,8,["clicks-elements","nav","route"]),b(xo)?me("v-if",!0):(k(!0),K(xe,{key:0},Uo(n.length,c=>(k(),j(jl,{key:c,clicks:c,nav:b(r),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}}),C_={id:"print-content"},R_=Te({__name:"PrintContainer",props:{width:null},setup(e){const t=e;F(I);const n=P(()=>t.width),o=P(()=>t.width/on),r=P(()=>n.value/o.value),i=P(()=>r.value<on?n.value/Tn:o.value*on/Tn),a=We.slice(0,-1),l=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(mu,i),(c,u)=>(k(),K("div",{id:"print-container",class:je(b(l))},[s("div",C_,[(k(!0),K(xe,null,Uo(b(a),d=>(k(),j(A_,{key:d.path,route:d},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const M_=Te({__name:"Print",setup(e){F(I);const t=vn.canvasWidth,n=Math.round(t/vn.aspectRatio)+1;function o(r,{slots:i}){if(i.default)return pt("style",i.default())}return Vr(()=>{Yn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,i)=>(k(),K(xe,null,[V(o,null,{default:$(()=>[h(" @page { size: "+$n(b(t))+"px "+$n(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(b(yu))},[V(R_,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(xn).width.value},null,8,["style","width"])],4)],64))}});const E_={class:"slidev-layout end"},F_={__name:"end",setup(e){return F(I),(t,n)=>(k(),K("div",E_," END "))}},O_=Ju(F_,[["__scopeId","data-v-ab32435f"]]);function ql(e){return e.startsWith("/")?"/"+e.slice(1):e}function L_(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ql(e)})`:`url("${ql(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const z_={class:"my-auto w-full"},j_=Te({__name:"cover",props:{background:{default:""}},setup(e){const t=e;F(I);const n=P(()=>L_(t.background,!0));return(o,r)=>(k(),K("div",{class:"slidev-layout cover",style:nt(b(n))},[s("div",z_,[wt(o.$slots,"default")])],4))}}),q_=s("h1",null,"European Cruise 2022 - Carnival Pride",-1),I_=s("h2",null,"Italy, Turkey, and Greece",-1),B_=s("h2",null,"October 6 - 22, 2022",-1),V_={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md"};return F(I),(n,o)=>(k(),j(j_,X(Q(t)),{default:$(()=>[q_,I_,B_]),_:1},16))}},N_=["href","innerHTML"],W_=["href"],Vi=Te({__name:"Link",props:{to:null,title:null},setup(e){return F(I),(t,n)=>{const o=Oo("RouterLink");return!b(Yn)&&e.title?(k(),j(o,{key:0,to:String(e.to),onClick:n[0]||(n[0]=r=>r.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!b(Yn)&&!e.title?(k(),j(o,{key:1,to:String(e.to),onClick:n[1]||(n[1]=r=>r.target.blur())},{default:$(()=>[wt(t.$slots,"default")]),_:3},8,["to"])):b(Yn)&&e.title?(k(),K("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,N_)):(k(),K("a",{key:3,href:`#${e.to}`},[wt(t.$slots,"default")],8,W_))}}}),H_={class:"slidev-layout default"},Oe={__name:"default",setup(e){return F(I),(t,n)=>(k(),K("div",H_,[wt(t.$slots,"default")]))}},U_=s("h1",null,"Itinerary at a Glance: Italy -> Cruise Embarkation",-1),K_=s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])],-1),G_=s("td",null,[s("strong",null,"0")],-1),J_=s("td",null,"Thu",-1),Y_=s("td",null,"10/6",-1),Z_=h("Depart JFK on American Airlines Flight 236 to Rome (FCO)"),Q_=s("td",null,[s("strong",null,"1")],-1),X_=s("td",null,"Fri",-1),ev=s("td",null,"10/7",-1),tv=h("Rome -> Florence"),nv=h(", "),ov=h("Explore the Duomo"),rv=h(", "),sv=h("Rooftop Dinner"),iv=s("td",null,[s("strong",null,"2")],-1),av=s("td",null,"Sat",-1),lv=s("td",null,"10/8",-1),cv=s("strong",null,"Florence",-1),uv=h(": "),dv=h("Uffizi"),hv=h(", "),fv=h("Pitti Palace"),pv=h(", "),mv=h("Boboli Gardens"),gv=h(", "),yv=h("Accademia/David"),_v=s("td",null,[s("strong",null,"3")],-1),vv=s("td",null,"Sun",-1),wv=s("td",null,"10/9",-1),bv=h("Florence -> Rome"),kv=h(", "),Sv=h('"Heart of Rome" Walk'),Tv=h(", "),Dv=h("Trevi Fountain"),xv=h(", "),$v=h("Spanish Steps"),Pv=s("td",null,[s("strong",null,"4")],-1),Av=s("td",null,"Mon",-1),Cv=s("td",null,"10/10",-1),Rv=s("strong",null,"Rome",-1),Mv=h(": "),Ev=h("St. Peter\u2019s Square & Basillica"),Fv=h(", "),Ov=h("Roman Forum"),Lv=h(", "),zv=h("Colisseum"),jv=s("td",null,[s("strong",null,"5")],-1),qv=s("td",null,"Tue",-1),Iv=s("td",null,"10/11",-1),Bv=h("Rome -> Civitavecchia"),Vv=h(", "),Nv=h("Embarkation & Cruise Departure"),Wv=s("tr",null,[s("td",null,[s("strong",null,"6,7")]),s("td",null,"Wed/Thu"),s("td",null,"10/12,13"),s("td",null,"At Sea - Carnival Pride")],-1),Hv={__name:"2",setup(e){const t={srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"};return F(I),(n,o)=>{const r=Vi;return k(),j(Oe,X(Q(t)),{default:$(()=>[U_,s("table",null,[K_,s("tbody",null,[s("tr",null,[G_,J_,Y_,s("td",null,[V(r,{to:"5"},{default:$(()=>[Z_]),_:1})])]),s("tr",null,[Q_,X_,ev,s("td",null,[V(r,{to:"6"},{default:$(()=>[tv]),_:1}),nv,V(r,{to:"9"},{default:$(()=>[ov]),_:1}),rv,V(r,{to:"11"},{default:$(()=>[sv]),_:1})])]),s("tr",null,[iv,av,lv,s("td",null,[cv,uv,V(r,{to:"13"},{default:$(()=>[dv]),_:1}),hv,V(r,{to:"16"},{default:$(()=>[fv]),_:1}),pv,V(r,{to:"17"},{default:$(()=>[mv]),_:1}),gv,V(r,{to:"18"},{default:$(()=>[yv]),_:1})])]),s("tr",null,[_v,vv,wv,s("td",null,[V(r,{to:"20"},{default:$(()=>[bv]),_:1}),kv,V(r,{to:"24"},{default:$(()=>[Sv]),_:1}),Tv,V(r,{to:"27"},{default:$(()=>[Dv]),_:1}),xv,V(r,{to:"28"},{default:$(()=>[$v]),_:1})])]),s("tr",null,[Pv,Av,Cv,s("td",null,[Rv,Mv,V(r,{to:"30"},{default:$(()=>[Ev]),_:1}),Fv,V(r,{to:"32"},{default:$(()=>[Ov]),_:1}),Lv,V(r,{to:"34"},{default:$(()=>[zv]),_:1})])]),s("tr",null,[jv,qv,Iv,s("td",null,[V(r,{to:"35"},{default:$(()=>[Bv]),_:1}),Vv,V(r,{to:"37"},{default:$(()=>[Nv]),_:1})])]),Wv])])]),_:1},16)}}},Uv=s("h1",null,"Itinerary at a Glance: Carnival Pride Meditteranean",-1),Kv=s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])],-1),Gv=s("td",null,[s("strong",null,"8")],-1),Jv=s("td",null,"Fri",-1),Yv=s("td",null,"10/14",-1),Zv=s("strong",null,"Mykonos",-1),Qv=s("td",null,[s("strong",null,"9")],-1),Xv=s("td",null,"Sat",-1),e2=s("td",null,"10/15",-1),t2=s("strong",null,"Ephesus",-1),n2=h(" (anchor at Kusadasi, Turkey)"),o2=s("td",null,[s("strong",null,"10")],-1),r2=s("td",null,"Sun",-1),s2=s("td",null,"10/16",-1),i2=s("strong",null,"Santorini",-1),a2=s("td",null,[s("strong",null,"11")],-1),l2=s("td",null,"Mon",-1),c2=s("td",null,"10/17",-1),u2=s("strong",null,"Athens",-1),d2=s("td",null,[s("strong",null,"12")],-1),h2=s("td",null,"Tue",-1),f2=s("td",null,"10/18",-1),p2=s("strong",null,"Olympia",-1),m2=h(" (anchor at Katakolon)"),g2=s("td",null,[s("strong",null,"13")],-1),y2=s("td",null,"Wed",-1),_2=s("td",null,"10/19",-1),v2=s("strong",null,"Sicily",-1),w2=h(" (anchor at Messina)"),b2=s("td",null,[s("strong",null,"14")],-1),k2=s("td",null,"Thu",-1),S2=s("td",null,"10/20",-1),T2=s("strong",null,"Amalfi Coast",-1),D2=h(" (anchor at Naples)"),x2={__name:"3",setup(e){const t={srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"};return F(I),(n,o)=>{const r=Vi;return k(),j(Oe,X(Q(t)),{default:$(()=>[Uv,s("table",null,[Kv,s("tbody",null,[s("tr",null,[Gv,Jv,Yv,s("td",null,[V(r,{to:"39"},{default:$(()=>[Zv]),_:1})])]),s("tr",null,[Qv,Xv,e2,s("td",null,[V(r,{to:"40"},{default:$(()=>[t2,n2]),_:1})])]),s("tr",null,[o2,r2,s2,s("td",null,[V(r,{to:"41"},{default:$(()=>[i2]),_:1})])]),s("tr",null,[a2,l2,c2,s("td",null,[V(r,{to:"42"},{default:$(()=>[u2]),_:1})])]),s("tr",null,[d2,h2,f2,s("td",null,[V(r,{to:"43"},{default:$(()=>[p2,m2]),_:1})])]),s("tr",null,[g2,y2,_2,s("td",null,[V(r,{to:"44"},{default:$(()=>[v2,w2]),_:1})])]),s("tr",null,[b2,k2,S2,s("td",null,[V(r,{to:"45"},{default:$(()=>[T2,D2]),_:1})])])])])]),_:1},16)}}},$2=s("h1",null,"Itinerary at a Glance: Cruise Debarkation/Flight Home",-1),P2=s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])],-1),A2=s("td",null,[s("strong",null,"15")],-1),C2=s("td",null,"Fri",-1),R2=s("td",null,"10/21",-1),M2=h("Debarkation"),E2=h(", "),F2=h("Civitavecchia -> "),O2=s("strong",null,"Rome",-1),L2=h(" by Train"),z2=h(", "),j2=h("Sleep at Airport Hilton"),q2=s("td",null,[s("strong",null,"16")],-1),I2=s("td",null,"Sat",-1),B2=s("td",null,"10/22",-1),V2=h("Depart FCO (Rome) on American Airlines Flight 235 to JFK"),N2={__name:"4",setup(e){const t={srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"};return F(I),(n,o)=>{const r=Vi;return k(),j(Oe,X(Q(t)),{default:$(()=>[$2,s("table",null,[P2,s("tbody",null,[s("tr",null,[A2,C2,R2,s("td",null,[V(r,{to:"49"},{default:$(()=>[M2]),_:1}),E2,V(r,{to:"51"},{default:$(()=>[F2,O2,L2]),_:1}),z2,V(r,{to:"53"},{default:$(()=>[j2]),_:1})])]),s("tr",null,[q2,I2,B2,s("td",null,[V(r,{to:"54"},{default:$(()=>[V2]),_:1})])])])])]),_:1},16)}}},W2=s("h4",null,"Day 0 - Thu 10/6 - Travel Day",-1),H2=s("h2",null,[s("strong",null,"Trans-Atlantic Flight to Rome")],-1),U2=s("h3",null,null,-1),K2=s("h3",null,"\u{1F690} East Haven to JFK by Ground Transport",-1),G2=s("h3",null,[h("Pickup Time 12:00PM at D&D\u2019s House "),s("strong",null,"Confirmed")],-1),J2=s("blockquote",null,[s("p",null,[h("We take a private "),s("strong",null,"Connecticut Limo"),h(" Van from East Haven to JFK "),s("br"),h(" The ride lasts between 2 - 2.5 hours depending on traffic "),s("br"),h(" Round-trip transport costs "),s("strong",null,"$920 + $180 tip ($275 per couple total)")])],-1),Y2=s("br",null,null,-1),Z2=s("h3",null,"\u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane",-1),Q2=s("blockquote",null,[s("p",null,[s("strong",null,"American Airlines Flight 236"),h(),s("a",{href:"https://www.aa.com/travelInformation/flights/status",target:"_blank",rel:"noopener"},"(check Flight Status)"),h(),s("br"),h(" Depart from JFK airport "),s("strong",null,"6:52 PM"),h(),s("br"),h(" The flight time is 8 hours 8 mins "),s("br"),h(" Arrive at Leonardo da Vinci "),s("strong",null,"9:00 AM next day"),h(" (Fri 10/7) "),s("br")])],-1),X2={__name:"5",setup(e){const t={srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[W2,H2,U2,K2,G2,J2,Y2,Z2,Q2]),_:1},16))}},ew=s("h4",null,"Day 1 - Fri 10/7 - Travel Day",-1),tw=s("h2",null,[s("strong",null,"Rome to Florence")],-1),nw=s("p",null,[h("\u2708\uFE0F "),s("strong",null,"9:00 AM"),h(": Scheduled to land at Leonardo da Vinci airport")],-1),ow=s("h3",null,"Airport to Rome",-1),rw=s("p",null,[h("\u{1F68B} "),s("strong",null,"10:30 AM (approximate)"),h(": Take a Train to Rome Termini Station")],-1),sw=s("blockquote",null,[s("p",null,[h("The "),s("a",{href:"https://www.trenitalia.com/en/services/fiumicino_airport.html",target:"_blank",rel:"noopener"},"Leonardo Express"),h(" is a non-stop shuttle train running between the airport train station and Termini Station in Rome. "),s("br"),h(" The ride lasts "),s("strong",null,"32 minutes"),h(", and the train departs every 15-30 minutes depending on the time of day. "),s("br"),h(" Tickets are "),s("strong",null,"\u20AC14"),h(" one-way, purchased individually, or "),s("strong",null,"\u20AC40"),h(' total for 4 tickets when purchased at the "mini-group" fare.')])],-1),iw=s("br",null,null,-1),aw=s("h3",null,"Rome to Florence",-1),lw=s("p",null,[h("\u{1F68B} "),s("strong",null,"Noon (approximate)"),h(": Take a Train to Santa Maria Novella Train Station in Florence")],-1),cw=s("blockquote",null,[s("p",null,[h("A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. "),s("br"),h(" The ride lasts "),s("strong",null,"1 hour 36 mins"),h(", and the train departs every 15-30 minutes depending on the time of day. "),s("br"),h(" Tickets are "),s("strong",null,"\u20AC42"),h(" round trip")])],-1),uw={__name:"6",setup(e){const t={srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[ew,tw,nw,ow,rw,sw,iw,aw,lw,cw]),_:1},16))}},dw="/florence-overview.png",hw=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:dw,height:"400",width:"400"})]),s("td",null,[s("ul",null,[h(" Day 1 "),s("li",null," Walk from SMN Station to AirBnB (near Duomo) "),h(),s("li",null," Explore Duomo, Markets, & Shops "),h(),s("li",null," Rooftop Dinner ")]),h(),s("ul",null,[h(" Day 2 "),s("li",null," Uffizi Gallery, Palazzo Vecchio "),h(),s("li",null," Ponte Vecchio "),h(),s("li",null," Pitti Palace, Boboli Gardens "),h(),s("li",null," Accademia (David) ")])])])])],-1),fw=s("p",null,[s("span",{style:{"font-size":"50%"}},[h("watch "),s("a",{href:"https://youtu.be/qzTyWRcQRXg",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Florence"),h(" (YouTube, 16:22)")])],-1),pw=s("p",null,[s("span",{style:{"font-size":"50%"}},[h("watch "),s("a",{href:"https://youtu.be/q51Atktm244",target:"_blank",rel:"noopener"},"13 Tips for a FANTASTIC Trip to Florence"),h(" (YouTube, 23:02)")])],-1),mw={__name:"7",setup(e){const t={srcSequence:"./slides/02-florence/007-florence-overview.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[hw,fw,pw]),_:1},16))}},gw="/florence-skyline.jpg",yw=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),_w=s("h2",null,[s("strong",null,"Arrival")],-1),vw=s("h3",null,[h("AirBnB - "),s("a",{href:"https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL",target:"_blank",rel:"noopener"},"Via Santa Elisabetta 5, Florence"),h(),s("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),ww=s("p",null,[h("\u{1F6B6}"),s("strong",null,"2:30 (approximate)"),h(": Walk from Train Station to AirBnB "),s("a",{href:"https://goo.gl/maps/j9D5MjAAuP2QKoHS6",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),bw=s("img",{src:gw,height:"250",width:"500",style:{margin:"auto"}},null,-1),kw=s("br",null,null,-1),Sw=s("blockquote",null,[s("p",null,[h("We\u2019ll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. "),s("br")])],-1),Tw={__name:"8",setup(e){const t={srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[yw,_w,vw,ww,bw,kw,Sw]),_:1},16))}},Dw="/duomo-battistero.jpg",xw="/duomo-interior.jpg",$w="/duomo-dome.jpg",Pw=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),Aw=s("h2",null,[s("strong",null,"Exploring The Duomo")],-1),Cw=s("br",null,null,-1),Rw=s("blockquote",null,[s("p",null,'Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within.')],-1),Mw=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Dw,width:"300",height:"150"})]),s("td",null,[s("img",{src:xw,width:"150",height:"300"})]),s("td",null,[s("img",{src:$w,width:"300",height:"150"})])])])],-1),Ew={__name:"9",setup(e){const t={srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[Pw,Aw,Cw,Rw,Mw]),_:1},16))}},Fw="/heart-of-florence-restaurants.jpg",Ow={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Pe=Te({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return F(I),(n,o)=>(k(),K("div",Ow,[s("div",{class:je(["col-left",t.class])},[wt(n.$slots,"default")],2),s("div",{class:je(["col-right",t.class])},[wt(n.$slots,"right")],2)]))}}),Lw=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),zw=s("h2",null,[s("strong",null,"Food & Shopping")],-1),jw=s("blockquote",null,[s("p",null,[h("If you\u2019re hungry, there are many options near the AirBnB including: "),s("br")]),s("ul",null,[s("li",null,[s("a",{href:"https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html",target:"_blank",rel:"noopener"},[s("strong",null,"Caffeteria della Oblate")]),h(", a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.")]),s("li",null,[s("a",{href:"https://www.mercatocentrale.com/florence/how-it-works/",target:"_blank",rel:"noopener"},[s("strong",null,"Mercato Centrale")]),h(" The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.")])])],-1),qw=s("br",null,null,-1),Iw=s("blockquote",null,[s("ul",null,[s("li",null,[s("a",{href:"https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html",target:"_blank",rel:"noopener"},[s("strong",null,"San Lorenzo Market")]),h(" If you\u2019re itching to start shopping, step outside the Mercato Centrale and you\u2019ll find vendor stalls hawking all kinds of leather goods. Be sure to negotiate to get the best price!")])])],-1),Bw=s("br",null,null,-1),Vw=s("blockquote",null,[s("p",null,"We\u2019ll grab fresh food to bring back to the AirBnB for tomorrow\u2019s breakfast before our busy sightseeing day in Florence!")],-1),Nw=s("img",{src:Fw,height:"450",width:"450",style:{margin:"auto"}},null,-1),Ww={__name:"10",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[Nw]),default:$(()=>[Lw,zw,jw,qw,Iw,Bw,Vw]),_:1},16))}},Hw=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),Uw=s("h2",null,[s("strong",null,"Rooftop Dinner")],-1),Kw=s("br",null,null,-1),Gw=s("blockquote",null,[s("p",null,'Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we\u2019ll take a leisurely "golden hour" dinner at one of Florence\u2019s rooftop restaurants')],-1),Jw=s("br",null,null,-1),Yw=s("h3",null,[h("Angel Roofbar - Hotel Calimala "),s("span",{style:{color:"red"}},[s("strong",null,"(unconfirmed)")])],-1),Zw=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("a",{href:"https://www.hotelcalimala.com/angel-roofbar-dining",target:"_blank",rel:"noopener"},"website"),h(" / "),s("a",{href:"https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf",target:"_blank",rel:"noopener"},"dinner menu")]),s("td",null,[s("img",{src:"https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg",width:"400",height:"150"})])]),s("tr",null,[s("td",null,[s("br")]),s("td")])])],-1),Qw={__name:"11",setup(e){const t={srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[Hw,Uw,Kw,Gw,Jw,Yw,Zw]),_:1},16))}},Xw="/palazzo-vecchio-firenze.jpg",eb="/courtyard-palazzo-vecchio.jpg",tb="/florence-renaissance-walk.jpg",nb=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),ob=s("h2",null,[s("strong",null,"Renaissance Walk")],-1),rb=s("p",null,[h("\u{1F6B6}"),s("strong",null,"8:30 AM"),h(": Walk to Uffizi Gallery "),s("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),sb=s("blockquote",null,[s("p",null,[h("This is the beginning of our whirlwind Florence sightseeing day."),s("br"),h(" Fabulous examples of Renaissance architecture span the walk."),s("br"),h(" If you miss one, don\u2019t worry, we\u2019ll follow the same route back. "),s("br")])],-1),ib=s("p",null,"\u{1F4F7} Palazzo Vecchio",-1),ab=s("td",null,[s("img",{src:Xw,height:"100",width:"200"})],-1),lb=s("td",null,[s("img",{src:eb,height:"95",width:"190"})],-1),cb=s("blockquote",null,[s("p",null,"Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city.")],-1),ub=s("img",{src:tb,height:"600",width:"300",style:{margin:"auto"}},null,-1),db={__name:"12",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[ub]),default:$(()=>[nb,ob,rb,sb,ib,ab,lb,cb]),_:1},16))}},hb="/birth-of-venus.jpg",fb="/uffizi-gallery-floor-plan.png",pb=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),mb=s("h2",null,[s("strong",null,"Uffizi Gallery")],-1),gb=s("p",null,[h("\u{1F3F0} "),s("strong",null,"9:00 - 9:15 AM"),h(": Timed Entry into Uffizi Gallery"),s("br"),s("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),yb=s("blockquote",null,[s("p",null,[h('See the greatest collection of Italian Renaissance paintings in the world, including Botticelli\u2019s iconic "Birth of Venus".'),s("br"),s("span",{style:{"font-size":"50%"}},[h("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Uffizi Gallery Audio Tour"),h(" (MP3, 1:01:35)")])])],-1),_b=s("br",null,null,-1),vb=s("img",{src:hb,height:"125",width:"250",style:{margin:"auto"}},null,-1),wb=s("br",null,null,-1),bb=s("blockquote",null,[s("p",null,"Seeing priceless works of art makes you hungry, right?")],-1),kb=s("img",{src:fb,height:"800",width:"400",style:{margin:"auto"}},null,-1),Sb={__name:"13",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[kb]),default:$(()=>[pb,mb,gb,yb,_b,vb,wb,bb]),_:1},16))}},Tb="/florence-allantico-vinaio.jpeg",Db=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),xb=s("h2",null,[s("strong",null,"Panini at All\u2019antico Vinaio")],-1),$b=s("h4",null,[h("Lunch Option #1 "),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.allanticovinaio.com/il-menu-firenze_en/",target:"_blank",rel:"noopener"},"Menu")])],-1),Pb=s("p",null,[h("\u{1F6B6}"),s("strong",null,"10:45 AM"),h(": Walk from Uffizi to All\u2019Antico Vinaio"),s("br"),s("span",{style:{"font-size":"75%"}},[h("("),s("a",{href:"https://goo.gl/maps/Aup9R2km7X4VQZgS6",target:"_blank",rel:"noopener"},"5 mins"),h(", allow up to "),s("strong",null,"one hour"),h(" to wait in line)")])],-1),Ab=s("blockquote",null,[s("p",null,[h("If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. "),s("br"),h(" The wait may last as much as "),s("strong",null,"an hour or more"),h(", but nearly all who visit agree, its time well spent.")])],-1),Cb=s("p",null,[h("\u{1F6B6}"),s("strong",null,"Between 11:15-12:00 PM"),h(": Walk to Pitti Palace"),s("br"),s("span",{style:{"font-size":"75%"}},[s("a",{href:"https://goo.gl/maps/UUc7SxPFN43kujLb6",target:"_blank",rel:"noopener"},"(11 mins)")])],-1),Rb=s("p",null,"Panini in hand, walk down to the river Arno towards the Ponte Vecchio",-1),Mb=s("img",{src:Tb,height:"200",width:"400",style:{margin:"auto"}},null,-1),Eb={__name:"14",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[Mb]),default:$(()=>[Db,xb,$b,Pb,Ab,Cb,Rb]),_:1},16))}},Fb="/ponte-vecchio.jpg",Ob="/florence-oltrarno.jpg",Lb=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),zb=s("h2",null,[s("strong",null,"Ponte Vecchio")],-1),jb=s("p",null,[h("\u{1F6B6}"),s("strong",null,"12:00 PM"),h(": Walk to Pitti Palace "),s("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),qb=s("blockquote",null,[s("p",null,"We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500\u2019s, to be replaced by goldsmiths that remain to this day.")],-1),Ib=s("ul",null,[s("li",null,[h("\u{1F4F7} Ponte Vecchio "),s("img",{src:Fb,height:"125",width:"250"})])],-1),Bb=s("br",null,null,-1),Vb=s("blockquote",null,[s("p",null,'Next, we\u2019ll cross into the Oltrarno, literally the "other side of the River Arno".')],-1),Nb=s("img",{src:Ob,height:"800",width:"400",style:{margin:"auto"}},null,-1),Wb={__name:"15",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[Nb]),default:$(()=>[Lb,zb,jb,qb,Ib,Bb,Vb]),_:1},16))}},Hb="/palatine-gallery-floor-plan.jpg",Ub=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Kb=s("h2",null,[s("strong",null,"Pitti Palace")],-1),Gb=s("details",null,[s("summary",null,[s("span",{style:{"font-size":"75%"}}," click here for Lunch Option #2 ")]),s("p",null,[s("span",{style:{"font-size":"75%"}},[h('If we missed out on panini at "All\u2019Antico Vinaio", here\u2019s another option:'),s("br"),s("a",{href:"https://trattorialacasalinga.it/en/our-menu/",target:"_blank",rel:"noopener"},"Trattoria La Casalinga")]),h(),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://goo.gl/maps/cXGgZQteLjhBNHPUA",target:"_blank",rel:"noopener"},"map")])])],-1),Jb=s("p",null,[h("\u{1F3F0} "),s("strong",null,"12:30 PM"),h(": Entry into Pitti Palace"),s("br"),s("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),Yb=s("h3",null,"Palantine Gallery",-1),Zb=s("blockquote",null,[s("p",null,[h("Pitti Palace houses multiple museums and gardens. Here, we\u2019re going to focus on "),s("a",{href:"https://www.uffizi.it/en/pitti-palace/palatine-gallery",target:"_blank",rel:"noopener"},"Palantine Gallery"),h(", which features works by Raphael, Titian, and Rembrandt.")])],-1),Qb=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.palazzo-pitti.net/the-palatine-gallery.html",target:"_blank",rel:"noopener"},"Detailed Room Descriptions (with pictures)")])],-1),Xb=s("img",{src:Hb,height:"400",width:"800",style:{margin:"auto"}},null,-1),ek={__name:"16",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[Xb]),default:$(()=>[Ub,Kb,Gb,Jb,Yb,Zb,Qb]),_:1},16))}},tk="/pitti-palace-boboli-gardens-map.png",nk="/florence-boboli-entrance.jpg",ok="/florence-boboli-fountains.jpg",rk=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),sk=s("h2",null,[s("strong",null,"Boboli Gardens")],-1),ik=s("blockquote",null,[s("p",null,"The gardens are vast, with sloping hills leading up to spectular views of Florence.")],-1),ak=s("p",null,[h("\u{1F6B6}"),s("strong",null,"2:00 PM"),h(": Explore Boboli Gardens "),s("span",{style:{"font-size":"75%"}},"(approx 30 minutes)")],-1),lk=s("blockquote",null,[s("p",null,"We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.")],-1),ck=s("p",null,[s("span",{style:{"font-size":"75%"}},[s("a",{href:"https://goo.gl/maps/K6riqmBPWh3Ga8wp8",target:"_blank",rel:"noopener"},"suggested walking tour")])],-1),uk=s("img",{src:tk,height:"200",width:"400",style:{margin:"auto"}},null,-1),dk=s("table",null,[s("thead",null,[s("tr",null,[s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:nk,height:"175",width:"350",style:{margin:"auto"}})])]),s("tr",null,[s("td",null,[s("img",{src:ok,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),hk={__name:"17",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[dk]),default:$(()=>[rk,sk,ik,ak,lk,ck,uk]),_:1},16))}},fk="/florence-statue-of-david.jpg",pk="/accademia-floor-plan.png",mk=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),gk=s("h2",null,[s("strong",null,"Accademia")],-1),yk=s("h4",null,[h("(Michelangelo\u2019s "),s("strong",null,"David"),h(")")],-1),_k=s("p",null,[h("\u{1F3F0} "),s("strong",null,"4:30 - 4:45 PM"),h(": Timed Entry into "),s("br"),h(" Galleria dell\u2019Accademia "),s("span",{style:{"font-size":"75%"}},"Allow 1 hour to tour")],-1),vk=s("img",{src:fk,height:"150",width:"300",style:{margin:"auto"}},null,-1),wk=s("br",null,null,-1),bk=s("blockquote",null,[s("p",null,[h("This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance. The museum also includes some of Michelangelo\u2019s other works, and a couple of Botticellis."),s("br"),s("span",{style:{"font-size":"50%"}},[h("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Accademia & Michaelangelo\u2019s David Audio Tour"),h(" (MP3, 25:11)")])])],-1),kk=s("img",{src:pk,height:"650",width:"325",style:{margin:"auto"}},null,-1),Sk={__name:"18",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[kk]),default:$(()=>[mk,gk,yk,_k,vk,wk,bk]),_:1},16))}},Tk="/florence-b-roof.jpg",Dk=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),xk=s("h2",null,[s("strong",null,"Rooftop Dinner"),h(),s("span",{style:{color:"red"}},[s("strong",null,"(unconfirmed)")])],-1),$k=s("br",null,null,-1),Pk=s("img",{src:Tk,height:"200",width:"400",style:{margin:"auto"}},null,-1),Ak=s("br",null,null,-1),Ck=s("blockquote",null,[s("p",null,[h("The panoramic "),s("a",{href:"https://www.b-roof.it/en",target:"_blank",rel:"noopener"},[s("strong",null,"B Roof")]),h(" restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.")])],-1),Rk={__name:"19",setup(e){const t={srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[Dk,xk,$k,Pk,Ak,Ck]),_:1},16))}},Mk="/florence-to-rome.png",Ek=s("h4",null,"Day 3 - Sun 10/9 - Travel Day",-1),Fk=s("h2",null,[s("strong",null,"Florence to Rome")],-1),Ok=s("blockquote",null,[s("p",null,"It\u2019s time to say goodbye to Florence. Check-out time is 11:00, but we\u2019re going to try to get an early start for the trip back to Rome.")],-1),Lk=s("p",null,[h("\u{1F6B6}"),s("strong",null,"9:30 (approximate)"),h(": Walk from AirBnB to Train Station "),s("a",{href:"https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),zk=s("p",null,[h("\u{1F68B} "),s("strong",null,"10:00 - 10:30 AM (approximate)"),h(": Take a Train to Termini Train Station in Rome")],-1),jk=s("img",{src:Mk,height:"800",width:"400",style:{margin:"auto"}},null,-1),qk=s("br",null,null,-1),Ik=s("blockquote",null,[s("p",null,[h("A bullet train runs from "),s("strong",null,"Santa Maria Novella"),h(" Train Station in Florence to "),s("strong",null,"Termini"),h(" Station in Rome. "),s("br"),h(" The ride lasts "),s("strong",null,"1 hour 36 mins"),h(", and the train departs every 15-30 minutes depending on the time of day. "),s("br")])],-1),Bk={__name:"20",setup(e){const t={srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[Ek,Fk,Ok,Lk,zk,jk,qk,Ik]),_:1},16))}},Vk="/rome-neighborhoods.png",Nk=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Vk,height:"400",width:"400"})]),s("td",null,[s("ul",null,[h(" Day 3 "),s("li",null," Walk from Rome Termini Station to AirBnB "),h(),s("li",null," Altar of the Fatherland "),h(),s("li",null,' "Heart of Rome" Walking Tour ')]),h(),s("ul",null,[h(" Day 4 "),s("li",null," St. Peter\u2019s Square "),h(),s("li",null," Roman Forum "),h(),s("li",null," Colisseum ")])])])])],-1),Wk=s("p",null,[s("span",{style:{"font-size":"50%"}},[h("watch "),s("a",{href:"https://youtu.be/aaKl40z6MSw",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Rome"),h(" (YouTube, 24:05) ")])],-1),Hk={__name:"21",setup(e){const t={srcSequence:"./slides/03-rome/021-rome-overview.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[Nk,Wk]),_:1},16))}},Uk="/rome-lazio.jpg",Kk="/rome-airbnb.png",Gk=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),Jk=s("h2",null,[s("strong",null,"Arrival")],-1),Yk=s("h3",null,[s("a",{href:"https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL",target:"_blank",rel:"noopener"},"AirBnB - Via Merulana, 94 int 6, Rome"),h(),s("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),Zk=s("p",null,[h("\u{1F6B6}"),s("strong",null,"12:30 (approximate)"),h(": Walk from Train Station to AirBnB "),s("a",{href:"https://goo.gl/maps/UoVfD7pYrtoNMjom7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),Qk=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Uk,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:Kk,width:"275",height:"275"}),h(),s("span",{style:{"font-size":"50%"}},"(our apartment is on the third floor)")])])])],-1),Xk=s("blockquote",null,[s("p",null,"We\u2019ll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day\u2019s sightseeing.")],-1),e3={__name:"22",setup(e){const t={srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[Gk,Jk,Yk,Zk,Qk,Xk]),_:1},16))}},t3="/rome-altar-of-the-fatherland.jpg",n3="/rome-airbnb-to-piazza-navona.png",o3=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),r3=s("h2",null,[s("strong",null,"Altar of the Fatherland")],-1),s3=s("blockquote",null,[s("p",null,[h("We\u2019ll walk right past the Colosseum on our way to the "),s("strong",null,"Altare della Patria"),h(' ("Altar of the Fatherland").')])],-1),i3=s("p",null,[h("\u{1F6B6}"),s("strong",null,"2:00"),h(": Walk from AirBnB to the Altar of the Fatherland "),s("a",{href:"https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9",target:"_blank",rel:"noopener"},"(30 minutes)")],-1),a3=s("blockquote",null,[s("p",null,"This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy\u2019s first king, seated on horseback in bronze.")],-1),l3=s("blockquote",null,[s("p",null,"Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.")],-1),c3=s("p",null,[h("\u{1F6B6}"),s("strong",null,"3:00"),h(": Walk from the Altar of the Fatherland to the Piazza Navona"),s("a",{href:"https://goo.gl/maps/rARoH2ixzgtR4ssL9",target:"_blank",rel:"noopener"},"(15 minutes)")],-1),u3=s("blockquote",null,[s("p",null,"The expansive Piazza Navona marks the starting point of our walk through the heart of Rome")],-1),d3=s("img",{src:t3,height:"200",width:"400",style:{margin:"auto"}},null,-1),h3=s("br",null,null,-1),f3=s("img",{src:n3,height:"319",width:"425",style:{margin:"auto"}},null,-1),p3={__name:"23",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[d3,h3,f3]),default:$(()=>[o3,r3,s3,i3,a3,l3,c3,u3]),_:1},16))}},m3="/heart-of-rome-walk-map.png",g3=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),y3=s("h2",null,[s("strong",null,'"Heart of Rome" Walk')],-1),_3=s("p",null,[h("\u{1F6B6}"),s("strong",null,"3:30"),h(": Walk from the Piazza Navona to Spanish Steps "),s("a",{href:"https://goo.gl/maps/RzCEs3sUTsuqyFvg6",target:"_blank",rel:"noopener"},"(30 minutes walk, plus stops)")],-1),v3=s("blockquote",null,[s("p",null,"This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:")],-1),w3=s("br",null,null,-1),b3=s("ul",null,[s("li",null,"Piazza Navona"),s("li",null,"The Pantheon"),s("li",null,"Parliament"),s("li",null,"Piazza Colonna/Via del Corso"),s("li",null,"Trevi Fountain"),s("li",null,"Spanish Steps")],-1),k3=s("p",null,[s("span",{style:{"font-size":"50%"}},[h("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Heart of Rome Audio Tour"),h(" (MP3, 1:08:07)")])],-1),S3=s("img",{src:m3,height:"400",width:"400",style:{margin:"auto"}},null,-1),T3={__name:"24",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[S3]),default:$(()=>[g3,y3,_3,v3,w3,b3,k3]),_:1},16))}},D3="/rome-pantheon-exterior.jpg",x3="/rome-pantheon-floor-plan.png",$3=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),P3=s("h2",null,[s("strong",null,"Pantheon")],-1),A3=s("br",null,null,-1),C3=s("img",{src:D3,height:"200",width:"400",style:{margin:"auto"}},null,-1),R3=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"65%"}},"The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.")])],-1),M3=s("span",{style:{"font-size":"50%"}}," (open until 6:00 PM)",-1),E3=h(),F3=s("br",null,null,-1),O3=s("p",null,[s("span",{style:{"font-size":"50%"}},[h("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Pantheon Audio Tour"),h(" (MP3, 23:20)")])],-1),L3=s("img",{src:x3,height:"800",width:"400",style:{margin:"auto"}},null,-1),z3={__name:"25",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[L3]),default:$(()=>[$3,P3,A3,C3,R3,M3,E3,F3,O3]),_:1},16))}},j3="/rome-piazza-di-montecitorio.jpg",q3="/rome-parliament.jpg",I3="/rome-piazza-colonna.jpeg",B3=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),V3=s("h2",null,[s("strong",null,"Piazza di Montecitorio, Parliament, Piazza Colonna")],-1),N3=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:j3,width:"300",height:"150"})]),s("td",null,[s("img",{src:q3,width:"200",height:"400"})]),s("td",null,[s("img",{src:I3,width:"300",height:"150"})])])])],-1),W3=s("blockquote",null,[s("p",null,"Walking from the Pantheon towards the Trevi Fountain, we\u2019ll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.")],-1),H3=s("blockquote",null,[s("p",null,"One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD. This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.")],-1),U3={__name:"26",setup(e){const t={srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[B3,V3,N3,W3,H3]),_:1},16))}},K3="/rome-trevi-fountain-night.jpg",G3=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),J3=s("h2",null,[s("strong",null,"Trevi Fountain")],-1),Y3=s("p",null,[h("\u{1F4F7} "),s("strong",null,"6:00 (approximate)"),h(": Arrive at the Trevi Fountain")],-1),Z3=s("blockquote",null,[s("p",null,"Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.")],-1),Q3=s("br",null,null,-1),X3=s("blockquote",null,[s("p",null,'We\u2019ll see the Trevi Fountain twice today. Once during the "golden hour", illuminated by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.')],-1),e5=s("br",null,null,-1),t5=s("blockquote",null,[s("p",null,[h("If you want to skip the previous parts of this walk, and do something else for the afternoon, "),s("strong",null,"6:00 PM"),h(" is the time we should all meet up, before we head on to the Spanish Steps.")])],-1),n5=s("img",{src:K3,height:"200",width:"400",style:{margin:"auto"}},null,-1),o5={__name:"27",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[n5]),default:$(()=>[G3,J3,Y3,Z3,Q3,X3,e5,t5]),_:1},16))}},r5="/spanish-steps.jpg",s5=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),i5=s("h2",null,[s("strong",null,"Spanish Steps")],-1),a5=s("p",null,[s("span",{style:{"font-size":"80%"}},[h("\u{1F6B6}"),s("strong",null,"6:30"),h(": Walk from Trevi Fountain to the Spanish Steps "),s("a",{href:"https://goo.gl/maps/MKdDinjuN6Tthqzu7",target:"_blank",rel:"noopener"},"(8 mins)")])],-1),l5=s("blockquote",null,[s("p",null,[h('138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini\u2019s father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.'),s("br"),h(" Partway up, the steps fan out around a central terrace, forming a butterfly shape. An obelisk, framed by two Baroque church towers, stands at the top.")])],-1),c5=s("p",null,"This is where our touring for the day ends. We\u2019ll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.",-1),u5=s("blockquote",null,[s("p",null,[h("Enjoy the steps, but whatever you do, don\u2019t sit down on them, or it\u2019ll cost you a "),s("strong",null,"\u20AC250 fine"),h(" (seriously).")])],-1),d5=s("img",{src:r5,height:"250",width:"500",style:{margin:"auto"}},null,-1),h5={__name:"28",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[d5]),default:$(()=>[s5,i5,a5,l5,c5,u5]),_:1},16))}},f5="/rome-metro-to-vatican.png",p5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),m5=s("h2",null,[s("strong",null,"Metro Ride to St. Peter\u2019s Square")],-1),g5=s("span",{style:{"font-size":"70%"}},[s("p",null,[h("\u{1F68B} - Take the "),s("strong",null,"Metro (Line A - Battistini)"),h(" from "),s("strong",null,"Vittorio Emanuele"),h(" to "),s("strong",null,"Ottavio"),h(),s("br"),h(),s("a",{href:"https://goo.gl/maps/YTmeLq1JWEF5V11w9",target:"_blank",rel:"noopener"},"30 mins total")])],-1),y5=s("span",{style:{"font-size":"65%"}},[s("h5",null,"Detailed Directions"),s("ul",null,[s("li",null,[h("Walk from "),s("strong",null,"Via Merulana"),h(" toward "),s("strong",null,"Via Machiavelli"),h(" to "),s("strong",null,"Vittorio Emanuele Station"),h(),s("br"),h(" (6 mins)")]),s("li",null,[h("Ride "),s("strong",null,"Line A"),h(" 7 stops to "),s("strong",null,"Ottaviano"),h(" (10 mins)")]),s("li",null,[h("Walk south on "),s("strong",null,"Via Ottaviano"),h(" toward "),s("strong",null,"Via degli Scipioni"),h(", continue onto "),s("strong",null,"Via di Porta Angelica"),h(", which becoms "),s("strong",null,"Largo Del Colonnato"),h(" (11 mins)")])])],-1),_5=s("img",{src:f5,height:"250",width:"500",style:{margin:"auto"}},null,-1),v5=s("br",null,null,-1),w5=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"70%"}},[h("All public transportation uses the same ticket."),s("br"),h(" It costs "),s("strong",null,"\u20AC1.50"),h(" and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.")])])],-1),b5={__name:"29",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[_5,v5,w5]),default:$(()=>[p5,m5,g5,y5]),_:1},16))}},k5="/st-peters-square.jpg",S5="/rome-st-peters-basilica-exterior.jpg",T5="/rome-st-peters-basilica-interior.jpeg",D5="/rome-pieta.jpg",x5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),$5=s("h2",null,[s("strong",null,"St Peter\u2019s Square and Basilica")],-1),P5=s("br",null,null,-1),A5=s("h4",null,"St. Peter\u2019s Square",-1),C5=s("blockquote",null,[s("p",null,[h("284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall. Bernini designed this square, which is really an ellipse that\u2019s roughly the same dimensions as the Colosseum. "),s("br"),h(" A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times.")])],-1),R5=s("br",null,null,-1),M5=s("h4",null,"St. Peter\u2019s Basilica",-1),E5=s("blockquote",null,[s("p",null,[h("Once you\u2019ve seen the square, its time to set foot inside the richest and grandest church on Earth. Michelangelo\u2019s "),s("strong",null,"Pieta"),h(" sits behind bulletproof glass just to the right of the entrance.")])],-1),F5=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("strong",null,"Dress Code"),h(": No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).")])],-1),O5=s("img",{src:k5,height:"175",width:"350",style:{margin:"auto"}},null,-1),L5=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:S5,height:"175",width:"350",style:{margin:"auto"}})]),s("td",null,[s("img",{src:T5,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),z5=s("img",{src:D5,height:"75",width:"150",style:{margin:"auto"}},null,-1),j5={__name:"30",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[O5,L5,z5]),default:$(()=>[x5,$5,P5,A5,C5,R5,M5,E5,F5]),_:1},16))}},q5="/rome-st-peters-walk-to-forum.png",I5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),B5=s("h2",null,[s("strong",null,"Walk to the Forum")],-1),V5=s("p",null,[h("\u{1F6B6}"),s("strong",null,"12:00 PM (approx.)"),h(": Walk from St. Peter\u2019s Square to the Roman Forum "),s("a",{href:"https://goo.gl/maps/rNAWJa3WxTxV2KLh9",target:"_blank",rel:"noopener"},"(36 minutes)")],-1),N5=s("blockquote",null,[s("p",null,[h("This 1.8 mile walk crosses the River Tiber at the "),s("strong",null,"Ponte Vittorio Emanuele II"),h(" continuing to the "),s("strong",null,"Corso Vittorio Emaulele II"),h(", a main east-west artery.")])],-1),W5=s("br",null,null,-1),H5=s("img",{src:q5,height:"325",width:"650",style:{margin:"auto"}},null,-1),U5={__name:"31",setup(e){const t={srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[I5,B5,V5,N5,W5,H5]),_:1},16))}},K5="/rome-forum.jpg",G5="/rome-forum-map.png",J5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),Y5=s("h2",null,[s("strong",null,"The Forum")],-1),Z5=s("img",{src:K5,height:"150",width:"300",style:{margin:"auto"}},null,-1),Q5=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"75%"}}," We\u2019ll begin our tour at the entrance near the Via Dei Fori Imperiali. Imagine traveling back in time to ancient Rome, your mind\u2019s eye filling in the missing parts of these massive structures, with their colorful marble veneers intact. Listen to the historical perspective provided by the audio and walking tours linked below for all the rich history crammed into this, the heart and cradle of Roman civilization.")])],-1),X5=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://podcasts.ricksteves.com/walkingtours/RomanForum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Roman Forum Audio Tour"),h(" (MP3, 1:08:07)")]),s("br"),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://youtu.be/k4P5W1DKTBI",target:"_blank",rel:"noopener"},"Walking Tour of the Forum"),h(" (51:00, ProWalk Tours, YouTube)")]),s("br"),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.google.com/maps/d/viewer?mid=1aWn5IgwI9hf1TuPa99xjYkA7q7NegYsK&ll=41.8917763120126%2C12.487398700000005&z=17",target:"_blank",rel:"noopener"},"Map of the Walking Tour"),h(" (Google Maps)")])],-1),e4=s("img",{src:G5,height:"550",width:"275",style:{margin:"auto"}},null,-1),t4={__name:"32",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[e4]),default:$(()=>[J5,Y5,Z5,Q5,X5]),_:1},16))}},n4="/rome-palatine-valley.jpg",o4="/rome-palatine-circus-maximus.jpg",r4=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),s4=s("h2",null,[s("strong",null,"Palatine Hill")],-1),i4=s("blockquote",null,[s("p",null,"Humans first settled on the Palatine Hill in the 10th century BC: 200 years before Romulus founded Rome. Throughout the Roman Republic and Roman Empire, it was continuously inhabited: first by Rome\u2019s most eminent residents, incluing Romulus himself, later by the city\u2019s succession of Caesars.")],-1),a4=s("br",null,null,-1),l4=s("blockquote",null,[s("p",null,'Today, only the barest skeleton remains to tell the story of this, the "Beverly Hills" of the ancient world. in addition to providing an excellent vantage point for viewing the entire Forum.')],-1),c4=s("img",{src:n4,height:"600",width:"300",style:{margin:"auto"}},null,-1),u4=s("br",null,null,-1),d4=s("img",{src:o4,height:"600",width:"300",style:{margin:"auto"}},null,-1),h4={__name:"33",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[c4,u4,d4]),default:$(()=>[r4,s4,i4,a4,l4]),_:1},16))}},f4="/rome-colosseum.jpg",p4="/rome-colosseum-map.png",m4=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),g4=s("h2",null,[s("strong",null,"Colosseum")],-1),y4=s("p",null,[h("\u{1F3F0} "),s("strong",null,"3:15 PM"),h(": Timed Entry into Uffizi Gallery"),s("br")],-1),_4=s("img",{src:f4,height:"175",width:"350",style:{margin:"auto"}},null,-1),v4=s("br",null,null,-1),w4=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"75%"}},"Here it is, a 2,000 year old masterpiece of Roman engineering, where 50,000 Romans watched all manner of violent entertainment, paid for by the Emperor.")])],-1),b4=s("p",null,[s("span",{style:{"font-size":"50%"}},[h("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Colosseum Audio Tour"),h(" (MP3, 41:05)")])],-1),k4=s("img",{src:p4,height:"600",width:"300",style:{margin:"auto"}},null,-1),S4={__name:"34",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[k4]),default:$(()=>[m4,g4,y4,_4,v4,w4,b4]),_:1},16))}},T4=s("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),D4=s("h2",null,[s("strong",null,"Rome to Civitavecchia")],-1),x4=s("p",null,[h("\u{1F6B6}"),s("strong",null,"Between 9:00 & 9:30"),h(" Walk from AirBnB to Rome Termini Station"),s("br"),s("a",{href:"https://goo.gl/maps/J3KiqJxWc3nP7PwG7",target:"_blank",rel:"noopener"},[s("span",{style:{"font-size":"75%"}},"(30 mins total)")])],-1),$4=s("p",null,[h("\u{1F68B} "),s("strong",null,"Between 10:00 & 11:00 AM"),h(": Take a Train to Civitavecchia (approx. 1 - 1.5 hrs)")],-1),P4=s("p",null,[s("a",{href:"trenitalia.com/en.html",target:"_blank",rel:"noopener"},"Train Schedule")],-1),A4=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Train #"),s("th",null,"Depart"),s("th",null,"Duration"),s("th",null,"Arrive")])]),s("tbody",null,[s("tr",null,[s("td",null,"4128"),s("td",null,"10:12 AM"),s("td",null,"1h 1m"),s("td",null,"11:13 AM")]),s("tr",null,[s("td",null,"12514"),s("td",null,"10:42 AM"),s("td",null,"1h 17m"),s("td",null,"11:59 AM")]),s("tr",null,[s("td",null,"12516"),s("td",null,"11:12 AM"),s("td",null,"1h 4m"),s("td",null,"12:16 PM")]),s("tr",null,[s("td",null,"12520"),s("td",null,"11:42 AM"),s("td",null,"1h 23m"),s("td",null,"1:05 PM")])])],-1),C4={__name:"35",setup(e){const t={srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[T4,D4,x4,$4,P4,A4]),_:1},16))}},R4=s("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),M4=s("h2",null,[s("strong",null,"Civitavecchia Train Station to Transit Center")],-1),E4=s("p",null,"Upon arrival to the Train Station in Civitavecchia, there are two options for transferring from the station to the Transit Center at Largo Della Pace:",-1),F4=s("h4",null,[s("strong",null,"Shuttle Bus \u20AC2")],-1),O4=s("p",null,"City-run shuttle buses run every 10 minutes between the train station and the transit center",-1),L4=s("h4",null,[s("strong",null,"Taxi \u20AC15-20")],-1),z4=s("p",null,"You can hire a cab from the station to Largo Della Pace, directly across from the transit center, at a premium.",-1),j4={__name:"36",setup(e){const t={srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[R4,M4,E4,F4,O4,L4,z4]),_:1},16))}},q4=s("h4",null,"Day 5 - Tue 10/11 - Cruise Day 1",-1),I4=s("h2",null,[s("strong",null,"Transit Center to Port, Embarkation and Cruise Departure")],-1),B4=s("p",null,"The port area itself is secured, and you are not allowed to walk into the Cruise Terminal directly.",-1),V4=s("h3",null,[s("strong",null,"Transit Center")],-1),N4=s("p",null,"Free and frequent shuttle buses connect the Transit Center with the Cruise Terminal",-1),W4=s("h3",null,[s("strong",null,"Boarding Times")],-1),H4=s("p",null,[h("According to the Boarding Passes provided by Carnival: "),s("br"),h(' "All guests must arrive within their Arrival Appointment. Guests who arrive earlier will be turned away and asked to return at their designated time"')],-1),U4=s("p",null,[h("12:30 - 1:00: D&D, J&J "),s("br"),h(" 1:30 - 2:00: T&K "),s("br"),h(" 2:00 - 2:30: W&R "),s("br"),h(" 6:00: "),s("span",{style:{color:"red"}},"FINAL BOARDING")],-1),K4=s("p",null,[h("\u{1F6A2} "),s("strong",null,"7:00"),h(": Depart port")],-1),G4={__name:"37",setup(e){const t={srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[q4,I4,B4,V4,N4,W4,H4,U4,K4]),_:1},16))}},J4=s("h4",null,"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",-1),Y4=s("h2",null,[s("strong",null,"Days at Sea")],-1),Z4={__name:"38",setup(e){const t={srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[J4,Y4]),_:1},16))}},Q4=s("h4",null,"Day 8 - Fri 10/14 - Cruise Day 4",-1),X4=s("h2",null,[s("strong",null,"Mykonos")],-1),eS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"9:00"),h(": Arrive at port")],-1),tS=s("h3",null,"Shore Excursions",-1),nS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"9:30")],-1),oS=s("ul",null,[s("li",null,[h("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930",target:"_blank",rel:"noopener"},"Sailing Trip Around Mykonos\u2019 Famous Beaches"),h(" (5 hours)")])],-1),rS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"6:00"),h(": Depart port")],-1),sS=s("p",null,[s("a",{href:"https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18",target:"_blank",rel:"noopener"},"Prowalk Tours Day Walk Map (Google)")],-1),iS={__name:"39",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{default:$(()=>[Q4,X4,eS,tS,nS,oS,rS,sS]),_:1},16))}},aS="/ephesus.jpg",lS=s("h4",null,"Day 9 - Sat 10/15 - Cruise Day 5",-1),cS=s("h2",null,[s("strong",null,"Ephesus"),h(),s("span",{style:{"font-size":"75%"}},"(Anchor at Kusadasi, Turkey)")],-1),uS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"7:00"),h(": Arrive at port")],-1),dS=s("h3",null,"Shore Excursions",-1),hS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"8:00")],-1),fS=s("ul",null,[s("li",null,[h("W&R, D&D - "),s("a",{href:"https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800",target:"_blank",rel:"noopener"},"Terrace House & Ancient Ephesus"),h(" (4.25 hours)")])],-1),pS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"5:00"),h(": Depart port")],-1),mS=s("img",{src:aS,height:"210",width:"420",style:{margin:"auto"}},null,-1),gS={__name:"40",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[mS]),default:$(()=>[lS,cS,uS,dS,hS,fS,pS]),_:1},16))}},yS="/santorini-oia-and-thira.jpg",_S="/santorini-catamaran.jpg",vS="/santorini-caldera.jpg",wS=s("h4",null,"Day 10 - Sun 10/16 - Cruise Day 6",-1),bS=s("h2",null,[s("strong",null,"Santorini")],-1),kS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"8:00"),h(": Arrive at port")],-1),SS=s("h3",null,"Shore Excursions",-1),TS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"8:15")],-1),DS=s("ul",null,[s("li",null,[h("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815",target:"_blank",rel:"noopener"},"Catamaran, Sail and Swim and BBQ"),h(" (6 hours)")]),s("li",null,[h("D&D - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815",target:"_blank",rel:"noopener"},"Oia & Thira"),h(" (4.5 hours)")])],-1),xS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"8:30")],-1),$S=s("ul",null,[s("li",null,[h("T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830",target:"_blank",rel:"noopener"},"Volcano, the Caldera, and Hot Springs"),h(" (2.75 hours)")])],-1),PS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"5:00"),h(": Depart port")],-1),AS=s("img",{src:yS,height:"210",width:"420",style:{margin:"auto"}},null,-1),CS=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:_S,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:vS,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),RS={__name:"41",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[AS,CS]),default:$(()=>[wS,bS,kS,SS,TS,DS,xS,$S,PS]),_:1},16))}},MS="/athens-parthenon.jpg",ES="/athens-mycenae.jpg",FS=s("h4",null,"Day 11 - Mon 10/17 - Cruise Day 7",-1),OS=s("h2",null,[s("strong",null,"Athens")],-1),LS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"6:00"),h(": Arrive at port")],-1),zS=s("h3",null,"Shore Excursions",-1),jS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"7:15")],-1),qS=s("ul",null,[s("li",null,[h("D&D, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715",target:"_blank",rel:"noopener"},"Top 10 Best of Athens"),h(" (8 hours)")])],-1),IS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"7:00")],-1),BS=s("ul",null,[s("li",null,[h("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700",target:"_blank",rel:"noopener"},"Mycenae & Ancient Corinth"),h(" (8 hours)")])],-1),VS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"5:00"),h(": Depart port")],-1),NS=s("img",{src:MS,height:"150",width:"300",style:{margin:"auto"}},null,-1),WS=s("br",null,null,-1),HS=s("img",{src:ES,height:"200",width:"400",style:{margin:"auto"}},null,-1),US={__name:"42",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[NS,WS,HS]),default:$(()=>[FS,OS,LS,zS,jS,qS,IS,BS,VS]),_:1},16))}},KS="/olympia.jpg",GS=s("h4",null,"Day 12 - Tue 10/18 - Cruise Day 8",-1),JS=s("h2",null,[s("strong",null,"Olympia"),h(),s("span",{style:{"font-size":"75%"}},"(Anchor at Katakolon)")],-1),YS=s("p",null,[h("\u{1F6A2} "),s("strong",null,"8:00"),h(": Arrive at port")],-1),ZS=s("h3",null,"Shore Excursions",-1),QS=s("p",null,[h("\u{1F3F0} "),s("strong",null,"8:00")],-1),XS=s("ul",null,[s("li",null,[h("W&R, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800",target:"_blank",rel:"noopener"},"Olympia & Magna Grecia"),h(" (5 hours)")])],-1),eT=s("p",null,[h("\u{1F6A2} "),s("strong",null,"5:00"),h(": Depart port")],-1),tT=s("p",null,[h("\u{1F374} "),s("strong",null,"6:30"),h(": D&D - "),s("a",{href:"https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE",target:"_blank",rel:"noopener"},"Steakhouse"),h(" Dinner Reservation for 2")],-1),nT=s("img",{src:KS,height:"200",width:"400",style:{margin:"auto"}},null,-1),oT={__name:"43",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[nT]),default:$(()=>[GS,JS,YS,ZS,QS,XS,eT,tT]),_:1},16))}},rT="/taormina-and-mount-etna.jpg",sT="/taormina-on-your-own.jpg",iT=s("h4",null,"Day 13 - Wed 10/19 - Cruise Day 9",-1),aT=s("h2",null,[s("strong",null,"Sicily"),h(),s("span",{style:{"font-size":"75%"}},"(Anchor at Messina)")],-1),lT=s("p",null,[h("\u{1F6A2} "),s("strong",null,"9:00"),h(": Arrive at port")],-1),cT=s("h3",null,"Shore Excursions",-1),uT=s("p",null,[h("\u{1F3F0} "),s("strong",null,"9:15")],-1),dT=s("ul",null,[s("li",null,[h("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915",target:"_blank",rel:"noopener"},"Taormina & Mount Etna"),h(" (8 hours)")])],-1),hT=s("p",null,[h("\u{1F3F0} "),s("strong",null,"10:15")],-1),fT=s("ul",null,[s("li",null,[h("D&D, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015",target:"_blank",rel:"noopener"},"Taormina on your own"),h(" (6.5 hours)")])],-1),pT=s("p",null,[h("\u{1F6A2} "),s("strong",null,"6:00"),h(": Depart port")],-1),mT=s("img",{src:rT,height:"200",width:"400",style:{margin:"auto"}},null,-1),gT=s("br",null,null,-1),yT=s("img",{src:sT,height:"150",width:"300",style:{margin:"auto"}},null,-1),_T={__name:"44",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[mT,gT,yT]),default:$(()=>[iT,aT,lT,cT,uT,dT,hT,fT,pT]),_:1},16))}},vT="/amalfi-coast-map.png",wT=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),bT=s("h2",null,[s("strong",null,"Naples (Amalfi Coast)")],-1),kT=s("p",null,[h("\u{1F6A2} "),s("strong",null,"7:00"),h(": Arrive at port")],-1),ST=s("h3",null,"Shore Excursions",-1),TT=s("p",null,[h("\u{1F3F0} "),s("strong",null,"9:00")],-1),DT=s("ul",null,[s("li",null,[h("All - "),s("a",{href:"https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900",target:"_blank",rel:"noopener"},"Best of the Amalfi Coast"),h(" (9.5 hours)")])],-1),xT=s("br",null,null,-1),$T=s("ul",null,[s("li",null,[h("Stops with free time in: "),s("ul",null,[s("li",null,"Amalfi Town"),s("li",null,"Positano"),s("li",null,"Sorrento")])])],-1),PT=s("p",null,[h("\u{1F6A2} "),s("strong",null,"7:00"),h(": Depart port")],-1),AT=s("img",{src:vT,height:"250",width:"500",style:{margin:"auto"}},null,-1),CT={__name:"45",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[AT]),default:$(()=>[wT,bT,kT,ST,TT,DT,xT,$T,PT]),_:1},16))}},RT="/amalfi-cathedral-exterior.jpg",MT="/amalfi-cathedral-interior.jpg",ET="/amalfi-town-map.png",FT=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),OT=s("h2",null,[h("Amalfi Coast Tour: "),s("strong",null,"Amalfi Town")],-1),LT=s("br",null,null,-1),zT=s("blockquote",null,[s("p",null,[h("Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we\u2019ll spend an hour of free time. A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the "),s("strong",null,"Amalfi Cathedral"),h(".")])],-1),jT=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:RT,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:MT,height:"200",width:"400",style:{margin:"auto"}})])])])],-1),qT=s("blockquote",null,[s("p",null,[h("A little further past the Cathedral, you\u2019ll find "),s("a",{href:"https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi",target:"_blank",rel:"noopener"},[s("strong",null,"Cuoppo d\u2019Amalfi")]),h(", a fried fish shop that fills cardboard cones with all manner of deep-sea life")])],-1),IT=s("img",{src:ET,height:"650",width:"325",style:{margin:"auto"}},null,-1),BT={__name:"46",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[IT]),default:$(()=>[FT,OT,LT,zT,jT,qT]),_:1},16))}},VT="/amalfi-coast.jpg",NT="/positano-map.jpg",WT=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),HT=s("h2",null,[h("Amalfi Coast Tour: "),s("strong",null,"Positano")],-1),UT=s("br",null,null,-1),KT=s("img",{src:VT,height:"150",width:"300",style:{margin:"auto"}},null,-1),GT=s("br",null,null,-1),JT=s("blockquote",null,[s("p",null,[h("Next, we\u2019ll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea. There, we\u2019ll spend another hour of free time. The "),s("strong",null,"Church of Santa Maria Assunta"),h(" was given a baroque makeover in the 18th century.")])],-1),YT=s("blockquote",null,[s("p",null,[h("Thirsty? Walk up to "),s("strong",null,"Enoteca Cuomo"),h(" and sample local red wines with homemade salami and sundried tomatoes.")])],-1),ZT=s("img",{src:NT,height:"400",width:"400",style:{margin:"auto"}},null,-1),QT={__name:"47",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[ZT]),default:$(()=>[WT,HT,UT,KT,GT,JT,YT]),_:1},16))}},XT="/sorrento-map.jpg",eD=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),tD=s("h2",null,[h("Amalfi Coast Tour: "),s("strong",null,"Sorrento")],-1),nD=s("blockquote",null,[s("p",null,[h("Next, we\u2019ll board a shuttle bus to rejoin our coach. The coach brings us to "),s("strong",null,"Sorrento"),h(", our final stop. We\u2019ll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.")])],-1),oD=s("br",null,null,-1),rD=s("blockquote",null,[s("p",null,[h("The "),s("strong",null,"Piazza Tasso"),h(" is Sorrento\u2019s living room. Just behind the "),s("strong",null,"Statue of Torquato Tasso"),h(" you\u2019ll find "),s("strong",null,"Fattoria Terranova"),h(", a family-run boutique offering free biscuits and tastes of liquers.")])],-1),sD=s("br",null,null,-1),iD=s("blockquote",null,[s("p",null,[h("A short walk brings you to the "),s("strong",null,"Cathedral"),h(", with its impressive inlaid-wood interior doors.")])],-1),aD=s("br",null,null,-1),lD=s("blockquote",null,[s("p",null,[h("Continue on to the "),s("strong",null,"Via San Cesareo"),h(", where you can sample Limoncello and other lemon products, famous to the Amalfi region.")])],-1),cD=s("img",{src:XT,height:"600",width:"300",style:{margin:"auto"}},null,-1),uD={__name:"48",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md"};return F(I),(n,o)=>(k(),j(Pe,X(Q(t)),{right:$(r=>[cD]),default:$(()=>[eD,tD,nD,oD,rD,sD,iD,aD,lD]),_:1},16))}},dD=s("h4",null,"Day 15 - Fri 10/21 - Cruise Day 11",-1),hD=s("h2",null,[s("strong",null,"Civitavecchia (Debarkation)")],-1),fD=s("p",null,[h("\u{1F6A2} "),s("strong",null,"6:00 AM"),h(": Arrive at port")],-1),pD=s("p",null,"Make sure to have breakfast before debarking the ship. The Main Dining Room is usually quiet, compared to the other options, as passengers hurry to eat and finish packing.",-1),mD=s("p",null,"Breakfast Served 6:30AM until:",-1),gD=s("ul",null,[s("li",null,"8:30AM - Main Dining Room"),s("li",null,"9:15AM - Lido Restaurant"),s("li",null,"9:30AM - Cafe on the Way")],-1),yD=s("p",null,"Any liquor purchased from shore or the gift shop that was held for safekeeping will be available for collection in a designated lounge.",-1),_D=s("p",null,"Bar service is open at the main pool area and a designated bar on the Promenade deck.",-1),vD=s("p",null,[h("More details about debarkation can be found "),s("a",{href:"https://help.carnival.com/app/answers/detail/a_id/1369/~/preparing-for-debarkation-day#:~:text=Guests%20who%20have%20pre%2Dpurchased,time%20in%20the%20home%20port.",target:"_blank",rel:"noopener"},"here")],-1),wD={__name:"49",setup(e){const t={srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[dD,hD,fD,pD,mD,gD,yD,_D,vD]),_:1},16))}},bD=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),kD=s("h2",null,[s("strong",null,"Port to Civitavecchia Train Station")],-1),SD=s("h3",null,[s("strong",null,"Transit Center")],-1),TD=s("p",null,"Once again, we\u2019ll ride the free and frequent shuttle buses that connect the Cruise Terminal with the Transit Center",-1),DD=s("p",null,"You can again choose from one of two options to reach Civitiavecchia Train Station:",-1),xD=s("h4",null,[s("strong",null,"Shuttle Bus \u20AC2")],-1),$D=s("p",null,"City-run shuttle buses run every 10 minutes between the train station and the transit center",-1),PD=s("h4",null,[s("strong",null,"Taxi \u20AC15-20")],-1),AD=s("p",null,"You can hire a cab from Largo Della Pace to the train station at a premium.",-1),CD={__name:"50",setup(e){const t={srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[bD,kD,SD,TD,DD,xD,$D,PD,AD]),_:1},16))}},RD=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),MD=s("h2",null,[s("strong",null,"Civitavecchia to Rome")],-1),ED={__name:"51",setup(e){const t={srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[RD,MD]),_:1},16))}},FD=s("h4",null,"Day 15 - Fri 10/21 - Rome",-1),OD=s("h2",null,[s("strong",null,"Last Day in Rome")],-1),LD=s("blockquote",null,[s("p",null,[h("If time allows, see "),s("a",{href:"https://www.tiktok.com/@travelbymitra/video/7051676676685565190",target:"_blank",rel:"noopener"},"Vicus Caprarius"),h(", the underground system of ancient pools that feed the Trevi Fountain. "),s("a",{href:"https://www.vicuscaprarius.com/en/#tariffe",target:"_blank",rel:"noopener"},"\u20AC4, no reservation required on Fridays")])],-1),zD={__name:"52",setup(e){const t={srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[FD,OD,LD]),_:1},16))}},jD=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),qD=s("h2",null,[s("strong",null,"Rome to Airport")],-1),ID={__name:"53",setup(e){const t={srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[jD,qD]),_:1},16))}},BD=s("h4",null,"Day 16 - Sat 10/22 - Travel Day",-1),VD=s("h2",null,[s("strong",null,"Trans-Atlantic Flight to New York")],-1),ND={__name:"54",setup(e){const t={srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md"};return F(I),(n,o)=>(k(),j(Oe,X(Q(t)),{default:$(()=>[BD,VD]),_:1},16))}},WD=[{path:"1",name:"page-1",component:V_,meta:{title:"European Cruise 2022",theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md",slide:{raw:null,title:"European Cruise 2022 - Carnival Pride",level:1,content:`# European Cruise 2022 - Carnival Pride

## Italy, Turkey, and Greece

## October 6 - 22, 2022`,frontmatter:{title:"European Cruise 2022",theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md"},index:0,start:0,end:6,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/00-intro/001-cover.md",raw:`# European Cruise 2022 - Carnival Pride

## Italy, Turkey, and Greece

## October 6 - 22, 2022
`,title:"European Cruise 2022 - Carnival Pride",level:1,content:`# European Cruise 2022 - Carnival Pride

## Italy, Turkey, and Greece

## October 6 - 22, 2022`,frontmatter:{title:"European Cruise 2022 - Carnival Pride"},index:0,start:0,end:6},inline:{raw:`---
# try also 'default' to start simple
theme: default
title: 'European Cruise 2022'

highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)

download: true
exportFilename: 'european-cruise-2022'

# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
background: https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg
class: 'text-center'
src: ./slides/00-intro/001-cover.md
---
`,title:"European Cruise 2022",level:1,content:"",frontmatter:{theme:"default",title:"European Cruise 2022",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},index:0,start:0,end:28},filepath:"/Users/dave/dev/europe-cruise-2022/slides/00-intro/001-cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Hv,meta:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md",slide:{raw:null,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, <Link to="18">Accademia/David</Link> |
| **3** | Sun | 10/9 | <Link to="20">Florence -> Rome</Link>, <Link to="24">"Heart of Rome" Walk</Link>, <Link to="27">Trevi Fountain</Link>, <Link to="28">Spanish Steps</Link> |
| **4** | Mon | 10/10 | **Rome**: <Link to="30">St. Peter's Square & Basillica</Link>, <Link to="32">Roman Forum</Link>, <Link to="34">Colisseum</Link> |
| **5** | Tue | 10/11 | <Link to="35">Rome -> Civitavecchia</Link>, <Link to="37">Embarkation & Cruise Departure</Link> |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"},index:1,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",raw:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, <Link to="18">Accademia/David</Link> |
| **3** | Sun | 10/9 | <Link to="20">Florence -> Rome</Link>, <Link to="24">"Heart of Rome" Walk</Link>, <Link to="27">Trevi Fountain</Link>, <Link to="28">Spanish Steps</Link> |
| **4** | Mon | 10/10 | **Rome**: <Link to="30">St. Peter's Square & Basillica</Link>, <Link to="32">Roman Forum</Link>, <Link to="34">Colisseum</Link> |
| **5** | Tue | 10/11 | <Link to="35">Rome -> Civitavecchia</Link>, <Link to="37">Embarkation & Cruise Departure</Link> |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, <Link to="18">Accademia/David</Link> |
| **3** | Sun | 10/9 | <Link to="20">Florence -> Rome</Link>, <Link to="24">"Heart of Rome" Walk</Link>, <Link to="27">Trevi Fountain</Link>, <Link to="28">Spanish Steps</Link> |
| **4** | Mon | 10/10 | **Rome**: <Link to="30">St. Peter's Square & Basillica</Link>, <Link to="32">Roman Forum</Link>, <Link to="34">Colisseum</Link> |
| **5** | Tue | 10/11 | <Link to="35">Rome -> Civitavecchia</Link>, <Link to="37">Embarkation & Cruise Departure</Link> |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/01-itinerary/002-short-itinerary-part-1.md
---
`,content:"",frontmatter:{},index:1,start:28,end:32},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:x2,meta:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md",slide:{raw:null,title:"Itinerary at a Glance: Carnival Pride Meditteranean",level:1,content:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | <Link to="39">**Mykonos**</Link> |
| **9** | Sat | 10/15 | <Link to="40">**Ephesus** (anchor at Kusadasi, Turkey)</Link> |
| **10** | Sun | 10/16 | <Link to="41">**Santorini**</Link> |
| **11** | Mon | 10/17 | <Link to="42">**Athens**</Link> |
| **12** | Tue | 10/18 | <Link to="43">**Olympia** (anchor at Katakolon)</Link> |
| **13** | Wed | 10/19 | <Link to="44">**Sicily** (anchor at Messina)</Link> |
| **14** | Thu | 10/20 | <Link to="45">**Amalfi Coast** (anchor at Naples)</Link> |`,frontmatter:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"},index:2,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",raw:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | <Link to="39">**Mykonos**</Link> |
| **9** | Sat | 10/15 | <Link to="40">**Ephesus** (anchor at Kusadasi, Turkey)</Link> |
| **10** | Sun | 10/16 | <Link to="41">**Santorini**</Link> |
| **11** | Mon | 10/17 | <Link to="42">**Athens**</Link> |
| **12** | Tue | 10/18 | <Link to="43">**Olympia** (anchor at Katakolon)</Link> |
| **13** | Wed | 10/19 | <Link to="44">**Sicily** (anchor at Messina)</Link> |
| **14** | Thu | 10/20 | <Link to="45">**Amalfi Coast** (anchor at Naples)</Link> |`,title:"Itinerary at a Glance: Carnival Pride Meditteranean",level:1,content:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | <Link to="39">**Mykonos**</Link> |
| **9** | Sat | 10/15 | <Link to="40">**Ephesus** (anchor at Kusadasi, Turkey)</Link> |
| **10** | Sun | 10/16 | <Link to="41">**Santorini**</Link> |
| **11** | Mon | 10/17 | <Link to="42">**Athens**</Link> |
| **12** | Tue | 10/18 | <Link to="43">**Olympia** (anchor at Katakolon)</Link> |
| **13** | Wed | 10/19 | <Link to="44">**Sicily** (anchor at Messina)</Link> |
| **14** | Thu | 10/20 | <Link to="45">**Amalfi Coast** (anchor at Naples)</Link> |`,frontmatter:{title:"Itinerary at a Glance: Carnival Pride Meditteranean"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/01-itinerary/003-short-itinerary-part-2.md
---
`,content:"",frontmatter:{},index:2,start:32,end:36},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:N2,meta:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md",slide:{raw:null,title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",level:1,content:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | <Link to="49">Debarkation</Link>, <Link to="51">Civitavecchia -> **Rome** by Train</Link>, <Link to="53">Sleep at Airport Hilton</Link> |
| **16** | Sat | 10/22 | <Link to="54">Depart FCO (Rome) on American Airlines Flight 235 to JFK</Link> |`,frontmatter:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"},index:3,start:0,end:5,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",raw:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | <Link to="49">Debarkation</Link>, <Link to="51">Civitavecchia -> **Rome** by Train</Link>, <Link to="53">Sleep at Airport Hilton</Link> |
| **16** | Sat | 10/22 | <Link to="54">Depart FCO (Rome) on American Airlines Flight 235 to JFK</Link> |`,title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",level:1,content:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | <Link to="49">Debarkation</Link>, <Link to="51">Civitavecchia -> **Rome** by Train</Link>, <Link to="53">Sleep at Airport Hilton</Link> |
| **16** | Sat | 10/22 | <Link to="54">Depart FCO (Rome) on American Airlines Flight 235 to JFK</Link> |`,frontmatter:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home"},index:0,start:0,end:5},inline:{raw:`---
src: ./slides/01-itinerary/004-short-itinerary-part-3.md
---
`,content:"",frontmatter:{},index:3,start:36,end:40},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:X2,meta:{title:"Day 0 - Thu 10/6 - Travel Day",srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",slide:{raw:null,title:"Day 0 - Thu 10/6 - Travel Day",level:4,content:`#### Day 0 - Thu 10/6 - Travel Day
## **Trans-Atlantic Flight to Rome**
### 
### \u{1F690} East Haven to JFK by Ground Transport 

### Pickup Time 12:00PM at D&D's House **Confirmed**

> We take a private **Connecticut Limo**  Van from East Haven to JFK <br>
> The ride lasts between 2 - 2.5 hours depending on traffic <br>
> Round-trip transport costs **$920 + $180 tip ($275 per couple total)**

<br>

### \u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane
> **American Airlines Flight 236** [(check Flight Status)](https://www.aa.com/travelInformation/flights/status) <br>
> Depart from JFK airport **6:52 PM** <br>
> The flight time is 8 hours 8 mins <br>
> Arrive at Leonardo da Vinci **9:00 AM next day** (Fri 10/7) <br>`,frontmatter:{title:"Day 0 - Thu 10/6 - Travel Day",srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md"},index:4,start:0,end:20,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",raw:`#### Day 0 - Thu 10/6 - Travel Day
## **Trans-Atlantic Flight to Rome**
### 
### \u{1F690} East Haven to JFK by Ground Transport 

### Pickup Time 12:00PM at D&D's House **Confirmed**

> We take a private **Connecticut Limo**  Van from East Haven to JFK <br>
> The ride lasts between 2 - 2.5 hours depending on traffic <br>
> Round-trip transport costs **$920 + $180 tip ($275 per couple total)**

<br>

### \u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane
> **American Airlines Flight 236** [(check Flight Status)](https://www.aa.com/travelInformation/flights/status) <br>
> Depart from JFK airport **6:52 PM** <br>
> The flight time is 8 hours 8 mins <br>
> Arrive at Leonardo da Vinci **9:00 AM next day** (Fri 10/7) <br>

`,title:"Day 0 - Thu 10/6 - Travel Day",level:4,content:`#### Day 0 - Thu 10/6 - Travel Day
## **Trans-Atlantic Flight to Rome**
### 
### \u{1F690} East Haven to JFK by Ground Transport 

### Pickup Time 12:00PM at D&D's House **Confirmed**

> We take a private **Connecticut Limo**  Van from East Haven to JFK <br>
> The ride lasts between 2 - 2.5 hours depending on traffic <br>
> Round-trip transport costs **$920 + $180 tip ($275 per couple total)**

<br>

### \u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane
> **American Airlines Flight 236** [(check Flight Status)](https://www.aa.com/travelInformation/flights/status) <br>
> Depart from JFK airport **6:52 PM** <br>
> The flight time is 8 hours 8 mins <br>
> Arrive at Leonardo da Vinci **9:00 AM next day** (Fri 10/7) <br>`,frontmatter:{title:"Day 0 - Thu 10/6 - Travel Day"},index:0,start:0,end:20},inline:{raw:`---
src: ./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md
---
`,content:"",frontmatter:{},index:4,start:40,end:44},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:uw,meta:{title:"Day 1 - Fri 10/7 - Travel Day",srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Travel Day",level:4,content:`#### Day 1 - Fri 10/7 - Travel Day
## **Rome to Florence**

\u2708\uFE0F **9:00 AM**: Scheduled to land at Leonardo da Vinci airport

### Airport to Rome 

\u{1F68B} **10:30 AM (approximate)**: Take a Train to Rome Termini Station

> The [Leonardo Express](https://www.trenitalia.com/en/services/fiumicino_airport.html) is a non-stop shuttle 
> train running between the airport train station and Termini Station in Rome. <br>
> The ride lasts **32 minutes**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC14** one-way, purchased individually, or **\u20AC40** total for 4 tickets when purchased at the "mini-group" 
> fare. 

<br>

### Rome to Florence

\u{1F68B} **Noon (approximate)**: Take a Train to Santa Maria Novella Train Station in Florence

> A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC42** round trip`,frontmatter:{title:"Day 1 - Fri 10/7 - Travel Day",srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md"},index:5,start:0,end:26,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/006-day-1-rome-to-florence.md",raw:`#### Day 1 - Fri 10/7 - Travel Day
## **Rome to Florence**

\u2708\uFE0F **9:00 AM**: Scheduled to land at Leonardo da Vinci airport

### Airport to Rome 

\u{1F68B} **10:30 AM (approximate)**: Take a Train to Rome Termini Station

> The [Leonardo Express](https://www.trenitalia.com/en/services/fiumicino_airport.html) is a non-stop shuttle 
> train running between the airport train station and Termini Station in Rome. <br>
> The ride lasts **32 minutes**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC14** one-way, purchased individually, or **\u20AC40** total for 4 tickets when purchased at the "mini-group" 
> fare. 

<br>

### Rome to Florence

\u{1F68B} **Noon (approximate)**: Take a Train to Santa Maria Novella Train Station in Florence

> A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC42** round trip

`,title:"Day 1 - Fri 10/7 - Travel Day",level:4,content:`#### Day 1 - Fri 10/7 - Travel Day
## **Rome to Florence**

\u2708\uFE0F **9:00 AM**: Scheduled to land at Leonardo da Vinci airport

### Airport to Rome 

\u{1F68B} **10:30 AM (approximate)**: Take a Train to Rome Termini Station

> The [Leonardo Express](https://www.trenitalia.com/en/services/fiumicino_airport.html) is a non-stop shuttle 
> train running between the airport train station and Termini Station in Rome. <br>
> The ride lasts **32 minutes**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC14** one-way, purchased individually, or **\u20AC40** total for 4 tickets when purchased at the "mini-group" 
> fare. 

<br>

### Rome to Florence

\u{1F68B} **Noon (approximate)**: Take a Train to Santa Maria Novella Train Station in Florence

> A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC42** round trip`,frontmatter:{title:"Day 1 - Fri 10/7 - Travel Day"},index:0,start:0,end:26},inline:{raw:`---
src: ./slides/02-florence/006-day-1-rome-to-florence.md
---
`,content:"",frontmatter:{},index:5,start:44,end:48},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/006-day-1-rome-to-florence.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:mw,meta:{srcSequence:"./slides/02-florence/007-florence-overview.md",slide:{raw:null,content:`|     |     |
| --- | --- |
|<img src="/florence-overview.png" height="400" width="400"/>| <ul> Day 1 <li> Walk from SMN Station to AirBnB (near Duomo) </li> <li> Explore Duomo, Markets, & Shops </li> <li> Rooftop Dinner </li> </ul> <ul> Day 2 <li> Uffizi Gallery, Palazzo Vecchio </li> <li> Ponte Vecchio </li> <li> Pitti Palace, Boboli Gardens </li> <li> Accademia (David) </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Florence](https://youtu.be/qzTyWRcQRXg) (YouTube, 16:22)</span>

<span style="font-size:50%">watch [13 Tips for a FANTASTIC Trip to Florence](https://youtu.be/q51Atktm244) (YouTube, 23:02)</span>`,frontmatter:{srcSequence:"./slides/02-florence/007-florence-overview.md"},index:6,start:0,end:7,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/007-florence-overview.md",raw:`|     |     |
| --- | --- |
|<img src="/florence-overview.png" height="400" width="400"/>| <ul> Day 1 <li> Walk from SMN Station to AirBnB (near Duomo) </li> <li> Explore Duomo, Markets, & Shops </li> <li> Rooftop Dinner </li> </ul> <ul> Day 2 <li> Uffizi Gallery, Palazzo Vecchio </li> <li> Ponte Vecchio </li> <li> Pitti Palace, Boboli Gardens </li> <li> Accademia (David) </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Florence](https://youtu.be/qzTyWRcQRXg) (YouTube, 16:22)</span>

<span style="font-size:50%">watch [13 Tips for a FANTASTIC Trip to Florence](https://youtu.be/q51Atktm244) (YouTube, 23:02)</span>`,content:`|     |     |
| --- | --- |
|<img src="/florence-overview.png" height="400" width="400"/>| <ul> Day 1 <li> Walk from SMN Station to AirBnB (near Duomo) </li> <li> Explore Duomo, Markets, & Shops </li> <li> Rooftop Dinner </li> </ul> <ul> Day 2 <li> Uffizi Gallery, Palazzo Vecchio </li> <li> Ponte Vecchio </li> <li> Pitti Palace, Boboli Gardens </li> <li> Accademia (David) </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Florence](https://youtu.be/qzTyWRcQRXg) (YouTube, 16:22)</span>

<span style="font-size:50%">watch [13 Tips for a FANTASTIC Trip to Florence](https://youtu.be/q51Atktm244) (YouTube, 23:02)</span>`,frontmatter:{},index:0,start:0,end:7},inline:{raw:`---
src: ./slides/02-florence/007-florence-overview.md
---
`,content:"",frontmatter:{},index:6,start:48,end:52},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/007-florence-overview.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:Tw,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Arrival**

### AirBnB - [Via Santa Elisabetta 5, Florence](https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL) <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**2:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/j9D5MjAAuP2QKoHS6)

<img src="/florence-skyline.jpg" height="250" width="500" style="margin:auto"/>
<br>

> We'll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. <br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md"},index:7,start:0,end:13,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/008-day-1-florence-arrival.md",raw:`#### Day 1 - Fri 10/7 - Florence
## **Arrival**

### AirBnB - [Via Santa Elisabetta 5, Florence](https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL) <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**2:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/j9D5MjAAuP2QKoHS6)

<img src="/florence-skyline.jpg" height="250" width="500" style="margin:auto"/>
<br>

> We'll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. <br>

`,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Arrival**

### AirBnB - [Via Santa Elisabetta 5, Florence](https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL) <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**2:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/j9D5MjAAuP2QKoHS6)

<img src="/florence-skyline.jpg" height="250" width="500" style="margin:auto"/>
<br>

> We'll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. <br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence"},index:0,start:0,end:13},inline:{raw:`---
src: ./slides/02-florence/008-day-1-florence-arrival.md
---
`,content:"",frontmatter:{},index:7,start:52,end:56},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/008-day-1-florence-arrival.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Ew,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Exploring The Duomo**
<br>

> Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within. 

|     |     |     |
| --- | --- | --- | 
| <img src="/duomo-battistero.jpg" width="300" height="150"> | <img src="/duomo-interior.jpg" width="150" height="300"> | <img src="/duomo-dome.jpg" width="300" height="150"> |`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md"},index:8,start:0,end:9,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/009-day-1-florence-duomo.md",raw:`#### Day 1 - Fri 10/7 - Florence
## **Exploring The Duomo**
<br>

> Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within. 

|     |     |     |
| --- | --- | --- | 
| <img src="/duomo-battistero.jpg" width="300" height="150"> | <img src="/duomo-interior.jpg" width="150" height="300"> | <img src="/duomo-dome.jpg" width="300" height="150"> |`,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Exploring The Duomo**
<br>

> Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within. 

|     |     |     |
| --- | --- | --- | 
| <img src="/duomo-battistero.jpg" width="300" height="150"> | <img src="/duomo-interior.jpg" width="150" height="300"> | <img src="/duomo-dome.jpg" width="300" height="150"> |`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence"},index:0,start:0,end:9},inline:{raw:`---
src: ./slides/02-florence/009-day-1-florence-duomo.md
---
`,content:"",frontmatter:{},index:8,start:56,end:60},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/009-day-1-florence-duomo.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ww,meta:{title:"Day 1 - Fri 10/7 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence 
## **Food & Shopping**

> If you're hungry, there are many options near the AirBnB including: <br>
> - [**Caffeteria della Oblate**](https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html), a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.
> - [**Mercato Centrale**](https://www.mercatocentrale.com/florence/how-it-works/) The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.

<br>

> - [**San Lorenzo Market**](https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html) If you're itching to start shopping, step outside the Mercato Centrale and you'll find vendor stalls hawking all kinds of leather goods.  Be sure to negotiate to get the best price!

<br>

> We'll grab fresh food to bring back to the AirBnB for tomorrow's breakfast before our busy sightseeing day in Florence!

::right::

<img src="/heart-of-florence-restaurants.jpg" height="450" width="450" style="margin:auto"/>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md"},index:9,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/010-day-1-florence-restaurants.md",raw:`#### Day 1 - Fri 10/7 - Florence 
## **Food & Shopping**

> If you're hungry, there are many options near the AirBnB including: <br>
> - [**Caffeteria della Oblate**](https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html), a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.
> - [**Mercato Centrale**](https://www.mercatocentrale.com/florence/how-it-works/) The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.

<br>

> - [**San Lorenzo Market**](https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html) If you're itching to start shopping, step outside the Mercato Centrale and you'll find vendor stalls hawking all kinds of leather goods.  Be sure to negotiate to get the best price!

<br>

> We'll grab fresh food to bring back to the AirBnB for tomorrow's breakfast before our busy sightseeing day in Florence!

::right::

<img src="/heart-of-florence-restaurants.jpg" height="450" width="450" style="margin:auto"/>`,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence 
## **Food & Shopping**

> If you're hungry, there are many options near the AirBnB including: <br>
> - [**Caffeteria della Oblate**](https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html), a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.
> - [**Mercato Centrale**](https://www.mercatocentrale.com/florence/how-it-works/) The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.

<br>

> - [**San Lorenzo Market**](https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html) If you're itching to start shopping, step outside the Mercato Centrale and you'll find vendor stalls hawking all kinds of leather goods.  Be sure to negotiate to get the best price!

<br>

> We'll grab fresh food to bring back to the AirBnB for tomorrow's breakfast before our busy sightseeing day in Florence!

::right::

<img src="/heart-of-florence-restaurants.jpg" height="450" width="450" style="margin:auto"/>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/010-day-1-florence-restaurants.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:9,start:60,end:65},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/010-day-1-florence-restaurants.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Qw,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Rooftop Dinner**

<br>

> Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we'll take a leisurely "golden hour" dinner at one of Florence's rooftop restaurants

<br>

### Angel Roofbar - Hotel Calimala <span style="color:red"> **(unconfirmed)** </span>

|     |     |
| --- | --- |
| [website](https://www.hotelcalimala.com/angel-roofbar-dining) / [dinner menu](https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf) | <img src="https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg" width=400 height=150> |
<br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md"},index:10,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/011-day-1-florence-dinner.md",raw:`#### Day 1 - Fri 10/7 - Florence
## **Rooftop Dinner**

<br>

> Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we'll take a leisurely "golden hour" dinner at one of Florence's rooftop restaurants

<br>

### Angel Roofbar - Hotel Calimala <span style="color:red"> **(unconfirmed)** </span>

|     |     |
| --- | --- |
| [website](https://www.hotelcalimala.com/angel-roofbar-dining) / [dinner menu](https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf) | <img src="https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg" width=400 height=150> |
<br>



`,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Rooftop Dinner**

<br>

> Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we'll take a leisurely "golden hour" dinner at one of Florence's rooftop restaurants

<br>

### Angel Roofbar - Hotel Calimala <span style="color:red"> **(unconfirmed)** </span>

|     |     |
| --- | --- |
| [website](https://www.hotelcalimala.com/angel-roofbar-dining) / [dinner menu](https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf) | <img src="https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg" width=400 height=150> |
<br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence"},index:0,start:0,end:19},inline:{raw:`---
src: ./slides/02-florence/011-day-1-florence-dinner.md
---
`,content:"",frontmatter:{},index:10,start:65,end:69},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/011-day-1-florence-dinner.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:db,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Renaissance Walk**

\u{1F6B6}**8:30 AM**: Walk to Uffizi Gallery [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> This is the beginning of our whirlwind Florence sightseeing day.<br>
> Fabulous examples of Renaissance architecture span the walk.<br>
> If you miss one, don't worry, we'll follow the same route back. <br>

\u{1F4F7} Palazzo Vecchio 
<td>
<img src="/palazzo-vecchio-firenze.jpg" height="100" width="200">
</td>
<td>
<img src="/courtyard-palazzo-vecchio.jpg" height="95" width="190">
</td>

> Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city. 

::right::

<img src="/florence-renaissance-walk.jpg" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md"},index:11,start:0,end:23,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/012-day-2-florence-walk-to-uffizi.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Renaissance Walk**

\u{1F6B6}**8:30 AM**: Walk to Uffizi Gallery [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> This is the beginning of our whirlwind Florence sightseeing day.<br>
> Fabulous examples of Renaissance architecture span the walk.<br>
> If you miss one, don't worry, we'll follow the same route back. <br>

\u{1F4F7} Palazzo Vecchio 
<td>
<img src="/palazzo-vecchio-firenze.jpg" height="100" width="200">
</td>
<td>
<img src="/courtyard-palazzo-vecchio.jpg" height="95" width="190">
</td>

> Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city. 

::right::

<img src="/florence-renaissance-walk.jpg" height="600" width="300" style="margin:auto"/>
`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Renaissance Walk**

\u{1F6B6}**8:30 AM**: Walk to Uffizi Gallery [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> This is the beginning of our whirlwind Florence sightseeing day.<br>
> Fabulous examples of Renaissance architecture span the walk.<br>
> If you miss one, don't worry, we'll follow the same route back. <br>

\u{1F4F7} Palazzo Vecchio 
<td>
<img src="/palazzo-vecchio-firenze.jpg" height="100" width="200">
</td>
<td>
<img src="/courtyard-palazzo-vecchio.jpg" height="95" width="190">
</td>

> Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city. 

::right::

<img src="/florence-renaissance-walk.jpg" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:23},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/012-day-2-florence-walk-to-uffizi.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:11,start:69,end:74},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/012-day-2-florence-walk-to-uffizi.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Sb,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Uffizi Gallery**

\u{1F3F0} **9:00 - 9:15 AM**: Timed Entry into Uffizi Gallery<br>
<span style="font-size:75%">Allow 1.5 hours to tour</span>

> See the greatest collection of Italian Renaissance paintings in the world, including Botticelli's iconic "Birth of Venus".<br>
<span style="font-size:50%">listen to [Rick Steves' Uffizi Gallery Audio Tour](https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3) (MP3, 1:01:35)</span>

<br>

<img src="/birth-of-venus.jpg" height="125" width="250" style="margin:auto"/>

<br>

> Seeing priceless works of art makes you hungry, right?

::right::

<img src="/uffizi-gallery-floor-plan.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md"},index:12,start:0,end:21,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/013-day-2-florence-uffizi-gallery.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Uffizi Gallery**

\u{1F3F0} **9:00 - 9:15 AM**: Timed Entry into Uffizi Gallery<br>
<span style="font-size:75%">Allow 1.5 hours to tour</span>

> See the greatest collection of Italian Renaissance paintings in the world, including Botticelli's iconic "Birth of Venus".<br>
<span style="font-size:50%">listen to [Rick Steves' Uffizi Gallery Audio Tour](https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3) (MP3, 1:01:35)</span>

<br>

<img src="/birth-of-venus.jpg" height="125" width="250" style="margin:auto"/>

<br>

> Seeing priceless works of art makes you hungry, right?

::right::

<img src="/uffizi-gallery-floor-plan.png" height="800" width="400" style="margin:auto"/>
`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Uffizi Gallery**

\u{1F3F0} **9:00 - 9:15 AM**: Timed Entry into Uffizi Gallery<br>
<span style="font-size:75%">Allow 1.5 hours to tour</span>

> See the greatest collection of Italian Renaissance paintings in the world, including Botticelli's iconic "Birth of Venus".<br>
<span style="font-size:50%">listen to [Rick Steves' Uffizi Gallery Audio Tour](https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3) (MP3, 1:01:35)</span>

<br>

<img src="/birth-of-venus.jpg" height="125" width="250" style="margin:auto"/>

<br>

> Seeing priceless works of art makes you hungry, right?

::right::

<img src="/uffizi-gallery-floor-plan.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:21},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/013-day-2-florence-uffizi-gallery.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:12,start:74,end:79},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/013-day-2-florence-uffizi-gallery.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Eb,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Panini at All'antico Vinaio** 
#### Lunch Option #1 <span style="font-size:50%">[Menu](https://www.allanticovinaio.com/il-menu-firenze_en/)</span>

\u{1F6B6}**10:45 AM**: Walk from Uffizi to All'Antico Vinaio<br>
<span style="font-size:75%">([5 mins](https://goo.gl/maps/Aup9R2km7X4VQZgS6), allow up to **one hour** to wait in line)</span>

> If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. <br> 
> The wait may last as much as **an hour or more**, but nearly all who visit agree, its time well spent.

\u{1F6B6}**Between 11:15-12:00 PM**: Walk to Pitti Palace<br>
<span style="font-size:75%">[(11 mins)](https://goo.gl/maps/UUc7SxPFN43kujLb6)</span>

Panini in hand, walk down to the river Arno towards the Ponte Vecchio

::right::

<img src="/florence-allantico-vinaio.jpeg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md"},index:13,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/014-day-2-allantico-vinaio.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Panini at All'antico Vinaio** 
#### Lunch Option #1 <span style="font-size:50%">[Menu](https://www.allanticovinaio.com/il-menu-firenze_en/)</span>

\u{1F6B6}**10:45 AM**: Walk from Uffizi to All'Antico Vinaio<br>
<span style="font-size:75%">([5 mins](https://goo.gl/maps/Aup9R2km7X4VQZgS6), allow up to **one hour** to wait in line)</span>

> If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. <br> 
> The wait may last as much as **an hour or more**, but nearly all who visit agree, its time well spent.

\u{1F6B6}**Between 11:15-12:00 PM**: Walk to Pitti Palace<br>
<span style="font-size:75%">[(11 mins)](https://goo.gl/maps/UUc7SxPFN43kujLb6)</span>

Panini in hand, walk down to the river Arno towards the Ponte Vecchio

::right::

<img src="/florence-allantico-vinaio.jpeg" height="200" width="400" style="margin:auto">`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Panini at All'antico Vinaio** 
#### Lunch Option #1 <span style="font-size:50%">[Menu](https://www.allanticovinaio.com/il-menu-firenze_en/)</span>

\u{1F6B6}**10:45 AM**: Walk from Uffizi to All'Antico Vinaio<br>
<span style="font-size:75%">([5 mins](https://goo.gl/maps/Aup9R2km7X4VQZgS6), allow up to **one hour** to wait in line)</span>

> If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. <br> 
> The wait may last as much as **an hour or more**, but nearly all who visit agree, its time well spent.

\u{1F6B6}**Between 11:15-12:00 PM**: Walk to Pitti Palace<br>
<span style="font-size:75%">[(11 mins)](https://goo.gl/maps/UUc7SxPFN43kujLb6)</span>

Panini in hand, walk down to the river Arno towards the Ponte Vecchio

::right::

<img src="/florence-allantico-vinaio.jpeg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/014-day-2-allantico-vinaio.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:13,start:79,end:84},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/014-day-2-allantico-vinaio.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Wb,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Ponte Vecchio**

\u{1F6B6}**12:00 PM**: Walk to Pitti Palace [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500's, to be replaced by goldsmiths that remain to this day.

- \u{1F4F7} Ponte Vecchio 
<img src="/ponte-vecchio.jpg" height="125" width="250">

<br>

> Next, we'll cross into the Oltrarno, literally the "other side of the River Arno".

::right::

<img src="/florence-oltrarno.jpg" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md"},index:14,start:0,end:17,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/015-day-2-florence-ponte-vecchio.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Ponte Vecchio**

\u{1F6B6}**12:00 PM**: Walk to Pitti Palace [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500's, to be replaced by goldsmiths that remain to this day.

- \u{1F4F7} Ponte Vecchio 
<img src="/ponte-vecchio.jpg" height="125" width="250">

<br>

> Next, we'll cross into the Oltrarno, literally the "other side of the River Arno".

::right::

<img src="/florence-oltrarno.jpg" height="800" width="400" style="margin:auto"/>`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Ponte Vecchio**

\u{1F6B6}**12:00 PM**: Walk to Pitti Palace [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500's, to be replaced by goldsmiths that remain to this day.

- \u{1F4F7} Ponte Vecchio 
<img src="/ponte-vecchio.jpg" height="125" width="250">

<br>

> Next, we'll cross into the Oltrarno, literally the "other side of the River Arno".

::right::

<img src="/florence-oltrarno.jpg" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:17},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/015-day-2-florence-ponte-vecchio.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:14,start:84,end:89},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/015-day-2-florence-ponte-vecchio.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:ek,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Pitti Palace**
<details>
<summary><span style="font-size:75%"> click here for Lunch Option #2 </span></summary>

<span style="font-size:75%">If we missed out on panini at "All\u2019Antico Vinaio", here's another option:<br>
[Trattoria La Casalinga](https://trattorialacasalinga.it/en/our-menu/)</span> <span style="font-size:50%">[map](https://goo.gl/maps/cXGgZQteLjhBNHPUA)</span>
</details>

\u{1F3F0} **12:30 PM**: Entry into Pitti Palace<br>
<span style="font-size:75%">Allow 1.5 hours to tour</span>

### Palantine Gallery

> Pitti Palace houses multiple museums and gardens.  Here, we're going to focus on [Palantine Gallery](https://www.uffizi.it/en/pitti-palace/palatine-gallery), which features works by Raphael, Titian, and Rembrandt.

<span style="font-size:50%">[Detailed Room Descriptions (with pictures)](https://www.palazzo-pitti.net/the-palatine-gallery.html)</span>

::right::

<img src="/palatine-gallery-floor-plan.jpg" height="400" width="800" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md"},index:15,start:0,end:22,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/016-day-2-florence-pitti-palace.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Pitti Palace**
<details>
<summary><span style="font-size:75%"> click here for Lunch Option #2 </span></summary>

<span style="font-size:75%">If we missed out on panini at "All\u2019Antico Vinaio", here's another option:<br>
[Trattoria La Casalinga](https://trattorialacasalinga.it/en/our-menu/)</span> <span style="font-size:50%">[map](https://goo.gl/maps/cXGgZQteLjhBNHPUA)</span>
</details>

\u{1F3F0} **12:30 PM**: Entry into Pitti Palace<br>
<span style="font-size:75%">Allow 1.5 hours to tour</span>

### Palantine Gallery

> Pitti Palace houses multiple museums and gardens.  Here, we're going to focus on [Palantine Gallery](https://www.uffizi.it/en/pitti-palace/palatine-gallery), which features works by Raphael, Titian, and Rembrandt.

<span style="font-size:50%">[Detailed Room Descriptions (with pictures)](https://www.palazzo-pitti.net/the-palatine-gallery.html)</span>

::right::

<img src="/palatine-gallery-floor-plan.jpg" height="400" width="800" style="margin:auto"/>
`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Pitti Palace**
<details>
<summary><span style="font-size:75%"> click here for Lunch Option #2 </span></summary>

<span style="font-size:75%">If we missed out on panini at "All\u2019Antico Vinaio", here's another option:<br>
[Trattoria La Casalinga](https://trattorialacasalinga.it/en/our-menu/)</span> <span style="font-size:50%">[map](https://goo.gl/maps/cXGgZQteLjhBNHPUA)</span>
</details>

\u{1F3F0} **12:30 PM**: Entry into Pitti Palace<br>
<span style="font-size:75%">Allow 1.5 hours to tour</span>

### Palantine Gallery

> Pitti Palace houses multiple museums and gardens.  Here, we're going to focus on [Palantine Gallery](https://www.uffizi.it/en/pitti-palace/palatine-gallery), which features works by Raphael, Titian, and Rembrandt.

<span style="font-size:50%">[Detailed Room Descriptions (with pictures)](https://www.palazzo-pitti.net/the-palatine-gallery.html)</span>

::right::

<img src="/palatine-gallery-floor-plan.jpg" height="400" width="800" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:22},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/016-day-2-florence-pitti-palace.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:15,start:89,end:94},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/016-day-2-florence-pitti-palace.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:hk,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Boboli Gardens**


> The gardens are vast, with sloping hills leading up to spectular views of Florence.

\u{1F6B6}**2:00 PM**: Explore Boboli Gardens 
<span style="font-size:75%">(approx 30 minutes)</span>

> We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.

<span style="font-size:75%">[suggested walking tour](https://goo.gl/maps/K6riqmBPWh3Ga8wp8)</span>

<img src="/pitti-palace-boboli-gardens-map.png" height="200" width="400" style="margin:auto"/>

::right::
|     | 
| --- | 
|<img src="/florence-boboli-entrance.jpg" height="175" width="350" style="margin:auto">|
|<img src="/florence-boboli-fountains.jpg" height="150" width="300" style="margin:auto">|`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md"},index:16,start:0,end:20,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/017-day-2-florence-boboli-gardens.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Boboli Gardens**


> The gardens are vast, with sloping hills leading up to spectular views of Florence.

\u{1F6B6}**2:00 PM**: Explore Boboli Gardens 
<span style="font-size:75%">(approx 30 minutes)</span>

> We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.

<span style="font-size:75%">[suggested walking tour](https://goo.gl/maps/K6riqmBPWh3Ga8wp8)</span>

<img src="/pitti-palace-boboli-gardens-map.png" height="200" width="400" style="margin:auto"/>

::right::
|     | 
| --- | 
|<img src="/florence-boboli-entrance.jpg" height="175" width="350" style="margin:auto">|
|<img src="/florence-boboli-fountains.jpg" height="150" width="300" style="margin:auto">|`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Boboli Gardens**


> The gardens are vast, with sloping hills leading up to spectular views of Florence.

\u{1F6B6}**2:00 PM**: Explore Boboli Gardens 
<span style="font-size:75%">(approx 30 minutes)</span>

> We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.

<span style="font-size:75%">[suggested walking tour](https://goo.gl/maps/K6riqmBPWh3Ga8wp8)</span>

<img src="/pitti-palace-boboli-gardens-map.png" height="200" width="400" style="margin:auto"/>

::right::
|     | 
| --- | 
|<img src="/florence-boboli-entrance.jpg" height="175" width="350" style="margin:auto">|
|<img src="/florence-boboli-fountains.jpg" height="150" width="300" style="margin:auto">|`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:20},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/017-day-2-florence-boboli-gardens.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:16,start:94,end:99},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/017-day-2-florence-boboli-gardens.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Sk,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Accademia**
#### (Michelangelo's **David**)

\u{1F3F0} **4:30 - 4:45 PM**: Timed Entry into <br>
Galleria dell'Accademia
<span style="font-size:75%">Allow 1 hour to tour</span>

<img src="/florence-statue-of-david.jpg" height="150" width="300" style="margin:auto"/>

<br>

> This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance.  The museum also includes some of Michelangelo's other works, and a couple of Botticellis.<br>
<span style="font-size:50%">listen to [Rick Steves' Accademia & Michaelangelo's David Audio Tour](https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3) (MP3, 25:11)</span>

::right::

<img src="/accademia-floor-plan.png" height="650" width="325" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md"},index:17,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/018-day-2-florence-accademia.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Accademia**
#### (Michelangelo's **David**)

\u{1F3F0} **4:30 - 4:45 PM**: Timed Entry into <br>
Galleria dell'Accademia
<span style="font-size:75%">Allow 1 hour to tour</span>

<img src="/florence-statue-of-david.jpg" height="150" width="300" style="margin:auto"/>

<br>

> This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance.  The museum also includes some of Michelangelo's other works, and a couple of Botticellis.<br>
<span style="font-size:50%">listen to [Rick Steves' Accademia & Michaelangelo's David Audio Tour](https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3) (MP3, 25:11)</span>

::right::

<img src="/accademia-floor-plan.png" height="650" width="325" style="margin:auto"/>`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Accademia**
#### (Michelangelo's **David**)

\u{1F3F0} **4:30 - 4:45 PM**: Timed Entry into <br>
Galleria dell'Accademia
<span style="font-size:75%">Allow 1 hour to tour</span>

<img src="/florence-statue-of-david.jpg" height="150" width="300" style="margin:auto"/>

<br>

> This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance.  The museum also includes some of Michelangelo's other works, and a couple of Botticellis.<br>
<span style="font-size:50%">listen to [Rick Steves' Accademia & Michaelangelo's David Audio Tour](https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3) (MP3, 25:11)</span>

::right::

<img src="/accademia-floor-plan.png" height="650" width="325" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/018-day-2-florence-accademia.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:17,start:99,end:104},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/018-day-2-florence-accademia.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Rk,meta:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** <span style="color:red"> **(unconfirmed)** </span>

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"},index:18,start:0,end:12,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** <span style="color:red"> **(unconfirmed)** </span>

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.

`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** <span style="color:red"> **(unconfirmed)** </span>

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:12},inline:{raw:`---
src: ./slides/02-florence/019-day-2-florence-dinner.md
---
`,content:"",frontmatter:{},index:18,start:104,end:108},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Bk,meta:{title:"Day 3 - Sun 10/9 - Travel Day",srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Travel Day",level:4,content:`#### Day 3 - Sun 10/9 - Travel Day
## **Florence to Rome**

> It's time to say goodbye to Florence.  Check-out time is 11:00, but we're going to try to get an early start for the trip back to Rome.

\u{1F6B6}**9:30 (approximate)**: Walk from AirBnB to Train Station [(11 minutes)](https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7)

\u{1F68B} **10:00 - 10:30 AM (approximate)**: Take a Train to Termini Train Station in Rome

<img src="/florence-to-rome.png" height="800" width="400" style="margin:auto"/>

<br>

> A bullet train runs from **Santa Maria Novella** Train Station in Florence to **Termini** Station in Rome. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>`,frontmatter:{title:"Day 3 - Sun 10/9 - Travel Day",srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md"},index:19,start:0,end:15,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/020-day-3-florence-to-rome.md",raw:`#### Day 3 - Sun 10/9 - Travel Day
## **Florence to Rome**

> It's time to say goodbye to Florence.  Check-out time is 11:00, but we're going to try to get an early start for the trip back to Rome.

\u{1F6B6}**9:30 (approximate)**: Walk from AirBnB to Train Station [(11 minutes)](https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7)

\u{1F68B} **10:00 - 10:30 AM (approximate)**: Take a Train to Termini Train Station in Rome

<img src="/florence-to-rome.png" height="800" width="400" style="margin:auto"/>

<br>

> A bullet train runs from **Santa Maria Novella** Train Station in Florence to **Termini** Station in Rome. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>`,title:"Day 3 - Sun 10/9 - Travel Day",level:4,content:`#### Day 3 - Sun 10/9 - Travel Day
## **Florence to Rome**

> It's time to say goodbye to Florence.  Check-out time is 11:00, but we're going to try to get an early start for the trip back to Rome.

\u{1F6B6}**9:30 (approximate)**: Walk from AirBnB to Train Station [(11 minutes)](https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7)

\u{1F68B} **10:00 - 10:30 AM (approximate)**: Take a Train to Termini Train Station in Rome

<img src="/florence-to-rome.png" height="800" width="400" style="margin:auto"/>

<br>

> A bullet train runs from **Santa Maria Novella** Train Station in Florence to **Termini** Station in Rome. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>`,frontmatter:{title:"Day 3 - Sun 10/9 - Travel Day"},index:0,start:0,end:15},inline:{raw:`---
src: ./slides/03-rome/020-day-3-florence-to-rome.md
---
`,content:"",frontmatter:{},index:19,start:108,end:112},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/020-day-3-florence-to-rome.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Hk,meta:{srcSequence:"./slides/03-rome/021-rome-overview.md",slide:{raw:null,content:`|     |     |
| --- | --- |
|<img src="/rome-neighborhoods.png" height="400" width="400"/>| <ul> Day 3 <li> Walk from Rome Termini Station to AirBnB </li> <li> Altar of the Fatherland </li> <li> "Heart of Rome" Walking Tour </li> </ul> <ul> Day 4 <li> St. Peter's Square </li> <li> Roman Forum </li> <li> Colisseum </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Rome](https://youtu.be/aaKl40z6MSw) (YouTube, 24:05)
</span>`,frontmatter:{srcSequence:"./slides/03-rome/021-rome-overview.md"},index:20,start:0,end:8,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/021-rome-overview.md",raw:`|     |     |
| --- | --- |
|<img src="/rome-neighborhoods.png" height="400" width="400"/>| <ul> Day 3 <li> Walk from Rome Termini Station to AirBnB </li> <li> Altar of the Fatherland </li> <li> "Heart of Rome" Walking Tour </li> </ul> <ul> Day 4 <li> St. Peter's Square </li> <li> Roman Forum </li> <li> Colisseum </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Rome](https://youtu.be/aaKl40z6MSw) (YouTube, 24:05)
</span>

`,content:`|     |     |
| --- | --- |
|<img src="/rome-neighborhoods.png" height="400" width="400"/>| <ul> Day 3 <li> Walk from Rome Termini Station to AirBnB </li> <li> Altar of the Fatherland </li> <li> "Heart of Rome" Walking Tour </li> </ul> <ul> Day 4 <li> St. Peter's Square </li> <li> Roman Forum </li> <li> Colisseum </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Rome](https://youtu.be/aaKl40z6MSw) (YouTube, 24:05)
</span>`,frontmatter:{},index:0,start:0,end:8},inline:{raw:`---
src: ./slides/03-rome/021-rome-overview.md
---
`,content:"",frontmatter:{},index:20,start:112,end:116},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/021-rome-overview.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:e3,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Arrival**
### [AirBnB - Via Merulana, 94 int 6, Rome](https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL)     <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**12:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/UoVfD7pYrtoNMjom7)
|     |     |
| --- | --- |
| <img src="/rome-lazio.jpg" height="200" width="400" style="margin:auto"/> | <img src="/rome-airbnb.png" width=275 height=275> <span style="font-size:50%">(our apartment is on the third floor)</span> |


> We'll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day's sightseeing.`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md"},index:21,start:0,end:12,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/022-day-3-rome-arrival.md",raw:`#### Day 3 - Sun 10/9 - Rome
## **Arrival**
### [AirBnB - Via Merulana, 94 int 6, Rome](https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL)     <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**12:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/UoVfD7pYrtoNMjom7)
|     |     |
| --- | --- |
| <img src="/rome-lazio.jpg" height="200" width="400" style="margin:auto"/> | <img src="/rome-airbnb.png" width=275 height=275> <span style="font-size:50%">(our apartment is on the third floor)</span> |


> We'll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day's sightseeing. 
`,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Arrival**
### [AirBnB - Via Merulana, 94 int 6, Rome](https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL)     <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**12:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/UoVfD7pYrtoNMjom7)
|     |     |
| --- | --- |
| <img src="/rome-lazio.jpg" height="200" width="400" style="margin:auto"/> | <img src="/rome-airbnb.png" width=275 height=275> <span style="font-size:50%">(our apartment is on the third floor)</span> |


> We'll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day's sightseeing.`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:12},inline:{raw:`---
src: ./slides/03-rome/022-day-3-rome-arrival.md
---
`,content:"",frontmatter:{},index:21,start:116,end:120},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/022-day-3-rome-arrival.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:p3,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome 
## **Altar of the Fatherland**

> We'll walk right past the Colosseum on our way to the **Altare della Patria** ("Altar of the Fatherland"). 

\u{1F6B6}**2:00**: Walk from AirBnB to the Altar of the Fatherland [(30 minutes)](https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9)

> This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy's first king, seated on horseback in bronze.
 
> Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.

\u{1F6B6}**3:00**: Walk from the Altar of the Fatherland to the Piazza Navona[(15 minutes)](https://goo.gl/maps/rARoH2ixzgtR4ssL9)

>The expansive Piazza Navona marks the starting point of our walk through the heart of Rome

::right::

<img src="/rome-altar-of-the-fatherland.jpg" height="200" width="400" style="margin:auto"/>

<br>

<img src="/rome-airbnb-to-piazza-navona.png" height="319" width="425" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md"},index:22,start:0,end:22,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",raw:`#### Day 3 - Sun 10/9 - Rome 
## **Altar of the Fatherland**

> We'll walk right past the Colosseum on our way to the **Altare della Patria** ("Altar of the Fatherland"). 

\u{1F6B6}**2:00**: Walk from AirBnB to the Altar of the Fatherland [(30 minutes)](https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9)

> This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy's first king, seated on horseback in bronze.
 
> Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.

\u{1F6B6}**3:00**: Walk from the Altar of the Fatherland to the Piazza Navona[(15 minutes)](https://goo.gl/maps/rARoH2ixzgtR4ssL9)

>The expansive Piazza Navona marks the starting point of our walk through the heart of Rome

::right::

<img src="/rome-altar-of-the-fatherland.jpg" height="200" width="400" style="margin:auto"/>

<br>

<img src="/rome-airbnb-to-piazza-navona.png" height="319" width="425" style="margin:auto"/>`,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome 
## **Altar of the Fatherland**

> We'll walk right past the Colosseum on our way to the **Altare della Patria** ("Altar of the Fatherland"). 

\u{1F6B6}**2:00**: Walk from AirBnB to the Altar of the Fatherland [(30 minutes)](https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9)

> This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy's first king, seated on horseback in bronze.
 
> Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.

\u{1F6B6}**3:00**: Walk from the Altar of the Fatherland to the Piazza Navona[(15 minutes)](https://goo.gl/maps/rARoH2ixzgtR4ssL9)

>The expansive Piazza Navona marks the starting point of our walk through the heart of Rome

::right::

<img src="/rome-altar-of-the-fatherland.jpg" height="200" width="400" style="margin:auto"/>

<br>

<img src="/rome-airbnb-to-piazza-navona.png" height="319" width="425" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:22},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:22,start:120,end:125},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:T3,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **"Heart of Rome" Walk**

\u{1F6B6}**3:30**: Walk from the Piazza Navona to Spanish Steps [(30 minutes walk, plus stops)](https://goo.gl/maps/RzCEs3sUTsuqyFvg6)

> This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:

<br>

* Piazza Navona
* The Pantheon
* Parliament
* Piazza Colonna/Via del Corso
* Trevi Fountain
* Spanish Steps

<span style="font-size:50%">listen to [Rick Steves' Heart of Rome Audio Tour](https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3) (MP3, 1:08:07)</span>

::right::

<img src="/heart-of-rome-walk-map.png" height="400" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md"},index:23,start:0,end:21,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",raw:`#### Day 3 - Sun 10/9 - Rome
## **"Heart of Rome" Walk**

\u{1F6B6}**3:30**: Walk from the Piazza Navona to Spanish Steps [(30 minutes walk, plus stops)](https://goo.gl/maps/RzCEs3sUTsuqyFvg6)

> This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:

<br>

* Piazza Navona
* The Pantheon
* Parliament
* Piazza Colonna/Via del Corso
* Trevi Fountain
* Spanish Steps

<span style="font-size:50%">listen to [Rick Steves' Heart of Rome Audio Tour](https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3) (MP3, 1:08:07)</span>

::right::

<img src="/heart-of-rome-walk-map.png" height="400" width="400" style="margin:auto"/>`,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **"Heart of Rome" Walk**

\u{1F6B6}**3:30**: Walk from the Piazza Navona to Spanish Steps [(30 minutes walk, plus stops)](https://goo.gl/maps/RzCEs3sUTsuqyFvg6)

> This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:

<br>

* Piazza Navona
* The Pantheon
* Parliament
* Piazza Colonna/Via del Corso
* Trevi Fountain
* Spanish Steps

<span style="font-size:50%">listen to [Rick Steves' Heart of Rome Audio Tour](https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3) (MP3, 1:08:07)</span>

::right::

<img src="/heart-of-rome-walk-map.png" height="400" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:21},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:23,start:125,end:130},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:z3,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Pantheon**

<br>

<img src="/rome-pantheon-exterior.jpg" height="200" width="400" style="margin:auto"/>

> <span style="font-size:65%">The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.</span>

<span style="font-size:50%">
(open until 6:00 PM)</span> <br> 

<span style="font-size:50%">listen to [Rick Steves' Pantheon Audio Tour](https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3) (MP3, 23:20)</span>

::right::

<img src="/rome-pantheon-floor-plan.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md"},index:24,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/025-day-3-rome-pantheon.md",raw:`#### Day 3 - Sun 10/9 - Rome
## **Pantheon**

<br>

<img src="/rome-pantheon-exterior.jpg" height="200" width="400" style="margin:auto"/>

> <span style="font-size:65%">The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.</span>

<span style="font-size:50%">
(open until 6:00 PM)</span> <br> 

<span style="font-size:50%">listen to [Rick Steves' Pantheon Audio Tour](https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3) (MP3, 23:20)</span>

::right::

<img src="/rome-pantheon-floor-plan.png" height="800" width="400" style="margin:auto"/>

`,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Pantheon**

<br>

<img src="/rome-pantheon-exterior.jpg" height="200" width="400" style="margin:auto"/>

> <span style="font-size:65%">The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.</span>

<span style="font-size:50%">
(open until 6:00 PM)</span> <br> 

<span style="font-size:50%">listen to [Rick Steves' Pantheon Audio Tour](https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3) (MP3, 23:20)</span>

::right::

<img src="/rome-pantheon-floor-plan.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:19},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/025-day-3-rome-pantheon.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:24,start:130,end:135},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/025-day-3-rome-pantheon.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:U3,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Piazza di Montecitorio, Parliament, Piazza Colonna**

|     |     |     |
| --- | --- | --- | 
| <img src="/rome-piazza-di-montecitorio.jpg" width="300" height="150"> | <img src="/rome-parliament.jpg" width="200" height="400"> | <img src="/rome-piazza-colonna.jpeg" width="300" height="150"> |

> Walking from the Pantheon towards the Trevi Fountain, we'll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.

> One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD.  This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md"},index:25,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",raw:`#### Day 3 - Sun 10/9 - Rome
## **Piazza di Montecitorio, Parliament, Piazza Colonna**

|     |     |     |
| --- | --- | --- | 
| <img src="/rome-piazza-di-montecitorio.jpg" width="300" height="150"> | <img src="/rome-parliament.jpg" width="200" height="400"> | <img src="/rome-piazza-colonna.jpeg" width="300" height="150"> |

> Walking from the Pantheon towards the Trevi Fountain, we'll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.

> One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD.  This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD. `,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Piazza di Montecitorio, Parliament, Piazza Colonna**

|     |     |     |
| --- | --- | --- | 
| <img src="/rome-piazza-di-montecitorio.jpg" width="300" height="150"> | <img src="/rome-parliament.jpg" width="200" height="400"> | <img src="/rome-piazza-colonna.jpeg" width="300" height="150"> |

> Walking from the Pantheon towards the Trevi Fountain, we'll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.

> One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD.  This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md
---
`,content:"",frontmatter:{},index:25,start:135,end:139},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:o5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Trevi Fountain**

\u{1F4F7} **6:00 (approximate)**: Arrive at the Trevi Fountain

> Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.

<br>

> We'll see the Trevi Fountain twice today. Once during the "golden hour", illuminated  by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.  

<br>

> If you want to skip the previous parts of this walk, and do something else for the afternoon, **6:00 PM** is the time we should all meet up, before we head on to the Spanish Steps.

::right::

<img src="/rome-trevi-fountain-night.jpg" height="200" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md"},index:26,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/027-day-3-rome-trevi-fountain.md",raw:`#### Day 3 - Sun 10/9 - Rome
## **Trevi Fountain**

\u{1F4F7} **6:00 (approximate)**: Arrive at the Trevi Fountain

> Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.

<br>

> We'll see the Trevi Fountain twice today. Once during the "golden hour", illuminated  by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.  

<br>

> If you want to skip the previous parts of this walk, and do something else for the afternoon, **6:00 PM** is the time we should all meet up, before we head on to the Spanish Steps.

::right::

<img src="/rome-trevi-fountain-night.jpg" height="200" width="400" style="margin:auto"/>`,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Trevi Fountain**

\u{1F4F7} **6:00 (approximate)**: Arrive at the Trevi Fountain

> Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.

<br>

> We'll see the Trevi Fountain twice today. Once during the "golden hour", illuminated  by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.  

<br>

> If you want to skip the previous parts of this walk, and do something else for the afternoon, **6:00 PM** is the time we should all meet up, before we head on to the Spanish Steps.

::right::

<img src="/rome-trevi-fountain-night.jpg" height="200" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/027-day-3-rome-trevi-fountain.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:26,start:139,end:144},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/027-day-3-rome-trevi-fountain.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:h5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Spanish Steps**

<span style="font-size:80%">\u{1F6B6}**6:30**: Walk from Trevi Fountain to the Spanish Steps [(8 mins)](https://goo.gl/maps/MKdDinjuN6Tthqzu7)</span>

> 138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini's father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.<br>
> Partway up, the steps fan out around a central terrace, forming a butterfly shape.
> An obelisk, framed by two Baroque church towers, stands at the top.

This is where our touring for the day ends.  We'll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.

>Enjoy the steps, but whatever you do, don't sit down on them, or it'll cost you a **\u20AC250 fine** (seriously).

::right::

<img src="/spanish-steps.jpg" height="250" width="500" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md"},index:27,start:0,end:16,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/028-day-3-rome-spanish-steps.md",raw:`#### Day 3 - Sun 10/9 - Rome
## **Spanish Steps**

<span style="font-size:80%">\u{1F6B6}**6:30**: Walk from Trevi Fountain to the Spanish Steps [(8 mins)](https://goo.gl/maps/MKdDinjuN6Tthqzu7)</span>

> 138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini's father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.<br>
> Partway up, the steps fan out around a central terrace, forming a butterfly shape.
> An obelisk, framed by two Baroque church towers, stands at the top.

This is where our touring for the day ends.  We'll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.

>Enjoy the steps, but whatever you do, don't sit down on them, or it'll cost you a **\u20AC250 fine** (seriously).

::right::

<img src="/spanish-steps.jpg" height="250" width="500" style="margin:auto"/>`,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Spanish Steps**

<span style="font-size:80%">\u{1F6B6}**6:30**: Walk from Trevi Fountain to the Spanish Steps [(8 mins)](https://goo.gl/maps/MKdDinjuN6Tthqzu7)</span>

> 138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini's father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.<br>
> Partway up, the steps fan out around a central terrace, forming a butterfly shape.
> An obelisk, framed by two Baroque church towers, stands at the top.

This is where our touring for the day ends.  We'll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.

>Enjoy the steps, but whatever you do, don't sit down on them, or it'll cost you a **\u20AC250 fine** (seriously).

::right::

<img src="/spanish-steps.jpg" height="250" width="500" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome"},index:0,start:0,end:16},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/028-day-3-rome-spanish-steps.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:27,start:144,end:149},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/028-day-3-rome-spanish-steps.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:b5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Metro Ride to St. Peter's Square**
<span style="font-size:70%">

\u{1F68B} - Take the **Metro (Line A - Battistini)** from **Vittorio Emanuele** to **Ottavio** <br> [30 mins total](https://goo.gl/maps/YTmeLq1JWEF5V11w9)

</span>
<span style="font-size:65%">

##### Detailed Directions
- Walk from **Via Merulana** toward **Via Machiavelli** to **Vittorio Emanuele Station** <br> (6 mins)
- Ride **Line A** 7 stops to **Ottaviano** (10 mins)
- Walk south on **Via Ottaviano** toward **Via degli Scipioni**, continue onto **Via di Porta Angelica**, which becoms **Largo Del Colonnato** (11 mins)

</span>
::right::
<img src="/rome-metro-to-vatican.png" height="250" width="500" style="margin:auto"/>

<br>



> <span style="font-size:70%">All public transportation uses the same ticket.<br> It costs **\u20AC1.50** and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.</span>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md"},index:28,start:0,end:23,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **Metro Ride to St. Peter's Square**
<span style="font-size:70%">

\u{1F68B} - Take the **Metro (Line A - Battistini)** from **Vittorio Emanuele** to **Ottavio** <br> [30 mins total](https://goo.gl/maps/YTmeLq1JWEF5V11w9)

</span>
<span style="font-size:65%">

##### Detailed Directions
- Walk from **Via Merulana** toward **Via Machiavelli** to **Vittorio Emanuele Station** <br> (6 mins)
- Ride **Line A** 7 stops to **Ottaviano** (10 mins)
- Walk south on **Via Ottaviano** toward **Via degli Scipioni**, continue onto **Via di Porta Angelica**, which becoms **Largo Del Colonnato** (11 mins)

</span>
::right::
<img src="/rome-metro-to-vatican.png" height="250" width="500" style="margin:auto"/>

<br>



> <span style="font-size:70%">All public transportation uses the same ticket.<br> It costs **\u20AC1.50** and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.</span>`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Metro Ride to St. Peter's Square**
<span style="font-size:70%">

\u{1F68B} - Take the **Metro (Line A - Battistini)** from **Vittorio Emanuele** to **Ottavio** <br> [30 mins total](https://goo.gl/maps/YTmeLq1JWEF5V11w9)

</span>
<span style="font-size:65%">

##### Detailed Directions
- Walk from **Via Merulana** toward **Via Machiavelli** to **Vittorio Emanuele Station** <br> (6 mins)
- Ride **Line A** 7 stops to **Ottaviano** (10 mins)
- Walk south on **Via Ottaviano** toward **Via degli Scipioni**, continue onto **Via di Porta Angelica**, which becoms **Largo Del Colonnato** (11 mins)

</span>
::right::
<img src="/rome-metro-to-vatican.png" height="250" width="500" style="margin:auto"/>

<br>



> <span style="font-size:70%">All public transportation uses the same ticket.<br> It costs **\u20AC1.50** and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.</span>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:23},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:28,start:149,end:154},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:j5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **St Peter's Square and Basilica**

<br>

#### St. Peter's Square

> 284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall.
> Bernini designed this square, which is really an ellipse that's roughly the same dimensions as the Colosseum. <br>
> A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times. 

<br>

#### St. Peter's Basilica

> Once you've seen the square, its time to set foot inside the richest and grandest church on Earth.  Michelangelo's **Pieta** sits behind bulletproof glass just to the right of the entrance.

<span style="font-size:50%">**Dress Code**: No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).</span>

::right::

<img src="/st-peters-square.jpg" height="175" width="350" style="margin:auto"/>

|     |     |
| --- | --- |
| <img src="/rome-st-peters-basilica-exterior.jpg" height="175" width="350" style="margin:auto"/> | <img src="/rome-st-peters-basilica-interior.jpeg" height="150" width="300" style="margin:auto"/> |

<img src="/rome-pieta.jpg" height="75" width="150" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md"},index:29,start:0,end:28,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/030-day-4-rome-st-peters-square.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **St Peter's Square and Basilica**

<br>

#### St. Peter's Square

> 284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall.
> Bernini designed this square, which is really an ellipse that's roughly the same dimensions as the Colosseum. <br>
> A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times. 

<br>

#### St. Peter's Basilica

> Once you've seen the square, its time to set foot inside the richest and grandest church on Earth.  Michelangelo's **Pieta** sits behind bulletproof glass just to the right of the entrance.

<span style="font-size:50%">**Dress Code**: No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).</span>

::right::

<img src="/st-peters-square.jpg" height="175" width="350" style="margin:auto"/>

|     |     |
| --- | --- |
| <img src="/rome-st-peters-basilica-exterior.jpg" height="175" width="350" style="margin:auto"/> | <img src="/rome-st-peters-basilica-interior.jpeg" height="150" width="300" style="margin:auto"/> |

<img src="/rome-pieta.jpg" height="75" width="150" style="margin:auto"/>`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **St Peter's Square and Basilica**

<br>

#### St. Peter's Square

> 284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall.
> Bernini designed this square, which is really an ellipse that's roughly the same dimensions as the Colosseum. <br>
> A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times. 

<br>

#### St. Peter's Basilica

> Once you've seen the square, its time to set foot inside the richest and grandest church on Earth.  Michelangelo's **Pieta** sits behind bulletproof glass just to the right of the entrance.

<span style="font-size:50%">**Dress Code**: No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).</span>

::right::

<img src="/st-peters-square.jpg" height="175" width="350" style="margin:auto"/>

|     |     |
| --- | --- |
| <img src="/rome-st-peters-basilica-exterior.jpg" height="175" width="350" style="margin:auto"/> | <img src="/rome-st-peters-basilica-interior.jpeg" height="150" width="300" style="margin:auto"/> |

<img src="/rome-pieta.jpg" height="75" width="150" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:28},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/030-day-4-rome-st-peters-square.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:29,start:154,end:159},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/030-day-4-rome-st-peters-square.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:U5,meta:{title:"Day 4 - Mon 10/10 - Rome",srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Walk to the Forum**

\u{1F6B6}**12:00 PM (approx.)**: Walk from St. Peter's Square to the Roman Forum [(36 minutes)](https://goo.gl/maps/rNAWJa3WxTxV2KLh9)

> This 1.8 mile walk crosses the River Tiber at the **Ponte Vittorio Emanuele II** continuing to the **Corso Vittorio Emaulele II**, a main east-west artery.

<br>

<img src="/rome-st-peters-walk-to-forum.png" height="325" width="650" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md"},index:30,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **Walk to the Forum**

\u{1F6B6}**12:00 PM (approx.)**: Walk from St. Peter's Square to the Roman Forum [(36 minutes)](https://goo.gl/maps/rNAWJa3WxTxV2KLh9)

> This 1.8 mile walk crosses the River Tiber at the **Ponte Vittorio Emanuele II** continuing to the **Corso Vittorio Emaulele II**, a main east-west artery.

<br>

<img src="/rome-st-peters-walk-to-forum.png" height="325" width="650" style="margin:auto"/>`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Walk to the Forum**

\u{1F6B6}**12:00 PM (approx.)**: Walk from St. Peter's Square to the Roman Forum [(36 minutes)](https://goo.gl/maps/rNAWJa3WxTxV2KLh9)

> This 1.8 mile walk crosses the River Tiber at the **Ponte Vittorio Emanuele II** continuing to the **Corso Vittorio Emaulele II**, a main east-west artery.

<br>

<img src="/rome-st-peters-walk-to-forum.png" height="325" width="650" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md
---
`,content:"",frontmatter:{},index:30,start:159,end:163},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:t4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **The Forum**

<img src="/rome-forum.jpg" height="150" width="300" style="margin:auto"/>

> <span style="font-size:75%"> We'll begin our tour at the entrance near the Via Dei Fori Imperiali. Imagine traveling back in time to ancient Rome, your mind's eye filling in the missing parts of these massive structures, with their colorful marble veneers intact.  Listen to the historical perspective provided by the audio and walking tours linked below for all the rich history crammed into this, the heart and cradle of Roman civilization.</span>

<span style="font-size:50%">[Rick Steves' Roman Forum Audio Tour](https://podcasts.ricksteves.com/walkingtours/RomanForum.mp3) (MP3, 1:08:07)</span>
<br>
<span style="font-size:50%">[Walking Tour of the Forum](https://youtu.be/k4P5W1DKTBI)  (51:00, ProWalk Tours, YouTube)</span>
<br>
<span style="font-size:50%">[Map of the Walking Tour](https://www.google.com/maps/d/viewer?mid=1aWn5IgwI9hf1TuPa99xjYkA7q7NegYsK&ll=41.8917763120126%2C12.487398700000005&z=17)  (Google Maps)</span>

::right::

<img src="/rome-forum-map.png" height="550" width="275" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md"},index:31,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/032-day-4-rome-roman-forum.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **The Forum**

<img src="/rome-forum.jpg" height="150" width="300" style="margin:auto"/>

> <span style="font-size:75%"> We'll begin our tour at the entrance near the Via Dei Fori Imperiali. Imagine traveling back in time to ancient Rome, your mind's eye filling in the missing parts of these massive structures, with their colorful marble veneers intact.  Listen to the historical perspective provided by the audio and walking tours linked below for all the rich history crammed into this, the heart and cradle of Roman civilization.</span>

<span style="font-size:50%">[Rick Steves' Roman Forum Audio Tour](https://podcasts.ricksteves.com/walkingtours/RomanForum.mp3) (MP3, 1:08:07)</span>
<br>
<span style="font-size:50%">[Walking Tour of the Forum](https://youtu.be/k4P5W1DKTBI)  (51:00, ProWalk Tours, YouTube)</span>
<br>
<span style="font-size:50%">[Map of the Walking Tour](https://www.google.com/maps/d/viewer?mid=1aWn5IgwI9hf1TuPa99xjYkA7q7NegYsK&ll=41.8917763120126%2C12.487398700000005&z=17)  (Google Maps)</span>

::right::

<img src="/rome-forum-map.png" height="550" width="275" style="margin:auto"/>

`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **The Forum**

<img src="/rome-forum.jpg" height="150" width="300" style="margin:auto"/>

> <span style="font-size:75%"> We'll begin our tour at the entrance near the Via Dei Fori Imperiali. Imagine traveling back in time to ancient Rome, your mind's eye filling in the missing parts of these massive structures, with their colorful marble veneers intact.  Listen to the historical perspective provided by the audio and walking tours linked below for all the rich history crammed into this, the heart and cradle of Roman civilization.</span>

<span style="font-size:50%">[Rick Steves' Roman Forum Audio Tour](https://podcasts.ricksteves.com/walkingtours/RomanForum.mp3) (MP3, 1:08:07)</span>
<br>
<span style="font-size:50%">[Walking Tour of the Forum](https://youtu.be/k4P5W1DKTBI)  (51:00, ProWalk Tours, YouTube)</span>
<br>
<span style="font-size:50%">[Map of the Walking Tour](https://www.google.com/maps/d/viewer?mid=1aWn5IgwI9hf1TuPa99xjYkA7q7NegYsK&ll=41.8917763120126%2C12.487398700000005&z=17)  (Google Maps)</span>

::right::

<img src="/rome-forum-map.png" height="550" width="275" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/032-day-4-rome-roman-forum.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:31,start:163,end:168},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/032-day-4-rome-roman-forum.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:h4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Palatine Hill**

> Humans first settled on the Palatine Hill in the 10th century BC: 200 years before Romulus founded Rome. Throughout the Roman Republic and Roman Empire, it was continuously inhabited: first by Rome\u2019s most eminent residents, incluing Romulus himself, later by the city\u2019s succession of Caesars.

<br>

> Today, only the barest skeleton remains to tell the story of this, the "Beverly Hills" of the ancient world. in addition to providing an excellent vantage point for viewing the entire Forum.

::right::
<img src="/rome-palatine-valley.jpg" height="600" width="300" style="margin:auto"/>
<br>
<img src="/rome-palatine-circus-maximus.jpg" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md"},index:32,start:0,end:13,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/033-day-4-rome-palatine-hill.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **Palatine Hill**

> Humans first settled on the Palatine Hill in the 10th century BC: 200 years before Romulus founded Rome. Throughout the Roman Republic and Roman Empire, it was continuously inhabited: first by Rome\u2019s most eminent residents, incluing Romulus himself, later by the city\u2019s succession of Caesars.

<br>

> Today, only the barest skeleton remains to tell the story of this, the "Beverly Hills" of the ancient world. in addition to providing an excellent vantage point for viewing the entire Forum.

::right::
<img src="/rome-palatine-valley.jpg" height="600" width="300" style="margin:auto"/>
<br>
<img src="/rome-palatine-circus-maximus.jpg" height="600" width="300" style="margin:auto"/>`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Palatine Hill**

> Humans first settled on the Palatine Hill in the 10th century BC: 200 years before Romulus founded Rome. Throughout the Roman Republic and Roman Empire, it was continuously inhabited: first by Rome\u2019s most eminent residents, incluing Romulus himself, later by the city\u2019s succession of Caesars.

<br>

> Today, only the barest skeleton remains to tell the story of this, the "Beverly Hills" of the ancient world. in addition to providing an excellent vantage point for viewing the entire Forum.

::right::
<img src="/rome-palatine-valley.jpg" height="600" width="300" style="margin:auto"/>
<br>
<img src="/rome-palatine-circus-maximus.jpg" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:13},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/033-day-4-rome-palatine-hill.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:32,start:168,end:173},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/033-day-4-rome-palatine-hill.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:S4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Colosseum**

\u{1F3F0} **3:15 PM**: Timed Entry into Uffizi Gallery<br>

<img src="/rome-colosseum.jpg" height="175" width="350" style="margin:auto"/>
<br>

> <span style="font-size:75%">Here it is, a 2,000 year old masterpiece of Roman engineering, where 50,000 Romans watched all manner of violent entertainment, paid for by the Emperor.</span> 

<span style="font-size:50%">listen to [Rick Steves' Colosseum Audio Tour](https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3) (MP3, 41:05)</span>

::right::

<img src="/rome-colosseum-map.png" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md"},index:33,start:0,end:17,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/034-day-4-rome-colosseum.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **Colosseum**

\u{1F3F0} **3:15 PM**: Timed Entry into Uffizi Gallery<br>

<img src="/rome-colosseum.jpg" height="175" width="350" style="margin:auto"/>
<br>

> <span style="font-size:75%">Here it is, a 2,000 year old masterpiece of Roman engineering, where 50,000 Romans watched all manner of violent entertainment, paid for by the Emperor.</span> 

<span style="font-size:50%">listen to [Rick Steves' Colosseum Audio Tour](https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3) (MP3, 41:05)</span>

::right::

<img src="/rome-colosseum-map.png" height="600" width="300" style="margin:auto"/>

`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Colosseum**

\u{1F3F0} **3:15 PM**: Timed Entry into Uffizi Gallery<br>

<img src="/rome-colosseum.jpg" height="175" width="350" style="margin:auto"/>
<br>

> <span style="font-size:75%">Here it is, a 2,000 year old masterpiece of Roman engineering, where 50,000 Romans watched all manner of violent entertainment, paid for by the Emperor.</span> 

<span style="font-size:50%">listen to [Rick Steves' Colosseum Audio Tour](https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3) (MP3, 41:05)</span>

::right::

<img src="/rome-colosseum-map.png" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:17},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/034-day-4-rome-colosseum.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:33,start:173,end:178},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/034-day-4-rome-colosseum.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:C4,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Rome to Civitavecchia**

\u{1F6B6}**Between 9:00 & 9:30** Walk from AirBnB to Rome Termini Station  
[<span style="font-size:75%">(30 mins total)</span>](https://goo.gl/maps/J3KiqJxWc3nP7PwG7)

\u{1F68B} **Between 10:00 & 11:00 AM**: Take a Train to Civitavecchia (approx. 1 - 1.5 hrs)

[Train Schedule](trenitalia.com/en.html)
| Train # | Depart   | Duration | Arrive   |
| ------- | -------- | -------- | -------- |
| 4128    | 10:12 AM | 1h 1m    | 11:13 AM |
| 12514   | 10:42 AM | 1h 17m   | 11:59 AM |
| 12516   | 11:12 AM | 1h 4m    | 12:16 PM |
| 12520   | 11:42 AM | 1h 23m   | 1:05 PM  |`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md"},index:34,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",raw:`#### Day 5 - Tue 10/11 - Travel Day
## **Rome to Civitavecchia**

\u{1F6B6}**Between 9:00 & 9:30** Walk from AirBnB to Rome Termini Station  
[<span style="font-size:75%">(30 mins total)</span>](https://goo.gl/maps/J3KiqJxWc3nP7PwG7)

\u{1F68B} **Between 10:00 & 11:00 AM**: Take a Train to Civitavecchia (approx. 1 - 1.5 hrs)

[Train Schedule](trenitalia.com/en.html)
| Train # | Depart   | Duration | Arrive   |
| ------- | -------- | -------- | -------- |
| 4128    | 10:12 AM | 1h 1m    | 11:13 AM |
| 12514   | 10:42 AM | 1h 17m   | 11:59 AM |
| 12516   | 11:12 AM | 1h 4m    | 12:16 PM |
| 12520   | 11:42 AM | 1h 23m   | 1:05 PM  |



`,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Rome to Civitavecchia**

\u{1F6B6}**Between 9:00 & 9:30** Walk from AirBnB to Rome Termini Station  
[<span style="font-size:75%">(30 mins total)</span>](https://goo.gl/maps/J3KiqJxWc3nP7PwG7)

\u{1F68B} **Between 10:00 & 11:00 AM**: Take a Train to Civitavecchia (approx. 1 - 1.5 hrs)

[Train Schedule](trenitalia.com/en.html)
| Train # | Depart   | Duration | Arrive   |
| ------- | -------- | -------- | -------- |
| 4128    | 10:12 AM | 1h 1m    | 11:13 AM |
| 12514   | 10:42 AM | 1h 17m   | 11:59 AM |
| 12516   | 11:12 AM | 1h 4m    | 12:16 PM |
| 12520   | 11:42 AM | 1h 23m   | 1:05 PM  |`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day"},index:0,start:0,end:19},inline:{raw:`---
src: ./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md
---
`,content:"",frontmatter:{},index:34,start:178,end:182},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:j4,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Civitavecchia Train Station to Transit Center**

Upon arrival to the Train Station in Civitavecchia, there are two options for transferring from the station to the Transit Center at Largo Della Pace:

#### **Shuttle Bus \u20AC2**
City-run shuttle buses run every 10 minutes between the train station and the transit center

#### **Taxi \u20AC15-20**
You can hire a cab from the station to Largo Della Pace, directly across from the transit center, at a premium.`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md"},index:35,start:0,end:14,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",raw:`#### Day 5 - Tue 10/11 - Travel Day
## **Civitavecchia Train Station to Transit Center**

Upon arrival to the Train Station in Civitavecchia, there are two options for transferring from the station to the Transit Center at Largo Della Pace:

#### **Shuttle Bus \u20AC2**
City-run shuttle buses run every 10 minutes between the train station and the transit center

#### **Taxi \u20AC15-20**
You can hire a cab from the station to Largo Della Pace, directly across from the transit center, at a premium.



`,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Civitavecchia Train Station to Transit Center**

Upon arrival to the Train Station in Civitavecchia, there are two options for transferring from the station to the Transit Center at Largo Della Pace:

#### **Shuttle Bus \u20AC2**
City-run shuttle buses run every 10 minutes between the train station and the transit center

#### **Taxi \u20AC15-20**
You can hire a cab from the station to Largo Della Pace, directly across from the transit center, at a premium.`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day"},index:0,start:0,end:14},inline:{raw:`---
src: ./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md
---
`,content:"",frontmatter:{},index:35,start:182,end:186},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:G4,meta:{title:"Day 5 - Tue 10/11 - Cruise Day 1",srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Cruise Day 1",level:4,content:`#### Day 5 - Tue 10/11 - Cruise Day 1
## **Transit Center to Port, Embarkation and Cruise Departure**

The port area itself is secured, and you are not allowed to walk into the Cruise Terminal directly.  

### **Transit Center**
Free and frequent shuttle buses connect the Transit Center with the Cruise Terminal

### **Boarding Times**
According to the Boarding Passes provided by Carnival: <br> "All guests must arrive within their Arrival Appointment. Guests who arrive earlier will be turned away and asked to return at their designated time"

12:30 - 1:00: D&D, J&J <br>
1:30 - 2:00: T&K <br>
2:00 - 2:30: W&R <br>
6:00: <span style="color:red">FINAL BOARDING</span>

\u{1F6A2} **7:00**: Depart port`,frontmatter:{title:"Day 5 - Tue 10/11 - Cruise Day 1",srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md"},index:36,start:0,end:17,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",raw:`#### Day 5 - Tue 10/11 - Cruise Day 1
## **Transit Center to Port, Embarkation and Cruise Departure**

The port area itself is secured, and you are not allowed to walk into the Cruise Terminal directly.  

### **Transit Center**
Free and frequent shuttle buses connect the Transit Center with the Cruise Terminal

### **Boarding Times**
According to the Boarding Passes provided by Carnival: <br> "All guests must arrive within their Arrival Appointment. Guests who arrive earlier will be turned away and asked to return at their designated time"

12:30 - 1:00: D&D, J&J <br>
1:30 - 2:00: T&K <br>
2:00 - 2:30: W&R <br>
6:00: <span style="color:red">FINAL BOARDING</span>

\u{1F6A2} **7:00**: Depart port`,title:"Day 5 - Tue 10/11 - Cruise Day 1",level:4,content:`#### Day 5 - Tue 10/11 - Cruise Day 1
## **Transit Center to Port, Embarkation and Cruise Departure**

The port area itself is secured, and you are not allowed to walk into the Cruise Terminal directly.  

### **Transit Center**
Free and frequent shuttle buses connect the Transit Center with the Cruise Terminal

### **Boarding Times**
According to the Boarding Passes provided by Carnival: <br> "All guests must arrive within their Arrival Appointment. Guests who arrive earlier will be turned away and asked to return at their designated time"

12:30 - 1:00: D&D, J&J <br>
1:30 - 2:00: T&K <br>
2:00 - 2:30: W&R <br>
6:00: <span style="color:red">FINAL BOARDING</span>

\u{1F6A2} **7:00**: Depart port`,frontmatter:{title:"Day 5 - Tue 10/11 - Cruise Day 1"},index:0,start:0,end:17},inline:{raw:`---
src: ./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md
---
`,content:"",frontmatter:{},index:36,start:186,end:190},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:Z4,meta:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",slide:{raw:null,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md"},index:37,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",raw:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md
---
`,content:"",frontmatter:{},index:37,start:190,end:194},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:iS,meta:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md",slide:{raw:null,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port

[Prowalk Tours Day Walk Map (Google)](https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18)`,frontmatter:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md"},index:38,start:0,end:12,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/039-day-8-mykonos.md",raw:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port

[Prowalk Tours Day Walk Map (Google)](https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18)`,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port

[Prowalk Tours Day Walk Map (Google)](https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18)`,frontmatter:{title:"Day 8 - Fri 10/14 - Cruise Day 4"},index:0,start:0,end:12},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/039-day-8-mykonos.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:38,start:194,end:199},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/039-day-8-mykonos.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:gS,meta:{title:"Day 9 - Sat 10/15 - Cruise Day 5",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md",slide:{raw:null,title:"Day 9 - Sat 10/15 - Cruise Day 5",level:4,content:`#### Day 9 - Sat 10/15 - Cruise Day 5
## **Ephesus** <span style="font-size:75%">(Anchor at Kusadasi, Turkey)</span>

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, D&D - [Terrace House & Ancient Ephesus](https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800) (4.25 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/ephesus.jpg" height="210" width="420" style="margin:auto">`,frontmatter:{title:"Day 9 - Sat 10/15 - Cruise Day 5",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md"},index:39,start:0,end:13,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/040-day-9-ephesus.md",raw:`#### Day 9 - Sat 10/15 - Cruise Day 5
## **Ephesus** <span style="font-size:75%">(Anchor at Kusadasi, Turkey)</span>

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, D&D - [Terrace House & Ancient Ephesus](https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800) (4.25 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/ephesus.jpg" height="210" width="420" style="margin:auto">`,title:"Day 9 - Sat 10/15 - Cruise Day 5",level:4,content:`#### Day 9 - Sat 10/15 - Cruise Day 5
## **Ephesus** <span style="font-size:75%">(Anchor at Kusadasi, Turkey)</span>

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, D&D - [Terrace House & Ancient Ephesus](https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800) (4.25 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/ephesus.jpg" height="210" width="420" style="margin:auto">`,frontmatter:{title:"Day 9 - Sat 10/15 - Cruise Day 5"},index:0,start:0,end:13},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/040-day-9-ephesus.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:39,start:199,end:204},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/040-day-9-ephesus.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:RS,meta:{title:"Day 10 - Sun 10/16 - Cruise Day 6",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md",slide:{raw:null,title:"Day 10 - Sun 10/16 - Cruise Day 6",level:4,content:`#### Day 10 - Sun 10/16 - Cruise Day 6
## **Santorini**

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:15** 
* W&R - [Catamaran, Sail and Swim and BBQ](https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815) (6 hours)
* D&D - [Oia & Thira](https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815) (4.5 hours)

\u{1F3F0} **8:30**
* T&K, J&J - [Volcano, the Caldera, and Hot Springs](https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830) (2.75 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/santorini-oia-and-thira.jpg" height="210" width="420" style="margin:auto">

|     |     |
| --- | --- |
|<img src="/santorini-catamaran.jpg" height="200" width="400" style="margin:auto">|<img src="/santorini-caldera.jpg" height="150" width="300" style="margin:auto">|`,frontmatter:{title:"Day 10 - Sun 10/16 - Cruise Day 6",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md"},index:40,start:0,end:21,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/041-day-10-santorini.md",raw:`#### Day 10 - Sun 10/16 - Cruise Day 6
## **Santorini**

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:15** 
* W&R - [Catamaran, Sail and Swim and BBQ](https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815) (6 hours)
* D&D - [Oia & Thira](https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815) (4.5 hours)

\u{1F3F0} **8:30**
* T&K, J&J - [Volcano, the Caldera, and Hot Springs](https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830) (2.75 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/santorini-oia-and-thira.jpg" height="210" width="420" style="margin:auto">

|     |     |
| --- | --- |
|<img src="/santorini-catamaran.jpg" height="200" width="400" style="margin:auto">|<img src="/santorini-caldera.jpg" height="150" width="300" style="margin:auto">|`,title:"Day 10 - Sun 10/16 - Cruise Day 6",level:4,content:`#### Day 10 - Sun 10/16 - Cruise Day 6
## **Santorini**

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:15** 
* W&R - [Catamaran, Sail and Swim and BBQ](https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815) (6 hours)
* D&D - [Oia & Thira](https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815) (4.5 hours)

\u{1F3F0} **8:30**
* T&K, J&J - [Volcano, the Caldera, and Hot Springs](https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830) (2.75 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/santorini-oia-and-thira.jpg" height="210" width="420" style="margin:auto">

|     |     |
| --- | --- |
|<img src="/santorini-catamaran.jpg" height="200" width="400" style="margin:auto">|<img src="/santorini-caldera.jpg" height="150" width="300" style="margin:auto">|`,frontmatter:{title:"Day 10 - Sun 10/16 - Cruise Day 6"},index:0,start:0,end:21},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/041-day-10-santorini.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:40,start:204,end:209},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/041-day-10-santorini.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:US,meta:{title:"Day 11 - Mon 10/17 - Cruise Day 7",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md",slide:{raw:null,title:"Day 11 - Mon 10/17 - Cruise Day 7",level:4,content:`#### Day 11 - Mon 10/17 - Cruise Day 7
## **Athens**

\u{1F6A2} **6:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **7:15** 
* D&D, T&K, J&J - [Top 10 Best of Athens](https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715) (8 hours)

\u{1F3F0} **7:00**
* W&R - [Mycenae & Ancient Corinth](https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700) (8 hours)

\u{1F6A2} **5:00**: Depart port

::right::

<img src="/athens-parthenon.jpg" height="150" width="300" style="margin:auto">
<br>
<img src="/athens-mycenae.jpg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 11 - Mon 10/17 - Cruise Day 7",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md"},index:41,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/042-day-11-athens.md",raw:`#### Day 11 - Mon 10/17 - Cruise Day 7
## **Athens**

\u{1F6A2} **6:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **7:15** 
* D&D, T&K, J&J - [Top 10 Best of Athens](https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715) (8 hours)

\u{1F3F0} **7:00**
* W&R - [Mycenae & Ancient Corinth](https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700) (8 hours)

\u{1F6A2} **5:00**: Depart port

::right::

<img src="/athens-parthenon.jpg" height="150" width="300" style="margin:auto">
<br>
<img src="/athens-mycenae.jpg" height="200" width="400" style="margin:auto">`,title:"Day 11 - Mon 10/17 - Cruise Day 7",level:4,content:`#### Day 11 - Mon 10/17 - Cruise Day 7
## **Athens**

\u{1F6A2} **6:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **7:15** 
* D&D, T&K, J&J - [Top 10 Best of Athens](https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715) (8 hours)

\u{1F3F0} **7:00**
* W&R - [Mycenae & Ancient Corinth](https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700) (8 hours)

\u{1F6A2} **5:00**: Depart port

::right::

<img src="/athens-parthenon.jpg" height="150" width="300" style="margin:auto">
<br>
<img src="/athens-mycenae.jpg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 11 - Mon 10/17 - Cruise Day 7"},index:0,start:0,end:19},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/042-day-11-athens.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:41,start:209,end:214},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/042-day-11-athens.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:oT,meta:{title:"Day 12 - Tue 10/18 - Cruise Day 8",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md",slide:{raw:null,title:"Day 12 - Tue 10/18 - Cruise Day 8",level:4,content:`#### Day 12 - Tue 10/18 - Cruise Day 8
## **Olympia** <span style="font-size:75%">(Anchor at Katakolon)</span>

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, T&K, J&J - [Olympia & Magna Grecia](https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800) (5 hours)

\u{1F6A2} **5:00**: Depart port

\u{1F374} **6:30**: D&D - [Steakhouse](https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE) Dinner Reservation for 2

::right::

<img src="/olympia.jpg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 12 - Tue 10/18 - Cruise Day 8",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md"},index:42,start:0,end:16,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/043-day-12-olympia.md",raw:`#### Day 12 - Tue 10/18 - Cruise Day 8
## **Olympia** <span style="font-size:75%">(Anchor at Katakolon)</span>

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, T&K, J&J - [Olympia & Magna Grecia](https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800) (5 hours)

\u{1F6A2} **5:00**: Depart port

\u{1F374} **6:30**: D&D - [Steakhouse](https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE) Dinner Reservation for 2

::right::

<img src="/olympia.jpg" height="200" width="400" style="margin:auto">`,title:"Day 12 - Tue 10/18 - Cruise Day 8",level:4,content:`#### Day 12 - Tue 10/18 - Cruise Day 8
## **Olympia** <span style="font-size:75%">(Anchor at Katakolon)</span>

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, T&K, J&J - [Olympia & Magna Grecia](https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800) (5 hours)

\u{1F6A2} **5:00**: Depart port

\u{1F374} **6:30**: D&D - [Steakhouse](https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE) Dinner Reservation for 2

::right::

<img src="/olympia.jpg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 12 - Tue 10/18 - Cruise Day 8"},index:0,start:0,end:16},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/043-day-12-olympia.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:42,start:214,end:219},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/043-day-12-olympia.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:_T,meta:{title:"Day 13 - Wed 10/19 - Cruise Day 9",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md",slide:{raw:null,title:"Day 13 - Wed 10/19 - Cruise Day 9",level:4,content:`#### Day 13 - Wed 10/19 - Cruise Day 9
## **Sicily** <span style="font-size:75%">(Anchor at Messina)</span>

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:15** 
* W&R - [Taormina & Mount Etna](https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915) (8 hours)

\u{1F3F0} **10:15** 
* D&D, T&K, J&J - [Taormina on your own](https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015) (6.5 hours)

\u{1F6A2} **6:00**: Depart port

::right::

<img src="/taormina-and-mount-etna.jpg" height="200" width="400" style="margin:auto">
<br>
<img src="/taormina-on-your-own.jpg" height="150" width="300" style="margin:auto">`,frontmatter:{title:"Day 13 - Wed 10/19 - Cruise Day 9",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md"},index:43,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/044-day-13-sicily.md",raw:`#### Day 13 - Wed 10/19 - Cruise Day 9
## **Sicily** <span style="font-size:75%">(Anchor at Messina)</span>

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:15** 
* W&R - [Taormina & Mount Etna](https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915) (8 hours)

\u{1F3F0} **10:15** 
* D&D, T&K, J&J - [Taormina on your own](https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015) (6.5 hours)

\u{1F6A2} **6:00**: Depart port

::right::

<img src="/taormina-and-mount-etna.jpg" height="200" width="400" style="margin:auto">
<br>
<img src="/taormina-on-your-own.jpg" height="150" width="300" style="margin:auto">`,title:"Day 13 - Wed 10/19 - Cruise Day 9",level:4,content:`#### Day 13 - Wed 10/19 - Cruise Day 9
## **Sicily** <span style="font-size:75%">(Anchor at Messina)</span>

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:15** 
* W&R - [Taormina & Mount Etna](https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915) (8 hours)

\u{1F3F0} **10:15** 
* D&D, T&K, J&J - [Taormina on your own](https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015) (6.5 hours)

\u{1F6A2} **6:00**: Depart port

::right::

<img src="/taormina-and-mount-etna.jpg" height="200" width="400" style="margin:auto">
<br>
<img src="/taormina-on-your-own.jpg" height="150" width="300" style="margin:auto">`,frontmatter:{title:"Day 13 - Wed 10/19 - Cruise Day 9"},index:0,start:0,end:19},inline:{raw:`---
layout: two-cols
src: ./slides/06-sicily-and-naples/044-day-13-sicily.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:43,start:219,end:224},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/044-day-13-sicily.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:CT,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## **Naples (Amalfi Coast)**

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:00** 
* All - [Best of the Amalfi Coast](https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900) (9.5 hours)

<br>

* Stops with free time in:
    * Amalfi Town 
    * Positano 
    * Sorrento 

\u{1F6A2} **7:00**: Depart port

::right::
<img src="/amalfi-coast-map.png" height="250" width="500" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md"},index:44,start:0,end:22,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/045-day-14-naples.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
## **Naples (Amalfi Coast)**

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:00** 
* All - [Best of the Amalfi Coast](https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900) (9.5 hours)

<br>

* Stops with free time in:
    * Amalfi Town 
    * Positano 
    * Sorrento 

\u{1F6A2} **7:00**: Depart port

::right::
<img src="/amalfi-coast-map.png" height="250" width="500" style="margin:auto">

`,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## **Naples (Amalfi Coast)**

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:00** 
* All - [Best of the Amalfi Coast](https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900) (9.5 hours)

<br>

* Stops with free time in:
    * Amalfi Town 
    * Positano 
    * Sorrento 

\u{1F6A2} **7:00**: Depart port

::right::
<img src="/amalfi-coast-map.png" height="250" width="500" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10"},index:0,start:0,end:22},inline:{raw:`---
layout: two-cols
src: ./slides/06-sicily-and-naples/045-day-14-naples.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:44,start:224,end:229},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/045-day-14-naples.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:BT,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Amalfi Town**

<br>

> Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we'll spend an hour of free time. 
> A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the **Amalfi Cathedral**.

|     |     |
| --- | --- |
|<img src="/amalfi-cathedral-exterior.jpg" height="200" width="400" style="margin:auto">|<img src="/amalfi-cathedral-interior.jpg" height="200" width="400" style="margin:auto">|

> A little further past the Cathedral, you'll find [**Cuoppo d'Amalfi**](https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi), a fried fish shop that fills cardboard cones with all manner of deep-sea life

::right::

<img src="/amalfi-town-map.png" height="650" width="325" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md"},index:45,start:0,end:17,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Amalfi Town**

<br>

> Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we'll spend an hour of free time. 
> A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the **Amalfi Cathedral**.

|     |     |
| --- | --- |
|<img src="/amalfi-cathedral-exterior.jpg" height="200" width="400" style="margin:auto">|<img src="/amalfi-cathedral-interior.jpg" height="200" width="400" style="margin:auto">|

> A little further past the Cathedral, you'll find [**Cuoppo d'Amalfi**](https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi), a fried fish shop that fills cardboard cones with all manner of deep-sea life

::right::

<img src="/amalfi-town-map.png" height="650" width="325" style="margin:auto">`,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Amalfi Town**

<br>

> Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we'll spend an hour of free time. 
> A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the **Amalfi Cathedral**.

|     |     |
| --- | --- |
|<img src="/amalfi-cathedral-exterior.jpg" height="200" width="400" style="margin:auto">|<img src="/amalfi-cathedral-interior.jpg" height="200" width="400" style="margin:auto">|

> A little further past the Cathedral, you'll find [**Cuoppo d'Amalfi**](https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi), a fried fish shop that fills cardboard cones with all manner of deep-sea life

::right::

<img src="/amalfi-town-map.png" height="650" width="325" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10"},index:0,start:0,end:17},inline:{raw:`---
layout: two-cols
src: ./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:45,start:229,end:234},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:QT,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Positano**
<br>
<img src="/amalfi-coast.jpg" height="150" width="300" style="margin:auto">
<br>

> Next, we'll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea.  There, we'll spend another hour of free time. 
> The **Church of Santa Maria Assunta** was given a baroque makeover in the 18th century.


> Thirsty? Walk up to **Enoteca Cuomo** and sample local red wines with homemade salami and sundried tomatoes.

::right::

<img src="/positano-map.jpg" height="400" width="400" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md"},index:46,start:0,end:15,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/047-day-14-naples-positano.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Positano**
<br>
<img src="/amalfi-coast.jpg" height="150" width="300" style="margin:auto">
<br>

> Next, we'll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea.  There, we'll spend another hour of free time. 
> The **Church of Santa Maria Assunta** was given a baroque makeover in the 18th century.


> Thirsty? Walk up to **Enoteca Cuomo** and sample local red wines with homemade salami and sundried tomatoes.

::right::

<img src="/positano-map.jpg" height="400" width="400" style="margin:auto">`,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Positano**
<br>
<img src="/amalfi-coast.jpg" height="150" width="300" style="margin:auto">
<br>

> Next, we'll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea.  There, we'll spend another hour of free time. 
> The **Church of Santa Maria Assunta** was given a baroque makeover in the 18th century.


> Thirsty? Walk up to **Enoteca Cuomo** and sample local red wines with homemade salami and sundried tomatoes.

::right::

<img src="/positano-map.jpg" height="400" width="400" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10"},index:0,start:0,end:15},inline:{raw:`---
layout: two-cols
src: ./slides/06-sicily-and-naples/047-day-14-naples-positano.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:46,start:234,end:239},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/047-day-14-naples-positano.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:uD,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Sorrento**

> Next, we'll board a shuttle bus to rejoin our coach.  The coach brings us to **Sorrento**, our final stop.  We'll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.

<br>

> The **Piazza Tasso** is Sorrento's living room. Just behind the **Statue of Torquato Tasso** you'll find **Fattoria Terranova**, a family-run boutique offering free biscuits and tastes of liquers. 

 <br>

> A short walk brings you to the **Cathedral**, with its impressive inlaid-wood interior doors.  

<br>

> Continue on to the **Via San Cesareo**, where you can sample Limoncello and other lemon products, famous to the Amalfi region.

::right::

<img src="/sorrento-map.jpg" height="600" width="300" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md"},index:47,start:0,end:20,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Sorrento**

> Next, we'll board a shuttle bus to rejoin our coach.  The coach brings us to **Sorrento**, our final stop.  We'll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.

<br>

> The **Piazza Tasso** is Sorrento's living room. Just behind the **Statue of Torquato Tasso** you'll find **Fattoria Terranova**, a family-run boutique offering free biscuits and tastes of liquers. 

 <br>

> A short walk brings you to the **Cathedral**, with its impressive inlaid-wood interior doors.  

<br>

> Continue on to the **Via San Cesareo**, where you can sample Limoncello and other lemon products, famous to the Amalfi region.

::right::

<img src="/sorrento-map.jpg" height="600" width="300" style="margin:auto"> `,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Sorrento**

> Next, we'll board a shuttle bus to rejoin our coach.  The coach brings us to **Sorrento**, our final stop.  We'll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.

<br>

> The **Piazza Tasso** is Sorrento's living room. Just behind the **Statue of Torquato Tasso** you'll find **Fattoria Terranova**, a family-run boutique offering free biscuits and tastes of liquers. 

 <br>

> A short walk brings you to the **Cathedral**, with its impressive inlaid-wood interior doors.  

<br>

> Continue on to the **Via San Cesareo**, where you can sample Limoncello and other lemon products, famous to the Amalfi region.

::right::

<img src="/sorrento-map.jpg" height="600" width="300" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10"},index:0,start:0,end:20},inline:{raw:`---
layout: two-cols
src: ./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:47,start:239,end:244},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:wD,meta:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**

\u{1F6A2} **6:00 AM**: Arrive at port

Make sure to have breakfast before debarking the ship.  The Main Dining Room is usually quiet, compared to the other options, as passengers hurry to eat and finish packing.

Breakfast Served 6:30AM until:
* 8:30AM - Main Dining Room
* 9:15AM - Lido Restaurant
* 9:30AM - Cafe on the Way

Any liquor purchased from shore or the gift shop that was held for safekeeping will be available for collection in a designated lounge.

Bar service is open at the main pool area and a designated bar on the Promenade deck.

More details about debarkation can be found [here](https://help.carnival.com/app/answers/detail/a_id/1369/~/preparing-for-debarkation-day#:~:text=Guests%20who%20have%20pre%2Dpurchased,time%20in%20the%20home%20port.)`,frontmatter:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md"},index:48,start:0,end:17,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",raw:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**

\u{1F6A2} **6:00 AM**: Arrive at port

Make sure to have breakfast before debarking the ship.  The Main Dining Room is usually quiet, compared to the other options, as passengers hurry to eat and finish packing.

Breakfast Served 6:30AM until:
* 8:30AM - Main Dining Room
* 9:15AM - Lido Restaurant
* 9:30AM - Cafe on the Way

Any liquor purchased from shore or the gift shop that was held for safekeeping will be available for collection in a designated lounge.

Bar service is open at the main pool area and a designated bar on the Promenade deck.

More details about debarkation can be found [here](https://help.carnival.com/app/answers/detail/a_id/1369/~/preparing-for-debarkation-day#:~:text=Guests%20who%20have%20pre%2Dpurchased,time%20in%20the%20home%20port.)`,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**

\u{1F6A2} **6:00 AM**: Arrive at port

Make sure to have breakfast before debarking the ship.  The Main Dining Room is usually quiet, compared to the other options, as passengers hurry to eat and finish packing.

Breakfast Served 6:30AM until:
* 8:30AM - Main Dining Room
* 9:15AM - Lido Restaurant
* 9:30AM - Cafe on the Way

Any liquor purchased from shore or the gift shop that was held for safekeeping will be available for collection in a designated lounge.

Bar service is open at the main pool area and a designated bar on the Promenade deck.

More details about debarkation can be found [here](https://help.carnival.com/app/answers/detail/a_id/1369/~/preparing-for-debarkation-day#:~:text=Guests%20who%20have%20pre%2Dpurchased,time%20in%20the%20home%20port.)`,frontmatter:{title:"Day 15 - Fri 10/21 - Cruise Day 11"},index:0,start:0,end:17},inline:{raw:`---
src: ./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md
---
`,content:"",frontmatter:{},index:48,start:244,end:248},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",notesHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:CD,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**

### **Transit Center**
Once again, we'll ride the free and frequent shuttle buses that connect the Cruise Terminal with the Transit Center

You can again choose from one of two options to reach Civitiavecchia Train Station:

#### **Shuttle Bus \u20AC2**
City-run shuttle buses run every 10 minutes between the train station and the transit center

#### **Taxi \u20AC15-20**
You can hire a cab from Largo Della Pace to the train station at a premium.`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md"},index:49,start:0,end:13,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**

### **Transit Center**
Once again, we'll ride the free and frequent shuttle buses that connect the Cruise Terminal with the Transit Center

You can again choose from one of two options to reach Civitiavecchia Train Station:

#### **Shuttle Bus \u20AC2**
City-run shuttle buses run every 10 minutes between the train station and the transit center

#### **Taxi \u20AC15-20**
You can hire a cab from Largo Della Pace to the train station at a premium.`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**

### **Transit Center**
Once again, we'll ride the free and frequent shuttle buses that connect the Cruise Terminal with the Transit Center

You can again choose from one of two options to reach Civitiavecchia Train Station:

#### **Shuttle Bus \u20AC2**
City-run shuttle buses run every 10 minutes between the train station and the transit center

#### **Taxi \u20AC15-20**
You can hire a cab from Largo Della Pace to the train station at a premium.`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:13},inline:{raw:`---
src: ./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md
---
`,content:"",frontmatter:{},index:49,start:248,end:252},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",notesHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:ED,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md"},index:50,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/051-day-15-civitavecchia-to-rome.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/051-day-15-civitavecchia-to-rome.md
---
`,content:"",frontmatter:{},index:50,start:252,end:256},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/051-day-15-civitavecchia-to-rome.md",notesHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:zD,meta:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md"},index:51,start:0,end:4,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/052-day-15-last-day-in-rome.md",raw:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome"},index:0,start:0,end:4},inline:{raw:`---
src: ./slides/07-return-home/052-day-15-last-day-in-rome.md
---
`,content:"",frontmatter:{},index:51,start:256,end:260},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/052-day-15-last-day-in-rome.md",notesHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:ID,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md"},index:52,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/053-day-15-rome-to-airport-hilton.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/053-day-15-rome-to-airport-hilton.md
---
`,content:"",frontmatter:{},index:52,start:260,end:264},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/053-day-15-rome-to-airport-hilton.md",notesHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:ND,meta:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md",slide:{raw:null,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md"},index:53,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/054-day-16-transatlantic-flight-home.md",raw:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/054-day-16-transatlantic-flight-home.md
---

`,content:"",frontmatter:{},index:53,start:264,end:269},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/054-day-16-transatlantic-flight-home.md",notesHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",component:O_,meta:{layout:"end"}}],We=WD,HD=[{name:"play",path:"/",component:$_,children:[...We]},{name:"print",path:"/print",component:M_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>io(()=>import("./Presenter.c02932be.js"),["assets/Presenter.c02932be.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.637f4f40.js"]),beforeEnter:e=>{if(!vn.remote||vn.remote===e.query.password)return!0;if(vn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(vn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=_1({history:F0("/"),routes:HD});function UD(e,t,{mode:n="replace"}={}){return P({get(){const o=gt.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ye(()=>{gt[b(n)]({query:{...gt.currentRoute.value.query,[e]:o}})})}})}const ed=U(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),ed.value+=1})});const Jt=P(()=>gt.currentRoute.value),Yn=P(()=>Jt.value.query.print!==void 0),KD=P(()=>Jt.value.query.print==="clicks"),Vt=P(()=>Jt.value.query.embedded!==void 0),zt=P(()=>Jt.value.path.startsWith("/presenter")),xo=P(()=>Yn.value&&!KD.value),Qs=P(()=>Jt.value.query.password),GD=P(()=>!zt.value&&(!ke.remote||Qs.value===ke.remote)),Il=UD("clicks","0"),td=P(()=>We.length-1),JD=P(()=>Jt.value.path),He=P(()=>parseInt(JD.value.split(/\//g).slice(-1)[0])||1);P(()=>Jr(He.value));const dt=P(()=>We.find(e=>e.path===`${He.value}`));P(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});P(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const ps=P(()=>We.find(e=>e.path===`${Math.min(We.length,He.value+1)}`)),YD=P(()=>{var e,t;return ed.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ct=P({get(){if(xo.value)return 99999;let e=+(Il.value||0);return isNaN(e)&&(e=0),e},set(e){Il.value=e.toString()}}),Pr=P(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:YD.value.length)}),ZD=P(()=>He.value<We.length-1||Ct.value<Pr.value),QD=P(()=>He.value>1||Ct.value>0),XD=P(()=>We.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Ni(e,t),e),[])),ex=P(()=>Wi(XD.value,dt.value));P(()=>Hi(ex.value));function rn(){Pr.value<=Ct.value?Bo():Ct.value+=1}async function sn(){Ct.value<=0?await Vo():Ct.value-=1}function Jr(e){return zt.value?`/presenter/${e}`:`/${e}`}function Bo(){const e=Math.min(We.length,He.value+1);return oo(e)}async function Vo(e=!0){const t=Math.max(1,He.value-1);await oo(t),e&&Pr.value&&gt.replace({query:{...Jt.value.query,clicks:Pr.value}})}function oo(e,t){return gt.push({path:Jr(e),query:{...Jt.value.query,clicks:t}})}function tx(e){const t=U(0),{direction:n,distanceX:o,distanceY:r}=i0(e,{onSwipeStart(i){i.pointerType==="touch"&&(qo.value||(t.value=Bs()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||qo.value)return;const a=Math.abs(o.value),l=Math.abs(r.value);a/window.innerWidth>.3||a>100?n.value===Ht.LEFT?rn():sn():(l/window.innerHeight>.4||l>200)&&(n.value===Ht.DOWN?Vo():Bo())}})}async function Xs(){const{saveAs:e}=await io(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(wu(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/slidev-exported.pdf",`${ke.title}.pdf`)}async function nx(e){var t,n;if(e==null){const o=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ni(e,t,n=1){var r,i,a,l,c;const o=(i=(r=t.meta)==null?void 0:r.slide)==null?void 0:i.level;o&&o>n&&e.length>0?Ni(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Wi(e,t,n=!1,o){return e.map(r=>{const i={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return i.children.length>0&&(i.children=Wi(i.children,t,i.active||i.hasActiveParent,i)),o&&(i.active||i.activeParent)&&(o.activeParent=!0),i})}function Hi(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Hi(n.children,t+1)}))}function ox(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");Ap({title:e}),zp(`${e} - shared`),Bp(`${e} - drawings`);function t(){zt.value&&(Ha("page",+He.value),Ha("clicks",Ct.value))}gt.afterEach(t),fe(Ct,t),jp(n=>{(+n.page!=+He.value||Ct.value!==n.clicks)&&gt.replace({path:Jr(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const rx=Te({__name:"App",setup(e){return F(I),ox(),(t,n)=>{const o=Oo("RouterView"),r=Oo("StarportCarrier");return k(),K(xe,null,[V(o),V(r)],64)}}});function ms(e){return e!==null&&typeof e=="object"}function ei(e,t,n=".",o){if(!ms(t))return ei(e,{},n,o);const r=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const a=e[i];a!=null&&(o&&o(r,i,a,n)||(Array.isArray(a)&&Array.isArray(r[i])?r[i]=a.concat(r[i]):ms(a)&&ms(r[i])?r[i]=ei(a,r[i],(n?`${n}.`:"")+i.toString(),o):r[i]=a))}return r}function sx(e){return(...t)=>t.reduce((n,o)=>ei(n,o,"",e),{})}const ix=sx(),nd=1/60*1e3,ax=typeof performance<"u"?()=>performance.now():()=>Date.now(),od=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(ax()),nd);function lx(e){let t=[],n=[],o=0,r=!1,i=!1;const a=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const f=d&&r,p=f?t:n;return u&&a.add(c),p.indexOf(c)===-1&&(p.push(c),f&&r&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(r){i=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),a.has(d)&&(l.schedule(d),e())}r=!1,i&&(i=!1,l.process(c))}};return l}const cx=40;let ti=!0,No=!1,ni=!1;const Zn={delta:0,timestamp:0},Ko=["read","update","preRender","render","postRender"],Yr=Ko.reduce((e,t)=>(e[t]=lx(()=>No=!0),e),{}),oi=Ko.reduce((e,t)=>{const n=Yr[t];return e[t]=(o,r=!1,i=!1)=>(No||hx(),n.schedule(o,r,i)),e},{}),ux=Ko.reduce((e,t)=>(e[t]=Yr[t].cancel,e),{});Ko.reduce((e,t)=>(e[t]=()=>Yr[t].process(Zn),e),{});const dx=e=>Yr[e].process(Zn),rd=e=>{No=!1,Zn.delta=ti?nd:Math.max(Math.min(e-Zn.timestamp,cx),1),Zn.timestamp=e,ni=!0,Ko.forEach(dx),ni=!1,No&&(ti=!1,od(rd))},hx=()=>{No=!0,ti=!0,ni||od(rd)},sd=()=>Zn;function id(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}var fx=function(){},Bl=function(){};const ri=(e,t,n)=>Math.min(Math.max(n,e),t),gs=.001,px=.01,Vl=10,mx=.05,gx=1;function yx({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let r,i;fx(e<=Vl*1e3);let a=1-t;a=ri(mx,gx,a),e=ri(px,Vl,e/1e3),a<1?(r=u=>{const d=u*a,f=d*e,p=d-n,m=si(u,a),g=Math.exp(-f);return gs-p/m*g},i=u=>{const f=u*a*e,p=f*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,g=Math.exp(-f),w=si(Math.pow(u,2),a);return(-r(u)+gs>0?-1:1)*((p-m)*g)/w}):(r=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-gs+d*f},i=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const l=5/e,c=vx(r,i,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const _x=12;function vx(e,t,n){let o=n;for(let r=1;r<_x;r++)o=o-e(o)/t(o);return o}function si(e,t){return e*Math.sqrt(1-t*t)}const wx=["duration","bounce"],bx=["stiffness","damping","mass"];function Nl(e,t){return t.some(n=>e[n]!==void 0)}function kx(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Nl(e,bx)&&Nl(e,wx)){const n=yx(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Ui(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:r}=e,i=id(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:f,isResolvedFromDuration:p}=kx(i),m=Wl,g=Wl;function w(){const v=d?-(d/1e3):0,x=n-t,T=c/(2*Math.sqrt(l*u)),D=Math.sqrt(l/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),T<1){const A=si(D,T);m=q=>{const O=Math.exp(-T*D*q);return n-O*((v+T*D*x)/A*Math.sin(A*q)+x*Math.cos(A*q))},g=q=>{const O=Math.exp(-T*D*q);return T*D*O*(Math.sin(A*q)*(v+T*D*x)/A+x*Math.cos(A*q))-O*(Math.cos(A*q)*(v+T*D*x)-A*x*Math.sin(A*q))}}else if(T===1)m=A=>n-Math.exp(-D*A)*(x+(v+D*x)*A);else{const A=D*Math.sqrt(T*T-1);m=q=>{const O=Math.exp(-T*D*q),W=Math.min(A*q,300);return n-O*((v+T*D*x)*Math.sinh(W)+A*x*Math.cosh(W))/A}}}return w(),{next:v=>{const x=m(v);if(p)a.done=v>=f;else{const T=g(v)*1e3,D=Math.abs(T)<=o,A=Math.abs(n-x)<=r;a.done=D&&A}return a.value=a.done?n:x,a},flipTarget:()=>{d=-d,[t,n]=[n,t],w()}}}Ui.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Wl=e=>0,ad=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Ki=(e,t,n)=>-n*e+n*t+e,ld=(e,t)=>n=>Math.max(Math.min(n,t),e),$o=e=>e%1?Number(e.toFixed(5)):e,Wo=/(-)?([\d]*\.?[\d])+/g,ii=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Sx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Go(e){return typeof e=="string"}const Jo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Po=Object.assign(Object.assign({},Jo),{transform:ld(0,1)}),sr=Object.assign(Object.assign({},Jo),{default:1}),Gi=e=>({test:t=>Go(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fn=Gi("deg"),Ao=Gi("%"),ce=Gi("px"),Hl=Object.assign(Object.assign({},Ao),{parse:e=>Ao.parse(e)/100,transform:e=>Ao.transform(e*100)}),Ji=(e,t)=>n=>Boolean(Go(n)&&Sx.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),cd=(e,t,n)=>o=>{if(!Go(o))return o;const[r,i,a,l]=o.match(Wo);return{[e]:parseFloat(r),[t]:parseFloat(i),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},bn={test:Ji("hsl","hue"),parse:cd("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Ao.transform($o(t))+", "+Ao.transform($o(n))+", "+$o(Po.transform(o))+")"},Tx=ld(0,255),ys=Object.assign(Object.assign({},Jo),{transform:e=>Math.round(Tx(e))}),en={test:Ji("rgb","red"),parse:cd("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+ys.transform(e)+", "+ys.transform(t)+", "+ys.transform(n)+", "+$o(Po.transform(o))+")"};function Dx(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const ai={test:Ji("#"),parse:Dx,transform:en.transform},st={test:e=>en.test(e)||ai.test(e)||bn.test(e),parse:e=>en.test(e)?en.parse(e):bn.test(e)?bn.parse(e):ai.parse(e),transform:e=>Go(e)?e:e.hasOwnProperty("red")?en.transform(e):bn.transform(e)},ud="${c}",dd="${n}";function xx(e){var t,n,o,r;return isNaN(e)&&Go(e)&&((n=(t=e.match(Wo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(ii))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function hd(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(ii);o&&(n=o.length,e=e.replace(ii,ud),t.push(...o.map(st.parse)));const r=e.match(Wo);return r&&(e=e.replace(Wo,dd),t.push(...r.map(Jo.parse))),{values:t,numColors:n,tokenised:e}}function fd(e){return hd(e).values}function pd(e){const{values:t,numColors:n,tokenised:o}=hd(e),r=t.length;return i=>{let a=o;for(let l=0;l<r;l++)a=a.replace(l<n?ud:dd,l<n?st.transform(i[l]):$o(i[l]));return a}}const $x=e=>typeof e=="number"?0:e;function Px(e){const t=fd(e);return pd(e)(t.map($x))}const Yo={test:xx,parse:fd,createTransformer:pd,getAnimatableNone:Px},Ax=new Set(["brightness","contrast","saturate","opacity"]);function Cx(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Wo)||[];if(!o)return e;const r=n.replace(o,"");let i=Ax.has(t)?1:0;return o!==n&&(i*=100),t+"("+i+r+")"}const Rx=/([a-z-]*)\(.*?\)/g,li=Object.assign(Object.assign({},Yo),{getAnimatableNone:e=>{const t=e.match(Rx);return t?t.map(Cx).join(" "):e}});function _s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ul({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,i=0,a=0;if(!t)r=i=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;r=_s(c,l,e+1/3),i=_s(c,l,e),a=_s(c,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:o}}const Mx=(e,t,n)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-o)+o))},Ex=[ai,en,bn],Kl=e=>Ex.find(t=>t.test(e)),md=(e,t)=>{let n=Kl(e),o=Kl(t),r=n.parse(e),i=o.parse(t);n===bn&&(r=Ul(r),n=en),o===bn&&(i=Ul(i),o=en);const a=Object.assign({},r);return l=>{for(const c in a)c!=="alpha"&&(a[c]=Mx(r[c],i[c],l));return a.alpha=Ki(r.alpha,i.alpha,l),n.transform(a)}},Fx=e=>typeof e=="number",Ox=(e,t)=>n=>t(e(n)),gd=(...e)=>e.reduce(Ox);function yd(e,t){return Fx(e)?n=>Ki(e,t,n):st.test(e)?md(e,t):vd(e,t)}const _d=(e,t)=>{const n=[...e],o=n.length,r=e.map((i,a)=>yd(i,t[a]));return i=>{for(let a=0;a<o;a++)n[a]=r[a](i);return n}},Lx=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=yd(e[r],t[r]));return r=>{for(const i in o)n[i]=o[i](r);return n}};function Gl(e){const t=Yo.parse(e),n=t.length;let o=0,r=0,i=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?i++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:i}}const vd=(e,t)=>{const n=Yo.createTransformer(t),o=Gl(e),r=Gl(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?gd(_d(o.parsed,r.parsed),n):a=>`${a>0?t:e}`},zx=(e,t)=>n=>Ki(e,t,n);function jx(e){if(typeof e=="number")return zx;if(typeof e=="string")return st.test(e)?md:vd;if(Array.isArray(e))return _d;if(typeof e=="object")return Lx}function qx(e,t,n){const o=[],r=n||jx(e[0]),i=e.length-1;for(let a=0;a<i;a++){let l=r(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=gd(c,l)}o.push(l)}return o}function Ix([e,t],[n]){return o=>n(ad(e,t,o))}function Bx(e,t){const n=e.length,o=n-1;return r=>{let i=0,a=!1;if(r<=e[0]?a=!0:r>=e[o]&&(i=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>r||c===o);c++);i=c-1}const l=ad(e[i],e[i+1],r);return t[i](l)}}function wd(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const i=e.length;Bl(i===t.length),Bl(!o||!Array.isArray(o)||o.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=qx(t,o,r),l=i===2?Ix(e,a):Bx(e,a);return n?c=>l(ri(e[0],e[i-1],c)):l}const Zr=e=>t=>1-e(1-t),Yi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vx=e=>t=>Math.pow(t,e),bd=e=>t=>t*t*((e+1)*t-e),Nx=e=>{const t=bd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},kd=1.525,Wx=4/11,Hx=8/11,Ux=9/10,Sd=e=>e,Zi=Vx(2),Kx=Zr(Zi),Td=Yi(Zi),Dd=e=>1-Math.sin(Math.acos(e)),xd=Zr(Dd),Gx=Yi(xd),Qi=bd(kd),Jx=Zr(Qi),Yx=Yi(Qi),Zx=Nx(kd),Qx=4356/361,Xx=35442/1805,e$=16061/1805,Ar=e=>{if(e===1||e===0)return e;const t=e*e;return e<Wx?7.5625*t:e<Hx?9.075*t-9.9*e+3.4:e<Ux?Qx*t-Xx*e+e$:10.8*e*e-20.52*e+10.72},t$=Zr(Ar),n$=e=>e<.5?.5*(1-Ar(1-e*2)):.5*Ar(e*2-1)+.5;function o$(e,t){return e.map(()=>t||Td).splice(0,e.length-1)}function r$(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function s$(e,t){return e.map(n=>n*t)}function pr({from:e=0,to:t=1,ease:n,offset:o,duration:r=300}){const i={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=s$(o&&o.length===a.length?o:r$(a),r);function c(){return wd(l,a,{ease:Array.isArray(n)?n:o$(a,n)})}let u=c();return{next:d=>(i.value=u(d),i.done=d>=r,i),flipTarget:()=>{a.reverse(),u=c()}}}function i$({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:i}){const a={done:!1,value:t};let l=n*e;const c=t+l,u=i===void 0?c:i(c);return u!==c&&(l=u-t),{next:d=>{const f=-l*Math.exp(-d/o);return a.done=!(f>r||f<-r),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const Jl={keyframes:pr,spring:Ui,decay:i$};function a$(e){if(Array.isArray(e.to))return pr;if(Jl[e.type])return Jl[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?pr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Ui:pr}function $d(e,t,n=0){return e-t-n}function l$(e,t,n=0,o=!0){return o?$d(t+-e,t,n):t-(e-t)+n}function c$(e,t,n,o){return o?e>=t+n:e<=-n}const u$=e=>{const t=({delta:n})=>e(n);return{start:()=>oi.update(t,!0),stop:()=>ux.update(t)}};function Pd(e){var t,n,{from:o,autoplay:r=!0,driver:i=u$,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:p,onRepeat:m,onUpdate:g}=e,w=id(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=w,x,T=0,D=w.duration,A,q=!1,O=!0,W;const ne=a$(w);!((n=(t=ne).needsInterpolation)===null||n===void 0)&&n.call(t,o,v)&&(W=wd([0,100],[o,v],{clamp:!1}),o=0,v=100);const ae=ne(Object.assign(Object.assign({},w),{from:o,to:v}));function ge(){T++,c==="reverse"?(O=T%2===0,a=l$(a,D,u,O)):(a=$d(a,D,u),c==="mirror"&&ae.flipTarget()),q=!1,m&&m()}function _e(){x.stop(),p&&p()}function Be(qe){if(O||(qe=-qe),a+=qe,!q){const Me=ae.next(Math.max(0,a));A=Me.value,W&&(A=W(A)),q=O?Me.done:a<=0}g==null||g(A),q&&(T===0&&(D!=null||(D=a)),T<l?c$(a,D,u,O)&&ge():_e())}function Ve(){d==null||d(),x=i(Be),x.start()}return r&&Ve(),{stop:()=>{f==null||f(),x.stop()}}}function Ad(e,t){return t?e*(1e3/t):0}function d$({from:e=0,velocity:t=0,min:n,max:o,power:r=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:p,onStop:m}){let g;function w(D){return n!==void 0&&D<n||o!==void 0&&D>o}function v(D){return n===void 0?o:o===void 0||Math.abs(n-D)<Math.abs(o-D)?n:o}function x(D){g==null||g.stop(),g=Pd(Object.assign(Object.assign({},D),{driver:d,onUpdate:A=>{var q;f==null||f(A),(q=D.onUpdate)===null||q===void 0||q.call(D,A)},onComplete:p,onStop:m}))}function T(D){x(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},D))}if(w(e))T({from:e,velocity:t,to:v(e)});else{let D=r*t+e;typeof u<"u"&&(D=u(D));const A=v(D),q=A===n?-1:1;let O,W;const ne=ae=>{O=W,W=ae,t=Ad(ae-O,sd().delta),(q===1&&ae>A||q===-1&&ae<A)&&T({from:ae,to:A,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:i,power:r,restDelta:c,modifyTarget:u,onUpdate:w(D)?ne:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Cd=(e,t)=>1-3*t+3*e,Rd=(e,t)=>3*t-6*e,Md=e=>3*e,Cr=(e,t,n)=>((Cd(t,n)*e+Rd(t,n))*e+Md(t))*e,Ed=(e,t,n)=>3*Cd(t,n)*e*e+2*Rd(t,n)*e+Md(t),h$=1e-7,f$=10;function p$(e,t,n,o,r){let i,a,l=0;do a=t+(n-t)/2,i=Cr(a,o,r)-e,i>0?n=a:t=a;while(Math.abs(i)>h$&&++l<f$);return a}const m$=8,g$=.001;function y$(e,t,n,o){for(let r=0;r<m$;++r){const i=Ed(t,n,o);if(i===0)return t;t-=(Cr(t,n,o)-e)/i}return t}const mr=11,ir=1/(mr-1);function _$(e,t,n,o){if(e===t&&n===o)return Sd;const r=new Float32Array(mr);for(let a=0;a<mr;++a)r[a]=Cr(a*ir,e,n);function i(a){let l=0,c=1;const u=mr-1;for(;c!==u&&r[c]<=a;++c)l+=ir;--c;const d=(a-r[c])/(r[c+1]-r[c]),f=l+d*ir,p=Ed(f,e,n);return p>=g$?y$(a,f,e,n):p===0?f:p$(a,l,l+ir,e,n)}return a=>a===0||a===1?a:Cr(i(a),t,o)}const vs={};class v${constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,o)}clear(){this.subscriptions.clear()}}const Yl=e=>!isNaN(parseFloat(e));class w${constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new v$,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:r}=sd();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),oi.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>oi.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Yl(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Yl(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ad(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function b$(e){return new w$(e)}const{isArray:k$}=Array;function S$(){const e=U({}),t=o=>{const r=i=>{!e.value[i]||(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};o?k$(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},n=(o,r,i)=>{if(e.value[o])return e.value[o];const a=b$(r);return a.onChange(l=>i[o]=l),e.value[o]=a,a};return um(t),{motionValues:e,get:n,stop:t}}const T$=e=>Array.isArray(e),pn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),ws=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),D$=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),bs=()=>({type:"keyframes",ease:"linear",duration:300}),x$=e=>({type:"keyframes",duration:800,values:e}),Zl={default:D$,x:pn,y:pn,z:pn,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scaleX:ws,scaleY:ws,scale:ws,backgroundColor:bs,color:bs,opacity:bs},Fd=(e,t)=>{let n;return T$(t)?n=x$:n=Zl[e]||Zl.default,{to:t,...n(t)}},Ql={...Jo,transform:Math.round},Od={color:st,backgroundColor:st,outlineColor:st,fill:st,stroke:st,borderColor:st,borderTopColor:st,borderRightColor:st,borderBottomColor:st,borderLeftColor:st,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:sr,scaleX:sr,scaleY:sr,scaleZ:sr,skew:fn,skewX:fn,skewY:fn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:Po,originX:Hl,originY:Hl,originZ:ce,zIndex:Ql,filter:li,WebkitFilter:li,fillOpacity:Po,strokeOpacity:Po,numOctaves:Ql},Xi=e=>Od[e],Ld=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function $$(e,t){let n=Xi(e);return n!==li&&(n=Yo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const P$={linear:Sd,easeIn:Zi,easeInOut:Td,easeOut:Kx,circIn:Dd,circInOut:Gx,circOut:xd,backIn:Qi,backInOut:Yx,backOut:Jx,anticipate:Zx,bounceIn:t$,bounceInOut:n$,bounceOut:Ar},Xl=e=>{if(Array.isArray(e)){const[t,n,o,r]=e;return _$(t,n,o,r)}else if(typeof e=="string")return P$[e];return e},A$=e=>Array.isArray(e)&&typeof e[0]!="number",ec=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yo.test(t)&&!t.startsWith("url("));function C$(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function R$({ease:e,times:t,delay:n,...o}){const r={...o};return t&&(r.offset=t),e&&(r.ease=A$(e)?e.map(Xl):Xl(e)),n&&(r.elapsed=-n),r}function M$(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),C$(t),E$(e)||(e={...e,...Fd(n,t.to)}),{...t,...R$(e)}}function E$({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:r,...i}){return!!Object.keys(i).length}function F$(e,t){return e[t]||e.default||e}function O$(e,t,n,o,r){const i=F$(o,e);let a=i.from===null||i.from===void 0?t.get():i.from;const l=ec(e,n);a==="none"&&l&&typeof n=="string"&&(a=$$(e,n));const c=ec(e,a);function u(f){const p={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?d$({...p,...i}):Pd({...M$(i,p,e),onUpdate:m=>{p.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),f&&f()}})}function d(f){return t.set(n),o.onComplete&&o.onComplete(),r&&r(),f&&f(),{stop:()=>{}}}return!c||!l||i.type===!1?d:u}function L$(){const{motionValues:e,stop:t,get:n}=S$();return{motionValues:e,stop:t,push:(r,i,a,l={},c)=>{const u=a[r],d=n(r,u,a);if(l&&l.immediate){d.set(i);return}const f=O$(r,d,i,l,c);d.start(f)}}}function z$(e,t={},{motionValues:n,push:o,stop:r}=L$()){const i=b(t),a=U(!1);fe(n,f=>{a.value=Object.values(f).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const l=f=>{if(!i||!i[f])throw new Error(`The variant ${f} does not exist.`);return i[f]},c=f=>(typeof f=="string"&&(f=l(f)),Promise.all(Object.entries(f).map(([p,m])=>{if(p!=="transition")return new Promise(g=>{o(p,m,e,f.transition||Fd(p,f[p]),g)})}).filter(Boolean)));return{isAnimating:a,apply:c,set:f=>{const p=Is(f)?f:l(f);Object.entries(p).forEach(([m,g])=>{m!=="transition"&&o(m,g,e,{immediate:!0})})},leave:async f=>{let p;if(i&&(i.leave&&(p=i.leave),!i.leave&&i.initial&&(p=i.initial)),!p){f();return}await c(p),f()},stop:r}}const ea=typeof window<"u",j$=()=>ea&&window.onpointerdown===null,q$=()=>ea&&window.ontouchstart===null,I$=()=>ea&&window.onmousedown===null;function B$({target:e,state:t,variants:n,apply:o}){const r=b(n),i=U(!1),a=U(!1),l=U(!1),c=P(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),u=P(()=>{const d={};Object.assign(d,t.value),i.value&&r.hovered&&Object.assign(d,r.hovered),a.value&&r.tapped&&Object.assign(d,r.tapped),l.value&&r.focused&&Object.assign(d,r.focused);for(const f in d)c.value.includes(f)||delete d[f];return d});r.hovered&&(de(e,"mouseenter",()=>i.value=!0),de(e,"mouseleave",()=>{i.value=!1,a.value=!1}),de(e,"mouseout",()=>{i.value=!1,a.value=!1})),r.tapped&&(I$()&&(de(e,"mousedown",()=>a.value=!0),de(e,"mouseup",()=>a.value=!1)),j$()&&(de(e,"pointerdown",()=>a.value=!0),de(e,"pointerup",()=>a.value=!1)),q$()&&(de(e,"touchstart",()=>a.value=!0),de(e,"touchend",()=>a.value=!1))),r.focused&&(de(e,"focus",()=>l.value=!0),de(e,"blur",()=>l.value=!1)),fe(u,o)}function V$({set:e,target:t,apply:n,variants:o,variant:r}){const i=b(o);fe(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function N$({state:e,apply:t}){fe(e,n=>{n&&t(n)},{immediate:!0})}function W$({target:e,variants:t,variant:n}){const o=b(t);o&&(o.visible||o.visibleOnce)&&o0(e,([{isIntersecting:r}])=>{o.visible?r?n.value="visible":n.value="initial":o.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function H$(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&V$(e),t.syncVariants&&N$(e),t.visibilityHooks&&W$(e),t.eventListeners&&B$(e)}function zd(e={}){const t=Fe({...e}),n=U({});return fe(t,()=>{const o={};for(const[r,i]of Object.entries(t)){const a=Xi(r),l=Ld(i,a);o[r]=l}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function ta(e,t){fe(()=>$t(e),n=>{!n||t(n)},{immediate:!0})}const U$={x:"translateX",y:"translateY",z:"translateZ"};function jd(e={},t=!0){const n=Fe({...e}),o=U("");return fe(n,r=>{let i="",a=!1;t&&(r.x||r.y||r.z)&&(i+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ce.transform).join(",")}) `,a=!0);for(const[l,c]of Object.entries(r)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Xi(l),d=Ld(c,u);i+=`${U$[l]||l}(${d}) `}t&&!a&&(i+="translateZ(0px) "),o.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const K$=["","X","Y","Z"],G$=["perspective","translate","scale","rotate","skew"],qd=["transformPerspective","x","y","z"];G$.forEach(e=>{K$.forEach(t=>{const n=e+t;qd.push(n)})});const J$=new Set(qd);function na(e){return J$.has(e)}const Y$=new Set(["originX","originY","originZ"]);function Id(e){return Y$.has(e)}function Z$(e){const t={},n={};return Object.entries(e).forEach(([o,r])=>{na(o)||Id(o)?t[o]=r:n[o]=r}),{transform:t,style:n}}function Bd(e){const{transform:t,style:n}=Z$(e),{transform:o}=jd(t),{style:r}=zd(n);return o.value&&(r.value.transform=o.value),r.value}function Q$(e,t){let n,o;const{state:r,style:i}=zd();return ta(e,a=>{o=a;for(const l of Object.keys(Od))a.style[l]===null||a.style[l]===""||na(l)||Id(l)||(r[l]=a.style[l]);n&&Object.entries(n).forEach(([l,c])=>a.style[l]=c),t&&t(r)}),fe(i,a=>{if(!o){n=a;return}for(const l in a)o.style[l]=a[l]},{immediate:!0}),{style:r}}function X$(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[i,a]=r.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[i]:u}},{})}function eP(e,t){Object.entries(X$(t)).forEach(([n,o])=>{const r=["x","y","z"];if(n==="translate3d"){if(o===0){r.forEach(i=>e[i]=0);return}o.forEach((i,a)=>e[r[a]]=i);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function tP(e,t){let n,o;const{state:r,transform:i}=jd();return ta(e,a=>{o=a,a.style.transform&&eP(r,a.style.transform),n&&(a.style.transform=n),t&&t(r)}),fe(i,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:r}}function nP(e,t){const n=Fe({}),o=a=>Object.entries(a).forEach(([l,c])=>n[l]=c),{style:r}=Q$(e,o),{transform:i}=tP(e,o);return fe(n,a=>{Object.entries(a).forEach(([l,c])=>{const u=na(l)?i:r;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),ta(e,()=>t&&o(t)),{motionProperties:n,style:r,transform:i}}function oP(e={}){const t=b(e),n=U();return{state:P(()=>{if(!!n.value)return t[n.value]}),variant:n}}function Vd(e,t={},n){const{motionProperties:o}=nP(e),{variant:r,state:i}=oP(t),a=z$(o,t),l={target:e,variant:r,variants:t,state:i,motionProperties:o,...a};return H$(l,n),l}const rP=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],sP=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Is(n.variants)&&(t.value={...t.value,...n.variants}),rP.forEach(o=>{if(o==="delay"){if(n&&n[o]&&Kp(n[o])){const r=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&Is(n[o])&&(t.value[o]=n[o])}))},ks=e=>({created:(o,r,i)=>{const a=r.value&&typeof r.value=="string"?r.value:i.key;a&&vs[a]&&vs[a].stop();const l=U(e||{});typeof r.value=="object"&&(l.value=r.value),sP(i,l);const c=Vd(o,l);o.motionInstance=c,a&&(vs[a]=c)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,r){let{initial:i}=o.value||r&&(r==null?void 0:r.props)||{};i=b(i);const a=ix((e==null?void 0:e.initial)||{},i||{});return!a||Object.keys(a).length===0?void 0:{style:Bd(a)}}}),iP={initial:{opacity:0},enter:{opacity:1}},aP={initial:{opacity:0},visible:{opacity:1}},lP={initial:{opacity:0},visibleOnce:{opacity:1}},cP={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},uP={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},dP={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},hP={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},fP={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},pP={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},mP={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},gP={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},yP={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},_P={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},vP={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},wP={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},bP={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},kP={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},SP={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},TP={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},DP={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},xP={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},$P={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},PP={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},AP={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},CP={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},RP={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},MP={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},EP={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},FP={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},OP={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ci={__proto__:null,fade:iP,fadeVisible:aP,fadeVisibleOnce:lP,pop:cP,popVisible:uP,popVisibleOnce:dP,rollBottom:bP,rollLeft:hP,rollRight:mP,rollTop:_P,rollVisibleBottom:kP,rollVisibleLeft:fP,rollVisibleRight:gP,rollVisibleTop:vP,rollVisibleOnceBottom:SP,rollVisibleOnceLeft:pP,rollVisibleOnceRight:yP,rollVisibleOnceTop:wP,slideBottom:EP,slideLeft:TP,slideRight:$P,slideTop:CP,slideVisibleBottom:FP,slideVisibleLeft:DP,slideVisibleRight:PP,slideVisibleTop:RP,slideVisibleOnceBottom:OP,slideVisibleOnceLeft:xP,slideVisibleOnceRight:AP,slideVisibleOnceTop:MP},LP=Te({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=Vf(),n=Fe({});if(!e.is&&!t.default)return()=>pt("div",{});const o=P(()=>{let c;return e.preset&&(c=ci[e.preset]),c}),r=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=P(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=P(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Xd(c)&&(c=Oo(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,p,m;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(p=u.variants)!=null&&p.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Pi(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:i,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var l;const r=Bd(t.initial||{}),i=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:d})=>{const f=Vd(d,t);n[u]=f},c);if(o){const c=pt(o,void 0,e);return i(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>i(c,u))}});function zP(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const jP={install(e,t){if(e.directive("motion",ks()),e.component("Motion",LP),!t||t&&!t.excludePresets)for(const n in ci){const o=ci[n];e.directive(`motion-${zP(n)}`,ks(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,ks(o))}}};var tc;const Co=typeof window<"u",qP=Object.prototype.toString,IP=e=>qP.call(e)==="[object Object]";Co&&((tc=window==null?void 0:window.navigator)==null?void 0:tc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function BP(e){return kc()?(Sc(e),!0):!1}function VP(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const NP=Co?window:void 0,ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},di="__vueuse_ssr_handlers__";ui[di]=ui[di]||{};ui[di];function WP(e,t={}){const{immediate:n=!0,window:o=NP}=t,r=U(!1);let i=null;function a(){!r.value||!o||(e(),i=o.requestAnimationFrame(a))}function l(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&l(),BP(c),{isActive:r,pause:c,resume:l}}var nc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(nc||(nc={}));const oa="vue-starport-injection",Nd="vue-starport-options",HP={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Wd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var UP=Object.defineProperty,Rr=Object.getOwnPropertySymbols,Hd=Object.prototype.hasOwnProperty,Ud=Object.prototype.propertyIsEnumerable,oc=(e,t,n)=>t in e?UP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,KP=(e,t)=>{for(var n in t||(t={}))Hd.call(t,n)&&oc(e,n,t[n]);if(Rr)for(var n of Rr(t))Ud.call(t,n)&&oc(e,n,t[n]);return e},rc=(e,t)=>{var n={};for(var o in e)Hd.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Rr)for(var o of Rr(e))t.indexOf(o)<0&&Ud.call(e,o)&&(n[o]=e[o]);return n};const GP=Te({name:"StarportProxy",props:KP({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Wd),setup(e,t){const n=F(oa),o=P(()=>n.getInstance(e.port,e.component)),r=U(),i=o.value.generateId(),a=U(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Ho(async()=>{o.value.el||(o.value.el=r.value,await Ye(),a.value=!0,o.value.rect.update())}),Wr(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Ye(),await Ye(),!o.value.el&&n.dispose(o.value.port))}),fe(()=>e,async()=>{o.value.props&&await Ye();const l=e,{props:c}=l,u=rc(l,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,d=rc(l,["initialProps","mountedProps"]),f=br(d,(a.value?u:c)||{});return pt("div",br(f,{id:i,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?pt(t.slots.default):void 0)}}});var JP=Object.defineProperty,YP=Object.defineProperties,ZP=Object.getOwnPropertyDescriptors,sc=Object.getOwnPropertySymbols,QP=Object.prototype.hasOwnProperty,XP=Object.prototype.propertyIsEnumerable,ic=(e,t,n)=>t in e?JP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eA=(e,t)=>{for(var n in t||(t={}))QP.call(t,n)&&ic(e,n,t[n]);if(sc)for(var n of sc(t))XP.call(t,n)&&ic(e,n,t[n]);return e},tA=(e,t)=>YP(e,ZP(t));const nA=Te({name:"Starport",inheritAttrs:!0,props:Wd,setup(e,t){const n=U(!1);return Ho(()=>{n.value=!0}),()=>{var a,l;const o=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let i=r.type;return(!IP(i)||Xn(i))&&(i={render(){return o}}),pt(GP,tA(eA({},e),{key:e.port,component:jr(i),props:r.props}))}}});function oA(e){const t=Fe({height:0,width:0,left:0,top:0,update:o,listen:i,pause:a,margin:"0px",padding:"0px"}),n=Co?document.documentElement||document.body:void 0;function o(){if(!Co)return;const l=VP(e);if(!l)return;const{height:c,width:u,left:d,top:f}=l.getBoundingClientRect(),p=window.getComputedStyle(l),m=p.margin,g=p.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+f,margin:m,padding:g})}const r=WP(o,{immediate:!1});function i(){!Co||(o(),r.resume())}function a(){r.pause()}return t}let rA=(e,t=21)=>(n=t)=>{let o="",r=n;for(;r--;)o+=e[Math.random()*e.length|0];return o};const ac=rA("abcdefghijklmnopqrstuvwxyz",5);function lc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function sA(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var iA=Object.defineProperty,cc=Object.getOwnPropertySymbols,aA=Object.prototype.hasOwnProperty,lA=Object.prototype.propertyIsEnumerable,uc=(e,t,n)=>t in e?iA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ss=(e,t)=>{for(var n in t||(t={}))aA.call(t,n)&&uc(e,n,t[n]);if(cc)for(var n of cc(t))lA.call(t,n)&&uc(e,n,t[n]);return e};function cA(e,t,n={}){const o=sA(t),r=lc(o)||ac(),i=U(),a=U(null),l=U(!1),c=U(!1),u=ah(!0),d=U({}),f=P(()=>Ss(Ss(Ss({},HP),n),d.value)),p=U(0);let m;u.run(()=>{m=oA(i),fe(i,async x=>{x&&(c.value=!0),await Ye(),i.value||(c.value=!1)})});const g=lc(e);function w(){return`starport-${r}-${g}-${ac()}`}const v=w();return Fe({el:i,id:v,port:e,props:a,rect:m,scope:u,isLanded:l,isVisible:c,options:f,liftOffTime:p,component:t,componentName:o,componentId:r,generateId:w,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return i},liftOff(){!l.value||(l.value=!1,p.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function uA(e){const t=Fe(new Map);function n(r,i){let a=t.get(r);return a||(a=cA(r,i,e),t.set(r,a)),a.component=i,a}function o(r){var i;(i=t.get(r))==null||i.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:n}}var dA=Object.defineProperty,hA=Object.defineProperties,fA=Object.getOwnPropertyDescriptors,dc=Object.getOwnPropertySymbols,pA=Object.prototype.hasOwnProperty,mA=Object.prototype.propertyIsEnumerable,hc=(e,t,n)=>t in e?dA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,gA=(e,t)=>{for(var n in t||(t={}))pA.call(t,n)&&hc(e,n,t[n]);if(dc)for(var n of dc(t))mA.call(t,n)&&hc(e,n,t[n]);return e},yA=(e,t)=>hA(e,fA(t));const _A=Te({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=F(oa);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=P(()=>t.getInstance(e.port,e.component)),o=P(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),r=P(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?yA(gA({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),i={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return pt("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},pt(Mf,{to:a?`#${o.value}`:"body",disabled:!a},pt(n.value.component,br(i,n.value.props))))}}}),vA=Te({name:"StarportCarrier",setup(e,{slots:t}){const n=uA(F(Nd,{}));return Cn().appContext.app.provide(oa,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([i,{component:a}])=>pt(_A,{key:i,port:i,component:a}))]}}});function wA(e={}){return{install(t){t.provide(Nd,e),t.component("Starport",nA),t.component("StarportCarrier",vA)}}}function bA(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(jP),e.app.use(wA({keepAlive:!0}))}function lt(e,t,n){var o,r;return(r=((o=e.instance)==null?void 0:o.$).provides[t])!=null?r:n}function kA(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,f,p,m;if(xo.value||((d=lt(n,ur))==null?void 0:d.value))return;const o=lt(n,jn),r=lt(n,cr),i=lt(n,qs),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=l?Mp:ss;if(o&&!((p=o==null?void 0:o.value)!=null&&p.includes(t))&&o.value.push(t),n.value===null&&(n.value=o==null?void 0:o.value.length),!(i!=null&&i.value.has(n.value)))i==null||i.value.set(n.value,[t]);else if(!((m=i==null?void 0:i.value.get(n.value))!=null&&m.includes(t))){const g=(i==null?void 0:i.value.get(n.value))||[];i==null||i.value.set(n.value,[t].concat(g))}t==null||t.classList.toggle(Fn,!0),r&&fe(r,()=>{var x;const g=(x=r==null?void 0:r.value)!=null?x:0,w=n.value!=null?g>=n.value:g>c;t.classList.contains(is)||t.classList.toggle(u,!w),a!==!1&&a!==void 0&&t.classList.toggle(u,w),t.classList.toggle(fo,!1);const v=i==null?void 0:i.value.get(g);v==null||v.forEach((T,D)=>{T.classList.toggle(or,!1),D===v.length-1?T.classList.toggle(fo,!0):T.classList.toggle(or,!0)}),t.classList.contains(fo)||t.classList.toggle(or,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const o=lt(n,jn);o!=null&&o.value&&Wa(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c;if(xo.value||((l=lt(n,ur))==null?void 0:l.value))return;const o=lt(n,jn),r=lt(n,cr),i=lt(n,qs),a=o==null?void 0:o.value.length;n.value===void 0&&(n.value=o==null?void 0:o.value.length),i!=null&&i.value.has(n.value)?(c=i==null?void 0:i.value.get(n.value))==null||c.push(t):i==null||i.value.set(n.value,[t]),t==null||t.classList.toggle(Fn,!0),r&&fe(r,()=>{var d,f,p;const u=((d=r.value)!=null?d:0)>=((p=(f=n.value)!=null?f:a)!=null?p:0);t.classList.contains(is)||t.classList.toggle(ss,!u),t.classList.toggle(fo,!1),t.classList.contains(fo)||t.classList.toggle(or,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Fn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(xo.value||((a=lt(n,ur))==null?void 0:a.value))return;const o=lt(n,jn),r=lt(n,cr),i=((l=o==null?void 0:o.value)==null?void 0:l.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Fn,!0),r&&fe(r,()=>{var f;const u=(f=r==null?void 0:r.value)!=null?f:0,d=n.value!=null?u>=n.value:u>i;t.classList.toggle(ss,d),t.classList.toggle(is,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const o=lt(n,jn);o!=null&&o.value&&Wa(o.value,t)}})}}}function SA(e,t){const n=Qu(e),o=Xu(t,n.currentRoute,n.currentPage);return{nav:{...n,...o,downloadPDF:Xs,next:rn,nextSlide:Bo,openInEditor:nx,prev:sn,prevSlide:Vo},configs:ke,themeConfigs:P(()=>ke.themeConfig)}}function TA(){return{install(e){const t=SA(Jt,Ct);e.provide(I,Fe(t))}}}const lo=pp(rx);lo.use(gt);lo.use($p());lo.use(kA());lo.use(TA());bA({app:lo,router:gt});lo.mount("#app");export{_o as $,me as A,Se as B,et as C,bg as D,DA as E,xe as F,xA as G,Ct as H,Pr as I,ZD as J,ps as K,as as L,qo as M,hs as N,yu as O,x_ as P,Ii as Q,S_ as R,Bi as S,He as T,td as U,Cg as V,Ju as W,Et as X,$A as Y,wt as Z,Ku as _,s as a,rr as a0,Uo as a1,wn as a2,qt as a3,Ys as a4,Q1 as a5,X1 as a6,eg as a7,ng as a8,Ci as a9,hu as aa,RA as ab,tt as ac,uy as ad,mu as ae,og as af,Wr as ag,_g as ah,P as b,K as c,Te as d,I as e,dt as f,j as g,b as h,F as i,dg as j,tx as k,ke as l,Ap as m,je as n,k as o,Ho as p,Fe as q,U as r,PA as s,$n as t,AA as u,CA as v,fe as w,V as x,nt as y,$ as z};
