import{r as e,f as o,j as t}from"./index-bbfb2b48.js";import{P as l,a as c}from"./page-layout-73987250.js";function d({title:r,titleId:a,...s},i){return e.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},s),r?e.createElement("title",{id:a},r):null,e.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const m=e.forwardRef(d),p=m,u=e.lazy(()=>o(()=>import("./list-37a2f9f6.js"),["assets/list-37a2f9f6.js","assets/index-bbfb2b48.js","assets/index-a9ffda1b.css","assets/table-f506fd45.js","assets/block_role-49218549.js","assets/info-6aa01e04.js","assets/observation-1483063a.js","assets/query-keys-f38cae6f.js"])),n=e.lazy(()=>o(()=>import("./form-ab452a50.js"),["assets/form-ab452a50.js","assets/index-bbfb2b48.js","assets/index-a9ffda1b.css","assets/select-3349b55e.js","assets/text-area-392e14e3.js","assets/query-keys-f38cae6f.js","assets/observation-1483063a.js","assets/validations-8443da6f.js","assets/employee-f8758d6c.js"])),_=e.lazy(()=>o(()=>import("./info-6ae0fb1c.js"),["assets/info-6ae0fb1c.js","assets/index-bbfb2b48.js","assets/index-a9ffda1b.css","assets/info-6aa01e04.js","assets/more-dae91c6c.js","assets/tabs-06daebe3.js","assets/observation-1483063a.js","assets/query-keys-f38cae6f.js"])),v={mainpage:{path:"/",element:t.jsx(u,{})},routes:[{path:"/create",element:t.jsx(n,{})},{path:"/edit/:id",element:t.jsx(n,{})},{path:"/info/:id",element:t.jsx(_,{})}]},E=()=>t.jsx(l,{description:"",title:"Observaciones",titleButtonCreate:"Observacion",IconButtonCreate:p,children:t.jsx(c,{data:v})});export{E as default};