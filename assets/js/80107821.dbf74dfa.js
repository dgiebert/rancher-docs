"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[42799],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,k=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59944:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Kubernetes Install with External Load Balancer (HTTPS/Layer 7)",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/ha/rke-add-on/layer-7-lb","/rancher/v2.0-v2.4/en/installation/options/rke-add-on/layer-7-lb/","/rancher/v2.0-v2.4/en/installation/options/rke-add-on/layer-7-lb","/rancher/v2.x/en/installation/resources/advanced/rke-add-on/layer-7-lb/"]},s=void 0,p={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb",title:"Kubernetes Install with External Load Balancer (HTTPS/Layer 7)",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662767710,formattedLastUpdatedAt:"9/9/2022",frontMatter:{title:"Kubernetes Install with External Load Balancer (HTTPS/Layer 7)",weight:276,aliases:["/rancher/v2.0-v2.4/en/installation/ha/rke-add-on/layer-7-lb","/rancher/v2.0-v2.4/en/installation/options/rke-add-on/layer-7-lb/","/rancher/v2.0-v2.4/en/installation/options/rke-add-on/layer-7-lb","/rancher/v2.x/en/installation/resources/advanced/rke-add-on/layer-7-lb/"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Install with External Load Balancer (TCP/Layer 4)",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-4-lb"},next:{title:"How-to Guides",permalink:"/v2.0-v2.4/how-to-guides"}},d={},c=[{value:"Installation Outline",id:"installation-outline",level:2},{value:"1. Provision Linux Hosts",id:"1-provision-linux-hosts",level:2},{value:"2. Configure Load Balancer",id:"2-configure-load-balancer",level:2},{value:"3. Configure DNS",id:"3-configure-dns",level:2},{value:"4. Install RKE",id:"4-install-rke",level:2},{value:"5. Download RKE Config File Template",id:"5-download-rke-config-file-template",level:2},{value:"6. Configure Nodes",id:"6-configure-nodes",level:2},{value:"7. Configure Certificates",id:"7-configure-certificates",level:2},{value:"8. Configure FQDN",id:"8-configure-fqdn",level:2},{value:"9. Configure Rancher version",id:"9-configure-rancher-version",level:2},{value:"10. Back Up Your RKE Config File",id:"10-back-up-your-rke-config-file",level:2},{value:"11. Run RKE",id:"11-run-rke",level:2},{value:"12. Back Up Auto-Generated Config File",id:"12-back-up-auto-generated-config-file",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"FAQ and Troubleshooting",id:"faq-and-troubleshooting",level:2}],u={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,i.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,i.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes Install"),"."),(0,i.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,i.kt)("p",null,"This procedure walks you through setting up a 3-node cluster using the Rancher Kubernetes Engine (RKE). The cluster's sole purpose is running pods for Rancher. The setup is based on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Layer 7 load balancer with SSL termination (HTTPS)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress controller (HTTP)"))),(0,i.kt)("p",null,"In an HA setup that uses a layer 7 load balancer, the load balancer accepts Rancher client connections over the HTTP protocol (i.e., the application level). This application-level access allows the load balancer to read client requests and then redirect to them to cluster nodes using logic that optimally distributes load."),(0,i.kt)("sup",null,"Rancher installed on a Kubernetes cluster with layer 7 load balancer, depicting SSL termination at load balancer"),"![Rancher HA](/img/ha/rancher2ha-l7.svg)",(0,i.kt)("h2",{id:"installation-outline"},"Installation Outline"),(0,i.kt)("p",null,"Installation of Rancher in a high-availability configuration involves multiple procedures. Review this outline to learn about each procedure you need to complete."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#1-provision-linux-hosts"},"1. Provision Linux Hosts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-configure-load-balancer"},"2. Configure Load Balancer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-configure-dns"},"3. Configure DNS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#4-install-rke"},"4. Install RKE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#5-download-rke-config-file-template"},"5. Download RKE Config File Template")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#6-configure-nodes"},"6. Configure Nodes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#7-configure-certificates"},"7. Configure Certificates")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#8-configure-fqdn"},"8. Configure FQDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#9-configure-rancher-version"},"9. Configure Rancher version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#10-back-up-your-rke-config-file"},"10. Back Up Your RKE Config File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#11-run-rke"},"11. Run RKE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#12-back-up-auto-generated-config-file"},"12. Back Up Auto-Generated Config File"))),(0,i.kt)("h2",{id:"1-provision-linux-hosts"},"1. Provision Linux Hosts"),(0,i.kt)("p",null,"Provision three Linux hosts according to our ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-requirements"},"Requirements"),"."),(0,i.kt)("h2",{id:"2-configure-load-balancer"},"2. Configure Load Balancer"),(0,i.kt)("p",null,"When using a load balancer in front of Rancher, there's no need for the container to redirect port communication from port 80 or port 443. By passing the header ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto: https"),", this redirect is disabled. This is the expected configuration when terminating SSL externally."),(0,i.kt)("p",null,"The load balancer has to be configured to support the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WebSocket")," connections"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SPDY")," / ",(0,i.kt)("strong",{parentName:"li"},"HTTP/2")," protocols"),(0,i.kt)("li",{parentName:"ul"},"Passing / setting the following headers:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Header"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Host")),(0,i.kt)("td",{parentName:"tr",align:null},"FQDN used to reach Rancher."),(0,i.kt)("td",{parentName:"tr",align:"left"},"To identify the server requested by the client.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Forwarded-Proto")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https")),(0,i.kt)("td",{parentName:"tr",align:"left"},"To identify the protocol that a client used to connect to the load balancer.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note:")," If this header is present, ",(0,i.kt)("inlineCode",{parentName:"td"},"rancher/rancher")," does not redirect HTTP to HTTPS.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Forwarded-Port")),(0,i.kt)("td",{parentName:"tr",align:null},"Port used to reach Rancher."),(0,i.kt)("td",{parentName:"tr",align:"left"},"To identify the protocol that client used to connect to the load balancer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Forwarded-For")),(0,i.kt)("td",{parentName:"tr",align:null},"IP of the client connection."),(0,i.kt)("td",{parentName:"tr",align:"left"},"To identify the originating IP address of a client.")))),(0,i.kt)("p",null,"Health checks can be executed on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/healthz")," endpoint of the node, this will return HTTP 200."),(0,i.kt)("p",null,"We have example configurations for the following load balancers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"Amazon ELB configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"NGINX configuration"))),(0,i.kt)("h2",{id:"3-configure-dns"},"3. Configure DNS"),(0,i.kt)("p",null,"Choose a fully qualified domain name (FQDN) that you want to use to access Rancher (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher.yourdomain.com"),").",(0,i.kt)("br",null),(0,i.kt)("br",null)),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Log into your DNS server a create a ",(0,i.kt)("inlineCode",{parentName:"p"},"DNS A")," record that points to the IP address of your ",(0,i.kt)("a",{parentName:"p",href:"#2-configure-load-balancer"},"load balancer"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Validate that the ",(0,i.kt)("inlineCode",{parentName:"p"},"DNS A")," is working correctly. Run the following command from any terminal, replacing ",(0,i.kt)("inlineCode",{parentName:"p"},"HOSTNAME.DOMAIN.COM")," with your chosen FQDN:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"nslookup HOSTNAME.DOMAIN.COM")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step Result:")," Terminal displays output similar to the following:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ nslookup rancher.yourdomain.com\nServer:         YOUR_HOSTNAME_IP_ADDRESS\nAddress:        YOUR_HOSTNAME_IP_ADDRESS#53\n\nNon-authoritative answer:\nName:   rancher.yourdomain.com\nAddress: HOSTNAME.DOMAIN.COM\n")))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"4-install-rke"},"4. Install RKE"),(0,i.kt)("p",null,"RKE (Rancher Kubernetes Engine) is a fast, versatile Kubernetes installer that you can use to install Kubernetes on your Linux hosts. We will use RKE to setup our cluster and run Rancher."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation"},"RKE Install")," instructions.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Confirm that RKE is now executable by running the following command:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"rke --version\n")))),(0,i.kt)("h2",{id:"5-download-rke-config-file-template"},"5. Download RKE Config File Template"),(0,i.kt)("p",null,"RKE uses a YAML config file to install and configure your Kubernetes cluster. There are 2 templates to choose from, depending on the SSL certificate you want to use."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download one of following templates, depending on the SSL certificate you're using."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-certificate"},"Template for self-signed certificate",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"3-node-externalssl-certificate.yml")),"installation/options/cluster-yml-templates/3-node-externalssl-certificate)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/cluster-yml-templates/node-externalssl-recognizedca"},"Template for certificate signed by recognized CA",(0,i.kt)("br",null)," ",(0,i.kt)("inlineCode",{parentName:"a"},"3-node-externalssl-recognizedca.yml")))))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Rename the file to ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),".")),(0,i.kt)("h2",{id:"6-configure-nodes"},"6. Configure Nodes"),(0,i.kt)("p",null,"Once you have the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," config file template, edit the nodes section to point toward your Linux hosts."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," in your favorite text editor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," section with the information of your ",(0,i.kt)("a",{parentName:"p",href:"#1-provision-linux-hosts"},"Linux hosts"),"."),(0,i.kt)("p",{parentName:"li"},"For each node in your cluster, update the following placeholders: ",(0,i.kt)("inlineCode",{parentName:"p"},"IP_ADDRESS_X")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"USER"),". The specified user should be able to access the Docker socket, you can test this by logging in with the specified user and run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker ps"),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("p",{parentName:"blockquote"},"When using RHEL/CentOS, the SSH user can't be root due to ",(0,i.kt)("a",{parentName:"p",href:"https://bugzilla.redhat.com/show_bug.cgi?id=1527565"},"https://bugzilla.redhat.com/show_bug.cgi?id=1527565"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/os#redhat-enterprise-linux-rhel-centos"},"Operating System Requirements")," for RHEL/CentOS specific requirements.")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"nodes:\n    # The IP address or hostname of the node\n- address: IP_ADDRESS_1\n    # User that can login to the node and has access to the Docker socket (i.e. can execute `docker ps` on the node)\n    # When using RHEL/CentOS, this can't be root due to https://bugzilla.redhat.com/show_bug.cgi?id=1527565\n    user: USER\n    role: [controlplane,etcd,worker]\n    # Path the SSH key that can be used to access to node with the specified user\n    ssh_key_path: ~/.ssh/id_rsa\n- address: IP_ADDRESS_2\n    user: USER\n    role: [controlplane,etcd,worker]\n    ssh_key_path: ~/.ssh/id_rsa\n- address: IP_ADDRESS_3\n    user: USER\n    role: [controlplane,etcd,worker]\n    ssh_key_path: ~/.ssh/id_rsa\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," is configured to take backup snapshots of your data. To disable these snapshots, change the ",(0,i.kt)("inlineCode",{parentName:"p"},"backup")," directive setting to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", as depicted below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"services:\n  etcd:\n    backup: false\n")))),(0,i.kt)("h2",{id:"7-configure-certificates"},"7. Configure Certificates"),(0,i.kt)("p",null,"For security purposes, SSL (Secure Sockets Layer) is required when using Rancher. SSL secures all Rancher network communication, like when you login or interact with a cluster."),(0,i.kt)("p",null,"Choose from the following options:"),(0,i.kt)("details",{id:"option-a"},(0,i.kt)("summary",null,"Option A\u2014Bring Your Own Certificate: Self-Signed"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisites:"),"\nCreate a self-signed certificate."),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"The certificate files must be in PEM format."),(0,i.kt)("li",{parentName:"ul"},"The certificate files must be encoded in ",(0,i.kt)("a",{parentName:"li",href:"#base64"},"base64"),"."),(0,i.kt)("li",{parentName:"ul"},"In your certificate file, include all intermediate certificates in the chain. Order your certificates with your certificate first, followed by the intermediates. For an example, see ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"Certificate Troubleshooting.")))),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"kind: Secret")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"name: cattle-keys-ingress"),", replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<BASE64_CA>")," with the base64 encoded string of the CA Certificate file (usually called ",(0,i.kt)("inlineCode",{parentName:"p"},"ca.pem")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ca.crt"),")"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The base64 encoded string should be on the same line as ",(0,i.kt)("inlineCode",{parentName:"p"},"cacerts.pem"),", without any newline at the beginning, in between or at the end.")),(0,i.kt)("p",null,"After replacing the values, the file should look like the example below (the base64 encoded strings should be different):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    ---\n    apiVersion: v1\n    kind: Secret\n    metadata:\n        name: cattle-keys-server\n        namespace: cattle-system\n    type: Opaque\n    data:\n        cacerts.pem: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUNvRENDQVlnQ0NRRHVVWjZuMEZWeU16QU5CZ2txaGtpRzl3MEJBUXNGQURBU01SQXdEZ1lEVlFRRERBZDAKWlhOMExXTmhNQjRYRFRFNE1EVXdOakl4TURRd09Wb1hEVEU0TURjd05USXhNRFF3T1Zvd0VqRVFNQTRHQTFVRQpBd3dIZEdWemRDMWpZVENDQVNJd0RRWUpLb1pJaHZjTkFRRUJCUUFEZ2dFUEFEQ0NBUW9DZ2dFQkFNQmpBS3dQCndhRUhwQTdaRW1iWWczaTNYNlppVmtGZFJGckJlTmFYTHFPL2R0RUdmWktqYUF0Wm45R1VsckQxZUlUS3UzVHgKOWlGVlV4Mmo1Z0tyWmpwWitCUnFiZ1BNbk5hS1hocmRTdDRtUUN0VFFZdGRYMVFZS0pUbWF5NU45N3FoNTZtWQprMllKRkpOWVhHWlJabkdMUXJQNk04VHZramF0ZnZOdmJ0WmtkY2orYlY3aWhXanp2d2theHRUVjZlUGxuM2p5CnJUeXBBTDliYnlVcHlad3E2MWQvb0Q4VUtwZ2lZM1dOWmN1YnNvSjhxWlRsTnN6UjVadEFJV0tjSE5ZbE93d2oKaG41RE1tSFpwZ0ZGNW14TU52akxPRUc0S0ZRU3laYlV2QzlZRUhLZTUxbGVxa1lmQmtBZWpPY002TnlWQUh1dApuay9DMHpXcGdENkIwbkVDQXdFQUFUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFHTCtaNkRzK2R4WTZsU2VBClZHSkMvdzE1bHJ2ZXdia1YxN3hvcmlyNEMxVURJSXB6YXdCdFJRSGdSWXVtblVqOGo4T0hFWUFDUEthR3BTVUsKRDVuVWdzV0pMUUV0TDA2eTh6M3A0MDBrSlZFZW9xZlVnYjQrK1JLRVJrWmowWXR3NEN0WHhwOVMzVkd4NmNOQQozZVlqRnRQd2hoYWVEQmdma1hXQWtISXFDcEsrN3RYem9pRGpXbi8walI2VDcrSGlaNEZjZ1AzYnd3K3NjUDIyCjlDQVZ1ZFg4TWpEQ1hTcll0Y0ZINllBanlCSTJjbDhoSkJqa2E3aERpVC9DaFlEZlFFVFZDM3crQjBDYjF1NWcKdE03Z2NGcUw4OVdhMnp5UzdNdXk5bEthUDBvTXl1Ty82Tm1wNjNsVnRHeEZKSFh4WTN6M0lycGxlbTNZQThpTwpmbmlYZXc9PQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==\n"))),(0,i.kt)("details",{id:"option-b"},(0,i.kt)("summary",null,"Option B\u2014Bring Your Own Certificate: Signed by Recognized CA"),(0,i.kt)("p",null,"If you are using a Certificate Signed By A Recognized Certificate Authority, you don't need to perform any step in this part.")),(0,i.kt)("h2",{id:"8-configure-fqdn"},"8. Configure FQDN"),(0,i.kt)("p",null,"There is one reference to ",(0,i.kt)("inlineCode",{parentName:"p"},"<FQDN>")," in the RKE config file. Replace this reference with the FQDN you chose in ",(0,i.kt)("a",{parentName:"p",href:"#3-configure-dns"},"3. Configure DNS"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"kind: Ingress")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"name: cattle-ingress-http:")),(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<FQDN>")," with the FQDN chosen in ",(0,i.kt)("a",{parentName:"p",href:"#3-configure-dns"},"3. Configure DNS"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step Result:")," After replacing the values, the file should look like the example below (the base64 encoded strings should be different):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'apiVersion: extensions/v1beta1\n  kind: Ingress\n  metadata:\n    namespace: cattle-system\n    name: cattle-ingress-http\n    annotations:\n      nginx.ingress.kubernetes.io/proxy-connect-timeout: "30"\n      nginx.ingress.kubernetes.io/proxy-read-timeout: "1800"   # Max time in seconds for ws to remain shell window open\n      nginx.ingress.kubernetes.io/proxy-send-timeout: "1800"   # Max time in seconds for ws to remain shell window open\n  spec:\n    rules:\n    - host: rancher.yourdomain.com\n      http:\n        paths:\n        - backend:\n            serviceName: cattle-service\n            servicePort: 80\n')))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Save the file and close it.")),(0,i.kt)("h2",{id:"9-configure-rancher-version"},"9. Configure Rancher version"),(0,i.kt)("p",null,"The last reference that needs to be replaced is ",(0,i.kt)("inlineCode",{parentName:"p"},"<RANCHER_VERSION>"),". This needs to be replaced with a Rancher version which is marked as stable. The latest stable release of Rancher can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/master/README.md"},"GitHub README"),". Make sure the version is an actual version number, and not a named tag like ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"latest"),". The example below shows the version configured to ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.6"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"      spec:\n        serviceAccountName: cattle-admin\n        containers:\n        - image: rancher/rancher:v2.0.6\n          imagePullPolicy: Always\n")),(0,i.kt)("h2",{id:"10-back-up-your-rke-config-file"},"10. Back Up Your RKE Config File"),(0,i.kt)("p",null,"After you close your RKE config file, ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", back it up to a secure location. You can use this file again when it's time to upgrade Rancher."),(0,i.kt)("h2",{id:"11-run-rke"},"11. Run RKE"),(0,i.kt)("p",null,"With all configuration in place, use RKE to launch Rancher. You can complete this action by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke up")," command and using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--config")," parameter to point toward your config file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From your workstation, make sure ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," and the downloaded ",(0,i.kt)("inlineCode",{parentName:"p"},"rke")," binary are in the same directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open a Terminal instance. Change to the directory that contains your config file and ",(0,i.kt)("inlineCode",{parentName:"p"},"rke"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enter one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke up")," commands listen below."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"rke up --config rancher-cluster.yml\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step Result:")," The output should be similar to the snippet below:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"INFO[0000] Building Kubernetes cluster\nINFO[0000] [dialer] Setup tunnel for host [1.1.1.1]\nINFO[0000] [network] Deploying port listener containers\nINFO[0000] [network] Pulling image [alpine:latest] on host [1.1.1.1]\n...\nINFO[0101] Finished building Kubernetes cluster successfully\n")))),(0,i.kt)("h2",{id:"12-back-up-auto-generated-config-file"},"12. Back Up Auto-Generated Config File"),(0,i.kt)("p",null,"During installation, RKE automatically generates a config file named ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml")," in the same directory as the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file. Copy this file and back it up to a safe location. You'll use this file later when upgrading Rancher Server."),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Recommended:")," Review ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"Creating Backups\u2014High Availability Back Up and Restoration")," to learn how to backup your Rancher Server in case of a disaster scenario."),(0,i.kt)("li",{parentName:"ul"},"Create a Kubernetes cluster: ",(0,i.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"Creating a Cluster"),".")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"faq-and-troubleshooting"},"FAQ and Troubleshooting"),(0,i.kt)("p",null,"{{< ssl_faq_ha >}}"))}h.isMDXComponent=!0}}]);