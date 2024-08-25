import{V as _,S as G,W as Q,X as ee,Y as te,c as d,Z as g,_ as oe,P as z,w as H,o as $,J as W,$ as ne,a0 as j,r as p,a1 as ie,a2 as V,a3 as E,p as ae,a4 as re,a5 as se,e as N,j as D,q as x,g as k,h as ue,a6 as A,z as K,a7 as ce,a as de,n as fe,y as ve}from"./index.9de547cf.js";import{h as F,a as me,b as he}from"./render.19d9bebf.js";import{g as ge,c as M,u as be,a as pe,Q as ye}from"./use-router-link.af4615b1.js";import{u as we,a as xe}from"./use-dark.2b61ec01.js";var _e=_({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:n}}=z(),t=G(ee,Q);if(t===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;te(oe,!0);const a=d(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>g("div",{class:"q-page-container",style:a.value},F(l.default))}});const qe=[Element,String],Se=[null,document,document.body,document.scrollingElement,document.documentElement];function ke(e,l){let n=ge(l);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return Se.includes(n)?window:n}function Le(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ze(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function O(){if(T!==void 0)return T;const e=document.createElement("p"),l=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(l,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),l.appendChild(e),document.body.appendChild(l);const n=e.offsetWidth;l.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=l.clientWidth),l.remove(),T=n-t,T}const{passive:U}=j,Ce=["both","horizontal","vertical"];var Ee=_({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Ce.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:qe},emits:["scroll"],setup(e,{emit:l}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,a,r;H(()=>e.scrollTarget,()=>{s(),b()});function f(){t!==null&&t();const h=Math.max(0,Le(a)),y=ze(a),c={top:h-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const q=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";n.position={top:h,left:y},n.directionChanged=n.direction!==q,n.delta=c,n.directionChanged===!0&&(n.direction=q,n.inflectionPoint=n.position),l("scroll",{...n})}function b(){a=ke(r,e.scrollTarget),a.addEventListener("scroll",o,U),o(!0)}function s(){a!==void 0&&(a.removeEventListener("scroll",o,U),a=void 0)}function o(h){if(h===!0||e.debounce===0||e.debounce==="0")f();else if(t===null){const[y,c]=e.debounce?[setTimeout(f,e.debounce),clearTimeout]:[requestAnimationFrame(f),cancelAnimationFrame];t=()=>{c(y),t=null}}}const{proxy:v}=z();return H(()=>v.$q.lang.rtl,f),$(()=>{r=v.$el.parentNode,b()}),W(()=>{t!==null&&t(),s()}),Object.assign(v,{trigger:o,getPosition:()=>n}),ne}});function Te(){const e=p(!ie.value);return e.value===!1&&$(()=>{e.value=!0}),{isHydrated:e}}const le=typeof ResizeObserver!="undefined",X=le===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Y=_({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:l}){let n=null,t,a={width:-1,height:-1};function r(s){s===!0||e.debounce===0||e.debounce==="0"?f():n===null&&(n=setTimeout(f,e.debounce))}function f(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:s,offsetHeight:o}=t;(s!==a.width||o!==a.height)&&(a={width:s,height:o},l("resize",a))}}const{proxy:b}=z();if(b.trigger=r,le===!0){let s;const o=v=>{t=b.$el.parentNode,t?(s=new ResizeObserver(r),s.observe(t),f()):v!==!0&&V(()=>{o(!0)})};return $(()=>{o()}),W(()=>{n!==null&&clearTimeout(n),s!==void 0&&(s.disconnect!==void 0?s.disconnect():t&&s.unobserve(t))}),ne}else{let v=function(){n!==null&&(clearTimeout(n),n=null),o!==void 0&&(o.removeEventListener!==void 0&&o.removeEventListener("resize",r,j.passive),o=void 0)},h=function(){v(),t&&t.contentDocument&&(o=t.contentDocument.defaultView,o.addEventListener("resize",r,j.passive),f())};const{isHydrated:s}=Te();let o;return $(()=>{V(()=>{t=b.$el,t&&h()})}),W(v),()=>{if(s.value===!0)return g("object",{class:"q--avoid-card-border",style:X.style,tabindex:-1,type:"text/html",data:X.url,"aria-hidden":"true",onLoad:h})}}}}),$e=_({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=z(),a=p(null),r=p(t.screen.height),f=p(e.container===!0?0:t.screen.width),b=p({position:0,direction:"down",inflectionPoint:0}),s=p(0),o=p(ie.value===!0?0:O()),v=d(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=d(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=d(()=>o.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${o.value}px`}:null),c=d(()=>o.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${o.value}px`,width:`calc(100% + ${o.value}px)`}:null);function q(i){if(e.container===!0||document.qScrollPrevented!==!0){const m={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};b.value=m,e.onScroll!==void 0&&n("scroll",m)}}function P(i){const{height:m,width:w}=i;let L=!1;r.value!==m&&(L=!0,r.value=m,e.onScrollHeight!==void 0&&n("scrollHeight",m),C()),f.value!==w&&(L=!0,f.value=w),L===!0&&e.onResize!==void 0&&n("resize",i)}function B({height:i}){s.value!==i&&(s.value=i,C())}function C(){if(e.container===!0){const i=r.value>s.value?O():0;o.value!==i&&(o.value=i)}}let S=null;const u={instances:{},view:d(()=>e.view),isContainer:d(()=>e.container),rootRef:a,height:r,containerHeight:s,scrollbarWidth:o,totalWidth:d(()=>f.value+o.value),rows:d(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:E({size:0,offset:0,space:!1}),right:E({size:300,offset:0,space:!1}),footer:E({size:0,offset:0,space:!1}),left:E({size:300,offset:0,space:!1}),scroll:b,animate(){S!==null?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout(()=>{S=null,document.body.classList.remove("q-body--layout-animate")},155)},update(i,m,w){u[i][m]=w}};if(te(ee,u),O()>0){let w=function(){i=null,m.classList.remove("hide-scrollbar")},L=function(){if(i===null){if(m.scrollHeight>t.screen.height)return;m.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(w,300)},R=function(I){i!==null&&I==="remove"&&(clearTimeout(i),w()),window[`${I}EventListener`]("resize",L)},i=null;const m=document.body;H(()=>e.container!==!0?"add":"remove",R),e.container!==!0&&R("add"),ae(()=>{R("remove")})}return()=>{const i=me(l.default,[g(Ee,{onScroll:q}),g(Y,{onResize:P})]),m=g("div",{class:v.value,style:h.value,ref:e.container===!0?void 0:a,tabindex:-1},i);return e.container===!0?g("div",{class:"q-layout-container overflow-hidden",ref:a},[g(Y,{onResize:B}),g("div",{class:"absolute-full",style:y.value},[g("div",{class:"scroll",style:c.value},[m])])]):m}}}),J=_({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:n.value},F(l.default))}}),Z=_({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=d(()=>parseInt(e.lines,10)),t=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),a=d(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>g("div",{style:a.value,class:t.value},F(l.default))}}),Pe=_({name:"QItem",props:{...we,...be,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:t}}=z(),a=xe(e,t),{hasLink:r,linkAttrs:f,linkClass:b,linkTag:s,navigateOnClick:o}=pe(),v=p(null),h=p(null),y=d(()=>e.clickable===!0||r.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&y.value===!0),q=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?b.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),P=d(()=>{if(e.insetLevel===void 0)return null;const u=t.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function B(u){c.value===!0&&(h.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===v.value?h.value.focus():document.activeElement===h.value&&v.value.focus()),o(u))}function C(u){if(c.value===!0&&re(u,[13,32])===!0){se(u),u.qKeyEvent=!0;const i=new MouseEvent("click",u);i.qKeyEvent=!0,v.value.dispatchEvent(i)}n("keyup",u)}function S(){const u=he(l.default,[]);return c.value===!0&&u.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:h})),u}return()=>{const u={ref:v,class:q.value,style:P.value,role:"listitem",onClick:B,onKeyup:C};return c.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,f.value)):y.value===!0&&(u["aria-disabled"]="true"),g(s.value,u,S())}}});Object.assign({name:"EssentialLink"},{__name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},setup(e){const l=e;return(n,t)=>(N(),D(Pe,{clickable:"",tag:"a",target:"_blank",href:l.link},{default:x(()=>[l.icon?(N(),D(J,{key:0,avatar:""},{default:x(()=>[k(ye,{name:l.icon},null,8,["name"])]),_:1})):ue("",!0),k(J,null,{default:x(()=>[k(Z,null,{default:x(()=>[A(K(l.title),1)]),_:1}),k(Z,{caption:""},{default:x(()=>[A(K(l.caption),1)]),_:1})]),_:1})]),_:1},8,["href"]))}});function Be(){return G(ce)}const We=Object.assign({name:"MainLayout"},{__name:"MainLayout",setup(e){const l=Be(),n=function(t){t.preventDefault(),t.returnValue="",l.dialog({title:"Confirm Exit",message:"Are you sure you want to exit the app?",cancel:!0,persistent:!0}).onOk(()=>{alert("Exiting App")}).onCancel(()=>{})};return window.addEventListener("beforeunload",n),p(!1),(t,a)=>{const r=de("router-view");return N(),D($e,{view:"lHh Lpr lFf",class:fe({"body--dark":ve(l).dark.isActive})},{default:x(()=>[k(_e,null,{default:x(()=>[k(r)]),_:1})]),_:1},8,["class"])}}});export{We as default};
