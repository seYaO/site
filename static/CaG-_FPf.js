import{_ as a}from"./BTCOSV2I.js";import{r as c}from"./BHC2xO8p.js";import{g as s,E as i,o as l,n as m,w as p,r as f}from"./C7TJHJaz.js";const S=s({__name:"Alert",props:{title:{type:String},icon:{type:String},color:{type:String},to:{type:String}},setup(t){const r=t,e=i(()=>{var o;return(o=r.to)!=null&&o.startsWith("https://")?"_blank":""});return(o,u)=>{const n=a;return l(),m(n,{icon:t.icon,color:t.color,to:t.to,target:f(e),class:"font-medium"},{default:p(()=>[c(o.$slots,"default",{unwrap:"p"})]),_:3},8,["icon","color","to","target"])}}});export{S as _};
