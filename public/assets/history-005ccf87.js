import{A as s,y as c,Q as e}from"./index-00a53ffa.js";import{u as i}from"./useQuery-400e87ec.js";const a={getHistory:async r=>{try{return(await s.get(`/income-history/${r}`)).data}catch(t){throw console.error("error",t),t}},listHistories:async()=>{try{return(await s.get("/income-history?limit=1000")).data}catch(r){throw console.error("error",r),r}},createHistory:async r=>{try{return(await s.post("/income-history",{...r})).data}catch(t){throw console.error("error",t),t}},editHistory:async(r,t)=>{try{return(await s.put(`/income-history/${r}`,{...t})).data}catch(o){throw console.error("error",o),o}},deleteHistory:async r=>{try{await s.delete(`/income-history/${r}`)}catch(t){throw console.error("error",t),t}}};function u(){const r=c(),{data:t,isLoading:o}=i([e.HISTORY,r.id],()=>a.getHistory(r.id||""),{enabled:!!r.id});return{history:t,isLoading:o}}function d(){const{data:r,isLoading:t}=i(e.HISTORY,()=>a.listHistories());return{histories:r,isLoading:t}}export{a as H,u as a,d as u};