import d from"./By2s7tbe.js";import{al as C,am as m,f as k,g as v,h as y,P as _,k as h,an as $,ao as N,o as s,x as b,a as B,c as a,F as P,B as u,n as S,l as j,m as f,aY as x,b as z,aX as U,w as V,r as A,ah as F,ai as O}from"./DJDH7cab.js";import{u as R}from"./BcCIWytS.js";import"./CURKfPiP.js";import{_ as T}from"./DlAUqK2U.js";import"./BuA2l-XM.js";import"./w0QRY-an.js";import"./qsMMcMsd.js";import"./CRlgh-lf.js";import"./DmGiWMkI.js";import"./C-JS2tqW.js";import"./CmIYMKuf.js";import"./DvDH6DOc.js";import"./aPxrJPp6.js";import"./BJBc6oPl.js";import"./blSOxsGD.js";import"./D7SpS0q0.js";const E={wrapper:"fixed flex flex-col justify-end z-[55]",position:"bottom-0 end-0",width:"w-full sm:w-96",container:"px-4 sm:px-6 py-6 space-y-3 overflow-y-auto"},I=C(m.ui.strategy,m.ui.notifications,E),J=k({components:{UNotification:d},inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(t){const{ui:e,attrs:r}=v("notifications",y(t,"ui"),I),i=R(),n=_("notifications",()=>[]),p=h(()=>$(N(e.value.wrapper,e.value.position,e.value.width),t.class));return{ui:e,attrs:r,toast:i,notifications:n,wrapperClass:p}}});function L(t,e,r,i,n,p){const g=d;return s(),b(x,{to:"body"},[B("div",f({class:t.wrapperClass,role:"region"},t.attrs),[t.notifications.length?(s(),a("div",{key:0,class:S(t.ui.container)},[(s(!0),a(P,null,u(t.notifications,o=>(s(),a("div",{key:o.id},[z(g,f(o,{class:o.click&&"cursor-pointer",onClick:c=>o.click&&o.click(o),onClose:c=>t.toast.remove(o.id)}),U({_:2},[u(t.$slots,(c,l)=>({name:l,fn:V(w=>[A(t.$slots,l,F(O(w)))])}))]),1040,["class","onClick","onClose"])]))),128))],2)):j("",!0)],16)])}const it=T(J,[["render",L]]);export{it as default};
