import{ah as x,ar as I,K as p,M as f}from"./C5sPQ0dR.js";const g="data-n-ids",m="-";function _(t){var i,o,d,u,a,c;if(typeof t!="string")throw new TypeError("[nuxt] [useId] key must be a string.");t=`n${t.slice(1)}`;const e=p(),n=f();if(!n)throw new TypeError("[nuxt] `useId` must be called within a component setup function.");e._id||(e._id=0),n._nuxtIdIndex||(n._nuxtIdIndex={}),(i=n._nuxtIdIndex)[t]||(i[t]=0);const r=t+m+n._nuxtIdIndex[t]++;if(e.payload.serverRendered&&e.isHydrating&&!x(I,!1)){const s=((o=n.vnode.el)==null?void 0:o.nodeType)===8&&((u=(d=n.vnode.el)==null?void 0:d.nextElementSibling)!=null&&u.getAttribute)?(a=n.vnode.el)==null?void 0:a.nextElementSibling:n.vnode.el,l=JSON.parse(((c=s==null?void 0:s.getAttribute)==null?void 0:c.call(s,g))||"{}");if(l[r])return l[r]}return t+"_"+e._id++}export{_ as u};
