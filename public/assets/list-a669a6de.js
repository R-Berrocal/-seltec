import{m as p,c as f,n as x,p as L,j as o,L as h,Q as j,q as i}from"./index-d0930347.js";import{T as G,c as Y}from"./table-822d250b.js";import{A as g}from"./alert-f35b79f8.js";import{a as C}from"./block_role-b3da2c39.js";import{u as S,G as v}from"./group-c99f38ae.js";import"./useQuery-90db40b4.js";const t=Y(),A=[t.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("name",{header:()=>"Cargo",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("createdAt",{header:()=>"Fecha de creacion",cell:e=>p(e.getValue()).format("YYYY-MM-DD"),footer:e=>e.column.id})],U=()=>{const{groups:e,isLoading:c}=S(),{id:n,closeAlert:l,user:s}=f(a=>a),u=x(),r=C.includes((s==null?void 0:s.role)||""),{mutate:d,isLoading:m}=L(()=>v.deleteGroup(n),{onSuccess:()=>{l(),u.invalidateQueries([j.GROUP]),i("Grupo eliminado de forma exitosa",null)},onError:a=>{i(`opps! algo no va bien ${a}`,"error")}});return c||m?o.jsx(h,{}):o.jsxs("div",{children:[o.jsx(G,{total:(e==null?void 0:e.count)||0,data:(e==null?void 0:e.results)||[],columns:A,showDelete:!r,showUpdate:!r}),o.jsx(g,{acction:d,title:"Seguro que desea realizar esta acccion?",description:"esta accion no es revercible"})]})};export{U as default};