(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1929],{78627:function(e,t,n){Promise.resolve().then(n.bind(n,7931))},7931:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n(36164),r=n(3546),o=n(42891),i=n.n(o),a=n(11978),l=n(23342),c=n(47190),d=n.n(c),u=n(42450),m=n(64148),h=n(93668),p=n(18452),f=n(74248),x=n(31458),g=n(81565),v=n(11786),y=n(73033);n(2596);let w=e=>d()(e).hsl().toString().replace(/hsla?\(/,"").replace(")","").split(",").slice(0,3).map((e,t)=>0===t?parseFloat(e).toFixed(1):e).join(""),E=["vscode"],j=["vscode"];function b(){let[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(null),[c,d]=(0,r.useState)(""),[b,S]=(0,r.useState)([]),[C,N]=(0,r.useState)(!1),[k,K]=(0,r.useState)(null),[I,M]=(0,r.useState)(!1),A=(0,r.useRef)(null),z=(0,a.useSearchParams)(),T=z.get("client")||void 0,_=z.get("font-size")||void 0,F=z.get("foreground")?"#".concat(z.get("foreground")):void 0,L="vscode"===T,R=E.includes(T||""),W=j.includes(T||"");(0,r.useEffect)(()=>{let e=e=>{let{data:t}=e;if(t.style){let e=t.style.split(";").filter(e=>e).map(e=>{let[t,n]=e.split(":"),s=n.trim(),r=s.startsWith("#")||s.startsWith("rgb");if(!r)return"".concat(t,": ").concat(n);let o=w(s);return"".concat(t,": ").concat(o)}).join(";");document.documentElement.style.cssText=e,N(!0)}t.themeClass&&(document.documentElement.className=t.themeClass)};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},[]),(0,r.useEffect)(()=>{if(!L)return;let e=e=>{(e.ctrlKey||e.metaKey)&&"KeyC"===e.code?document.execCommand("copy"):(e.ctrlKey||e.metaKey)&&"KeyX"===e.code?document.execCommand("cut"):(e.ctrlKey||e.metaKey)&&"KeyV"===e.code?document.execCommand("paste"):(e.ctrlKey||e.metaKey)&&"KeyA"===e.code&&document.execCommand("selectAll")};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]);let O=e=>{if(A.current)A.current.sendUserChat(e);else{let t=[...b];t.push(e),S(t)}},P=(0,p.H)({init:e=>{A.current||(d((0,f.x0)()),t(!0),o(e.fetcherOptions))},sendMessage:e=>O(e),showError:e=>{K(e)},cleanError:()=>{K(null)}}),Z=async()=>{M(!0),await (null==P?void 0:P.refresh()),M(!1)},B=async e=>{var t;return null==P?void 0:null===(t=P.onSubmitMessage)||void 0===t?void 0:t.call(P,e)},H=async e=>{var t;return null==P?void 0:null===(t=P.onApplyInEditor)||void 0===t?void 0:t.call(P,e)};function U(e){let{children:t}=e;return(0,s.jsxs)("div",{className:"h-screen w-screen",style:{fontSize:C?"inherit":_,color:C?"inherit":F,padding:"5px 18px"},children:[(0,s.jsxs)("div",{className:"flex items-center",style:{marginBottom:"0.55em"},children:[(0,s.jsx)(i(),{src:l.Z,alt:"logo",className:"rounded-full",style:{background:"rgb(232, 226, 210)",marginRight:"0.375em",padding:"0.15em"},width:18}),(0,s.jsx)("p",{className:"font-semibold",children:"Tabby"})]}),t]})}if(k)return(0,s.jsx)(U,{children:(0,s.jsxs)(s.Fragment,{children:[k.title&&(0,s.jsx)("p",{className:"mb-1.5 mt-2 font-semibold",children:k.title}),(0,s.jsx)(y.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[m.Z,h.Z],children:k.content}),(0,s.jsxs)(x.z,{className:"mt-5 flex items-center gap-x-2 text-sm leading-none",onClick:Z,children:[I&&(0,s.jsx)(g.IconSpinner,{}),"Refresh"]})]})});if(!e||!n)return(0,s.jsx)(U,{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("p",{className:"opacity-80",children:"Welcome to Tabby Chat! Just a moment while we get thins ready..."}),(0,s.jsx)(g.IconSpinner,{className:"mx-auto",style:{marginTop:"1.25em",width:"0.875em",height:"0.875em"}})]})});let V={Authorization:"Bearer ".concat(n.authorization)};return(0,s.jsx)(u.SV,{FallbackComponent:function(e){let{error:t}=e;return(0,s.jsxs)(U,{children:[(0,s.jsx)("p",{className:"mb-1.5 mt-2 font-semibold",children:"Something went wrong"}),(0,s.jsx)("p",{children:t.message}),(0,s.jsxs)(x.z,{className:"mt-5 flex items-center gap-x-2 text-sm leading-none",onClick:Z,children:[I&&(0,s.jsx)(g.IconSpinner,{}),"Refresh"]})]})},children:(0,s.jsx)(v.e,{chatId:c,ref:A,headers:V,onThreadUpdates:()=>{},onNavigateToContext:(e,t)=>{null==P||P.navigate(e,t)},onLoaded:()=>{b.forEach(O),S([])},maxWidth:L?"5xl":void 0,onCopyContent:"vscode"===T?e=>{parent.postMessage({action:"copy",data:e},"*")}:void 0,client:T,onSubmitMessage:R?B:void 0,onApplyInEditor:W?H:void 0},c)})}},2596:function(){},18452:function(e,t,n){"use strict";n.d(t,{m:function(){return i},H:function(){return a}});var s=n(3546),r=n(89704),o=n(95686);function i(e,t){let[n,o]=(0,s.useState)(null),i=!1;return(0,s.useEffect)(()=>{if(e.current&&!i){var n;i=!0,o((n=e.current,(0,r.K)(n,{expose:{navigate:t.navigate,refresh:t.refresh,onSubmitMessage:t.onSubmitMessage,onApplyInEditor:t.onApplyInEditor}})))}},[e.current]),n}function a(e){let[t,n]=(0,s.useState)(null),r=!1;return(0,s.useEffect)(()=>{let t=window.self!==window.top;t&&!r&&(r=!0,n((0,o.c)({expose:{init:e.init,sendMessage:e.sendMessage,showError:e.showError,cleanError:e.cleanError}})))},[]),t}}},function(e){e.O(0,[7998,5498,6312,9739,1283,3449,2578,9421,9317,4097,4421,1454,4789,4546,8746,9275,4373,994,5606,1888,8002,2459,9736,1565,7417,7532,3375,5289,1744],function(){return e(e.s=78627)}),_N_E=e.O()}]);