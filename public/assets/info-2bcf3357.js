import{r as s,j as a,e as u}from"./index-dea8633d.js";import{M as m,I as n}from"./more-2200781d.js";import{a as l}from"./vehicle-15b1fae9.js";import"./query-keys-9f424c63.js";const x=()=>{const{vehicle:t,isLoading:e}=l(),r=s.useMemo(()=>{var o;return[{title:"placa",value:t==null?void 0:t.plate},{title:"tipo",value:t==null?void 0:t.type},{title:"Modelo",value:t==null?void 0:t.model},{title:"Placa De Remolque",value:t==null?void 0:t.trailerPlate},{title:"Dueño",value:t==null?void 0:t.owner},{title:"empresa",value:(o=t==null?void 0:t.company)==null?void 0:o.name},{title:"Fecha de creacion",value:t==null?void 0:t.createdAt}]},[t]);return e?a.jsx(u,{}):a.jsx(m,{children:a.jsx(n,{data:r})})};export{x as default};