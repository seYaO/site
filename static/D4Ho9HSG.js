import{_ as y}from"./BtNuMUjy.js";import{_ as x,ae as A,af as d,g as B,q as k,bq as h,R as w,h as L,i as p,G as j,bo as M,ag as P,ah as S,o as t,c as s,F as m,l as v,m as n,n as l,b as V,w as q,r as u,s as c,k as o,d as F,t as I,br as J}from"./CJEpAnC7.js";const K={wrapper:"relative w-full flex items-center justify-between",container:"flex items-center min-w-0",inner:"min-w-0",base:"group relative w-full flex items-center gap-1.5 px-2.5 py-3.5 rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 disabled:cursor-not-allowed disabled:opacity-75",before:"before:absolute before:inset-x-0 before:inset-y-2 before:inset-px before:rounded-md hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",after:"after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2",active:"text-gray-900 dark:text-white after:bg-primary-500 dark:after:bg-primary-400 after:rounded-full",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ml-auto relative rounded",color:"gray",variant:"solid",size:"xs"}},O=A(d.ui.strategy,d.ui.horizontalNavigation,K),R=B({components:{UIcon:k,UAvatar:y,UBadge:h,ULink:w},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:g}=L("horizontalNavigation",p(e,"ui"),O,p(e,"class")),b=j(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:i,attrs:g,sections:b,getULinkProps:M,twMerge:P,twJoin:S}}}),D={key:0,class:"sr-only"};function E(e,i,g,b,G,H){const z=y,C=k,U=h,$=w;return t(),s("nav",n({class:e.ui.wrapper},e.attrs),[(t(!0),s(m,null,v(e.sections,(N,f)=>(t(),s("ul",{key:`section${f}`,class:l(e.ui.container)},[(t(!0),s(m,null,v(N,(a,_)=>(t(),s("li",{key:`section${f}-${_}`,class:l(e.ui.inner)},[V($,n(e.getULinkProps(a),{class:[e.ui.base,e.ui.before,e.ui.after],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:a.click,onKeyup:i[0]||(i[0]=J(r=>r.target.blur(),["enter"]))}),{default:q(({isActive:r})=>[u(e.$slots,"avatar",{link:a,isActive:r},()=>[a.avatar?(t(),c(z,n({key:0},{size:e.ui.avatar.size,...a.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):o("",!0)]),u(e.$slots,"icon",{link:a,isActive:r},()=>[a.icon?(t(),c(C,{key:0,name:a.icon,class:l(e.twMerge(e.twJoin(e.ui.icon.base,r?e.ui.icon.active:e.ui.icon.inactive),a.iconClass))},null,8,["name","class"])):o("",!0)]),u(e.$slots,"default",{link:a,isActive:r},()=>[a.label?(t(),s("span",{key:0,class:l(e.twMerge(e.ui.label,a.labelClass))},[r?(t(),s("span",D," Current page: ")):o("",!0),F(" "+I(a.label),1)],2)):o("",!0)]),u(e.$slots,"badge",{link:a,isActive:r},()=>[a.badge?(t(),c(U,n({key:0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof a.badge=="string"||typeof a.badge=="number"?{label:a.badge}:a.badge},{class:e.ui.badge.base}),null,16,["class"])):o("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])],2))),128))],2))),128))],16)}const W=x(R,[["render",E]]);export{W as default};
