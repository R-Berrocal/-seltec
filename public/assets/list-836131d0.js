import{m as n,j as a,b as c,c as E,n as x,p as D,L as Y,Q as j,q as l}from"./index-d0930347.js";import{T as L,c as M}from"./table-822d250b.js";import{A}from"./alert-f35b79f8.js";import{B as C}from"./block_role-b3da2c39.js";import{u as S,E as V}from"./employee-66af281a.js";import"./useQuery-90db40b4.js";const s=M(),N=[s.accessor("name",{header:()=>"Nombre",cell:e=>`${e.getValue()}`,footer:e=>e.column.id}),s.accessor("identification",{header:()=>"Identificacion",cell:e=>e.getValue(),footer:e=>e.column.id}),s.accessor("observations.initDate",{header:()=>"Fecha de ingreso",cell:e=>e.getValue()?n(e.getValue()||"").format("YYYY-MM-DD"):a.jsx(c.Chip,{color:"red",value:"sin fecha",className:"text-center"}),footer:e=>e.column.id}),s.accessor("observations.endDate",{header:()=>"Fecha de salida",cell:e=>e.getValue()?n(e.getValue()||"").format("YYYY-MM-DD"):a.jsx(c.Chip,{color:"red",value:"sin fecha",className:"text-center"}),footer:e=>e.column.id})];function R(){const{employees:e,isLoading:d}=S(),{id:u,closeAlert:r,user:o}=E(t=>t),m=x(),i=C.includes((o==null?void 0:o.role)||""),{mutate:p,isLoading:f}=D(()=>V.deleteEmployee(u),{onSuccess:()=>{r(),m.invalidateQueries([j.EMPLOYEE]),l("Empleado eliminado de forma exitosa",null)},onError:t=>{r(),l(`opps! algo no va bien ${t}`,"error")}});return d||f?a.jsx(Y,{}):a.jsxs("div",{className:"",children:[a.jsx(L,{total:(e==null?void 0:e.count)||0,columns:N,data:(e==null?void 0:e.results.map(t=>{const g=(t.observations||[]).sort((b,h)=>{const v=new Date(b.createdAt);return new Date(h.createdAt).getTime()-v.getTime()})[0]||{initDate:0,endDate:0,id:0};return{...t,observations:g}}))||[],showDelete:!i,showUpdate:!i}),a.jsx(A,{acction:p,title:"Seguro que desea realizar esta acccion?",description:"esta accion no es revercible"})]})}export{R as default};