(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},Bl7J:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var r=n("q1tI"),a=n.n(r),o=[{text:"Bio",to:"#bio"},{text:"Videos",to:"#video"},{text:"Releases",to:"#releases"},{text:"Presskit",to:"#presskit"},{text:"Contact",to:"#contact"}];function i(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=o.map((function(e){return a.a.createElement("a",{href:e.to},e.text)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"mobile-navbar-menu-button",onClick:function(){return n(!t)},"aria-label":"Menu"},a.a.createElement("svg",{height:20,width:20},a.a.createElement("rect",{x:0,y:3,width:20,height:3}),a.a.createElement("rect",{x:0,y:17/3+3,width:20,height:3}),a.a.createElement("rect",{x:0,y:34/3+3,width:20,height:3}))),a.a.createElement("nav",{className:"mobile-navbar"+(t?"":" hidden")},i.map((function(e,r){return a.a.createElement("div",{className:t?"":"hidden",key:r,onClick:function(){return n(!1)}},e)}))),a.a.createElement("nav",{className:"navbar",id:"navbar"},i))}var c=[{symbol:a.a.createElement("svg",{viewBox:"0 0 85 85"},a.a.createElement("title",null,"Facebook"),a.a.createElement("desc",null,"The F icon for Facebook inside a circle"),a.a.createElement("g",null,a.a.createElement("circle",{cx:"42.5",cy:"42.5",r:"42.5",className:"icon-circle"}),a.a.createElement("path",{fill:"white",d:"M63.18,19.26H21.82a2.56,2.56,0,0,0-2.56,2.56V63.18a2.56,2.56,0,0,0,2.56,2.56H44.09v-18H38v-7h6.06V35.55c0-6,3.66-9.27,9-9.27a48.14,48.14,0,0,1,5.41.28v6.27H54.81c-2.92,0-3.48,1.39-3.48,3.42v4.48h7l-.91,7h-6v18H63.18a2.56,2.56,0,0,0,2.56-2.56V21.82A2.56,2.56,0,0,0,63.18,19.26Z"}))),url:"https://www.facebook.com/XINGLYCHEE/",key:"facebook"},{symbol:a.a.createElement("svg",{viewBox:"0 0 85 85"},a.a.createElement("title",null,"Instagram"),a.a.createElement("desc",null,"The camera icon for Instagram inside a circle"),a.a.createElement("g",null,a.a.createElement("circle",{cx:"42.5",cy:"42.5",r:"42.5",className:"icon-circle"}),a.a.createElement("path",{fill:"white",d:"M42.5,23c6.35,0,7.11,0,9.62.14a12.93,12.93,0,0,1,4.42.82,7.91,7.91,0,0,1,4.51,4.51,12.93,12.93,0,0,1,.82,4.42c.12,2.51.14,3.27.14,9.62s0,7.11-.14,9.62a12.93,12.93,0,0,1-.82,4.42,7.91,7.91,0,0,1-4.51,4.51,12.93,12.93,0,0,1-4.42.82c-2.51.12-3.26.14-9.62.14s-7.11,0-9.62-.14a12.93,12.93,0,0,1-4.42-.82A7.91,7.91,0,0,1,24,56.54a12.93,12.93,0,0,1-.82-4.42C23,49.61,23,48.85,23,42.5s0-7.11.14-9.62A12.93,12.93,0,0,1,24,28.46,7.91,7.91,0,0,1,28.46,24a12.93,12.93,0,0,1,4.42-.82C35.39,23,36.15,23,42.5,23m0-4.29c-6.46,0-7.27,0-9.81.14A17.49,17.49,0,0,0,26.91,20a12.1,12.1,0,0,0-7,7,17.49,17.49,0,0,0-1.11,5.78c-.11,2.54-.14,3.35-.14,9.81s0,7.27.14,9.81A17.49,17.49,0,0,0,20,58.09a12.1,12.1,0,0,0,7,7,17.49,17.49,0,0,0,5.78,1.11c2.54.11,3.35.14,9.81.14s7.27,0,9.81-.14a17.49,17.49,0,0,0,5.78-1.11,12.1,12.1,0,0,0,7-7,17.49,17.49,0,0,0,1.11-5.78c.11-2.54.14-3.35.14-9.81s0-7.27-.14-9.81a17.49,17.49,0,0,0-1.11-5.78,12.1,12.1,0,0,0-7-7,17.49,17.49,0,0,0-5.78-1.11c-2.54-.11-3.35-.14-9.81-.14Z"}),a.a.createElement("path",{fill:"white",d:"M42.5,30.28A12.22,12.22,0,1,0,54.72,42.5,12.22,12.22,0,0,0,42.5,30.28Zm0,20.15a7.93,7.93,0,1,1,7.93-7.93A7.93,7.93,0,0,1,42.5,50.43Z"}),a.a.createElement("circle",{fill:"white",cx:"55.2",cy:"29.8",r:"2.86"}))),url:"https://www.instagram.com/xing_music_/",key:"instagram"},{symbol:a.a.createElement("svg",{viewBox:"0 0 85 85"},a.a.createElement("title",null,"YouTube"),a.a.createElement("desc",null,"The play button icon for YouTube inside a circle"),a.a.createElement("g",null,a.a.createElement("circle",{cx:"42.5",cy:"42.5",r:"42.5",className:"icon-circle"}),a.a.createElement("path",{fill:"white",d:"M66.3,52a6.82,6.82,0,0,1-6.8,6.8h-34A6.82,6.82,0,0,1,18.7,52V33a6.82,6.82,0,0,1,6.8-6.8h34A6.82,6.82,0,0,1,66.3,33ZM37.58,48.34l12.87-6.66L37.58,35Z"}))),url:"https://www.youtube.com/channel/UCF1a0GVK1IwaxvJmA3unI_Q/",key:"youtube"},{symbol:a.a.createElement("svg",{viewBox:"0 0 168 168"},a.a.createElement("title",null,"Spotify"),a.a.createElement("desc",null,"Spotify's logo inside a circle"),a.a.createElement("g",null,a.a.createElement("circle",{cx:"84",cy:"84",r:"84",className:"icon-circle"}),a.a.createElement("path",{fill:"white",d:"m120.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"}))),url:"https://open.spotify.com/artist/56YRiQwXTCOKkls3onowKd?si=T8TPZnx4TMCsE4Zgl-N-_g",key:"spotify"}];function l(){return a.a.createElement("div",{className:"social-media-link-section"},c.map((function(e){return a.a.createElement("div",{key:e.key},a.a.createElement("svg",{width:33,height:33,className:"social-media-icon",role:"img",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("a",{href:e.url,className:"social-media-link",target:"_blank",rel:"noreferrer"},e.symbol)))})))}var u=n("qhky");function s(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:"XING"},a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{name:"description",content:"Artist page for the musician XING"})),a.a.createElement(i,null),a.a.createElement("main",null,t),a.a.createElement(l,null))}function f(e){var t=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(u.a,{title:"XING"},a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{name:"description",content:"Artist page for the musician XING"})),a.a.createElement("main",null,t),a.a.createElement(l,null))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=t.entries();!(l=s.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(n&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!t.$$typeof)&&!e(t[u[l]],i[u[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("E9XD");var r,a,o,i,c=n("17x9"),l=n.n(c),u=n("8+s/"),s=n.n(u),f=n("ZhWT"),p=n.n(f),m=n("q1tI"),d=n.n(m),h=n("YVoz"),y=n.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",k="name",x="property",j="rel",I="src",P="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",R="encodeSpecialCharacters",_="onChangeClientState",B="titleTemplate",H=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),q=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,T.TITLE),n=Q(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Q(e,L);return t||r||void 0},X=function(e){return Q(e,_)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},W=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==E&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},Q=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(T.BODY,r),le(T.HTML,a),ce(f,p);var m={baseTag:ue(T.BASE,n),linkTags:ue(T.LINK,o),metaTags:ue(T.META,i),noscriptTags:ue(T.NOSCRIPT,c),scriptTags:ue(T.SCRIPT,u),styleTags:ue(T.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(T.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=se(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Z(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},me=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,r),bodyAttributes:pe(b,n,r),htmlAttributes:pe(v,a,r),link:pe(T.LINK,o,r),meta:pe(T.META,i,r),noscript:pe(T.NOSCRIPT,c,r),script:pe(T.SCRIPT,l,r),style:pe(T.STYLE,u,r),title:pe(T.TITLE,{title:f,titleAttributes:p},r)}},de=s()((function(e){return{baseTag:W([A,P],e),bodyAttributes:G(b,e),defer:Q(e,M),encode:Q(e,R),htmlAttributes:G(v,e),linkTags:J(T.LINK,[j,A],e),metaTags:J(T.META,[k,w,C,x,S],e),noscriptTags:J(T.NOSCRIPT,[O],e),onChangeClientState:X(e),scriptTags:J(T.SCRIPT,[I,O],e),styleTags:J(T.STYLE,[E],e),title:K(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),me)((function(){return null})),he=(a=de,i=o=function(e){function t(){return Y(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case T.TITLE:return z({},a,((t={})[r.type]=i,t.titleAttributes=z({},o),t));case T.BODY:return z({},a,{bodyAttributes:z({},o)});case T.HTML:return z({},a,{htmlAttributes:z({},o)})}return z({},a,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(U(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=me({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))}}]);