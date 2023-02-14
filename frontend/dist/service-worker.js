/* Qwik Service Worker */
const appBundles=[["q-0f20f5fc.js",[17,24],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-1668920b.js",[17],["1v1puM9GTHI","FG0dOJxeutU"]],["q-2017fc8d.js",[17],["hg9USy095T4"]],["q-212792dc.js",[17,19,24],["FHM78hZ4KUU","VkLNXphUh5s"]],["q-25efe227.js",[17]],["q-2d5b1d1e.js",[17,24],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-2debd24a.js",[]],["q-34c980ff.js",[17,28],["Ye3VmDwgdT4"]],["q-395a220d.js",[17]],["q-3c35fa41.js",[17,24],["02wMImzEAbk","fX0bDjeJa0E","TxCFOy819ag"]],["q-43f7f117.js",[17,24,28],["30ei6KzVUh8","kQD9x0TpFbA"]],["q-45aab3b6.js",[]],["q-4f732d55.js",[17]],["q-5308feb3.js",[17]],["q-644682b4.js",[17]],["q-7bc06a6e.js",[17]],["q-86e4cff6.js",[17,24],["8gdLBszqbaM","EpaZ5qQ4Lg4","kzjavhDI3L0","PrXIxv2vNXY","u0YVoxt2aTY","yiXwCC0m3jY"]],["q-88b2fa1c.js",[]],["q-97448050.js",[17]],["q-9a2b5c6b.js",[17]],["q-ad907ef1.js",[17]],["q-ae66441a.js",[17,19],["BtgsrfW5AHg","EwQHXo4aHE0","MhelzSfpGhg","q3o0m4GQ9q0"]],["q-b81fb864.js",[17],["IwHI1WvFgC8","poFPXK4fE4E","X14AN1VxdeA"]],["q-b92b2901.js",[17]],["q-bb8bf90f.js",[17]],["q-bc329d17.js",[13,17,19,24,28],["0M1tb00urf4","CiBRzrTq40U","nIME8ohbypw","Q15KVu8Q91k","xn2yFFVZo2w"]],["q-c80e94da.js",[17]],["q-d5811f1f.js",[6,13,17,24,28],["60Osx0VD3Mc","dlxTpDeyzsg","iPyF7SMXj0o","jEQfRnrf0S4","mNllT1a2WqI"]],["q-d6302ed2.js",[17]],["q-d651a1db.js",[17,24],["zrbrqoaqXSY"]],["q-e4f2712e.js",[17,28],["xYL1qOwPyDI"]],["q-f20eafa8.js",[6,13,17,19,24,28],["2gZ5kKqe2wY","bWDHOmSbAw4","EsmhOfOyEPM","GZFBGnBU0rU","s7vFua003MM"]],["q-f25df8f4.js",[17,24],["AKetNByE5TM"]]];
const libraryBundleIds=[4];
const linkBundles=[[/^\/$/,[18,3,15,30]],[/^\/login\/?$/,[18,3,20,31]],[/^\/profile\/?$/,[18,3,8,7]],[/^\/register\/?$/,[18,3,12,27]],[/^\/wish\/?$/,[18,3,14,25]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());
