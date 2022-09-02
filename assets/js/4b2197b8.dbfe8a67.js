"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66418],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<c;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},46018:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var r=t(87462),a=t(63366),c=(t(67294),t(3905)),i=["components"],o={title:"Uninstall Rancher CIS Benchmark",weight:2},s=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",id:"how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",title:"Uninstall Rancher CIS Benchmark",description:"1. From the Cluster Dashboard, go to the left navigation bar and click Apps & Marketplace > Installed Apps.",source:"@site/docs/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark.md",sourceDirName:"how-to-guides/advanced-user-guides/cis-scan-guides",slug:"/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",permalink:"/docs/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/cis-scan-guides/uninstall-rancher-cis-benchmark.md",tags:[],version:"current",lastUpdatedAt:1662128012,formattedLastUpdatedAt:"9/2/2022",frontMatter:{title:"Uninstall Rancher CIS Benchmark",weight:2},sidebar:"tutorialSidebar",previous:{title:"Install Rancher CIS Benchmark",permalink:"/docs/how-to-guides/advanced-user-guides/cis-scan-guides/install-rancher-cis-benchmark"},next:{title:"Run a Scan",permalink:"/docs/how-to-guides/advanced-user-guides/cis-scan-guides/run-a-scan"}},u={},d=[],p={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"From the ",(0,c.kt)("strong",{parentName:"li"},"Cluster Dashboard,")," go to the left navigation bar and click ",(0,c.kt)("strong",{parentName:"li"},"Apps & Marketplace > Installed Apps"),"."),(0,c.kt)("li",{parentName:"ol"},"Go to the ",(0,c.kt)("inlineCode",{parentName:"li"},"cis-operator-system")," namespace and check the boxes next to ",(0,c.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark-crd")," and ",(0,c.kt)("inlineCode",{parentName:"li"},"rancher-cis-benchmark"),"."),(0,c.kt)("li",{parentName:"ol"},"Click ",(0,c.kt)("strong",{parentName:"li"},"Delete")," and confirm ",(0,c.kt)("strong",{parentName:"li"},"Delete"),".")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"Result:")," The ",(0,c.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application is uninstalled."))}m.isMDXComponent=!0}}]);