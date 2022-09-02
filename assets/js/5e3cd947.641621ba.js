"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[98566],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return g}});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),c=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return a.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=n,f=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return t?a.createElement(f,i(i({ref:r},l),{},{components:t})):a.createElement(f,i({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59573:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(87462),n=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"Deploying Rancher Server",weight:100},u=void 0,c={unversionedId:"pages-for-subheaders/deploy-rancher-manager",id:"pages-for-subheaders/deploy-rancher-manager",title:"Deploying Rancher Server",description:"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster in the provider of your choice.",source:"@site/docs/pages-for-subheaders/deploy-rancher-manager.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/deploy-rancher-manager",permalink:"/docs/pages-for-subheaders/deploy-rancher-manager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/deploy-rancher-manager.md",tags:[],version:"current",lastUpdatedAt:1660752881,formattedLastUpdatedAt:"8/17/2022",frontMatter:{title:"Deploying Rancher Server",weight:100},sidebar:"tutorialSidebar",previous:{title:"Rancher Deployment Quick Start Guides",permalink:"/docs/pages-for-subheaders/quick-start-guides"},next:{title:"Rancher AWS Quick Start Guide",permalink:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/aws"}},l={},p=[],d={toc:p};function g(e){var r=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster in the provider of your choice."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/aws"},"AWS")," (uses Terraform)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},"AWS Marketplace")," (uses Amazon EKS)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/azure"},"Azure")," (uses Terraform)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},"DigitalOcean")," (uses Terraform)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},"GCP")," (uses Terraform)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},"Hetzner Cloud")," (uses Terraform)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},"Vagrant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},"Equinix Metal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"},"Outscale")," (uses Terraform)")),(0,o.kt)("p",null,"If you prefer, the following guide will take you through the same process in individual steps. Use this if you want to run Rancher in a different provider, on prem, or if you would just like to see how easy it is."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"Manual Install"))))}g.isMDXComponent=!0}}]);