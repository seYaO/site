import{_ as o,an as r,ao as n,g as u,C as c,D as l,E as d,T as i,ap as p,o as g,c as f,K as k}from"./C7TJHJaz.js";const m={base:"animate-pulse",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-md"},b=r(n.ui.strategy,n.ui.skeleton,m),_=u({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:a}=c("skeleton",l(e,"ui"),b),t=d(()=>i(p(s.value.base,s.value.background,s.value.rounded),e.class));return{ui:s,attrs:a,skeletonClass:t}}});function y(e,s,a,t,C,v){return g(),f("div",k({class:e.skeletonClass},e.attrs),null,16)}const h=o(_,[["render",y]]);export{h as default};