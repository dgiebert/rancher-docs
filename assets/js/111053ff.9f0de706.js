"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[20416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"3. Install Rancher"},o=void 0,i={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",id:"version-2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",title:"3. Install Rancher",description:"Now that you have a running RKE cluster, you can install Rancher in it. For security reasons all traffic to Rancher must be encrypted with TLS. For this tutorial you are going to automatically issue a self-signed certificate through cert-manager. In a real-world use-case you will likely use Let's Encrypt or provide your own certificate.",source:"@site/versioned_docs/version-2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",permalink:"/v2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"3. Install Rancher"},sidebar:"tutorialSidebar",previous:{title:"2. Install Kubernetes",permalink:"/v2.6/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"},next:{title:"Resources",permalink:"/v2.6/pages-for-subheaders/resources"}},s={},c=[{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Install Rancher",id:"install-rancher",level:3},{value:"Additional Resources",id:"additional-resources",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Now that you have a running RKE cluster, you can install Rancher in it. For security reasons all traffic to Rancher must be encrypted with TLS. For this tutorial you are going to automatically issue a self-signed certificate through ",(0,r.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),". In a real-world use-case you will likely use Let's Encrypt or provide your own certificate."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These installation instructions assume you are using Helm 3.")),(0,r.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,r.kt)("p",null,"Add the cert-manager helm repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,r.kt)("p",null,"Create a namespace for cert-manager:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create namespace cert-manager\n")),(0,r.kt)("p",null,"Install the CustomResourceDefinitions of cert-manager:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"New in v2.6.4, cert-manager versions 1.6.2 and 1.7.1 are compatible. We recommend v1.7.x because v 1.6.x will reach end-of-life on March 30, 2022.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n")),(0,r.kt)("p",null,"And install it with Helm. Note that cert-manager also needs your proxy configured in case it needs to communicate with Let's Encrypt or other external certificate issuers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm upgrade --install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager --version v1.7.1 \\\n  --set http_proxy=http://${proxy_host} \\\n  --set https_proxy=http://${proxy_host} \\\n  --set no_proxy=127.0.0.0/8\\\\,10.0.0.0/8\\\\,cattle-system.svc\\\\,172.16.0.0/12\\\\,192.168.0.0/16\\\\,.svc\\\\,.cluster.local\n")),(0,r.kt)("p",null,"Now you should wait until cert-manager is finished starting up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl rollout status deployment -n cert-manager cert-manager\nkubectl rollout status deployment -n cert-manager cert-manager-webhook\n")),(0,r.kt)("h3",{id:"install-rancher"},"Install Rancher"),(0,r.kt)("p",null,"Next you can install Rancher itself. First add the helm repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,r.kt)("p",null,"Create a namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl create namespace cattle-system\n")),(0,r.kt)("p",null,"And install Rancher with Helm. Rancher also needs a proxy configuration so that it can communicate with external application catalogs or retrieve Kubernetes version update metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"helm upgrade --install rancher rancher-latest/rancher \\\n   --namespace cattle-system \\\n   --set hostname=rancher.example.com \\\n   --set proxy=http://${proxy_host} \\\n   --set noProxy=127.0.0.0/8\\\\,10.0.0.0/8\\\\,cattle-system.svc\\\\,172.16.0.0/12\\\\,192.168.0.0/16\\\\,.svc\\\\,.cluster.local\n")),(0,r.kt)("p",null,"After waiting for the deployment to finish:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl rollout status deployment -n cattle-system rancher\n")),(0,r.kt)("p",null,"You can now navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://rancher.example.com")," and start using Rancher."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you don't intend to send telemetry data, opt out ",(0,r.kt)("a",{parentName:"p",href:"/v2.6/faq/telemetry"},"telemetry")," during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully.")),(0,r.kt)("h3",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"These resources could be helpful when installing Rancher:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.6/getting-started/installation-and-upgrade/installation-references/helm-chart-options"},"Rancher Helm chart options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.6/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS secrets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v2.6/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting Rancher Kubernetes Installations"))))}u.isMDXComponent=!0}}]);