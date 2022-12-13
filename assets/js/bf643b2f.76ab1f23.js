"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[75190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(r),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62570:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(12209);const i={title:"Cluster Configuration"},s=void 0,u={unversionedId:"pages-for-subheaders/cluster-configuration",id:"pages-for-subheaders/cluster-configuration",title:"Cluster Configuration",description:"After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster.",source:"@site/docs/pages-for-subheaders/cluster-configuration.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cluster-configuration",permalink:"/pages-for-subheaders/cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/cluster-configuration.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Cluster Configuration"},sidebar:"tutorialSidebar",previous:{title:"Architecture Recommendations",permalink:"/reference-guides/rancher-manager-architecture/architecture-recommendations"},next:{title:"Rancher Server Configuration",permalink:"/pages-for-subheaders/rancher-server-configuration"}},o={},c=[{value:"Cluster Configuration References",id:"cluster-configuration-references",level:3},{value:"Cluster Management Capabilities by Cluster Type",id:"cluster-management-capabilities-by-cluster-type",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster."),(0,a.kt)("p",null,"For information on editing cluster membership, go to ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"this page.")),(0,a.kt)("h3",{id:"cluster-configuration-references"},"Cluster Configuration References"),(0,a.kt)("p",null,"The cluster configuration options depend on the type of Kubernetes cluster:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"RKE Cluster Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration"},"RKE2 Cluster Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/k3s-cluster-configuration"},"K3s Cluster Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"},"EKS Cluster Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/gke-cluster-configuration"},"GKE Cluster Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference-guides/cluster-configuration/rancher-server-configuration/aks-cluster-configuration"},"AKS Cluster Configuration"))),(0,a.kt)("h3",{id:"cluster-management-capabilities-by-cluster-type"},"Cluster Management Capabilities by Cluster Type"),(0,a.kt)("p",null,"The options and settings available for an existing cluster change based on the method that you used to provision it."),(0,a.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,a.kt)(l.ZP,{mdxType:"ClusterCapabilitiesTable"}))}d.isMDXComponent=!0},12209:(e,t,r)=>{r.d(t,{ZP:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={toc:[]};function i(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Action"),(0,a.kt)("th",{parentName:"tr",align:null},"Rancher Launched Kubernetes Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"EKS, GKE and AKS Clusters",(0,a.kt)("sup",null,"1")),(0,a.kt)("th",{parentName:"tr",align:null},"Other Hosted Kubernetes Clusters"),(0,a.kt)("th",{parentName:"tr",align:null},"Non-EKS or GKE Registered Clusters"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713",(0,a.kt)("sup",null,"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713",(0,a.kt)("sup",null,"3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/helm-charts-in-rancher"},"Using App Catalogs")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuring Tools (",(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/monitoring-and-alerting"},"Alerts, Notifiers, Monitoring"),", ",(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/logging"},"Logging"),", ",(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/istio"},"Istio"),")"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/pages-for-subheaders/cis-scan-guides"},"Running Security Scans")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/clone-cluster-configuration"},"Use existing configuration to create additional clusters")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ability to ",(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"backup")," and ",(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup"},"restore")," Rancher-launched clusters"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713",(0,a.kt)("sup",null,"4"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/how-to-guides/new-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Registered EKS, GKE and AKS clusters have the same options available as EKS, GKE and AKS clusters created from the Rancher UI. The  difference is that when a registered cluster is deleted from the Rancher UI, it is not destroyed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Cluster configuration options can't be edited for registered clusters, except for ",(0,a.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"K3s and RKE2 clusters."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For registered cluster nodes, the Rancher UI exposes the ability to cordon, drain, and edit the node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For registered clusters using etcd as a control plane, snapshots must be taken manually outside of the Rancher UI to use for backup and recovery."))))}i.isMDXComponent=!0}}]);