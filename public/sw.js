if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),d={module:{uri:c},exports:t,require:r};a[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Imgespeople.jpg",revision:"6f4510a00e9dded88e786b48cdd9632c"},{url:"/Transfer.jpg",revision:"85b9d939dec740c81290d6a370f24f31"},{url:"/_next/static/OkmpoSfsEj7NT7OpFin2q/_buildManifest.js",revision:"b36ac7c99a9645ef8bdd023cde24dec8"},{url:"/_next/static/OkmpoSfsEj7NT7OpFin2q/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/325-147f485df642eb45.js",revision:"147f485df642eb45"},{url:"/_next/static/chunks/664-3a78f5659c3c6145.js",revision:"3a78f5659c3c6145"},{url:"/_next/static/chunks/675-ca33a57d0d06f583.js",revision:"ca33a57d0d06f583"},{url:"/_next/static/chunks/7112840a-7db5d597cd426e86.js",revision:"7db5d597cd426e86"},{url:"/_next/static/chunks/996-56cef70347337933.js",revision:"56cef70347337933"},{url:"/_next/static/chunks/framework-cda2f1305c3d9424.js",revision:"cda2f1305c3d9424"},{url:"/_next/static/chunks/main-600fa11833beda85.js",revision:"600fa11833beda85"},{url:"/_next/static/chunks/pages/Balance-d854f5893cced358.js",revision:"d854f5893cced358"},{url:"/_next/static/chunks/pages/Bill-43ecda1eda5ed29b.js",revision:"43ecda1eda5ed29b"},{url:"/_next/static/chunks/pages/History-f0a04573533e78c8.js",revision:"f0a04573533e78c8"},{url:"/_next/static/chunks/pages/Homepage-e446292c27768283.js",revision:"e446292c27768283"},{url:"/_next/static/chunks/pages/Profile-c2e3a09f8e7c7eef.js",revision:"c2e3a09f8e7c7eef"},{url:"/_next/static/chunks/pages/Setting-0d61565635d57598.js",revision:"0d61565635d57598"},{url:"/_next/static/chunks/pages/SettingA-528770decc9a5289.js",revision:"528770decc9a5289"},{url:"/_next/static/chunks/pages/TransferBank-d036b30559c1cfd4.js",revision:"d036b30559c1cfd4"},{url:"/_next/static/chunks/pages/TransferBill-f67d43bf2554c30c.js",revision:"f67d43bf2554c30c"},{url:"/_next/static/chunks/pages/TransferConfirm-7daa2a128f68d21f.js",revision:"7daa2a128f68d21f"},{url:"/_next/static/chunks/pages/TransferLimit-b16c6b1d0ba81406.js",revision:"b16c6b1d0ba81406"},{url:"/_next/static/chunks/pages/TransferMoney-19f757d643f68425.js",revision:"19f757d643f68425"},{url:"/_next/static/chunks/pages/_app-d04cf9e8e5587e37.js",revision:"d04cf9e8e5587e37"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/dashboard-52c4a533f3459f4b.js",revision:"52c4a533f3459f4b"},{url:"/_next/static/chunks/pages/firebase-a2549160a8f7b2cc.js",revision:"a2549160a8f7b2cc"},{url:"/_next/static/chunks/pages/index-de733c9956a5209e.js",revision:"de733c9956a5209e"},{url:"/_next/static/chunks/pages/pinScreen-3a8f559ae8a873ca.js",revision:"3a8f559ae8a873ca"},{url:"/_next/static/chunks/pages/qr_page-74d5ffc5167ef4d8.js",revision:"74d5ffc5167ef4d8"},{url:"/_next/static/chunks/pages/transfer-273c8a4949099390.js",revision:"273c8a4949099390"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/3e2eed85605c67d3.css",revision:"3e2eed85605c67d3"},{url:"/_next/static/media/Imgespeople.b32bbe6d.jpg",revision:"6f4510a00e9dded88e786b48cdd9632c"},{url:"/_next/static/media/Transfer.2f65c5ca.jpg",revision:"85b9d939dec740c81290d6a370f24f31"},{url:"/_next/static/media/card.f7c01681.jpg",revision:"e48ba0e5897e5daae37ed42a510766a2"},{url:"/_next/static/media/fav.0b2d39c5.png",revision:"9b0f52ad060ca747a4643c99444b7392"},{url:"/_next/static/media/found.c4ad9341.png",revision:"43964b660c1959b86307f1a7d1faea4e"},{url:"/_next/static/media/insec.7eafdd72.jpg",revision:"31d5ac163805b41e99a23eb287a76aad"},{url:"/_next/static/media/kbank-icon.485e0dfa.png",revision:"25f14c76dadefb34d437fa1a9772ca8a"},{url:"/_next/static/media/krungsri.289fb47b.png",revision:"a9ff9f8b6c4a572b73f88e22e66ce4f9"},{url:"/_next/static/media/krungthai.583dffab.png",revision:"4fcd53d44bab2516a90a8c2155f6c4a0"},{url:"/_next/static/media/lot.8cfdcf09.jpg",revision:"4d38753f49660dc9a0aaba110378c89c"},{url:"/_next/static/media/love.cc958a85.png",revision:"f0dcae6de1d0b0eb3df0d61282361d06"},{url:"/_next/static/media/other.a98814ee.jpg",revision:"47c1834c0bf106ff51d5479346fcf965"},{url:"/_next/static/media/scan.f2e8c315.png",revision:"db881d5bd6a5f6ce5806ef7ba92a4e2c"},{url:"/_next/static/media/scb.868113e6.jpg",revision:"e053292133dde2985c3b79bc9310b86e"},{url:"/_next/static/media/water.72e6c491.jpg",revision:"590d00d27eda3a2aaa3fb329157bddbf"},{url:"/_next/static/media/withdraw.c04b6a86.png",revision:"7f994cf9803a5cd9c6ef18537630b001"},{url:"/_next/static/media/zenitsu.77560288.jpg",revision:"47b35681ed68135ade19275a660eeee8"},{url:"/card.jpg",revision:"e48ba0e5897e5daae37ed42a510766a2"},{url:"/fav.png",revision:"9b0f52ad060ca747a4643c99444b7392"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/found.png",revision:"43964b660c1959b86307f1a7d1faea4e"},{url:"/insec.jpg",revision:"31d5ac163805b41e99a23eb287a76aad"},{url:"/kbank-icon.png",revision:"25f14c76dadefb34d437fa1a9772ca8a"},{url:"/krungsri.png",revision:"a9ff9f8b6c4a572b73f88e22e66ce4f9"},{url:"/krungthai.png",revision:"4fcd53d44bab2516a90a8c2155f6c4a0"},{url:"/logo.png",revision:"96246f9289d5263567747f7ddf952cc2"},{url:"/lot.jpg",revision:"4d38753f49660dc9a0aaba110378c89c"},{url:"/love.png",revision:"f0dcae6de1d0b0eb3df0d61282361d06"},{url:"/manifest.json",revision:"bce294e2d5c002682f875b4776ec4933"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/other.jpg",revision:"47c1834c0bf106ff51d5479346fcf965"},{url:"/scan.png",revision:"db881d5bd6a5f6ce5806ef7ba92a4e2c"},{url:"/scb.jpg",revision:"e053292133dde2985c3b79bc9310b86e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/water.jpg",revision:"590d00d27eda3a2aaa3fb329157bddbf"},{url:"/withdraw.png",revision:"7f994cf9803a5cd9c6ef18537630b001"},{url:"/zenitsu.jpg",revision:"47b35681ed68135ade19275a660eeee8"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));