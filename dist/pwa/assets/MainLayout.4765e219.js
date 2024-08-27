import{Q as K,a as N}from"./QLayout.0b38219f.js";import{u as D,a as O,Q as P}from"./use-router-link.7347b16e.js";import{V as k,c as i,W as m,r as f,X as R,Y as V,P as $,e as b,j as _,q as u,g as s,h as F,Z as g,z as h,S as M,_ as T,a as W,n as z,y as H}from"./index.dea5ae4d.js";import{h as B,a as U}from"./render.e362b984.js";import{u as X,a as Y}from"./use-dark.1eff1360.js";import"./dom.ecdc96c7.js";import"./QResizeObserver.d0cfe2e9.js";var p=k({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const n=i(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:n.value},B(a.default))}}),x=k({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const n=i(()=>parseInt(e.lines,10)),l=i(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),o=i(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>m("div",{style:o.value,class:l.value},B(a.default))}}),Z=k({name:"QItem",props:{...X,...D,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:n}){const{proxy:{$q:l}}=$(),o=Y(e,l),{hasLink:c,linkAttrs:C,linkClass:L,linkTag:w,navigateOnClick:S}=O(),d=f(null),v=f(null),y=i(()=>e.clickable===!0||c.value===!0||e.tag==="label"),r=i(()=>e.disable!==!0&&y.value===!0),E=i(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?L.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),Q=i(()=>{if(e.insetLevel===void 0)return null;const t=l.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function I(t){r.value===!0&&(v.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),S(t))}function j(t){if(r.value===!0&&R(t,[13,32])===!0){V(t),t.qKeyEvent=!0;const q=new MouseEvent("click",t);q.qKeyEvent=!0,d.value.dispatchEvent(q)}n("keyup",t)}function A(){const t=U(a.default,[]);return r.value===!0&&t.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:v})),t}return()=>{const t={ref:d,class:E.value,style:Q.value,role:"listitem",onClick:I,onKeyup:j};return r.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,C.value)):y.value===!0&&(t["aria-disabled"]="true"),m(w.value,t,A())}}});Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const a=e;return(n,l)=>(b(),_(Z,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:u(()=>[a.icon?(b(),_(p,{key:0,avatar:""},{default:u(()=>[s(P,{name:a.icon},null,8,["name"])]),_:1})):F("",!0),s(p,null,{default:u(()=>[s(x,null,{default:u(()=>[g(h(a.title),1)]),_:1}),s(x,{caption:""},{default:u(()=>[g(h(a.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});function G(){return M(T)}const ue=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const a=G(),n=function(l){l.preventDefault(),l.returnValue="",a.dialog({title:"Confirm Exit",message:"Are you sure you want to exit the app?",cancel:!0,persistent:!0}).onOk(()=>{alert("Exiting App")}).onCancel(()=>{})};return window.addEventListener("beforeunload",n),f(!1),(l,o)=>{const c=W("router-view");return b(),_(K,{view:"lHh Lpr lFf",class:z({"body--dark":H(a).dark.isActive})},{default:u(()=>[s(N,null,{default:u(()=>[s(c)]),_:1})]),_:1},8,["class"])}}});export{ue as default};
