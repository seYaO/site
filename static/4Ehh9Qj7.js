import{_ as a}from"./BvVAk_MM.js";import{r as s}from"./DDsPkp_K.js";import{h as c,H as i,o as l,s as m,w as p,k as f}from"./9uDDZz-A.js";const h=c({__name:"Alert",props:{title:{type:String},icon:{type:String},color:{type:String},to:{type:String}},setup(t){const e=t,r=i(()=>{var o;return(o=e.to)!=null&&o.startsWith("https://")?"_blank":""});return(o,u)=>{const n=a;return l(),m(n,{icon:t.icon,color:t.color,to:t.to,target:f(r),class:"font-medium"},{default:p(()=>[s(o.$slots,"default",{unwrap:"p"})]),_:3},8,["icon","color","to","target"])}}});export{h as _};