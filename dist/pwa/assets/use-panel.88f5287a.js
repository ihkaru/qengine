import{ao as U,ap as b,a0 as W,aq as F,ar as q,as as k,at as I,au as E,av as _,r as M,c as m,t as G,ad as H,P as J,a9 as C,Y as Q,aw as Z,ag as X,X as ee}from"./index.9e422fbf.js";import{g as O,s as L}from"./touch.9135741d.js";import{c as te}from"./selection.948db152.js";function ne(t){const n=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((a,d)=>{const s=parseFloat(a);s&&(n[d]=s)}),n}var ie=U({name:"touch-swipe",beforeMount(t,{value:n,arg:a,modifiers:d}){if(d.mouse!==!0&&b.has.touch!==!0)return;const s=d.mouseCapture===!0?"Capture":"",e={handler:n,sensitivity:ne(a),direction:O(d),noop:W,mouseStart(o){L(o,e)&&F(o)&&(q(e,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(o,!0))},touchStart(o){if(L(o,e)){const c=o.target;q(e,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),e.start(o)}},start(o,c){b.is.firefox===!0&&k(t,!0);const f=I(o);e.event={x:f.left,y:f.top,time:Date.now(),mouse:c===!0,dir:!1}},move(o){if(e.event===void 0)return;if(e.event.dir!==!1){E(o);return}const c=Date.now()-e.event.time;if(c===0)return;const f=I(o),h=f.left-e.event.x,l=Math.abs(h),g=f.top-e.event.y,u=Math.abs(g);if(e.event.mouse!==!0){if(l<e.sensitivity[1]&&u<e.sensitivity[1]){e.end(o);return}}else if(window.getSelection().toString()!==""){e.end(o);return}else if(l<e.sensitivity[2]&&u<e.sensitivity[2])return;const v=l/c,y=u/c;e.direction.vertical===!0&&l<u&&l<100&&y>e.sensitivity[0]&&(e.event.dir=g<0?"up":"down"),e.direction.horizontal===!0&&l>u&&u<100&&v>e.sensitivity[0]&&(e.event.dir=h<0?"left":"right"),e.direction.up===!0&&l<u&&g<0&&l<100&&y>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&l<u&&g>0&&l<100&&y>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&l>u&&h<0&&u<100&&v>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&l>u&&h>0&&u<100&&v>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(E(o),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),te(),e.styleCleanup=w=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};w===!0?setTimeout(P,50):P()}),e.handler({evt:o,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:c,distance:{x:l,y:u}})):e.end(o)},end(o){e.event!==void 0&&(_(e,"temp"),b.is.firefox===!0&&k(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),o!==void 0&&e.event.dir!==!1&&E(o),e.event=void 0)}};if(t.__qtouchswipe=e,d.mouse===!0){const o=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";q(e,"main",[[t,"mousedown","mouseStart",`passive${o}`]])}b.has.touch===!0&&q(e,"main",[[t,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,n){const a=t.__qtouchswipe;a!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&a.end(),a.handler=n.value),a.direction=O(n.modifiers))},beforeUnmount(t){const n=t.__qtouchswipe;n!==void 0&&(_(n,"main"),_(n,"temp"),b.is.firefox===!0&&k(t,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete t.__qtouchswipe)}});function oe(){let t=Object.create(null);return{getCache:(n,a)=>t[n]===void 0?t[n]=typeof a=="function"?a():a:t[n],setCache(n,a){t[n]=a},hasCache(n){return Object.hasOwnProperty.call(t,n)},clearCache(n){n!==void 0?delete t[n]:t=Object.create(null)}}}const ue={name:{required:!0},disable:Boolean},j={setup(t,{slots:n}){return()=>C("div",{class:"q-panel scroll",role:"tabpanel"},X(n.default))}},le={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},ce=["update:modelValue","beforeTransition","transition"];function de(){const{props:t,emit:n,proxy:a}=J(),{getCache:d}=oe();let s,e;const o=M(null),c=M(null);function f(i){const r=t.vertical===!0?"up":"left";x((a.$q.lang.rtl===!0?-1:1)*(i.direction===r?1:-1))}const h=m(()=>[[ie,f,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),l=m(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),g=m(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),u=m(()=>`--q-transition-duration: ${t.transitionDuration}ms`),v=m(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),y=m(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),w=m(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);G(()=>t.modelValue,(i,r)=>{const p=S(i)===!0?T(i):-1;e!==!0&&B(p===-1?0:p<T(r)?-1:1),o.value!==p&&(o.value=p,n("beforeTransition",i,r),H(()=>{n("transition",i,r)}))});function P(){x(1)}function D(){x(-1)}function N(i){n("update:modelValue",i)}function S(i){return i!=null&&i!==""}function T(i){return s.findIndex(r=>r.props.name===i&&r.props.disable!==""&&r.props.disable!==!0)}function Y(){return s.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function B(i){const r=i!==0&&t.animated===!0&&o.value!==-1?"q-transition--"+(i===-1?l.value:g.value):null;c.value!==r&&(c.value=r)}function x(i,r=o.value){let p=r+i;for(;p!==-1&&p<s.length;){const A=s[p];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){B(i),e=!0,n("update:modelValue",A.props.name),setTimeout(()=>{e=!1});return}p+=i}t.infinite===!0&&s.length!==0&&r!==-1&&r!==s.length&&x(i,i===-1?s.length:-1)}function V(){const i=T(t.modelValue);return o.value!==i&&(o.value=i),!0}function $(){const i=S(t.modelValue)===!0&&V()&&s[o.value];return t.keepAlive===!0?[C(ee,y.value,[C(w.value===!0?d(v.value,()=>({...j,name:v.value})):j,{key:v.value,style:u.value},()=>i)])]:[C("div",{class:"q-panel scroll",style:u.value,key:v.value,role:"tabpanel"},[i])]}function z(){if(s.length!==0)return t.animated===!0?[C(Q,{name:c.value},$)]:$()}function K(i){return s=Z(X(i.default,[])).filter(r=>r.props!==null&&r.props.slot===void 0&&S(r.props.name)===!0),s.length}function R(){return s}return Object.assign(a,{next:P,previous:D,goTo:N}),{panelIndex:o,panelDirectives:h,updatePanelsList:K,updatePanelIndex:V,getPanelContent:z,getEnabledPanels:Y,getPanels:R,isValidPanelName:S,keepAliveProps:y,needsUniqueKeepAliveWrapper:w,goToPanelByOffset:x,goToPanel:N,nextPanel:P,previousPanel:D}}export{le as a,ce as b,de as c,ue as u};
