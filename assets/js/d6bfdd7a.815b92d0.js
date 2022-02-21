"use strict";(self.webpackChunkbaitech_wiki=self.webpackChunkbaitech_wiki||[]).push([[659],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,g=f["".concat(p,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1904:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(3117),i=n(102),l=(n(7294),n(3905)),a=["components"],o={id:"retrievingFiles",title:""},p="\u53d6\u56de\u6587\u4ef6",c={unversionedId:"general/retrievingFiles",id:"general/retrievingFiles",title:"",description:"\u51fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u7684\u7279\u6027\u8003\u8651\uff0c\u6211\u4eec\u4e13\u95e8\u4ecb\u7ecd\u5982\u4f55\u4ece\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff08IPFS\uff09\u53d6\u56de\u6587\u4ef6\u3002",source:"@site/docs/general/retrieving-files.mdx",sourceDirName:"general",slug:"/general/retrievingFiles",permalink:"/general/retrievingFiles",editUrl:"https://github.com/baitech-ipfs/baitech-wiki/edit/main/docs/general/retrieving-files.mdx",tags:[],version:"current",frontMatter:{id:"retrievingFiles",title:""},sidebar:"mySidebar",previous:{title:"",permalink:"/general/pinningWithApi"},next:{title:"",permalink:"/general/faq"}},u=[{value:"\u901a\u8fc7IPFS\u53d6\u56de\u6587\u4ef6",id:"\u901a\u8fc7ipfs\u53d6\u56de\u6587\u4ef6",children:[],level:2},{value:"\u901a\u8fc7HTTP\u53d6\u56de\u6587\u4ef6",id:"\u901a\u8fc7http\u53d6\u56de\u6587\u4ef6",children:[{value:"\u7b2c\u4e09\u65b9\u7f51\u5173\uff08\u516c\u5171\u7f51\u5173\uff09",id:"\u7b2c\u4e09\u65b9\u7f51\u5173\u516c\u5171\u7f51\u5173",children:[],level:3},{value:"\u6784\u5efa\u81ea\u7528\u7f51\u5173",id:"\u6784\u5efa\u81ea\u7528\u7f51\u5173",children:[],level:3},{value:"\u7f51\u5173\u914d\u7f6e",id:"\u7f51\u5173\u914d\u7f6e",children:[],level:3}],level:2}],s={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53d6\u56de\u6587\u4ef6"},"\u53d6\u56de\u6587\u4ef6"),(0,l.kt)("p",null,"\u51fa\u4e8e\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\u7684\u7279\u6027\u8003\u8651\uff0c\u6211\u4eec\u4e13\u95e8\u4ecb\u7ecd\u5982\u4f55\u4ece\u5206\u5e03\u5f0f\u6587\u4ef6\u7cfb\u7edf\uff08IPFS\uff09\u53d6\u56de\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u3001\u5f00\u653e\u3001\u5206\u5e03\u5f0f\u7684\u70b9\u5bf9\u70b9\u7f51\u7edc\uff0cIPFS\u603b\u662f\u53ef\u4ee5\u5141\u8bb8\u60a8\u53d6\u56de\u6240\u50a8\u5b58\u7684\u6587\u4ef6\u3002"),(0,l.kt)("h2",{id:"\u901a\u8fc7ipfs\u53d6\u56de\u6587\u4ef6"},"\u901a\u8fc7IPFS\u53d6\u56de\u6587\u4ef6"),(0,l.kt)("p",null,"\u201c\u901a\u8fc7IPFS\u53d6\u56de\u6587\u4ef6\u201d\uff0c\u662f\u7531\u60a8\u6307\u5728\u672c\u5730\u8fd0\u884cIPFS\uff0c\u4ee5IPFS\u8282\u70b9\u7684\u8eab\u4efd\u76f4\u63a5\u4eceIPFS\u7f51\u7edc\u53d6\u56de\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u505a\u6709\u8bf8\u591a\u4f18\u52bf\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7528\u6237\u8fd0\u884c\u539f\u751fIPFS\u8282\u70b9\u7a0b\u5e8f\uff0c\u76f4\u63a5\u4e0eIPFS\u7f51\u7edc\u4ea4\u6362\u6570\u636e\uff0c\u6570\u636e\u65e0\u9700\u7ecf\u4e2d\u95f4\u65b9\u6216\u7b2c\u4e09\u65b9\u8f6c\u624b\uff0c\u4fdd\u8bc1\u771f\u5b9e\u53ef\u9760\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53d7\u76ca\u4e8eIPFS\u7f51\u7edcP2P\u7279\u6027\uff0c\u5728\u6709\u591a\u526f\u672c\u6570\u60c5\u51b5\u4e0b\uff0cP2P\u7f51\u7edc\u4f20\u8f93\u901f\u5ea6\u66f4\u5feb\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u76f4\u63a5\u7ecfP2P\u7f51\u7edc\u534f\u8bae\u4f20\u8f93\u6587\u4ef6\uff0c\u4e0d\u5360\u7528\u6570\u636e\u6d41\u91cf\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u56e0\u6b64\uff0c\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u7528\u6237\u76f4\u63a5\u901a\u8fc7IPFS\u7f51\u7edc\u8bbf\u95ee\u548c\u53d6\u56de\u6587\u4ef6\u3002")),(0,l.kt)("h2",{id:"\u901a\u8fc7http\u53d6\u56de\u6587\u4ef6"},"\u901a\u8fc7HTTP\u53d6\u56de\u6587\u4ef6"),(0,l.kt)("p",null,"HTTP\u4e0eIPFS\u4e3a\u4e0d\u540c\u7684\u7f51\u7edc\u534f\u8bae\uff08\u975e\u4e92\u76f8\u517c\u5bb9\uff09\uff0c\u4e14\u8003\u8651\u5230\u5927\u591a\u6570Web\u6d4f\u89c8\u5668\u65e0\u6cd5\u539f\u751f\u652f\u6301IPFS\uff0c\u9700\u8981\u5f15\u5165\u4e13\u7528\u7f51\u5173\u6765\u5904\u7406\u534f\u8bae\u7684\u8f6c\u6362\u3002\u6b64\u7c7b\u7f51\u5173\u79f0\u4e3aIPFS\u7f51\u5173\uff08IPFS Gateway\uff09\u3002"),(0,l.kt)("p",null,"IPFS\u7f51\u5173\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u63d0\u4f9b\u7f51\u5173\u670d\u52a1IPFS\u8282\u70b9\u3002\u56e0\u6b64\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u5df2\u6709\u7684\u7b2c\u4e09\u65b9\u7f51\u5173\uff08\u516c\u5171\u7f51\u5173\uff09\u6216\u67b6\u8bbe\u81ea\u7528\u7f51\u5173\u5b9e\u73b0\u534f\u8bae\u8f6c\u6362\uff0c\u4ee5\u652f\u6301HTTP\u8bbf\u95ee\u548c\u53d6\u56de\u64cd\u4f5c\u3002"),(0,l.kt)("h3",{id:"\u7b2c\u4e09\u65b9\u7f51\u5173\u516c\u5171\u7f51\u5173"},"\u7b2c\u4e09\u65b9\u7f51\u5173\uff08\u516c\u5171\u7f51\u5173\uff09"),(0,l.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u60a8\u53ef\u4ee5\u5229\u7528\u4efb\u4f55IPFS\u516c\u5171\u7f51\u5173\u53d6\u56de\u6587\u4ef6\uff0c\u5e76\u4e14\u5927\u591a\u6570\u662f\u514d\u8d39\u7684\u3002\u5f53\u7136\uff0c\u4e0d\u540c\u7684\u7f51\u5173\u5728\u8bbf\u95ee\u901f\u5ea6\u3001\u5b89\u5168\u6027\u3001\u53ef\u7528\u6027\u7b49\u65b9\u9762\u5b58\u5728\u5dee\u5f02\u3002\u6b64\u5916\uff0c\u8fd9\u4e9b\u514d\u8d39\u7684\u516c\u5171\u7f51\u5173\u5f88\u53ef\u80fd\u65e0\u6cd5\u652f\u6301\u8f83\u5927\u7684\u6587\u4ef6\u6216\u5927\u6d41\u91cf\u9700\u6c42\u3002"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u8bbf\u95eeIPFS\u5b98\u65b9\u63d0\u4f9b\u7684",(0,l.kt)("a",{parentName:"p",href:"https://ipfs.github.io/public-gateway-checker/"},"gateway checker"),"\u67e5\u770b\u76ee\u524d\u63d0\u4f9b\u670d\u52a1\u7684\u516c\u5171\u7f51\u5173\u3002\u4f60\u53ef\u4ee5\u770b\u5230\u6839\u636e\u5b9e\u65bd\u8fde\u63a5\u5ef6\u8fdf\u6392\u5e8f\u7684\u7f51\u5173\u5217\u8868\u3002"),(0,l.kt)("h3",{id:"\u6784\u5efa\u81ea\u7528\u7f51\u5173"},"\u6784\u5efa\u81ea\u7528\u7f51\u5173"),(0,l.kt)("p",null,"\u65e0\u8bba\u7f51\u5173\u662f\u8c01\u6240\u67b6\u8bbe\uff0c\u6211\u4eec\u90fd\u5efa\u8bae\u60a8\u4f7f\u7528\u7269\u7406\u8ddd\u79bb\u66f4\u8fd1\u7684\u7f51\u5173\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u8868\u73b0\u3002\u5bf9\u4e8e\u627f\u8f7d\u5927\u89c4\u6a21\u5546\u7528\u9700\u6c42\u7684\u7528\u6237\u800c\u8a00\uff0c\u7f51\u5173\u7684\u53ef\u7528\u6027\u3001\u5b89\u5168\u6027\u3001\u53ef\u63a7\u6027\u662f\u91cd\u8981\u8003\u8651\u3002"),(0,l.kt)("p",null,"\u81ea\u8bbeIPFS\u7f51\u5173\uff0c\u5b9e\u8d28\u4e0a\u4ecd\u662f\u60a8\u8fd0\u884cIPFS\u8282\u70b9\u7a0b\u5e8f\u5e76\u9762\u5411\u672c\u5730\u6216\u6388\u6743\u7528\u6237\u63d0\u4f9b\u7f51\u5173\u670d\u52a1\u3002\u60a8\u7684\u673a\u5668\u8fd0\u884c\u4e00\u4e2aIPFS\u8282\u70b9\uff08\u53ef\u4ee5\u662fDesktop\u6216CLI\u7b49\u5f62\u5f0f\uff09\u5e76\u6307\u5b9alocalhost\u7aef\u53e3\uff08\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8080"),"\uff09\u5373\u53ef\u6784\u6210\u4e00\u9879\u6700\u57fa\u672c\u7684",(0,l.kt)("strong",{parentName:"p"},"\u672c\u5730\u7f51\u5173"),"\u670d\u52a1\u3002\u800c",(0,l.kt)("strong",{parentName:"p"},"\u79c1\u6709\u7f51\u5173"),"\u5728\u6280\u672f\u610f\u4e49\u4e0a\u4e0e\u672c\u5730\u7f51\u5173\u6ca1\u6709\u6839\u672c\u5dee\u522b\uff0c\u79c1\u6709\u7f51\u5173\u4e00\u822c\u662f\u6307\u88ab\u8bbe\u7f6e\u4e3a\u53ea\u9762\u5411\u7279\u5b9a\u7684\u8bbf\u95ee\u8005\u63d0\u4f9b\u7279\u5b9a\u6743\u9650\u7f51\u5173\u670d\u52a1\uff0c\u4f8b\u5982\uff0c\u7f51\u5173\u53ef\u4ee5\u6307\u5b9a\u4ec5\u5411\u6301\u6709\u6743\u9650\u7684\u7528\u6237\u63d0\u4f9b\u53ea\u8bfb\u7684\u670d\u52a1\uff0c\u4ee5\u53ca\u6307\u5b9a\u7279\u5b9a\u7684\u57df\u540d\u89e3\u6790\u65b9\u5f0f\uff08Domain resolution style\uff09\u3002"),(0,l.kt)("p",null,"\u67b6\u8bbe\u81ea\u7528\u7f51\u5173\uff0c\u5373\u53ef\u5b9e\u73b0\u901a\u8fc7IPFS\u83b7\u53d6\uff08\u6765\u81ea\u4e8e\u5916\u90e8IPFS\u7684\uff09\u6587\u4ef6\uff0c\u8fdb\u800c\u4ee5HTTP\u5f62\u5f0f\u5411\u5176\u4ed6\u65b9\uff08\u4e00\u822c\u4e3a\u5185\u90e8\u5c40\u57df\u7f51\u7684\u5176\u4ed6\u7ec8\u7aef\u3001\u6216\u88ab\u6388\u4e88\u6743\u9650\u7684\u5176\u4ed6\u8bbf\u95ee\u8005\uff09\u63d0\u4f9b\u6587\u4ef6\u7684\u8bbf\u95ee\u6216\u53d6\u56de\u670d\u52a1\u3002"),(0,l.kt)("h3",{id:"\u7f51\u5173\u914d\u7f6e"},"\u7f51\u5173\u914d\u7f6e"),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u60a8\u53c2\u8003\u6765\u81ea",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ipfs/go-ipfs"},"go-ipfs"),"\uff08\u4e00\u4e2a\u4e3b\u6d41\u7684IPFS implementation\uff09\u7684\u914d\u7f6e\u65b9\u6848\u3002\u7f51\u5173\u914d\u7f6e\u6587\u4ef6\u662f\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"JSON"),"\u6587\u4ef6\uff0c\u56e0\u6b64\u5f88\u5bb9\u6613\u8fdb\u884c\u914d\u7f6e\u3002\u914d\u7f6e\u6587\u4ef6\u8bbe\u7f6e\u53ef\u53c2\u8003: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#gateway"},"ipfs-go config tutorial")," \u3002"),(0,l.kt)("p",null,"\u7279\u522b\u63d0\u793a\uff1a\u5728\u7f51\u5173\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u52a0\u5165\u4e0e\u8be5\u7f51\u5173\u7ecf\u5e38\u53d1\u751f\u8054\u7cfb\u7684\u5176\u4ed6\u7f51\u5173\uff08\u6216IPFS\u8282\u70b9\uff09\u5230\u60a8\u7684",(0,l.kt)("strong",{parentName:"p"},"Peer List"),"\u4e2d\uff0c\u80fd\u591f\u6709\u6548\u63d0\u9ad8\u8bbf\u95ee\u901f\u5ea6\u3002"))}f.isMDXComponent=!0}}]);