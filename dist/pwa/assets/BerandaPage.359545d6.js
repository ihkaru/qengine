import{Z as H,a9 as h,ad as he,c as f,aj as Re,aE as it,ak as Ie,aF as st,r as g,P as ie,aG as ze,aw as Ee,az as rt,am as ut,S as Fe,ac as oe,J as ke,o as Ce,aH as Oe,x as fe,aI as me,aJ as ct,aK as I,a8 as je,aL as dt,aM as vt,aN as Be,aO as Ne,t as U,a7 as ft,aP as mt,aQ as ht,a4 as gt,aa as bt,aR as _t,aS as yt,u as Ue,aT as wt,W as pt,V as qt,ai as kt,e as te,j as le,w as r,g as o,q as y,A as X,an as ye,z as de,n as Ct,aB as Ae,aA as Ke,f as Lt,i as Tt,F as xt,aU as St,ao as ee,aV as Pt,aC as Bt,aD as At}from"./index.04e22568.js";import{u as Et,a as Rt,b as It,c as Qt}from"./use-panel.6066ff35.js";import{Q as He}from"./QResizeObserver.b46bcbb9.js";import{Q as $t}from"./QPage.62cae712.js";import{u as We,a as Dt}from"./useAuth.d91ad0c0.js";import{u as Vt}from"./useKegiatanService.995f990d.js";import{_ as Mt}from"./plugin-vue_export-helper.21dcd24c.js";import"./local-forage.02328131.js";import"./_commonjsHelpers.dffb1198.js";import"./axios.6a0498cb.js";import"./index.es.f88cdb0c.js";var we=H({name:"QTabPanel",props:Et,setup(e,{slots:s}){return()=>h("div",{class:"q-tab-panel",role:"tabpanel"},he(s.default))}}),$=H({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:s}){const d=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>h("div",{class:d.value},he(s.default))}}),pe=H({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:s}){const d=f(()=>parseInt(e.lines,10)),u=f(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(d.value===1?" ellipsis":"")),a=f(()=>e.lines!==void 0&&d.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":d.value}:null);return()=>h("div",{style:a.value,class:u.value},he(s.default))}}),ve=H({name:"QItem",props:{...Re,...it,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:s,emit:d}){const{proxy:{$q:u}}=ie(),a=Ie(e,u),{hasLink:x,linkAttrs:L,linkClass:M,linkTag:D,navigateOnClick:F}=st(),S=g(null),Q=g(null),V=f(()=>e.clickable===!0||x.value===!0||e.tag==="label"),p=f(()=>e.disable!==!0&&V.value===!0),P=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(x.value===!0&&e.active===null?M.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(p.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),w=f(()=>{if(e.insetLevel===void 0)return null;const n=u.lang.rtl===!0?"Right":"Left";return{["padding"+n]:16+e.insetLevel*56+"px"}});function B(n){p.value===!0&&(Q.value!==null&&(n.qKeyEvent!==!0&&document.activeElement===S.value?Q.value.focus():document.activeElement===Q.value&&S.value.focus()),F(n))}function T(n){if(p.value===!0&&ze(n,[13,32])===!0){Ee(n),n.qKeyEvent=!0;const _=new MouseEvent("click",n);_.qKeyEvent=!0,S.value.dispatchEvent(_)}d("keyup",n)}function O(){const n=rt(s.default,[]);return p.value===!0&&n.unshift(h("div",{class:"q-focus-helper",tabindex:-1,ref:Q})),n}return()=>{const n={ref:S,class:P.value,style:w.value,role:"listitem",onClick:B,onKeyup:T};return p.value===!0?(n.tabindex=e.tabindex||"0",Object.assign(n,L.value)):V.value===!0&&(n["aria-disabled"]="true"),h(D.value,n,O())}}}),Nt=H({name:"QList",props:{...Re,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:s}){const d=ie(),u=Ie(e,d.proxy.$q),a=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(u.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>h(e.tag,{class:a.value},he(s.default))}}),Kt=H({name:"QTabPanels",props:{...Rt,...Re},emits:It,setup(e,{slots:s}){const d=ie(),u=Ie(e,d.proxy.$q),{updatePanelsList:a,getPanelContent:x,panelDirectives:L}=Qt(),M=f(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(a(s),ut("div",{class:M.value},x(),"pan",e.swipeable,()=>L.value))}});let zt=0;const Ft=["click","keydown"],Ot={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${zt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function jt(e,s,d,u){const a=Fe(Oe,oe);if(a===oe)return console.error("QTab/QRouteTab component needs to be child of QTabs"),oe;const{proxy:x}=ie(),L=g(null),M=g(null),D=g(null),F=f(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),S=f(()=>a.currentModel.value===e.name),Q=f(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(S.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),V=f(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),p=f(()=>e.disable===!0||a.hasFocus.value===!0||S.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function P(n,_){if(_!==!0&&L.value!==null&&L.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&Ee(n);return}if(u===void 0){a.updateModel({name:e.name}),d("click",n);return}if(u.hasRouterLink.value===!0){const i=(v={})=>{let C;const A=v.to===void 0||dt(v.to,e.to)===!0?a.avoidRouteWatcher=vt():null;return u.navigateToRouterLink(n,{...v,returnRouterError:!0}).catch(N=>{C=N}).then(N=>{if(A===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,C===void 0&&(N===void 0||N.message!==void 0&&N.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),v.returnRouterError===!0)return C!==void 0?Promise.reject(C):N})};d("click",n,i),n.defaultPrevented!==!0&&i();return}d("click",n)}function w(n){ze(n,[13,32])?P(n,!0):ct(n)!==!0&&n.keyCode>=35&&n.keyCode<=40&&n.altKey!==!0&&n.metaKey!==!0&&a.onKbdNavigate(n.keyCode,x.$el)===!0&&Ee(n),d("keydown",n)}function B(){const n=a.tabProps.value.narrowIndicator,_=[],i=h("div",{ref:D,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&_.push(h(I,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&_.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&_.push(e.alertIcon!==void 0?h(I,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),n===!0&&_.push(i);const v=[h("div",{class:"q-focus-helper",tabindex:-1,ref:L}),h("div",{class:V.value},je(s.default,_))];return n===!1&&v.push(i),v}const T={name:f(()=>e.name),rootRef:M,tabIndicatorRef:D,routeData:u};ke(()=>{a.unregisterTab(T)}),Ce(()=>{a.registerTab(T)});function O(n,_){const i={ref:M,class:Q.value,tabindex:p.value,role:"tab","aria-selected":S.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:P,onKeydown:w,..._};return fe(h(n,i,B()),[[me,F.value]])}return{renderTab:O,$tabs:a}}var qe=H({name:"QTab",props:Ot,emits:Ft,setup(e,{slots:s,emit:d}){const{renderTab:u}=jt(e,s,d);return()=>u("div")}});let Ge=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const s=document.createElement("div");Object.assign(s.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(s),e.scrollLeft=-1e3,Ge=e.scrollLeft>=0,e.remove()}function Ut(e,s,d){const u=d===!0?["left","right"]:["top","bottom"];return`absolute-${s===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const Ht=["left","center","right","justify"];var Wt=H({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ht.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:s,emit:d}){const{proxy:u}=ie(),{$q:a}=u,{registerTick:x}=Be(),{registerTick:L}=Be(),{registerTick:M}=Be(),{registerTimeout:D,removeTimeout:F}=Ne(),{registerTimeout:S,removeTimeout:Q}=Ne(),V=g(null),p=g(null),P=g(e.modelValue),w=g(!1),B=g(!0),T=g(!1),O=g(!1),n=[],_=g(0),i=g(!1);let v=null,C=null,A;const N=f(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Ut(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Le=f(()=>{const t=_.value,l=P.value;for(let c=0;c<t;c++)if(n[c].name.value===l)return!0;return!1}),ge=f(()=>`q-tabs__content--align-${w.value===!0?"left":O.value===!0?"justify":e.align}`),Te=f(()=>`q-tabs row no-wrap items-center q-tabs--${w.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),xe=f(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),ae=f(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ne=f(()=>e.vertical!==!0&&a.lang.rtl===!0),se=f(()=>Ge===!1&&ne.value===!0);U(ne,j),U(()=>e.modelValue,t=>{K({name:t,setCurrent:!0,skipEmit:!0})}),U(()=>e.outsideArrows,W);function K({name:t,setCurrent:l,skipEmit:c}){P.value!==t&&(c!==!0&&e["onUpdate:modelValue"]!==void 0&&d("update:modelValue",t),(l===!0||e["onUpdate:modelValue"]===void 0)&&(be(P.value,t),P.value=t))}function W(){x(()=>{G({width:V.value.offsetWidth,height:V.value.offsetHeight})})}function G(t){if(ae.value===void 0||p.value===null)return;const l=t[ae.value.container],c=Math.min(p.value[ae.value.scroll],Array.prototype.reduce.call(p.value.children,(k,b)=>k+(b[ae.value.content]||0),0)),q=l>0&&c>l;w.value=q,q===!0&&L(j),O.value=l<parseInt(e.breakpoint,10)}function be(t,l){const c=t!=null&&t!==""?n.find(k=>k.name.value===t):null,q=l!=null&&l!==""?n.find(k=>k.name.value===l):null;if(c&&q){const k=c.tabIndicatorRef.value,b=q.tabIndicatorRef.value;v!==null&&(clearTimeout(v),v=null),k.style.transition="none",k.style.transform="none",b.style.transition="none",b.style.transform="none";const m=k.getBoundingClientRect(),R=b.getBoundingClientRect();b.style.transform=e.vertical===!0?`translate3d(0,${m.top-R.top}px,0) scale3d(1,${R.height?m.height/R.height:1},1)`:`translate3d(${m.left-R.left}px,0,0) scale3d(${R.width?m.width/R.width:1},1,1)`,M(()=>{v=setTimeout(()=>{v=null,b.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",b.style.transform="none"},70)})}q&&w.value===!0&&E(q.rootRef.value)}function E(t){const{left:l,width:c,top:q,height:k}=p.value.getBoundingClientRect(),b=t.getBoundingClientRect();let m=e.vertical===!0?b.top-q:b.left-l;if(m<0){p.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(m),j();return}m+=e.vertical===!0?b.height-k:b.width-c,m>0&&(p.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(m),j())}function j(){const t=p.value;if(t===null)return;const l=t.getBoundingClientRect(),c=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);ne.value===!0?(B.value=Math.ceil(c+l.width)<t.scrollWidth-1,T.value=c>0):(B.value=c>0,T.value=e.vertical===!0?Math.ceil(c+l.height)<t.scrollHeight:Math.ceil(c+l.width)<t.scrollWidth)}function re(t){C!==null&&clearInterval(C),C=setInterval(()=>{Ye(t)===!0&&z()},5)}function ue(){re(se.value===!0?Number.MAX_SAFE_INTEGER:0)}function ce(){re(se.value===!0?0:Number.MAX_SAFE_INTEGER)}function z(){C!==null&&(clearInterval(C),C=null)}function Je(t,l){const c=Array.prototype.filter.call(p.value.children,R=>R===l||R.matches&&R.matches(".q-tab.q-focusable")===!0),q=c.length;if(q===0)return;if(t===36)return E(c[0]),c[0].focus(),!0;if(t===35)return E(c[q-1]),c[q-1].focus(),!0;const k=t===(e.vertical===!0?38:37),b=t===(e.vertical===!0?40:39),m=k===!0?-1:b===!0?1:void 0;if(m!==void 0){const R=ne.value===!0?-1:1,J=c.indexOf(l)+m*R;return J>=0&&J<q&&(E(c[J]),c[J].focus({preventScroll:!0})),!0}}const Xe=f(()=>se.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,l)=>{t.scrollLeft=-l}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,l)=>{t.scrollTop=l}}:{get:t=>t.scrollLeft,set:(t,l)=>{t.scrollLeft=l}});function Ye(t){const l=p.value,{get:c,set:q}=Xe.value;let k=!1,b=c(l);const m=t<b?-1:1;return b+=m*5,b<0?(k=!0,b=0):(m===-1&&b<=t||m===1&&b>=t)&&(k=!0,b=t),q(l,b),j(),k}function Qe(t,l){for(const c in t)if(t[c]!==l[c])return!1;return!0}function Ze(){let t=null,l={matchedLen:0,queryDiff:9999,hrefLen:0};const c=n.filter(m=>m.routeData!==void 0&&m.routeData.hasRouterLink.value===!0),{hash:q,query:k}=u.$route,b=Object.keys(k).length;for(const m of c){const R=m.routeData.exact.value===!0;if(m.routeData[R===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:J,query:Se,matched:lt,href:ot}=m.routeData.resolvedLink.value,Pe=Object.keys(Se).length;if(R===!0){if(J!==q||Pe!==b||Qe(k,Se)===!1)continue;t=m.name.value;break}if(J!==""&&J!==q||Pe!==0&&Qe(Se,k)===!1)continue;const Z={matchedLen:lt.length,queryDiff:b-Pe,hrefLen:ot.length-J.length};if(Z.matchedLen>l.matchedLen){t=m.name.value,l=Z;continue}else if(Z.matchedLen!==l.matchedLen)continue;if(Z.queryDiff<l.queryDiff)t=m.name.value,l=Z;else if(Z.queryDiff!==l.queryDiff)continue;Z.hrefLen>l.hrefLen&&(t=m.name.value,l=Z)}t===null&&n.some(m=>m.routeData===void 0&&m.name.value===P.value)===!0||K({name:t,setCurrent:!0})}function et(t){if(F(),i.value!==!0&&V.value!==null&&t.target&&typeof t.target.closest=="function"){const l=t.target.closest(".q-tab");l&&V.value.contains(l)===!0&&(i.value=!0,w.value===!0&&E(l))}}function tt(){D(()=>{i.value=!1},30)}function _e(){De.avoidRouteWatcher===!1?S(Ze):Q()}function $e(){if(A===void 0){const t=U(()=>u.$route.fullPath,_e);A=()=>{t(),A=void 0}}}function at(t){n.push(t),_.value++,W(),t.routeData===void 0||u.$route===void 0?S(()=>{if(w.value===!0){const l=P.value,c=l!=null&&l!==""?n.find(q=>q.name.value===l):null;c&&E(c.rootRef.value)}}):($e(),t.routeData.hasRouterLink.value===!0&&_e())}function nt(t){n.splice(n.indexOf(t),1),_.value--,W(),A!==void 0&&t.routeData!==void 0&&(n.every(l=>l.routeData===void 0)===!0&&A(),_e())}const De={currentModel:P,tabProps:N,hasFocus:i,hasActiveTab:Le,registerTab:at,unregisterTab:nt,verifyRouteModel:_e,updateModel:K,onKbdNavigate:Je,avoidRouteWatcher:!1};ft(Oe,De);function Ve(){v!==null&&clearTimeout(v),z(),A!==void 0&&A()}let Me;return ke(Ve),mt(()=>{Me=A!==void 0,Ve()}),ht(()=>{Me===!0&&$e(),W()}),()=>h("div",{ref:V,class:Te.value,role:"tablist",onFocusin:et,onFocusout:tt},[h(He,{onResize:G}),h("div",{ref:p,class:xe.value,onScroll:j},he(s.default)),h(I,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(B.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ue,onTouchstartPassive:ue,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z}),h(I,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ce,onTouchstartPassive:ce,onMouseupPassive:z,onMouseleavePassive:z,onTouchendPassive:z})])}}),Gt=H({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:d}){const{proxy:{$q:u}}=ie(),a=Fe(bt,oe);if(a===oe)return console.error("QFooter needs to be child of QLayout"),oe;const x=g(parseInt(e.heightHint,10)),L=g(!0),M=g(gt.value===!0||a.isContainer.value===!0?0:window.innerHeight),D=f(()=>e.reveal===!0||a.view.value.indexOf("F")!==-1||u.platform.is.ios&&a.isContainer.value===!0),F=f(()=>a.isContainer.value===!0?a.containerHeight.value:M.value),S=f(()=>{if(e.modelValue!==!0)return 0;if(D.value===!0)return L.value===!0?x.value:0;const i=a.scroll.value.position+F.value+x.value-a.height.value;return i>0?i:0}),Q=f(()=>e.modelValue!==!0||D.value===!0&&L.value!==!0),V=f(()=>e.modelValue===!0&&Q.value===!0&&e.reveal===!0),p=f(()=>"q-footer q-layout__section--marginal "+(D.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(Q.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(D.value!==!0?" hidden":""):"")),P=f(()=>{const i=a.rows.value.bottom,v={};return i[0]==="l"&&a.left.space===!0&&(v[u.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),i[2]==="r"&&a.right.space===!0&&(v[u.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),v});function w(i,v){a.update("footer",i,v)}function B(i,v){i.value!==v&&(i.value=v)}function T({height:i}){B(x,i),w("size",i)}function O(){if(e.reveal!==!0)return;const{direction:i,position:v,inflectionPoint:C}=a.scroll.value;B(L,i==="up"||v-C<100||a.height.value-F.value-v-x.value<300)}function n(i){V.value===!0&&B(L,!0),d("focusin",i)}U(()=>e.modelValue,i=>{w("space",i),B(L,!0),a.animate()}),U(S,i=>{w("offset",i)}),U(()=>e.reveal,i=>{i===!1&&B(L,e.modelValue)}),U(L,i=>{a.animate(),d("reveal",i)}),U([x,a.scroll,a.height],O),U(()=>u.screen.height,i=>{a.isContainer.value!==!0&&B(M,i)});const _={};return a.instances.footer=_,e.modelValue===!0&&w("size",x.value),w("space",e.modelValue),w("offset",S.value),ke(()=>{a.instances.footer===_&&(a.instances.footer=void 0,w("size",0),w("offset",0),w("space",!1))}),()=>{const i=je(s.default,[h(He,{debounce:0,onResize:T})]);return e.elevated===!0&&i.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h("footer",{class:p.value,style:P.value,onFocusin:n},i)}}});const Jt=[h("g",{transform:"translate(-20,-20)"},[h("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[h("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),h("g",{transform:"translate(20,20) rotate(15 50 50)"},[h("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[h("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];H({name:"QSpinnerGears",props:_t,setup(e){const{cSize:s,classes:d}=yt(e);return()=>h("svg",{class:d.value,width:s.value,height:s.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},Jt)}});function Xt(){We();const e=g(0),s=()=>{e.value++,e.value===1?(wt.create({title:"Exit App",message:"Are you sure you want to exit the app?",cancel:!0,persistent:!0}).onOk(()=>{window.close()}).onCancel(()=>{e.value=0}).onDismiss(()=>{e.value=0}),setTimeout(()=>{e.value=0},3e3)):e.value===2&&window.close()},d=u=>{u.preventDefault(),s()};return Ce(()=>{history.pushState(null,"",window.location.pathname),window.addEventListener("popstate",d)}),Ue(()=>{window.removeEventListener("popstate",d)}),{handleExit:s}}function Yt(){const e=g(navigator.onLine),s=()=>{e.value=navigator.onLine};return Ce(()=>{window.addEventListener("online",s),window.addEventListener("offline",s)}),Ue(()=>{window.removeEventListener("online",s),window.removeEventListener("offline",s)}),{isOnline:e}}function Zt(){return{LEVEL_PENDATAAN:{LEVEL_PENDATAAN_SENSUS:"Sensus",LEVEL_PENDATAAN_SURVEI:"Survei Sampel"}}}const Y=e=>(Bt("data-v-3d16b5e5"),e=e(),At(),e),ea={class:"flex justify-between"},ta={class:"space-between"},aa={class:"text-h6"},na=Y(()=>y("div",{class:"text-subtitle2"},"Selamat datang di CERDAS",-1)),la={class:"col-4 text-center"},oa=Y(()=>y("div",{class:"text-caption"},"Kegiatan",-1)),ia={class:"text-h6"},sa={class:"col-4 text-center"},ra=Y(()=>y("div",{class:"text-caption"},"Kegiatan Berjalan",-1)),ua={class:"text-h6"},ca={class:"col-4 text-center"},da=Y(()=>y("div",{class:"text-caption"},"Assignment",-1)),va={class:"text-h6"},fa={class:"row q-mt-md"},ma=Y(()=>y("div",{class:"col-8"},[y("div",{class:"text-h6"},"Daftar Survei")],-1)),ha={class:"col-4 text-right"},ga=Y(()=>y("br",null,null,-1)),ba={class:"text-h6"},_a={class:"text-subtitle2"},ya=Y(()=>y("h4",null,"Upload",-1)),wa=Y(()=>y("h4",null,"Bantuan",-1)),pa=Y(()=>y("div",{class:"text-h6 q-mb-md"},"Pengaturan",-1)),qa=["src"],ka={__name:"BerandaPage",setup(e){const{isOnline:s}=Yt(),{getKegiatans:d,getRekapitulasiKegiatan:u,initKegiatanService:a,setSelectedKegiatan:x}=Vt(),{user:L,token:M,initToken:D,logout:F,redirectIfTokenExpired:S,getFormattedTokenExpirationDate:Q,getTokenExpirationDate:V,isTokenExpired:p,getShowSuccessLogin:P,setShowSuccessLogin:w}=Dt(),B=Zt(),T=g({}),O=pt(),n=qt(),_=g(""),i=We(),v=g("beranda-page");g(!1),Xt();const C=g({}),A=g({}),N=g(!1),Le=g(0),ge=g(!0),Te=()=>{Le.value+=1};kt(async()=>{D()}),Ce(async()=>{N.value=P(),console.log("showSuccessLogin:",N.value);try{if(C.value=await u(),A.value=await d(),console.log("rekapitulasi",C.value),console.log("kegiatan",A.value),N.value){if(_.value=await Q(),T.value=await L(),!Boolean(T.value))throw new Error("User tidak ditemukan");console.log("this is",_.value),O.query.loginSuccess==="true"&&i.notify({progress:!0,message:"Berhasil login",icon:"check",color:"green",textColor:"white",timeout:2e3}),ge.value&&(console.log("redirecting",v.value),Te(),ge.value=!1)}_.value=await Q()}catch(K){i.notify({type:"negative",message:"Login gagal: "+K.message,progress:!0,timeout:2e3}),n.push("/login")}i.loading.hide(),console.log("this is user active",T.value)});const xe=async()=>{await F(),n.push(await S())},ae=()=>{i.dialog({title:"Confirm",message:"Apakah Anda ingin logout?",cancel:!0,persistent:!0}).onOk(()=>{i.dialog({title:"Confirm",message:"Apakah Anda yakin?",cancel:!0,persistent:!0}).onOk(()=>{xe()})}).onOk(()=>{}).onCancel(()=>{}).onDismiss(()=>{})},ne=async()=>{let K=i.notify({progress:!0,spinner:!0,message:"Sync..",color:"primary",textColor:"white",timeout:5e3});await a(!0),C.value=await u(),A.value=await d(),setTimeout(K,2e3)};ke(()=>{w(!1)});const se=async K=>{await x(K),n.push(`/nav/kegiatans/${K.id}`)};return(K,W)=>(te(),le($t,{class:"q-pa-md"},{default:r(()=>[o(Kt,{modelValue:v.value,"onUpdate:modelValue":W[0]||(W[0]=G=>v.value=G),animated:"",swipeable:"",class:"full-height",style:{"min-height":"100%"}},{default:r(()=>[o(we,{name:"beranda-page","keep-alive":"true"},{default:r(()=>{var G,be;return[y("div",ea,[y("div",ta,[y("div",aa,"Halo, "+X((G=T.value)==null?void 0:G.name)+"!",1),na]),o(ye,{icon:de(s)?"signal_wifi_4_bar":"signal_wifi_off",class:Ct({"text-positive":de(s),"text-negative":!de(s),"pulse-animation":!de(s)}),rounded:"",flat:""},null,8,["icon","class"])]),o(Ae,{flat:"",bordered:"",class:"q-mt-md"},{default:r(()=>[o(Ke,{class:"row items-center q-pb-none"},{default:r(()=>{var E,j,re,ue,ce,z;return[y("div",la,[o(I,{name:"assignment",size:"sm",color:"primary"}),oa,y("div",ia,X((j=(E=C.value)==null?void 0:E.kegiatan)!=null?j:0),1)]),y("div",sa,[o(I,{name:"schedule",size:"sm",color:"primary"}),ra,y("div",ua,X((ue=(re=C.value)==null?void 0:re.periode)!=null?ue:0),1)]),y("div",ca,[o(I,{name:"group",size:"sm",color:"primary"}),da,y("div",va,X((z=(ce=C.value)==null?void 0:ce.assignment)!=null?z:0),1)])]}),_:1})]),_:1}),y("div",fa,[ma,y("div",ha,[o(ye,{icon:"sync",color:"primary",label:"SYNC",rounded:"",onClick:ne})])]),ga,(te(!0),Lt(xt,null,Tt((be=A.value)==null?void 0:be.data,E=>(te(),le(Ae,{class:"q-mt-sm",key:E.id},{default:r(()=>[o(Ke,{onClick:j=>se(E)},{default:r(()=>[y("div",ba,X(E.nama+" "+E.tahun),1),y("div",_a,X(de(B).LEVEL_PENDATAAN[E.level_pendataan]),1)]),_:2},1032,["onClick"]),o(Pt,null,{default:r(()=>[o(ye,{flat:"",color:"primary",icon:"chevron_right"})]),_:1})]),_:2},1024))),128))]}),_:1}),o(we,{name:"upload-page"},{default:r(()=>[ya]),_:1}),o(we,{name:"bantuan-page"},{default:r(()=>[wa]),_:1}),o(we,{name:"pengaturan-page"},{default:r(()=>[pa,o(Ae,{class:"q-mb-md"},{default:r(()=>[o(ve,null,{default:r(()=>[o($,{avatar:""},{default:r(()=>[o(St,null,{default:r(()=>[y("img",{src:T.value.picture},null,8,qa)]),_:1})]),_:1}),o($,null,{default:r(()=>[o(pe,null,{default:r(()=>[ee(X(T.value.name),1)]),_:1}),o(pe,{caption:""},{default:r(()=>[ee(X(T.value.email),1)]),_:1}),o(pe,{caption:""},{default:r(()=>[ee("session expired:")]),_:1}),o(pe,{caption:""},{default:r(()=>[ee(X(_.value),1)]),_:1})]),_:1})]),_:1})]),_:1}),o(Nt,{bordered:"",separator:""},{default:r(()=>[fe((te(),le(ve,{clickable:""},{default:r(()=>[o($,{avatar:""},{default:r(()=>[o(I,{name:"smartphone",color:"primary"})]),_:1}),o($,null,{default:r(()=>[ee("Sistem")]),_:1}),o($,{side:""},{default:r(()=>[o(I,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[me]]),fe((te(),le(ve,{clickable:""},{default:r(()=>[o($,{avatar:""},{default:r(()=>[o(I,{name:"backup",color:"primary"})]),_:1}),o($,null,{default:r(()=>[ee("Backup")]),_:1}),o($,{side:""},{default:r(()=>[o(I,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[me]]),fe((te(),le(ve,{clickable:""},{default:r(()=>[o($,{avatar:""},{default:r(()=>[o(I,{name:"policy",color:"primary"})]),_:1}),o($,null,{default:r(()=>[ee("Kebijakan Privasi")]),_:1}),o($,{side:""},{default:r(()=>[o(I,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[me]]),fe((te(),le(ve,{clickable:""},{default:r(()=>[o($,{avatar:""},{default:r(()=>[o(I,{name:"help",color:"primary"})]),_:1}),o($,null,{default:r(()=>[ee("FAQ Aplikasi")]),_:1}),o($,{side:""},{default:r(()=>[o(I,{name:"chevron_right",color:"grey"})]),_:1})]),_:1})),[[me]])]),_:1}),o(ye,{class:"full-width q-mt-lg",color:"primary",outline:"",label:"LOGOUT",onClick:ae})]),_:1})]),_:1},8,["modelValue"]),o(Gt,null,{default:r(()=>[o(Wt,{modelValue:v.value,"onUpdate:modelValue":W[1]||(W[1]=G=>v.value=G),"no-caps":"",align:"justify","active-color":"primary","indicator-color":"primary",class:"bg-grey-3 text-grey",flat:""},{default:r(()=>[o(qe,{name:"beranda-page",icon:"home",label:"Beranda"}),o(qe,{name:"upload-page",icon:"cloud_upload",label:"Upload"}),o(qe,{name:"bantuan-page",icon:"help",label:"Bantuan"}),o(qe,{name:"pengaturan-page",icon:"settings",label:"Pengaturan"})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};var Qa=Mt(ka,[["__scopeId","data-v-3d16b5e5"]]);export{Qa as default};
