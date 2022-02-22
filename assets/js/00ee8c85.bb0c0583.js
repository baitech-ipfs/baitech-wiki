"use strict";(self.webpackChunkbaitech_wiki=self.webpackChunkbaitech_wiki||[]).push([[953],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4012:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return v},default:function(){return A},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var a=n(3117),r=n(102),i=n(7294),l=n(3905),o=n(2389),p=n(4726),c=n(6010),s="tabItem_LplD";function u(e){var t,n,r,l=e.lazy,o=e.block,u=e.defaultValue,d=e.values,m=e.groupId,h=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,p.lx)(v,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=k[0])?void 0:r.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,p.UB)(),A=y.tabGroupChoices,b=y.setTabGroupChoices,I=(0,i.useState)(g),N=I[0],S=I[1],P=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=A[m];null!=E&&E!==N&&v.some((function(e){return e.value===E}))&&S(E)}var w=function(e){var t=e.currentTarget,n=P.indexOf(t),a=v[n].value;a!==N&&(T(t),S(a),null!=m&&b(m,a))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=P.indexOf(e.currentTarget)+1;n=P[a]||P[0];break;case"ArrowLeft":var r=P.indexOf(e.currentTarget)-1;n=P[r]||P[P.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return P.push(e)},onKeyDown:C,onFocus:w,onClick:w},r,{className:(0,c.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(k.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,o.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}var m=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},h=["components"],k={id:"pinningWithApi",title:""},v=void 0,f={unversionedId:"general/pinningWithApi",id:"general/pinningWithApi",title:"",description:"\u7b80\u4ecb",source:"@site/docs/general/pinning-with-api.mdx",sourceDirName:"general",slug:"/general/pinningWithApi",permalink:"/general/pinningWithApi",editUrl:"https://github.com/baitech-ipfs/baitech-wiki/edit/main/docs/general/pinning-with-api.mdx",tags:[],version:"current",frontMatter:{id:"pinningWithApi",title:""},sidebar:"mySidebar",previous:{title:"",permalink:"/general/architecture"},next:{title:"",permalink:"/general/retrievingFiles"}},g=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[],level:2},{value:"Baitech Storage",id:"baitech-storage",children:[{value:"API Key",id:"api-key",children:[],level:3},{value:"\u8c03\u7528 Baitech Storage API",id:"\u8c03\u7528-baitech-storage-api",children:[],level:3}],level:2},{value:"Endpoint",id:"endpoint",children:[{value:"Endpoint \u5217\u8868",id:"endpoint-\u5217\u8868",children:[],level:3},{value:"Access Token",id:"access-token",children:[],level:3},{value:"\u6570\u5b57\u7b7e\u540d",id:"\u6570\u5b57\u7b7e\u540d",children:[{value:"\u83b7\u53d6 RSA \u79c1\u94a5",id:"\u83b7\u53d6-rsa-\u79c1\u94a5",children:[],level:4},{value:"\u83b7\u53d6\u5f85\u4e0a\u4f20\u6587\u4ef6\u7684 IPFS CID",id:"\u83b7\u53d6\u5f85\u4e0a\u4f20\u6587\u4ef6\u7684-ipfs-cid",children:[],level:4},{value:"\u751f\u6210 <em>\u6570\u5b57\u7b7e\u540d</em>",id:"\u751f\u6210-\u6570\u5b57\u7b7e\u540d",children:[],level:4}],level:3},{value:"\u8c03\u7528 Endpoint API",id:"\u8c03\u7528-endpoint-api",children:[],level:3}],level:2},{value:"Client SDK",id:"client-sdk",children:[],level:2}],y={toc:g};function A(e){var t=e.components,n=(0,r.Z)(e,h);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,l.kt)("p",null,"Baitech \u63d0\u4f9b\u4e86 HTTP API \u4ee5\u652f\u6301\u7528\u6237\u4f7f\u7528 Baitech \u7684\u670d\u52a1\u3002\u5728 \u201c",(0,l.kt)("a",{parentName:"p",href:"/general/architecture"},"\u4e00\u4e3b\u591a\u7aef"),"\u201d \u7684\u67b6\u6784\u4e0b\uff0c",(0,l.kt)("em",{parentName:"p"},"Baitech Storage")," \u548c ",(0,l.kt)("em",{parentName:"p"},"Endpoint")," \u90fd\u90e8\u7f72\u4e86 HTTP API \u4ee5\u63d0\u4f9b\u4e0d\u540c\u7c7b\u578b\u7684\u670d\u52a1\u3002\u6839\u636e\u81ea\u8eab\u804c\u80fd\u4e0d\u540c\uff0c\u4e24\u8005\u7684 API \u4e5f\u91c7\u53d6\u4e86\u4e0d\u540c\u7684\u8ba4\u8bc1\u673a\u5236\u3002"),(0,l.kt)("p",null,"\u5177\u4f53\u6765\u8bb2\uff0c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Baitech Storage")," \u63d0\u4f9b\u9664 ",(0,l.kt)("em",{parentName:"li"},"pinFile")," / ",(0,l.kt)("em",{parentName:"li"},"pinByHash")," \u7b49\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u4e4b\u5916\u7684\u6240\u6709 API\uff0c\u91c7\u7528 API Key \u4f5c\u4e3a\u8ba4\u8bc1\u673a\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Endpoint")," \u63d0\u4f9b ",(0,l.kt)("em",{parentName:"li"},"pinFile")," / ",(0,l.kt)("em",{parentName:"li"},"pinByHash")," \u7b49\u6587\u4ef6\u4e0a\u4f20 API\uff0c\u91c7\u7528 OAuth2 \u8ba4\u8bc1\u673a\u5236\u3002")),(0,l.kt)("h2",{id:"baitech-storage"},"Baitech Storage"),(0,l.kt)("h3",{id:"api-key"},"API Key"),(0,l.kt)("p",null,"API Key \u662f Baitech \u7684\u57fa\u7840\u8ba4\u8bc1\u673a\u5236\uff0c\u7528\u6237\u6ce8\u518c\u6210\u529f\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4e3a\u7528\u6237\u751f\u6210 API Key\u3002\u7528\u6237\u767b\u5f55\u540e\u53ef\u4ee5\u5728 ",(0,l.kt)("em",{parentName:"p"},"\u4e2a\u4eba\u9762\u677f")," -> ",(0,l.kt)("em",{parentName:"p"},"API")," -> ",(0,l.kt)("em",{parentName:"p"},"API JWT")," \u4e2d\u67e5\u770b\u3002"),(0,l.kt)("p",null,"\u6bcf\u4e00\u4e2a API Key\u5176\u5b9e\u662f\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," Token\uff0c\u5b83\u4ee3\u8868\u7528\u6237\u6765\u8ba4\u8bc1\u5e76\u8bbf\u95ee Baitech API\u3002\u8bf7\u52a1\u5fc5\u4fdd\u7ba1\u597d\u60a8\u7684 API Key\uff0c\u4e0d\u8981\u4e0e\u4ed6\u4eba\u5206\u4eab\u3002"),(0,l.kt)("h3",{id:"\u8c03\u7528-baitech-storage-api"},"\u8c03\u7528 Baitech Storage API"),(0,l.kt)("p",null,"Baitech Storage API \u7684 Base URL \u4e3a\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://api.decoo-cloud.cn"},"https://api.decoo-cloud.cn")),(0,l.kt)("p",null,"\u4f5c\u4e3a\u8eab\u4efd\u8ba4\u8bc1\uff0c\u60a8\u9700\u8981\u5728\u8c03\u7528 Baitech API \u65f6\u5c06\u60a8\u7684 API Key \u6309\u7167\u4ee5\u4e0b\u683c\u5f0f\u5305\u542b\u5728 Header \u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <YOUR_API_KEY>"\n')),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 curl \u547d\u4ee4\u6d4b\u8bd5 API \u7684\u8fde\u901a\u6027\u53ca\u60a8 Token \u7684\u6709\u6548\u6027\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://api.decoo-cloud.cn/ping" \\\n  -H "Authorization: Bearer <YOUR_API_KEY>" \\\n  -H "Content-Type: application/json"\n')),(0,l.kt)("p",null,"\u5982\u679c\u8c03\u7528\u6210\u529f\uff0c\u8be5\u8bf7\u6c42\u4f1a\u8fd4\u56de\u72b6\u6001\u7801200\u53ca\u5982\u4e0b\u6d88\u606f\u4f53\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Success": true\n}\n')),(0,l.kt)("p",null,"\u5982\u679c\u8c03\u7528\u5931\u8d25\uff0c\u5219\u4f1a\u8fd4\u56de\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Code": 401,\n  "Message": "Invalid token"\n}\n')),(0,l.kt)("h2",{id:"endpoint"},"Endpoint"),(0,l.kt)("h3",{id:"endpoint-\u5217\u8868"},"Endpoint \u5217\u8868"),(0,l.kt)("p",null,"Client \u53ef\u4ee5\u8c03\u7528 Baitech Storage API \u83b7\u53d6 Endpoint \u5217\u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'curl -X GET "https://api.decoo-cloud.cn/endpoint/list" \\\n  -H "Authorization: Bearer <YOUR_API_KEY>" \\\n  -H "Content-Type: application/json"\n')),(0,l.kt)("p",null,"\u8fd4\u56de\u503c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},' [\n   {\n     "id": 1,\n     "name": "\u4e0a\u6d77",\n     "apiHost": "https://api-sh.decoo-cloud.cn"\n   },\n   ...\n]\n')),(0,l.kt)("h3",{id:"access-token"},"Access Token"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Endpoint")," \u4f7f\u7528 Access Token \u6765\u9a8c\u8bc1\u7528\u6237\u7684 API \u8bf7\u6c42\u3002Access Token \u7531 Baitech Storage \u7b7e\u53d1\uff0c\u4e5f\u540c\u6837\u7531 Baitech Storage \u6765\u9a8c\u8bc1\u3002\u5177\u4f53\u6d41\u7a0b\u5982\u4e0b\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Client \u8c03\u7528 Baitech Storage API\uff0c\u7533\u8bf7 Access Token"),(0,l.kt)("li",{parentName:"ol"},"Client \u8c03\u7528 ",(0,l.kt)("em",{parentName:"li"},"Endpont")," API\uff0c\u9644\u4e0a Access Token \u4f5c\u4e3a\u8ba4\u8bc1\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("em",{parentName:"li"},"Endpoint")," \u6536\u5230 Client \u8bf7\u6c42\u540e\uff0c\u8c03\u7528 Baitech Storage API \u6765\u9a8c\u8bc1 Access Token \u662f\u5426\u6709\u6548\u3002\u5982\u679c\u6709\u6548\uff0c\u5219\u8ba4\u8bc1\u901a\u8fc7\uff0c\u7ee7\u7eed\u5904\u7406 Client \u8bf7\u6c42\uff1b\u5426\u5219\uff0c\u8fd4\u56de 401 \u9519\u8bef\u3002")),(0,l.kt)("p",null,"\u53e6\u5916\uff0cAccess Token \u7684\u6709\u6548\u671f\u4e3a2\u4e2a\u5c0f\u65f6\u3002Access Token \u8fc7\u671f\u540e\uff0cClient \u5e94\u8be5\u8c03\u7528 Baitech Storage API \u7533\u8bf7\u65b0\u7684 Access Token\u3002"),(0,l.kt)("p",null,"\u7533\u8bf7 Access Token\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://api.decoo-cloud.cn/oauth/accessToken" \\\n  -H "Authorization: Bearer <YOUR_API_KEY>" \\\n  -H "Content-Type: application/json"\n')),(0,l.kt)("h3",{id:"\u6570\u5b57\u7b7e\u540d"},"\u6570\u5b57\u7b7e\u540d"),(0,l.kt)("p",null,"\u5728\u8c03\u7528 Endpoint \u7684 ",(0,l.kt)("em",{parentName:"p"},"pinFile")," \u6216\u8005 ",(0,l.kt)("em",{parentName:"p"},"pinByHash")," API \u4e0a\u4f20\u6587\u4ef6\u65f6\uff0c\u7528\u6237\u9700\u8981\u540c\u65f6\u9644\u4e0a\u81ea\u5df1\u7684 ",(0,l.kt)("em",{parentName:"p"},"\u6570\u5b57\u7b7e\u540d"),"\uff0c\u4ee5\u8bc1\u660e\u8be5\u6587\u4ef6\u786e\u5b9e\u7531\u8be5\u7528\u6237\u4e0a\u4f20\u3002",(0,l.kt)("em",{parentName:"p"},"\u6570\u5b57\u7b7e\u540d")," \u7531\u7528\u6237\u7684 RSA \u79c1\u94a5\u5bf9\u6587\u4ef6 CID \u8fdb\u884c\u52a0\u5bc6\u751f\u6210\u3002Baitech Storage \u5c06\u4f7f\u7528\u7528\u6237\u7684 RSA \u516c\u94a5\u5bf9\u7b7e\u540d\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,l.kt)("h4",{id:"\u83b7\u53d6-rsa-\u79c1\u94a5"},"\u83b7\u53d6 RSA \u79c1\u94a5"),(0,l.kt)("p",null,"\u7528\u6237\u5728 Baitech \u6ce8\u518c\u6210\u529f\u540e\uff0c\u7cfb\u7edf\u5373\u81ea\u52a8\u4e3a\u7528\u6237\u751f\u6210 RSA \u79c1\u94a5\u3002\u7528\u6237\u767b\u5f55\u540e\u53ef\u4ee5\u5728 ",(0,l.kt)("em",{parentName:"p"},"\u4e2a\u4eba\u9762\u677f")," -> ",(0,l.kt)("em",{parentName:"p"},"API")," -> ",(0,l.kt)("em",{parentName:"p"},"\u79c1\u94a5")," \u4e2d\u67e5\u770b\u3002"),(0,l.kt)("h4",{id:"\u83b7\u53d6\u5f85\u4e0a\u4f20\u6587\u4ef6\u7684-ipfs-cid"},"\u83b7\u53d6\u5f85\u4e0a\u4f20\u6587\u4ef6\u7684 IPFS CID"),(0,l.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u6709\u591a\u79cd\u9009\u62e9\u83b7\u53d6\u6587\u4ef6\u7684 IPFS CID\u3002\u901a\u5e38\u5efa\u8bae\u7684\u505a\u6cd5\u662f\u672c\u5730\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/install/ipfs-desktop"},"IPFS Desktop"),"\uff0c\u7136\u540e\u8c03\u7528\u672c\u5730 IPFS \u8282\u70b9\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/reference/http/api/#api-v0-add"},"/api/v0/add")," HTTP API \u6765\u83b7\u53d6\u6587\u4ef6\u7684 CID (\u6ce8\u610f\uff1a\u5728\u8c03\u7528\u8be5 API \u65f6\uff0c\u5efa\u8bae\u5c06 ",(0,l.kt)("em",{parentName:"p"},"only-hash")," \u53c2\u6570\u8bbe\u4e3a true)\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684 Client App \u662f\u57fa\u4e8e JavaScript \u5f00\u53d1\uff0c\u4e00\u4e2a\u66f4\u597d\u7684\u5efa\u8bae\u662f\u76f4\u63a5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ipfs-core"},"ipfs-core"),"\u3002\u5b83\u63d0\u4f9b\u4e86\u66f4\u52a0\u8f7b\u91cf\u7ea7\u548c\u66f4\u52a0\u53cb\u597d\u7684\u65b9\u5f0f\u5e2e\u52a9\u60a8\u83b7\u53d6\u6587\u4ef6\u7684 CID\u3002\u5b9e\u9645\u4e0a\uff0cBaitech \u63d0\u4f9b\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@decooio/sdk"},"Client SDK")," \u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/decooio/decoo-sdk/blob/main/packages/sdk/src/getFileHash.js"},"getFileHash")," \u5373\u662f\u57fa\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ipfs-core"},"ipfs-core")," \u6784\u5efa\u3002"),(0,l.kt)("h4",{id:"\u751f\u6210-\u6570\u5b57\u7b7e\u540d"},"\u751f\u6210 ",(0,l.kt)("em",{parentName:"h4"},"\u6570\u5b57\u7b7e\u540d")),(0,l.kt)("p",null,"\u5173\u4e8e\u5982\u4f55\u4f7f\u7528 RSA \u79c1\u94a5\u548c\u6587\u4ef6 CID \u751f\u6210\u6570\u5b57\u7b7e\u540d\uff0c\u5982\u679c\u60a8\u4f7f\u7528\u7684\u7f16\u7a0b\u8bed\u8a00\u662f JavaScript\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@decooio/sdk"},"Baitech SDK")," \u4e2d\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/decooio/decoo-sdk/blob/main/packages/sdk/src/pinFile.js"},"\u76f8\u5173\u4ee3\u7801"),"\u3002"),(0,l.kt)("p",null,"\u5176\u5b83\u5e38\u89c1\u7f16\u7a0b\u8bed\u8a00\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,l.kt)(d,{defaultValue:"java",values:[{label:"Java",value:"java"}],mdxType:"Tabs"},(0,l.kt)(m,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'/**\n <dependency>\n    <groupId>commons-codec</groupId>\n    <artifactId>commons-codec</artifactId>\n    <version>1.15</version>\n  </dependency>\n */\n\nimport org.apache.commons.codec.binary.Base64;\nimport javax.crypto.Cipher;\nimport java.security.*;\nimport java.security.spec.PKCS8EncodedKeySpec;\n\npublic class SecretGeneratorSample {\n    private static final String CHARSET = "UTF-8";\n\n    private static final String RSA_ALGORITHM = "RSA";\n\n    private static final int KEY_SIZE = 1024;\n\n    public static String generateSecret(String cid, String key) throws Exception {\n        PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(Base64.decodeBase64(key.getBytes(CHARSET)));\n        KeyFactory keyFactory = KeyFactory.getInstance(RSA_ALGORITHM);\n        PrivateKey privateKey = keyFactory.generatePrivate(pkcs8KeySpec);\n        Cipher cipher = Cipher.getInstance(keyFactory.getAlgorithm());\n        cipher.init(Cipher.ENCRYPT_MODE, privateKey);\n        return new String(Base64.encodeBase64(cipher.doFinal(cid.getBytes(CHARSET))), CHARSET);\n    }\n}\n')))),(0,l.kt)("h3",{id:"\u8c03\u7528-endpoint-api"},"\u8c03\u7528 Endpoint API"),(0,l.kt)("p",null,"\u8c03\u7528 Endpoint API \u65f6\uff0c\u5fc5\u987b\u8981\u4f7f\u7528\u4e00\u4e2a\u6709\u6548\u7684 Access Token \u8fdb\u884c\u8ba4\u8bc1\u3002\u5982\u679c\u662f\u6587\u4ef6\u4e0a\u4f20\u76f8\u5173\u7684 API\uff0c\u8fd8\u9700\u8981\u9644\u4e0a\u7528\u6237\u9488\u5bf9\u6587\u4ef6 CID \u751f\u6210\u7684\u6570\u5b57\u7b7e\u540d\u3002\u6bd4\u5982\uff0c\u8c03\u7528 ",(0,l.kt)("em",{parentName:"p"},"pinFile")," \u7684 curl \u547d\u4ee4\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X POST "https://api-sh.decoo-cloud.cn/pinning/pinFile" \\\n  -H "UserAccessToken: <YOUR_ACCESS_TOKEN>" \\\n  -H "Content-Type: multipart/form-data" \\\n  -F "file=@<YOUR_FILE_PATH>" \\\n  -F \'decooMetadata="{\\"name\\": \\"\u6211\u7684\u6587\u4ef6\\"}"\' \\\n  -F "cid=<YOUR_FILE_CID>" \\\n  -F "secret=<YOUR_DIGITAL_SIGNATURE>"\n')),(0,l.kt)("p",null,"\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003\u76f8\u5173 API \u8bf4\u660e\u3002"),(0,l.kt)("h2",{id:"client-sdk"},"Client SDK"),(0,l.kt)("p",null,"\u5982\u524d\u6240\u8ff0\uff0cBaitech \u63d0\u4f9b\u4e86 JavaScript \u7248\u672c\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@decooio/sdk"},"Client SDK"),"\uff0c\u5c01\u88c5\u4e86 Endpoint \u8fde\u63a5\u3001\u7533\u8bf7 Access Token\u3001\u751f\u6210 ",(0,l.kt)("em",{parentName:"p"},"\u6570\u5b57\u7b7e\u540d")," \u7b49\u529f\u80fd\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u5b83\u5f88\u65b9\u4fbf\u5730\u8c03\u7528 Endpoint API\u3002"),(0,l.kt)("p",null,"\u8be5 SDK \u540c\u65f6\u652f\u6301 NodeJS \u548c Browser \u73af\u5883\u3002\u8be6\u7ec6\u4f7f\u7528\u8bf4\u660e\u53ef\u53c2\u8003 SDK \u672c\u8eab\u9875\u9762\u3002"))}A.isMDXComponent=!0}}]);