"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[340],{65122:function(e,n,t){t.d(n,{Z:function(){return r}});function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}},65727:function(e,n,t){t.d(n,{M:function(){return r}});function r(e,n,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==e||e(r),!1===t||!r.defaultPrevented)return null==n?void 0:n(r)}}},79869:function(e,n,t){t.d(n,{F:function(){return u},e:function(){return o}});var r=t(3546);function u(...e){return n=>e.forEach(e=>{"function"==typeof e?e(n):null!=e&&(e.current=n)})}function o(...e){return(0,r.useCallback)(u(...e),e)}},47091:function(e,n,t){t.d(n,{b:function(){return o},k:function(){return u}});var r=t(3546);function u(e,n){let t=(0,r.createContext)(n);function u(e){let{children:n,...u}=e,o=(0,r.useMemo)(()=>u,Object.values(u));return(0,r.createElement)(t.Provider,{value:o},n)}return u.displayName=e+"Provider",[u,function(u){let o=(0,r.useContext)(t);if(o)return o;if(void 0!==n)return n;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function o(e,n=[]){let t=[],u=()=>{let n=t.map(e=>(0,r.createContext)(e));return function(t){let u=(null==t?void 0:t[e])||n;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...t,[e]:u}}),[t,u])}};return u.scopeName=e,[function(n,u){let o=(0,r.createContext)(u),l=t.length;function i(n){let{scope:t,children:u,...i}=n,c=(null==t?void 0:t[e][l])||o,a=(0,r.useMemo)(()=>i,Object.values(i));return(0,r.createElement)(c.Provider,{value:a},u)}return t=[...t,u],i.displayName=n+"Provider",[i,function(t,i){let c=(null==i?void 0:i[e][l])||o,a=(0,r.useContext)(c);if(a)return a;if(void 0!==u)return u;throw Error(`\`${t}\` must be used within \`${n}\``)}]},function(...e){let n=e[0];if(1===e.length)return n;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=t.reduce((n,{useScope:t,scopeName:r})=>{let u=t(e),o=u[`__scope${r}`];return{...n,...o}},{});return(0,r.useMemo)(()=>({[`__scope${n.scopeName}`]:u}),[u])}};return t.scopeName=n.scopeName,t}(u,...n)]}},96497:function(e,n,t){t.d(n,{z:function(){return i}});var r=t(3546),u=t(30171),o=t(79869),l=t(65292);let i=e=>{let{present:n,children:t}=e,i=function(e){var n;let[t,o]=(0,r.useState)(),i=(0,r.useRef)({}),a=(0,r.useRef)(e),f=(0,r.useRef)("none"),s=e?"mounted":"unmounted",[d,m]=(n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,t)=>{let r=n[e][t];return null!=r?r:e},s));return(0,r.useEffect)(()=>{let e=c(i.current);f.current="mounted"===d?e:"none"},[d]),(0,l.b)(()=>{let n=i.current,t=a.current,r=t!==e;if(r){let r=f.current,u=c(n);e?m("MOUNT"):"none"===u||(null==n?void 0:n.display)==="none"?m("UNMOUNT"):t&&r!==u?m("ANIMATION_OUT"):m("UNMOUNT"),a.current=e}},[e,m]),(0,l.b)(()=>{if(t){let e=e=>{let n=c(i.current),r=n.includes(e.animationName);e.target===t&&r&&(0,u.flushSync)(()=>m("ANIMATION_END"))},n=e=>{e.target===t&&(f.current=c(i.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}m("ANIMATION_END")},[t,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(n),a="function"==typeof t?t({present:i.isPresent}):r.Children.only(t),f=(0,o.e)(i.ref,a.ref),s="function"==typeof t;return s||i.isPresent?(0,r.cloneElement)(a,{ref:f}):null};function c(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},72205:function(e,n,t){t.d(n,{WV:function(){return i},jH:function(){return c}});var r=t(65122),u=t(3546),o=t(30171),l=t(74047);let i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,n)=>{let t=(0,u.forwardRef)((e,t)=>{let{asChild:o,...i}=e,c=o?l.g7:n;return(0,u.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,u.createElement)(c,(0,r.Z)({},i,{ref:t}))});return t.displayName=`Primitive.${n}`,{...e,[n]:t}},{});function c(e,n){e&&(0,o.flushSync)(()=>e.dispatchEvent(n))}},74047:function(e,n,t){t.d(n,{A4:function(){return c},g7:function(){return l}});var r=t(65122),u=t(3546),o=t(79869);let l=(0,u.forwardRef)((e,n)=>{let{children:t,...o}=e,l=u.Children.toArray(t),c=l.find(a);if(c){let e=c.props.children,t=l.map(n=>n!==c?n:u.Children.count(e)>1?u.Children.only(null):(0,u.isValidElement)(e)?e.props.children:null);return(0,u.createElement)(i,(0,r.Z)({},o,{ref:n}),(0,u.isValidElement)(e)?(0,u.cloneElement)(e,void 0,t):null)}return(0,u.createElement)(i,(0,r.Z)({},o,{ref:n}),t)});l.displayName="Slot";let i=(0,u.forwardRef)((e,n)=>{let{children:t,...r}=e;return(0,u.isValidElement)(t)?(0,u.cloneElement)(t,{...function(e,n){let t={...n};for(let r in n){let u=e[r],o=n[r],l=/^on[A-Z]/.test(r);l?u&&o?t[r]=(...e)=>{o(...e),u(...e)}:u&&(t[r]=u):"style"===r?t[r]={...u,...o}:"className"===r&&(t[r]=[u,o].filter(Boolean).join(" "))}return{...e,...t}}(r,t.props),ref:n?(0,o.F)(n,t.ref):t.ref}):u.Children.count(t)>1?u.Children.only(null):null});i.displayName="SlotClone";let c=({children:e})=>(0,u.createElement)(u.Fragment,null,e);function a(e){return(0,u.isValidElement)(e)&&e.type===c}},17957:function(e,n,t){t.d(n,{W:function(){return u}});var r=t(3546);function u(e){let n=(0,r.useRef)(e);return(0,r.useEffect)(()=>{n.current=e}),(0,r.useMemo)(()=>(...e)=>{var t;return null===(t=n.current)||void 0===t?void 0:t.call(n,...e)},[])}},65292:function(e,n,t){t.d(n,{b:function(){return u}});var r=t(3546);let u=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}}]);