import{r as h,j as s,L as g}from"./index-a3a25342.js";import{M as V,I as b}from"./more-7615a293.js";import{T as r,c}from"./table-0dd3e870.js";import{T as v}from"./tabs-e8febeb8.js";import{b as w}from"./company-a6f4b75b.js";import"./useQuery-28d0c69b.js";const o=c(),t=c(),a=c(),H=()=>{const{company:l,isLoading:i}=w(),u=h.useMemo(()=>[{title:"nombre",value:l==null?void 0:l.name},{title:"correo electronico",value:l==null?void 0:l.email},{title:"dirección",value:(l==null?void 0:l.address)||""},{title:"teléfono",value:(l==null?void 0:l.phone)||""},{title:"sitio web",value:(l==null?void 0:l.webSite)||""},{title:"NIT",value:(l==null?void 0:l.nit)||""}],[l]),d=[o.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),o.accessor("identification",{header:()=>"Identificacion",cell:e=>e.getValue(),footer:e=>e.column.id}),o.accessor("name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),o.accessor("email",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id})],n=[t.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("full_name",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("role",{header:()=>"Rol",cell:e=>e.getValue(),footer:e=>e.column.id}),t.accessor("email",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id})],f=[a.accessor("id",{header:()=>"Id",cell:e=>e.getValue(),footer:e=>e.column.id}),a.accessor("model",{header:()=>"Identificacion",cell:e=>e.getValue(),footer:e=>e.column.id}),a.accessor("owner",{header:()=>"Nombre",cell:e=>e.getValue(),footer:e=>e.column.id}),a.accessor("plate",{header:()=>"Email",cell:e=>e.getValue(),footer:e=>e.column.id})],m=[{label:"Empleados",value:"employees",desc:s.jsx(r,{total:(l==null?void 0:l.employees.length)||0,columns:d,data:(l==null?void 0:l.employees)||[],showActions:!1,showUpdate:!1,showDelete:!1})},{label:"Vehiculos",value:"vehicles",desc:s.jsx(r,{total:(l==null?void 0:l.vehicles.length)||0,columns:f,data:(l==null?void 0:l.vehicles)||[],showActions:!1,showUpdate:!1,showDelete:!1})},{label:"Usuarios",value:"user",desc:s.jsx(r,{total:(l==null?void 0:l.users.length)||0,columns:n,data:(l==null?void 0:l.users)||[],showActions:!1,showUpdate:!1,showDelete:!1})}];return i?s.jsx(g,{}):s.jsxs(V,{children:[s.jsx(b,{data:u}),s.jsx(v,{tabs:m})]})};export{H as default};