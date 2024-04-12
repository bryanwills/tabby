(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5271],{95380:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:d,className:l="",children:c,...u},m)=>(0,n.createElement)("svg",{ref:m,...o,width:i,height:i,stroke:r,strokeWidth:d?24*Number(a)/Number(i):a,className:["lucide",`lucide-${s(e)}`,l].join(" "),...u},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(c)?c:[c]]));return r.displayName=`${e}`,r}},47154:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("BookOpenText",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]])},1295:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(95380);/**
 * @license lucide-react v0.365.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.Z)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},37704:function(e,t,r){Promise.resolve().then(r.bind(r,70832))},70832:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(57437),o=r(24033),s=r(2265),i=r(39311),a=r(93023),d=r(38110),l=r(61865),c=r(74578),u=r(61985),m=r(60106),f=r(58001),h=r(7820),p=r(41315),x=r(84168),v=r(51908);let g=(0,m.BX)("\n  mutation register(\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n"),y=c.Ry({email:c.Z_().email("Invalid email address"),password1:c.Z_(),password2:c.Z_(),invitationCode:c.Z_().optional()});function j(e){var t,r,s;let{className:c,invitationCode:m,onSuccess:j,buttonClass:b,...w}=e,N=(0,l.cI)({resolver:(0,d.F)(y),defaultValues:{invitationCode:m}}),k=(0,o.useRouter)(),C=(0,f.zq)(),{isSubmitting:I}=N.formState,S=(0,h.D)(g,{async onCompleted(e){await C(null==e?void 0:e.register)&&(j?j():k.replace("/"))},form:N});return(0,n.jsx)(p.l0,{...N,children:(0,n.jsxs)("div",{className:(0,i.cn)("grid gap-2",c),...w,children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:N.handleSubmit(S),children:[(0,n.jsx)(p.Wi,{control:N.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Email"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{placeholder:"e.g. ".concat(u.o),type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...r,value:null!==(t=r.value)&&void 0!==t?t:""})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:N.control,name:"password1",render:e=>{let{field:t}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{type:"password",...t,value:null!==(r=t.value)&&void 0!==r?r:""})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:N.control,name:"password2",render:e=>{let{field:t}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Confirm Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{type:"password",...t,value:null!==(s=t.value)&&void 0!==s?s:""})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:N.control,name:"invitationCode",render:e=>{let{field:t}=e;return(0,n.jsx)(p.xJ,{className:"hidden",children:(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{type:"hidden",...t})})})}}),(0,n.jsxs)(a.z,{type:"submit",className:(0,i.cn)("mt-2",b),disabled:I,children:[I&&(0,n.jsx)(x.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Register"]})]}),(0,n.jsx)(p.zG,{className:"text-center"})]})})}function b(e){let{step:t,currentStep:r,children:o}=e;return(0,n.jsx)("div",{id:"step-".concat(t),className:(0,i.cn)("border-l border-foreground py-8 pl-12 pr-2",{"step-mask":t!==r,remote:Math.abs(r-t)>1}),children:o})}function w(){let e=(0,o.useRouter)(),[t,r]=(0,s.useState)(1);return(0,s.useEffect)(()=>{var e;1!==t&&(null===(e=document.getElementById("step-".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"}))},[t]),(0,n.jsxs)("div",{className:"admin-register-wrap h-screen w-[600px] overflow-hidden",children:[(0,n.jsxs)(b,{step:1,currentStep:t,children:[(0,n.jsx)("h2",{className:"text-3xl font-semibold tracking-tight first:mt-0",children:"Welcome!"}),(0,n.jsx)("p",{className:"mt-2 leading-7 text-muted-foreground",children:"Your tabby server is live and ready to use. This step by step guide will help you set up your admin account."}),(0,n.jsx)("p",{className:"leading-7 text-muted-foreground",children:"Admin account is the highest level of access in your server. Once created, you can invite other members to join your server."}),(0,n.jsx)(a.z,{className:"mt-5 w-48",onClick:()=>r(2),children:"Start"})]}),(0,n.jsxs)(b,{step:2,currentStep:t,children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold tracking-tight",children:"Create Admin Account"}),(0,n.jsx)("p",{className:"mb-3 leading-7 text-muted-foreground",children:"Please store your password in a safe place. We do not store your password and cannot recover it for you."}),(0,n.jsx)(j,{onSuccess:()=>r(3),buttonClass:"self-start w-48"})]}),(0,n.jsxs)(b,{step:3,currentStep:t,children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold tracking-tight",children:"Congratulations!"}),(0,n.jsx)("p",{className:"leading-7 text-muted-foreground",children:"You have successfully created an admin account."}),(0,n.jsx)("p",{className:"mb-3 leading-7 text-muted-foreground",children:"To start, navigate to the dashboard and invite other members to join your server."}),(0,n.jsx)(a.z,{className:"mt-5 w-48",onClick:()=>e.replace("/"),children:"Go to dashboard"})]})]})}function N(){let e=(0,o.useSearchParams)(),t=e.get("invitationCode")||void 0,r=e.get("isAdmin")||!1;return r?(0,n.jsx)(w,{}):t?(0,n.jsx)(k,{title:"Create an account",description:"Fill form below to create your account",show:!0}):(0,n.jsx)(k,{title:"No invitation code",description:"Please contact your Tabby admin for an invitation code to register"})}function k(e){let{title:t,description:r,show:s}=e,i=(0,o.useSearchParams)(),a=i.get("invitationCode")||void 0;return(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:t}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:r})]}),s&&(0,n.jsx)(j,{invitationCode:a})]})}r(78053)},93023:function(e,t,r){"use strict";r.d(t,{d:function(){return d},z:function(){return l}});var n=r(57437),o=r(2265),s=r(67256),i=r(7404),a=r(39311);let d=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:r,variant:o,size:i,asChild:l=!1,...c}=e,u=l?s.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(d({variant:o,size:i,className:r})),ref:t,...c})});l.displayName="Button"},41315:function(e,t,r){"use strict";r.d(t,{NI:function(){return x},Wi:function(){return u},l0:function(){return l},lX:function(){return p},pf:function(){return v},xJ:function(){return h},zG:function(){return g}});var n=r(57437),o=r(2265),s=r(67256),i=r(61865),a=r(39311),d=r(66672);let l=i.RV,c=o.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},m=()=>{let e=o.useContext(c),t=o.useContext(f),{getFieldState:r,formState:n}=(0,i.Gc)(),s=e.name||"root",a=r(s,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:d}=t;return{id:d,name:s,formItemId:"".concat(d,"-form-item"),formDescriptionId:"".concat(d,"-form-item-description"),formMessageId:"".concat(d,"-form-item-message"),...a}},f=o.createContext({}),h=o.forwardRef((e,t)=>{let{className:r,...s}=e,i=o.useId();return(0,n.jsx)(f.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...s})})});h.displayName="FormItem";let p=o.forwardRef((e,t)=>{let{className:r,required:o,...s}=e,{error:i,formItemId:l}=m();return(0,n.jsx)(d._,{ref:t,className:(0,a.cn)(i&&"text-destructive",o&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:l,...s})});p.displayName="FormLabel";let x=o.forwardRef((e,t)=>{let{...r}=e,{error:o,formItemId:i,formDescriptionId:a,formMessageId:d}=m();return(0,n.jsx)(s.g7,{ref:t,id:i,"aria-describedby":o?"".concat(a," ").concat(d):"".concat(a),"aria-invalid":!!o,...r})});x.displayName="FormControl";let v=o.forwardRef((e,t)=>{let{className:r,...o}=e,{formDescriptionId:s}=m();return(0,n.jsx)("p",{ref:t,id:s,className:(0,a.cn)("text-sm text-muted-foreground",r),...o})});v.displayName="FormDescription";let g=o.forwardRef((e,t)=>{let{className:r,children:o,...s}=e,{error:i,formMessageId:d}=m(),l=i?String(null==i?void 0:i.message):o;return l?(0,n.jsx)("p",{ref:t,id:d,className:(0,a.cn)("text-sm font-medium text-destructive",r),...s,children:l}):null});g.displayName="FormMessage"},51908:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(57437),o=r(2265),s=r(39311);let i=o.forwardRef((e,t)=>{let{className:r,type:o,...i}=e;return(0,n.jsx)("input",{type:o,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},66672:function(e,t,r){"use strict";r.d(t,{_:function(){return l}});var n=r(57437),o=r(2265),s=r(36743),i=r(7404),a=r(39311);let d=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),l=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,a.cn)(d(),r),...o})});l.displayName=s.f.displayName},61985:function(e,t,r){"use strict";r.d(t,{L:function(){return o},o:function(){return n}});let n="name@yourcompany.com",o=20},78053:function(){},9381:function(e,t,r){"use strict";r.d(t,{WV:function(){return a},jH:function(){return d}});var n=r(13428),o=r(2265),s=r(54887),i=r(67256);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,o.forwardRef)((e,r)=>{let{asChild:s,...a}=e,d=s?i.g7:t;return(0,o.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,o.createElement)(d,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function d(e,t){e&&(0,s.flushSync)(()=>e.dispatchEvent(t))}}},function(e){e.O(0,[768,9109,584,5414,7753,4168,2445,2971,7864,1744],function(){return e(e.s=37704)}),_N_E=e.O()}]);