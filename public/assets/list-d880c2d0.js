import{r as c,j as o,f as l,u as j,g as p,h as A,i as r}from"./index-2849c0a5.js";import{D as G,I as L,T as d,A as b}from"./info-58bfefeb.js";import{Q as w}from"./query-keys-5a8e9e35.js";import{a as v,u as S,G as D}from"./group-25304f5a.js";import{A as E}from"./accodion-icon-9b81c0b6.js";import"./ChevronDownIcon-1f50c7aa.js";const I=()=>{const{group:e,isLoading:i}=v(),n=c.useMemo(()=>[{title:"id",value:e==null?void 0:e.id},{title:"nombre",value:e==null?void 0:e.name},{title:"fecha de creacion",value:new Date(e==null?void 0:e.createdAt).toLocaleString()},{title:"fecha de actulizacion",value:new Date(e==null?void 0:e.updatedAt).toLocaleString()}],[e]);return o.jsx(G,{title:"Informacion sobre el grupo",children:i?o.jsx(l,{}):o.jsx(L,{data:n,children:o.jsx(E,{position:1,title:"Empleados",body:o.jsx("section",{className:"",children:o.jsx(d,{heads:["Identificacion","Nombre","Apellido","Correo"],rows:(e==null?void 0:e.employees.map(s=>({none:s.id,identificacion:s.identification,nombre:s.name,lastName:s.lastName,email:s.email})))||[],showFooter:!1,showHeader:!1,showActions:!1})})})})})},F=()=>{const{groups:e,isLoading:i}=S(),{idRemove:n,closeAlert:s}=j(t=>t),m=p(),{mutate:u,isLoading:f}=A(()=>D.deleteGroup(n),{onSuccess:()=>{s(),m.invalidateQueries([w.GROUP]),r("Grupo eliminado de forma exitosa",null)},onError:t=>{r(`opps! algo no va bien ${t}`,"error")}}),x=c.useMemo(()=>{var t;return((t=e==null?void 0:e.results)==null?void 0:t.map(a=>({none:a.id,id:a.id,name:a.name,createdAt:new Date(a.createdAt).toLocaleString()})))||[]},[e]),h=["Id","Nombre","Fecha de creacion","Acciones"];return i||f?o.jsx(l,{}):o.jsxs("div",{children:[o.jsx(d,{heads:h,rows:x}),o.jsx(b,{handleRemove:u}),o.jsx(I,{})]})};export{F as default};