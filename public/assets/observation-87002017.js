import{J as o,F as c,u as b}from"./index-4f0194d7.js";import{u as s,Q as a}from"./query-keys-2b4b518a.js";const n={getObservation:async r=>{try{return(await o.get(`/observations/${r}`)).data}catch(t){throw console.error("error",t),t}},listObservations:async()=>{try{return(await o.get("/observations")).data}catch(r){throw console.error("error",r),r}},createObservation:async r=>{try{return(await o.post("/observations",{...r,initDate:String(r.date.startDate),endDate:String(r.date.endDate)})).data}catch(t){throw console.error("error",t),t}},editObservation:async(r,t)=>{try{return(await o.put(`/observations/${r}`,{...t,initDate:String(t.date.startDate),endDate:String(t.date.endDate)})).data}catch(e){throw console.error("error",e),e}},deleteObservation:async r=>{try{await o.delete(`/observations/${r}`)}catch(t){throw console.error("error",t),t}}};function u(){const r=c(),{data:t,isLoading:e}=s([a.OBSERVATION,r.id],()=>n.getObservation(r.id||""),{enabled:!!r.id});return{observation:t,isLoading:e}}function O(){const{data:r,isLoading:t}=s(a.OBSERVATION,()=>n.listObservations());return{observations:r,isLoading:t}}function l(){const{id:r,isOpenDialog:t}=b(),{data:e,isLoading:i}=s([a.OBSERVATION,r],()=>n.getObservation(r),{enabled:r.length>0&&t});return{observation:e,isLoading:i}}export{n as O,O as a,u as b,l as u};
