import{r as l,j as o,f as m,u as E,g as w,h as b,i as c}from"./index-2849c0a5.js";import{D as g,I as p,T as r,A as v}from"./info-58bfefeb.js";import{u as A,a as L,E as N}from"./employee-fd1b0736.js";import{A as d}from"./accodion-icon-9b81c0b6.js";import{Q as D}from"./query-keys-5a8e9e35.js";import"./ChevronDownIcon-1f50c7aa.js";const S=()=>{const{employee:e,isLoading:t}=A(),n=l.useMemo(()=>[{title:"nombre",value:e==null?void 0:e.name},{title:"apellido",value:e==null?void 0:e.lastName},{title:"identificacion",value:e==null?void 0:e.identification},{title:"correo electronico",value:e==null?void 0:e.email},{title:"empresa",value:e==null?void 0:e.company.name},{title:"cargo",value:e==null?void 0:e.roleEmployee.name},{title:"direccion",value:(e==null?void 0:e.address)||""}],[e]);return o.jsx(g,{title:"Informacion sobre el empleado",children:t?o.jsx(m,{}):o.jsxs(p,{data:n,children:[o.jsx(d,{position:1,title:"Grupos",body:o.jsx("section",{className:"",children:o.jsx(r,{heads:["Id","Nombre","Fecha de creacion"],rows:(e==null?void 0:e.groups.map(i=>({none:i.id,id:i.id,nombre:i.name,fecha:new Date(i.createdAt).toLocaleString()})))||[],showFooter:!1,showHeader:!1,showActions:!1})})}),o.jsx(d,{position:2,title:"Autos",body:o.jsx("section",{className:"",children:o.jsx(r,{heads:["Operacion","Dias de servicio","Nombre","Dueño"],rows:(e==null?void 0:e.assignedVehicles.map(i=>({id:i.id,operacion:i.observations,days:i.daysService,nombre:i.vehicle.model,owner:i.vehicle.owner})))||[],showFooter:!1,showHeader:!1,showActions:!1})})})]})})};function Y(){const{employees:e,isLoading:t}=L(),{idRemove:n,closeAlert:i}=E(a=>a),f=w(),{mutate:u,isLoading:h}=b(()=>N.deleteEmployee(n),{onSuccess:()=>{i(),f.invalidateQueries([D.EMPLOYEE]),c("Empleado eliminado de forma exitosa",null)},onError:a=>{c(`opps! algo no va bien ${a}`,"error")}}),x=l.useMemo(()=>{var a;return((a=e==null?void 0:e.results)==null?void 0:a.map(s=>({id:s.id,fullName:`${s==null?void 0:s.name} ${(s==null?void 0:s.lastName)||""}`,email:s.email,identification:s.identification,role:new Date(s.createdAt).toLocaleString()})))||[]},[e]),j=["Nombre","Correo","Identificacion","Fecha de creacion","Acciones"];return t||h?o.jsx(m,{}):o.jsxs("div",{className:"",children:[o.jsx(r,{heads:j,rows:x||[]}),o.jsx(S,{}),o.jsx(v,{handleRemove:u})]})}export{Y as default};
