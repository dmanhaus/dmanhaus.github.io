(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Eo(e,t){const n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kd=Eo(Ud);function pc(e){return!!e||e===""}function nt(e){if(se(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],o=Ie(r)?Yd(r):nt(r);if(o)for(const i in o)t[i]=o[i]}return t}else{if(Ie(e))return e;if(Le(e))return e}}const Gd=/;(?![^(]*\))/g,Jd=/:(.+)/;function Yd(e){const t={};return e.split(Gd).forEach(n=>{if(n){const r=n.split(Jd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function je(e){let t="";if(Ie(e))t=e;else if(se(e))for(let n=0;n<e.length;n++){const r=je(e[n]);r&&(t+=r+" ")}else if(Le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function X(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=je(t)),n&&(e.style=nt(n)),e}const Zd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Qd=Eo(Zd),Pn=e=>Ie(e)?e:e==null?"":se(e)||Le(e)&&(e.toString===vc||!ue(e.toString))?JSON.stringify(e,mc,2):String(e),mc=(e,t)=>t&&t.__v_isRef?mc(e,t.value):Wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,o])=>(n[`${r} =>`]=o,n),{})}:gc(t)?{[`Set(${t.size})`]:[...t.values()]}:Le(t)&&!se(t)&&!_c(t)?String(t):t,Re={},Nn=[],At=()=>{},Xd=()=>!1,eh=/^on[^a-z]/,Mo=e=>eh.test(e),hi=e=>e.startsWith("onUpdate:"),rt=Object.assign,fi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},th=Object.prototype.hasOwnProperty,ye=(e,t)=>th.call(e,t),se=Array.isArray,Wn=e=>Fo(e)==="[object Map]",gc=e=>Fo(e)==="[object Set]",ue=e=>typeof e=="function",Ie=e=>typeof e=="string",pi=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",yc=e=>Le(e)&&ue(e.then)&&ue(e.catch),vc=Object.prototype.toString,Fo=e=>vc.call(e),nh=e=>Fo(e).slice(8,-1),_c=e=>Fo(e)==="[object Object]",mi=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,io=Eo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rh=/-(\w)/g,It=Oo(e=>e.replace(rh,(t,n)=>n?n.toUpperCase():"")),oh=/\B([A-Z])/g,$n=Oo(e=>e.replace(oh,"-$1").toLowerCase()),zo=Oo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qo=Oo(e=>e?`on${zo(e)}`:""),Cr=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},go=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ts=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ia;const sh=()=>ia||(ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class wc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ut;try{return ut=this,t()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.active=!1}}}function ih(e){return new wc(e)}function ah(e,t=ut){t&&t.active&&t.effects.push(e)}function bc(){return ut}function kc(e){ut&&ut.cleanups.push(e)}const gi=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Sc=e=>(e.w&an)>0,Tc=e=>(e.n&an)>0,lh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=an},ch=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const o=t[r];Sc(o)&&!Tc(o)?o.delete(e):t[n++]=o,o.w&=~an,o.n&=~an}t.length=n}},Ds=new WeakMap;let vr=0,an=1;const xs=30;let Dt;const kn=Symbol(""),Ps=Symbol("");class yi{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ah(this,r)}run(){if(!this.active)return this.fn();let t=Dt,n=tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Dt,Dt=this,tn=!0,an=1<<++vr,vr<=xs?lh(this):aa(this),this.fn()}finally{vr<=xs&&ch(this),an=1<<--vr,Dt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Dt===this?this.deferStop=!0:this.active&&(aa(this),this.onStop&&this.onStop(),this.active=!1)}}function aa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tn=!0;const Dc=[];function or(){Dc.push(tn),tn=!1}function sr(){const e=Dc.pop();tn=e===void 0?!0:e}function yt(e,t,n){if(tn&&Dt){let r=Ds.get(e);r||Ds.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=gi()),xc(o)}}function xc(e,t){let n=!1;vr<=xs?Tc(e)||(e.n|=an,n=!Sc(e)):n=!e.has(Dt),n&&(e.add(Dt),Dt.deps.push(e))}function Ut(e,t,n,r,o,i){const a=Ds.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&se(e))a.forEach((c,u)=>{(u==="length"||u>=r)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":se(e)?mi(n)&&l.push(a.get("length")):(l.push(a.get(kn)),Wn(e)&&l.push(a.get(Ps)));break;case"delete":se(e)||(l.push(a.get(kn)),Wn(e)&&l.push(a.get(Ps)));break;case"set":Wn(e)&&l.push(a.get(kn));break}if(l.length===1)l[0]&&As(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);As(gi(c))}}function As(e,t){const n=se(e)?e:[...e];for(const r of n)r.computed&&la(r);for(const r of n)r.computed||la(r)}function la(e,t){(e!==Dt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const uh=Eo("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pi)),dh=vi(),hh=vi(!1,!0),fh=vi(!0),ca=ph();function ph(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=be(this);for(let i=0,a=this.length;i<a;i++)yt(r,"get",i+"");const o=r[t](...n);return o===-1||o===!1?r[t](...n.map(be)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){or();const r=be(this)[t].apply(this,n);return sr(),r}}),e}function vi(e=!1,t=!1){return function(r,o,i){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&i===(e?t?Ch:Ec:t?Rc:Cc).get(r))return r;const a=se(r);if(!e&&a&&ye(ca,o))return Reflect.get(ca,o,i);const l=Reflect.get(r,o,i);return(pi(o)?Pc.has(o):uh(o))||(e||yt(r,"get",o),t)?l:Se(l)?a&&mi(o)?l:l.value:Le(l)?e?Bn(l):Fe(l):l}}const mh=Ac(),gh=Ac(!0);function Ac(e=!1){return function(n,r,o,i){let a=n[r];if(Qn(a)&&Se(a)&&!Se(o))return!1;if(!e&&(!yo(o)&&!Qn(o)&&(a=be(a),o=be(o)),!se(n)&&Se(a)&&!Se(o)))return a.value=o,!0;const l=se(n)&&mi(r)?Number(r)<n.length:ye(n,r),c=Reflect.set(n,r,o,i);return n===be(i)&&(l?Cr(o,a)&&Ut(n,"set",r,o):Ut(n,"add",r,o)),c}}function yh(e,t){const n=ye(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Ut(e,"delete",t,void 0),r}function vh(e,t){const n=Reflect.has(e,t);return(!pi(t)||!Pc.has(t))&&yt(e,"has",t),n}function _h(e){return yt(e,"iterate",se(e)?"length":kn),Reflect.ownKeys(e)}const $c={get:dh,set:mh,deleteProperty:yh,has:vh,ownKeys:_h},wh={get:fh,set(e,t){return!0},deleteProperty(e,t){return!0}},bh=rt({},$c,{get:hh,set:gh}),_i=e=>e,Lo=e=>Reflect.getPrototypeOf(e);function Yr(e,t,n=!1,r=!1){e=e.__v_raw;const o=be(e),i=be(t);n||(t!==i&&yt(o,"get",t),yt(o,"get",i));const{has:a}=Lo(o),l=r?_i:n?ki:Rr;if(a.call(o,t))return l(e.get(t));if(a.call(o,i))return l(e.get(i));e!==o&&e.get(t)}function Zr(e,t=!1){const n=this.__v_raw,r=be(n),o=be(e);return t||(e!==o&&yt(r,"has",e),yt(r,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Qr(e,t=!1){return e=e.__v_raw,!t&&yt(be(e),"iterate",kn),Reflect.get(e,"size",e)}function ua(e){e=be(e);const t=be(this);return Lo(t).has.call(t,e)||(t.add(e),Ut(t,"add",e,e)),this}function da(e,t){t=be(t);const n=be(this),{has:r,get:o}=Lo(n);let i=r.call(n,e);i||(e=be(e),i=r.call(n,e));const a=o.call(n,e);return n.set(e,t),i?Cr(t,a)&&Ut(n,"set",e,t):Ut(n,"add",e,t),this}function ha(e){const t=be(this),{has:n,get:r}=Lo(t);let o=n.call(t,e);o||(e=be(e),o=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return o&&Ut(t,"delete",e,void 0),i}function fa(){const e=be(this),t=e.size!==0,n=e.clear();return t&&Ut(e,"clear",void 0,void 0),n}function Xr(e,t){return function(r,o){const i=this,a=i.__v_raw,l=be(a),c=t?_i:e?ki:Rr;return!e&&yt(l,"iterate",kn),a.forEach((u,d)=>r.call(o,c(u),c(d),i))}}function eo(e,t,n){return function(...r){const o=this.__v_raw,i=be(o),a=Wn(i),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=o[e](...r),d=n?_i:t?ki:Rr;return!t&&yt(i,"iterate",c?Ps:kn),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:l?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:this}}function kh(){const e={get(i){return Yr(this,i)},get size(){return Qr(this)},has:Zr,add:ua,set:da,delete:ha,clear:fa,forEach:Xr(!1,!1)},t={get(i){return Yr(this,i,!1,!0)},get size(){return Qr(this)},has:Zr,add:ua,set:da,delete:ha,clear:fa,forEach:Xr(!1,!0)},n={get(i){return Yr(this,i,!0)},get size(){return Qr(this,!0)},has(i){return Zr.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Xr(!0,!1)},r={get(i){return Yr(this,i,!0,!0)},get size(){return Qr(this,!0)},has(i){return Zr.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=eo(i,!1,!1),n[i]=eo(i,!0,!1),t[i]=eo(i,!1,!0),r[i]=eo(i,!0,!0)}),[e,n,t,r]}const[Sh,Th,Dh,xh]=kh();function wi(e,t){const n=t?e?xh:Dh:e?Th:Sh;return(r,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?r:Reflect.get(ye(n,o)&&o in r?n:r,o,i)}const Ph={get:wi(!1,!1)},Ah={get:wi(!1,!0)},$h={get:wi(!0,!1)},Cc=new WeakMap,Rc=new WeakMap,Ec=new WeakMap,Ch=new WeakMap;function Rh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eh(e){return e.__v_skip||!Object.isExtensible(e)?0:Rh(nh(e))}function Fe(e){return Qn(e)?e:bi(e,!1,$c,Ph,Cc)}function Mh(e){return bi(e,!1,bh,Ah,Rc)}function Bn(e){return bi(e,!0,wh,$h,Ec)}function bi(e,t,n,r,o){if(!Le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=o.get(e);if(i)return i;const a=Eh(e);if(a===0)return e;const l=new Proxy(e,a===2?r:n);return o.set(e,l),l}function Un(e){return Qn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function yo(e){return!!(e&&e.__v_isShallow)}function Mc(e){return Un(e)||Qn(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function jo(e){return go(e,"__v_skip",!0),e}const Rr=e=>Le(e)?Fe(e):e,ki=e=>Le(e)?Bn(e):e;function Si(e){tn&&Dt&&(e=be(e),xc(e.dep||(e.dep=gi())))}function Ti(e,t){e=be(e),e.dep&&As(e.dep)}function Se(e){return!!(e&&e.__v_isRef===!0)}function H(e){return Fc(e,!1)}function Rt(e){return Fc(e,!0)}function Fc(e,t){return Se(e)?e:new Fh(e,t)}class Fh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:Rr(t)}get value(){return Si(this),this._value}set value(t){const n=this.__v_isShallow||yo(t)||Qn(t);t=n?t:be(t),Cr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Rr(t),Ti(this))}}function b(e){return Se(e)?e.value:e}const Oh={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const o=e[t];return Se(o)&&!Se(n)?(o.value=n,!0):Reflect.set(e,t,n,r)}};function Oc(e){return Un(e)?e:new Proxy(e,Oh)}class zh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Si(this),()=>Ti(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function zc(e){return new zh(e)}function Lh(e){const t=se(e)?new Array(e.length):{};for(const n in e)t[n]=qh(e,n);return t}class jh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function qh(e,t,n){const r=e[t];return Se(r)?r:new jh(e,t,n)}var Lc;class Ih{constructor(t,n,r,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Lc]=!1,this._dirty=!0,this.effect=new yi(t,()=>{this._dirty||(this._dirty=!0,Ti(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=be(this);return Si(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Lc="__v_isReadonly";function Bh(e,t,n=!1){let r,o;const i=ue(e);return i?(r=e,o=At):(r=e.get,o=e.set),new Ih(r,o,i||!o,n)}function nn(e,t,n,r){let o;try{o=r?e(...r):e()}catch(i){qo(i,t,n)}return o}function $t(e,t,n,r){if(ue(e)){const i=nn(e,t,n,r);return i&&yc(i)&&i.catch(a=>{qo(a,t,n)}),i}const o=[];for(let i=0;i<e.length;i++)o.push($t(e[i],t,n,r));return o}function qo(e,t,n,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,l=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,l)===!1)return}i=i.parent}const c=t.appContext.config.errorHandler;if(c){nn(c,null,10,[e,a,l]);return}}Vh(e,n,o,r)}function Vh(e,t,n,r=!0){console.error(e)}let Er=!1,$s=!1;const Je=[];let zt=0;const Kn=[];let Nt=null,gn=0;const jc=Promise.resolve();let Di=null;function Ye(e){const t=Di||jc;return e?t.then(this?e.bind(this):e):t}function Nh(e){let t=zt+1,n=Je.length;for(;t<n;){const r=t+n>>>1;Mr(Je[r])<e?t=r+1:n=r}return t}function xi(e){(!Je.length||!Je.includes(e,Er&&e.allowRecurse?zt+1:zt))&&(e.id==null?Je.push(e):Je.splice(Nh(e.id),0,e),qc())}function qc(){!Er&&!$s&&($s=!0,Di=jc.then(Bc))}function Wh(e){const t=Je.indexOf(e);t>zt&&Je.splice(t,1)}function Hh(e){se(e)?Kn.push(...e):(!Nt||!Nt.includes(e,e.allowRecurse?gn+1:gn))&&Kn.push(e),qc()}function pa(e,t=Er?zt+1:0){for(;t<Je.length;t++){const n=Je[t];n&&n.pre&&(Je.splice(t,1),t--,n())}}function Ic(e){if(Kn.length){const t=[...new Set(Kn)];if(Kn.length=0,Nt){Nt.push(...t);return}for(Nt=t,Nt.sort((n,r)=>Mr(n)-Mr(r)),gn=0;gn<Nt.length;gn++)Nt[gn]();Nt=null,gn=0}}const Mr=e=>e.id==null?1/0:e.id,Uh=(e,t)=>{const n=Mr(e)-Mr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Bc(e){$s=!1,Er=!0,Je.sort(Uh);const t=At;try{for(zt=0;zt<Je.length;zt++){const n=Je[zt];n&&n.active!==!1&&nn(n,null,14)}}finally{zt=0,Je.length=0,Ic(),Er=!1,Di=null,(Je.length||Kn.length)&&Bc()}}function Kh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Re;let o=n;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:p}=r[d]||Re;p&&(o=n.map(m=>m.trim())),h&&(o=n.map(Ts))}let l,c=r[l=Qo(t)]||r[l=Qo(It(t))];!c&&i&&(c=r[l=Qo($n(t))]),c&&$t(c,e,6,o);const u=r[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$t(u,e,6,o)}}function Vc(e,t,n=!1){const r=t.emitsCache,o=r.get(e);if(o!==void 0)return o;const i=e.emits;let a={},l=!1;if(!ue(e)){const c=u=>{const d=Vc(u,t,!0);d&&(l=!0,rt(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(Le(e)&&r.set(e,null),null):(se(i)?i.forEach(c=>a[c]=null):rt(a,i),Le(e)&&r.set(e,a),a)}function Io(e,t){return!e||!Mo(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,$n(t))||ye(e,t))}let Ze=null,Bo=null;function vo(e){const t=Ze;return Ze=e,Bo=e&&e.type.__scopeId||null,t}function JP(e){Bo=e}function YP(){Bo=null}function E(e,t=Ze,n){if(!t||e._n)return e;const r=(...o)=>{r._d&&Da(-1);const i=vo(t),a=e(...o);return vo(i),r._d&&Da(1),a};return r._n=!0,r._c=!0,r._d=!0,r}function Xo(e){const{type:t,vnode:n,proxy:r,withProxy:o,props:i,propsOptions:[a],slots:l,attrs:c,emit:u,render:d,renderCache:h,data:p,setupState:m,ctx:g,inheritAttrs:w}=e;let _,x;const T=vo(e);try{if(n.shapeFlag&4){const A=o||r;_=Ot(d.call(A,A,h,i,m,p,g)),x=c}else{const A=t;_=Ot(A.length>1?A(i,{attrs:c,slots:l,emit:u}):A(i,null)),x=t.props?c:Gh(c)}}catch(A){br.length=0,qo(A,e,1),_=Z(ln)}let D=_;if(x&&w!==!1){const A=Object.keys(x),{shapeFlag:q}=D;A.length&&q&7&&(a&&A.some(hi)&&(x=Jh(x,a)),D=An(D,x))}return n.dirs&&(D=An(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),_=D,vo(T),_}const Gh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Mo(n))&&((t||(t={}))[n]=e[n]);return t},Jh=(e,t)=>{const n={};for(const r in e)(!hi(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Yh(e,t,n){const{props:r,children:o,component:i}=e,{props:a,children:l,patchFlag:c}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ma(r,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(a[p]!==r[p]&&!Io(u,p))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ma(r,a,u):!0:!!a;return!1}function ma(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==e[i]&&!Io(n,i))return!0}return!1}function Zh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Nc=e=>e.__isSuspense;function Qh(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):Hh(e)}function ht(e,t){if(Ue){let n=Ue.provides;const r=Ue.parent&&Ue.parent.provides;r===n&&(n=Ue.provides=Object.create(r)),n[e]=t}}function F(e,t,n=!1){const r=Ue||Ze;if(r){const o=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&ue(t)?t.call(r.proxy):t}}function Vo(e,t){return Pi(e,null,t)}const ga={};function fe(e,t,n){return Pi(e,t,n)}function Pi(e,t,{immediate:n,deep:r,flush:o,onTrack:i,onTrigger:a}=Re){const l=Ue;let c,u=!1,d=!1;if(Se(e)?(c=()=>e.value,u=yo(e)):Un(e)?(c=()=>e,r=!0):se(e)?(d=!0,u=e.some(x=>Un(x)||yo(x)),c=()=>e.map(x=>{if(Se(x))return x.value;if(Un(x))return vn(x);if(ue(x))return nn(x,l,2)})):ue(e)?t?c=()=>nn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),$t(e,l,3,[p])}:c=At,t&&r){const x=c;c=()=>vn(x())}let h,p=x=>{h=_.onStop=()=>{nn(x,l,4)}};if(zr)return p=At,t?n&&$t(t,l,3,[c(),d?[]:void 0,p]):c(),At;let m=d?[]:ga;const g=()=>{if(!!_.active)if(t){const x=_.run();(r||u||(d?x.some((T,D)=>Cr(T,m[D])):Cr(x,m)))&&(h&&h(),$t(t,l,3,[x,m===ga?void 0:m,p]),m=x)}else _.run()};g.allowRecurse=!!t;let w;o==="sync"?w=g:o==="post"?w=()=>Ke(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),w=()=>xi(g));const _=new yi(c,w);return t?n?g():m=_.run():o==="post"?Ke(_.run.bind(_),l&&l.suspense):_.run(),()=>{_.stop(),l&&l.scope&&fi(l.scope.effects,_)}}function Xh(e,t,n){const r=this.proxy,o=Ie(e)?e.includes(".")?Wc(r,e):()=>r[e]:e.bind(r,r);let i;ue(t)?i=t:(i=t.handler,n=t);const a=Ue;er(this);const l=Pi(o,i.bind(r),n);return a?er(a):Sn(),l}function Wc(e,t){const n=t.split(".");return()=>{let r=e;for(let o=0;o<n.length&&r;o++)r=r[n[o]];return r}}function vn(e,t){if(!Le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Se(e))vn(e.value,t);else if(se(e))for(let n=0;n<e.length;n++)vn(e[n],t);else if(gc(e)||Wn(e))e.forEach(n=>{vn(n,t)});else if(_c(e))for(const n in e)vn(e[n],t);return e}function Hc(e,t){e.shapeFlag&6&&e.component?Hc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Te(e){return ue(e)?{setup:e,name:e.name}:e}const Gn=e=>!!e.type.__asyncLoader,Uc=e=>e.type.__isKeepAlive,ef={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Cn(),r=n.ctx;if(!r.renderer)return()=>{const T=t.default&&t.default();return T&&T.length===1?T[0]:T};const o=new Map,i=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:h}}}=r,p=h("div");r.activate=(T,D,A,q,O)=>{const N=T.component;u(T,D,A,0,l),c(N.vnode,T,D,A,N,l,q,T.slotScopeIds,O),Ke(()=>{N.isDeactivated=!1,N.a&&Hn(N.a);const ne=T.props&&T.props.onVnodeMounted;ne&&vt(ne,N.parent,T)},l)},r.deactivate=T=>{const D=T.component;u(T,p,null,1,l),Ke(()=>{D.da&&Hn(D.da);const A=T.props&&T.props.onVnodeUnmounted;A&&vt(A,D.parent,T),D.isDeactivated=!0},l)};function m(T){es(T),d(T,n,l,!0)}function g(T){o.forEach((D,A)=>{const q=zs(D.type);q&&(!T||!T(q))&&w(A)})}function w(T){const D=o.get(T);!a||D.type!==a.type?m(D):a&&es(a),o.delete(T),i.delete(T)}fe(()=>[e.include,e.exclude],([T,D])=>{T&&g(A=>_r(T,A)),D&&g(A=>!_r(D,A))},{flush:"post",deep:!0});let _=null;const x=()=>{_!=null&&o.set(_,ts(n.subTree))};return Wr(x),Ai(x),Wo(()=>{o.forEach(T=>{const{subTree:D,suspense:A}=n,q=ts(D);if(T.type===q.type){es(q);const O=q.component.da;O&&Ke(O,A);return}m(T)})}),()=>{if(_=null,!t.default)return null;const T=t.default(),D=T[0];if(T.length>1)return a=null,T;if(!Xn(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return a=null,D;let A=ts(D);const q=A.type,O=zs(Gn(A)?A.type.__asyncResolved||{}:q),{include:N,exclude:ne,max:ae}=e;if(N&&(!O||!_r(N,O))||ne&&O&&_r(ne,O))return a=A,D;const ge=A.key==null?q:A.key,ve=o.get(ge);return A.el&&(A=An(A),D.shapeFlag&128&&(D.ssContent=A)),_=ge,ve?(A.el=ve.el,A.component=ve.component,A.transition&&Hc(A,A.transition),A.shapeFlag|=512,i.delete(ge),i.add(ge)):(i.add(ge),ae&&i.size>parseInt(ae,10)&&w(i.values().next().value)),A.shapeFlag|=256,a=A,Nc(D.type)?D:A}}},Kc=ef;function _r(e,t){return se(e)?e.some(n=>_r(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function tf(e,t){Gc(e,"a",t)}function nf(e,t){Gc(e,"da",t)}function Gc(e,t,n=Ue){const r=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(No(t,r,n),n){let o=n.parent;for(;o&&o.parent;)Uc(o.parent.vnode)&&rf(r,t,n,o),o=o.parent}}function rf(e,t,n,r){const o=No(t,e,r,!0);$i(()=>{fi(r[t],o)},n)}function es(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function ts(e){return e.shapeFlag&128?e.ssContent:e}function No(e,t,n=Ue,r=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;or(),er(n);const l=$t(t,n,e,a);return Sn(),sr(),l});return r?o.unshift(i):o.push(i),i}}const Gt=e=>(t,n=Ue)=>(!zr||e==="sp")&&No(e,t,n),Jc=Gt("bm"),Wr=Gt("m"),of=Gt("bu"),Ai=Gt("u"),Wo=Gt("bum"),$i=Gt("um"),sf=Gt("sp"),af=Gt("rtg"),lf=Gt("rtc");function cf(e,t=Ue){No("ec",e,t)}function Ci(e,t){const n=Ze;if(n===null)return e;const r=Uo(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[a,l,c,u=Re]=t[i];ue(a)&&(a={mounted:a,updated:a}),a.deep&&vn(l),o.push({dir:a,instance:r,value:l,oldValue:void 0,arg:c,modifiers:u})}return e}function dn(e,t,n,r){const o=e.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const l=o[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(or(),$t(c,n,8,[e.el,l,e,t]),sr())}}const Yc="components";function Fr(e,t){return df(Yc,e,!0,t)||e}const uf=Symbol();function df(e,t,n=!0,r=!1){const o=Ze||Ue;if(o){const i=o.type;if(e===Yc){const l=zs(i,!1);if(l&&(l===t||l===It(t)||l===zo(It(t))))return i}const a=ya(o[e]||i[e],t)||ya(o.appContext[e],t);return!a&&r?i:a}}function ya(e,t){return e&&(e[t]||e[It(t)]||e[zo(It(t))])}function Hr(e,t,n,r){let o;const i=n&&n[r];if(se(e)||Ie(e)){o=new Array(e.length);for(let a=0,l=e.length;a<l;a++)o[a]=t(e[a],a,void 0,i&&i[a])}else if(typeof e=="number"){o=new Array(e);for(let a=0;a<e;a++)o[a]=t(a+1,a,void 0,i&&i[a])}else if(Le(e))if(e[Symbol.iterator])o=Array.from(e,(a,l)=>t(a,l,void 0,i&&i[l]));else{const a=Object.keys(e);o=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];o[l]=t(e[u],u,l,i&&i[l])}}else o=[];return n&&(n[r]=o),o}function wt(e,t,n={},r,o){if(Ze.isCE||Ze.parent&&Gn(Ze.parent)&&Ze.parent.isCE)return Z("slot",t==="default"?null:{name:t},r&&r());let i=e[t];i&&i._c&&(i._d=!1),k();const a=i&&Zc(i(n)),l=j(xe,{key:n.key||a&&a.key||`_${t}`},a||(r?r():[]),a&&e._===1?64:-2);return!o&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Zc(e){return e.some(t=>Xn(t)?!(t.type===ln||t.type===xe&&!Zc(t.children)):!0)?e:null}const Cs=e=>e?au(e)?Uo(e)||e.proxy:Cs(e.parent):null,_o=rt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Cs(e.parent),$root:e=>Cs(e.root),$emit:e=>e.emit,$options:e=>Ri(e),$forceUpdate:e=>e.f||(e.f=()=>xi(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>Xh.bind(e)}),hf={get({_:e},t){const{ctx:n,setupState:r,data:o,props:i,accessCache:a,type:l,appContext:c}=e;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Re&&ye(r,t))return a[t]=1,r[t];if(o!==Re&&ye(o,t))return a[t]=2,o[t];if((u=e.propsOptions[0])&&ye(u,t))return a[t]=3,i[t];if(n!==Re&&ye(n,t))return a[t]=4,n[t];Rs&&(a[t]=0)}}const d=_o[t];let h,p;if(d)return t==="$attrs"&&yt(e,"get",t),d(e);if((h=l.__cssModules)&&(h=h[t]))return h;if(n!==Re&&ye(n,t))return a[t]=4,n[t];if(p=c.config.globalProperties,ye(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:o,ctx:i}=e;return o!==Re&&ye(o,t)?(o[t]=n,!0):r!==Re&&ye(r,t)?(r[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:o,propsOptions:i}},a){let l;return!!n[a]||e!==Re&&ye(e,a)||t!==Re&&ye(t,a)||(l=i[0])&&ye(l,a)||ye(r,a)||ye(_o,a)||ye(o.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Rs=!0;function ff(e){const t=Ri(e),n=e.proxy,r=e.ctx;Rs=!1,t.beforeCreate&&va(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:l,provide:c,inject:u,created:d,beforeMount:h,mounted:p,beforeUpdate:m,updated:g,activated:w,deactivated:_,beforeDestroy:x,beforeUnmount:T,destroyed:D,unmounted:A,render:q,renderTracked:O,renderTriggered:N,errorCaptured:ne,serverPrefetch:ae,expose:ge,inheritAttrs:ve,components:Be,directives:Ve,filters:qe}=t;if(u&&pf(u,r,null,e.appContext.config.unwrapInjectedRef),a)for(const G in a){const oe=a[G];ue(oe)&&(r[G]=oe.bind(n))}if(o){const G=o.call(n,n);Le(G)&&(e.data=Fe(G))}if(Rs=!0,i)for(const G in i){const oe=i[G],he=ue(oe)?oe.bind(n,n):ue(oe.get)?oe.get.bind(n,n):At,Pe=!ue(oe)&&ue(oe.set)?oe.set.bind(n):At,it=P({get:he,set:Pe});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>it.value,set:Ge=>it.value=Ge})}if(l)for(const G in l)Qc(l[G],r,n,G);if(c){const G=ue(c)?c.call(n):c;Reflect.ownKeys(G).forEach(oe=>{ht(oe,G[oe])})}d&&va(d,e,"c");function ze(G,oe){se(oe)?oe.forEach(he=>G(he.bind(n))):oe&&G(oe.bind(n))}if(ze(Jc,h),ze(Wr,p),ze(of,m),ze(Ai,g),ze(tf,w),ze(nf,_),ze(cf,ne),ze(lf,O),ze(af,N),ze(Wo,T),ze($i,A),ze(sf,ae),se(ge))if(ge.length){const G=e.exposed||(e.exposed={});ge.forEach(oe=>{Object.defineProperty(G,oe,{get:()=>n[oe],set:he=>n[oe]=he})})}else e.exposed||(e.exposed={});q&&e.render===At&&(e.render=q),ve!=null&&(e.inheritAttrs=ve),Be&&(e.components=Be),Ve&&(e.directives=Ve)}function pf(e,t,n=At,r=!1){se(e)&&(e=Es(e));for(const o in e){const i=e[o];let a;Le(i)?"default"in i?a=F(i.from||o,i.default,!0):a=F(i.from||o):a=F(i),Se(a)&&r?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[o]=a}}function va(e,t,n){$t(se(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qc(e,t,n,r){const o=r.includes(".")?Wc(n,r):()=>n[r];if(Ie(e)){const i=t[e];ue(i)&&fe(o,i)}else if(ue(e))fe(o,e.bind(n));else if(Le(e))if(se(e))e.forEach(i=>Qc(i,t,n,r));else{const i=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(i)&&fe(o,i,e)}}function Ri(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,l=i.get(t);let c;return l?c=l:!o.length&&!n&&!r?c=t:(c={},o.length&&o.forEach(u=>wo(c,u,a,!0)),wo(c,t,a)),Le(t)&&i.set(t,c),c}function wo(e,t,n,r=!1){const{mixins:o,extends:i}=t;i&&wo(e,i,n,!0),o&&o.forEach(a=>wo(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const l=mf[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const mf={data:_a,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:mn,directives:mn,watch:yf,provide:_a,inject:gf};function _a(e,t){return t?e?function(){return rt(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function gf(e,t){return mn(Es(e),Es(t))}function Es(e){if(se(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?rt(rt(Object.create(null),e),t):t}function yf(e,t){if(!e)return t;if(!t)return e;const n=rt(Object.create(null),e);for(const r in t)n[r]=Xe(e[r],t[r]);return n}function vf(e,t,n,r=!1){const o={},i={};go(i,Ho,1),e.propsDefaults=Object.create(null),Xc(e,t,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=r?o:Mh(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function _f(e,t,n,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,l=be(o),[c]=e.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Io(e.emitsOptions,p))continue;const m=t[p];if(c)if(ye(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const g=It(p);o[g]=Ms(c,l,g,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Xc(e,t,o,i)&&(u=!0);let d;for(const h in l)(!t||!ye(t,h)&&((d=$n(h))===h||!ye(t,d)))&&(c?n&&(n[h]!==void 0||n[d]!==void 0)&&(o[h]=Ms(c,l,h,void 0,e,!0)):delete o[h]);if(i!==l)for(const h in i)(!t||!ye(t,h)&&!0)&&(delete i[h],u=!0)}u&&Ut(e,"set","$attrs")}function Xc(e,t,n,r){const[o,i]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(io(c))continue;const u=t[c];let d;o&&ye(o,d=It(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Io(e.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,a=!0)}if(i){const c=be(n),u=l||Re;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Ms(o,c,h,u[h],e,!ye(u,h))}}return a}function Ms(e,t,n,r,o,i){const a=e[n];if(a!=null){const l=ye(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=o;n in u?r=u[n]:(er(o),r=u[n]=c.call(null,t),Sn())}else r=c}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===$n(n))&&(r=!0))}return r}function eu(e,t,n=!1){const r=t.propsCache,o=r.get(e);if(o)return o;const i=e.props,a={},l=[];let c=!1;if(!ue(e)){const d=h=>{c=!0;const[p,m]=eu(h,t,!0);rt(a,p),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!c)return Le(e)&&r.set(e,Nn),Nn;if(se(i))for(let d=0;d<i.length;d++){const h=It(i[d]);wa(h)&&(a[h]=Re)}else if(i)for(const d in i){const h=It(d);if(wa(h)){const p=i[d],m=a[h]=se(p)||ue(p)?{type:p}:p;if(m){const g=Sa(Boolean,m.type),w=Sa(String,m.type);m[0]=g>-1,m[1]=w<0||g<w,(g>-1||ye(m,"default"))&&l.push(h)}}}const u=[a,l];return Le(e)&&r.set(e,u),u}function wa(e){return e[0]!=="$"}function ba(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ka(e,t){return ba(e)===ba(t)}function Sa(e,t){return se(t)?t.findIndex(n=>ka(n,e)):ue(t)&&ka(t,e)?0:-1}const tu=e=>e[0]==="_"||e==="$stable",Ei=e=>se(e)?e.map(Ot):[Ot(e)],wf=(e,t,n)=>{if(t._n)return t;const r=E((...o)=>Ei(t(...o)),n);return r._c=!1,r},nu=(e,t,n)=>{const r=e._ctx;for(const o in e){if(tu(o))continue;const i=e[o];if(ue(i))t[o]=wf(o,i,r);else if(i!=null){const a=Ei(i);t[o]=()=>a}}},ru=(e,t)=>{const n=Ei(t);e.slots.default=()=>n},bf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=be(t),go(t,"_",n)):nu(t,e.slots={})}else e.slots={},t&&ru(e,t);go(e.slots,Ho,1)},kf=(e,t,n)=>{const{vnode:r,slots:o}=e;let i=!0,a=Re;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:(rt(o,t),!n&&l===1&&delete o._):(i=!t.$stable,nu(t,o)),a=t}else t&&(ru(e,t),a={default:1});if(i)for(const l in o)!tu(l)&&!(l in a)&&delete o[l]};function ou(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sf=0;function Tf(e,t){return function(r,o=null){ue(r)||(r=Object.assign({},r)),o!=null&&!Le(o)&&(o=null);const i=ou(),a=new Set;let l=!1;const c=i.app={_uid:Sf++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:Nf,get config(){return i.config},set config(u){},use(u,...d){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(c,...d)):ue(u)&&(a.add(u),u(c,...d))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,d){return d?(i.components[u]=d,c):i.components[u]},directive(u,d){return d?(i.directives[u]=d,c):i.directives[u]},mount(u,d,h){if(!l){const p=Z(r,o);return p.appContext=i,d&&t?t(p,u):e(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Uo(p.component)||p.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return i.provides[u]=d,c}};return c}}function Fs(e,t,n,r,o=!1){if(se(e)){e.forEach((p,m)=>Fs(p,t&&(se(t)?t[m]:t),n,r,o));return}if(Gn(r)&&!o)return;const i=r.shapeFlag&4?Uo(r.component)||r.component.proxy:r.el,a=o?null:i,{i:l,r:c}=e,u=t&&t.r,d=l.refs===Re?l.refs={}:l.refs,h=l.setupState;if(u!=null&&u!==c&&(Ie(u)?(d[u]=null,ye(h,u)&&(h[u]=null)):Se(u)&&(u.value=null)),ue(c))nn(c,l,12,[a,d]);else{const p=Ie(c),m=Se(c);if(p||m){const g=()=>{if(e.f){const w=p?d[c]:c.value;o?se(w)&&fi(w,i):se(w)?w.includes(i)||w.push(i):p?(d[c]=[i],ye(h,c)&&(h[c]=d[c])):(c.value=[i],e.k&&(d[e.k]=c.value))}else p?(d[c]=a,ye(h,c)&&(h[c]=a)):m&&(c.value=a,e.k&&(d[e.k]=a))};a?(g.id=-1,Ke(g,n)):g()}}}const Ke=Qh;function Df(e){return xf(e)}function xf(e,t){const n=sh();n.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:h,nextSibling:p,setScopeId:m=At,cloneNode:g,insertStaticContent:w}=e,_=(y,v,S,R=null,C=null,L=null,W=!1,z=null,V=!!v.dynamicChildren)=>{if(y===v)return;y&&!ur(y,v)&&(R=Y(y),ot(y,C,L,!0),y=null),v.patchFlag===-2&&(V=!1,v.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:J}=v;switch(M){case Fi:x(y,v,S,R);break;case ln:T(y,v,S,R);break;case ns:y==null&&D(v,S,R,W);break;case xe:Ve(y,v,S,R,C,L,W,z,V);break;default:J&1?O(y,v,S,R,C,L,W,z,V):J&6?qe(y,v,S,R,C,L,W,z,V):(J&64||J&128)&&M.process(y,v,S,R,C,L,W,z,V,pe)}ee!=null&&C&&Fs(ee,y&&y.ref,L,v||y,!v)},x=(y,v,S,R)=>{if(y==null)r(v.el=l(v.children),S,R);else{const C=v.el=y.el;v.children!==y.children&&u(C,v.children)}},T=(y,v,S,R)=>{y==null?r(v.el=c(v.children||""),S,R):v.el=y.el},D=(y,v,S,R)=>{[y.el,y.anchor]=w(y.children,v,S,R,y.el,y.anchor)},A=({el:y,anchor:v},S,R)=>{let C;for(;y&&y!==v;)C=p(y),r(y,S,R),y=C;r(v,S,R)},q=({el:y,anchor:v})=>{let S;for(;y&&y!==v;)S=p(y),o(y),y=S;o(v)},O=(y,v,S,R,C,L,W,z,V)=>{W=W||v.type==="svg",y==null?N(v,S,R,C,L,W,z,V):ge(y,v,C,L,W,z,V)},N=(y,v,S,R,C,L,W,z)=>{let V,M;const{type:ee,props:J,shapeFlag:te,transition:ie,patchFlag:_e,dirs:$e}=y;if(y.el&&g!==void 0&&_e===-1)V=y.el=g(y.el);else{if(V=y.el=a(y.type,L,J&&J.is,J),te&8?d(V,y.children):te&16&&ae(y.children,V,null,R,C,L&&ee!=="foreignObject",W,z),$e&&dn(y,null,R,"created"),J){for(const Me in J)Me!=="value"&&!io(Me)&&i(V,Me,null,J[Me],L,y.children,R,C,B);"value"in J&&i(V,"value",null,J.value),(M=J.onVnodeBeforeMount)&&vt(M,R,y)}ne(V,y,y.scopeId,W,R)}$e&&dn(y,null,R,"beforeMount");const Ce=(!C||C&&!C.pendingBranch)&&ie&&!ie.persisted;Ce&&ie.beforeEnter(V),r(V,v,S),((M=J&&J.onVnodeMounted)||Ce||$e)&&Ke(()=>{M&&vt(M,R,y),Ce&&ie.enter(V),$e&&dn(y,null,R,"mounted")},C)},ne=(y,v,S,R,C)=>{if(S&&m(y,S),R)for(let L=0;L<R.length;L++)m(y,R[L]);if(C){let L=C.subTree;if(v===L){const W=C.vnode;ne(y,W,W.scopeId,W.slotScopeIds,C.parent)}}},ae=(y,v,S,R,C,L,W,z,V=0)=>{for(let M=V;M<y.length;M++){const ee=y[M]=z?Qt(y[M]):Ot(y[M]);_(null,ee,v,S,R,C,L,W,z)}},ge=(y,v,S,R,C,L,W)=>{const z=v.el=y.el;let{patchFlag:V,dynamicChildren:M,dirs:ee}=v;V|=y.patchFlag&16;const J=y.props||Re,te=v.props||Re;let ie;S&&hn(S,!1),(ie=te.onVnodeBeforeUpdate)&&vt(ie,S,v,y),ee&&dn(v,y,S,"beforeUpdate"),S&&hn(S,!0);const _e=C&&v.type!=="foreignObject";if(M?ve(y.dynamicChildren,M,z,S,R,_e,L):W||he(y,v,z,null,S,R,_e,L,!1),V>0){if(V&16)Be(z,v,J,te,S,R,C);else if(V&2&&J.class!==te.class&&i(z,"class",null,te.class,C),V&4&&i(z,"style",J.style,te.style,C),V&8){const $e=v.dynamicProps;for(let Ce=0;Ce<$e.length;Ce++){const Me=$e[Ce],kt=J[Me],Mn=te[Me];(Mn!==kt||Me==="value")&&i(z,Me,kt,Mn,C,y.children,S,R,B)}}V&1&&y.children!==v.children&&d(z,v.children)}else!W&&M==null&&Be(z,v,J,te,S,R,C);((ie=te.onVnodeUpdated)||ee)&&Ke(()=>{ie&&vt(ie,S,v,y),ee&&dn(v,y,S,"updated")},R)},ve=(y,v,S,R,C,L,W)=>{for(let z=0;z<v.length;z++){const V=y[z],M=v[z],ee=V.el&&(V.type===xe||!ur(V,M)||V.shapeFlag&70)?h(V.el):S;_(V,M,ee,null,R,C,L,W,!0)}},Be=(y,v,S,R,C,L,W)=>{if(S!==R){for(const z in R){if(io(z))continue;const V=R[z],M=S[z];V!==M&&z!=="value"&&i(y,z,M,V,W,v.children,C,L,B)}if(S!==Re)for(const z in S)!io(z)&&!(z in R)&&i(y,z,S[z],null,W,v.children,C,L,B);"value"in R&&i(y,"value",S.value,R.value)}},Ve=(y,v,S,R,C,L,W,z,V)=>{const M=v.el=y?y.el:l(""),ee=v.anchor=y?y.anchor:l("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ie}=v;ie&&(z=z?z.concat(ie):ie),y==null?(r(M,S,R),r(ee,S,R),ae(v.children,S,ee,C,L,W,z,V)):J>0&&J&64&&te&&y.dynamicChildren?(ve(y.dynamicChildren,te,S,C,L,W,z),(v.key!=null||C&&v===C.subTree)&&Mi(y,v,!0)):he(y,v,S,ee,C,L,W,z,V)},qe=(y,v,S,R,C,L,W,z,V)=>{v.slotScopeIds=z,y==null?v.shapeFlag&512?C.ctx.activate(v,S,R,W,V):Ee(v,S,R,C,L,W,V):ze(y,v,V)},Ee=(y,v,S,R,C,L,W)=>{const z=y.component=zf(y,R,C);if(Uc(y)&&(z.ctx.renderer=pe),Lf(z),z.asyncDep){if(C&&C.registerDep(z,G),!y.el){const V=z.subTree=Z(ln);T(null,V,v,S)}return}G(z,y,v,S,C,L,W)},ze=(y,v,S)=>{const R=v.component=y.component;if(Yh(y,v,S))if(R.asyncDep&&!R.asyncResolved){oe(R,v,S);return}else R.next=v,Wh(R.update),R.update();else v.el=y.el,R.vnode=v},G=(y,v,S,R,C,L,W)=>{const z=()=>{if(y.isMounted){let{next:ee,bu:J,u:te,parent:ie,vnode:_e}=y,$e=ee,Ce;hn(y,!1),ee?(ee.el=_e.el,oe(y,ee,W)):ee=_e,J&&Hn(J),(Ce=ee.props&&ee.props.onVnodeBeforeUpdate)&&vt(Ce,ie,ee,_e),hn(y,!0);const Me=Xo(y),kt=y.subTree;y.subTree=Me,_(kt,Me,h(kt.el),Y(kt),y,C,L),ee.el=Me.el,$e===null&&Zh(y,Me.el),te&&Ke(te,C),(Ce=ee.props&&ee.props.onVnodeUpdated)&&Ke(()=>vt(Ce,ie,ee,_e),C)}else{let ee;const{el:J,props:te}=v,{bm:ie,m:_e,parent:$e}=y,Ce=Gn(v);if(hn(y,!1),ie&&Hn(ie),!Ce&&(ee=te&&te.onVnodeBeforeMount)&&vt(ee,$e,v),hn(y,!0),J&&re){const Me=()=>{y.subTree=Xo(y),re(J,y.subTree,y,C,null)};Ce?v.type.__asyncLoader().then(()=>!y.isUnmounted&&Me()):Me()}else{const Me=y.subTree=Xo(y);_(null,Me,S,R,y,C,L),v.el=Me.el}if(_e&&Ke(_e,C),!Ce&&(ee=te&&te.onVnodeMounted)){const Me=v;Ke(()=>vt(ee,$e,Me),C)}(v.shapeFlag&256||$e&&Gn($e.vnode)&&$e.vnode.shapeFlag&256)&&y.a&&Ke(y.a,C),y.isMounted=!0,v=S=R=null}},V=y.effect=new yi(z,()=>xi(M),y.scope),M=y.update=()=>V.run();M.id=y.uid,hn(y,!0),M()},oe=(y,v,S)=>{v.component=y;const R=y.vnode.props;y.vnode=v,y.next=null,_f(y,v.props,R,S),kf(y,v.children,S),or(),pa(),sr()},he=(y,v,S,R,C,L,W,z,V=!1)=>{const M=y&&y.children,ee=y?y.shapeFlag:0,J=v.children,{patchFlag:te,shapeFlag:ie}=v;if(te>0){if(te&128){it(M,J,S,R,C,L,W,z,V);return}else if(te&256){Pe(M,J,S,R,C,L,W,z,V);return}}ie&8?(ee&16&&B(M,C,L),J!==M&&d(S,J)):ee&16?ie&16?it(M,J,S,R,C,L,W,z,V):B(M,C,L,!0):(ee&8&&d(S,""),ie&16&&ae(J,S,R,C,L,W,z,V))},Pe=(y,v,S,R,C,L,W,z,V)=>{y=y||Nn,v=v||Nn;const M=y.length,ee=v.length,J=Math.min(M,ee);let te;for(te=0;te<J;te++){const ie=v[te]=V?Qt(v[te]):Ot(v[te]);_(y[te],ie,S,null,C,L,W,z,V)}M>ee?B(y,C,L,!0,!1,J):ae(v,S,R,C,L,W,z,V,J)},it=(y,v,S,R,C,L,W,z,V)=>{let M=0;const ee=v.length;let J=y.length-1,te=ee-1;for(;M<=J&&M<=te;){const ie=y[M],_e=v[M]=V?Qt(v[M]):Ot(v[M]);if(ur(ie,_e))_(ie,_e,S,null,C,L,W,z,V);else break;M++}for(;M<=J&&M<=te;){const ie=y[J],_e=v[te]=V?Qt(v[te]):Ot(v[te]);if(ur(ie,_e))_(ie,_e,S,null,C,L,W,z,V);else break;J--,te--}if(M>J){if(M<=te){const ie=te+1,_e=ie<ee?v[ie].el:R;for(;M<=te;)_(null,v[M]=V?Qt(v[M]):Ot(v[M]),S,_e,C,L,W,z,V),M++}}else if(M>te)for(;M<=J;)ot(y[M],C,L,!0),M++;else{const ie=M,_e=M,$e=new Map;for(M=_e;M<=te;M++){const at=v[M]=V?Qt(v[M]):Ot(v[M]);at.key!=null&&$e.set(at.key,M)}let Ce,Me=0;const kt=te-_e+1;let Mn=!1,ra=0;const cr=new Array(kt);for(M=0;M<kt;M++)cr[M]=0;for(M=ie;M<=J;M++){const at=y[M];if(Me>=kt){ot(at,C,L,!0);continue}let Ft;if(at.key!=null)Ft=$e.get(at.key);else for(Ce=_e;Ce<=te;Ce++)if(cr[Ce-_e]===0&&ur(at,v[Ce])){Ft=Ce;break}Ft===void 0?ot(at,C,L,!0):(cr[Ft-_e]=M+1,Ft>=ra?ra=Ft:Mn=!0,_(at,v[Ft],S,null,C,L,W,z,V),Me++)}const oa=Mn?Pf(cr):Nn;for(Ce=oa.length-1,M=kt-1;M>=0;M--){const at=_e+M,Ft=v[at],sa=at+1<ee?v[at+1].el:R;cr[M]===0?_(null,Ft,S,sa,C,L,W,z,V):Mn&&(Ce<0||M!==oa[Ce]?Ge(Ft,S,sa,2):Ce--)}}},Ge=(y,v,S,R,C=null)=>{const{el:L,type:W,transition:z,children:V,shapeFlag:M}=y;if(M&6){Ge(y.component.subTree,v,S,R);return}if(M&128){y.suspense.move(v,S,R);return}if(M&64){W.move(y,v,S,pe);return}if(W===xe){r(L,v,S);for(let J=0;J<V.length;J++)Ge(V[J],v,S,R);r(y.anchor,v,S);return}if(W===ns){A(y,v,S);return}if(R!==2&&M&1&&z)if(R===0)z.beforeEnter(L),r(L,v,S),Ke(()=>z.enter(L),C);else{const{leave:J,delayLeave:te,afterLeave:ie}=z,_e=()=>r(L,v,S),$e=()=>{J(L,()=>{_e(),ie&&ie()})};te?te(L,_e,$e):$e()}else r(L,v,S)},ot=(y,v,S,R=!1,C=!1)=>{const{type:L,props:W,ref:z,children:V,dynamicChildren:M,shapeFlag:ee,patchFlag:J,dirs:te}=y;if(z!=null&&Fs(z,null,S,y,!0),ee&256){v.ctx.deactivate(y);return}const ie=ee&1&&te,_e=!Gn(y);let $e;if(_e&&($e=W&&W.onVnodeBeforeUnmount)&&vt($e,v,y),ee&6)K(y.component,S,R);else{if(ee&128){y.suspense.unmount(S,R);return}ie&&dn(y,null,v,"beforeUnmount"),ee&64?y.type.remove(y,v,S,C,pe,R):M&&(L!==xe||J>0&&J&64)?B(M,v,S,!1,!0):(L===xe&&J&384||!C&&ee&16)&&B(V,v,S),R&&un(y)}(_e&&($e=W&&W.onVnodeUnmounted)||ie)&&Ke(()=>{$e&&vt($e,v,y),ie&&dn(y,null,v,"unmounted")},S)},un=y=>{const{type:v,el:S,anchor:R,transition:C}=y;if(v===xe){$(S,R);return}if(v===ns){q(y);return}const L=()=>{o(S),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(y.shapeFlag&1&&C&&!C.persisted){const{leave:W,delayLeave:z}=C,V=()=>W(S,L);z?z(y.el,L,V):V()}else L()},$=(y,v)=>{let S;for(;y!==v;)S=p(y),o(y),y=S;o(v)},K=(y,v,S)=>{const{bum:R,scope:C,update:L,subTree:W,um:z}=y;R&&Hn(R),C.stop(),L&&(L.active=!1,ot(W,y,v,S)),z&&Ke(z,v),Ke(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},B=(y,v,S,R=!1,C=!1,L=0)=>{for(let W=L;W<y.length;W++)ot(y[W],v,S,R,C)},Y=y=>y.shapeFlag&6?Y(y.component.subTree):y.shapeFlag&128?y.suspense.next():p(y.anchor||y.el),we=(y,v,S)=>{y==null?v._vnode&&ot(v._vnode,null,null,!0):_(v._vnode||null,y,v,null,null,null,S),pa(),Ic(),v._vnode=y},pe={p:_,um:ot,m:Ge,r:un,mt:Ee,mc:ae,pc:he,pbc:ve,n:Y,o:e};let le,re;return t&&([le,re]=t(pe)),{render:we,hydrate:le,createApp:Tf(we,le)}}function hn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mi(e,t,n=!1){const r=e.children,o=t.children;if(se(r)&&se(o))for(let i=0;i<r.length;i++){const a=r[i];let l=o[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[i]=Qt(o[i]),l.el=a.el),n||Mi(a,l))}}function Pf(e){const t=e.slice(),n=[0];let r,o,i,a,l;const c=e.length;for(r=0;r<c;r++){const u=e[r];if(u!==0){if(o=n[n.length-1],e[o]<u){t[r]=o,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,e[n[l]]<u?i=l+1:a=l;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}const Af=e=>e.__isTeleport,wr=e=>e&&(e.disabled||e.disabled===""),Ta=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Os=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},$f={__isTeleport:!0,process(e,t,n,r,o,i,a,l,c,u){const{mc:d,pc:h,pbc:p,o:{insert:m,querySelector:g,createText:w,createComment:_}}=u,x=wr(t.props);let{shapeFlag:T,children:D,dynamicChildren:A}=t;if(e==null){const q=t.el=w(""),O=t.anchor=w("");m(q,n,r),m(O,n,r);const N=t.target=Os(t.props,g),ne=t.targetAnchor=w("");N&&(m(ne,N),a=a||Ta(N));const ae=(ge,ve)=>{T&16&&d(D,ge,ve,o,i,a,l,c)};x?ae(n,O):N&&ae(N,ne)}else{t.el=e.el;const q=t.anchor=e.anchor,O=t.target=e.target,N=t.targetAnchor=e.targetAnchor,ne=wr(e.props),ae=ne?n:O,ge=ne?q:N;if(a=a||Ta(O),A?(p(e.dynamicChildren,A,ae,o,i,a,l),Mi(e,t,!0)):c||h(e,t,ae,ge,o,i,a,l,!1),x)ne||to(t,n,q,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ve=t.target=Os(t.props,g);ve&&to(t,ve,null,u,0)}else ne&&to(t,O,N,u,1)}},remove(e,t,n,r,{um:o,o:{remove:i}},a){const{shapeFlag:l,children:c,anchor:u,targetAnchor:d,target:h,props:p}=e;if(h&&i(d),(a||!wr(p))&&(i(u),l&16))for(let m=0;m<c.length;m++){const g=c[m];o(g,t,n,!0,!!g.dynamicChildren)}},move:to,hydrate:Cf};function to(e,t,n,{o:{insert:r},m:o},i=2){i===0&&r(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:u,props:d}=e,h=i===2;if(h&&r(a,t,n),(!h||wr(d))&&c&16)for(let p=0;p<u.length;p++)o(u[p],t,n,2);h&&r(l,t,n)}function Cf(e,t,n,r,o,i,{o:{nextSibling:a,parentNode:l,querySelector:c}},u){const d=t.target=Os(t.props,c);if(d){const h=d._lpa||d.firstChild;if(t.shapeFlag&16)if(wr(t.props))t.anchor=u(a(e),t,l(e),n,r,o,i),t.targetAnchor=h;else{t.anchor=a(e);let p=h;for(;p;)if(p=a(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(h,t,d,n,r,o,i)}}return t.anchor&&a(t.anchor)}const Rf=$f,xe=Symbol(void 0),Fi=Symbol(void 0),ln=Symbol(void 0),ns=Symbol(void 0),br=[];let xt=null;function k(e=!1){br.push(xt=e?null:[])}function Ef(){br.pop(),xt=br[br.length-1]||null}let Or=1;function Da(e){Or+=e}function su(e){return e.dynamicChildren=Or>0?xt||Nn:null,Ef(),Or>0&&xt&&xt.push(e),e}function U(e,t,n,r,o,i){return su(s(e,t,n,r,o,i,!0))}function j(e,t,n,r,o){return su(Z(e,t,n,r,o,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function ur(e,t){return e.type===t.type&&e.key===t.key}const Ho="__vInternal",iu=({key:e})=>e!=null?e:null,ao=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||Se(e)||ue(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function s(e,t=null,n=null,r=0,o=null,i=e===xe?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&iu(t),ref:t&&ao(t),scopeId:Bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};return l?(Oi(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),Or>0&&!a&&xt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xt.push(c),c}const Z=Mf;function Mf(e,t=null,n=null,r=0,o=null,i=!1){if((!e||e===uf)&&(e=ln),Xn(e)){const l=An(e,t,!0);return n&&Oi(l,n),Or>0&&!i&&xt&&(l.shapeFlag&6?xt[xt.indexOf(e)]=l:xt.push(l)),l.patchFlag|=-2,l}if(If(e)&&(e=e.__vccOpts),t){t=Q(t);let{class:l,style:c}=t;l&&!Ie(l)&&(t.class=je(l)),Le(c)&&(Mc(c)&&!se(c)&&(c=rt({},c)),t.style=nt(c))}const a=Ie(e)?1:Nc(e)?128:Af(e)?64:Le(e)?4:ue(e)?2:0;return s(e,t,n,r,o,a,i,!0)}function Q(e){return e?Mc(e)||Ho in e?rt({},e):e:null}function An(e,t,n=!1){const{props:r,ref:o,patchFlag:i,children:a}=e,l=t?bo(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&iu(l),ref:t&&t.ref?n&&o?se(o)?o.concat(ao(t)):[o,ao(t)]:ao(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),el:e.el,anchor:e.anchor}}function f(e=" ",t=0){return Z(Fi,null,e,t)}function me(e="",t=!1){return t?(k(),j(ln,null,e)):Z(ln,null,e)}function Ot(e){return e==null||typeof e=="boolean"?Z(ln):se(e)?Z(xe,null,e.slice()):typeof e=="object"?Qt(e):Z(Fi,null,String(e))}function Qt(e){return e.el===null||e.memo?e:An(e)}function Oi(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(se(t))n=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Oi(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(Ho in t)?t._ctx=Ze:o===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),r&64?(n=16,t=[f(t)]):n=8);e.children=t,e.shapeFlag|=n}function bo(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=je([t.class,r.class]));else if(o==="style")t.style=nt([t.style,r.style]);else if(Mo(o)){const i=t[o],a=r[o];a&&i!==a&&!(se(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=r[o])}return t}function vt(e,t,n,r=null){$t(e,t,7,[n,r])}const Ff=ou();let Of=0;function zf(e,t,n){const r=e.type,o=(t?t.appContext:e.appContext)||Ff,i={uid:Of++,vnode:e,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new wc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eu(r,o),emitsOptions:Vc(r,o),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Kh.bind(null,i),e.ce&&e.ce(i),i}let Ue=null;const Cn=()=>Ue||Ze,er=e=>{Ue=e,e.scope.on()},Sn=()=>{Ue&&Ue.scope.off(),Ue=null};function au(e){return e.vnode.shapeFlag&4}let zr=!1;function Lf(e,t=!1){zr=t;const{props:n,children:r}=e.vnode,o=au(e);vf(e,n,o,t),bf(e,r);const i=o?jf(e,t):void 0;return zr=!1,i}function jf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jo(new Proxy(e.ctx,hf));const{setup:r}=n;if(r){const o=e.setupContext=r.length>1?cu(e):null;er(e),or();const i=nn(r,e,0,[e.props,o]);if(sr(),Sn(),yc(i)){if(i.then(Sn,Sn),t)return i.then(a=>{xa(e,a,t)}).catch(a=>{qo(a,e,0)});e.asyncDep=i}else xa(e,i,t)}else lu(e,t)}function xa(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)&&(e.setupState=Oc(t)),lu(e,n)}let Pa;function lu(e,t,n){const r=e.type;if(!e.render){if(!t&&Pa&&!r.render){const o=r.template||Ri(e).template;if(o){const{isCustomElement:i,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=r,u=rt(rt({isCustomElement:i,delimiters:l},a),c);r.render=Pa(o,u)}}e.render=r.render||At}er(e),or(),ff(e),sr(),Sn()}function qf(e){return new Proxy(e.attrs,{get(t,n){return yt(e,"get","$attrs"),t[n]}})}function cu(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=qf(e))},slots:e.slots,emit:e.emit,expose:t}}function Uo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Oc(jo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _o)return _o[n](e)}}))}function zs(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return ue(e)&&"__vccOpts"in e}const P=(e,t)=>Bh(e,t,zr);function Bf(){return Vf().slots}function Vf(){const e=Cn();return e.setupContext||(e.setupContext=cu(e))}function pt(e,t,n){const r=arguments.length;return r===2?Le(t)&&!se(t)?Xn(t)?Z(e,null,[t]):Z(e,t):Z(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xn(n)&&(n=[n]),Z(e,t,n))}const Nf="3.2.39",Wf="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,Aa=yn&&yn.createElement("template"),Hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const o=t?yn.createElementNS(Wf,e):yn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Aa.innerHTML=r?`<svg>${e}</svg>`:e;const l=Aa.content;if(r){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Uf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Kf(e,t,n){const r=e.style,o=Ie(n);if(n&&!o){for(const i in n)Ls(r,i,n[i]);if(t&&!Ie(t))for(const i in t)n[i]==null&&Ls(r,i,"")}else{const i=r.display;o?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const $a=/\s*!important$/;function Ls(e,t,n){if(se(n))n.forEach(r=>Ls(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Gf(e,t);$a.test(n)?e.setProperty($n(r),n.replace($a,""),"important"):e[r]=n}}const Ca=["Webkit","Moz","ms"],rs={};function Gf(e,t){const n=rs[t];if(n)return n;let r=It(t);if(r!=="filter"&&r in e)return rs[t]=r;r=zo(r);for(let o=0;o<Ca.length;o++){const i=Ca[o]+r;if(i in e)return rs[t]=i}return t}const Ra="http://www.w3.org/1999/xlink";function Jf(e,t,n,r,o){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n);else{const i=Kd(t);n==null||i&&!pc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Yf(e,t,n,r,o,i,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,o,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=pc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[uu,Zf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let js=0;const Qf=Promise.resolve(),Xf=()=>{js=0},ep=()=>js||(Qf.then(Xf),js=uu());function Ln(e,t,n,r){e.addEventListener(t,n,r)}function tp(e,t,n,r){e.removeEventListener(t,n,r)}function np(e,t,n,r,o=null){const i=e._vei||(e._vei={}),a=i[t];if(r&&a)a.value=r;else{const[l,c]=rp(t);if(r){const u=i[t]=op(r,o);Ln(e,l,u,c)}else a&&(tp(e,l,a,c),i[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function rp(e){let t;if(Ea.test(e)){t={};let r;for(;r=e.match(Ea);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}function op(e,t){const n=r=>{const o=r.timeStamp||uu();(Zf||o>=n.attached-1)&&$t(sp(r,n.value),t,5,[r])};return n.value=e,n.attached=ep(),n}function sp(e,t){if(se(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Ma=/^on[a-z]/,ip=(e,t,n,r,o=!1,i,a,l,c)=>{t==="class"?Uf(e,r,o):t==="style"?Kf(e,n,r):Mo(t)?hi(t)||np(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ap(e,t,r,o))?Yf(e,t,r,i,a,l,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jf(e,t,r,o))};function ap(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ma.test(t)&&ue(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ma.test(t)&&Ie(n)?!1:t in e}const Fa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?n=>Hn(t,n):t};function lp(e){e.target.composing=!0}function Oa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cp={created(e,{modifiers:{lazy:t,trim:n,number:r}},o){e._assign=Fa(o);const i=r||o.props&&o.props.type==="number";Ln(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),i&&(l=Ts(l)),e._assign(l)}),n&&Ln(e,"change",()=>{e.value=e.value.trim()}),t||(Ln(e,"compositionstart",lp),Ln(e,"compositionend",Oa),Ln(e,"change",Oa))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:o}},i){if(e._assign=Fa(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(o||e.type==="number")&&Ts(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},up={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},za=(e,t)=>n=>{if(!("key"in n))return;const r=$n(n.key);if(t.some(o=>o===r||up[o]===r))return e(n)},du={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):dr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),dr(e,!0),r.enter(e)):r.leave(e,()=>{dr(e,!1)}):dr(e,t))},beforeUnmount(e,{value:t}){dr(e,t)}};function dr(e,t){e.style.display=t?e._vod:"none"}const dp=rt({patchProp:ip},Hf);let La;function hp(){return La||(La=Df(dp))}const fp=(...e)=>{const t=hp().createApp(...e),{mount:n}=t;return t.mount=r=>{const o=pp(r);if(!o)return;const i=t._component;!ue(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const a=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function pp(e){return Ie(e)?document.querySelector(e):e}var mp=Object.defineProperty,ja=Object.getOwnPropertySymbols,gp=Object.prototype.hasOwnProperty,yp=Object.prototype.propertyIsEnumerable,qa=(e,t,n)=>t in e?mp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vp=(e,t)=>{for(var n in t||(t={}))gp.call(t,n)&&qa(e,n,t[n]);if(ja)for(var n of ja(t))yp.call(t,n)&&qa(e,n,t[n]);return e},hu="usehead",Ia="head:count",os="data-head-attrs",fu="data-meta-body",_p=(e,t,n)=>{const r=n.createElement(e);for(const o of Object.keys(t))if(o==="body"&&t.body===!0)r.setAttribute(fu,"true");else{let i=t[o];if(o==="key"||i===!1)continue;o==="children"?r.textContent=i:r.setAttribute(o,i)}return r};function Ba(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}var wp=e=>{const t=["key","id","name","property"];for(const n of t){const r=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(r!==void 0)return{name:n,value:r}}},bp=()=>{const e=F(hu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},kp=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Sp=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(b(t)),Tp=e=>{const t=[],n=Object.keys(e);for(const r of n)if(e[r]!=null)switch(r){case"title":t.push({tag:r,props:{children:e[r]}});break;case"titleTemplate":break;case"base":t.push({tag:r,props:vp({key:"default"},e[r])});break;default:if(kp.includes(r)){const o=e[r];Array.isArray(o)?o.forEach(i=>{t.push({tag:r,props:i})}):o&&t.push({tag:r,props:o})}break}return t},Va=(e,t)=>{const n=e.getAttribute(os);if(n)for(const o of n.split(","))o in t||e.removeAttribute(o);const r=[];for(const o in t){const i=t[o];i!=null&&(i===!1?e.removeAttribute(o):e.setAttribute(o,i),r.push(o))}r.length?e.setAttribute(os,r.join(",")):e.removeAttribute(os)},Dp=(e=window.document,t,n)=>{var r,o;const i=e.head,a=e.body;let l=i.querySelector(`meta[name="${Ia}"]`),c=a.querySelectorAll(`[${fu}]`);const u=l?Number(l.getAttribute("content")):0,d=[],h=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((r=c[m].tagName)==null?void 0:r.toLowerCase())===t&&h.push(c[m]);if(l)for(let m=0,g=l.previousElementSibling;m<u;m++,g=(g==null?void 0:g.previousElementSibling)||null)((o=g==null?void 0:g.tagName)==null?void 0:o.toLowerCase())===t&&d.push(g);else l=e.createElement("meta"),l.setAttribute("name",Ia),l.setAttribute("content","0"),i.append(l);let p=n.map(m=>{var g;return{element:_p(m.tag,m.props,e),body:(g=m.props.body)!=null?g:!1}});p=p.filter(m=>{for(let g=0;g<d.length;g++){const w=d[g];if(Ba(w,m.element))return d.splice(g,1),!1}for(let g=0;g<h.length;g++){const w=h[g];if(Ba(w,m.element))return h.splice(g,1),!1}return!0}),h.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),d.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),p.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):i.insertBefore(m.element,l)}),l.setAttribute("content",""+(u-d.length+p.filter(m=>!m.body).length))},xp=e=>{let t=[],n=new Set;e&&t.push(Rt(e));const r={install(o){o.config.globalProperties.$head=r,o.provide(hu,r)},get headTags(){const o=[],i=t.map(a=>b(a).titleTemplate).reverse().find(a=>a!=null);return t.forEach(a=>{Tp(b(a)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=wp(c.props);if(u){let d=-1;for(let h=0;h<o.length;h++){const p=o[h],m=p.props[u.name],g=c.props[u.name];if(p.tag===c.tag&&m===g){d=h;break}}d!==-1&&o.splice(d,1)}}i&&c.tag==="title"&&(c.props.children=Sp(i,c.props.children)),o.push(c)})}),o},addHeadObjs(o){t.push(o)},removeHeadObjs(o){t=t.filter(i=>i!==o)},updateDOM(o=window.document){let i,a={},l={};const c={};for(const d of r.headTags){if(d.tag==="title"){i=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(a,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(l,d.props);continue}c[d.tag]=c[d.tag]||[],c[d.tag].push(d)}i!==void 0&&(o.title=i),Va(o.documentElement,a),Va(o.body,l);const u=new Set([...Object.keys(c),...n]);for(const d of u)Dp(o,d,c[d]||[]);n.clear(),Object.keys(c).forEach(d=>n.add(d))}};return r},Pp=typeof window<"u",Ap=e=>{const t=bp(),n=H(e);t.addHeadObjs(n),Pp&&(Vo(()=>{t.updateDOM()}),Wo(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const lo=Symbol("v-click-clicks"),jn=Symbol("v-click-clicks-elements"),qs=Symbol("v-click-clicks-order-map"),co=Symbol("v-click-clicks-disabled"),pu=Symbol("slidev-slide-scale"),I=Symbol("slidev-slidev-context"),$p=Symbol("slidev-route"),Cp=Symbol("slidev-slide-context"),Fn="slidev-vclick-target",ss="slidev-vclick-hidden",Rp="slidev-vclick-fade",is="slidev-vclick-hidden-explicitly",hr="slidev-vclick-current",no="slidev-vclick-prior";function Na(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ep(e){return e!=null}function Mp(e,t){return Object.fromEntries(Object.entries(e).map(([n,r])=>t(n,r)).filter(Ep))}const _n={theme:"default",title:"European Cruise 2022",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"european-cruise-2022",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},ke=_n;var hc;const rn=(hc=ke.aspectRatio)!=null?hc:16/9;var fc;const Tn=(fc=ke.canvasWidth)!=null?fc:980,mu=Math.round(Tn/rn),gu=P(()=>Mp(ke.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Fe({page:0,clicks:0});let Fp=[],Op=[];bt(Rn,"$syncUp",!0);bt(Rn,"$syncDown",!0);bt(Rn,"$paused",!1);bt(Rn,"$onSet",e=>Fp.push(e));bt(Rn,"$onPatch",e=>Op.push(e));bt(Rn,"$patch",async()=>!1);function yu(e,t,n=!1){const r=[];let o=!1,i=!1,a,l;const c=Fe(t);function u(m){r.push(m)}function d(m,g){clearTimeout(a),o=!0,c[m]=g,a=setTimeout(()=>o=!1,0)}function h(m){o||(clearTimeout(l),i=!0,Object.entries(m).forEach(([g,w])=>{c[g]=w}),l=setTimeout(()=>i=!1,0))}function p(m){let g;n?n&&window.addEventListener("storage",_=>{_&&_.key===m&&_.newValue&&h(JSON.parse(_.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",_=>h(_.data)));function w(){!n&&g&&!i?g.postMessage(be(c)):n&&!i&&window.localStorage.setItem(m,JSON.stringify(c)),o||r.forEach(_=>_(c))}if(fe(c,w,{deep:!0}),n){const _=window.localStorage.getItem(m);_&&h(JSON.parse(_))}}return{init:p,onPatch:u,patch:d,state:c}}const{init:zp,onPatch:Lp,patch:Wa,state:as}=yu(Rn,{page:1,clicks:0}),En=Fe({});let jp=[],qp=[];bt(En,"$syncUp",!0);bt(En,"$syncDown",!0);bt(En,"$paused",!1);bt(En,"$onSet",e=>jp.push(e));bt(En,"$onPatch",e=>qp.push(e));bt(En,"$patch",async()=>!1);const{init:Ip,onPatch:Bp,patch:vu,state:ko}=yu(En,{},!1),Vp="modulepreload",Np=function(e){return"/"+e},Ha={},ir=function(t,n,r){return!n||n.length===0?t():Promise.all(n.map(o=>{if(o=Np(o),o in Ha)return;Ha[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Vp,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};var Ua;const Kt=typeof window<"u",Wp=e=>typeof e<"u",Hp=Object.prototype.toString,So=e=>typeof e=="function",Up=e=>typeof e=="number",_u=e=>typeof e=="string",Is=e=>Hp.call(e)==="[object Object]",Bs=()=>+Date.now(),Dn=()=>{};Kt&&((Ua=window==null?void 0:window.navigator)==null?void 0:Ua.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ft(e){return typeof e=="function"?e():b(e)}function Kp(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const wu=e=>e();function Gp(e=wu){const t=H(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...i)=>{t.value&&e(...i)}}}function Jp(e){return e}function Yp(e,t){var n;if(typeof e=="number")return e+t;const r=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",o=e.slice(r.length),i=parseFloat(r)+t;return Number.isNaN(i)?e:i+o}function Zp(e,t){let n,r,o;const i=H(!0),a=()=>{i.value=!0,o()};fe(e,a,{flush:"sync"});const l=So(t)?t:t.get,c=So(t)?void 0:t.set,u=zc((d,h)=>(r=d,o=h,{get(){return i.value&&(n=l(),i.value=!1),r(),n},set(p){c==null||c(p)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cn(e){return bc()?(kc(e),!0):!1}function Qp(e){if(!Se(e))return Fe(e);const t=new Proxy({},{get(n,r,o){return b(Reflect.get(e.value,r,o))},set(n,r,o){return Se(e.value[r])&&!Se(o)?e.value[r].value=o:e.value[r]=o,!0},deleteProperty(n,r){return Reflect.deleteProperty(e.value,r)},has(n,r){return Reflect.has(e.value,r)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fe(t)}function Xp(e){return typeof e=="function"?P(e):H(e)}var em=Object.defineProperty,tm=Object.defineProperties,nm=Object.getOwnPropertyDescriptors,Ka=Object.getOwnPropertySymbols,rm=Object.prototype.hasOwnProperty,om=Object.prototype.propertyIsEnumerable,Ga=(e,t,n)=>t in e?em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sm=(e,t)=>{for(var n in t||(t={}))rm.call(t,n)&&Ga(e,n,t[n]);if(Ka)for(var n of Ka(t))om.call(t,n)&&Ga(e,n,t[n]);return e},im=(e,t)=>tm(e,nm(t));function am(e){if(!Se(e))return Lh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=zc(()=>({get(){return e.value[n]},set(r){if(Array.isArray(e.value)){const o=[...e.value];o[n]=r,e.value=o}else{const o=im(sm({},e.value),{[n]:r});Object.setPrototypeOf(o,e.value),e.value=o}}}));return t}function lm(e,t=!0){Cn()?Jc(e):t?e():Ye(e)}function bu(e,t=!0){Cn()?Wr(e):t?e():Ye(e)}function cm(e){Cn()&&$i(e)}function um(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:o=!1}=n;let i=null;const a=H(!1);function l(){i&&(clearInterval(i),i=null)}function c(){a.value=!1,l()}function u(){b(t)<=0||(a.value=!0,o&&e(),l(),i=setInterval(e,ft(t)))}if(r&&Kt&&u(),Se(t)){const d=fe(t,()=>{a.value&&Kt&&u()});cn(d)}return cn(c),{isActive:a,pause:c,resume:u}}function ku(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,o=Se(e),i=H(e);function a(l){if(arguments.length)return i.value=l,i.value;{const c=ft(n);return i.value=i.value===c?ft(r):c,i.value}}return o?a:[i,a]}var Ja=Object.getOwnPropertySymbols,dm=Object.prototype.hasOwnProperty,hm=Object.prototype.propertyIsEnumerable,fm=(e,t)=>{var n={};for(var r in e)dm.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ja)for(var r of Ja(e))t.indexOf(r)<0&&hm.call(e,r)&&(n[r]=e[r]);return n};function pm(e,t,n={}){const r=n,{eventFilter:o=wu}=r,i=fm(r,["eventFilter"]);return fe(e,Kp(o,t),i)}var mm=Object.defineProperty,gm=Object.defineProperties,ym=Object.getOwnPropertyDescriptors,To=Object.getOwnPropertySymbols,Su=Object.prototype.hasOwnProperty,Tu=Object.prototype.propertyIsEnumerable,Ya=(e,t,n)=>t in e?mm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vm=(e,t)=>{for(var n in t||(t={}))Su.call(t,n)&&Ya(e,n,t[n]);if(To)for(var n of To(t))Tu.call(t,n)&&Ya(e,n,t[n]);return e},_m=(e,t)=>gm(e,ym(t)),wm=(e,t)=>{var n={};for(var r in e)Su.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&To)for(var r of To(e))t.indexOf(r)<0&&Tu.call(e,r)&&(n[r]=e[r]);return n};function bm(e,t,n={}){const r=n,{eventFilter:o}=r,i=wm(r,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:u}=Gp(o);return{stop:pm(e,t,_m(vm({},i),{eventFilter:a})),pause:l,resume:c,isActive:u}}function Pt(e){var t;const n=ft(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Qe=Kt?window:void 0,km=Kt?window.document:void 0;function de(...e){let t,n,r,o;if(_u(e[0])?([n,r,o]=e,t=Qe):[t,n,r,o]=e,!t)return Dn;let i=Dn;const a=fe(()=>Pt(t),c=>{i(),c&&(c.addEventListener(n,r,o),i=()=>{c.removeEventListener(n,r,o),i=Dn})},{immediate:!0,flush:"post"}),l=()=>{a(),i()};return cn(l),l}function Sm(e,t,n={}){const{window:r=Qe,ignore:o,capture:i=!0,detectIframe:a=!1}=n;if(!r)return;const l=H(!0);let c;const u=p=>{r.clearTimeout(c);const m=Pt(e),g=p.composedPath();!m||m===p.target||g.includes(m)||!l.value||o&&o.length>0&&o.some(w=>{const _=Pt(w);return _&&(p.target===_||g.includes(_))})||t(p)},d=[de(r,"click",u,{passive:!0,capture:i}),de(r,"pointerdown",p=>{const m=Pt(e);l.value=!!m&&!p.composedPath().includes(m)},{passive:!0}),de(r,"pointerup",p=>{if(p.button===0){const m=p.composedPath();p.composedPath=()=>m,c=r.setTimeout(()=>u(p),50)}},{passive:!0}),a&&de(r,"blur",p=>{var m;const g=Pt(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(p)})].filter(Boolean);return()=>d.forEach(p=>p())}const Tm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Dm(e,t,n={}){const{target:r=Qe,eventName:o="keydown",passive:i=!1}=n,a=Tm(e);return de(r,o,c=>{a(c)&&t(c)},i)}function xm(e={}){const{window:t=Qe}=e,n=Zp(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(de(t,"blur",n.trigger,!0),de(t,"focus",n.trigger,!0)),n}function Ko(e,t=!1){const n=H(),r=()=>n.value=Boolean(e());return r(),bu(r,t),n}function qn(e,t={}){const{window:n=Qe}=t,r=Ko(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let o;const i=H(!1),a=()=>{!r.value||(o||(o=n.matchMedia(e)),i.value=o.matches)};return lm(()=>{a(),o&&("addEventListener"in o?o.addEventListener("change",a):o.addListener(a),cn(()=>{"removeEventListener"in o?o.removeEventListener("change",a):o.removeListener(a)}))}),i}const Pm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Am=Object.defineProperty,Za=Object.getOwnPropertySymbols,$m=Object.prototype.hasOwnProperty,Cm=Object.prototype.propertyIsEnumerable,Qa=(e,t,n)=>t in e?Am(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Rm=(e,t)=>{for(var n in t||(t={}))$m.call(t,n)&&Qa(e,n,t[n]);if(Za)for(var n of Za(t))Cm.call(t,n)&&Qa(e,n,t[n]);return e};function Em(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Yp(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:r=Qe}=t;function o(l){return r?r.matchMedia(l).matches:!1}const i=l=>qn(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>i(c),enumerable:!0,configurable:!0}),l),{});return Rm({greater(l){return qn(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:i,smaller(l){return qn(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return qn(`(max-width: ${n(l)})`,t)},between(l,c){return qn(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return o(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return o(`(min-width: ${n(l)})`)},isSmaller(l){return o(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return o(`(max-width: ${n(l)})`)},isInBetween(l,c){return o(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},a)}function Mm(e){return JSON.parse(JSON.stringify(e))}const Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ns="__vueuse_ssr_handlers__";Vs[Ns]=Vs[Ns]||{};const Fm=Vs[Ns];function Om(e,t){return Fm[e]||t}function zm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var Lm=Object.defineProperty,Xa=Object.getOwnPropertySymbols,jm=Object.prototype.hasOwnProperty,qm=Object.prototype.propertyIsEnumerable,el=(e,t,n)=>t in e?Lm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,tl=(e,t)=>{for(var n in t||(t={}))jm.call(t,n)&&el(e,n,t[n]);if(Xa)for(var n of Xa(t))qm.call(t,n)&&el(e,n,t[n]);return e};const Im={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Mt(e,t,n,r={}){var o;const{flush:i="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:h=Qe,eventFilter:p,onError:m=N=>{console.error(N)}}=r,g=(d?Rt:H)(t);if(!n)try{n=Om("getDefaultStorage",()=>{var N;return(N=Qe)==null?void 0:N.localStorage})()}catch(N){m(N)}if(!n)return g;const w=ft(t),_=zm(w),x=(o=r.serializer)!=null?o:Im[_],{pause:T,resume:D}=bm(g,()=>A(g.value),{flush:i,deep:a,eventFilter:p});return h&&l&&de(h,"storage",O),O(),g;function A(N){try{N==null?n.removeItem(e):n.setItem(e,x.write(N))}catch(ne){m(ne)}}function q(N){if(!(N&&N.key!==e)){T();try{const ne=N?N.newValue:n.getItem(e);if(ne==null)return c&&w!==null&&n.setItem(e,x.write(w)),w;if(!N&&u){const ae=x.read(ne);return So(u)?u(ae,w):_==="object"&&!Array.isArray(ae)?tl(tl({},w),ae):ae}else return typeof ne!="string"?ne:x.read(ne)}catch(ne){m(ne)}finally{D()}}}function O(N){N&&N.key!==e||(g.value=q(N))}}function Bm(e){return qn("(prefers-color-scheme: dark)",e)}var Vm=Object.defineProperty,Nm=Object.defineProperties,Wm=Object.getOwnPropertyDescriptors,nl=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,Um=Object.prototype.propertyIsEnumerable,rl=(e,t,n)=>t in e?Vm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Km=(e,t)=>{for(var n in t||(t={}))Hm.call(t,n)&&rl(e,n,t[n]);if(nl)for(var n of nl(t))Um.call(t,n)&&rl(e,n,t[n]);return e},Gm=(e,t)=>Nm(e,Wm(t));function ZP(e,t={}){var n,r,o;const i=(n=t.draggingElement)!=null?n:Qe,a=(r=t.handle)!=null?r:e,l=H((o=ft(t.initialValue))!=null?o:{x:0,y:0}),c=H(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{ft(t.preventDefault)&&g.preventDefault(),ft(t.stopPropagation)&&g.stopPropagation()},h=g=>{var w;if(!u(g)||ft(t.exact)&&g.target!==ft(e))return;const _=ft(e).getBoundingClientRect(),x={x:g.pageX-_.left,y:g.pageY-_.top};((w=t.onStart)==null?void 0:w.call(t,x,g))!==!1&&(c.value=x,d(g))},p=g=>{var w;!u(g)||!c.value||(l.value={x:g.pageX-c.value.x,y:g.pageY-c.value.y},(w=t.onMove)==null||w.call(t,l.value,g),d(g))},m=g=>{var w;!u(g)||!c.value||(c.value=void 0,(w=t.onEnd)==null||w.call(t,l.value,g),d(g))};return Kt&&(de(a,"pointerdown",h,!0),de(i,"pointermove",p,!0),de(i,"pointerup",m,!0)),Gm(Km({},am(l)),{position:l,isDragging:P(()=>!!c.value),style:P(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var ol=Object.getOwnPropertySymbols,Jm=Object.prototype.hasOwnProperty,Ym=Object.prototype.propertyIsEnumerable,Zm=(e,t)=>{var n={};for(var r in e)Jm.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&ol)for(var r of ol(e))t.indexOf(r)<0&&Ym.call(e,r)&&(n[r]=e[r]);return n};function Qm(e,t,n={}){const r=n,{window:o=Qe}=r,i=Zm(r,["window"]);let a;const l=Ko(()=>o&&"ResizeObserver"in o),c=()=>{a&&(a.disconnect(),a=void 0)},u=fe(()=>Pt(e),h=>{c(),l.value&&o&&h&&(a=new ResizeObserver(t),a.observe(h,i))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}function Xm(e,t={}){const{immediate:n=!0,window:r=Qe}=t,o=H(!1);let i=null;function a(){!o.value||!r||(e(),i=r.requestAnimationFrame(a))}function l(){!o.value&&r&&(o.value=!0,a())}function c(){o.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return n&&l(),cn(c),{isActive:o,pause:c,resume:l}}function e0(e,t={width:0,height:0},n={}){const{box:r="content-box"}=n,o=H(t.width),i=H(t.height);return Qm(e,([a])=>{const l=r==="border-box"?a.borderBoxSize:r==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;l?(o.value=l.reduce((c,{inlineSize:u})=>c+u,0),i.value=l.reduce((c,{blockSize:u})=>c+u,0)):(o.value=a.contentRect.width,i.value=a.contentRect.height)},n),fe(()=>Pt(e),a=>{o.value=a?t.width:0,i.value=a?t.height:0}),{width:o,height:i}}const sl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function t0(e,t={}){const{document:n=km,autoExit:r=!1}=t,o=e||(n==null?void 0:n.querySelector("html")),i=H(!1);let a=sl[0];const l=Ko(()=>{if(n){for(const w of sl)if(w[1]in n)return a=w,!0}else return!1;return!1}),[c,u,d,,h]=a;async function p(){!l.value||(n!=null&&n[d]&&await n[u](),i.value=!1)}async function m(){if(!l.value)return;await p();const w=Pt(o);w&&(await w[c](),i.value=!0)}async function g(){i.value?await p():await m()}return n&&de(n,h,()=>{i.value=!!(n!=null&&n[d])},!1),r&&cn(p),{isSupported:l,isFullscreen:i,enter:m,exit:p,toggle:g}}function n0(e,t,n={}){const{root:r,rootMargin:o="0px",threshold:i=.1,window:a=Qe}=n,l=Ko(()=>a&&"IntersectionObserver"in a);let c=Dn;const u=l.value?fe(()=>({el:Pt(e),root:Pt(r)}),({el:h,root:p})=>{if(c(),!h)return;const m=new IntersectionObserver(t,{root:p,rootMargin:o,threshold:i});m.observe(h),c=()=>{m.disconnect(),c=Dn}},{immediate:!0,flush:"post"}):Dn,d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}const r0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function o0(e={}){const{reactive:t=!1,target:n=Qe,aliasMap:r=r0,passive:o=!0,onEventFired:i=Dn}=e,a=Fe(new Set),l={toJSON(){return{}},current:a},c=t?Fe(l):l,u=new Set,d=new Set;function h(w,_){w in c&&(t?c[w]=_:c[w].value=_)}function p(){for(const w of d)h(w,!1)}function m(w,_){var x,T;const D=(x=w.key)==null?void 0:x.toLowerCase(),q=[(T=w.code)==null?void 0:T.toLowerCase(),D].filter(Boolean);D&&(_?a.add(D):a.delete(D));for(const O of q)d.add(O),h(O,_);D==="meta"&&!_?(u.forEach(O=>{a.delete(O),h(O,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&_&&[...a,...q].forEach(O=>u.add(O))}de(n,"keydown",w=>(m(w,!0),i(w)),{passive:o}),de(n,"keyup",w=>(m(w,!1),i(w)),{passive:o}),de("blur",p,{passive:!0}),de("focus",p,{passive:!0});const g=new Proxy(c,{get(w,_,x){if(typeof _!="string")return Reflect.get(w,_,x);if(_=_.toLowerCase(),_ in r&&(_=r[_]),!(_ in c))if(/[+_-]/.test(_)){const D=_.split(/[+_-]/g).map(A=>A.trim());c[_]=P(()=>D.every(A=>b(g[A])))}else c[_]=H(!1);const T=Reflect.get(w,_,x);return t?b(T):T}});return g}function QP(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:r=!1,initialValue:o={x:0,y:0},window:i=Qe,eventFilter:a}=e,l=H(o.x),c=H(o.y),u=H(null),d=w=>{t==="page"?(l.value=w.pageX,c.value=w.pageY):t==="client"&&(l.value=w.clientX,c.value=w.clientY),u.value="mouse"},h=()=>{l.value=o.x,c.value=o.y},p=w=>{if(w.touches.length>0){const _=w.touches[0];t==="page"?(l.value=_.pageX,c.value=_.pageY):t==="client"&&(l.value=_.clientX,c.value=_.clientY),u.value="touch"}},m=w=>a===void 0?d(w):a(()=>d(w),{}),g=w=>a===void 0?p(w):a(()=>p(w),{});return i&&(de(i,"mousemove",m,{passive:!0}),de(i,"dragover",m,{passive:!0}),n&&(de(i,"touchstart",g,{passive:!0}),de(i,"touchmove",g,{passive:!0}),r&&de(i,"touchend",h,{passive:!0}))),{x:l,y:c,sourceType:u}}var Ht;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ht||(Ht={}));function s0(e,t={}){const n=Xp(e),{threshold:r=50,onSwipe:o,onSwipeEnd:i,onSwipeStart:a}=t,l=Fe({x:0,y:0}),c=(O,N)=>{l.x=O,l.y=N},u=Fe({x:0,y:0}),d=(O,N)=>{u.x=O,u.y=N},h=P(()=>l.x-u.x),p=P(()=>l.y-u.y),{max:m,abs:g}=Math,w=P(()=>m(g(h.value),g(p.value))>=r),_=H(!1),x=H(!1),T=P(()=>w.value?g(h.value)>g(p.value)?h.value>0?Ht.LEFT:Ht.RIGHT:p.value>0?Ht.UP:Ht.DOWN:Ht.NONE),D=O=>t.pointerTypes?t.pointerTypes.includes(O.pointerType):!0,A=[de(e,"pointerdown",O=>{var N,ne;if(!D(O))return;x.value=!0,(ne=(N=n.value)==null?void 0:N.style)==null||ne.setProperty("touch-action","none");const ae=O.target;ae==null||ae.setPointerCapture(O.pointerId);const{clientX:ge,clientY:ve}=O;c(ge,ve),d(ge,ve),a==null||a(O)}),de(e,"pointermove",O=>{if(!D(O)||!x.value)return;const{clientX:N,clientY:ne}=O;d(N,ne),!_.value&&w.value&&(_.value=!0),_.value&&(o==null||o(O))}),de(e,"pointerup",O=>{var N,ne;!D(O)||(_.value&&(i==null||i(O,T.value)),x.value=!1,_.value=!1,(ne=(N=n.value)==null?void 0:N.style)==null||ne.setProperty("touch-action","initial"))})],q=()=>A.forEach(O=>O());return{isSwiping:Bn(_),direction:Bn(T),posStart:Bn(l),posEnd:Bn(u),distanceX:h,distanceY:p,stop:q}}var i0=Object.defineProperty,il=Object.getOwnPropertySymbols,a0=Object.prototype.hasOwnProperty,l0=Object.prototype.propertyIsEnumerable,al=(e,t,n)=>t in e?i0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c0=(e,t)=>{for(var n in t||(t={}))a0.call(t,n)&&al(e,n,t[n]);if(il)for(var n of il(t))l0.call(t,n)&&al(e,n,t[n]);return e};function XP(e={}){const{controls:t=!1,offset:n=0,immediate:r=!0,interval:o="requestAnimationFrame"}=e,i=H(Bs()+n),a=()=>i.value=Bs()+n,l=o==="requestAnimationFrame"?Xm(a,{immediate:r}):um(a,o,{immediate:r});return t?c0({timestamp:i},l):i}var u0=Object.defineProperty,ll=Object.getOwnPropertySymbols,d0=Object.prototype.hasOwnProperty,h0=Object.prototype.propertyIsEnumerable,cl=(e,t,n)=>t in e?u0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f0=(e,t)=>{for(var n in t||(t={}))d0.call(t,n)&&cl(e,n,t[n]);if(ll)for(var n of ll(t))h0.call(t,n)&&cl(e,n,t[n]);return e};const p0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};f0({linear:Jp},p0);function jt(e,t,n,r={}){var o,i,a;const{clone:l=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:h}=r,p=Cn(),m=n||(p==null?void 0:p.emit)||((o=p==null?void 0:p.$emit)==null?void 0:o.bind(p))||((a=(i=p==null?void 0:p.proxy)==null?void 0:i.$emit)==null?void 0:a.bind(p==null?void 0:p.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const w=x=>l?So(l)?l(x):Mm(x):x,_=()=>Wp(e[t])?w(e[t]):h;if(c){const x=_(),T=H(x);return fe(()=>e[t],D=>T.value=w(D)),fe(T,D=>{(D!==e[t]||d)&&m(g,D)},{deep:d}),T}else return P({get(){return _()},set(x){m(g,x)}})}function eA({window:e=Qe}={}){if(!e)return H(!1);const t=H(e.document.hasFocus());return de(e,"blur",()=>{t.value=!1}),de(e,"focus",()=>{t.value=!0}),t}function m0(e={}){const{window:t=Qe,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:i=!0}=e,a=H(n),l=H(r),c=()=>{t&&(i?(a.value=t.innerWidth,l.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return c(),bu(c),de("resize",c,{passive:!0}),o&&de("orientationchange",c,{passive:!0}),{width:a,height:l}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof window<"u";function g0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const De=Object.assign;function ls(e,t){const n={};for(const r in t){const o=t[r];n[r]=Et(o)?o.map(e):e(o)}return n}const kr=()=>{},Et=Array.isArray,y0=/\/$/,v0=e=>e.replace(y0,"");function cs(e,t,n="/"){let r,o={},i="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=t.slice(0,c),i=t.slice(c+1,l>-1?l:t.length),o=e(i)),l>-1&&(r=r||t.slice(0,l),a=t.slice(l,t.length)),r=k0(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+a,path:r,query:o,hash:a}}function _0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ul(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function w0(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&tr(t.matched[r],n.matched[o])&&Du(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function tr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Du(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!b0(e[n],t[n]))return!1;return!0}function b0(e,t){return Et(e)?dl(e,t):Et(t)?dl(t,e):e===t}function dl(e,t){return Et(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function k0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Lr;(function(e){e.pop="pop",e.push="push"})(Lr||(Lr={}));var Sr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Sr||(Sr={}));function S0(e){if(!e)if(In){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),v0(e)}const T0=/^[^#]+#/;function D0(e,t){return e.replace(T0,"#")+t}function x0(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Go=()=>({left:window.pageXOffset,top:window.pageYOffset});function P0(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=x0(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function hl(e,t){return(history.state?history.state.position-t:-1)+e}const Ws=new Map;function A0(e,t){Ws.set(e,t)}function $0(e){const t=Ws.get(e);return Ws.delete(e),t}let C0=()=>location.protocol+"//"+location.host;function xu(e,t){const{pathname:n,search:r,hash:o}=t,i=e.indexOf("#");if(i>-1){let l=o.includes(e.slice(i))?e.slice(i).length:1,c=o.slice(l);return c[0]!=="/"&&(c="/"+c),ul(c,"")}return ul(n,e)+r+o}function R0(e,t,n,r){let o=[],i=[],a=null;const l=({state:p})=>{const m=xu(e,location),g=n.value,w=t.value;let _=0;if(p){if(n.value=m,t.value=p,a&&a===g){a=null;return}_=w?p.position-w.position:0}else r(m);o.forEach(x=>{x(n.value,g,{delta:_,type:Lr.pop,direction:_?_>0?Sr.forward:Sr.back:Sr.unknown})})};function c(){a=n.value}function u(p){o.push(p);const m=()=>{const g=o.indexOf(p);g>-1&&o.splice(g,1)};return i.push(m),m}function d(){const{history:p}=window;!p.state||p.replaceState(De({},p.state,{scroll:Go()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:h}}function fl(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?Go():null}}function E0(e){const{history:t,location:n}=window,r={value:xu(e,n)},o={value:t.state};o.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const h=e.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?e:e.slice(h))+c:C0()+e+c;try{t[d?"replaceState":"pushState"](u,"",p),o.value=u}catch(m){console.error(m),n[d?"replace":"assign"](p)}}function a(c,u){const d=De({},t.state,fl(o.value.back,c,o.value.forward,!0),u,{position:o.value.position});i(c,d,!0),r.value=c}function l(c,u){const d=De({},o.value,t.state,{forward:c,scroll:Go()});i(d.current,d,!0);const h=De({},fl(r.value,c,null),{position:d.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:o,push:l,replace:a}}function M0(e){e=S0(e);const t=E0(e),n=R0(e,t.state,t.location,t.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const o=De({location:"",base:e,go:r,createHref:D0.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function F0(e){return typeof e=="string"||e&&typeof e=="object"}function Pu(e){return typeof e=="string"||typeof e=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Au=Symbol("");var pl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pl||(pl={}));function nr(e,t){return De(new Error,{type:e,[Au]:!0},t)}function Bt(e,t){return e instanceof Error&&Au in e&&(t==null||!!(e.type&t))}const ml="[^/]+?",O0={sensitive:!1,strict:!1,start:!0,end:!0},z0=/[.+*?^${}()[\]/\\]/g;function L0(e,t){const n=De({},O0,t),r=[];let o=n.start?"^":"";const i=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let h=0;h<u.length;h++){const p=u[h];let m=40+(n.sensitive?.25:0);if(p.type===0)h||(o+="/"),o+=p.value.replace(z0,"\\$&"),m+=40;else if(p.type===1){const{value:g,repeatable:w,optional:_,regexp:x}=p;i.push({name:g,repeatable:w,optional:_});const T=x||ml;if(T!==ml){m+=10;try{new RegExp(`(${T})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+A.message)}}let D=w?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(D=_&&u.length<2?`(?:/${D})`:"/"+D),_&&(D+="?"),o+=D,m+=20,_&&(m+=-8),w&&(m+=-20),T===".*"&&(m+=-50)}d.push(m)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const a=new RegExp(o,n.sensitive?"":"i");function l(u){const d=u.match(a),h={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",g=i[p-1];h[g.name]=m&&g.repeatable?m.split("/"):m}return h}function c(u){let d="",h=!1;for(const p of e){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const m of p)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:_}=m,x=g in u?u[g]:"";if(Et(x)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=Et(x)?x.join("/"):x;if(!T)if(_)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);d+=T}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function j0(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function q0(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const i=j0(r[n],o[n]);if(i)return i;n++}if(Math.abs(o.length-r.length)===1){if(gl(r))return 1;if(gl(o))return-1}return o.length-r.length}function gl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const I0={type:0,value:""},B0=/[a-zA-Z0-9_]/;function V0(e){if(!e)return[[]];if(e==="/")return[[I0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,r=n;const o=[];let i;function a(){i&&o.push(i),i=[]}let l=0,c,u="",d="";function h(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),a()):c===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:B0.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),h(),a(),o}function N0(e,t,n){const r=L0(V0(e.path),n),o=De(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function W0(e,t){const n=[],r=new Map;t=_l({strict:!1,end:!0,sensitive:!1},t);function o(d){return r.get(d)}function i(d,h,p){const m=!p,g=H0(d);g.aliasOf=p&&p.record;const w=_l(t,d),_=[g];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const A of D)_.push(De({},g,{components:p?p.record.components:g.components,path:A,aliasOf:p?p.record:g}))}let x,T;for(const D of _){const{path:A}=D;if(h&&A[0]!=="/"){const q=h.record.path,O=q[q.length-1]==="/"?"":"/";D.path=h.record.path+(A&&O+A)}if(x=N0(D,h,w),p?p.alias.push(x):(T=T||x,T!==x&&T.alias.push(x),m&&d.name&&!vl(x)&&a(d.name)),g.children){const q=g.children;for(let O=0;O<q.length;O++)i(q[O],x,p&&p.children[O])}p=p||x,c(x)}return T?()=>{a(T)}:kr}function a(d){if(Pu(d)){const h=r.get(d);h&&(r.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&r.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function c(d){let h=0;for(;h<n.length&&q0(d,n[h])>=0&&(d.record.path!==n[h].record.path||!$u(d,n[h]));)h++;n.splice(h,0,d),d.record.name&&!vl(d)&&r.set(d.record.name,d)}function u(d,h){let p,m={},g,w;if("name"in d&&d.name){if(p=r.get(d.name),!p)throw nr(1,{location:d});w=p.record.name,m=De(yl(h.params,p.keys.filter(T=>!T.optional).map(T=>T.name)),d.params&&yl(d.params,p.keys.map(T=>T.name))),g=p.stringify(m)}else if("path"in d)g=d.path,p=n.find(T=>T.re.test(g)),p&&(m=p.parse(g),w=p.record.name);else{if(p=h.name?r.get(h.name):n.find(T=>T.re.test(h.path)),!p)throw nr(1,{location:d,currentLocation:h});w=p.record.name,m=De({},h.params,d.params),g=p.stringify(m)}const _=[];let x=p;for(;x;)_.unshift(x.record),x=x.parent;return{name:w,path:g,params:m,matched:_,meta:K0(_)}}return e.forEach(d=>i(d)),{addRoute:i,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:o}}function yl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function H0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:U0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function U0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function K0(e){return e.reduce((t,n)=>De(t,n.meta),{})}function _l(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function $u(e,t){return t.children.some(n=>n===e||$u(e,n))}const Cu=/#/g,G0=/&/g,J0=/\//g,Y0=/=/g,Z0=/\?/g,Ru=/\+/g,Q0=/%5B/g,X0=/%5D/g,Eu=/%5E/g,e1=/%60/g,Mu=/%7B/g,t1=/%7C/g,Fu=/%7D/g,n1=/%20/g;function zi(e){return encodeURI(""+e).replace(t1,"|").replace(Q0,"[").replace(X0,"]")}function r1(e){return zi(e).replace(Mu,"{").replace(Fu,"}").replace(Eu,"^")}function Hs(e){return zi(e).replace(Ru,"%2B").replace(n1,"+").replace(Cu,"%23").replace(G0,"%26").replace(e1,"`").replace(Mu,"{").replace(Fu,"}").replace(Eu,"^")}function o1(e){return Hs(e).replace(Y0,"%3D")}function s1(e){return zi(e).replace(Cu,"%23").replace(Z0,"%3F")}function i1(e){return e==null?"":s1(e).replace(J0,"%2F")}function Do(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function a1(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const i=r[o].replace(Ru," "),a=i.indexOf("="),l=Do(a<0?i:i.slice(0,a)),c=a<0?null:Do(i.slice(a+1));if(l in t){let u=t[l];Et(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function wl(e){let t="";for(let n in e){const r=e[n];if(n=o1(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Et(r)?r.map(i=>i&&Hs(i)):[r&&Hs(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function l1(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Et(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const c1=Symbol(""),bl=Symbol(""),Li=Symbol(""),Ou=Symbol(""),Us=Symbol("");function fr(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Xt(e,t,n,r,o){const i=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(nr(4,{from:n,to:t})):h instanceof Error?l(h):F0(h)?l(nr(2,{from:t,to:h})):(i&&r.enterCallbacks[o]===i&&typeof h=="function"&&i.push(h),a())},u=e.call(r&&r.instances[o],t,n,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function us(e,t,n,r){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(u1(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Xt(u,n,r,i,a))}else{let c=l();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${i.path}"`));const d=g0(u)?u.default:u;i.components[a]=d;const p=(d.__vccOpts||d)[t];return p&&Xt(p,n,r,i,a)()}))}}return o}function u1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kl(e){const t=F(Li),n=F(Ou),r=P(()=>t.resolve(b(e.to))),o=P(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(tr.bind(null,d));if(p>-1)return p;const m=Sl(c[u-2]);return u>1&&Sl(d)===m&&h[h.length-1].path!==m?h.findIndex(tr.bind(null,c[u-2])):p}),i=P(()=>o.value>-1&&p1(n.params,r.value.params)),a=P(()=>o.value>-1&&o.value===n.matched.length-1&&Du(n.params,r.value.params));function l(c={}){return f1(c)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(kr):Promise.resolve()}return{route:r,href:P(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const d1=Te({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kl,setup(e,{slots:t}){const n=Fe(kl(e)),{options:r}=F(Li),o=P(()=>({[Tl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:pt("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),h1=d1;function f1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function p1(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!Et(o)||o.length!==r.length||r.some((i,a)=>i!==o[a]))return!1}return!0}function Sl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Tl=(e,t,n)=>e!=null?e:t!=null?t:n,m1=Te({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=F(Us),o=P(()=>e.route||r.value),i=F(bl,0),a=P(()=>{let u=b(i);const{matched:d}=o.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),l=P(()=>o.value.matched[a.value]);ht(bl,P(()=>a.value+1)),ht(c1,l),ht(Us,o);const c=H();return fe(()=>[c.value,l.value,e.name],([u,d,h],[p,m,g])=>{d&&(d.instances[h]=u,m&&m!==d&&u&&u===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!tr(d,m)||!p)&&(d.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=o.value,d=e.name,h=l.value,p=h&&h.components[d];if(!p)return Dl(n.default,{Component:p,route:u});const m=h.props[d],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,_=pt(p,De({},g,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[d]=null)},ref:c}));return Dl(n.default,{Component:_,route:u})||_}}});function Dl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const g1=m1;function y1(e){const t=W0(e.routes,e),n=e.parseQuery||a1,r=e.stringifyQuery||wl,o=e.history,i=fr(),a=fr(),l=fr(),c=Rt(Zt);let u=Zt;In&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ls.bind(null,$=>""+$),h=ls.bind(null,i1),p=ls.bind(null,Do);function m($,K){let B,Y;return Pu($)?(B=t.getRecordMatcher($),Y=K):Y=$,t.addRoute(Y,B)}function g($){const K=t.getRecordMatcher($);K&&t.removeRoute(K)}function w(){return t.getRoutes().map($=>$.record)}function _($){return!!t.getRecordMatcher($)}function x($,K){if(K=De({},K||c.value),typeof $=="string"){const re=cs(n,$,K.path),y=t.resolve({path:re.path},K),v=o.createHref(re.fullPath);return De(re,y,{params:p(y.params),hash:Do(re.hash),redirectedFrom:void 0,href:v})}let B;if("path"in $)B=De({},$,{path:cs(n,$.path,K.path).path});else{const re=De({},$.params);for(const y in re)re[y]==null&&delete re[y];B=De({},$,{params:h($.params)}),K.params=h(K.params)}const Y=t.resolve(B,K),we=$.hash||"";Y.params=d(p(Y.params));const pe=_0(r,De({},$,{hash:r1(we),path:Y.path})),le=o.createHref(pe);return De({fullPath:pe,hash:we,query:r===wl?l1($.query):$.query||{}},Y,{redirectedFrom:void 0,href:le})}function T($){return typeof $=="string"?cs(n,$,c.value.path):De({},$)}function D($,K){if(u!==$)return nr(8,{from:K,to:$})}function A($){return N($)}function q($){return A(De(T($),{replace:!0}))}function O($){const K=$.matched[$.matched.length-1];if(K&&K.redirect){const{redirect:B}=K;let Y=typeof B=="function"?B($):B;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=T(Y):{path:Y},Y.params={}),De({query:$.query,hash:$.hash,params:"path"in Y?{}:$.params},Y)}}function N($,K){const B=u=x($),Y=c.value,we=$.state,pe=$.force,le=$.replace===!0,re=O(B);if(re)return N(De(T(re),{state:typeof re=="object"?De({},we,re.state):we,force:pe,replace:le}),K||B);const y=B;y.redirectedFrom=K;let v;return!pe&&w0(r,Y,B)&&(v=nr(16,{to:y,from:Y}),Pe(Y,Y,!0,!1)),(v?Promise.resolve(v):ae(y,Y)).catch(S=>Bt(S)?Bt(S,2)?S:he(S):G(S,y,Y)).then(S=>{if(S){if(Bt(S,2))return N(De({replace:le},T(S.to),{state:typeof S.to=="object"?De({},we,S.to.state):we,force:pe}),K||y)}else S=ve(y,Y,!0,le,we);return ge(y,Y,S),S})}function ne($,K){const B=D($,K);return B?Promise.reject(B):Promise.resolve()}function ae($,K){let B;const[Y,we,pe]=v1($,K);B=us(Y.reverse(),"beforeRouteLeave",$,K);for(const re of Y)re.leaveGuards.forEach(y=>{B.push(Xt(y,$,K))});const le=ne.bind(null,$,K);return B.push(le),On(B).then(()=>{B=[];for(const re of i.list())B.push(Xt(re,$,K));return B.push(le),On(B)}).then(()=>{B=us(we,"beforeRouteUpdate",$,K);for(const re of we)re.updateGuards.forEach(y=>{B.push(Xt(y,$,K))});return B.push(le),On(B)}).then(()=>{B=[];for(const re of $.matched)if(re.beforeEnter&&!K.matched.includes(re))if(Et(re.beforeEnter))for(const y of re.beforeEnter)B.push(Xt(y,$,K));else B.push(Xt(re.beforeEnter,$,K));return B.push(le),On(B)}).then(()=>($.matched.forEach(re=>re.enterCallbacks={}),B=us(pe,"beforeRouteEnter",$,K),B.push(le),On(B))).then(()=>{B=[];for(const re of a.list())B.push(Xt(re,$,K));return B.push(le),On(B)}).catch(re=>Bt(re,8)?re:Promise.reject(re))}function ge($,K,B){for(const Y of l.list())Y($,K,B)}function ve($,K,B,Y,we){const pe=D($,K);if(pe)return pe;const le=K===Zt,re=In?history.state:{};B&&(Y||le?o.replace($.fullPath,De({scroll:le&&re&&re.scroll},we)):o.push($.fullPath,we)),c.value=$,Pe($,K,B,le),he()}let Be;function Ve(){Be||(Be=o.listen(($,K,B)=>{if(!un.listening)return;const Y=x($),we=O(Y);if(we){N(De(we,{replace:!0}),Y).catch(kr);return}u=Y;const pe=c.value;In&&A0(hl(pe.fullPath,B.delta),Go()),ae(Y,pe).catch(le=>Bt(le,12)?le:Bt(le,2)?(N(le.to,Y).then(re=>{Bt(re,20)&&!B.delta&&B.type===Lr.pop&&o.go(-1,!1)}).catch(kr),Promise.reject()):(B.delta&&o.go(-B.delta,!1),G(le,Y,pe))).then(le=>{le=le||ve(Y,pe,!1),le&&(B.delta&&!Bt(le,8)?o.go(-B.delta,!1):B.type===Lr.pop&&Bt(le,20)&&o.go(-1,!1)),ge(Y,pe,le)}).catch(kr)}))}let qe=fr(),Ee=fr(),ze;function G($,K,B){he($);const Y=Ee.list();return Y.length?Y.forEach(we=>we($,K,B)):console.error($),Promise.reject($)}function oe(){return ze&&c.value!==Zt?Promise.resolve():new Promise(($,K)=>{qe.add([$,K])})}function he($){return ze||(ze=!$,Ve(),qe.list().forEach(([K,B])=>$?B($):K()),qe.reset()),$}function Pe($,K,B,Y){const{scrollBehavior:we}=e;if(!In||!we)return Promise.resolve();const pe=!B&&$0(hl($.fullPath,0))||(Y||!B)&&history.state&&history.state.scroll||null;return Ye().then(()=>we($,K,pe)).then(le=>le&&P0(le)).catch(le=>G(le,$,K))}const it=$=>o.go($);let Ge;const ot=new Set,un={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:_,getRoutes:w,resolve:x,options:e,push:A,replace:q,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ee.add,isReady:oe,install($){const K=this;$.component("RouterLink",h1),$.component("RouterView",g1),$.config.globalProperties.$router=K,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),In&&!Ge&&c.value===Zt&&(Ge=!0,A(o.location).catch(we=>{}));const B={};for(const we in Zt)B[we]=P(()=>c.value[we]);$.provide(Li,K),$.provide(Ou,Fe(B)),$.provide(Us,c);const Y=$.unmount;ot.add($),$.unmount=function(){ot.delete($),ot.size<1&&(u=Zt,Be&&Be(),Be=null,c.value=Zt,Ge=!1,ze=!1),Y()}}};return un}function On(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function v1(e,t){const n=[],r=[],o=[],i=Math.max(t.matched.length,e.matched.length);for(let a=0;a<i;a++){const l=t.matched[a];l&&(e.matched.find(u=>tr(u,l))?r.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(u=>tr(u,c))||o.push(c))}return[n,r,o]}const ds=H(!1),Tr=H(!1),Vn=H(!1),_1=H(!0),Ks=Em({xs:460,...Pm}),xn=m0(),zu=o0(),w1=P(()=>xn.height.value-xn.width.value/rn>180),Lu=t0(Kt?document.body:null),Jn=xm(),b1=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")||((t=Jn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),k1=P(()=>{var e;return["BUTTON","A"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")});Mt("slidev-camera","default");Mt("slidev-mic","default");const uo=Mt("slidev-scale",0),et=Mt("slidev-show-overview",!1),hs=Mt("slidev-presenter-cursor",!0),xl=Mt("slidev-show-editor",!1);Mt("slidev-editor-width",Kt?window.innerWidth*.4:100);const ju=ku(et);function Pl(e,t,n,r=o=>o){return e*r(.5-t*(.5-n))}function S1(e){return[-e[0],-e[1]]}function Tt(e,t){return[e[0]+t[0],e[1]+t[1]]}function _t(e,t){return[e[0]-t[0],e[1]-t[1]]}function St(e,t){return[e[0]*t,e[1]*t]}function T1(e,t){return[e[0]/t,e[1]/t]}function pr(e){return[e[1],-e[0]]}function Al(e,t){return e[0]*t[0]+e[1]*t[1]}function D1(e,t){return e[0]===t[0]&&e[1]===t[1]}function x1(e){return Math.hypot(e[0],e[1])}function P1(e){return e[0]*e[0]+e[1]*e[1]}function $l(e,t){return P1(_t(e,t))}function qu(e){return T1(e,x1(e))}function A1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function mr(e,t,n){let r=Math.sin(n),o=Math.cos(n),i=e[0]-t[0],a=e[1]-t[1],l=i*o-a*r,c=i*r+a*o;return[l+t[0],c+t[1]]}function Gs(e,t,n){return Tt(e,St(_t(t,e),n))}function Cl(e,t,n){return Tt(e,St(t,n))}var{min:zn,PI:$1}=Math,Rl=.275,gr=$1+1e-4;function C1(e,t={}){let{size:n=16,smoothing:r=.5,thinning:o=.5,simulatePressure:i=!0,easing:a=G=>G,start:l={},end:c={},last:u=!1}=t,{cap:d=!0,easing:h=G=>G*(2-G)}=l,{cap:p=!0,easing:m=G=>--G*G*G+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,w=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,_=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,x=Math.pow(n*r,2),T=[],D=[],A=e.slice(0,10).reduce((G,oe)=>{let he=oe.pressure;if(i){let Pe=zn(1,oe.distance/n),it=zn(1,1-Pe);he=zn(1,G+(it-G)*(Pe*Rl))}return(G+he)/2},e[0].pressure),q=Pl(n,o,e[e.length-1].pressure,a),O,N=e[0].vector,ne=e[0].point,ae=ne,ge=ne,ve=ae,Be=!1;for(let G=0;G<e.length;G++){let{pressure:oe}=e[G],{point:he,vector:Pe,distance:it,runningLength:Ge}=e[G];if(G<e.length-1&&g-Ge<3)continue;if(o){if(i){let pe=zn(1,it/n),le=zn(1,1-pe);oe=zn(1,A+(le-A)*(pe*Rl))}q=Pl(n,o,oe,a)}else q=n/2;O===void 0&&(O=q);let ot=Ge<w?h(Ge/w):1,un=g-Ge<_?m((g-Ge)/_):1;q=Math.max(.01,q*Math.min(ot,un));let $=(G<e.length-1?e[G+1]:e[G]).vector,K=G<e.length-1?Al(Pe,$):1,B=Al(Pe,N)<0&&!Be,Y=K!==null&&K<0;if(B||Y){let pe=St(pr(N),q);for(let le=1/13,re=0;re<=1;re+=le)ge=mr(_t(he,pe),he,gr*re),T.push(ge),ve=mr(Tt(he,pe),he,gr*-re),D.push(ve);ne=ge,ae=ve,Y&&(Be=!0);continue}if(Be=!1,G===e.length-1){let pe=St(pr(Pe),q);T.push(_t(he,pe)),D.push(Tt(he,pe));continue}let we=St(pr(Gs($,Pe,K)),q);ge=_t(he,we),(G<=1||$l(ne,ge)>x)&&(T.push(ge),ne=ge),ve=Tt(he,we),(G<=1||$l(ae,ve)>x)&&(D.push(ve),ae=ve),A=oe,N=Pe}let Ve=e[0].point.slice(0,2),qe=e.length>1?e[e.length-1].point.slice(0,2):Tt(e[0].point,[1,1]),Ee=[],ze=[];if(e.length===1){if(!(w||_)||u){let G=Cl(Ve,qu(pr(_t(Ve,qe))),-(O||q)),oe=[];for(let he=1/13,Pe=he;Pe<=1;Pe+=he)oe.push(mr(G,Ve,gr*2*Pe));return oe}}else{if(!(w||_&&e.length===1))if(d)for(let oe=1/13,he=oe;he<=1;he+=oe){let Pe=mr(D[0],Ve,gr*he);Ee.push(Pe)}else{let oe=_t(T[0],D[0]),he=St(oe,.5),Pe=St(oe,.51);Ee.push(_t(Ve,he),_t(Ve,Pe),Tt(Ve,Pe),Tt(Ve,he))}let G=pr(S1(e[e.length-1].vector));if(_||w&&e.length===1)ze.push(qe);else if(p){let oe=Cl(qe,G,q);for(let he=1/29,Pe=he;Pe<1;Pe+=he)ze.push(mr(oe,qe,gr*3*Pe))}else ze.push(Tt(qe,St(G,q)),Tt(qe,St(G,q*.99)),_t(qe,St(G,q*.99)),_t(qe,St(G,q)))}return T.concat(ze,D.reverse(),Ee)}function R1(e,t={}){var n;let{streamline:r=.5,size:o=16,last:i=!1}=t;if(e.length===0)return[];let a=.15+(1-r)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:w=.5})=>[m,g,w]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(Gs(l[0],m,g/4))}l.length===1&&(l=[...l,[...Tt(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,h=c[0],p=l.length-1;for(let m=1;m<l.length;m++){let g=i&&m===p?l[m].slice(0,2):Gs(h.point,l[m],a);if(D1(h.point,g))continue;let w=A1(g,h.point);if(d+=w,m<p&&!u){if(d<o)continue;u=!0}h={point:g,pressure:l[m][2]>=0?l[m][2]:.5,vector:qu(_t(h.point,g)),distance:w,runningLength:d},c.push(h)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function E1(e,t={}){return C1(R1(e,t),t)}var M1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let r=0,o=n.length;r<o;r++)n[r](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(o=>t!==o)}}});function xo(e,t){return e-t}function F1(e){return e<0?-1:1}function Po(e){return[Math.abs(e),F1(e)]}function Iu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var O1=2,Wt=O1,ar=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var o;var t;const n=this.drauu.el,r=(o=this.drauu.options.coordinateScale)!=null?o:1;if(this.drauu.options.coordinateTransform===!1){const i=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-i.left)*r,y:(e.pageY-i.top)*r,pressure:e.pressure}}else{const i=this.drauu.svgPoint;i.x=e.clientX,i.y=e.clientY;const a=i.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*r,y:a.y*r,pressure:e.pressure}}}createElement(e,t){var o;const n=document.createElementNS("http://www.w3.org/2000/svg",e),r=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(o=r.fill)!=null?o:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Wt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},z1=class extends ar{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=E1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((r,[o,i],a,l)=>{const[c,u]=l[(a+1)%l.length];return r.push(o,i,(o+c)/2,(i+u)/2),r},["M",...t[0],"Q"]);return n.push("Z"),n.map(r=>typeof r=="number"?r.toFixed(2):r).join(" ")}},L1=class extends ar{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Po(e.x-this.start.x),[r,o]=Po(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,r);t=i,r=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",r);else{const[i,a]=[this.start.x,this.start.x+t*n].sort(xo),[l,c]=[this.start.y,this.start.y+r*o].sort(xo);this.attr("cx",(i+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-i)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Bu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("fill",t),r.setAttribute("id",e),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),o.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(o),n.appendChild(r),n}var j1=class extends ar{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Iu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Bu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const r=e.x-this.start.x,o=e.y-this.start.y;if(o!==0){let i=r/o;i=Math.round(i),Math.abs(i)<=1?(t=this.start.x+o*i,n=this.start.y+o):(t=this.start.x+r,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},q1=class extends ar{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Po(e.x-this.start.x),[r,o]=Po(e.y-this.start.y);if(this.shiftPressed){const i=Math.min(t,r);t=i,r=i}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-r),this.attr("width",t*2),this.attr("height",r*2);else{const[i,a]=[this.start.x,this.start.x+t*n].sort(xo),[l,c]=[this.start.y,this.start.y+r*o].sort(xo);this.attr("x",i),this.attr("y",l),this.attr("width",a-i),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function I1(e,t){const n=e.x-t.x,r=e.y-t.y;return n*n+r*r}function B1(e,t,n){let r=t.x,o=t.y,i=n.x-r,a=n.y-o;if(i!==0||a!==0){const l=((e.x-r)*i+(e.y-o)*a)/(i*i+a*a);l>1?(r=n.x,o=n.y):l>0&&(r+=i*l,o+=a*l)}return i=e.x-r,a=e.y-o,i*i+a*a}function V1(e,t){let n=e[0];const r=[n];let o;for(let i=1,a=e.length;i<a;i++)o=e[i],I1(o,n)>t&&(r.push(o),n=o);return n!==o&&o&&r.push(o),r}function Js(e,t,n,r,o){let i=r,a=0;for(let l=t+1;l<n;l++){const c=B1(e[l],e[t],e[n]);c>i&&(a=l,i=c)}i>r&&(a-t>1&&Js(e,t,a,r,o),o.push(e[a]),n-a>1&&Js(e,a,n,r,o))}function N1(e,t){const n=e.length-1,r=[e[0]];return Js(e,0,n,t,r),r.push(e[n]),r}function El(e,t,n=!1){if(e.length<=2)return e;const r=t!==void 0?t*t:1;return e=n?e:V1(e,r),e=N1(e,r),e}var W1=class extends ar{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Iu();const t=Bu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=El(this.points,1,!0),this.count=0),this.attr("d",Fl(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Fl(El(this.points,1,!0))),!e.getTotalLength()))}};function H1(e,t){const n=t.x-e.x,r=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(r,2)),angle:Math.atan2(r,n)}}function Ml(e,t,n,r){const o=t||e,i=n||e,a=.2,l=H1(o,i),c=l.angle+(r?Math.PI:0),u=l.length*a,d=e.x+Math.cos(c)*u,h=e.y+Math.sin(c)*u;return{x:d,y:h}}function U1(e,t,n){const r=Ml(n[t-1],n[t-2],e),o=Ml(e,n[t-1],n[t+1],!0);return`C ${r.x.toFixed(Wt)},${r.y.toFixed(Wt)} ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)} ${e.x.toFixed(Wt)},${e.y.toFixed(Wt)}`}function Fl(e){return e.reduce((t,n,r,o)=>r===0?`M ${n.x.toFixed(Wt)},${n.y.toFixed(Wt)}`:`${t} ${U1(n,r,o)}`,"")}var K1=class extends ar{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,r)=>{if(n&&n.length)for(let o=0;o<n.length;o++){const i=n[o];if(i.getTotalLength){const a=i.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=i.getPointAtLength(a*l/this.pathSubFactor),u=i.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:r||i})}}else i.children&&t(i.children,i)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],r={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,r)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,r=e.x2,o=t.x1,i=t.x2,a=e.y1,l=e.y2,c=t.y1,u=t.y2,d=(n-r)*(c-u)-(a-l)*(o-i),h=(n*l-a*r)*(o-i)-(n-r)*(o*u-c*i),p=(n*l-a*r)*(c-u)-(a-l)*(o*u-c*i),m=(g,w,_)=>g>=w&&g<=_?!0:g>=_&&g<=w;if(d===0)return!1;{const g={x:h/d,y:p/d};return m(g.x,n,r)&&m(g.y,a,l)&&m(g.x,o,i)&&m(g.y,c,u)}}};function G1(e){return{draw:new W1(e),stylus:new z1(e),line:new j1(e),rectangle:new q1(e),ellipse:new L1(e),eraseLine:new K1(e)}}var J1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=M1(),this._models=G1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,r=this.eventStart.bind(this),o=this.eventMove.bind(this),i=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),window.addEventListener("pointermove",o,{passive:!1}),window.addEventListener("pointerup",i,{passive:!1}),window.addEventListener("pointercancel",i,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),window.removeEventListener("pointermove",o),window.removeEventListener("pointerup",i),window.removeEventListener("pointercancel",i),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Y1(e){return new J1(e)}const Ys=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qt=Mt("slidev-drawing-enabled",!1),tA=Mt("slidev-drawing-pinned",!1),Z1=H(!1),Q1=H(!1),X1=H(!1),jr=H(!1),wn=Qp(Mt("slidev-drawing-brush",{color:Ys[0],size:4,mode:"stylus"})),Ol=H("stylus"),Vu=P(()=>ke.drawings.syncAll||Lt.value);let qr=!1;const yr=P({get(){return Ol.value},set(e){Ol.value=e,e==="arrow"?(wn.mode="line",wn.arrowEnd=!0):(wn.mode=e,wn.arrowEnd=!1)}}),eg=Fe({brush:wn,acceptsInputTypes:P(()=>qt.value?void 0:["pen"]),coordinateTransform:!1}),tt=jo(Y1(eg));function tg(){tt.clear(),Vu.value&&vu(He.value,"")}function Nu(){var e;Q1.value=tt.canRedo(),Z1.value=tt.canUndo(),X1.value=!!((e=tt.el)!=null&&e.children.length)}function ng(e){qr=!0;const t=ko[e||He.value];t!=null?tt.load(t):tt.clear(),qr=!1}tt.on("changed",()=>{if(Nu(),!qr){const e=tt.dump(),t=He.value;(ko[t]||"")!==e&&Vu.value&&vu(t,tt.dump())}});Bp(e=>{qr=!0,e[He.value]!=null&&tt.load(e[He.value]||""),qr=!1,Nu()});Ye(()=>{fe(He,()=>{!tt.mounted||ng()},{immediate:!0})});tt.on("start",()=>jr.value=!0);tt.on("end",()=>jr.value=!1);window.addEventListener("keydown",e=>{if(!qt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?tt.redo():tt.undo():e.code==="Escape"?qt.value=!1:e.code==="KeyL"&&t?yr.value="line":e.code==="KeyA"&&t?yr.value="arrow":e.code==="KeyS"&&t?yr.value="stylus":e.code==="KeyR"&&t?yr.value="rectangle":e.code==="KeyE"&&t?yr.value="ellipse":e.code==="KeyC"&&t?tg():e.code.startsWith("Digit")&&t&&+e.code[5]<=Ys.length?wn.color=Ys[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ne(...e){return P(()=>e.every(t=>ft(t)))}function ct(e){return P(()=>!ft(e))}const zl=Bm(),fs=Mt("slidev-color-schema","auto"),Zs=P(()=>ke.colorSchema!=="auto"),ji=P({get(){return Zs.value?ke.colorSchema==="dark":fs.value==="auto"?zl.value:fs.value==="dark"},set(e){Zs.value||(fs.value=e===zl.value?"auto":e?"dark":"light")}}),Wu=ku(ji);Kt&&fe(ji,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const ho=H(1),fo=P(()=>We.length-1),mt=H(0),qi=H(0);function rg(){mt.value>ho.value&&(mt.value-=1)}function og(){mt.value<fo.value&&(mt.value+=1)}function sg(){if(mt.value>ho.value){let e=mt.value-qi.value;e<ho.value&&(e=ho.value),mt.value=e}}function ig(){if(mt.value<fo.value){let e=mt.value+qi.value;e>fo.value&&(e=fo.value),mt.value=e}}function ag(){const{escape:e,space:t,shift:n,left:r,right:o,up:i,down:a,enter:l,d:c,g:u,o:d}=zu,h=[{name:"next_space",key:Ne(t,ct(n)),fn:on,autoRepeat:!0},{name:"prev_space",key:Ne(t,n),fn:sn,autoRepeat:!0},{name:"next_right",key:Ne(o,ct(n),ct(et)),fn:on,autoRepeat:!0},{name:"prev_left",key:Ne(r,ct(n),ct(et)),fn:sn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:on,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:sn,autoRepeat:!0},{name:"next_down",key:Ne(a,ct(et)),fn:Ir,autoRepeat:!0},{name:"prev_up",key:Ne(i,ct(et)),fn:()=>Br(!1),autoRepeat:!0},{name:"next_shift",key:Ne(o,n),fn:Ir,autoRepeat:!0},{name:"prev_shift",key:Ne(r,n),fn:()=>Br(!1),autoRepeat:!0},{name:"toggle_dark",key:Ne(c,ct(qt)),fn:Wu},{name:"toggle_overview",key:Ne(d,ct(qt)),fn:ju},{name:"hide_overview",key:Ne(e,ct(qt)),fn:()=>et.value=!1},{name:"goto",key:Ne(u,ct(qt)),fn:()=>Vn.value=!Vn.value},{name:"next_overview",key:Ne(o,et),fn:og},{name:"prev_overview",key:Ne(r,et),fn:rg},{name:"up_overview",key:Ne(i,et),fn:sg},{name:"down_overview",key:Ne(a,et),fn:ig},{name:"goto_from_overview",key:Ne(l,et),fn:()=>{rr(mt.value),et.value=!1}}];return{customShortcuts:[],defaultShortcuts:h}}const Hu=Ne(ct(b1),ct(k1),_1);function lg(e,t,n=!1){typeof e=="string"&&(e=zu[e]);const r=Ne(e,Hu);let o=0,i;const a=()=>{if(clearTimeout(i),!r.value){o=0;return}n&&(i=setTimeout(a,Math.max(1e3-o*250,150)),o++),t()};return fe(r,a,{flush:"sync"})}function cg(e,t){return Dm(e,n=>{!Hu.value||n.repeat||t()})}function ug(){const{customShortcuts:e,defaultShortcuts:t}=ag();new Map([...t,...e].map(r=>[r.key,r])).forEach(r=>{r.fn&&lg(r.key,r.fn,r.autoRepeat)}),cg("f",()=>Lu.toggle())}const dg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},hg=s("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),fg=[hg];function pg(e,t){return k(),U("svg",dg,fg)}const mg={name:"carbon-close",render:pg};function Ii(e){var n,r;const t=(r=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:r.no;return t!=null?`slidev-page-${t}`:""}const Uu=Te({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;F(I);const n=H(),r=e0(n),o=P(()=>t.width?t.width:r.width.value),i=P(()=>t.width?t.width/rn:r.height.value);t.width&&Vo(()=>{n.value&&(n.value.style.width=`${o.value}px`,n.value.style.height=`${i.value}px`)});const a=P(()=>o.value/i.value),l=P(()=>t.scale?t.scale:a.value<rn?o.value/Tn:i.value*rn/Tn),c=P(()=>({height:`${mu}px`,width:`${Tn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(pu,l),(d,h)=>(k(),U("div",{id:"slide-container",ref_key:"root",ref:n,class:je(b(u))},[s("div",{id:"slide-content",style:nt(b(c))},[wt(d.$slots,"default")],4),wt(d.$slots,"controls")],2))}});const Bi=Te({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=jt(e,"clicks",t),r=jt(e,"clicksElements",t),o=jt(e,"clicksDisabled",t),i=jt(e,"clicksOrderMap",t);r.value.length=0,ht($p,e.route),ht(Cp,e.context),ht(lo,n),ht(co,o),ht(jn,r),ht(qs,i)},render(){var e,t;return this.$props.is?pt(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),gg=["innerHTML"],yg=Te({__name:"DrawingPreview",props:{page:null},setup(e){return F(I),(t,n)=>b(ko)[e.page]?(k(),U("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(ko)[e.page]},null,8,gg)):me("v-if",!0)}}),vg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},_g=["onClick"],wg=Te({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;F(I);const r=jt(n,"modelValue",t);function o(){r.value=!1}function i(m){rr(m),o()}function a(m){return m===mt.value}const l=Ks.smaller("xs"),c=Ks.smaller("sm"),u=4*16*2,d=2*16,h=P(()=>l.value?xn.width.value-u:c.value?(xn.width.value-u-d)/2:300),p=P(()=>Math.floor((xn.width.value-u)/(h.value+d)));return Vo(()=>{mt.value=He.value,qi.value=p.value}),(m,g)=>{const w=mg;return k(),U(xe,null,[Ci(s("div",vg,[s("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${b(h)}px,1fr))`)},[(k(!0),U(xe,null,Hr(b(We).slice(0,-1),(_,x)=>(k(),U("div",{key:_.path,class:"relative"},[s("div",{class:je(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(x+1)}]),onClick:T=>i(+_.path)},[(k(),j(Uu,{key:_.path,width:b(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:E(()=>[Z(b(Bi),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:je(b(Ii)(_)),route:_,context:"overview"},null,8,["is","class","route"]),Z(yg,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,_g),s("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${b(h)+5}px`)},Pn(x+1),5)]))),128))],4)],512),[[du,b(r)]]),b(r)?(k(),U("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:o},[Z(w)])):me("v-if",!0)],64)}}});const bg="/assets/logo.b72bde5d.png",kg={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Sg=Te({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(I);const r=jt(n,"modelValue",t);function o(){r.value=!1}return(i,a)=>(k(),j(Kc,null,[b(r)?(k(),U("div",kg,[s("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>o())}),s("div",{class:je(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[wt(i.$slots,"default")],2)])):me("v-if",!0)],1024))}}),Tg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Dg=["innerHTML"],xg=s("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[s("div",{class:"flex gap-1 children:my-auto"},[s("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),s("img",{class:"w-5 h-5",src:bg,alt:"Slidev"}),s("div",{style:{color:"#2082A6"}},[s("b",null,"Sli"),f("dev ")])])],-1),Pg=Te({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(I);const r=jt(n,"modelValue",t),o=P(()=>typeof ke.info=="string");return(i,a)=>(k(),j(Sg,{modelValue:b(r),"onUpdate:modelValue":a[0]||(a[0]=l=>Se(r)?r.value=l:null),class:"px-6 py-4"},{default:E(()=>[s("div",Tg,[b(o)?(k(),U("div",{key:0,class:"mb-4",innerHTML:b(ke).info},null,8,Dg)):me("v-if",!0),xg])]),_:1},8,["modelValue"]))}});const Ag=["disabled","onKeydown"],$g=Te({__name:"Goto",setup(e){F(I);const t=H(),n=H(""),r=P(()=>{if(n.value.startsWith("/"))return!!We.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=ed.value}});function o(){r.value&&(n.value.startsWith("/")?rr(n.value.substring(1)):rr(+n.value)),i()}function i(){Vn.value=!1}return fe(Vn,async a=>{var l,c;a?(await Ye(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),fe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,l)=>(k(),U("div",{id:"slidev-goto-dialog",class:je(["fixed right-5 bg-main transform transition-all",b(Vn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ci(s("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!b(Vn),class:je(["outline-none bg-transparent",{"text-red-400":!b(r)&&n.value}]),placeholder:"Goto...",onKeydown:[za(o,["enter"]),za(i,["escape"])],onBlur:i},null,42,Ag),[[cp,n.value]])],2))}}),Cg=Te({__name:"Controls",setup(e){F(I);const t=Rt(),n=Rt();return(r,o)=>(k(),U(xe,null,[Z(wg,{modelValue:b(et),"onUpdate:modelValue":o[0]||(o[0]=i=>Se(et)?et.value=i:null)},null,8,["modelValue"]),Z($g),b(t)?(k(),j(b(t),{key:0})):me("v-if",!0),b(n)?(k(),j(b(n),{key:1,modelValue:b(ds),"onUpdate:modelValue":o[1]||(o[1]=i=>Se(ds)?ds.value=i:null)},null,8,["modelValue"])):me("v-if",!0),b(ke).info?(k(),j(Pg,{key:2,modelValue:b(Tr),"onUpdate:modelValue":o[2]||(o[2]=i=>Se(Tr)?Tr.value=i:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Rg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=s("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Mg=[Eg];function Fg(e,t){return k(),U("svg",Rg,Mg)}const Og={name:"carbon-settings-adjust",render:Fg},zg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lg=s("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),jg=s("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),qg=[Lg,jg];function Ig(e,t){return k(),U("svg",zg,qg)}const Bg={name:"carbon-information",render:Ig},Vg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ng=s("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Wg=[Ng];function Hg(e,t){return k(),U("svg",Vg,Wg)}const Ug={name:"carbon-download",render:Hg},Kg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Gg=s("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Jg=s("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Yg=[Gg,Jg];function Zg(e,t){return k(),U("svg",Kg,Yg)}const Qg={name:"carbon-user-speaker",render:Zg},Xg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ey=s("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ty=s("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),ny=[ey,ty];function ry(e,t){return k(),U("svg",Xg,ny)}const oy={name:"carbon-presentation-file",render:ry},sy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},iy=s("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ay=[iy];function ly(e,t){return k(),U("svg",sy,ay)}const cy={name:"carbon-pen",render:ly},uy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},dy=s("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),hy=s("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),fy=[dy,hy];function py(e,t){return k(),U("svg",uy,fy)}const my={name:"ph-cursor-duotone",render:py},gy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},yy=s("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),vy=[yy];function _y(e,t){return k(),U("svg",gy,vy)}const Ku={name:"ph-cursor-fill",render:_y},wy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},by=s("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),ky=[by];function Sy(e,t){return k(),U("svg",wy,ky)}const Ty={name:"carbon-sun",render:Sy},Dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xy=s("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Py=[xy];function Ay(e,t){return k(),U("svg",Dy,Py)}const $y={name:"carbon-moon",render:Ay},Cy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ry=s("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ey=[Ry];function My(e,t){return k(),U("svg",Cy,Ey)}const Fy={name:"carbon-apps",render:My},Oy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zy=s("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),Ly=[zy];function jy(e,t){return k(),U("svg",Oy,Ly)}const qy={name:"carbon-arrow-right",render:jy},Iy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},By=s("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Vy=[By];function Ny(e,t){return k(),U("svg",Iy,Vy)}const Wy={name:"carbon-arrow-left",render:Ny},Hy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uy=s("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Ky=[Uy];function Gy(e,t){return k(),U("svg",Hy,Ky)}const Jy={name:"carbon-maximize",render:Gy},Yy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Zy=s("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Qy=[Zy];function Xy(e,t){return k(),U("svg",Yy,Qy)}const ev={name:"carbon-minimize",render:Xy},tv={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},nv=s("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),rv=[nv];function ov(e,t){return k(),U("svg",tv,rv)}const sv={name:"carbon-checkmark",render:ov},iv={class:"select-list"},av={class:"title"},lv={class:"items"},cv=["onClick"],uv=Te({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;F(I);const r=jt(n,"modelValue",t,{passive:!0});return(o,i)=>{const a=sv;return k(),U("div",iv,[s("div",av,Pn(e.title),1),s("div",lv,[(k(!0),U(xe,null,Hr(e.items,l=>(k(),U("div",{key:l.value,class:je(["item",{active:b(r)===l.value}]),onClick:()=>{var c;r.value=l.value,(c=l.onClick)==null||c.call(l)}},[Z(a,{class:je(["text-green-500",{"opacity-0":b(r)!==l.value}])},null,8,["class"]),f(" "+Pn(l.display||l.value),1)],10,cv))),128))])])}}});const Gu=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},dv=Gu(uv,[["__scopeId","data-v-7dd0eaca"]]),hv={class:"text-sm"},fv=Te({__name:"Settings",setup(e){F(I);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,r)=>(k(),U("div",hv,[Z(dv,{modelValue:b(uo),"onUpdate:modelValue":r[0]||(r[0]=o=>Se(uo)?uo.value=o:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),pv={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},mv=Te({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;F(I);const r=jt(n,"modelValue",t,{passive:!0}),o=H();return Sm(o,()=>{r.value=!1}),(i,a)=>(k(),U("div",{ref_key:"el",ref:o,class:"flex relative"},[s("button",{class:je({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>r.value=!b(r))},[wt(i.$slots,"button",{class:je({disabled:e.disabled})})],2),(k(),j(Kc,null,[b(r)?(k(),U("div",pv,[wt(i.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),gv={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ro={__name:"VerticalDivider",setup(e){return F(I),(t,n)=>(k(),U("div",gv))}},yv={render(){return[]}},vv={class:"icon-btn"},_v={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},wv={class:"my-auto"},bv={class:"opacity-50"},kv=Te({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;F(I);const n=Ks.smaller("md"),{isFullscreen:r,toggle:o}=Lu,i=P(()=>Qs.value?`?password=${Qs.value}`:""),a=P(()=>`/presenter/${He.value}${i.value}`),l=P(()=>`/${He.value}${i.value}`),c=H(),u=()=>{c.value&&Jn.value&&c.value.contains(Jn.value)&&Jn.value.blur()},d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=Rt(),p=Rt();return ir(()=>import("./DrawingControls.2ad2cb90.js"),["assets/DrawingControls.2ad2cb90.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.feac7ace.js"]).then(m=>p.value=m.default),(m,g)=>{const w=ev,_=Jy,x=Wy,T=qy,D=Fy,A=$y,q=Ty,O=Ku,N=my,ne=cy,ae=oy,ge=Fr("RouterLink"),ve=Qg,Be=Ug,Ve=Bg,qe=Og;return k(),U("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[s("div",{class:je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(Vt)?me("v-if",!0):(k(),U("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Ee)=>b(o)&&b(o)(...Ee))},[b(r)?(k(),j(w,{key:0})):(k(),j(_,{key:1}))])),s("button",{class:je(["icon-btn",{disabled:!b(kT)}]),onClick:g[1]||(g[1]=(...Ee)=>b(sn)&&b(sn)(...Ee))},[Z(x)],2),s("button",{class:je(["icon-btn",{disabled:!b(bT)}]),title:"Next",onClick:g[2]||(g[2]=(...Ee)=>b(on)&&b(on)(...Ee))},[Z(T)],2),b(Vt)?me("v-if",!0):(k(),U("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Ee=>b(ju)())},[Z(D)])),b(Zs)?me("v-if",!0):(k(),U("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Ee=>b(Wu)())},[b(ji)?(k(),j(A,{key:0})):(k(),j(q,{key:1}))])),Z(ro),b(Vt)?me("v-if",!0):(k(),U(xe,{key:3},[!b(Lt)&&!b(n)&&b(h)?(k(),U(xe,{key:0},[Z(b(h)),Z(ro)],64)):me("v-if",!0),b(Lt)?(k(),U("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Ee=>hs.value=!b(hs))},[b(hs)?(k(),j(O,{key:0})):(k(),j(N,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!b(ke).drawings.presenterOnly&&!b(Vt)?(k(),U(xe,{key:4},[s("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Ee=>qt.value=!b(qt))},[Z(ne),b(qt)?(k(),U("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:b(wn).color})},null,4)):me("v-if",!0)]),Z(ro)],64)):me("v-if",!0),b(Vt)?me("v-if",!0):(k(),U(xe,{key:5},[b(Lt)?(k(),j(ge,{key:0,to:b(l),class:"icon-btn",title:"Play Mode"},{default:E(()=>[Z(ae)]),_:1},8,["to"])):me("v-if",!0),b(vT)?(k(),j(ge,{key:1,to:b(a),class:"icon-btn",title:"Presenter Mode"},{default:E(()=>[Z(ve)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(k(),U(xe,{key:6},[b(ke).download?(k(),U("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Ee)=>b(Xs)&&b(Xs)(...Ee))},[Z(Be)])):me("v-if",!0)],64)),!b(Lt)&&b(ke).info&&!b(Vt)?(k(),U("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Ee=>Tr.value=!b(Tr))},[Z(Ve)])):me("v-if",!0),!b(Lt)&&!b(Vt)?(k(),j(mv,{key:8},{button:E(()=>[s("button",vv,[Z(qe)])]),menu:E(()=>[Z(fv)]),_:1})):me("v-if",!0),b(Vt)?me("v-if",!0):(k(),j(ro,{key:9})),s("div",_v,[s("div",wv,[f(Pn(b(He))+" ",1),s("span",bv,"/ "+Pn(b(ed)),1)])]),Z(b(yv))],34)],512)}}}),Ju={render(){return[]}},Yu={render(){return[]}},Sv={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},Tv=Te({__name:"PresenterMouse",setup(e){return F(I),(t,n)=>{const r=Ku;return b(as).cursor?(k(),U("div",Sv,[Z(r,{class:"absolute",style:nt({left:`${b(as).cursor.x}%`,top:`${b(as).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),Dv=Te({__name:"SlidesShow",props:{context:null},setup(e){F(I),fe(dt,()=>{var n,r;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((r=ps.value)==null?void 0:r.meta)&&ps.value.meta.preload!==!1&&(ps.value.meta.__preloaded=!0)},{immediate:!0});const t=Rt();return ir(()=>import("./DrawingLayer.5862a217.js"),[]).then(n=>t.value=n.default),(n,r)=>(k(),U(xe,null,[me(" Global Bottom "),Z(b(Yu)),me(" Slides "),(k(!0),U(xe,null,Hr(b(We),o=>{var i,a;return k(),U(xe,{key:o.path},[((i=o.meta)==null?void 0:i.__preloaded)||o===b(dt)?Ci((k(),j(b(Bi),{key:0,is:o==null?void 0:o.component,clicks:o===b(dt)?b(Ct):0,"clicks-elements":((a=o.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:je(b(Ii)(o)),route:o,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[du,o===b(dt)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),Z(b(Ju)),b(t)?(k(),j(b(t),{key:0})):me("v-if",!0),b(Lt)?me("v-if",!0):(k(),j(Tv,{key:1}))],64))}}),xv=Te({__name:"Play",setup(e){F(I),ug();const t=H();function n(i){var a;xl.value||((a=i.target)==null?void 0:a.id)==="slide-container"&&(i.screenX/window.innerWidth>.6?on():sn())}DT(t);const r=P(()=>w1.value||xl.value);Rt();const o=Rt();return ir(()=>import("./DrawingControls.2ad2cb90.js"),["assets/DrawingControls.2ad2cb90.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.feac7ace.js"]).then(i=>o.value=i.default),(i,a)=>(k(),U(xe,null,[s("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:nt(b(gu))},[Z(Uu,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Yn)?b(xn).width.value:void 0,scale:b(uo),onPointerdown:n},{default:E(()=>[Z(Dv,{context:"slide"})]),controls:E(()=>[s("div",{class:je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(r)?"opacity-100 right-0":"opacity-0 p-2",b(jr)?"pointer-events-none":""]])},[Z(kv,{class:"m-auto",persist:b(r)},null,8,["persist"])],2),!b(ke).drawings.presenterOnly&&!b(Vt)&&b(o)?(k(),j(b(o),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),Z(Cg)],64))}});function Zu(e){const t=P(()=>e.value.path),n=P(()=>We.length-1),r=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),o=P(()=>Jo(r.value)),i=P(()=>We.find(p=>p.path===`${r.value}`)),a=P(()=>{var p,m,g;return(g=(m=(p=i.value)==null?void 0:p.meta)==null?void 0:m.slide)==null?void 0:g.id}),l=P(()=>{var p,m;return(m=(p=i.value)==null?void 0:p.meta)==null?void 0:m.layout}),c=P(()=>We.find(p=>p.path===`${Math.min(We.length,r.value+1)}`)),u=P(()=>We.filter(p=>{var m,g;return(g=(m=p.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((p,m)=>(Vi(p,m),p),[])),d=P(()=>Ni(u.value,i.value)),h=P(()=>Wi(d.value));return{route:e,path:t,total:n,currentPage:r,currentPath:o,currentRoute:i,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:h}}function Qu(e,t,n){const r=H(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),r.value+=1})});const o=P(()=>{var c,u;return r.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),i=P(()=>{var c,u,d;return+((d=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:o.value.length)}),a=P(()=>n.value<We.length-1||e.value<i.value),l=P(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:o,clicksTotal:i,hasNext:a,hasPrev:l}}const Pv=["id"],Ll=Te({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,r=jt(n,"clicksElements",t),o=P(()=>({height:`${mu}px`,width:`${Tn}px`})),i=Rt();ir(()=>import("./DrawingPreview.debfd9de.js"),[]).then(u=>i.value=u.default);const a=P(()=>n.clicks),l=Qu(a,n.nav.currentRoute,n.nav.currentPage),c=P(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(I,Fe({nav:{...n.nav,...l},configs:ke,themeConfigs:P(()=>ke.themeConfig)})),(u,d)=>{var h;return k(),U("div",{id:b(c),class:"slide-container",style:nt(b(o))},[Z(b(Yu)),Z(b(Bi),{is:(h=e.route)==null?void 0:h.component,"clicks-elements":b(r),"onUpdate:clicks-elements":d[0]||(d[0]=p=>Se(r)?r.value=p:null),clicks:b(a),"clicks-disabled":!1,class:je(b(Ii)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(i)?(k(),j(b(i),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),Z(b(Ju))],12,Pv)}}}),Av=Te({__name:"PrintSlide",props:{route:null},setup(e){var i;const t=e;F(I);const n=Fe(((i=t.route.meta)==null?void 0:i.__clicksElements)||[]),r=P(()=>t.route),o=Zu(r);return(a,l)=>(k(),U(xe,null,[Z(Ll,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=c=>Se(n)?n.value=c:null),clicks:0,nav:b(o),route:b(r)},null,8,["clicks-elements","nav","route"]),b(Dr)?me("v-if",!0):(k(!0),U(xe,{key:0},Hr(n.length,c=>(k(),j(Ll,{key:c,clicks:c,nav:b(o),route:b(r)},null,8,["clicks","nav","route"]))),128))],64))}}),$v={id:"print-content"},Cv=Te({__name:"PrintContainer",props:{width:null},setup(e){const t=e;F(I);const n=P(()=>t.width),r=P(()=>t.width/rn),o=P(()=>n.value/r.value),i=P(()=>o.value<rn?n.value/Tn:r.value*rn/Tn),a=We.slice(0,-1),l=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(pu,i),(c,u)=>(k(),U("div",{id:"print-container",class:je(b(l))},[s("div",$v,[(k(!0),U(xe,null,Hr(b(a),d=>(k(),j(Av,{key:d.path,route:d},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const Rv=Te({__name:"Print",setup(e){F(I);const t=_n.canvasWidth,n=Math.round(t/_n.aspectRatio)+1;function r(o,{slots:i}){if(i.default)return pt("style",i.default())}return Vo(()=>{Yn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(o,i)=>(k(),U(xe,null,[Z(r,null,{default:E(()=>[f(" @page { size: "+Pn(b(t))+"px "+Pn(n)+"px; margin: 0px; } ",1)]),_:1}),s("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(b(gu))},[Z(Cv,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(xn).width.value},null,8,["style","width"])],4)],64))}});const Ev={class:"slidev-layout end"},Mv={__name:"end",setup(e){return F(I),(t,n)=>(k(),U("div",Ev," END "))}},Fv=Gu(Mv,[["__scopeId","data-v-ab32435f"]]);function jl(e){return e.startsWith("/")?"/"+e.slice(1):e}function Ov(e,t=!1){const n=e&&["#","rgb","hsl"].some(o=>e.indexOf(o)===0),r={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${jl(e)})`:`url("${jl(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return r.background||delete r.background,r}const zv={class:"my-auto w-full"},Lv=Te({__name:"cover",props:{background:{default:""}},setup(e){const t=e;F(I);const n=P(()=>Ov(t.background,!0));return(r,o)=>(k(),U("div",{class:"slidev-layout cover",style:nt(b(n))},[s("div",zv,[wt(r.$slots,"default")])],4))}}),jv=s("h1",null,"European Cruise 2022 - Carnival Pride",-1),qv=s("h2",null,"Italy, Turkey, and Greece",-1),Iv=s("h2",null,"October 6 - 22, 2022",-1),Bv={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md"};return F(I),(n,r)=>(k(),j(Lv,X(Q(t)),{default:E(()=>[jv,qv,Iv]),_:1},16))}},Vv=["href","innerHTML"],Nv=["href"],Wv=Te({__name:"Link",props:{to:null,title:null},setup(e){return F(I),(t,n)=>{const r=Fr("RouterLink");return!b(Yn)&&e.title?(k(),j(r,{key:0,to:String(e.to),onClick:n[0]||(n[0]=o=>o.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!b(Yn)&&!e.title?(k(),j(r,{key:1,to:String(e.to),onClick:n[1]||(n[1]=o=>o.target.blur())},{default:E(()=>[wt(t.$slots,"default")]),_:3},8,["to"])):b(Yn)&&e.title?(k(),U("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,Vv)):(k(),U("a",{key:3,href:`#${e.to}`},[wt(t.$slots,"default")],8,Nv))}}}),Hv={class:"slidev-layout default"},Oe={__name:"default",setup(e){return F(I),(t,n)=>(k(),U("div",Hv,[wt(t.$slots,"default")]))}},Uv=s("h1",null,"Itinerary at a Glance: Italy -> Cruise Embarkation",-1),Kv=s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])],-1),Gv=s("td",null,[s("strong",null,"0")],-1),Jv=s("td",null,"Thu",-1),Yv=s("td",null,"10/6",-1),Zv=f("Depart JFK on American Airlines Flight 236 to Rome (FCO)"),Qv=s("td",null,[s("strong",null,"1")],-1),Xv=s("td",null,"Fri",-1),e_=s("td",null,"10/7",-1),t_=f("Rome -> Florence by Train"),n_=f(", "),r_=f("Explore the Duomo"),o_=f(", "),s_=f("Rooftop Dinner"),i_=s("td",null,[s("strong",null,"2")],-1),a_=s("td",null,"Sat",-1),l_=s("td",null,"10/8",-1),c_=s("strong",null,"Florence",-1),u_=f(": "),d_=f("Uffizi"),h_=f(", "),f_=f("Pitti Palace"),p_=f(", "),m_=f("Boboli Gardens"),g_=f(", Accademia (Statue of David)"),y_=s("tr",null,[s("td",null,[s("strong",null,"3")]),s("td",null,"Sun"),s("td",null,"10/9"),s("td",null,'Florence -> Rome by Train, "Heart of Rome" Walk, Spanish Steps, Trevi Fountain')],-1),v_=s("tr",null,[s("td",null,[s("strong",null,"4")]),s("td",null,"Mon"),s("td",null,"10/10"),s("td",null,[s("strong",null,"Rome"),f(": Colisseum, Roman Forum, St. Peter\u2019s Square")])],-1),__=s("tr",null,[s("td",null,[s("strong",null,"5")]),s("td",null,"Tue"),s("td",null,"10/11"),s("td",null,"Rome -> Civitavecchia by Train, Embarkation & Cruise Departure")],-1),w_=s("tr",null,[s("td",null,[s("strong",null,"6,7")]),s("td",null,"Wed/Thu"),s("td",null,"10/12,13"),s("td",null,"At Sea - Carnival Pride")],-1),b_={__name:"2",setup(e){const t={srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"};return F(I),(n,r)=>{const o=Wv;return k(),j(Oe,X(Q(t)),{default:E(()=>[Uv,s("table",null,[Kv,s("tbody",null,[s("tr",null,[Gv,Jv,Yv,s("td",null,[Z(o,{to:"5"},{default:E(()=>[Zv]),_:1})])]),s("tr",null,[Qv,Xv,e_,s("td",null,[Z(o,{to:"6"},{default:E(()=>[t_]),_:1}),n_,Z(o,{to:"9"},{default:E(()=>[r_]),_:1}),o_,Z(o,{to:"11"},{default:E(()=>[s_]),_:1})])]),s("tr",null,[i_,a_,l_,s("td",null,[c_,u_,Z(o,{to:"13"},{default:E(()=>[d_]),_:1}),h_,Z(o,{to:"16"},{default:E(()=>[f_]),_:1}),p_,Z(o,{to:"17"},{default:E(()=>[m_]),_:1}),g_])]),y_,v_,__,w_])])]),_:1},16)}}},k_=s("h1",null,"Itinerary at a Glance: Carnival Pride Meditteranean",-1),S_=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("strong",null,"8")]),s("td",null,"Fri"),s("td",null,"10/14"),s("td",null,[s("strong",null,"Mykonos")])]),s("tr",null,[s("td",null,[s("strong",null,"9")]),s("td",null,"Sat"),s("td",null,"10/15"),s("td",null,[f("Kusadasi ("),s("strong",null,"Ephesus"),f("), Turkey")])]),s("tr",null,[s("td",null,[s("strong",null,"10")]),s("td",null,"Sun"),s("td",null,"10/16"),s("td",null,[s("strong",null,"Santorini")])]),s("tr",null,[s("td",null,[s("strong",null,"11")]),s("td",null,"Mon"),s("td",null,"10/17"),s("td",null,[s("strong",null,"Athens")])]),s("tr",null,[s("td",null,[s("strong",null,"12")]),s("td",null,"Tue"),s("td",null,"10/18"),s("td",null,[f("Katakolon ("),s("strong",null,"Olympia"),f(")")])]),s("tr",null,[s("td",null,[s("strong",null,"13")]),s("td",null,"Wed"),s("td",null,"10/19"),s("td",null,[s("strong",null,"Messina")])]),s("tr",null,[s("td",null,[s("strong",null,"14")]),s("td",null,"Thu"),s("td",null,"10/20"),s("td",null,[s("strong",null,"Naples"),f(" (Capri & Pompeii)")])])])],-1),T_={__name:"3",setup(e){const t={srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[k_,S_]),_:1},16))}},D_=s("h1",null,"Itinerary at a Glance: Cruise Debarkation/Flight Home",-1),x_=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Day"),s("th"),s("th",null,"Date"),s("th",null,"Itinerary")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("strong",null,"15")]),s("td",null,"Fri"),s("td",null,"10/21"),s("td",null,[f("Debarkation, Civitavecchia -> "),s("strong",null,"Rome"),f(" by Train, Sleep at Airport Hilton")])]),s("tr",null,[s("td",null,[s("strong",null,"16")]),s("td",null,"Sat"),s("td",null,"10/22"),s("td",null,"Depart FCO (Rome) on American Airlines Flight 235 to JFK")])])],-1),P_={__name:"4",setup(e){const t={srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[D_,x_]),_:1},16))}},A_=s("h4",null,"Day 0 - Thu 10/6 - Travel Day",-1),$_=s("h2",null,[s("strong",null,"Trans-Atlantic Flight to Rome")],-1),C_=s("h3",null,null,-1),R_=s("h3",null,"\u{1F690} East Haven to JFK by Ground Transport",-1),E_=s("h3",null,[f("Pickup Time 12:00PM at D&D\u2019s House "),s("strong",null,"Confirmed")],-1),M_=s("blockquote",null,[s("p",null,[f("We take a private "),s("strong",null,"Connecticut Limo"),f(" Van from East Haven to JFK "),s("br"),f(" The ride lasts between 2 - 2.5 hours depending on traffic "),s("br"),f(" Round-trip transport costs "),s("strong",null,"$920 + $180 tip ($275 per couple total)")])],-1),F_=s("br",null,null,-1),O_=s("h3",null,"\u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane",-1),z_=s("blockquote",null,[s("p",null,[s("strong",null,"American Airlines Flight 236"),f(),s("a",{href:"https://www.aa.com/travelInformation/flights/status",target:"_blank",rel:"noopener"},"(check Flight Status)"),f(),s("br"),f(" Depart from JFK airport "),s("strong",null,"6:52 PM"),f(),s("br"),f(" The flight time is 8 hours 8 mins "),s("br"),f(" Arrive at Leonardo da Vinci "),s("strong",null,"9:00 AM next day"),f(" (Fri 10/7) "),s("br")])],-1),L_={__name:"5",setup(e){const t={srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[A_,$_,C_,R_,E_,M_,F_,O_,z_]),_:1},16))}},j_=s("h4",null,"Day 1 - Fri 10/7 - Travel Day",-1),q_=s("h2",null,[s("strong",null,"Rome to Florence")],-1),I_=s("p",null,[f("\u2708\uFE0F "),s("strong",null,"9:00 AM"),f(": Scheduled to land at Leonardo da Vinci airport")],-1),B_=s("h3",null,"Airport to Rome",-1),V_=s("p",null,[f("\u{1F68B} "),s("strong",null,"10:30 AM (approximate)"),f(": Take a Train to Rome Termini Station")],-1),N_=s("blockquote",null,[s("p",null,[f("The "),s("a",{href:"https://www.trenitalia.com/en/services/fiumicino_airport.html",target:"_blank",rel:"noopener"},"Leonardo Express"),f(" is a non-stop shuttle train running between the airport train station and Termini Station in Rome. "),s("br"),f(" The ride lasts "),s("strong",null,"32 minutes"),f(", and the train departs every 15-30 minutes depending on the time of day. "),s("br"),f(" Tickets are "),s("strong",null,"\u20AC14"),f(" one-way, purchased individually, or "),s("strong",null,"\u20AC40"),f(' total for 4 tickets when purchased at the "mini-group" fare.')])],-1),W_=s("br",null,null,-1),H_=s("h3",null,"Rome to Florence",-1),U_=s("p",null,[f("\u{1F68B} "),s("strong",null,"Noon (approximate)"),f(": Take a Train to Santa Maria Novella Train Station in Florence")],-1),K_=s("blockquote",null,[s("p",null,[f("A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. "),s("br"),f(" The ride lasts "),s("strong",null,"1 hour 36 mins"),f(", and the train departs every 15-30 minutes depending on the time of day. "),s("br"),f(" Tickets are "),s("strong",null,"\u20AC42"),f(" round trip")])],-1),G_={__name:"6",setup(e){const t={srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[j_,q_,I_,B_,V_,N_,W_,H_,U_,K_]),_:1},16))}},J_="/florence-overview.png",Y_=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:J_,height:"400",width:"400"})]),s("td",null,[s("ul",null,[f(" Day 1 "),s("li",null," Walk from SMN Station to AirBnB (near Duomo) "),f(),s("li",null," Explore Duomo, Markets, & Shops "),f(),s("li",null," Rooftop Dinner ")]),f(),s("ul",null,[f(" Day 2 "),s("li",null," Uffizi Gallery, Palazzo Vecchio "),f(),s("li",null," Ponte Vecchio "),f(),s("li",null," Pitti Palace, Boboli Gardens "),f(),s("li",null," Accademia (David) ")])])])])],-1),Z_=s("p",null,[s("span",{style:{"font-size":"50%"}},[f("watch "),s("a",{href:"https://youtu.be/qzTyWRcQRXg",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Florence"),f(" (YouTube, 16:22)")])],-1),Q_=s("p",null,[s("span",{style:{"font-size":"50%"}},[f("watch "),s("a",{href:"https://youtu.be/q51Atktm244",target:"_blank",rel:"noopener"},"13 Tips for a FANTASTIC Trip to Florence"),f(" (YouTube, 23:02)")])],-1),X_={__name:"7",setup(e){const t={srcSequence:"./slides/02-florence/007-florence-overview.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[Y_,Z_,Q_]),_:1},16))}},e2="/florence-skyline.jpg",t2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),n2=s("h2",null,[s("strong",null,"Arrival")],-1),r2=s("h3",null,[f("AirBnB - "),s("a",{href:"https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL",target:"_blank",rel:"noopener"},"Via Santa Elisabetta 5, Florence"),f(),s("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),o2=s("p",null,[f("\u{1F6B6}"),s("strong",null,"2:30 (approximate)"),f(": Walk from Train Station to AirBnB "),s("a",{href:"https://goo.gl/maps/j9D5MjAAuP2QKoHS6",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),s2=s("img",{src:e2,height:"250",width:"500",style:{margin:"auto"}},null,-1),i2=s("br",null,null,-1),a2=s("blockquote",null,[s("p",null,[f("We\u2019ll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. "),s("br")])],-1),l2={__name:"8",setup(e){const t={srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[t2,n2,r2,o2,s2,i2,a2]),_:1},16))}},c2="/duomo-battistero.jpg",u2="/duomo-interior.jpg",d2="/duomo-dome.jpg",h2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),f2=s("h2",null,[s("strong",null,"Exploring The Duomo")],-1),p2=s("br",null,null,-1),m2=s("blockquote",null,[s("p",null,'Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within.')],-1),g2=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:c2,width:"300",height:"150"})]),s("td",null,[s("img",{src:u2,width:"150",height:"300"})]),s("td",null,[s("img",{src:d2,width:"300",height:"150"})])])])],-1),y2={__name:"9",setup(e){const t={srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[h2,f2,p2,m2,g2]),_:1},16))}},v2="/heart-of-florence-restaurants.jpg",_2={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Ae=Te({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return F(I),(n,r)=>(k(),U("div",_2,[s("div",{class:je(["col-left",t.class])},[wt(n.$slots,"default")],2),s("div",{class:je(["col-right",t.class])},[wt(n.$slots,"right")],2)]))}}),w2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),b2=s("h2",null,[s("strong",null,"Food & Shopping")],-1),k2=s("blockquote",null,[s("p",null,[f("If you\u2019re hungry, there are many options near the AirBnB including: "),s("br")]),s("ul",null,[s("li",null,[s("a",{href:"https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html",target:"_blank",rel:"noopener"},[s("strong",null,"Caffeteria della Oblate")]),f(", a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.")]),s("li",null,[s("a",{href:"https://www.mercatocentrale.com/florence/how-it-works/",target:"_blank",rel:"noopener"},[s("strong",null,"Mercato Centrale")]),f(" The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.")])])],-1),S2=s("br",null,null,-1),T2=s("blockquote",null,[s("ul",null,[s("li",null,[s("a",{href:"https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html",target:"_blank",rel:"noopener"},[s("strong",null,"San Lorenzo Market")]),f(" If you\u2019re itching to start shopping, step outside the Mercato Centrale and you\u2019ll find vendor stalls hawking all kinds of leather goods. Be sure to negotiate to get the best price!")])])],-1),D2=s("br",null,null,-1),x2=s("blockquote",null,[s("p",null,"We\u2019ll grab fresh food to bring back to the AirBnB for tomorrow\u2019s breakfast before our busy sightseeing day in Florence!")],-1),P2=s("img",{src:v2,height:"450",width:"450",style:{margin:"auto"}},null,-1),A2={__name:"10",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[P2]),default:E(()=>[w2,b2,k2,S2,T2,D2,x2]),_:1},16))}},$2=s("h4",null,"Day 1 - Fri 10/7 - Florence",-1),C2=s("h2",null,[s("strong",null,"Rooftop Dinner")],-1),R2=s("br",null,null,-1),E2=s("blockquote",null,[s("p",null,'Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we\u2019ll take a leisurely "golden hour" dinner at one of Florence\u2019s rooftop restaurants')],-1),M2=s("br",null,null,-1),F2=s("h3",null,[f("Angel Roofbar - Hotel Calimala "),s("span",{style:{color:"red"}},[s("strong",null,"(unconfirmed)")])],-1),O2=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("a",{href:"https://www.hotelcalimala.com/angel-roofbar-dining",target:"_blank",rel:"noopener"},"website"),f(" / "),s("a",{href:"https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf",target:"_blank",rel:"noopener"},"dinner menu")]),s("td",null,[s("img",{src:"https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg",width:"400",height:"150"})])]),s("tr",null,[s("td",null,[s("br")]),s("td")])])],-1),z2={__name:"11",setup(e){const t={srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[$2,C2,R2,E2,M2,F2,O2]),_:1},16))}},L2="/palazzo-vecchio-firenze.jpg",j2="/courtyard-palazzo-vecchio.jpg",q2="/florence-renaissance-walk.jpg",I2=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),B2=s("h2",null,[s("strong",null,"Renaissance Walk")],-1),V2=s("p",null,[f("\u{1F6B6}"),s("strong",null,"8:30 AM"),f(": Walk to Uffizi Gallery "),s("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),N2=s("blockquote",null,[s("p",null,[f("This is the beginning of our whirlwind Florence sightseeing day."),s("br"),f(" Fabulous examples of Renaissance architecture span the walk."),s("br"),f(" If you miss one, don\u2019t worry, we\u2019ll follow the same route back. "),s("br")])],-1),W2=s("p",null,"\u{1F4F7} Palazzo Vecchio",-1),H2=s("td",null,[s("img",{src:L2,height:"100",width:"200"})],-1),U2=s("td",null,[s("img",{src:j2,height:"95",width:"190"})],-1),K2=s("blockquote",null,[s("p",null,"Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city.")],-1),G2=s("img",{src:q2,height:"600",width:"300",style:{margin:"auto"}},null,-1),J2={__name:"12",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[G2]),default:E(()=>[I2,B2,V2,N2,W2,H2,U2,K2]),_:1},16))}},Y2="/birth-of-venus.jpg",Z2="/uffizi-gallery-floor-plan.png",Q2=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),X2=s("h2",null,[s("strong",null,"Uffizi Gallery")],-1),ew=s("p",null,[f("\u{1F3F0} "),s("strong",null,"9:00 - 9:15 AM"),f(": Timed Entry into Uffizi Gallery"),s("br"),s("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),tw=s("blockquote",null,[s("p",null,[f('See the greatest collection of Italian Renaissance paintings in the world, including Botticelli\u2019s iconic "Birth of Venus".'),s("br"),s("span",{style:{"font-size":"50%"}},[f("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Uffizi Gallery Audio Tour"),f(" (MP3, 1:01:35)")])])],-1),nw=s("br",null,null,-1),rw=s("img",{src:Y2,height:"125",width:"250",style:{margin:"auto"}},null,-1),ow=s("br",null,null,-1),sw=s("blockquote",null,[s("p",null,"Seeing priceless works of art makes you hungry, right?")],-1),iw=s("img",{src:Z2,height:"800",width:"400",style:{margin:"auto"}},null,-1),aw={__name:"13",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[iw]),default:E(()=>[Q2,X2,ew,tw,nw,rw,ow,sw]),_:1},16))}},lw="/florence-allantico-vinaio.jpeg",cw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),uw=s("h2",null,[s("strong",null,"Panini at All\u2019antico Vinaio")],-1),dw=s("h4",null,[f("Lunch Option #1 "),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.allanticovinaio.com/il-menu-firenze_en/",target:"_blank",rel:"noopener"},"Menu")])],-1),hw=s("p",null,[f("\u{1F6B6}"),s("strong",null,"10:45 AM"),f(": Walk from Uffizi to All\u2019Antico Vinaio"),s("br"),s("span",{style:{"font-size":"75%"}},[f("("),s("a",{href:"https://goo.gl/maps/Aup9R2km7X4VQZgS6",target:"_blank",rel:"noopener"},"5 mins"),f(", allow up to "),s("strong",null,"one hour"),f(" to wait in line)")])],-1),fw=s("blockquote",null,[s("p",null,[f("If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. "),s("br"),f(" The wait may last as much as "),s("strong",null,"an hour or more"),f(", but nearly all who visit agree, its time well spent.")])],-1),pw=s("p",null,[f("\u{1F6B6}"),s("strong",null,"Between 11:15-12:00 PM"),f(": Walk to Pitti Palace"),s("br"),s("span",{style:{"font-size":"75%"}},[s("a",{href:"https://goo.gl/maps/UUc7SxPFN43kujLb6",target:"_blank",rel:"noopener"},"(11 mins)")])],-1),mw=s("p",null,"Panini in hand, walk down to the river Arno towards the Ponte Vecchio",-1),gw=s("img",{src:lw,height:"200",width:"400",style:{margin:"auto"}},null,-1),yw={__name:"14",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[gw]),default:E(()=>[cw,uw,dw,hw,fw,pw,mw]),_:1},16))}},vw="/ponte-vecchio.jpg",_w="/florence-oltrarno.jpg",ww=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),bw=s("h2",null,[s("strong",null,"Ponte Vecchio")],-1),kw=s("p",null,[f("\u{1F6B6}"),s("strong",null,"12:00 PM"),f(": Walk to Pitti Palace "),s("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),Sw=s("blockquote",null,[s("p",null,"We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500\u2019s, to be replaced by goldsmiths that remain to this day.")],-1),Tw=s("ul",null,[s("li",null,[f("\u{1F4F7} Ponte Vecchio "),s("img",{src:vw,height:"125",width:"250"})])],-1),Dw=s("br",null,null,-1),xw=s("blockquote",null,[s("p",null,'Next, we\u2019ll cross into the Oltrarno, literally the "other side of the River Arno".')],-1),Pw=s("img",{src:_w,height:"800",width:"400",style:{margin:"auto"}},null,-1),Aw={__name:"15",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Pw]),default:E(()=>[ww,bw,kw,Sw,Tw,Dw,xw]),_:1},16))}},$w="/palatine-gallery-floor-plan.jpg",Cw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Rw=s("h2",null,[s("strong",null,"Pitti Palace")],-1),Ew=s("details",null,[s("summary",null,[s("span",{style:{"font-size":"75%"}}," click here for Lunch Option #2 ")]),s("p",null,[s("span",{style:{"font-size":"75%"}},[f('If we missed out on panini at "All\u2019Antico Vinaio", here\u2019s another option:'),s("br"),s("a",{href:"https://trattorialacasalinga.it/en/our-menu/",target:"_blank",rel:"noopener"},"Trattoria La Casalinga")]),f(),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://goo.gl/maps/cXGgZQteLjhBNHPUA",target:"_blank",rel:"noopener"},"map")])])],-1),Mw=s("p",null,[f("\u{1F3F0} "),s("strong",null,"12:30 PM"),f(": Entry into Pitti Palace"),s("br"),s("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),Fw=s("h3",null,"Palantine Gallery",-1),Ow=s("blockquote",null,[s("p",null,[f("Pitti Palace houses multiple museums and gardens. Here, we\u2019re going to focus on "),s("a",{href:"https://www.uffizi.it/en/pitti-palace/palatine-gallery",target:"_blank",rel:"noopener"},"Palantine Gallery"),f(", which features works by Raphael, Titian, and Rembrandt.")])],-1),zw=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.palazzo-pitti.net/the-palatine-gallery.html",target:"_blank",rel:"noopener"},"Detailed Room Descriptions (with pictures)")])],-1),Lw=s("img",{src:$w,height:"400",width:"800",style:{margin:"auto"}},null,-1),jw={__name:"16",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Lw]),default:E(()=>[Cw,Rw,Ew,Mw,Fw,Ow,zw]),_:1},16))}},qw="/pitti-palace-boboli-gardens-map.png",Iw="/florence-boboli-entrance.jpg",Bw="/florence-boboli-fountains.jpg",Vw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Nw=s("h2",null,[s("strong",null,"Boboli Gardens")],-1),Ww=s("blockquote",null,[s("p",null,"The gardens are vast, with sloping hills leading up to spectular views of Florence.")],-1),Hw=s("p",null,[f("\u{1F6B6}"),s("strong",null,"2:00 PM"),f(": Explore Boboli Gardens "),s("span",{style:{"font-size":"75%"}},"(approx 30 minutes)")],-1),Uw=s("blockquote",null,[s("p",null,"We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.")],-1),Kw=s("p",null,[s("span",{style:{"font-size":"75%"}},[s("a",{href:"https://goo.gl/maps/K6riqmBPWh3Ga8wp8",target:"_blank",rel:"noopener"},"suggested walking tour")])],-1),Gw=s("img",{src:qw,height:"200",width:"400",style:{margin:"auto"}},null,-1),Jw=s("table",null,[s("thead",null,[s("tr",null,[s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Iw,height:"175",width:"350",style:{margin:"auto"}})])]),s("tr",null,[s("td",null,[s("img",{src:Bw,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),Yw={__name:"17",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Jw]),default:E(()=>[Vw,Nw,Ww,Hw,Uw,Kw,Gw]),_:1},16))}},Zw="/florence-statue-of-david.jpg",Qw="/accademia-floor-plan.png",Xw=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),eb=s("h2",null,[s("strong",null,"Accademia")],-1),tb=s("h4",null,[f("(Michelangelo\u2019s "),s("strong",null,"David"),f(")")],-1),nb=s("p",null,[f("\u{1F3F0} "),s("strong",null,"4:30 - 4:45 PM"),f(": Timed Entry into "),s("br"),f(" Galleria dell\u2019Accademia "),s("span",{style:{"font-size":"75%"}},"Allow 1 hour to tour")],-1),rb=s("img",{src:Zw,height:"150",width:"300",style:{margin:"auto"}},null,-1),ob=s("br",null,null,-1),sb=s("blockquote",null,[s("p",null,[f("This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance. The museum also includes some of Michelangelo\u2019s other works, and a couple of Botticellis."),s("br"),s("span",{style:{"font-size":"50%"}},[f("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Accademia & Michaelangelo\u2019s David Audio Tour"),f(" (MP3, 25:11)")])])],-1),ib=s("img",{src:Qw,height:"650",width:"325",style:{margin:"auto"}},null,-1),ab={__name:"18",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[ib]),default:E(()=>[Xw,eb,tb,nb,rb,ob,sb]),_:1},16))}},lb="/florence-b-roof.jpg",cb=s("h4",null,"Day 2 - Sat 10/8 - Florence",-1),ub=s("h2",null,[s("strong",null,"Rooftop Dinner"),f(),s("span",{style:{color:"red"}},[s("strong",null,"(unconfirmed)")])],-1),db=s("br",null,null,-1),hb=s("img",{src:lb,height:"200",width:"400",style:{margin:"auto"}},null,-1),fb=s("br",null,null,-1),pb=s("blockquote",null,[s("p",null,[f("The panoramic "),s("a",{href:"https://www.b-roof.it/en",target:"_blank",rel:"noopener"},[s("strong",null,"B Roof")]),f(" restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.")])],-1),mb={__name:"19",setup(e){const t={srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[cb,ub,db,hb,fb,pb]),_:1},16))}},gb="/florence-to-rome.png",yb=s("h4",null,"Day 3 - Sun 10/9 - Travel Day",-1),vb=s("h2",null,[s("strong",null,"Florence to Rome")],-1),_b=s("blockquote",null,[s("p",null,"It\u2019s time to say goodbye to Florence. Check-out time is 11:00, but we\u2019re going to try to get an early start for the trip back to Rome.")],-1),wb=s("p",null,[f("\u{1F6B6}"),s("strong",null,"9:30 (approximate)"),f(": Walk from AirBnB to Train Station "),s("a",{href:"https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),bb=s("p",null,[f("\u{1F68B} "),s("strong",null,"10:00 - 10:30 AM (approximate)"),f(": Take a Train to Termini Train Station in Rome")],-1),kb=s("img",{src:gb,height:"800",width:"400",style:{margin:"auto"}},null,-1),Sb=s("br",null,null,-1),Tb=s("blockquote",null,[s("p",null,[f("A bullet train runs from "),s("strong",null,"Santa Maria Novella"),f(" Train Station in Florence to "),s("strong",null,"Termini"),f(" Station in Rome. "),s("br"),f(" The ride lasts "),s("strong",null,"1 hour 36 mins"),f(", and the train departs every 15-30 minutes depending on the time of day. "),s("br")])],-1),Db={__name:"20",setup(e){const t={srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[yb,vb,_b,wb,bb,kb,Sb,Tb]),_:1},16))}},xb="/rome-neighborhoods.png",Pb=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:xb,height:"400",width:"400"})]),s("td",null,[s("ul",null,[f(" Day 3 "),s("li",null," Walk from Rome Termini Station to AirBnB "),f(),s("li",null," Altar of the Fatherland "),f(),s("li",null,' "Heart of Rome" Walking Tour ')]),f(),s("ul",null,[f(" Day 4 "),s("li",null," St. Peter\u2019s Square "),f(),s("li",null," Roman Forum "),f(),s("li",null," Colisseum ")])])])])],-1),Ab=s("p",null,[s("span",{style:{"font-size":"50%"}},[f("watch "),s("a",{href:"https://youtu.be/aaKl40z6MSw",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Rome"),f(" (YouTube, 24:05) ")])],-1),$b={__name:"21",setup(e){const t={srcSequence:"./slides/03-rome/021-rome-overview.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[Pb,Ab]),_:1},16))}},Cb="/rome-lazio.jpg",Rb="/rome-airbnb.png",Eb=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),Mb=s("h2",null,[s("strong",null,"Arrival")],-1),Fb=s("h3",null,[s("a",{href:"https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL",target:"_blank",rel:"noopener"},"AirBnB - Via Merulana, 94 int 6, Rome"),f(),s("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),Ob=s("p",null,[f("\u{1F6B6}"),s("strong",null,"12:30 (approximate)"),f(": Walk from Train Station to AirBnB "),s("a",{href:"https://goo.gl/maps/UoVfD7pYrtoNMjom7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),zb=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:Cb,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:Rb,width:"275",height:"275"}),f(),s("span",{style:{"font-size":"50%"}},"(our apartment is on the third floor)")])])])],-1),Lb=s("blockquote",null,[s("p",null,"We\u2019ll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day\u2019s sightseeing.")],-1),jb={__name:"22",setup(e){const t={srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[Eb,Mb,Fb,Ob,zb,Lb]),_:1},16))}},qb="/rome-altar-of-the-fatherland.jpg",Ib="/rome-airbnb-to-piazza-navona.png",Bb=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),Vb=s("h2",null,[s("strong",null,"Altar of the Fatherland")],-1),Nb=s("blockquote",null,[s("p",null,[f("We\u2019ll walk right past the Colosseum on our way to the "),s("strong",null,"Altare della Patria"),f(' ("Altar of the Fatherland").')])],-1),Wb=s("p",null,[f("\u{1F6B6}"),s("strong",null,"2:00"),f(": Walk from AirBnB to the Altar of the Fatherland "),s("a",{href:"https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9",target:"_blank",rel:"noopener"},"(30 minutes)")],-1),Hb=s("blockquote",null,[s("p",null,"This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy\u2019s first king, seated on horseback in bronze.")],-1),Ub=s("blockquote",null,[s("p",null,"Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.")],-1),Kb=s("p",null,[f("\u{1F6B6}"),s("strong",null,"3:00"),f(": Walk from the Altar of the Fatherland to the Piazza Navona"),s("a",{href:"https://goo.gl/maps/rARoH2ixzgtR4ssL9",target:"_blank",rel:"noopener"},"(15 minutes)")],-1),Gb=s("blockquote",null,[s("p",null,"The expansive Piazza Navona marks the starting point of our walk through the heart of Rome")],-1),Jb=s("img",{src:qb,height:"200",width:"400",style:{margin:"auto"}},null,-1),Yb=s("br",null,null,-1),Zb=s("img",{src:Ib,height:"319",width:"425",style:{margin:"auto"}},null,-1),Qb={__name:"23",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Jb,Yb,Zb]),default:E(()=>[Bb,Vb,Nb,Wb,Hb,Ub,Kb,Gb]),_:1},16))}},Xb="/heart-of-rome-walk-map.png",e5=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),t5=s("h2",null,[s("strong",null,'"Heart of Rome" Walk')],-1),n5=s("p",null,[f("\u{1F6B6}"),s("strong",null,"3:30"),f(": Walk from the Piazza Navona to Spanish Steps "),s("a",{href:"https://goo.gl/maps/RzCEs3sUTsuqyFvg6",target:"_blank",rel:"noopener"},"(30 minutes walk, plus stops)")],-1),r5=s("blockquote",null,[s("p",null,"This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:")],-1),o5=s("br",null,null,-1),s5=s("ul",null,[s("li",null,"Piazza Navona"),s("li",null,"The Pantheon"),s("li",null,"Parliament"),s("li",null,"Piazza Colonna/Via del Corso"),s("li",null,"Trevi Fountain"),s("li",null,"Spanish Steps")],-1),i5=s("p",null,[s("span",{style:{"font-size":"50%"}},[f("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Heart of Rome Audio Tour"),f(" (MP3, 1:08:07)")])],-1),a5=s("img",{src:Xb,height:"400",width:"400",style:{margin:"auto"}},null,-1),l5={__name:"24",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[a5]),default:E(()=>[e5,t5,n5,r5,o5,s5,i5]),_:1},16))}},c5="/rome-pantheon-exterior.jpg",u5="/rome-pantheon-floor-plan.png",d5=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),h5=s("h2",null,[s("strong",null,"Pantheon")],-1),f5=s("br",null,null,-1),p5=s("img",{src:c5,height:"200",width:"400",style:{margin:"auto"}},null,-1),m5=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"65%"}},"The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.")])],-1),g5=s("span",{style:{"font-size":"50%"}}," (open until 6:00 PM)",-1),y5=f(),v5=s("br",null,null,-1),_5=s("p",null,[s("span",{style:{"font-size":"50%"}},[f("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Pantheon Audio Tour"),f(" (MP3, 23:20)")])],-1),w5=s("img",{src:u5,height:"800",width:"400",style:{margin:"auto"}},null,-1),b5={__name:"25",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[w5]),default:E(()=>[d5,h5,f5,p5,m5,g5,y5,v5,_5]),_:1},16))}},k5="/rome-piazza-di-montecitorio.jpg",S5="/rome-parliament.jpg",T5="/rome-piazza-colonna.jpeg",D5=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),x5=s("h2",null,[s("strong",null,"Piazza di Montecitorio, Parliament, Piazza Colonna")],-1),P5=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:k5,width:"300",height:"150"})]),s("td",null,[s("img",{src:S5,width:"200",height:"400"})]),s("td",null,[s("img",{src:T5,width:"300",height:"150"})])])])],-1),A5=s("blockquote",null,[s("p",null,"Walking from the Pantheon towards the Trevi Fountain, we\u2019ll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.")],-1),$5=s("blockquote",null,[s("p",null,"One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD. This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.")],-1),C5={__name:"26",setup(e){const t={srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[D5,x5,P5,A5,$5]),_:1},16))}},R5="/rome-trevi-fountain-night.jpg",E5=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),M5=s("h2",null,[s("strong",null,"Trevi Fountain")],-1),F5=s("p",null,[f("\u{1F4F7} "),s("strong",null,"6:00 (approximate)"),f(": Arrive at the Trevi Fountain")],-1),O5=s("blockquote",null,[s("p",null,"Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.")],-1),z5=s("br",null,null,-1),L5=s("blockquote",null,[s("p",null,'We\u2019ll see the Trevi Fountain twice today. Once during the "golden hour", illuminated by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.')],-1),j5=s("br",null,null,-1),q5=s("blockquote",null,[s("p",null,[f("If you want to skip the previous parts of this walk, and do something else for the afternoon, "),s("strong",null,"6:00 PM"),f(" is the time we should all meet up, before we head on to the Spanish Steps.")])],-1),I5=s("img",{src:R5,height:"200",width:"400",style:{margin:"auto"}},null,-1),B5={__name:"27",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[I5]),default:E(()=>[E5,M5,F5,O5,z5,L5,j5,q5]),_:1},16))}},V5="/spanish-steps.jpg",N5=s("h4",null,"Day 3 - Sun 10/9 - Rome",-1),W5=s("h2",null,[s("strong",null,"Spanish Steps")],-1),H5=s("p",null,[s("span",{style:{"font-size":"80%"}},[f("\u{1F6B6}"),s("strong",null,"6:30"),f(": Walk from Trevi Fountain to the Spanish Steps "),s("a",{href:"https://goo.gl/maps/MKdDinjuN6Tthqzu7",target:"_blank",rel:"noopener"},"(8 mins)")])],-1),U5=s("blockquote",null,[s("p",null,[f('138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini\u2019s father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.'),s("br"),f(" Partway up, the steps fan out around a central terrace, forming a butterfly shape. An obelisk, framed by two Baroque church towers, stands at the top.")])],-1),K5=s("p",null,"This is where our touring for the day ends. We\u2019ll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.",-1),G5=s("blockquote",null,[s("p",null,[f("Enjoy the steps, but whatever you do, don\u2019t sit down on them, or it\u2019ll cost you a "),s("strong",null,"\u20AC250 fine"),f(" (seriously).")])],-1),J5=s("img",{src:V5,height:"250",width:"500",style:{margin:"auto"}},null,-1),Y5={__name:"28",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[J5]),default:E(()=>[N5,W5,H5,U5,K5,G5]),_:1},16))}},Z5="/rome-metro-to-vatican.png",Q5=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),X5=s("h2",null,[s("strong",null,"Metro Ride to St. Peter\u2019s Square")],-1),e3=s("span",{style:{"font-size":"70%"}},[s("p",null,[f("\u{1F68B} - Take the "),s("strong",null,"Metro (Line A - Battistini)"),f(" from "),s("strong",null,"Vittorio Emanuele"),f(" to "),s("strong",null,"Ottavio"),f(),s("br"),f(),s("a",{href:"https://goo.gl/maps/YTmeLq1JWEF5V11w9",target:"_blank",rel:"noopener"},"30 mins total")])],-1),t3=s("span",{style:{"font-size":"65%"}},[s("h5",null,"Detailed Directions"),s("ul",null,[s("li",null,[f("Walk from "),s("strong",null,"Via Merulana"),f(" toward "),s("strong",null,"Via Machiavelli"),f(" to "),s("strong",null,"Vittorio Emanuele Station"),f(),s("br"),f(" (6 mins)")]),s("li",null,[f("Ride "),s("strong",null,"Line A"),f(" 7 stops to "),s("strong",null,"Ottaviano"),f(" (10 mins)")]),s("li",null,[f("Walk south on "),s("strong",null,"Via Ottaviano"),f(" toward "),s("strong",null,"Via degli Scipioni"),f(", continue onto "),s("strong",null,"Via di Porta Angelica"),f(", which becoms "),s("strong",null,"Largo Del Colonnato"),f(" (11 mins)")])])],-1),n3=s("img",{src:Z5,height:"250",width:"500",style:{margin:"auto"}},null,-1),r3=s("br",null,null,-1),o3=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"70%"}},[f("All public transportation uses the same ticket."),s("br"),f(" It costs "),s("strong",null,"\u20AC1.50"),f(" and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.")])])],-1),s3={__name:"29",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[n3,r3,o3]),default:E(()=>[Q5,X5,e3,t3]),_:1},16))}},i3="/st-peters-square.jpg",a3="/rome-st-peters-basilica-exterior.jpg",l3="/rome-st-peters-basilica-interior.jpeg",c3="/rome-pieta.jpg",u3=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),d3=s("h2",null,[s("strong",null,"St Peter\u2019s Square and Basilica")],-1),h3=s("br",null,null,-1),f3=s("h4",null,"St. Peter\u2019s Square",-1),p3=s("blockquote",null,[s("p",null,[f("284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall. Bernini designed this square, which is really an ellipse that\u2019s roughly the same dimensions as the Colosseum. "),s("br"),f(" A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times.")])],-1),m3=s("br",null,null,-1),g3=s("h4",null,"St. Peter\u2019s Basilica",-1),y3=s("blockquote",null,[s("p",null,[f("Once you\u2019ve seen the square, its time to set foot inside the richest and grandest church on Earth. Michelangelo\u2019s "),s("strong",null,"Pieta"),f(" sits behind bulletproof glass just to the right of the entrance.")])],-1),v3=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("strong",null,"Dress Code"),f(": No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).")])],-1),_3=s("img",{src:i3,height:"175",width:"350",style:{margin:"auto"}},null,-1),w3=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:a3,height:"175",width:"350",style:{margin:"auto"}})]),s("td",null,[s("img",{src:l3,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),b3=s("img",{src:c3,height:"75",width:"150",style:{margin:"auto"}},null,-1),k3={__name:"30",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[_3,w3,b3]),default:E(()=>[u3,d3,h3,f3,p3,m3,g3,y3,v3]),_:1},16))}},S3="/rome-st-peters-walk-to-forum.png",T3=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),D3=s("h2",null,[s("strong",null,"Walk to the Forum")],-1),x3=s("p",null,[f("\u{1F6B6}"),s("strong",null,"12:00 PM (approx.)"),f(": Walk from St. Peter\u2019s Square to the Roman Forum "),s("a",{href:"https://goo.gl/maps/rNAWJa3WxTxV2KLh9",target:"_blank",rel:"noopener"},"(36 minutes)")],-1),P3=s("blockquote",null,[s("p",null,[f("This 1.8 mile walk crosses the River Tiber at the "),s("strong",null,"Ponte Vittorio Emanuele II"),f(" continuing to the "),s("strong",null,"Corso Vittorio Emaulele II"),f(", a main east-west artery.")])],-1),A3=s("br",null,null,-1),$3=s("img",{src:S3,height:"325",width:"650",style:{margin:"auto"}},null,-1),C3={__name:"31",setup(e){const t={srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[T3,D3,x3,P3,A3,$3]),_:1},16))}},R3="/rome-forum.jpg",E3="/rome-forum-map.png",M3=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),F3=s("h2",null,[s("strong",null,"The Forum")],-1),O3=s("img",{src:R3,height:"150",width:"300",style:{margin:"auto"}},null,-1),z3=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"75%"}}," We\u2019ll begin our tour at the entrance near the Via Dei Fori Imperiali. Imagine traveling back in time to ancient Rome, your mind\u2019s eye filling in the missing parts of these massive structures, with their colorful marble veneers intact. Listen to the historical perspective provided by the audio and walking tours linked below for all the rich history crammed into this, the heart and cradle of Roman civilization.")])],-1),L3=s("p",null,[s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://podcasts.ricksteves.com/walkingtours/RomanForum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Roman Forum Audio Tour"),f(" (MP3, 1:08:07)")]),s("br"),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://youtu.be/k4P5W1DKTBI",target:"_blank",rel:"noopener"},"Walking Tour of the Forum"),f(" (51:00, ProWalk Tours, YouTube)")]),s("br"),s("span",{style:{"font-size":"50%"}},[s("a",{href:"https://www.google.com/maps/d/viewer?mid=1aWn5IgwI9hf1TuPa99xjYkA7q7NegYsK&ll=41.8917763120126%2C12.487398700000005&z=17",target:"_blank",rel:"noopener"},"Map of the Walking Tour"),f(" (Google Maps)")])],-1),j3=s("img",{src:E3,height:"550",width:"275",style:{margin:"auto"}},null,-1),q3={__name:"32",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[j3]),default:E(()=>[M3,F3,O3,z3,L3]),_:1},16))}},I3="/rome-palatine-valley.jpg",B3="/rome-palatine-circus-maximus.jpg",V3=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),N3=s("h2",null,[s("strong",null,"Palatine Hill")],-1),W3=s("blockquote",null,[s("p",null,"Humans first settled on the Palatine Hill in the 10th century BC: 200 years before Romulus founded Rome. Throughout the Roman Republic and Roman Empire, it was continuously inhabited: first by Rome\u2019s most eminent residents, incluing Romulus himself, later by the city\u2019s succession of Caesars.")],-1),H3=s("br",null,null,-1),U3=s("blockquote",null,[s("p",null,'Today, only the barest skeleton remains to tell the story of this, the "Beverly Hills" of the ancient world. in addition to providing an excellent vantage point for viewing the entire Forum.')],-1),K3=s("img",{src:I3,height:"600",width:"300",style:{margin:"auto"}},null,-1),G3=s("br",null,null,-1),J3=s("img",{src:B3,height:"600",width:"300",style:{margin:"auto"}},null,-1),Y3={__name:"33",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[K3,G3,J3]),default:E(()=>[V3,N3,W3,H3,U3]),_:1},16))}},Z3="/rome-colosseum.jpg",Q3="/rome-colosseum-map.png",X3=s("h4",null,"Day 4 - Mon 10/10 - Rome",-1),e4=s("h2",null,[s("strong",null,"Colosseum")],-1),t4=s("p",null,[f("\u{1F3F0} "),s("strong",null,"3:15 PM"),f(": Timed Entry into Uffizi Gallery"),s("br")],-1),n4=s("img",{src:Z3,height:"175",width:"350",style:{margin:"auto"}},null,-1),r4=s("br",null,null,-1),o4=s("blockquote",null,[s("p",null,[s("span",{style:{"font-size":"75%"}},"Here it is, a 2,000 year old masterpiece of Roman engineering, where 50,000 Romans watched all manner of violent entertainment, paid for by the Emperor.")])],-1),s4=s("p",null,[s("span",{style:{"font-size":"50%"}},[f("listen to "),s("a",{href:"https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Colosseum Audio Tour"),f(" (MP3, 41:05)")])],-1),i4=s("img",{src:Q3,height:"600",width:"300",style:{margin:"auto"}},null,-1),a4={__name:"34",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[i4]),default:E(()=>[X3,e4,t4,n4,r4,o4,s4]),_:1},16))}},l4=s("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),c4=s("h2",null,[s("strong",null,"Rome to Civitavecchia")],-1),u4=s("p",null,[f("\u{1F6B6}"),s("strong",null,"Between 9:00 & 9:30"),f(" Walk from AirBnB to Rome Termini Station"),s("br"),s("a",{href:"https://goo.gl/maps/J3KiqJxWc3nP7PwG7",target:"_blank",rel:"noopener"},[s("span",{style:{"font-size":"75%"}},"(30 mins total)")])],-1),d4=s("p",null,[f("\u{1F68B} "),s("strong",null,"Between 10:00 & 11:00 AM"),f(": Take a Train to Civitavecchia (approx. 1 - 1.5 hrs)")],-1),h4=s("p",null,[s("a",{href:"trenitalia.com/en.html",target:"_blank",rel:"noopener"},"Train Schedule")],-1),f4=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Train #"),s("th",null,"Depart"),s("th",null,"Duration"),s("th",null,"Arrive")])]),s("tbody",null,[s("tr",null,[s("td",null,"4128"),s("td",null,"10:12 AM"),s("td",null,"1h 1m"),s("td",null,"11:13 AM")]),s("tr",null,[s("td",null,"12514"),s("td",null,"10:42 AM"),s("td",null,"1h 17m"),s("td",null,"11:59 AM")]),s("tr",null,[s("td",null,"12516"),s("td",null,"11:12 AM"),s("td",null,"1h 4m"),s("td",null,"12:16 PM")]),s("tr",null,[s("td",null,"12520"),s("td",null,"11:42 AM"),s("td",null,"1h 23m"),s("td",null,"1:05 PM")])])],-1),p4={__name:"35",setup(e){const t={srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[l4,c4,u4,d4,h4,f4]),_:1},16))}},m4=s("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),g4=s("h2",null,[s("strong",null,"Civitavecchia Train Station to Transit Center")],-1),y4=s("p",null,"Upon arrival to the Train Station in Civitavecchia, there are two options for transferring from the station to the Transit Center at Largo Della Pace:",-1),v4=s("h4",null,[s("strong",null,"Shuttle Bus \u20AC2")],-1),_4=s("p",null,"City-run shuttle buses run every 10 minutes between the train station and the transit center",-1),w4=s("h4",null,[s("strong",null,"Taxi \u20AC15-20")],-1),b4=s("p",null,"You can hire a cab from the station to Largo Della Pace, directly across from the transit center, at a premium.",-1),k4={__name:"36",setup(e){const t={srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[m4,g4,y4,v4,_4,w4,b4]),_:1},16))}},S4=s("h4",null,"Day 5 - Tue 10/11 - Cruise Day 1",-1),T4=s("h2",null,[s("strong",null,"Transit Center to Port, Embarkation and Cruise Departure")],-1),D4=s("p",null,"The port area itself is secured, and you are not allowed to walk into the Cruise Terminal directly.",-1),x4=s("h3",null,[s("strong",null,"Transit Center")],-1),P4=s("p",null,"Free and frequent shuttle buses connect the Transit Center with the Cruise Terminal",-1),A4=s("h3",null,[s("strong",null,"Boarding Times")],-1),$4=s("p",null,[f("According to the Boarding Passes provided by Carnival: "),s("br"),f(' "All guests must arrive within their Arrival Appointment. Guests who arrive earlier will be turned away and asked to return at their designated time"')],-1),C4=s("p",null,[f("12:30 - 1:00: D&D, J&J "),s("br"),f(" 1:30 - 2:00: T&K "),s("br"),f(" 2:00 - 2:30: W&R "),s("br"),f(" 6:00: "),s("span",{style:{color:"red"}},"FINAL BOARDING")],-1),R4=s("p",null,[f("\u{1F6A2} "),s("strong",null,"7:00"),f(": Depart port")],-1),E4={__name:"37",setup(e){const t={srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[S4,T4,D4,x4,P4,A4,$4,C4,R4]),_:1},16))}},M4=s("h4",null,"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",-1),F4=s("h2",null,[s("strong",null,"Days at Sea")],-1),O4={__name:"38",setup(e){const t={srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[M4,F4]),_:1},16))}},z4=s("h4",null,"Day 8 - Fri 10/14 - Cruise Day 4",-1),L4=s("h2",null,[s("strong",null,"Mykonos")],-1),j4=s("p",null,[f("\u{1F6A2} "),s("strong",null,"9:00"),f(": Arrive at port")],-1),q4=s("h3",null,"Shore Excursions",-1),I4=s("p",null,[f("\u{1F3F0} "),s("strong",null,"9:30")],-1),B4=s("ul",null,[s("li",null,[f("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930",target:"_blank",rel:"noopener"},"Sailing Trip Around Mykonos\u2019 Famous Beaches"),f(" (5 hours)")])],-1),V4=s("p",null,[f("\u{1F6A2} "),s("strong",null,"6:00"),f(": Depart port")],-1),N4=s("p",null,[s("a",{href:"https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18",target:"_blank",rel:"noopener"},"Prowalk Tours Day Walk Map (Google)")],-1),W4={__name:"39",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{default:E(()=>[z4,L4,j4,q4,I4,B4,V4,N4]),_:1},16))}},H4="/ephesus.jpg",U4=s("h4",null,"Day 9 - Sat 10/15 - Cruise Day 5",-1),K4=s("h2",null,[s("strong",null,"Ephesus"),f(),s("span",{style:{"font-size":"75%"}},"(Anchor at Kusadasi, Turkey)")],-1),G4=s("p",null,[f("\u{1F6A2} "),s("strong",null,"7:00"),f(": Arrive at port")],-1),J4=s("h3",null,"Shore Excursions",-1),Y4=s("p",null,[f("\u{1F3F0} "),s("strong",null,"8:00")],-1),Z4=s("ul",null,[s("li",null,[f("W&R, D&D - "),s("a",{href:"https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800",target:"_blank",rel:"noopener"},"Terrace House & Ancient Ephesus"),f(" (4.25 hours)")])],-1),Q4=s("p",null,[f("\u{1F6A2} "),s("strong",null,"5:00"),f(": Depart port")],-1),X4=s("img",{src:H4,height:"210",width:"420",style:{margin:"auto"}},null,-1),ek={__name:"40",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[X4]),default:E(()=>[U4,K4,G4,J4,Y4,Z4,Q4]),_:1},16))}},tk="/santorini-oia-and-thira.jpg",nk="/santorini-catamaran.jpg",rk="/santorini-caldera.jpg",ok=s("h4",null,"Day 10 - Sun 10/16 - Cruise Day 6",-1),sk=s("h2",null,[s("strong",null,"Santorini")],-1),ik=s("p",null,[f("\u{1F6A2} "),s("strong",null,"8:00"),f(": Arrive at port")],-1),ak=s("h3",null,"Shore Excursions",-1),lk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"8:15")],-1),ck=s("ul",null,[s("li",null,[f("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815",target:"_blank",rel:"noopener"},"Catamaran, Sail and Swim and BBQ"),f(" (6 hours)")]),s("li",null,[f("D&D - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815",target:"_blank",rel:"noopener"},"Oia & Thira"),f(" (4.5 hours)")])],-1),uk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"8:30")],-1),dk=s("ul",null,[s("li",null,[f("T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830",target:"_blank",rel:"noopener"},"Volcano, the Caldera, and Hot Springs"),f(" (2.75 hours)")])],-1),hk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"5:00"),f(": Depart port")],-1),fk=s("img",{src:tk,height:"210",width:"420",style:{margin:"auto"}},null,-1),pk=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:nk,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:rk,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),mk={__name:"41",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[fk,pk]),default:E(()=>[ok,sk,ik,ak,lk,ck,uk,dk,hk]),_:1},16))}},gk="/athens-parthenon.jpg",yk="/athens-mycenae.jpg",vk=s("h4",null,"Day 11 - Mon 10/17 - Cruise Day 7",-1),_k=s("h2",null,[s("strong",null,"Athens")],-1),wk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"6:00"),f(": Arrive at port")],-1),bk=s("h3",null,"Shore Excursions",-1),kk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"7:15")],-1),Sk=s("ul",null,[s("li",null,[f("D&D, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715",target:"_blank",rel:"noopener"},"Top 10 Best of Athens"),f(" (8 hours)")])],-1),Tk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"7:00")],-1),Dk=s("ul",null,[s("li",null,[f("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700",target:"_blank",rel:"noopener"},"Mycenae & Ancient Corinth"),f(" (8 hours)")])],-1),xk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"5:00"),f(": Depart port")],-1),Pk=s("img",{src:gk,height:"150",width:"300",style:{margin:"auto"}},null,-1),Ak=s("br",null,null,-1),$k=s("img",{src:yk,height:"200",width:"400",style:{margin:"auto"}},null,-1),Ck={__name:"42",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Pk,Ak,$k]),default:E(()=>[vk,_k,wk,bk,kk,Sk,Tk,Dk,xk]),_:1},16))}},Rk="/olympia.jpg",Ek=s("h4",null,"Day 12 - Tue 10/18 - Cruise Day 8",-1),Mk=s("h2",null,[s("strong",null,"Olympia"),f(),s("span",{style:{"font-size":"75%"}},"(Anchor at Katakolon)")],-1),Fk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"8:00"),f(": Arrive at port")],-1),Ok=s("h3",null,"Shore Excursions",-1),zk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"8:00")],-1),Lk=s("ul",null,[s("li",null,[f("W&R, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800",target:"_blank",rel:"noopener"},"Olympia & Magna Grecia"),f(" (5 hours)")])],-1),jk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"5:00"),f(": Depart port")],-1),qk=s("p",null,[f("\u{1F374} "),s("strong",null,"6:30"),f(": D&D - "),s("a",{href:"https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE",target:"_blank",rel:"noopener"},"Steakhouse"),f(" Dinner Reservation for 2")],-1),Ik=s("img",{src:Rk,height:"200",width:"400",style:{margin:"auto"}},null,-1),Bk={__name:"43",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Ik]),default:E(()=>[Ek,Mk,Fk,Ok,zk,Lk,jk,qk]),_:1},16))}},Vk="/taormina-and-mount-etna.jpg",Nk="/taormina-on-your-own.jpg",Wk=s("h4",null,"Day 13 - Wed 10/19 - Cruise Day 9",-1),Hk=s("h2",null,[s("strong",null,"Sicily"),f(),s("span",{style:{"font-size":"75%"}},"(Anchor at Messina)")],-1),Uk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"9:00"),f(": Arrive at port")],-1),Kk=s("h3",null,"Shore Excursions",-1),Gk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"9:15")],-1),Jk=s("ul",null,[s("li",null,[f("W&R - "),s("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915",target:"_blank",rel:"noopener"},"Taormina & Mount Etna"),f(" (8 hours)")])],-1),Yk=s("p",null,[f("\u{1F3F0} "),s("strong",null,"10:15")],-1),Zk=s("ul",null,[s("li",null,[f("D&D, T&K, J&J - "),s("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015",target:"_blank",rel:"noopener"},"Taormina on your own"),f(" (6.5 hours)")])],-1),Qk=s("p",null,[f("\u{1F6A2} "),s("strong",null,"6:00"),f(": Depart port")],-1),Xk=s("img",{src:Vk,height:"200",width:"400",style:{margin:"auto"}},null,-1),eS=s("br",null,null,-1),tS=s("img",{src:Nk,height:"150",width:"300",style:{margin:"auto"}},null,-1),nS={__name:"44",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[Xk,eS,tS]),default:E(()=>[Wk,Hk,Uk,Kk,Gk,Jk,Yk,Zk,Qk]),_:1},16))}},rS="/amalfi-coast-map.png",oS=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),sS=s("h2",null,[s("strong",null,"Naples (Amalfi Coast)")],-1),iS=s("p",null,[f("\u{1F6A2} "),s("strong",null,"7:00"),f(": Arrive at port")],-1),aS=s("h3",null,"Shore Excursions",-1),lS=s("p",null,[f("\u{1F3F0} "),s("strong",null,"9:00")],-1),cS=s("ul",null,[s("li",null,[f("All - "),s("a",{href:"https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900",target:"_blank",rel:"noopener"},"Best of the Amalfi Coast"),f(" (9.5 hours)")])],-1),uS=s("br",null,null,-1),dS=s("ul",null,[s("li",null,[f("Stops with free time in: "),s("ul",null,[s("li",null,"Amalfi Town"),s("li",null,"Positano"),s("li",null,"Sorrento")])])],-1),hS=s("p",null,[f("\u{1F6A2} "),s("strong",null,"7:00"),f(": Depart port")],-1),fS=s("img",{src:rS,height:"250",width:"500",style:{margin:"auto"}},null,-1),pS={__name:"45",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[fS]),default:E(()=>[oS,sS,iS,aS,lS,cS,uS,dS,hS]),_:1},16))}},mS="/amalfi-cathedral-exterior.jpg",gS="/amalfi-cathedral-interior.jpg",yS="/amalfi-town-map.png",vS=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),_S=s("h2",null,[f("Amalfi Coast Tour: "),s("strong",null,"Amalfi Town")],-1),wS=s("br",null,null,-1),bS=s("blockquote",null,[s("p",null,[f("Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we\u2019ll spend an hour of free time. A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the "),s("strong",null,"Amalfi Cathedral"),f(".")])],-1),kS=s("table",null,[s("thead",null,[s("tr",null,[s("th"),s("th")])]),s("tbody",null,[s("tr",null,[s("td",null,[s("img",{src:mS,height:"200",width:"400",style:{margin:"auto"}})]),s("td",null,[s("img",{src:gS,height:"200",width:"400",style:{margin:"auto"}})])])])],-1),SS=s("blockquote",null,[s("p",null,[f("A little further past the Cathedral, you\u2019ll find "),s("a",{href:"https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi",target:"_blank",rel:"noopener"},[s("strong",null,"Cuoppo d\u2019Amalfi")]),f(", a fried fish shop that fills cardboard cones with all manner of deep-sea life")])],-1),TS=s("img",{src:yS,height:"650",width:"325",style:{margin:"auto"}},null,-1),DS={__name:"46",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[TS]),default:E(()=>[vS,_S,wS,bS,kS,SS]),_:1},16))}},xS="/amalfi-coast.jpg",PS="/positano-map.jpg",AS=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),$S=s("h2",null,[f("Amalfi Coast Tour: "),s("strong",null,"Positano")],-1),CS=s("br",null,null,-1),RS=s("img",{src:xS,height:"150",width:"300",style:{margin:"auto"}},null,-1),ES=s("br",null,null,-1),MS=s("blockquote",null,[s("p",null,[f("Next, we\u2019ll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea. There, we\u2019ll spend another hour of free time. The "),s("strong",null,"Church of Santa Maria Assunta"),f(" was given a baroque makeover in the 18th century.")])],-1),FS=s("blockquote",null,[s("p",null,[f("Thirsty? Walk up to "),s("strong",null,"Enoteca Cuomo"),f(" and sample local red wines with homemade salami and sundried tomatoes.")])],-1),OS=s("img",{src:PS,height:"400",width:"400",style:{margin:"auto"}},null,-1),zS={__name:"47",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[OS]),default:E(()=>[AS,$S,CS,RS,ES,MS,FS]),_:1},16))}},LS="/sorrento-map.jpg",jS=s("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),qS=s("h2",null,[f("Amalfi Coast Tour: "),s("strong",null,"Sorrento")],-1),IS=s("blockquote",null,[s("p",null,[f("Next, we\u2019ll board a shuttle bus to rejoin our coach. The coach brings us to "),s("strong",null,"Sorrento"),f(", our final stop. We\u2019ll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.")])],-1),BS=s("br",null,null,-1),VS=s("blockquote",null,[s("p",null,[f("The "),s("strong",null,"Piazza Tasso"),f(" is Sorrento\u2019s living room. Just behind the "),s("strong",null,"Statue of Torquato Tasso"),f(" you\u2019ll find "),s("strong",null,"Fattoria Terranova"),f(", a family-run boutique offering free biscuits and tastes of liquers.")])],-1),NS=s("br",null,null,-1),WS=s("blockquote",null,[s("p",null,[f("A short walk brings you to the "),s("strong",null,"Cathedral"),f(", with its impressive inlaid-wood interior doors.")])],-1),HS=s("br",null,null,-1),US=s("blockquote",null,[s("p",null,[f("Continue on to the "),s("strong",null,"Via San Cesareo"),f(", where you can sample Limoncello and other lemon products, famous to the Amalfi region.")])],-1),KS=s("img",{src:LS,height:"600",width:"300",style:{margin:"auto"}},null,-1),GS={__name:"48",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md"};return F(I),(n,r)=>(k(),j(Ae,X(Q(t)),{right:E(o=>[KS]),default:E(()=>[jS,qS,IS,BS,VS,NS,WS,HS,US]),_:1},16))}},JS=s("h4",null,"Day 15 - Fri 10/21 - Cruise Day 11",-1),YS=s("h2",null,[s("strong",null,"Civitavecchia (Debarkation)")],-1),ZS={__name:"49",setup(e){const t={srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[JS,YS]),_:1},16))}},QS=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),XS=s("h2",null,[s("strong",null,"Port to Civitavecchia Train Station")],-1),eT={__name:"50",setup(e){const t={srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[QS,XS]),_:1},16))}},tT=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),nT=s("h2",null,[s("strong",null,"Civitavecchia to Rome")],-1),rT={__name:"51",setup(e){const t={srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[tT,nT]),_:1},16))}},oT=s("h4",null,"Day 15 - Fri 10/21 - Rome",-1),sT=s("h2",null,[s("strong",null,"Last Day in Rome")],-1),iT=s("blockquote",null,[s("p",null,[f("If time allows, see "),s("a",{href:"https://www.tiktok.com/@travelbymitra/video/7051676676685565190",target:"_blank",rel:"noopener"},"Vicus Caprarius"),f(", the underground system of ancient pools that feed the Trevi Fountain. "),s("a",{href:"https://www.vicuscaprarius.com/en/#tariffe",target:"_blank",rel:"noopener"},"\u20AC4, no reservation required on Fridays")])],-1),aT={__name:"52",setup(e){const t={srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[oT,sT,iT]),_:1},16))}},lT=s("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),cT=s("h2",null,[s("strong",null,"Rome to Airport")],-1),uT={__name:"53",setup(e){const t={srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[lT,cT]),_:1},16))}},dT=s("h4",null,"Day 16 - Sat 10/22 - Travel Day",-1),hT=s("h2",null,[s("strong",null,"Trans-Atlantic Flight to New York")],-1),fT={__name:"54",setup(e){const t={srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md"};return F(I),(n,r)=>(k(),j(Oe,X(Q(t)),{default:E(()=>[dT,hT]),_:1},16))}},pT=[{path:"1",name:"page-1",component:Bv,meta:{title:"European Cruise 2022",theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},index:0,start:0,end:28},filepath:"/Users/dave/dev/europe-cruise-2022/slides/00-intro/001-cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:b_,meta:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md",slide:{raw:null,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence by Train</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, Accademia (Statue of David) |
| **3** | Sun | 10/9 | Florence -> Rome by Train, "Heart of Rome" Walk, Spanish Steps, Trevi Fountain |
| **4** | Mon | 10/10 | **Rome**: Colisseum, Roman Forum, St. Peter's Square |
| **5** | Tue | 10/11 | Rome -> Civitavecchia by Train, Embarkation & Cruise Departure |
| **6,7** | Wed/Thu | 10/12,13 | At Sea - Carnival Pride |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"},index:1,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",raw:`# Itinerary at a Glance: Italy -> Cruise Embarkation
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
`,content:"",frontmatter:{},index:1,start:28,end:32},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:T_,meta:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md",slide:{raw:null,title:"Itinerary at a Glance: Carnival Pride Meditteranean",level:1,content:`# Itinerary at a Glance: Carnival Pride Meditteranean
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **8** | Fri | 10/14 | **Mykonos** |
| **9** | Sat | 10/15 | Kusadasi (**Ephesus**), Turkey |
| **10** | Sun | 10/16 | **Santorini** |
| **11** | Mon | 10/17 | **Athens** |
| **12** | Tue | 10/18 | Katakolon (**Olympia**) |
| **13** | Wed | 10/19 | **Messina** |
| **14** | Thu | 10/20 | **Naples** (Capri & Pompeii) |`,frontmatter:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"},index:2,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",raw:`# Itinerary at a Glance: Carnival Pride Meditteranean
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
`,content:"",frontmatter:{},index:2,start:32,end:36},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:P_,meta:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md",slide:{raw:null,title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",level:1,content:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **15** | Fri | 10/21 | Debarkation, Civitavecchia -> **Rome** by Train, Sleep at Airport Hilton |
| **16** | Sat | 10/22 | Depart FCO (Rome) on American Airlines Flight 235 to JFK |`,frontmatter:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"},index:3,start:0,end:5,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",raw:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
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
`,content:"",frontmatter:{},index:3,start:36,end:40},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:L_,meta:{title:"Day 0 - Thu 10/6 - Travel Day",srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",slide:{raw:null,title:"Day 0 - Thu 10/6 - Travel Day",level:4,content:`#### Day 0 - Thu 10/6 - Travel Day
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
`,content:"",frontmatter:{},index:4,start:40,end:44},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:G_,meta:{title:"Day 1 - Fri 10/7 - Travel Day",srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Travel Day",level:4,content:`#### Day 1 - Fri 10/7 - Travel Day
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
`,content:"",frontmatter:{},index:5,start:44,end:48},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/006-day-1-rome-to-florence.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:X_,meta:{srcSequence:"./slides/02-florence/007-florence-overview.md",slide:{raw:null,content:`|     |     |
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
`,content:"",frontmatter:{},index:6,start:48,end:52},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/007-florence-overview.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:l2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:7,start:52,end:56},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/008-day-1-florence-arrival.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:y2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:8,start:56,end:60},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/009-day-1-florence-duomo.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:A2,meta:{title:"Day 1 - Fri 10/7 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence 
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
`,content:"",frontmatter:{layout:"two-cols"},index:9,start:60,end:65},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/010-day-1-florence-restaurants.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:z2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:10,start:65,end:69},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/011-day-1-florence-dinner.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:J2,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:11,start:69,end:74},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/012-day-2-florence-walk-to-uffizi.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:aw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:12,start:74,end:79},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/013-day-2-florence-uffizi-gallery.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:yw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:13,start:79,end:84},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/014-day-2-allantico-vinaio.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Aw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:14,start:84,end:89},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/015-day-2-florence-ponte-vecchio.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:jw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:15,start:89,end:94},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/016-day-2-florence-pitti-palace.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:Yw,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:16,start:94,end:99},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/017-day-2-florence-boboli-gardens.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:ab,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:17,start:99,end:104},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/018-day-2-florence-accademia.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:mb,meta:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{},index:18,start:104,end:108},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Db,meta:{title:"Day 3 - Sun 10/9 - Travel Day",srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Travel Day",level:4,content:`#### Day 3 - Sun 10/9 - Travel Day
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
`,content:"",frontmatter:{},index:19,start:108,end:112},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/020-day-3-florence-to-rome.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:$b,meta:{srcSequence:"./slides/03-rome/021-rome-overview.md",slide:{raw:null,content:`|     |     |
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
`,content:"",frontmatter:{},index:20,start:112,end:116},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/021-rome-overview.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:jb,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{},index:21,start:116,end:120},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/022-day-3-rome-arrival.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:Qb,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome 
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
`,content:"",frontmatter:{layout:"two-cols"},index:22,start:120,end:125},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:l5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:23,start:125,end:130},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:b5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:24,start:130,end:135},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/025-day-3-rome-pantheon.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:C5,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{},index:25,start:135,end:139},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:B5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:26,start:139,end:144},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/027-day-3-rome-trevi-fountain.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Y5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:27,start:144,end:149},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/028-day-3-rome-spanish-steps.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:s3,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:28,start:149,end:154},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:k3,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:29,start:154,end:159},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/030-day-4-rome-st-peters-square.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:C3,meta:{title:"Day 4 - Mon 10/10 - Rome",srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{},index:30,start:159,end:163},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:q3,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:31,start:163,end:168},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/032-day-4-rome-roman-forum.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:Y3,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:32,start:168,end:173},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/033-day-4-rome-palatine-hill.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:a4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:33,start:173,end:178},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/034-day-4-rome-colosseum.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:p4,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
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
`,content:"",frontmatter:{},index:34,start:178,end:182},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:k4,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
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
`,content:"",frontmatter:{},index:35,start:182,end:186},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:E4,meta:{title:"Day 5 - Tue 10/11 - Cruise Day 1",srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Cruise Day 1",level:4,content:`#### Day 5 - Tue 10/11 - Cruise Day 1
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
`,content:"",frontmatter:{},index:36,start:186,end:190},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:O4,meta:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",slide:{raw:null,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md"},index:37,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",raw:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md
---
`,content:"",frontmatter:{},index:37,start:190,end:194},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:W4,meta:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md",slide:{raw:null,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
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
`,content:"",frontmatter:{layout:"two-cols"},index:38,start:194,end:199},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/039-day-8-mykonos.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:ek,meta:{title:"Day 9 - Sat 10/15 - Cruise Day 5",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md",slide:{raw:null,title:"Day 9 - Sat 10/15 - Cruise Day 5",level:4,content:`#### Day 9 - Sat 10/15 - Cruise Day 5
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
`,content:"",frontmatter:{layout:"two-cols"},index:39,start:199,end:204},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/040-day-9-ephesus.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:mk,meta:{title:"Day 10 - Sun 10/16 - Cruise Day 6",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md",slide:{raw:null,title:"Day 10 - Sun 10/16 - Cruise Day 6",level:4,content:`#### Day 10 - Sun 10/16 - Cruise Day 6
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
`,content:"",frontmatter:{layout:"two-cols"},index:40,start:204,end:209},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/041-day-10-santorini.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Ck,meta:{title:"Day 11 - Mon 10/17 - Cruise Day 7",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md",slide:{raw:null,title:"Day 11 - Mon 10/17 - Cruise Day 7",level:4,content:`#### Day 11 - Mon 10/17 - Cruise Day 7
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
`,content:"",frontmatter:{layout:"two-cols"},index:41,start:209,end:214},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/042-day-11-athens.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:Bk,meta:{title:"Day 12 - Tue 10/18 - Cruise Day 8",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md",slide:{raw:null,title:"Day 12 - Tue 10/18 - Cruise Day 8",level:4,content:`#### Day 12 - Tue 10/18 - Cruise Day 8
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
`,content:"",frontmatter:{layout:"two-cols"},index:42,start:214,end:219},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/043-day-12-olympia.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:nS,meta:{title:"Day 13 - Wed 10/19 - Cruise Day 9",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md",slide:{raw:null,title:"Day 13 - Wed 10/19 - Cruise Day 9",level:4,content:`#### Day 13 - Wed 10/19 - Cruise Day 9
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
`,content:"",frontmatter:{layout:"two-cols"},index:43,start:219,end:224},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/044-day-13-sicily.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:pS,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:44,start:224,end:229},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/045-day-14-naples.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:DS,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:45,start:229,end:234},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:zS,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:46,start:234,end:239},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/047-day-14-naples-positano.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:GS,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:47,start:239,end:244},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:ZS,meta:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**`,frontmatter:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md"},index:48,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",raw:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**`,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
## **Civitavecchia (Debarkation)**`,frontmatter:{title:"Day 15 - Fri 10/21 - Cruise Day 11"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md
---
`,content:"",frontmatter:{},index:48,start:244,end:248},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",notesHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:eT,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md"},index:49,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Port to Civitavecchia Train Station**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md
---
`,content:"",frontmatter:{},index:49,start:248,end:252},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",notesHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:rT,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md"},index:50,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/051-day-15-civitavecchia-to-rome.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/051-day-15-civitavecchia-to-rome.md
---
`,content:"",frontmatter:{},index:50,start:252,end:256},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/051-day-15-civitavecchia-to-rome.md",notesHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:aT,meta:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md"},index:51,start:0,end:4,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/052-day-15-last-day-in-rome.md",raw:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> If time allows, see [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. [\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome"},index:0,start:0,end:4},inline:{raw:`---
src: ./slides/07-return-home/052-day-15-last-day-in-rome.md
---
`,content:"",frontmatter:{},index:51,start:256,end:260},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/052-day-15-last-day-in-rome.md",notesHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:uT,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md"},index:52,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/053-day-15-rome-to-airport-hilton.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/053-day-15-rome-to-airport-hilton.md
---
`,content:"",frontmatter:{},index:52,start:260,end:264},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/053-day-15-rome-to-airport-hilton.md",notesHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:fT,meta:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md",slide:{raw:null,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md"},index:53,start:0,end:2,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/054-day-16-transatlantic-flight-home.md",raw:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day"},index:0,start:0,end:2},inline:{raw:`---
src: ./slides/07-return-home/054-day-16-transatlantic-flight-home.md
---

`,content:"",frontmatter:{},index:53,start:264,end:269},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/054-day-16-transatlantic-flight-home.md",notesHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",component:Fv,meta:{layout:"end"}}],We=pT,mT=[{name:"play",path:"/",component:xv,children:[...We]},{name:"print",path:"/print",component:Rv},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>ir(()=>import("./Presenter.a447884c.js"),["assets/Presenter.a447884c.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.feac7ace.js"]),beforeEnter:e=>{if(!_n.remote||_n.remote===e.query.password)return!0;if(_n.remote&&e.query.password===void 0){const t=prompt("Enter password");if(_n.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=y1({history:M0("/"),routes:mT});function gT(e,t,{mode:n="replace"}={}){return P({get(){const r=gt.currentRoute.value.query[e];return r==null?t!=null?t:null:Array.isArray(r)?r.filter(Boolean):r},set(r){Ye(()=>{gt[b(n)]({query:{...gt.currentRoute.value.query,[e]:r}})})}})}const Xu=H(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),Xu.value+=1})});const Jt=P(()=>gt.currentRoute.value),Yn=P(()=>Jt.value.query.print!==void 0),yT=P(()=>Jt.value.query.print==="clicks"),Vt=P(()=>Jt.value.query.embedded!==void 0),Lt=P(()=>Jt.value.path.startsWith("/presenter")),Dr=P(()=>Yn.value&&!yT.value),Qs=P(()=>Jt.value.query.password),vT=P(()=>!Lt.value&&(!ke.remote||Qs.value===ke.remote)),ql=gT("clicks","0"),ed=P(()=>We.length-1),_T=P(()=>Jt.value.path),He=P(()=>parseInt(_T.value.split(/\//g).slice(-1)[0])||1);P(()=>Jo(He.value));const dt=P(()=>We.find(e=>e.path===`${He.value}`));P(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});P(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const ps=P(()=>We.find(e=>e.path===`${Math.min(We.length,He.value+1)}`)),wT=P(()=>{var e,t;return Xu.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ct=P({get(){if(Dr.value)return 99999;let e=+(ql.value||0);return isNaN(e)&&(e=0),e},set(e){ql.value=e.toString()}}),Ao=P(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:wT.value.length)}),bT=P(()=>He.value<We.length-1||Ct.value<Ao.value),kT=P(()=>He.value>1||Ct.value>0),ST=P(()=>We.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Vi(e,t),e),[])),TT=P(()=>Ni(ST.value,dt.value));P(()=>Wi(TT.value));function on(){Ao.value<=Ct.value?Ir():Ct.value+=1}async function sn(){Ct.value<=0?await Br():Ct.value-=1}function Jo(e){return Lt.value?`/presenter/${e}`:`/${e}`}function Ir(){const e=Math.min(We.length,He.value+1);return rr(e)}async function Br(e=!0){const t=Math.max(1,He.value-1);await rr(t),e&&Ao.value&&gt.replace({query:{...Jt.value.query,clicks:Ao.value}})}function rr(e,t){return gt.push({path:Jo(e),query:{...Jt.value.query,clicks:t}})}function DT(e){const t=H(0),{direction:n,distanceX:r,distanceY:o}=s0(e,{onSwipeStart(i){i.pointerType==="touch"&&(jr.value||(t.value=Bs()))},onSwipeEnd(i){if(i.pointerType!=="touch"||!t.value||jr.value)return;const a=Math.abs(r.value),l=Math.abs(o.value);a/window.innerWidth>.3||a>100?n.value===Ht.LEFT?on():sn():(l/window.innerHeight>.4||l>200)&&(n.value===Ht.DOWN?Br():Ir())}})}async function Xs(){const{saveAs:e}=await ir(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(_u(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/slidev-exported.pdf",`${ke.title}.pdf`)}async function xT(e){var t,n;if(e==null){const r=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(r!=null&&r.filepath))return!1;e=`${r.filepath}:${r.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Vi(e,t,n=1){var o,i,a,l,c;const r=(i=(o=t.meta)==null?void 0:o.slide)==null?void 0:i.level;r&&r>n&&e.length>0?Vi(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Ni(e,t,n=!1,r){return e.map(o=>{const i={...o,active:o.path===(t==null?void 0:t.path),hasActiveParent:n};return i.children.length>0&&(i.children=Ni(i.children,t,i.active||i.hasActiveParent,i)),r&&(i.active||i.activeParent)&&(r.activeParent=!0),i})}function Wi(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Wi(n.children,t+1)}))}function PT(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");Ap({title:e}),zp(`${e} - shared`),Ip(`${e} - drawings`);function t(){Lt.value&&(Wa("page",+He.value),Wa("clicks",Ct.value))}gt.afterEach(t),fe(Ct,t),Lp(n=>{(+n.page!=+He.value||Ct.value!==n.clicks)&&gt.replace({path:Jo(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const AT=Te({__name:"App",setup(e){return F(I),PT(),(t,n)=>{const r=Fr("RouterView"),o=Fr("StarportCarrier");return k(),U(xe,null,[Z(r),Z(o)],64)}}});function ms(e){return e!==null&&typeof e=="object"}function ei(e,t,n=".",r){if(!ms(t))return ei(e,{},n,r);const o=Object.assign({},t);for(const i in e){if(i==="__proto__"||i==="constructor")continue;const a=e[i];a!=null&&(r&&r(o,i,a,n)||(Array.isArray(a)&&Array.isArray(o[i])?o[i]=a.concat(o[i]):ms(a)&&ms(o[i])?o[i]=ei(a,o[i],(n?`${n}.`:"")+i.toString(),r):o[i]=a))}return o}function $T(e){return(...t)=>t.reduce((n,r)=>ei(n,r,"",e),{})}const CT=$T(),td=1/60*1e3,RT=typeof performance<"u"?()=>performance.now():()=>Date.now(),nd=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(RT()),td);function ET(e){let t=[],n=[],r=0,o=!1,i=!1;const a=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const h=d&&o,p=h?t:n;return u&&a.add(c),p.indexOf(c)===-1&&(p.push(c),h&&o&&(r=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(o){i=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const d=t[u];d(c),a.has(d)&&(l.schedule(d),e())}o=!1,i&&(i=!1,l.process(c))}};return l}const MT=40;let ti=!0,Vr=!1,ni=!1;const Zn={delta:0,timestamp:0},Ur=["read","update","preRender","render","postRender"],Yo=Ur.reduce((e,t)=>(e[t]=ET(()=>Vr=!0),e),{}),ri=Ur.reduce((e,t)=>{const n=Yo[t];return e[t]=(r,o=!1,i=!1)=>(Vr||zT(),n.schedule(r,o,i)),e},{}),FT=Ur.reduce((e,t)=>(e[t]=Yo[t].cancel,e),{});Ur.reduce((e,t)=>(e[t]=()=>Yo[t].process(Zn),e),{});const OT=e=>Yo[e].process(Zn),rd=e=>{Vr=!1,Zn.delta=ti?td:Math.max(Math.min(e-Zn.timestamp,MT),1),Zn.timestamp=e,ni=!0,Ur.forEach(OT),ni=!1,Vr&&(ti=!1,nd(rd))},zT=()=>{Vr=!0,ti=!0,ni||nd(rd)},od=()=>Zn;function sd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}var LT=function(){},Il=function(){};const oi=(e,t,n)=>Math.min(Math.max(n,e),t),gs=.001,jT=.01,Bl=10,qT=.05,IT=1;function BT({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,i;LT(e<=Bl*1e3);let a=1-t;a=oi(qT,IT,a),e=oi(jT,Bl,e/1e3),a<1?(o=u=>{const d=u*a,h=d*e,p=d-n,m=si(u,a),g=Math.exp(-h);return gs-p/m*g},i=u=>{const h=u*a*e,p=h*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,g=Math.exp(-h),w=si(Math.pow(u,2),a);return(-o(u)+gs>0?-1:1)*((p-m)*g)/w}):(o=u=>{const d=Math.exp(-u*e),h=(u-n)*e+1;return-gs+d*h},i=u=>{const d=Math.exp(-u*e),h=(n-u)*(e*e);return d*h});const l=5/e,c=NT(o,i,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const VT=12;function NT(e,t,n){let r=n;for(let o=1;o<VT;o++)r=r-e(r)/t(r);return r}function si(e,t){return e*Math.sqrt(1-t*t)}const WT=["duration","bounce"],HT=["stiffness","damping","mass"];function Vl(e,t){return t.some(n=>e[n]!==void 0)}function UT(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Vl(e,HT)&&Vl(e,WT)){const n=BT(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Hi(e){var{from:t=0,to:n=1,restSpeed:r=2,restDelta:o}=e,i=sd(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:h,isResolvedFromDuration:p}=UT(i),m=Nl,g=Nl;function w(){const _=d?-(d/1e3):0,x=n-t,T=c/(2*Math.sqrt(l*u)),D=Math.sqrt(l/u)/1e3;if(o===void 0&&(o=Math.min(Math.abs(n-t)/100,.4)),T<1){const A=si(D,T);m=q=>{const O=Math.exp(-T*D*q);return n-O*((_+T*D*x)/A*Math.sin(A*q)+x*Math.cos(A*q))},g=q=>{const O=Math.exp(-T*D*q);return T*D*O*(Math.sin(A*q)*(_+T*D*x)/A+x*Math.cos(A*q))-O*(Math.cos(A*q)*(_+T*D*x)-A*x*Math.sin(A*q))}}else if(T===1)m=A=>n-Math.exp(-D*A)*(x+(_+D*x)*A);else{const A=D*Math.sqrt(T*T-1);m=q=>{const O=Math.exp(-T*D*q),N=Math.min(A*q,300);return n-O*((_+T*D*x)*Math.sinh(N)+A*x*Math.cosh(N))/A}}}return w(),{next:_=>{const x=m(_);if(p)a.done=_>=h;else{const T=g(_)*1e3,D=Math.abs(T)<=r,A=Math.abs(n-x)<=o;a.done=D&&A}return a.value=a.done?n:x,a},flipTarget:()=>{d=-d,[t,n]=[n,t],w()}}}Hi.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Nl=e=>0,id=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Ui=(e,t,n)=>-n*e+n*t+e,ad=(e,t)=>n=>Math.max(Math.min(n,t),e),xr=e=>e%1?Number(e.toFixed(5)):e,Nr=/(-)?([\d]*\.?[\d])+/g,ii=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,KT=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Kr(e){return typeof e=="string"}const Gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Pr=Object.assign(Object.assign({},Gr),{transform:ad(0,1)}),oo=Object.assign(Object.assign({},Gr),{default:1}),Ki=e=>({test:t=>Kr(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),fn=Ki("deg"),Ar=Ki("%"),ce=Ki("px"),Wl=Object.assign(Object.assign({},Ar),{parse:e=>Ar.parse(e)/100,transform:e=>Ar.transform(e*100)}),Gi=(e,t)=>n=>Boolean(Kr(n)&&KT.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),ld=(e,t,n)=>r=>{if(!Kr(r))return r;const[o,i,a,l]=r.match(Nr);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},bn={test:Gi("hsl","hue"),parse:ld("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ar.transform(xr(t))+", "+Ar.transform(xr(n))+", "+xr(Pr.transform(r))+")"},GT=ad(0,255),ys=Object.assign(Object.assign({},Gr),{transform:e=>Math.round(GT(e))}),en={test:Gi("rgb","red"),parse:ld("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ys.transform(e)+", "+ys.transform(t)+", "+ys.transform(n)+", "+xr(Pr.transform(r))+")"};function JT(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const ai={test:Gi("#"),parse:JT,transform:en.transform},st={test:e=>en.test(e)||ai.test(e)||bn.test(e),parse:e=>en.test(e)?en.parse(e):bn.test(e)?bn.parse(e):ai.parse(e),transform:e=>Kr(e)?e:e.hasOwnProperty("red")?en.transform(e):bn.transform(e)},cd="${c}",ud="${n}";function YT(e){var t,n,r,o;return isNaN(e)&&Kr(e)&&((n=(t=e.match(Nr))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(ii))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function dd(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(ii);r&&(n=r.length,e=e.replace(ii,cd),t.push(...r.map(st.parse)));const o=e.match(Nr);return o&&(e=e.replace(Nr,ud),t.push(...o.map(Gr.parse))),{values:t,numColors:n,tokenised:e}}function hd(e){return dd(e).values}function fd(e){const{values:t,numColors:n,tokenised:r}=dd(e),o=t.length;return i=>{let a=r;for(let l=0;l<o;l++)a=a.replace(l<n?cd:ud,l<n?st.transform(i[l]):xr(i[l]));return a}}const ZT=e=>typeof e=="number"?0:e;function QT(e){const t=hd(e);return fd(e)(t.map(ZT))}const Jr={test:YT,parse:hd,createTransformer:fd,getAnimatableNone:QT},XT=new Set(["brightness","contrast","saturate","opacity"]);function eD(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Nr)||[];if(!r)return e;const o=n.replace(r,"");let i=XT.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const tD=/([a-z-]*)\(.*?\)/g,li=Object.assign(Object.assign({},Jr),{getAnimatableNone:e=>{const t=e.match(tD);return t?t.map(eD).join(" "):e}});function vs(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Hl({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,i=0,a=0;if(!t)o=i=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;o=vs(c,l,e+1/3),i=vs(c,l,e),a=vs(c,l,e-1/3)}return{red:Math.round(o*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}const nD=(e,t,n)=>{const r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},rD=[ai,en,bn],Ul=e=>rD.find(t=>t.test(e)),pd=(e,t)=>{let n=Ul(e),r=Ul(t),o=n.parse(e),i=r.parse(t);n===bn&&(o=Hl(o),n=en),r===bn&&(i=Hl(i),r=en);const a=Object.assign({},o);return l=>{for(const c in a)c!=="alpha"&&(a[c]=nD(o[c],i[c],l));return a.alpha=Ui(o.alpha,i.alpha,l),n.transform(a)}},oD=e=>typeof e=="number",sD=(e,t)=>n=>t(e(n)),md=(...e)=>e.reduce(sD);function gd(e,t){return oD(e)?n=>Ui(e,t,n):st.test(e)?pd(e,t):vd(e,t)}const yd=(e,t)=>{const n=[...e],r=n.length,o=e.map((i,a)=>gd(i,t[a]));return i=>{for(let a=0;a<r;a++)n[a]=o[a](i);return n}},iD=(e,t)=>{const n=Object.assign(Object.assign({},e),t),r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=gd(e[o],t[o]));return o=>{for(const i in r)n[i]=r[i](o);return n}};function Kl(e){const t=Jr.parse(e),n=t.length;let r=0,o=0,i=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:t[a].hue!==void 0?i++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:i}}const vd=(e,t)=>{const n=Jr.createTransformer(t),r=Kl(e),o=Kl(t);return r.numHSL===o.numHSL&&r.numRGB===o.numRGB&&r.numNumbers>=o.numNumbers?md(yd(r.parsed,o.parsed),n):a=>`${a>0?t:e}`},aD=(e,t)=>n=>Ui(e,t,n);function lD(e){if(typeof e=="number")return aD;if(typeof e=="string")return st.test(e)?pd:vd;if(Array.isArray(e))return yd;if(typeof e=="object")return iD}function cD(e,t,n){const r=[],o=n||lD(e[0]),i=e.length-1;for(let a=0;a<i;a++){let l=o(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=md(c,l)}r.push(l)}return r}function uD([e,t],[n]){return r=>n(id(e,t,r))}function dD(e,t){const n=e.length,r=n-1;return o=>{let i=0,a=!1;if(o<=e[0]?a=!0:o>=e[r]&&(i=r-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>o||c===r);c++);i=c-1}const l=id(e[i],e[i+1],o);return t[i](l)}}function _d(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const i=e.length;Il(i===t.length),Il(!r||!Array.isArray(r)||r.length===i-1),e[0]>e[i-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=cD(t,r,o),l=i===2?uD(e,a):dD(e,a);return n?c=>l(oi(e[0],e[i-1],c)):l}const Zo=e=>t=>1-e(1-t),Ji=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,hD=e=>t=>Math.pow(t,e),wd=e=>t=>t*t*((e+1)*t-e),fD=e=>{const t=wd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},bd=1.525,pD=4/11,mD=8/11,gD=9/10,kd=e=>e,Yi=hD(2),yD=Zo(Yi),Sd=Ji(Yi),Td=e=>1-Math.sin(Math.acos(e)),Dd=Zo(Td),vD=Ji(Dd),Zi=wd(bd),_D=Zo(Zi),wD=Ji(Zi),bD=fD(bd),kD=4356/361,SD=35442/1805,TD=16061/1805,$o=e=>{if(e===1||e===0)return e;const t=e*e;return e<pD?7.5625*t:e<mD?9.075*t-9.9*e+3.4:e<gD?kD*t-SD*e+TD:10.8*e*e-20.52*e+10.72},DD=Zo($o),xD=e=>e<.5?.5*(1-$o(1-e*2)):.5*$o(e*2-1)+.5;function PD(e,t){return e.map(()=>t||Sd).splice(0,e.length-1)}function AD(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function $D(e,t){return e.map(n=>n*t)}function po({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const i={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=$D(r&&r.length===a.length?r:AD(a),o);function c(){return _d(l,a,{ease:Array.isArray(n)?n:PD(a,n)})}let u=c();return{next:d=>(i.value=u(d),i.done=d>=o,i),flipTarget:()=>{a.reverse(),u=c()}}}function CD({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:i}){const a={done:!1,value:t};let l=n*e;const c=t+l,u=i===void 0?c:i(c);return u!==c&&(l=u-t),{next:d=>{const h=-l*Math.exp(-d/r);return a.done=!(h>o||h<-o),a.value=a.done?u:u+h,a},flipTarget:()=>{}}}const Gl={keyframes:po,spring:Hi,decay:CD};function RD(e){if(Array.isArray(e.to))return po;if(Gl[e.type])return Gl[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?po:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Hi:po}function xd(e,t,n=0){return e-t-n}function ED(e,t,n=0,r=!0){return r?xd(t+-e,t,n):t-(e-t)+n}function MD(e,t,n,r){return r?e>=t+n:e<=-n}const FD=e=>{const t=({delta:n})=>e(n);return{start:()=>ri.update(t,!0),stop:()=>FT.update(t)}};function Pd(e){var t,n,{from:r,autoplay:o=!0,driver:i=FD,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:h,onComplete:p,onRepeat:m,onUpdate:g}=e,w=sd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=w,x,T=0,D=w.duration,A,q=!1,O=!0,N;const ne=RD(w);!((n=(t=ne).needsInterpolation)===null||n===void 0)&&n.call(t,r,_)&&(N=_d([0,100],[r,_],{clamp:!1}),r=0,_=100);const ae=ne(Object.assign(Object.assign({},w),{from:r,to:_}));function ge(){T++,c==="reverse"?(O=T%2===0,a=ED(a,D,u,O)):(a=xd(a,D,u),c==="mirror"&&ae.flipTarget()),q=!1,m&&m()}function ve(){x.stop(),p&&p()}function Be(qe){if(O||(qe=-qe),a+=qe,!q){const Ee=ae.next(Math.max(0,a));A=Ee.value,N&&(A=N(A)),q=O?Ee.done:a<=0}g==null||g(A),q&&(T===0&&(D!=null||(D=a)),T<l?MD(a,D,u,O)&&ge():ve())}function Ve(){d==null||d(),x=i(Be),x.start()}return o&&Ve(),{stop:()=>{h==null||h(),x.stop()}}}function Ad(e,t){return t?e*(1e3/t):0}function OD({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:i=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:h,onComplete:p,onStop:m}){let g;function w(D){return n!==void 0&&D<n||r!==void 0&&D>r}function _(D){return n===void 0?r:r===void 0||Math.abs(n-D)<Math.abs(r-D)?n:r}function x(D){g==null||g.stop(),g=Pd(Object.assign(Object.assign({},D),{driver:d,onUpdate:A=>{var q;h==null||h(A),(q=D.onUpdate)===null||q===void 0||q.call(D,A)},onComplete:p,onStop:m}))}function T(D){x(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},D))}if(w(e))T({from:e,velocity:t,to:_(e)});else{let D=o*t+e;typeof u<"u"&&(D=u(D));const A=_(D),q=A===n?-1:1;let O,N;const ne=ae=>{O=N,N=ae,t=Ad(ae-O,od().delta),(q===1&&ae>A||q===-1&&ae<A)&&T({from:ae,to:A,velocity:t})};x({type:"decay",from:e,velocity:t,timeConstant:i,power:o,restDelta:c,modifyTarget:u,onUpdate:w(D)?ne:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const $d=(e,t)=>1-3*t+3*e,Cd=(e,t)=>3*t-6*e,Rd=e=>3*e,Co=(e,t,n)=>(($d(t,n)*e+Cd(t,n))*e+Rd(t))*e,Ed=(e,t,n)=>3*$d(t,n)*e*e+2*Cd(t,n)*e+Rd(t),zD=1e-7,LD=10;function jD(e,t,n,r,o){let i,a,l=0;do a=t+(n-t)/2,i=Co(a,r,o)-e,i>0?n=a:t=a;while(Math.abs(i)>zD&&++l<LD);return a}const qD=8,ID=.001;function BD(e,t,n,r){for(let o=0;o<qD;++o){const i=Ed(t,n,r);if(i===0)return t;t-=(Co(t,n,r)-e)/i}return t}const mo=11,so=1/(mo-1);function VD(e,t,n,r){if(e===t&&n===r)return kd;const o=new Float32Array(mo);for(let a=0;a<mo;++a)o[a]=Co(a*so,e,n);function i(a){let l=0,c=1;const u=mo-1;for(;c!==u&&o[c]<=a;++c)l+=so;--c;const d=(a-o[c])/(o[c+1]-o[c]),h=l+d*so,p=Ed(h,e,n);return p>=ID?BD(a,h,e,n):p===0?h:jD(a,l,l+so,e,n)}return a=>a===0||a===1?a:Co(i(a),t,r)}const _s={};class ND{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,r){if(!!this.subscriptions.size)for(const o of this.subscriptions)o(t,n,r)}clear(){this.subscriptions.clear()}}const Jl=e=>!isNaN(parseFloat(e));class WD{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new ND,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:o}=od();this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o),ri.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>ri.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Jl(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Jl(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ad(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:r}=t(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function HD(e){return new WD(e)}const{isArray:UD}=Array;function KD(){const e=H({}),t=r=>{const o=i=>{!e.value[i]||(e.value[i].stop(),e.value[i].destroy(),delete e.value[i])};r?UD(r)?r.forEach(o):o(r):Object.keys(e.value).forEach(o)},n=(r,o,i)=>{if(e.value[r])return e.value[r];const a=HD(o);return a.onChange(l=>i[r]=l),e.value[r]=a,a};return cm(t),{motionValues:e,get:n,stop:t}}const GD=e=>Array.isArray(e),pn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),ws=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),JD=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),bs=()=>({type:"keyframes",ease:"linear",duration:300}),YD=e=>({type:"keyframes",duration:800,values:e}),Yl={default:JD,x:pn,y:pn,z:pn,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scaleX:ws,scaleY:ws,scale:ws,backgroundColor:bs,color:bs,opacity:bs},Md=(e,t)=>{let n;return GD(t)?n=YD:n=Yl[e]||Yl.default,{to:t,...n(t)}},Zl={...Gr,transform:Math.round},Fd={color:st,backgroundColor:st,outlineColor:st,fill:st,stroke:st,borderColor:st,borderTopColor:st,borderRightColor:st,borderBottomColor:st,borderLeftColor:st,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scale:oo,scaleX:oo,scaleY:oo,scaleZ:oo,skew:fn,skewX:fn,skewY:fn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:Pr,originX:Wl,originY:Wl,originZ:ce,zIndex:Zl,filter:li,WebkitFilter:li,fillOpacity:Pr,strokeOpacity:Pr,numOctaves:Zl},Qi=e=>Fd[e],Od=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function ZD(e,t){let n=Qi(e);return n!==li&&(n=Jr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const QD={linear:kd,easeIn:Yi,easeInOut:Sd,easeOut:yD,circIn:Td,circInOut:vD,circOut:Dd,backIn:Zi,backInOut:wD,backOut:_D,anticipate:bD,bounceIn:DD,bounceInOut:xD,bounceOut:$o},Ql=e=>{if(Array.isArray(e)){const[t,n,r,o]=e;return VD(t,n,r,o)}else if(typeof e=="string")return QD[e];return e},XD=e=>Array.isArray(e)&&typeof e[0]!="number",Xl=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Jr.test(t)&&!t.startsWith("url("));function ex(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function tx({ease:e,times:t,delay:n,...r}){const o={...r};return t&&(o.offset=t),e&&(o.ease=XD(e)?e.map(Ql):Ql(e)),n&&(o.elapsed=-n),o}function nx(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),ex(t),rx(e)||(e={...e,...Md(n,t.to)}),{...t,...tx(e)}}function rx({delay:e,repeat:t,repeatType:n,repeatDelay:r,from:o,...i}){return!!Object.keys(i).length}function ox(e,t){return e[t]||e.default||e}function sx(e,t,n,r,o){const i=ox(r,e);let a=i.from===null||i.from===void 0?t.get():i.from;const l=Xl(e,n);a==="none"&&l&&typeof n=="string"&&(a=ZD(e,n));const c=Xl(e,a);function u(h){const p={from:a,to:n,velocity:r.velocity?r.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return i.type==="inertia"||i.type==="decay"?OD({...p,...i}):Pd({...nx(i,p,e),onUpdate:m=>{p.onUpdate(m),i.onUpdate&&i.onUpdate(m)},onComplete:()=>{r.onComplete&&r.onComplete(),o&&o(),h&&h()}})}function d(h){return t.set(n),r.onComplete&&r.onComplete(),o&&o(),h&&h(),{stop:()=>{}}}return!c||!l||i.type===!1?d:u}function ix(){const{motionValues:e,stop:t,get:n}=KD();return{motionValues:e,stop:t,push:(o,i,a,l={},c)=>{const u=a[o],d=n(o,u,a);if(l&&l.immediate){d.set(i);return}const h=sx(o,d,i,l,c);d.start(h)}}}function ax(e,t={},{motionValues:n,push:r,stop:o}=ix()){const i=b(t),a=H(!1);fe(n,h=>{a.value=Object.values(h).filter(p=>p.isAnimating()).length>0},{immediate:!0,deep:!0});const l=h=>{if(!i||!i[h])throw new Error(`The variant ${h} does not exist.`);return i[h]},c=h=>(typeof h=="string"&&(h=l(h)),Promise.all(Object.entries(h).map(([p,m])=>{if(p!=="transition")return new Promise(g=>{r(p,m,e,h.transition||Md(p,h[p]),g)})}).filter(Boolean)));return{isAnimating:a,apply:c,set:h=>{const p=Is(h)?h:l(h);Object.entries(p).forEach(([m,g])=>{m!=="transition"&&r(m,g,e,{immediate:!0})})},leave:async h=>{let p;if(i&&(i.leave&&(p=i.leave),!i.leave&&i.initial&&(p=i.initial)),!p){h();return}await c(p),h()},stop:o}}const Xi=typeof window<"u",lx=()=>Xi&&window.onpointerdown===null,cx=()=>Xi&&window.ontouchstart===null,ux=()=>Xi&&window.onmousedown===null;function dx({target:e,state:t,variants:n,apply:r}){const o=b(n),i=H(!1),a=H(!1),l=H(!1),c=P(()=>{let d=[];return o&&(o.hovered&&(d=[...d,...Object.keys(o.hovered)]),o.tapped&&(d=[...d,...Object.keys(o.tapped)]),o.focused&&(d=[...d,...Object.keys(o.focused)])),d}),u=P(()=>{const d={};Object.assign(d,t.value),i.value&&o.hovered&&Object.assign(d,o.hovered),a.value&&o.tapped&&Object.assign(d,o.tapped),l.value&&o.focused&&Object.assign(d,o.focused);for(const h in d)c.value.includes(h)||delete d[h];return d});o.hovered&&(de(e,"mouseenter",()=>i.value=!0),de(e,"mouseleave",()=>{i.value=!1,a.value=!1}),de(e,"mouseout",()=>{i.value=!1,a.value=!1})),o.tapped&&(ux()&&(de(e,"mousedown",()=>a.value=!0),de(e,"mouseup",()=>a.value=!1)),lx()&&(de(e,"pointerdown",()=>a.value=!0),de(e,"pointerup",()=>a.value=!1)),cx()&&(de(e,"touchstart",()=>a.value=!0),de(e,"touchend",()=>a.value=!1))),o.focused&&(de(e,"focus",()=>l.value=!0),de(e,"blur",()=>l.value=!1)),fe(u,r)}function hx({set:e,target:t,apply:n,variants:r,variant:o}){const i=b(r);fe(()=>t,()=>{!i||(i.initial&&e("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}function fx({state:e,apply:t}){fe(e,n=>{n&&t(n)},{immediate:!0})}function px({target:e,variants:t,variant:n}){const r=b(t);r&&(r.visible||r.visibleOnce)&&n0(e,([{isIntersecting:o}])=>{r.visible?o?n.value="visible":n.value="initial":r.visibleOnce&&(o&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function mx(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&hx(e),t.syncVariants&&fx(e),t.visibilityHooks&&px(e),t.eventListeners&&dx(e)}function zd(e={}){const t=Fe({...e}),n=H({});return fe(t,()=>{const r={};for(const[o,i]of Object.entries(t)){const a=Qi(o),l=Od(i,a);r[o]=l}n.value=r},{immediate:!0,deep:!0}),{state:t,style:n}}function ea(e,t){fe(()=>Pt(e),n=>{!n||t(n)},{immediate:!0})}const gx={x:"translateX",y:"translateY",z:"translateZ"};function Ld(e={},t=!0){const n=Fe({...e}),r=H("");return fe(n,o=>{let i="",a=!1;t&&(o.x||o.y||o.z)&&(i+=`translate3d(${[o.x||0,o.y||0,o.z||0].map(ce.transform).join(",")}) `,a=!0);for(const[l,c]of Object.entries(o)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Qi(l),d=Od(c,u);i+=`${gx[l]||l}(${d}) `}t&&!a&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const yx=["","X","Y","Z"],vx=["perspective","translate","scale","rotate","skew"],jd=["transformPerspective","x","y","z"];vx.forEach(e=>{yx.forEach(t=>{const n=e+t;jd.push(n)})});const _x=new Set(jd);function ta(e){return _x.has(e)}const wx=new Set(["originX","originY","originZ"]);function qd(e){return wx.has(e)}function bx(e){const t={},n={};return Object.entries(e).forEach(([r,o])=>{ta(r)||qd(r)?t[r]=o:n[r]=o}),{transform:t,style:n}}function Id(e){const{transform:t,style:n}=bx(e),{transform:r}=Ld(t),{style:o}=zd(n);return r.value&&(o.value.transform=r.value),o.value}function kx(e,t){let n,r;const{state:o,style:i}=zd();return ea(e,a=>{r=a;for(const l of Object.keys(Fd))a.style[l]===null||a.style[l]===""||ta(l)||qd(l)||(o[l]=a.style[l]);n&&Object.entries(n).forEach(([l,c])=>a.style[l]=c),t&&t(o)}),fe(i,a=>{if(!r){n=a;return}for(const l in a)r.style[l]=a[l]},{immediate:!0}),{style:o}}function Sx(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return t.reduce((r,o)=>{if(!o)return r;const[i,a]=o.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...r,[i]:u}},{})}function Tx(e,t){Object.entries(Sx(t)).forEach(([n,r])=>{const o=["x","y","z"];if(n==="translate3d"){if(r===0){o.forEach(i=>e[i]=0);return}r.forEach((i,a)=>e[o[a]]=i);return}if(r=parseFloat(r),n==="translateX"){e.x=r;return}if(n==="translateY"){e.y=r;return}if(n==="translateZ"){e.z=r;return}e[n]=r})}function Dx(e,t){let n,r;const{state:o,transform:i}=Ld();return ea(e,a=>{r=a,a.style.transform&&Tx(o,a.style.transform),n&&(a.style.transform=n),t&&t(o)}),fe(i,a=>{if(!r){n=a;return}r.style.transform=a},{immediate:!0}),{transform:o}}function xx(e,t){const n=Fe({}),r=a=>Object.entries(a).forEach(([l,c])=>n[l]=c),{style:o}=kx(e,r),{transform:i}=Dx(e,r);return fe(n,a=>{Object.entries(a).forEach(([l,c])=>{const u=ta(l)?i:o;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),ea(e,()=>t&&r(t)),{motionProperties:n,style:o,transform:i}}function Px(e={}){const t=b(e),n=H();return{state:P(()=>{if(!!n.value)return t[n.value]}),variant:n}}function Bd(e,t={},n){const{motionProperties:r}=xx(e),{variant:o,state:i}=Px(t),a=ax(r,t),l={target:e,variant:o,variants:t,state:i,motionProperties:r,...a};return mx(l,n),l}const Ax=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],$x=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Is(n.variants)&&(t.value={...t.value,...n.variants}),Ax.forEach(r=>{if(r==="delay"){if(n&&n[r]&&Up(n[r])){const o=n[r];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:o,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:o,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:o,...t.value.visibleOnce.transition}))}return}r==="visible-once"&&(r="visibleOnce"),n&&n[r]&&Is(n[r])&&(t.value[r]=n[r])}))},ks=e=>({created:(r,o,i)=>{const a=o.value&&typeof o.value=="string"?o.value:i.key;a&&_s[a]&&_s[a].stop();const l=H(e||{});typeof o.value=="object"&&(l.value=o.value),$x(i,l);const c=Bd(r,l);r.motionInstance=c,a&&(_s[a]=c)},unmounted:r=>{r.motionInstance&&r.motionInstance.stop()},getSSRProps(r,o){let{initial:i}=r.value||o&&(o==null?void 0:o.props)||{};i=b(i);const a=CT((e==null?void 0:e.initial)||{},i||{});return!a||Object.keys(a).length===0?void 0:{style:Id(a)}}}),Cx={initial:{opacity:0},enter:{opacity:1}},Rx={initial:{opacity:0},visible:{opacity:1}},Ex={initial:{opacity:0},visibleOnce:{opacity:1}},Mx={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},Fx={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},Ox={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},zx={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Lx={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},jx={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},qx={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Ix={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},Bx={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Vx={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Nx={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Wx={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Hx={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},Ux={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},Kx={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},Gx={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},Jx={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},Yx={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},Zx={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},Qx={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},Xx={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},eP={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},tP={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},nP={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},rP={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},oP={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},sP={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},ci={__proto__:null,fade:Cx,fadeVisible:Rx,fadeVisibleOnce:Ex,pop:Mx,popVisible:Fx,popVisibleOnce:Ox,rollBottom:Hx,rollLeft:zx,rollRight:qx,rollTop:Vx,rollVisibleBottom:Ux,rollVisibleLeft:Lx,rollVisibleRight:Ix,rollVisibleTop:Nx,rollVisibleOnceBottom:Kx,rollVisibleOnceLeft:jx,rollVisibleOnceRight:Bx,rollVisibleOnceTop:Wx,slideBottom:rP,slideLeft:Gx,slideRight:Zx,slideTop:eP,slideVisibleBottom:oP,slideVisibleLeft:Jx,slideVisibleRight:Qx,slideVisibleTop:tP,slideVisibleOnceBottom:sP,slideVisibleOnceLeft:Yx,slideVisibleOnceRight:Xx,slideVisibleOnceTop:nP},iP=Te({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=Bf(),n=Fe({});if(!e.is&&!t.default)return()=>pt("div",{});const r=P(()=>{let c;return e.preset&&(c=ci[e.preset]),c}),o=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),i=P(()=>{const c={...o.value,...r.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=P(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Qd(c)&&(c=Fr(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var h,p,m;(h=u.variants)!=null&&h.enter&&u.apply("enter"),(p=u.variants)!=null&&p.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Ai(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:i,instances:n}},render({slots:e,motionConfig:t,instances:n,component:r}){var l;const o=Id(t.initial||{}),i=(c,u)=>(c.props||(c.props={}),c.props.style=o,c.props.onVnodeMounted=({el:d})=>{const h=Bd(d,t);n[u]=h},c);if(r){const c=pt(r,void 0,e);return i(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>i(c,u))}});function aP(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,o=>`-${o}`).toLowerCase().replace(/\s+/g,"-").replace(r,o=>n.charAt(t.indexOf(o))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const lP={install(e,t){if(e.directive("motion",ks()),e.component("Motion",iP),!t||t&&!t.excludePresets)for(const n in ci){const r=ci[n];e.directive(`motion-${aP(n)}`,ks(r))}if(t&&t.directives)for(const n in t.directives){const r=t.directives[n];r.initial,e.directive(`motion-${n}`,ks(r))}}};var ec;const $r=typeof window<"u",cP=Object.prototype.toString,uP=e=>cP.call(e)==="[object Object]";$r&&((ec=window==null?void 0:window.navigator)==null?void 0:ec.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function dP(e){return bc()?(kc(e),!0):!1}function hP(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const fP=$r?window:void 0,ui=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},di="__vueuse_ssr_handlers__";ui[di]=ui[di]||{};ui[di];function pP(e,t={}){const{immediate:n=!0,window:r=fP}=t,o=H(!1);let i=null;function a(){!o.value||!r||(e(),i=r.requestAnimationFrame(a))}function l(){!o.value&&r&&(o.value=!0,a())}function c(){o.value=!1,i!=null&&r&&(r.cancelAnimationFrame(i),i=null)}return n&&l(),dP(c),{isActive:o,pause:c,resume:l}}var tc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(tc||(tc={}));const na="vue-starport-injection",Vd="vue-starport-options",mP={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Nd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var gP=Object.defineProperty,Ro=Object.getOwnPropertySymbols,Wd=Object.prototype.hasOwnProperty,Hd=Object.prototype.propertyIsEnumerable,nc=(e,t,n)=>t in e?gP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,yP=(e,t)=>{for(var n in t||(t={}))Wd.call(t,n)&&nc(e,n,t[n]);if(Ro)for(var n of Ro(t))Hd.call(t,n)&&nc(e,n,t[n]);return e},rc=(e,t)=>{var n={};for(var r in e)Wd.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Ro)for(var r of Ro(e))t.indexOf(r)<0&&Hd.call(e,r)&&(n[r]=e[r]);return n};const vP=Te({name:"StarportProxy",props:yP({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Nd),setup(e,t){const n=F(na),r=P(()=>n.getInstance(e.port,e.component)),o=H(),i=r.value.generateId(),a=H(!1);return r.value.isVisible||(r.value.land(),a.value=!0),Wr(async()=>{r.value.el||(r.value.el=o.value,await Ye(),a.value=!0,r.value.rect.update())}),Wo(async()=>{r.value.rect.update(),r.value.liftOff(),r.value.el=void 0,a.value=!1,!r.value.options.keepAlive&&(await Ye(),await Ye(),!r.value.el&&n.dispose(r.value.port))}),fe(()=>e,async()=>{r.value.props&&await Ye();const l=e,{props:c}=l,u=rc(l,["props"]);r.value.props=c||{},r.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,d=rc(l,["initialProps","mountedProps"]),h=bo(d,(a.value?u:c)||{});return pt("div",bo(h,{id:i,ref:o,"data-starport-proxy":r.value.componentId,"data-starport-landed":r.value.isLanded?"true":void 0,"data-starport-floating":r.value.isLanded?void 0:"true"}),t.slots.default?pt(t.slots.default):void 0)}}});var _P=Object.defineProperty,wP=Object.defineProperties,bP=Object.getOwnPropertyDescriptors,oc=Object.getOwnPropertySymbols,kP=Object.prototype.hasOwnProperty,SP=Object.prototype.propertyIsEnumerable,sc=(e,t,n)=>t in e?_P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,TP=(e,t)=>{for(var n in t||(t={}))kP.call(t,n)&&sc(e,n,t[n]);if(oc)for(var n of oc(t))SP.call(t,n)&&sc(e,n,t[n]);return e},DP=(e,t)=>wP(e,bP(t));const xP=Te({name:"Starport",inheritAttrs:!0,props:Nd,setup(e,t){const n=H(!1);return Wr(()=>{n.value=!0}),()=>{var a,l;const r=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!r)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(r.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${r.length}`);const o=r[0];let i=o.type;return(!uP(i)||Xn(i))&&(i={render(){return r}}),pt(vP,DP(TP({},e),{key:e.port,component:jo(i),props:o.props}))}}});function PP(e){const t=Fe({height:0,width:0,left:0,top:0,update:r,listen:i,pause:a,margin:"0px",padding:"0px"}),n=$r?document.documentElement||document.body:void 0;function r(){if(!$r)return;const l=hP(e);if(!l)return;const{height:c,width:u,left:d,top:h}=l.getBoundingClientRect(),p=window.getComputedStyle(l),m=p.margin,g=p.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+h,margin:m,padding:g})}const o=pP(r,{immediate:!1});function i(){!$r||(r(),o.resume())}function a(){o.pause()}return t}let AP=(e,t=21)=>(n=t)=>{let r="",o=n;for(;o--;)r+=e[Math.random()*e.length|0];return r};const ic=AP("abcdefghijklmnopqrstuvwxyz",5);function ac(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function $P(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var CP=Object.defineProperty,lc=Object.getOwnPropertySymbols,RP=Object.prototype.hasOwnProperty,EP=Object.prototype.propertyIsEnumerable,cc=(e,t,n)=>t in e?CP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ss=(e,t)=>{for(var n in t||(t={}))RP.call(t,n)&&cc(e,n,t[n]);if(lc)for(var n of lc(t))EP.call(t,n)&&cc(e,n,t[n]);return e};function MP(e,t,n={}){const r=$P(t),o=ac(r)||ic(),i=H(),a=H(null),l=H(!1),c=H(!1),u=ih(!0),d=H({}),h=P(()=>Ss(Ss(Ss({},mP),n),d.value)),p=H(0);let m;u.run(()=>{m=PP(i),fe(i,async x=>{x&&(c.value=!0),await Ye(),i.value||(c.value=!1)})});const g=ac(e);function w(){return`starport-${o}-${g}-${ic()}`}const _=w();return Fe({el:i,id:_,port:e,props:a,rect:m,scope:u,isLanded:l,isVisible:c,options:h,liftOffTime:p,component:t,componentName:r,componentId:o,generateId:w,setLocalOptions(x={}){d.value=JSON.parse(JSON.stringify(x))},elRef(){return i},liftOff(){!l.value||(l.value=!1,p.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function FP(e){const t=Fe(new Map);function n(o,i){let a=t.get(o);return a||(a=MP(o,i,e),t.set(o,a)),a.component=i,a}function r(o){var i;(i=t.get(o))==null||i.scope.stop(),t.delete(o)}return{portMap:t,dispose:r,getInstance:n}}var OP=Object.defineProperty,zP=Object.defineProperties,LP=Object.getOwnPropertyDescriptors,uc=Object.getOwnPropertySymbols,jP=Object.prototype.hasOwnProperty,qP=Object.prototype.propertyIsEnumerable,dc=(e,t,n)=>t in e?OP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,IP=(e,t)=>{for(var n in t||(t={}))jP.call(t,n)&&dc(e,n,t[n]);if(uc)for(var n of uc(t))qP.call(t,n)&&dc(e,n,t[n]);return e},BP=(e,t)=>zP(e,LP(t));const VP=Te({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=F(na);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=P(()=>t.getInstance(e.port,e.component)),r=P(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),o=P(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?BP(IP({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),i={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return pt("div",{style:o.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},pt(Rf,{to:a?`#${r.value}`:"body",disabled:!a},pt(n.value.component,bo(i,n.value.props))))}}}),NP=Te({name:"StarportCarrier",setup(e,{slots:t}){const n=FP(F(Vd,{}));return Cn().appContext.app.provide(na,n),()=>{var o;return[(o=t.default)==null?void 0:o.call(t),Array.from(n.portMap.entries()).map(([i,{component:a}])=>pt(VP,{key:i,port:i,component:a}))]}}});function WP(e={}){return{install(t){t.provide(Vd,e),t.component("Starport",xP),t.component("StarportCarrier",NP)}}}function HP(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(lP),e.app.use(WP({keepAlive:!0}))}function lt(e,t,n){var r,o;return(o=((r=e.instance)==null?void 0:r.$).provides[t])!=null?o:n}function UP(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,h,p,m;if(Dr.value||((d=lt(n,co))==null?void 0:d.value))return;const r=lt(n,jn),o=lt(n,lo),i=lt(n,qs),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((h=r==null?void 0:r.value)==null?void 0:h.length)||0,u=l?Rp:ss;if(r&&!((p=r==null?void 0:r.value)!=null&&p.includes(t))&&r.value.push(t),n.value===null&&(n.value=r==null?void 0:r.value.length),!(i!=null&&i.value.has(n.value)))i==null||i.value.set(n.value,[t]);else if(!((m=i==null?void 0:i.value.get(n.value))!=null&&m.includes(t))){const g=(i==null?void 0:i.value.get(n.value))||[];i==null||i.value.set(n.value,[t].concat(g))}t==null||t.classList.toggle(Fn,!0),o&&fe(o,()=>{var x;const g=(x=o==null?void 0:o.value)!=null?x:0,w=n.value!=null?g>=n.value:g>c;t.classList.contains(is)||t.classList.toggle(u,!w),a!==!1&&a!==void 0&&t.classList.toggle(u,w),t.classList.toggle(hr,!1);const _=i==null?void 0:i.value.get(g);_==null||_.forEach((T,D)=>{T.classList.toggle(no,!1),D===_.length-1?T.classList.toggle(hr,!0):T.classList.toggle(no,!0)}),t.classList.contains(hr)||t.classList.toggle(no,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const r=lt(n,jn);r!=null&&r.value&&Na(r.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c;if(Dr.value||((l=lt(n,co))==null?void 0:l.value))return;const r=lt(n,jn),o=lt(n,lo),i=lt(n,qs),a=r==null?void 0:r.value.length;n.value===void 0&&(n.value=r==null?void 0:r.value.length),i!=null&&i.value.has(n.value)?(c=i==null?void 0:i.value.get(n.value))==null||c.push(t):i==null||i.value.set(n.value,[t]),t==null||t.classList.toggle(Fn,!0),o&&fe(o,()=>{var d,h,p;const u=((d=o.value)!=null?d:0)>=((p=(h=n.value)!=null?h:a)!=null?p:0);t.classList.contains(is)||t.classList.toggle(ss,!u),t.classList.toggle(hr,!1),t.classList.contains(hr)||t.classList.toggle(no,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Fn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(Dr.value||((a=lt(n,co))==null?void 0:a.value))return;const r=lt(n,jn),o=lt(n,lo),i=((l=r==null?void 0:r.value)==null?void 0:l.length)||0;r&&!((c=r==null?void 0:r.value)!=null&&c.includes(t))&&r.value.push(t),t==null||t.classList.toggle(Fn,!0),o&&fe(o,()=>{var h;const u=(h=o==null?void 0:o.value)!=null?h:0,d=n.value!=null?u>=n.value:u>i;t.classList.toggle(ss,d),t.classList.toggle(is,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const r=lt(n,jn);r!=null&&r.value&&Na(r.value,t)}})}}}function KP(e,t){const n=Zu(e),r=Qu(t,n.currentRoute,n.currentPage);return{nav:{...n,...r,downloadPDF:Xs,next:on,nextSlide:Ir,openInEditor:xT,prev:sn,prevSlide:Br},configs:ke,themeConfigs:P(()=>ke.themeConfig)}}function GP(){return{install(e){const t=KP(Jt,Ct);e.provide(I,Fe(t))}}}const lr=fp(AT);lr.use(gt);lr.use(xp());lr.use(UP());lr.use(GP());HP({app:lr,router:gt});lr.mount("#app");export{yr as $,me as A,Se as B,et as C,wg as D,JP as E,xe as F,YP as G,Ct as H,Ao as I,bT as J,ps as K,as as L,jr as M,hs as N,gu as O,Dv as P,Ii as Q,kv as R,Bi as S,He as T,ed as U,$g as V,Gu as W,Mt as X,ZP as Y,wt as Z,Uu as _,s as a,ro as a0,Hr as a1,wn as a2,qt as a3,Ys as a4,Z1 as a5,Q1 as a6,X1 as a7,tg as a8,Ci as a9,du as aa,tA as ab,tt as ac,cy as ad,pu as ae,ng as af,Wo as ag,yg as ah,P as b,U as c,Te as d,I as e,dt as f,j as g,b as h,F as i,ug as j,DT as k,ke as l,Ap as m,je as n,k as o,Wr as p,Fe as q,H as r,QP as s,Pn as t,XP as u,eA as v,fe as w,Z as x,nt as y,E as z};
