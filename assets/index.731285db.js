(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Er(e,t){const n=Object.create(null),o=e.split(",");for(let r=0;r<o.length;r++)n[o[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kd=Er(Ud);function pc(e){return!!e||e===""}function nt(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],r=Ie(o)?Yd(o):nt(o);if(r)for(const i in r)t[i]=r[i]}return t}else{if(Ie(e))return e;if(ze(e))return e}}const Gd=/;(?![^(]*\))/g,Jd=/:(.+)/;function Yd(e){const t={};return e.split(Gd).forEach(n=>{if(n){const o=n.split(Jd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function Le(e){let t="";if(Ie(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const o=Le(e[n]);o&&(t+=o+" ")}else if(ze(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function X(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=Le(t)),n&&(e.style=nt(n)),e}const Zd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Qd=Er(Zd),Pn=e=>Ie(e)?e:e==null?"":se(e)||ze(e)&&(e.toString===_c||!ue(e.toString))?JSON.stringify(e,mc,2):String(e),mc=(e,t)=>t&&t.__v_isRef?mc(e,t.value):Wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,r])=>(n[`${o} =>`]=r,n),{})}:gc(t)?{[`Set(${t.size})`]:[...t.values()]}:ze(t)&&!se(t)&&!vc(t)?String(t):t,Re={},Bn=[],$t=()=>{},Xd=()=>!1,eh=/^on[^a-z]/,Mr=e=>eh.test(e),hi=e=>e.startsWith("onUpdate:"),ot=Object.assign,fi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},th=Object.prototype.hasOwnProperty,ye=(e,t)=>th.call(e,t),se=Array.isArray,Wn=e=>Fr(e)==="[object Map]",gc=e=>Fr(e)==="[object Set]",ue=e=>typeof e=="function",Ie=e=>typeof e=="string",pi=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",yc=e=>ze(e)&&ue(e.then)&&ue(e.catch),_c=Object.prototype.toString,Fr=e=>_c.call(e),nh=e=>Fr(e).slice(8,-1),vc=e=>Fr(e)==="[object Object]",mi=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=Er(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},oh=/-(\w)/g,It=Or(e=>e.replace(oh,(t,n)=>n?n.toUpperCase():"")),rh=/\B([A-Z])/g,An=Or(e=>e.replace(rh,"-$1").toLowerCase()),zr=Or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qr=Or(e=>e?`on${zr(e)}`:""),Ro=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ia;const sh=()=>ia||(ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class wc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ut;try{return ut=this,t()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.active=!1}}}function ih(e){return new wc(e)}function ah(e,t=ut){t&&t.active&&t.effects.push(e)}function bc(){return ut}function Sc(e){ut&&ut.cleanups.push(e)}const gi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},kc=e=>(e.w&an)>0,xc=e=>(e.n&an)>0,lh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=an},ch=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const r=t[o];kc(r)&&!xc(r)?r.delete(e):t[n++]=r,r.w&=~an,r.n&=~an}t.length=n}},Ds=new WeakMap;let vo=0,an=1;const Ts=30;let Dt;const Sn=Symbol(""),Ps=Symbol("");class yi{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ah(this,o)}run(){if(!this.active)return this.fn();let t=Dt,n=tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Dt,Dt=this,tn=!0,an=1<<++vo,vo<=Ts?lh(this):aa(this),this.fn()}finally{vo<=Ts&&ch(this),an=1<<--vo,Dt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(aa(this),this.onStop&&this.onStop(),this.active=!1)}}function aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tn=!0;const Dc=[];function ro(){Dc.push(tn),tn=!1}function so(){const e=Dc.pop();tn=e===void 0?!0:e}function yt(e,t,n){if(tn&&Dt){let o=Ds.get(e);o||Ds.set(e,o=new Map);let r=o.get(n);r||o.set(n,r=gi()),Tc(r)}}function Tc(e,t){let n=!1;vo<=Ts?xc(e)||(e.n|=an,n=!kc(e)):n=!e.has(Dt),n&&(e.add(Dt),Dt.deps.push(e))}function Ut(e,t,n,o,r,i){const a=Ds.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&se(e))a.forEach((c,u)=>{(u==="length"||u>=o)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":se(e)?mi(n)&&l.push(a.get("length")):(l.push(a.get(Sn)),Wn(e)&&l.push(a.get(Ps)));break;case"delete":se(e)||(l.push(a.get(Sn)),Wn(e)&&l.push(a.get(Ps)));break;case"set":Wn(e)&&l.push(a.get(Sn));break}if(l.length===1)l[0]&&$s(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);$s(gi(c))}}function $s(e,t){const n=se(e)?e:[...e];for(const o of n)o.computed&&la(o);for(const o of n)o.computed||la(o)}function la(e,t){(e!==Dt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const uh=Er("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pi)),dh=_i(),hh=_i(!1,!0),fh=_i(!0),ca=ph();function ph(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=be(this);for(let i=0,a=this.length;i<a;i++)yt(o,"get",i+"");const r=o[t](...n);return r===-1||r===!1?o[t](...n.map(be)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ro();const o=be(this)[t].apply(this,n);return so(),o}}),e}function _i(e=!1,t=!1){return function(o,r,i){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_isShallow")return t;if(r==="__v_raw"&&i===(e?t?Ch:Ec:t?Rc:Cc).get(o))return o;const a=se(o);if(!e&&a&&ye(ca,r))return Reflect.get(ca,r,i);const l=Reflect.get(o,r,i);return(pi(r)?Pc.has(r):uh(r))||(e||yt(o,"get",r),t)?l:xe(l)?a&&mi(r)?l:l.value:ze(l)?e?Vn(l):Fe(l):l}}const mh=$c(),gh=$c(!0);function $c(e=!1){return function(n,o,r,i){let a=n[o];if(Qn(a)&&xe(a)&&!xe(r))return!1;if(!e&&(!yr(r)&&!Qn(r)&&(a=be(a),r=be(r)),!se(n)&&xe(a)&&!xe(r)))return a.value=r,!0;const l=se(n)&&mi(o)?Number(o)<n.length:ye(n,o),c=Reflect.set(n,o,r,i);return n===be(i)&&(l?Ro(r,a)&&Ut(n,"set",o,r):Ut(n,"add",o,r)),c}}function yh(e,t){const n=ye(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Ut(e,"delete",t,void 0),o}function _h(e,t){const n=Reflect.has(e,t);return(!pi(t)||!Pc.has(t))&&yt(e,"has",t),n}function vh(e){return yt(e,"iterate",se(e)?"length":Sn),Reflect.ownKeys(e)}const Ac={get:dh,set:mh,deleteProperty:yh,has:_h,ownKeys:vh},wh={get:fh,set(e,t){return!0},deleteProperty(e,t){return!0}},bh=ot({},Ac,{get:hh,set:gh}),vi=e=>e,Lr=e=>Reflect.getPrototypeOf(e);function Zo(e,t,n=!1,o=!1){e=e.__v_raw;const r=be(e),i=be(t);n||(t!==i&&yt(r,"get",t),yt(r,"get",i));const{has:a}=Lr(r),l=o?vi:n?Si:Eo;if(a.call(r,t))return l(e.get(t));if(a.call(r,i))return l(e.get(i));e!==r&&e.get(t)}function Qo(e,t=!1){const n=this.__v_raw,o=be(n),r=be(e);return t||(e!==r&&yt(o,"has",e),yt(o,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Xo(e,t=!1){return e=e.__v_raw,!t&&yt(be(e),"iterate",Sn),Reflect.get(e,"size",e)}function ua(e){e=be(e);const t=be(this);return Lr(t).has.call(t,e)||(t.add(e),Ut(t,"add",e,e)),this}function da(e,t){t=be(t);const n=be(this),{has:o,get:r}=Lr(n);let i=o.call(n,e);i||(e=be(e),i=o.call(n,e));const a=r.call(n,e);return n.set(e,t),i?Ro(t,a)&&Ut(n,"set",e,t):Ut(n,"add",e,t),this}function ha(e){const t=be(this),{has:n,get:o}=Lr(t);let r=n.call(t,e);r||(e=be(e),r=n.call(t,e)),o&&o.call(t,e);const i=t.delete(e);return r&&Ut(t,"delete",e,void 0),i}function fa(){const e=be(this),t=e.size!==0,n=e.clear();return t&&Ut(e,"clear",void 0,void 0),n}function er(e,t){return function(o,r){const i=this,a=i.__v_raw,l=be(a),c=t?vi:e?Si:Eo;return!e&&yt(l,"iterate",Sn),a.forEach((u,d)=>o.call(r,c(u),c(d),i))}}function tr(e,t,n){return function(...o){const r=this.__v_raw,i=be(r),a=Wn(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=r[e](...o),d=n?vi:t?Si:Eo;return!t&&yt(i,"iterate",c?Ps:Sn),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:l?[d(h[0]),d(h[1])]:d(h),done:f}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:this}}function Sh(){const e={get(i){return Zo(this,i)},get size(){return Xo(this)},has:Qo,add:ua,set:da,delete:ha,clear:fa,forEach:er(!1,!1)},t={get(i){return Zo(this,i,!1,!0)},get size(){return Xo(this)},has:Qo,add:ua,set:da,delete:ha,clear:fa,forEach:er(!1,!0)},n={get(i){return Zo(this,i,!0)},get size(){return Xo(this,!0)},has(i){return Qo.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:er(!0,!1)},o={get(i){return Zo(this,i,!0,!0)},get size(){return Xo(this,!0)},has(i){return Qo.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tr(i,!1,!1),n[i]=tr(i,!0,!1),t[i]=tr(i,!1,!0),o[i]=tr(i,!0,!0)}),[e,n,t,o]}const[kh,xh,Dh,Th]=Sh();function wi(e,t){const n=t?e?Th:Dh:e?xh:kh;return(o,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?o:Reflect.get(ye(n,r)&&r in o?n:o,r,i)}const Ph={get:wi(!1,!1)},$h={get:wi(!1,!0)},Ah={get:wi(!0,!1)},Cc=new WeakMap,Rc=new WeakMap,Ec=new WeakMap,Ch=new WeakMap;function Rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eh(e){return e.__v_skip||!Object.isExtensible(e)?0:Rh(nh(e))}function Fe(e){return Qn(e)?e:bi(e,!1,Ac,Ph,Cc)}function Mh(e){return bi(e,!1,bh,$h,Rc)}function Vn(e){return bi(e,!0,wh,Ah,Ec)}function bi(e,t,n,o,r){if(!ze(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const a=Eh(e);if(a===0)return e;const l=new Proxy(e,a===2?o:n);return r.set(e,l),l}function Un(e){return Qn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function yr(e){return!!(e&&e.__v_isShallow)}function Mc(e){return Un(e)||Qn(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function jr(e){return gr(e,"__v_skip",!0),e}const Eo=e=>ze(e)?Fe(e):e,Si=e=>ze(e)?Vn(e):e;function ki(e){tn&&Dt&&(e=be(e),Tc(e.dep||(e.dep=gi())))}function xi(e,t){e=be(e),e.dep&&$s(e.dep)}function xe(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Fc(e,!1)}function Rt(e){return Fc(e,!0)}function Fc(e,t){return xe(e)?e:new Fh(e,t)}class Fh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:Eo(t)}get value(){return ki(this),this._value}set value(t){const n=this.__v_isShallow||yr(t)||Qn(t);t=n?t:be(t),Ro(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Eo(t),xi(this))}}function b(e){return xe(e)?e.value:e}const Oh={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const r=e[t];return xe(r)&&!xe(n)?(r.value=n,!0):Reflect.set(e,t,n,o)}};function Oc(e){return Un(e)?e:new Proxy(e,Oh)}class zh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>ki(this),()=>xi(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function zc(e){return new zh(e)}function Lh(e){const t=se(e)?new Array(e.length):{};for(const n in e)t[n]=qh(e,n);return t}class jh{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function qh(e,t,n){const o=e[t];return xe(o)?o:new jh(e,t,n)}var Lc;class Ih{constructor(t,n,o,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Lc]=!1,this._dirty=!0,this.effect=new yi(t,()=>{this._dirty||(this._dirty=!0,xi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=o}get value(){const t=be(this);return ki(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Lc="__v_isReadonly";function Vh(e,t,n=!1){let o,r;const i=ue(e);return i?(o=e,r=$t):(o=e.get,r=e.set),new Ih(o,r,i||!r,n)}function nn(e,t,n,o){let r;try{r=o?e(...o):e()}catch(i){qr(i,t,n)}return r}function At(e,t,n,o){if(ue(e)){const i=nn(e,t,n,o);return i&&yc(i)&&i.catch(a=>{qr(a,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(At(e[i],t,n,o));return r}function qr(e,t,n,o=!0){const r=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,l=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){nn(c,null,10,[e,a,l]);return}}Nh(e,n,r,o)}function Nh(e,t,n,o=!0){console.error(e)}let Mo=!1,As=!1;const Je=[];let zt=0;const Kn=[];let Bt=null,gn=0;const jc=Promise.resolve();let Di=null;function Ye(e){const t=Di||jc;return e?t.then(this?e.bind(this):e):t}function Bh(e){let t=zt+1,n=Je.length;for(;t<n;){const o=t+n>>>1;Fo(Je[o])<e?t=o+1:n=o}return t}function Ti(e){(!Je.length||!Je.includes(e,Mo&&e.allowRecurse?zt+1:zt))&&(e.id==null?Je.push(e):Je.splice(Bh(e.id),0,e),qc())}function qc(){!Mo&&!As&&(As=!0,Di=jc.then(Vc))}function Wh(e){const t=Je.indexOf(e);t>zt&&Je.splice(t,1)}function Hh(e){se(e)?Kn.push(...e):(!Bt||!Bt.includes(e,e.allowRecurse?gn+1:gn))&&Kn.push(e),qc()}function pa(e,t=Mo?zt+1:0){for(;t<Je.length;t++){const n=Je[t];n&&n.pre&&(Je.splice(t,1),t--,n())}}function Ic(e){if(Kn.length){const t=[...new Set(Kn)];if(Kn.length=0,Bt){Bt.push(...t);return}for(Bt=t,Bt.sort((n,o)=>Fo(n)-Fo(o)),gn=0;gn<Bt.length;gn++)Bt[gn]();Bt=null,gn=0}}const Fo=e=>e.id==null?1/0:e.id,Uh=(e,t)=>{const n=Fo(e)-Fo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vc(e){As=!1,Mo=!0,Je.sort(Uh);const t=$t;try{for(zt=0;zt<Je.length;zt++){const n=Je[zt];n&&n.active!==!1&&nn(n,null,14)}}finally{zt=0,Je.length=0,Ic(),Mo=!1,Di=null,(Je.length||Kn.length)&&Vc()}}function Kh(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Re;let r=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=o[d]||Re;f&&(r=n.map(m=>m.trim())),h&&(r=n.map(xs))}let l,c=o[l=Qr(t)]||o[l=Qr(It(t))];!c&&i&&(c=o[l=Qr(An(t))]),c&&At(c,e,6,r);const u=o[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,At(u,e,6,r)}}function Nc(e,t,n=!1){const o=t.emitsCache,r=o.get(e);if(r!==void 0)return r;const i=e.emits;let a={},l=!1;if(!ue(e)){const c=u=>{const d=Nc(u,t,!0);d&&(l=!0,ot(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(ze(e)&&o.set(e,null),null):(se(i)?i.forEach(c=>a[c]=null):ot(a,i),ze(e)&&o.set(e,a),a)}function Ir(e,t){return!e||!Mr(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,An(t))||ye(e,t))}let Ze=null,Vr=null;function _r(e){const t=Ze;return Ze=e,Vr=e&&e.type.__scopeId||null,t}function fP(e){Vr=e}function pP(){Vr=null}function E(e,t=Ze,n){if(!t||e._n)return e;const o=(...r)=>{o._d&&Da(-1);const i=_r(t),a=e(...r);return _r(i),o._d&&Da(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function Xr(e){const{type:t,vnode:n,proxy:o,withProxy:r,props:i,propsOptions:[a],slots:l,attrs:c,emit:u,render:d,renderCache:h,data:f,setupState:m,ctx:g,inheritAttrs:w}=e;let v,T;const x=_r(e);try{if(n.shapeFlag&4){const $=r||o;v=Ot(d.call($,$,h,i,m,f,g)),T=c}else{const $=t;v=Ot($.length>1?$(i,{attrs:c,slots:l,emit:u}):$(i,null)),T=t.props?c:Gh(c)}}catch($){So.length=0,qr($,e,1),v=Z(ln)}let D=v;if(T&&w!==!1){const $=Object.keys(T),{shapeFlag:q}=D;$.length&&q&7&&(a&&$.some(hi)&&(T=Jh(T,a)),D=$n(D,T))}return n.dirs&&(D=$n(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),v=D,_r(x),v}const Gh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mr(n))&&((t||(t={}))[n]=e[n]);return t},Jh=(e,t)=>{const n={};for(const o in e)(!hi(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Yh(e,t,n){const{props:o,children:r,component:i}=e,{props:a,children:l,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?ma(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const f=d[h];if(a[f]!==o[f]&&!Ir(u,f))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:o===a?!1:o?a?ma(o,a,u):!0:!!a;return!1}function ma(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let r=0;r<o.length;r++){const i=o[r];if(t[i]!==e[i]&&!Ir(n,i))return!0}return!1}function Zh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Bc=e=>e.__isSuspense;function Qh(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Hh(e)}function ht(e,t){if(Ue){let n=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===n&&(n=Ue.provides=Object.create(o)),n[e]=t}}function F(e,t,n=!1){const o=Ue||Ze;if(o){const r=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&ue(t)?t.call(o.proxy):t}}function Nr(e,t){return Pi(e,null,t)}const ga={};function fe(e,t,n){return Pi(e,t,n)}function Pi(e,t,{immediate:n,deep:o,flush:r,onTrack:i,onTrigger:a}=Re){const l=Ue;let c,u=!1,d=!1;if(xe(e)?(c=()=>e.value,u=yr(e)):Un(e)?(c=()=>e,o=!0):se(e)?(d=!0,u=e.some(T=>Un(T)||yr(T)),c=()=>e.map(T=>{if(xe(T))return T.value;if(Un(T))return _n(T);if(ue(T))return nn(T,l,2)})):ue(e)?t?c=()=>nn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),At(e,l,3,[f])}:c=$t,t&&o){const T=c;c=()=>_n(T())}let h,f=T=>{h=v.onStop=()=>{nn(T,l,4)}};if(Lo)return f=$t,t?n&&At(t,l,3,[c(),d?[]:void 0,f]):c(),$t;let m=d?[]:ga;const g=()=>{if(!!v.active)if(t){const T=v.run();(o||u||(d?T.some((x,D)=>Ro(x,m[D])):Ro(T,m)))&&(h&&h(),At(t,l,3,[T,m===ga?void 0:m,f]),m=T)}else v.run()};g.allowRecurse=!!t;let w;r==="sync"?w=g:r==="post"?w=()=>Ke(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),w=()=>Ti(g));const v=new yi(c,w);return t?n?g():m=v.run():r==="post"?Ke(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&fi(l.scope.effects,v)}}function Xh(e,t,n){const o=this.proxy,r=Ie(e)?e.includes(".")?Wc(o,e):()=>o[e]:e.bind(o,o);let i;ue(t)?i=t:(i=t.handler,n=t);const a=Ue;eo(this);const l=Pi(r,i.bind(o),n);return a?eo(a):kn(),l}function Wc(e,t){const n=t.split(".");return()=>{let o=e;for(let r=0;r<n.length&&o;r++)o=o[n[r]];return o}}function _n(e,t){if(!ze(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))_n(e.value,t);else if(se(e))for(let n=0;n<e.length;n++)_n(e[n],t);else if(gc(e)||Wn(e))e.forEach(n=>{_n(n,t)});else if(vc(e))for(const n in e)_n(e[n],t);return e}function Hc(e,t){e.shapeFlag&6&&e.component?Hc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function De(e){return ue(e)?{setup:e,name:e.name}:e}const Gn=e=>!!e.type.__asyncLoader,Uc=e=>e.type.__isKeepAlive,ef={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Cn(),o=n.ctx;if(!o.renderer)return()=>{const x=t.default&&t.default();return x&&x.length===1?x[0]:x};const r=new Map,i=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:h}}}=o,f=h("div");o.activate=(x,D,$,q,O)=>{const B=x.component;u(x,D,$,0,l),c(B.vnode,x,D,$,B,l,q,x.slotScopeIds,O),Ke(()=>{B.isDeactivated=!1,B.a&&Hn(B.a);const ne=x.props&&x.props.onVnodeMounted;ne&&_t(ne,B.parent,x)},l)},o.deactivate=x=>{const D=x.component;u(x,f,null,1,l),Ke(()=>{D.da&&Hn(D.da);const $=x.props&&x.props.onVnodeUnmounted;$&&_t($,D.parent,x),D.isDeactivated=!0},l)};function m(x){es(x),d(x,n,l,!0)}function g(x){r.forEach((D,$)=>{const q=zs(D.type);q&&(!x||!x(q))&&w($)})}function w(x){const D=r.get(x);!a||D.type!==a.type?m(D):a&&es(a),r.delete(x),i.delete(x)}fe(()=>[e.include,e.exclude],([x,D])=>{x&&g($=>wo(x,$)),D&&g($=>!wo(D,$))},{flush:"post",deep:!0});let v=null;const T=()=>{v!=null&&r.set(v,ts(n.subTree))};return Ho(T),$i(T),Wr(()=>{r.forEach(x=>{const{subTree:D,suspense:$}=n,q=ts(D);if(x.type===q.type){es(q);const O=q.component.da;O&&Ke(O,$);return}m(x)})}),()=>{if(v=null,!t.default)return null;const x=t.default(),D=x[0];if(x.length>1)return a=null,x;if(!Xn(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return a=null,D;let $=ts(D);const q=$.type,O=zs(Gn($)?$.type.__asyncResolved||{}:q),{include:B,exclude:ne,max:ae}=e;if(B&&(!O||!wo(B,O))||ne&&O&&wo(ne,O))return a=$,D;const ge=$.key==null?q:$.key,_e=r.get(ge);return $.el&&($=$n($),D.shapeFlag&128&&(D.ssContent=$)),v=ge,_e?($.el=_e.el,$.component=_e.component,$.transition&&Hc($,$.transition),$.shapeFlag|=512,i.delete(ge),i.add(ge)):(i.add(ge),ae&&i.size>parseInt(ae,10)&&w(i.values().next().value)),$.shapeFlag|=256,a=$,Bc(D.type)?D:$}}},Kc=ef;function wo(e,t){return se(e)?e.some(n=>wo(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function tf(e,t){Gc(e,"a",t)}function nf(e,t){Gc(e,"da",t)}function Gc(e,t,n=Ue){const o=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Br(t,o,n),n){let r=n.parent;for(;r&&r.parent;)Uc(r.parent.vnode)&&of(o,t,n,r),r=r.parent}}function of(e,t,n,o){const r=Br(t,e,o,!0);Ai(()=>{fi(o[t],r)},n)}function es(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function ts(e){return e.shapeFlag&128?e.ssContent:e}function Br(e,t,n=Ue,o=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;ro(),eo(n);const l=At(t,n,e,a);return kn(),so(),l});return o?r.unshift(i):r.push(i),i}}const Gt=e=>(t,n=Ue)=>(!Lo||e==="sp")&&Br(e,t,n),Jc=Gt("bm"),Ho=Gt("m"),rf=Gt("bu"),$i=Gt("u"),Wr=Gt("bum"),Ai=Gt("um"),sf=Gt("sp"),af=Gt("rtg"),lf=Gt("rtc");function cf(e,t=Ue){Br("ec",e,t)}function Ci(e,t){const n=Ze;if(n===null)return e;const o=Ur(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,l,c,u=Re]=t[i];ue(a)&&(a={mounted:a,updated:a}),a.deep&&_n(l),r.push({dir:a,instance:o,value:l,oldValue:void 0,arg:c,modifiers:u})}return e}function dn(e,t,n,o){const r=e.dirs,i=t&&t.dirs;for(let a=0;a<r.length;a++){const l=r[a];i&&(l.oldValue=i[a].value);let c=l.dir[o];c&&(ro(),At(c,n,8,[e.el,l,e,t]),so())}}const Yc="components";function Oo(e,t){return df(Yc,e,!0,t)||e}const uf=Symbol();function df(e,t,n=!0,o=!1){const r=Ze||Ue;if(r){const i=r.type;if(e===Yc){const l=zs(i,!1);if(l&&(l===t||l===It(t)||l===zr(It(t))))return i}const a=ya(r[e]||i[e],t)||ya(r.appContext[e],t);return!a&&o?i:a}}function ya(e,t){return e&&(e[t]||e[It(t)]||e[zr(It(t))])}function Uo(e,t,n,o){let r;const i=n&&n[o];if(se(e)||Ie(e)){r=new Array(e.length);for(let a=0,l=e.length;a<l;a++)r[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i&&i[a])}else if(ze(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=t(e[u],u,l,i&&i[l])}}else r=[];return n&&(n[o]=r),r}function wt(e,t,n={},o,r){if(Ze.isCE||Ze.parent&&Gn(Ze.parent)&&Ze.parent.isCE)return Z("slot",t==="default"?null:{name:t},o&&o());let i=e[t];i&&i._c&&(i._d=!1),S();const a=i&&Zc(i(n)),l=j(Pe,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!r&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Zc(e){return e.some(t=>Xn(t)?!(t.type===ln||t.type===Pe&&!Zc(t.children)):!0)?e:null}const Cs=e=>e?au(e)?Ur(e)||e.proxy:Cs(e.parent):null,vr=ot(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cs(e.parent),$root:e=>Cs(e.root),$emit:e=>e.emit,$options:e=>Ri(e),$forceUpdate:e=>e.f||(e.f=()=>Ti(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>Xh.bind(e)}),hf={get({_:e},t){const{ctx:n,setupState:o,data:r,props:i,accessCache:a,type:l,appContext:c}=e;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(o!==Re&&ye(o,t))return a[t]=1,o[t];if(r!==Re&&ye(r,t))return a[t]=2,r[t];if((u=e.propsOptions[0])&&ye(u,t))return a[t]=3,i[t];if(n!==Re&&ye(n,t))return a[t]=4,n[t];Rs&&(a[t]=0)}}const d=vr[t];let h,f;if(d)return t==="$attrs"&&yt(e,"get",t),d(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==Re&&ye(n,t))return a[t]=4,n[t];if(f=c.config.globalProperties,ye(f,t))return f[t]},set({_:e},t,n){const{data:o,setupState:r,ctx:i}=e;return r!==Re&&ye(r,t)?(r[t]=n,!0):o!==Re&&ye(o,t)?(o[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:r,propsOptions:i}},a){let l;return!!n[a]||e!==Re&&ye(e,a)||t!==Re&&ye(t,a)||(l=i[0])&&ye(l,a)||ye(o,a)||ye(vr,a)||ye(r.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Rs=!0;function ff(e){const t=Ri(e),n=e.proxy,o=e.ctx;Rs=!1,t.beforeCreate&&_a(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:a,watch:l,provide:c,inject:u,created:d,beforeMount:h,mounted:f,beforeUpdate:m,updated:g,activated:w,deactivated:v,beforeDestroy:T,beforeUnmount:x,destroyed:D,unmounted:$,render:q,renderTracked:O,renderTriggered:B,errorCaptured:ne,serverPrefetch:ae,expose:ge,inheritAttrs:_e,components:Ve,directives:Ne,filters:qe}=t;if(u&&pf(u,o,null,e.appContext.config.unwrapInjectedRef),a)for(const G in a){const re=a[G];ue(re)&&(o[G]=re.bind(n))}if(r){const G=r.call(n,n);ze(G)&&(e.data=Fe(G))}if(Rs=!0,i)for(const G in i){const re=i[G],he=ue(re)?re.bind(n,n):ue(re.get)?re.get.bind(n,n):$t,$e=!ue(re)&&ue(re.set)?re.set.bind(n):$t,it=P({get:he,set:$e});Object.defineProperty(o,G,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ge=>it.value=Ge})}if(l)for(const G in l)Qc(l[G],o,n,G);if(c){const G=ue(c)?c.call(n):c;Reflect.ownKeys(G).forEach(re=>{ht(re,G[re])})}d&&_a(d,e,"c");function Oe(G,re){se(re)?re.forEach(he=>G(he.bind(n))):re&&G(re.bind(n))}if(Oe(Jc,h),Oe(Ho,f),Oe(rf,m),Oe($i,g),Oe(tf,w),Oe(nf,v),Oe(cf,ne),Oe(lf,O),Oe(af,B),Oe(Wr,x),Oe(Ai,$),Oe(sf,ae),se(ge))if(ge.length){const G=e.exposed||(e.exposed={});ge.forEach(re=>{Object.defineProperty(G,re,{get:()=>n[re],set:he=>n[re]=he})})}else e.exposed||(e.exposed={});q&&e.render===$t&&(e.render=q),_e!=null&&(e.inheritAttrs=_e),Ve&&(e.components=Ve),Ne&&(e.directives=Ne)}function pf(e,t,n=$t,o=!1){se(e)&&(e=Es(e));for(const r in e){const i=e[r];let a;ze(i)?"default"in i?a=F(i.from||r,i.default,!0):a=F(i.from||r):a=F(i),xe(a)&&o?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[r]=a}}function _a(e,t,n){At(se(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qc(e,t,n,o){const r=o.includes(".")?Wc(n,o):()=>n[o];if(Ie(e)){const i=t[e];ue(i)&&fe(r,i)}else if(ue(e))fe(r,e.bind(n));else if(ze(e))if(se(e))e.forEach(i=>Qc(i,t,n,o));else{const i=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(i)&&fe(r,i,e)}}function Ri(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!r.length&&!n&&!o?c=t:(c={},r.length&&r.forEach(u=>wr(c,u,a,!0)),wr(c,t,a)),ze(t)&&i.set(t,c),c}function wr(e,t,n,o=!1){const{mixins:r,extends:i}=t;i&&wr(e,i,n,!0),r&&r.forEach(a=>wr(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const l=mf[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const mf={data:va,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:mn,directives:mn,watch:yf,provide:va,inject:gf};function va(e,t){return t?e?function(){return ot(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function gf(e,t){return mn(Es(e),Es(t))}function Es(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?ot(ot(Object.create(null),e),t):t}function yf(e,t){if(!e)return t;if(!t)return e;const n=ot(Object.create(null),e);for(const o in t)n[o]=Xe(e[o],t[o]);return n}function _f(e,t,n,o=!1){const r={},i={};gr(i,Hr,1),e.propsDefaults=Object.create(null),Xc(e,t,r,i);for(const a in e.propsOptions[0])a in r||(r[a]=void 0);n?e.props=o?r:Mh(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function vf(e,t,n,o){const{props:r,attrs:i,vnode:{patchFlag:a}}=e,l=be(r),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let f=d[h];if(Ir(e.emitsOptions,f))continue;const m=t[f];if(c)if(ye(i,f))m!==i[f]&&(i[f]=m,u=!0);else{const g=It(f);r[g]=Ms(c,l,g,m,e,!1)}else m!==i[f]&&(i[f]=m,u=!0)}}}else{Xc(e,t,r,i)&&(u=!0);let d;for(const h in l)(!t||!ye(t,h)&&((d=An(h))===h||!ye(t,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(r[h]=Ms(c,l,h,void 0,e,!0)):delete r[h]);if(i!==l)for(const h in i)(!t||!ye(t,h)&&!0)&&(delete i[h],u=!0)}u&&Ut(e,"set","$attrs")}function Xc(e,t,n,o){const[r,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(ar(c))continue;const u=t[c];let d;r&&ye(r,d=It(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ir(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(i){const c=be(n),u=l||Re;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Ms(r,c,h,u[h],e,!ye(u,h))}}return a}function Ms(e,t,n,o,r,i){const a=e[n];if(a!=null){const l=ye(a,"default");if(l&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=r;n in u?o=u[n]:(eo(r),o=u[n]=c.call(null,t),kn())}else o=c}a[0]&&(i&&!l?o=!1:a[1]&&(o===""||o===An(n))&&(o=!0))}return o}function eu(e,t,n=!1){const o=t.propsCache,r=o.get(e);if(r)return r;const i=e.props,a={},l=[];let c=!1;if(!ue(e)){const d=h=>{c=!0;const[f,m]=eu(h,t,!0);ot(a,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return ze(e)&&o.set(e,Bn),Bn;if(se(i))for(let d=0;d<i.length;d++){const h=It(i[d]);wa(h)&&(a[h]=Re)}else if(i)for(const d in i){const h=It(d);if(wa(h)){const f=i[d],m=a[h]=se(f)||ue(f)?{type:f}:f;if(m){const g=ka(Boolean,m.type),w=ka(String,m.type);m[0]=g>-1,m[1]=w<0||g<w,(g>-1||ye(m,"default"))&&l.push(h)}}}const u=[a,l];return ze(e)&&o.set(e,u),u}function wa(e){return e[0]!=="$"}function ba(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Sa(e,t){return ba(e)===ba(t)}function ka(e,t){return se(t)?t.findIndex(n=>Sa(n,e)):ue(t)&&Sa(t,e)?0:-1}const tu=e=>e[0]==="_"||e==="$stable",Ei=e=>se(e)?e.map(Ot):[Ot(e)],wf=(e,t,n)=>{if(t._n)return t;const o=E((...r)=>Ei(t(...r)),n);return o._c=!1,o},nu=(e,t,n)=>{const o=e._ctx;for(const r in e){if(tu(r))continue;const i=e[r];if(ue(i))t[r]=wf(r,i,o);else if(i!=null){const a=Ei(i);t[r]=()=>a}}},ou=(e,t)=>{const n=Ei(t);e.slots.default=()=>n},bf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=be(t),gr(t,"_",n)):nu(t,e.slots={})}else e.slots={},t&&ou(e,t);gr(e.slots,Hr,1)},Sf=(e,t,n)=>{const{vnode:o,slots:r}=e;let i=!0,a=Re;if(o.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(ot(r,t),!n&&l===1&&delete r._):(i=!t.$stable,nu(t,r)),a=t}else t&&(ou(e,t),a={default:1});if(i)for(const l in r)!tu(l)&&!(l in a)&&delete r[l]};function ru(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kf=0;function xf(e,t){return function(o,r=null){ue(o)||(o=Object.assign({},o)),r!=null&&!ze(r)&&(r=null);const i=ru(),a=new Set;let l=!1;const c=i.app={_uid:kf++,_component:o,_props:r,_container:null,_context:i,_instance:null,version:Bf,get config(){return i.config},set config(u){},use(u,...d){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(c,...d)):ue(u)&&(a.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!l){const f=Z(o,r);return f.appContext=i,d&&t?t(f,u):e(f,u,h),l=!0,c._container=u,u.__vue_app__=c,Ur(f.component)||f.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c}};return c}}function Fs(e,t,n,o,r=!1){if(se(e)){e.forEach((f,m)=>Fs(f,t&&(se(t)?t[m]:t),n,o,r));return}if(Gn(o)&&!r)return;const i=o.shapeFlag&4?Ur(o.component)||o.component.proxy:o.el,a=r?null:i,{i:l,r:c}=e,u=t&&t.r,d=l.refs===Re?l.refs={}:l.refs,h=l.setupState;if(u!=null&&u!==c&&(Ie(u)?(d[u]=null,ye(h,u)&&(h[u]=null)):xe(u)&&(u.value=null)),ue(c))nn(c,l,12,[a,d]);else{const f=Ie(c),m=xe(c);if(f||m){const g=()=>{if(e.f){const w=f?d[c]:c.value;r?se(w)&&fi(w,i):se(w)?w.includes(i)||w.push(i):f?(d[c]=[i],ye(h,c)&&(h[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else f?(d[c]=a,ye(h,c)&&(h[c]=a)):m&&(c.value=a,e.k&&(d[e.k]=a))};a?(g.id=-1,Ke(g,n)):g()}}}const Ke=Qh;function Df(e){return Tf(e)}function Tf(e,t){const n=sh();n.__VUE__=!0;const{insert:o,remove:r,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:h,nextSibling:f,setScopeId:m=$t,cloneNode:g,insertStaticContent:w}=e,v=(y,_,k,R=null,C=null,L=null,W=!1,z=null,N=!!_.dynamicChildren)=>{if(y===_)return;y&&!uo(y,_)&&(R=Y(y),rt(y,C,L,!0),y=null),_.patchFlag===-2&&(N=!1,_.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:J}=_;switch(M){case Fi:T(y,_,k,R);break;case ln:x(y,_,k,R);break;case ns:y==null&&D(_,k,R,W);break;case Pe:Ne(y,_,k,R,C,L,W,z,N);break;default:J&1?O(y,_,k,R,C,L,W,z,N):J&6?qe(y,_,k,R,C,L,W,z,N):(J&64||J&128)&&M.process(y,_,k,R,C,L,W,z,N,pe)}ee!=null&&C&&Fs(ee,y&&y.ref,L,_||y,!_)},T=(y,_,k,R)=>{if(y==null)o(_.el=l(_.children),k,R);else{const C=_.el=y.el;_.children!==y.children&&u(C,_.children)}},x=(y,_,k,R)=>{y==null?o(_.el=c(_.children||""),k,R):_.el=y.el},D=(y,_,k,R)=>{[y.el,y.anchor]=w(y.children,_,k,R,y.el,y.anchor)},$=({el:y,anchor:_},k,R)=>{let C;for(;y&&y!==_;)C=f(y),o(y,k,R),y=C;o(_,k,R)},q=({el:y,anchor:_})=>{let k;for(;y&&y!==_;)k=f(y),r(y),y=k;r(_)},O=(y,_,k,R,C,L,W,z,N)=>{W=W||_.type==="svg",y==null?B(_,k,R,C,L,W,z,N):ge(y,_,C,L,W,z,N)},B=(y,_,k,R,C,L,W,z)=>{let N,M;const{type:ee,props:J,shapeFlag:te,transition:ie,patchFlag:ve,dirs:Ae}=y;if(y.el&&g!==void 0&&ve===-1)N=y.el=g(y.el);else{if(N=y.el=a(y.type,L,J&&J.is,J),te&8?d(N,y.children):te&16&&ae(y.children,N,null,R,C,L&&ee!=="foreignObject",W,z),Ae&&dn(y,null,R,"created"),J){for(const Me in J)Me!=="value"&&!ar(Me)&&i(N,Me,null,J[Me],L,y.children,R,C,V);"value"in J&&i(N,"value",null,J.value),(M=J.onVnodeBeforeMount)&&_t(M,R,y)}ne(N,y,y.scopeId,W,R)}Ae&&dn(y,null,R,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;Ce&&ie.beforeEnter(N),o(N,_,k),((M=J&&J.onVnodeMounted)||Ce||Ae)&&Ke(()=>{M&&_t(M,R,y),Ce&&ie.enter(N),Ae&&dn(y,null,R,"mounted")},C)},ne=(y,_,k,R,C)=>{if(k&&m(y,k),R)for(let L=0;L<R.length;L++)m(y,R[L]);if(C){let L=C.subTree;if(_===L){const W=C.vnode;ne(y,W,W.scopeId,W.slotScopeIds,C.parent)}}},ae=(y,_,k,R,C,L,W,z,N=0)=>{for(let M=N;M<y.length;M++){const ee=y[M]=z?Qt(y[M]):Ot(y[M]);v(null,ee,_,k,R,C,L,W,z)}},ge=(y,_,k,R,C,L,W)=>{const z=_.el=y.el;let{patchFlag:N,dynamicChildren:M,dirs:ee}=_;N|=y.patchFlag&16;const J=y.props||Re,te=_.props||Re;let ie;k&&hn(k,!1),(ie=te.onVnodeBeforeUpdate)&&_t(ie,k,_,y),ee&&dn(_,y,k,"beforeUpdate"),k&&hn(k,!0);const ve=C&&_.type!=="foreignObject";if(M?_e(y.dynamicChildren,M,z,k,R,ve,L):W||he(y,_,z,null,k,R,ve,L,!1),N>0){if(N&16)Ve(z,_,J,te,k,R,C);else if(N&2&&J.class!==te.class&&i(z,"class",null,te.class,C),N&4&&i(z,"style",J.style,te.style,C),N&8){const Ae=_.dynamicProps;for(let Ce=0;Ce<Ae.length;Ce++){const Me=Ae[Ce],St=J[Me],Mn=te[Me];(Mn!==St||Me==="value")&&i(z,Me,St,Mn,C,y.children,k,R,V)}}N&1&&y.children!==_.children&&d(z,_.children)}else!W&&M==null&&Ve(z,_,J,te,k,R,C);((ie=te.onVnodeUpdated)||ee)&&Ke(()=>{ie&&_t(ie,k,_,y),ee&&dn(_,y,k,"updated")},R)},_e=(y,_,k,R,C,L,W)=>{for(let z=0;z<_.length;z++){const N=y[z],M=_[z],ee=N.el&&(N.type===Pe||!uo(N,M)||N.shapeFlag&70)?h(N.el):k;v(N,M,ee,null,R,C,L,W,!0)}},Ve=(y,_,k,R,C,L,W)=>{if(k!==R){for(const z in R){if(ar(z))continue;const N=R[z],M=k[z];N!==M&&z!=="value"&&i(y,z,M,N,W,_.children,C,L,V)}if(k!==Re)for(const z in k)!ar(z)&&!(z in R)&&i(y,z,k[z],null,W,_.children,C,L,V);"value"in R&&i(y,"value",k.value,R.value)}},Ne=(y,_,k,R,C,L,W,z,N)=>{const M=_.el=y?y.el:l(""),ee=_.anchor=y?y.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ie}=_;ie&&(z=z?z.concat(ie):ie),y==null?(o(M,k,R),o(ee,k,R),ae(_.children,k,ee,C,L,W,z,N)):J>0&&J&64&&te&&y.dynamicChildren?(_e(y.dynamicChildren,te,k,C,L,W,z),(_.key!=null||C&&_===C.subTree)&&Mi(y,_,!0)):he(y,_,k,ee,C,L,W,z,N)},qe=(y,_,k,R,C,L,W,z,N)=>{_.slotScopeIds=z,y==null?_.shapeFlag&512?C.ctx.activate(_,k,R,W,N):Ee(_,k,R,C,L,W,N):Oe(y,_,N)},Ee=(y,_,k,R,C,L,W)=>{const z=y.component=zf(y,R,C);if(Uc(y)&&(z.ctx.renderer=pe),Lf(z),z.asyncDep){if(C&&C.registerDep(z,G),!y.el){const N=z.subTree=Z(ln);x(null,N,_,k)}return}G(z,y,_,k,C,L,W)},Oe=(y,_,k)=>{const R=_.component=y.component;if(Yh(y,_,k))if(R.asyncDep&&!R.asyncResolved){re(R,_,k);return}else R.next=_,Wh(R.update),R.update();else _.el=y.el,R.vnode=_},G=(y,_,k,R,C,L,W)=>{const z=()=>{if(y.isMounted){let{next:ee,bu:J,u:te,parent:ie,vnode:ve}=y,Ae=ee,Ce;hn(y,!1),ee?(ee.el=ve.el,re(y,ee,W)):ee=ve,J&&Hn(J),(Ce=ee.props&&ee.props.onVnodeBeforeUpdate)&&_t(Ce,ie,ee,ve),hn(y,!0);const Me=Xr(y),St=y.subTree;y.subTree=Me,v(St,Me,h(St.el),Y(St),y,C,L),ee.el=Me.el,Ae===null&&Zh(y,Me.el),te&&Ke(te,C),(Ce=ee.props&&ee.props.onVnodeUpdated)&&Ke(()=>_t(Ce,ie,ee,ve),C)}else{let ee;const{el:J,props:te}=_,{bm:ie,m:ve,parent:Ae}=y,Ce=Gn(_);if(hn(y,!1),ie&&Hn(ie),!Ce&&(ee=te&&te.onVnodeBeforeMount)&&_t(ee,Ae,_),hn(y,!0),J&&oe){const Me=()=>{y.subTree=Xr(y),oe(J,y.subTree,y,C,null)};Ce?_.type.__asyncLoader().then(()=>!y.isUnmounted&&Me()):Me()}else{const Me=y.subTree=Xr(y);v(null,Me,k,R,y,C,L),_.el=Me.el}if(ve&&Ke(ve,C),!Ce&&(ee=te&&te.onVnodeMounted)){const Me=_;Ke(()=>_t(ee,Ae,Me),C)}(_.shapeFlag&256||Ae&&Gn(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&Ke(y.a,C),y.isMounted=!0,_=k=R=null}},N=y.effect=new yi(z,()=>Ti(M),y.scope),M=y.update=()=>N.run();M.id=y.uid,hn(y,!0),M()},re=(y,_,k)=>{_.component=y;const R=y.vnode.props;y.vnode=_,y.next=null,vf(y,_.props,R,k),Sf(y,_.children,k),ro(),pa(),so()},he=(y,_,k,R,C,L,W,z,N=!1)=>{const M=y&&y.children,ee=y?y.shapeFlag:0,J=_.children,{patchFlag:te,shapeFlag:ie}=_;if(te>0){if(te&128){it(M,J,k,R,C,L,W,z,N);return}else if(te&256){$e(M,J,k,R,C,L,W,z,N);return}}ie&8?(ee&16&&V(M,C,L),J!==M&&d(k,J)):ee&16?ie&16?it(M,J,k,R,C,L,W,z,N):V(M,C,L,!0):(ee&8&&d(k,""),ie&16&&ae(J,k,R,C,L,W,z,N))},$e=(y,_,k,R,C,L,W,z,N)=>{y=y||Bn,_=_||Bn;const M=y.length,ee=_.length,J=Math.min(M,ee);let te;for(te=0;te<J;te++){const ie=_[te]=N?Qt(_[te]):Ot(_[te]);v(y[te],ie,k,null,C,L,W,z,N)}M>ee?V(y,C,L,!0,!1,J):ae(_,k,R,C,L,W,z,N,J)},it=(y,_,k,R,C,L,W,z,N)=>{let M=0;const ee=_.length;let J=y.length-1,te=ee-1;for(;M<=J&&M<=te;){const ie=y[M],ve=_[M]=N?Qt(_[M]):Ot(_[M]);if(uo(ie,ve))v(ie,ve,k,null,C,L,W,z,N);else break;M++}for(;M<=J&&M<=te;){const ie=y[J],ve=_[te]=N?Qt(_[te]):Ot(_[te]);if(uo(ie,ve))v(ie,ve,k,null,C,L,W,z,N);else break;J--,te--}if(M>J){if(M<=te){const ie=te+1,ve=ie<ee?_[ie].el:R;for(;M<=te;)v(null,_[M]=N?Qt(_[M]):Ot(_[M]),k,ve,C,L,W,z,N),M++}}else if(M>te)for(;M<=J;)rt(y[M],C,L,!0),M++;else{const ie=M,ve=M,Ae=new Map;for(M=ve;M<=te;M++){const at=_[M]=N?Qt(_[M]):Ot(_[M]);at.key!=null&&Ae.set(at.key,M)}let Ce,Me=0;const St=te-ve+1;let Mn=!1,oa=0;const co=new Array(St);for(M=0;M<St;M++)co[M]=0;for(M=ie;M<=J;M++){const at=y[M];if(Me>=St){rt(at,C,L,!0);continue}let Ft;if(at.key!=null)Ft=Ae.get(at.key);else for(Ce=ve;Ce<=te;Ce++)if(co[Ce-ve]===0&&uo(at,_[Ce])){Ft=Ce;break}Ft===void 0?rt(at,C,L,!0):(co[Ft-ve]=M+1,Ft>=oa?oa=Ft:Mn=!0,v(at,_[Ft],k,null,C,L,W,z,N),Me++)}const ra=Mn?Pf(co):Bn;for(Ce=ra.length-1,M=St-1;M>=0;M--){const at=ve+M,Ft=_[at],sa=at+1<ee?_[at+1].el:R;co[M]===0?v(null,Ft,k,sa,C,L,W,z,N):Mn&&(Ce<0||M!==ra[Ce]?Ge(Ft,k,sa,2):Ce--)}}},Ge=(y,_,k,R,C=null)=>{const{el:L,type:W,transition:z,children:N,shapeFlag:M}=y;if(M&6){Ge(y.component.subTree,_,k,R);return}if(M&128){y.suspense.move(_,k,R);return}if(M&64){W.move(y,_,k,pe);return}if(W===Pe){o(L,_,k);for(let J=0;J<N.length;J++)Ge(N[J],_,k,R);o(y.anchor,_,k);return}if(W===ns){$(y,_,k);return}if(R!==2&&M&1&&z)if(R===0)z.beforeEnter(L),o(L,_,k),Ke(()=>z.enter(L),C);else{const{leave:J,delayLeave:te,afterLeave:ie}=z,ve=()=>o(L,_,k),Ae=()=>{J(L,()=>{ve(),ie&&ie()})};te?te(L,ve,Ae):Ae()}else o(L,_,k)},rt=(y,_,k,R=!1,C=!1)=>{const{type:L,props:W,ref:z,children:N,dynamicChildren:M,shapeFlag:ee,patchFlag:J,dirs:te}=y;if(z!=null&&Fs(z,null,k,y,!0),ee&256){_.ctx.deactivate(y);return}const ie=ee&1&&te,ve=!Gn(y);let Ae;if(ve&&(Ae=W&&W.onVnodeBeforeUnmount)&&_t(Ae,_,y),ee&6)K(y.component,k,R);else{if(ee&128){y.suspense.unmount(k,R);return}ie&&dn(y,null,_,"beforeUnmount"),ee&64?y.type.remove(y,_,k,C,pe,R):M&&(L!==Pe||J>0&&J&64)?V(M,_,k,!1,!0):(L===Pe&&J&384||!C&&ee&16)&&V(N,_,k),R&&un(y)}(ve&&(Ae=W&&W.onVnodeUnmounted)||ie)&&Ke(()=>{Ae&&_t(Ae,_,y),ie&&dn(y,null,_,"unmounted")},k)},un=y=>{const{type:_,el:k,anchor:R,transition:C}=y;if(_===Pe){A(k,R);return}if(_===ns){q(y);return}const L=()=>{r(k),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(y.shapeFlag&1&&C&&!C.persisted){const{leave:W,delayLeave:z}=C,N=()=>W(k,L);z?z(y.el,L,N):N()}else L()},A=(y,_)=>{let k;for(;y!==_;)k=f(y),r(y),y=k;r(_)},K=(y,_,k)=>{const{bum:R,scope:C,update:L,subTree:W,um:z}=y;R&&Hn(R),C.stop(),L&&(L.active=!1,rt(W,y,_,k)),z&&Ke(z,_),Ke(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},V=(y,_,k,R=!1,C=!1,L=0)=>{for(let W=L;W<y.length;W++)rt(y[W],_,k,R,C)},Y=y=>y.shapeFlag&6?Y(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),we=(y,_,k)=>{y==null?_._vnode&&rt(_._vnode,null,null,!0):v(_._vnode||null,y,_,null,null,null,k),pa(),Ic(),_._vnode=y},pe={p:v,um:rt,m:Ge,r:un,mt:Ee,mc:ae,pc:he,pbc:_e,n:Y,o:e};let le,oe;return t&&([le,oe]=t(pe)),{render:we,hydrate:le,createApp:xf(we,le)}}function hn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mi(e,t,n=!1){const o=e.children,r=t.children;if(se(o)&&se(r))for(let i=0;i<o.length;i++){const a=o[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=Qt(r[i]),l.el=a.el),n||Mi(a,l))}}function Pf(e){const t=e.slice(),n=[0];let o,r,i,a,l;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(r=n[n.length-1],e[r]<u){t[o]=r,n.push(o);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<u?i=l+1:a=l;u<e[n[i]]&&(i>0&&(t[o]=n[i-1]),n[i]=o)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}const $f=e=>e.__isTeleport,bo=e=>e&&(e.disabled||e.disabled===""),xa=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Os=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},Af={__isTeleport:!0,process(e,t,n,o,r,i,a,l,c,u){const{mc:d,pc:h,pbc:f,o:{insert:m,querySelector:g,createText:w,createComment:v}}=u,T=bo(t.props);let{shapeFlag:x,children:D,dynamicChildren:$}=t;if(e==null){const q=t.el=w(""),O=t.anchor=w("");m(q,n,o),m(O,n,o);const B=t.target=Os(t.props,g),ne=t.targetAnchor=w("");B&&(m(ne,B),a=a||xa(B));const ae=(ge,_e)=>{x&16&&d(D,ge,_e,r,i,a,l,c)};T?ae(n,O):B&&ae(B,ne)}else{t.el=e.el;const q=t.anchor=e.anchor,O=t.target=e.target,B=t.targetAnchor=e.targetAnchor,ne=bo(e.props),ae=ne?n:O,ge=ne?q:B;if(a=a||xa(O),$?(f(e.dynamicChildren,$,ae,r,i,a,l),Mi(e,t,!0)):c||h(e,t,ae,ge,r,i,a,l,!1),T)ne||nr(t,n,q,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=Os(t.props,g);_e&&nr(t,_e,null,u,0)}else ne&&nr(t,O,B,u,1)}},remove(e,t,n,o,{um:r,o:{remove:i}},a){const{shapeFlag:l,children:c,anchor:u,targetAnchor:d,target:h,props:f}=e;if(h&&i(d),(a||!bo(f))&&(i(u),l&16))for(let m=0;m<c.length;m++){const g=c[m];r(g,t,n,!0,!!g.dynamicChildren)}},move:nr,hydrate:Cf};function nr(e,t,n,{o:{insert:o},m:r},i=2){i===0&&o(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:u,props:d}=e,h=i===2;if(h&&o(a,t,n),(!h||bo(d))&&c&16)for(let f=0;f<u.length;f++)r(u[f],t,n,2);h&&o(l,t,n)}function Cf(e,t,n,o,r,i,{o:{nextSibling:a,parentNode:l,querySelector:c}},u){const d=t.target=Os(t.props,c);if(d){const h=d._lpa||d.firstChild;if(t.shapeFlag&16)if(bo(t.props))t.anchor=u(a(e),t,l(e),n,o,r,i),t.targetAnchor=h;else{t.anchor=a(e);let f=h;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(h,t,d,n,o,r,i)}}return t.anchor&&a(t.anchor)}const Rf=Af,Pe=Symbol(void 0),Fi=Symbol(void 0),ln=Symbol(void 0),ns=Symbol(void 0),So=[];let Tt=null;function S(e=!1){So.push(Tt=e?null:[])}function Ef(){So.pop(),Tt=So[So.length-1]||null}let zo=1;function Da(e){zo+=e}function su(e){return e.dynamicChildren=zo>0?Tt||Bn:null,Ef(),zo>0&&Tt&&Tt.push(e),e}function U(e,t,n,o,r,i){return su(s(e,t,n,o,r,i,!0))}function j(e,t,n,o,r){return su(Z(e,t,n,o,r,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function uo(e,t){return e.type===t.type&&e.key===t.key}const Hr="__vInternal",iu=({key:e})=>e!=null?e:null,lr=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||xe(e)||ue(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,o=0,r=null,i=e===Pe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&iu(t),ref:t&&lr(t),scopeId:Vr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:o,dynamicProps:r,dynamicChildren:null,appContext:null};return l?(Oi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),zo>0&&!a&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const Z=Mf;function Mf(e,t=null,n=null,o=0,r=null,i=!1){if((!e||e===uf)&&(e=ln),Xn(e)){const l=$n(e,t,!0);return n&&Oi(l,n),zo>0&&!i&&Tt&&(l.shapeFlag&6?Tt[Tt.indexOf(e)]=l:Tt.push(l)),l.patchFlag|=-2,l}if(If(e)&&(e=e.__vccOpts),t){t=Q(t);let{class:l,style:c}=t;l&&!Ie(l)&&(t.class=Le(l)),ze(c)&&(Mc(c)&&!se(c)&&(c=ot({},c)),t.style=nt(c))}const a=Ie(e)?1:Bc(e)?128:$f(e)?64:ze(e)?4:ue(e)?2:0;return s(e,t,n,o,r,a,i,!0)}function Q(e){return e?Mc(e)||Hr in e?ot({},e):e:null}function $n(e,t,n=!1){const{props:o,ref:r,patchFlag:i,children:a}=e,l=t?br(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&iu(l),ref:t&&t.ref?n&&r?se(r)?r.concat(lr(t)):[r,lr(t)]:lr(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$n(e.ssContent),ssFallback:e.ssFallback&&$n(e.ssFallback),el:e.el,anchor:e.anchor}}function p(e=" ",t=0){return Z(Fi,null,e,t)}function me(e="",t=!1){return t?(S(),j(ln,null,e)):Z(ln,null,e)}function Ot(e){return e==null||typeof e=="boolean"?Z(ln):se(e)?Z(Pe,null,e.slice()):typeof e=="object"?Qt(e):Z(Fi,null,String(e))}function Qt(e){return e.el===null||e.memo?e:$n(e)}function Oi(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(o&65){const r=t.default;r&&(r._c&&(r._d=!1),Oi(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!(Hr in t)?t._ctx=Ze:r===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),o&64?(n=16,t=[p(t)]):n=8);e.children=t,e.shapeFlag|=n}function br(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const r in o)if(r==="class")t.class!==o.class&&(t.class=Le([t.class,o.class]));else if(r==="style")t.style=nt([t.style,o.style]);else if(Mr(r)){const i=t[r],a=o[r];a&&i!==a&&!(se(i)&&i.includes(a))&&(t[r]=i?[].concat(i,a):a)}else r!==""&&(t[r]=o[r])}return t}function _t(e,t,n,o=null){At(e,t,7,[n,o])}const Ff=ru();let Of=0;function zf(e,t,n){const o=e.type,r=(t?t.appContext:e.appContext)||Ff,i={uid:Of++,vnode:e,type:o,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eu(o,r),emitsOptions:Nc(o,r),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:o.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Kh.bind(null,i),e.ce&&e.ce(i),i}let Ue=null;const Cn=()=>Ue||Ze,eo=e=>{Ue=e,e.scope.on()},kn=()=>{Ue&&Ue.scope.off(),Ue=null};function au(e){return e.vnode.shapeFlag&4}let Lo=!1;function Lf(e,t=!1){Lo=t;const{props:n,children:o}=e.vnode,r=au(e);_f(e,n,r,t),bf(e,o);const i=r?jf(e,t):void 0;return Lo=!1,i}function jf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jr(new Proxy(e.ctx,hf));const{setup:o}=n;if(o){const r=e.setupContext=o.length>1?cu(e):null;eo(e),ro();const i=nn(o,e,0,[e.props,r]);if(so(),kn(),yc(i)){if(i.then(kn,kn),t)return i.then(a=>{Ta(e,a,t)}).catch(a=>{qr(a,e,0)});e.asyncDep=i}else Ta(e,i,t)}else lu(e,t)}function Ta(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ze(t)&&(e.setupState=Oc(t)),lu(e,n)}let Pa;function lu(e,t,n){const o=e.type;if(!e.render){if(!t&&Pa&&!o.render){const r=o.template||Ri(e).template;if(r){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,u=ot(ot({isCustomElement:i,delimiters:l},a),c);o.render=Pa(r,u)}}e.render=o.render||$t}eo(e),ro(),ff(e),so(),kn()}function qf(e){return new Proxy(e.attrs,{get(t,n){return yt(e,"get","$attrs"),t[n]}})}function cu(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=qf(e))},slots:e.slots,emit:e.emit,expose:t}}function Ur(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Oc(jr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vr)return vr[n](e)}}))}function zs(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return ue(e)&&"__vccOpts"in e}const P=(e,t)=>Vh(e,t,Lo);function Vf(){return Nf().slots}function Nf(){const e=Cn();return e.setupContext||(e.setupContext=cu(e))}function pt(e,t,n){const o=arguments.length;return o===2?ze(t)&&!se(t)?Xn(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Xn(n)&&(n=[n]),Z(e,t,n))}const Bf="3.2.39",Wf="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,$a=yn&&yn.createElement("template"),Hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const r=t?yn.createElementNS(Wf,e):yn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&r.setAttribute("multiple",o.multiple),r},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,r,i){const a=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{$a.innerHTML=o?`<svg>${e}</svg>`:e;const l=$a.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Uf(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Kf(e,t,n){const o=e.style,r=Ie(n);if(n&&!r){for(const i in n)Ls(o,i,n[i]);if(t&&!Ie(t))for(const i in t)n[i]==null&&Ls(o,i,"")}else{const i=o.display;r?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=i)}}const Aa=/\s*!important$/;function Ls(e,t,n){if(se(n))n.forEach(o=>Ls(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Gf(e,t);Aa.test(n)?e.setProperty(An(o),n.replace(Aa,""),"important"):e[o]=n}}const Ca=["Webkit","Moz","ms"],os={};function Gf(e,t){const n=os[t];if(n)return n;let o=It(t);if(o!=="filter"&&o in e)return os[t]=o;o=zr(o);for(let r=0;r<Ca.length;r++){const i=Ca[r]+o;if(i in e)return os[t]=i}return t}const Ra="http://www.w3.org/1999/xlink";function Jf(e,t,n,o,r){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n);else{const i=Kd(t);n==null||i&&!pc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Yf(e,t,n,o,r,i,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,r,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=pc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[uu,Zf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let js=0;const Qf=Promise.resolve(),Xf=()=>{js=0},ep=()=>js||(Qf.then(Xf),js=uu());function Ln(e,t,n,o){e.addEventListener(t,n,o)}function tp(e,t,n,o){e.removeEventListener(t,n,o)}function np(e,t,n,o,r=null){const i=e._vei||(e._vei={}),a=i[t];if(o&&a)a.value=o;else{const[l,c]=op(t);if(o){const u=i[t]=rp(o,r);Ln(e,l,u,c)}else a&&(tp(e,l,a,c),i[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function op(e){let t;if(Ea.test(e)){t={};let o;for(;o=e.match(Ea);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):An(e.slice(2)),t]}function rp(e,t){const n=o=>{const r=o.timeStamp||uu();(Zf||r>=n.attached-1)&&At(sp(o,n.value),t,5,[o])};return n.value=e,n.attached=ep(),n}function sp(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>r=>!r._stopped&&o&&o(r))}else return t}const Ma=/^on[a-z]/,ip=(e,t,n,o,r=!1,i,a,l,c)=>{t==="class"?Uf(e,o,r):t==="style"?Kf(e,n,o):Mr(t)?hi(t)||np(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ap(e,t,o,r))?Yf(e,t,o,i,a,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Jf(e,t,o,r))};function ap(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Ma.test(t)&&ue(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ma.test(t)&&Ie(n)?!1:t in e}const Fa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>Hn(t,n):t};function lp(e){e.target.composing=!0}function Oa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cp={created(e,{modifiers:{lazy:t,trim:n,number:o}},r){e._assign=Fa(r);const i=o||r.props&&r.props.type==="number";Ln(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=xs(l)),e._assign(l)}),n&&Ln(e,"change",()=>{e.value=e.value.trim()}),t||(Ln(e,"compositionstart",lp),Ln(e,"compositionend",Oa),Ln(e,"change",Oa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:r}},i){if(e._assign=Fa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(r||e.type==="number")&&xs(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},up={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},za=(e,t)=>n=>{if(!("key"in n))return;const o=An(n.key);if(t.some(r=>r===o||up[r]===o))return e(n)},du={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ho(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),ho(e,!0),o.enter(e)):o.leave(e,()=>{ho(e,!1)}):ho(e,t))},beforeUnmount(e,{value:t}){ho(e,t)}};function ho(e,t){e.style.display=t?e._vod:"none"}const dp=ot({patchProp:ip},Hf);let La;function hp(){return La||(La=Df(dp))}const fp=(...e)=>{const t=hp().createApp(...e),{mount:n}=t;return t.mount=o=>{const r=pp(o);if(!r)return;const i=t._component;!ue(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const a=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},t};function pp(e){return Ie(e)?document.querySelector(e):e}var mp=Object.defineProperty,ja=Object.getOwnPropertySymbols,gp=Object.prototype.hasOwnProperty,yp=Object.prototype.propertyIsEnumerable,qa=(e,t,n)=>t in e?mp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_p=(e,t)=>{for(var n in t||(t={}))gp.call(t,n)&&qa(e,n,t[n]);if(ja)for(var n of ja(t))yp.call(t,n)&&qa(e,n,t[n]);return e},hu="usehead",Ia="head:count",rs="data-head-attrs",fu="data-meta-body",vp=(e,t,n)=>{const o=n.createElement(e);for(const r of Object.keys(t))if(r==="body"&&t.body===!0)o.setAttribute(fu,"true");else{let i=t[r];if(r==="key"||i===!1)continue;r==="children"?o.textContent=i:o.setAttribute(r,i)}return o};function Va(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var wp=e=>{const t=["key","id","name","property"];for(const n of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(o!==void 0)return{name:n,value:o}}},bp=()=>{const e=F(hu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Sp=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],kp=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(b(t)),xp=e=>{const t=[],n=Object.keys(e);for(const o of n)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:_p({key:"default"},e[o])});break;default:if(Sp.includes(o)){const r=e[o];Array.isArray(r)?r.forEach(i=>{t.push({tag:o,props:i})}):r&&t.push({tag:o,props:r})}break}return t},Na=(e,t)=>{const n=e.getAttribute(rs);if(n)for(const r of n.split(","))r in t||e.removeAttribute(r);const o=[];for(const r in t){const i=t[r];i!=null&&(i===!1?e.removeAttribute(r):e.setAttribute(r,i),o.push(r))}o.length?e.setAttribute(rs,o.join(",")):e.removeAttribute(rs)},Dp=(e=window.document,t,n)=>{var o,r;const i=e.head,a=e.body;let l=i.querySelector(`meta[name="${Ia}"]`),c=a.querySelectorAll(`[${fu}]`);const u=l?Number(l.getAttribute("content")):0,d=[],h=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===t&&h.push(c[m]);if(l)for(let m=0,g=l.previousElementSibling;m<u;m++,g=(g==null?void 0:g.previousElementSibling)||null)((r=g==null?void 0:g.tagName)==null?void 0:r.toLowerCase())===t&&d.push(g);else l=e.createElement("meta"),l.setAttribute("name",Ia),l.setAttribute("content","0"),i.append(l);let f=n.map(m=>{var g;return{element:vp(m.tag,m.props,e),body:(g=m.props.body)!=null?g:!1}});f=f.filter(m=>{for(let g=0;g<d.length;g++){const w=d[g];if(Va(w,m.element))return d.splice(g,1),!1}for(let g=0;g<h.length;g++){const w=h[g];if(Va(w,m.element))return h.splice(g,1),!1}return!0}),h.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),d.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),f.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):i.insertBefore(m.element,l)}),l.setAttribute("content",""+(u-d.length+f.filter(m=>!m.body).length))},Tp=e=>{let t=[],n=new Set;e&&t.push(Rt(e));const o={install(r){r.config.globalProperties.$head=o,r.provide(hu,o)},get headTags(){const r=[],i=t.map(a=>b(a).titleTemplate).reverse().find(a=>a!=null);return t.forEach(a=>{xp(b(a)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=wp(c.props);if(u){let d=-1;for(let h=0;h<r.length;h++){const f=r[h],m=f.props[u.name],g=c.props[u.name];if(f.tag===c.tag&&m===g){d=h;break}}d!==-1&&r.splice(d,1)}}i&&c.tag==="title"&&(c.props.children=kp(i,c.props.children)),r.push(c)})}),r},addHeadObjs(r){t.push(r)},removeHeadObjs(r){t=t.filter(i=>i!==r)},updateDOM(r=window.document){let i,a={},l={};const c={};for(const d of o.headTags){if(d.tag==="title"){i=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(a,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(l,d.props);continue}c[d.tag]=c[d.tag]||[],c[d.tag].push(d)}i!==void 0&&(r.title=i),Na(r.documentElement,a),Na(r.body,l);const u=new Set([...Object.keys(c),...n]);for(const d of u)Dp(r,d,c[d]||[]);n.clear(),Object.keys(c).forEach(d=>n.add(d))}};return o},Pp=typeof window<"u",$p=e=>{const t=bp(),n=H(e);t.addHeadObjs(n),Pp&&(Nr(()=>{t.updateDOM()}),Wr(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const cr=Symbol("v-click-clicks"),jn=Symbol("v-click-clicks-elements"),qs=Symbol("v-click-clicks-order-map"),ur=Symbol("v-click-clicks-disabled"),pu=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),Ap=Symbol("slidev-route"),Cp=Symbol("slidev-slide-context"),Fn="slidev-vclick-target",ss="slidev-vclick-hidden",Rp="slidev-vclick-fade",is="slidev-vclick-hidden-explicitly",fo="slidev-vclick-current",or="slidev-vclick-prior";function Ba(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ep(e){return e!=null}function Mp(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(Ep))}const vn={theme:"default",title:"European Cruise 2022",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"european-cruise-2022",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},ke=vn;var hc;const on=(hc=ke.aspectRatio)!=null?hc:16/9;var fc;const xn=(fc=ke.canvasWidth)!=null?fc:980,mu=Math.round(xn/on),gu=P(()=>Mp(ke.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Fe({page:0,clicks:0});let Fp=[],Op=[];bt(Rn,"$syncUp",!0);bt(Rn,"$syncDown",!0);bt(Rn,"$paused",!1);bt(Rn,"$onSet",e=>Fp.push(e));bt(Rn,"$onPatch",e=>Op.push(e));bt(Rn,"$patch",async()=>!1);function yu(e,t,n=!1){const o=[];let r=!1,i=!1,a,l;const c=Fe(t);function u(m){o.push(m)}function d(m,g){clearTimeout(a),r=!0,c[m]=g,a=setTimeout(()=>r=!1,0)}function h(m){r||(clearTimeout(l),i=!0,Object.entries(m).forEach(([g,w])=>{c[g]=w}),l=setTimeout(()=>i=!1,0))}function f(m){let g;n?n&&window.addEventListener("storage",v=>{v&&v.key===m&&v.newValue&&h(JSON.parse(v.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",v=>h(v.data)));function w(){!n&&g&&!i?g.postMessage(be(c)):n&&!i&&window.localStorage.setItem(m,JSON.stringify(c)),r||o.forEach(v=>v(c))}if(fe(c,w,{deep:!0}),n){const v=window.localStorage.getItem(m);v&&h(JSON.parse(v))}}return{init:f,onPatch:u,patch:d,state:c}}const{init:zp,onPatch:Lp,patch:Wa,state:as}=yu(Rn,{page:1,clicks:0}),En=Fe({});let jp=[],qp=[];bt(En,"$syncUp",!0);bt(En,"$syncDown",!0);bt(En,"$paused",!1);bt(En,"$onSet",e=>jp.push(e));bt(En,"$onPatch",e=>qp.push(e));bt(En,"$patch",async()=>!1);const{init:Ip,onPatch:Vp,patch:_u,state:Sr}=yu(En,{},!1),Np="modulepreload",Bp=function(e){return"/"+e},Ha={},io=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=Bp(r),r in Ha)return;Ha[r]=!0;const i=r.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Np,i||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),i)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};var Ua;const Kt=typeof window<"u",Wp=e=>typeof e<"u",Hp=Object.prototype.toString,kr=e=>typeof e=="function",Up=e=>typeof e=="number",vu=e=>typeof e=="string",Is=e=>Hp.call(e)==="[object Object]",Vs=()=>+Date.now(),Dn=()=>{};Kt&&((Ua=window==null?void 0:window.navigator)==null?void 0:Ua.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ft(e){return typeof e=="function"?e():b(e)}function Kp(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const wu=e=>e();function Gp(e=wu){const t=H(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...i)=>{t.value&&e(...i)}}}function Jp(e){return e}function Yp(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",r=e.slice(o.length),i=parseFloat(o)+t;return Number.isNaN(i)?e:i+r}function Zp(e,t){let n,o,r;const i=H(!0),a=()=>{i.value=!0,r()};fe(e,a,{flush:"sync"});const l=kr(t)?t:t.get,c=kr(t)?void 0:t.set,u=zc((d,h)=>(o=d,r=h,{get(){return i.value&&(n=l(),i.value=!1),o(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cn(e){return bc()?(Sc(e),!0):!1}function Qp(e){if(!xe(e))return Fe(e);const t=new Proxy({},{get(n,o,r){return b(Reflect.get(e.value,o,r))},set(n,o,r){return xe(e.value[o])&&!xe(r)?e.value[o].value=r:e.value[o]=r,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fe(t)}function Xp(e){return typeof e=="function"?P(e):H(e)}var em=Object.defineProperty,tm=Object.defineProperties,nm=Object.getOwnPropertyDescriptors,Ka=Object.getOwnPropertySymbols,om=Object.prototype.hasOwnProperty,rm=Object.prototype.propertyIsEnumerable,Ga=(e,t,n)=>t in e?em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sm=(e,t)=>{for(var n in t||(t={}))om.call(t,n)&&Ga(e,n,t[n]);if(Ka)for(var n of Ka(t))rm.call(t,n)&&Ga(e,n,t[n]);return e},im=(e,t)=>tm(e,nm(t));function am(e){if(!xe(e))return Lh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=zc(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const r=[...e.value];r[n]=o,e.value=r}else{const r=im(sm({},e.value),{[n]:o});Object.setPrototypeOf(r,e.value),e.value=r}}}));return t}function lm(e,t=!0){Cn()?Jc(e):t?e():Ye(e)}function bu(e,t=!0){Cn()?Ho(e):t?e():Ye(e)}function cm(e){Cn()&&Ai(e)}function um(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:r=!1}=n;let i=null;const a=H(!1);function l(){i&&(clearInterval(i),i=null)}function c(){a.value=!1,l()}function u(){b(t)<=0||(a.value=!0,r&&e(),l(),i=setInterval(e,ft(t)))}if(o&&Kt&&u(),xe(t)){const d=fe(t,()=>{a.value&&Kt&&u()});cn(d)}return cn(c),{isActive:a,pause:c,resume:u}}function Su(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,r=xe(e),i=H(e);function a(l){if(arguments.length)return i.value=l,i.value;{const c=ft(n);return i.value=i.value===c?ft(o):c,i.value}}return r?a:[i,a]}var Ja=Object.getOwnPropertySymbols,dm=Object.prototype.hasOwnProperty,hm=Object.prototype.propertyIsEnumerable,fm=(e,t)=>{var n={};for(var o in e)dm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ja)for(var o of Ja(e))t.indexOf(o)<0&&hm.call(e,o)&&(n[o]=e[o]);return n};function pm(e,t,n={}){const o=n,{eventFilter:r=wu}=o,i=fm(o,["eventFilter"]);return fe(e,Kp(r,t),i)}var mm=Object.defineProperty,gm=Object.defineProperties,ym=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertySymbols,ku=Object.prototype.hasOwnProperty,xu=Object.prototype.propertyIsEnumerable,Ya=(e,t,n)=>t in e?mm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_m=(e,t)=>{for(var n in t||(t={}))ku.call(t,n)&&Ya(e,n,t[n]);if(xr)for(var n of xr(t))xu.call(t,n)&&Ya(e,n,t[n]);return e},vm=(e,t)=>gm(e,ym(t)),wm=(e,t)=>{var n={};for(var o in e)ku.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&xr)for(var o of xr(e))t.indexOf(o)<0&&xu.call(e,o)&&(n[o]=e[o]);return n};function bm(e,t,n={}){const o=n,{eventFilter:r}=o,i=wm(o,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:u}=Gp(r);return{stop:pm(e,t,vm(_m({},i),{eventFilter:a})),pause:l,resume:c,isActive:u}}function Pt(e){var t;const n=ft(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Qe=Kt?window:void 0,Sm=Kt?window.document:void 0;function de(...e){let t,n,o,r;if(vu(e[0])?([n,o,r]=e,t=Qe):[t,n,o,r]=e,!t)return Dn;let i=Dn;const a=fe(()=>Pt(t),c=>{i(),c&&(c.addEventListener(n,o,r),i=()=>{c.removeEventListener(n,o,r),i=Dn})},{immediate:!0,flush:"post"}),l=()=>{a(),i()};return cn(l),l}function km(e,t,n={}){const{window:o=Qe,ignore:r,capture:i=!0,detectIframe:a=!1}=n;if(!o)return;const l=H(!0);let c;const u=f=>{o.clearTimeout(c);const m=Pt(e),g=f.composedPath();!m||m===f.target||g.includes(m)||!l.value||r&&r.length>0&&r.some(w=>{const v=Pt(w);return v&&(f.target===v||g.includes(v))})||t(f)},d=[de(o,"click",u,{passive:!0,capture:i}),de(o,"pointerdown",f=>{const m=Pt(e);l.value=!!m&&!f.composedPath().includes(m)},{passive:!0}),de(o,"pointerup",f=>{if(f.button===0){const m=f.composedPath();f.composedPath=()=>m,c=o.setTimeout(()=>u(f),50)}},{passive:!0}),a&&de(o,"blur",f=>{var m;const g=Pt(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const xm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Dm(e,t,n={}){const{target:o=Qe,eventName:r="keydown",passive:i=!1}=n,a=xm(e);return de(o,r,c=>{a(c)&&t(c)},i)}function Tm(e={}){const{window:t=Qe}=e,n=Zp(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(de(t,"blur",n.trigger,!0),de(t,"focus",n.trigger,!0)),n}function Kr(e,t=!1){const n=H(),o=()=>n.value=Boolean(e());return o(),bu(o,t),n}function qn(e,t={}){const{window:n=Qe}=t,o=Kr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=H(!1),a=()=>{!o.value||(r||(r=n.matchMedia(e)),i.value=r.matches)};return lm(()=>{a(),r&&("addEventListener"in r?r.addEventListener("change",a):r.addListener(a),cn(()=>{"removeEventListener"in r?r.removeEventListener("change",a):r.removeListener(a)}))}),i}const Pm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $m=Object.defineProperty,Za=Object.getOwnPropertySymbols,Am=Object.prototype.hasOwnProperty,Cm=Object.prototype.propertyIsEnumerable,Qa=(e,t,n)=>t in e?$m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rm=(e,t)=>{for(var n in t||(t={}))Am.call(t,n)&&Qa(e,n,t[n]);if(Za)for(var n of Za(t))Cm.call(t,n)&&Qa(e,n,t[n]);return e};function Em(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Yp(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Qe}=t;function r(l){return o?o.matchMedia(l).matches:!1}const i=l=>qn(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>i(c),enumerable:!0,configurable:!0}),l),{});return Rm({greater(l){return qn(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:i,smaller(l){return qn(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return qn(`(max-width: ${n(l)})`,t)},between(l,c){return qn(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return r(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return r(`(min-width: ${n(l)})`)},isSmaller(l){return r(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return r(`(max-width: ${n(l)})`)},isInBetween(l,c){return r(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},a)}function Mm(e){return JSON.parse(JSON.stringify(e))}const Ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bs="__vueuse_ssr_handlers__";Ns[Bs]=Ns[Bs]||{};const Fm=Ns[Bs];function Om(e,t){return Fm[e]||t}function zm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Lm=Object.defineProperty,Xa=Object.getOwnPropertySymbols,jm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,el=(e,t,n)=>t in e?Lm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tl=(e,t)=>{for(var n in t||(t={}))jm.call(t,n)&&el(e,n,t[n]);if(Xa)for(var n of Xa(t))qm.call(t,n)&&el(e,n,t[n]);return e};const Im={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Mt(e,t,n,o={}){var r;const{flush:i="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:h=Qe,eventFilter:f,onError:m=B=>{console.error(B)}}=o,g=(d?Rt:H)(t);if(!n)try{n=Om("getDefaultStorage",()=>{var B;return(B=Qe)==null?void 0:B.localStorage})()}catch(B){m(B)}if(!n)return g;const w=ft(t),v=zm(w),T=(r=o.serializer)!=null?r:Im[v],{pause:x,resume:D}=bm(g,()=>$(g.value),{flush:i,deep:a,eventFilter:f});return h&&l&&de(h,"storage",O),O(),g;function $(B){try{B==null?n.removeItem(e):n.setItem(e,T.write(B))}catch(ne){m(ne)}}function q(B){if(!(B&&B.key!==e)){x();try{const ne=B?B.newValue:n.getItem(e);if(ne==null)return c&&w!==null&&n.setItem(e,T.write(w)),w;if(!B&&u){const ae=T.read(ne);return kr(u)?u(ae,w):v==="object"&&!Array.isArray(ae)?tl(tl({},w),ae):ae}else return typeof ne!="string"?ne:T.read(ne)}catch(ne){m(ne)}finally{D()}}}function O(B){B&&B.key!==e||(g.value=q(B))}}function Vm(e){return qn("(prefers-color-scheme: dark)",e)}var Nm=Object.defineProperty,Bm=Object.defineProperties,Wm=Object.getOwnPropertyDescriptors,nl=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,Um=Object.prototype.propertyIsEnumerable,ol=(e,t,n)=>t in e?Nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Km=(e,t)=>{for(var n in t||(t={}))Hm.call(t,n)&&ol(e,n,t[n]);if(nl)for(var n of nl(t))Um.call(t,n)&&ol(e,n,t[n]);return e},Gm=(e,t)=>Bm(e,Wm(t));function mP(e,t={}){var n,o,r;const i=(n=t.draggingElement)!=null?n:Qe,a=(o=t.handle)!=null?o:e,l=H((r=ft(t.initialValue))!=null?r:{x:0,y:0}),c=H(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{ft(t.preventDefault)&&g.preventDefault(),ft(t.stopPropagation)&&g.stopPropagation()},h=g=>{var w;if(!u(g)||ft(t.exact)&&g.target!==ft(e))return;const v=ft(e).getBoundingClientRect(),T={x:g.pageX-v.left,y:g.pageY-v.top};((w=t.onStart)==null?void 0:w.call(t,T,g))!==!1&&(c.value=T,d(g))},f=g=>{var w;!u(g)||!c.value||(l.value={x:g.pageX-c.value.x,y:g.pageY-c.value.y},(w=t.onMove)==null||w.call(t,l.value,g),d(g))},m=g=>{var w;!u(g)||!c.value||(c.value=void 0,(w=t.onEnd)==null||w.call(t,l.value,g),d(g))};return Kt&&(de(a,"pointerdown",h,!0),de(i,"pointermove",f,!0),de(i,"pointerup",m,!0)),Gm(Km({},am(l)),{position:l,isDragging:P(()=>!!c.value),style:P(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var rl=Object.getOwnPropertySymbols,Jm=Object.prototype.hasOwnProperty,Ym=Object.prototype.propertyIsEnumerable,Zm=(e,t)=>{var n={};for(var o in e)Jm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&rl)for(var o of rl(e))t.indexOf(o)<0&&Ym.call(e,o)&&(n[o]=e[o]);return n};function Qm(e,t,n={}){const o=n,{window:r=Qe}=o,i=Zm(o,["window"]);let a;const l=Kr(()=>r&&"ResizeObserver"in r),c=()=>{a&&(a.disconnect(),a=void 0)},u=fe(()=>Pt(e),h=>{c(),l.value&&r&&h&&(a=new ResizeObserver(t),a.observe(h,i))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}function Xm(e,t={}){const{immediate:n=!0,window:o=Qe}=t,r=H(!1);let i=null;function a(){!r.value||!o||(e(),i=o.requestAnimationFrame(a))}function l(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&l(),cn(c),{isActive:r,pause:c,resume:l}}function e0(e,t={width:0,height:0},n={}){const{box:o="content-box"}=n,r=H(t.width),i=H(t.height);return Qm(e,([a])=>{const l=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;l?(r.value=l.reduce((c,{inlineSize:u})=>c+u,0),i.value=l.reduce((c,{blockSize:u})=>c+u,0)):(r.value=a.contentRect.width,i.value=a.contentRect.height)},n),fe(()=>Pt(e),a=>{r.value=a?t.width:0,i.value=a?t.height:0}),{width:r,height:i}}const sl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function t0(e,t={}){const{document:n=Sm,autoExit:o=!1}=t,r=e||(n==null?void 0:n.querySelector("html")),i=H(!1);let a=sl[0];const l=Kr(()=>{if(n){for(const w of sl)if(w[1]in n)return a=w,!0}else return!1;return!1}),[c,u,d,,h]=a;async function f(){!l.value||(n!=null&&n[d]&&await n[u](),i.value=!1)}async function m(){if(!l.value)return;await f();const w=Pt(r);w&&(await w[c](),i.value=!0)}async function g(){i.value?await f():await m()}return n&&de(n,h,()=>{i.value=!!(n!=null&&n[d])},!1),o&&cn(f),{isSupported:l,isFullscreen:i,enter:m,exit:f,toggle:g}}function n0(e,t,n={}){const{root:o,rootMargin:r="0px",threshold:i=.1,window:a=Qe}=n,l=Kr(()=>a&&"IntersectionObserver"in a);let c=Dn;const u=l.value?fe(()=>({el:Pt(e),root:Pt(o)}),({el:h,root:f})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:f,rootMargin:r,threshold:i});m.observe(h),c=()=>{m.disconnect(),c=Dn}},{immediate:!0,flush:"post"}):Dn,d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}const o0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function r0(e={}){const{reactive:t=!1,target:n=Qe,aliasMap:o=o0,passive:r=!0,onEventFired:i=Dn}=e,a=Fe(new Set),l={toJSON(){return{}},current:a},c=t?Fe(l):l,u=new Set,d=new Set;function h(w,v){w in c&&(t?c[w]=v:c[w].value=v)}function f(){for(const w of d)h(w,!1)}function m(w,v){var T,x;const D=(T=w.key)==null?void 0:T.toLowerCase(),q=[(x=w.code)==null?void 0:x.toLowerCase(),D].filter(Boolean);D&&(v?a.add(D):a.delete(D));for(const O of q)d.add(O),h(O,v);D==="meta"&&!v?(u.forEach(O=>{a.delete(O),h(O,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&v&&[...a,...q].forEach(O=>u.add(O))}de(n,"keydown",w=>(m(w,!0),i(w)),{passive:r}),de(n,"keyup",w=>(m(w,!1),i(w)),{passive:r}),de("blur",f,{passive:!0}),de("focus",f,{passive:!0});const g=new Proxy(c,{get(w,v,T){if(typeof v!="string")return Reflect.get(w,v,T);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const D=v.split(/[+_-]/g).map($=>$.trim());c[v]=P(()=>D.every($=>b(g[$])))}else c[v]=H(!1);const x=Reflect.get(w,v,T);return t?b(x):x}});return g}function gP(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:r={x:0,y:0},window:i=Qe,eventFilter:a}=e,l=H(r.x),c=H(r.y),u=H(null),d=w=>{t==="page"?(l.value=w.pageX,c.value=w.pageY):t==="client"&&(l.value=w.clientX,c.value=w.clientY),u.value="mouse"},h=()=>{l.value=r.x,c.value=r.y},f=w=>{if(w.touches.length>0){const v=w.touches[0];t==="page"?(l.value=v.pageX,c.value=v.pageY):t==="client"&&(l.value=v.clientX,c.value=v.clientY),u.value="touch"}},m=w=>a===void 0?d(w):a(()=>d(w),{}),g=w=>a===void 0?f(w):a(()=>f(w),{});return i&&(de(i,"mousemove",m,{passive:!0}),de(i,"dragover",m,{passive:!0}),n&&(de(i,"touchstart",g,{passive:!0}),de(i,"touchmove",g,{passive:!0}),o&&de(i,"touchend",h,{passive:!0}))),{x:l,y:c,sourceType:u}}var Ht;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ht||(Ht={}));function s0(e,t={}){const n=Xp(e),{threshold:o=50,onSwipe:r,onSwipeEnd:i,onSwipeStart:a}=t,l=Fe({x:0,y:0}),c=(O,B)=>{l.x=O,l.y=B},u=Fe({x:0,y:0}),d=(O,B)=>{u.x=O,u.y=B},h=P(()=>l.x-u.x),f=P(()=>l.y-u.y),{max:m,abs:g}=Math,w=P(()=>m(g(h.value),g(f.value))>=o),v=H(!1),T=H(!1),x=P(()=>w.value?g(h.value)>g(f.value)?h.value>0?Ht.LEFT:Ht.RIGHT:f.value>0?Ht.UP:Ht.DOWN:Ht.NONE),D=O=>t.pointerTypes?t.pointerTypes.includes(O.pointerType):!0,$=[de(e,"pointerdown",O=>{var B,ne;if(!D(O))return;T.value=!0,(ne=(B=n.value)==null?void 0:B.style)==null||ne.setProperty("touch-action","none");const ae=O.target;ae==null||ae.setPointerCapture(O.pointerId);const{clientX:ge,clientY:_e}=O;c(ge,_e),d(ge,_e),a==null||a(O)}),de(e,"pointermove",O=>{if(!D(O)||!T.value)return;const{clientX:B,clientY:ne}=O;d(B,ne),!v.value&&w.value&&(v.value=!0),v.value&&(r==null||r(O))}),de(e,"pointerup",O=>{var B,ne;!D(O)||(v.value&&(i==null||i(O,x.value)),T.value=!1,v.value=!1,(ne=(B=n.value)==null?void 0:B.style)==null||ne.setProperty("touch-action","initial"))})],q=()=>$.forEach(O=>O());return{isSwiping:Vn(v),direction:Vn(x),posStart:Vn(l),posEnd:Vn(u),distanceX:h,distanceY:f,stop:q}}var i0=Object.defineProperty,il=Object.getOwnPropertySymbols,a0=Object.prototype.hasOwnProperty,l0=Object.prototype.propertyIsEnumerable,al=(e,t,n)=>t in e?i0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c0=(e,t)=>{for(var n in t||(t={}))a0.call(t,n)&&al(e,n,t[n]);if(il)for(var n of il(t))l0.call(t,n)&&al(e,n,t[n]);return e};function yP(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:r="requestAnimationFrame"}=e,i=H(Vs()+n),a=()=>i.value=Vs()+n,l=r==="requestAnimationFrame"?Xm(a,{immediate:o}):um(a,r,{immediate:o});return t?c0({timestamp:i},l):i}var u0=Object.defineProperty,ll=Object.getOwnPropertySymbols,d0=Object.prototype.hasOwnProperty,h0=Object.prototype.propertyIsEnumerable,cl=(e,t,n)=>t in e?u0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f0=(e,t)=>{for(var n in t||(t={}))d0.call(t,n)&&cl(e,n,t[n]);if(ll)for(var n of ll(t))h0.call(t,n)&&cl(e,n,t[n]);return e};const p0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};f0({linear:Jp},p0);function jt(e,t,n,o={}){var r,i,a;const{clone:l=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:h}=o,f=Cn(),m=n||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((a=(i=f==null?void 0:f.proxy)==null?void 0:i.$emit)==null?void 0:a.bind(f==null?void 0:f.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const w=T=>l?kr(l)?l(T):Mm(T):T,v=()=>Wp(e[t])?w(e[t]):h;if(c){const T=v(),x=H(T);return fe(()=>e[t],D=>x.value=w(D)),fe(x,D=>{(D!==e[t]||d)&&m(g,D)},{deep:d}),x}else return P({get(){return v()},set(T){m(g,T)}})}function _P({window:e=Qe}={}){if(!e)return H(!1);const t=H(e.document.hasFocus());return de(e,"blur",()=>{t.value=!1}),de(e,"focus",()=>{t.value=!0}),t}function m0(e={}){const{window:t=Qe,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:r=!0,includeScrollbar:i=!0}=e,a=H(n),l=H(o),c=()=>{t&&(i?(a.value=t.innerWidth,l.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return c(),bu(c),de("resize",c,{passive:!0}),r&&de("orientationchange",c,{passive:!0}),{width:a,height:l}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof window<"u";function g0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const Te=Object.assign;function ls(e,t){const n={};for(const o in t){const r=t[o];n[o]=Et(r)?r.map(e):e(r)}return n}const ko=()=>{},Et=Array.isArray,y0=/\/$/,_0=e=>e.replace(y0,"");function cs(e,t,n="/"){let o,r={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(o=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),r=e(i)),l>-1&&(o=o||t.slice(0,l),a=t.slice(l,t.length)),o=S0(o!=null?o:t,n),{fullPath:o+(i&&"?")+i+a,path:o,query:r,hash:a}}function v0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ul(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function w0(e,t,n){const o=t.matched.length-1,r=n.matched.length-1;return o>-1&&o===r&&to(t.matched[o],n.matched[r])&&Du(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function to(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Du(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b0(e[n],t[n]))return!1;return!0}function b0(e,t){return Et(e)?dl(e,t):Et(t)?dl(t,e):e===t}function dl(e,t){return Et(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function S0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let r=n.length-1,i,a;for(i=0;i<o.length;i++)if(a=o[i],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+o.slice(i-(i===o.length?1:0)).join("/")}var jo;(function(e){e.pop="pop",e.push="push"})(jo||(jo={}));var xo;(function(e){e.back="back",e.forward="forward",e.unknown=""})(xo||(xo={}));function k0(e){if(!e)if(In){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_0(e)}const x0=/^[^#]+#/;function D0(e,t){return e.replace(x0,"#")+t}function T0(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function P0(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=T0(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function hl(e,t){return(history.state?history.state.position-t:-1)+e}const Ws=new Map;function $0(e,t){Ws.set(e,t)}function A0(e){const t=Ws.get(e);return Ws.delete(e),t}let C0=()=>location.protocol+"//"+location.host;function Tu(e,t){const{pathname:n,search:o,hash:r}=t,i=e.indexOf("#");if(i>-1){let l=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),ul(c,"")}return ul(n,e)+o+r}function R0(e,t,n,o){let r=[],i=[],a=null;const l=({state:f})=>{const m=Tu(e,location),g=n.value,w=t.value;let v=0;if(f){if(n.value=m,t.value=f,a&&a===g){a=null;return}v=w?f.position-w.position:0}else o(m);r.forEach(T=>{T(n.value,g,{delta:v,type:jo.pop,direction:v?v>0?xo.forward:xo.back:xo.unknown})})};function c(){a=n.value}function u(f){r.push(f);const m=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return i.push(m),m}function d(){const{history:f}=window;!f.state||f.replaceState(Te({},f.state,{scroll:Gr()}),"")}function h(){for(const f of i)f();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:h}}function fl(e,t,n,o=!1,r=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:r?Gr():null}}function E0(e){const{history:t,location:n}=window,o={value:Tu(e,n)},r={value:t.state};r.value||i(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const h=e.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:C0()+e+c;try{t[d?"replaceState":"pushState"](u,"",f),r.value=u}catch(m){console.error(m),n[d?"replace":"assign"](f)}}function a(c,u){const d=Te({},t.state,fl(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),o.value=c}function l(c,u){const d=Te({},r.value,t.state,{forward:c,scroll:Gr()});i(d.current,d,!0);const h=Te({},fl(o.value,c,null),{position:d.position+1},u);i(c,h,!1),o.value=c}return{location:o,state:r,push:l,replace:a}}function M0(e){e=k0(e);const t=E0(e),n=R0(e,t.state,t.location,t.replace);function o(i,a=!0){a||n.pauseListeners(),history.go(i)}const r=Te({location:"",base:e,go:o,createHref:D0.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function F0(e){return typeof e=="string"||e&&typeof e=="object"}function Pu(e){return typeof e=="string"||typeof e=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$u=Symbol("");var pl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pl||(pl={}));function no(e,t){return Te(new Error,{type:e,[$u]:!0},t)}function Vt(e,t){return e instanceof Error&&$u in e&&(t==null||!!(e.type&t))}const ml="[^/]+?",O0={sensitive:!1,strict:!1,start:!0,end:!0},z0=/[.+*?^${}()[\]/\\]/g;function L0(e,t){const n=Te({},O0,t),o=[];let r=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const f=u[h];let m=40+(n.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(z0,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:w,optional:v,regexp:T}=f;i.push({name:g,repeatable:w,optional:v});const x=T||ml;if(x!==ml){m+=10;try{new RegExp(`(${x})`)}catch($){throw new Error(`Invalid custom RegExp for param "${g}" (${x}): `+$.message)}}let D=w?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(D=v&&u.length<2?`(?:/${D})`:"/"+D),v&&(D+="?"),r+=D,m+=20,v&&(m+=-8),w&&(m+=-20),x===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(a),h={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",g=i[f-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(u){let d="",h=!1;for(const f of e){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:v}=m,T=g in u?u[g]:"";if(Et(T)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const x=Et(T)?T.join("/"):T;if(!x)if(v)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);d+=x}}return d||"/"}return{re:a,score:o,keys:i,parse:l,stringify:c}}function j0(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function q0(e,t){let n=0;const o=e.score,r=t.score;for(;n<o.length&&n<r.length;){const i=j0(o[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-o.length)===1){if(gl(o))return 1;if(gl(r))return-1}return r.length-o.length}function gl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const I0={type:0,value:""},V0=/[a-zA-Z0-9_]/;function N0(e){if(!e)return[[]];if(e==="/")return[[I0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const r=[];let i;function a(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),a()):c===":"?(h(),n=1):f();break;case 4:f(),n=o;break;case 1:c==="("?n=2:V0.test(c)?f():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),h(),a(),r}function B0(e,t,n){const o=L0(N0(e.path),n),r=Te(o,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function W0(e,t){const n=[],o=new Map;t=vl({strict:!1,end:!0,sensitive:!1},t);function r(d){return o.get(d)}function i(d,h,f){const m=!f,g=H0(d);g.aliasOf=f&&f.record;const w=vl(t,d),v=[g];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const $ of D)v.push(Te({},g,{components:f?f.record.components:g.components,path:$,aliasOf:f?f.record:g}))}let T,x;for(const D of v){const{path:$}=D;if(h&&$[0]!=="/"){const q=h.record.path,O=q[q.length-1]==="/"?"":"/";D.path=h.record.path+($&&O+$)}if(T=B0(D,h,w),f?f.alias.push(T):(x=x||T,x!==T&&x.alias.push(T),m&&d.name&&!_l(T)&&a(d.name)),g.children){const q=g.children;for(let O=0;O<q.length;O++)i(q[O],T,f&&f.children[O])}f=f||T,c(T)}return x?()=>{a(x)}:ko}function a(d){if(Pu(d)){const h=o.get(d);h&&(o.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function c(d){let h=0;for(;h<n.length&&q0(d,n[h])>=0&&(d.record.path!==n[h].record.path||!Au(d,n[h]));)h++;n.splice(h,0,d),d.record.name&&!_l(d)&&o.set(d.record.name,d)}function u(d,h){let f,m={},g,w;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw no(1,{location:d});w=f.record.name,m=Te(yl(h.params,f.keys.filter(x=>!x.optional).map(x=>x.name)),d.params&&yl(d.params,f.keys.map(x=>x.name))),g=f.stringify(m)}else if("path"in d)g=d.path,f=n.find(x=>x.re.test(g)),f&&(m=f.parse(g),w=f.record.name);else{if(f=h.name?o.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw no(1,{location:d,currentLocation:h});w=f.record.name,m=Te({},h.params,d.params),g=f.stringify(m)}const v=[];let T=f;for(;T;)v.unshift(T.record),T=T.parent;return{name:w,path:g,params:m,matched:v,meta:K0(v)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:r}}function yl(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function H0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:U0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function U0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function _l(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function K0(e){return e.reduce((t,n)=>Te(t,n.meta),{})}function vl(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Au(e,t){return t.children.some(n=>n===e||Au(e,n))}const Cu=/#/g,G0=/&/g,J0=/\//g,Y0=/=/g,Z0=/\?/g,Ru=/\+/g,Q0=/%5B/g,X0=/%5D/g,Eu=/%5E/g,e1=/%60/g,Mu=/%7B/g,t1=/%7C/g,Fu=/%7D/g,n1=/%20/g;function zi(e){return encodeURI(""+e).replace(t1,"|").replace(Q0,"[").replace(X0,"]")}function o1(e){return zi(e).replace(Mu,"{").replace(Fu,"}").replace(Eu,"^")}function Hs(e){return zi(e).replace(Ru,"%2B").replace(n1,"+").replace(Cu,"%23").replace(G0,"%26").replace(e1,"`").replace(Mu,"{").replace(Fu,"}").replace(Eu,"^")}function r1(e){return Hs(e).replace(Y0,"%3D")}function s1(e){return zi(e).replace(Cu,"%23").replace(Z0,"%3F")}function i1(e){return e==null?"":s1(e).replace(J0,"%2F")}function Dr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function a1(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<o.length;++r){const i=o[r].replace(Ru," "),a=i.indexOf("="),l=Dr(a<0?i:i.slice(0,a)),c=a<0?null:Dr(i.slice(a+1));if(l in t){let u=t[l];Et(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function wl(e){let t="";for(let n in e){const o=e[n];if(n=r1(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(o)?o.map(i=>i&&Hs(i)):[o&&Hs(o)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function l1(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Et(o)?o.map(r=>r==null?null:""+r):o==null?o:""+o)}return t}const c1=Symbol(""),bl=Symbol(""),Li=Symbol(""),Ou=Symbol(""),Us=Symbol("");function po(){let e=[];function t(o){return e.push(o),()=>{const r=e.indexOf(o);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Xt(e,t,n,o,r){const i=o&&(o.enterCallbacks[r]=o.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(no(4,{from:n,to:t})):h instanceof Error?l(h):F0(h)?l(no(2,{from:t,to:h})):(i&&o.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),a())},u=e.call(o&&o.instances[r],t,n,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function us(e,t,n,o){const r=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(u1(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Xt(u,n,o,i,a))}else{let c=l();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=g0(u)?u.default:u;i.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Xt(f,n,o,i,a)()}))}}return r}function u1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Sl(e){const t=F(Li),n=F(Ou),o=P(()=>t.resolve(b(e.to))),r=P(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],h=n.matched;if(!d||!h.length)return-1;const f=h.findIndex(to.bind(null,d));if(f>-1)return f;const m=kl(c[u-2]);return u>1&&kl(d)===m&&h[h.length-1].path!==m?h.findIndex(to.bind(null,c[u-2])):f}),i=P(()=>r.value>-1&&p1(n.params,o.value.params)),a=P(()=>r.value>-1&&r.value===n.matched.length-1&&Du(n.params,o.value.params));function l(c={}){return f1(c)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(ko):Promise.resolve()}return{route:o,href:P(()=>o.value.href),isActive:i,isExactActive:a,navigate:l}}const d1=De({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Sl,setup(e,{slots:t}){const n=Fe(Sl(e)),{options:o}=F(Li),r=P(()=>({[xl(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[xl(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:pt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),h1=d1;function f1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function p1(e,t){for(const n in t){const o=t[n],r=e[n];if(typeof o=="string"){if(o!==r)return!1}else if(!Et(r)||r.length!==o.length||o.some((i,a)=>i!==r[a]))return!1}return!0}function kl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xl=(e,t,n)=>e!=null?e:t!=null?t:n,m1=De({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=F(Us),r=P(()=>e.route||o.value),i=F(bl,0),a=P(()=>{let u=b(i);const{matched:d}=r.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),l=P(()=>r.value.matched[a.value]);ht(bl,P(()=>a.value+1)),ht(c1,l),ht(Us,r);const c=H();return fe(()=>[c.value,l.value,e.name],([u,d,h],[f,m,g])=>{d&&(d.instances[h]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!to(d,m)||!f)&&(d.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=r.value,d=e.name,h=l.value,f=h&&h.components[d];if(!f)return Dl(n.default,{Component:f,route:u});const m=h.props[d],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,v=pt(f,Te({},g,t,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[d]=null)},ref:c}));return Dl(n.default,{Component:v,route:u})||v}}});function Dl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const g1=m1;function y1(e){const t=W0(e.routes,e),n=e.parseQuery||a1,o=e.stringifyQuery||wl,r=e.history,i=po(),a=po(),l=po(),c=Rt(Zt);let u=Zt;In&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ls.bind(null,A=>""+A),h=ls.bind(null,i1),f=ls.bind(null,Dr);function m(A,K){let V,Y;return Pu(A)?(V=t.getRecordMatcher(A),Y=K):Y=A,t.addRoute(Y,V)}function g(A){const K=t.getRecordMatcher(A);K&&t.removeRoute(K)}function w(){return t.getRoutes().map(A=>A.record)}function v(A){return!!t.getRecordMatcher(A)}function T(A,K){if(K=Te({},K||c.value),typeof A=="string"){const oe=cs(n,A,K.path),y=t.resolve({path:oe.path},K),_=r.createHref(oe.fullPath);return Te(oe,y,{params:f(y.params),hash:Dr(oe.hash),redirectedFrom:void 0,href:_})}let V;if("path"in A)V=Te({},A,{path:cs(n,A.path,K.path).path});else{const oe=Te({},A.params);for(const y in oe)oe[y]==null&&delete oe[y];V=Te({},A,{params:h(A.params)}),K.params=h(K.params)}const Y=t.resolve(V,K),we=A.hash||"";Y.params=d(f(Y.params));const pe=v0(o,Te({},A,{hash:o1(we),path:Y.path})),le=r.createHref(pe);return Te({fullPath:pe,hash:we,query:o===wl?l1(A.query):A.query||{}},Y,{redirectedFrom:void 0,href:le})}function x(A){return typeof A=="string"?cs(n,A,c.value.path):Te({},A)}function D(A,K){if(u!==A)return no(8,{from:K,to:A})}function $(A){return B(A)}function q(A){return $(Te(x(A),{replace:!0}))}function O(A){const K=A.matched[A.matched.length-1];if(K&&K.redirect){const{redirect:V}=K;let Y=typeof V=="function"?V(A):V;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=x(Y):{path:Y},Y.params={}),Te({query:A.query,hash:A.hash,params:"path"in Y?{}:A.params},Y)}}function B(A,K){const V=u=T(A),Y=c.value,we=A.state,pe=A.force,le=A.replace===!0,oe=O(V);if(oe)return B(Te(x(oe),{state:typeof oe=="object"?Te({},we,oe.state):we,force:pe,replace:le}),K||V);const y=V;y.redirectedFrom=K;let _;return!pe&&w0(o,Y,V)&&(_=no(16,{to:y,from:Y}),$e(Y,Y,!0,!1)),(_?Promise.resolve(_):ae(y,Y)).catch(k=>Vt(k)?Vt(k,2)?k:he(k):G(k,y,Y)).then(k=>{if(k){if(Vt(k,2))return B(Te({replace:le},x(k.to),{state:typeof k.to=="object"?Te({},we,k.to.state):we,force:pe}),K||y)}else k=_e(y,Y,!0,le,we);return ge(y,Y,k),k})}function ne(A,K){const V=D(A,K);return V?Promise.reject(V):Promise.resolve()}function ae(A,K){let V;const[Y,we,pe]=_1(A,K);V=us(Y.reverse(),"beforeRouteLeave",A,K);for(const oe of Y)oe.leaveGuards.forEach(y=>{V.push(Xt(y,A,K))});const le=ne.bind(null,A,K);return V.push(le),On(V).then(()=>{V=[];for(const oe of i.list())V.push(Xt(oe,A,K));return V.push(le),On(V)}).then(()=>{V=us(we,"beforeRouteUpdate",A,K);for(const oe of we)oe.updateGuards.forEach(y=>{V.push(Xt(y,A,K))});return V.push(le),On(V)}).then(()=>{V=[];for(const oe of A.matched)if(oe.beforeEnter&&!K.matched.includes(oe))if(Et(oe.beforeEnter))for(const y of oe.beforeEnter)V.push(Xt(y,A,K));else V.push(Xt(oe.beforeEnter,A,K));return V.push(le),On(V)}).then(()=>(A.matched.forEach(oe=>oe.enterCallbacks={}),V=us(pe,"beforeRouteEnter",A,K),V.push(le),On(V))).then(()=>{V=[];for(const oe of a.list())V.push(Xt(oe,A,K));return V.push(le),On(V)}).catch(oe=>Vt(oe,8)?oe:Promise.reject(oe))}function ge(A,K,V){for(const Y of l.list())Y(A,K,V)}function _e(A,K,V,Y,we){const pe=D(A,K);if(pe)return pe;const le=K===Zt,oe=In?history.state:{};V&&(Y||le?r.replace(A.fullPath,Te({scroll:le&&oe&&oe.scroll},we)):r.push(A.fullPath,we)),c.value=A,$e(A,K,V,le),he()}let Ve;function Ne(){Ve||(Ve=r.listen((A,K,V)=>{if(!un.listening)return;const Y=T(A),we=O(Y);if(we){B(Te(we,{replace:!0}),Y).catch(ko);return}u=Y;const pe=c.value;In&&$0(hl(pe.fullPath,V.delta),Gr()),ae(Y,pe).catch(le=>Vt(le,12)?le:Vt(le,2)?(B(le.to,Y).then(oe=>{Vt(oe,20)&&!V.delta&&V.type===jo.pop&&r.go(-1,!1)}).catch(ko),Promise.reject()):(V.delta&&r.go(-V.delta,!1),G(le,Y,pe))).then(le=>{le=le||_e(Y,pe,!1),le&&(V.delta&&!Vt(le,8)?r.go(-V.delta,!1):V.type===jo.pop&&Vt(le,20)&&r.go(-1,!1)),ge(Y,pe,le)}).catch(ko)}))}let qe=po(),Ee=po(),Oe;function G(A,K,V){he(A);const Y=Ee.list();return Y.length?Y.forEach(we=>we(A,K,V)):console.error(A),Promise.reject(A)}function re(){return Oe&&c.value!==Zt?Promise.resolve():new Promise((A,K)=>{qe.add([A,K])})}function he(A){return Oe||(Oe=!A,Ne(),qe.list().forEach(([K,V])=>A?V(A):K()),qe.reset()),A}function $e(A,K,V,Y){const{scrollBehavior:we}=e;if(!In||!we)return Promise.resolve();const pe=!V&&A0(hl(A.fullPath,0))||(Y||!V)&&history.state&&history.state.scroll||null;return Ye().then(()=>we(A,K,pe)).then(le=>le&&P0(le)).catch(le=>G(le,A,K))}const it=A=>r.go(A);let Ge;const rt=new Set,un={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:v,getRoutes:w,resolve:T,options:e,push:$,replace:q,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ee.add,isReady:re,install(A){const K=this;A.component("RouterLink",h1),A.component("RouterView",g1),A.config.globalProperties.$router=K,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),In&&!Ge&&c.value===Zt&&(Ge=!0,$(r.location).catch(we=>{}));const V={};for(const we in Zt)V[we]=P(()=>c.value[we]);A.provide(Li,K),A.provide(Ou,Fe(V)),A.provide(Us,c);const Y=A.unmount;rt.add(A),A.unmount=function(){rt.delete(A),rt.size<1&&(u=Zt,Ve&&Ve(),Ve=null,c.value=Zt,Ge=!1,Oe=!1),Y()}}};return un}function On(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function _1(e,t){const n=[],o=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(u=>to(u,l))?o.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(u=>to(u,c))||r.push(c))}return[n,o,r]}const ds=H(!1),Do=H(!1),Nn=H(!1),v1=H(!0),Ks=Em({xs:460,...Pm}),Tn=m0(),zu=r0(),w1=P(()=>Tn.height.value-Tn.width.value/on>180),Lu=t0(Kt?document.body:null),Jn=Tm(),b1=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")||((t=Jn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),S1=P(()=>{var e;return["BUTTON","A"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")});Mt("slidev-camera","default");Mt("slidev-mic","default");const dr=Mt("slidev-scale",0),et=Mt("slidev-show-overview",!1),hs=Mt("slidev-presenter-cursor",!0),Tl=Mt("slidev-show-editor",!1);Mt("slidev-editor-width",Kt?window.innerWidth*.4:100);const ju=Su(et);function Pl(e,t,n,o=r=>r){return e*o(.5-t*(.5-n))}function k1(e){return[-e[0],-e[1]]}function xt(e,t){return[e[0]+t[0],e[1]+t[1]]}function vt(e,t){return[e[0]-t[0],e[1]-t[1]]}function kt(e,t){return[e[0]*t,e[1]*t]}function x1(e,t){return[e[0]/t,e[1]/t]}function mo(e){return[e[1],-e[0]]}function $l(e,t){return e[0]*t[0]+e[1]*t[1]}function D1(e,t){return e[0]===t[0]&&e[1]===t[1]}function T1(e){return Math.hypot(e[0],e[1])}function P1(e){return e[0]*e[0]+e[1]*e[1]}function Al(e,t){return P1(vt(e,t))}function qu(e){return x1(e,T1(e))}function $1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function go(e,t,n){let o=Math.sin(n),r=Math.cos(n),i=e[0]-t[0],a=e[1]-t[1],l=i*r-a*o,c=i*o+a*r;return[l+t[0],c+t[1]]}function Gs(e,t,n){return xt(e,kt(vt(t,e),n))}function Cl(e,t,n){return xt(e,kt(t,n))}var{min:zn,PI:A1}=Math,Rl=.275,yo=A1+1e-4;function C1(e,t={}){let{size:n=16,smoothing:o=.5,thinning:r=.5,simulatePressure:i=!0,easing:a=G=>G,start:l={},end:c={},last:u=!1}=t,{cap:d=!0,easing:h=G=>G*(2-G)}=l,{cap:f=!0,easing:m=G=>--G*G*G+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,w=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,v=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,T=Math.pow(n*o,2),x=[],D=[],$=e.slice(0,10).reduce((G,re)=>{let he=re.pressure;if(i){let $e=zn(1,re.distance/n),it=zn(1,1-$e);he=zn(1,G+(it-G)*($e*Rl))}return(G+he)/2},e[0].pressure),q=Pl(n,r,e[e.length-1].pressure,a),O,B=e[0].vector,ne=e[0].point,ae=ne,ge=ne,_e=ae,Ve=!1;for(let G=0;G<e.length;G++){let{pressure:re}=e[G],{point:he,vector:$e,distance:it,runningLength:Ge}=e[G];if(G<e.length-1&&g-Ge<3)continue;if(r){if(i){let pe=zn(1,it/n),le=zn(1,1-pe);re=zn(1,$+(le-$)*(pe*Rl))}q=Pl(n,r,re,a)}else q=n/2;O===void 0&&(O=q);let rt=Ge<w?h(Ge/w):1,un=g-Ge<v?m((g-Ge)/v):1;q=Math.max(.01,q*Math.min(rt,un));let A=(G<e.length-1?e[G+1]:e[G]).vector,K=G<e.length-1?$l($e,A):1,V=$l($e,B)<0&&!Ve,Y=K!==null&&K<0;if(V||Y){let pe=kt(mo(B),q);for(let le=1/13,oe=0;oe<=1;oe+=le)ge=go(vt(he,pe),he,yo*oe),x.push(ge),_e=go(xt(he,pe),he,yo*-oe),D.push(_e);ne=ge,ae=_e,Y&&(Ve=!0);continue}if(Ve=!1,G===e.length-1){let pe=kt(mo($e),q);x.push(vt(he,pe)),D.push(xt(he,pe));continue}let we=kt(mo(Gs(A,$e,K)),q);ge=vt(he,we),(G<=1||Al(ne,ge)>T)&&(x.push(ge),ne=ge),_e=xt(he,we),(G<=1||Al(ae,_e)>T)&&(D.push(_e),ae=_e),$=re,B=$e}let Ne=e[0].point.slice(0,2),qe=e.length>1?e[e.length-1].point.slice(0,2):xt(e[0].point,[1,1]),Ee=[],Oe=[];if(e.length===1){if(!(w||v)||u){let G=Cl(Ne,qu(mo(vt(Ne,qe))),-(O||q)),re=[];for(let he=1/13,$e=he;$e<=1;$e+=he)re.push(go(G,Ne,yo*2*$e));return re}}else{if(!(w||v&&e.length===1))if(d)for(let re=1/13,he=re;he<=1;he+=re){let $e=go(D[0],Ne,yo*he);Ee.push($e)}else{let re=vt(x[0],D[0]),he=kt(re,.5),$e=kt(re,.51);Ee.push(vt(Ne,he),vt(Ne,$e),xt(Ne,$e),xt(Ne,he))}let G=mo(k1(e[e.length-1].vector));if(v||w&&e.length===1)Oe.push(qe);else if(f){let re=Cl(qe,G,q);for(let he=1/29,$e=he;$e<1;$e+=he)Oe.push(go(re,qe,yo*3*$e))}else Oe.push(xt(qe,kt(G,q)),xt(qe,kt(G,q*.99)),vt(qe,kt(G,q*.99)),vt(qe,kt(G,q)))}return x.concat(Oe,D.reverse(),Ee)}function R1(e,t={}){var n;let{streamline:o=.5,size:r=16,last:i=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:w=.5})=>[m,g,w]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(Gs(l[0],m,g/4))}l.length===1&&(l=[...l,[...xt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,h=c[0],f=l.length-1;for(let m=1;m<l.length;m++){let g=i&&m===f?l[m].slice(0,2):Gs(h.point,l[m],a);if(D1(h.point,g))continue;let w=$1(g,h.point);if(d+=w,m<f&&!u){if(d<r)continue;u=!0}h={point:g,pressure:l[m][2]>=0?l[m][2]:.5,vector:qu(vt(h.point,g)),distance:w,runningLength:d},c.push(h)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function E1(e,t={}){return C1(R1(e,t),t)}var M1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,r=n.length;o<r;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(r=>t!==r)}}});function Tr(e,t){return e-t}function F1(e){return e<0?-1:1}function Pr(e){return[Math.abs(e),F1(e)]}function Iu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var O1=2,Wt=O1,ao=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var r;var t;const n=this.drauu.el,o=(r=this.drauu.options.coordinateScale)!=null?r:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*o,y:(e.pageY-i.top)*o,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const a=i.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*o,y:a.y*o,pressure:e.pressure}}}createElement(e,t){var r;const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(r=o.fill)!=null?r:"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Wt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},z1=class extends ao{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=E1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[r,i],a,l)=>{const[c,u]=l[(a+1)%l.length];return o.push(r,i,(r+c)/2,(i+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},L1=class extends ao{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[o,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[i,a]=[this.start.x,this.start.x+t*n].sort(Tr),[l,c]=[this.start.y,this.start.y+o*r].sort(Tr);this.attr("cx",(i+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-i)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Vu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(r),n.appendChild(o),n}var j1=class extends ao{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Iu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Vu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,r=e.y-this.start.y;if(r!==0){let i=o/r;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+r*i,n=this.start.y+r):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},q1=class extends ao{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Pr(e.x-this.start.x),[o,r]=Pr(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,o);t=i,o=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[i,a]=[this.start.x,this.start.x+t*n].sort(Tr),[l,c]=[this.start.y,this.start.y+o*r].sort(Tr);this.attr("x",i),this.attr("y",l),this.attr("width",a-i),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function I1(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function V1(e,t,n){let o=t.x,r=t.y,i=n.x-o,a=n.y-r;if(i!==0||a!==0){const l=((e.x-o)*i+(e.y-r)*a)/(i*i+a*a);l>1?(o=n.x,r=n.y):l>0&&(o+=i*l,r+=a*l)}return i=e.x-o,a=e.y-r,i*i+a*a}function N1(e,t){let n=e[0];const o=[n];let r;for(let i=1,a=e.length;i<a;i++)r=e[i],I1(r,n)>t&&(o.push(r),n=r);return n!==r&&r&&o.push(r),o}function Js(e,t,n,o,r){let i=o,a=0;for(let l=t+1;l<n;l++){const c=V1(e[l],e[t],e[n]);c>i&&(a=l,i=c)}i>o&&(a-t>1&&Js(e,t,a,o,r),r.push(e[a]),n-a>1&&Js(e,a,n,o,r))}function B1(e,t){const n=e.length-1,o=[e[0]];return Js(e,0,n,t,o),o.push(e[n]),o}function El(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:N1(e,o),e=B1(e,o),e}var W1=class extends ao{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Iu();const t=Vu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=El(this.points,1,!0),this.count=0),this.attr("d",Fl(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Fl(El(this.points,1,!0))),!e.getTotalLength()))}};function H1(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),angle:Math.atan2(o,n)}}function Ml(e,t,n,o){const r=t||e,i=n||e,a=.2,l=H1(r,i),c=l.angle+(o?Math.PI:0),u=l.length*a,d=e.x+Math.cos(c)*u,h=e.y+Math.sin(c)*u;return{x:d,y:h}}function U1(e,t,n){const o=Ml(n[t-1],n[t-2],e),r=Ml(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)} ${r.x.toFixed(Wt)},${r.y.toFixed(Wt)} ${e.x.toFixed(Wt)},${e.y.toFixed(Wt)}`}function Fl(e){return e.reduce((t,n,o,r)=>o===0?`M ${n.x.toFixed(Wt)},${n.y.toFixed(Wt)}`:`${t} ${U1(n,o,r)}`,"")}var K1=class extends ao{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let r=0;r<n.length;r++){const i=n[r];if(i.getTotalLength){const a=i.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=i.getPointAtLength(a*l/this.pathSubFactor),u=i.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:o||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,r=t.x1,i=t.x2,a=e.y1,l=e.y2,c=t.y1,u=t.y2,d=(n-o)*(c-u)-(a-l)*(r-i),h=(n*l-a*o)*(r-i)-(n-o)*(r*u-c*i),f=(n*l-a*o)*(c-u)-(a-l)*(r*u-c*i),m=(g,w,v)=>g>=w&&g<=v?!0:g>=v&&g<=w;if(d===0)return!1;{const g={x:h/d,y:f/d};return m(g.x,n,o)&&m(g.y,a,l)&&m(g.x,r,i)&&m(g.y,c,u)}}};function G1(e){return{draw:new W1(e),stylus:new z1(e),line:new j1(e),rectangle:new q1(e),ellipse:new L1(e),eraseLine:new K1(e)}}var J1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=M1(),this._models=G1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),r=this.eventMove.bind(this),i=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",r,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Y1(e){return new J1(e)}const Ys=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qt=Mt("slidev-drawing-enabled",!1),vP=Mt("slidev-drawing-pinned",!1),Z1=H(!1),Q1=H(!1),X1=H(!1),qo=H(!1),wn=Qp(Mt("slidev-drawing-brush",{color:Ys[0],size:4,mode:"stylus"})),Ol=H("stylus"),Nu=P(()=>ke.drawings.syncAll||Lt.value);let Io=!1;const _o=P({get(){return Ol.value},set(e){Ol.value=e,e==="arrow"?(wn.mode="line",wn.arrowEnd=!0):(wn.mode=e,wn.arrowEnd=!1)}}),eg=Fe({brush:wn,acceptsInputTypes:P(()=>qt.value?void 0:["pen"]),coordinateTransform:!1}),tt=jr(Y1(eg));function tg(){tt.clear(),Nu.value&&_u(He.value,"")}function Bu(){var e;Q1.value=tt.canRedo(),Z1.value=tt.canUndo(),X1.value=!!((e=tt.el)!=null&&e.children.length)}function ng(e){Io=!0;const t=Sr[e||He.value];t!=null?tt.load(t):tt.clear(),Io=!1}tt.on("changed",()=>{if(Bu(),!Io){const e=tt.dump(),t=He.value;(Sr[t]||"")!==e&&Nu.value&&_u(t,tt.dump())}});Vp(e=>{Io=!0,e[He.value]!=null&&tt.load(e[He.value]||""),Io=!1,Bu()});Ye(()=>{fe(He,()=>{!tt.mounted||ng()},{immediate:!0})});tt.on("start",()=>qo.value=!0);tt.on("end",()=>qo.value=!1);window.addEventListener("keydown",e=>{if(!qt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?tt.redo():tt.undo():e.code==="Escape"?qt.value=!1:e.code==="KeyL"&&t?_o.value="line":e.code==="KeyA"&&t?_o.value="arrow":e.code==="KeyS"&&t?_o.value="stylus":e.code==="KeyR"&&t?_o.value="rectangle":e.code==="KeyE"&&t?_o.value="ellipse":e.code==="KeyC"&&t?tg():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ys.length?wn.color=Ys[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Be(...e){return P(()=>e.every(t=>ft(t)))}function ct(e){return P(()=>!ft(e))}const zl=Vm(),fs=Mt("slidev-color-schema","auto"),Zs=P(()=>ke.colorSchema!=="auto"),ji=P({get(){return Zs.value?ke.colorSchema==="dark":fs.value==="auto"?zl.value:fs.value==="dark"},set(e){Zs.value||(fs.value=e===zl.value?"auto":e?"dark":"light")}}),Wu=Su(ji);Kt&&fe(ji,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const hr=H(1),fr=P(()=>We.length-1),mt=H(0),qi=H(0);function og(){mt.value>hr.value&&(mt.value-=1)}function rg(){mt.value<fr.value&&(mt.value+=1)}function sg(){if(mt.value>hr.value){let e=mt.value-qi.value;e<hr.value&&(e=hr.value),mt.value=e}}function ig(){if(mt.value<fr.value){let e=mt.value+qi.value;e>fr.value&&(e=fr.value),mt.value=e}}function ag(){const{escape:e,space:t,shift:n,left:o,right:r,up:i,down:a,enter:l,d:c,g:u,o:d}=zu,h=[{name:"next_space",key:Be(t,ct(n)),fn:rn,autoRepeat:!0},{name:"prev_space",key:Be(t,n),fn:sn,autoRepeat:!0},{name:"next_right",key:Be(r,ct(n),ct(et)),fn:rn,autoRepeat:!0},{name:"prev_left",key:Be(o,ct(n),ct(et)),fn:sn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:sn,autoRepeat:!0},{name:"next_down",key:Be(a,ct(et)),fn:Vo,autoRepeat:!0},{name:"prev_up",key:Be(i,ct(et)),fn:()=>No(!1),autoRepeat:!0},{name:"next_shift",key:Be(r,n),fn:Vo,autoRepeat:!0},{name:"prev_shift",key:Be(o,n),fn:()=>No(!1),autoRepeat:!0},{name:"toggle_dark",key:Be(c,ct(qt)),fn:Wu},{name:"toggle_overview",key:Be(d,ct(qt)),fn:ju},{name:"hide_overview",key:Be(e,ct(qt)),fn:()=>et.value=!1},{name:"goto",key:Be(u,ct(qt)),fn:()=>Nn.value=!Nn.value},{name:"next_overview",key:Be(r,et),fn:rg},{name:"prev_overview",key:Be(o,et),fn:og},{name:"up_overview",key:Be(i,et),fn:sg},{name:"down_overview",key:Be(a,et),fn:ig},{name:"goto_from_overview",key:Be(l,et),fn:()=>{oo(mt.value),et.value=!1}}];return{customShortcuts:[],defaultShortcuts:h}}const Hu=Be(ct(b1),ct(S1),v1);function lg(e,t,n=!1){typeof e=="string"&&(e=zu[e]);const o=Be(e,Hu);let r=0,i;const a=()=>{if(clearTimeout(i),!o.value){r=0;return}n&&(i=setTimeout(a,Math.max(1e3-r*250,150)),r++),t()};return fe(o,a,{flush:"sync"})}function cg(e,t){return Dm(e,n=>{!Hu.value||n.repeat||t()})}function ug(){const{customShortcuts:e,defaultShortcuts:t}=ag();new Map([...t,...e].map(o=>[o.key,o])).forEach(o=>{o.fn&&lg(o.key,o.fn,o.autoRepeat)}),cg("f",()=>Lu.toggle())}const dg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hg=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),fg=[hg];function pg(e,t){return S(),U("svg",dg,fg)}const mg={name:"carbon-close",render:pg};function Ii(e){var n,o;const t=(o=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const Uu=De({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;F(I);const n=H(),o=e0(n),r=P(()=>t.width?t.width:o.width.value),i=P(()=>t.width?t.width/on:o.height.value);t.width&&Nr(()=>{n.value&&(n.value.style.width=`${r.value}px`,n.value.style.height=`${i.value}px`)});const a=P(()=>r.value/i.value),l=P(()=>t.scale?t.scale:a.value<on?r.value/xn:i.value*on/xn),c=P(()=>({height:`${mu}px`,width:`${xn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(pu,l),(d,h)=>(S(),U("div",{id:"slide-container",ref_key:"root",ref:n,class:Le(b(u))},[s("div",{id:"slide-content",style:nt(b(c))},[wt(d.$slots,"default")],4),wt(d.$slots,"controls")],2))}});const Vi=De({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=jt(e,"clicks",t),o=jt(e,"clicksElements",t),r=jt(e,"clicksDisabled",t),i=jt(e,"clicksOrderMap",t);o.value.length=0,ht(Ap,e.route),ht(Cp,e.context),ht(cr,n),ht(ur,r),ht(jn,o),ht(qs,i)},render(){var e,t;return this.$props.is?pt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),gg=["innerHTML"],yg=De({__name:"DrawingPreview",props:{page:null},setup(e){return F(I),(t,n)=>b(Sr)[e.page]?(S(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Sr)[e.page]},null,8,gg)):me("v-if",!0)}}),_g={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},vg=["onClick"],wg=De({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t);function r(){o.value=!1}function i(m){oo(m),r()}function a(m){return m===mt.value}const l=Ks.smaller("xs"),c=Ks.smaller("sm"),u=4*16*2,d=2*16,h=P(()=>l.value?Tn.width.value-u:c.value?(Tn.width.value-u-d)/2:300),f=P(()=>Math.floor((Tn.width.value-u)/(h.value+d)));return Nr(()=>{mt.value=He.value,qi.value=f.value}),(m,g)=>{const w=mg;return S(),U(Pe,null,[Ci(s("div",_g,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${b(h)}px,1fr))`)},[(S(!0),U(Pe,null,Uo(b(We).slice(0,-1),(v,T)=>(S(),U("div",{key:v.path,class:"relative"},[s("div",{class:Le(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(T+1)}]),onClick:x=>i(+v.path)},[(S(),j(Uu,{key:v.path,width:b(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:E(()=>[Z(b(Vi),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:Le(b(Ii)(v)),route:v,context:"overview"},null,8,["is","class","route"]),Z(yg,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],10,vg),s("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${b(h)+5}px`)},Pn(T+1),5)]))),128))],4)],512),[[du,b(o)]]),b(o)?(S(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:r},[Z(w)])):me("v-if",!0)],64)}}});const bg="/assets/logo.b72bde5d.png",Sg={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},kg=De({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t);function r(){o.value=!1}return(i,a)=>(S(),j(Kc,null,[b(o)?(S(),U("div",Sg,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>r())}),s("div",{class:Le(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[wt(i.$slots,"default")],2)])):me("v-if",!0)],1024))}}),xg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Dg=["innerHTML"],Tg=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:bg,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),p("dev ")])])],-1),Pg=De({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t),r=P(()=>typeof ke.info=="string");return(i,a)=>(S(),j(kg,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=l=>xe(o)?o.value=l:null),class:"px-6 py-4"},{default:E(()=>[s("div",xg,[b(r)?(S(),U("div",{key:0,class:"mb-4",innerHTML:b(ke).info},null,8,Dg)):me("v-if",!0),Tg])]),_:1},8,["modelValue"]))}});const $g=["disabled","onKeydown"],Ag=De({__name:"Goto",setup(e){F(I);const t=H(),n=H(""),o=P(()=>{if(n.value.startsWith("/"))return!!We.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=ed.value}});function r(){o.value&&(n.value.startsWith("/")?oo(n.value.substring(1)):oo(+n.value)),i()}function i(){Nn.value=!1}return fe(Nn,async a=>{var l,c;a?(await Ye(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),fe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,l)=>(S(),U("div",{id:"slidev-goto-dialog",class:Le(["fixed right-5 bg-main transform transition-all",b(Nn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ci(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!b(Nn),class:Le(["outline-none bg-transparent",{"text-red-400":!b(o)&&n.value}]),placeholder:"Goto...",onKeydown:[za(r,["enter"]),za(i,["escape"])],onBlur:i},null,42,$g),[[cp,n.value]])],2))}}),Cg=De({__name:"Controls",setup(e){F(I);const t=Rt(),n=Rt();return(o,r)=>(S(),U(Pe,null,[Z(wg,{modelValue:b(et),"onUpdate:modelValue":r[0]||(r[0]=i=>xe(et)?et.value=i:null)},null,8,["modelValue"]),Z(Ag),b(t)?(S(),j(b(t),{key:0})):me("v-if",!0),b(n)?(S(),j(b(n),{key:1,modelValue:b(ds),"onUpdate:modelValue":r[1]||(r[1]=i=>xe(ds)?ds.value=i:null)},null,8,["modelValue"])):me("v-if",!0),b(ke).info?(S(),j(Pg,{key:2,modelValue:b(Do),"onUpdate:modelValue":r[2]||(r[2]=i=>xe(Do)?Do.value=i:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Rg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Mg=[Eg];function Fg(e,t){return S(),U("svg",Rg,Mg)}const Og={name:"carbon-settings-adjust",render:Fg},zg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lg=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),jg=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),qg=[Lg,jg];function Ig(e,t){return S(),U("svg",zg,qg)}const Vg={name:"carbon-information",render:Ig},Ng={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bg=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Wg=[Bg];function Hg(e,t){return S(),U("svg",Ng,Wg)}const Ug={name:"carbon-download",render:Hg},Kg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gg=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Jg=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Yg=[Gg,Jg];function Zg(e,t){return S(),U("svg",Kg,Yg)}const Qg={name:"carbon-user-speaker",render:Zg},Xg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ey=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ty=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),ny=[ey,ty];function oy(e,t){return S(),U("svg",Xg,ny)}const ry={name:"carbon-presentation-file",render:oy},sy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iy=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ay=[iy];function ly(e,t){return S(),U("svg",sy,ay)}const cy={name:"carbon-pen",render:ly},uy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dy=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),hy=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),fy=[dy,hy];function py(e,t){return S(),U("svg",uy,fy)}const my={name:"ph-cursor-duotone",render:py},gy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},yy=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),_y=[yy];function vy(e,t){return S(),U("svg",gy,_y)}const Ku={name:"ph-cursor-fill",render:vy},wy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},by=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Sy=[by];function ky(e,t){return S(),U("svg",wy,Sy)}const xy={name:"carbon-sun",render:ky},Dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ty=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Py=[Ty];function $y(e,t){return S(),U("svg",Dy,Py)}const Ay={name:"carbon-moon",render:$y},Cy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ry=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ey=[Ry];function My(e,t){return S(),U("svg",Cy,Ey)}const Fy={name:"carbon-apps",render:My},Oy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zy=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Ly=[zy];function jy(e,t){return S(),U("svg",Oy,Ly)}const qy={name:"carbon-arrow-right",render:jy},Iy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vy=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Ny=[Vy];function By(e,t){return S(),U("svg",Iy,Ny)}const Wy={name:"carbon-arrow-left",render:By},Hy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uy=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Ky=[Uy];function Gy(e,t){return S(),U("svg",Hy,Ky)}const Jy={name:"carbon-maximize",render:Gy},Yy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zy=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Qy=[Zy];function Xy(e,t){return S(),U("svg",Yy,Qy)}const e_={name:"carbon-minimize",render:Xy},t_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},n_=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),o_=[n_];function r_(e,t){return S(),U("svg",t_,o_)}const s_={name:"carbon-checkmark",render:r_},i_={class:"select-list"},a_={class:"title"},l_={class:"items"},c_=["onClick"],u_=De({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t,{passive:!0});return(r,i)=>{const a=s_;return S(),U("div",i_,[s("div",a_,Pn(e.title),1),s("div",l_,[(S(!0),U(Pe,null,Uo(e.items,l=>(S(),U("div",{key:l.value,class:Le(["item",{active:b(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[Z(a,{class:Le(["text-green-500",{"opacity-0":b(o)!==l.value}])},null,8,["class"]),p(" "+Pn(l.display||l.value),1)],10,c_))),128))])])}}});const Gu=(e,t)=>{const n=e.__vccOpts||e;for(const[o,r]of t)n[o]=r;return n},d_=Gu(u_,[["__scopeId","data-v-7dd0eaca"]]),h_={class:"text-sm"},f_=De({__name:"Settings",setup(e){F(I);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(S(),U("div",h_,[Z(d_,{modelValue:b(dr),"onUpdate:modelValue":o[0]||(o[0]=r=>xe(dr)?dr.value=r:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),p_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},m_=De({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;F(I);const o=jt(n,"modelValue",t,{passive:!0}),r=H();return km(r,()=>{o.value=!1}),(i,a)=>(S(),U("div",{ref_key:"el",ref:r,class:"flex relative"},[s("button",{class:Le({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>o.value=!b(o))},[wt(i.$slots,"button",{class:Le({disabled:e.disabled})})],2),(S(),j(Kc,null,[b(o)?(S(),U("div",p_,[wt(i.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),g_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},rr={__name:"VerticalDivider",setup(e){return F(I),(t,n)=>(S(),U("div",g_))}},y_={render(){return[]}},__={class:"icon-btn"},v_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},w_={class:"my-auto"},b_={class:"opacity-50"},S_=De({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;F(I);const n=Ks.smaller("md"),{isFullscreen:o,toggle:r}=Lu,i=P(()=>Qs.value?`?password=${Qs.value}`:""),a=P(()=>`/presenter/${He.value}${i.value}`),l=P(()=>`/${He.value}${i.value}`),c=H(),u=()=>{c.value&&Jn.value&&c.value.contains(Jn.value)&&Jn.value.blur()},d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=Rt(),f=Rt();return io(()=>import("./DrawingControls.bfcfa557.js"),["assets/DrawingControls.bfcfa557.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0f336d60.js"]).then(m=>f.value=m.default),(m,g)=>{const w=e_,v=Jy,T=Wy,x=qy,D=Fy,$=Ay,q=xy,O=Ku,B=my,ne=cy,ae=ry,ge=Oo("RouterLink"),_e=Qg,Ve=Ug,Ne=Vg,qe=Og;return S(),U("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:Le(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(Nt)?me("v-if",!0):(S(),U("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Ee)=>b(r)&&b(r)(...Ee))},[b(o)?(S(),j(w,{key:0})):(S(),j(v,{key:1}))])),s("button",{class:Le(["icon-btn",{disabled:!b(I3)}]),onClick:g[1]||(g[1]=(...Ee)=>b(sn)&&b(sn)(...Ee))},[Z(T)],2),s("button",{class:Le(["icon-btn",{disabled:!b(q3)}]),title:"Next",onClick:g[2]||(g[2]=(...Ee)=>b(rn)&&b(rn)(...Ee))},[Z(x)],2),b(Nt)?me("v-if",!0):(S(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Ee=>b(ju)())},[Z(D)])),b(Zs)?me("v-if",!0):(S(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Ee=>b(Wu)())},[b(ji)?(S(),j($,{key:0})):(S(),j(q,{key:1}))])),Z(rr),b(Nt)?me("v-if",!0):(S(),U(Pe,{key:3},[!b(Lt)&&!b(n)&&b(h)?(S(),U(Pe,{key:0},[Z(b(h)),Z(rr)],64)):me("v-if",!0),b(Lt)?(S(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Ee=>hs.value=!b(hs))},[b(hs)?(S(),j(O,{key:0})):(S(),j(B,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!b(ke).drawings.presenterOnly&&!b(Nt)?(S(),U(Pe,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Ee=>qt.value=!b(qt))},[Z(ne),b(qt)?(S(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:b(wn).color})},null,4)):me("v-if",!0)]),Z(rr)],64)):me("v-if",!0),b(Nt)?me("v-if",!0):(S(),U(Pe,{key:5},[b(Lt)?(S(),j(ge,{key:0,to:b(l),class:"icon-btn",title:"Play Mode"},{default:E(()=>[Z(ae)]),_:1},8,["to"])):me("v-if",!0),b(z3)?(S(),j(ge,{key:1,to:b(a),class:"icon-btn",title:"Presenter Mode"},{default:E(()=>[Z(_e)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(S(),U(Pe,{key:6},[b(ke).download?(S(),U("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Ee)=>b(Xs)&&b(Xs)(...Ee))},[Z(Ve)])):me("v-if",!0)],64)),!b(Lt)&&b(ke).info&&!b(Nt)?(S(),U("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Ee=>Do.value=!b(Do))},[Z(Ne)])):me("v-if",!0),!b(Lt)&&!b(Nt)?(S(),j(m_,{key:8},{button:E(()=>[s("button",__,[Z(qe)])]),menu:E(()=>[Z(f_)]),_:1})):me("v-if",!0),b(Nt)?me("v-if",!0):(S(),j(rr,{key:9})),s("div",v_,[s("div",w_,[p(Pn(b(He))+" ",1),s("span",b_,"/ "+Pn(b(ed)),1)])]),Z(b(y_))],34)],512)}}}),Ju={render(){return[]}},Yu={render(){return[]}},k_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},x_=De({__name:"PresenterMouse",setup(e){return F(I),(t,n)=>{const o=Ku;return b(as).cursor?(S(),U("div",k_,[Z(o,{class:"absolute",style:nt({left:`${b(as).cursor.x}%`,top:`${b(as).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),D_=De({__name:"SlidesShow",props:{context:null},setup(e){F(I),fe(dt,()=>{var n,o;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((o=ps.value)==null?void 0:o.meta)&&ps.value.meta.preload!==!1&&(ps.value.meta.__preloaded=!0)},{immediate:!0});const t=Rt();return io(()=>import("./DrawingLayer.2154b505.js"),[]).then(n=>t.value=n.default),(n,o)=>(S(),U(Pe,null,[me(" Global Bottom "),Z(b(Yu)),me(" Slides "),(S(!0),U(Pe,null,Uo(b(We),r=>{var i,a;return S(),U(Pe,{key:r.path},[((i=r.meta)==null?void 0:i.__preloaded)||r===b(dt)?Ci((S(),j(b(Vi),{key:0,is:r==null?void 0:r.component,clicks:r===b(dt)?b(Ct):0,"clicks-elements":((a=r.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:Le(b(Ii)(r)),route:r,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[du,r===b(dt)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),Z(b(Ju)),b(t)?(S(),j(b(t),{key:0})):me("v-if",!0),b(Lt)?me("v-if",!0):(S(),j(x_,{key:1}))],64))}}),T_=De({__name:"Play",setup(e){F(I),ug();const t=H();function n(i){var a;Tl.value||((a=i.target)==null?void 0:a.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?rn():sn())}B3(t);const o=P(()=>w1.value||Tl.value);Rt();const r=Rt();return io(()=>import("./DrawingControls.bfcfa557.js"),["assets/DrawingControls.bfcfa557.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0f336d60.js"]).then(i=>r.value=i.default),(i,a)=>(S(),U(Pe,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:nt(b(gu))},[Z(Uu,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Yn)?b(Tn).width.value:void 0,scale:b(dr),onPointerdown:n},{default:E(()=>[Z(D_,{context:"slide"})]),controls:E(()=>[s("div",{class:Le(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(qo)?"pointer-events-none":""]])},[Z(S_,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b(ke).drawings.presenterOnly&&!b(Nt)&&b(r)?(S(),j(b(r),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),Z(Cg)],64))}});function Zu(e){const t=P(()=>e.value.path),n=P(()=>We.length-1),o=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),r=P(()=>Jr(o.value)),i=P(()=>We.find(f=>f.path===`${o.value}`)),a=P(()=>{var f,m,g;return(g=(m=(f=i.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),l=P(()=>{var f,m;return(m=(f=i.value)==null?void 0:f.meta)==null?void 0:m.layout}),c=P(()=>We.find(f=>f.path===`${Math.min(We.length,o.value+1)}`)),u=P(()=>We.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(Ni(f,m),f),[])),d=P(()=>Bi(u.value,i.value)),h=P(()=>Wi(d.value));return{route:e,path:t,total:n,currentPage:o,currentPath:r,currentRoute:i,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:h}}function Qu(e,t,n){const o=H(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),o.value+=1})});const r=P(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),i=P(()=>{var c,u,d;return+((d=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:r.value.length)}),a=P(()=>n.value<We.length-1||e.value<i.value),l=P(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:r,clicksTotal:i,hasNext:a,hasPrev:l}}const P_=["id"],Ll=De({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=jt(n,"clicksElements",t),r=P(()=>({height:`${mu}px`,width:`${xn}px`})),i=Rt();io(()=>import("./DrawingPreview.4f1327c5.js"),[]).then(u=>i.value=u.default);const a=P(()=>n.clicks),l=Qu(a,n.nav.currentRoute,n.nav.currentPage),c=P(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(I,Fe({nav:{...n.nav,...l},configs:ke,themeConfigs:P(()=>ke.themeConfig)})),(u,d)=>{var h;return S(),U("div",{id:b(c),class:"slide-container",style:nt(b(r))},[Z(b(Yu)),Z(b(Vi),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":b(o),"onUpdate:clicks-elements":d[0]||(d[0]=f=>xe(o)?o.value=f:null),clicks:b(a),"clicks-disabled":!1,class:Le(b(Ii)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(i)?(S(),j(b(i),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),Z(b(Ju))],12,P_)}}}),$_=De({__name:"PrintSlide",props:{route:null},setup(e){var i;const t=e;F(I);const n=Fe(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),o=P(()=>t.route),r=Zu(o);return(a,l)=>(S(),U(Pe,null,[Z(Ll,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=c=>xe(n)?n.value=c:null),clicks:0,nav:b(r),route:b(o)},null,8,["clicks-elements","nav","route"]),b(To)?me("v-if",!0):(S(!0),U(Pe,{key:0},Uo(n.length,c=>(S(),j(Ll,{key:c,clicks:c,nav:b(r),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}}),A_={id:"print-content"},C_=De({__name:"PrintContainer",props:{width:null},setup(e){const t=e;F(I);const n=P(()=>t.width),o=P(()=>t.width/on),r=P(()=>n.value/o.value),i=P(()=>r.value<on?n.value/xn:o.value*on/xn),a=We.slice(0,-1),l=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(pu,i),(c,u)=>(S(),U("div",{id:"print-container",class:Le(b(l))},[s("div",A_,[(S(!0),U(Pe,null,Uo(b(a),d=>(S(),j($_,{key:d.path,route:d},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const R_=De({__name:"Print",setup(e){F(I);const t=vn.canvasWidth,n=Math.round(t/vn.aspectRatio)+1;function o(r,{slots:i}){if(i.default)return pt("style",i.default())}return Nr(()=>{Yn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(r,i)=>(S(),U(Pe,null,[Z(o,null,{default:E(()=>[p(" @page { size: "+Pn(b(t))+"px "+Pn(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(b(gu))},[Z(C_,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Tn).width.value},null,8,["style","width"])],4)],64))}});const E_={class:"slidev-layout end"},M_={__name:"end",setup(e){return F(I),(t,n)=>(S(),U("div",E_," END "))}},F_=Gu(M_,[["__scopeId","data-v-ab32435f"]]);function jl(e){return e.startsWith("/")?"/"+e.slice(1):e}function O_(e,t=!1){const n=e&&["#","rgb","hsl"].some(r=>e.indexOf(r)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${jl(e)})`:`url("${jl(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const z_={class:"my-auto w-full"},L_=De({__name:"cover",props:{background:{default:""}},setup(e){const t=e;F(I);const n=P(()=>O_(t.background,!0));return(o,r)=>(S(),U("div",{class:"slidev-layout cover",style:nt(b(n))},[s("div",z_,[wt(o.$slots,"default")])],4))}}),j_=s("h1",null,"European Cruise 2022 - Carnival Pride",-1),q_=s("h2",null,"Italy, Turkey, and Greece",-1),I_=s("h2",null,"October 6 - 22, 2022",-1),V_={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md"};return F(I),(n,o)=>(S(),j(L_,X(Q(t)),{default:E(()=>[j_,q_,I_]),_:1},16))}},N_=["href","innerHTML"],B_=["href"],W_=De({__name:"Link",props:{to:null,title:null},setup(e){return F(I),(t,n)=>{const o=Oo("RouterLink");return!b(Yn)&&e.title?(S(),j(o,{key:0,to:String(e.to),onClick:n[0]||(n[0]=r=>r.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!b(Yn)&&!e.title?(S(),j(o,{key:1,to:String(e.to),onClick:n[1]||(n[1]=r=>r.target.blur())},{default:E(()=>[wt(t.$slots,"default")]),_:3},8,["to"])):b(Yn)&&e.title?(S(),U("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,N_)):(S(),U("a",{key:3,href:`#${e.to}`},[wt(t.$slots,"default")],8,B_))}}}),H_={class:"slidev-layout default"},je={__name:"default",setup(e){return F(I),(t,n)=>(S(),U("div",H_,[wt(t.$slots,"default")]))}},U_=s("h1",null,"Itinerary at a Glance: Italy -> Cruise Embarkation",-1),K_=s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])],-1),G_=s("td",null,[s("strong",null,"0")],-1),J_=s("td",null,"Thu",-1),Y_=s("td",null,"10/6",-1),Z_=p("Depart JFK on American Airlines Flight 236 to Rome (FCO)"),Q_=s("td",null,[s("strong",null,"1")],-1),X_=s("td",null,"Fri",-1),ev=s("td",null,"10/7",-1),tv=p("Rome -> Florence by Train"),nv=p(", "),ov=p("Explore the Duomo"),rv=p(", "),sv=p("Rooftop Dinner"),iv=s("td",null,[s("strong",null,"2")],-1),av=s("td",null,"Sat",-1),lv=s("td",null,"10/8",-1),cv=s("strong",null,"Florence",-1),uv=p(": "),dv=p("Uffizi"),hv=p(", "),fv=p("Pitti Palace"),pv=p(", "),mv=p("Boboli Gardens"),gv=p(", Accademia (Statue of David)"),yv=s("tr",null,[s("td",null,[s("strong",null,"3")]),s("td",null,"Sun"),s("td",null,"10/9"),s("td",null,'Florence -> Rome by Train, "Heart of Rome" Walk, Spanish Steps, Trevi Fountain')],-1),_v=s("tr",null,[s("td",null,[s("strong",null,"4")]),s("td",null,"Mon"),s("td",null,"10/10"),s("td",null,[s("strong",null,"Rome"),p(": Colisseum, Roman Forum, St. Peter\u2019s Square")])],-1),vv=s("tr",null,[s("td",null,[s("strong",null,"5")]),s("td",null,"Tue"),s("td",null,"10/11"),s("td",null,"Rome -> Civitavecchia by Train, Embarkation & Cruise Departure")],-1),wv=s("tr",null,[s("td",null,[s("strong",null,"6,7")]),s("td",null,"Wed/Thu"),s("td",null,"10/12,13"),s("td",null,"At Sea - Carnival Pride")],-1),bv={__name:"2",setup(e){const t={srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"};return F(I),(n,o)=>{const r=W_;return S(),j(je,X(Q(t)),{default:E(()=>[U_,s("table",null,[K_,s("tbody",null,[s("tr",null,[G_,J_,Y_,s("td",null,[Z(r,{to:"5"},{default:E(()=>[Z_]),_:1})])]),s("tr",null,[Q_,X_,ev,s("td",null,[Z(r,{to:"6"},{default:E(()=>[tv]),_:1}),nv,Z(r,{to:"9"},{default:E(()=>[ov]),_:1}),rv,Z(r,{to:"11"},{default:E(()=>[sv]),_:1})])]),s("tr",null,[iv,av,lv,s("td",null,[cv,uv,Z(r,{to:"13"},{default:E(()=>[dv]),_:1}),hv,Z(r,{to:"16"},{default:E(()=>[fv]),_:1}),pv,Z(r,{to:"17"},{default:E(()=>[mv]),_:1}),gv])]),yv,_v,vv,wv])])]),_:1},16)}}},Sv=s("h1",null,"Itinerary at a Glance: Carnival Pride Meditteranean",-1),kv=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("strong",null,"8")]),s("td",null,"Fri"),s("td",null,"10/14"),s("td",null,[s("strong",null,"Mykonos")])]),s("tr",null,[s("td",null,[s("strong",null,"9")]),s("td",null,"Sat"),s("td",null,"10/15"),s("td",null,[p("Kusadasi ("),s("strong",null,"Ephesus"),p("), Turkey")])]),s("tr",null,[s("td",null,[s("strong",null,"10")]),s("td",null,"Sun"),s("td",null,"10/16"),s("td",null,[s("strong",null,"Santorini")])]),s("tr",null,[s("td",null,[s("strong",null,"11")]),s("td",null,"Mon"),s("td",null,"10/17"),s("td",null,[s("strong",null,"Athens")])]),s("tr",null,[s("td",null,[s("strong",null,"12")]),s("td",null,"Tue"),s("td",null,"10/18"),s("td",null,[p("Katakolon ("),s("strong",null,"Olympia"),p(")")])]),s("tr",null,[s("td",null,[s("strong",null,"13")]),s("td",null,"Wed"),s("td",null,"10/19"),s("td",null,[s("strong",null,"Messina")])]),s("tr",null,[s("td",null,[s("strong",null,"14")]),s("td",null,"Thu"),s("td",null,"10/20"),s("td",null,[s("strong",null,"Naples"),p(" (Capri & Pompeii)")])])])],-1),xv={__name:"3",setup(e){const t={srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[Sv,kv]),_:1},16))}},Dv=s("h1",null,"Itinerary at a Glance: Cruise Debarkation/Flight Home",-1),Tv=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("strong",null,"15")]),s("td",null,"Fri"),s("td",null,"10/21"),s("td",null,[p("Debarkation, Civitavecchia -> "),s("strong",null,"Rome"),p(" by Train, Sleep at Airport Hilton")])]),s("tr",null,[s("td",null,[s("strong",null,"16")]),s("td",null,"Sat"),s("td",null,"10/22"),s("td",null,"Depart FCO (Rome) on American Airlines Flight 235 to JFK")])])],-1),Pv={__name:"4",setup(e){const t={srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[Dv,Tv]),_:1},16))}},$v=s("h4",null,"Day 0 - Thu 10/6 - Travel Day",-1),Av=s("h2",null,[s("strong",null,"Trans-Atlantic Flight to Rome")],-1),Cv=s("h3",null,null,-1),Rv=s("h3",null,"\u{1F690} East Haven to JFK by Ground Transport",-1),Ev=s("h3",null,[p("Pickup Time 12:00PM at D&D\u2019s House "),s("strong",null,"Confirmed")],-1),Mv=s("blockquote",null,[s("p",null,[p("We take a private "),s("strong",null,"Connecticut Limo"),p(" Van from East Haven to JFK "),s("br"),p(" The ride lasts between 2 - 2.5 hours depending on traffic "),s("br"),p(" Round-trip transport costs "),s("strong",null,"$920 + $180 tip ($275 per couple total)")])],-1),Fv=s("br",null,null,-1),Ov=s("h3",null,"\u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane",-1),zv=s("blockquote",null,[s("p",null,[s("strong",null,"American Airlines Flight 236"),p(),s("a",{href:"https://www.aa.com/travelInformation/flights/status",target:"_blank",rel:"noopener"},"(check Flight Status)"),p(),s("br"),p(" Depart from JFK airport "),s("strong",null,"6:52 PM"),p(),s("br"),p(" The flight time is 8 hours 8 mins "),s("br"),p(" Arrive at Leonardo da Vinci "),s("strong",null,"9:00 AM next day"),p(" (Fri 10/7) "),s("br")])],-1),Lv={__name:"5",setup(e){const t={srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[$v,Av,Cv,Rv,Ev,Mv,Fv,Ov,zv]),_:1},16))}},jv=s("h4",null,"Day 1 - Fri 10/7 - Travel Day",-1),qv=s("h2",null,[s("strong",null,"Rome to Florence")],-1),Iv=s("p",null,[p("\u2708\uFE0F "),s("strong",null,"9:00 AM"),p(": Scheduled to land at Leonardo da Vinci airport")],-1),Vv=s("h3",null,"Airport to Rome",-1),Nv=s("p",null,[p("\u{1F68B} "),s("strong",null,"10:30 AM (approximate)"),p(": Take a Train to Rome Termini Station")],-1),Bv=s("blockquote",null,[s("p",null,[p("The "),s("a",{href:"https://www.trenitalia.com/en/services/fiumicino_airport.html",target:"_blank",rel:"noopener"},"Leonardo Express"),p(" is a non-stop shuttle train running between the airport train station and Termini Station in Rome. "),s("br"),p(" The ride lasts "),s("strong",null,"32 minutes"),p(", and the train departs every 15-30 minutes depending on the time of day. "),s("br"),p(" Tickets are "),s("strong",null,"\u20AC14"),p(" one-way, purchased individually, or "),s("strong",null,"\u20AC40"),p(' total for 4 tickets when purchased at the "mini-group" fare.')])],-1),Wv=s("br",null,null,-1),Hv=s("h3",null,"Rome to Florence",-1),Uv=s("p",null,[p("\u{1F68B} "),s("strong",null,"Noon (approximate)"),p(": Take a Train to Santa Maria Novella Train Station in Florence")],-1),Kv=s("blockquote",null,[s("p",null,[p("A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. "),s("br"),p(" The ride lasts "),s("strong",null,"1 hour 36 mins"),p(", and the train departs every 15-30 minutes depending on the time of day. "),s("br"),p(" Tickets are "),s("strong",null,"\u20AC42"),p(" round trip")])],-1),Gv={__name:"6",setup(e){const t={srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[jv,qv,Iv,Vv,Nv,Bv,Wv,Hv,Uv,Kv]),_:1},16))}},Jv="/florence-overview.png",Yv=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Jv,height:"400",width:"400"})]),s("td",null,[s("ul",null,[p(" Day 1 "),s("li",null," Walk from SMN Station to AirBnB (near Duomo) "),p(),s("li",null," Explore Duomo, Markets, & Shops "),p(),s("li",null," Rooftop Dinner ")]),p(),s("ul",null,[p(" Day 2 "),s("li",null," Uffizi Gallery, Palazzo Vecchio "),p(),s("li",null," Ponte Vecchio "),p(),s("li",null," Pitti Palace, Boboli Gardens "),p(),s("li",null," Accademia (David) ")])])])])],-1),Zv=s("p",null,[s("span",{style:{"font-size":"50%"}},[p("watch "),s("a",{href:"https://youtu.be/qzTyWRcQRXg",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Florence"),p(" (YouTube, 16:22)")])],-1),Qv=s("p",null,[s("span",{style:{"font-size":"50%"}},[p("watch "),s("a",{href:"https://youtu.be/q51Atktm244",target:"_blank",rel:"noopener"},"13 Tips for a FANTASTIC Trip to Florence"),p(" (YouTube, 23:02)")])],-1),Xv={__name:"7",setup(e){const t={srcSequence:"./slides/02-florence/007-florence-overview.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[Yv,Zv,Qv]),_:1},16))}},e2="/florence-skyline.jpg",t2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),n2=s("h2",null,[s("strong",null,"Arrival")],-1),o2=s("h3",null,[p("AirBnB - "),s("a",{href:"https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL",target:"_blank",rel:"noopener"},"Via Santa Elisabetta 5, Florence"),p(),s("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),r2=s("p",null,[p("\u{1F6B6}"),s("strong",null,"2:30 (approximate)"),p(": Walk from Train Station to AirBnB "),s("a",{href:"https://goo.gl/maps/pCivNQbnYBPQdVzu5",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),s2=s("img",{src:e2,height:"250",width:"500",style:{margin:"auto"}},null,-1),i2=s("br",null,null,-1),a2=s("blockquote",null,[s("p",null,[p("We\u2019ll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. "),s("br")])],-1),l2={__name:"8",setup(e){const t={srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[t2,n2,o2,r2,s2,i2,a2]),_:1},16))}},c2="/duomo-battistero.jpg",u2="/duomo-interior.jpg",d2="/duomo-dome.jpg",h2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),f2=s("h2",null,[s("strong",null,"Exploring The Duomo")],-1),p2=s("br",null,null,-1),m2=s("blockquote",null,[s("p",null,'Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within.')],-1),g2=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:c2,width:"300",height:"150"})]),s("td",null,[s("img",{src:u2,width:"150",height:"300"})]),s("td",null,[s("img",{src:d2,width:"300",height:"150"})])])])],-1),y2={__name:"9",setup(e){const t={srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[h2,f2,p2,m2,g2]),_:1},16))}},_2="/heart-of-florence-restaurants.jpg",v2={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Se=De({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return F(I),(n,o)=>(S(),U("div",v2,[s("div",{class:Le(["col-left",t.class])},[wt(n.$slots,"default")],2),s("div",{class:Le(["col-right",t.class])},[wt(n.$slots,"right")],2)]))}}),w2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),b2=s("h2",null,[s("strong",null,"Food & Shopping")],-1),S2=s("blockquote",null,[s("p",null,[p("If you\u2019re hungry, there are many options near the AirBnB including: "),s("br")]),s("ul",null,[s("li",null,[s("a",{href:"https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html",target:"_blank",rel:"noopener"},[s("strong",null,"Caffeteria della Oblate")]),p(", a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.")]),s("li",null,[s("a",{href:"https://www.mercatocentrale.com/florence/how-it-works/",target:"_blank",rel:"noopener"},[s("strong",null,"Mercato Centrale")]),p(" The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.")])])],-1),k2=s("br",null,null,-1),x2=s("blockquote",null,[s("ul",null,[s("li",null,[s("a",{href:"https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html",target:"_blank",rel:"noopener"},[s("strong",null,"San Lorenzo Market")]),p(" If you\u2019re itching to start shopping, step outside the Mercato Centrale and you\u2019ll find vendor stalls hawking all kinds of leather goods. Be sure to negotiate to get the best price!")])])],-1),D2=s("br",null,null,-1),T2=s("blockquote",null,[s("p",null,"We\u2019ll grab fresh food to bring back to the AirBnB for tomorrow\u2019s breakfast before our busy sightseeing day in Florence!")],-1),P2=s("img",{src:_2,height:"450",width:"450",style:{margin:"auto"}},null,-1),$2={__name:"10",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[P2]),default:E(()=>[w2,b2,S2,k2,x2,D2,T2]),_:1},16))}},A2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),C2=s("h2",null,[s("strong",null,"Rooftop Dinner")],-1),R2=s("br",null,null,-1),E2=s("blockquote",null,[s("p",null,'Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we\u2019ll take a leisurely "golden hour" dinner at one of Florence\u2019s rooftop restaurants')],-1),M2=s("br",null,null,-1),F2=s("h3",null,[p("Angel Roofbar - Hotel Calimala "),s("span",{style:{color:"red"}},[s("strong",null,"(unconfirmed)")])],-1),O2=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("a",{href:"https://www.hotelcalimala.com/angel-roofbar-dining",target:"_blank",rel:"noopener"},"website"),p(" / "),s("a",{href:"https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf",target:"_blank",rel:"noopener"},"dinner menu")]),s("td",null,[s("img",{src:"https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg",width:"400",height:"150"})])]),s("tr",null,[s("td",null,[s("br")]),s("td")])])],-1),z2={__name:"11",setup(e){const t={srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[A2,C2,R2,E2,M2,F2,O2]),_:1},16))}},L2="/palazzo-vecchio-firenze.jpg",j2="/courtyard-palazzo-vecchio.jpg",q2="/florence-renaissance-walk.jpg",I2=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),V2=s("h2",null,[s("strong",null,"Renaissance Walk")],-1),N2=s("p",null,[p("\u{1F6B6}"),s("strong",null,"8:30 AM"),p(": Walk to Uffizi Gallery "),s("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),B2=s("blockquote",null,[s("p",null,[p("This is the beginning of our whirlwind Florence sightseeing day."),s("br"),p(" Fabulous examples of Renaissance architecture span the walk."),s("br"),p(" If you miss one, don\u2019t worry, we\u2019ll follow the same route back. "),s("br")])],-1),W2=s("p",null,"\u{1F4F7} Palazzo Vecchio",-1),H2=s("td",null,[s("img",{src:L2,height:"100",width:"200"})],-1),U2=s("td",null,[s("img",{src:j2,height:"95",width:"190"})],-1),K2=s("blockquote",null,[s("p",null,"Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city.")],-1),G2=s("img",{src:q2,height:"600",width:"300",style:{margin:"auto"}},null,-1),J2={__name:"12",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[G2]),default:E(()=>[I2,V2,N2,B2,W2,H2,U2,K2]),_:1},16))}},Y2="/birth-of-venus.jpg",Z2="/uffizi-gallery-floor-plan.png",Q2=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),X2=s("h2",null,[s("strong",null,"Uffizi Gallery")],-1),ew=s("p",null,[p("\u{1F3F0} "),s("strong",null,"9:00 - 9:15 AM"),p(": Timed Entry into Uffizi Gallery"),s("br"),s("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),tw=s("blockquote",null,[s("p",null,[p('See the greatest collection of Italian Renaissance paintings in the world, including Botticelli\u2019s iconic "Birth of Venus".'),s("br"),s("span",{style:{"font-size":"50%"}},[p("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Uffizi Gallery Audio Tour"),p(" (MP3, 1:01:35)")])])],-1),nw=s("br",null,null,-1),ow=s("img",{src:Y2,height:"125",width:"250",style:{margin:"auto"}},null,-1),rw=s("br",null,null,-1),sw=s("blockquote",null,[s("p",null,"Seeing priceless works of art makes you hungry, right?")],-1),iw=s("img",{src:Z2,height:"800",width:"400",style:{margin:"auto"}},null,-1),aw={__name:"13",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[iw]),default:E(()=>[Q2,X2,ew,tw,nw,ow,rw,sw]),_:1},16))}},lw="/florence-allantico-vinaio.jpeg",cw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),uw=s("h2",null,[s("strong",null,"Panini at All\u2019antico Vinaio")],-1),dw=s("h4",null,[p("Lunch Option #1 "),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.allanticovinaio.com/il-menu-firenze_en/",target:"_blank",rel:"noopener"},"Menu")])],-1),hw=s("p",null,[p("\u{1F6B6}"),s("strong",null,"10:45 AM"),p(": Walk from Uffizi to All\u2019Antico Vinaio"),s("br"),s("span",{style:{"font-size":"75%"}},[p("("),s("a",{href:"https://goo.gl/maps/Aup9R2km7X4VQZgS6",target:"_blank",rel:"noopener"},"5 mins"),p(", allow up to "),s("strong",null,"one hour"),p(" to wait in line)")])],-1),fw=s("blockquote",null,[s("p",null,[p("If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. "),s("br"),p(" The wait may last as much as "),s("strong",null,"an hour or more"),p(", but nearly all who visit agree, its time well spent.")])],-1),pw=s("p",null,[p("\u{1F6B6}"),s("strong",null,"Between 11:15-12:00 PM"),p(": Walk to Pitti Palace"),s("br"),s("span",{style:{"font-size":"75%"}},[s("a",{href:"https://goo.gl/maps/UUc7SxPFN43kujLb6",target:"_blank",rel:"noopener"},"(11 mins)")])],-1),mw=s("p",null,"Panini in hand, walk down to the river Arno towards the Ponte Vecchio",-1),gw=s("img",{src:lw,height:"200",width:"400",style:{margin:"auto"}},null,-1),yw={__name:"14",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[gw]),default:E(()=>[cw,uw,dw,hw,fw,pw,mw]),_:1},16))}},_w="/ponte-vecchio.jpg",vw="/florence-oltrarno.jpg",ww=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),bw=s("h2",null,[s("strong",null,"Ponte Vecchio")],-1),Sw=s("p",null,[p("\u{1F6B6}"),s("strong",null,"12:00 PM"),p(": Walk to Pitti Palace "),s("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),kw=s("blockquote",null,[s("p",null,"We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500\u2019s, to be replaced by goldsmiths that remain to this day.")],-1),xw=s("ul",null,[s("li",null,[p("\u{1F4F7} Ponte Vecchio "),s("img",{src:_w,height:"125",width:"250"})])],-1),Dw=s("br",null,null,-1),Tw=s("blockquote",null,[s("p",null,'Next, we\u2019ll cross into the Oltrarno, literally the "other side of the River Arno".')],-1),Pw=s("img",{src:vw,height:"800",width:"400",style:{margin:"auto"}},null,-1),$w={__name:"15",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[Pw]),default:E(()=>[ww,bw,Sw,kw,xw,Dw,Tw]),_:1},16))}},Aw="/palatine-gallery-floor-plan.jpg",Cw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Rw=s("h2",null,[s("strong",null,"Pitti Palace")],-1),Ew=s("details",null,[s("summary",null,[s("span",{style:{"font-size":"75%"}}," click here for Lunch Option #2 ")]),s("p",null,[s("span",{style:{"font-size":"75%"}},[p('If we missed out on panini at "All\u2019Antico Vinaio", here\u2019s another option:'),s("br"),s("a",{href:"https://trattorialacasalinga.it/en/our-menu/",target:"_blank",rel:"noopener"},"Trattoria La Casalinga")]),p(),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://goo.gl/maps/cXGgZQteLjhBNHPUA",target:"_blank",rel:"noopener"},"map")])])],-1),Mw=s("p",null,[p("\u{1F3F0} "),s("strong",null,"12:30 PM"),p(": Entry into Pitti Palace"),s("br"),s("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),Fw=s("h3",null,"Palantine Gallery",-1),Ow=s("blockquote",null,[s("p",null,[p("Pitti Palace houses multiple museums and gardens. Here, we\u2019re going to focus on "),s("a",{href:"https://www.uffizi.it/en/pitti-palace/palatine-gallery",target:"_blank",rel:"noopener"},"Palantine Gallery"),p(", which features works by Raphael, Titian, and Rembrandt.")])],-1),zw=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.palazzo-pitti.net/the-palatine-gallery.html",target:"_blank",rel:"noopener"},"Detailed Room Descriptions (with pictures)")])],-1),Lw=s("img",{src:Aw,height:"400",width:"800",style:{margin:"auto"}},null,-1),jw={__name:"16",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[Lw]),default:E(()=>[Cw,Rw,Ew,Mw,Fw,Ow,zw]),_:1},16))}},qw="/pitti-palace-boboli-gardens-map.png",Iw="/florence-boboli-entrance.jpg",Vw="/florence-boboli-fountains.jpg",Nw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Bw=s("h2",null,[s("strong",null,"Boboli Gardens")],-1),Ww=s("blockquote",null,[s("p",null,"The gardens are vast, with sloping hills leading up to spectular views of Florence.")],-1),Hw=s("p",null,[p("\u{1F6B6}"),s("strong",null,"2:00 PM"),p(": Explore Boboli Gardens "),s("span",{style:{"font-size":"75%"}},"(approx 30 minutes)")],-1),Uw=s("blockquote",null,[s("p",null,"We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.")],-1),Kw=s("p",null,[s("span",{style:{"font-size":"75%"}},[s("a",{href:"https://goo.gl/maps/K6riqmBPWh3Ga8wp8",target:"_blank",rel:"noopener"},"suggested walking tour")])],-1),Gw=s("img",{src:qw,height:"200",width:"400",style:{margin:"auto"}},null,-1),Jw=s("table",null,[s("thead",null,[s("tr",null,[s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Iw,height:"175",width:"350",style:{margin:"auto"}})])]),s("tr",null,[s("td",null,[s("img",{src:Vw,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),Yw={__name:"17",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[Jw]),default:E(()=>[Nw,Bw,Ww,Hw,Uw,Kw,Gw]),_:1},16))}},Zw="/florence-statue-of-david.jpg",Qw="/accademia-floor-plan.png",Xw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),eb=s("h2",null,[s("strong",null,"Accademia")],-1),tb=s("h4",null,[p("(Michelangelo\u2019s "),s("strong",null,"David"),p(")")],-1),nb=s("p",null,[p("\u{1F3F0} "),s("strong",null,"4:30 - 4:45 PM"),p(": Timed Entry into "),s("br"),p(" Galleria dell\u2019Accademia "),s("span",{style:{"font-size":"75%"}},"Allow 1 hour to tour")],-1),ob=s("img",{src:Zw,height:"150",width:"300",style:{margin:"auto"}},null,-1),rb=s("br",null,null,-1),sb=s("blockquote",null,[s("p",null,[p("This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance. The museum also includes some of Michelangelo\u2019s other works, and a couple of Botticellis."),s("br"),s("span",{style:{"font-size":"50%"}},[p("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Accademia & Michaelangelo\u2019s David Audio Tour"),p(" (MP3, 25:11)")])])],-1),ib=s("img",{src:Qw,height:"650",width:"325",style:{margin:"auto"}},null,-1),ab={__name:"18",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[ib]),default:E(()=>[Xw,eb,tb,nb,ob,rb,sb]),_:1},16))}},lb="/florence-b-roof.jpg",cb=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),ub=s("h2",null,[s("strong",null,"Rooftop Dinner"),p(),s("span",{style:{color:"red"}},[s("strong",null,"(unconfirmed)")])],-1),db=s("br",null,null,-1),hb=s("img",{src:lb,height:"200",width:"400",style:{margin:"auto"}},null,-1),fb=s("br",null,null,-1),pb=s("blockquote",null,[s("p",null,[p("The panoramic "),s("a",{href:"https://www.b-roof.it/en",target:"_blank",rel:"noopener"},[s("strong",null,"B Roof")]),p(" restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.")])],-1),mb={__name:"19",setup(e){const t={srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[cb,ub,db,hb,fb,pb]),_:1},16))}},gb="/florence-to-rome.png",yb=s("h4",null,"Day 3 - Sun 10/9 - Travel Day",-1),_b=s("h2",null,[s("strong",null,"Florence to Rome")],-1),vb=s("blockquote",null,[s("p",null,"It\u2019s time to say goodbye to Florence. Check-out time is 11:00, but we\u2019re going to try to get an early start for the trip back to Rome.")],-1),wb=s("p",null,[p("\u{1F6B6}"),s("strong",null,"9:30 (approximate)"),p(": Walk from AirBnB to Train Station "),s("a",{href:"https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),bb=s("p",null,[p("\u{1F68B} "),s("strong",null,"10:00 - 10:30 AM (approximate)"),p(": Take a Train to Termini Train Station in Rome")],-1),Sb=s("img",{src:gb,height:"800",width:"400",style:{margin:"auto"}},null,-1),kb=s("br",null,null,-1),xb=s("blockquote",null,[s("p",null,[p("A bullet train runs from "),s("strong",null,"Santa Maria Novella"),p(" Train Station in Florence to "),s("strong",null,"Termini"),p(" Station in Rome. "),s("br"),p(" The ride lasts "),s("strong",null,"1 hour 36 mins"),p(", and the train departs every 15-30 minutes depending on the time of day. "),s("br")])],-1),Db={__name:"20",setup(e){const t={srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[yb,_b,vb,wb,bb,Sb,kb,xb]),_:1},16))}},Tb="/rome-neighborhoods.png",Pb=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Tb,height:"400",width:"400"})]),s("td",null,[s("ul",null,[p(" Day 3 "),s("li",null," Walk from Rome Termini Station to AirBnB "),p(),s("li",null," Altar of the Fatherland "),p(),s("li",null,' "Heart of Rome" Walking Tour ')]),p(),s("ul",null,[p(" Day 4 "),s("li",null," St. Peter\u2019s Square "),p(),s("li",null," Roman Forum "),p(),s("li",null," Colisseum ")])])])])],-1),$b=s("p",null,[s("span",{style:{"font-size":"50%"}},[p("watch "),s("a",{href:"https://youtu.be/aaKl40z6MSw",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Rome"),p(" (YouTube, 24:05) ")])],-1),Ab={__name:"21",setup(e){const t={srcSequence:"./slides/03-rome/021-rome-overview.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[Pb,$b]),_:1},16))}},Cb="/rome-lazio.jpg",Rb="/rome-airbnb.png",Eb=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),Mb=s("h2",null,[s("strong",null,"Arrival")],-1),Fb=s("h3",null,[s("a",{href:"https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL",target:"_blank",rel:"noopener"},"AirBnB - Via Merulana, 94 int 6, Rome"),p(),s("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),Ob=s("p",null,[p("\u{1F6B6}"),s("strong",null,"12:30 (approximate)"),p(": Walk from Train Station to AirBnB "),s("a",{href:"https://goo.gl/maps/UoVfD7pYrtoNMjom7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),zb=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Cb,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:Rb,width:"275",height:"275"}),p(),s("span",{style:{"font-size":"50%"}},"(our apartment is on the third floor)")])])])],-1),Lb=s("blockquote",null,[s("p",null,"We\u2019ll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day\u2019s sightseeing.")],-1),jb={__name:"22",setup(e){const t={srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[Eb,Mb,Fb,Ob,zb,Lb]),_:1},16))}},qb="/rome-altar-of-the-fatherland.jpg",Ib="/rome-airbnb-to-piazza-navona.png",Vb=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),Nb=s("h2",null,[s("strong",null,"Altar of the Fatherland")],-1),Bb=s("blockquote",null,[s("p",null,[p("We\u2019ll walk right past the Colosseum on our way to the "),s("strong",null,"Altare della Patria"),p(' ("Altar of the Fatherland").')])],-1),Wb=s("p",null,[p("\u{1F6B6}"),s("strong",null,"2:00"),p(": Walk from AirBnB to the Altar of the Fatherland "),s("a",{href:"https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9",target:"_blank",rel:"noopener"},"(30 minutes)")],-1),Hb=s("blockquote",null,[s("p",null,"This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy\u2019s first king, seated on horseback in bronze.")],-1),Ub=s("blockquote",null,[s("p",null,"Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.")],-1),Kb=s("p",null,[p("\u{1F6B6}"),s("strong",null,"3:00"),p(": Walk from the Altar of the Fatherland to the Piazza Navona"),s("a",{href:"https://goo.gl/maps/rARoH2ixzgtR4ssL9",target:"_blank",rel:"noopener"},"(15 minutes)")],-1),Gb=s("blockquote",null,[s("p",null,"The expansive Piazza Navona marks the starting point of our walk through the heart of Rome")],-1),Jb=s("img",{src:qb,height:"200",width:"400",style:{margin:"auto"}},null,-1),Yb=s("br",null,null,-1),Zb=s("img",{src:Ib,height:"319",width:"425",style:{margin:"auto"}},null,-1),Qb={__name:"23",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[Jb,Yb,Zb]),default:E(()=>[Vb,Nb,Bb,Wb,Hb,Ub,Kb,Gb]),_:1},16))}},Xb="/heart-of-rome-walk-map.png",eS=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),tS=s("h2",null,[s("strong",null,'"Heart of Rome" Walk')],-1),nS=s("p",null,[p("\u{1F6B6}"),s("strong",null,"3:30"),p(": Walk from the Piazza Navona to Spanish Steps "),s("a",{href:"https://goo.gl/maps/RzCEs3sUTsuqyFvg6",target:"_blank",rel:"noopener"},"(30 minutes walk, plus stops)")],-1),oS=s("blockquote",null,[s("p",null,"This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:")],-1),rS=s("br",null,null,-1),sS=s("ul",null,[s("li",null,"Piazza Navona"),s("li",null,"The Pantheon"),s("li",null,"Parliament"),s("li",null,"Piazza Colonna/Via del Corso"),s("li",null,"Trevi Fountain"),s("li",null,"Spanish Steps")],-1),iS=s("p",null,[s("span",{style:{"font-size":"50%"}},[p("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Heart of Rome Audio Tour"),p(" (MP3, 1:08:07)")])],-1),aS=s("img",{src:Xb,height:"400",width:"400",style:{margin:"auto"}},null,-1),lS={__name:"24",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[aS]),default:E(()=>[eS,tS,nS,oS,rS,sS,iS]),_:1},16))}},cS="/rome-pantheon-exterior.jpg",uS="/rome-pantheon-floor-plan.png",dS=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),hS=s("h2",null,[s("strong",null,"Pantheon")],-1),fS=s("br",null,null,-1),pS=s("img",{src:cS,height:"200",width:"400",style:{margin:"auto"}},null,-1),mS=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"65%"}},"The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.")])],-1),gS=s("span",{style:{"font-size":"50%"}}," (open until 6:00 PM)",-1),yS=p(),_S=s("br",null,null,-1),vS=s("p",null,[s("span",{style:{"font-size":"50%"}},[p("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Pantheon Audio Tour"),p(" (MP3, 23:20)")])],-1),wS=s("img",{src:uS,height:"800",width:"400",style:{margin:"auto"}},null,-1),bS={__name:"25",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[wS]),default:E(()=>[dS,hS,fS,pS,mS,gS,yS,_S,vS]),_:1},16))}},SS="/rome-piazza-di-montecitorio.jpg",kS="/rome-parliament.jpg",xS="/rome-piazza-colonna.jpeg",DS=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),TS=s("h2",null,[s("strong",null,"Piazza di Montecitorio, Parliament, Piazza Colonna")],-1),PS=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:SS,width:"300",height:"150"})]),s("td",null,[s("img",{src:kS,width:"200",height:"400"})]),s("td",null,[s("img",{src:xS,width:"300",height:"150"})])])])],-1),$S=s("blockquote",null,[s("p",null,"Walking from the Pantheon towards the Trevi Fountain, we\u2019ll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.")],-1),AS=s("blockquote",null,[s("p",null,"One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD. This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.")],-1),CS={__name:"26",setup(e){const t={srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[DS,TS,PS,$S,AS]),_:1},16))}},RS="/rome-trevi-fountain-night.jpg",ES=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),MS=s("h2",null,[s("strong",null,"Trevi Fountain")],-1),FS=s("p",null,[p("\u{1F4F7} "),s("strong",null,"6:00 (approximate)"),p(": Arrive at the Trevi Fountain")],-1),OS=s("blockquote",null,[s("p",null,"Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.")],-1),zS=s("br",null,null,-1),LS=s("blockquote",null,[s("p",null,'We\u2019ll see the Trevi Fountain twice today. Once during the "golden hour", illuminated by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.')],-1),jS=s("br",null,null,-1),qS=s("blockquote",null,[s("p",null,[p("If you want to skip the previous parts of this walk, and do something else for the afternoon, "),s("strong",null,"6:00 PM"),p(" is the time we should all meet up, before we head on to the Spanish Steps.")])],-1),IS=s("img",{src:RS,height:"200",width:"400",style:{margin:"auto"}},null,-1),VS={__name:"27",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[IS]),default:E(()=>[ES,MS,FS,OS,zS,LS,jS,qS]),_:1},16))}},NS="/spanish-steps.jpg",BS=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),WS=s("h2",null,[s("strong",null,"Spanish Steps")],-1),HS=s("p",null,[s("span",{style:{"font-size":"80%"}},[p("\u{1F6B6}"),s("strong",null,"6:30"),p(": Walk from Trevi Fountain to the Spanish Steps "),s("a",{href:"https://goo.gl/maps/MKdDinjuN6Tthqzu7",target:"_blank",rel:"noopener"},"(8 mins)")])],-1),US=s("blockquote",null,[s("p",null,[p('138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini\u2019s father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.'),s("br"),p(" Partway up, the steps fan out around a central terrace, forming a butterfly shape. An obelisk, framed by two Baroque church towers, stands at the top.")])],-1),KS=s("p",null,"This is where our touring for the day ends. We\u2019ll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.",-1),GS=s("blockquote",null,[s("p",null,[p("Enjoy the steps, but whatever you do, don\u2019t sit down on them, or it\u2019ll cost you a "),s("strong",null,"\u20AC250 fine"),p(" (seriously).")])],-1),JS=s("img",{src:NS,height:"250",width:"500",style:{margin:"auto"}},null,-1),YS={__name:"28",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[JS]),default:E(()=>[BS,WS,HS,US,KS,GS]),_:1},16))}},ZS="/rome-metro-to-vatican.png",QS=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),XS=s("h2",null,[s("strong",null,"Metro Ride to St. Peter\u2019s Square")],-1),e5=s("span",{style:{"font-size":"70%"}},[s("p",null,[p("\u{1F68B} - Take the "),s("strong",null,"Metro (Line A - Battistini)"),p(" from "),s("strong",null,"Vittorio Emanuele"),p(" to "),s("strong",null,"Ottavio"),p(),s("br"),p(),s("a",{href:"https://goo.gl/maps/YTmeLq1JWEF5V11w9",target:"_blank",rel:"noopener"},"30 mins total")])],-1),t5=s("span",{style:{"font-size":"65%"}},[s("h5",null,"Detailed Directions"),s("ul",null,[s("li",null,[p("Walk from "),s("strong",null,"Via Merulana"),p(" toward "),s("strong",null,"Via Machiavelli"),p(" to "),s("strong",null,"Vittorio Emanuele Station"),p(),s("br"),p(" (6 mins)")]),s("li",null,[p("Ride "),s("strong",null,"Line A"),p(" 7 stops to "),s("strong",null,"Ottaviano"),p(" (10 mins)")]),s("li",null,[p("Walk south on "),s("strong",null,"Via Ottaviano"),p(" toward "),s("strong",null,"Via degli Scipioni"),p(", continue onto "),s("strong",null,"Via di Porta Angelica"),p(", which becoms "),s("strong",null,"Largo Del Colonnato"),p(" (11 mins)")])])],-1),n5=s("img",{src:ZS,height:"250",width:"500",style:{margin:"auto"}},null,-1),o5=s("br",null,null,-1),r5=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"70%"}},[p("All public transportation uses the same ticket."),s("br"),p(" It costs "),s("strong",null,"\u20AC1.50"),p(" and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.")])])],-1),s5={__name:"29",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[n5,o5,r5]),default:E(()=>[QS,XS,e5,t5]),_:1},16))}},i5="/st-peters-square.jpg",a5="/rome-st-peters-basilica-exterior.jpg",l5="/rome-st-peters-basilica-interior.jpeg",c5="/rome-pieta.jpg",u5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),d5=s("h2",null,[s("strong",null,"St Peter\u2019s Square and Basilica")],-1),h5=s("br",null,null,-1),f5=s("h4",null,"St. Peter\u2019s Square",-1),p5=s("blockquote",null,[s("p",null,[p("284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall. Bernini designed this square, which is really an ellipse that\u2019s roughly the same dimensions as the Colosseum. "),s("br"),p(" A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times.")])],-1),m5=s("br",null,null,-1),g5=s("h4",null,"St. Peter\u2019s Basilica",-1),y5=s("blockquote",null,[s("p",null,[p("Once you\u2019ve seen the square, its time to set foot inside the richest and grandest church on Earth. Michelangelo\u2019s "),s("strong",null,"Pieta"),p(" sits behind bulletproof glass just to the right of the entrance.")])],-1),_5=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("strong",null,"Dress Code"),p(": No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).")])],-1),v5=s("img",{src:i5,height:"175",width:"350",style:{margin:"auto"}},null,-1),w5=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:a5,height:"175",width:"350",style:{margin:"auto"}})]),s("td",null,[s("img",{src:l5,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),b5=s("img",{src:c5,height:"75",width:"150",style:{margin:"auto"}},null,-1),S5={__name:"30",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[v5,w5,b5]),default:E(()=>[u5,d5,h5,f5,p5,m5,g5,y5,_5]),_:1},16))}},k5="/rome-st-peters-walk-to-forum.png",x5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),D5=s("h2",null,[s("strong",null,"Walk to the Forum")],-1),T5=s("p",null,[p("\u{1F6B6}"),s("strong",null,"12:00 PM (approx.)"),p(": Walk from St. Peter\u2019s Square to the Roman Forum "),s("a",{href:"https://goo.gl/maps/rNAWJa3WxTxV2KLh9",target:"_blank",rel:"noopener"},"(36 minutes)")],-1),P5=s("blockquote",null,[s("p",null,[p("This 1.8 mile walk crosses the River Tiber at the "),s("strong",null,"Ponte Vittorio Emanuele II"),p(" continuing to the "),s("strong",null,"Corso Vittorio Emaulele II"),p(", a main east-west artery.")])],-1),$5=s("br",null,null,-1),A5=s("img",{src:k5,height:"325",width:"650",style:{margin:"auto"}},null,-1),C5={__name:"31",setup(e){const t={srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[x5,D5,T5,P5,$5,A5]),_:1},16))}},R5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),E5=s("h2",null,[s("strong",null,"The Forum")],-1),M5={__name:"32",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-roman-forum.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{default:E(()=>[R5,E5]),_:1},16))}},F5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),O5=s("h2",null,[s("strong",null,"Palatine Hill")],-1),z5={__name:"33",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-palatine-hill.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{default:E(()=>[F5,O5]),_:1},16))}},L5="/rome-colosseum-map.png",j5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),q5=s("h2",null,[s("strong",null,"Colosseum")],-1),I5=s("p",null,[s("span",{style:{"font-size":"50%"}},[p("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Colosseum Audio Tour"),p(" (MP3, 41:05)")])],-1),V5=s("img",{src:L5,height:"800",width:"400",style:{margin:"auto"}},null,-1),N5={__name:"34",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-colosseum.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[V5]),default:E(()=>[j5,q5,I5]),_:1},16))}},B5=s("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),W5=s("h2",null,[s("strong",null,"Rome to Civitavecchia")],-1),H5={__name:"35",setup(e){const t={layout:"two-cols",srcSequence:"./slides/04-cruise-departure/day-5-rome-to-civitavecchia.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{default:E(()=>[B5,W5]),_:1},16))}},U5=s("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),K5=s("h2",null,[s("strong",null,"Civitavecchia Train Station to Transit Center")],-1),G5={__name:"36",setup(e){const t={srcSequence:"./slides/04-cruise-departure/day-5-civitavecchia-train-station-to-transit-center.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[U5,K5]),_:1},16))}},J5=s("h4",null,"Day 5 - Tue 10/11 - Cruise Day 1",-1),Y5=s("h2",null,[s("strong",null,"Transit Center to Port, Embarkation and Cruise Departure")],-1),Z5={__name:"37",setup(e){const t={srcSequence:"./slides/04-cruise-departure/day-5-embarkation-and-cruise-departure.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[J5,Y5]),_:1},16))}},Q5=s("h4",null,"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",-1),X5=s("h2",null,[s("strong",null,"Days at Sea")],-1),ek={__name:"38",setup(e){const t={srcSequence:"./slides/04-cruise-departure/day-6-and-7-at-sea-days.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[Q5,X5]),_:1},16))}},tk=s("h4",null,"Day 8 - Fri 10/14 - Cruise Day 4",-1),nk=s("h2",null,[s("strong",null,"Mykonos")],-1),ok=s("p",null,[p("\u{1F6A2} "),s("strong",null,"9:00"),p(": Arrive at port")],-1),rk=s("h3",null,"Shore Excursions",-1),sk=s("p",null,[p("\u{1F3F0} "),s("strong",null,"9:30")],-1),ik=s("ul",null,[s("li",null,[p("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930",target:"_blank",rel:"noopener"},"Sailing Trip Around Mykonos\u2019 Famous Beaches"),p(" (5 hours)")])],-1),ak=s("p",null,[p("\u{1F6A2} "),s("strong",null,"6:00"),p(": Depart port")],-1),lk={__name:"39",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-8-mykonos.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{default:E(()=>[tk,nk,ok,rk,sk,ik,ak]),_:1},16))}},ck="/ephesus.jpg",uk=s("h4",null,"Day 9 - Sat 10/15 - Cruise Day 5",-1),dk=s("h2",null,[s("strong",null,"Ephesus"),p(),s("span",{style:{"font-size":"75%"}},"(Anchor at Kusadasi, Turkey)")],-1),hk=s("p",null,[p("\u{1F6A2} "),s("strong",null,"7:00"),p(": Arrive at port")],-1),fk=s("h3",null,"Shore Excursions",-1),pk=s("p",null,[p("\u{1F3F0} "),s("strong",null,"8:00")],-1),mk=s("ul",null,[s("li",null,[p("W&R, D&D - "),s("a",{href:"https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800",target:"_blank",rel:"noopener"},"Terrace House & Ancient Ephesus"),p(" (4.25 hours)")])],-1),gk=s("p",null,[p("\u{1F6A2} "),s("strong",null,"5:00"),p(": Depart port")],-1),yk=s("img",{src:ck,height:"210",width:"420",style:{margin:"auto"}},null,-1),_k={__name:"40",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-9-ephesus.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[yk]),default:E(()=>[uk,dk,hk,fk,pk,mk,gk]),_:1},16))}},vk="/santorini-oia-and-thira.jpg",wk="/santorini-catamaran.jpg",bk="/santorini-caldera.jpg",Sk=s("h4",null,"Day 10 - Sun 10/16 - Cruise Day 6",-1),kk=s("h2",null,[s("strong",null,"Santorini")],-1),xk=s("p",null,[p("\u{1F6A2} "),s("strong",null,"8:00"),p(": Arrive at port")],-1),Dk=s("h3",null,"Shore Excursions",-1),Tk=s("p",null,[p("\u{1F3F0} "),s("strong",null,"8:15")],-1),Pk=s("ul",null,[s("li",null,[p("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815",target:"_blank",rel:"noopener"},"Catamaran, Sail and Swim and BBQ"),p(" (6 hours)")]),s("li",null,[p("D&D - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815",target:"_blank",rel:"noopener"},"Oia & Thira"),p(" (4.5 hours)")])],-1),$k=s("p",null,[p("\u{1F3F0} "),s("strong",null,"8:30")],-1),Ak=s("ul",null,[s("li",null,[p("T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830",target:"_blank",rel:"noopener"},"Volcano, the Caldera, and Hot Springs"),p(" (2.75 hours)")])],-1),Ck=s("p",null,[p("\u{1F6A2} "),s("strong",null,"5:00"),p(": Depart port")],-1),Rk=s("img",{src:vk,height:"210",width:"420",style:{margin:"auto"}},null,-1),Ek=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:wk,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:bk,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),Mk={__name:"41",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-10-santorini.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[Rk,Ek]),default:E(()=>[Sk,kk,xk,Dk,Tk,Pk,$k,Ak,Ck]),_:1},16))}},Fk="/athens-parthenon.jpg",Ok="/athens-mycenae.jpg",zk=s("h4",null,"Day 11 - Mon 10/17 - Cruise Day 7",-1),Lk=s("h2",null,[s("strong",null,"Athens")],-1),jk=s("p",null,[p("\u{1F6A2} "),s("strong",null,"6:00"),p(": Arrive at port")],-1),qk=s("h3",null,"Shore Excursions",-1),Ik=s("p",null,[p("\u{1F3F0} "),s("strong",null,"7:15")],-1),Vk=s("ul",null,[s("li",null,[p("D&D, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715",target:"_blank",rel:"noopener"},"Top 10 Best of Athens"),p(" (8 hours)")])],-1),Nk=s("p",null,[p("\u{1F3F0} "),s("strong",null,"7:00")],-1),Bk=s("ul",null,[s("li",null,[p("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700",target:"_blank",rel:"noopener"},"Mycenae & Ancient Corinth"),p(" (8 hours)")])],-1),Wk=s("p",null,[p("\u{1F6A2} "),s("strong",null,"5:00"),p(": Depart port")],-1),Hk=s("img",{src:Fk,height:"150",width:"300",style:{margin:"auto"}},null,-1),Uk=s("br",null,null,-1),Kk=s("img",{src:Ok,height:"200",width:"400",style:{margin:"auto"}},null,-1),Gk={__name:"42",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-11-athens.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[Hk,Uk,Kk]),default:E(()=>[zk,Lk,jk,qk,Ik,Vk,Nk,Bk,Wk]),_:1},16))}},Jk="/olympia.jpg",Yk=s("h4",null,"Day 12 - Tue 10/18 - Cruise Day 8",-1),Zk=s("h2",null,[s("strong",null,"Olympia"),p(),s("span",{style:{"font-size":"75%"}},"(Anchor at Katakolon)")],-1),Qk=s("p",null,[p("\u{1F6A2} "),s("strong",null,"8:00"),p(": Arrive at port")],-1),Xk=s("h3",null,"Shore Excursions",-1),e4=s("p",null,[p("\u{1F3F0} "),s("strong",null,"8:00")],-1),t4=s("ul",null,[s("li",null,[p("W&R, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800",target:"_blank",rel:"noopener"},"Olympia & Magna Grecia"),p(" (5 hours)")])],-1),n4=s("p",null,[p("\u{1F6A2} "),s("strong",null,"5:00"),p(": Depart port")],-1),o4=s("p",null,[p("\u{1F374} "),s("strong",null,"6:30"),p(": D&D - "),s("a",{href:"https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE",target:"_blank",rel:"noopener"},"Steakhouse"),p(" Dinner Reservation for 2")],-1),r4=s("img",{src:Jk,height:"200",width:"400",style:{margin:"auto"}},null,-1),s4={__name:"43",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-12-olympia.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[r4]),default:E(()=>[Yk,Zk,Qk,Xk,e4,t4,n4,o4]),_:1},16))}},i4="/taormina-and-mount-etna.jpg",a4="/taormina-on-your-own.jpg",l4=s("h4",null,"Day 13 - Wed 10/19 - Cruise Day 9",-1),c4=s("h2",null,[s("strong",null,"Sicily"),p(),s("span",{style:{"font-size":"75%"}},"(Anchor at Messina)")],-1),u4=s("p",null,[p("\u{1F6A2} "),s("strong",null,"9:00"),p(": Arrive at port")],-1),d4=s("h3",null,"Shore Excursions",-1),h4=s("p",null,[p("\u{1F3F0} "),s("strong",null,"9:15")],-1),f4=s("ul",null,[s("li",null,[p("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915",target:"_blank",rel:"noopener"},"Taormina & Mount Etna"),p(" (8 hours)")])],-1),p4=s("p",null,[p("\u{1F3F0} "),s("strong",null,"10:15")],-1),m4=s("ul",null,[s("li",null,[p("D&D, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015",target:"_blank",rel:"noopener"},"Taormina on your own"),p(" (6.5 hours)")])],-1),g4=s("p",null,[p("\u{1F6A2} "),s("strong",null,"6:00"),p(": Depart port")],-1),y4=s("img",{src:i4,height:"200",width:"400",style:{margin:"auto"}},null,-1),_4=s("br",null,null,-1),v4=s("img",{src:a4,height:"150",width:"300",style:{margin:"auto"}},null,-1),w4={__name:"44",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-13-sicily.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[y4,_4,v4]),default:E(()=>[l4,c4,u4,d4,h4,f4,p4,m4,g4]),_:1},16))}},b4="/amalfi-coast-map.png",S4=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),k4=s("h2",null,[s("strong",null,"Naples (Amalfi Coast)")],-1),x4=s("p",null,[p("\u{1F6A2} "),s("strong",null,"7:00"),p(": Arrive at port")],-1),D4=s("h3",null,"Shore Excursions",-1),T4=s("p",null,[p("\u{1F3F0} "),s("strong",null,"9:00")],-1),P4=s("ul",null,[s("li",null,[p("All - "),s("a",{href:"https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900",target:"_blank",rel:"noopener"},"Best of the Amalfi Coast"),p(" (9.5 hours)")])],-1),$4=s("br",null,null,-1),A4=s("ul",null,[s("li",null,[p("Stops with free time in: "),s("ul",null,[s("li",null,"Amalfi Town"),s("li",null,"Positano"),s("li",null,"Sorrento")])])],-1),C4=s("p",null,[p("\u{1F6A2} "),s("strong",null,"7:00"),p(": Depart port")],-1),R4=s("img",{src:b4,height:"250",width:"500",style:{margin:"auto"}},null,-1),E4={__name:"45",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[R4]),default:E(()=>[S4,k4,x4,D4,T4,P4,$4,A4,C4]),_:1},16))}},M4="/amalfi-cathedral-exterior.jpg",F4="/amalfi-cathedral-interior.jpg",O4="/amalfi-town-map.png",z4=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),L4=s("h2",null,[p("Amalfi Coast Tour: "),s("strong",null,"Amalfi Town")],-1),j4=s("br",null,null,-1),q4=s("blockquote",null,[s("p",null,[p("Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we\u2019ll spend an hour of free time. A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the "),s("strong",null,"Amalfi Cathedral"),p(".")])],-1),I4=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:M4,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:F4,height:"200",width:"400",style:{margin:"auto"}})])])])],-1),V4=s("blockquote",null,[s("p",null,[p("A little further past the Cathedral, you\u2019ll find "),s("a",{href:"https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi",target:"_blank",rel:"noopener"},[s("strong",null,"Cuoppo d\u2019Amalfi")]),p(", a fried fish shop that fills cardboard cones with all manner of deep-sea life")])],-1),N4=s("img",{src:O4,height:"650",width:"325",style:{margin:"auto"}},null,-1),B4={__name:"46",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-amalfi.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[N4]),default:E(()=>[z4,L4,j4,q4,I4,V4]),_:1},16))}},W4="/amalfi-coast.jpg",H4="/positano-map.jpg",U4=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),K4=s("h2",null,[p("Amalfi Coast Tour: "),s("strong",null,"Positano")],-1),G4=s("br",null,null,-1),J4=s("img",{src:W4,height:"150",width:"300",style:{margin:"auto"}},null,-1),Y4=s("br",null,null,-1),Z4=s("blockquote",null,[s("p",null,[p("Next, we\u2019ll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea. There, we\u2019ll spend another hour of free time. The "),s("strong",null,"Church of Santa Maria Assunta"),p(" was given a baroque makeover in the 18th century.")])],-1),Q4=s("blockquote",null,[s("p",null,[p("Thirsty? Walk up to "),s("strong",null,"Enoteca Cuomo"),p(" and sample local red wines with homemade salami and sundried tomatoes.")])],-1),X4=s("img",{src:H4,height:"400",width:"400",style:{margin:"auto"}},null,-1),e3={__name:"47",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-positano.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[X4]),default:E(()=>[U4,K4,G4,J4,Y4,Z4,Q4]),_:1},16))}},t3="/sorrento-map.jpg",n3=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),o3=s("h2",null,[p("Amalfi Coast Tour: "),s("strong",null,"Sorrento")],-1),r3=s("blockquote",null,[s("p",null,[p("Next, we\u2019ll board a shuttle bus to rejoin our coach. The coach brings us to "),s("strong",null,"Sorrento"),p(", our final stop. We\u2019ll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.")])],-1),s3=s("br",null,null,-1),i3=s("blockquote",null,[s("p",null,[p("The "),s("strong",null,"Piazza Tasso"),p(" is Sorrento\u2019s living room. Just behind the "),s("strong",null,"Statue of Torquato Tasso"),p(" you\u2019ll find "),s("strong",null,"Fattoria Terranova"),p(", a family-run boutique offering free biscuits and tastes of liquers.")])],-1),a3=s("br",null,null,-1),l3=s("blockquote",null,[s("p",null,[p("A short walk brings you to the "),s("strong",null,"Cathedral"),p(", with its impressive inlaid-wood interior doors.")])],-1),c3=s("br",null,null,-1),u3=s("blockquote",null,[s("p",null,[p("Continue on to the "),s("strong",null,"Via San Cesareo"),p(", where you can sample Limoncello and other lemon products, famous to the Amalfi region.")])],-1),d3=s("img",{src:t3,height:"600",width:"300",style:{margin:"auto"}},null,-1),h3={__name:"48",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-sorrento.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{right:E(r=>[d3]),default:E(()=>[n3,o3,r3,s3,i3,a3,l3,c3,u3]),_:1},16))}},f3=s("h4",null,"Day 15 - Fri 10/21 - Cruise Day 11",-1),p3=s("h2",null,[s("strong",null,"Civitavecchia (Debarkation)")],-1),m3={__name:"49",setup(e){const t={srcSequence:"./slides/07-return-home/day-15-civitavecchia-port-and-debarkation.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[f3,p3]),_:1},16))}},g3=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),y3=s("h2",null,[s("strong",null,"Port to Civitavecchia Train Station")],-1),_3={__name:"50",setup(e){const t={layout:"two-cols",srcSequence:"./slides/07-return-home/day-15-civitavecchia-port-to-train-station.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{default:E(()=>[g3,y3]),_:1},16))}},v3=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),w3=s("h2",null,[s("strong",null,"Civitavecchia to Rome")],-1),b3={__name:"51",setup(e){const t={layout:"two-cols",srcSequence:"./slides/07-return-home/day-15-civitavecchia-to-rome.md"};return F(I),(n,o)=>(S(),j(Se,X(Q(t)),{default:E(()=>[v3,w3]),_:1},16))}},S3=s("h4",null,"Day 15 - Fri 10/21 - Rome",-1),k3=s("h2",null,[s("strong",null,"Last Day in Rome")],-1),x3=s("blockquote",null,[s("p",null,[p("If time allows, see "),s("a",{href:"https://www.tiktok.com/@travelbymitra/video/7051676676685565190",target:"_blank",rel:"noopener"},"Vicus Caprarius"),p(", the underground system of ancient pools that feed the Trevi Fountain. "),s("a",{href:"https://www.vicuscaprarius.com/en/#tariffe",target:"_blank",rel:"noopener"},"\u20AC4, no reservation required on Fridays")])],-1),D3={__name:"52",setup(e){const t={srcSequence:"./slides/07-return-home/day-15-last-day-in-rome.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[S3,k3,x3]),_:1},16))}},T3=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),P3=s("h2",null,[s("strong",null,"Rome to Airport")],-1),$3={__name:"53",setup(e){const t={srcSequence:"./slides/07-return-home/day-15-rome-to-airport-hilton.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[T3,P3]),_:1},16))}},A3=s("h4",null,"Day 16 - Sat 10/22 - Travel Day",-1),C3=s("h2",null,[s("strong",null,"Trans-Atlantic Flight to New York")],-1),R3={__name:"54",setup(e){const t={srcSequence:"./slides/07-return-home/day-16-transatlantic-flight-home.md"};return F(I),(n,o)=>(S(),j(je,X(Q(t)),{default:E(()=>[A3,C3]),_:1},16))}},E3=[{path:"1",name:"page-1",component:V_,meta:{title:"European Cruise 2022",theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md",slide:{raw:null,title:"European Cruise 2022 - Carnival Pride",level:1,content:`# European Cruise 2022 - Carnival Pride

## Italy, Turkey, and Greece

## October 6 - 22, 2022`,frontmatter:{title:"European Cruise 2022",theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md"},index:0,start:0,end:6,source:{filepath:"/Users/dave/europe-cruise-2022/slides/00-intro/001-cover.md",raw:`# European Cruise 2022 - Carnival Pride

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
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},index:0,start:0,end:28},filepath:"/Users/dave/europe-cruise-2022/slides/00-intro/001-cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:bv,meta:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md",slide:{raw:null,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence by Train</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, Accademia (Statue of David) |
| **3** | Sun | 10/9 | Florence -> Rome by Train, "Heart of Rome" Walk, Spanish Steps, Trevi Fountain |
| **4** | Mon | 10/10 | **Rome**: Colisseum, Roman Forum, St. Peter's Square |
| **5** | Tue | 10/11 | Rome -> Civitavecchia by Train, Embarkation & Cruise Departure |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"},index:1,start:0,end:10,source:{filepath:"/Users/dave/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",raw:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence by Train</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, Accademia (Statue of David) |
| **3** | Sun | 10/9 | Florence -> Rome by Train, "Heart of Rome" Walk, Spanish Steps, Trevi Fountain |
| **4** | Mon | 10/10 | **Rome**: Colisseum, Roman Forum, St. Peter's Square |
| **5** | Tue | 10/11 | Rome -> Civitavecchia by Train, Embarkation & Cruise Departure |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence by Train</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, Accademia (Statue of David) |
| **3** | Sun | 10/9 | Florence -> Rome by Train, "Heart of Rome" Walk, Spanish Steps, Trevi Fountain |
| **4** | Mon | 10/10 | **Rome**: Colisseum, Roman Forum, St. Peter's Square |
| **5** | Tue | 10/11 | Rome -> Civitavecchia by Train, Embarkation & Cruise Departure |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/01-itinerary/002-short-itinerary-part-1.md
---
`,content:"",frontmatter:{},index:1,start:28,end:32},filepath:"/Users/dave/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:xv,meta:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md",slide:{raw:null,title:"Itinerary at a Glance: Carnival Pride Meditteranean",level:1,content:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | **Mykonos** |
| **9** | Sat | 10/15 | Kusadasi (**Ephesus**), Turkey |
| **10** | Sun | 10/16 | **Santorini** |
| **11** | Mon | 10/17 | **Athens** |
| **12** | Tue | 10/18 | Katakolon (**Olympia**) |
| **13** | Wed | 10/19 | **Messina** |
| **14** | Thu | 10/20 | **Naples** (Capri & Pompeii) |`,frontmatter:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"},index:2,start:0,end:10,source:{filepath:"/Users/dave/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",raw:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | **Mykonos** |
| **9** | Sat | 10/15 | Kusadasi (**Ephesus**), Turkey |
| **10** | Sun | 10/16 | **Santorini** |
| **11** | Mon | 10/17 | **Athens** |
| **12** | Tue | 10/18 | Katakolon (**Olympia**) |
| **13** | Wed | 10/19 | **Messina** |
| **14** | Thu | 10/20 | **Naples** (Capri & Pompeii) |`,title:"Itinerary at a Glance: Carnival Pride Meditteranean",level:1,content:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | **Mykonos** |
| **9** | Sat | 10/15 | Kusadasi (**Ephesus**), Turkey |
| **10** | Sun | 10/16 | **Santorini** |
| **11** | Mon | 10/17 | **Athens** |
| **12** | Tue | 10/18 | Katakolon (**Olympia**) |
| **13** | Wed | 10/19 | **Messina** |
| **14** | Thu | 10/20 | **Naples** (Capri & Pompeii) |`,frontmatter:{title:"Itinerary at a Glance: Carnival Pride Meditteranean"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/01-itinerary/003-short-itinerary-part-2.md
---
`,content:"",frontmatter:{},index:2,start:32,end:36},filepath:"/Users/dave/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Pv,meta:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md",slide:{raw:null,title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",level:1,content:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | Debarkation, Civitavecchia -> **Rome** by Train, Sleep at Airport Hilton |
| **16** | Sat | 10/22 | Depart FCO (Rome) on American Airlines Flight 235 to JFK |`,frontmatter:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"},index:3,start:0,end:5,source:{filepath:"/Users/dave/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",raw:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | Debarkation, Civitavecchia -> **Rome** by Train, Sleep at Airport Hilton |
| **16** | Sat | 10/22 | Depart FCO (Rome) on American Airlines Flight 235 to JFK |`,title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",level:1,content:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | Debarkation, Civitavecchia -> **Rome** by Train, Sleep at Airport Hilton |
| **16** | Sat | 10/22 | Depart FCO (Rome) on American Airlines Flight 235 to JFK |`,frontmatter:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home"},index:0,start:0,end:5},inline:{raw:`---
src: ./slides/01-itinerary/004-short-itinerary-part-3.md
---
`,content:"",frontmatter:{},index:3,start:36,end:40},filepath:"/Users/dave/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:Lv,meta:{title:"Day 0 - Thu 10/6 - Travel Day",srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",slide:{raw:null,title:"Day 0 - Thu 10/6 - Travel Day",level:4,content:`#### Day 0 - Thu 10/6 - Travel Day
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
> Arrive at Leonardo da Vinci **9:00 AM next day** (Fri 10/7) <br>`,frontmatter:{title:"Day 0 - Thu 10/6 - Travel Day",srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md"},index:4,start:0,end:20,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",raw:`#### Day 0 - Thu 10/6 - Travel Day
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
`,content:"",frontmatter:{},index:4,start:40,end:44},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Gv,meta:{title:"Day 1 - Fri 10/7 - Travel Day",srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Travel Day",level:4,content:`#### Day 1 - Fri 10/7 - Travel Day
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
> Tickets are **\u20AC42** round trip`,frontmatter:{title:"Day 1 - Fri 10/7 - Travel Day",srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md"},index:5,start:0,end:26,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/006-day-1-rome-to-florence.md",raw:`#### Day 1 - Fri 10/7 - Travel Day
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
`,content:"",frontmatter:{},index:5,start:44,end:48},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/006-day-1-rome-to-florence.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Xv,meta:{srcSequence:"./slides/02-florence/007-florence-overview.md",slide:{raw:null,content:`|     |     |
| --- | --- |
|<img src="/florence-overview.png" height="400" width="400"/>| <ul> Day 1 <li> Walk from SMN Station to AirBnB (near Duomo) </li> <li> Explore Duomo, Markets, & Shops </li> <li> Rooftop Dinner </li> </ul> <ul> Day 2 <li> Uffizi Gallery, Palazzo Vecchio </li> <li> Ponte Vecchio </li> <li> Pitti Palace, Boboli Gardens </li> <li> Accademia (David) </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Florence](https://youtu.be/qzTyWRcQRXg) (YouTube, 16:22)</span>

<span style="font-size:50%">watch [13 Tips for a FANTASTIC Trip to Florence](https://youtu.be/q51Atktm244) (YouTube, 23:02)</span>`,frontmatter:{srcSequence:"./slides/02-florence/007-florence-overview.md"},index:6,start:0,end:7,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/007-florence-overview.md",raw:`|     |     |
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
`,content:"",frontmatter:{},index:6,start:48,end:52},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/007-florence-overview.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:l2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Arrival**

### AirBnB - [Via Santa Elisabetta 5, Florence](https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL) <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**2:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/pCivNQbnYBPQdVzu5)

<img src="/florence-skyline.jpg" height="250" width="500" style="margin:auto"/>
<br>

> We'll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. <br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md"},index:7,start:0,end:13,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/008-day-1-florence-arrival.md",raw:`#### Day 1 - Fri 10/7 - Florence
## **Arrival**

### AirBnB - [Via Santa Elisabetta 5, Florence](https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL) <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**2:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/pCivNQbnYBPQdVzu5)

<img src="/florence-skyline.jpg" height="250" width="500" style="margin:auto"/>
<br>

> We'll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. <br>

`,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Arrival**

### AirBnB - [Via Santa Elisabetta 5, Florence](https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL) <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**2:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/pCivNQbnYBPQdVzu5)

<img src="/florence-skyline.jpg" height="250" width="500" style="margin:auto"/>
<br>

> We'll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. <br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence"},index:0,start:0,end:13},inline:{raw:`---
src: ./slides/02-florence/008-day-1-florence-arrival.md
---
`,content:"",frontmatter:{},index:7,start:52,end:56},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/008-day-1-florence-arrival.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:y2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Exploring The Duomo**
<br>

> Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within. 

|     |     |     |
| --- | --- | --- | 
| <img src="/duomo-battistero.jpg" width="300" height="150"> | <img src="/duomo-interior.jpg" width="150" height="300"> | <img src="/duomo-dome.jpg" width="300" height="150"> |`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md"},index:8,start:0,end:9,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/009-day-1-florence-duomo.md",raw:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:8,start:56,end:60},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/009-day-1-florence-duomo.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:$2,meta:{title:"Day 1 - Fri 10/7 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence 
## **Food & Shopping**

> If you're hungry, there are many options near the AirBnB including: <br>
> - [**Caffeteria della Oblate**](https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html), a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.
> - [**Mercato Centrale**](https://www.mercatocentrale.com/florence/how-it-works/) The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.

<br>

> - [**San Lorenzo Market**](https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html) If you're itching to start shopping, step outside the Mercato Centrale and you'll find vendor stalls hawking all kinds of leather goods.  Be sure to negotiate to get the best price!

<br>

> We'll grab fresh food to bring back to the AirBnB for tomorrow's breakfast before our busy sightseeing day in Florence!

::right::

<img src="/heart-of-florence-restaurants.jpg" height="450" width="450" style="margin:auto"/>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md"},index:9,start:0,end:18,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/010-day-1-florence-restaurants.md",raw:`#### Day 1 - Fri 10/7 - Florence 
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
`,content:"",frontmatter:{layout:"two-cols"},index:9,start:60,end:65},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/010-day-1-florence-restaurants.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:z2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
## **Rooftop Dinner**

<br>

> Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we'll take a leisurely "golden hour" dinner at one of Florence's rooftop restaurants

<br>

### Angel Roofbar - Hotel Calimala <span style="color:red"> **(unconfirmed)** </span>

|     |     |
| --- | --- |
| [website](https://www.hotelcalimala.com/angel-roofbar-dining) / [dinner menu](https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf) | <img src="https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg" width=400 height=150> |
<br>`,frontmatter:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md"},index:10,start:0,end:19,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/011-day-1-florence-dinner.md",raw:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:10,start:65,end:69},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/011-day-1-florence-dinner.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:J2,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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

<img src="/florence-renaissance-walk.jpg" height="600" width="300" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md"},index:11,start:0,end:23,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/012-day-2-florence-walk-to-uffizi.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:11,start:69,end:74},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/012-day-2-florence-walk-to-uffizi.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:aw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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

<img src="/uffizi-gallery-floor-plan.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md"},index:12,start:0,end:21,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/013-day-2-florence-uffizi-gallery.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:12,start:74,end:79},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/013-day-2-florence-uffizi-gallery.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:yw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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

<img src="/florence-allantico-vinaio.jpeg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md"},index:13,start:0,end:18,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/014-day-2-allantico-vinaio.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:13,start:79,end:84},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/014-day-2-allantico-vinaio.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:$w,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Ponte Vecchio**

\u{1F6B6}**12:00 PM**: Walk to Pitti Palace [(10 mins)](https://goo.gl/maps/DzviAUZLp9neK5zWA)

> We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500's, to be replaced by goldsmiths that remain to this day.

- \u{1F4F7} Ponte Vecchio 
<img src="/ponte-vecchio.jpg" height="125" width="250">

<br>

> Next, we'll cross into the Oltrarno, literally the "other side of the River Arno".

::right::

<img src="/florence-oltrarno.jpg" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md"},index:14,start:0,end:17,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/015-day-2-florence-ponte-vecchio.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:14,start:84,end:89},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/015-day-2-florence-ponte-vecchio.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:jw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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

<img src="/palatine-gallery-floor-plan.jpg" height="400" width="800" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md"},index:15,start:0,end:22,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/016-day-2-florence-pitti-palace.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:15,start:89,end:94},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/016-day-2-florence-pitti-palace.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Yw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
|<img src="/florence-boboli-fountains.jpg" height="150" width="300" style="margin:auto">|`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md"},index:16,start:0,end:20,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/017-day-2-florence-boboli-gardens.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:16,start:94,end:99},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/017-day-2-florence-boboli-gardens.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:ab,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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

<img src="/accademia-floor-plan.png" height="650" width="325" style="margin:auto"/>`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md"},index:17,start:0,end:18,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/018-day-2-florence-accademia.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:17,start:99,end:104},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/018-day-2-florence-accademia.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:mb,meta:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** <span style="color:red"> **(unconfirmed)** </span>

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"},index:18,start:0,end:12,source:{filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",raw:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{},index:18,start:104,end:108},filepath:"/Users/dave/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Db,meta:{title:"Day 3 - Sun 10/9 - Travel Day",srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Travel Day",level:4,content:`#### Day 3 - Sun 10/9 - Travel Day
## **Florence to Rome**

> It's time to say goodbye to Florence.  Check-out time is 11:00, but we're going to try to get an early start for the trip back to Rome.

\u{1F6B6}**9:30 (approximate)**: Walk from AirBnB to Train Station [(11 minutes)](https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7)

\u{1F68B} **10:00 - 10:30 AM (approximate)**: Take a Train to Termini Train Station in Rome

<img src="/florence-to-rome.png" height="800" width="400" style="margin:auto"/>

<br>

> A bullet train runs from **Santa Maria Novella** Train Station in Florence to **Termini** Station in Rome. <br>
> The ride lasts **1 hour 36 mins**, and the train departs every 15-30 minutes depending on the time of day. <br>`,frontmatter:{title:"Day 3 - Sun 10/9 - Travel Day",srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md"},index:19,start:0,end:15,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/020-day-3-florence-to-rome.md",raw:`#### Day 3 - Sun 10/9 - Travel Day
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
`,content:"",frontmatter:{},index:19,start:108,end:112},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/020-day-3-florence-to-rome.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Ab,meta:{srcSequence:"./slides/03-rome/021-rome-overview.md",slide:{raw:null,content:`|     |     |
| --- | --- |
|<img src="/rome-neighborhoods.png" height="400" width="400"/>| <ul> Day 3 <li> Walk from Rome Termini Station to AirBnB </li> <li> Altar of the Fatherland </li> <li> "Heart of Rome" Walking Tour </li> </ul> <ul> Day 4 <li> St. Peter's Square </li> <li> Roman Forum </li> <li> Colisseum </li> </ul> | 

<span style="font-size:50%">watch [Rick Steve's Travel Talk - Rome](https://youtu.be/aaKl40z6MSw) (YouTube, 24:05)
</span>`,frontmatter:{srcSequence:"./slides/03-rome/021-rome-overview.md"},index:20,start:0,end:8,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/021-rome-overview.md",raw:`|     |     |
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
`,content:"",frontmatter:{},index:20,start:112,end:116},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/021-rome-overview.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:jb,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Arrival**
### [AirBnB - Via Merulana, 94 int 6, Rome](https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL)     <span style="font-size:75%">(Check-in Time: 3:00 PM)</span>

\u{1F6B6}**12:30 (approximate)**: Walk from Train Station to AirBnB [(11 minutes)](https://goo.gl/maps/UoVfD7pYrtoNMjom7)
|     |     |
| --- | --- |
| <img src="/rome-lazio.jpg" height="200" width="400" style="margin:auto"/> | <img src="/rome-airbnb.png" width=275 height=275> <span style="font-size:50%">(our apartment is on the third floor)</span> |


> We'll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day's sightseeing.`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md"},index:21,start:0,end:12,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/022-day-3-rome-arrival.md",raw:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{},index:21,start:116,end:120},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/022-day-3-rome-arrival.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Qb,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome 
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

<img src="/rome-airbnb-to-piazza-navona.png" height="319" width="425" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md"},index:22,start:0,end:22,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",raw:`#### Day 3 - Sun 10/9 - Rome 
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
`,content:"",frontmatter:{layout:"two-cols"},index:22,start:120,end:125},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:lS,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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

<img src="/heart-of-rome-walk-map.png" height="400" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md"},index:23,start:0,end:21,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",raw:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:23,start:125,end:130},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:bS,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Pantheon**

<br>

<img src="/rome-pantheon-exterior.jpg" height="200" width="400" style="margin:auto"/>

> <span style="font-size:65%">The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.</span>

<span style="font-size:50%">
(open until 6:00 PM)</span> <br> 

<span style="font-size:50%">listen to [Rick Steves' Pantheon Audio Tour](https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3) (MP3, 23:20)</span>

::right::

<img src="/rome-pantheon-floor-plan.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md"},index:24,start:0,end:19,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/025-day-3-rome-pantheon.md",raw:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:24,start:130,end:135},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/025-day-3-rome-pantheon.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:CS,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Piazza di Montecitorio, Parliament, Piazza Colonna**

|     |     |     |
| --- | --- | --- | 
| <img src="/rome-piazza-di-montecitorio.jpg" width="300" height="150"> | <img src="/rome-parliament.jpg" width="200" height="400"> | <img src="/rome-piazza-colonna.jpeg" width="300" height="150"> |

> Walking from the Pantheon towards the Trevi Fountain, we'll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.

> One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD.  This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md"},index:25,start:0,end:10,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",raw:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{},index:25,start:135,end:139},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:VS,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Trevi Fountain**

\u{1F4F7} **6:00 (approximate)**: Arrive at the Trevi Fountain

> Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.

<br>

> We'll see the Trevi Fountain twice today. Once during the "golden hour", illuminated  by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.  

<br>

> If you want to skip the previous parts of this walk, and do something else for the afternoon, **6:00 PM** is the time we should all meet up, before we head on to the Spanish Steps.

::right::

<img src="/rome-trevi-fountain-night.jpg" height="200" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md"},index:26,start:0,end:18,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/027-day-3-rome-trevi-fountain.md",raw:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:26,start:139,end:144},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/027-day-3-rome-trevi-fountain.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:YS,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
## **Spanish Steps**

<span style="font-size:80%">\u{1F6B6}**6:30**: Walk from Trevi Fountain to the Spanish Steps [(8 mins)](https://goo.gl/maps/MKdDinjuN6Tthqzu7)</span>

> 138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini's father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.<br>
> Partway up, the steps fan out around a central terrace, forming a butterfly shape.
> An obelisk, framed by two Baroque church towers, stands at the top.

This is where our touring for the day ends.  We'll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.

>Enjoy the steps, but whatever you do, don't sit down on them, or it'll cost you a **\u20AC250 fine** (seriously).

::right::

<img src="/spanish-steps.jpg" height="250" width="500" style="margin:auto"/>`,frontmatter:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md"},index:27,start:0,end:16,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/028-day-3-rome-spanish-steps.md",raw:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:27,start:144,end:149},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/028-day-3-rome-spanish-steps.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:s5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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



> <span style="font-size:70%">All public transportation uses the same ticket.<br> It costs **\u20AC1.50** and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.</span>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md"},index:28,start:0,end:23,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",raw:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:28,start:149,end:154},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:S5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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

<img src="/rome-pieta.jpg" height="75" width="150" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md"},index:29,start:0,end:28,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/030-day-4-rome-st-peters-square.md",raw:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:29,start:154,end:159},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/030-day-4-rome-st-peters-square.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:C5,meta:{title:"Day 4 - Mon 10/10 - Rome",srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Walk to the Forum**

\u{1F6B6}**12:00 PM (approx.)**: Walk from St. Peter's Square to the Roman Forum [(36 minutes)](https://goo.gl/maps/rNAWJa3WxTxV2KLh9)

> This 1.8 mile walk crosses the River Tiber at the **Ponte Vittorio Emanuele II** continuing to the **Corso Vittorio Emaulele II**, a main east-west artery.

<br>

<img src="/rome-st-peters-walk-to-forum.png" height="325" width="650" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md"},index:30,start:0,end:10,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",raw:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{},index:30,start:159,end:163},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:M5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-roman-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **The Forum**`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-roman-forum.md"},index:31,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/day-4-rome-roman-forum.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **The Forum**`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **The Forum**`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:2},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/day-4-rome-roman-forum.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:31,start:163,end:168},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/day-4-rome-roman-forum.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:z5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-palatine-hill.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Palatine Hill**`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-palatine-hill.md"},index:32,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/day-4-rome-palatine-hill.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **Palatine Hill**`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Palatine Hill**`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:2},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/day-4-rome-palatine-hill.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:32,start:168,end:173},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/day-4-rome-palatine-hill.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:N5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-colosseum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Colosseum**

<span style="font-size:50%">listen to [Rick Steves' Colosseum Audio Tour](https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3) (MP3, 41:05)</span>

::right::

<img src="/rome-colosseum-map.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/day-4-rome-colosseum.md"},index:33,start:0,end:8,source:{filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/day-4-rome-colosseum.md",raw:`#### Day 4 - Mon 10/10 - Rome
## **Colosseum**

<span style="font-size:50%">listen to [Rick Steves' Colosseum Audio Tour](https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3) (MP3, 41:05)</span>

::right::

<img src="/rome-colosseum-map.png" height="800" width="400" style="margin:auto"/>`,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
## **Colosseum**

<span style="font-size:50%">listen to [Rick Steves' Colosseum Audio Tour](https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3) (MP3, 41:05)</span>

::right::

<img src="/rome-colosseum-map.png" height="800" width="400" style="margin:auto"/>`,frontmatter:{title:"Day 4 - Mon 10/10 - Rome"},index:0,start:0,end:8},inline:{raw:`---
layout: two-cols
src: ./slides/03-rome/day-4-rome-colosseum.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:33,start:173,end:178},filepath:"/Users/dave/europe-cruise-2022/slides/03-rome/day-4-rome-colosseum.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:H5,meta:{title:"Day 5 - Tue 10/11 - Travel Day",layout:"two-cols",srcSequence:"./slides/04-cruise-departure/day-5-rome-to-civitavecchia.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Rome to Civitavecchia**`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day",layout:"two-cols",srcSequence:"./slides/04-cruise-departure/day-5-rome-to-civitavecchia.md"},index:34,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-5-rome-to-civitavecchia.md",raw:`#### Day 5 - Tue 10/11 - Travel Day
## **Rome to Civitavecchia**`,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Rome to Civitavecchia**`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
layout: two-cols
src: ./slides/04-cruise-departure/day-5-rome-to-civitavecchia.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:34,start:178,end:183},filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-5-rome-to-civitavecchia.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:G5,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/day-5-civitavecchia-train-station-to-transit-center.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Civitavecchia Train Station to Transit Center**`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/day-5-civitavecchia-train-station-to-transit-center.md"},index:35,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-5-civitavecchia-train-station-to-transit-center.md",raw:`#### Day 5 - Tue 10/11 - Travel Day
## **Civitavecchia Train Station to Transit Center**`,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
## **Civitavecchia Train Station to Transit Center**`,frontmatter:{title:"Day 5 - Tue 10/11 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/04-cruise-departure/day-5-civitavecchia-train-station-to-transit-center.md
---
`,content:"",frontmatter:{},index:35,start:183,end:187},filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-5-civitavecchia-train-station-to-transit-center.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:Z5,meta:{title:"Day 5 - Tue 10/11 - Cruise Day 1",srcSequence:"./slides/04-cruise-departure/day-5-embarkation-and-cruise-departure.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Cruise Day 1",level:4,content:`#### Day 5 - Tue 10/11 - Cruise Day 1
## **Transit Center to Port, Embarkation and Cruise Departure**`,frontmatter:{title:"Day 5 - Tue 10/11 - Cruise Day 1",srcSequence:"./slides/04-cruise-departure/day-5-embarkation-and-cruise-departure.md"},index:36,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-5-embarkation-and-cruise-departure.md",raw:`#### Day 5 - Tue 10/11 - Cruise Day 1
## **Transit Center to Port, Embarkation and Cruise Departure**`,title:"Day 5 - Tue 10/11 - Cruise Day 1",level:4,content:`#### Day 5 - Tue 10/11 - Cruise Day 1
## **Transit Center to Port, Embarkation and Cruise Departure**`,frontmatter:{title:"Day 5 - Tue 10/11 - Cruise Day 1"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/04-cruise-departure/day-5-embarkation-and-cruise-departure.md
---
`,content:"",frontmatter:{},index:36,start:187,end:191},filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-5-embarkation-and-cruise-departure.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:ek,meta:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/day-6-and-7-at-sea-days.md",slide:{raw:null,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/day-6-and-7-at-sea-days.md"},index:37,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-6-and-7-at-sea-days.md",raw:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/04-cruise-departure/day-6-and-7-at-sea-days.md
---
`,content:"",frontmatter:{},index:37,start:191,end:195},filepath:"/Users/dave/europe-cruise-2022/slides/04-cruise-departure/day-6-and-7-at-sea-days.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:lk,meta:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-8-mykonos.md",slide:{raw:null,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port`,frontmatter:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-8-mykonos.md"},index:38,start:0,end:11,source:{filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-8-mykonos.md",raw:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port
`,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port`,frontmatter:{title:"Day 8 - Fri 10/14 - Cruise Day 4"},index:0,start:0,end:11},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/day-8-mykonos.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:38,start:195,end:200},filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-8-mykonos.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:_k,meta:{title:"Day 9 - Sat 10/15 - Cruise Day 5",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-9-ephesus.md",slide:{raw:null,title:"Day 9 - Sat 10/15 - Cruise Day 5",level:4,content:`#### Day 9 - Sat 10/15 - Cruise Day 5
## **Ephesus** <span style="font-size:75%">(Anchor at Kusadasi, Turkey)</span>

\u{1F6A2} **7:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, D&D - [Terrace House & Ancient Ephesus](https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800) (4.25 hours)

\u{1F6A2} **5:00**: Depart port

::right::
<img src="/ephesus.jpg" height="210" width="420" style="margin:auto">`,frontmatter:{title:"Day 9 - Sat 10/15 - Cruise Day 5",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-9-ephesus.md"},index:39,start:0,end:13,source:{filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-9-ephesus.md",raw:`#### Day 9 - Sat 10/15 - Cruise Day 5
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
src: ./slides/05-turkey-and-greece/day-9-ephesus.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:39,start:200,end:205},filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-9-ephesus.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Mk,meta:{title:"Day 10 - Sun 10/16 - Cruise Day 6",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-10-santorini.md",slide:{raw:null,title:"Day 10 - Sun 10/16 - Cruise Day 6",level:4,content:`#### Day 10 - Sun 10/16 - Cruise Day 6
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
|<img src="/santorini-catamaran.jpg" height="200" width="400" style="margin:auto">|<img src="/santorini-caldera.jpg" height="150" width="300" style="margin:auto">|`,frontmatter:{title:"Day 10 - Sun 10/16 - Cruise Day 6",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-10-santorini.md"},index:40,start:0,end:21,source:{filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-10-santorini.md",raw:`#### Day 10 - Sun 10/16 - Cruise Day 6
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
src: ./slides/05-turkey-and-greece/day-10-santorini.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:40,start:205,end:210},filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-10-santorini.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Gk,meta:{title:"Day 11 - Mon 10/17 - Cruise Day 7",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-11-athens.md",slide:{raw:null,title:"Day 11 - Mon 10/17 - Cruise Day 7",level:4,content:`#### Day 11 - Mon 10/17 - Cruise Day 7
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
<img src="/athens-mycenae.jpg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 11 - Mon 10/17 - Cruise Day 7",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-11-athens.md"},index:41,start:0,end:19,source:{filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-11-athens.md",raw:`#### Day 11 - Mon 10/17 - Cruise Day 7
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
src: ./slides/05-turkey-and-greece/day-11-athens.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:41,start:210,end:215},filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-11-athens.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:s4,meta:{title:"Day 12 - Tue 10/18 - Cruise Day 8",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-12-olympia.md",slide:{raw:null,title:"Day 12 - Tue 10/18 - Cruise Day 8",level:4,content:`#### Day 12 - Tue 10/18 - Cruise Day 8
## **Olympia** <span style="font-size:75%">(Anchor at Katakolon)</span>

\u{1F6A2} **8:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **8:00** 
* W&R, T&K, J&J - [Olympia & Magna Grecia](https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800) (5 hours)

\u{1F6A2} **5:00**: Depart port

\u{1F374} **6:30**: D&D - [Steakhouse](https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE) Dinner Reservation for 2

::right::

<img src="/olympia.jpg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 12 - Tue 10/18 - Cruise Day 8",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/day-12-olympia.md"},index:42,start:0,end:16,source:{filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-12-olympia.md",raw:`#### Day 12 - Tue 10/18 - Cruise Day 8
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
src: ./slides/05-turkey-and-greece/day-12-olympia.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:42,start:215,end:220},filepath:"/Users/dave/europe-cruise-2022/slides/05-turkey-and-greece/day-12-olympia.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:w4,meta:{title:"Day 13 - Wed 10/19 - Cruise Day 9",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-13-sicily.md",slide:{raw:null,title:"Day 13 - Wed 10/19 - Cruise Day 9",level:4,content:`#### Day 13 - Wed 10/19 - Cruise Day 9
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
<img src="/taormina-on-your-own.jpg" height="150" width="300" style="margin:auto">`,frontmatter:{title:"Day 13 - Wed 10/19 - Cruise Day 9",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-13-sicily.md"},index:43,start:0,end:19,source:{filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-13-sicily.md",raw:`#### Day 13 - Wed 10/19 - Cruise Day 9
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
src: ./slides/06-sicily-and-naples/day-13-sicily.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:43,start:220,end:225},filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-13-sicily.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:E4,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
<img src="/amalfi-coast-map.png" height="250" width="500" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples.md"},index:44,start:0,end:22,source:{filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
src: ./slides/06-sicily-and-naples/day-14-naples.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:44,start:225,end:230},filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:B4,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-amalfi.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Amalfi Town**

<br>

> Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we'll spend an hour of free time. 
> A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the **Amalfi Cathedral**.

|     |     |
| --- | --- |
|<img src="/amalfi-cathedral-exterior.jpg" height="200" width="400" style="margin:auto">|<img src="/amalfi-cathedral-interior.jpg" height="200" width="400" style="margin:auto">|

> A little further past the Cathedral, you'll find [**Cuoppo d'Amalfi**](https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi), a fried fish shop that fills cardboard cones with all manner of deep-sea life

::right::

<img src="/amalfi-town-map.png" height="650" width="325" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-amalfi.md"},index:45,start:0,end:17,source:{filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples-amalfi.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
src: ./slides/06-sicily-and-naples/day-14-naples-amalfi.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:45,start:230,end:235},filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples-amalfi.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:e3,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-positano.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Positano**
<br>
<img src="/amalfi-coast.jpg" height="150" width="300" style="margin:auto">
<br>

> Next, we'll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea.  There, we'll spend another hour of free time. 
> The **Church of Santa Maria Assunta** was given a baroque makeover in the 18th century.


> Thirsty? Walk up to **Enoteca Cuomo** and sample local red wines with homemade salami and sundried tomatoes.

::right::

<img src="/positano-map.jpg" height="400" width="400" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-positano.md"},index:46,start:0,end:15,source:{filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples-positano.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
src: ./slides/06-sicily-and-naples/day-14-naples-positano.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:46,start:235,end:240},filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples-positano.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:h3,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-sorrento.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
## Amalfi Coast Tour: **Sorrento**

> Next, we'll board a shuttle bus to rejoin our coach.  The coach brings us to **Sorrento**, our final stop.  We'll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.

<br>

> The **Piazza Tasso** is Sorrento's living room. Just behind the **Statue of Torquato Tasso** you'll find **Fattoria Terranova**, a family-run boutique offering free biscuits and tastes of liquers. 

 <br>

> A short walk brings you to the **Cathedral**, with its impressive inlaid-wood interior doors.  

<br>

> Continue on to the **Via San Cesareo**, where you can sample Limoncello and other lemon products, famous to the Amalfi region.

::right::

<img src="/sorrento-map.jpg" height="600" width="300" style="margin:auto">`,frontmatter:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/day-14-naples-sorrento.md"},index:47,start:0,end:20,source:{filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples-sorrento.md",raw:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
src: ./slides/06-sicily-and-naples/day-14-naples-sorrento.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:47,start:240,end:245},filepath:"/Users/dave/europe-cruise-2022/slides/06-sicily-and-naples/day-14-naples-sorrento.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:m3,meta:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/day-15-civitavecchia-port-and-debarkation.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**`,frontmatter:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/day-15-civitavecchia-port-and-debarkation.md"},index:48,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-civitavecchia-port-and-debarkation.md",raw:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**`,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**`,frontmatter:{title:"Day 15 - Fri 10/21 - Cruise Day 11"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/day-15-civitavecchia-port-and-debarkation.md
---
`,content:"",frontmatter:{},index:48,start:245,end:249},filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-civitavecchia-port-and-debarkation.md",notesHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:_3,meta:{title:"Day 15 - Fri 10/21 - Travel Day",layout:"two-cols",srcSequence:"./slides/07-return-home/day-15-civitavecchia-port-to-train-station.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",layout:"two-cols",srcSequence:"./slides/07-return-home/day-15-civitavecchia-port-to-train-station.md"},index:49,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-civitavecchia-port-to-train-station.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
layout: two-cols
src: ./slides/07-return-home/day-15-civitavecchia-port-to-train-station.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:49,start:249,end:254},filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-civitavecchia-port-to-train-station.md",notesHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:b3,meta:{title:"Day 15 - Fri 10/21 - Travel Day",layout:"two-cols",srcSequence:"./slides/07-return-home/day-15-civitavecchia-to-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",layout:"two-cols",srcSequence:"./slides/07-return-home/day-15-civitavecchia-to-rome.md"},index:50,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-civitavecchia-to-rome.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
layout: two-cols
src: ./slides/07-return-home/day-15-civitavecchia-to-rome.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:50,start:254,end:259},filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-civitavecchia-to-rome.md",notesHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:D3,meta:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/day-15-last-day-in-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/day-15-last-day-in-rome.md"},index:51,start:0,end:4,source:{filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-last-day-in-rome.md",raw:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome"},index:0,start:0,end:4},inline:{raw:`---
src: ./slides/07-return-home/day-15-last-day-in-rome.md
---
`,content:"",frontmatter:{},index:51,start:259,end:263},filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-last-day-in-rome.md",notesHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:$3,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/day-15-rome-to-airport-hilton.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/day-15-rome-to-airport-hilton.md"},index:52,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-rome-to-airport-hilton.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/day-15-rome-to-airport-hilton.md
---
`,content:"",frontmatter:{},index:52,start:263,end:267},filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-15-rome-to-airport-hilton.md",notesHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:R3,meta:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/day-16-transatlantic-flight-home.md",slide:{raw:null,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/day-16-transatlantic-flight-home.md"},index:53,start:0,end:2,source:{filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-16-transatlantic-flight-home.md",raw:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/day-16-transatlantic-flight-home.md
---


`,content:"",frontmatter:{},index:53,start:267,end:273},filepath:"/Users/dave/europe-cruise-2022/slides/07-return-home/day-16-transatlantic-flight-home.md",notesHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",component:F_,meta:{layout:"end"}}],We=E3,M3=[{name:"play",path:"/",component:T_,children:[...We]},{name:"print",path:"/print",component:R_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>io(()=>import("./Presenter.f39f0ec7.js"),["assets/Presenter.f39f0ec7.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.0f336d60.js"]),beforeEnter:e=>{if(!vn.remote||vn.remote===e.query.password)return!0;if(vn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(vn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=y1({history:M0("/"),routes:M3});function F3(e,t,{mode:n="replace"}={}){return P({get(){const o=gt.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ye(()=>{gt[b(n)]({query:{...gt.currentRoute.value.query,[e]:o}})})}})}const Xu=H(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),Xu.value+=1})});const Jt=P(()=>gt.currentRoute.value),Yn=P(()=>Jt.value.query.print!==void 0),O3=P(()=>Jt.value.query.print==="clicks"),Nt=P(()=>Jt.value.query.embedded!==void 0),Lt=P(()=>Jt.value.path.startsWith("/presenter")),To=P(()=>Yn.value&&!O3.value),Qs=P(()=>Jt.value.query.password),z3=P(()=>!Lt.value&&(!ke.remote||Qs.value===ke.remote)),ql=F3("clicks","0"),ed=P(()=>We.length-1),L3=P(()=>Jt.value.path),He=P(()=>parseInt(L3.value.split(/\//g).slice(-1)[0])||1);P(()=>Jr(He.value));const dt=P(()=>We.find(e=>e.path===`${He.value}`));P(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});P(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const ps=P(()=>We.find(e=>e.path===`${Math.min(We.length,He.value+1)}`)),j3=P(()=>{var e,t;return Xu.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ct=P({get(){if(To.value)return 99999;let e=+(ql.value||0);return isNaN(e)&&(e=0),e},set(e){ql.value=e.toString()}}),$r=P(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:j3.value.length)}),q3=P(()=>He.value<We.length-1||Ct.value<$r.value),I3=P(()=>He.value>1||Ct.value>0),V3=P(()=>We.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Ni(e,t),e),[])),N3=P(()=>Bi(V3.value,dt.value));P(()=>Wi(N3.value));function rn(){$r.value<=Ct.value?Vo():Ct.value+=1}async function sn(){Ct.value<=0?await No():Ct.value-=1}function Jr(e){return Lt.value?`/presenter/${e}`:`/${e}`}function Vo(){const e=Math.min(We.length,He.value+1);return oo(e)}async function No(e=!0){const t=Math.max(1,He.value-1);await oo(t),e&&$r.value&&gt.replace({query:{...Jt.value.query,clicks:$r.value}})}function oo(e,t){return gt.push({path:Jr(e),query:{...Jt.value.query,clicks:t}})}function B3(e){const t=H(0),{direction:n,distanceX:o,distanceY:r}=s0(e,{onSwipeStart(i){i.pointerType==="touch"&&(qo.value||(t.value=Vs()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||qo.value)return;const a=Math.abs(o.value),l=Math.abs(r.value);a/window.innerWidth>.3||a>100?n.value===Ht.LEFT?rn():sn():(l/window.innerHeight>.4||l>200)&&(n.value===Ht.DOWN?No():Vo())}})}async function Xs(){const{saveAs:e}=await io(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(vu(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/slidev-exported.pdf",`${ke.title}.pdf`)}async function W3(e){var t,n;if(e==null){const o=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ni(e,t,n=1){var r,i,a,l,c;const o=(i=(r=t.meta)==null?void 0:r.slide)==null?void 0:i.level;o&&o>n&&e.length>0?Ni(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Bi(e,t,n=!1,o){return e.map(r=>{const i={...r,active:r.path===(t==null?void 0:t.path),hasActiveParent:n};return i.children.length>0&&(i.children=Bi(i.children,t,i.active||i.hasActiveParent,i)),o&&(i.active||i.activeParent)&&(o.activeParent=!0),i})}function Wi(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Wi(n.children,t+1)}))}function H3(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");$p({title:e}),zp(`${e} - shared`),Ip(`${e} - drawings`);function t(){Lt.value&&(Wa("page",+He.value),Wa("clicks",Ct.value))}gt.afterEach(t),fe(Ct,t),Lp(n=>{(+n.page!=+He.value||Ct.value!==n.clicks)&&gt.replace({path:Jr(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const U3=De({__name:"App",setup(e){return F(I),H3(),(t,n)=>{const o=Oo("RouterView"),r=Oo("StarportCarrier");return S(),U(Pe,null,[Z(o),Z(r)],64)}}});function ms(e){return e!==null&&typeof e=="object"}function ei(e,t,n=".",o){if(!ms(t))return ei(e,{},n,o);const r=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const a=e[i];a!=null&&(o&&o(r,i,a,n)||(Array.isArray(a)&&Array.isArray(r[i])?r[i]=a.concat(r[i]):ms(a)&&ms(r[i])?r[i]=ei(a,r[i],(n?`${n}.`:"")+i.toString(),o):r[i]=a))}return r}function K3(e){return(...t)=>t.reduce((n,o)=>ei(n,o,"",e),{})}const G3=K3(),td=1/60*1e3,J3=typeof performance<"u"?()=>performance.now():()=>Date.now(),nd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(J3()),td);function Y3(e){let t=[],n=[],o=0,r=!1,i=!1;const a=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const h=d&&r,f=h?t:n;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),h&&r&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(r){i=!0;return}if(r=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),a.has(d)&&(l.schedule(d),e())}r=!1,i&&(i=!1,l.process(c))}};return l}const Z3=40;let ti=!0,Bo=!1,ni=!1;const Zn={delta:0,timestamp:0},Ko=["read","update","preRender","render","postRender"],Yr=Ko.reduce((e,t)=>(e[t]=Y3(()=>Bo=!0),e),{}),oi=Ko.reduce((e,t)=>{const n=Yr[t];return e[t]=(o,r=!1,i=!1)=>(Bo||ex(),n.schedule(o,r,i)),e},{}),Q3=Ko.reduce((e,t)=>(e[t]=Yr[t].cancel,e),{});Ko.reduce((e,t)=>(e[t]=()=>Yr[t].process(Zn),e),{});const X3=e=>Yr[e].process(Zn),od=e=>{Bo=!1,Zn.delta=ti?td:Math.max(Math.min(e-Zn.timestamp,Z3),1),Zn.timestamp=e,ni=!0,Ko.forEach(X3),ni=!1,Bo&&(ti=!1,nd(od))},ex=()=>{Bo=!0,ti=!0,ni||nd(od)},rd=()=>Zn;function sd(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n}var tx=function(){},Il=function(){};const ri=(e,t,n)=>Math.min(Math.max(n,e),t),gs=.001,nx=.01,Vl=10,ox=.05,rx=1;function sx({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let r,i;tx(e<=Vl*1e3);let a=1-t;a=ri(ox,rx,a),e=ri(nx,Vl,e/1e3),a<1?(r=u=>{const d=u*a,h=d*e,f=d-n,m=si(u,a),g=Math.exp(-h);return gs-f/m*g},i=u=>{const h=u*a*e,f=h*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,g=Math.exp(-h),w=si(Math.pow(u,2),a);return(-r(u)+gs>0?-1:1)*((f-m)*g)/w}):(r=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-gs+d*h},i=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=ax(r,i,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const ix=12;function ax(e,t,n){let o=n;for(let r=1;r<ix;r++)o=o-e(o)/t(o);return o}function si(e,t){return e*Math.sqrt(1-t*t)}const lx=["duration","bounce"],cx=["stiffness","damping","mass"];function Nl(e,t){return t.some(n=>e[n]!==void 0)}function ux(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Nl(e,cx)&&Nl(e,lx)){const n=sx(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Hi(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:r}=e,i=sd(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:h,isResolvedFromDuration:f}=ux(i),m=Bl,g=Bl;function w(){const v=d?-(d/1e3):0,T=n-t,x=c/(2*Math.sqrt(l*u)),D=Math.sqrt(l/u)/1e3;if(r===void 0&&(r=Math.min(Math.abs(n-t)/100,.4)),x<1){const $=si(D,x);m=q=>{const O=Math.exp(-x*D*q);return n-O*((v+x*D*T)/$*Math.sin($*q)+T*Math.cos($*q))},g=q=>{const O=Math.exp(-x*D*q);return x*D*O*(Math.sin($*q)*(v+x*D*T)/$+T*Math.cos($*q))-O*(Math.cos($*q)*(v+x*D*T)-$*T*Math.sin($*q))}}else if(x===1)m=$=>n-Math.exp(-D*$)*(T+(v+D*T)*$);else{const $=D*Math.sqrt(x*x-1);m=q=>{const O=Math.exp(-x*D*q),B=Math.min($*q,300);return n-O*((v+x*D*T)*Math.sinh(B)+$*T*Math.cosh(B))/$}}}return w(),{next:v=>{const T=m(v);if(f)a.done=v>=h;else{const x=g(v)*1e3,D=Math.abs(x)<=o,$=Math.abs(n-T)<=r;a.done=D&&$}return a.value=a.done?n:T,a},flipTarget:()=>{d=-d,[t,n]=[n,t],w()}}}Hi.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Bl=e=>0,id=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Ui=(e,t,n)=>-n*e+n*t+e,ad=(e,t)=>n=>Math.max(Math.min(n,t),e),Po=e=>e%1?Number(e.toFixed(5)):e,Wo=/(-)?([\d]*\.?[\d])+/g,ii=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,dx=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Go(e){return typeof e=="string"}const Jo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},$o=Object.assign(Object.assign({},Jo),{transform:ad(0,1)}),sr=Object.assign(Object.assign({},Jo),{default:1}),Ki=e=>({test:t=>Go(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fn=Ki("deg"),Ao=Ki("%"),ce=Ki("px"),Wl=Object.assign(Object.assign({},Ao),{parse:e=>Ao.parse(e)/100,transform:e=>Ao.transform(e*100)}),Gi=(e,t)=>n=>Boolean(Go(n)&&dx.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),ld=(e,t,n)=>o=>{if(!Go(o))return o;const[r,i,a,l]=o.match(Wo);return{[e]:parseFloat(r),[t]:parseFloat(i),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},bn={test:Gi("hsl","hue"),parse:ld("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+Ao.transform(Po(t))+", "+Ao.transform(Po(n))+", "+Po($o.transform(o))+")"},hx=ad(0,255),ys=Object.assign(Object.assign({},Jo),{transform:e=>Math.round(hx(e))}),en={test:Gi("rgb","red"),parse:ld("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+ys.transform(e)+", "+ys.transform(t)+", "+ys.transform(n)+", "+Po($o.transform(o))+")"};function fx(e){let t="",n="",o="",r="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),r=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),r=e.substr(4,1),t+=t,n+=n,o+=o,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:r?parseInt(r,16)/255:1}}const ai={test:Gi("#"),parse:fx,transform:en.transform},st={test:e=>en.test(e)||ai.test(e)||bn.test(e),parse:e=>en.test(e)?en.parse(e):bn.test(e)?bn.parse(e):ai.parse(e),transform:e=>Go(e)?e:e.hasOwnProperty("red")?en.transform(e):bn.transform(e)},cd="${c}",ud="${n}";function px(e){var t,n,o,r;return isNaN(e)&&Go(e)&&((n=(t=e.match(Wo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((r=(o=e.match(ii))===null||o===void 0?void 0:o.length)!==null&&r!==void 0?r:0)>0}function dd(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(ii);o&&(n=o.length,e=e.replace(ii,cd),t.push(...o.map(st.parse)));const r=e.match(Wo);return r&&(e=e.replace(Wo,ud),t.push(...r.map(Jo.parse))),{values:t,numColors:n,tokenised:e}}function hd(e){return dd(e).values}function fd(e){const{values:t,numColors:n,tokenised:o}=dd(e),r=t.length;return i=>{let a=o;for(let l=0;l<r;l++)a=a.replace(l<n?cd:ud,l<n?st.transform(i[l]):Po(i[l]));return a}}const mx=e=>typeof e=="number"?0:e;function gx(e){const t=hd(e);return fd(e)(t.map(mx))}const Yo={test:px,parse:hd,createTransformer:fd,getAnimatableNone:gx},yx=new Set(["brightness","contrast","saturate","opacity"]);function _x(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Wo)||[];if(!o)return e;const r=n.replace(o,"");let i=yx.has(t)?1:0;return o!==n&&(i*=100),t+"("+i+r+")"}const vx=/([a-z-]*)\(.*?\)/g,li=Object.assign(Object.assign({},Yo),{getAnimatableNone:e=>{const t=e.match(vx);return t?t.map(_x).join(" "):e}});function _s(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Hl({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let r=0,i=0,a=0;if(!t)r=i=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;r=_s(c,l,e+1/3),i=_s(c,l,e),a=_s(c,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:o}}const wx=(e,t,n)=>{const o=e*e,r=t*t;return Math.sqrt(Math.max(0,n*(r-o)+o))},bx=[ai,en,bn],Ul=e=>bx.find(t=>t.test(e)),pd=(e,t)=>{let n=Ul(e),o=Ul(t),r=n.parse(e),i=o.parse(t);n===bn&&(r=Hl(r),n=en),o===bn&&(i=Hl(i),o=en);const a=Object.assign({},r);return l=>{for(const c in a)c!=="alpha"&&(a[c]=wx(r[c],i[c],l));return a.alpha=Ui(r.alpha,i.alpha,l),n.transform(a)}},Sx=e=>typeof e=="number",kx=(e,t)=>n=>t(e(n)),md=(...e)=>e.reduce(kx);function gd(e,t){return Sx(e)?n=>Ui(e,t,n):st.test(e)?pd(e,t):_d(e,t)}const yd=(e,t)=>{const n=[...e],o=n.length,r=e.map((i,a)=>gd(i,t[a]));return i=>{for(let a=0;a<o;a++)n[a]=r[a](i);return n}},xx=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(o[r]=gd(e[r],t[r]));return r=>{for(const i in o)n[i]=o[i](r);return n}};function Kl(e){const t=Yo.parse(e),n=t.length;let o=0,r=0,i=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?i++:r++;return{parsed:t,numNumbers:o,numRGB:r,numHSL:i}}const _d=(e,t)=>{const n=Yo.createTransformer(t),o=Kl(e),r=Kl(t);return o.numHSL===r.numHSL&&o.numRGB===r.numRGB&&o.numNumbers>=r.numNumbers?md(yd(o.parsed,r.parsed),n):a=>`${a>0?t:e}`},Dx=(e,t)=>n=>Ui(e,t,n);function Tx(e){if(typeof e=="number")return Dx;if(typeof e=="string")return st.test(e)?pd:_d;if(Array.isArray(e))return yd;if(typeof e=="object")return xx}function Px(e,t,n){const o=[],r=n||Tx(e[0]),i=e.length-1;for(let a=0;a<i;a++){let l=r(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=md(c,l)}o.push(l)}return o}function $x([e,t],[n]){return o=>n(id(e,t,o))}function Ax(e,t){const n=e.length,o=n-1;return r=>{let i=0,a=!1;if(r<=e[0]?a=!0:r>=e[o]&&(i=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>r||c===o);c++);i=c-1}const l=id(e[i],e[i+1],r);return t[i](l)}}function vd(e,t,{clamp:n=!0,ease:o,mixer:r}={}){const i=e.length;Il(i===t.length),Il(!o||!Array.isArray(o)||o.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=Px(t,o,r),l=i===2?$x(e,a):Ax(e,a);return n?c=>l(ri(e[0],e[i-1],c)):l}const Zr=e=>t=>1-e(1-t),Ji=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Cx=e=>t=>Math.pow(t,e),wd=e=>t=>t*t*((e+1)*t-e),Rx=e=>{const t=wd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},bd=1.525,Ex=4/11,Mx=8/11,Fx=9/10,Sd=e=>e,Yi=Cx(2),Ox=Zr(Yi),kd=Ji(Yi),xd=e=>1-Math.sin(Math.acos(e)),Dd=Zr(xd),zx=Ji(Dd),Zi=wd(bd),Lx=Zr(Zi),jx=Ji(Zi),qx=Rx(bd),Ix=4356/361,Vx=35442/1805,Nx=16061/1805,Ar=e=>{if(e===1||e===0)return e;const t=e*e;return e<Ex?7.5625*t:e<Mx?9.075*t-9.9*e+3.4:e<Fx?Ix*t-Vx*e+Nx:10.8*e*e-20.52*e+10.72},Bx=Zr(Ar),Wx=e=>e<.5?.5*(1-Ar(1-e*2)):.5*Ar(e*2-1)+.5;function Hx(e,t){return e.map(()=>t||kd).splice(0,e.length-1)}function Ux(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function Kx(e,t){return e.map(n=>n*t)}function pr({from:e=0,to:t=1,ease:n,offset:o,duration:r=300}){const i={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=Kx(o&&o.length===a.length?o:Ux(a),r);function c(){return vd(l,a,{ease:Array.isArray(n)?n:Hx(a,n)})}let u=c();return{next:d=>(i.value=u(d),i.done=d>=r,i),flipTarget:()=>{a.reverse(),u=c()}}}function Gx({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:r=.5,modifyTarget:i}){const a={done:!1,value:t};let l=n*e;const c=t+l,u=i===void 0?c:i(c);return u!==c&&(l=u-t),{next:d=>{const h=-l*Math.exp(-d/o);return a.done=!(h>r||h<-r),a.value=a.done?u:u+h,a},flipTarget:()=>{}}}const Gl={keyframes:pr,spring:Hi,decay:Gx};function Jx(e){if(Array.isArray(e.to))return pr;if(Gl[e.type])return Gl[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?pr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Hi:pr}function Td(e,t,n=0){return e-t-n}function Yx(e,t,n=0,o=!0){return o?Td(t+-e,t,n):t-(e-t)+n}function Zx(e,t,n,o){return o?e>=t+n:e<=-n}const Qx=e=>{const t=({delta:n})=>e(n);return{start:()=>oi.update(t,!0),stop:()=>Q3.update(t)}};function Pd(e){var t,n,{from:o,autoplay:r=!0,driver:i=Qx,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:h,onComplete:f,onRepeat:m,onUpdate:g}=e,w=sd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=w,T,x=0,D=w.duration,$,q=!1,O=!0,B;const ne=Jx(w);!((n=(t=ne).needsInterpolation)===null||n===void 0)&&n.call(t,o,v)&&(B=vd([0,100],[o,v],{clamp:!1}),o=0,v=100);const ae=ne(Object.assign(Object.assign({},w),{from:o,to:v}));function ge(){x++,c==="reverse"?(O=x%2===0,a=Yx(a,D,u,O)):(a=Td(a,D,u),c==="mirror"&&ae.flipTarget()),q=!1,m&&m()}function _e(){T.stop(),f&&f()}function Ve(qe){if(O||(qe=-qe),a+=qe,!q){const Ee=ae.next(Math.max(0,a));$=Ee.value,B&&($=B($)),q=O?Ee.done:a<=0}g==null||g($),q&&(x===0&&(D!=null||(D=a)),x<l?Zx(a,D,u,O)&&ge():_e())}function Ne(){d==null||d(),T=i(Ve),T.start()}return r&&Ne(),{stop:()=>{h==null||h(),T.stop()}}}function $d(e,t){return t?e*(1e3/t):0}function Xx({from:e=0,velocity:t=0,min:n,max:o,power:r=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:h,onComplete:f,onStop:m}){let g;function w(D){return n!==void 0&&D<n||o!==void 0&&D>o}function v(D){return n===void 0?o:o===void 0||Math.abs(n-D)<Math.abs(o-D)?n:o}function T(D){g==null||g.stop(),g=Pd(Object.assign(Object.assign({},D),{driver:d,onUpdate:$=>{var q;h==null||h($),(q=D.onUpdate)===null||q===void 0||q.call(D,$)},onComplete:f,onStop:m}))}function x(D){T(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},D))}if(w(e))x({from:e,velocity:t,to:v(e)});else{let D=r*t+e;typeof u<"u"&&(D=u(D));const $=v(D),q=$===n?-1:1;let O,B;const ne=ae=>{O=B,B=ae,t=$d(ae-O,rd().delta),(q===1&&ae>$||q===-1&&ae<$)&&x({from:ae,to:$,velocity:t})};T({type:"decay",from:e,velocity:t,timeConstant:i,power:r,restDelta:c,modifyTarget:u,onUpdate:w(D)?ne:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Ad=(e,t)=>1-3*t+3*e,Cd=(e,t)=>3*t-6*e,Rd=e=>3*e,Cr=(e,t,n)=>((Ad(t,n)*e+Cd(t,n))*e+Rd(t))*e,Ed=(e,t,n)=>3*Ad(t,n)*e*e+2*Cd(t,n)*e+Rd(t),eD=1e-7,tD=10;function nD(e,t,n,o,r){let i,a,l=0;do a=t+(n-t)/2,i=Cr(a,o,r)-e,i>0?n=a:t=a;while(Math.abs(i)>eD&&++l<tD);return a}const oD=8,rD=.001;function sD(e,t,n,o){for(let r=0;r<oD;++r){const i=Ed(t,n,o);if(i===0)return t;t-=(Cr(t,n,o)-e)/i}return t}const mr=11,ir=1/(mr-1);function iD(e,t,n,o){if(e===t&&n===o)return Sd;const r=new Float32Array(mr);for(let a=0;a<mr;++a)r[a]=Cr(a*ir,e,n);function i(a){let l=0,c=1;const u=mr-1;for(;c!==u&&r[c]<=a;++c)l+=ir;--c;const d=(a-r[c])/(r[c+1]-r[c]),h=l+d*ir,f=Ed(h,e,n);return f>=rD?sD(a,h,e,n):f===0?h:nD(a,l,l+ir,e,n)}return a=>a===0||a===1?a:Cr(i(a),t,o)}const vs={};class aD{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const r of this.subscriptions)r(t,n,o)}clear(){this.subscriptions.clear()}}const Jl=e=>!isNaN(parseFloat(e));class lD{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new aD,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:r}=rd();this.lastUpdated!==r&&(this.timeDelta=o,this.lastUpdated=r),oi.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>oi.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Jl(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Jl(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?$d(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function cD(e){return new lD(e)}const{isArray:uD}=Array;function dD(){const e=H({}),t=o=>{const r=i=>{!e.value[i]||(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};o?uD(o)?o.forEach(r):r(o):Object.keys(e.value).forEach(r)},n=(o,r,i)=>{if(e.value[o])return e.value[o];const a=cD(r);return a.onChange(l=>i[o]=l),e.value[o]=a,a};return cm(t),{motionValues:e,get:n,stop:t}}const hD=e=>Array.isArray(e),pn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),ws=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),fD=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),bs=()=>({type:"keyframes",ease:"linear",duration:300}),pD=e=>({type:"keyframes",duration:800,values:e}),Yl={default:fD,x:pn,y:pn,z:pn,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scaleX:ws,scaleY:ws,scale:ws,backgroundColor:bs,color:bs,opacity:bs},Md=(e,t)=>{let n;return hD(t)?n=pD:n=Yl[e]||Yl.default,{to:t,...n(t)}},Zl={...Jo,transform:Math.round},Fd={color:st,backgroundColor:st,outlineColor:st,fill:st,stroke:st,borderColor:st,borderTopColor:st,borderRightColor:st,borderBottomColor:st,borderLeftColor:st,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:sr,scaleX:sr,scaleY:sr,scaleZ:sr,skew:fn,skewX:fn,skewY:fn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:$o,originX:Wl,originY:Wl,originZ:ce,zIndex:Zl,filter:li,WebkitFilter:li,fillOpacity:$o,strokeOpacity:$o,numOctaves:Zl},Qi=e=>Fd[e],Od=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function mD(e,t){let n=Qi(e);return n!==li&&(n=Yo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const gD={linear:Sd,easeIn:Yi,easeInOut:kd,easeOut:Ox,circIn:xd,circInOut:zx,circOut:Dd,backIn:Zi,backInOut:jx,backOut:Lx,anticipate:qx,bounceIn:Bx,bounceInOut:Wx,bounceOut:Ar},Ql=e=>{if(Array.isArray(e)){const[t,n,o,r]=e;return iD(t,n,o,r)}else if(typeof e=="string")return gD[e];return e},yD=e=>Array.isArray(e)&&typeof e[0]!="number",Xl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yo.test(t)&&!t.startsWith("url("));function _D(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function vD({ease:e,times:t,delay:n,...o}){const r={...o};return t&&(r.offset=t),e&&(r.ease=yD(e)?e.map(Ql):Ql(e)),n&&(r.elapsed=-n),r}function wD(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),_D(t),bD(e)||(e={...e,...Md(n,t.to)}),{...t,...vD(e)}}function bD({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:r,...i}){return!!Object.keys(i).length}function SD(e,t){return e[t]||e.default||e}function kD(e,t,n,o,r){const i=SD(o,e);let a=i.from===null||i.from===void 0?t.get():i.from;const l=Xl(e,n);a==="none"&&l&&typeof n=="string"&&(a=mD(e,n));const c=Xl(e,a);function u(h){const f={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?Xx({...f,...i}):Pd({...wD(i,f,e),onUpdate:m=>{f.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),r&&r(),h&&h()}})}function d(h){return t.set(n),o.onComplete&&o.onComplete(),r&&r(),h&&h(),{stop:()=>{}}}return!c||!l||i.type===!1?d:u}function xD(){const{motionValues:e,stop:t,get:n}=dD();return{motionValues:e,stop:t,push:(r,i,a,l={},c)=>{const u=a[r],d=n(r,u,a);if(l&&l.immediate){d.set(i);return}const h=kD(r,d,i,l,c);d.start(h)}}}function DD(e,t={},{motionValues:n,push:o,stop:r}=xD()){const i=b(t),a=H(!1);fe(n,h=>{a.value=Object.values(h).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const l=h=>{if(!i||!i[h])throw new Error(`The variant ${h} does not exist.`);return i[h]},c=h=>(typeof h=="string"&&(h=l(h)),Promise.all(Object.entries(h).map(([f,m])=>{if(f!=="transition")return new Promise(g=>{o(f,m,e,h.transition||Md(f,h[f]),g)})}).filter(Boolean)));return{isAnimating:a,apply:c,set:h=>{const f=Is(h)?h:l(h);Object.entries(f).forEach(([m,g])=>{m!=="transition"&&o(m,g,e,{immediate:!0})})},leave:async h=>{let f;if(i&&(i.leave&&(f=i.leave),!i.leave&&i.initial&&(f=i.initial)),!f){h();return}await c(f),h()},stop:r}}const Xi=typeof window<"u",TD=()=>Xi&&window.onpointerdown===null,PD=()=>Xi&&window.ontouchstart===null,$D=()=>Xi&&window.onmousedown===null;function AD({target:e,state:t,variants:n,apply:o}){const r=b(n),i=H(!1),a=H(!1),l=H(!1),c=P(()=>{let d=[];return r&&(r.hovered&&(d=[...d,...Object.keys(r.hovered)]),r.tapped&&(d=[...d,...Object.keys(r.tapped)]),r.focused&&(d=[...d,...Object.keys(r.focused)])),d}),u=P(()=>{const d={};Object.assign(d,t.value),i.value&&r.hovered&&Object.assign(d,r.hovered),a.value&&r.tapped&&Object.assign(d,r.tapped),l.value&&r.focused&&Object.assign(d,r.focused);for(const h in d)c.value.includes(h)||delete d[h];return d});r.hovered&&(de(e,"mouseenter",()=>i.value=!0),de(e,"mouseleave",()=>{i.value=!1,a.value=!1}),de(e,"mouseout",()=>{i.value=!1,a.value=!1})),r.tapped&&($D()&&(de(e,"mousedown",()=>a.value=!0),de(e,"mouseup",()=>a.value=!1)),TD()&&(de(e,"pointerdown",()=>a.value=!0),de(e,"pointerup",()=>a.value=!1)),PD()&&(de(e,"touchstart",()=>a.value=!0),de(e,"touchend",()=>a.value=!1))),r.focused&&(de(e,"focus",()=>l.value=!0),de(e,"blur",()=>l.value=!1)),fe(u,o)}function CD({set:e,target:t,apply:n,variants:o,variant:r}){const i=b(o);fe(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function RD({state:e,apply:t}){fe(e,n=>{n&&t(n)},{immediate:!0})}function ED({target:e,variants:t,variant:n}){const o=b(t);o&&(o.visible||o.visibleOnce)&&n0(e,([{isIntersecting:r}])=>{o.visible?r?n.value="visible":n.value="initial":o.visibleOnce&&(r&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function MD(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&CD(e),t.syncVariants&&RD(e),t.visibilityHooks&&ED(e),t.eventListeners&&AD(e)}function zd(e={}){const t=Fe({...e}),n=H({});return fe(t,()=>{const o={};for(const[r,i]of Object.entries(t)){const a=Qi(r),l=Od(i,a);o[r]=l}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function ea(e,t){fe(()=>Pt(e),n=>{!n||t(n)},{immediate:!0})}const FD={x:"translateX",y:"translateY",z:"translateZ"};function Ld(e={},t=!0){const n=Fe({...e}),o=H("");return fe(n,r=>{let i="",a=!1;t&&(r.x||r.y||r.z)&&(i+=`translate3d(${[r.x||0,r.y||0,r.z||0].map(ce.transform).join(",")}) `,a=!0);for(const[l,c]of Object.entries(r)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Qi(l),d=Od(c,u);i+=`${FD[l]||l}(${d}) `}t&&!a&&(i+="translateZ(0px) "),o.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const OD=["","X","Y","Z"],zD=["perspective","translate","scale","rotate","skew"],jd=["transformPerspective","x","y","z"];zD.forEach(e=>{OD.forEach(t=>{const n=e+t;jd.push(n)})});const LD=new Set(jd);function ta(e){return LD.has(e)}const jD=new Set(["originX","originY","originZ"]);function qd(e){return jD.has(e)}function qD(e){const t={},n={};return Object.entries(e).forEach(([o,r])=>{ta(o)||qd(o)?t[o]=r:n[o]=r}),{transform:t,style:n}}function Id(e){const{transform:t,style:n}=qD(e),{transform:o}=Ld(t),{style:r}=zd(n);return o.value&&(r.value.transform=o.value),r.value}function ID(e,t){let n,o;const{state:r,style:i}=zd();return ea(e,a=>{o=a;for(const l of Object.keys(Fd))a.style[l]===null||a.style[l]===""||ta(l)||qd(l)||(r[l]=a.style[l]);n&&Object.entries(n).forEach(([l,c])=>a.style[l]=c),t&&t(r)}),fe(i,a=>{if(!o){n=a;return}for(const l in a)o.style[l]=a[l]},{immediate:!0}),{style:r}}function VD(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,r)=>{if(!r)return o;const[i,a]=r.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[i]:u}},{})}function ND(e,t){Object.entries(VD(t)).forEach(([n,o])=>{const r=["x","y","z"];if(n==="translate3d"){if(o===0){r.forEach(i=>e[i]=0);return}o.forEach((i,a)=>e[r[a]]=i);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function BD(e,t){let n,o;const{state:r,transform:i}=Ld();return ea(e,a=>{o=a,a.style.transform&&ND(r,a.style.transform),n&&(a.style.transform=n),t&&t(r)}),fe(i,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:r}}function WD(e,t){const n=Fe({}),o=a=>Object.entries(a).forEach(([l,c])=>n[l]=c),{style:r}=ID(e,o),{transform:i}=BD(e,o);return fe(n,a=>{Object.entries(a).forEach(([l,c])=>{const u=ta(l)?i:r;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),ea(e,()=>t&&o(t)),{motionProperties:n,style:r,transform:i}}function HD(e={}){const t=b(e),n=H();return{state:P(()=>{if(!!n.value)return t[n.value]}),variant:n}}function Vd(e,t={},n){const{motionProperties:o}=WD(e),{variant:r,state:i}=HD(t),a=DD(o,t),l={target:e,variant:r,variants:t,state:i,motionProperties:o,...a};return MD(l,n),l}const UD=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],KD=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Is(n.variants)&&(t.value={...t.value,...n.variants}),UD.forEach(o=>{if(o==="delay"){if(n&&n[o]&&Up(n[o])){const r=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:r,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:r,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:r,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&Is(n[o])&&(t.value[o]=n[o])}))},Ss=e=>({created:(o,r,i)=>{const a=r.value&&typeof r.value=="string"?r.value:i.key;a&&vs[a]&&vs[a].stop();const l=H(e||{});typeof r.value=="object"&&(l.value=r.value),KD(i,l);const c=Vd(o,l);o.motionInstance=c,a&&(vs[a]=c)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,r){let{initial:i}=o.value||r&&(r==null?void 0:r.props)||{};i=b(i);const a=G3((e==null?void 0:e.initial)||{},i||{});return!a||Object.keys(a).length===0?void 0:{style:Id(a)}}}),GD={initial:{opacity:0},enter:{opacity:1}},JD={initial:{opacity:0},visible:{opacity:1}},YD={initial:{opacity:0},visibleOnce:{opacity:1}},ZD={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},QD={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},XD={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},eT={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},tT={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},nT={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},oT={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},rT={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},sT={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},iT={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},aT={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},lT={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},cT={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},uT={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},dT={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},hT={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},fT={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},pT={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},mT={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},gT={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},yT={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},_T={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},vT={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},wT={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},bT={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},ST={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},kT={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ci={__proto__:null,fade:GD,fadeVisible:JD,fadeVisibleOnce:YD,pop:ZD,popVisible:QD,popVisibleOnce:XD,rollBottom:cT,rollLeft:eT,rollRight:oT,rollTop:iT,rollVisibleBottom:uT,rollVisibleLeft:tT,rollVisibleRight:rT,rollVisibleTop:aT,rollVisibleOnceBottom:dT,rollVisibleOnceLeft:nT,rollVisibleOnceRight:sT,rollVisibleOnceTop:lT,slideBottom:bT,slideLeft:hT,slideRight:mT,slideTop:_T,slideVisibleBottom:ST,slideVisibleLeft:fT,slideVisibleRight:gT,slideVisibleTop:vT,slideVisibleOnceBottom:kT,slideVisibleOnceLeft:pT,slideVisibleOnceRight:yT,slideVisibleOnceTop:wT},xT=De({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=Vf(),n=Fe({});if(!e.is&&!t.default)return()=>pt("div",{});const o=P(()=>{let c;return e.preset&&(c=ci[e.preset]),c}),r=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=P(()=>{const c={...r.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=P(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Qd(c)&&(c=Oo(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var h,f,m;(h=u.variants)!=null&&h.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};$i(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:i,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var l;const r=Id(t.initial||{}),i=(c,u)=>(c.props||(c.props={}),c.props.style=r,c.props.onVnodeMounted=({el:d})=>{const h=Vd(d,t);n[u]=h},c);if(o){const c=pt(o,void 0,e);return i(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>i(c,u))}});function DT(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,r=>`-${r}`).toLowerCase().replace(/\s+/g,"-").replace(o,r=>n.charAt(t.indexOf(r))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const TT={install(e,t){if(e.directive("motion",Ss()),e.component("Motion",xT),!t||t&&!t.excludePresets)for(const n in ci){const o=ci[n];e.directive(`motion-${DT(n)}`,Ss(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,Ss(o))}}};var ec;const Co=typeof window<"u",PT=Object.prototype.toString,$T=e=>PT.call(e)==="[object Object]";Co&&((ec=window==null?void 0:window.navigator)==null?void 0:ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function AT(e){return bc()?(Sc(e),!0):!1}function CT(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const RT=Co?window:void 0,ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},di="__vueuse_ssr_handlers__";ui[di]=ui[di]||{};ui[di];function ET(e,t={}){const{immediate:n=!0,window:o=RT}=t,r=H(!1);let i=null;function a(){!r.value||!o||(e(),i=o.requestAnimationFrame(a))}function l(){!r.value&&o&&(r.value=!0,a())}function c(){r.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return n&&l(),AT(c),{isActive:r,pause:c,resume:l}}var tc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tc||(tc={}));const na="vue-starport-injection",Nd="vue-starport-options",MT={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Bd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var FT=Object.defineProperty,Rr=Object.getOwnPropertySymbols,Wd=Object.prototype.hasOwnProperty,Hd=Object.prototype.propertyIsEnumerable,nc=(e,t,n)=>t in e?FT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,OT=(e,t)=>{for(var n in t||(t={}))Wd.call(t,n)&&nc(e,n,t[n]);if(Rr)for(var n of Rr(t))Hd.call(t,n)&&nc(e,n,t[n]);return e},oc=(e,t)=>{var n={};for(var o in e)Wd.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Rr)for(var o of Rr(e))t.indexOf(o)<0&&Hd.call(e,o)&&(n[o]=e[o]);return n};const zT=De({name:"StarportProxy",props:OT({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Bd),setup(e,t){const n=F(na),o=P(()=>n.getInstance(e.port,e.component)),r=H(),i=o.value.generateId(),a=H(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Ho(async()=>{o.value.el||(o.value.el=r.value,await Ye(),a.value=!0,o.value.rect.update())}),Wr(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Ye(),await Ye(),!o.value.el&&n.dispose(o.value.port))}),fe(()=>e,async()=>{o.value.props&&await Ye();const l=e,{props:c}=l,u=oc(l,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,d=oc(l,["initialProps","mountedProps"]),h=br(d,(a.value?u:c)||{});return pt("div",br(h,{id:i,ref:r,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?pt(t.slots.default):void 0)}}});var LT=Object.defineProperty,jT=Object.defineProperties,qT=Object.getOwnPropertyDescriptors,rc=Object.getOwnPropertySymbols,IT=Object.prototype.hasOwnProperty,VT=Object.prototype.propertyIsEnumerable,sc=(e,t,n)=>t in e?LT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,NT=(e,t)=>{for(var n in t||(t={}))IT.call(t,n)&&sc(e,n,t[n]);if(rc)for(var n of rc(t))VT.call(t,n)&&sc(e,n,t[n]);return e},BT=(e,t)=>jT(e,qT(t));const WT=De({name:"Starport",inheritAttrs:!0,props:Bd,setup(e,t){const n=H(!1);return Ho(()=>{n.value=!0}),()=>{var a,l;const o=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const r=o[0];let i=r.type;return(!$T(i)||Xn(i))&&(i={render(){return o}}),pt(zT,BT(NT({},e),{key:e.port,component:jr(i),props:r.props}))}}});function HT(e){const t=Fe({height:0,width:0,left:0,top:0,update:o,listen:i,pause:a,margin:"0px",padding:"0px"}),n=Co?document.documentElement||document.body:void 0;function o(){if(!Co)return;const l=CT(e);if(!l)return;const{height:c,width:u,left:d,top:h}=l.getBoundingClientRect(),f=window.getComputedStyle(l),m=f.margin,g=f.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+h,margin:m,padding:g})}const r=ET(o,{immediate:!1});function i(){!Co||(o(),r.resume())}function a(){r.pause()}return t}let UT=(e,t=21)=>(n=t)=>{let o="",r=n;for(;r--;)o+=e[Math.random()*e.length|0];return o};const ic=UT("abcdefghijklmnopqrstuvwxyz",5);function ac(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function KT(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var GT=Object.defineProperty,lc=Object.getOwnPropertySymbols,JT=Object.prototype.hasOwnProperty,YT=Object.prototype.propertyIsEnumerable,cc=(e,t,n)=>t in e?GT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ks=(e,t)=>{for(var n in t||(t={}))JT.call(t,n)&&cc(e,n,t[n]);if(lc)for(var n of lc(t))YT.call(t,n)&&cc(e,n,t[n]);return e};function ZT(e,t,n={}){const o=KT(t),r=ac(o)||ic(),i=H(),a=H(null),l=H(!1),c=H(!1),u=ih(!0),d=H({}),h=P(()=>ks(ks(ks({},MT),n),d.value)),f=H(0);let m;u.run(()=>{m=HT(i),fe(i,async T=>{T&&(c.value=!0),await Ye(),i.value||(c.value=!1)})});const g=ac(e);function w(){return`starport-${r}-${g}-${ic()}`}const v=w();return Fe({el:i,id:v,port:e,props:a,rect:m,scope:u,isLanded:l,isVisible:c,options:h,liftOffTime:f,component:t,componentName:o,componentId:r,generateId:w,setLocalOptions(T={}){d.value=JSON.parse(JSON.stringify(T))},elRef(){return i},liftOff(){!l.value||(l.value=!1,f.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function QT(e){const t=Fe(new Map);function n(r,i){let a=t.get(r);return a||(a=ZT(r,i,e),t.set(r,a)),a.component=i,a}function o(r){var i;(i=t.get(r))==null||i.scope.stop(),t.delete(r)}return{portMap:t,dispose:o,getInstance:n}}var XT=Object.defineProperty,eP=Object.defineProperties,tP=Object.getOwnPropertyDescriptors,uc=Object.getOwnPropertySymbols,nP=Object.prototype.hasOwnProperty,oP=Object.prototype.propertyIsEnumerable,dc=(e,t,n)=>t in e?XT(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rP=(e,t)=>{for(var n in t||(t={}))nP.call(t,n)&&dc(e,n,t[n]);if(uc)for(var n of uc(t))oP.call(t,n)&&dc(e,n,t[n]);return e},sP=(e,t)=>eP(e,tP(t));const iP=De({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=F(na);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=P(()=>t.getInstance(e.port,e.component)),o=P(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),r=P(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?sP(rP({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),i={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return pt("div",{style:r.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},pt(Rf,{to:a?`#${o.value}`:"body",disabled:!a},pt(n.value.component,br(i,n.value.props))))}}}),aP=De({name:"StarportCarrier",setup(e,{slots:t}){const n=QT(F(Nd,{}));return Cn().appContext.app.provide(na,n),()=>{var r;return[(r=t.default)==null?void 0:r.call(t),Array.from(n.portMap.entries()).map(([i,{component:a}])=>pt(iP,{key:i,port:i,component:a}))]}}});function lP(e={}){return{install(t){t.provide(Nd,e),t.component("Starport",WT),t.component("StarportCarrier",aP)}}}function cP(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(TT),e.app.use(lP({keepAlive:!0}))}function lt(e,t,n){var o,r;return(r=((o=e.instance)==null?void 0:o.$).provides[t])!=null?r:n}function uP(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,h,f,m;if(To.value||((d=lt(n,ur))==null?void 0:d.value))return;const o=lt(n,jn),r=lt(n,cr),i=lt(n,qs),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((h=o==null?void 0:o.value)==null?void 0:h.length)||0,u=l?Rp:ss;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value===null&&(n.value=o==null?void 0:o.value.length),!(i!=null&&i.value.has(n.value)))i==null||i.value.set(n.value,[t]);else if(!((m=i==null?void 0:i.value.get(n.value))!=null&&m.includes(t))){const g=(i==null?void 0:i.value.get(n.value))||[];i==null||i.value.set(n.value,[t].concat(g))}t==null||t.classList.toggle(Fn,!0),r&&fe(r,()=>{var T;const g=(T=r==null?void 0:r.value)!=null?T:0,w=n.value!=null?g>=n.value:g>c;t.classList.contains(is)||t.classList.toggle(u,!w),a!==!1&&a!==void 0&&t.classList.toggle(u,w),t.classList.toggle(fo,!1);const v=i==null?void 0:i.value.get(g);v==null||v.forEach((x,D)=>{x.classList.toggle(or,!1),D===v.length-1?x.classList.toggle(fo,!0):x.classList.toggle(or,!0)}),t.classList.contains(fo)||t.classList.toggle(or,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const o=lt(n,jn);o!=null&&o.value&&Ba(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c;if(To.value||((l=lt(n,ur))==null?void 0:l.value))return;const o=lt(n,jn),r=lt(n,cr),i=lt(n,qs),a=o==null?void 0:o.value.length;n.value===void 0&&(n.value=o==null?void 0:o.value.length),i!=null&&i.value.has(n.value)?(c=i==null?void 0:i.value.get(n.value))==null||c.push(t):i==null||i.value.set(n.value,[t]),t==null||t.classList.toggle(Fn,!0),r&&fe(r,()=>{var d,h,f;const u=((d=r.value)!=null?d:0)>=((f=(h=n.value)!=null?h:a)!=null?f:0);t.classList.contains(is)||t.classList.toggle(ss,!u),t.classList.toggle(fo,!1),t.classList.contains(fo)||t.classList.toggle(or,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Fn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(To.value||((a=lt(n,ur))==null?void 0:a.value))return;const o=lt(n,jn),r=lt(n,cr),i=((l=o==null?void 0:o.value)==null?void 0:l.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Fn,!0),r&&fe(r,()=>{var h;const u=(h=r==null?void 0:r.value)!=null?h:0,d=n.value!=null?u>=n.value:u>i;t.classList.toggle(ss,d),t.classList.toggle(is,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const o=lt(n,jn);o!=null&&o.value&&Ba(o.value,t)}})}}}function dP(e,t){const n=Zu(e),o=Qu(t,n.currentRoute,n.currentPage);return{nav:{...n,...o,downloadPDF:Xs,next:rn,nextSlide:Vo,openInEditor:W3,prev:sn,prevSlide:No},configs:ke,themeConfigs:P(()=>ke.themeConfig)}}function hP(){return{install(e){const t=dP(Jt,Ct);e.provide(I,Fe(t))}}}const lo=fp(U3);lo.use(gt);lo.use(Tp());lo.use(uP());lo.use(hP());cP({app:lo,router:gt});lo.mount("#app");export{_o as $,me as A,xe as B,et as C,wg as D,fP as E,Pe as F,pP as G,Ct as H,$r as I,q3 as J,ps as K,as as L,qo as M,hs as N,gu as O,D_ as P,Ii as Q,S_ as R,Vi as S,He as T,ed as U,Ag as V,Gu as W,Mt as X,mP as Y,wt as Z,Uu as _,s as a,rr as a0,Uo as a1,wn as a2,qt as a3,Ys as a4,Z1 as a5,Q1 as a6,X1 as a7,tg as a8,Ci as a9,du as aa,vP as ab,tt as ac,cy as ad,pu as ae,ng as af,Wr as ag,yg as ah,P as b,U as c,De as d,I as e,dt as f,j as g,b as h,F as i,ug as j,B3 as k,ke as l,$p as m,Le as n,S as o,Ho as p,Fe as q,H as r,gP as s,Pn as t,yP as u,_P as v,fe as w,Z as x,nt as y,E as z};
