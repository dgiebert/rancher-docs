"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99917],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,k=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Creating a Custom Benchmark Version for Running a Cluster Scan",weight:4},c=void 0,l={unversionedId:"explanations/integrations-in-rancher/cis-scans/custom-benchmark",id:"explanations/integrations-in-rancher/cis-scans/custom-benchmark",title:"Creating a Custom Benchmark Version for Running a Cluster Scan",description:"Each Benchmark Version defines a set of test configuration files that define the CIS tests to be run by the kube-bench tool.",source:"@site/docs/explanations/integrations-in-rancher/cis-scans/custom-benchmark.md",sourceDirName:"explanations/integrations-in-rancher/cis-scans",slug:"/explanations/integrations-in-rancher/cis-scans/custom-benchmark",permalink:"/explanations/integrations-in-rancher/cis-scans/custom-benchmark",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/cis-scans/custom-benchmark.md",tags:[],version:"current",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Creating a Custom Benchmark Version for Running a Cluster Scan",weight:4},sidebar:"tutorialSidebar",previous:{title:"Skipped and Not Applicable Tests",permalink:"/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"},next:{title:"Fleet - GitOps at Scale",permalink:"/pages-for-subheaders/fleet-gitops-at-scale"}},m={},p=[{value:"1. Prepare the Custom Benchmark Version ConfigMap",id:"1-prepare-the-custom-benchmark-version-configmap",level:3},{value:"2. Add a Custom Benchmark Version to a Cluster",id:"2-add-a-custom-benchmark-version-to-a-cluster",level:3},{value:"3. Create a New Profile for the Custom Benchmark Version",id:"3-create-a-new-profile-for-the-custom-benchmark-version",level:3},{value:"4. Run a Scan Using the Custom Benchmark Version",id:"4-run-a-scan-using-the-custom-benchmark-version",level:3}],u={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each Benchmark Version defines a set of test configuration files that define the CIS tests to be run by the ",(0,o.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench")," tool.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application installs a few default Benchmark Versions which are listed under CIS Benchmark application menu."),(0,o.kt)("p",null,"But there could be some Kubernetes cluster setups that require custom configurations of the Benchmark tests. For example, the path to the Kubernetes config files or certs might be different than the standard location where the upstream CIS Benchmarks look for them."),(0,o.kt)("p",null,"It is now possible to create a custom Benchmark Version for running a cluster scan using the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cis-benchmark")," application."),(0,o.kt)("p",null,"When a cluster scan is run, you need to select a Profile which points to a specific Benchmark Version. "),(0,o.kt)("p",null,"Follow all the steps below to add a custom Benchmark Version and run a scan using it."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#1-prepare-the-custom-benchmark-version-configmap"},"Prepare the Custom Benchmark Version ConfigMap")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#2-add-a-custom-benchmark-version-to-a-cluster"},"Add a Custom Benchmark Version to a Cluster")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#3-create-a-new-profile-for-the-custom-benchmark-version"},"Create a New Profile for the Custom Benchmark Version")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#4-run-a-scan-using-the-custom-benchmark-version"},"Run a Scan Using the Custom Benchmark Version"))),(0,o.kt)("h3",{id:"1-prepare-the-custom-benchmark-version-configmap"},"1. Prepare the Custom Benchmark Version ConfigMap"),(0,o.kt)("p",null,"To create a custom benchmark version, first you need to create a ConfigMap containing the benchmark version's config files and upload it to your Kubernetes cluster where you want to run the scan."),(0,o.kt)("p",null,"To prepare a custom benchmark version ConfigMap, suppose we want to add a custom Benchmark Version named ",(0,o.kt)("inlineCode",{parentName:"p"},"foo"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a directory named ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," and inside this directory, place all the config YAML files that the ",(0,o.kt)("a",{href:"https://github.com/aquasecurity/kube-bench",target:"_blank"},"kube-bench")," tool looks for. For example, here are the config YAML files for a Generic CIS 1.5 Benchmark Version ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aquasecurity/kube-bench/tree/master/cfg/cis-1.5"},"https://github.com/aquasecurity/kube-bench/tree/master/cfg/cis-1.5"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place the complete ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file, which includes all the components that should be tested. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the Benchmark version name to the ",(0,o.kt)("inlineCode",{parentName:"p"},"target_mapping")," section of the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'target_mapping:\n  "foo":\n    - "master"\n    - "node"\n    - "controlplane"\n    - "etcd"\n    - "policies"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upload this directory to your Kubernetes Cluster by creating a ConfigMap:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"kubectl create configmap -n <namespace> foo --from-file=<path to directory foo>\n")))),(0,o.kt)("h3",{id:"2-add-a-custom-benchmark-version-to-a-cluster"},"2. Add a Custom Benchmark Version to a Cluster"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to add a custom benchmark and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"CIS Benchmark > Benchmark Version"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Enter the ",(0,o.kt)("strong",{parentName:"li"},"Name")," and a description for your custom benchmark version."),(0,o.kt)("li",{parentName:"ol"},"Choose the cluster provider that your benchmark version applies to."),(0,o.kt)("li",{parentName:"ol"},"Choose the ConfigMap you have uploaded from the dropdown."),(0,o.kt)("li",{parentName:"ol"},"Add the minimum and maximum Kubernetes version limits applicable, if any."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h3",{id:"3-create-a-new-profile-for-the-custom-benchmark-version"},"3. Create a New Profile for the Custom Benchmark Version"),(0,o.kt)("p",null,"To run a scan using your custom benchmark version, you need to add a new Profile pointing to this benchmark version."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to add a custom benchmark and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"CIS Benchmark > Profile"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Provide a ",(0,o.kt)("strong",{parentName:"li"},"Name")," and description. In this example, we name it ",(0,o.kt)("inlineCode",{parentName:"li"},"foo-profile"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the Benchmark Version from the dropdown."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("h3",{id:"4-run-a-scan-using-the-custom-benchmark-version"},"4. Run a Scan Using the Custom Benchmark Version"),(0,o.kt)("p",null,"Once the Profile pointing to your custom benchmark version ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," has been created, you can create a new Scan to run the custom test configs in the Benchmark Version."),(0,o.kt)("p",null,"To run a scan,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,o.kt)("li",{parentName:"ol"},"On the ",(0,o.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to add a custom benchmark and click ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"li"},"CIS Benchmark > Scan"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the new cluster scan profile."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," A report is generated with the scan results. To see the results, click the name of the scan that appears."))}h.isMDXComponent=!0}}]);