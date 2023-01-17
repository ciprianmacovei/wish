import{X as He,T as Me,_ as qe,a as E,A as $e,H as Ie}from"./q-26d69490.js";import{i as Je}from"./q-5ec52f44.js";import{u as ze}from"./q-30dfcba3.js";import{g as We}from"./q-4c03ca81.js";const Ve=()=>{const e=He(ze),t=Je(),n=Me(()=>qe(()=>Promise.resolve().then(()=>Un),void 0),"s_bWDHOmSbAw4",[t,e]);return E("div",{class:"h-[100vh] w-[100vw]",children:E("section",{class:"w-full h-full flex flex-col justify-center items-center",children:E("section",{class:"w-[450px] bg-pink-500 rounded-2xl p-4 text-white flex flex-col items-center gap-4",children:[E("article",{children:E("p",{class:"font-bold text-center text-[20px] px-4",children:"Login to your account"})}),E("section",{class:"flex flex-col gap-4",children:[E("article",{children:[E("p",{class:"font-bold text-left text-[12px]",children:"Account Name"}),E("input",{class:"min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black",type:"text"})]}),E("article",{children:[E("p",{class:"font-bold text-left text-[12px]",children:"Password"}),E("input",{class:"min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black",type:"text"})]}),E("article",{children:[E("p",{class:"font-bold text-left text-[12px]",children:"Email"}),E("input",{class:"min-w-[200px] md:w-[200px] lg:w-[300px] h-10 px-4 py-[6px] border-2 border-solid border-primary rounded-md focus:border-alternate focus:outline-none flex text-black",type:"text"})]})]}),E("button",{onClick$:n,class:"rounded-[50px] w-[150px] h-[40px] bg-alternate hover:scale-110 hover:border-solid hover:border-2 hover:border-grey-500 hover:font-bold duration-100",children:"Login"})]})})})};var H={},Ke={get exports(){return H},set exports(e){H=e}};const Xe={},Ge=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"})),Z=We(Ge),Qe="dotenv",Ye="16.0.3",Ze="Loads environment variables from .env file",et="lib/main.js",tt="lib/main.d.ts",nt={".":{require:"./lib/main.js",types:"./lib/main.d.ts",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},rt={"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec",prerelease:"npm test",release:"standard-version"},st={type:"git",url:"git://github.com/motdotla/dotenv.git"},ot=["dotenv","env",".env","environment","variables","config","settings"],it="README.md",at="BSD-2-Clause",ct={"@types/node":"^17.0.9",decache:"^4.6.1",dtslint:"^3.7.0",sinon:"^12.0.1",standard:"^16.0.4","standard-markdown":"^7.1.0","standard-version":"^9.3.2",tap:"^15.1.6",tar:"^6.1.11",typescript:"^4.5.4"},lt={node:">=12"},ut={name:Qe,version:Ye,description:Ze,main:et,types:tt,exports:nt,scripts:rt,repository:st,keywords:ot,readmeFilename:it,license:at,devDependencies:ct,engines:lt},ft=Z,we=Z,dt=Z,pt=ut,ht=pt.version,mt=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function yt(e){const t={};let n=e.toString();n=n.replace(/\r\n?/mg,`
`);let r;for(;(r=mt.exec(n))!=null;){const s=r[1];let o=r[2]||"";o=o.trim();const i=o[0];o=o.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),i==='"'&&(o=o.replace(/\\n/g,`
`),o=o.replace(/\\r/g,"\r")),t[s]=o}return t}function W(e){console.log(`[dotenv@${ht}][DEBUG] ${e}`)}function bt(e){return e[0]==="~"?we.join(dt.homedir(),e.slice(1)):e}function wt(e){let t=we.resolve(process.cwd(),".env"),n="utf8";const r=Boolean(e&&e.debug),s=Boolean(e&&e.override);e&&(e.path!=null&&(t=bt(e.path)),e.encoding!=null&&(n=e.encoding));try{const o=q.parse(ft.readFileSync(t,{encoding:n}));return Object.keys(o).forEach(function(i){Object.prototype.hasOwnProperty.call(process.env,i)?(s===!0&&(process.env[i]=o[i]),r&&W(s===!0?`"${i}" is already defined in \`process.env\` and WAS overwritten`:`"${i}" is already defined in \`process.env\` and was NOT overwritten`)):process.env[i]=o[i]}),{parsed:o}}catch(o){return r&&W(`Failed to load ${t} ${o.message}`),{error:o}}}const q={config:wt,parse:yt};var Et=H.config=q.config;H.parse=q.parse;Ke.exports=q;function Ee(e,t){return function(){return e.apply(t,arguments)}}const{toString:ge}=Object.prototype,{getPrototypeOf:ee}=Object,te=(e=>t=>{const n=ge.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>te(t)===e),$=e=>t=>typeof t===e,{isArray:_}=Array,j=$("undefined");function gt(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&T(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Se=R("ArrayBuffer");function St(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Se(e.buffer),t}const xt=$("string"),T=$("function"),xe=$("number"),ne=e=>e!==null&&typeof e=="object",Ot=e=>e===!0||e===!1,L=e=>{if(te(e)!=="object")return!1;const t=ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=R("Date"),At=R("File"),Tt=R("Blob"),Nt=R("FileList"),Pt=e=>ne(e)&&T(e.pipe),_t=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ge.call(e)===t||T(e.toString)&&e.toString()===t)},Ct=R("URLSearchParams"),jt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),_(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function Oe(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const Re=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ae=e=>!j(e)&&e!==Re;function X(){const{caseless:e}=Ae(this)&&this||{},t={},n=(r,s)=>{const o=e&&Oe(t,s)||s;L(t[o])&&L(r)?t[o]=X(t[o],r):L(r)?t[o]=X({},r):_(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Dt=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,o)=>{n&&T(s)?e[o]=Ee(s,n):e[o]=s},{allOwnKeys:r}),e),Ft=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Bt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Lt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ut=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},vt=e=>{if(!e)return null;if(_(e))return e;let t=e.length;if(!xe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},kt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ee(Uint8Array)),Ht=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Mt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},qt=R("HTMLFormElement"),$t=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ae=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),It=R("RegExp"),Te=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,o)=>{t(s,o,e)!==!1&&(r[o]=s)}),Object.defineProperties(e,r)},Jt=e=>{Te(e,(t,n)=>{if(T(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(T(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},zt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return _(e)?r(e):r(String(e).split(t)),n},Wt=()=>{},Vt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Kt=e=>{const t=new Array(10),n=(r,s)=>{if(ne(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=_(r)?[]:{};return D(r,(i,l)=>{const d=n(i,s+1);!j(d)&&(o[l]=d)}),t[s]=void 0,o}}return r};return n(e,0)},a={isArray:_,isArrayBuffer:Se,isBuffer:gt,isFormData:_t,isArrayBufferView:St,isString:xt,isNumber:xe,isBoolean:Ot,isObject:ne,isPlainObject:L,isUndefined:j,isDate:Rt,isFile:At,isBlob:Tt,isRegExp:It,isFunction:T,isStream:Pt,isURLSearchParams:Ct,isTypedArray:kt,isFileList:Nt,forEach:D,merge:X,extend:Dt,trim:jt,stripBOM:Ft,inherits:Bt,toFlatObject:Lt,kindOf:te,kindOfTest:R,endsWith:Ut,toArray:vt,forEachEntry:Ht,matchAll:Mt,isHTMLForm:qt,hasOwnProperty:ae,hasOwnProp:ae,reduceDescriptors:Te,freezeMethods:Jt,toObjectSet:zt,toCamelCase:$t,noop:Wt,toFiniteNumber:Vt,findKey:Oe,global:Re,isContextDefined:Ae,toJSONObject:Kt};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ne=m.prototype,Pe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Pe[e]={value:e}});Object.defineProperties(m,Pe);Object.defineProperty(Ne,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,o)=>{const i=Object.create(Ne);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},l=>l!=="isAxiosError"),m.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var Xt=typeof self=="object"?self.FormData:window.FormData;const Gt=Xt;function G(e){return a.isPlainObject(e)||a.isArray(e)}function _e(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function ce(e,t,n){return e?e.concat(t).map(function(s,o){return s=_e(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Qt(e){return a.isArray(e)&&!e.some(G)}const Yt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Zt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function I(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(Gt||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,x){return!a.isUndefined(x[h])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&Zt(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function u(f,h,x){let g=f;if(f&&!x&&typeof f=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&Qt(f)||a.isFileList(f)||a.endsWith(h,"[]")&&(g=a.toArray(f)))return h=_e(h),g.forEach(function(B,ke){!(a.isUndefined(B)||B===null)&&t.append(i===!0?ce([h],ke,o):i===null?h:h+"[]",c(B))}),!1}return G(f)?!0:(t.append(ce(x,h,o),c(f)),!1)}const p=[],w=Object.assign(Yt,{defaultVisitor:u,convertValue:c,isVisitable:G});function y(f,h){if(!a.isUndefined(f)){if(p.indexOf(f)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(f),a.forEach(f,function(g,N){(!(a.isUndefined(g)||g===null)&&s.call(t,g,a.isString(N)?N.trim():N,h,w))===!0&&y(g,h?h.concat(N):[N])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function le(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function re(e,t){this._pairs=[],e&&I(e,this,t)}const Ce=re.prototype;Ce.append=function(t,n){this._pairs.push([t,n])};Ce.toString=function(t){const n=t?function(r){return t.call(this,r,le)}:le;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function en(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function je(e,t,n){if(!t)return e;const r=n&&n.encode||en,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new re(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class tn{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ue=tn,De={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nn=typeof URLSearchParams<"u"?URLSearchParams:re,rn=FormData,sn=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),on=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:nn,FormData:rn,Blob},isStandardBrowserEnv:sn,isStandardBrowserWebWorkerEnv:on,protocols:["http","https","file","blob","url","data"]};function an(e,t){return I(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function cn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ln(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Fe(e){function t(n,r,s,o){let i=n[o++];const l=Number.isFinite(+i),d=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,d?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=ln(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(cn(r),s,n,0)}),n}return null}const un={"Content-Type":void 0};function fn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const J={transitional:De,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Fe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return an(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return I(l?{"files[]":t}:t,d&&new d,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),fn(t)):t}],transformResponse:[function(t){const n=this.transitional||J.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?m.from(l,m.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){J.headers[t]={}});a.forEach(["post","put","patch"],function(t){J.headers[t]=a.merge(un)});const se=J,dn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&dn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},fe=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function U(e){return e===!1||e==null?e:a.isArray(e)?e.map(U):String(e)}function hn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function mn(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function de(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function yn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function bn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class z{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,d,c){const u=C(d);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||c===!0||c===void 0&&s[p]!==!1)&&(s[p||d]=U(l))}const i=(l,d)=>a.forEach(l,(c,u)=>o(c,u,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!mn(t)?i(pn(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return hn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&(!n||de(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=C(i),i){const l=a.findKey(r,i);l&&(!n||de(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=U(s),delete n[o];return}const l=t?yn(o):String(o).trim();l!==o&&delete n[o],n[l]=U(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[fe]=this[fe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=C(i);r[l]||(bn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}z.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(z.prototype);a.freezeMethods(z);const O=z;function V(e,t){const n=this||se,r=t||n,s=O.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Be(e){return!!(e&&e.__CANCEL__)}function F(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(F,m,{__CANCEL__:!0});const wn=null;function En(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const gn=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,o,i,l){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(o)&&d.push("path="+o),a.isString(i)&&d.push("domain="+i),l===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Sn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function xn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Le(e,t){return e&&!Sn(t)?xn(e,t):t}const On=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const l=a.isString(i)?s(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Rn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function An(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),u=r[o];i||(i=c),n[s]=d,r[s]=c;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const y=u&&c-u;return y?Math.round(w*1e3/y):void 0}}function pe(e,t){let n=0;const r=An(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,l=o-n,d=r(l),c=o<=i;n=o;const u={loaded:o,total:i,progress:i?o/i:void 0,bytes:l,rate:d||void 0,estimated:d&&i&&c?(i-o)/d:void 0,event:s};u[t?"download":"upload"]=!0,e(u)}}const Tn=typeof XMLHttpRequest<"u",Nn=Tn&&function(e){return new Promise(function(n,r){let s=e.data;const o=O.from(e.headers).normalize(),i=e.responseType;let l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(y+":"+f))}const u=Le(e.baseURL,e.url);c.open(e.method.toUpperCase(),je(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function p(){if(!c)return;const y=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};En(function(g){n(g),d()},function(g){r(g),d()},h),c=null}if("onloadend"in c?c.onloadend=p:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(p)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||De;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,h.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||On(u))&&e.xsrfCookieName&&gn.read(e.xsrfCookieName);y&&o.set(e.xsrfHeaderName,y)}s===void 0&&o.setContentType(null),"setRequestHeader"in c&&a.forEach(o.toJSON(),function(f,h){c.setRequestHeader(h,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",pe(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",pe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=y=>{c&&(r(!y||y.type?new F(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const w=Rn(u);if(w&&S.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},v={http:wn,xhr:Nn};a.forEach(v,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pn={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?v[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(v,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:v};function K(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new F(null,e)}function he(e){return K(e),e.headers=O.from(e.headers),e.data=V.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Pn.getAdapter(e.adapter||se.adapter)(e).then(function(r){return K(e),r.data=V.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Be(r)||(K(e),r&&r.response&&(r.response.data=V.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const me=e=>e instanceof O?e.toJSON():e;function P(e,t){t=t||{};const n={};function r(c,u,p){return a.isPlainObject(c)&&a.isPlainObject(u)?a.merge.call({caseless:p},c,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(c,u,p){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c,p)}else return r(c,u,p)}function o(c,u){if(!a.isUndefined(u))return r(void 0,u)}function i(c,u){if(a.isUndefined(u)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function l(c,u,p){if(p in t)return r(c,u);if(p in e)return r(void 0,c)}const d={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,u)=>s(me(c),me(u),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(u){const p=d[u]||s,w=p(e[u],t[u],u);a.isUndefined(w)&&p!==l||(n[u]=w)}),n}const Ue="1.2.2",oe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ye={};oe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ue+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new m(s(i," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!ye[i]&&(ye[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};function _n(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],d=l===void 0||i(l,o,e);if(d!==!0)throw new m("option "+o+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const Q={assertOptions:_n,validators:oe},A=Q.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new ue,response:new ue}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=P(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&Q.assertOptions(r,{silentJSONParsing:A.transitional(A.boolean),forcedJSONParsing:A.transitional(A.boolean),clarifyTimeoutError:A.transitional(A.boolean)},!1),s!==void 0&&Q.assertOptions(s,{encode:A.function,serialize:A.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i;i=o&&a.merge(o.common,o[n.method]),i&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete o[f]}),n.headers=O.concat(i,o);const l=[];let d=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(d=d&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const c=[];this.interceptors.response.forEach(function(h){c.push(h.fulfilled,h.rejected)});let u,p=0,w;if(!d){const f=[he.bind(this),void 0];for(f.unshift.apply(f,l),f.push.apply(f,c),w=f.length,u=Promise.resolve(n);p<w;)u=u.then(f[p++],f[p++]);return u}w=l.length;let y=n;for(p=0;p<w;){const f=l[p++],h=l[p++];try{y=f(y)}catch(x){h.call(this,x);break}}try{u=he.call(this,y)}catch(f){return Promise.reject(f)}for(p=0,w=c.length;p<w;)u=u.then(c[p++],c[p++]);return u}getUri(t){t=P(this.defaults,t);const n=Le(t.baseURL,t.url);return je(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(P(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(P(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const k=M;class ie{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new F(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ie(function(s){t=s}),cancel:t}}}const Cn=ie;function jn(e){return function(n){return e.apply(null,n)}}function Dn(e){return a.isObject(e)&&e.isAxiosError===!0}const Y={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y).forEach(([e,t])=>{Y[t]=e});const Fn=Y;function ve(e){const t=new k(e),n=Ee(k.prototype.request,t);return a.extend(n,k.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ve(P(e,s))},n}const b=ve(se);b.Axios=k;b.CanceledError=F;b.CancelToken=Cn;b.isCancel=Be;b.VERSION=Ue;b.toFormData=I;b.AxiosError=m;b.Cancel=b.CanceledError;b.all=function(t){return Promise.all(t)};b.spread=jn;b.isAxiosError=Dn;b.mergeConfig=P;b.AxiosHeaders=O;b.formToJSON=e=>Fe(a.isHTMLForm(e)?new FormData(e):e);b.HttpStatusCode=Fn;b.default=b;const be=b;Et();class Bn{static login(t,n,r){const s=JSON.stringify({email:n,username:r,password:t});return be.post({}.APP_URL+"/login/",{body:s},{headers:{"Content-Type":"application/json"}})}static register(t,n,r){const s=JSON.stringify({email:n,username:r,password:t});return be.post({}.APP_URL+"/register/",{body:s},{headers:{"Content-Type":"application/json"}})}}const Ln=()=>{const[e,t]=$e();Bn.login("","","").then(()=>{console.log("Login successful!",t.email),t.email="XXXX",e.path="/"})},Un=Object.freeze(Object.defineProperty({__proto__:null,s_2gZ5kKqe2wY:Ve,s_bWDHOmSbAw4:Ln,_hW:Ie},Symbol.toStringTag,{value:"Module"}));export{Ie as _hW,Ve as s_2gZ5kKqe2wY,Ln as s_bWDHOmSbAw4};
