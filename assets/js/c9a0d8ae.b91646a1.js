"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[90269],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(t),h=s,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return t?n.createElement(f,u(u({ref:r},c),{},{components:t})):n.createElement(f,u({ref:r},c))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=d;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:s,u[1]=a;for(var l=2;l<o;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72136:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=t(87462),s=t(63366),o=(t(67294),t(3905)),u=["components"],a={title:"Setting up Clusters from Hosted Kubernetes Providers"},i=void 0,l={unversionedId:"pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",id:"pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",title:"Setting up Clusters from Hosted Kubernetes Providers",description:"In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service.",source:"@site/docs/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",permalink:"/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Setting up Clusters from Hosted Kubernetes Providers"},sidebar:"tutorialSidebar",previous:{title:"Roles for Nodes in Kubernetes",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},next:{title:"Managing GKE Clusters",permalink:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"}},c={},p=[{value:"Hosted Kubernetes Provider Authentication",id:"hosted-kubernetes-provider-authentication",level:2}],d={toc:p};function h(e){var r=e.components,t=(0,s.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this scenario, Rancher does not provision Kubernetes because it is installed by providers such as Google Kubernetes Engine (GKE), Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service."),(0,o.kt)("p",null,"If you use a Kubernetes provider such as Google GKE, Rancher integrates with its cloud APIs, allowing you to create and manage role-based access control for the hosted cluster from the Rancher UI."),(0,o.kt)("p",null,"In this use case, Rancher sends a request to a hosted provider using the provider's API. The provider then provisions and hosts the cluster for you. When the cluster finishes building, you can manage it from the Rancher UI along with clusters you've provisioned that are hosted on-prem or in an infrastructure provider."),(0,o.kt)("p",null,"Rancher supports the following Kubernetes providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/"},"Google GKE (Google Kubernetes Engine)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks/"},"Amazon EKS (Amazon Elastic Container Service for Kubernetes)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/services/kubernetes-service/"},"Microsoft AKS (Azure Kubernetes Service)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/kubernetes"},"Alibaba ACK (Alibaba Cloud Container Service for Kubernetes)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://intl.cloud.tencent.com/product/tke"},"Tencent TKE (Tencent Kubernetes Engine)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.huaweicloud.com/en-us/product/cce.html"},"Huawei CCE (Huawei Cloud Container Engine)"))),(0,o.kt)("h2",{id:"hosted-kubernetes-provider-authentication"},"Hosted Kubernetes Provider Authentication"),(0,o.kt)("p",null,"When using Rancher to create a cluster hosted by a provider, you are prompted for authentication information. This information is required to access the provider's API. For more information on how to obtain this information, see the following procedures:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/gke"},"Creating a GKE Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pages-for-subheaders/amazon-eks-permissions"},"Creating an EKS Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/aks"},"Creating an AKS Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/alibaba"},"Creating an ACK Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/tencent"},"Creating a TKE Cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/set-up-clusters-from-hosted-kubernetes-providers/huawei"},"Creating a CCE Cluster"))))}h.isMDXComponent=!0}}]);