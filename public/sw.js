if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-26301d2903c17590.js",revision:"26301d2903c17590"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-6b59a9a8ee2d6a39.js",revision:"6b59a9a8ee2d6a39"},{url:"/_next/static/chunks/pages/_app-f186339e60ad1de3.js",revision:"f186339e60ad1de3"},{url:"/_next/static/chunks/pages/_error-08a9db0f433628d8.js",revision:"08a9db0f433628d8"},{url:"/_next/static/chunks/pages/categories/%5Bcategory%5D-d7c73e4a04ec766a.js",revision:"d7c73e4a04ec766a"},{url:"/_next/static/chunks/pages/denyaccess-79a3588030020fb7.js",revision:"79a3588030020fb7"},{url:"/_next/static/chunks/pages/index-52212cd54250cbf1.js",revision:"52212cd54250cbf1"},{url:"/_next/static/chunks/pages/login-8b2c6491a868ebe4.js",revision:"8b2c6491a868ebe4"},{url:"/_next/static/chunks/pages/search-a0b377e1df70718c.js",revision:"a0b377e1df70718c"},{url:"/_next/static/chunks/pages/search/%5Bsearch%5D-e8ca11d894821276.js",revision:"e8ca11d894821276"},{url:"/_next/static/chunks/pages/settings-1b53c0ae84616dc8.js",revision:"1b53c0ae84616dc8"},{url:"/_next/static/chunks/pages/test-434adba7a322d59e.js",revision:"434adba7a322d59e"},{url:"/_next/static/chunks/pages/test1-757030c8c7a1286f.js",revision:"757030c8c7a1286f"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-fd8027ecb5121007.js",revision:"fd8027ecb5121007"},{url:"/_next/static/css/6a4cab4f35428801.css",revision:"6a4cab4f35428801"},{url:"/_next/static/lDbh_p0IgeQULFwT8XZvj/_buildManifest.js",revision:"0189c0990d2304e05aa083b6614a3012"},{url:"/_next/static/lDbh_p0IgeQULFwT8XZvj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon.png",revision:"d6f2cad44aeadb4ebc42d4fcc4584f13"},{url:"/icon-192x192.png",revision:"990b5b806390466371f948e29bee0a7e"},{url:"/icon-256x256.png",revision:"f61d472bfa57e231535db72cfd677291"},{url:"/icon-384x384.png",revision:"17cf436963f1c73fe94612d7790b9d23"},{url:"/icon-512x512.png",revision:"5363abed57a72cea402c3610e6f8035e"},{url:"/logo.png",revision:"a16d40b3fddcf16979c1ed41451debe2"},{url:"/manifest.json",revision:"52579801642706f965244142710b3880"},{url:"/newspaper-152320_640.png",revision:"8ba06662832e85c3c7216c2c215cbda8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/spinner.svg",revision:"6217dbca441f4f28f90729dcea207a86"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
