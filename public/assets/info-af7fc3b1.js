import{r as v,j as a,L as f}from"./index-00a53ffa.js";import{I as o,M as x}from"./more-374f4f6c.js";import{T as b}from"./tabs-799ea180.js";import{a as j}from"./history-005ccf87.js";import"./useQuery-400e87ec.js";const M=()=>{const{history:e,isLoading:r}=j(),l=v.useMemo(()=>{var t,n,m,c,i,u,d,p;return[[{title:"Id",value:e==null?void 0:e.id},{title:"observacion",value:e==null?void 0:e.observation},{title:"Fecha",value:e==null?void 0:e.date},{title:"Operacion",value:e==null?void 0:e.operation}],[{title:"Nombre",value:(t=e==null?void 0:e.employee)==null?void 0:t.name},{title:"Apellido",value:(n=e==null?void 0:e.employee)==null?void 0:n.lastName},{title:"Identificacion",value:(m=e==null?void 0:e.employee)==null?void 0:m.identification},{title:"Correo electronico",value:(c=e==null?void 0:e.employee)==null?void 0:c.email},{title:"Direccion",value:((i=e==null?void 0:e.employee)==null?void 0:i.address)||""}],[{title:"Nombre",value:(u=e==null?void 0:e.location)==null?void 0:u.name},{title:"Nombre del grupo",value:(p=(d=e==null?void 0:e.location)==null?void 0:d.group)==null?void 0:p.name}]]},[e]),s=[{label:"Empleado",value:"employee",desc:a.jsx(o,{data:l[1]})},{label:"Locacion",value:"location",desc:a.jsx(o,{data:l[2]})}];return r?a.jsx(f,{}):a.jsxs(x,{children:[a.jsx(o,{data:l[0]}),a.jsx(b,{tabs:s})]})};export{M as default};