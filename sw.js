if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>s(e,c),t={module:{uri:c},exports:o,require:d};i[c]=Promise.all(n.map((e=>t[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b632edce"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"dexie.min.js",revision:"b13495b45cc618ff99998f1aacddc632"},{url:"index.css",revision:"c74f669b661e7635ef6b86defcda2c13"},{url:"index.html",revision:"0d0ec645ff5c0cacfa525499299e7766"},{url:"index.js",revision:"d7db59913ed2c8fd53a20e67863a576d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
