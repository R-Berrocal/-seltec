import{p as w,q as M,t as P,g as S,r as p,e as C,i as d,h as N,v as k,j as s,f as q,I as c,a as Q,w as $}from"./index-2417ad1b.js";import{S as v}from"./select-a08db661.js";import{Q as I}from"./query-keys-96a731f2.js";import{b as D,V as L}from"./vehicle-ccb18ae1.js";import{u as F}from"./company-4f8dd52f.js";const H=w().shape({plate:M().required("La placa es requerida!")}),O={plate:"",type:"",model:"",trailerPlate:"",owner:"",company:""};function R(){const l=P(),g=S(),{vehicle:e,isLoading:f}=D(),u=p.useMemo(()=>{var o;return{plate:(e==null?void 0:e.plate)||"",type:(e==null?void 0:e.type)||"",model:(e==null?void 0:e.model)||"",trailerPlate:(e==null?void 0:e.trailerPlate)||"",owner:(e==null?void 0:e.owner)||"",company:((o=e==null?void 0:e.company)==null?void 0:o.id)||""}},[e]),n=C(),a=p.useCallback(async o=>{try{await L.editVehicle(l.id||"",o),d("Vehiculo actualizado exitosamente",null)}catch(r){d(`opps!! algo no va bien ${r.response.data.message||""}`,"error"),console.error(r)}},[l]),t=p.useCallback(async o=>{try{const r=await L.createVehicle(o);return d("Vehiculo creado exitosamente",null),n("/vehicles"),r}catch(r){d(`opps!! algo no va bien ${r.response.data.message||""}`,"error"),console.error(r)}},[n]),{mutateAsync:x,isLoading:i}=N(l.id?a:t,{onSuccess:()=>{g.invalidateQueries([I.VEHICLE])}});return{isLoading:f||i,submit:x,formValues:{defaultValues:Object.keys(u).length<0?O:u},status:l.id?"Editar vehiculo":"Crear vehiculo",isEditing:!!l.id}}const K=()=>{var r,b,y,V,h,j,E;const{submit:l,isLoading:g,formValues:{defaultValues:e},status:f}=R(),{handleSubmit:u,reset:n,formState:{errors:a},control:t}=k({mode:"all",defaultValues:e,resolver:$(H)});p.useEffect(()=>{n(e)},[n,e]);const x=m=>{l(m)},{companies:i,isLoading:o}=F();return g||o?s.jsx(q,{}):s.jsxs("form",{onSubmit:u(x),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[s.jsxs("div",{className:"flex gap-4",children:[s.jsx(c,{control:t,name:"plate",label:"Placa",errorMessage:((r=a.plate)==null?void 0:r.message)||"",error:!!a.plate}),s.jsx(c,{control:t,name:"type",label:"Tipo",errorMessage:((b=a.type)==null?void 0:b.message)||"",error:!!a.type})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(c,{control:t,name:"model",label:"Modelo",errorMessage:((y=a.model)==null?void 0:y.message)||"",error:!!a.model}),s.jsx(c,{control:t,name:"trailerPlate",label:"Placa de remolque",errorMessage:((V=a.trailerPlate)==null?void 0:V.message)||"",error:!!a.trailerPlate})]}),s.jsxs("div",{className:"flex gap-4",children:[s.jsx(c,{control:t,name:"owner",label:"Dueño",errorMessage:((h=a.owner)==null?void 0:h.message)||"",error:!!a.owner}),s.jsx(v,{children:!0,label:"Empresa",control:t,name:"company",options:((j=i==null?void 0:i.results)==null?void 0:j.map(m=>({id:m.id,label:m.name,value:m.id})))||[],errorMessage:((E=a.company)==null?void 0:E.message)||"",placeholder:"Empresa"})]}),s.jsx(Q.Button,{type:"submit",className:"mt-10",children:f})]})};export{K as default};