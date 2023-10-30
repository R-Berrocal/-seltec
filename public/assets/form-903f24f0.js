import{p as v,q as w,t as E,g as M,r as d,e as y,i as c,h as L,v as V,j as s,f as k,I as n,a as q,w as Q}from"./index-2849c0a5.js";import{Q as $}from"./query-keys-5a8e9e35.js";import{b as O,C as S}from"./company-138f15b2.js";const Y=v().shape({name:w().required("El nombre es requerido!")}),A={name:"",legalName:"",address:"",phone:"",email:"",webSite:""};function D(){const o=E(),g=M(),{company:e,isLoading:b}=O(),m=d.useMemo(()=>({name:(e==null?void 0:e.name)||"",legalName:(e==null?void 0:e.legalName)||"",email:(e==null?void 0:e.email)||"",address:(e==null?void 0:e.address)||"",phone:(e==null?void 0:e.phone)||"",webSite:(e==null?void 0:e.webSite)||""}),[e]),i=y(),a=d.useCallback(async l=>{try{await S.editcompany(o.id||"",l),c("Empresa actualizada exitosamente",null)}catch(r){c(`opps!! algo no va bien ${r.response.data.message||""}`,"error"),console.error(r)}},[o]),t=d.useCallback(async l=>{try{const r=await S.createCompany(l);return c("Empresa creada exitosamente",null),i("/companies"),r}catch(r){c(`opps!! algo no va bien ${r.response.data.message||""}`,"error"),console.error(r)}},[i]),{mutateAsync:p,isLoading:u}=L(o.id?a:t,{onSuccess:()=>{g.invalidateQueries([$.COMPANY])}});return{isLoading:b||u,submit:p,formValues:{defaultValues:Object.keys(m).length<0?A:m},status:o.id?"Editar empresa":"Crear empresa",isEditing:!!o.id}}const R=()=>{var u,l,r,f,x,h,N,j;const{submit:o,isLoading:g,formValues:{defaultValues:e},status:b}=D(),{handleSubmit:m,reset:i,formState:{errors:a},control:t}=V({mode:"all",defaultValues:e,resolver:Q(Y)});d.useEffect(()=>{i(e)},[i,e]);const p=C=>{o(C)};return g?s.jsx(k,{}):s.jsxs("form",{onSubmit:m(p),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{control:t,name:"name",label:"Nombre",errorMessage:((u=a.name)==null?void 0:u.message)||"",error:!!a.name}),s.jsx(n,{control:t,name:"legalName",label:"Nombre Legal",errorMessage:((l=a.legalName)==null?void 0:l.message)||"",error:!!a.legalName})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{control:t,name:"email",label:"correo electronico",type:"email",errorMessage:((r=a.email)==null?void 0:r.message)||"",error:!!a.email}),s.jsx(n,{control:t,name:"address",label:"Dirección",errorMessage:((f=a.address)==null?void 0:f.message)||"",error:!!a.address})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(n,{control:t,name:"phone",label:"Teléfono",errorMessage:((x=a.phone)==null?void 0:x.message)||"",error:!!((h=a.phone)!=null&&h.message)}),s.jsx(n,{control:t,name:"webSite",label:"Sitio Web",errorMessage:((N=a.webSite)==null?void 0:N.message)||"",error:!!((j=a.webSite)!=null&&j.message)})]}),s.jsx(q.Button,{type:"submit",className:"mt-10",children:b})]})};export{R as default};
