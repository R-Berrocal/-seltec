import{j as a,a as t}from"./index-bbfb2b48.js";const l=({title:s,value:e})=>a.jsxs("div",{className:"grid grid-cols-2",children:[a.jsxs(t.Typography,{variant:"h5",className:"px-4 py-2 text-lg font-semibold capitalize",children:[s,":"]}),a.jsx(t.Typography,{variant:"paragraph",className:"px-4 py-2",children:e||""})]}),d=({data:s,children:e})=>a.jsx("section",{className:"w-full mx-2",children:a.jsx("header",{className:"bg-white p-3 rounded-sm dark:bg-black",children:a.jsxs("article",{className:"text-gray-700 dark:bg-black dark:text-white",children:[a.jsx("div",{className:"grid md:grid-cols-2 text-sm rounded-lg",children:s.map((r,i)=>a.jsx(l,{...r},r.title+r.value+i.toString()))}),e]})})});export{d as I};
