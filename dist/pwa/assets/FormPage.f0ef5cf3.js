import{Q as A,a as r,b as C}from"./QPageSticky.352b6d56.js";import{V as k,W as w,r as m,ab as R,ac as T,o as Q,a as S,b as q,i as V,w as a,f as e,y as K,b3 as M,b2 as g,ap as l,ar as i,bE as N,v as B,bp as D,p as P}from"./index.483fdc7e.js";import{Q as F}from"./QPage.7e093402.js";import{C as L}from"./ClosePopup.36235245.js";import{s as j}from"./survey.core.d74b13b2.js";import{u as E}from"./use-quasar.535c9ca6.js";const I=P("div",{class:"text-h6"},"Approval",-1),G={__name:"FormPage",setup(J){const u=E(),d=k(),p=w(),o=m(!1),f=function(){o.value=!o.value},s=m(null),b=R();T(async()=>{s.value=await b.getSelectedKegiatan(),console.log(s.value)}),Q(async()=>{p.query.mode=="tambahAssignment"&&u.notify({progress:!0,message:"Mode tambah assignment",icon:"info",color:"blue",textColor:"white",timeout:2e3}),p.query.mode=="editAssignment"&&u.notify({progress:!0,message:"Mode edit assignment",icon:"info",color:"blue",textColor:"white",timeout:2e3})});const v=t=>{const n=JSON.stringify(t.data);alert(n)},_=()=>{d.push({path:`/nav/kegiatans/${s.value.id}/haha`,query:{isSaveSuccess:!0}})},x={questions:[{type:"text",name:"kepalaRumahTangga",title:"Nama Kepala Rumah Tangga",isRequired:!0},{type:"paneldynamic",name:"anggotaRumahTangga",title:"Anggota Rumah Tangga Lainnya",renderMode:"progressTop",panelCount:1,panelAddText:"Tambahkan Anggota Rumah Tangga",panelRemoveText:"Hapus Anggota Rumah Tangga",templateTitle:"Anggota #{panelIndex}",templateElements:[{type:"text",name:"namaAnggota",title:"Nama Anggota",isRequired:!0}]}]},c=new j.exports.Model(x);return c.onComplete.add(function(t){navigator.onLine?v(t):(window.localStorage.setItem("surveyResults",JSON.stringify(t.data)),alert("Data disimpan secara lokal"))}),(t,n)=>{const y=S("SurveyComponent");return q(),V(F,{class:"flex flex-center"},{default:a(()=>[e(y,{model:K(c)},null,8,["model"]),e(C,{position:"bottom-right",offset:[18,18]},{default:a(()=>[e(A,{icon:"touch_app",direction:"up",color:"blue-10","external-label":""},{default:a(()=>[e(r,{"external-label":"",color:"warning",icon:"settings_backup_restore",label:"Muat ulang","label-position":"left"}),e(r,{"external-label":"",color:"orange",icon:"gps_fixed",label:"Lokasi","label-position":"left"}),e(r,{"external-label":"",color:"positive",icon:"done",label:"Approval","label-position":"left",onClick:f})]),_:1})]),_:1}),e(D,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=h=>o.value=h)},{default:a(()=>[e(M,null,{default:a(()=>[e(g,null,{default:a(()=>[I]),_:1}),e(g,{class:"q-pt-none"},{default:a(()=>[e(l,{style:{width:"300px","margin-bottom":"20px"},color:"green-9 block"},{default:a(()=>[i("Approve")]),_:1}),e(l,{style:{width:"300px","margin-bottom":"20px"},color:"red-10 block"},{default:a(()=>[i("Reject")]),_:1}),e(l,{style:{width:"300px","margin-bottom":"20px"},color:"teal block w-10",onClick:_},{default:a(()=>[i("Simpan dan Keluar")]),_:1})]),_:1}),e(N,{align:"right"},{default:a(()=>[B(e(l,{flat:"",label:"Tutup",color:"primary"},null,512),[[L]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}}};export{G as default};
