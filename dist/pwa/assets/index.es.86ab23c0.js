import{r as i,w as C,d as S,S as b,M as B,p as w,c as z,e as E,f as O,l as M,o as T,U as v}from"./index.9de547cf.js";const f=Symbol(),u=i(!1),c=i(!1),h=i(!1),p=i(0);let r=null;const P=()=>{const t=document.createElement("script");return t.src="https://accounts.google.com/gsi/client",t.async=!0,t.defer=!0,t},U=()=>{c.value=!0,r=P(),document.head.appendChild(r),r.onload=()=>{c.value=!1,u.value=!0},r.onerror=()=>{c.value=!1,h.value=!0}};C(()=>p.value,(t,o)=>{t>0&&!u.value&&!c.value&&U()});function G(){return T(()=>{p.value++}),w(()=>{p.value--}),{scriptLoaded:v(u),scriptLoadError:v(h)}}const L=S({__name:"GoogleSignInButton",props:{oneTap:{type:Boolean},autoSelect:{type:Boolean},loginUri:{},cancelOnTapOutside:{type:Boolean},promptParentId:{},nonce:{},context:{},stateCookieDomain:{},uxMode:{},allowedParentOrigin:{},itpSupport:{type:Boolean},type:{},theme:{},size:{},text:{},shape:{},logoAlignment:{},width:{},locale:{}},emits:["success","error","intermediateIframeCloseCallback","nativeCallback","promptMomentNotification"],setup(t,{emit:o}){const y={large:40,medium:32,small:20},e=t,l=o,k=b(f),d=i(null),{scriptLoaded:x}=G();B(()=>{var n,s,m,g;x.value&&((n=window.google)==null||n.accounts.id.initialize({client_id:k,callback:a=>{if(!a.credential){l("error");return}l("success",a)},allowed_parent_origin:e.allowedParentOrigin,auto_select:e.autoSelect,cancel_on_tap_outside:e.cancelOnTapOutside,context:e.context,intermediate_iframe_close_callback:()=>{l("intermediateIframeCloseCallback")},itp_support:e.itpSupport,login_uri:e.loginUri,native_callback:a=>{l("nativeCallback",a)},nonce:e.nonce,prompt_parent_id:e.promptParentId,state_cookie_domain:e.stateCookieDomain,ux_mode:e.uxMode}),(m=window.google)==null||m.accounts.id.renderButton(d.value,{type:e.type,theme:e.theme,size:e.size,text:e.text,shape:e.shape,logo_alignment:e.logoAlignment,width:(s=e.width)==null?void 0:s.toString(),locale:e.locale}),e.oneTap&&((g=window.google)==null||g.accounts.id.prompt(a=>{l("promptMomentNotification",a)})))}),w(()=>{var n;e.oneTap&&((n=window.google)==null||n.accounts.id.cancel())});const I=z(()=>y[e.size||"large"]);return(n,s)=>(E(),O("div",{ref_key:"targetElement",ref:d,style:M({display:"inline-flex",height:I.value})},null,4))}}),j="GoogleSignInPlugin",_=t=>`[${j}]: ${t}`,D={install(t,o){if(!o)throw new Error(_("initialize plugin by passing an options object"));if(!o.clientId||o.clientId&&o.clientId.trim().length===0)throw new Error(_("clientId is required to initialize"));t.provide(f,o.clientId),t.component("GoogleSignInButton",L)}};export{D as m,L as o};
