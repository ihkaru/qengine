import{c as l,V as F,W as v,P as M}from"./index.dea5ae4d.js";import{h as K,b}from"./render.e362b984.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},H={size:String};function T(e,t=Q){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const L="0 0 24 24",O=e=>e,S=e=>`ionicons ${e}`,j={"mdi-":e=>`mdi ${e}`,"icon-":O,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":S,"ion-ios":S,"ion-logo":S,"iconfont ":O,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},I={o_:"-outlined",r_:"-round",s_:"-sharp"},V={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},U=new RegExp("^("+Object.keys(j).join("|")+")"),W=new RegExp("^("+Object.keys(I).join("|")+")"),w=new RegExp("^("+Object.keys(V).join("|")+")"),G=/^[Mm]\s?[-+]?\.?\d/,J=/^img:/,X=/^svguse:/,Y=/^ion-/,Z=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var oe=F({name:"QIcon",props:{...H,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=M(),r=T(e),c=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=l(()=>{let a,n=e.name;if(n==="none"||!n)return{none:!0};if(o.iconMapFn!==null){const s=o.iconMapFn(n);if(s!==void 0)if(s.icon!==void 0){if(n=s.icon,n==="none"||!n)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(G.test(n)===!0){const[s,h=L]=n.split("|");return{svg:!0,viewBox:h,nodes:s.split("&&").map(R=>{const[$,x,k]=R.split("@@");return v("path",{style:x,d:$,transform:k})})}}if(J.test(n)===!0)return{img:!0,src:n.substring(4)};if(X.test(n)===!0){const[s,h=L]=n.split("|");return{svguse:!0,src:s.substring(7),viewBox:h}}let p=" ";const g=n.match(U);if(g!==null)a=j[g[1]](n);else if(Z.test(n)===!0)a=n;else if(Y.test(n)===!0)a=`ionicons ion-${o.platform.is.ios===!0?"ios":"md"}${n.substring(3)}`;else if(w.test(n)===!0){a="notranslate material-symbols";const s=n.match(w);s!==null&&(n=n.substring(6),a+=V[s[1]]),p=n}else{a="notranslate material-icons";const s=n.match(W);s!==null&&(n=n.substring(2),a+=I[s[1]]),p=n}return{cls:a,content:p}});return()=>{const a={class:c.value,style:r.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?v(e.tag,a,K(t.default)):u.value.img===!0?v(e.tag,a,b(t.default,[v("img",{src:u.value.src})])):u.value.svg===!0?v(e.tag,a,b(t.default,[v("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?v(e.tag,a,b(t.default,[v("svg",{viewBox:u.value.viewBox},[v("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),v(e.tag,a,b(t.default,[u.value.content])))}}});function q(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(o=>{q(e,o)}):e.add(t)}function ue(e){const t=new Set;return e.forEach(o=>{q(t,o)}),Array.from(t)}function ee(e){return e.appContext.config.globalProperties.$router!==void 0}function le(e){return e.isUnmounted===!0||e.isDeactivated===!0}function z(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function _(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function te(e,t){for(const o in t){const r=t[o],c=e[o];if(typeof r=="string"){if(r!==c)return!1}else if(Array.isArray(c)===!1||c.length!==r.length||r.some((u,a)=>u!==c[a]))return!1}return!0}function C(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((o,r)=>o===t[r]):e.length===1&&e[0]===t}function ne(e,t){return Array.isArray(e)===!0?C(e,t):Array.isArray(t)===!0?C(t,e):e===t}function re(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const o in e)if(ne(e[o],t[o])===!1)return!1;return!0}const se={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},ce={...se,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function fe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const o=M(),{props:r,proxy:c,emit:u}=o,a=ee(o),n=l(()=>r.disable!==!0&&r.href!==void 0),p=t===!0?l(()=>a===!0&&r.disable!==!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""):l(()=>a===!0&&n.value!==!0&&r.to!==void 0&&r.to!==null&&r.to!==""),g=l(()=>p.value===!0?E(r.to):null),s=l(()=>g.value!==null),h=l(()=>n.value===!0||s.value===!0),R=l(()=>r.type==="a"||h.value===!0?"a":r.tag||e||"div"),$=l(()=>n.value===!0?{href:r.href,target:r.target}:s.value===!0?{href:g.value.href,target:r.target}:{}),x=l(()=>{if(s.value===!1)return-1;const{matched:i}=g.value,{length:f}=i,d=i[f-1];if(d===void 0)return-1;const m=c.$route.matched;if(m.length===0)return-1;const y=m.findIndex(_.bind(null,d));if(y!==-1)return y;const B=z(i[f-2]);return f>1&&z(d)===B&&m[m.length-1].path!==B?m.findIndex(_.bind(null,i[f-2])):y}),k=l(()=>s.value===!0&&x.value!==-1&&te(c.$route.params,g.value.params)),A=l(()=>k.value===!0&&x.value===c.$route.matched.length-1&&re(c.$route.params,g.value.params)),D=l(()=>s.value===!0?A.value===!0?` ${r.exactActiveClass} ${r.activeClass}`:r.exact===!0?"":k.value===!0?` ${r.activeClass}`:"":"");function E(i){try{return c.$router.resolve(i)}catch{}return null}function P(i,{returnRouterError:f,to:d=r.to,replace:m=r.replace}={}){if(r.disable===!0)return i.preventDefault(),Promise.resolve(!1);if(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey||i.button!==void 0&&i.button!==0||r.target==="_blank")return Promise.resolve(!1);i.preventDefault();const y=c.$router[m===!0?"replace":"push"](d);return f===!0?y:y.then(()=>{}).catch(()=>{})}function N(i){if(s.value===!0){const f=d=>P(i,d);u("click",i,f),i.defaultPrevented!==!0&&f()}else u("click",i)}return{hasRouterLink:s,hasHrefLink:n,hasLink:h,linkTag:R,resolvedLink:g,linkIsActive:k,linkIsExactActive:A,linkClass:D,linkAttrs:$,getLink:E,navigateToRouterLink:P,navigateOnClick:N}}export{oe as Q,fe as a,Q as b,H as c,se as d,T as e,le as f,ue as g,ce as u,ee as v};
