import{r as d,j as n,a as s}from"./index-2417ad1b.js";import{C as p}from"./ChevronDownIcon-27c90561.js";function x({open:o}){return n.jsx(p,{strokeWidth:2.5,className:`h-5 w-5 transition-transform ${o?"rotate-180":""}`})}function h({title:o,body:t,position:c}){const[r,a]=d.useState(0),i=e=>a(r===e?0:e);return n.jsx("div",{className:"w-full px-4",children:n.jsxs(s.Accordion,{open:r===c,icon:n.jsx(x,{open:r}),children:[n.jsx(s.AccordionHeader,{onClick:()=>i(c),children:o}),n.jsx(s.AccordionBody,{className:"p-0 py-0 px-0",children:t})]})})}export{h as A};