import{u as C}from"./CmsmlEZG.js";import{W as w,G as k,S as T,h as B}from"./BZK9BhBx.js";import{l as S}from"./B_pPgdEA.js";import{u as V}from"./BCi0gA2j.js";import{ae as D,ai as f,f as H,m,n as c,S as n,o as g,j as v,w as o,b as i,x as u,a as $,s as y,k as j,Z as F}from"./C5sPQ0dR.js";import"./CURKfPiP.js";import{_ as O}from"./DlAUqK2U.js";import"./1mMzwXPt.js";import"./Da8Ad9BN.js";import"./BobMB164.js";import"./DMPM3Jqy.js";import"./jthpZqva.js";import"./CxIZtCgj.js";import"./C8KVpnrQ.js";const P={wrapper:"fixed inset-0 flex z-50",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},base:"relative flex-1 flex flex-col w-full focus:outline-none",background:"bg-white dark:bg-gray-900",ring:"",rounded:"",padding:"",shadow:"shadow-xl",width:"w-screen max-w-md",translate:{base:"translate-x-0",left:"-translate-x-full rtl:translate-x-full",right:"translate-x-full rtl:-translate-x-full"},transition:{enter:"transform transition ease-in-out duration-300",leave:"transform transition ease-in-out duration-200"}},R=D(f.ui.strategy,f.ui.slideover,P),z=H({components:{HDialog:w,HDialogPanel:k,TransitionRoot:T,TransitionChild:B},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented"],setup(e,{emit:r}){const{ui:a,attrs:p}=V("slideover",m(e,"ui"),R,m(e,"class")),l=c({get(){return e.modelValue},set(t){r("update:modelValue",t)}}),d=c(()=>e.transition?{...a.value.transition,enterFrom:e.side==="left"?a.value.translate.left:a.value.translate.right,enterTo:a.value.translate.base,leaveFrom:a.value.translate.base,leaveTo:e.side==="left"?a.value.translate.left:a.value.translate.right}:{});function s(t){if(e.preventClose){r("close-prevented");return}l.value=t,r("close")}return S(()=>C("$zSEivjycv8")),{ui:a,attrs:p,isOpen:l,transitionClass:d,close:s}}});function N(e,r,a,p,l,d){const s=n("TransitionChild"),t=n("HDialogPanel"),h=n("HDialog"),b=n("TransitionRoot");return g(),v(b,{as:"template",appear:e.appear,show:e.isOpen},{default:o(()=>[i(h,u({class:[e.ui.wrapper,{"justify-end":e.side==="right"}]},e.attrs,{onClose:e.close}),{default:o(()=>[e.overlay?(g(),v(s,u({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:o(()=>[$("div",{class:y([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):j("",!0),i(s,u({as:"template",appear:e.appear},e.transitionClass),{default:o(()=>[i(t,{class:y([e.ui.base,e.ui.width,e.ui.background,e.ui.ring,e.ui.padding])},{default:o(()=>[F(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])]),_:3},16,["class","onClose"])]),_:3},8,["appear","show"])}const X=O(z,[["render",N]]);export{X as default};
