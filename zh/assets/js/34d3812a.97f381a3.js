"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},46684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"2. Configuring Rancher for Microsoft AD FS"},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",title:"2. Configuring Rancher for Microsoft AD FS",description:"After you complete Configuring Microsoft AD FS for Rancher, enter your AD FS information into Rancher to allow AD FS users to authenticate with Rancher.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-rancher-for-ms-adfs.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"2022\u5e7410\u670829\u65e5",frontMatter:{title:"2. Configuring Rancher for Microsoft AD FS"},sidebar:"tutorialSidebar",previous:{title:"1. Configuring Microsoft AD FS for Rancher",permalink:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},next:{title:"Configuring Shibboleth (SAML)",permalink:"/zh/v2.5/pages-for-subheaders/configure-shibboleth-saml"}},s={},c=[{value:"Configuration",id:"configuration",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"After you complete ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/configure-microsoft-ad-federation-service-saml/configure-ms-adfs-for-rancher"},"Configuring Microsoft AD FS for Rancher"),", enter your AD FS information into Rancher to allow AD FS users to authenticate with Rancher."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Important Notes For Configuring Your AD FS Server:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"The SAML 2.0 WebSSO Protocol Service URL is: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER>/v1-saml/adfs/saml/acs")),(0,n.kt)("li",{parentName:"ul"},"The Relying Party Trust identifier URL is: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_SERVER>/v1-saml/adfs/saml/metadata")),(0,n.kt)("li",{parentName:"ul"},"You must export the ",(0,n.kt)("inlineCode",{parentName:"li"},"federationmetadata.xml")," file from your AD FS server. This can be found at: ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,n.kt)("strong",{parentName:"p"},"Security > Authentication")," from the main menu.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Microsoft Active Directory Federation Services"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the ",(0,n.kt)("strong",{parentName:"p"},"Configure AD FS Account")," form. Microsoft AD FS lets you specify an existing Active Directory (AD) server. The ",(0,n.kt)("a",{parentName:"p",href:"#configuration"},"configuration section below")," describe how you can map AD attributes to fields within Rancher.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After you complete the ",(0,n.kt)("strong",{parentName:"p"},"Configure AD FS Account")," form, click ",(0,n.kt)("strong",{parentName:"p"},"Authenticate with AD FS"),", which is at the bottom of the page."),(0,n.kt)("p",{parentName:"li"},"Rancher redirects you to the AD FS login page. Enter credentials that authenticate with Microsoft AD FS to validate your Rancher AD FS configuration."),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," You may have to disable your popup blocker to see the AD FS login page.")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," Rancher is configured to work with MS FS. Your users can now sign into Rancher using their MS FS logins."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Name Field"),(0,n.kt)("td",{parentName:"tr",align:null},"The AD attribute that contains the display name of users. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"User Name Field"),(0,n.kt)("td",{parentName:"tr",align:null},"The AD attribute that contains the user name/given name. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"UID Field"),(0,n.kt)("td",{parentName:"tr",align:null},"An AD attribute that is unique to every user. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Groups Field"),(0,n.kt)("td",{parentName:"tr",align:null},"Make entries for managing group memberships. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"http://schemas.xmlsoap.org/claims/Group"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rancher API Host"),(0,n.kt)("td",{parentName:"tr",align:null},"The URL for your Rancher Server.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Private Key / Certificate"),(0,n.kt)("td",{parentName:"tr",align:null},"This is a key-certificate pair to create a secure shell between Rancher and your AD FS. Ensure you set the Common Name (CN) to your Rancher Server URL.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"#cert-command"},"Certificate creation command"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Metadata XML"),(0,n.kt)("td",{parentName:"tr",align:null},"The ",(0,n.kt)("inlineCode",{parentName:"td"},"federationmetadata.xml")," file exported from your AD FS server. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"You can find this file at ",(0,n.kt)("inlineCode",{parentName:"td"},"https://<AD_SERVER>/federationmetadata/2007-06/federationmetadata.xml"),".")))),(0,n.kt)("a",{id:"cert-command"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Tip:")," You can generate a certificate using an openssl command. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n')))}m.isMDXComponent=!0}}]);