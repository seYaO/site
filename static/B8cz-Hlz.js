import{g as J,V as P,E as r,aO as F,aI as we,aJ as Ae,aK as Ve,aL as w,aM as Re,aN as Be,aP as _,aE as ue,W as se,ab as ve,bk as Pe,bl as Te,bm as De,aQ as ee,bn as He,F as fe,aR as re,aS as je,aT as ze,aU as ce,ar as Ne,aV as qe,a8 as U,i as Ee,a_ as Fe,at as T,aW as I,_ as Ue,am as ge,bt as We,an as W,bu as $e,M as me,C as pe,D as ie,b0 as Ke,b1 as Ge,bc as Qe,S as Je,ao as K,b9 as Ze,bf as Ye,b2 as Xe,au as xe,o as h,n as N,w as $,c as V,L as v,x as z,a2 as G,J as q,a as E,K as oe,b as X,t as Q,b3 as _e,v as ea,aA as aa,d as be,bg as la,b4 as ta}from"./BSUBDl1Y.js";import{_ as ye}from"./B69SJpkB.js";import{Z as na,t as ia,l as oa,a as ua,o as sa}from"./BQ-inmW_.js";import{d as ra,e as da}from"./mkWX_hW-.js";import{p as va}from"./DmiVkfUb.js";import{f as ca,c as A,u as pa}from"./DqjIHM2o.js";import{u as ba}from"./C6tjrTQH.js";function fa(e,f){return e===f}var ga=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ga||{}),ma=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(ma||{}),ya=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(ya||{});function ha(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let he=Symbol("ListboxContext");function ae(e){let f=Ee(he,null);if(f===null){let k=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(k,ae),k}return f}let Oa=J({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>fa},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:f,attrs:k,emit:o}){let c=P(1),g=P(null),a=P(null),O=P(null),d=P([]),p=P(""),b=P(null),n=P(1);function t(l=i=>i){let i=b.value!==null?d.value[b.value]:null,u=Fe(l(d.value.slice()),M=>w(M.dataRef.domRef)),s=i?u.indexOf(i):null;return s===-1&&(s=null),{options:u,activeOptionIndex:s}}let L=r(()=>e.multiple?1:0),[m,C]=ra(r(()=>e.modelValue),l=>o("update:modelValue",l),r(()=>e.defaultValue)),R=r(()=>m.value===void 0?F(L.value,{1:[],0:void 0}):m.value),S={listboxState:c,value:R,mode:L,compare(l,i){if(typeof e.by=="string"){let u=e.by;return(l==null?void 0:l[u])===(i==null?void 0:i[u])}return e.by(l,i)},orientation:r(()=>e.horizontal?"horizontal":"vertical"),labelRef:g,buttonRef:a,optionsRef:O,disabled:r(()=>e.disabled),options:d,searchQuery:p,activeOptionIndex:b,activationTrigger:n,closeListbox(){e.disabled||c.value!==1&&(c.value=1,b.value=null)},openListbox(){e.disabled||c.value!==0&&(c.value=0)},goToOption(l,i,u){if(e.disabled||c.value===1)return;let s=t(),M=ca(l===A.Specific?{focus:A.Specific,id:i}:{focus:l},{resolveItems:()=>s.options,resolveActiveIndex:()=>s.activeOptionIndex,resolveId:j=>j.id,resolveDisabled:j=>j.dataRef.disabled});p.value="",b.value=M,n.value=u??1,d.value=s.options},search(l){if(e.disabled||c.value===1)return;let i=p.value!==""?0:1;p.value+=l.toLowerCase();let u=(b.value!==null?d.value.slice(b.value+i).concat(d.value.slice(0,b.value+i)):d.value).find(M=>M.dataRef.textValue.startsWith(p.value)&&!M.dataRef.disabled),s=u?d.value.indexOf(u):-1;s===-1||s===b.value||(b.value=s,n.value=1)},clearSearch(){e.disabled||c.value!==1&&p.value!==""&&(p.value="")},registerOption(l,i){let u=t(s=>[...s,{id:l,dataRef:i}]);d.value=u.options,b.value=u.activeOptionIndex},unregisterOption(l){let i=t(u=>{let s=u.findIndex(M=>M.id===l);return s!==-1&&u.splice(s,1),u});d.value=i.options,b.value=i.activeOptionIndex,n.value=1},theirOnChange(l){e.disabled||C(l)},select(l){e.disabled||C(F(L.value,{0:()=>l,1:()=>{let i=T(S.value.value).slice(),u=T(l),s=i.findIndex(M=>S.compare(u,T(M)));return s===-1?i.push(u):i.splice(s,1),i}}))}};we([a,O],(l,i)=>{var u;S.closeListbox(),Ae(i,Ve.Loose)||(l.preventDefault(),(u=w(a))==null||u.focus())},r(()=>c.value===0)),Re(he,S),Be(r(()=>F(c.value,{0:_.Open,1:_.Closed})));let D=r(()=>{var l;return(l=w(a))==null?void 0:l.closest("form")});return ue(()=>{se([D],()=>{if(!D.value||e.defaultValue===void 0)return;function l(){S.theirOnChange(e.defaultValue)}return D.value.addEventListener("reset",l),()=>{var i;(i=D.value)==null||i.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:i,disabled:u,form:s,...M}=e,j={open:c.value===0,disabled:u,value:R.value};return ve(fe,[...l!=null&&R.value!=null?da({[l]:R.value}).map(([Z,le])=>ve(Pe,Te({features:De.Hidden,key:Z,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:s,name:Z,value:le}))):[],ee({ourProps:{},theirProps:{...k,...He(M,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:j,slots:f,attrs:k,name:"Listbox"})])}}}),Sa=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:f,slots:k,expose:o}){var c;let g=(c=e.id)!=null?c:`headlessui-listbox-button-${re()}`,a=ae("ListboxButton");o({el:a.buttonRef,$el:a.buttonRef});function O(n){switch(n.key){case I.Space:case I.Enter:case I.ArrowDown:n.preventDefault(),a.openListbox(),U(()=>{var t;(t=w(a.optionsRef))==null||t.focus({preventScroll:!0}),a.value.value||a.goToOption(A.First)});break;case I.ArrowUp:n.preventDefault(),a.openListbox(),U(()=>{var t;(t=w(a.optionsRef))==null||t.focus({preventScroll:!0}),a.value.value||a.goToOption(A.Last)});break}}function d(n){switch(n.key){case I.Space:n.preventDefault();break}}function p(n){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),U(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(n.preventDefault(),a.openListbox(),ha(()=>{var t;return(t=w(a.optionsRef))==null?void 0:t.focus({preventScroll:!0})})))}let b=je(r(()=>({as:e.as,type:f.type})),a.buttonRef);return()=>{var n,t;let L={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...m}=e,C={ref:a.buttonRef,id:g,type:b.value,"aria-haspopup":"listbox","aria-controls":(n=w(a.optionsRef))==null?void 0:n.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(t=w(a.labelRef))==null?void 0:t.id,g].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:O,onKeyup:d,onClick:p};return ee({ourProps:C,theirProps:m,slot:L,attrs:f,slots:k,name:"ListboxButton"})}}}),Ma=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:f,slots:k,expose:o}){var c;let g=(c=e.id)!=null?c:`headlessui-listbox-options-${re()}`,a=ae("ListboxOptions"),O=P(null);o({el:a.optionsRef,$el:a.optionsRef});function d(n){switch(O.value&&clearTimeout(O.value),n.key){case I.Space:if(a.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),a.search(n.key);case I.Enter:if(n.preventDefault(),n.stopPropagation(),a.activeOptionIndex.value!==null){let t=a.options.value[a.activeOptionIndex.value];a.select(t.dataRef.value)}a.mode.value===0&&(a.closeListbox(),U(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})}));break;case F(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Next);case F(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Previous);case I.Home:case I.PageUp:return n.preventDefault(),n.stopPropagation(),a.goToOption(A.First);case I.End:case I.PageDown:return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Last);case I.Escape:n.preventDefault(),n.stopPropagation(),a.closeListbox(),U(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})});break;case I.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(a.search(n.key),O.value=setTimeout(()=>a.clearSearch(),350));break}}let p=ze(),b=r(()=>p!==null?(p.value&_.Open)===_.Open:a.listboxState.value===0);return()=>{var n,t;let L={open:a.listboxState.value===0},{...m}=e,C={"aria-activedescendant":a.activeOptionIndex.value===null||(n=a.options.value[a.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(t=w(a.buttonRef))==null?void 0:t.id,"aria-orientation":a.orientation.value,id:g,onKeydown:d,role:"listbox",tabIndex:0,ref:a.optionsRef};return ee({ourProps:C,theirProps:m,slot:L,attrs:f,slots:k,features:ce.RenderStrategy|ce.Static,visible:b.value,name:"ListboxOptions"})}}}),Ia=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:f,attrs:k,expose:o}){var c;let g=(c=e.id)!=null?c:`headlessui-listbox-option-${re()}`,a=ae("ListboxOption"),O=P(null);o({el:O,$el:O});let d=r(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===g:!1),p=r(()=>F(a.mode.value,{0:()=>a.compare(T(a.value.value),T(e.value)),1:()=>T(a.value.value).some(l=>a.compare(T(l),T(e.value)))})),b=r(()=>F(a.mode.value,{1:()=>{var l;let i=T(a.value.value);return((l=a.options.value.find(u=>i.some(s=>a.compare(T(s),T(u.dataRef.value)))))==null?void 0:l.id)===g},0:()=>p.value})),n=va(O),t=r(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:O}));ue(()=>a.registerOption(g,t)),Ne(()=>a.unregisterOption(g)),ue(()=>{se([a.listboxState,p],()=>{a.listboxState.value===0&&p.value&&F(a.mode.value,{1:()=>{b.value&&a.goToOption(A.Specific,g)},0:()=>{a.goToOption(A.Specific,g)}})},{immediate:!0})}),qe(()=>{a.listboxState.value===0&&d.value&&a.activationTrigger.value!==0&&U(()=>{var l,i;return(i=(l=w(O))==null?void 0:l.scrollIntoView)==null?void 0:i.call(l,{block:"nearest"})})});function L(l){if(e.disabled)return l.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),U(()=>{var i;return(i=w(a.buttonRef))==null?void 0:i.focus({preventScroll:!0})}))}function m(){if(e.disabled)return a.goToOption(A.Nothing);a.goToOption(A.Specific,g)}let C=pa();function R(l){C.update(l)}function S(l){C.wasMoved(l)&&(e.disabled||d.value||a.goToOption(A.Specific,g,0))}function D(l){C.wasMoved(l)&&(e.disabled||d.value&&a.goToOption(A.Nothing))}return()=>{let{disabled:l}=e,i={active:d.value,selected:p.value,disabled:l},{value:u,disabled:s,...M}=e,j={id:g,ref:O,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":p.value,disabled:void 0,onClick:L,onFocus:m,onPointerenter:R,onMouseenter:R,onPointermove:S,onMousemove:S,onPointerleave:D,onMouseleave:D};return ee({ourProps:j,theirProps:M,slot:i,attrs:k,slots:f,name:"ListboxOption"})}}});const H=ge(W.ui.strategy,W.ui.select,We),x=ge(W.ui.strategy,W.ui.selectMenu,$e),Ca=J({components:{HCombobox:na,HComboboxButton:ia,HComboboxOptions:oa,HComboboxOption:ua,HComboboxInput:sa,HListbox:Oa,HListboxButton:Sa,HListboxOptions:Ma,HListboxOption:Ia,UIcon:me,UAvatar:ye},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>H.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>H.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>x.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},clearSearchOnClose:{type:Boolean,default:()=>x.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>x.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(H.size).includes(e)}},color:{type:String,default:()=>H.default.color,validator(e){return[...W.ui.colors,...Object.keys(H.color)].includes(e)}},variant:{type:String,default:()=>H.default.variant,validator(e){return[...Object.keys(H.variant),...Object.values(H.color).flatMap(f=>Object.keys(f))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:f,slots:k}){const{ui:o,attrs:c}=pe("select",ie(e,"ui"),H,ie(e,"class")),{ui:g}=pe("selectMenu",ie(e,"uiMenu"),x),a=r(()=>Ke({},e.popper,g.value.popper)),[O,d]=Ge(a.value),{size:p,rounded:b}=Qe({ui:o,props:e}),{emitFormBlur:n,emitFormChange:t,inputId:L,color:m,size:C,name:R}=ba(e,H),S=r(()=>p.value||C.value),D=P(""),l=r({get(){return e.query??D.value},set(y){D.value=y,f("update:query",y)}}),i=r(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue!==void 0&&e.modelValue!==null)if(e.valueAttribute){const y=e.options.find(B=>B[e.valueAttribute]===e.modelValue);return y?y[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),u=r(()=>{var B,Y;const y=((Y=(B=o.value.color)==null?void 0:B[m.value])==null?void 0:Y[e.variant])||o.value.variant[e.variant];return Je(K(o.value.base,g.value.select,b.value,o.value.size[S.value],o.value.gap[S.value],e.padded?o.value.padding[S.value]:"p-0",y==null?void 0:y.replaceAll("{color}",m.value),(s.value||k.leading)&&o.value.leading.padding[S.value],(M.value||k.trailing)&&o.value.trailing.padding[S.value]),e.placeholder&&e.modelValue===void 0&&e.modelValue===null&&o.value.placeholder,e.selectClass)}),s=r(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),M=r(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),j=r(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Z=r(()=>e.loading&&!s.value?e.loadingIcon:e.trailingIcon||e.icon),le=r(()=>K(o.value.icon.leading.wrapper,o.value.icon.leading.pointer,o.value.icon.leading.padding[S.value])),Oe=r(()=>K(o.value.icon.base,m.value&&W.ui.colors.includes(m.value)&&o.value.icon.color.replaceAll("{color}",m.value),o.value.icon.size[S.value],e.loading&&o.value.icon.loading)),Se=r(()=>K(o.value.icon.trailing.wrapper,o.value.icon.trailing.pointer,o.value.icon.trailing.padding[S.value])),Me=r(()=>K(o.value.icon.base,m.value&&W.ui.colors.includes(m.value)&&o.value.icon.color.replaceAll("{color}",m.value),o.value.icon.size[S.value],e.loading&&!s.value&&o.value.icon.loading)),de=typeof e.searchable=="function"?Ze(e.searchable,e.debounce):void 0,te=Ye(async()=>e.searchable&&de?await de(l.value):l.value===""?e.options:e.options.filter(y=>{var B;return((B=e.searchAttributes)!=null&&B.length?e.searchAttributes:[e.optionAttribute]).some(Y=>{if(["string","number"].includes(typeof y))return String(y).search(new RegExp(l.value,"i"))!==-1;const ne=la(y,Y);return ne!=null&&String(ne).search(new RegExp(l.value,"i"))!==-1})})),Ie=r(()=>l.value===""||e.showCreateOptionWhen==="empty"&&te.value.length||e.showCreateOptionWhen==="always"&&te.value.find(B=>["string","number"].includes(typeof B)?B===l.value:B[e.optionAttribute]===l.value)?null:["string","number"].includes(typeof e.modelValue)?l.value:{[e.optionAttribute]:l.value});function Ce(){e.clearSearchOnClose&&(l.value="")}se(d,y=>{y?f("open"):(Ce(),f("close"),n())});function ke(y){f("update:modelValue",y)}function Le(y){f("change",y.target.value),t(),l.value=y.target.value}return Xe(()=>ta("$YMH7mn4R4k")),{ui:o,uiMenu:g,attrs:c,name:R,inputId:L,popper:a,trigger:O,container:d,label:i,isLeading:s,isTrailing:M,selectClass:u,leadingIconName:j,leadingIconClass:Oe,leadingWrapperIconClass:le,trailingIconName:Z,trailingIconClass:Me,trailingWrapperIconClass:Se,filteredOptions:te,createOption:Ie,query:l,onUpdate:ke,onChange:Le}}}),ka=["value","required"],La=["id","disabled"],wa={class:"truncate"};function Aa(e,f,k,o,c,g){const a=me,O=xe("HComboboxInput"),d=ye;return h(),N(G(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:v(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:$(({open:p})=>[e.required?(h(),V("input",{key:0,value:e.modelValue,required:e.required,class:v(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,ka)):z("",!0),(h(),N(G(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:v(e.uiMenu.trigger)},{default:$(()=>[q(e.$slots,"default",{open:p,disabled:e.disabled,loading:e.loading},()=>[E("button",oe({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(h(),V("span",{key:0,class:v(e.leadingWrapperIconClass)},[q(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[X(a,{name:e.leadingIconName,class:v(e.leadingIconClass)},null,8,["name","class"])])],2)):z("",!0),q(e.$slots,"label",{},()=>[e.label?(h(),V("span",{key:0,class:v(e.uiMenu.label)},Q(e.label),3)):(h(),V("span",{key:1,class:v(e.uiMenu.label)},Q(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(h(),V("span",{key:1,class:v(e.trailingWrapperIconClass)},[q(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[X(a,{name:e.trailingIconName,class:v(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):z("",!0)],16,La)])]),_:2},1032,["class"])),p?(h(),V("div",{key:1,ref:"container",class:v([e.uiMenu.container,e.uiMenu.width])},[X(_e,oe({appear:""},e.uiMenu.transition),{default:$(()=>[E("div",null,[e.popper.arrow?(h(),V("div",{key:0,"data-popper-arrow":"",class:v(Object.values(e.uiMenu.arrow))},null,2)):z("",!0),(h(),N(G(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:v([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:$(()=>{var b,n;return[e.searchable?(h(),N(O,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:v(e.uiMenu.input),onChange:e.onChange},null,8,["display-value","placeholder","class","onChange"])):z("",!0),(h(!0),V(fe,null,ea(e.filteredOptions,(t,L)=>(h(),N(G(e.searchable?"HComboboxOption":"HListboxOption"),{key:L,as:"template",value:e.valueAttribute?t[e.valueAttribute]:t,disabled:t.disabled},{default:$(({active:m,selected:C,disabled:R})=>[E("li",{class:v([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,m?e.uiMenu.option.active:e.uiMenu.option.inactive,C&&e.uiMenu.option.selected,R&&e.uiMenu.option.disabled])},[E("div",{class:v(e.uiMenu.option.container)},[q(e.$slots,"option",{option:t,active:m,selected:C},()=>[t.icon?(h(),N(a,{key:0,name:t.icon,class:v([e.uiMenu.option.icon.base,m?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,t.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):t.avatar?(h(),N(d,oe({key:1},{size:e.uiMenu.option.avatar.size,...t.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):t.chip?(h(),V("span",{key:2,class:v(e.uiMenu.option.chip.base),style:aa({background:`#${t.chip}`})},null,6)):z("",!0),E("span",wa,Q(["string","number"].includes(typeof t)?t:t[e.optionAttribute]),1)])],2),C?(h(),V("span",{key:0,class:v([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[X(a,{name:e.selectedIcon,class:v(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):z("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(h(),N(G(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:$(({active:t,selected:L})=>[E("li",{class:v([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,t?e.uiMenu.option.active:e.uiMenu.option.inactive])},[E("div",{class:v(e.uiMenu.option.container)},[q(e.$slots,"option-create",{option:e.createOption,active:t,selected:L},()=>[E("span",{class:v(e.uiMenu.option.create)},'Create "'+Q(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((b=e.filteredOptions)!=null&&b.length)?(h(),V("p",{key:2,class:v(e.uiMenu.option.empty)},[q(e.$slots,"option-empty",{query:e.query},()=>[be(' No results for "'+Q(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?z("",!0):(h(),V("p",{key:3,class:v(e.uiMenu.empty)},[q(e.$slots,"empty",{query:e.query},()=>[be(" No options. ")])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):z("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const ja=Ue(Ca,[["render",Aa]]);export{ja as default};
