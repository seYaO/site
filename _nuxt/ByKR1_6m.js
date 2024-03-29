import y from"./Dz76i-L0.js";import{ae as C,ai as d,f as z,m as S,n as a,ap as f,aq as i,r as j,y as A,o as l,c as s,x as O,s as o,t as m,j as P,k as w,Z as E}from"./C5sPQ0dR.js";import{u as $}from"./BCi0gA2j.js";import"./CURKfPiP.js";import{_ as B}from"./DlAUqK2U.js";const I={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},r=C(d.ui.strategy,d.ui.avatar,I),T=z({components:{UIcon:y},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>r.default.icon},size:{type:String,default:()=>r.default.size,validator(e){return Object.keys(r.size).includes(e)}},chipColor:{type:String,default:()=>r.default.chipColor,validator(e){return["gray",...d.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>r.default.chipPosition,validator(e){return Object.keys(r.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:h}=$("avatar",S(e,"ui"),r),u=a(()=>typeof e.src=="boolean"?null:e.src),x=a(()=>(e.alt||"").split(" ").map(k=>k.charAt(0)).join("").substring(0,2)),g=a(()=>f(i(t.value.wrapper,(n.value||!u.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),p=a(()=>f(i(t.value.rounded,t.value.size[e.size]),e.imgClass)),c=a(()=>i(t.value.icon.base,t.value.icon.size[e.size])),b=a(()=>i(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),n=j(!1);A(()=>e.src,()=>{n.value&&(n.value=!1)});function v(){n.value=!0}return{ui:t,attrs:h,wrapperClass:g,imgClass:p,iconClass:c,chipClass:b,url:u,placeholder:x,error:n,onError:v}}}),U=["alt","src"];function M(e,t,h,u,x,g){const p=y;return l(),s("span",{class:o(e.wrapperClass)},[e.url&&!e.error?(l(),s("img",O({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:t[0]||(t[0]=(...c)=>e.onError&&e.onError(...c))}),null,16,U)):e.text?(l(),s("span",{key:1,class:o(e.ui.text)},m(e.text),3)):e.icon?(l(),P(p,{key:2,name:e.icon,class:o(e.iconClass)},null,8,["name","class"])):e.placeholder?(l(),s("span",{key:3,class:o(e.ui.placeholder)},m(e.placeholder),3)):w("",!0),e.chipColor?(l(),s("span",{key:4,class:o(e.chipClass)},m(e.chipText),3)):w("",!0),E(e.$slots,"default")],2)}const N=B(T,[["render",M]]),V=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{V as A,N as _,I as a};
