"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(r),g=a,h=m["".concat(u,".").concat(g)]||m[g]||d[g]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58409:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const i={title:"Debugging High Memory Usage"},o=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",title:"Debugging High Memory Usage",description:"Every time series in Prometheus is uniquely identified by its metric name and optional key-value pairs called labels.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"Debugging High Memory Usage"},sidebar:"tutorialSidebar",previous:{title:"Persistent Grafana Dashboards",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},next:{title:"Prometheus Federator Guides",permalink:"/pages-for-subheaders/prometheus-federator-guides"}},u={},l=[{value:"Reducing Memory Bursts",id:"reducing-memory-bursts",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Every time series in Prometheus is uniquely identified by its ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/#metric-names"},"metric name")," and optional key-value pairs called ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/#labels"},"labels.")),(0,a.kt)("p",null,"The labels allow the ability to filter and aggregate the time series data, but they also multiply the amount of data that Prometheus collects."),(0,a.kt)("p",null,"Each time series has a defined set of labels, and Prometheus generates a new time series for all unique combinations of labels. If a metric has two labels attached, two time series are generated for that metric. Changing any label value, including adding or removing a label, will create a new time series."),(0,a.kt)("p",null,"Prometheus is optimized to store data that is index-based on series. It is designed for a relatively consistent number of time series and a relatively large number of samples that need to be collected from the exporters over time."),(0,a.kt)("p",null,"Inversely, Prometheus is not optimized to accommodate a rapidly changing number of time series. For that reason, large bursts of memory usage can occur when monitoring is installed on clusters where many resources are being created and destroyed, especially on multi-tenant clusters."),(0,a.kt)("h3",{id:"reducing-memory-bursts"},"Reducing Memory Bursts"),(0,a.kt)("p",null,"To reduce memory consumption, Prometheus can be configured to store fewer time series, by scraping fewer metrics or by attaching fewer labels to the time series. To see which series use the most memory, you can check the TSDB (time series database) status page in the Prometheus UI."),(0,a.kt)("p",null,"Distributed Prometheus solutions such as ",(0,a.kt)("a",{parentName:"p",href:"https://thanos.io/"},"Thanos")," and ",(0,a.kt)("a",{parentName:"p",href:"https://cortexmetrics.io/"},"Cortex")," use an alternate architecture in which multiple small Prometheus instances are deployed. In the case of Thanos, the metrics from each Prometheus are aggregated into the common Thanos deployment, and then those metrics are exported to a persistent store, such as S3. This more robust architecture avoids burdening any single Prometheus instance with too many time series, while also preserving the ability to query metrics on a global level."))}d.isMDXComponent=!0}}]);