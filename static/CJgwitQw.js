import{_ as w,ad as B,ae as c,h as V,i as q,j as g,aZ as I,H as m,ag as $,ah as A,o as n,c as s,a as d,X as j,b1 as N,m as O,n as t,r as D,d as F,t as b,l as u}from"./9uDDZz-A.js";import{u as J}from"./BCeNu00Q.js";const M={wrapper:"relative flex items-start",container:"flex items-center h-5",base:"h-4 w-4 dark:checked:bg-current dark:checked:border-transparent dark:indeterminate:bg-current dark:indeterminate:border-transparent disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent",form:"form-checkbox",rounded:"rounded",color:"text-{color}-500 dark:text-{color}-400",background:"bg-white dark:bg-gray-900",border:"border border-gray-300 dark:border-gray-700",ring:"focus-visible:ring-2 focus-visible:ring-{color}-500 dark:focus-visible:ring-{color}-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900",inner:"ms-3 flex flex-col",label:"text-sm font-medium text-gray-700 dark:text-gray-200",required:"text-sm text-red-500 dark:text-red-400",help:"text-sm text-gray-500 dark:text-gray-400",default:{color:"primary"}},v=B(c.ui.strategy,c.ui.checkbox,M),P=V({inheritAttrs:!1,props:{id:{type:String,default:()=>null},value:{type:[String,Number,Boolean,Object],default:null},modelValue:{type:[Boolean,Array],default:null},name:{type:String,default:null},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:void 0},help:{type:String,default:null},label:{type:String,default:null},required:{type:Boolean,default:!1},color:{type:String,default:()=>v.default.color,validator(e){return c.ui.colors.includes(e)}},inputClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","change"],setup(e,{emit:r}){const{ui:a,attrs:p}=q("checkbox",g(e,"ui"),v,g(e,"class")),{emitFormChange:f,color:l,name:o,inputId:y}=J(e),h=y.value??I("$YWrWuPJ69t"),k=m({get(){return e.modelValue},set(i){r("update:modelValue",i)}}),C=i=>{r("change",i.target.value),f()},S=m(()=>$(A(a.value.base,a.value.form,a.value.rounded,a.value.background,a.value.border,l.value&&a.value.ring.replaceAll("{color}",l.value),l.value&&a.value.color.replaceAll("{color}",l.value)),e.inputClass));return{ui:a,attrs:p,toggle:k,inputId:h,name:o,inputClass:S,onChange:C}}}),U=["data-n-ids"],W=["id","name","required","value","disabled","indeterminate"],z=["for"];function E(e,r,a,p,f,l){return n(),s("div",{class:t(e.ui.wrapper),"data-n-ids":e.attrs["data-n-ids"]},[d("div",{class:t(e.ui.container)},[j(d("input",O({id:e.inputId,"onUpdate:modelValue":r[0]||(r[0]=o=>e.toggle=o),name:e.name,required:e.required,value:e.value,disabled:e.disabled,indeterminate:e.indeterminate,type:"checkbox",class:e.inputClass},e.attrs,{onChange:r[1]||(r[1]=(...o)=>e.onChange&&e.onChange(...o))}),null,16,W),[[N,e.toggle]])],2),e.label||e.$slots.label?(n(),s("div",{key:0,class:t(e.ui.inner)},[d("label",{for:e.inputId,class:t(e.ui.label)},[D(e.$slots,"label",{},()=>[F(b(e.label),1)]),e.required?(n(),s("span",{key:0,class:t(e.ui.required)},"*",2)):u("",!0)],10,z),e.help?(n(),s("p",{key:0,class:t(e.ui.help)},b(e.help),3)):u("",!0)],2)):u("",!0)],10,U)}const R=w(P,[["render",E]]);export{R as default};