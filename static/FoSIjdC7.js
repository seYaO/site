import{_ as U,ae as $,af as g,g as I,v as j,h as q,i as F,G as h,o as c,c as L,r as B,s as b,m as f,k as m,F as E,l as W,aw as D}from"./CJEpAnC7.js";const R={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},u=$(g.ui.strategy,g.ui.pagination,R),X=$(g.ui.strategy,g.ui.button,D),H=I({components:{UButton:j},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},disabled:{type:Boolean,default:!1},size:{type:String,default:()=>u.default.size,validator(e){return Object.keys(X.size).includes(e)}},activeButton:{type:Object,default:()=>u.default.activeButton},inactiveButton:{type:Object,default:()=>u.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>u.default.firstButton},lastButton:{type:Object,default:()=>u.default.lastButton},prevButton:{type:Object,default:()=>u.default.prevButton},nextButton:{type:Object,default:()=>u.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:C}){const{ui:y,attrs:z}=q("pagination",F(e,"ui"),u,F(e,"class")),i=h({get(){return e.modelValue},set(n){C("update:modelValue",n)}}),p=h(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(n,o)=>o+1)),r=h(()=>{const n=p.value.length,o=i.value,P=Math.max(e.max,5),l=Math.floor((Math.min(P,n)-5)/2),O=o-l,k=o+l,N=O-1>1,w=k+1<n,t=[];if(n<=P){for(let a=1;a<=n;a++)t.push(a);return t}if(t.push(1),N&&t.push(e.divider),!w){const a=o+l+2-n;for(let d=o-l-a;d<=o-l-1;d++)t.push(d)}for(let a=Math.max(2,O);a<=Math.min(n,k);a++)t.push(a);if(!N){const a=1-(o-l-2);for(let d=o+l+1;d<=o+l+a;d++)t.push(d)}return w&&t.push(e.divider),k<n&&t.push(n),t.length>=3&&t[1]===e.divider&&t[2]===3&&(t[1]=2),t.length>=3&&t[t.length-2]===e.divider&&t[t.length-1]===t.length&&(t[t.length-2]=t.length-1),t}),s=h(()=>i.value>1),v=h(()=>i.value<p.value.length);function G(){s.value&&(i.value=1)}function M(){v.value&&(i.value=p.value.length)}function V(n){typeof n!="string"&&(i.value=n)}function A(){s.value&&i.value--}function S(){v.value&&i.value++}return{ui:y,attrs:z,currentPage:i,pages:p,displayedPages:r,canGoLastOrNext:v,canGoFirstOrPrev:s,onClickPrev:A,onClickNext:S,onClickPage:V,onClickFirst:G,onClickLast:M}}});function J(e,C,y,z,i,p){const r=j;return c(),L("div",f({class:e.ui.wrapper},e.attrs),[B(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(c(),b(r,f({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):m("",!0)]),B(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(c(),b(r,f({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):m("",!0)]),(c(!0),L(E,null,W(e.displayedPages,(s,v)=>(c(),b(r,f({key:`${s}-${v}`,size:e.size,disabled:e.disabled,label:`${s}`},s===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof s=="string","z-[1]":s===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(s)}),null,16,["size","disabled","label","class","onClick"]))),128)),B(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(c(),b(r,f({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):m("",!0)]),B(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(c(),b(r,f({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):m("",!0)])],16)}const Q=U(H,[["render",J]]);export{Q as default};
