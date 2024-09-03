import{X as Z,_ as h,$ as ke,ae as Me,ag as Ne,c as g,P as de,aq as ot,S as ze,Y as se,r as _,J as qe,o as pe,aD as Fe,x as ue,aE as ce,aj as $e,ai as rt,aF as st,V as S,ab as Oe,aG as it,aH as ut,aI as Te,aJ as De,t as z,Z as ct,aK as dt,aL as vt,a8 as ft,a0 as mt,aM as ht,aN as gt,u as Ke,aO as bt,al as _t,ao as pt,e as J,j as oe,w as s,g as l,q as b,A as O,ar as he,z as re,n as wt,aP as Le,aQ as Ve,f as yt,i as Ct,F as Tt,aR as Lt,W as G,aS as kt,aT as qt,aU as xt}from"./index.1f0c2728.js";import{u as St,a as Pt,b as At,c as Bt}from"./use-panel.9ab6970a.js";import{Q as ie,a as B,b as ge}from"./QItem.21949c2f.js";import{Q as je}from"./QResizeObserver.60952946.js";import{Q as Et}from"./QPage.c2b83899.js";import{u as He}from"./use-quasar.5b2b6d73.js";import{a as Rt,u as It}from"./useAuth.8497a0d3.js";import{_ as Qt}from"./plugin-vue_export-helper.21dcd24c.js";import"./local-forage.02328131.js";import"./_commonjsHelpers.dffb1198.js";import"./axios.9d3f25b8.js";import"./index.es.11502c76.js";var be=Z({name:"QTabPanel",props:St,setup(e,{slots:u}){return()=>h("div",{class:"q-tab-panel",role:"tabpanel"},ke(u.default))}}),$t=Z({name:"QList",props:{...Me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:u}){const m=de(),c=Ne(e,m.proxy.$q),a=g(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(c.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>h(e.tag,{class:a.value},ke(u.default))}}),Dt=Z({name:"QTabPanels",props:{...Pt,...Me},emits:At,setup(e,{slots:u}){const m=de(),c=Ne(e,m.proxy.$q),{updatePanelsList:a,getPanelContent:P,panelDirectives:L}=Bt(),$=g(()=>"q-tab-panels q-panel-parent"+(c.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(u),ot("div",{class:$.value},P(),"pan",e.swipeable,()=>L.value))}});let Vt=0;const Mt=["click","keydown"],Nt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Vt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function zt(e,u,m,c){const a=ze(Fe,se);if(a===se)return console.error("QTab/QRouteTab component needs to be child of QTabs"),se;const{proxy:P}=de(),L=_(null),$=_(null),D=_(null),K=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),R=g(()=>a.currentModel.value===e.name),Y=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(R.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(c!==void 0?c.linkClass.value:"")),M=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),k=g(()=>e.disable===!0||a.hasFocus.value===!0||R.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function A(r,p){if(p!==!0&&L.value!==null&&L.value.focus(),e.disable===!0){c!==void 0&&c.hasRouterLink.value===!0&&$e(r);return}if(c===void 0){a.updateModel({name:e.name}),m("click",r);return}if(c.hasRouterLink.value===!0){const o=(d={})=>{let q;const Q=d.to===void 0||it(d.to,e.to)===!0?a.avoidRouteWatcher=ut():null;return c.navigateToRouterLink(r,{...d,returnRouterError:!0}).catch(N=>{q=N}).then(N=>{if(Q===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,q===void 0&&(N===void 0||N.message!==void 0&&N.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),d.returnRouterError===!0)return q!==void 0?Promise.reject(q):N})};m("click",r,o),r.defaultPrevented!==!0&&o();return}m("click",r)}function C(r){rt(r,[13,32])?A(r,!0):st(r)!==!0&&r.keyCode>=35&&r.keyCode<=40&&r.altKey!==!0&&r.metaKey!==!0&&a.onKbdNavigate(r.keyCode,P.$el)===!0&&$e(r),m("keydown",r)}function T(){const r=a.tabProps.value.narrowIndicator,p=[],o=h("div",{ref:D,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&p.push(h(S,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&p.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&p.push(e.alertIcon!==void 0?h(S,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),r===!0&&p.push(o);const d=[h("div",{class:"q-focus-helper",tabindex:-1,ref:L}),h("div",{class:M.value},Oe(u.default,p))];return r===!1&&d.push(o),d}const I={name:g(()=>e.name),rootRef:$,tabIndicatorRef:D,routeData:c};qe(()=>{a.unregisterTab(I)}),pe(()=>{a.registerTab(I)});function V(r,p){const o={ref:$,class:Y.value,tabindex:k.value,role:"tab","aria-selected":R.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:A,onKeydown:C,...p};return ue(h(r,o,T()),[[ce,K.value]])}return{renderTab:V,$tabs:a}}var _e=Z({name:"QTab",props:Nt,emits:Mt,setup(e,{slots:u,emit:m}){const{renderTab:c}=zt(e,u,m);return()=>c("div")}});let Ue=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const u=document.createElement("div");Object.assign(u.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(u),e.scrollLeft=-1e3,Ue=e.scrollLeft>=0,e.remove()}function Ft(e,u,m){const c=m===!0?["left","right"]:["top","bottom"];return`absolute-${u===!0?c[0]:c[1]}${e?` text-${e}`:""}`}const Ot=["left","center","right","justify"];var Kt=Z({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ot.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:u,emit:m}){const{proxy:c}=de(),{$q:a}=c,{registerTick:P}=Te(),{registerTick:L}=Te(),{registerTick:$}=Te(),{registerTimeout:D,removeTimeout:K}=De(),{registerTimeout:R,removeTimeout:Y}=De(),M=_(null),k=_(null),A=_(e.modelValue),C=_(!1),T=_(!0),I=_(!1),V=_(!1),r=[],p=_(0),o=_(!1);let d=null,q=null,Q;const N=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ft(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ee=g(()=>{const t=p.value,n=A.value;for(let i=0;i<t;i++)if(r[i].name.value===n)return!0;return!1}),te=g(()=>`q-tabs__content--align-${C.value===!0?"left":V.value===!0?"justify":e.align}`),j=g(()=>`q-tabs row no-wrap items-center q-tabs--${C.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),ve=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+te.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),E=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),H=g(()=>e.vertical!==!0&&a.lang.rtl===!0),ae=g(()=>Ue===!1&&H.value===!0);z(H,le),z(()=>e.modelValue,t=>{we({name:t,setCurrent:!0,skipEmit:!0})}),z(()=>e.outsideArrows,fe);function we({name:t,setCurrent:n,skipEmit:i}){A.value!==t&&(i!==!0&&e["onUpdate:modelValue"]!==void 0&&m("update:modelValue",t),(n===!0||e["onUpdate:modelValue"]===void 0)&&(We(A.value,t),A.value=t))}function fe(){P(()=>{xe({width:M.value.offsetWidth,height:M.value.offsetHeight})})}function xe(t){if(E.value===void 0||k.value===null)return;const n=t[E.value.container],i=Math.min(k.value[E.value.scroll],Array.prototype.reduce.call(k.value.children,(y,f)=>y+(f[E.value.content]||0),0)),w=n>0&&i>n;C.value=w,w===!0&&L(le),V.value=n<parseInt(e.breakpoint,10)}function We(t,n){const i=t!=null&&t!==""?r.find(y=>y.name.value===t):null,w=n!=null&&n!==""?r.find(y=>y.name.value===n):null;if(i&&w){const y=i.tabIndicatorRef.value,f=w.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),y.style.transition="none",y.style.transform="none",f.style.transition="none",f.style.transform="none";const v=y.getBoundingClientRect(),x=f.getBoundingClientRect();f.style.transform=e.vertical===!0?`translate3d(0,${v.top-x.top}px,0) scale3d(1,${x.height?v.height/x.height:1},1)`:`translate3d(${v.left-x.left}px,0,0) scale3d(${x.width?v.width/x.width:1},1,1)`,$(()=>{d=setTimeout(()=>{d=null,f.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",f.style.transform="none"},70)})}w&&C.value===!0&&ne(w.rootRef.value)}function ne(t){const{left:n,width:i,top:w,height:y}=k.value.getBoundingClientRect(),f=t.getBoundingClientRect();let v=e.vertical===!0?f.top-w:f.left-n;if(v<0){k.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),le();return}v+=e.vertical===!0?f.height-y:f.width-i,v>0&&(k.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),le())}function le(){const t=k.value;if(t===null)return;const n=t.getBoundingClientRect(),i=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);H.value===!0?(T.value=Math.ceil(i+n.width)<t.scrollWidth-1,I.value=i>0):(T.value=i>0,I.value=e.vertical===!0?Math.ceil(i+n.height)<t.scrollHeight:Math.ceil(i+n.width)<t.scrollWidth)}function Se(t){q!==null&&clearInterval(q),q=setInterval(()=>{Ye(t)===!0&&U()},5)}function Pe(){Se(ae.value===!0?Number.MAX_SAFE_INTEGER:0)}function Ae(){Se(ae.value===!0?0:Number.MAX_SAFE_INTEGER)}function U(){q!==null&&(clearInterval(q),q=null)}function Ge(t,n){const i=Array.prototype.filter.call(k.value.children,x=>x===n||x.matches&&x.matches(".q-tab.q-focusable")===!0),w=i.length;if(w===0)return;if(t===36)return ne(i[0]),i[0].focus(),!0;if(t===35)return ne(i[w-1]),i[w-1].focus(),!0;const y=t===(e.vertical===!0?38:37),f=t===(e.vertical===!0?40:39),v=y===!0?-1:f===!0?1:void 0;if(v!==void 0){const x=H.value===!0?-1:1,F=i.indexOf(n)+v*x;return F>=0&&F<w&&(ne(i[F]),i[F].focus({preventScroll:!0})),!0}}const Xe=g(()=>ae.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,n)=>{t.scrollLeft=-n}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,n)=>{t.scrollTop=n}}:{get:t=>t.scrollLeft,set:(t,n)=>{t.scrollLeft=n}});function Ye(t){const n=k.value,{get:i,set:w}=Xe.value;let y=!1,f=i(n);const v=t<f?-1:1;return f+=v*5,f<0?(y=!0,f=0):(v===-1&&f<=t||v===1&&f>=t)&&(y=!0,f=t),w(n,f),le(),y}function Be(t,n){for(const i in t)if(t[i]!==n[i])return!1;return!0}function Je(){let t=null,n={matchedLen:0,queryDiff:9999,hrefLen:0};const i=r.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:w,query:y}=c.$route,f=Object.keys(y).length;for(const v of i){const x=v.routeData.exact.value===!0;if(v.routeData[x===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:F,query:ye,matched:nt,href:lt}=v.routeData.resolvedLink.value,Ce=Object.keys(ye).length;if(x===!0){if(F!==w||Ce!==f||Be(y,ye)===!1)continue;t=v.name.value;break}if(F!==""&&F!==w||Ce!==0&&Be(ye,y)===!1)continue;const W={matchedLen:nt.length,queryDiff:f-Ce,hrefLen:lt.length-F.length};if(W.matchedLen>n.matchedLen){t=v.name.value,n=W;continue}else if(W.matchedLen!==n.matchedLen)continue;if(W.queryDiff<n.queryDiff)t=v.name.value,n=W;else if(W.queryDiff!==n.queryDiff)continue;W.hrefLen>n.hrefLen&&(t=v.name.value,n=W)}t===null&&r.some(v=>v.routeData===void 0&&v.name.value===A.value)===!0||we({name:t,setCurrent:!0})}function Ze(t){if(K(),o.value!==!0&&M.value!==null&&t.target&&typeof t.target.closest=="function"){const n=t.target.closest(".q-tab");n&&M.value.contains(n)===!0&&(o.value=!0,C.value===!0&&ne(n))}}function et(){D(()=>{o.value=!1},30)}function me(){Re.avoidRouteWatcher===!1?R(Je):Y()}function Ee(){if(Q===void 0){const t=z(()=>c.$route.fullPath,me);Q=()=>{t(),Q=void 0}}}function tt(t){r.push(t),p.value++,fe(),t.routeData===void 0||c.$route===void 0?R(()=>{if(C.value===!0){const n=A.value,i=n!=null&&n!==""?r.find(w=>w.name.value===n):null;i&&ne(i.rootRef.value)}}):(Ee(),t.routeData.hasRouterLink.value===!0&&me())}function at(t){r.splice(r.indexOf(t),1),p.value--,fe(),Q!==void 0&&t.routeData!==void 0&&(r.every(n=>n.routeData===void 0)===!0&&Q(),me())}const Re={currentModel:A,tabProps:N,hasFocus:o,hasActiveTab:ee,registerTab:tt,unregisterTab:at,verifyRouteModel:me,updateModel:we,onKbdNavigate:Ge,avoidRouteWatcher:!1};ct(Fe,Re);function Ie(){d!==null&&clearTimeout(d),U(),Q!==void 0&&Q()}let Qe;return qe(Ie),dt(()=>{Qe=Q!==void 0,Ie()}),vt(()=>{Qe===!0&&Ee(),fe()}),()=>h("div",{ref:M,class:j.value,role:"tablist",onFocusin:Ze,onFocusout:et},[h(je,{onResize:xe}),h("div",{ref:k,class:ve.value,onScroll:le},ke(u.default)),h(S,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Pe,onTouchstartPassive:Pe,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U}),h(S,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(I.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Ae,onTouchstartPassive:Ae,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U})])}}),jt=Z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:u,emit:m}){const{proxy:{$q:c}}=de(),a=ze(mt,se);if(a===se)return console.error("QFooter needs to be child of QLayout"),se;const P=_(parseInt(e.heightHint,10)),L=_(!0),$=_(ft.value===!0||a.isContainer.value===!0?0:window.innerHeight),D=g(()=>e.reveal===!0||a.view.value.indexOf("F")!==-1||c.platform.is.ios&&a.isContainer.value===!0),K=g(()=>a.isContainer.value===!0?a.containerHeight.value:$.value),R=g(()=>{if(e.modelValue!==!0)return 0;if(D.value===!0)return L.value===!0?P.value:0;const o=a.scroll.value.position+K.value+P.value-a.height.value;return o>0?o:0}),Y=g(()=>e.modelValue!==!0||D.value===!0&&L.value!==!0),M=g(()=>e.modelValue===!0&&Y.value===!0&&e.reveal===!0),k=g(()=>"q-footer q-layout__section--marginal "+(D.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(Y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(D.value!==!0?" hidden":""):"")),A=g(()=>{const o=a.rows.value.bottom,d={};return o[0]==="l"&&a.left.space===!0&&(d[c.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),o[2]==="r"&&a.right.space===!0&&(d[c.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),d});function C(o,d){a.update("footer",o,d)}function T(o,d){o.value!==d&&(o.value=d)}function I({height:o}){T(P,o),C("size",o)}function V(){if(e.reveal!==!0)return;const{direction:o,position:d,inflectionPoint:q}=a.scroll.value;T(L,o==="up"||d-q<100||a.height.value-K.value-d-P.value<300)}function r(o){M.value===!0&&T(L,!0),m("focusin",o)}z(()=>e.modelValue,o=>{C("space",o),T(L,!0),a.animate()}),z(R,o=>{C("offset",o)}),z(()=>e.reveal,o=>{o===!1&&T(L,e.modelValue)}),z(L,o=>{a.animate(),m("reveal",o)}),z([P,a.scroll,a.height],V),z(()=>c.screen.height,o=>{a.isContainer.value!==!0&&T($,o)});const p={};return a.instances.footer=p,e.modelValue===!0&&C("size",P.value),C("space",e.modelValue),C("offset",R.value),qe(()=>{a.instances.footer===p&&(a.instances.footer=void 0,C("size",0),C("offset",0),C("space",!1))}),()=>{const o=Oe(u.default,[h(je,{debounce:0,onResize:I})]);return e.elevated===!0&&o.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h("footer",{class:k.value,style:A.value,onFocusin:r},o)}}});const Ht=[h("g",{transform:"translate(-20,-20)"},[h("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[h("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),h("g",{transform:"translate(20,20) rotate(15 50 50)"},[h("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[h("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];Z({name:"QSpinnerGears",props:ht,setup(e){const{cSize:u,classes:m}=gt(e);return()=>h("svg",{class:m.value,width:u.value,height:u.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Ht)}});function Ut(){He();const e=_(0),u=()=>{e.value++,e.value===1?(bt.create({title:"Exit App",message:"Are you sure you want to exit the app?",cancel:!0,persistent:!0}).onOk(()=>{window.close()}).onCancel(()=>{e.value=0}).onDismiss(()=>{e.value=0}),setTimeout(()=>{e.value=0},3e3)):e.value===2&&window.close()},m=c=>{c.preventDefault(),u()};return pe(()=>{history.pushState(null,"",window.location.pathname),window.addEventListener("popstate",m)}),Ke(()=>{window.removeEventListener("popstate",m)}),{handleExit:u}}function Wt(){const e=_(navigator.onLine),u=()=>{e.value=navigator.onLine};return pe(()=>{window.addEventListener("online",u),window.addEventListener("offline",u)}),Ke(()=>{window.removeEventListener("online",u),window.removeEventListener("offline",u)}),{isOnline:e}}function Gt(){return{LEVEL_PENDATAAN:{LEVEL_PENDATAAN_SENSUS:"Sensus",LEVEL_PENDATAAN_SURVEI:"Survei Sampel"}}}const X=e=>(qt("data-v-5a93212e"),e=e(),xt(),e),Xt={class:"flex justify-between"},Yt={class:"space-between"},Jt={class:"text-h6"},Zt=X(()=>b("div",{class:"text-subtitle2"},"Selamat datang di CERDAS",-1)),ea={class:"col-4 text-center"},ta=X(()=>b("div",{class:"text-caption"},"Kegiatan",-1)),aa={class:"text-h6"},na={class:"col-4 text-center"},la=X(()=>b("div",{class:"text-caption"},"Kegiatan Berjalan",-1)),oa={class:"text-h6"},ra={class:"col-4 text-center"},sa=X(()=>b("div",{class:"text-caption"},"Assignment",-1)),ia={class:"text-h6"},ua={class:"row q-mt-md"},ca=X(()=>b("div",{class:"col-8"},[b("div",{class:"text-h6"},"Daftar Survei")],-1)),da={class:"col-4 text-right"},va={class:"text-h6"},fa={class:"text-subtitle2"},ma=X(()=>b("h4",null,"Upload",-1)),ha=X(()=>b("h4",null,"Bantuan",-1)),ga=X(()=>b("div",{class:"text-h6 q-mb-md"},"Pengaturan",-1)),ba=["src"],_a={__name:"BerandaPage",setup(e){const{isOnline:u}=Wt(),{getKegiatans:m,getRekapitulasiKegiatan:c,initKegiatanService:a}=Rt(),{user:P,token:L,initToken:$,logout:D,redirectIfTokenExpired:K,getFormattedTokenExpirationDate:R,getTokenExpirationDate:Y,isTokenExpired:M,getShowSuccessLogin:k,setShowSuccessLogin:A}=It(),C=Gt(),T=_({}),I=_t(),V=_(""),r=He(),p=_("beranda");_(!1),Ut();const o=_({}),d=_({});getCurrentInstance(),pt(async()=>{}),pe(async()=>{$();try{if(o.value=await c(),d.value=await m(),console.log("rekapitulasi",o.value),console.log("kegiatan",d.value),!k()){if(V.value=await R(),T.value=await P(),!Boolean(T.value))throw new Error("User tidak ditemukan");console.log("this is",V.value),r.notify({progress:!0,message:"Berhasil login",icon:"check",color:"green",textColor:"white",timeout:2e3})}A(!1),V.value=await R()}catch(ee){r.notify({type:"negative",message:"Login gagal: "+ee.message,progress:!0,timeout:2e3}),I.push("/login")}r.loading.hide(),console.log("this is user active",T.value)});const q=async()=>{await D(),I.push(await K())},Q=()=>{r.dialog({title:"Confirm",message:"Apakah Anda ingin logout?",cancel:!0,persistent:!0}).onOk(()=>{r.dialog({title:"Confirm",message:"Apakah Anda yakin?",cancel:!0,persistent:!0}).onOk(()=>{q()})}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},N=async()=>{let ee=r.notify({progress:!0,spinner:!0,message:"Sync..",color:"primary",textColor:"white",timeout:5e3});await a(!0),o.value=await c(),d.value=await m(),setTimeout(ee,2e3)};return(ee,te)=>(J(),oe(Et,{class:"q-pa-md"},{default:s(()=>[l(Dt,{modelValue:p.value,"onUpdate:modelValue":te[0]||(te[0]=j=>p.value=j),animated:"",swipeable:"",class:"full-height",style:{"min-height":"100%"}},{default:s(()=>[l(be,{name:"beranda"},{default:s(()=>{var j,ve;return[b("div",Xt,[b("div",Yt,[b("div",Jt,"Halo, "+O((j=T.value)==null?void 0:j.name)+"!",1),Zt]),l(he,{icon:re(u)?"signal_wifi_4_bar":"signal_wifi_off",class:wt({"text-positive":re(u),"text-negative":!re(u),"pulse-animation":!re(u)}),rounded:"",flat:""},null,8,["icon","class"])]),l(Le,{flat:"",bordered:"",class:"q-mt-md"},{default:s(()=>[l(Ve,{class:"row items-center q-pb-none"},{default:s(()=>{var E,H,ae;return[b("div",ea,[l(S,{name:"assignment",size:"sm",color:"primary"}),ta,b("div",aa,O((E=o.value)==null?void 0:E.kegiatan),1)]),b("div",na,[l(S,{name:"schedule",size:"sm",color:"primary"}),la,b("div",oa,O((H=o.value)==null?void 0:H.periode),1)]),b("div",ra,[l(S,{name:"group",size:"sm",color:"primary"}),sa,b("div",ia,O((ae=o.value)==null?void 0:ae.assignment),1)])]}),_:1})]),_:1}),b("div",ua,[ca,b("div",da,[l(he,{icon:"sync",color:"primary",label:"SYNC",rounded:"",onClick:N})])]),(J(!0),yt(Tt,null,Ct((ve=d.value)==null?void 0:ve.data,E=>(J(),oe(Le,{class:"q-mt-sm",key:E.id},{default:s(()=>[l(Ve,{onClick:H=>re(I).push(`/nav/${E.id}`)},{default:s(()=>[b("div",va,O(E.nama+" "+E.tahun),1),b("div",fa,O(re(C).LEVEL_PENDATAAN[E.level_pendataan]),1)]),_:2},1032,["onClick"]),l(kt,null,{default:s(()=>[l(he,{flat:"",color:"primary",icon:"chevron_right"})]),_:1})]),_:2},1024))),128))]}),_:1}),l(be,{name:"upload"},{default:s(()=>[ma]),_:1}),l(be,{name:"bantuan"},{default:s(()=>[ha]),_:1}),l(be,{name:"pengaturan"},{default:s(()=>[ga,l(Le,{class:"q-mb-md"},{default:s(()=>[l(ie,null,{default:s(()=>[l(B,{avatar:""},{default:s(()=>[l(Lt,null,{default:s(()=>[b("img",{src:T.value.picture},null,8,ba)]),_:1})]),_:1}),l(B,null,{default:s(()=>[l(ge,null,{default:s(()=>[G(O(T.value.name),1)]),_:1}),l(ge,{caption:""},{default:s(()=>[G(O(T.value.email),1)]),_:1}),l(ge,{caption:""},{default:s(()=>[G("session expired:")]),_:1}),l(ge,{caption:""},{default:s(()=>[G(O(V.value),1)]),_:1})]),_:1})]),_:1})]),_:1}),l($t,{bordered:"",separator:""},{default:s(()=>[ue((J(),oe(ie,{clickable:""},{default:s(()=>[l(B,{avatar:""},{default:s(()=>[l(S,{name:"smartphone",color:"primary"})]),_:1}),l(B,null,{default:s(()=>[G("Sistem")]),_:1}),l(B,{side:""},{default:s(()=>[l(S,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[ce]]),ue((J(),oe(ie,{clickable:""},{default:s(()=>[l(B,{avatar:""},{default:s(()=>[l(S,{name:"backup",color:"primary"})]),_:1}),l(B,null,{default:s(()=>[G("Backup")]),_:1}),l(B,{side:""},{default:s(()=>[l(S,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[ce]]),ue((J(),oe(ie,{clickable:""},{default:s(()=>[l(B,{avatar:""},{default:s(()=>[l(S,{name:"policy",color:"primary"})]),_:1}),l(B,null,{default:s(()=>[G("Kebijakan Privasi")]),_:1}),l(B,{side:""},{default:s(()=>[l(S,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[ce]]),ue((J(),oe(ie,{clickable:""},{default:s(()=>[l(B,{avatar:""},{default:s(()=>[l(S,{name:"help",color:"primary"})]),_:1}),l(B,null,{default:s(()=>[G("FAQ Aplikasi")]),_:1}),l(B,{side:""},{default:s(()=>[l(S,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[ce]])]),_:1}),l(he,{class:"full-width q-mt-lg",color:"primary",outline:"",label:"LOGOUT",onClick:Q})]),_:1})]),_:1},8,["modelValue"]),l(jt,null,{default:s(()=>[l(Kt,{modelValue:p.value,"onUpdate:modelValue":te[1]||(te[1]=j=>p.value=j),"no-caps":"",align:"justify","active-color":"primary","indicator-color":"primary",class:"bg-grey-3 text-grey",flat:""},{default:s(()=>[l(_e,{name:"beranda",icon:"home",label:"Beranda"}),l(_e,{name:"upload",icon:"cloud_upload",label:"Upload"}),l(_e,{name:"bantuan",icon:"help",label:"Bantuan"}),l(_e,{name:"pengaturan",icon:"settings",label:"Pengaturan"})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};var Ba=Qt(_a,[["__scopeId","data-v-5a93212e"]]);export{Ba as default};
