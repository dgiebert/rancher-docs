"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[65592],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=a,h=p["".concat(s,".").concat(g)]||p[g]||u[g]||r;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26806:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],l={title:"Working with Taints and Tolerations",weight:6},s=void 0,c={unversionedId:"explanations/integrations-in-rancher/logging/taints-and-tolerations",id:"explanations/integrations-in-rancher/logging/taints-and-tolerations",title:"Working with Taints and Tolerations",description:'"Tainting" a Kubernetes node causes pods to repel running on that node.',source:"@site/docs/explanations/integrations-in-rancher/logging/taints-and-tolerations.md",sourceDirName:"explanations/integrations-in-rancher/logging",slug:"/explanations/integrations-in-rancher/logging/taints-and-tolerations",permalink:"/explanations/integrations-in-rancher/logging/taints-and-tolerations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/logging/taints-and-tolerations.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Working with Taints and Tolerations",weight:6},sidebar:"tutorialSidebar",previous:{title:"rancher-logging Helm Chart Options",permalink:"/explanations/integrations-in-rancher/logging/logging-helm-chart-options"},next:{title:"Custom Resource Configuration",permalink:"/pages-for-subheaders/custom-resource-configuration"}},d={},u=[{value:"Default Implementation in Rancher&#39;s Logging Stack",id:"default-implementation-in-ranchers-logging-stack",level:3},{value:"Adding NodeSelector Settings and Tolerations for Custom Taints",id:"adding-nodeselector-settings-and-tolerations-for-custom-taints",level:3}],p={toc:u};function g(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'"Tainting" a Kubernetes node causes pods to repel running on that node.'),(0,r.kt)("p",null,"Unless the pods have a ",(0,r.kt)("inlineCode",{parentName:"p"},"toleration")," for that node's taint, they will run on other nodes in the cluster."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"Taints and tolerations")," can work in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"field")," within the ",(0,r.kt)("inlineCode",{parentName:"p"},"PodSpec"),", which enables the ",(0,r.kt)("em",{parentName:"p"},"opposite")," effect of a taint. "),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," gives pods an affinity towards certain nodes."),(0,r.kt)("p",null,"Both provide choice for the what node(s) the pod will run on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#default-implementation-in-rancher-s-logging-stack"},"Default Implementation in Rancher's Logging Stack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"))),(0,r.kt)("h3",{id:"default-implementation-in-ranchers-logging-stack"},"Default Implementation in Rancher's Logging Stack"),(0,r.kt)("p",null,"By default, Rancher taints all Linux nodes with ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle.io/os=linux"),", and does not taint Windows nodes.\nThe logging stack pods have ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," for this taint, which enables them to run on Linux nodes.\nMoreover, most logging stack pods run on Linux only and have a ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," added to ensure they run on Linux nodes."),(0,r.kt)("p",null,"This example Pod YAML file shows a nodeSelector being used with a toleration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n# metadata...\nspec:\n  # containers...\n  tolerations:\n    - key: cattle.io/os\n      operator: "Equal"\n      value: "linux"\n      effect: NoSchedule\n  nodeSelector:\n    kubernetes.io/os: linux\n')),(0,r.kt)("p",null,"In the above example, we ensure that our pod only runs on Linux nodes, and we add a ",(0,r.kt)("inlineCode",{parentName:"p"},"toleration")," for the taint we have on all of our Linux nodes."),(0,r.kt)("p",null,"You can do the same with Rancher's existing taints, or with your own custom ones."),(0,r.kt)("h3",{id:"adding-nodeselector-settings-and-tolerations-for-custom-taints"},"Adding NodeSelector Settings and Tolerations for Custom Taints"),(0,r.kt)("p",null,"If you would like to add your own ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeSelector")," settings, or if you would like to add ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerations")," for additional taints, you can pass the following to the chart's values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n  # insert tolerations...\nnodeSelector:\n  # insert nodeSelector...\n")),(0,r.kt)("p",null,"These values will add both settings to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentbit"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"logging-operator")," containers.\nEssentially, these are global settings for all pods in the logging stack."),(0,r.kt)("p",null,"However, if you would like to add tolerations for ",(0,r.kt)("em",{parentName:"p"},"only")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"fluentbit")," container, you can add the following to the chart's values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"fluentbit_tolerations:\n  # insert tolerations list for fluentbit containers only...\n")))}g.isMDXComponent=!0}}]);