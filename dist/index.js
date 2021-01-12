module.exports=(()=>{var __webpack_modules__={932:(e,t,r)=>{const n=r(186);const s=r(747);const o=JSON.parse(s.readFileSync(process.env.GITHUB_EVENT_PATH,"utf8"));const i=r(751);try{const e={issuetypes:n.getInput("issuetypes"),transitions:n.getInput("transitions")};if(!e.issuetypes||!e.transitions){throw new Error("Invalid input")}const t=e.issuetypes.split(",");const r=e.transitions.split(",");if(t.length!==r.length){throw new Error("Length of issuetypes input don't equal with length of transitions input")}const s=new i(o,t,r);s.init()}catch(e){console.error(e);process.exit(1)}},351:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=n(r(87));const o=r(278);function issueCommand(e,t,r){const n=new Command(e,t,r);process.stdout.write(n.toString()+s.EOL)}t.issueCommand=issueCommand;function issue(e,t=""){issueCommand(e,{},t)}t.issue=issue;const i="::";class Command{constructor(e,t,r){if(!e){e="missing.command"}this.command=e;this.properties=t;this.message=r}toString(){let e=i+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=true;for(const r in this.properties){if(this.properties.hasOwnProperty(r)){const n=this.properties[r];if(n){if(t){t=false}else{e+=","}e+=`${r}=${escapeProperty(n)}`}}}}e+=`${i}${escapeData(this.message)}`;return e}}function escapeData(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function escapeProperty(e){return o.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}},186:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){function adopt(e){return e instanceof r?e:new r(function(t){t(e)})}return new(r||(r=Promise))(function(r,s){function fulfilled(e){try{step(n.next(e))}catch(e){s(e)}}function rejected(e){try{step(n["throw"](e))}catch(e){s(e)}}function step(e){e.done?r(e.value):adopt(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())})};var s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const o=r(351);const i=r(717);const a=r(278);const u=s(r(87));const c=s(r(622));var f;(function(e){e[e["Success"]=0]="Success";e[e["Failure"]=1]="Failure"})(f=t.ExitCode||(t.ExitCode={}));function exportVariable(e,t){const r=a.toCommandValue(t);process.env[e]=r;const n=process.env["GITHUB_ENV"]||"";if(n){const t="_GitHubActionsFileCommandDelimeter_";const n=`${e}<<${t}${u.EOL}${r}${u.EOL}${t}`;i.issueCommand("ENV",n)}else{o.issueCommand("set-env",{name:e},r)}}t.exportVariable=exportVariable;function setSecret(e){o.issueCommand("add-mask",{},e)}t.setSecret=setSecret;function addPath(e){const t=process.env["GITHUB_PATH"]||"";if(t){i.issueCommand("PATH",e)}else{o.issueCommand("add-path",{},e)}process.env["PATH"]=`${e}${c.delimiter}${process.env["PATH"]}`}t.addPath=addPath;function getInput(e,t){const r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r){throw new Error(`Input required and not supplied: ${e}`)}return r.trim()}t.getInput=getInput;function setOutput(e,t){o.issueCommand("set-output",{name:e},t)}t.setOutput=setOutput;function setCommandEcho(e){o.issue("echo",e?"on":"off")}t.setCommandEcho=setCommandEcho;function setFailed(e){process.exitCode=f.Failure;error(e)}t.setFailed=setFailed;function isDebug(){return process.env["RUNNER_DEBUG"]==="1"}t.isDebug=isDebug;function debug(e){o.issueCommand("debug",{},e)}t.debug=debug;function error(e){o.issue("error",e instanceof Error?e.toString():e)}t.error=error;function warning(e){o.issue("warning",e instanceof Error?e.toString():e)}t.warning=warning;function info(e){process.stdout.write(e+u.EOL)}t.info=info;function startGroup(e){o.issue("group",e)}t.startGroup=startGroup;function endGroup(){o.issue("endgroup")}t.endGroup=endGroup;function group(e,t){return n(this,void 0,void 0,function*(){startGroup(e);let r;try{r=yield t()}finally{endGroup()}return r})}t.group=group;function saveState(e,t){o.issueCommand("save-state",{name:e},t)}t.saveState=saveState;function getState(e){return process.env[`STATE_${e}`]||""}t.getState=getState},717:function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)if(Object.hasOwnProperty.call(e,r))t[r]=e[r];t["default"]=e;return t};Object.defineProperty(t,"__esModule",{value:true});const s=n(r(747));const o=n(r(87));const i=r(278);function issueCommand(e,t){const r=process.env[`GITHUB_${e}`];if(!r){throw new Error(`Unable to find environment variable for file command ${e}`)}if(!s.existsSync(r)){throw new Error(`Missing file at path: ${r}`)}s.appendFileSync(r,`${i.toCommandValue(t)}${o.EOL}`,{encoding:"utf8"})}t.issueCommand=issueCommand},278:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true});function toCommandValue(e){if(e===null||e===undefined){return""}else if(typeof e==="string"||e instanceof String){return e}return JSON.stringify(e)}t.toCommandValue=toCommandValue},545:(e,t,r)=>{e.exports=r(618)},104:(e,t,r)=>{"use strict";var n=r(328);var s=r(211);var o=r(934);var i=r(646);var a=r(605);var u=r(34);var c=r(707).http;var f=r(707).https;var p=r(835);var h=r(761);var d=r(696);var l=r(226);var m=r(516);var v=/https:?/;function setProxy(e,t,r){e.hostname=t.host;e.host=t.host;e.port=t.port;e.path=r;if(t.auth){var n=Buffer.from(t.auth.username+":"+t.auth.password,"utf8").toString("base64");e.headers["Proxy-Authorization"]="Basic "+n}e.beforeRedirect=function beforeRedirect(e){e.headers.host=e.host;setProxy(e,t,e.href)}}e.exports=function httpAdapter(e){return new Promise(function dispatchHttpRequest(t,r){var g=function resolve(e){t(e)};var _=function reject(e){r(e)};var y=e.data;var x=e.headers;if(!x["User-Agent"]&&!x["user-agent"]){x["User-Agent"]="axios/"+d.version}if(y&&!n.isStream(y)){if(Buffer.isBuffer(y)){}else if(n.isArrayBuffer(y)){y=Buffer.from(new Uint8Array(y))}else if(n.isString(y)){y=Buffer.from(y,"utf-8")}else{return _(l("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e))}x["Content-Length"]=y.length}var w=undefined;if(e.auth){var b=e.auth.username||"";var R=e.auth.password||"";w=b+":"+R}var E=o(e.baseURL,e.url);var C=p.parse(E);var A=C.protocol||"http:";if(!w&&C.auth){var O=C.auth.split(":");var T=O[0]||"";var S=O[1]||"";w=T+":"+S}if(w){delete x.Authorization}var B=v.test(A);var q=B?e.httpsAgent:e.httpAgent;var j={path:i(C.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method.toUpperCase(),headers:x,agent:q,agents:{http:e.httpAgent,https:e.httpsAgent},auth:w};if(e.socketPath){j.socketPath=e.socketPath}else{j.hostname=C.hostname;j.port=C.port}var I=e.proxy;if(!I&&I!==false){var L=A.slice(0,-1)+"_proxy";var U=process.env[L]||process.env[L.toUpperCase()];if(U){var N=p.parse(U);var P=process.env.no_proxy||process.env.NO_PROXY;var M=true;if(P){var D=P.split(",").map(function trim(e){return e.trim()});M=!D.some(function proxyMatch(e){if(!e){return false}if(e==="*"){return true}if(e[0]==="."&&C.hostname.substr(C.hostname.length-e.length)===e){return true}return C.hostname===e})}if(M){I={host:N.hostname,port:N.port,protocol:N.protocol};if(N.auth){var k=N.auth.split(":");I.auth={username:k[0],password:k[1]}}}}}if(I){j.headers.host=C.hostname+(C.port?":"+C.port:"");setProxy(j,I,A+"//"+C.hostname+(C.port?":"+C.port:"")+j.path)}var $;var F=B&&(I?v.test(I.protocol):true);if(e.transport){$=e.transport}else if(e.maxRedirects===0){$=F?u:a}else{if(e.maxRedirects){j.maxRedirects=e.maxRedirects}$=F?f:c}if(e.maxBodyLength>-1){j.maxBodyLength=e.maxBodyLength}var H=$.request(j,function handleResponse(t){if(H.aborted)return;var r=t;var o=t.req||H;if(t.statusCode!==204&&o.method!=="HEAD"&&e.decompress!==false){switch(t.headers["content-encoding"]){case"gzip":case"compress":case"deflate":r=r.pipe(h.createUnzip());delete t.headers["content-encoding"];break}}var i={status:t.statusCode,statusText:t.statusMessage,headers:t.headers,config:e,request:o};if(e.responseType==="stream"){i.data=r;s(g,_,i)}else{var a=[];r.on("data",function handleStreamData(t){a.push(t);if(e.maxContentLength>-1&&Buffer.concat(a).length>e.maxContentLength){r.destroy();_(l("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,o))}});r.on("error",function handleStreamError(t){if(H.aborted)return;_(m(t,e,null,o))});r.on("end",function handleStreamEnd(){var t=Buffer.concat(a);if(e.responseType!=="arraybuffer"){t=t.toString(e.responseEncoding);if(!e.responseEncoding||e.responseEncoding==="utf8"){t=n.stripBOM(t)}}i.data=t;s(g,_,i)})}});H.on("error",function handleRequestError(t){if(H.aborted&&t.code!=="ERR_FR_TOO_MANY_REDIRECTS")return;_(m(t,e,null,H))});if(e.timeout){H.setTimeout(e.timeout,function handleRequestTimeout(){H.abort();_(l("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",H))})}if(e.cancelToken){e.cancelToken.promise.then(function onCanceled(e){if(H.aborted)return;H.abort();_(e)})}if(n.isStream(y)){y.on("error",function handleStreamError(t){_(m(t,e,null,H))}).pipe(H)}else{H.end(y)}})}},454:(e,t,r)=>{"use strict";var n=r(328);var s=r(211);var o=r(169);var i=r(646);var a=r(934);var u=r(455);var c=r(608);var f=r(226);e.exports=function xhrAdapter(e){return new Promise(function dispatchXhrRequest(t,r){var p=e.data;var h=e.headers;if(n.isFormData(p)){delete h["Content-Type"]}var d=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"";var m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";h.Authorization="Basic "+btoa(l+":"+m)}var v=a(e.baseURL,e.url);d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),true);d.timeout=e.timeout;d.onreadystatechange=function handleLoad(){if(!d||d.readyState!==4){return}if(d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)){return}var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null;var o=!e.responseType||e.responseType==="text"?d.responseText:d.response;var i={data:o,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};s(t,r,i);d=null};d.onabort=function handleAbort(){if(!d){return}r(f("Request aborted",e,"ECONNABORTED",d));d=null};d.onerror=function handleError(){r(f("Network Error",e,null,d));d=null};d.ontimeout=function handleTimeout(){var t="timeout of "+e.timeout+"ms exceeded";if(e.timeoutErrorMessage){t=e.timeoutErrorMessage}r(f(t,e,"ECONNABORTED",d));d=null};if(n.isStandardBrowserEnv()){var g=(e.withCredentials||c(v))&&e.xsrfCookieName?o.read(e.xsrfCookieName):undefined;if(g){h[e.xsrfHeaderName]=g}}if("setRequestHeader"in d){n.forEach(h,function setRequestHeader(e,t){if(typeof p==="undefined"&&t.toLowerCase()==="content-type"){delete h[t]}else{d.setRequestHeader(t,e)}})}if(!n.isUndefined(e.withCredentials)){d.withCredentials=!!e.withCredentials}if(e.responseType){try{d.responseType=e.responseType}catch(t){if(e.responseType!=="json"){throw t}}}if(typeof e.onDownloadProgress==="function"){d.addEventListener("progress",e.onDownloadProgress)}if(typeof e.onUploadProgress==="function"&&d.upload){d.upload.addEventListener("progress",e.onUploadProgress)}if(e.cancelToken){e.cancelToken.promise.then(function onCanceled(e){if(!d){return}d.abort();r(e);d=null})}if(!p){p=null}d.send(p)})}},618:(e,t,r)=>{"use strict";var n=r(328);var s=r(65);var o=r(178);var i=r(831);var a=r(190);function createInstance(e){var t=new o(e);var r=s(o.prototype.request,t);n.extend(r,o.prototype,t);n.extend(r,t);return r}var u=createInstance(a);u.Axios=o;u.create=function create(e){return createInstance(i(u.defaults,e))};u.Cancel=r(875);u.CancelToken=r(587);u.isCancel=r(57);u.all=function all(e){return Promise.all(e)};u.spread=r(850);u.isAxiosError=r(650);e.exports=u;e.exports.default=u},875:e=>{"use strict";function Cancel(e){this.message=e}Cancel.prototype.toString=function toString(){return"Cancel"+(this.message?": "+this.message:"")};Cancel.prototype.__CANCEL__=true;e.exports=Cancel},587:(e,t,r)=>{"use strict";var n=r(875);function CancelToken(e){if(typeof e!=="function"){throw new TypeError("executor must be a function.")}var t;this.promise=new Promise(function promiseExecutor(e){t=e});var r=this;e(function cancel(e){if(r.reason){return}r.reason=new n(e);t(r.reason)})}CancelToken.prototype.throwIfRequested=function throwIfRequested(){if(this.reason){throw this.reason}};CancelToken.source=function source(){var e;var t=new CancelToken(function executor(t){e=t});return{token:t,cancel:e}};e.exports=CancelToken},57:e=>{"use strict";e.exports=function isCancel(e){return!!(e&&e.__CANCEL__)}},178:(e,t,r)=>{"use strict";var n=r(328);var s=r(646);var o=r(214);var i=r(62);var a=r(831);function Axios(e){this.defaults=e;this.interceptors={request:new o,response:new o}}Axios.prototype.request=function request(e){if(typeof e==="string"){e=arguments[1]||{};e.url=arguments[0]}else{e=e||{}}e=a(this.defaults,e);if(e.method){e.method=e.method.toLowerCase()}else if(this.defaults.method){e.method=this.defaults.method.toLowerCase()}else{e.method="get"}var t=[i,undefined];var r=Promise.resolve(e);this.interceptors.request.forEach(function unshiftRequestInterceptors(e){t.unshift(e.fulfilled,e.rejected)});this.interceptors.response.forEach(function pushResponseInterceptors(e){t.push(e.fulfilled,e.rejected)});while(t.length){r=r.then(t.shift(),t.shift())}return r};Axios.prototype.getUri=function getUri(e){e=a(this.defaults,e);return s(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};n.forEach(["delete","get","head","options"],function forEachMethodNoData(e){Axios.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}});n.forEach(["post","put","patch"],function forEachMethodWithData(e){Axios.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}});e.exports=Axios},214:(e,t,r)=>{"use strict";var n=r(328);function InterceptorManager(){this.handlers=[]}InterceptorManager.prototype.use=function use(e,t){this.handlers.push({fulfilled:e,rejected:t});return this.handlers.length-1};InterceptorManager.prototype.eject=function eject(e){if(this.handlers[e]){this.handlers[e]=null}};InterceptorManager.prototype.forEach=function forEach(e){n.forEach(this.handlers,function forEachHandler(t){if(t!==null){e(t)}})};e.exports=InterceptorManager},934:(e,t,r)=>{"use strict";var n=r(301);var s=r(189);e.exports=function buildFullPath(e,t){if(e&&!n(t)){return s(e,t)}return t}},226:(e,t,r)=>{"use strict";var n=r(516);e.exports=function createError(e,t,r,s,o){var i=new Error(e);return n(i,t,r,s,o)}},62:(e,t,r)=>{"use strict";var n=r(328);var s=r(812);var o=r(57);var i=r(190);function throwIfCancellationRequested(e){if(e.cancelToken){e.cancelToken.throwIfRequested()}}e.exports=function dispatchRequest(e){throwIfCancellationRequested(e);e.headers=e.headers||{};e.data=s(e.data,e.headers,e.transformRequest);e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers);n.forEach(["delete","get","head","post","put","patch","common"],function cleanHeaderConfig(t){delete e.headers[t]});var t=e.adapter||i.adapter;return t(e).then(function onAdapterResolution(t){throwIfCancellationRequested(e);t.data=s(t.data,t.headers,e.transformResponse);return t},function onAdapterRejection(t){if(!o(t)){throwIfCancellationRequested(e);if(t&&t.response){t.response.data=s(t.response.data,t.response.headers,e.transformResponse)}}return Promise.reject(t)})}},516:e=>{"use strict";e.exports=function enhanceError(e,t,r,n,s){e.config=t;if(r){e.code=r}e.request=n;e.response=s;e.isAxiosError=true;e.toJSON=function toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}};return e}},831:(e,t,r)=>{"use strict";var n=r(328);e.exports=function mergeConfig(e,t){t=t||{};var r={};var s=["url","method","data"];var o=["headers","auth","proxy","params"];var i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"];var a=["validateStatus"];function getMergedValue(e,t){if(n.isPlainObject(e)&&n.isPlainObject(t)){return n.merge(e,t)}else if(n.isPlainObject(t)){return n.merge({},t)}else if(n.isArray(t)){return t.slice()}return t}function mergeDeepProperties(s){if(!n.isUndefined(t[s])){r[s]=getMergedValue(e[s],t[s])}else if(!n.isUndefined(e[s])){r[s]=getMergedValue(undefined,e[s])}}n.forEach(s,function valueFromConfig2(e){if(!n.isUndefined(t[e])){r[e]=getMergedValue(undefined,t[e])}});n.forEach(o,mergeDeepProperties);n.forEach(i,function defaultToConfig2(s){if(!n.isUndefined(t[s])){r[s]=getMergedValue(undefined,t[s])}else if(!n.isUndefined(e[s])){r[s]=getMergedValue(undefined,e[s])}});n.forEach(a,function merge(n){if(n in t){r[n]=getMergedValue(e[n],t[n])}else if(n in e){r[n]=getMergedValue(undefined,e[n])}});var u=s.concat(o).concat(i).concat(a);var c=Object.keys(e).concat(Object.keys(t)).filter(function filterAxiosKeys(e){return u.indexOf(e)===-1});n.forEach(c,mergeDeepProperties);return r}},211:(e,t,r)=>{"use strict";var n=r(226);e.exports=function settle(e,t,r){var s=r.config.validateStatus;if(!r.status||!s||s(r.status)){e(r)}else{t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}}},812:(e,t,r)=>{"use strict";var n=r(328);e.exports=function transformData(e,t,r){n.forEach(r,function transform(r){e=r(e,t)});return e}},190:(e,t,r)=>{"use strict";var n=r(328);var s=r(240);var o={"Content-Type":"application/x-www-form-urlencoded"};function setContentTypeIfUnset(e,t){if(!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])){e["Content-Type"]=t}}function getDefaultAdapter(){var e;if(typeof XMLHttpRequest!=="undefined"){e=r(454)}else if(typeof process!=="undefined"&&Object.prototype.toString.call(process)==="[object process]"){e=r(104)}return e}var i={adapter:getDefaultAdapter(),transformRequest:[function transformRequest(e,t){s(t,"Accept");s(t,"Content-Type");if(n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)){return e}if(n.isArrayBufferView(e)){return e.buffer}if(n.isURLSearchParams(e)){setContentTypeIfUnset(t,"application/x-www-form-urlencoded;charset=utf-8");return e.toString()}if(n.isObject(e)){setContentTypeIfUnset(t,"application/json;charset=utf-8");return JSON.stringify(e)}return e}],transformResponse:[function transformResponse(e){if(typeof e==="string"){try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function validateStatus(e){return e>=200&&e<300}};i.headers={common:{Accept:"application/json, text/plain, */*"}};n.forEach(["delete","get","head"],function forEachMethodNoData(e){i.headers[e]={}});n.forEach(["post","put","patch"],function forEachMethodWithData(e){i.headers[e]=n.merge(o)});e.exports=i},65:e=>{"use strict";e.exports=function bind(e,t){return function wrap(){var r=new Array(arguments.length);for(var n=0;n<r.length;n++){r[n]=arguments[n]}return e.apply(t,r)}}},646:(e,t,r)=>{"use strict";var n=r(328);function encode(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function buildURL(e,t,r){if(!t){return e}var s;if(r){s=r(t)}else if(n.isURLSearchParams(t)){s=t.toString()}else{var o=[];n.forEach(t,function serialize(e,t){if(e===null||typeof e==="undefined"){return}if(n.isArray(e)){t=t+"[]"}else{e=[e]}n.forEach(e,function parseValue(e){if(n.isDate(e)){e=e.toISOString()}else if(n.isObject(e)){e=JSON.stringify(e)}o.push(encode(t)+"="+encode(e))})});s=o.join("&")}if(s){var i=e.indexOf("#");if(i!==-1){e=e.slice(0,i)}e+=(e.indexOf("?")===-1?"?":"&")+s}return e}},189:e=>{"use strict";e.exports=function combineURLs(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},169:(e,t,r)=>{"use strict";var n=r(328);e.exports=n.isStandardBrowserEnv()?function standardBrowserEnv(){return{write:function write(e,t,r,s,o,i){var a=[];a.push(e+"="+encodeURIComponent(t));if(n.isNumber(r)){a.push("expires="+new Date(r).toGMTString())}if(n.isString(s)){a.push("path="+s)}if(n.isString(o)){a.push("domain="+o)}if(i===true){a.push("secure")}document.cookie=a.join("; ")},read:function read(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function remove(e){this.write(e,"",Date.now()-864e5)}}}():function nonStandardBrowserEnv(){return{write:function write(){},read:function read(){return null},remove:function remove(){}}}()},301:e=>{"use strict";e.exports=function isAbsoluteURL(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},650:e=>{"use strict";e.exports=function isAxiosError(e){return typeof e==="object"&&e.isAxiosError===true}},608:(e,t,r)=>{"use strict";var n=r(328);e.exports=n.isStandardBrowserEnv()?function standardBrowserEnv(){var e=/(msie|trident)/i.test(navigator.userAgent);var t=document.createElement("a");var r;function resolveURL(r){var n=r;if(e){t.setAttribute("href",n);n=t.href}t.setAttribute("href",n);return{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}r=resolveURL(window.location.href);return function isURLSameOrigin(e){var t=n.isString(e)?resolveURL(e):e;return t.protocol===r.protocol&&t.host===r.host}}():function nonStandardBrowserEnv(){return function isURLSameOrigin(){return true}}()},240:(e,t,r)=>{"use strict";var n=r(328);e.exports=function normalizeHeaderName(e,t){n.forEach(e,function processHeader(r,n){if(n!==t&&n.toUpperCase()===t.toUpperCase()){e[t]=r;delete e[n]}})}},455:(e,t,r)=>{"use strict";var n=r(328);var s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function parseHeaders(e){var t={};var r;var o;var i;if(!e){return t}n.forEach(e.split("\n"),function parser(e){i=e.indexOf(":");r=n.trim(e.substr(0,i)).toLowerCase();o=n.trim(e.substr(i+1));if(r){if(t[r]&&s.indexOf(r)>=0){return}if(r==="set-cookie"){t[r]=(t[r]?t[r]:[]).concat([o])}else{t[r]=t[r]?t[r]+", "+o:o}}});return t}},850:e=>{"use strict";e.exports=function spread(e){return function wrap(t){return e.apply(null,t)}}},328:(e,t,r)=>{"use strict";var n=r(65);var s=Object.prototype.toString;function isArray(e){return s.call(e)==="[object Array]"}function isUndefined(e){return typeof e==="undefined"}function isBuffer(e){return e!==null&&!isUndefined(e)&&e.constructor!==null&&!isUndefined(e.constructor)&&typeof e.constructor.isBuffer==="function"&&e.constructor.isBuffer(e)}function isArrayBuffer(e){return s.call(e)==="[object ArrayBuffer]"}function isFormData(e){return typeof FormData!=="undefined"&&e instanceof FormData}function isArrayBufferView(e){var t;if(typeof ArrayBuffer!=="undefined"&&ArrayBuffer.isView){t=ArrayBuffer.isView(e)}else{t=e&&e.buffer&&e.buffer instanceof ArrayBuffer}return t}function isString(e){return typeof e==="string"}function isNumber(e){return typeof e==="number"}function isObject(e){return e!==null&&typeof e==="object"}function isPlainObject(e){if(s.call(e)!=="[object Object]"){return false}var t=Object.getPrototypeOf(e);return t===null||t===Object.prototype}function isDate(e){return s.call(e)==="[object Date]"}function isFile(e){return s.call(e)==="[object File]"}function isBlob(e){return s.call(e)==="[object Blob]"}function isFunction(e){return s.call(e)==="[object Function]"}function isStream(e){return isObject(e)&&isFunction(e.pipe)}function isURLSearchParams(e){return typeof URLSearchParams!=="undefined"&&e instanceof URLSearchParams}function trim(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function isStandardBrowserEnv(){if(typeof navigator!=="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")){return false}return typeof window!=="undefined"&&typeof document!=="undefined"}function forEach(e,t){if(e===null||typeof e==="undefined"){return}if(typeof e!=="object"){e=[e]}if(isArray(e)){for(var r=0,n=e.length;r<n;r++){t.call(null,e[r],r,e)}}else{for(var s in e){if(Object.prototype.hasOwnProperty.call(e,s)){t.call(null,e[s],s,e)}}}}function merge(){var e={};function assignValue(t,r){if(isPlainObject(e[r])&&isPlainObject(t)){e[r]=merge(e[r],t)}else if(isPlainObject(t)){e[r]=merge({},t)}else if(isArray(t)){e[r]=t.slice()}else{e[r]=t}}for(var t=0,r=arguments.length;t<r;t++){forEach(arguments[t],assignValue)}return e}function extend(e,t,r){forEach(t,function assignValue(t,s){if(r&&typeof t==="function"){e[s]=n(t,r)}else{e[s]=t}});return e}function stripBOM(e){if(e.charCodeAt(0)===65279){e=e.slice(1)}return e}e.exports={isArray:isArray,isArrayBuffer:isArrayBuffer,isBuffer:isBuffer,isFormData:isFormData,isArrayBufferView:isArrayBufferView,isString:isString,isNumber:isNumber,isObject:isObject,isPlainObject:isPlainObject,isUndefined:isUndefined,isDate:isDate,isFile:isFile,isBlob:isBlob,isFunction:isFunction,isStream:isStream,isURLSearchParams:isURLSearchParams,isStandardBrowserEnv:isStandardBrowserEnv,forEach:forEach,merge:merge,extend:extend,trim:trim,stripBOM:stripBOM}},133:(e,t,r)=>{var n;try{n=r(975)("follow-redirects")}catch(e){n=function(){}}e.exports=n},707:(e,t,r)=>{var n=r(835);var s=n.URL;var o=r(605);var i=r(34);var a=r(413).Writable;var u=r(357);var c=r(133);var f=Object.create(null);["abort","aborted","connect","error","socket","timeout"].forEach(function(e){f[e]=function(t,r,n){this._redirectable.emit(e,t,r,n)}});var p=createErrorType("ERR_FR_REDIRECTION_FAILURE","");var h=createErrorType("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded");var d=createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit");var l=createErrorType("ERR_STREAM_WRITE_AFTER_END","write after end");function RedirectableRequest(e,t){a.call(this);this._sanitizeOptions(e);this._options=e;this._ended=false;this._ending=false;this._redirectCount=0;this._redirects=[];this._requestBodyLength=0;this._requestBodyBuffers=[];if(t){this.on("response",t)}var r=this;this._onNativeResponse=function(e){r._processResponse(e)};this._performRequest()}RedirectableRequest.prototype=Object.create(a.prototype);RedirectableRequest.prototype.write=function(e,t,r){if(this._ending){throw new l}if(!(typeof e==="string"||typeof e==="object"&&"length"in e)){throw new TypeError("data should be a string, Buffer or Uint8Array")}if(typeof t==="function"){r=t;t=null}if(e.length===0){if(r){r()}return}if(this._requestBodyLength+e.length<=this._options.maxBodyLength){this._requestBodyLength+=e.length;this._requestBodyBuffers.push({data:e,encoding:t});this._currentRequest.write(e,t,r)}else{this.emit("error",new d);this.abort()}};RedirectableRequest.prototype.end=function(e,t,r){if(typeof e==="function"){r=e;e=t=null}else if(typeof t==="function"){r=t;t=null}if(!e){this._ended=this._ending=true;this._currentRequest.end(null,null,r)}else{var n=this;var s=this._currentRequest;this.write(e,t,function(){n._ended=true;s.end(null,null,r)});this._ending=true}};RedirectableRequest.prototype.setHeader=function(e,t){this._options.headers[e]=t;this._currentRequest.setHeader(e,t)};RedirectableRequest.prototype.removeHeader=function(e){delete this._options.headers[e];this._currentRequest.removeHeader(e)};RedirectableRequest.prototype.setTimeout=function(e,t){if(t){this.once("timeout",t)}if(this.socket){startTimer(this,e)}else{var r=this;this._currentRequest.once("socket",function(){startTimer(r,e)})}this.once("response",clearTimer);this.once("error",clearTimer);return this};function startTimer(e,t){clearTimeout(e._timeout);e._timeout=setTimeout(function(){e.emit("timeout")},t)}function clearTimer(){clearTimeout(this._timeout)}["abort","flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach(function(e){RedirectableRequest.prototype[e]=function(t,r){return this._currentRequest[e](t,r)}});["aborted","connection","socket"].forEach(function(e){Object.defineProperty(RedirectableRequest.prototype,e,{get:function(){return this._currentRequest[e]}})});RedirectableRequest.prototype._sanitizeOptions=function(e){if(!e.headers){e.headers={}}if(e.host){if(!e.hostname){e.hostname=e.host}delete e.host}if(!e.pathname&&e.path){var t=e.path.indexOf("?");if(t<0){e.pathname=e.path}else{e.pathname=e.path.substring(0,t);e.search=e.path.substring(t)}}};RedirectableRequest.prototype._performRequest=function(){var e=this._options.protocol;var t=this._options.nativeProtocols[e];if(!t){this.emit("error",new TypeError("Unsupported protocol "+e));return}if(this._options.agents){var r=e.substr(0,e.length-1);this._options.agent=this._options.agents[r]}var s=this._currentRequest=t.request(this._options,this._onNativeResponse);this._currentUrl=n.format(this._options);s._redirectable=this;for(var o in f){if(o){s.on(o,f[o])}}if(this._isRedirect){var i=0;var a=this;var u=this._requestBodyBuffers;(function writeNext(e){if(s===a._currentRequest){if(e){a.emit("error",e)}else if(i<u.length){var t=u[i++];if(!s.finished){s.write(t.data,t.encoding,writeNext)}}else if(a._ended){s.end()}}})()}};RedirectableRequest.prototype._processResponse=function(e){var t=e.statusCode;if(this._options.trackRedirects){this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:t})}var r=e.headers.location;if(r&&this._options.followRedirects!==false&&t>=300&&t<400){this._currentRequest.removeAllListeners();this._currentRequest.on("error",noop);this._currentRequest.abort();e.destroy();if(++this._redirectCount>this._options.maxRedirects){this.emit("error",new h);return}if((t===301||t===302)&&this._options.method==="POST"||t===303&&!/^(?:GET|HEAD)$/.test(this._options.method)){this._options.method="GET";this._requestBodyBuffers=[];removeMatchingHeaders(/^content-/i,this._options.headers)}var s=removeMatchingHeaders(/^host$/i,this._options.headers)||n.parse(this._currentUrl).hostname;var o=n.resolve(this._currentUrl,r);c("redirecting to",o);this._isRedirect=true;var i=n.parse(o);Object.assign(this._options,i);if(i.hostname!==s){removeMatchingHeaders(/^authorization$/i,this._options.headers)}if(typeof this._options.beforeRedirect==="function"){var a={headers:e.headers};try{this._options.beforeRedirect.call(null,this._options,a)}catch(e){this.emit("error",e);return}this._sanitizeOptions(this._options)}try{this._performRequest()}catch(e){var u=new p("Redirected request failed: "+e.message);u.cause=e;this.emit("error",u)}}else{e.responseUrl=this._currentUrl;e.redirects=this._redirects;this.emit("response",e);this._requestBodyBuffers=[]}};function wrap(e){var t={maxRedirects:21,maxBodyLength:10*1024*1024};var r={};Object.keys(e).forEach(function(o){var i=o+":";var a=r[i]=e[o];var f=t[o]=Object.create(a);function request(e,o,a){if(typeof e==="string"){var f=e;try{e=urlToOptions(new s(f))}catch(t){e=n.parse(f)}}else if(s&&e instanceof s){e=urlToOptions(e)}else{a=o;o=e;e={protocol:i}}if(typeof o==="function"){a=o;o=null}o=Object.assign({maxRedirects:t.maxRedirects,maxBodyLength:t.maxBodyLength},e,o);o.nativeProtocols=r;u.equal(o.protocol,i,"protocol mismatch");c("options",o);return new RedirectableRequest(o,a)}function get(e,t,r){var n=f.request(e,t,r);n.end();return n}Object.defineProperties(f,{request:{value:request,configurable:true,enumerable:true,writable:true},get:{value:get,configurable:true,enumerable:true,writable:true}})});return t}function noop(){}function urlToOptions(e){var t={protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,pathname:e.pathname,path:e.pathname+e.search,href:e.href};if(e.port!==""){t.port=Number(e.port)}return t}function removeMatchingHeaders(e,t){var r;for(var n in t){if(e.test(n)){r=t[n];delete t[n]}}return r}function createErrorType(e,t){function CustomError(e){Error.captureStackTrace(this,this.constructor);this.message=e||t}CustomError.prototype=new Error;CustomError.prototype.constructor=CustomError;CustomError.prototype.name="Error ["+e+"]";CustomError.prototype.code=e;return CustomError}e.exports=wrap({http:o,https:i});e.exports.wrap=wrap},751:(e,t,r)=>{const n=r(82);const s=r(845);class App{constructor(e,t,r){this.event=e;this.issuetypes=t;this.transitions=r;this.httpClient=new n;this.jira=new s(this.httpClient)}async init(){this.validateInput();const e=this.getCommitMessages();const t=this.findIssueKeys(e);const r=await this.getTransitionId(t);await this.transitionIssues(t,r)}validateInput(){if(!process.env.JIRA_BASE_URL)throw new Error("Please specify JIRA_BASE_URL env");if(!process.env.JIRA_API_TOKEN)throw new Error("Please specify JIRA_API_TOKEN env");if(!process.env.JIRA_USER_EMAIL)throw new Error("Please specify JIRA_USER_EMAIL env")}getCommitMessages(){const e=this.event.commits.map(e=>e.message).join(" ");console.log(`Commit messages: ${e}`);return e}findIssueKeys(e){const t=/([a-zA-Z0-9]+-[0-9]+)/g;const r=e.match(t);if(!r){throw new Error(`Commit messages doesn't contain any issue keys`)}console.log(`Found issue keys: ${r.join(" ")}`);return r}async getTransitionId(e){const t=[];for(const r of e){const e=await this.jira.getIssue(r);const n=e.fields.issuetype.name;const s=this.issuetypes.indexOf(n);const{transitions:o}=await this.jira.getIssueTransitions(r);const i=o.find(e=>e.name===this.transitions[s]);if(!i){throw new Error(`Cannot find transition "${transition}"`)}t.push({id:i.id,name:i.name})}return t}async transitionIssues(e,t){for(let r=0;r<e.length;r++){console.log(`Transitioning issue "${e[r]}" to "${t[r].name}"`);await this.jira.transitionIssue(e[r],t[r].id)}}}e.exports=App},82:(e,t,r)=>{const n=r(545);class HttpClient{constructor(){this.token=Buffer.from(`${process.env.JIRA_USER_EMAIL}:${process.env.JIRA_API_TOKEN}`).toString("base64");n.defaults.baseURL=`${process.env.JIRA_BASE_URL}/rest/api/3`;this.headers={"Content-Type":"application/json",Authorization:`Basic ${this.token}`}}async get(e){return n({method:"get",url:e,headers:this.headers}).then(e=>e.data)}async post(e,t){return n({method:"post",url:e,headers:this.headers,data:t}).then(e=>e.data)}}e.exports=HttpClient},845:e=>{class Jira{constructor(e){this.httpClient=e}async getIssue(e){const t=`issue/${e}`;return this.httpClient.get(t)}async getIssueTransitions(e){const t=`issue/${e}/transitions`;return this.httpClient.get(t)}async transitionIssue(e,t){const r=`issue/${e}/transitions`;const n={transition:{id:t}};return this.httpClient.post(r,n)}}e.exports=Jira},975:module=>{module.exports=eval("require")("debug")},696:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.1","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.10.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},357:e=>{"use strict";e.exports=require("assert")},747:e=>{"use strict";e.exports=require("fs")},605:e=>{"use strict";e.exports=require("http")},34:e=>{"use strict";e.exports=require("https")},87:e=>{"use strict";e.exports=require("os")},622:e=>{"use strict";e.exports=require("path")},413:e=>{"use strict";e.exports=require("stream")},835:e=>{"use strict";e.exports=require("url")},761:e=>{"use strict";e.exports=require("zlib")}};var __webpack_module_cache__={};function __nccwpck_require__(e){if(__webpack_module_cache__[e]){return __webpack_module_cache__[e].exports}var t=__webpack_module_cache__[e]={exports:{}};var r=true;try{__webpack_modules__[e].call(t.exports,t,t.exports,__nccwpck_require__);r=false}finally{if(r)delete __webpack_module_cache__[e]}return t.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(932)})();