import{B as A,D as m,K as M,F as N,k as $,r as p,b as k,m as d,l as C,G as D,j as o,e as Q,I as w,a as F,H as G}from"./index-602d4f83.js";import{T as L}from"./text-area-c4367b6e.js";import{S as j}from"./select-b82ff229.js";import{Q as I}from"./query-keys-652ea5af.js";import{b as O,A as q}from"./assigned-vehicle-3d4cff58.js";import{a as B}from"./vehicle-b0796fd6.js";import{a as H}from"./employee-29038730.js";const K=A().shape({operationType:m().required("El tipo de operacion es requerido!"),daysService:M().min(1,"debe ser mayor o igual que 1").required("los dias de servicios son requeridos!"),observations:m().required("La observacion es requerida!"),vehicle:m().required("El vehiculo es requerido!"),employee:m().required("El empleado es requerido!")}),R={operationType:"",daysService:0,observations:"",vehicle:"",employee:""};function Y(){const i=N(),y=$(),{assigned:e,isLoading:b}=O(),u=p.useMemo(()=>({daysService:(e==null?void 0:e.daysService)||0,employee:(e==null?void 0:e.employee.id)||"",observations:(e==null?void 0:e.observations)||"",operationType:(e==null?void 0:e.operationType)||"",vehicle:(e==null?void 0:e.vehicle.id)||""}),[e]),l=k(),s=p.useCallback(async c=>{try{await q.editAssignedVehicle(i.id||"",c),d("Vehiculo actualizado exitosamente",null)}catch(a){d(`opps!! algo no va bien ${a.response.data.message||""}`,"error"),console.error(a)}},[i]),t=p.useCallback(async c=>{try{const a=await q.createAssignedVehicle(c);return d("Vehiculo creado exitosamente",null),l("/employee/assigned"),a}catch(a){d(`opps!! algo no va bien ${a.response.data.message||""}`,"error"),console.error(a)}},[l]),{mutateAsync:h,isLoading:n}=C(i.id?s:t,{onSuccess:()=>{y.invalidateQueries([I.ASSIGNED])}});return{isLoading:b||n,submit:h,formValues:{defaultValues:Object.keys(u).length<0?R:u},status:i.id?"Editar assignacion":"Crear assignacion",isEditing:!!i.id}}const Z=()=>{var g,v,f,x,S,V,E;const{submit:i,isLoading:y,formValues:{defaultValues:e},status:b}=Y(),{handleSubmit:u,reset:l,formState:{errors:s},control:t}=D({mode:"all",defaultValues:e,resolver:G(K)});p.useEffect(()=>{l(e)},[l,e]);const h=r=>{i(r)},{vehicles:n,isLoading:c}=B(),{employees:a,isLoading:T}=H();return y||c||T?o.jsx(Q,{}):o.jsxs("form",{onSubmit:u(h),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[o.jsx(w,{control:t,name:"daysService",label:"Dias de servicio",type:"number",errorMessage:((g=s.daysService)==null?void 0:g.message)||"",error:!!s.daysService}),o.jsx(L,{control:t,name:"operationType",label:"Tipo de operacion",errorMessage:((v=s.operationType)==null?void 0:v.message)||"",error:!!s.operationType}),o.jsx(L,{control:t,name:"observations",label:"Observaciones",errorMessage:((f=s.observations)==null?void 0:f.message)||"",error:!!s.observations}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(j,{children:!0,control:t,name:"vehicle",label:"Vehiculo",options:((x=n==null?void 0:n.results)==null?void 0:x.map(r=>({id:r.id,label:r.model,value:r.id})))||[],errorMessage:((S=s.vehicle)==null?void 0:S.message)||"",error:!!s.vehicle,placeholder:"Empleado"}),o.jsx(j,{children:!0,control:t,name:"employee",label:"Empleado",options:((V=a==null?void 0:a.results)==null?void 0:V.map(r=>({id:r.id,label:`${r.name} ${r.lastName}`,value:r.id})))||[],errorMessage:((E=s.employee)==null?void 0:E.message)||"",error:!!s.employee,placeholder:"Vehiculo"})]}),o.jsx(F.Button,{type:"submit",className:"mt-10",children:b})]})};export{Z as default};