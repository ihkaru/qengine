import{V as L,r as m,ab as D,e as t,j as f,w as o,g as d,b0 as K,b1 as U,am as x,f as a,i as u,F as A,x as T,aZ as I,aY as _,q as s,A as i,aA as E}from"./index.78336c92.js";import{Q as M}from"./QPage.4cad2686.js";import{u as O}from"./useKegiatanService.b5d9f56f.js";import{u as C}from"./useSyncService.1deadd02.js";import"./local-forage.02328131.js";import"./_commonjsHelpers.dffb1198.js";import"./axios.252dd036.js";import"./use-quasar.a2a52b10.js";import"./useOnlineStatus.c1f476c7.js";const q={class:"row q-col-gutter-sm"},Q={class:"text-caption text-grey"},V={class:"row q-col-gutter-sm"},h={class:"text-caption text-grey"},W={class:"row q-col-gutter-md text-center"},G={class:"text-h6"},H={class:"text-caption"},ee={__name:"DaftarRekapLevel1Page",setup(J){const B=L(),S=m(null),p=O(),b=C(),g=m(null),v=m({});D(async()=>{S.value=await p.getSelectedKegiatan(),v.value=await b.getDataKegiatan(S.value.id),console.log(v.value)});const k=m([{fields:{PROVINSI:"KALIMANTAN BARAT","KABUPATEN/KOTA":"MEMPAWAH",KECAMATAN:"JONGKAT",DESA:"PENITI LUAR",NBS:"001B",NKS:"200001",SLS:"RT 002 RW 01 DUSUN KARYA BHAKTI"},stats:{Open:0,Submit:0,Reject:0,Pending:0,Approved:10}},{fields:{PROVINSI:"KALIMANTAN BARAT","KABUPATEN/KOTA":"MEMPAWAH",KECAMATAN:"SEGEDONG",DESA:"PARIT BUGIS",NBS:"001B",NKS:"150112",SLS:"RT 004 RW 002 DUSUN KERANJI, RT 005 RW 002 DUSUN KERANJI"},stats:{Open:0,Submit:0,Reject:0,Pending:0,Approved:10}}]),P=e=>{var n;return console.log("before embeded:",e),Boolean((n=e.fields)==null?void 0:n.PROVINSI)||(e.fields={},e.fields.PROVINSI=e.sls.provinsi,e.fields["KABUPATEN/KOTA"]=e.sls.kabkot,e.fields.KECAMATAN=e.sls.kecamatan,e.fields["DESA/KELURAHAN"]=e.sls.desa_kel,e.fields["RT/SLS"]=e.sls.nama),console.log("embeded:",e),e},R=async e=>{var n;g.value=e,await p.setSelectedLevel1(g.value),console.log("selectedLevel1",await p.getSelectedLevel1()),B.push(`/nav/kegiatans/${S.value.id}/${(n=e.sls_id)!=null?n:"haha"}`)};return(e,n)=>(t(),f(M,{class:"q-pa-md"},{default:o(()=>[d(U,{outlined:"",dense:"",placeholder:"Search",class:"q-mb-md"},{prepend:o(()=>[d(K,{name:"search"})]),_:1}),d(x,{color:"primary",label:"SYNC ASSIGNMENT",class:"q-mb-md"}),(t(!0),a(A,null,u(v.value.wilayahKerjas,(r,N)=>T((t(),f(I,{onClick:c=>R(r),flat:"",bordered:"",key:N,class:"q-mb-md"},{default:o(()=>[d(_,null,{default:o(()=>[s("div",q,[(t(!0),a(A,null,u(P(r).fields,(c,l)=>(t(),a("div",{class:"col-4",key:l},[s("div",Q,i(l),1),s("div",null,i(c),1)]))),128))])]),_:2},1024)]),_:2},1032,["onClick"])),[[E]])),128)),(t(!0),a(A,null,u(k.value,(r,N)=>T((t(),f(I,{onClick:R,flat:"",bordered:"",key:N,class:"q-mb-md"},{default:o(()=>[d(_,null,{default:o(()=>[s("div",V,[(t(!0),a(A,null,u(r.fields,(c,l)=>(t(),a("div",{class:"col-4",key:l},[s("div",h,i(l),1),s("div",null,i(c),1)]))),128))])]),_:2},1024),d(_,null,{default:o(()=>[s("div",W,[(t(!0),a(A,null,u(r.stats,(c,l)=>(t(),a("div",{class:"col",key:l},[s("div",G,i(c),1),s("div",H,i(l),1)]))),128))])]),_:2},1024)]),_:2},1024)),[[E]])),128))]),_:1}))}};export{ee as default};
