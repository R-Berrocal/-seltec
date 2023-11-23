import{n as N,o as j,y as C,q as k,k as Q,r as h,b as Y,m as b,l as w,s as D,j as c,e as I,I as O,a as F,t as G}from"./index-5c19e2b0.js";import{S as $}from"./select-261fe60b.js";import{T}from"./text-area-57b4863e.js";import{Q as R}from"./query-keys-c2ebbff1.js";import{b as z,A}from"./assigned-vehicle-b7038b9c.js";import{Y as M}from"./validations-ded1d560.js";import{a as B}from"./vehicle-51e5f155.js";import{a as H}from"./employee-1ed3515a.js";const K=N().shape({operationType:j().required("El tipo de operacion es requerido!"),daysService:C().min(1,"debe ser mayor o igual que 1").required("los dias de servicios son requeridos!"),observations:j().required("La observacion es requerida!"),vehicle:M.required("El vehiculo es requerido!"),employee:M.required("El empleado es requerido!")}),P={operationType:"",daysService:0,observations:""};function U(){const s=k(),f=Q(),{assigned:e,isLoading:x}=z(),g=h.useMemo(()=>{var o,i,l,r,d,u,y;return{daysService:(e==null?void 0:e.daysService)||0,observations:(e==null?void 0:e.observations)||"",operationType:(e==null?void 0:e.operationType)||"",employee:{id:((o=e==null?void 0:e.employee)==null?void 0:o.id)||"",value:`${(i=e==null?void 0:e.employee)==null?void 0:i.id} - ${(l=e==null?void 0:e.employee)==null?void 0:l.name} ${e==null?void 0:e.employee.lastName}`,label:((r=e==null?void 0:e.employee)==null?void 0:r.identification)||""},vehicle:{id:((d=e==null?void 0:e.vehicle)==null?void 0:d.id)||"",value:((u=e==null?void 0:e.vehicle)==null?void 0:u.id)||"",label:((y=e==null?void 0:e.vehicle)==null?void 0:y.plate)||""}}},[e]),m=Y(),t=h.useCallback(async o=>{var i,l;try{await A.editAssignedVehicle(s.id||"",{...o,vehicle:(i=o==null?void 0:o.vehicle)==null?void 0:i.id,employee:(l=o==null?void 0:o.employee)==null?void 0:l.id}),b("Vehiculo actualizado exitosamente",null)}catch(r){b(`opps!! algo no va bien ${r.response.data.message||""}`,"error"),console.error(r)}},[s]),n=h.useCallback(async o=>{var i,l;try{const r=await A.createAssignedVehicle({...o,vehicle:(i=o==null?void 0:o.vehicle)==null?void 0:i.id,employee:(l=o==null?void 0:o.employee)==null?void 0:l.id});return b("Vehiculo creado exitosamente",null),m("/employee/assigned"),r}catch(r){b(`opps!! algo no va bien ${r.response.data.message||""}`,"error"),console.error(r)}},[m]),{mutateAsync:S,isLoading:p}=w(s.id?t:n,{onSuccess:()=>{f.invalidateQueries([R.ASSIGNED])}});return{isLoading:x||p,submit:S,formValues:{defaultValues:s.id?g:P},status:s!=null&&s.id?"Editar assignacion":"Crear assignacion",isEditing:!!s.id}}const ie=()=>{var r,d,u,y,V,v,E,q,L;const{submit:s,isLoading:f,formValues:{defaultValues:e},status:x}=U(),{handleSubmit:g,reset:m,formState:{errors:t},control:n}=D({mode:"all",defaultValues:e,resolver:G(K)});h.useEffect(()=>{m(e)},[m,e]);const S=a=>{s(a)},{vehicles:p,isLoading:o}=B(),{employees:i,isLoading:l}=H();return f||o||l?c.jsx(I,{}):c.jsxs("form",{onSubmit:g(S),className:"bg-white dark:bg-black mt-5 flex flex-col space-y-4",children:[c.jsx(O,{control:n,name:"daysService",label:"Dias de servicio",type:"number",errorMessage:((r=t.daysService)==null?void 0:r.message)||"",error:!!t.daysService}),c.jsxs("div",{className:"flex gap-4",children:[c.jsx($,{control:n,name:"vehicle",options:((d=p==null?void 0:p.results)==null?void 0:d.map(a=>({id:a.id,label:a.plate,value:a.id})))||[],errorMessage:((y=(u=t.vehicle)==null?void 0:u.label)==null?void 0:y.message)||"",placeholder:"Vehiculo"}),c.jsx($,{control:n,name:"employee",options:((V=i==null?void 0:i.results)==null?void 0:V.map(a=>({id:a.id,label:`${a.identification} - ${a.name} ${a.lastName}`,value:a.id})))||[],errorMessage:((E=(v=t.employee)==null?void 0:v.label)==null?void 0:E.message)||"",placeholder:"Empleado"})]}),c.jsx(T,{control:n,name:"operationType",label:"Tipo de operacion",errorMessage:((q=t.operationType)==null?void 0:q.message)||"",error:!!t.operationType}),c.jsx(T,{control:n,name:"observations",label:"Observaciones",errorMessage:((L=t.observations)==null?void 0:L.message)||"",error:!!t.observations}),c.jsx(F.Button,{type:"submit",className:"mt-10",children:x})]})};export{ie as default};
