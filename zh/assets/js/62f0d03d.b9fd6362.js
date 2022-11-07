"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20120],{3905:function(t,e,n){n.d(e,{Zo:function(){return g},kt:function(){return u}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),k=d(n),u=r,N=k["".concat(p,".").concat(u)]||k[u]||m[u]||l;return n?a.createElement(N,i(i({ref:e},g),{},{components:n})):a.createElement(N,i({ref:e},g))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},73873:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"\u8fc1\u79fb\u5230 Rancher 2.5 Logging"},p=void 0,d={unversionedId:"integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",id:"integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",title:"\u8fc1\u79fb\u5230 Rancher 2.5 Logging",description:"Rancher 2.5 \u5f7b\u5e95\u4fee\u6539\u4e86 Logging \u529f\u80fd\u3002\u6211\u4eec\u73b0\u5728\u4f7f\u7528\u4e86 Banzai Cloud \u7684 logging operator\uff0cRancher \u914d\u7f6e\u4e86\u6b64\u5de5\u5177\u4ee5\u4f9b\u90e8\u7f72 Logging \u4f7f\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging.md",sourceDirName:"integrations-in-rancher/logging",slug:"/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",permalink:"/zh/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/logging/migrate-to-rancher-v2.5+-logging.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u8fc1\u79fb\u5230 Rancher 2.5 Logging"},sidebar:"tutorialSidebar",previous:{title:"\u67b6\u6784",permalink:"/zh/integrations-in-rancher/logging/logging-architecture"},next:{title:"Logging \u7684 RBAC",permalink:"/zh/integrations-in-rancher/logging/rbac-for-logging"}},g={},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:3},{value:"\u96c6\u7fa4\u65e5\u5fd7",id:"\u96c6\u7fa4\u65e5\u5fd7",level:2},{value:"\u9879\u76ee\u65e5\u5fd7",id:"\u9879\u76ee\u65e5\u5fd7",level:2},{value:"\u8f93\u51fa\u914d\u7f6e",id:"\u8f93\u51fa\u914d\u7f6e",level:2},{value:"Elasticsearch",id:"elasticsearch",level:3},{value:"Splunk",id:"splunk",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Fluentd",id:"fluentd",level:3},{value:"Syslog",id:"syslog",level:3},{value:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5b57\u6bb5",id:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5b57\u6bb5",level:2},{value:"\u7cfb\u7edf\u65e5\u5fd7",id:"\u7cfb\u7edf\u65e5\u5fd7",level:2}],k={toc:m};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rancher 2.5 \u5f7b\u5e95\u4fee\u6539\u4e86 Logging \u529f\u80fd\u3002\u6211\u4eec\u73b0\u5728\u4f7f\u7528\u4e86 Banzai Cloud \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/banzaicloud/logging-operator"},"logging operator"),"\uff0cRancher \u914d\u7f6e\u4e86\u6b64\u5de5\u5177\u4ee5\u4f9b\u90e8\u7f72 Logging \u4f7f\u7528\u3002"),(0,l.kt)("p",null,"\u5728\u65b0\u7684 Logging \u529f\u80fd\u7684\u4f17\u591a\u7279\u6027\u548c\u53d8\u5316\u4e2d\uff0c\u5176\u4e2d\u4e00\u9879\u662f\u53d6\u6d88\u4e86\u9879\u76ee\u7ea7\u522b\u7684 Logging \u914d\u7f6e\u3002\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u5728\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u914d\u7f6e Logging\u3002\u96c6\u7fa4\u7ea7\u65e5\u5fd7\u4ecd\u7136\u53ef\u7528\uff0c\u4f46\u914d\u7f6e\u9009\u9879\u4e0d\u540c\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u8981\u5728 Rancher 2.5+ \u4e2d\u5b89\u88c5 Logging\uff0c\u8bf7\u53c2\u9605",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/logging#%E5%90%AF%E7%94%A8-logging"},"\u5b89\u88c5\u8bf4\u660e"),"\u3002"),(0,l.kt)("h3",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("p",null,"\u5728 Rancher 2.5+ \u4e2d\uff0c\u4f60\u9700\u8981\u5728",(0,l.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u4eea\u8868\u677f"),"\u4e2d\u914d\u7f6e Logging\u3002\u8981\u5728\u5b89\u88c5 Logging \u5e94\u7528\u7a0b\u5e8f\u540e\u914d\u7f6e Logging \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u8bf7\u8f6c\u5230\u5de6\u4fa7\u5bfc\u822a\u680f\u5e76\u5355\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Logging"),"\u3002\u8fd9\u4e2a\u83dc\u5355\u7684\u9009\u9879\u53ef\u4ee5\u914d\u7f6e\u96c6\u7fa4\u548c\u547d\u540d\u7a7a\u95f4\u7684 Logging\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Logging \u662f\u6309\u96c6\u7fa4\u5b89\u88c5\u7684\u3002\u4f60\u5c06\u9700\u8981\u5728\u96c6\u7fa4\u4e4b\u95f4\u5207\u6362\u4ee5\u914d\u7f6e\u6bcf\u4e2a\u96c6\u7fa4\u7684 Logging\u3002"))),(0,l.kt)("p",null,"\u5bf9\u4e8e Rancher 2.5+ \u4e2d\u7684 Logging \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u9700\u8981\u4e86\u89e3\u4ee5\u4e0b\u56db\u4e2a\u5173\u952e\u6982\u5ff5\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Outputs"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," \u662f\u4e00\u79cd\u914d\u7f6e\u8d44\u6e90\uff0c\u7528\u4e8e\u786e\u5b9a\u6536\u96c6\u65e5\u5fd7\u7684\u76ee\u7684\u4f4d\u7f6e\u3002\u8fd9\u662f\u5b58\u50a8 ElasticSearch\u3001Kafka \u7b49\u805a\u5408\u5668\u8bbe\u7f6e\u7684\u5730\u65b9\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," \u662f\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Flows"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," \u662f\u4e00\u79cd\u914d\u7f6e\u8d44\u6e90\uff0c\u7528\u4e8e\u786e\u5b9a\u65e5\u5fd7\u7684\u6536\u96c6\u3001\u8fc7\u6ee4\u548c\u76ee\u6807\u4f4d\u7f6e\u89c4\u5219\u3002\u5728\u4e00\u4e2a Flow \u4e2d\uff0c\u4f60\u9700\u8981\u914d\u7f6e\u8981\u6536\u96c6\u54ea\u4e9b\u65e5\u5fd7\u3001\u5982\u4f55\u6539\u53d8\u6216\u8fc7\u6ee4\u5b83\u4eec\uff0c\u4ee5\u53ca\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u54ea\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," \u662f\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\uff0c\u53ef\u4ee5\u8fde\u63a5\u5230\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ClusterOutputs"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," \u7684\u529f\u80fd\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Outputs")," \u76f8\u540c\uff0c\u4f46 ClusterOutput \u662f\u96c6\u7fa4\u7ea7\u522b\u8d44\u6e90\u3002\u5728\u96c6\u7fa4\u8303\u56f4\u5185\u6536\u96c6\u65e5\u5fd7\u6216\u8981\u4e3a\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u547d\u540d\u7a7a\u95f4\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," \u662f\u5fc5\u9700\u7684\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ClusterFlows"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," \u7684\u529f\u80fd\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," \u76f8\u540c\uff0c\u4f46 ClusterFlow \u662f\u96c6\u7fa4\u7ea7\u522b\u8d44\u6e90\u3002\u5b83\u4eec\u7528\u4e8e\u4e3a\u6574\u4e2a\u96c6\u7fa4\u914d\u7f6e\u65e5\u5fd7\u6536\u96c6\uff0c\u800c\u4e0d\u662f\u5728\u547d\u540d\u7a7a\u95f4\u7ea7\u522b\u8fdb\u884c\u9010\u4e2a\u914d\u7f6e\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlows")," \u4e5f\u662f\u5b9a\u4e49\u6539\u53d8\u548c\u8fc7\u6ee4\u5668\u7684\u5730\u65b9\uff0c\u5728\u529f\u80fd\u4e0a\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"Flows")," \u76f8\u540c\u3002"))),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u65e5\u5fd7"},"\u96c6\u7fa4\u65e5\u5fd7"),(0,l.kt)("p",null,"\u8981\u5728 Rancher 2.5+ \u4e2d\u914d\u7f6e\u96c6\u7fa4\u7ea7\u522b\u7684 Logging\uff0c\u4f60\u9700\u8981\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow"),"\u3002\u6b64\u5bf9\u8c61\u5b9a\u4e49\u4e86\u65e5\u5fd7\u7684\u6765\u6e90\u3001\u8981\u5e94\u7528\u7684\u8f6c\u6362\u6216\u8fc7\u6ee4\u5668\uff0c\u4ee5\u53ca\u65e5\u5fd7\u7684\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5b9a\u4e49\u3002\u5982\u679c\u5728\u5176\u4ed6\u547d\u540d\u7a7a\u95f4\u4e2d\u5b9a\u4e49\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"))),(0,l.kt)("p",null,"\u5728\u65e7\u7248 Logging \u4e2d\uff0c\u5982\u679c\u8981\u6536\u96c6\u6574\u4e2a\u96c6\u7fa4\u7684\u65e5\u5fd7\uff0c\u4f60\u53ea\u9700\u8981\u542f\u7528\u96c6\u7fa4\u7ea7\u522b\u7684 Logging \u5e76\u5b9a\u4e49\u6240\u9700\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002Rancher 2.5+ Logging \u4fdd\u7559\u4e86\u8fd9\u4e2a\u57fa\u672c\u65b9\u6cd5\u3002\u8981\u590d\u5236\u65e7\u7248\u96c6\u7fa4\u7ea7\u522b\u65e5\u5fd7\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e",(0,l.kt)("a",{parentName:"li",href:"#%E8%BE%93%E5%87%BA%E9%85%8D%E7%BD%AE"},"\u8f93\u51fa\u914d\u7f6e"),"\u4e0b\u7684\u8bf4\u660e\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterFlow"),"\uff0c\u786e\u4fdd\u5b83\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"cattle-logging-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u3002",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"li"},"Flow")," \u5b9a\u4e49\u7684\u6240\u6709 ",(0,l.kt)("em",{parentName:"li"},"Include")," \u548c ",(0,l.kt)("em",{parentName:"li"},"Exclude")," \u89c4\u5219\u3002\u8fd9\u5c06\u786e\u4fdd\u80fd\u6536\u96c6\u6240\u6709\u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u4e0d\u914d\u7f6e\u4efb\u4f55\u8fc7\u6ee4\u5668\uff08\u9ed8\u8ba4\u4e0d\u9700\u8981\u521b\u5efa\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4f60\u7684\u96c6\u7fa4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Output"),"\u3002")))),(0,l.kt)("p",null,"\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u96c6\u7fa4\u4e2d\u6240\u6709\u6e90\uff08\u6240\u6709 pod \u548c\u6240\u6709\u7cfb\u7edf\u7ec4\u4ef6\uff09\u4e0a\u6536\u96c6\u7684\u65e5\u5fd7\u90fd\u4f1a\u53d1\u9001\u5230\u5b9a\u4e49\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u5904\u3002"),(0,l.kt)("h2",{id:"\u9879\u76ee\u65e5\u5fd7"},"\u9879\u76ee\u65e5\u5fd7"),(0,l.kt)("p",null,"Rancher 2.5+ Logging \u4e0d\u652f\u6301\u9879\u76ee\u3002\u6362\u8a00\u4e4b\uff0c\u5982\u679c\u8981\u6536\u96c6\u8fd0\u884c\u5728\u9879\u76ee\u547d\u540d\u7a7a\u95f4\u4e2d\u7684 pod \u65e5\u5fd7\uff0c\u4f60\u9700\u8981\u4e3a\u8fd9\u4e9b\u547d\u540d\u7a7a\u95f4\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow"),"\u3002"),(0,l.kt)("p",null,"\u8981\u6536\u96c6\u6307\u5b9a\u547d\u540d\u7a7a\u95f4\u7684\u65e5\u5fd7\uff0c\u8bf7\u6267\u884c\u4ee5\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6839\u636e",(0,l.kt)("a",{parentName:"li",href:"#%E8%BE%93%E5%87%BA%E9%85%8D%E7%BD%AE"},"\u8f93\u51fa\u914d\u7f6e"),"\u4e0b\u7684\u8bf4\u660e\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"li"},"Output")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"Flow"),"\uff0c\u786e\u4fdd\u5b83\u5728\u4f60\u8981\u6536\u96c6\u65e5\u5fd7\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u3002",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u6709\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49 ",(0,l.kt)("em",{parentName:"li"},"Include")," \u6216 ",(0,l.kt)("em",{parentName:"li"},"Exclude")," \u89c4\u5219\u3002\u5982\u679c\u5220\u9664\u6240\u6709\u89c4\u5219\uff0c\u5219\u4f1a\u6536\u96c6\u76ee\u6807\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709 pod \u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u4e0d\u914d\u7f6e\u4efb\u4f55\u8fc7\u6ee4\u5668\uff08\u9ed8\u8ba4\u4e0d\u9700\u8981\u521b\u5efa\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4f60\u7684 Output\uff0c\u53ef\u4ee5\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"ClusterOutput")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"Output")," \u5bf9\u8c61\u3002")))),(0,l.kt)("p",null,"\u64cd\u4f5c\u5b8c\u6210\u540e\uff0c\u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709\u6e90\uff08pod\uff09\u4e0a\u6536\u96c6\u7684\u65e5\u5fd7\u90fd\u4f1a\u53d1\u9001\u5230\u4f60\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," \u4e2d\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u5904\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8981\u6536\u96c6\u9879\u76ee\u4e2d\u7684\u65e5\u5fd7\uff0c\u8bf7\u5728\u9879\u76ee\u4e2d\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u91cd\u590d\u4e0a\u8ff0\u6b65\u9aa4\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u901a\u7528\u6807\u7b7e\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"project=my-project"),"\uff09\u6807\u8bb0\u4f60\u7684\u9879\u76ee\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u6536\u96c6\u5339\u914d\u6b64\u6807\u7b7e\u7684\u6240\u6709 pod \u7684\u65e5\u5fd7\u3002"))),(0,l.kt)("h2",{id:"\u8f93\u51fa\u914d\u7f6e"},"\u8f93\u51fa\u914d\u7f6e"),(0,l.kt)("p",null,"\u65e7\u7248 Logging \u4e2d\u6709\u4e94\u4e2a\u65e5\u5fd7\u76ee\u6807\u4f4d\u7f6e\u53ef\u4f9b\u9009\u62e9\uff0c\u5206\u522b\u662f Elasticsearch\u3001Splunk\u3001Kafka\u3001Fluentd \u548c Syslog\u3002\u9664 Syslog \u5916\uff0c\u8fd9\u4e9b\u76ee\u6807\u4f4d\u7f6e\u90fd\u53ef\u7528\u4e8e 2.5+ Logging\u3002"),(0,l.kt)("h3",{id:"elasticsearch"},"Elasticsearch"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65e7\u7248 Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u610f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7aef\u70b9"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u786e\u4fdd\u6307\u5b9a\u4e86\u534f\u8bae (https/http) \u4ee5\u53ca\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Pack Security -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> User"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Pack Security -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Client Key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Client Cert"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Key Password"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Client Key Pass"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Enabled SSL Verification"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> Certificate Authority File"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")))),(0,l.kt)("p",null,"\u5728\u65e7\u7248 Logging \u4e2d\uff0c\u7d22\u5f15\u662f\u6839\u636e\u201c\u7d22\u5f15\u6a21\u5f0f\u201d\u4e2d\u7684\u683c\u5f0f\u81ea\u52a8\u521b\u5efa\u7684\u3002\u5728 2.5 Logging \u4e2d\uff0c\u9ed8\u8ba4\u7684\u64cd\u4f5c\u5df2\u66f4\u6539\u4e3a\u8bb0\u5f55\u5355\u4e2a\u7d22\u5f15\u3002\u4f60\u4ecd\u7136\u53ef\u4ee5\u7f16\u8f91 YAML \u5e76\u8f93\u5165\u4ee5\u4e0b\u503c\uff0c\u4ece\u800c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u5bf9\u8c61\u4e0a\u914d\u7f6e\u7d22\u5f15\u6a21\u5f0f\u529f\u80fd\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  elasticsearch:\n    ...\n    logstash_format: true\n    logstash_prefix: <desired prefix>\n    logstash_dateformat: "%Y-%m-%d"\n')),(0,l.kt)("p",null,"\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"<desired prefix>")," \u66ff\u6362\u4e3a\u8981\u521b\u5efa\u7684\u7d22\u5f15\u7684\u524d\u7f00\u3002\u5728\u65e7\u7248 Logging \u4e2d\uff0c\u9ed8\u8ba4\u503c\u662f\u96c6\u7fa4\u7684\u540d\u79f0\u3002"),(0,l.kt)("h3",{id:"splunk"},"Splunk"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65e7\u7248 Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u610f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Host"),(0,l.kt)("td",{parentName:"tr",align:null},"\u534f\u8bae\uff08https/http\uff09\u548c\u7aef\u53e3\u5fc5\u987b\u4e0e\u4e3b\u673a\u5206\u5f00\u5b9a\u4e49\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Token"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Token"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4ee4\u724c\u5fc5\u987b\u4f5c\u4e3a\u5bc6\u6587\u5b58\u50a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Index"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"index")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"index")," \u5b57\u6bb5\u5fc5\u987b\u4f5c\u4e3a YAML \u952e\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec")," \u4e0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HEC Configuration -> Source"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"source")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"source")," \u5b57\u6bb5\u5fc5\u987b\u4f5c\u4e3a YAML \u952e\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec")," \u4e0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"client_key")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"client_key")," \u5b57\u6bb5\u5fc5\u987b\u4f5c\u4e3a YAML \u952e\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec")," \u4e0b\u3002\u8be6\u89c1\uff081\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"client_cert")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"client_cert")," \u5b57\u6bb5\u5fc5\u987b\u4f5c\u4e3a YAML \u952e\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec")," \u4e0b\u3002\u8be6\u89c1\uff081\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Key Password"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Not Supported")),(0,l.kt)("td",{parentName:"tr",align:null},"\u73b0\u5728\u4e0d\u652f\u6301\u4e3a\u5ba2\u6237\u7aef\u79c1\u94a5\u6307\u5b9a\u5bc6\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> SSL Verify"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"ca_file")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"ca_path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ca_file")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"td"},"ca_path")," \u5b57\u6bb5\u5fc5\u987b\u4f5c\u4e3a YAML \u952e\u6dfb\u52a0\u5230 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.splunkHec")," \u4e0b\u3002\u8be6\u89c1\uff082\uff09\u3002")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(1) ",(0,l.kt)("inlineCode",{parentName:"em"},"client_key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"em"},"client_cert")," \u7684\u503c\u5fc5\u987b\u5206\u522b\u662f\u5bc6\u94a5\u548c\u8bc1\u4e66\u6587\u4ef6\u7684\u8def\u5f84\u3002\u8fd9\u4e9b\u6587\u4ef6\u5fc5\u987b\u6302\u8f7d\u5230 ",(0,l.kt)("inlineCode",{parentName:"em"},"rancher-logging-fluentd")," pod \u4e2d\u624d\u80fd\u4f7f\u7528"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(2) \u7528\u6237\u53ef\u4ee5\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"em"},"ca_file"),"\uff08PEM \u7f16\u7801\u7684 CA \u8bc1\u4e66\u7684\u8def\u5f84\uff09\u6216 ",(0,l.kt)("inlineCode",{parentName:"em"},"ca_path"),"\uff08\u5305\u542b PEM \u683c\u5f0f\u7684 CA \u8bc1\u4e66\u7684\u76ee\u5f55\u8def\u5f84\uff09\u3002\u8fd9\u4e9b\u6587\u4ef6\u5fc5\u987b\u6302\u8f7d\u5230 ",(0,l.kt)("inlineCode",{parentName:"em"},"rancher-logging-fluentd")," pod \u4e2d\u624d\u80fd\u4f7f\u7528"),"\u3002"),(0,l.kt)("h3",{id:"kafka"},"Kafka"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65e7\u7248 Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u610f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka Configuration -> Endpoint Type"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u518d\u652f\u6301\u5c06 Zookeeper \u4f5c\u4e3a\u7aef\u70b9\u7c7b\u578b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka Configuration -> Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Brokers"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9017\u53f7\u5206\u9694\u7684 Broker \u5217\u8868\uff08host:port\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Kafka Configuration -> Topic"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Default Topic"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> SSL Client Cert"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u5fc5\u987b\u4f5c\u4e3a\u5bc6\u6587\u5b58\u50a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> SSL Client Cert Key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5\u5fc5\u987b\u4f5c\u4e3a\u5bc6\u6587\u5b58\u50a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> CA Certificate PEM"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL -> SSL CA Cert"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bc1\u4e66\u5fc5\u987b\u4f5c\u4e3a\u5bc6\u6587\u5b58\u50a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SASL Configuration -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SASL Configuration -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u5fc5\u987b\u5b58\u50a8\u5728\u5bc6\u6587\u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SASL Configuration -> Scram Mechanism"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Scram Mechanism"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u673a\u5236\u4e3a\u5b57\u7b26\u4e32\uff0c\u4f8b\u5982\u201csha256\u201d\u6216\u201csha512\u201d\u3002")))),(0,l.kt)("h3",{id:"fluentd"},"Fluentd"),(0,l.kt)("p",null,"v2.5.2 \u5f00\u59cb\u53ea\u652f\u6301\u4f7f\u7528\u201c\u4ee5\u8868\u5355\u7f16\u8f91\u201d\u9009\u9879\u6765\u6dfb\u52a0\u5355\u4e2a Fluentd \u670d\u52a1\u5668\u3002\u8981\u6dfb\u52a0\u591a\u4e2a\u670d\u52a1\u5668\uff0c\u8bf7\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u7f16\u8f91\u4e3a YAML \u5e76\u8f93\u5165\u591a\u4e2a\u670d\u52a1\u5668\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u65e7\u7248 Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"2.5+ Logging"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6ce8\u610f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"Target -> Host, Port"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5206\u522b\u8f93\u5165\u4e3b\u673a\u548c\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Shared Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Shared Key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5171\u4eab\u5bc6\u94a5\u5fc5\u987b\u5b58\u50a8\u4e3a\u5bc6\u6587\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Username"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u5fc5\u987b\u5b58\u50a8\u4e3a\u5bc6\u6587\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Access -> Password"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801\u5fc5\u987b\u5b58\u50a8\u4e3a\u5bc6\u6587\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Hostname"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"host")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"host")," \u5b57\u6bb5\u4f5c\u4e3a YAML \u952e\u8bbe\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward.servers[n]"),"\u4e0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fluentd Configuration -> Weight"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"weight")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"weight")," \u5b57\u6bb5\u4f5c\u4e3a YAML \u952e\u8bbe\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward.servers[n]"),"\u4e0b\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Use TLS"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u9700\u8981\u663e\u5f0f\u542f\u7528\u3002\u5b9a\u4e49\u5ba2\u6237\u7aef\u8bc1\u4e66\u5b57\u6bb5\u5373\u53ef\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Private Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_private_key_path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward")," \u4e0b\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e3a YAML \u952e\u3002\u8be6\u89c1\uff081\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Certificate"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_client_cert_path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward")," \u4e0b\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e3a YAML \u952e\u3002\u8be6\u89c1\uff081\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> Client Key Password"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_client_private_key_passphrase")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward")," \u4e0b\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e3a YAML \u952e\u3002\u8be6\u89c1\uff081\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> SSL Verify"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_insecure_mode")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward")," \u4e0b\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e3a YAML \u952e\u3002\u9ed8\u8ba4\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SSL Configuration -> CA Certificate PEM"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit as YAML -> ",(0,l.kt)("inlineCode",{parentName:"td"},"tls_cert_path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"spec.forward")," \u4e0b\u7684\u5b57\u6bb5\u8bbe\u7f6e\u4e3a YAML \u952e\u3002\u8be6\u89c1\uff081\uff09\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Gzip Compression"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"2.5+ Logging \u4e0d\u518d\u652f\u6301\u3002")))),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(1) \u8fd9\u4e9b\u503c\u5c06\u88ab\u6307\u5b9a\u4e3a\u6587\u4ef6\u7684\u8def\u5f84\u3002\u8fd9\u4e9b\u6587\u4ef6\u5fc5\u987b\u6302\u8f7d\u5230 ",(0,l.kt)("inlineCode",{parentName:"em"},"rancher-logging-fluentd")," pod \u4e2d\u624d\u80fd\u4f7f\u7528\u3002")),(0,l.kt)("h3",{id:"syslog"},"Syslog"),(0,l.kt)("p",null,"\u4ece v2.5.2 \u5f00\u59cb\uff0c\u4f7f\u7528 2.5+ Logging \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Output")," \u4e0d\u652f\u6301 syslog\u3002"),(0,l.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5b57\u6bb5"},"\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5b57\u6bb5"),(0,l.kt)("p",null,"\u8981\u6dfb\u52a0\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5b57\u6bb5\uff0c\u4f60\u9700\u8981\u5c06\u4ee5\u4e0b YAML \u6dfb\u52a0\u5230\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Flow")," \u914d\u7f6e\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'...\nspec:\n  filters:\n    - record_modifier:\n        records:\n        - foo: "bar"\n')),(0,l.kt)("p",null,"\uff08\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},'foo: "bar"')," \u66ff\u6362\u4e3a\u8981\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49\u65e5\u5fd7\u5b57\u6bb5\uff09"),(0,l.kt)("h2",{id:"\u7cfb\u7edf\u65e5\u5fd7"},"\u7cfb\u7edf\u65e5\u5fd7"),(0,l.kt)("p",null,"\u5728\u65e7\u7248 Logging \u4e2d\uff0c\u4f60\u9700\u8981\u5728\u8bbe\u7f6e\u96c6\u7fa4 Logging \u65f6\u9009\u4e2d\u201c\u5305\u62ec\u7cfb\u7edf\u65e5\u5fd7\u201d\u6765\u6536\u96c6\u7cfb\u7edf\u7ec4\u4ef6\u7684\u65e5\u5fd7\u3002\u5728 v2.5+ Logging \u4e2d\uff0c\u7cfb\u7edf\u65e5\u5fd7\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u4e4b\u4e00\u6765\u6536\u96c6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6536\u96c6\u6240\u6709\u96c6\u7fa4\u65e5\u5fd7\uff0c\u4e0d\u6307\u5b9a\u4efb\u4f55\u5339\u914d\u6216\u6392\u9664\u89c4\u5219\u3002\u8be5\u8bbe\u7f6e\u4f1a\u6536\u96c6\u96c6\u7fa4\u6240\u6709\u5bb9\u5668\u7684\u65e5\u5fd7\uff0c\u5176\u4e2d\u5305\u62ec\u7cfb\u7edf\u65e5\u5fd7\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u4e3a\u7cfb\u7edf\u7ec4\u4ef6\u6dfb\u52a0\u5339\u914d\u89c4\u5219\u6765\u4e13\u95e8\u6536\u96c6\u7cfb\u7edf\u65e5\u5fd7\u3002\u8981\u6536\u96c6\u7684\u7ec4\u4ef6\u51b3\u5b9a\u4e86\u5177\u4f53\u7684\u5339\u914d\u89c4\u5219\u3002")))}u.isMDXComponent=!0}}]);