import t from"./local-forage.02328131.js";import{api as f}from"./axios.db1a236f.js";import{u as D}from"./use-quasar.977ff2bc.js";import{_ as T}from"./index.es.65217309.js";import{r as c,o as A,t as h}from"./index.f91c9f79.js";function F(){const i=c(null),g=c(null),d=c(null),a=async()=>(Boolean(i.value)||(i.value=await t.getItem("kegiatans")),i.value),o=async n=>{await t.setItem("isLoggedIn",n),d.value=n},r=async()=>await t.getItem("isLoggedIn"),k=async n=>{await t.setItem("kegiatans",n),i.value=null},l=async()=>(Boolean(g.value)||(g.value=await t.getItem("rekapitulasi_kegiatan")),g.value),u=async n=>{await t.setItem("rekapitulasi_kegiatan",n),g.value=n},I=async()=>{console.log("init kegiatan data"),console.log("init kegiatan data after",await a(),await r()),!Boolean(await a())&&await r()&&(console.log("calling API"),f.get("/kegiatans?per_page=30").then(async n=>{await u(n.data.rekapitulasi),await k(n.data.kegiatans),console.log("init",n)}))},v=async()=>{await k(null),await u(null)};return A(async()=>{await I()}),{getKegiatans:a,getRekapitulasiKegiatan:l,handleLogoutKegiatanService:v,setIsLoggedIn:o,getIsLoggedIn:r}}function $(){const{handleLogoutKegiatanService:i,getIsLoggedIn:g,setIsLoggedIn:d}=F(),a=c(null),o=c(null),r=c(null),k=D(),l=e=>{e?f.defaults.headers.common.Authorization=`Bearer ${e}`:delete f.defaults.headers.common.Authorization},u=e=>{r.value=e},I=()=>r.value,v=async()=>{try{return a.value=await w(),Boolean(a.value)?Boolean(o.value)?(console.log("is expired",o.value<currentTime),o.value<currentTime):(console.log("2token is expired",a.value),!0):(console.log("1token is expired",a.value),!0)}catch{return!0}},n=async()=>{const e=await t.getItem("token"),s=await t.getItem("token_expires_at");Boolean(e)&&(a.value=e,l(e)),Boolean(s)&&(o.value=s)},p=async()=>{try{return Boolean(o.value)||(o.value=await t.getItem("token_expires_at")),new Date(o.value)}catch(e){return k.notify({message:"Gagal: "+e.message}),null}},_=e=>{if(!Boolean(e))return"N/A";const s={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},m=new Intl.DateTimeFormat("id-ID",s).format(e);return console.log(m),m},x=async()=>_(await p());h(a,e=>{e?(t.setItem("token",e),l(e)):(t.removeItem("token"),l(null))}),h(o,e=>{Boolean(e)?(t.setItem("token_expires_at",e),console.log("expires at has been set",e),l(e)):t.removeItem("token_expires_at")});const w=async()=>(Boolean(a.value)||(a.value=await t.getItem("token")),a.value),B=async()=>{let e=await w();return console.log("this is token",e),!e||v()?"/login":"/home/beranda"},L=async e=>{try{const s=T(e);y(s),d(!0),console.log("Credential: ",e);const m=await f.post("/login",{email:s.email,credentials:e});a.value=m.data.access_token,o.value=m.data.expires_at,console.log("this is token expired date",o.value)}catch(s){throw console.error("Login failed:",s),s}u(!0)},K=async()=>{a.value=null,o.value=null,await t.setItem("user",null),await t.setItem("token",null),await t.setItem("token_expires_at",null),await i(),d(!1),u(!1)},y=async e=>{await t.setItem("user",e)},S=async()=>await t.getItem("user");return n(),{token:a,login:L,logout:K,getToken:w,redirectIfTokenExpired:B,getFormattedTokenExpirationDate:x,isTokenExpired:v,getTokenExpirationDate:p,user:S,setUser:y,initToken:n,setShowSuccessLogin:u,getShowSuccessLogin:I}}export{F as a,$ as u};
