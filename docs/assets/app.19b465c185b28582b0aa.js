!function(e){function t(t){for(var o,a,l=t[0],c=t[1],u=t[2],s=0,p=[];s<l.length;s++)a=l[s],r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(f&&f(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var c=n[l];0!==r[c]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={6:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var i=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,a.nc&&l.setAttribute("nonce",a.nc),l.src=function(e){return a.p+""+({}[e]||e)+".19b465c185b28582b0aa.js"}(e);var c=setTimeout(function(){u({type:"timeout",target:l})},12e4);function u(t){l.onerror=l.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}}l.onerror=l.onload=u,i.appendChild(l)}return Promise.all(t)},a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/",a.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=c;i.push([204,0]),n()}({136:function(e,t,n){"use strict";var o,r=n(1),i=n(96),a=n(192),l=n.n(a),c=n(191),u=n.n(c),f=["localStorage","sessionStorage"],s=JSON.parse,p=JSON.stringify,d={getToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===f[0]?localStorage&&localStorage.getItem(t)||null:e===f[1]&&sessionStorage&&sessionStorage.getItem(t)||null},setToken:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"token";!e||e.length<=0||(t===f[0]&&localStorage&&localStorage.setItem(n,e),t===f[1]&&sessionStorage&&sessionStorage.setItem(n,e))},isAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return e===f[0]?!(!localStorage||!localStorage.getItem(t)):e===f[1]&&!(!sessionStorage||!sessionStorage.getItem(t))},clearToken:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"token";return localStorage&&localStorage[e]?(localStorage.removeItem(e),!0):!(!sessionStorage||!sessionStorage[e])&&(sessionStorage.removeItem(e),!0)},getTokenExpirationDate:function(e){if(!e)return new Date(0);var t=l()(e);return t.exp?new Date(1e3*t.exp):new Date(0)},isExpiredToken:function(e){var t=this.getTokenExpirationDate(e),n=new Date,o=u()(n,t);return o},getUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"userInfo";return e===f[0]?localStorage&&s(localStorage.getItem(t))||null:e===f[1]&&sessionStorage&&s(sessionStorage.getItem(t))||null},setUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f[0],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"userInfo";!e||e.length<=0||(t===f[0]&&localStorage&&localStorage.setItem(n,p(e)),t===f[1]&&sessionStorage&&sessionStorage.setItem(n,p(e)))},clearUserInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"userInfo";localStorage&&localStorage[e]&&localStorage.removeItem(e),sessionStorage&&sessionStorage[e]&&sessionStorage.removeItem(e)},clearAllAppStorage:function(){localStorage&&localStorage.clear(),sessionStorage&&sessionStorage.clear()}},h=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.checkIsAuthenticated=function(){var e=d.getUserInfo()?d.getUserInfo():null,t=d.getToken()&&function(e){return e&&e.id}(e);return n.setState({isAuthenticated:t}),t},n.checkTokenIsExpired=function(){var e=d.getToken(),t=d.isExpiredToken(e);return n.setState({isExpiredToken:t}),t},n.setToken=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";d.setToken(e),n.setState({token:e,isAuthenticated:!0})},n.setUserInfo=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"object"===(void 0===e?"undefined":y(e))&&(d.setUserInfo(e),n.setState({user:e}))},n.disconnectUser=function(){return d.clearAllAppStorage(),!0},n.state=v({},n.props.initialState,{checkIsAuthenticated:n.checkIsAuthenticated,checkTokenIsExpired:n.checkTokenIsExpired,disconnectUser:n.disconnectUser,setToken:n.setToken,setUserInfo:n.setUserInfo}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),b(t,[{key:"render",value:function(){var e=this.props.children;return h(i.b,{value:v({},this.state)},void 0," ",e," ")}}]),t}();m.defaultProps={initialState:{token:null,user:null,isAuthenticated:!1,isExpiredToken:!0,lastAuthDate:null}};t.a=m},143:function(e,t,n){"use strict";var o=n(1),r=n.n(o),i=(n(107),n(44)),a=u(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"],["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n"]),l=u(["\n  ",";\n"],["\n  ",";\n"]),c=u(["\n      opacity: 0;\n      animation-name: ",";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "],["\n      opacity: 0;\n      animation-name: ",";\n      animation-timing-function: ease-in;\n      animation-duration: 0.7s;\n      animation-delay: 0s;\n      animation-fill-mode: both;\n    "]);function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f,s=Object(i.d)(a),p=i.b.div(l,function(e){return e.viewEnter&&Object(i.a)(c,s)}),d=(f="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:f,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),h=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var v=function(){return function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,o.Component),h(n,[{key:"render",value:function(){var t=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(this.props,[]);return d(p,{viewEnter:!0},void 0,r.a.createElement(e,t))}}]),n}()}};t.a=v},188:function(e){e.exports={token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJkZW1vIiwiaWF0IjoxNTAyMzA3MzU0LCJleHAiOjE3MjMyMzIxNTQsImF1ZCI6ImRlbW8tZGVtbyIsInN1YiI6ImRlbW8iLCJHaXZlbk5hbWUiOiJKb2huIiwiU3VybmFtZSI6IkRvZSIsIkVtYWlsIjoiam9obi5kb2VAZXhhbXBsZS5jb20iLCJSb2xlIjpbIlN1cGVyIGNvb2wgZGV2IiwibWFnaWMgbWFrZXIiXX0.6FjgLCypaqmRp4tDjg_idVKIzQw16e-z_rjA3R94IqQ",user:{id:111,login:"john.doe@fake.mail",firstname:"John",lastname:"Doe",isAdmin:!0}}},204:function(e,t,n){"use strict";n.r(t);n(464);var o,r,i=n(1),a=n.n(i),l=n(29),c=n(201),u=n.n(c),f=n(200),s=n(199),p=n.n(s),d=n(39),h=(n(248),n(44)),v=(o=["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],r=["\n  html, body {\n    margin: 0;\n    height: 100%;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n"],Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(r)}})));var y,b=function(){return Object(h.c)(v)},m=n(16),g=n(40),w=n.n(g),O=n(98),S=n.n(O),k=(n(107),n(36)),j=n(470),_=n.n(j),P=n(58),x=(y="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,o){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=o;else if(i>1){for(var l=Array(i),c=0;c<i;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:y,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var C=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={isOpen:!1},o.toggle=function(e){e&&e.preventDefault(),o.setState(function(e){return{isOpen:!prevIsOpened}})},o.handlesNavItemClick=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/";return function(t){t&&t.preventDefault(),o.props.history.push(e)}},E(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),I(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.brand,o=t.navModel.rightLinks;return x(P.e,{color:"light",light:!0,expand:"md"},void 0,x(P.f,{href:"/"},void 0,n),x(P.g,{onClick:this.toggle}),x(P.a,{isOpen:this.state.isOpen,navbar:!0},void 0,x(P.b,{className:"ml-auto",navbar:!0},void 0,o.map(function(t,n){var o=t.label,r=t.link;t.viewName;return x(P.c,{},""+n,x(P.d,{href:"#",onClick:e.handlesNavItemClick(r)},void 0,o))}))))}}]),t}();C.defaultProps={brand:"brand"};var T=Object(m.f)(C),A=n(193),N=n.n(A),L=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),D=L("path",{d:"M256,213.7L256,213.7L256,213.7l174.2,167.2c4.3,4.2,11.4,4.1,15.8-0.2l30.6-29.9c4.4-4.3,4.5-11.3,0.2-15.5L264.1,131.1\n      c-2.2-2.2-5.2-3.2-8.1-3c-3-0.1-5.9,0.9-8.1,3L35.2,335.3c-4.3,4.2-4.2,11.2,0.2,15.5L66,380.7c4.4,4.3,11.5,4.4,15.8,0.2L256,213.7z"}),R=function(e){var t=e.color;return L("svg",{width:"24px",height:"24px",viewBox:"0 0 512 512",fill:""+t},void 0,D)};R.defaultProps={color:"#F1F1F1"},R.displayName="UpIcon";var U=R,$=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  margin-right: 10px;\n"],["\n  margin-right: 10px;\n"]);var z=h.b.div($),M=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},W="-10px",F={position:"fixed",right:W,left:"",bottom:"40px",width:"100px",zIndex:10,opacity:.5,backgroundColor:"#4A4A4A"},J=M(z,{},void 0,M(U,{color:"#F1F1F1"})),Y=function(e){var t=e.onClick,n=e.position,o=e.children,r=e.motionStyle,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"bottom-right",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F,n=B({},t);switch(e){case"bottom-right":return n.right=W,n.left="",n;case"bottom-left":return n.right="",n.left=W,n;default:return t}}(n,B({},r,F));return M("button",{style:i,className:N()({btn:!0}),onClick:t},void 0,!o&&J,!!o&&o)};Y.defaultProps={position:"bottom-right"},Y.displayName="BackToTopButton";var V=Y,Z=n(99),X=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),q=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function G(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var H=function(e){function t(){var e,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=G(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),o.state={windowScrollY:0,showBackButton:!1,tickingScollObserve:!1},o.handleWindowScroll=function(){if(window){var e=o.state,t=e.windowScrollY,n=e.tickingScollObserve,r=o.props.minScrollY,i=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;n||window.requestAnimationFrame(function(){if(t!==i){var e=i>=r;o.setState({windowScrollY:i,showBackButton:e})}o.setState({tickingScollObserve:!1})}),o.setState({tickingScollObserve:!0})}},o.handlesOnBackButtonClick=function(e){e&&e.preventDefault();var t=o.props.minScrollY,n=o.state.windowScrollY;window&&n&&n>t&&window.scroll({top:0,left:0,behavior:"smooth"})},o.scrollDone=function(){var e=o.props.onScrollDone;e&&e()},G(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),q(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.addEventListener("scroll",this.handleWindowScroll)}},{key:"componentWillUnmount",value:function(){"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleWindowScroll)}},{key:"render",value:function(){var e=this,t=this.state.showBackButton;return X(Z.Motion,{style:{x:Object(Z.spring)(t?0:120,Z.presets.stiff)}},void 0,function(t){var n=t.x;return X(V,{position:"bottom-right",onClick:e.handlesOnBackButtonClick,motionStyle:{WebkitTransform:"translate3d("+n+"px, 0, 0)",transform:"translate3d("+n+"px, 0, 0)"}})})}}]),t}();H.defaultProps={minScrollY:120,onScrollDone:function(){}};var Q=H,K={brand:"React Bootstrap Starter",leftLinks:[],rightLinks:[{label:"Home",link:"/"},{label:"Protected",link:"/protected",view:"protected",isRouteBtn:!0},{label:"About",link:"/about",view:"about",isRouteBtn:!0},{label:"Disconnect",link:"/login",view:"login",isRouteBtn:!0}]},ee={DEV_MODE:!0,sw:{path:"public/assets/sw.js"}},te=ee,ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe=te.sw.path;var re=function(){void 0!==("undefined"==typeof window?"undefined":ne(window))&&"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register(oe).then(function(e){}).catch(function(e){})})},ie=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),ae=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function le(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var ce=ie(Q,{minScrollY:40,scrollTo:"appContainer"});var ue=function(){return function(e){var t=function(t){function n(){var e,t,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=le(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.state={navModel:K},o.handleLeftNavItemClick=function(e,t){},o.handleRightNavItemClick=function(e,t){},le(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,i.Component),ae(n,[{key:"componentDidMount",value:function(){re()}},{key:"render",value:function(){var t=this.props,n=(t.history,t.location,t.match,function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["history","location","match"])),o=this.state.navModel;return ie("div",{id:"appContainer"},void 0,ie(T,{brand:o.brand,navModel:o,handleLeftNavItemClick:this.handleLeftNavItemClick,handleRightNavItemClick:this.handleRightNavItemClick}),ie(_.a,{fluid:!0},void 0,a.a.createElement(e,n)),ce)}}]),n}();return w()(k.c)(t)}},fe=Object(d.a)(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,469))},{modules:["../pages/home"]}),se=Object(d.a)(function(){return n.e(4).then(n.bind(null,467))},{modules:["../pages/about"]}),pe=Object(d.a)(function(){return n.e(3).then(n.bind(null,465))},{modules:["../pages/protected"]}),de=Object(d.a)(function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,468))},{modules:["../pages/pageNotFound"]}),he=Object(d.a)(function(){return n.e(1).then(n.bind(null,466))},{modules:["../components/privateRoute"]}),ve=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),ye=ve(k.a,{exact:!0,path:"/",component:fe}),be=ve(k.a,{path:"/about",component:se}),me=ve(he,{path:"/protected",component:pe}),ge=ve(k.a,{component:de}),we=function(){return ve(k.b,{},void 0,ye,be,me,ge)},Oe=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var Se=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),Oe(t,[{key:"componentDidUpdate",value:function(e){window&&(e.location!==this.props.location&&window.scrollTo(0,0))}},{key:"render",value:function(){return this.props.children}}]),t}(),ke=Object(k.c)(Se),je=n(190),_e=n.n(je),Pe=n(202),xe=n.n(Pe),Ie=n(203),Ee=n.n(Ie),Ce=n(72),Te=n.n(Ce),Ae=(n(189),function(){return window.location.origin||(window.location.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")),window.location.origin}),Ne=n(188),Le=n(59),De=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ue=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function $e(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(r,i){try{var a=t[r](i),l=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(l).then(function(e){o("next",e)},function(e){o("throw",e)});e(l)}("next")})}}function ze(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var Me=De("legend",{},void 0,"Login"),Be=De("label",{htmlFor:"inputEmail",className:"col-lg-2 control-label"},void 0,"Email"),We=De("label",{htmlFor:"inputPassword",className:"col-lg-2 control-label"},void 0,"Password"),Fe=De("span",{},void 0,"login in...  ",De("i",{className:"fa fa-spinner fa-pulse fa-fw"})),Je=De("span",{},void 0,"Login"),Ye=function(e){function t(){var e,n,o,r,i,a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,c=Array(l),u=0;u<l;u++)c[u]=arguments[u];return n=o=ze(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={email:"",password:"",isLogging:!1},o.disconnectUser=function(){(0,o.props.disconnectUser)()},o.handlesOnEmailChange=function(e){e.preventDefault(),o.setState({email:e.target.value.trim()})},o.handlesOnPasswordChange=function(e){e.preventDefault(),o.setState({password:e.target.value.trim()})},o.handlesOnLogin=(i=$e(regeneratorRuntime.mark(function e(t){var n,r,i,l,c,u,f,s,p,d,h,v;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t&&t.preventDefault(),n=o.props,r=n.history,i=n.setToken,l=n.setUserInfo,c=o.state,u=c.email,f=c.password,s={login:u,password:f},e.prev=4,o.setState({isLogging:!0}),e.next=8,o.logUser(s);case 8:p=e.sent,d=p.data,h=d.token,v=d.user,i(h),l(v),o.setState({isLogging:!1}),r.push({pathname:"/"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(4),o.setState({isLogging:!1});case 19:case"end":return e.stop()}},e,a,[[4,16]])})),function(e){return i.apply(this,arguments)}),o.logUser=(r=$e(regeneratorRuntime.mark(function e(){var t,n,o,r,i,l,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t="login",n=Ae()+"/"+t,o="post",r={},i={credentials:"same-origin",data:{login:c,password:u}},!ee.DEV_MODE){e.next=7;break}return e.abrupt("return",new Promise(function(e){return setTimeout(e({data:Ne}),3e3)}));case 7:return e.prev=7,e.next=10,_e.a.request(Re({method:o,url:n,withCredentials:!0,headers:Re({Accept:"application/json","Content-Type":"application/json","Acces-Control-Allow-Origin":"*"},r)},i));case 10:return l=e.sent,e.abrupt("return",Promise.resolve(l));case 14:return e.prev=14,e.t0=e.catch(7),e.abrupt("return",Promise.reject(e.t0));case 17:case"end":return e.stop()}},e,a,[[7,14]])})),function(){return r.apply(this,arguments)}),o.goHome=function(e){e&&e.preventDefault(),o.props.history.push({pathname:"/"})},ze(o,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),Ue(t,[{key:"componentDidMount",value:function(){this.disconnectUser()}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,o=e.isLogging;return De("div",{className:"content"},void 0,De(Ee.a,{},void 0,De(Te.a,{md:{size:4,offset:4},xs:{size:10,offset:1}},void 0,De("form",{className:"form-horizontal",noValidate:!0},void 0,De("fieldset",{},void 0,Me,De("div",{className:"form-group"},void 0,Be,De(Te.a,{lg:12},void 0,De("input",{type:"text",className:"form-control",id:"inputEmail",placeholder:"Email",value:t,onChange:this.handlesOnEmailChange}))),De("div",{className:"form-group"},void 0,We,De(Te.a,{lg:12},void 0,De("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",value:n,onChange:this.handlesOnPasswordChange}))),De("div",{className:"form-group"},void 0,De(Te.a,{lg:{size:12}},void 0,De(xe.a,{className:"login-button btn-block",color:"primary",disabled:o,onClick:this.handlesOnLogin},void 0,o?Fe:Je))))))),De(Ee.a,{},void 0,De(Te.a,{md:{size:4,offset:4},xs:{size:10,offset:1}},void 0,De("div",{className:"pull-right"},void 0,De(xe.a,{bsStyle:"info",className:"btn-block",onClick:this.goHome},void 0,"back to home")))))}}]),t}(),Ve=n(143),Ze=w()(Object(Ve.a)(),Object(Le.a)())(Ye),Xe=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),qe=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var Ge=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["PureComponent"]),qe(t,[{key:"componentDidMount",value:function(){(0,this.props.disconnectUser)()}},{key:"render",value:function(){return a.a.createElement(m.c,this.props,Xe(m.b,{to:{pathname:"/login"}}))}}]),t}(),He=Object(m.f)(Ge),Qe=w()(Object(Le.a)())(He),Ke=n(136),et=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),tt=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var nt=w()(ue())(we),ot=S()(),rt=et(m.c,{exact:!0,path:"/login",component:Ze}),it=et(nt,{}),at=et(Qe,{path:"/logout"}),lt=et(m.c,{component:de}),ct=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["Component"]),tt(t,[{key:"render",value:function(){return et(m.d,{history:ot},void 0,et(Ke.a,{},void 0,et(ke,{},void 0,et(m.e,{},void 0,rt,it,at,lt))))}}]),t}(),ut=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var l in i)void 0===n[l]&&(n[l]=i[l]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),ft=document.getElementById("root");p.a.polyfill(),window.__forceSmoothScrollPolyfill__=!0,window.snapSaveState=function(){return Object(d.b)()},b(),u()();var st,pt,dt,ht;st=ct,pt=ut(f.AppContainer,{},void 0,ut(st,{})),ht=ut(dt=function(){return pt},{}),ft.hasChildNodes()?Object(d.c)().then(function(){Object(l.hydrate)(ht,ft)}):Object(l.render)(ut(dt,{}),ft)},59:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o,r=n(1),i=n.n(r),a=(n(107),n(96)),l=(n(136),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),c=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={}),t&&i)for(var l in i)void 0===t[l]&&(t[l]=i[l]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];t.children=c}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function f(){return function(e){return function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r["Component"]),u(n,[{key:"render",value:function(){var t=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(this.props,[]);return c(a.a,{},void 0,function(n){return i.a.createElement(e,l({},n,t))})}}]),n}()}}},96:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return l});var o=n(1),r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=Object(o.createContext)(r({},{isAuthenticated:!1,lastAuthDate:null})),a=i.Provider,l=i.Consumer}});