!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return E}),n.d(t,"c",function(){return W});var r=function(){},o={},i=[],l=[];function a(e,t){var n,a,u,c,p=l;for(c=arguments.length;c-- >2;)i.push(arguments[c]);for(t&&null!=t.children&&(i.length||i.push(t.children),delete t.children);i.length;)if((a=i.pop())&&void 0!==a.pop)for(c=a.length;c--;)i.push(a[c]);else"boolean"==typeof a&&(a=null),(u="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(u=!1)),u&&n?p[p.length-1]+=a:p===l?p=[a]:p.push(a),n=u;var s=new r;return s.nodeName=e,s.children=p,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==o.vnode&&o.vnode(s),s}function u(e,t){for(var n in t)e[n]=t[n];return e}var c="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var p=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,s=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==s.push(e)&&(o.debounceRendering||c)(d)}function d(){var e,t=s;for(s=[];e=t.pop();)e._dirty&&B(e)}function v(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&_(e,t.nodeName):n||e._componentConstructor===t.nodeName}function _(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=u({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===p.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,l):e.removeEventListener(t,h,l),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var a=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(a?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function h(e){return this._listeners[e.type](o.event&&o.event(e)||e)}var g=[],x=0,C=!1,w=!1;function S(){for(var e;e=g.pop();)o.afterMount&&o.afterMount(e),e.componentDidMount&&e.componentDidMount()}function N(e,t,n,r,o,i){x++||(C=null!=o&&void 0!==o.ownerSVGElement,w=null!=e&&!("__preactattr_"in e));var l=k(e,t,n,r,i);return o&&l.parentNode!==o&&o.appendChild(l),--x||(w=!1,i||S()),l}function k(e,t,n,r,o){var i=e,l=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return function(e,t,n,r){var o=e&&e._component,i=o,l=e,a=o&&e._componentConstructor===t.nodeName,u=a,c=m(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(M(o,c,3,n,r),e=o.base):(i&&!a&&(L(i),e=l=null),o=U(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,l=null),M(o,c,1,n,r),e=o.base,l&&e!==l&&(l._component=null,O(l,!1)));return e}(e,t,n,r);if(C="svg"===a||"foreignObject"!==a&&C,a=String(a),(!e||!_(e,a))&&(i=function(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.normalizedNodeName=e,n}(a,C),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),O(e,!0)}var u=i.firstChild,c=i.__preactattr_,p=t.children;if(null==c){c=i.__preactattr_={};for(var s=i.attributes,f=s.length;f--;)c[s[f].name]=s[f].value}return!w&&p&&1===p.length&&"string"==typeof p[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=p[0]&&(u.nodeValue=p[0]):(p&&p.length||null!=u)&&function(e,t,n,r,o){var i,l,a,u,c,p=e.childNodes,s=[],f={},d=0,_=0,m=p.length,y=0,h=t?t.length:0;if(0!==m)for(var g=0;g<m;g++){var x=p[g],C=x.__preactattr_,w=h&&C?x._component?x._component.__key:C.key:null;null!=w?(d++,f[w]=x):(C||(void 0!==x.splitText?!o||x.nodeValue.trim():o))&&(s[y++]=x)}if(0!==h)for(var g=0;g<h;g++){u=t[g],c=null;var w=u.key;if(null!=w)d&&void 0!==f[w]&&(c=f[w],f[w]=void 0,d--);else if(_<y)for(i=_;i<y;i++)if(void 0!==s[i]&&v(l=s[i],u,o)){c=l,s[i]=void 0,i===y-1&&y--,i===_&&_++;break}c=k(c,u,n,r),a=p[g],c&&c!==e&&c!==a&&(null==a?e.appendChild(c):c===a.nextSibling?b(a):e.insertBefore(c,a))}if(d)for(var g in f)void 0!==f[g]&&O(f[g],!1);for(;_<=y;)void 0!==(c=s[y--])&&O(c,!1)}(i,p,n,r,w||null!=c.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||y(e,r,n[r],n[r]=void 0,C);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||y(e,r,n[r],n[r]=t[r],C)}(i,t.attributes,c),C=l,i}function O(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||b(e),P(e))}function P(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}var j=[];function U(e,t,n){var r,o=j.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),E.call(r,t,n)):((r=new E(t,n)).constructor=e,r.render=T);o--;)if(j[o].constructor===e)return r.nextBase=j[o].nextBase,j.splice(o,1),r;return r}function T(e,t,n){return this.constructor(e,n)}function M(e,t,n,r,i){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===o.syncComponentUpdates&&e.base?f(e):B(e,1,i)),e.__ref&&e.__ref(e))}function B(e,t,n,r){if(!e._disable){var i,l,a,c=e.props,p=e.state,s=e.context,f=e.prevProps||c,d=e.prevState||p,v=e.prevContext||s,_=e.base,b=e.nextBase,y=_||b,h=e._component,C=!1,w=v;if(e.constructor.getDerivedStateFromProps&&(p=u(u({},p),e.constructor.getDerivedStateFromProps(c,p)),e.state=p),_&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,p,s)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(c,p,s),e.props=c,e.state=p,e.context=s),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!C){i=e.render(c,p,s),e.getChildContext&&(s=u(u({},s),e.getChildContext())),_&&e.getSnapshotBeforeUpdate&&(w=e.getSnapshotBeforeUpdate(f,d));var k,P,j=i&&i.nodeName;if("function"==typeof j){var T=m(i);(l=h)&&l.constructor===j&&T.key==l.__key?M(l,T,1,s,!1):(k=l,e._component=l=U(j,T,s),l.nextBase=l.nextBase||b,l._parentComponent=e,M(l,T,0,s,!1),B(l,1,n,!0)),P=l.base}else a=y,(k=h)&&(a=e._component=null),(y||1===t)&&(a&&(a._component=null),P=N(a,i,s,n||!_,y&&y.parentNode,!0));if(y&&P!==y&&l!==h){var E=y.parentNode;E&&P!==E&&(E.replaceChild(P,y),k||(y._component=null,O(y,!1)))}if(k&&L(k),e.base=P,P&&!r){for(var W=e,D=e;D=D._parentComponent;)(W=D).base=P;P._component=W,P._componentConstructor=W.constructor}}for(!_||n?g.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,d,w),o.afterUpdate&&o.afterUpdate(e));e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);x||r||S()}}function L(e){o.beforeUnmount&&o.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?L(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,b(t),j.push(e),P(t)),e.__ref&&e.__ref(null)}function E(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function W(e,t,n){return N(n,e,{},!1,t,!1)}u(E.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=u(u({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),f(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),B(this,2)},render:function(){}})},function(e,t,n){"use strict";n.r(t);var r,o=n(0);!function(){var e=n(2).default;r=Object(o.c)(Object(o.b)(e,null),document.body,r)}()},function(e,t,n){"use strict";n.r(t);var r=n(0),o=function(){return Object(r.b)("p",{class:"hello"},"Hello, cruel world!")};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return p});var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,u(t).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r["a"]),function(e,t,n){t&&l(e.prototype,t),n&&l(e,n)}(t,[{key:"render",value:function(){return Object(r.b)("div",{class:"app"},Object(r.b)("h1",null,"Hello!"),Object(r.b)(o,null))}}]),t}()}]);
//# sourceMappingURL=main.js.map