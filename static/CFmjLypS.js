import{_ as oe,an as J,bb as se,ao as p,be as re,g as de,M as Z,C as D,D as E,E as u,b0 as ce,b1 as ge,bc as be,W as pe,T as me,ap as y,b9 as ve,bf as fe,X as ye,b2 as Me,av as M,o as t,n as I,w as h,a as C,L as i,b as v,K as L,c as d,J as A,x as b,b3 as Ie,F as he,v as Ce,R as Ae,t as P,d as Q,bg as Se,b4 as ke}from"./C7TJHJaz.js";import{_ as K}from"./4jBXJVXh.js";import{Z as Oe,t as qe,l as we,a as Be,o as ze}from"./1rQcsTaq.js";import{u as He}from"./xUuKlAAP.js";import"./NPLVrZwD.js";import"./DOAPWWPy.js";const s=J(p.ui.strategy,p.ui.input,se),T=J(p.ui.strategy,p.ui.inputMenu,re),Ne=de({components:{HCombobox:Oe,HComboboxButton:qe,HComboboxOptions:we,HComboboxOption:Be,HComboboxInput:ze,UIcon:Z,UAvatar:K},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>s.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>T.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>T.default.selectedIcon},disabled:{type:Boolean,default:!1},nullable:{type:Boolean,default:!1},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(s.size).includes(e)}},color:{type:String,default:()=>s.default.color,validator(e){return[...p.ui.colors,...Object.keys(s.color)].includes(e)}},variant:{type:String,default:()=>s.default.variant,validator(e){return[...Object.keys(s.variant),...Object.values(s.color).flatMap(r=>Object.keys(r))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},search:{type:Function,default:void 0},searchAttributes:{type:Array,default:null},debounce:{type:Number,default:200},popper:{type:Object,default:()=>({})},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:r,slots:B}){const{ui:a,attrs:W}=D("input",E(e,"ui"),s,E(e,"class")),{ui:z}=D("inputMenu",E(e,"uiMenu"),T),S=u(()=>ce({},e.popper,z.value.popper)),[m,k]=ge(S.value),{size:H,rounded:N}=be({ui:a,props:e}),{emitFormBlur:V,emitFormChange:$,inputId:j,color:n,size:U,name:f}=He(e,s),o=u(()=>H.value||U.value),O=pe(""),c=u({get(){return e.query??O.value},set(l){O.value=l,r("update:query",l)}}),X=u(()=>{if(e.modelValue)if(e.valueAttribute){const l=e.options.find(g=>g[e.valueAttribute]===e.modelValue);return l?l[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute]}),Y=u(()=>{var g,w;const l=((w=(g=a.value.color)==null?void 0:g[n.value])==null?void 0:w[e.variant])||a.value.variant[e.variant];return me(y(a.value.base,a.value.form,N.value,a.value.placeholder,a.value.size[o.value],e.padded?a.value.padding[o.value]:"p-0",l==null?void 0:l.replaceAll("{color}",n.value),(q.value||B.leading)&&a.value.leading.padding[o.value],(G.value||B.trailing)&&a.value.trailing.padding[o.value]),e.inputClass)}),q=u(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),G=u(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),_=u(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),x=u(()=>e.loading&&!q.value?e.loadingIcon:e.trailingIcon||e.icon),ee=u(()=>y(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[o.value])),ae=u(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&a.value.icon.loading)),ne=u(()=>y(a.value.icon.trailing.wrapper,a.value.icon.trailing.padding[o.value])),le=u(()=>y(a.value.icon.base,n.value&&p.ui.colors.includes(n.value)&&a.value.icon.color.replaceAll("{color}",n.value),a.value.icon.size[o.value],e.loading&&!q.value&&a.value.icon.loading)),R=e.search&&typeof e.search=="function"?ve(e.search,e.debounce):void 0,ie=fe(async()=>R?await R(c.value):c.value===""?e.options:e.options.filter(l=>{var g;return((g=e.searchAttributes)!=null&&g.length?e.searchAttributes:[e.optionAttribute]).some(w=>{if(["string","number"].includes(typeof l))return String(l).search(new RegExp(c.value,"i"))!==-1;const F=Se(l,w);return F!=null&&String(F).search(new RegExp(c.value,"i"))!==-1})}));ye(k,l=>{l?r("open"):(r("close"),V())});function ue(l){c.value="",r("update:modelValue",l),r("change",l),$()}function te(l){c.value=l.target.value}return Me(()=>ke("$2NLPEfaykI")),{ui:a,uiMenu:z,attrs:W,name:f,inputId:j,popper:S,trigger:m,container:k,label:X,isLeading:q,isTrailing:G,inputClass:Y,leadingIconName:_,leadingIconClass:ae,leadingWrapperIconClass:ee,trailingIconName:x,trailingIconClass:le,trailingWrapperIconClass:ne,filteredOptions:ie,query:c,onUpdate:ue,onQueryChange:te}}}),Ve={class:"truncate"};function $e(e,r,B,a,W,z){const S=M("HComboboxInput"),m=Z,k=M("HComboboxButton"),H=K,N=M("HComboboxOption"),V=M("HComboboxOptions"),$=M("HCombobox");return t(),I($,{by:e.by,name:e.name,"model-value":e.modelValue,disabled:e.disabled,nullable:e.nullable,as:"div",class:i(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:h(({open:j})=>[C("div",{class:i(e.uiMenu.trigger)},[v(S,L({id:e.inputId,name:e.name,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass,autocomplete:"off"},e.attrs,{"display-value":()=>e.query?e.query:e.label,onChange:e.onQueryChange}),null,16,["id","name","required","placeholder","disabled","class","display-value","onChange"]),e.isLeading&&e.leadingIconName||e.$slots.leading?(t(),d("span",{key:0,class:i(e.leadingWrapperIconClass)},[A(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[v(m,{name:e.leadingIconName,class:i(e.leadingIconClass)},null,8,["name","class"])])],2)):b("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(t(),I(k,{key:1,ref:"trigger",class:i(e.trailingWrapperIconClass)},{default:h(()=>[A(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[v(m,{name:e.trailingIconName,class:i(e.trailingIconClass)},null,8,["name","class"])])]),_:3},8,["class"])):b("",!0)],2),j?(t(),d("div",{key:0,ref:"container",class:i([e.uiMenu.container,e.uiMenu.width])},[v(Ie,L({appear:""},e.uiMenu.transition),{default:h(()=>[C("div",null,[e.popper.arrow?(t(),d("div",{key:0,"data-popper-arrow":"",class:i(Object.values(e.uiMenu.arrow))},null,2)):b("",!0),v(V,{static:"",class:i([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:h(()=>[(t(!0),d(he,null,Ce(e.filteredOptions,(n,U)=>(t(),I(N,{key:U,as:"template",value:e.valueAttribute?n[e.valueAttribute]:n,disabled:n.disabled},{default:h(({active:f,selected:o,disabled:O})=>[C("li",{class:i([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,f?e.uiMenu.option.active:e.uiMenu.option.inactive,o&&e.uiMenu.option.selected,O&&e.uiMenu.option.disabled])},[C("div",{class:i(e.uiMenu.option.container)},[A(e.$slots,"option",{option:n,active:f,selected:o},()=>[n.icon?(t(),I(m,{key:0,name:n.icon,class:i([e.uiMenu.option.icon.base,f?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,n.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):n.avatar?(t(),I(H,L({key:1},{size:e.uiMenu.option.avatar.size,...n.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):n.chip?(t(),d("span",{key:2,class:i(e.uiMenu.option.chip.base),style:Ae({background:`#${n.chip}`})},null,6)):b("",!0),C("span",Ve,P(["string","number"].includes(typeof n)?n:n[e.optionAttribute]),1)])],2),o?(t(),d("span",{key:0,class:i([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[v(m,{name:e.selectedIcon,class:i(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):b("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.query&&!e.filteredOptions.length?(t(),d("p",{key:0,class:i(e.uiMenu.option.empty)},[A(e.$slots,"option-empty",{query:e.query},()=>[Q(' No results for "'+P(e.query)+'". ',1)])],2)):e.filteredOptions.length?b("",!0):(t(),d("p",{key:1,class:i(e.uiMenu.empty)},[A(e.$slots,"empty",{query:e.query},()=>[Q(" No options. ")])],2))]),_:3},8,["class"])])]),_:3},16)],2)):b("",!0)]),_:3},8,["by","name","model-value","disabled","nullable","class","onUpdate:modelValue"])}const We=oe(Ne,[["render",$e]]);export{We as default};
