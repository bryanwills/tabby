(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9464],{74975:function(e,t,n){Promise.resolve().then(n.bind(n,48973))},48973:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(36164),a=n(3546),s=n(11978),l=n(2578),i=n(40055),o=n(21808),d=n(18500),c=n(24449),u=n(11634),f=n(70410),m=n(63795),x=n(31458),p=n(79972),v=n(30220),h=n(81565),g=n(57830),j=n(99047),N=n(6230),b=n(90379),y=n(55137),w=n(14522),R=n(39231),C=n(43240);let k=(0,C.BX)("\n  mutation UpdateIntegratedRepositoryActive($id: ID!, $active: Boolean!) {\n    updateIntegratedRepositoryActive(id: $id, active: $active)\n  }\n");var I=n(84381),S=n(5493),_=n(23782),z=n(1544),Y=n(36065),A=n(98150),D=n(84942);let O=_.Ry({id:_.Z_()});function P(e){let{onCreated:t,onCancel:n,repositories:s,providerStatus:l,fetchingRepos:i}=e,[o,c]=a.useState(!1),f=(0,S.cI)({resolver:(0,I.F)(O)}),m=a.useRef(null),{isSubmitting:p}=f.formState,v=a.useMemo(()=>{switch(l){case d.Ij.Pending:return"Awaiting the next data synchronization";case d.Ij.Failed:return"Synchronizing error. Please check if the access token is still valid";default:return"No repository found"}},[l]),g=(0,u.D)(k,{form:f}),j=()=>{requestAnimationFrame(()=>{m.current&&(m.current.scrollTop=0)})},N=()=>{j()};return(0,r.jsx)(A.l0,{...f,children:(0,r.jsxs)("div",{className:"grid gap-2",children:[(0,r.jsxs)("form",{className:"grid gap-6",onSubmit:f.handleSubmit(e=>{let n=e.id;return g({id:e.id,active:!0}).then(e=>{var r;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.updateIntegratedRepositoryActive)&&(f.reset({id:void 0}),null==t||t(n))})}),children:[(0,r.jsx)(A.Wi,{control:f.control,name:"id",render:e=>{var t,n;let{field:a}=e;return(0,r.jsxs)(A.xJ,{className:"flex flex-col",children:[(0,r.jsxs)(D.J2,{open:o,onOpenChange:c,children:[(0,r.jsx)(D.xo,{asChild:!0,children:(0,r.jsx)(A.NI,{children:(0,r.jsxs)(x.z,{variant:"outline",role:"combobox",className:(0,z.cn)("justify-between font-normal",!a.value&&"text-muted-foreground"),children:[a.value?null==s?void 0:null===(n=s.find(e=>e.node.id===a.value))||void 0===n?void 0:null===(t=n.node)||void 0===t?void 0:t.gitUrl:"Select repository",(0,r.jsx)(h.IconChevronUpDown,{})]})})}),(0,r.jsx)(D.yk,{className:"w-[var(--radix-popover-trigger-width)] p-0",align:"start",side:"bottom",children:(0,r.jsxs)(Y.mY,{className:"transition-all",children:[(0,r.jsx)(Y.sZ,{placeholder:"Search repository...",onValueChange:N}),(0,r.jsxs)(Y.e8,{className:"max-h-[30vh]",ref:m,children:[(0,r.jsx)(Y.rb,{children:i?(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(h.IconSpinner,{className:"h-6 w-6"})}):v}),(0,r.jsx)(Y.fu,{children:l!==d.Ij.Pending&&(null==s?void 0:s.map(e=>(0,r.jsxs)(Y.di,{onSelect:()=>{f.setValue("id",e.node.id),c(!1)},children:[(0,r.jsx)(h.IconCheck,{className:(0,z.cn)("mr-2",e.node.id===a.value?"opacity-100":"opacity-0")}),e.node.gitUrl]},e.node.id)))})]})]})})]}),(0,r.jsx)(A.zG,{})]})}}),(0,r.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,r.jsx)(x.z,{type:"button",variant:"ghost",disabled:p,onClick:n,children:"Cancel"}),(0,r.jsx)(x.z,{type:"submit",disabled:p,children:"Add"})]})]}),(0,r.jsx)(A.zG,{className:"text-center"})]})})}var T=n(85156);let E=(0,C.BX)("\n  mutation UpdateIntegration($input: UpdateIntegrationInput!) {\n    updateIntegration(input: $input)\n  }\n"),J=(0,C.BX)("\n  mutation DeleteIntegration($id: ID!, $kind: IntegrationKind!) {\n    deleteIntegration(id: $id, kind: $kind)\n  }\n"),V=e=>{let{defaultValues:t,onSuccess:n,onDelete:a,onUpdate:s,id:i,kind:o}=e,d=(0,T.fB)(!1,o,t),c=(0,u.D)(J),f=(0,u.D)(E,{form:d}),m=async e=>{var t;let r=await f({input:{id:i,...e,kind:o}});(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.updateIntegration)&&(l.A.success("Updated provider successfully"),null==d||d.reset(null==d?void 0:d.getValues()),null==n||n(),null==s||s())},x=async()=>{var e,t;let n=await c({id:i,kind:o});(null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.deleteIntegration)?null==a||a():l.A.error((null==n?void 0:null===(t=n.error)||void 0===t?void 0:t.message)||"Failed to delete provider")};return(0,r.jsx)(T.Kb,{onSubmit:m,onDelete:x,deletable:!0,cancleable:!1,form:d,isNew:!1})},$=o.L8,L=e=>{var t,n;let{providerStatus:s,providerId:o,kind:d}=e,[m,p]=a.useState(1),{repositories:g,setRepositories:b,isAllLoaded:R}=function(e,t){let[n,r]=(0,a.useState)({ids:[e],first:$,active:!1,kind:t}),[s,l]=(0,a.useState)([]),[o,d]=(0,a.useState)(!e),[{data:c,fetching:u}]=(0,i.aM)({query:f.ts,variables:n,pause:!e});return(0,a.useEffect)(()=>{if(!o&&!u&&c){var t,n;let a=null==c?void 0:null===(t=c.integratedRepositories)||void 0===t?void 0:t.pageInfo,i=[...s];l(i.concat(null==c?void 0:null===(n=c.integratedRepositories)||void 0===n?void 0:n.edges)),(null==a?void 0:a.hasNextPage)?r({ids:[e],first:$,after:a.endCursor,active:!1}):d(!0)}},[u,c]),{repositories:s,setRepositories:l,isAllLoaded:o}}(o,d),C=e=>u.L.query(f.ts,e).toPromise(),I=async(e,t)=>{var n;let r=await C({ids:[o],first:$,after:t,active:!0,kind:d}),a=null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.integratedRepositories,s=null==a?void 0:a.pageInfo;return e-1>0&&(null==s?void 0:s.hasNextPage)&&(null==s?void 0:s.endCursor)?I(e-1,s.endCursor):null==r?void 0:r.data},[S,_]=a.useState(),[z,Y]=a.useState(!0),[A,D]=a.useState([]),O=null==S?void 0:null===(t=S.integratedRepositories)||void 0===t?void 0:t.edges,T=null==S?void 0:null===(n=S.integratedRepositories)||void 0===n?void 0:n.pageInfo,E=(0,u.D)(k,{onError(e){l.A.error(e.message||"Failed to delete")}}),J=(0,u.D)(w.C),V=async(e,t)=>{E({id:e.node.id,active:!1}).then(n=>{var r;if(null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.updateIntegratedRepositoryActive){b(F([...g,e]));let n=t?m-1:m;L(n||1)}})},L=async e=>{try{Y(!0);let t=await I(e);_(t),p(e)}catch(e){}finally{Y(!1)}},U=(0,c.S)(e=>{D([]),L(e)},3e3),[Z,B]=a.useState(!1),F=e=>(null==e?void 0:e.length)?e.sort((e,t)=>{var n;return null===(n=e.node.displayName)||void 0===n?void 0:n.localeCompare(t.node.displayName)}):e,M=e=>{U.cancel(),D([]),L(e)},H=e=>J({command:e}).then(e=>{var t,n;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.triggerJobRun)?(l.A.success("The job has been triggered successfully, it may take a few minutes to process."),M(m)):l.A.error((null==e?void 0:null===(n=e.error)||void 0===n?void 0:n.message)||"Failed to trigger job")});return a.useEffect(()=>(L(1),()=>U.cancel()),[]),(0,r.jsxs)(N.Z,{loading:z,children:[(0,r.jsxs)(j.iA,{className:"table-fixed",children:[(0,r.jsx)(j.xD,{children:(0,r.jsxs)(j.SC,{children:[(0,r.jsx)(j.ss,{className:"w-[25%]",children:"Name"}),(0,r.jsx)(j.ss,{className:"w-[40%]",children:"URL"}),(0,r.jsx)(j.ss,{children:"Job"}),(0,r.jsx)(j.ss,{className:"w-[100px] text-right",children:(0,r.jsxs)(v.Vq,{open:Z,onOpenChange:B,children:[(0,r.jsxs)(v.cZ,{className:"top-[20vh]",children:[(0,r.jsxs)(v.fK,{className:"gap-3",children:[(0,r.jsx)(v.$N,{children:"Add new repository"}),(0,r.jsx)(v.Be,{children:"Add new repository from this provider"})]}),(0,r.jsx)(P,{onCancel:()=>B(!1),onCreated:e=>{let t=null==g?void 0:g.find(t=>{var n;return(null==t?void 0:null===(n=t.node)||void 0===n?void 0:n.id)===e});t&&(D([t,...A]),b(t=>F(t.filter(t=>t.node.id!==e))),U.run(m)),B(!1)},repositories:g,kind:d,providerStatus:s,fetchingRepos:!R})]}),(0,r.jsx)(v.hg,{asChild:!0,children:(0,r.jsx)(x.z,{variant:"ghost",size:"icon",children:(0,r.jsx)(h.IconPlus,{})})})]})})]})}),(0,r.jsx)(j.RM,{children:(null==O?void 0:O.length)||(null==A?void 0:A.length)?(0,r.jsxs)(r.Fragment,{children:[null==A?void 0:A.map(e=>(0,r.jsxs)(j.SC,{className:"!bg-muted/80",children:[(0,r.jsx)(j.pj,{className:"break-all lg:break-words",children:e.node.displayName}),(0,r.jsx)(j.pj,{className:"break-all lg:break-words",children:e.node.gitUrl}),(0,r.jsx)(j.pj,{}),(0,r.jsx)(j.pj,{className:"flex justify-end",children:(0,r.jsx)("div",{className:(0,x.d)({variant:"ghost",size:"icon"}),children:(0,r.jsx)(h.IconSpinner,{})})})]},e.node.id)),null==O?void 0:O.map(e=>(0,r.jsxs)(j.SC,{children:[(0,r.jsx)(j.pj,{className:"break-all lg:break-words",children:e.node.displayName}),(0,r.jsx)(j.pj,{className:"break-all lg:break-words",children:e.node.gitUrl}),(0,r.jsx)(j.pj,{children:(0,r.jsx)(y._,{jobInfo:e.node.jobInfo,onTrigger:()=>H(e.node.jobInfo.command)})}),(0,r.jsx)(j.pj,{className:"text-right",children:(0,r.jsx)(x.z,{size:"icon",variant:"hover-destructive",onClick:t=>V(e,(null==O?void 0:O.length)===1),children:(0,r.jsx)(h.IconTrash,{})})})]},e.node.id))]}):(0,r.jsx)(j.SC,{children:(0,r.jsx)(j.pj,{colSpan:4,className:"h-[100px] text-center",children:"No repositories"})})})]}),(m>1||(null==T?void 0:T.hasNextPage))&&(0,r.jsxs)("div",{className:"mt-2 flex justify-end",children:[(0,r.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:[" ","Page ",m]}),(0,r.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,r.jsx)(x.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:z||1===m,onClick:e=>{M(m-1)},children:(0,r.jsx)(h.IconChevronLeft,{className:"h-4 w-4"})}),(0,r.jsx)(x.z,{variant:"outline",className:"h-8 w-8 p-0",disabled:z||!(null==T?void 0:T.hasNextPage),onClick:e=>{M(m+1)},children:(0,r.jsx)(h.IconChevronRight,{className:"h-4 w-4"})})]})]})]})};var U=()=>{var e,t,n,a,l;let o=(0,s.useSearchParams)(),c=(0,R.A)(),u=(0,s.useRouter)(),v=null!==(l=null===(e=o.get("id"))||void 0===e?void 0:e.toString())&&void 0!==l?l:"",[{data:j,fetching:y},w]=(0,i.aM)({query:f.kb,variables:{ids:[v],kind:c},pause:!v||!c}),C=null==j?void 0:null===(a=j.integrations)||void 0===a?void 0:null===(n=a.edges)||void 0===n?void 0:null===(t=n[0])||void 0===t?void 0:t.node;return v&&(!v||y||C)?(0,r.jsxs)(N.Z,{loading:y,children:[(0,r.jsxs)(p.ll,{className:"flex items-center gap-4",children:[(0,r.jsxs)("div",{className:"-ml-2.5 flex items-center",children:[(0,r.jsx)(x.z,{onClick:()=>u.back(),variant:"ghost",className:"h-6 px-1",children:(0,r.jsx)(h.IconChevronLeft,{className:"h-5 w-5"})}),(0,r.jsx)("span",{className:"ml-1",children:null==C?void 0:C.displayName})]}),(0,r.jsx)("div",{className:"flex items-center gap-2 text-base",children:(0,r.jsx)("div",{className:"ml-1",children:C&&function(e){switch(e){case d.Ij.Ready:return(0,r.jsx)(m.C,{variant:"successful",children:"Ready"});case d.Ij.Failed:return(0,r.jsx)(m.C,{variant:"destructive",children:"Error"});case d.Ij.Pending:return(0,r.jsx)(m.C,{children:"Pending"})}}(C.status)})})]}),(0,r.jsx)(p.aY,{className:"mt-8",children:(0,r.jsx)(N.Z,{loading:y,fallback:(0,r.jsx)(b.cg,{}),children:(0,r.jsx)(V,{defaultValues:C,onDelete:()=>{u.back()},onUpdate:()=>{w()},id:v,kind:c})})}),(0,r.jsxs)(g.ScrollArea,{children:[(0,r.jsx)(L,{kind:c,providerStatus:null==C?void 0:C.status,providerId:v}),(0,r.jsx)(g.ScrollBar,{orientation:"horizontal"})]})]}):(0,r.jsx)("div",{className:"flex h-[250px] w-full items-center justify-center rounded-lg border",children:"Provider not found"})}},55137:function(e,t,n){"use strict";n.d(t,{_:function(){return v}});var r=n(36164),a=n(3546),s=n(70652),l=n.n(s),i=n(11978),o=n(99092),d=n.n(o),c=n(1544),u=n(31458),f=n(81565),m=n(29);function x(e){let{onTrigger:t,isPending:n,jobLink:s}=e,l=(0,i.useRouter)(),[o,d]=a.useState(!1);return(0,r.jsxs)(m.u,{children:[(0,r.jsx)(m.aJ,{asChild:!0,children:(0,r.jsx)(u.z,{size:"icon",variant:"ghost",onClick:()=>{if(n){s&&l.push(s);return}let e=t();return e&&e instanceof Promise&&(d(!0),e.finally(()=>d(!1))),e},disabled:o,children:o||n?(0,r.jsx)(f.IconSpinner,{}):(0,r.jsx)(f.IconCirclePlay,{strokeWidth:1,className:"h-5 w-5"})})}),(0,r.jsx)(m._v,{children:(0,r.jsx)("p",{children:"Run"})})]})}function p(e){let{jobInfo:t,className:n}=e;return(null==t?void 0:t.lastJobRun)?(0,r.jsx)(l(),{href:"/jobs/detail?id=".concat(t.lastJobRun.id),className:(0,c.cn)("flex items-center gap-1 underline hover:text-foreground/50",n),children:d()(t.lastJobRun.createdAt).format("YYYY-MM-DD HH:mm")}):null}function v(e){var t;let{jobInfo:n,onTrigger:a,className:s}=e,l=!!(null==n?void 0:n.lastJobRun)&&null===n.lastJobRun.exitCode,i=(null==n?void 0:null===(t=n.lastJobRun)||void 0===t?void 0:t.id)?"/jobs/detail?id=".concat(n.lastJobRun.id):void 0;return(0,r.jsxs)("div",{className:(0,c.cn)("flex items-center gap-1",s),children:[(0,r.jsx)(p,{jobInfo:n,className:"hidden lg:block"}),(0,r.jsx)(x,{onTrigger:a,isPending:l,jobLink:i})]})}},14522:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(43240);let a=(0,r.BX)("\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n")},6230:function(e,t,n){"use strict";var r=n(36164),a=n(3546),s=n(24449),l=n(90379);t.Z=e=>{let{loading:t,fallback:n,delay:i,children:o}=e,[d,c]=a.useState(!t),[u]=(0,s.n)(d,null!=i?i:200);return(a.useEffect(()=>{t||d||c(!0)},[t]),u)?o:n||(0,r.jsx)(l.cg,{})}},90379:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return l},tB:function(){return i}});var r=n(36164),a=n(1544),s=n(3448);let l=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,a.cn)("space-y-3",t),...n,children:[(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-full"})]})},i=e=>{let{className:t,...n}=e;return(0,r.jsx)(s.O,{className:(0,a.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,r.jsxs)("div",{className:(0,a.cn)("flex flex-col gap-3",t),...n,children:[(0,r.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(s.O,{className:"h-4 w-full"}),(0,r.jsx)(s.O,{className:"h-4 w-[20%]"}),(0,r.jsx)(s.O,{className:"h-4 w-full"})]})}},63795:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var r=n(36164);n(3546);var a=n(14375),s=n(1544);let l=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:t,variant:n,...a}=e;return(0,r.jsx)("div",{className:(0,s.cn)(l({variant:n}),t),...a})}},79972:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var r=n(36164),a=n(3546),s=n(1544);let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...a})});l.displayName="Card";let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...a})});i.displayName="CardHeader";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",n),...a})});o.displayName="CardTitle";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",n),...a})});d.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",n),...a})});c.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",n),...a})});u.displayName="CardFooter"},36065:function(e,t,n){"use strict";n.d(t,{di:function(){return x},e8:function(){return c},fu:function(){return f},mY:function(){return o},rb:function(){return u},sZ:function(){return d},zz:function(){return m}});var r=n(36164),a=n(3546),s=n(53241),l=n(93170),i=n(1544);n(30220);let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.mY,{ref:t,className:(0,i.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",n),...a})});o.displayName=s.mY.displayName;let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,r.jsx)(l.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,r.jsx)(s.mY.Input,{ref:t,className:(0,i.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",n),...a})]})});d.displayName=s.mY.Input.displayName;let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.mY.List,{ref:t,className:(0,i.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",n),...a})});c.displayName=s.mY.List.displayName;let u=a.forwardRef((e,t)=>(0,r.jsx)(s.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));u.displayName=s.mY.Empty.displayName;let f=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.mY.Group,{ref:t,className:(0,i.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",n),...a})});f.displayName=s.mY.Group.displayName;let m=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.mY.Separator,{ref:t,className:(0,i.cn)("-mx-1 h-px bg-border",n),...a})});m.displayName=s.mY.Separator.displayName;let x=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.mY.Item,{ref:t,className:(0,i.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-selected:bg-accent aria-selected:text-accent-foreground",n),...a})});x.displayName=s.mY.Item.displayName},30220:function(e,t,n){"use strict";n.d(t,{$N:function(){return p},Be:function(){return v},Vq:function(){return o},cN:function(){return x},cZ:function(){return f},fK:function(){return m},hg:function(){return d}});var r=n(36164),a=n(3546),s=n(4318),l=n(1663),i=n(1544);let o=s.fC,d=s.xz,c=s.h_;s.x8;let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.aV,{ref:t,className:(0,i.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...a})});u.displayName=s.aV.displayName;let f=a.forwardRef((e,t)=>{let{className:n,children:a,...o}=e;return(0,r.jsxs)(c,{children:[(0,r.jsx)(u,{}),(0,r.jsxs)(s.VY,{ref:t,className:(0,i.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...o,children:[a,(0,r.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(l.Z,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=s.VY.displayName;let m=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};m.displayName="DialogHeader";let x=e=>{let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};x.displayName="DialogFooter";let p=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.Dx,{ref:t,className:(0,i.cn)("text-lg font-semibold leading-none tracking-tight",n),...a})});p.displayName=s.Dx.displayName;let v=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)(s.dk,{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",n),...a})});v.displayName=s.dk.displayName},84942:function(e,t,n){"use strict";n.d(t,{J2:function(){return i},i9:function(){return c},tW:function(){return u},xo:function(){return o},xp:function(){return d},yk:function(){return f}});var r=n(36164),a=n(3546),s=n(83299),l=n(1544);let i=s.fC,o=s.xz,d=s.x8,c=s.h_,u=s.ee,f=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...i}=e;return(0,r.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})});f.displayName=s.VY.displayName},57830:function(e,t,n){"use strict";n.r(t),n.d(t,{ScrollArea:function(){return i},ScrollBar:function(){return o}});var r=n(36164),a=n(3546),s=n(50778),l=n(1544);let i=a.forwardRef((e,t)=>{let{className:n,children:a,...i}=e;return(0,r.jsxs)(s.fC,{ref:t,className:(0,l.cn)("relative overflow-hidden",n),...i,children:[(0,r.jsx)(s.l_,{className:"h-full w-full rounded-[inherit] [&>div]:!block",children:a}),(0,r.jsx)(o,{}),(0,r.jsx)(s.Ns,{})]})});i.displayName=s.fC.displayName;let o=a.forwardRef((e,t)=>{let{className:n,orientation:a="vertical",...i}=e;return(0,r.jsx)(s.gb,{ref:t,orientation:a,className:(0,l.cn)("flex touch-none select-none transition-colors","vertical"===a&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===a&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",n),...i,children:(0,r.jsx)(s.q4,{className:"relative flex-1 rounded-full bg-border"})})});o.displayName=s.gb.displayName},3448:function(e,t,n){"use strict";n.d(t,{O:function(){return s}});var r=n(36164),a=n(1544);function s(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,a.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},99047:function(e,t,n){"use strict";n.d(t,{RM:function(){return o},SC:function(){return c},iA:function(){return l},pj:function(){return f},ss:function(){return u},xD:function(){return i}});var r=n(36164),a=n(3546),s=n(1544);let l=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("table",{ref:t,className:(0,s.cn)("w-full caption-bottom text-sm",n),...a})});l.displayName="Table";let i=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("thead",{ref:t,className:(0,s.cn)("[&_tr]:border-b",n),...a})});i.displayName="TableHeader";let o=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("tbody",{ref:t,className:(0,s.cn)("[&_tr:last-child]:border-0",n),...a})});o.displayName="TableBody";let d=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("tfoot",{ref:t,className:(0,s.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",n),...a})});d.displayName="TableFooter";let c=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("tr",{ref:t,className:(0,s.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",n),...a})});c.displayName="TableRow";let u=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("th",{ref:t,className:(0,s.cn)("h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",n),...a})});u.displayName="TableHead";let f=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("td",{ref:t,className:(0,s.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0",n),...a})});f.displayName="TableCell";let m=a.forwardRef((e,t)=>{let{className:n,...a}=e;return(0,r.jsx)("caption",{ref:t,className:(0,s.cn)("mt-4 text-sm text-muted-foreground",n),...a})});m.displayName="TableCaption"},29:function(e,t,n){"use strict";n.d(t,{_v:function(){return c},aJ:function(){return d},pn:function(){return i},u:function(){return o}});var r=n(36164),a=n(3546),s=n(44421),l=n(1544);let i=s.zt,o=s.fC,d=s.xz,c=a.forwardRef((e,t)=>{let{className:n,sideOffset:a=4,...i}=e;return(0,r.jsx)(s.VY,{ref:t,sideOffset:a,className:(0,l.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs font-medium text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1",n),...i})});c.displayName=s.VY.displayName},21808:function(e,t,n){"use strict";n.d(t,{$6:function(){return s},L8:function(){return a},o0:function(){return r}});let r="name@yourcompany.com",a=20,s={DEMO_AUTO_LOGIN:"_tabby_demo_autologin",SEARCH_INITIAL_MSG:"_tabby_search_initial_msg",SEARCH_INITIAL_CONTEXTS:"_tabby_search_initial_contexts"}},24449:function(e,t,n){"use strict";n.d(t,{S:function(){return i},n:function(){return o}});var r=n(3546),a=n(45391),s=n(16784);let l=e=>{let t=(0,s.d)(e);r.useEffect(()=>()=>{t.current()},[])};function i(e,t,n){let i=(0,s.d)(e),o=r.useMemo(()=>(0,a.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.current(...t)},t,n),[]);return l(()=>{var e;null==n||null===(e=n.onUnmount)||void 0===e||e.call(n,o),o.cancel()}),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[a,s]=r.useState(e),{run:l}=i(()=>{s(e)},t,n);return r.useEffect(()=>{l()},[e]),[a,s]}},16784:function(e,t,n){"use strict";n.d(t,{d:function(){return a}});var r=n(3546);function a(e){let t=r.useRef(e);return t.current=e,t}}},function(e){e.O(0,[7565,1386,5498,1058,4007,8487,1283,3449,2578,9421,240,2287,4421,7070,3894,3299,778,4318,2823,1544,1565,410,3396,5156,3375,5289,1744],function(){return e(e.s=74975)}),_N_E=e.O()}]);