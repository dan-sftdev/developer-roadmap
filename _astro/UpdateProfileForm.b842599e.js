import{h as l,p as E}from"./hooks.module.7cc4e70a.js";import{h as G,a as j}from"./http.82ebf0f1.js";import{p as q}from"./page.c1a8a472.js";import{U as D}from"./UploadProfilePicture.17097e6c.js";import{o as e}from"./jsxRuntime.module.afbf92fe.js";import"./preact.module.7b19fc78.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";function B(){const[i,c]=l(""),[d,P]=l(""),[I,S]=l(""),[u,m]=l(""),[f,p]=l(""),[g,h]=l(""),[b,x]=l(""),[w,a]=l(!1),[y,s]=l(""),[v,N]=l(""),U=async t=>{t.preventDefault(),a(!0),s(""),N("");const{response:r,error:n}=await G("https://api.roadmap.sh/v1-update-profile",{name:i,github:u||void 0,linkedin:g||void 0,twitter:f||void 0,website:b||void 0});if(n||!r){a(!1),s(n?.message||"Something went wrong");return}await k(),N("Profile updated successfully")},k=async()=>{a(!0);const{error:t,response:r}=await j("https://api.roadmap.sh/v1-me");if(t||!r){a(!1),s(t?.message||"Something went wrong");return}const{name:n,email:L,links:o,avatar:$}=r;c(n),S(L),m(o?.github||""),h(o?.linkedin||""),p(o?.twitter||""),x(o?.website||""),P($||""),a(!1)};return E(()=>{k().finally(()=>{q.set("")})},[]),e("div",{children:[e("div",{className:"mb-8 hidden md:block",children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Profile"}),e("p",{className:"mt-2 text-gray-400",children:"Update your profile details below."})]}),e(D,{type:"avatar",label:"Profile picture",avatarUrl:d?`https://dodrc8eu8m09s.cloudfront.net/avatars/${d}`:"/images/default-avatar.png"}),e("form",{className:"mt-4 space-y-4",onSubmit:U,children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"John Doe",value:i,onInput:t=>c(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"email",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Email"}),e("input",{type:"email",name:"email",id:"email",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,disabled:!0,placeholder:"john@example.com",value:I})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"github",className:"text-sm leading-none text-slate-500",children:"Github"}),e("input",{type:"text",name:"github",id:"github",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/username",value:u,onInput:t=>m(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"twitter",className:"text-sm leading-none text-slate-500",children:"Twitter"}),e("input",{type:"text",name:"twitter",id:"twitter",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://twitter.com/username",value:f,onInput:t=>p(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"linkedin",className:"text-sm leading-none text-slate-500",children:"LinkedIn"}),e("input",{type:"text",name:"linkedin",id:"linkedin",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/in/username/",value:g,onInput:t=>h(t.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Website"}),e("input",{type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://example.com",value:b,onInput:t=>x(t.target.value)})]}),y&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:y}),v&&e("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:v}),e("button",{type:"submit",disabled:w,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:w?"Please wait...":"Continue"})]})]})}export{B as UpdateProfileForm};
