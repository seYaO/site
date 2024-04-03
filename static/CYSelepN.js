import{y as S,an as T,ao as E,z as C,ap as A,am as O,aq as I,Z as P,K as h}from"./9uDDZz-A.js";const m=/^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;function R(e,i){if(typeof e!="string")throw new TypeError("argument str must be a string");const o={},a=(i||{}).decode||N;let s=0;for(;s<e.length;){const r=e.indexOf("=",s);if(r===-1)break;let n=e.indexOf(";",s);if(n===-1)n=e.length;else if(n<r){s=e.lastIndexOf(";",r-1)+1;continue}const f=e.slice(s,r).trim();if(o[f]===void 0){let c=e.slice(r+1,n).trim();c.codePointAt(0)===34&&(c=c.slice(1,-1)),o[f]=x(c,a)}s=n+1}return o}function g(e,i,o){const t=o||{},a=t.encode||M;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!m.test(e))throw new TypeError("argument name is invalid");const s=a(i);if(s&&!m.test(s))throw new TypeError("argument val is invalid");let r=e+"="+s;if(t.maxAge!==void 0&&t.maxAge!==null){const n=t.maxAge-0;if(Number.isNaN(n)||!Number.isFinite(n))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(n)}if(t.domain){if(!m.test(t.domain))throw new TypeError("option domain is invalid");r+="; Domain="+t.domain}if(t.path){if(!m.test(t.path))throw new TypeError("option path is invalid");r+="; Path="+t.path}if(t.expires){if(!D(t.expires)||Number.isNaN(t.expires.valueOf()))throw new TypeError("option expires is invalid");r+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(r+="; HttpOnly"),t.secure&&(r+="; Secure"),t.priority)switch(typeof t.priority=="string"?t.priority.toLowerCase():t.priority){case"low":r+="; Priority=Low";break;case"medium":r+="; Priority=Medium";break;case"high":r+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}if(t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r}function D(e){return Object.prototype.toString.call(e)==="[object Date]"||e instanceof Date}function x(e,i){try{return i(e)}catch{return e}}function N(e){return e.includes("%")?decodeURIComponent(e):e}function M(e){return encodeURIComponent(e)}function u(e){if(typeof e!="object")return e;var i,o,t=Object.prototype.toString.call(e);if(t==="[object Object]"){if(e.constructor!==Object&&typeof e.constructor=="function"){o=new e.constructor;for(i in e)e.hasOwnProperty(i)&&o[i]!==e[i]&&(o[i]=u(e[i]))}else{o={};for(i in e)i==="__proto__"?Object.defineProperty(o,i,{value:u(e[i]),configurable:!0,enumerable:!0,writable:!0}):o[i]=u(e[i])}return o}if(t==="[object Array]"){for(i=e.length,o=Array(i);i--;)o[i]=u(e[i]);return o}return t==="[object Set]"?(o=new Set,e.forEach(function(a){o.add(u(a))}),o):t==="[object Map]"?(o=new Map,e.forEach(function(a,s){o.set(u(s),u(a))}),o):t==="[object Date]"?new Date(+e):t==="[object RegExp]"?(o=new RegExp(e.source,e.flags),o.lastIndex=e.lastIndex,o):t==="[object DataView]"?new e.constructor(u(e.buffer)):t==="[object ArrayBuffer]"?e.slice(0):t.slice(-6)==="Array]"?new e.constructor(e):e}const q={path:"/",watch:!0,decode:e=>O(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))},L=void 0;function y(e,i){var f;const o={...q,...i},t=b(o)||{};let a;o.maxAge!==void 0?a=o.maxAge*1e3:o.expires&&(a=o.expires.getTime()-Date.now());const s=a!==void 0&&a<=0,r=u(s?void 0:t[e]??((f=o.default)==null?void 0:f.call(o))),n=a&&!s?z(r,a,o.watch&&o.watch!=="shallow"):S(r);{let c=null;try{!L&&typeof BroadcastChannel<"u"&&(c=new BroadcastChannel(`nuxt:cookies:${e}`))}catch{}const l=()=>{o.readonly||I(n.value,t[e])||(_(e,n.value,o),t[e]=u(n.value),c==null||c.postMessage({value:o.encode(n.value)}))},p=w=>{var v;const j=w.refresh?(v=b(o))==null?void 0:v[e]:o.decode(w.value);d=!0,t[e]=n.value=j,P(()=>{d=!1})};let d=!1;T()&&E(()=>{d=!0,l(),c==null||c.close()}),c&&(c.onmessage=({data:w})=>p(w)),o.watch?C(n,()=>{d||l()},{deep:o.watch!=="shallow"}):l()}return n}function b(e={}){return R(document.cookie,e)}function U(e,i,o={}){return i==null?g(e,i,{...o,maxAge:-1}):g(e,i,o)}function _(e,i,o={}){document.cookie=U(e,i,o)}const k=2147483647;function z(e,i,o){let t,a,s=0;const r=o?S(e):{value:e};return T()&&E(()=>{a==null||a(),clearTimeout(t)}),A((n,f)=>{o&&(a=C(r,f));function c(){clearTimeout(t);const l=i-s,p=l<k?l:k;t=setTimeout(()=>{if(s+=p,s<i)return c();r.value=void 0,f()},p)}return{get(){return n(),r.value},set(l){c(),r.value=l,f()}}})}const F=()=>({isEnabled:()=>{const t=h().query;return Object.prototype.hasOwnProperty.call(t,"preview")&&!t.preview?!1:!!(t.preview||y("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>y("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:t=>{y("previewToken").value=t,h().query.preview=t||"",t?sessionStorage.setItem("previewToken",t):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{F as u};