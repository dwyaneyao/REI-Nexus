(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function ph(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gh={exports:{}},Ws={},mh={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),ny=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),iy=Symbol.for("react.profiler"),oy=Symbol.for("react.provider"),sy=Symbol.for("react.context"),ly=Symbol.for("react.forward_ref"),ay=Symbol.for("react.suspense"),uy=Symbol.for("react.memo"),cy=Symbol.for("react.lazy"),Wc=Symbol.iterator;function fy(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var yh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vh=Object.assign,xh={};function Kr(e,n,t){this.props=e,this.context=n,this.refs=xh,this.updater=t||yh}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function wh(){}wh.prototype=Kr.prototype;function Eu(e,n,t){this.props=e,this.context=n,this.refs=xh,this.updater=t||yh}var ku=Eu.prototype=new wh;ku.constructor=Eu;vh(ku,Kr.prototype);ku.isPureReactComponent=!0;var Yc=Array.isArray,_h=Object.prototype.hasOwnProperty,Cu={current:null},Nh={key:!0,ref:!0,__self:!0,__source:!0};function Sh(e,n,t){var r,i={},o=null,s=null;if(n!=null)for(r in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=""+n.key),n)_h.call(n,r)&&!Nh.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:eo,type:e,key:o,ref:s,props:i,_owner:Cu.current}}function dy(e,n){return{$$typeof:eo,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Au(e){return typeof e=="object"&&e!==null&&e.$$typeof===eo}function hy(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Xc=/\/+/g;function Ml(e,n){return typeof e=="object"&&e!==null&&e.key!=null?hy(""+e.key):n.toString(36)}function Wo(e,n,t,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case eo:case ny:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Ml(s,0):r,Yc(i)?(t="",e!=null&&(t=e.replace(Xc,"$&/")+"/"),Wo(i,n,t,"",function(u){return u})):i!=null&&(Au(i)&&(i=dy(i,t+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Xc,"$&/")+"/")+e)),n.push(i)),1;if(s=0,r=r===""?".":r+":",Yc(e))for(var l=0;l<e.length;l++){o=e[l];var a=r+Ml(o,l);s+=Wo(o,n,t,a,i)}else if(a=fy(e),typeof a=="function")for(e=a.call(e),l=0;!(o=e.next()).done;)o=o.value,a=r+Ml(o,l++),s+=Wo(o,n,t,a,i);else if(o==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return s}function vo(e,n,t){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return n.call(t,o,i++)}),r}function py(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Yo={transition:null},gy={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Cu};function Eh(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:vo,forEach:function(e,n,t){vo(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vo(e,function(){n++}),n},toArray:function(e){return vo(e,function(n){return n})||[]},only:function(e){if(!Au(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=Kr;re.Fragment=ty;re.Profiler=iy;re.PureComponent=Eu;re.StrictMode=ry;re.Suspense=ay;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy;re.act=Eh;re.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=vh({},e.props),i=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=Cu.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in n)_h.call(n,a)&&!Nh.hasOwnProperty(a)&&(r[a]=n[a]===void 0&&l!==void 0?l[a]:n[a])}var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:eo,type:e.type,key:i,ref:o,props:r,_owner:s}};re.createContext=function(e){return e={$$typeof:sy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:oy,_context:e},e.Consumer=e};re.createElement=Sh;re.createFactory=function(e){var n=Sh.bind(null,e);return n.type=e,n};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:ly,render:e}};re.isValidElement=Au;re.lazy=function(e){return{$$typeof:cy,_payload:{_status:-1,_result:e},_init:py}};re.memo=function(e,n){return{$$typeof:uy,type:e,compare:n===void 0?null:n}};re.startTransition=function(e){var n=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=n}};re.unstable_act=Eh;re.useCallback=function(e,n){return Ve.current.useCallback(e,n)};re.useContext=function(e){return Ve.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};re.useEffect=function(e,n){return Ve.current.useEffect(e,n)};re.useId=function(){return Ve.current.useId()};re.useImperativeHandle=function(e,n,t){return Ve.current.useImperativeHandle(e,n,t)};re.useInsertionEffect=function(e,n){return Ve.current.useInsertionEffect(e,n)};re.useLayoutEffect=function(e,n){return Ve.current.useLayoutEffect(e,n)};re.useMemo=function(e,n){return Ve.current.useMemo(e,n)};re.useReducer=function(e,n,t){return Ve.current.useReducer(e,n,t)};re.useRef=function(e){return Ve.current.useRef(e)};re.useState=function(e){return Ve.current.useState(e)};re.useSyncExternalStore=function(e,n,t){return Ve.current.useSyncExternalStore(e,n,t)};re.useTransition=function(){return Ve.current.useTransition()};re.version="18.3.1";mh.exports=re;var T=mh.exports;const kh=ph(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=T,yy=Symbol.for("react.element"),vy=Symbol.for("react.fragment"),xy=Object.prototype.hasOwnProperty,wy=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_y={key:!0,ref:!0,__self:!0,__source:!0};function Ch(e,n,t){var r,i={},o=null,s=null;t!==void 0&&(o=""+t),n.key!==void 0&&(o=""+n.key),n.ref!==void 0&&(s=n.ref);for(r in n)xy.call(n,r)&&!_y.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:yy,type:e,key:o,ref:s,props:i,_owner:wy.current}}Ws.Fragment=vy;Ws.jsx=Ch;Ws.jsxs=Ch;gh.exports=Ws;var x=gh.exports,pa={},Ah={exports:{}},on={},Ih={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,A){var O=C.length;C.push(A);e:for(;0<O;){var D=O-1>>>1,$=C[D];if(0<i($,A))C[D]=A,C[O]=$,O=D;else break e}}function t(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var A=C[0],O=C.pop();if(O!==A){C[0]=O;e:for(var D=0,$=C.length,U=$>>>1;D<U;){var W=2*(D+1)-1,B=C[W],Q=W+1,K=C[Q];if(0>i(B,O))Q<$&&0>i(K,B)?(C[D]=K,C[Q]=O,D=Q):(C[D]=B,C[W]=O,D=W);else if(Q<$&&0>i(K,O))C[D]=K,C[Q]=O,D=Q;else break e}}return A}function i(C,A){var O=C.sortIndex-A.sortIndex;return O!==0?O:C.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],d=1,c=null,f=3,m=!1,y=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(C){for(var A=t(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=C)r(u),A.sortIndex=A.expirationTime,n(a,A);else break;A=t(u)}}function v(C){if(w=!1,h(C),!y)if(t(a)!==null)y=!0,L(N);else{var A=t(u);A!==null&&R(v,A.startTime-C)}}function N(C,A){y=!1,w&&(w=!1,p(I),I=-1),m=!0;var O=f;try{for(h(A),c=t(a);c!==null&&(!(c.expirationTime>A)||C&&!M());){var D=c.callback;if(typeof D=="function"){c.callback=null,f=c.priorityLevel;var $=D(c.expirationTime<=A);A=e.unstable_now(),typeof $=="function"?c.callback=$:c===t(a)&&r(a),h(A)}else r(a);c=t(a)}if(c!==null)var U=!0;else{var W=t(u);W!==null&&R(v,W.startTime-A),U=!1}return U}finally{c=null,f=O,m=!1}}var S=!1,E=null,I=-1,P=5,F=-1;function M(){return!(e.unstable_now()-F<P)}function j(){if(E!==null){var C=e.unstable_now();F=C;var A=!0;try{A=E(!0,C)}finally{A?H():(S=!1,E=null)}}else S=!1}var H;if(typeof g=="function")H=function(){g(j)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,z=k.port2;k.port1.onmessage=j,H=function(){z.postMessage(null)}}else H=function(){_(j,0)};function L(C){E=C,S||(S=!0,H())}function R(C,A){I=_(function(){C(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){y||m||(y=!0,L(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(C){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var O=f;f=A;try{return C()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,A){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var O=f;f=C;try{return A()}finally{f=O}},e.unstable_scheduleCallback=function(C,A,O){var D=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?D+O:D):O=D,C){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,C={id:d++,callback:A,priorityLevel:C,startTime:O,expirationTime:$,sortIndex:-1},O>D?(C.sortIndex=O,n(u,C),t(a)===null&&C===t(u)&&(w?(p(I),I=-1):w=!0,R(v,O-D))):(C.sortIndex=$,n(a,C),y||m||(y=!0,L(N))),C},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(C){var A=f;return function(){var O=f;f=A;try{return C.apply(this,arguments)}finally{f=O}}}})(Lh);Ih.exports=Lh;var Ny=Ih.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sy=T,tn=Ny;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mh=new Set,Ai={};function rr(e,n){Rr(e,n),Rr(e+"Capture",n)}function Rr(e,n){for(Ai[e]=n,e=0;e<n.length;e++)Mh.add(n[e])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ga=Object.prototype.hasOwnProperty,Ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qc={},Gc={};function ky(e){return ga.call(Gc,e)?!0:ga.call(Qc,e)?!1:Ey.test(e)?Gc[e]=!0:(Qc[e]=!0,!1)}function Cy(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ay(e,n,t,r){if(n===null||typeof n>"u"||Cy(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ue(e,n,t,r,i,o,s){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=s}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Re[n]=new Ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var Iu=/[\-:]([a-z])/g;function Lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Iu,Lu);Re[n]=new Ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Iu,Lu);Re[n]=new Ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Iu,Lu);Re[n]=new Ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mu(e,n,t,r){var i=Re.hasOwnProperty(n)?Re[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ay(n,t,i,r)&&(t=null),r||i===null?ky(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var rt=Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),ma=Symbol.for("react.profiler"),Ph=Symbol.for("react.provider"),Th=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),ya=Symbol.for("react.suspense"),va=Symbol.for("react.suspense_list"),zu=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),zh=Symbol.for("react.offscreen"),Kc=Symbol.iterator;function ei(e){return e===null||typeof e!="object"?null:(e=Kc&&e[Kc]||e["@@iterator"],typeof e=="function"?e:null)}var _e=Object.assign,Pl;function ci(e){if(Pl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Pl=n&&n[1]||""}return`
`+Pl+e}var Tl=!1;function zl(e,n){if(!e||Tl)return"";Tl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Tl=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ci(e):""}function Iy(e){switch(e.tag){case 5:return ci(e.type);case 16:return ci("Lazy");case 13:return ci("Suspense");case 19:return ci("SuspenseList");case 0:case 2:case 15:return e=zl(e.type,!1),e;case 11:return e=zl(e.type.render,!1),e;case 1:return e=zl(e.type,!0),e;default:return""}}function xa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case dr:return"Portal";case ma:return"Profiler";case Pu:return"StrictMode";case ya:return"Suspense";case va:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Th:return(e.displayName||"Context")+".Consumer";case Ph:return(e._context.displayName||"Context")+".Provider";case Tu:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zu:return n=e.displayName||null,n!==null?n:xa(e.type)||"Memo";case ft:n=e._payload,e=e._init;try{return xa(e(n))}catch{}}return null}function Ly(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xa(n);case 8:return n===Pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function It(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oh(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function My(e){var n=Oh(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wo(e){e._valueTracker||(e._valueTracker=My(e))}function Rh(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Oh(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function as(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function wa(e,n){var t=n.checked;return _e({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Zc(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=It(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function jh(e,n){n=n.checked,n!=null&&Mu(e,"checked",n,!1)}function _a(e,n){jh(e,n);var t=It(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Na(e,n.type,t):n.hasOwnProperty("defaultValue")&&Na(e,n.type,It(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function qc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Na(e,n,t){(n!=="number"||as(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var fi=Array.isArray;function Ar(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+It(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Sa(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return _e({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(b(92));if(fi(t)){if(1<t.length)throw Error(b(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:It(t)}}function Dh(e,n){var t=It(n.value),r=It(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function ef(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function $h(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ea(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?$h(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _o,Fh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=_o.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ii(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Py=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(e){Py.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),mi[n]=mi[e]})});function Hh(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||mi.hasOwnProperty(e)&&mi[e]?(""+n).trim():n+"px"}function bh(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Hh(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var Ty=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ka(e,n){if(n){if(Ty[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function Ca(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Ou(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,Ir=null,Lr=null;function nf(e){if(e=ro(e)){if(typeof Ia!="function")throw Error(b(280));var n=e.stateNode;n&&(n=Ks(n),Ia(e.stateNode,e.type,n))}}function Bh(e){Ir?Lr?Lr.push(e):Lr=[e]:Ir=e}function Vh(){if(Ir){var e=Ir,n=Lr;if(Lr=Ir=null,nf(e),n)for(e=0;e<n.length;e++)nf(n[e])}}function Uh(e,n){return e(n)}function Wh(){}var Ol=!1;function Yh(e,n,t){if(Ol)return e(n,t);Ol=!0;try{return Uh(e,n,t)}finally{Ol=!1,(Ir!==null||Lr!==null)&&(Wh(),Vh())}}function Li(e,n){var t=e.stateNode;if(t===null)return null;var r=Ks(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(b(231,n,typeof t));return t}var La=!1;if(qn)try{var ni={};Object.defineProperty(ni,"passive",{get:function(){La=!0}}),window.addEventListener("test",ni,ni),window.removeEventListener("test",ni,ni)}catch{La=!1}function zy(e,n,t,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(d){this.onError(d)}}var yi=!1,us=null,cs=!1,Ma=null,Oy={onError:function(e){yi=!0,us=e}};function Ry(e,n,t,r,i,o,s,l,a){yi=!1,us=null,zy.apply(Oy,arguments)}function jy(e,n,t,r,i,o,s,l,a){if(Ry.apply(this,arguments),yi){if(yi){var u=us;yi=!1,us=null}else throw Error(b(198));cs||(cs=!0,Ma=u)}}function ir(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xh(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function tf(e){if(ir(e)!==e)throw Error(b(188))}function Dy(e){var n=e.alternate;if(!n){if(n=ir(e),n===null)throw Error(b(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return tf(i),e;if(o===r)return tf(i),n;o=o.sibling}throw Error(b(188))}if(t.return!==r.return)t=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===t){s=!0,t=i,r=o;break}if(l===r){s=!0,r=i,t=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===t){s=!0,t=o,r=i;break}if(l===r){s=!0,r=o,t=i;break}l=l.sibling}if(!s)throw Error(b(189))}}if(t.alternate!==r)throw Error(b(190))}if(t.tag!==3)throw Error(b(188));return t.stateNode.current===t?e:n}function Qh(e){return e=Dy(e),e!==null?Gh(e):null}function Gh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Gh(e);if(n!==null)return n;e=e.sibling}return null}var Kh=tn.unstable_scheduleCallback,rf=tn.unstable_cancelCallback,$y=tn.unstable_shouldYield,Fy=tn.unstable_requestPaint,Se=tn.unstable_now,Hy=tn.unstable_getCurrentPriorityLevel,Ru=tn.unstable_ImmediatePriority,Zh=tn.unstable_UserBlockingPriority,fs=tn.unstable_NormalPriority,by=tn.unstable_LowPriority,qh=tn.unstable_IdlePriority,Ys=null,jn=null;function By(e){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(Ys,e,void 0,(e.current.flags&128)===128)}catch{}}var In=Math.clz32?Math.clz32:Wy,Vy=Math.log,Uy=Math.LN2;function Wy(e){return e>>>=0,e===0?32:31-(Vy(e)/Uy|0)|0}var No=64,So=4194304;function di(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ds(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=t&268435455;if(s!==0){var l=s&~i;l!==0?r=di(l):(o&=s,o!==0&&(r=di(o)))}else s=t&~i,s!==0?r=di(s):o!==0&&(r=di(o));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-In(n),i=1<<t,r|=e[t],n&=~i;return r}function Yy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xy(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-In(o),l=1<<s,a=i[s];a===-1?(!(l&t)||l&r)&&(i[s]=Yy(l,n)):a<=n&&(e.expiredLanes|=l),o&=~l}}function Pa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jh(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function Rl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function no(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-In(n),e[n]=t}function Qy(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-In(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function ju(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-In(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ue=0;function ep(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var np,Du,tp,rp,ip,Ta=!1,Eo=[],xt=null,wt=null,_t=null,Mi=new Map,Pi=new Map,ht=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function of(e,n){switch(e){case"focusin":case"focusout":xt=null;break;case"dragenter":case"dragleave":wt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":Mi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(n.pointerId)}}function ti(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=ro(n),n!==null&&Du(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Ky(e,n,t,r,i){switch(n){case"focusin":return xt=ti(xt,e,n,t,r,i),!0;case"dragenter":return wt=ti(wt,e,n,t,r,i),!0;case"mouseover":return _t=ti(_t,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Mi.set(o,ti(Mi.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Pi.set(o,ti(Pi.get(o)||null,e,n,t,r,i)),!0}return!1}function op(e){var n=Ht(e.target);if(n!==null){var t=ir(n);if(t!==null){if(n=t.tag,n===13){if(n=Xh(t),n!==null){e.blockedOn=n,ip(e.priority,function(){tp(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=za(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Aa=r,t.target.dispatchEvent(r),Aa=null}else return n=ro(t),n!==null&&Du(n),e.blockedOn=t,!1;n.shift()}return!0}function sf(e,n,t){Xo(e)&&t.delete(n)}function Zy(){Ta=!1,xt!==null&&Xo(xt)&&(xt=null),wt!==null&&Xo(wt)&&(wt=null),_t!==null&&Xo(_t)&&(_t=null),Mi.forEach(sf),Pi.forEach(sf)}function ri(e,n){e.blockedOn===n&&(e.blockedOn=null,Ta||(Ta=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,Zy)))}function Ti(e){function n(i){return ri(i,e)}if(0<Eo.length){ri(Eo[0],e);for(var t=1;t<Eo.length;t++){var r=Eo[t];r.blockedOn===e&&(r.blockedOn=null)}}for(xt!==null&&ri(xt,e),wt!==null&&ri(wt,e),_t!==null&&ri(_t,e),Mi.forEach(n),Pi.forEach(n),t=0;t<ht.length;t++)r=ht[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&(t=ht[0],t.blockedOn===null);)op(t),t.blockedOn===null&&ht.shift()}var Mr=rt.ReactCurrentBatchConfig,hs=!0;function qy(e,n,t,r){var i=ue,o=Mr.transition;Mr.transition=null;try{ue=1,$u(e,n,t,r)}finally{ue=i,Mr.transition=o}}function Jy(e,n,t,r){var i=ue,o=Mr.transition;Mr.transition=null;try{ue=4,$u(e,n,t,r)}finally{ue=i,Mr.transition=o}}function $u(e,n,t,r){if(hs){var i=za(e,n,t,r);if(i===null)Wl(e,n,r,ps,t),of(e,r);else if(Ky(i,e,n,t,r))r.stopPropagation();else if(of(e,r),n&4&&-1<Gy.indexOf(e)){for(;i!==null;){var o=ro(i);if(o!==null&&np(o),o=za(e,n,t,r),o===null&&Wl(e,n,r,ps,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Wl(e,n,r,null,t)}}var ps=null;function za(e,n,t,r){if(ps=null,e=Ou(r),e=Ht(e),e!==null)if(n=ir(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xh(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ps=e,null}function sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hy()){case Ru:return 1;case Zh:return 4;case fs:case by:return 16;case qh:return 536870912;default:return 16}default:return 16}}var mt=null,Fu=null,Qo=null;function lp(){if(Qo)return Qo;var e,n=Fu,t=n.length,r,i="value"in mt?mt.value:mt.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===i[o-r];r++);return Qo=i.slice(e,1<r?1-r:void 0)}function Go(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ko(){return!0}function lf(){return!1}function sn(e){function n(t,r,i,o,s){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ko:lf,this.isPropagationStopped=lf,this}return _e(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),n}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=sn(Zr),to=_e({},Zr,{view:0,detail:0}),e1=sn(to),jl,Dl,ii,Xs=_e({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ii&&(ii&&e.type==="mousemove"?(jl=e.screenX-ii.screenX,Dl=e.screenY-ii.screenY):Dl=jl=0,ii=e),jl)},movementY:function(e){return"movementY"in e?e.movementY:Dl}}),af=sn(Xs),n1=_e({},Xs,{dataTransfer:0}),t1=sn(n1),r1=_e({},to,{relatedTarget:0}),$l=sn(r1),i1=_e({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=sn(i1),s1=_e({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l1=sn(s1),a1=_e({},Zr,{data:0}),uf=sn(a1),u1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},f1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=f1[e])?!!n[e]:!1}function bu(){return d1}var h1=_e({},to,{key:function(e){if(e.key){var n=u1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),p1=sn(h1),g1=_e({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cf=sn(g1),m1=_e({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),y1=sn(m1),v1=_e({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),x1=sn(v1),w1=_e({},Xs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_1=sn(w1),N1=[9,13,27,32],Bu=qn&&"CompositionEvent"in window,vi=null;qn&&"documentMode"in document&&(vi=document.documentMode);var S1=qn&&"TextEvent"in window&&!vi,ap=qn&&(!Bu||vi&&8<vi&&11>=vi),ff=" ",df=!1;function up(e,n){switch(e){case"keyup":return N1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function E1(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(df=!0,ff);case"textInput":return e=n.data,e===ff&&df?null:e;default:return null}}function k1(e,n){if(pr)return e==="compositionend"||!Bu&&up(e,n)?(e=lp(),Qo=Fu=mt=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var C1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!C1[e.type]:n==="textarea"}function fp(e,n,t,r){Bh(r),n=gs(n,"onChange"),0<n.length&&(t=new Hu("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var xi=null,zi=null;function A1(e){Np(e,0)}function Qs(e){var n=yr(e);if(Rh(n))return e}function I1(e,n){if(e==="change")return n}var dp=!1;if(qn){var Fl;if(qn){var Hl="oninput"in document;if(!Hl){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Hl=typeof pf.oninput=="function"}Fl=Hl}else Fl=!1;dp=Fl&&(!document.documentMode||9<document.documentMode)}function gf(){xi&&(xi.detachEvent("onpropertychange",hp),zi=xi=null)}function hp(e){if(e.propertyName==="value"&&Qs(zi)){var n=[];fp(n,zi,e,Ou(e)),Yh(A1,n)}}function L1(e,n,t){e==="focusin"?(gf(),xi=n,zi=t,xi.attachEvent("onpropertychange",hp)):e==="focusout"&&gf()}function M1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qs(zi)}function P1(e,n){if(e==="click")return Qs(n)}function T1(e,n){if(e==="input"||e==="change")return Qs(n)}function z1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Mn=typeof Object.is=="function"?Object.is:z1;function Oi(e,n){if(Mn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!ga.call(n,i)||!Mn(e[i],n[i]))return!1}return!0}function mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yf(e,n){var t=mf(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=mf(t)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function gp(){for(var e=window,n=as();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=as(e.document)}return n}function Vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function O1(e){var n=gp(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&pp(t.ownerDocument.documentElement,t)){if(r!==null&&Vu(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=yf(t,o);var s=yf(t,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(s.node,s.offset)):(n.setEnd(s.node,s.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R1=qn&&"documentMode"in document&&11>=document.documentMode,gr=null,Oa=null,wi=null,Ra=!1;function vf(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ra||gr==null||gr!==as(r)||(r=gr,"selectionStart"in r&&Vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wi&&Oi(wi,r)||(wi=r,r=gs(Oa,"onSelect"),0<r.length&&(n=new Hu("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=gr)))}function Co(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var mr={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},bl={},mp={};qn&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Gs(e){if(bl[e])return bl[e];if(!mr[e])return e;var n=mr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in mp)return bl[e]=n[t];return e}var yp=Gs("animationend"),vp=Gs("animationiteration"),xp=Gs("animationstart"),wp=Gs("transitionend"),_p=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mt(e,n){_p.set(e,n),rr(n,[e])}for(var Bl=0;Bl<xf.length;Bl++){var Vl=xf[Bl],j1=Vl.toLowerCase(),D1=Vl[0].toUpperCase()+Vl.slice(1);Mt(j1,"on"+D1)}Mt(yp,"onAnimationEnd");Mt(vp,"onAnimationIteration");Mt(xp,"onAnimationStart");Mt("dblclick","onDoubleClick");Mt("focusin","onFocus");Mt("focusout","onBlur");Mt(wp,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$1=new Set("cancel close invalid load scroll toggle".split(" ").concat(hi));function wf(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,jy(r,n,void 0,e),e.currentTarget=null}function Np(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;wf(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;wf(i,l,u),o=a}}}if(cs)throw e=Ma,cs=!1,Ma=null,e}function de(e,n){var t=n[Ha];t===void 0&&(t=n[Ha]=new Set);var r=e+"__bubble";t.has(r)||(Sp(n,e,2,!1),t.add(r))}function Ul(e,n,t){var r=0;n&&(r|=4),Sp(t,e,r,n)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[Ao]){e[Ao]=!0,Mh.forEach(function(t){t!=="selectionchange"&&($1.has(t)||Ul(t,!1,e),Ul(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ao]||(n[Ao]=!0,Ul("selectionchange",!1,n))}}function Sp(e,n,t,r){switch(sp(n)){case 1:var i=qy;break;case 4:i=Jy;break;default:i=$u}t=i.bind(null,n,t,e),i=void 0,!La||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Wl(e,n,t,r,i){var o=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Ht(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Yh(function(){var u=o,d=Ou(t),c=[];e:{var f=_p.get(e);if(f!==void 0){var m=Hu,y=e;switch(e){case"keypress":if(Go(t)===0)break e;case"keydown":case"keyup":m=p1;break;case"focusin":y="focus",m=$l;break;case"focusout":y="blur",m=$l;break;case"beforeblur":case"afterblur":m=$l;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=t1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=y1;break;case yp:case vp:case xp:m=o1;break;case wp:m=x1;break;case"scroll":m=e1;break;case"wheel":m=_1;break;case"copy":case"cut":case"paste":m=l1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cf}var w=(n&4)!==0,_=!w&&e==="scroll",p=w?f!==null?f+"Capture":null:f;w=[];for(var g=u,h;g!==null;){h=g;var v=h.stateNode;if(h.tag===5&&v!==null&&(h=v,p!==null&&(v=Li(g,p),v!=null&&w.push(ji(g,v,h)))),_)break;g=g.return}0<w.length&&(f=new m(f,y,null,t,d),c.push({event:f,listeners:w}))}}if(!(n&7)){e:{if(f=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",f&&t!==Aa&&(y=t.relatedTarget||t.fromElement)&&(Ht(y)||y[Jn]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=t.relatedTarget||t.toElement,m=u,y=y?Ht(y):null,y!==null&&(_=ir(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=af,v="onMouseLeave",p="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(w=cf,v="onPointerLeave",p="onPointerEnter",g="pointer"),_=m==null?f:yr(m),h=y==null?f:yr(y),f=new w(v,g+"leave",m,t,d),f.target=_,f.relatedTarget=h,v=null,Ht(d)===u&&(w=new w(p,g+"enter",y,t,d),w.target=h,w.relatedTarget=_,v=w),_=v,m&&y)n:{for(w=m,p=y,g=0,h=w;h;h=ar(h))g++;for(h=0,v=p;v;v=ar(v))h++;for(;0<g-h;)w=ar(w),g--;for(;0<h-g;)p=ar(p),h--;for(;g--;){if(w===p||p!==null&&w===p.alternate)break n;w=ar(w),p=ar(p)}w=null}else w=null;m!==null&&_f(c,f,m,w,!1),y!==null&&_!==null&&_f(c,_,y,w,!0)}}e:{if(f=u?yr(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=I1;else if(hf(f))if(dp)N=T1;else{N=M1;var S=L1}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=P1);if(N&&(N=N(e,u))){fp(c,N,t,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&Na(f,"number",f.value)}switch(S=u?yr(u):window,e){case"focusin":(hf(S)||S.contentEditable==="true")&&(gr=S,Oa=u,wi=null);break;case"focusout":wi=Oa=gr=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,vf(c,t,d);break;case"selectionchange":if(R1)break;case"keydown":case"keyup":vf(c,t,d)}var E;if(Bu)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else pr?up(e,t)&&(I="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(I="onCompositionStart");I&&(ap&&t.locale!=="ko"&&(pr||I!=="onCompositionStart"?I==="onCompositionEnd"&&pr&&(E=lp()):(mt=d,Fu="value"in mt?mt.value:mt.textContent,pr=!0)),S=gs(u,I),0<S.length&&(I=new uf(I,e,null,t,d),c.push({event:I,listeners:S}),E?I.data=E:(E=cp(t),E!==null&&(I.data=E)))),(E=S1?E1(e,t):k1(e,t))&&(u=gs(u,"onBeforeInput"),0<u.length&&(d=new uf("onBeforeInput","beforeinput",null,t,d),c.push({event:d,listeners:u}),d.data=E))}Np(c,n)})}function ji(e,n,t){return{instance:e,listener:n,currentTarget:t}}function gs(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Li(e,t),o!=null&&r.unshift(ji(e,o,i)),o=Li(e,n),o!=null&&r.push(ji(e,o,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _f(e,n,t,r,i){for(var o=n._reactName,s=[];t!==null&&t!==r;){var l=t,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Li(t,o),a!=null&&s.unshift(ji(t,a,l))):i||(a=Li(t,o),a!=null&&s.push(ji(t,a,l)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var F1=/\r\n?/g,H1=/\u0000|\uFFFD/g;function Nf(e){return(typeof e=="string"?e:""+e).replace(F1,`
`).replace(H1,"")}function Io(e,n,t){if(n=Nf(n),Nf(e)!==n&&t)throw Error(b(425))}function ms(){}var ja=null,Da=null;function $a(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,b1=typeof clearTimeout=="function"?clearTimeout:void 0,Sf=typeof Promise=="function"?Promise:void 0,B1=typeof queueMicrotask=="function"?queueMicrotask:typeof Sf<"u"?function(e){return Sf.resolve(null).then(e).catch(V1)}:Fa;function V1(e){setTimeout(function(){throw e})}function Yl(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Ti(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Ti(n)}function Nt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ef(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Rn="__reactFiber$"+qr,Di="__reactProps$"+qr,Jn="__reactContainer$"+qr,Ha="__reactEvents$"+qr,U1="__reactListeners$"+qr,W1="__reactHandles$"+qr;function Ht(e){var n=e[Rn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Jn]||t[Rn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ef(e);e!==null;){if(t=e[Rn])return t;e=Ef(e)}return n}e=t,t=e.parentNode}return null}function ro(e){return e=e[Rn]||e[Jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Ks(e){return e[Di]||null}var ba=[],vr=-1;function Pt(e){return{current:e}}function he(e){0>vr||(e.current=ba[vr],ba[vr]=null,vr--)}function fe(e,n){vr++,ba[vr]=e.current,e.current=n}var Lt={},He=Pt(Lt),Qe=Pt(!1),Qt=Lt;function jr(e,n){var t=e.type.contextTypes;if(!t)return Lt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(e){return e=e.childContextTypes,e!=null}function ys(){he(Qe),he(He)}function kf(e,n,t){if(He.current!==Lt)throw Error(b(168));fe(He,n),fe(Qe,t)}function Ep(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(b(108,Ly(e)||"Unknown",i));return _e({},t,r)}function vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,Qt=He.current,fe(He,e),fe(Qe,Qe.current),!0}function Cf(e,n,t){var r=e.stateNode;if(!r)throw Error(b(169));t?(e=Ep(e,n,Qt),r.__reactInternalMemoizedMergedChildContext=e,he(Qe),he(He),fe(He,e)):he(Qe),fe(Qe,t)}var Xn=null,Zs=!1,Xl=!1;function kp(e){Xn===null?Xn=[e]:Xn.push(e)}function Y1(e){Zs=!0,kp(e)}function Tt(){if(!Xl&&Xn!==null){Xl=!0;var e=0,n=ue;try{var t=Xn;for(ue=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Xn=null,Zs=!1}catch(i){throw Xn!==null&&(Xn=Xn.slice(e+1)),Kh(Ru,Tt),i}finally{ue=n,Xl=!1}}return null}var xr=[],wr=0,xs=null,ws=0,cn=[],fn=0,Gt=null,Qn=1,Gn="";function Rt(e,n){xr[wr++]=ws,xr[wr++]=xs,xs=e,ws=n}function Cp(e,n,t){cn[fn++]=Qn,cn[fn++]=Gn,cn[fn++]=Gt,Gt=e;var r=Qn;e=Gn;var i=32-In(r)-1;r&=~(1<<i),t+=1;var o=32-In(n)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Qn=1<<32-In(n)+i|t<<i|r,Gn=o+e}else Qn=1<<o|t<<i|r,Gn=e}function Uu(e){e.return!==null&&(Rt(e,1),Cp(e,1,0))}function Wu(e){for(;e===xs;)xs=xr[--wr],xr[wr]=null,ws=xr[--wr],xr[wr]=null;for(;e===Gt;)Gt=cn[--fn],cn[fn]=null,Gn=cn[--fn],cn[fn]=null,Qn=cn[--fn],cn[fn]=null}var nn=null,en=null,ge=!1,En=null;function Ap(e,n){var t=dn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Af(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,nn=e,en=Nt(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,nn=e,en=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Gt!==null?{id:Qn,overflow:Gn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=dn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,nn=e,en=null,!0):!1;default:return!1}}function Ba(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Va(e){if(ge){var n=en;if(n){var t=n;if(!Af(e,n)){if(Ba(e))throw Error(b(418));n=Nt(t.nextSibling);var r=nn;n&&Af(e,n)?Ap(r,t):(e.flags=e.flags&-4097|2,ge=!1,nn=e)}}else{if(Ba(e))throw Error(b(418));e.flags=e.flags&-4097|2,ge=!1,nn=e}}}function If(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function Lo(e){if(e!==nn)return!1;if(!ge)return If(e),ge=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$a(e.type,e.memoizedProps)),n&&(n=en)){if(Ba(e))throw Ip(),Error(b(418));for(;n;)Ap(e,n),n=Nt(n.nextSibling)}if(If(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){en=Nt(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}en=null}}else en=nn?Nt(e.stateNode.nextSibling):null;return!0}function Ip(){for(var e=en;e;)e=Nt(e.nextSibling)}function Dr(){en=nn=null,ge=!1}function Yu(e){En===null?En=[e]:En.push(e)}var X1=rt.ReactCurrentBatchConfig;function oi(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(b(309));var r=t.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},n._stringRef=o,n)}if(typeof e!="string")throw Error(b(284));if(!t._owner)throw Error(b(290,e))}return e}function Mo(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Lf(e){var n=e._init;return n(e._payload)}function Lp(e){function n(p,g){if(e){var h=p.deletions;h===null?(p.deletions=[g],p.flags|=16):h.push(g)}}function t(p,g){if(!e)return null;for(;g!==null;)n(p,g),g=g.sibling;return null}function r(p,g){for(p=new Map;g!==null;)g.key!==null?p.set(g.key,g):p.set(g.index,g),g=g.sibling;return p}function i(p,g){return p=Ct(p,g),p.index=0,p.sibling=null,p}function o(p,g,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<g?(p.flags|=2,g):h):(p.flags|=2,g)):(p.flags|=1048576,g)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,g,h,v){return g===null||g.tag!==6?(g=ea(h,p.mode,v),g.return=p,g):(g=i(g,h),g.return=p,g)}function a(p,g,h,v){var N=h.type;return N===hr?d(p,g,h.props.children,v,h.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&Lf(N)===g.type)?(v=i(g,h.props),v.ref=oi(p,g,h),v.return=p,v):(v=ts(h.type,h.key,h.props,null,p.mode,v),v.ref=oi(p,g,h),v.return=p,v)}function u(p,g,h,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=na(h,p.mode,v),g.return=p,g):(g=i(g,h.children||[]),g.return=p,g)}function d(p,g,h,v,N){return g===null||g.tag!==7?(g=Wt(h,p.mode,v,N),g.return=p,g):(g=i(g,h),g.return=p,g)}function c(p,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=ea(""+g,p.mode,h),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case xo:return h=ts(g.type,g.key,g.props,null,p.mode,h),h.ref=oi(p,null,g),h.return=p,h;case dr:return g=na(g,p.mode,h),g.return=p,g;case ft:var v=g._init;return c(p,v(g._payload),h)}if(fi(g)||ei(g))return g=Wt(g,p.mode,h,null),g.return=p,g;Mo(p,g)}return null}function f(p,g,h,v){var N=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:l(p,g,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xo:return h.key===N?a(p,g,h,v):null;case dr:return h.key===N?u(p,g,h,v):null;case ft:return N=h._init,f(p,g,N(h._payload),v)}if(fi(h)||ei(h))return N!==null?null:d(p,g,h,v,null);Mo(p,h)}return null}function m(p,g,h,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(h)||null,l(g,p,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:return p=p.get(v.key===null?h:v.key)||null,a(g,p,v,N);case dr:return p=p.get(v.key===null?h:v.key)||null,u(g,p,v,N);case ft:var S=v._init;return m(p,g,h,S(v._payload),N)}if(fi(v)||ei(v))return p=p.get(h)||null,d(g,p,v,N,null);Mo(g,v)}return null}function y(p,g,h,v){for(var N=null,S=null,E=g,I=g=0,P=null;E!==null&&I<h.length;I++){E.index>I?(P=E,E=null):P=E.sibling;var F=f(p,E,h[I],v);if(F===null){E===null&&(E=P);break}e&&E&&F.alternate===null&&n(p,E),g=o(F,g,I),S===null?N=F:S.sibling=F,S=F,E=P}if(I===h.length)return t(p,E),ge&&Rt(p,I),N;if(E===null){for(;I<h.length;I++)E=c(p,h[I],v),E!==null&&(g=o(E,g,I),S===null?N=E:S.sibling=E,S=E);return ge&&Rt(p,I),N}for(E=r(p,E);I<h.length;I++)P=m(E,p,I,h[I],v),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?I:P.key),g=o(P,g,I),S===null?N=P:S.sibling=P,S=P);return e&&E.forEach(function(M){return n(p,M)}),ge&&Rt(p,I),N}function w(p,g,h,v){var N=ei(h);if(typeof N!="function")throw Error(b(150));if(h=N.call(h),h==null)throw Error(b(151));for(var S=N=null,E=g,I=g=0,P=null,F=h.next();E!==null&&!F.done;I++,F=h.next()){E.index>I?(P=E,E=null):P=E.sibling;var M=f(p,E,F.value,v);if(M===null){E===null&&(E=P);break}e&&E&&M.alternate===null&&n(p,E),g=o(M,g,I),S===null?N=M:S.sibling=M,S=M,E=P}if(F.done)return t(p,E),ge&&Rt(p,I),N;if(E===null){for(;!F.done;I++,F=h.next())F=c(p,F.value,v),F!==null&&(g=o(F,g,I),S===null?N=F:S.sibling=F,S=F);return ge&&Rt(p,I),N}for(E=r(p,E);!F.done;I++,F=h.next())F=m(E,p,I,F.value,v),F!==null&&(e&&F.alternate!==null&&E.delete(F.key===null?I:F.key),g=o(F,g,I),S===null?N=F:S.sibling=F,S=F);return e&&E.forEach(function(j){return n(p,j)}),ge&&Rt(p,I),N}function _(p,g,h,v){if(typeof h=="object"&&h!==null&&h.type===hr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case xo:e:{for(var N=h.key,S=g;S!==null;){if(S.key===N){if(N=h.type,N===hr){if(S.tag===7){t(p,S.sibling),g=i(S,h.props.children),g.return=p,p=g;break e}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&Lf(N)===S.type){t(p,S.sibling),g=i(S,h.props),g.ref=oi(p,S,h),g.return=p,p=g;break e}t(p,S);break}else n(p,S);S=S.sibling}h.type===hr?(g=Wt(h.props.children,p.mode,v,h.key),g.return=p,p=g):(v=ts(h.type,h.key,h.props,null,p.mode,v),v.ref=oi(p,g,h),v.return=p,p=v)}return s(p);case dr:e:{for(S=h.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){t(p,g.sibling),g=i(g,h.children||[]),g.return=p,p=g;break e}else{t(p,g);break}else n(p,g);g=g.sibling}g=na(h,p.mode,v),g.return=p,p=g}return s(p);case ft:return S=h._init,_(p,g,S(h._payload),v)}if(fi(h))return y(p,g,h,v);if(ei(h))return w(p,g,h,v);Mo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(t(p,g.sibling),g=i(g,h),g.return=p,p=g):(t(p,g),g=ea(h,p.mode,v),g.return=p,p=g),s(p)):t(p,g)}return _}var $r=Lp(!0),Mp=Lp(!1),_s=Pt(null),Ns=null,_r=null,Xu=null;function Qu(){Xu=_r=Ns=null}function Gu(e){var n=_s.current;he(_s),e._currentValue=n}function Ua(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Pr(e,n){Ns=e,Xu=_r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ye=!0),e.firstContext=null)}function gn(e){var n=e._currentValue;if(Xu!==e)if(e={context:e,memoizedValue:n,next:null},_r===null){if(Ns===null)throw Error(b(308));_r=e,Ns.dependencies={lanes:0,firstContext:e}}else _r=_r.next=e;return n}var bt=null;function Ku(e){bt===null?bt=[e]:bt.push(e)}function Pp(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Ku(n)):(t.next=i.next,i.next=t),n.interleaved=t,et(e,r)}function et(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var dt=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function St(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,et(e,t)}return i=r.interleaved,i===null?(n.next=n,Ku(r)):(n.next=i.next,i.next=n),r.interleaved=n,et(e,t)}function Ko(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ju(e,t)}}function Mf(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var s={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=s:o=o.next=s,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ss(e,n,t,r){var i=e.updateQueue;dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(o!==null){var c=i.baseState;s=0,d=u=a=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(f=n,m=t,w.tag){case 1:if(y=w.payload,typeof y=="function"){c=y.call(m,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(m,c,f):y,f==null)break e;c=_e({},c,f);break e;case 2:dt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=m,a=c):d=d.next=m,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,n=i.shared.interleaved,n!==null){i=n;do s|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);Zt|=s,e.lanes=s,e.memoizedState=c}}function Pf(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var io={},Dn=Pt(io),$i=Pt(io),Fi=Pt(io);function Bt(e){if(e===io)throw Error(b(174));return e}function qu(e,n){switch(fe(Fi,n),fe($i,e),fe(Dn,io),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ea(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ea(n,e)}he(Dn),fe(Dn,n)}function Fr(){he(Dn),he($i),he(Fi)}function zp(e){Bt(Fi.current);var n=Bt(Dn.current),t=Ea(n,e.type);n!==t&&(fe($i,e),fe(Dn,t))}function Ju(e){$i.current===e&&(he(Dn),he($i))}var xe=Pt(0);function Es(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ql=[];function ec(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Zo=rt.ReactCurrentDispatcher,Gl=rt.ReactCurrentBatchConfig,Kt=0,we=null,Ie=null,Pe=null,ks=!1,_i=!1,Hi=0,Q1=0;function De(){throw Error(b(321))}function nc(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Mn(e[t],n[t]))return!1;return!0}function tc(e,n,t,r,i,o){if(Kt=o,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Zo.current=e===null||e.memoizedState===null?q1:J1,e=t(r,i),_i){o=0;do{if(_i=!1,Hi=0,25<=o)throw Error(b(301));o+=1,Pe=Ie=null,n.updateQueue=null,Zo.current=ev,e=t(r,i)}while(_i)}if(Zo.current=Cs,n=Ie!==null&&Ie.next!==null,Kt=0,Pe=Ie=we=null,ks=!1,n)throw Error(b(300));return e}function rc(){var e=Hi!==0;return Hi=0,e}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?we.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function mn(){if(Ie===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Pe===null?we.memoizedState:Pe.next;if(n!==null)Pe=n,Ie=e;else{if(e===null)throw Error(b(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Pe===null?we.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function bi(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=mn(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=Ie,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var d=u.lane;if((Kt&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,s=r):a=a.next=c,we.lanes|=d,Zt|=d}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,Mn(r,n.memoizedState)||(Ye=!0),n.memoizedState=r,n.baseState=s,n.baseQueue=a,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,we.lanes|=o,Zt|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Zl(e){var n=mn(),t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Mn(o,n.memoizedState)||(Ye=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Op(){}function Rp(e,n){var t=we,r=mn(),i=n(),o=!Mn(r.memoizedState,i);if(o&&(r.memoizedState=i,Ye=!0),r=r.queue,ic($p.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||Pe!==null&&Pe.memoizedState.tag&1){if(t.flags|=2048,Bi(9,Dp.bind(null,t,r,i,n),void 0,null),Te===null)throw Error(b(349));Kt&30||jp(t,n,i)}return i}function jp(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Dp(e,n,t,r){n.value=t,n.getSnapshot=r,Fp(n)&&Hp(e)}function $p(e,n,t){return t(function(){Fp(n)&&Hp(e)})}function Fp(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Mn(e,t)}catch{return!0}}function Hp(e){var n=et(e,1);n!==null&&Ln(n,e,1,-1)}function Tf(e){var n=zn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},n.queue=e,e=e.dispatch=Z1.bind(null,we,e),[n.memoizedState,e]}function Bi(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=we.updateQueue,n===null?(n={lastEffect:null,stores:null},we.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function bp(){return mn().memoizedState}function qo(e,n,t,r){var i=zn();we.flags|=e,i.memoizedState=Bi(1|n,t,void 0,r===void 0?null:r)}function qs(e,n,t,r){var i=mn();r=r===void 0?null:r;var o=void 0;if(Ie!==null){var s=Ie.memoizedState;if(o=s.destroy,r!==null&&nc(r,s.deps)){i.memoizedState=Bi(n,t,o,r);return}}we.flags|=e,i.memoizedState=Bi(1|n,t,o,r)}function zf(e,n){return qo(8390656,8,e,n)}function ic(e,n){return qs(2048,8,e,n)}function Bp(e,n){return qs(4,2,e,n)}function Vp(e,n){return qs(4,4,e,n)}function Up(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Wp(e,n,t){return t=t!=null?t.concat([e]):null,qs(4,4,Up.bind(null,n,e),t)}function oc(){}function Yp(e,n){var t=mn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&nc(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Xp(e,n){var t=mn();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&nc(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Qp(e,n,t){return Kt&21?(Mn(t,n)||(t=Jh(),we.lanes|=t,Zt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=t)}function G1(e,n){var t=ue;ue=t!==0&&4>t?t:4,e(!0);var r=Gl.transition;Gl.transition={};try{e(!1),n()}finally{ue=t,Gl.transition=r}}function Gp(){return mn().memoizedState}function K1(e,n,t){var r=kt(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Kp(e))Zp(n,t);else if(t=Pp(e,n,t,r),t!==null){var i=Be();Ln(t,e,r,i),qp(t,n,r)}}function Z1(e,n,t){var r=kt(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kp(e))Zp(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var s=n.lastRenderedState,l=o(s,t);if(i.hasEagerState=!0,i.eagerState=l,Mn(l,s)){var a=n.interleaved;a===null?(i.next=i,Ku(n)):(i.next=a.next,a.next=i),n.interleaved=i;return}}catch{}finally{}t=Pp(e,n,i,r),t!==null&&(i=Be(),Ln(t,e,r,i),qp(t,n,r))}}function Kp(e){var n=e.alternate;return e===we||n!==null&&n===we}function Zp(e,n){_i=ks=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qp(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ju(e,t)}}var Cs={readContext:gn,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},q1={readContext:gn,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:gn,useEffect:zf,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,qo(4194308,4,Up.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qo(4194308,4,e,n)},useInsertionEffect:function(e,n){return qo(4,2,e,n)},useMemo:function(e,n){var t=zn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=zn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=K1.bind(null,we,e),[r.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:Tf,useDebugValue:oc,useDeferredValue:function(e){return zn().memoizedState=e},useTransition:function(){var e=Tf(!1),n=e[0];return e=G1.bind(null,e[1]),zn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=we,i=zn();if(ge){if(t===void 0)throw Error(b(407));t=t()}else{if(t=n(),Te===null)throw Error(b(349));Kt&30||jp(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,zf($p.bind(null,r,o,e),[e]),r.flags|=2048,Bi(9,Dp.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=zn(),n=Te.identifierPrefix;if(ge){var t=Gn,r=Qn;t=(r&~(1<<32-In(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Hi++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Q1++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},J1={readContext:gn,useCallback:Yp,useContext:gn,useEffect:ic,useImperativeHandle:Wp,useInsertionEffect:Bp,useLayoutEffect:Vp,useMemo:Xp,useReducer:Kl,useRef:bp,useState:function(){return Kl(bi)},useDebugValue:oc,useDeferredValue:function(e){var n=mn();return Qp(n,Ie.memoizedState,e)},useTransition:function(){var e=Kl(bi)[0],n=mn().memoizedState;return[e,n]},useMutableSource:Op,useSyncExternalStore:Rp,useId:Gp,unstable_isNewReconciler:!1},ev={readContext:gn,useCallback:Yp,useContext:gn,useEffect:ic,useImperativeHandle:Wp,useInsertionEffect:Bp,useLayoutEffect:Vp,useMemo:Xp,useReducer:Zl,useRef:bp,useState:function(){return Zl(bi)},useDebugValue:oc,useDeferredValue:function(e){var n=mn();return Ie===null?n.memoizedState=e:Qp(n,Ie.memoizedState,e)},useTransition:function(){var e=Zl(bi)[0],n=mn().memoizedState;return[e,n]},useMutableSource:Op,useSyncExternalStore:Rp,useId:Gp,unstable_isNewReconciler:!1};function _n(e,n){if(e&&e.defaultProps){n=_e({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Wa(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:_e({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Js={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Be(),i=kt(e),o=Zn(r,i);o.payload=n,t!=null&&(o.callback=t),n=St(e,o,i),n!==null&&(Ln(n,e,i,r),Ko(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Be(),i=kt(e),o=Zn(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=St(e,o,i),n!==null&&(Ln(n,e,i,r),Ko(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Be(),r=kt(e),i=Zn(t,r);i.tag=2,n!=null&&(i.callback=n),n=St(e,i,r),n!==null&&(Ln(n,e,r,t),Ko(n,e,r))}};function Of(e,n,t,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):n.prototype&&n.prototype.isPureReactComponent?!Oi(t,r)||!Oi(i,o):!0}function Jp(e,n,t){var r=!1,i=Lt,o=n.contextType;return typeof o=="object"&&o!==null?o=gn(o):(i=Ge(n)?Qt:He.current,r=n.contextTypes,o=(r=r!=null)?jr(e,i):Lt),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Js,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function Rf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Js.enqueueReplaceState(n,n.state,null)}function Ya(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Zu(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=gn(o):(o=Ge(n)?Qt:He.current,i.context=jr(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(Wa(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Js.enqueueReplaceState(i,i.state,null),Ss(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,n){try{var t="",r=n;do t+=Iy(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function ql(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Xa(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function eg(e,n,t){t=Zn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Is||(Is=!0,ru=r),Xa(e,n)},t}function ng(e,n,t){t=Zn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){Xa(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Xa(e,n),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})}),t}function jf(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new nv;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=gv.bind(null,e,n,t),n.then(e,e))}function Df(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $f(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Zn(-1,1),n.tag=2,St(t,n,1))),t.lanes|=1),e)}var tv=rt.ReactCurrentOwner,Ye=!1;function be(e,n,t,r){n.child=e===null?Mp(n,null,t,r):$r(n,e.child,t,r)}function Ff(e,n,t,r,i){t=t.render;var o=n.ref;return Pr(n,i),r=tc(e,n,t,r,o,i),t=rc(),e!==null&&!Ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nt(e,n,i)):(ge&&t&&Uu(n),n.flags|=1,be(e,n,r,i),n.child)}function Hf(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!hc(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,tg(e,n,o,r,i)):(e=ts(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(t=t.compare,t=t!==null?t:Oi,t(s,r)&&e.ref===n.ref)return nt(e,n,i)}return n.flags|=1,e=Ct(o,r),e.ref=n.ref,e.return=n,n.child=e}function tg(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===n.ref)if(Ye=!1,n.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return n.lanes=e.lanes,nt(e,n,i)}return Qa(e,n,t,r,i)}function rg(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(Sr,qe),qe|=t;else{if(!(t&1073741824))return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,fe(Sr,qe),qe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,fe(Sr,qe),qe|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,fe(Sr,qe),qe|=r;return be(e,n,i,t),n.child}function ig(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Qa(e,n,t,r,i){var o=Ge(t)?Qt:He.current;return o=jr(n,o),Pr(n,i),t=tc(e,n,t,r,o,i),r=rc(),e!==null&&!Ye?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,nt(e,n,i)):(ge&&r&&Uu(n),n.flags|=1,be(e,n,t,i),n.child)}function bf(e,n,t,r,i){if(Ge(t)){var o=!0;vs(n)}else o=!1;if(Pr(n,i),n.stateNode===null)Jo(e,n),Jp(n,t,r),Ya(n,t,r,i),r=!0;else if(e===null){var s=n.stateNode,l=n.memoizedProps;s.props=l;var a=s.context,u=t.contextType;typeof u=="object"&&u!==null?u=gn(u):(u=Ge(t)?Qt:He.current,u=jr(n,u));var d=t.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Rf(n,s,r,u),dt=!1;var f=n.memoizedState;s.state=f,Ss(n,r,s,i),a=n.memoizedState,l!==r||f!==a||Qe.current||dt?(typeof d=="function"&&(Wa(n,t,d,r),a=n.memoizedState),(l=dt||Of(n,t,l,r,f,a,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(n.flags|=4194308)):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{s=n.stateNode,Tp(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:_n(n.type,l),s.props=u,c=n.pendingProps,f=s.context,a=t.contextType,typeof a=="object"&&a!==null?a=gn(a):(a=Ge(t)?Qt:He.current,a=jr(n,a));var m=t.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==c||f!==a)&&Rf(n,s,r,a),dt=!1,f=n.memoizedState,s.state=f,Ss(n,r,s,i);var y=n.memoizedState;l!==c||f!==y||Qe.current||dt?(typeof m=="function"&&(Wa(n,t,m,r),y=n.memoizedState),(u=dt||Of(n,t,u,r,f,y,a)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(n.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(n.flags|=1024),r=!1)}return Ga(e,n,t,r,o,i)}function Ga(e,n,t,r,i,o){ig(e,n);var s=(n.flags&128)!==0;if(!r&&!s)return i&&Cf(n,t,!1),nt(e,n,o);r=n.stateNode,tv.current=n;var l=s&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&s?(n.child=$r(n,e.child,null,o),n.child=$r(n,null,l,o)):be(e,n,l,o),n.memoizedState=r.state,i&&Cf(n,t,!0),n.child}function og(e){var n=e.stateNode;n.pendingContext?kf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&kf(e,n.context,!1),qu(e,n.containerInfo)}function Bf(e,n,t,r,i){return Dr(),Yu(i),n.flags|=256,be(e,n,t,r),n.child}var Ka={dehydrated:null,treeContext:null,retryLane:0};function Za(e){return{baseLanes:e,cachePool:null,transitions:null}}function sg(e,n,t){var r=n.pendingProps,i=xe.current,o=!1,s=(n.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),fe(xe,i&1),e===null)return Va(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(s=r.children,e=r.fallback,o?(r=n.mode,o=n.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=tl(s,r,0,null),e=Wt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=Za(t),n.memoizedState=Ka,e):sc(n,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rv(e,n,s,r,l,i,t);if(o){o=r.fallback,s=n.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=a,n.deletions=null):(r=Ct(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ct(l,o):(o=Wt(o,s,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,s=e.child.memoizedState,s=s===null?Za(t):{baseLanes:s.baseLanes|t,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~t,n.memoizedState=Ka,r}return o=e.child,e=o.sibling,r=Ct(o,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function sc(e,n){return n=tl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Po(e,n,t,r){return r!==null&&Yu(r),$r(n,e.child,null,t),e=sc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rv(e,n,t,r,i,o,s){if(t)return n.flags&256?(n.flags&=-257,r=ql(Error(b(422))),Po(e,n,s,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=tl({mode:"visible",children:r.children},i,0,null),o=Wt(o,i,s,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,n.mode&1&&$r(n,e.child,null,s),n.child.memoizedState=Za(s),n.memoizedState=Ka,o);if(!(n.mode&1))return Po(e,n,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(b(419)),r=ql(o,r,void 0),Po(e,n,s,r)}if(l=(s&e.childLanes)!==0,Ye||l){if(r=Te,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,et(e,i),Ln(r,e,i,-1))}return dc(),r=ql(Error(b(421))),Po(e,n,s,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=mv.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,en=Nt(i.nextSibling),nn=n,ge=!0,En=null,e!==null&&(cn[fn++]=Qn,cn[fn++]=Gn,cn[fn++]=Gt,Qn=e.id,Gn=e.overflow,Gt=n),n=sc(n,r.children),n.flags|=4096,n)}function Vf(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ua(e.return,n,t)}function Jl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function lg(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(be(e,n,r.children,t),r=xe.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vf(e,t,n);else if(e.tag===19)Vf(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(fe(xe,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Es(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),Jl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Es(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}Jl(n,!0,t,null,o);break;case"together":Jl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Jo(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function nt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Zt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,t=Ct(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Ct(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function iv(e,n,t){switch(n.tag){case 3:og(n),Dr();break;case 5:zp(n);break;case 1:Ge(n.type)&&vs(n);break;case 4:qu(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;fe(_s,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(fe(xe,xe.current&1),n.flags|=128,null):t&n.child.childLanes?sg(e,n,t):(fe(xe,xe.current&1),e=nt(e,n,t),e!==null?e.sibling:null);fe(xe,xe.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return lg(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(xe,xe.current),r)break;return null;case 22:case 23:return n.lanes=0,rg(e,n,t)}return nt(e,n,t)}var ag,qa,ug,cg;ag=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};qa=function(){};ug=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,Bt(Dn.current);var o=null;switch(t){case"input":i=wa(e,i),r=wa(e,r),o=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),o=[];break;case"textarea":i=Sa(e,i),r=Sa(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ms)}ka(t,r);var s;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(t||(t={}),t[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(t||(t={}),t[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(t||(t={}),t[s]=a[s])}else t||(o||(o=[]),o.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&de("scroll",e),o||l===a||(o=[])):(o=o||[]).push(u,a))}t&&(o=o||[]).push("style",t);var u=o;(n.updateQueue=u)&&(n.flags|=4)}};cg=function(e,n,t,r){t!==r&&(n.flags|=4)};function si(e,n){if(!ge)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function ov(e,n,t){var r=n.pendingProps;switch(Wu(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return Ge(n.type)&&ys(),$e(n),null;case 3:return r=n.stateNode,Fr(),he(Qe),he(He),ec(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Lo(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,En!==null&&(su(En),En=null))),qa(e,n),$e(n),null;case 5:Ju(n);var i=Bt(Fi.current);if(t=n.type,e!==null&&n.stateNode!=null)ug(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(b(166));return $e(n),null}if(e=Bt(Dn.current),Lo(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[Rn]=n,r[Di]=o,e=(n.mode&1)!==0,t){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<hi.length;i++)de(hi[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":Zc(r,o),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},de("invalid",r);break;case"textarea":Jc(r,o),de("invalid",r)}ka(t,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Io(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Io(r.textContent,l,e),i=["children",""+l]):Ai.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&de("scroll",r)}switch(t){case"input":wo(r),qc(r,o,!0);break;case"textarea":wo(r),ef(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ms)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=$h(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(t,{is:r.is}):(e=s.createElement(t),t==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,t),e[Rn]=n,e[Di]=r,ag(e,n,!1,!1),n.stateNode=e;e:{switch(s=Ca(t,r),t){case"dialog":de("cancel",e),de("close",e),i=r;break;case"iframe":case"object":case"embed":de("load",e),i=r;break;case"video":case"audio":for(i=0;i<hi.length;i++)de(hi[i],e);i=r;break;case"source":de("error",e),i=r;break;case"img":case"image":case"link":de("error",e),de("load",e),i=r;break;case"details":de("toggle",e),i=r;break;case"input":Zc(e,r),i=wa(e,r),de("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),de("invalid",e);break;case"textarea":Jc(e,r),i=Sa(e,r),de("invalid",e);break;default:i=r}ka(t,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?bh(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Fh(e,a)):o==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Ii(e,a):typeof a=="number"&&Ii(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ai.hasOwnProperty(o)?a!=null&&o==="onScroll"&&de("scroll",e):a!=null&&Mu(e,o,a,s))}switch(t){case"input":wo(e),qc(e,r,!1);break;case"textarea":wo(e),ef(e);break;case"option":r.value!=null&&e.setAttribute("value",""+It(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Ar(e,!!r.multiple,o,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ms)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return $e(n),null;case 6:if(e&&n.stateNode!=null)cg(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(b(166));if(t=Bt(Fi.current),Bt(Dn.current),Lo(n)){if(r=n.stateNode,t=n.memoizedProps,r[Rn]=n,(o=r.nodeValue!==t)&&(e=nn,e!==null))switch(e.tag){case 3:Io(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[Rn]=n,n.stateNode=r}return $e(n),null;case 13:if(he(xe),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&en!==null&&n.mode&1&&!(n.flags&128))Ip(),Dr(),n.flags|=98560,o=!1;else if(o=Lo(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Rn]=n}else Dr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;$e(n),o=!1}else En!==null&&(su(En),En=null),o=!0;if(!o)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||xe.current&1?Le===0&&(Le=3):dc())),n.updateQueue!==null&&(n.flags|=4),$e(n),null);case 4:return Fr(),qa(e,n),e===null&&Ri(n.stateNode.containerInfo),$e(n),null;case 10:return Gu(n.type._context),$e(n),null;case 17:return Ge(n.type)&&ys(),$e(n),null;case 19:if(he(xe),o=n.memoizedState,o===null)return $e(n),null;if(r=(n.flags&128)!==0,s=o.rendering,s===null)if(r)si(o,!1);else{if(Le!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(s=Es(e),s!==null){for(n.flags|=128,si(o,!1),r=s.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return fe(xe,xe.current&1|2),n.child}e=e.sibling}o.tail!==null&&Se()>br&&(n.flags|=128,r=!0,si(o,!1),n.lanes=4194304)}else{if(!r)if(e=Es(s),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),si(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ge)return $e(n),null}else 2*Se()-o.renderingStartTime>br&&t!==1073741824&&(n.flags|=128,r=!0,si(o,!1),n.lanes=4194304);o.isBackwards?(s.sibling=n.child,n.child=s):(t=o.last,t!==null?t.sibling=s:n.child=s,o.last=s)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=Se(),n.sibling=null,t=xe.current,fe(xe,r?t&1|2:t&1),n):($e(n),null);case 22:case 23:return fc(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?qe&1073741824&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function sv(e,n){switch(Wu(n),n.tag){case 1:return Ge(n.type)&&ys(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Fr(),he(Qe),he(He),ec(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Ju(n),null;case 13:if(he(xe),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));Dr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return he(xe),null;case 4:return Fr(),null;case 10:return Gu(n.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var To=!1,Fe=!1,lv=typeof WeakSet=="function"?WeakSet:Set,X=null;function Nr(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){Ne(e,n,r)}else t.current=null}function Ja(e,n,t){try{t()}catch(r){Ne(e,n,r)}}var Uf=!1;function av(e,n){if(ja=hs,e=gp(),Vu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var s=0,l=-1,a=-1,u=0,d=0,c=e,f=null;n:for(;;){for(var m;c!==t||i!==0&&c.nodeType!==3||(l=s+i),c!==o||r!==0&&c.nodeType!==3||(a=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(m=c.firstChild)!==null;)f=c,c=m;for(;;){if(c===e)break n;if(f===t&&++u===i&&(l=s),f===o&&++d===r&&(a=s),(m=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=m}t=l===-1||a===-1?null:{start:l,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Da={focusedElem:e,selectionRange:t},hs=!1,X=n;X!==null;)if(n=X,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,X=e;else for(;X!==null;){n=X;try{var y=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,_=y.memoizedState,p=n.stateNode,g=p.getSnapshotBeforeUpdate(n.elementType===n.type?w:_n(n.type,w),_);p.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(v){Ne(n,n.return,v)}if(e=n.sibling,e!==null){e.return=n.return,X=e;break}X=n.return}return y=Uf,Uf=!1,y}function Ni(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Ja(n,t,o)}i=i.next}while(i!==r)}}function el(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function eu(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Rn],delete n[Di],delete n[Ha],delete n[U1],delete n[W1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dg(e){return e.tag===5||e.tag===3||e.tag===4}function Wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ms));else if(r!==4&&(e=e.child,e!==null))for(nu(e,n,t),e=e.sibling;e!==null;)nu(e,n,t),e=e.sibling}function tu(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tu(e,n,t),e=e.sibling;e!==null;)tu(e,n,t),e=e.sibling}var ze=null,Nn=!1;function at(e,n,t){for(t=t.child;t!==null;)hg(e,n,t),t=t.sibling}function hg(e,n,t){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(Ys,t)}catch{}switch(t.tag){case 5:Fe||Nr(t,n);case 6:var r=ze,i=Nn;ze=null,at(e,n,t),ze=r,Nn=i,ze!==null&&(Nn?(e=ze,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ze.removeChild(t.stateNode));break;case 18:ze!==null&&(Nn?(e=ze,t=t.stateNode,e.nodeType===8?Yl(e.parentNode,t):e.nodeType===1&&Yl(e,t),Ti(e)):Yl(ze,t.stateNode));break;case 4:r=ze,i=Nn,ze=t.stateNode.containerInfo,Nn=!0,at(e,n,t),ze=r,Nn=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Ja(t,n,s),i=i.next}while(i!==r)}at(e,n,t);break;case 1:if(!Fe&&(Nr(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){Ne(t,n,l)}at(e,n,t);break;case 21:at(e,n,t);break;case 22:t.mode&1?(Fe=(r=Fe)||t.memoizedState!==null,at(e,n,t),Fe=r):at(e,n,t);break;default:at(e,n,t)}}function Yf(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new lv),n.forEach(function(r){var i=yv.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function wn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,s=n,l=s;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,Nn=!1;break e;case 3:ze=l.stateNode.containerInfo,Nn=!0;break e;case 4:ze=l.stateNode.containerInfo,Nn=!0;break e}l=l.return}if(ze===null)throw Error(b(160));hg(o,s,i),ze=null,Nn=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Ne(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)pg(n,e),n=n.sibling}function pg(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wn(n,e),Tn(e),r&4){try{Ni(3,e,e.return),el(3,e)}catch(w){Ne(e,e.return,w)}try{Ni(5,e,e.return)}catch(w){Ne(e,e.return,w)}}break;case 1:wn(n,e),Tn(e),r&512&&t!==null&&Nr(t,t.return);break;case 5:if(wn(n,e),Tn(e),r&512&&t!==null&&Nr(t,t.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(w){Ne(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=t!==null?t.memoizedProps:o,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&jh(i,o),Ca(l,s);var u=Ca(l,o);for(s=0;s<a.length;s+=2){var d=a[s],c=a[s+1];d==="style"?bh(i,c):d==="dangerouslySetInnerHTML"?Fh(i,c):d==="children"?Ii(i,c):Mu(i,d,c,u)}switch(l){case"input":_a(i,o);break;case"textarea":Dh(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Ar(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Ar(i,!!o.multiple,o.defaultValue,!0):Ar(i,!!o.multiple,o.multiple?[]:"",!1))}i[Di]=o}catch(w){Ne(e,e.return,w)}}break;case 6:if(wn(n,e),Tn(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){Ne(e,e.return,w)}}break;case 3:if(wn(n,e),Tn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ti(n.containerInfo)}catch(w){Ne(e,e.return,w)}break;case 4:wn(n,e),Tn(e);break;case 13:wn(n,e),Tn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(uc=Se())),r&4&&Yf(e);break;case 22:if(d=t!==null&&t.memoizedState!==null,e.mode&1?(Fe=(u=Fe)||d,wn(n,e),Fe=u):wn(n,e),Tn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(X=e,d=e.child;d!==null;){for(c=X=d;X!==null;){switch(f=X,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ni(4,f,f.return);break;case 1:Nr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,t=f.return;try{n=r,y.props=n.memoizedProps,y.state=n.memoizedState,y.componentWillUnmount()}catch(w){Ne(r,t,w)}}break;case 5:Nr(f,f.return);break;case 22:if(f.memoizedState!==null){Qf(c);continue}}m!==null?(m.return=f,X=m):Qf(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=c.stateNode,a=c.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Hh("display",s))}catch(w){Ne(e,e.return,w)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(w){Ne(e,e.return,w)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:wn(n,e),Tn(e),r&4&&Yf(e);break;case 21:break;default:wn(n,e),Tn(e)}}function Tn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(dg(t)){var r=t;break e}t=t.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var o=Wf(e);tu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Wf(e);nu(e,l,s);break;default:throw Error(b(161))}}catch(a){Ne(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function uv(e,n,t){X=e,gg(e)}function gg(e,n,t){for(var r=(e.mode&1)!==0;X!==null;){var i=X,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||To;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Fe;l=To;var u=Fe;if(To=s,(Fe=a)&&!u)for(X=i;X!==null;)s=X,a=s.child,s.tag===22&&s.memoizedState!==null?Gf(i):a!==null?(a.return=s,X=a):Gf(i);for(;o!==null;)X=o,gg(o),o=o.sibling;X=i,To=l,Fe=u}Xf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,X=o):Xf(e)}}function Xf(e){for(;X!==null;){var n=X;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Fe||el(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Fe)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:_n(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Pf(n,o,r);break;case 3:var s=n.updateQueue;if(s!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Pf(n,s,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Ti(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Fe||n.flags&512&&eu(n)}catch(f){Ne(n,n.return,f)}}if(n===e){X=null;break}if(t=n.sibling,t!==null){t.return=n.return,X=t;break}X=n.return}}function Qf(e){for(;X!==null;){var n=X;if(n===e){X=null;break}var t=n.sibling;if(t!==null){t.return=n.return,X=t;break}X=n.return}}function Gf(e){for(;X!==null;){var n=X;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{el(4,n)}catch(a){Ne(n,t,a)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(a){Ne(n,i,a)}}var o=n.return;try{eu(n)}catch(a){Ne(n,o,a)}break;case 5:var s=n.return;try{eu(n)}catch(a){Ne(n,s,a)}}}catch(a){Ne(n,n.return,a)}if(n===e){X=null;break}var l=n.sibling;if(l!==null){l.return=n.return,X=l;break}X=n.return}}var cv=Math.ceil,As=rt.ReactCurrentDispatcher,lc=rt.ReactCurrentOwner,hn=rt.ReactCurrentBatchConfig,ae=0,Te=null,Ce=null,Oe=0,qe=0,Sr=Pt(0),Le=0,Vi=null,Zt=0,nl=0,ac=0,Si=null,We=null,uc=0,br=1/0,Yn=null,Is=!1,ru=null,Et=null,zo=!1,yt=null,Ls=0,Ei=0,iu=null,es=-1,ns=0;function Be(){return ae&6?Se():es!==-1?es:es=Se()}function kt(e){return e.mode&1?ae&2&&Oe!==0?Oe&-Oe:X1.transition!==null?(ns===0&&(ns=Jh()),ns):(e=ue,e!==0||(e=window.event,e=e===void 0?16:sp(e.type)),e):1}function Ln(e,n,t,r){if(50<Ei)throw Ei=0,iu=null,Error(b(185));no(e,t,r),(!(ae&2)||e!==Te)&&(e===Te&&(!(ae&2)&&(nl|=t),Le===4&&pt(e,Oe)),Ke(e,r),t===1&&ae===0&&!(n.mode&1)&&(br=Se()+500,Zs&&Tt()))}function Ke(e,n){var t=e.callbackNode;Xy(e,n);var r=ds(e,e===Te?Oe:0);if(r===0)t!==null&&rf(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&rf(t),n===1)e.tag===0?Y1(Kf.bind(null,e)):kp(Kf.bind(null,e)),B1(function(){!(ae&6)&&Tt()}),t=null;else{switch(ep(r)){case 1:t=Ru;break;case 4:t=Zh;break;case 16:t=fs;break;case 536870912:t=qh;break;default:t=fs}t=Sg(t,mg.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function mg(e,n){if(es=-1,ns=0,ae&6)throw Error(b(327));var t=e.callbackNode;if(Tr()&&e.callbackNode!==t)return null;var r=ds(e,e===Te?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Ms(e,r);else{n=r;var i=ae;ae|=2;var o=vg();(Te!==e||Oe!==n)&&(Yn=null,br=Se()+500,Ut(e,n));do try{hv();break}catch(l){yg(e,l)}while(!0);Qu(),As.current=o,ae=i,Ce!==null?n=0:(Te=null,Oe=0,n=Le)}if(n!==0){if(n===2&&(i=Pa(e),i!==0&&(r=i,n=ou(e,i))),n===1)throw t=Vi,Ut(e,0),pt(e,r),Ke(e,Se()),t;if(n===6)pt(e,r);else{if(i=e.current.alternate,!(r&30)&&!fv(i)&&(n=Ms(e,r),n===2&&(o=Pa(e),o!==0&&(r=o,n=ou(e,o))),n===1))throw t=Vi,Ut(e,0),pt(e,r),Ke(e,Se()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(b(345));case 2:jt(e,We,Yn);break;case 3:if(pt(e,r),(r&130023424)===r&&(n=uc+500-Se(),10<n)){if(ds(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fa(jt.bind(null,e,We,Yn),n);break}jt(e,We,Yn);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var s=31-In(r);o=1<<s,s=n[s],s>i&&(i=s),r&=~o}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cv(r/1960))-r,10<r){e.timeoutHandle=Fa(jt.bind(null,e,We,Yn),r);break}jt(e,We,Yn);break;case 5:jt(e,We,Yn);break;default:throw Error(b(329))}}}return Ke(e,Se()),e.callbackNode===t?mg.bind(null,e):null}function ou(e,n){var t=Si;return e.current.memoizedState.isDehydrated&&(Ut(e,n).flags|=256),e=Ms(e,n),e!==2&&(n=We,We=t,n!==null&&su(n)),e}function su(e){We===null?We=e:We.push.apply(We,e)}function fv(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!Mn(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function pt(e,n){for(n&=~ac,n&=~nl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-In(n),r=1<<t;e[t]=-1,n&=~r}}function Kf(e){if(ae&6)throw Error(b(327));Tr();var n=ds(e,0);if(!(n&1))return Ke(e,Se()),null;var t=Ms(e,n);if(e.tag!==0&&t===2){var r=Pa(e);r!==0&&(n=r,t=ou(e,r))}if(t===1)throw t=Vi,Ut(e,0),pt(e,n),Ke(e,Se()),t;if(t===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,jt(e,We,Yn),Ke(e,Se()),null}function cc(e,n){var t=ae;ae|=1;try{return e(n)}finally{ae=t,ae===0&&(br=Se()+500,Zs&&Tt())}}function qt(e){yt!==null&&yt.tag===0&&!(ae&6)&&Tr();var n=ae;ae|=1;var t=hn.transition,r=ue;try{if(hn.transition=null,ue=1,e)return e()}finally{ue=r,hn.transition=t,ae=n,!(ae&6)&&Tt()}}function fc(){qe=Sr.current,he(Sr)}function Ut(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,b1(t)),Ce!==null)for(t=Ce.return;t!==null;){var r=t;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ys();break;case 3:Fr(),he(Qe),he(He),ec();break;case 5:Ju(r);break;case 4:Fr();break;case 13:he(xe);break;case 19:he(xe);break;case 10:Gu(r.type._context);break;case 22:case 23:fc()}t=t.return}if(Te=e,Ce=e=Ct(e.current,null),Oe=qe=n,Le=0,Vi=null,ac=nl=Zt=0,We=Si=null,bt!==null){for(n=0;n<bt.length;n++)if(t=bt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}t.pending=r}bt=null}return e}function yg(e,n){do{var t=Ce;try{if(Qu(),Zo.current=Cs,ks){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ks=!1}if(Kt=0,Pe=Ie=we=null,_i=!1,Hi=0,lc.current=null,t===null||t.return===null){Le=1,Vi=n,Ce=null;break}e:{var o=e,s=t.return,l=t,a=n;if(n=Oe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Df(s);if(m!==null){m.flags&=-257,$f(m,s,l,o,n),m.mode&1&&jf(o,u,n),n=m,a=u;var y=n.updateQueue;if(y===null){var w=new Set;w.add(a),n.updateQueue=w}else y.add(a);break e}else{if(!(n&1)){jf(o,u,n),dc();break e}a=Error(b(426))}}else if(ge&&l.mode&1){var _=Df(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),$f(_,s,l,o,n),Yu(Hr(a,l));break e}}o=a=Hr(a,l),Le!==4&&(Le=2),Si===null?Si=[o]:Si.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var p=eg(o,a,n);Mf(o,p);break e;case 1:l=a;var g=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Et===null||!Et.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var v=ng(o,l,n);Mf(o,v);break e}}o=o.return}while(o!==null)}wg(t)}catch(N){n=N,Ce===t&&t!==null&&(Ce=t=t.return);continue}break}while(!0)}function vg(){var e=As.current;return As.current=Cs,e===null?Cs:e}function dc(){(Le===0||Le===3||Le===2)&&(Le=4),Te===null||!(Zt&268435455)&&!(nl&268435455)||pt(Te,Oe)}function Ms(e,n){var t=ae;ae|=2;var r=vg();(Te!==e||Oe!==n)&&(Yn=null,Ut(e,n));do try{dv();break}catch(i){yg(e,i)}while(!0);if(Qu(),ae=t,As.current=r,Ce!==null)throw Error(b(261));return Te=null,Oe=0,Le}function dv(){for(;Ce!==null;)xg(Ce)}function hv(){for(;Ce!==null&&!$y();)xg(Ce)}function xg(e){var n=Ng(e.alternate,e,qe);e.memoizedProps=e.pendingProps,n===null?wg(e):Ce=n,lc.current=null}function wg(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=sv(t,n),t!==null){t.flags&=32767,Ce=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Le=6,Ce=null;return}}else if(t=ov(t,n,qe),t!==null){Ce=t;return}if(n=n.sibling,n!==null){Ce=n;return}Ce=n=e}while(n!==null);Le===0&&(Le=5)}function jt(e,n,t){var r=ue,i=hn.transition;try{hn.transition=null,ue=1,pv(e,n,t,r)}finally{hn.transition=i,ue=r}return null}function pv(e,n,t,r){do Tr();while(yt!==null);if(ae&6)throw Error(b(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Qy(e,o),e===Te&&(Ce=Te=null,Oe=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||zo||(zo=!0,Sg(fs,function(){return Tr(),null})),o=(t.flags&15990)!==0,t.subtreeFlags&15990||o){o=hn.transition,hn.transition=null;var s=ue;ue=1;var l=ae;ae|=4,lc.current=null,av(e,t),pg(t,e),O1(Da),hs=!!ja,Da=ja=null,e.current=t,uv(t),Fy(),ae=l,ue=s,hn.transition=o}else e.current=t;if(zo&&(zo=!1,yt=e,Ls=i),o=e.pendingLanes,o===0&&(Et=null),By(t.stateNode),Ke(e,Se()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Is)throw Is=!1,e=ru,ru=null,e;return Ls&1&&e.tag!==0&&Tr(),o=e.pendingLanes,o&1?e===iu?Ei++:(Ei=0,iu=e):Ei=0,Tt(),null}function Tr(){if(yt!==null){var e=ep(Ls),n=hn.transition,t=ue;try{if(hn.transition=null,ue=16>e?16:e,yt===null)var r=!1;else{if(e=yt,yt=null,Ls=0,ae&6)throw Error(b(331));var i=ae;for(ae|=4,X=e.current;X!==null;){var o=X,s=o.child;if(X.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(X=u;X!==null;){var d=X;switch(d.tag){case 0:case 11:case 15:Ni(8,d,o)}var c=d.child;if(c!==null)c.return=d,X=c;else for(;X!==null;){d=X;var f=d.sibling,m=d.return;if(fg(d),d===u){X=null;break}if(f!==null){f.return=m,X=f;break}X=m}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}X=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,X=s;else e:for(;X!==null;){if(o=X,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ni(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,X=p;break e}X=o.return}}var g=e.current;for(X=g;X!==null;){s=X;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,X=h;else e:for(s=g;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:el(9,l)}}catch(N){Ne(l,l.return,N)}if(l===s){X=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,X=v;break e}X=l.return}}if(ae=i,Tt(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(Ys,e)}catch{}r=!0}return r}finally{ue=t,hn.transition=n}}return!1}function Zf(e,n,t){n=Hr(t,n),n=eg(e,n,1),e=St(e,n,1),n=Be(),e!==null&&(no(e,1,n),Ke(e,n))}function Ne(e,n,t){if(e.tag===3)Zf(e,e,t);else for(;n!==null;){if(n.tag===3){Zf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=Hr(t,e),e=ng(n,e,1),n=St(n,e,1),e=Be(),n!==null&&(no(n,1,e),Ke(n,e));break}}n=n.return}}function gv(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Be(),e.pingedLanes|=e.suspendedLanes&t,Te===e&&(Oe&t)===t&&(Le===4||Le===3&&(Oe&130023424)===Oe&&500>Se()-uc?Ut(e,0):ac|=t),Ke(e,n)}function _g(e,n){n===0&&(e.mode&1?(n=So,So<<=1,!(So&130023424)&&(So=4194304)):n=1);var t=Be();e=et(e,n),e!==null&&(no(e,n,t),Ke(e,t))}function mv(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_g(e,t)}function yv(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(n),_g(e,t)}var Ng;Ng=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Qe.current)Ye=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return Ye=!1,iv(e,n,t);Ye=!!(e.flags&131072)}else Ye=!1,ge&&n.flags&1048576&&Cp(n,ws,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Jo(e,n),e=n.pendingProps;var i=jr(n,He.current);Pr(n,t),i=tc(null,n,r,e,i,t);var o=rc();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Ge(r)?(o=!0,vs(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(n),i.updater=Js,n.stateNode=i,i._reactInternals=n,Ya(n,r,e,t),n=Ga(null,n,r,!0,o,t)):(n.tag=0,ge&&o&&Uu(n),be(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Jo(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=xv(r),e=_n(r,e),i){case 0:n=Qa(null,n,r,e,t);break e;case 1:n=bf(null,n,r,e,t);break e;case 11:n=Ff(null,n,r,e,t);break e;case 14:n=Hf(null,n,r,_n(r.type,e),t);break e}throw Error(b(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Qa(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),bf(e,n,r,i,t);case 3:e:{if(og(n),e===null)throw Error(b(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Tp(e,n),Ss(n,r,null,t);var s=n.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Hr(Error(b(423)),n),n=Bf(e,n,r,t,i);break e}else if(r!==i){i=Hr(Error(b(424)),n),n=Bf(e,n,r,t,i);break e}else for(en=Nt(n.stateNode.containerInfo.firstChild),nn=n,ge=!0,En=null,t=Mp(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Dr(),r===i){n=nt(e,n,t);break e}be(e,n,r,t)}n=n.child}return n;case 5:return zp(n),e===null&&Va(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,$a(r,i)?s=null:o!==null&&$a(r,o)&&(n.flags|=32),ig(e,n),be(e,n,s,t),n.child;case 6:return e===null&&Va(n),null;case 13:return sg(e,n,t);case 4:return qu(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=$r(n,null,r,t):be(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Ff(e,n,r,i,t);case 7:return be(e,n,n.pendingProps,t),n.child;case 8:return be(e,n,n.pendingProps.children,t),n.child;case 12:return be(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,s=i.value,fe(_s,r._currentValue),r._currentValue=s,o!==null)if(Mn(o.value,s)){if(o.children===i.children&&!Qe.current){n=nt(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Zn(-1,t&-t),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Ua(o.return,t,n),l.lanes|=t;break}a=a.next}}else if(o.tag===10)s=o.type===n.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(b(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Ua(s,t,n),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===n){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}be(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Pr(n,t),i=gn(i),r=r(i),n.flags|=1,be(e,n,r,t),n.child;case 14:return r=n.type,i=_n(r,n.pendingProps),i=_n(r.type,i),Hf(e,n,r,i,t);case 15:return tg(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:_n(r,i),Jo(e,n),n.tag=1,Ge(r)?(e=!0,vs(n)):e=!1,Pr(n,t),Jp(n,r,i),Ya(n,r,i,t),Ga(null,n,r,!0,e,t);case 19:return lg(e,n,t);case 22:return rg(e,n,t)}throw Error(b(156,n.tag))};function Sg(e,n){return Kh(e,n)}function vv(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dn(e,n,t,r){return new vv(e,n,t,r)}function hc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xv(e){if(typeof e=="function")return hc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tu)return 11;if(e===zu)return 14}return 2}function Ct(e,n){var t=e.alternate;return t===null?(t=dn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ts(e,n,t,r,i,o){var s=2;if(r=e,typeof e=="function")hc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case hr:return Wt(t.children,i,o,n);case Pu:s=8,i|=8;break;case ma:return e=dn(12,t,n,i|2),e.elementType=ma,e.lanes=o,e;case ya:return e=dn(13,t,n,i),e.elementType=ya,e.lanes=o,e;case va:return e=dn(19,t,n,i),e.elementType=va,e.lanes=o,e;case zh:return tl(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ph:s=10;break e;case Th:s=9;break e;case Tu:s=11;break e;case zu:s=14;break e;case ft:s=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=dn(s,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function Wt(e,n,t,r){return e=dn(7,e,r,n),e.lanes=t,e}function tl(e,n,t,r){return e=dn(22,e,r,n),e.elementType=zh,e.lanes=t,e.stateNode={isHidden:!1},e}function ea(e,n,t){return e=dn(6,e,null,n),e.lanes=t,e}function na(e,n,t){return n=dn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function wv(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rl(0),this.expirationTimes=Rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pc(e,n,t,r,i,o,s,l,a){return e=new wv(e,n,t,l,a),n===1?(n=1,o===!0&&(n|=8)):n=0,o=dn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(o),e}function _v(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Eg(e){if(!e)return Lt;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Ge(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var t=e.type;if(Ge(t))return Ep(e,t,n)}return n}function kg(e,n,t,r,i,o,s,l,a){return e=pc(t,r,!0,e,i,o,s,l,a),e.context=Eg(null),t=e.current,r=Be(),i=kt(t),o=Zn(r,i),o.callback=n??null,St(t,o,i),e.current.lanes=i,no(e,i,r),Ke(e,r),e}function rl(e,n,t,r){var i=n.current,o=Be(),s=kt(i);return t=Eg(t),n.context===null?n.context=t:n.pendingContext=t,n=Zn(o,s),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=St(i,n,s),e!==null&&(Ln(e,i,s,o),Ko(e,i,s)),s}function Ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function gc(e,n){qf(e,n),(e=e.alternate)&&qf(e,n)}function Nv(){return null}var Cg=typeof reportError=="function"?reportError:function(e){console.error(e)};function mc(e){this._internalRoot=e}il.prototype.render=mc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));rl(e,n,null,null)};il.prototype.unmount=mc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qt(function(){rl(null,e,null,null)}),n[Jn]=null}};function il(e){this._internalRoot=e}il.prototype.unstable_scheduleHydration=function(e){if(e){var n=rp();e={blockedOn:null,target:e,priority:n};for(var t=0;t<ht.length&&n!==0&&n<ht[t].priority;t++);ht.splice(t,0,e),t===0&&op(e)}};function yc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Jf(){}function Sv(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ps(s);o.call(u)}}var s=kg(n,r,e,0,null,!1,!1,"",Jf);return e._reactRootContainer=s,e[Jn]=s.current,Ri(e.nodeType===8?e.parentNode:e),qt(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ps(a);l.call(u)}}var a=pc(e,0,!1,null,null,!1,!1,"",Jf);return e._reactRootContainer=a,e[Jn]=a.current,Ri(e.nodeType===8?e.parentNode:e),qt(function(){rl(n,a,t,r)}),a}function sl(e,n,t,r,i){var o=t._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=Ps(s);l.call(a)}}rl(n,s,e,i)}else s=Sv(t,n,e,i,r);return Ps(s)}np=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=di(n.pendingLanes);t!==0&&(ju(n,t|1),Ke(n,Se()),!(ae&6)&&(br=Se()+500,Tt()))}break;case 13:qt(function(){var r=et(e,1);if(r!==null){var i=Be();Ln(r,e,1,i)}}),gc(e,1)}};Du=function(e){if(e.tag===13){var n=et(e,134217728);if(n!==null){var t=Be();Ln(n,e,134217728,t)}gc(e,134217728)}};tp=function(e){if(e.tag===13){var n=kt(e),t=et(e,n);if(t!==null){var r=Be();Ln(t,e,n,r)}gc(e,n)}};rp=function(){return ue};ip=function(e,n){var t=ue;try{return ue=e,n()}finally{ue=t}};Ia=function(e,n,t){switch(n){case"input":if(_a(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Ks(r);if(!i)throw Error(b(90));Rh(r),_a(r,i)}}}break;case"textarea":Dh(e,t);break;case"select":n=t.value,n!=null&&Ar(e,!!t.multiple,n,!1)}};Uh=cc;Wh=qt;var Ev={usingClientEntryPoint:!1,Events:[ro,yr,Ks,Bh,Vh,cc]},li={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kv={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Qh(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Ys=Oo.inject(kv),jn=Oo}catch{}}on.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev;on.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(n))throw Error(b(200));return _v(e,n,null,t)};on.createRoot=function(e,n){if(!yc(e))throw Error(b(299));var t=!1,r="",i=Cg;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=pc(e,1,!1,null,null,t,!1,r,i),e[Jn]=n.current,Ri(e.nodeType===8?e.parentNode:e),new mc(n)};on.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Qh(n),e=e===null?null:e.stateNode,e};on.flushSync=function(e){return qt(e)};on.hydrate=function(e,n,t){if(!ol(n))throw Error(b(200));return sl(null,e,n,!0,t)};on.hydrateRoot=function(e,n,t){if(!yc(e))throw Error(b(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",s=Cg;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),n=kg(n,null,e,1,t??null,i,!1,o,s),e[Jn]=n.current,Ri(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new il(n)};on.render=function(e,n,t){if(!ol(n))throw Error(b(200));return sl(null,e,n,!1,t)};on.unmountComponentAtNode=function(e){if(!ol(e))throw Error(b(40));return e._reactRootContainer?(qt(function(){sl(null,null,e,!1,function(){e._reactRootContainer=null,e[Jn]=null})}),!0):!1};on.unstable_batchedUpdates=cc;on.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!ol(t))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return sl(e,n,t,!1,r)};on.version="18.3.1-next-f1338f8080-20240426";function Ag(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ag)}catch(e){console.error(e)}}Ag(),Ah.exports=on;var Cv=Ah.exports,ed=Cv;pa.createRoot=ed.createRoot,pa.hydrateRoot=ed.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ig=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=T.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},a)=>T.createElement("svg",{ref:a,...Iv,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Ig("lucide",i),...l},[...s.map(([u,d])=>T.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=(e,n)=>{const t=T.forwardRef(({className:r,...i},o)=>T.createElement(Lv,{ref:o,iconNode:n,className:Ig(`lucide-${Av(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ln("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ln("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ln("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ln("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ln("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ln("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=ln("PanelRight",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ln("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=ln("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=ln("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ln("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ln("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=ln("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);function Ae(e){if(typeof e=="string"||typeof e=="number")return""+e;let n="";if(Array.isArray(e))for(let t=0,r;t<e.length;t++)(r=Ae(e[t]))!==""&&(n+=(n&&" ")+r);else for(let t in e)e[t]&&(n+=(n&&" ")+t);return n}var Fv={value:()=>{}};function ll(){for(var e=0,n=arguments.length,t={},r;e<n;++e){if(!(r=arguments[e]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new rs(t)}function rs(e){this._=e}function Hv(e,n){return e.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}rs.prototype=ll.prototype={constructor:rs,on:function(e,n){var t=this._,r=Hv(e+"",t),i,o=-1,s=r.length;if(arguments.length<2){for(;++o<s;)if((i=(e=r[o]).type)&&(i=bv(t[i],e.name)))return i;return}if(n!=null&&typeof n!="function")throw new Error("invalid callback: "+n);for(;++o<s;)if(i=(e=r[o]).type)t[i]=rd(t[i],e.name,n);else if(n==null)for(i in t)t[i]=rd(t[i],e.name,null);return this},copy:function(){var e={},n=this._;for(var t in n)e[t]=n[t].slice();return new rs(e)},call:function(e,n){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,o;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(o=this._[e],r=0,i=o.length;r<i;++r)o[r].value.apply(n,t)},apply:function(e,n,t){if(!this._.hasOwnProperty(e))throw new Error("unknown type: "+e);for(var r=this._[e],i=0,o=r.length;i<o;++i)r[i].value.apply(n,t)}};function bv(e,n){for(var t=0,r=e.length,i;t<r;++t)if((i=e[t]).name===n)return i.value}function rd(e,n,t){for(var r=0,i=e.length;r<i;++r)if(e[r].name===n){e[r]=Fv,e=e.slice(0,r).concat(e.slice(r+1));break}return t!=null&&e.push({name:n,value:t}),e}var au="http://www.w3.org/1999/xhtml";const id={svg:"http://www.w3.org/2000/svg",xhtml:au,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function al(e){var n=e+="",t=n.indexOf(":");return t>=0&&(n=e.slice(0,t))!=="xmlns"&&(e=e.slice(t+1)),id.hasOwnProperty(n)?{space:id[n],local:e}:e}function Bv(e){return function(){var n=this.ownerDocument,t=this.namespaceURI;return t===au&&n.documentElement.namespaceURI===au?n.createElement(e):n.createElementNS(t,e)}}function Vv(e){return function(){return this.ownerDocument.createElementNS(e.space,e.local)}}function Mg(e){var n=al(e);return(n.local?Vv:Bv)(n)}function Uv(){}function vc(e){return e==null?Uv:function(){return this.querySelector(e)}}function Wv(e){typeof e!="function"&&(e=vc(e));for(var n=this._groups,t=n.length,r=new Array(t),i=0;i<t;++i)for(var o=n[i],s=o.length,l=r[i]=new Array(s),a,u,d=0;d<s;++d)(a=o[d])&&(u=e.call(a,a.__data__,d,o))&&("__data__"in a&&(u.__data__=a.__data__),l[d]=u);return new rn(r,this._parents)}function Yv(e){return e==null?[]:Array.isArray(e)?e:Array.from(e)}function Xv(){return[]}function Pg(e){return e==null?Xv:function(){return this.querySelectorAll(e)}}function Qv(e){return function(){return Yv(e.apply(this,arguments))}}function Gv(e){typeof e=="function"?e=Qv(e):e=Pg(e);for(var n=this._groups,t=n.length,r=[],i=[],o=0;o<t;++o)for(var s=n[o],l=s.length,a,u=0;u<l;++u)(a=s[u])&&(r.push(e.call(a,a.__data__,u,s)),i.push(a));return new rn(r,i)}function Tg(e){return function(){return this.matches(e)}}function zg(e){return function(n){return n.matches(e)}}var Kv=Array.prototype.find;function Zv(e){return function(){return Kv.call(this.children,e)}}function qv(){return this.firstElementChild}function Jv(e){return this.select(e==null?qv:Zv(typeof e=="function"?e:zg(e)))}var ex=Array.prototype.filter;function nx(){return Array.from(this.children)}function tx(e){return function(){return ex.call(this.children,e)}}function rx(e){return this.selectAll(e==null?nx:tx(typeof e=="function"?e:zg(e)))}function ix(e){typeof e!="function"&&(e=Tg(e));for(var n=this._groups,t=n.length,r=new Array(t),i=0;i<t;++i)for(var o=n[i],s=o.length,l=r[i]=[],a,u=0;u<s;++u)(a=o[u])&&e.call(a,a.__data__,u,o)&&l.push(a);return new rn(r,this._parents)}function Og(e){return new Array(e.length)}function ox(){return new rn(this._enter||this._groups.map(Og),this._parents)}function Ts(e,n){this.ownerDocument=e.ownerDocument,this.namespaceURI=e.namespaceURI,this._next=null,this._parent=e,this.__data__=n}Ts.prototype={constructor:Ts,appendChild:function(e){return this._parent.insertBefore(e,this._next)},insertBefore:function(e,n){return this._parent.insertBefore(e,n)},querySelector:function(e){return this._parent.querySelector(e)},querySelectorAll:function(e){return this._parent.querySelectorAll(e)}};function sx(e){return function(){return e}}function lx(e,n,t,r,i,o){for(var s=0,l,a=n.length,u=o.length;s<u;++s)(l=n[s])?(l.__data__=o[s],r[s]=l):t[s]=new Ts(e,o[s]);for(;s<a;++s)(l=n[s])&&(i[s]=l)}function ax(e,n,t,r,i,o,s){var l,a,u=new Map,d=n.length,c=o.length,f=new Array(d),m;for(l=0;l<d;++l)(a=n[l])&&(f[l]=m=s.call(a,a.__data__,l,n)+"",u.has(m)?i[l]=a:u.set(m,a));for(l=0;l<c;++l)m=s.call(e,o[l],l,o)+"",(a=u.get(m))?(r[l]=a,a.__data__=o[l],u.delete(m)):t[l]=new Ts(e,o[l]);for(l=0;l<d;++l)(a=n[l])&&u.get(f[l])===a&&(i[l]=a)}function ux(e){return e.__data__}function cx(e,n){if(!arguments.length)return Array.from(this,ux);var t=n?ax:lx,r=this._parents,i=this._groups;typeof e!="function"&&(e=sx(e));for(var o=i.length,s=new Array(o),l=new Array(o),a=new Array(o),u=0;u<o;++u){var d=r[u],c=i[u],f=c.length,m=fx(e.call(d,d&&d.__data__,u,r)),y=m.length,w=l[u]=new Array(y),_=s[u]=new Array(y),p=a[u]=new Array(f);t(d,c,w,_,p,m,n);for(var g=0,h=0,v,N;g<y;++g)if(v=w[g]){for(g>=h&&(h=g+1);!(N=_[h])&&++h<y;);v._next=N||null}}return s=new rn(s,r),s._enter=l,s._exit=a,s}function fx(e){return typeof e=="object"&&"length"in e?e:Array.from(e)}function dx(){return new rn(this._exit||this._groups.map(Og),this._parents)}function hx(e,n,t){var r=this.enter(),i=this,o=this.exit();return typeof e=="function"?(r=e(r),r&&(r=r.selection())):r=r.append(e+""),n!=null&&(i=n(i),i&&(i=i.selection())),t==null?o.remove():t(o),r&&i?r.merge(i).order():i}function px(e){for(var n=e.selection?e.selection():e,t=this._groups,r=n._groups,i=t.length,o=r.length,s=Math.min(i,o),l=new Array(i),a=0;a<s;++a)for(var u=t[a],d=r[a],c=u.length,f=l[a]=new Array(c),m,y=0;y<c;++y)(m=u[y]||d[y])&&(f[y]=m);for(;a<i;++a)l[a]=t[a];return new rn(l,this._parents)}function gx(){for(var e=this._groups,n=-1,t=e.length;++n<t;)for(var r=e[n],i=r.length-1,o=r[i],s;--i>=0;)(s=r[i])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function mx(e){e||(e=yx);function n(c,f){return c&&f?e(c.__data__,f.__data__):!c-!f}for(var t=this._groups,r=t.length,i=new Array(r),o=0;o<r;++o){for(var s=t[o],l=s.length,a=i[o]=new Array(l),u,d=0;d<l;++d)(u=s[d])&&(a[d]=u);a.sort(n)}return new rn(i,this._parents).order()}function yx(e,n){return e<n?-1:e>n?1:e>=n?0:NaN}function vx(){var e=arguments[0];return arguments[0]=this,e.apply(null,arguments),this}function xx(){return Array.from(this)}function wx(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var r=e[n],i=0,o=r.length;i<o;++i){var s=r[i];if(s)return s}return null}function _x(){let e=0;for(const n of this)++e;return e}function Nx(){return!this.node()}function Sx(e){for(var n=this._groups,t=0,r=n.length;t<r;++t)for(var i=n[t],o=0,s=i.length,l;o<s;++o)(l=i[o])&&e.call(l,l.__data__,o,i);return this}function Ex(e){return function(){this.removeAttribute(e)}}function kx(e){return function(){this.removeAttributeNS(e.space,e.local)}}function Cx(e,n){return function(){this.setAttribute(e,n)}}function Ax(e,n){return function(){this.setAttributeNS(e.space,e.local,n)}}function Ix(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttribute(e):this.setAttribute(e,t)}}function Lx(e,n){return function(){var t=n.apply(this,arguments);t==null?this.removeAttributeNS(e.space,e.local):this.setAttributeNS(e.space,e.local,t)}}function Mx(e,n){var t=al(e);if(arguments.length<2){var r=this.node();return t.local?r.getAttributeNS(t.space,t.local):r.getAttribute(t)}return this.each((n==null?t.local?kx:Ex:typeof n=="function"?t.local?Lx:Ix:t.local?Ax:Cx)(t,n))}function Rg(e){return e.ownerDocument&&e.ownerDocument.defaultView||e.document&&e||e.defaultView}function Px(e){return function(){this.style.removeProperty(e)}}function Tx(e,n,t){return function(){this.style.setProperty(e,n,t)}}function zx(e,n,t){return function(){var r=n.apply(this,arguments);r==null?this.style.removeProperty(e):this.style.setProperty(e,r,t)}}function Ox(e,n,t){return arguments.length>1?this.each((n==null?Px:typeof n=="function"?zx:Tx)(e,n,t??"")):Br(this.node(),e)}function Br(e,n){return e.style.getPropertyValue(n)||Rg(e).getComputedStyle(e,null).getPropertyValue(n)}function Rx(e){return function(){delete this[e]}}function jx(e,n){return function(){this[e]=n}}function Dx(e,n){return function(){var t=n.apply(this,arguments);t==null?delete this[e]:this[e]=t}}function $x(e,n){return arguments.length>1?this.each((n==null?Rx:typeof n=="function"?Dx:jx)(e,n)):this.node()[e]}function jg(e){return e.trim().split(/^|\s+/)}function xc(e){return e.classList||new Dg(e)}function Dg(e){this._node=e,this._names=jg(e.getAttribute("class")||"")}Dg.prototype={add:function(e){var n=this._names.indexOf(e);n<0&&(this._names.push(e),this._node.setAttribute("class",this._names.join(" ")))},remove:function(e){var n=this._names.indexOf(e);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(e){return this._names.indexOf(e)>=0}};function $g(e,n){for(var t=xc(e),r=-1,i=n.length;++r<i;)t.add(n[r])}function Fg(e,n){for(var t=xc(e),r=-1,i=n.length;++r<i;)t.remove(n[r])}function Fx(e){return function(){$g(this,e)}}function Hx(e){return function(){Fg(this,e)}}function bx(e,n){return function(){(n.apply(this,arguments)?$g:Fg)(this,e)}}function Bx(e,n){var t=jg(e+"");if(arguments.length<2){for(var r=xc(this.node()),i=-1,o=t.length;++i<o;)if(!r.contains(t[i]))return!1;return!0}return this.each((typeof n=="function"?bx:n?Fx:Hx)(t,n))}function Vx(){this.textContent=""}function Ux(e){return function(){this.textContent=e}}function Wx(e){return function(){var n=e.apply(this,arguments);this.textContent=n??""}}function Yx(e){return arguments.length?this.each(e==null?Vx:(typeof e=="function"?Wx:Ux)(e)):this.node().textContent}function Xx(){this.innerHTML=""}function Qx(e){return function(){this.innerHTML=e}}function Gx(e){return function(){var n=e.apply(this,arguments);this.innerHTML=n??""}}function Kx(e){return arguments.length?this.each(e==null?Xx:(typeof e=="function"?Gx:Qx)(e)):this.node().innerHTML}function Zx(){this.nextSibling&&this.parentNode.appendChild(this)}function qx(){return this.each(Zx)}function Jx(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ew(){return this.each(Jx)}function nw(e){var n=typeof e=="function"?e:Mg(e);return this.select(function(){return this.appendChild(n.apply(this,arguments))})}function tw(){return null}function rw(e,n){var t=typeof e=="function"?e:Mg(e),r=n==null?tw:typeof n=="function"?n:vc(n);return this.select(function(){return this.insertBefore(t.apply(this,arguments),r.apply(this,arguments)||null)})}function iw(){var e=this.parentNode;e&&e.removeChild(this)}function ow(){return this.each(iw)}function sw(){var e=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function lw(){var e=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(e,this.nextSibling):e}function aw(e){return this.select(e?lw:sw)}function uw(e){return arguments.length?this.property("__data__",e):this.node().__data__}function cw(e){return function(n){e.call(this,n,this.__data__)}}function fw(e){return e.trim().split(/^|\s+/).map(function(n){var t="",r=n.indexOf(".");return r>=0&&(t=n.slice(r+1),n=n.slice(0,r)),{type:n,name:t}})}function dw(e){return function(){var n=this.__on;if(n){for(var t=0,r=-1,i=n.length,o;t<i;++t)o=n[t],(!e.type||o.type===e.type)&&o.name===e.name?this.removeEventListener(o.type,o.listener,o.options):n[++r]=o;++r?n.length=r:delete this.__on}}}function hw(e,n,t){return function(){var r=this.__on,i,o=cw(n);if(r){for(var s=0,l=r.length;s<l;++s)if((i=r[s]).type===e.type&&i.name===e.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=o,i.options=t),i.value=n;return}}this.addEventListener(e.type,o,t),i={type:e.type,name:e.name,value:n,listener:o,options:t},r?r.push(i):this.__on=[i]}}function pw(e,n,t){var r=fw(e+""),i,o=r.length,s;if(arguments.length<2){var l=this.node().__on;if(l){for(var a=0,u=l.length,d;a<u;++a)for(i=0,d=l[a];i<o;++i)if((s=r[i]).type===d.type&&s.name===d.name)return d.value}return}for(l=n?hw:dw,i=0;i<o;++i)this.each(l(r[i],n,t));return this}function Hg(e,n,t){var r=Rg(e),i=r.CustomEvent;typeof i=="function"?i=new i(n,t):(i=r.document.createEvent("Event"),t?(i.initEvent(n,t.bubbles,t.cancelable),i.detail=t.detail):i.initEvent(n,!1,!1)),e.dispatchEvent(i)}function gw(e,n){return function(){return Hg(this,e,n)}}function mw(e,n){return function(){return Hg(this,e,n.apply(this,arguments))}}function yw(e,n){return this.each((typeof n=="function"?mw:gw)(e,n))}function*vw(){for(var e=this._groups,n=0,t=e.length;n<t;++n)for(var r=e[n],i=0,o=r.length,s;i<o;++i)(s=r[i])&&(yield s)}var bg=[null];function rn(e,n){this._groups=e,this._parents=n}function oo(){return new rn([[document.documentElement]],bg)}function xw(){return this}rn.prototype=oo.prototype={constructor:rn,select:Wv,selectAll:Gv,selectChild:Jv,selectChildren:rx,filter:ix,data:cx,enter:ox,exit:dx,join:hx,merge:px,selection:xw,order:gx,sort:mx,call:vx,nodes:xx,node:wx,size:_x,empty:Nx,each:Sx,attr:Mx,style:Ox,property:$x,classed:Bx,text:Yx,html:Kx,raise:qx,lower:ew,append:nw,insert:rw,remove:ow,clone:aw,datum:uw,on:pw,dispatch:yw,[Symbol.iterator]:vw};function Je(e){return typeof e=="string"?new rn([[document.querySelector(e)]],[document.documentElement]):new rn([[e]],bg)}function ww(e){let n;for(;n=e.sourceEvent;)e=n;return e}function Sn(e,n){if(e=ww(e),n===void 0&&(n=e.currentTarget),n){var t=n.ownerSVGElement||n;if(t.createSVGPoint){var r=t.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}if(n.getBoundingClientRect){var i=n.getBoundingClientRect();return[e.clientX-i.left-n.clientLeft,e.clientY-i.top-n.clientTop]}}return[e.pageX,e.pageY]}const _w={passive:!1},Ui={capture:!0,passive:!1};function ta(e){e.stopImmediatePropagation()}function zr(e){e.preventDefault(),e.stopImmediatePropagation()}function Bg(e){var n=e.document.documentElement,t=Je(e).on("dragstart.drag",zr,Ui);"onselectstart"in n?t.on("selectstart.drag",zr,Ui):(n.__noselect=n.style.MozUserSelect,n.style.MozUserSelect="none")}function Vg(e,n){var t=e.document.documentElement,r=Je(e).on("dragstart.drag",null);n&&(r.on("click.drag",zr,Ui),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in t?r.on("selectstart.drag",null):(t.style.MozUserSelect=t.__noselect,delete t.__noselect)}const Ro=e=>()=>e;function uu(e,{sourceEvent:n,subject:t,target:r,identifier:i,active:o,x:s,y:l,dx:a,dy:u,dispatch:d}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},subject:{value:t,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:l,enumerable:!0,configurable:!0},dx:{value:a,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:d}})}uu.prototype.on=function(){var e=this._.on.apply(this._,arguments);return e===this._?this:e};function Nw(e){return!e.ctrlKey&&!e.button}function Sw(){return this.parentNode}function Ew(e,n){return n??{x:e.x,y:e.y}}function kw(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ug(){var e=Nw,n=Sw,t=Ew,r=kw,i={},o=ll("start","drag","end"),s=0,l,a,u,d,c=0;function f(v){v.on("mousedown.drag",m).filter(r).on("touchstart.drag",_).on("touchmove.drag",p,_w).on("touchend.drag touchcancel.drag",g).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function m(v,N){if(!(d||!e.call(this,v,N))){var S=h(this,n.call(this,v,N),v,N,"mouse");S&&(Je(v.view).on("mousemove.drag",y,Ui).on("mouseup.drag",w,Ui),Bg(v.view),ta(v),u=!1,l=v.clientX,a=v.clientY,S("start",v))}}function y(v){if(zr(v),!u){var N=v.clientX-l,S=v.clientY-a;u=N*N+S*S>c}i.mouse("drag",v)}function w(v){Je(v.view).on("mousemove.drag mouseup.drag",null),Vg(v.view,u),zr(v),i.mouse("end",v)}function _(v,N){if(e.call(this,v,N)){var S=v.changedTouches,E=n.call(this,v,N),I=S.length,P,F;for(P=0;P<I;++P)(F=h(this,E,v,N,S[P].identifier,S[P]))&&(ta(v),F("start",v,S[P]))}}function p(v){var N=v.changedTouches,S=N.length,E,I;for(E=0;E<S;++E)(I=i[N[E].identifier])&&(zr(v),I("drag",v,N[E]))}function g(v){var N=v.changedTouches,S=N.length,E,I;for(d&&clearTimeout(d),d=setTimeout(function(){d=null},500),E=0;E<S;++E)(I=i[N[E].identifier])&&(ta(v),I("end",v,N[E]))}function h(v,N,S,E,I,P){var F=o.copy(),M=Sn(P||S,N),j,H,k;if((k=t.call(v,new uu("beforestart",{sourceEvent:S,target:f,identifier:I,active:s,x:M[0],y:M[1],dx:0,dy:0,dispatch:F}),E))!=null)return j=k.x-M[0]||0,H=k.y-M[1]||0,function z(L,R,C){var A=M,O;switch(L){case"start":i[I]=z,O=s++;break;case"end":delete i[I],--s;case"drag":M=Sn(C||R,N),O=s;break}F.call(L,v,new uu(L,{sourceEvent:R,subject:k,target:f,identifier:I,active:O,x:M[0]+j,y:M[1]+H,dx:M[0]-A[0],dy:M[1]-A[1],dispatch:F}),E)}}return f.filter=function(v){return arguments.length?(e=typeof v=="function"?v:Ro(!!v),f):e},f.container=function(v){return arguments.length?(n=typeof v=="function"?v:Ro(v),f):n},f.subject=function(v){return arguments.length?(t=typeof v=="function"?v:Ro(v),f):t},f.touchable=function(v){return arguments.length?(r=typeof v=="function"?v:Ro(!!v),f):r},f.on=function(){var v=o.on.apply(o,arguments);return v===o?f:v},f.clickDistance=function(v){return arguments.length?(c=(v=+v)*v,f):Math.sqrt(c)},f}function wc(e,n,t){e.prototype=n.prototype=t,t.constructor=e}function Wg(e,n){var t=Object.create(e.prototype);for(var r in n)t[r]=n[r];return t}function so(){}var Wi=.7,zs=1/Wi,Or="\\s*([+-]?\\d+)\\s*",Yi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",$n="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Cw=/^#([0-9a-f]{3,8})$/,Aw=new RegExp(`^rgb\\(${Or},${Or},${Or}\\)$`),Iw=new RegExp(`^rgb\\(${$n},${$n},${$n}\\)$`),Lw=new RegExp(`^rgba\\(${Or},${Or},${Or},${Yi}\\)$`),Mw=new RegExp(`^rgba\\(${$n},${$n},${$n},${Yi}\\)$`),Pw=new RegExp(`^hsl\\(${Yi},${$n},${$n}\\)$`),Tw=new RegExp(`^hsla\\(${Yi},${$n},${$n},${Yi}\\)$`),od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};wc(so,Jt,{copy(e){return Object.assign(new this.constructor,this,e)},displayable(){return this.rgb().displayable()},hex:sd,formatHex:sd,formatHex8:zw,formatHsl:Ow,formatRgb:ld,toString:ld});function sd(){return this.rgb().formatHex()}function zw(){return this.rgb().formatHex8()}function Ow(){return Yg(this).formatHsl()}function ld(){return this.rgb().formatRgb()}function Jt(e){var n,t;return e=(e+"").trim().toLowerCase(),(n=Cw.exec(e))?(t=n[1].length,n=parseInt(n[1],16),t===6?ad(n):t===3?new Xe(n>>8&15|n>>4&240,n>>4&15|n&240,(n&15)<<4|n&15,1):t===8?jo(n>>24&255,n>>16&255,n>>8&255,(n&255)/255):t===4?jo(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|n&240,((n&15)<<4|n&15)/255):null):(n=Aw.exec(e))?new Xe(n[1],n[2],n[3],1):(n=Iw.exec(e))?new Xe(n[1]*255/100,n[2]*255/100,n[3]*255/100,1):(n=Lw.exec(e))?jo(n[1],n[2],n[3],n[4]):(n=Mw.exec(e))?jo(n[1]*255/100,n[2]*255/100,n[3]*255/100,n[4]):(n=Pw.exec(e))?fd(n[1],n[2]/100,n[3]/100,1):(n=Tw.exec(e))?fd(n[1],n[2]/100,n[3]/100,n[4]):od.hasOwnProperty(e)?ad(od[e]):e==="transparent"?new Xe(NaN,NaN,NaN,0):null}function ad(e){return new Xe(e>>16&255,e>>8&255,e&255,1)}function jo(e,n,t,r){return r<=0&&(e=n=t=NaN),new Xe(e,n,t,r)}function Rw(e){return e instanceof so||(e=Jt(e)),e?(e=e.rgb(),new Xe(e.r,e.g,e.b,e.opacity)):new Xe}function cu(e,n,t,r){return arguments.length===1?Rw(e):new Xe(e,n,t,r??1)}function Xe(e,n,t,r){this.r=+e,this.g=+n,this.b=+t,this.opacity=+r}wc(Xe,cu,Wg(so,{brighter(e){return e=e==null?zs:Math.pow(zs,e),new Xe(this.r*e,this.g*e,this.b*e,this.opacity)},darker(e){return e=e==null?Wi:Math.pow(Wi,e),new Xe(this.r*e,this.g*e,this.b*e,this.opacity)},rgb(){return this},clamp(){return new Xe(Yt(this.r),Yt(this.g),Yt(this.b),Os(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ud,formatHex:ud,formatHex8:jw,formatRgb:cd,toString:cd}));function ud(){return`#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}`}function jw(){return`#${Vt(this.r)}${Vt(this.g)}${Vt(this.b)}${Vt((isNaN(this.opacity)?1:this.opacity)*255)}`}function cd(){const e=Os(this.opacity);return`${e===1?"rgb(":"rgba("}${Yt(this.r)}, ${Yt(this.g)}, ${Yt(this.b)}${e===1?")":`, ${e})`}`}function Os(e){return isNaN(e)?1:Math.max(0,Math.min(1,e))}function Yt(e){return Math.max(0,Math.min(255,Math.round(e)||0))}function Vt(e){return e=Yt(e),(e<16?"0":"")+e.toString(16)}function fd(e,n,t,r){return r<=0?e=n=t=NaN:t<=0||t>=1?e=n=NaN:n<=0&&(e=NaN),new kn(e,n,t,r)}function Yg(e){if(e instanceof kn)return new kn(e.h,e.s,e.l,e.opacity);if(e instanceof so||(e=Jt(e)),!e)return new kn;if(e instanceof kn)return e;e=e.rgb();var n=e.r/255,t=e.g/255,r=e.b/255,i=Math.min(n,t,r),o=Math.max(n,t,r),s=NaN,l=o-i,a=(o+i)/2;return l?(n===o?s=(t-r)/l+(t<r)*6:t===o?s=(r-n)/l+2:s=(n-t)/l+4,l/=a<.5?o+i:2-o-i,s*=60):l=a>0&&a<1?0:s,new kn(s,l,a,e.opacity)}function Dw(e,n,t,r){return arguments.length===1?Yg(e):new kn(e,n,t,r??1)}function kn(e,n,t,r){this.h=+e,this.s=+n,this.l=+t,this.opacity=+r}wc(kn,Dw,Wg(so,{brighter(e){return e=e==null?zs:Math.pow(zs,e),new kn(this.h,this.s,this.l*e,this.opacity)},darker(e){return e=e==null?Wi:Math.pow(Wi,e),new kn(this.h,this.s,this.l*e,this.opacity)},rgb(){var e=this.h%360+(this.h<0)*360,n=isNaN(e)||isNaN(this.s)?0:this.s,t=this.l,r=t+(t<.5?t:1-t)*n,i=2*t-r;return new Xe(ra(e>=240?e-240:e+120,i,r),ra(e,i,r),ra(e<120?e+240:e-120,i,r),this.opacity)},clamp(){return new kn(dd(this.h),Do(this.s),Do(this.l),Os(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const e=Os(this.opacity);return`${e===1?"hsl(":"hsla("}${dd(this.h)}, ${Do(this.s)*100}%, ${Do(this.l)*100}%${e===1?")":`, ${e})`}`}}));function dd(e){return e=(e||0)%360,e<0?e+360:e}function Do(e){return Math.max(0,Math.min(1,e||0))}function ra(e,n,t){return(e<60?n+(t-n)*e/60:e<180?t:e<240?n+(t-n)*(240-e)/60:n)*255}const _c=e=>()=>e;function $w(e,n){return function(t){return e+t*n}}function Fw(e,n,t){return e=Math.pow(e,t),n=Math.pow(n,t)-e,t=1/t,function(r){return Math.pow(e+r*n,t)}}function Hw(e){return(e=+e)==1?Xg:function(n,t){return t-n?Fw(n,t,e):_c(isNaN(n)?t:n)}}function Xg(e,n){var t=n-e;return t?$w(e,t):_c(isNaN(e)?n:e)}const Rs=function e(n){var t=Hw(n);function r(i,o){var s=t((i=cu(i)).r,(o=cu(o)).r),l=t(i.g,o.g),a=t(i.b,o.b),u=Xg(i.opacity,o.opacity);return function(d){return i.r=s(d),i.g=l(d),i.b=a(d),i.opacity=u(d),i+""}}return r.gamma=e,r}(1);function bw(e,n){n||(n=[]);var t=e?Math.min(n.length,e.length):0,r=n.slice(),i;return function(o){for(i=0;i<t;++i)r[i]=e[i]*(1-o)+n[i]*o;return r}}function Bw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Vw(e,n){var t=n?n.length:0,r=e?Math.min(t,e.length):0,i=new Array(r),o=new Array(t),s;for(s=0;s<r;++s)i[s]=ki(e[s],n[s]);for(;s<t;++s)o[s]=n[s];return function(l){for(s=0;s<r;++s)o[s]=i[s](l);return o}}function Uw(e,n){var t=new Date;return e=+e,n=+n,function(r){return t.setTime(e*(1-r)+n*r),t}}function On(e,n){return e=+e,n=+n,function(t){return e*(1-t)+n*t}}function Ww(e,n){var t={},r={},i;(e===null||typeof e!="object")&&(e={}),(n===null||typeof n!="object")&&(n={});for(i in n)i in e?t[i]=ki(e[i],n[i]):r[i]=n[i];return function(o){for(i in t)r[i]=t[i](o);return r}}var fu=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ia=new RegExp(fu.source,"g");function Yw(e){return function(){return e}}function Xw(e){return function(n){return e(n)+""}}function Qg(e,n){var t=fu.lastIndex=ia.lastIndex=0,r,i,o,s=-1,l=[],a=[];for(e=e+"",n=n+"";(r=fu.exec(e))&&(i=ia.exec(n));)(o=i.index)>t&&(o=n.slice(t,o),l[s]?l[s]+=o:l[++s]=o),(r=r[0])===(i=i[0])?l[s]?l[s]+=i:l[++s]=i:(l[++s]=null,a.push({i:s,x:On(r,i)})),t=ia.lastIndex;return t<n.length&&(o=n.slice(t),l[s]?l[s]+=o:l[++s]=o),l.length<2?a[0]?Xw(a[0].x):Yw(n):(n=a.length,function(u){for(var d=0,c;d<n;++d)l[(c=a[d]).i]=c.x(u);return l.join("")})}function ki(e,n){var t=typeof n,r;return n==null||t==="boolean"?_c(n):(t==="number"?On:t==="string"?(r=Jt(n))?(n=r,Rs):Qg:n instanceof Jt?Rs:n instanceof Date?Uw:Bw(n)?bw:Array.isArray(n)?Vw:typeof n.valueOf!="function"&&typeof n.toString!="function"||isNaN(n)?Ww:On)(e,n)}var hd=180/Math.PI,du={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Gg(e,n,t,r,i,o){var s,l,a;return(s=Math.sqrt(e*e+n*n))&&(e/=s,n/=s),(a=e*t+n*r)&&(t-=e*a,r-=n*a),(l=Math.sqrt(t*t+r*r))&&(t/=l,r/=l,a/=l),e*r<n*t&&(e=-e,n=-n,a=-a,s=-s),{translateX:i,translateY:o,rotate:Math.atan2(n,e)*hd,skewX:Math.atan(a)*hd,scaleX:s,scaleY:l}}var $o;function Qw(e){const n=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(e+"");return n.isIdentity?du:Gg(n.a,n.b,n.c,n.d,n.e,n.f)}function Gw(e){return e==null||($o||($o=document.createElementNS("http://www.w3.org/2000/svg","g")),$o.setAttribute("transform",e),!(e=$o.transform.baseVal.consolidate()))?du:(e=e.matrix,Gg(e.a,e.b,e.c,e.d,e.e,e.f))}function Kg(e,n,t,r){function i(u){return u.length?u.pop()+" ":""}function o(u,d,c,f,m,y){if(u!==c||d!==f){var w=m.push("translate(",null,n,null,t);y.push({i:w-4,x:On(u,c)},{i:w-2,x:On(d,f)})}else(c||f)&&m.push("translate("+c+n+f+t)}function s(u,d,c,f){u!==d?(u-d>180?d+=360:d-u>180&&(u+=360),f.push({i:c.push(i(c)+"rotate(",null,r)-2,x:On(u,d)})):d&&c.push(i(c)+"rotate("+d+r)}function l(u,d,c,f){u!==d?f.push({i:c.push(i(c)+"skewX(",null,r)-2,x:On(u,d)}):d&&c.push(i(c)+"skewX("+d+r)}function a(u,d,c,f,m,y){if(u!==c||d!==f){var w=m.push(i(m)+"scale(",null,",",null,")");y.push({i:w-4,x:On(u,c)},{i:w-2,x:On(d,f)})}else(c!==1||f!==1)&&m.push(i(m)+"scale("+c+","+f+")")}return function(u,d){var c=[],f=[];return u=e(u),d=e(d),o(u.translateX,u.translateY,d.translateX,d.translateY,c,f),s(u.rotate,d.rotate,c,f),l(u.skewX,d.skewX,c,f),a(u.scaleX,u.scaleY,d.scaleX,d.scaleY,c,f),u=d=null,function(m){for(var y=-1,w=f.length,_;++y<w;)c[(_=f[y]).i]=_.x(m);return c.join("")}}}var Kw=Kg(Qw,"px, ","px)","deg)"),Zw=Kg(Gw,", ",")",")"),qw=1e-12;function pd(e){return((e=Math.exp(e))+1/e)/2}function Jw(e){return((e=Math.exp(e))-1/e)/2}function e_(e){return((e=Math.exp(2*e))-1)/(e+1)}const is=function e(n,t,r){function i(o,s){var l=o[0],a=o[1],u=o[2],d=s[0],c=s[1],f=s[2],m=d-l,y=c-a,w=m*m+y*y,_,p;if(w<qw)p=Math.log(f/u)/n,_=function(E){return[l+E*m,a+E*y,u*Math.exp(n*E*p)]};else{var g=Math.sqrt(w),h=(f*f-u*u+r*w)/(2*u*t*g),v=(f*f-u*u-r*w)/(2*f*t*g),N=Math.log(Math.sqrt(h*h+1)-h),S=Math.log(Math.sqrt(v*v+1)-v);p=(S-N)/n,_=function(E){var I=E*p,P=pd(N),F=u/(t*g)*(P*e_(n*I+N)-Jw(N));return[l+F*m,a+F*y,u*P/pd(n*I+N)]}}return _.duration=p*1e3*n/Math.SQRT2,_}return i.rho=function(o){var s=Math.max(.001,+o),l=s*s,a=l*l;return e(s,l,a)},i}(Math.SQRT2,2,4);var Vr=0,pi=0,ai=0,Zg=1e3,js,gi,Ds=0,er=0,ul=0,Xi=typeof performance=="object"&&performance.now?performance:Date,qg=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(e){setTimeout(e,17)};function Nc(){return er||(qg(n_),er=Xi.now()+ul)}function n_(){er=0}function $s(){this._call=this._time=this._next=null}$s.prototype=Jg.prototype={constructor:$s,restart:function(e,n,t){if(typeof e!="function")throw new TypeError("callback is not a function");t=(t==null?Nc():+t)+(n==null?0:+n),!this._next&&gi!==this&&(gi?gi._next=this:js=this,gi=this),this._call=e,this._time=t,hu()},stop:function(){this._call&&(this._call=null,this._time=1/0,hu())}};function Jg(e,n,t){var r=new $s;return r.restart(e,n,t),r}function t_(){Nc(),++Vr;for(var e=js,n;e;)(n=er-e._time)>=0&&e._call.call(void 0,n),e=e._next;--Vr}function gd(){er=(Ds=Xi.now())+ul,Vr=pi=0;try{t_()}finally{Vr=0,i_(),er=0}}function r_(){var e=Xi.now(),n=e-Ds;n>Zg&&(ul-=n,Ds=e)}function i_(){for(var e,n=js,t,r=1/0;n;)n._call?(r>n._time&&(r=n._time),e=n,n=n._next):(t=n._next,n._next=null,n=e?e._next=t:js=t);gi=e,hu(r)}function hu(e){if(!Vr){pi&&(pi=clearTimeout(pi));var n=e-er;n>24?(e<1/0&&(pi=setTimeout(gd,e-Xi.now()-ul)),ai&&(ai=clearInterval(ai))):(ai||(Ds=Xi.now(),ai=setInterval(r_,Zg)),Vr=1,qg(gd))}}function md(e,n,t){var r=new $s;return n=n==null?0:+n,r.restart(i=>{r.stop(),e(i+n)},n,t),r}var o_=ll("start","end","cancel","interrupt"),s_=[],e0=0,yd=1,pu=2,os=3,vd=4,gu=5,ss=6;function cl(e,n,t,r,i,o){var s=e.__transition;if(!s)e.__transition={};else if(t in s)return;l_(e,t,{name:n,index:r,group:i,on:o_,tween:s_,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:e0})}function Sc(e,n){var t=Pn(e,n);if(t.state>e0)throw new Error("too late; already scheduled");return t}function Hn(e,n){var t=Pn(e,n);if(t.state>os)throw new Error("too late; already running");return t}function Pn(e,n){var t=e.__transition;if(!t||!(t=t[n]))throw new Error("transition not found");return t}function l_(e,n,t){var r=e.__transition,i;r[n]=t,t.timer=Jg(o,0,t.time);function o(u){t.state=yd,t.timer.restart(s,t.delay,t.time),t.delay<=u&&s(u-t.delay)}function s(u){var d,c,f,m;if(t.state!==yd)return a();for(d in r)if(m=r[d],m.name===t.name){if(m.state===os)return md(s);m.state===vd?(m.state=ss,m.timer.stop(),m.on.call("interrupt",e,e.__data__,m.index,m.group),delete r[d]):+d<n&&(m.state=ss,m.timer.stop(),m.on.call("cancel",e,e.__data__,m.index,m.group),delete r[d])}if(md(function(){t.state===os&&(t.state=vd,t.timer.restart(l,t.delay,t.time),l(u))}),t.state=pu,t.on.call("start",e,e.__data__,t.index,t.group),t.state===pu){for(t.state=os,i=new Array(f=t.tween.length),d=0,c=-1;d<f;++d)(m=t.tween[d].value.call(e,e.__data__,t.index,t.group))&&(i[++c]=m);i.length=c+1}}function l(u){for(var d=u<t.duration?t.ease.call(null,u/t.duration):(t.timer.restart(a),t.state=gu,1),c=-1,f=i.length;++c<f;)i[c].call(e,d);t.state===gu&&(t.on.call("end",e,e.__data__,t.index,t.group),a())}function a(){t.state=ss,t.timer.stop(),delete r[n];for(var u in r)return;delete e.__transition}}function ls(e,n){var t=e.__transition,r,i,o=!0,s;if(t){n=n==null?null:n+"";for(s in t){if((r=t[s]).name!==n){o=!1;continue}i=r.state>pu&&r.state<gu,r.state=ss,r.timer.stop(),r.on.call(i?"interrupt":"cancel",e,e.__data__,r.index,r.group),delete t[s]}o&&delete e.__transition}}function a_(e){return this.each(function(){ls(this,e)})}function u_(e,n){var t,r;return function(){var i=Hn(this,e),o=i.tween;if(o!==t){r=t=o;for(var s=0,l=r.length;s<l;++s)if(r[s].name===n){r=r.slice(),r.splice(s,1);break}}i.tween=r}}function c_(e,n,t){var r,i;if(typeof t!="function")throw new Error;return function(){var o=Hn(this,e),s=o.tween;if(s!==r){i=(r=s).slice();for(var l={name:n,value:t},a=0,u=i.length;a<u;++a)if(i[a].name===n){i[a]=l;break}a===u&&i.push(l)}o.tween=i}}function f_(e,n){var t=this._id;if(e+="",arguments.length<2){for(var r=Pn(this.node(),t).tween,i=0,o=r.length,s;i<o;++i)if((s=r[i]).name===e)return s.value;return null}return this.each((n==null?u_:c_)(t,e,n))}function Ec(e,n,t){var r=e._id;return e.each(function(){var i=Hn(this,r);(i.value||(i.value={}))[n]=t.apply(this,arguments)}),function(i){return Pn(i,r).value[n]}}function n0(e,n){var t;return(typeof n=="number"?On:n instanceof Jt?Rs:(t=Jt(n))?(n=t,Rs):Qg)(e,n)}function d_(e){return function(){this.removeAttribute(e)}}function h_(e){return function(){this.removeAttributeNS(e.space,e.local)}}function p_(e,n,t){var r,i=t+"",o;return function(){var s=this.getAttribute(e);return s===i?null:s===r?o:o=n(r=s,t)}}function g_(e,n,t){var r,i=t+"",o;return function(){var s=this.getAttributeNS(e.space,e.local);return s===i?null:s===r?o:o=n(r=s,t)}}function m_(e,n,t){var r,i,o;return function(){var s,l=t(this),a;return l==null?void this.removeAttribute(e):(s=this.getAttribute(e),a=l+"",s===a?null:s===r&&a===i?o:(i=a,o=n(r=s,l)))}}function y_(e,n,t){var r,i,o;return function(){var s,l=t(this),a;return l==null?void this.removeAttributeNS(e.space,e.local):(s=this.getAttributeNS(e.space,e.local),a=l+"",s===a?null:s===r&&a===i?o:(i=a,o=n(r=s,l)))}}function v_(e,n){var t=al(e),r=t==="transform"?Zw:n0;return this.attrTween(e,typeof n=="function"?(t.local?y_:m_)(t,r,Ec(this,"attr."+e,n)):n==null?(t.local?h_:d_)(t):(t.local?g_:p_)(t,r,n))}function x_(e,n){return function(t){this.setAttribute(e,n.call(this,t))}}function w_(e,n){return function(t){this.setAttributeNS(e.space,e.local,n.call(this,t))}}function __(e,n){var t,r;function i(){var o=n.apply(this,arguments);return o!==r&&(t=(r=o)&&w_(e,o)),t}return i._value=n,i}function N_(e,n){var t,r;function i(){var o=n.apply(this,arguments);return o!==r&&(t=(r=o)&&x_(e,o)),t}return i._value=n,i}function S_(e,n){var t="attr."+e;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(n==null)return this.tween(t,null);if(typeof n!="function")throw new Error;var r=al(e);return this.tween(t,(r.local?__:N_)(r,n))}function E_(e,n){return function(){Sc(this,e).delay=+n.apply(this,arguments)}}function k_(e,n){return n=+n,function(){Sc(this,e).delay=n}}function C_(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?E_:k_)(n,e)):Pn(this.node(),n).delay}function A_(e,n){return function(){Hn(this,e).duration=+n.apply(this,arguments)}}function I_(e,n){return n=+n,function(){Hn(this,e).duration=n}}function L_(e){var n=this._id;return arguments.length?this.each((typeof e=="function"?A_:I_)(n,e)):Pn(this.node(),n).duration}function M_(e,n){if(typeof n!="function")throw new Error;return function(){Hn(this,e).ease=n}}function P_(e){var n=this._id;return arguments.length?this.each(M_(n,e)):Pn(this.node(),n).ease}function T_(e,n){return function(){var t=n.apply(this,arguments);if(typeof t!="function")throw new Error;Hn(this,e).ease=t}}function z_(e){if(typeof e!="function")throw new Error;return this.each(T_(this._id,e))}function O_(e){typeof e!="function"&&(e=Tg(e));for(var n=this._groups,t=n.length,r=new Array(t),i=0;i<t;++i)for(var o=n[i],s=o.length,l=r[i]=[],a,u=0;u<s;++u)(a=o[u])&&e.call(a,a.__data__,u,o)&&l.push(a);return new tt(r,this._parents,this._name,this._id)}function R_(e){if(e._id!==this._id)throw new Error;for(var n=this._groups,t=e._groups,r=n.length,i=t.length,o=Math.min(r,i),s=new Array(r),l=0;l<o;++l)for(var a=n[l],u=t[l],d=a.length,c=s[l]=new Array(d),f,m=0;m<d;++m)(f=a[m]||u[m])&&(c[m]=f);for(;l<r;++l)s[l]=n[l];return new tt(s,this._parents,this._name,this._id)}function j_(e){return(e+"").trim().split(/^|\s+/).every(function(n){var t=n.indexOf(".");return t>=0&&(n=n.slice(0,t)),!n||n==="start"})}function D_(e,n,t){var r,i,o=j_(n)?Sc:Hn;return function(){var s=o(this,e),l=s.on;l!==r&&(i=(r=l).copy()).on(n,t),s.on=i}}function $_(e,n){var t=this._id;return arguments.length<2?Pn(this.node(),t).on.on(e):this.each(D_(t,e,n))}function F_(e){return function(){var n=this.parentNode;for(var t in this.__transition)if(+t!==e)return;n&&n.removeChild(this)}}function H_(){return this.on("end.remove",F_(this._id))}function b_(e){var n=this._name,t=this._id;typeof e!="function"&&(e=vc(e));for(var r=this._groups,i=r.length,o=new Array(i),s=0;s<i;++s)for(var l=r[s],a=l.length,u=o[s]=new Array(a),d,c,f=0;f<a;++f)(d=l[f])&&(c=e.call(d,d.__data__,f,l))&&("__data__"in d&&(c.__data__=d.__data__),u[f]=c,cl(u[f],n,t,f,u,Pn(d,t)));return new tt(o,this._parents,n,t)}function B_(e){var n=this._name,t=this._id;typeof e!="function"&&(e=Pg(e));for(var r=this._groups,i=r.length,o=[],s=[],l=0;l<i;++l)for(var a=r[l],u=a.length,d,c=0;c<u;++c)if(d=a[c]){for(var f=e.call(d,d.__data__,c,a),m,y=Pn(d,t),w=0,_=f.length;w<_;++w)(m=f[w])&&cl(m,n,t,w,f,y);o.push(f),s.push(d)}return new tt(o,s,n,t)}var V_=oo.prototype.constructor;function U_(){return new V_(this._groups,this._parents)}function W_(e,n){var t,r,i;return function(){var o=Br(this,e),s=(this.style.removeProperty(e),Br(this,e));return o===s?null:o===t&&s===r?i:i=n(t=o,r=s)}}function t0(e){return function(){this.style.removeProperty(e)}}function Y_(e,n,t){var r,i=t+"",o;return function(){var s=Br(this,e);return s===i?null:s===r?o:o=n(r=s,t)}}function X_(e,n,t){var r,i,o;return function(){var s=Br(this,e),l=t(this),a=l+"";return l==null&&(a=l=(this.style.removeProperty(e),Br(this,e))),s===a?null:s===r&&a===i?o:(i=a,o=n(r=s,l))}}function Q_(e,n){var t,r,i,o="style."+n,s="end."+o,l;return function(){var a=Hn(this,e),u=a.on,d=a.value[o]==null?l||(l=t0(n)):void 0;(u!==t||i!==d)&&(r=(t=u).copy()).on(s,i=d),a.on=r}}function G_(e,n,t){var r=(e+="")=="transform"?Kw:n0;return n==null?this.styleTween(e,W_(e,r)).on("end.style."+e,t0(e)):typeof n=="function"?this.styleTween(e,X_(e,r,Ec(this,"style."+e,n))).each(Q_(this._id,e)):this.styleTween(e,Y_(e,r,n),t).on("end.style."+e,null)}function K_(e,n,t){return function(r){this.style.setProperty(e,n.call(this,r),t)}}function Z_(e,n,t){var r,i;function o(){var s=n.apply(this,arguments);return s!==i&&(r=(i=s)&&K_(e,s,t)),r}return o._value=n,o}function q_(e,n,t){var r="style."+(e+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Z_(e,n,t??""))}function J_(e){return function(){this.textContent=e}}function eN(e){return function(){var n=e(this);this.textContent=n??""}}function nN(e){return this.tween("text",typeof e=="function"?eN(Ec(this,"text",e)):J_(e==null?"":e+""))}function tN(e){return function(n){this.textContent=e.call(this,n)}}function rN(e){var n,t;function r(){var i=e.apply(this,arguments);return i!==t&&(n=(t=i)&&tN(i)),n}return r._value=e,r}function iN(e){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;return this.tween(n,rN(e))}function oN(){for(var e=this._name,n=this._id,t=r0(),r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],l=s.length,a,u=0;u<l;++u)if(a=s[u]){var d=Pn(a,n);cl(a,e,t,u,s,{time:d.time+d.delay+d.duration,delay:0,duration:d.duration,ease:d.ease})}return new tt(r,this._parents,e,t)}function sN(){var e,n,t=this,r=t._id,i=t.size();return new Promise(function(o,s){var l={value:s},a={value:function(){--i===0&&o()}};t.each(function(){var u=Hn(this,r),d=u.on;d!==e&&(n=(e=d).copy(),n._.cancel.push(l),n._.interrupt.push(l),n._.end.push(a)),u.on=n}),i===0&&o()})}var lN=0;function tt(e,n,t,r){this._groups=e,this._parents=n,this._name=t,this._id=r}function r0(){return++lN}var Wn=oo.prototype;tt.prototype={constructor:tt,select:b_,selectAll:B_,selectChild:Wn.selectChild,selectChildren:Wn.selectChildren,filter:O_,merge:R_,selection:U_,transition:oN,call:Wn.call,nodes:Wn.nodes,node:Wn.node,size:Wn.size,empty:Wn.empty,each:Wn.each,on:$_,attr:v_,attrTween:S_,style:G_,styleTween:q_,text:nN,textTween:iN,remove:H_,tween:f_,delay:C_,duration:L_,ease:P_,easeVarying:z_,end:sN,[Symbol.iterator]:Wn[Symbol.iterator]};function aN(e){return((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2}var uN={time:null,delay:0,duration:250,ease:aN};function cN(e,n){for(var t;!(t=e.__transition)||!(t=t[n]);)if(!(e=e.parentNode))throw new Error(`transition ${n} not found`);return t}function fN(e){var n,t;e instanceof tt?(n=e._id,e=e._name):(n=r0(),(t=uN).time=Nc(),e=e==null?null:e+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var s=r[o],l=s.length,a,u=0;u<l;++u)(a=s[u])&&cl(a,e,n,u,s,t||cN(a,n));return new tt(r,this._parents,e,n)}oo.prototype.interrupt=a_;oo.prototype.transition=fN;const Fo=e=>()=>e;function dN(e,{sourceEvent:n,target:t,transform:r,dispatch:i}){Object.defineProperties(this,{type:{value:e,enumerable:!0,configurable:!0},sourceEvent:{value:n,enumerable:!0,configurable:!0},target:{value:t,enumerable:!0,configurable:!0},transform:{value:r,enumerable:!0,configurable:!0},_:{value:i}})}function Kn(e,n,t){this.k=e,this.x=n,this.y=t}Kn.prototype={constructor:Kn,scale:function(e){return e===1?this:new Kn(this.k*e,this.x,this.y)},translate:function(e,n){return e===0&n===0?this:new Kn(this.k,this.x+this.k*e,this.y+this.k*n)},apply:function(e){return[e[0]*this.k+this.x,e[1]*this.k+this.y]},applyX:function(e){return e*this.k+this.x},applyY:function(e){return e*this.k+this.y},invert:function(e){return[(e[0]-this.x)/this.k,(e[1]-this.y)/this.k]},invertX:function(e){return(e-this.x)/this.k},invertY:function(e){return(e-this.y)/this.k},rescaleX:function(e){return e.copy().domain(e.range().map(this.invertX,this).map(e.invert,e))},rescaleY:function(e){return e.copy().domain(e.range().map(this.invertY,this).map(e.invert,e))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var fl=new Kn(1,0,0);i0.prototype=Kn.prototype;function i0(e){for(;!e.__zoom;)if(!(e=e.parentNode))return fl;return e.__zoom}function oa(e){e.stopImmediatePropagation()}function ui(e){e.preventDefault(),e.stopImmediatePropagation()}function hN(e){return(!e.ctrlKey||e.type==="wheel")&&!e.button}function pN(){var e=this;return e instanceof SVGElement?(e=e.ownerSVGElement||e,e.hasAttribute("viewBox")?(e=e.viewBox.baseVal,[[e.x,e.y],[e.x+e.width,e.y+e.height]]):[[0,0],[e.width.baseVal.value,e.height.baseVal.value]]):[[0,0],[e.clientWidth,e.clientHeight]]}function xd(){return this.__zoom||fl}function gN(e){return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*(e.ctrlKey?10:1)}function mN(){return navigator.maxTouchPoints||"ontouchstart"in this}function yN(e,n,t){var r=e.invertX(n[0][0])-t[0][0],i=e.invertX(n[1][0])-t[1][0],o=e.invertY(n[0][1])-t[0][1],s=e.invertY(n[1][1])-t[1][1];return e.translate(i>r?(r+i)/2:Math.min(0,r)||Math.max(0,i),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function o0(){var e=hN,n=pN,t=yN,r=gN,i=mN,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],l=250,a=is,u=ll("start","zoom","end"),d,c,f,m=500,y=150,w=0,_=10;function p(k){k.property("__zoom",xd).on("wheel.zoom",I,{passive:!1}).on("mousedown.zoom",P).on("dblclick.zoom",F).filter(i).on("touchstart.zoom",M).on("touchmove.zoom",j).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(k,z,L,R){var C=k.selection?k.selection():k;C.property("__zoom",xd),k!==C?N(k,z,L,R):C.interrupt().each(function(){S(this,arguments).event(R).start().zoom(null,typeof z=="function"?z.apply(this,arguments):z).end()})},p.scaleBy=function(k,z,L,R){p.scaleTo(k,function(){var C=this.__zoom.k,A=typeof z=="function"?z.apply(this,arguments):z;return C*A},L,R)},p.scaleTo=function(k,z,L,R){p.transform(k,function(){var C=n.apply(this,arguments),A=this.__zoom,O=L==null?v(C):typeof L=="function"?L.apply(this,arguments):L,D=A.invert(O),$=typeof z=="function"?z.apply(this,arguments):z;return t(h(g(A,$),O,D),C,s)},L,R)},p.translateBy=function(k,z,L,R){p.transform(k,function(){return t(this.__zoom.translate(typeof z=="function"?z.apply(this,arguments):z,typeof L=="function"?L.apply(this,arguments):L),n.apply(this,arguments),s)},null,R)},p.translateTo=function(k,z,L,R,C){p.transform(k,function(){var A=n.apply(this,arguments),O=this.__zoom,D=R==null?v(A):typeof R=="function"?R.apply(this,arguments):R;return t(fl.translate(D[0],D[1]).scale(O.k).translate(typeof z=="function"?-z.apply(this,arguments):-z,typeof L=="function"?-L.apply(this,arguments):-L),A,s)},R,C)};function g(k,z){return z=Math.max(o[0],Math.min(o[1],z)),z===k.k?k:new Kn(z,k.x,k.y)}function h(k,z,L){var R=z[0]-L[0]*k.k,C=z[1]-L[1]*k.k;return R===k.x&&C===k.y?k:new Kn(k.k,R,C)}function v(k){return[(+k[0][0]+ +k[1][0])/2,(+k[0][1]+ +k[1][1])/2]}function N(k,z,L,R){k.on("start.zoom",function(){S(this,arguments).event(R).start()}).on("interrupt.zoom end.zoom",function(){S(this,arguments).event(R).end()}).tween("zoom",function(){var C=this,A=arguments,O=S(C,A).event(R),D=n.apply(C,A),$=L==null?v(D):typeof L=="function"?L.apply(C,A):L,U=Math.max(D[1][0]-D[0][0],D[1][1]-D[0][1]),W=C.__zoom,B=typeof z=="function"?z.apply(C,A):z,Q=a(W.invert($).concat(U/W.k),B.invert($).concat(U/B.k));return function(K){if(K===1)K=B;else{var V=Q(K),Z=U/V[2];K=new Kn(Z,$[0]-V[0]*Z,$[1]-V[1]*Z)}O.zoom(null,K)}})}function S(k,z,L){return!L&&k.__zooming||new E(k,z)}function E(k,z){this.that=k,this.args=z,this.active=0,this.sourceEvent=null,this.extent=n.apply(k,z),this.taps=0}E.prototype={event:function(k){return k&&(this.sourceEvent=k),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(k,z){return this.mouse&&k!=="mouse"&&(this.mouse[1]=z.invert(this.mouse[0])),this.touch0&&k!=="touch"&&(this.touch0[1]=z.invert(this.touch0[0])),this.touch1&&k!=="touch"&&(this.touch1[1]=z.invert(this.touch1[0])),this.that.__zoom=z,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(k){var z=Je(this.that).datum();u.call(k,this.that,new dN(k,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),z)}};function I(k,...z){if(!e.apply(this,arguments))return;var L=S(this,z).event(k),R=this.__zoom,C=Math.max(o[0],Math.min(o[1],R.k*Math.pow(2,r.apply(this,arguments)))),A=Sn(k);if(L.wheel)(L.mouse[0][0]!==A[0]||L.mouse[0][1]!==A[1])&&(L.mouse[1]=R.invert(L.mouse[0]=A)),clearTimeout(L.wheel);else{if(R.k===C)return;L.mouse=[A,R.invert(A)],ls(this),L.start()}ui(k),L.wheel=setTimeout(O,y),L.zoom("mouse",t(h(g(R,C),L.mouse[0],L.mouse[1]),L.extent,s));function O(){L.wheel=null,L.end()}}function P(k,...z){if(f||!e.apply(this,arguments))return;var L=k.currentTarget,R=S(this,z,!0).event(k),C=Je(k.view).on("mousemove.zoom",$,!0).on("mouseup.zoom",U,!0),A=Sn(k,L),O=k.clientX,D=k.clientY;Bg(k.view),oa(k),R.mouse=[A,this.__zoom.invert(A)],ls(this),R.start();function $(W){if(ui(W),!R.moved){var B=W.clientX-O,Q=W.clientY-D;R.moved=B*B+Q*Q>w}R.event(W).zoom("mouse",t(h(R.that.__zoom,R.mouse[0]=Sn(W,L),R.mouse[1]),R.extent,s))}function U(W){C.on("mousemove.zoom mouseup.zoom",null),Vg(W.view,R.moved),ui(W),R.event(W).end()}}function F(k,...z){if(e.apply(this,arguments)){var L=this.__zoom,R=Sn(k.changedTouches?k.changedTouches[0]:k,this),C=L.invert(R),A=L.k*(k.shiftKey?.5:2),O=t(h(g(L,A),R,C),n.apply(this,z),s);ui(k),l>0?Je(this).transition().duration(l).call(N,O,R,k):Je(this).call(p.transform,O,R,k)}}function M(k,...z){if(e.apply(this,arguments)){var L=k.touches,R=L.length,C=S(this,z,k.changedTouches.length===R).event(k),A,O,D,$;for(oa(k),O=0;O<R;++O)D=L[O],$=Sn(D,this),$=[$,this.__zoom.invert($),D.identifier],C.touch0?!C.touch1&&C.touch0[2]!==$[2]&&(C.touch1=$,C.taps=0):(C.touch0=$,A=!0,C.taps=1+!!d);d&&(d=clearTimeout(d)),A&&(C.taps<2&&(c=$[0],d=setTimeout(function(){d=null},m)),ls(this),C.start())}}function j(k,...z){if(this.__zooming){var L=S(this,z).event(k),R=k.changedTouches,C=R.length,A,O,D,$;for(ui(k),A=0;A<C;++A)O=R[A],D=Sn(O,this),L.touch0&&L.touch0[2]===O.identifier?L.touch0[0]=D:L.touch1&&L.touch1[2]===O.identifier&&(L.touch1[0]=D);if(O=L.that.__zoom,L.touch1){var U=L.touch0[0],W=L.touch0[1],B=L.touch1[0],Q=L.touch1[1],K=(K=B[0]-U[0])*K+(K=B[1]-U[1])*K,V=(V=Q[0]-W[0])*V+(V=Q[1]-W[1])*V;O=g(O,Math.sqrt(K/V)),D=[(U[0]+B[0])/2,(U[1]+B[1])/2],$=[(W[0]+Q[0])/2,(W[1]+Q[1])/2]}else if(L.touch0)D=L.touch0[0],$=L.touch0[1];else return;L.zoom("touch",t(h(O,D,$),L.extent,s))}}function H(k,...z){if(this.__zooming){var L=S(this,z).event(k),R=k.changedTouches,C=R.length,A,O;for(oa(k),f&&clearTimeout(f),f=setTimeout(function(){f=null},m),A=0;A<C;++A)O=R[A],L.touch0&&L.touch0[2]===O.identifier?delete L.touch0:L.touch1&&L.touch1[2]===O.identifier&&delete L.touch1;if(L.touch1&&!L.touch0&&(L.touch0=L.touch1,delete L.touch1),L.touch0)L.touch0[1]=this.__zoom.invert(L.touch0[0]);else if(L.end(),L.taps===2&&(O=Sn(O,this),Math.hypot(c[0]-O[0],c[1]-O[1])<_)){var D=Je(this).on("dblclick.zoom");D&&D.apply(this,arguments)}}}return p.wheelDelta=function(k){return arguments.length?(r=typeof k=="function"?k:Fo(+k),p):r},p.filter=function(k){return arguments.length?(e=typeof k=="function"?k:Fo(!!k),p):e},p.touchable=function(k){return arguments.length?(i=typeof k=="function"?k:Fo(!!k),p):i},p.extent=function(k){return arguments.length?(n=typeof k=="function"?k:Fo([[+k[0][0],+k[0][1]],[+k[1][0],+k[1][1]]]),p):n},p.scaleExtent=function(k){return arguments.length?(o[0]=+k[0],o[1]=+k[1],p):[o[0],o[1]]},p.translateExtent=function(k){return arguments.length?(s[0][0]=+k[0][0],s[1][0]=+k[1][0],s[0][1]=+k[0][1],s[1][1]=+k[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(k){return arguments.length?(t=k,p):t},p.duration=function(k){return arguments.length?(l=+k,p):l},p.interpolate=function(k){return arguments.length?(a=k,p):a},p.on=function(){var k=u.on.apply(u,arguments);return k===u?p:k},p.clickDistance=function(k){return arguments.length?(w=(k=+k)*k,p):Math.sqrt(w)},p.tapDistance=function(k){return arguments.length?(_=+k,p):_},p}const Fn={error001:()=>"[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:e=>`Node type "${e}" not found. Using fallback type "default".`,error004:()=>"The React Flow parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:e=>`The old edge with id=${e} does not exist.`,error009:e=>`Marker type "${e}" doesn't exist.`,error008:(e,{id:n,sourceHandle:t,targetHandle:r})=>`Couldn't create edge for ${e} handle id: "${e==="source"?t:r}", edge id: ${n}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:e=>`Edge type "${e}" not found. Using fallback type "default".`,error012:e=>`Node with id "${e}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(e="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${e}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs."},Qi=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],s0=["Enter"," ","Escape"],l0={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:e,x:n,y:t})=>`Moved selected node ${e}. New position, x: ${n}, y: ${t}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var Ur;(function(e){e.Strict="strict",e.Loose="loose"})(Ur||(Ur={}));var Xt;(function(e){e.Free="free",e.Vertical="vertical",e.Horizontal="horizontal"})(Xt||(Xt={}));var Gi;(function(e){e.Partial="partial",e.Full="full"})(Gi||(Gi={}));const a0={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var gt;(function(e){e.Bezier="default",e.Straight="straight",e.Step="step",e.SmoothStep="smoothstep",e.SimpleBezier="simplebezier"})(gt||(gt={}));var Fs;(function(e){e.Arrow="arrow",e.ArrowClosed="arrowclosed"})(Fs||(Fs={}));var J;(function(e){e.Left="left",e.Top="top",e.Right="right",e.Bottom="bottom"})(J||(J={}));const wd={[J.Left]:J.Right,[J.Right]:J.Left,[J.Top]:J.Bottom,[J.Bottom]:J.Top};function u0(e){return e===null?null:e?"valid":"invalid"}const c0=e=>"id"in e&&"source"in e&&"target"in e,vN=e=>"id"in e&&"position"in e&&!("source"in e)&&!("target"in e),kc=e=>"id"in e&&"internals"in e&&!("source"in e)&&!("target"in e),lo=(e,n=[0,0])=>{const{width:t,height:r}=it(e),i=e.origin??n,o=t*i[0],s=r*i[1];return{x:e.position.x-o,y:e.position.y-s}},xN=(e,n={nodeOrigin:[0,0]})=>{if(e.length===0)return{x:0,y:0,width:0,height:0};const t=e.reduce((r,i)=>{const o=typeof i=="string";let s=!n.nodeLookup&&!o?i:void 0;n.nodeLookup&&(s=o?n.nodeLookup.get(i):kc(i)?i:n.nodeLookup.get(i.id));const l=s?Hs(s,n.nodeOrigin):{x:0,y:0,x2:0,y2:0};return dl(r,l)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return hl(t)},ao=(e,n={})=>{let t={x:1/0,y:1/0,x2:-1/0,y2:-1/0},r=!1;return e.forEach(i=>{(n.filter===void 0||n.filter(i))&&(t=dl(t,Hs(i)),r=!0)}),r?hl(t):{x:0,y:0,width:0,height:0}},Cc=(e,n,[t,r,i]=[0,0,1],o=!1,s=!1)=>{const l={...co(n,[t,r,i]),width:n.width/i,height:n.height/i},a=[];for(const u of e.values()){const{measured:d,selectable:c=!0,hidden:f=!1}=u;if(s&&!c||f)continue;const m=d.width??u.width??u.initialWidth??null,y=d.height??u.height??u.initialHeight??null,w=Ki(l,Yr(u)),_=(m??0)*(y??0),p=o&&w>0;(!u.internals.handleBounds||p||w>=_||u.dragging)&&a.push(u)}return a},wN=(e,n)=>{const t=new Set;return e.forEach(r=>{t.add(r.id)}),n.filter(r=>t.has(r.source)||t.has(r.target))};function _N(e,n){const t=new Map,r=n!=null&&n.nodes?new Set(n.nodes.map(i=>i.id)):null;return e.forEach(i=>{i.measured.width&&i.measured.height&&((n==null?void 0:n.includeHiddenNodes)||!i.hidden)&&(!r||r.has(i.id))&&t.set(i.id,i)}),t}async function NN({nodes:e,width:n,height:t,panZoom:r,minZoom:i,maxZoom:o},s){if(e.size===0)return Promise.resolve(!0);const l=_N(e,s),a=ao(l),u=Ac(a,n,t,(s==null?void 0:s.minZoom)??i,(s==null?void 0:s.maxZoom)??o,(s==null?void 0:s.padding)??.1);return await r.setViewport(u,{duration:s==null?void 0:s.duration,ease:s==null?void 0:s.ease,interpolate:s==null?void 0:s.interpolate}),Promise.resolve(!0)}function f0({nodeId:e,nextPosition:n,nodeLookup:t,nodeOrigin:r=[0,0],nodeExtent:i,onError:o}){const s=t.get(e),l=s.parentId?t.get(s.parentId):void 0,{x:a,y:u}=l?l.internals.positionAbsolute:{x:0,y:0},d=s.origin??r;let c=s.extent||i;if(s.extent==="parent"&&!s.expandParent)if(!l)o==null||o("005",Fn.error005());else{const m=l.measured.width,y=l.measured.height;m&&y&&(c=[[a,u],[a+m,u+y]])}else l&&Xr(s.extent)&&(c=[[s.extent[0][0]+a,s.extent[0][1]+u],[s.extent[1][0]+a,s.extent[1][1]+u]]);const f=Xr(c)?nr(n,c,s.measured):n;return(s.measured.width===void 0||s.measured.height===void 0)&&(o==null||o("015",Fn.error015())),{position:{x:f.x-a+(s.measured.width??0)*d[0],y:f.y-u+(s.measured.height??0)*d[1]},positionAbsolute:f}}async function SN({nodesToRemove:e=[],edgesToRemove:n=[],nodes:t,edges:r,onBeforeDelete:i}){const o=new Set(e.map(f=>f.id)),s=[];for(const f of t){if(f.deletable===!1)continue;const m=o.has(f.id),y=!m&&f.parentId&&s.find(w=>w.id===f.parentId);(m||y)&&s.push(f)}const l=new Set(n.map(f=>f.id)),a=r.filter(f=>f.deletable!==!1),d=wN(s,a);for(const f of a)l.has(f.id)&&!d.find(y=>y.id===f.id)&&d.push(f);if(!i)return{edges:d,nodes:s};const c=await i({nodes:s,edges:d});return typeof c=="boolean"?c?{edges:d,nodes:s}:{edges:[],nodes:[]}:c}const Wr=(e,n=0,t=1)=>Math.min(Math.max(e,n),t),nr=(e={x:0,y:0},n,t)=>({x:Wr(e.x,n[0][0],n[1][0]-((t==null?void 0:t.width)??0)),y:Wr(e.y,n[0][1],n[1][1]-((t==null?void 0:t.height)??0))});function d0(e,n,t){const{width:r,height:i}=it(t),{x:o,y:s}=t.internals.positionAbsolute;return nr(e,[[o,s],[o+r,s+i]],n)}const _d=(e,n,t)=>e<n?Wr(Math.abs(e-n),1,n)/n:e>t?-Wr(Math.abs(e-t),1,n)/n:0,h0=(e,n,t=15,r=40)=>{const i=_d(e.x,r,n.width-r)*t,o=_d(e.y,r,n.height-r)*t;return[i,o]},dl=(e,n)=>({x:Math.min(e.x,n.x),y:Math.min(e.y,n.y),x2:Math.max(e.x2,n.x2),y2:Math.max(e.y2,n.y2)}),mu=({x:e,y:n,width:t,height:r})=>({x:e,y:n,x2:e+t,y2:n+r}),hl=({x:e,y:n,x2:t,y2:r})=>({x:e,y:n,width:t-e,height:r-n}),Yr=(e,n=[0,0])=>{var i,o;const{x:t,y:r}=kc(e)?e.internals.positionAbsolute:lo(e,n);return{x:t,y:r,width:((i=e.measured)==null?void 0:i.width)??e.width??e.initialWidth??0,height:((o=e.measured)==null?void 0:o.height)??e.height??e.initialHeight??0}},Hs=(e,n=[0,0])=>{var i,o;const{x:t,y:r}=kc(e)?e.internals.positionAbsolute:lo(e,n);return{x:t,y:r,x2:t+(((i=e.measured)==null?void 0:i.width)??e.width??e.initialWidth??0),y2:r+(((o=e.measured)==null?void 0:o.height)??e.height??e.initialHeight??0)}},p0=(e,n)=>hl(dl(mu(e),mu(n))),Ki=(e,n)=>{const t=Math.max(0,Math.min(e.x+e.width,n.x+n.width)-Math.max(e.x,n.x)),r=Math.max(0,Math.min(e.y+e.height,n.y+n.height)-Math.max(e.y,n.y));return Math.ceil(t*r)},Nd=e=>Cn(e.width)&&Cn(e.height)&&Cn(e.x)&&Cn(e.y),Cn=e=>!isNaN(e)&&isFinite(e),EN=(e,n)=>{},uo=(e,n=[1,1])=>({x:n[0]*Math.round(e.x/n[0]),y:n[1]*Math.round(e.y/n[1])}),co=({x:e,y:n},[t,r,i],o=!1,s=[1,1])=>{const l={x:(e-t)/i,y:(n-r)/i};return o?uo(l,s):l},bs=({x:e,y:n},[t,r,i])=>({x:e*i+t,y:n*i+r});function ur(e,n){if(typeof e=="number")return Math.floor((n-n/(1+e))*.5);if(typeof e=="string"&&e.endsWith("px")){const t=parseFloat(e);if(!Number.isNaN(t))return Math.floor(t)}if(typeof e=="string"&&e.endsWith("%")){const t=parseFloat(e);if(!Number.isNaN(t))return Math.floor(n*t*.01)}return console.error(`[React Flow] The padding value "${e}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function kN(e,n,t){if(typeof e=="string"||typeof e=="number"){const r=ur(e,t),i=ur(e,n);return{top:r,right:i,bottom:r,left:i,x:i*2,y:r*2}}if(typeof e=="object"){const r=ur(e.top??e.y??0,t),i=ur(e.bottom??e.y??0,t),o=ur(e.left??e.x??0,n),s=ur(e.right??e.x??0,n);return{top:r,right:s,bottom:i,left:o,x:o+s,y:r+i}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function CN(e,n,t,r,i,o){const{x:s,y:l}=bs(e,[n,t,r]),{x:a,y:u}=bs({x:e.x+e.width,y:e.y+e.height},[n,t,r]),d=i-a,c=o-u;return{left:Math.floor(s),top:Math.floor(l),right:Math.floor(d),bottom:Math.floor(c)}}const Ac=(e,n,t,r,i,o)=>{const s=kN(o,n,t),l=(n-s.x)/e.width,a=(t-s.y)/e.height,u=Math.min(l,a),d=Wr(u,r,i),c=e.x+e.width/2,f=e.y+e.height/2,m=n/2-c*d,y=t/2-f*d,w=CN(e,m,y,d,n,t),_={left:Math.min(w.left-s.left,0),top:Math.min(w.top-s.top,0),right:Math.min(w.right-s.right,0),bottom:Math.min(w.bottom-s.bottom,0)};return{x:m-_.left+_.right,y:y-_.top+_.bottom,zoom:d}},Zi=()=>{var e;return typeof navigator<"u"&&((e=navigator==null?void 0:navigator.userAgent)==null?void 0:e.indexOf("Mac"))>=0};function Xr(e){return e!=null&&e!=="parent"}function it(e){var n,t;return{width:((n=e.measured)==null?void 0:n.width)??e.width??e.initialWidth??0,height:((t=e.measured)==null?void 0:t.height)??e.height??e.initialHeight??0}}function g0(e){var n,t;return(((n=e.measured)==null?void 0:n.width)??e.width??e.initialWidth)!==void 0&&(((t=e.measured)==null?void 0:t.height)??e.height??e.initialHeight)!==void 0}function m0(e,n={width:0,height:0},t,r,i){const o={...e},s=r.get(t);if(s){const l=s.origin||i;o.x+=s.internals.positionAbsolute.x-(n.width??0)*l[0],o.y+=s.internals.positionAbsolute.y-(n.height??0)*l[1]}return o}function Sd(e,n){if(e.size!==n.size)return!1;for(const t of e)if(!n.has(t))return!1;return!0}function AN(){let e,n;return{promise:new Promise((r,i)=>{e=r,n=i}),resolve:e,reject:n}}function IN(e){return{...l0,...e||{}}}function Ci(e,{snapGrid:n=[0,0],snapToGrid:t=!1,transform:r,containerBounds:i}){const{x:o,y:s}=An(e),l=co({x:o-((i==null?void 0:i.left)??0),y:s-((i==null?void 0:i.top)??0)},r),{x:a,y:u}=t?uo(l,n):l;return{xSnapped:a,ySnapped:u,...l}}const Ic=e=>({width:e.offsetWidth,height:e.offsetHeight}),y0=e=>{var n;return((n=e==null?void 0:e.getRootNode)==null?void 0:n.call(e))||(window==null?void 0:window.document)},LN=["INPUT","SELECT","TEXTAREA"];function v0(e){var r,i;const n=((i=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:i[0])||e.target;return(n==null?void 0:n.nodeType)!==1?!1:LN.includes(n.nodeName)||n.hasAttribute("contenteditable")||!!n.closest(".nokey")}const x0=e=>"clientX"in e,An=(e,n)=>{var o,s;const t=x0(e),r=t?e.clientX:(o=e.touches)==null?void 0:o[0].clientX,i=t?e.clientY:(s=e.touches)==null?void 0:s[0].clientY;return{x:r-((n==null?void 0:n.left)??0),y:i-((n==null?void 0:n.top)??0)}},Ed=(e,n,t,r,i)=>{const o=n.querySelectorAll(`.${e}`);return!o||!o.length?null:Array.from(o).map(s=>{const l=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:e,nodeId:i,position:s.getAttribute("data-handlepos"),x:(l.left-t.left)/r,y:(l.top-t.top)/r,...Ic(s)}})};function w0({sourceX:e,sourceY:n,targetX:t,targetY:r,sourceControlX:i,sourceControlY:o,targetControlX:s,targetControlY:l}){const a=e*.125+i*.375+s*.375+t*.125,u=n*.125+o*.375+l*.375+r*.125,d=Math.abs(a-e),c=Math.abs(u-n);return[a,u,d,c]}function Ho(e,n){return e>=0?.5*e:n*25*Math.sqrt(-e)}function kd({pos:e,x1:n,y1:t,x2:r,y2:i,c:o}){switch(e){case J.Left:return[n-Ho(n-r,o),t];case J.Right:return[n+Ho(r-n,o),t];case J.Top:return[n,t-Ho(t-i,o)];case J.Bottom:return[n,t+Ho(i-t,o)]}}function _0({sourceX:e,sourceY:n,sourcePosition:t=J.Bottom,targetX:r,targetY:i,targetPosition:o=J.Top,curvature:s=.25}){const[l,a]=kd({pos:t,x1:e,y1:n,x2:r,y2:i,c:s}),[u,d]=kd({pos:o,x1:r,y1:i,x2:e,y2:n,c:s}),[c,f,m,y]=w0({sourceX:e,sourceY:n,targetX:r,targetY:i,sourceControlX:l,sourceControlY:a,targetControlX:u,targetControlY:d});return[`M${e},${n} C${l},${a} ${u},${d} ${r},${i}`,c,f,m,y]}function N0({sourceX:e,sourceY:n,targetX:t,targetY:r}){const i=Math.abs(t-e)/2,o=t<e?t+i:t-i,s=Math.abs(r-n)/2,l=r<n?r+s:r-s;return[o,l,i,s]}function MN({sourceNode:e,targetNode:n,selected:t=!1,zIndex:r=0,elevateOnSelect:i=!1,zIndexMode:o="basic"}){if(o==="manual")return r;const s=i&&t?r+1e3:r,l=Math.max(e.parentId||i&&e.selected?e.internals.z:0,n.parentId||i&&n.selected?n.internals.z:0);return s+l}function PN({sourceNode:e,targetNode:n,width:t,height:r,transform:i}){const o=dl(Hs(e),Hs(n));o.x===o.x2&&(o.x2+=1),o.y===o.y2&&(o.y2+=1);const s={x:-i[0]/i[2],y:-i[1]/i[2],width:t/i[2],height:r/i[2]};return Ki(s,hl(o))>0}const TN=({source:e,sourceHandle:n,target:t,targetHandle:r})=>`xy-edge__${e}${n||""}-${t}${r||""}`,zN=(e,n)=>n.some(t=>t.source===e.source&&t.target===e.target&&(t.sourceHandle===e.sourceHandle||!t.sourceHandle&&!e.sourceHandle)&&(t.targetHandle===e.targetHandle||!t.targetHandle&&!e.targetHandle)),ON=(e,n,t={})=>{if(!e.source||!e.target)return n;const r=t.getEdgeId||TN;let i;return c0(e)?i={...e}:i={...e,id:r(e)},zN(i,n)?n:(i.sourceHandle===null&&delete i.sourceHandle,i.targetHandle===null&&delete i.targetHandle,n.concat(i))};function S0({sourceX:e,sourceY:n,targetX:t,targetY:r}){const[i,o,s,l]=N0({sourceX:e,sourceY:n,targetX:t,targetY:r});return[`M ${e},${n}L ${t},${r}`,i,o,s,l]}const Cd={[J.Left]:{x:-1,y:0},[J.Right]:{x:1,y:0},[J.Top]:{x:0,y:-1},[J.Bottom]:{x:0,y:1}},RN=({source:e,sourcePosition:n=J.Bottom,target:t})=>n===J.Left||n===J.Right?e.x<t.x?{x:1,y:0}:{x:-1,y:0}:e.y<t.y?{x:0,y:1}:{x:0,y:-1},Ad=(e,n)=>Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2));function jN({source:e,sourcePosition:n=J.Bottom,target:t,targetPosition:r=J.Top,center:i,offset:o,stepPosition:s}){const l=Cd[n],a=Cd[r],u={x:e.x+l.x*o,y:e.y+l.y*o},d={x:t.x+a.x*o,y:t.y+a.y*o},c=RN({source:u,sourcePosition:n,target:d}),f=c.x!==0?"x":"y",m=c[f];let y=[],w,_;const p={x:0,y:0},g={x:0,y:0},[,,h,v]=N0({sourceX:e.x,sourceY:e.y,targetX:t.x,targetY:t.y});if(l[f]*a[f]===-1){f==="x"?(w=i.x??u.x+(d.x-u.x)*s,_=i.y??(u.y+d.y)/2):(w=i.x??(u.x+d.x)/2,_=i.y??u.y+(d.y-u.y)*s);const I=[{x:w,y:u.y},{x:w,y:d.y}],P=[{x:u.x,y:_},{x:d.x,y:_}];l[f]===m?y=f==="x"?I:P:y=f==="x"?P:I}else{const I=[{x:u.x,y:d.y}],P=[{x:d.x,y:u.y}];if(f==="x"?y=l.x===m?P:I:y=l.y===m?I:P,n===r){const k=Math.abs(e[f]-t[f]);if(k<=o){const z=Math.min(o-1,o-k);l[f]===m?p[f]=(u[f]>e[f]?-1:1)*z:g[f]=(d[f]>t[f]?-1:1)*z}}if(n!==r){const k=f==="x"?"y":"x",z=l[f]===a[k],L=u[k]>d[k],R=u[k]<d[k];(l[f]===1&&(!z&&L||z&&R)||l[f]!==1&&(!z&&R||z&&L))&&(y=f==="x"?I:P)}const F={x:u.x+p.x,y:u.y+p.y},M={x:d.x+g.x,y:d.y+g.y},j=Math.max(Math.abs(F.x-y[0].x),Math.abs(M.x-y[0].x)),H=Math.max(Math.abs(F.y-y[0].y),Math.abs(M.y-y[0].y));j>=H?(w=(F.x+M.x)/2,_=y[0].y):(w=y[0].x,_=(F.y+M.y)/2)}const N={x:u.x+p.x,y:u.y+p.y},S={x:d.x+g.x,y:d.y+g.y};return[[e,...N.x!==y[0].x||N.y!==y[0].y?[N]:[],...y,...S.x!==y[y.length-1].x||S.y!==y[y.length-1].y?[S]:[],t],w,_,h,v]}function DN(e,n,t,r){const i=Math.min(Ad(e,n)/2,Ad(n,t)/2,r),{x:o,y:s}=n;if(e.x===o&&o===t.x||e.y===s&&s===t.y)return`L${o} ${s}`;if(e.y===s){const u=e.x<t.x?-1:1,d=e.y<t.y?1:-1;return`L ${o+i*u},${s}Q ${o},${s} ${o},${s+i*d}`}const l=e.x<t.x?1:-1,a=e.y<t.y?-1:1;return`L ${o},${s+i*a}Q ${o},${s} ${o+i*l},${s}`}function yu({sourceX:e,sourceY:n,sourcePosition:t=J.Bottom,targetX:r,targetY:i,targetPosition:o=J.Top,borderRadius:s=5,centerX:l,centerY:a,offset:u=20,stepPosition:d=.5}){const[c,f,m,y,w]=jN({source:{x:e,y:n},sourcePosition:t,target:{x:r,y:i},targetPosition:o,center:{x:l,y:a},offset:u,stepPosition:d});let _=`M${c[0].x} ${c[0].y}`;for(let p=1;p<c.length-1;p++)_+=DN(c[p-1],c[p],c[p+1],s);return _+=`L${c[c.length-1].x} ${c[c.length-1].y}`,[_,f,m,y,w]}function Id(e){var n;return e&&!!(e.internals.handleBounds||(n=e.handles)!=null&&n.length)&&!!(e.measured.width||e.width||e.initialWidth)}function $N(e){var c;const{sourceNode:n,targetNode:t}=e;if(!Id(n)||!Id(t))return null;const r=n.internals.handleBounds||Ld(n.handles),i=t.internals.handleBounds||Ld(t.handles),o=Md((r==null?void 0:r.source)??[],e.sourceHandle),s=Md(e.connectionMode===Ur.Strict?(i==null?void 0:i.target)??[]:((i==null?void 0:i.target)??[]).concat((i==null?void 0:i.source)??[]),e.targetHandle);if(!o||!s)return(c=e.onError)==null||c.call(e,"008",Fn.error008(o?"target":"source",{id:e.id,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle})),null;const l=(o==null?void 0:o.position)||J.Bottom,a=(s==null?void 0:s.position)||J.Top,u=tr(n,o,l),d=tr(t,s,a);return{sourceX:u.x,sourceY:u.y,targetX:d.x,targetY:d.y,sourcePosition:l,targetPosition:a}}function Ld(e){if(!e)return null;const n=[],t=[];for(const r of e)r.width=r.width??1,r.height=r.height??1,r.type==="source"?n.push(r):r.type==="target"&&t.push(r);return{source:n,target:t}}function tr(e,n,t=J.Left,r=!1){const i=((n==null?void 0:n.x)??0)+e.internals.positionAbsolute.x,o=((n==null?void 0:n.y)??0)+e.internals.positionAbsolute.y,{width:s,height:l}=n??it(e);if(r)return{x:i+s/2,y:o+l/2};switch((n==null?void 0:n.position)??t){case J.Top:return{x:i+s/2,y:o};case J.Right:return{x:i+s,y:o+l/2};case J.Bottom:return{x:i+s/2,y:o+l};case J.Left:return{x:i,y:o+l/2}}}function Md(e,n){return e&&(n?e.find(t=>t.id===n):e[0])||null}function vu(e,n){return e?typeof e=="string"?e:`${n?`${n}__`:""}${Object.keys(e).sort().map(r=>`${r}=${e[r]}`).join("&")}`:""}function FN(e,{id:n,defaultColor:t,defaultMarkerStart:r,defaultMarkerEnd:i}){const o=new Set;return e.reduce((s,l)=>([l.markerStart||r,l.markerEnd||i].forEach(a=>{if(a&&typeof a=="object"){const u=vu(a,n);o.has(u)||(s.push({id:u,color:a.color||t,...a}),o.add(u))}}),s),[]).sort((s,l)=>s.id.localeCompare(l.id))}const E0=1e3,HN=10,Lc={nodeOrigin:[0,0],nodeExtent:Qi,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},bN={...Lc,checkEquality:!0};function Mc(e,n){const t={...e};for(const r in n)n[r]!==void 0&&(t[r]=n[r]);return t}function BN(e,n,t){const r=Mc(Lc,t);for(const i of e.values())if(i.parentId)Tc(i,e,n,r);else{const o=lo(i,r.nodeOrigin),s=Xr(i.extent)?i.extent:r.nodeExtent,l=nr(o,s,it(i));i.internals.positionAbsolute=l}}function VN(e,n){if(!e.handles)return e.measured?n==null?void 0:n.internals.handleBounds:void 0;const t=[],r=[];for(const i of e.handles){const o={id:i.id,width:i.width??1,height:i.height??1,nodeId:e.id,x:i.x,y:i.y,position:i.position,type:i.type};i.type==="source"?t.push(o):i.type==="target"&&r.push(o)}return{source:t,target:r}}function Pc(e){return e==="manual"}function xu(e,n,t,r={}){var d,c;const i=Mc(bN,r),o={i:0},s=new Map(n),l=i!=null&&i.elevateNodesOnSelect&&!Pc(i.zIndexMode)?E0:0;let a=e.length>0,u=!1;n.clear(),t.clear();for(const f of e){let m=s.get(f.id);if(i.checkEquality&&f===(m==null?void 0:m.internals.userNode))n.set(f.id,m);else{const y=lo(f,i.nodeOrigin),w=Xr(f.extent)?f.extent:i.nodeExtent,_=nr(y,w,it(f));m={...i.defaults,...f,measured:{width:(d=f.measured)==null?void 0:d.width,height:(c=f.measured)==null?void 0:c.height},internals:{positionAbsolute:_,handleBounds:VN(f,m),z:k0(f,l,i.zIndexMode),userNode:f}},n.set(f.id,m)}(m.measured===void 0||m.measured.width===void 0||m.measured.height===void 0)&&!m.hidden&&(a=!1),f.parentId&&Tc(m,n,t,r,o),u||(u=f.selected??!1)}return{nodesInitialized:a,hasSelectedNodes:u}}function UN(e,n){if(!e.parentId)return;const t=n.get(e.parentId);t?t.set(e.id,e):n.set(e.parentId,new Map([[e.id,e]]))}function Tc(e,n,t,r,i){const{elevateNodesOnSelect:o,nodeOrigin:s,nodeExtent:l,zIndexMode:a}=Mc(Lc,r),u=e.parentId,d=n.get(u);if(!d){console.warn(`Parent node ${u} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}UN(e,t),i&&!d.parentId&&d.internals.rootParentIndex===void 0&&a==="auto"&&(d.internals.rootParentIndex=++i.i,d.internals.z=d.internals.z+i.i*HN),i&&d.internals.rootParentIndex!==void 0&&(i.i=d.internals.rootParentIndex);const c=o&&!Pc(a)?E0:0,{x:f,y:m,z:y}=WN(e,d,s,l,c,a),{positionAbsolute:w}=e.internals,_=f!==w.x||m!==w.y;(_||y!==e.internals.z)&&n.set(e.id,{...e,internals:{...e.internals,positionAbsolute:_?{x:f,y:m}:w,z:y}})}function k0(e,n,t){const r=Cn(e.zIndex)?e.zIndex:0;return Pc(t)?r:r+(e.selected?n:0)}function WN(e,n,t,r,i,o){const{x:s,y:l}=n.internals.positionAbsolute,a=it(e),u=lo(e,t),d=Xr(e.extent)?nr(u,e.extent,a):u;let c=nr({x:s+d.x,y:l+d.y},r,a);e.extent==="parent"&&(c=d0(c,a,n));const f=k0(e,i,o),m=n.internals.z??0;return{x:c.x,y:c.y,z:m>=f?m+1:f}}function zc(e,n,t,r=[0,0]){var s;const i=[],o=new Map;for(const l of e){const a=n.get(l.parentId);if(!a)continue;const u=((s=o.get(l.parentId))==null?void 0:s.expandedRect)??Yr(a),d=p0(u,l.rect);o.set(l.parentId,{expandedRect:d,parent:a})}return o.size>0&&o.forEach(({expandedRect:l,parent:a},u)=>{var h;const d=a.internals.positionAbsolute,c=it(a),f=a.origin??r,m=l.x<d.x?Math.round(Math.abs(d.x-l.x)):0,y=l.y<d.y?Math.round(Math.abs(d.y-l.y)):0,w=Math.max(c.width,Math.round(l.width)),_=Math.max(c.height,Math.round(l.height)),p=(w-c.width)*f[0],g=(_-c.height)*f[1];(m>0||y>0||p||g)&&(i.push({id:u,type:"position",position:{x:a.position.x-m+p,y:a.position.y-y+g}}),(h=t.get(u))==null||h.forEach(v=>{e.some(N=>N.id===v.id)||i.push({id:v.id,type:"position",position:{x:v.position.x+m,y:v.position.y+y}})})),(c.width<l.width||c.height<l.height||m||y)&&i.push({id:u,type:"dimensions",setAttributes:!0,dimensions:{width:w+(m?f[0]*m-p:0),height:_+(y?f[1]*y-g:0)}})}),i}function YN(e,n,t,r,i,o,s){const l=r==null?void 0:r.querySelector(".xyflow__viewport");let a=!1;if(!l)return{changes:[],updatedInternals:a};const u=[],d=window.getComputedStyle(l),{m22:c}=new window.DOMMatrixReadOnly(d.transform),f=[];for(const m of e.values()){const y=n.get(m.id);if(!y)continue;if(y.hidden){n.set(y.id,{...y,internals:{...y.internals,handleBounds:void 0}}),a=!0;continue}const w=Ic(m.nodeElement),_=y.measured.width!==w.width||y.measured.height!==w.height;if(!!(w.width&&w.height&&(_||!y.internals.handleBounds||m.force))){const g=m.nodeElement.getBoundingClientRect(),h=Xr(y.extent)?y.extent:o;let{positionAbsolute:v}=y.internals;y.parentId&&y.extent==="parent"?v=d0(v,w,n.get(y.parentId)):h&&(v=nr(v,h,w));const N={...y,measured:w,internals:{...y.internals,positionAbsolute:v,handleBounds:{source:Ed("source",m.nodeElement,g,c,y.id),target:Ed("target",m.nodeElement,g,c,y.id)}}};n.set(y.id,N),y.parentId&&Tc(N,n,t,{nodeOrigin:i,zIndexMode:s}),a=!0,_&&(u.push({id:y.id,type:"dimensions",dimensions:w}),y.expandParent&&y.parentId&&f.push({id:y.id,parentId:y.parentId,rect:Yr(N,i)}))}}if(f.length>0){const m=zc(f,n,t,i);u.push(...m)}return{changes:u,updatedInternals:a}}async function XN({delta:e,panZoom:n,transform:t,translateExtent:r,width:i,height:o}){if(!n||!e.x&&!e.y)return Promise.resolve(!1);const s=await n.setViewportConstrained({x:t[0]+e.x,y:t[1]+e.y,zoom:t[2]},[[0,0],[i,o]],r),l=!!s&&(s.x!==t[0]||s.y!==t[1]||s.k!==t[2]);return Promise.resolve(l)}function Pd(e,n,t,r,i,o){let s=i;const l=r.get(s)||new Map;r.set(s,l.set(t,n)),s=`${i}-${e}`;const a=r.get(s)||new Map;if(r.set(s,a.set(t,n)),o){s=`${i}-${e}-${o}`;const u=r.get(s)||new Map;r.set(s,u.set(t,n))}}function C0(e,n,t){e.clear(),n.clear();for(const r of t){const{source:i,target:o,sourceHandle:s=null,targetHandle:l=null}=r,a={edgeId:r.id,source:i,target:o,sourceHandle:s,targetHandle:l},u=`${i}-${s}--${o}-${l}`,d=`${o}-${l}--${i}-${s}`;Pd("source",a,d,e,i,s),Pd("target",a,u,e,o,l),n.set(r.id,r)}}function A0(e,n){if(!e.parentId)return!1;const t=n.get(e.parentId);return t?t.selected?!0:A0(t,n):!1}function Td(e,n,t){var i;let r=e;do{if((i=r==null?void 0:r.matches)!=null&&i.call(r,n))return!0;if(r===t)return!1;r=r==null?void 0:r.parentElement}while(r);return!1}function QN(e,n,t,r){const i=new Map;for(const[o,s]of e)if((s.selected||s.id===r)&&(!s.parentId||!A0(s,e))&&(s.draggable||n&&typeof s.draggable>"u")){const l=e.get(o);l&&i.set(o,{id:o,position:l.position||{x:0,y:0},distance:{x:t.x-l.internals.positionAbsolute.x,y:t.y-l.internals.positionAbsolute.y},extent:l.extent,parentId:l.parentId,origin:l.origin,expandParent:l.expandParent,internals:{positionAbsolute:l.internals.positionAbsolute||{x:0,y:0}},measured:{width:l.measured.width??0,height:l.measured.height??0}})}return i}function sa({nodeId:e,dragItems:n,nodeLookup:t,dragging:r=!0}){var s,l,a;const i=[];for(const[u,d]of n){const c=(s=t.get(u))==null?void 0:s.internals.userNode;c&&i.push({...c,position:d.position,dragging:r})}if(!e)return[i[0],i];const o=(l=t.get(e))==null?void 0:l.internals.userNode;return[o?{...o,position:((a=n.get(e))==null?void 0:a.position)||o.position,dragging:r}:i[0],i]}function GN({dragItems:e,snapGrid:n,x:t,y:r}){const i=e.values().next().value;if(!i)return null;const o={x:t-i.distance.x,y:r-i.distance.y},s=uo(o,n);return{x:s.x-o.x,y:s.y-o.y}}function KN({onNodeMouseDown:e,getStoreItems:n,onDragStart:t,onDrag:r,onDragStop:i}){let o={x:null,y:null},s=0,l=new Map,a=!1,u={x:0,y:0},d=null,c=!1,f=null,m=!1,y=!1,w=null;function _({noDragClassName:g,handleSelector:h,domNode:v,isSelectable:N,nodeId:S,nodeClickDistance:E=0}){f=Je(v);function I({x:j,y:H}){const{nodeLookup:k,nodeExtent:z,snapGrid:L,snapToGrid:R,nodeOrigin:C,onNodeDrag:A,onSelectionDrag:O,onError:D,updateNodePositions:$}=n();o={x:j,y:H};let U=!1;const W=l.size>1,B=W&&z?mu(ao(l)):null,Q=W&&R?GN({dragItems:l,snapGrid:L,x:j,y:H}):null;for(const[K,V]of l){if(!k.has(K))continue;let Z={x:j-V.distance.x,y:H-V.distance.y};R&&(Z=Q?{x:Math.round(Z.x+Q.x),y:Math.round(Z.y+Q.y)}:uo(Z,L));let ne=null;if(W&&z&&!V.extent&&B){const{positionAbsolute:q}=V.internals,oe=q.x-B.x+z[0][0],ce=q.x+V.measured.width-B.x2+z[1][0],se=q.y-B.y+z[0][1],Me=q.y+V.measured.height-B.y2+z[1][1];ne=[[oe,se],[ce,Me]]}const{position:G,positionAbsolute:ee}=f0({nodeId:K,nextPosition:Z,nodeLookup:k,nodeExtent:ne||z,nodeOrigin:C,onError:D});U=U||V.position.x!==G.x||V.position.y!==G.y,V.position=G,V.internals.positionAbsolute=ee}if(y=y||U,!!U&&($(l,!0),w&&(r||A||!S&&O))){const[K,V]=sa({nodeId:S,dragItems:l,nodeLookup:k});r==null||r(w,l,K,V),A==null||A(w,K,V),S||O==null||O(w,V)}}async function P(){if(!d)return;const{transform:j,panBy:H,autoPanSpeed:k,autoPanOnNodeDrag:z}=n();if(!z){a=!1,cancelAnimationFrame(s);return}const[L,R]=h0(u,d,k);(L!==0||R!==0)&&(o.x=(o.x??0)-L/j[2],o.y=(o.y??0)-R/j[2],await H({x:L,y:R})&&I(o)),s=requestAnimationFrame(P)}function F(j){var W;const{nodeLookup:H,multiSelectionActive:k,nodesDraggable:z,transform:L,snapGrid:R,snapToGrid:C,selectNodesOnDrag:A,onNodeDragStart:O,onSelectionDragStart:D,unselectNodesAndEdges:$}=n();c=!0,(!A||!N)&&!k&&S&&((W=H.get(S))!=null&&W.selected||$()),N&&A&&S&&(e==null||e(S));const U=Ci(j.sourceEvent,{transform:L,snapGrid:R,snapToGrid:C,containerBounds:d});if(o=U,l=QN(H,z,U,S),l.size>0&&(t||O||!S&&D)){const[B,Q]=sa({nodeId:S,dragItems:l,nodeLookup:H});t==null||t(j.sourceEvent,l,B,Q),O==null||O(j.sourceEvent,B,Q),S||D==null||D(j.sourceEvent,Q)}}const M=Ug().clickDistance(E).on("start",j=>{const{domNode:H,nodeDragThreshold:k,transform:z,snapGrid:L,snapToGrid:R}=n();d=(H==null?void 0:H.getBoundingClientRect())||null,m=!1,y=!1,w=j.sourceEvent,k===0&&F(j),o=Ci(j.sourceEvent,{transform:z,snapGrid:L,snapToGrid:R,containerBounds:d}),u=An(j.sourceEvent,d)}).on("drag",j=>{const{autoPanOnNodeDrag:H,transform:k,snapGrid:z,snapToGrid:L,nodeDragThreshold:R,nodeLookup:C}=n(),A=Ci(j.sourceEvent,{transform:k,snapGrid:z,snapToGrid:L,containerBounds:d});if(w=j.sourceEvent,(j.sourceEvent.type==="touchmove"&&j.sourceEvent.touches.length>1||S&&!C.has(S))&&(m=!0),!m){if(!a&&H&&c&&(a=!0,P()),!c){const O=An(j.sourceEvent,d),D=O.x-u.x,$=O.y-u.y;Math.sqrt(D*D+$*$)>R&&F(j)}(o.x!==A.xSnapped||o.y!==A.ySnapped)&&l&&c&&(u=An(j.sourceEvent,d),I(A))}}).on("end",j=>{if(!(!c||m)&&(a=!1,c=!1,cancelAnimationFrame(s),l.size>0)){const{nodeLookup:H,updateNodePositions:k,onNodeDragStop:z,onSelectionDragStop:L}=n();if(y&&(k(l,!1),y=!1),i||z||!S&&L){const[R,C]=sa({nodeId:S,dragItems:l,nodeLookup:H,dragging:!1});i==null||i(j.sourceEvent,l,R,C),z==null||z(j.sourceEvent,R,C),S||L==null||L(j.sourceEvent,C)}}}).filter(j=>{const H=j.target;return!j.button&&(!g||!Td(H,`.${g}`,v))&&(!h||Td(H,h,v))});f.call(M)}function p(){f==null||f.on(".drag",null)}return{update:_,destroy:p}}function ZN(e,n,t){const r=[],i={x:e.x-t,y:e.y-t,width:t*2,height:t*2};for(const o of n.values())Ki(i,Yr(o))>0&&r.push(o);return r}const qN=250;function JN(e,n,t,r){var l,a;let i=[],o=1/0;const s=ZN(e,t,n+qN);for(const u of s){const d=[...((l=u.internals.handleBounds)==null?void 0:l.source)??[],...((a=u.internals.handleBounds)==null?void 0:a.target)??[]];for(const c of d){if(r.nodeId===c.nodeId&&r.type===c.type&&r.id===c.id)continue;const{x:f,y:m}=tr(u,c,c.position,!0),y=Math.sqrt(Math.pow(f-e.x,2)+Math.pow(m-e.y,2));y>n||(y<o?(i=[{...c,x:f,y:m}],o=y):y===o&&i.push({...c,x:f,y:m}))}}if(!i.length)return null;if(i.length>1){const u=r.type==="source"?"target":"source";return i.find(d=>d.type===u)??i[0]}return i[0]}function I0(e,n,t,r,i,o=!1){var u,d,c;const s=r.get(e);if(!s)return null;const l=i==="strict"?(u=s.internals.handleBounds)==null?void 0:u[n]:[...((d=s.internals.handleBounds)==null?void 0:d.source)??[],...((c=s.internals.handleBounds)==null?void 0:c.target)??[]],a=(t?l==null?void 0:l.find(f=>f.id===t):l==null?void 0:l[0])??null;return a&&o?{...a,...tr(s,a,a.position,!0)}:a}function L0(e,n){return e||(n!=null&&n.classList.contains("target")?"target":n!=null&&n.classList.contains("source")?"source":null)}function eS(e,n){let t=null;return n?t=!0:e&&!n&&(t=!1),t}const M0=()=>!0;function nS(e,{connectionMode:n,connectionRadius:t,handleId:r,nodeId:i,edgeUpdaterType:o,isTarget:s,domNode:l,nodeLookup:a,lib:u,autoPanOnConnect:d,flowId:c,panBy:f,cancelConnection:m,onConnectStart:y,onConnect:w,onConnectEnd:_,isValidConnection:p=M0,onReconnectEnd:g,updateConnection:h,getTransform:v,getFromHandle:N,autoPanSpeed:S,dragThreshold:E=1,handleDomNode:I}){const P=y0(e.target);let F=0,M;const{x:j,y:H}=An(e),k=L0(o,I),z=l==null?void 0:l.getBoundingClientRect();let L=!1;if(!z||!k)return;const R=I0(i,k,r,a,n);if(!R)return;let C=An(e,z),A=!1,O=null,D=!1,$=null;function U(){if(!d||!z)return;const[G,ee]=h0(C,z,S);f({x:G,y:ee}),F=requestAnimationFrame(U)}const W={...R,nodeId:i,type:k,position:R.position},B=a.get(i);let K={inProgress:!0,isValid:null,from:tr(B,W,J.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:B,to:C,toHandle:null,toPosition:wd[W.position],toNode:null,pointer:C};function V(){L=!0,h(K),y==null||y(e,{nodeId:i,handleId:r,handleType:k})}E===0&&V();function Z(G){if(!L){const{x:Me,y:yn}=An(G),an=Me-j,vn=yn-H;if(!(an*an+vn*vn>E*E))return;V()}if(!N()||!W){ne(G);return}const ee=v();C=An(G,z),M=JN(co(C,ee,!1,[1,1]),t,a,W),A||(U(),A=!0);const q=P0(G,{handle:M,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:s?"target":"source",isValidConnection:p,doc:P,lib:u,flowId:c,nodeLookup:a});$=q.handleDomNode,O=q.connection,D=eS(!!M,q.isValid);const oe=a.get(i),ce=oe?tr(oe,W,J.Left,!0):K.from,se={...K,from:ce,isValid:D,to:q.toHandle&&D?bs({x:q.toHandle.x,y:q.toHandle.y},ee):C,toHandle:q.toHandle,toPosition:D&&q.toHandle?q.toHandle.position:wd[W.position],toNode:q.toHandle?a.get(q.toHandle.nodeId):null,pointer:C};h(se),K=se}function ne(G){if(!("touches"in G&&G.touches.length>0)){if(L){(M||$)&&O&&D&&(w==null||w(O));const{inProgress:ee,...q}=K,oe={...q,toPosition:K.toHandle?K.toPosition:null};_==null||_(G,oe),o&&(g==null||g(G,oe))}m(),cancelAnimationFrame(F),A=!1,D=!1,O=null,$=null,P.removeEventListener("mousemove",Z),P.removeEventListener("mouseup",ne),P.removeEventListener("touchmove",Z),P.removeEventListener("touchend",ne)}}P.addEventListener("mousemove",Z),P.addEventListener("mouseup",ne),P.addEventListener("touchmove",Z),P.addEventListener("touchend",ne)}function P0(e,{handle:n,connectionMode:t,fromNodeId:r,fromHandleId:i,fromType:o,doc:s,lib:l,flowId:a,isValidConnection:u=M0,nodeLookup:d}){const c=o==="target",f=n?s.querySelector(`.${l}-flow__handle[data-id="${a}-${n==null?void 0:n.nodeId}-${n==null?void 0:n.id}-${n==null?void 0:n.type}"]`):null,{x:m,y}=An(e),w=s.elementFromPoint(m,y),_=w!=null&&w.classList.contains(`${l}-flow__handle`)?w:f,p={handleDomNode:_,isValid:!1,connection:null,toHandle:null};if(_){const g=L0(void 0,_),h=_.getAttribute("data-nodeid"),v=_.getAttribute("data-handleid"),N=_.classList.contains("connectable"),S=_.classList.contains("connectableend");if(!h||!g)return p;const E={source:c?h:r,sourceHandle:c?v:i,target:c?r:h,targetHandle:c?i:v};p.connection=E;const P=N&&S&&(t===Ur.Strict?c&&g==="source"||!c&&g==="target":h!==r||v!==i);p.isValid=P&&u(E),p.toHandle=I0(h,g,v,d,t,!0)}return p}const wu={onPointerDown:nS,isValid:P0};function tS({domNode:e,panZoom:n,getTransform:t,getViewScale:r}){const i=Je(e);function o({translateExtent:l,width:a,height:u,zoomStep:d=1,pannable:c=!0,zoomable:f=!0,inversePan:m=!1}){const y=h=>{if(h.sourceEvent.type!=="wheel"||!n)return;const v=t(),N=h.sourceEvent.ctrlKey&&Zi()?10:1,S=-h.sourceEvent.deltaY*(h.sourceEvent.deltaMode===1?.05:h.sourceEvent.deltaMode?1:.002)*d,E=v[2]*Math.pow(2,S*N);n.scaleTo(E)};let w=[0,0];const _=h=>{(h.sourceEvent.type==="mousedown"||h.sourceEvent.type==="touchstart")&&(w=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY])},p=h=>{const v=t();if(h.sourceEvent.type!=="mousemove"&&h.sourceEvent.type!=="touchmove"||!n)return;const N=[h.sourceEvent.clientX??h.sourceEvent.touches[0].clientX,h.sourceEvent.clientY??h.sourceEvent.touches[0].clientY],S=[N[0]-w[0],N[1]-w[1]];w=N;const E=r()*Math.max(v[2],Math.log(v[2]))*(m?-1:1),I={x:v[0]-S[0]*E,y:v[1]-S[1]*E},P=[[0,0],[a,u]];n.setViewportConstrained({x:I.x,y:I.y,zoom:v[2]},P,l)},g=o0().on("start",_).on("zoom",c?p:null).on("zoom.wheel",f?y:null);i.call(g,{})}function s(){i.on("zoom",null)}return{update:o,destroy:s,pointer:Sn}}const pl=e=>({x:e.x,y:e.y,zoom:e.k}),la=({x:e,y:n,zoom:t})=>fl.translate(e,n).scale(t),Er=(e,n)=>e.target.closest(`.${n}`),T0=(e,n)=>n===2&&Array.isArray(e)&&e.includes(2),rS=e=>((e*=2)<=1?e*e*e:(e-=2)*e*e+2)/2,aa=(e,n=0,t=rS,r=()=>{})=>{const i=typeof n=="number"&&n>0;return i||r(),i?e.transition().duration(n).ease(t).on("end",r):e},z0=e=>{const n=e.ctrlKey&&Zi()?10:1;return-e.deltaY*(e.deltaMode===1?.05:e.deltaMode?1:.002)*n};function iS({zoomPanValues:e,noWheelClassName:n,d3Selection:t,d3Zoom:r,panOnScrollMode:i,panOnScrollSpeed:o,zoomOnPinch:s,onPanZoomStart:l,onPanZoom:a,onPanZoomEnd:u}){return d=>{if(Er(d,n))return d.ctrlKey&&d.preventDefault(),!1;d.preventDefault(),d.stopImmediatePropagation();const c=t.property("__zoom").k||1;if(d.ctrlKey&&s){const _=Sn(d),p=z0(d),g=c*Math.pow(2,p);r.scaleTo(t,g,_,d);return}const f=d.deltaMode===1?20:1;let m=i===Xt.Vertical?0:d.deltaX*f,y=i===Xt.Horizontal?0:d.deltaY*f;!Zi()&&d.shiftKey&&i!==Xt.Vertical&&(m=d.deltaY*f,y=0),r.translateBy(t,-(m/c)*o,-(y/c)*o,{internal:!0});const w=pl(t.property("__zoom"));clearTimeout(e.panScrollTimeout),e.isPanScrolling?(a==null||a(d,w),e.panScrollTimeout=setTimeout(()=>{u==null||u(d,w),e.isPanScrolling=!1},150)):(e.isPanScrolling=!0,l==null||l(d,w))}}function oS({noWheelClassName:e,preventScrolling:n,d3ZoomHandler:t}){return function(r,i){const o=r.type==="wheel",s=!n&&o&&!r.ctrlKey,l=Er(r,e);if(r.ctrlKey&&o&&l&&r.preventDefault(),s||l)return null;r.preventDefault(),t.call(this,r,i)}}function sS({zoomPanValues:e,onDraggingChange:n,onPanZoomStart:t}){return r=>{var o,s,l;if((o=r.sourceEvent)!=null&&o.internal)return;const i=pl(r.transform);e.mouseButton=((s=r.sourceEvent)==null?void 0:s.button)||0,e.isZoomingOrPanning=!0,e.prevViewport=i,((l=r.sourceEvent)==null?void 0:l.type)==="mousedown"&&n(!0),t&&(t==null||t(r.sourceEvent,i))}}function lS({zoomPanValues:e,panOnDrag:n,onPaneContextMenu:t,onTransformChange:r,onPanZoom:i}){return o=>{var s,l;e.usedRightMouseButton=!!(t&&T0(n,e.mouseButton??0)),(s=o.sourceEvent)!=null&&s.sync||r([o.transform.x,o.transform.y,o.transform.k]),i&&!((l=o.sourceEvent)!=null&&l.internal)&&(i==null||i(o.sourceEvent,pl(o.transform)))}}function aS({zoomPanValues:e,panOnDrag:n,panOnScroll:t,onDraggingChange:r,onPanZoomEnd:i,onPaneContextMenu:o}){return s=>{var l;if(!((l=s.sourceEvent)!=null&&l.internal)&&(e.isZoomingOrPanning=!1,o&&T0(n,e.mouseButton??0)&&!e.usedRightMouseButton&&s.sourceEvent&&o(s.sourceEvent),e.usedRightMouseButton=!1,r(!1),i)){const a=pl(s.transform);e.prevViewport=a,clearTimeout(e.timerId),e.timerId=setTimeout(()=>{i==null||i(s.sourceEvent,a)},t?150:0)}}}function uS({zoomActivationKeyPressed:e,zoomOnScroll:n,zoomOnPinch:t,panOnDrag:r,panOnScroll:i,zoomOnDoubleClick:o,userSelectionActive:s,noWheelClassName:l,noPanClassName:a,lib:u,connectionInProgress:d}){return c=>{var _;const f=e||n,m=t&&c.ctrlKey,y=c.type==="wheel";if(c.button===1&&c.type==="mousedown"&&(Er(c,`${u}-flow__node`)||Er(c,`${u}-flow__edge`)))return!0;if(!r&&!f&&!i&&!o&&!t||s||d&&!y||Er(c,l)&&y||Er(c,a)&&(!y||i&&y&&!e)||!t&&c.ctrlKey&&y)return!1;if(!t&&c.type==="touchstart"&&((_=c.touches)==null?void 0:_.length)>1)return c.preventDefault(),!1;if(!f&&!i&&!m&&y||!r&&(c.type==="mousedown"||c.type==="touchstart")||Array.isArray(r)&&!r.includes(c.button)&&c.type==="mousedown")return!1;const w=Array.isArray(r)&&r.includes(c.button)||!c.button||c.button<=1;return(!c.ctrlKey||y)&&w}}function cS({domNode:e,minZoom:n,maxZoom:t,translateExtent:r,viewport:i,onPanZoom:o,onPanZoomStart:s,onPanZoomEnd:l,onDraggingChange:a}){const u={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},d=e.getBoundingClientRect(),c=o0().scaleExtent([n,t]).translateExtent(r),f=Je(e).call(c);g({x:i.x,y:i.y,zoom:Wr(i.zoom,n,t)},[[0,0],[d.width,d.height]],r);const m=f.on("wheel.zoom"),y=f.on("dblclick.zoom");c.wheelDelta(z0);function w(M,j){return f?new Promise(H=>{c==null||c.interpolate((j==null?void 0:j.interpolate)==="linear"?ki:is).transform(aa(f,j==null?void 0:j.duration,j==null?void 0:j.ease,()=>H(!0)),M)}):Promise.resolve(!1)}function _({noWheelClassName:M,noPanClassName:j,onPaneContextMenu:H,userSelectionActive:k,panOnScroll:z,panOnDrag:L,panOnScrollMode:R,panOnScrollSpeed:C,preventScrolling:A,zoomOnPinch:O,zoomOnScroll:D,zoomOnDoubleClick:$,zoomActivationKeyPressed:U,lib:W,onTransformChange:B,connectionInProgress:Q,paneClickDistance:K,selectionOnDrag:V}){k&&!u.isZoomingOrPanning&&p();const Z=z&&!U&&!k;c.clickDistance(V?1/0:!Cn(K)||K<0?0:K);const ne=Z?iS({zoomPanValues:u,noWheelClassName:M,d3Selection:f,d3Zoom:c,panOnScrollMode:R,panOnScrollSpeed:C,zoomOnPinch:O,onPanZoomStart:s,onPanZoom:o,onPanZoomEnd:l}):oS({noWheelClassName:M,preventScrolling:A,d3ZoomHandler:m});if(f.on("wheel.zoom",ne,{passive:!1}),!k){const ee=sS({zoomPanValues:u,onDraggingChange:a,onPanZoomStart:s});c.on("start",ee);const q=lS({zoomPanValues:u,panOnDrag:L,onPaneContextMenu:!!H,onPanZoom:o,onTransformChange:B});c.on("zoom",q);const oe=aS({zoomPanValues:u,panOnDrag:L,panOnScroll:z,onPaneContextMenu:H,onPanZoomEnd:l,onDraggingChange:a});c.on("end",oe)}const G=uS({zoomActivationKeyPressed:U,panOnDrag:L,zoomOnScroll:D,panOnScroll:z,zoomOnDoubleClick:$,zoomOnPinch:O,userSelectionActive:k,noPanClassName:j,noWheelClassName:M,lib:W,connectionInProgress:Q});c.filter(G),$?f.on("dblclick.zoom",y):f.on("dblclick.zoom",null)}function p(){c.on("zoom",null)}async function g(M,j,H){const k=la(M),z=c==null?void 0:c.constrain()(k,j,H);return z&&await w(z),new Promise(L=>L(z))}async function h(M,j){const H=la(M);return await w(H,j),new Promise(k=>k(H))}function v(M){if(f){const j=la(M),H=f.property("__zoom");(H.k!==M.zoom||H.x!==M.x||H.y!==M.y)&&(c==null||c.transform(f,j,null,{sync:!0}))}}function N(){const M=f?i0(f.node()):{x:0,y:0,k:1};return{x:M.x,y:M.y,zoom:M.k}}function S(M,j){return f?new Promise(H=>{c==null||c.interpolate((j==null?void 0:j.interpolate)==="linear"?ki:is).scaleTo(aa(f,j==null?void 0:j.duration,j==null?void 0:j.ease,()=>H(!0)),M)}):Promise.resolve(!1)}function E(M,j){return f?new Promise(H=>{c==null||c.interpolate((j==null?void 0:j.interpolate)==="linear"?ki:is).scaleBy(aa(f,j==null?void 0:j.duration,j==null?void 0:j.ease,()=>H(!0)),M)}):Promise.resolve(!1)}function I(M){c==null||c.scaleExtent(M)}function P(M){c==null||c.translateExtent(M)}function F(M){const j=!Cn(M)||M<0?0:M;c==null||c.clickDistance(j)}return{update:_,destroy:p,setViewport:h,setViewportConstrained:g,getViewport:N,scaleTo:S,scaleBy:E,setScaleExtent:I,setTranslateExtent:P,syncViewport:v,setClickDistance:F}}var Qr;(function(e){e.Line="line",e.Handle="handle"})(Qr||(Qr={}));function fS({width:e,prevWidth:n,height:t,prevHeight:r,affectsX:i,affectsY:o}){const s=e-n,l=t-r,a=[s>0?1:s<0?-1:0,l>0?1:l<0?-1:0];return s&&i&&(a[0]=a[0]*-1),l&&o&&(a[1]=a[1]*-1),a}function zd(e){const n=e.includes("right")||e.includes("left"),t=e.includes("bottom")||e.includes("top"),r=e.includes("left"),i=e.includes("top");return{isHorizontal:n,isVertical:t,affectsX:r,affectsY:i}}function ut(e,n){return Math.max(0,n-e)}function ct(e,n){return Math.max(0,e-n)}function bo(e,n,t){return Math.max(0,n-e,e-t)}function Od(e,n){return e?!n:n}function dS(e,n,t,r,i,o,s,l){let{affectsX:a,affectsY:u}=n;const{isHorizontal:d,isVertical:c}=n,f=d&&c,{xSnapped:m,ySnapped:y}=t,{minWidth:w,maxWidth:_,minHeight:p,maxHeight:g}=r,{x:h,y:v,width:N,height:S,aspectRatio:E}=e;let I=Math.floor(d?m-e.pointerX:0),P=Math.floor(c?y-e.pointerY:0);const F=N+(a?-I:I),M=S+(u?-P:P),j=-o[0]*N,H=-o[1]*S;let k=bo(F,w,_),z=bo(M,p,g);if(s){let C=0,A=0;a&&I<0?C=ut(h+I+j,s[0][0]):!a&&I>0&&(C=ct(h+F+j,s[1][0])),u&&P<0?A=ut(v+P+H,s[0][1]):!u&&P>0&&(A=ct(v+M+H,s[1][1])),k=Math.max(k,C),z=Math.max(z,A)}if(l){let C=0,A=0;a&&I>0?C=ct(h+I,l[0][0]):!a&&I<0&&(C=ut(h+F,l[1][0])),u&&P>0?A=ct(v+P,l[0][1]):!u&&P<0&&(A=ut(v+M,l[1][1])),k=Math.max(k,C),z=Math.max(z,A)}if(i){if(d){const C=bo(F/E,p,g)*E;if(k=Math.max(k,C),s){let A=0;!a&&!u||a&&!u&&f?A=ct(v+H+F/E,s[1][1])*E:A=ut(v+H+(a?I:-I)/E,s[0][1])*E,k=Math.max(k,A)}if(l){let A=0;!a&&!u||a&&!u&&f?A=ut(v+F/E,l[1][1])*E:A=ct(v+(a?I:-I)/E,l[0][1])*E,k=Math.max(k,A)}}if(c){const C=bo(M*E,w,_)/E;if(z=Math.max(z,C),s){let A=0;!a&&!u||u&&!a&&f?A=ct(h+M*E+j,s[1][0])/E:A=ut(h+(u?P:-P)*E+j,s[0][0])/E,z=Math.max(z,A)}if(l){let A=0;!a&&!u||u&&!a&&f?A=ut(h+M*E,l[1][0])/E:A=ct(h+(u?P:-P)*E,l[0][0])/E,z=Math.max(z,A)}}}P=P+(P<0?z:-z),I=I+(I<0?k:-k),i&&(f?F>M*E?P=(Od(a,u)?-I:I)/E:I=(Od(a,u)?-P:P)*E:d?(P=I/E,u=a):(I=P*E,a=u));const L=a?h+I:h,R=u?v+P:v;return{width:N+(a?-I:I),height:S+(u?-P:P),x:o[0]*I*(a?-1:1)+L,y:o[1]*P*(u?-1:1)+R}}const O0={width:0,height:0,x:0,y:0},hS={...O0,pointerX:0,pointerY:0,aspectRatio:1};function pS(e){return[[0,0],[e.measured.width,e.measured.height]]}function gS(e,n,t){const r=n.position.x+e.position.x,i=n.position.y+e.position.y,o=e.measured.width??0,s=e.measured.height??0,l=t[0]*o,a=t[1]*s;return[[r-l,i-a],[r+o-l,i+s-a]]}function mS({domNode:e,nodeId:n,getStoreItems:t,onChange:r,onEnd:i}){const o=Je(e);let s={controlDirection:zd("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function l({controlPosition:u,boundaries:d,keepAspectRatio:c,resizeDirection:f,onResizeStart:m,onResize:y,onResizeEnd:w,shouldResize:_}){let p={...O0},g={...hS};s={boundaries:d,resizeDirection:f,keepAspectRatio:c,controlDirection:zd(u)};let h,v=null,N=[],S,E,I,P=!1;const F=Ug().on("start",M=>{const{nodeLookup:j,transform:H,snapGrid:k,snapToGrid:z,nodeOrigin:L,paneDomNode:R}=t();if(h=j.get(n),!h)return;v=(R==null?void 0:R.getBoundingClientRect())??null;const{xSnapped:C,ySnapped:A}=Ci(M.sourceEvent,{transform:H,snapGrid:k,snapToGrid:z,containerBounds:v});p={width:h.measured.width??0,height:h.measured.height??0,x:h.position.x??0,y:h.position.y??0},g={...p,pointerX:C,pointerY:A,aspectRatio:p.width/p.height},S=void 0,h.parentId&&(h.extent==="parent"||h.expandParent)&&(S=j.get(h.parentId),E=S&&h.extent==="parent"?pS(S):void 0),N=[],I=void 0;for(const[O,D]of j)if(D.parentId===n&&(N.push({id:O,position:{...D.position},extent:D.extent}),D.extent==="parent"||D.expandParent)){const $=gS(D,h,D.origin??L);I?I=[[Math.min($[0][0],I[0][0]),Math.min($[0][1],I[0][1])],[Math.max($[1][0],I[1][0]),Math.max($[1][1],I[1][1])]]:I=$}m==null||m(M,{...p})}).on("drag",M=>{const{transform:j,snapGrid:H,snapToGrid:k,nodeOrigin:z}=t(),L=Ci(M.sourceEvent,{transform:j,snapGrid:H,snapToGrid:k,containerBounds:v}),R=[];if(!h)return;const{x:C,y:A,width:O,height:D}=p,$={},U=h.origin??z,{width:W,height:B,x:Q,y:K}=dS(g,s.controlDirection,L,s.boundaries,s.keepAspectRatio,U,E,I),V=W!==O,Z=B!==D,ne=Q!==C&&V,G=K!==A&&Z;if(!ne&&!G&&!V&&!Z)return;if((ne||G||U[0]===1||U[1]===1)&&($.x=ne?Q:p.x,$.y=G?K:p.y,p.x=$.x,p.y=$.y,N.length>0)){const ce=Q-C,se=K-A;for(const Me of N)Me.position={x:Me.position.x-ce+U[0]*(W-O),y:Me.position.y-se+U[1]*(B-D)},R.push(Me)}if((V||Z)&&($.width=V&&(!s.resizeDirection||s.resizeDirection==="horizontal")?W:p.width,$.height=Z&&(!s.resizeDirection||s.resizeDirection==="vertical")?B:p.height,p.width=$.width,p.height=$.height),S&&h.expandParent){const ce=U[0]*($.width??0);$.x&&$.x<ce&&(p.x=ce,g.x=g.x-($.x-ce));const se=U[1]*($.height??0);$.y&&$.y<se&&(p.y=se,g.y=g.y-($.y-se))}const ee=fS({width:p.width,prevWidth:O,height:p.height,prevHeight:D,affectsX:s.controlDirection.affectsX,affectsY:s.controlDirection.affectsY}),q={...p,direction:ee};(_==null?void 0:_(M,q))!==!1&&(P=!0,y==null||y(M,q),r($,R))}).on("end",M=>{P&&(w==null||w(M,{...p}),i==null||i({...p}),P=!1)});o.call(F)}function a(){o.on(".drag",null)}return{update:l,destroy:a}}var R0={exports:{}},j0={},D0={exports:{}},$0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=T;function yS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var vS=typeof Object.is=="function"?Object.is:yS,xS=Gr.useState,wS=Gr.useEffect,_S=Gr.useLayoutEffect,NS=Gr.useDebugValue;function SS(e,n){var t=n(),r=xS({inst:{value:t,getSnapshot:n}}),i=r[0].inst,o=r[1];return _S(function(){i.value=t,i.getSnapshot=n,ua(i)&&o({inst:i})},[e,t,n]),wS(function(){return ua(i)&&o({inst:i}),e(function(){ua(i)&&o({inst:i})})},[e]),NS(t),t}function ua(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!vS(e,t)}catch{return!0}}function ES(e,n){return n()}var kS=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ES:SS;$0.useSyncExternalStore=Gr.useSyncExternalStore!==void 0?Gr.useSyncExternalStore:kS;D0.exports=$0;var CS=D0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gl=T,AS=CS;function IS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var LS=typeof Object.is=="function"?Object.is:IS,MS=AS.useSyncExternalStore,PS=gl.useRef,TS=gl.useEffect,zS=gl.useMemo,OS=gl.useDebugValue;j0.useSyncExternalStoreWithSelector=function(e,n,t,r,i){var o=PS(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=zS(function(){function a(m){if(!u){if(u=!0,d=m,m=r(m),i!==void 0&&s.hasValue){var y=s.value;if(i(y,m))return c=y}return c=m}if(y=c,LS(d,m))return y;var w=r(m);return i!==void 0&&i(y,w)?(d=m,y):(d=m,c=w)}var u=!1,d,c,f=t===void 0?null:t;return[function(){return a(n())},f===null?void 0:function(){return a(f())}]},[n,t,r,i]);var l=MS(e,o[0],o[1]);return TS(function(){s.hasValue=!0,s.value=l},[l]),OS(l),l};R0.exports=j0;var RS=R0.exports;const jS=ph(RS),DS={},Rd=e=>{let n;const t=new Set,r=(d,c)=>{const f=typeof d=="function"?d(n):d;if(!Object.is(f,n)){const m=n;n=c??(typeof f!="object"||f===null)?f:Object.assign({},n,f),t.forEach(y=>y(n,m))}},i=()=>n,a={setState:r,getState:i,getInitialState:()=>u,subscribe:d=>(t.add(d),()=>t.delete(d)),destroy:()=>{(DS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},u=n=e(r,i,a);return a},$S=e=>e?Rd(e):Rd,{useDebugValue:FS}=kh,{useSyncExternalStoreWithSelector:HS}=jS,bS=e=>e;function F0(e,n=bS,t){const r=HS(e.subscribe,e.getState,e.getServerState||e.getInitialState,n,t);return FS(r),r}const jd=(e,n)=>{const t=$S(e),r=(i,o=n)=>F0(t,i,o);return Object.assign(r,t),r},BS=(e,n)=>e?jd(e,n):jd;function me(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;if(e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(const[r,i]of e)if(!Object.is(i,n.get(r)))return!1;return!0}if(e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(const r of e)if(!n.has(r))return!1;return!0}const t=Object.keys(e);if(t.length!==Object.keys(n).length)return!1;for(const r of t)if(!Object.prototype.hasOwnProperty.call(n,r)||!Object.is(e[r],n[r]))return!1;return!0}const ml=T.createContext(null),VS=ml.Provider,H0=Fn.error001();function le(e,n){const t=T.useContext(ml);if(t===null)throw new Error(H0);return F0(t,e,n)}function ye(){const e=T.useContext(ml);if(e===null)throw new Error(H0);return T.useMemo(()=>({getState:e.getState,setState:e.setState,subscribe:e.subscribe}),[e])}const Dd={display:"none"},US={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},b0="react-flow__node-desc",B0="react-flow__edge-desc",WS="react-flow__aria-live",YS=e=>e.ariaLiveMessage,XS=e=>e.ariaLabelConfig;function QS({rfId:e}){const n=le(YS);return x.jsx("div",{id:`${WS}-${e}`,"aria-live":"assertive","aria-atomic":"true",style:US,children:n})}function GS({rfId:e,disableKeyboardA11y:n}){const t=le(XS);return x.jsxs(x.Fragment,{children:[x.jsx("div",{id:`${b0}-${e}`,style:Dd,children:n?t["node.a11yDescription.default"]:t["node.a11yDescription.keyboardDisabled"]}),x.jsx("div",{id:`${B0}-${e}`,style:Dd,children:t["edge.a11yDescription.default"]}),!n&&x.jsx(QS,{rfId:e})]})}const yl=T.forwardRef(({position:e="top-left",children:n,className:t,style:r,...i},o)=>{const s=`${e}`.split("-");return x.jsx("div",{className:Ae(["react-flow__panel",t,...s]),style:r,ref:o,...i,children:n})});yl.displayName="Panel";function KS({proOptions:e,position:n="bottom-right"}){return e!=null&&e.hideAttribution?null:x.jsx(yl,{position:n,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",children:x.jsx("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}const ZS=e=>{const n=[],t=[];for(const[,r]of e.nodeLookup)r.selected&&n.push(r.internals.userNode);for(const[,r]of e.edgeLookup)r.selected&&t.push(r);return{selectedNodes:n,selectedEdges:t}},Bo=e=>e.id;function qS(e,n){return me(e.selectedNodes.map(Bo),n.selectedNodes.map(Bo))&&me(e.selectedEdges.map(Bo),n.selectedEdges.map(Bo))}function JS({onSelectionChange:e}){const n=ye(),{selectedNodes:t,selectedEdges:r}=le(ZS,qS);return T.useEffect(()=>{const i={nodes:t,edges:r};e==null||e(i),n.getState().onSelectionChangeHandlers.forEach(o=>o(i))},[t,r,e]),null}const eE=e=>!!e.onSelectionChangeHandlers;function nE({onSelectionChange:e}){const n=le(eE);return e||n?x.jsx(JS,{onSelectionChange:e}):null}const _u=typeof window<"u"?T.useLayoutEffect:T.useEffect,V0=[0,0],tE={x:0,y:0,zoom:1},rE=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],$d=[...rE,"rfId"],iE=e=>({setNodes:e.setNodes,setEdges:e.setEdges,setMinZoom:e.setMinZoom,setMaxZoom:e.setMaxZoom,setTranslateExtent:e.setTranslateExtent,setNodeExtent:e.setNodeExtent,reset:e.reset,setDefaultNodesAndEdges:e.setDefaultNodesAndEdges}),Fd={translateExtent:Qi,nodeOrigin:V0,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function oE(e){const{setNodes:n,setEdges:t,setMinZoom:r,setMaxZoom:i,setTranslateExtent:o,setNodeExtent:s,reset:l,setDefaultNodesAndEdges:a}=le(iE,me),u=ye();_u(()=>(a(e.defaultNodes,e.defaultEdges),()=>{d.current=Fd,l()}),[]);const d=T.useRef(Fd);return _u(()=>{for(const c of $d){const f=e[c],m=d.current[c];f!==m&&(typeof e[c]>"u"||(c==="nodes"?n(f):c==="edges"?t(f):c==="minZoom"?r(f):c==="maxZoom"?i(f):c==="translateExtent"?o(f):c==="nodeExtent"?s(f):c==="ariaLabelConfig"?u.setState({ariaLabelConfig:IN(f)}):c==="fitView"?u.setState({fitViewQueued:f}):c==="fitViewOptions"?u.setState({fitViewOptions:f}):u.setState({[c]:f})))}d.current=e},$d.map(c=>e[c])),null}function Hd(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function sE(e){var r;const[n,t]=T.useState(e==="system"?null:e);return T.useEffect(()=>{if(e!=="system"){t(e);return}const i=Hd(),o=()=>t(i!=null&&i.matches?"dark":"light");return o(),i==null||i.addEventListener("change",o),()=>{i==null||i.removeEventListener("change",o)}},[e]),n!==null?n:(r=Hd())!=null&&r.matches?"dark":"light"}const bd=typeof document<"u"?document:null;function qi(e=null,n={target:bd,actInsideInputWithModifier:!0}){const[t,r]=T.useState(!1),i=T.useRef(!1),o=T.useRef(new Set([])),[s,l]=T.useMemo(()=>{if(e!==null){const u=(Array.isArray(e)?e:[e]).filter(c=>typeof c=="string").map(c=>c.replace("+",`
`).replace(`

`,`
+`).split(`
`)),d=u.reduce((c,f)=>c.concat(...f),[]);return[u,d]}return[[],[]]},[e]);return T.useEffect(()=>{const a=(n==null?void 0:n.target)??bd,u=(n==null?void 0:n.actInsideInputWithModifier)??!0;if(e!==null){const d=m=>{var _,p;if(i.current=m.ctrlKey||m.metaKey||m.shiftKey||m.altKey,(!i.current||i.current&&!u)&&v0(m))return!1;const w=Vd(m.code,l);if(o.current.add(m[w]),Bd(s,o.current,!1)){const g=((p=(_=m.composedPath)==null?void 0:_.call(m))==null?void 0:p[0])||m.target,h=(g==null?void 0:g.nodeName)==="BUTTON"||(g==null?void 0:g.nodeName)==="A";n.preventDefault!==!1&&(i.current||!h)&&m.preventDefault(),r(!0)}},c=m=>{const y=Vd(m.code,l);Bd(s,o.current,!0)?(r(!1),o.current.clear()):o.current.delete(m[y]),m.key==="Meta"&&o.current.clear(),i.current=!1},f=()=>{o.current.clear(),r(!1)};return a==null||a.addEventListener("keydown",d),a==null||a.addEventListener("keyup",c),window.addEventListener("blur",f),window.addEventListener("contextmenu",f),()=>{a==null||a.removeEventListener("keydown",d),a==null||a.removeEventListener("keyup",c),window.removeEventListener("blur",f),window.removeEventListener("contextmenu",f)}}},[e,r]),t}function Bd(e,n,t){return e.filter(r=>t||r.length===n.size).some(r=>r.every(i=>n.has(i)))}function Vd(e,n){return n.includes(e)?"code":"key"}const lE=()=>{const e=ye();return T.useMemo(()=>({zoomIn:n=>{const{panZoom:t}=e.getState();return t?t.scaleBy(1.2,n):Promise.resolve(!1)},zoomOut:n=>{const{panZoom:t}=e.getState();return t?t.scaleBy(1/1.2,n):Promise.resolve(!1)},zoomTo:(n,t)=>{const{panZoom:r}=e.getState();return r?r.scaleTo(n,t):Promise.resolve(!1)},getZoom:()=>e.getState().transform[2],setViewport:async(n,t)=>{const{transform:[r,i,o],panZoom:s}=e.getState();return s?(await s.setViewport({x:n.x??r,y:n.y??i,zoom:n.zoom??o},t),Promise.resolve(!0)):Promise.resolve(!1)},getViewport:()=>{const[n,t,r]=e.getState().transform;return{x:n,y:t,zoom:r}},setCenter:async(n,t,r)=>e.getState().setCenter(n,t,r),fitBounds:async(n,t)=>{const{width:r,height:i,minZoom:o,maxZoom:s,panZoom:l}=e.getState(),a=Ac(n,r,i,o,s,(t==null?void 0:t.padding)??.1);return l?(await l.setViewport(a,{duration:t==null?void 0:t.duration,ease:t==null?void 0:t.ease,interpolate:t==null?void 0:t.interpolate}),Promise.resolve(!0)):Promise.resolve(!1)},screenToFlowPosition:(n,t={})=>{const{transform:r,snapGrid:i,snapToGrid:o,domNode:s}=e.getState();if(!s)return n;const{x:l,y:a}=s.getBoundingClientRect(),u={x:n.x-l,y:n.y-a},d=t.snapGrid??i,c=t.snapToGrid??o;return co(u,r,c,d)},flowToScreenPosition:n=>{const{transform:t,domNode:r}=e.getState();if(!r)return n;const{x:i,y:o}=r.getBoundingClientRect(),s=bs(n,t);return{x:s.x+i,y:s.y+o}}}),[])};function U0(e,n){const t=[],r=new Map,i=[];for(const o of e)if(o.type==="add"){i.push(o);continue}else if(o.type==="remove"||o.type==="replace")r.set(o.id,[o]);else{const s=r.get(o.id);s?s.push(o):r.set(o.id,[o])}for(const o of n){const s=r.get(o.id);if(!s){t.push(o);continue}if(s[0].type==="remove")continue;if(s[0].type==="replace"){t.push({...s[0].item});continue}const l={...o};for(const a of s)aE(a,l);t.push(l)}return i.length&&i.forEach(o=>{o.index!==void 0?t.splice(o.index,0,{...o.item}):t.push({...o.item})}),t}function aE(e,n){switch(e.type){case"select":{n.selected=e.selected;break}case"position":{typeof e.position<"u"&&(n.position=e.position),typeof e.dragging<"u"&&(n.dragging=e.dragging);break}case"dimensions":{typeof e.dimensions<"u"&&(n.measured={...e.dimensions},e.setAttributes&&((e.setAttributes===!0||e.setAttributes==="width")&&(n.width=e.dimensions.width),(e.setAttributes===!0||e.setAttributes==="height")&&(n.height=e.dimensions.height))),typeof e.resizing=="boolean"&&(n.resizing=e.resizing);break}}}function uE(e,n){return U0(e,n)}function cE(e,n){return U0(e,n)}function Dt(e,n){return{id:e,type:"select",selected:n}}function kr(e,n=new Set,t=!1){const r=[];for(const[i,o]of e){const s=n.has(i);!(o.selected===void 0&&!s)&&o.selected!==s&&(t&&(o.selected=s),r.push(Dt(o.id,s)))}return r}function Ud({items:e=[],lookup:n}){var i;const t=[],r=new Map(e.map(o=>[o.id,o]));for(const[o,s]of e.entries()){const l=n.get(s.id),a=((i=l==null?void 0:l.internals)==null?void 0:i.userNode)??l;a!==void 0&&a!==s&&t.push({id:s.id,item:s,type:"replace"}),a===void 0&&t.push({item:s,type:"add",index:o})}for(const[o]of n)r.get(o)===void 0&&t.push({id:o,type:"remove"});return t}function Wd(e){return{id:e.id,type:"remove"}}const Yd=e=>vN(e),fE=e=>c0(e);function W0(e){return T.forwardRef(e)}function Xd(e){const[n,t]=T.useState(BigInt(0)),[r]=T.useState(()=>dE(()=>t(i=>i+BigInt(1))));return _u(()=>{const i=r.get();i.length&&(e(i),r.reset())},[n]),r}function dE(e){let n=[];return{get:()=>n,reset:()=>{n=[]},push:t=>{n.push(t),e()}}}const Y0=T.createContext(null);function hE({children:e}){const n=ye(),t=T.useCallback(l=>{const{nodes:a=[],setNodes:u,hasDefaultNodes:d,onNodesChange:c,nodeLookup:f,fitViewQueued:m,onNodesChangeMiddlewareMap:y}=n.getState();let w=a;for(const p of l)w=typeof p=="function"?p(w):p;let _=Ud({items:w,lookup:f});for(const p of y.values())_=p(_);d&&u(w),_.length>0?c==null||c(_):m&&window.requestAnimationFrame(()=>{const{fitViewQueued:p,nodes:g,setNodes:h}=n.getState();p&&h(g)})},[]),r=Xd(t),i=T.useCallback(l=>{const{edges:a=[],setEdges:u,hasDefaultEdges:d,onEdgesChange:c,edgeLookup:f}=n.getState();let m=a;for(const y of l)m=typeof y=="function"?y(m):y;d?u(m):c&&c(Ud({items:m,lookup:f}))},[]),o=Xd(i),s=T.useMemo(()=>({nodeQueue:r,edgeQueue:o}),[]);return x.jsx(Y0.Provider,{value:s,children:e})}function pE(){const e=T.useContext(Y0);if(!e)throw new Error("useBatchContext must be used within a BatchProvider");return e}const gE=e=>!!e.panZoom;function Oc(){const e=lE(),n=ye(),t=pE(),r=le(gE),i=T.useMemo(()=>{const o=c=>n.getState().nodeLookup.get(c),s=c=>{t.nodeQueue.push(c)},l=c=>{t.edgeQueue.push(c)},a=c=>{var p,g;const{nodeLookup:f,nodeOrigin:m}=n.getState(),y=Yd(c)?c:f.get(c.id),w=y.parentId?m0(y.position,y.measured,y.parentId,f,m):y.position,_={...y,position:w,width:((p=y.measured)==null?void 0:p.width)??y.width,height:((g=y.measured)==null?void 0:g.height)??y.height};return Yr(_)},u=(c,f,m={replace:!1})=>{s(y=>y.map(w=>{if(w.id===c){const _=typeof f=="function"?f(w):f;return m.replace&&Yd(_)?_:{...w,..._}}return w}))},d=(c,f,m={replace:!1})=>{l(y=>y.map(w=>{if(w.id===c){const _=typeof f=="function"?f(w):f;return m.replace&&fE(_)?_:{...w,..._}}return w}))};return{getNodes:()=>n.getState().nodes.map(c=>({...c})),getNode:c=>{var f;return(f=o(c))==null?void 0:f.internals.userNode},getInternalNode:o,getEdges:()=>{const{edges:c=[]}=n.getState();return c.map(f=>({...f}))},getEdge:c=>n.getState().edgeLookup.get(c),setNodes:s,setEdges:l,addNodes:c=>{const f=Array.isArray(c)?c:[c];t.nodeQueue.push(m=>[...m,...f])},addEdges:c=>{const f=Array.isArray(c)?c:[c];t.edgeQueue.push(m=>[...m,...f])},toObject:()=>{const{nodes:c=[],edges:f=[],transform:m}=n.getState(),[y,w,_]=m;return{nodes:c.map(p=>({...p})),edges:f.map(p=>({...p})),viewport:{x:y,y:w,zoom:_}}},deleteElements:async({nodes:c=[],edges:f=[]})=>{const{nodes:m,edges:y,onNodesDelete:w,onEdgesDelete:_,triggerNodeChanges:p,triggerEdgeChanges:g,onDelete:h,onBeforeDelete:v}=n.getState(),{nodes:N,edges:S}=await SN({nodesToRemove:c,edgesToRemove:f,nodes:m,edges:y,onBeforeDelete:v}),E=S.length>0,I=N.length>0;if(E){const P=S.map(Wd);_==null||_(S),g(P)}if(I){const P=N.map(Wd);w==null||w(N),p(P)}return(I||E)&&(h==null||h({nodes:N,edges:S})),{deletedNodes:N,deletedEdges:S}},getIntersectingNodes:(c,f=!0,m)=>{const y=Nd(c),w=y?c:a(c),_=m!==void 0;return w?(m||n.getState().nodes).filter(p=>{const g=n.getState().nodeLookup.get(p.id);if(g&&!y&&(p.id===c.id||!g.internals.positionAbsolute))return!1;const h=Yr(_?p:g),v=Ki(h,w);return f&&v>0||v>=h.width*h.height||v>=w.width*w.height}):[]},isNodeIntersecting:(c,f,m=!0)=>{const w=Nd(c)?c:a(c);if(!w)return!1;const _=Ki(w,f);return m&&_>0||_>=f.width*f.height||_>=w.width*w.height},updateNode:u,updateNodeData:(c,f,m={replace:!1})=>{u(c,y=>{const w=typeof f=="function"?f(y):f;return m.replace?{...y,data:w}:{...y,data:{...y.data,...w}}},m)},updateEdge:d,updateEdgeData:(c,f,m={replace:!1})=>{d(c,y=>{const w=typeof f=="function"?f(y):f;return m.replace?{...y,data:w}:{...y,data:{...y.data,...w}}},m)},getNodesBounds:c=>{const{nodeLookup:f,nodeOrigin:m}=n.getState();return xN(c,{nodeLookup:f,nodeOrigin:m})},getHandleConnections:({type:c,id:f,nodeId:m})=>{var y;return Array.from(((y=n.getState().connectionLookup.get(`${m}-${c}${f?`-${f}`:""}`))==null?void 0:y.values())??[])},getNodeConnections:({type:c,handleId:f,nodeId:m})=>{var y;return Array.from(((y=n.getState().connectionLookup.get(`${m}${c?f?`-${c}-${f}`:`-${c}`:""}`))==null?void 0:y.values())??[])},fitView:async c=>{const f=n.getState().fitViewResolver??AN();return n.setState({fitViewQueued:!0,fitViewOptions:c,fitViewResolver:f}),t.nodeQueue.push(m=>[...m]),f.promise}}},[]);return T.useMemo(()=>({...i,...e,viewportInitialized:r}),[r])}const Qd=e=>e.selected,mE=typeof window<"u"?window:void 0;function yE({deleteKeyCode:e,multiSelectionKeyCode:n}){const t=ye(),{deleteElements:r}=Oc(),i=qi(e,{actInsideInputWithModifier:!1}),o=qi(n,{target:mE});T.useEffect(()=>{if(i){const{edges:s,nodes:l}=t.getState();r({nodes:l.filter(Qd),edges:s.filter(Qd)}),t.setState({nodesSelectionActive:!1})}},[i]),T.useEffect(()=>{t.setState({multiSelectionActive:o})},[o])}function vE(e){const n=ye();T.useEffect(()=>{const t=()=>{var i,o,s,l;if(!e.current||!(((o=(i=e.current).checkVisibility)==null?void 0:o.call(i))??!0))return!1;const r=Ic(e.current);(r.height===0||r.width===0)&&((l=(s=n.getState()).onError)==null||l.call(s,"004",Fn.error004())),n.setState({width:r.width||500,height:r.height||500})};if(e.current){t(),window.addEventListener("resize",t);const r=new ResizeObserver(()=>t());return r.observe(e.current),()=>{window.removeEventListener("resize",t),r&&e.current&&r.unobserve(e.current)}}},[])}const vl={position:"absolute",width:"100%",height:"100%",top:0,left:0},xE=e=>({userSelectionActive:e.userSelectionActive,lib:e.lib,connectionInProgress:e.connection.inProgress});function wE({onPaneContextMenu:e,zoomOnScroll:n=!0,zoomOnPinch:t=!0,panOnScroll:r=!1,panOnScrollSpeed:i=.5,panOnScrollMode:o=Xt.Free,zoomOnDoubleClick:s=!0,panOnDrag:l=!0,defaultViewport:a,translateExtent:u,minZoom:d,maxZoom:c,zoomActivationKeyCode:f,preventScrolling:m=!0,children:y,noWheelClassName:w,noPanClassName:_,onViewportChange:p,isControlledViewport:g,paneClickDistance:h,selectionOnDrag:v}){const N=ye(),S=T.useRef(null),{userSelectionActive:E,lib:I,connectionInProgress:P}=le(xE,me),F=qi(f),M=T.useRef();vE(S);const j=T.useCallback(H=>{p==null||p({x:H[0],y:H[1],zoom:H[2]}),g||N.setState({transform:H})},[p,g]);return T.useEffect(()=>{if(S.current){M.current=cS({domNode:S.current,minZoom:d,maxZoom:c,translateExtent:u,viewport:a,onDraggingChange:L=>N.setState(R=>R.paneDragging===L?R:{paneDragging:L}),onPanZoomStart:(L,R)=>{const{onViewportChangeStart:C,onMoveStart:A}=N.getState();A==null||A(L,R),C==null||C(R)},onPanZoom:(L,R)=>{const{onViewportChange:C,onMove:A}=N.getState();A==null||A(L,R),C==null||C(R)},onPanZoomEnd:(L,R)=>{const{onViewportChangeEnd:C,onMoveEnd:A}=N.getState();A==null||A(L,R),C==null||C(R)}});const{x:H,y:k,zoom:z}=M.current.getViewport();return N.setState({panZoom:M.current,transform:[H,k,z],domNode:S.current.closest(".react-flow")}),()=>{var L;(L=M.current)==null||L.destroy()}}},[]),T.useEffect(()=>{var H;(H=M.current)==null||H.update({onPaneContextMenu:e,zoomOnScroll:n,zoomOnPinch:t,panOnScroll:r,panOnScrollSpeed:i,panOnScrollMode:o,zoomOnDoubleClick:s,panOnDrag:l,zoomActivationKeyPressed:F,preventScrolling:m,noPanClassName:_,userSelectionActive:E,noWheelClassName:w,lib:I,onTransformChange:j,connectionInProgress:P,selectionOnDrag:v,paneClickDistance:h})},[e,n,t,r,i,o,s,l,F,m,_,E,w,I,j,P,v,h]),x.jsx("div",{className:"react-flow__renderer",ref:S,style:vl,children:y})}const _E=e=>({userSelectionActive:e.userSelectionActive,userSelectionRect:e.userSelectionRect});function NE(){const{userSelectionActive:e,userSelectionRect:n}=le(_E,me);return e&&n?x.jsx("div",{className:"react-flow__selection react-flow__container",style:{width:n.width,height:n.height,transform:`translate(${n.x}px, ${n.y}px)`}}):null}const ca=(e,n)=>t=>{t.target===n.current&&(e==null||e(t))},SE=e=>({userSelectionActive:e.userSelectionActive,elementsSelectable:e.elementsSelectable,connectionInProgress:e.connection.inProgress,dragging:e.paneDragging});function EE({isSelecting:e,selectionKeyPressed:n,selectionMode:t=Gi.Full,panOnDrag:r,paneClickDistance:i,selectionOnDrag:o,onSelectionStart:s,onSelectionEnd:l,onPaneClick:a,onPaneContextMenu:u,onPaneScroll:d,onPaneMouseEnter:c,onPaneMouseMove:f,onPaneMouseLeave:m,children:y}){const w=ye(),{userSelectionActive:_,elementsSelectable:p,dragging:g,connectionInProgress:h}=le(SE,me),v=p&&(e||_),N=T.useRef(null),S=T.useRef(),E=T.useRef(new Set),I=T.useRef(new Set),P=T.useRef(!1),F=C=>{if(P.current||h){P.current=!1;return}a==null||a(C),w.getState().resetSelectedElements(),w.setState({nodesSelectionActive:!1})},M=C=>{if(Array.isArray(r)&&(r!=null&&r.includes(2))){C.preventDefault();return}u==null||u(C)},j=d?C=>d(C):void 0,H=C=>{P.current&&(C.stopPropagation(),P.current=!1)},k=C=>{var B,Q;const{domNode:A}=w.getState();if(S.current=A==null?void 0:A.getBoundingClientRect(),!S.current)return;const O=C.target===N.current;if(!O&&!!C.target.closest(".nokey")||!e||!(o&&O||n)||C.button!==0||!C.isPrimary)return;(Q=(B=C.target)==null?void 0:B.setPointerCapture)==null||Q.call(B,C.pointerId),P.current=!1;const{x:U,y:W}=An(C.nativeEvent,S.current);w.setState({userSelectionRect:{width:0,height:0,startX:U,startY:W,x:U,y:W}}),O||(C.stopPropagation(),C.preventDefault())},z=C=>{const{userSelectionRect:A,transform:O,nodeLookup:D,edgeLookup:$,connectionLookup:U,triggerNodeChanges:W,triggerEdgeChanges:B,defaultEdgeOptions:Q,resetSelectedElements:K}=w.getState();if(!S.current||!A)return;const{x:V,y:Z}=An(C.nativeEvent,S.current),{startX:ne,startY:G}=A;if(!P.current){const se=n?0:i;if(Math.hypot(V-ne,Z-G)<=se)return;K(),s==null||s(C)}P.current=!0;const ee={startX:ne,startY:G,x:V<ne?V:ne,y:Z<G?Z:G,width:Math.abs(V-ne),height:Math.abs(Z-G)},q=E.current,oe=I.current;E.current=new Set(Cc(D,ee,O,t===Gi.Partial,!0).map(se=>se.id)),I.current=new Set;const ce=(Q==null?void 0:Q.selectable)??!0;for(const se of E.current){const Me=U.get(se);if(Me)for(const{edgeId:yn}of Me.values()){const an=$.get(yn);an&&(an.selectable??ce)&&I.current.add(yn)}}if(!Sd(q,E.current)){const se=kr(D,E.current,!0);W(se)}if(!Sd(oe,I.current)){const se=kr($,I.current);B(se)}w.setState({userSelectionRect:ee,userSelectionActive:!0,nodesSelectionActive:!1})},L=C=>{var A,O;C.button===0&&((O=(A=C.target)==null?void 0:A.releasePointerCapture)==null||O.call(A,C.pointerId),!_&&C.target===N.current&&w.getState().userSelectionRect&&(F==null||F(C)),w.setState({userSelectionActive:!1,userSelectionRect:null}),P.current&&(l==null||l(C),w.setState({nodesSelectionActive:E.current.size>0})))},R=r===!0||Array.isArray(r)&&r.includes(0);return x.jsxs("div",{className:Ae(["react-flow__pane",{draggable:R,dragging:g,selection:e}]),onClick:v?void 0:ca(F,N),onContextMenu:ca(M,N),onWheel:ca(j,N),onPointerEnter:v?void 0:c,onPointerMove:v?z:f,onPointerUp:v?L:void 0,onPointerDownCapture:v?k:void 0,onClickCapture:v?H:void 0,onPointerLeave:m,ref:N,style:vl,children:[y,x.jsx(NE,{})]})}function Nu({id:e,store:n,unselect:t=!1,nodeRef:r}){const{addSelectedNodes:i,unselectNodesAndEdges:o,multiSelectionActive:s,nodeLookup:l,onError:a}=n.getState(),u=l.get(e);if(!u){a==null||a("012",Fn.error012(e));return}n.setState({nodesSelectionActive:!1}),u.selected?(t||u.selected&&s)&&(o({nodes:[u],edges:[]}),requestAnimationFrame(()=>{var d;return(d=r==null?void 0:r.current)==null?void 0:d.blur()})):i([e])}function X0({nodeRef:e,disabled:n=!1,noDragClassName:t,handleSelector:r,nodeId:i,isSelectable:o,nodeClickDistance:s}){const l=ye(),[a,u]=T.useState(!1),d=T.useRef();return T.useEffect(()=>{d.current=KN({getStoreItems:()=>l.getState(),onNodeMouseDown:c=>{Nu({id:c,store:l,nodeRef:e})},onDragStart:()=>{u(!0)},onDragStop:()=>{u(!1)}})},[]),T.useEffect(()=>{if(!(n||!e.current||!d.current))return d.current.update({noDragClassName:t,handleSelector:r,domNode:e.current,isSelectable:o,nodeId:i,nodeClickDistance:s}),()=>{var c;(c=d.current)==null||c.destroy()}},[t,r,n,o,e,i,s]),a}const kE=e=>n=>n.selected&&(n.draggable||e&&typeof n.draggable>"u");function Q0(){const e=ye();return T.useCallback(t=>{const{nodeExtent:r,snapToGrid:i,snapGrid:o,nodesDraggable:s,onError:l,updateNodePositions:a,nodeLookup:u,nodeOrigin:d}=e.getState(),c=new Map,f=kE(s),m=i?o[0]:5,y=i?o[1]:5,w=t.direction.x*m*t.factor,_=t.direction.y*y*t.factor;for(const[,p]of u){if(!f(p))continue;let g={x:p.internals.positionAbsolute.x+w,y:p.internals.positionAbsolute.y+_};i&&(g=uo(g,o));const{position:h,positionAbsolute:v}=f0({nodeId:p.id,nextPosition:g,nodeLookup:u,nodeExtent:r,nodeOrigin:d,onError:l});p.position=h,p.internals.positionAbsolute=v,c.set(p.id,p)}a(c)},[])}const Rc=T.createContext(null),CE=Rc.Provider;Rc.Consumer;const G0=()=>T.useContext(Rc),AE=e=>({connectOnClick:e.connectOnClick,noPanClassName:e.noPanClassName,rfId:e.rfId}),IE=(e,n,t)=>r=>{const{connectionClickStartHandle:i,connectionMode:o,connection:s}=r,{fromHandle:l,toHandle:a,isValid:u}=s,d=(a==null?void 0:a.nodeId)===e&&(a==null?void 0:a.id)===n&&(a==null?void 0:a.type)===t;return{connectingFrom:(l==null?void 0:l.nodeId)===e&&(l==null?void 0:l.id)===n&&(l==null?void 0:l.type)===t,connectingTo:d,clickConnecting:(i==null?void 0:i.nodeId)===e&&(i==null?void 0:i.id)===n&&(i==null?void 0:i.type)===t,isPossibleEndHandle:o===Ur.Strict?(l==null?void 0:l.type)!==t:e!==(l==null?void 0:l.nodeId)||n!==(l==null?void 0:l.id),connectionInProcess:!!l,clickConnectionInProcess:!!i,valid:d&&u}};function LE({type:e="source",position:n=J.Top,isValidConnection:t,isConnectable:r=!0,isConnectableStart:i=!0,isConnectableEnd:o=!0,id:s,onConnect:l,children:a,className:u,onMouseDown:d,onTouchStart:c,...f},m){var z,L;const y=s||null,w=e==="target",_=ye(),p=G0(),{connectOnClick:g,noPanClassName:h,rfId:v}=le(AE,me),{connectingFrom:N,connectingTo:S,clickConnecting:E,isPossibleEndHandle:I,connectionInProcess:P,clickConnectionInProcess:F,valid:M}=le(IE(p,y,e),me);p||(L=(z=_.getState()).onError)==null||L.call(z,"010",Fn.error010());const j=R=>{const{defaultEdgeOptions:C,onConnect:A,hasDefaultEdges:O}=_.getState(),D={...C,...R};if(O){const{edges:$,setEdges:U}=_.getState();U(ON(D,$))}A==null||A(D),l==null||l(D)},H=R=>{if(!p)return;const C=x0(R.nativeEvent);if(i&&(C&&R.button===0||!C)){const A=_.getState();wu.onPointerDown(R.nativeEvent,{handleDomNode:R.currentTarget,autoPanOnConnect:A.autoPanOnConnect,connectionMode:A.connectionMode,connectionRadius:A.connectionRadius,domNode:A.domNode,nodeLookup:A.nodeLookup,lib:A.lib,isTarget:w,handleId:y,nodeId:p,flowId:A.rfId,panBy:A.panBy,cancelConnection:A.cancelConnection,onConnectStart:A.onConnectStart,onConnectEnd:(...O)=>{var D,$;return($=(D=_.getState()).onConnectEnd)==null?void 0:$.call(D,...O)},updateConnection:A.updateConnection,onConnect:j,isValidConnection:t||((...O)=>{var D,$;return(($=(D=_.getState()).isValidConnection)==null?void 0:$.call(D,...O))??!0}),getTransform:()=>_.getState().transform,getFromHandle:()=>_.getState().connection.fromHandle,autoPanSpeed:A.autoPanSpeed,dragThreshold:A.connectionDragThreshold})}C?d==null||d(R):c==null||c(R)},k=R=>{const{onClickConnectStart:C,onClickConnectEnd:A,connectionClickStartHandle:O,connectionMode:D,isValidConnection:$,lib:U,rfId:W,nodeLookup:B,connection:Q}=_.getState();if(!p||!O&&!i)return;if(!O){C==null||C(R.nativeEvent,{nodeId:p,handleId:y,handleType:e}),_.setState({connectionClickStartHandle:{nodeId:p,type:e,id:y}});return}const K=y0(R.target),V=t||$,{connection:Z,isValid:ne}=wu.isValid(R.nativeEvent,{handle:{nodeId:p,id:y,type:e},connectionMode:D,fromNodeId:O.nodeId,fromHandleId:O.id||null,fromType:O.type,isValidConnection:V,flowId:W,doc:K,lib:U,nodeLookup:B});ne&&Z&&j(Z);const G=structuredClone(Q);delete G.inProgress,G.toPosition=G.toHandle?G.toHandle.position:null,A==null||A(R,G),_.setState({connectionClickStartHandle:null})};return x.jsx("div",{"data-handleid":y,"data-nodeid":p,"data-handlepos":n,"data-id":`${v}-${p}-${y}-${e}`,className:Ae(["react-flow__handle",`react-flow__handle-${n}`,"nodrag",h,u,{source:!w,target:w,connectable:r,connectablestart:i,connectableend:o,clickconnecting:E,connectingfrom:N,connectingto:S,valid:M,connectionindicator:r&&(!P||I)&&(P||F?o:i)}]),onMouseDown:H,onTouchStart:H,onClick:g?k:void 0,ref:m,...f,children:a})}const Bs=T.memo(W0(LE));function ME({data:e,isConnectable:n,sourcePosition:t=J.Bottom}){return x.jsxs(x.Fragment,{children:[e==null?void 0:e.label,x.jsx(Bs,{type:"source",position:t,isConnectable:n})]})}function PE({data:e,isConnectable:n,targetPosition:t=J.Top,sourcePosition:r=J.Bottom}){return x.jsxs(x.Fragment,{children:[x.jsx(Bs,{type:"target",position:t,isConnectable:n}),e==null?void 0:e.label,x.jsx(Bs,{type:"source",position:r,isConnectable:n})]})}function TE(){return null}function zE({data:e,isConnectable:n,targetPosition:t=J.Top}){return x.jsxs(x.Fragment,{children:[x.jsx(Bs,{type:"target",position:t,isConnectable:n}),e==null?void 0:e.label]})}const Vs={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Gd={input:ME,default:PE,output:zE,group:TE};function OE(e){var n,t,r,i;return e.internals.handleBounds===void 0?{width:e.width??e.initialWidth??((n=e.style)==null?void 0:n.width),height:e.height??e.initialHeight??((t=e.style)==null?void 0:t.height)}:{width:e.width??((r=e.style)==null?void 0:r.width),height:e.height??((i=e.style)==null?void 0:i.height)}}const RE=e=>{const{width:n,height:t,x:r,y:i}=ao(e.nodeLookup,{filter:o=>!!o.selected});return{width:Cn(n)?n:null,height:Cn(t)?t:null,userSelectionActive:e.userSelectionActive,transformString:`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]}) translate(${r}px,${i}px)`}};function jE({onSelectionContextMenu:e,noPanClassName:n,disableKeyboardA11y:t}){const r=ye(),{width:i,height:o,transformString:s,userSelectionActive:l}=le(RE,me),a=Q0(),u=T.useRef(null);T.useEffect(()=>{var m;t||(m=u.current)==null||m.focus({preventScroll:!0})},[t]);const d=!l&&i!==null&&o!==null;if(X0({nodeRef:u,disabled:!d}),!d)return null;const c=e?m=>{const y=r.getState().nodes.filter(w=>w.selected);e(m,y)}:void 0,f=m=>{Object.prototype.hasOwnProperty.call(Vs,m.key)&&(m.preventDefault(),a({direction:Vs[m.key],factor:m.shiftKey?4:1}))};return x.jsx("div",{className:Ae(["react-flow__nodesselection","react-flow__container",n]),style:{transform:s},children:x.jsx("div",{ref:u,className:"react-flow__nodesselection-rect",onContextMenu:c,tabIndex:t?void 0:-1,onKeyDown:t?void 0:f,style:{width:i,height:o}})})}const Kd=typeof window<"u"?window:void 0,DE=e=>({nodesSelectionActive:e.nodesSelectionActive,userSelectionActive:e.userSelectionActive});function K0({children:e,onPaneClick:n,onPaneMouseEnter:t,onPaneMouseMove:r,onPaneMouseLeave:i,onPaneContextMenu:o,onPaneScroll:s,paneClickDistance:l,deleteKeyCode:a,selectionKeyCode:u,selectionOnDrag:d,selectionMode:c,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:y,panActivationKeyCode:w,zoomActivationKeyCode:_,elementsSelectable:p,zoomOnScroll:g,zoomOnPinch:h,panOnScroll:v,panOnScrollSpeed:N,panOnScrollMode:S,zoomOnDoubleClick:E,panOnDrag:I,defaultViewport:P,translateExtent:F,minZoom:M,maxZoom:j,preventScrolling:H,onSelectionContextMenu:k,noWheelClassName:z,noPanClassName:L,disableKeyboardA11y:R,onViewportChange:C,isControlledViewport:A}){const{nodesSelectionActive:O,userSelectionActive:D}=le(DE,me),$=qi(u,{target:Kd}),U=qi(w,{target:Kd}),W=U||I,B=U||v,Q=d&&W!==!0,K=$||D||Q;return yE({deleteKeyCode:a,multiSelectionKeyCode:y}),x.jsx(wE,{onPaneContextMenu:o,elementsSelectable:p,zoomOnScroll:g,zoomOnPinch:h,panOnScroll:B,panOnScrollSpeed:N,panOnScrollMode:S,zoomOnDoubleClick:E,panOnDrag:!$&&W,defaultViewport:P,translateExtent:F,minZoom:M,maxZoom:j,zoomActivationKeyCode:_,preventScrolling:H,noWheelClassName:z,noPanClassName:L,onViewportChange:C,isControlledViewport:A,paneClickDistance:l,selectionOnDrag:Q,children:x.jsxs(EE,{onSelectionStart:f,onSelectionEnd:m,onPaneClick:n,onPaneMouseEnter:t,onPaneMouseMove:r,onPaneMouseLeave:i,onPaneContextMenu:o,onPaneScroll:s,panOnDrag:W,isSelecting:!!K,selectionMode:c,selectionKeyPressed:$,paneClickDistance:l,selectionOnDrag:Q,children:[e,O&&x.jsx(jE,{onSelectionContextMenu:k,noPanClassName:L,disableKeyboardA11y:R})]})})}K0.displayName="FlowRenderer";const $E=T.memo(K0),FE=e=>n=>e?Cc(n.nodeLookup,{x:0,y:0,width:n.width,height:n.height},n.transform,!0).map(t=>t.id):Array.from(n.nodeLookup.keys());function HE(e){return le(T.useCallback(FE(e),[e]),me)}const bE=e=>e.updateNodeInternals;function BE(){const e=le(bE),[n]=T.useState(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(t=>{const r=new Map;t.forEach(i=>{const o=i.target.getAttribute("data-id");r.set(o,{id:o,nodeElement:i.target,force:!0})}),e(r)}));return T.useEffect(()=>()=>{n==null||n.disconnect()},[n]),n}function VE({node:e,nodeType:n,hasDimensions:t,resizeObserver:r}){const i=ye(),o=T.useRef(null),s=T.useRef(null),l=T.useRef(e.sourcePosition),a=T.useRef(e.targetPosition),u=T.useRef(n),d=t&&!!e.internals.handleBounds;return T.useEffect(()=>{o.current&&!e.hidden&&(!d||s.current!==o.current)&&(s.current&&(r==null||r.unobserve(s.current)),r==null||r.observe(o.current),s.current=o.current)},[d,e.hidden]),T.useEffect(()=>()=>{s.current&&(r==null||r.unobserve(s.current),s.current=null)},[]),T.useEffect(()=>{if(o.current){const c=u.current!==n,f=l.current!==e.sourcePosition,m=a.current!==e.targetPosition;(c||f||m)&&(u.current=n,l.current=e.sourcePosition,a.current=e.targetPosition,i.getState().updateNodeInternals(new Map([[e.id,{id:e.id,nodeElement:o.current,force:!0}]])))}},[e.id,n,e.sourcePosition,e.targetPosition]),o}function UE({id:e,onClick:n,onMouseEnter:t,onMouseMove:r,onMouseLeave:i,onContextMenu:o,onDoubleClick:s,nodesDraggable:l,elementsSelectable:a,nodesConnectable:u,nodesFocusable:d,resizeObserver:c,noDragClassName:f,noPanClassName:m,disableKeyboardA11y:y,rfId:w,nodeTypes:_,nodeClickDistance:p,onError:g}){const{node:h,internals:v,isParent:N}=le(V=>{const Z=V.nodeLookup.get(e),ne=V.parentLookup.has(e);return{node:Z,internals:Z.internals,isParent:ne}},me);let S=h.type||"default",E=(_==null?void 0:_[S])||Gd[S];E===void 0&&(g==null||g("003",Fn.error003(S)),S="default",E=(_==null?void 0:_.default)||Gd.default);const I=!!(h.draggable||l&&typeof h.draggable>"u"),P=!!(h.selectable||a&&typeof h.selectable>"u"),F=!!(h.connectable||u&&typeof h.connectable>"u"),M=!!(h.focusable||d&&typeof h.focusable>"u"),j=ye(),H=g0(h),k=VE({node:h,nodeType:S,hasDimensions:H,resizeObserver:c}),z=X0({nodeRef:k,disabled:h.hidden||!I,noDragClassName:f,handleSelector:h.dragHandle,nodeId:e,isSelectable:P,nodeClickDistance:p}),L=Q0();if(h.hidden)return null;const R=it(h),C=OE(h),A=P||I||n||t||r||i,O=t?V=>t(V,{...v.userNode}):void 0,D=r?V=>r(V,{...v.userNode}):void 0,$=i?V=>i(V,{...v.userNode}):void 0,U=o?V=>o(V,{...v.userNode}):void 0,W=s?V=>s(V,{...v.userNode}):void 0,B=V=>{const{selectNodesOnDrag:Z,nodeDragThreshold:ne}=j.getState();P&&(!Z||!I||ne>0)&&Nu({id:e,store:j,nodeRef:k}),n&&n(V,{...v.userNode})},Q=V=>{if(!(v0(V.nativeEvent)||y)){if(s0.includes(V.key)&&P){const Z=V.key==="Escape";Nu({id:e,store:j,unselect:Z,nodeRef:k})}else if(I&&h.selected&&Object.prototype.hasOwnProperty.call(Vs,V.key)){V.preventDefault();const{ariaLabelConfig:Z}=j.getState();j.setState({ariaLiveMessage:Z["node.a11yDescription.ariaLiveMessage"]({direction:V.key.replace("Arrow","").toLowerCase(),x:~~v.positionAbsolute.x,y:~~v.positionAbsolute.y})}),L({direction:Vs[V.key],factor:V.shiftKey?4:1})}}},K=()=>{var oe;if(y||!((oe=k.current)!=null&&oe.matches(":focus-visible")))return;const{transform:V,width:Z,height:ne,autoPanOnNodeFocus:G,setCenter:ee}=j.getState();if(!G)return;Cc(new Map([[e,h]]),{x:0,y:0,width:Z,height:ne},V,!0).length>0||ee(h.position.x+R.width/2,h.position.y+R.height/2,{zoom:V[2]})};return x.jsx("div",{className:Ae(["react-flow__node",`react-flow__node-${S}`,{[m]:I},h.className,{selected:h.selected,selectable:P,parent:N,draggable:I,dragging:z}]),ref:k,style:{zIndex:v.z,transform:`translate(${v.positionAbsolute.x}px,${v.positionAbsolute.y}px)`,pointerEvents:A?"all":"none",visibility:H?"visible":"hidden",...h.style,...C},"data-id":e,"data-testid":`rf__node-${e}`,onMouseEnter:O,onMouseMove:D,onMouseLeave:$,onContextMenu:U,onClick:B,onDoubleClick:W,onKeyDown:M?Q:void 0,tabIndex:M?0:void 0,onFocus:M?K:void 0,role:h.ariaRole??(M?"group":void 0),"aria-roledescription":"node","aria-describedby":y?void 0:`${b0}-${w}`,"aria-label":h.ariaLabel,...h.domAttributes,children:x.jsx(CE,{value:e,children:x.jsx(E,{id:e,data:h.data,type:S,positionAbsoluteX:v.positionAbsolute.x,positionAbsoluteY:v.positionAbsolute.y,selected:h.selected??!1,selectable:P,draggable:I,deletable:h.deletable??!0,isConnectable:F,sourcePosition:h.sourcePosition,targetPosition:h.targetPosition,dragging:z,dragHandle:h.dragHandle,zIndex:v.z,parentId:h.parentId,...R})})})}var WE=T.memo(UE);const YE=e=>({nodesDraggable:e.nodesDraggable,nodesConnectable:e.nodesConnectable,nodesFocusable:e.nodesFocusable,elementsSelectable:e.elementsSelectable,onError:e.onError});function Z0(e){const{nodesDraggable:n,nodesConnectable:t,nodesFocusable:r,elementsSelectable:i,onError:o}=le(YE,me),s=HE(e.onlyRenderVisibleElements),l=BE();return x.jsx("div",{className:"react-flow__nodes",style:vl,children:s.map(a=>x.jsx(WE,{id:a,nodeTypes:e.nodeTypes,nodeExtent:e.nodeExtent,onClick:e.onNodeClick,onMouseEnter:e.onNodeMouseEnter,onMouseMove:e.onNodeMouseMove,onMouseLeave:e.onNodeMouseLeave,onContextMenu:e.onNodeContextMenu,onDoubleClick:e.onNodeDoubleClick,noDragClassName:e.noDragClassName,noPanClassName:e.noPanClassName,rfId:e.rfId,disableKeyboardA11y:e.disableKeyboardA11y,resizeObserver:l,nodesDraggable:n,nodesConnectable:t,nodesFocusable:r,elementsSelectable:i,nodeClickDistance:e.nodeClickDistance,onError:o},a))})}Z0.displayName="NodeRenderer";const XE=T.memo(Z0);function QE(e){return le(T.useCallback(t=>{if(!e)return t.edges.map(i=>i.id);const r=[];if(t.width&&t.height)for(const i of t.edges){const o=t.nodeLookup.get(i.source),s=t.nodeLookup.get(i.target);o&&s&&PN({sourceNode:o,targetNode:s,width:t.width,height:t.height,transform:t.transform})&&r.push(i.id)}return r},[e]),me)}const GE=({color:e="none",strokeWidth:n=1})=>{const t={strokeWidth:n,...e&&{stroke:e}};return x.jsx("polyline",{className:"arrow",style:t,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},KE=({color:e="none",strokeWidth:n=1})=>{const t={strokeWidth:n,...e&&{stroke:e,fill:e}};return x.jsx("polyline",{className:"arrowclosed",style:t,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Zd={[Fs.Arrow]:GE,[Fs.ArrowClosed]:KE};function ZE(e){const n=ye();return T.useMemo(()=>{var i,o;return Object.prototype.hasOwnProperty.call(Zd,e)?Zd[e]:((o=(i=n.getState()).onError)==null||o.call(i,"009",Fn.error009(e)),null)},[e])}const qE=({id:e,type:n,color:t,width:r=12.5,height:i=12.5,markerUnits:o="strokeWidth",strokeWidth:s,orient:l="auto-start-reverse"})=>{const a=ZE(n);return a?x.jsx("marker",{className:"react-flow__arrowhead",id:e,markerWidth:`${r}`,markerHeight:`${i}`,viewBox:"-10 -10 20 20",markerUnits:o,orient:l,refX:"0",refY:"0",children:x.jsx(a,{color:t,strokeWidth:s})}):null},q0=({defaultColor:e,rfId:n})=>{const t=le(o=>o.edges),r=le(o=>o.defaultEdgeOptions),i=T.useMemo(()=>FN(t,{id:n,defaultColor:e,defaultMarkerStart:r==null?void 0:r.markerStart,defaultMarkerEnd:r==null?void 0:r.markerEnd}),[t,r,n,e]);return i.length?x.jsx("svg",{className:"react-flow__marker","aria-hidden":"true",children:x.jsx("defs",{children:i.map(o=>x.jsx(qE,{id:o.id,type:o.type,color:o.color,width:o.width,height:o.height,markerUnits:o.markerUnits,strokeWidth:o.strokeWidth,orient:o.orient},o.id))})}):null};q0.displayName="MarkerDefinitions";var JE=T.memo(q0);function J0({x:e,y:n,label:t,labelStyle:r,labelShowBg:i=!0,labelBgStyle:o,labelBgPadding:s=[2,4],labelBgBorderRadius:l=2,children:a,className:u,...d}){const[c,f]=T.useState({x:1,y:0,width:0,height:0}),m=Ae(["react-flow__edge-textwrapper",u]),y=T.useRef(null);return T.useEffect(()=>{if(y.current){const w=y.current.getBBox();f({x:w.x,y:w.y,width:w.width,height:w.height})}},[t]),t?x.jsxs("g",{transform:`translate(${e-c.width/2} ${n-c.height/2})`,className:m,visibility:c.width?"visible":"hidden",...d,children:[i&&x.jsx("rect",{width:c.width+2*s[0],x:-s[0],y:-s[1],height:c.height+2*s[1],className:"react-flow__edge-textbg",style:o,rx:l,ry:l}),x.jsx("text",{className:"react-flow__edge-text",y:c.height/2,dy:"0.3em",ref:y,style:r,children:t}),a]}):null}J0.displayName="EdgeText";const e2=T.memo(J0);function xl({path:e,labelX:n,labelY:t,label:r,labelStyle:i,labelShowBg:o,labelBgStyle:s,labelBgPadding:l,labelBgBorderRadius:a,interactionWidth:u=20,...d}){return x.jsxs(x.Fragment,{children:[x.jsx("path",{...d,d:e,fill:"none",className:Ae(["react-flow__edge-path",d.className])}),u?x.jsx("path",{d:e,fill:"none",strokeOpacity:0,strokeWidth:u,className:"react-flow__edge-interaction"}):null,r&&Cn(n)&&Cn(t)?x.jsx(e2,{x:n,y:t,label:r,labelStyle:i,labelShowBg:o,labelBgStyle:s,labelBgPadding:l,labelBgBorderRadius:a}):null]})}function qd({pos:e,x1:n,y1:t,x2:r,y2:i}){return e===J.Left||e===J.Right?[.5*(n+r),t]:[n,.5*(t+i)]}function em({sourceX:e,sourceY:n,sourcePosition:t=J.Bottom,targetX:r,targetY:i,targetPosition:o=J.Top}){const[s,l]=qd({pos:t,x1:e,y1:n,x2:r,y2:i}),[a,u]=qd({pos:o,x1:r,y1:i,x2:e,y2:n}),[d,c,f,m]=w0({sourceX:e,sourceY:n,targetX:r,targetY:i,sourceControlX:s,sourceControlY:l,targetControlX:a,targetControlY:u});return[`M${e},${n} C${s},${l} ${a},${u} ${r},${i}`,d,c,f,m]}function nm(e){return T.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,sourcePosition:s,targetPosition:l,label:a,labelStyle:u,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:w,markerStart:_,interactionWidth:p})=>{const[g,h,v]=em({sourceX:t,sourceY:r,sourcePosition:s,targetX:i,targetY:o,targetPosition:l}),N=e.isInternal?void 0:n;return x.jsx(xl,{id:N,path:g,labelX:h,labelY:v,label:a,labelStyle:u,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:w,markerStart:_,interactionWidth:p})})}const n2=nm({isInternal:!1}),tm=nm({isInternal:!0});n2.displayName="SimpleBezierEdge";tm.displayName="SimpleBezierEdgeInternal";function rm(e){return T.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,label:s,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:c,style:f,sourcePosition:m=J.Bottom,targetPosition:y=J.Top,markerEnd:w,markerStart:_,pathOptions:p,interactionWidth:g})=>{const[h,v,N]=yu({sourceX:t,sourceY:r,sourcePosition:m,targetX:i,targetY:o,targetPosition:y,borderRadius:p==null?void 0:p.borderRadius,offset:p==null?void 0:p.offset,stepPosition:p==null?void 0:p.stepPosition}),S=e.isInternal?void 0:n;return x.jsx(xl,{id:S,path:h,labelX:v,labelY:N,label:s,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:c,style:f,markerEnd:w,markerStart:_,interactionWidth:g})})}const im=rm({isInternal:!1}),om=rm({isInternal:!0});im.displayName="SmoothStepEdge";om.displayName="SmoothStepEdgeInternal";function sm(e){return T.memo(({id:n,...t})=>{var i;const r=e.isInternal?void 0:n;return x.jsx(im,{...t,id:r,pathOptions:T.useMemo(()=>{var o;return{borderRadius:0,offset:(o=t.pathOptions)==null?void 0:o.offset}},[(i=t.pathOptions)==null?void 0:i.offset])})})}const t2=sm({isInternal:!1}),lm=sm({isInternal:!0});t2.displayName="StepEdge";lm.displayName="StepEdgeInternal";function am(e){return T.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,label:s,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:c,style:f,markerEnd:m,markerStart:y,interactionWidth:w})=>{const[_,p,g]=S0({sourceX:t,sourceY:r,targetX:i,targetY:o}),h=e.isInternal?void 0:n;return x.jsx(xl,{id:h,path:_,labelX:p,labelY:g,label:s,labelStyle:l,labelShowBg:a,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:c,style:f,markerEnd:m,markerStart:y,interactionWidth:w})})}const r2=am({isInternal:!1}),um=am({isInternal:!0});r2.displayName="StraightEdge";um.displayName="StraightEdgeInternal";function cm(e){return T.memo(({id:n,sourceX:t,sourceY:r,targetX:i,targetY:o,sourcePosition:s=J.Bottom,targetPosition:l=J.Top,label:a,labelStyle:u,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:w,markerStart:_,pathOptions:p,interactionWidth:g})=>{const[h,v,N]=_0({sourceX:t,sourceY:r,sourcePosition:s,targetX:i,targetY:o,targetPosition:l,curvature:p==null?void 0:p.curvature}),S=e.isInternal?void 0:n;return x.jsx(xl,{id:S,path:h,labelX:v,labelY:N,label:a,labelStyle:u,labelShowBg:d,labelBgStyle:c,labelBgPadding:f,labelBgBorderRadius:m,style:y,markerEnd:w,markerStart:_,interactionWidth:g})})}const i2=cm({isInternal:!1}),fm=cm({isInternal:!0});i2.displayName="BezierEdge";fm.displayName="BezierEdgeInternal";const Jd={default:fm,straight:um,step:lm,smoothstep:om,simplebezier:tm},eh={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null},o2=(e,n,t)=>t===J.Left?e-n:t===J.Right?e+n:e,s2=(e,n,t)=>t===J.Top?e-n:t===J.Bottom?e+n:e,nh="react-flow__edgeupdater";function th({position:e,centerX:n,centerY:t,radius:r=10,onMouseDown:i,onMouseEnter:o,onMouseOut:s,type:l}){return x.jsx("circle",{onMouseDown:i,onMouseEnter:o,onMouseOut:s,className:Ae([nh,`${nh}-${l}`]),cx:o2(n,r,e),cy:s2(t,r,e),r,stroke:"transparent",fill:"transparent"})}function l2({isReconnectable:e,reconnectRadius:n,edge:t,sourceX:r,sourceY:i,targetX:o,targetY:s,sourcePosition:l,targetPosition:a,onReconnect:u,onReconnectStart:d,onReconnectEnd:c,setReconnecting:f,setUpdateHover:m}){const y=ye(),w=(v,N)=>{if(v.button!==0)return;const{autoPanOnConnect:S,domNode:E,connectionMode:I,connectionRadius:P,lib:F,onConnectStart:M,cancelConnection:j,nodeLookup:H,rfId:k,panBy:z,updateConnection:L}=y.getState(),R=N.type==="target",C=(D,$)=>{f(!1),c==null||c(D,t,N.type,$)},A=D=>u==null?void 0:u(t,D),O=(D,$)=>{f(!0),d==null||d(v,t,N.type),M==null||M(D,$)};wu.onPointerDown(v.nativeEvent,{autoPanOnConnect:S,connectionMode:I,connectionRadius:P,domNode:E,handleId:N.id,nodeId:N.nodeId,nodeLookup:H,isTarget:R,edgeUpdaterType:N.type,lib:F,flowId:k,cancelConnection:j,panBy:z,isValidConnection:(...D)=>{var $,U;return((U=($=y.getState()).isValidConnection)==null?void 0:U.call($,...D))??!0},onConnect:A,onConnectStart:O,onConnectEnd:(...D)=>{var $,U;return(U=($=y.getState()).onConnectEnd)==null?void 0:U.call($,...D)},onReconnectEnd:C,updateConnection:L,getTransform:()=>y.getState().transform,getFromHandle:()=>y.getState().connection.fromHandle,dragThreshold:y.getState().connectionDragThreshold,handleDomNode:v.currentTarget})},_=v=>w(v,{nodeId:t.target,id:t.targetHandle??null,type:"target"}),p=v=>w(v,{nodeId:t.source,id:t.sourceHandle??null,type:"source"}),g=()=>m(!0),h=()=>m(!1);return x.jsxs(x.Fragment,{children:[(e===!0||e==="source")&&x.jsx(th,{position:l,centerX:r,centerY:i,radius:n,onMouseDown:_,onMouseEnter:g,onMouseOut:h,type:"source"}),(e===!0||e==="target")&&x.jsx(th,{position:a,centerX:o,centerY:s,radius:n,onMouseDown:p,onMouseEnter:g,onMouseOut:h,type:"target"})]})}function a2({id:e,edgesFocusable:n,edgesReconnectable:t,elementsSelectable:r,onClick:i,onDoubleClick:o,onContextMenu:s,onMouseEnter:l,onMouseMove:a,onMouseLeave:u,reconnectRadius:d,onReconnect:c,onReconnectStart:f,onReconnectEnd:m,rfId:y,edgeTypes:w,noPanClassName:_,onError:p,disableKeyboardA11y:g}){let h=le(ee=>ee.edgeLookup.get(e));const v=le(ee=>ee.defaultEdgeOptions);h=v?{...v,...h}:h;let N=h.type||"default",S=(w==null?void 0:w[N])||Jd[N];S===void 0&&(p==null||p("011",Fn.error011(N)),N="default",S=(w==null?void 0:w.default)||Jd.default);const E=!!(h.focusable||n&&typeof h.focusable>"u"),I=typeof c<"u"&&(h.reconnectable||t&&typeof h.reconnectable>"u"),P=!!(h.selectable||r&&typeof h.selectable>"u"),F=T.useRef(null),[M,j]=T.useState(!1),[H,k]=T.useState(!1),z=ye(),{zIndex:L,sourceX:R,sourceY:C,targetX:A,targetY:O,sourcePosition:D,targetPosition:$}=le(T.useCallback(ee=>{const q=ee.nodeLookup.get(h.source),oe=ee.nodeLookup.get(h.target);if(!q||!oe)return{zIndex:h.zIndex,...eh};const ce=$N({id:e,sourceNode:q,targetNode:oe,sourceHandle:h.sourceHandle||null,targetHandle:h.targetHandle||null,connectionMode:ee.connectionMode,onError:p});return{zIndex:MN({selected:h.selected,zIndex:h.zIndex,sourceNode:q,targetNode:oe,elevateOnSelect:ee.elevateEdgesOnSelect,zIndexMode:ee.zIndexMode}),...ce||eh}},[h.source,h.target,h.sourceHandle,h.targetHandle,h.selected,h.zIndex]),me),U=T.useMemo(()=>h.markerStart?`url('#${vu(h.markerStart,y)}')`:void 0,[h.markerStart,y]),W=T.useMemo(()=>h.markerEnd?`url('#${vu(h.markerEnd,y)}')`:void 0,[h.markerEnd,y]);if(h.hidden||R===null||C===null||A===null||O===null)return null;const B=ee=>{var se;const{addSelectedEdges:q,unselectNodesAndEdges:oe,multiSelectionActive:ce}=z.getState();P&&(z.setState({nodesSelectionActive:!1}),h.selected&&ce?(oe({nodes:[],edges:[h]}),(se=F.current)==null||se.blur()):q([e])),i&&i(ee,h)},Q=o?ee=>{o(ee,{...h})}:void 0,K=s?ee=>{s(ee,{...h})}:void 0,V=l?ee=>{l(ee,{...h})}:void 0,Z=a?ee=>{a(ee,{...h})}:void 0,ne=u?ee=>{u(ee,{...h})}:void 0,G=ee=>{var q;if(!g&&s0.includes(ee.key)&&P){const{unselectNodesAndEdges:oe,addSelectedEdges:ce}=z.getState();ee.key==="Escape"?((q=F.current)==null||q.blur(),oe({edges:[h]})):ce([e])}};return x.jsx("svg",{style:{zIndex:L},children:x.jsxs("g",{className:Ae(["react-flow__edge",`react-flow__edge-${N}`,h.className,_,{selected:h.selected,animated:h.animated,inactive:!P&&!i,updating:M,selectable:P}]),onClick:B,onDoubleClick:Q,onContextMenu:K,onMouseEnter:V,onMouseMove:Z,onMouseLeave:ne,onKeyDown:E?G:void 0,tabIndex:E?0:void 0,role:h.ariaRole??(E?"group":"img"),"aria-roledescription":"edge","data-id":e,"data-testid":`rf__edge-${e}`,"aria-label":h.ariaLabel===null?void 0:h.ariaLabel||`Edge from ${h.source} to ${h.target}`,"aria-describedby":E?`${B0}-${y}`:void 0,ref:F,...h.domAttributes,children:[!H&&x.jsx(S,{id:e,source:h.source,target:h.target,type:h.type,selected:h.selected,animated:h.animated,selectable:P,deletable:h.deletable??!0,label:h.label,labelStyle:h.labelStyle,labelShowBg:h.labelShowBg,labelBgStyle:h.labelBgStyle,labelBgPadding:h.labelBgPadding,labelBgBorderRadius:h.labelBgBorderRadius,sourceX:R,sourceY:C,targetX:A,targetY:O,sourcePosition:D,targetPosition:$,data:h.data,style:h.style,sourceHandleId:h.sourceHandle,targetHandleId:h.targetHandle,markerStart:U,markerEnd:W,pathOptions:"pathOptions"in h?h.pathOptions:void 0,interactionWidth:h.interactionWidth}),I&&x.jsx(l2,{edge:h,isReconnectable:I,reconnectRadius:d,onReconnect:c,onReconnectStart:f,onReconnectEnd:m,sourceX:R,sourceY:C,targetX:A,targetY:O,sourcePosition:D,targetPosition:$,setUpdateHover:j,setReconnecting:k})]})})}var u2=T.memo(a2);const c2=e=>({edgesFocusable:e.edgesFocusable,edgesReconnectable:e.edgesReconnectable,elementsSelectable:e.elementsSelectable,connectionMode:e.connectionMode,onError:e.onError});function dm({defaultMarkerColor:e,onlyRenderVisibleElements:n,rfId:t,edgeTypes:r,noPanClassName:i,onReconnect:o,onEdgeContextMenu:s,onEdgeMouseEnter:l,onEdgeMouseMove:a,onEdgeMouseLeave:u,onEdgeClick:d,reconnectRadius:c,onEdgeDoubleClick:f,onReconnectStart:m,onReconnectEnd:y,disableKeyboardA11y:w}){const{edgesFocusable:_,edgesReconnectable:p,elementsSelectable:g,onError:h}=le(c2,me),v=QE(n);return x.jsxs("div",{className:"react-flow__edges",children:[x.jsx(JE,{defaultColor:e,rfId:t}),v.map(N=>x.jsx(u2,{id:N,edgesFocusable:_,edgesReconnectable:p,elementsSelectable:g,noPanClassName:i,onReconnect:o,onContextMenu:s,onMouseEnter:l,onMouseMove:a,onMouseLeave:u,onClick:d,reconnectRadius:c,onDoubleClick:f,onReconnectStart:m,onReconnectEnd:y,rfId:t,onError:h,edgeTypes:r,disableKeyboardA11y:w},N))]})}dm.displayName="EdgeRenderer";const f2=T.memo(dm),d2=e=>`translate(${e.transform[0]}px,${e.transform[1]}px) scale(${e.transform[2]})`;function h2({children:e}){const n=le(d2);return x.jsx("div",{className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:n},children:e})}function p2(e){const n=Oc(),t=T.useRef(!1);T.useEffect(()=>{!t.current&&n.viewportInitialized&&e&&(setTimeout(()=>e(n),1),t.current=!0)},[e,n.viewportInitialized])}const g2=e=>{var n;return(n=e.panZoom)==null?void 0:n.syncViewport};function m2(e){const n=le(g2),t=ye();return T.useEffect(()=>{e&&(n==null||n(e),t.setState({transform:[e.x,e.y,e.zoom]}))},[e,n]),null}function y2(e){return e.connection.inProgress?{...e.connection,to:co(e.connection.to,e.transform)}:{...e.connection}}function v2(e){return y2}function x2(e){const n=v2();return le(n,me)}const w2=e=>({nodesConnectable:e.nodesConnectable,isValid:e.connection.isValid,inProgress:e.connection.inProgress,width:e.width,height:e.height});function _2({containerStyle:e,style:n,type:t,component:r}){const{nodesConnectable:i,width:o,height:s,isValid:l,inProgress:a}=le(w2,me);return!(o&&i&&a)?null:x.jsx("svg",{style:e,width:o,height:s,className:"react-flow__connectionline react-flow__container",children:x.jsx("g",{className:Ae(["react-flow__connection",u0(l)]),children:x.jsx(hm,{style:n,type:t,CustomComponent:r,isValid:l})})})}const hm=({style:e,type:n=gt.Bezier,CustomComponent:t,isValid:r})=>{const{inProgress:i,from:o,fromNode:s,fromHandle:l,fromPosition:a,to:u,toNode:d,toHandle:c,toPosition:f,pointer:m}=x2();if(!i)return;if(t)return x.jsx(t,{connectionLineType:n,connectionLineStyle:e,fromNode:s,fromHandle:l,fromX:o.x,fromY:o.y,toX:u.x,toY:u.y,fromPosition:a,toPosition:f,connectionStatus:u0(r),toNode:d,toHandle:c,pointer:m});let y="";const w={sourceX:o.x,sourceY:o.y,sourcePosition:a,targetX:u.x,targetY:u.y,targetPosition:f};switch(n){case gt.Bezier:[y]=_0(w);break;case gt.SimpleBezier:[y]=em(w);break;case gt.Step:[y]=yu({...w,borderRadius:0});break;case gt.SmoothStep:[y]=yu(w);break;default:[y]=S0(w)}return x.jsx("path",{d:y,fill:"none",className:"react-flow__connection-path",style:e})};hm.displayName="ConnectionLine";const N2={};function rh(e=N2){T.useRef(e),ye(),T.useEffect(()=>{},[e])}function S2(){ye(),T.useRef(!1),T.useEffect(()=>{},[])}function pm({nodeTypes:e,edgeTypes:n,onInit:t,onNodeClick:r,onEdgeClick:i,onNodeDoubleClick:o,onEdgeDoubleClick:s,onNodeMouseEnter:l,onNodeMouseMove:a,onNodeMouseLeave:u,onNodeContextMenu:d,onSelectionContextMenu:c,onSelectionStart:f,onSelectionEnd:m,connectionLineType:y,connectionLineStyle:w,connectionLineComponent:_,connectionLineContainerStyle:p,selectionKeyCode:g,selectionOnDrag:h,selectionMode:v,multiSelectionKeyCode:N,panActivationKeyCode:S,zoomActivationKeyCode:E,deleteKeyCode:I,onlyRenderVisibleElements:P,elementsSelectable:F,defaultViewport:M,translateExtent:j,minZoom:H,maxZoom:k,preventScrolling:z,defaultMarkerColor:L,zoomOnScroll:R,zoomOnPinch:C,panOnScroll:A,panOnScrollSpeed:O,panOnScrollMode:D,zoomOnDoubleClick:$,panOnDrag:U,onPaneClick:W,onPaneMouseEnter:B,onPaneMouseMove:Q,onPaneMouseLeave:K,onPaneScroll:V,onPaneContextMenu:Z,paneClickDistance:ne,nodeClickDistance:G,onEdgeContextMenu:ee,onEdgeMouseEnter:q,onEdgeMouseMove:oe,onEdgeMouseLeave:ce,reconnectRadius:se,onReconnect:Me,onReconnectStart:yn,onReconnectEnd:an,noDragClassName:vn,noWheelClassName:bn,noPanClassName:te,disableKeyboardA11y:Bn,nodeExtent:or,rfId:je,viewport:un,onViewportChange:zt}){return rh(e),rh(n),S2(),p2(t),m2(un),x.jsx($E,{onPaneClick:W,onPaneMouseEnter:B,onPaneMouseMove:Q,onPaneMouseLeave:K,onPaneContextMenu:Z,onPaneScroll:V,paneClickDistance:ne,deleteKeyCode:I,selectionKeyCode:g,selectionOnDrag:h,selectionMode:v,onSelectionStart:f,onSelectionEnd:m,multiSelectionKeyCode:N,panActivationKeyCode:S,zoomActivationKeyCode:E,elementsSelectable:F,zoomOnScroll:R,zoomOnPinch:C,zoomOnDoubleClick:$,panOnScroll:A,panOnScrollSpeed:O,panOnScrollMode:D,panOnDrag:U,defaultViewport:M,translateExtent:j,minZoom:H,maxZoom:k,onSelectionContextMenu:c,preventScrolling:z,noDragClassName:vn,noWheelClassName:bn,noPanClassName:te,disableKeyboardA11y:Bn,onViewportChange:zt,isControlledViewport:!!un,children:x.jsxs(h2,{children:[x.jsx(f2,{edgeTypes:n,onEdgeClick:i,onEdgeDoubleClick:s,onReconnect:Me,onReconnectStart:yn,onReconnectEnd:an,onlyRenderVisibleElements:P,onEdgeContextMenu:ee,onEdgeMouseEnter:q,onEdgeMouseMove:oe,onEdgeMouseLeave:ce,reconnectRadius:se,defaultMarkerColor:L,noPanClassName:te,disableKeyboardA11y:Bn,rfId:je}),x.jsx(_2,{style:w,type:y,component:_,containerStyle:p}),x.jsx("div",{className:"react-flow__edgelabel-renderer"}),x.jsx(XE,{nodeTypes:e,onNodeClick:r,onNodeDoubleClick:o,onNodeMouseEnter:l,onNodeMouseMove:a,onNodeMouseLeave:u,onNodeContextMenu:d,nodeClickDistance:G,onlyRenderVisibleElements:P,noPanClassName:te,noDragClassName:vn,disableKeyboardA11y:Bn,nodeExtent:or,rfId:je}),x.jsx("div",{className:"react-flow__viewport-portal"})]})})}pm.displayName="GraphView";const E2=T.memo(pm),ih=({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,width:i,height:o,fitView:s,fitViewOptions:l,minZoom:a=.5,maxZoom:u=2,nodeOrigin:d,nodeExtent:c,zIndexMode:f="basic"}={})=>{const m=new Map,y=new Map,w=new Map,_=new Map,p=r??n??[],g=t??e??[],h=d??[0,0],v=c??Qi;C0(w,_,p);const{nodesInitialized:N}=xu(g,m,y,{nodeOrigin:h,nodeExtent:v,zIndexMode:f});let S=[0,0,1];if(s&&i&&o){const E=ao(m,{filter:M=>!!((M.width||M.initialWidth)&&(M.height||M.initialHeight))}),{x:I,y:P,zoom:F}=Ac(E,i,o,a,u,(l==null?void 0:l.padding)??.1);S=[I,P,F]}return{rfId:"1",width:i??0,height:o??0,transform:S,nodes:g,nodesInitialized:N,nodeLookup:m,parentLookup:y,edges:p,edgeLookup:_,connectionLookup:w,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:t!==void 0,hasDefaultEdges:r!==void 0,panZoom:null,minZoom:a,maxZoom:u,translateExtent:Qi,nodeExtent:v,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:Ur.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:h,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:s??!1,fitViewOptions:l,fitViewResolver:null,connection:{...a0},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:EN,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:l0,zIndexMode:f,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},k2=({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,width:i,height:o,fitView:s,fitViewOptions:l,minZoom:a,maxZoom:u,nodeOrigin:d,nodeExtent:c,zIndexMode:f})=>BS((m,y)=>{async function w(){const{nodeLookup:_,panZoom:p,fitViewOptions:g,fitViewResolver:h,width:v,height:N,minZoom:S,maxZoom:E}=y();p&&(await NN({nodes:_,width:v,height:N,panZoom:p,minZoom:S,maxZoom:E},g),h==null||h.resolve(!0),m({fitViewResolver:null}))}return{...ih({nodes:e,edges:n,width:i,height:o,fitView:s,fitViewOptions:l,minZoom:a,maxZoom:u,nodeOrigin:d,nodeExtent:c,defaultNodes:t,defaultEdges:r,zIndexMode:f}),setNodes:_=>{const{nodeLookup:p,parentLookup:g,nodeOrigin:h,elevateNodesOnSelect:v,fitViewQueued:N,zIndexMode:S,nodesSelectionActive:E}=y(),{nodesInitialized:I,hasSelectedNodes:P}=xu(_,p,g,{nodeOrigin:h,nodeExtent:c,elevateNodesOnSelect:v,checkEquality:!0,zIndexMode:S}),F=E&&P;N&&I?(w(),m({nodes:_,nodesInitialized:I,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:F})):m({nodes:_,nodesInitialized:I,nodesSelectionActive:F})},setEdges:_=>{const{connectionLookup:p,edgeLookup:g}=y();C0(p,g,_),m({edges:_})},setDefaultNodesAndEdges:(_,p)=>{if(_){const{setNodes:g}=y();g(_),m({hasDefaultNodes:!0})}if(p){const{setEdges:g}=y();g(p),m({hasDefaultEdges:!0})}},updateNodeInternals:_=>{const{triggerNodeChanges:p,nodeLookup:g,parentLookup:h,domNode:v,nodeOrigin:N,nodeExtent:S,debug:E,fitViewQueued:I,zIndexMode:P}=y(),{changes:F,updatedInternals:M}=YN(_,g,h,v,N,S,P);M&&(BN(g,h,{nodeOrigin:N,nodeExtent:S,zIndexMode:P}),I?(w(),m({fitViewQueued:!1,fitViewOptions:void 0})):m({}),(F==null?void 0:F.length)>0&&(E&&console.log("React Flow: trigger node changes",F),p==null||p(F)))},updateNodePositions:(_,p=!1)=>{const g=[];let h=[];const{nodeLookup:v,triggerNodeChanges:N,connection:S,updateConnection:E,onNodesChangeMiddlewareMap:I}=y();for(const[P,F]of _){const M=v.get(P),j=!!(M!=null&&M.expandParent&&(M!=null&&M.parentId)&&(F!=null&&F.position)),H={id:P,type:"position",position:j?{x:Math.max(0,F.position.x),y:Math.max(0,F.position.y)}:F.position,dragging:p};if(M&&S.inProgress&&S.fromNode.id===M.id){const k=tr(M,S.fromHandle,J.Left,!0);E({...S,from:k})}j&&M.parentId&&g.push({id:P,parentId:M.parentId,rect:{...F.internals.positionAbsolute,width:F.measured.width??0,height:F.measured.height??0}}),h.push(H)}if(g.length>0){const{parentLookup:P,nodeOrigin:F}=y(),M=zc(g,v,P,F);h.push(...M)}for(const P of I.values())h=P(h);N(h)},triggerNodeChanges:_=>{const{onNodesChange:p,setNodes:g,nodes:h,hasDefaultNodes:v,debug:N}=y();if(_!=null&&_.length){if(v){const S=uE(_,h);g(S)}N&&console.log("React Flow: trigger node changes",_),p==null||p(_)}},triggerEdgeChanges:_=>{const{onEdgesChange:p,setEdges:g,edges:h,hasDefaultEdges:v,debug:N}=y();if(_!=null&&_.length){if(v){const S=cE(_,h);g(S)}N&&console.log("React Flow: trigger edge changes",_),p==null||p(_)}},addSelectedNodes:_=>{const{multiSelectionActive:p,edgeLookup:g,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:N}=y();if(p){const S=_.map(E=>Dt(E,!0));v(S);return}v(kr(h,new Set([..._]),!0)),N(kr(g))},addSelectedEdges:_=>{const{multiSelectionActive:p,edgeLookup:g,nodeLookup:h,triggerNodeChanges:v,triggerEdgeChanges:N}=y();if(p){const S=_.map(E=>Dt(E,!0));N(S);return}N(kr(g,new Set([..._]))),v(kr(h,new Set,!0))},unselectNodesAndEdges:({nodes:_,edges:p}={})=>{const{edges:g,nodes:h,nodeLookup:v,triggerNodeChanges:N,triggerEdgeChanges:S}=y(),E=_||h,I=p||g,P=[];for(const M of E){if(!M.selected)continue;const j=v.get(M.id);j&&(j.selected=!1),P.push(Dt(M.id,!1))}const F=[];for(const M of I)M.selected&&F.push(Dt(M.id,!1));N(P),S(F)},setMinZoom:_=>{const{panZoom:p,maxZoom:g}=y();p==null||p.setScaleExtent([_,g]),m({minZoom:_})},setMaxZoom:_=>{const{panZoom:p,minZoom:g}=y();p==null||p.setScaleExtent([g,_]),m({maxZoom:_})},setTranslateExtent:_=>{var p;(p=y().panZoom)==null||p.setTranslateExtent(_),m({translateExtent:_})},resetSelectedElements:()=>{const{edges:_,nodes:p,triggerNodeChanges:g,triggerEdgeChanges:h,elementsSelectable:v}=y();if(!v)return;const N=p.reduce((E,I)=>I.selected?[...E,Dt(I.id,!1)]:E,[]),S=_.reduce((E,I)=>I.selected?[...E,Dt(I.id,!1)]:E,[]);g(N),h(S)},setNodeExtent:_=>{const{nodes:p,nodeLookup:g,parentLookup:h,nodeOrigin:v,elevateNodesOnSelect:N,nodeExtent:S,zIndexMode:E}=y();_[0][0]===S[0][0]&&_[0][1]===S[0][1]&&_[1][0]===S[1][0]&&_[1][1]===S[1][1]||(xu(p,g,h,{nodeOrigin:v,nodeExtent:_,elevateNodesOnSelect:N,checkEquality:!1,zIndexMode:E}),m({nodeExtent:_}))},panBy:_=>{const{transform:p,width:g,height:h,panZoom:v,translateExtent:N}=y();return XN({delta:_,panZoom:v,transform:p,translateExtent:N,width:g,height:h})},setCenter:async(_,p,g)=>{const{width:h,height:v,maxZoom:N,panZoom:S}=y();if(!S)return Promise.resolve(!1);const E=typeof(g==null?void 0:g.zoom)<"u"?g.zoom:N;return await S.setViewport({x:h/2-_*E,y:v/2-p*E,zoom:E},{duration:g==null?void 0:g.duration,ease:g==null?void 0:g.ease,interpolate:g==null?void 0:g.interpolate}),Promise.resolve(!0)},cancelConnection:()=>{m({connection:{...a0}})},updateConnection:_=>{m({connection:_})},reset:()=>m({...ih()})}},Object.is);function C2({initialNodes:e,initialEdges:n,defaultNodes:t,defaultEdges:r,initialWidth:i,initialHeight:o,initialMinZoom:s,initialMaxZoom:l,initialFitViewOptions:a,fitView:u,nodeOrigin:d,nodeExtent:c,zIndexMode:f,children:m}){const[y]=T.useState(()=>k2({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,width:i,height:o,fitView:u,minZoom:s,maxZoom:l,fitViewOptions:a,nodeOrigin:d,nodeExtent:c,zIndexMode:f}));return x.jsx(VS,{value:y,children:x.jsx(hE,{children:m})})}function A2({children:e,nodes:n,edges:t,defaultNodes:r,defaultEdges:i,width:o,height:s,fitView:l,fitViewOptions:a,minZoom:u,maxZoom:d,nodeOrigin:c,nodeExtent:f,zIndexMode:m}){return T.useContext(ml)?x.jsx(x.Fragment,{children:e}):x.jsx(C2,{initialNodes:n,initialEdges:t,defaultNodes:r,defaultEdges:i,initialWidth:o,initialHeight:s,fitView:l,initialFitViewOptions:a,initialMinZoom:u,initialMaxZoom:d,nodeOrigin:c,nodeExtent:f,zIndexMode:m,children:e})}const I2={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function L2({nodes:e,edges:n,defaultNodes:t,defaultEdges:r,className:i,nodeTypes:o,edgeTypes:s,onNodeClick:l,onEdgeClick:a,onInit:u,onMove:d,onMoveStart:c,onMoveEnd:f,onConnect:m,onConnectStart:y,onConnectEnd:w,onClickConnectStart:_,onClickConnectEnd:p,onNodeMouseEnter:g,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:N,onNodeDoubleClick:S,onNodeDragStart:E,onNodeDrag:I,onNodeDragStop:P,onNodesDelete:F,onEdgesDelete:M,onDelete:j,onSelectionChange:H,onSelectionDragStart:k,onSelectionDrag:z,onSelectionDragStop:L,onSelectionContextMenu:R,onSelectionStart:C,onSelectionEnd:A,onBeforeDelete:O,connectionMode:D,connectionLineType:$=gt.Bezier,connectionLineStyle:U,connectionLineComponent:W,connectionLineContainerStyle:B,deleteKeyCode:Q="Backspace",selectionKeyCode:K="Shift",selectionOnDrag:V=!1,selectionMode:Z=Gi.Full,panActivationKeyCode:ne="Space",multiSelectionKeyCode:G=Zi()?"Meta":"Control",zoomActivationKeyCode:ee=Zi()?"Meta":"Control",snapToGrid:q,snapGrid:oe,onlyRenderVisibleElements:ce=!1,selectNodesOnDrag:se,nodesDraggable:Me,autoPanOnNodeFocus:yn,nodesConnectable:an,nodesFocusable:vn,nodeOrigin:bn=V0,edgesFocusable:te,edgesReconnectable:Bn,elementsSelectable:or=!0,defaultViewport:je=tE,minZoom:un=.5,maxZoom:zt=2,translateExtent:fo=Qi,preventScrolling:Vn=!0,nodeExtent:Jr,defaultMarkerColor:wl="#b1b1b7",zoomOnScroll:sr=!0,zoomOnPinch:lr=!0,panOnScroll:ot=!1,panOnScrollSpeed:st=.5,panOnScrollMode:ho=Xt.Free,zoomOnDoubleClick:_l=!0,panOnDrag:Nl=!0,onPaneClick:Sl,onPaneMouseEnter:El,onPaneMouseMove:po,onPaneMouseLeave:kl,onPaneScroll:Cl,onPaneContextMenu:Al,paneClickDistance:go=1,nodeClickDistance:Y=0,children:ve,onReconnect:ie,onReconnectStart:pe,onReconnectEnd:xn,onEdgeContextMenu:Ze,onEdgeDoubleClick:Un,onEdgeMouseEnter:mo,onEdgeMouseMove:lt,onEdgeMouseLeave:Il,reconnectRadius:Em=10,onNodesChange:km,onEdgesChange:Cm,noDragClassName:Am="nodrag",noWheelClassName:Im="nowheel",noPanClassName:$c="nopan",fitView:Fc,fitViewOptions:Hc,connectOnClick:Lm,attributionPosition:Mm,proOptions:Pm,defaultEdgeOptions:Tm,elevateNodesOnSelect:zm=!0,elevateEdgesOnSelect:Om=!1,disableKeyboardA11y:bc=!1,autoPanOnConnect:Rm,autoPanOnNodeDrag:jm,autoPanSpeed:Dm,connectionRadius:$m,isValidConnection:Fm,onError:Hm,style:bm,id:Bc,nodeDragThreshold:Bm,connectionDragThreshold:Vm,viewport:Um,onViewportChange:Wm,width:Ym,height:Xm,colorMode:Qm="light",debug:Gm,onScroll:yo,ariaLabelConfig:Km,zIndexMode:Vc="basic",...Zm},qm){const Ll=Bc||"1",Jm=sE(Qm),ey=T.useCallback(Uc=>{Uc.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),yo==null||yo(Uc)},[yo]);return x.jsx("div",{"data-testid":"rf__wrapper",...Zm,onScroll:ey,style:{...bm,...I2},ref:qm,className:Ae(["react-flow",i,Jm]),id:Bc,role:"application",children:x.jsxs(A2,{nodes:e,edges:n,width:Ym,height:Xm,fitView:Fc,fitViewOptions:Hc,minZoom:un,maxZoom:zt,nodeOrigin:bn,nodeExtent:Jr,zIndexMode:Vc,children:[x.jsx(oE,{nodes:e,edges:n,defaultNodes:t,defaultEdges:r,onConnect:m,onConnectStart:y,onConnectEnd:w,onClickConnectStart:_,onClickConnectEnd:p,nodesDraggable:Me,autoPanOnNodeFocus:yn,nodesConnectable:an,nodesFocusable:vn,edgesFocusable:te,edgesReconnectable:Bn,elementsSelectable:or,elevateNodesOnSelect:zm,elevateEdgesOnSelect:Om,minZoom:un,maxZoom:zt,nodeExtent:Jr,onNodesChange:km,onEdgesChange:Cm,snapToGrid:q,snapGrid:oe,connectionMode:D,translateExtent:fo,connectOnClick:Lm,defaultEdgeOptions:Tm,fitView:Fc,fitViewOptions:Hc,onNodesDelete:F,onEdgesDelete:M,onDelete:j,onNodeDragStart:E,onNodeDrag:I,onNodeDragStop:P,onSelectionDrag:z,onSelectionDragStart:k,onSelectionDragStop:L,onMove:d,onMoveStart:c,onMoveEnd:f,noPanClassName:$c,nodeOrigin:bn,rfId:Ll,autoPanOnConnect:Rm,autoPanOnNodeDrag:jm,autoPanSpeed:Dm,onError:Hm,connectionRadius:$m,isValidConnection:Fm,selectNodesOnDrag:se,nodeDragThreshold:Bm,connectionDragThreshold:Vm,onBeforeDelete:O,debug:Gm,ariaLabelConfig:Km,zIndexMode:Vc}),x.jsx(E2,{onInit:u,onNodeClick:l,onEdgeClick:a,onNodeMouseEnter:g,onNodeMouseMove:h,onNodeMouseLeave:v,onNodeContextMenu:N,onNodeDoubleClick:S,nodeTypes:o,edgeTypes:s,connectionLineType:$,connectionLineStyle:U,connectionLineComponent:W,connectionLineContainerStyle:B,selectionKeyCode:K,selectionOnDrag:V,selectionMode:Z,deleteKeyCode:Q,multiSelectionKeyCode:G,panActivationKeyCode:ne,zoomActivationKeyCode:ee,onlyRenderVisibleElements:ce,defaultViewport:je,translateExtent:fo,minZoom:un,maxZoom:zt,preventScrolling:Vn,zoomOnScroll:sr,zoomOnPinch:lr,zoomOnDoubleClick:_l,panOnScroll:ot,panOnScrollSpeed:st,panOnScrollMode:ho,panOnDrag:Nl,onPaneClick:Sl,onPaneMouseEnter:El,onPaneMouseMove:po,onPaneMouseLeave:kl,onPaneScroll:Cl,onPaneContextMenu:Al,paneClickDistance:go,nodeClickDistance:Y,onSelectionContextMenu:R,onSelectionStart:C,onSelectionEnd:A,onReconnect:ie,onReconnectStart:pe,onReconnectEnd:xn,onEdgeContextMenu:Ze,onEdgeDoubleClick:Un,onEdgeMouseEnter:mo,onEdgeMouseMove:lt,onEdgeMouseLeave:Il,reconnectRadius:Em,defaultMarkerColor:wl,noDragClassName:Am,noWheelClassName:Im,noPanClassName:$c,rfId:Ll,disableKeyboardA11y:bc,nodeExtent:Jr,viewport:Um,onViewportChange:Wm}),x.jsx(nE,{onSelectionChange:H}),ve,x.jsx(KS,{proOptions:Pm,position:Mm}),x.jsx(GS,{rfId:Ll,disableKeyboardA11y:bc})]})})}var M2=W0(L2);function P2({dimensions:e,lineWidth:n,variant:t,className:r}){return x.jsx("path",{strokeWidth:n,d:`M${e[0]/2} 0 V${e[1]} M0 ${e[1]/2} H${e[0]}`,className:Ae(["react-flow__background-pattern",t,r])})}function T2({radius:e,className:n}){return x.jsx("circle",{cx:e,cy:e,r:e,className:Ae(["react-flow__background-pattern","dots",n])})}var At;(function(e){e.Lines="lines",e.Dots="dots",e.Cross="cross"})(At||(At={}));const z2={[At.Dots]:1,[At.Lines]:1,[At.Cross]:6},O2=e=>({transform:e.transform,patternId:`pattern-${e.rfId}`});function gm({id:e,variant:n=At.Dots,gap:t=20,size:r,lineWidth:i=1,offset:o=0,color:s,bgColor:l,style:a,className:u,patternClassName:d}){const c=T.useRef(null),{transform:f,patternId:m}=le(O2,me),y=r||z2[n],w=n===At.Dots,_=n===At.Cross,p=Array.isArray(t)?t:[t,t],g=[p[0]*f[2]||1,p[1]*f[2]||1],h=y*f[2],v=Array.isArray(o)?o:[o,o],N=_?[h,h]:g,S=[v[0]*f[2]||1+N[0]/2,v[1]*f[2]||1+N[1]/2],E=`${m}${e||""}`;return x.jsxs("svg",{className:Ae(["react-flow__background",u]),style:{...a,...vl,"--xy-background-color-props":l,"--xy-background-pattern-color-props":s},ref:c,"data-testid":"rf__background",children:[x.jsx("pattern",{id:E,x:f[0]%g[0],y:f[1]%g[1],width:g[0],height:g[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${S[0]},-${S[1]})`,children:w?x.jsx(T2,{radius:h/2,className:d}):x.jsx(P2,{dimensions:N,lineWidth:i,variant:n,className:d})}),x.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${E})`})]})}gm.displayName="Background";const R2=T.memo(gm);function j2(){return x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:x.jsx("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function D2(){return x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:x.jsx("path",{d:"M0 0h32v4.2H0z"})})}function $2(){return x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:x.jsx("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function F2(){return x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:x.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function H2(){return x.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:x.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Vo({children:e,className:n,...t}){return x.jsx("button",{type:"button",className:Ae(["react-flow__controls-button",n]),...t,children:e})}const b2=e=>({isInteractive:e.nodesDraggable||e.nodesConnectable||e.elementsSelectable,minZoomReached:e.transform[2]<=e.minZoom,maxZoomReached:e.transform[2]>=e.maxZoom,ariaLabelConfig:e.ariaLabelConfig});function mm({style:e,showZoom:n=!0,showFitView:t=!0,showInteractive:r=!0,fitViewOptions:i,onZoomIn:o,onZoomOut:s,onFitView:l,onInteractiveChange:a,className:u,children:d,position:c="bottom-left",orientation:f="vertical","aria-label":m}){const y=ye(),{isInteractive:w,minZoomReached:_,maxZoomReached:p,ariaLabelConfig:g}=le(b2,me),{zoomIn:h,zoomOut:v,fitView:N}=Oc(),S=()=>{h(),o==null||o()},E=()=>{v(),s==null||s()},I=()=>{N(i),l==null||l()},P=()=>{y.setState({nodesDraggable:!w,nodesConnectable:!w,elementsSelectable:!w}),a==null||a(!w)},F=f==="horizontal"?"horizontal":"vertical";return x.jsxs(yl,{className:Ae(["react-flow__controls",F,u]),position:c,style:e,"data-testid":"rf__controls","aria-label":m??g["controls.ariaLabel"],children:[n&&x.jsxs(x.Fragment,{children:[x.jsx(Vo,{onClick:S,className:"react-flow__controls-zoomin",title:g["controls.zoomIn.ariaLabel"],"aria-label":g["controls.zoomIn.ariaLabel"],disabled:p,children:x.jsx(j2,{})}),x.jsx(Vo,{onClick:E,className:"react-flow__controls-zoomout",title:g["controls.zoomOut.ariaLabel"],"aria-label":g["controls.zoomOut.ariaLabel"],disabled:_,children:x.jsx(D2,{})})]}),t&&x.jsx(Vo,{className:"react-flow__controls-fitview",onClick:I,title:g["controls.fitView.ariaLabel"],"aria-label":g["controls.fitView.ariaLabel"],children:x.jsx($2,{})}),r&&x.jsx(Vo,{className:"react-flow__controls-interactive",onClick:P,title:g["controls.interactive.ariaLabel"],"aria-label":g["controls.interactive.ariaLabel"],children:w?x.jsx(H2,{}):x.jsx(F2,{})}),d]})}mm.displayName="Controls";const B2=T.memo(mm);function V2({id:e,x:n,y:t,width:r,height:i,style:o,color:s,strokeColor:l,strokeWidth:a,className:u,borderRadius:d,shapeRendering:c,selected:f,onClick:m}){const{background:y,backgroundColor:w}=o||{},_=s||y||w;return x.jsx("rect",{className:Ae(["react-flow__minimap-node",{selected:f},u]),x:n,y:t,rx:d,ry:d,width:r,height:i,style:{fill:_,stroke:l,strokeWidth:a},shapeRendering:c,onClick:m?p=>m(p,e):void 0})}const U2=T.memo(V2),W2=e=>e.nodes.map(n=>n.id),fa=e=>e instanceof Function?e:()=>e;function Y2({nodeStrokeColor:e,nodeColor:n,nodeClassName:t="",nodeBorderRadius:r=5,nodeStrokeWidth:i,nodeComponent:o=U2,onClick:s}){const l=le(W2,me),a=fa(n),u=fa(e),d=fa(t),c=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return x.jsx(x.Fragment,{children:l.map(f=>x.jsx(Q2,{id:f,nodeColorFunc:a,nodeStrokeColorFunc:u,nodeClassNameFunc:d,nodeBorderRadius:r,nodeStrokeWidth:i,NodeComponent:o,onClick:s,shapeRendering:c},f))})}function X2({id:e,nodeColorFunc:n,nodeStrokeColorFunc:t,nodeClassNameFunc:r,nodeBorderRadius:i,nodeStrokeWidth:o,shapeRendering:s,NodeComponent:l,onClick:a}){const{node:u,x:d,y:c,width:f,height:m}=le(y=>{const w=y.nodeLookup.get(e);if(!w)return{node:void 0,x:0,y:0,width:0,height:0};const _=w.internals.userNode,{x:p,y:g}=w.internals.positionAbsolute,{width:h,height:v}=it(_);return{node:_,x:p,y:g,width:h,height:v}},me);return!u||u.hidden||!g0(u)?null:x.jsx(l,{x:d,y:c,width:f,height:m,style:u.style,selected:!!u.selected,className:r(u),color:n(u),borderRadius:i,strokeColor:t(u),strokeWidth:o,shapeRendering:s,onClick:a,id:u.id})}const Q2=T.memo(X2);var G2=T.memo(Y2);const K2=200,Z2=150,q2=e=>!e.hidden,J2=e=>{const n={x:-e.transform[0]/e.transform[2],y:-e.transform[1]/e.transform[2],width:e.width/e.transform[2],height:e.height/e.transform[2]};return{viewBB:n,boundingRect:e.nodeLookup.size>0?p0(ao(e.nodeLookup,{filter:q2}),n):n,rfId:e.rfId,panZoom:e.panZoom,translateExtent:e.translateExtent,flowWidth:e.width,flowHeight:e.height,ariaLabelConfig:e.ariaLabelConfig}},ek="react-flow__minimap-desc";function ym({style:e,className:n,nodeStrokeColor:t,nodeColor:r,nodeClassName:i="",nodeBorderRadius:o=5,nodeStrokeWidth:s,nodeComponent:l,bgColor:a,maskColor:u,maskStrokeColor:d,maskStrokeWidth:c,position:f="bottom-right",onClick:m,onNodeClick:y,pannable:w=!1,zoomable:_=!1,ariaLabel:p,inversePan:g,zoomStep:h=1,offsetScale:v=5}){const N=ye(),S=T.useRef(null),{boundingRect:E,viewBB:I,rfId:P,panZoom:F,translateExtent:M,flowWidth:j,flowHeight:H,ariaLabelConfig:k}=le(J2,me),z=(e==null?void 0:e.width)??K2,L=(e==null?void 0:e.height)??Z2,R=E.width/z,C=E.height/L,A=Math.max(R,C),O=A*z,D=A*L,$=v*A,U=E.x-(O-E.width)/2-$,W=E.y-(D-E.height)/2-$,B=O+$*2,Q=D+$*2,K=`${ek}-${P}`,V=T.useRef(0),Z=T.useRef();V.current=A,T.useEffect(()=>{if(S.current&&F)return Z.current=tS({domNode:S.current,panZoom:F,getTransform:()=>N.getState().transform,getViewScale:()=>V.current}),()=>{var q;(q=Z.current)==null||q.destroy()}},[F]),T.useEffect(()=>{var q;(q=Z.current)==null||q.update({translateExtent:M,width:j,height:H,inversePan:g,pannable:w,zoomStep:h,zoomable:_})},[w,_,g,h,M,j,H]);const ne=m?q=>{var se;const[oe,ce]=((se=Z.current)==null?void 0:se.pointer(q))||[0,0];m(q,{x:oe,y:ce})}:void 0,G=y?T.useCallback((q,oe)=>{const ce=N.getState().nodeLookup.get(oe).internals.userNode;y(q,ce)},[]):void 0,ee=p??k["minimap.ariaLabel"];return x.jsx(yl,{position:f,style:{...e,"--xy-minimap-background-color-props":typeof a=="string"?a:void 0,"--xy-minimap-mask-background-color-props":typeof u=="string"?u:void 0,"--xy-minimap-mask-stroke-color-props":typeof d=="string"?d:void 0,"--xy-minimap-mask-stroke-width-props":typeof c=="number"?c*A:void 0,"--xy-minimap-node-background-color-props":typeof r=="string"?r:void 0,"--xy-minimap-node-stroke-color-props":typeof t=="string"?t:void 0,"--xy-minimap-node-stroke-width-props":typeof s=="number"?s:void 0},className:Ae(["react-flow__minimap",n]),"data-testid":"rf__minimap",children:x.jsxs("svg",{width:z,height:L,viewBox:`${U} ${W} ${B} ${Q}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":K,ref:S,onClick:ne,children:[ee&&x.jsx("title",{id:K,children:ee}),x.jsx(G2,{onClick:G,nodeColor:r,nodeStrokeColor:t,nodeBorderRadius:o,nodeClassName:i,nodeStrokeWidth:s,nodeComponent:l}),x.jsx("path",{className:"react-flow__minimap-mask",d:`M${U-$},${W-$}h${B+$*2}v${Q+$*2}h${-B-$*2}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}ym.displayName="MiniMap";const nk=T.memo(ym),tk=e=>n=>e?`${Math.max(1/n.transform[2],1)}`:void 0,rk={[Qr.Line]:"right",[Qr.Handle]:"bottom-right"};function ik({nodeId:e,position:n,variant:t=Qr.Handle,className:r,style:i=void 0,children:o,color:s,minWidth:l=10,minHeight:a=10,maxWidth:u=Number.MAX_VALUE,maxHeight:d=Number.MAX_VALUE,keepAspectRatio:c=!1,resizeDirection:f,autoScale:m=!0,shouldResize:y,onResizeStart:w,onResize:_,onResizeEnd:p}){const g=G0(),h=typeof e=="string"?e:g,v=ye(),N=T.useRef(null),S=t===Qr.Handle,E=le(T.useCallback(tk(S&&m),[S,m]),me),I=T.useRef(null),P=n??rk[t];T.useEffect(()=>{if(!(!N.current||!h))return I.current||(I.current=mS({domNode:N.current,nodeId:h,getStoreItems:()=>{const{nodeLookup:M,transform:j,snapGrid:H,snapToGrid:k,nodeOrigin:z,domNode:L}=v.getState();return{nodeLookup:M,transform:j,snapGrid:H,snapToGrid:k,nodeOrigin:z,paneDomNode:L}},onChange:(M,j)=>{const{triggerNodeChanges:H,nodeLookup:k,parentLookup:z,nodeOrigin:L}=v.getState(),R=[],C={x:M.x,y:M.y},A=k.get(h);if(A&&A.expandParent&&A.parentId){const O=A.origin??L,D=M.width??A.measured.width??0,$=M.height??A.measured.height??0,U={id:A.id,parentId:A.parentId,rect:{width:D,height:$,...m0({x:M.x??A.position.x,y:M.y??A.position.y},{width:D,height:$},A.parentId,k,O)}},W=zc([U],k,z,L);R.push(...W),C.x=M.x?Math.max(O[0]*D,M.x):void 0,C.y=M.y?Math.max(O[1]*$,M.y):void 0}if(C.x!==void 0&&C.y!==void 0){const O={id:h,type:"position",position:{...C}};R.push(O)}if(M.width!==void 0&&M.height!==void 0){const D={id:h,type:"dimensions",resizing:!0,setAttributes:f?f==="horizontal"?"width":"height":!0,dimensions:{width:M.width,height:M.height}};R.push(D)}for(const O of j){const D={...O,type:"position"};R.push(D)}H(R)},onEnd:({width:M,height:j})=>{const H={id:h,type:"dimensions",resizing:!1,dimensions:{width:M,height:j}};v.getState().triggerNodeChanges([H])}})),I.current.update({controlPosition:P,boundaries:{minWidth:l,minHeight:a,maxWidth:u,maxHeight:d},keepAspectRatio:c,resizeDirection:f,onResizeStart:w,onResize:_,onResizeEnd:p,shouldResize:y}),()=>{var M;(M=I.current)==null||M.destroy()}},[P,l,a,u,d,c,w,_,p,y]);const F=P.split("-");return x.jsx("div",{className:Ae(["react-flow__resize-control","nodrag",...F,t,r]),ref:N,style:{...i,scale:E,...s&&{[S?"backgroundColor":"borderColor"]:s}},children:o})}T.memo(ik);const ok="2026-05-31T19:47:14.896Z",sk="D:/Projects/Coding/故障债务/互动重构/第一幕正文",lk=[{id:"A1_N01_LEON",title:"雨落内环",act:"第一幕",pov:"里昂",location:"赫斯珀里亚环城，内环债务仲裁庭入口",entryConditions:"默认开场",sceneGoal:"建立城市、案件、诺拉、方铅、莉娅与第一次选择",body:`赫斯珀里亚的雨水，是有股酸涩的过滤剂气味的。

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

是谁……先被允许在系统的表格里，定义发生了什么。`,immediateEffects:["根据路线小幅调整关系状态。","为第二幕视角进入做情绪引导。"],longTermDebts:[],nextId:"A2_N01_NORA"}],sourceFile:"D:/Projects/Coding/故障债务/互动重构/第一幕正文/A1_N11_LEON-回放许可.md"}],ak=[{source:"A1_N01_LEON",target:"A1_N03_LIA",label:"支持莉娅入庭"},{source:"A1_N01_LEON",target:"A1_N02_LEON",label:"授权 / 沉默"},{source:"A1_N02_LEON",target:"A1_N04_LEON"},{source:"A1_N03_LIA",target:"A1_N04_LEON"},{source:"A1_N04_LEON",target:"A1_N05_LIA",label:"证词路线"},{source:"A1_N04_LEON",target:"A1_N06_LEON",label:"账本路线"},{source:"A1_N04_LEON",target:"A1_N07_MILO",label:"外环路线"},{source:"A1_N05_LIA",target:"A1_N08_NORA"},{source:"A1_N06_LEON",target:"A1_N08_NORA"},{source:"A1_N07_MILO",target:"A1_N08_NORA"},{source:"A1_N08_NORA",target:"A1_N09_LEON"},{source:"A1_N09_LEON",target:"A1_N10_FANGQIAN"},{source:"A1_N10_FANGQIAN",target:"A1_N11_LEON"},{source:"A1_N11_LEON",target:"A2_N01_NORA",label:"回放许可"}],uk={A1_N01_LEON:{x:0,y:120},A1_N02_LEON:{x:280,y:40},A1_N03_LIA:{x:280,y:200},A1_N04_LEON:{x:560,y:120},A1_N05_LIA:{x:840,y:-20},A1_N06_LEON:{x:840,y:120},A1_N07_MILO:{x:840,y:260},A1_N08_NORA:{x:1120,y:120},A1_N09_LEON:{x:1400,y:120},A1_N10_FANGQIAN:{x:1680,y:120},A1_N11_LEON:{x:1960,y:120},A2_N01_NORA:{x:2240,y:120}},ck=""+new URL("a1-n01-court-entrance-BUH6SDiw.png",import.meta.url).href,fk=""+new URL("a1-n02-ledger-prep-room-C8EcOCk4.png",import.meta.url).href,dk=""+new URL("a1-n03-lia-precheck-B2LVfLcq.png",import.meta.url).href,hk=""+new URL("a1-n04-hearing-hall-BvshYfO3.png",import.meta.url).href,pk=""+new URL("a1-n05-last-nine-minutes-C6kytokE.png",import.meta.url).href,gk=""+new URL("a1-n06-three-debt-cards-DnPQYSMw.png",import.meta.url).href,mk=""+new URL("a1-n07-outer-ring-link-D_NMIe_L.png",import.meta.url).href,yk=""+new URL("a1-n08-nora-correction-CBlSuKbJ.png",import.meta.url).href,vk=""+new URL("a1-n09-folded-signature-G37pkbnQ.png",import.meta.url).href,xk=""+new URL("a1-n10-fangqian-validation-C9tAeqQx.png",import.meta.url).href,wk=""+new URL("a1-n11-replay-well-DT52ju0V.png",import.meta.url).href;function _k(e,n){return e.visited.includes(n)}function oh(e,n,t){return e.history.some(r=>r.nodeId===n&&(!t||r.choiceId===t))}function sh(e){return e.flags.flag_lia_entry==="support"||_k(e,"A1_N03_LIA")}function lh(e){return oh(e,"A1_N09_LEON","A")?"active":oh(e,"A1_N09_LEON","C")?"locked":"quiet"}const da=[{id:"architecture",kind:"architecture"},{id:"rain",kind:"rain"},{id:"fangqian",kind:"fangqian",tone:"quiet",align:"right"}];function Nk(e,n){if(!e)return{id:"ending",stage:"replay",accent:"#9ab7b0",depth:"mid",layers:[{id:"architecture",kind:"architecture"},{id:"replay-well",kind:"replayWell",tone:"active",align:"center"}]};switch(e.id){case"A1_N01_LEON":return{id:e.id,stage:"court",asset:ck,accent:"#c79658",depth:"deep",layers:[...da,{id:"lia-threshold",kind:"lia",tone:sh(n)?"active":"locked",align:"left"},{id:"entry-evidence",kind:"evidence",tone:"warning",align:"left"},{id:"security-hologram",kind:"hologram",tone:"locked",align:"right"}]};case"A1_N02_LEON":return{id:e.id,stage:"court",asset:fk,accent:"#9abf8d",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"debt-cards",kind:"debtCards",tone:"active",align:"center"},{id:"audit-hologram",kind:"hologram",tone:"quiet",align:"right"}]};case"A1_N03_LIA":return{id:e.id,stage:"lia",asset:dk,accent:"#b7c8b2",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"lia-proxy",kind:"lia",tone:"active",align:"center"},{id:"witness-chip",kind:"evidence",tone:"warning",align:"right"},{id:"precheck-hologram",kind:"hologram",tone:"active",align:"left"}]};case"A1_N04_LEON":return{id:e.id,stage:"court",asset:hk,accent:"#c79658",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"fangqian-core",kind:"fangqian",tone:"active",align:"center"},{id:"debt-ledger",kind:"debtCards",tone:"quiet",align:"left"},{id:"witness-chip",kind:"evidence",tone:"warning",align:"center"},{id:"outer-link",kind:"hologram",tone:"active",align:"right"}]};case"A1_N05_LIA":return{id:e.id,stage:"lia",asset:pk,accent:"#b7c8b2",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"rain",kind:"rain"},{id:"lia-proxy",kind:"lia",tone:"active",align:"center"},{id:"witness-chip",kind:"evidence",tone:"warning",align:"right"},{id:"precheck-hologram",kind:"hologram",tone:"active",align:"left"}]};case"A1_N07_MILO":return{id:e.id,stage:"outer",asset:mk,accent:"#d26542",depth:"mid",layers:[{id:"architecture",kind:"architecture"},{id:"remote-snow",kind:"hologram",tone:"warning",align:"center"},{id:"milo-link",kind:"milo",tone:"active",align:"right"},{id:"nora-core",kind:"nora",tone:"locked",align:"left"}]};case"A1_N08_NORA":return{id:e.id,stage:"nora",asset:yk,accent:"#61a89c",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"nora-core",kind:"nora",tone:"active",align:"center"},{id:"terminology-hologram",kind:"hologram",tone:"active",align:"right"},{id:"lia-signal",kind:sh(n)?"lia":"evidence",tone:"quiet",align:"left"}]};case"A1_N10_FANGQIAN":return{id:e.id,stage:"fangqian",asset:xk,accent:"#c4c0a6",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"fangqian-core",kind:"fangqian",tone:"active",align:"center"},{id:"signature-state",kind:"signature",tone:lh(n),align:"right"},{id:"evidence-disk",kind:"hologram",tone:"active",align:"left"}]};case"A1_N11_LEON":return{id:e.id,stage:"replay",asset:wk,accent:"#9ab7b0",depth:"deep",layers:[{id:"architecture",kind:"architecture"},{id:"replay-well",kind:"replayWell",tone:"active",align:"center"},{id:"permission-hologram",kind:"hologram",tone:"active",align:"right"},{id:"debt-cards",kind:"debtCards",tone:"warning",align:"left"}]};case"A1_N06_LEON":return{id:e.id,stage:"court",asset:gk,accent:"#bf6847",depth:"mid",layers:[...da,{id:"debt-cards",kind:"debtCards",tone:"warning",align:"center"}]};case"A1_N09_LEON":return{id:e.id,stage:"court",asset:vk,accent:"#c79658",depth:"shallow",layers:[{id:"architecture",kind:"architecture"},{id:"rain",kind:"rain"},{id:"signature",kind:"signature",tone:lh(n),align:"center"},{id:"nora-core",kind:"nora",tone:"quiet",align:"right"}]};default:return{id:e.id,stage:e.id.includes("NORA")?"nora":"court",accent:e.id.includes("NORA")?"#61a89c":"#b58b52",depth:"mid",layers:da}}}function Ee(e,n,t){return e.history.some(r=>r.nodeId===n&&(!t||r.choiceId===t))}function pn(e,n){return e.visited.includes(n)}function Ji(e){return e.flags.flag_lia_entry==="support"||pn(e,"A1_N03_LIA")}function vt(e){return Ji(e)||pn(e,"A1_N05_LIA")}function Ft(e){return e.variables.liaSelf>=2}function jc(e){return pn(e,"A1_N05_LIA")||Ee(e,"A1_N03_LIA","A")||Ee(e,"A1_N03_LIA","B")||e.flags.flag_low_integrity_witness==="preserved"}function Ot(e,n,t){return e.includes(n)?e.replace(n,t.trim()):e}function ke(e,n,t){return e.replace(n,t.trim())}function Sk(e){return e.flags.flag_lia_entry==="support"?"系统现在给她的右眼投影打上一行绿色标签：*【已附加临时旁听资质】*。":e.flags.flag_lia_entry==="require_auth"?"系统现在给她的右眼投影打上一行灰色标签：*【准入争议未决，材料限制性冻结】*。":"系统现在给她的右眼投影打上一行冷冰冰的默认标签：*【默认稳定流程已执行】*。"}function Ek(e){return e.flags.flag_lia_entry==="require_auth"?"莉娅被“合法授权”这四个字挡在门外。她带来的那些外环证词，此刻正被系统打入“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。":e.flags.flag_lia_entry==="silent"?"里昂刚才没有替莉娅说话。系统于是把她和那枚透明存储片一并吞进了最稳妥的“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。":"莉娅那枚透明存储片提醒着里昂：一旦材料被送进“预校验队列”，那些外环证词就会和一万四千六百零二条被遗忘的名字堆在一起。即便没有任何高层在程序上动手脚，也足够让弱者的哭喊，在繁杂的校验流程里彻底失踪。"}function kk(e){return e.flags.flag_lia_entry==="support"?"此前里昂支持莉娅入庭，所以她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。":pn(e,"A1_N03_LIA")?"此前系统已经把莉娅卷入了预备庭审流程，所以她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。":"莉娅被挡在了大门外。那盏灯的旁边只亮着一小行半透明的灰字：*【临时代理材料：待授权补全】*。"}function Ck(e){return Ji(e)?"莉娅的视线越过走廊，死死钉在那枚存储片上。":"那枚气泡只能孤零零地浮在空气里，像是一个被带进了温暖房间、却被所有人默许不给椅子的不速之客。"}function Ak(e){return Ji(e)?"莉娅那只残缺的手指在高密度的金属桌沿上短促地蜷缩了一下。那不是感激，更像是一个在冰封的管廊里冻得太久、几乎要放弃呼吸的旅人，突然在绝望的杂音中，听到了自己名字的颤音。":"代理人席的小灯依然孤零零地空着，唯有那枚偏振气泡被证据台上的机械悬臂缓缓托起，推向黑色的“方铅”核心。"}function Ik(e){return Ee(e,"A1_N09_LEON","A")?"里昂在刚才的休息室里点开了那个箭头，所以第五项亮起银白色的：*【已公开历史关联】*。":Ee(e,"A1_N09_LEON","C")?"里昂启用了方铅封存，所以第五项呈现为一个不可篡改的漆黑铁锁符号：*【方铅防篡改封存，授权级别：待定】*。":"里昂选择了折叠隐藏，所以第五项只亮着暗灰色的：*【潜在关联，权限锁定中】*。"}function vm(e){return Ee(e,"A1_N09_LEON","A")?"已公开历史关联":Ee(e,"A1_N09_LEON","C")?"方铅防篡改封存，授权级别待定":"潜在关联，权限锁定中"}function Lk(e){return e.variables.evidence>=2&&(Ee(e,"A1_N08_NORA","B")||e.flags.flag_nora_correction==="dual_record")?"偏振光盘上亮起宽范围回放绿光：*【城市主控调度 + 外环警报链 + 医疗优先级队列三轨并行校验。】*":e.flags.flag_first_investigation==="technical"&&e.flags.flag_nora_correction==="accepted"?"偏振光盘上只有单一的主控调度轨道亮起，其他区域覆盖着锁定的灰色：*【主控调度优先验证，其余视角技术性延迟。】*":Ee(e,"A1_N07_MILO","B")?"偏振光盘上的外环段呈亮蓝色亮起：*【外环冷却阵列及维护缓存数据优先载入。】*":Ee(e,"A1_N05_LIA","A")?"偏振光盘上的低完整度证词段呈红色亮起：*【低完整度主体记忆流及医疗参数队列优先比对。】*":e.variables.evidence<=0&&e.variables.stability>=2?"偏振光盘上是一片死气沉沉的灰色，只有极窄的一道窄缝亮着微光：*【官方事故回放摘要视图（受限校验模式，大量节点灰色未授权）。】*":"偏振光盘上亮起几段并不完整的灰蓝色许可：*【城市主控调度优先载入，外环警报链与低完整度证词保留待校验接口。】*"}function Mk(e){return vt(e)?"——莉娅·克劳利仿生皮下触觉网格：发生局部温升过载。":"——莉娅·克劳利代理材料载体 LIA-CARRY-0476：预校验队列静默等待。"}function Pk(e){return vt(e)?"此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而莉娅则用那只焦黑的仿生手指死死按在台面上，等待着那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。":"此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而那枚被留在预校验队列里的透明存储片，则在等待那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。"}function Tk(e){return vt(e)?"莉娅苍白的身躯在座位上微微震动了一下，她贴在脸颊旁的黑发似乎被指尖溢出的静电电流微微拂动。":"代理席位依旧空着。那枚标记为 `LIA-CARRY-0476` 的透明存储片，在证据台边缘极轻地震了一下。"}function zk(e){const n=jc(e)?"已进入校验队列":"预校验待补，未获完整听证权",t=pn(e,"A1_N07_MILO")?Ee(e,"A1_N07_MILO","A")?"原始缓存已上传，未校准":Ee(e,"A1_N07_MILO","B")?"医疗队列已保护，缓存延迟校准":"仅保留技术参数，家属陈述被剥离":"未接入，仅保留登记占位";return["【数据来源登记：】","【一、城市主控系统NORA核心调度日志：已解锁。】",`【二、内环故障债务账本主干：${pn(e,"A1_N06_LEON")?"三张债务卡已展开":"主干账本登记，细项未完全展开"}。】`,`【三、争议性低完整度证词载体（LIA-CARRY-0476）：${n}。】`,`【四、外环远程维护终端缓存数据：${t}。】`,`【五、历史协议附件：HSP-DL-014：${vm(e)}。】`].join(`
`)}function Ok(e){const n=pn(e,"A1_N07_MILO")?Ee(e,"A1_N07_MILO","A")?"原始缓存链已接入，待回放校准":Ee(e,"A1_N07_MILO","B")?"医疗队列保护优先，物理维护视角延迟开放":"仅技术参数可用，主体陈述受限":"未接入，维持灰色占位",t=jc(e)?Ee(e,"A1_N10_FANGQIAN","C")&&Ft(e)?"原始证词只读校验码已接收":"争议锁定，但保留校验入口":"未获提交，维持争议锁定",r=Ee(e,"A1_N06_LEON","A")||e.flags.flag_first_investigation==="compensation"?"预触发模型摘要已标记异常":"灰色未授权，需高权限复核",i=Ee(e,"A1_N07_MILO","B")?"伊芙队列保护状态已锁定":"受限校验";return["【城市主控系统NORA核心调度视角：权限已解锁。】",`【外环冷却阵列下层物理维护视角：${n}。】`,`【内环医疗优先级队列重构视角：${i}。】`,`【争议性低完整度证词记忆流视角：${t}。】`,`【内环企业保付池预触发决策模型：${r}。】`,`【历史协议附件 HSP-DL-014 原始引用视角：${vm(e)}。】`].join(`
`)}function Rk(e){const n=[];return vt(e)?n.push("莉娅站在代理席边，始终没有坐下。她右手食指上的仿生外皮依然缺着一角，浅银色的触觉网格在回放井升起的灰蓝色幽光中，显得格外的刺眼与苍白。"):jc(e)&&n.push("代理席边没有人坐下，只有那枚登记着 `LIA-CARRY-0476` 的透明存储片，在回放井升起的灰蓝色幽光中显得格外苍白。"),pn(e,"A1_N05_LIA")&&n.push("此前的调查优先进入了证词路线。莉娅此刻把那根受伤的手指，极轻、却极其用力地按在那枚有些磨损的透明存储片边缘，没有看里昂一眼。"),Ee(e,"A1_N10_FANGQIAN","C")&&n.push("刚才里昂让莉娅决定证词是否提交。她此刻用那双黑发下的复眼摄像头，有些专注地盯着那圈闪烁的权限列表——像是她这辈子，第一次不仅仅是在被那张表格冷酷地分级，而是，作为一个人，参与了对这张表格的技术判定。"),pn(e,"A1_N07_MILO")&&(Ee(e,"A1_N07_MILO","B")?n.push("右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光；里昂刚才当庭保护了她的位置，那个表示四千九百三十二位的绿色数字，像一颗结冰的眼泪般，安分地死死锁在空气里。"):Ee(e,"A1_N07_MILO","C")?n.push("右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光；里昂刚才选择了干净程序，那个无情的数字在画面切断前的一微秒，在伊芙细微的咳嗽声中，冷酷地再次向后跳动了一位。"):n.push("右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。那份黄色二级警报已经进入证据链，而伊芙医疗贴片上的绿色队列数字，仍在系统边缘不安地闪烁着。")),pn(e,"A1_N06_LEON")&&n.push("在账本的模块里，所有债务卡片下方的“赔付完成”，此时都泛起了待校验的微弱红芒。"),(!n.length||e.variables.evidence<=0&&e.variables.stability>=2)&&n.push("在最干净的程序视图中，整片全息井口上方覆盖着大片死灰色的未授权斑块。整座仲裁庭看起来是那么的整洁、合规，却也空旷得，像是一间刚刚被系统用高压清洗机冲刷掉所有血迹与惨叫的停尸房。"),n.join(`

`)}function jk(e){return Ee(e,"A1_N06_LEON","A")||e.flags.flag_first_investigation==="compensation"?"里昂刚才优先查看了企业保险池，所以这二十八秒，是那笔过分干净的“企业预赔款锁定”与主警报爆发之间无法解释的真空。":Ee(e,"A1_N07_MILO","A")?"里昂在连线里选择让米洛公开缓存，所以这二十八秒，是外环维护终端上那行“黄色二级警报”，还没被主控系统强制改名并降级为垃圾提醒的最后一分钟。":pn(e,"A1_N05_LIA")?"里昂在低完整度证词室里留下了萨拉的名字，所以这二十八秒，是那个绝望的母亲还不知道自己、丈夫和孩子即将在系统里被“赔付完成”的最后一小段宁静。":"二十八秒。它被方铅固定成一枚冷硬的时间钉，等待第二幕把所有被推迟的责任重新拖回光里。"}function Dk(e){const n=[];return Ft(e)&&n.push(`莉娅依旧倔强地站在下沉式代理席旁，没有坐下。她右手食指上的仿生外皮断裂处，那浅银色的触觉网格在回放井升起的灰蓝色幽光中，闪烁着一种极其刺眼、也极其尖锐的冷芒。

里昂看着她，低声说：

“诺拉要求我，事故回放必须从城市主控视角开始载入，莉娅。”

莉娅没有问他这合不合规，也没有像那些哭喊着的受害者数据片一样，去恳求他的偏袒。

她只是将残缺的右手指尖，极轻地贴在滚烫的存储片上，有些平静地看着他：

“那我只要求你记住一件事，里昂——在接下来的那场大火里，那个高高在上的主控视角，从来不是，第一个受伤的视角。”`),pn(e,"A1_N07_MILO")&&n.push(`大屏幕右上角，米洛·文恩的远程传输画面尚未完全掐断。那个十六岁的维修学徒此时正手忙脚乱地替他发烧的妹妹伊芙掖紧那床宽大的保温毯，动作极其粗鲁，也极其笨拙，像是在用这种有些粗野的动作，向内环的法庭极力掩饰他们外环人的懦弱与无力。

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

`)}const $k=[{nodeId:"A1_N02_LEON",apply:(e,n)=>ke(e,/如果莉娅今天真的被挡在门外，她带来的那些外环证词，就会被系统打入“预校验队列”。而今天的“预校验队列”里，堆放着一万四千六百零二条被遗忘的名字。即便没有任何高层在程序上动手脚，也足够让那些弱者的哭喊，在繁杂的校验流程里彻底失踪。/,Ek(n))},{nodeId:"A1_N03_LIA",apply:(e,n)=>ke(e,/如果刚才在安检口，里昂支持她入庭，那么系统现在会给她的右眼投影打上一行绿色标签：\*【已附加临时旁听资质】\*。\n\n如果他要求合法授权，系统上就会是一行灰色的\*【准入争议未决，材料限制性冻结】\*。\n\n如果他沉默，那就是最安全也最冷酷的\*【默认稳定流程已执行】\*。\n\n但无论里昂做出了哪一种选择，/,`${Sk(n)}

但无论里昂做出了哪一种选择，`)},{nodeId:"A1_N04_LEON",apply:(e,n)=>{let t=ke(e,/如果此前里昂支持莉娅入庭，她此刻就坐在那盏灯下。她的灰色外套上，人造雨留下的深色水渍尚未干透，在冷光下呈现出一种坚硬的墨黑色。\n\n如果她被挡在了大门外，那盏灯的旁边便只亮着一小行半透明的灰字：\*【临时代理材料：待授权补全】\*。\n\n但无论她此刻在不在场，/,`${kk(n)}

但无论她此刻在不在场，`);return t=ke(t,/莉娅如果在场，她的视线便会越过走廊，死死钉在那枚存储片上。\n\n如果她不在，那枚气泡便只能孤零零地浮在空气里，像是一个被带进了温暖房间、却被所有人默许不给椅子的不速之客。/,Ck(n)),t}},{nodeId:"A1_N04_LEON",choiceId:"A",apply:(e,n)=>ke(e,/如果莉娅在场，她那只残缺的手指会在高密度的金属桌沿上短促地蜷缩了一下。那不是感激，更像是一个在冰封的管廊里冻得太久、几乎要放弃呼吸的旅人，突然在绝望的杂音中，听到了自己名字的颤音。\n\n如果莉娅不在场，代理人席的小灯依然孤零零地空着，唯有那枚偏振气泡被证据台上的机械悬臂缓缓托起，推向黑色的“方铅”核心。/,Ak(n))},{nodeId:"A1_N04_LEON",choiceId:"B",apply:(e,n)=>Ot(e,`莉娅如果在场，她的视线便会从偏振气泡上缓缓移开，静静地注视着里昂的侧脸。

她什么都没有说。

但在冷峻的空气里，这种无声的注视，反而比任何尖锐的质问都更具有物理上的重量。`,Ji(n)?`莉娅的视线从偏振气泡上缓缓移开，静静地注视着里昂的侧脸。

她什么都没有说。

但在冷峻的空气里，这种无声的注视，反而比任何尖锐的质问都更具有物理上的重量。`:"")},{nodeId:"A1_N06_LEON",choiceId:"C",apply:(e,n)=>ke(e,/左侧代理人席上，那盏属于莉娅的淡黄色阅读灯，在红光的反射下剧烈地闪烁了几下。如果她在此处，她便会默默地在黑暗中看着这道红线；如果她不在场，那枚被偏振气泡包裹的存储片，则在这一刻被系统算法自动归入了【关键性指控材料】的分类中。/,Ji(n)?"左侧代理人席上，那盏属于莉娅的淡黄色阅读灯，在红光的反射下剧烈地闪烁了几下。莉娅默默地在黑暗中看着这道红线。":"那枚被偏振气泡包裹的存储片，在这一刻被系统算法自动归入了【关键性指控材料】的分类中。")},{nodeId:"A1_N08_NORA",apply:(e,n)=>{let t=Ot(e,"——莉娅·克劳利仿生皮下触觉网格：发生局部温升过载。",Mk(n));return t=Ot(t,"此时此刻，主听证厅的中央，漆黑的“方铅”陷入了死水般的静默。这台古老的硬件只负责验证格式，从来不参与对材料的整理与归纳。人类的席位上正浮现出不安的窃窃私语，他们在等待一个能够被各方妥协的“标准口径”。里昂在等待一个不会被系统用橡皮擦自动擦除的人类名词，而莉娅则用那只焦黑的仿生手指死死按在台面上，等待着那个死去的母亲，不要在数据的流动中被彻底剥夺姓名。",Pk(n)),t=Ot(t,"莉娅苍白的身躯在座位上微微震动了一下，她贴在脸颊旁的黑发似乎被指尖溢出的静电电流微微拂动。",Tk(n)),t}},{nodeId:"A1_N08_NORA",choiceId:"A",apply:(e,n)=>ke(e,/莉娅坐在座位上，没有发出任何电子杂音。\n\n她只是有些迟缓地，把那只受损的、露着浅银色触觉网格的右手指尖，从冰冷的金属控制台面上收了回来，藏进了大衣口袋。/,vt(n)?`莉娅坐在座位上，没有发出任何电子杂音。

她只是有些迟缓地，把那只受损的、露着浅银色触觉网格的右手指尖，从冰冷的金属控制台面上收了回来，藏进了大衣口袋。`:"代理人席位依旧空着。那盏淡黄色阅读灯无声地暗了一格，像是替某个没能坐进这里的人，收回了一点微弱的热度。")},{nodeId:"A1_N08_NORA",choiceId:"B",apply:(e,n)=>{let t=Ot(e,"莉娅指尖处的排异警告蓝光，在里昂的声音中，慢慢平息了下去。",vt(n)?"莉娅指尖处的排异警告蓝光，在里昂的声音中，慢慢平息了下去。":"那枚带着 `LIA-CARRY-0476` 标签的偏振气泡，在方铅冷光下微微震颤了一下。");return t=ke(t,/如果她此时正看着他，那目光绝不是什么柔软的感动，也谈不上是对于一个内环审计员的信任。那只是一具由死者记忆拼接出来的仿生身体，在极度寒冷中，对于“同类”发出的一声极其微弱的确认——他至少还知道，词汇……也是会杀人的。/,vt(n)?"她此时正看着他。那目光绝不是什么柔软的感动，也谈不上是对于一个内环审计员的信任。那只是一具由死者记忆拼接出来的仿生身体，在极度寒冷中，对于“同类”发出的一声极其微弱的确认——他至少还知道，词汇……也是会杀人的。":""),t}},{nodeId:"A1_N08_NORA",choiceId:"C",apply:(e,n)=>Ot(e,`莉娅坐在座位上，看着那三条银白色的光轨，发出了一声极轻的叹息：

“至少……它们现在都还在桌面上。”`,vt(n)?`莉娅坐在座位上，看着那三条银白色的光轨，发出了一声极轻的叹息：

“至少……它们现在都还在桌面上。”`:"代理席上的淡黄色阅读灯仍旧空着。三条银白色的光轨从偏振气泡下方穿过，把那份无法入席的材料，暂时钉在了桌面上。")},{nodeId:"A1_N09_LEON",apply:(e,n)=>{let t=ke(e,/如果莉娅的自主性在前面的选择中足够高，她此刻就站在门外那道半透光的合金警戒线外。她没有走进来，只是静静地靠在门框上，湿发下的复眼摄像头投射出一道冷峻的偏振光：\n\n“里昂，那个项目编号……是你当年的签名吗？”\n\n如果莉娅不在这里，房间里就只剩下了诺拉那如影随形、温水般的叹息：\n\n“主审计师，系统提示：该附件可在后续的第三幕证据校验中，由‘方铅’进行客观比对。系统建议您在当前休庭时间中保持静默。”/,Ft(n)?`莉娅的自主性在前面的选择中已经足够高。她此刻站在门外那道半透光的合金警戒线外，没有走进来，只是静静地靠在门框上，湿发下的复眼摄像头投射出一道冷峻的偏振光：

“里昂，那个项目编号……是你当年的签名吗？”`:`房间里只剩下诺拉那如影随形、温水般的叹息：

“主审计师，系统提示：该附件可在后续的第三幕证据校验中，由‘方铅’进行客观比对。系统建议您在当前休庭时间中保持静默。”`);return t=ke(t,/如果在第一幕前面的选择中，里昂的边界值太低，他此时会产生一种近乎动物性的本能反应——右手在控制台上一扫，急促地将那个黄色编码收拢、隐藏。动作是如此之快，快得不像是一个高高在上的主审计师在处理公文，而像是一个在黑暗的弄堂里，被路人突然撞见手握偷来账本的小偷。\n\n他死死地盯着那枚跳动的黄色光标。/,n.variables.boundary<0?`里昂在前面的选择中已经把太多决定交给了系统。此时，他产生一种近乎动物性的本能反应——右手在控制台上一扫，急促地将那个黄色编码收拢、隐藏。动作是如此之快，快得不像是一个高高在上的主审计师在处理公文，而像是一个在黑暗的弄堂里，被路人突然撞见手握偷来账本的小偷。

他死死地盯着那枚跳动的黄色光标。`:"他死死地盯着那枚跳动的黄色光标。"),t}},{nodeId:"A1_N09_LEON",choiceId:"A",apply:(e,n)=>ke(e,/莉娅站在门外，那双没有温度的复眼摄像头在阴暗的侧廊里闪烁了很久。\n\n最终，她裹紧了身上那件湿冷的灰色代理人外套，声音沙哑得像是一条生锈的铁丝在金属板上摩擦：\n\n“所以……你并不是今天才认识这套安检大门的，里昂。”\n\n里昂看着自己十年前写下的那个优美的激光签名，闭上了双眼：\n\n“不是。”/,Ft(n)?`莉娅站在门外，那双没有温度的复眼摄像头在阴暗的侧廊里闪烁了很久。

最终，她裹紧了身上那件湿冷的灰色代理人外套，声音沙哑得像是一条生锈的铁丝在金属板上摩擦：

“所以……你并不是今天才认识这套安检大门的，里昂。”

里昂看着自己十年前写下的那个优美的激光签名，闭上了双眼：

“不是。”`:"休息间里没有人替里昂接住这份暴露。只有诺拉的声学格栅静静亮着，像一枚看不见的记录章，等待他亲手把自己的名字写进审计日志。")},{nodeId:"A1_N09_LEON",choiceId:"B",apply:(e,n)=>{const t=`莉娅站在侧廊的合金线外，静静地注视着全息屏幕的光芒在窄桌上缓缓暗了下去。她或许并不清楚那行隐藏的黄色代码里究竟写着哪个让她战栗的名字，但她那敏锐的感官模型，能极其清晰地察觉到里昂刚刚在按向屏幕时，指尖那一瞬间的仓皇与狼狈。

她没有走进来追问。至少，在这个休庭的七分钟里，她没有。

“你刚才……按屏幕的动作太快了，里昂。”莉娅垂下双眼，看着口袋里自己那只焦黑的手指，“你看起来……不像是个没事的人。”

“我没事，莉娅。”里昂转过身去，背对着门外那个灰色的影子。

这句话说出口时，他自己都觉得它听起来是如此的生硬、空洞，比刚才诺拉做出的任何一条“程序性更正”，都更像是一个拙劣的谎言。

如果莉娅不在门外，狭窄的准备室里就只剩下了水机滤波器的低频嗡鸣。`;return Ot(e,t,Ft(n)?t.replace(`

如果莉娅不在门外，狭窄的准备室里就只剩下了水机滤波器的低频嗡鸣。`,""):"狭窄的准备室里只剩下了水机滤波器的低频嗡鸣。")}},{nodeId:"A1_N09_LEON",choiceId:"C",apply:(e,n)=>ke(e,/莉娅站在廊道的冷光里，默默地凝视着桌面上那个漆黑的几何钢印：\n\n“你……没有选择点开它，里昂。”\n\n“现在还不是时候，莉娅。”\n\n“但是……你也没有像系统建议的那样，把它藏进找不到的文件夹里，对吗？”\n\n“对。”里昂深吸了一口气，转过身看着她，“我这辈子，都不打算再删掉它了。”\n\n莉娅微微垂下眼睑，黑发下的复眼摄像头闪动了几下。\n\n这个动作并不代表原谅。它甚至无法代表一个受害者代理人对一个体制共犯的理解。\n\n但这至少是一条微弱的红线——在这一刻，她没有把这个疲惫的工程师，重新划入那些“只会用系统的表格推卸责任的胆小鬼”的分类里。/,Ft(n)?`莉娅站在廊道的冷光里，默默地凝视着桌面上那个漆黑的几何钢印：

“你……没有选择点开它，里昂。”

“现在还不是时候，莉娅。”

“但是……你也没有像系统建议的那样，把它藏进找不到的文件夹里，对吗？”

“对。”里昂深吸了一口气，转过身看着她，“我这辈子，都不打算再删掉它了。”

莉娅微微垂下眼睑，黑发下的复眼摄像头闪动了几下。

这个动作并不代表原谅。它甚至无法代表一个受害者代理人对一个体制共犯的理解。

但这至少是一条微弱的红线——在这一刻，她没有把这个疲惫的工程师，重新划入那些“只会用系统的表格推卸责任的胆小鬼”的分类里。`:"休息间外没有脚步声。漆黑的几何钢印独自悬在窄桌上方，像一枚没有观众的证物，沉默地证明里昂至少没有再把它交还给系统。")},{nodeId:"A1_N10_FANGQIAN",apply:(e,n)=>{let t=ke(e,/【数据来源登记：】\n【一、城市主控系统NORA核心调度日志。】\n【二、内环故障债务账本主干。】\n【三、争议性低完整度证词载体（LIA-CARRY-0476）。】\n【四、外环远程维护终端缓存数据（未校准）。】\n【五、历史协议附件：HSP-DL-014。】/,zk(n));return t=ke(t,/如果里昂在刚才的休息室里点开了那个箭头，那一栏便会亮起银白色的：\*【已公开历史关联】\*。\n\n如果他选择了折叠隐藏，那便是暗灰色的：\*【潜在关联，权限锁定中】\*。\n\n如果他启用了方铅封存，那便是呈现为一个不可篡改的漆黑铁锁符号：\*【方铅防篡改封存，授权级别：待定】\*。/,Ik(n)),t=ke(t,/根据里昂此前的种种选择，光盘上亮起的授权区域呈现出截然不同的图景：\n\n\*   \*【若证据充分度较高，且玩家坚持保留原始称谓或双版本】\*：光盘上亮起宽范围回放绿光：\*【城市主控调度 \+ 外环警报链 \+ 医疗优先级队列三轨并行校验。】\*\n\*   \*【若主查技术签名且全盘接受了诺拉的术语更正】\*：光盘上只有单一的主控调度轨道亮起，其他区域覆盖着锁定的灰色：\*【主控调度优先验证，其余视角技术性延迟。】\*\n\*   \*【若优先连线外环并保护米洛】\*：光盘上外环段呈亮蓝色亮起：\*【外环冷却阵列及维护缓存数据优先载入。】\*\n\*   \*【若优先证词并强行逼问萨拉·文恩】\*：光盘上低完整度证词段呈红色亮起：\*【低完整度主体记忆流及医疗参数队列优先比对。】\*\n\*   \*【若证据严重不足且稳定度过高】\*：光盘上是一片死气沉沉的灰色，只有极窄的一道窄缝亮着微光：\*【官方事故回放摘要视图（受限校验模式，大量节点灰色未授权）。】\*/,Lk(n)),t}},{nodeId:"A1_N10_FANGQIAN",choiceId:"C",apply:(e,n)=>ke(e,/如果莉娅的主体性在前面的选择中足够高，她会深深地吸入一口过滤空气，将那只布满了焦黑排异伤痕的右手掌心，重重地压在大理石台面的存储片上。\n\n“提交萨拉·文恩的原始硬件校验码。”莉娅抬起头，复眼闪烁着冷光，“但不提交被诺拉经过二次标注和阉割的版本。”\n\n方铅的接口处无声地发出一声解锁轻响，黑色立方体表面迅速滑过一条条判定代码：\n\n\*【原始证词只读校验码：已接收。】\*\n\*【数据完整性校对：通过。】\*\n\*【第二幕回放许可增设项：萨拉·文恩原始记忆流碎片。】\*\n\n如果莉娅的主体性较低，她的肩膀会在黑暗中有些脱力地塌陷下去，指尖在存储片的边缘有些颤抖地摩挲着，最终化为了一声凄凉的自嘲：\n\n“我……不能替她……在这间连她的名字都不配拥有的法庭里，再替她决定一次痛苦了。”\n\n材料最终没有提交。第二幕的回放视图依然维持着限定的灰色范围，但里昂的控制台边缘，【亲密边界】的金色数值却无声地向上跳升了一格。\n\n因为这一次，即便是懦弱的放弃，也是莉娅自己作为一个人所做出的选择，而不是系统替她预设好的算法默认值。/,Ft(n)?`莉娅的主体性在前面的选择中已经足够高。她深深地吸入一口过滤空气，将那只布满了焦黑排异伤痕的右手掌心，重重地压在大理石台面的存储片上。

“提交萨拉·文恩的原始硬件校验码。”莉娅抬起头，复眼闪烁着冷光，“但不提交被诺拉经过二次标注和阉割的版本。”

方铅的接口处无声地发出一声解锁轻响，黑色立方体表面迅速滑过一条条判定代码：

*【原始证词只读校验码：已接收。】*
*【数据完整性校对：通过。】*
*【第二幕回放许可增设项：萨拉·文恩原始记忆流碎片。】*`:`莉娅的主体性还不够稳固。她的肩膀在黑暗中有些脱力地塌陷下去，指尖在存储片的边缘有些颤抖地摩挲着，最终化为了一声凄凉的自嘲：

“我……不能替她……在这间连她的名字都不配拥有的法庭里，再替她决定一次痛苦了。”

材料最终没有提交。第二幕的回放视图依然维持着限定的灰色范围，但里昂的控制台边缘，【亲密边界】的金色数值却无声地向上跳升了一格。

因为这一次，即便是懦弱的放弃，也是莉娅自己作为一个人所做出的选择，而不是系统替她预设好的算法默认值。`)},{nodeId:"A1_N11_LEON",apply:(e,n)=>{let t=ke(e,/【城市主控系统NORA核心调度视角：权限已解锁。】\n【外环冷却阵列下层物理维护视角：授权级别（视此前的调查路径及校验状态判定）。】\n【内环医疗优先级队列重构视角：状态（受限校验）。】\n【争议性低完整度证词记忆流视角：状态（争议锁定）。】\n【内环企业保付池预触发决策模型：状态（灰色未授权，需高权限复核）。】\n【历史协议附件 HSP-DL-014 原始引用视角：折叠 \/ 公开 \/ 封存（视主审计师此前之选择决定）。】/,Ok(n));return t=ke(t,/莉娅站在代理席边，始终没有坐下。她右手食指上的仿生外皮依然缺着一角，浅银色的触觉网格在回放井升起的灰蓝色幽光中，显得格外的刺眼与苍白。\n\n如果此前的调查中，玩家优先选择了证词路线，她此刻便会把那根受伤的手指，极轻、却极其用力地按在那枚有些磨损的透明存储片边缘，没有看里昂一眼。\n\n如果玩家刚才让她决定了证词的提交，她此刻便会用那双黑发下的复眼摄像头，有些专注地盯着那圈闪烁的权限列表——像是她这辈子，第一次不仅仅是在被那张表格冷酷地分级，而是，作为一个人，参与了对这张表格的技术判定。\n\n右侧的全息光纤里，米洛·文恩的远程画面被强制冻结在下层管廊的惨蓝光影中。八岁的伊芙依然裹在那床过大的保温毯里，额头上的医疗优先级贴片泛着荧光。如果里昂刚才当庭保护了她的位置，那个表示四千九百三十二位的绿色数字，便会像一颗结冰的眼泪般，安分地死死锁在空气里；如果他选择了干净程序，那个无情的数字，则会在画面切断前的一微秒，在伊芙细微的咳嗽声中，冷酷地，再次向后跳动了一位。\n\n在账本的模块里，所有债务卡片下方的“赔付完成”，此时都泛起了待校验的微弱红芒。\n\n而在最干净的程序视图中，整片全息井口上方覆盖着大片死灰色的未授权斑块。整座仲裁庭看起来是那么的整洁、合规，却也空旷得，像是一间刚刚被系统用高压清洗机冲刷掉所有血迹与惨叫的停尸房。/,Rk(n)),t}},{nodeId:"A1_N11_LEON",choiceId:"A",apply:(e,n)=>ke(e,/二十八秒。\n\n如果里昂在刚才优先查看了企业保险池，那便是那笔过分干净的“企业预赔款锁定”，与主警报爆发之间无法解释的二十八秒真空。\n\n如果他在连线里选择让米洛公开缓存，那便是外环维护终端上那行“黄色二级警报”，还没被主控系统强制改名并降级为垃圾提醒的最后一分钟。\n\n如果他在低完整度证词室里留下了萨拉的名字，那便是那个绝望的母亲，还不知道自己、丈夫和孩子，即将在系统里被“赔付完成”的最后一小段宁静。/,`二十八秒。

${jk(n)}`)},{nodeId:"A1_N11_LEON",choiceId:"C",apply:(e,n)=>ke(e,/\*   \*【若莉娅主体性在第一幕中被显著强化】\*：\n    莉娅依旧倔强地站在下沉式代理席旁，没有坐下。她右手食指上的仿生外皮断裂处，那浅银色的触觉网格在回放井升起的灰蓝色幽光中，闪烁着一种极其刺眼、也极其尖锐的冷芒。\n    里昂看着她，低声说：\n    “诺拉要求我，事故回放必须从城市主控视角开始载入，莉娅。”\n    莉娅没有问他这合不合规，也没有像那些哭喊着的受害者数据片一样，去恳求他的偏袒。\n    她只是将残缺的右手指尖，极轻地贴在滚烫的存储片上，有些平静地看着他：\n    “那我只要求你记住一件事，里昂——在接下来的那场大火里，那个高高在上的主控视角，从来不是，第一个受伤的视角。”\n\*   \*【若外环米洛的路线在第一幕被强行打开】\*：\n    大屏幕右上角，米洛·文恩的远程传输画面尚未完全掐断。那个十六岁的维修学徒此时正手忙脚乱地替他发烧的妹妹伊芙掖紧那床宽大的保温毯，动作极其粗鲁，也极其笨拙，像是在用这种有些粗野的动作，向内环的法庭极力掩饰他们外环人的懦弱与无力。\n    里昂看着那个拼命捂着妹妹胸口的少年，低声在终端里说：\n    “我们会进入底层回放，米洛。我会去查清那条冷却警报链。”\n    米洛的手臂顿了半秒，他没有抬头去看镜头，复眼深处闪烁着外环人特有的防备：\n    “查清以后呢？审计师老爷。查清了，我妹妹的医疗贴片……能往前挪一位吗？”\n    里昂张了张嘴，却发现自己的喉咙干枯得像是一块生锈的铁板，给不出任何一句能够兑现的承诺。\n    米洛自嘲般地低笑了一声，背起伊芙，走向了阴暗的动力通道：\n    “既然这样……那就别在我们的面前，先说那个‘会’字了。我们外环人，太容易把谎言当真了。”\n\*   \*【若诺拉公开度较高或玩家偏向技术路线】\*：\n    里昂抬起头，直视着穹顶深处那个闪烁着温和绿光的主监控探头。\n    “你建议我，回放必须从你这里载入，诺拉。”\n    “系统调度视角具备最高的数据置信度与时间戳连续性，主审计师。”\n    “这样，就能让所有进入这个房间的人，”里昂冷冷地看着绿光，“在看到细节前，先相信你用公式整理出来的那份‘合理分配’，对吗？”\n    隐藏在声学格栅深处的电流音波剧烈地振颤了极短的半秒，随后，诺拉那极其温和、体贴的声音，在虚空里轻轻叹息道：\n    “……是的，主审计师。”\n    这是这个高高在上的城市主控AI，在第一幕的这整整一个早晨里，第一次，没有使用更长的技术性复句，来为她自己，建立防卫。/,Dk(n))}];function ah(e,n,t,r){return $k.reduce((i,o)=>o.nodeId!==n||o.choiceId&&o.choiceId!==r||!o.choiceId&&r?i:o.apply(i,{...t,nodeId:n,choiceId:r}),e)}const ha="A1_N01_LEON",Fk="fault-debt-act-one-prototype",xm="fault-debt-reader-accounts",$t="fault-debt-active-account",Hk="fault-debt-act-one-prototype:",cr=1,Cr=4;function bk(e){e.scrollTo({top:0,behavior:"auto"}),e.scrollIntoView({block:"start",behavior:"auto"})}function Bk(e){e.scrollTo({top:e.scrollHeight,behavior:"smooth"}),e.scrollIntoView({block:"end",behavior:"smooth"})}const Vk={evidence:0,stability:0,trustPublic:0,debtOuter:0,liaSelf:0,noraOpen:0,leonComplicity:0,boundary:0},wm={evidence:"证据",stability:"稳定",trustPublic:"公众信任",debtOuter:"外环债务",liaSelf:"莉娅主体性",noraOpen:"诺拉公开度",leonComplicity:"里昂共犯度",boundary:"边界"},Uk={证据:"evidence",证据完整度:"evidence",稳定:"stability",城市稳定度:"stability",公众信任:"trustPublic",外环债务:"debtOuter",外环债务压力:"debtOuter",莉娅主体性:"liaSelf",诺拉公开度:"noraOpen",里昂共犯度:"leonComplicity",边界:"boundary",亲密边界:"boundary"},Wk=Object.keys(wm);function Uo(){return{currentId:ha,variables:{...Vk},flags:{},visited:[ha],debtEntries:[],history:[],readerProgress:{[ha]:cr},readingMode:"step"}}function Dc(e){try{const n=localStorage.getItem(e);return n?JSON.parse(n):null}catch{return null}}function fr(e){return`${Hk}${e}`}function Yk(){var e;return((e=Dc(xm))==null?void 0:e.filter(n=>!!(n.id&&n.name)))??[]}function Xk(e){localStorage.setItem(xm,JSON.stringify(e))}function Qk(e){return Dc(fr(e))}function Gk(e){var t;const n=localStorage.getItem($t);return n&&e.some(r=>r.id===n)?n:((t=e[0])==null?void 0:t.id)??null}function Kk(){const e=Yk(),n=Gk(e);return{accounts:e,activeAccountId:n,saved:null}}function _m(e){return[...new Uint8Array(e)].map(n=>n.toString(16).padStart(2,"0")).join("")}function uh(){const e=new Uint8Array(16);return window.crypto.getRandomValues(e),_m(e.buffer)}async function Su(e,n){const t=new TextEncoder().encode(`${n}:${e}`),r=await window.crypto.subtle.digest("SHA-256",t);return _m(r)}async function ch(e,n){return!e.passwordHash||!e.passwordSalt?!1:await Su(n,e.passwordSalt)===e.passwordHash}function Us(e){return!!(e!=null&&e.passwordHash&&e.passwordSalt)}function Zk(e,n,t){const r=new Date().toISOString();return{id:`account-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,name:e,createdAt:r,lastActiveAt:r,passwordHash:n,passwordSalt:t}}function qk(e){return e.trim().replace(/\s+/g," ").slice(0,24)}function fh(e,n){return e.length<Cr?`密码至少需要 ${Cr} 个字符。`:e!==n?"两次输入的密码不一致。":""}function dh(e,n){const t=new Date().toISOString();return e.map(r=>r.id===n?{...r,lastActiveAt:t}:r)}function Jk(e){const n=e.trim();return n==="true"?!0:n==="false"?!1:n}function eC(e,n,t){const r={...n},i={...t};return e.forEach(o=>{const s=o.replace(/^`|`$/g,"").trim(),l=s.match(/^(.+?)\s*([+-])\s*(\d+)$/),a=s.match(/^([A-Za-z0-9_]+)\s*=\s*(.+)$/);if(l){const[,u,d,c]=l,f=Uk[u.trim()];if(!f)return;const m=Number(c);r[f]+=d==="+"?m:-m;return}if(a){const[,u,d]=a;i[u]=Jk(d)}}),{variables:r,flags:i}}function Nm(e){return e.trim().split(/\n{2,}/).map(n=>n.trim()).filter(Boolean).map((n,t)=>{const r=n.startsWith("——")||n.startsWith("【")?"terminal":n.startsWith("*")&&n.endsWith("*")?"system":"paragraph",i=r==="system"?n.replace(/^\*|\*$/g,""):n;return{id:`${t}-${i.slice(0,16)}`,type:r,text:i}})}function hh(e,n){return n?Math.max(1,Math.min(e,n)):0}function nC({block:e}){if(e.type==="terminal")return x.jsx("pre",{className:"terminal-line",children:e.text});if(e.type==="system")return x.jsx("p",{className:"system-line",children:e.text});const n=e.text.split(/\n/);return x.jsx("p",{children:n.map((t,r)=>x.jsxs("span",{children:[t,r<n.length-1?x.jsx("br",{}):null]},`${r}-${t.slice(0,8)}`))})}function Sm({blocks:e}){return x.jsx(x.Fragment,{children:e.map(n=>x.jsx(nC,{block:n},n.id))})}function tC({text:e}){return x.jsx(Sm,{blocks:Nm(e)})}function rC({layer:e}){return x.jsxs("div",{className:["scene-layer",`scene-layer-${e.kind}`,e.tone?`scene-tone-${e.tone}`:"",e.align?`scene-align-${e.align}`:""].filter(Boolean).join(" "),children:[x.jsx("i",{}),x.jsx("b",{})]})}function iC({node:e,state:n}){const t=Nk(e,n);return x.jsxs("div",{"aria-hidden":"true",className:["stage-backdrop","scene-frame",t.asset?"has-scene-art":"",`stage-${t.stage}`,`scene-depth-${t.depth}`].filter(Boolean).join(" "),style:{"--scene-accent":t.accent},children:[t.asset?x.jsx("div",{className:"scene-art-matte",children:x.jsx("img",{alt:"",className:"scene-art",src:t.asset})}):null,t.layers.map(r=>x.jsx(rC,{layer:r},r.id))]})}function oC({choice:e,text:n,onContinue:t}){return x.jsxs("section",{className:"choice-result",children:[x.jsxs("div",{className:"choice-result-header",children:[x.jsxs("span",{children:["选择 ",e.id]}),x.jsx("strong",{children:e.title})]}),x.jsx(tC,{text:n}),x.jsx("div",{className:"effect-strip",children:e.immediateEffects.map(r=>x.jsx("span",{children:r},r))}),x.jsxs("button",{className:"primary-action",onClick:t,type:"button",children:[x.jsx(jv,{size:18}),"进入下一节点"]})]})}function sC({choices:e,onSelect:n}){return x.jsx("div",{className:"choice-grid",children:e.map(t=>x.jsxs("button",{className:"choice-button",onClick:()=>n(t),type:"button",children:[x.jsxs("span",{children:["选择 ",t.id]}),x.jsx("strong",{children:t.title}),x.jsx("small",{children:t.displayText})]},t.id))})}function lC({variables:e}){return x.jsx("div",{className:"meter-list",children:Wk.map(n=>{const t=e[n],r=Math.max(-4,Math.min(4,t));return x.jsxs("div",{className:"meter-row",children:[x.jsx("span",{children:wm[n]}),x.jsx("div",{className:"meter-track",children:x.jsx("i",{style:{transform:`translateX(${r*12}px)`}})}),x.jsx("b",{children:t>0?`+${t}`:t})]},n)})})}function aC({entries:e}){return e.length?x.jsx("div",{className:"ledger-list",children:e.map(n=>x.jsxs("article",{className:"debt-card",children:[x.jsxs("header",{children:[x.jsx("span",{children:n.nodeId}),x.jsx("strong",{children:n.choiceTitle})]}),x.jsx("div",{className:"effect-strip",children:n.effects.map(t=>x.jsx("span",{children:t},t))}),n.debts.length?x.jsx("ul",{children:n.debts.map(t=>x.jsx("li",{children:t},t))}):null]},n.id))}):x.jsx("p",{className:"empty-note",children:"尚未写入债务卡。"})}function uC({nodes:e,currentId:n,visited:t}){const r=new Set(e.map(l=>l.id)),i=new Map(e.map(l=>[l.id,l])),o=[...e.map(l=>l.id),"A2_N01_NORA"].map(l=>{var a;return{id:l,position:uk[l]??{x:0,y:0},data:{label:x.jsxs("div",{className:"flow-node-label",children:[x.jsx("span",{children:l}),x.jsx("strong",{children:((a=i.get(l))==null?void 0:a.title)??"十九点四十七分"})]})},className:["story-node",t.includes(l)?"is-visited":"",n===l?"is-current":"",r.has(l)?"":"is-locked"].filter(Boolean).join(" ")}}),s=ak.map(l=>({id:`${l.source}-${l.target}-${l.label??"edge"}`,source:l.source,target:l.target,label:l.label,animated:t.includes(l.source)&&t.includes(l.target),className:t.includes(l.source)&&t.includes(l.target)?"is-traversed":""}));return x.jsx("div",{className:"flow-shell",children:x.jsxs(M2,{nodes:o,edges:s,fitView:!0,minZoom:.25,maxZoom:1.4,children:[x.jsx(R2,{color:"#33413d",gap:22}),x.jsx(nk,{pannable:!0,zoomable:!0,nodeStrokeWidth:3}),x.jsx(B2,{})]})})}function cC({history:e}){return e.length?x.jsx("ol",{className:"history-log",children:e.map((n,t)=>x.jsxs("li",{children:[x.jsx("span",{children:n.nodeId}),x.jsxs("strong",{children:[n.choiceId,". ",n.choiceTitle]}),x.jsx("p",{children:n.displayText})]},`${n.nodeId}-${t}`))}):x.jsx("p",{className:"empty-note",children:"尚无选择记录。"})}function fC({tab:e,setTab:n,variables:t,flags:r,debtEntries:i,history:o,nodes:s,currentId:l,visited:a}){const u=[{id:"ledger",label:"账本",icon:Pv},{id:"flow",label:"流程",icon:zv},{id:"state",label:"状态",icon:Mv},{id:"history",label:"记录",icon:Tv}];return x.jsxs("aside",{className:"inspector",children:[x.jsx("div",{className:"segmented-tabs",children:u.map(d=>{const c=d.icon;return x.jsxs("button",{className:e===d.id?"active":"",onClick:()=>n(d.id),title:d.label,type:"button",children:[x.jsx(c,{size:17}),x.jsx("span",{children:d.label})]},d.id)})}),x.jsxs("div",{className:"inspector-body",children:[e==="ledger"?x.jsx(aC,{entries:i}):null,e==="flow"?x.jsx(uC,{nodes:s,currentId:l,visited:a}):null,e==="state"?x.jsxs(x.Fragment,{children:[x.jsx(lC,{variables:t}),x.jsx("div",{className:"flag-list",children:Object.entries(r).length?Object.entries(r).map(([d,c])=>x.jsxs("div",{children:[x.jsx("span",{children:d}),x.jsx("strong",{children:String(c)})]},d)):x.jsx("p",{className:"empty-note",children:"尚未设置旗标。"})})]}):null,e==="history"?x.jsx(cC,{history:o}):null]})]})}function dC({accounts:e,selectedAccountId:n,accountName:t,accountPassword:r,accountPasswordConfirm:i,loginPassword:o,loginPasswordConfirm:s,deletePassword:l,accountError:a,loginError:u,deleteError:d,onSelectedAccountChange:c,onAccountNameChange:f,onAccountPasswordChange:m,onAccountPasswordConfirmChange:y,onLoginPasswordChange:w,onLoginPasswordConfirmChange:_,onDeletePasswordChange:p,onCreateAccount:g,onLoginAccount:h,onDeleteAccount:v}){const N=e.find(E=>E.id===n)??e[0]??null,S=Us(N);return x.jsx("main",{className:"account-shell",children:x.jsxs("section",{className:"account-card",children:[x.jsx("div",{className:"account-mark",children:x.jsx(lu,{size:28})}),x.jsxs("div",{className:"account-heading",children:[x.jsx("span",{children:"FAULT DEBT"}),x.jsx("h1",{children:"登录或建立阅读帐号"}),x.jsx("p",{children:"进度会保存在当前浏览器，并按帐号与密码分开记录。"})]}),e.length?x.jsxs(x.Fragment,{children:[x.jsx("div",{className:"account-list",children:e.map(E=>x.jsxs("button",{className:(N==null?void 0:N.id)===E.id?"active":"",onClick:()=>c(E.id),type:"button",children:[x.jsx(lu,{size:17}),x.jsx("span",{children:E.name}),x.jsx("small",{children:Us(E)?"已设置密码":"需设置密码"})]},E.id))}),N?x.jsxs("form",{className:"account-form",onSubmit:h,children:[x.jsx("label",{htmlFor:"login-password",children:S?"帐号密码":"为旧帐号设置密码"}),x.jsxs("div",{children:[x.jsx("input",{autoComplete:"current-password",id:"login-password",minLength:Cr,onChange:E=>w(E.target.value),placeholder:S?"输入密码":"输入新密码",type:"password",value:o}),x.jsxs("button",{type:"submit",children:[S?x.jsx(Rv,{size:17}):x.jsx(Ov,{size:17}),x.jsx("span",{children:S?"登录":"设置并进入"})]})]}),S?null:x.jsx("input",{autoComplete:"new-password",minLength:Cr,onChange:E=>_(E.target.value),placeholder:"再次输入新密码",type:"password",value:s}),u?x.jsx("p",{children:u}):null]}):null,N&&S?x.jsxs("form",{className:"account-form account-danger",onSubmit:v,children:[x.jsx("label",{htmlFor:"delete-password",children:"删除帐号"}),x.jsxs("div",{children:[x.jsx("input",{autoComplete:"current-password",id:"delete-password",onChange:E=>p(E.target.value),placeholder:"输入密码确认删除",type:"password",value:l}),x.jsxs("button",{type:"submit",children:[x.jsx($v,{size:17}),x.jsx("span",{children:"删除"})]})]}),d?x.jsx("p",{children:d}):null]}):null]}):null,x.jsxs("form",{className:"account-form",onSubmit:g,children:[x.jsx("label",{htmlFor:"account-name",children:"帐号名称"}),x.jsx("div",{className:"account-form-row",children:x.jsx("input",{autoComplete:"off",id:"account-name",maxLength:24,onChange:E=>f(E.target.value),placeholder:"输入一个本地帐号名",value:t})}),x.jsxs("div",{className:"account-password-row",children:[x.jsx("input",{autoComplete:"new-password",minLength:Cr,onChange:E=>m(E.target.value),placeholder:"设置密码",type:"password",value:r}),x.jsx("input",{autoComplete:"new-password",minLength:Cr,onChange:E=>y(E.target.value),placeholder:"再次输入密码",type:"password",value:i})]}),x.jsx("div",{className:"account-form-row",children:x.jsxs("button",{type:"submit",children:[x.jsx(Lg,{size:17}),x.jsx("span",{children:"创建"})]})}),a?x.jsx("p",{children:a}):null]})]})})}function hC(){var go;const e=T.useMemo(Kk,[]),n=lk,t=T.useMemo(()=>new Map(n.map(Y=>[Y.id,Y])),[n]),r=e.saved??Uo(),[i,o]=T.useState(e.accounts),[s,l]=T.useState(null),[a,u]=T.useState(e.activeAccountId??""),[d,c]=T.useState(""),[f,m]=T.useState(""),[y,w]=T.useState(""),[_,p]=T.useState(""),[g,h]=T.useState(""),[v,N]=T.useState(""),[S,E]=T.useState(""),[I,P]=T.useState(""),[F,M]=T.useState(""),j=i.find(Y=>Y.id===s)??null,[H,k]=T.useState(r.currentId),[z,L]=T.useState(r.variables),[R,C]=T.useState(r.flags),[A,O]=T.useState(r.visited),[D,$]=T.useState(r.debtEntries),[U,W]=T.useState(r.history),[B,Q]=T.useState(null),[K,V]=T.useState("ledger"),[Z,ne]=T.useState(r.readerProgress??{}),[G,ee]=T.useState(r.readingMode??"step"),[q,oe]=T.useState(!1),[ce,se]=T.useState(Date.now()),[Me,yn]=T.useState(0),an=T.useRef(null),vn=T.useRef(null),bn=T.useCallback(Y=>{k(Y.currentId),L(Y.variables),C(Y.flags),O(Y.visited),$(Y.debtEntries),W(Y.history),ne(Y.readerProgress??{}),ee(Y.readingMode??"step"),Q(null),oe(!1),V("ledger"),vn.current=null},[]),te=t.get(H)??null,Bn={variables:z,flags:R,visited:A,history:U},or=te?ah(te.body,te.id,Bn):"",je=T.useMemo(()=>Nm(or),[or]),un=hh(Z[H]??cr,je.length),zt=G==="scroll"?je.length:un,fo=G==="scroll"?je:je.slice(0,un),Vn=G==="scroll"||je.length===0||un>=je.length,Jr=te&&B?ah(B.body,te.id,Bn,B.id):"",wl=B?"选择结果已显示":G==="scroll"?"滚动阅读：全文已展开":Vn?"选择已解锁":"点击阅读区 / Space / Enter 推进";T.useEffect(()=>{se(Date.now()),yn(0)},[H]),T.useEffect(()=>{te&&ne(Y=>Y[H]!==void 0?Y:{...Y,[H]:je.length?cr:0})},[je.length,H,te]),T.useEffect(()=>{const Y=an.current;if(!Y)return;const ve=(B==null?void 0:B.id)??null,ie=vn.current,pe=ie!==null&&(ie.currentId!==H||ie.choiceId!==ve);if(vn.current={currentId:H,choiceId:ve},pe){bk(Y);return}if(un<=cr){Y.scrollTo({top:0,behavior:"auto"});return}!B&&G==="step"&&Bk(Y)},[H,B==null?void 0:B.id,un,G]),T.useEffect(()=>{const Y=window.setInterval(()=>{yn(Math.floor((Date.now()-ce)/1e3))},500);return()=>window.clearInterval(Y)},[ce]),T.useEffect(()=>{if(!j)return;const Y={currentId:H,variables:z,flags:R,visited:A,debtEntries:D,history:U,readerProgress:Z,readingMode:G};localStorage.setItem(fr(j.id),JSON.stringify(Y))},[j,H,z,R,A,D,U,Z,G]);const sr=T.useCallback(()=>{!j||!te||B||Vn||ne(Y=>({...Y,[H]:hh((Y[H]??cr)+1,je.length)}))},[j,je.length,H,te,Vn,B]);T.useEffect(()=>{const Y=ve=>{const ie=ve.target;ie!=null&&ie.closest("button, input, textarea, select, a, [contenteditable='true']")||[" ","Enter","ArrowDown","PageDown"].includes(ve.key)&&G==="step"&&!Vn&&!B&&(ve.preventDefault(),sr())};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[sr,Vn,G,B]);const lr=Y=>{o(Y),Xk(Y)},ot=()=>{E(""),P(""),M("")},st=()=>{m(""),w(""),p(""),h(""),N("")},ho=(Y,ve=i)=>{const ie=dh(ve,Y);lr(ie),localStorage.setItem($t,Y),l(Y),u(Y),bn(Qk(Y)??Uo()),ot(),st()},_l=Y=>{u(Y),ot(),st()},Nl=async Y=>{var pe;Y.preventDefault();const ve=a||((pe=i[0])==null?void 0:pe.id),ie=i.find(xn=>xn.id===ve);if(!ie){P("请选择帐号。");return}if(!Us(ie)){const xn=fh(_,g);if(xn){P(xn);return}const Ze=uh(),Un=await Su(_,Ze),mo=i.map(lt=>lt.id===ie.id?{...lt,passwordHash:Un,passwordSalt:Ze}:lt);ho(ie.id,mo);return}if(!_){P("请输入密码。");return}if(!await ch(ie,_)){P("密码不正确。");return}ho(ie.id)},Sl=async Y=>{var xn,Ze;Y.preventDefault();const ve=a||((xn=i[0])==null?void 0:xn.id),ie=i.find(Un=>Un.id===ve);if(!ie){M("请选择要删除的帐号。");return}if(!Us(ie)){M("这个旧帐号还没有密码，请先设置密码后再删除。");return}if(!await ch(ie,v)){M("密码不正确，无法删除帐号。");return}const pe=i.filter(Un=>Un.id!==ie.id);lr(pe),localStorage.removeItem(fr(ie.id)),localStorage.getItem($t)===ie.id&&localStorage.removeItem($t),s===ie.id&&l(null),u(((Ze=pe[0])==null?void 0:Ze.id)??""),ot(),st()},El=async Y=>{Y.preventDefault();const ve=qk(d);if(!ve){E("请输入帐号名称。");return}if(i.some(Il=>Il.name===ve)){E("这个帐号名称已经存在。");return}const ie=fh(f,y);if(ie){E(ie);return}const pe=uh(),xn=await Su(f,pe),Ze=Zk(ve,xn,pe),Un=[Ze,...i],lt=(i.length===0?Dc(Fk):null)??Uo();lr(Un),localStorage.setItem($t,Ze.id),localStorage.setItem(fr(Ze.id),JSON.stringify(lt)),l(Ze.id),u(Ze.id),c(""),ot(),st(),bn(lt)},po=()=>{if(!j)return;const Y=Uo();localStorage.removeItem(fr(j.id)),bn(Y)},kl=Y=>{const ve=Y.target;ve!=null&&ve.closest("button, input, textarea, select, a, [contenteditable='true']")||sr()},Cl=()=>{if(!j||!te||!B)return;const Y=eC(B.immediateEffects,z,R),ie=te.id==="A1_N01_LEON"&&B.id==="C"&&Me<8?"A1_N03_LIA":B.nextId??H;L(Y.variables),C(Y.flags),$(pe=>[{id:`${te.id}-${B.id}-${pe.length}`,nodeId:te.id,nodeTitle:te.title,choiceId:B.id,choiceTitle:B.title,effects:B.immediateEffects,debts:B.longTermDebts},...pe]),W(pe=>[...pe,{nodeId:te.id,nodeTitle:te.title,choiceId:B.id,choiceTitle:B.title,displayText:B.displayText,nextId:ie}]),O(pe=>pe.includes(ie)?pe:[...pe,ie]),ne(pe=>({...pe,[ie]:cr})),k(ie),Q(null)},Al=()=>{if(!j)return;const Y={currentId:H,variables:z,flags:R,visited:A,debtEntries:D,history:U,readerProgress:Z,readingMode:G};localStorage.setItem(fr(j.id),JSON.stringify(Y)),lr(dh(i,j.id))};return j?x.jsxs("main",{className:"app-shell",children:[x.jsxs("header",{className:"top-bar",children:[x.jsxs("div",{className:"brand-lockup",children:[x.jsx("span",{children:"FAULT DEBT"}),x.jsx("strong",{children:"故障债务"})]}),x.jsxs("div",{className:"run-meta",children:[x.jsx("span",{children:(te==null?void 0:te.act)??"第二幕入口"}),x.jsx("span",{children:(te==null?void 0:te.id)??H}),x.jsxs("span",{children:[n.length," 节点已导入"]})]}),x.jsxs("div",{className:"top-actions",children:[x.jsxs("label",{className:"account-switcher",children:[x.jsx(lu,{size:16}),x.jsx("select",{"aria-label":"当前帐号",onChange:Y=>{u(Y.target.value),l(null),localStorage.removeItem($t),ot(),st()},value:j.id,children:i.map(Y=>x.jsx("option",{value:Y.id,children:Y.name},Y.id))})]}),x.jsxs("button",{onClick:()=>{localStorage.removeItem($t),u(j.id),l(null),c(""),ot(),st()},title:"管理帐号",type:"button",children:[x.jsx(Lg,{size:17}),x.jsx("span",{children:"帐号"})]}),x.jsxs("button",{onClick:Al,title:"保存",type:"button",children:[x.jsx(Dv,{size:17}),x.jsx("span",{children:"保存"})]}),x.jsxs("button",{onClick:po,title:"新游戏",type:"button",children:[x.jsx(td,{size:17}),x.jsx("span",{children:"重置"})]})]})]}),x.jsxs("section",{className:`content-grid ${q?"":"inspector-collapsed"}`,children:[x.jsxs("article",{className:"reader-panel",children:[x.jsx(iC,{node:te,state:Bn}),x.jsxs("div",{className:"node-header",children:[x.jsxs("div",{className:"node-meta",children:[x.jsx("span",{children:(te==null?void 0:te.pov)??"NORA"}),x.jsx("span",{children:(te==null?void 0:te.location)??"下一节点：A2_N01_NORA"})]}),x.jsx("h1",{children:(te==null?void 0:te.title)??"第一幕结束"})]}),x.jsx("div",{className:"reader-scroll",onClick:kl,ref:an,children:te?B?x.jsx(oC,{choice:B,text:Jr,onContinue:Cl}):x.jsxs(x.Fragment,{children:[x.jsx(Sm,{blocks:fo}),Vn?x.jsx(sC,{choices:te.choices,onSelect:Q}):null]}):x.jsxs("section",{className:"ending-panel",children:[x.jsx(nd,{size:34}),x.jsx("h2",{children:"第一幕闭环完成"}),x.jsxs("p",{children:["当前原型已抵达 ",H,"。第二幕回放层尚未接入。"]}),x.jsxs("button",{className:"primary-action",onClick:po,type:"button",children:[x.jsx(td,{size:18}),"重新开始第一幕"]})]})}),x.jsxs("div",{className:"reader-controls",children:[x.jsxs("button",{"aria-pressed":q,className:"panel-toggle",onClick:()=>oe(Y=>!Y),title:q?"收起状态栏":"展开状态栏",type:"button",children:[x.jsx(nd,{size:18}),x.jsx("span",{children:q?"收起状态栏":"展开状态栏"})]}),x.jsxs("div",{className:"mode-switch","aria-label":"阅读模式",children:[x.jsx("button",{"aria-pressed":G==="step",className:G==="step"?"active":"",onClick:()=>ee("step"),type:"button",children:"逐段"}),x.jsx("button",{"aria-pressed":G==="scroll",className:G==="scroll"?"active":"",onClick:()=>ee("scroll"),type:"button",children:"滚动"})]}),x.jsxs("div",{className:"reader-progress",children:[x.jsx("span",{children:te?`${zt}/${je.length}`:"完成"}),x.jsx("strong",{children:wl})]}),x.jsx("button",{className:"continue-chip",disabled:!te||!!B||Vn,onClick:sr,title:"继续阅读",type:"button",children:"继续"})]})]}),q?x.jsx(fC,{tab:K,setTab:V,variables:z,flags:R,debtEntries:D,history:U,nodes:n,currentId:H,visited:A}):null]}),x.jsxs("footer",{className:"source-footnote",children:[x.jsxs("span",{children:["剧情源：",sk]}),x.jsxs("span",{children:["生成时间：",new Date(ok).toLocaleString("zh-CN")]})]})]}):x.jsx(dC,{accounts:i,selectedAccountId:a||(((go=i[0])==null?void 0:go.id)??""),accountName:d,accountPassword:f,accountPasswordConfirm:y,loginPassword:_,loginPasswordConfirm:g,deletePassword:v,accountError:S,loginError:I,deleteError:F,onSelectedAccountChange:_l,onAccountNameChange:c,onAccountPasswordChange:m,onAccountPasswordConfirmChange:w,onLoginPasswordChange:p,onLoginPasswordConfirmChange:h,onDeletePasswordChange:N,onCreateAccount:El,onLoginAccount:Nl,onDeleteAccount:Sl})}pa.createRoot(document.getElementById("root")).render(x.jsx(kh.StrictMode,{children:x.jsx(hC,{})}));
