import V from"./CP4a_InL.js";import{_ as P}from"./4jBXJVXh.js";import{g as S,i as q,h as E,j as F,k as I,l as M,m as k,n as r,w as o,q as z,o as i,b as n,r as e,a,t as _,d as b,s as H,c as O,v as X,F as G,x as B,y as J,e as K,z as Q}from"./C7TJHJaz.js";import{_ as W,a as Y,b as Z,c as tt}from"./ByYmYX6i.js";import et from"./Dsf4Buwg.js";import ot from"./DDAqamyz.js";import{u as at}from"./CSOl673a.js";import{u as m}from"./CnaHMY7J.js";import"./De8AEDb_.js";import"./C-F1gjmX.js";const nt={class:"flex items-center space-x-2"},st={class:"text-gray-500 dark:text-gray-400"},lt={class:"mt-4 flex flex-wrap items-center gap-6"},it={class:"text-left"},ct={class:"font-medium"},rt={class:"text-gray-500 dark:text-gray-400 leading-4"},_t={class:"flex items-center justify-between mt-12 not-prose"},mt={class:"hidden lg:block space-y-6"},wt=S({__name:"[...slug]",async setup(pt){var g,y,x,h;let c,p;q("navigation");const d=E();F();const{data:t}=([c,p]=I(()=>at(d.path,()=>J(d.path).findOne(),"$3l9wwpBX1R")),c=await c,p(),c);if(!t.value)throw M({statusCode:404,statusMessage:"Article not found",fatal:!0});m({title:((g=t.value.head)==null?void 0:g.title)||t.value.title,description:((y=t.value.head)==null?void 0:y.description)||t.value.description});const u=((x=t.value.head)==null?void 0:x.title)||t.value.title,f=((h=t.value.head)==null?void 0:h.description)||t.value.description;if(m({titleTemplate:"%s · Nuxt Blog",title:u,description:f,ogDescription:f,ogTitle:`${u} · Nuxt Blog`}),t.value.image){const s=useSiteConfig();m({ogImage:k(s.url,t.value.image),twitterImage:k(s.url,t.value.image)})}return(s,dt)=>{const w=V,C=P,U=Q,$=W,D=et,N=K,L=Y,T=ot,j=Z,v=tt,A=z;return i(),r(A,null,{default:o(()=>[n(v,null,{default:o(()=>[n($,{title:e(t).title,description:e(t).description,ui:{headline:"flex flex-col gap-y-8 items-start"}},{headline:o(()=>[n(w,{links:[{label:"Blog",icon:"i-ph-newspaper-duotone",to:"/blogs"},{label:e(t).title}]},null,8,["links"]),a("div",nt,[a("span",null,_(e(t).category),1),a("span",st,[b(" ·   "),a("time",null,_(("formatDateByLocale"in s?s.formatDateByLocale:e(H))("en",e(t).date)),1)])])]),default:o(()=>[a("div",lt,[(i(!0),O(G,null,X(e(t).authors,(l,R)=>(i(),r(U,{key:R,to:l.link,target:"_blank",color:"white",variant:"ghost",class:"-my-1.5 -mx-2.5"},{default:o(()=>[n(C,{src:l.avatarUrl,alt:l.name},null,8,["src","alt"]),a("div",it,[a("p",ct,_(l.name),1),a("p",rt,_(`@${l.link.split("/").pop()}`),1)])]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),n(v,null,{right:o(()=>[e(t).body&&e(t).body.toc?(i(),r(j,{key:0,links:e(t).body.toc.links},{bottom:o(()=>[a("div",mt,[n(T,{type:"dashed"})])]),_:1},8,["links"])):B("",!0)]),default:o(()=>[n(L,{prose:"",class:"dark:text-gray-300 dark:prose-pre:!bg-gray-800/60"},{default:o(()=>[e(t)&&e(t).body?(i(),r(D,{key:0,value:e(t)},null,8,["value"])):B("",!0),a("div",_t,[n(N,{href:"/blogs",class:"text-primary"},{default:o(()=>[b("← Back to blog")]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}});export{wt as default};
