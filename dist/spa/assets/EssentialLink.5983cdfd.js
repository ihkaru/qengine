import{S,U as le,V as Q,W as G,X as ee,Y as oe,c,Z as g,O as _,w as H,o as $,J as W,_ as te,$ as N,r as p,a0 as ne,a1 as I,a2 as C,p as ae,a3 as re,a4 as se,e as F,j as V,q as L,g as E,h as ue,a5 as K,z as M}from"./index.0fd7ad60.js";import{h as j,g as ce,c as A,a as de,u as fe,b as ve,d as me,Q as he}from"./use-router-link.6975a9f4.js";var Ee=S({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=_(),t=le(G,Q);if(t===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;ee(oe,!0);const r=c(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>g("div",{class:"q-page-container",style:r.value},j(i.default))}});const ge=[Element,String],be=[null,document,document.body,document.scrollingElement,document.documentElement];function ye(e,i){let n=ce(i);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return be.includes(n)?window:n}function pe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function we(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function O(){if(T!==void 0)return T;const e=document.createElement("p"),i=document.createElement("div");A(e,{width:"100%",height:"200px"}),A(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const n=e.offsetWidth;i.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=i.clientWidth),i.remove(),T=n-t,T}function Te(e,i=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:i?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:U}=N,Se=["both","horizontal","vertical"];var xe=S({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Se.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ge},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,s;H(()=>e.scrollTarget,()=>{a(),b()});function f(){t!==null&&t();const h=Math.max(0,pe(r)),y=we(r),d={top:h-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const x=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";n.position={top:h,left:y},n.directionChanged=n.direction!==x,n.delta=d,n.directionChanged===!0&&(n.direction=x,n.inflectionPoint=n.position),i("scroll",{...n})}function b(){r=ye(s,e.scrollTarget),r.addEventListener("scroll",o,U),o(!0)}function a(){r!==void 0&&(r.removeEventListener("scroll",o,U),r=void 0)}function o(h){if(h===!0||e.debounce===0||e.debounce==="0")f();else if(t===null){const[y,d]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];t=()=>{d(y),t=null}}}const{proxy:v}=_();return H(()=>v.$q.lang.rtl,f),$(()=>{s=v.$el.parentNode,b()}),W(()=>{t!==null&&t(),a()}),Object.assign(v,{trigger:o,getPosition:()=>n}),te}});function qe(){const e=p(!ne.value);return e.value===!1&&$(()=>{e.value=!0}),{isHydrated:e}}const ie=typeof ResizeObserver!="undefined",X=ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Y=S({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,t,r={width:-1,height:-1};function s(a){a===!0||e.debounce===0||e.debounce==="0"?f():n===null&&(n=setTimeout(f,e.debounce))}function f(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:a,offsetHeight:o}=t;(a!==r.width||o!==r.height)&&(r={width:a,height:o},i("resize",r))}}const{proxy:b}=_();if(b.trigger=s,ie===!0){let a;const o=v=>{t=b.$el.parentNode,t?(a=new ResizeObserver(s),a.observe(t),f()):v!==!0&&I(()=>{o(!0)})};return $(()=>{o()}),W(()=>{n!==null&&clearTimeout(n),a!==void 0&&(a.disconnect!==void 0?a.disconnect():t&&a.unobserve(t))}),te}else{let v=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",s,N.passive),o=void 0)},h=function(){v(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",s,N.passive),f())};const{isHydrated:a}=qe();let o;return $(()=>{I(()=>{t=b.$el,t&&h()})}),W(v),()=>{if(a.value===!0)return g("object",{class:"q--avoid-card-border",style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:h})}}}}),$e=S({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=_(),r=p(null),s=p(t.screen.height),f=p(e.container===!0?0:t.screen.width),b=p({position:0,direction:"down",inflectionPoint:0}),a=p(0),o=p(ne.value===!0?0:O()),v=c(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=c(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=c(()=>o.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),d=c(()=>o.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function x(l){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};b.value=m,e.onScroll!==void 0&&n("scroll",m)}}function P(l){const{height:m,width:w}=l;let k=!1;s.value!==m&&(k=!0,s.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),z()),f.value!==w&&(k=!0,f.value=w),k===!0&&e.onResize!==void 0&&n("resize",l)}function R({height:l}){a.value!==l&&(a.value=l,z())}function z(){if(e.container===!0){const l=s.value>a.value?O():0;o.value!==l&&(o.value=l)}}let q=null;const u={instances:{},view:c(()=>e.view),isContainer:c(()=>e.container),rootRef:r,height:s,containerHeight:a,scrollbarWidth:o,totalWidth:c(()=>f.value+o.value),rows:c(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:b,animate(){q!==null?clearTimeout(q):document.body.classList.add("q-body--layout-animate"),q=setTimeout(()=>{q=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,m,w){u[l][m]=w}};if(ee(G,u),O()>0){let w=function(){l=null,m.classList.remove("hide-scrollbar")},k=function(){if(l===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(w,300)},B=function(D){l!==null&&D==="remove"&&(clearTimeout(l),w()),window[`${D}EventListener`]("resize",k)},l=null;const m=document.body;H(()=>e.container!==!0?"add":"remove",B),e.container!==!0&&B("add"),ae(()=>{B("remove")})}return()=>{const l=de(i.default,[g(xe,{onScroll:x}),g(Y,{onResize:P})]),m=g("div",{class:v.value,style:h.value,ref:e.container===!0?void 0:r,tabindex:-1},l);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:r},[g(Y,{onResize:R}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:d.value},[m])])]):m}}}),J=S({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const n=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:n.value},j(i.default))}}),Z=S({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:i}){const n=c(()=>parseInt(e.lines,10)),t=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),r=c(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>g("div",{style:r.value,class:t.value},j(i.default))}});const ke={dark:{type:Boolean,default:null}};function Le(e,i){return c(()=>e.dark===null?i.dark.isActive:e.dark)}var _e=S({name:"QItem",props:{...ke,...fe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:n}){const{proxy:{$q:t}}=_(),r=Le(e,t),{hasLink:s,linkAttrs:f,linkClass:b,linkTag:a,navigateOnClick:o}=ve(),v=p(null),h=p(null),y=c(()=>e.clickable===!0||s.value===!0||e.tag==="label"),d=c(()=>e.disable!==!0&&y.value===!0),x=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?b.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(d.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),P=c(()=>{if(e.insetLevel===void 0)return null;const u=t.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function R(u){d.value===!0&&(h.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===v.value?h.value.focus():document.activeElement===h.value&&v.value.focus()),o(u))}function z(u){if(d.value===!0&&re(u,[13,32])===!0){se(u),u.qKeyEvent=!0;const l=new MouseEvent("click",u);l.qKeyEvent=!0,v.value.dispatchEvent(l)}n("keyup",u)}function q(){const u=me(i.default,[]);return d.value===!0&&u.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:h})),u}return()=>{const u={ref:v,class:x.value,style:P.value,role:"listitem",onClick:R,onKeyup:z};return d.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,f.value)):y.value===!0&&(u["aria-disabled"]="true"),g(a.value,u,q())}}});const Pe=Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const i=e;return(n,t)=>(F(),V(_e,{clickable:"",tag:"a",target:"_blank",href:i.link},{default:L(()=>[i.icon?(F(),V(J,{key:0,avatar:""},{default:L(()=>[E(he,{name:i.icon},null,8,["name"])]),_:1})):ue("",!0),E(J,null,{default:L(()=>[E(Z,null,{default:L(()=>[K(M(i.title),1)]),_:1}),E(Z,{caption:""},{default:L(()=>[K(M(i.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});export{$e as Q,Pe as _,Ee as a,Y as b,Le as c,pe as d,Z as e,_e as f,we as g,Te as h,J as i,ke as u};
