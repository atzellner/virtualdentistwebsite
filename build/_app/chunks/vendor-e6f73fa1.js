function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function l(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function u(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function h(t,n,e,o,r,i){if(r){const c=f(n,e,o,i);t.p(c,r)}}function _(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}const m="undefined"!=typeof window;let p=m?()=>window.performance.now():()=>Date.now(),g=m?t=>requestAnimationFrame(t):t;const $=new Set;function y(t){$.forEach((n=>{n.c(t)||($.delete(n),n.f())})),0!==$.size&&g(y)}function b(t){let n;return 0===$.size&&g(y),{promise:new Promise((e=>{$.add(n={c:t,f:e})})),abort(){$.delete(n)}}}let x,v=!1;function w(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function E(t,n){t.appendChild(n)}function k(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n.host?n:document}function A(t){const n=z("style");return function(t,n){E(t.head||t,n)}(k(t),n),n}function S(t,n){if(v){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let a=0;a<n.length;a++){const t=n[a].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:w(1,r,(t=>n[e[t]].claim_order),t))-1;o[a]=e[i]+1;const c=i+1;e[c]=a,r=Math.max(c,r)}const i=[],c=[];let s=n.length-1;for(let a=e[r]+1;0!=a;a=o[a-1]){for(i.push(n[a-1]);s>=a;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let a=0,l=0;a<c.length;a++){for(;l<i.length&&c[a].claim_order>=i[l].claim_order;)l++;const n=l<i.length?i[l]:null;t.insertBefore(c[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function N(t,n,e){v&&!e?S(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function C(t){t.parentNode.removeChild(t)}function z(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function O(){return R(" ")}function M(){return R("")}function T(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function q(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function B(t){return Array.from(t.childNodes)}function D(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function I(t,n,e,o){return D(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function P(t,n,e){return I(t,n,e,z)}function W(t,n,e){return I(t,n,e,j)}function F(t,n){return D(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>R(n)),!0)}function L(t){return F(t," ")}function H(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function G(t,n){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=z("iframe");e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),e.setAttribute("aria-hidden","true"),e.tabIndex=-1;const o=function(){if(void 0===x){x=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){x=!0}}return x}();let r;return o?(e.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===e.contentWindow&&n()}))):(e.src="about:blank",e.onload=()=>{r=T(e.contentWindow,"resize",n)}),E(t,e),()=>{(o||r&&e.contentWindow)&&r(),C(e)}}function J(t,n=document.body){return Array.from(n.querySelectorAll(t))}const K=new Set;let Q,U=0;function V(t,n,e,o,r,i,c,s=0){const a=16.666/o;let l="{\n";for(let p=0;p<=1;p+=a){const t=n+(e-n)*i(p);l+=100*p+`%{${c(t,1-t)}}\n`}const u=l+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${s}`,d=k(t);K.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=A(t).sheet),_=d.__svelte_rules||(d.__svelte_rules={});_[f]||(_[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,U+=1,f}function X(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),U-=r,U||g((()=>{U||(K.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),K.clear())})))}function Y(t){Q=t}function Z(){if(!Q)throw new Error("Function called outside component initialization");return Q}function tt(t){Z().$$.on_mount.push(t)}function nt(t){Z().$$.after_update.push(t)}function et(t){Z().$$.on_destroy.push(t)}function ot(t,n){Z().$$.context.set(t,n)}const rt=[],it=[],ct=[],st=[],at=Promise.resolve();let lt=!1;function ut(t){ct.push(t)}let ft=!1;const dt=new Set;function ht(){if(!ft){ft=!0;do{for(let t=0;t<rt.length;t+=1){const n=rt[t];Y(n),_t(n.$$)}for(Y(null),rt.length=0;it.length;)it.pop()();for(let t=0;t<ct.length;t+=1){const n=ct[t];dt.has(n)||(dt.add(n),n())}ct.length=0}while(rt.length);for(;st.length;)st.pop()();lt=!1,ft=!1,dt.clear()}}function _t(t){if(null!==t.fragment){t.update(),i(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(ut)}}let mt;function pt(){return mt||(mt=Promise.resolve(),mt.then((()=>{mt=null}))),mt}function gt(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const $t=new Set;let yt;function bt(){yt={r:0,c:[],p:yt}}function xt(){yt.r||i(yt.c),yt=yt.p}function vt(t,n){t&&t.i&&($t.delete(t),t.i(n))}function wt(t,n,e,o){if(t&&t.o){if($t.has(t))return;$t.add(t),yt.c.push((()=>{$t.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Et={duration:0};function kt(e,o,r){let i,s,a=o(e,r),l=!1,u=0;function f(){i&&X(e,i)}function d(){const{delay:o=0,duration:r=300,easing:c=n,tick:d=t,css:h}=a||Et;h&&(i=V(e,0,1,r,o,c,h,u++)),d(0,1);const _=p()+o,m=_+r;s&&s.abort(),l=!0,ut((()=>gt(e,!0,"start"))),s=b((t=>{if(l){if(t>=m)return d(1,0),gt(e,!0,"end"),f(),l=!1;if(t>=_){const n=c((t-_)/r);d(n,1-n)}}return l}))}let h=!1;return{start(){h||(h=!0,X(e),c(a)?(a=a(),pt().then(d)):d())},invalidate(){h=!1},end(){l&&(f(),l=!1)}}}function At(e,o,r){let s,a=o(e,r),l=!0;const u=yt;function f(){const{delay:o=0,duration:r=300,easing:c=n,tick:f=t,css:d}=a||Et;d&&(s=V(e,1,0,r,o,c,d));const h=p()+o,_=h+r;ut((()=>gt(e,!1,"start"))),b((t=>{if(l){if(t>=_)return f(0,1),gt(e,!1,"end"),--u.r||i(u.c),!1;if(t>=h){const n=c((t-h)/r);f(1-n,n)}}return l}))}return u.r+=1,c(a)?pt().then((()=>{a=a(),f()})):f(),{end(t){t&&a.tick&&a.tick(1,0),l&&(s&&X(e,s),l=!1)}}}function St(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=n[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function Nt(t){return"object"==typeof t&&null!==t?t:{}}function Ct(t){t&&t.c()}function zt(t,n){t&&t.l(n)}function jt(t,n,e,r){const{fragment:s,on_mount:a,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,e),r||ut((()=>{const n=a.map(o).filter(c);l?l.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(ut)}function Rt(t,n){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Ot(t,n){-1===t.$$.dirty[0]&&(rt.push(t),lt||(lt=!0,at.then(ht)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Mt(n,e,o,c,s,a,l,u=[-1]){const f=Q;Y(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};l&&l(d.root);let h=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&Ot(n,t)),e})):[],d.update(),h=!0,i(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){v=!0;const t=B(e.target);d.fragment&&d.fragment.l(t),t.forEach(C)}else d.fragment&&d.fragment.c();e.intro&&vt(n.$$.fragment),jt(n,e.target,e.anchor,e.customElement),v=!1,ht()}Y(f)}class Tt{$destroy(){Rt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const qt=[];function Bt(n,e=t){let o;const r=new Set;function i(t){if(s(n,t)&&(n=t,o)){const t=!qt.length;for(const e of r)e[1](),qt.push(e,n);if(t){for(let t=0;t<qt.length;t+=2)qt[t][0](qt[t+1]);qt.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,s=t){const a=[c,s];return r.add(a),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function Dt(t){const n=t-1;return n*n*n+1}function It(t,{delay:n=0,duration:e=400,easing:o=Dt,x:r=0,y:i=0,opacity:c=0}={}){const s=getComputedStyle(t),a=+s.opacity,l="none"===s.transform?"":s.transform,u=a*(1-c);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${l} translate(${(1-t)*r}px, ${(1-t)*i}px);\n\t\t\topacity: ${a-u*n}`}}export{tt as A,e as B,Bt as C,j as D,W as E,S as F,t as G,T as H,i as I,h as J,_ as K,d as L,u as M,J as N,l as O,ut as P,G as Q,At as R,Tt as S,kt as T,It as U,et as V,B as a,q as b,P as c,C as d,z as e,N as f,F as g,H as h,Mt as i,Ct as j,O as k,M as l,zt as m,L as n,jt as o,St as p,Nt as q,bt as r,s,R as t,wt as u,Rt as v,xt as w,vt as x,ot as y,nt as z};
