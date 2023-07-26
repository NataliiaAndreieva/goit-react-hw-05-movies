/*! For license information please see 202.e76953c8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[202],{202:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var r,o,i,a,c,u,s,l,f,h,p=n(439),d=n(791),v=n(689),g=n(87),x=n(758),y=n(686),m=n.n(y),w=n(135),b=n(171),j=n(168),k=n(867),Z=k.ZP.div(r||(r=(0,j.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px 20px 20px;\n"]))),_=(0,k.ZP)(g.rU)(o||(o=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-size: 20px;\n  max-width: 100px;\n  text-decoration: none;\n\n  padding: 8px 12px;\n  cursor: pointer;\n  border-radius: 8px;\n  border: 2px solid black;\n  margin-bottom: 20px;\n"]))),L=k.ZP.p(i||(i=(0,j.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n  margin: 10px 0;\n"]))),E=k.ZP.p(a||(a=(0,j.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  color: black;\n  margin: 10px 0;\n"]))),P=k.ZP.h1(c||(c=(0,j.Z)(["\n  font-size: 25px;\n  font-weight: 700;\n  color: black;\n  margin: 10px 0;\n"]))),O=k.ZP.p(u||(u=(0,j.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  color: black;\n  margin: 10px 0;\n"]))),F=k.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid black;\n"]))),S=k.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 10px 20px;\n"]))),N=k.ZP.ul(f||(f=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 10px 20px;\n"]))),G=k.ZP.div(h||(h=(0,j.Z)(["\n  border-bottom: 1px solid black;\n"]))),U=n(184),C=function(){var t,e,n=(0,d.useState)(null),r=(0,p.Z)(n,2),o=r[0],i=r[1],a=(0,v.UO)().movieId,c=(0,v.TH)(),u=(0,d.useRef)(null!==(t=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/movies");if((0,d.useEffect)((function(){(0,b.TP)(a).then((function(t){return i(t)})).catch((function(){m().Notify.failure("\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u0435\u0440\u0435\u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443)")}))}),[a]),o){var s=o.title,l=o.poster_path,f=o.vote_average,h=o.overview,y=o.genres,j=o.release_date,k=Math.floor(10*f),C=j.slice(0,4);return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(Z,{children:[(0,U.jsxs)(_,{to:u.current,children:[(0,U.jsx)(w.x_l,{size:"20px"}),"Go back"]}),(0,U.jsxs)(F,{children:[(0,U.jsx)(U.Fragment,{children:l?(0,U.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(l),alt:s}):(0,U.jsx)("img",{src:"https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=No+Image",alt:"No Available Foto"})}),(0,U.jsxs)(S,{children:[(0,U.jsxs)(P,{children:[s," (",C,")"]}),(0,U.jsxs)(O,{children:["User score: ",k,"%"]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{children:"Overview"}),h.length>0?(0,U.jsx)(E,{children:h}):(0,U.jsx)(E,{children:"We don't have any overview for this movie"})]}),(0,U.jsxs)("div",{children:[(0,U.jsx)(L,{children:"Genres"}),(0,U.jsx)(E,{children:y.map((function(t){return t.name})).join(" ")})]})]})]}),(0,U.jsxs)(G,{children:[(0,U.jsx)(L,{children:"Additional information"}),(0,U.jsxs)(N,{children:[(0,U.jsx)(g.rU,{to:"cast",children:"Cast"}),(0,U.jsx)(g.rU,{to:"reviews",children:"Reviews"})]})]}),(0,U.jsx)(d.Suspense,{fallback:(0,U.jsx)(x.Z,{}),children:(0,U.jsx)(v.j3,{})})]})})}}},171:function(t,e,n){n.d(e,{Df:function(){return u},TP:function(){return l},gH:function(){return s},tx:function(){return h},zv:function(){return f}});var r=n(861),o=n(243);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(O){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return r(a,"_invoke",{value:j(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var g={};s(g,a,(function(){return this}));var x=Object.getPrototypeOf,y=x&&x(x(E([])));y&&y!==e&&n.call(y,a)&&(g=y);var m=v.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,a,c){var u=f(t[r],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function j(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,r(m,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),s(m,u,"Generator"),s(m,a,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var a="https://api.themoviedb.org/3",c="8cc2c6d5c67d031f3c65730b4a109383",u=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/trending/movie/week?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/search/movie?query=").concat(e,"&api_key=").concat(c,"&language=en-US&include_adult=false&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=202.e76953c8.chunk.js.map