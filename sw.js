if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,c)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}}))).then((e=>{const s=c(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-1ee70660"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_dist_/App.js",revision:"fa14e9cf09fa6e46284372bfb94e4852"},{url:"_dist_/components/Choose.js",revision:"58e2c239a4d3e07ff2013bedb3e922bf"},{url:"_dist_/components/Device.js",revision:"543bfa1528337247119a3a959cf28379"},{url:"_dist_/components/Title.js",revision:"b7c7196be3fbbfe5f24800b699ed6c7c"},{url:"_dist_/index.js",revision:"a63baa7f6805f090e168a4c0a495b862"},{url:"_dist_/irdb.js",revision:"8fd477bf70a07a1b85ded2bb832ccdff"},{url:"_dist_/wasm/EncodeIR.js",revision:"bc3eaa5e8712045767dd76e23e78e81d"},{url:"_snowpack/pkg/common/_commonjsHelpers-eb5a497e.js",revision:"7565eaf1d1bd054fa664bd5b46f90321"},{url:"_snowpack/pkg/common/index-c277be94.js",revision:"d3b6fb170653e3b49027b0c82ea4cf9e"},{url:"_snowpack/pkg/import-map.json",revision:"d4a03573f9ed507d036f375093af9d11"},{url:"_snowpack/pkg/papaparse.js",revision:"5786cac6a8f53411b54d78a151cc8ec2"},{url:"_snowpack/pkg/react-dom.js",revision:"e07a427dc6270b01ce62ee208d846e02"},{url:"_snowpack/pkg/react-icons/fa.js",revision:"80ed50871e2e06a444e5df8da7132ad3"},{url:"_snowpack/pkg/react.js",revision:"d668d741df2f91d618465b2113d271b6"},{url:"index.html",revision:"f24ed7de77e86bee545e9e8c1c3c5e62"},{url:"js/index.4822ff83bebe2ca1baf8.js",revision:"a140236c8c7186ffbe92ecb4f6e1293b"},{url:"js/lib-react-dom.cca013a05a4b9a74bb4c.js",revision:"ff4196d5f808204c254f6a1ea1b361fe"},{url:"js/webpack-runtime.52cb85f317a0c615e8c0.js",revision:"684c75839ee8d90ef4a5591d90dc0f71"}],{}),e.registerRoute(/cdn\.jsdelivr\.net/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
