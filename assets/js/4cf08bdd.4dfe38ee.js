"use strict";(self.webpackChunkbaitech_wiki=self.webpackChunkbaitech_wiki||[]).push([[170],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(t),d=i,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9725:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=t(3117),i=t(102),a=(t(7294),t(3905)),l=["components"],p={id:"pinList",title:""},o=void 0,u={unversionedId:"pinning/pinList",id:"pinning/pinList",title:"",description:"URL",source:"@site/docs/pinning/pin-list.mdx",sourceDirName:"pinning",slug:"/pinning/pinList",permalink:"/pinning/pinList",editUrl:"https://github.com/baitech-ipfs/baitech-wiki/edit/main/docs/pinning/pin-list.mdx",tags:[],version:"current",frontMatter:{id:"pinList",title:""},sidebar:"mySidebar",previous:{title:"",permalink:"/pinning/pinByHash"},next:{title:"",permalink:"/pinning/pinJobs"}},c=[{value:"URL",id:"url",children:[],level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[],level:2},{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b",children:[],level:2},{value:"Headers",id:"headers",children:[],level:2},{value:"Request",id:"request",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Curl \u8bf7\u6c42\u793a\u4f8b",id:"curl-\u8bf7\u6c42\u793a\u4f8b",children:[],level:2}],s={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"url"},"URL"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.baitech-ipfs.net/pinning/pinList"},"https://api.baitech-ipfs.net/pinning/pinList")),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u83b7\u53d6\u7528\u6237\u5b58\u50a8\u7684\u6587\u4ef6\u5217\u8868\u3002"),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u7c7b\u578b"},"\u8bf7\u6c42\u7c7b\u578b"),(0,a.kt)("p",null,"GET"),(0,a.kt)("h2",{id:"headers"},"Headers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"Authorization": "Bearer <YOUR_API_KEY>"\n')),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u53c2\u6570\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u8fc7\u6ee4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"sort"),": \u5bf9\u67e5\u8be2\u7ed3\u679c\u6309\u7167\u65e5\u671f\u8fdb\u884c\u6392\u5e8f\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"ASC"),": \u5347\u5e8f\u6392\u5217\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"DESC"),": \u964d\u5e8f\u6392\u5217 (\u9ed8\u8ba4\u884c\u4e3a)\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"start-date (\u5fc5\u987b\u662f ISO_8601 \u683c\u5f0f)"),": \u8be5\u65f6\u95f4\u70b9\u4e4b\u524d\u5b58\u50a8\u7684\u6587\u4ef6\u4e0d\u8fd4\u56de\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"end-date (\u5fc5\u987b\u662f ISO_8601 \u683c\u5f0f)"),": \u8be5\u65f6\u95f4\u70b9\u4e4b\u540e\u5b58\u50a8\u7684\u6587\u4ef6\u4e0d\u8fd4\u56de\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"offset"),": \u5206\u9875\u83b7\u53d6\u7684\u8d77\u59cb\u4e0b\u6807\uff0c\u9ed8\u8ba4\u4e3a0\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"limit"),": \u5206\u9875\u83b7\u53d6\u7684\u6570\u91cf\uff0c\u9ed8\u8ba4\u4e3a5\uff0c\u6700\u5927\u503c\u4e3a1000\u3002")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Count": "<\u6587\u4ef6\u6570\u91cf (\u6839\u636e\u67e5\u8be2\u6761\u4ef6)>",\n  "Pins": [\n    {\n      "Id": "<Pin Id>",\n      "PinHash": "<\u6587\u4ef6 CID>",\n      "PinSize": "<\u6587\u4ef6\u5927\u5c0f (\u5b57\u8282)>",\n      "PinDate": "<\u6587\u4ef6\u5b58\u50a8\u65f6\u95f4 (ISO_8601 \u683c\u5f0f)>",\n      "Metadata": {\n        "name": "<\u81ea\u5b9a\u4e49\u6587\u4ef6\u540d>"\n      }\n    },\n    {\n      ...\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"curl-\u8bf7\u6c42\u793a\u4f8b"},"Curl \u8bf7\u6c42\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'curl -X GET "https://api.baitech-ipfs.net/pinning/pinList?sort=DESC&offset=0&limit=10&start-date=2021-01-01T00:00:00.000+08:00" \\\n  -H "Authorization: Bearer <YOUR_API_KEY>" \\\n  -H "Content-Type: application/json"\n')))}m.isMDXComponent=!0}}]);