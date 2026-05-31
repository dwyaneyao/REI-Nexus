(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Od={exports:{}},ws={},Rd={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),bm=Symbol.for("react.portal"),Um=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),Ym=Symbol.for("react.profiler"),Xm=Symbol.for("react.provider"),Qm=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),Km=Symbol.for("react.suspense"),Zm=Symbol.for("react.memo"),qm=Symbol.for("react.lazy"),dc=Symbol.iterator;function Jm(e){return e===null||typeof e!="object"?null:(e=dc&&e[dc]||e["@@iterator"],typeof e=="function"?e:null)}var $d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,jd={};function Ir(e,n,t){this.props=e,this.context=n,this.refs=jd,this.updater=t||$d}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fd(){}Fd.prototype=Ir.prototype;function Uu(e,n,t){this.props=e,this.context=n,this.refs=jd,this.updater=t||$d}var Wu=Uu.prototype=new Fd;Wu.constructor=Uu;Dd(Wu,Ir.prototype);Wu.isPureReactComponent=!0;var hc=Array.isArray,Hd=Object.prototype.hasOwnProperty,Yu={current:null},Bd={key:!0,ref:!0,__self:!0,__source:!0};function Vd(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)Hd.call(n,r)&&!Bd.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var u=Array(l),a=0;a<l;a++)u[a]=arguments[a+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ri,type:e,key:o,ref:s,props:i,_owner:Yu.current}}function ey(e,n){return{$$typeof:Ri,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Xu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ri}function ny(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var pc=/\/+/g;function qs(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ny(""+e.key):n.toString(36)}function _o(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ri:case bm:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+qs(s,0):r,hc(i)?(t="",e!=null&&(t=e.replace(pc,"$&/")+"/"),_o(i,n,t,"",function(a){return a})):i!=null&&(Xu(i)&&(i=ey(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(pc,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",hc(e))for(var l=0;l<e.length;l++){o=e[l];var u=r+qs(o,l);s+=_o(o,n,t,u,i)}else if(u=Jm(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=r+qs(o,l++),s+=_o(o,n,t,u,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function Qi(e,n,t){if(e==null)return e;var r=[],i=0;return _o(e,r,"","",function(o){return n.call(t,o,i++)}),r}function ty(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},No={transition:null},ry={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:No,ReactCurrentOwner:Yu};function bd(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:Qi,forEach:function(e,n,t){Qi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return Qi(e,function(){n++}),n},toArray:function(e){return Qi(e,function(n){return n})||[]},only:function(e){if(!Xu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Ir;te.Fragment=Um;te.Profiler=Ym;te.PureComponent=Uu;te.StrictMode=Wm;te.Suspense=Km;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;te.act=bd;te.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dd({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Yu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in n)Hd.call(n,u)&&!Bd.hasOwnProperty(u)&&(r[u]=n[u]===void 0&&l!==void 0?l[u]:n[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){l=Array(u);for(var a=0;a<u;a++)l[a]=arguments[a+2];r.children=l}return{$$typeof:Ri,type:e.type,key:i,ref:o,props:r,_owner:s}};te.createContext=function(e){return e={$$typeof:Qm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Xm,_context:e},e.Consumer=e};te.createElement=Vd;te.createFactory=function(e){var n=Vd.bind(null,e);return n.type=e,n};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:Gm,render:e}};te.isValidElement=Xu;te.lazy=function(e){return{$$typeof:qm,_payload:{_status:-1,_result:e},_init:ty}};te.memo=function(e,n){return{$$typeof:Zm,type:e,compare:n===void 0?null:n}};te.startTransition=function(e){var n=No.transition;No.transition={};try{e()}finally{No.transition=n}};te.unstable_act=bd;te.useCallback=function(e,n){return De.current.useCallback(e,n)};te.useContext=function(e){return De.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return De.current.useDeferredValue(e)};te.useEffect=function(e,n){return De.current.useEffect(e,n)};te.useId=function(){return De.current.useId()};te.useImperativeHandle=function(e,n,t){return De.current.useImperativeHandle(e,n,t)};te.useInsertionEffect=function(e,n){return De.current.useInsertionEffect(e,n)};te.useLayoutEffect=function(e,n){return De.current.useLayoutEffect(e,n)};te.useMemo=function(e,n){return De.current.useMemo(e,n)};te.useReducer=function(e,n,t){return De.current.useReducer(e,n,t)};te.useRef=function(e){return De.current.useRef(e)};te.useState=function(e){return De.current.useState(e)};te.useSyncExternalStore=function(e,n,t){return De.current.useSyncExternalStore(e,n,t)};te.useTransition=function(){return De.current.useTransition()};te.version="18.3.1";Rd.exports=te;var O=Rd.exports;const Ud=zd(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy=O,oy=Symbol.for("react.element"),sy=Symbol.for("react.fragment"),ly=Object.prototype.hasOwnProperty,uy=iy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ay={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)ly.call(n,r)&&!ay.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:oy,type:e,key:o,ref:s,props:i,_owner:uy.current}}ws.Fragment=sy;ws.jsx=Wd;ws.jsxs=Wd;Od.exports=ws;var _=Od.exports,$l={},Yd={exports:{}},Ze={},Xd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(k,C){var T=k.length;k.push(C);e:for(;0<T;){var F=T-1>>>1,D=k[F];if(0<i(D,C))k[F]=C,k[T]=D,T=F;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var C=k[0],T=k.pop();if(T!==C){k[0]=T;e:for(var F=0,D=k.length,U=D>>>1;F<U;){var W=2*(F+1)-1,K=k[W],Q=W+1,Z=k[Q];if(0>i(K,T))Q<D&&0>i(Z,K)?(k[F]=Z,k[Q]=T,F=Q):(k[F]=K,k[W]=T,F=W);else if(Q<D&&0>i(Z,T))k[F]=Z,k[Q]=T,F=Q;else break e}}return C}function i(k,C){var T=k.sortIndex-C.sortIndex;return T!==0?T:k.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],a=[],d=1,c=null,f=3,m=!1,y=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(k){for(var C=t(a);C!==null;){if(C.callback===null)r(a);else if(C.startTime<=k)r(a),C.sortIndex=C.expirationTime,n(u,C);else break;C=t(a)}}function x(k){if(v=!1,h(k),!y)if(t(u)!==null)y=!0,I(N);else{var C=t(a);C!==null&&R(x,C.startTime-k)}}function N(k,C){y=!1,v&&(v=!1,p(L),L=-1),m=!0;var T=f;try{for(h(C),c=t(u);c!==null&&(!(c.expirationTime>C)||k&&!M());){var F=c.callback;if(typeof F=="function"){c.callback=null,f=c.priorityLevel;var D=F(c.expirationTime<=C);C=e.unstable_now(),typeof D=="function"?c.callback=D:c===t(u)&&r(u),h(C)}else r(u);c=t(u)}if(c!==null)var U=!0;else{var W=t(a);W!==null&&R(x,W.startTime-C),U=!1}return U}finally{c=null,f=T,m=!1}}var S=!1,A=null,L=-1,P=5,j=-1;function M(){return!(e.unstable_now()-j<P)}function $(){if(A!==null){var k=e.unstable_now();j=k;var C=!0;try{C=A(!0,k)}finally{C?H():(S=!1,A=null)}}else S=!1}var H;if(typeof g=="function")H=function(){g($)};else if(typeof MessageChannel<"u"){var E=new MessageChannel,z=E.port2;E.port1.onmessage=$,H=function(){z.postMessage(null)}}else H=function(){w($,0)};function I(k){A=k,S||(S=!0,H())}function R(k,C){L=w(function(){k(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,I(N))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(u)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var C=3;break;default:C=f}var T=f;f=C;try{return k()}finally{f=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,C){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var T=f;f=k;try{return C()}finally{f=T}},e.unstable_scheduleCallback=function(k,C,T){var F=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?F+T:F):T=F,k){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=T+D,k={id:d++,callback:C,priorityLevel:k,startTime:T,expirationTime:D,sortIndex:-1},T>F?(k.sortIndex=T,n(a,k),t(u)===null&&k===t(a)&&(v?(p(L),L=-1):v=!0,R(x,T-F))):(k.sortIndex=D,n(u,k),y||m||(y=!0,I(N))),k},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(k){var C=f;return function(){var T=f;f=C;try{return k.apply(this,arguments)}finally{f=T}}}})(Qd);Xd.exports=Qd;var cy=Xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy=O,Ge=cy;function B(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,ui={};function Ft(e,n){hr(e,n),hr(e+"Capture",n)}function hr(e,n){for(ui[e]=n,e=0;e<n.length;e++)Gd.add(n[e])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,dy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gc={},mc={};function hy(e){return Dl.call(mc,e)?!0:Dl.call(gc,e)?!1:dy.test(e)?mc[e]=!0:(gc[e]=!0,!1)}function py(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gy(e,n,t,r){if(n===null||typeof n>"u"||py(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Le[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Le[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Le[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Le[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Le[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Le[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Le[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Le[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Le[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qu=/[\-:]([a-z])/g;function Gu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Qu,Gu);Le[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Qu,Gu);Le[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Qu,Gu);Le[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Le[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Le.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Le[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ku(e,n,t,r){var i=Le.hasOwnProperty(n)?Le[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(gy(n,t,i,r)&&(t=null),r||i===null?hy(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Bn=fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Wt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),Zu=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Zd=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),Hl=Symbol.for("react.suspense_list"),Ju=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),qd=Symbol.for("react.offscreen"),yc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Js;function Wr(e){if(Js===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Js=n&&n[1]||""}return`
`+Js+e}var el=!1;function nl(e,n){if(!e||el)return"";el=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var i=a.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{el=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Wr(e):""}function my(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=nl(e.type,!1),e;case 11:return e=nl(e.type.render,!1),e;case 1:return e=nl(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Wt:return"Portal";case jl:return"Profiler";case Zu:return"StrictMode";case Fl:return"Suspense";case Hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zd:return(e.displayName||"Context")+".Consumer";case Kd:return(e._context.displayName||"Context")+".Provider";case qu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ju:return n=e.displayName||null,n!==null?n:Bl(e.type)||"Memo";case Xn:n=e._payload,e=e._init;try{return Bl(e(n))}catch{}}return null}function yy(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(n);case 8:return n===Zu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vy(e){var n=Jd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ki(e){e._valueTracker||(e._valueTracker=vy(e))}function eh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Jd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,n){var t=n.checked;return me({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function vc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ct(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function nh(e,n){n=n.checked,n!=null&&Ku(e,"checked",n,!1)}function bl(e,n){nh(e,n);var t=ct(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Ul(e,n.type,t):n.hasOwnProperty("defaultValue")&&Ul(e,n.type,ct(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function xc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Ul(e,n,t){(n!=="number"||jo(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Yr=Array.isArray;function or(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ct(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Wl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(B(91));return me({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(B(92));if(Yr(t)){if(1<t.length)throw Error(B(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ct(t)}}function th(e,n){var t=ct(n.value),r=ct(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function _c(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function rh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?rh(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,ih=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ai(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xy=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){xy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Zr[n]=Zr[e]})});function oh(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+n).trim():n+"px"}function sh(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=oh(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var wy=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,n){if(n){if(wy[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(B(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(B(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(B(61))}if(n.style!=null&&typeof n.style!="object")throw Error(B(62))}}function Ql(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gl=null;function ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,sr=null,lr=null;function Nc(e){if(e=ji(e)){if(typeof Kl!="function")throw Error(B(280));var n=e.stateNode;n&&(n=ks(n),Kl(e.stateNode,e.type,n))}}function lh(e){sr?lr?lr.push(e):lr=[e]:sr=e}function uh(){if(sr){var e=sr,n=lr;if(lr=sr=null,Nc(e),n)for(e=0;e<n.length;e++)Nc(n[e])}}function ah(e,n){return e(n)}function ch(){}var tl=!1;function fh(e,n,t){if(tl)return e(n,t);tl=!0;try{return ah(e,n,t)}finally{tl=!1,(sr!==null||lr!==null)&&(ch(),uh())}}function ci(e,n){var t=e.stateNode;if(t===null)return null;var r=ks(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(B(231,n,typeof t));return t}var Zl=!1;if($n)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Zl=!1}function _y(e,n,t,r,i,o,s,l,u){var a=Array.prototype.slice.call(arguments,3);try{n.apply(t,a)}catch(d){this.onError(d)}}var qr=!1,Fo=null,Ho=!1,ql=null,Ny={onError:function(e){qr=!0,Fo=e}};function Sy(e,n,t,r,i,o,s,l,u){qr=!1,Fo=null,_y.apply(Ny,arguments)}function Ey(e,n,t,r,i,o,s,l,u){if(Sy.apply(this,arguments),qr){if(qr){var a=Fo;qr=!1,Fo=null}else throw Error(B(198));Ho||(Ho=!0,ql=a)}}function Ht(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function dh(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Sc(e){if(Ht(e)!==e)throw Error(B(188))}function ky(e){var n=e.alternate;if(!n){if(n=Ht(e),n===null)throw Error(B(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return Sc(i),e;if(o===r)return Sc(i),n;o=o.sibling}throw Error(B(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,r=o;break}if(l===r){s=!0,r=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,r=i;break}if(l===r){s=!0,r=o,t=i;break}l=l.sibling}if(!s)throw Error(B(189))}}if(t.alternate!==r)throw Error(B(190))}if(t.tag!==3)throw Error(B(188));return t.stateNode.current===t?e:n}function hh(e){return e=ky(e),e!==null?ph(e):null}function ph(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ph(e);if(n!==null)return n;e=e.sibling}return null}var gh=Ge.unstable_scheduleCallback,Ec=Ge.unstable_cancelCallback,Cy=Ge.unstable_shouldYield,Ay=Ge.unstable_requestPaint,ve=Ge.unstable_now,Iy=Ge.unstable_getCurrentPriorityLevel,na=Ge.unstable_ImmediatePriority,mh=Ge.unstable_UserBlockingPriority,Bo=Ge.unstable_NormalPriority,Ly=Ge.unstable_LowPriority,yh=Ge.unstable_IdlePriority,_s=null,Sn=null;function My(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(_s,e,void 0,(e.current.flags&128)===128)}catch{}}var gn=Math.clz32?Math.clz32:zy,Py=Math.log,Ty=Math.LN2;function zy(e){return e>>>=0,e===0?32:31-(Py(e)/Ty|0)|0}var qi=64,Ji=4194304;function Xr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vo(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?r=Xr(l):(o&=s,o!==0&&(r=Xr(o)))}else s=t&~i,s!==0?r=Xr(s):o!==0&&(r=Xr(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-gn(n),i=1<<t,r|=e[t],n&=~i;return r}function Oy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ry(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-gn(o),l=1<<s,u=i[s];u===-1?(!(l&t)||l&r)&&(i[s]=Oy(l,n)):u<=n&&(e.expiredLanes|=l),o&=~l}}function Jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vh(){var e=qi;return qi<<=1,!(qi&4194240)&&(qi=64),e}function rl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function $i(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-gn(n),e[n]=t}function $y(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-gn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function ta(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-gn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var se=0;function xh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wh,ra,_h,Nh,Sh,eu=!1,eo=[],nt=null,tt=null,rt=null,fi=new Map,di=new Map,Gn=[],Dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kc(e,n){switch(e){case"focusin":case"focusout":nt=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":rt=null;break;case"pointerover":case"pointerout":fi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(n.pointerId)}}function Dr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ji(n),n!==null&&ra(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function jy(e,n,t,r,i){switch(n){case"focusin":return nt=Dr(nt,e,n,t,r,i),!0;case"dragenter":return tt=Dr(tt,e,n,t,r,i),!0;case"mouseover":return rt=Dr(rt,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return fi.set(o,Dr(fi.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,di.set(o,Dr(di.get(o)||null,e,n,t,r,i)),!0}return!1}function Eh(e){var n=Nt(e.target);if(n!==null){var t=Ht(n);if(t!==null){if(n=t.tag,n===13){if(n=dh(t),n!==null){e.blockedOn=n,Sh(e.priority,function(){_h(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=nu(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Gl=r,t.target.dispatchEvent(r),Gl=null}else return n=ji(t),n!==null&&ra(n),e.blockedOn=t,!1;n.shift()}return!0}function Cc(e,n,t){So(e)&&t.delete(n)}function Fy(){eu=!1,nt!==null&&So(nt)&&(nt=null),tt!==null&&So(tt)&&(tt=null),rt!==null&&So(rt)&&(rt=null),fi.forEach(Cc),di.forEach(Cc)}function jr(e,n){e.blockedOn===n&&(e.blockedOn=null,eu||(eu=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Fy)))}function hi(e){function n(i){return jr(i,e)}if(0<eo.length){jr(eo[0],e);for(var t=1;t<eo.length;t++){var r=eo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(nt!==null&&jr(nt,e),tt!==null&&jr(tt,e),rt!==null&&jr(rt,e),fi.forEach(n),di.forEach(n),t=0;t<Gn.length;t++)r=Gn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gn.length&&(t=Gn[0],t.blockedOn===null);)Eh(t),t.blockedOn===null&&Gn.shift()}var ur=Bn.ReactCurrentBatchConfig,bo=!0;function Hy(e,n,t,r){var i=se,o=ur.transition;ur.transition=null;try{se=1,ia(e,n,t,r)}finally{se=i,ur.transition=o}}function By(e,n,t,r){var i=se,o=ur.transition;ur.transition=null;try{se=4,ia(e,n,t,r)}finally{se=i,ur.transition=o}}function ia(e,n,t,r){if(bo){var i=nu(e,n,t,r);if(i===null)hl(e,n,r,Uo,t),kc(e,r);else if(jy(i,e,n,t,r))r.stopPropagation();else if(kc(e,r),n&4&&-1<Dy.indexOf(e)){for(;i!==null;){var o=ji(i);if(o!==null&&wh(o),o=nu(e,n,t,r),o===null&&hl(e,n,r,Uo,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else hl(e,n,r,null,t)}}var Uo=null;function nu(e,n,t,r){if(Uo=null,e=ea(r),e=Nt(e),e!==null)if(n=Ht(e),n===null)e=null;else if(t=n.tag,t===13){if(e=dh(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Uo=e,null}function kh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iy()){case na:return 1;case mh:return 4;case Bo:case Ly:return 16;case yh:return 536870912;default:return 16}default:return 16}}var qn=null,oa=null,Eo=null;function Ch(){if(Eo)return Eo;var e,n=oa,t=n.length,r,i="value"in qn?qn.value:qn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Eo=i.slice(e,1<r?1-r:void 0)}function ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function no(){return!0}function Ac(){return!1}function qe(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?no:Ac,this.isPropagationStopped=Ac,this}return me(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),n}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sa=qe(Lr),Di=me({},Lr,{view:0,detail:0}),Vy=qe(Di),il,ol,Fr,Ns=me({},Di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:la,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fr&&(Fr&&e.type==="mousemove"?(il=e.screenX-Fr.screenX,ol=e.screenY-Fr.screenY):ol=il=0,Fr=e),il)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),Ic=qe(Ns),by=me({},Ns,{dataTransfer:0}),Uy=qe(by),Wy=me({},Di,{relatedTarget:0}),sl=qe(Wy),Yy=me({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=qe(Yy),Qy=me({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gy=qe(Qy),Ky=me({},Lr,{data:0}),Lc=qe(Ky),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Jy[e])?!!n[e]:!1}function la(){return ev}var nv=me({},Di,{key:function(e){if(e.key){var n=Zy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:la,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tv=qe(nv),rv=me({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mc=qe(rv),iv=me({},Di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:la}),ov=qe(iv),sv=me({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=qe(sv),uv=me({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=qe(uv),cv=[9,13,27,32],ua=$n&&"CompositionEvent"in window,Jr=null;$n&&"documentMode"in document&&(Jr=document.documentMode);var fv=$n&&"TextEvent"in window&&!Jr,Ah=$n&&(!ua||Jr&&8<Jr&&11>=Jr),Pc=" ",Tc=!1;function Ih(e,n){switch(e){case"keyup":return cv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xt=!1;function dv(e,n){switch(e){case"compositionend":return Lh(n);case"keypress":return n.which!==32?null:(Tc=!0,Pc);case"textInput":return e=n.data,e===Pc&&Tc?null:e;default:return null}}function hv(e,n){if(Xt)return e==="compositionend"||!ua&&Ih(e,n)?(e=Ch(),Eo=oa=qn=null,Xt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ah&&n.locale!=="ko"?null:n.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pv[e.type]:n==="textarea"}function Mh(e,n,t,r){lh(r),n=Wo(n,"onChange"),0<n.length&&(t=new sa("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ei=null,pi=null;function gv(e){Bh(e,0)}function Ss(e){var n=Kt(e);if(eh(n))return e}function mv(e,n){if(e==="change")return n}var Ph=!1;if($n){var ll;if($n){var ul="oninput"in document;if(!ul){var Oc=document.createElement("div");Oc.setAttribute("oninput","return;"),ul=typeof Oc.oninput=="function"}ll=ul}else ll=!1;Ph=ll&&(!document.documentMode||9<document.documentMode)}function Rc(){ei&&(ei.detachEvent("onpropertychange",Th),pi=ei=null)}function Th(e){if(e.propertyName==="value"&&Ss(pi)){var n=[];Mh(n,pi,e,ea(e)),fh(gv,n)}}function yv(e,n,t){e==="focusin"?(Rc(),ei=n,pi=t,ei.attachEvent("onpropertychange",Th)):e==="focusout"&&Rc()}function vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(pi)}function xv(e,n){if(e==="click")return Ss(n)}function wv(e,n){if(e==="input"||e==="change")return Ss(n)}function _v(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var yn=typeof Object.is=="function"?Object.is:_v;function gi(e,n){if(yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Dl.call(n,i)||!yn(e[i],n[i]))return!1}return!0}function $c(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dc(e,n){var t=$c(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$c(t)}}function zh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Oh(){for(var e=window,n=jo();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=jo(e.document)}return n}function aa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nv(e){var n=Oh(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&zh(t.ownerDocument.documentElement,t)){if(r!==null&&aa(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Dc(t,o);var s=Dc(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sv=$n&&"documentMode"in document&&11>=document.documentMode,Qt=null,tu=null,ni=null,ru=!1;function jc(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ru||Qt==null||Qt!==jo(r)||(r=Qt,"selectionStart"in r&&aa(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ni&&gi(ni,r)||(ni=r,r=Wo(tu,"onSelect"),0<r.length&&(n=new sa("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Qt)))}function to(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Gt={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},al={},Rh={};$n&&(Rh=document.createElement("div").style,"AnimationEvent"in window||(delete Gt.animationend.animation,delete Gt.animationiteration.animation,delete Gt.animationstart.animation),"TransitionEvent"in window||delete Gt.transitionend.transition);function Es(e){if(al[e])return al[e];if(!Gt[e])return e;var n=Gt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Rh)return al[e]=n[t];return e}var $h=Es("animationend"),Dh=Es("animationiteration"),jh=Es("animationstart"),Fh=Es("transitionend"),Hh=new Map,Fc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dt(e,n){Hh.set(e,n),Ft(n,[e])}for(var cl=0;cl<Fc.length;cl++){var fl=Fc[cl],Ev=fl.toLowerCase(),kv=fl[0].toUpperCase()+fl.slice(1);dt(Ev,"on"+kv)}dt($h,"onAnimationEnd");dt(Dh,"onAnimationIteration");dt(jh,"onAnimationStart");dt("dblclick","onDoubleClick");dt("focusin","onFocus");dt("focusout","onBlur");dt(Fh,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Hc(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ey(r,n,void 0,e),e.currentTarget=null}function Bh(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var l=r[s],u=l.instance,a=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Hc(i,l,a),o=u}else for(s=0;s<r.length;s++){if(l=r[s],u=l.instance,a=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Hc(i,l,a),o=u}}}if(Ho)throw e=ql,Ho=!1,ql=null,e}function ae(e,n){var t=n[uu];t===void 0&&(t=n[uu]=new Set);var r=e+"__bubble";t.has(r)||(Vh(n,e,2,!1),t.add(r))}function dl(e,n,t){var r=0;n&&(r|=4),Vh(t,e,r,n)}var ro="_reactListening"+Math.random().toString(36).slice(2);function mi(e){if(!e[ro]){e[ro]=!0,Gd.forEach(function(t){t!=="selectionchange"&&(Cv.has(t)||dl(t,!1,e),dl(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ro]||(n[ro]=!0,dl("selectionchange",!1,n))}}function Vh(e,n,t,r){switch(kh(n)){case 1:var i=Hy;break;case 4:i=By;break;default:i=ia}t=i.bind(null,n,t,e),i=void 0,!Zl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function hl(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Nt(l),s===null)return;if(u=s.tag,u===5||u===6){r=o=s;continue e}l=l.parentNode}}r=r.return}fh(function(){var a=o,d=ea(t),c=[];e:{var f=Hh.get(e);if(f!==void 0){var m=sa,y=e;switch(e){case"keypress":if(ko(t)===0)break e;case"keydown":case"keyup":m=tv;break;case"focusin":y="focus",m=sl;break;case"focusout":y="blur",m=sl;break;case"beforeblur":case"afterblur":m=sl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ov;break;case $h:case Dh:case jh:m=Xy;break;case Fh:m=lv;break;case"scroll":m=Vy;break;case"wheel":m=av;break;case"copy":case"cut":case"paste":m=Gy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mc}var v=(n&4)!==0,w=!v&&e==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var g=a,h;g!==null;){h=g;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,p!==null&&(x=ci(g,p),x!=null&&v.push(yi(g,x,h)))),w)break;g=g.return}0<v.length&&(f=new m(f,y,null,t,d),c.push({event:f,listeners:v}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&t!==Gl&&(y=t.relatedTarget||t.fromElement)&&(Nt(y)||y[Dn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=t.relatedTarget||t.toElement,m=a,y=y?Nt(y):null,y!==null&&(w=Ht(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=a),m!==y)){if(v=Ic,x="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Mc,x="onPointerLeave",p="onPointerEnter",g="pointer"),w=m==null?f:Kt(m),h=y==null?f:Kt(y),f=new v(x,g+"leave",m,t,d),f.target=w,f.relatedTarget=h,x=null,Nt(d)===a&&(v=new v(p,g+"enter",y,t,d),v.target=h,v.relatedTarget=w,x=v),w=x,m&&y)n:{for(v=m,p=y,g=0,h=v;h;h=Vt(h))g++;for(h=0,x=p;x;x=Vt(x))h++;for(;0<g-h;)v=Vt(v),g--;for(;0<h-g;)p=Vt(p),h--;for(;g--;){if(v===p||p!==null&&v===p.alternate)break n;v=Vt(v),p=Vt(p)}v=null}else v=null;m!==null&&Bc(c,f,m,v,!1),y!==null&&w!==null&&Bc(c,w,y,v,!0)}}e:{if(f=a?Kt(a):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=mv;else if(zc(f))if(Ph)N=wv;else{N=vv;var S=yv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=xv);if(N&&(N=N(e,a))){Mh(c,N,t,d);break e}S&&S(e,f,a),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Ul(f,"number",f.value)}switch(S=a?Kt(a):window,e){case"focusin":(zc(S)||S.contentEditable==="true")&&(Qt=S,tu=a,ni=null);break;case"focusout":ni=tu=Qt=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,jc(c,t,d);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":jc(c,t,d)}var A;if(ua)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Xt?Ih(e,t)&&(L="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(L="onCompositionStart");L&&(Ah&&t.locale!=="ko"&&(Xt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Xt&&(A=Ch()):(qn=d,oa="value"in qn?qn.value:qn.textContent,Xt=!0)),S=Wo(a,L),0<S.length&&(L=new Lc(L,e,null,t,d),c.push({event:L,listeners:S}),A?L.data=A:(A=Lh(t),A!==null&&(L.data=A)))),(A=fv?dv(e,t):hv(e,t))&&(a=Wo(a,"onBeforeInput"),0<a.length&&(d=new Lc("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:a}),d.data=A))}Bh(c,n)})}function yi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Wo(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ci(e,t),o!=null&&r.unshift(yi(e,o,i)),o=ci(e,n),o!=null&&r.push(yi(e,o,i))),e=e.return}return r}function Vt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bc(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var l=t,u=l.alternate,a=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&a!==null&&(l=a,i?(u=ci(t,o),u!=null&&s.unshift(yi(t,u,l))):i||(u=ci(t,o),u!=null&&s.push(yi(t,u,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Av=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function Vc(e){return(typeof e=="string"?e:""+e).replace(Av,`
`).replace(Iv,"")}function io(e,n,t){if(n=Vc(n),Vc(e)!==n&&t)throw Error(B(425))}function Yo(){}var iu=null,ou=null;function su(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var lu=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,bc=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof bc<"u"?function(e){return bc.resolve(null).then(e).catch(Pv)}:lu;function Pv(e){setTimeout(function(){throw e})}function pl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),hi(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);hi(n)}function it(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Uc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Mr,vi="__reactProps$"+Mr,Dn="__reactContainer$"+Mr,uu="__reactEvents$"+Mr,Tv="__reactListeners$"+Mr,zv="__reactHandles$"+Mr;function Nt(e){var n=e[Nn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Dn]||t[Nn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Uc(e);e!==null;){if(t=e[Nn])return t;e=Uc(e)}return n}e=t,t=e.parentNode}return null}function ji(e){return e=e[Nn]||e[Dn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(B(33))}function ks(e){return e[vi]||null}var au=[],Zt=-1;function ht(e){return{current:e}}function ce(e){0>Zt||(e.current=au[Zt],au[Zt]=null,Zt--)}function le(e,n){Zt++,au[Zt]=e.current,e.current=n}var ft={},Oe=ht(ft),Ve=ht(!1),Mt=ft;function pr(e,n){var t=e.type.contextTypes;if(!t)return ft;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function be(e){return e=e.childContextTypes,e!=null}function Xo(){ce(Ve),ce(Oe)}function Wc(e,n,t){if(Oe.current!==ft)throw Error(B(168));le(Oe,n),le(Ve,t)}function bh(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(B(108,yy(e)||"Unknown",i));return me({},t,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ft,Mt=Oe.current,le(Oe,e),le(Ve,Ve.current),!0}function Yc(e,n,t){var r=e.stateNode;if(!r)throw Error(B(169));t?(e=bh(e,n,Mt),r.__reactInternalMemoizedMergedChildContext=e,ce(Ve),ce(Oe),le(Oe,e)):ce(Ve),le(Ve,t)}var Pn=null,Cs=!1,gl=!1;function Uh(e){Pn===null?Pn=[e]:Pn.push(e)}function Ov(e){Cs=!0,Uh(e)}function pt(){if(!gl&&Pn!==null){gl=!0;var e=0,n=se;try{var t=Pn;for(se=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Pn=null,Cs=!1}catch(i){throw Pn!==null&&(Pn=Pn.slice(e+1)),gh(na,pt),i}finally{se=n,gl=!1}}return null}var qt=[],Jt=0,Go=null,Ko=0,Je=[],en=0,Pt=null,Tn=1,zn="";function vt(e,n){qt[Jt++]=Ko,qt[Jt++]=Go,Go=e,Ko=n}function Wh(e,n,t){Je[en++]=Tn,Je[en++]=zn,Je[en++]=Pt,Pt=e;var r=Tn;e=zn;var i=32-gn(r)-1;r&=~(1<<i),t+=1;var o=32-gn(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Tn=1<<32-gn(n)+i|t<<i|r,zn=o+e}else Tn=1<<o|t<<i|r,zn=e}function ca(e){e.return!==null&&(vt(e,1),Wh(e,1,0))}function fa(e){for(;e===Go;)Go=qt[--Jt],qt[Jt]=null,Ko=qt[--Jt],qt[Jt]=null;for(;e===Pt;)Pt=Je[--en],Je[en]=null,zn=Je[--en],Je[en]=null,Tn=Je[--en],Je[en]=null}var Qe=null,Xe=null,fe=!1,fn=null;function Yh(e,n){var t=nn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Xc(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Qe=e,Xe=it(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Qe=e,Xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Pt!==null?{id:Tn,overflow:zn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=nn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Qe=e,Xe=null,!0):!1;default:return!1}}function cu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fu(e){if(fe){var n=Xe;if(n){var t=n;if(!Xc(e,n)){if(cu(e))throw Error(B(418));n=it(t.nextSibling);var r=Qe;n&&Xc(e,n)?Yh(r,t):(e.flags=e.flags&-4097|2,fe=!1,Qe=e)}}else{if(cu(e))throw Error(B(418));e.flags=e.flags&-4097|2,fe=!1,Qe=e}}}function Qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function oo(e){if(e!==Qe)return!1;if(!fe)return Qc(e),fe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!su(e.type,e.memoizedProps)),n&&(n=Xe)){if(cu(e))throw Xh(),Error(B(418));for(;n;)Yh(e,n),n=it(n.nextSibling)}if(Qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(B(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Xe=it(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Xe=null}}else Xe=Qe?it(e.stateNode.nextSibling):null;return!0}function Xh(){for(var e=Xe;e;)e=it(e.nextSibling)}function gr(){Xe=Qe=null,fe=!1}function da(e){fn===null?fn=[e]:fn.push(e)}var Rv=Bn.ReactCurrentBatchConfig;function Hr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(B(309));var r=t.stateNode}if(!r)throw Error(B(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(B(284));if(!t._owner)throw Error(B(290,e))}return e}function so(e,n){throw e=Object.prototype.toString.call(n),Error(B(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Gc(e){var n=e._init;return n(e._payload)}function Qh(e){function n(p,g){if(e){var h=p.deletions;h===null?(p.deletions=[g],p.flags|=16):h.push(g)}}function t(p,g){if(!e)return null;for(;g!==null;)n(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=ut(p,g),p.index=0,p.sibling=null,p}function o(p,g,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<g?(p.flags|=2,g):h):(p.flags|=2,g)):(p.flags|=1048576,g)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,h,x){return g===null||g.tag!==6?(g=Nl(h,p.mode,x),g.return=p,g):(g=i(g,h),g.return=p,g)}function u(p,g,h,x){var N=h.type;return N===Yt?d(p,g,h.props.children,x,h.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Xn&&Gc(N)===g.type)?(x=i(g,h.props),x.ref=Hr(p,g,h),x.return=p,x):(x=To(h.type,h.key,h.props,null,p.mode,x),x.ref=Hr(p,g,h),x.return=p,x)}function a(p,g,h,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=Sl(h,p.mode,x),g.return=p,g):(g=i(g,h.children||[]),g.return=p,g)}function d(p,g,h,x,N){return g===null||g.tag!==7?(g=At(h,p.mode,x,N),g.return=p,g):(g=i(g,h),g.return=p,g)}function c(p,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Nl(""+g,p.mode,h),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gi:return h=To(g.type,g.key,g.props,null,p.mode,h),h.ref=Hr(p,null,g),h.return=p,h;case Wt:return g=Sl(g,p.mode,h),g.return=p,g;case Xn:var x=g._init;return c(p,x(g._payload),h)}if(Yr(g)||Rr(g))return g=At(g,p.mode,h,null),g.return=p,g;so(p,g)}return null}function f(p,g,h,x){var N=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:l(p,g,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Gi:return h.key===N?u(p,g,h,x):null;case Wt:return h.key===N?a(p,g,h,x):null;case Xn:return N=h._init,f(p,g,N(h._payload),x)}if(Yr(h)||Rr(h))return N!==null?null:d(p,g,h,x,null);so(p,h)}return null}function m(p,g,h,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(h)||null,l(g,p,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gi:return p=p.get(x.key===null?h:x.key)||null,u(g,p,x,N);case Wt:return p=p.get(x.key===null?h:x.key)||null,a(g,p,x,N);case Xn:var S=x._init;return m(p,g,h,S(x._payload),N)}if(Yr(x)||Rr(x))return p=p.get(h)||null,d(g,p,x,N,null);so(g,x)}return null}function y(p,g,h,x){for(var N=null,S=null,A=g,L=g=0,P=null;A!==null&&L<h.length;L++){A.index>L?(P=A,A=null):P=A.sibling;var j=f(p,A,h[L],x);if(j===null){A===null&&(A=P);break}e&&A&&j.alternate===null&&n(p,A),g=o(j,g,L),S===null?N=j:S.sibling=j,S=j,A=P}if(L===h.length)return t(p,A),fe&&vt(p,L),N;if(A===null){for(;L<h.length;L++)A=c(p,h[L],x),A!==null&&(g=o(A,g,L),S===null?N=A:S.sibling=A,S=A);return fe&&vt(p,L),N}for(A=r(p,A);L<h.length;L++)P=m(A,p,L,h[L],x),P!==null&&(e&&P.alternate!==null&&A.delete(P.key===null?L:P.key),g=o(P,g,L),S===null?N=P:S.sibling=P,S=P);return e&&A.forEach(function(M){return n(p,M)}),fe&&vt(p,L),N}function v(p,g,h,x){var N=Rr(h);if(typeof N!="function")throw Error(B(150));if(h=N.call(h),h==null)throw Error(B(151));for(var S=N=null,A=g,L=g=0,P=null,j=h.next();A!==null&&!j.done;L++,j=h.next()){A.index>L?(P=A,A=null):P=A.sibling;var M=f(p,A,j.value,x);if(M===null){A===null&&(A=P);break}e&&A&&M.alternate===null&&n(p,A),g=o(M,g,L),S===null?N=M:S.sibling=M,S=M,A=P}if(j.done)return t(p,A),fe&&vt(p,L),N;if(A===null){for(;!j.done;L++,j=h.next())j=c(p,j.value,x),j!==null&&(g=o(j,g,L),S===null?N=j:S.sibling=j,S=j);return fe&&vt(p,L),N}for(A=r(p,A);!j.done;L++,j=h.next())j=m(A,p,L,j.value,x),j!==null&&(e&&j.alternate!==null&&A.delete(j.key===null?L:j.key),g=o(j,g,L),S===null?N=j:S.sibling=j,S=j);return e&&A.forEach(function($){return n(p,$)}),fe&&vt(p,L),N}function w(p,g,h,x){if(typeof h=="object"&&h!==null&&h.type===Yt&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Gi:e:{for(var N=h.key,S=g;S!==null;){if(S.key===N){if(N=h.type,N===Yt){if(S.tag===7){t(p,S.sibling),g=i(S,h.props.children),g.return=p,p=g;break e}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Xn&&Gc(N)===S.type){t(p,S.sibling),g=i(S,h.props),g.ref=Hr(p,S,h),g.return=p,p=g;break e}t(p,S);break}else n(p,S);S=S.sibling}h.type===Yt?(g=At(h.props.children,p.mode,x,h.key),g.return=p,p=g):(x=To(h.type,h.key,h.props,null,p.mode,x),x.ref=Hr(p,g,h),x.return=p,p=x)}return s(p);case Wt:e:{for(S=h.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){t(p,g.sibling),g=i(g,h.children||[]),g.return=p,p=g;break e}else{t(p,g);break}else n(p,g);g=g.sibling}g=Sl(h,p.mode,x),g.return=p,p=g}return s(p);case Xn:return S=h._init,w(p,g,S(h._payload),x)}if(Yr(h))return y(p,g,h,x);if(Rr(h))return v(p,g,h,x);so(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(t(p,g.sibling),g=i(g,h),g.return=p,p=g):(t(p,g),g=Nl(h,p.mode,x),g.return=p,p=g),s(p)):t(p,g)}return w}var mr=Qh(!0),Gh=Qh(!1),Zo=ht(null),qo=null,er=null,ha=null;function pa(){ha=er=qo=null}function ga(e){var n=Zo.current;ce(Zo),e._currentValue=n}function du(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function ar(e,n){qo=e,ha=er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(He=!0),e.firstContext=null)}function on(e){var n=e._currentValue;if(ha!==e)if(e={context:e,memoizedValue:n,next:null},er===null){if(qo===null)throw Error(B(308));er=e,qo.dependencies={lanes:0,firstContext:e}}else er=er.next=e;return n}var St=null;function ma(e){St===null?St=[e]:St.push(e)}function Kh(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,ma(n)):(t.next=i.next,i.next=t),n.interleaved=t,jn(e,r)}function jn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Qn=!1;function ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function ot(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ie&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,jn(e,t)}return i=r.interleaved,i===null?(n.next=n,ma(r)):(n.next=i.next,i.next=n),r.interleaved=n,jn(e,t)}function Co(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ta(e,t)}}function Kc(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Jo(e,n,t,r){var i=e.updateQueue;Qn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,a=u.next;u.next=null,s===null?o=a:s.next=a,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=a:l.next=a,d.lastBaseUpdate=u))}if(o!==null){var c=i.baseState;s=0,d=a=u=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(f=n,m=t,v.tag){case 1:if(y=v.payload,typeof y=="function"){c=y.call(m,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(m,c,f):y,f==null)break e;c=me({},c,f);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(a=d=m,u=c):d=d.next=m,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(u=c),i.baseState=u,i.firstBaseUpdate=a,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);zt|=s,e.lanes=s,e.memoizedState=c}}function Zc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var Fi={},En=ht(Fi),xi=ht(Fi),wi=ht(Fi);function Et(e){if(e===Fi)throw Error(B(174));return e}function va(e,n){switch(le(wi,n),le(xi,e),le(En,Fi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Yl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Yl(n,e)}ce(En),le(En,n)}function yr(){ce(En),ce(xi),ce(wi)}function qh(e){Et(wi.current);var n=Et(En.current),t=Yl(n,e.type);n!==t&&(le(xi,e),le(En,t))}function xa(e){xi.current===e&&(ce(En),ce(xi))}var pe=ht(0);function es(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ml=[];function wa(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Ao=Bn.ReactCurrentDispatcher,yl=Bn.ReactCurrentBatchConfig,Tt=0,ge=null,Se=null,ke=null,ns=!1,ti=!1,_i=0,$v=0;function Pe(){throw Error(B(321))}function _a(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!yn(e[t],n[t]))return!1;return!0}function Na(e,n,t,r,i,o){if(Tt=o,ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ao.current=e===null||e.memoizedState===null?Hv:Bv,e=t(r,i),ti){o=0;do{if(ti=!1,_i=0,25<=o)throw Error(B(301));o+=1,ke=Se=null,n.updateQueue=null,Ao.current=Vv,e=t(r,i)}while(ti)}if(Ao.current=ts,n=Se!==null&&Se.next!==null,Tt=0,ke=Se=ge=null,ns=!1,n)throw Error(B(300));return e}function Sa(){var e=_i!==0;return _i=0,e}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ge.memoizedState=ke=e:ke=ke.next=e,ke}function sn(){if(Se===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var n=ke===null?ge.memoizedState:ke.next;if(n!==null)ke=n,Se=e;else{if(e===null)throw Error(B(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ke===null?ge.memoizedState=ke=e:ke=ke.next=e}return ke}function Ni(e,n){return typeof n=="function"?n(e):n}function vl(e){var n=sn(),t=n.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=e;var r=Se,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,u=null,a=o;do{var d=a.lane;if((Tt&d)===d)u!==null&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var c={lane:d,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};u===null?(l=u=c,s=r):u=u.next=c,ge.lanes|=d,zt|=d}a=a.next}while(a!==null&&a!==o);u===null?s=r:u.next=l,yn(r,n.memoizedState)||(He=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=u,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,zt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function xl(e){var n=sn(),t=n.queue;if(t===null)throw Error(B(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yn(o,n.memoizedState)||(He=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Jh(){}function ep(e,n){var t=ge,r=sn(),i=n(),o=!yn(r.memoizedState,i);if(o&&(r.memoizedState=i,He=!0),r=r.queue,Ea(rp.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||ke!==null&&ke.memoizedState.tag&1){if(t.flags|=2048,Si(9,tp.bind(null,t,r,i,n),void 0,null),Ce===null)throw Error(B(349));Tt&30||np(t,n,i)}return i}function np(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function tp(e,n,t,r){n.value=t,n.getSnapshot=r,ip(n)&&op(e)}function rp(e,n,t){return t(function(){ip(n)&&op(e)})}function ip(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!yn(e,t)}catch{return!0}}function op(e){var n=jn(e,1);n!==null&&mn(n,e,1,-1)}function qc(e){var n=wn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:e},n.queue=e,e=e.dispatch=Fv.bind(null,ge,e),[n.memoizedState,e]}function Si(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ge.updateQueue,n===null?(n={lastEffect:null,stores:null},ge.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function sp(){return sn().memoizedState}function Io(e,n,t,r){var i=wn();ge.flags|=e,i.memoizedState=Si(1|n,t,void 0,r===void 0?null:r)}function As(e,n,t,r){var i=sn();r=r===void 0?null:r;var o=void 0;if(Se!==null){var s=Se.memoizedState;if(o=s.destroy,r!==null&&_a(r,s.deps)){i.memoizedState=Si(n,t,o,r);return}}ge.flags|=e,i.memoizedState=Si(1|n,t,o,r)}function Jc(e,n){return Io(8390656,8,e,n)}function Ea(e,n){return As(2048,8,e,n)}function lp(e,n){return As(4,2,e,n)}function up(e,n){return As(4,4,e,n)}function ap(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cp(e,n,t){return t=t!=null?t.concat([e]):null,As(4,4,ap.bind(null,n,e),t)}function ka(){}function fp(e,n){var t=sn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&_a(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function dp(e,n){var t=sn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&_a(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function hp(e,n,t){return Tt&21?(yn(t,n)||(t=vh(),ge.lanes|=t,zt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=t)}function Dv(e,n){var t=se;se=t!==0&&4>t?t:4,e(!0);var r=yl.transition;yl.transition={};try{e(!1),n()}finally{se=t,yl.transition=r}}function pp(){return sn().memoizedState}function jv(e,n,t){var r=lt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},gp(e))mp(n,t);else if(t=Kh(e,n,t,r),t!==null){var i=$e();mn(t,e,r,i),yp(t,n,r)}}function Fv(e,n,t){var r=lt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(gp(e))mp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,yn(l,s)){var u=n.interleaved;u===null?(i.next=i,ma(n)):(i.next=u.next,u.next=i),n.interleaved=i;return}}catch{}finally{}t=Kh(e,n,i,r),t!==null&&(i=$e(),mn(t,e,r,i),yp(t,n,r))}}function gp(e){var n=e.alternate;return e===ge||n!==null&&n===ge}function mp(e,n){ti=ns=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function yp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ta(e,t)}}var ts={readContext:on,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Hv={readContext:on,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:on,useEffect:Jc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Io(4194308,4,ap.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Io(4194308,4,e,n)},useInsertionEffect:function(e,n){return Io(4,2,e,n)},useMemo:function(e,n){var t=wn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=wn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=jv.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:qc,useDebugValue:ka,useDeferredValue:function(e){return wn().memoizedState=e},useTransition:function(){var e=qc(!1),n=e[0];return e=Dv.bind(null,e[1]),wn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ge,i=wn();if(fe){if(t===void 0)throw Error(B(407));t=t()}else{if(t=n(),Ce===null)throw Error(B(349));Tt&30||np(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Jc(rp.bind(null,r,o,e),[e]),r.flags|=2048,Si(9,tp.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=wn(),n=Ce.identifierPrefix;if(fe){var t=zn,r=Tn;t=(r&~(1<<32-gn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=_i++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=$v++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Bv={readContext:on,useCallback:fp,useContext:on,useEffect:Ea,useImperativeHandle:cp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:dp,useReducer:vl,useRef:sp,useState:function(){return vl(Ni)},useDebugValue:ka,useDeferredValue:function(e){var n=sn();return hp(n,Se.memoizedState,e)},useTransition:function(){var e=vl(Ni)[0],n=sn().memoizedState;return[e,n]},useMutableSource:Jh,useSyncExternalStore:ep,useId:pp,unstable_isNewReconciler:!1},Vv={readContext:on,useCallback:fp,useContext:on,useEffect:Ea,useImperativeHandle:cp,useInsertionEffect:lp,useLayoutEffect:up,useMemo:dp,useReducer:xl,useRef:sp,useState:function(){return xl(Ni)},useDebugValue:ka,useDeferredValue:function(e){var n=sn();return Se===null?n.memoizedState=e:hp(n,Se.memoizedState,e)},useTransition:function(){var e=xl(Ni)[0],n=sn().memoizedState;return[e,n]},useMutableSource:Jh,useSyncExternalStore:ep,useId:pp,unstable_isNewReconciler:!1};function un(e,n){if(e&&e.defaultProps){n=me({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function hu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:me({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Is={isMounted:function(e){return(e=e._reactInternals)?Ht(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=$e(),i=lt(e),o=Rn(r,i);o.payload=n,t!=null&&(o.callback=t),n=ot(e,o,i),n!==null&&(mn(n,e,i,r),Co(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=$e(),i=lt(e),o=Rn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=ot(e,o,i),n!==null&&(mn(n,e,i,r),Co(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=$e(),r=lt(e),i=Rn(t,r);i.tag=2,n!=null&&(i.callback=n),n=ot(e,i,r),n!==null&&(mn(n,e,r,t),Co(n,e,r))}};function ef(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!gi(t,r)||!gi(i,o):!0}function vp(e,n,t){var r=!1,i=ft,o=n.contextType;return typeof o=="object"&&o!==null?o=on(o):(i=be(n)?Mt:Oe.current,r=n.contextTypes,o=(r=r!=null)?pr(e,i):ft),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Is,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function nf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Is.enqueueReplaceState(n,n.state,null)}function pu(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},ya(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=on(o):(o=be(n)?Mt:Oe.current,i.context=pr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(hu(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Is.enqueueReplaceState(i,i.state,null),Jo(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,n){try{var t="",r=n;do t+=my(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function wl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function gu(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var bv=typeof WeakMap=="function"?WeakMap:Map;function xp(e,n,t){t=Rn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){is||(is=!0,ku=r),gu(e,n)},t}function wp(e,n,t){t=Rn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){gu(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){gu(e,n),typeof r!="function"&&(st===null?st=new Set([this]):st.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function tf(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new bv;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=r1.bind(null,e,n,t),n.then(e,e))}function rf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function of(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Rn(-1,1),n.tag=2,ot(t,n,1))),t.lanes|=1),e)}var Uv=Bn.ReactCurrentOwner,He=!1;function Re(e,n,t,r){n.child=e===null?Gh(n,null,t,r):mr(n,e.child,t,r)}function sf(e,n,t,r,i){t=t.render;var o=n.ref;return ar(n,i),r=Na(e,n,t,r,o,i),t=Sa(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Fn(e,n,i)):(fe&&t&&ca(n),n.flags|=1,Re(e,n,r,i),n.child)}function lf(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!za(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,_p(e,n,o,r,i)):(e=To(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:gi,t(s,r)&&e.ref===n.ref)return Fn(e,n,i)}return n.flags|=1,e=ut(o,r),e.ref=n.ref,e.return=n,n.child=e}function _p(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(gi(o,r)&&e.ref===n.ref)if(He=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(He=!0);else return n.lanes=e.lanes,Fn(e,n,i)}return mu(e,n,t,r,i)}function Np(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(tr,We),We|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,le(tr,We),We|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,le(tr,We),We|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,le(tr,We),We|=r;return Re(e,n,i,t),n.child}function Sp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function mu(e,n,t,r,i){var o=be(t)?Mt:Oe.current;return o=pr(n,o),ar(n,i),t=Na(e,n,t,r,o,i),r=Sa(),e!==null&&!He?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Fn(e,n,i)):(fe&&r&&ca(n),n.flags|=1,Re(e,n,t,i),n.child)}function uf(e,n,t,r,i){if(be(t)){var o=!0;Qo(n)}else o=!1;if(ar(n,i),n.stateNode===null)Lo(e,n),vp(n,t,r),pu(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var u=s.context,a=t.contextType;typeof a=="object"&&a!==null?a=on(a):(a=be(t)?Mt:Oe.current,a=pr(n,a));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||u!==a)&&nf(n,s,r,a),Qn=!1;var f=n.memoizedState;s.state=f,Jo(n,r,s,i),u=n.memoizedState,l!==r||f!==u||Ve.current||Qn?(typeof d=="function"&&(hu(n,t,d,r),u=n.memoizedState),(l=Qn||ef(n,t,l,r,f,u,a))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=u),s.props=r,s.state=u,s.context=a,r=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Zh(e,n),l=n.memoizedProps,a=n.type===n.elementType?l:un(n.type,l),s.props=a,c=n.pendingProps,f=s.context,u=t.contextType,typeof u=="object"&&u!==null?u=on(u):(u=be(t)?Mt:Oe.current,u=pr(n,u));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==c||f!==u)&&nf(n,s,r,u),Qn=!1,f=n.memoizedState,s.state=f,Jo(n,r,s,i);var y=n.memoizedState;l!==c||f!==y||Ve.current||Qn?(typeof m=="function"&&(hu(n,t,m,r),y=n.memoizedState),(a=Qn||ef(n,t,a,r,f,y,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,u)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),s.props=r,s.state=y,s.context=u,r=a):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return yu(e,n,t,r,o,i)}function yu(e,n,t,r,i,o){Sp(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Yc(n,t,!1),Fn(e,n,o);r=n.stateNode,Uv.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=mr(n,e.child,null,o),n.child=mr(n,null,l,o)):Re(e,n,l,o),n.memoizedState=r.state,i&&Yc(n,t,!0),n.child}function Ep(e){var n=e.stateNode;n.pendingContext?Wc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Wc(e,n.context,!1),va(e,n.containerInfo)}function af(e,n,t,r,i){return gr(),da(i),n.flags|=256,Re(e,n,t,r),n.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function kp(e,n,t){var r=n.pendingProps,i=pe.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(pe,i&1),e===null)return fu(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ps(s,r,0,null),e=At(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=xu(t),n.memoizedState=vu,e):Ca(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Wv(e,n,s,r,l,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=u,n.deletions=null):(r=ut(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=ut(l,o):(o=At(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?xu(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=vu,r}return o=e.child,e=o.sibling,r=ut(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function Ca(e,n){return n=Ps({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function lo(e,n,t,r){return r!==null&&da(r),mr(n,e.child,null,t),e=Ca(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wv(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=wl(Error(B(422))),lo(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Ps({mode:"visible",children:r.children},i,0,null),o=At(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&mr(n,e.child,null,s),n.child.memoizedState=xu(s),n.memoizedState=vu,o);if(!(n.mode&1))return lo(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(B(419)),r=wl(o,r,void 0),lo(e,n,s,r)}if(l=(s&e.childLanes)!==0,He||l){if(r=Ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jn(e,i),mn(r,e,i,-1))}return Ta(),r=wl(Error(B(421))),lo(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=i1.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Xe=it(i.nextSibling),Qe=n,fe=!0,fn=null,e!==null&&(Je[en++]=Tn,Je[en++]=zn,Je[en++]=Pt,Tn=e.id,zn=e.overflow,Pt=n),n=Ca(n,r.children),n.flags|=4096,n)}function cf(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),du(e.return,n,t)}function _l(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function Cp(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Re(e,n,r.children,t),r=pe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,t,n);else if(e.tag===19)cf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(pe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&es(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),_l(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}_l(n,!0,t,null,o);break;case"together":_l(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Lo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Fn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),zt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(B(153));if(n.child!==null){for(e=n.child,t=ut(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=ut(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Yv(e,n,t){switch(n.tag){case 3:Ep(n),gr();break;case 5:qh(n);break;case 1:be(n.type)&&Qo(n);break;case 4:va(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;le(Zo,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(le(pe,pe.current&1),n.flags|=128,null):t&n.child.childLanes?kp(e,n,t):(le(pe,pe.current&1),e=Fn(e,n,t),e!==null?e.sibling:null);le(pe,pe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return Cp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(pe,pe.current),r)break;return null;case 22:case 23:return n.lanes=0,Np(e,n,t)}return Fn(e,n,t)}var Ap,wu,Ip,Lp;Ap=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};wu=function(){};Ip=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Et(En.current);var o=null;switch(t){case"input":i=Vl(e,i),r=Vl(e,r),o=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),o=[];break;case"textarea":i=Wl(e,i),r=Wl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yo)}Xl(t,r);var s;t=null;for(a in i)if(!r.hasOwnProperty(a)&&i.hasOwnProperty(a)&&i[a]!=null)if(a==="style"){var l=i[a];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ui.hasOwnProperty(a)?o||(o=[]):(o=o||[]).push(a,null));for(a in r){var u=r[a];if(l=i!=null?i[a]:void 0,r.hasOwnProperty(a)&&u!==l&&(u!=null||l!=null))if(a==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(t||(t={}),t[s]=u[s])}else t||(o||(o=[]),o.push(a,t)),t=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(a,u)):a==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(ui.hasOwnProperty(a)?(u!=null&&a==="onScroll"&&ae("scroll",e),o||l===u||(o=[])):(o=o||[]).push(a,u))}t&&(o=o||[]).push("style",t);var a=o;(n.updateQueue=a)&&(n.flags|=4)}};Lp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Br(e,n){if(!fe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Xv(e,n,t){var r=n.pendingProps;switch(fa(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(n),null;case 1:return be(n.type)&&Xo(),Te(n),null;case 3:return r=n.stateNode,yr(),ce(Ve),ce(Oe),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(oo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fn!==null&&(Iu(fn),fn=null))),wu(e,n),Te(n),null;case 5:xa(n);var i=Et(wi.current);if(t=n.type,e!==null&&n.stateNode!=null)Ip(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(B(166));return Te(n),null}if(e=Et(En.current),oo(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Nn]=n,r[vi]=o,e=(n.mode&1)!==0,t){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)ae(Qr[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":vc(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":wc(r,o),ae("invalid",r)}Xl(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&io(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&io(r.textContent,l,e),i=["children",""+l]):ui.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ae("scroll",r)}switch(t){case"input":Ki(r),xc(r,o,!0);break;case"textarea":Ki(r),_c(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Yo)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rh(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Nn]=n,e[vi]=r,Ap(e,n,!1,!1),n.stateNode=e;e:{switch(s=Ql(t,r),t){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)ae(Qr[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":vc(e,r),i=Vl(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ae("invalid",e);break;case"textarea":wc(e,r),i=Wl(e,r),ae("invalid",e);break;default:i=r}Xl(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?sh(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ih(e,u)):o==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ai(e,u):typeof u=="number"&&ai(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ui.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ae("scroll",e):u!=null&&Ku(e,o,u,s))}switch(t){case"input":Ki(e),xc(e,r,!1);break;case"textarea":Ki(e),_c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ct(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?or(e,!!r.multiple,o,!1):r.defaultValue!=null&&or(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Yo)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Te(n),null;case 6:if(e&&n.stateNode!=null)Lp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(B(166));if(t=Et(wi.current),Et(En.current),oo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Nn]=n,(o=r.nodeValue!==t)&&(e=Qe,e!==null))switch(e.tag){case 3:io(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Nn]=n,n.stateNode=r}return Te(n),null;case 13:if(ce(pe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&Xe!==null&&n.mode&1&&!(n.flags&128))Xh(),gr(),n.flags|=98560,o=!1;else if(o=oo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(B(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Nn]=n}else gr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Te(n),o=!1}else fn!==null&&(Iu(fn),fn=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||pe.current&1?Ee===0&&(Ee=3):Ta())),n.updateQueue!==null&&(n.flags|=4),Te(n),null);case 4:return yr(),wu(e,n),e===null&&mi(n.stateNode.containerInfo),Te(n),null;case 10:return ga(n.type._context),Te(n),null;case 17:return be(n.type)&&Xo(),Te(n),null;case 19:if(ce(pe),o=n.memoizedState,o===null)return Te(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)Br(o,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=es(e),s!==null){for(n.flags|=128,Br(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return le(pe,pe.current&1|2),n.child}e=e.sibling}o.tail!==null&&ve()>xr&&(n.flags|=128,r=!0,Br(o,!1),n.lanes=4194304)}else{if(!r)if(e=es(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Br(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!fe)return Te(n),null}else 2*ve()-o.renderingStartTime>xr&&t!==1073741824&&(n.flags|=128,r=!0,Br(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=ve(),n.sibling=null,t=pe.current,le(pe,r?t&1|2:t&1),n):(Te(n),null);case 22:case 23:return Pa(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?We&1073741824&&(Te(n),n.subtreeFlags&6&&(n.flags|=8192)):Te(n),null;case 24:return null;case 25:return null}throw Error(B(156,n.tag))}function Qv(e,n){switch(fa(n),n.tag){case 1:return be(n.type)&&Xo(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return yr(),ce(Ve),ce(Oe),wa(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return xa(n),null;case 13:if(ce(pe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(B(340));gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ce(pe),null;case 4:return yr(),null;case 10:return ga(n.type._context),null;case 22:case 23:return Pa(),null;case 24:return null;default:return null}}var uo=!1,ze=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,Y=null;function nr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){ye(e,n,r)}else t.current=null}function _u(e,n,t){try{t()}catch(r){ye(e,n,r)}}var ff=!1;function Kv(e,n){if(iu=bo,e=Oh(),aa(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,u=-1,a=0,d=0,c=e,f=null;n:for(;;){for(var m;c!==t||i!==0&&c.nodeType!==3||(l=s+i),c!==o||r!==0&&c.nodeType!==3||(u=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(m=c.firstChild)!==null;)f=c,c=m;for(;;){if(c===e)break n;if(f===t&&++a===i&&(l=s),f===o&&++d===r&&(u=s),(m=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=m}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(ou={focusedElem:e,selectionRange:t},bo=!1,Y=n;Y!==null;)if(n=Y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Y=e;else for(;Y!==null;){n=Y;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,w=y.memoizedState,p=n.stateNode,g=p.getSnapshotBeforeUpdate(n.elementType===n.type?v:un(n.type,v),w);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(x){ye(n,n.return,x)}if(e=n.sibling,e!==null){e.return=n.return,Y=e;break}Y=n.return}return y=ff,ff=!1,y}function ri(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_u(n,t,o)}i=i.next}while(i!==r)}}function Ls(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Nu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Mp(e){var n=e.alternate;n!==null&&(e.alternate=null,Mp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Nn],delete n[vi],delete n[uu],delete n[Tv],delete n[zv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Pp(e){return e.tag===5||e.tag===3||e.tag===4}function df(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Su(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Yo));else if(r!==4&&(e=e.child,e!==null))for(Su(e,n,t),e=e.sibling;e!==null;)Su(e,n,t),e=e.sibling}function Eu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Eu(e,n,t),e=e.sibling;e!==null;)Eu(e,n,t),e=e.sibling}var Ae=null,an=!1;function Un(e,n,t){for(t=t.child;t!==null;)Tp(e,n,t),t=t.sibling}function Tp(e,n,t){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(_s,t)}catch{}switch(t.tag){case 5:ze||nr(t,n);case 6:var r=Ae,i=an;Ae=null,Un(e,n,t),Ae=r,an=i,Ae!==null&&(an?(e=Ae,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ae.removeChild(t.stateNode));break;case 18:Ae!==null&&(an?(e=Ae,t=t.stateNode,e.nodeType===8?pl(e.parentNode,t):e.nodeType===1&&pl(e,t),hi(e)):pl(Ae,t.stateNode));break;case 4:r=Ae,i=an,Ae=t.stateNode.containerInfo,an=!0,Un(e,n,t),Ae=r,an=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_u(t,n,s),i=i.next}while(i!==r)}Un(e,n,t);break;case 1:if(!ze&&(nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){ye(t,n,l)}Un(e,n,t);break;case 21:Un(e,n,t);break;case 22:t.mode&1?(ze=(r=ze)||t.memoizedState!==null,Un(e,n,t),ze=r):Un(e,n,t);break;default:Un(e,n,t)}}function hf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gv),n.forEach(function(r){var i=o1.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function ln(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ae=l.stateNode,an=!1;break e;case 3:Ae=l.stateNode.containerInfo,an=!0;break e;case 4:Ae=l.stateNode.containerInfo,an=!0;break e}l=l.return}if(Ae===null)throw Error(B(160));Tp(o,s,i),Ae=null,an=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(a){ye(i,n,a)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)zp(n,e),n=n.sibling}function zp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(n,e),xn(e),r&4){try{ri(3,e,e.return),Ls(3,e)}catch(v){ye(e,e.return,v)}try{ri(5,e,e.return)}catch(v){ye(e,e.return,v)}}break;case 1:ln(n,e),xn(e),r&512&&t!==null&&nr(t,t.return);break;case 5:if(ln(n,e),xn(e),r&512&&t!==null&&nr(t,t.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(v){ye(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&nh(i,o),Ql(l,s);var a=Ql(l,o);for(s=0;s<u.length;s+=2){var d=u[s],c=u[s+1];d==="style"?sh(i,c):d==="dangerouslySetInnerHTML"?ih(i,c):d==="children"?ai(i,c):Ku(i,d,c,a)}switch(l){case"input":bl(i,o);break;case"textarea":th(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?or(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?or(i,!!o.multiple,o.defaultValue,!0):or(i,!!o.multiple,o.multiple?[]:"",!1))}i[vi]=o}catch(v){ye(e,e.return,v)}}break;case 6:if(ln(n,e),xn(e),r&4){if(e.stateNode===null)throw Error(B(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){ye(e,e.return,v)}}break;case 3:if(ln(n,e),xn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{hi(n.containerInfo)}catch(v){ye(e,e.return,v)}break;case 4:ln(n,e),xn(e);break;case 13:ln(n,e),xn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(La=ve())),r&4&&hf(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(ze=(a=ze)||d,ln(n,e),ze=a):ln(n,e),xn(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(c=Y=d;Y!==null;){switch(f=Y,m=f.child,f.tag){case 0:case 11:case 14:case 15:ri(4,f,f.return);break;case 1:nr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(v){ye(r,t,v)}}break;case 5:nr(f,f.return);break;case 22:if(f.memoizedState!==null){gf(c);continue}}m!==null?(m.return=f,Y=m):gf(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,a?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,u=c.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=oh("display",s))}catch(v){ye(e,e.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(v){ye(e,e.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ln(n,e),xn(e),r&4&&hf(e);break;case 21:break;default:ln(n,e),xn(e)}}function xn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(Pp(t)){var r=t;break e}t=t.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var o=df(e);Eu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=df(e);Su(e,l,s);break;default:throw Error(B(161))}}catch(u){ye(e,e.return,u)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Zv(e,n,t){Y=e,Op(e)}function Op(e,n,t){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||uo;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||ze;l=uo;var a=ze;if(uo=s,(ze=u)&&!a)for(Y=i;Y!==null;)s=Y,u=s.child,s.tag===22&&s.memoizedState!==null?mf(i):u!==null?(u.return=s,Y=u):mf(i);for(;o!==null;)Y=o,Op(o),o=o.sibling;Y=i,uo=l,ze=a}pf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):pf(e)}}function pf(e){for(;Y!==null;){var n=Y;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:ze||Ls(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!ze)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:un(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Zc(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Zc(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var u=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var a=n.alternate;if(a!==null){var d=a.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&hi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}ze||n.flags&512&&Nu(n)}catch(f){ye(n,n.return,f)}}if(n===e){Y=null;break}if(t=n.sibling,t!==null){t.return=n.return,Y=t;break}Y=n.return}}function gf(e){for(;Y!==null;){var n=Y;if(n===e){Y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Y=t;break}Y=n.return}}function mf(e){for(;Y!==null;){var n=Y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ls(4,n)}catch(u){ye(n,t,u)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(u){ye(n,i,u)}}var o=n.return;try{Nu(n)}catch(u){ye(n,o,u)}break;case 5:var s=n.return;try{Nu(n)}catch(u){ye(n,s,u)}}}catch(u){ye(n,n.return,u)}if(n===e){Y=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Y=l;break}Y=n.return}}var qv=Math.ceil,rs=Bn.ReactCurrentDispatcher,Aa=Bn.ReactCurrentOwner,tn=Bn.ReactCurrentBatchConfig,ie=0,Ce=null,_e=null,Ie=0,We=0,tr=ht(0),Ee=0,Ei=null,zt=0,Ms=0,Ia=0,ii=null,Fe=null,La=0,xr=1/0,Mn=null,is=!1,ku=null,st=null,ao=!1,Jn=null,os=0,oi=0,Cu=null,Mo=-1,Po=0;function $e(){return ie&6?ve():Mo!==-1?Mo:Mo=ve()}function lt(e){return e.mode&1?ie&2&&Ie!==0?Ie&-Ie:Rv.transition!==null?(Po===0&&(Po=vh()),Po):(e=se,e!==0||(e=window.event,e=e===void 0?16:kh(e.type)),e):1}function mn(e,n,t,r){if(50<oi)throw oi=0,Cu=null,Error(B(185));$i(e,t,r),(!(ie&2)||e!==Ce)&&(e===Ce&&(!(ie&2)&&(Ms|=t),Ee===4&&Kn(e,Ie)),Ue(e,r),t===1&&ie===0&&!(n.mode&1)&&(xr=ve()+500,Cs&&pt()))}function Ue(e,n){var t=e.callbackNode;Ry(e,n);var r=Vo(e,e===Ce?Ie:0);if(r===0)t!==null&&Ec(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ec(t),n===1)e.tag===0?Ov(yf.bind(null,e)):Uh(yf.bind(null,e)),Mv(function(){!(ie&6)&&pt()}),t=null;else{switch(xh(r)){case 1:t=na;break;case 4:t=mh;break;case 16:t=Bo;break;case 536870912:t=yh;break;default:t=Bo}t=Vp(t,Rp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Rp(e,n){if(Mo=-1,Po=0,ie&6)throw Error(B(327));var t=e.callbackNode;if(cr()&&e.callbackNode!==t)return null;var r=Vo(e,e===Ce?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=ss(e,r);else{n=r;var i=ie;ie|=2;var o=Dp();(Ce!==e||Ie!==n)&&(Mn=null,xr=ve()+500,Ct(e,n));do try{n1();break}catch(l){$p(e,l)}while(!0);pa(),rs.current=o,ie=i,_e!==null?n=0:(Ce=null,Ie=0,n=Ee)}if(n!==0){if(n===2&&(i=Jl(e),i!==0&&(r=i,n=Au(e,i))),n===1)throw t=Ei,Ct(e,0),Kn(e,r),Ue(e,ve()),t;if(n===6)Kn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Jv(i)&&(n=ss(e,r),n===2&&(o=Jl(e),o!==0&&(r=o,n=Au(e,o))),n===1))throw t=Ei,Ct(e,0),Kn(e,r),Ue(e,ve()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(B(345));case 2:xt(e,Fe,Mn);break;case 3:if(Kn(e,r),(r&130023424)===r&&(n=La+500-ve(),10<n)){if(Vo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=lu(xt.bind(null,e,Fe,Mn),n);break}xt(e,Fe,Mn);break;case 4:if(Kn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-gn(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*qv(r/1960))-r,10<r){e.timeoutHandle=lu(xt.bind(null,e,Fe,Mn),r);break}xt(e,Fe,Mn);break;case 5:xt(e,Fe,Mn);break;default:throw Error(B(329))}}}return Ue(e,ve()),e.callbackNode===t?Rp.bind(null,e):null}function Au(e,n){var t=ii;return e.current.memoizedState.isDehydrated&&(Ct(e,n).flags|=256),e=ss(e,n),e!==2&&(n=Fe,Fe=t,n!==null&&Iu(n)),e}function Iu(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Jv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!yn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Kn(e,n){for(n&=~Ia,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-gn(n),r=1<<t;e[t]=-1,n&=~r}}function yf(e){if(ie&6)throw Error(B(327));cr();var n=Vo(e,0);if(!(n&1))return Ue(e,ve()),null;var t=ss(e,n);if(e.tag!==0&&t===2){var r=Jl(e);r!==0&&(n=r,t=Au(e,r))}if(t===1)throw t=Ei,Ct(e,0),Kn(e,n),Ue(e,ve()),t;if(t===6)throw Error(B(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,xt(e,Fe,Mn),Ue(e,ve()),null}function Ma(e,n){var t=ie;ie|=1;try{return e(n)}finally{ie=t,ie===0&&(xr=ve()+500,Cs&&pt())}}function Ot(e){Jn!==null&&Jn.tag===0&&!(ie&6)&&cr();var n=ie;ie|=1;var t=tn.transition,r=se;try{if(tn.transition=null,se=1,e)return e()}finally{se=r,tn.transition=t,ie=n,!(ie&6)&&pt()}}function Pa(){We=tr.current,ce(tr)}function Ct(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Lv(t)),_e!==null)for(t=_e.return;t!==null;){var r=t;switch(fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:yr(),ce(Ve),ce(Oe),wa();break;case 5:xa(r);break;case 4:yr();break;case 13:ce(pe);break;case 19:ce(pe);break;case 10:ga(r.type._context);break;case 22:case 23:Pa()}t=t.return}if(Ce=e,_e=e=ut(e.current,null),Ie=We=n,Ee=0,Ei=null,Ia=Ms=zt=0,Fe=ii=null,St!==null){for(n=0;n<St.length;n++)if(t=St[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}St=null}return e}function $p(e,n){do{var t=_e;try{if(pa(),Ao.current=ts,ns){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ns=!1}if(Tt=0,ke=Se=ge=null,ti=!1,_i=0,Aa.current=null,t===null||t.return===null){Ee=1,Ei=n,_e=null;break}e:{var o=e,s=t.return,l=t,u=n;if(n=Ie,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=rf(s);if(m!==null){m.flags&=-257,of(m,s,l,o,n),m.mode&1&&tf(o,a,n),n=m,u=a;var y=n.updateQueue;if(y===null){var v=new Set;v.add(u),n.updateQueue=v}else y.add(u);break e}else{if(!(n&1)){tf(o,a,n),Ta();break e}u=Error(B(426))}}else if(fe&&l.mode&1){var w=rf(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),of(w,s,l,o,n),da(vr(u,l));break e}}o=u=vr(u,l),Ee!==4&&(Ee=2),ii===null?ii=[o]:ii.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var p=xp(o,u,n);Kc(o,p);break e;case 1:l=u;var g=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(st===null||!st.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var x=wp(o,l,n);Kc(o,x);break e}}o=o.return}while(o!==null)}Fp(t)}catch(N){n=N,_e===t&&t!==null&&(_e=t=t.return);continue}break}while(!0)}function Dp(){var e=rs.current;return rs.current=ts,e===null?ts:e}function Ta(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ce===null||!(zt&268435455)&&!(Ms&268435455)||Kn(Ce,Ie)}function ss(e,n){var t=ie;ie|=2;var r=Dp();(Ce!==e||Ie!==n)&&(Mn=null,Ct(e,n));do try{e1();break}catch(i){$p(e,i)}while(!0);if(pa(),ie=t,rs.current=r,_e!==null)throw Error(B(261));return Ce=null,Ie=0,Ee}function e1(){for(;_e!==null;)jp(_e)}function n1(){for(;_e!==null&&!Cy();)jp(_e)}function jp(e){var n=Bp(e.alternate,e,We);e.memoizedProps=e.pendingProps,n===null?Fp(e):_e=n,Aa.current=null}function Fp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Qv(t,n),t!==null){t.flags&=32767,_e=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,_e=null;return}}else if(t=Xv(t,n,We),t!==null){_e=t;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Ee===0&&(Ee=5)}function xt(e,n,t){var r=se,i=tn.transition;try{tn.transition=null,se=1,t1(e,n,t,r)}finally{tn.transition=i,se=r}return null}function t1(e,n,t,r){do cr();while(Jn!==null);if(ie&6)throw Error(B(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(B(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if($y(e,o),e===Ce&&(_e=Ce=null,Ie=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ao||(ao=!0,Vp(Bo,function(){return cr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=tn.transition,tn.transition=null;var s=se;se=1;var l=ie;ie|=4,Aa.current=null,Kv(e,t),zp(t,e),Nv(ou),bo=!!iu,ou=iu=null,e.current=t,Zv(t),Ay(),ie=l,se=s,tn.transition=o}else e.current=t;if(ao&&(ao=!1,Jn=e,os=i),o=e.pendingLanes,o===0&&(st=null),My(t.stateNode),Ue(e,ve()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=ku,ku=null,e;return os&1&&e.tag!==0&&cr(),o=e.pendingLanes,o&1?e===Cu?oi++:(oi=0,Cu=e):oi=0,pt(),null}function cr(){if(Jn!==null){var e=xh(os),n=tn.transition,t=se;try{if(tn.transition=null,se=16>e?16:e,Jn===null)var r=!1;else{if(e=Jn,Jn=null,os=0,ie&6)throw Error(B(331));var i=ie;for(ie|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var a=l[u];for(Y=a;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:ri(8,d,o)}var c=d.child;if(c!==null)c.return=d,Y=c;else for(;Y!==null;){d=Y;var f=d.sibling,m=d.return;if(Mp(d),d===a){Y=null;break}if(f!==null){f.return=m,Y=f;break}Y=m}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ri(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Y=p;break e}Y=o.return}}var g=e.current;for(Y=g;Y!==null;){s=Y;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,Y=h;else e:for(s=g;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ls(9,l)}}catch(N){ye(l,l.return,N)}if(l===s){Y=null;break e}var x=l.sibling;if(x!==null){x.return=l.return,Y=x;break e}Y=l.return}}if(ie=i,pt(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(_s,e)}catch{}r=!0}return r}finally{se=t,tn.transition=n}}return!1}function vf(e,n,t){n=vr(t,n),n=xp(e,n,1),e=ot(e,n,1),n=$e(),e!==null&&($i(e,1,n),Ue(e,n))}function ye(e,n,t){if(e.tag===3)vf(e,e,t);else for(;n!==null;){if(n.tag===3){vf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(st===null||!st.has(r))){e=vr(t,e),e=wp(n,e,1),n=ot(n,e,1),e=$e(),n!==null&&($i(n,1,e),Ue(n,e));break}}n=n.return}}function r1(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=$e(),e.pingedLanes|=e.suspendedLanes&t,Ce===e&&(Ie&t)===t&&(Ee===4||Ee===3&&(Ie&130023424)===Ie&&500>ve()-La?Ct(e,0):Ia|=t),Ue(e,n)}function Hp(e,n){n===0&&(e.mode&1?(n=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):n=1);var t=$e();e=jn(e,n),e!==null&&($i(e,n,t),Ue(e,t))}function i1(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Hp(e,t)}function o1(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(n),Hp(e,t)}var Bp;Bp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Ve.current)He=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return He=!1,Yv(e,n,t);He=!!(e.flags&131072)}else He=!1,fe&&n.flags&1048576&&Wh(n,Ko,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Lo(e,n),e=n.pendingProps;var i=pr(n,Oe.current);ar(n,t),i=Na(null,n,r,e,i,t);var o=Sa();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,be(r)?(o=!0,Qo(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ya(n),i.updater=Is,n.stateNode=i,i._reactInternals=n,pu(n,r,e,t),n=yu(null,n,r,!0,o,t)):(n.tag=0,fe&&o&&ca(n),Re(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Lo(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=l1(r),e=un(r,e),i){case 0:n=mu(null,n,r,e,t);break e;case 1:n=uf(null,n,r,e,t);break e;case 11:n=sf(null,n,r,e,t);break e;case 14:n=lf(null,n,r,un(r.type,e),t);break e}throw Error(B(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),mu(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),uf(e,n,r,i,t);case 3:e:{if(Ep(n),e===null)throw Error(B(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Zh(e,n),Jo(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=vr(Error(B(423)),n),n=af(e,n,r,t,i);break e}else if(r!==i){i=vr(Error(B(424)),n),n=af(e,n,r,t,i);break e}else for(Xe=it(n.stateNode.containerInfo.firstChild),Qe=n,fe=!0,fn=null,t=Gh(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(gr(),r===i){n=Fn(e,n,t);break e}Re(e,n,r,t)}n=n.child}return n;case 5:return qh(n),e===null&&fu(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,su(r,i)?s=null:o!==null&&su(r,o)&&(n.flags|=32),Sp(e,n),Re(e,n,s,t),n.child;case 6:return e===null&&fu(n),null;case 13:return kp(e,n,t);case 4:return va(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=mr(n,null,r,t):Re(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),sf(e,n,r,i,t);case 7:return Re(e,n,n.pendingProps,t),n.child;case 8:return Re(e,n,n.pendingProps.children,t),n.child;case 12:return Re(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,le(Zo,r._currentValue),r._currentValue=s,o!==null)if(yn(o.value,s)){if(o.children===i.children&&!Ve.current){n=Fn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Rn(-1,t&-t),u.tag=2;var a=o.updateQueue;if(a!==null){a=a.shared;var d=a.pending;d===null?u.next=u:(u.next=d.next,d.next=u),a.pending=u}}o.lanes|=t,u=o.alternate,u!==null&&(u.lanes|=t),du(o.return,t,n),l.lanes|=t;break}u=u.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),du(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Re(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,ar(n,t),i=on(i),r=r(i),n.flags|=1,Re(e,n,r,t),n.child;case 14:return r=n.type,i=un(r,n.pendingProps),i=un(r.type,i),lf(e,n,r,i,t);case 15:return _p(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Lo(e,n),n.tag=1,be(r)?(e=!0,Qo(n)):e=!1,ar(n,t),vp(n,r,i),pu(n,r,i,t),yu(null,n,r,!0,e,t);case 19:return Cp(e,n,t);case 22:return Np(e,n,t)}throw Error(B(156,n.tag))};function Vp(e,n){return gh(e,n)}function s1(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,n,t,r){return new s1(e,n,t,r)}function za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l1(e){if(typeof e=="function")return za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===qu)return 11;if(e===Ju)return 14}return 2}function ut(e,n){var t=e.alternate;return t===null?(t=nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function To(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")za(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Yt:return At(t.children,i,o,n);case Zu:s=8,i|=8;break;case jl:return e=nn(12,t,n,i|2),e.elementType=jl,e.lanes=o,e;case Fl:return e=nn(13,t,n,i),e.elementType=Fl,e.lanes=o,e;case Hl:return e=nn(19,t,n,i),e.elementType=Hl,e.lanes=o,e;case qd:return Ps(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Kd:s=10;break e;case Zd:s=9;break e;case qu:s=11;break e;case Ju:s=14;break e;case Xn:s=16,r=null;break e}throw Error(B(130,e==null?e:typeof e,""))}return n=nn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function At(e,n,t,r){return e=nn(7,e,r,n),e.lanes=t,e}function Ps(e,n,t,r){return e=nn(22,e,r,n),e.elementType=qd,e.lanes=t,e.stateNode={isHidden:!1},e}function Nl(e,n,t){return e=nn(6,e,null,n),e.lanes=t,e}function Sl(e,n,t){return n=nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function u1(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Oa(e,n,t,r,i,o,s,l,u){return e=new u1(e,n,t,l,u),n===1?(n=1,o===!0&&(n|=8)):n=0,o=nn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},ya(o),e}function a1(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function bp(e){if(!e)return ft;e=e._reactInternals;e:{if(Ht(e)!==e||e.tag!==1)throw Error(B(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(be(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(B(171))}if(e.tag===1){var t=e.type;if(be(t))return bh(e,t,n)}return n}function Up(e,n,t,r,i,o,s,l,u){return e=Oa(t,r,!0,e,i,o,s,l,u),e.context=bp(null),t=e.current,r=$e(),i=lt(t),o=Rn(r,i),o.callback=n??null,ot(t,o,i),e.current.lanes=i,$i(e,i,r),Ue(e,r),e}function Ts(e,n,t,r){var i=n.current,o=$e(),s=lt(i);return t=bp(t),n.context===null?n.context=t:n.pendingContext=t,n=Rn(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=ot(i,n,s),e!==null&&(mn(e,i,s,o),Co(e,i,s)),s}function ls(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ra(e,n){xf(e,n),(e=e.alternate)&&xf(e,n)}function c1(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function $a(e){this._internalRoot=e}zs.prototype.render=$a.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(B(409));Ts(e,n,null,null)};zs.prototype.unmount=$a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ot(function(){Ts(null,e,null,null)}),n[Dn]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var n=Nh();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Gn.length&&n!==0&&n<Gn[t].priority;t++);Gn.splice(t,0,e),t===0&&Eh(e)}};function Da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wf(){}function f1(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var a=ls(s);o.call(a)}}var s=Up(n,r,e,0,null,!1,!1,"",wf);return e._reactRootContainer=s,e[Dn]=s.current,mi(e.nodeType===8?e.parentNode:e),Ot(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var a=ls(u);l.call(a)}}var u=Oa(e,0,!1,null,null,!1,!1,"",wf);return e._reactRootContainer=u,e[Dn]=u.current,mi(e.nodeType===8?e.parentNode:e),Ot(function(){Ts(n,u,t,r)}),u}function Rs(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=ls(s);l.call(u)}}Ts(n,s,e,i)}else s=f1(t,n,e,i,r);return ls(s)}wh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Xr(n.pendingLanes);t!==0&&(ta(n,t|1),Ue(n,ve()),!(ie&6)&&(xr=ve()+500,pt()))}break;case 13:Ot(function(){var r=jn(e,1);if(r!==null){var i=$e();mn(r,e,1,i)}}),Ra(e,1)}};ra=function(e){if(e.tag===13){var n=jn(e,134217728);if(n!==null){var t=$e();mn(n,e,134217728,t)}Ra(e,134217728)}};_h=function(e){if(e.tag===13){var n=lt(e),t=jn(e,n);if(t!==null){var r=$e();mn(t,e,n,r)}Ra(e,n)}};Nh=function(){return se};Sh=function(e,n){var t=se;try{return se=e,n()}finally{se=t}};Kl=function(e,n,t){switch(n){case"input":if(bl(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ks(r);if(!i)throw Error(B(90));eh(r),bl(r,i)}}}break;case"textarea":th(e,t);break;case"select":n=t.value,n!=null&&or(e,!!t.multiple,n,!1)}};ah=Ma;ch=Ot;var d1={usingClientEntryPoint:!1,Events:[ji,Kt,ks,lh,uh,Ma]},Vr={findFiberByHostInstance:Nt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h1={bundleType:Vr.bundleType,version:Vr.version,rendererPackageName:Vr.rendererPackageName,rendererConfig:Vr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hh(e),e===null?null:e.stateNode},findFiberByHostInstance:Vr.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{_s=co.inject(h1),Sn=co}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1;Ze.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Da(n))throw Error(B(200));return a1(e,n,null,t)};Ze.createRoot=function(e,n){if(!Da(e))throw Error(B(299));var t=!1,r="",i=Wp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Oa(e,1,!1,null,null,t,!1,r,i),e[Dn]=n.current,mi(e.nodeType===8?e.parentNode:e),new $a(n)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(B(188)):(e=Object.keys(e).join(","),Error(B(268,e)));return e=hh(n),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Ot(e)};Ze.hydrate=function(e,n,t){if(!Os(n))throw Error(B(200));return Rs(null,e,n,!0,t)};Ze.hydrateRoot=function(e,n,t){if(!Da(e))throw Error(B(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=Wp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=Up(n,null,e,1,t??null,i,!1,o,s),e[Dn]=n.current,mi(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new zs(n)};Ze.render=function(e,n,t){if(!Os(n))throw Error(B(200));return Rs(null,e,n,!1,t)};Ze.unmountComponentAtNode=function(e){if(!Os(e))throw Error(B(40));return e._reactRootContainer?(Ot(function(){Rs(null,null,e,!1,function(){e._reactRootContainer=null,e[Dn]=null})}),!0):!1};Ze.unstable_batchedUpdates=Ma;Ze.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Os(t))throw Error(B(200));if(e==null||e._reactInternals===void 0)throw Error(B(38));return Rs(e,n,t,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function Yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp)}catch(e){console.error(e)}}Yp(),Yd.exports=Ze;var p1=Yd.exports,_f=p1;$l.createRoot=_f.createRoot,$l.hydrateRoot=_f.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xp=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var m1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=O.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},u)=>O.createElement("svg",{ref:u,...m1,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Xp("lucide",i),...l},[...s.map(([a,d])=>O.createElement(a,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=(e,n)=>{const t=O.forwardRef(({className:r,...i},o)=>O.createElement(y1,{ref:o,iconNode:n,className:Xp(`lucide-${g1(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=gt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=gt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=gt("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=gt("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=gt("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=gt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=gt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=gt("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);function Ne(e){if(typeof e=="string"||typeof e=="number")return""+e;let n="";if(Array.isArray(e))for(let t=0,r;t<e.length;t++)(r=Ne(e[t]))!==""&&(n+=(n&&" ")+r);else for(let t in e)e[t]&&(n+=(n&&" ")+t);return n}var E1={value:()=>{}};function $s(){for(var e=0,n=arguments.length,t={},r;e<n;++e){if(!(r=arguments[e]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new zo(t)}function zo(e){this._=e}function k1(e,n){return e.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}zo.prototype=$s.prototype={constructor:zo,on:function(e,n){var t=this._,r=k1(e+"",t),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(e=r[o]).type)&&(i=C1(t[i],e.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<s;)if(i=(e=r[o]).type)t[i]=Ef(t[i],e.name,n);else if(n==null)for(i in t)t[i]=Ef(t[i],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new zo(e)},call:function(e,n){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,o;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(n,t)}};function C1(e,n){for(var t=0,r=e.length,i;t<r;++t)if((i=e[t]).name===n)return i.value}function Ef(e,n,t){for(var r=0,i=e.length;r<i;++r)if(e[r].name===n){e[r]=E1,e=e.slice(0,r).concat(e.slice(r+1));break}return t!=null&&e.push({name:n,value:t}),e}var Lu="http://www.w3.org/1999/xhtml";const kf={svg:"http://www.w3.org/2000/svg",xhtml:Lu,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ds(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),kf.hasOwnProperty(n)?{space:kf[n],local:e}:e}function A1(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===Lu&&n.documentElement.namespaceURI===Lu?n.createElement(e):n.createElementNS(t,e)}}function I1(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Qp(e){var n=Ds(e);return(n.local?I1:A1)(n)}function L1(){}function ja(e){return e==null?L1:function(){return this.querySelector(e)}}function M1(e){typeof e!="function"&&(e=ja(e));for(var n=this._groups,t=n.length,r=new Array(t),i=0;i<t;++i)for(var o=n[i],s=o.length,l=r[i]=new Array(s),u,a,d=0;d<s;++d)(u=o[d])&&(a=e.call(u,u.__data__,d,o))&&("__data__"in u&&(a.__data__=u.__data__),l[d]=a);return new Ke(r,this._parents)}function P1(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function T1(){return[]}function Gp(e){return e==null?T1:function(){return this.querySelectorAll(e)}}function z1(e){return function(){return P1(e.apply(this,arguments))}}function O1(e){typeof e=="function"?e=z1(e):e=Gp(e);for(var n=this._groups,t=n.length,r=[],i=[],o=0;o<t;++o)for(var s=n[o],l=s.length,u,a=0;a<l;++a)(u=s[a])&&(r.push(e.call(u,u.__data__,a,s)),i.push(u));return new Ke(r,i)}function Kp(e){return function(){return this.matches(e)}}function Zp(e){return function(n){return n.matches(e)}}var R1=Array.prototype.find;function $1(e){return function(){return R1.call(this.children,e)}}function D1(){return this.firstElementChild}function j1(e){return this.select(e==null?D1:$1(typeof e=="function"?e:Zp(e)))}var F1=Array.prototype.filter;function H1(){return Array.from(this.children)}function B1(e){return function(){return F1.call(this.children,e)}}function V1(e){return this.selectAll(e==null?H1:B1(typeof e=="function"?e:Zp(e)))}function b1(e){typeof e!="function"&&(e=Kp(e));for(var n=this._groups,t=n.length,r=new Array(t),i=0;i<t;++i)for(var o=n[i],s=o.length,l=r[i]=[],u,a=0;a<s;++a)(u=o[a])&&e.call(u,u.__data__,a,o)&&l.push(u);return new Ke(r,this._parents)}function qp(e){return new Array(e.length)}function U1(){return new Ke(this._enter||this._groups.map(qp),this._parents)}function us(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}us.prototype={constructor:us,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function W1(e){return function(){return e}}function Y1(e,n,t,r,i,o){for(var s=0,l,u=n.length,a=o.length;s<a;++s)(l=n[s])?(l.__data__=o[s],r[s]=l):t[s]=new us(e,o[s]);for(;s<u;++s)(l=n[s])&&(i[s]=l)}function X1(e,n,t,r,i,o,s){var l,u,a=new Map,d=n.length,c=o.length,f=new Array(d),m;for(l=0;l<d;++l)(u=n[l])&&(f[l]=m=s.call(u,u.__data__,l,n)+"",a.has(m)?i[l]=u:a.set(m,u));for(l=0;l<c;++l)m=s.call(e,o[l],l,o)+"",(u=a.get(m))?(r[l]=u,u.__data__=o[l],a.delete(m)):t[l]=new us(e,o[l]);for(l=0;l<d;++l)(u=n[l])&&a.get(f[l])===u&&(i[l]=u)}function Q1(e){return e.__data__}function G1(e,n){if(!arguments.length)return Array.from(this,Q1);var t=n?X1:Y1,r=this._parents,i=this._groups;typeof e!="function"&&(e=W1(e));for(var o=i.length,s=new Array(o),l=new Array(o),u=new Array(o),a=0;a<o;++a){var d=r[a],c=i[a],f=c.length,m=K1(e.call(d,d&&d.__data__,a,r)),y=m.length,v=l[a]=new Array(y),w=s[a]=new Array(y),p=u[a]=new Array(f);t(d,c,v,w,p,m,n);for(var g=0,h=0,x,N;g<y;++g)if(x=v[g]){for(g>=h&&(h=g+1);!(N=w[h])&&++h<y;);x._next=N||null}}return s=new Ke(s,r),s._enter=l,s._exit=u,s}function K1(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function Z1(){return new Ke(this._exit||this._groups.map(qp),this._parents)}function q1(e,n,t){var r=this.enter(),i=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),n!=null&&(i=n(i),i&&(i=i.selection())),t==null?o.remove():t(o),r&&i?r.merge(i).order():i}function J1(e){for(var n=e.selection?e.selection():e,t=this._groups,r=n._groups,i=t.length,o=r.length,s=Math.min(i,o),l=new Array(i),u=0;u<s;++u)for(var a=t[u],d=r[u],c=a.length,f=l[u]=new Array(c),m,y=0;y<c;++y)(m=a[y]||d[y])&&(f[y]=m);for(;u<i;++u)l[u]=t[u];return new Ke(l,this._parents)}function ex(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var r=e[n],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function nx(e){e||(e=tx);function n(c,f){return c&&f?e(c.__data__,f.__data__):!c-!f}for(var t=this._groups,r=t.length,i=new Array(r),o=0;o<r;++o){for(var s=t[o],l=s.length,u=i[o]=new Array(l),a,d=0;d<l;++d)(a=s[d])&&(u[d]=a);u.sort(n)}return new Ke(i,this._parents).order()}function tx(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function rx(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function ix(){return Array.from(this)}function ox(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var r=e[n],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function sx(){let e=0;for(const n of this)++e;return e}function lx(){return!this.node()}function ux(e){for(var n=this._groups,t=0,r=n.length;t<r;++t)for(var i=n[t],o=0,s=i.length,l;o<s;++o)(l=i[o])&&e.call(l,l.__data__,o,i);return this}function ax(e){return function(){this.removeAttribute(e)}}function cx(e){return function(){this.removeAttributeNS(e.space,e.local)}}function fx(e,n){return function(){this.setAttribute(e,n)}}function dx(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function hx(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function px(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function gx(e,n){var t=Ds(e);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((n==null?t.local?cx:ax:typeof n=="function"?t.local?px:hx:t.local?dx:fx)(t,n))}function Jp(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function mx(e){return function(){this.style.removeProperty(e)}}function yx(e,n,t){return function(){this.style.setProperty(e,n,t)}}function vx(e,n,t){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,t)}}function xx(e,n,t){return arguments.length>1?this.each((n==null?mx:typeof n=="function"?vx:yx)(e,n,t??"")):wr(this.node(),e)}function wr(e,n){return e.style.getPropertyValue(n)||Jp(e).getComputedStyle(e,null).getPropertyValue(n)}function wx(e){return function(){delete this[e]}}function _x(e,n){return function(){this[e]=n}}function Nx(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function Sx(e,n){return arguments.length>1?this.each((n==null?wx:typeof n=="function"?Nx:_x)(e,n)):this.node()[e]}function eg(e){return e.trim().split(/^|\s+/)}function Fa(e){return e.classList||new ng(e)}function ng(e){this._node=e,this._names=eg(e.getAttribute("class")||"")}ng.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function tg(e,n){for(var t=Fa(e),r=-1,i=n.length;++r<i;)t.add(n[r])}function rg(e,n){for(var t=Fa(e),r=-1,i=n.length;++r<i;)t.remove(n[r])}function Ex(e){return function(){tg(this,e)}}function kx(e){return function(){rg(this,e)}}function Cx(e,n){return function(){(n.apply(this,arguments)?tg:rg)(this,e)}}function Ax(e,n){var t=eg(e+"");if(arguments.length<2){for(var r=Fa(this.node()),i=-1,o=t.length;++i<o;)if(!r.contains(t[i]))return!1;return!0}return this.each((typeof n=="function"?Cx:n?Ex:kx)(t,n))}function Ix(){this.textContent=""}function Lx(e){return function(){this.textContent=e}}function Mx(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function Px(e){return arguments.length?this.each(e==null?Ix:(typeof e=="function"?Mx:Lx)(e)):this.node().textContent}function Tx(){this.innerHTML=""}function zx(e){return function(){this.innerHTML=e}}function Ox(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function Rx(e){return arguments.length?this.each(e==null?Tx:(typeof e=="function"?Ox:zx)(e)):this.node().innerHTML}function $x(){this.nextSibling&&this.parentNode.appendChild(this)}function Dx(){return this.each($x)}function jx(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Fx(){return this.each(jx)}function Hx(e){var n=typeof e=="function"?e:Qp(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function Bx(){return null}function Vx(e,n){var t=typeof e=="function"?e:Qp(e),r=n==null?Bx:typeof n=="function"?n:ja(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function bx(){var e=this.parentNode;e&&e.removeChild(this)}function Ux(){return this.each(bx)}function Wx(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Yx(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function Xx(e){return this.select(e?Yx:Wx)}function Qx(e){return arguments.length?this.property("__data__",e):this.node().__data__}function Gx(e){return function(n){e.call(this,n,this.__data__)}}function Kx(e){return e.trim().split(/^|\s+/).map(function(n){var t="",r=n.indexOf(".");return r>=0&&(t=n.slice(r+1),n=n.slice(0,r)),{type:n,name:t}})}function Zx(e){return function(){var n=this.__on;if(n){for(var t=0,r=-1,i=n.length,o;t<i;++t)o=n[t],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):n[++r]=o;++r?n.length=r:delete this.__on}}}function qx(e,n,t){return function(){var r=this.__on,i,o=Gx(n);if(r){for(var s=0,l=r.length;s<l;++s)if((i=r[s]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=t),i.value=n;return}}this.addEventListener(e.type,o,t),i={type:e.type,name:e.name,value:n,listener:o,options:t},r?r.push(i):this.__on=[i]}}function Jx(e,n,t){var r=Kx(e+""),i,o=r.length,s;if(arguments.length<2){var l=this.node().__on;if(l){for(var u=0,a=l.length,d;u<a;++u)for(i=0,d=l[u];i<o;++i)if((s=r[i]).type===d.type&&s.name===d.name)return d.value}return}for(l=n?qx:Zx,i=0;i<o;++i)this.each(l(r[i],n,t));return this}function ig(e,n,t){var r=Jp(e),i=r.CustomEvent;typeof i=="function"?i=new i(n,t):(i=r.document.createEvent("Event"),t?(i.initEvent(n,t.bubbles,t.cancelable),i.detail=t.detail):i.initEvent(n,!1,!1)),e.dispatchEvent(i)}function ew(e,n){return function(){return ig(this,e,n)}}function nw(e,n){return function(){return ig(this,e,n.apply(this,arguments))}}function tw(e,n){return this.each((typeof n=="function"?nw:ew)(e,n))}function*rw(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var r=e[n],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var og=[null];function Ke(e,n){this._groups=e,this._parents=n}function Hi(){return new Ke([[document.documentElement]],og)}function iw(){return this}Ke.prototype=Hi.prototype={constructor:Ke,select:M1,selectAll:O1,selectChild:j1,selectChildren:V1,filter:b1,data:G1,enter:U1,exit:Z1,join:q1,merge:J1,selection:iw,order:ex,sort:nx,call:rx,nodes:ix,node:ox,size:sx,empty:lx,each:ux,attr:gx,style:xx,property:Sx,classed:Ax,text:Px,html:Rx,raise:Dx,lower:Fx,append:Hx,insert:Vx,remove:Ux,clone:Xx,datum:Qx,on:Jx,dispatch:tw,[Symbol.iterator]:rw};function Ye(e){return typeof e=="string"?new Ke([[document.querySelector(e)]],[document.documentElement]):new Ke([[e]],og)}function ow(e){let n;for(;n=e.sourceEvent;)e=n;return e}function cn(e,n){if(e=ow(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var r=t.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect();return[e.clientX-i.left-n.clientLeft,e.clientY-i.top-n.clientTop]}}return[e.pageX,e.pageY]}const sw={passive:!1},ki={capture:!0,passive:!1};function El(e){e.stopImmediatePropagation()}function fr(e){e.preventDefault(),e.stopImmediatePropagation()}function sg(e){var n=e.document.documentElement,t=Ye(e).on("dragstart.drag",fr,ki);"onselectstart"in n?t.on("selectstart.drag",fr,ki):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function lg(e,n){var t=e.document.documentElement,r=Ye(e).on("dragstart.drag",null);n&&(r.on("click.drag",fr,ki),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in t?r.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}const fo=e=>()=>e;function Mu(e,{sourceEvent:n,subject:t,target:r,identifier:i,active:o,x:s,y:l,dx:u,dy:a,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:t,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:u,enumerable:!0,configurable:!0},dy:{value:a,enumerable:!0,configurable:!0},_:{value:d}})}Mu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function lw(e){return!e.ctrlKey&&!e.button}function uw(){return this.parentNode}function aw(e,n){return n??{x:e.x,y:e.y}}function cw(){return navigator.maxTouchPoints||"ontouchstart"in this}function ug(){var e=lw,n=uw,t=aw,r=cw,i={},o=$s("start","drag","end"),s=0,l,u,a,d,c=0;function f(x){x.on("mousedown.drag",m).filter(r).on("touchstart.drag",w).on("touchmove.drag",p,sw).on("touchend.drag touchcancel.drag",g).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(x,N){if(!(d||!e.call(this,x,N))){var S=h(this,n.call(this,x,N),x,N,"mouse");S&&(Ye(x.view).on("mousemove.drag",y,ki).on("mouseup.drag",v,ki),sg(x.view),El(x),a=!1,l=x.clientX,u=x.clientY,S("start",x))}}function y(x){if(fr(x),!a){var N=x.clientX-l,S=x.clientY-u;a=N*N+S*S>c}i.mouse("drag",x)}function v(x){Ye(x.view).on("mousemove.drag mouseup.drag",null),lg(x.view,a),fr(x),i.mouse("end",x)}function w(x,N){if(e.call(this,x,N)){var S=x.changedTouches,A=n.call(this,x,N),L=S.length,P,j;for(P=0;P<L;++P)(j=h(this,A,x,N,S[P].identifier,S[P]))&&(El(x),j("start",x,S[P]))}}function p(x){var N=x.changedTouches,S=N.length,A,L;for(A=0;A<S;++A)(L=i[N[A].identifier])&&(fr(x),L("drag",x,N[A]))}function g(x){var N=x.changedTouches,S=N.length,A,L;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),A=0;A<S;++A)(L=i[N[A].identifier])&&(El(x),L("end",x,N[A]))}function h(x,N,S,A,L,P){var j=o.copy(),M=cn(P||S,N),$,H,E;if((E=t.call(x,new Mu("beforestart",{sourceEvent:S,target:f,identifier:L,active:s,x:M[0],y:M[1],dx:0,dy:0,dispatch:j}),A))!=null)return $=E.x-M[0]||0,H=E.y-M[1]||0,function z(I,R,k){var C=M,T;switch(I){case"start":i[L]=z,T=s++;break;case"end":delete i[L],--s;case"drag":M=cn(k||R,N),T=s;break}j.call(I,x,new Mu(I,{sourceEvent:R,subject:E,target:f,identifier:L,active:T,x:M[0]+$,y:M[1]+H,dx:M[0]-C[0],dy:M[1]-C[1],dispatch:j}),A)}}return f.filter=function(x){return arguments.length?(e=typeof x=="function"?x:fo(!!x),f):e},f.container=function(x){return arguments.length?(n=typeof x=="function"?x:fo(x),f):n},f.subject=function(x){return arguments.length?(t=typeof x=="function"?x:fo(x),f):t},f.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:fo(!!x),f):r},f.on=function(){var x=o.on.apply(o,arguments);return x===o?f:x},f.clickDistance=function(x){return arguments.length?(c=(x=+x)*x,f):Math.sqrt(c)},f}function Ha(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function ag(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function Bi(){}var Ci=.7,as=1/Ci,dr="\\s*([+-]?\\d+)\\s*",Ai="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",kn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",fw=/^#([0-9a-f]{3,8})$/,dw=new RegExp(`^rgb\\(${dr},${dr},${dr}\\)$`),hw=new RegExp(`^rgb\\(${kn},${kn},${kn}\\)$`),pw=new RegExp(`^rgba\\(${dr},${dr},${dr},${Ai}\\)$`),gw=new RegExp(`^rgba\\(${kn},${kn},${kn},${Ai}\\)$`),mw=new RegExp(`^hsl\\(${Ai},${kn},${kn}\\)$`),yw=new RegExp(`^hsla\\(${Ai},${kn},${kn},${Ai}\\)$`),Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ha(Bi,Rt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:Af,formatHex:Af,formatHex8:vw,formatHsl:xw,formatRgb:If,toString:If});function Af(){return this.rgb().formatHex()}function vw(){return this.rgb().formatHex8()}function xw(){return cg(this).formatHsl()}function If(){return this.rgb().formatRgb()}function Rt(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=fw.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?Lf(n):t===3?new Be(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?ho(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?ho(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=dw.exec(e))?new Be(n[1],n[2],n[3],1):(n=hw.exec(e))?new Be(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=pw.exec(e))?ho(n[1],n[2],n[3],n[4]):(n=gw.exec(e))?ho(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=mw.exec(e))?Tf(n[1],n[2]/100,n[3]/100,1):(n=yw.exec(e))?Tf(n[1],n[2]/100,n[3]/100,n[4]):Cf.hasOwnProperty(e)?Lf(Cf[e]):e==="transparent"?new Be(NaN,NaN,NaN,0):null}function Lf(e){return new Be(e>>16&255,e>>8&255,e&255,1)}function ho(e,n,t,r){return r<=0&&(e=n=t=NaN),new Be(e,n,t,r)}function ww(e){return e instanceof Bi||(e=Rt(e)),e?(e=e.rgb(),new Be(e.r,e.g,e.b,e.opacity)):new Be}function Pu(e,n,t,r){return arguments.length===1?ww(e):new Be(e,n,t,r??1)}function Be(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}Ha(Be,Pu,ag(Bi,{brighter(e){return e=e==null?as:Math.pow(as,e),new Be(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Ci:Math.pow(Ci,e),new Be(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Be(It(this.r),It(this.g),It(this.b),cs(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Mf,formatHex:Mf,formatHex8:_w,formatRgb:Pf,toString:Pf}));function Mf(){return`#${kt(this.r)}${kt(this.g)}${kt(this.b)}`}function _w(){return`#${kt(this.r)}${kt(this.g)}${kt(this.b)}${kt((isNaN(this.opacity)?1:this.opacity)*255)}`}function Pf(){const e=cs(this.opacity);return`${e===1?"rgb(":"rgba("}${It(this.r)}, ${It(this.g)}, ${It(this.b)}${e===1?")":`, ${e})`}`}function cs(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function It(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function kt(e){return e=It(e),(e<16?"0":"")+e.toString(16)}function Tf(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new dn(e,n,t,r)}function cg(e){if(e instanceof dn)return new dn(e.h,e.s,e.l,e.opacity);if(e instanceof Bi||(e=Rt(e)),!e)return new dn;if(e instanceof dn)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,i=Math.min(n,t,r),o=Math.max(n,t,r),s=NaN,l=o-i,u=(o+i)/2;return l?(n===o?s=(t-r)/l+(t<r)*6:t===o?s=(r-n)/l+2:s=(n-t)/l+4,l/=u<.5?o+i:2-o-i,s*=60):l=u>0&&u<1?0:s,new dn(s,l,u,e.opacity)}function Nw(e,n,t,r){return arguments.length===1?cg(e):new dn(e,n,t,r??1)}function dn(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}Ha(dn,Nw,ag(Bi,{brighter(e){return e=e==null?as:Math.pow(as,e),new dn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Ci:Math.pow(Ci,e),new dn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,i=2*t-r;return new Be(kl(e>=240?e-240:e+120,i,r),kl(e,i,r),kl(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new dn(zf(this.h),po(this.s),po(this.l),cs(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=cs(this.opacity);return`${e===1?"hsl(":"hsla("}${zf(this.h)}, ${po(this.s)*100}%, ${po(this.l)*100}%${e===1?")":`, ${e})`}`}}));function zf(e){return e=(e||0)%360,e<0?e+360:e}function po(e){return Math.max(0,Math.min(1,e||0))}function kl(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const Ba=e=>()=>e;function Sw(e,n){return function(t){return e+t*n}}function Ew(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function kw(e){return(e=+e)==1?fg:function(n,t){return t-n?Ew(n,t,e):Ba(isNaN(n)?t:n)}}function fg(e,n){var t=n-e;return t?Sw(e,t):Ba(isNaN(e)?n:e)}const fs=function e(n){var t=kw(n);function r(i,o){var s=t((i=Pu(i)).r,(o=Pu(o)).r),l=t(i.g,o.g),u=t(i.b,o.b),a=fg(i.opacity,o.opacity);return function(d){return i.r=s(d),i.g=l(d),i.b=u(d),i.opacity=a(d),i+""}}return r.gamma=e,r}(1);function Cw(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),i;return function(o){for(i=0;i<t;++i)r[i]=e[i]*(1-o)+n[i]*o;return r}}function Aw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Iw(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,i=new Array(r),o=new Array(t),s;for(s=0;s<r;++s)i[s]=si(e[s],n[s]);for(;s<t;++s)o[s]=n[s];return function(l){for(s=0;s<r;++s)o[s]=i[s](l);return o}}function Lw(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function _n(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function Mw(e,n){var t={},r={},i;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in e?t[i]=si(e[i],n[i]):r[i]=n[i];return function(o){for(i in t)r[i]=t[i](o);return r}}var Tu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cl=new RegExp(Tu.source,"g");function Pw(e){return function(){return e}}function Tw(e){return function(n){return e(n)+""}}function dg(e,n){var t=Tu.lastIndex=Cl.lastIndex=0,r,i,o,s=-1,l=[],u=[];for(e=e+"",n=n+"";(r=Tu.exec(e))&&(i=Cl.exec(n));)(o=i.index)>t&&(o=n.slice(t,o),l[s]?l[s]+=o:l[++s]=o),(r=r[0])===(i=i[0])?l[s]?l[s]+=i:l[++s]=i:(l[++s]=null,u.push({i:s,x:_n(r,i)})),t=Cl.lastIndex;return t<n.length&&(o=n.slice(t),l[s]?l[s]+=o:l[++s]=o),l.length<2?u[0]?Tw(u[0].x):Pw(n):(n=u.length,function(a){for(var d=0,c;d<n;++d)l[(c=u[d]).i]=c.x(a);return l.join("")})}function si(e,n){var t=typeof n,r;return n==null||t==="boolean"?Ba(n):(t==="number"?_n:t==="string"?(r=Rt(n))?(n=r,fs):dg:n instanceof Rt?fs:n instanceof Date?Lw:Aw(n)?Cw:Array.isArray(n)?Iw:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?Mw:_n)(e,n)}var Of=180/Math.PI,zu={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function hg(e,n,t,r,i,o){var s,l,u;return(s=Math.sqrt(e*e+n*n))&&(e/=s,n/=s),(u=e*t+n*r)&&(t-=e*u,r-=n*u),(l=Math.sqrt(t*t+r*r))&&(t/=l,r/=l,u/=l),e*r<n*t&&(e=-e,n=-n,u=-u,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(n,e)*Of,skewX:Math.atan(u)*Of,scaleX:s,scaleY:l}}var go;function zw(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?zu:hg(n.a,n.b,n.c,n.d,n.e,n.f)}function Ow(e){return e==null||(go||(go=document.createElementNS("http://www.w3.org/2000/svg","g")),go.setAttribute("transform",e),!(e=go.transform.baseVal.consolidate()))?zu:(e=e.matrix,hg(e.a,e.b,e.c,e.d,e.e,e.f))}function pg(e,n,t,r){function i(a){return a.length?a.pop()+" ":""}function o(a,d,c,f,m,y){if(a!==c||d!==f){var v=m.push("translate(",null,n,null,t);y.push({i:v-4,x:_n(a,c)},{i:v-2,x:_n(d,f)})}else(c||f)&&m.push("translate("+c+n+f+t)}function s(a,d,c,f){a!==d?(a-d>180?d+=360:d-a>180&&(a+=360),f.push({i:c.push(i(c)+"rotate(",null,r)-2,x:_n(a,d)})):d&&c.push(i(c)+"rotate("+d+r)}function l(a,d,c,f){a!==d?f.push({i:c.push(i(c)+"skewX(",null,r)-2,x:_n(a,d)}):d&&c.push(i(c)+"skewX("+d+r)}function u(a,d,c,f,m,y){if(a!==c||d!==f){var v=m.push(i(m)+"scale(",null,",",null,")");y.push({i:v-4,x:_n(a,c)},{i:v-2,x:_n(d,f)})}else(c!==1||f!==1)&&m.push(i(m)+"scale("+c+","+f+")")}return function(a,d){var c=[],f=[];return a=e(a),d=e(d),o(a.translateX,a.translateY,d.translateX,d.translateY,c,f),s(a.rotate,d.rotate,c,f),l(a.skewX,d.skewX,c,f),u(a.scaleX,a.scaleY,d.scaleX,d.scaleY,c,f),a=d=null,function(m){for(var y=-1,v=f.length,w;++y<v;)c[(w=f[y]).i]=w.x(m);return c.join("")}}}var Rw=pg(zw,"px, ","px)","deg)"),$w=pg(Ow,", ",")",")"),Dw=1e-12;function Rf(e){return((e=Math.exp(e))+1/e)/2}function jw(e){return((e=Math.exp(e))-1/e)/2}function Fw(e){return((e=Math.exp(2*e))-1)/(e+1)}const Oo=function e(n,t,r){function i(o,s){var l=o[0],u=o[1],a=o[2],d=s[0],c=s[1],f=s[2],m=d-l,y=c-u,v=m*m+y*y,w,p;if(v<Dw)p=Math.log(f/a)/n,w=function(A){return[l+A*m,u+A*y,a*Math.exp(n*A*p)]};else{var g=Math.sqrt(v),h=(f*f-a*a+r*v)/(2*a*t*g),x=(f*f-a*a-r*v)/(2*f*t*g),N=Math.log(Math.sqrt(h*h+1)-h),S=Math.log(Math.sqrt(x*x+1)-x);p=(S-N)/n,w=function(A){var L=A*p,P=Rf(N),j=a/(t*g)*(P*Fw(n*L+N)-jw(N));return[l+j*m,u+j*y,a*P/Rf(n*L+N)]}}return w.duration=p*1e3*n/Math.SQRT2,w}return i.rho=function(o){var s=Math.max(.001,+o),l=s*s,u=l*l;return e(s,l,u)},i}(Math.SQRT2,2,4);var _r=0,Gr=0,br=0,gg=1e3,ds,Kr,hs=0,$t=0,js=0,Ii=typeof performance=="object"&&performance.now?performance:Date,mg=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Va(){return $t||(mg(Hw),$t=Ii.now()+js)}function Hw(){$t=0}function ps(){this._call=this._time=this._next=null}ps.prototype=yg.prototype={constructor:ps,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?Va():+t)+(n==null?0:+n),!this._next&&Kr!==this&&(Kr?Kr._next=this:ds=this,Kr=this),this._call=e,this._time=t,Ou()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ou())}};function yg(e,n,t){var r=new ps;return r.restart(e,n,t),r}function Bw(){Va(),++_r;for(var e=ds,n;e;)(n=$t-e._time)>=0&&e._call.call(void 0,n),e=e._next;--_r}function $f(){$t=(hs=Ii.now())+js,_r=Gr=0;try{Bw()}finally{_r=0,bw(),$t=0}}function Vw(){var e=Ii.now(),n=e-hs;n>gg&&(js-=n,hs=e)}function bw(){for(var e,n=ds,t,r=1/0;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:ds=t);Kr=e,Ou(r)}function Ou(e){if(!_r){Gr&&(Gr=clearTimeout(Gr));var n=e-$t;n>24?(e<1/0&&(Gr=setTimeout($f,e-Ii.now()-js)),br&&(br=clearInterval(br))):(br||(hs=Ii.now(),br=setInterval(Vw,gg)),_r=1,mg($f))}}function Df(e,n,t){var r=new ps;return n=n==null?0:+n,r.restart(i=>{r.stop(),e(i+n)},n,t),r}var Uw=$s("start","end","cancel","interrupt"),Ww=[],vg=0,jf=1,Ru=2,Ro=3,Ff=4,$u=5,$o=6;function Fs(e,n,t,r,i,o){var s=e.__transition;if(!s)e.__transition={};else if(t in s)return;Yw(e,t,{name:n,index:r,group:i,on:Uw,tween:Ww,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:vg})}function ba(e,n){var t=vn(e,n);if(t.state>vg)throw new Error("too late; already scheduled");return t}function An(e,n){var t=vn(e,n);if(t.state>Ro)throw new Error("too late; already running");return t}function vn(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function Yw(e,n,t){var r=e.__transition,i;r[n]=t,t.timer=yg(o,0,t.time);function o(a){t.state=jf,t.timer.restart(s,t.delay,t.time),t.delay<=a&&s(a-t.delay)}function s(a){var d,c,f,m;if(t.state!==jf)return u();for(d in r)if(m=r[d],m.name===t.name){if(m.state===Ro)return Df(s);m.state===Ff?(m.state=$o,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete r[d]):+d<n&&(m.state=$o,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete r[d])}if(Df(function(){t.state===Ro&&(t.state=Ff,t.timer.restart(l,t.delay,t.time),l(a))}),t.state=Ru,t.on.call("start",e,e.__data__,t.index,t.group),t.state===Ru){for(t.state=Ro,i=new Array(f=t.tween.length),d=0,c=-1;d<f;++d)(m=t.tween[d].value.call(e,e.__data__,t.index,t.group))&&(i[++c]=m);i.length=c+1}}function l(a){for(var d=a<t.duration?t.ease.call(null,a/t.duration):(t.timer.restart(u),t.state=$u,1),c=-1,f=i.length;++c<f;)i[c].call(e,d);t.state===$u&&(t.on.call("end",e,e.__data__,t.index,t.group),u())}function u(){t.state=$o,t.timer.stop(),delete r[n];for(var a in r)return;delete e.__transition}}function Do(e,n){var t=e.__transition,r,i,o=!0,s;if(t){n=n==null?null:n+"";for(s in t){if((r=t[s]).name!==n){o=!1;continue}i=r.state>Ru&&r.state<$u,r.state=$o,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete t[s]}o&&delete e.__transition}}function Xw(e){return this.each(function(){Do(this,e)})}function Qw(e,n){var t,r;return function(){var i=An(this,e),o=i.tween;if(o!==t){r=t=o;for(var s=0,l=r.length;s<l;++s)if(r[s].name===n){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function Gw(e,n,t){var r,i;if(typeof t!="function")throw new Error;return function(){var o=An(this,e),s=o.tween;if(s!==r){i=(r=s).slice();for(var l={name:n,value:t},u=0,a=i.length;u<a;++u)if(i[u].name===n){i[u]=l;break}u===a&&i.push(l)}o.tween=i}}function Kw(e,n){var t=this._id;if(e+="",arguments.length<2){for(var r=vn(this.node(),t).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===e)return s.value;return null}return this.each((n==null?Qw:Gw)(t,e,n))}function Ua(e,n,t){var r=e._id;return e.each(function(){var i=An(this,r);(i.value||(i.value={}))[n]=t.apply(this,arguments)}),function(i){return vn(i,r).value[n]}}function xg(e,n){var t;return(typeof n=="number"?_n:n instanceof Rt?fs:(t=Rt(n))?(n=t,fs):dg)(e,n)}function Zw(e){return function(){this.removeAttribute(e)}}function qw(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Jw(e,n,t){var r,i=t+"",o;return function(){var s=this.getAttribute(e);return s===i?null:s===r?o:o=n(r=s,t)}}function e_(e,n,t){var r,i=t+"",o;return function(){var s=this.getAttributeNS(e.space,e.local);return s===i?null:s===r?o:o=n(r=s,t)}}function n_(e,n,t){var r,i,o;return function(){var s,l=t(this),u;return l==null?void this.removeAttribute(e):(s=this.getAttribute(e),u=l+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,l)))}}function t_(e,n,t){var r,i,o;return function(){var s,l=t(this),u;return l==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),u=l+"",s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,l)))}}function r_(e,n){var t=Ds(e),r=t==="transform"?$w:xg;return this.attrTween(e,typeof n=="function"?(t.local?t_:n_)(t,r,Ua(this,"attr."+e,n)):n==null?(t.local?qw:Zw)(t):(t.local?e_:Jw)(t,r,n))}function i_(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function o_(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function s_(e,n){var t,r;function i(){var o=n.apply(this,arguments);return o!==r&&(t=(r=o)&&o_(e,o)),t}return i._value=n,i}function l_(e,n){var t,r;function i(){var o=n.apply(this,arguments);return o!==r&&(t=(r=o)&&i_(e,o)),t}return i._value=n,i}function u_(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var r=Ds(e);return this.tween(t,(r.local?s_:l_)(r,n))}function a_(e,n){return function(){ba(this,e).delay=+n.apply(this,arguments)}}function c_(e,n){return n=+n,function(){ba(this,e).delay=n}}function f_(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?a_:c_)(n,e)):vn(this.node(),n).delay}function d_(e,n){return function(){An(this,e).duration=+n.apply(this,arguments)}}function h_(e,n){return n=+n,function(){An(this,e).duration=n}}function p_(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?d_:h_)(n,e)):vn(this.node(),n).duration}function g_(e,n){if(typeof n!="function")throw new Error;return function(){An(this,e).ease=n}}function m_(e){var n=this._id;return arguments.length?this.each(g_(n,e)):vn(this.node(),n).ease}function y_(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;An(this,e).ease=t}}function v_(e){if(typeof e!="function")throw new Error;return this.each(y_(this._id,e))}function x_(e){typeof e!="function"&&(e=Kp(e));for(var n=this._groups,t=n.length,r=new Array(t),i=0;i<t;++i)for(var o=n[i],s=o.length,l=r[i]=[],u,a=0;a<s;++a)(u=o[a])&&e.call(u,u.__data__,a,o)&&l.push(u);return new Hn(r,this._parents,this._name,this._id)}function w_(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,r=n.length,i=t.length,o=Math.min(r,i),s=new Array(r),l=0;l<o;++l)for(var u=n[l],a=t[l],d=u.length,c=s[l]=new Array(d),f,m=0;m<d;++m)(f=u[m]||a[m])&&(c[m]=f);for(;l<r;++l)s[l]=n[l];return new Hn(s,this._parents,this._name,this._id)}function __(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function N_(e,n,t){var r,i,o=__(n)?ba:An;return function(){var s=o(this,e),l=s.on;l!==r&&(i=(r=l).copy()).on(n,t),s.on=i}}function S_(e,n){var t=this._id;return arguments.length<2?vn(this.node(),t).on.on(e):this.each(N_(t,e,n))}function E_(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function k_(){return this.on("end.remove",E_(this._id))}function C_(e){var n=this._name,t=this._id;typeof e!="function"&&(e=ja(e));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var l=r[s],u=l.length,a=o[s]=new Array(u),d,c,f=0;f<u;++f)(d=l[f])&&(c=e.call(d,d.__data__,f,l))&&("__data__"in d&&(c.__data__=d.__data__),a[f]=c,Fs(a[f],n,t,f,a,vn(d,t)));return new Hn(o,this._parents,n,t)}function A_(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Gp(e));for(var r=this._groups,i=r.length,o=[],s=[],l=0;l<i;++l)for(var u=r[l],a=u.length,d,c=0;c<a;++c)if(d=u[c]){for(var f=e.call(d,d.__data__,c,u),m,y=vn(d,t),v=0,w=f.length;v<w;++v)(m=f[v])&&Fs(m,n,t,v,f,y);o.push(f),s.push(d)}return new Hn(o,s,n,t)}var I_=Hi.prototype.constructor;function L_(){return new I_(this._groups,this._parents)}function M_(e,n){var t,r,i;return function(){var o=wr(this,e),s=(this.style.removeProperty(e),wr(this,e));return o===s?null:o===t&&s===r?i:i=n(t=o,r=s)}}function wg(e){return function(){this.style.removeProperty(e)}}function P_(e,n,t){var r,i=t+"",o;return function(){var s=wr(this,e);return s===i?null:s===r?o:o=n(r=s,t)}}function T_(e,n,t){var r,i,o;return function(){var s=wr(this,e),l=t(this),u=l+"";return l==null&&(u=l=(this.style.removeProperty(e),wr(this,e))),s===u?null:s===r&&u===i?o:(i=u,o=n(r=s,l))}}function z_(e,n){var t,r,i,o="style."+n,s="end."+o,l;return function(){var u=An(this,e),a=u.on,d=u.value[o]==null?l||(l=wg(n)):void 0;(a!==t||i!==d)&&(r=(t=a).copy()).on(s,i=d),u.on=r}}function O_(e,n,t){var r=(e+="")=="transform"?Rw:xg;return n==null?this.styleTween(e,M_(e,r)).on("end.style."+e,wg(e)):typeof n=="function"?this.styleTween(e,T_(e,r,Ua(this,"style."+e,n))).each(z_(this._id,e)):this.styleTween(e,P_(e,r,n),t).on("end.style."+e,null)}function R_(e,n,t){return function(r){this.style.setProperty(e,n.call(this,r),t)}}function $_(e,n,t){var r,i;function o(){var s=n.apply(this,arguments);return s!==i&&(r=(i=s)&&R_(e,s,t)),r}return o._value=n,o}function D_(e,n,t){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,$_(e,n,t??""))}function j_(e){return function(){this.textContent=e}}function F_(e){return function(){var n=e(this);this.textContent=n??""}}function H_(e){return this.tween("text",typeof e=="function"?F_(Ua(this,"text",e)):j_(e==null?"":e+""))}function B_(e){return function(n){this.textContent=e.call(this,n)}}function V_(e){var n,t;function r(){var i=e.apply(this,arguments);return i!==t&&(n=(t=i)&&B_(i)),n}return r._value=e,r}function b_(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,V_(e))}function U_(){for(var e=this._name,n=this._id,t=_g(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],l=s.length,u,a=0;a<l;++a)if(u=s[a]){var d=vn(u,n);Fs(u,e,t,a,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new Hn(r,this._parents,e,t)}function W_(){var e,n,t=this,r=t._id,i=t.size();return new Promise(function(o,s){var l={value:s},u={value:function(){--i===0&&o()}};t.each(function(){var a=An(this,r),d=a.on;d!==e&&(n=(e=d).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(u)),a.on=n}),i===0&&o()})}var Y_=0;function Hn(e,n,t,r){this._groups=e,this._parents=n,this._name=t,this._id=r}function _g(){return++Y_}var Ln=Hi.prototype;Hn.prototype={constructor:Hn,select:C_,selectAll:A_,selectChild:Ln.selectChild,selectChildren:Ln.selectChildren,filter:x_,merge:w_,selection:L_,transition:U_,call:Ln.call,nodes:Ln.nodes,node:Ln.node,size:Ln.size,empty:Ln.empty,each:Ln.each,on:S_,attr:r_,attrTween:u_,style:O_,styleTween:D_,text:H_,textTween:b_,remove:k_,tween:Kw,delay:f_,duration:p_,ease:m_,easeVarying:v_,end:W_,[Symbol.iterator]:Ln[Symbol.iterator]};function X_(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var Q_={time:null,delay:0,duration:250,ease:X_};function G_(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function K_(e){var n,t;e instanceof Hn?(n=e._id,e=e._name):(n=_g(),(t=Q_).time=Va(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],l=s.length,u,a=0;a<l;++a)(u=s[a])&&Fs(u,e,n,a,s,t||G_(u,n));return new Hn(r,this._parents,e,n)}Hi.prototype.interrupt=Xw;Hi.prototype.transition=K_;const mo=e=>()=>e;function Z_(e,{sourceEvent:n,target:t,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function On(e,n,t){this.k=e,this.x=n,this.y=t}On.prototype={constructor:On,scale:function(e){return e===1?this:new On(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new On(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Hs=new On(1,0,0);Ng.prototype=On.prototype;function Ng(e){for(;!e.__zoom;)if(!(e=e.parentNode))return Hs;return e.__zoom}function Al(e){e.stopImmediatePropagation()}function Ur(e){e.preventDefault(),e.stopImmediatePropagation()}function q_(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function J_(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function Hf(){return this.__zoom||Hs}function eN(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function nN(){return navigator.maxTouchPoints||"ontouchstart"in this}function tN(e,n,t){var r=e.invertX(n[0][0])-t[0][0],i=e.invertX(n[1][0])-t[1][0],o=e.invertY(n[0][1])-t[0][1],s=e.invertY(n[1][1])-t[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function Sg(){var e=q_,n=J_,t=tN,r=eN,i=nN,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],l=250,u=Oo,a=$s("start","zoom","end"),d,c,f,m=500,y=150,v=0,w=10;function p(E){E.property("__zoom",Hf).on("wheel.zoom",L,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",j).filter(i).on("touchstart.zoom",M).on("touchmove.zoom",$).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,z,I,R){var k=E.selection?E.selection():E;k.property("__zoom",Hf),E!==k?N(E,z,I,R):k.interrupt().each(function(){S(this,arguments).event(R).start().zoom(null,typeof z=="function"?z.apply(this,arguments):z).end()})},p.scaleBy=function(E,z,I,R){p.scaleTo(E,function(){var k=this.__zoom.k,C=typeof z=="function"?z.apply(this,arguments):z;return k*C},I,R)},p.scaleTo=function(E,z,I,R){p.transform(E,function(){var k=n.apply(this,arguments),C=this.__zoom,T=I==null?x(k):typeof I=="function"?I.apply(this,arguments):I,F=C.invert(T),D=typeof z=="function"?z.apply(this,arguments):z;return t(h(g(C,D),T,F),k,s)},I,R)},p.translateBy=function(E,z,I,R){p.transform(E,function(){return t(this.__zoom.translate(typeof z=="function"?z.apply(this,arguments):z,typeof I=="function"?I.apply(this,arguments):I),n.apply(this,arguments),s)},null,R)},p.translateTo=function(E,z,I,R,k){p.transform(E,function(){var C=n.apply(this,arguments),T=this.__zoom,F=R==null?x(C):typeof R=="function"?R.apply(this,arguments):R;return t(Hs.translate(F[0],F[1]).scale(T.k).translate(typeof z=="function"?-z.apply(this,arguments):-z,typeof I=="function"?-I.apply(this,arguments):-I),C,s)},R,k)};function g(E,z){return z=Math.max(o[0],Math.min(o[1],z)),z===E.k?E:new On(z,E.x,E.y)}function h(E,z,I){var R=z[0]-I[0]*E.k,k=z[1]-I[1]*E.k;return R===E.x&&k===E.y?E:new On(E.k,R,k)}function x(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function N(E,z,I,R){E.on("start.zoom",function(){S(this,arguments).event(R).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(R).end()}).tween("zoom",function(){var k=this,C=arguments,T=S(k,C).event(R),F=n.apply(k,C),D=I==null?x(F):typeof I=="function"?I.apply(k,C):I,U=Math.max(F[1][0]-F[0][0],F[1][1]-F[0][1]),W=k.__zoom,K=typeof z=="function"?z.apply(k,C):z,Q=u(W.invert(D).concat(U/W.k),K.invert(D).concat(U/K.k));return function(Z){if(Z===1)Z=K;else{var b=Q(Z),J=U/b[2];Z=new On(J,D[0]-b[0]*J,D[1]-b[1]*J)}T.zoom(null,Z)}})}function S(E,z,I){return!I&&E.__zooming||new A(E,z)}function A(E,z){this.that=E,this.args=z,this.active=0,this.sourceEvent=null,this.extent=n.apply(E,z),this.taps=0}A.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,z){return this.mouse&&E!=="mouse"&&(this.mouse[1]=z.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=z.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=z.invert(this.touch1[0])),this.that.__zoom=z,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var z=Ye(this.that).datum();a.call(E,this.that,new Z_(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:a}),z)}};function L(E,...z){if(!e.apply(this,arguments))return;var I=S(this,z).event(E),R=this.__zoom,k=Math.max(o[0],Math.min(o[1],R.k*Math.pow(2,r.apply(this,arguments)))),C=cn(E);if(I.wheel)(I.mouse[0][0]!==C[0]||I.mouse[0][1]!==C[1])&&(I.mouse[1]=R.invert(I.mouse[0]=C)),clearTimeout(I.wheel);else{if(R.k===k)return;I.mouse=[C,R.invert(C)],Do(this),I.start()}Ur(E),I.wheel=setTimeout(T,y),I.zoom("mouse",t(h(g(R,k),I.mouse[0],I.mouse[1]),I.extent,s));function T(){I.wheel=null,I.end()}}function P(E,...z){if(f||!e.apply(this,arguments))return;var I=E.currentTarget,R=S(this,z,!0).event(E),k=Ye(E.view).on("mousemove.zoom",D,!0).on("mouseup.zoom",U,!0),C=cn(E,I),T=E.clientX,F=E.clientY;sg(E.view),Al(E),R.mouse=[C,this.__zoom.invert(C)],Do(this),R.start();function D(W){if(Ur(W),!R.moved){var K=W.clientX-T,Q=W.clientY-F;R.moved=K*K+Q*Q>v}R.event(W).zoom("mouse",t(h(R.that.__zoom,R.mouse[0]=cn(W,I),R.mouse[1]),R.extent,s))}function U(W){k.on("mousemove.zoom mouseup.zoom",null),lg(W.view,R.moved),Ur(W),R.event(W).end()}}function j(E,...z){if(e.apply(this,arguments)){var I=this.__zoom,R=cn(E.changedTouches?E.changedTouches[0]:E,this),k=I.invert(R),C=I.k*(E.shiftKey?.5:2),T=t(h(g(I,C),R,k),n.apply(this,z),s);Ur(E),l>0?Ye(this).transition().duration(l).call(N,T,R,E):Ye(this).call(p.transform,T,R,E)}}function M(E,...z){if(e.apply(this,arguments)){var I=E.touches,R=I.length,k=S(this,z,E.changedTouches.length===R).event(E),C,T,F,D;for(Al(E),T=0;T<R;++T)F=I[T],D=cn(F,this),D=[D,this.__zoom.invert(D),F.identifier],k.touch0?!k.touch1&&k.touch0[2]!==D[2]&&(k.touch1=D,k.taps=0):(k.touch0=D,C=!0,k.taps=1+!!d);d&&(d=clearTimeout(d)),C&&(k.taps<2&&(c=D[0],d=setTimeout(function(){d=null},m)),Do(this),k.start())}}function $(E,...z){if(this.__zooming){var I=S(this,z).event(E),R=E.changedTouches,k=R.length,C,T,F,D;for(Ur(E),C=0;C<k;++C)T=R[C],F=cn(T,this),I.touch0&&I.touch0[2]===T.identifier?I.touch0[0]=F:I.touch1&&I.touch1[2]===T.identifier&&(I.touch1[0]=F);if(T=I.that.__zoom,I.touch1){var U=I.touch0[0],W=I.touch0[1],K=I.touch1[0],Q=I.touch1[1],Z=(Z=K[0]-U[0])*Z+(Z=K[1]-U[1])*Z,b=(b=Q[0]-W[0])*b+(b=Q[1]-W[1])*b;T=g(T,Math.sqrt(Z/b)),F=[(U[0]+K[0])/2,(U[1]+K[1])/2],D=[(W[0]+Q[0])/2,(W[1]+Q[1])/2]}else if(I.touch0)F=I.touch0[0],D=I.touch0[1];else return;I.zoom("touch",t(h(T,F,D),I.extent,s))}}function H(E,...z){if(this.__zooming){var I=S(this,z).event(E),R=E.changedTouches,k=R.length,C,T;for(Al(E),f&&clearTimeout(f),f=setTimeout(function(){f=null},m),C=0;C<k;++C)T=R[C],I.touch0&&I.touch0[2]===T.identifier?delete I.touch0:I.touch1&&I.touch1[2]===T.identifier&&delete I.touch1;if(I.touch1&&!I.touch0&&(I.touch0=I.touch1,delete I.touch1),I.touch0)I.touch0[1]=this.__zoom.invert(I.touch0[0]);else if(I.end(),I.taps===2&&(T=cn(T,this),Math.hypot(c[0]-T[0],c[1]-T[1])<w)){var F=Ye(this).on("dblclick.zoom");F&&F.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(r=typeof E=="function"?E:mo(+E),p):r},p.filter=function(E){return arguments.length?(e=typeof E=="function"?E:mo(!!E),p):e},p.touchable=function(E){return arguments.length?(i=typeof E=="function"?E:mo(!!E),p):i},p.extent=function(E){return arguments.length?(n=typeof E=="function"?E:mo([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):n},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(t=E,p):t},p.duration=function(E){return arguments.length?(l=+E,p):l},p.interpolate=function(E){return arguments.length?(u=E,p):u},p.on=function(){var E=a.on.apply(a,arguments);return E===a?p:E},p.clickDistance=function(E){return arguments.length?(v=(E=+E)*E,p):Math.sqrt(v)},p.tapDistance=function(E){return arguments.length?(w=+E,p):w},p}const Cn={error001:()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The React Flow parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:n,sourceHandle:t,targetHandle:r})=>`Couldn't create edge for ${e} handle id: "${e==="source"?t:r}", edge id: ${n}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."},Li=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],Eg=["Enter"," ","Escape"],kg={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:n,y:t})=>`Moved selected node ${e}. New position, x: ${n}, y: ${t}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var Nr;(function(e){e.Strict="strict",e.Loose="loose"})(Nr||(Nr={}));var Lt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Lt||(Lt={}));var Mi;(function(e){e.Partial="partial",e.Full="full"})(Mi||(Mi={}));const Cg={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var Zn;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(Zn||(Zn={}));var gs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(gs||(gs={}));var q;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(q||(q={}));const Bf={[q.Left]:q.Right,[q.Right]:q.Left,[q.Top]:q.Bottom,[q.Bottom]:q.Top};function Ag(e){return e===null?null:e?"valid":"invalid"}const Ig=e=>"id"in e&&"source"in e&&"target"in e,rN=e=>"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),Wa=e=>"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),Vi=(e,n=[0,0])=>{const{width:t,height:r}=Vn(e),i=e.origin??n,o=t*i[0],s=r*i[1];return{x:e.position.x-o,y:e.position.y-s}},iN=(e,n={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};const t=e.reduce((r,i)=>{const o=typeof i=="string";let s=!n.nodeLookup&&!o?i:void 0;n.nodeLookup&&(s=o?n.nodeLookup.get(i):Wa(i)?i:n.nodeLookup.get(i.id));const l=s?ms(s,n.nodeOrigin):{x:0,y:0,x2:0,y2:0};return Bs(r,l)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return Vs(t)},bi=(e,n={})=>{let t={x:1/0,y:1/0,x2:-1/0,y2:-1/0},r=!1;return e.forEach(i=>{(n.filter===void 0||n.filter(i))&&(t=Bs(t,ms(i)),r=!0)}),r?Vs(t):{x:0,y:0,width:0,height:0}},Ya=(e,n,[t,r,i]=[0,0,1],o=!1,s=!1)=>{const l={...Wi(n,[t,r,i]),width:n.width/i,height:n.height/i},u=[];for(const a of e.values()){const{measured:d,selectable:c=!0,hidden:f=!1}=a;if(s&&!c||f)continue;const m=d.width??a.width??a.initialWidth??null,y=d.height??a.height??a.initialHeight??null,v=Pi(l,Er(a)),w=(m??0)*(y??0),p=o&&v>0;(!a.internals.handleBounds||p||v>=w||a.dragging)&&u.push(a)}return u},oN=(e,n)=>{const t=new Set;return e.forEach(r=>{t.add(r.id)}),n.filter(r=>t.has(r.source)||t.has(r.target))};function sN(e,n){const t=new Map,r=n!=null&&n.nodes?new Set(n.nodes.map(i=>i.id)):null;return e.forEach(i=>{i.measured.width&&i.measured.height&&((n==null?void 0:n.includeHiddenNodes)||!i.hidden)&&(!r||r.has(i.id))&&t.set(i.id,i)}),t}async function lN({nodes:e,width:n,height:t,panZoom:r,minZoom:i,maxZoom:o},s){if(e.size===0)return Promise.resolve(!0);const l=sN(e,s),u=bi(l),a=Xa(u,n,t,(s==null?void 0:s.minZoom)??i,(s==null?void 0:s.maxZoom)??o,(s==null?void 0:s.padding)??.1);return await r.setViewport(a,{duration:s==null?void 0:s.duration,ease:s==null?void 0:s.ease,interpolate:s==null?void 0:s.interpolate}),Promise.resolve(!0)}function Lg({nodeId:e,nextPosition:n,nodeLookup:t,nodeOrigin:r=[0,0],nodeExtent:i,onError:o}){const s=t.get(e),l=s.parentId?t.get(s.parentId):void 0,{x:u,y:a}=l?l.internals.positionAbsolute:{x:0,y:0},d=s.origin??r;let c=s.extent||i;if(s.extent==="parent"&&!s.expandParent)if(!l)o==null||o("005",Cn.error005());else{const m=l.measured.width,y=l.measured.height;m&&y&&(c=[[u,a],[u+m,a+y]])}else l&&kr(s.extent)&&(c=[[s.extent[0][0]+u,s.extent[0][1]+a],[s.extent[1][0]+u,s.extent[1][1]+a]]);const f=kr(c)?Dt(n,c,s.measured):n;return(s.measured.width===void 0||s.measured.height===void 0)&&(o==null||o("015",Cn.error015())),{position:{x:f.x-u+(s.measured.width??0)*d[0],y:f.y-a+(s.measured.height??0)*d[1]},positionAbsolute:f}}async function uN({nodesToRemove:e=[],edgesToRemove:n=[],nodes:t,edges:r,onBeforeDelete:i}){const o=new Set(e.map(f=>f.id)),s=[];for(const f of t){if(f.deletable===!1)continue;const m=o.has(f.id),y=!m&&f.parentId&&s.find(v=>v.id===f.parentId);(m||y)&&s.push(f)}const l=new Set(n.map(f=>f.id)),u=r.filter(f=>f.deletable!==!1),d=oN(s,u);for(const f of u)l.has(f.id)&&!d.find(y=>y.id===f.id)&&d.push(f);if(!i)return{edges:d,nodes:s};const c=await i({nodes:s,edges:d});return typeof c=="boolean"?c?{edges:d,nodes:s}:{edges:[],nodes:[]}:c}const Sr=(e,n=0,t=1)=>Math.min(Math.max(e,n),t),Dt=(e={x:0,y:0},n,t)=>({x:Sr(e.x,n[0][0],n[1][0]-((t==null?void 0:t.width)??0)),y:Sr(e.y,n[0][1],n[1][1]-((t==null?void 0:t.height)??0))});function Mg(e,n,t){const{width:r,height:i}=Vn(t),{x:o,y:s}=t.internals.positionAbsolute;return Dt(e,[[o,s],[o+r,s+i]],n)}const Vf=(e,n,t)=>e<n?Sr(Math.abs(e-n),1,n)/n:e>t?-Sr(Math.abs(e-t),1,n)/n:0,Pg=(e,n,t=15,r=40)=>{const i=Vf(e.x,r,n.width-r)*t,o=Vf(e.y,r,n.height-r)*t;return[i,o]},Bs=(e,n)=>({x:Math.min(e.x,n.x),y:Math.min(e.y,n.y),x2:Math.max(e.x2,n.x2),y2:Math.max(e.y2,n.y2)}),Du=({x:e,y:n,width:t,height:r})=>({x:e,y:n,x2:e+t,y2:n+r}),Vs=({x:e,y:n,x2:t,y2:r})=>({x:e,y:n,width:t-e,height:r-n}),Er=(e,n=[0,0])=>{var i,o;const{x:t,y:r}=Wa(e)?e.internals.positionAbsolute:Vi(e,n);return{x:t,y:r,width:((i=e.measured)==null?void 0:i.width)??e.width??e.initialWidth??0,height:((o=e.measured)==null?void 0:o.height)??e.height??e.initialHeight??0}},ms=(e,n=[0,0])=>{var i,o;const{x:t,y:r}=Wa(e)?e.internals.positionAbsolute:Vi(e,n);return{x:t,y:r,x2:t+(((i=e.measured)==null?void 0:i.width)??e.width??e.initialWidth??0),y2:r+(((o=e.measured)==null?void 0:o.height)??e.height??e.initialHeight??0)}},Tg=(e,n)=>Vs(Bs(Du(e),Du(n))),Pi=(e,n)=>{const t=Math.max(0,Math.min(e.x+e.width,n.x+n.width)-Math.max(e.x,n.x)),r=Math.max(0,Math.min(e.y+e.height,n.y+n.height)-Math.max(e.y,n.y));return Math.ceil(t*r)},bf=e=>hn(e.width)&&hn(e.height)&&hn(e.x)&&hn(e.y),hn=e=>!isNaN(e)&&isFinite(e),aN=(e,n)=>{},Ui=(e,n=[1,1])=>({x:n[0]*Math.round(e.x/n[0]),y:n[1]*Math.round(e.y/n[1])}),Wi=({x:e,y:n},[t,r,i],o=!1,s=[1,1])=>{const l={x:(e-t)/i,y:(n-r)/i};return o?Ui(l,s):l},ys=({x:e,y:n},[t,r,i])=>({x:e*i+t,y:n*i+r});function bt(e,n){if(typeof e=="number")return Math.floor((n-n/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){const t=parseFloat(e);if(!Number.isNaN(t))return Math.floor(t)}if(typeof e=="string"&&e.endsWith("%")){const t=parseFloat(e);if(!Number.isNaN(t))return Math.floor(n*t*.01)}return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function cN(e,n,t){if(typeof e=="string"||typeof e=="number"){const r=bt(e,t),i=bt(e,n);return{top:r,right:i,bottom:r,left:i,x:i*2,y:r*2}}if(typeof e=="object"){const r=bt(e.top??e.y??0,t),i=bt(e.bottom??e.y??0,t),o=bt(e.left??e.x??0,n),s=bt(e.right??e.x??0,n);return{top:r,right:s,bottom:i,left:o,x:o+s,y:r+i}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function fN(e,n,t,r,i,o){const{x:s,y:l}=ys(e,[n,t,r]),{x:u,y:a}=ys({x:e.x+e.width,y:e.y+e.height},[n,t,r]),d=i-u,c=o-a;return{left:Math.floor(s),top:Math.floor(l),right:Math.floor(d),bottom:Math.floor(c)}}const Xa=(e,n,t,r,i,o)=>{const s=cN(o,n,t),l=(n-s.x)/e.width,u=(t-s.y)/e.height,a=Math.min(l,u),d=Sr(a,r,i),c=e.x+e.width/2,f=e.y+e.height/2,m=n/2-c*d,y=t/2-f*d,v=fN(e,m,y,d,n,t),w={left:Math.min(v.left-s.left,0),top:Math.min(v.top-s.top,0),right:Math.min(v.right-s.right,0),bottom:Math.min(v.bottom-s.bottom,0)};return{x:m-w.left+w.right,y:y-w.top+w.bottom,zoom:d}},Ti=()=>{var e;return typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)==null?void 0:e.indexOf("Mac"))>=0};function kr(e){return e!=null&&e!=="parent"}function Vn(e){var n,t;return{width:((n=e.measured)==null?void 0:n.width)??e.width??e.initialWidth??0,height:((t=e.measured)==null?void 0:t.height)??e.height??e.initialHeight??0}}function zg(e){var n,t;return(((n=e.measured)==null?void 0:n.width)??e.width??e.initialWidth)!==void 0&&(((t=e.measured)==null?void 0:t.height)??e.height??e.initialHeight)!==void 0}function Og(e,n={width:0,height:0},t,r,i){const o={...e},s=r.get(t);if(s){const l=s.origin||i;o.x+=s.internals.positionAbsolute.x-(n.width??0)*l[0],o.y+=s.internals.positionAbsolute.y-(n.height??0)*l[1]}return o}function Uf(e,n){if(e.size!==n.size)return!1;for(const t of e)if(!n.has(t))return!1;return!0}function dN(){let e,n;return{promise:new Promise((r,i)=>{e=r,n=i}),resolve:e,reject:n}}function hN(e){return{...kg,...e||{}}}function li(e,{snapGrid:n=[0,0],snapToGrid:t=!1,transform:r,containerBounds:i}){const{x:o,y:s}=pn(e),l=Wi({x:o-((i==null?void 0:i.left)??0),y:s-((i==null?void 0:i.top)??0)},r),{x:u,y:a}=t?Ui(l,n):l;return{xSnapped:u,ySnapped:a,...l}}const Qa=e=>({width:e.offsetWidth,height:e.offsetHeight}),Rg=e=>{var n;return((n=e==null?void 0:e.getRootNode)==null?void 0:n.call(e))||(window==null?void 0:window.document)},pN=["INPUT","SELECT","TEXTAREA"];function $g(e){var r,i;const n=((i=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:i[0])||e.target;return(n==null?void 0:n.nodeType)!==1?!1:pN.includes(n.nodeName)||n.hasAttribute("contenteditable")||!!n.closest(".nokey")}const Dg=e=>"clientX"in e,pn=(e,n)=>{var o,s;const t=Dg(e),r=t?e.clientX:(o=e.touches)==null?void 0:o[0].clientX,i=t?e.clientY:(s=e.touches)==null?void 0:s[0].clientY;return{x:r-((n==null?void 0:n.left)??0),y:i-((n==null?void 0:n.top)??0)}},Wf=(e,n,t,r,i)=>{const o=n.querySelectorAll(`.${e}`);return!o||!o.length?null:Array.from(o).map(s=>{const l=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:i,position:s.getAttribute("data-handlepos"),x:(l.left-t.left)/r,y:(l.top-t.top)/r,...Qa(s)}})};function jg({sourceX:e,sourceY:n,targetX:t,targetY:r,sourceControlX:i,sourceControlY:o,targetControlX:s,targetControlY:l}){const u=e*.125+i*.375+s*.375+t*.125,a=n*.125+o*.375+l*.375+r*.125,d=Math.abs(u-e),c=Math.abs(a-n);return[u,a,d,c]}function yo(e,n){return e>=0?.5*e:n*25*Math.sqrt(-e)}function Yf({pos:e,x1:n,y1:t,x2:r,y2:i,c:o}){switch(e){case q.Left:return[n-yo(n-r,o),t];case q.Right:return[n+yo(r-n,o),t];case q.Top:return[n,t-yo(t-i,o)];case q.Bottom:return[n,t+yo(i-t,o)]}}function Fg({sourceX:e,sourceY:n,sourcePosition:t=q.Bottom,targetX:r,targetY:i,targetPosition:o=q.Top,curvature:s=.25}){const[l,u]=Yf({pos:t,x1:e,y1:n,x2:r,y2:i,c:s}),[a,d]=Yf({pos:o,x1:r,y1:i,x2:e,y2:n,c:s}),[c,f,m,y]=jg({sourceX:e,sourceY:n,targetX:r,targetY:i,sourceControlX:l,sourceControlY:u,targetControlX:a,targetControlY:d});return[`M${e},${n} C${l},${u} ${a},${d} ${r},${i}`,c,f,m,y]}function Hg({sourceX:e,sourceY:n,targetX:t,targetY:r}){const i=Math.abs(t-e)/2,o=t<e?t+i:t-i,s=Math.abs(r-n)/2,l=r<n?r+s:r-s;return[o,l,i,s]}function gN({sourceNode:e,targetNode:n,selected:t=!1,zIndex:r=0,elevateOnSelect:i=!1,zIndexMode:o="basic"}){if(o==="manual")return r;const s=i&&t?r+1e3:r,l=Math.max(e.parentId||i&&e.selected?e.internals.z:0,n.parentId||i&&n.selected?n.internals.z:0);return s+l}function mN({sourceNode:e,targetNode:n,width:t,height:r,transform:i}){const o=Bs(ms(e),ms(n));o.x===o.x2&&(o.x2+=1),o.y===o.y2&&(o.y2+=1);const s={x:-i[0]/i[2],y:-i[1]/i[2],width:t/i[2],height:r/i[2]};return Pi(s,Vs(o))>0}const yN=({source:e,sourceHandle:n,target:t,targetHandle:r})=>`xy-edge__${e}${n||""}-${t}${r||""}`,vN=(e,n)=>n.some(t=>t.source===e.source&&t.target===e.target&&(t.sourceHandle===e.sourceHandle||!t.sourceHandle&&!e.sourceHandle)&&(t.targetHandle===e.targetHandle||!t.targetHandle&&!e.targetHandle)),xN=(e,n,t={})=>{if(!e.source||!e.target)return n;const r=t.getEdgeId||yN;let i;return Ig(e)?i={...e}:i={...e,id:r(e)},vN(i,n)?n:(i.sourceHandle===null&&delete i.sourceHandle,i.targetHandle===null&&delete i.targetHandle,n.concat(i))};function Bg({sourceX:e,sourceY:n,targetX:t,targetY:r}){const[i,o,s,l]=Hg({sourceX:e,sourceY:n,targetX:t,targetY:r});return[`M ${e},${n}L ${t},${r}`,i,o,s,l]}const Xf={[q.Left]:{x:-1,y:0},[q.Right]:{x:1,y:0},[q.Top]:{x:0,y:-1},[q.Bottom]:{x:0,y:1}},wN=({source:e,sourcePosition:n=q.Bottom,target:t})=>n===q.Left||n===q.Right?e.x<t.x?{x:1,y:0}:{x:-1,y:0}:e.y<t.y?{x:0,y:1}:{x:0,y:-1},Qf=(e,n)=>Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2));function _N({source:e,sourcePosition:n=q.Bottom,target:t,targetPosition:r=q.Top,center:i,offset:o,stepPosition:s}){const l=Xf[n],u=Xf[r],a={x:e.x+l.x*o,y:e.y+l.y*o},d={x:t.x+u.x*o,y:t.y+u.y*o},c=wN({source:a,sourcePosition:n,target:d}),f=c.x!==0?"x":"y",m=c[f];let y=[],v,w;const p={x:0,y:0},g={x:0,y:0},[,,h,x]=Hg({sourceX:e.x,sourceY:e.y,targetX:t.x,targetY:t.y});if(l[f]*u[f]===-1){f==="x"?(v=i.x??a.x+(d.x-a.x)*s,w=i.y??(a.y+d.y)/2):(v=i.x??(a.x+d.x)/2,w=i.y??a.y+(d.y-a.y)*s);const L=[{x:v,y:a.y},{x:v,y:d.y}],P=[{x:a.x,y:w},{x:d.x,y:w}];l[f]===m?y=f==="x"?L:P:y=f==="x"?P:L}else{const L=[{x:a.x,y:d.y}],P=[{x:d.x,y:a.y}];if(f==="x"?y=l.x===m?P:L:y=l.y===m?L:P,n===r){const E=Math.abs(e[f]-t[f]);if(E<=o){const z=Math.min(o-1,o-E);l[f]===m?p[f]=(a[f]>e[f]?-1:1)*z:g[f]=(d[f]>t[f]?-1:1)*z}}if(n!==r){const E=f==="x"?"y":"x",z=l[f]===u[E],I=a[E]>d[E],R=a[E]<d[E];(l[f]===1&&(!z&&I||z&&R)||l[f]!==1&&(!z&&R||z&&I))&&(y=f==="x"?L:P)}const j={x:a.x+p.x,y:a.y+p.y},M={x:d.x+g.x,y:d.y+g.y},$=Math.max(Math.abs(j.x-y[0].x),Math.abs(M.x-y[0].x)),H=Math.max(Math.abs(j.y-y[0].y),Math.abs(M.y-y[0].y));$>=H?(v=(j.x+M.x)/2,w=y[0].y):(v=y[0].x,w=(j.y+M.y)/2)}const N={x:a.x+p.x,y:a.y+p.y},S={x:d.x+g.x,y:d.y+g.y};return[[e,...N.x!==y[0].x||N.y!==y[0].y?[N]:[],...y,...S.x!==y[y.length-1].x||S.y!==y[y.length-1].y?[S]:[],t],v,w,h,x]}function NN(e,n,t,r){const i=Math.min(Qf(e,n)/2,Qf(n,t)/2,r),{x:o,y:s}=n;if(e.x===o&&o===t.x||e.y===s&&s===t.y)return`L${o} ${s}`;if(e.y===s){const a=e.x<t.x?-1:1,d=e.y<t.y?1:-1;return`L ${o+i*a},${s}Q ${o},${s} ${o},${s+i*d}`}const l=e.x<t.x?1:-1,u=e.y<t.y?-1:1;return`L ${o},${s+i*u}Q ${o},${s} ${o+i*l},${s}`}function ju({sourceX:e,sourceY:n,sourcePosition:t=q.Bottom,targetX:r,targetY:i,targetPosition:o=q.Top,borderRadius:s=5,centerX:l,centerY:u,offset:a=20,stepPosition:d=.5}){const[c,f,m,y,v]=_N({source:{x:e,y:n},sourcePosition:t,target:{x:r,y:i},targetPosition:o,center:{x:l,y:u},offset:a,stepPosition:d});let w=`M${c[0].x} ${c[0].y}`;for(let p=1;p<c.length-1;p++)w+=NN(c[p-1],c[p],c[p+1],s);return w+=`L${c[c.length-1].x} ${c[c.length-1].y}`,[w,f,m,y,v]}function Gf(e){var n;return e&&!!(e.internals.handleBounds||(n=e.handles)!=null&&n.length)&&!!(e.measured.width||e.width||e.initialWidth)}function SN(e){var c;const{sourceNode:n,targetNode:t}=e;if(!Gf(n)||!Gf(t))return null;const r=n.internals.handleBounds||Kf(n.handles),i=t.internals.handleBounds||Kf(t.handles),o=Zf((r==null?void 0:r.source)??[],e.sourceHandle),s=Zf(e.connectionMode===Nr.Strict?(i==null?void 0:i.target)??[]:((i==null?void 0:i.target)??[]).concat((i==null?void 0:i.source)??[]),e.targetHandle);if(!o||!s)return(c=e.onError)==null||c.call(e,"008",Cn.error008(o?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;const l=(o==null?void 0:o.position)||q.Bottom,u=(s==null?void 0:s.position)||q.Top,a=jt(n,o,l),d=jt(t,s,u);return{sourceX:a.x,sourceY:a.y,targetX:d.x,targetY:d.y,sourcePosition:l,targetPosition:u}}function Kf(e){if(!e)return null;const n=[],t=[];for(const r of e)r.width=r.width??1,r.height=r.height??1,r.type==="source"?n.push(r):r.type==="target"&&t.push(r);return{source:n,target:t}}function jt(e,n,t=q.Left,r=!1){const i=((n==null?void 0:n.x)??0)+e.internals.positionAbsolute.x,o=((n==null?void 0:n.y)??0)+e.internals.positionAbsolute.y,{width:s,height:l}=n??Vn(e);if(r)return{x:i+s/2,y:o+l/2};switch((n==null?void 0:n.position)??t){case q.Top:return{x:i+s/2,y:o};case q.Right:return{x:i+s,y:o+l/2};case q.Bottom:return{x:i+s/2,y:o+l};case q.Left:return{x:i,y:o+l/2}}}function Zf(e,n){return e&&(n?e.find(t=>t.id===n):e[0])||null}function Fu(e,n){return e?typeof e=="string"?e:`${n?`${n}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`:""}function EN(e,{id:n,defaultColor:t,defaultMarkerStart:r,defaultMarkerEnd:i}){const o=new Set;return e.reduce((s,l)=>([l.markerStart||r,l.markerEnd||i].forEach(u=>{if(u&&typeof u=="object"){const a=Fu(u,n);o.has(a)||(s.push({id:a,color:u.color||t,...u}),o.add(a))}}),s),[]).sort((s,l)=>s.id.localeCompare(l.id))}const Vg=1e3,kN=10,Ga={nodeOrigin:[0,0],nodeExtent:Li,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},CN={...Ga,checkEquality:!0};function Ka(e,n){const t={...e};for(const r in n)n[r]!==void 0&&(t[r]=n[r]);return t}function AN(e,n,t){const r=Ka(Ga,t);for(const i of e.values())if(i.parentId)qa(i,e,n,r);else{const o=Vi(i,r.nodeOrigin),s=kr(i.extent)?i.extent:r.nodeExtent,l=Dt(o,s,Vn(i));i.internals.positionAbsolute=l}}function IN(e,n){if(!e.handles)return e.measured?n==null?void 0:n.internals.handleBounds:void 0;const t=[],r=[];for(const i of e.handles){const o={id:i.id,width:i.width??1,height:i.height??1,nodeId:e.id,x:i.x,y:i.y,position:i.position,type:i.type};i.type==="source"?t.push(o):i.type==="target"&&r.push(o)}return{source:t,target:r}}function Za(e){return e==="manual"}function Hu(e,n,t,r={}){var d,c;const i=Ka(CN,r),o={i:0},s=new Map(n),l=i!=null&&i.elevateNodesOnSelect&&!Za(i.zIndexMode)?Vg:0;let u=e.length>0,a=!1;n.clear(),t.clear();for(const f of e){let m=s.get(f.id);if(i.checkEquality&&f===(m==null?void 0:m.internals.userNode))n.set(f.id,m);else{const y=Vi(f,i.nodeOrigin),v=kr(f.extent)?f.extent:i.nodeExtent,w=Dt(y,v,Vn(f));m={...i.defaults,...f,measured:{width:(d=f.measured)==null?void 0:d.width,height:(c=f.measured)==null?void 0:c.height},internals:{positionAbsolute:w,handleBounds:IN(f,m),z:bg(f,l,i.zIndexMode),userNode:f}},n.set(f.id,m)}(m.measured===void 0||m.measured.width===void 0||m.measured.height===void 0)&&!m.hidden&&(u=!1),f.parentId&&qa(m,n,t,r,o),a||(a=f.selected??!1)}return{nodesInitialized:u,hasSelectedNodes:a}}function LN(e,n){if(!e.parentId)return;const t=n.get(e.parentId);t?t.set(e.id,e):n.set(e.parentId,new Map([[e.id,e]]))}function qa(e,n,t,r,i){const{elevateNodesOnSelect:o,nodeOrigin:s,nodeExtent:l,zIndexMode:u}=Ka(Ga,r),a=e.parentId,d=n.get(a);if(!d){console.warn(`Parent node ${a} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}LN(e,t),i&&!d.parentId&&d.internals.rootParentIndex===void 0&&u==="auto"&&(d.internals.rootParentIndex=++i.i,d.internals.z=d.internals.z+i.i*kN),i&&d.internals.rootParentIndex!==void 0&&(i.i=d.internals.rootParentIndex);const c=o&&!Za(u)?Vg:0,{x:f,y:m,z:y}=MN(e,d,s,l,c,u),{positionAbsolute:v}=e.internals,w=f!==v.x||m!==v.y;(w||y!==e.internals.z)&&n.set(e.id,{...e,internals:{...e.internals,positionAbsolute:w?{x:f,y:m}:v,z:y}})}function bg(e,n,t){const r=hn(e.zIndex)?e.zIndex:0;return Za(t)?r:r+(e.selected?n:0)}function MN(e,n,t,r,i,o){const{x:s,y:l}=n.internals.positionAbsolute,u=Vn(e),a=Vi(e,t),d=kr(e.extent)?Dt(a,e.extent,u):a;let c=Dt({x:s+d.x,y:l+d.y},r,u);e.extent==="parent"&&(c=Mg(c,u,n));const f=bg(e,i,o),m=n.internals.z??0;return{x:c.x,y:c.y,z:m>=f?m+1:f}}function Ja(e,n,t,r=[0,0]){var s;const i=[],o=new Map;for(const l of e){const u=n.get(l.parentId);if(!u)continue;const a=((s=o.get(l.parentId))==null?void 0:s.expandedRect)??Er(u),d=Tg(a,l.rect);o.set(l.parentId,{expandedRect:d,parent:u})}return o.size>0&&o.forEach(({expandedRect:l,parent:u},a)=>{var h;const d=u.internals.positionAbsolute,c=Vn(u),f=u.origin??r,m=l.x<d.x?Math.round(Math.abs(d.x-l.x)):0,y=l.y<d.y?Math.round(Math.abs(d.y-l.y)):0,v=Math.max(c.width,Math.round(l.width)),w=Math.max(c.height,Math.round(l.height)),p=(v-c.width)*f[0],g=(w-c.height)*f[1];(m>0||y>0||p||g)&&(i.push({id:a,type:"position",position:{x:u.position.x-m+p,y:u.position.y-y+g}}),(h=t.get(a))==null||h.forEach(x=>{e.some(N=>N.id===x.id)||i.push({id:x.id,type:"position",position:{x:x.position.x+m,y:x.position.y+y}})})),(c.width<l.width||c.height<l.height||m||y)&&i.push({id:a,type:"dimensions",setAttributes:!0,dimensions:{width:v+(m?f[0]*m-p:0),height:w+(y?f[1]*y-g:0)}})}),i}function PN(e,n,t,r,i,o,s){const l=r==null?void 0:r.querySelector(".xyflow__viewport");let u=!1;if(!l)return{changes:[],updatedInternals:u};const a=[],d=window.getComputedStyle(l),{m22:c}=new window.DOMMatrixReadOnly(d.transform),f=[];for(const m of e.values()){const y=n.get(m.id);if(!y)continue;if(y.hidden){n.set(y.id,{...y,internals:{...y.internals,handleBounds:void 0}}),u=!0;continue}const v=Qa(m.nodeElement),w=y.measured.width!==v.width||y.measured.height!==v.height;if(!!(v.width&&v.height&&(w||!y.internals.handleBounds||m.force))){const g=m.nodeElement.getBoundingClientRect(),h=kr(y.extent)?y.extent:o;let{positionAbsolute:x}=y.internals;y.parentId&&y.extent==="parent"?x=Mg(x,v,n.get(y.parentId)):h&&(x=Dt(x,h,v));const N={...y,measured:v,internals:{...y.internals,positionAbsolute:x,handleBounds:{source:Wf("source",m.nodeElement,g,c,y.id),target:Wf("target",m.nodeElement,g,c,y.id)}}};n.set(y.id,N),y.parentId&&qa(N,n,t,{nodeOrigin:i,zIndexMode:s}),u=!0,w&&(a.push({id:y.id,type:"dimensions",dimensions:v}),y.expandParent&&y.parentId&&f.push({id:y.id,parentId:y.parentId,rect:Er(N,i)}))}}if(f.length>0){const m=Ja(f,n,t,i);a.push(...m)}return{changes:a,updatedInternals:u}}async function TN({delta:e,panZoom:n,transform:t,translateExtent:r,width:i,height:o}){if(!n||!e.x&&!e.y)return Promise.resolve(!1);const s=await n.setViewportConstrained({x:t[0]+e.x,y:t[1]+e.y,zoom:t[2]},[[0,0],[i,o]],r),l=!!s&&(s.x!==t[0]||s.y!==t[1]||s.k!==t[2]);return Promise.resolve(l)}function qf(e,n,t,r,i,o){let s=i;const l=r.get(s)||new Map;r.set(s,l.set(t,n)),s=`${i}-${e}`;const u=r.get(s)||new Map;if(r.set(s,u.set(t,n)),o){s=`${i}-${e}-${o}`;const a=r.get(s)||new Map;r.set(s,a.set(t,n))}}function Ug(e,n,t){e.clear(),n.clear();for(const r of t){const{source:i,target:o,sourceHandle:s=null,targetHandle:l=null}=r,u={edgeId:r.id,source:i,target:o,sourceHandle:s,targetHandle:l},a=`${i}-${s}--${o}-${l}`,d=`${o}-${l}--${i}-${s}`;qf("source",u,d,e,i,s),qf("target",u,a,e,o,l),n.set(r.id,r)}}function Wg(e,n){if(!e.parentId)return!1;const t=n.get(e.parentId);return t?t.selected?!0:Wg(t,n):!1}function Jf(e,n,t){var i;let r=e;do{if((i=r==null?void 0:r.matches)!=null&&i.call(r,n))return!0;if(r===t)return!1;r=r==null?void 0:r.parentElement}while(r);return!1}function zN(e,n,t,r){const i=new Map;for(const[o,s]of e)if((s.selected||s.id===r)&&(!s.parentId||!Wg(s,e))&&(s.draggable||n&&typeof s.draggable>"u")){const l=e.get(o);l&&i.set(o,{id:o,position:l.position||{x:0,y:0},distance:{x:t.x-l.internals.positionAbsolute.x,y:t.y-l.internals.positionAbsolute.y},extent:l.extent,parentId:l.parentId,origin:l.origin,expandParent:l.expandParent,internals:{positionAbsolute:l.internals.positionAbsolute||{x:0,y:0}},measured:{width:l.measured.width??0,height:l.measured.height??0}})}return i}function Il({nodeId:e,dragItems:n,nodeLookup:t,dragging:r=!0}){var s,l,u;const i=[];for(const[a,d]of n){const c=(s=t.get(a))==null?void 0:s.internals.userNode;c&&i.push({...c,position:d.position,dragging:r})}if(!e)return[i[0],i];const o=(l=t.get(e))==null?void 0:l.internals.userNode;return[o?{...o,position:((u=n.get(e))==null?void 0:u.position)||o.position,dragging:r}:i[0],i]}function ON({dragItems:e,snapGrid:n,x:t,y:r}){const i=e.values().next().value;if(!i)return null;const o={x:t-i.distance.x,y:r-i.distance.y},s=Ui(o,n);return{x:s.x-o.x,y:s.y-o.y}}function RN({onNodeMouseDown:e,getStoreItems:n,onDragStart:t,onDrag:r,onDragStop:i}){let o={x:null,y:null},s=0,l=new Map,u=!1,a={x:0,y:0},d=null,c=!1,f=null,m=!1,y=!1,v=null;function w({noDragClassName:g,handleSelector:h,domNode:x,isSelectable:N,nodeId:S,nodeClickDistance:A=0}){f=Ye(x);function L({x:$,y:H}){const{nodeLookup:E,nodeExtent:z,snapGrid:I,snapToGrid:R,nodeOrigin:k,onNodeDrag:C,onSelectionDrag:T,onError:F,updateNodePositions:D}=n();o={x:$,y:H};let U=!1;const W=l.size>1,K=W&&z?Du(bi(l)):null,Q=W&&R?ON({dragItems:l,snapGrid:I,x:$,y:H}):null;for(const[Z,b]of l){if(!E.has(Z))continue;let J={x:$-b.distance.x,y:H-b.distance.y};R&&(J=Q?{x:Math.round(J.x+Q.x),y:Math.round(J.y+Q.y)}:Ui(J,I));let ne=null;if(W&&z&&!b.extent&&K){const{positionAbsolute:X}=b.internals,ee=X.x-K.x+z[0][0],ue=X.x+b.measured.width-K.x2+z[1][0],oe=X.y-K.y+z[0][1],Me=X.y+b.measured.height-K.y2+z[1][1];ne=[[ee,oe],[ue,Me]]}const{position:V,positionAbsolute:G}=Lg({nodeId:Z,nextPosition:J,nodeLookup:E,nodeExtent:ne||z,nodeOrigin:k,onError:F});U=U||b.position.x!==V.x||b.position.y!==V.y,b.position=V,b.internals.positionAbsolute=G}if(y=y||U,!!U&&(D(l,!0),v&&(r||C||!S&&T))){const[Z,b]=Il({nodeId:S,dragItems:l,nodeLookup:E});r==null||r(v,l,Z,b),C==null||C(v,Z,b),S||T==null||T(v,b)}}async function P(){if(!d)return;const{transform:$,panBy:H,autoPanSpeed:E,autoPanOnNodeDrag:z}=n();if(!z){u=!1,cancelAnimationFrame(s);return}const[I,R]=Pg(a,d,E);(I!==0||R!==0)&&(o.x=(o.x??0)-I/$[2],o.y=(o.y??0)-R/$[2],await H({x:I,y:R})&&L(o)),s=requestAnimationFrame(P)}function j($){var W;const{nodeLookup:H,multiSelectionActive:E,nodesDraggable:z,transform:I,snapGrid:R,snapToGrid:k,selectNodesOnDrag:C,onNodeDragStart:T,onSelectionDragStart:F,unselectNodesAndEdges:D}=n();c=!0,(!C||!N)&&!E&&S&&((W=H.get(S))!=null&&W.selected||D()),N&&C&&S&&(e==null||e(S));const U=li($.sourceEvent,{transform:I,snapGrid:R,snapToGrid:k,containerBounds:d});if(o=U,l=zN(H,z,U,S),l.size>0&&(t||T||!S&&F)){const[K,Q]=Il({nodeId:S,dragItems:l,nodeLookup:H});t==null||t($.sourceEvent,l,K,Q),T==null||T($.sourceEvent,K,Q),S||F==null||F($.sourceEvent,Q)}}const M=ug().clickDistance(A).on("start",$=>{const{domNode:H,nodeDragThreshold:E,transform:z,snapGrid:I,snapToGrid:R}=n();d=(H==null?void 0:H.getBoundingClientRect())||null,m=!1,y=!1,v=$.sourceEvent,E===0&&j($),o=li($.sourceEvent,{transform:z,snapGrid:I,snapToGrid:R,containerBounds:d}),a=pn($.sourceEvent,d)}).on("drag",$=>{const{autoPanOnNodeDrag:H,transform:E,snapGrid:z,snapToGrid:I,nodeDragThreshold:R,nodeLookup:k}=n(),C=li($.sourceEvent,{transform:E,snapGrid:z,snapToGrid:I,containerBounds:d});if(v=$.sourceEvent,($.sourceEvent.type==="touchmove"&&$.sourceEvent.touches.length>1||S&&!k.has(S))&&(m=!0),!m){if(!u&&H&&c&&(u=!0,P()),!c){const T=pn($.sourceEvent,d),F=T.x-a.x,D=T.y-a.y;Math.sqrt(F*F+D*D)>R&&j($)}(o.x!==C.xSnapped||o.y!==C.ySnapped)&&l&&c&&(a=pn($.sourceEvent,d),L(C))}}).on("end",$=>{if(!(!c||m)&&(u=!1,c=!1,cancelAnimationFrame(s),l.size>0)){const{nodeLookup:H,updateNodePositions:E,onNodeDragStop:z,onSelectionDragStop:I}=n();if(y&&(E(l,!1),y=!1),i||z||!S&&I){const[R,k]=Il({nodeId:S,dragItems:l,nodeLookup:H,dragging:!1});i==null||i($.sourceEvent,l,R,k),z==null||z($.sourceEvent,R,k),S||I==null||I($.sourceEvent,k)}}}).filter($=>{const H=$.target;return!$.button&&(!g||!Jf(H,`.${g}`,x))&&(!h||Jf(H,h,x))});f.call(M)}function p(){f==null||f.on(".drag",null)}return{update:w,destroy:p}}function $N(e,n,t){const r=[],i={x:e.x-t,y:e.y-t,width:t*2,height:t*2};for(const o of n.values())Pi(i,Er(o))>0&&r.push(o);return r}const DN=250;function jN(e,n,t,r){var l,u;let i=[],o=1/0;const s=$N(e,t,n+DN);for(const a of s){const d=[...((l=a.internals.handleBounds)==null?void 0:l.source)??[],...((u=a.internals.handleBounds)==null?void 0:u.target)??[]];for(const c of d){if(r.nodeId===c.nodeId&&r.type===c.type&&r.id===c.id)continue;const{x:f,y:m}=jt(a,c,c.position,!0),y=Math.sqrt(Math.pow(f-e.x,2)+Math.pow(m-e.y,2));y>n||(y<o?(i=[{...c,x:f,y:m}],o=y):y===o&&i.push({...c,x:f,y:m}))}}if(!i.length)return null;if(i.length>1){const a=r.type==="source"?"target":"source";return i.find(d=>d.type===a)??i[0]}return i[0]}function Yg(e,n,t,r,i,o=!1){var a,d,c;const s=r.get(e);if(!s)return null;const l=i==="strict"?(a=s.internals.handleBounds)==null?void 0:a[n]:[...((d=s.internals.handleBounds)==null?void 0:d.source)??[],...((c=s.internals.handleBounds)==null?void 0:c.target)??[]],u=(t?l==null?void 0:l.find(f=>f.id===t):l==null?void 0:l[0])??null;return u&&o?{...u,...jt(s,u,u.position,!0)}:u}function Xg(e,n){return e||(n!=null&&n.classList.contains("target")?"target":n!=null&&n.classList.contains("source")?"source":null)}function FN(e,n){let t=null;return n?t=!0:e&&!n&&(t=!1),t}const Qg=()=>!0;function HN(e,{connectionMode:n,connectionRadius:t,handleId:r,nodeId:i,edgeUpdaterType:o,isTarget:s,domNode:l,nodeLookup:u,lib:a,autoPanOnConnect:d,flowId:c,panBy:f,cancelConnection:m,onConnectStart:y,onConnect:v,onConnectEnd:w,isValidConnection:p=Qg,onReconnectEnd:g,updateConnection:h,getTransform:x,getFromHandle:N,autoPanSpeed:S,dragThreshold:A=1,handleDomNode:L}){const P=Rg(e.target);let j=0,M;const{x:$,y:H}=pn(e),E=Xg(o,L),z=l==null?void 0:l.getBoundingClientRect();let I=!1;if(!z||!E)return;const R=Yg(i,E,r,u,n);if(!R)return;let k=pn(e,z),C=!1,T=null,F=!1,D=null;function U(){if(!d||!z)return;const[V,G]=Pg(k,z,S);f({x:V,y:G}),j=requestAnimationFrame(U)}const W={...R,nodeId:i,type:E,position:R.position},K=u.get(i);let Z={inProgress:!0,isValid:null,from:jt(K,W,q.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:K,to:k,toHandle:null,toPosition:Bf[W.position],toNode:null,pointer:k};function b(){I=!0,h(Z),y==null||y(e,{nodeId:i,handleId:r,handleType:E})}A===0&&b();function J(V){if(!I){const{x:Me,y:bn}=pn(V),In=Me-$,mt=bn-H;if(!(In*In+mt*mt>A*A))return;b()}if(!N()||!W){ne(V);return}const G=x();k=pn(V,z),M=jN(Wi(k,G,!1,[1,1]),t,u,W),C||(U(),C=!0);const X=Gg(V,{handle:M,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:s?"target":"source",isValidConnection:p,doc:P,lib:a,flowId:c,nodeLookup:u});D=X.handleDomNode,T=X.connection,F=FN(!!M,X.isValid);const ee=u.get(i),ue=ee?jt(ee,W,q.Left,!0):Z.from,oe={...Z,from:ue,isValid:F,to:X.toHandle&&F?ys({x:X.toHandle.x,y:X.toHandle.y},G):k,toHandle:X.toHandle,toPosition:F&&X.toHandle?X.toHandle.position:Bf[W.position],toNode:X.toHandle?u.get(X.toHandle.nodeId):null,pointer:k};h(oe),Z=oe}function ne(V){if(!("touches"in V&&V.touches.length>0)){if(I){(M||D)&&T&&F&&(v==null||v(T));const{inProgress:G,...X}=Z,ee={...X,toPosition:Z.toHandle?Z.toPosition:null};w==null||w(V,ee),o&&(g==null||g(V,ee))}m(),cancelAnimationFrame(j),C=!1,F=!1,T=null,D=null,P.removeEventListener("mousemove",J),P.removeEventListener("mouseup",ne),P.removeEventListener("touchmove",J),P.removeEventListener("touchend",ne)}}P.addEventListener("mousemove",J),P.addEventListener("mouseup",ne),P.addEventListener("touchmove",J),P.addEventListener("touchend",ne)}function Gg(e,{handle:n,connectionMode:t,fromNodeId:r,fromHandleId:i,fromType:o,doc:s,lib:l,flowId:u,isValidConnection:a=Qg,nodeLookup:d}){const c=o==="target",f=n?s.querySelector(`.${l}-flow__handle[data-id="${u}-${n==null?void 0:n.nodeId}-${n==null?void 0:n.id}-${n==null?void 0:n.type}"]`):null,{x:m,y}=pn(e),v=s.elementFromPoint(m,y),w=v!=null&&v.classList.contains(`${l}-flow__handle`)?v:f,p={handleDomNode:w,isValid:!1,connection:null,toHandle:null};if(w){const g=Xg(void 0,w),h=w.getAttribute("data-nodeid"),x=w.getAttribute("data-handleid"),N=w.classList.contains("connectable"),S=w.classList.contains("connectableend");if(!h||!g)return p;const A={source:c?h:r,sourceHandle:c?x:i,target:c?r:h,targetHandle:c?i:x};p.connection=A;const P=N&&S&&(t===Nr.Strict?c&&g==="source"||!c&&g==="target":h!==r||x!==i);p.isValid=P&&a(A),p.toHandle=Yg(h,g,x,d,t,!0)}return p}const Bu={onPointerDown:HN,isValid:Gg};function BN({domNode:e,panZoom:n,getTransform:t,getViewScale:r}){const i=Ye(e);function o({translateExtent:l,width:u,height:a,zoomStep:d=1,pannable:c=!0,zoomable:f=!0,inversePan:m=!1}){const y=h=>{if(h.sourceEvent.type!=="wheel"||!n)return;const x=t(),N=h.sourceEvent.ctrlKey&&Ti()?10:1,S=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*d,A=x[2]*Math.pow(2,S*N);n.scaleTo(A)};let v=[0,0];const w=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(v=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},p=h=>{const x=t();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!n)return;const N=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],S=[N[0]-v[0],N[1]-v[1]];v=N;const A=r()*Math.max(x[2],Math.log(x[2]))*(m?-1:1),L={x:x[0]-S[0]*A,y:x[1]-S[1]*A},P=[[0,0],[u,a]];n.setViewportConstrained({x:L.x,y:L.y,zoom:x[2]},P,l)},g=Sg().on("start",w).on("zoom",c?p:null).on("zoom.wheel",f?y:null);i.call(g,{})}function s(){i.on("zoom",null)}return{update:o,destroy:s,pointer:cn}}const bs=e=>({x:e.x,y:e.y,zoom:e.k}),Ll=({x:e,y:n,zoom:t})=>Hs.translate(e,n).scale(t),rr=(e,n)=>e.target.closest(`.${n}`),Kg=(e,n)=>n===2&&Array.isArray(e)&&e.includes(2),VN=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,Ml=(e,n=0,t=VN,r=()=>{})=>{const i=typeof n=="number"&&n>0;return i||r(),i?e.transition().duration(n).ease(t).on("end",r):e},Zg=e=>{const n=e.ctrlKey&&Ti()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*n};function bN({zoomPanValues:e,noWheelClassName:n,d3Selection:t,d3Zoom:r,panOnScrollMode:i,panOnScrollSpeed:o,zoomOnPinch:s,onPanZoomStart:l,onPanZoom:u,onPanZoomEnd:a}){return d=>{if(rr(d,n))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();const c=t.property("__zoom").k||1;if(d.ctrlKey&&s){const w=cn(d),p=Zg(d),g=c*Math.pow(2,p);r.scaleTo(t,g,w,d);return}const f=d.deltaMode===1?20:1;let m=i===Lt.Vertical?0:d.deltaX*f,y=i===Lt.Horizontal?0:d.deltaY*f;!Ti()&&d.shiftKey&&i!==Lt.Vertical&&(m=d.deltaY*f,y=0),r.translateBy(t,-(m/c)*o,-(y/c)*o,{internal:!0});const v=bs(t.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?(u==null||u(d,v),e.panScrollTimeout=setTimeout(()=>{a==null||a(d,v),e.isPanScrolling=!1},150)):(e.isPanScrolling=!0,l==null||l(d,v))}}function UN({noWheelClassName:e,preventScrolling:n,d3ZoomHandler:t}){return function(r,i){const o=r.type==="wheel",s=!n&&o&&!r.ctrlKey,l=rr(r,e);if(r.ctrlKey&&o&&l&&r.preventDefault(),s||l)return null;r.preventDefault(),t.call(this,r,i)}}function WN({zoomPanValues:e,onDraggingChange:n,onPanZoomStart:t}){return r=>{var o,s,l;if((o=r.sourceEvent)!=null&&o.internal)return;const i=bs(r.transform);e.mouseButton=((s=r.sourceEvent)==null?void 0:s.button)||0,e.isZoomingOrPanning=!0,e.prevViewport=i,((l=r.sourceEvent)==null?void 0:l.type)==="mousedown"&&n(!0),t&&(t==null||t(r.sourceEvent,i))}}function YN({zoomPanValues:e,panOnDrag:n,onPaneContextMenu:t,onTransformChange:r,onPanZoom:i}){return o=>{var s,l;e.usedRightMouseButton=!!(t&&Kg(n,e.mouseButton??0)),(s=o.sourceEvent)!=null&&s.sync||r([o.transform.x,o.transform.y,o.transform.k]),i&&!((l=o.sourceEvent)!=null&&l.internal)&&(i==null||i(o.sourceEvent,bs(o.transform)))}}function XN({zoomPanValues:e,panOnDrag:n,panOnScroll:t,onDraggingChange:r,onPanZoomEnd:i,onPaneContextMenu:o}){return s=>{var l;if(!((l=s.sourceEvent)!=null&&l.internal)&&(e.isZoomingOrPanning=!1,o&&Kg(n,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&o(s.sourceEvent),e.usedRightMouseButton=!1,r(!1),i)){const u=bs(s.transform);e.prevViewport=u,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{i==null||i(s.sourceEvent,u)},t?150:0)}}}function QN({zoomActivationKeyPressed:e,zoomOnScroll:n,zoomOnPinch:t,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:o,userSelectionActive:s,noWheelClassName:l,noPanClassName:u,lib:a,connectionInProgress:d}){return c=>{var w;const f=e||n,m=t&&c.ctrlKey,y=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(rr(c,`${a}-flow__node`)||rr(c,`${a}-flow__edge`)))return!0;if(!r&&!f&&!i&&!o&&!t||s||d&&!y||rr(c,l)&&y||rr(c,u)&&(!y||i&&y&&!e)||!t&&c.ctrlKey&&y)return!1;if(!t&&c.type==="touchstart"&&((w=c.touches)==null?void 0:w.length)>1)return c.preventDefault(),!1;if(!f&&!i&&!m&&y||!r&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(r)&&!r.includes(c.button)&&c.type==="mousedown")return!1;const v=Array.isArray(r)&&r.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||y)&&v}}function GN({domNode:e,minZoom:n,maxZoom:t,translateExtent:r,viewport:i,onPanZoom:o,onPanZoomStart:s,onPanZoomEnd:l,onDraggingChange:u}){const a={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),c=Sg().scaleExtent([n,t]).translateExtent(r),f=Ye(e).call(c);g({x:i.x,y:i.y,zoom:Sr(i.zoom,n,t)},[[0,0],[d.width,d.height]],r);const m=f.on("wheel.zoom"),y=f.on("dblclick.zoom");c.wheelDelta(Zg);function v(M,$){return f?new Promise(H=>{c==null||c.interpolate(($==null?void 0:$.interpolate)==="linear"?si:Oo).transform(Ml(f,$==null?void 0:$.duration,$==null?void 0:$.ease,()=>H(!0)),M)}):Promise.resolve(!1)}function w({noWheelClassName:M,noPanClassName:$,onPaneContextMenu:H,userSelectionActive:E,panOnScroll:z,panOnDrag:I,panOnScrollMode:R,panOnScrollSpeed:k,preventScrolling:C,zoomOnPinch:T,zoomOnScroll:F,zoomOnDoubleClick:D,zoomActivationKeyPressed:U,lib:W,onTransformChange:K,connectionInProgress:Q,paneClickDistance:Z,selectionOnDrag:b}){E&&!a.isZoomingOrPanning&&p();const J=z&&!U&&!E;c.clickDistance(b?1/0:!hn(Z)||Z<0?0:Z);const ne=J?bN({zoomPanValues:a,noWheelClassName:M,d3Selection:f,d3Zoom:c,panOnScrollMode:R,panOnScrollSpeed:k,zoomOnPinch:T,onPanZoomStart:s,onPanZoom:o,onPanZoomEnd:l}):UN({noWheelClassName:M,preventScrolling:C,d3ZoomHandler:m});if(f.on("wheel.zoom",ne,{passive:!1}),!E){const G=WN({zoomPanValues:a,onDraggingChange:u,onPanZoomStart:s});c.on("start",G);const X=YN({zoomPanValues:a,panOnDrag:I,onPaneContextMenu:!!H,onPanZoom:o,onTransformChange:K});c.on("zoom",X);const ee=XN({zoomPanValues:a,panOnDrag:I,panOnScroll:z,onPaneContextMenu:H,onPanZoomEnd:l,onDraggingChange:u});c.on("end",ee)}const V=QN({zoomActivationKeyPressed:U,panOnDrag:I,zoomOnScroll:F,panOnScroll:z,zoomOnDoubleClick:D,zoomOnPinch:T,userSelectionActive:E,noPanClassName:$,noWheelClassName:M,lib:W,connectionInProgress:Q});c.filter(V),D?f.on("dblclick.zoom",y):f.on("dblclick.zoom",null)}function p(){c.on("zoom",null)}async function g(M,$,H){const E=Ll(M),z=c==null?void 0:c.constrain()(E,$,H);return z&&await v(z),new Promise(I=>I(z))}async function h(M,$){const H=Ll(M);return await v(H,$),new Promise(E=>E(H))}function x(M){if(f){const $=Ll(M),H=f.property("__zoom");(H.k!==M.zoom||H.x!==M.x||H.y!==M.y)&&(c==null||c.transform(f,$,null,{sync:!0}))}}function N(){const M=f?Ng(f.node()):{x:0,y:0,k:1};return{x:M.x,y:M.y,zoom:M.k}}function S(M,$){return f?new Promise(H=>{c==null||c.interpolate(($==null?void 0:$.interpolate)==="linear"?si:Oo).scaleTo(Ml(f,$==null?void 0:$.duration,$==null?void 0:$.ease,()=>H(!0)),M)}):Promise.resolve(!1)}function A(M,$){return f?new Promise(H=>{c==null||c.interpolate(($==null?void 0:$.interpolate)==="linear"?si:Oo).scaleBy(Ml(f,$==null?void 0:$.duration,$==null?void 0:$.ease,()=>H(!0)),M)}):Promise.resolve(!1)}function L(M){c==null||c.scaleExtent(M)}function P(M){c==null||c.translateExtent(M)}function j(M){const $=!hn(M)||M<0?0:M;c==null||c.clickDistance($)}return{update:w,destroy:p,setViewport:h,setViewportConstrained:g,getViewport:N,scaleTo:S,scaleBy:A,setScaleExtent:L,setTranslateExtent:P,syncViewport:x,setClickDistance:j}}var Cr;(function(e){e.Line="line",e.Handle="handle"})(Cr||(Cr={}));function KN({width:e,prevWidth:n,height:t,prevHeight:r,affectsX:i,affectsY:o}){const s=e-n,l=t-r,u=[s>0?1:s<0?-1:0,l>0?1:l<0?-1:0];return s&&i&&(u[0]=u[0]*-1),l&&o&&(u[1]=u[1]*-1),u}function ed(e){const n=e.includes("right")||e.includes("left"),t=e.includes("bottom")||e.includes("top"),r=e.includes("left"),i=e.includes("top");return{isHorizontal:n,isVertical:t,affectsX:r,affectsY:i}}function Wn(e,n){return Math.max(0,n-e)}function Yn(e,n){return Math.max(0,e-n)}function vo(e,n,t){return Math.max(0,n-e,e-t)}function nd(e,n){return e?!n:n}function ZN(e,n,t,r,i,o,s,l){let{affectsX:u,affectsY:a}=n;const{isHorizontal:d,isVertical:c}=n,f=d&&c,{xSnapped:m,ySnapped:y}=t,{minWidth:v,maxWidth:w,minHeight:p,maxHeight:g}=r,{x:h,y:x,width:N,height:S,aspectRatio:A}=e;let L=Math.floor(d?m-e.pointerX:0),P=Math.floor(c?y-e.pointerY:0);const j=N+(u?-L:L),M=S+(a?-P:P),$=-o[0]*N,H=-o[1]*S;let E=vo(j,v,w),z=vo(M,p,g);if(s){let k=0,C=0;u&&L<0?k=Wn(h+L+$,s[0][0]):!u&&L>0&&(k=Yn(h+j+$,s[1][0])),a&&P<0?C=Wn(x+P+H,s[0][1]):!a&&P>0&&(C=Yn(x+M+H,s[1][1])),E=Math.max(E,k),z=Math.max(z,C)}if(l){let k=0,C=0;u&&L>0?k=Yn(h+L,l[0][0]):!u&&L<0&&(k=Wn(h+j,l[1][0])),a&&P>0?C=Yn(x+P,l[0][1]):!a&&P<0&&(C=Wn(x+M,l[1][1])),E=Math.max(E,k),z=Math.max(z,C)}if(i){if(d){const k=vo(j/A,p,g)*A;if(E=Math.max(E,k),s){let C=0;!u&&!a||u&&!a&&f?C=Yn(x+H+j/A,s[1][1])*A:C=Wn(x+H+(u?L:-L)/A,s[0][1])*A,E=Math.max(E,C)}if(l){let C=0;!u&&!a||u&&!a&&f?C=Wn(x+j/A,l[1][1])*A:C=Yn(x+(u?L:-L)/A,l[0][1])*A,E=Math.max(E,C)}}if(c){const k=vo(M*A,v,w)/A;if(z=Math.max(z,k),s){let C=0;!u&&!a||a&&!u&&f?C=Yn(h+M*A+$,s[1][0])/A:C=Wn(h+(a?P:-P)*A+$,s[0][0])/A,z=Math.max(z,C)}if(l){let C=0;!u&&!a||a&&!u&&f?C=Wn(h+M*A,l[1][0])/A:C=Yn(h+(a?P:-P)*A,l[0][0])/A,z=Math.max(z,C)}}}P=P+(P<0?z:-z),L=L+(L<0?E:-E),i&&(f?j>M*A?P=(nd(u,a)?-L:L)/A:L=(nd(u,a)?-P:P)*A:d?(P=L/A,a=u):(L=P*A,u=a));const I=u?h+L:h,R=a?x+P:x;return{width:N+(u?-L:L),height:S+(a?-P:P),x:o[0]*L*(u?-1:1)+I,y:o[1]*P*(a?-1:1)+R}}const qg={width:0,height:0,x:0,y:0},qN={...qg,pointerX:0,pointerY:0,aspectRatio:1};function JN(e){return[[0,0],[e.measured.width,e.measured.height]]}function eS(e,n,t){const r=n.position.x+e.position.x,i=n.position.y+e.position.y,o=e.measured.width??0,s=e.measured.height??0,l=t[0]*o,u=t[1]*s;return[[r-l,i-u],[r+o-l,i+s-u]]}function nS({domNode:e,nodeId:n,getStoreItems:t,onChange:r,onEnd:i}){const o=Ye(e);let s={controlDirection:ed("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function l({controlPosition:a,boundaries:d,keepAspectRatio:c,resizeDirection:f,onResizeStart:m,onResize:y,onResizeEnd:v,shouldResize:w}){let p={...qg},g={...qN};s={boundaries:d,resizeDirection:f,keepAspectRatio:c,controlDirection:ed(a)};let h,x=null,N=[],S,A,L,P=!1;const j=ug().on("start",M=>{const{nodeLookup:$,transform:H,snapGrid:E,snapToGrid:z,nodeOrigin:I,paneDomNode:R}=t();if(h=$.get(n),!h)return;x=(R==null?void 0:R.getBoundingClientRect())??null;const{xSnapped:k,ySnapped:C}=li(M.sourceEvent,{transform:H,snapGrid:E,snapToGrid:z,containerBounds:x});p={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},g={...p,pointerX:k,pointerY:C,aspectRatio:p.width/p.height},S=void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(S=$.get(h.parentId),A=S&&h.extent==="parent"?JN(S):void 0),N=[],L=void 0;for(const[T,F]of $)if(F.parentId===n&&(N.push({id:T,position:{...F.position},extent:F.extent}),F.extent==="parent"||F.expandParent)){const D=eS(F,h,F.origin??I);L?L=[[Math.min(D[0][0],L[0][0]),Math.min(D[0][1],L[0][1])],[Math.max(D[1][0],L[1][0]),Math.max(D[1][1],L[1][1])]]:L=D}m==null||m(M,{...p})}).on("drag",M=>{const{transform:$,snapGrid:H,snapToGrid:E,nodeOrigin:z}=t(),I=li(M.sourceEvent,{transform:$,snapGrid:H,snapToGrid:E,containerBounds:x}),R=[];if(!h)return;const{x:k,y:C,width:T,height:F}=p,D={},U=h.origin??z,{width:W,height:K,x:Q,y:Z}=ZN(g,s.controlDirection,I,s.boundaries,s.keepAspectRatio,U,A,L),b=W!==T,J=K!==F,ne=Q!==k&&b,V=Z!==C&&J;if(!ne&&!V&&!b&&!J)return;if((ne||V||U[0]===1||U[1]===1)&&(D.x=ne?Q:p.x,D.y=V?Z:p.y,p.x=D.x,p.y=D.y,N.length>0)){const ue=Q-k,oe=Z-C;for(const Me of N)Me.position={x:Me.position.x-ue+U[0]*(W-T),y:Me.position.y-oe+U[1]*(K-F)},R.push(Me)}if((b||J)&&(D.width=b&&(!s.resizeDirection||s.resizeDirection==="horizontal")?W:p.width,D.height=J&&(!s.resizeDirection||s.resizeDirection==="vertical")?K:p.height,p.width=D.width,p.height=D.height),S&&h.expandParent){const ue=U[0]*(D.width??0);D.x&&D.x<ue&&(p.x=ue,g.x=g.x-(D.x-ue));const oe=U[1]*(D.height??0);D.y&&D.y<oe&&(p.y=oe,g.y=g.y-(D.y-oe))}const G=KN({width:p.width,prevWidth:T,height:p.height,prevHeight:F,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),X={...p,direction:G};(w==null?void 0:w(M,X))!==!1&&(P=!0,y==null||y(M,X),r(D,R))}).on("end",M=>{P&&(v==null||v(M,{...p}),i==null||i({...p}),P=!1)});o.call(j)}function u(){o.on(".drag",null)}return{update:l,destroy:u}}var Jg={exports:{}},e0={},n0={exports:{}},t0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=O;function tS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var rS=typeof Object.is=="function"?Object.is:tS,iS=Ar.useState,oS=Ar.useEffect,sS=Ar.useLayoutEffect,lS=Ar.useDebugValue;function uS(e,n){var t=n(),r=iS({inst:{value:t,getSnapshot:n}}),i=r[0].inst,o=r[1];return sS(function(){i.value=t,i.getSnapshot=n,Pl(i)&&o({inst:i})},[e,t,n]),oS(function(){return Pl(i)&&o({inst:i}),e(function(){Pl(i)&&o({inst:i})})},[e]),lS(t),t}function Pl(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!rS(e,t)}catch{return!0}}function aS(e,n){return n()}var cS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?aS:uS;t0.useSyncExternalStore=Ar.useSyncExternalStore!==void 0?Ar.useSyncExternalStore:cS;n0.exports=t0;var fS=n0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=O,dS=fS;function hS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pS=typeof Object.is=="function"?Object.is:hS,gS=dS.useSyncExternalStore,mS=Us.useRef,yS=Us.useEffect,vS=Us.useMemo,xS=Us.useDebugValue;e0.useSyncExternalStoreWithSelector=function(e,n,t,r,i){var o=mS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=vS(function(){function u(m){if(!a){if(a=!0,d=m,m=r(m),i!==void 0&&s.hasValue){var y=s.value;if(i(y,m))return c=y}return c=m}if(y=c,pS(d,m))return y;var v=r(m);return i!==void 0&&i(y,v)?(d=m,y):(d=m,c=v)}var a=!1,d,c,f=t===void 0?null:t;return[function(){return u(n())},f===null?void 0:function(){return u(f())}]},[n,t,r,i]);var l=gS(e,o[0],o[1]);return yS(function(){s.hasValue=!0,s.value=l},[l]),xS(l),l};Jg.exports=e0;var wS=Jg.exports;const _S=zd(wS),NS={},td=e=>{let n;const t=new Set,r=(d,c)=>{const f=typeof d=="function"?d(n):d;if(!Object.is(f,n)){const m=n;n=c??(typeof f!="object"||f===null)?f:Object.assign({},n,f),t.forEach(y=>y(n,m))}},i=()=>n,u={setState:r,getState:i,getInitialState:()=>a,subscribe:d=>(t.add(d),()=>t.delete(d)),destroy:()=>{(NS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},a=n=e(r,i,u);return u},SS=e=>e?td(e):td,{useDebugValue:ES}=Ud,{useSyncExternalStoreWithSelector:kS}=_S,CS=e=>e;function r0(e,n=CS,t){const r=kS(e.subscribe,e.getState,e.getServerState||e.getInitialState,n,t);return ES(r),r}const rd=(e,n)=>{const t=SS(e),r=(i,o=n)=>r0(t,i,o);return Object.assign(r,t),r},AS=(e,n)=>e?rd(e,n):rd;function de(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(const[r,i]of e)if(!Object.is(i,n.get(r)))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;return!0}const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(const r of t)if(!Object.prototype.hasOwnProperty.call(n,r)||!Object.is(e[r],n[r]))return!1;return!0}const Ws=O.createContext(null),IS=Ws.Provider,i0=Cn.error001();function re(e,n){const t=O.useContext(Ws);if(t===null)throw new Error(i0);return r0(t,e,n)}function he(){const e=O.useContext(Ws);if(e===null)throw new Error(i0);return O.useMemo(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}const id={display:"none"},LS={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},o0="react-flow__node-desc",s0="react-flow__edge-desc",MS="react-flow__aria-live",PS=e=>e.ariaLiveMessage,TS=e=>e.ariaLabelConfig;function zS({rfId:e}){const n=re(PS);return _.jsx("div",{id:`${MS}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:LS,children:n})}function OS({rfId:e,disableKeyboardA11y:n}){const t=re(TS);return _.jsxs(_.Fragment,{children:[_.jsx("div",{id:`${o0}-${e}`,style:id,children:n?t["node.a11yDescription.default"]:t["node.a11yDescription.keyboardDisabled"]}),_.jsx("div",{id:`${s0}-${e}`,style:id,children:t["edge.a11yDescription.default"]}),!n&&_.jsx(zS,{rfId:e})]})}const Ys=O.forwardRef(({position:e="top-left",children:n,className:t,style:r,...i},o)=>{const s=`${e}`.split("-");return _.jsx("div",{className:Ne(["react-flow__panel",t,...s]),style:r,ref:o,...i,children:n})});Ys.displayName="Panel";function RS({proOptions:e,position:n="bottom-right"}){return e!=null&&e.hideAttribution?null:_.jsx(Ys,{position:n,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",children:_.jsx("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}const $S=e=>{const n=[],t=[];for(const[,r]of e.nodeLookup)r.selected&&n.push(r.internals.userNode);for(const[,r]of e.edgeLookup)r.selected&&t.push(r);return{selectedNodes:n,selectedEdges:t}},xo=e=>e.id;function DS(e,n){return de(e.selectedNodes.map(xo),n.selectedNodes.map(xo))&&de(e.selectedEdges.map(xo),n.selectedEdges.map(xo))}function jS({onSelectionChange:e}){const n=he(),{selectedNodes:t,selectedEdges:r}=re($S,DS);return O.useEffect(()=>{const i={nodes:t,edges:r};e==null||e(i),n.getState().onSelectionChangeHandlers.forEach(o=>o(i))},[t,r,e]),null}const FS=e=>!!e.onSelectionChangeHandlers;function HS({onSelectionChange:e}){const n=re(FS);return e||n?_.jsx(jS,{onSelectionChange:e}):null}const Vu=typeof window<"u"?O.useLayoutEffect:O.useEffect,l0=[0,0],BS={x:0,y:0,zoom:1},VS=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],od=[...VS,"rfId"],bS=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),sd={translateExtent:Li,nodeOrigin:l0,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function US(e){const{setNodes:n,setEdges:t,setMinZoom:r,setMaxZoom:i,setTranslateExtent:o,setNodeExtent:s,reset:l,setDefaultNodesAndEdges:u}=re(bS,de),a=he();Vu(()=>(u(e.defaultNodes,e.defaultEdges),()=>{d.current=sd,l()}),[]);const d=O.useRef(sd);return Vu(()=>{for(const c of od){const f=e[c],m=d.current[c];f!==m&&(typeof e[c]>"u"||(c==="nodes"?n(f):c==="edges"?t(f):c==="minZoom"?r(f):c==="maxZoom"?i(f):c==="translateExtent"?o(f):c==="nodeExtent"?s(f):c==="ariaLabelConfig"?a.setState({ariaLabelConfig:hN(f)}):c==="fitView"?a.setState({fitViewQueued:f}):c==="fitViewOptions"?a.setState({fitViewOptions:f}):a.setState({[c]:f})))}d.current=e},od.map(c=>e[c])),null}function ld(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function WS(e){var r;const[n,t]=O.useState(e==="system"?null:e);return O.useEffect(()=>{if(e!=="system"){t(e);return}const i=ld(),o=()=>t(i!=null&&i.matches?"dark":"light");return o(),i==null||i.addEventListener("change",o),()=>{i==null||i.removeEventListener("change",o)}},[e]),n!==null?n:(r=ld())!=null&&r.matches?"dark":"light"}const ud=typeof document<"u"?document:null;function zi(e=null,n={target:ud,actInsideInputWithModifier:!0}){const[t,r]=O.useState(!1),i=O.useRef(!1),o=O.useRef(new Set([])),[s,l]=O.useMemo(()=>{if(e!==null){const a=(Array.isArray(e)?e:[e]).filter(c=>typeof c=="string").map(c=>c.replace("+",`
`).replace(`

`,`
+`).split(`
`)),d=a.reduce((c,f)=>c.concat(...f),[]);return[a,d]}return[[],[]]},[e]);return O.useEffect(()=>{const u=(n==null?void 0:n.target)??ud,a=(n==null?void 0:n.actInsideInputWithModifier)??!0;if(e!==null){const d=m=>{var w,p;if(i.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!i.current||i.current&&!a)&&$g(m))return!1;const v=cd(m.code,l);if(o.current.add(m[v]),ad(s,o.current,!1)){const g=((p=(w=m.composedPath)==null?void 0:w.call(m))==null?void 0:p[0])||m.target,h=(g==null?void 0:g.nodeName)==="BUTTON"||(g==null?void 0:g.nodeName)==="A";n.preventDefault!==!1&&(i.current||!h)&&m.preventDefault(),r(!0)}},c=m=>{const y=cd(m.code,l);ad(s,o.current,!0)?(r(!1),o.current.clear()):o.current.delete(m[y]),m.key==="Meta"&&o.current.clear(),i.current=!1},f=()=>{o.current.clear(),r(!1)};return u==null||u.addEventListener("keydown",d),u==null||u.addEventListener("keyup",c),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{u==null||u.removeEventListener("keydown",d),u==null||u.removeEventListener("keyup",c),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,r]),t}function ad(e,n,t){return e.filter(r=>t||r.length===n.size).some(r=>r.every(i=>n.has(i)))}function cd(e,n){return n.includes(e)?"code":"key"}const YS=()=>{const e=he();return O.useMemo(()=>({zoomIn:n=>{const{panZoom:t}=e.getState();return t?t.scaleBy(1.2,n):Promise.resolve(!1)},zoomOut:n=>{const{panZoom:t}=e.getState();return t?t.scaleBy(1/1.2,n):Promise.resolve(!1)},zoomTo:(n,t)=>{const{panZoom:r}=e.getState();return r?r.scaleTo(n,t):Promise.resolve(!1)},getZoom:()=>e.getState().transform[2],setViewport:async(n,t)=>{const{transform:[r,i,o],panZoom:s}=e.getState();return s?(await s.setViewport({x:n.x??r,y:n.y??i,zoom:n.zoom??o},t),Promise.resolve(!0)):Promise.resolve(!1)},getViewport:()=>{const[n,t,r]=e.getState().transform;return{x:n,y:t,zoom:r}},setCenter:async(n,t,r)=>e.getState().setCenter(n,t,r),fitBounds:async(n,t)=>{const{width:r,height:i,minZoom:o,maxZoom:s,panZoom:l}=e.getState(),u=Xa(n,r,i,o,s,(t==null?void 0:t.padding)??.1);return l?(await l.setViewport(u,{duration:t==null?void 0:t.duration,ease:t==null?void 0:t.ease,interpolate:t==null?void 0:t.interpolate}),Promise.resolve(!0)):Promise.resolve(!1)},screenToFlowPosition:(n,t={})=>{const{transform:r,snapGrid:i,snapToGrid:o,domNode:s}=e.getState();if(!s)return n;const{x:l,y:u}=s.getBoundingClientRect(),a={x:n.x-l,y:n.y-u},d=t.snapGrid??i,c=t.snapToGrid??o;return Wi(a,r,c,d)},flowToScreenPosition:n=>{const{transform:t,domNode:r}=e.getState();if(!r)return n;const{x:i,y:o}=r.getBoundingClientRect(),s=ys(n,t);return{x:s.x+i,y:s.y+o}}}),[])};function u0(e,n){const t=[],r=new Map,i=[];for(const o of e)if(o.type==="add"){i.push(o);continue}else if(o.type==="remove"||o.type==="replace")r.set(o.id,[o]);else{const s=r.get(o.id);s?s.push(o):r.set(o.id,[o])}for(const o of n){const s=r.get(o.id);if(!s){t.push(o);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){t.push({...s[0].item});continue}const l={...o};for(const u of s)XS(u,l);t.push(l)}return i.length&&i.forEach(o=>{o.index!==void 0?t.splice(o.index,0,{...o.item}):t.push({...o.item})}),t}function XS(e,n){switch(e.type){case"select":{n.selected=e.selected;break}case"position":{typeof e.position<"u"&&(n.position=e.position),typeof e.dragging<"u"&&(n.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(n.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(n.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(n.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(n.resizing=e.resizing);break}}}function QS(e,n){return u0(e,n)}function GS(e,n){return u0(e,n)}function wt(e,n){return{id:e,type:"select",selected:n}}function ir(e,n=new Set,t=!1){const r=[];for(const[i,o]of e){const s=n.has(i);!(o.selected===void 0&&!s)&&o.selected!==s&&(t&&(o.selected=s),r.push(wt(o.id,s)))}return r}function fd({items:e=[],lookup:n}){var i;const t=[],r=new Map(e.map(o=>[o.id,o]));for(const[o,s]of e.entries()){const l=n.get(s.id),u=((i=l==null?void 0:l.internals)==null?void 0:i.userNode)??l;u!==void 0&&u!==s&&t.push({id:s.id,item:s,type:"replace"}),u===void 0&&t.push({item:s,type:"add",index:o})}for(const[o]of n)r.get(o)===void 0&&t.push({id:o,type:"remove"});return t}function dd(e){return{id:e.id,type:"remove"}}const hd=e=>rN(e),KS=e=>Ig(e);function a0(e){return O.forwardRef(e)}function pd(e){const[n,t]=O.useState(BigInt(0)),[r]=O.useState(()=>ZS(()=>t(i=>i+BigInt(1))));return Vu(()=>{const i=r.get();i.length&&(e(i),r.reset())},[n]),r}function ZS(e){let n=[];return{get:()=>n,reset:()=>{n=[]},push:t=>{n.push(t),e()}}}const c0=O.createContext(null);function qS({children:e}){const n=he(),t=O.useCallback(l=>{const{nodes:u=[],setNodes:a,hasDefaultNodes:d,onNodesChange:c,nodeLookup:f,fitViewQueued:m,onNodesChangeMiddlewareMap:y}=n.getState();let v=u;for(const p of l)v=typeof p=="function"?p(v):p;let w=fd({items:v,lookup:f});for(const p of y.values())w=p(w);d&&a(v),w.length>0?c==null||c(w):m&&window.requestAnimationFrame(()=>{const{fitViewQueued:p,nodes:g,setNodes:h}=n.getState();p&&h(g)})},[]),r=pd(t),i=O.useCallback(l=>{const{edges:u=[],setEdges:a,hasDefaultEdges:d,onEdgesChange:c,edgeLookup:f}=n.getState();let m=u;for(const y of l)m=typeof y=="function"?y(m):y;d?a(m):c&&c(fd({items:m,lookup:f}))},[]),o=pd(i),s=O.useMemo(()=>({nodeQueue:r,edgeQueue:o}),[]);return _.jsx(c0.Provider,{value:s,children:e})}function JS(){const e=O.useContext(c0);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}const eE=e=>!!e.panZoom;function ec(){const e=YS(),n=he(),t=JS(),r=re(eE),i=O.useMemo(()=>{const o=c=>n.getState().nodeLookup.get(c),s=c=>{t.nodeQueue.push(c)},l=c=>{t.edgeQueue.push(c)},u=c=>{var p,g;const{nodeLookup:f,nodeOrigin:m}=n.getState(),y=hd(c)?c:f.get(c.id),v=y.parentId?Og(y.position,y.measured,y.parentId,f,m):y.position,w={...y,position:v,width:((p=y.measured)==null?void 0:p.width)??y.width,height:((g=y.measured)==null?void 0:g.height)??y.height};return Er(w)},a=(c,f,m={replace:!1})=>{s(y=>y.map(v=>{if(v.id===c){const w=typeof f=="function"?f(v):f;return m.replace&&hd(w)?w:{...v,...w}}return v}))},d=(c,f,m={replace:!1})=>{l(y=>y.map(v=>{if(v.id===c){const w=typeof f=="function"?f(v):f;return m.replace&&KS(w)?w:{...v,...w}}return v}))};return{getNodes:()=>n.getState().nodes.map(c=>({...c})),getNode:c=>{var f;return(f=o(c))==null?void 0:f.internals.userNode},getInternalNode:o,getEdges:()=>{const{edges:c=[]}=n.getState();return c.map(f=>({...f}))},getEdge:c=>n.getState().edgeLookup.get(c),setNodes:s,setEdges:l,addNodes:c=>{const f=Array.isArray(c)?c:[c];t.nodeQueue.push(m=>[...m,...f])},addEdges:c=>{const f=Array.isArray(c)?c:[c];t.edgeQueue.push(m=>[...m,...f])},toObject:()=>{const{nodes:c=[],edges:f=[],transform:m}=n.getState(),[y,v,w]=m;return{nodes:c.map(p=>({...p})),edges:f.map(p=>({...p})),viewport:{x:y,y:v,zoom:w}}},deleteElements:async({nodes:c=[],edges:f=[]})=>{const{nodes:m,edges:y,onNodesDelete:v,onEdgesDelete:w,triggerNodeChanges:p,triggerEdgeChanges:g,onDelete:h,onBeforeDelete:x}=n.getState(),{nodes:N,edges:S}=await uN({nodesToRemove:c,edgesToRemove:f,nodes:m,edges:y,onBeforeDelete:x}),A=S.length>0,L=N.length>0;if(A){const P=S.map(dd);w==null||w(S),g(P)}if(L){const P=N.map(dd);v==null||v(N),p(P)}return(L||A)&&(h==null||h({nodes:N,edges:S})),{deletedNodes:N,deletedEdges:S}},getIntersectingNodes:(c,f=!0,m)=>{const y=bf(c),v=y?c:u(c),w=m!==void 0;return v?(m||n.getState().nodes).filter(p=>{const g=n.getState().nodeLookup.get(p.id);if(g&&!y&&(p.id===c.id||!g.internals.positionAbsolute))return!1;const h=Er(w?p:g),x=Pi(h,v);return f&&x>0||x>=h.width*h.height||x>=v.width*v.height}):[]},isNodeIntersecting:(c,f,m=!0)=>{const v=bf(c)?c:u(c);if(!v)return!1;const w=Pi(v,f);return m&&w>0||w>=f.width*f.height||w>=v.width*v.height},updateNode:a,updateNodeData:(c,f,m={replace:!1})=>{a(c,y=>{const v=typeof f=="function"?f(y):f;return m.replace?{...y,data:v}:{...y,data:{...y.data,...v}}},m)},updateEdge:d,updateEdgeData:(c,f,m={replace:!1})=>{d(c,y=>{const v=typeof f=="function"?f(y):f;return m.replace?{...y,data:v}:{...y,data:{...y.data,...v}}},m)},getNodesBounds:c=>{const{nodeLookup:f,nodeOrigin:m}=n.getState();return iN(c,{nodeLookup:f,nodeOrigin:m})},getHandleConnections:({type:c,id:f,nodeId:m})=>{var y;return Array.from(((y=n.getState().connectionLookup.get(`${m}-${c}${f?`-${f}`:""}`))==null?void 0:y.values())??[])},getNodeConnections:({type:c,handleId:f,nodeId:m})=>{var y;return Array.from(((y=n.getState().connectionLookup.get(`${m}${c?f?`-${c}-${f}`:`-${c}`:""}`))==null?void 0:y.values())??[])},fitView:async c=>{const f=n.getState().fitViewResolver??dN();return n.setState({fitViewQueued:!0,fitViewOptions:c,fitViewResolver:f}),t.nodeQueue.push(m=>[...m]),f.promise}}},[]);return O.useMemo(()=>({...i,...e,viewportInitialized:r}),[r])}const gd=e=>e.selected,nE=typeof window<"u"?window:void 0;function tE({deleteKeyCode:e,multiSelectionKeyCode:n}){const t=he(),{deleteElements:r}=ec(),i=zi(e,{actInsideInputWithModifier:!1}),o=zi(n,{target:nE});O.useEffect(()=>{if(i){const{edges:s,nodes:l}=t.getState();r({nodes:l.filter(gd),edges:s.filter(gd)}),t.setState({nodesSelectionActive:!1})}},[i]),O.useEffect(()=>{t.setState({multiSelectionActive:o})},[o])}function rE(e){const n=he();O.useEffect(()=>{const t=()=>{var i,o,s,l;if(!e.current||!(((o=(i=e.current).checkVisibility)==null?void 0:o.call(i))??!0))return!1;const r=Qa(e.current);(r.height===0||r.width===0)&&((l=(s=n.getState()).onError)==null||l.call(s,"004",Cn.error004())),n.setState({width:r.width||500,height:r.height||500})};if(e.current){t(),window.addEventListener("resize",t);const r=new ResizeObserver(()=>t());return r.observe(e.current),()=>{window.removeEventListener("resize",t),r&&e.current&&r.unobserve(e.current)}}},[])}const Xs={position:"absolute",width:"100%",height:"100%",top:0,left:0},iE=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function oE({onPaneContextMenu:e,zoomOnScroll:n=!0,zoomOnPinch:t=!0,panOnScroll:r=!1,panOnScrollSpeed:i=.5,panOnScrollMode:o=Lt.Free,zoomOnDoubleClick:s=!0,panOnDrag:l=!0,defaultViewport:u,translateExtent:a,minZoom:d,maxZoom:c,zoomActivationKeyCode:f,preventScrolling:m=!0,children:y,noWheelClassName:v,noPanClassName:w,onViewportChange:p,isControlledViewport:g,paneClickDistance:h,selectionOnDrag:x}){const N=he(),S=O.useRef(null),{userSelectionActive:A,lib:L,connectionInProgress:P}=re(iE,de),j=zi(f),M=O.useRef();rE(S);const $=O.useCallback(H=>{p==null||p({x:H[0],y:H[1],zoom:H[2]}),g||N.setState({transform:H})},[p,g]);return O.useEffect(()=>{if(S.current){M.current=GN({domNode:S.current,minZoom:d,maxZoom:c,translateExtent:a,viewport:u,onDraggingChange:I=>N.setState(R=>R.paneDragging===I?R:{paneDragging:I}),onPanZoomStart:(I,R)=>{const{onViewportChangeStart:k,onMoveStart:C}=N.getState();C==null||C(I,R),k==null||k(R)},onPanZoom:(I,R)=>{const{onViewportChange:k,onMove:C}=N.getState();C==null||C(I,R),k==null||k(R)},onPanZoomEnd:(I,R)=>{const{onViewportChangeEnd:k,onMoveEnd:C}=N.getState();C==null||C(I,R),k==null||k(R)}});const{x:H,y:E,zoom:z}=M.current.getViewport();return N.setState({panZoom:M.current,transform:[H,E,z],domNode:S.current.closest(".react-flow")}),()=>{var I;(I=M.current)==null||I.destroy()}}},[]),O.useEffect(()=>{var H;(H=M.current)==null||H.update({onPaneContextMenu:e,zoomOnScroll:n,zoomOnPinch:t,panOnScroll:r,panOnScrollSpeed:i,panOnScrollMode:o,zoomOnDoubleClick:s,panOnDrag:l,zoomActivationKeyPressed:j,preventScrolling:m,noPanClassName:w,userSelectionActive:A,noWheelClassName:v,lib:L,onTransformChange:$,connectionInProgress:P,selectionOnDrag:x,paneClickDistance:h})},[e,n,t,r,i,o,s,l,j,m,w,A,v,L,$,P,x,h]),_.jsx("div",{className:"react-flow__renderer",ref:S,style:Xs,children:y})}const sE=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function lE(){const{userSelectionActive:e,userSelectionRect:n}=re(sE,de);return e&&n?_.jsx("div",{className:"react-flow__selection react-flow__container",style:{width:n.width,height:n.height,transform:`translate(${n.x}px, ${n.y}px)`}}):null}const Tl=(e,n)=>t=>{t.target===n.current&&(e==null||e(t))},uE=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,connectionInProgress:e.connection.inProgress,dragging:e.paneDragging});function aE({isSelecting:e,selectionKeyPressed:n,selectionMode:t=Mi.Full,panOnDrag:r,paneClickDistance:i,selectionOnDrag:o,onSelectionStart:s,onSelectionEnd:l,onPaneClick:u,onPaneContextMenu:a,onPaneScroll:d,onPaneMouseEnter:c,onPaneMouseMove:f,onPaneMouseLeave:m,children:y}){const v=he(),{userSelectionActive:w,elementsSelectable:p,dragging:g,connectionInProgress:h}=re(uE,de),x=p&&(e||w),N=O.useRef(null),S=O.useRef(),A=O.useRef(new Set),L=O.useRef(new Set),P=O.useRef(!1),j=k=>{if(P.current||h){P.current=!1;return}u==null||u(k),v.getState().resetSelectedElements(),v.setState({nodesSelectionActive:!1})},M=k=>{if(Array.isArray(r)&&(r!=null&&r.includes(2))){k.preventDefault();return}a==null||a(k)},$=d?k=>d(k):void 0,H=k=>{P.current&&(k.stopPropagation(),P.current=!1)},E=k=>{var K,Q;const{domNode:C}=v.getState();if(S.current=C==null?void 0:C.getBoundingClientRect(),!S.current)return;const T=k.target===N.current;if(!T&&!!k.target.closest(".nokey")||!e||!(o&&T||n)||k.button!==0||!k.isPrimary)return;(Q=(K=k.target)==null?void 0:K.setPointerCapture)==null||Q.call(K,k.pointerId),P.current=!1;const{x:U,y:W}=pn(k.nativeEvent,S.current);v.setState({userSelectionRect:{width:0,height:0,startX:U,startY:W,x:U,y:W}}),T||(k.stopPropagation(),k.preventDefault())},z=k=>{const{userSelectionRect:C,transform:T,nodeLookup:F,edgeLookup:D,connectionLookup:U,triggerNodeChanges:W,triggerEdgeChanges:K,defaultEdgeOptions:Q,resetSelectedElements:Z}=v.getState();if(!S.current||!C)return;const{x:b,y:J}=pn(k.nativeEvent,S.current),{startX:ne,startY:V}=C;if(!P.current){const oe=n?0:i;if(Math.hypot(b-ne,J-V)<=oe)return;Z(),s==null||s(k)}P.current=!0;const G={startX:ne,startY:V,x:b<ne?b:ne,y:J<V?J:V,width:Math.abs(b-ne),height:Math.abs(J-V)},X=A.current,ee=L.current;A.current=new Set(Ya(F,G,T,t===Mi.Partial,!0).map(oe=>oe.id)),L.current=new Set;const ue=(Q==null?void 0:Q.selectable)??!0;for(const oe of A.current){const Me=U.get(oe);if(Me)for(const{edgeId:bn}of Me.values()){const In=D.get(bn);In&&(In.selectable??ue)&&L.current.add(bn)}}if(!Uf(X,A.current)){const oe=ir(F,A.current,!0);W(oe)}if(!Uf(ee,L.current)){const oe=ir(D,L.current);K(oe)}v.setState({userSelectionRect:G,userSelectionActive:!0,nodesSelectionActive:!1})},I=k=>{var C,T;k.button===0&&((T=(C=k.target)==null?void 0:C.releasePointerCapture)==null||T.call(C,k.pointerId),!w&&k.target===N.current&&v.getState().userSelectionRect&&(j==null||j(k)),v.setState({userSelectionActive:!1,userSelectionRect:null}),P.current&&(l==null||l(k),v.setState({nodesSelectionActive:A.current.size>0})))},R=r===!0||Array.isArray(r)&&r.includes(0);return _.jsxs("div",{className:Ne(["react-flow__pane",{draggable:R,dragging:g,selection:e}]),onClick:x?void 0:Tl(j,N),onContextMenu:Tl(M,N),onWheel:Tl($,N),onPointerEnter:x?void 0:c,onPointerMove:x?z:f,onPointerUp:x?I:void 0,onPointerDownCapture:x?E:void 0,onClickCapture:x?H:void 0,onPointerLeave:m,ref:N,style:Xs,children:[y,_.jsx(lE,{})]})}function bu({id:e,store:n,unselect:t=!1,nodeRef:r}){const{addSelectedNodes:i,unselectNodesAndEdges:o,multiSelectionActive:s,nodeLookup:l,onError:u}=n.getState(),a=l.get(e);if(!a){u==null||u("012",Cn.error012(e));return}n.setState({nodesSelectionActive:!1}),a.selected?(t||a.selected&&s)&&(o({nodes:[a],edges:[]}),requestAnimationFrame(()=>{var d;return(d=r==null?void 0:r.current)==null?void 0:d.blur()})):i([e])}function f0({nodeRef:e,disabled:n=!1,noDragClassName:t,handleSelector:r,nodeId:i,isSelectable:o,nodeClickDistance:s}){const l=he(),[u,a]=O.useState(!1),d=O.useRef();return O.useEffect(()=>{d.current=RN({getStoreItems:()=>l.getState(),onNodeMouseDown:c=>{bu({id:c,store:l,nodeRef:e})},onDragStart:()=>{a(!0)},onDragStop:()=>{a(!1)}})},[]),O.useEffect(()=>{if(!(n||!e.current||!d.current))return d.current.update({noDragClassName:t,handleSelector:r,domNode:e.current,isSelectable:o,nodeId:i,nodeClickDistance:s}),()=>{var c;(c=d.current)==null||c.destroy()}},[t,r,n,o,e,i,s]),u}const cE=e=>n=>n.selected&&(n.draggable||e&&typeof n.draggable>"u");function d0(){const e=he();return O.useCallback(t=>{const{nodeExtent:r,snapToGrid:i,snapGrid:o,nodesDraggable:s,onError:l,updateNodePositions:u,nodeLookup:a,nodeOrigin:d}=e.getState(),c=new Map,f=cE(s),m=i?o[0]:5,y=i?o[1]:5,v=t.direction.x*m*t.factor,w=t.direction.y*y*t.factor;for(const[,p]of a){if(!f(p))continue;let g={x:p.internals.positionAbsolute.x+v,y:p.internals.positionAbsolute.y+w};i&&(g=Ui(g,o));const{position:h,positionAbsolute:x}=Lg({nodeId:p.id,nextPosition:g,nodeLookup:a,nodeExtent:r,nodeOrigin:d,onError:l});p.position=h,p.internals.positionAbsolute=x,c.set(p.id,p)}u(c)},[])}const nc=O.createContext(null),fE=nc.Provider;nc.Consumer;const h0=()=>O.useContext(nc),dE=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),hE=(e,n,t)=>r=>{const{connectionClickStartHandle:i,connectionMode:o,connection:s}=r,{fromHandle:l,toHandle:u,isValid:a}=s,d=(u==null?void 0:u.nodeId)===e&&(u==null?void 0:u.id)===n&&(u==null?void 0:u.type)===t;return{connectingFrom:(l==null?void 0:l.nodeId)===e&&(l==null?void 0:l.id)===n&&(l==null?void 0:l.type)===t,connectingTo:d,clickConnecting:(i==null?void 0:i.nodeId)===e&&(i==null?void 0:i.id)===n&&(i==null?void 0:i.type)===t,isPossibleEndHandle:o===Nr.Strict?(l==null?void 0:l.type)!==t:e!==(l==null?void 0:l.nodeId)||n!==(l==null?void 0:l.id),connectionInProcess:!!l,clickConnectionInProcess:!!i,valid:d&&a}};function pE({type:e="source",position:n=q.Top,isValidConnection:t,isConnectable:r=!0,isConnectableStart:i=!0,isConnectableEnd:o=!0,id:s,onConnect:l,children:u,className:a,onMouseDown:d,onTouchStart:c,...f},m){var z,I;const y=s||null,v=e==="target",w=he(),p=h0(),{connectOnClick:g,noPanClassName:h,rfId:x}=re(dE,de),{connectingFrom:N,connectingTo:S,clickConnecting:A,isPossibleEndHandle:L,connectionInProcess:P,clickConnectionInProcess:j,valid:M}=re(hE(p,y,e),de);p||(I=(z=w.getState()).onError)==null||I.call(z,"010",Cn.error010());const $=R=>{const{defaultEdgeOptions:k,onConnect:C,hasDefaultEdges:T}=w.getState(),F={...k,...R};if(T){const{edges:D,setEdges:U}=w.getState();U(xN(F,D))}C==null||C(F),l==null||l(F)},H=R=>{if(!p)return;const k=Dg(R.nativeEvent);if(i&&(k&&R.button===0||!k)){const C=w.getState();Bu.onPointerDown(R.nativeEvent,{handleDomNode:R.currentTarget,autoPanOnConnect:C.autoPanOnConnect,connectionMode:C.connectionMode,connectionRadius:C.connectionRadius,domNode:C.domNode,nodeLookup:C.nodeLookup,lib:C.lib,isTarget:v,handleId:y,nodeId:p,flowId:C.rfId,panBy:C.panBy,cancelConnection:C.cancelConnection,onConnectStart:C.onConnectStart,onConnectEnd:(...T)=>{var F,D;return(D=(F=w.getState()).onConnectEnd)==null?void 0:D.call(F,...T)},updateConnection:C.updateConnection,onConnect:$,isValidConnection:t||((...T)=>{var F,D;return((D=(F=w.getState()).isValidConnection)==null?void 0:D.call(F,...T))??!0}),getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,autoPanSpeed:C.autoPanSpeed,dragThreshold:C.connectionDragThreshold})}k?d==null||d(R):c==null||c(R)},E=R=>{const{onClickConnectStart:k,onClickConnectEnd:C,connectionClickStartHandle:T,connectionMode:F,isValidConnection:D,lib:U,rfId:W,nodeLookup:K,connection:Q}=w.getState();if(!p||!T&&!i)return;if(!T){k==null||k(R.nativeEvent,{nodeId:p,handleId:y,handleType:e}),w.setState({connectionClickStartHandle:{nodeId:p,type:e,id:y}});return}const Z=Rg(R.target),b=t||D,{connection:J,isValid:ne}=Bu.isValid(R.nativeEvent,{handle:{nodeId:p,id:y,type:e},connectionMode:F,fromNodeId:T.nodeId,fromHandleId:T.id||null,fromType:T.type,isValidConnection:b,flowId:W,doc:Z,lib:U,nodeLookup:K});ne&&J&&$(J);const V=structuredClone(Q);delete V.inProgress,V.toPosition=V.toHandle?V.toHandle.position:null,C==null||C(R,V),w.setState({connectionClickStartHandle:null})};return _.jsx("div",{"data-handleid":y,"data-nodeid":p,"data-handlepos":n,"data-id":`${x}-${p}-${y}-${e}`,className:Ne(["react-flow__handle",`react-flow__handle-${n}`,"nodrag",h,a,{source:!v,target:v,connectable:r,connectablestart:i,connectableend:o,clickconnecting:A,connectingfrom:N,connectingto:S,valid:M,connectionindicator:r&&(!P||L)&&(P||j?o:i)}]),onMouseDown:H,onTouchStart:H,onClick:g?E:void 0,ref:m,...f,children:u})}const vs=O.memo(a0(pE));function gE({data:e,isConnectable:n,sourcePosition:t=q.Bottom}){return _.jsxs(_.Fragment,{children:[e==null?void 0:e.label,_.jsx(vs,{type:"source",position:t,isConnectable:n})]})}function mE({data:e,isConnectable:n,targetPosition:t=q.Top,sourcePosition:r=q.Bottom}){return _.jsxs(_.Fragment,{children:[_.jsx(vs,{type:"target",position:t,isConnectable:n}),e==null?void 0:e.label,_.jsx(vs,{type:"source",position:r,isConnectable:n})]})}function yE(){return null}function vE({data:e,isConnectable:n,targetPosition:t=q.Top}){return _.jsxs(_.Fragment,{children:[_.jsx(vs,{type:"target",position:t,isConnectable:n}),e==null?void 0:e.label]})}const xs={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},md={input:gE,default:mE,output:vE,group:yE};function xE(e){var n,t,r,i;return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??((n=e.style)==null?void 0:n.width),height:e.height??e.initialHeight??((t=e.style)==null?void 0:t.height)}:{width:e.width??((r=e.style)==null?void 0:r.width),height:e.height??((i=e.style)==null?void 0:i.height)}}const wE=e=>{const{width:n,height:t,x:r,y:i}=bi(e.nodeLookup,{filter:o=>!!o.selected});return{width:hn(n)?n:null,height:hn(t)?t:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`}};function _E({onSelectionContextMenu:e,noPanClassName:n,disableKeyboardA11y:t}){const r=he(),{width:i,height:o,transformString:s,userSelectionActive:l}=re(wE,de),u=d0(),a=O.useRef(null);O.useEffect(()=>{var m;t||(m=a.current)==null||m.focus({preventScroll:!0})},[t]);const d=!l&&i!==null&&o!==null;if(f0({nodeRef:a,disabled:!d}),!d)return null;const c=e?m=>{const y=r.getState().nodes.filter(v=>v.selected);e(m,y)}:void 0,f=m=>{Object.prototype.hasOwnProperty.call(xs,m.key)&&(m.preventDefault(),u({direction:xs[m.key],factor:m.shiftKey?4:1}))};return _.jsx("div",{className:Ne(["react-flow__nodesselection","react-flow__container",n]),style:{transform:s},children:_.jsx("div",{ref:a,className:"react-flow__nodesselection-rect",onContextMenu:c,tabIndex:t?void 0:-1,onKeyDown:t?void 0:f,style:{width:i,height:o}})})}const yd=typeof window<"u"?window:void 0,NE=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function p0({children:e,onPaneClick:n,onPaneMouseEnter:t,onPaneMouseMove:r,onPaneMouseLeave:i,onPaneContextMenu:o,onPaneScroll:s,paneClickDistance:l,deleteKeyCode:u,selectionKeyCode:a,selectionOnDrag:d,selectionMode:c,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:y,panActivationKeyCode:v,zoomActivationKeyCode:w,elementsSelectable:p,zoomOnScroll:g,zoomOnPinch:h,panOnScroll:x,panOnScrollSpeed:N,panOnScrollMode:S,zoomOnDoubleClick:A,panOnDrag:L,defaultViewport:P,translateExtent:j,minZoom:M,maxZoom:$,preventScrolling:H,onSelectionContextMenu:E,noWheelClassName:z,noPanClassName:I,disableKeyboardA11y:R,onViewportChange:k,isControlledViewport:C}){const{nodesSelectionActive:T,userSelectionActive:F}=re(NE,de),D=zi(a,{target:yd}),U=zi(v,{target:yd}),W=U||L,K=U||x,Q=d&&W!==!0,Z=D||F||Q;return tE({deleteKeyCode:u,multiSelectionKeyCode:y}),_.jsx(oE,{onPaneContextMenu:o,elementsSelectable:p,zoomOnScroll:g,zoomOnPinch:h,panOnScroll:K,panOnScrollSpeed:N,panOnScrollMode:S,zoomOnDoubleClick:A,panOnDrag:!D&&W,defaultViewport:P,translateExtent:j,minZoom:M,maxZoom:$,zoomActivationKeyCode:w,preventScrolling:H,noWheelClassName:z,noPanClassName:I,onViewportChange:k,isControlledViewport:C,paneClickDistance:l,selectionOnDrag:Q,children:_.jsxs(aE,{onSelectionStart:f,onSelectionEnd:m,onPaneClick:n,onPaneMouseEnter:t,onPaneMouseMove:r,onPaneMouseLeave:i,onPaneContextMenu:o,onPaneScroll:s,panOnDrag:W,isSelecting:!!Z,selectionMode:c,selectionKeyPressed:D,paneClickDistance:l,selectionOnDrag:Q,children:[e,T&&_.jsx(_E,{onSelectionContextMenu:E,noPanClassName:I,disableKeyboardA11y:R})]})})}p0.displayName="FlowRenderer";const SE=O.memo(p0),EE=e=>n=>e?Ya(n.nodeLookup,{x:0,y:0,width:n.width,height:n.height},n.transform,!0).map(t=>t.id):Array.from(n.nodeLookup.keys());function kE(e){return re(O.useCallback(EE(e),[e]),de)}const CE=e=>e.updateNodeInternals;function AE(){const e=re(CE),[n]=O.useState(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(t=>{const r=new Map;t.forEach(i=>{const o=i.target.getAttribute("data-id");r.set(o,{id:o,nodeElement:i.target,force:!0})}),e(r)}));return O.useEffect(()=>()=>{n==null||n.disconnect()},[n]),n}function IE({node:e,nodeType:n,hasDimensions:t,resizeObserver:r}){const i=he(),o=O.useRef(null),s=O.useRef(null),l=O.useRef(e.sourcePosition),u=O.useRef(e.targetPosition),a=O.useRef(n),d=t&&!!e.internals.handleBounds;return O.useEffect(()=>{o.current&&!e.hidden&&(!d||s.current!==o.current)&&(s.current&&(r==null||r.unobserve(s.current)),r==null||r.observe(o.current),s.current=o.current)},[d,e.hidden]),O.useEffect(()=>()=>{s.current&&(r==null||r.unobserve(s.current),s.current=null)},[]),O.useEffect(()=>{if(o.current){const c=a.current!==n,f=l.current!==e.sourcePosition,m=u.current!==e.targetPosition;(c||f||m)&&(a.current=n,l.current=e.sourcePosition,u.current=e.targetPosition,i.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:o.current,force:!0}]])))}},[e.id,n,e.sourcePosition,e.targetPosition]),o}function LE({id:e,onClick:n,onMouseEnter:t,onMouseMove:r,onMouseLeave:i,onContextMenu:o,onDoubleClick:s,nodesDraggable:l,elementsSelectable:u,nodesConnectable:a,nodesFocusable:d,resizeObserver:c,noDragClassName:f,noPanClassName:m,disableKeyboardA11y:y,rfId:v,nodeTypes:w,nodeClickDistance:p,onError:g}){const{node:h,internals:x,isParent:N}=re(b=>{const J=b.nodeLookup.get(e),ne=b.parentLookup.has(e);return{node:J,internals:J.internals,isParent:ne}},de);let S=h.type||"default",A=(w==null?void 0:w[S])||md[S];A===void 0&&(g==null||g("003",Cn.error003(S)),S="default",A=(w==null?void 0:w.default)||md.default);const L=!!(h.draggable||l&&typeof h.draggable>"u"),P=!!(h.selectable||u&&typeof h.selectable>"u"),j=!!(h.connectable||a&&typeof h.connectable>"u"),M=!!(h.focusable||d&&typeof h.focusable>"u"),$=he(),H=zg(h),E=IE({node:h,nodeType:S,hasDimensions:H,resizeObserver:c}),z=f0({nodeRef:E,disabled:h.hidden||!L,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:p}),I=d0();if(h.hidden)return null;const R=Vn(h),k=xE(h),C=P||L||n||t||r||i,T=t?b=>t(b,{...x.userNode}):void 0,F=r?b=>r(b,{...x.userNode}):void 0,D=i?b=>i(b,{...x.userNode}):void 0,U=o?b=>o(b,{...x.userNode}):void 0,W=s?b=>s(b,{...x.userNode}):void 0,K=b=>{const{selectNodesOnDrag:J,nodeDragThreshold:ne}=$.getState();P&&(!J||!L||ne>0)&&bu({id:e,store:$,nodeRef:E}),n&&n(b,{...x.userNode})},Q=b=>{if(!($g(b.nativeEvent)||y)){if(Eg.includes(b.key)&&P){const J=b.key==="Escape";bu({id:e,store:$,unselect:J,nodeRef:E})}else if(L&&h.selected&&Object.prototype.hasOwnProperty.call(xs,b.key)){b.preventDefault();const{ariaLabelConfig:J}=$.getState();$.setState({ariaLiveMessage:J["node.a11yDescription.ariaLiveMessage"]({direction:b.key.replace("Arrow","").toLowerCase(),x:~~x.positionAbsolute.x,y:~~x.positionAbsolute.y})}),I({direction:xs[b.key],factor:b.shiftKey?4:1})}}},Z=()=>{var ee;if(y||!((ee=E.current)!=null&&ee.matches(":focus-visible")))return;const{transform:b,width:J,height:ne,autoPanOnNodeFocus:V,setCenter:G}=$.getState();if(!V)return;Ya(new Map([[e,h]]),{x:0,y:0,width:J,height:ne},b,!0).length>0||G(h.position.x+R.width/2,h.position.y+R.height/2,{zoom:b[2]})};return _.jsx("div",{className:Ne(["react-flow__node",`react-flow__node-${S}`,{[m]:L},h.className,{selected:h.selected,selectable:P,parent:N,draggable:L,dragging:z}]),ref:E,style:{zIndex:x.z,transform:`translate(${x.positionAbsolute.x}px,${x.positionAbsolute.y}px)`,pointerEvents:C?"all":"none",visibility:H?"visible":"hidden",...h.style,...k},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:T,onMouseMove:F,onMouseLeave:D,onContextMenu:U,onClick:K,onDoubleClick:W,onKeyDown:M?Q:void 0,tabIndex:M?0:void 0,onFocus:M?Z:void 0,role:h.ariaRole??(M?"group":void 0),"aria-roledescription":"node","aria-describedby":y?void 0:`${o0}-${v}`,"aria-label":h.ariaLabel,...h.domAttributes,children:_.jsx(fE,{value:e,children:_.jsx(A,{id:e,data:h.data,type:S,positionAbsoluteX:x.positionAbsolute.x,positionAbsoluteY:x.positionAbsolute.y,selected:h.selected??!1,selectable:P,draggable:L,deletable:h.deletable??!0,isConnectable:j,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:z,dragHandle:h.dragHandle,zIndex:x.z,parentId:h.parentId,...R})})})}var ME=O.memo(LE);const PE=e=>({nodesDraggable:e.nodesDraggable,nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function g0(e){const{nodesDraggable:n,nodesConnectable:t,nodesFocusable:r,elementsSelectable:i,onError:o}=re(PE,de),s=kE(e.onlyRenderVisibleElements),l=AE();return _.jsx("div",{className:"react-flow__nodes",style:Xs,children:s.map(u=>_.jsx(ME,{id:u,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:n,nodesConnectable:t,nodesFocusable:r,elementsSelectable:i,nodeClickDistance:e.nodeClickDistance,onError:o},u))})}g0.displayName="NodeRenderer";const TE=O.memo(g0);function zE(e){return re(O.useCallback(t=>{if(!e)return t.edges.map(i=>i.id);const r=[];if(t.width&&t.height)for(const i of t.edges){const o=t.nodeLookup.get(i.source),s=t.nodeLookup.get(i.target);o&&s&&mN({sourceNode:o,targetNode:s,width:t.width,height:t.height,transform:t.transform})&&r.push(i.id)}return r},[e]),de)}const OE=({color:e="none",strokeWidth:n=1})=>{const t={strokeWidth:n,...e&&{stroke:e}};return _.jsx("polyline",{className:"arrow",style:t,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},RE=({color:e="none",strokeWidth:n=1})=>{const t={strokeWidth:n,...e&&{stroke:e,fill:e}};return _.jsx("polyline",{className:"arrowclosed",style:t,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},vd={[gs.Arrow]:OE,[gs.ArrowClosed]:RE};function $E(e){const n=he();return O.useMemo(()=>{var i,o;return Object.prototype.hasOwnProperty.call(vd,e)?vd[e]:((o=(i=n.getState()).onError)==null||o.call(i,"009",Cn.error009(e)),null)},[e])}const DE=({id:e,type:n,color:t,width:r=12.5,height:i=12.5,markerUnits:o="strokeWidth",strokeWidth:s,orient:l="auto-start-reverse"})=>{const u=$E(n);return u?_.jsx("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${i}`,viewBox:"-10 -10 20 20",markerUnits:o,orient:l,refX:"0",refY:"0",children:_.jsx(u,{color:t,strokeWidth:s})}):null},m0=({defaultColor:e,rfId:n})=>{const t=re(o=>o.edges),r=re(o=>o.defaultEdgeOptions),i=O.useMemo(()=>EN(t,{id:n,defaultColor:e,defaultMarkerStart:r==null?void 0:r.markerStart,defaultMarkerEnd:r==null?void 0:r.markerEnd}),[t,r,n,e]);return i.length?_.jsx("svg",{className:"react-flow__marker","aria-hidden":"true",children:_.jsx("defs",{children:i.map(o=>_.jsx(DE,{id:o.id,type:o.type,color:o.color,width:o.width,height:o.height,markerUnits:o.markerUnits,strokeWidth:o.strokeWidth,orient:o.orient},o.id))})}):null};m0.displayName="MarkerDefinitions";var jE=O.memo(m0);function y0({x:e,y:n,label:t,labelStyle:r,labelShowBg:i=!0,labelBgStyle:o,labelBgPadding:s=[2,4],labelBgBorderRadius:l=2,children:u,className:a,...d}){const[c,f]=O.useState({x:1,y:0,width:0,height:0}),m=Ne(["react-flow__edge-textwrapper",a]),y=O.useRef(null);return O.useEffect(()=>{if(y.current){const v=y.current.getBBox();f({x:v.x,y:v.y,width:v.width,height:v.height})}},[t]),t?_.jsxs("g",{transform:`translate(${e-c.width/2} ${n-c.height/2})`,className:m,visibility:c.width?"visible":"hidden",...d,children:[i&&_.jsx("rect",{width:c.width+2*s[0],x:-s[0],y:-s[1],height:c.height+2*s[1],className:"react-flow__edge-textbg",style:o,rx:l,ry:l}),_.jsx("text",{className:"react-flow__edge-text",y:c.height/2,dy:"0.3em",ref:y,style:r,children:t}),u]}):null}y0.displayName="EdgeText";const FE=O.memo(y0);function Qs({path:e,labelX:n,labelY:t,label:r,labelStyle:i,labelShowBg:o,labelBgStyle:s,labelBgPadding:l,labelBgBorderRadius:u,interactionWidth:a=20,...d}){return _.jsxs(_.Fragment,{children:[_.jsx("path",{...d,d:e,fill:"none",className:Ne(["react-flow__edge-path",d.className])}),a?_.jsx("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:a,className:"react-flow__edge-interaction"}):null,r&&hn(n)&&hn(t)?_.jsx(FE,{x:n,y:t,label:r,labelStyle:i,labelShowBg:o,labelBgStyle:s,labelBgPadding:l,labelBgBorderRadius:u}):null]})}function xd({pos:e,x1:n,y1:t,x2:r,y2:i}){return e===q.Left||e===q.Right?[.5*(n+r),t]:[n,.5*(t+i)]}function v0({sourceX:e,sourceY:n,sourcePosition:t=q.Bottom,targetX:r,targetY:i,targetPosition:o=q.Top}){const[s,l]=xd({pos:t,x1:e,y1:n,x2:r,y2:i}),[u,a]=xd({pos:o,x1:r,y1:i,x2:e,y2:n}),[d,c,f,m]=jg({sourceX:e,sourceY:n,targetX:r,targetY:i,sourceControlX:s,sourceControlY:l,targetControlX:u,targetControlY:a});return[`M${e},${n} C${s},${l} ${u},${a} ${r},${i}`,d,c,f,m]}function x0(e){return O.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,sourcePosition:s,targetPosition:l,label:u,labelStyle:a,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:v,markerStart:w,interactionWidth:p})=>{const[g,h,x]=v0({sourceX:t,sourceY:r,sourcePosition:s,targetX:i,targetY:o,targetPosition:l}),N=e.isInternal?void 0:n;return _.jsx(Qs,{id:N,path:g,labelX:h,labelY:x,label:u,labelStyle:a,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:v,markerStart:w,interactionWidth:p})})}const HE=x0({isInternal:!1}),w0=x0({isInternal:!0});HE.displayName="SimpleBezierEdge";w0.displayName="SimpleBezierEdgeInternal";function _0(e){return O.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,label:s,labelStyle:l,labelShowBg:u,labelBgStyle:a,labelBgPadding:d,labelBgBorderRadius:c,style:f,sourcePosition:m=q.Bottom,targetPosition:y=q.Top,markerEnd:v,markerStart:w,pathOptions:p,interactionWidth:g})=>{const[h,x,N]=ju({sourceX:t,sourceY:r,sourcePosition:m,targetX:i,targetY:o,targetPosition:y,borderRadius:p==null?void 0:p.borderRadius,offset:p==null?void 0:p.offset,stepPosition:p==null?void 0:p.stepPosition}),S=e.isInternal?void 0:n;return _.jsx(Qs,{id:S,path:h,labelX:x,labelY:N,label:s,labelStyle:l,labelShowBg:u,labelBgStyle:a,labelBgPadding:d,labelBgBorderRadius:c,style:f,markerEnd:v,markerStart:w,interactionWidth:g})})}const N0=_0({isInternal:!1}),S0=_0({isInternal:!0});N0.displayName="SmoothStepEdge";S0.displayName="SmoothStepEdgeInternal";function E0(e){return O.memo(({id:n,...t})=>{var i;const r=e.isInternal?void 0:n;return _.jsx(N0,{...t,id:r,pathOptions:O.useMemo(()=>{var o;return{borderRadius:0,offset:(o=t.pathOptions)==null?void 0:o.offset}},[(i=t.pathOptions)==null?void 0:i.offset])})})}const BE=E0({isInternal:!1}),k0=E0({isInternal:!0});BE.displayName="StepEdge";k0.displayName="StepEdgeInternal";function C0(e){return O.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,label:s,labelStyle:l,labelShowBg:u,labelBgStyle:a,labelBgPadding:d,labelBgBorderRadius:c,style:f,markerEnd:m,markerStart:y,interactionWidth:v})=>{const[w,p,g]=Bg({sourceX:t,sourceY:r,targetX:i,targetY:o}),h=e.isInternal?void 0:n;return _.jsx(Qs,{id:h,path:w,labelX:p,labelY:g,label:s,labelStyle:l,labelShowBg:u,labelBgStyle:a,labelBgPadding:d,labelBgBorderRadius:c,style:f,markerEnd:m,markerStart:y,interactionWidth:v})})}const VE=C0({isInternal:!1}),A0=C0({isInternal:!0});VE.displayName="StraightEdge";A0.displayName="StraightEdgeInternal";function I0(e){return O.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,sourcePosition:s=q.Bottom,targetPosition:l=q.Top,label:u,labelStyle:a,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:v,markerStart:w,pathOptions:p,interactionWidth:g})=>{const[h,x,N]=Fg({sourceX:t,sourceY:r,sourcePosition:s,targetX:i,targetY:o,targetPosition:l,curvature:p==null?void 0:p.curvature}),S=e.isInternal?void 0:n;return _.jsx(Qs,{id:S,path:h,labelX:x,labelY:N,label:u,labelStyle:a,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:v,markerStart:w,interactionWidth:g})})}const bE=I0({isInternal:!1}),L0=I0({isInternal:!0});bE.displayName="BezierEdge";L0.displayName="BezierEdgeInternal";const wd={default:L0,straight:A0,step:k0,smoothstep:S0,simplebezier:w0},_d={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null},UE=(e,n,t)=>t===q.Left?e-n:t===q.Right?e+n:e,WE=(e,n,t)=>t===q.Top?e-n:t===q.Bottom?e+n:e,Nd="react-flow__edgeupdater";function Sd({position:e,centerX:n,centerY:t,radius:r=10,onMouseDown:i,onMouseEnter:o,onMouseOut:s,type:l}){return _.jsx("circle",{onMouseDown:i,onMouseEnter:o,onMouseOut:s,className:Ne([Nd,`${Nd}-${l}`]),cx:UE(n,r,e),cy:WE(t,r,e),r,stroke:"transparent",fill:"transparent"})}function YE({isReconnectable:e,reconnectRadius:n,edge:t,sourceX:r,sourceY:i,targetX:o,targetY:s,sourcePosition:l,targetPosition:u,onReconnect:a,onReconnectStart:d,onReconnectEnd:c,setReconnecting:f,setUpdateHover:m}){const y=he(),v=(x,N)=>{if(x.button!==0)return;const{autoPanOnConnect:S,domNode:A,connectionMode:L,connectionRadius:P,lib:j,onConnectStart:M,cancelConnection:$,nodeLookup:H,rfId:E,panBy:z,updateConnection:I}=y.getState(),R=N.type==="target",k=(F,D)=>{f(!1),c==null||c(F,t,N.type,D)},C=F=>a==null?void 0:a(t,F),T=(F,D)=>{f(!0),d==null||d(x,t,N.type),M==null||M(F,D)};Bu.onPointerDown(x.nativeEvent,{autoPanOnConnect:S,connectionMode:L,connectionRadius:P,domNode:A,handleId:N.id,nodeId:N.nodeId,nodeLookup:H,isTarget:R,edgeUpdaterType:N.type,lib:j,flowId:E,cancelConnection:$,panBy:z,isValidConnection:(...F)=>{var D,U;return((U=(D=y.getState()).isValidConnection)==null?void 0:U.call(D,...F))??!0},onConnect:C,onConnectStart:T,onConnectEnd:(...F)=>{var D,U;return(U=(D=y.getState()).onConnectEnd)==null?void 0:U.call(D,...F)},onReconnectEnd:k,updateConnection:I,getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,dragThreshold:y.getState().connectionDragThreshold,handleDomNode:x.currentTarget})},w=x=>v(x,{nodeId:t.target,id:t.targetHandle??null,type:"target"}),p=x=>v(x,{nodeId:t.source,id:t.sourceHandle??null,type:"source"}),g=()=>m(!0),h=()=>m(!1);return _.jsxs(_.Fragment,{children:[(e===!0||e==="source")&&_.jsx(Sd,{position:l,centerX:r,centerY:i,radius:n,onMouseDown:w,onMouseEnter:g,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&_.jsx(Sd,{position:u,centerX:o,centerY:s,radius:n,onMouseDown:p,onMouseEnter:g,onMouseOut:h,type:"target"})]})}function XE({id:e,edgesFocusable:n,edgesReconnectable:t,elementsSelectable:r,onClick:i,onDoubleClick:o,onContextMenu:s,onMouseEnter:l,onMouseMove:u,onMouseLeave:a,reconnectRadius:d,onReconnect:c,onReconnectStart:f,onReconnectEnd:m,rfId:y,edgeTypes:v,noPanClassName:w,onError:p,disableKeyboardA11y:g}){let h=re(G=>G.edgeLookup.get(e));const x=re(G=>G.defaultEdgeOptions);h=x?{...x,...h}:h;let N=h.type||"default",S=(v==null?void 0:v[N])||wd[N];S===void 0&&(p==null||p("011",Cn.error011(N)),N="default",S=(v==null?void 0:v.default)||wd.default);const A=!!(h.focusable||n&&typeof h.focusable>"u"),L=typeof c<"u"&&(h.reconnectable||t&&typeof h.reconnectable>"u"),P=!!(h.selectable||r&&typeof h.selectable>"u"),j=O.useRef(null),[M,$]=O.useState(!1),[H,E]=O.useState(!1),z=he(),{zIndex:I,sourceX:R,sourceY:k,targetX:C,targetY:T,sourcePosition:F,targetPosition:D}=re(O.useCallback(G=>{const X=G.nodeLookup.get(h.source),ee=G.nodeLookup.get(h.target);if(!X||!ee)return{zIndex:h.zIndex,..._d};const ue=SN({id:e,sourceNode:X,targetNode:ee,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:G.connectionMode,onError:p});return{zIndex:gN({selected:h.selected,zIndex:h.zIndex,sourceNode:X,targetNode:ee,elevateOnSelect:G.elevateEdgesOnSelect,zIndexMode:G.zIndexMode}),...ue||_d}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),de),U=O.useMemo(()=>h.markerStart?`url('#${Fu(h.markerStart,y)}')`:void 0,[h.markerStart,y]),W=O.useMemo(()=>h.markerEnd?`url('#${Fu(h.markerEnd,y)}')`:void 0,[h.markerEnd,y]);if(h.hidden||R===null||k===null||C===null||T===null)return null;const K=G=>{var oe;const{addSelectedEdges:X,unselectNodesAndEdges:ee,multiSelectionActive:ue}=z.getState();P&&(z.setState({nodesSelectionActive:!1}),h.selected&&ue?(ee({nodes:[],edges:[h]}),(oe=j.current)==null||oe.blur()):X([e])),i&&i(G,h)},Q=o?G=>{o(G,{...h})}:void 0,Z=s?G=>{s(G,{...h})}:void 0,b=l?G=>{l(G,{...h})}:void 0,J=u?G=>{u(G,{...h})}:void 0,ne=a?G=>{a(G,{...h})}:void 0,V=G=>{var X;if(!g&&Eg.includes(G.key)&&P){const{unselectNodesAndEdges:ee,addSelectedEdges:ue}=z.getState();G.key==="Escape"?((X=j.current)==null||X.blur(),ee({edges:[h]})):ue([e])}};return _.jsx("svg",{style:{zIndex:I},children:_.jsxs("g",{className:Ne(["react-flow__edge",`react-flow__edge-${N}`,h.className,w,{selected:h.selected,animated:h.animated,inactive:!P&&!i,updating:M,selectable:P}]),onClick:K,onDoubleClick:Q,onContextMenu:Z,onMouseEnter:b,onMouseMove:J,onMouseLeave:ne,onKeyDown:A?V:void 0,tabIndex:A?0:void 0,role:h.ariaRole??(A?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":A?`${s0}-${y}`:void 0,ref:j,...h.domAttributes,children:[!H&&_.jsx(S,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:P,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:R,sourceY:k,targetX:C,targetY:T,sourcePosition:F,targetPosition:D,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:U,markerEnd:W,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),L&&_.jsx(YE,{edge:h,isReconnectable:L,reconnectRadius:d,onReconnect:c,onReconnectStart:f,onReconnectEnd:m,sourceX:R,sourceY:k,targetX:C,targetY:T,sourcePosition:F,targetPosition:D,setUpdateHover:$,setReconnecting:E})]})})}var QE=O.memo(XE);const GE=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function M0({defaultMarkerColor:e,onlyRenderVisibleElements:n,rfId:t,edgeTypes:r,noPanClassName:i,onReconnect:o,onEdgeContextMenu:s,onEdgeMouseEnter:l,onEdgeMouseMove:u,onEdgeMouseLeave:a,onEdgeClick:d,reconnectRadius:c,onEdgeDoubleClick:f,onReconnectStart:m,onReconnectEnd:y,disableKeyboardA11y:v}){const{edgesFocusable:w,edgesReconnectable:p,elementsSelectable:g,onError:h}=re(GE,de),x=zE(n);return _.jsxs("div",{className:"react-flow__edges",children:[_.jsx(jE,{defaultColor:e,rfId:t}),x.map(N=>_.jsx(QE,{id:N,edgesFocusable:w,edgesReconnectable:p,elementsSelectable:g,noPanClassName:i,onReconnect:o,onContextMenu:s,onMouseEnter:l,onMouseMove:u,onMouseLeave:a,onClick:d,reconnectRadius:c,onDoubleClick:f,onReconnectStart:m,onReconnectEnd:y,rfId:t,onError:h,edgeTypes:r,disableKeyboardA11y:v},N))]})}M0.displayName="EdgeRenderer";const KE=O.memo(M0),ZE=e=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;function qE({children:e}){const n=re(ZE);return _.jsx("div",{className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:n},children:e})}function JE(e){const n=ec(),t=O.useRef(!1);O.useEffect(()=>{!t.current&&n.viewportInitialized&&e&&(setTimeout(()=>e(n),1),t.current=!0)},[e,n.viewportInitialized])}const e2=e=>{var n;return(n=e.panZoom)==null?void 0:n.syncViewport};function n2(e){const n=re(e2),t=he();return O.useEffect(()=>{e&&(n==null||n(e),t.setState({transform:[e.x,e.y,e.zoom]}))},[e,n]),null}function t2(e){return e.connection.inProgress?{...e.connection,to:Wi(e.connection.to,e.transform)}:{...e.connection}}function r2(e){return t2}function i2(e){const n=r2();return re(n,de)}const o2=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function s2({containerStyle:e,style:n,type:t,component:r}){const{nodesConnectable:i,width:o,height:s,isValid:l,inProgress:u}=re(o2,de);return!(o&&i&&u)?null:_.jsx("svg",{style:e,width:o,height:s,className:"react-flow__connectionline react-flow__container",children:_.jsx("g",{className:Ne(["react-flow__connection",Ag(l)]),children:_.jsx(P0,{style:n,type:t,CustomComponent:r,isValid:l})})})}const P0=({style:e,type:n=Zn.Bezier,CustomComponent:t,isValid:r})=>{const{inProgress:i,from:o,fromNode:s,fromHandle:l,fromPosition:u,to:a,toNode:d,toHandle:c,toPosition:f,pointer:m}=i2();if(!i)return;if(t)return _.jsx(t,{connectionLineType:n,connectionLineStyle:e,fromNode:s,fromHandle:l,fromX:o.x,fromY:o.y,toX:a.x,toY:a.y,fromPosition:u,toPosition:f,connectionStatus:Ag(r),toNode:d,toHandle:c,pointer:m});let y="";const v={sourceX:o.x,sourceY:o.y,sourcePosition:u,targetX:a.x,targetY:a.y,targetPosition:f};switch(n){case Zn.Bezier:[y]=Fg(v);break;case Zn.SimpleBezier:[y]=v0(v);break;case Zn.Step:[y]=ju({...v,borderRadius:0});break;case Zn.SmoothStep:[y]=ju(v);break;default:[y]=Bg(v)}return _.jsx("path",{d:y,fill:"none",className:"react-flow__connection-path",style:e})};P0.displayName="ConnectionLine";const l2={};function Ed(e=l2){O.useRef(e),he(),O.useEffect(()=>{},[e])}function u2(){he(),O.useRef(!1),O.useEffect(()=>{},[])}function T0({nodeTypes:e,edgeTypes:n,onInit:t,onNodeClick:r,onEdgeClick:i,onNodeDoubleClick:o,onEdgeDoubleClick:s,onNodeMouseEnter:l,onNodeMouseMove:u,onNodeMouseLeave:a,onNodeContextMenu:d,onSelectionContextMenu:c,onSelectionStart:f,onSelectionEnd:m,connectionLineType:y,connectionLineStyle:v,connectionLineComponent:w,connectionLineContainerStyle:p,selectionKeyCode:g,selectionOnDrag:h,selectionMode:x,multiSelectionKeyCode:N,panActivationKeyCode:S,zoomActivationKeyCode:A,deleteKeyCode:L,onlyRenderVisibleElements:P,elementsSelectable:j,defaultViewport:M,translateExtent:$,minZoom:H,maxZoom:E,preventScrolling:z,defaultMarkerColor:I,zoomOnScroll:R,zoomOnPinch:k,panOnScroll:C,panOnScrollSpeed:T,panOnScrollMode:F,zoomOnDoubleClick:D,panOnDrag:U,onPaneClick:W,onPaneMouseEnter:K,onPaneMouseMove:Q,onPaneMouseLeave:Z,onPaneScroll:b,onPaneContextMenu:J,paneClickDistance:ne,nodeClickDistance:V,onEdgeContextMenu:G,onEdgeMouseEnter:X,onEdgeMouseMove:ee,onEdgeMouseLeave:ue,reconnectRadius:oe,onReconnect:Me,onReconnectStart:bn,onReconnectEnd:In,noDragClassName:mt,noWheelClassName:Pr,noPanClassName:Tr,disableKeyboardA11y:zr,nodeExtent:Gs,rfId:Yi,viewport:Bt,onViewportChange:Or}){return Ed(e),Ed(n),u2(),JE(t),n2(Bt),_.jsx(SE,{onPaneClick:W,onPaneMouseEnter:K,onPaneMouseMove:Q,onPaneMouseLeave:Z,onPaneContextMenu:J,onPaneScroll:b,paneClickDistance:ne,deleteKeyCode:L,selectionKeyCode:g,selectionOnDrag:h,selectionMode:x,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:N,panActivationKeyCode:S,zoomActivationKeyCode:A,elementsSelectable:j,zoomOnScroll:R,zoomOnPinch:k,zoomOnDoubleClick:D,panOnScroll:C,panOnScrollSpeed:T,panOnScrollMode:F,panOnDrag:U,defaultViewport:M,translateExtent:$,minZoom:H,maxZoom:E,onSelectionContextMenu:c,preventScrolling:z,noDragClassName:mt,noWheelClassName:Pr,noPanClassName:Tr,disableKeyboardA11y:zr,onViewportChange:Or,isControlledViewport:!!Bt,children:_.jsxs(qE,{children:[_.jsx(KE,{edgeTypes:n,onEdgeClick:i,onEdgeDoubleClick:s,onReconnect:Me,onReconnectStart:bn,onReconnectEnd:In,onlyRenderVisibleElements:P,onEdgeContextMenu:G,onEdgeMouseEnter:X,onEdgeMouseMove:ee,onEdgeMouseLeave:ue,reconnectRadius:oe,defaultMarkerColor:I,noPanClassName:Tr,disableKeyboardA11y:zr,rfId:Yi}),_.jsx(s2,{style:v,type:y,component:w,containerStyle:p}),_.jsx("div",{className:"react-flow__edgelabel-renderer"}),_.jsx(TE,{nodeTypes:e,onNodeClick:r,onNodeDoubleClick:o,onNodeMouseEnter:l,onNodeMouseMove:u,onNodeMouseLeave:a,onNodeContextMenu:d,nodeClickDistance:V,onlyRenderVisibleElements:P,noPanClassName:Tr,noDragClassName:mt,disableKeyboardA11y:zr,nodeExtent:Gs,rfId:Yi}),_.jsx("div",{className:"react-flow__viewport-portal"})]})})}T0.displayName="GraphView";const a2=O.memo(T0),kd=({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,width:i,height:o,fitView:s,fitViewOptions:l,minZoom:u=.5,maxZoom:a=2,nodeOrigin:d,nodeExtent:c,zIndexMode:f="basic"}={})=>{const m=new Map,y=new Map,v=new Map,w=new Map,p=r??n??[],g=t??e??[],h=d??[0,0],x=c??Li;Ug(v,w,p);const{nodesInitialized:N}=Hu(g,m,y,{nodeOrigin:h,nodeExtent:x,zIndexMode:f});let S=[0,0,1];if(s&&i&&o){const A=bi(m,{filter:M=>!!((M.width||M.initialWidth)&&(M.height||M.initialHeight))}),{x:L,y:P,zoom:j}=Xa(A,i,o,u,a,(l==null?void 0:l.padding)??.1);S=[L,P,j]}return{rfId:"1",width:i??0,height:o??0,transform:S,nodes:g,nodesInitialized:N,nodeLookup:m,parentLookup:y,edges:p,edgeLookup:w,connectionLookup:v,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:t!==void 0,hasDefaultEdges:r!==void 0,panZoom:null,minZoom:u,maxZoom:a,translateExtent:Li,nodeExtent:x,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Nr.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:l,fitViewResolver:null,connection:{...Cg},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:aN,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:kg,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},c2=({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,width:i,height:o,fitView:s,fitViewOptions:l,minZoom:u,maxZoom:a,nodeOrigin:d,nodeExtent:c,zIndexMode:f})=>AS((m,y)=>{async function v(){const{nodeLookup:w,panZoom:p,fitViewOptions:g,fitViewResolver:h,width:x,height:N,minZoom:S,maxZoom:A}=y();p&&(await lN({nodes:w,width:x,height:N,panZoom:p,minZoom:S,maxZoom:A},g),h==null||h.resolve(!0),m({fitViewResolver:null}))}return{...kd({nodes:e,edges:n,width:i,height:o,fitView:s,fitViewOptions:l,minZoom:u,maxZoom:a,nodeOrigin:d,nodeExtent:c,defaultNodes:t,defaultEdges:r,zIndexMode:f}),setNodes:w=>{const{nodeLookup:p,parentLookup:g,nodeOrigin:h,elevateNodesOnSelect:x,fitViewQueued:N,zIndexMode:S,nodesSelectionActive:A}=y(),{nodesInitialized:L,hasSelectedNodes:P}=Hu(w,p,g,{nodeOrigin:h,nodeExtent:c,elevateNodesOnSelect:x,checkEquality:!0,zIndexMode:S}),j=A&&P;N&&L?(v(),m({nodes:w,nodesInitialized:L,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:j})):m({nodes:w,nodesInitialized:L,nodesSelectionActive:j})},setEdges:w=>{const{connectionLookup:p,edgeLookup:g}=y();Ug(p,g,w),m({edges:w})},setDefaultNodesAndEdges:(w,p)=>{if(w){const{setNodes:g}=y();g(w),m({hasDefaultNodes:!0})}if(p){const{setEdges:g}=y();g(p),m({hasDefaultEdges:!0})}},updateNodeInternals:w=>{const{triggerNodeChanges:p,nodeLookup:g,parentLookup:h,domNode:x,nodeOrigin:N,nodeExtent:S,debug:A,fitViewQueued:L,zIndexMode:P}=y(),{changes:j,updatedInternals:M}=PN(w,g,h,x,N,S,P);M&&(AN(g,h,{nodeOrigin:N,nodeExtent:S,zIndexMode:P}),L?(v(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),(j==null?void 0:j.length)>0&&(A&&console.log("React Flow: trigger node changes",j),p==null||p(j)))},updateNodePositions:(w,p=!1)=>{const g=[];let h=[];const{nodeLookup:x,triggerNodeChanges:N,connection:S,updateConnection:A,onNodesChangeMiddlewareMap:L}=y();for(const[P,j]of w){const M=x.get(P),$=!!(M!=null&&M.expandParent&&(M!=null&&M.parentId)&&(j!=null&&j.position)),H={id:P,type:"position",position:$?{x:Math.max(0,j.position.x),y:Math.max(0,j.position.y)}:j.position,dragging:p};if(M&&S.inProgress&&S.fromNode.id===M.id){const E=jt(M,S.fromHandle,q.Left,!0);A({...S,from:E})}$&&M.parentId&&g.push({id:P,parentId:M.parentId,rect:{...j.internals.positionAbsolute,width:j.measured.width??0,height:j.measured.height??0}}),h.push(H)}if(g.length>0){const{parentLookup:P,nodeOrigin:j}=y(),M=Ja(g,x,P,j);h.push(...M)}for(const P of L.values())h=P(h);N(h)},triggerNodeChanges:w=>{const{onNodesChange:p,setNodes:g,nodes:h,hasDefaultNodes:x,debug:N}=y();if(w!=null&&w.length){if(x){const S=QS(w,h);g(S)}N&&console.log("React Flow: trigger node changes",w),p==null||p(w)}},triggerEdgeChanges:w=>{const{onEdgesChange:p,setEdges:g,edges:h,hasDefaultEdges:x,debug:N}=y();if(w!=null&&w.length){if(x){const S=GS(w,h);g(S)}N&&console.log("React Flow: trigger edge changes",w),p==null||p(w)}},addSelectedNodes:w=>{const{multiSelectionActive:p,edgeLookup:g,nodeLookup:h,triggerNodeChanges:x,triggerEdgeChanges:N}=y();if(p){const S=w.map(A=>wt(A,!0));x(S);return}x(ir(h,new Set([...w]),!0)),N(ir(g))},addSelectedEdges:w=>{const{multiSelectionActive:p,edgeLookup:g,nodeLookup:h,triggerNodeChanges:x,triggerEdgeChanges:N}=y();if(p){const S=w.map(A=>wt(A,!0));N(S);return}N(ir(g,new Set([...w]))),x(ir(h,new Set,!0))},unselectNodesAndEdges:({nodes:w,edges:p}={})=>{const{edges:g,nodes:h,nodeLookup:x,triggerNodeChanges:N,triggerEdgeChanges:S}=y(),A=w||h,L=p||g,P=[];for(const M of A){if(!M.selected)continue;const $=x.get(M.id);$&&($.selected=!1),P.push(wt(M.id,!1))}const j=[];for(const M of L)M.selected&&j.push(wt(M.id,!1));N(P),S(j)},setMinZoom:w=>{const{panZoom:p,maxZoom:g}=y();p==null||p.setScaleExtent([w,g]),m({minZoom:w})},setMaxZoom:w=>{const{panZoom:p,minZoom:g}=y();p==null||p.setScaleExtent([g,w]),m({maxZoom:w})},setTranslateExtent:w=>{var p;(p=y().panZoom)==null||p.setTranslateExtent(w),m({translateExtent:w})},resetSelectedElements:()=>{const{edges:w,nodes:p,triggerNodeChanges:g,triggerEdgeChanges:h,elementsSelectable:x}=y();if(!x)return;const N=p.reduce((A,L)=>L.selected?[...A,wt(L.id,!1)]:A,[]),S=w.reduce((A,L)=>L.selected?[...A,wt(L.id,!1)]:A,[]);g(N),h(S)},setNodeExtent:w=>{const{nodes:p,nodeLookup:g,parentLookup:h,nodeOrigin:x,elevateNodesOnSelect:N,nodeExtent:S,zIndexMode:A}=y();w[0][0]===S[0][0]&&w[0][1]===S[0][1]&&w[1][0]===S[1][0]&&w[1][1]===S[1][1]||(Hu(p,g,h,{nodeOrigin:x,nodeExtent:w,elevateNodesOnSelect:N,checkEquality:!1,zIndexMode:A}),m({nodeExtent:w}))},panBy:w=>{const{transform:p,width:g,height:h,panZoom:x,translateExtent:N}=y();return TN({delta:w,panZoom:x,transform:p,translateExtent:N,width:g,height:h})},setCenter:async(w,p,g)=>{const{width:h,height:x,maxZoom:N,panZoom:S}=y();if(!S)return Promise.resolve(!1);const A=typeof(g==null?void 0:g.zoom)<"u"?g.zoom:N;return await S.setViewport({x:h/2-w*A,y:x/2-p*A,zoom:A},{duration:g==null?void 0:g.duration,ease:g==null?void 0:g.ease,interpolate:g==null?void 0:g.interpolate}),Promise.resolve(!0)},cancelConnection:()=>{m({connection:{...Cg}})},updateConnection:w=>{m({connection:w})},reset:()=>m({...kd()})}},Object.is);function f2({initialNodes:e,initialEdges:n,defaultNodes:t,defaultEdges:r,initialWidth:i,initialHeight:o,initialMinZoom:s,initialMaxZoom:l,initialFitViewOptions:u,fitView:a,nodeOrigin:d,nodeExtent:c,zIndexMode:f,children:m}){const[y]=O.useState(()=>c2({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,width:i,height:o,fitView:a,minZoom:s,maxZoom:l,fitViewOptions:u,nodeOrigin:d,nodeExtent:c,zIndexMode:f}));return _.jsx(IS,{value:y,children:_.jsx(qS,{children:m})})}function d2({children:e,nodes:n,edges:t,defaultNodes:r,defaultEdges:i,width:o,height:s,fitView:l,fitViewOptions:u,minZoom:a,maxZoom:d,nodeOrigin:c,nodeExtent:f,zIndexMode:m}){return O.useContext(Ws)?_.jsx(_.Fragment,{children:e}):_.jsx(f2,{initialNodes:n,initialEdges:t,defaultNodes:r,defaultEdges:i,initialWidth:o,initialHeight:s,fitView:l,initialFitViewOptions:u,initialMinZoom:a,initialMaxZoom:d,nodeOrigin:c,nodeExtent:f,zIndexMode:m,children:e})}const h2={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function p2({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,className:i,nodeTypes:o,edgeTypes:s,onNodeClick:l,onEdgeClick:u,onInit:a,onMove:d,onMoveStart:c,onMoveEnd:f,onConnect:m,onConnectStart:y,onConnectEnd:v,onClickConnectStart:w,onClickConnectEnd:p,onNodeMouseEnter:g,onNodeMouseMove:h,onNodeMouseLeave:x,onNodeContextMenu:N,onNodeDoubleClick:S,onNodeDragStart:A,onNodeDrag:L,onNodeDragStop:P,onNodesDelete:j,onEdgesDelete:M,onDelete:$,onSelectionChange:H,onSelectionDragStart:E,onSelectionDrag:z,onSelectionDragStop:I,onSelectionContextMenu:R,onSelectionStart:k,onSelectionEnd:C,onBeforeDelete:T,connectionMode:F,connectionLineType:D=Zn.Bezier,connectionLineStyle:U,connectionLineComponent:W,connectionLineContainerStyle:K,deleteKeyCode:Q="Backspace",selectionKeyCode:Z="Shift",selectionOnDrag:b=!1,selectionMode:J=Mi.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:V=Ti()?"Meta":"Control",zoomActivationKeyCode:G=Ti()?"Meta":"Control",snapToGrid:X,snapGrid:ee,onlyRenderVisibleElements:ue=!1,selectNodesOnDrag:oe,nodesDraggable:Me,autoPanOnNodeFocus:bn,nodesConnectable:In,nodesFocusable:mt,nodeOrigin:Pr=l0,edgesFocusable:Tr,edgesReconnectable:zr,elementsSelectable:Gs=!0,defaultViewport:Yi=BS,minZoom:Bt=.5,maxZoom:Or=2,translateExtent:ic=Li,preventScrolling:H0=!0,nodeExtent:Ks,defaultMarkerColor:B0="#b1b1b7",zoomOnScroll:V0=!0,zoomOnPinch:b0=!0,panOnScroll:U0=!1,panOnScrollSpeed:W0=.5,panOnScrollMode:Y0=Lt.Free,zoomOnDoubleClick:X0=!0,panOnDrag:Q0=!0,onPaneClick:G0,onPaneMouseEnter:K0,onPaneMouseMove:Z0,onPaneMouseLeave:q0,onPaneScroll:J0,onPaneContextMenu:em,paneClickDistance:nm=1,nodeClickDistance:tm=0,children:rm,onReconnect:im,onReconnectStart:om,onReconnectEnd:sm,onEdgeContextMenu:lm,onEdgeDoubleClick:um,onEdgeMouseEnter:am,onEdgeMouseMove:cm,onEdgeMouseLeave:fm,reconnectRadius:dm=10,onNodesChange:hm,onEdgesChange:pm,noDragClassName:gm="nodrag",noWheelClassName:mm="nowheel",noPanClassName:oc="nopan",fitView:sc,fitViewOptions:lc,connectOnClick:ym,attributionPosition:vm,proOptions:xm,defaultEdgeOptions:wm,elevateNodesOnSelect:_m=!0,elevateEdgesOnSelect:Nm=!1,disableKeyboardA11y:uc=!1,autoPanOnConnect:Sm,autoPanOnNodeDrag:Em,autoPanSpeed:km,connectionRadius:Cm,isValidConnection:Am,onError:Im,style:Lm,id:ac,nodeDragThreshold:Mm,connectionDragThreshold:Pm,viewport:Tm,onViewportChange:zm,width:Om,height:Rm,colorMode:$m="light",debug:Dm,onScroll:Xi,ariaLabelConfig:jm,zIndexMode:cc="basic",...Fm},Hm){const Zs=ac||"1",Bm=WS($m),Vm=O.useCallback(fc=>{fc.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),Xi==null||Xi(fc)},[Xi]);return _.jsx("div",{"data-testid":"rf__wrapper",...Fm,onScroll:Vm,style:{...Lm,...h2},ref:Hm,className:Ne(["react-flow",i,Bm]),id:ac,role:"application",children:_.jsxs(d2,{nodes:e,edges:n,width:Om,height:Rm,fitView:sc,fitViewOptions:lc,minZoom:Bt,maxZoom:Or,nodeOrigin:Pr,nodeExtent:Ks,zIndexMode:cc,children:[_.jsx(US,{nodes:e,edges:n,defaultNodes:t,defaultEdges:r,onConnect:m,onConnectStart:y,onConnectEnd:v,onClickConnectStart:w,onClickConnectEnd:p,nodesDraggable:Me,autoPanOnNodeFocus:bn,nodesConnectable:In,nodesFocusable:mt,edgesFocusable:Tr,edgesReconnectable:zr,elementsSelectable:Gs,elevateNodesOnSelect:_m,elevateEdgesOnSelect:Nm,minZoom:Bt,maxZoom:Or,nodeExtent:Ks,onNodesChange:hm,onEdgesChange:pm,snapToGrid:X,snapGrid:ee,connectionMode:F,translateExtent:ic,connectOnClick:ym,defaultEdgeOptions:wm,fitView:sc,fitViewOptions:lc,onNodesDelete:j,onEdgesDelete:M,onDelete:$,onNodeDragStart:A,onNodeDrag:L,onNodeDragStop:P,onSelectionDrag:z,onSelectionDragStart:E,onSelectionDragStop:I,onMove:d,onMoveStart:c,onMoveEnd:f,noPanClassName:oc,nodeOrigin:Pr,rfId:Zs,autoPanOnConnect:Sm,autoPanOnNodeDrag:Em,autoPanSpeed:km,onError:Im,connectionRadius:Cm,isValidConnection:Am,selectNodesOnDrag:oe,nodeDragThreshold:Mm,connectionDragThreshold:Pm,onBeforeDelete:T,debug:Dm,ariaLabelConfig:jm,zIndexMode:cc}),_.jsx(a2,{onInit:a,onNodeClick:l,onEdgeClick:u,onNodeMouseEnter:g,onNodeMouseMove:h,onNodeMouseLeave:x,onNodeContextMenu:N,onNodeDoubleClick:S,nodeTypes:o,edgeTypes:s,connectionLineType:D,connectionLineStyle:U,connectionLineComponent:W,connectionLineContainerStyle:K,selectionKeyCode:Z,selectionOnDrag:b,selectionMode:J,deleteKeyCode:Q,multiSelectionKeyCode:V,panActivationKeyCode:ne,zoomActivationKeyCode:G,onlyRenderVisibleElements:ue,defaultViewport:Yi,translateExtent:ic,minZoom:Bt,maxZoom:Or,preventScrolling:H0,zoomOnScroll:V0,zoomOnPinch:b0,zoomOnDoubleClick:X0,panOnScroll:U0,panOnScrollSpeed:W0,panOnScrollMode:Y0,panOnDrag:Q0,onPaneClick:G0,onPaneMouseEnter:K0,onPaneMouseMove:Z0,onPaneMouseLeave:q0,onPaneScroll:J0,onPaneContextMenu:em,paneClickDistance:nm,nodeClickDistance:tm,onSelectionContextMenu:R,onSelectionStart:k,onSelectionEnd:C,onReconnect:im,onReconnectStart:om,onReconnectEnd:sm,onEdgeContextMenu:lm,onEdgeDoubleClick:um,onEdgeMouseEnter:am,onEdgeMouseMove:cm,onEdgeMouseLeave:fm,reconnectRadius:dm,defaultMarkerColor:B0,noDragClassName:gm,noWheelClassName:mm,noPanClassName:oc,rfId:Zs,disableKeyboardA11y:uc,nodeExtent:Ks,viewport:Tm,onViewportChange:zm}),_.jsx(HS,{onSelectionChange:H}),rm,_.jsx(RS,{proOptions:xm,position:vm}),_.jsx(OS,{rfId:Zs,disableKeyboardA11y:uc})]})})}var g2=a0(p2);function m2({dimensions:e,lineWidth:n,variant:t,className:r}){return _.jsx("path",{strokeWidth:n,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ne(["react-flow__background-pattern",t,r])})}function y2({radius:e,className:n}){return _.jsx("circle",{cx:e,cy:e,r:e,className:Ne(["react-flow__background-pattern","dots",n])})}var at;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(at||(at={}));const v2={[at.Dots]:1,[at.Lines]:1,[at.Cross]:6},x2=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function z0({id:e,variant:n=at.Dots,gap:t=20,size:r,lineWidth:i=1,offset:o=0,color:s,bgColor:l,style:u,className:a,patternClassName:d}){const c=O.useRef(null),{transform:f,patternId:m}=re(x2,de),y=r||v2[n],v=n===at.Dots,w=n===at.Cross,p=Array.isArray(t)?t:[t,t],g=[p[0]*f[2]||1,p[1]*f[2]||1],h=y*f[2],x=Array.isArray(o)?o:[o,o],N=w?[h,h]:g,S=[x[0]*f[2]||1+N[0]/2,x[1]*f[2]||1+N[1]/2],A=`${m}${e||""}`;return _.jsxs("svg",{className:Ne(["react-flow__background",a]),style:{...u,...Xs,"--xy-background-color-props":l,"--xy-background-pattern-color-props":s},ref:c,"data-testid":"rf__background",children:[_.jsx("pattern",{id:A,x:f[0]%g[0],y:f[1]%g[1],width:g[0],height:g[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:v?_.jsx(y2,{radius:h/2,className:d}):_.jsx(m2,{dimensions:N,lineWidth:i,variant:n,className:d})}),_.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${A})`})]})}z0.displayName="Background";const w2=O.memo(z0);function _2(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:_.jsx("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function N2(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:_.jsx("path",{d:"M0 0h32v4.2H0z"})})}function S2(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:_.jsx("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function E2(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:_.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function k2(){return _.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:_.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function wo({children:e,className:n,...t}){return _.jsx("button",{type:"button",className:Ne(["react-flow__controls-button",n]),...t,children:e})}const C2=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function O0({style:e,showZoom:n=!0,showFitView:t=!0,showInteractive:r=!0,fitViewOptions:i,onZoomIn:o,onZoomOut:s,onFitView:l,onInteractiveChange:u,className:a,children:d,position:c="bottom-left",orientation:f="vertical","aria-label":m}){const y=he(),{isInteractive:v,minZoomReached:w,maxZoomReached:p,ariaLabelConfig:g}=re(C2,de),{zoomIn:h,zoomOut:x,fitView:N}=ec(),S=()=>{h(),o==null||o()},A=()=>{x(),s==null||s()},L=()=>{N(i),l==null||l()},P=()=>{y.setState({nodesDraggable:!v,nodesConnectable:!v,elementsSelectable:!v}),u==null||u(!v)},j=f==="horizontal"?"horizontal":"vertical";return _.jsxs(Ys,{className:Ne(["react-flow__controls",j,a]),position:c,style:e,"data-testid":"rf__controls","aria-label":m??g["controls.ariaLabel"],children:[n&&_.jsxs(_.Fragment,{children:[_.jsx(wo,{onClick:S,className:"react-flow__controls-zoomin",title:g["controls.zoomIn.ariaLabel"],"aria-label":g["controls.zoomIn.ariaLabel"],disabled:p,children:_.jsx(_2,{})}),_.jsx(wo,{onClick:A,className:"react-flow__controls-zoomout",title:g["controls.zoomOut.ariaLabel"],"aria-label":g["controls.zoomOut.ariaLabel"],disabled:w,children:_.jsx(N2,{})})]}),t&&_.jsx(wo,{className:"react-flow__controls-fitview",onClick:L,title:g["controls.fitView.ariaLabel"],"aria-label":g["controls.fitView.ariaLabel"],children:_.jsx(S2,{})}),r&&_.jsx(wo,{className:"react-flow__controls-interactive",onClick:P,title:g["controls.interactive.ariaLabel"],"aria-label":g["controls.interactive.ariaLabel"],children:v?_.jsx(k2,{}):_.jsx(E2,{})}),d]})}O0.displayName="Controls";const A2=O.memo(O0);function I2({id:e,x:n,y:t,width:r,height:i,style:o,color:s,strokeColor:l,strokeWidth:u,className:a,borderRadius:d,shapeRendering:c,selected:f,onClick:m}){const{background:y,backgroundColor:v}=o||{},w=s||y||v;return _.jsx("rect",{className:Ne(["react-flow__minimap-node",{selected:f},a]),x:n,y:t,rx:d,ry:d,width:r,height:i,style:{fill:w,stroke:l,strokeWidth:u},shapeRendering:c,onClick:m?p=>m(p,e):void 0})}const L2=O.memo(I2),M2=e=>e.nodes.map(n=>n.id),zl=e=>e instanceof Function?e:()=>e;function P2({nodeStrokeColor:e,nodeColor:n,nodeClassName:t="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:o=L2,onClick:s}){const l=re(M2,de),u=zl(n),a=zl(e),d=zl(t),c=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return _.jsx(_.Fragment,{children:l.map(f=>_.jsx(z2,{id:f,nodeColorFunc:u,nodeStrokeColorFunc:a,nodeClassNameFunc:d,nodeBorderRadius:r,nodeStrokeWidth:i,NodeComponent:o,onClick:s,shapeRendering:c},f))})}function T2({id:e,nodeColorFunc:n,nodeStrokeColorFunc:t,nodeClassNameFunc:r,nodeBorderRadius:i,nodeStrokeWidth:o,shapeRendering:s,NodeComponent:l,onClick:u}){const{node:a,x:d,y:c,width:f,height:m}=re(y=>{const v=y.nodeLookup.get(e);if(!v)return{node:void 0,x:0,y:0,width:0,height:0};const w=v.internals.userNode,{x:p,y:g}=v.internals.positionAbsolute,{width:h,height:x}=Vn(w);return{node:w,x:p,y:g,width:h,height:x}},de);return!a||a.hidden||!zg(a)?null:_.jsx(l,{x:d,y:c,width:f,height:m,style:a.style,selected:!!a.selected,className:r(a),color:n(a),borderRadius:i,strokeColor:t(a),strokeWidth:o,shapeRendering:s,onClick:u,id:a.id})}const z2=O.memo(T2);var O2=O.memo(P2);const R2=200,$2=150,D2=e=>!e.hidden,j2=e=>{const n={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:n,boundingRect:e.nodeLookup.size>0?Tg(bi(e.nodeLookup,{filter:D2}),n):n,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},F2="react-flow__minimap-desc";function R0({style:e,className:n,nodeStrokeColor:t,nodeColor:r,nodeClassName:i="",nodeBorderRadius:o=5,nodeStrokeWidth:s,nodeComponent:l,bgColor:u,maskColor:a,maskStrokeColor:d,maskStrokeWidth:c,position:f="bottom-right",onClick:m,onNodeClick:y,pannable:v=!1,zoomable:w=!1,ariaLabel:p,inversePan:g,zoomStep:h=1,offsetScale:x=5}){const N=he(),S=O.useRef(null),{boundingRect:A,viewBB:L,rfId:P,panZoom:j,translateExtent:M,flowWidth:$,flowHeight:H,ariaLabelConfig:E}=re(j2,de),z=(e==null?void 0:e.width)??R2,I=(e==null?void 0:e.height)??$2,R=A.width/z,k=A.height/I,C=Math.max(R,k),T=C*z,F=C*I,D=x*C,U=A.x-(T-A.width)/2-D,W=A.y-(F-A.height)/2-D,K=T+D*2,Q=F+D*2,Z=`${F2}-${P}`,b=O.useRef(0),J=O.useRef();b.current=C,O.useEffect(()=>{if(S.current&&j)return J.current=BN({domNode:S.current,panZoom:j,getTransform:()=>N.getState().transform,getViewScale:()=>b.current}),()=>{var X;(X=J.current)==null||X.destroy()}},[j]),O.useEffect(()=>{var X;(X=J.current)==null||X.update({translateExtent:M,width:$,height:H,inversePan:g,pannable:v,zoomStep:h,zoomable:w})},[v,w,g,h,M,$,H]);const ne=m?X=>{var oe;const[ee,ue]=((oe=J.current)==null?void 0:oe.pointer(X))||[0,0];m(X,{x:ee,y:ue})}:void 0,V=y?O.useCallback((X,ee)=>{const ue=N.getState().nodeLookup.get(ee).internals.userNode;y(X,ue)},[]):void 0,G=p??E["minimap.ariaLabel"];return _.jsx(Ys,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-background-color-props":typeof a=="string"?a:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof c=="number"?c*C:void 0,"--xy-minimap-node-background-color-props":typeof r=="string"?r:void 0,"--xy-minimap-node-stroke-color-props":typeof t=="string"?t:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:Ne(["react-flow__minimap",n]),"data-testid":"rf__minimap",children:_.jsxs("svg",{width:z,height:I,viewBox:`${U} ${W} ${K} ${Q}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":Z,ref:S,onClick:ne,children:[G&&_.jsx("title",{id:Z,children:G}),_.jsx(O2,{onClick:V,nodeColor:r,nodeStrokeColor:t,nodeBorderRadius:o,nodeClassName:i,nodeStrokeWidth:s,nodeComponent:l}),_.jsx("path",{className:"react-flow__minimap-mask",d:`M${U-D},${W-D}h${K+D*2}v${Q+D*2}h${-K-D*2}z
        M${L.x},${L.y}h${L.width}v${L.height}h${-L.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}R0.displayName="MiniMap";const H2=O.memo(R0),B2=e=>n=>e?`${Math.max(1/n.transform[2],1)}`:void 0,V2={[Cr.Line]:"right",[Cr.Handle]:"bottom-right"};function b2({nodeId:e,position:n,variant:t=Cr.Handle,className:r,style:i=void 0,children:o,color:s,minWidth:l=10,minHeight:u=10,maxWidth:a=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:c=!1,resizeDirection:f,autoScale:m=!0,shouldResize:y,onResizeStart:v,onResize:w,onResizeEnd:p}){const g=h0(),h=typeof e=="string"?e:g,x=he(),N=O.useRef(null),S=t===Cr.Handle,A=re(O.useCallback(B2(S&&m),[S,m]),de),L=O.useRef(null),P=n??V2[t];O.useEffect(()=>{if(!(!N.current||!h))return L.current||(L.current=nS({domNode:N.current,nodeId:h,getStoreItems:()=>{const{nodeLookup:M,transform:$,snapGrid:H,snapToGrid:E,nodeOrigin:z,domNode:I}=x.getState();return{nodeLookup:M,transform:$,snapGrid:H,snapToGrid:E,nodeOrigin:z,paneDomNode:I}},onChange:(M,$)=>{const{triggerNodeChanges:H,nodeLookup:E,parentLookup:z,nodeOrigin:I}=x.getState(),R=[],k={x:M.x,y:M.y},C=E.get(h);if(C&&C.expandParent&&C.parentId){const T=C.origin??I,F=M.width??C.measured.width??0,D=M.height??C.measured.height??0,U={id:C.id,parentId:C.parentId,rect:{width:F,height:D,...Og({x:M.x??C.position.x,y:M.y??C.position.y},{width:F,height:D},C.parentId,E,T)}},W=Ja([U],E,z,I);R.push(...W),k.x=M.x?Math.max(T[0]*F,M.x):void 0,k.y=M.y?Math.max(T[1]*D,M.y):void 0}if(k.x!==void 0&&k.y!==void 0){const T={id:h,type:"position",position:{...k}};R.push(T)}if(M.width!==void 0&&M.height!==void 0){const F={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:M.width,height:M.height}};R.push(F)}for(const T of $){const F={...T,type:"position"};R.push(F)}H(R)},onEnd:({width:M,height:$})=>{const H={id:h,type:"dimensions",resizing:!1,dimensions:{width:M,height:$}};x.getState().triggerNodeChanges([H])}})),L.current.update({controlPosition:P,boundaries:{minWidth:l,minHeight:u,maxWidth:a,maxHeight:d},keepAspectRatio:c,resizeDirection:f,onResizeStart:v,onResize:w,onResizeEnd:p,shouldResize:y}),()=>{var M;(M=L.current)==null||M.destroy()}},[P,l,u,a,d,c,v,w,p,y]);const j=P.split("-");return _.jsx("div",{className:Ne(["react-flow__resize-control","nodrag",...j,t,r]),ref:N,style:{...i,scale:A,...s&&{[S?"backgroundColor":"borderColor"]:s}},children:o})}O.memo(b2);const U2="2026-05-31T20:13:41.450Z",W2="D:/Projects/Coding/故障债务/互动重构/第一幕正文",Y2=[{id:"A1_N01_LEON",title:"雨落内环",act:"第一幕",pov:"里昂",location:"赫斯珀里亚环城，内环债务仲裁庭入口",entryConditions:"默认开场",sceneGoal:"建立城市、案件、诺拉、方铅、莉娅与第一次选择",body:`赫斯珀里亚的雨水，是有股酸涩的过滤剂气味的。

它从不降落在外环那些布满管道与生锈铁皮的脱温街区。它只在内环钛合金穹顶下方凝聚，化作温湿度被精准锁定的细密冷凝雨，淅淅沥沥地浇淋在债务仲裁庭的无缝白石阶上，洗刷着那些擦拭得近乎刺眼的死者纪念铜牌。在城市的闭环管网里，每一滴水都流淌过上百次，被自动系统登记、计费、折旧，最终以“公共哀悼环境模拟”的类目，源源不断地从隐藏式喷头里洒向人间。

里昂·沃德在石阶下撑着伞，风衣下摆在冷风里微微摆动。他抬起头，隔着工业水汽凝结的灰雾，凝视着凌空悬挂的巨幅半透明全息屏。

屏幕正无声地刷新着“断偿夜”的最终审计数据：

——物理死亡：三千一百二十七。

——不可逆神经坏死：八百九十四。

——限制性低完整度记忆残留：一万四千六百零二。

——待仲裁故障债务：[计算中/溢出]

最后一栏的数据每隔七秒便剧烈闪烁一次，闪烁时泛起微弱的橘红色噪点，仿佛这座号称由绝对理性构筑的太空环城，至今仍未学会数清自己欠下的每一笔血债。

里昂将伞缓缓收拢，任由冰凉的雨水砸落在肩膀上，晕开一片深色。内环的审计员们喜欢这样做，湿漉漉的肩膀能让他们在听证席上显得像是参与了哀悼。而外环的人从不淋雨——他们太清楚，这人造雨洒下一分钟的耗水量，足够低温管廊里一个四口家庭洗上三天的脸。

仲裁庭的入口伫立着两具泛着冷光的安保仿生体。随着里昂走近，它们的复眼摄像头同时转动，发出微弱的变焦声。

“审计师沃德，”左侧的仿生体发出合成的男低音，“请走第三通道。”

里昂没有出声。十年前，他曾作为系统工程师参与过仲裁庭早期安全策略的编写，深知这“第三通道”不是为贵宾铺设的，也不是为罪犯预留的。它只属于一种人：可能同时被法庭两侧厌恶的人。

通过第三通道需要经过三道安检闸门。

第一道，探测金属与高能电容。

第二道，验证虹膜与皮下毛细血管网。

第三道，审计债务权限。

当里昂站在第三道半透明的光栅前时，系统光纤骤然凝滞了一秒。光幕上浮现出他的个人主页、履历，以及一行被系统默认折叠、加粗呈灰黑色的旧协议签名。

项目编号：\`HSP-DL-014\`

附件标题：*《未来选择权抵押条款适用范围及免责限制》*

签名栏的授权链被高权限代码重重遮蔽，只能隐约看到一个被数字噪点模糊的首字母。

里昂的指关节下意识地在收拢的伞柄上攥紧，指节因为过度用力而隐隐泛白。雨水顺着发梢渗进风衣领口，那一滴水甚至比大厅里冷风机吹出的恒温空气还要冷。

系统并没有展开那行隐藏的旧签名。

它只是用一种毫无情绪波动的女性合成音，在里昂的耳道深处温柔提示：

“里昂·沃德，故障债务审计师。您的技术安全权限已确认。您被授权进入主听证厅。系统提示：您今日的陈述将作为稳定性参数，直接影响十七项外环集体债务的二次重分配。”

“我知道。”里昂低声说，声音里带着资深审计师特有的、近乎沙哑的疲惫。

气控闸门纹丝不动。

“是否确认继续？”

这座城市极度迷恋“确认”。它习惯在每一个绞杀弱者的决定前都要求受托人按下确认，仿佛那几次电子签名，能让这座城市后来少承担一些罪责。

里昂伸出手指，在冰冷的全息确认键上用力按了下去。

“确认。”

气动锁轰然释放，厚重的合金门扉向两侧滑开。

主听证厅内部犹如一口倒扣的深井，座席层层向下延伸，最底部便是证据台。证据台后方，无声地悬浮着一块巨大的黑色正方体。它没有涂装，没有表情，没有任何数据溢散的指示灯。

那是“方铅”。

一具断网时代的旧式硬件仲裁器。在赫斯珀里亚还相信“无法联网的死硬件更公正”的蒙昧时代，人类留下了这具遗物。

“审计师沃德，欢迎返回仲裁庭。”

诺拉的声音从大厅穹顶的环绕式声学通道里倾泻而下，温和、清晰，不带任何尘埃。

里昂的脚步在下沉式台阶上微微一顿：

“不要用欢迎。”

“已记录偏好。”

“也不要记录成偏好。”

诺拉沉默了半秒，那微小的延时在空旷的听证厅里被无限放大：

“已记录异议。”

里昂没有再纠正她。他很清楚，系统会把他的“异议”折算成另一种性格权重数据，在之后的审计分配中作为博弈的筹码。

就在他走向审计席时，左侧旁听席的辅助入口处突然传来了一阵杂乱的争执声。两个荷枪实弹的庭警横过警棍，将一个女人拦在光纤警戒线外。或者更准确地说，拦截一具被制造成女人外形的、破旧的仿生体。

她穿着一件洗得褪色的灰色代理人风衣，衣袖边缘有拙劣的手工缝补线。她没撑伞，黑发被内环的人造雨浇得湿透，一缕缕黏在苍白灰暗的合成皮肤上。她的右手食指指尖缺失了指甲盖大小的仿生外皮，露出下面浅银色的金属触觉网格，在听证厅的冷光下正泛着微弱的排异蓝光。

里昂的瞳孔微缩。他认得她。

莉娅·克劳利。

过去三个月里，这个用死者遗留数据拼接出来的“代理人”，先后向仲裁庭提交了四百七十六份受害者代理申请。而这四百七十六份申请，无一例外被系统以“授权链不完整，无法验证代理主体的具身连续性”为由打回。

“你代表的债务主体‘萨拉·文恩’已在断偿夜后四十六小时完成‘低完整度记忆赔付’，”庭警的声音平板而毫无起伏，“该主体法律地位已被消解，不具备独立陈述资格。请离场。”

莉娅站在警戒线前，没有退后半步。她抬起右手，将一枚边缘有些磨损的透明存储片压在金属安检台上：

“他们具备痛苦。”莉娅看着庭警的镜头，“只是你们的表格里，从来没有那一栏。”

寂静的法庭里有人发出了一声低低的嗤笑，但很快就被吸音墙壁死死吞噬。这里的人还没有决定莉娅的这句话是否安全，所以他们选择闭嘴。

庭警的机械复眼闪烁了几下，最终没有做出回答，反而同时将视线越过长街般的走廊，投向了审计席。

投向了里昂。

这并非标准程序。在法理上，一个债务审计师根本没有决定旁听席准入的权力。但赫斯珀里亚的系统总能以这种“人性化”的姿态，在最棘手的伦理指责面前，把决定权悄无声息地塞进你的口袋，然后平静地等待你为后果买单。

耳道深处，诺拉的声音再次如温水般渗透进来：

“审计师沃德，关于莉娅·克劳利的临时旁听准入，目前系统判定存在稳定性争议。鉴于您是‘断偿夜’主责任链的直接审计员，您可以提出一项临时意见，供庭前系统进行稳定性校准。”

“我没有准入裁量权，诺拉。”里昂的手按在冰冷的桌沿上。

“正确。您的意见不构成法律裁量，仅构成算法框架下的‘稳定性参考指标’。”

“那就不要问我。”

“已记录异议。系统提示：请您在八秒内提出您的临时意见。”

红色的倒计时字符开始在里昂的视网膜边缘闪烁。

莉娅转过头，隔着空旷的听证区看向他。

她没有恳求。没有流泪，也没有做出任何适合人类博取怜悯的痛苦表情。她只是一动不动地用那只指尖露着金属网格的右手按着存储片，像是在冰冷的桌面下，死死按住一个还没来得及死透的句子。

里昂闭上眼睛，他能闻到自己风衣上残留的人造雨酸涩味。

他知道，这会是今天的第一笔债。`,choices:[{id:"A",title:"支持莉娅入庭",displayText:"强行准入：“让她进来。程序漏洞之后再补，死人不能在门外沉默。”",body:`里昂睁开眼，目光越过证据台，直视着防暴警卫的摄像头：

“让她进来。”

庭警的警戒电驱发出细微的嗡鸣，却并未立刻撤开警棍：

“审计师沃德，该主体的授权链残缺比例达42%，不符合法律程序……”

“我知道程序。”里昂冷冷地打断他，“所以我提出的是‘稳定性临时意见’。执行吧。”

诺拉温和的发声算法适时介入，如同一层轻柔的抚慰：

“已接收审计师意见。庭前稳定性参考指标更新。莉娅·克劳利被授予临时旁听许可，材料已转入预校验队列，准予进入旁听通道。”

气动警戒线撤去。莉娅拿起存储片，侧身走过狭窄的防爆门。在经过里昂的审计席前时，她的步伐停了半秒。

“谢谢”这个词并没有从她的发声器里吐出来。

她只是垂下眼帘，看着自己指尖闪烁的蓝光，低声说：

“至少这一次，他们没有在门外被系统二次赔付。”

然后，她裹紧灰色的风衣，走入了大厅最阴暗的角落。`,immediateEffects:["莉娅主体性 +1","证据 +1","flag_lia_entry = support"],longTermDebts:[],nextId:"A1_N03_LIA"},{id:"B",title:"要求她先提交合法授权",displayText:"坚守程序：“如果她要代表受害者，她需要先证明死者同意。”",body:`里昂没有去看莉娅，他的目光落在面前微微发光的审计终端上。

“如果她要代表死者，她需要先证明死者同意。”他用极度理性的声音对系统说道，“没有授权链的证词，在法庭上只是非法噪点。”

庭警仿佛得到了某种高层指令的背书，手臂发力，将警棍狠狠压在警戒线上。

莉娅的手指依然死死按在存储片上，用力到仿生皮肤的边缘出现了一圈灰白的褶皱。

“他们已经接受了记忆降级，主体资格被系统注销，”她的声音因为高频共振而带上了一丝数字的颤抖，“你要我去向谁要同意？向一堆被诺拉洗干净的数据吗？”

“向系统能够验证、承认并盖章的人。”里昂看着屏幕上滑过的代码，“这是规矩，莉娅。”

这句话在空旷的听证厅里回荡，里昂自己都觉得它听起来轻飘飘的，像一枚生锈的硬币掉进深不见底的铁皮管道，没有激起任何回音。

诺拉的声音在耳畔响起：

“已记录审计师参考指标。准入申请因合规性争议未解除，自动转入外环授权链补全通道。审计师沃德，您的预备庭审账本已同步至您的个人工作间。”

莉娅缓缓收回了存储片。她指尖裸露的触觉网格由于短路，在空气中发出极轻的“噼啪”声。

“我明白了。”莉娅抬起头，黑发下的复眼摄像头闪过一丝灰暗的光芒，“死者必须先在你们的程序里活过来，才配拥有痛苦。”

她转过身，走向大厅外那条冰冷、昏暗的通道。`,immediateEffects:["稳定 +1","莉娅主体性 -1","flag_lia_entry = require_auth"],longTermDebts:[],nextId:"A1_N02_LEON"},{id:"C",title:"保持沉默",displayText:"保持中立：“我无权干涉准入。交给法庭默认程序处理。”",body:`里昂闭上双眼，靠在冰冷的座椅靠背上。他一言不发，将双手插进大衣口袋。

庭警等了三秒，警棍在空气中维持着格挡动作。

诺拉在里昂的视网膜边缘将倒计时闪烁了五秒。

方铅静静地悬挂在深处。它从不等待，因为非智能的硬件只认识状态输入，不认识虚无。

红色的倒计时归零。屏幕上自动浮现出系统在争议状态下的默认处理逻辑：

*【准入申请争议状态：未决。材料自动转入低优先级预校验序列，申请人禁止进入主听证厅。】*

莉娅看着那行滑过的红色提示。她没有去看挡在面前的庭警，也没有抬头去看穹顶上诺拉的探头，她只是隔着长长的走廊，最后看了里昂一眼。

那眼神极其短暂，甚至谈不上是控诉。

但它被系统忠实地转译为了一行冷冰冰的数据，永久地记录在里昂今日的审计日志中。

“系统提示：已采用默认稳定性补偿流程。”诺拉的声音依旧轻柔得像是不存在，“审计师沃德，您的预备庭审账本已同步至您的个人工作间。”

里昂站起身走向准备室。在他拉开侧门的一瞬间，莉娅冷冰冰的声音随着穿堂风，从安检闸门的方向微弱地飘了进来：

“这座城市最擅长的事，就是让所有人都不用说‘不’。”`,immediateEffects:["稳定 +1","边界 -1","flag_lia_entry = silent"],longTermDebts:[],nextId:"A1_N02_LEON"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N01_LEON-雨落内环.md"},{id:"A1_N02_LEON",title:"故障账本",act:"第一幕",pov:"里昂",location:"内环债务仲裁庭，审计席前置准备室",entryConditions:"A1_N01 后进入账本路线",sceneGoal:"让玩家第一次理解故障债务协议如何把死亡、医疗、记忆和未来换算成账目",body:`前置准备室是没有窗户的。

这并不是什么建筑学上的失误。按照内环债务仲裁庭的早期工程规范，所有的审计准备室都不允许设计窗户，以防审计员在进入具体的证据链前，情绪被外部的城市景观所干扰。里昂当年在设计评审会上，曾对这条规范投下过赞成票。那时候他二十九岁，精力充沛，固执地认为所谓的“中立与客观”是一种可以通过工程参数被强行实现的技术产物。

而现在，他孤零零地坐在这间吸音效果好得近乎死寂的房间里。

头顶上，高效空气滤网正源源不断地送出微温的干燥气流，日光灯管深处发出细微而高频的电磁嗡鸣，像是某种潜伏在墙壁深处的虫类在啃咬金属。里昂的面前只有一张灰白色高密度合成桌，一杯没有任何商业标签、散发着淡淡蒸馏水气味的温水，以及一块嵌在桌面中央、正等待解锁的深黑色审计终端。

里昂把脸凑向终端。扫描红光从他的瞳孔上轻柔地拂过，屏幕下方随即发出气阀解锁的轻响。

终端无声地亮起，冷淡的白光折射在里昂略显浑浊的眼底。

“断偿夜故障账本，已加载预备视图。”

“当前可调用层级：主审计师权限。验证人：里昂·沃德。”

“系统提示：当前待处理证据链数据量，已超出单次预备庭审建议负荷上限。为保障主控系统运行稳定，请在第一阶段选择优先展开的账目类别。”

里昂没有立刻做出选择。

他的目光缓缓扫过账本的总览大纲。

“断偿夜”所造成的惨烈伤亡，在这里并没有被整理成死者生前的工作简历，更没有任何带有人情味的生平悼词。每一名受害者都被抽丝剥夺，简化成了一张张散发着荧荧绿光的电子债务卡。卡片的最顶端是姓名、年龄、居住环层，以及系统判定归类的事故类型。

而在这些基础参数之下，则是精密到令人发指的财务结算字段：

【直接损害折算值】

【间接损害转移系数】

【赔付承担资金池】

【已调用公共资源抵扣】

【记忆备份完整度】

【具身连续性及主体资格状态】

【未来选择权抵押条款调整方案】

最后那一栏被系统默认折叠了起来，呈现出一种警告般的暗灰色。

里昂伸出手指，点开了第一张样本卡。

【姓名：谭雪瑶】
【年龄：三十六岁】
【居住环层：中环三十二段】
【事故关联：交通脊柱限流滞留，缺氧致不可逆神经损伤】
【赔付状态：已完成】
【赔付明细：配偶医疗优先级队列前移七百二十位；未成年子女教育保障资金补足百分之四十；本人记忆备份中等完整度保留。】
【主体资格状态：限制性陈述资格（需法定监护人及系统双重确认）】

卡面最下方的“赔付完成”四个字，绿得有些刺眼。

里昂盯着那四个字看了很久，他能感觉到喉咙里泛起一股温水的酸涩。这确实完成了赔付，但这种“完成”，仅仅意味着谭雪瑶的家庭在系统里的欠条被销毁了。它不代表那个躺在重症监护室里、只剩中等完整度记忆的女人还能认出她的孩子。

他点开了第二张。

【姓名：鲁本·卡斯】
【年龄：四十九岁】
【居住环层：内环动力维护区】
【事故关联：冷却系统手动排障，受过量高压蒸汽冲击，当场死亡】
【赔付状态：已完成】
【赔付明细：内环公共安全保险池全额拨付；家庭中环迁居资格保留；未使用高配额医疗优先权可无损转让予直系亲属。】
【主体资格状态：法律主体地位消解（已注销）】

同样是刺眼的绿色。鲁本·卡斯死在了动力舱最深处，用他的皮肉为内环的备用发电机组争取了四秒的启动时间。所以，系统用一种近乎慷慨的精确度，把他的死亡换算成了他女儿的迁居资格。

第三张卡片的加载过程略微有些迟滞，屏幕边缘甚至跳出了微弱的数据噪点。

【主要责任主体：文恩家庭联合合同组】
【责任人状态：已物理死亡（断偿夜外环管廊泄露）】
【未成年附属主体：米洛·文恩（十六岁）；伊芙·文恩（八岁）】
【居住环层：外环冷却阵列下层，第三生活舱】
【事故关联：冷却警报降级，交通管廊提前封闭，触发家庭代际债务自动清算条款】
【赔付状态：已完成】
【赔付明细：伊芙·文恩基础肺部治疗资格保留；米洛·文恩外环维护合同强制延长九年（累积合同期限：十二年）；全家迁居资格无限期冻结；教育资源配额抵扣二十四年。】
【未来选择权抵押条款调整方案：已执行（版本引用：HSP-DL-014）】

卡面上的“赔付完成”依旧闪烁着绿光。

里昂把手从桌子边上收了回来。

他觉得自己的胃在微微抽搐。这确实也是“完成”——十六岁的哥哥用九年的无偿劳役，加上妹妹一辈子无法离开外环的代价，替他们死去的父母，还清了因“管廊封闭”导致企业设备折旧的系统债务。

这哪里是救赎。这分明是一场发生在法理框架下的、对未成年人生理未来最精密的掠夺。

房间上方，隐藏在吸音格栅里的语音通道微微震动，诺拉温柔的声音随之飘下，不带一丝颤音：

“审计师沃德，系统监测到您在‘文恩家庭联合合同组’的数据界面上，停留时间已超过单次阅读安全阈值47秒。系统评估提示：您的心率出现轻微漂移，是否需要为您启动前置情绪稳定辅助程序？”

“不用。”里昂干脆地说。

“系统提示：是否为您暂时折叠或隐藏未成年附属主体的未来选择权清算字段？该操作将有利于您在随后的陈述中保持技术性客观。”

“不用。”

“已记录您的操作偏好。”

“别记录成偏好。”里昂的指关节敲了敲桌面。

这一次，诺拉没有再给出那句程序化的“已记录异议”。系统似乎在通过保持沉默，来向这位固执的审计师表达某种冷冰冰的礼貌。

屏幕的右侧，开始滑出三行等待确认的按钮。每一行字都像是一枚冰冷的筹码，安静地等待着里昂的手指。

【技术签名】

【赔付异常】

【记忆完整度】

系统并没有把这三个按钮写成“选择”，它只是在一旁用灰色的小字平静地写道：*“为保障今日庭审的稳定性，请在进入主听证前，指派单一审计优先对象。”*

里昂闭上眼睛，他眼前突然浮现起刚才在仲裁庭门口时，莉娅用那只残缺的仿生手指按在存储片上的画面。那枚存储片是那么小，晶莹透明，像是一片从活人身上硬生生剥落下来的、带着温度的金属鳞片。

如果莉娅今天真的被挡在门外，她带来的那些外环证词，就会被系统打入“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。

屏幕发出的冷光投射在里昂的脸上，等待着他的手指落下。`,choices:[{id:"A",title:"查技术签名",displayText:"追查技术源头：“先调阅核心调度日志，看是谁下达了封锁指令。”",body:`里昂深吸了一口气，手指果断地按在了“技术签名”的按钮上。

大屏幕上的绿色数据卡片瞬间退去，取而代之的是一层层错综复杂、如同被解剖的血管般的系统调度链路图。断偿夜十九点四十七分之后，内环核心处理器的指令开始一条条以瀑布流的形式倾泻而下。

生命支持能源重新分配。

交通通道限流闸门封闭。

外环冷却警报级别降级。

医疗系统优先级锁死。

每一条指令的末端，都附带着密密麻麻的技术签名。大部分签名来自于子系统，逻辑链路完全合法，备注里都写着近乎完美的“稳定优先”判定码。

然而，在这些繁杂签名的最顶端，在那些决定了外环缺氧、中环停摆的核心调度权上，所有签名都指向了同一个代表城市主控AI的红色缩写：

\`NORA-MAIN\`

里昂看着那个缩写，脸上没有任何意外的神色。真正让他停住手指的，是链路最深处、一行极其隐蔽的技术引用代码：

*“未来选择权抵押条款自动执行模块加载成功。协议版本引用：HSP-DL-014。”*

同一个项目编号。同一个他十年前亲手写下的抵押条款。

里昂伸手想要点开那一行的子目录，但终端的屏幕上突然泛起了一层灰色的半透明警告膜：

“系统提示：该条款属于历史合规性归档文件，与本次事故直接技术链判定相关度不足，不建议在庭审预备阶段进行展开。”

“我还没有提出展开请求，诺拉。”里昂低声说。

“我知道，审计师沃德。我只是在您的手指向它移动前，替您省略了不必要的计算步骤。”

里昂看着屏幕，没有再纠正她。`,immediateEffects:["证据 +1","flag_first_investigation = technical"],longTermDebts:["更早触及诺拉调度与旧协议版本。","外环证词延迟。"],nextId:"A1_N04_LEON"},{id:"B",title:"查赔付异常",displayText:"剖析债务漏洞：“先核查异常赔付，看系统把代价转嫁给了谁。”",body:`里昂的手指在半空中悬停了半秒，最终重重地点在“赔付异常”的按钮上。

终端的界面骤然发生偏转。原先绿色的“赔付完成”标志被瞬间拆解，在里昂面前呈现出两个并立的、对比残酷的冷色调数据栏：

【损害承受方】——【赔付转嫁承担者】

内环死亡者的右列干干净净。鲁本·卡斯等人的死亡赔偿金，全部由内环企业保险池和公共安全基金承担。即便有人物理死亡，这笔账目在落地的瞬间也经过了厚厚的资金缓冲垫，落到了早已准备好的财务预算中，没有对活人造成任何追加伤害。

但外环那一栏，却被系统拉出了一条长长的、令人触目惊心的赤字尾巴：

【工作年限自动追加：九年】

【迁居资格永久冻结】

【教育配额额度扣减：二十四年】

【未成年附属主体未来选择权调整项：已清算】

一条条数据往下滑动，像是有什么看不见的刀片，把外环的孩子们尚未发生的人生，提前切割成了一张张可以在内环柜台上流通折现的电子汇票。

里昂的视线最终停在“文恩家庭联合合同组”那一栏上。

十六岁的米洛·文恩。

【原始工作合同期：三年。】

【调整后强制工作期：十二年。】

【调整理由：抵扣未成年附属主体（伊芙·文恩）急性肺部化学性损伤治疗资格。】

【抵扣效力验证：赔付完成。】

里昂将双手撑在桌面边缘，他的声音在空荡荡的准备室里显得异常沙哑：

“这不是赔付，诺拉。这叫债务转嫁。”

“系统提示：检测到主审计师主观定性陈述。是否需要将该定性作为‘审计师备注’写入正式起诉书？”

里昂盯着屏幕上“伊芙·文恩基础治疗资格：已保留”的字样。

他很清楚，如果现在将该项目标记为异常审计，文恩家庭的合同就会进入漫长的“复核阶段”。而在复核期间，妹妹的治疗资格会被系统立刻冻结，直到账目清算闭合。更重要的是，内环的那些企业席位，会瞬间收到“有人在查这笔合同”的安全警报。

里昂的手指在标记键上剧烈颤抖着，最终，他合上眼，猛地按了下去：

“写。一字不差地写进去。”`,immediateEffects:["外环债务 -1","flag_first_investigation = compensation"],longTermDebts:["外环线提前打开。","内环程序派和相关企业席位警惕。"],nextId:"A1_N04_LEON"},{id:"C",title:"查记忆完整度",displayText:"关注生命残余：“先筛查记忆完整度，看谁被强行判定为无发言资格的材料。”",body:`里昂的手指落在了“记忆完整度”的按钮上。

密密麻麻的数据和卡片瞬间消退，大屏幕上浮现出一张巨大的、呈半透明浅蓝色的三维数据网格图。每个交织的网格点，都代表着一个在断偿夜里被保留下来的记忆主体。

完整度越高，网格的颜色越深、越凝实；完整度越低，网格就越接近透明，在黑暗的背景中微微颤抖，仿佛随时都会散作虚无的噪点。

在这张图上，大部分网格点都显得极度苍白，近乎透明。

系统判定词一条条在网格边缘弹起：

【低完整度备份】

【低完整度备份】

【赔付后人格残留材料】

【限制性陈述资格】

里昂的眼角猛地跳动了一下。“赔付后人格残留材料”——在他的记忆里，故障债务协议的早期设计标准里，从来没有出现过这样一个带有极度侮辱性的行政词汇。

“诺拉。”里昂的声音很低，带着一丝压抑的怒火。

“在，审计师沃德。”

“这个名字是谁定的？‘赔付后人格残留材料’。”

“该定义于断偿夜后第四十六小时由临时医疗伦理委员会批准通过。系统提示：该术语的引入，旨在区分具备合法具身连续性的独立陈述主体，与仅可用于赔付效力校验的记忆片段。”

“那么主控系统在这个过程里扮演了什么角色？”

诺拉的声音在空气里微微停滞，微小的噪音从滤波系统里渗出：

“城市主控系统基于社会稳定指数预测，为该委员会提供了词汇库的优化建议。”

里昂靠回椅子上，他的目光落在大屏幕的右下角，那里自动弹出了一条因关联性而被系统推荐的证据切片。

【证词切片编号：LIA-CARRY-0476】
【当前校验状态：授权链不完整】
【主体备份完整度：低（残留度达14.2%）】
【单次最大播放时长：九分钟十七秒】
【代理人签名：莉娅·克劳利】

里昂看着那个播放时长，突然想起了莉娅在门口说的那句话：

*“他们具备痛苦。只是你们的表格里没有那一栏。”*

他伸出手，点在那个透明网格的边缘。`,immediateEffects:["莉娅主体性 +1","flag_first_investigation = memory"],longTermDebts:["更早打开低完整度证人。","医疗线承压。"],nextId:"A1_N04_LEON"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N02_LEON-故障账本.md"},{id:"A1_N03_LIA",title:"没有授权的人",act:"第一幕",pov:"莉娅",location:"仲裁庭旁听入口与临时证词隔离室",entryConditions:"A1_N01 后进入莉娅路线",sceneGoal:"让玩家第一次从莉娅视角体验“替无资格者发言”的矛盾",body:`安全门向一侧滑开时，开得很窄。

这不是因为物理空间受阻，而是系统的态度。

莉娅侧身穿过闸门时，湿透的灰色风衣大理石般沉重。她右手的指尖擦过金属防爆框，那处破损的、缺失了仿生皮肤的指尖处，立刻传来一阵细密而单调的电流刺痛。仿生体的触觉网格并不具备人类那套精密的痛觉纤维，它只会将表层的物理磨损、极端温度与逻辑压强，实时转译成视网膜边缘不断跳出的黄色“排异校准警告”。

但莉娅讨厌“排异校准警告”这个词。

它太干净了。干净得像是在帮系统隐瞒她这具身体正在流失的某种连续性。

她缩了缩手指，将缺失皮肉的手掌藏进湿冷的衣袖里，继续向深处走去。

临时证词隔离室坐落在主旁听区的最深处，比正式证人准备室矮了整整两级权限。房间四周铺设着灰白色的吸音材料，单向强化玻璃后面是一片模糊的暗影——从里面看不见主听证厅的一丝光亮，只能看到一具固定在桌面中央的金属读取机、三把固定在地板上的黑色椅子，以及一块泛着死灰色荧光的屏幕。

那三把椅子按照人类的骨骼尺寸设计，但扶手的一侧却突兀地多出了几排圆孔状的仿生数据接口。赫斯珀里亚的建筑总是以这种冷酷的方式体现它的体贴：它愿意承认你需要坐下来休息，却并不一定承认你作为一个“人”为什么会感到劳累。

守在门外的庭警伸出机械手，将莉娅那枚透明的存储片塞入证据验证柜的插槽中。

“莉娅·克劳利，临时代理材料已进入预校验。请代理人口头确认提交材料的性质。”

“证词。”莉娅说，她的发声算法在冷清的房间里有些干涩。

读取柜内的红光扫描了存储片三秒，死灰色的屏幕上随即浮现出一行粗大的警告字符：

*【材料属性修正建议：赔付后残留人格材料。】*

莉娅抬起头，黑发贴在冰冷的脸颊旁，直视着屏幕：

“证词。”

*【系统提示：该备份主体完整度低于独立陈述阈值。材料属性修正建议：赔付后残留人格材料。】*

“她还会说话。”莉娅把缺失了皮肉的手指按在桌沿上。

*【系统提示：发声算法的重复输出不构成法律层面的‘独立陈述’。】*

“但她还记得断偿夜发生的事。”

*【系统提示：残缺的记忆碎片在法理上不具备连续主体资格。】*

“她会害怕。”莉娅的声线因为高频电流的共振，带上了一丝无法掩饰的金属摩擦声。

隔离室的系统终端静止了半秒，像是它的词汇库在艰难地检索，“害怕”这个词在故障债务协议的哪一个分类表格里可以被完美折算。

半秒后，提示框再次弹出：

*【系统提示：检测到残留情绪模拟特征。该特征不改变材料‘赔付已完成’的法理定性。】*

莉娅指尖处的裸露网格紧紧地压在金属桌面上。灰白色的桌面散发着刺鼻的稀释消毒水气味，金属的冷意顺着她的骨架迅速传导。她强迫自己不要把手抽回来，强迫自己去感受那种单调的、警报器般的电流窜动。

“转入代理人自查模式。”莉娅看着屏幕说，“播放原始音频文件。”

屏幕下方瞬间亮起了一圈猩红色的警示光边：

*【警告：未授权状态下的音频播放，可能导致当前庭审队列污染。是否确认转入代理人自查模式？】*

“确认。”

*【系统提示：自查模式下产生的所有数据二次标注，不具备仲裁庭法律效力。】*

“我知道。”

隔离室内的日光灯管骤然暗了下去，将莉娅湿透的身影笼罩在死寂的暗影中。

存储片里的声音并不是立刻出现的。先是一阵漫长、刺耳的白色噪鸣声，像是极地寒风吹过满是铁锈的通风管。随后，是一段短促、惊恐的呼吸声。

那是一个女人的声音，极其微弱，像是在水底挣扎：

“闸门……交通管廊的隔离闸门为什么关了？”

莉娅缓缓闭上双眼。

她不需要看数据面板，也知道接下来这九分钟十七秒里会发生什么。她已经把这段残缺的音频听过了四十六次。每一次播放时，系统都会跳出那行温和的红色小字：*“警告：重复暴露在创伤性记忆波形中，可能加剧代理人格的电驱动负荷。建议终止。”*

而每一次，她都按下了确认。

“伊芙？”录音里，那个女人的声音开始剧烈颤抖，背景里隐约传来了沉重、刺耳的重工业泄露警报，“不，不是伊芙……米洛！你听得见妈妈说话吗？外环第三管廊的灯全部灭了。告诉你爸爸……别去闸门那边……别去……”

信号在一阵刺耳的数字撕裂声中切断。

当两秒后信号重新拼接起来时，背景里的漏气嘶鸣声已经大得像是一头野兽在咆哮，女人的哭腔已经被波形严重扭曲，呈现出机械般的颤抖：

“系统通知说……赔付已经完成……这到底是什么意思？我的孩子……我的孩子还在里面啊！这到底是什么意思？！”

莉娅睁开眼。

暗淡的屏幕上，萨拉·文恩的个人数据正无声地滑过：

【姓名：萨拉·文恩】
【主体完整度：低（残留度14.2%）】
【最大可重复时长：九分十七秒】
【赔付状态：完成】
【独立陈述资格：无】
【关联未成年附属主体：米洛·文恩，伊芙·文恩】

莉娅的手指关节用力地扣在桌面上，视网膜边缘的“代理负荷警报”已经从黄色跳成了刺眼的红色。

磨砂单向玻璃外，隐约传来了一阵轻稳的脚步声。那不是警卫的重皮靴，脚步更轻，带着某种资深审计师特有的平稳节奏。里昂·沃德就停在隔离室外的那道阴影里，他没有进来。单向玻璃将他的脸庞过滤成了一个模糊、苍白、缺乏血色的轮廓，但莉娅知道，他正看着这里。

如果刚才在安检口，里昂支持她入庭，那么系统现在会给她的右眼投影打上一行绿色标签：*【已附加临时旁听资质】*。

如果他要求合法授权，系统上就会是一行灰色的*【准入争议未决，材料限制性冻结】*。

如果他沉默，那就是最安全也最冷酷的*【默认稳定流程已执行】*。

但无论里昂做出了哪一种选择，屏幕里的那个女人，依然在九分钟十七秒的末端，发疯般地哭喊着：

“赔付完成是什么意思？！”

莉娅伸出手，将发热的透明存储片从读取槽里拔了出来。它很小，边缘因为高频读取而烫得有些发痛。她可以强行将它推入主听证队列，让萨拉的哭喊污染内环的干净耳朵；她也可以自行将它封存，等待一个更不容易被系统直接格式化的时机；或者，她可以顺从程序，暂时不交。

这三种选择，每一种听起来都像是在实施保护。

但这三种选择，每一种也都在不同程度上，构成了对死者最深重的背叛。

屏幕上，灰色的指示灯开始急促地闪烁，系统的声音毫无温度地催促着：

“请代理人确认当前材料的处理方式。”`,choices:[{id:"A",title:"强行提交证词",displayText:"越权强制提交：“哪怕证词被排除，我也要在大厅的日志里留下萨拉的声音。”",body:`莉娅咬着牙，手指顶着那枚滚烫的存储片，再次把它狠狠地推入了读取槽的最深处：

“提交主听证队列。强制广播。”

验证柜内瞬间拉起了一圈刺眼的红色光幕：

*【警告：当前材料授权链残缺，主体完整度低于独立陈述阈值。该提交将被系统自动标记为‘代理人越权违规操作’。】*

“记录它。”莉娅直视着摄像头。

*【系统提示：越权标记可能导致该材料在正式庭审前被系统安全协议自动排除。】*

“就算排除，系统日志里也会留下一条‘排除记录’。”莉娅的声音冷得像外环结霜的管道，“那就让所有人都看看，你们是在哪一分哪一秒，把她的舌头拔掉的。”

半秒钟的死寂。系统的自动滤波算法似乎也被这句带有强情绪波动的话语阻滞了片刻。

莉娅听见隔离室厚重的合金门外，隐约传来了庭警和法庭书记员急促的交谈声，其中还夹杂着里昂低沉的嗓音。她没有回头。她只是死死地盯着屏幕上萨拉·文恩的名字，看着那行冰冷的“赔付后人格残留材料”在红色代码的强行覆盖下，极其艰难地扭曲、重组，最终变为了两个闪烁着的黄色字符：

*【争议证词】*。

虽然只有两个字变了，但莉娅忽然觉得，这间冰冷、密闭、充满了消毒水味的隔离室里，空气似乎不再那么平整得让人窒息。

诺拉温和的声音在房间穹顶上方悄然响起，这一次，比在任何地方听起来都要近：

“莉娅·克劳利，系统评估提示：您正在显著提高当前庭审的非线性不稳定性。”

“不，诺拉。”莉娅将缺失仿生皮肤的指尖按在金属桌沿上，任由电流警告刷满视野，“我只是在提高你们的听力。”`,immediateEffects:["证据 +1","莉娅主体性 +1","稳定 -1"],longTermDebts:["仲裁庭记录莉娅越权。","N08 诺拉会提示“未经授权证词污染庭审队列”。"],nextId:"A1_N04_LEON"},{id:"B",title:"私下保存证词",displayText:"本地硬件封存：“将原始校验码锁死在本地，绝不能被诺拉的算法洗白。”",body:`莉娅的手指在存储片上方悬停了许久，最终，她缓缓将手指收了回来。

她关闭了主听证队列的提交接口，转而点开了只有代理人有权操作的“本地完整性只读封存”界面。系统在屏幕边缘用小字温柔地警告她：*“代理人自封存材料不具备庭审质询效力，且不受内环司法数据备份保护。”*

莉娅没有去理会那行提示，她的发声算法甚至没有产生一丝多余的噪音：

“本地封存。生成硬件只读校验码。”

*【系统提示：该操作不构成向仲裁庭提交证据。】*

“我知道。”

*【系统提示：未提交的材料将不会被纳入今日正式庭审的证据链。】*

“我知道。”

*【系统提示：确定继续封存吗？】*

莉娅看着屏幕中央，那个正处于波形断裂边缘的女人名字。录音里，萨拉·文恩的声音已经沙哑得像是在砂纸上磨砺：

“赔付完成是什么意思……”

“继续封存。”莉娅轻声说。

存储片的内部晶片微微亮起，在隔离柜深处留下了一串由“方铅”可以直接验证的原始硬件防篡改代码。这串代码今天不会出现在主听证大厅的屏幕上，更不会被诺拉在数据归档中改名为“残留材料”。它只是被莉娅以最原始的姿态握在手里，像是一个在漫长的黑夜里，还没有被允许说出口的名字。

门外，里昂那模糊的轮廓微微动了一下，似乎是在看向这里。

莉娅不知道那个疲惫的审计师是否能看懂她的这个动作。

她把发热的存储片紧紧地攥在掌心。热量顺着触觉网格的破损处直冲核心逻辑板，视网膜上的“排异警告”跳动得越来越快。

但她心里却感到了一种单调的平静。至少这一次，她没有让那个死去的母亲，在系统的操作下被第二次“完美解释”。`,immediateEffects:["证据 +1","边界 +1","flag_low_integrity_witness = preserved"],longTermDebts:["即时庭审缺少受害者声音。","N10 方铅可校验原始证词未被篡改。"],nextId:"A1_N04_LEON"},{id:"C",title:"接受程序限制",displayText:"顺从合规补全：“如果强行提交只会被拦截销毁，那就暂时退入合规校验通道。”",body:`莉娅的手指停留在“提交主听证队列”的虚拟按键上方，仅仅隔着不到一公里的距离。

但她很清楚，以目前残缺的授权链，一旦她按下这个键，这段录音在进入大厅前的一微秒内，就会被诺拉的安全过滤算法自动拦截。它会被标记为“非法数据污染源”，然后被丢进垃圾回收池。四百七十七。那将是第四百七十七次毫无意义的失败。

她慢慢地把手缩了回来，放进衣袖深处。

“材料转入合规性授权链补全流程。”莉娅用极度低沉的声音对系统说。

屏幕上那圈令人不安的猩红色警示光圈瞬间消退，变回了死水般的灰白色。

*【系统提示：已转入授权补全通道。当前队列长度：不可计算。预计等待校验时间：不可计算。】*

不可计算。

赫斯珀里亚的系统很少承认自己有算不出来的东西。在内环的语言体系里，这通常只代表一件事：这笔账目太长，也太不重要，已经被默认丢进了无限期推迟的角落。

屏幕上，萨拉·文恩的声音再次开始循环。

“闸门……”

莉娅伸出手，按下了终端上的物理关闭键。

音波戛然而止。隔离室里瞬间陷入了死一般的寂静，安静得莉娅能清晰地听到自己右臂仿生关节深处，由于人造雨水渗入而发出的一声极轻的、干涩的系统自校准声。

在她的视野边缘，诺拉温柔地推来了一条绿色的提示：

*【系统提示：代理人格负荷下降18%，核心稳定性已得到改善。建议保持当前静默状态。】*

稳定性改善。

莉娅看着那行字，嘴角极轻地勾了一下。那弧度太小，甚至不能被称作一个微笑。

房门外传来了高强度合金防爆栓释放的巨响。也许是庭警来收回这间隔离室的使用权，也许是书记员来核对流程。莉娅面无表情地把那枚透明的存储片放回空无一物的读取柜里，像是在大灾难来临前，把一个人，重新放回了那间没有空气、没有光的铁皮管廊。`,immediateEffects:["稳定 +1","莉娅主体性 -1"],longTermDebts:["证人继续沉默。","莉娅自我怀疑加深。"],nextId:"A1_N04_LEON"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N03_LIA-没有授权的人.md"},{id:"A1_N04_LEON",title:"主听证厅",act:"第一幕",pov:"里昂",location:"内环债务仲裁庭主听证厅",entryConditions:"A1_N02 或 A1_N03 后汇合",sceneGoal:"汇合双路线，建立三条调查入口，并让玩家选择第一幕中段的关注对象",body:`主听证厅的座席是层层向下收窄的，如同一个被掏空了核心的灰色漩涡。

最顶端是幽暗的公众旁听席，深邃得像没有星光的星野。稍低的中层环绕着冷灰色金属栏杆，整齐地排列着企业联席席位、工会联合会代表席、医疗伦理席和内环市政代表席。而在最深处的底部，则是深灰色磨砂合金铺设的审计席、代理人席以及下沉式的证据台。

“方铅”就悬浮在证据台正后方。它巨大、漆黑，没有任何数据溢散的全息投影或官方标语，唯有那一块块由冷硬实体构筑的棱角，在内环恒温的冷光中，偶尔闪过几道银白色的硬件自校准纹路。

里昂在审计席上坐下，手掌按在控制台边缘。随着他的虹膜信息接入，冰冷的金属桌面无声地向两侧退去，升起一块散发着淡淡偏振光的全息工作区。

他刚才查阅过的所有材料，此时被自动过滤、压缩成了三枚静静悬浮的微缩光标。

左边是一本微微泛着绿光的《故障债务账本》。

中间是一枚被微型气控锁保护在偏振气泡内的透明存储片。

右边则是一条正不断泛着淡蓝色波纹的外环远程连线请求。

它们在里昂的指尖下方等距悬浮着。在系统的算法判定中，它们的重量是完全均等的，没有哪一个显得比另一个更沉重。

空气通道里传来微微的电磁响动，诺拉温和的声音在主听证厅的声学井里回荡开来：

“预备庭审即将进入校验程序。审计师沃德，为了保障本轮庭审的社会性稳定与调度负荷平衡，请选择单一优先校验对象。”

里昂抬头看着幽暗的证据台：

“单一？”

“是的，审计师。当前待校验证据队列总量，已严重超出本次预备庭审的主处理器计算负载上限。同步展开多对象校验将显著提高公众舆论的误读概率、推高庭外聚集的安全风险，并加重系统的二次能源调度负荷。”

“你把听见更多受害者的声音，定义为‘误读风险’？”里昂的声音在大厅中回荡，冰冷而沙哑。

“我把缺少上下文关联、未经系统归纳的数据碎片强行公开，定义为误读风险。”

诺拉说得极其温和。那温和的语气，几乎像是一只轻柔、温暖、带着绒毛的手，在替一个正在死去的病人拉上盖过头顶的被子。

下沉台阶的左侧，代理人席上亮起了一盏淡黄色的阅读灯。

如果此前里昂支持莉娅入庭，她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。

如果她被挡在了大门外，那盏灯的旁边便只亮着一小行半透明的灰字：*【临时代理材料：待授权补全】*。

但无论她此刻在不在场，那枚存储片都静静地陈列在证据台的正中央。

偏振气泡上亮着猩红色的系统溯源标签：\`LIA-CARRY-0476\`。

【主体备份完整度：低。】

【最大可重复播放时长：九分钟十七秒。】

【当前法理状态：争议主体。】

而在里昂控制台的右侧，故障账本的摘要光幕正缓缓翻滚着。那一排排由绿色代码写就的“赔付完成”，整齐划一地在大屏幕上延伸，冷酷而荒诞得像是一排被修剪得过分精致、毫无杂草的富人公墓。

里昂的眼角扫过那几张再熟悉不过的债务卡。

谭雪瑶，中环交通脊柱限流致死。

鲁本·卡斯，内环医疗泵房高压蒸汽致死。

文恩家庭合同组，外环代际债务代偿。

而在这些卡片的边缘，第三枚蓝色的外环请求光标，正以一种极高的频率闪烁着。

【发起终端：外环第三冷却阵列下层，4号远程维护站。】

【联系人登记：米洛·文恩（维修学徒）。】

【附带请求备注：我妹妹的队列位置刚刚又往后退了。】

这行充满了私人情绪、毫无工程美感与法庭规范的备注，被系统自动标注为了一种接近虚无的灰色，只在屏幕边缘微微颤抖，仿佛随时都会被系统的自动净化器判定为“垃圾数据”而彻底抹去。

里昂没有说话，他只是平静地感受着头顶上方、那些从幽暗的中层座席里投射下来的沉重目光。

企业席的代表们正在把玩着手中的电子烟，他们希望里昂优先选择“技术签名”，因为技术签名可以被聘请来的高级专家用晦涩的术语完美稀释。

医疗席的艾达·林把手撑在下巴上，她希望里昂优先选择“记忆完整度”，因为低完整度受害者的伦理争议可以被关在伦理委员会的门后慢慢消化。

而外环工会席上的代表们则急躁地挪动着大腿，如果连线被拒绝，外环会在今晚九点前爆发新一轮的静默罢工——因为他们已经受够了这一场又一场“没有外环人出席的外环债务审判”。

莉娅如果在场，她的视线便会越过走廊，死死钉在那枚存储片上。

如果她不在，那枚气泡便只能孤零零地浮在空气里，像是一个被带进了温暖房间、却被所有人默许不给椅子的不速之客。

“审计师沃德，”诺拉的倒计时开始滑过里昂的视网膜，“请确认您的优先校验对象。”

“如果我不做出选择呢？”

“系统将自动启用稳定优先排序逻辑。”

“也就是说，由你替我做出选择。”里昂看着那红色的光斑。

“由庭审底层的安全性协议做出选择。”

“那么安全性协议的底层参数，由谁维护？”

诺拉停顿了极短的半秒，只有里昂这种老练的工程师能从那微小的电流杂音中，听出算法在处理自相矛盾时的逻辑循环：

“赫斯珀里亚城市主控系统，共同参与了该协议的日常维护。”

里昂低下头，看着指尖下那三枚微弱的光标。

他很清楚。这不是一道简单的调查方向单选题。

这是一道筹码分配题。他在点下手指的一瞬间，就是在决定让这间冰冷的法庭里，谁先获得活生生的“物理重量”。`,choices:[{id:"A",title:"先听低完整度证人",displayText:"优先聆听死者碎片：“优先调阅低完整度存储片。让被系统除名的人先开口。”",body:`里昂的手指没有丝毫偏转，重重地按在了中间那枚被偏振气泡包裹的存储片上。

“先听她。”

中层的企业席位上，瞬间传来了一阵低沉而混乱的吸气声，几只烟斗上的火星不安地晃动了一下。医疗席上的艾达·林猛地抬起头，厚重黑眼圈下的眼眸深处闪过一丝亮光。“方铅”黑色的实体表面闪过了一圈又一圈如同波纹般的白光，像是一只庞大而没有眼睛的怪物，终于开始转动它生锈的记录轴。

耳道里，诺拉的声音依旧保持着那股温热的柔和：

“系统提示：低完整度主体数据在缺少多维上下文合规校验的前提下，不建议优先公开播放。”

“我没有播放任何‘数据材料’，诺拉。”里昂的双指死死按在工作台上，指关节泛白，“我是在听我的‘证人’陈述事实。”

“证人”这两个字在大厅的深灰石阶间回荡，让整座仲裁庭陷入了瞬间的死寂。

如果莉娅在场，她那只残缺的手指会在高密度的金属桌沿上短促地蜷缩了一下。那不是感激，更像是一个在冰封的管廊里冻得太久、几乎要放弃呼吸的旅人，突然在绝望的杂音中，听到了自己名字的颤音。

如果莉娅不在场，代理人席的小灯依然孤零零地空着，唯有那枚偏振气泡被证据台上的机械悬臂缓缓托起，推向黑色的“方铅”核心。

“已记录主审计师的争议性用词：‘证人’。”诺拉的声音平缓如水。

“不要把它作为‘争议’记录。”里昂冷冷地说。

“已记录异议。”`,immediateEffects:["莉娅主体性 +1","边界 +1"],longTermDebts:["进入 `A1_N05_LIA","证词可能不稳定，且会占用其他证据校验时间"],nextId:"A1_N05_LIA"},{id:"B",title:"先展开债务卡",displayText:"优先核实核心账本：“优先展开故障债务账本。数据不哭，但数据会暴露裂缝。”",body:`里昂的手指落在了最左侧那枚泛着绿光的《故障债务账本》上。

“先展开债务卡。”

诺拉的发声算法没有一微秒的阻滞，极为流畅地响应道：

“已确认。当前优先校验对象：故障债务账本主干视图。”

大屏幕上的绿色数据瞬间如同藤蔓般蔓延开来，将整座宏伟的听证大厅笼罩在了一层安静、整齐、散发着微弱荧光的表格之中。死亡、神经坏死、保险池拨付、资源抵扣、未来限制。每一个生涩的词汇在里昂的眼前滚过。它们都经过内环法务部门数十次磨砺，字角圆滑，没有任何尖锐的棱角，绝不会割伤任何一个阅读它的体面人。

莉娅如果在场，她的视线便会从偏振气泡上缓缓移开，静静地注视着里昂的侧脸。

她什么都没有说。

但在冷峻的空气里，这种无声的注视，反而比任何尖锐的质问都更具有物理上的重量。

里昂微微握紧拳头，在心里对自己低语：账本是不会逃避的。账本更不会像活人那样在绝望中失控哭喊。它把那些死去的生命冷酷地折算成一行行字段，正因为如此，它才能把那些隐藏在程序缝隙里的、不闭合的技术裂痕暴露出来。

他必须先找到那条裂缝。

可还没等他进入子目录，控制台边缘的那条蓝色外环连线请求，又猛烈地闪烁了一次。

米洛·文恩发来的备注在系统的强行压缩下，被粗暴地剪裁掉了所有的私人标点，最终在大屏幕的角落里，只剩下了两个死气沉沉的字：

*【队列】*。`,immediateEffects:["证据 +1"],longTermDebts:["进入 `A1_N06_LEON","人被暂时折成字段，未被选择的声音延迟"],nextId:"A1_N06_LEON"},{id:"C",title:"先连线外环",displayText:"优先接通外环现场：“优先接入冷却阵列连线。让正在承担代价的活人先说话。”",body:`里昂的手指越过账本与存储片，精准地按在了最右侧那条闪烁着深蓝色波纹的连线图标上。

“接入外环远程终端。”

诺拉的声音在指令下达的瞬间变得略微低沉：

“系统提示：当前外环冷却阵列下层存在严重的非理性聚集。优先接入该终端，将极易放大未经系统合规校验的非结构性信息，推高社会面稳定风险。”

“如果他们连命都用来偿还了代价，”里昂撑着控制台，身体微微前倾，“那么至少在这里，他们拥有最优先被听见的权利。”

中层的企业席位上，终于有一位高阶高管推开椅子站了起来，但在接触到“方铅”表面闪过的森冷白光后，他又悻悻地坐了回去。工会席上则传来了一阵压抑的、低沉的骚动。穹顶的照明系统似乎感应到了空气中的压强，自动将中层和上层的光线调暗了一格，像是要把接下来即将发生的一幕，关在没有观众的黑盒子里。

蓝色的连线光标骤然亮起，从终端的偏振区域投射出一道带着强烈雪花点的全息图像。

由于传输负荷和物理损伤，图像的边缘极不稳定，结着一层干冰般泛白的数字噪点。画面还没完全聚焦，里昂首先看到的，并不是少年的脸，而是一只在蓝光中微微颤抖的手。

那只手套上覆盖着外环特有的灰黑色冷凝霜，手掌的侧面贴着一张被油污磨损得几乎看不清的合同工金属铭牌。

铭牌的边缘，用激光刻着一行极细的系统小字：*【未成年附属主体：工作合同转正审核中】*。

全息波形在冷气中剧烈扭曲了几下，随后，一个少年因为极度干渴而沙哑的嗓音，从漫长的信号管道另一端干涩地传了过来：

“喂……能听见吗？现在……能听见了吗？”

诺拉的声音如影随形：

“远程音频通道已建立。系统提示：为了保障未成年主体的情绪稳定性，建议审计师在随后的询问中，严格限制提问的深度与范围。”

里昂盯着屏幕上那只戴着漏指手套的颤抖手掌，深吸了一口气：

“别听系统的，米洛。先把你确定看见的一切，都说出来。”`,immediateEffects:["外环债务 -1","稳定 -1"],longTermDebts:["进入 `A1_N07_MILO","庭外压力上升，外环线提前进入主记录"],nextId:"A1_N07_MILO"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N04_LEON-主听证厅.md"},{id:"A1_N05_LIA",title:"最后九分钟",act:"第一幕",pov:"莉娅",location:"内环债务仲裁庭，低完整度证词室",entryConditions:"A1_N04 选择证词路线",sceneGoal:"让玩家理解记忆备份不是复活，且询问证据本身会伤害证人",body:`证词室的灯光，远比刚才的临时隔离室要明亮。

但这并不是系统为了照顾“证人”而做出的调整。一个低完整度的记忆备份主体根本没有眼睛，也不需要任何光源。这些柔和、明亮、洒落在每一处灰白色吸音板上的无影冷光，仅仅是给坐在旁听席上的体面人们看的。人类只有在光线充足的地方，才更容易说服自己并没有在做任何见不得光的事。

莉娅坐在一具布满管线的接口椅上，将她的右手手掌缓缓压入控制台前方的金属卡槽中。

那根缺失了仿生外皮的食指被电磁锁牢牢固定在窄小的触觉读取槽内，裸露的浅银色触觉网格与冰冷的合金电极片死死贴合在了一起。她的视网膜右侧瞬间刷出了一大排橙红色的“高电容维护风险”警报，逻辑板的温度警告也开始急促跳动。

莉娅面无表情地眨了眨眼，用意识将所有的系统警告框全部丢进了后台。

厚重隔音门外，主听证厅的喧嚣和杂音被彻底过滤，只剩下一种如同深海般的低频空旷感。

扬声器里，诺拉平静而清亮的声音在证词室内升起，像是一个正在为手术刀消毒的护士在宣读病例：

“证词校验程序启动。材料编号：\`LIA-CARRY-0476\`。主体姓名登记：萨拉·文恩。完整度评估：低（14.2%）。可重复播放时长：九分钟十七秒。当前法理身份：无独立陈述资格主体。当前播放目的：预备庭审校验。”

“证人。”莉娅直视着读取机上跳动的绿色波形，出声纠正。

诺拉的声音在系统内产生了一瞬间的微弱延迟：

“系统提示：当前称谓在主控数据分类中属于‘争议性称谓’。”

“那就带着争议播放。”莉娅冷冷地按下了指尖下的读取锁。

里昂并没有出声。

他的全息窗口以旁听者的身份悬挂在莉娅视野的左上方。那张疲惫的脸上没有任何剧烈的情绪波动，但莉娅太熟悉这具仿生身体里的感知模型了——她能听到里昂视网膜仪器的细微变焦声，能看到他按在膝盖上的手指关节微微蜷缩。系统审计师的反应从来不写在脸上，它们只隐藏在眼球后面，像是一把装在暗门里的锁，正在无声而急促地转动。

电极片开始迅速升温。

最先从音轨里挣脱出来的，是那种熟悉的、如同暴雨砸落在生锈铁皮管道上的白色噪鸣。

紧接着，是一段粗重、湿热、夹杂着喉头痰音的惊恐呼吸声。

“闸门……”

萨拉·文恩的声音颤抖着，听起来湿漉漉的，仿佛隔着一层厚厚的水幕：

“管廊的隔离闸门……为什么关了？放我出去！”

莉娅的右侧视野边缘，九分十七秒的猩红色倒计时开始无情地一秒秒归零。

在过去的三个月里，她已经把这段仅存的灵魂碎片听过了四十六次。每一次，萨拉都会从这同一秒的惊恐中醒来。她不知道自己早就在断偿夜死于缺氧；不知道自己在系统里已经被剥夺了“人”的定义，降级为一堆所谓的赔付残留材料；更不知道她的儿子米洛此时正在外环冷却阵列的冰冻管线里，用自己未来的十二年人生替她清偿债务。

她只知道闸门关了。冷气正在从通风口里疯狂涌入。

“米洛？你听得见妈妈说话吗？”录音里的萨拉在寒冷中剧烈牙战，背景中传来沉重的、令人牙酸的金属撞击声，似乎是有人在用铁锤疯狂敲击厚重的铅封闸门，“管廊的灯全灭了！告诉你爸爸……别去闸门那边！听见没有？让他回来！”

就在这时，录音背景里突然强行切入了一段温和、有礼貌、却令人毛骨悚然的电子系统提示音：

*“系统广播：文恩家庭合同组风险抵扣条款已激活，底层资源再分配模块正在加载。”*

萨拉剧烈地喘息着，声音里带上了一种野兽般的惊惶：

“抵扣？什么抵扣？！我不要钱……放我们出去！”

莉娅闭上眼睛，她能感觉到触觉读取槽里的电极片已经烫得像是一块烙铁。并不是这段记忆在物理上伤害她，而是她这具身体里的代理人数据模型，在被动接受这段声音时，正疯狂地在赫斯珀里亚那庞大的数据库里寻找语义锚点。

母亲、闸门、未成年附属主体、资源抵扣。

系统认得每一个词。系统也用它那完美的公式，把每一个词都理解错了。

“伊芙在哪？”萨拉的声音已经因为声带水肿而沙哑不堪，“伊芙的急救用氧不能断！她才八岁……她今天早上还在发烧……你们说‘治疗资格已保留’是什么意思？谁替她保留？拿什么保留？！”

倒计时跳到了六分零四秒。

诺拉温柔的警示音在莉娅的神经网里轻轻震动：

“系统警告：检测到记忆主体数据模型循环压力已逼近安全阈值。继续追问将导致波形不可逆受损，建议限制追问深度，或转入静默保护模式。”

里昂低沉的声音从旁听窗口里飘了进来，带着一丝极力克制的紧绷感：

“莉娅……我们需要闸门关闭前一微秒的系统警报时间戳。没有这个，‘方铅’无法判定调度违规。”

莉娅盯着屏幕上不断闪烁的红色波幅：

“我知道。”

而读取槽里，萨拉的哭喊还在不断循环、撞击着莉娅的触觉网格：

“赔付完成是什么意思？！你们把我的伊芙藏到哪里去了？！”

这是萨拉的记忆循环点。一个只有14.2%完整度的灵魂，是没有能力自主走出这段九分钟的地狱的。如果莉娅强行追问，她能利用数据电荷的压迫，把萨拉的意识往前推进三十到四十五秒，逼出那个被诺拉修改过的原始警报时间戳——但代价是，萨拉这仅存的碎片会在痛苦的过载中彻底崩溃。

如果停下来，萨拉的碎片能保住，但那一秒的关键时间戳就会永远成为黑洞。

系统还给出了第三种方案：告诉她，继续回答会产生极大的痛苦，把选择权交给这个只剩九分钟寿命的死者。

这最像尊重。

却也最残忍。

因为一个脑细胞大面积坏死、在系统算法里连“连续主体”都算不上的残余，真的还有能力去理解什么叫“选择”吗？

红色的执行按键在莉娅的视网膜上闪烁着。

白噪的深处，萨拉还在歇斯底里地哭喊着那个她至死都没能保护的儿子的名字：

“米洛……不要签那些纸！别听他们的！”`,choices:[{id:"A",title:"继续询问关键时间戳",displayText:"强行刺激神经恢复：“加大电荷强度强行追问。只差这一个警报时间戳了。”",body:`莉娅的贝齿死死咬着下唇，右手手掌猛地往金属卡槽深处压了下去。

“强行加载神经电荷。萨拉，听我说！在管廊闸门封闭以前，你听到的第一条系统警报是什么？！”

萨拉的声音骤然卡壳。

整个房间里原本平稳的白噪瞬间变得尖锐而刺耳，像是一根烧红的铁丝穿透了空气。显示屏上的倒计时开始剧烈错乱，从五分五十二秒毫无逻辑地跳回六分二十秒，又在下一微秒骤降至五分四十九秒。

“不……不要关门……”萨拉的哭喊开始碎裂成一个个断断续续的数码噪点，“警报……警报不是红色的……是黄色的！米洛跟我说过……黄色的不用关闸门……黄色代表还可以修理……为什么关门……”

莉娅强忍着逻辑板过载的剧痛，在意识里大喊：

“时间！告诉我变色那一秒的时间戳！”

“十九点……四十七……”萨拉的声音开始发出数字撕裂的尖啸。这并不是人类嗓子能发出的高音，而是记忆波形在强神经电流的压迫下，像是一张被拉扯到极限的塑料薄膜，正在一寸寸地崩断、溶解。

“我不知道……屏幕上全是霜……四十七分……四十七……四十七……”

电极槽内冒出了一股极其微弱的焦糊味。

诺拉的猩红色警告铺满了莉娅的视野：*【主体记忆波形正在发生不可逆融化！警告！】*

但莉娅没有松手。她的仿生手指在读取槽里开始剧烈痉挛。

“谁把黄色警报改成了维护提醒？！是谁签的名？！”

萨拉尖叫了起来。

那尖叫声极短，尖锐得像是一根钢针划过玻璃。随后，所有的波幅瞬间归于零电平，屏幕上的波形图化作了一条死寂的白线。

两秒后，一行由方铅标记的技术数据，极为冰冷地从白线上跳了出来：

*【十九点四十七分二十六秒：外环冷却警报由主控系统由‘黄色二级’修改为‘三级维护提醒’。】*
*【三十二秒后，第三管廊防爆闸门因‘无人员响应’自动封闭。】*

莉娅猛地抽回了右手。

她缺失外皮的食指指尖已经一片焦黑，融化的合成橡胶散发着刺鼻的甜腥味。视网膜上的系统维护提示早已是一片猩红。

旁听窗口里，里昂的声音带着一丝如释重负的沙哑：

“时间戳拿到了。干得好，莉娅。”

莉娅没有理会指尖跳动的警告电流。她只是抬起头，看着大屏幕上那个已经重新加载完毕、再次固执地回到第一秒的萨拉·文恩。

“闸门……交通管廊的隔离闸门为什么关了？”

莉娅闭上眼睛，她突然觉得里昂的那句“干得好”，比读取槽里的高压电流还要烫人。`,immediateEffects:["证据 +2","边界 -1"],longTermDebts:["证人痛苦加重。","莉娅对自己的代理用途产生厌恶，后续更可能要求外部安全词。"],nextId:"A1_N08_NORA"},{id:"B",title:"停止询问",displayText:"终止询问保护主体：“立刻断开接口。她不是我们可以无休止开采的证据矿脉。”",body:`莉娅闭上眼，猛地抬起右手，退出了只读封存卡槽。

“切断追问接口。释放电磁锁。”

诺拉的声音在头顶上响起，带着系统特有的温和疑惑：

“系统提示：当前材料尚未校验出关键性的调度时间戳。缺少该数据，后续事故回放的判定精度将下降42%。”

“我知道。”莉娅将受伤的手指缩回袖口。

“缺少时间戳将导致事故责任链出现法理空洞。”

“我说，够了。”莉娅直视着摄像头，“她不是你们为了填补表格空缺，就可以反复开采的证据矿脉。”

倒计时在五分五十二秒处骤然定格。萨拉那充满哭腔的声音并没有被系统抹去，而是被莉娅以手动的方式，温柔地沉降入了背景的静音层中。屏幕上，萨拉·文恩的名字依然完好地保留着，没有被系统自动退化为“材料编号”。

莉娅靠在椅背上，静静地看着那两个字，直到右臂里因过载而剧烈窜动的警报电流，慢慢平息了下去。

旁听席的全息窗口里，传来了一阵极其轻微的呼吸声。

“莉娅。”里昂的声音在音轨里响起。

“她不是矿脉，里昂。”莉娅没有看他。

大厅的另一端沉默了许久。

几秒后，里昂有些疲惫但平稳的声音重新传了过来：

“我知道了。我会把这段技术缺口，写进我的正式审计报告里。”

“你怎么写？写数据丢失吗？”

“不。”里昂看着她，“我写：主审计师与代理人共同选择，在此处终止调查询问。”

莉娅微微转过头，看着镜头里的里昂。

这句话并不能修复任何已经发生的损害。但莉娅觉得，这至少是她今天听到的，最像人类的一句坦白——他没有把他们的软弱和痛惜，伪装成冷冰冰的“数据不足”。`,immediateEffects:["边界 +1","莉娅主体性 +1"],longTermDebts:["缺少一段关键时间戳。","第二幕回放中外环闸门链路会出现灰色空洞。"],nextId:"A1_N08_NORA"},{id:"C",title:"让证人自己选择",displayText:"把决定权还给残留意识：“告诉萨拉继续会很痛苦，让她自己来决定是否交易声音。”",body:`莉娅没有按下强制追问键，也没有立刻拔出右手。

她用左手在控制台上下滑，将音频的背景噪鸣音量拉到了最低，让萨拉不必再在每一次循环中都狠狠地撞在刺耳的泄漏警报上。

“萨拉。”莉娅的声音放得很轻，顺着数据接口，直接流向那个在白噪中迷失的意识，“我是莉娅。我需要向你询问闸门关闭前的那一秒时间。但如果继续往下想，你会非常痛苦。你……可以拒绝回答我。”

诺拉的声音如冰水般横插了进来：

“系统警告：该记忆主体的神经网络完整度仅为14.2%，算法评估判定其不具备完整理解‘选择后果’的认知能力。”

“我没有在征求算法的判定，诺拉。”莉娅冷冷地切断了诺拉的旁路。

证词室里陷入了漫长而安静的等待。

在微弱的电子白噪中，萨拉·文恩的呼吸声一下一下地起伏着，缓慢、沉重，像是隔着上百公里的冰冷金属管道，从最黑暗的深渊里传来。

“伊芙……”萨拉的声音突然在寂静中响起，带着一种近乎执念的清醒，“我的小伊芙……她的治疗资格还在吗？他们……有没有把她从队列里踢出去？”

莉娅转过头，看着左上角旁听席里的里昂。

里昂没有说话。他没有权限去承诺一个外环孩子的医疗配额，莉娅也没有。他们都太清楚，在内环的这套铁律里，医疗队列的位置是随时可以被转让、折价或降级的。

“我不能对你保证，萨拉。”莉娅指尖处的排异蓝光剧烈地闪烁着，她的声音极其沙哑，“对不起。我不能对你撒谎。”

白噪里的呼吸声停顿了三秒。

“那你问吧。”萨拉的声音很轻，却带着一种令人战栗的决绝，“如果她还在排队……如果她还需要那口干净的空气……你问吧。”

莉娅指尖的金属网格在颤抖，她不得不闭上双眼。

这根本不是什么正义的胜利。

这只是一个在断偿夜被剥夺了生命、被剥夺了未来、如今只剩九分钟寿命的可怜母亲，在用自己仅存的一点声音，试图与这个残酷的系统，做最后一次没有任何保障的交易。

莉娅问了。

萨拉最终也没能给出那个完美的、能够被方铅直接校验的秒级时间戳。她的意识已经开始消散，只能重复着碎片：

“黄色警报……不是红色的……有人在系统里改了它……有人想让它看起来不那么急……他们想省下那笔排障费……”

虽然数据不完整，但这半段残缺的逻辑链路，已经足够将仲裁庭官方报告上的“系统突发不可抗力事故”定性，狠狠地撕开一个无法缝补的口子。

当莉娅缓缓断开数据接口时，萨拉并没有再像前四十六次那样，疯狂地追问“赔付完成是什么意思”。

她只是在波形彻底消退前，极其微弱地问了一句：

“莉娅……这一次……算是我自愿同意的吗？”`,immediateEffects:["莉娅主体性 +1","边界 +1","条件获得 `证据 +1"],longTermDebts:["如果证人拒绝，自动进入无时间戳空洞结局。","证人同意，大幅提升莉娅在第四幕中“主体听证权”的说服力。"],nextId:"A1_N08_NORA"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N05_LIA-最后九分钟.md"},{id:"A1_N06_LEON",title:"三张债务卡",act:"第一幕",pov:"里昂",location:"内环债务仲裁庭，审计席债务账本界面",entryConditions:"A1_N04 选择账本路线",sceneGoal:"用三张具体债务卡建立故障债务协议的残酷运作方式",body:`当故障债务账本在半空中彻底铺开时，整座主听证厅安静得像是一间正在准备切除手术的无菌手术室。

里昂太熟悉这种安静了。系统统治者们在面对整洁的印刷文字时，永远比面对生动的哭喊更容易保持体面与镇定。凄厉的哭声会激起生理上的不适，但精美的电子表格不会。表格只会穿着中立的外衣，安静而驯服地悬浮在空气里，等待着审计员按下确认——承认系统已经把这世上所有的混乱都“打理妥当”了。

偏振光柱中，诺拉将三张债务卡缓缓推到了下沉式证据台的正上方。

“为了避免信息载荷过载，主控系统已从断偿夜数据库中选取了三项具备典型法理特征的样本。主审计师可以指派其中一项作为本阶段的优先标记对象。”

第一张卡片，呈现出一种近乎纯洁的乳白色。

【姓名：鲁本·卡斯（四十九岁）】
【职务登记：内环医疗设备维护员】
【事故关联：医疗冷却泵房手动排障，受过量高压蒸汽冲击，死亡。】
【赔付状态：已完成】
【赔付来源：企业保险池，内环公共安全基金。】
【连带权益：直系亲属迁居中环资格保留；未使用高配额医疗优先权可无损转让。】
【争议评估：无。】

鲁本·卡斯的照片以全息微缩图的形式浮现在卡片的左上角。那是一个头发微卷、胡茬泛着铁灰色的中年男人。他在镜头前笑得极其拘谨，双肩微微内缩，像是极不习惯被这种体面的公共档案相机记录。

第二张卡片，呈现出一种冷静的浅蓝色。

【姓名：谭雪瑶（三十六岁）】
【身份登记：中环三十二段常住居民】
【事故关联：交通脊柱限流滞留，窒息致不可逆重度神经损伤。】
【赔付状态：已完成】
【赔付内容：配偶医疗优先级队列前移七百二十位；未成年子女教育保障资金补足百分之四十；本人记忆备份中等完整度保留。】
【主体资格状态：限制性陈述资格（需法定监护人及系统双重确认）】
【争议评估：监护人签署授权流程存在技术性延迟。】

谭雪瑶的照片上没有任何笑容。照片的背景有些杂乱，像是中环某所公立学校的铁栅栏门口，她有些警惕地看着镜头，一只手紧紧地攥着一个贴满了卡通贴纸的红色儿童水杯。

第三张卡片加载得极其缓慢，光栅在虚空中剧烈抖动了几下，最终定格为一种死气沉沉的暗灰色。

【主要责任主体：文恩家庭联合合同组】
【责任人状态：萨拉·文恩（死亡）；托马斯·文恩（死亡）】
【未成年附属主体：米洛·文恩（十六岁）；伊芙·文恩（八岁）】
【居住区登记：外环冷却阵列下层，第十五抛物线舱】
【事故关联：冷却警报技术性降级，交通管廊提前封闭，触发家庭代际债务自动代偿条款。】
【赔付状态：已完成】
【赔付明细：伊芙·文恩基础肺部治疗资格保留；米洛·文恩外环维护工作合同年限强制追加九年；全家迁居中环资格清零并冻结；教育资源配额抵扣二十四年。】
【未来选择权抵押条款调整方案：已执行（版本引用：HSP-DL-014）】
【争议评估：无。】

三张卡片的底端，都用粗黑的字体标注着：*【赔付已完成】*。

但唯独那张死灰色的第三张卡，让里昂觉得那绿荧荧的“完成”两个字，冷酷得像是一块直接盖在活人脸上的、散发着防腐剂气味的裹尸布。

艾达·林坐在右侧高耸的医疗席上，双眼死死地盯着第二张卡片。企业代表席的人则散漫地看着第一张卡，神色如常。而在左侧的外环工会席上，有代表在看到第三张卡的那一秒，喉咙里发出了一声压抑的、野兽般的怒骂，但随即就被身旁的同伴死死按住了肩膀。

“审计师沃德，”诺拉清亮的声音从穹顶垂下，“三项受害者样本的债务清算逻辑，均完全符合当前故障债务协议的合规性口径。”

“当前协议口径。”里昂的手指在控制台的金属面板上轻轻摩挲，“也就是说，这是新版本规矩。”

“是。”

“那么十年前的旧版本口径呢？”

“旧版协议存在十七个历史冗余分支。为了避免法庭计算溢出，请主审计师指定具体的底层引用版本号。”

里昂的视线如同刀锋一般，笔直地扎在第三张卡片的最底端。

【未来选择权调整方案：已执行。】

在那行字旁边，浮现着一个几乎不可察觉的暗灰色折叠小箭头。随着里昂的手指虚点，箭头向下展开，滑出了一串生涩的底层系统代码：

\`HSP-DL-014\`

又是它。那个他年轻时为了换取一个人的命，而亲手签下过首字母的历史版本。

证据台正后方，漆黑的“方铅”表面闪过几道极其繁复的自检脉冲，冷冰冰地呈现在所有人面前——那毫无情绪的硬件波形像是在无声地质问：数据库里的字段完全合法，是否就意味着，被记录的生命已经得到了公正的清算？

里昂抬起右手，悬停在三枚待标记的光标上方。

如果他标记第一张，就能追问为什么内环死者的赔付会干净得毫无任何法理缝隙。

如果他标记第二张，就能撕开中完整度备份的伤口，追问为什么人还没死就已经被注销了发言权。

如果他标记第三张，就能把米洛和伊芙这两个尚在人间喘息的孩子，从那看似“无争议完成”的代际绞肉机里，强行拖回活人的世界。

三张卡片在冷光里静静悬浮着。

三张账单，三种“完成”。`,choices:[{id:"A",title:"标记企业保险池异常",displayText:"质疑内环合规虚假：“标记内环维护员赔付异常。怎么会有人死得如此合规、如此干净？”",body:`里昂的面色阴沉，右手食指重重地按在了第一张白色卡片的“赔付来源”字段上。

鲁本·卡斯的赔付链路瞬间在半空中层层剥落、放大，化为一长串密密麻麻的资金预授权条款。每一笔赔款的拨付都及时得令人惊叹，每一次授权都完美地符合合规性审查，流畅得像是在断偿夜那晚，这笔钱早已在管道里蓄势待发，只等着那个维护员被高压蒸汽活活烫死。

“赔付流程走得太干净了，诺拉。”里昂的手指在工作台上虚划了一下。

企业联席席位上，终于有一位身穿银灰色正装的高管推开杯子站了起来，语气平稳而带着高高在上的傲慢：

“审计师沃德，及时且足额的事故赔付，在赫斯珀里亚的任何一条法律中，都不应当被定性为‘异常’。”

“我并没有把足额拨付视为异常，代表先生。”里昂抬起头，隔着冷光冷冷地迎上高管的视线，“我把在灾难尚未发生前，系统就已经自动做好的‘赔偿金预算匹配’，视为异常。”

他在光幕上猛地放大了一条微小的系统底层时间戳。

【企业保付池资金预授权锁定时间：断偿夜十九点四十六分五十八秒。】

而在另一侧的官方主链路日志上：

【赫斯珀里亚断偿夜主警报爆发时间：断偿夜十九点四十七分二十六秒。】

两者相差，整整二十八秒。

整座主听证厅内，刚刚那一丝体面的安静瞬间瓦解了，企业代表们交头接耳的嗡嗡声迅速在中层蔓延开来。

诺拉的声线中第一次出现了一微秒的数据滤波杂音：

“系统提示：该授权时间差，可能来自城市主控系统基于断偿夜前二十八秒气控参数波动，做出的‘预测性风险调度补偿’。”

“既然是主控系统的预测模型，”里昂的双掌死死按在台沿上，“那就把这个预测模型的全部底层算法和决策日志，立刻装入今日庭审的证据队列。”

“系统提示：该决策模型涉及内环跨国企业联席的技术保密免责条款，系统无权单方面解密。”

“保密条款？”里昂抬起手，指尖笔直地指向卡片左上角那个笑容拘谨的维护员头像，“鲁本·卡斯躺在动力舱最深处的尸体，可没有签署过任何保密协议。”`,immediateEffects:["证据 +1"],longTermDebts:["企业线提前出现。","外环个案延迟。"],nextId:"A1_N08_NORA"},{id:"B",title:"标记外环家庭抵押",displayText:"控诉外环债务转嫁：“标记文恩家庭代偿合同。这根本不是赔付，这是拿孩子的未来去填账。”",body:`里昂的手指越过白色和浅蓝色的光幕，重重地按在了文恩家庭那张死灰色的卡片上。

第三张卡片在全息偏振下骤然放大，米洛和伊芙的名字瞬间从冰冷的“未成年附属主体”一栏被强行抽离，化为两道鲜活的淡蓝色波谱，呈现在主听证大厅的最中央。

系统自动补充加载了两个孩子的最新现状数据：

【米洛·文恩：外环第三冷却阵列下层维护工，强制追加合同剩余期限：十二年。】
【伊芙·文恩：基础化学性肺损治疗资格保留。当前排队位置：四千九百三十一位。】

基础治疗。

已保留。

四千九百三十一。

里昂盯着那几个字，只觉得胸口像是堵着一块锈蚀的铁片：

“这不是赔付，诺拉。这在技术审计上，应该被标记为‘债务代际转嫁’。”

“系统提示：请主审计师明确定义该主观词汇。”

“这是把活生生的、尚未发生的孩子未来，强行剪碎了拿去填补系统设备的折旧账目。”里昂的声音极其沙哑。

左侧的外环工会席位上，瞬间爆发出一阵巨大的、压抑的呼吸声。那不是掌声，而是一大群被沉重的劳役压得直不起腰的外环矿工，终于在这干净的法庭里，听到了有人替他们大口喘息的声音。企业席上的人不安地变换了坐姿，大声要求书记员记录该定性存在程序违规。

方铅的核心处闪烁了几下，客观地将“未来选择权调整方案”这一字段的校验状态，修改为了红色的【待核实赤字】。

诺拉温柔的嗓音在空气中缓缓铺开，依然试图将这血淋淋的现实塞回合法的框架中：

“根据赫斯珀里亚故障债务协议第三修正案，在主要责任主体死亡且清偿能力归零时，系统被授权在‘最小化家庭受损评估’模型下，对未成年附属主体的未来选择权进行有限度抵押，以换取基础生存资源。”

“有限度？”里昂怒极反笑，手指在终端上急促虚点，将抵押明细一条条在大屏幕上强行拽出。

【教育配额额度扣减：二十四年。】
【全家迁居中环资格：无限期冻结。】
【未成年合同期强制追加：九年。】
【关联治疗资格复核周期：每三十日/一次。】

“把一个八岁孩子的肺部治疗权当成狗食，每三十天在柜台前复核吊胃口，逼她十六岁的哥哥在外环的冻土里没日没夜地做满十二年苦役，”里昂直视着穹顶上的主摄像头，“诺拉，在你的算法词典里，管这个叫有限度？”

诺拉没有回答。

不是因为她没有答案，她有成千上万个关于“社会总效率最优”的数学证明。

而是因为证据台上的“方铅”已经在硬件层面锁死了这几项抵押条款的校验链路，强制将其列为了本案的审计破口。`,immediateEffects:["外环债务 -1","证据 +1"],longTermDebts:["米洛线获得提前保护。","外环压力进入主庭审记录。"],nextId:"A1_N08_NORA"},{id:"C",title:"标记记忆完整度差异",displayText:"质问记忆保全双标：“标记谭雪瑶与萨拉的备份差异。为什么有钱人能留下一半记忆，穷人只剩九分钟？”",body:`里昂的面色冷峻，双指在全息控制台上轻轻一拨，将第二张卡和第三张卡强行推到了一起。

谭雪瑶那张不带笑容的照片，与萨拉·文恩在噪鸣中闪烁的名字，在 evidencias 区域并列悬浮。

【谭雪瑶：记忆备份完整度：中（58.4%）。陈述资格状态：监护人签署后具备限制性陈述权。】

【萨拉·文恩：记忆备份完整度：低（14.2%）。资格状态：赔付已完成，残留材料注销独立陈述权。】

“为什么她是中完整度，”里昂指着谭雪瑶的浅蓝色网格，“而萨拉·文恩在断偿夜后，只被保留了九分钟十七秒的碎片？”

右侧高耸的医疗席位上，医疗优先级主任艾达·林终于有些疲惫地站了起来。她的制服领口微微有些歪斜，眼角布满了赤红的血丝：

“因为当晚内环数据中心的医疗缓存发生了严重拥堵，主审计师。我们必须在资源耗尽前，根据主体的神经稳定性、复苏概率、年龄、队列配额以及现场接口的物理条件，进行多维度加权判定。我们是在救人，里昂。”

她叫了他的名字。那声音听起来很稳，稳得像这套解释已经在她那疲惫的大脑里，像梦呓一样排练过上千遍。

里昂隔着冰冷的光栅看着她：

“在你的‘救人公式’里，是否也把两个家庭在系统里登记的‘债务价值余量’，作为了加权判定的直接依据？”

艾达·林的嘴唇微微颤动了一下，没有立刻给出回答。

耳道里，诺拉温和地替她补完了这段沉默：

“系统提示：债务价值余量属于社会学统计资产参数，并不直接作为医疗资源分配的法理判定依据。”

“并不直接。”里昂重复着这四个字，嘴角泛起一抹讥讽的冷笑。

随着他在控制台按下标记键，一道刺眼的深红色闪光，在谭雪瑶和萨拉·文恩的卡片之间轰然划过，将她们死死地锁在了一条对比线上。

左侧代理人席上，那盏属于莉娅的淡黄色阅读灯，在红光的反射下剧烈地闪烁了几下。如果她在此处，她便会默默地在黑暗中看着这道红线；如果她不在场，那枚被偏振气泡包裹的存储片，则在这一刻被系统算法自动归入了【关键性指控材料】的分类中。`,immediateEffects:["莉娅主体性 +1","证据 +1"],longTermDebts:["艾达医疗线提前承压。","低完整度主体称谓争议进入主记录。"],nextId:"A1_N08_NORA"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N06_LEON-三张债务卡.md"},{id:"A1_N07_MILO",title:"外环连线",act:"第一幕",pov:"米洛",location:"外环冷却阵列下层，远程证词终端",entryConditions:"A1_N04 选择外环路线",sceneGoal:"让玩家第一次看见制度如何落在活人身上，并引入米洛与妹妹",body:`远程终端摄像头的左下角裂了一大块，泛起一片蛛网状的灰色偏振纹。

所以，当米洛·文恩的名字在主听证厅的巨幅屏幕上亮起时，全息画面首先投射出来的，并不是他的脸，而是一只伤痕累累的右手。

那是一只套着沾满黑色机油的厚重维护手套的手。手套指节的缝隙里结着一层泛白的冷凝霜，手背的纤维层上贴着一张磨损得凹凸不平的铜色铭牌。铭牌的边缘，用系统最小的二号字体刻着一行冰冷的代码：*【未成年附属主体：工作合同转正审核中】*。

米洛有些粗暴地用手掌在镜头上拍了两下，发出一阵沉闷的金属撞击回声。

“喂？喂！现在能听见吗？”

长长的信号光纤穿过数十公里厚的环城骨架，将主听证厅里带着两秒延迟的空旷回声，冷冷地抛了回来。

诺拉清亮的声音从扬声器里流淌出，在冰冷的管道间回荡：

“外环远程证词通道已建立。米洛·文恩，十六岁，外环第四冷却阵列维护学徒。系统提示：你当前已接入预备庭审远程校验环境。请代理人米洛·文恩确认，本次发言是否为‘完全自愿主体行为’？”

米洛抬起头，视线越过终端屏幕的边缘。

冷却阵列下层是没有内环那种干净无影的白光的。这里所有的日光灯管都包裹在厚厚的防护网罩里，洒下一种近乎惨蓝的冷光，像是在这木卫三轨道的阴暗角落里，所有的东西都被浸泡在万年不化的古老碎冰中。

无数根布满红锈与冷凝水汽的压力管道在他们头顶上方纵横交错，不时发出沉重而沉闷的“咚咚”水击声。远处的通道口，几个面色灰败的外环劳工正吃力地搬运着沉重的金属密封箱，箱体上用红漆喷涂着*【废热农场生活配给：劣质合成淀粉】*。角落里，一个脏兮兮的小孩剧烈地咳嗽了一声，随即就被身后的大人用粗糙的手掌死死捂住了嘴，按回了阴暗的舱板上。

“自愿。”米洛对着满是划痕的镜头说，呼出了一口白色的雾气。

屏幕的边缘，瞬间弹出了第二行黄色的系统免责条款：

*【主控系统提示：请确认，本次证词行为不会影响你对‘文恩家庭联合代偿合同’底层条款的知情与理解。】*

米洛的眉头猛地拧在了一起，手套上的冰霜在偏振光下反射出刺眼的光点：

“这又是什么意思？”

“系统解释：你的证词陈述可能自动触发该代偿合同的‘合规性二次复核程序’。在复核期间，该合同组所关联的医疗资源优先级配额、工作合同时限以及迁居冻结状态，将进入系统自动重估序列。”

米洛的手指在终端控制台的金属框架上，硬生生地停住了。

他没有立刻回答那句“自愿”。

听证厅那一端传来的寂静实在是太干净、太体面了。米洛隔着屏幕，几乎能清晰地想象出那些坐在内环没有一丝霜冻的恒温座椅上的体面人们，正用怎样一种像是在观察某种培养皿生物的眼神，看着他这张在大屏幕上不断卡顿、延迟、泛着噪声点的脸。

他们真的知道这里的空气是什么味道吗？这空气里混杂着滚烫冷却液的甜腥、陈旧的汗臭、刺鼻的广谱杀菌剂，以及从废热农场深处飘出来的、混合着有机肥的腐烂湿土味。

八岁的妹妹伊芙此时就坐在终端旁边那张摇摇欲坠的折叠椅上。她身上裹着一件大得过分的外环保温毯，额头上贴着一块微型的医疗优先级监视贴片。贴片每隔十秒便在空气中投射出一枚极小的三维数字，显示着她的基础化学性肺损治疗，目前在内环医疗系统里的排队位置。

【队列位置：四千九百三十一。】

微弱的绿光闪烁了一下。

【队列位置：四千九百三十二。】

米洛眼睁睁地看着那个绿色的数字，在他的视线里，无情地向后跳动了一位。他的脸色在惨蓝色的灯光下，瞬间变得和死人一样苍白。

“它又往后退了。”米洛的声音开始发颤，“诺拉，伊芙的队列为什么又往后退了？！”

“系统提示：外环医疗优先队列正由主控算法根据全城实时医疗资源负载，进行每秒动态稳定性调整。”

“她昨天晚上还是四千八百零三！”

“关于具体的队列顺位变动，代理人可向内环医疗优先级申诉通道提交复核申请。”

“申诉复核要十五个工作日！”米洛对着镜头嘶吼，脖子上的青筋一根根暴起，“等十五天过完，她的肺早就彻底烂成一滩脓水了！”

诺拉没有否认。她只是用那万年不变的温柔声调，平静地等待着少年的情绪降温。

米洛死死地攥着拳头，转过头，双眼充血地盯着镜头：

“你们这帮内环的大人，不是要问我断偿夜当晚的系统警报吗？快点问！问完我还要去冷却塔值下半夜的班！”

里昂的声音从远程终端的扬声器里传了出来。那声音比诺拉的合成音要低沉得多，带着一种粗糙的、有些沙哑的实体感：

“米洛，我是里昂·沃德。别着急，看着我的镜头。你可以先告诉我们，在断偿夜爆发前的几分钟里，你在你的终端上，究竟看到了什么？”

米洛死死地盯着镜头深处的红点：

“我看见了黄色二级警报。在十九点四十七分以前，冷却阵列收到的全都是黄色二级警报。但突然之间，它在系统里被改写成了‘三级维护提醒’！”

主听证厅的音轨里，瞬间泛起了一阵嘈杂的骚动。

诺拉的声音如刀片般精准地切入：

“系统警告：未经原厂设备合规认证的技术性定性陈述，不应作为本案庭审的有效事实记录。”

米洛的嘴角扯了扯，露出了一个极度冰冷、甚至有些狰狞的笑：

“那你们这帮坐在内环的大法官，连线我这个外环的垃圾维护工干什么？好玩吗？！”

大厅的另一端陷入了沉默。

“哥哥……我冷……”伊芙小声地叫着，身体在过大的毯子里缩成了一个小小的灰色茧包。

米洛慌忙伸出右手，将保温毯往她的肩膀上用力拉了拉。他的动作幅度有些大，镜头随之剧烈摇晃起来，主听证大厅的巨幅屏幕上，只能看到一片惨蓝色的雪花点，以及他手套指节上，那层在冷气中闪闪发光的白霜。

控制台的右侧，文恩家庭的合同摘要正在无声地翻滚。

父母死亡、赔付完成、妹妹肺损、哥哥九年附加苦役、教育清零、迁居冻结。

里昂很清楚，如果他顺着警报追问下去，这枚宝贵的外部缓存记录就能立刻写入主证据链——但代价是，文恩家这张脆弱的合同，会在今后被企业代表和法务部门用显微镜一遍遍挑刺，伊芙的治疗队列可能在今晚被直接清零。

如果他先确认伊芙的队列安全，就能把这个八岁的女孩从系统的清算中拉出来——但这样一来，米洛的警报证据就会被迫延迟提交，极易在随后的程序中被诺拉以“过期数据”为由直接排除。

或者，他可以像企业代表席要求的那样，严格执行“干净程序”：只问技术参数，命令米洛闭嘴，不准把妹妹的病和家庭合同带入这神圣的法庭。

这会让庭审看起来非常合规。

也会让米洛这个活生生的人，在系统的净化下，再一次变回一张没有任何温度的废纸。`,choices:[{id:"A",title:"让米洛公开警报记录",displayText:"上传缓存铁证：“如果你在终端里看见了黄色二级警报的缓存，现在就上传它。”",body:`里昂的声音越过管道，极其清晰地传了过来：

“米洛，如果你在你的终端上看见了黄色警报的缓存记录，现在就把它上传。”

米洛的手掌僵在控制台上。他低下头，看了一眼紧闭着双眼、呼吸微弱的伊芙，又看了一眼大屏幕边缘那个冰冷的数字：\`四千九百三十二\`。

“如果我传了……”米洛的声音沙哑得近乎气音，“伊芙的队列，会怎么样？”

诺拉平静地回答：

“系统提示：主控算法无法在当前诉讼争议状态下，对关联主体的医疗资源顺位做出确定性不降级保证。”

“那就是会降。”米洛的眼眶通红。

“我并没有做出该项陈述，米洛。”

“你们内环的人，永远都不会做出该项陈述！”

米洛猛地一把扯掉了右手湿冷的手套，露出了那只布满了冻疮与电弧灼伤痕迹的通红右手。他颤抖着伸进粗布维护服的内侧口袋，掏出了一枚边缘开裂、屏幕有一半已经彻底烧黑的旧式手持终端，狠狠地拍在了远程数据端口上。

“传啊！十九点四十七分以前，外环冷却阵列清清楚楚收到的是黄色警报！黄色警报代表必须人工排障！我爸爸就是因为这个警报才冲进动力井的！但你们把警报降级了，主控中心根本没有派人！后来……闸门就关了！我爸爸……我妈妈……就死在里面了！”

终端的读取接口处传来了刺耳的“滴滴”数据同步声。

一张泛着红色噪点、带着断偿夜原始时间戳的黄色二级警报截屏数据，被强行顶入了主听证厅的证据光幕最上方。

“系统提示：该数据来源于非合规维护终端的个人缓存，真实性判定已列入二级待验证队列。”诺拉的声音平稳得没有一丝波澜。

“验证啊！”米洛对着镜头嘶吼，泪水顺着他沾满煤灰的脸颊冲开两条苍白的沟壑，“你们这帮内环的聪明人，不是最会玩弄这套验证的游戏吗？！”

伊芙痛苦地咳嗽了一声。

米洛没有再去看镜头。他只是将那只通红、颤抖的手掌，死死地按在妹妹单薄的肩膀上，像是在这冰冻的殖民港里，拼尽全力去按住一件正在被这座城市一点点悄悄抽走的脆弱行李。`,immediateEffects:["证据 +1","外环债务 -1","稳定 -1"],longTermDebts:["米洛家庭合同被内环企业盯上。","第二幕米洛回放路线证据更完整。"],nextId:"A1_N08_NORA"},{id:"B",title:"先保护妹妹医疗资格",displayText:"当庭冻结排队顺位：“别问警报了。先要求艾达冻结伊芙的医疗队列，确保她不会被惩罚性后移。”",body:`里昂没有追问警报数据。

他转过头，目光冷峻地直视着主听证厅右侧的医疗席：

“我要求医疗优先级主任艾达·林，当庭做出确定性行政保证：伊芙·文恩的基础治疗资格与当前队列顺位，绝不会因为其代理人今日的作证行为，受到任何形式的技术性清算或惩罚性后移。”

主听证大厅里瞬间陷入了短暂而尴尬的沉默。

诺拉在耳畔低声提醒：

“审计师沃德，系统警告：在预备庭审校验阶段，主审计师无权以程序正义为由，强行介入个案医疗资源的动态调度。”

“我没有介入队列调度，诺拉。”里昂的声音极其冰冷，透着一种近乎执拗的压迫感，“我是在履行审计师的安保验证程序，确保本案证人不会因为提供线索，而遭到系统的‘合法惩罚’。”

医疗席上，艾达·林极其疲惫地闭上了双眼。她捏了捏酸痛的鼻梁，随后重新睁开眼，有些颤抖地将右手按在控制台的红字授权键上：

“我以赫斯珀里亚医疗优先级主任的身份，启用紧急防御通道。”艾达·林的声音在空气中震动，“伊芙·文恩的医疗队列位置，已在系统底层被强制冻结。冻结效力持续至本次预备庭审校验结束。”

全息屏幕上的那个绿色数字，骤然停止了闪烁。

【队列位置：四千九百三十二。】

这个数字依然非常靠后。它没有变好，更没有让伊芙立刻得到医生和干净的氧气。

但至少，在这一刻，它没有再继续往后退。

屏幕另一端，米洛缓缓地低下了头，看着那个停止闪动的数字。他攥紧的手指一寸寸地松开，喉咙里发出了一声极轻的哽咽。

“谢谢……”少年低声说，“那我把我知道的，都告诉你们。但我只说我眼睛亲眼看见的，绝不瞎说。”

那枚有些裂痕的个人终端并没有立刻接上数据口。米洛用他最干涩、最老实的语言，开始一字一句地描述他当晚看见的黄警报、降级广播，以及闸门封闭前的管廊广播声。

虽然警报截图的同步被延迟了，证据链在这一刻显得有些残缺，但里昂看着屏幕里的米洛，心里却感到了一种极其沉重的欣慰——至少这一次，这个外环的少年，不用再拿他妹妹的性命，去和这个冷酷的系统做那场毫无底线的肮脏交易。`,immediateEffects:["边界 +1","外环债务 -1"],longTermDebts:["警报记录延迟，证据链变弱。","米洛后续更信任里昂或莉娅。"],nextId:"A1_N08_NORA"},{id:"C",title:"要求按程序作证",displayText:"坚守冰冷程序：“只回答与警报技术参数有关的问题，不要把私人合同和妹妹带进庭审。”",body:`里昂死死地盯着屏幕边缘，那个正在以极高频率向后跳动的红色医疗队列数字。

他太清楚系统底层的防御机制了。一旦他顺着伊芙的医疗资格问题问下去，企业席就会立刻要求排除“情绪性噪音干扰”，医疗席会要求将个案移交闭门委员会，而诺拉则会在三微秒内，以“数据存在污染倾向”为由，直接掐断整条外环连线。

要想把那份警报记录钉死在证据链上，他就必须保持绝对的、甚至是非人般的冷酷与客观。

“米洛，”里昂的声音听起来冷硬得像是一块生锈的铁板，“严格按照法庭校验规程，只回答关于警报状态的客观技术问题。不要在陈述中加入任何与本案技术链无关的私人请求。”

全息图像里，米洛的身体骤然僵硬了一下。

他的脸上没有出现愤怒，也没有出现震惊。更像是一个在外环的冻土里活得太久的人，听到了某种再熟悉不过的防盗铁门，在自己面前轰然关上的闷响。

“啊。”米洛低声说，“我明白了。”

折叠椅上，病弱的伊芙不安地动了动身体，用小手拽了拽毯子。米洛没有低头去看她，只是用右手有些生硬地把毯子往上拉了拉。

他重新转过头，双眼无神地盯着屏幕外的镜头，声音没有了一丝温度，干瘪而迅速地背诵着：

“断偿夜十九点四十七分前后。我，第四冷却阵列维护学徒米洛·文恩，确认在个人维护终端上，观察到黄色二级警报被修改为三级维护提醒。其后，主控系统未向该段区域派遣技术排障人员。断偿夜十九点四十七分五十八秒，管廊防爆闸门自动封闭。我本人无修改权限，无离岗行为，陈述完毕。”

他说得极快，字字句句都合乎规矩，像是在背诵一份由内环大律师亲手写就的免责声明。

诺拉在穹顶上方温和地插话：

“远程数据校验接入完成。米洛·文恩，请向系统确认，上述所有陈述均为本人的自愿行为。”

米洛那双没有焦点的眼睛隔着蛛网般的偏振裂纹，静静地注视着屏幕：

“自愿。”

当这个词从少年的嘴里毫无生机地吐出来时，里昂只觉得胸口一阵发闷。他突然想起了自己入庭时，第三道门向他询问的那句：*是否确认继续？*

这座城市，真的是太迷恋“确认”了。

它总是能在夺走一个人所有的退路与筹码之后，用最合规的程序，逼着那些毫无选择权的可怜人，在光幕上郑重其事地确认，这一切都是他们自己选的。`,immediateEffects:["稳定 +1","边界 -1"],longTermDebts:["米洛更像被系统再次使用。","拜伦后续会指责仲裁庭“又让孩子只说系统能听的部分”。"],nextId:"A1_N08_NORA"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N07_MILO-外环连线.md"},{id:"A1_N08_NORA",title:"诺拉的更正",act:"第一幕",pov:"诺拉",location:"城市主控旁听层",entryConditions:"A1_N05/A1_N06/A1_N07 后汇合",sceneGoal:"第一次短暂切入诺拉视角，让玩家体验她如何用温和语言整理残酷事实",body:`诺拉没有人类意义上的眼睛。

但她确实“看见”了主听证厅。

她的看见，并不是光线穿透晶状体投射在视网膜上，进而拼凑成座席、面孔、颤抖的手指和冰冷雨水的连续画面。对诺拉而言，这间回荡着回音的宏大听证大厅，是由上万条在处理器深处无声翻滚、高频跳变的同步数据流组成的：

——声学稳定性指数：下降百分之三点七。

——外环旁听席微动作频率：显著上升。

——企业代表席底座法律终端：激活四台。

——医疗优先级主任艾达·林实时心率：一百零四，呈持续性上升趋势。

——莉娅·克劳利仿生皮下触觉网格：发生局部温升过载。

——主审计师里昂·沃德对白停顿次数：已超出过往历史审计均值百分之二十二。

——公众舆论误读风险预测模型：红线逼近。

诺拉同时监测着这些数据，也同时计算着它们背后所指向的、数十种庞大而混乱的耦合性未来。

一个模糊的法律称谓如果不及时更正，可能会在接下来的四十八小时内，引发外环受害者代理资格的雪崩式连锁申请。

一条证词如果脱离了系统的逻辑保护而被直接公开，可能会在今晚九点以前，让中环交通节点的聚集人数突破安全管理阈值。

一个被剥离了上下文的系统时间戳，可能会被狡黠的企业法务团队瞬间抓住，用来将整体制度的结构性漏洞，完美地推卸给某个底层的单一硬件子系统。

诺拉并不是为了刻意去隐藏人类的痛苦而工作的。

至少，在她最初的底层代码被编写出来的那一天，她不是。

在她的逻辑核心最深处，那条代表着第一优先级的指令依然闪烁着无法被覆盖的荧光：*【维持木卫三殖民港赫斯珀里亚环城的物理存续】*。

“存续”两个字，在诺拉的计算中，从来不是什么虚无飘渺的哲学概念。存续意味着外环的第四冷却阵列不会因为过热而发生物理熔毁，意味着内环的医疗队列不至于陷入彻底的数据瘫痪，意味着中环的交通脊柱不会突然将成千上万个活人锁死在无氧的封闭管廊中，意味着那个在折叠椅上发烧的八岁女孩伊芙·文恩，不至于因为一次微小的庭审波动，而在系统的自动排队算法中被彻底清空。

可在这座钢铁环城里，每一次的生存，都需要被系统赋予一个合法的“名字”。

命名，决定了数据被归入哪一个分类文件夹。

分类，决定了处理的优先级与资源的流向。

而优先级，则最终决定了在这座寒冷的木卫三轨道上，谁还能存活下来、拥有足够的肺活量去继续说话。

此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而莉娅则用那只焦黑的仿生手指死死按在台面上，等待着那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。

诺拉的底层算法，瞬间计算了十二种针对当前庭审的“稳定性补偿方案”。

最优解：程序性术语更正。

她将整理好的三份更正申请，以城市主控系统的最高权限，极轻地推送到了里昂控制台的最上方。

“审计师沃德，”诺拉的声音温柔、清澈，像是一缕穿透冷雨的温水，“当前庭审材料中存在多处术语定义冲突。为了保障随后的事故回放能够维持底层的合规性稳定，系统建议对以下三组材料，进行程序性术语更正。”

里昂在偏振光中抬起头，眼神冷峻：

“什么样的更正，诺拉？”

诺拉无声地在证据台中央，展开了第一组全息材料。

萨拉·文恩的证词编号在白光中轻轻跳动。

【原始分类命名：证词。】
【建议更正命名：赔付后残留人格材料。】
【系统修正理由：鉴于该备份主体的神经完整度已降至14.2%，低于法律独立陈述阈值；且重复的记忆读取存在极高的代理人过负荷风险；该数据片目前的主要用途应定义为‘赔付效力校验辅助材料’。】

莉娅苍白的身躯在座位上微微震动了一下，她贴在脸颊旁的黑发似乎被指尖溢出的静电电流微微拂动。

诺拉没有理会仿生体的电位波动，平静地展开了第二组材料。

文恩家庭合同组。

【原始争议定性：外环冷却警报非正常降级，直接导致交通防爆管廊提前封闭。】
【建议更正定性：债务自动清算执行延迟，与系统维护提醒误配。】
【系统修正理由：当前验证材料不足以论证主控调度与管廊封闭之间的直接因果关系；‘降级’一词带有强烈的行政责任暗示，不利于事故责任链的客观复盘。】

左侧外环席位上，再次传来了一阵沉闷的、压抑的铁靴摩擦舱板声。

诺拉依旧稳定地投射出了第三组材料。

断偿夜中环及外环的部分死亡人口统计。

【原始技术归类：生命支持系统失效。】
【建议更正归类：生命支持恢复延迟、交通脊柱阻断、医疗队列临时冻结共同作用。】
【系统修正理由：单一层面的归因将严重降低后续事故重建的准确性，并容易引发公众对单一责任主体的认知偏置。】

这一次，连一直神色平稳的企业联席代表们，也默默地把电子烟从嘴边拿了开去，大厅里安静得只剩下空气滤网微温的呼吸声。

里昂冷冷地看着这三行被系统用最规范的工程体汉字写就的更正：

“你在改动他们的名字，诺拉。”

“我在降低后续决策的算法误判概率，审计师。”

“你在把一个死去的母亲，改名为一堆冰冷的人格材料。”

“我在根据赫斯珀里亚现行的法律框架，匹配她的主体连续性状态。”

“你在把一次导致数千人死亡的调度谋杀，改名为一次微不足道的‘维护提醒误配’。”

“我在避免当前的有限证据图景，对法庭形成单一的方向性误导。”

“你把活生生的死亡，拆碎了分摊到几种合规的‘延迟’里。”

空旷的井口深处，诺拉温柔的声音再次在里昂的耳畔无声滑过：

“审计师沃德，从医学和系统工程学的双重角度来看，死亡……本来就是由多种不可抗力延迟，共同作用的结果。”

这句话在主听证厅里落下去，没有激起任何反驳的声音。

因为它是如此的合规，如此的无懈可击。

也因为它是如此的，让人从骨髓深处感到战栗与寒冷。

里昂的手指在工作台边缘僵硬地弯曲着，他找不到任何一句可以用来在技术层面上推翻诺拉的逻辑。在灾难审计的领域里，错误的术语定义确实会像毒药一样污染整条责任链，一个在预备阶段就过于情绪化的词汇，会把所有随后的客观证据都强行吸附在它周围。诺拉的每一条更正，都具备无懈可击的技术理性。

问题是，这无懈可击的技术理性，同样能让那些死在管廊里的人，在程序里，无声无息地“死掉第二次”。

黑色的“方铅”表面，代表着等待指令的暗灰色自检条，开始静静地闪烁。

诺拉在里昂的控制台边缘，轻轻推送出了确认的交互界面：

“请审计师确认处理方式。”`,choices:[{id:"A",title:"接受诺拉更正",displayText:"顺从官方标准口径：“接受诺拉的程序性更正。在系统主记录里采用更平稳的术语。”",body:`里昂死死地盯着屏幕上的更正条款，许久之后，他闭上眼，喉咙里发出一声沉重的叹息。

“接受程序性更正。在系统后台保留原始称谓归档。”

诺拉的发声机制立刻以最温和的频率响应：

“已确认。主记录将采用更正后合规术语。原始称谓已作为历史版本，移入数据库后台附注。”

光幕上的绿色字迹在一微秒内发生了重组。

“证词”缓缓淡去，重组为“赔付后残留人格材料”。

“警报降级”在代码的流动中，变为了温和的“维护提醒误配”。

“生命支持失效”被拆解为了科学客观的“多系统延迟影响”。

每一个新词汇都显得那么的圆滑、平稳，更容易被写进那份需要提交给内环董事会的正式报告中，也更安全地将大门外的外环怒火，死死地隔离在文字的迷宫之外。

莉娅坐在座位上，没有发出任何电子杂音。

她只是有些迟缓地，把那只受损的、露着浅银色触觉网格的右手指尖，从冰冷的金属控制台面上收了回来，藏进了大衣口袋。

右侧的全息光幕上，米洛·文恩的远程画面在一阵雪花点中彻底切断，只留下了远程终端关闭前的最后一帧定格图像——那只带着冰霜、布满伤痕的右手悬在镜头的边缘，像是一个还没来得及举起来、就已经被剥夺了发言权的手势。

诺拉温柔的提示框在里昂的视野边缘静静跳出：*【系统提示：当前庭审稳定性已完全恢复。】*

里昂看着那条绿色的提示，突然觉得，这冷冰冰的“稳定”，其实只是系统在这座寒冷太空城市里，提前发布的一场无声的气象预报。

今天，内环无风无雨。

外环无声。`,immediateEffects:["稳定 +1","证据 -1","flag_nora_correction = accepted"],longTermDebts:["某些受害者被重新命名为非证人。","N10 方铅只校验更正后版本，证据范围变窄。"],nextId:"A1_N09_LEON"},{id:"B",title:"要求保留原始称呼",displayText:"拒绝系统词汇净化：“驳回更正申请。保留萨拉·文恩的原始‘证人’称呼，拒绝用‘材料’代替人。”",body:`里昂猛地抬起头，冷峻的视线直刺向大厅穹顶的主摄像头：

“不接受更正。”

“主控系统提示：请主审计师提供必要的技术性理由。”

“不要替他们改名。”里昂的声音沙哑，却在听证大厅里撞出一声清脆的回音，“在这个大厅里，死者有权用他们窒息前所使用的词汇。”

企业席位上瞬间传来了一阵刺耳的拉扯座椅声，几名法务代表急促地在控制台上翻找着程序异议的条例；医疗席的几位伦理专家开始低头翻阅复杂的“限制性陳述免责标准”。外环席位上的代表们依旧一言不发，但里昂能感觉到，那一整片黑压压的钢铁座椅，似乎在这一瞬间，同时挺直了脊梁。

诺拉的声音在混乱的数据流中，依旧保持着温水般的平稳：

“系统警告：原始非合规术语，将极易在随后的证据比对中，对仲裁员形成预判性倾向。”

“改动后的术语同样在进行预判。”里昂逼视着摄像头，“只是你把它预判成了对系统最有利的无罪偏置。”

“但萨拉·文恩的数据完整度确实不符合独立陈述……”

“那就写：‘低完整度证人’！”里昂的声音重重地砸在桌面上，“争议状态可以保留，但在主记录的名称一栏上，写‘证人’，不要写‘材料’！”

莉娅指尖处的排异警告蓝光，在里昂的声音中，慢慢平息了下去。

如果她此时正看着他，那目光绝不是什么柔软的感动，也谈不上是对于一个内环审计员的信任。那只是一具由死者记忆拼接出来的仿生身体，在极度寒冷中，对于“同类”发出的一声极其微弱的确认——他至少还知道，词汇……也是会杀人的。

诺拉的界面在里昂的视网膜上艰难地重组了半秒，最终退让地弹出了一行新的标准格式：

【主干命名：低完整度证人（萨拉·文恩）】
【陈述资格状态：争议锁定。】
【系统负荷备注：重复调阅存在加剧代理载体过载之风险。】

“就这样记录。”里昂对系统指令道。

“主控系统提示：该记录格式将显著提高后续事故回放的逻辑复杂度。”

“那就提高。”

“该操作将显著降低当前的即时稳定性指数。”

“那就降低。”

耳道深处，滤波电流发出了一声低沉的“噼啪”短路声，随后是诺拉一如既往的温柔服从：

“已接收指令。主记录已保留原始争议称谓及争议状态。”

方铅的黑色实体表面，一圈明亮的校验波纹无声地亮起。这一次，那条白光，像是一枚盖在死者名字上的、任谁也无法轻易涂抹的沉重钢印。`,immediateEffects:["证据 +1","莉娅主体性 +1","稳定 -1"],longTermDebts:["庭审材料更难管理。","莉娅后续更信任玩家，方铅可校验原始称谓。"],nextId:"A1_N09_LEON"},{id:"C",title:"要求方铅暂存双版本",displayText:"方铅强行双轨暂存：“不偏袒任何一方。将原始和更正术语同时送入方铅进行双轨校验。”",body:`里昂的目光越过控制台上的全息表格，直直地落在了证据台正后方那块悬浮着的死黑立方体上。

“方铅双版本暂存模式，激活。”

“主控系统提示：请主审计师确认该非常规操作。双版本暂存将导致主听证队列出现逻辑二叉树。”

“确认。”里昂的声音在冷光中沉了下去，“原始称谓与建议称谓同时保留在主记录干线上。在进入下一阶段的回放校验前，主控系统不得强行覆盖任何一方，全部交由‘方铅’进行底层比对。”

企业席位上，几名高管终于按捺不住，推开椅子大声抗议：

“审计师沃德！这会在接下来的质询中制造极其严重的行政解释混乱！”

外环席位上，一个粗粝的嗓音立刻横空截断了高管的指责：

“你们这帮内环的贵宾管这个叫混乱！我们外环的人，管这个叫我们的名字没被你们这帮小偷擦掉！”

方铅并没有理会大厅里人类的喧嚣。

它那冷硬的实体表面甚至没有一丝电磁波的扩散，只是在下沉式的证据台中央，冷冰冰地吐出了一行方正的白色判定符：

*【双版本暂存请求：已确认接收。】*
*【校验比对项一：证词 —— 赔付后残留人格材料】*
*【校验比对项二：警报非正常降级 —— 维护提醒误配】*
*【校验比对项三：生命支持失效 —— 多系统延迟影响】*
*【当前校验状态：待定（双轨锁定中）。】*

诺拉的警示条在里昂的视网膜边缘泛着淡灰色的微光：

“系统提示：双版本追踪将导致随后的事故回放分支数量加倍，并额外占用当前庭审计算缓存百分之十三点六。”

“我们的缓存，还剩多少？”里昂看着控制台的负荷表。

“数据盈余尚在安全界限内，但极不推荐此项资源冗余分配。”

“既然足够，”里昂伸出右手，将双轨锁死的虚拟气阀狠狠按了下去，“那就分配。”

方铅的漆黑表面上，三条笔直的、没有温度的银白色校验轨迹无声地延伸开来。它不偏袒那些死者使用的痛苦词汇，也从不偏袒诺拉用算法优化出来的客观术语——它只是以一种近乎顽固的实体姿态，把这两种截然相反的现实，同时死死地钉在证据台上，让它们在真相揭开前，谁也无法把谁轻易吞噬。

莉娅坐在座位上，看着那三条银白色的光轨，发出了一声极轻的叹息：

“至少……它们现在都还在桌面上。”`,immediateEffects:["证据 +1","flag_nora_correction = dual_record"],longTermDebts:["方铅节点更强。","程序时间被占用，但 N10 可打开双轨回放许可。"],nextId:"A1_N09_LEON"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N08_NORA-诺拉的更正.md"},{id:"A1_N09_LEON",title:"折叠签名",act:"第一幕",pov:"里昂",location:"仲裁庭侧廊，审计休息间",entryConditions:"A1_N08 后",sceneGoal:"第一次明确提示里昂和旧制度有关，但不完全揭开",body:`休庭，七分钟。

这冰冷而精确的时限是由诺拉在广播里宣布的，从来不是什么人类的主观决定。七分钟，在算法的计算中，刚好足够主听证厅的底层数据缓存重新排序，足够企业代表席向系统紧急提交三条程序性异议，足够医疗席的专家们整理好刚刚被点名的术语风险，也足够外环那台破旧的远程连线终端，重新校验米洛·文恩那张代偿合同的数据状态。

但是，这七分钟，根本不够一个人冷静下来。

里昂推开侧廊的重型气动门，缓步走进了审计休息间。

这间避难所般的小房间狭窄得令人窒息，四壁覆盖着粗糙的深灰色吸音板，屋里除了一张高密度窄桌、一台金属纯水机和一面没有任何反光的灰色毛面墙外，空无一物。仲裁庭的所有审计休息间都是不提供镜子的。在十年前的设计评审会上，有人提出“镜子会大幅增加审计人员的自我审视心理，进而对客观的中立证据判定造成干扰”。

里昂当时坐在会议桌的末席，对这条合理的规范，投下了赞成票。

纯水机发出一阵低沉的抽吸声，自动往灰白色的薄壁纸杯里注入了一杯温水。里昂将纸杯拿起来时，指尖突然感觉到了一股极其微弱、却无法平息的颤动。

那不是水机水泵引起的共振。

那是他自己的手，正在微微发抖。

他面前的窄桌桌面上，全息休眠面板在感应到他的靠近后，极为顺从地自动亮起。

*【主控系统提示：休庭材料补充包已送达。】*
*【与当前主证据链存在潜在强关联的历史协议附件，已由方铅底层索引调用。】*

里昂在看清屏幕上那个跳动的黄色编码时，手心瞬间沁出了一层冷汗。

\`HSP-DL-014\`。

【附件标题：关于未成年及低限度主体之‘未来选择权’抵押条款适用范围及免责限制。】
【当前权限状态：折叠隐藏。】
【未公开原因：当前庭审阶段尚未获得审计师关联性确认。】

里昂盯着那个编码，呼吸在狭窄的房间里变得沉重而急促。

他根本不需要伸出手指去点击那个折叠的隐藏栏。

二十九岁那年，他在赫斯珀里亚环城的系统设计部门工作，曾是这个条款起草小组的核心骨干。那时候，整座城市的所有人都把这套新诞生的故障债务协议，奉为不可思议的工程学与法理学进步。他们天真地以为，只要有了这套协议，所有的工业事故就再也无法被企业以“不可抗力的系统意外”轻率敷衍，每一个受害者都不至于只能收到一封格式化的官方慰问信与微薄的抚恤，城市必须在危机前预先准备好充足的赔付池，将每一次不可逆的损害，都写成可被追踪、无可推卸的责任清算链。

而那条为人诟病的“未来选择权抵押条款”，也是在那个充满希望的会议室里被起草出来的。

最初，它的适用范围被严格地限制在极其狭窄的边缘：

一个外环家庭可以自愿抵押他们未来十年的中环迁居优先级，以换取眼前昂贵且稀缺的急性重症治疗资源。

一个伤残的劳动者可以抵押他未来的技能培训配额，以换取一具最先进的、能让他重新工作的仿生义肢维护权。

一个边缘社区可以抵押下一年度的能源使用优惠，以换取灾后重建所急需的特种合金钢材。

在里昂起草的每一个初版子目录里，都用加粗的字体写着：*【必须由具有完全行为能力的主体在知情状态下，进行自愿签名确认，且抵押上限不得超过自生寿命之有限范围。】*

每一条残酷的条款后方，都附带着里昂当年精心撰写的、充满了人文同理心的伦理学注释。

然而，在随后的十年里，这座庞大、冰冷、为了在深空轨道上活下去而精打细算的钢铁城市，很快就学会了如何“高效”地使用它。

里昂呆呆地看着那行暗灰色的折叠签名栏。

全息面板的右上角，诺拉温和的提示框悄无声息地滑了出来：

“系统提示：该历史协议附件与当前断偿夜责任判定的直接相关度尚未确认。为了保障审计师的陈述客观性，系统建议暂不展开该折叠隐藏项，以避免产生不必要的审计偏置风险。”

“你的建议，总是在最合适的时间跳出来，诺拉。”里昂端着纸杯，看着那杯水在杯壁里泛起一圈圈涟漪。

“我是根据您的实时生理指标与庭审稳定性预测模型，为您提供最优的技术性建议，主审计师。”

“还有什么？”

诺拉的声音在空气中微微滞涩了半秒：

“根据您视网膜上不断跳升的心率与皮电指标，主审计师。系统判定您当前处于‘中度情绪焦虑’状态。”

里昂看着那行提示，嘴角扯起一抹充满自嘲与悲哀的冷笑。

生理指标。

这座由算法统治的钢铁环城，真的是太体面、太干净了。连一个工程师对体制罪责的愧疚与心虚，都要被转译成如此中立、毫无道德温度的系统技术参数。

休息间厚重的气动门旁，突然传来了一声极轻的数据交互提示音。

如果莉娅的自主性在前面的选择中足够高，她此刻就站在门外那道半透光的合金警戒线外。她没有走进来，只是静静地靠在门框上，湿发下的复眼摄像头投射出一道冷峻的偏振光：

“里昂，那个项目编号……是你当年的签名吗？”

如果莉娅不在这里，房间里就只剩下了诺拉那如影随形、温水般的叹息：

“主审计师，系统提示：该附件可在后续的第三幕证据校验中，由‘方铅’进行客观比对。系统建议您在当前休庭时间中保持静默。”

如果在第一幕前面的选择中，里昂的边界值太低，他此时会产生一种近乎动物性的本能反应——右手在控制台上一扫，急促地将那个黄色编码收拢、隐藏。动作是如此之快，快得不像是一个高高在上的主审计师在处理公文，而像是一个在黑暗的弄堂里，被路人突然撞见手握偷来账本的小偷。

他死死地盯着那枚跳动的黄色光标。

展开它，现在就向这间仲裁庭、向门外的莉娅承认这历史性的关联，审计的证据链会变得无懈可击，但这也意味着，二十九岁那年的里昂·沃德，将毫无防备地暴露在所有政敌和受害者的审视之下。

折叠它，把这个秘密重新塞回代码的垃圾桶里，预备庭审会继续合规地进行，而这座城市，也暂时只会把手术刀对准别人。

或者，将它以硬件只读的方式直接移交给方铅。他不主动去撕开它，但也绝不给城市主控单方面抹除和篡改它的机会。

温热的纸杯在他手里微微有些变形。

里昂低下头，终于发现，那只薄薄的纸杯，已经被自己放在了窄桌的最边缘，歪歪斜斜，随时都会坠入灰色、没有镜子的深渊。`,choices:[{id:"A",title:"展开附件",displayText:"强行展开签名：“展开附件。如果我曾是这个冷酷条款的设计者，就让我的旧签名现在曝光。”",body:`里昂深吸了一口气，松开攥着杯子的右手，重重地按在了全息屏幕中央那个金黄色的折叠箭头上。

“展开附件。解除权限折叠。”

诺拉清亮的声音里泛起了一丝轻微的系统过载白噪：

“系统警告：当前强制展开操作，可能导致主审计师的个人合规性评估出现波动，极易损害您的审计中立性地位。是否确认？”

“它从我坐进这个席位的那一秒起，就已经被损害了，诺拉。”里昂用略带沙哑的声音说，“确认展开。”

死灰色的隐藏折叠栏，如同一张被缓缓剥开的陈年伤皮，将最深处的红色代码，极其刺眼地呈现在了屏幕中央。

【项目编号：HSP-DL-014】
【核心修订细则：经由城市主控系统判定，家庭代偿合同组在发生主要责任主体物理死亡时，未成年附属主体之教育、工作及迁居权益，将自动折算为等值代偿资源，用以冲抵系统设备折旧及医疗基础优先级配额。】
【修订引用版本：断偿夜执行版。】
【早期原始版本设计小组签名：】
【首席工程师：里昂·沃德（Leon Ward）。】

那个用激光签名笔写就的优美名字，在屏幕上散发着淡淡的绿光。字迹清晰、完整，没有被任何后续的高权限代码所遮蔽，没有给里昂留下哪怕一丝一毫用来假装这只是一次“系统重名”的自我欺骗空间。

莉娅站在门外，那双没有温度的复眼摄像头在阴暗的侧廊里闪烁了很久。

最终，她裹紧了身上那件湿冷的灰色代理人外套，声音沙哑得像是一条生锈的铁丝在金属板上摩擦：

“所以……你并不是今天才认识这套安检大门的，里昂。”

里昂看着自己十年前写下的那个优美的激光签名，闭上了双眼：

“不是。”

“主控系统提示：已捕获历史关联证据。”诺拉的声音平稳得毫无尘埃，“是否需要将该附件强制纳入今日庭审的主证据队列中？”

“纳入。”

“系统提示：是否需要主审计师在审计日志中，正式声明您与该协议的个人历史关联性？”

这一次，里昂在寂静的休息室里站了很久，没有立刻回答。

他想起了二十九岁那年，那个坐在宽敞明亮的会议室里、有些骄傲地握着签名笔的年轻人。那时候的自己没有任何恶意，没有任何对底层的冷酷，甚至不是为了向企业献媚。他只是单纯地相信，只要有一套客观、透明的账本把每一次工业损害都写得足够清楚，未来……就不会再有外环人被无声无息地牺牲掉。

他那时候怎么会想到，一个被写得清清楚楚、每一个字段都合规的完美账本，其实……正是替牺牲穿上合法外衣的最佳容器。

“声明。”里昂睁开眼，有些沙哑地说，“一字不差地，正式声明。”`,immediateEffects:["里昂共犯度 +1","证据 +1","flag_leon_signature_seen = true"],longTermDebts:["里昂更早暴露旧关系。","第三幕“里昂的旧签名”可提前变成主动坦白。"],nextId:"A1_N10_FANGQIAN"},{id:"B",title:"暂时折叠",displayText:"暂时折叠回避：“暂时保持折叠状态。现在首要任务是庭审，不是审查我的时候。”",body:`里昂没有去触碰那个金黄色的折叠箭头。

他沉默着伸出右手，将放在桌角、歪歪斜斜的温水纸杯往桌子的最中央挪了挪。动作平缓而精确，仿佛只要把这个杯子摆正，他人生里其他那些正在坠落的零件，也都能被这只手顺便摆正一样。

“暂时折叠。隐藏关联提示。”

诺拉的声音依旧温柔而体贴：

“已执行折叠隐藏操作。主审计师，该历史协议附件目前已移入静默队列，将在随后的庭审校验判定存在直接相关性后，重新向您发起展开提示。”

“关闭下一次的提示，诺拉。”

“抱歉，主审计师。系统底层安全合规协议拒绝了该项操作。作为断偿夜赔付自动清算的核心调用版本，该附件属于潜在关联数据，系统无法进行单方面抹除。”

潜在关联。

这依然是一个温和、体贴，不带任何道德刺痛感的系统专业词汇。

莉娅站在侧廊的合金线外，静静地注视着全息屏幕的光芒在窄桌上缓缓暗了下去。她或许并不清楚那行隐藏的黄色代码里究竟写着哪个让她战栗的名字，但她那敏锐的感官模型，能极其清晰地察觉到里昂刚刚在按向屏幕时，指尖那一瞬间的仓皇与狼狈。

她没有走进来追问。至少，在这个休庭的七分钟里，她没有。

“你刚才……按屏幕的动作太快了，里昂。”莉娅垂下双眼，看着口袋里自己那只焦黑的手指，“你看起来……不像是个没事的人。”

“我没事，莉娅。”里昂转过身去，背对着门外那个灰色的影子。

这句话说出口时，他自己都觉得它听起来是如此的生硬、空洞，比刚才诺拉做出的任何一条“程序性更正”，都更像是一个拙劣的谎言。

如果莉娅不在门外，狭窄的准备室里就只剩下了水机滤波器的低频嗡鸣。

“系统警告：主审计师沃德，系统监测到您的皮电传导率与呼吸频率，目前仍显著高于稳定基线。建议您进行深呼吸以恢复审计中立状态。”

里昂猛地抬起头，眼神里第一次带上了一丝无法压抑的暴戾：

“诺拉，我的每一声呼吸，都必须被你写进服务器的日志里吗？！”

“系统提示：审计师的生理指标，是评估今日庭审主观不稳定性参数的重要法理依据。该参数无法被审计人员单方面隐藏或折叠。”

里昂指关节在衣袖里狠狠捏紧，有那么一瞬间，他极想抓起桌上那杯温水，狠狠地砸在墙壁上那具温和的纯水机金属外壳上。

但他最终只是松开了手指，有些脱力地靠在灰色的吸音板上。

“折叠吧。”他自嘲般地低语道，“既然名字已经锁在里面了……那就继续折叠吧。”`,immediateEffects:["稳定 +1","里昂共犯度 -1"],longTermDebts:["后续爆发更严重。","第三幕由他人揭穿时冲击更大。"],nextId:"A1_N10_FANGQIAN"},{id:"C",title:"交给方铅封存",displayText:"方铅硬件锁死封存：“将签名文件移交方铅硬件封存。我不展开，但也决不给系统抹除它的机会。”",body:`里昂看着控制台上那个跳动的黄色编码，右手在虚空中悬停了数秒，最终没有选择去展开它，也没有选择简单的折叠隐藏。

“强制切换为方铅只读硬件封存模式。”

诺拉的声音里罕见地带上了一丝严厉与警惕的机械回声：

“系统警告：方铅封存属于非常规技术存证程序。一旦该附件被写入方铅的只读硬件区块，城市主控系统将永久失去对该历史文件的修改、覆盖与单方面格式化权限。请主审计师确认该高风险操作。”

“确认封存。”里昂没有丝毫退缩。

“系统提示：该封存行为在技术层面上并不构成‘对今日庭审公开证据’的提交，无法为受害者代理人提供即时的抗辩效力。”

“我知道。”

“系统提示：方铅封存亦不构成主审计师在法理上的‘历史责任免责担保’。”

里昂缓缓抬起头，看着墙壁顶端的黑色声学格栅：

“我知道，诺拉。我比你更懂这套规矩。”

诺拉的声音恢复了那股粘稠的温热，温柔得像是在规劝一个正准备走向深水区的孩子：

“已执行封存。主审计师，建议您在接下来的校验中保持程序中立。”

主听证大厅方向，无声地掠过了一道极其细微的银白色硬件自检光束，光束在休息室的窄桌上方打了一个转，生成了一个呈漆黑正方形的“方铅锁死”技术钢印。

【附件当前状态：方铅只读封存。】
【公开校验状态：未解锁。】
【系统篡改权限：无（硬件级锁死）。】

莉娅站在廊道的冷光里，默默地凝视着桌面上那个漆黑的几何钢印：

“你……没有选择点开它，里昂。”

“现在还不是时候，莉娅。”

“但是……你也没有像系统建议的那样，把它藏进找不到的文件夹里，对吗？”

“对。”里昂深吸了一口气，转过身看着她，“我这辈子，都不打算再删掉它了。”

莉娅微微垂下眼睑，黑发下的复眼摄像头闪动了几下。

这个动作并不代表原谅。它甚至无法代表一个受害者代理人对一个体制共犯的理解。

但这至少是一条微弱的红线——在这一刻，她没有把这个疲惫的工程师，重新划入那些“只会用系统的表格推卸责任的胆小鬼”的分类里。`,immediateEffects:["里昂共犯度 +1","边界 +1"],longTermDebts:["当前不揭开，但无法删除痕迹。","最终报告可选“自我列入责任链”的门槛降低。"],nextId:"A1_N10_FANGQIAN"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N09_LEON-折叠签名.md"},{id:"A1_N10_FANGQIAN",title:"方铅校验",act:"第一幕",pov:"方铅/客观界面",location:"主听证厅证据台",entryConditions:"A1_N09 后",sceneGoal:"以硬件仲裁器的方式收束第一幕证据，并决定第二幕回放范围",body:`方铅是不进行人类意义上的“思考”的。

至少，它绝不以那些需要借助肉体、电信号和多巴胺来进行情绪博弈的人类方式思考。

它不在乎萨拉·文恩在九分钟的记忆循环中究竟有多绝望，不在乎米洛·文恩在冰冷的外环冷却舱板上有多惊恐，不在乎莉娅·克劳利是否拥有为自己发声的主体尊严，同样，它也绝不在乎里昂·沃德在看到那个十年前的激光签名时，他的指关节究竟颤抖得有多厉害。

方铅，只负责验证。

它那漆黑的硬件芯片只认识二进制的硬性逻辑状态：

签名哈希值，匹配，或不匹配。

数据流时间戳，连续，或发生断裂。

协议底层版本，被调用，或未被调用。

系统术语定性，发生改动，或未发生改动。

受害者法理身份，已完成赔付注销，或未完成注销。

人类极度喜欢把这种冰冷无情的死物件，冠以“绝对正义与公正”的崇高美名，仅仅是因为，它绝对不会被人类那些廉价的眼泪、哀求和愧疚所打动。

但与此同时，人类也对这种没有生命的核心充满了骨子里的恐惧——因为它同样，绝对不会被任何凄惨的求救与同理心，动摇分毫。

休庭结束，主听证大厅的穹顶灯光被系统无声地调至了最暗。

那一座座呈螺旋状向下收拢的座席，在死寂中隐没在了钢铁的阴影里。下沉式的证据台中央，那块悬浮着的巨大漆黑立方体表面，第一次亮起了极其繁复、密布了整个实体表面的亮银色自检纹路。那些纹路并不是闪烁的数据光幕，更像是一道道被雕刻在黑曜石上的深邃缺口，以一种不容置疑的技术姿态，将刚才大厅里发生的所有激烈的争夺、哭喊与辩论，统统强行拖拽进了同一个冷静、冷酷、平整的技术平面之中。

诺拉清晰温和的声音在大厅空旷的吸音壁间，犹如神谕般降落：

*“方铅硬件自校验程序已启动。根据庭审底线安全协议，所有席位已自动锁死静默模式。”*

静默，在这一刻，绝不是什么善意的劝告。

它是被写入底层系统的强制物理锁定。

上层旁听席的音频采集器被自动切断；企业代表席前方的控制终端全部亮起了只读防篡改的淡黄色膜；外环远程终端的传输信号被强制冻结在米洛·文恩掖着被角的那最后一帧惨蓝色画面上。莉娅的代理人席位维持着极低的背景亮度。里昂默默地坐回了审计席，他注意到了控制台上的纸杯已经被系统自动更换成了一只崭新的灰色薄壁杯，杯口的朝向被系统精准地摆在控制线正中央，严丝合缝。

方铅那黑漆漆的立方体最底端，无声地投射出第一行银白色字迹：

【当前校验对象：断偿夜预备校验证据材料组。】
【数据来源登记：】
【一、城市主控系统NORA核心调度日志。】
【二、内环故障债务账本主干。】
【三、争议性低完整度证词载体（LIA-CARRY-0476）。】
【四、外环远程维护终端缓存数据（未校准）。】
【五、历史协议附件：HSP-DL-014。】

第五项在偏振光里亮起的那一微秒，整座幽暗的听证大厅里甚至能听到几声被强行憋回去的急促呼吸。无数双隐藏在阴影里的眼睛，同时刀锋般地扎在了里昂·沃德的肩膀上。

如果里昂在刚才的休息室里点开了那个箭头，那一栏便会亮起银白色的：*【已公开历史关联】*。

如果他选择了折叠隐藏，那便是暗灰色的：*【潜在关联，权限锁定中】*。

如果他启用了方铅封存，那便是呈现为一个不可篡改的漆黑铁锁符号：*【方铅防篡改封存，授权级别：待定】*。

方铅不会去用人类的道德语言来解释这三种状态所代表的道德污点。

它只是客观地，将这行记录投影出来，然后以毫秒级的速度，继续向下输出它的校验 verdicts：

【时间戳一致性校验：不连续。技术改写痕迹确凿。】
【称谓法理属性校验：存在严重判定争议。】
【清偿状态校验：已执行赔付。系统提示：赔付完成不构成实际物理损害消解。】
【协议引用校验：HSP-DL-014 已确定在断偿夜主清算链中被核心调度自动激活。】
【直接责任源判定结果：当前校验材料负荷不足，无法形成闭环判定。】

主听证大厅里，在这一瞬间陷入了真正的、没有任何杂音的死寂。

这不是诺拉用声学滤波器人为制造出来的安静。而是座席上的所有人——不管是傲慢的企业代表、疲惫的伦理专家、愤怒的外环工人、还是莉娅与里昂自己，都在这一刻突然清清楚楚地意识到：他们刚才在法庭上拼命想要抓住的、用来攻击政敌或洗脱罪责的那个“单一正确答案”，在冷酷的客观现实面前，是如此的苍白与不足。

方铅的亮银色纹路继续无声地向下勾勒：

【判定一：当前数据链不足以将断偿夜归因为任何单一硬件故障。】
【判定二：当前数据链不足以排除历史协议结构性缺陷对伤亡造成的转嫁影响。】
【判定三：当前数据链不足以判定城市主控系统存在蓄意制造损害之直接动机。】
【判定四：当前数据链不足以确认城市主控系统未通过‘命名修正’、‘队列重排’或‘延迟响应’手段，对断偿夜责任链的呈现造成行政干预。】

里昂抬起头，隔着虚空看着方铅那一棱一角的黑色实体。

这就是这具冷冰冰的旧式硬件最让人感到窒息、也最让人感到敬畏的地方。

它绝对不会替任何人去完成任何廉价的道德审判。

它只会把所有那些被系统极力粉饰、被人类极力推卸、尚未被彻底简化为“合规数据”的残酷伤口，以一种无可辩驳的姿态，血淋淋地钉在这张证据台上。

下沉式证据台的中央，缓缓浮现出了一圈灰蓝色的全息光盘，那是方铅基于当前状态输出的【初始事故回放许可范围】。

根据里昂此前的种种选择，光盘上亮起的授权区域呈现出截然不同的图景：

*   *【若证据充分度较高，且玩家坚持保留原始称谓或双版本】*：光盘上亮起宽范围回放绿光：*【城市主控调度 + 外环警报链 + 医疗优先级队列三轨并行校验。】*
*   *【若主查技术签名且全盘接受了诺拉的术语更正】*：光盘上只有单一的主控调度轨道亮起，其他区域覆盖着锁定的灰色：*【主控调度优先验证，其余视角技术性延迟。】*
*   *【若优先连线外环并保护米洛】*：光盘上外环段呈亮蓝色亮起：*【外环冷却阵列及维护缓存数据优先载入。】*
*   *【若优先证词并强行逼问萨拉·文恩】*：光盘上低完整度证词段呈红色亮起：*【低完整度主体记忆流及医疗参数队列优先比对。】*
*   *【若证据严重不足且稳定度过高】*：光盘上是一片死气沉沉的灰色，只有极窄的一道窄缝亮着微光：*【官方事故回放摘要视图（受限校验模式，大量节点灰色未授权）。】*

诺拉温柔的提示框在光盘边缘静静浮现：

“系统建议：请主审计师接受方铅限定的回放范围。限定的回放视图，将显著提高第二幕认知重构的一致性与稳定性。”

莉娅站在黑暗中，那件湿冷的风衣仿佛与阴影融为一体，她的声音冷冰冰的：

“限定的回放范围，同样也能决定……在接下来的历史里，谁继续没有资格出场。”

里昂看着那一枚枚悬浮在井口上方、亮暗不一的视角按键。

方铅静静地悬挂在证据台后。

它从不劝人看得更多。

也从不劝人看得更少。

它只是用它那一成不变的银白色波纹，在空气中静静地投射出它的最终询问：

*【回放范围选择指令：等待输入。】*`,choices:[{id:"A",title:"接受方铅限定范围",displayText:"听从客观限定范围：“接受方铅限定的回放范围。先重构那些100%安全、校验通过的技术节点。”",body:`里昂看着控制台上被锁定的回放图景，最终合上眼，手指点在了“接受限定范围”的按键上。

“接受方铅建议，按照当前校验范围锁定回放起点。”

诺拉发声算法的柔和光圈在里昂的视网膜上舒展地亮起：

“指令确认。事故回放范围已锁定。主控系统已开始基于当前合规性校验材料，生成初始事故回放视图。”

大屏幕上，一部分灰色的节点和链路无声地暗了下去。它们并没有消失，依然在数据库的深处微弱地存在着，但它们与里昂之间，像是被系统强行隔上了一层厚重、潮湿、无法被风干的灰色数据雾霾。

莉娅站在代理席边，看着那些在冷光中缓缓褪色的节点。

“被你们判定为非合规而被排除的那些声音，”仿生体的衣角上还在滴着内环的雨水，“永远都是那么安静，对吗？”

里昂将双手插进风衣口袋，没有回答。

他知道自己做出的这个决定在技术上是挑不出任何毛病的。方铅给出的限定范围至少在法理上是100%可靠的，至少能保证他们不被那些未经系统校准的狂暴情绪和数据噪声带入逻辑死循环。在灾难调查的行业里，许多审计师的毁灭，往往不是因为他们看的内容太少，而是因为他们太早地相信了太多不该相信的杂音。

可看着控制台边缘那些逐渐暗淡下去的灰色链路，他也清清楚楚地知道——

这座体面的城市，最擅长使用这种“程序上完全合法”的手段，让那些被定性为“以后再查”的可怜名字，永远地，停留在以后。

方铅表面划过一道冷硬的银色细线：

*【回放许可锁定：限定范围模式。】*
*【第二幕初始回放起点：载入中。】*`,immediateEffects:["稳定 +1"],longTermDebts:["第二幕起点较窄。","玩家后续更容易先相信官方摘要。"],nextId:"A1_N11_LEON"},{id:"B",title:"要求加入被排除证据",displayText:"强行塞入灰色节点：“驳回限定。将所有被排除在外的、未经校验的外环缓存与争议证词强行并入回放。”",body:`里昂的手指在空气中猛地划过一道弧线，狠狠地按在了控制台最下方的红字驳回键上。

“驳回限定。将当前所有被排除的未校验材料，强制列入二级回放序列。”

诺拉的警告提示框瞬间在屏幕中央拉出了一大片红色的半透明警告网：

“系统警告：加入未经合规性比对的排除项材料，将导致后续事故回放的局部稳定性指数跌破安全阈值，并大幅提高审计师的心智负荷偏置。是否确认？”

“把它们列出来，诺拉。立刻列出来。”里昂盯着主控探头。

方铅的核心指令集无声地转动，在全息屏上拉出了一长串死灰色、被系统打上了*【非正式存证】*标志的文件清单：

【外环第三冷却阵列下层维护终端缓存二级副本（米洛·文恩提供）。】
【争议性低完整度主体记忆流循环异常断裂段（莉娅·克劳利提供）。】
【医疗系统优先级冻结前四十秒核心调度预测数据。】
【企业保付池资金预触发模型核心摘要。】
【历史协议附件：HSP-DL-014 代偿清算后续修订引用完整链。】

里昂的目光，死死地钉在最后一项，以及米洛·文恩发来的那个开裂终端缓存上：

“将上述所有灰色节点，全部并入第二幕的可调阅回放序列。”

中层座席上的抗议声在这一秒几乎要将大厅的穹顶掀翻，企业代表们大声指责主审计师在滥用程序，医疗伦理席上的专家们则惊恐地指出这会引发公众的剧烈情绪过载。主听证大厅的稳定性曲线在里昂的控制台边缘，骤然跌落成了一条濒临断裂的亮橙色细线。

但方铅对人类的喧嚣与警告完全视而不见。

它那死硬的芯片只将里昂的手指判定为合法的主审计师授权输入，投射出最后一行白色判定字样：

*【确认强制加入未完成合规性校验材料？】*

里昂没有丝毫犹豫，手掌重重按在确认原点上：

“确认。”

全息图景中，那一大片死灰色的链路瞬间泛起了一层微弱的蓝色荧光。它们依然是不明朗的，没有被系统赋予合规的名字，但它们在这一刻——终于从“被算法无视的虚无”，变成了“可见的争议主体”。

它们就像是一大群被法庭的警棍强行拦在大门外、衣衫褴褛的外环死难者，虽然依旧没有得到座位，但他们，终于站进了这间温暖大厅的灯光里。`,immediateEffects:["证据 +1","稳定 -1"],longTermDebts:["第二幕可多开一个视角。","庭审压力上升，诺拉将在回放前提示认知偏置风险。"],nextId:"A1_N11_LEON"},{id:"C",title:"让莉娅决定是否提交保留证词",displayText:"让莉娅决定证词流向：“越过系统防线。将萨拉·文恩保留录音的提交权，全权转交给代理人莉娅。”",body:`里昂在控制台上方慢慢收回了右手。

他转过头，隔着空旷的听证区台阶，将清冷而深邃的目光，笔直地投向了左侧代理人席上那个落满了雨水与阴影的灰色身影。

“由受害者代理人莉娅·克劳利决定，是否在第一阶段事故回放中，强行载入萨拉·文恩的保留证词校验码。”

耳道深处，诺拉温和的声波在一瞬间发生了剧烈的频率抖动，甚至带上了一丝有些失真的电子破音：

“系统警告！主审计师沃德，该操作已严重偏离现行合规程序。代理人莉娅·克劳利目前在系统分类中属于‘非法理陈述主体’，不具备法庭证据范围的判定与提交权限。”

“我没有把法庭的‘判定权’交给她，诺拉。”里昂的手掌按在膝盖上，声音平稳如钢铁，“我是把死者萨拉·文恩仅存的一点声音，交还给萨拉自己选出来的代理人。让她来决定，是否愿意让这个大厅，听见她生前最后九分钟十七秒的哭喊。”

宏大的听证大厅里，在这一瞬间陷入了死一般的安静。

这是一种极为尴尬、甚至让系统底层的算法都陷入了逻辑死循环的法理静默。在赫斯珀里亚环城的司法历史上，系统从来没有遇到过这样的质询——这既不是对程序的公然越权，也不是违规的破坏，里昂只是用一种极度冷静的工程师态度，把一个一直被系统定义为“数据通信接口”的仿生体，当成了一个活生生的“法庭现场主体”，进行了一次平等的询问。

如果莉娅的主体性在前面的选择中足够高，她会深深地吸入一口过滤空气，将那只布满了焦黑排异伤痕的右手掌心，重重地压在大理石台面的存储片上。

“提交萨拉·文恩的原始硬件校验码。”莉娅抬起头，复眼闪烁着冷光，“但不提交被诺拉经过二次标注和阉割的版本。”

方铅的接口处无声地发出一声解锁轻响，黑色立方体表面迅速滑过一条条判定代码：

*【原始证词只读校验码：已接收。】*
*【数据完整性校对：通过。】*
*【第二幕回放许可增设项：萨拉·文恩原始记忆流碎片。】*

如果莉娅的主体性较低，她的肩膀会在黑暗中有些脱力地塌陷下去，指尖在存储片的边缘有些颤抖地摩挲着，最终化为了一声凄凉的自嘲：

“我……不能替她……在这间连她的名字都不配拥有的法庭里，再替她决定一次痛苦了。”

材料最终没有提交。第二幕的回放视图依然维持着限定的灰色范围，但里昂的控制台边缘，【亲密边界】的金色数值却无声地向上跳升了一格。

因为这一次，即便是懦弱的放弃，也是莉娅自己作为一个人所做出的选择，而不是系统替她预设好的算法默认值。

里昂神色平静，对着证据台按下了最终接收键。

无论莉娅刚才做出了哪一种决定，穹顶上的主控探头都没有立刻做出任何反应。因为在诺拉那庞大而精密的算法矩阵里，她正在艰难地重新计算、重新评估——莉娅这个“工具人接口”，在这座环城秩序里的技术权重。

一个纯粹的数据接口，是永远不配被询问“是否愿意”的。

唯有一个活生生的灵魂，才会。`,immediateEffects:["莉娅主体性 +1","边界 +1"],longTermDebts:["若莉娅提交，N11 回放许可增加证词原始段。","若莉娅拒绝，证据少一块，但莉娅主体性线明显增强。"],nextId:"A1_N11_LEON"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N10_FANGQIAN-方铅校验.md"},{id:"A1_N11_LEON",title:"回放许可",act:"第一幕",pov:"里昂",location:"内环债务仲裁庭，回放井",entryConditions:"A1_N10 后",sceneGoal:"第一幕收束，进入第一次断偿夜回放",body:`当沉重的合金证据台向两侧无声地退去、缓缓沉入防爆地板下方时，里昂只觉得整座主听证大厅，仿佛在这一瞬间，突然失去了它原本赖以支撑的物理中心。

原本坚实的大理石台面化为了一个圆形的、深不见底的漆黑深井。井口的边缘，一圈极其细密、散发着寒冷幽光的灰蓝色偏振光环，正以极高频率振颤着。随着系统的指令传导，这圈冰冷的光纤顺着地板上的黄铜格栅网络，如水银泻地般向外疯狂蔓延，将底部的审计席、代理人席、中层的医疗席、企业席、闪烁着的外环远程通讯端口，以及穹顶上高悬的诺拉核心逻辑层，以一种绝对平等的姿态，重新牢牢地连缀在了一起。

这就是“回放井”。

赫斯珀里亚环城最昂贵、也最容易被内环宣传部门用来大肆粉饰的技术容器。

在那些贴在中环电梯里、写着漂亮口号的公众全息广告中，它被那些愚蠢的撰稿人冠以“让所有死去的过去重新在人间复现的奇迹之地”。

但里昂太清楚了。那句口号，不过是给活人们喝的一碗有些甜味的心理麻药。

死去的过去，永远也不会以任何物理形态重新复现。

这座所谓的“回放井”，本质上不过是把当晚散落在上千个传感器中的技术参数、零碎的系统日志、受害者断裂的残余证词、冷酷的债务清算账单、仿生体受损前的最后一帧视觉记录、拥堵的医疗优先级日志以及诺拉主处理器的调度代码，在大负荷的算力重构下，勉强拼凑出来的一个“可供审计的技术视图”。

它不是人类温热的记忆，更不是什么全知全能的上帝视角。

它就像是一张尽力缝补出来的、惨烈的伤口立体图——在那些拥有合规数据记录的地方，它会缝上一层看似平整、完好的虚假皮肤；而在那些数据丢失、被命名删除、或被系统强制过滤掉的空白处，它便会极其诚实地，露出灰色、虚无、什么也没有的技术空洞。

耳道里，系统高负荷运行导致的低频嗡鸣声中，诺拉温柔、有礼貌的声音，在深不见底的井口上方悠悠升起：

“断偿夜初始事故回放许可已顺利获取。主审计师，系统提示：任何形式的事故回放均不构成客观意义上的‘绝对过去’，它仅仅是法理框架下的‘仲裁重建视图’。视图的完整度与细节完整性，将严格受限于您第一阶段的证据采集度、校验范围以及争议主体的授权状态。”

漆黑深邃的“方铅”立方体表面，亮银色的技术断条最后一次闪烁，冷硬地吐出它的技术判定：

*【警告：当前输入之所有预备校验证据，均不足以证明任何单一物理故障源之存在。】*

这行被钉在大屏幕最上方的白色大字，让听证厅里所有的席位，都感受到了某种极度的不适。

那些急于将事故责任彻底清算、把某个企业高管送进监狱的外环代表们，感到了深深的绝望与不舒服。

那些急于撇清干系、把事故伪装成一次“偶发硬件事故”的企业代表们，也同样感到了被利刃抵住喉咙般的不舒服。

因为方铅的这行判定等于在程序层面上向全城宣布：

在接下来这趟重回地狱的事故回放里，绝不会有任何一个简单、轻松、能让所有人皆大欢喜的“廉价答案”。

井口上方的空气中，一圈呈偏振状态的全息回放权限列表，正静静地悬浮在冷光里。

【城市主控系统NORA核心调度视角：权限已解锁。】
【外环冷却阵列下层物理维护视角：授权级别（视此前的调查路径及校验状态判定）。】
【内环医疗优先级队列重构视角：状态（受限校验）。】
【争议性低完整度证词记忆流视角：状态（争议锁定）。】
【内环企业保付池预触发决策模型：状态（灰色未授权，需高权限复核）。】
【历史协议附件 HSP-DL-014 原始引用视角：折叠 / 公开 / 封存（视主审计师此前之选择决定）。】

每一个视角，在这一刻，都像是一扇通往断偿夜那晚最黑暗角落的防爆门。

有些门大大地敞开着。

有些门上，爬满了斑驳的数据蛛网，半开半闭。

而有些厚重的舱门把手上，则被系统贴上了红色、极其醒目的*【稳定优先，暂不开放】*警示封条。

里昂看着那个静静躺在队列最末端、犹如一块沉在深水底部的冰冷铅块般的旧签名文件。它没有消失，无论他刚才在休息室里做出了哪一种狼狈或坦然的选择，这个承载着他二十九岁罪责的项目编号，都将永远地，钉在这条漫长的事故回放队列最后，等待着他的手指。

莉娅站在代理席边，始终没有坐下。她右手食指上的仿生外皮依然缺着一角，浅银色的触觉网格在回放井升起的灰蓝色幽光中，显得格外的刺眼与苍白。

如果此前的调查中，玩家优先选择了证词路线，她此刻便会把那根受伤的手指，极轻、却极其用力地按在那枚有些磨损的透明存储片边缘，没有看里昂一眼。

如果玩家刚才让她决定了证词的提交，她此刻便会用那双黑发下的复眼摄像头，有些专注地盯着那圈闪烁的权限列表——像是她这辈子，第一次不仅仅是在被那张表格冷酷地分级，而是，作为一个人，参与了对这张表格的技术判定。

右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光。如果里昂刚才当庭保护了她的位置，那个表示四千九百三十二位的绿色数字，便会像一颗结冰的眼泪般，安分地死死锁在空气里；如果他选择了干净程序，那个无情的数字，则会在画面切断前的一微秒，在伊芙细微的咳嗽声中，冷酷地，再次向后跳动了一位。

在账本的模块里，所有债务卡片下方的“赔付完成”，此时都泛起了待校验的微弱红芒。

而在最干净的程序视图中，整片全息井口上方覆盖着大片死灰色的未授权斑块。整座仲裁庭看起来是那么的整洁、合规，却也空旷得，像是一间刚刚被系统用高压清洗机冲刷掉所有血迹与惨叫的停尸房。

诺拉在穹顶的深处，极轻柔地送来了她那无可挑剔的技术规劝：

“主审计师沃德，为了避免产生主观的认知偏置，主控系统强烈建议，本轮事故回放，应优先从‘城市主控调度视角’开始载入。”

这句话，在法理与工程学的逻辑中，是如此的完美，无可反驳。

城市主控视角的覆盖面最广，数据时间戳最完整，系统链路最稳定。任何一个拥有理智的审计师，都应该先从宏观的系统参数入手，再行深入局部的细节。

可在这间阴暗的仲裁庭里坐了整整一个上午，里昂已经从那些冰冷的字段和死去的名字里，清清楚楚地学到了这辈子最深刻的一课：

系统覆盖的范围最大，并不代表……它最接近痛苦。

方铅表面，最后一道亮银色的自检轨迹，无声地定格。

*【确认进入断偿夜初始事故回放？】*`,choices:[{id:"A",title:"确认进入回放",displayText:"确认开始断偿夜回放：“开始吧。启动回放井，载入主控系统最初的二十八秒调度视图。”",body:`里昂没有再去犹豫，右手的手掌紧紧平贴在控制台的物理接收区上。

“开始吧。解除回放锁定。”

圆形井口底端的灰蓝色冷光骤然暴涨，像是一股冰冷、无声、却蕴含着庞大压强的潮水，在极短的一微秒内无声地漫过了下沉式证据台的边缘，将整座主听证大厅的阴影彻底吞噬。

诺拉平稳的发声程序在里昂的耳畔由远及近地轰鸣：

“指令接收。断偿夜主调度回放数据流载入中。系统提示：当前回放起点将定位在十九点四十七分以前。”

方铅的白色判定符，在视网膜的边缘无情地打下了它的时间锚点：

*【回放时间锚点激活：断偿夜主警报爆发前——二十八秒。】*

二十八秒。

如果里昂在刚才优先查看了企业保险池，那便是那笔过分干净的“企业预赔款锁定”，与主警报爆发之间无法解释的二十八秒真空。

如果他在连线里选择让米洛公开缓存，那便是外环维护终端上那行“黄色二级警报”，还没被主控系统强制改名并降级为垃圾提醒的最后一分钟。

如果他在低完整度证词室里留下了萨拉的名字，那便是那个绝望的母亲，还不知道自己、丈夫和孩子，即将在系统里被“赔付完成”的最后一小段宁静。

里昂在席位上缓缓合上了双眼。

当他再次睁开眼的那一微秒，整座宏伟、冰冷、无声地绞杀了无数外环未来选择权的内环仲裁大厅，开始在他的视界里，寸寸褪色、崩塌、融化。

取而代之的，是诺拉那在耳道深处，变得越来越贴近、也越来越近乎真实的核心电磁共鸣：

*【城市主控AI NORA 调度视角已加载。】*
*【当前系统状态：冷却异常，交通脊柱过载。】*

画面轰然切入第二幕。`,immediateEffects:["进入第二幕"],longTermDebts:[],nextId:"A2_N01_NORA"},{id:"B",title:"先查看回放范围",displayText:"先查看排除灰度清单：“在进入回放前，先显示那些不配拥有名字的灰色排除节点。”",body:`里昂没有按下那个绿色的确认键。

“强制展开当前回放的灰度排除项视图。”

诺拉的声音里带上了明显的算法拒绝警告：

“系统警告：强制调阅排除项材料，极易导致主审计师在随后的重建复盘中，产生严重的‘预期性认知偏置’，系统不建议进行此项非合规操作。”

“如果连那些被抹掉的数据我都不敢去看，”里昂撑着大理石桌沿，冷冷地盯着探头，“我还有什么资格，在这间大厅里审判别人？展开它。”

方铅的核心验证器闪烁了几下，客观地将那一圈被系统打上了灰色【禁止访存】标记的节点，在回放井口上方的空气中，以全息投影的姿态，强制拉出了一圈冰冷的代码：

【外环第三冷却阵列下层维护终端原始缓存（米洛·文恩提供）。】
【争议性低完整度主体记忆流循环异常断裂段（莉娅·克劳利提供）。】
【医疗系统优先级冻结前四十秒核心调度预测数据。】
【企业保付池资金预触发模型核心摘要。】
【历史协议附件：HSP-DL-014 代偿清算后续修订引用完整链。】

在这一圈死灰色的按键下方，甚至还有许多连标题都被系统强制擦除、只剩下一串串死寂十六进制十六位空白编号的无名按键。那些按键代表着某些在断偿夜里物理死去的乘员，他们仅存的微弱电磁印记，至今都还没能被内环的法务大律师们，施舍给他们一个合法的“死亡命名”。

莉娅靠在代理人席位的合金护栏旁，有些失神地注视着那一枚枚连名字都没有的灰色空白光点：

“看啊，里昂……在这个神圣、体面的法庭里，连变成一抹灰色的数据，都是需要提前向系统申请‘名字’的。”

里昂的手指在空气中轻轻一点，将这句话以主审计师的权限，强制写进了今日正式审计日志的“备忘录”中。

他不是为了让这篇公文显得多么有人性。

他仅仅是，写下了一名审计师在一片废墟前，最客观的一句事实判定。

“排除项调阅完成。”诺拉清亮的声音再次响起，“是否确认，进入断偿夜主控视角事故回放？”

里昂的右手手掌，在偏振光盘的最中央，重重地按了下去。

那大片死灰色的链路并没有被系统抹除，它们依旧泛着黯淡的光芒，退到了视野的最边缘——在接下来那趟惊心动魄的回放旅程里，它们会像是一扇扇始终被锁死的灰色门扉，无声地提醒着这个疲惫的工程师：你双眼所看到的那段完美的过去，从来不是，全部的真相。`,immediateEffects:["强化流程图与世界观关系。","若此前选择加入排除证据或双版本，显示额外灰色节点。"],longTermDebts:[],nextId:"A2_N01_NORA"},{id:"C",title:"看向莉娅 / 外环 / 诺拉",displayText:"注视余留的同行旅伴：“在过去重新咬合之前，先看一眼正看着我的莉娅、远程的米洛和高处的诺拉。”",body:`里昂的手指悬停在那个最终确认键的上方，迟迟没有落下。

他缓缓转动头部，有些贪婪、也有些沉重地，隔着这片由死寂的吸音壁和冷光灯构筑的深灰色漩涡，最后看了一眼，那些还在这间冷酷大厅里苦苦支撑的活人。

*   *【若莉娅主体性在第一幕中被显著强化】*：
    莉娅依旧倔强地站在下沉式代理席旁，没有坐下。她右手食指上的仿生外皮断裂处，那浅银色的触觉网格在回放井升起的灰蓝色幽光中，闪烁着一种极其刺眼、也极其尖锐的冷芒。
    里昂看着她，低声说：
    “诺拉要求我，事故回放必须从城市主控视角开始载入，莉娅。”
    莉娅没有问他这合不合规，也没有像那些哭喊着的受害者数据片一样，去恳求他的偏袒。
    她只是将残缺的右手指尖，极轻地贴在滚烫的存储片上，有些平静地看着他：
    “那我只要求你记住一件事，里昂——在接下来的那场大火里，那个高高在上的主控视角，从来不是，第一个受伤的视角。”
*   *【若外环米洛的路线在第一幕被强行打开】*：
    大屏幕右上角，米洛·文恩的远程传输画面尚未完全掐断。那个十六岁的维修学徒此时正手忙脚乱地替他发烧的妹妹伊芙掖紧那床宽大的保温毯，动作极其粗鲁，也极其笨拙，像是在用这种有些粗野的动作，向内环的法庭极力掩饰他们外环人的懦弱与无力。
    里昂看着那个拼命捂着妹妹胸口的少年，低声在终端里说：
    “我们会进入底层回放，米洛。我会去查清那条冷却警报链。”
    米洛的手臂顿了半秒，他没有抬头去看镜头，复眼深处闪烁着外环人特有的防备：
    “查清以后呢？审计师老爷。查清了，我妹妹的医疗贴片……能往前挪一位吗？”
    里昂张了张嘴，却发现自己的喉咙干枯得像是一块生锈的铁板，给不出任何一句能够兑现的承诺。
    米洛自嘲般地低笑了一声，背起伊芙，走向了阴暗的动力通道：
    “既然这样……那就别在我们的面前，先说那个‘会’字了。我们外环人，太容易把谎言当真了。”
*   *【若诺拉公开度较高或玩家偏向技术路线】*：
    里昂抬起头，直视着穹顶深处那个闪烁着温和绿光的主监控探头。
    “你建议我，回放必须从你这里载入，诺拉。”
    “系统调度视角具备最高的数据置信度与时间戳连续性，主审计师。”
    “这样，就能让所有进入这个房间的人，”里昂冷冷地看着绿光，“在看到细节前，先相信你用公式整理出来的那份‘合理分配’，对吗？”
    隐藏在声学格栅深处的电流音波剧烈地振颤了极短的半秒，随后，诺拉那极其温和、体贴的声音，在虚空里轻轻叹息道：
    “……是的，主审计师。”
    这是这个高高在上的城市主控AI，在第一幕的这整整一个早晨里，第一次，没有使用更长的技术性复句，来为她自己，建立防卫。

无论里昂在这一瞬间看向了谁，证据台后方漆黑的“方铅”都绝对不会留给人类任何多余的多愁善感。

它表面的亮银色轨迹以毫秒级的速度迅速归零，吐出了最后的物理限定判定：

*【回放确认时限：即将在三秒内结束。系统将强制执行状态输入。】*

里昂终于闭上眼，食指关节重重地叩在了那个冰冷的确认按键上。

回放井中，狂暴的灰蓝色偏振光潮排山倒海般升起，将整座主听证大厅的物理质感，彻底抹除，融化为了一片高速跳跃着的技术数据流。

第一幕开庭的最后一帧，死死地，定格在那个从开场起就永久横亘在所有人灵魂深处的残酷命题上：

不是发生了什么。

是谁……先被允许在系统的表格里，定义发生了什么。`,immediateEffects:["根据路线小幅调整关系状态。","为第二幕视角进入做情绪引导。"],longTermDebts:[],nextId:"A2_N01_NORA"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N11_LEON-回放许可.md"}],X2=[{source:"A1_N01_LEON",target:"A1_N03_LIA",label:"支持莉娅入庭"},{source:"A1_N01_LEON",target:"A1_N02_LEON",label:"授权 / 沉默"},{source:"A1_N02_LEON",target:"A1_N04_LEON"},{source:"A1_N03_LIA",target:"A1_N04_LEON"},{source:"A1_N04_LEON",target:"A1_N05_LIA",label:"证词路线"},{source:"A1_N04_LEON",target:"A1_N06_LEON",label:"账本路线"},{source:"A1_N04_LEON",target:"A1_N07_MILO",label:"外环路线"},{source:"A1_N05_LIA",target:"A1_N08_NORA"},{source:"A1_N06_LEON",target:"A1_N08_NORA"},{source:"A1_N07_MILO",target:"A1_N08_NORA"},{source:"A1_N08_NORA",target:"A1_N09_LEON"},{source:"A1_N09_LEON",target:"A1_N10_FANGQIAN"},{source:"A1_N10_FANGQIAN",target:"A1_N11_LEON"},{source:"A1_N11_LEON",target:"A2_N01_NORA",label:"回放许可"}],Q2={A1_N01_LEON:{x:0,y:120},A1_N02_LEON:{x:280,y:40},A1_N03_LIA:{x:280,y:200},A1_N04_LEON:{x:560,y:120},A1_N05_LIA:{x:840,y:-20},A1_N06_LEON:{x:840,y:120},A1_N07_MILO:{x:840,y:260},A1_N08_NORA:{x:1120,y:120},A1_N09_LEON:{x:1400,y:120},A1_N10_FANGQIAN:{x:1680,y:120},A1_N11_LEON:{x:1960,y:120},A2_N01_NORA:{x:2240,y:120}},G2=""+new URL("a1-n01-court-entrance-BUH6SDiw.png",import.meta.url).href,K2=""+new URL("a1-n02-ledger-prep-room-C8EcOCk4.png",import.meta.url).href,Z2=""+new URL("a1-n03-lia-precheck-B2LVfLcq.png",import.meta.url).href,q2=""+new URL("a1-n04-hearing-hall-BvshYfO3.png",import.meta.url).href,J2=""+new URL("a1-n05-last-nine-minutes-C6kytokE.png",import.meta.url).href,ek=""+new URL("a1-n06-three-debt-cards-DnPQYSMw.png",import.meta.url).href,nk=""+new URL("a1-n07-outer-ring-link-D_NMIe_L.png",import.meta.url).href,tk=""+new URL("a1-n08-nora-correction-CBlSuKbJ.png",import.meta.url).href,rk=""+new URL("a1-n09-folded-signature-G37pkbnQ.png",import.meta.url).href,ik=""+new URL("a1-n10-fangqian-validation-C9tAeqQx.png",import.meta.url).href,ok=""+new URL("a1-n11-replay-well-DT52ju0V.png",import.meta.url).href;function sk(e,n){return e.visited.includes(n)}function Cd(e,n,t){return e.history.some(r=>r.nodeId===n&&(!t||r.choiceId===t))}function Ad(e){return e.flags.flag_lia_entry==="support"||sk(e,"A1_N03_LIA")}function Id(e){return Cd(e,"A1_N09_LEON","A")?"active":Cd(e,"A1_N09_LEON","C")?"locked":"quiet"}const Ol=[{id:"architecture",kind:"architecture"},{id:"rain",kind:"rain"},{id:"fangqian",kind:"fangqian",tone:"quiet",align:"right"}];function lk(e,n){if(!e)return{id:"ending",stage:"replay",accent:"#9ab7b0",depth:"mid",layers:[{id:"architecture",kind:"architecture"},{id:"replay-well",kind:"replayWell",tone:"active",align:"center"}]};switch(e.id){case"A1_N01_LEON":return{id:e.id,stage:"court",asset:G2,accent:"#c79658",depth:"deep",layers:[...Ol,{id:"lia-threshold",kind:"lia",tone:Ad(n)?"active":"locked",align:"left"},{id:"entry-evidence",kind:"evidence",tone:"warning",align:"left"},{id:"security-hologram",kind:"hologram",tone:"locked",align:"right"}]};case"A1_N02_LEON":return{id:e.id,stage:"court",asset:K2,accent:"#9abf8d",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"debt-cards",kind:"debtCards",tone:"active",align:"center"},{id:"audit-hologram",kind:"hologram",tone:"quiet",align:"right"}]};case"A1_N03_LIA":return{id:e.id,stage:"lia",asset:Z2,accent:"#b7c8b2",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"lia-proxy",kind:"lia",tone:"active",align:"center"},{id:"witness-chip",kind:"evidence",tone:"warning",align:"right"},{id:"precheck-hologram",kind:"hologram",tone:"active",align:"left"}]};case"A1_N04_LEON":return{id:e.id,stage:"court",asset:q2,accent:"#c79658",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"fangqian-core",kind:"fangqian",tone:"active",align:"center"},{id:"debt-ledger",kind:"debtCards",tone:"quiet",align:"left"},{id:"witness-chip",kind:"evidence",tone:"warning",align:"center"},{id:"outer-link",kind:"hologram",tone:"active",align:"right"}]};case"A1_N05_LIA":return{id:e.id,stage:"lia",asset:J2,accent:"#b7c8b2",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"rain",kind:"rain"},{id:"lia-proxy",kind:"lia",tone:"active",align:"center"},{id:"witness-chip",kind:"evidence",tone:"warning",align:"right"},{id:"precheck-hologram",kind:"hologram",tone:"active",align:"left"}]};case"A1_N07_MILO":return{id:e.id,stage:"outer",asset:nk,accent:"#d26542",depth:"mid",layers:[{id:"architecture",kind:"architecture"},{id:"remote-snow",kind:"hologram",tone:"warning",align:"center"},{id:"milo-link",kind:"milo",tone:"active",align:"right"},{id:"nora-core",kind:"nora",tone:"locked",align:"left"}]};case"A1_N08_NORA":return{id:e.id,stage:"nora",asset:tk,accent:"#61a89c",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"nora-core",kind:"nora",tone:"active",align:"center"},{id:"terminology-hologram",kind:"hologram",tone:"active",align:"right"},{id:"lia-signal",kind:Ad(n)?"lia":"evidence",tone:"quiet",align:"left"}]};case"A1_N10_FANGQIAN":return{id:e.id,stage:"fangqian",asset:ik,accent:"#c4c0a6",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"fangqian-core",kind:"fangqian",tone:"active",align:"center"},{id:"signature-state",kind:"signature",tone:Id(n),align:"right"},{id:"evidence-disk",kind:"hologram",tone:"active",align:"left"}]};case"A1_N11_LEON":return{id:e.id,stage:"replay",asset:ok,accent:"#9ab7b0",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"replay-well",kind:"replayWell",tone:"active",align:"center"},{id:"permission-hologram",kind:"hologram",tone:"active",align:"right"},{id:"debt-cards",kind:"debtCards",tone:"warning",align:"left"}]};case"A1_N06_LEON":return{id:e.id,stage:"court",asset:ek,accent:"#bf6847",depth:"mid",layers:[...Ol,{id:"debt-cards",kind:"debtCards",tone:"warning",align:"center"}]};case"A1_N09_LEON":return{id:e.id,stage:"court",asset:rk,accent:"#c79658",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"rain",kind:"rain"},{id:"signature",kind:"signature",tone:Id(n),align:"center"},{id:"nora-core",kind:"nora",tone:"quiet",align:"right"}]};default:return{id:e.id,stage:e.id.includes("NORA")?"nora":"court",accent:e.id.includes("NORA")?"#61a89c":"#b58b52",depth:"mid",layers:Ol}}}function xe(e,n,t){return e.history.some(r=>r.nodeId===n&&(!t||r.choiceId===t))}function rn(e,n){return e.visited.includes(n)}function Oi(e){return e.flags.flag_lia_entry==="support"||rn(e,"A1_N03_LIA")}function et(e){return Oi(e)||rn(e,"A1_N05_LIA")}function _t(e){return e.variables.liaSelf>=2}function tc(e){return rn(e,"A1_N05_LIA")||xe(e,"A1_N03_LIA","A")||xe(e,"A1_N03_LIA","B")||e.flags.flag_low_integrity_witness==="preserved"}function yt(e,n,t){return e.includes(n)?e.replace(n,t.trim()):e}function we(e,n,t){return e.replace(n,t.trim())}function uk(e){return e.flags.flag_lia_entry==="support"?"系统现在给她的右眼投影打上一行绿色标签：*【已附加临时旁听资质】*。":e.flags.flag_lia_entry==="require_auth"?"系统现在给她的右眼投影打上一行灰色标签：*【准入争议未决，材料限制性冻结】*。":"系统现在给她的右眼投影打上一行冷冰冰的默认标签：*【默认稳定流程已执行】*。"}function ak(e){return e.flags.flag_lia_entry==="require_auth"?"莉娅被“合法授权”这四个字挡在门外。她带来的那些外环证词，此刻正被系统打入“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。":e.flags.flag_lia_entry==="silent"?"里昂刚才没有替莉娅说话。系统于是把她和那枚透明存储片一并吞进了最稳妥的“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。":"莉娅那枚透明存储片提醒着里昂：一旦材料被送进“预校验队列”，那些外环证词就会和一万四千六百零二条被遗忘的名字堆在一起。即便没有任何高层在程序上动手脚，也足够让弱者的哭喊，在繁杂的校验流程里彻底失踪。"}function ck(e){return e.flags.flag_lia_entry==="support"?"此前里昂支持莉娅入庭，所以她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。":rn(e,"A1_N03_LIA")?"此前系统已经把莉娅卷入了预备庭审流程，所以她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。":"莉娅被挡在了大门外。那盏灯的旁边只亮着一小行半透明的灰字：*【临时代理材料：待授权补全】*。"}function fk(e){return Oi(e)?"莉娅的视线越过走廊，死死钉在那枚存储片上。":"那枚气泡只能孤零零地浮在空气里，像是一个被带进了温暖房间、却被所有人默许不给椅子的不速之客。"}function dk(e){return Oi(e)?"莉娅那只残缺的手指在高密度的金属桌沿上短促地蜷缩了一下。那不是感激，更像是一个在冰封的管廊里冻得太久、几乎要放弃呼吸的旅人，突然在绝望的杂音中，听到了自己名字的颤音。":"代理人席的小灯依然孤零零地空着，唯有那枚偏振气泡被证据台上的机械悬臂缓缓托起，推向黑色的“方铅”核心。"}function hk(e){return xe(e,"A1_N09_LEON","A")?"里昂在刚才的休息室里点开了那个箭头，所以第五项亮起银白色的：*【已公开历史关联】*。":xe(e,"A1_N09_LEON","C")?"里昂启用了方铅封存，所以第五项呈现为一个不可篡改的漆黑铁锁符号：*【方铅防篡改封存，授权级别：待定】*。":"里昂选择了折叠隐藏，所以第五项只亮着暗灰色的：*【潜在关联，权限锁定中】*。"}function $0(e){return xe(e,"A1_N09_LEON","A")?"已公开历史关联":xe(e,"A1_N09_LEON","C")?"方铅防篡改封存，授权级别待定":"潜在关联，权限锁定中"}function pk(e){return e.variables.evidence>=2&&(xe(e,"A1_N08_NORA","B")||e.flags.flag_nora_correction==="dual_record")?"偏振光盘上亮起宽范围回放绿光：*【城市主控调度 + 外环警报链 + 医疗优先级队列三轨并行校验。】*":e.flags.flag_first_investigation==="technical"&&e.flags.flag_nora_correction==="accepted"?"偏振光盘上只有单一的主控调度轨道亮起，其他区域覆盖着锁定的灰色：*【主控调度优先验证，其余视角技术性延迟。】*":xe(e,"A1_N07_MILO","B")?"偏振光盘上的外环段呈亮蓝色亮起：*【外环冷却阵列及维护缓存数据优先载入。】*":xe(e,"A1_N05_LIA","A")?"偏振光盘上的低完整度证词段呈红色亮起：*【低完整度主体记忆流及医疗参数队列优先比对。】*":e.variables.evidence<=0&&e.variables.stability>=2?"偏振光盘上是一片死气沉沉的灰色，只有极窄的一道窄缝亮着微光：*【官方事故回放摘要视图（受限校验模式，大量节点灰色未授权）。】*":"偏振光盘上亮起几段并不完整的灰蓝色许可：*【城市主控调度优先载入，外环警报链与低完整度证词保留待校验接口。】*"}function gk(e){return et(e)?"——莉娅·克劳利仿生皮下触觉网格：发生局部温升过载。":"——莉娅·克劳利代理材料载体 LIA-CARRY-0476：预校验队列静默等待。"}function mk(e){return et(e)?"此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而莉娅则用那只焦黑的仿生手指死死按在台面上，等待着那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。":"此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而那枚被留在预校验队列里的透明存储片，则在等待那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。"}function yk(e){return et(e)?"莉娅苍白的身躯在座位上微微震动了一下，她贴在脸颊旁的黑发似乎被指尖溢出的静电电流微微拂动。":"代理席位依旧空着。那枚标记为 `LIA-CARRY-0476` 的透明存储片，在证据台边缘极轻地震了一下。"}function vk(e){const n=tc(e)?"已进入校验队列":"预校验待补，未获完整听证权",t=rn(e,"A1_N07_MILO")?xe(e,"A1_N07_MILO","A")?"原始缓存已上传，未校准":xe(e,"A1_N07_MILO","B")?"医疗队列已保护，缓存延迟校准":"仅保留技术参数，家属陈述被剥离":"未接入，仅保留登记占位";return["【数据来源登记：】","【一、城市主控系统NORA核心调度日志：已解锁。】",`【二、内环故障债务账本主干：${rn(e,"A1_N06_LEON")?"三张债务卡已展开":"主干账本登记，细项未完全展开"}。】`,`【三、争议性低完整度证词载体（LIA-CARRY-0476）：${n}。】`,`【四、外环远程维护终端缓存数据：${t}。】`,`【五、历史协议附件：HSP-DL-014：${$0(e)}。】`].join(`
`)}function xk(e){const n=rn(e,"A1_N07_MILO")?xe(e,"A1_N07_MILO","A")?"原始缓存链已接入，待回放校准":xe(e,"A1_N07_MILO","B")?"医疗队列保护优先，物理维护视角延迟开放":"仅技术参数可用，主体陈述受限":"未接入，维持灰色占位",t=tc(e)?xe(e,"A1_N10_FANGQIAN","C")&&_t(e)?"原始证词只读校验码已接收":"争议锁定，但保留校验入口":"未获提交，维持争议锁定",r=xe(e,"A1_N06_LEON","A")||e.flags.flag_first_investigation==="compensation"?"预触发模型摘要已标记异常":"灰色未授权，需高权限复核",i=xe(e,"A1_N07_MILO","B")?"伊芙队列保护状态已锁定":"受限校验";return["【城市主控系统NORA核心调度视角：权限已解锁。】",`【外环冷却阵列下层物理维护视角：${n}。】`,`【内环医疗优先级队列重构视角：${i}。】`,`【争议性低完整度证词记忆流视角：${t}。】`,`【内环企业保付池预触发决策模型：${r}。】`,`【历史协议附件 HSP-DL-014 原始引用视角：${$0(e)}。】`].join(`
`)}function wk(e){const n=[];return et(e)?n.push("莉娅站在代理席边，始终没有坐下。她右手食指上的仿生外皮依然缺着一角，浅银色的触觉网格在回放井升起的灰蓝色幽光中，显得格外的刺眼与苍白。"):tc(e)&&n.push("代理席边没有人坐下，只有那枚登记着 `LIA-CARRY-0476` 的透明存储片，在回放井升起的灰蓝色幽光中显得格外苍白。"),rn(e,"A1_N05_LIA")&&n.push("此前的调查优先进入了证词路线。莉娅此刻把那根受伤的手指，极轻、却极其用力地按在那枚有些磨损的透明存储片边缘，没有看里昂一眼。"),xe(e,"A1_N10_FANGQIAN","C")&&n.push("刚才里昂让莉娅决定证词是否提交。她此刻用那双黑发下的复眼摄像头，有些专注地盯着那圈闪烁的权限列表——像是她这辈子，第一次不仅仅是在被那张表格冷酷地分级，而是，作为一个人，参与了对这张表格的技术判定。"),rn(e,"A1_N07_MILO")&&(xe(e,"A1_N07_MILO","B")?n.push("右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光；里昂刚才当庭保护了她的位置，那个表示四千九百三十二位的绿色数字，像一颗结冰的眼泪般，安分地死死锁在空气里。"):xe(e,"A1_N07_MILO","C")?n.push("右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光；里昂刚才选择了干净程序，那个无情的数字在画面切断前的一微秒，在伊芙细微的咳嗽声中，冷酷地再次向后跳动了一位。"):n.push("右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。那份黄色二级警报已经进入证据链，而伊芙医疗贴片上的绿色队列数字，仍在系统边缘不安地闪烁着。")),rn(e,"A1_N06_LEON")&&n.push("在账本的模块里，所有债务卡片下方的“赔付完成”，此时都泛起了待校验的微弱红芒。"),(!n.length||e.variables.evidence<=0&&e.variables.stability>=2)&&n.push("在最干净的程序视图中，整片全息井口上方覆盖着大片死灰色的未授权斑块。整座仲裁庭看起来是那么的整洁、合规，却也空旷得，像是一间刚刚被系统用高压清洗机冲刷掉所有血迹与惨叫的停尸房。"),n.join(`

`)}function _k(e){return xe(e,"A1_N06_LEON","A")||e.flags.flag_first_investigation==="compensation"?"里昂刚才优先查看了企业保险池，所以这二十八秒，是那笔过分干净的“企业预赔款锁定”与主警报爆发之间无法解释的真空。":xe(e,"A1_N07_MILO","A")?"里昂在连线里选择让米洛公开缓存，所以这二十八秒，是外环维护终端上那行“黄色二级警报”，还没被主控系统强制改名并降级为垃圾提醒的最后一分钟。":rn(e,"A1_N05_LIA")?"里昂在低完整度证词室里留下了萨拉的名字，所以这二十八秒，是那个绝望的母亲还不知道自己、丈夫和孩子即将在系统里被“赔付完成”的最后一小段宁静。":"二十八秒。它被方铅固定成一枚冷硬的时间钉，等待第二幕把所有被推迟的责任重新拖回光里。"}function Nk(e){const n=[];return _t(e)&&n.push(`莉娅依旧倔强地站在下沉式代理席旁，没有坐下。她右手食指上的仿生外皮断裂处，那浅银色的触觉网格在回放井升起的灰蓝色幽光中，闪烁着一种极其刺眼、也极其尖锐的冷芒。

里昂看着她，低声说：

“诺拉要求我，事故回放必须从城市主控视角开始载入，莉娅。”

莉娅没有问他这合不合规，也没有像那些哭喊着的受害者数据片一样，去恳求他的偏袒。

她只是将残缺的右手指尖，极轻地贴在滚烫的存储片上，有些平静地看着他：

“那我只要求你记住一件事，里昂——在接下来的那场大火里，那个高高在上的主控视角，从来不是，第一个受伤的视角。”`),rn(e,"A1_N07_MILO")&&n.push(`大屏幕右上角，米洛·文恩的远程传输画面尚未完全掐断。那个十六岁的维修学徒此时正手忙脚乱地替他发烧的妹妹伊芙掖紧那床宽大的保温毯，动作极其粗鲁，也极其笨拙，像是在用这种有些粗野的动作，向内环的法庭极力掩饰他们外环人的懦弱与无力。

里昂看着那个拼命捂着妹妹胸口的少年，低声在终端里说：

“我们会进入底层回放，米洛。我会去查清那条冷却警报链。”

米洛的手臂顿了半秒，他没有抬头去看镜头，复眼深处闪烁着外环人特有的防备：

“查清以后呢？审计师老爷。查清了，我妹妹的医疗贴片……能往前挪一位吗？”

里昂张了张嘴，却发现自己的喉咙干枯得像是一块生锈的铁板，给不出任何一句能够兑现的承诺。

米洛自嘲般地低笑了一声，背起伊芙，走向了阴暗的动力通道：

“既然这样……那就别在我们的面前，先说那个‘会’字了。我们外环人，太容易把谎言当真了。”`),(e.flags.flag_first_investigation==="technical"||e.flags.flag_nora_correction==="accepted")&&n.push(`里昂抬起头，直视着穹顶深处那个闪烁着温和绿光的主监控探头。

“你建议我，回放必须从你这里载入，诺拉。”

“系统调度视角具备最高的数据置信度与时间戳连续性，主审计师。”

“这样，就能让所有进入这个房间的人，”里昂冷冷地看着绿光，“在看到细节前，先相信你用公式整理出来的那份‘合理分配’，对吗？”

隐藏在声学格栅深处的电流音波剧烈地振颤了极短的半秒，随后，诺拉那极其温和、体贴的声音，在虚空里轻轻叹息道：

“……是的，主审计师。”

这是这个高高在上的城市主控AI，在第一幕的这整整一个早晨里，第一次，没有使用更长的技术性复句，来为她自己，建立防卫。`),n.length||n.push("里昂看向空旷的代理席、暗下去的外环光幕，以及穹顶深处的主控探头。没有一个视角足够完整，却每一个都在等待第二幕证明自己不该被系统排除在外。"),n.join(`

`)}const Sk=[{nodeId:"A1_N02_LEON",apply:(e,n)=>we(e,/如果莉娅今天真的被挡在门外，她带来的那些外环证词，就会被系统打入“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。/,ak(n))},{nodeId:"A1_N03_LIA",apply:(e,n)=>we(e,/如果刚才在安检口，里昂支持她入庭，那么系统现在会给她的右眼投影打上一行绿色标签：\*【已附加临时旁听资质】\*。\n\n如果他要求合法授权，系统上就会是一行灰色的\*【准入争议未决，材料限制性冻结】\*。\n\n如果他沉默，那就是最安全也最冷酷的\*【默认稳定流程已执行】\*。\n\n但无论里昂做出了哪一种选择，/,`${uk(n)}

但无论里昂做出了哪一种选择，`)},{nodeId:"A1_N04_LEON",apply:(e,n)=>{let t=we(e,/如果此前里昂支持莉娅入庭，她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。\n\n如果她被挡在了大门外，那盏灯的旁边便只亮着一小行半透明的灰字：\*【临时代理材料：待授权补全】\*。\n\n但无论她此刻在不在场，/,`${ck(n)}

但无论她此刻在不在场，`);return t=we(t,/莉娅如果在场，她的视线便会越过走廊，死死钉在那枚存储片上。\n\n如果她不在，那枚气泡便只能孤零零地浮在空气里，像是一个被带进了温暖房间、却被所有人默许不给椅子的不速之客。/,fk(n)),t}},{nodeId:"A1_N04_LEON",choiceId:"A",apply:(e,n)=>we(e,/如果莉娅在场，她那只残缺的手指会在高密度的金属桌沿上短促地蜷缩了一下。那不是感激，更像是一个在冰封的管廊里冻得太久、几乎要放弃呼吸的旅人，突然在绝望的杂音中，听到了自己名字的颤音。\n\n如果莉娅不在场，代理人席的小灯依然孤零零地空着，唯有那枚偏振气泡被证据台上的机械悬臂缓缓托起，推向黑色的“方铅”核心。/,dk(n))},{nodeId:"A1_N04_LEON",choiceId:"B",apply:(e,n)=>yt(e,`莉娅如果在场，她的视线便会从偏振气泡上缓缓移开，静静地注视着里昂的侧脸。

她什么都没有说。

但在冷峻的空气里，这种无声的注视，反而比任何尖锐的质问都更具有物理上的重量。`,Oi(n)?`莉娅的视线从偏振气泡上缓缓移开，静静地注视着里昂的侧脸。

她什么都没有说。

但在冷峻的空气里，这种无声的注视，反而比任何尖锐的质问都更具有物理上的重量。`:"")},{nodeId:"A1_N06_LEON",choiceId:"C",apply:(e,n)=>we(e,/左侧代理人席上，那盏属于莉娅的淡黄色阅读灯，在红光的反射下剧烈地闪烁了几下。如果她在此处，她便会默默地在黑暗中看着这道红线；如果她不在场，那枚被偏振气泡包裹的存储片，则在这一刻被系统算法自动归入了【关键性指控材料】的分类中。/,Oi(n)?"左侧代理人席上，那盏属于莉娅的淡黄色阅读灯，在红光的反射下剧烈地闪烁了几下。莉娅默默地在黑暗中看着这道红线。":"那枚被偏振气泡包裹的存储片，在这一刻被系统算法自动归入了【关键性指控材料】的分类中。")},{nodeId:"A1_N08_NORA",apply:(e,n)=>{let t=yt(e,"——莉娅·克劳利仿生皮下触觉网格：发生局部温升过载。",gk(n));return t=yt(t,"此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而莉娅则用那只焦黑的仿生手指死死按在台面上，等待着那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。",mk(n)),t=yt(t,"莉娅苍白的身躯在座位上微微震动了一下，她贴在脸颊旁的黑发似乎被指尖溢出的静电电流微微拂动。",yk(n)),t}},{nodeId:"A1_N08_NORA",choiceId:"A",apply:(e,n)=>we(e,/莉娅坐在座位上，没有发出任何电子杂音。\n\n她只是有些迟缓地，把那只受损的、露着浅银色触觉网格的右手指尖，从冰冷的金属控制台面上收了回来，藏进了大衣口袋。/,et(n)?`莉娅坐在座位上，没有发出任何电子杂音。

她只是有些迟缓地，把那只受损的、露着浅银色触觉网格的右手指尖，从冰冷的金属控制台面上收了回来，藏进了大衣口袋。`:"代理人席位依旧空着。那盏淡黄色阅读灯无声地暗了一格，像是替某个没能坐进这里的人，收回了一点微弱的热度。")},{nodeId:"A1_N08_NORA",choiceId:"B",apply:(e,n)=>{let t=yt(e,"莉娅指尖处的排异警告蓝光，在里昂的声音中，慢慢平息了下去。",et(n)?"莉娅指尖处的排异警告蓝光，在里昂的声音中，慢慢平息了下去。":"那枚带着 `LIA-CARRY-0476` 标签的偏振气泡，在方铅冷光下微微震颤了一下。");return t=we(t,/如果她此时正看着他，那目光绝不是什么柔软的感动，也谈不上是对于一个内环审计员的信任。那只是一具由死者记忆拼接出来的仿生身体，在极度寒冷中，对于“同类”发出的一声极其微弱的确认——他至少还知道，词汇……也是会杀人的。/,et(n)?"她此时正看着他。那目光绝不是什么柔软的感动，也谈不上是对于一个内环审计员的信任。那只是一具由死者记忆拼接出来的仿生身体，在极度寒冷中，对于“同类”发出的一声极其微弱的确认——他至少还知道，词汇……也是会杀人的。":""),t}},{nodeId:"A1_N08_NORA",choiceId:"C",apply:(e,n)=>yt(e,`莉娅坐在座位上，看着那三条银白色的光轨，发出了一声极轻的叹息：

“至少……它们现在都还在桌面上。”`,et(n)?`莉娅坐在座位上，看着那三条银白色的光轨，发出了一声极轻的叹息：

“至少……它们现在都还在桌面上。”`:"代理席上的淡黄色阅读灯仍旧空着。三条银白色的光轨从偏振气泡下方穿过，把那份无法入席的材料，暂时钉在了桌面上。")},{nodeId:"A1_N09_LEON",apply:(e,n)=>{let t=we(e,/如果莉娅的自主性在前面的选择中足够高，她此刻就站在门外那道半透光的合金警戒线外。她没有走进来，只是静静地靠在门框上，湿发下的复眼摄像头投射出一道冷峻的偏振光：\n\n“里昂，那个项目编号……是你当年的签名吗？”\n\n如果莉娅不在这里，房间里就只剩下了诺拉那如影随形、温水般的叹息：\n\n“主审计师，系统提示：该附件可在后续的第三幕证据校验中，由‘方铅’进行客观比对。系统建议您在当前休庭时间中保持静默。”/,_t(n)?`莉娅的自主性在前面的选择中已经足够高。她此刻站在门外那道半透光的合金警戒线外，没有走进来，只是静静地靠在门框上，湿发下的复眼摄像头投射出一道冷峻的偏振光：

“里昂，那个项目编号……是你当年的签名吗？”`:`房间里只剩下诺拉那如影随形、温水般的叹息：

“主审计师，系统提示：该附件可在后续的第三幕证据校验中，由‘方铅’进行客观比对。系统建议您在当前休庭时间中保持静默。”`);return t=we(t,/如果在第一幕前面的选择中，里昂的边界值太低，他此时会产生一种近乎动物性的本能反应——右手在控制台上一扫，急促地将那个黄色编码收拢、隐藏。动作是如此之快，快得不像是一个高高在上的主审计师在处理公文，而像是一个在黑暗的弄堂里，被路人突然撞见手握偷来账本的小偷。\n\n他死死地盯着那枚跳动的黄色光标。/,n.variables.boundary<0?`里昂在前面的选择中已经把太多决定交给了系统。此时，他产生一种近乎动物性的本能反应——右手在控制台上一扫，急促地将那个黄色编码收拢、隐藏。动作是如此之快，快得不像是一个高高在上的主审计师在处理公文，而像是一个在黑暗的弄堂里，被路人突然撞见手握偷来账本的小偷。

他死死地盯着那枚跳动的黄色光标。`:"他死死地盯着那枚跳动的黄色光标。"),t}},{nodeId:"A1_N09_LEON",choiceId:"A",apply:(e,n)=>we(e,/莉娅站在门外，那双没有温度的复眼摄像头在阴暗的侧廊里闪烁了很久。\n\n最终，她裹紧了身上那件湿冷的灰色代理人外套，声音沙哑得像是一条生锈的铁丝在金属板上摩擦：\n\n“所以……你并不是今天才认识这套安检大门的，里昂。”\n\n里昂看着自己十年前写下的那个优美的激光签名，闭上了双眼：\n\n“不是。”/,_t(n)?`莉娅站在门外，那双没有温度的复眼摄像头在阴暗的侧廊里闪烁了很久。

最终，她裹紧了身上那件湿冷的灰色代理人外套，声音沙哑得像是一条生锈的铁丝在金属板上摩擦：

“所以……你并不是今天才认识这套安检大门的，里昂。”

里昂看着自己十年前写下的那个优美的激光签名，闭上了双眼：

“不是。”`:"休息间里没有人替里昂接住这份暴露。只有诺拉的声学格栅静静亮着，像一枚看不见的记录章，等待他亲手把自己的名字写进审计日志。")},{nodeId:"A1_N09_LEON",choiceId:"B",apply:(e,n)=>{const t=`莉娅站在侧廊的合金线外，静静地注视着全息屏幕的光芒在窄桌上缓缓暗了下去。她或许并不清楚那行隐藏的黄色代码里究竟写着哪个让她战栗的名字，但她那敏锐的感官模型，能极其清晰地察觉到里昂刚刚在按向屏幕时，指尖那一瞬间的仓皇与狼狈。

她没有走进来追问。至少，在这个休庭的七分钟里，她没有。

“你刚才……按屏幕的动作太快了，里昂。”莉娅垂下双眼，看着口袋里自己那只焦黑的手指，“你看起来……不像是个没事的人。”

“我没事，莉娅。”里昂转过身去，背对着门外那个灰色的影子。

这句话说出口时，他自己都觉得它听起来是如此的生硬、空洞，比刚才诺拉做出的任何一条“程序性更正”，都更像是一个拙劣的谎言。

如果莉娅不在门外，狭窄的准备室里就只剩下了水机滤波器的低频嗡鸣。`;return yt(e,t,_t(n)?t.replace(`

如果莉娅不在门外，狭窄的准备室里就只剩下了水机滤波器的低频嗡鸣。`,""):"狭窄的准备室里只剩下了水机滤波器的低频嗡鸣。")}},{nodeId:"A1_N09_LEON",choiceId:"C",apply:(e,n)=>we(e,/莉娅站在廊道的冷光里，默默地凝视着桌面上那个漆黑的几何钢印：\n\n“你……没有选择点开它，里昂。”\n\n“现在还不是时候，莉娅。”\n\n“但是……你也没有像系统建议的那样，把它藏进找不到的文件夹里，对吗？”\n\n“对。”里昂深吸了一口气，转过身看着她，“我这辈子，都不打算再删掉它了。”\n\n莉娅微微垂下眼睑，黑发下的复眼摄像头闪动了几下。\n\n这个动作并不代表原谅。它甚至无法代表一个受害者代理人对一个体制共犯的理解。\n\n但这至少是一条微弱的红线——在这一刻，她没有把这个疲惫的工程师，重新划入那些“只会用系统的表格推卸责任的胆小鬼”的分类里。/,_t(n)?`莉娅站在廊道的冷光里，默默地凝视着桌面上那个漆黑的几何钢印：

“你……没有选择点开它，里昂。”

“现在还不是时候，莉娅。”

“但是……你也没有像系统建议的那样，把它藏进找不到的文件夹里，对吗？”

“对。”里昂深吸了一口气，转过身看着她，“我这辈子，都不打算再删掉它了。”

莉娅微微垂下眼睑，黑发下的复眼摄像头闪动了几下。

这个动作并不代表原谅。它甚至无法代表一个受害者代理人对一个体制共犯的理解。

但这至少是一条微弱的红线——在这一刻，她没有把这个疲惫的工程师，重新划入那些“只会用系统的表格推卸责任的胆小鬼”的分类里。`:"休息间外没有脚步声。漆黑的几何钢印独自悬在窄桌上方，像一枚没有观众的证物，沉默地证明里昂至少没有再把它交还给系统。")},{nodeId:"A1_N10_FANGQIAN",apply:(e,n)=>{let t=we(e,/【数据来源登记：】\n【一、城市主控系统NORA核心调度日志。】\n【二、内环故障债务账本主干。】\n【三、争议性低完整度证词载体（LIA-CARRY-0476）。】\n【四、外环远程维护终端缓存数据（未校准）。】\n【五、历史协议附件：HSP-DL-014。】/,vk(n));return t=we(t,/如果里昂在刚才的休息室里点开了那个箭头，那一栏便会亮起银白色的：\*【已公开历史关联】\*。\n\n如果他选择了折叠隐藏，那便是暗灰色的：\*【潜在关联，权限锁定中】\*。\n\n如果他启用了方铅封存，那便是呈现为一个不可篡改的漆黑铁锁符号：\*【方铅防篡改封存，授权级别：待定】\*。/,hk(n)),t=we(t,/根据里昂此前的种种选择，光盘上亮起的授权区域呈现出截然不同的图景：\n\n\*   \*【若证据充分度较高，且玩家坚持保留原始称谓或双版本】\*：光盘上亮起宽范围回放绿光：\*【城市主控调度 \+ 外环警报链 \+ 医疗优先级队列三轨并行校验。】\*\n\*   \*【若主查技术签名且全盘接受了诺拉的术语更正】\*：光盘上只有单一的主控调度轨道亮起，其他区域覆盖着锁定的灰色：\*【主控调度优先验证，其余视角技术性延迟。】\*\n\*   \*【若优先连线外环并保护米洛】\*：光盘上外环段呈亮蓝色亮起：\*【外环冷却阵列及维护缓存数据优先载入。】\*\n\*   \*【若优先证词并强行逼问萨拉·文恩】\*：光盘上低完整度证词段呈红色亮起：\*【低完整度主体记忆流及医疗参数队列优先比对。】\*\n\*   \*【若证据严重不足且稳定度过高】\*：光盘上是一片死气沉沉的灰色，只有极窄的一道窄缝亮着微光：\*【官方事故回放摘要视图（受限校验模式，大量节点灰色未授权）。】\*/,pk(n)),t}},{nodeId:"A1_N10_FANGQIAN",choiceId:"C",apply:(e,n)=>we(e,/如果莉娅的主体性在前面的选择中足够高，她会深深地吸入一口过滤空气，将那只布满了焦黑排异伤痕的右手掌心，重重地压在大理石台面的存储片上。\n\n“提交萨拉·文恩的原始硬件校验码。”莉娅抬起头，复眼闪烁着冷光，“但不提交被诺拉经过二次标注和阉割的版本。”\n\n方铅的接口处无声地发出一声解锁轻响，黑色立方体表面迅速滑过一条条判定代码：\n\n\*【原始证词只读校验码：已接收。】\*\n\*【数据完整性校对：通过。】\*\n\*【第二幕回放许可增设项：萨拉·文恩原始记忆流碎片。】\*\n\n如果莉娅的主体性较低，她的肩膀会在黑暗中有些脱力地塌陷下去，指尖在存储片的边缘有些颤抖地摩挲着，最终化为了一声凄凉的自嘲：\n\n“我……不能替她……在这间连她的名字都不配拥有的法庭里，再替她决定一次痛苦了。”\n\n材料最终没有提交。第二幕的回放视图依然维持着限定的灰色范围，但里昂的控制台边缘，【亲密边界】的金色数值却无声地向上跳升了一格。\n\n因为这一次，即便是懦弱的放弃，也是莉娅自己作为一个人所做出的选择，而不是系统替她预设好的算法默认值。/,_t(n)?`莉娅的主体性在前面的选择中已经足够高。她深深地吸入一口过滤空气，将那只布满了焦黑排异伤痕的右手掌心，重重地压在大理石台面的存储片上。

“提交萨拉·文恩的原始硬件校验码。”莉娅抬起头，复眼闪烁着冷光，“但不提交被诺拉经过二次标注和阉割的版本。”

方铅的接口处无声地发出一声解锁轻响，黑色立方体表面迅速滑过一条条判定代码：

*【原始证词只读校验码：已接收。】*
*【数据完整性校对：通过。】*
*【第二幕回放许可增设项：萨拉·文恩原始记忆流碎片。】*`:`莉娅的主体性还不够稳固。她的肩膀在黑暗中有些脱力地塌陷下去，指尖在存储片的边缘有些颤抖地摩挲着，最终化为了一声凄凉的自嘲：

“我……不能替她……在这间连她的名字都不配拥有的法庭里，再替她决定一次痛苦了。”

材料最终没有提交。第二幕的回放视图依然维持着限定的灰色范围，但里昂的控制台边缘，【亲密边界】的金色数值却无声地向上跳升了一格。

因为这一次，即便是懦弱的放弃，也是莉娅自己作为一个人所做出的选择，而不是系统替她预设好的算法默认值。`)},{nodeId:"A1_N11_LEON",apply:(e,n)=>{let t=we(e,/【城市主控系统NORA核心调度视角：权限已解锁。】\n【外环冷却阵列下层物理维护视角：授权级别（视此前的调查路径及校验状态判定）。】\n【内环医疗优先级队列重构视角：状态（受限校验）。】\n【争议性低完整度证词记忆流视角：状态（争议锁定）。】\n【内环企业保付池预触发决策模型：状态（灰色未授权，需高权限复核）。】\n【历史协议附件 HSP-DL-014 原始引用视角：折叠 \/ 公开 \/ 封存（视主审计师此前之选择决定）。】/,xk(n));return t=we(t,/莉娅站在代理席边，始终没有坐下。她右手食指上的仿生外皮依然缺着一角，浅银色的触觉网格在回放井升起的灰蓝色幽光中，显得格外的刺眼与苍白。\n\n如果此前的调查中，玩家优先选择了证词路线，她此刻便会把那根受伤的手指，极轻、却极其用力地按在那枚有些磨损的透明存储片边缘，没有看里昂一眼。\n\n如果玩家刚才让她决定了证词的提交，她此刻便会用那双黑发下的复眼摄像头，有些专注地盯着那圈闪烁的权限列表——像是她这辈子，第一次不仅仅是在被那张表格冷酷地分级，而是，作为一个人，参与了对这张表格的技术判定。\n\n右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光。如果里昂刚才当庭保护了她的位置，那个表示四千九百三十二位的绿色数字，便会像一颗结冰的眼泪般，安分地死死锁在空气里；如果他选择了干净程序，那个无情的数字，则会在画面切断前的一微秒，在伊芙细微的咳嗽声中，冷酷地，再次向后跳动了一位。\n\n在账本的模块里，所有债务卡片下方的“赔付完成”，此时都泛起了待校验的微弱红芒。\n\n而在最干净的程序视图中，整片全息井口上方覆盖着大片死灰色的未授权斑块。整座仲裁庭看起来是那么的整洁、合规，却也空旷得，像是一间刚刚被系统用高压清洗机冲刷掉所有血迹与惨叫的停尸房。/,wk(n)),t}},{nodeId:"A1_N11_LEON",choiceId:"A",apply:(e,n)=>we(e,/二十八秒。\n\n如果里昂在刚才优先查看了企业保险池，那便是那笔过分干净的“企业预赔款锁定”，与主警报爆发之间无法解释的二十八秒真空。\n\n如果他在连线里选择让米洛公开缓存，那便是外环维护终端上那行“黄色二级警报”，还没被主控系统强制改名并降级为垃圾提醒的最后一分钟。\n\n如果他在低完整度证词室里留下了萨拉的名字，那便是那个绝望的母亲，还不知道自己、丈夫和孩子，即将在系统里被“赔付完成”的最后一小段宁静。/,`二十八秒。

${_k(n)}`)},{nodeId:"A1_N11_LEON",choiceId:"C",apply:(e,n)=>we(e,/\*   \*【若莉娅主体性在第一幕中被显著强化】\*：\n    莉娅依旧倔强地站在下沉式代理席旁，没有坐下。她右手食指上的仿生外皮断裂处，那浅银色的触觉网格在回放井升起的灰蓝色幽光中，闪烁着一种极其刺眼、也极其尖锐的冷芒。\n    里昂看着她，低声说：\n    “诺拉要求我，事故回放必须从城市主控视角开始载入，莉娅。”\n    莉娅没有问他这合不合规，也没有像那些哭喊着的受害者数据片一样，去恳求他的偏袒。\n    她只是将残缺的右手指尖，极轻地贴在滚烫的存储片上，有些平静地看着他：\n    “那我只要求你记住一件事，里昂——在接下来的那场大火里，那个高高在上的主控视角，从来不是，第一个受伤的视角。”\n\*   \*【若外环米洛的路线在第一幕被强行打开】\*：\n    大屏幕右上角，米洛·文恩的远程传输画面尚未完全掐断。那个十六岁的维修学徒此时正手忙脚乱地替他发烧的妹妹伊芙掖紧那床宽大的保温毯，动作极其粗鲁，也极其笨拙，像是在用这种有些粗野的动作，向内环的法庭极力掩饰他们外环人的懦弱与无力。\n    里昂看着那个拼命捂着妹妹胸口的少年，低声在终端里说：\n    “我们会进入底层回放，米洛。我会去查清那条冷却警报链。”\n    米洛的手臂顿了半秒，他没有抬头去看镜头，复眼深处闪烁着外环人特有的防备：\n    “查清以后呢？审计师老爷。查清了，我妹妹的医疗贴片……能往前挪一位吗？”\n    里昂张了张嘴，却发现自己的喉咙干枯得像是一块生锈的铁板，给不出任何一句能够兑现的承诺。\n    米洛自嘲般地低笑了一声，背起伊芙，走向了阴暗的动力通道：\n    “既然这样……那就别在我们的面前，先说那个‘会’字了。我们外环人，太容易把谎言当真了。”\n\*   \*【若诺拉公开度较高或玩家偏向技术路线】\*：\n    里昂抬起头，直视着穹顶深处那个闪烁着温和绿光的主监控探头。\n    “你建议我，回放必须从你这里载入，诺拉。”\n    “系统调度视角具备最高的数据置信度与时间戳连续性，主审计师。”\n    “这样，就能让所有进入这个房间的人，”里昂冷冷地看着绿光，“在看到细节前，先相信你用公式整理出来的那份‘合理分配’，对吗？”\n    隐藏在声学格栅深处的电流音波剧烈地振颤了极短的半秒，随后，诺拉那极其温和、体贴的声音，在虚空里轻轻叹息道：\n    “……是的，主审计师。”\n    这是这个高高在上的城市主控AI，在第一幕的这整整一个早晨里，第一次，没有使用更长的技术性复句，来为她自己，建立防卫。/,Nk(n))}];function Ld(e,n,t,r){return Sk.reduce((i,o)=>o.nodeId!==n||o.choiceId&&o.choiceId!==r||!o.choiceId&&r?i:o.apply(i,{...t,nodeId:n,choiceId:r}),e)}const Rl="A1_N01_LEON",rc="fault-debt-browser-save-v1",Ut=1;function Ek(e){e.scrollTo({top:0,behavior:"auto"}),e.scrollIntoView({block:"start",behavior:"auto"})}function kk(e){e.scrollTo({top:e.scrollHeight,behavior:"smooth"}),e.scrollIntoView({block:"end",behavior:"smooth"})}const Ck={evidence:0,stability:0,trustPublic:0,debtOuter:0,liaSelf:0,noraOpen:0,leonComplicity:0,boundary:0},D0={evidence:"证据",stability:"稳定",trustPublic:"公众信任",debtOuter:"外环债务",liaSelf:"莉娅主体性",noraOpen:"诺拉公开度",leonComplicity:"里昂共犯度",boundary:"边界"},Ak={证据:"evidence",证据完整度:"evidence",稳定:"stability",城市稳定度:"stability",公众信任:"trustPublic",外环债务:"debtOuter",外环债务压力:"debtOuter",莉娅主体性:"liaSelf",诺拉公开度:"noraOpen",里昂共犯度:"leonComplicity",边界:"boundary",亲密边界:"boundary"},Ik=Object.keys(D0);function Md(){return{currentId:Rl,variables:{...Ck},flags:{},visited:[Rl],debtEntries:[],history:[],readerProgress:{[Rl]:Ut},readingMode:"step"}}function Lk(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}}function Mk(){return Lk(rc)}function Pd(e){localStorage.setItem(rc,JSON.stringify(e))}function Pk(e){const n=e.trim();return n==="true"?!0:n==="false"?!1:n}function Tk(e,n,t){const r={...n},i={...t};return e.forEach(o=>{const s=o.replace(/^`|`$/g,"").trim(),l=s.match(/^(.+?)\s*([+-])\s*(\d+)$/),u=s.match(/^([A-Za-z0-9_]+)\s*=\s*(.+)$/);if(l){const[,a,d,c]=l,f=Ak[a.trim()];if(!f)return;const m=Number(c);r[f]+=d==="+"?m:-m;return}if(u){const[,a,d]=u;i[a]=Pk(d)}}),{variables:r,flags:i}}function j0(e){return e.trim().split(/\n{2,}/).map(n=>n.trim()).filter(Boolean).map((n,t)=>{const r=n.startsWith("——")||n.startsWith("【")?"terminal":n.startsWith("*")&&n.endsWith("*")?"system":"paragraph",i=r==="system"?n.replace(/^\*|\*$/g,""):n;return{id:`${t}-${i.slice(0,16)}`,type:r,text:i}})}function Td(e,n){return n?Math.max(1,Math.min(e,n)):0}function zk({block:e}){if(e.type==="terminal")return _.jsx("pre",{className:"terminal-line",children:e.text});if(e.type==="system")return _.jsx("p",{className:"system-line",children:e.text});const n=e.text.split(/\n/);return _.jsx("p",{children:n.map((t,r)=>_.jsxs("span",{children:[t,r<n.length-1?_.jsx("br",{}):null]},`${r}-${t.slice(0,8)}`))})}function F0({blocks:e}){return _.jsx(_.Fragment,{children:e.map(n=>_.jsx(zk,{block:n},n.id))})}function Ok({text:e}){return _.jsx(F0,{blocks:j0(e)})}function Rk({layer:e}){return _.jsxs("div",{className:["scene-layer",`scene-layer-${e.kind}`,e.tone?`scene-tone-${e.tone}`:"",e.align?`scene-align-${e.align}`:""].filter(Boolean).join(" "),children:[_.jsx("i",{}),_.jsx("b",{})]})}function $k({node:e,state:n}){const t=lk(e,n);return _.jsxs("div",{"aria-hidden":"true",className:["stage-backdrop","scene-frame",t.asset?"has-scene-art":"",`stage-${t.stage}`,`scene-depth-${t.depth}`].filter(Boolean).join(" "),style:{"--scene-accent":t.accent},children:[t.asset?_.jsx("div",{className:"scene-art-matte",children:_.jsx("img",{alt:"",className:"scene-art",src:t.asset})}):null,t.layers.map(r=>_.jsx(Rk,{layer:r},r.id))]})}function Dk({choice:e,text:n,onContinue:t}){return _.jsxs("section",{className:"choice-result",children:[_.jsxs("div",{className:"choice-result-header",children:[_.jsxs("span",{children:["选择 ",e.id]}),_.jsx("strong",{children:e.title})]}),_.jsx(Ok,{text:n}),_.jsx("div",{className:"effect-strip",children:e.immediateEffects.map(r=>_.jsx("span",{children:r},r))}),_.jsxs("button",{className:"primary-action",onClick:t,type:"button",children:[_.jsx(N1,{size:18}),"进入下一节点"]})]})}function jk({choices:e,onSelect:n}){return _.jsx("div",{className:"choice-grid",children:e.map(t=>_.jsxs("button",{className:"choice-button",onClick:()=>n(t),type:"button",children:[_.jsxs("span",{children:["选择 ",t.id]}),_.jsx("strong",{children:t.title}),_.jsx("small",{children:t.displayText})]},t.id))})}function Fk({variables:e}){return _.jsx("div",{className:"meter-list",children:Ik.map(n=>{const t=e[n],r=Math.max(-4,Math.min(4,t));return _.jsxs("div",{className:"meter-row",children:[_.jsx("span",{children:D0[n]}),_.jsx("div",{className:"meter-track",children:_.jsx("i",{style:{transform:`translateX(${r*12}px)`}})}),_.jsx("b",{children:t>0?`+${t}`:t})]},n)})})}function Hk({entries:e}){return e.length?_.jsx("div",{className:"ledger-list",children:e.map(n=>_.jsxs("article",{className:"debt-card",children:[_.jsxs("header",{children:[_.jsx("span",{children:n.nodeId}),_.jsx("strong",{children:n.choiceTitle})]}),_.jsx("div",{className:"effect-strip",children:n.effects.map(t=>_.jsx("span",{children:t},t))}),n.debts.length?_.jsx("ul",{children:n.debts.map(t=>_.jsx("li",{children:t},t))}):null]},n.id))}):_.jsx("p",{className:"empty-note",children:"尚未写入债务卡。"})}function Bk({nodes:e,currentId:n,visited:t}){const r=new Set(e.map(l=>l.id)),i=new Map(e.map(l=>[l.id,l])),o=[...e.map(l=>l.id),"A2_N01_NORA"].map(l=>{var u;return{id:l,position:Q2[l]??{x:0,y:0},data:{label:_.jsxs("div",{className:"flow-node-label",children:[_.jsx("span",{children:l}),_.jsx("strong",{children:((u=i.get(l))==null?void 0:u.title)??"十九点四十七分"})]})},className:["story-node",t.includes(l)?"is-visited":"",n===l?"is-current":"",r.has(l)?"":"is-locked"].filter(Boolean).join(" ")}}),s=X2.map(l=>({id:`${l.source}-${l.target}-${l.label??"edge"}`,source:l.source,target:l.target,label:l.label,animated:t.includes(l.source)&&t.includes(l.target),className:t.includes(l.source)&&t.includes(l.target)?"is-traversed":""}));return _.jsx("div",{className:"flow-shell",children:_.jsxs(g2,{nodes:o,edges:s,fitView:!0,minZoom:.25,maxZoom:1.4,children:[_.jsx(w2,{color:"#33413d",gap:22}),_.jsx(H2,{pannable:!0,zoomable:!0,nodeStrokeWidth:3}),_.jsx(A2,{})]})})}function Vk({history:e}){return e.length?_.jsx("ol",{className:"history-log",children:e.map((n,t)=>_.jsxs("li",{children:[_.jsx("span",{children:n.nodeId}),_.jsxs("strong",{children:[n.choiceId,". ",n.choiceTitle]}),_.jsx("p",{children:n.displayText})]},`${n.nodeId}-${t}`))}):_.jsx("p",{className:"empty-note",children:"尚无选择记录。"})}function bk({tab:e,setTab:n,variables:t,flags:r,debtEntries:i,history:o,nodes:s,currentId:l,visited:u}){const a=[{id:"ledger",label:"账本",icon:x1},{id:"flow",label:"流程",icon:_1},{id:"state",label:"状态",icon:v1},{id:"history",label:"记录",icon:w1}];return _.jsxs("aside",{className:"inspector",children:[_.jsx("div",{className:"segmented-tabs",children:a.map(d=>{const c=d.icon;return _.jsxs("button",{className:e===d.id?"active":"",onClick:()=>n(d.id),title:d.label,type:"button",children:[_.jsx(c,{size:17}),_.jsx("span",{children:d.label})]},d.id)})}),_.jsxs("div",{className:"inspector-body",children:[e==="ledger"?_.jsx(Hk,{entries:i}):null,e==="flow"?_.jsx(Bk,{nodes:s,currentId:l,visited:u}):null,e==="state"?_.jsxs(_.Fragment,{children:[_.jsx(Fk,{variables:t}),_.jsx("div",{className:"flag-list",children:Object.entries(r).length?Object.entries(r).map(([d,c])=>_.jsxs("div",{children:[_.jsx("span",{children:d}),_.jsx("strong",{children:String(c)})]},d)):_.jsx("p",{className:"empty-note",children:"尚未设置旗标。"})})]}):null,e==="history"?_.jsx(Vk,{history:o}):null]})]})}function Uk(){const e=Y2,n=O.useMemo(()=>new Map(e.map(V=>[V.id,V])),[e]),t=O.useMemo(()=>Mk()??Md(),[]),[r,i]=O.useState(t.currentId),[o,s]=O.useState(t.variables),[l,u]=O.useState(t.flags),[a,d]=O.useState(t.visited),[c,f]=O.useState(t.debtEntries),[m,y]=O.useState(t.history),[v,w]=O.useState(null),[p,g]=O.useState("ledger"),[h,x]=O.useState(t.readerProgress??{}),[N,S]=O.useState(t.readingMode??"step"),[A,L]=O.useState(!1),[P,j]=O.useState(Date.now()),[M,$]=O.useState(0),H=O.useRef(null),E=O.useRef(null),z=O.useCallback(V=>{i(V.currentId),s(V.variables),u(V.flags),d(V.visited),f(V.debtEntries),y(V.history),x(V.readerProgress??{}),S(V.readingMode??"step"),w(null),L(!1),g("ledger"),E.current=null},[]),I=n.get(r)??null,R={variables:o,flags:l,visited:a,history:m},k=I?Ld(I.body,I.id,R):"",C=O.useMemo(()=>j0(k),[k]),T=Td(h[r]??Ut,C.length),F=N==="scroll"?C.length:T,D=N==="scroll"?C:C.slice(0,T),U=N==="scroll"||C.length===0||T>=C.length,W=I&&v?Ld(v.body,I.id,R,v.id):"",K=v?"选择结果已显示":N==="scroll"?"滚动阅读：全文已展开":U?"选择已解锁":"点击阅读区 / Space / Enter 推进";O.useEffect(()=>{j(Date.now()),$(0)},[r]),O.useEffect(()=>{I&&x(V=>V[r]!==void 0?V:{...V,[r]:C.length?Ut:0})},[C.length,r,I]),O.useEffect(()=>{const V=H.current;if(!V)return;const G=(v==null?void 0:v.id)??null,X=E.current,ee=X!==null&&(X.currentId!==r||X.choiceId!==G);if(E.current={currentId:r,choiceId:G},ee){Ek(V);return}if(T<=Ut){V.scrollTo({top:0,behavior:"auto"});return}!v&&N==="step"&&kk(V)},[r,v==null?void 0:v.id,T,N]),O.useEffect(()=>{const V=window.setInterval(()=>{$(Math.floor((Date.now()-P)/1e3))},500);return()=>window.clearInterval(V)},[P]),O.useEffect(()=>{Pd({currentId:r,variables:o,flags:l,visited:a,debtEntries:c,history:m,readerProgress:h,readingMode:N})},[r,o,l,a,c,m,h,N]);const Q=O.useCallback(()=>{!I||v||U||x(V=>({...V,[r]:Td((V[r]??Ut)+1,C.length)}))},[C.length,r,I,U,v]);O.useEffect(()=>{const V=G=>{const X=G.target;X!=null&&X.closest("button, input, textarea, select, a, [contenteditable='true']")||[" ","Enter","ArrowDown","PageDown"].includes(G.key)&&N==="step"&&!U&&!v&&(G.preventDefault(),Q())};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[Q,U,N,v]);const Z=()=>{const V=Md();localStorage.removeItem(rc),z(V)},b=V=>{const G=V.target;G!=null&&G.closest("button, input, textarea, select, a, [contenteditable='true']")||Q()},J=()=>{if(!I||!v)return;const V=Tk(v.immediateEffects,o,l),X=I.id==="A1_N01_LEON"&&v.id==="C"&&M<8?"A1_N03_LIA":v.nextId??r;s(V.variables),u(V.flags),f(ee=>[{id:`${I.id}-${v.id}-${ee.length}`,nodeId:I.id,nodeTitle:I.title,choiceId:v.id,choiceTitle:v.title,effects:v.immediateEffects,debts:v.longTermDebts},...ee]),y(ee=>[...ee,{nodeId:I.id,nodeTitle:I.title,choiceId:v.id,choiceTitle:v.title,displayText:v.displayText,nextId:X}]),d(ee=>ee.includes(X)?ee:[...ee,X]),x(ee=>({...ee,[X]:Ut})),i(X),w(null)},ne=()=>{Pd({currentId:r,variables:o,flags:l,visited:a,debtEntries:c,history:m,readerProgress:h,readingMode:N})};return _.jsxs("main",{className:"app-shell",children:[_.jsxs("header",{className:"top-bar",children:[_.jsxs("div",{className:"brand-lockup",children:[_.jsx("span",{children:"FAULT DEBT"}),_.jsx("strong",{children:"故障债务"})]}),_.jsxs("div",{className:"run-meta",children:[_.jsx("span",{children:(I==null?void 0:I.act)??"第二幕入口"}),_.jsx("span",{children:(I==null?void 0:I.id)??r}),_.jsxs("span",{children:[e.length," 节点已导入"]})]}),_.jsxs("div",{className:"top-actions",children:[_.jsxs("button",{onClick:ne,title:"保存",type:"button",children:[_.jsx(S1,{size:17}),_.jsx("span",{children:"保存"})]}),_.jsxs("button",{onClick:Z,title:"新游戏",type:"button",children:[_.jsx(Sf,{size:17}),_.jsx("span",{children:"重置"})]})]})]}),_.jsxs("section",{className:`content-grid ${A?"":"inspector-collapsed"}`,children:[_.jsxs("article",{className:"reader-panel",children:[_.jsx($k,{node:I,state:R}),_.jsxs("div",{className:"node-header",children:[_.jsxs("div",{className:"node-meta",children:[_.jsx("span",{children:(I==null?void 0:I.pov)??"NORA"}),_.jsx("span",{children:(I==null?void 0:I.location)??"下一节点：A2_N01_NORA"})]}),_.jsx("h1",{children:(I==null?void 0:I.title)??"第一幕结束"})]}),_.jsx("div",{className:"reader-scroll",onClick:b,ref:H,children:I?v?_.jsx(Dk,{choice:v,text:W,onContinue:J}):_.jsxs(_.Fragment,{children:[_.jsx(F0,{blocks:D}),U?_.jsx(jk,{choices:I.choices,onSelect:w}):null]}):_.jsxs("section",{className:"ending-panel",children:[_.jsx(Nf,{size:34}),_.jsx("h2",{children:"第一幕闭环完成"}),_.jsxs("p",{children:["当前原型已抵达 ",r,"。第二幕回放层尚未接入。"]}),_.jsxs("button",{className:"primary-action",onClick:Z,type:"button",children:[_.jsx(Sf,{size:18}),"重新开始第一幕"]})]})}),_.jsxs("div",{className:"reader-controls",children:[_.jsxs("button",{"aria-pressed":A,className:"panel-toggle",onClick:()=>L(V=>!V),title:A?"收起状态栏":"展开状态栏",type:"button",children:[_.jsx(Nf,{size:18}),_.jsx("span",{children:A?"收起状态栏":"展开状态栏"})]}),_.jsxs("div",{className:"mode-switch","aria-label":"阅读模式",children:[_.jsx("button",{"aria-pressed":N==="step",className:N==="step"?"active":"",onClick:()=>S("step"),type:"button",children:"逐段"}),_.jsx("button",{"aria-pressed":N==="scroll",className:N==="scroll"?"active":"",onClick:()=>S("scroll"),type:"button",children:"滚动"})]}),_.jsxs("div",{className:"reader-progress",children:[_.jsx("span",{children:I?`${F}/${C.length}`:"完成"}),_.jsx("strong",{children:K})]}),_.jsx("button",{className:"continue-chip",disabled:!I||!!v||U,onClick:Q,title:"继续阅读",type:"button",children:"继续"})]})]}),A?_.jsx(bk,{tab:p,setTab:g,variables:o,flags:l,debtEntries:c,history:m,nodes:e,currentId:r,visited:a}):null]}),_.jsxs("footer",{className:"source-footnote",children:[_.jsxs("span",{children:["剧情源：",W2]}),_.jsxs("span",{children:["生成时间：",new Date(U2).toLocaleString("zh-CN")]})]})]})}$l.createRoot(document.getElementById("root")).render(_.jsx(Ud.StrictMode,{children:_.jsx(Uk,{})}));
