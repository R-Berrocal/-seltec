import{r,j as a,T as o,L as i,q as n}from"./index-147be8e0.js";import{M as d,I as m}from"./more-c75c6473.js";import{a as u}from"./group-90d34ab9.js";import{T as f}from"./tabs-f7778d04.js";import"./useQuery-2739f2d7.js";const t=n(),x=[t.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("identification",{header:()=>"Identificacion",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("email",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id})],I=()=>{const{group:e,isLoading:s}=u(),l=r.useMemo(()=>[{title:"id",value:e==null?void 0:e.id},{title:"nombre",value:e==null?void 0:e.name},{title:"fecha de creacion",value:new Date((e==null?void 0:e.createdAt)||"").toLocaleString()},{title:"fecha de actulizacion",value:new Date((e==null?void 0:e.updatedAt)||"").toLocaleString()}],[e]),c=[{label:"Empleados",value:"employees",desc:a.jsxs(o,{columns:x,data:(e==null?void 0:e.employees)||[],children:[a.jsx(o.RowHeader,{}),a.jsx(o.Body,{})]})}];return s?a.jsx(i,{}):a.jsxs(d,{children:[a.jsx(m,{data:l}),a.jsx(f,{tabs:c})]})};export{I as default};