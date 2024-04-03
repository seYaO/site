import E from"./POPiJn-g.js";import{_,ad as ee,ae as F,h as te,v as L,x as z,i as ae,j as M,H as y,bo as oe,aT as P,b9 as $,o,c as r,a as u,n as s,b as j,l as h,F as I,q as D,r as k,s as U,m as O,t as v,D as se,d as ne,ai as T}from"./V9yZGI70.js";import H from"./CggMZmBM.js";import{u as le}from"./C-F1gjmX.js";import"./BQ64LfcJ.js";const re={wrapper:"relative overflow-x-auto",base:"min-w-full table-fixed",divide:"divide-y divide-gray-300 dark:divide-gray-700",thead:"relative",tbody:"divide-y divide-gray-200 dark:divide-gray-800",tr:{base:"",selected:"bg-gray-50 dark:bg-gray-800/50",active:"hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"},th:{base:"text-left rtl:text-right",padding:"px-4 py-3.5",color:"text-gray-900 dark:text-white",font:"font-semibold",size:"text-sm"},td:{base:"whitespace-nowrap",padding:"px-4 py-4",color:"text-gray-500 dark:text-gray-400",font:"",size:"text-sm"},checkbox:{padding:"ps-4"},loadingState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin"},emptyState:{wrapper:"flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14",label:"text-sm text-center text-gray-900 dark:text-white",icon:"w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4"},progress:{wrapper:"absolute inset-x-0 -bottom-[0.5px] p-0"},default:{sortAscIcon:"i-heroicons-bars-arrow-up-20-solid",sortDescIcon:"i-heroicons-bars-arrow-down-20-solid",sortButton:{icon:"i-heroicons-arrows-up-down-20-solid",trailing:!0,square:!0,color:"gray",variant:"ghost",class:"-m-1.5"},progress:{color:"primary",animation:"carousel"},loadingState:{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."},emptyState:{icon:"i-heroicons-circle-stack-20-solid",label:"No items."}}},p=ee(F.ui.strategy,F.ui.table,re);function ie(e,l){return e===l}function q(e,l,f){return e===l?0:f==="asc"?e<l?-1:1:e>l?-1:1}const ue=te({components:{UIcon:L,UButton:z,UProgress:H,UCheckbox:E},inheritAttrs:!1,props:{modelValue:{type:Array,default:null},by:{type:[String,Function],default:()=>ie},rows:{type:Array,default:()=>[]},columns:{type:Array,default:null},columnAttribute:{type:String,default:"label"},sort:{type:Object,default:()=>({})},sortMode:{type:String,default:"auto"},sortButton:{type:Object,default:()=>p.default.sortButton},sortAscIcon:{type:String,default:()=>p.default.sortAscIcon},sortDescIcon:{type:String,default:()=>p.default.sortDescIcon},loading:{type:Boolean,default:!1},loadingState:{type:Object,default:()=>p.default.loadingState},emptyState:{type:Object,default:()=>p.default.emptyState},progress:{type:Object,default:()=>p.default.progress},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","update:sort"],setup(e,{emit:l,attrs:f}){const{ui:S,attrs:R}=ae("table",M(e,"ui"),p,M(e,"class")),w=y(()=>e.columns??Object.keys(e.rows[0]??{}).map(t=>({key:t,label:le(t),sortable:!1,class:void 0,sort:q}))),n=oe(e,"sort",l,{passive:!0,defaultValue:P({},e.sort,{column:null,direction:"asc"})}),V={column:n.value.column,direction:null},C=y(()=>{var m;if(!((m=n.value)!=null&&m.column)||e.sortMode==="manual")return e.rows;const{column:t,direction:i}=n.value;return e.rows.slice().sort((W,X)=>{var N;const Y=$(W,t),Z=$(X,t);return(((N=w.value.find(x=>x.key===t))==null?void 0:N.sort)??q)(Y,Z,i)})}),d=y({get(){return e.modelValue},set(t){l("update:modelValue",t)}}),a=y(()=>d.value&&d.value.length>0&&d.value.length<e.rows.length),g=y(()=>e.emptyState===null?null:{...S.value.default.emptyState,...e.emptyState}),c=y(()=>e.loadingState===null?null:{...S.value.default.loadingState,...e.loadingState});function B(t,i){if(typeof e.by=="string"){const m=e.by;return(t==null?void 0:t[m])===(i==null?void 0:i[m])}return e.by(t,i)}function b(t){return e.modelValue?d.value.some(i=>B(T(i),T(t))):!1}function A(t){if(n.value.column===t.key){const i=!t.direction||t.direction==="asc"?"desc":"asc";n.value.direction===i?n.value=P({},V,{column:null,direction:"asc"}):n.value={column:n.value.column,direction:n.value.direction==="asc"?"desc":"asc"}}else n.value={column:t.key,direction:t.direction||"asc"}}function G(t){f.onSelect&&f.onSelect(t)}function J(){e.rows.forEach(t=>{b(t)||d.value.push(t)})}function K(t){t.target.checked?J():d.value=[]}function Q(t,i,m=""){return $(t,i,m)}return{ui:S,attrs:R,sort:n,columns:w,rows:C,selected:d,indeterminate:a,emptyState:g,loadingState:c,isSelected:b,onSort:A,onSelect:G,onChange:K,getRowData:Q}}}),de={key:1},ce={key:0},me={key:0},pe=["colspan"],ge={key:1},ye=["colspan"],fe=["onClick"];function be(e,l,f,S,R,w){const n=E,V=z,C=H,d=L;return o(),r("div",O({class:e.ui.wrapper},e.attrs),[u("table",{class:s([e.ui.base,e.ui.divide])},[u("thead",{class:s(e.ui.thead)},[u("tr",{class:s(e.ui.tr.base)},[e.modelValue?(o(),r("th",{key:0,scope:"col",class:s(e.ui.checkbox.padding)},[j(n,{"model-value":e.indeterminate||e.selected.length===e.rows.length,indeterminate:e.indeterminate,"aria-label":"Select all",onChange:e.onChange},null,8,["model-value","indeterminate","onChange"])],2)):h("",!0),(o(!0),r(I,null,D(e.columns,(a,g)=>(o(),r("th",{key:g,scope:"col",class:s([e.ui.th.base,e.ui.th.padding,e.ui.th.color,e.ui.th.font,e.ui.th.size,a.class])},[k(e.$slots,`${a.key}-header`,{column:a,sort:e.sort,onSort:e.onSort},()=>[a.sortable?(o(),U(V,O({key:0},{...e.ui.default.sortButton||{},...e.sortButton},{icon:!e.sort.column||e.sort.column!==a.key?e.sortButton.icon||e.ui.default.sortButton.icon:e.sort.direction==="asc"?e.sortAscIcon:e.sortDescIcon,label:a[e.columnAttribute],onClick:c=>e.onSort(a)}),null,16,["icon","label","onClick"])):(o(),r("span",de,v(a[e.columnAttribute]),1))])],2))),128))],2),e.loading&&e.progress?(o(),r("tr",ce,[u("td",{colspan:0,class:s(e.ui.progress.wrapper)},[j(C,O({...e.ui.default.progress||{},...e.progress},{size:"2xs"}),null,16)],2)])):h("",!0)],2),u("tbody",{class:s(e.ui.tbody)},[e.loadingState&&e.loading&&!e.rows.length?(o(),r("tr",me,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[k(e.$slots,"loading-state",{},()=>[u("div",{class:s(e.ui.loadingState.wrapper)},[e.loadingState.icon?(o(),U(d,{key:0,name:e.loadingState.icon,class:s(e.ui.loadingState.icon),"aria-hidden":"true"},null,8,["name","class"])):h("",!0),u("p",{class:s(e.ui.loadingState.label)},v(e.loadingState.label),3)],2)])],8,pe)])):e.emptyState&&!e.rows.length?(o(),r("tr",ge,[u("td",{colspan:e.columns.length+(e.modelValue?1:0)},[k(e.$slots,"empty-state",{},()=>[u("div",{class:s(e.ui.emptyState.wrapper)},[e.emptyState.icon?(o(),U(d,{key:0,name:e.emptyState.icon,class:s(e.ui.emptyState.icon),"aria-hidden":"true"},null,8,["name","class"])):h("",!0),u("p",{class:s(e.ui.emptyState.label)},v(e.emptyState.label),3)],2)])],8,ye)])):(o(!0),r(I,{key:2},D(e.rows,(a,g)=>(o(),r("tr",{key:g,class:s([e.ui.tr.base,e.isSelected(a)&&e.ui.tr.selected,e.$attrs.onSelect&&e.ui.tr.active,a==null?void 0:a.class]),onClick:()=>e.onSelect(a)},[e.modelValue?(o(),r("td",{key:0,class:s(e.ui.checkbox.padding)},[j(n,{modelValue:e.selected,"onUpdate:modelValue":l[0]||(l[0]=c=>e.selected=c),value:a,"aria-label":"Select row",onClick:l[1]||(l[1]=se(()=>{},["stop"]))},null,8,["modelValue","value"])],2)):h("",!0),(o(!0),r(I,null,D(e.columns,(c,B)=>{var b;return o(),r("td",{key:B,class:s([e.ui.td.base,e.ui.td.padding,e.ui.td.color,e.ui.td.font,e.ui.td.size,(b=a[c.key])==null?void 0:b.class])},[k(e.$slots,`${c.key}-data`,{column:c,row:a,index:g,getRowData:A=>e.getRowData(a,c.key,A)},()=>[ne(v(e.getRowData(a,c.key)),1)])],2)}),128))],10,fe))),128))],2)],2)],16)}const Ce=_(ue,[["render",be]]);export{Ce as default};
