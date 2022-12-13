"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[61987],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,m=p["".concat(c,".").concat(g)]||p[g]||l[g]||o;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81456:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u67e5\u770b\u62a5\u544a"},i=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/view-reports",id:"how-to-guides/advanced-user-guides/cis-scan-guides/view-reports",title:"\u67e5\u770b\u62a5\u544a",description:"\u8981\u67e5\u770b\u751f\u6210\u7684 CIS \u626b\u63cf\u62a5\u544a\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/view-reports.md",tags:[],version:"current",lastUpdatedAt:1663080703,formattedLastUpdatedAt:"2022\u5e749\u670813\u65e5",frontMatter:{title:"\u67e5\u770b\u62a5\u544a"},sidebar:"tutorialSidebar",previous:{title:"\u8df3\u8fc7\u6d4b\u8bd5",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/skip-tests"},next:{title:"\u4e3a Rancher CIS Benchmark \u542f\u7528\u544a\u8b66",permalink:"/zh/how-to-guides/advanced-user-guides/cis-scan-guides/enable-alerting-for-rancher-cis-benchmark"}},c={},u=[],d={toc:u};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8981\u67e5\u770b\u751f\u6210\u7684 CIS \u626b\u63cf\u62a5\u544a\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u8fd0\u884c CIS \u626b\u63cf\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"CIS Benchmark > \u626b\u63cf"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u626b\u63cf"),"\u9875\u9762\u5c06\u663e\u793a\u751f\u6210\u7684\u62a5\u544a\u3002\u8981\u67e5\u770b\u8be6\u7ec6\u62a5\u544a\uff0c\u8bf7\u8f6c\u5230\u626b\u63cf\u62a5\u544a\u5e76\u5355\u51fb\u62a5\u544a\u540d\u79f0\u3002")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u626b\u63cf\u5217\u8868\u6216\u626b\u63cf\u8be6\u60c5\u9875\u9762\u4e0b\u8f7d\u62a5\u544a\u3002"))}l.isMDXComponent=!0}}]);