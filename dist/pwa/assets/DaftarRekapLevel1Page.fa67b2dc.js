import{V as L,r as v,ab as D,ac as K,b as s,i as _,w as n,f as d,b6 as U,b7 as M,ap as O,e as a,h as u,F as A,v as T,b3 as E,b2 as f,p as t,z as i,aE as I}from"./index.6100804f.js";import{Q as h}from"./QPage.9610dc88.js";import{u as x}from"./useSyncService.2b6924ae.js";import"./use-quasar.087a6977.js";import"./useOnlineStatus.7641e145.js";const C={class:"row q-col-gutter-sm"},q={class:"text-caption text-grey"},Q={class:"row q-col-gutter-sm"},V={class:"text-caption text-grey"},W={class:"row q-col-gutter-md text-center"},G={class:"text-h6"},H={class:"text-caption"},Z={__name:"DaftarRekapLevel1Page",setup(J){const b=L(),S=v(null),m=D(),B=x(),g=v(null),p=v({});K(async()=>{S.value=await m.getSelectedKegiatan(),p.value=await B.getDataKegiatan(S.value.id),console.log("hahaha",p.value,S.value.id)});const k=v([{fields:{PROVINSI:"KALIMANTAN BARAT","KABUPATEN/KOTA":"MEMPAWAH",KECAMATAN:"JONGKAT",DESA:"PENITI LUAR",NBS:"001B",NKS:"200001",SLS:"RT 002 RW 01 DUSUN KARYA BHAKTI"},stats:{Open:0,Submit:0,Reject:0,Pending:0,Approved:10}},{fields:{PROVINSI:"KALIMANTAN BARAT","KABUPATEN/KOTA":"MEMPAWAH",KECAMATAN:"SEGEDONG",DESA:"PARIT BUGIS",NBS:"001B",NKS:"150112",SLS:"RT 004 RW 002 DUSUN KERANJI, RT 005 RW 002 DUSUN KERANJI"},stats:{Open:0,Submit:0,Reject:0,Pending:0,Approved:10}}]),P=e=>{var o;return console.log("before embeded:",e),Boolean((o=e.fields)==null?void 0:o.PROVINSI)||(e.fields={},e.fields.PROVINSI=e.sls.provinsi,e.fields["KABUPATEN/KOTA"]=e.sls.kabkot,e.fields.KECAMATAN=e.sls.kecamatan,e.fields["DESA/KELURAHAN"]=e.sls.desa_kel,e.fields["RT/SLS"]=e.sls.nama),console.log("embeded:",e),e},R=async e=>{var o;g.value=e,await m.setSelectedLevel1(g.value),console.log("selectedLevel1",await m.getSelectedLevel1()),b.push(`/nav/kegiatans/${S.value.id}/${(o=e.sls_id)!=null?o:"haha"}`)};return(e,o)=>(s(),_(h,{class:"q-pa-md"},{default:n(()=>[d(M,{outlined:"",dense:"",placeholder:"Search",class:"q-mb-md"},{prepend:n(()=>[d(U,{name:"search"})]),_:1}),d(O,{color:"primary",label:"SYNC ASSIGNMENT",class:"q-mb-md"}),(s(!0),a(A,null,u(p.value.wilayahKerjas,(r,N)=>T((s(),_(E,{onClick:c=>R(r),flat:"",bordered:"",key:N,class:"q-mb-md"},{default:n(()=>[d(f,null,{default:n(()=>[t("div",C,[(s(!0),a(A,null,u(P(r).fields,(c,l)=>(s(),a("div",{class:"col-4",key:l},[t("div",q,i(l),1),t("div",null,i(c),1)]))),128))])]),_:2},1024)]),_:2},1032,["onClick"])),[[I]])),128)),(s(!0),a(A,null,u(k.value,(r,N)=>T((s(),_(E,{onClick:R,flat:"",bordered:"",key:N,class:"q-mb-md"},{default:n(()=>[d(f,null,{default:n(()=>[t("div",Q,[(s(!0),a(A,null,u(r.fields,(c,l)=>(s(),a("div",{class:"col-4",key:l},[t("div",V,i(l),1),t("div",null,i(c),1)]))),128))])]),_:2},1024),d(f,null,{default:n(()=>[t("div",W,[(s(!0),a(A,null,u(r.stats,(c,l)=>(s(),a("div",{class:"col",key:l},[t("div",G,i(c),1),t("div",H,i(l),1)]))),128))])]),_:2},1024)]),_:2},1024)),[[I]])),128))]),_:1}))}};export{Z as default};
