import{f as m,w as h,g as p,i as R,u as b}from"./@vue-00b20f2b.js";function L(e,u){let a,s,l;const t=m(!0),r=()=>{t.value=!0,l()};h(e,r,{flush:"sync"});const c=typeof u=="function"?u:u.get,n=typeof u=="function"?void 0:u.set,f=p((i,v)=>(s=i,l=v,{get(){return t.value&&(a=c(),t.value=!1),s(),a},set(g){n==null||n(g)}}));return Object.isExtensible(f)&&(f.trigger=r),f}function d(e){return typeof e=="function"?e():b(e)}function T(e,u,a={}){var s,l;const{flush:t="sync",deep:r=!1,immediate:c=!0,direction:n="both",transform:f={}}=a;let i,v;const g=(s=f.ltr)!=null?s:o=>o,y=(l=f.rtl)!=null?l:o=>o;return(n==="both"||n==="ltr")&&(i=h(e,o=>u.value=g(o),{flush:t,deep:r,immediate:c})),(n==="both"||n==="rtl")&&(v=h(u,o=>e.value=y(o),{flush:t,deep:r,immediate:c})),()=>{i==null||i(),v==null||v()}}function _(e=!1,u={}){const{truthyValue:a=!0,falsyValue:s=!1}=u,l=R(e),t=m(e);function r(c){if(arguments.length)return t.value=c,t.value;{const n=d(a);return t.value=t.value===n?d(s):n,t.value}}return l?r:[t,r]}export{L as c,T as s,_ as u};
