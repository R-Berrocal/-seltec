import{r as o,j as a,f as r,u as x,g as O,h as j,i as n}from"./index-2417ad1b.js";import{D as g,I as h,T as y,A as D}from"./info-14c61dd3.js";import{Q as v}from"./query-keys-96a731f2.js";import{u as E,a as L,O as A}from"./observation-e1a46e94.js";const R=()=>{const{observation:e,isLoading:i}=E(),l=o.useMemo(()=>[{title:"empleado",value:`${e==null?void 0:e.employee.name} ${e==null?void 0:e.employee.lastName}`},{title:"identificacion",value:e==null?void 0:e.employee.identification},{title:"correo",value:e==null?void 0:e.employee.email},{title:"observacion",value:e==null?void 0:e.observation},{title:"Fecha de ingreso",value:e==null?void 0:e.initDate},{title:"Fecha de salida",value:e==null?void 0:e.endDate}],[e]);return a.jsx(g,{title:"Información de la observacion",children:i?a.jsx(r,{}):a.jsx(h,{data:l})})};function I(){const{observations:e,isLoading:i}=L(),{idRemove:l,closeAlert:d}=x(s=>s),m=O(),{mutate:c,isLoading:u}=j(()=>A.deleteObservation(l),{onSuccess:()=>{d(),m.invalidateQueries([v.OBSERVATION]),n("Observacion eliminada de forma exitosa",null)},onError:s=>{n(`opps! algo no va bien ${s}`,"error")}}),p=o.useMemo(()=>{var s;return((s=e==null?void 0:e.results)==null?void 0:s.map(t=>({id:t.id,name:`${t.employee.name} ${t.employee.lastName}`,observation:t.observation,initDate:t.initDate,endDate:t.endDate})))||[]},[e]),f=["Empleado","Observacion","Fecha de ingreso","Fecha de salida","Acciones"];return i||u?a.jsx(r,{}):a.jsxs("div",{children:[a.jsx(y,{heads:f,rows:p||[]}),a.jsx(R,{}),a.jsx(D,{handleRemove:c})]})}export{I as default};
