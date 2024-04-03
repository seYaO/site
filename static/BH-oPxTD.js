import{_ as R,ad as K,ae as f,h as Q,v as V,i as X,j,b4 as Y,H as i,y as $,aT as Z,aw as _,ag as x,ah as c,o as y,c as I,a as ee,m as ae,r as b,n as g,b as k,l as O,b5 as le,b6 as ne}from"./V9yZGI70.js";import{u as ie}from"./BQ64LfcJ.js";const u=K(f.ui.strategy,f.ui.input,le),te=Q({components:{UIcon:V},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>u.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(u.size).includes(e)}},color:{type:String,default:()=>u.default.color,validator(e){return[...f.ui.colors,...Object.keys(u.color)].includes(e)}},variant:{type:String,default:()=>u.default.variant,validator(e){return[...Object.keys(u.variant),...Object.values(u.color).flatMap(n=>Object.keys(n))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},modelModifiers:{type:Object,default:()=>({})}},emits:["update:modelValue","blur","change"],setup(e,{emit:n,slots:p}){const{ui:a,attrs:C}=X("input",j(e,"ui"),u,j(e,"class")),{size:B,rounded:v}=Y({ui:a,props:e}),{emitFormBlur:r,emitFormInput:w,size:M,color:o,inputId:A,name:F}=ie(e,u),t=i(()=>B.value||M.value),d=$(Z({},e.modelModifiers,{trim:!1,lazy:!1,number:!1})),S=$(null),T=()=>{var l;e.autofocus&&((l=S.value)==null||l.focus())},z=l=>{d.value.trim&&(l=l.trim()),(d.value.number||e.type==="number")&&(l=ne(l)),n("update:modelValue",l),w()},q=l=>{d.value.lazy||z(l.target.value)},G=l=>{const s=l.target.value;n("change",s),d.value.lazy&&z(s),d.value.trim&&(l.target.value=s.trim())},W=l=>{r(),n("blur",l)};_(()=>{setTimeout(()=>{T()},e.autofocusDelay)});const U=i(()=>{var s,h;const l=((h=(s=a.value.color)==null?void 0:s[o.value])==null?void 0:h[e.variant])||a.value.variant[e.variant];return x(c(a.value.base,a.value.form,v.value,a.value.placeholder,e.type==="file"&&[a.value.file.base,a.value.file.padding[t.value]],a.value.size[t.value],e.padded?a.value.padding[t.value]:"p-0",l==null?void 0:l.replaceAll("{color}",o.value),(m.value||p.leading)&&a.value.leading.padding[t.value],(N.value||p.trailing)&&a.value.trailing.padding[t.value]),e.inputClass)}),m=i(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),N=i(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),D=i(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),L=i(()=>e.loading&&!m.value?e.loadingIcon:e.trailingIcon||e.icon),E=i(()=>c(a.value.icon.leading.wrapper,a.value.icon.leading.pointer,a.value.icon.leading.padding[t.value])),H=i(()=>c(a.value.icon.base,o.value&&f.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),J=i(()=>c(a.value.icon.trailing.wrapper,a.value.icon.trailing.pointer,a.value.icon.trailing.padding[t.value])),P=i(()=>c(a.value.icon.base,o.value&&f.ui.colors.includes(o.value)&&a.value.icon.color.replaceAll("{color}",o.value),a.value.icon.size[t.value],e.loading&&!m.value&&a.value.icon.loading));return{ui:a,attrs:C,name:F,inputId:A,input:S,isLeading:m,isTrailing:N,inputClass:U,leadingIconName:D,leadingIconClass:H,leadingWrapperIconClass:E,trailingIconName:L,trailingIconClass:P,trailingWrapperIconClass:J,onInput:q,onChange:G,onBlur:W}}}),ue=["id","name","value","type","required","placeholder","disabled"];function oe(e,n,p,a,C,B){const v=V;return y(),I("div",{class:g(e.ui.wrapper)},[ee("input",ae({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled,class:e.inputClass},e.attrs,{onInput:n[0]||(n[0]=(...r)=>e.onInput&&e.onInput(...r)),onBlur:n[1]||(n[1]=(...r)=>e.onBlur&&e.onBlur(...r)),onChange:n[2]||(n[2]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,ue),b(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(y(),I("span",{key:0,class:g(e.leadingWrapperIconClass)},[b(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[k(v,{name:e.leadingIconName,class:g(e.leadingIconClass)},null,8,["name","class"])])],2)):O("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(y(),I("span",{key:1,class:g(e.trailingWrapperIconClass)},[b(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[k(v,{name:e.trailingIconName,class:g(e.trailingIconClass)},null,8,["name","class"])])],2)):O("",!0)],2)}const de=R(te,[["render",oe]]);export{de as default};