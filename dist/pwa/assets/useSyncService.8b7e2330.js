import{ab as y,r as u,o as v,b0 as d,b1 as K}from"./index.483fdc7e.js";import{u as w}from"./use-quasar.535c9ca6.js";import{u as h}from"./useOnlineStatus.400f4b22.js";function $(){const m=y(),o=w(),t=u(null),n=u(null),s=u({kegiatan:[],respondenKegiatan:[]}),f=h();v(async()=>{});const c=async(a,e)=>{await d.setItem(`${"syncData.kegiatan."+e}`,JSON.stringify(a)),s.value.kegiatan[e]=a},r=async a=>{let e=l(a);if(!Boolean(e)){let i=await d.getItem(`${"syncData.kegiatan."+a}`);console.log("test",i),s.value.kegiatan.push(JSON.parse(i)),e=l(e)}return e},l=a=>s.value.kegiatan.find(e=>(e==null?void 0:e.id)===a),p=a=>s.value.respondenKegiatan.find(e=>(e==null?void 0:e.id)===a),g=async a=>{if(f.isOnline)await K.get(`/kegiatans/${a}`).then(async e=>{console.log("respon",e),await c(e.data,a)});else throw new Error("Anda sedang offline. Tidak dapat melakukan sinkronisasi")};return{getDataKegiatan:r,setDataKegiatan:c,findKegiatan:l,findRespondenKegiatan:p,syncKegiatan:g,handleLoadKegiatan:async()=>{t.value=await m.getSelectedKegiatan();let a=null,e=null;try{e=o.notify({progress:!0,message:"Mengambil data",spinner:!0,color:"blue",textColor:"white",timeout:2e3}),n.value=await r(t.value.id),Boolean(n.value)||(a=o.notify({progress:!0,message:"Sync",spinner:!0,color:"blue",textColor:"white",timeout:2e3}),await g(t.value.id),n.value=await r(t.value.id),a()),e()}catch(i){e(),o.notify({progress:!0,type:"negative",message:i.message,timeout:2e3})}return n.value}}}export{$ as u};
