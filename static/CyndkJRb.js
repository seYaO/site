import{W as k,aE as z,as as W,_ as A,an as D,ao as P,g as X,z as O,C as I,D as M,aF as T,aG as V,ak as G,aH as H,E as $,T as J,o as n,c as l,a as S,F as j,v as F,L as c,J as v,x as p,K as b,n as N}from"./C7TJHJaz.js";const K={wrapper:"relative",container:"relative w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth",item:"flex flex-none snap-center",arrows:{wrapper:"flex items-center justify-between"},indicators:{wrapper:"absolute flex items-center justify-center gap-3 bottom-4 inset-x-0",base:"rounded-full h-3 w-3",active:"bg-primary-500 dark:bg-primary-400",inactive:"bg-gray-100 dark:bg-gray-800 mix-blend-overlay"},default:{prevButton:{color:"black",class:"rtl:[&_span:first-child]:rotate-180 absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"black",class:"rtl:[&_span:last-child]:rotate-180 absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full",icon:"i-heroicons-chevron-right-20-solid "}}},q=e=>{const r=k(0);function i(a){e.value.style.scrollSnapType="none",e.value.style.scrollBehavior="auto",r.value=a.pageX,window.addEventListener("mousemove",s),window.addEventListener("mouseup",u)}function u(){e.value.style.removeProperty("scroll-behavior"),e.value.style.removeProperty("scroll-snap-type"),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",u)}function s(a){a.preventDefault();const o=a.pageX-r.value;r.value=a.pageX,e.value.scrollBy(-o,0)}z(()=>{e.value&&e.value.addEventListener("mousedown",i)}),W(()=>{e.value&&e.value.removeEventListener("mousedown",i)})},y=D(P.ui.strategy,P.ui.carousel,K),Q=X({components:{UButton:O},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},arrows:{type:Boolean,default:!1},indicators:{type:Boolean,default:!1},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:void 0}},setup(e,{expose:r}){const{ui:i,attrs:u}=I("carousel",M(e,"ui"),y,M(e,"class")),s=k(),a=k(0),{x:o,arrivedState:t}=T(s,{behavior:"smooth"}),{width:d}=V(s),{left:R,right:U}=G(t);q(s),H(s,f=>{var E,L;const[m]=f;a.value=((L=(E=m==null?void 0:m.target)==null?void 0:E.firstElementChild)==null?void 0:L.clientWidth)||0});const g=$(()=>Math.round(o.value/a.value)+1),w=$(()=>a.value?e.items.length-Math.round(d.value/a.value)+1:0);function h(){o.value+=a.value}function C(){o.value-=a.value}function B(f){o.value=(f-1)*a.value}return r({pages:w,page:g,prev:C,next:h,select:B}),{ui:i,attrs:u,isFirst:R,isLast:U,carouselRef:s,pages:w,currentPage:g,onClickNext:h,onClickPrev:C,onClick:B,twMerge:J}}}),Y=["role"],Z=["aria-selected","aria-label","onClick"];function x(e,r,i,u,s,a){const o=O;return n(),l("div",b({class:e.ui.wrapper},e.attrs),[S("div",{ref:"carouselRef",class:c([e.ui.container,"no-scrollbar"])},[(n(!0),l(j,null,F(e.items,(t,d)=>(n(),l("div",{key:d,class:c(e.ui.item),role:e.indicators?"tabpanel":null},[v(e.$slots,"default",{item:t,index:d},void 0,!0)],10,Y))),128))],2),e.arrows?(n(),l("div",{key:0,class:c(e.ui.arrows.wrapper)},[v(e.$slots,"prev",{onClick:e.onClickPrev,disabled:e.isFirst},()=>{var t;return[e.prevButton?(n(),N(o,b({key:0,disabled:e.isFirst},{...e.ui.default.prevButton,...e.prevButton},{class:e.twMerge(e.ui.default.prevButton.class,(t=e.prevButton)==null?void 0:t.class),"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["disabled","class","onClick"])):p("",!0)]},!0),v(e.$slots,"next",{onClick:e.onClickNext,disabled:e.isLast},()=>{var t;return[e.nextButton?(n(),N(o,b({key:0,disabled:e.isLast},{...e.ui.default.nextButton,...e.nextButton},{class:e.twMerge(e.ui.default.nextButton.class,(t=e.nextButton)==null?void 0:t.class),"aria-label":"Next",onClick:e.onClickNext}),null,16,["disabled","class","onClick"])):p("",!0)]},!0)],2)):p("",!0),e.indicators?(n(),l("div",{key:1,role:"tablist",class:c(e.ui.indicators.wrapper)},[(n(!0),l(j,null,F(e.pages,t=>v(e.$slots,"indicator",{key:t,onClick:e.onClick,active:t===e.currentPage,page:t},()=>[S("button",{type:"button",role:"tab","aria-selected":t===e.currentPage,class:c([e.ui.indicators.base,t===e.currentPage?e.ui.indicators.active:e.ui.indicators.inactive]),"aria-label":`set slide ${t}`,onClick:d=>e.onClick(t)},null,10,Z)],!0)),128))],2)):p("",!0)],16)}const ee=A(Q,[["render",x],["__scopeId","data-v-67d56354"]]);export{ee as default};
