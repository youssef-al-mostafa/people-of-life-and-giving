import{r as m,j as t,L as k,S as w}from"./app-Czs23nQE.js";import{A as P}from"./app-layout-r9Mq45zs.js";import{z as r}from"./index-C4bLmoCR.js";import{c as i}from"./createLucideIcon-A6yz2IB7.js";import{M as N}from"./mail-B9xw2Osf.js";import{L}from"./loader-circle-BOCeIQJX.js";import"./utils-DExUAd-r.js";import"./button-DqmY0HPj.js";import"./index-CnRgvBdN.js";import"./index-tjxkJMb2.js";import"./index-BIAITH7B.js";import"./index-B4FefWCI.js";import"./app-logo-icon-CYJroyvk.js";import"./users-BoW8H2VN.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],A=i("Facebook",S);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],_=i("Instagram",E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],b=i("Phone",F);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],z=i("Twitter",R);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],T=i("Youtube",M),x=r.object({facebook:r.string().url("Please enter a valid Facebook URL").optional().or(r.literal("")),instagram:r.string().url("Please enter a valid Instagram URL").optional().or(r.literal("")),youtube:r.string().url("Please enter a valid YouTube URL").optional().or(r.literal("")),twitter:r.string().url("Please enter a valid X (Twitter) URL").optional().or(r.literal("")),email:r.string().email("Please enter a valid email address").optional().or(r.literal("")),primaryPhone:r.string().regex(/^\+[0-9]{10,15}$/,"Phone must start with + and contain 10-15 digits").optional().or(r.literal("")),secondaryPhone:r.string().regex(/^\+[0-9]{10,15}$/,"Phone must start with + and contain 10-15 digits").optional().or(r.literal(""))}),U=[{id:"facebook",icon:A,type:"url",placeholder:"Facebook Account URL",required:!1},{id:"instagram",icon:_,type:"url",placeholder:"Instagram Account URL"},{id:"youtube",icon:T,type:"url",placeholder:"YouTube Channel URL"},{id:"twitter",icon:z,type:"url",placeholder:"X (Twitter) Account URL"},{id:"email",icon:N,type:"email",placeholder:"Email Address",required:!1},{id:"primaryPhone",icon:b,type:"tel",placeholder:"Primary Phone Number (+1234567890)",required:!1},{id:"secondaryPhone",icon:b,type:"tel",placeholder:"Secondary Phone Number (+1234567890)"}],I=[{title:"General",href:route("general.index")}],Q=({generalSettings:l})=>{const[c,d]=m.useState({}),[p,f]=m.useTransition(),[u,h]=m.useState(l||{facebook:"",instagram:"",youtube:"",twitter:"",email:"",primaryPhone:"",secondaryPhone:""});m.useEffect(()=>{l&&h(l)},[l]);const g=(e,o)=>{h(a=>({...a,[e]:o})),y(e,o)},y=(e,o)=>{const a=r.object({[e]:x.shape[e]});try{return a.parse({[e]:o}),d(n=>{const s={...n};return delete s[e],s}),!0}catch(n){return n instanceof r.ZodError&&d(s=>({...s,[e]:n.errors[0].message})),!1}},v=e=>{e.preventDefault();try{x.parse(u),f(()=>{w.post(route("general.store"),u,{preserveScroll:!0,preserveState:!0,onSuccess:()=>{},onError:o=>{d(o)}})})}catch(o){if(o instanceof r.ZodError){const a=o.errors.reduce((n,s)=>{const j=s.path[0];return n[j]=s.message,n},{});d(a)}}};return t.jsxs(P,{breadcrumbs:I,children:[t.jsx(k,{title:"General Settings"}),t.jsx("div",{className:"container mx-auto w-fit mt-8 flex flex-col",children:t.jsxs("form",{onSubmit:v,className:"flex flex-col",children:[U.map(e=>{const o=e.icon;return t.jsxs("div",{className:"mb-4",children:[t.jsx("div",{className:"relative",children:t.jsxs("div",{className:`
                    input bg-white border-2 rounded-2xl w-[30vw] h-12
                    ${c[e.id]?"border-red-500":"border-black"}
                  `,children:[t.jsx(o,{size:36}),t.jsx("input",{id:e.id,type:e.type,className:"grow border-black focus:outline-none",placeholder:e.placeholder,value:u[e.id],onChange:a=>g(e.id,a.target.value),onBlur:a=>y(e.id,a.target.value),disabled:p})]})}),c[e.id]&&t.jsx("p",{className:"mt-1 text-sm text-red-600",children:c[e.id]})]},e.id)}),t.jsx("button",{type:"submit",disabled:p||Object.keys(c).length>0,className:`mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium
                       py-3 px-4 rounded-xl disabled:opacity-50 flex items-center
                       justify-center`,children:p?t.jsxs(t.Fragment,{children:[t.jsx(L,{className:"mr-2 h-4 w-4 animate-spin"}),"Saving..."]}):"Save Information"})]})})]})};export{Q as default};
