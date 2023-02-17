"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(p,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"Flows \u548c ClusterFlows"},l=void 0,i={unversionedId:"integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",id:"version-2.6/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",title:"Flows \u548c ClusterFlows",description:"\u6709\u5173\u5982\u4f55\u914d\u7f6e Flow \u548c ClusterFlow \u7684\u5b8c\u6574\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 Banzai Cloud Logging Operator \u6587\u6863\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",sourceDirName:"integrations-in-rancher/logging/custom-resource-configuration",slug:"/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",permalink:"/zh/v2.6/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows.md",tags:[],version:"2.6",lastUpdatedAt:1676523322,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{title:"Flows \u548c ClusterFlows"},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e",permalink:"/zh/v2.6/pages-for-subheaders/custom-resource-configuration"},next:{title:"Outputs \u548c ClusterOutputs",permalink:"/zh/v2.6/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs"}},p={},u=[{value:"Flows",id:"flows",level:2},{value:"Matches",id:"matches",level:3},{value:"Filters",id:"filters",level:3},{value:"Outputs",id:"outputs",level:3},{value:"ClusterFlows",id:"clusterflows",level:2},{value:"YAML \u793a\u4f8b",id:"yaml-\u793a\u4f8b",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6709\u5173\u5982\u4f55\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u7684\u5b8c\u6574\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/flow/"},"Banzai Cloud Logging Operator \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u5982\u4f55\u89e3\u51b3 Logging \u7f13\u51b2\u533a\u7684\u5185\u5b58\u95ee\u9898\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/logging#%E6%97%A5%E5%BF%97%E7%BC%93%E5%86%B2%E5%8C%BA%E5%AF%BC%E8%87%B4-pod-%E8%BF%87%E8%BD%BD"},"Rancher \u4e0e Logging \u670d\u52a1\u7684\u96c6\u6210\uff1a\u6545\u969c\u6392\u9664"),"\u3002"),(0,o.kt)("h2",{id:"flows"},"Flows"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u5b9a\u4e49\u8981\u6536\u96c6\u548c\u8fc7\u6ee4\u54ea\u4e9b\u65e5\u5fd7\uff0c\u4ee5\u53ca\u5c06\u65e5\u5fd7\u53d1\u9001\u5230\u54ea\u4e2a Output\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u662f\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\u3002\u6362\u8a00\u4e4b\uff0c\u53ea\u6709\u90e8\u7f72\u4e86\u8be5 Flow \u7684\u547d\u540d\u7a7a\u95f4\u65e5\u5fd7\u624d\u80fd\u88ab ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u6536\u96c6\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 Rancher UI \u4e2d\u586b\u5199\u8868\u5355\u6765\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow"),"\u3002"),(0,o.kt)("p",null,"\u6709\u5173 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u81ea\u5b9a\u4e49\u8d44\u6e90\u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/crds/v1beta1/flow_types/"},"FlowSpec"),"\u3002"),(0,o.kt)("h3",{id:"matches"},"Matches"),(0,o.kt)("p",null,"\u5339\u914d\u8bed\u53e5\u7528\u4e8e\u9009\u62e9\u4ece\u54ea\u4e9b\u5bb9\u5668\u4e2d\u62c9\u53d6\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u6307\u5b9a match \u8bed\u53e5\uff0c\u7136\u540e\u6839\u636e Kubernetes \u6807\u7b7e\u3001\u5bb9\u5668\u548c\u4e3b\u673a\u540d\u6765\u9009\u62e9\u6216\u6392\u9664\u65e5\u5fd7\u3002\u5339\u914d\u8bed\u53e5\u4f1a\u6309\u7167\u5b9a\u4e49\u548c\u5904\u7406\u7684\u987a\u5e8f\u8fdb\u884c\u8bc4\u4f30\uff0c\u76f4\u5230\u5e94\u7528\u4e86\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u9009\u62e9/\u6392\u9664\u89c4\u5219\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u586b\u5199 Rancher UI \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u8868\u5355\u6765\u914d\u7f6e\u5339\u914d\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 match \u8bed\u53e5\u7684\u8be6\u7ec6\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/log-routing/"},"\u65e5\u5fd7\u8def\u7531\u7684\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("h3",{id:"filters"},"Filters"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u4e2d\u5b9a\u4e49\u4e00\u4e2a\u6216\u591a\u4e2a\u8fc7\u6ee4\u5668\u3002\u8fc7\u6ee4\u5668\u53ef\u4ee5\u5bf9\u65e5\u5fd7\u6267\u884c\u5404\u79cd\u64cd\u4f5c\uff0c\u4f8b\u5982\uff0c\u6dfb\u52a0\u5176\u4ed6\u6570\u636e\u3001\u8f6c\u6362\u65e5\u5fd7\u6216\u89e3\u6790\u8bb0\u5f55\u4e2d\u7684\u503c\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u4e2d\u7684\u8fc7\u6ee4\u5668\u4f1a\u6309\u5b9a\u4e49\u7684\u987a\u5e8f\u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u6709\u5173 Banzai Cloud Logging Operator \u652f\u6301\u7684\u8fc7\u6ee4\u5668\u5217\u8868\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://banzaicloud.com/docs/one-eye/logging-operator/configuration/plugins/filters/"},"\u6b64\u9875\u9762"),"\u3002"),(0,o.kt)("p",null,"\u8fc7\u6ee4\u5668\u9700\u8981\u5728 YAML \u4e2d\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"outputs"},"Outputs"),(0,o.kt)("p",null,"\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," \u4f1a\u63a5\u6536\u6765\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u7684\u65e5\u5fd7\u3002\u7531\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u662f\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\u8d44\u6e90\uff0c\u56e0\u6b64 ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," \u5fc5\u987b\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u4f4d\u4e8e\u76f8\u540c\u7684\u547d\u540d\u7a7a\u95f4\u4e2d\u3002"),(0,o.kt)("p",null,"\u5728 Rancher UI \u4e2d\u586b\u5199 ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u8868\u5355\u65f6\uff0c\u4f60\u53ef\u4ee5\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Output"),"\u3002"),(0,o.kt)("h2",{id:"clusterflows"},"ClusterFlows"),(0,o.kt)("p",null,"\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u914d\u7f6e\u5339\u914d\u3001\u8fc7\u6ee4\u5668\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," \u7684\u65b9\u5f0f\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u7684\u914d\u7f6e\u65b9\u5f0f\u76f8\u540c\u3002\u4e3b\u8981\u533a\u522b\u5728\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u662f\u96c6\u7fa4\u7ea7\u522b\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u8de8\u6240\u6709\u547d\u540d\u7a7a\u95f4\u914d\u7f6e\u65e5\u5fd7\u6536\u96c6\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728 Rancher UI \u4e2d\u586b\u5199\u8868\u5355\u6765\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," \u9009\u62e9\u96c6\u7fa4\u4e2d\u6240\u6709\u547d\u540d\u7a7a\u95f4\u7684\u65e5\u5fd7\u540e\uff0c\u96c6\u7fa4\u7684\u65e5\u5fd7\u4f1a\u88ab\u6536\u96c6\u5e76\u8bb0\u5f55\u5230\u6240\u9009\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"\u3002"),(0,o.kt)("h2",{id:"yaml-\u793a\u4f8b"},"YAML \u793a\u4f8b"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," \u8f6c\u6362\u4e86\u9ed8\u8ba4\u547d\u540d\u7a7a\u95f4\u7684\u65e5\u5fd7\u6d88\u606f\uff0c\u5e76\u5c06\u65e5\u5fd7\u53d1\u9001\u5230 S3 ",(0,o.kt)("inlineCode",{parentName:"p"},"Output"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: flow-sample\n  namespace: default\nspec:\n  filters:\n    - parser:\n        remove_key_name_field: true\n        parse:\n          type: nginx\n    - tag_normaliser:\n        format: ${namespace_name}.${pod_name}.${container_name}\n  localOutputRefs:\n    - s3-output\n  match:\n    - select:\n        labels:\n          app: nginx\n")))}c.isMDXComponent=!0}}]);