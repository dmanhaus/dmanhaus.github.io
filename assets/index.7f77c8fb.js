(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Mr(e,t){const n=Object.create(null),o=e.split(",");for(let i=0;i<o.length;i++)n[o[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Kd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=Mr(Kd);function mc(e){return!!e||e===""}function nt(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],i=Ie(o)?Zd(o):nt(o);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Ie(e))return e;if(ze(e))return e}}const Jd=/;(?![^(]*\))/g,Yd=/:(.+)/;function Zd(e){const t={};return e.split(Jd).forEach(n=>{if(n){const o=n.split(Yd);o.length>1&&(t[o[0].trim()]=o[1].trim())}}),t}function je(e){let t="";if(Ie(e))t=e;else if(ie(e))for(let n=0;n<e.length;n++){const o=je(e[n]);o&&(t+=o+" ")}else if(ze(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function X(e){if(!e)return null;let{class:t,style:n}=e;return t&&!Ie(t)&&(e.class=je(t)),n&&(e.style=nt(n)),e}const Qd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Xd=Mr(Qd),An=e=>Ie(e)?e:e==null?"":ie(e)||ze(e)&&(e.toString===vc||!ue(e.toString))?JSON.stringify(e,gc,2):String(e),gc=(e,t)=>t&&t.__v_isRef?gc(e,t.value):Wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[o,i])=>(n[`${o} =>`]=i,n),{})}:yc(t)?{[`Set(${t.size})`]:[...t.values()]}:ze(t)&&!ie(t)&&!wc(t)?String(t):t,Re={},Nn=[],Pt=()=>{},eh=()=>!1,th=/^on[^a-z]/,Er=e=>th.test(e),hs=e=>e.startsWith("onUpdate:"),ot=Object.assign,ps=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},nh=Object.prototype.hasOwnProperty,ye=(e,t)=>nh.call(e,t),ie=Array.isArray,Wn=e=>Fr(e)==="[object Map]",yc=e=>Fr(e)==="[object Set]",ue=e=>typeof e=="function",Ie=e=>typeof e=="string",fs=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",_c=e=>ze(e)&&ue(e.then)&&ue(e.catch),vc=Object.prototype.toString,Fr=e=>vc.call(e),oh=e=>Fr(e).slice(8,-1),wc=e=>Fr(e)==="[object Object]",ms=e=>Ie(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ar=Mr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Or=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},rh=/-(\w)/g,It=Or(e=>e.replace(rh,(t,n)=>n?n.toUpperCase():"")),ih=/\B([A-Z])/g,$n=Or(e=>e.replace(ih,"-$1").toLowerCase()),Lr=Or(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qr=Or(e=>e?`on${Lr(e)}`:""),Ro=(e,t)=>!Object.is(e,t),Hn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},gr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Si=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let aa;const sh=()=>aa||(aa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ut;class bc{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&ut&&(this.parent=ut,this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ut;try{return ut=this,t()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(t){if(this.active){let n,o;for(n=0,o=this.effects.length;n<o;n++)this.effects[n].stop();for(n=0,o=this.cleanups.length;n<o;n++)this.cleanups[n]();if(this.scopes)for(n=0,o=this.scopes.length;n<o;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function ah(e){return new bc(e)}function lh(e,t=ut){t&&t.active&&t.effects.push(e)}function kc(){return ut}function Tc(e){ut&&ut.cleanups.push(e)}const gs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Sc=e=>(e.w&an)>0,xc=e=>(e.n&an)>0,ch=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=an},uh=e=>{const{deps:t}=e;if(t.length){let n=0;for(let o=0;o<t.length;o++){const i=t[o];Sc(i)&&!xc(i)?i.delete(e):t[n++]=i,i.w&=~an,i.n&=~an}t.length=n}},xi=new WeakMap;let vo=0,an=1;const Di=30;let xt;const kn=Symbol(""),Ai=Symbol("");class ys{constructor(t,n=null,o){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,lh(this,o)}run(){if(!this.active)return this.fn();let t=xt,n=tn;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xt,xt=this,tn=!0,an=1<<++vo,vo<=Di?ch(this):la(this),this.fn()}finally{vo<=Di&&uh(this),an=1<<--vo,xt=this.parent,tn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xt===this?this.deferStop=!0:this.active&&(la(this),this.onStop&&this.onStop(),this.active=!1)}}function la(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let tn=!0;const Dc=[];function ro(){Dc.push(tn),tn=!1}function io(){const e=Dc.pop();tn=e===void 0?!0:e}function yt(e,t,n){if(tn&&xt){let o=xi.get(e);o||xi.set(e,o=new Map);let i=o.get(n);i||o.set(n,i=gs()),Ac(i)}}function Ac(e,t){let n=!1;vo<=Di?xc(e)||(e.n|=an,n=!Sc(e)):n=!e.has(xt),n&&(e.add(xt),xt.deps.push(e))}function Ut(e,t,n,o,i,s){const a=xi.get(e);if(!a)return;let l=[];if(t==="clear")l=[...a.values()];else if(n==="length"&&ie(e))a.forEach((c,u)=>{(u==="length"||u>=o)&&l.push(c)});else switch(n!==void 0&&l.push(a.get(n)),t){case"add":ie(e)?ms(n)&&l.push(a.get("length")):(l.push(a.get(kn)),Wn(e)&&l.push(a.get(Ai)));break;case"delete":ie(e)||(l.push(a.get(kn)),Wn(e)&&l.push(a.get(Ai)));break;case"set":Wn(e)&&l.push(a.get(kn));break}if(l.length===1)l[0]&&Pi(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);Pi(gs(c))}}function Pi(e,t){const n=ie(e)?e:[...e];for(const o of n)o.computed&&ca(o);for(const o of n)o.computed||ca(o)}function ca(e,t){(e!==xt||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const dh=Mr("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(fs)),hh=_s(),ph=_s(!1,!0),fh=_s(!0),ua=mh();function mh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const o=be(this);for(let s=0,a=this.length;s<a;s++)yt(o,"get",s+"");const i=o[t](...n);return i===-1||i===!1?o[t](...n.map(be)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){ro();const o=be(this)[t].apply(this,n);return io(),o}}),e}function _s(e=!1,t=!1){return function(o,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?Rh:Ec:t?Mc:Rc).get(o))return o;const a=ie(o);if(!e&&a&&ye(ua,i))return Reflect.get(ua,i,s);const l=Reflect.get(o,i,s);return(fs(i)?Pc.has(i):dh(i))||(e||yt(o,"get",i),t)?l:Te(l)?a&&ms(i)?l:l.value:ze(l)?e?Bn(l):Fe(l):l}}const gh=$c(),yh=$c(!0);function $c(e=!1){return function(n,o,i,s){let a=n[o];if(Qn(a)&&Te(a)&&!Te(i))return!1;if(!e&&(!yr(i)&&!Qn(i)&&(a=be(a),i=be(i)),!ie(n)&&Te(a)&&!Te(i)))return a.value=i,!0;const l=ie(n)&&ms(o)?Number(o)<n.length:ye(n,o),c=Reflect.set(n,o,i,s);return n===be(s)&&(l?Ro(i,a)&&Ut(n,"set",o,i):Ut(n,"add",o,i)),c}}function _h(e,t){const n=ye(e,t);e[t];const o=Reflect.deleteProperty(e,t);return o&&n&&Ut(e,"delete",t,void 0),o}function vh(e,t){const n=Reflect.has(e,t);return(!fs(t)||!Pc.has(t))&&yt(e,"has",t),n}function wh(e){return yt(e,"iterate",ie(e)?"length":kn),Reflect.ownKeys(e)}const Cc={get:hh,set:gh,deleteProperty:_h,has:vh,ownKeys:wh},bh={get:fh,set(e,t){return!0},deleteProperty(e,t){return!0}},kh=ot({},Cc,{get:ph,set:yh}),vs=e=>e,zr=e=>Reflect.getPrototypeOf(e);function Zo(e,t,n=!1,o=!1){e=e.__v_raw;const i=be(e),s=be(t);n||(t!==s&&yt(i,"get",t),yt(i,"get",s));const{has:a}=zr(i),l=o?vs:n?ks:Mo;if(a.call(i,t))return l(e.get(t));if(a.call(i,s))return l(e.get(s));e!==i&&e.get(t)}function Qo(e,t=!1){const n=this.__v_raw,o=be(n),i=be(e);return t||(e!==i&&yt(o,"has",e),yt(o,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Xo(e,t=!1){return e=e.__v_raw,!t&&yt(be(e),"iterate",kn),Reflect.get(e,"size",e)}function da(e){e=be(e);const t=be(this);return zr(t).has.call(t,e)||(t.add(e),Ut(t,"add",e,e)),this}function ha(e,t){t=be(t);const n=be(this),{has:o,get:i}=zr(n);let s=o.call(n,e);s||(e=be(e),s=o.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Ro(t,a)&&Ut(n,"set",e,t):Ut(n,"add",e,t),this}function pa(e){const t=be(this),{has:n,get:o}=zr(t);let i=n.call(t,e);i||(e=be(e),i=n.call(t,e)),o&&o.call(t,e);const s=t.delete(e);return i&&Ut(t,"delete",e,void 0),s}function fa(){const e=be(this),t=e.size!==0,n=e.clear();return t&&Ut(e,"clear",void 0,void 0),n}function er(e,t){return function(o,i){const s=this,a=s.__v_raw,l=be(a),c=t?vs:e?ks:Mo;return!e&&yt(l,"iterate",kn),a.forEach((u,d)=>o.call(i,c(u),c(d),s))}}function tr(e,t,n){return function(...o){const i=this.__v_raw,s=be(i),a=Wn(s),l=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,u=i[e](...o),d=n?vs:t?ks:Mo;return!t&&yt(s,"iterate",c?Ai:kn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:l?[d(p[0]),d(p[1])]:d(p),done:f}},[Symbol.iterator](){return this}}}}function Yt(e){return function(...t){return e==="delete"?!1:this}}function Th(){const e={get(s){return Zo(this,s)},get size(){return Xo(this)},has:Qo,add:da,set:ha,delete:pa,clear:fa,forEach:er(!1,!1)},t={get(s){return Zo(this,s,!1,!0)},get size(){return Xo(this)},has:Qo,add:da,set:ha,delete:pa,clear:fa,forEach:er(!1,!0)},n={get(s){return Zo(this,s,!0)},get size(){return Xo(this,!0)},has(s){return Qo.call(this,s,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:er(!0,!1)},o={get(s){return Zo(this,s,!0,!0)},get size(){return Xo(this,!0)},has(s){return Qo.call(this,s,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:er(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=tr(s,!1,!1),n[s]=tr(s,!0,!1),t[s]=tr(s,!1,!0),o[s]=tr(s,!0,!0)}),[e,n,t,o]}const[Sh,xh,Dh,Ah]=Th();function ws(e,t){const n=t?e?Ah:Dh:e?xh:Sh;return(o,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(ye(n,i)&&i in o?n:o,i,s)}const Ph={get:ws(!1,!1)},$h={get:ws(!1,!0)},Ch={get:ws(!0,!1)},Rc=new WeakMap,Mc=new WeakMap,Ec=new WeakMap,Rh=new WeakMap;function Mh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Eh(e){return e.__v_skip||!Object.isExtensible(e)?0:Mh(oh(e))}function Fe(e){return Qn(e)?e:bs(e,!1,Cc,Ph,Rc)}function Fh(e){return bs(e,!1,kh,$h,Mc)}function Bn(e){return bs(e,!0,bh,Ch,Ec)}function bs(e,t,n,o,i){if(!ze(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Eh(e);if(a===0)return e;const l=new Proxy(e,a===2?o:n);return i.set(e,l),l}function Un(e){return Qn(e)?Un(e.__v_raw):!!(e&&e.__v_isReactive)}function Qn(e){return!!(e&&e.__v_isReadonly)}function yr(e){return!!(e&&e.__v_isShallow)}function Fc(e){return Un(e)||Qn(e)}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function jr(e){return gr(e,"__v_skip",!0),e}const Mo=e=>ze(e)?Fe(e):e,ks=e=>ze(e)?Bn(e):e;function Ts(e){tn&&xt&&(e=be(e),Ac(e.dep||(e.dep=gs())))}function Ss(e,t){e=be(e),e.dep&&Pi(e.dep)}function Te(e){return!!(e&&e.__v_isRef===!0)}function U(e){return Oc(e,!1)}function Rt(e){return Oc(e,!0)}function Oc(e,t){return Te(e)?e:new Oh(e,t)}class Oh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:be(t),this._value=n?t:Mo(t)}get value(){return Ts(this),this._value}set value(t){const n=this.__v_isShallow||yr(t)||Qn(t);t=n?t:be(t),Ro(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Mo(t),Ss(this))}}function b(e){return Te(e)?e.value:e}const Lh={get:(e,t,n)=>b(Reflect.get(e,t,n)),set:(e,t,n,o)=>{const i=e[t];return Te(i)&&!Te(n)?(i.value=n,!0):Reflect.set(e,t,n,o)}};function Lc(e){return Un(e)?e:new Proxy(e,Lh)}class zh{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:o}=t(()=>Ts(this),()=>Ss(this));this._get=n,this._set=o}get value(){return this._get()}set value(t){this._set(t)}}function zc(e){return new zh(e)}function jh(e){const t=ie(e)?new Array(e.length):{};for(const n in e)t[n]=Ih(e,n);return t}class qh{constructor(t,n,o){this._object=t,this._key=n,this._defaultValue=o,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function Ih(e,t,n){const o=e[t];return Te(o)?o:new qh(e,t,n)}var jc;class Bh{constructor(t,n,o,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jc]=!1,this._dirty=!0,this.effect=new ys(t,()=>{this._dirty||(this._dirty=!0,Ss(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const t=be(this);return Ts(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}jc="__v_isReadonly";function Vh(e,t,n=!1){let o,i;const s=ue(e);return s?(o=e,i=Pt):(o=e.get,i=e.set),new Bh(o,i,s||!i,n)}function nn(e,t,n,o){let i;try{i=o?e(...o):e()}catch(s){qr(s,t,n)}return i}function $t(e,t,n,o){if(ue(e)){const s=nn(e,t,n,o);return s&&_c(s)&&s.catch(a=>{qr(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push($t(e[s],t,n,o));return i}function qr(e,t,n,o=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,l=n;for(;s;){const u=s.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,a,l)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){nn(c,null,10,[e,a,l]);return}}Nh(e,n,i,o)}function Nh(e,t,n,o=!0){console.error(e)}let Eo=!1,$i=!1;const Je=[];let Lt=0;const Kn=[];let Nt=null,gn=0;const qc=Promise.resolve();let xs=null;function Ye(e){const t=xs||qc;return e?t.then(this?e.bind(this):e):t}function Wh(e){let t=Lt+1,n=Je.length;for(;t<n;){const o=t+n>>>1;Fo(Je[o])<e?t=o+1:n=o}return t}function Ds(e){(!Je.length||!Je.includes(e,Eo&&e.allowRecurse?Lt+1:Lt))&&(e.id==null?Je.push(e):Je.splice(Wh(e.id),0,e),Ic())}function Ic(){!Eo&&!$i&&($i=!0,xs=qc.then(Vc))}function Hh(e){const t=Je.indexOf(e);t>Lt&&Je.splice(t,1)}function Uh(e){ie(e)?Kn.push(...e):(!Nt||!Nt.includes(e,e.allowRecurse?gn+1:gn))&&Kn.push(e),Ic()}function ma(e,t=Eo?Lt+1:0){for(;t<Je.length;t++){const n=Je[t];n&&n.pre&&(Je.splice(t,1),t--,n())}}function Bc(e){if(Kn.length){const t=[...new Set(Kn)];if(Kn.length=0,Nt){Nt.push(...t);return}for(Nt=t,Nt.sort((n,o)=>Fo(n)-Fo(o)),gn=0;gn<Nt.length;gn++)Nt[gn]();Nt=null,gn=0}}const Fo=e=>e.id==null?1/0:e.id,Kh=(e,t)=>{const n=Fo(e)-Fo(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Vc(e){$i=!1,Eo=!0,Je.sort(Kh);const t=Pt;try{for(Lt=0;Lt<Je.length;Lt++){const n=Je[Lt];n&&n.active!==!1&&nn(n,null,14)}}finally{Lt=0,Je.length=0,Bc(),Eo=!1,xs=null,(Je.length||Kn.length)&&Vc()}}function Gh(e,t,...n){if(e.isUnmounted)return;const o=e.vnode.props||Re;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:f}=o[d]||Re;f&&(i=n.map(m=>m.trim())),p&&(i=n.map(Si))}let l,c=o[l=Qr(t)]||o[l=Qr(It(t))];!c&&s&&(c=o[l=Qr($n(t))]),c&&$t(c,e,6,i);const u=o[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,$t(u,e,6,i)}}function Nc(e,t,n=!1){const o=t.emitsCache,i=o.get(e);if(i!==void 0)return i;const s=e.emits;let a={},l=!1;if(!ue(e)){const c=u=>{const d=Nc(u,t,!0);d&&(l=!0,ot(a,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!l?(ze(e)&&o.set(e,null),null):(ie(s)?s.forEach(c=>a[c]=null):ot(a,s),ze(e)&&o.set(e,a),a)}function Ir(e,t){return!e||!Er(t)?!1:(t=t.slice(2).replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,$n(t))||ye(e,t))}let Ze=null,Br=null;function _r(e){const t=Ze;return Ze=e,Br=e&&e.type.__scopeId||null,t}function fC(e){Br=e}function mC(){Br=null}function A(e,t=Ze,n){if(!t||e._n)return e;const o=(...i)=>{o._d&&Da(-1);const s=_r(t),a=e(...i);return _r(s),o._d&&Da(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function Xr(e){const{type:t,vnode:n,proxy:o,withProxy:i,props:s,propsOptions:[a],slots:l,attrs:c,emit:u,render:d,renderCache:p,data:f,setupState:m,ctx:g,inheritAttrs:w}=e;let v,D;const S=_r(e);try{if(n.shapeFlag&4){const $=i||o;v=Ot(d.call($,$,p,s,m,f,g)),D=c}else{const $=t;v=Ot($.length>1?$(s,{attrs:c,slots:l,emit:u}):$(s,null)),D=t.props?c:Jh(c)}}catch($){ko.length=0,qr($,e,1),v=I(ln)}let x=v;if(D&&w!==!1){const $=Object.keys(D),{shapeFlag:q}=x;$.length&&q&7&&(a&&$.some(hs)&&(D=Yh(D,a)),x=Pn(x,D))}return n.dirs&&(x=Pn(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),v=x,_r(S),v}const Jh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Er(n))&&((t||(t={}))[n]=e[n]);return t},Yh=(e,t)=>{const n={};for(const o in e)(!hs(o)||!(o.slice(9)in t))&&(n[o]=e[o]);return n};function Zh(e,t,n){const{props:o,children:i,component:s}=e,{props:a,children:l,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return o?ga(o,a,u):!!a;if(c&8){const d=t.dynamicProps;for(let p=0;p<d.length;p++){const f=d[p];if(a[f]!==o[f]&&!Ir(u,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:o===a?!1:o?a?ga(o,a,u):!0:!!a;return!1}function ga(e,t,n){const o=Object.keys(t);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const s=o[i];if(t[s]!==e[s]&&!Ir(n,s))return!0}return!1}function Qh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Wc=e=>e.__isSuspense;function Xh(e,t){t&&t.pendingBranch?ie(e)?t.effects.push(...e):t.effects.push(e):Uh(e)}function ht(e,t){if(Ue){let n=Ue.provides;const o=Ue.parent&&Ue.parent.provides;o===n&&(n=Ue.provides=Object.create(o)),n[e]=t}}function F(e,t,n=!1){const o=Ue||Ze;if(o){const i=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ue(t)?t.call(o.proxy):t}}function Vr(e,t){return As(e,null,t)}const ya={};function pe(e,t,n){return As(e,t,n)}function As(e,t,{immediate:n,deep:o,flush:i,onTrack:s,onTrigger:a}=Re){const l=Ue;let c,u=!1,d=!1;if(Te(e)?(c=()=>e.value,u=yr(e)):Un(e)?(c=()=>e,o=!0):ie(e)?(d=!0,u=e.some(D=>Un(D)||yr(D)),c=()=>e.map(D=>{if(Te(D))return D.value;if(Un(D))return _n(D);if(ue(D))return nn(D,l,2)})):ue(e)?t?c=()=>nn(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),$t(e,l,3,[f])}:c=Pt,t&&o){const D=c;c=()=>_n(D())}let p,f=D=>{p=v.onStop=()=>{nn(D,l,4)}};if(zo)return f=Pt,t?n&&$t(t,l,3,[c(),d?[]:void 0,f]):c(),Pt;let m=d?[]:ya;const g=()=>{if(!!v.active)if(t){const D=v.run();(o||u||(d?D.some((S,x)=>Ro(S,m[x])):Ro(D,m)))&&(p&&p(),$t(t,l,3,[D,m===ya?void 0:m,f]),m=D)}else v.run()};g.allowRecurse=!!t;let w;i==="sync"?w=g:i==="post"?w=()=>Ke(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),w=()=>Ds(g));const v=new ys(c,w);return t?n?g():m=v.run():i==="post"?Ke(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&ps(l.scope.effects,v)}}function ep(e,t,n){const o=this.proxy,i=Ie(e)?e.includes(".")?Hc(o,e):()=>o[e]:e.bind(o,o);let s;ue(t)?s=t:(s=t.handler,n=t);const a=Ue;eo(this);const l=As(i,s.bind(o),n);return a?eo(a):Tn(),l}function Hc(e,t){const n=t.split(".");return()=>{let o=e;for(let i=0;i<n.length&&o;i++)o=o[n[i]];return o}}function _n(e,t){if(!ze(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Te(e))_n(e.value,t);else if(ie(e))for(let n=0;n<e.length;n++)_n(e[n],t);else if(yc(e)||Wn(e))e.forEach(n=>{_n(n,t)});else if(wc(e))for(const n in e)_n(e[n],t);return e}function Uc(e,t){e.shapeFlag&6&&e.component?Uc(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Se(e){return ue(e)?{setup:e,name:e.name}:e}const Gn=e=>!!e.type.__asyncLoader,Kc=e=>e.type.__isKeepAlive,tp={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Cn(),o=n.ctx;if(!o.renderer)return()=>{const S=t.default&&t.default();return S&&S.length===1?S[0]:S};const i=new Map,s=new Set;let a=null;const l=n.suspense,{renderer:{p:c,m:u,um:d,o:{createElement:p}}}=o,f=p("div");o.activate=(S,x,$,q,O)=>{const W=S.component;u(S,x,$,0,l),c(W.vnode,S,x,$,W,l,q,S.slotScopeIds,O),Ke(()=>{W.isDeactivated=!1,W.a&&Hn(W.a);const ne=S.props&&S.props.onVnodeMounted;ne&&_t(ne,W.parent,S)},l)},o.deactivate=S=>{const x=S.component;u(S,f,null,1,l),Ke(()=>{x.da&&Hn(x.da);const $=S.props&&S.props.onVnodeUnmounted;$&&_t($,x.parent,S),x.isDeactivated=!0},l)};function m(S){ei(S),d(S,n,l,!0)}function g(S){i.forEach((x,$)=>{const q=Li(x.type);q&&(!S||!S(q))&&w($)})}function w(S){const x=i.get(S);!a||x.type!==a.type?m(x):a&&ei(a),i.delete(S),s.delete(S)}pe(()=>[e.include,e.exclude],([S,x])=>{S&&g($=>wo(S,$)),x&&g($=>!wo(x,$))},{flush:"post",deep:!0});let v=null;const D=()=>{v!=null&&i.set(v,ti(n.subTree))};return Ho(D),Ps(D),Wr(()=>{i.forEach(S=>{const{subTree:x,suspense:$}=n,q=ti(x);if(S.type===q.type){ei(q);const O=q.component.da;O&&Ke(O,$);return}m(S)})}),()=>{if(v=null,!t.default)return null;const S=t.default(),x=S[0];if(S.length>1)return a=null,S;if(!Xn(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return a=null,x;let $=ti(x);const q=$.type,O=Li(Gn($)?$.type.__asyncResolved||{}:q),{include:W,exclude:ne,max:ae}=e;if(W&&(!O||!wo(W,O))||ne&&O&&wo(ne,O))return a=$,x;const ge=$.key==null?q:$.key,_e=i.get(ge);return $.el&&($=Pn($),x.shapeFlag&128&&(x.ssContent=$)),v=ge,_e?($.el=_e.el,$.component=_e.component,$.transition&&Uc($,$.transition),$.shapeFlag|=512,s.delete(ge),s.add(ge)):(s.add(ge),ae&&s.size>parseInt(ae,10)&&w(s.values().next().value)),$.shapeFlag|=256,a=$,Wc(x.type)?x:$}}},Gc=tp;function wo(e,t){return ie(e)?e.some(n=>wo(n,t)):Ie(e)?e.split(",").includes(t):e.test?e.test(t):!1}function np(e,t){Jc(e,"a",t)}function op(e,t){Jc(e,"da",t)}function Jc(e,t,n=Ue){const o=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Nr(t,o,n),n){let i=n.parent;for(;i&&i.parent;)Kc(i.parent.vnode)&&rp(o,t,n,i),i=i.parent}}function rp(e,t,n,o){const i=Nr(t,e,o,!0);$s(()=>{ps(o[t],i)},n)}function ei(e){let t=e.shapeFlag;t&256&&(t-=256),t&512&&(t-=512),e.shapeFlag=t}function ti(e){return e.shapeFlag&128?e.ssContent:e}function Nr(e,t,n=Ue,o=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;ro(),eo(n);const l=$t(t,n,e,a);return Tn(),io(),l});return o?i.unshift(s):i.push(s),s}}const Gt=e=>(t,n=Ue)=>(!zo||e==="sp")&&Nr(e,t,n),Yc=Gt("bm"),Ho=Gt("m"),ip=Gt("bu"),Ps=Gt("u"),Wr=Gt("bum"),$s=Gt("um"),sp=Gt("sp"),ap=Gt("rtg"),lp=Gt("rtc");function cp(e,t=Ue){Nr("ec",e,t)}function Cs(e,t){const n=Ze;if(n===null)return e;const o=Ur(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,l,c,u=Re]=t[s];ue(a)&&(a={mounted:a,updated:a}),a.deep&&_n(l),i.push({dir:a,instance:o,value:l,oldValue:void 0,arg:c,modifiers:u})}return e}function dn(e,t,n,o){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const l=i[a];s&&(l.oldValue=s[a].value);let c=l.dir[o];c&&(ro(),$t(c,n,8,[e.el,l,e,t]),io())}}const Zc="components";function Oo(e,t){return dp(Zc,e,!0,t)||e}const up=Symbol();function dp(e,t,n=!0,o=!1){const i=Ze||Ue;if(i){const s=i.type;if(e===Zc){const l=Li(s,!1);if(l&&(l===t||l===It(t)||l===Lr(It(t))))return s}const a=_a(i[e]||s[e],t)||_a(i.appContext[e],t);return!a&&o?s:a}}function _a(e,t){return e&&(e[t]||e[It(t)]||e[Lr(It(t))])}function Uo(e,t,n,o){let i;const s=n&&n[o];if(ie(e)||Ie(e)){i=new Array(e.length);for(let a=0,l=e.length;a<l;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(ze(e))if(e[Symbol.iterator])i=Array.from(e,(a,l)=>t(a,l,void 0,s&&s[l]));else{const a=Object.keys(e);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=t(e[u],u,l,s&&s[l])}}else i=[];return n&&(n[o]=i),i}function wt(e,t,n={},o,i){if(Ze.isCE||Ze.parent&&Gn(Ze.parent)&&Ze.parent.isCE)return I("slot",t==="default"?null:{name:t},o&&o());let s=e[t];s&&s._c&&(s._d=!1),k();const a=s&&Qc(s(n)),l=j(De,{key:n.key||a&&a.key||`_${t}`},a||(o?o():[]),a&&e._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Qc(e){return e.some(t=>Xn(t)?!(t.type===ln||t.type===De&&!Qc(t.children)):!0)?e:null}const Ci=e=>e?lu(e)?Ur(e)||e.proxy:Ci(e.parent):null,vr=ot(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ci(e.parent),$root:e=>Ci(e.root),$emit:e=>e.emit,$options:e=>Rs(e),$forceUpdate:e=>e.f||(e.f=()=>Ds(e.update)),$nextTick:e=>e.n||(e.n=Ye.bind(e.proxy)),$watch:e=>ep.bind(e)}),hp={get({_:e},t){const{ctx:n,setupState:o,data:i,props:s,accessCache:a,type:l,appContext:c}=e;let u;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return o[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(o!==Re&&ye(o,t))return a[t]=1,o[t];if(i!==Re&&ye(i,t))return a[t]=2,i[t];if((u=e.propsOptions[0])&&ye(u,t))return a[t]=3,s[t];if(n!==Re&&ye(n,t))return a[t]=4,n[t];Ri&&(a[t]=0)}}const d=vr[t];let p,f;if(d)return t==="$attrs"&&yt(e,"get",t),d(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(n!==Re&&ye(n,t))return a[t]=4,n[t];if(f=c.config.globalProperties,ye(f,t))return f[t]},set({_:e},t,n){const{data:o,setupState:i,ctx:s}=e;return i!==Re&&ye(i,t)?(i[t]=n,!0):o!==Re&&ye(o,t)?(o[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:o,appContext:i,propsOptions:s}},a){let l;return!!n[a]||e!==Re&&ye(e,a)||t!==Re&&ye(t,a)||(l=s[0])&&ye(l,a)||ye(o,a)||ye(vr,a)||ye(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ri=!0;function pp(e){const t=Rs(e),n=e.proxy,o=e.ctx;Ri=!1,t.beforeCreate&&va(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:f,beforeUpdate:m,updated:g,activated:w,deactivated:v,beforeDestroy:D,beforeUnmount:S,destroyed:x,unmounted:$,render:q,renderTracked:O,renderTriggered:W,errorCaptured:ne,serverPrefetch:ae,expose:ge,inheritAttrs:_e,components:Be,directives:Ve,filters:qe}=t;if(u&&fp(u,o,null,e.appContext.config.unwrapInjectedRef),a)for(const J in a){const re=a[J];ue(re)&&(o[J]=re.bind(n))}if(i){const J=i.call(n,n);ze(J)&&(e.data=Fe(J))}if(Ri=!0,s)for(const J in s){const re=s[J],he=ue(re)?re.bind(n,n):ue(re.get)?re.get.bind(n,n):Pt,Ae=!ue(re)&&ue(re.set)?re.set.bind(n):Pt,st=P({get:he,set:Ae});Object.defineProperty(o,J,{enumerable:!0,configurable:!0,get:()=>st.value,set:Ge=>st.value=Ge})}if(l)for(const J in l)Xc(l[J],o,n,J);if(c){const J=ue(c)?c.call(n):c;Reflect.ownKeys(J).forEach(re=>{ht(re,J[re])})}d&&va(d,e,"c");function Le(J,re){ie(re)?re.forEach(he=>J(he.bind(n))):re&&J(re.bind(n))}if(Le(Yc,p),Le(Ho,f),Le(ip,m),Le(Ps,g),Le(np,w),Le(op,v),Le(cp,ne),Le(lp,O),Le(ap,W),Le(Wr,S),Le($s,$),Le(sp,ae),ie(ge))if(ge.length){const J=e.exposed||(e.exposed={});ge.forEach(re=>{Object.defineProperty(J,re,{get:()=>n[re],set:he=>n[re]=he})})}else e.exposed||(e.exposed={});q&&e.render===Pt&&(e.render=q),_e!=null&&(e.inheritAttrs=_e),Be&&(e.components=Be),Ve&&(e.directives=Ve)}function fp(e,t,n=Pt,o=!1){ie(e)&&(e=Mi(e));for(const i in e){const s=e[i];let a;ze(s)?"default"in s?a=F(s.from||i,s.default,!0):a=F(s.from||i):a=F(s),Te(a)&&o?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:l=>a.value=l}):t[i]=a}}function va(e,t,n){$t(ie(e)?e.map(o=>o.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xc(e,t,n,o){const i=o.includes(".")?Hc(n,o):()=>n[o];if(Ie(e)){const s=t[e];ue(s)&&pe(i,s)}else if(ue(e))pe(i,e.bind(n));else if(ze(e))if(ie(e))e.forEach(s=>Xc(s,t,n,o));else{const s=ue(e.handler)?e.handler.bind(n):t[e.handler];ue(s)&&pe(i,s,e)}}function Rs(e){const t=e.type,{mixins:n,extends:o}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,l=s.get(t);let c;return l?c=l:!i.length&&!n&&!o?c=t:(c={},i.length&&i.forEach(u=>wr(c,u,a,!0)),wr(c,t,a)),ze(t)&&s.set(t,c),c}function wr(e,t,n,o=!1){const{mixins:i,extends:s}=t;s&&wr(e,s,n,!0),i&&i.forEach(a=>wr(e,a,n,!0));for(const a in t)if(!(o&&a==="expose")){const l=mp[a]||n&&n[a];e[a]=l?l(e[a],t[a]):t[a]}return e}const mp={data:wa,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:mn,directives:mn,watch:yp,provide:wa,inject:gp};function wa(e,t){return t?e?function(){return ot(ue(e)?e.call(this,this):e,ue(t)?t.call(this,this):t)}:t:e}function gp(e,t){return mn(Mi(e),Mi(t))}function Mi(e){if(ie(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xe(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?ot(ot(Object.create(null),e),t):t}function yp(e,t){if(!e)return t;if(!t)return e;const n=ot(Object.create(null),e);for(const o in t)n[o]=Xe(e[o],t[o]);return n}function _p(e,t,n,o=!1){const i={},s={};gr(s,Hr,1),e.propsDefaults=Object.create(null),eu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=o?i:Fh(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function vp(e,t,n,o){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,l=be(i),[c]=e.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let p=0;p<d.length;p++){let f=d[p];if(Ir(e.emitsOptions,f))continue;const m=t[f];if(c)if(ye(s,f))m!==s[f]&&(s[f]=m,u=!0);else{const g=It(f);i[g]=Ei(c,l,g,m,e,!1)}else m!==s[f]&&(s[f]=m,u=!0)}}}else{eu(e,t,i,s)&&(u=!0);let d;for(const p in l)(!t||!ye(t,p)&&((d=$n(p))===p||!ye(t,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(i[p]=Ei(c,l,p,void 0,e,!0)):delete i[p]);if(s!==l)for(const p in s)(!t||!ye(t,p)&&!0)&&(delete s[p],u=!0)}u&&Ut(e,"set","$attrs")}function eu(e,t,n,o){const[i,s]=e.propsOptions;let a=!1,l;if(t)for(let c in t){if(ar(c))continue;const u=t[c];let d;i&&ye(i,d=It(c))?!s||!s.includes(d)?n[d]=u:(l||(l={}))[d]=u:Ir(e.emitsOptions,c)||(!(c in o)||u!==o[c])&&(o[c]=u,a=!0)}if(s){const c=be(n),u=l||Re;for(let d=0;d<s.length;d++){const p=s[d];n[p]=Ei(i,c,p,u[p],e,!ye(u,p))}}return a}function Ei(e,t,n,o,i,s){const a=e[n];if(a!=null){const l=ye(a,"default");if(l&&o===void 0){const c=a.default;if(a.type!==Function&&ue(c)){const{propsDefaults:u}=i;n in u?o=u[n]:(eo(i),o=u[n]=c.call(null,t),Tn())}else o=c}a[0]&&(s&&!l?o=!1:a[1]&&(o===""||o===$n(n))&&(o=!0))}return o}function tu(e,t,n=!1){const o=t.propsCache,i=o.get(e);if(i)return i;const s=e.props,a={},l=[];let c=!1;if(!ue(e)){const d=p=>{c=!0;const[f,m]=tu(p,t,!0);ot(a,f),m&&l.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!s&&!c)return ze(e)&&o.set(e,Nn),Nn;if(ie(s))for(let d=0;d<s.length;d++){const p=It(s[d]);ba(p)&&(a[p]=Re)}else if(s)for(const d in s){const p=It(d);if(ba(p)){const f=s[d],m=a[p]=ie(f)||ue(f)?{type:f}:f;if(m){const g=Sa(Boolean,m.type),w=Sa(String,m.type);m[0]=g>-1,m[1]=w<0||g<w,(g>-1||ye(m,"default"))&&l.push(p)}}}const u=[a,l];return ze(e)&&o.set(e,u),u}function ba(e){return e[0]!=="$"}function ka(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ta(e,t){return ka(e)===ka(t)}function Sa(e,t){return ie(t)?t.findIndex(n=>Ta(n,e)):ue(t)&&Ta(t,e)?0:-1}const nu=e=>e[0]==="_"||e==="$stable",Ms=e=>ie(e)?e.map(Ot):[Ot(e)],wp=(e,t,n)=>{if(t._n)return t;const o=A((...i)=>Ms(t(...i)),n);return o._c=!1,o},ou=(e,t,n)=>{const o=e._ctx;for(const i in e){if(nu(i))continue;const s=e[i];if(ue(s))t[i]=wp(i,s,o);else if(s!=null){const a=Ms(s);t[i]=()=>a}}},ru=(e,t)=>{const n=Ms(t);e.slots.default=()=>n},bp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=be(t),gr(t,"_",n)):ou(t,e.slots={})}else e.slots={},t&&ru(e,t);gr(e.slots,Hr,1)},kp=(e,t,n)=>{const{vnode:o,slots:i}=e;let s=!0,a=Re;if(o.shapeFlag&32){const l=t._;l?n&&l===1?s=!1:(ot(i,t),!n&&l===1&&delete i._):(s=!t.$stable,ou(t,i)),a=t}else t&&(ru(e,t),a={default:1});if(s)for(const l in i)!nu(l)&&!(l in a)&&delete i[l]};function iu(){return{app:null,config:{isNativeTag:eh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tp=0;function Sp(e,t){return function(o,i=null){ue(o)||(o=Object.assign({},o)),i!=null&&!ze(i)&&(i=null);const s=iu(),a=new Set;let l=!1;const c=s.app={_uid:Tp++,_component:o,_props:i,_container:null,_context:s,_instance:null,version:Np,get config(){return s.config},set config(u){},use(u,...d){return a.has(u)||(u&&ue(u.install)?(a.add(u),u.install(c,...d)):ue(u)&&(a.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,p){if(!l){const f=I(o,i);return f.appContext=s,d&&t?t(f,u):e(f,u,p),l=!0,c._container=u,u.__vue_app__=c,Ur(f.component)||f.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c}};return c}}function Fi(e,t,n,o,i=!1){if(ie(e)){e.forEach((f,m)=>Fi(f,t&&(ie(t)?t[m]:t),n,o,i));return}if(Gn(o)&&!i)return;const s=o.shapeFlag&4?Ur(o.component)||o.component.proxy:o.el,a=i?null:s,{i:l,r:c}=e,u=t&&t.r,d=l.refs===Re?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(Ie(u)?(d[u]=null,ye(p,u)&&(p[u]=null)):Te(u)&&(u.value=null)),ue(c))nn(c,l,12,[a,d]);else{const f=Ie(c),m=Te(c);if(f||m){const g=()=>{if(e.f){const w=f?d[c]:c.value;i?ie(w)&&ps(w,s):ie(w)?w.includes(s)||w.push(s):f?(d[c]=[s],ye(p,c)&&(p[c]=d[c])):(c.value=[s],e.k&&(d[e.k]=c.value))}else f?(d[c]=a,ye(p,c)&&(p[c]=a)):m&&(c.value=a,e.k&&(d[e.k]=a))};a?(g.id=-1,Ke(g,n)):g()}}}const Ke=Xh;function xp(e){return Dp(e)}function Dp(e,t){const n=sh();n.__VUE__=!0;const{insert:o,remove:i,patchProp:s,createElement:a,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:f,setScopeId:m=Pt,cloneNode:g,insertStaticContent:w}=e,v=(y,_,T,M=null,R=null,z=null,H=!1,L=null,N=!!_.dynamicChildren)=>{if(y===_)return;y&&!uo(y,_)&&(M=Z(y),rt(y,R,z,!0),y=null),_.patchFlag===-2&&(N=!1,_.dynamicChildren=null);const{type:E,ref:ee,shapeFlag:Y}=_;switch(E){case Fs:D(y,_,T,M);break;case ln:S(y,_,T,M);break;case ni:y==null&&x(_,T,M,H);break;case De:Ve(y,_,T,M,R,z,H,L,N);break;default:Y&1?O(y,_,T,M,R,z,H,L,N):Y&6?qe(y,_,T,M,R,z,H,L,N):(Y&64||Y&128)&&E.process(y,_,T,M,R,z,H,L,N,fe)}ee!=null&&R&&Fi(ee,y&&y.ref,z,_||y,!_)},D=(y,_,T,M)=>{if(y==null)o(_.el=l(_.children),T,M);else{const R=_.el=y.el;_.children!==y.children&&u(R,_.children)}},S=(y,_,T,M)=>{y==null?o(_.el=c(_.children||""),T,M):_.el=y.el},x=(y,_,T,M)=>{[y.el,y.anchor]=w(y.children,_,T,M,y.el,y.anchor)},$=({el:y,anchor:_},T,M)=>{let R;for(;y&&y!==_;)R=f(y),o(y,T,M),y=R;o(_,T,M)},q=({el:y,anchor:_})=>{let T;for(;y&&y!==_;)T=f(y),i(y),y=T;i(_)},O=(y,_,T,M,R,z,H,L,N)=>{H=H||_.type==="svg",y==null?W(_,T,M,R,z,H,L,N):ge(y,_,R,z,H,L,N)},W=(y,_,T,M,R,z,H,L)=>{let N,E;const{type:ee,props:Y,shapeFlag:te,transition:se,patchFlag:ve,dirs:$e}=y;if(y.el&&g!==void 0&&ve===-1)N=y.el=g(y.el);else{if(N=y.el=a(y.type,z,Y&&Y.is,Y),te&8?d(N,y.children):te&16&&ae(y.children,N,null,M,R,z&&ee!=="foreignObject",H,L),$e&&dn(y,null,M,"created"),Y){for(const Ee in Y)Ee!=="value"&&!ar(Ee)&&s(N,Ee,null,Y[Ee],z,y.children,M,R,V);"value"in Y&&s(N,"value",null,Y.value),(E=Y.onVnodeBeforeMount)&&_t(E,M,y)}ne(N,y,y.scopeId,H,M)}$e&&dn(y,null,M,"beforeMount");const Ce=(!R||R&&!R.pendingBranch)&&se&&!se.persisted;Ce&&se.beforeEnter(N),o(N,_,T),((E=Y&&Y.onVnodeMounted)||Ce||$e)&&Ke(()=>{E&&_t(E,M,y),Ce&&se.enter(N),$e&&dn(y,null,M,"mounted")},R)},ne=(y,_,T,M,R)=>{if(T&&m(y,T),M)for(let z=0;z<M.length;z++)m(y,M[z]);if(R){let z=R.subTree;if(_===z){const H=R.vnode;ne(y,H,H.scopeId,H.slotScopeIds,R.parent)}}},ae=(y,_,T,M,R,z,H,L,N=0)=>{for(let E=N;E<y.length;E++){const ee=y[E]=L?Qt(y[E]):Ot(y[E]);v(null,ee,_,T,M,R,z,H,L)}},ge=(y,_,T,M,R,z,H)=>{const L=_.el=y.el;let{patchFlag:N,dynamicChildren:E,dirs:ee}=_;N|=y.patchFlag&16;const Y=y.props||Re,te=_.props||Re;let se;T&&hn(T,!1),(se=te.onVnodeBeforeUpdate)&&_t(se,T,_,y),ee&&dn(_,y,T,"beforeUpdate"),T&&hn(T,!0);const ve=R&&_.type!=="foreignObject";if(E?_e(y.dynamicChildren,E,L,T,M,ve,z):H||he(y,_,L,null,T,M,ve,z,!1),N>0){if(N&16)Be(L,_,Y,te,T,M,R);else if(N&2&&Y.class!==te.class&&s(L,"class",null,te.class,R),N&4&&s(L,"style",Y.style,te.style,R),N&8){const $e=_.dynamicProps;for(let Ce=0;Ce<$e.length;Ce++){const Ee=$e[Ce],kt=Y[Ee],En=te[Ee];(En!==kt||Ee==="value")&&s(L,Ee,kt,En,R,y.children,T,M,V)}}N&1&&y.children!==_.children&&d(L,_.children)}else!H&&E==null&&Be(L,_,Y,te,T,M,R);((se=te.onVnodeUpdated)||ee)&&Ke(()=>{se&&_t(se,T,_,y),ee&&dn(_,y,T,"updated")},M)},_e=(y,_,T,M,R,z,H)=>{for(let L=0;L<_.length;L++){const N=y[L],E=_[L],ee=N.el&&(N.type===De||!uo(N,E)||N.shapeFlag&70)?p(N.el):T;v(N,E,ee,null,M,R,z,H,!0)}},Be=(y,_,T,M,R,z,H)=>{if(T!==M){for(const L in M){if(ar(L))continue;const N=M[L],E=T[L];N!==E&&L!=="value"&&s(y,L,E,N,H,_.children,R,z,V)}if(T!==Re)for(const L in T)!ar(L)&&!(L in M)&&s(y,L,T[L],null,H,_.children,R,z,V);"value"in M&&s(y,"value",T.value,M.value)}},Ve=(y,_,T,M,R,z,H,L,N)=>{const E=_.el=y?y.el:l(""),ee=_.anchor=y?y.anchor:l("");let{patchFlag:Y,dynamicChildren:te,slotScopeIds:se}=_;se&&(L=L?L.concat(se):se),y==null?(o(E,T,M),o(ee,T,M),ae(_.children,T,ee,R,z,H,L,N)):Y>0&&Y&64&&te&&y.dynamicChildren?(_e(y.dynamicChildren,te,T,R,z,H,L),(_.key!=null||R&&_===R.subTree)&&Es(y,_,!0)):he(y,_,T,ee,R,z,H,L,N)},qe=(y,_,T,M,R,z,H,L,N)=>{_.slotScopeIds=L,y==null?_.shapeFlag&512?R.ctx.activate(_,T,M,H,N):Me(_,T,M,R,z,H,N):Le(y,_,N)},Me=(y,_,T,M,R,z,H)=>{const L=y.component=Lp(y,M,R);if(Kc(y)&&(L.ctx.renderer=fe),zp(L),L.asyncDep){if(R&&R.registerDep(L,J),!y.el){const N=L.subTree=I(ln);S(null,N,_,T)}return}J(L,y,_,T,R,z,H)},Le=(y,_,T)=>{const M=_.component=y.component;if(Zh(y,_,T))if(M.asyncDep&&!M.asyncResolved){re(M,_,T);return}else M.next=_,Hh(M.update),M.update();else _.el=y.el,M.vnode=_},J=(y,_,T,M,R,z,H)=>{const L=()=>{if(y.isMounted){let{next:ee,bu:Y,u:te,parent:se,vnode:ve}=y,$e=ee,Ce;hn(y,!1),ee?(ee.el=ve.el,re(y,ee,H)):ee=ve,Y&&Hn(Y),(Ce=ee.props&&ee.props.onVnodeBeforeUpdate)&&_t(Ce,se,ee,ve),hn(y,!0);const Ee=Xr(y),kt=y.subTree;y.subTree=Ee,v(kt,Ee,p(kt.el),Z(kt),y,R,z),ee.el=Ee.el,$e===null&&Qh(y,Ee.el),te&&Ke(te,R),(Ce=ee.props&&ee.props.onVnodeUpdated)&&Ke(()=>_t(Ce,se,ee,ve),R)}else{let ee;const{el:Y,props:te}=_,{bm:se,m:ve,parent:$e}=y,Ce=Gn(_);if(hn(y,!1),se&&Hn(se),!Ce&&(ee=te&&te.onVnodeBeforeMount)&&_t(ee,$e,_),hn(y,!0),Y&&oe){const Ee=()=>{y.subTree=Xr(y),oe(Y,y.subTree,y,R,null)};Ce?_.type.__asyncLoader().then(()=>!y.isUnmounted&&Ee()):Ee()}else{const Ee=y.subTree=Xr(y);v(null,Ee,T,M,y,R,z),_.el=Ee.el}if(ve&&Ke(ve,R),!Ce&&(ee=te&&te.onVnodeMounted)){const Ee=_;Ke(()=>_t(ee,$e,Ee),R)}(_.shapeFlag&256||$e&&Gn($e.vnode)&&$e.vnode.shapeFlag&256)&&y.a&&Ke(y.a,R),y.isMounted=!0,_=T=M=null}},N=y.effect=new ys(L,()=>Ds(E),y.scope),E=y.update=()=>N.run();E.id=y.uid,hn(y,!0),E()},re=(y,_,T)=>{_.component=y;const M=y.vnode.props;y.vnode=_,y.next=null,vp(y,_.props,M,T),kp(y,_.children,T),ro(),ma(),io()},he=(y,_,T,M,R,z,H,L,N=!1)=>{const E=y&&y.children,ee=y?y.shapeFlag:0,Y=_.children,{patchFlag:te,shapeFlag:se}=_;if(te>0){if(te&128){st(E,Y,T,M,R,z,H,L,N);return}else if(te&256){Ae(E,Y,T,M,R,z,H,L,N);return}}se&8?(ee&16&&V(E,R,z),Y!==E&&d(T,Y)):ee&16?se&16?st(E,Y,T,M,R,z,H,L,N):V(E,R,z,!0):(ee&8&&d(T,""),se&16&&ae(Y,T,M,R,z,H,L,N))},Ae=(y,_,T,M,R,z,H,L,N)=>{y=y||Nn,_=_||Nn;const E=y.length,ee=_.length,Y=Math.min(E,ee);let te;for(te=0;te<Y;te++){const se=_[te]=N?Qt(_[te]):Ot(_[te]);v(y[te],se,T,null,R,z,H,L,N)}E>ee?V(y,R,z,!0,!1,Y):ae(_,T,M,R,z,H,L,N,Y)},st=(y,_,T,M,R,z,H,L,N)=>{let E=0;const ee=_.length;let Y=y.length-1,te=ee-1;for(;E<=Y&&E<=te;){const se=y[E],ve=_[E]=N?Qt(_[E]):Ot(_[E]);if(uo(se,ve))v(se,ve,T,null,R,z,H,L,N);else break;E++}for(;E<=Y&&E<=te;){const se=y[Y],ve=_[te]=N?Qt(_[te]):Ot(_[te]);if(uo(se,ve))v(se,ve,T,null,R,z,H,L,N);else break;Y--,te--}if(E>Y){if(E<=te){const se=te+1,ve=se<ee?_[se].el:M;for(;E<=te;)v(null,_[E]=N?Qt(_[E]):Ot(_[E]),T,ve,R,z,H,L,N),E++}}else if(E>te)for(;E<=Y;)rt(y[E],R,z,!0),E++;else{const se=E,ve=E,$e=new Map;for(E=ve;E<=te;E++){const at=_[E]=N?Qt(_[E]):Ot(_[E]);at.key!=null&&$e.set(at.key,E)}let Ce,Ee=0;const kt=te-ve+1;let En=!1,ra=0;const co=new Array(kt);for(E=0;E<kt;E++)co[E]=0;for(E=se;E<=Y;E++){const at=y[E];if(Ee>=kt){rt(at,R,z,!0);continue}let Ft;if(at.key!=null)Ft=$e.get(at.key);else for(Ce=ve;Ce<=te;Ce++)if(co[Ce-ve]===0&&uo(at,_[Ce])){Ft=Ce;break}Ft===void 0?rt(at,R,z,!0):(co[Ft-ve]=E+1,Ft>=ra?ra=Ft:En=!0,v(at,_[Ft],T,null,R,z,H,L,N),Ee++)}const ia=En?Ap(co):Nn;for(Ce=ia.length-1,E=kt-1;E>=0;E--){const at=ve+E,Ft=_[at],sa=at+1<ee?_[at+1].el:M;co[E]===0?v(null,Ft,T,sa,R,z,H,L,N):En&&(Ce<0||E!==ia[Ce]?Ge(Ft,T,sa,2):Ce--)}}},Ge=(y,_,T,M,R=null)=>{const{el:z,type:H,transition:L,children:N,shapeFlag:E}=y;if(E&6){Ge(y.component.subTree,_,T,M);return}if(E&128){y.suspense.move(_,T,M);return}if(E&64){H.move(y,_,T,fe);return}if(H===De){o(z,_,T);for(let Y=0;Y<N.length;Y++)Ge(N[Y],_,T,M);o(y.anchor,_,T);return}if(H===ni){$(y,_,T);return}if(M!==2&&E&1&&L)if(M===0)L.beforeEnter(z),o(z,_,T),Ke(()=>L.enter(z),R);else{const{leave:Y,delayLeave:te,afterLeave:se}=L,ve=()=>o(z,_,T),$e=()=>{Y(z,()=>{ve(),se&&se()})};te?te(z,ve,$e):$e()}else o(z,_,T)},rt=(y,_,T,M=!1,R=!1)=>{const{type:z,props:H,ref:L,children:N,dynamicChildren:E,shapeFlag:ee,patchFlag:Y,dirs:te}=y;if(L!=null&&Fi(L,null,T,y,!0),ee&256){_.ctx.deactivate(y);return}const se=ee&1&&te,ve=!Gn(y);let $e;if(ve&&($e=H&&H.onVnodeBeforeUnmount)&&_t($e,_,y),ee&6)G(y.component,T,M);else{if(ee&128){y.suspense.unmount(T,M);return}se&&dn(y,null,_,"beforeUnmount"),ee&64?y.type.remove(y,_,T,R,fe,M):E&&(z!==De||Y>0&&Y&64)?V(E,_,T,!1,!0):(z===De&&Y&384||!R&&ee&16)&&V(N,_,T),M&&un(y)}(ve&&($e=H&&H.onVnodeUnmounted)||se)&&Ke(()=>{$e&&_t($e,_,y),se&&dn(y,null,_,"unmounted")},T)},un=y=>{const{type:_,el:T,anchor:M,transition:R}=y;if(_===De){C(T,M);return}if(_===ni){q(y);return}const z=()=>{i(T),R&&!R.persisted&&R.afterLeave&&R.afterLeave()};if(y.shapeFlag&1&&R&&!R.persisted){const{leave:H,delayLeave:L}=R,N=()=>H(T,z);L?L(y.el,z,N):N()}else z()},C=(y,_)=>{let T;for(;y!==_;)T=f(y),i(y),y=T;i(_)},G=(y,_,T)=>{const{bum:M,scope:R,update:z,subTree:H,um:L}=y;M&&Hn(M),R.stop(),z&&(z.active=!1,rt(H,y,_,T)),L&&Ke(L,_),Ke(()=>{y.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},V=(y,_,T,M=!1,R=!1,z=0)=>{for(let H=z;H<y.length;H++)rt(y[H],_,T,M,R)},Z=y=>y.shapeFlag&6?Z(y.component.subTree):y.shapeFlag&128?y.suspense.next():f(y.anchor||y.el),we=(y,_,T)=>{y==null?_._vnode&&rt(_._vnode,null,null,!0):v(_._vnode||null,y,_,null,null,null,T),ma(),Bc(),_._vnode=y},fe={p:v,um:rt,m:Ge,r:un,mt:Me,mc:ae,pc:he,pbc:_e,n:Z,o:e};let le,oe;return t&&([le,oe]=t(fe)),{render:we,hydrate:le,createApp:Sp(we,le)}}function hn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Es(e,t,n=!1){const o=e.children,i=t.children;if(ie(o)&&ie(i))for(let s=0;s<o.length;s++){const a=o[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=Qt(i[s]),l.el=a.el),n||Es(a,l))}}function Ap(e){const t=e.slice(),n=[0];let o,i,s,a,l;const c=e.length;for(o=0;o<c;o++){const u=e[o];if(u!==0){if(i=n[n.length-1],e[i]<u){t[o]=i,n.push(o);continue}for(s=0,a=n.length-1;s<a;)l=s+a>>1,e[n[l]]<u?s=l+1:a=l;u<e[n[s]]&&(s>0&&(t[o]=n[s-1]),n[s]=o)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Pp=e=>e.__isTeleport,bo=e=>e&&(e.disabled||e.disabled===""),xa=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Oi=(e,t)=>{const n=e&&e.to;return Ie(n)?t?t(n):null:n},$p={__isTeleport:!0,process(e,t,n,o,i,s,a,l,c,u){const{mc:d,pc:p,pbc:f,o:{insert:m,querySelector:g,createText:w,createComment:v}}=u,D=bo(t.props);let{shapeFlag:S,children:x,dynamicChildren:$}=t;if(e==null){const q=t.el=w(""),O=t.anchor=w("");m(q,n,o),m(O,n,o);const W=t.target=Oi(t.props,g),ne=t.targetAnchor=w("");W&&(m(ne,W),a=a||xa(W));const ae=(ge,_e)=>{S&16&&d(x,ge,_e,i,s,a,l,c)};D?ae(n,O):W&&ae(W,ne)}else{t.el=e.el;const q=t.anchor=e.anchor,O=t.target=e.target,W=t.targetAnchor=e.targetAnchor,ne=bo(e.props),ae=ne?n:O,ge=ne?q:W;if(a=a||xa(O),$?(f(e.dynamicChildren,$,ae,i,s,a,l),Es(e,t,!0)):c||p(e,t,ae,ge,i,s,a,l,!1),D)ne||nr(t,n,q,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const _e=t.target=Oi(t.props,g);_e&&nr(t,_e,null,u,0)}else ne&&nr(t,O,W,u,1)}},remove(e,t,n,o,{um:i,o:{remove:s}},a){const{shapeFlag:l,children:c,anchor:u,targetAnchor:d,target:p,props:f}=e;if(p&&s(d),(a||!bo(f))&&(s(u),l&16))for(let m=0;m<c.length;m++){const g=c[m];i(g,t,n,!0,!!g.dynamicChildren)}},move:nr,hydrate:Cp};function nr(e,t,n,{o:{insert:o},m:i},s=2){s===0&&o(e.targetAnchor,t,n);const{el:a,anchor:l,shapeFlag:c,children:u,props:d}=e,p=s===2;if(p&&o(a,t,n),(!p||bo(d))&&c&16)for(let f=0;f<u.length;f++)i(u[f],t,n,2);p&&o(l,t,n)}function Cp(e,t,n,o,i,s,{o:{nextSibling:a,parentNode:l,querySelector:c}},u){const d=t.target=Oi(t.props,c);if(d){const p=d._lpa||d.firstChild;if(t.shapeFlag&16)if(bo(t.props))t.anchor=u(a(e),t,l(e),n,o,i,s),t.targetAnchor=p;else{t.anchor=a(e);let f=p;for(;f;)if(f=a(f),f&&f.nodeType===8&&f.data==="teleport anchor"){t.targetAnchor=f,d._lpa=t.targetAnchor&&a(t.targetAnchor);break}u(p,t,d,n,o,i,s)}}return t.anchor&&a(t.anchor)}const Rp=$p,De=Symbol(void 0),Fs=Symbol(void 0),ln=Symbol(void 0),ni=Symbol(void 0),ko=[];let Dt=null;function k(e=!1){ko.push(Dt=e?null:[])}function Mp(){ko.pop(),Dt=ko[ko.length-1]||null}let Lo=1;function Da(e){Lo+=e}function su(e){return e.dynamicChildren=Lo>0?Dt||Nn:null,Mp(),Lo>0&&Dt&&Dt.push(e),e}function K(e,t,n,o,i,s){return su(r(e,t,n,o,i,s,!0))}function j(e,t,n,o,i){return su(I(e,t,n,o,i,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function uo(e,t){return e.type===t.type&&e.key===t.key}const Hr="__vInternal",au=({key:e})=>e!=null?e:null,lr=({ref:e,ref_key:t,ref_for:n})=>e!=null?Ie(e)||Te(e)||ue(e)?{i:Ze,r:e,k:t,f:!!n}:e:null;function r(e,t=null,n=null,o=0,i=null,s=e===De?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&au(t),ref:t&&lr(t),scopeId:Br,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return l?(Os(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=Ie(n)?8:16),Lo>0&&!a&&Dt&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Dt.push(c),c}const I=Ep;function Ep(e,t=null,n=null,o=0,i=null,s=!1){if((!e||e===up)&&(e=ln),Xn(e)){const l=Pn(e,t,!0);return n&&Os(l,n),Lo>0&&!s&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(e)]=l:Dt.push(l)),l.patchFlag|=-2,l}if(Ip(e)&&(e=e.__vccOpts),t){t=Q(t);let{class:l,style:c}=t;l&&!Ie(l)&&(t.class=je(l)),ze(c)&&(Fc(c)&&!ie(c)&&(c=ot({},c)),t.style=nt(c))}const a=Ie(e)?1:Wc(e)?128:Pp(e)?64:ze(e)?4:ue(e)?2:0;return r(e,t,n,o,i,a,s,!0)}function Q(e){return e?Fc(e)||Hr in e?ot({},e):e:null}function Pn(e,t,n=!1){const{props:o,ref:i,patchFlag:s,children:a}=e,l=t?br(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&au(l),ref:t&&t.ref?n&&i?ie(i)?i.concat(lr(t)):[i,lr(t)]:lr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==De?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pn(e.ssContent),ssFallback:e.ssFallback&&Pn(e.ssFallback),el:e.el,anchor:e.anchor}}function h(e=" ",t=0){return I(Fs,null,e,t)}function me(e="",t=!1){return t?(k(),j(ln,null,e)):I(ln,null,e)}function Ot(e){return e==null||typeof e=="boolean"?I(ln):ie(e)?I(De,null,e.slice()):typeof e=="object"?Qt(e):I(Fs,null,String(e))}function Qt(e){return e.el===null||e.memo?e:Pn(e)}function Os(e,t){let n=0;const{shapeFlag:o}=e;if(t==null)t=null;else if(ie(t))n=16;else if(typeof t=="object")if(o&65){const i=t.default;i&&(i._c&&(i._d=!1),Os(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Hr in t)?t._ctx=Ze:i===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ue(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),o&64?(n=16,t=[h(t)]):n=8);e.children=t,e.shapeFlag|=n}function br(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const i in o)if(i==="class")t.class!==o.class&&(t.class=je([t.class,o.class]));else if(i==="style")t.style=nt([t.style,o.style]);else if(Er(i)){const s=t[i],a=o[i];a&&s!==a&&!(ie(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=o[i])}return t}function _t(e,t,n,o=null){$t(e,t,7,[n,o])}const Fp=iu();let Op=0;function Lp(e,t,n){const o=e.type,i=(t?t.appContext:e.appContext)||Fp,s={uid:Op++,vnode:e,type:o,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tu(o,i),emitsOptions:Nc(o,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:o.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Gh.bind(null,s),e.ce&&e.ce(s),s}let Ue=null;const Cn=()=>Ue||Ze,eo=e=>{Ue=e,e.scope.on()},Tn=()=>{Ue&&Ue.scope.off(),Ue=null};function lu(e){return e.vnode.shapeFlag&4}let zo=!1;function zp(e,t=!1){zo=t;const{props:n,children:o}=e.vnode,i=lu(e);_p(e,n,i,t),bp(e,o);const s=i?jp(e,t):void 0;return zo=!1,s}function jp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=jr(new Proxy(e.ctx,hp));const{setup:o}=n;if(o){const i=e.setupContext=o.length>1?uu(e):null;eo(e),ro();const s=nn(o,e,0,[e.props,i]);if(io(),Tn(),_c(s)){if(s.then(Tn,Tn),t)return s.then(a=>{Aa(e,a,t)}).catch(a=>{qr(a,e,0)});e.asyncDep=s}else Aa(e,s,t)}else cu(e,t)}function Aa(e,t,n){ue(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ze(t)&&(e.setupState=Lc(t)),cu(e,n)}let Pa;function cu(e,t,n){const o=e.type;if(!e.render){if(!t&&Pa&&!o.render){const i=o.template||Rs(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:l,compilerOptions:c}=o,u=ot(ot({isCustomElement:s,delimiters:l},a),c);o.render=Pa(i,u)}}e.render=o.render||Pt}eo(e),ro(),pp(e),io(),Tn()}function qp(e){return new Proxy(e.attrs,{get(t,n){return yt(e,"get","$attrs"),t[n]}})}function uu(e){const t=o=>{e.exposed=o||{}};let n;return{get attrs(){return n||(n=qp(e))},slots:e.slots,emit:e.emit,expose:t}}function Ur(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Lc(jr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vr)return vr[n](e)}}))}function Li(e,t=!0){return ue(e)?e.displayName||e.name:e.name||t&&e.__name}function Ip(e){return ue(e)&&"__vccOpts"in e}const P=(e,t)=>Vh(e,t,zo);function Bp(){return Vp().slots}function Vp(){const e=Cn();return e.setupContext||(e.setupContext=uu(e))}function ft(e,t,n){const o=arguments.length;return o===2?ze(t)&&!ie(t)?Xn(t)?I(e,null,[t]):I(e,t):I(e,null,t):(o>3?n=Array.prototype.slice.call(arguments,2):o===3&&Xn(n)&&(n=[n]),I(e,t,n))}const Np="3.2.39",Wp="http://www.w3.org/2000/svg",yn=typeof document<"u"?document:null,$a=yn&&yn.createElement("template"),Hp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,o)=>{const i=t?yn.createElementNS(Wp,e):yn.createElement(e,n?{is:n}:void 0);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>yn.createTextNode(e),createComment:e=>yn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,o,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{$a.innerHTML=o?`<svg>${e}</svg>`:e;const l=$a.content;if(o){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Up(e,t,n){const o=e._vtc;o&&(t=(t?[t,...o]:[...o]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Kp(e,t,n){const o=e.style,i=Ie(n);if(n&&!i){for(const s in n)zi(o,s,n[s]);if(t&&!Ie(t))for(const s in t)n[s]==null&&zi(o,s,"")}else{const s=o.display;i?t!==n&&(o.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(o.display=s)}}const Ca=/\s*!important$/;function zi(e,t,n){if(ie(n))n.forEach(o=>zi(e,t,o));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const o=Gp(e,t);Ca.test(n)?e.setProperty($n(o),n.replace(Ca,""),"important"):e[o]=n}}const Ra=["Webkit","Moz","ms"],oi={};function Gp(e,t){const n=oi[t];if(n)return n;let o=It(t);if(o!=="filter"&&o in e)return oi[t]=o;o=Lr(o);for(let i=0;i<Ra.length;i++){const s=Ra[i]+o;if(s in e)return oi[t]=s}return t}const Ma="http://www.w3.org/1999/xlink";function Jp(e,t,n,o,i){if(o&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ma,t.slice(6,t.length)):e.setAttributeNS(Ma,t,n);else{const s=Gd(t);n==null||s&&!mc(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Yp(e,t,n,o,i,s,a){if(t==="innerHTML"||t==="textContent"){o&&a(o,i,s),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n==null?"":n;(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=mc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}const[du,Zp]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ji=0;const Qp=Promise.resolve(),Xp=()=>{ji=0},ef=()=>ji||(Qp.then(Xp),ji=du());function zn(e,t,n,o){e.addEventListener(t,n,o)}function tf(e,t,n,o){e.removeEventListener(t,n,o)}function nf(e,t,n,o,i=null){const s=e._vei||(e._vei={}),a=s[t];if(o&&a)a.value=o;else{const[l,c]=of(t);if(o){const u=s[t]=rf(o,i);zn(e,l,u,c)}else a&&(tf(e,l,a,c),s[t]=void 0)}}const Ea=/(?:Once|Passive|Capture)$/;function of(e){let t;if(Ea.test(e)){t={};let o;for(;o=e.match(Ea);)e=e.slice(0,e.length-o[0].length),t[o[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$n(e.slice(2)),t]}function rf(e,t){const n=o=>{const i=o.timeStamp||du();(Zp||i>=n.attached-1)&&$t(sf(o,n.value),t,5,[o])};return n.value=e,n.attached=ef(),n}function sf(e,t){if(ie(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(o=>i=>!i._stopped&&o&&o(i))}else return t}const Fa=/^on[a-z]/,af=(e,t,n,o,i=!1,s,a,l,c)=>{t==="class"?Up(e,o,i):t==="style"?Kp(e,n,o):Er(t)?hs(t)||nf(e,t,n,o,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lf(e,t,o,i))?Yp(e,t,o,s,a,l,c):(t==="true-value"?e._trueValue=o:t==="false-value"&&(e._falseValue=o),Jp(e,t,o,i))};function lf(e,t,n,o){return o?!!(t==="innerHTML"||t==="textContent"||t in e&&Fa.test(t)&&ue(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Fa.test(t)&&Ie(n)?!1:t in e}const Oa=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ie(t)?n=>Hn(t,n):t};function cf(e){e.target.composing=!0}function La(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const uf={created(e,{modifiers:{lazy:t,trim:n,number:o}},i){e._assign=Oa(i);const s=o||i.props&&i.props.type==="number";zn(e,t?"change":"input",a=>{if(a.target.composing)return;let l=e.value;n&&(l=l.trim()),s&&(l=Si(l)),e._assign(l)}),n&&zn(e,"change",()=>{e.value=e.value.trim()}),t||(zn(e,"compositionstart",cf),zn(e,"compositionend",La),zn(e,"change",La))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:o,number:i}},s){if(e._assign=Oa(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||o&&e.value.trim()===t||(i||e.type==="number")&&Si(e.value)===t))return;const a=t==null?"":t;e.value!==a&&(e.value=a)}},df={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},za=(e,t)=>n=>{if(!("key"in n))return;const o=$n(n.key);if(t.some(i=>i===o||df[i]===o))return e(n)},hu={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ho(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:o}){!t!=!n&&(o?t?(o.beforeEnter(e),ho(e,!0),o.enter(e)):o.leave(e,()=>{ho(e,!1)}):ho(e,t))},beforeUnmount(e,{value:t}){ho(e,t)}};function ho(e,t){e.style.display=t?e._vod:"none"}const hf=ot({patchProp:af},Hp);let ja;function pf(){return ja||(ja=xp(hf))}const ff=(...e)=>{const t=pf().createApp(...e),{mount:n}=t;return t.mount=o=>{const i=mf(o);if(!i)return;const s=t._component;!ue(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function mf(e){return Ie(e)?document.querySelector(e):e}var gf=Object.defineProperty,qa=Object.getOwnPropertySymbols,yf=Object.prototype.hasOwnProperty,_f=Object.prototype.propertyIsEnumerable,Ia=(e,t,n)=>t in e?gf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vf=(e,t)=>{for(var n in t||(t={}))yf.call(t,n)&&Ia(e,n,t[n]);if(qa)for(var n of qa(t))_f.call(t,n)&&Ia(e,n,t[n]);return e},pu="usehead",Ba="head:count",ri="data-head-attrs",fu="data-meta-body",wf=(e,t,n)=>{const o=n.createElement(e);for(const i of Object.keys(t))if(i==="body"&&t.body===!0)o.setAttribute(fu,"true");else{let s=t[i];if(i==="key"||s===!1)continue;i==="children"?o.textContent=s:o.setAttribute(i,s)}return o};function Va(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){const n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){const o=t.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=n,n===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(t)}var bf=e=>{const t=["key","id","name","property"];for(const n of t){const o=typeof e.getAttribute=="function"?e.hasAttribute(n)?e.getAttribute(n):void 0:e[n];if(o!==void 0)return{name:n,value:o}}},kf=()=>{const e=F(pu);if(!e)throw new Error("You may forget to apply app.use(head)");return e},Tf=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],Sf=(e,t)=>e==null?"":typeof e=="string"?e.replace("%s",t!=null?t:""):e(b(t)),xf=e=>{const t=[],n=Object.keys(e);for(const o of n)if(e[o]!=null)switch(o){case"title":t.push({tag:o,props:{children:e[o]}});break;case"titleTemplate":break;case"base":t.push({tag:o,props:vf({key:"default"},e[o])});break;default:if(Tf.includes(o)){const i=e[o];Array.isArray(i)?i.forEach(s=>{t.push({tag:o,props:s})}):i&&t.push({tag:o,props:i})}break}return t},Na=(e,t)=>{const n=e.getAttribute(ri);if(n)for(const i of n.split(","))i in t||e.removeAttribute(i);const o=[];for(const i in t){const s=t[i];s!=null&&(s===!1?e.removeAttribute(i):e.setAttribute(i,s),o.push(i))}o.length?e.setAttribute(ri,o.join(",")):e.removeAttribute(ri)},Df=(e=window.document,t,n)=>{var o,i;const s=e.head,a=e.body;let l=s.querySelector(`meta[name="${Ba}"]`),c=a.querySelectorAll(`[${fu}]`);const u=l?Number(l.getAttribute("content")):0,d=[],p=[];if(c)for(let m=0;m<c.length;m++)c[m]&&((o=c[m].tagName)==null?void 0:o.toLowerCase())===t&&p.push(c[m]);if(l)for(let m=0,g=l.previousElementSibling;m<u;m++,g=(g==null?void 0:g.previousElementSibling)||null)((i=g==null?void 0:g.tagName)==null?void 0:i.toLowerCase())===t&&d.push(g);else l=e.createElement("meta"),l.setAttribute("name",Ba),l.setAttribute("content","0"),s.append(l);let f=n.map(m=>{var g;return{element:wf(m.tag,m.props,e),body:(g=m.props.body)!=null?g:!1}});f=f.filter(m=>{for(let g=0;g<d.length;g++){const w=d[g];if(Va(w,m.element))return d.splice(g,1),!1}for(let g=0;g<p.length;g++){const w=p[g];if(Va(w,m.element))return p.splice(g,1),!1}return!0}),p.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),d.forEach(m=>{var g;return(g=m.parentNode)==null?void 0:g.removeChild(m)}),f.forEach(m=>{m.body===!0?a.insertAdjacentElement("beforeend",m.element):s.insertBefore(m.element,l)}),l.setAttribute("content",""+(u-d.length+f.filter(m=>!m.body).length))},Af=e=>{let t=[],n=new Set;e&&t.push(Rt(e));const o={install(i){i.config.globalProperties.$head=o,i.provide(pu,o)},get headTags(){const i=[],s=t.map(a=>b(a).titleTemplate).reverse().find(a=>a!=null);return t.forEach(a=>{xf(b(a)).forEach(c=>{if(c.tag==="meta"||c.tag==="base"||c.tag==="script"){const u=bf(c.props);if(u){let d=-1;for(let p=0;p<i.length;p++){const f=i[p],m=f.props[u.name],g=c.props[u.name];if(f.tag===c.tag&&m===g){d=p;break}}d!==-1&&i.splice(d,1)}}s&&c.tag==="title"&&(c.props.children=Sf(s,c.props.children)),i.push(c)})}),i},addHeadObjs(i){t.push(i)},removeHeadObjs(i){t=t.filter(s=>s!==i)},updateDOM(i=window.document){let s,a={},l={};const c={};for(const d of o.headTags){if(d.tag==="title"){s=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(a,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(l,d.props);continue}c[d.tag]=c[d.tag]||[],c[d.tag].push(d)}s!==void 0&&(i.title=s),Na(i.documentElement,a),Na(i.body,l);const u=new Set([...Object.keys(c),...n]);for(const d of u)Df(i,d,c[d]||[]);n.clear(),Object.keys(c).forEach(d=>n.add(d))}};return o},Pf=typeof window<"u",$f=e=>{const t=kf(),n=U(e);t.addHeadObjs(n),Pf&&(Vr(()=>{t.updateDOM()}),Wr(()=>{t.removeHeadObjs(n),t.updateDOM()}))};const cr=Symbol("v-click-clicks"),jn=Symbol("v-click-clicks-elements"),qi=Symbol("v-click-clicks-order-map"),ur=Symbol("v-click-clicks-disabled"),mu=Symbol("slidev-slide-scale"),B=Symbol("slidev-slidev-context"),Cf=Symbol("slidev-route"),Rf=Symbol("slidev-slide-context"),Fn="slidev-vclick-target",ii="slidev-vclick-hidden",Mf="slidev-vclick-fade",si="slidev-vclick-hidden-explicitly",po="slidev-vclick-current",or="slidev-vclick-prior";function Wa(e,t){if(!e)return!1;const n=e.indexOf(t);return n>=0?(e.splice(n,1),!0):!1}function Ef(e){return e!=null}function Ff(e,t){return Object.fromEntries(Object.entries(e).map(([n,o])=>t(n,o)).filter(Ef))}const vn={theme:"default",title:"European Cruise 2022",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"european-cruise-2022",selectable:!1,themeConfig:{},fonts:{sans:['"Avenir Next"','"Nunito Sans"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"Fira Code"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Avenir Next","Nunito Sans","Fira Code"],provider:"google",local:["Avenir Next"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},ke=vn;var pc;const on=(pc=ke.aspectRatio)!=null?pc:16/9;var fc;const Sn=(fc=ke.canvasWidth)!=null?fc:980,gu=Math.round(Sn/on),yu=P(()=>Ff(ke.themeConfig||{},(e,t)=>[`--slidev-theme-${e}`,t]));function bt(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!1})}const Rn=Fe({page:0,clicks:0});let Of=[],Lf=[];bt(Rn,"$syncUp",!0);bt(Rn,"$syncDown",!0);bt(Rn,"$paused",!1);bt(Rn,"$onSet",e=>Of.push(e));bt(Rn,"$onPatch",e=>Lf.push(e));bt(Rn,"$patch",async()=>!1);function _u(e,t,n=!1){const o=[];let i=!1,s=!1,a,l;const c=Fe(t);function u(m){o.push(m)}function d(m,g){clearTimeout(a),i=!0,c[m]=g,a=setTimeout(()=>i=!1,0)}function p(m){i||(clearTimeout(l),s=!0,Object.entries(m).forEach(([g,w])=>{c[g]=w}),l=setTimeout(()=>s=!1,0))}function f(m){let g;n?n&&window.addEventListener("storage",v=>{v&&v.key===m&&v.newValue&&p(JSON.parse(v.newValue))}):(g=new BroadcastChannel(m),g.addEventListener("message",v=>p(v.data)));function w(){!n&&g&&!s?g.postMessage(be(c)):n&&!s&&window.localStorage.setItem(m,JSON.stringify(c)),i||o.forEach(v=>v(c))}if(pe(c,w,{deep:!0}),n){const v=window.localStorage.getItem(m);v&&p(JSON.parse(v))}}return{init:f,onPatch:u,patch:d,state:c}}const{init:zf,onPatch:jf,patch:Ha,state:ai}=_u(Rn,{page:1,clicks:0}),Mn=Fe({});let qf=[],If=[];bt(Mn,"$syncUp",!0);bt(Mn,"$syncDown",!0);bt(Mn,"$paused",!1);bt(Mn,"$onSet",e=>qf.push(e));bt(Mn,"$onPatch",e=>If.push(e));bt(Mn,"$patch",async()=>!1);const{init:Bf,onPatch:Vf,patch:vu,state:kr}=_u(Mn,{},!1),Nf="modulepreload",Wf=function(e){return"/"+e},Ua={},so=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=Wf(i),i in Ua)return;Ua[i]=!0;const s=i.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=s?"stylesheet":Nf,s||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),s)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};var Ka;const Kt=typeof window<"u",Hf=e=>typeof e<"u",Uf=Object.prototype.toString,Tr=e=>typeof e=="function",Kf=e=>typeof e=="number",wu=e=>typeof e=="string",Ii=e=>Uf.call(e)==="[object Object]",Bi=()=>+Date.now(),xn=()=>{};Kt&&((Ka=window==null?void 0:window.navigator)==null?void 0:Ka.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function pt(e){return typeof e=="function"?e():b(e)}function Gf(e,t){function n(...o){e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})}return n}const bu=e=>e();function Jf(e=bu){const t=U(!0);function n(){t.value=!1}function o(){t.value=!0}return{isActive:t,pause:n,resume:o,eventFilter:(...s)=>{t.value&&e(...s)}}}function Yf(e){return e}function Zf(e,t){var n;if(typeof e=="number")return e+t;const o=((n=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:n[0])||"",i=e.slice(o.length),s=parseFloat(o)+t;return Number.isNaN(s)?e:s+i}function Qf(e,t){let n,o,i;const s=U(!0),a=()=>{s.value=!0,i()};pe(e,a,{flush:"sync"});const l=Tr(t)?t:t.get,c=Tr(t)?void 0:t.set,u=zc((d,p)=>(o=d,i=p,{get(){return s.value&&(n=l(),s.value=!1),o(),n},set(f){c==null||c(f)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function cn(e){return kc()?(Tc(e),!0):!1}function Xf(e){if(!Te(e))return Fe(e);const t=new Proxy({},{get(n,o,i){return b(Reflect.get(e.value,o,i))},set(n,o,i){return Te(e.value[o])&&!Te(i)?e.value[o].value=i:e.value[o]=i,!0},deleteProperty(n,o){return Reflect.deleteProperty(e.value,o)},has(n,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Fe(t)}function em(e){return typeof e=="function"?P(e):U(e)}var tm=Object.defineProperty,nm=Object.defineProperties,om=Object.getOwnPropertyDescriptors,Ga=Object.getOwnPropertySymbols,rm=Object.prototype.hasOwnProperty,im=Object.prototype.propertyIsEnumerable,Ja=(e,t,n)=>t in e?tm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,sm=(e,t)=>{for(var n in t||(t={}))rm.call(t,n)&&Ja(e,n,t[n]);if(Ga)for(var n of Ga(t))im.call(t,n)&&Ja(e,n,t[n]);return e},am=(e,t)=>nm(e,om(t));function lm(e){if(!Te(e))return jh(e);const t=Array.isArray(e.value)?new Array(e.value.length):{};for(const n in e.value)t[n]=zc(()=>({get(){return e.value[n]},set(o){if(Array.isArray(e.value)){const i=[...e.value];i[n]=o,e.value=i}else{const i=am(sm({},e.value),{[n]:o});Object.setPrototypeOf(i,e.value),e.value=i}}}));return t}function cm(e,t=!0){Cn()?Yc(e):t?e():Ye(e)}function ku(e,t=!0){Cn()?Ho(e):t?e():Ye(e)}function um(e){Cn()&&$s(e)}function dm(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:i=!1}=n;let s=null;const a=U(!1);function l(){s&&(clearInterval(s),s=null)}function c(){a.value=!1,l()}function u(){b(t)<=0||(a.value=!0,i&&e(),l(),s=setInterval(e,pt(t)))}if(o&&Kt&&u(),Te(t)){const d=pe(t,()=>{a.value&&Kt&&u()});cn(d)}return cn(c),{isActive:a,pause:c,resume:u}}function Tu(e=!1,t={}){const{truthyValue:n=!0,falsyValue:o=!1}=t,i=Te(e),s=U(e);function a(l){if(arguments.length)return s.value=l,s.value;{const c=pt(n);return s.value=s.value===c?pt(o):c,s.value}}return i?a:[s,a]}var Ya=Object.getOwnPropertySymbols,hm=Object.prototype.hasOwnProperty,pm=Object.prototype.propertyIsEnumerable,fm=(e,t)=>{var n={};for(var o in e)hm.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Ya)for(var o of Ya(e))t.indexOf(o)<0&&pm.call(e,o)&&(n[o]=e[o]);return n};function mm(e,t,n={}){const o=n,{eventFilter:i=bu}=o,s=fm(o,["eventFilter"]);return pe(e,Gf(i,t),s)}var gm=Object.defineProperty,ym=Object.defineProperties,_m=Object.getOwnPropertyDescriptors,Sr=Object.getOwnPropertySymbols,Su=Object.prototype.hasOwnProperty,xu=Object.prototype.propertyIsEnumerable,Za=(e,t,n)=>t in e?gm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vm=(e,t)=>{for(var n in t||(t={}))Su.call(t,n)&&Za(e,n,t[n]);if(Sr)for(var n of Sr(t))xu.call(t,n)&&Za(e,n,t[n]);return e},wm=(e,t)=>ym(e,_m(t)),bm=(e,t)=>{var n={};for(var o in e)Su.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Sr)for(var o of Sr(e))t.indexOf(o)<0&&xu.call(e,o)&&(n[o]=e[o]);return n};function km(e,t,n={}){const o=n,{eventFilter:i}=o,s=bm(o,["eventFilter"]),{eventFilter:a,pause:l,resume:c,isActive:u}=Jf(i);return{stop:mm(e,t,wm(vm({},s),{eventFilter:a})),pause:l,resume:c,isActive:u}}function At(e){var t;const n=pt(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Qe=Kt?window:void 0,Tm=Kt?window.document:void 0;function de(...e){let t,n,o,i;if(wu(e[0])?([n,o,i]=e,t=Qe):[t,n,o,i]=e,!t)return xn;let s=xn;const a=pe(()=>At(t),c=>{s(),c&&(c.addEventListener(n,o,i),s=()=>{c.removeEventListener(n,o,i),s=xn})},{immediate:!0,flush:"post"}),l=()=>{a(),s()};return cn(l),l}function Sm(e,t,n={}){const{window:o=Qe,ignore:i,capture:s=!0,detectIframe:a=!1}=n;if(!o)return;const l=U(!0);let c;const u=f=>{o.clearTimeout(c);const m=At(e),g=f.composedPath();!m||m===f.target||g.includes(m)||!l.value||i&&i.length>0&&i.some(w=>{const v=At(w);return v&&(f.target===v||g.includes(v))})||t(f)},d=[de(o,"click",u,{passive:!0,capture:s}),de(o,"pointerdown",f=>{const m=At(e);l.value=!!m&&!f.composedPath().includes(m)},{passive:!0}),de(o,"pointerup",f=>{if(f.button===0){const m=f.composedPath();f.composedPath=()=>m,c=o.setTimeout(()=>u(f),50)}},{passive:!0}),a&&de(o,"blur",f=>{var m;const g=At(e);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(g!=null&&g.contains(document.activeElement))&&t(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const xm=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function Dm(e,t,n={}){const{target:o=Qe,eventName:i="keydown",passive:s=!1}=n,a=xm(e);return de(o,i,c=>{a(c)&&t(c)},s)}function Am(e={}){const{window:t=Qe}=e,n=Qf(()=>null,()=>t==null?void 0:t.document.activeElement);return t&&(de(t,"blur",n.trigger,!0),de(t,"focus",n.trigger,!0)),n}function Kr(e,t=!1){const n=U(),o=()=>n.value=Boolean(e());return o(),ku(o,t),n}function qn(e,t={}){const{window:n=Qe}=t,o=Kr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const s=U(!1),a=()=>{!o.value||(i||(i=n.matchMedia(e)),s.value=i.matches)};return cm(()=>{a(),i&&("addEventListener"in i?i.addEventListener("change",a):i.addListener(a),cn(()=>{"removeEventListener"in i?i.removeEventListener("change",a):i.removeListener(a)}))}),s}const Pm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var $m=Object.defineProperty,Qa=Object.getOwnPropertySymbols,Cm=Object.prototype.hasOwnProperty,Rm=Object.prototype.propertyIsEnumerable,Xa=(e,t,n)=>t in e?$m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Mm=(e,t)=>{for(var n in t||(t={}))Cm.call(t,n)&&Xa(e,n,t[n]);if(Qa)for(var n of Qa(t))Rm.call(t,n)&&Xa(e,n,t[n]);return e};function Em(e,t={}){function n(l,c){let u=e[l];return c!=null&&(u=Zf(u,c)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=Qe}=t;function i(l){return o?o.matchMedia(l).matches:!1}const s=l=>qn(`(min-width: ${n(l)})`,t),a=Object.keys(e).reduce((l,c)=>(Object.defineProperty(l,c,{get:()=>s(c),enumerable:!0,configurable:!0}),l),{});return Mm({greater(l){return qn(`(min-width: ${n(l,.1)})`,t)},greaterOrEqual:s,smaller(l){return qn(`(max-width: ${n(l,-.1)})`,t)},smallerOrEqual(l){return qn(`(max-width: ${n(l)})`,t)},between(l,c){return qn(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`,t)},isGreater(l){return i(`(min-width: ${n(l,.1)})`)},isGreaterOrEqual(l){return i(`(min-width: ${n(l)})`)},isSmaller(l){return i(`(max-width: ${n(l,-.1)})`)},isSmallerOrEqual(l){return i(`(max-width: ${n(l)})`)},isInBetween(l,c){return i(`(min-width: ${n(l)}) and (max-width: ${n(c,-.1)})`)}},a)}function Fm(e){return JSON.parse(JSON.stringify(e))}const Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ni="__vueuse_ssr_handlers__";Vi[Ni]=Vi[Ni]||{};const Om=Vi[Ni];function Lm(e,t){return Om[e]||t}function zm(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}var jm=Object.defineProperty,el=Object.getOwnPropertySymbols,qm=Object.prototype.hasOwnProperty,Im=Object.prototype.propertyIsEnumerable,tl=(e,t,n)=>t in e?jm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,nl=(e,t)=>{for(var n in t||(t={}))qm.call(t,n)&&tl(e,n,t[n]);if(el)for(var n of el(t))Im.call(t,n)&&tl(e,n,t[n]);return e};const Bm={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Et(e,t,n,o={}){var i;const{flush:s="pre",deep:a=!0,listenToStorageChanges:l=!0,writeDefaults:c=!0,mergeDefaults:u=!1,shallow:d,window:p=Qe,eventFilter:f,onError:m=W=>{console.error(W)}}=o,g=(d?Rt:U)(t);if(!n)try{n=Lm("getDefaultStorage",()=>{var W;return(W=Qe)==null?void 0:W.localStorage})()}catch(W){m(W)}if(!n)return g;const w=pt(t),v=zm(w),D=(i=o.serializer)!=null?i:Bm[v],{pause:S,resume:x}=km(g,()=>$(g.value),{flush:s,deep:a,eventFilter:f});return p&&l&&de(p,"storage",O),O(),g;function $(W){try{W==null?n.removeItem(e):n.setItem(e,D.write(W))}catch(ne){m(ne)}}function q(W){if(!(W&&W.key!==e)){S();try{const ne=W?W.newValue:n.getItem(e);if(ne==null)return c&&w!==null&&n.setItem(e,D.write(w)),w;if(!W&&u){const ae=D.read(ne);return Tr(u)?u(ae,w):v==="object"&&!Array.isArray(ae)?nl(nl({},w),ae):ae}else return typeof ne!="string"?ne:D.read(ne)}catch(ne){m(ne)}finally{x()}}}function O(W){W&&W.key!==e||(g.value=q(W))}}function Vm(e){return qn("(prefers-color-scheme: dark)",e)}var Nm=Object.defineProperty,Wm=Object.defineProperties,Hm=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,Um=Object.prototype.hasOwnProperty,Km=Object.prototype.propertyIsEnumerable,rl=(e,t,n)=>t in e?Nm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Gm=(e,t)=>{for(var n in t||(t={}))Um.call(t,n)&&rl(e,n,t[n]);if(ol)for(var n of ol(t))Km.call(t,n)&&rl(e,n,t[n]);return e},Jm=(e,t)=>Wm(e,Hm(t));function gC(e,t={}){var n,o,i;const s=(n=t.draggingElement)!=null?n:Qe,a=(o=t.handle)!=null?o:e,l=U((i=pt(t.initialValue))!=null?i:{x:0,y:0}),c=U(),u=g=>t.pointerTypes?t.pointerTypes.includes(g.pointerType):!0,d=g=>{pt(t.preventDefault)&&g.preventDefault(),pt(t.stopPropagation)&&g.stopPropagation()},p=g=>{var w;if(!u(g)||pt(t.exact)&&g.target!==pt(e))return;const v=pt(e).getBoundingClientRect(),D={x:g.pageX-v.left,y:g.pageY-v.top};((w=t.onStart)==null?void 0:w.call(t,D,g))!==!1&&(c.value=D,d(g))},f=g=>{var w;!u(g)||!c.value||(l.value={x:g.pageX-c.value.x,y:g.pageY-c.value.y},(w=t.onMove)==null||w.call(t,l.value,g),d(g))},m=g=>{var w;!u(g)||!c.value||(c.value=void 0,(w=t.onEnd)==null||w.call(t,l.value,g),d(g))};return Kt&&(de(a,"pointerdown",p,!0),de(s,"pointermove",f,!0),de(s,"pointerup",m,!0)),Jm(Gm({},lm(l)),{position:l,isDragging:P(()=>!!c.value),style:P(()=>`left:${l.value.x}px;top:${l.value.y}px;`)})}var il=Object.getOwnPropertySymbols,Ym=Object.prototype.hasOwnProperty,Zm=Object.prototype.propertyIsEnumerable,Qm=(e,t)=>{var n={};for(var o in e)Ym.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&il)for(var o of il(e))t.indexOf(o)<0&&Zm.call(e,o)&&(n[o]=e[o]);return n};function Xm(e,t,n={}){const o=n,{window:i=Qe}=o,s=Qm(o,["window"]);let a;const l=Kr(()=>i&&"ResizeObserver"in i),c=()=>{a&&(a.disconnect(),a=void 0)},u=pe(()=>At(e),p=>{c(),l.value&&i&&p&&(a=new ResizeObserver(t),a.observe(p,s))},{immediate:!0,flush:"post"}),d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}function e0(e,t={}){const{immediate:n=!0,window:o=Qe}=t,i=U(!1);let s=null;function a(){!i.value||!o||(e(),s=o.requestAnimationFrame(a))}function l(){!i.value&&o&&(i.value=!0,a())}function c(){i.value=!1,s!=null&&o&&(o.cancelAnimationFrame(s),s=null)}return n&&l(),cn(c),{isActive:i,pause:c,resume:l}}function t0(e,t={width:0,height:0},n={}){const{box:o="content-box"}=n,i=U(t.width),s=U(t.height);return Xm(e,([a])=>{const l=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;l?(i.value=l.reduce((c,{inlineSize:u})=>c+u,0),s.value=l.reduce((c,{blockSize:u})=>c+u,0)):(i.value=a.contentRect.width,s.value=a.contentRect.height)},n),pe(()=>At(e),a=>{i.value=a?t.width:0,s.value=a?t.height:0}),{width:i,height:s}}const sl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function n0(e,t={}){const{document:n=Tm,autoExit:o=!1}=t,i=e||(n==null?void 0:n.querySelector("html")),s=U(!1);let a=sl[0];const l=Kr(()=>{if(n){for(const w of sl)if(w[1]in n)return a=w,!0}else return!1;return!1}),[c,u,d,,p]=a;async function f(){!l.value||(n!=null&&n[d]&&await n[u](),s.value=!1)}async function m(){if(!l.value)return;await f();const w=At(i);w&&(await w[c](),s.value=!0)}async function g(){s.value?await f():await m()}return n&&de(n,p,()=>{s.value=!!(n!=null&&n[d])},!1),o&&cn(f),{isSupported:l,isFullscreen:s,enter:m,exit:f,toggle:g}}function o0(e,t,n={}){const{root:o,rootMargin:i="0px",threshold:s=.1,window:a=Qe}=n,l=Kr(()=>a&&"IntersectionObserver"in a);let c=xn;const u=l.value?pe(()=>({el:At(e),root:At(o)}),({el:p,root:f})=>{if(c(),!p)return;const m=new IntersectionObserver(t,{root:f,rootMargin:i,threshold:s});m.observe(p),c=()=>{m.disconnect(),c=xn}},{immediate:!0,flush:"post"}):xn,d=()=>{c(),u()};return cn(d),{isSupported:l,stop:d}}const r0={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function i0(e={}){const{reactive:t=!1,target:n=Qe,aliasMap:o=r0,passive:i=!0,onEventFired:s=xn}=e,a=Fe(new Set),l={toJSON(){return{}},current:a},c=t?Fe(l):l,u=new Set,d=new Set;function p(w,v){w in c&&(t?c[w]=v:c[w].value=v)}function f(){for(const w of d)p(w,!1)}function m(w,v){var D,S;const x=(D=w.key)==null?void 0:D.toLowerCase(),q=[(S=w.code)==null?void 0:S.toLowerCase(),x].filter(Boolean);x&&(v?a.add(x):a.delete(x));for(const O of q)d.add(O),p(O,v);x==="meta"&&!v?(u.forEach(O=>{a.delete(O),p(O,!1)}),u.clear()):typeof w.getModifierState=="function"&&w.getModifierState("Meta")&&v&&[...a,...q].forEach(O=>u.add(O))}de(n,"keydown",w=>(m(w,!0),s(w)),{passive:i}),de(n,"keyup",w=>(m(w,!1),s(w)),{passive:i}),de("blur",f,{passive:!0}),de("focus",f,{passive:!0});const g=new Proxy(c,{get(w,v,D){if(typeof v!="string")return Reflect.get(w,v,D);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in c))if(/[+_-]/.test(v)){const x=v.split(/[+_-]/g).map($=>$.trim());c[v]=P(()=>x.every($=>b(g[$])))}else c[v]=U(!1);const S=Reflect.get(w,v,D);return t?b(S):S}});return g}function yC(e={}){const{type:t="page",touch:n=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:s=Qe,eventFilter:a}=e,l=U(i.x),c=U(i.y),u=U(null),d=w=>{t==="page"?(l.value=w.pageX,c.value=w.pageY):t==="client"&&(l.value=w.clientX,c.value=w.clientY),u.value="mouse"},p=()=>{l.value=i.x,c.value=i.y},f=w=>{if(w.touches.length>0){const v=w.touches[0];t==="page"?(l.value=v.pageX,c.value=v.pageY):t==="client"&&(l.value=v.clientX,c.value=v.clientY),u.value="touch"}},m=w=>a===void 0?d(w):a(()=>d(w),{}),g=w=>a===void 0?f(w):a(()=>f(w),{});return s&&(de(s,"mousemove",m,{passive:!0}),de(s,"dragover",m,{passive:!0}),n&&(de(s,"touchstart",g,{passive:!0}),de(s,"touchmove",g,{passive:!0}),o&&de(s,"touchend",p,{passive:!0}))),{x:l,y:c,sourceType:u}}var Ht;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Ht||(Ht={}));function s0(e,t={}){const n=em(e),{threshold:o=50,onSwipe:i,onSwipeEnd:s,onSwipeStart:a}=t,l=Fe({x:0,y:0}),c=(O,W)=>{l.x=O,l.y=W},u=Fe({x:0,y:0}),d=(O,W)=>{u.x=O,u.y=W},p=P(()=>l.x-u.x),f=P(()=>l.y-u.y),{max:m,abs:g}=Math,w=P(()=>m(g(p.value),g(f.value))>=o),v=U(!1),D=U(!1),S=P(()=>w.value?g(p.value)>g(f.value)?p.value>0?Ht.LEFT:Ht.RIGHT:f.value>0?Ht.UP:Ht.DOWN:Ht.NONE),x=O=>t.pointerTypes?t.pointerTypes.includes(O.pointerType):!0,$=[de(e,"pointerdown",O=>{var W,ne;if(!x(O))return;D.value=!0,(ne=(W=n.value)==null?void 0:W.style)==null||ne.setProperty("touch-action","none");const ae=O.target;ae==null||ae.setPointerCapture(O.pointerId);const{clientX:ge,clientY:_e}=O;c(ge,_e),d(ge,_e),a==null||a(O)}),de(e,"pointermove",O=>{if(!x(O)||!D.value)return;const{clientX:W,clientY:ne}=O;d(W,ne),!v.value&&w.value&&(v.value=!0),v.value&&(i==null||i(O))}),de(e,"pointerup",O=>{var W,ne;!x(O)||(v.value&&(s==null||s(O,S.value)),D.value=!1,v.value=!1,(ne=(W=n.value)==null?void 0:W.style)==null||ne.setProperty("touch-action","initial"))})],q=()=>$.forEach(O=>O());return{isSwiping:Bn(v),direction:Bn(S),posStart:Bn(l),posEnd:Bn(u),distanceX:p,distanceY:f,stop:q}}var a0=Object.defineProperty,al=Object.getOwnPropertySymbols,l0=Object.prototype.hasOwnProperty,c0=Object.prototype.propertyIsEnumerable,ll=(e,t,n)=>t in e?a0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u0=(e,t)=>{for(var n in t||(t={}))l0.call(t,n)&&ll(e,n,t[n]);if(al)for(var n of al(t))c0.call(t,n)&&ll(e,n,t[n]);return e};function _C(e={}){const{controls:t=!1,offset:n=0,immediate:o=!0,interval:i="requestAnimationFrame"}=e,s=U(Bi()+n),a=()=>s.value=Bi()+n,l=i==="requestAnimationFrame"?e0(a,{immediate:o}):dm(a,i,{immediate:o});return t?u0({timestamp:s},l):s}var d0=Object.defineProperty,cl=Object.getOwnPropertySymbols,h0=Object.prototype.hasOwnProperty,p0=Object.prototype.propertyIsEnumerable,ul=(e,t,n)=>t in e?d0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f0=(e,t)=>{for(var n in t||(t={}))h0.call(t,n)&&ul(e,n,t[n]);if(cl)for(var n of cl(t))p0.call(t,n)&&ul(e,n,t[n]);return e};const m0={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};f0({linear:Yf},m0);function jt(e,t,n,o={}){var i,s,a;const{clone:l=!1,passive:c=!1,eventName:u,deep:d=!1,defaultValue:p}=o,f=Cn(),m=n||(f==null?void 0:f.emit)||((i=f==null?void 0:f.$emit)==null?void 0:i.bind(f))||((a=(s=f==null?void 0:f.proxy)==null?void 0:s.$emit)==null?void 0:a.bind(f==null?void 0:f.proxy));let g=u;t||(t="modelValue"),g=u||g||`update:${t.toString()}`;const w=D=>l?Tr(l)?l(D):Fm(D):D,v=()=>Hf(e[t])?w(e[t]):p;if(c){const D=v(),S=U(D);return pe(()=>e[t],x=>S.value=w(x)),pe(S,x=>{(x!==e[t]||d)&&m(g,x)},{deep:d}),S}else return P({get(){return v()},set(D){m(g,D)}})}function vC({window:e=Qe}={}){if(!e)return U(!1);const t=U(e.document.hasFocus());return de(e,"blur",()=>{t.value=!1}),de(e,"focus",()=>{t.value=!0}),t}function g0(e={}){const{window:t=Qe,initialWidth:n=1/0,initialHeight:o=1/0,listenOrientation:i=!0,includeScrollbar:s=!0}=e,a=U(n),l=U(o),c=()=>{t&&(s?(a.value=t.innerWidth,l.value=t.innerHeight):(a.value=t.document.documentElement.clientWidth,l.value=t.document.documentElement.clientHeight))};return c(),ku(c),de("resize",c,{passive:!0}),i&&de("orientationchange",c,{passive:!0}),{width:a,height:l}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const In=typeof window<"u";function y0(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const xe=Object.assign;function li(e,t){const n={};for(const o in t){const i=t[o];n[o]=Mt(i)?i.map(e):e(i)}return n}const To=()=>{},Mt=Array.isArray,_0=/\/$/,v0=e=>e.replace(_0,"");function ci(e,t,n="/"){let o,i={},s="",a="";const l=t.indexOf("#");let c=t.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(o=t.slice(0,c),s=t.slice(c+1,l>-1?l:t.length),i=e(s)),l>-1&&(o=o||t.slice(0,l),a=t.slice(l,t.length)),o=T0(o!=null?o:t,n),{fullPath:o+(s&&"?")+s+a,path:o,query:i,hash:a}}function w0(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function dl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function b0(e,t,n){const o=t.matched.length-1,i=n.matched.length-1;return o>-1&&o===i&&to(t.matched[o],n.matched[i])&&Du(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function to(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Du(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!k0(e[n],t[n]))return!1;return!0}function k0(e,t){return Mt(e)?hl(e,t):Mt(t)?hl(t,e):e===t}function hl(e,t){return Mt(t)?e.length===t.length&&e.every((n,o)=>n===t[o]):e.length===1&&e[0]===t}function T0(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),o=e.split("/");let i=n.length-1,s,a;for(s=0;s<o.length;s++)if(a=o[s],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+o.slice(s-(s===o.length?1:0)).join("/")}var jo;(function(e){e.pop="pop",e.push="push"})(jo||(jo={}));var So;(function(e){e.back="back",e.forward="forward",e.unknown=""})(So||(So={}));function S0(e){if(!e)if(In){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),v0(e)}const x0=/^[^#]+#/;function D0(e,t){return e.replace(x0,"#")+t}function A0(e,t){const n=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:t.behavior,left:o.left-n.left-(t.left||0),top:o.top-n.top-(t.top||0)}}const Gr=()=>({left:window.pageXOffset,top:window.pageYOffset});function P0(e){let t;if("el"in e){const n=e.el,o=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?o?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=A0(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function pl(e,t){return(history.state?history.state.position-t:-1)+e}const Wi=new Map;function $0(e,t){Wi.set(e,t)}function C0(e){const t=Wi.get(e);return Wi.delete(e),t}let R0=()=>location.protocol+"//"+location.host;function Au(e,t){const{pathname:n,search:o,hash:i}=t,s=e.indexOf("#");if(s>-1){let l=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),dl(c,"")}return dl(n,e)+o+i}function M0(e,t,n,o){let i=[],s=[],a=null;const l=({state:f})=>{const m=Au(e,location),g=n.value,w=t.value;let v=0;if(f){if(n.value=m,t.value=f,a&&a===g){a=null;return}v=w?f.position-w.position:0}else o(m);i.forEach(D=>{D(n.value,g,{delta:v,type:jo.pop,direction:v?v>0?So.forward:So.back:So.unknown})})};function c(){a=n.value}function u(f){i.push(f);const m=()=>{const g=i.indexOf(f);g>-1&&i.splice(g,1)};return s.push(m),m}function d(){const{history:f}=window;!f.state||f.replaceState(xe({},f.state,{scroll:Gr()}),"")}function p(){for(const f of s)f();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d),{pauseListeners:c,listen:u,destroy:p}}function fl(e,t,n,o=!1,i=!1){return{back:e,current:t,forward:n,replaced:o,position:window.history.length,scroll:i?Gr():null}}function E0(e){const{history:t,location:n}=window,o={value:Au(e,n)},i={value:t.state};i.value||s(o.value,{back:null,current:o.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,u,d){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+c:R0()+e+c;try{t[d?"replaceState":"pushState"](u,"",f),i.value=u}catch(m){console.error(m),n[d?"replace":"assign"](f)}}function a(c,u){const d=xe({},t.state,fl(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,d,!0),o.value=c}function l(c,u){const d=xe({},i.value,t.state,{forward:c,scroll:Gr()});s(d.current,d,!0);const p=xe({},fl(o.value,c,null),{position:d.position+1},u);s(c,p,!1),o.value=c}return{location:o,state:i,push:l,replace:a}}function F0(e){e=S0(e);const t=E0(e),n=M0(e,t.state,t.location,t.replace);function o(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=xe({location:"",base:e,go:o,createHref:D0.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function O0(e){return typeof e=="string"||e&&typeof e=="object"}function Pu(e){return typeof e=="string"||typeof e=="symbol"}const Zt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$u=Symbol("");var ml;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(ml||(ml={}));function no(e,t){return xe(new Error,{type:e,[$u]:!0},t)}function Bt(e,t){return e instanceof Error&&$u in e&&(t==null||!!(e.type&t))}const gl="[^/]+?",L0={sensitive:!1,strict:!1,start:!0,end:!0},z0=/[.+*?^${}()[\]/\\]/g;function j0(e,t){const n=xe({},L0,t),o=[];let i=n.start?"^":"";const s=[];for(const u of e){const d=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const f=u[p];let m=40+(n.sensitive?.25:0);if(f.type===0)p||(i+="/"),i+=f.value.replace(z0,"\\$&"),m+=40;else if(f.type===1){const{value:g,repeatable:w,optional:v,regexp:D}=f;s.push({name:g,repeatable:w,optional:v});const S=D||gl;if(S!==gl){m+=10;try{new RegExp(`(${S})`)}catch($){throw new Error(`Invalid custom RegExp for param "${g}" (${S}): `+$.message)}}let x=w?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;p||(x=v&&u.length<2?`(?:/${x})`:"/"+x),v&&(x+="?"),i+=x,m+=20,v&&(m+=-8),w&&(m+=-20),S===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(n.strict&&n.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function l(u){const d=u.match(a),p={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",g=s[f-1];p[g.name]=m&&g.repeatable?m.split("/"):m}return p}function c(u){let d="",p=!1;for(const f of e){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:g,repeatable:w,optional:v}=m,D=g in u?u[g]:"";if(Mt(D)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const S=Mt(D)?D.join("/"):D;if(!S)if(v)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${g}"`);d+=S}}return d||"/"}return{re:a,score:o,keys:s,parse:l,stringify:c}}function q0(e,t){let n=0;for(;n<e.length&&n<t.length;){const o=t[n]-e[n];if(o)return o;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function I0(e,t){let n=0;const o=e.score,i=t.score;for(;n<o.length&&n<i.length;){const s=q0(o[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-o.length)===1){if(yl(o))return 1;if(yl(i))return-1}return i.length-o.length}function yl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const B0={type:0,value:""},V0=/[a-zA-Z0-9_]/;function N0(e){if(!e)return[[]];if(e==="/")return[[B0]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,o=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let l=0,c,u="",d="";function p(){!u||(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=c}for(;l<e.length;){if(c=e[l++],c==="\\"&&n!==2){o=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):f();break;case 4:f(),n=o;break;case 1:c==="("?n=2:V0.test(c)?f():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),p(),a(),i}function W0(e,t,n){const o=j0(N0(e.path),n),i=xe(o,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function H0(e,t){const n=[],o=new Map;t=wl({strict:!1,end:!0,sensitive:!1},t);function i(d){return o.get(d)}function s(d,p,f){const m=!f,g=U0(d);g.aliasOf=f&&f.record;const w=wl(t,d),v=[g];if("alias"in d){const x=typeof d.alias=="string"?[d.alias]:d.alias;for(const $ of x)v.push(xe({},g,{components:f?f.record.components:g.components,path:$,aliasOf:f?f.record:g}))}let D,S;for(const x of v){const{path:$}=x;if(p&&$[0]!=="/"){const q=p.record.path,O=q[q.length-1]==="/"?"":"/";x.path=p.record.path+($&&O+$)}if(D=W0(x,p,w),f?f.alias.push(D):(S=S||D,S!==D&&S.alias.push(D),m&&d.name&&!vl(D)&&a(d.name)),g.children){const q=g.children;for(let O=0;O<q.length;O++)s(q[O],D,f&&f.children[O])}f=f||D,c(D)}return S?()=>{a(S)}:To}function a(d){if(Pu(d)){const p=o.get(d);p&&(o.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(a),p.alias.forEach(a))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function l(){return n}function c(d){let p=0;for(;p<n.length&&I0(d,n[p])>=0&&(d.record.path!==n[p].record.path||!Cu(d,n[p]));)p++;n.splice(p,0,d),d.record.name&&!vl(d)&&o.set(d.record.name,d)}function u(d,p){let f,m={},g,w;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw no(1,{location:d});w=f.record.name,m=xe(_l(p.params,f.keys.filter(S=>!S.optional).map(S=>S.name)),d.params&&_l(d.params,f.keys.map(S=>S.name))),g=f.stringify(m)}else if("path"in d)g=d.path,f=n.find(S=>S.re.test(g)),f&&(m=f.parse(g),w=f.record.name);else{if(f=p.name?o.get(p.name):n.find(S=>S.re.test(p.path)),!f)throw no(1,{location:d,currentLocation:p});w=f.record.name,m=xe({},p.params,d.params),g=f.stringify(m)}const v=[];let D=f;for(;D;)v.unshift(D.record),D=D.parent;return{name:w,path:g,params:m,matched:v,meta:G0(v)}}return e.forEach(d=>s(d)),{addRoute:s,resolve:u,removeRoute:a,getRoutes:l,getRecordMatcher:i}}function _l(e,t){const n={};for(const o of t)o in e&&(n[o]=e[o]);return n}function U0(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:K0(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function K0(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const o in e.components)t[o]=typeof n=="boolean"?n:n[o];return t}function vl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function G0(e){return e.reduce((t,n)=>xe(t,n.meta),{})}function wl(e,t){const n={};for(const o in e)n[o]=o in t?t[o]:e[o];return n}function Cu(e,t){return t.children.some(n=>n===e||Cu(e,n))}const Ru=/#/g,J0=/&/g,Y0=/\//g,Z0=/=/g,Q0=/\?/g,Mu=/\+/g,X0=/%5B/g,e1=/%5D/g,Eu=/%5E/g,t1=/%60/g,Fu=/%7B/g,n1=/%7C/g,Ou=/%7D/g,o1=/%20/g;function Ls(e){return encodeURI(""+e).replace(n1,"|").replace(X0,"[").replace(e1,"]")}function r1(e){return Ls(e).replace(Fu,"{").replace(Ou,"}").replace(Eu,"^")}function Hi(e){return Ls(e).replace(Mu,"%2B").replace(o1,"+").replace(Ru,"%23").replace(J0,"%26").replace(t1,"`").replace(Fu,"{").replace(Ou,"}").replace(Eu,"^")}function i1(e){return Hi(e).replace(Z0,"%3D")}function s1(e){return Ls(e).replace(Ru,"%23").replace(Q0,"%3F")}function a1(e){return e==null?"":s1(e).replace(Y0,"%2F")}function xr(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function l1(e){const t={};if(e===""||e==="?")return t;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<o.length;++i){const s=o[i].replace(Mu," "),a=s.indexOf("="),l=xr(a<0?s:s.slice(0,a)),c=a<0?null:xr(s.slice(a+1));if(l in t){let u=t[l];Mt(u)||(u=t[l]=[u]),u.push(c)}else t[l]=c}return t}function bl(e){let t="";for(let n in e){const o=e[n];if(n=i1(n),o==null){o!==void 0&&(t+=(t.length?"&":"")+n);continue}(Mt(o)?o.map(s=>s&&Hi(s)):[o&&Hi(o)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function c1(e){const t={};for(const n in e){const o=e[n];o!==void 0&&(t[n]=Mt(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return t}const u1=Symbol(""),kl=Symbol(""),zs=Symbol(""),Lu=Symbol(""),Ui=Symbol("");function fo(){let e=[];function t(o){return e.push(o),()=>{const i=e.indexOf(o);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Xt(e,t,n,o,i){const s=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=p=>{p===!1?l(no(4,{from:n,to:t})):p instanceof Error?l(p):O0(p)?l(no(2,{from:t,to:p})):(s&&o.enterCallbacks[i]===s&&typeof p=="function"&&s.push(p),a())},u=e.call(o&&o.instances[i],t,n,c);let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function ui(e,t,n,o){const i=[];for(const s of e)for(const a in s.components){let l=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(d1(l)){const u=(l.__vccOpts||l)[t];u&&i.push(Xt(u,n,o,s,a))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const d=y0(u)?u.default:u;s.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Xt(f,n,o,s,a)()}))}}return i}function d1(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Tl(e){const t=F(zs),n=F(Lu),o=P(()=>t.resolve(b(e.to))),i=P(()=>{const{matched:c}=o.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const f=p.findIndex(to.bind(null,d));if(f>-1)return f;const m=Sl(c[u-2]);return u>1&&Sl(d)===m&&p[p.length-1].path!==m?p.findIndex(to.bind(null,c[u-2])):f}),s=P(()=>i.value>-1&&m1(n.params,o.value.params)),a=P(()=>i.value>-1&&i.value===n.matched.length-1&&Du(n.params,o.value.params));function l(c={}){return f1(c)?t[b(e.replace)?"replace":"push"](b(e.to)).catch(To):Promise.resolve()}return{route:o,href:P(()=>o.value.href),isActive:s,isExactActive:a,navigate:l}}const h1=Se({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Tl,setup(e,{slots:t}){const n=Fe(Tl(e)),{options:o}=F(zs),i=P(()=>({[xl(e.activeClass,o.linkActiveClass,"router-link-active")]:n.isActive,[xl(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:ft("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),p1=h1;function f1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function m1(e,t){for(const n in t){const o=t[n],i=e[n];if(typeof o=="string"){if(o!==i)return!1}else if(!Mt(i)||i.length!==o.length||o.some((s,a)=>s!==i[a]))return!1}return!0}function Sl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xl=(e,t,n)=>e!=null?e:t!=null?t:n,g1=Se({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const o=F(Ui),i=P(()=>e.route||o.value),s=F(kl,0),a=P(()=>{let u=b(s);const{matched:d}=i.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=P(()=>i.value.matched[a.value]);ht(kl,P(()=>a.value+1)),ht(u1,l),ht(Ui,i);const c=U();return pe(()=>[c.value,l.value,e.name],([u,d,p],[f,m,g])=>{d&&(d.instances[p]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!to(d,m)||!f)&&(d.enterCallbacks[p]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,d=e.name,p=l.value,f=p&&p.components[d];if(!f)return Dl(n.default,{Component:f,route:u});const m=p.props[d],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,v=ft(f,xe({},g,t,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Dl(n.default,{Component:v,route:u})||v}}});function Dl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const y1=g1;function _1(e){const t=H0(e.routes,e),n=e.parseQuery||l1,o=e.stringifyQuery||bl,i=e.history,s=fo(),a=fo(),l=fo(),c=Rt(Zt);let u=Zt;In&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=li.bind(null,C=>""+C),p=li.bind(null,a1),f=li.bind(null,xr);function m(C,G){let V,Z;return Pu(C)?(V=t.getRecordMatcher(C),Z=G):Z=C,t.addRoute(Z,V)}function g(C){const G=t.getRecordMatcher(C);G&&t.removeRoute(G)}function w(){return t.getRoutes().map(C=>C.record)}function v(C){return!!t.getRecordMatcher(C)}function D(C,G){if(G=xe({},G||c.value),typeof C=="string"){const oe=ci(n,C,G.path),y=t.resolve({path:oe.path},G),_=i.createHref(oe.fullPath);return xe(oe,y,{params:f(y.params),hash:xr(oe.hash),redirectedFrom:void 0,href:_})}let V;if("path"in C)V=xe({},C,{path:ci(n,C.path,G.path).path});else{const oe=xe({},C.params);for(const y in oe)oe[y]==null&&delete oe[y];V=xe({},C,{params:p(C.params)}),G.params=p(G.params)}const Z=t.resolve(V,G),we=C.hash||"";Z.params=d(f(Z.params));const fe=w0(o,xe({},C,{hash:r1(we),path:Z.path})),le=i.createHref(fe);return xe({fullPath:fe,hash:we,query:o===bl?c1(C.query):C.query||{}},Z,{redirectedFrom:void 0,href:le})}function S(C){return typeof C=="string"?ci(n,C,c.value.path):xe({},C)}function x(C,G){if(u!==C)return no(8,{from:G,to:C})}function $(C){return W(C)}function q(C){return $(xe(S(C),{replace:!0}))}function O(C){const G=C.matched[C.matched.length-1];if(G&&G.redirect){const{redirect:V}=G;let Z=typeof V=="function"?V(C):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=S(Z):{path:Z},Z.params={}),xe({query:C.query,hash:C.hash,params:"path"in Z?{}:C.params},Z)}}function W(C,G){const V=u=D(C),Z=c.value,we=C.state,fe=C.force,le=C.replace===!0,oe=O(V);if(oe)return W(xe(S(oe),{state:typeof oe=="object"?xe({},we,oe.state):we,force:fe,replace:le}),G||V);const y=V;y.redirectedFrom=G;let _;return!fe&&b0(o,Z,V)&&(_=no(16,{to:y,from:Z}),Ae(Z,Z,!0,!1)),(_?Promise.resolve(_):ae(y,Z)).catch(T=>Bt(T)?Bt(T,2)?T:he(T):J(T,y,Z)).then(T=>{if(T){if(Bt(T,2))return W(xe({replace:le},S(T.to),{state:typeof T.to=="object"?xe({},we,T.to.state):we,force:fe}),G||y)}else T=_e(y,Z,!0,le,we);return ge(y,Z,T),T})}function ne(C,G){const V=x(C,G);return V?Promise.reject(V):Promise.resolve()}function ae(C,G){let V;const[Z,we,fe]=v1(C,G);V=ui(Z.reverse(),"beforeRouteLeave",C,G);for(const oe of Z)oe.leaveGuards.forEach(y=>{V.push(Xt(y,C,G))});const le=ne.bind(null,C,G);return V.push(le),On(V).then(()=>{V=[];for(const oe of s.list())V.push(Xt(oe,C,G));return V.push(le),On(V)}).then(()=>{V=ui(we,"beforeRouteUpdate",C,G);for(const oe of we)oe.updateGuards.forEach(y=>{V.push(Xt(y,C,G))});return V.push(le),On(V)}).then(()=>{V=[];for(const oe of C.matched)if(oe.beforeEnter&&!G.matched.includes(oe))if(Mt(oe.beforeEnter))for(const y of oe.beforeEnter)V.push(Xt(y,C,G));else V.push(Xt(oe.beforeEnter,C,G));return V.push(le),On(V)}).then(()=>(C.matched.forEach(oe=>oe.enterCallbacks={}),V=ui(fe,"beforeRouteEnter",C,G),V.push(le),On(V))).then(()=>{V=[];for(const oe of a.list())V.push(Xt(oe,C,G));return V.push(le),On(V)}).catch(oe=>Bt(oe,8)?oe:Promise.reject(oe))}function ge(C,G,V){for(const Z of l.list())Z(C,G,V)}function _e(C,G,V,Z,we){const fe=x(C,G);if(fe)return fe;const le=G===Zt,oe=In?history.state:{};V&&(Z||le?i.replace(C.fullPath,xe({scroll:le&&oe&&oe.scroll},we)):i.push(C.fullPath,we)),c.value=C,Ae(C,G,V,le),he()}let Be;function Ve(){Be||(Be=i.listen((C,G,V)=>{if(!un.listening)return;const Z=D(C),we=O(Z);if(we){W(xe(we,{replace:!0}),Z).catch(To);return}u=Z;const fe=c.value;In&&$0(pl(fe.fullPath,V.delta),Gr()),ae(Z,fe).catch(le=>Bt(le,12)?le:Bt(le,2)?(W(le.to,Z).then(oe=>{Bt(oe,20)&&!V.delta&&V.type===jo.pop&&i.go(-1,!1)}).catch(To),Promise.reject()):(V.delta&&i.go(-V.delta,!1),J(le,Z,fe))).then(le=>{le=le||_e(Z,fe,!1),le&&(V.delta&&!Bt(le,8)?i.go(-V.delta,!1):V.type===jo.pop&&Bt(le,20)&&i.go(-1,!1)),ge(Z,fe,le)}).catch(To)}))}let qe=fo(),Me=fo(),Le;function J(C,G,V){he(C);const Z=Me.list();return Z.length?Z.forEach(we=>we(C,G,V)):console.error(C),Promise.reject(C)}function re(){return Le&&c.value!==Zt?Promise.resolve():new Promise((C,G)=>{qe.add([C,G])})}function he(C){return Le||(Le=!C,Ve(),qe.list().forEach(([G,V])=>C?V(C):G()),qe.reset()),C}function Ae(C,G,V,Z){const{scrollBehavior:we}=e;if(!In||!we)return Promise.resolve();const fe=!V&&C0(pl(C.fullPath,0))||(Z||!V)&&history.state&&history.state.scroll||null;return Ye().then(()=>we(C,G,fe)).then(le=>le&&P0(le)).catch(le=>J(le,C,G))}const st=C=>i.go(C);let Ge;const rt=new Set,un={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,hasRoute:v,getRoutes:w,resolve:D,options:e,push:$,replace:q,go:st,back:()=>st(-1),forward:()=>st(1),beforeEach:s.add,beforeResolve:a.add,afterEach:l.add,onError:Me.add,isReady:re,install(C){const G=this;C.component("RouterLink",p1),C.component("RouterView",y1),C.config.globalProperties.$router=G,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>b(c)}),In&&!Ge&&c.value===Zt&&(Ge=!0,$(i.location).catch(we=>{}));const V={};for(const we in Zt)V[we]=P(()=>c.value[we]);C.provide(zs,G),C.provide(Lu,Fe(V)),C.provide(Ui,c);const Z=C.unmount;rt.add(C),C.unmount=function(){rt.delete(C),rt.size<1&&(u=Zt,Be&&Be(),Be=null,c.value=Zt,Ge=!1,Le=!1),Z()}}};return un}function On(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function v1(e,t){const n=[],o=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const l=t.matched[a];l&&(e.matched.find(u=>to(u,l))?o.push(l):n.push(l));const c=e.matched[a];c&&(t.matched.find(u=>to(u,c))||i.push(c))}return[n,o,i]}const di=U(!1),xo=U(!1),Vn=U(!1),w1=U(!0),Ki=Em({xs:460,...Pm}),Dn=g0(),zu=i0(),b1=P(()=>Dn.height.value-Dn.width.value/on>180),ju=n0(Kt?document.body:null),Jn=Am(),k1=P(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")||((t=Jn.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),T1=P(()=>{var e;return["BUTTON","A"].includes(((e=Jn.value)==null?void 0:e.tagName)||"")});Et("slidev-camera","default");Et("slidev-mic","default");const dr=Et("slidev-scale",0),et=Et("slidev-show-overview",!1),hi=Et("slidev-presenter-cursor",!0),Al=Et("slidev-show-editor",!1);Et("slidev-editor-width",Kt?window.innerWidth*.4:100);const qu=Tu(et);function Pl(e,t,n,o=i=>i){return e*o(.5-t*(.5-n))}function S1(e){return[-e[0],-e[1]]}function St(e,t){return[e[0]+t[0],e[1]+t[1]]}function vt(e,t){return[e[0]-t[0],e[1]-t[1]]}function Tt(e,t){return[e[0]*t,e[1]*t]}function x1(e,t){return[e[0]/t,e[1]/t]}function mo(e){return[e[1],-e[0]]}function $l(e,t){return e[0]*t[0]+e[1]*t[1]}function D1(e,t){return e[0]===t[0]&&e[1]===t[1]}function A1(e){return Math.hypot(e[0],e[1])}function P1(e){return e[0]*e[0]+e[1]*e[1]}function Cl(e,t){return P1(vt(e,t))}function Iu(e){return x1(e,A1(e))}function $1(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function go(e,t,n){let o=Math.sin(n),i=Math.cos(n),s=e[0]-t[0],a=e[1]-t[1],l=s*i-a*o,c=s*o+a*i;return[l+t[0],c+t[1]]}function Gi(e,t,n){return St(e,Tt(vt(t,e),n))}function Rl(e,t,n){return St(e,Tt(t,n))}var{min:Ln,PI:C1}=Math,Ml=.275,yo=C1+1e-4;function R1(e,t={}){let{size:n=16,smoothing:o=.5,thinning:i=.5,simulatePressure:s=!0,easing:a=J=>J,start:l={},end:c={},last:u=!1}=t,{cap:d=!0,easing:p=J=>J*(2-J)}=l,{cap:f=!0,easing:m=J=>--J*J*J+1}=c;if(e.length===0||n<=0)return[];let g=e[e.length-1].runningLength,w=l.taper===!1?0:l.taper===!0?Math.max(n,g):l.taper,v=c.taper===!1?0:c.taper===!0?Math.max(n,g):c.taper,D=Math.pow(n*o,2),S=[],x=[],$=e.slice(0,10).reduce((J,re)=>{let he=re.pressure;if(s){let Ae=Ln(1,re.distance/n),st=Ln(1,1-Ae);he=Ln(1,J+(st-J)*(Ae*Ml))}return(J+he)/2},e[0].pressure),q=Pl(n,i,e[e.length-1].pressure,a),O,W=e[0].vector,ne=e[0].point,ae=ne,ge=ne,_e=ae,Be=!1;for(let J=0;J<e.length;J++){let{pressure:re}=e[J],{point:he,vector:Ae,distance:st,runningLength:Ge}=e[J];if(J<e.length-1&&g-Ge<3)continue;if(i){if(s){let fe=Ln(1,st/n),le=Ln(1,1-fe);re=Ln(1,$+(le-$)*(fe*Ml))}q=Pl(n,i,re,a)}else q=n/2;O===void 0&&(O=q);let rt=Ge<w?p(Ge/w):1,un=g-Ge<v?m((g-Ge)/v):1;q=Math.max(.01,q*Math.min(rt,un));let C=(J<e.length-1?e[J+1]:e[J]).vector,G=J<e.length-1?$l(Ae,C):1,V=$l(Ae,W)<0&&!Be,Z=G!==null&&G<0;if(V||Z){let fe=Tt(mo(W),q);for(let le=1/13,oe=0;oe<=1;oe+=le)ge=go(vt(he,fe),he,yo*oe),S.push(ge),_e=go(St(he,fe),he,yo*-oe),x.push(_e);ne=ge,ae=_e,Z&&(Be=!0);continue}if(Be=!1,J===e.length-1){let fe=Tt(mo(Ae),q);S.push(vt(he,fe)),x.push(St(he,fe));continue}let we=Tt(mo(Gi(C,Ae,G)),q);ge=vt(he,we),(J<=1||Cl(ne,ge)>D)&&(S.push(ge),ne=ge),_e=St(he,we),(J<=1||Cl(ae,_e)>D)&&(x.push(_e),ae=_e),$=re,W=Ae}let Ve=e[0].point.slice(0,2),qe=e.length>1?e[e.length-1].point.slice(0,2):St(e[0].point,[1,1]),Me=[],Le=[];if(e.length===1){if(!(w||v)||u){let J=Rl(Ve,Iu(mo(vt(Ve,qe))),-(O||q)),re=[];for(let he=1/13,Ae=he;Ae<=1;Ae+=he)re.push(go(J,Ve,yo*2*Ae));return re}}else{if(!(w||v&&e.length===1))if(d)for(let re=1/13,he=re;he<=1;he+=re){let Ae=go(x[0],Ve,yo*he);Me.push(Ae)}else{let re=vt(S[0],x[0]),he=Tt(re,.5),Ae=Tt(re,.51);Me.push(vt(Ve,he),vt(Ve,Ae),St(Ve,Ae),St(Ve,he))}let J=mo(S1(e[e.length-1].vector));if(v||w&&e.length===1)Le.push(qe);else if(f){let re=Rl(qe,J,q);for(let he=1/29,Ae=he;Ae<1;Ae+=he)Le.push(go(re,qe,yo*3*Ae))}else Le.push(St(qe,Tt(J,q)),St(qe,Tt(J,q*.99)),vt(qe,Tt(J,q*.99)),vt(qe,Tt(J,q)))}return S.concat(Le,x.reverse(),Me)}function M1(e,t={}){var n;let{streamline:o=.5,size:i=16,last:s=!1}=t;if(e.length===0)return[];let a=.15+(1-o)*.85,l=Array.isArray(e[0])?e:e.map(({x:m,y:g,pressure:w=.5})=>[m,g,w]);if(l.length===2){let m=l[1];l=l.slice(0,-1);for(let g=1;g<5;g++)l.push(Gi(l[0],m,g/4))}l.length===1&&(l=[...l,[...St(l[0],[1,1]),...l[0].slice(2)]]);let c=[{point:[l[0][0],l[0][1]],pressure:l[0][2]>=0?l[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,p=c[0],f=l.length-1;for(let m=1;m<l.length;m++){let g=s&&m===f?l[m].slice(0,2):Gi(p.point,l[m],a);if(D1(p.point,g))continue;let w=$1(g,p.point);if(d+=w,m<f&&!u){if(d<i)continue;u=!0}p={point:g,pressure:l[m][2]>=0?l[m][2]:.5,vector:Iu(vt(p.point,g)),distance:w,runningLength:d},c.push(p)}return c[0].vector=((n=c[1])==null?void 0:n.vector)||[0,0],c}function E1(e,t={}){return R1(M1(e,t),t)}var F1=()=>({events:{},emit(e,...t){let n=this.events[e]||[];for(let o=0,i=n.length;o<i;o++)n[o](...t)},on(e,t){var n;return(n=this.events[e])!=null&&n.push(t)||(this.events[e]=[t]),()=>{var o;this.events[e]=(o=this.events[e])==null?void 0:o.filter(i=>t!==i)}}});function Dr(e,t){return e-t}function O1(e){return e<0?-1:1}function Ar(e){return[Math.abs(e),O1(e)]}function Bu(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var L1=2,Wt=L1,ao=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var i;var t;const n=this.drauu.el,o=(i=this.drauu.options.coordinateScale)!=null?i:1;if(this.drauu.options.coordinateTransform===!1){const s=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-s.left)*o,y:(e.pageY-s.top)*o,pressure:e.pressure}}else{const s=this.drauu.svgPoint;s.x=e.clientX,s.y=e.clientY;const a=s.matrixTransform((t=n.getScreenCTM())==null?void 0:t.inverse());return{x:a.x*o,y:a.y*o,pressure:e.pressure}}}createElement(e,t){var i;const n=document.createElementNS("http://www.w3.org/2000/svg",e),o=t?{...this.brush,...t}:this.brush;return n.setAttribute("fill",(i=o.fill)!=null?i:"transparent"),n.setAttribute("stroke",o.color),n.setAttribute("stroke-width",o.size.toString()),n.setAttribute("stroke-linecap","round"),o.dasharray&&n.setAttribute("stroke-dasharray",o.dasharray),n}attr(e,t){this.el.setAttribute(e,typeof t=="string"?t:t.toFixed(Wt))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},z1=class extends ao{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const t=E1(e,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!t.length)return"";const n=t.reduce((o,[i,s],a,l)=>{const[c,u]=l[(a+1)%l.length];return o.push(i,s,(i+c)/2,(s+u)/2),o},["M",...t[0],"Q"]);return n.push("Z"),n.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},j1=class extends ao{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Ar(e.x-this.start.x),[o,i]=Ar(e.y-this.start.y);if(this.shiftPressed){const s=Math.min(t,o);t=s,o=s}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",t),this.attr("ry",o);else{const[s,a]=[this.start.x,this.start.x+t*n].sort(Dr),[l,c]=[this.start.y,this.start.y+o*i].sort(Dr);this.attr("cx",(s+a)/2),this.attr("cy",(l+c)/2),this.attr("rx",(a-s)/2),this.attr("ry",(c-l)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Vu(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",t),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),n.appendChild(o),n}var q1=class extends ao{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const t=Bu(),n=document.createElementNS("http://www.w3.org/2000/svg","g");return n.append(Vu(t,this.brush.color)),n.append(this.el),this.attr("marker-end",`url(#${t})`),n}return this.el}onMove(e){if(!this.el)return!1;let{x:t,y:n}=e;if(this.shiftPressed){const o=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let s=o/i;s=Math.round(s),Math.abs(s)<=1?(t=this.start.x+i*s,n=this.start.y+i):(t=this.start.x+o,n=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-t),this.attr("y1",this.start.y*2-n),this.attr("x2",t),this.attr("y2",n)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",t),this.attr("y2",n)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},I1=class extends ao{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[t,n]=Ar(e.x-this.start.x),[o,i]=Ar(e.y-this.start.y);if(this.shiftPressed){const s=Math.min(t,o);t=s,o=s}if(this.altPressed)this.attr("x",this.start.x-t),this.attr("y",this.start.y-o),this.attr("width",t*2),this.attr("height",o*2);else{const[s,a]=[this.start.x,this.start.x+t*n].sort(Dr),[l,c]=[this.start.y,this.start.y+o*i].sort(Dr);this.attr("x",s),this.attr("y",l),this.attr("width",a-s),this.attr("height",c-l)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function B1(e,t){const n=e.x-t.x,o=e.y-t.y;return n*n+o*o}function V1(e,t,n){let o=t.x,i=t.y,s=n.x-o,a=n.y-i;if(s!==0||a!==0){const l=((e.x-o)*s+(e.y-i)*a)/(s*s+a*a);l>1?(o=n.x,i=n.y):l>0&&(o+=s*l,i+=a*l)}return s=e.x-o,a=e.y-i,s*s+a*a}function N1(e,t){let n=e[0];const o=[n];let i;for(let s=1,a=e.length;s<a;s++)i=e[s],B1(i,n)>t&&(o.push(i),n=i);return n!==i&&i&&o.push(i),o}function Ji(e,t,n,o,i){let s=o,a=0;for(let l=t+1;l<n;l++){const c=V1(e[l],e[t],e[n]);c>s&&(a=l,s=c)}s>o&&(a-t>1&&Ji(e,t,a,o,i),i.push(e[a]),n-a>1&&Ji(e,a,n,o,i))}function W1(e,t){const n=e.length-1,o=[e[0]];return Ji(e,0,n,t,o),o.push(e[n]),o}function El(e,t,n=!1){if(e.length<=2)return e;const o=t!==void 0?t*t:1;return e=n?e:N1(e,o),e=W1(e,o),e}var H1=class extends ao{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Bu();const t=Vu(this.arrowId,this.brush.color);this.el.appendChild(t)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=El(this.points,1,!0),this.count=0),this.attr("d",Ol(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",Ol(El(this.points,1,!0))),!e.getTotalLength()))}};function U1(e,t){const n=t.x-e.x,o=t.y-e.y;return{length:Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),angle:Math.atan2(o,n)}}function Fl(e,t,n,o){const i=t||e,s=n||e,a=.2,l=U1(i,s),c=l.angle+(o?Math.PI:0),u=l.length*a,d=e.x+Math.cos(c)*u,p=e.y+Math.sin(c)*u;return{x:d,y:p}}function K1(e,t,n){const o=Fl(n[t-1],n[t-2],e),i=Fl(e,n[t-1],n[t+1],!0);return`C ${o.x.toFixed(Wt)},${o.y.toFixed(Wt)} ${i.x.toFixed(Wt)},${i.y.toFixed(Wt)} ${e.x.toFixed(Wt)},${e.y.toFixed(Wt)}`}function Ol(e){return e.reduce((t,n,o,i)=>o===0?`M ${n.x.toFixed(Wt)},${n.y.toFixed(Wt)}`:`${t} ${K1(n,o,i)}`,"")}var G1=class extends ao{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const t=(n,o)=>{if(n&&n.length)for(let i=0;i<n.length;i++){const s=n[i];if(s.getTotalLength){const a=s.getTotalLength();for(let l=0;l<this.pathSubFactor;l++){const c=s.getPointAtLength(a*l/this.pathSubFactor),u=s.getPointAtLength(a*(l+1)/this.pathSubFactor);this.pathFragments.push({x1:c.x,x2:u.x,y1:c.y,y2:u.y,segment:l,element:o||s})}}else s.children&&t(s.children,s)}};e&&t(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const t=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,t}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const n=this.pathFragments[t],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(n,o)&&(n.element.remove(),e.push(t))}return e.length&&(this.pathFragments=this.pathFragments.filter((t,n)=>!e.includes(n))),e.length>0}lineLineIntersect(e,t){const n=e.x1,o=e.x2,i=t.x1,s=t.x2,a=e.y1,l=e.y2,c=t.y1,u=t.y2,d=(n-o)*(c-u)-(a-l)*(i-s),p=(n*l-a*o)*(i-s)-(n-o)*(i*u-c*s),f=(n*l-a*o)*(c-u)-(a-l)*(i*u-c*s),m=(g,w,v)=>g>=w&&g<=v?!0:g>=v&&g<=w;if(d===0)return!1;{const g={x:p/d,y:f/d};return m(g.x,n,o)&&m(g.y,a,l)&&m(g.x,i,s)&&m(g.y,c,u)}}};function J1(e){return{draw:new H1(e),stylus:new z1(e),line:new q1(e),rectangle:new I1(e),ellipse:new j1(e),eraseLine:new G1(e)}}var Y1=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=F1(),this._models=J1(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,t){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(t)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),s=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",s,{passive:!1}),window.addEventListener("pointercancel",s,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",s),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,t){return this._emitter.on(e,t)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const t=this.model._eventUp(e);t?(t instanceof Element&&t!==this._currentNode&&(this._currentNode=t),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Z1(e){return new Y1(e)}const Yi=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],qt=Et("slidev-drawing-enabled",!1),wC=Et("slidev-drawing-pinned",!1),Q1=U(!1),X1=U(!1),eg=U(!1),qo=U(!1),wn=Xf(Et("slidev-drawing-brush",{color:Yi[0],size:4,mode:"stylus"})),Ll=U("stylus"),Nu=P(()=>ke.drawings.syncAll||zt.value);let Io=!1;const _o=P({get(){return Ll.value},set(e){Ll.value=e,e==="arrow"?(wn.mode="line",wn.arrowEnd=!0):(wn.mode=e,wn.arrowEnd=!1)}}),tg=Fe({brush:wn,acceptsInputTypes:P(()=>qt.value?void 0:["pen"]),coordinateTransform:!1}),tt=jr(Z1(tg));function ng(){tt.clear(),Nu.value&&vu(He.value,"")}function Wu(){var e;X1.value=tt.canRedo(),Q1.value=tt.canUndo(),eg.value=!!((e=tt.el)!=null&&e.children.length)}function og(e){Io=!0;const t=kr[e||He.value];t!=null?tt.load(t):tt.clear(),Io=!1}tt.on("changed",()=>{if(Wu(),!Io){const e=tt.dump(),t=He.value;(kr[t]||"")!==e&&Nu.value&&vu(t,tt.dump())}});Vf(e=>{Io=!0,e[He.value]!=null&&tt.load(e[He.value]||""),Io=!1,Wu()});Ye(()=>{pe(He,()=>{!tt.mounted||og()},{immediate:!0})});tt.on("start",()=>qo.value=!0);tt.on("end",()=>qo.value=!1);window.addEventListener("keydown",e=>{if(!qt.value)return;const t=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let n=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?tt.redo():tt.undo():e.code==="Escape"?qt.value=!1:e.code==="KeyL"&&t?_o.value="line":e.code==="KeyA"&&t?_o.value="arrow":e.code==="KeyS"&&t?_o.value="stylus":e.code==="KeyR"&&t?_o.value="rectangle":e.code==="KeyE"&&t?_o.value="ellipse":e.code==="KeyC"&&t?ng():e.code.startsWith("Digit")&&t&&+e.code[5]<=Yi.length?wn.color=Yi[+e.code[5]-1]:n=!1,n&&(e.preventDefault(),e.stopPropagation())},!1);function Ne(...e){return P(()=>e.every(t=>pt(t)))}function ct(e){return P(()=>!pt(e))}const zl=Vm(),pi=Et("slidev-color-schema","auto"),Zi=P(()=>ke.colorSchema!=="auto"),js=P({get(){return Zi.value?ke.colorSchema==="dark":pi.value==="auto"?zl.value:pi.value==="dark"},set(e){Zi.value||(pi.value=e===zl.value?"auto":e?"dark":"light")}}),Hu=Tu(js);Kt&&pe(js,e=>{const t=document.querySelector("html");t.classList.toggle("dark",e),t.classList.toggle("light",!e)},{immediate:!0});const hr=U(1),pr=P(()=>We.length-1),mt=U(0),qs=U(0);function rg(){mt.value>hr.value&&(mt.value-=1)}function ig(){mt.value<pr.value&&(mt.value+=1)}function sg(){if(mt.value>hr.value){let e=mt.value-qs.value;e<hr.value&&(e=hr.value),mt.value=e}}function ag(){if(mt.value<pr.value){let e=mt.value+qs.value;e>pr.value&&(e=pr.value),mt.value=e}}function lg(){const{escape:e,space:t,shift:n,left:o,right:i,up:s,down:a,enter:l,d:c,g:u,o:d}=zu,p=[{name:"next_space",key:Ne(t,ct(n)),fn:rn,autoRepeat:!0},{name:"prev_space",key:Ne(t,n),fn:sn,autoRepeat:!0},{name:"next_right",key:Ne(i,ct(n),ct(et)),fn:rn,autoRepeat:!0},{name:"prev_left",key:Ne(o,ct(n),ct(et)),fn:sn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:rn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:sn,autoRepeat:!0},{name:"next_down",key:Ne(a,ct(et)),fn:Bo,autoRepeat:!0},{name:"prev_up",key:Ne(s,ct(et)),fn:()=>Vo(!1),autoRepeat:!0},{name:"next_shift",key:Ne(i,n),fn:Bo,autoRepeat:!0},{name:"prev_shift",key:Ne(o,n),fn:()=>Vo(!1),autoRepeat:!0},{name:"toggle_dark",key:Ne(c,ct(qt)),fn:Hu},{name:"toggle_overview",key:Ne(d,ct(qt)),fn:qu},{name:"hide_overview",key:Ne(e,ct(qt)),fn:()=>et.value=!1},{name:"goto",key:Ne(u,ct(qt)),fn:()=>Vn.value=!Vn.value},{name:"next_overview",key:Ne(i,et),fn:ig},{name:"prev_overview",key:Ne(o,et),fn:rg},{name:"up_overview",key:Ne(s,et),fn:sg},{name:"down_overview",key:Ne(a,et),fn:ag},{name:"goto_from_overview",key:Ne(l,et),fn:()=>{oo(mt.value),et.value=!1}}];return{customShortcuts:[],defaultShortcuts:p}}const Uu=Ne(ct(k1),ct(T1),w1);function cg(e,t,n=!1){typeof e=="string"&&(e=zu[e]);const o=Ne(e,Uu);let i=0,s;const a=()=>{if(clearTimeout(s),!o.value){i=0;return}n&&(s=setTimeout(a,Math.max(1e3-i*250,150)),i++),t()};return pe(o,a,{flush:"sync"})}function ug(e,t){return Dm(e,n=>{!Uu.value||n.repeat||t()})}function dg(){const{customShortcuts:e,defaultShortcuts:t}=lg();new Map([...t,...e].map(o=>[o.key,o])).forEach(o=>{o.fn&&cg(o.key,o.fn,o.autoRepeat)}),ug("f",()=>ju.toggle())}const hg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pg=r("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),fg=[pg];function mg(e,t){return k(),K("svg",hg,fg)}const gg={name:"carbon-close",render:mg};function Is(e){var n,o;const t=(o=(n=e==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:o.no;return t!=null?`slidev-page-${t}`:""}const Ku=Se({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const t=e;F(B);const n=U(),o=t0(n),i=P(()=>t.width?t.width:o.width.value),s=P(()=>t.width?t.width/on:o.height.value);t.width&&Vr(()=>{n.value&&(n.value.style.width=`${i.value}px`,n.value.style.height=`${s.value}px`)});const a=P(()=>i.value/s.value),l=P(()=>t.scale?t.scale:a.value<on?i.value/Sn:s.value*on/Sn),c=P(()=>({height:`${gu}px`,width:`${Sn}px`,transform:`translate(-50%, -50%) scale(${l.value})`})),u=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(mu,l),(d,p)=>(k(),K("div",{id:"slide-container",ref_key:"root",ref:n,class:je(b(u))},[r("div",{id:"slide-content",style:nt(b(c))},[wt(d.$slots,"default")],4),wt(d.$slots,"controls")],2))}});const Bs=Se({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:t}){const n=jt(e,"clicks",t),o=jt(e,"clicksElements",t),i=jt(e,"clicksDisabled",t),s=jt(e,"clicksOrderMap",t);o.value.length=0,ht(Cf,e.route),ht(Rf,e.context),ht(cr,n),ht(ur,i),ht(jn,o),ht(qi,s)},render(){var e,t;return this.$props.is?ft(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),yg=["innerHTML"],_g=Se({__name:"DrawingPreview",props:{page:null},setup(e){return F(B),(t,n)=>b(kr)[e.page]?(k(),K("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(kr)[e.page]},null,8,yg)):me("v-if",!0)}}),vg={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},wg=["onClick"],bg=Se({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:t}){const n=e;F(B);const o=jt(n,"modelValue",t);function i(){o.value=!1}function s(m){oo(m),i()}function a(m){return m===mt.value}const l=Ki.smaller("xs"),c=Ki.smaller("sm"),u=4*16*2,d=2*16,p=P(()=>l.value?Dn.width.value-u:c.value?(Dn.width.value-u-d)/2:300),f=P(()=>Math.floor((Dn.width.value-u)/(p.value+d)));return Vr(()=>{mt.value=He.value,qs.value=f.value}),(m,g)=>{const w=gg;return k(),K(De,null,[Cs(r("div",vg,[r("div",{class:"grid gap-y-4 gap-x-8 w-full",style:nt(`grid-template-columns: repeat(auto-fit,minmax(${b(p)}px,1fr))`)},[(k(!0),K(De,null,Uo(b(We).slice(0,-1),(v,D)=>(k(),K("div",{key:v.path,class:"relative"},[r("div",{class:je(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(D+1)}]),onClick:S=>s(+v.path)},[(k(),j(Ku,{key:v.path,width:b(p),"clicks-disabled":!0,class:"pointer-events-none"},{default:A(()=>[I(b(Bs),{is:v==null?void 0:v.component,"clicks-disabled":!0,class:je(b(Is)(v)),route:v,context:"overview"},null,8,["is","class","route"]),I(_g,{page:+v.path},null,8,["page"])]),_:2},1032,["width"]))],10,wg),r("div",{class:"absolute top-0 opacity-50",style:nt(`left: ${b(p)+5}px`)},An(D+1),5)]))),128))],4)],512),[[hu,b(o)]]),b(o)?(k(),K("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[I(w)])):me("v-if",!0)],64)}}});const kg="/assets/logo.b72bde5d.png",Tg={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Sg=Se({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(B);const o=jt(n,"modelValue",t);function i(){o.value=!1}return(s,a)=>(k(),j(Gc,null,[b(o)?(k(),K("div",Tg,[r("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=l=>i())}),r("div",{class:je(["m-auto rounded-md bg-main shadow",n.class]),"dark:border":"~ gray-400 opacity-10"},[wt(s.$slots,"default")],2)])):me("v-if",!0)],1024))}}),xg={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Dg=["innerHTML"],Ag=r("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[r("div",{class:"flex gap-1 children:my-auto"},[r("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),r("img",{class:"w-5 h-5",src:kg,alt:"Slidev"}),r("div",{style:{color:"#2082A6"}},[r("b",null,"Sli"),h("dev ")])])],-1),Pg=Se({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:t}){const n=e;F(B);const o=jt(n,"modelValue",t),i=P(()=>typeof ke.info=="string");return(s,a)=>(k(),j(Sg,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=l=>Te(o)?o.value=l:null),class:"px-6 py-4"},{default:A(()=>[r("div",xg,[b(i)?(k(),K("div",{key:0,class:"mb-4",innerHTML:b(ke).info},null,8,Dg)):me("v-if",!0),Ag])]),_:1},8,["modelValue"]))}});const $g=["disabled","onKeydown"],Cg=Se({__name:"Goto",setup(e){F(B);const t=U(),n=U(""),o=P(()=>{if(n.value.startsWith("/"))return!!We.find(a=>a.path===n.value.substring(1));{const a=+n.value;return!isNaN(a)&&a>0&&a<=td.value}});function i(){o.value&&(n.value.startsWith("/")?oo(n.value.substring(1)):oo(+n.value)),s()}function s(){Vn.value=!1}return pe(Vn,async a=>{var l,c;a?(await Ye(),n.value="",(l=t.value)==null||l.focus()):(c=t.value)==null||c.blur()}),pe(n,a=>{a.match(/^[^0-9/]/)&&(n.value=n.value.substring(1))}),(a,l)=>(k(),K("div",{id:"slidev-goto-dialog",class:je(["fixed right-5 bg-main transform transition-all",b(Vn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Cs(r("input",{ref_key:"input",ref:t,"onUpdate:modelValue":l[0]||(l[0]=c=>n.value=c),type:"text",disabled:!b(Vn),class:je(["outline-none bg-transparent",{"text-red-400":!b(o)&&n.value}]),placeholder:"Goto...",onKeydown:[za(i,["enter"]),za(s,["escape"])],onBlur:s},null,42,$g),[[uf,n.value]])],2))}}),Rg=Se({__name:"Controls",setup(e){F(B);const t=Rt(),n=Rt();return(o,i)=>(k(),K(De,null,[I(bg,{modelValue:b(et),"onUpdate:modelValue":i[0]||(i[0]=s=>Te(et)?et.value=s:null)},null,8,["modelValue"]),I(Cg),b(t)?(k(),j(b(t),{key:0})):me("v-if",!0),b(n)?(k(),j(b(n),{key:1,modelValue:b(di),"onUpdate:modelValue":i[1]||(i[1]=s=>Te(di)?di.value=s:null)},null,8,["modelValue"])):me("v-if",!0),b(ke).info?(k(),j(Pg,{key:2,modelValue:b(xo),"onUpdate:modelValue":i[2]||(i[2]=s=>Te(xo)?xo.value=s:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Mg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Eg=r("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Fg=[Eg];function Og(e,t){return k(),K("svg",Mg,Fg)}const Lg={name:"carbon-settings-adjust",render:Og},zg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},jg=r("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),qg=r("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ig=[jg,qg];function Bg(e,t){return k(),K("svg",zg,Ig)}const Vg={name:"carbon-information",render:Bg},Ng={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wg=r("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Hg=[Wg];function Ug(e,t){return k(),K("svg",Ng,Hg)}const Kg={name:"carbon-download",render:Ug},Gg={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jg=r("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Yg=r("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Zg=[Jg,Yg];function Qg(e,t){return k(),K("svg",Gg,Zg)}const Xg={name:"carbon-user-speaker",render:Qg},ey={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ty=r("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),ny=r("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),oy=[ty,ny];function ry(e,t){return k(),K("svg",ey,oy)}const iy={name:"carbon-presentation-file",render:ry},sy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ay=r("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),ly=[ay];function cy(e,t){return k(),K("svg",sy,ly)}const uy={name:"carbon-pen",render:cy},dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},hy=r("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),py=r("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),fy=[hy,py];function my(e,t){return k(),K("svg",dy,fy)}const gy={name:"ph-cursor-duotone",render:my},yy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},_y=r("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),vy=[_y];function wy(e,t){return k(),K("svg",yy,vy)}const Gu={name:"ph-cursor-fill",render:wy},by={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ky=r("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),Ty=[ky];function Sy(e,t){return k(),K("svg",by,Ty)}const xy={name:"carbon-sun",render:Sy},Dy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ay=r("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),Py=[Ay];function $y(e,t){return k(),K("svg",Dy,Py)}const Cy={name:"carbon-moon",render:$y},Ry={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},My=r("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),Ey=[My];function Fy(e,t){return k(),K("svg",Ry,Ey)}const Oy={name:"carbon-apps",render:Fy},Ly={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},zy=r("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),jy=[zy];function qy(e,t){return k(),K("svg",Ly,jy)}const Iy={name:"carbon-arrow-right",render:qy},By={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Vy=r("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),Ny=[Vy];function Wy(e,t){return k(),K("svg",By,Ny)}const Hy={name:"carbon-arrow-left",render:Wy},Uy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ky=r("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),Gy=[Ky];function Jy(e,t){return k(),K("svg",Uy,Gy)}const Yy={name:"carbon-maximize",render:Jy},Zy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Qy=r("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),Xy=[Qy];function e_(e,t){return k(),K("svg",Zy,Xy)}const t_={name:"carbon-minimize",render:e_},n_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},o_=r("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),r_=[o_];function i_(e,t){return k(),K("svg",n_,r_)}const s_={name:"carbon-checkmark",render:i_},a_={class:"select-list"},l_={class:"title"},c_={class:"items"},u_=["onClick"],d_=Se({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:t}){const n=e;F(B);const o=jt(n,"modelValue",t,{passive:!0});return(i,s)=>{const a=s_;return k(),K("div",a_,[r("div",l_,An(e.title),1),r("div",c_,[(k(!0),K(De,null,Uo(e.items,l=>(k(),K("div",{key:l.value,class:je(["item",{active:b(o)===l.value}]),onClick:()=>{var c;o.value=l.value,(c=l.onClick)==null||c.call(l)}},[I(a,{class:je(["text-green-500",{"opacity-0":b(o)!==l.value}])},null,8,["class"]),h(" "+An(l.display||l.value),1)],10,u_))),128))])])}}});const Ju=(e,t)=>{const n=e.__vccOpts||e;for(const[o,i]of t)n[o]=i;return n},h_=Ju(d_,[["__scopeId","data-v-7dd0eaca"]]),p_={class:"text-sm"},f_=Se({__name:"Settings",setup(e){F(B);const t=[{display:"Fit",value:0},{display:"1:1",value:1}];return(n,o)=>(k(),K("div",p_,[I(h_,{modelValue:b(dr),"onUpdate:modelValue":o[0]||(o[0]=i=>Te(dr)?dr.value=i:null),title:"Scale",items:t},null,8,["modelValue"])]))}}),m_={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},g_=Se({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:t}){const n=e;F(B);const o=jt(n,"modelValue",t,{passive:!0}),i=U();return Sm(i,()=>{o.value=!1}),(s,a)=>(k(),K("div",{ref_key:"el",ref:i,class:"flex relative"},[r("button",{class:je({disabled:e.disabled}),onClick:a[0]||(a[0]=l=>o.value=!b(o))},[wt(s.$slots,"button",{class:je({disabled:e.disabled})})],2),(k(),j(Gc,null,[b(o)?(k(),K("div",m_,[wt(s.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),y_={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},rr={__name:"VerticalDivider",setup(e){return F(B),(t,n)=>(k(),K("div",y_))}},__={render(){return[]}},v_={class:"icon-btn"},w_={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},b_={class:"my-auto"},k_={class:"opacity-50"},T_=Se({__name:"NavControls",props:{persist:{default:!1}},setup(e){const t=e;F(B);const n=Ki.smaller("md"),{isFullscreen:o,toggle:i}=ju,s=P(()=>Qi.value?`?password=${Qi.value}`:""),a=P(()=>`/presenter/${He.value}${s.value}`),l=P(()=>`/${He.value}${s.value}`),c=U(),u=()=>{c.value&&Jn.value&&c.value.contains(Jn.value)&&Jn.value.blur()},d=P(()=>t.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),p=Rt(),f=Rt();return so(()=>import("./DrawingControls.9df14cc6.js"),["assets/DrawingControls.9df14cc6.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.3dffeb41.js"]).then(m=>f.value=m.default),(m,g)=>{const w=t_,v=Yy,D=Hy,S=Iy,x=Oy,$=Cy,q=xy,O=Gu,W=gy,ne=uy,ae=iy,ge=Oo("RouterLink"),_e=Xg,Be=Kg,Ve=Vg,qe=Lg;return k(),K("nav",{ref_key:"root",ref:c,class:"flex flex-col"},[r("div",{class:je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(Vt)?me("v-if",!0):(k(),K("button",{key:0,class:"icon-btn",onClick:g[0]||(g[0]=(...Me)=>b(i)&&b(i)(...Me))},[b(o)?(k(),j(w,{key:0})):(k(),j(v,{key:1}))])),r("button",{class:je(["icon-btn",{disabled:!b(BD)}]),onClick:g[1]||(g[1]=(...Me)=>b(sn)&&b(sn)(...Me))},[I(D)],2),r("button",{class:je(["icon-btn",{disabled:!b(ID)}]),title:"Next",onClick:g[2]||(g[2]=(...Me)=>b(rn)&&b(rn)(...Me))},[I(S)],2),b(Vt)?me("v-if",!0):(k(),K("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:g[3]||(g[3]=Me=>b(qu)())},[I(x)])),b(Zi)?me("v-if",!0):(k(),K("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:g[4]||(g[4]=Me=>b(Hu)())},[b(js)?(k(),j($,{key:0})):(k(),j(q,{key:1}))])),I(rr),b(Vt)?me("v-if",!0):(k(),K(De,{key:3},[!b(zt)&&!b(n)&&b(p)?(k(),K(De,{key:0},[I(b(p)),I(rr)],64)):me("v-if",!0),b(zt)?(k(),K("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:g[5]||(g[5]=Me=>hi.value=!b(hi))},[b(hi)?(k(),j(O,{key:0})):(k(),j(W,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!b(ke).drawings.presenterOnly&&!b(Vt)?(k(),K(De,{key:4},[r("button",{class:"icon-btn relative",title:"Drawing",onClick:g[6]||(g[6]=Me=>qt.value=!b(qt))},[I(ne),b(qt)?(k(),K("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:nt({background:b(wn).color})},null,4)):me("v-if",!0)]),I(rr)],64)):me("v-if",!0),b(Vt)?me("v-if",!0):(k(),K(De,{key:5},[b(zt)?(k(),j(ge,{key:0,to:b(l),class:"icon-btn",title:"Play Mode"},{default:A(()=>[I(ae)]),_:1},8,["to"])):me("v-if",!0),b(zD)?(k(),j(ge,{key:1,to:b(a),class:"icon-btn",title:"Presenter Mode"},{default:A(()=>[I(_e)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(k(),K(De,{key:6},[b(ke).download?(k(),K("button",{key:0,class:"icon-btn",onClick:g[8]||(g[8]=(...Me)=>b(Xi)&&b(Xi)(...Me))},[I(Be)])):me("v-if",!0)],64)),!b(zt)&&b(ke).info&&!b(Vt)?(k(),K("button",{key:7,class:"icon-btn",onClick:g[9]||(g[9]=Me=>xo.value=!b(xo))},[I(Ve)])):me("v-if",!0),!b(zt)&&!b(Vt)?(k(),j(g_,{key:8},{button:A(()=>[r("button",v_,[I(qe)])]),menu:A(()=>[I(f_)]),_:1})):me("v-if",!0),b(Vt)?me("v-if",!0):(k(),j(rr,{key:9})),r("div",w_,[r("div",b_,[h(An(b(He))+" ",1),r("span",k_,"/ "+An(b(td)),1)])]),I(b(__))],34)],512)}}}),Yu={render(){return[]}},Zu={render(){return[]}},S_={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},x_=Se({__name:"PresenterMouse",setup(e){return F(B),(t,n)=>{const o=Gu;return b(ai).cursor?(k(),K("div",S_,[I(o,{class:"absolute",style:nt({left:`${b(ai).cursor.x}%`,top:`${b(ai).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),D_=Se({__name:"SlidesShow",props:{context:null},setup(e){F(B),pe(dt,()=>{var n,o;((n=dt.value)==null?void 0:n.meta)&&dt.value.meta.preload!==!1&&(dt.value.meta.__preloaded=!0),((o=fi.value)==null?void 0:o.meta)&&fi.value.meta.preload!==!1&&(fi.value.meta.__preloaded=!0)},{immediate:!0});const t=Rt();return so(()=>import("./DrawingLayer.68b517f8.js"),[]).then(n=>t.value=n.default),(n,o)=>(k(),K(De,null,[me(" Global Bottom "),I(b(Zu)),me(" Slides "),(k(!0),K(De,null,Uo(b(We),i=>{var s,a;return k(),K(De,{key:i.path},[((s=i.meta)==null?void 0:s.__preloaded)||i===b(dt)?Cs((k(),j(b(Bs),{key:0,is:i==null?void 0:i.component,clicks:i===b(dt)?b(Ct):0,"clicks-elements":((a=i.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:je(b(Is)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[hu,i===b(dt)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),I(b(Yu)),b(t)?(k(),j(b(t),{key:0})):me("v-if",!0),b(zt)?me("v-if",!0):(k(),j(x_,{key:1}))],64))}}),A_=Se({__name:"Play",setup(e){F(B),dg();const t=U();function n(s){var a;Al.value||((a=s.target)==null?void 0:a.id)==="slide-container"&&(s.screenX/window.innerWidth>.6?rn():sn())}WD(t);const o=P(()=>b1.value||Al.value);Rt();const i=Rt();return so(()=>import("./DrawingControls.9df14cc6.js"),["assets/DrawingControls.9df14cc6.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.3dffeb41.js"]).then(s=>i.value=s.default),(s,a)=>(k(),K(De,null,[r("div",{id:"page-root",ref_key:"root",ref:t,class:"grid grid-cols-[1fr_max-content]",style:nt(b(yu))},[I(Ku,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Yn)?b(Dn).width.value:void 0,scale:b(dr),onPointerdown:n},{default:A(()=>[I(D_,{context:"slide"})]),controls:A(()=>[r("div",{class:je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(qo)?"pointer-events-none":""]])},[I(T_,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b(ke).drawings.presenterOnly&&!b(Vt)&&b(i)?(k(),j(b(i),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),I(Rg)],64))}});function Qu(e){const t=P(()=>e.value.path),n=P(()=>We.length-1),o=P(()=>parseInt(t.value.split(/\//g).slice(-1)[0])||1),i=P(()=>Jr(o.value)),s=P(()=>We.find(f=>f.path===`${o.value}`)),a=P(()=>{var f,m,g;return(g=(m=(f=s.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:g.id}),l=P(()=>{var f,m;return(m=(f=s.value)==null?void 0:f.meta)==null?void 0:m.layout}),c=P(()=>We.find(f=>f.path===`${Math.min(We.length,o.value+1)}`)),u=P(()=>We.filter(f=>{var m,g;return(g=(m=f.meta)==null?void 0:m.slide)==null?void 0:g.title}).reduce((f,m)=>(Ns(f,m),f),[])),d=P(()=>Ws(u.value,s.value)),p=P(()=>Hs(d.value));return{route:e,path:t,total:n,currentPage:o,currentPath:i,currentRoute:s,currentSlideId:a,currentLayout:l,nextRoute:c,rawTree:u,treeWithActiveStatuses:d,tree:p}}function Xu(e,t,n){const o=U(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),o.value+=1})});const i=P(()=>{var c,u;return o.value,((u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.__clicksElements)||[]}),s=P(()=>{var c,u,d;return+((d=(u=(c=t.value)==null?void 0:c.meta)==null?void 0:u.clicks)!=null?d:i.value.length)}),a=P(()=>n.value<We.length-1||e.value<s.value),l=P(()=>n.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:s,hasNext:a,hasPrev:l}}const P_=["id"],jl=Se({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:t}){const n=e,o=jt(n,"clicksElements",t),i=P(()=>({height:`${gu}px`,width:`${Sn}px`})),s=Rt();so(()=>import("./DrawingPreview.08f76879.js"),[]).then(u=>s.value=u.default);const a=P(()=>n.clicks),l=Xu(a,n.nav.currentRoute,n.nav.currentPage),c=P(()=>`${n.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return ht(B,Fe({nav:{...n.nav,...l},configs:ke,themeConfigs:P(()=>ke.themeConfig)})),(u,d)=>{var p;return k(),K("div",{id:b(c),class:"slide-container",style:nt(b(i))},[I(b(Zu)),I(b(Bs),{is:(p=e.route)==null?void 0:p.component,"clicks-elements":b(o),"onUpdate:clicks-elements":d[0]||(d[0]=f=>Te(o)?o.value=f:null),clicks:b(a),"clicks-disabled":!1,class:je(b(Is)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),b(s)?(k(),j(b(s),{key:0,page:+e.route.path},null,8,["page"])):me("v-if",!0),I(b(Yu))],12,P_)}}}),$_=Se({__name:"PrintSlide",props:{route:null},setup(e){var s;const t=e;F(B);const n=Fe(((s=t.route.meta)==null?void 0:s.__clicksElements)||[]),o=P(()=>t.route),i=Qu(o);return(a,l)=>(k(),K(De,null,[I(jl,{"clicks-elements":n,"onUpdate:clicks-elements":l[0]||(l[0]=c=>Te(n)?n.value=c:null),clicks:0,nav:b(i),route:b(o)},null,8,["clicks-elements","nav","route"]),b(Do)?me("v-if",!0):(k(!0),K(De,{key:0},Uo(n.length,c=>(k(),j(jl,{key:c,clicks:c,nav:b(i),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}}),C_={id:"print-content"},R_=Se({__name:"PrintContainer",props:{width:null},setup(e){const t=e;F(B);const n=P(()=>t.width),o=P(()=>t.width/on),i=P(()=>n.value/o.value),s=P(()=>i.value<on?n.value/Sn:o.value*on/Sn),a=We.slice(0,-1),l=P(()=>({"select-none":!ke.selectable,"slidev-code-line-numbers":ke.lineNumbers}));return ht(mu,s),(c,u)=>(k(),K("div",{id:"print-container",class:je(b(l))},[r("div",C_,[(k(!0),K(De,null,Uo(b(a),d=>(k(),j($_,{key:d.path,route:d},null,8,["route"]))),128))]),wt(c.$slots,"controls")],2))}});const M_=Se({__name:"Print",setup(e){F(B);const t=vn.canvasWidth,n=Math.round(t/vn.aspectRatio)+1;function o(i,{slots:s}){if(s.default)return ft("style",s.default())}return Vr(()=>{Yn?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(i,s)=>(k(),K(De,null,[I(o,null,{default:A(()=>[h(" @page { size: "+An(b(t))+"px "+An(n)+"px; margin: 0px; } ",1)]),_:1}),r("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:nt(b(yu))},[I(R_,{class:"w-full h-full",style:nt({background:"var(--slidev-slide-container-background, black)"}),width:b(Dn).width.value},null,8,["style","width"])],4)],64))}});const E_={class:"slidev-layout end"},F_={__name:"end",setup(e){return F(B),(t,n)=>(k(),K("div",E_," END "))}},O_=Ju(F_,[["__scopeId","data-v-ab32435f"]]);function ql(e){return e.startsWith("/")?"/"+e.slice(1):e}function L_(e,t=!1){const n=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),o={background:n?e:void 0,color:e&&!n?"white":void 0,backgroundImage:n?void 0:e?t?`linear-gradient(#0005, #0008), url(${ql(e)})`:`url("${ql(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const z_={class:"my-auto w-full"},j_=Se({__name:"cover",props:{background:{default:""}},setup(e){const t=e;F(B);const n=P(()=>L_(t.background,!0));return(o,i)=>(k(),K("div",{class:"slidev-layout cover",style:nt(b(n))},[r("div",z_,[wt(o.$slots,"default")])],4))}}),q_=r("h1",null,"European Cruise 2022 - Carnival Pride",-1),I_=r("h2",null,"Italy, Turkey, and Greece",-1),B_=r("h2",null,"October 6 - 22, 2022",-1),V_={__name:"1",setup(e){const t={theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center",srcSequence:"./slides/00-intro/001-cover.md"};return F(B),(n,o)=>(k(),j(j_,X(Q(t)),{default:A(()=>[q_,I_,B_]),_:1},16))}},N_=["href","innerHTML"],W_=["href"],Vs=Se({__name:"Link",props:{to:null,title:null},setup(e){return F(B),(t,n)=>{const o=Oo("RouterLink");return!b(Yn)&&e.title?(k(),j(o,{key:0,to:String(e.to),onClick:n[0]||(n[0]=i=>i.target.blur()),innerHTML:e.title},null,8,["to","innerHTML"])):!b(Yn)&&!e.title?(k(),j(o,{key:1,to:String(e.to),onClick:n[1]||(n[1]=i=>i.target.blur())},{default:A(()=>[wt(t.$slots,"default")]),_:3},8,["to"])):b(Yn)&&e.title?(k(),K("a",{key:2,href:`#${e.to}`,innerHTML:e.title},null,8,N_)):(k(),K("a",{key:3,href:`#${e.to}`},[wt(t.$slots,"default")],8,W_))}}}),H_={class:"slidev-layout default"},Oe={__name:"default",setup(e){return F(B),(t,n)=>(k(),K("div",H_,[wt(t.$slots,"default")]))}},U_=r("h1",null,"Itinerary at a Glance: Italy -> Cruise Embarkation",-1),K_=r("thead",null,[r("tr",null,[r("th",null,"Day"),r("th"),r("th",null,"Date"),r("th",null,"Itinerary")])],-1),G_=r("td",null,[r("strong",null,"0")],-1),J_=r("td",null,"Thu",-1),Y_=r("td",null,"10/6",-1),Z_=h("Depart JFK on American Airlines Flight 236 to Rome (FCO)"),Q_=r("td",null,[r("strong",null,"1")],-1),X_=r("td",null,"Fri",-1),ev=r("td",null,"10/7",-1),tv=h("Rome -> Florence"),nv=h(", "),ov=h("Explore the Duomo"),rv=h(", "),iv=h("Rooftop Dinner"),sv=r("td",null,[r("strong",null,"2")],-1),av=r("td",null,"Sat",-1),lv=r("td",null,"10/8",-1),cv=r("strong",null,"Florence",-1),uv=h(": "),dv=h("Uffizi"),hv=h(", "),pv=h("Pitti Palace"),fv=h(", "),mv=h("Boboli Gardens"),gv=h(", "),yv=h("Accademia/David"),_v=r("td",null,[r("strong",null,"3")],-1),vv=r("td",null,"Sun",-1),wv=r("td",null,"10/9",-1),bv=h("Florence -> Rome"),kv=h(", "),Tv=h('"Heart of Rome" Walk'),Sv=h(", "),xv=h("Trevi Fountain"),Dv=h(", "),Av=h("Spanish Steps"),Pv=r("td",null,[r("strong",null,"4")],-1),$v=r("td",null,"Mon",-1),Cv=r("td",null,"10/10",-1),Rv=r("strong",null,"Rome",-1),Mv=h(": "),Ev=h("St. Peter\u2019s Square & Basillica"),Fv=h(", "),Ov=h("Roman Forum"),Lv=h(", "),zv=h("Colisseum"),jv=r("td",null,[r("strong",null,"5")],-1),qv=r("td",null,"Tue",-1),Iv=r("td",null,"10/11",-1),Bv=h("Rome -> Civitavecchia"),Vv=h(", "),Nv=h("Embarkation & Cruise Departure"),Wv=r("td",null,[r("strong",null,"6,7")],-1),Hv=r("td",null,"Wed/Thu",-1),Uv=r("td",null,"10/12,13",-1),Kv=h("At Sea - Carnival Pride"),Gv={__name:"2",setup(e){const t={srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"};return F(B),(n,o)=>{const i=Vs;return k(),j(Oe,X(Q(t)),{default:A(()=>[U_,r("table",null,[K_,r("tbody",null,[r("tr",null,[G_,J_,Y_,r("td",null,[I(i,{to:"5"},{default:A(()=>[Z_]),_:1})])]),r("tr",null,[Q_,X_,ev,r("td",null,[I(i,{to:"6"},{default:A(()=>[tv]),_:1}),nv,I(i,{to:"9"},{default:A(()=>[ov]),_:1}),rv,I(i,{to:"11"},{default:A(()=>[iv]),_:1})])]),r("tr",null,[sv,av,lv,r("td",null,[cv,uv,I(i,{to:"13"},{default:A(()=>[dv]),_:1}),hv,I(i,{to:"16"},{default:A(()=>[pv]),_:1}),fv,I(i,{to:"17"},{default:A(()=>[mv]),_:1}),gv,I(i,{to:"18"},{default:A(()=>[yv]),_:1})])]),r("tr",null,[_v,vv,wv,r("td",null,[I(i,{to:"20"},{default:A(()=>[bv]),_:1}),kv,I(i,{to:"24"},{default:A(()=>[Tv]),_:1}),Sv,I(i,{to:"27"},{default:A(()=>[xv]),_:1}),Dv,I(i,{to:"28"},{default:A(()=>[Av]),_:1})])]),r("tr",null,[Pv,$v,Cv,r("td",null,[Rv,Mv,I(i,{to:"30"},{default:A(()=>[Ev]),_:1}),Fv,I(i,{to:"32"},{default:A(()=>[Ov]),_:1}),Lv,I(i,{to:"34"},{default:A(()=>[zv]),_:1})])]),r("tr",null,[jv,qv,Iv,r("td",null,[I(i,{to:"35"},{default:A(()=>[Bv]),_:1}),Vv,I(i,{to:"37"},{default:A(()=>[Nv]),_:1})])]),r("tr",null,[Wv,Hv,Uv,r("td",null,[I(i,{to:"38"},{default:A(()=>[Kv]),_:1})])])])])]),_:1},16)}}},Jv=r("h1",null,"Itinerary at a Glance: Carnival Pride Meditteranean",-1),Yv=r("thead",null,[r("tr",null,[r("th",null,"Day"),r("th"),r("th",null,"Date"),r("th",null,"Itinerary")])],-1),Zv=r("td",null,[r("strong",null,"8")],-1),Qv=r("td",null,"Fri",-1),Xv=r("td",null,"10/14",-1),ew=r("strong",null,"Mykonos",-1),tw=r("td",null,[r("strong",null,"9")],-1),nw=r("td",null,"Sat",-1),ow=r("td",null,"10/15",-1),rw=r("strong",null,"Ephesus",-1),iw=h(" (anchor at Kusadasi, Turkey)"),sw=r("td",null,[r("strong",null,"10")],-1),aw=r("td",null,"Sun",-1),lw=r("td",null,"10/16",-1),cw=r("strong",null,"Santorini",-1),uw=r("td",null,[r("strong",null,"11")],-1),dw=r("td",null,"Mon",-1),hw=r("td",null,"10/17",-1),pw=r("strong",null,"Athens",-1),fw=r("td",null,[r("strong",null,"12")],-1),mw=r("td",null,"Tue",-1),gw=r("td",null,"10/18",-1),yw=r("strong",null,"Olympia",-1),_w=h(" (anchor at Katakolon)"),vw=r("td",null,[r("strong",null,"13")],-1),ww=r("td",null,"Wed",-1),bw=r("td",null,"10/19",-1),kw=r("strong",null,"Sicily",-1),Tw=h(" (anchor at Messina)"),Sw=r("td",null,[r("strong",null,"14")],-1),xw=r("td",null,"Thu",-1),Dw=r("td",null,"10/20",-1),Aw=r("strong",null,"Amalfi Coast",-1),Pw=h(" (anchor at Naples)"),$w={__name:"3",setup(e){const t={srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md"};return F(B),(n,o)=>{const i=Vs;return k(),j(Oe,X(Q(t)),{default:A(()=>[Jv,r("table",null,[Yv,r("tbody",null,[r("tr",null,[Zv,Qv,Xv,r("td",null,[I(i,{to:"39"},{default:A(()=>[ew]),_:1})])]),r("tr",null,[tw,nw,ow,r("td",null,[I(i,{to:"40"},{default:A(()=>[rw,iw]),_:1})])]),r("tr",null,[sw,aw,lw,r("td",null,[I(i,{to:"41"},{default:A(()=>[cw]),_:1})])]),r("tr",null,[uw,dw,hw,r("td",null,[I(i,{to:"42"},{default:A(()=>[pw]),_:1})])]),r("tr",null,[fw,mw,gw,r("td",null,[I(i,{to:"43"},{default:A(()=>[yw,_w]),_:1})])]),r("tr",null,[vw,ww,bw,r("td",null,[I(i,{to:"44"},{default:A(()=>[kw,Tw]),_:1})])]),r("tr",null,[Sw,xw,Dw,r("td",null,[I(i,{to:"45"},{default:A(()=>[Aw,Pw]),_:1})])])])])]),_:1},16)}}},Cw=r("h1",null,"Itinerary at a Glance: Cruise Debarkation/Flight Home",-1),Rw=r("thead",null,[r("tr",null,[r("th",null,"Day"),r("th"),r("th",null,"Date"),r("th",null,"Itinerary")])],-1),Mw=r("td",null,[r("strong",null,"15")],-1),Ew=r("td",null,"Fri",-1),Fw=r("td",null,"10/21",-1),Ow=h("Debarkation"),Lw=h(", "),zw=h("Civitavecchia -> "),jw=r("strong",null,"Rome",-1),qw=h(" by Train"),Iw=h(", "),Bw=h("Sleep at Airport Hilton"),Vw=r("td",null,[r("strong",null,"16")],-1),Nw=r("td",null,"Sat",-1),Ww=r("td",null,"10/22",-1),Hw=h("Depart FCO (Rome) on American Airlines Flight 235 to JFK"),Uw={__name:"4",setup(e){const t={srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md"};return F(B),(n,o)=>{const i=Vs;return k(),j(Oe,X(Q(t)),{default:A(()=>[Cw,r("table",null,[Rw,r("tbody",null,[r("tr",null,[Mw,Ew,Fw,r("td",null,[I(i,{to:"49"},{default:A(()=>[Ow]),_:1}),Lw,I(i,{to:"51"},{default:A(()=>[zw,jw,qw]),_:1}),Iw,I(i,{to:"53"},{default:A(()=>[Bw]),_:1})])]),r("tr",null,[Vw,Nw,Ww,r("td",null,[I(i,{to:"54"},{default:A(()=>[Hw]),_:1})])])])])]),_:1},16)}}},Kw=r("h4",null,"Day 0 - Thu 10/6 - Travel Day",-1),Gw=r("h2",null,[r("strong",null,"Trans-Atlantic Flight to Rome")],-1),Jw=r("h3",null,null,-1),Yw=r("h3",null,"\u{1F690} East Haven to JFK by Ground Transport",-1),Zw=r("h3",null,[h("Pickup Time 12:00PM at D&D\u2019s House "),r("strong",null,"Confirmed")],-1),Qw=r("blockquote",null,[r("p",null,[h("We take a private "),r("strong",null,"Connecticut Limo"),h(" Van from East Haven to JFK "),r("br"),h(" The ride lasts between 2 - 2.5 hours depending on traffic "),r("br"),h(" Round-trip transport costs "),r("strong",null,"$920 + $180 tip ($275 per couple total)")])],-1),Xw=r("br",null,null,-1),e2=r("h3",null,"\u2708\uFE0F JFK to Leonardo da Vinci (FCO) by Plane",-1),t2=r("blockquote",null,[r("p",null,[r("strong",null,"American Airlines Flight 236"),h(),r("a",{href:"https://www.aa.com/travelInformation/flights/status",target:"_blank",rel:"noopener"},"(check Flight Status)"),h(),r("br"),h(" Depart from JFK airport "),r("strong",null,"6:52 PM"),h(),r("br"),h(" The flight time is 8 hours 8 mins "),r("br"),h(" Arrive at Leonardo da Vinci "),r("strong",null,"9:00 AM next day"),h(" (Fri 10/7) "),r("br")])],-1),n2={__name:"5",setup(e){const t={srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Kw,Gw,Jw,Yw,Zw,Qw,Xw,e2,t2]),_:1},16))}},o2=r("h4",null,"Day 1 - Fri 10/7 - Travel Day",-1),r2=r("h2",null,[r("strong",null,"Rome to Florence")],-1),i2=r("p",null,[h("\u2708\uFE0F "),r("strong",null,"9:00 AM"),h(": Scheduled to land at Leonardo da Vinci airport")],-1),s2=r("h3",null,"Airport to Rome",-1),a2=r("p",null,[h("\u{1F68B} "),r("strong",null,"10:30 AM (approximate)"),h(": Take a Train to Rome Termini Station")],-1),l2=r("blockquote",null,[r("p",null,[h("The "),r("a",{href:"https://www.trenitalia.com/en/services/fiumicino_airport.html",target:"_blank",rel:"noopener"},"Leonardo Express"),h(" is a non-stop shuttle train running between the airport train station and Termini Station in Rome. "),r("br"),h(" The ride lasts "),r("strong",null,"32 minutes"),h(", and the train departs every 15-30 minutes depending on the time of day. "),r("br"),h(" Tickets are "),r("strong",null,"\u20AC14"),h(" one-way, purchased individually, or "),r("strong",null,"\u20AC40"),h(' total for 4 tickets when purchased at the "mini-group" fare.')])],-1),c2=r("br",null,null,-1),u2=r("h3",null,"Rome to Florence",-1),d2=r("p",null,[h("\u{1F68B} "),r("strong",null,"Noon (approximate)"),h(": Take a Train to Santa Maria Novella Train Station in Florence")],-1),h2=r("blockquote",null,[r("p",null,[h("A bullet train runs from Termini Station in Rome to Santa Maria Novella Train Station in Florence. "),r("br"),h(" The ride lasts "),r("strong",null,"1 hour 36 mins"),h(", and the train departs every 15-30 minutes depending on the time of day. "),r("br"),h(" Tickets are "),r("strong",null,"\u20AC42"),h(" round trip")])],-1),p2={__name:"6",setup(e){const t={srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[o2,r2,i2,s2,a2,l2,c2,u2,d2,h2]),_:1},16))}},f2="/florence-overview.png",m2=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:f2,height:"400",width:"400"})]),r("td",null,[r("ul",null,[h(" Day 1 "),r("li",null," Walk from SMN Station to AirBnB (near Duomo) "),h(),r("li",null," Explore Duomo, Markets, & Shops "),h(),r("li",null," Rooftop Dinner ")]),h(),r("ul",null,[h(" Day 2 "),r("li",null," Uffizi Gallery, Palazzo Vecchio "),h(),r("li",null," Ponte Vecchio "),h(),r("li",null," Pitti Palace, Boboli Gardens "),h(),r("li",null," Accademia (David) ")])])])])],-1),g2=r("p",null,[r("span",{style:{"font-size":"50%"}},[h("watch "),r("a",{href:"https://youtu.be/qzTyWRcQRXg",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Florence"),h(" (YouTube, 16:22)")])],-1),y2=r("p",null,[r("span",{style:{"font-size":"50%"}},[h("watch "),r("a",{href:"https://youtu.be/q51Atktm244",target:"_blank",rel:"noopener"},"13 Tips for a FANTASTIC Trip to Florence"),h(" (YouTube, 23:02)")])],-1),_2={__name:"7",setup(e){const t={srcSequence:"./slides/02-florence/007-florence-overview.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[m2,g2,y2]),_:1},16))}},v2="/florence-skyline.jpg",w2=r("h4",null,"Day 1 - Fri 10/7 - Florence",-1),b2=r("h2",null,[r("strong",null,"Arrival")],-1),k2=r("h3",null,[h("AirBnB - "),r("a",{href:"https://www.airbnb.com/rooms/4623533?source_impression_id=p3_1662931598_8UVrLLOCV2J5awOL",target:"_blank",rel:"noopener"},"Via Santa Elisabetta 5, Florence"),h(),r("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),T2=r("p",null,[h("\u{1F6B6}"),r("strong",null,"2:30 (approximate)"),h(": Walk from Train Station to AirBnB "),r("a",{href:"https://goo.gl/maps/j9D5MjAAuP2QKoHS6",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),S2=r("img",{src:v2,height:"250",width:"500",style:{margin:"auto"}},null,-1),x2=r("br",null,null,-1),D2=r("blockquote",null,[r("p",null,[h("We\u2019ll head straight to our home in Florence, after 14 hours traveling by planes, trains and automobiles. "),r("br")])],-1),A2={__name:"8",setup(e){const t={srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[w2,b2,k2,T2,S2,x2,D2]),_:1},16))}},P2="/duomo-battistero.jpg",$2="/duomo-interior.jpg",C2="/duomo-dome.jpg",R2=r("h4",null,"Day 1 - Fri 10/7 - Florence",-1),M2=r("h2",null,[r("strong",null,"Exploring The Duomo")],-1),E2=r("br",null,null,-1),F2=r("blockquote",null,[r("p",null,'Entry is free, so take some time this afternoon while we stay close to "home" to explore the beauty of the Duomo from the Piazza outside, and the Cathedral within.')],-1),O2=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:P2,width:"300",height:"150"})]),r("td",null,[r("img",{src:$2,width:"150",height:"300"})]),r("td",null,[r("img",{src:C2,width:"300",height:"150"})])])])],-1),L2={__name:"9",setup(e){const t={srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[R2,M2,E2,F2,O2]),_:1},16))}},z2="/heart-of-florence-restaurants.jpg",j2={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},Pe=Se({__name:"two-cols",props:{class:{type:String}},setup(e){const t=e;return F(B),(n,o)=>(k(),K("div",j2,[r("div",{class:je(["col-left",t.class])},[wt(n.$slots,"default")],2),r("div",{class:je(["col-right",t.class])},[wt(n.$slots,"right")],2)]))}}),q2=r("h4",null,"Day 1 - Fri 10/7 - Florence",-1),I2=r("h2",null,[r("strong",null,"Food & Shopping")],-1),B2=r("blockquote",null,[r("p",null,[h("If you\u2019re hungry, there are many options near the AirBnB including: "),r("br")]),r("ul",null,[r("li",null,[r("a",{href:"https://www.tripadvisor.com/Restaurant_Review-g187895-d2433470-Reviews-Caffetteria_delle_Oblate-Florence_Tuscany.html",target:"_blank",rel:"noopener"},[r("strong",null,"Caffeteria della Oblate")]),h(", a laid-back budget eatery a block from the Duomo within a library, known more for its outdoor terrace and a bright interior with views of the Duomo, than the food, which is basic but affordable.")]),r("li",null,[r("a",{href:"https://www.mercatocentrale.com/florence/how-it-works/",target:"_blank",rel:"noopener"},[r("strong",null,"Mercato Centrale")]),h(" The better food vendor stalls downstairs close at 3PM, but upstairs there is a more touristy food court.")])])],-1),V2=r("br",null,null,-1),N2=r("blockquote",null,[r("ul",null,[r("li",null,[r("a",{href:"https://www.visitflorence.com/what-to-do-in-florence/shopping/san-lorenzo-central-market.html",target:"_blank",rel:"noopener"},[r("strong",null,"San Lorenzo Market")]),h(" If you\u2019re itching to start shopping, step outside the Mercato Centrale and you\u2019ll find vendor stalls hawking all kinds of leather goods. Be sure to negotiate to get the best price!")])])],-1),W2=r("br",null,null,-1),H2=r("blockquote",null,[r("p",null,"We\u2019ll grab fresh food to bring back to the AirBnB for tomorrow\u2019s breakfast before our busy sightseeing day in Florence!")],-1),U2=r("img",{src:z2,height:"450",width:"450",style:{margin:"auto"}},null,-1),K2={__name:"10",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[U2]),default:A(()=>[q2,I2,B2,V2,N2,W2,H2]),_:1},16))}},G2=r("h4",null,"Day 1 - Fri 10/7 - Florence",-1),J2=r("h2",null,[r("strong",null,"Rooftop Dinner")],-1),Y2=r("br",null,null,-1),Z2=r("blockquote",null,[r("p",null,'Rather than pay for the privilege of climbing the 400+ winding steps to the rooftop of the Duomo, we\u2019ll take a leisurely "golden hour" dinner at one of Florence\u2019s rooftop restaurants')],-1),Q2=r("br",null,null,-1),X2=r("h3",null,[h("Angel Roofbar - Hotel Calimala "),r("span",{style:{color:"red"}},[r("strong",null,"(unconfirmed)")])],-1),eb=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("a",{href:"https://www.hotelcalimala.com/angel-roofbar-dining",target:"_blank",rel:"noopener"},"website"),h(" / "),r("a",{href:"https://www.hotelcalimala.com/images/ristorante/food-drink/PDF/angel-roofbar-dining-bar-dinner.pdf",target:"_blank",rel:"noopener"},"dinner menu")]),r("td",null,[r("img",{src:"https://www.hotelcalimala.com/images/galleria/gallery-rooftop/hotel-calimala-firenze-rooftop-07.jpg",width:"400",height:"150"})])]),r("tr",null,[r("td",null,[r("br")]),r("td")])])],-1),tb={__name:"11",setup(e){const t={srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[G2,J2,Y2,Z2,Q2,X2,eb]),_:1},16))}},nb="/palazzo-vecchio-firenze.jpg",ob="/courtyard-palazzo-vecchio.jpg",rb="/florence-renaissance-walk.jpg",ib=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),sb=r("h2",null,[r("strong",null,"Renaissance Walk")],-1),ab=r("p",null,[h("\u{1F6B6}"),r("strong",null,"8:30 AM"),h(": Walk to Uffizi Gallery "),r("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),lb=r("blockquote",null,[r("p",null,[h("This is the beginning of our whirlwind Florence sightseeing day."),r("br"),h(" Fabulous examples of Renaissance architecture span the walk."),r("br"),h(" If you miss one, don\u2019t worry, we\u2019ll follow the same route back. "),r("br")])],-1),cb=r("p",null,"\u{1F4F7} Palazzo Vecchio",-1),ub=r("td",null,[r("img",{src:nb,height:"100",width:"200"})],-1),db=r("td",null,[r("img",{src:ob,height:"95",width:"190"})],-1),hb=r("blockquote",null,[r("p",null,"Walking down Via Calzaiuoli, we reach the Piazza della Signoria where the Palazzo Vecchio stands, once a Medici fortress, now the Town Hall and civic center of the city.")],-1),pb=r("img",{src:rb,height:"600",width:"300",style:{margin:"auto"}},null,-1),fb={__name:"12",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[pb]),default:A(()=>[ib,sb,ab,lb,cb,ub,db,hb]),_:1},16))}},mb="/birth-of-venus.jpg",gb="/uffizi-gallery-floor-plan.png",yb=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),_b=r("h2",null,[r("strong",null,"Uffizi Gallery")],-1),vb=r("p",null,[h("\u{1F3F0} "),r("strong",null,"9:00 - 9:15 AM"),h(": Timed Entry into Uffizi Gallery"),r("br"),r("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),wb=r("blockquote",null,[r("p",null,[h('See the greatest collection of Italian Renaissance paintings in the world, including Botticelli\u2019s iconic "Birth of Venus".'),r("br"),r("span",{style:{"font-size":"50%"}},[h("listen to "),r("a",{href:"https://podcasts.ricksteves.com/walkingtours/UffiziGallery.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Uffizi Gallery Audio Tour"),h(" (MP3, 1:01:35)")])])],-1),bb=r("br",null,null,-1),kb=r("img",{src:mb,height:"125",width:"250",style:{margin:"auto"}},null,-1),Tb=r("br",null,null,-1),Sb=r("blockquote",null,[r("p",null,"Seeing priceless works of art makes you hungry, right?")],-1),xb=r("img",{src:gb,height:"800",width:"400",style:{margin:"auto"}},null,-1),Db={__name:"13",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[xb]),default:A(()=>[yb,_b,vb,wb,bb,kb,Tb,Sb]),_:1},16))}},Ab="/florence-allantico-vinaio.jpeg",Pb=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),$b=r("h2",null,[r("strong",null,"Panini at All\u2019antico Vinaio")],-1),Cb=r("h4",null,[h("Lunch Option #1 "),r("span",{style:{"font-size":"50%"}},[r("a",{href:"https://www.allanticovinaio.com/il-menu-firenze_en/",target:"_blank",rel:"noopener"},"Menu")])],-1),Rb=r("p",null,[h("\u{1F6B6}"),r("strong",null,"10:45 AM"),h(": Walk from Uffizi to All\u2019Antico Vinaio"),r("br"),r("span",{style:{"font-size":"75%"}},[h("("),r("a",{href:"https://goo.gl/maps/Aup9R2km7X4VQZgS6",target:"_blank",rel:"noopener"},"5 mins"),h(", allow up to "),r("strong",null,"one hour"),h(" to wait in line)")])],-1),Mb=r("blockquote",null,[r("p",null,[h("If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. "),r("br"),h(" The wait may last as much as "),r("strong",null,"an hour or more"),h(", but nearly all who visit agree, it\u2019s time well spent.")])],-1),Eb=r("p",null,[h("\u{1F6B6}"),r("strong",null,"Between 11:15-12:00 PM"),h(": Walk to Pitti Palace"),r("br"),r("span",{style:{"font-size":"75%"}},[r("a",{href:"https://goo.gl/maps/UUc7SxPFN43kujLb6",target:"_blank",rel:"noopener"},"(11 mins)")])],-1),Fb=r("p",null,"Panini in hand, walk down to the river Arno towards the Ponte Vecchio",-1),Ob=r("img",{src:Ab,height:"200",width:"400",style:{margin:"auto"}},null,-1),Lb={__name:"14",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[Ob]),default:A(()=>[Pb,$b,Cb,Rb,Mb,Eb,Fb]),_:1},16))}},zb="/ponte-vecchio.jpg",jb="/florence-oltrarno.jpg",qb=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Ib=r("h2",null,[r("strong",null,"Ponte Vecchio")],-1),Bb=r("p",null,[h("\u{1F6B6}"),r("strong",null,"12:00 PM"),h(": Walk to Pitti Palace "),r("a",{href:"https://goo.gl/maps/DzviAUZLp9neK5zWA",target:"_blank",rel:"noopener"},"(10 mins)")],-1),Vb=r("blockquote",null,[r("p",null,"We cross the romantic ancient bridge, built in 1345, whose shops were evicted of butchers and tanners by the Medici in the 1500\u2019s, to be replaced by goldsmiths that remain to this day.")],-1),Nb=r("ul",null,[r("li",null,[h("\u{1F4F7} Ponte Vecchio "),r("img",{src:zb,height:"125",width:"250"})])],-1),Wb=r("br",null,null,-1),Hb=r("blockquote",null,[r("p",null,'Next, we\u2019ll cross into the Oltrarno, literally the "other side of the River Arno".')],-1),Ub=r("img",{src:jb,height:"800",width:"400",style:{margin:"auto"}},null,-1),Kb={__name:"15",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[Ub]),default:A(()=>[qb,Ib,Bb,Vb,Nb,Wb,Hb]),_:1},16))}},Gb="/palatine-gallery-floor-plan.jpg",Jb=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),Yb=r("h2",null,[r("strong",null,"Pitti Palace")],-1),Zb=r("details",null,[r("summary",null,[r("span",{style:{"font-size":"75%"}}," click here for Lunch Option #2 ")]),r("p",null,[r("span",{style:{"font-size":"75%"}},[h('If we missed out on panini at "All\u2019Antico Vinaio", here\u2019s another option:'),r("br"),r("a",{href:"https://trattorialacasalinga.it/en/our-menu/",target:"_blank",rel:"noopener"},"Trattoria La Casalinga")]),h(),r("span",{style:{"font-size":"50%"}},[r("a",{href:"https://goo.gl/maps/cXGgZQteLjhBNHPUA",target:"_blank",rel:"noopener"},"map")])])],-1),Qb=r("p",null,[h("\u{1F3F0} "),r("strong",null,"12:30 PM"),h(": Entry into Pitti Palace"),r("br"),r("span",{style:{"font-size":"75%"}},"Allow 1.5 hours to tour")],-1),Xb=r("h3",null,"Palantine Gallery",-1),ek=r("blockquote",null,[r("p",null,[h("Pitti Palace houses multiple museums and gardens. Here, we\u2019re going to focus on "),r("a",{href:"https://www.uffizi.it/en/pitti-palace/palatine-gallery",target:"_blank",rel:"noopener"},"Palantine Gallery"),h(", which features works by Raphael, Titian, and Rembrandt.")])],-1),tk=r("p",null,[r("span",{style:{"font-size":"50%"}},[r("a",{href:"https://www.palazzo-pitti.net/the-palatine-gallery.html",target:"_blank",rel:"noopener"},"Detailed Room Descriptions (with pictures)")])],-1),nk=r("img",{src:Gb,height:"400",width:"800",style:{margin:"auto"}},null,-1),ok={__name:"16",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[nk]),default:A(()=>[Jb,Yb,Zb,Qb,Xb,ek,tk]),_:1},16))}},rk="/pitti-palace-boboli-gardens-map.png",ik="/florence-boboli-entrance.jpg",sk="/florence-boboli-fountains.jpg",ak=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),lk=r("h2",null,[r("strong",null,"Boboli Gardens")],-1),ck=r("blockquote",null,[r("p",null,"The gardens are vast, with sloping hills leading up to spectular views of Florence.")],-1),uk=r("p",null,[h("\u{1F6B6}"),r("strong",null,"2:00 PM"),h(": Explore Boboli Gardens "),r("span",{style:{"font-size":"75%"}},"(approx 30 minutes)")],-1),dk=r("blockquote",null,[r("p",null,"We may spend up to an hour here, or skip it entirely for rain or to make up time, or split up if some want to head back.")],-1),hk=r("p",null,[r("span",{style:{"font-size":"75%"}},[r("a",{href:"https://goo.gl/maps/K6riqmBPWh3Ga8wp8",target:"_blank",rel:"noopener"},"suggested walking tour")])],-1),pk=r("img",{src:rk,height:"200",width:"400",style:{margin:"auto"}},null,-1),fk=r("table",null,[r("thead",null,[r("tr",null,[r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:ik,height:"175",width:"350",style:{margin:"auto"}})])]),r("tr",null,[r("td",null,[r("img",{src:sk,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),mk={__name:"17",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[fk]),default:A(()=>[ak,lk,ck,uk,dk,hk,pk]),_:1},16))}},gk="/florence-statue-of-david.jpg",yk="/accademia-floor-plan.png",_k=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),vk=r("h2",null,[r("strong",null,"Accademia")],-1),wk=r("h4",null,[h("(Michelangelo\u2019s "),r("strong",null,"David"),h(")")],-1),bk=r("p",null,[h("\u{1F3F0} "),r("strong",null,"4:30 - 4:45 PM"),h(": Timed Entry into "),r("br"),h(" Galleria dell\u2019Accademia "),r("span",{style:{"font-size":"75%"}},"Allow 1 hour to tour")],-1),kk=r("img",{src:gk,height:"150",width:"300",style:{margin:"auto"}},null,-1),Tk=r("br",null,null,-1),Sk=r("blockquote",null,[r("p",null,[h("This six-ton, 17-foot-tall symbol of divine victory represents the beginning of the Renaissance. The museum also includes some of Michelangelo\u2019s other works, and a couple of Botticellis."),r("br"),r("span",{style:{"font-size":"50%"}},[h("listen to "),r("a",{href:"https://podcasts.ricksteves.com/walkingtours/Accademia_David.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Accademia & Michaelangelo\u2019s David Audio Tour"),h(" (MP3, 25:11)")])])],-1),xk=r("img",{src:yk,height:"650",width:"325",style:{margin:"auto"}},null,-1),Dk={__name:"18",setup(e){const t={layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[xk]),default:A(()=>[_k,vk,wk,bk,kk,Tk,Sk]),_:1},16))}},Ak="/florence-b-roof.jpg",Pk=r("h4",null,"Day 2 - Sat 10/8 - Florence",-1),$k=r("h2",null,[r("strong",null,"Rooftop Dinner")],-1),Ck=r("p",null,[h("\u{1F6B6} "),r("strong",null,"7:30 PM"),h(": Walk from AirBnB to Hotel Baglioni "),r("a",{href:"https://goo.gl/maps/PVvVbmdQXy8PC2y66",target:"_blank",rel:"noopener"},"(10 mins)")],-1),Rk=r("p",null,[h("\u{1F374} "),r("strong",null,"8:00 PM"),h(": Dinner reservation at B-Roof "),r("span",{style:{"font-size":"50%"}},"(confirmed)")],-1),Mk=r("br",null,null,-1),Ek=r("img",{src:Ak,height:"200",width:"400",style:{margin:"auto"}},null,-1),Fk=r("br",null,null,-1),Ok=r("blockquote",null,[r("p",null,[h("The panoramic "),r("a",{href:"https://www.b-roof.it/en",target:"_blank",rel:"noopener"},[r("strong",null,"B Roof")]),h(" restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.")])],-1),Lk={__name:"19",setup(e){const t={srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Pk,$k,Ck,Rk,Mk,Ek,Fk,Ok]),_:1},16))}},zk="/florence-to-rome.png",jk=r("h4",null,"Day 3 - Sun 10/9 - Travel Day",-1),qk=r("h2",null,[r("strong",null,"Florence to Rome")],-1),Ik=r("blockquote",null,[r("p",null,"It\u2019s time to say goodbye to Florence. Check-out time is 11:00, but we\u2019re going to try to get an early start for the trip back to Rome.")],-1),Bk=r("p",null,[h("\u{1F6B6}"),r("strong",null,"9:30 (approximate)"),h(": Walk from AirBnB to Train Station "),r("a",{href:"https://goo.gl/maps/eUn3JCPDKeRXZ6Sp7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),Vk=r("p",null,[h("\u{1F68B} "),r("strong",null,"10:00 - 10:30 AM (approximate)"),h(": Take a Train to Termini Train Station in Rome")],-1),Nk=r("img",{src:zk,height:"800",width:"400",style:{margin:"auto"}},null,-1),Wk=r("br",null,null,-1),Hk=r("blockquote",null,[r("p",null,[h("A bullet train runs from "),r("strong",null,"Santa Maria Novella"),h(" Train Station in Florence to "),r("strong",null,"Termini"),h(" Station in Rome. "),r("br"),h(" The ride lasts "),r("strong",null,"1 hour 36 mins"),h(", and the train departs every 15-30 minutes depending on the time of day. "),r("br")])],-1),Uk={__name:"20",setup(e){const t={srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[jk,qk,Ik,Bk,Vk,Nk,Wk,Hk]),_:1},16))}},Kk="/rome-neighborhoods.png",Gk=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:Kk,height:"400",width:"400"})]),r("td",null,[r("ul",null,[h(" Day 3 "),r("li",null," Walk from Rome Termini Station to AirBnB "),h(),r("li",null," Altar of the Fatherland "),h(),r("li",null,' "Heart of Rome" Walking Tour ')]),h(),r("ul",null,[h(" Day 4 "),r("li",null," St. Peter\u2019s Square "),h(),r("li",null," Roman Forum "),h(),r("li",null," Colisseum ")])])])])],-1),Jk=r("p",null,[r("span",{style:{"font-size":"50%"}},[h("watch "),r("a",{href:"https://youtu.be/aaKl40z6MSw",target:"_blank",rel:"noopener"},"Rick Steve\u2019s Travel Talk - Rome"),h(" (YouTube, 24:05) ")])],-1),Yk={__name:"21",setup(e){const t={srcSequence:"./slides/03-rome/021-rome-overview.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Gk,Jk]),_:1},16))}},Zk="/rome-lazio.jpg",Qk="/rome-airbnb.png",Xk=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),e3=r("h2",null,[r("strong",null,"Arrival")],-1),t3=r("h3",null,[r("a",{href:"https://www.airbnb.com/rooms/34746729?source_impression_id=p3_1664052612_ykw6QNbdy63cE0HL",target:"_blank",rel:"noopener"},"AirBnB - Via Merulana, 94 int 6, Rome"),h(),r("span",{style:{"font-size":"75%"}},"(Check-in Time: 3:00 PM)")],-1),n3=r("p",null,[h("\u{1F6B6}"),r("strong",null,"12:30 (approximate)"),h(": Walk from Train Station to AirBnB "),r("a",{href:"https://goo.gl/maps/UoVfD7pYrtoNMjom7",target:"_blank",rel:"noopener"},"(11 minutes)")],-1),o3=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:Zk,height:"200",width:"400",style:{margin:"auto"}})]),r("td",null,[r("img",{src:Qk,width:"275",height:"275"}),h(),r("span",{style:{"font-size":"50%"}},"(our apartment is on the third floor)")])])])],-1),r3=r("blockquote",null,[r("p",null,"We\u2019ll drop off our luggage at our home in Rome, grab lunch near the Via Merulana, and then head out for the day\u2019s sightseeing.")],-1),i3={__name:"22",setup(e){const t={srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Xk,e3,t3,n3,o3,r3]),_:1},16))}},s3="/rome-altar-of-the-fatherland.jpg",a3="/rome-airbnb-to-piazza-navona.png",l3=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),c3=r("h2",null,[r("strong",null,"Altar of the Fatherland")],-1),u3=r("blockquote",null,[r("p",null,[h("We\u2019ll walk right past the Colosseum on our way to the "),r("strong",null,"Altare della Patria"),h(' ("Altar of the Fatherland").')])],-1),d3=r("p",null,[h("\u{1F6B6}"),r("strong",null,"2:00"),h(": Walk from AirBnB to the Altar of the Fatherland "),r("a",{href:"https://goo.gl/maps/1n3J3Q7kW6G4TjDQ9",target:"_blank",rel:"noopener"},"(30 minutes)")],-1),h3=r("blockquote",null,[r("p",null,"This massive monument, designed by architect Guiseppe Sacconi in 1885, honors Vittorio Emanuele II, Italy\u2019s first king, seated on horseback in bronze.")],-1),p3=r("blockquote",null,[r("p",null,"Take the elevator to the roof (\u20AC7) and be rewarded by a commanding view of Ancient Rome.")],-1),f3=r("p",null,[h("\u{1F6B6}"),r("strong",null,"3:00"),h(": Walk from the Altar of the Fatherland to the Piazza Navona"),r("a",{href:"https://goo.gl/maps/rARoH2ixzgtR4ssL9",target:"_blank",rel:"noopener"},"(15 minutes)")],-1),m3=r("blockquote",null,[r("p",null,"The expansive Piazza Navona marks the starting point of our walk through the heart of Rome")],-1),g3=r("img",{src:s3,height:"200",width:"400",style:{margin:"auto"}},null,-1),y3=r("br",null,null,-1),_3=r("img",{src:a3,height:"319",width:"425",style:{margin:"auto"}},null,-1),v3={__name:"23",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[g3,y3,_3]),default:A(()=>[l3,c3,u3,d3,h3,p3,f3,m3]),_:1},16))}},w3="/heart-of-rome-walk-map.png",b3=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),k3=r("h2",null,[r("strong",null,'"Heart of Rome" Walk')],-1),T3=r("p",null,[h("\u{1F6B6}"),r("strong",null,"3:30"),h(": Walk from the Piazza Navona to Spanish Steps "),r("a",{href:"https://goo.gl/maps/RzCEs3sUTsuqyFvg6",target:"_blank",rel:"noopener"},"(30 minutes walk, plus stops)")],-1),S3=r("blockquote",null,[r("p",null,"This 1.5 mile walk takes roughly two to three hours, depending on how long we spend at each stop. It winds through the heart of Ancient Rome, ending up in North Rome, with sights including:")],-1),x3=r("br",null,null,-1),D3=r("ul",null,[r("li",null,"Piazza Navona"),r("li",null,"The Pantheon"),r("li",null,"Parliament"),r("li",null,"Piazza Colonna/Via del Corso"),r("li",null,"Trevi Fountain"),r("li",null,"Spanish Steps")],-1),A3=r("p",null,[r("span",{style:{"font-size":"50%"}},[h("listen to "),r("a",{href:"https://podcasts.ricksteves.com/walkingtours/rome-heart.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Heart of Rome Audio Tour"),h(" (MP3, 1:08:07)")])],-1),P3=r("img",{src:w3,height:"400",width:"400",style:{margin:"auto"}},null,-1),$3={__name:"24",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[P3]),default:A(()=>[b3,k3,T3,S3,x3,D3,A3]),_:1},16))}},C3="/rome-pantheon-exterior.jpg",R3="/rome-pantheon-floor-plan.png",M3=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),E3=r("h2",null,[r("strong",null,"Pantheon")],-1),F3=r("br",null,null,-1),O3=r("img",{src:C3,height:"200",width:"400",style:{margin:"auto"}},null,-1),L3=r("blockquote",null,[r("p",null,[r("span",{style:{"font-size":"65%"}},"The most magnificent building surviving from ancient Rome, The Pantheon began as a temple to the many gods worshipped by the early Romans. The building, originally built by the emperor Hadrian in 126 AD endured several partial and complete renovations over the centuries. Pope Boniface IV converted the temple into a Catholic Church in 609 AD.")])],-1),z3=r("span",{style:{"font-size":"50%"}}," (open until 6:00 PM)",-1),j3=h(),q3=r("br",null,null,-1),I3=r("p",null,[r("span",{style:{"font-size":"50%"}},[h("listen to "),r("a",{href:"https://podcasts.ricksteves.com/walkingtours/Pantheon.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Pantheon Audio Tour"),h(" (MP3, 23:20)")])],-1),B3=r("img",{src:R3,height:"800",width:"400",style:{margin:"auto"}},null,-1),V3={__name:"25",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[B3]),default:A(()=>[M3,E3,F3,O3,L3,z3,j3,q3,I3]),_:1},16))}},N3="/rome-piazza-di-montecitorio.jpg",W3="/rome-parliament.jpg",H3="/rome-piazza-colonna.jpeg",U3=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),K3=r("h2",null,[r("strong",null,"Piazza di Montecitorio, Parliament, Piazza Colonna")],-1),G3=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:N3,width:"300",height:"150"})]),r("td",null,[r("img",{src:W3,width:"200",height:"400"})]),r("td",null,[r("img",{src:H3,width:"300",height:"150"})])])])],-1),J3=r("blockquote",null,[r("p",null,"Walking from the Pantheon towards the Trevi Fountain, we\u2019ll pass through the Piazza di Montecitorio, home to the Italian Parliament, marked by an Egyptian obelisk from the 6th century BC, brought home by Emperor Augustus as a trophy of his victory over Mark Anthony and Cleopatra.")],-1),Y3=r("blockquote",null,[r("p",null,"One block further brings us to the Piazza Colonna, home to a massive column, 12 feet across and almost 100 feet tall, that has stood since the 2nd century AD. This column tells the story of Emperor Marcus Aurellius fighting the Barbarians around 170 AD.")],-1),Z3={__name:"26",setup(e){const t={srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[U3,K3,G3,J3,Y3]),_:1},16))}},Q3="/rome-trevi-fountain-night.jpg",X3=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),e5=r("h2",null,[r("strong",null,"Trevi Fountain")],-1),t5=r("p",null,[h("\u{1F4F7} "),r("strong",null,"6:00 (approximate)"),h(": Arrive at the Trevi Fountain")],-1),n5=r("blockquote",null,[r("p",null,"Trevi Fountain, designed by architect Nicola Salvi in 1762, cleverly incorporates the palace behind the fountain into the scene as a backdrop.")],-1),o5=r("br",null,null,-1),r5=r("blockquote",null,[r("p",null,'We\u2019ll see the Trevi Fountain twice today. Once during the "golden hour", illuminated by the setting sun, and a second time after dark, lit up with lights, on our way back to the AirBnB after dinner.')],-1),i5=r("br",null,null,-1),s5=r("blockquote",null,[r("p",null,[h("If you want to skip the previous parts of this walk, and do something else for the afternoon, "),r("strong",null,"6:00 PM"),h(" is the time we should all meet up, before we head on to the Spanish Steps.")])],-1),a5=r("img",{src:Q3,height:"200",width:"400",style:{margin:"auto"}},null,-1),l5={__name:"27",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[a5]),default:A(()=>[X3,e5,t5,n5,o5,r5,i5,s5]),_:1},16))}},c5="/spanish-steps.jpg",u5=r("h4",null,"Day 3 - Sun 10/9 - Rome",-1),d5=r("h2",null,[r("strong",null,"Spanish Steps")],-1),h5=r("p",null,[r("span",{style:{"font-size":"80%"}},[h("\u{1F6B6}"),r("strong",null,"6:30"),h(": Walk from Trevi Fountain to the Spanish Steps "),r("a",{href:"https://goo.gl/maps/MKdDinjuN6Tthqzu7",target:"_blank",rel:"noopener"},"(8 mins)")])],-1),p5=r("blockquote",null,[r("p",null,[h('138 steps lead sharply up from the "Sinking Boat Fountain", built by Bernini\u2019s father, Pietro, in the Piazza di Spagna. This fountain is fed by the same ancient aqueduct, the Acqua Vergine, that supplies the Trevi Fountain.'),r("br"),h(" Partway up, the steps fan out around a central terrace, forming a butterfly shape. An obelisk, framed by two Baroque church towers, stands at the top.")])],-1),f5=r("p",null,"This is where our touring for the day ends. We\u2019ll find a dinner spot in the neighborhood before returning to our AirBnB for a well earned rest.",-1),m5=r("blockquote",null,[r("p",null,[h("Enjoy the steps, but whatever you do, don\u2019t sit down on them, or it\u2019ll cost you a "),r("strong",null,"\u20AC250 fine"),h(" (seriously).")])],-1),g5=r("img",{src:c5,height:"250",width:"500",style:{margin:"auto"}},null,-1),y5={__name:"28",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[g5]),default:A(()=>[u5,d5,h5,p5,f5,m5]),_:1},16))}},_5="/rome-metro-to-vatican.png",v5=r("h4",null,"Day 4 - Mon 10/10 - Rome",-1),w5=r("h2",null,[r("strong",null,"Metro Ride to St. Peter\u2019s Square")],-1),b5=r("span",{style:{"font-size":"70%"}},[r("p",null,[h("\u{1F68B} - Take the "),r("strong",null,"Metro (Line A - Battistini)"),h(" from "),r("strong",null,"Vittorio Emanuele"),h(" to "),r("strong",null,"Ottavio"),h(),r("br"),h(),r("a",{href:"https://goo.gl/maps/YTmeLq1JWEF5V11w9",target:"_blank",rel:"noopener"},"30 mins total")])],-1),k5=r("span",{style:{"font-size":"65%"}},[r("h5",null,"Detailed Directions"),r("ul",null,[r("li",null,[h("Walk from "),r("strong",null,"Via Merulana"),h(" toward "),r("strong",null,"Via Machiavelli"),h(" to "),r("strong",null,"Vittorio Emanuele Station"),h(),r("br"),h(" (6 mins)")]),r("li",null,[h("Ride "),r("strong",null,"Line A"),h(" 7 stops to "),r("strong",null,"Ottaviano"),h(" (10 mins)")]),r("li",null,[h("Walk south on "),r("strong",null,"Via Ottaviano"),h(" toward "),r("strong",null,"Via degli Scipioni"),h(", continue onto "),r("strong",null,"Via di Porta Angelica"),h(", which becoms "),r("strong",null,"Largo Del Colonnato"),h(" (11 mins)")])])],-1),T5=r("img",{src:_5,height:"250",width:"500",style:{margin:"auto"}},null,-1),S5=r("br",null,null,-1),x5=r("blockquote",null,[r("p",null,[r("span",{style:{"font-size":"70%"}},[h("All public transportation uses the same ticket."),r("br"),h(" It costs "),r("strong",null,"\u20AC1.50"),h(" and is valid for one Metro ride, including transfers underground, plus unlimited city buses and trams during a 100-minute period.")])])],-1),D5={__name:"29",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[T5,S5,x5]),default:A(()=>[v5,w5,b5,k5]),_:1},16))}},A5="/st-peters-square.jpg",P5="/rome-st-peters-basilica-exterior.jpg",$5="/rome-st-peters-basilica-interior.jpeg",C5="/rome-pieta.jpg",R5=r("h4",null,"Day 4 - Mon 10/10 - Rome",-1),M5=r("h2",null,[r("strong",null,"St Peter\u2019s Square and Basilica")],-1),E5=r("br",null,null,-1),F5=r("h4",null,"St. Peter\u2019s Square",-1),O5=r("blockquote",null,[r("p",null,[h("284 Doric-style columns, each 56 feet high, topped with 140 statues of saints, each one 10 feet tall. Bernini designed this square, which is really an ellipse that\u2019s roughly the same dimensions as the Colosseum. "),r("br"),h(" A 2,000 year old, 90 foot, solid granite obelisk stands in the center, moved by the emperor Caligula from Egypt to Rome in ancient times.")])],-1),L5=r("br",null,null,-1),z5=r("h4",null,"St. Peter\u2019s Basilica",-1),j5=r("blockquote",null,[r("p",null,[h("Once you\u2019ve seen the square, its time to set foot inside the richest and grandest church on Earth. Michelangelo\u2019s "),r("strong",null,"Pieta"),h(" sits behind bulletproof glass just to the right of the entrance.")])],-1),q5=r("p",null,[r("span",{style:{"font-size":"50%"}},[r("strong",null,"Dress Code"),h(": No shorts, above-the-knee skirts, or bare shoulders allowed in the Basilica (enforced).")])],-1),I5=r("img",{src:A5,height:"175",width:"350",style:{margin:"auto"}},null,-1),B5=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:P5,height:"175",width:"350",style:{margin:"auto"}})]),r("td",null,[r("img",{src:$5,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),V5=r("img",{src:C5,height:"75",width:"150",style:{margin:"auto"}},null,-1),N5={__name:"30",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[I5,B5,V5]),default:A(()=>[R5,M5,E5,F5,O5,L5,z5,j5,q5]),_:1},16))}},W5="/rome-st-peters-walk-to-forum.png",H5=r("h4",null,"Day 4 - Mon 10/10 - Rome",-1),U5=r("h2",null,[r("strong",null,"Walk to the Forum")],-1),K5=r("p",null,[h("\u{1F6B6}"),r("strong",null,"12:00 PM (approx.)"),h(": Walk from St. Peter\u2019s Square to the Roman Forum "),r("a",{href:"https://goo.gl/maps/rNAWJa3WxTxV2KLh9",target:"_blank",rel:"noopener"},"(36 minutes)")],-1),G5=r("blockquote",null,[r("p",null,[h("This 1.8 mile walk crosses the River Tiber at the "),r("strong",null,"Ponte Vittorio Emanuele II"),h(" continuing to the "),r("strong",null,"Corso Vittorio Emaulele II"),h(", a main east-west artery.")])],-1),J5=r("br",null,null,-1),Y5=r("img",{src:W5,height:"325",width:"650",style:{margin:"auto"}},null,-1),Z5={__name:"31",setup(e){const t={srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[H5,U5,K5,G5,J5,Y5]),_:1},16))}},Q5="/rome-forum.jpg",X5="/rome-forum-map.png",e4=r("h4",null,"Day 4 - Mon 10/10 - Rome",-1),t4=r("h2",null,[r("strong",null,"The Forum")],-1),n4=r("img",{src:Q5,height:"150",width:"300",style:{margin:"auto"}},null,-1),o4=r("blockquote",null,[r("p",null,[r("span",{style:{"font-size":"75%"}}," We\u2019ll begin our tour at the entrance near the Via Dei Fori Imperiali. Imagine traveling back in time to ancient Rome, your mind\u2019s eye filling in the missing parts of these massive structures, with their colorful marble veneers intact. Listen to the historical perspective provided by the audio and walking tours linked below for all the rich history crammed into this, the heart and cradle of Roman civilization.")])],-1),r4=r("p",null,[r("span",{style:{"font-size":"50%"}},[r("a",{href:"https://podcasts.ricksteves.com/walkingtours/RomanForum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Roman Forum Audio Tour"),h(" (MP3, 1:08:07)")]),r("br"),r("span",{style:{"font-size":"50%"}},[r("a",{href:"https://youtu.be/k4P5W1DKTBI",target:"_blank",rel:"noopener"},"Walking Tour of the Forum"),h(" (51:00, ProWalk Tours, YouTube)")]),r("br"),r("span",{style:{"font-size":"50%"}},[r("a",{href:"https://www.google.com/maps/d/viewer?mid=1aWn5IgwI9hf1TuPa99xjYkA7q7NegYsK&ll=41.8917763120126%2C12.487398700000005&z=17",target:"_blank",rel:"noopener"},"Map of the Walking Tour"),h(" (Google Maps)")])],-1),i4=r("img",{src:X5,height:"550",width:"275",style:{margin:"auto"}},null,-1),s4={__name:"32",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[i4]),default:A(()=>[e4,t4,n4,o4,r4]),_:1},16))}},a4="/rome-palatine-valley.jpg",l4="/rome-palatine-circus-maximus.jpg",c4=r("h4",null,"Day 4 - Mon 10/10 - Rome",-1),u4=r("h2",null,[r("strong",null,"Palatine Hill")],-1),d4=r("blockquote",null,[r("p",null,"Humans first settled on the Palatine Hill in the 10th century BC: 200 years before Romulus founded Rome. Throughout the Roman Republic and Roman Empire, it was continuously inhabited: first by Rome\u2019s most eminent residents, incluing Romulus himself, later by the city\u2019s succession of Caesars.")],-1),h4=r("br",null,null,-1),p4=r("blockquote",null,[r("p",null,'Today, only the barest skeleton remains to tell the story of this, the "Beverly Hills" of the ancient world. in addition to providing an excellent vantage point for viewing the entire Forum.')],-1),f4=r("img",{src:a4,height:"600",width:"300",style:{margin:"auto"}},null,-1),m4=r("br",null,null,-1),g4=r("img",{src:l4,height:"600",width:"300",style:{margin:"auto"}},null,-1),y4={__name:"33",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[f4,m4,g4]),default:A(()=>[c4,u4,d4,h4,p4]),_:1},16))}},_4="/rome-colosseum.jpg",v4="/rome-colosseum-map.png",w4=r("h4",null,"Day 4 - Mon 10/10 - Rome",-1),b4=r("h2",null,[r("strong",null,"Colosseum")],-1),k4=r("p",null,[h("\u{1F3F0} "),r("strong",null,"3:15 PM"),h(": Timed Entry into Uffizi Gallery"),r("br")],-1),T4=r("img",{src:_4,height:"175",width:"350",style:{margin:"auto"}},null,-1),S4=r("br",null,null,-1),x4=r("blockquote",null,[r("p",null,[r("span",{style:{"font-size":"75%"}},"Here it is, a 2,000 year old masterpiece of Roman engineering, where 50,000 Romans watched all manner of violent entertainment, paid for by the Emperor.")])],-1),D4=r("p",null,[r("span",{style:{"font-size":"50%"}},[h("listen to "),r("a",{href:"https://podcasts.ricksteves.com/walkingtours/Colosseum.mp3",target:"_blank",rel:"noopener"},"Rick Steves\u2019 Colosseum Audio Tour"),h(" (MP3, 41:05)")])],-1),A4=r("img",{src:v4,height:"600",width:"300",style:{margin:"auto"}},null,-1),P4={__name:"34",setup(e){const t={layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[A4]),default:A(()=>[w4,b4,k4,T4,S4,x4,D4]),_:1},16))}},$4=r("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),C4=r("h2",null,[r("strong",null,"Rome to Civitavecchia")],-1),R4=r("p",null,[h("\u{1F6B6}"),r("strong",null,"Between 9:00 & 9:30"),h(" Walk from AirBnB to Rome Termini Station"),r("br"),r("a",{href:"https://goo.gl/maps/J3KiqJxWc3nP7PwG7",target:"_blank",rel:"noopener"},[r("span",{style:{"font-size":"75%"}},"(30 mins total)")])],-1),M4=r("p",null,[h("\u{1F68B} "),r("strong",null,"Between 10:00 & 11:00 AM"),h(": Take a Train to Civitavecchia (approx. 1 - 1.5 hrs)")],-1),E4=r("p",null,[r("a",{href:"trenitalia.com/en.html",target:"_blank",rel:"noopener"},"Train Schedule")],-1),F4=r("table",null,[r("thead",null,[r("tr",null,[r("th",null,"Train #"),r("th",null,"Depart"),r("th",null,"Duration"),r("th",null,"Arrive")])]),r("tbody",null,[r("tr",null,[r("td",null,"4128"),r("td",null,"10:12 AM"),r("td",null,"1h 1m"),r("td",null,"11:13 AM")]),r("tr",null,[r("td",null,"12514"),r("td",null,"10:42 AM"),r("td",null,"1h 17m"),r("td",null,"11:59 AM")]),r("tr",null,[r("td",null,"12516"),r("td",null,"11:12 AM"),r("td",null,"1h 4m"),r("td",null,"12:16 PM")]),r("tr",null,[r("td",null,"12520"),r("td",null,"11:42 AM"),r("td",null,"1h 23m"),r("td",null,"1:05 PM")])])],-1),O4={__name:"35",setup(e){const t={srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[$4,C4,R4,M4,E4,F4]),_:1},16))}},L4=r("h4",null,"Day 5 - Tue 10/11 - Travel Day",-1),z4=r("h2",null,[r("strong",null,"Civitavecchia Train Station to Transit Center")],-1),j4=r("p",null,"Upon arrival to the Train Station in Civitavecchia, there are two options for transferring from the station to the Transit Center at Largo Della Pace:",-1),q4=r("h4",null,[r("strong",null,"Shuttle Bus \u20AC2")],-1),I4=r("p",null,"City-run shuttle buses run every 10 minutes between the train station and the transit center",-1),B4=r("h4",null,[r("strong",null,"Taxi \u20AC15-20")],-1),V4=r("p",null,"You can hire a cab from the station to Largo Della Pace, directly across from the transit center, at a premium.",-1),N4={__name:"36",setup(e){const t={srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[L4,z4,j4,q4,I4,B4,V4]),_:1},16))}},W4=r("h4",null,"Day 5 - Tue 10/11 - Cruise Day 1",-1),H4=r("h2",null,[r("strong",null,"Transit Center to Port, Embarkation and Cruise Departure")],-1),U4=r("p",null,"The port area itself is secured, and you are not allowed to walk into the Cruise Terminal directly.",-1),K4=r("h3",null,[r("strong",null,"Transit Center")],-1),G4=r("p",null,"Free and frequent shuttle buses connect the Transit Center with the Cruise Terminal",-1),J4=r("h3",null,[r("strong",null,"Boarding Times")],-1),Y4=r("p",null,[h("According to the Boarding Passes provided by Carnival: "),r("br"),h(' "All guests must arrive within their Arrival Appointment. Guests who arrive earlier will be turned away and asked to return at their designated time"')],-1),Z4=r("p",null,[h("12:30 - 1:00: D&D, J&J "),r("br"),h(" 1:30 - 2:00: T&K "),r("br"),h(" 2:00 - 2:30: W&R "),r("br"),h(" 6:00: "),r("span",{style:{color:"red"}},"FINAL BOARDING")],-1),Q4=r("p",null,[h("\u{1F6A2} "),r("strong",null,"7:00"),h(": Depart port")],-1),X4={__name:"37",setup(e){const t={srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[W4,H4,U4,K4,G4,J4,Y4,Z4,Q4]),_:1},16))}},eT=r("h4",null,"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",-1),tT=r("h2",null,[r("strong",null,"Days at Sea")],-1),nT=r("p",null,[h("These are the days to have laundry done, and take advantage of the amenities on the Pride. "),r("br"),h(" Here\u2019s just a couple of the many options included with the cruise.")],-1),oT=r("h3",null,"Activities",-1),rT=r("h4",null,[r("a",{href:"https://www.carnival.com/onboard/waterworks",target:"_blank",rel:"noopener"},"Waterworks")],-1),iT=r("p",null,"Want to make a splash on deck? Grab your trunks and flip-flops and head to the upper deck to the onboard water park.",-1),sT=r("h3",null,"Food",-1),aT=r("h4",null,[r("a",{href:"https://www.carnival.com/cruise-food/guys-burger-joint",target:"_blank",rel:"noopener"},"Guy\u2019s Burger Joint")],-1),lT=r("p",null,"If you\u2019re itching to have a burger, Guy Fieri\u2019s namesake restaurant, is open for lunch only from Noon to just before 6:00 daily. Hitting while we don\u2019t have a shore excursion might be the best option.",-1),cT=r("h4",null,[r("a",{href:"https://www.carnival.com/cruise-food/blueiguana-cantina",target:"_blank",rel:"noopener"},"BlueIguana Cantina")],-1),uT=r("p",null,"Have a burrito or taco made fresh your way, for breakfast or lunch. Rock out with your guac out!",-1),dT={__name:"38",setup(e){const t={srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[eT,tT,nT,oT,rT,iT,sT,aT,lT,cT,uT]),_:1},16))}},hT="/mykonos-windmills.jpg",pT="/mykonos-little-venice.jpg",fT=r("h4",null,"Day 8 - Fri 10/14 - Cruise Day 4",-1),mT=r("h2",null,[r("strong",null,"Mykonos")],-1),gT=r("p",null,[h("\u{1F6A2} "),r("strong",null,"9:00"),h(": Arrive at port")],-1),yT=r("h3",null,"Shore Excursions",-1),_T=r("p",null,[h("\u{1F3F0} "),r("strong",null,"9:30")],-1),vT=r("ul",null,[r("li",null,[h("W&R - "),r("a",{href:"https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930",target:"_blank",rel:"noopener"},"Sailing Trip Around Mykonos\u2019 Famous Beaches"),h(" (5 hours)")])],-1),wT=r("p",null,[h("\u{1F6A2} "),r("strong",null,"6:00"),h(": Depart port")],-1),bT=r("p",null,[r("a",{href:"https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18",target:"_blank",rel:"noopener"},"Prowalk Tours Day Walk Map (Google)")],-1),kT=r("img",{src:hT,height:"200",width:"400",style:{margin:"auto"}},null,-1),TT=r("br",null,null,-1),ST=r("img",{src:pT,height:"210",width:"420",style:{margin:"auto"}},null,-1),xT={__name:"39",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[kT,TT,ST]),default:A(()=>[fT,mT,gT,yT,_T,vT,wT,bT]),_:1},16))}},DT="/ephesus.jpg",AT=r("h4",null,"Day 9 - Sat 10/15 - Cruise Day 5",-1),PT=r("h2",null,[r("strong",null,"Ephesus"),h(),r("span",{style:{"font-size":"75%"}},"(Anchor at Kusadasi, Turkey)")],-1),$T=r("p",null,[h("\u{1F6A2} "),r("strong",null,"7:00"),h(": Arrive at port")],-1),CT=r("h3",null,"Shore Excursions",-1),RT=r("p",null,[h("\u{1F3F0} "),r("strong",null,"8:00")],-1),MT=r("ul",null,[r("li",null,[h("W&R, D&D - "),r("a",{href:"https://www.carnival.com/shore-excursions/kusadasi-ephesus/terrace-house--ancient-ephesus-900010?selectedVariant=PR20221011010900010202210150800",target:"_blank",rel:"noopener"},"Terrace House & Ancient Ephesus"),h(" (4.25 hours)")])],-1),ET=r("p",null,[h("\u{1F6A2} "),r("strong",null,"5:00"),h(": Depart port")],-1),FT=r("img",{src:DT,height:"210",width:"420",style:{margin:"auto"}},null,-1),OT={__name:"40",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[FT]),default:A(()=>[AT,PT,$T,CT,RT,MT,ET]),_:1},16))}},LT="/santorini-oia-and-thira.jpg",zT="/santorini-catamaran.jpg",jT="/santorini-caldera.jpg",qT=r("h4",null,"Day 10 - Sun 10/16 - Cruise Day 6",-1),IT=r("h2",null,[r("strong",null,"Santorini")],-1),BT=r("p",null,[h("\u{1F6A2} "),r("strong",null,"8:00"),h(": Arrive at port")],-1),VT=r("h3",null,"Shore Excursions",-1),NT=r("p",null,[h("\u{1F3F0} "),r("strong",null,"8:15")],-1),WT=r("ul",null,[r("li",null,[h("W&R - "),r("a",{href:"https://www.carnival.com/shore-excursions/santorini/catamaran-sail-and-swim--bbq-792010?selectedVariant=PR20221011010792010202210160815",target:"_blank",rel:"noopener"},"Catamaran, Sail and Swim and BBQ"),h(" (6 hours)")]),r("li",null,[h("D&D - "),r("a",{href:"https://www.carnival.com/shore-excursions/santorini/oia--thira-792002?selectedVariant=PR20221011010792002202210160815",target:"_blank",rel:"noopener"},"Oia & Thira"),h(" (4.5 hours)")])],-1),HT=r("p",null,[h("\u{1F3F0} "),r("strong",null,"8:30")],-1),UT=r("ul",null,[r("li",null,[h("T&K, J&J - "),r("a",{href:"https://www.carnival.com/shore-excursions/santorini/volcano-the-caldera-and-hot-springs-792004?selectedVariant=PR20221011010792004202210160830",target:"_blank",rel:"noopener"},"Volcano, the Caldera, and Hot Springs"),h(" (2.75 hours)")])],-1),KT=r("p",null,[h("\u{1F6A2} "),r("strong",null,"5:00"),h(": Depart port")],-1),GT=r("img",{src:LT,height:"210",width:"420",style:{margin:"auto"}},null,-1),JT=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:zT,height:"200",width:"400",style:{margin:"auto"}})]),r("td",null,[r("img",{src:jT,height:"150",width:"300",style:{margin:"auto"}})])])])],-1),YT={__name:"41",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[GT,JT]),default:A(()=>[qT,IT,BT,VT,NT,WT,HT,UT,KT]),_:1},16))}},ZT="/athens-parthenon.jpg",QT="/athens-mycenae.jpg",XT=r("h4",null,"Day 11 - Mon 10/17 - Cruise Day 7",-1),eS=r("h2",null,[r("strong",null,"Athens")],-1),tS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"6:00"),h(": Arrive at port")],-1),nS=r("h3",null,"Shore Excursions",-1),oS=r("p",null,[h("\u{1F3F0} "),r("strong",null,"7:15")],-1),rS=r("ul",null,[r("li",null,[h("D&D, T&K, J&J - "),r("a",{href:"https://www.carnival.com/shore-excursions/athens/top-10-best-of-athens-823042?selectedVariant=PR20221011010823042202210170715",target:"_blank",rel:"noopener"},"Top 10 Best of Athens"),h(" (8 hours)")])],-1),iS=r("p",null,[h("\u{1F3F0} "),r("strong",null,"7:00")],-1),sS=r("ul",null,[r("li",null,[h("W&R - "),r("a",{href:"https://www.carnival.com/shore-excursions/athens/mycenae--ancient-corinth-823041?selectedVariant=PR20221011010823041202210170700",target:"_blank",rel:"noopener"},"Mycenae & Ancient Corinth"),h(" (8 hours)")])],-1),aS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"5:00"),h(": Depart port")],-1),lS=r("img",{src:ZT,height:"150",width:"300",style:{margin:"auto"}},null,-1),cS=r("br",null,null,-1),uS=r("img",{src:QT,height:"200",width:"400",style:{margin:"auto"}},null,-1),dS={__name:"42",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[lS,cS,uS]),default:A(()=>[XT,eS,tS,nS,oS,rS,iS,sS,aS]),_:1},16))}},hS="/olympia.jpg",pS=r("h4",null,"Day 12 - Tue 10/18 - Cruise Day 8",-1),fS=r("h2",null,[r("strong",null,"Olympia"),h(),r("span",{style:{"font-size":"75%"}},"(Anchor at Katakolon)")],-1),mS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"8:00"),h(": Arrive at port")],-1),gS=r("h3",null,"Shore Excursions",-1),yS=r("p",null,[h("\u{1F3F0} "),r("strong",null,"8:00")],-1),_S=r("ul",null,[r("li",null,[h("W&R, T&K, J&J - "),r("a",{href:"https://www.carnival.com/shore-excursions/katakolon/olympia--magna-grecia-824013?selectedVariant=PR20221011010824013202210180800",target:"_blank",rel:"noopener"},"Olympia & Magna Grecia"),h(" (5 hours)")])],-1),vS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"5:00"),h(": Depart port")],-1),wS=r("p",null,[h("\u{1F374} "),r("strong",null,"6:30"),h(": D&D - "),r("a",{href:"https://www.carnival.com/reserve-dining/steakhouse-STEAKHOUSE",target:"_blank",rel:"noopener"},"Steakhouse"),h(" Dinner Reservation for 2")],-1),bS=r("img",{src:hS,height:"200",width:"400",style:{margin:"auto"}},null,-1),kS={__name:"43",setup(e){const t={layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[bS]),default:A(()=>[pS,fS,mS,gS,yS,_S,vS,wS]),_:1},16))}},TS="/taormina-and-mount-etna.jpg",SS="/taormina-on-your-own.jpg",xS=r("h4",null,"Day 13 - Wed 10/19 - Cruise Day 9",-1),DS=r("h2",null,[r("strong",null,"Sicily"),h(),r("span",{style:{"font-size":"75%"}},"(Anchor at Messina)")],-1),AS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"9:00"),h(": Arrive at port")],-1),PS=r("h3",null,"Shore Excursions",-1),$S=r("p",null,[h("\u{1F3F0} "),r("strong",null,"9:15")],-1),CS=r("ul",null,[r("li",null,[h("W&R - "),r("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina--mt-etna-814032?selectedVariant=PR20221011010814032202210190915",target:"_blank",rel:"noopener"},"Taormina & Mount Etna"),h(" (8 hours)")])],-1),RS=r("p",null,[h("\u{1F3F0} "),r("strong",null,"10:15")],-1),MS=r("ul",null,[r("li",null,[h("D&D, T&K, J&J - "),r("a",{href:"https://www.carnival.com/shore-excursions/messina-sicily/taormina-on-your-own-814034?selectedVariant=PR20221011010814034202210191015",target:"_blank",rel:"noopener"},"Taormina on your own"),h(" (6.5 hours)")])],-1),ES=r("p",null,[h("\u{1F6A2} "),r("strong",null,"6:00"),h(": Depart port")],-1),FS=r("img",{src:TS,height:"200",width:"400",style:{margin:"auto"}},null,-1),OS=r("br",null,null,-1),LS=r("img",{src:SS,height:"150",width:"300",style:{margin:"auto"}},null,-1),zS={__name:"44",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[FS,OS,LS]),default:A(()=>[xS,DS,AS,PS,$S,CS,RS,MS,ES]),_:1},16))}},jS="/amalfi-coast-map.png",qS=r("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),IS=r("h2",null,[r("strong",null,"Naples (Amalfi Coast)")],-1),BS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"7:00"),h(": Arrive at port")],-1),VS=r("h3",null,"Shore Excursions",-1),NS=r("p",null,[h("\u{1F3F0} "),r("strong",null,"9:00")],-1),WS=r("ul",null,[r("li",null,[h("All - "),r("a",{href:"https://www.carnival.com/shore-excursions/naples-capri-pompeii/best-of-the-amalfi-coast--positano-and-sorrento-816054?selectedVariant=PR20221011010816054202210200900",target:"_blank",rel:"noopener"},"Best of the Amalfi Coast"),h(" (9.5 hours)")])],-1),HS=r("br",null,null,-1),US=r("ul",null,[r("li",null,[h("Stops with free time in: "),r("ul",null,[r("li",null,"Amalfi Town"),r("li",null,"Positano"),r("li",null,"Sorrento")])])],-1),KS=r("p",null,[h("\u{1F6A2} "),r("strong",null,"7:00"),h(": Depart port")],-1),GS=r("img",{src:jS,height:"250",width:"500",style:{margin:"auto"}},null,-1),JS={__name:"45",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[GS]),default:A(()=>[qS,IS,BS,VS,NS,WS,HS,US,KS]),_:1},16))}},YS="/amalfi-cathedral-exterior.jpg",ZS="/amalfi-cathedral-interior.jpg",QS="/amalfi-town-map.png",XS=r("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),ex=r("h2",null,[h("Amalfi Coast Tour: "),r("strong",null,"Amalfi Town")],-1),tx=r("br",null,null,-1),nx=r("blockquote",null,[r("p",null,[h("Our excursion starts by coach from the Port of Naples to the coastal city of Amalfi, where we\u2019ll spend an hour of free time. A short walk uphill from the Via Matteo Camera (the one main road in town) leads to the Piazza Duomo, and the "),r("strong",null,"Amalfi Cathedral"),h(".")])],-1),ox=r("table",null,[r("thead",null,[r("tr",null,[r("th"),r("th")])]),r("tbody",null,[r("tr",null,[r("td",null,[r("img",{src:YS,height:"200",width:"400",style:{margin:"auto"}})]),r("td",null,[r("img",{src:ZS,height:"200",width:"400",style:{margin:"auto"}})])])])],-1),rx=r("blockquote",null,[r("p",null,[h("A little further past the Cathedral, you\u2019ll find "),r("a",{href:"https://www.yelp.com/biz/cuoppo-d-amalfi-amalfi",target:"_blank",rel:"noopener"},[r("strong",null,"Cuoppo d\u2019Amalfi")]),h(", a fried fish shop that fills cardboard cones with all manner of deep-sea life")])],-1),ix=r("img",{src:QS,height:"650",width:"325",style:{margin:"auto"}},null,-1),sx={__name:"46",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[ix]),default:A(()=>[XS,ex,tx,nx,ox,rx]),_:1},16))}},ax="/amalfi-coast.jpg",lx="/positano-map.jpg",cx=r("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),ux=r("h2",null,[h("Amalfi Coast Tour: "),r("strong",null,"Positano")],-1),dx=r("br",null,null,-1),hx=r("img",{src:ax,height:"150",width:"300",style:{margin:"auto"}},null,-1),px=r("br",null,null,-1),fx=r("blockquote",null,[r("p",null,[h("Next, we\u2019ll board a private motor launch for a 40-minute voyage to Positano, seeing the Amalfi coast by sea. There, we\u2019ll spend another hour of free time. The "),r("strong",null,"Church of Santa Maria Assunta"),h(" was given a baroque makeover in the 18th century.")])],-1),mx=r("blockquote",null,[r("p",null,[h("Thirsty? Walk up to "),r("strong",null,"Enoteca Cuomo"),h(" and sample local red wines with homemade salami and sundried tomatoes.")])],-1),gx=r("img",{src:lx,height:"400",width:"400",style:{margin:"auto"}},null,-1),yx={__name:"47",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[gx]),default:A(()=>[cx,ux,dx,hx,px,fx,mx]),_:1},16))}},_x="/sorrento-map.jpg",vx=r("h4",null,"Day 14 - Thu 10/20 - Cruise Day 10",-1),wx=r("h2",null,[h("Amalfi Coast Tour: "),r("strong",null,"Sorrento")],-1),bx=r("blockquote",null,[r("p",null,[h("Next, we\u2019ll board a shuttle bus to rejoin our coach. The coach brings us to "),r("strong",null,"Sorrento"),h(", our final stop. We\u2019ll have more free time to explore, have lunch in a local restaurant, and finally board the coach to return to the Port of Naples and the ship.")])],-1),kx=r("br",null,null,-1),Tx=r("blockquote",null,[r("p",null,[h("The "),r("strong",null,"Piazza Tasso"),h(" is Sorrento\u2019s living room. Just behind the "),r("strong",null,"Statue of Torquato Tasso"),h(" you\u2019ll find "),r("strong",null,"Fattoria Terranova"),h(", a family-run boutique offering free biscuits and tastes of liquers.")])],-1),Sx=r("br",null,null,-1),xx=r("blockquote",null,[r("p",null,[h("A short walk brings you to the "),r("strong",null,"Cathedral"),h(", with its impressive inlaid-wood interior doors.")])],-1),Dx=r("br",null,null,-1),Ax=r("blockquote",null,[r("p",null,[h("Continue on to the "),r("strong",null,"Via San Cesareo"),h(", where you can sample Limoncello and other lemon products, famous to the Amalfi region.")])],-1),Px=r("img",{src:_x,height:"600",width:"300",style:{margin:"auto"}},null,-1),$x={__name:"48",setup(e){const t={layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md"};return F(B),(n,o)=>(k(),j(Pe,X(Q(t)),{right:A(i=>[Px]),default:A(()=>[vx,wx,bx,kx,Tx,Sx,xx,Dx,Ax]),_:1},16))}},Cx=r("h4",null,"Day 15 - Fri 10/21 - Cruise Day 11",-1),Rx=r("h2",null,[r("strong",null,"Civitavecchia (Debarkation)")],-1),Mx=r("p",null,[h("\u{1F6A2} "),r("strong",null,"6:00 AM"),h(": Arrive at port")],-1),Ex=r("p",null,"Make sure to have breakfast before debarking the ship. The Main Dining Room is usually quiet, compared to the other options, as passengers hurry to eat and finish packing.",-1),Fx=r("p",null,"Breakfast Served 6:30AM until:",-1),Ox=r("ul",null,[r("li",null,"8:30AM - Main Dining Room"),r("li",null,"9:15AM - Lido Restaurant"),r("li",null,"9:30AM - Cafe on the Way")],-1),Lx=r("p",null,"Any liquor purchased from shore or the gift shop that was held for safekeeping will be available for collection in a designated lounge.",-1),zx=r("p",null,"Bar service is open at the main pool area and a designated bar on the Promenade deck.",-1),jx=r("p",null,[h("More details about debarkation can be found "),r("a",{href:"https://help.carnival.com/app/answers/detail/a_id/1369/~/preparing-for-debarkation-day#:~:text=Guests%20who%20have%20pre%2Dpurchased,time%20in%20the%20home%20port.",target:"_blank",rel:"noopener"},"here")],-1),qx={__name:"49",setup(e){const t={srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Cx,Rx,Mx,Ex,Fx,Ox,Lx,zx,jx]),_:1},16))}},Ix=r("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),Bx=r("h2",null,[r("strong",null,"Port to Civitavecchia Train Station")],-1),Vx=r("h3",null,[r("strong",null,"Transit Center")],-1),Nx=r("p",null,"Once again, we\u2019ll ride the free and frequent shuttle buses that connect the Cruise Terminal with the Transit Center",-1),Wx=r("p",null,"You can again choose from one of two options to reach Civitiavecchia Train Station:",-1),Hx=r("h4",null,[r("strong",null,"Shuttle Bus \u20AC2")],-1),Ux=r("p",null,"City-run shuttle buses run every 10 minutes between the train station and the transit center",-1),Kx=r("h4",null,[r("strong",null,"Taxi \u20AC15-20")],-1),Gx=r("p",null,"You can hire a cab from Largo Della Pace to the train station at a premium.",-1),Jx={__name:"50",setup(e){const t={srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Ix,Bx,Vx,Nx,Wx,Hx,Ux,Kx,Gx]),_:1},16))}},Yx=r("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),Zx=r("h2",null,[r("strong",null,"Civitavecchia to Rome")],-1),Qx=r("p",null,[h("\u{1F68B} "),r("strong",null,"Between 10:00 & 11:00 AM"),h(": Take a Train to Rome (approx. 1 - 1.5 hrs)")],-1),Xx=r("p",null,[r("a",{href:"trenitalia.com/en.html",target:"_blank",rel:"noopener"},"Train Schedule")],-1),eD=r("div",{class:"text-xs"},[r("table",null,[r("thead",null,[r("tr",null,[r("th",null,"Train #"),r("th",null,"Depart"),r("th",null,"Duration"),r("th",null,"Arrive")])]),r("tbody",null,[r("tr",null,[r("td",null,"8601"),r("td",null,"09:16 AM"),r("td",null,"0h 47m"),r("td",null,"10:03 AM")]),r("tr",null,[r("td",null,"12529"),r("td",null,"09:43 AM"),r("td",null,"1h 5m"),r("td",null,"10:48 AM")]),r("tr",null,[r("td",null,"12531"),r("td",null,"09:58 AM"),r("td",null,"1h 20m"),r("td",null,"11:18 AM")]),r("tr",null,[r("td",null,"4129"),r("td",null,"10:44 AM"),r("td",null,"1h 4m"),r("td",null,"11:48 AM")]),r("tr",null,[r("td",null,"12537"),r("td",null,"10:52 AM"),r("td",null,"1h 26m"),r("td",null,"12:18 PM")]),r("tr",null,[r("td",null,"8605"),r("td",null,"11:16 AM"),r("td",null,"0h 47m"),r("td",null,"12:48 PM")]),r("tr",null,[r("td",null,"12537"),r("td",null,"10:52 AM"),r("td",null,"1h 26m"),r("td",null,"12:18 PM")])])])],-1),tD={__name:"51",setup(e){const t={srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[Yx,Zx,Qx,Xx,eD]),_:1},16))}},nD="/rome-vicus-caprarius.jpg",oD=r("h4",null,"Day 15 - Fri 10/21 - Rome",-1),rD=r("h2",null,[r("strong",null,"Last Day in Rome")],-1),iD=r("blockquote",null,[r("p",null,"Arriving in Rome Termini, the first thing we\u2019ll want to do is store our luggage until we\u2019re ready to leave Rome and head for our hotel near the airport.")],-1),sD=r("p",null,[h("\u{1F6B6}"),r("strong",null,"On Arrival"),h(": Walk from Termini Station "),r("span",{style:{"font-size":"60%"}},[h("(use "),r("strong",null,"Via Giovanni Giolitti Exit"),h(")")]),h(" to luggage storage service "),r("a",{href:"https://goo.gl/maps/xGPwktLxTVmY87RR8",target:"_blank",rel:"noopener"},"(5 mins)")],-1),aD=r("details",null,[r("summary",null,[r("span",{style:{"font-size":"75%"}}," click here for details on the luggage storage")]),r("p",null,[r("span",{style:{"font-size":"60%"}},[h("This "),r("a",{href:"https://www.stowyourbags.com/en/shop/rome/luggage-storage-termini-train-station-rome/",target:"_blank",rel:"noopener"},"luggage storage service"),h(" is a few steps from the Via Giolitti entrance to Termini Station. We have "),r("strong",null,"three"),h(" large lockers reserved for 24 hours starting at 10 AM. The store is open until 11PM, long after we\u2019ll be at the airport in bed. ")]),r("span",{style:{"font-size":"60%"}},[h("Each locker holds up to "),r("strong",null,"four"),h(' bags (the total space in each locker is 24" tall x 19" wide x 33" deep)')])])],-1),lD=r("br",null,null,-1),cD=r("h4",null,"\u{1F4F7} Vicus Caprarius",-1),uD=r("blockquote",null,[r("p",null,[h("One option to consider is "),r("a",{href:"https://www.tiktok.com/@travelbymitra/video/7051676676685565190",target:"_blank",rel:"noopener"},"Vicus Caprarius"),h(", the underground system of ancient pools that feed the Trevi Fountain. "),r("br"),h(),r("span",{style:{"font-size":"60%"}},[r("a",{href:"https://www.vicuscaprarius.com/en/#tariffe",target:"_blank",rel:"noopener"},"\u20AC4, no reservation required on Fridays")])])],-1),dD=r("br",null,null,-1),hD=r("img",{src:nD,height:"100",width:"200",style:{margin:"auto"}},null,-1),pD={__name:"52",setup(e){const t={srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[oD,rD,iD,sD,aD,lD,cD,uD,dD,hD]),_:1},16))}},fD=r("h4",null,"Day 15 - Fri 10/21 - Travel Day",-1),mD=r("h2",null,[r("strong",null,"Rome to Airport")],-1),gD=r("p",null,"When we\u2019re ready to leave Rome and head to the airport, we\u2019ll retrieve our luggage from storage, and head back into Rome Termini one more time to catch the airport shuttle train.",-1),yD=r("p",null,[h("\u{1F68B} "),r("strong",null,"Early Evening"),h(": Take a Train to Leonardo Da Vinci Airport")],-1),_D=r("blockquote",null,[r("p",null,[h("The "),r("a",{href:"https://www.trenitalia.com/en/services/fiumicino_airport.html",target:"_blank",rel:"noopener"},"Leonardo Express"),h(" is a non-stop shuttle train running between the airport train station and Termini Station in Rome. "),r("br"),h(" The ride lasts "),r("strong",null,"32 minutes"),h(", and the train departs every 15-30 minutes depending on the time of day. "),r("br"),h(" Tickets are "),r("strong",null,"\u20AC14"),h(" one-way, purchased individually, or "),r("strong",null,"\u20AC40"),h(' total for 4 tickets when purchased at the "mini-group" fare.')])],-1),vD=r("br",null,null,-1),wD=r("p",null,[h("\u{1F6B6}"),r("strong",null,"On Arrival"),h(": Walk from Fiumincino Aeroporto station to the "),r("a",{href:"https://www.hilton.com/en/hotels/romaptw-hilton-rome-airport/",target:"_blank",rel:"noopener"},"Hilton Rome Airport"),h(),r("a",{href:"https://goo.gl/maps/J6wCcYXGxRwqVdAh9",target:"_blank",rel:"noopener"},"(10 mins)")],-1),bD=r("p",null,"Check-in to your room, organize your luggage for the flight home, and settle in for a good night\u2019s sleep.",-1),kD={__name:"53",setup(e){const t={srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[fD,mD,gD,yD,_D,vD,wD,bD]),_:1},16))}},TD=r("h4",null,"Day 16 - Sat 10/22 - Travel Day",-1),SD=r("h2",null,[r("strong",null,"Trans-Atlantic Flight to New York")],-1),xD=r("p",null,[h("\u{1F6B6} "),r("strong",null,"7:00 AM"),h(": Check-out and walk to Terminal 3")],-1),DD=r("p",null,"Upon checking-out from the Hilton, we\u2019ll take a covered walkway directly to Terminal 3, where our flight home boards.",-1),AD=r("h3",null,"\u2708\uFE0F Leonardo da Vinci (FCO) to JFK by Plane",-1),PD=r("blockquote",null,[r("p",null,[r("strong",null,"American Airlines Flight 235"),h(),r("a",{href:"https://www.aa.com/travelInformation/flights/status",target:"_blank",rel:"noopener"},"(check Flight Status)"),h(),r("br"),h(" Depart from FCO airport "),r("strong",null,"10:30 AM"),h(),r("br"),h(" The flight time is 9 hours 39 mins "),r("br"),h(" Arrive at JFK "),r("strong",null,"2:09 PM")])],-1),$D=r("br",null,null,-1),CD=r("h3",null,"\u{1F690} JFK to East Haven by Ground Transport",-1),RD=r("blockquote",null,[r("p",null,[h("We take a private "),r("strong",null,"Connecticut Limo"),h(" Van from East Haven to JFK "),r("br"),h(" The ride lasts between 2 - 2.5 hours depending on traffic "),r("br")])],-1),MD={__name:"54",setup(e){const t={srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md"};return F(B),(n,o)=>(k(),j(Oe,X(Q(t)),{default:A(()=>[TD,SD,xD,DD,AD,PD,$D,CD,RD]),_:1},16))}},ED=[{path:"1",name:"page-1",component:V_,meta:{title:"European Cruise 2022",theme:"default",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
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
`,download:!0,exportFilename:"european-cruise-2022",drawings:{persist:!1},css:"unocss",background:"https://www.carnival.com/-/media/images/ships/pr/carnival-pride-1.jpg",class:"text-center"},index:0,start:0,end:28},filepath:"/Users/dave/dev/europe-cruise-2022/slides/00-intro/001-cover.md",notesHTML:"",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Gv,meta:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md",slide:{raw:null,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, <Link to="18">Accademia/David</Link> |
| **3** | Sun | 10/9 | <Link to="20">Florence -> Rome</Link>, <Link to="24">"Heart of Rome" Walk</Link>, <Link to="27">Trevi Fountain</Link>, <Link to="28">Spanish Steps</Link> |
| **4** | Mon | 10/10 | **Rome**: <Link to="30">St. Peter's Square & Basillica</Link>, <Link to="32">Roman Forum</Link>, <Link to="34">Colisseum</Link> |
| **5** | Tue | 10/11 | <Link to="35">Rome -> Civitavecchia</Link>, <Link to="37">Embarkation & Cruise Departure</Link> |
| **6,7** | Wed/Thu | 10/12,13 | <Link to="38">At Sea - Carnival Pride</Link> |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation",srcSequence:"./slides/01-itinerary/002-short-itinerary-part-1.md"},index:1,start:0,end:10,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",raw:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, <Link to="18">Accademia/David</Link> |
| **3** | Sun | 10/9 | <Link to="20">Florence -> Rome</Link>, <Link to="24">"Heart of Rome" Walk</Link>, <Link to="27">Trevi Fountain</Link>, <Link to="28">Spanish Steps</Link> |
| **4** | Mon | 10/10 | **Rome**: <Link to="30">St. Peter's Square & Basillica</Link>, <Link to="32">Roman Forum</Link>, <Link to="34">Colisseum</Link> |
| **5** | Tue | 10/11 | <Link to="35">Rome -> Civitavecchia</Link>, <Link to="37">Embarkation & Cruise Departure</Link> |
| **6,7** | Wed/Thu | 10/12,13 | <Link to="38">At Sea - Carnival Pride</Link> |`,title:"Itinerary at a Glance: Italy -> Cruise Embarkation",level:1,content:`# Itinerary at a Glance: Italy -> Cruise Embarkation
| Day   |     | Date  | Itinerary                                                                |
| ----  | --- | ----- | ------------------------------------------------------------------------ |
| **0** | Thu | 10/6 | <Link to="5">Depart JFK on American Airlines Flight 236 to Rome (FCO)</Link> |
| **1** | Fri | 10/7 | <Link to="6">Rome -> Florence</Link>, <Link to="9">Explore the Duomo</Link>, <Link to="11">Rooftop Dinner</Link> |
| **2** | Sat | 10/8 | **Florence**: <Link to="13">Uffizi</Link>, <Link to="16">Pitti Palace</Link>, <Link to="17">Boboli Gardens</Link>, <Link to="18">Accademia/David</Link> |
| **3** | Sun | 10/9 | <Link to="20">Florence -> Rome</Link>, <Link to="24">"Heart of Rome" Walk</Link>, <Link to="27">Trevi Fountain</Link>, <Link to="28">Spanish Steps</Link> |
| **4** | Mon | 10/10 | **Rome**: <Link to="30">St. Peter's Square & Basillica</Link>, <Link to="32">Roman Forum</Link>, <Link to="34">Colisseum</Link> |
| **5** | Tue | 10/11 | <Link to="35">Rome -> Civitavecchia</Link>, <Link to="37">Embarkation & Cruise Departure</Link> |
| **6,7** | Wed/Thu | 10/12,13 | <Link to="38">At Sea - Carnival Pride</Link> |`,frontmatter:{title:"Itinerary at a Glance: Italy -> Cruise Embarkation"},index:0,start:0,end:10},inline:{raw:`---
src: ./slides/01-itinerary/002-short-itinerary-part-1.md
---
`,content:"",frontmatter:{},index:1,start:28,end:32},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/002-short-itinerary-part-1.md",notesHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:$w,meta:{title:"Itinerary at a Glance: Carnival Pride Meditteranean",srcSequence:"./slides/01-itinerary/003-short-itinerary-part-2.md",slide:{raw:null,title:"Itinerary at a Glance: Carnival Pride Meditteranean",level:1,content:`# Itinerary at a Glance: Carnival Pride Meditteranean
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
`,content:"",frontmatter:{},index:2,start:32,end:36},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/003-short-itinerary-part-2.md",notesHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:Uw,meta:{title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",srcSequence:"./slides/01-itinerary/004-short-itinerary-part-3.md",slide:{raw:null,title:"Itinerary at a Glance: Cruise Debarkation/Flight Home",level:1,content:`# Itinerary at a Glance: Cruise Debarkation/Flight Home
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
`,content:"",frontmatter:{},index:3,start:36,end:40},filepath:"/Users/dave/dev/europe-cruise-2022/slides/01-itinerary/004-short-itinerary-part-3.md",notesHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:n2,meta:{title:"Day 0 - Thu 10/6 - Travel Day",srcSequence:"./slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",slide:{raw:null,title:"Day 0 - Thu 10/6 - Travel Day",level:4,content:`#### Day 0 - Thu 10/6 - Travel Day
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
`,content:"",frontmatter:{},index:4,start:40,end:44},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/005-day-0-transatlantic-flight-to-rome.md",notesHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:p2,meta:{title:"Day 1 - Fri 10/7 - Travel Day",srcSequence:"./slides/02-florence/006-day-1-rome-to-florence.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Travel Day",level:4,content:`#### Day 1 - Fri 10/7 - Travel Day
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
`,content:"",frontmatter:{},index:5,start:44,end:48},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/006-day-1-rome-to-florence.md",notesHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:_2,meta:{srcSequence:"./slides/02-florence/007-florence-overview.md",slide:{raw:null,content:`|     |     |
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
`,content:"",frontmatter:{},index:6,start:48,end:52},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/007-florence-overview.md",notesHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:A2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/008-day-1-florence-arrival.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:7,start:52,end:56},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/008-day-1-florence-arrival.md",notesHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:L2,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/009-day-1-florence-duomo.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:8,start:56,end:60},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/009-day-1-florence-duomo.md",notesHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:K2,meta:{title:"Day 1 - Fri 10/7 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/010-day-1-florence-restaurants.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence 
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
`,content:"",frontmatter:{layout:"two-cols"},index:9,start:60,end:65},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/010-day-1-florence-restaurants.md",notesHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:tb,meta:{title:"Day 1 - Fri 10/7 - Florence",srcSequence:"./slides/02-florence/011-day-1-florence-dinner.md",slide:{raw:null,title:"Day 1 - Fri 10/7 - Florence",level:4,content:`#### Day 1 - Fri 10/7 - Florence
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
`,content:"",frontmatter:{},index:10,start:65,end:69},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/011-day-1-florence-dinner.md",notesHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:fb,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/012-day-2-florence-walk-to-uffizi.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:11,start:69,end:74},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/012-day-2-florence-walk-to-uffizi.md",notesHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Db,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/013-day-2-florence-uffizi-gallery.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:12,start:74,end:79},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/013-day-2-florence-uffizi-gallery.md",notesHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Lb,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/014-day-2-allantico-vinaio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Panini at All'antico Vinaio** 
#### Lunch Option #1 <span style="font-size:50%">[Menu](https://www.allanticovinaio.com/il-menu-firenze_en/)</span>

\u{1F6B6}**10:45 AM**: Walk from Uffizi to All'Antico Vinaio<br>
<span style="font-size:75%">([5 mins](https://goo.gl/maps/Aup9R2km7X4VQZgS6), allow up to **one hour** to wait in line)</span>

> If you want the best panini in Florence, you need to be prepared to wait in line for it. This legendary sandwich shop opens at 10:30, but the line is likely to form in advance. <br> 
> The wait may last as much as **an hour or more**, but nearly all who visit agree, it's time well spent.

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
> The wait may last as much as **an hour or more**, but nearly all who visit agree, it's time well spent.

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
> The wait may last as much as **an hour or more**, but nearly all who visit agree, it's time well spent.

\u{1F6B6}**Between 11:15-12:00 PM**: Walk to Pitti Palace<br>
<span style="font-size:75%">[(11 mins)](https://goo.gl/maps/UUc7SxPFN43kujLb6)</span>

Panini in hand, walk down to the river Arno towards the Ponte Vecchio

::right::

<img src="/florence-allantico-vinaio.jpeg" height="200" width="400" style="margin:auto">`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/02-florence/014-day-2-allantico-vinaio.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:13,start:79,end:84},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/014-day-2-allantico-vinaio.md",notesHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Kb,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/015-day-2-florence-ponte-vecchio.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:14,start:84,end:89},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/015-day-2-florence-ponte-vecchio.md",notesHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:ok,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/016-day-2-florence-pitti-palace.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:15,start:89,end:94},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/016-day-2-florence-pitti-palace.md",notesHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:mk,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/017-day-2-florence-boboli-gardens.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:16,start:94,end:99},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/017-day-2-florence-boboli-gardens.md",notesHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:Dk,meta:{title:"Day 2 - Sat 10/8 - Florence",layout:"two-cols",srcSequence:"./slides/02-florence/018-day-2-florence-accademia.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
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
`,content:"",frontmatter:{layout:"two-cols"},index:17,start:99,end:104},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/018-day-2-florence-accademia.md",notesHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:Lk,meta:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md",slide:{raw:null,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** 

\u{1F6B6} **7:30 PM**: Walk from AirBnB to Hotel Baglioni [(10 mins)](https://goo.gl/maps/PVvVbmdQXy8PC2y66)

\u{1F374} **8:00 PM**: Dinner reservation at B-Roof <span style="font-size:50%">(confirmed)</span> 

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence",srcSequence:"./slides/02-florence/019-day-2-florence-dinner.md"},index:18,start:0,end:16,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",raw:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** 

\u{1F6B6} **7:30 PM**: Walk from AirBnB to Hotel Baglioni [(10 mins)](https://goo.gl/maps/PVvVbmdQXy8PC2y66)

\u{1F374} **8:00 PM**: Dinner reservation at B-Roof <span style="font-size:50%">(confirmed)</span> 

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.

`,title:"Day 2 - Sat 10/8 - Florence",level:4,content:`#### Day 2 - Sat 10/8 - Florence
## **Rooftop Dinner** 

\u{1F6B6} **7:30 PM**: Walk from AirBnB to Hotel Baglioni [(10 mins)](https://goo.gl/maps/PVvVbmdQXy8PC2y66)

\u{1F374} **8:00 PM**: Dinner reservation at B-Roof <span style="font-size:50%">(confirmed)</span> 

<br>

<img src="/florence-b-roof.jpg" height="200" width="400" style="margin:auto"/>

<br>

>The panoramic [**B Roof**](https://www.b-roof.it/en) restaurant, formerly known as Terrazza Brunelleschi, is located on the fifth floor of the historic Grand Hotel Baglioni.`,frontmatter:{title:"Day 2 - Sat 10/8 - Florence"},index:0,start:0,end:16},inline:{raw:`---
src: ./slides/02-florence/019-day-2-florence-dinner.md
---
`,content:"",frontmatter:{},index:18,start:104,end:108},filepath:"/Users/dave/dev/europe-cruise-2022/slides/02-florence/019-day-2-florence-dinner.md",notesHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:Uk,meta:{title:"Day 3 - Sun 10/9 - Travel Day",srcSequence:"./slides/03-rome/020-day-3-florence-to-rome.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Travel Day",level:4,content:`#### Day 3 - Sun 10/9 - Travel Day
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
`,content:"",frontmatter:{},index:19,start:108,end:112},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/020-day-3-florence-to-rome.md",notesHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:Yk,meta:{srcSequence:"./slides/03-rome/021-rome-overview.md",slide:{raw:null,content:`|     |     |
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
`,content:"",frontmatter:{},index:20,start:112,end:116},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/021-rome-overview.md",notesHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:i3,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/022-day-3-rome-arrival.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{},index:21,start:116,end:120},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/022-day-3-rome-arrival.md",notesHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:v3,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome 
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
`,content:"",frontmatter:{layout:"two-cols"},index:22,start:120,end:125},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/023-day-3-rome-altar-of-the-fatherland.md",notesHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:$3,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:23,start:125,end:130},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/024-day-3-rome-heart-of-rome-walk.md",notesHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:V3,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/025-day-3-rome-pantheon.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:24,start:130,end:135},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/025-day-3-rome-pantheon.md",notesHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Z3,meta:{title:"Day 3 - Sun 10/9 - Rome",srcSequence:"./slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{},index:25,start:135,end:139},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/026-day-3-rome-pantheon-to-trevi.md",notesHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:l5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/027-day-3-rome-trevi-fountain.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:26,start:139,end:144},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/027-day-3-rome-trevi-fountain.md",notesHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:y5,meta:{title:"Day 3 - Sun 10/9 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/028-day-3-rome-spanish-steps.md",slide:{raw:null,title:"Day 3 - Sun 10/9 - Rome",level:4,content:`#### Day 3 - Sun 10/9 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:27,start:144,end:149},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/028-day-3-rome-spanish-steps.md",notesHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:D5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:28,start:149,end:154},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/029-day-4-airbnb-to-st-peters-square.md",notesHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:N5,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/030-day-4-rome-st-peters-square.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:29,start:154,end:159},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/030-day-4-rome-st-peters-square.md",notesHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:Z5,meta:{title:"Day 4 - Mon 10/10 - Rome",srcSequence:"./slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{},index:30,start:159,end:163},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/031-day-4-rome-st-peters-square-to-forum.md",notesHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:s4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/032-day-4-rome-roman-forum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:31,start:163,end:168},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/032-day-4-rome-roman-forum.md",notesHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:y4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/033-day-4-rome-palatine-hill.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:32,start:168,end:173},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/033-day-4-rome-palatine-hill.md",notesHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:P4,meta:{title:"Day 4 - Mon 10/10 - Rome",layout:"two-cols",srcSequence:"./slides/03-rome/034-day-4-rome-colosseum.md",slide:{raw:null,title:"Day 4 - Mon 10/10 - Rome",level:4,content:`#### Day 4 - Mon 10/10 - Rome
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
`,content:"",frontmatter:{layout:"two-cols"},index:33,start:173,end:178},filepath:"/Users/dave/dev/europe-cruise-2022/slides/03-rome/034-day-4-rome-colosseum.md",notesHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:O4,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
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
`,content:"",frontmatter:{},index:34,start:178,end:182},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/035-day-5-rome-to-civitavecchia.md",notesHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:N4,meta:{title:"Day 5 - Tue 10/11 - Travel Day",srcSequence:"./slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Travel Day",level:4,content:`#### Day 5 - Tue 10/11 - Travel Day
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
`,content:"",frontmatter:{},index:35,start:182,end:186},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/036-day-5-civitavecchia-train-station-to-transit-center.md",notesHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:X4,meta:{title:"Day 5 - Tue 10/11 - Cruise Day 1",srcSequence:"./slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",slide:{raw:null,title:"Day 5 - Tue 10/11 - Cruise Day 1",level:4,content:`#### Day 5 - Tue 10/11 - Cruise Day 1
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
`,content:"",frontmatter:{},index:36,start:186,end:190},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/037-day-5-embarkation-and-cruise-departure.md",notesHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:dT,meta:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",slide:{raw:null,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**

These are the days to have laundry done, and take advantage of the amenities on the Pride.  <br> Here's just a couple of the many options included with the cruise.

### Activities
#### [Waterworks](https://www.carnival.com/onboard/waterworks)
Want to make a splash on deck? Grab your trunks and flip-flops and head to the upper deck to the onboard water park.

### Food
#### [Guy's Burger Joint](https://www.carnival.com/cruise-food/guys-burger-joint)
If you're itching to have a burger, Guy Fieri's namesake restaurant, is open for lunch only from Noon to just before 6:00 daily.  Hitting while we don't have a shore excursion might be the best option.

#### [BlueIguana Cantina](https://www.carnival.com/cruise-food/blueiguana-cantina)
Have a burrito or taco made fresh your way, for breakfast or lunch.  Rock out with your guac out!`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",srcSequence:"./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md"},index:37,start:0,end:15,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",raw:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**

These are the days to have laundry done, and take advantage of the amenities on the Pride.  <br> Here's just a couple of the many options included with the cruise.

### Activities
#### [Waterworks](https://www.carnival.com/onboard/waterworks)
Want to make a splash on deck? Grab your trunks and flip-flops and head to the upper deck to the onboard water park.

### Food
#### [Guy's Burger Joint](https://www.carnival.com/cruise-food/guys-burger-joint)
If you're itching to have a burger, Guy Fieri's namesake restaurant, is open for lunch only from Noon to just before 6:00 daily.  Hitting while we don't have a shore excursion might be the best option.

#### [BlueIguana Cantina](https://www.carnival.com/cruise-food/blueiguana-cantina)
Have a burrito or taco made fresh your way, for breakfast or lunch.  Rock out with your guac out!`,title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3",level:4,content:`#### Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3
## **Days at Sea**

These are the days to have laundry done, and take advantage of the amenities on the Pride.  <br> Here's just a couple of the many options included with the cruise.

### Activities
#### [Waterworks](https://www.carnival.com/onboard/waterworks)
Want to make a splash on deck? Grab your trunks and flip-flops and head to the upper deck to the onboard water park.

### Food
#### [Guy's Burger Joint](https://www.carnival.com/cruise-food/guys-burger-joint)
If you're itching to have a burger, Guy Fieri's namesake restaurant, is open for lunch only from Noon to just before 6:00 daily.  Hitting while we don't have a shore excursion might be the best option.

#### [BlueIguana Cantina](https://www.carnival.com/cruise-food/blueiguana-cantina)
Have a burrito or taco made fresh your way, for breakfast or lunch.  Rock out with your guac out!`,frontmatter:{title:"Day 6 and 7 - Tue 10/12, Wed 10/13 - Cruise Days 2 and 3"},index:0,start:0,end:15},inline:{raw:`---
src: ./slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md
---
`,content:"",frontmatter:{},index:37,start:190,end:194},filepath:"/Users/dave/dev/europe-cruise-2022/slides/04-cruise-departure/038-day-6-and-7-at-sea-days.md",notesHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:xT,meta:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md",slide:{raw:null,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port

[Prowalk Tours Day Walk Map (Google)](https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18)

::right::

<img src="/mykonos-windmills.jpg" height="200" width="400" style="margin:auto">
<br>
<img src="/mykonos-little-venice.jpg" height="210" width="420" style="margin:auto">`,frontmatter:{title:"Day 8 - Fri 10/14 - Cruise Day 4",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/039-day-8-mykonos.md"},index:38,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/039-day-8-mykonos.md",raw:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port

[Prowalk Tours Day Walk Map (Google)](https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18)

::right::

<img src="/mykonos-windmills.jpg" height="200" width="400" style="margin:auto">
<br>
<img src="/mykonos-little-venice.jpg" height="210" width="420" style="margin:auto">`,title:"Day 8 - Fri 10/14 - Cruise Day 4",level:4,content:`#### Day 8 - Fri 10/14 - Cruise Day 4
## **Mykonos**

\u{1F6A2} **9:00**: Arrive at port

### Shore Excursions
\u{1F3F0} **9:30** 
* W&R - [Sailing Trip Around Mykonos' Famous Beaches](https://www.carnival.com/shore-excursions/mykonos/sailing-trip-around-mykonos-famous-beaches-791006?selectedVariant=PR20221011010791006202210140930) (5 hours)

\u{1F6A2} **6:00**: Depart port

[Prowalk Tours Day Walk Map (Google)](https://www.google.com/maps/d/u/0/viewer?entry=yt&mid=1MkkZgv_bRxTXpCCAZoitdRvj8OhqmGzy&ll=37.44579751131827%2C25.33094954188767&z=18)

::right::

<img src="/mykonos-windmills.jpg" height="200" width="400" style="margin:auto">
<br>
<img src="/mykonos-little-venice.jpg" height="210" width="420" style="margin:auto">`,frontmatter:{title:"Day 8 - Fri 10/14 - Cruise Day 4"},index:0,start:0,end:18},inline:{raw:`---
layout: two-cols
src: ./slides/05-turkey-and-greece/039-day-8-mykonos.md
---
`,content:"",frontmatter:{layout:"two-cols"},index:38,start:194,end:199},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/039-day-8-mykonos.md",notesHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:OT,meta:{title:"Day 9 - Sat 10/15 - Cruise Day 5",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/040-day-9-ephesus.md",slide:{raw:null,title:"Day 9 - Sat 10/15 - Cruise Day 5",level:4,content:`#### Day 9 - Sat 10/15 - Cruise Day 5
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
`,content:"",frontmatter:{layout:"two-cols"},index:39,start:199,end:204},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/040-day-9-ephesus.md",notesHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:YT,meta:{title:"Day 10 - Sun 10/16 - Cruise Day 6",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/041-day-10-santorini.md",slide:{raw:null,title:"Day 10 - Sun 10/16 - Cruise Day 6",level:4,content:`#### Day 10 - Sun 10/16 - Cruise Day 6
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
`,content:"",frontmatter:{layout:"two-cols"},index:40,start:204,end:209},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/041-day-10-santorini.md",notesHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:dS,meta:{title:"Day 11 - Mon 10/17 - Cruise Day 7",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/042-day-11-athens.md",slide:{raw:null,title:"Day 11 - Mon 10/17 - Cruise Day 7",level:4,content:`#### Day 11 - Mon 10/17 - Cruise Day 7
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
`,content:"",frontmatter:{layout:"two-cols"},index:41,start:209,end:214},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/042-day-11-athens.md",notesHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:kS,meta:{title:"Day 12 - Tue 10/18 - Cruise Day 8",layout:"two-cols",srcSequence:"./slides/05-turkey-and-greece/043-day-12-olympia.md",slide:{raw:null,title:"Day 12 - Tue 10/18 - Cruise Day 8",level:4,content:`#### Day 12 - Tue 10/18 - Cruise Day 8
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
`,content:"",frontmatter:{layout:"two-cols"},index:42,start:214,end:219},filepath:"/Users/dave/dev/europe-cruise-2022/slides/05-turkey-and-greece/043-day-12-olympia.md",notesHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:zS,meta:{title:"Day 13 - Wed 10/19 - Cruise Day 9",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/044-day-13-sicily.md",slide:{raw:null,title:"Day 13 - Wed 10/19 - Cruise Day 9",level:4,content:`#### Day 13 - Wed 10/19 - Cruise Day 9
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
`,content:"",frontmatter:{layout:"two-cols"},index:43,start:219,end:224},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/044-day-13-sicily.md",notesHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:JS,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/045-day-14-naples.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:44,start:224,end:229},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/045-day-14-naples.md",notesHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:sx,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:45,start:229,end:234},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/046-day-14-naples-amalfi.md",notesHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:yx,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/047-day-14-naples-positano.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:46,start:234,end:239},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/047-day-14-naples-positano.md",notesHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:$x,meta:{title:"Day 14 - Thu 10/20 - Cruise Day 10",layout:"two-cols",srcSequence:"./slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",slide:{raw:null,title:"Day 14 - Thu 10/20 - Cruise Day 10",level:4,content:`#### Day 14 - Thu 10/20 - Cruise Day 10
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
`,content:"",frontmatter:{layout:"two-cols"},index:47,start:239,end:244},filepath:"/Users/dave/dev/europe-cruise-2022/slides/06-sicily-and-naples/048-day-14-naples-sorrento.md",notesHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:qx,meta:{title:"Day 15 - Fri 10/21 - Cruise Day 11",srcSequence:"./slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Cruise Day 11",level:4,content:`#### Day 15 - Fri 10/21 - Cruise Day 11
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
`,content:"",frontmatter:{},index:48,start:244,end:248},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/049-day-15-civitavecchia-port-and-debarkation.md",notesHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:Jx,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
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
`,content:"",frontmatter:{},index:49,start:248,end:252},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/050-day-15-civitavecchia-port-to-train-station.md",notesHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",name:"page-51",component:tD,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**

\u{1F68B} **Between 10:00 & 11:00 AM**: Take a Train to Rome (approx. 1 - 1.5 hrs)

[Train Schedule](trenitalia.com/en.html)
<div class="text-xs">

| Train # | Depart   | Duration | Arrive   |
| ------- | -------- | -------- | -------- |
| 8601    | 09:16 AM | 0h 47m   | 10:03 AM |
| 12529   | 09:43 AM | 1h 5m    | 10:48 AM |
| 12531   | 09:58 AM | 1h 20m   | 11:18 AM |
| 4129    | 10:44 AM | 1h 4m    | 11:48 AM |
| 12537   | 10:52 AM | 1h 26m   | 12:18 PM |
| 8605    | 11:16 AM | 0h 47m   | 12:48 PM |
| 12537   | 10:52 AM | 1h 26m   | 12:18 PM |

</div>`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/051-day-15-civitavecchia-to-rome.md"},index:50,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/051-day-15-civitavecchia-to-rome.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**

\u{1F68B} **Between 10:00 & 11:00 AM**: Take a Train to Rome (approx. 1 - 1.5 hrs)

[Train Schedule](trenitalia.com/en.html)
<div class="text-xs">

| Train # | Depart   | Duration | Arrive   |
| ------- | -------- | -------- | -------- |
| 8601    | 09:16 AM | 0h 47m   | 10:03 AM |
| 12529   | 09:43 AM | 1h 5m    | 10:48 AM |
| 12531   | 09:58 AM | 1h 20m   | 11:18 AM |
| 4129    | 10:44 AM | 1h 4m    | 11:48 AM |
| 12537   | 10:52 AM | 1h 26m   | 12:18 PM |
| 8605    | 11:16 AM | 0h 47m   | 12:48 PM |
| 12537   | 10:52 AM | 1h 26m   | 12:18 PM |

</div>`,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Civitavecchia to Rome**

\u{1F68B} **Between 10:00 & 11:00 AM**: Take a Train to Rome (approx. 1 - 1.5 hrs)

[Train Schedule](trenitalia.com/en.html)
<div class="text-xs">

| Train # | Depart   | Duration | Arrive   |
| ------- | -------- | -------- | -------- |
| 8601    | 09:16 AM | 0h 47m   | 10:03 AM |
| 12529   | 09:43 AM | 1h 5m    | 10:48 AM |
| 12531   | 09:58 AM | 1h 20m   | 11:18 AM |
| 4129    | 10:44 AM | 1h 4m    | 11:48 AM |
| 12537   | 10:52 AM | 1h 26m   | 12:18 PM |
| 8605    | 11:16 AM | 0h 47m   | 12:48 PM |
| 12537   | 10:52 AM | 1h 26m   | 12:18 PM |

</div>`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:19},inline:{raw:`---
src: ./slides/07-return-home/051-day-15-civitavecchia-to-rome.md
---
`,content:"",frontmatter:{},index:50,start:252,end:256},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/051-day-15-civitavecchia-to-rome.md",notesHTML:"",id:50,no:51},__clicksElements:[],__preloaded:!1}},{path:"52",name:"page-52",component:pD,meta:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> Arriving in Rome Termini, the first thing we'll want to do is store our luggage until we're ready to leave Rome and head for our hotel near the airport.

\u{1F6B6}**On Arrival**: Walk from Termini Station <span style="font-size:60%">(use **Via Giovanni Giolitti Exit**)</span> to luggage storage service [(5 mins)](https://goo.gl/maps/xGPwktLxTVmY87RR8)

<details>
<summary><span style="font-size:75%"> click here for details on the luggage storage</span></summary>

<span style="font-size:60%">This [luggage storage service](https://www.stowyourbags.com/en/shop/rome/luggage-storage-termini-train-station-rome/) is a few steps from the Via Giolitti entrance to Termini Station.  We have **three** large lockers reserved for 24 hours starting at 10 AM.  The store is open until 11PM, long after we'll be at the airport in bed. </span>
<span style="font-size:60%">Each locker holds up to **four** bags (the total space in each locker is 24" tall x 19" wide x 33" deep)</span>
</details>
<br>

#### \u{1F4F7} Vicus Caprarius
> One option to consider is [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. <br> <span style="font-size:60%">[\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)</span>

<br>

<img src="/rome-vicus-caprarius.jpg" height="100" width="200" style="margin:auto"/>`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome",srcSequence:"./slides/07-return-home/052-day-15-last-day-in-rome.md"},index:51,start:0,end:21,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/052-day-15-last-day-in-rome.md",raw:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> Arriving in Rome Termini, the first thing we'll want to do is store our luggage until we're ready to leave Rome and head for our hotel near the airport.

\u{1F6B6}**On Arrival**: Walk from Termini Station <span style="font-size:60%">(use **Via Giovanni Giolitti Exit**)</span> to luggage storage service [(5 mins)](https://goo.gl/maps/xGPwktLxTVmY87RR8)

<details>
<summary><span style="font-size:75%"> click here for details on the luggage storage</span></summary>

<span style="font-size:60%">This [luggage storage service](https://www.stowyourbags.com/en/shop/rome/luggage-storage-termini-train-station-rome/) is a few steps from the Via Giolitti entrance to Termini Station.  We have **three** large lockers reserved for 24 hours starting at 10 AM.  The store is open until 11PM, long after we'll be at the airport in bed. </span>
<span style="font-size:60%">Each locker holds up to **four** bags (the total space in each locker is 24" tall x 19" wide x 33" deep)</span>
</details>
<br>

#### \u{1F4F7} Vicus Caprarius
> One option to consider is [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. <br> <span style="font-size:60%">[\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)</span>

<br>

<img src="/rome-vicus-caprarius.jpg" height="100" width="200" style="margin:auto"/>`,title:"Day 15 - Fri 10/21 - Rome",level:4,content:`#### Day 15 - Fri 10/21 - Rome
## **Last Day in Rome**

> Arriving in Rome Termini, the first thing we'll want to do is store our luggage until we're ready to leave Rome and head for our hotel near the airport.

\u{1F6B6}**On Arrival**: Walk from Termini Station <span style="font-size:60%">(use **Via Giovanni Giolitti Exit**)</span> to luggage storage service [(5 mins)](https://goo.gl/maps/xGPwktLxTVmY87RR8)

<details>
<summary><span style="font-size:75%"> click here for details on the luggage storage</span></summary>

<span style="font-size:60%">This [luggage storage service](https://www.stowyourbags.com/en/shop/rome/luggage-storage-termini-train-station-rome/) is a few steps from the Via Giolitti entrance to Termini Station.  We have **three** large lockers reserved for 24 hours starting at 10 AM.  The store is open until 11PM, long after we'll be at the airport in bed. </span>
<span style="font-size:60%">Each locker holds up to **four** bags (the total space in each locker is 24" tall x 19" wide x 33" deep)</span>
</details>
<br>

#### \u{1F4F7} Vicus Caprarius
> One option to consider is [Vicus Caprarius](https://www.tiktok.com/@travelbymitra/video/7051676676685565190), the underground system of ancient pools that feed the Trevi Fountain. <br> <span style="font-size:60%">[\u20AC4, no reservation required on Fridays](https://www.vicuscaprarius.com/en/#tariffe)</span>

<br>

<img src="/rome-vicus-caprarius.jpg" height="100" width="200" style="margin:auto"/>`,frontmatter:{title:"Day 15 - Fri 10/21 - Rome"},index:0,start:0,end:21},inline:{raw:`---
src: ./slides/07-return-home/052-day-15-last-day-in-rome.md
---
`,content:"",frontmatter:{},index:51,start:256,end:260},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/052-day-15-last-day-in-rome.md",notesHTML:"",id:51,no:52},__clicksElements:[],__preloaded:!1}},{path:"53",name:"page-53",component:kD,meta:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md",slide:{raw:null,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**

When we're ready to leave Rome and head to the airport, we'll retrieve our luggage from storage, and head back into Rome Termini one more time to catch the airport shuttle train.

\u{1F68B} **Early Evening**: Take a Train to Leonardo Da Vinci Airport

> The [Leonardo Express](https://www.trenitalia.com/en/services/fiumicino_airport.html) is a non-stop shuttle 
> train running between the airport train station and Termini Station in Rome. <br>
> The ride lasts **32 minutes**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC14** one-way, purchased individually, or **\u20AC40** total for 4 tickets when purchased at the "mini-group" 
> fare. 

<br>

\u{1F6B6}**On Arrival**: Walk from Fiumincino Aeroporto station to the [Hilton Rome Airport](https://www.hilton.com/en/hotels/romaptw-hilton-rome-airport/) [(10 mins)](https://goo.gl/maps/J6wCcYXGxRwqVdAh9)

Check-in to your room, organize your luggage for the flight home, and settle in for a good night's sleep.`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day",srcSequence:"./slides/07-return-home/053-day-15-rome-to-airport-hilton.md"},index:52,start:0,end:18,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/053-day-15-rome-to-airport-hilton.md",raw:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**

When we're ready to leave Rome and head to the airport, we'll retrieve our luggage from storage, and head back into Rome Termini one more time to catch the airport shuttle train.

\u{1F68B} **Early Evening**: Take a Train to Leonardo Da Vinci Airport

> The [Leonardo Express](https://www.trenitalia.com/en/services/fiumicino_airport.html) is a non-stop shuttle 
> train running between the airport train station and Termini Station in Rome. <br>
> The ride lasts **32 minutes**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC14** one-way, purchased individually, or **\u20AC40** total for 4 tickets when purchased at the "mini-group" 
> fare. 

<br>

\u{1F6B6}**On Arrival**: Walk from Fiumincino Aeroporto station to the [Hilton Rome Airport](https://www.hilton.com/en/hotels/romaptw-hilton-rome-airport/) [(10 mins)](https://goo.gl/maps/J6wCcYXGxRwqVdAh9)

Check-in to your room, organize your luggage for the flight home, and settle in for a good night's sleep.  `,title:"Day 15 - Fri 10/21 - Travel Day",level:4,content:`#### Day 15 - Fri 10/21 - Travel Day
## **Rome to Airport**

When we're ready to leave Rome and head to the airport, we'll retrieve our luggage from storage, and head back into Rome Termini one more time to catch the airport shuttle train.

\u{1F68B} **Early Evening**: Take a Train to Leonardo Da Vinci Airport

> The [Leonardo Express](https://www.trenitalia.com/en/services/fiumicino_airport.html) is a non-stop shuttle 
> train running between the airport train station and Termini Station in Rome. <br>
> The ride lasts **32 minutes**, and the train departs every 15-30 minutes depending on the time of day. <br>
> Tickets are **\u20AC14** one-way, purchased individually, or **\u20AC40** total for 4 tickets when purchased at the "mini-group" 
> fare. 

<br>

\u{1F6B6}**On Arrival**: Walk from Fiumincino Aeroporto station to the [Hilton Rome Airport](https://www.hilton.com/en/hotels/romaptw-hilton-rome-airport/) [(10 mins)](https://goo.gl/maps/J6wCcYXGxRwqVdAh9)

Check-in to your room, organize your luggage for the flight home, and settle in for a good night's sleep.`,frontmatter:{title:"Day 15 - Fri 10/21 - Travel Day"},index:0,start:0,end:18},inline:{raw:`---
src: ./slides/07-return-home/053-day-15-rome-to-airport-hilton.md
---
`,content:"",frontmatter:{},index:52,start:260,end:264},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/053-day-15-rome-to-airport-hilton.md",notesHTML:"",id:52,no:53},__clicksElements:[],__preloaded:!1}},{path:"54",name:"page-54",component:MD,meta:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md",slide:{raw:null,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**

\u{1F6B6} **7:00 AM**: Check-out and walk to Terminal 3

Upon checking-out from the Hilton, we'll take a covered walkway directly to Terminal 3, where our flight home boards.

### \u2708\uFE0F Leonardo da Vinci (FCO) to  JFK by Plane
> **American Airlines Flight 235** [(check Flight Status)](https://www.aa.com/travelInformation/flights/status) <br>
> Depart from FCO airport **10:30 AM** <br>
> The flight time is 9 hours 39 mins <br>
> Arrive at JFK **2:09 PM** 

<br>

### \u{1F690} JFK to East Haven by Ground Transport 

> We take a private **Connecticut Limo**  Van from East Haven to JFK <br>
> The ride lasts between 2 - 2.5 hours depending on traffic <br>`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day",srcSequence:"./slides/07-return-home/054-day-16-transatlantic-flight-home.md"},index:53,start:0,end:19,source:{filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/054-day-16-transatlantic-flight-home.md",raw:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**

\u{1F6B6} **7:00 AM**: Check-out and walk to Terminal 3

Upon checking-out from the Hilton, we'll take a covered walkway directly to Terminal 3, where our flight home boards.

### \u2708\uFE0F Leonardo da Vinci (FCO) to  JFK by Plane
> **American Airlines Flight 235** [(check Flight Status)](https://www.aa.com/travelInformation/flights/status) <br>
> Depart from FCO airport **10:30 AM** <br>
> The flight time is 9 hours 39 mins <br>
> Arrive at JFK **2:09 PM** 

<br>

### \u{1F690} JFK to East Haven by Ground Transport 

> We take a private **Connecticut Limo**  Van from East Haven to JFK <br>
> The ride lasts between 2 - 2.5 hours depending on traffic <br>`,title:"Day 16 - Sat 10/22 - Travel Day",level:4,content:`#### Day 16 - Sat 10/22 - Travel Day
## **Trans-Atlantic Flight to New York**

\u{1F6B6} **7:00 AM**: Check-out and walk to Terminal 3

Upon checking-out from the Hilton, we'll take a covered walkway directly to Terminal 3, where our flight home boards.

### \u2708\uFE0F Leonardo da Vinci (FCO) to  JFK by Plane
> **American Airlines Flight 235** [(check Flight Status)](https://www.aa.com/travelInformation/flights/status) <br>
> Depart from FCO airport **10:30 AM** <br>
> The flight time is 9 hours 39 mins <br>
> Arrive at JFK **2:09 PM** 

<br>

### \u{1F690} JFK to East Haven by Ground Transport 

> We take a private **Connecticut Limo**  Van from East Haven to JFK <br>
> The ride lasts between 2 - 2.5 hours depending on traffic <br>`,frontmatter:{title:"Day 16 - Sat 10/22 - Travel Day"},index:0,start:0,end:19},inline:{raw:`---
src: ./slides/07-return-home/054-day-16-transatlantic-flight-home.md
---

`,content:"",frontmatter:{},index:53,start:264,end:269},filepath:"/Users/dave/dev/europe-cruise-2022/slides/07-return-home/054-day-16-transatlantic-flight-home.md",notesHTML:"",id:53,no:54},__clicksElements:[],__preloaded:!1}},{path:"55",component:O_,meta:{layout:"end"}}],We=ED,FD=[{name:"play",path:"/",component:A_,children:[...We]},{name:"print",path:"/print",component:M_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>so(()=>import("./Presenter.e41a67d4.js"),["assets/Presenter.e41a67d4.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.3dffeb41.js"]),beforeEnter:e=>{if(!vn.remote||vn.remote===e.query.password)return!0;if(vn.remote&&e.query.password===void 0){const t=prompt("Enter password");if(vn.remote===t)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],gt=_1({history:F0("/"),routes:FD});function OD(e,t,{mode:n="replace"}={}){return P({get(){const o=gt.currentRoute.value.query[e];return o==null?t!=null?t:null:Array.isArray(o)?o.filter(Boolean):o},set(o){Ye(()=>{gt[b(n)]({query:{...gt.currentRoute.value.query,[e]:o}})})}})}const ed=U(0);Ye(()=>{gt.afterEach(async()=>{await Ye(),ed.value+=1})});const Jt=P(()=>gt.currentRoute.value),Yn=P(()=>Jt.value.query.print!==void 0),LD=P(()=>Jt.value.query.print==="clicks"),Vt=P(()=>Jt.value.query.embedded!==void 0),zt=P(()=>Jt.value.path.startsWith("/presenter")),Do=P(()=>Yn.value&&!LD.value),Qi=P(()=>Jt.value.query.password),zD=P(()=>!zt.value&&(!ke.remote||Qi.value===ke.remote)),Il=OD("clicks","0"),td=P(()=>We.length-1),jD=P(()=>Jt.value.path),He=P(()=>parseInt(jD.value.split(/\//g).slice(-1)[0])||1);P(()=>Jr(He.value));const dt=P(()=>We.find(e=>e.path===`${He.value}`));P(()=>{var e,t,n;return(n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.slide)==null?void 0:n.id});P(()=>{var e,t;return(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.layout});const fi=P(()=>We.find(e=>e.path===`${Math.min(We.length,He.value+1)}`)),qD=P(()=>{var e,t;return ed.value,((t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.__clicksElements)||[]}),Ct=P({get(){if(Do.value)return 99999;let e=+(Il.value||0);return isNaN(e)&&(e=0),e},set(e){Il.value=e.toString()}}),Pr=P(()=>{var e,t,n;return+((n=(t=(e=dt.value)==null?void 0:e.meta)==null?void 0:t.clicks)!=null?n:qD.value.length)}),ID=P(()=>He.value<We.length-1||Ct.value<Pr.value),BD=P(()=>He.value>1||Ct.value>0),VD=P(()=>We.filter(e=>{var t,n;return(n=(t=e.meta)==null?void 0:t.slide)==null?void 0:n.title}).reduce((e,t)=>(Ns(e,t),e),[])),ND=P(()=>Ws(VD.value,dt.value));P(()=>Hs(ND.value));function rn(){Pr.value<=Ct.value?Bo():Ct.value+=1}async function sn(){Ct.value<=0?await Vo():Ct.value-=1}function Jr(e){return zt.value?`/presenter/${e}`:`/${e}`}function Bo(){const e=Math.min(We.length,He.value+1);return oo(e)}async function Vo(e=!0){const t=Math.max(1,He.value-1);await oo(t),e&&Pr.value&&gt.replace({query:{...Jt.value.query,clicks:Pr.value}})}function oo(e,t){return gt.push({path:Jr(e),query:{...Jt.value.query,clicks:t}})}function WD(e){const t=U(0),{direction:n,distanceX:o,distanceY:i}=s0(e,{onSwipeStart(s){s.pointerType==="touch"&&(qo.value||(t.value=Bi()))},onSwipeEnd(s){if(s.pointerType!=="touch"||!t.value||qo.value)return;const a=Math.abs(o.value),l=Math.abs(i.value);a/window.innerWidth>.3||a>100?n.value===Ht.LEFT?rn():sn():(l/window.innerHeight>.4||l>200)&&(n.value===Ht.DOWN?Vo():Bo())}})}async function Xi(){const{saveAs:e}=await so(()=>import("./FileSaver.min.7f56e709.js").then(t=>t.F),[]);e(wu(ke.download)?ke.download:ke.exportFilename?`${ke.exportFilename}.pdf`:"/slidev-exported.pdf",`${ke.title}.pdf`)}async function HD(e){var t,n;if(e==null){const o=(n=(t=dt.value)==null?void 0:t.meta)==null?void 0:n.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function Ns(e,t,n=1){var i,s,a,l,c;const o=(s=(i=t.meta)==null?void 0:i.slide)==null?void 0:s.level;o&&o>n&&e.length>0?Ns(e[e.length-1].children,t,n+1):e.push({children:[],level:n,path:t.path,hideInToc:Boolean((a=t.meta)==null?void 0:a.hideInToc),title:(c=(l=t.meta)==null?void 0:l.slide)==null?void 0:c.title})}function Ws(e,t,n=!1,o){return e.map(i=>{const s={...i,active:i.path===(t==null?void 0:t.path),hasActiveParent:n};return s.children.length>0&&(s.children=Ws(s.children,t,s.active||s.hasActiveParent,s)),o&&(s.active||s.activeParent)&&(o.activeParent=!0),s})}function Hs(e,t=1){return e.filter(n=>!n.hideInToc).map(n=>({...n,children:Hs(n.children,t+1)}))}function UD(){const e=ke.titleTemplate.replace("%s",ke.title||"Slidev");$f({title:e}),zf(`${e} - shared`),Bf(`${e} - drawings`);function t(){zt.value&&(Ha("page",+He.value),Ha("clicks",Ct.value))}gt.afterEach(t),pe(Ct,t),jf(n=>{(+n.page!=+He.value||Ct.value!==n.clicks)&&gt.replace({path:Jr(n.page),query:{...gt.currentRoute.value.query,clicks:n.clicks||0}})})}const KD=Se({__name:"App",setup(e){return F(B),UD(),(t,n)=>{const o=Oo("RouterView"),i=Oo("StarportCarrier");return k(),K(De,null,[I(o),I(i)],64)}}});function mi(e){return e!==null&&typeof e=="object"}function es(e,t,n=".",o){if(!mi(t))return es(e,{},n,o);const i=Object.assign({},t);for(const s in e){if(s==="__proto__"||s==="constructor")continue;const a=e[s];a!=null&&(o&&o(i,s,a,n)||(Array.isArray(a)&&Array.isArray(i[s])?i[s]=a.concat(i[s]):mi(a)&&mi(i[s])?i[s]=es(a,i[s],(n?`${n}.`:"")+s.toString(),o):i[s]=a))}return i}function GD(e){return(...t)=>t.reduce((n,o)=>es(n,o,"",e),{})}const JD=GD(),nd=1/60*1e3,YD=typeof performance<"u"?()=>performance.now():()=>Date.now(),od=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(YD()),nd);function ZD(e){let t=[],n=[],o=0,i=!1,s=!1;const a=new WeakSet,l={schedule:(c,u=!1,d=!1)=>{const p=d&&i,f=p?t:n;return u&&a.add(c),f.indexOf(c)===-1&&(f.push(c),p&&i&&(o=t.length)),c},cancel:c=>{const u=n.indexOf(c);u!==-1&&n.splice(u,1),a.delete(c)},process:c=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.length=0,o=t.length,o)for(let u=0;u<o;u++){const d=t[u];d(c),a.has(d)&&(l.schedule(d),e())}i=!1,s&&(s=!1,l.process(c))}};return l}const QD=40;let ts=!0,No=!1,ns=!1;const Zn={delta:0,timestamp:0},Ko=["read","update","preRender","render","postRender"],Yr=Ko.reduce((e,t)=>(e[t]=ZD(()=>No=!0),e),{}),os=Ko.reduce((e,t)=>{const n=Yr[t];return e[t]=(o,i=!1,s=!1)=>(No||tA(),n.schedule(o,i,s)),e},{}),XD=Ko.reduce((e,t)=>(e[t]=Yr[t].cancel,e),{});Ko.reduce((e,t)=>(e[t]=()=>Yr[t].process(Zn),e),{});const eA=e=>Yr[e].process(Zn),rd=e=>{No=!1,Zn.delta=ts?nd:Math.max(Math.min(e-Zn.timestamp,QD),1),Zn.timestamp=e,ns=!0,Ko.forEach(eA),ns=!1,No&&(ts=!1,od(rd))},tA=()=>{No=!0,ts=!0,ns||od(rd)},id=()=>Zn;function sd(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]]);return n}var nA=function(){},Bl=function(){};const rs=(e,t,n)=>Math.min(Math.max(n,e),t),gi=.001,oA=.01,Vl=10,rA=.05,iA=1;function sA({duration:e=800,bounce:t=.25,velocity:n=0,mass:o=1}){let i,s;nA(e<=Vl*1e3);let a=1-t;a=rs(rA,iA,a),e=rs(oA,Vl,e/1e3),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,m=is(u,a),g=Math.exp(-p);return gi-f/m*g},s=u=>{const p=u*a*e,f=p*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,g=Math.exp(-p),w=is(Math.pow(u,2),a);return(-i(u)+gi>0?-1:1)*((f-m)*g)/w}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-gi+d*p},s=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const l=5/e,c=lA(i,s,l);if(e=e*1e3,isNaN(c))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(c,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:e}}}const aA=12;function lA(e,t,n){let o=n;for(let i=1;i<aA;i++)o=o-e(o)/t(o);return o}function is(e,t){return e*Math.sqrt(1-t*t)}const cA=["duration","bounce"],uA=["stiffness","damping","mass"];function Nl(e,t){return t.some(n=>e[n]!==void 0)}function dA(e){let t=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!Nl(e,uA)&&Nl(e,cA)){const n=sA(e);t=Object.assign(Object.assign(Object.assign({},t),n),{velocity:0,mass:1}),t.isResolvedFromDuration=!0}return t}function Us(e){var{from:t=0,to:n=1,restSpeed:o=2,restDelta:i}=e,s=sd(e,["from","to","restSpeed","restDelta"]);const a={done:!1,value:t};let{stiffness:l,damping:c,mass:u,velocity:d,duration:p,isResolvedFromDuration:f}=dA(s),m=Wl,g=Wl;function w(){const v=d?-(d/1e3):0,D=n-t,S=c/(2*Math.sqrt(l*u)),x=Math.sqrt(l/u)/1e3;if(i===void 0&&(i=Math.min(Math.abs(n-t)/100,.4)),S<1){const $=is(x,S);m=q=>{const O=Math.exp(-S*x*q);return n-O*((v+S*x*D)/$*Math.sin($*q)+D*Math.cos($*q))},g=q=>{const O=Math.exp(-S*x*q);return S*x*O*(Math.sin($*q)*(v+S*x*D)/$+D*Math.cos($*q))-O*(Math.cos($*q)*(v+S*x*D)-$*D*Math.sin($*q))}}else if(S===1)m=$=>n-Math.exp(-x*$)*(D+(v+x*D)*$);else{const $=x*Math.sqrt(S*S-1);m=q=>{const O=Math.exp(-S*x*q),W=Math.min($*q,300);return n-O*((v+S*x*D)*Math.sinh(W)+$*D*Math.cosh(W))/$}}}return w(),{next:v=>{const D=m(v);if(f)a.done=v>=p;else{const S=g(v)*1e3,x=Math.abs(S)<=o,$=Math.abs(n-D)<=i;a.done=x&&$}return a.value=a.done?n:D,a},flipTarget:()=>{d=-d,[t,n]=[n,t],w()}}}Us.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Wl=e=>0,ad=(e,t,n)=>{const o=t-e;return o===0?1:(n-e)/o},Ks=(e,t,n)=>-n*e+n*t+e,ld=(e,t)=>n=>Math.max(Math.min(n,t),e),Ao=e=>e%1?Number(e.toFixed(5)):e,Wo=/(-)?([\d]*\.?[\d])+/g,ss=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hA=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Go(e){return typeof e=="string"}const Jo={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Po=Object.assign(Object.assign({},Jo),{transform:ld(0,1)}),ir=Object.assign(Object.assign({},Jo),{default:1}),Gs=e=>({test:t=>Go(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),pn=Gs("deg"),$o=Gs("%"),ce=Gs("px"),Hl=Object.assign(Object.assign({},$o),{parse:e=>$o.parse(e)/100,transform:e=>$o.transform(e*100)}),Js=(e,t)=>n=>Boolean(Go(n)&&hA.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),cd=(e,t,n)=>o=>{if(!Go(o))return o;const[i,s,a,l]=o.match(Wo);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},bn={test:Js("hsl","hue"),parse:cd("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:o=1})=>"hsla("+Math.round(e)+", "+$o.transform(Ao(t))+", "+$o.transform(Ao(n))+", "+Ao(Po.transform(o))+")"},pA=ld(0,255),yi=Object.assign(Object.assign({},Jo),{transform:e=>Math.round(pA(e))}),en={test:Js("rgb","red"),parse:cd("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:o=1})=>"rgba("+yi.transform(e)+", "+yi.transform(t)+", "+yi.transform(n)+", "+Ao(Po.transform(o))+")"};function fA(e){let t="",n="",o="",i="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),o=e.substr(5,2),i=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),o=e.substr(3,1),i=e.substr(4,1),t+=t,n+=n,o+=o,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const as={test:Js("#"),parse:fA,transform:en.transform},it={test:e=>en.test(e)||as.test(e)||bn.test(e),parse:e=>en.test(e)?en.parse(e):bn.test(e)?bn.parse(e):as.parse(e),transform:e=>Go(e)?e:e.hasOwnProperty("red")?en.transform(e):bn.transform(e)},ud="${c}",dd="${n}";function mA(e){var t,n,o,i;return isNaN(e)&&Go(e)&&((n=(t=e.match(Wo))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((i=(o=e.match(ss))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function hd(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const o=e.match(ss);o&&(n=o.length,e=e.replace(ss,ud),t.push(...o.map(it.parse)));const i=e.match(Wo);return i&&(e=e.replace(Wo,dd),t.push(...i.map(Jo.parse))),{values:t,numColors:n,tokenised:e}}function pd(e){return hd(e).values}function fd(e){const{values:t,numColors:n,tokenised:o}=hd(e),i=t.length;return s=>{let a=o;for(let l=0;l<i;l++)a=a.replace(l<n?ud:dd,l<n?it.transform(s[l]):Ao(s[l]));return a}}const gA=e=>typeof e=="number"?0:e;function yA(e){const t=pd(e);return fd(e)(t.map(gA))}const Yo={test:mA,parse:pd,createTransformer:fd,getAnimatableNone:yA},_A=new Set(["brightness","contrast","saturate","opacity"]);function vA(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[o]=n.match(Wo)||[];if(!o)return e;const i=n.replace(o,"");let s=_A.has(t)?1:0;return o!==n&&(s*=100),t+"("+s+i+")"}const wA=/([a-z-]*)\(.*?\)/g,ls=Object.assign(Object.assign({},Yo),{getAnimatableNone:e=>{const t=e.match(wA);return t?t.map(vA).join(" "):e}});function _i(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ul({hue:e,saturation:t,lightness:n,alpha:o}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=_i(c,l,e+1/3),s=_i(c,l,e),a=_i(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:o}}const bA=(e,t,n)=>{const o=e*e,i=t*t;return Math.sqrt(Math.max(0,n*(i-o)+o))},kA=[as,en,bn],Kl=e=>kA.find(t=>t.test(e)),md=(e,t)=>{let n=Kl(e),o=Kl(t),i=n.parse(e),s=o.parse(t);n===bn&&(i=Ul(i),n=en),o===bn&&(s=Ul(s),o=en);const a=Object.assign({},i);return l=>{for(const c in a)c!=="alpha"&&(a[c]=bA(i[c],s[c],l));return a.alpha=Ks(i.alpha,s.alpha,l),n.transform(a)}},TA=e=>typeof e=="number",SA=(e,t)=>n=>t(e(n)),gd=(...e)=>e.reduce(SA);function yd(e,t){return TA(e)?n=>Ks(e,t,n):it.test(e)?md(e,t):vd(e,t)}const _d=(e,t)=>{const n=[...e],o=n.length,i=e.map((s,a)=>yd(s,t[a]));return s=>{for(let a=0;a<o;a++)n[a]=i[a](s);return n}},xA=(e,t)=>{const n=Object.assign(Object.assign({},e),t),o={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(o[i]=yd(e[i],t[i]));return i=>{for(const s in o)n[s]=o[s](i);return n}};function Gl(e){const t=Yo.parse(e),n=t.length;let o=0,i=0,s=0;for(let a=0;a<n;a++)o||typeof t[a]=="number"?o++:t[a].hue!==void 0?s++:i++;return{parsed:t,numNumbers:o,numRGB:i,numHSL:s}}const vd=(e,t)=>{const n=Yo.createTransformer(t),o=Gl(e),i=Gl(t);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?gd(_d(o.parsed,i.parsed),n):a=>`${a>0?t:e}`},DA=(e,t)=>n=>Ks(e,t,n);function AA(e){if(typeof e=="number")return DA;if(typeof e=="string")return it.test(e)?md:vd;if(Array.isArray(e))return _d;if(typeof e=="object")return xA}function PA(e,t,n){const o=[],i=n||AA(e[0]),s=e.length-1;for(let a=0;a<s;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]:t;l=gd(c,l)}o.push(l)}return o}function $A([e,t],[n]){return o=>n(ad(e,t,o))}function CA(e,t){const n=e.length,o=n-1;return i=>{let s=0,a=!1;if(i<=e[0]?a=!0:i>=e[o]&&(s=o-1,a=!0),!a){let c=1;for(;c<n&&!(e[c]>i||c===o);c++);s=c-1}const l=ad(e[s],e[s+1],i);return t[s](l)}}function wd(e,t,{clamp:n=!0,ease:o,mixer:i}={}){const s=e.length;Bl(s===t.length),Bl(!o||!Array.isArray(o)||o.length===s-1),e[0]>e[s-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());const a=PA(t,o,i),l=s===2?$A(e,a):CA(e,a);return n?c=>l(rs(e[0],e[s-1],c)):l}const Zr=e=>t=>1-e(1-t),Ys=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,RA=e=>t=>Math.pow(t,e),bd=e=>t=>t*t*((e+1)*t-e),MA=e=>{const t=bd(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},kd=1.525,EA=4/11,FA=8/11,OA=9/10,Td=e=>e,Zs=RA(2),LA=Zr(Zs),Sd=Ys(Zs),xd=e=>1-Math.sin(Math.acos(e)),Dd=Zr(xd),zA=Ys(Dd),Qs=bd(kd),jA=Zr(Qs),qA=Ys(Qs),IA=MA(kd),BA=4356/361,VA=35442/1805,NA=16061/1805,$r=e=>{if(e===1||e===0)return e;const t=e*e;return e<EA?7.5625*t:e<FA?9.075*t-9.9*e+3.4:e<OA?BA*t-VA*e+NA:10.8*e*e-20.52*e+10.72},WA=Zr($r),HA=e=>e<.5?.5*(1-$r(1-e*2)):.5*$r(e*2-1)+.5;function UA(e,t){return e.map(()=>t||Sd).splice(0,e.length-1)}function KA(e){const t=e.length;return e.map((n,o)=>o!==0?o/(t-1):0)}function GA(e,t){return e.map(n=>n*t)}function fr({from:e=0,to:t=1,ease:n,offset:o,duration:i=300}){const s={done:!1,value:e},a=Array.isArray(t)?t:[e,t],l=GA(o&&o.length===a.length?o:KA(a),i);function c(){return wd(l,a,{ease:Array.isArray(n)?n:UA(a,n)})}let u=c();return{next:d=>(s.value=u(d),s.done=d>=i,s),flipTarget:()=>{a.reverse(),u=c()}}}function JA({velocity:e=0,from:t=0,power:n=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:s}){const a={done:!1,value:t};let l=n*e;const c=t+l,u=s===void 0?c:s(c);return u!==c&&(l=u-t),{next:d=>{const p=-l*Math.exp(-d/o);return a.done=!(p>i||p<-i),a.value=a.done?u:u+p,a},flipTarget:()=>{}}}const Jl={keyframes:fr,spring:Us,decay:JA};function YA(e){if(Array.isArray(e.to))return fr;if(Jl[e.type])return Jl[e.type];const t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?fr:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?Us:fr}function Ad(e,t,n=0){return e-t-n}function ZA(e,t,n=0,o=!0){return o?Ad(t+-e,t,n):t-(e-t)+n}function QA(e,t,n,o){return o?e>=t+n:e<=-n}const XA=e=>{const t=({delta:n})=>e(n);return{start:()=>os.update(t,!0),stop:()=>XD.update(t)}};function Pd(e){var t,n,{from:o,autoplay:i=!0,driver:s=XA,elapsed:a=0,repeat:l=0,repeatType:c="loop",repeatDelay:u=0,onPlay:d,onStop:p,onComplete:f,onRepeat:m,onUpdate:g}=e,w=sd(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=w,D,S=0,x=w.duration,$,q=!1,O=!0,W;const ne=YA(w);!((n=(t=ne).needsInterpolation)===null||n===void 0)&&n.call(t,o,v)&&(W=wd([0,100],[o,v],{clamp:!1}),o=0,v=100);const ae=ne(Object.assign(Object.assign({},w),{from:o,to:v}));function ge(){S++,c==="reverse"?(O=S%2===0,a=ZA(a,x,u,O)):(a=Ad(a,x,u),c==="mirror"&&ae.flipTarget()),q=!1,m&&m()}function _e(){D.stop(),f&&f()}function Be(qe){if(O||(qe=-qe),a+=qe,!q){const Me=ae.next(Math.max(0,a));$=Me.value,W&&($=W($)),q=O?Me.done:a<=0}g==null||g($),q&&(S===0&&(x!=null||(x=a)),S<l?QA(a,x,u,O)&&ge():_e())}function Ve(){d==null||d(),D=s(Be),D.start()}return i&&Ve(),{stop:()=>{p==null||p(),D.stop()}}}function $d(e,t){return t?e*(1e3/t):0}function eP({from:e=0,velocity:t=0,min:n,max:o,power:i=.8,timeConstant:s=750,bounceStiffness:a=500,bounceDamping:l=10,restDelta:c=1,modifyTarget:u,driver:d,onUpdate:p,onComplete:f,onStop:m}){let g;function w(x){return n!==void 0&&x<n||o!==void 0&&x>o}function v(x){return n===void 0?o:o===void 0||Math.abs(n-x)<Math.abs(o-x)?n:o}function D(x){g==null||g.stop(),g=Pd(Object.assign(Object.assign({},x),{driver:d,onUpdate:$=>{var q;p==null||p($),(q=x.onUpdate)===null||q===void 0||q.call(x,$)},onComplete:f,onStop:m}))}function S(x){D(Object.assign({type:"spring",stiffness:a,damping:l,restDelta:c},x))}if(w(e))S({from:e,velocity:t,to:v(e)});else{let x=i*t+e;typeof u<"u"&&(x=u(x));const $=v(x),q=$===n?-1:1;let O,W;const ne=ae=>{O=W,W=ae,t=$d(ae-O,id().delta),(q===1&&ae>$||q===-1&&ae<$)&&S({from:ae,to:$,velocity:t})};D({type:"decay",from:e,velocity:t,timeConstant:s,power:i,restDelta:c,modifyTarget:u,onUpdate:w(x)?ne:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Cd=(e,t)=>1-3*t+3*e,Rd=(e,t)=>3*t-6*e,Md=e=>3*e,Cr=(e,t,n)=>((Cd(t,n)*e+Rd(t,n))*e+Md(t))*e,Ed=(e,t,n)=>3*Cd(t,n)*e*e+2*Rd(t,n)*e+Md(t),tP=1e-7,nP=10;function oP(e,t,n,o,i){let s,a,l=0;do a=t+(n-t)/2,s=Cr(a,o,i)-e,s>0?n=a:t=a;while(Math.abs(s)>tP&&++l<nP);return a}const rP=8,iP=.001;function sP(e,t,n,o){for(let i=0;i<rP;++i){const s=Ed(t,n,o);if(s===0)return t;t-=(Cr(t,n,o)-e)/s}return t}const mr=11,sr=1/(mr-1);function aP(e,t,n,o){if(e===t&&n===o)return Td;const i=new Float32Array(mr);for(let a=0;a<mr;++a)i[a]=Cr(a*sr,e,n);function s(a){let l=0,c=1;const u=mr-1;for(;c!==u&&i[c]<=a;++c)l+=sr;--c;const d=(a-i[c])/(i[c+1]-i[c]),p=l+d*sr,f=Ed(p,e,n);return f>=iP?sP(a,p,e,n):f===0?p:oP(a,l,l+sr,e,n)}return a=>a===0||a===1?a:Cr(s(a),t,o)}const vi={};class lP{constructor(){this.subscriptions=new Set}add(t){return this.subscriptions.add(t),()=>this.subscriptions.delete(t)}notify(t,n,o){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(t,n,o)}clear(){this.subscriptions.clear()}}const Yl=e=>!isNaN(parseFloat(e));class cP{constructor(t){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new lP,this.canTrackVelocity=!1,this.updateAndNotify=n=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:i}=id();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),os.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>os.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=Yl(this.current)),n!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=t,this.canTrackVelocity=Yl(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}set(t){this.updateAndNotify(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?$d(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{const{stop:o}=t(n);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function uP(e){return new cP(e)}const{isArray:dP}=Array;function hP(){const e=U({}),t=o=>{const i=s=>{!e.value[s]||(e.value[s].stop(),e.value[s].destroy(),delete e.value[s])};o?dP(o)?o.forEach(i):i(o):Object.keys(e.value).forEach(i)},n=(o,i,s)=>{if(e.value[o])return e.value[o];const a=uP(i);return a.onChange(l=>s[o]=l),e.value[o]=a,a};return um(t),{motionValues:e,get:n,stop:t}}const pP=e=>Array.isArray(e),fn=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),wi=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),fP=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),bi=()=>({type:"keyframes",ease:"linear",duration:300}),mP=e=>({type:"keyframes",duration:800,values:e}),Zl={default:fP,x:fn,y:fn,z:fn,rotate:fn,rotateX:fn,rotateY:fn,rotateZ:fn,scaleX:wi,scaleY:wi,scale:wi,backgroundColor:bi,color:bi,opacity:bi},Fd=(e,t)=>{let n;return pP(t)?n=mP:n=Zl[e]||Zl.default,{to:t,...n(t)}},Ql={...Jo,transform:Math.round},Od={color:it,backgroundColor:it,outlineColor:it,fill:it,stroke:it,borderColor:it,borderTopColor:it,borderRightColor:it,borderBottomColor:it,borderLeftColor:it,borderWidth:ce,borderTopWidth:ce,borderRightWidth:ce,borderBottomWidth:ce,borderLeftWidth:ce,borderRadius:ce,radius:ce,borderTopLeftRadius:ce,borderTopRightRadius:ce,borderBottomRightRadius:ce,borderBottomLeftRadius:ce,width:ce,maxWidth:ce,height:ce,maxHeight:ce,size:ce,top:ce,right:ce,bottom:ce,left:ce,padding:ce,paddingTop:ce,paddingRight:ce,paddingBottom:ce,paddingLeft:ce,margin:ce,marginTop:ce,marginRight:ce,marginBottom:ce,marginLeft:ce,rotate:pn,rotateX:pn,rotateY:pn,rotateZ:pn,scale:ir,scaleX:ir,scaleY:ir,scaleZ:ir,skew:pn,skewX:pn,skewY:pn,distance:ce,translateX:ce,translateY:ce,translateZ:ce,x:ce,y:ce,z:ce,perspective:ce,transformPerspective:ce,opacity:Po,originX:Hl,originY:Hl,originZ:ce,zIndex:Ql,filter:ls,WebkitFilter:ls,fillOpacity:Po,strokeOpacity:Po,numOctaves:Ql},Xs=e=>Od[e],Ld=(e,t)=>t&&typeof e=="number"&&t.transform?t.transform(e):e;function gP(e,t){let n=Xs(e);return n!==ls&&(n=Yo),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const yP={linear:Td,easeIn:Zs,easeInOut:Sd,easeOut:LA,circIn:xd,circInOut:zA,circOut:Dd,backIn:Qs,backInOut:qA,backOut:jA,anticipate:IA,bounceIn:WA,bounceInOut:HA,bounceOut:$r},Xl=e=>{if(Array.isArray(e)){const[t,n,o,i]=e;return aP(t,n,o,i)}else if(typeof e=="string")return yP[e];return e},_P=e=>Array.isArray(e)&&typeof e[0]!="number",ec=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Yo.test(t)&&!t.startsWith("url("));function vP(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function wP({ease:e,times:t,delay:n,...o}){const i={...o};return t&&(i.offset=t),e&&(i.ease=_P(e)?e.map(Xl):Xl(e)),n&&(i.elapsed=-n),i}function bP(e,t,n){return Array.isArray(t.to)&&(e.duration||(e.duration=800)),vP(t),kP(e)||(e={...e,...Fd(n,t.to)}),{...t,...wP(e)}}function kP({delay:e,repeat:t,repeatType:n,repeatDelay:o,from:i,...s}){return!!Object.keys(s).length}function TP(e,t){return e[t]||e.default||e}function SP(e,t,n,o,i){const s=TP(o,e);let a=s.from===null||s.from===void 0?t.get():s.from;const l=ec(e,n);a==="none"&&l&&typeof n=="string"&&(a=gP(e,n));const c=ec(e,a);function u(p){const f={from:a,to:n,velocity:o.velocity?o.velocity:t.getVelocity(),onUpdate:m=>t.set(m)};return s.type==="inertia"||s.type==="decay"?eP({...f,...s}):Pd({...bP(s,f,e),onUpdate:m=>{f.onUpdate(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),p&&p()}})}function d(p){return t.set(n),o.onComplete&&o.onComplete(),i&&i(),p&&p(),{stop:()=>{}}}return!c||!l||s.type===!1?d:u}function xP(){const{motionValues:e,stop:t,get:n}=hP();return{motionValues:e,stop:t,push:(i,s,a,l={},c)=>{const u=a[i],d=n(i,u,a);if(l&&l.immediate){d.set(s);return}const p=SP(i,d,s,l,c);d.start(p)}}}function DP(e,t={},{motionValues:n,push:o,stop:i}=xP()){const s=b(t),a=U(!1);pe(n,p=>{a.value=Object.values(p).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const l=p=>{if(!s||!s[p])throw new Error(`The variant ${p} does not exist.`);return s[p]},c=p=>(typeof p=="string"&&(p=l(p)),Promise.all(Object.entries(p).map(([f,m])=>{if(f!=="transition")return new Promise(g=>{o(f,m,e,p.transition||Fd(f,p[f]),g)})}).filter(Boolean)));return{isAnimating:a,apply:c,set:p=>{const f=Ii(p)?p:l(p);Object.entries(f).forEach(([m,g])=>{m!=="transition"&&o(m,g,e,{immediate:!0})})},leave:async p=>{let f;if(s&&(s.leave&&(f=s.leave),!s.leave&&s.initial&&(f=s.initial)),!f){p();return}await c(f),p()},stop:i}}const ea=typeof window<"u",AP=()=>ea&&window.onpointerdown===null,PP=()=>ea&&window.ontouchstart===null,$P=()=>ea&&window.onmousedown===null;function CP({target:e,state:t,variants:n,apply:o}){const i=b(n),s=U(!1),a=U(!1),l=U(!1),c=P(()=>{let d=[];return i&&(i.hovered&&(d=[...d,...Object.keys(i.hovered)]),i.tapped&&(d=[...d,...Object.keys(i.tapped)]),i.focused&&(d=[...d,...Object.keys(i.focused)])),d}),u=P(()=>{const d={};Object.assign(d,t.value),s.value&&i.hovered&&Object.assign(d,i.hovered),a.value&&i.tapped&&Object.assign(d,i.tapped),l.value&&i.focused&&Object.assign(d,i.focused);for(const p in d)c.value.includes(p)||delete d[p];return d});i.hovered&&(de(e,"mouseenter",()=>s.value=!0),de(e,"mouseleave",()=>{s.value=!1,a.value=!1}),de(e,"mouseout",()=>{s.value=!1,a.value=!1})),i.tapped&&($P()&&(de(e,"mousedown",()=>a.value=!0),de(e,"mouseup",()=>a.value=!1)),AP()&&(de(e,"pointerdown",()=>a.value=!0),de(e,"pointerup",()=>a.value=!1)),PP()&&(de(e,"touchstart",()=>a.value=!0),de(e,"touchend",()=>a.value=!1))),i.focused&&(de(e,"focus",()=>l.value=!0),de(e,"blur",()=>l.value=!1)),pe(u,o)}function RP({set:e,target:t,apply:n,variants:o,variant:i}){const s=b(o);pe(()=>t,()=>{!s||(s.initial&&e("initial"),s.enter&&(i.value="enter"))},{immediate:!0,flush:"pre"})}function MP({state:e,apply:t}){pe(e,n=>{n&&t(n)},{immediate:!0})}function EP({target:e,variants:t,variant:n}){const o=b(t);o&&(o.visible||o.visibleOnce)&&o0(e,([{isIntersecting:i}])=>{o.visible?i?n.value="visible":n.value="initial":o.visibleOnce&&(i&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function FP(e,t={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){t.lifeCycleHooks&&RP(e),t.syncVariants&&MP(e),t.visibilityHooks&&EP(e),t.eventListeners&&CP(e)}function zd(e={}){const t=Fe({...e}),n=U({});return pe(t,()=>{const o={};for(const[i,s]of Object.entries(t)){const a=Xs(i),l=Ld(s,a);o[i]=l}n.value=o},{immediate:!0,deep:!0}),{state:t,style:n}}function ta(e,t){pe(()=>At(e),n=>{!n||t(n)},{immediate:!0})}const OP={x:"translateX",y:"translateY",z:"translateZ"};function jd(e={},t=!0){const n=Fe({...e}),o=U("");return pe(n,i=>{let s="",a=!1;t&&(i.x||i.y||i.z)&&(s+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(ce.transform).join(",")}) `,a=!0);for(const[l,c]of Object.entries(i)){if(t&&(l==="x"||l==="y"||l==="z"))continue;const u=Xs(l),d=Ld(c,u);s+=`${OP[l]||l}(${d}) `}t&&!a&&(s+="translateZ(0px) "),o.value=s.trim()},{immediate:!0,deep:!0}),{state:n,transform:o}}const LP=["","X","Y","Z"],zP=["perspective","translate","scale","rotate","skew"],qd=["transformPerspective","x","y","z"];zP.forEach(e=>{LP.forEach(t=>{const n=e+t;qd.push(n)})});const jP=new Set(qd);function na(e){return jP.has(e)}const qP=new Set(["originX","originY","originZ"]);function Id(e){return qP.has(e)}function IP(e){const t={},n={};return Object.entries(e).forEach(([o,i])=>{na(o)||Id(o)?t[o]=i:n[o]=i}),{transform:t,style:n}}function Bd(e){const{transform:t,style:n}=IP(e),{transform:o}=jd(t),{style:i}=zd(n);return o.value&&(i.value.transform=o.value),i.value}function BP(e,t){let n,o;const{state:i,style:s}=zd();return ta(e,a=>{o=a;for(const l of Object.keys(Od))a.style[l]===null||a.style[l]===""||na(l)||Id(l)||(i[l]=a.style[l]);n&&Object.entries(n).forEach(([l,c])=>a.style[l]=c),t&&t(i)}),pe(s,a=>{if(!o){n=a;return}for(const l in a)o.style[l]=a[l]},{immediate:!0}),{style:i}}function VP(e){const t=e.trim().split(/\) |\)/);if(t.length===1)return{};const n=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return t.reduce((o,i)=>{if(!i)return o;const[s,a]=i.split("("),c=a.split(",").map(d=>n(d.endsWith(")")?d.replace(")",""):d.trim())),u=c.length===1?c[0]:c;return{...o,[s]:u}},{})}function NP(e,t){Object.entries(VP(t)).forEach(([n,o])=>{const i=["x","y","z"];if(n==="translate3d"){if(o===0){i.forEach(s=>e[s]=0);return}o.forEach((s,a)=>e[i[a]]=s);return}if(o=parseFloat(o),n==="translateX"){e.x=o;return}if(n==="translateY"){e.y=o;return}if(n==="translateZ"){e.z=o;return}e[n]=o})}function WP(e,t){let n,o;const{state:i,transform:s}=jd();return ta(e,a=>{o=a,a.style.transform&&NP(i,a.style.transform),n&&(a.style.transform=n),t&&t(i)}),pe(s,a=>{if(!o){n=a;return}o.style.transform=a},{immediate:!0}),{transform:i}}function HP(e,t){const n=Fe({}),o=a=>Object.entries(a).forEach(([l,c])=>n[l]=c),{style:i}=BP(e,o),{transform:s}=WP(e,o);return pe(n,a=>{Object.entries(a).forEach(([l,c])=>{const u=na(l)?s:i;u[l]&&u[l]===c||(u[l]=c)})},{immediate:!0,deep:!0}),ta(e,()=>t&&o(t)),{motionProperties:n,style:i,transform:s}}function UP(e={}){const t=b(e),n=U();return{state:P(()=>{if(!!n.value)return t[n.value]}),variant:n}}function Vd(e,t={},n){const{motionProperties:o}=HP(e),{variant:i,state:s}=UP(t),a=DP(o,t),l={target:e,variant:i,variants:t,state:s,motionProperties:o,...a};return FP(l,n),l}const KP=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],GP=(e,t)=>{const n=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};n&&(n.variants&&Ii(n.variants)&&(t.value={...t.value,...n.variants}),KP.forEach(o=>{if(o==="delay"){if(n&&n[o]&&Kf(n[o])){const i=n[o];t&&t.value&&(t.value.enter&&(t.value.enter.transition||(t.value.enter.transition={}),t.value.enter.transition={delay:i,...t.value.enter.transition}),t.value.visible&&(t.value.visible.transition||(t.value.visible.transition={}),t.value.visible.transition={delay:i,...t.value.visible.transition}),t.value.visibleOnce&&(t.value.visibleOnce.transition||(t.value.visibleOnce.transition={}),t.value.visibleOnce.transition={delay:i,...t.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),n&&n[o]&&Ii(n[o])&&(t.value[o]=n[o])}))},ki=e=>({created:(o,i,s)=>{const a=i.value&&typeof i.value=="string"?i.value:s.key;a&&vi[a]&&vi[a].stop();const l=U(e||{});typeof i.value=="object"&&(l.value=i.value),GP(s,l);const c=Vd(o,l);o.motionInstance=c,a&&(vi[a]=c)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,i){let{initial:s}=o.value||i&&(i==null?void 0:i.props)||{};s=b(s);const a=JD((e==null?void 0:e.initial)||{},s||{});return!a||Object.keys(a).length===0?void 0:{style:Bd(a)}}}),JP={initial:{opacity:0},enter:{opacity:1}},YP={initial:{opacity:0},visible:{opacity:1}},ZP={initial:{opacity:0},visibleOnce:{opacity:1}},QP={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},XP={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},e$={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},t$={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},n$={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},o$={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},r$={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},i$={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},s$={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},a$={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},l$={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},c$={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},u$={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},d$={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},h$={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},p$={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},f$={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},m$={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},g$={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},y$={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},_$={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},v$={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},w$={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},b$={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},k$={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},T$={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},S$={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},cs={__proto__:null,fade:JP,fadeVisible:YP,fadeVisibleOnce:ZP,pop:QP,popVisible:XP,popVisibleOnce:e$,rollBottom:u$,rollLeft:t$,rollRight:r$,rollTop:a$,rollVisibleBottom:d$,rollVisibleLeft:n$,rollVisibleRight:i$,rollVisibleTop:l$,rollVisibleOnceBottom:h$,rollVisibleOnceLeft:o$,rollVisibleOnceRight:s$,rollVisibleOnceTop:c$,slideBottom:k$,slideLeft:p$,slideRight:g$,slideTop:v$,slideVisibleBottom:T$,slideVisibleLeft:f$,slideVisibleRight:y$,slideVisibleTop:w$,slideVisibleOnceBottom:S$,slideVisibleOnceLeft:m$,slideVisibleOnceRight:_$,slideVisibleOnceTop:b$},x$=Se({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(e){var l;const t=Bp(),n=Fe({});if(!e.is&&!t.default)return()=>ft("div",{});const o=P(()=>{let c;return e.preset&&(c=cs[e.preset]),c}),i=P(()=>({initial:e.initial,enter:e.enter,leave:e.leave,visible:e.visible,visibleOnce:e.visibleOnce,hovered:e.hovered,tapped:e.tapped,focused:e.focused})),s=P(()=>{const c={...i.value,...o.value||{},...e.variants||{}};return e.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(e.delay)),c}),a=P(()=>{if(!e.is)return;let c=e.is;return typeof a.value=="string"&&!Xd(c)&&(c=Oo(c)),c});if(((l=process==null?void 0:process.env)==null?void 0:l.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const c=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var p,f,m;(p=u.variants)!=null&&p.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Ps(()=>Object.entries(n).forEach(([u,d])=>c(d)))}return{slots:t,component:a,motionConfig:s,instances:n}},render({slots:e,motionConfig:t,instances:n,component:o}){var l;const i=Bd(t.initial||{}),s=(c,u)=>(c.props||(c.props={}),c.props.style=i,c.props.onVnodeMounted=({el:d})=>{const p=Vd(d,t);n[u]=p},c);if(o){const c=ft(o,void 0,e);return s(c,0),c}return(((l=e.default)==null?void 0:l.call(e))||[]).map((c,u)=>s(c,u))}});function D$(e){const t="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(t.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>n.charAt(t.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const A$={install(e,t){if(e.directive("motion",ki()),e.component("Motion",x$),!t||t&&!t.excludePresets)for(const n in cs){const o=cs[n];e.directive(`motion-${D$(n)}`,ki(o))}if(t&&t.directives)for(const n in t.directives){const o=t.directives[n];o.initial,e.directive(`motion-${n}`,ki(o))}}};var tc;const Co=typeof window<"u",P$=Object.prototype.toString,$$=e=>P$.call(e)==="[object Object]";Co&&((tc=window==null?void 0:window.navigator)==null?void 0:tc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function C$(e){return kc()?(Tc(e),!0):!1}function R$(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}const M$=Co?window:void 0,us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ds="__vueuse_ssr_handlers__";us[ds]=us[ds]||{};us[ds];function E$(e,t={}){const{immediate:n=!0,window:o=M$}=t,i=U(!1);let s=null;function a(){!i.value||!o||(e(),s=o.requestAnimationFrame(a))}function l(){!i.value&&o&&(i.value=!0,a())}function c(){i.value=!1,s!=null&&o&&(o.cancelAnimationFrame(s),s=null)}return n&&l(),C$(c),{isActive:i,pause:c,resume:l}}var nc;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(nc||(nc={}));const oa="vue-starport-injection",Nd="vue-starport-options",F$={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},Wd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var O$=Object.defineProperty,Rr=Object.getOwnPropertySymbols,Hd=Object.prototype.hasOwnProperty,Ud=Object.prototype.propertyIsEnumerable,oc=(e,t,n)=>t in e?O$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L$=(e,t)=>{for(var n in t||(t={}))Hd.call(t,n)&&oc(e,n,t[n]);if(Rr)for(var n of Rr(t))Ud.call(t,n)&&oc(e,n,t[n]);return e},rc=(e,t)=>{var n={};for(var o in e)Hd.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&Rr)for(var o of Rr(e))t.indexOf(o)<0&&Ud.call(e,o)&&(n[o]=e[o]);return n};const z$=Se({name:"StarportProxy",props:L$({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},Wd),setup(e,t){const n=F(oa),o=P(()=>n.getInstance(e.port,e.component)),i=U(),s=o.value.generateId(),a=U(!1);return o.value.isVisible||(o.value.land(),a.value=!0),Ho(async()=>{o.value.el||(o.value.el=i.value,await Ye(),a.value=!0,o.value.rect.update())}),Wr(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await Ye(),await Ye(),!o.value.el&&n.dispose(o.value.port))}),pe(()=>e,async()=>{o.value.props&&await Ye();const l=e,{props:c}=l,u=rc(l,["props"]);o.value.props=c||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const l=e,{initialProps:c,mountedProps:u}=l,d=rc(l,["initialProps","mountedProps"]),p=br(d,(a.value?u:c)||{});return ft("div",br(p,{id:s,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),t.slots.default?ft(t.slots.default):void 0)}}});var j$=Object.defineProperty,q$=Object.defineProperties,I$=Object.getOwnPropertyDescriptors,ic=Object.getOwnPropertySymbols,B$=Object.prototype.hasOwnProperty,V$=Object.prototype.propertyIsEnumerable,sc=(e,t,n)=>t in e?j$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,N$=(e,t)=>{for(var n in t||(t={}))B$.call(t,n)&&sc(e,n,t[n]);if(ic)for(var n of ic(t))V$.call(t,n)&&sc(e,n,t[n]);return e},W$=(e,t)=>q$(e,I$(t));const H$=Se({name:"Starport",inheritAttrs:!0,props:Wd,setup(e,t){const n=U(!1);return Ho(()=>{n.value=!0}),()=>{var a,l;const o=(l=(a=t.slots).default)==null?void 0:l.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let s=i.type;return(!$$(s)||Xn(s))&&(s={render(){return o}}),ft(z$,W$(N$({},e),{key:e.port,component:jr(s),props:i.props}))}}});function U$(e){const t=Fe({height:0,width:0,left:0,top:0,update:o,listen:s,pause:a,margin:"0px",padding:"0px"}),n=Co?document.documentElement||document.body:void 0;function o(){if(!Co)return;const l=R$(e);if(!l)return;const{height:c,width:u,left:d,top:p}=l.getBoundingClientRect(),f=window.getComputedStyle(l),m=f.margin,g=f.padding;Object.assign(t,{height:c,width:u,left:d,top:n.scrollTop+p,margin:m,padding:g})}const i=E$(o,{immediate:!1});function s(){!Co||(o(),i.resume())}function a(){i.pause()}return t}let K$=(e,t=21)=>(n=t)=>{let o="",i=n;for(;i--;)o+=e[Math.random()*e.length|0];return o};const ac=K$("abcdefghijklmnopqrstuvwxyz",5);function lc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function G$(e){var t;return e.name||((t=e.__file)==null?void 0:t.split(/[\/\\.]/).slice(-2)[0])||""}var J$=Object.defineProperty,cc=Object.getOwnPropertySymbols,Y$=Object.prototype.hasOwnProperty,Z$=Object.prototype.propertyIsEnumerable,uc=(e,t,n)=>t in e?J$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ti=(e,t)=>{for(var n in t||(t={}))Y$.call(t,n)&&uc(e,n,t[n]);if(cc)for(var n of cc(t))Z$.call(t,n)&&uc(e,n,t[n]);return e};function Q$(e,t,n={}){const o=G$(t),i=lc(o)||ac(),s=U(),a=U(null),l=U(!1),c=U(!1),u=ah(!0),d=U({}),p=P(()=>Ti(Ti(Ti({},F$),n),d.value)),f=U(0);let m;u.run(()=>{m=U$(s),pe(s,async D=>{D&&(c.value=!0),await Ye(),s.value||(c.value=!1)})});const g=lc(e);function w(){return`starport-${i}-${g}-${ac()}`}const v=w();return Fe({el:s,id:v,port:e,props:a,rect:m,scope:u,isLanded:l,isVisible:c,options:p,liftOffTime:f,component:t,componentName:o,componentId:i,generateId:w,setLocalOptions(D={}){d.value=JSON.parse(JSON.stringify(D))},elRef(){return s},liftOff(){!l.value||(l.value=!1,f.value=Date.now(),m.listen())},land(){l.value||(l.value=!0,m.pause())}})}function X$(e){const t=Fe(new Map);function n(i,s){let a=t.get(i);return a||(a=Q$(i,s,e),t.set(i,a)),a.component=s,a}function o(i){var s;(s=t.get(i))==null||s.scope.stop(),t.delete(i)}return{portMap:t,dispose:o,getInstance:n}}var eC=Object.defineProperty,tC=Object.defineProperties,nC=Object.getOwnPropertyDescriptors,dc=Object.getOwnPropertySymbols,oC=Object.prototype.hasOwnProperty,rC=Object.prototype.propertyIsEnumerable,hc=(e,t,n)=>t in e?eC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,iC=(e,t)=>{for(var n in t||(t={}))oC.call(t,n)&&hc(e,n,t[n]);if(dc)for(var n of dc(t))rC.call(t,n)&&hc(e,n,t[n]);return e},sC=(e,t)=>tC(e,nC(t));const aC=Se({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const t=F(oa);if(!t)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const n=P(()=>t.getInstance(e.port,e.component)),o=P(()=>{var a;return((a=n.value.el)==null?void 0:a.id)||n.value.id}),i=P(()=>{const a=Date.now()-n.value.liftOffTime,l=Math.max(0,n.value.options.duration-a),c=n.value.rect,u={position:"absolute",left:0,top:0,width:`${c.width}px`,height:`${c.height}px`,margin:c.margin,padding:c.padding,transform:`translate3d(${c.left}px,${c.top}px,0px)`};return!n.value.isVisible||!n.value.el?sC(iC({},u),{zIndex:-1,display:"none"}):(n.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${l}ms`,transitionTimingFunction:n.value.options.easing}),u)}),s={};return()=>{const a=!!(n.value.isLanded&&n.value.el);return ft("div",{style:i.value,"data-starport-craft":n.value.componentId,"data-starport-landed":n.value.isLanded?"true":void 0,"data-starport-floating":n.value.isLanded?void 0:"true",onTransitionend:n.value.land},ft(Rp,{to:a?`#${o.value}`:"body",disabled:!a},ft(n.value.component,br(s,n.value.props))))}}}),lC=Se({name:"StarportCarrier",setup(e,{slots:t}){const n=X$(F(Nd,{}));return Cn().appContext.app.provide(oa,n),()=>{var i;return[(i=t.default)==null?void 0:i.call(t),Array.from(n.portMap.entries()).map(([s,{component:a}])=>ft(aC,{key:s,port:s,component:a}))]}}});function cC(e={}){return{install(t){t.provide(Nd,e),t.component("Starport",H$),t.component("StarportCarrier",lC)}}}function uC(e){function t(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}t(),window.addEventListener("resize",t),e.app.use(A$),e.app.use(cC({keepAlive:!0}))}function lt(e,t,n){var o,i;return(i=((o=e.instance)==null?void 0:o.$).provides[t])!=null?i:n}function dC(){return{install(e){e.directive("click",{name:"v-click",mounted(t,n){var d,p,f,m;if(Do.value||((d=lt(n,ur))==null?void 0:d.value))return;const o=lt(n,jn),i=lt(n,cr),s=lt(n,qi),a=n.modifiers.hide!==!1&&n.modifiers.hide!=null,l=n.modifiers.fade!==!1&&n.modifiers.fade!=null,c=((p=o==null?void 0:o.value)==null?void 0:p.length)||0,u=l?Mf:ii;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(t))&&o.value.push(t),n.value===null&&(n.value=o==null?void 0:o.value.length),!(s!=null&&s.value.has(n.value)))s==null||s.value.set(n.value,[t]);else if(!((m=s==null?void 0:s.value.get(n.value))!=null&&m.includes(t))){const g=(s==null?void 0:s.value.get(n.value))||[];s==null||s.value.set(n.value,[t].concat(g))}t==null||t.classList.toggle(Fn,!0),i&&pe(i,()=>{var D;const g=(D=i==null?void 0:i.value)!=null?D:0,w=n.value!=null?g>=n.value:g>c;t.classList.contains(si)||t.classList.toggle(u,!w),a!==!1&&a!==void 0&&t.classList.toggle(u,w),t.classList.toggle(po,!1);const v=s==null?void 0:s.value.get(g);v==null||v.forEach((S,x)=>{S.classList.toggle(or,!1),x===v.length-1?S.classList.toggle(po,!0):S.classList.toggle(or,!0)}),t.classList.contains(po)||t.classList.toggle(or,w)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const o=lt(n,jn);o!=null&&o.value&&Wa(o.value,t)}}),e.directive("after",{name:"v-after",mounted(t,n){var l,c;if(Do.value||((l=lt(n,ur))==null?void 0:l.value))return;const o=lt(n,jn),i=lt(n,cr),s=lt(n,qi),a=o==null?void 0:o.value.length;n.value===void 0&&(n.value=o==null?void 0:o.value.length),s!=null&&s.value.has(n.value)?(c=s==null?void 0:s.value.get(n.value))==null||c.push(t):s==null||s.value.set(n.value,[t]),t==null||t.classList.toggle(Fn,!0),i&&pe(i,()=>{var d,p,f;const u=((d=i.value)!=null?d:0)>=((f=(p=n.value)!=null?p:a)!=null?f:0);t.classList.contains(si)||t.classList.toggle(ii,!u),t.classList.toggle(po,!1),t.classList.contains(po)||t.classList.toggle(or,u)},{immediate:!0})},unmounted(t){t==null||t.classList.toggle(Fn,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(t,n){var a,l,c;if(Do.value||((a=lt(n,ur))==null?void 0:a.value))return;const o=lt(n,jn),i=lt(n,cr),s=((l=o==null?void 0:o.value)==null?void 0:l.length)||0;o&&!((c=o==null?void 0:o.value)!=null&&c.includes(t))&&o.value.push(t),t==null||t.classList.toggle(Fn,!0),i&&pe(i,()=>{var p;const u=(p=i==null?void 0:i.value)!=null?p:0,d=n.value!=null?u>=n.value:u>s;t.classList.toggle(ii,d),t.classList.toggle(si,d)},{immediate:!0})},unmounted(t,n){t==null||t.classList.toggle(Fn,!1);const o=lt(n,jn);o!=null&&o.value&&Wa(o.value,t)}})}}}function hC(e,t){const n=Qu(e),o=Xu(t,n.currentRoute,n.currentPage);return{nav:{...n,...o,downloadPDF:Xi,next:rn,nextSlide:Bo,openInEditor:HD,prev:sn,prevSlide:Vo},configs:ke,themeConfigs:P(()=>ke.themeConfig)}}function pC(){return{install(e){const t=hC(Jt,Ct);e.provide(B,Fe(t))}}}const lo=ff(KD);lo.use(gt);lo.use(Af());lo.use(dC());lo.use(pC());uC({app:lo,router:gt});lo.mount("#app");export{_o as $,me as A,Te as B,et as C,bg as D,fC as E,De as F,mC as G,Ct as H,Pr as I,ID as J,fi as K,ai as L,qo as M,hi as N,yu as O,D_ as P,Is as Q,T_ as R,Bs as S,He as T,td as U,Cg as V,Ju as W,Et as X,gC as Y,wt as Z,Ku as _,r as a,rr as a0,Uo as a1,wn as a2,qt as a3,Yi as a4,Q1 as a5,X1 as a6,eg as a7,ng as a8,Cs as a9,hu as aa,wC as ab,tt as ac,uy as ad,mu as ae,og as af,Wr as ag,_g as ah,P as b,K as c,Se as d,B as e,dt as f,j as g,b as h,F as i,dg as j,WD as k,ke as l,$f as m,je as n,k as o,Ho as p,Fe as q,U as r,yC as s,An as t,_C as u,vC as v,pe as w,I as x,nt as y,A as z};
