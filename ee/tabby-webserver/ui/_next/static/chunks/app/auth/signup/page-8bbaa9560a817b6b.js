(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5271],{37704:function(e,t,r){Promise.resolve().then(r.bind(r,70832))},70832:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(57437),s=r(24033),o=r(2265),i=r(39311),a=r(93023),l=r(38110),d=r(61865),c=r(74578),u=r(61985),m=r(60106),f=r(58001),x=r(7820),p=r(41315),h=r(84168),v=r(51908);let g=(0,m.BX)("\n  mutation register(\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n"),j=c.Ry({email:c.Z_().email("Invalid email address"),password1:c.Z_(),password2:c.Z_(),invitationCode:c.Z_().optional()});function b(e){var t,r,o;let{className:c,invitationCode:m,onSuccess:b,buttonClass:y,...w}=e,N=(0,d.cI)({resolver:(0,l.F)(j),defaultValues:{invitationCode:m}}),C=(0,s.useRouter)(),I=(0,f.zq)(),{isSubmitting:S}=N.formState,k=(0,x.D)(g,{async onCompleted(e){await I(null==e?void 0:e.register)&&(b?b():C.replace("/"))},form:N});return(0,n.jsx)(p.l0,{...N,children:(0,n.jsxs)("div",{className:(0,i.cn)("grid gap-2",c),...w,children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:N.handleSubmit(k),children:[(0,n.jsx)(p.Wi,{control:N.control,name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Email"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{placeholder:"e.g. ".concat(u.o),type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",...r,value:null!==(t=r.value)&&void 0!==t?t:""})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:N.control,name:"password1",render:e=>{let{field:t}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{type:"password",...t,value:null!==(r=t.value)&&void 0!==r?r:""})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:N.control,name:"password2",render:e=>{let{field:t}=e;return(0,n.jsxs)(p.xJ,{children:[(0,n.jsx)(p.lX,{children:"Confirm Password"}),(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{type:"password",...t,value:null!==(o=t.value)&&void 0!==o?o:""})}),(0,n.jsx)(p.zG,{})]})}}),(0,n.jsx)(p.Wi,{control:N.control,name:"invitationCode",render:e=>{let{field:t}=e;return(0,n.jsx)(p.xJ,{className:"hidden",children:(0,n.jsx)(p.NI,{children:(0,n.jsx)(v.I,{type:"hidden",...t})})})}}),(0,n.jsxs)(a.z,{type:"submit",className:(0,i.cn)("mt-2",y),disabled:S,children:[S&&(0,n.jsx)(h.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Register"]})]}),(0,n.jsx)(p.zG,{className:"text-center"})]})})}function y(e){let{step:t,currentStep:r,children:s}=e;return(0,n.jsx)("div",{id:"step-".concat(t),className:(0,i.cn)("border-l border-foreground py-8 pl-12 pr-2",{"step-mask":t!==r,remote:Math.abs(r-t)>1}),children:s})}function w(){let e=(0,s.useRouter)(),[t,r]=(0,o.useState)(1);return(0,o.useEffect)(()=>{var e;1!==t&&(null===(e=document.getElementById("step-".concat(t)))||void 0===e||e.scrollIntoView({behavior:"smooth"}))},[t]),(0,n.jsxs)("div",{className:"admin-register-wrap h-screen w-[600px] overflow-hidden",children:[(0,n.jsxs)(y,{step:1,currentStep:t,children:[(0,n.jsx)("h2",{className:"text-3xl font-semibold tracking-tight first:mt-0",children:"Welcome!"}),(0,n.jsx)("p",{className:"mt-2 leading-7 text-muted-foreground",children:"Your tabby server is live and ready to use. This step by step guide will help you set up your admin account."}),(0,n.jsx)("p",{className:"leading-7 text-muted-foreground",children:"Admin account is the highest level of access in your server. Once created, you can invite other members to join your server."}),(0,n.jsx)(a.z,{className:"mt-5 w-48",onClick:()=>r(2),children:"Start"})]}),(0,n.jsxs)(y,{step:2,currentStep:t,children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold tracking-tight",children:"Create Admin Account"}),(0,n.jsx)("p",{className:"mb-3 leading-7 text-muted-foreground",children:"Please store your password in a safe place. We do not store your password and cannot recover it for you."}),(0,n.jsx)(b,{onSuccess:()=>r(3),buttonClass:"self-start w-48"})]}),(0,n.jsxs)(y,{step:3,currentStep:t,children:[(0,n.jsx)("h3",{className:"text-2xl font-semibold tracking-tight",children:"Congratulations!"}),(0,n.jsx)("p",{className:"leading-7 text-muted-foreground",children:"You have successfully created an admin account."}),(0,n.jsx)("p",{className:"mb-3 leading-7 text-muted-foreground",children:"To start, navigate to the dashboard and invite other members to join your server."}),(0,n.jsx)(a.z,{className:"mt-5 w-48",onClick:()=>e.replace("/"),children:"Go to dashboard"})]})]})}function N(){let e=(0,s.useSearchParams)(),t=e.get("invitationCode")||void 0,r=e.get("isAdmin")||!1;return r?(0,n.jsx)(w,{}):t?(0,n.jsx)(C,{title:"Create an account",description:"Fill form below to create your account",show:!0}):(0,n.jsx)(C,{title:"No invitation code",description:"Please contact your Tabby admin for an invitation code to register"})}function C(e){let{title:t,description:r,show:o}=e,i=(0,s.useSearchParams)(),a=i.get("invitationCode")||void 0;return(0,n.jsxs)("div",{className:"w-[350px] space-y-6",children:[(0,n.jsxs)("div",{className:"flex flex-col space-y-2 text-center",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold tracking-tight",children:t}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:r})]}),o&&(0,n.jsx)(b,{invitationCode:a})]})}r(78053)},93023:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return d}});var n=r(57437),s=r(2265),o=r(67256),i=r(7404),a=r(39311);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,t)=>{let{className:r,variant:s,size:i,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,n.jsx)(u,{className:(0,a.cn)(l({variant:s,size:i,className:r})),ref:t,...c})});d.displayName="Button"},41315:function(e,t,r){"use strict";r.d(t,{NI:function(){return h},Wi:function(){return u},l0:function(){return d},lX:function(){return p},pf:function(){return v},xJ:function(){return x},zG:function(){return g}});var n=r(57437),s=r(2265),o=r(67256),i=r(61865),a=r(39311),l=r(66672);let d=i.RV,c=s.createContext({}),u=e=>{let{...t}=e;return(0,n.jsx)(c.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},m=()=>{let e=s.useContext(c),t=s.useContext(f),{getFieldState:r,formState:n}=(0,i.Gc)(),o=e.name||"root",a=r(o,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:l}=t;return{id:l,name:o,formItemId:"".concat(l,"-form-item"),formDescriptionId:"".concat(l,"-form-item-description"),formMessageId:"".concat(l,"-form-item-message"),...a}},f=s.createContext({}),x=s.forwardRef((e,t)=>{let{className:r,...o}=e,i=s.useId();return(0,n.jsx)(f.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,a.cn)("space-y-2",r),...o})})});x.displayName="FormItem";let p=s.forwardRef((e,t)=>{let{className:r,required:s,...o}=e,{error:i,formItemId:d}=m();return(0,n.jsx)(l._,{ref:t,className:(0,a.cn)(i&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',r),htmlFor:d,...o})});p.displayName="FormLabel";let h=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:i,formDescriptionId:a,formMessageId:l}=m();return(0,n.jsx)(o.g7,{ref:t,id:i,"aria-describedby":s?"".concat(a," ").concat(l):"".concat(a),"aria-invalid":!!s,...r})});h.displayName="FormControl";let v=s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:o}=m();return(0,n.jsx)("p",{ref:t,id:o,className:(0,a.cn)("text-sm text-muted-foreground",r),...s})});v.displayName="FormDescription";let g=s.forwardRef((e,t)=>{let{className:r,children:s,...o}=e,{error:i,formMessageId:l}=m(),d=i?String(null==i?void 0:i.message):s;return d?(0,n.jsx)("p",{ref:t,id:l,className:(0,a.cn)("text-sm font-medium text-destructive",r),...o,children:d}):null});g.displayName="FormMessage"},51908:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(57437),s=r(2265),o=r(39311);let i=s.forwardRef((e,t)=>{let{className:r,type:s,...i}=e;return(0,n.jsx)("input",{type:s,className:(0,o.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},66672:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var n=r(57437),s=r(2265),o=r(36743),i=r(7404),a=r(39311);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,n.jsx)(o.f,{ref:t,className:(0,a.cn)(l(),r),...s})});d.displayName=o.f.displayName},61985:function(e,t,r){"use strict";r.d(t,{L:function(){return s},o:function(){return n}});let n="name@yourcompany.com",s=20},78053:function(){},9381:function(e,t,r){"use strict";r.d(t,{WV:function(){return a},jH:function(){return l}});var n=r(13428),s=r(2265),o=r(54887),i=r(67256);let a=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,s.forwardRef)((e,r)=>{let{asChild:o,...a}=e,l=o?i.g7:t;return(0,s.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,s.createElement)(l,(0,n.Z)({},a,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function l(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}}},function(e){e.O(0,[768,9109,584,7552,7753,4168,2445,2971,7864,1744],function(){return e(e.s=37704)}),_N_E=e.O()}]);