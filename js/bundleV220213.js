/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
/*!
  * Bootstrap v4.5.3 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap={},t.jQuery)}(this,(function(t,e){"use strict";function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=n(e);function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function s(t){var e=this,n=!1;return i.default(this).one(l.TRANSITION_END,(function(){n=!0})),setTimeout((function(){n||l.triggerTransitionEnd(e)}),t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i.default(t).css("transition-duration"),n=i.default(t).css("transition-delay"),o=parseFloat(e),r=parseFloat(n);return o||r?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i.default(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],a=r&&l.isElement(r)?"element":null===(s=r)||"undefined"==typeof s?""+s:{}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(a))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+a+'" but expected type "'+o+'".')}var s},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?l.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof i.default)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=i.default.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};l.jQueryDetection(),i.default.fn.emulateTransitionEnd=s,i.default.event.special[l.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(i.default(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var u="alert",f=i.default.fn[u],d=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){i.default.removeData(this._element,"bs.alert"),this._element=null},e._getRootElement=function(t){var e=l.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=i.default(t).closest(".alert")[0]),n},e._triggerCloseEvent=function(t){var e=i.default.Event("close.bs.alert");return i.default(t).trigger(e),e},e._removeElement=function(t){var e=this;if(i.default(t).removeClass("show"),i.default(t).hasClass("fade")){var n=l.getTransitionDurationFromElement(t);i.default(t).one(l.TRANSITION_END,(function(n){return e._destroyElement(t,n)})).emulateTransitionEnd(n)}else this._destroyElement(t)},e._destroyElement=function(t){i.default(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.alert");o||(o=new t(this),n.data("bs.alert",o)),"close"===e&&o[e](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}}]),t}();i.default(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),i.default.fn[u]=d._jQueryInterface,i.default.fn[u].Constructor=d,i.default.fn[u].noConflict=function(){return i.default.fn[u]=f,d._jQueryInterface};var c=i.default.fn.button,h=function(){function t(t){this._element=t,this.shouldAvoidTriggerChange=!1}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=i.default(this._element).closest('[data-toggle="buttons"]')[0];if(n){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var r=n.querySelector(".active");r&&i.default(r).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),this.shouldAvoidTriggerChange||i.default(o).trigger("change")),o.focus(),e=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&i.default(this._element).toggleClass("active"))},e.dispose=function(){i.default.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this),r=o.data("bs.button");r||(r=new t(this),o.data("bs.button",r)),r.shouldAvoidTriggerChange=n,"toggle"===e&&r[e]()}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}}]),t}();i.default(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var e=t.target,n=e;if(i.default(e).hasClass("btn")||(e=i.default(e).closest(".btn")[0]),!e||e.hasAttribute("disabled")||e.classList.contains("disabled"))t.preventDefault();else{var o=e.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"INPUT"!==n.tagName&&"LABEL"===e.tagName||h._jQueryInterface.call(i.default(e),"toggle","INPUT"===n.tagName)}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var e=i.default(t.target).closest(".btn")[0];i.default(e).toggleClass("focus",/^focus(in)?$/.test(t.type))})),i.default(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var r=0,a=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<a;r++){var s=t[r];"true"===s.getAttribute("aria-pressed")?s.classList.add("active"):s.classList.remove("active")}})),i.default.fn.button=h._jQueryInterface,i.default.fn.button.Constructor=h,i.default.fn.button.noConflict=function(){return i.default.fn.button=c,h._jQueryInterface};var p="carousel",m=".bs.carousel",g=i.default.fn[p],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},_={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},b={TOUCH:"touch",PEN:"pen"},y=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=t.prototype;return e.next=function(){this._isSliding||this._slide("next")},e.nextWhenVisible=function(){var t=i.default(this._element);!document.hidden&&t.is(":visible")&&"hidden"!==t.css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide("prev")},e.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(l.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(t){var e=this;this._activeElement=this._element.querySelector(".active.carousel-item");var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)i.default(this._element).one("slid.bs.carousel",(function(){return e.to(t)}));else{if(n===t)return this.pause(),void this.cycle();var o=t>n?"next":"prev";this._slide(o,this._items[t])}},e.dispose=function(){i.default(this._element).off(m),i.default.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(t){return t=a({},v,t),l.typeCheckConfig(p,t,_),t},e._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&i.default(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&i.default(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var e=function(e){t._pointerEvent&&b[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},n=function(e){t._pointerEvent&&b[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(i.default(this._element).on("pointerdown.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("pointerup.bs.carousel",(function(t){return n(t)})),this._element.classList.add("pointer-event")):(i.default(this._element).on("touchstart.bs.carousel",(function(t){return e(t)})),i.default(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),i.default(this._element).on("touchend.bs.carousel",(function(t){return n(t)})))}},e._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},e._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},e._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var a=(o+("prev"===t?-1:1))%this._items.length;return-1===a?this._items[this._items.length-1]:this._items[a]},e._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),r=i.default.Event("slide.bs.carousel",{relatedTarget:t,direction:e,from:o,to:n});return i.default(this._element).trigger(r),r},e._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));i.default(e).removeClass("active");var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&i.default(n).addClass("active")}},e._slide=function(t,e){var n,o,r,a=this,s=this._element.querySelector(".active.carousel-item"),u=this._getItemIndex(s),f=e||s&&this._getItemByDirection(t,s),d=this._getItemIndex(f),c=Boolean(this._interval);if("next"===t?(n="carousel-item-left",o="carousel-item-next",r="left"):(n="carousel-item-right",o="carousel-item-prev",r="right"),f&&i.default(f).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(f,r).isDefaultPrevented()&&s&&f){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(f);var h=i.default.Event("slid.bs.carousel",{relatedTarget:f,direction:r,from:u,to:d});if(i.default(this._element).hasClass("slide")){i.default(f).addClass(o),l.reflow(f),i.default(s).addClass(n),i.default(f).addClass(n);var p=parseInt(f.getAttribute("data-interval"),10);p?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=p):this._config.interval=this._config.defaultInterval||this._config.interval;var m=l.getTransitionDurationFromElement(s);i.default(s).one(l.TRANSITION_END,(function(){i.default(f).removeClass(n+" "+o).addClass("active"),i.default(s).removeClass("active "+o+" "+n),a._isSliding=!1,setTimeout((function(){return i.default(a._element).trigger(h)}),0)})).emulateTransitionEnd(m)}else i.default(s).removeClass("active"),i.default(f).addClass("active"),this._isSliding=!1,i.default(this._element).trigger(h);c&&this.cycle()}},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data("bs.carousel"),o=a({},v,i.default(this).data());"object"==typeof e&&(o=a({},o,e));var r="string"==typeof e?e:o.slide;if(n||(n=new t(this,o),i.default(this).data("bs.carousel",n)),"number"==typeof e)n.to(e);else if("string"==typeof r){if("undefined"==typeof n[r])throw new TypeError('No method named "'+r+'"');n[r]()}else o.interval&&o.ride&&(n.pause(),n.cycle())}))},t._dataApiClickHandler=function(e){var n=l.getSelectorFromElement(this);if(n){var o=i.default(n)[0];if(o&&i.default(o).hasClass("carousel")){var r=a({},i.default(o).data(),i.default(this).data()),s=this.getAttribute("data-slide-to");s&&(r.interval=!1),t._jQueryInterface.call(i.default(o),r),s&&i.default(o).data("bs.carousel").to(s),e.preventDefault()}}},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return v}}]),t}();i.default(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",y._dataApiClickHandler),i.default(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var o=i.default(t[e]);y._jQueryInterface.call(o,o.data())}})),i.default.fn[p]=y._jQueryInterface,i.default.fn[p].Constructor=y,i.default.fn[p].noConflict=function(){return i.default.fn[p]=g,y._jQueryInterface};var w="collapse",E=i.default.fn[w],T={toggle:!0,parent:""},C={toggle:"boolean",parent:"(string|element)"},S=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var r=n[i],a=l.getSelectorFromElement(r),s=[].slice.call(document.querySelectorAll(a)).filter((function(e){return e===t}));null!==a&&s.length>0&&(this._selector=a,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=t.prototype;return e.toggle=function(){i.default(this._element).hasClass("show")?this.hide():this.show()},e.show=function(){var e,n,o=this;if(!this._isTransitioning&&!i.default(this._element).hasClass("show")&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(e=null),!(e&&(n=i.default(e).not(this._selector).data("bs.collapse"))&&n._isTransitioning))){var r=i.default.Event("show.bs.collapse");if(i.default(this._element).trigger(r),!r.isDefaultPrevented()){e&&(t._jQueryInterface.call(i.default(e).not(this._selector),"hide"),n||i.default(e).data("bs.collapse",null));var a=this._getDimension();i.default(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[a]=0,this._triggerArray.length&&i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(a[0].toUpperCase()+a.slice(1)),u=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,(function(){i.default(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[a]="",o.setTransitioning(!1),i.default(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(u),this._element.style[a]=this._element[s]+"px"}}},e.hide=function(){var t=this;if(!this._isTransitioning&&i.default(this._element).hasClass("show")){var e=i.default.Event("hide.bs.collapse");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",l.reflow(this._element),i.default(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var r=0;r<o;r++){var a=this._triggerArray[r],s=l.getSelectorFromElement(a);if(null!==s)i.default([].slice.call(document.querySelectorAll(s))).hasClass("show")||i.default(a).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var u=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,(function(){t.setTransitioning(!1),i.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(u)}}},e.setTransitioning=function(t){this._isTransitioning=t},e.dispose=function(){i.default.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(t){return(t=a({},T,t)).toggle=Boolean(t.toggle),l.typeCheckConfig(w,t,C),t},e._getDimension=function(){return i.default(this._element).hasClass("width")?"width":"height"},e._getParent=function(){var e,n=this;l.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',r=[].slice.call(e.querySelectorAll(o));return i.default(r).each((function(e,i){n._addAriaAndCollapsedClass(t._getTargetFromElement(i),[i])})),e},e._addAriaAndCollapsedClass=function(t,e){var n=i.default(t).hasClass("show");e.length&&i.default(e).toggleClass("collapsed",!n).attr("aria-expanded",n)},t._getTargetFromElement=function(t){var e=l.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.collapse"),r=a({},T,n.data(),"object"==typeof e&&e?e:{});if(!o&&r.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(r.toggle=!1),o||(o=new t(this,r),n.data("bs.collapse",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return T}}]),t}();i.default(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var e=i.default(this),n=l.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(n));i.default(o).each((function(){var t=i.default(this),n=t.data("bs.collapse")?"toggle":e.data();S._jQueryInterface.call(t,n)}))})),i.default.fn[w]=S._jQueryInterface,i.default.fn[w].Constructor=S,i.default.fn[w].noConflict=function(){return i.default.fn[w]=E,S._jQueryInterface};var D="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,N=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(D&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();var k=D&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),N))}};function A(t){return t&&"[object Function]"==={}.toString.call(t)}function I(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?n[e]:n}function O(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function x(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=I(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:x(O(t))}function j(t){return t&&t.referenceNode?t.referenceNode:t}var L=D&&!(!window.MSInputMethodContext||!document.documentMode),P=D&&/MSIE 10/.test(navigator.userAgent);function F(t){return 11===t?L:10===t?P:L||P}function R(t){if(!t)return document.documentElement;for(var e=F(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===I(n,"position")?R(n):n:t?t.ownerDocument.documentElement:document.documentElement}function H(t){return null!==t.parentNode?H(t.parentNode):t}function M(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var a,s,l=r.commonAncestorContainer;if(t!==l&&e!==l||i.contains(o))return"BODY"===(s=(a=l).nodeName)||"HTML"!==s&&R(a.firstElementChild)!==a?R(l):l;var u=H(t);return u.host?M(u.host,e):M(t,H(e).host)}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[n]}return t[n]}function q(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=B(e,"top"),o=B(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function Q(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function W(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],F(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function U(t){var e=t.body,n=t.documentElement,i=F(10)&&getComputedStyle(n);return{height:W("Height",e,n,i),width:W("Width",e,n,i)}}var V=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),z=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},X=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function K(t){return X({},t,{right:t.left+t.width,bottom:t.top+t.height})}function G(t){var e={};try{if(F(10)){e=t.getBoundingClientRect();var n=B(t,"top"),i=B(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?U(t.ownerDocument):{},a=r.width||t.clientWidth||o.width,s=r.height||t.clientHeight||o.height,l=t.offsetWidth-a,u=t.offsetHeight-s;if(l||u){var f=I(t);l-=Q(f,"x"),u-=Q(f,"y"),o.width-=l,o.height-=u}return K(o)}function $(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=F(10),o="HTML"===e.nodeName,r=G(t),a=G(e),s=x(t),l=I(e),u=parseFloat(l.borderTopWidth),f=parseFloat(l.borderLeftWidth);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=K({top:r.top-a.top-u,left:r.left-a.left-f,width:r.width,height:r.height});if(d.marginTop=0,d.marginLeft=0,!i&&o){var c=parseFloat(l.marginTop),h=parseFloat(l.marginLeft);d.top-=u-c,d.bottom-=u-c,d.left-=f-h,d.right-=f-h,d.marginTop=c,d.marginLeft=h}return(i&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(d=q(d,e)),d}function J(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=$(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),a=e?0:B(n),s=e?0:B(n,"left"),l={top:a-i.top+i.marginTop,left:s-i.left+i.marginLeft,width:o,height:r};return K(l)}function Z(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===I(t,"position"))return!0;var n=O(t);return!!n&&Z(n)}function tt(t){if(!t||!t.parentElement||F())return document.documentElement;for(var e=t.parentElement;e&&"none"===I(e,"transform");)e=e.parentElement;return e||document.documentElement}function et(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},a=o?tt(t):M(t,j(e));if("viewport"===i)r=J(a,o);else{var s=void 0;"scrollParent"===i?"BODY"===(s=x(O(e))).nodeName&&(s=t.ownerDocument.documentElement):s="window"===i?t.ownerDocument.documentElement:i;var l=$(s,a,o);if("HTML"!==s.nodeName||Z(a))r=l;else{var u=U(t.ownerDocument),f=u.height,d=u.width;r.top+=l.top-l.marginTop,r.bottom=f+l.top,r.left+=l.left-l.marginLeft,r.right=d+l.left}}var c="number"==typeof(n=n||0);return r.left+=c?n:n.left||0,r.top+=c?n:n.top||0,r.right-=c?n:n.right||0,r.bottom-=c?n:n.bottom||0,r}function nt(t){return t.width*t.height}function it(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=et(n,i,r,o),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},l=Object.keys(s).map((function(t){return X({key:t},s[t],{area:nt(s[t])})})).sort((function(t,e){return e.area-t.area})),u=l.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight})),f=u.length>0?u[0].key:l[0].key,d=t.split("-")[1];return f+(d?"-"+d:"")}function ot(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?tt(e):M(e,j(n));return $(n,o,i)}function rt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),i=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function at(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function st(t,e,n){n=n.split("-")[0];var i=rt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),a=r?"top":"left",s=r?"left":"top",l=r?"height":"width",u=r?"width":"height";return o[a]=e[a]+e[l]/2-i[l]/2,o[s]=n===s?e[s]-i[u]:e[at(s)],o}function lt(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function ut(t,e,n){return(void 0===n?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var i=lt(t,(function(t){return t[e]===n}));return t.indexOf(i)}(t,"name",n))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t.function||t.fn;t.enabled&&A(n)&&(e.offsets.popper=K(e.offsets.popper),e.offsets.reference=K(e.offsets.reference),e=n(e,t))})),e}function ft(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=ot(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=it(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=st(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=ut(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function dt(t,e){return t.some((function(t){var n=t.name;return t.enabled&&n===e}))}function ct(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!=typeof document.body.style[r])return r}return null}function ht(){return this.state.isDestroyed=!0,dt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ct("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function pt(t){var e=t.ownerDocument;return e?e.defaultView:window}function mt(t,e,n,i){n.updateBound=i,pt(t).addEventListener("resize",n.updateBound,{passive:!0});var o=x(t);return function t(e,n,i,o){var r="BODY"===e.nodeName,a=r?e.ownerDocument.defaultView:e;a.addEventListener(n,i,{passive:!0}),r||t(x(a.parentNode),n,i,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function gt(){this.state.eventsEnabled||(this.state=mt(this.reference,this.options,this.state,this.scheduleUpdate))}function vt(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,pt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function _t(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function bt(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&_t(e[n])&&(i="px"),t.style[n]=e[n]+i}))}var yt=D&&/Firefox/i.test(navigator.userAgent);function wt(t,e,n){var i=lt(t,(function(t){return t.name===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var Et=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Tt=Et.slice(3);function Ct(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Tt.indexOf(t),i=Tt.slice(n+1).concat(Tt.slice(0,n));return e?i.reverse():i}var St="flip",Dt="clockwise",Nt="counterclockwise";function kt(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),a=t.split(/(\+|\-)/).map((function(t){return t.trim()})),s=a.indexOf(lt(a,(function(t){return-1!==t.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,u=-1!==s?[a.slice(0,s).concat([a[s].split(l)[0]]),[a[s].split(l)[1]].concat(a.slice(s+1))]:[a];return(u=u.map((function(t,i){var o=(1===i?!r:r)?"height":"width",a=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)}),[]).map((function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],a=o[2];if(!r)return t;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=i}return K(s)[e]/100*r}if("vh"===a||"vw"===a){return("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r}return r}(t,o,e,n)}))}))).forEach((function(t,e){t.forEach((function(n,i){_t(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}var At={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),l=s?"left":"top",u=s?"width":"height",f={start:z({},l,r[l]),end:z({},l,r[l]+r[u]-a[u])};t.offsets.popper=X({},a,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,a=o.reference,s=i.split("-")[0],l=void 0;return l=_t(+n)?[+n,0]:kt(n,r,a,s),"left"===s?(r.top+=l[0],r.left-=l[1]):"right"===s?(r.top+=l[0],r.left+=l[1]):"top"===s?(r.left+=l[0],r.top-=l[1]):"bottom"===s&&(r.left+=l[0],r.top+=l[1]),t.popper=r,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,e){var n=e.boundariesElement||R(t.instance.popper);t.instance.reference===n&&(n=R(n));var i=ct("transform"),o=t.instance.popper.style,r=o.top,a=o.left,s=o[i];o.top="",o.left="",o[i]="";var l=et(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=r,o.left=a,o[i]=s,e.boundaries=l;var u=e.priority,f=t.offsets.popper,d={primary:function(t){var n=f[t];return f[t]<l[t]&&!e.escapeWithReference&&(n=Math.max(f[t],l[t])),z({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=f[n];return f[t]>l[t]&&!e.escapeWithReference&&(i=Math.min(f[n],l[t]-("right"===t?f.width:f.height))),z({},n,i)}};return u.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=X({},f,d[e](t))})),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",l=a?"left":"top",u=a?"width":"height";return n[s]<r(i[l])&&(t.offsets.popper[l]=r(i[l])-n[u]),n[l]>r(i[s])&&(t.offsets.popper[l]=r(i[s])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!wt(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,a=r.popper,s=r.reference,l=-1!==["left","right"].indexOf(o),u=l?"height":"width",f=l?"Top":"Left",d=f.toLowerCase(),c=l?"left":"top",h=l?"bottom":"right",p=rt(i)[u];s[h]-p<a[d]&&(t.offsets.popper[d]-=a[d]-(s[h]-p)),s[d]+p>a[h]&&(t.offsets.popper[d]+=s[d]+p-a[h]),t.offsets.popper=K(t.offsets.popper);var m=s[d]+s[u]/2-p/2,g=I(t.instance.popper),v=parseFloat(g["margin"+f]),_=parseFloat(g["border"+f+"Width"]),b=m-t.offsets.popper[d]-v-_;return b=Math.max(Math.min(a[u]-p,b),0),t.arrowElement=i,t.offsets.arrow=(z(n={},d,Math.round(b)),z(n,c,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(t,e){if(dt(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=et(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=at(i),r=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case St:a=[i,o];break;case Dt:a=Ct(i);break;case Nt:a=Ct(i,!0);break;default:a=e.behavior}return a.forEach((function(s,l){if(i!==s||a.length===l+1)return t;i=t.placement.split("-")[0],o=at(i);var u=t.offsets.popper,f=t.offsets.reference,d=Math.floor,c="left"===i&&d(u.right)>d(f.left)||"right"===i&&d(u.left)<d(f.right)||"top"===i&&d(u.bottom)>d(f.top)||"bottom"===i&&d(u.top)<d(f.bottom),h=d(u.left)<d(n.left),p=d(u.right)>d(n.right),m=d(u.top)<d(n.top),g=d(u.bottom)>d(n.bottom),v="left"===i&&h||"right"===i&&p||"top"===i&&m||"bottom"===i&&g,_=-1!==["top","bottom"].indexOf(i),b=!!e.flipVariations&&(_&&"start"===r&&h||_&&"end"===r&&p||!_&&"start"===r&&m||!_&&"end"===r&&g),y=!!e.flipVariationsByContent&&(_&&"start"===r&&p||_&&"end"===r&&h||!_&&"start"===r&&g||!_&&"end"===r&&m),w=b||y;(c||v||w)&&(t.flipped=!0,(c||v)&&(i=a[l+1]),w&&(r=function(t){return"end"===t?"start":"start"===t?"end":t}(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=X({},t.offsets.popper,st(t.instance.popper,t.offsets.reference,t.placement)),t=ut(t.instance.modifiers,t,"flip"))})),t},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=r[n]-(s?o[a?"width":"height"]:0),t.placement=at(e),t.offsets.popper=K(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!wt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=lt(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=lt(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==r?r:e.gpuAcceleration,s=R(t.instance.popper),l=G(s),u={position:o.position},f=function(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,a=Math.floor,s=function(t){return t},l=r(o.width),u=r(i.width),f=-1!==["left","right"].indexOf(t.placement),d=-1!==t.placement.indexOf("-"),c=e?f||d||l%2==u%2?r:a:s,h=e?r:s;return{left:c(l%2==1&&u%2==1&&!d&&e?i.left-1:i.left),top:h(i.top),bottom:h(i.bottom),right:c(i.right)}}(t,window.devicePixelRatio<2||!yt),d="bottom"===n?"top":"bottom",c="right"===i?"left":"right",h=ct("transform"),p=void 0,m=void 0;if(m="bottom"===d?"HTML"===s.nodeName?-s.clientHeight+f.bottom:-l.height+f.bottom:f.top,p="right"===c?"HTML"===s.nodeName?-s.clientWidth+f.right:-l.width+f.right:f.left,a&&h)u[h]="translate3d("+p+"px, "+m+"px, 0)",u[d]=0,u[c]=0,u.willChange="transform";else{var g="bottom"===d?-1:1,v="right"===c?-1:1;u[d]=m*g,u[c]=p*v,u.willChange=d+", "+c}var _={"x-placement":t.placement};return t.attributes=X({},_,t.attributes),t.styles=X({},u,t.styles),t.arrowStyles=X({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return bt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach((function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)})),t.arrowElement&&Object.keys(t.arrowStyles).length&&bt(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,o){var r=ot(o,e,t,n.positionFixed),a=it(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),bt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},It=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};V(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=k(this.update.bind(this)),this.options=X({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(X({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=X({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return X({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&A(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Y(t,[{key:"update",value:function(){return ft.call(this)}},{key:"destroy",value:function(){return ht.call(this)}},{key:"enableEventListeners",value:function(){return gt.call(this)}},{key:"disableEventListeners",value:function(){return vt.call(this)}}]),t}();It.Utils=("undefined"!=typeof window?window:global).PopperUtils,It.placements=Et,It.Defaults=At;var Ot="dropdown",xt=i.default.fn[Ot],jt=new RegExp("38|40|27"),Lt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Pt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Ft=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=t.prototype;return e.toggle=function(){if(!this._element.disabled&&!i.default(this._element).hasClass("disabled")){var e=i.default(this._menu).hasClass("show");t._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||i.default(this._element).hasClass("disabled")||i.default(this._menu).hasClass("show"))){var n={relatedTarget:this._element},o=i.default.Event("show.bs.dropdown",n),r=t._getParentFromElement(this._element);if(i.default(r).trigger(o),!o.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof It)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:l.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&i.default(r).addClass("position-static"),this._popper=new It(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===i.default(r).closest(".navbar-nav").length&&i.default(document.body).children().on("mouseover",null,i.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),i.default(this._menu).toggleClass("show"),i.default(r).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown",n))}}},e.hide=function(){if(!this._element.disabled&&!i.default(this._element).hasClass("disabled")&&i.default(this._menu).hasClass("show")){var e={relatedTarget:this._element},n=i.default.Event("hide.bs.dropdown",e),o=t._getParentFromElement(this._element);i.default(o).trigger(n),n.isDefaultPrevented()||(this._popper&&this._popper.destroy(),i.default(this._menu).toggleClass("show"),i.default(o).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown",e)))}},e.dispose=function(){i.default.removeData(this._element,"bs.dropdown"),i.default(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;i.default(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},e._getConfig=function(t){return t=a({},this.constructor.Default,i.default(this._element).data(),t),l.typeCheckConfig(Ot,t,this.constructor.DefaultType),t},e._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},e._getPlacement=function(){var t=i.default(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?e=i.default(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":i.default(this._menu).hasClass("dropdown-menu-right")&&(e="bottom-end"),e},e._detectNavbar=function(){return i.default(this._element).closest(".navbar").length>0},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a({},t,this._config.popperConfig)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data("bs.dropdown");if(n||(n=new t(this,"object"==typeof e?e:null),i.default(this).data("bs.dropdown",n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},t._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,r=n.length;o<r;o++){var a=t._getParentFromElement(n[o]),s=i.default(n[o]).data("bs.dropdown"),l={relatedTarget:n[o]};if(e&&"click"===e.type&&(l.clickEvent=e),s){var u=s._menu;if(i.default(a).hasClass("show")&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&i.default.contains(a,e.target))){var f=i.default.Event("hide.bs.dropdown",l);i.default(a).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),n[o].setAttribute("aria-expanded","false"),s._popper&&s._popper.destroy(),i.default(u).removeClass("show"),i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=l.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(e){if(!(/input|textarea/i.test(e.target.tagName)?32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||i.default(e.target).closest(".dropdown-menu").length):!jt.test(e.which))&&!this.disabled&&!i.default(this).hasClass("disabled")){var n=t._getParentFromElement(this),o=i.default(n).hasClass("show");if(o||27!==e.which){if(e.preventDefault(),e.stopPropagation(),!o||27===e.which||32===e.which)return 27===e.which&&i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void i.default(this).trigger("click");var r=[].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return i.default(t).is(":visible")}));if(0!==r.length){var a=r.indexOf(e.target);38===e.which&&a>0&&a--,40===e.which&&a<r.length-1&&a++,a<0&&(a=0),r[a].focus()}}}},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return Lt}},{key:"DefaultType",get:function(){return Pt}}]),t}();i.default(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',Ft._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",Ft._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",Ft._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),Ft._jQueryInterface.call(i.default(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),i.default.fn[Ot]=Ft._jQueryInterface,i.default.fn[Ot].Constructor=Ft,i.default.fn[Ot].noConflict=function(){return i.default.fn[Ot]=xt,Ft._jQueryInterface};var Rt=i.default.fn.modal,Ht={backdrop:!0,keyboard:!0,focus:!0,show:!0},Mt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Bt=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=t.prototype;return e.toggle=function(t){return this._isShown?this.hide():this.show(t)},e.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){i.default(this._element).hasClass("fade")&&(this._isTransitioning=!0);var n=i.default.Event("show.bs.modal",{relatedTarget:t});i.default(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),i.default(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return e.hide(t)})),i.default(this._dialog).on("mousedown.dismiss.bs.modal",(function(){i.default(e._element).one("mouseup.dismiss.bs.modal",(function(t){i.default(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return e._showElement(t)})))}},e.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=i.default.Event("hide.bs.modal");if(i.default(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var o=i.default(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),i.default(document).off("focusin.bs.modal"),i.default(this._element).removeClass("show"),i.default(this._element).off("click.dismiss.bs.modal"),i.default(this._dialog).off("mousedown.dismiss.bs.modal"),o){var r=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,(function(t){return e._hideModal(t)})).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return i.default(t).off(".bs.modal")})),i.default(document).off("focusin.bs.modal"),i.default.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(t){return t=a({},Ht,t),l.typeCheckConfig("modal",t,Mt),t},e._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var e=i.default.Event("hidePrevented.bs.modal");if(i.default(this._element).trigger(e),e.isDefaultPrevented())return;var n=this._element.scrollHeight>document.documentElement.clientHeight;n||(this._element.style.overflowY="hidden"),this._element.classList.add("modal-static");var o=l.getTransitionDurationFromElement(this._dialog);i.default(this._element).off(l.TRANSITION_END),i.default(this._element).one(l.TRANSITION_END,(function(){t._element.classList.remove("modal-static"),n||i.default(t._element).one(l.TRANSITION_END,(function(){t._element.style.overflowY=""})).emulateTransitionEnd(t._element,o)})).emulateTransitionEnd(o),this._element.focus()}else this.hide()},e._showElement=function(t){var e=this,n=i.default(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),i.default(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,n&&l.reflow(this._element),i.default(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var r=i.default.Event("shown.bs.modal",{relatedTarget:t}),a=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,i.default(e._element).trigger(r)};if(n){var s=l.getTransitionDurationFromElement(this._dialog);i.default(this._dialog).one(l.TRANSITION_END,a).emulateTransitionEnd(s)}else a()},e._enforceFocus=function(){var t=this;i.default(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(e){document!==e.target&&t._element!==e.target&&0===i.default(t._element).has(e.target).length&&t._element.focus()}))},e._setEscapeEvent=function(){var t=this;this._isShown?i.default(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||i.default(this._element).off("keydown.dismiss.bs.modal")},e._setResizeEvent=function(){var t=this;this._isShown?i.default(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):i.default(window).off("resize.bs.modal")},e._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop((function(){i.default(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),i.default(t._element).trigger("hidden.bs.modal")}))},e._removeBackdrop=function(){this._backdrop&&(i.default(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(t){var e=this,n=i.default(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),i.default(this._backdrop).appendTo(document.body),i.default(this._element).on("click.dismiss.bs.modal",(function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&e._triggerBackdropTransition()})),n&&l.reflow(this._backdrop),i.default(this._backdrop).addClass("show"),!t)return;if(!n)return void t();var o=l.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(l.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){i.default(this._backdrop).removeClass("show");var r=function(){e._removeBackdrop(),t&&t()};if(i.default(this._element).hasClass("fade")){var a=l.getTransitionDurationFromElement(this._backdrop);i.default(this._backdrop).one(l.TRANSITION_END,r).emulateTransitionEnd(a)}else r()}else t&&t()},e._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),n=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(e,n){var o=n.style.paddingRight,r=i.default(n).css("padding-right");i.default(n).data("padding-right",o).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")})),i.default(n).each((function(e,n){var o=n.style.marginRight,r=i.default(n).css("margin-right");i.default(n).data("margin-right",o).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,r=i.default(document.body).css("padding-right");i.default(document.body).data("padding-right",o).css("padding-right",parseFloat(r)+this._scrollbarWidth+"px")}i.default(document.body).addClass("modal-open")},e._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));i.default(t).each((function(t,e){var n=i.default(e).data("padding-right");i.default(e).removeData("padding-right"),e.style.paddingRight=n||""}));var e=[].slice.call(document.querySelectorAll(".sticky-top"));i.default(e).each((function(t,e){var n=i.default(e).data("margin-right");"undefined"!=typeof n&&i.default(e).css("margin-right",n).removeData("margin-right")}));var n=i.default(document.body).data("padding-right");i.default(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(e,n){return this.each((function(){var o=i.default(this).data("bs.modal"),r=a({},Ht,i.default(this).data(),"object"==typeof e&&e?e:{});if(o||(o=new t(this,r),i.default(this).data("bs.modal",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](n)}else r.show&&o.show(n)}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return Ht}}]),t}();i.default(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var e,n=this,o=l.getSelectorFromElement(this);o&&(e=document.querySelector(o));var r=i.default(e).data("bs.modal")?"toggle":a({},i.default(e).data(),i.default(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=i.default(e).one("show.bs.modal",(function(t){t.isDefaultPrevented()||s.one("hidden.bs.modal",(function(){i.default(n).is(":visible")&&n.focus()}))}));Bt._jQueryInterface.call(i.default(e),r,this)})),i.default.fn.modal=Bt._jQueryInterface,i.default.fn.modal.Constructor=Bt,i.default.fn.modal.noConflict=function(){return i.default.fn.modal=Rt,Bt._jQueryInterface};var qt=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Qt={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Wt=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,Ut=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Vt(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),r=[].slice.call(i.body.querySelectorAll("*")),a=function(t,n){var i=r[t],a=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var s=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[a]||[]);s.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===qt.indexOf(n)||Boolean(t.nodeValue.match(Wt)||t.nodeValue.match(Ut));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},s=0,l=r.length;s<l;s++)a(s);return i.body.innerHTML}var Yt="tooltip",zt=i.default.fn[Yt],Xt=new RegExp("(^|\\s)bs-tooltip\\S+","g"),Kt=["sanitize","whiteList","sanitizeFn"],Gt={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},$t={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Jt={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Qt,popperConfig:null},Zt={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},te=function(){function t(t,e){if("undefined"==typeof It)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=i.default(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(i.default(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),i.default.removeData(this.element,this.constructor.DATA_KEY),i.default(this.element).off(this.constructor.EVENT_KEY),i.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===i.default(this.element).css("display"))throw new Error("Please use show on visible elements");var e=i.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i.default(this.element).trigger(e);var n=l.findShadowRoot(this.element),o=i.default.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!o)return;var r=this.getTipElement(),a=l.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&i.default(r).addClass("fade");var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,u=this._getAttachment(s);this.addAttachmentClass(u);var f=this._getContainer();i.default(r).data(this.constructor.DATA_KEY,this),i.default.contains(this.element.ownerDocument.documentElement,this.tip)||i.default(r).appendTo(f),i.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new It(this.element,r,this._getPopperConfig(u)),i.default(r).addClass("show"),"ontouchstart"in document.documentElement&&i.default(document.body).children().on("mouseover",null,i.default.noop);var d=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,i.default(t.element).trigger(t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)};if(i.default(this.tip).hasClass("fade")){var c=l.getTransitionDurationFromElement(this.tip);i.default(this.tip).one(l.TRANSITION_END,d).emulateTransitionEnd(c)}else d()}},e.hide=function(t){var e=this,n=this.getTipElement(),o=i.default.Event(this.constructor.Event.HIDE),r=function(){"show"!==e._hoverState&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),i.default(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(i.default(this.element).trigger(o),!o.isDefaultPrevented()){if(i.default(n).removeClass("show"),"ontouchstart"in document.documentElement&&i.default(document.body).children().off("mouseover",null,i.default.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,i.default(this.tip).hasClass("fade")){var a=l.getTransitionDurationFromElement(n);i.default(n).one(l.TRANSITION_END,r).emulateTransitionEnd(a)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-tooltip-"+t)},e.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},e.setContent=function(){var t=this.getTipElement();this.setElementContent(i.default(t.querySelectorAll(".tooltip-inner")),this.getTitle()),i.default(t).removeClass("fade show")},e.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Vt(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?i.default(e).parent().is(t)||t.empty().append(e):t.text(i.default(e).text())},e.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},e._getPopperConfig=function(t){var e=this;return a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:l.isElement(this.config.container)?i.default(this.config.container):i.default(document).find(this.config.container)},e._getAttachment=function(t){return $t[t.toUpperCase()]},e._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(e){if("click"===e)i.default(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==e){var n="hover"===e?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===e?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;i.default(t.element).on(n,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},i.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),i.default(e.getTipElement()).hasClass("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e.config.delay&&e.config.delay.show?e._timeout=setTimeout((function(){"show"===e._hoverState&&e.show()}),e.config.delay.show):e.show())},e._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||i.default(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i.default(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout((function(){"out"===e._hoverState&&e.hide()}),e.config.delay.hide):e.hide())},e._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},e._getConfig=function(t){var e=i.default(this.element).data();return Object.keys(e).forEach((function(t){-1!==Kt.indexOf(t)&&delete e[t]})),"number"==typeof(t=a({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l.typeCheckConfig(Yt,t,this.constructor.DefaultType),t.sanitize&&(t.template=Vt(t.template,t.whiteList,t.sanitizeFn)),t},e._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},e._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(Xt);null!==e&&e.length&&t.removeClass(e.join(""))},e._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},e._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(i.default(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.tooltip"),r="object"==typeof e&&e;if((o||!/dispose|hide/.test(e))&&(o||(o=new t(this,r),n.data("bs.tooltip",o)),"string"==typeof e)){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return Jt}},{key:"NAME",get:function(){return Yt}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Zt}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return Gt}}]),t}();i.default.fn[Yt]=te._jQueryInterface,i.default.fn[Yt].Constructor=te,i.default.fn[Yt].noConflict=function(){return i.default.fn[Yt]=zt,te._jQueryInterface};var ee="popover",ne=i.default.fn[ee],ie=new RegExp("(^|\\s)bs-popover\\S+","g"),oe=a({},te.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),re=a({},te.DefaultType,{content:"(string|element|function)"}),ae={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},se=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=o.prototype;return a.isWithContent=function(){return this.getTitle()||this._getContent()},a.addAttachmentClass=function(t){i.default(this.getTipElement()).addClass("bs-popover-"+t)},a.getTipElement=function(){return this.tip=this.tip||i.default(this.config.template)[0],this.tip},a.setContent=function(){var t=i.default(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},a._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},a._cleanTipClass=function(){var t=i.default(this.getTipElement()),e=t.attr("class").match(ie);null!==e&&e.length>0&&t.removeClass(e.join(""))},o._jQueryInterface=function(t){return this.each((function(){var e=i.default(this).data("bs.popover"),n="object"==typeof t?t:null;if((e||!/dispose|hide/.test(t))&&(e||(e=new o(this,n),i.default(this).data("bs.popover",e)),"string"==typeof t)){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}}))},r(o,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return oe}},{key:"NAME",get:function(){return ee}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return ae}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return re}}]),o}(te);i.default.fn[ee]=se._jQueryInterface,i.default.fn[ee].Constructor=se,i.default.fn[ee].noConflict=function(){return i.default.fn[ee]=ne,se._jQueryInterface};var le="scrollspy",ue=i.default.fn[le],fe={offset:10,method:"auto",target:""},de={offset:"number",method:"string",target:"(string|element)"},ce=function(){function t(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,i.default(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return n._process(t)})),this.refresh(),this._process()}var e=t.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":"position",n="auto"===this._config.method?e:this._config.method,o="position"===n?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var e,r=l.getSelectorFromElement(t);if(r&&(e=document.querySelector(r)),e){var a=e.getBoundingClientRect();if(a.width||a.height)return[i.default(e)[n]().top+o,r]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},e.dispose=function(){i.default.removeData(this._element,"bs.scrollspy"),i.default(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(t){if("string"!=typeof(t=a({},fe,"object"==typeof t&&t?t:{})).target&&l.isElement(t.target)){var e=i.default(t.target).attr("id");e||(e=l.getUID(le),i.default(t.target).attr("id",e)),t.target="#"+e}return l.typeCheckConfig(le,t,de),t},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),n=i.default([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass("active"),n.addClass("active")):(n.addClass("active"),n.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),n.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),i.default(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this).data("bs.scrollspy");if(n||(n=new t(this,"object"==typeof e&&e),i.default(this).data("bs.scrollspy",n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"Default",get:function(){return fe}}]),t}();i.default(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=i.default(t[e]);ce._jQueryInterface.call(n,n.data())}})),i.default.fn[le]=ce._jQueryInterface,i.default.fn[le].Constructor=ce,i.default.fn[le].noConflict=function(){return i.default.fn[le]=ue,ce._jQueryInterface};var he=i.default.fn.tab,pe=function(){function t(t){this._element=t}var e=t.prototype;return e.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&i.default(this._element).hasClass("active")||i.default(this._element).hasClass("disabled"))){var e,n,o=i.default(this._element).closest(".nav, .list-group")[0],r=l.getSelectorFromElement(this._element);if(o){var a="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";n=(n=i.default.makeArray(i.default(o).find(a)))[n.length-1]}var s=i.default.Event("hide.bs.tab",{relatedTarget:this._element}),u=i.default.Event("show.bs.tab",{relatedTarget:n});if(n&&i.default(n).trigger(s),i.default(this._element).trigger(u),!u.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,o);var f=function(){var e=i.default.Event("hidden.bs.tab",{relatedTarget:t._element}),o=i.default.Event("shown.bs.tab",{relatedTarget:n});i.default(n).trigger(e),i.default(t._element).trigger(o)};e?this._activate(e,e.parentNode,f):f()}}},e.dispose=function(){i.default.removeData(this._element,"bs.tab"),this._element=null},e._activate=function(t,e,n){var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?i.default(e).children(".active"):i.default(e).find("> li > .active"))[0],a=n&&r&&i.default(r).hasClass("fade"),s=function(){return o._transitionComplete(t,r,n)};if(r&&a){var u=l.getTransitionDurationFromElement(r);i.default(r).removeClass("show").one(l.TRANSITION_END,s).emulateTransitionEnd(u)}else s()},e._transitionComplete=function(t,e,n){if(e){i.default(e).removeClass("active");var o=i.default(e.parentNode).find("> .dropdown-menu .active")[0];o&&i.default(o).removeClass("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(i.default(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),l.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&i.default(t.parentNode).hasClass("dropdown-menu")){var r=i.default(t).closest(".dropdown")[0];if(r){var a=[].slice.call(r.querySelectorAll(".dropdown-toggle"));i.default(a).addClass("active")}t.setAttribute("aria-expanded",!0)}n&&n()},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.tab");if(o||(o=new t(this),n.data("bs.tab",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}}]),t}();i.default(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),pe._jQueryInterface.call(i.default(this),"show")})),i.default.fn.tab=pe._jQueryInterface,i.default.fn.tab.Constructor=pe,i.default.fn.tab.noConflict=function(){return i.default.fn.tab=he,pe._jQueryInterface};var me=i.default.fn.toast,ge={animation:"boolean",autohide:"boolean",delay:"number"},ve={animation:!0,autohide:!0,delay:500},_e=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var e=t.prototype;return e.show=function(){var t=this,e=i.default.Event("show.bs.toast");if(i.default(this._element).trigger(e),!e.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add("fade");var n=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),i.default(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),l.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,n).emulateTransitionEnd(o)}else n()}},e.hide=function(){if(this._element.classList.contains("show")){var t=i.default.Event("hide.bs.toast");i.default(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},e.dispose=function(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),i.default(this._element).off("click.dismiss.bs.toast"),i.default.removeData(this._element,"bs.toast"),this._element=null,this._config=null},e._getConfig=function(t){return t=a({},ve,i.default(this._element).data(),"object"==typeof t&&t?t:{}),l.typeCheckConfig("toast",t,this.constructor.DefaultType),t},e._setListeners=function(){var t=this;i.default(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},e._close=function(){var t=this,e=function(){t._element.classList.add("hide"),i.default(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var n=l.getTransitionDurationFromElement(this._element);i.default(this._element).one(l.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},e._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},t._jQueryInterface=function(e){return this.each((function(){var n=i.default(this),o=n.data("bs.toast");if(o||(o=new t(this,"object"==typeof e&&e),n.data("bs.toast",o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e](this)}}))},r(t,null,[{key:"VERSION",get:function(){return"4.5.3"}},{key:"DefaultType",get:function(){return ge}},{key:"Default",get:function(){return ve}}]),t}();i.default.fn.toast=_e._jQueryInterface,i.default.fn.toast.Constructor=_e,i.default.fn.toast.noConflict=function(){return i.default.fn.toast=me,_e._jQueryInterface},t.Alert=d,t.Button=h,t.Carousel=y,t.Collapse=S,t.Dropdown=Ft,t.Modal=Bt,t.Popover=se,t.Scrollspy=ce,t.Tab=pe,t.Toast=_e,t.Tooltip=te,t.Util=l,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*! bootstrap-timepicker v0.5.2 
* http://jdewit.github.com/bootstrap-timepicker 
* Copyright (c) 2016 Joris de Wit and bootstrap-timepicker contributors 
* MIT License 
*/!function(a,b,c){"use strict";var d=function(b,c){this.widget="",this.$element=a(b),this.defaultTime=c.defaultTime,this.disableFocus=c.disableFocus,this.disableMousewheel=c.disableMousewheel,this.isOpen=c.isOpen,this.minuteStep=c.minuteStep,this.modalBackdrop=c.modalBackdrop,this.orientation=c.orientation,this.secondStep=c.secondStep,this.snapToStep=c.snapToStep,this.showInputs=c.showInputs,this.showMeridian=c.showMeridian,this.showSeconds=c.showSeconds,this.template=c.template,this.appendWidgetTo=c.appendWidgetTo,this.showWidgetOnAddonClick=c.showWidgetOnAddonClick,this.icons=c.icons,this.maxHours=c.maxHours,this.explicitMode=c.explicitMode,this.handleDocumentClick=function(a){var b=a.data.scope;b.$element.parent().find(a.target).length||b.$widget.is(a.target)||b.$widget.find(a.target).length||b.hideWidget()},this._init()};d.prototype={constructor:d,_init:function(){var b=this;this.showWidgetOnAddonClick&&this.$element.parent().hasClass("input-group")&&this.$element.parent().hasClass("bootstrap-timepicker")?(this.$element.parent(".input-group.bootstrap-timepicker").find(".input-group-addon").on({"click.timepicker":a.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":a.proxy(this.highlightUnit,this),"click.timepicker":a.proxy(this.highlightUnit,this),"keydown.timepicker":a.proxy(this.elementKeydown,this),"blur.timepicker":a.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":a.proxy(this.mousewheel,this)})):this.template?this.$element.on({"focus.timepicker":a.proxy(this.showWidget,this),"click.timepicker":a.proxy(this.showWidget,this),"blur.timepicker":a.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":a.proxy(this.mousewheel,this)}):this.$element.on({"focus.timepicker":a.proxy(this.highlightUnit,this),"click.timepicker":a.proxy(this.highlightUnit,this),"keydown.timepicker":a.proxy(this.elementKeydown,this),"blur.timepicker":a.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":a.proxy(this.mousewheel,this)}),this.template!==!1?this.$widget=a(this.getTemplate()).on("click",a.proxy(this.widgetClick,this)):this.$widget=!1,this.showInputs&&this.$widget!==!1&&this.$widget.find("input").each(function(){a(this).on({"click.timepicker":function(){a(this).select()},"keydown.timepicker":a.proxy(b.widgetKeydown,b),"keyup.timepicker":a.proxy(b.widgetKeyup,b)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=null,this.updateFromElementVal()},clear:function(){this.hour="",this.minute="",this.second="",this.meridian="",this.$element.val("")},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else this.hour<=0?this.hour=this.maxHours-1:this.hour--},decrementMinute:function(a){var b;b=a?this.minute-a:this.minute-this.minuteStep,0>b?(this.decrementHour(),this.minute=b+60):this.minute=b},decrementSecond:function(){var a=this.second-this.secondStep;0>a?(this.decrementMinute(!0),this.second=a+60):this.second=a},elementKeydown:function(a){switch(a.which){case 9:if(a.shiftKey){if("hour"===this.highlightedUnit){this.hideWidget();break}this.highlightPrevUnit()}else{if(this.showMeridian&&"meridian"===this.highlightedUnit||this.showSeconds&&"second"===this.highlightedUnit||!this.showMeridian&&!this.showSeconds&&"minute"===this.highlightedUnit){this.hideWidget();break}this.highlightNextUnit()}a.preventDefault(),this.updateFromElementVal();break;case 27:this.updateFromElementVal();break;case 37:a.preventDefault(),this.highlightPrevUnit(),this.updateFromElementVal();break;case 38:switch(a.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update();break;case 39:a.preventDefault(),this.highlightNextUnit(),this.updateFromElementVal();break;case 40:switch(a.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update()}},getCursorPosition:function(){var a=this.$element.get(0);if("selectionStart"in a)return a.selectionStart;if(c.selection){a.focus();var b=c.selection.createRange(),d=c.selection.createRange().text.length;return b.moveStart("character",-a.value.length),b.text.length-d}},getTemplate:function(){var a,b,c,d,e,f;switch(this.showInputs?(b='<input type="text" class="bootstrap-timepicker-hour" maxlength="2"/>',c='<input type="text" class="bootstrap-timepicker-minute" maxlength="2"/>',d='<input type="text" class="bootstrap-timepicker-second" maxlength="2"/>',e='<input type="text" class="bootstrap-timepicker-meridian" maxlength="2"/>'):(b='<span class="bootstrap-timepicker-hour"></span>',c='<span class="bootstrap-timepicker-minute"></span>',d='<span class="bootstrap-timepicker-second"></span>',e='<span class="bootstrap-timepicker-meridian"></span>'),f='<table><tr><td><a href="#" data-action="incrementHour"><span class="'+this.icons.up+'"></span></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><span class="'+this.icons.up+'"></span></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><span class="'+this.icons.up+'"></span></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><span class="'+this.icons.up+'"></span></a></td>':"")+"</tr><tr><td>"+b+'</td> <td class="separator">:</td><td>'+c+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+d+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+e+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><span class="'+this.icons.down+'"></span></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><span class="'+this.icons.down+'"></span></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><span class="'+this.icons.down+'"></span></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><span class="'+this.icons.down+'"></span></a></td>':"")+"</tr></table>",this.template){case"modal":a='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">&times;</a><h3>Pick a Time</h3></div><div class="modal-content">'+f+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":a='<div class="bootstrap-timepicker-widget dropdown-menu">'+f+"</div>"}return a},getTime:function(){return""===this.hour?"":this.hour+":"+(1===this.minute.toString().length?"0"+this.minute:this.minute)+(this.showSeconds?":"+(1===this.second.toString().length?"0"+this.second:this.second):"")+(this.showMeridian?" "+this.meridian:"")},hideWidget:function(){this.isOpen!==!1&&(this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),a(c).off("mousedown.timepicker, touchend.timepicker",this.handleDocumentClick),this.isOpen=!1,this.$widget.detach())},highlightUnit:function(){this.position=this.getCursorPosition(),this.position>=0&&this.position<=2?this.highlightHour():this.position>=3&&this.position<=5?this.highlightMinute():this.position>=6&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():this.position>=9&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.showMeridian?this.highlightMeridian():this.showSeconds?this.highlightSecond():this.highlightMinute();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var a=this.$element.get(0),b=this;this.highlightedUnit="hour",a.setSelectionRange&&setTimeout(function(){b.hour<10?a.setSelectionRange(0,1):a.setSelectionRange(0,2)},0)},highlightMinute:function(){var a=this.$element.get(0),b=this;this.highlightedUnit="minute",a.setSelectionRange&&setTimeout(function(){b.hour<10?a.setSelectionRange(2,4):a.setSelectionRange(3,5)},0)},highlightSecond:function(){var a=this.$element.get(0),b=this;this.highlightedUnit="second",a.setSelectionRange&&setTimeout(function(){b.hour<10?a.setSelectionRange(5,7):a.setSelectionRange(6,8)},0)},highlightMeridian:function(){var a=this.$element.get(0),b=this;this.highlightedUnit="meridian",a.setSelectionRange&&(this.showSeconds?setTimeout(function(){b.hour<10?a.setSelectionRange(8,10):a.setSelectionRange(9,11)},0):setTimeout(function(){b.hour<10?a.setSelectionRange(5,7):a.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}return this.hour===this.maxHours-1?void(this.hour=0):void this.hour++},incrementMinute:function(a){var b;b=a?this.minute+a:this.minute+this.minuteStep-this.minute%this.minuteStep,b>59?(this.incrementHour(),this.minute=b-60):this.minute=b},incrementSecond:function(){var a=this.second+this.secondStep-this.second%this.secondStep;a>59?(this.incrementMinute(!0),this.second=a-60):this.second=a},mousewheel:function(b){if(!this.disableMousewheel){b.preventDefault(),b.stopPropagation();var c=b.originalEvent.wheelDelta||-b.originalEvent.detail,d=null;switch("mousewheel"===b.type?d=-1*b.originalEvent.wheelDelta:"DOMMouseScroll"===b.type&&(d=40*b.originalEvent.detail),d&&(b.preventDefault(),a(this).scrollTop(d+a(this).scrollTop())),this.highlightedUnit){case"minute":c>0?this.incrementMinute():this.decrementMinute(),this.highlightMinute();break;case"second":c>0?this.incrementSecond():this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian();break;default:c>0?this.incrementHour():this.decrementHour(),this.highlightHour()}return!1}},changeToNearestStep:function(a,b){return a%b===0?a:Math.round(a%b/b)?(a+(b-a%b))%60:a-a%b},place:function(){if(!this.isInline){var c=this.$widget.outerWidth(),d=this.$widget.outerHeight(),e=10,f=a(b).width(),g=a(b).height(),h=a(b).scrollTop(),i=parseInt(this.$element.parents().filter(function(){return"auto"!==a(this).css("z-index")}).first().css("z-index"),10)+10,j=this.component?this.component.parent().offset():this.$element.offset(),k=this.component?this.component.outerHeight(!0):this.$element.outerHeight(!1),l=this.component?this.component.outerWidth(!0):this.$element.outerWidth(!1),m=j.left,n=j.top;this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),"auto"!==this.orientation.x?(this.$widget.addClass("timepicker-orient-"+this.orientation.x),"right"===this.orientation.x&&(m-=c-l)):(this.$widget.addClass("timepicker-orient-left"),j.left<0?m-=j.left-e:j.left+c>f&&(m=f-c-e));var o,p,q=this.orientation.y;"auto"===q&&(o=-h+j.top-d,p=h+g-(j.top+k+d),q=Math.max(o,p)===p?"top":"bottom"),this.$widget.addClass("timepicker-orient-"+q),"top"===q?n+=k:n-=d+parseInt(this.$widget.css("padding-top"),10),this.$widget.css({top:n,left:m,zIndex:i})}},remove:function(){a("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(a){if(this.$element.val())this.updateFromElementVal();else if("current"===a){var b=new Date,c=b.getHours(),d=b.getMinutes(),e=b.getSeconds(),f="AM";0!==e&&(e=Math.ceil(b.getSeconds()/this.secondStep)*this.secondStep,60===e&&(d+=1,e=0)),0!==d&&(d=Math.ceil(b.getMinutes()/this.minuteStep)*this.minuteStep,60===d&&(c+=1,d=0)),this.showMeridian&&(0===c?c=12:c>=12?(c>12&&(c-=12),f="PM"):f="AM"),this.hour=c,this.minute=d,this.second=e,this.meridian=f,this.update()}else a===!1?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(a)},setTime:function(a,b){if(!a)return void this.clear();var c,d,e,f,g,h;if("object"==typeof a&&a.getMonth)e=a.getHours(),f=a.getMinutes(),g=a.getSeconds(),this.showMeridian&&(h="AM",e>12&&(h="PM",e%=12),12===e&&(h="PM"));else{if(c=(/a/i.test(a)?1:0)+(/p/i.test(a)?2:0),c>2)return void this.clear();if(d=a.replace(/[^0-9\:]/g,"").split(":"),e=d[0]?d[0].toString():d.toString(),this.explicitMode&&e.length>2&&e.length%2!==0)return void this.clear();f=d[1]?d[1].toString():"",g=d[2]?d[2].toString():"",e.length>4&&(g=e.slice(-2),e=e.slice(0,-2)),e.length>2&&(f=e.slice(-2),e=e.slice(0,-2)),f.length>2&&(g=f.slice(-2),f=f.slice(0,-2)),e=parseInt(e,10),f=parseInt(f,10),g=parseInt(g,10),isNaN(e)&&(e=0),isNaN(f)&&(f=0),isNaN(g)&&(g=0),g>59&&(g=59),f>59&&(f=59),e>=this.maxHours&&(e=this.maxHours-1),this.showMeridian?(e>12&&(c=2,e-=12),c||(c=1),0===e&&(e=12),h=1===c?"AM":"PM"):12>e&&2===c?e+=12:e>=this.maxHours?e=this.maxHours-1:(0>e||12===e&&1===c)&&(e=0)}this.hour=e,this.snapToStep?(this.minute=this.changeToNearestStep(f,this.minuteStep),this.second=this.changeToNearestStep(g,this.secondStep)):(this.minute=f,this.second=g),this.meridian=h,this.update(b)},showWidget:function(){this.isOpen||this.$element.is(":disabled")||(this.$widget.appendTo(this.appendWidgetTo),a(c).on("mousedown.timepicker, touchend.timepicker",{scope:this},this.handleDocumentClick),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.place(),this.disableFocus&&this.$element.blur(),""===this.hour&&(this.defaultTime?this.setDefaultTime(this.defaultTime):this.setTime("0:0:0")),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",a.proxy(this.hideWidget,this)):this.isOpen===!1&&this.$widget.addClass("open"),this.isOpen=!0)},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM"},update:function(a){this.updateElement(),a||this.updateWidget(),this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}})},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){this.setTime(this.$element.val())},updateWidget:function(){if(this.$widget!==!1){var a=this.hour,b=1===this.minute.toString().length?"0"+this.minute:this.minute,c=1===this.second.toString().length?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(a),this.$widget.find("input.bootstrap-timepicker-minute").val(b),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(c),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(a),this.$widget.find("span.bootstrap-timepicker-minute").text(b),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(c),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(this.$widget!==!1){var a=this.$widget.find("input.bootstrap-timepicker-hour").val()+":"+this.$widget.find("input.bootstrap-timepicker-minute").val()+(this.showSeconds?":"+this.$widget.find("input.bootstrap-timepicker-second").val():"")+(this.showMeridian?this.$widget.find("input.bootstrap-timepicker-meridian").val():"");this.setTime(a,!0)}},widgetClick:function(b){b.stopPropagation(),b.preventDefault();var c=a(b.target),d=c.closest("a").data("action");d&&this[d](),this.update(),c.is("input")&&c.get(0).setSelectionRange(0,2)},widgetKeydown:function(b){var c=a(b.target),d=c.attr("class").replace("bootstrap-timepicker-","");switch(b.which){case 9:if(b.shiftKey){if("hour"===d)return this.hideWidget()}else if(this.showMeridian&&"meridian"===d||this.showSeconds&&"second"===d||!this.showMeridian&&!this.showSeconds&&"minute"===d)return this.hideWidget();break;case 27:this.hideWidget();break;case 38:switch(b.preventDefault(),d){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),c.get(0).setSelectionRange(0,2);break;case 40:switch(b.preventDefault(),d){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),c.get(0).setSelectionRange(0,2)}},widgetKeyup:function(a){(65===a.which||77===a.which||80===a.which||46===a.which||8===a.which||a.which>=48&&a.which<=57||a.which>=96&&a.which<=105)&&this.updateFromWidgetInputs()}},a.fn.timepicker=function(b){var c=Array.apply(null,arguments);return c.shift(),this.each(function(){var e=a(this),f=e.data("timepicker"),g="object"==typeof b&&b;f||e.data("timepicker",f=new d(this,a.extend({},a.fn.timepicker.defaults,g,a(this).data()))),"string"==typeof b&&f[b].apply(f,c)})},a.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,disableMousewheel:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,orientation:{x:"auto",y:"auto"},secondStep:15,snapToStep:!1,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:"body",showWidgetOnAddonClick:!0,icons:{up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down"},maxHours:24,explicitMode:!1},a.fn.timepicker.Constructor=d,a(c).on("focus.timepicker.data-api click.timepicker.data-api",'[data-provide="timepicker"]',function(b){var c=a(this);c.data("timepicker")||(b.preventDefault(),c.timepicker())})}(jQuery,window,document);
/*
 AngularJS v1.6.10
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(y){'use strict';function qe(a){if(G(a))u(a.objectMaxDepth)&&(Oc.objectMaxDepth=Wb(a.objectMaxDepth)?a.objectMaxDepth:NaN);else return Oc}function Wb(a){return Y(a)&&0<a}function M(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.6.10/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==
typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ja(a){if(null==a||Za(a))return!1;if(I(a)||F(a)||z&&a instanceof z)return!0;var b="length"in Object(a)&&a.length;return Y(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,e;if(a)if(C(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(I(a)||ja(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in
a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(Pc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ra.call(a,c)&&b.call(d,a[c],c,a);return a}function Qc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Xb(a){return function(b,d){a(d,b)}}function re(){return++qb}function Yb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=
b[e];if(G(g)||C(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&G(p)?da(p)?a[m]=new Date(p.valueOf()):$a(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):Zb(p)?a[m]=p.clone():(G(a[m])||(a[m]=I(p)?[]:{}),Yb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function P(a){return Yb(a,xa.call(arguments,1),!1)}function se(a){return Yb(a,xa.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function $b(a,b){return P(Object.create(a),b)}function D(){}
function ab(a){return a}function ka(a){return function(){return a}}function ac(a){return C(a.toString)&&a.toString!==ha}function x(a){return"undefined"===typeof a}function u(a){return"undefined"!==typeof a}function G(a){return null!==a&&"object"===typeof a}function Pc(a){return null!==a&&"object"===typeof a&&!Rc(a)}function F(a){return"string"===typeof a}function Y(a){return"number"===typeof a}function da(a){return"[object Date]"===ha.call(a)}function bc(a){switch(ha.call(a)){case "[object Error]":return!0;
case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function C(a){return"function"===typeof a}function $a(a){return"[object RegExp]"===ha.call(a)}function Za(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function La(a){return"boolean"===typeof a}function te(a){return a&&Y(a.length)&&ue.test(ha.call(a))}function Zb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ve(a){var b={};a=a.split(",");var d;for(d=
0;d<a.length;d++)b[a[d]]=!0;return b}function ya(a){return N(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function na(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,g;if(I(a)){g=0;for(var f=a.length;g<f;g++)b.push(e(a[g],c))}else if(Pc(a))for(g in a)b[g]=e(a[g],c);else if(a&&"function"===typeof a.hasOwnProperty)for(g in a)a.hasOwnProperty(g)&&(b[g]=e(a[g],c));else for(g in a)ra.call(a,g)&&(b[g]=e(a[g],c));d?b.$$hashKey=d:delete b.$$hashKey;
return b}function e(a,b){if(!G(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if(Za(a)||bb(a))throw oa("cpws");var d=!1,e=f(a);void 0===e&&(e=I(a)?[]:Object.create(Rc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(ha.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(C(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Wb(d)?d:NaN;if(b){if(te(b)||"[object ArrayBuffer]"===ha.call(b))throw oa("cpta");if(a===b)throw oa("cpi");I(b)?b.length=0:q(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function cc(a,b){return a===b||a!==a&&b!==b}function sa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(I(a)){if(!I(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!sa(a[c],
b[c]))return!1;return!0}}else{if(da(a))return da(b)?cc(a.getTime(),b.getTime()):!1;if($a(a))return $a(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||Za(a)||Za(b)||I(b)||da(b)||$a(b))return!1;d=R();for(c in a)if("$"!==c.charAt(0)&&!C(a[c])){if(!sa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!C(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(xa.call(b,d))}function Ta(a,b){var d=2<arguments.length?xa.call(arguments,2):[];return!C(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Sc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Za(b)?d="$WINDOW":b&&y.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!x(a))return Y(b)||(b=b?2:null),JSON.stringify(a,Sc,b)}function Tc(a){return F(a)?JSON.parse(a):a}function dc(a,b){a=a.replace(we,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Uc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ec(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=dc(b,c);return Uc(a,d*(b-c))}function za(a){a=z(a).clone().empty();var b=z("<div></div>").append(a).html();try{return a[0].nodeType===Ma?N(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+N(b)})}catch(d){return N(b)}}function Vc(a){try{return decodeURIComponent(a)}catch(b){}}function fc(a){var b={};q((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Vc(e),u(e)&&(f=u(f)?Vc(f):!0,ra.call(b,e)?I(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function gc(a){var b=[];q(a,function(a,c){I(a)?q(a,function(a){b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))}):b.push(ia(c,!0)+(!0===a?"":"="+ia(a,!0)))});return b.length?b.join("&"):""}function fb(a){return ia(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ia(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function xe(a,b){var d,c,e=Ga.length;for(c=0;c<e;++c)if(d=Ga[c]+b,F(d=a.getAttribute(d)))return d;return null}function ye(a,b){var d,c,e={};q(Ga,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Ga,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(ze?(e.strictDi=null!==xe(d,"strict-di"),b(d,c?[c]:[],e)):y.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Wc(a,b,d){G(d)||(d={});d=P({strictDi:!1},d);var c=function(){a=z(a);if(a.injector()){var c=a[0]===y.document?"document":za(a);throw oa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=gb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;y&&e.test(y.name)&&(d.debugInfoEnabled=!0,y.name=y.name.replace(e,""));if(y&&!f.test(y.name))return c();y.name=y.name.replace(f,"");ea.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};C(ea.resumeDeferredBootstrap)&&
ea.resumeDeferredBootstrap()}function Ae(){y.name="NG_ENABLE_DEBUG_INFO!"+y.name;y.location.reload()}function Be(a){a=ea.element(a).injector();if(!a)throw oa("test");return a.get("$$testability")}function Xc(a,b){b=b||"_";return a.replace(Ce,function(a,c){return(c?b:"")+a.toLowerCase()})}function De(){var a;if(!Yc){var b=rb();(ta=x(b)?y.jQuery:b?y[b]:void 0)&&ta.fn.on?(z=ta,P(ta.fn,{scope:Ua.scope,isolateScope:Ua.isolateScope,controller:Ua.controller,injector:Ua.injector,inheritedData:Ua.inheritedData}),
a=ta.cleanData,ta.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=ta._data(f,"events"))&&c.$destroy&&ta(f).triggerHandler("$destroy");a(b)}):z=S;ea.element=z;Yc=!0}}function hb(a,b,d){if(!a)throw oa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&I(a)&&(a=a[a.length-1]);hb(C(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ha(a,b){if("hasOwnProperty"===a)throw oa("badname",b);}function Zc(a,b,d){if(!b)return a;b=
b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&C(a)?Ta(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=z(xa.call(a,0,e))),c.push(b);return c||a}function R(){return Object.create(null)}function hc(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!ac(a)||I(a)||da(a)?eb(a):a.toString()}return a}function Ee(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=
M("$injector"),c=M("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||M;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,g){g||(g=e);return function(){g[d||"push"]([b,c,arguments]);return E}}function b(a,c,d){d||(d=e);return function(b,e){e&&C(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return E}}if(!g)throw d("nomod",f);var e=[],n=[],B=[],v=
a("$injector","invoke","push",n),E={_invokeQueue:e,_configBlocks:n,_runBlocks:B,info:function(a){if(u(a)){if(!G(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:v,run:function(a){B.push(a);return this}};k&&v(k);return E})}})}function pa(a,b){if(I(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(G(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Fe(a,b){var d=[];Wb(b)&&(a=ea.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Sc(a,b);if(G(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}
function Ge(a){P(a,{errorHandlingConfig:qe,bootstrap:Wc,copy:na,extend:P,merge:se,equals:sa,element:z,forEach:q,injector:gb,noop:D,bind:Ta,toJson:eb,fromJson:Tc,identity:ab,isUndefined:x,isDefined:u,isString:F,isFunction:C,isObject:G,isNumber:Y,isElement:Zb,isArray:I,version:He,isDate:da,lowercase:N,uppercase:ub,callbacks:{$$counter:0},getTestability:Be,reloadWithDebugInfo:Ae,$$minErr:M,$$csp:Ia,$$encodeUriSegment:fb,$$encodeUriQuery:ia,$$stringify:hc});jc=Ee(y);jc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Ie});
a.provider("$compile",$c).directive({a:Je,input:ad,textarea:ad,form:Ke,script:Le,select:Me,option:Ne,ngBind:Oe,ngBindHtml:Pe,ngBindTemplate:Qe,ngClass:Re,ngClassEven:Se,ngClassOdd:Te,ngCloak:Ue,ngController:Ve,ngForm:We,ngHide:Xe,ngIf:Ye,ngInclude:Ze,ngInit:$e,ngNonBindable:af,ngPluralize:bf,ngRepeat:cf,ngShow:df,ngStyle:ef,ngSwitch:ff,ngSwitchWhen:gf,ngSwitchDefault:hf,ngOptions:jf,ngTransclude:kf,ngModel:lf,ngList:mf,ngChange:nf,pattern:bd,ngPattern:bd,required:cd,ngRequired:cd,minlength:dd,ngMinlength:dd,
maxlength:ed,ngMaxlength:ed,ngValue:of,ngModelOptions:pf}).directive({ngInclude:qf}).directive(vb).directive(fd);a.provider({$anchorScroll:rf,$animate:sf,$animateCss:tf,$$animateJs:uf,$$animateQueue:vf,$$AnimateRunner:wf,$$animateAsyncRun:xf,$browser:yf,$cacheFactory:zf,$controller:Af,$document:Bf,$$isDocumentHidden:Cf,$exceptionHandler:Df,$filter:gd,$$forceReflow:Ef,$interpolate:Ff,$interval:Gf,$http:Hf,$httpParamSerializer:If,$httpParamSerializerJQLike:Jf,$httpBackend:Kf,$xhrFactory:Lf,$jsonpCallbacks:Mf,
$location:Nf,$log:Of,$parse:Pf,$rootScope:Qf,$q:Rf,$$q:Sf,$sce:Tf,$sceDelegate:Uf,$sniffer:Vf,$templateCache:Wf,$templateRequest:Xf,$$testability:Yf,$timeout:Zf,$window:$f,$$rAF:ag,$$jqLite:bg,$$Map:cg,$$cookieReader:dg})}]).info({angularVersion:"1.6.10"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(eg,wb)}function kc(a){a=a.nodeType;return 1===a||!a||9===a}function hd(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(lc.test(a)){d=e.appendChild(b.createElement("div"));
c=(fg.exec(a)||["",""])[1].toLowerCase();c=$[c]||$._default;d.innerHTML=c[1]+a.replace(gg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function S(a){if(a instanceof S)return a;var b;F(a)&&(a=Q(a),b=!0);if(!(this instanceof S)){if(b&&"<"!==a.charAt(0))throw mc("nosel");return new S(a)}if(b){b=y.document;var d;a=(d=hg.exec(a))?[b.createElement(d[1])]:
(d=hd(a,b))?d.childNodes:[];nc(this,a)}else C(a)?id(a):nc(this,a)}function oc(a){return a.cloneNode(!0)}function yb(a,b){!b&&kc(a)&&z.cleanData([a]);a.querySelectorAll&&z.cleanData(a.querySelectorAll("*"))}function jd(a,b,d,c){if(u(c))throw mc("offargs");var e=(c=zb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&cb(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};q(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,
f),delete e[b]}function pc(a,b){var d=a.ng339,c=d&&ib[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),jd(a)),delete ib[d],a.ng339=void 0))}function zb(a,b){var d=a.ng339,d=d&&ib[d];b&&!d&&(a.ng339=d=++ig,d=ib[d]={events:{},data:{},handle:void 0});return d}function qc(a,b,d){if(kc(a)){var c,e=u(d),f=!e&&b&&!G(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;q(b.split(" "),function(a){a=Q(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",Q(c))}}function Db(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;q(b.split(" "),function(a){a=Q(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",
Q(c))}}function nc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function kd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=I(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=z.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function ld(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}
function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function jg(a,b){b=b||y;if("complete"===b.document.readyState)b.setTimeout(a);else z(b).on("load",a)}function id(a){function b(){y.document.removeEventListener("DOMContentLoaded",b);y.removeEventListener("load",b);a()}"complete"===y.document.readyState?y.setTimeout(a):(y.document.addEventListener("DOMContentLoaded",b),y.addEventListener("load",b))}function md(a,b){var d=Gb[b.toLowerCase()];return d&&nd[ya(a)]&&d}function kg(a,b){var d=
function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(x(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var h=f.specialHandlerWrapper||lg;1<g&&(f=pa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,
f[l])}};d.elem=a;return d}function lg(a,b,d){d.call(a,b)}function mg(a,b,d){var c=b.relatedTarget;c&&(c===a||ng.call(a,c))||d.call(a,b)}function bg(){this.$get=function(){return P(S,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function Na(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==
a?a.$$hashKey=d+":"+(b||re)():d+":"+a}function od(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function pd(a){a=Function.prototype.toString.call(a).replace(og,"");return a.match(pg)||a.match(qg)}function rg(a){return(a=pd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function gb(a,b){function d(a){return function(b,c){if(G(b))q(b,Xb(a));else return a(b,c)}}function c(a,b){Ha(a,"service");if(C(b)||I(b))b=n.instantiate(b);if(!b.$get)throw Aa("pget",a);return p[a+
"Provider"]=b}function e(a,b){return function(){var c=E.invoke(b,this);if(x(c))throw Aa("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){hb(x(a)||I(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],g=n.get(e[0]);g[e[1]].apply(g,e[2])}}if(!m.get(a)){m.set(a,!0);try{F(a)?(c=jc(a),E.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):C(a)?b.push(n.invoke(a)):
I(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw I(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Aa("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Aa("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),a[b]}catch(g){throw a[b]===h&&delete a[b],g;}finally{l.shift()}}function e(a,c,g){var f=[];a=gb.$$annotate(a,b,g);for(var h=0,
k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Aa("itkn",l);f.push(c&&c.hasOwnProperty(l)?c[l]:d(l,g))}return f}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);I(a)&&(a=a[a.length-1]);d=a;if(Ba||"function"!==typeof d)d=!1;else{var g=d.$$ngIsClass;La(g)||(g=d.$$ngIsClass=/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));d=g}return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=
I(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:gb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ka(b),!1)}),constant:d(function(a,b){Ha(a,"constant");p[a]=b;B[a]=b}),decorator:function(a,b){var c=n.get(a+
"Provider"),d=c.$get;c.$get=function(){var a=E.invoke(d,c);return E.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ea.isString(b)&&l.push(b);throw Aa("unpr",l.join(" <- "));}),B={},v=k(B,function(a,b){var c=n.get(a+"Provider",b);return E.invoke(c.$get,c,void 0,a)}),E=v;p.$injectorProvider={$get:ka(v)};E.modules=n.modules=R();var A=g(a),E=v.get("$injector");E.strictDi=b;q(A,function(a){a&&E.invoke(a)});E.loadNewModules=function(a){q(g(a),function(a){a&&E.invoke(a)})};return E}function rf(){var a=
!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ya(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;C(c)?c=c():Zb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Y(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:Y(a)?a.toString():
d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||jg(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;I(a)&&(a=a.join(" "));I(b)&&(b=b.join(" "));return a+" "+b}function sg(a){F(a)&&(a=a.split(" "));var b=R();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ja(a){return G(a)?a:{}}function tg(a,
b,d,c){function e(a){try{a.apply(null,xa.call(arguments,1))}finally{if(v--,0===v)for(;E.length;)try{E.pop()()}catch(b){d.error(b)}}}function f(){w=null;k()}function g(){A=H();A=x(A)?null:A;sa(A,t)&&(A=t);s=t=A}function k(){var a=s;g();if(J!==h.url()||a!==A)J=h.url(),s=A,q(K,function(a){a(h.url(),A)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,B={};h.isMock=!1;var v=0,E=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){v++};h.notifyWhenNoOutstandingRequests=
function(a){0===v?a():E.push(a)};var A,s,J=l.href,ic=b.find("base"),w=null,H=c.history?function(){try{return m.state}catch(a){}}:D;g();h.url=function(b,d,e){x(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=s===e;if(J===b&&(!c.history||f))return h;var k=J&&Ka(J)===Ka(b);J=b;s=e;!c.history||k&&f?(k||(w=b),d?l.replace(b):k?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(w=b)):(m[d?"replaceState":"pushState"](e,"",b),g());w&&(w=b);return h}return w||
l.href.replace(/%27/g,"'")};h.state=function(){return A};var K=[],T=!1,t=null;h.onUrlChange=function(b){if(!T){if(c.history)z(a).on("popstate",f);z(a).on("hashchange",f);T=!0}K.push(b);return b};h.$$applicationDestroyed=function(){z(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=ic.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b){var c;v++;c=p(function(){delete B[c];e(a)},b||0);B[c]=!0;return c};h.defer.cancel=function(a){return B[a]?
(delete B[a],n(a),e(D),!0):!1}}function yf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new tg(a,c,b,d)}]}function zf(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw M("$cacheFactory")("iid",a);var g=0,k=P({},c,{id:a}),h=R(),l=c&&c.capacity||Number.MAX_VALUE,m=R(),p=null,n=null;return b[a]={put:function(a,b){if(!x(b)){if(l<Number.MAX_VALUE){var c=
m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=R();g=0;m=R();p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return P({},k,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});
return a};a.get=function(a){return b[a]};return a}}function Wf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function $c(a,b){function d(a,b,c){var d=/^([@&<]|=(\*?))(\??)\s*([\w$]*)$/,e=R();q(a,function(a,g){a=a.trim();if(a in p)e[g]=p[a];else{var f=a.match(d);if(!f)throw aa("iscp",b,g,a,c?"controller bindings definition":"isolate scope definition");e[g]={mode:f[1][0],collection:"*"===f[2],optional:"?"===f[3],attrName:f[4]||g};f[4]&&(p[a]=e[g])}});return e}function c(a){var b=
a.charAt(0);if(!b||b!==N(b))throw aa("baddir",a);if(a!==a.trim())throw aa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!I(b)&&G(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=ve("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=R();this.directive=function ic(b,d){hb(b,"name");Ha(b,"directive");F(b)?(c(b),hb(d,"directiveFactory"),
f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(g,f){try{var h=a.invoke(g);C(h)?h={compile:ka(h)}:!h.compile&&h.link&&(h.compile=ka(h.link));h.priority=h.priority||0;h.index=f;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!F(l)||!/[EACM]/.test(l)))throw aa("badrestrict",l,b);k.restrict=l||"EA";h.$$moduleName=g.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):q(b,Xb(ic));return this};this.component=
function w(a,b){function c(a){function e(b){return C(b)||I(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var g=b.template||b.templateUrl?b.template:"",f={controller:d,controllerAs:ug(b.controller)||b.controllerAs||"$ctrl",template:e(g),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(f[b]=a)});return f}if(!F(a))return q(a,Xb(Ta(this,w))),this;var d=b.controller||function(){};
q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,C(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return u(a)?(n=a,this):n};var B=!1;this.preAssignBindingsEnabled=function(a){return u(a)?
(B=a,this):B};var v=!1;this.strictComponentBindingsEnabled=function(a){return u(a)?(v=a,this):v};var E=10;this.onChangesTtl=function(a){return arguments.length?(E=a,this):E};var A=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(A=a,this):A};var s=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,
b,c,e,p,V,O,qa,L,r){function la(){try{if(!--Ea)throw ga=void 0,aa("infchng",E);O.$apply(function(){for(var a=0,b=ga.length;a<b;++a)try{ga[a]()}catch(d){c(d)}ga=void 0})}finally{Ea++}}function rc(a,b){if(b){var c=Object.keys(b),d,e,g;d=0;for(e=c.length;d<e;d++)g=c[d],this[g]=b[g]}else this.$attr={};this.$$element=a}function Oa(a,b,c){Aa.innerHTML="<span "+b+">";b=Aa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Pa(a,b){try{a.addClass(b)}catch(c){}}
function ba(a,b,c,d,e){a instanceof z||(a=z(a));var g=Sa(a,b,a,c,d,e);ba.$$addScopeClass(a);var f=null;return function(b,c,d){if(!a)throw aa("multilink");hb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);f||(f=(d=d&&d[0])?"foreignobject"!==ya(d)&&ha.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==f?z(fa(f,z("<div></div>").append(a).html())):c?Ua.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);g&&g(b,d,d,h);c||(a=g=null);return d}}function Sa(a,b,c,d,e,g){function f(a,c,d,e){var g,k,l,m,p,n,H;if(K)for(H=Array(c.length),m=0;m<h.length;m+=3)g=h[m],H[g]=c[g];else H=c;m=0;for(p=h.length;m<p;)k=H[h[m++]],c=h[m++],g=h[m++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(z(k),l)):l=a,n=c.transcludeOnThisElement?Qa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?Qa(a,b):null,c(g,l,k,d,n)):g&&g(a,k.childNodes,
void 0,e)}for(var h=[],k=I(a)||a instanceof z,l,m,p,n,K,H=0;H<a.length;H++){l=new rc;11===Ba&&Ca(a,H,k);m=sc(a[H],[],l,0===H?d:void 0,e);(g=m.length?Y(m,a[H],l,b,c,null,[],[],g):null)&&g.scope&&ba.$$addScopeClass(l.$$element);l=g&&g.terminal||!(p=a[H].childNodes)||!p.length?null:Sa(p,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b);if(g||l)h.push(H,g,l),n=!0,K=K||g;g=null}return n?f:null}function Ca(a,b,c){var d=a[b],e=d.parentNode,g;if(d.nodeType===Ma)for(;;){g=e?d.nextSibling:
a[b+1];if(!g||g.nodeType!==Ma)break;d.nodeValue+=g.nodeValue;g.parentNode&&g.parentNode.removeChild(g);c&&g===a[b+1]&&a.splice(b+1,1)}}function Qa(a,b,c){function d(e,g,f,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,g,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:h})}var e=d.$$slots=R(),g;for(g in b.$$slots)e[g]=b.$$slots[g]?Qa(a,b.$$slots[g],c):null;return d}function sc(a,b,c,d,e){var g=c.$attr,f;switch(a.nodeType){case 1:f=ya(a);X(b,Da(f),"E",d,e);for(var h,l,
m,p,n=a.attributes,K=0,H=n&&n.length;K<H;K++){var B=!1,w=!1;h=n[K];l=h.name;m=h.value;h=Da(l);(p=Na.test(h))&&(l=l.replace(qd,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(h=h.match(Ra))&&ea(h[1])&&(B=l,w=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));h=Da(l.toLowerCase());g[h]=l;if(p||!c.hasOwnProperty(h))c[h]=m,md(a,h)&&(c[h]=!0);va(a,b,m,h,p);X(b,h,"A",d,e,B,w)}"input"===f&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Ka)break;g=a.className;
G(g)&&(g=g.animVal);if(F(g)&&""!==g)for(;a=k.exec(g);)h=Da(a[2]),X(b,h,"C",d,e)&&(c[h]=Q(a[3])),g=g.substr(a.index+a[0].length);break;case Ma:ma(b,a.nodeValue);break;case 8:if(!Ja)break;M(a,b,c,d,e)}b.sort(ka);return b}function M(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Da(f[1]);X(b,h,"M",d,e)&&(c[h]=Q(f[2]))}}catch(k){}}function rd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw aa("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);
d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return z(d)}function S(a,b,c){return function(d,e,g,f,h){e=rd(e[0],b,c);return a(d,e,g,f,h)}}function U(a,b,c,d,e,g){var f;return a?ba(b,c,d,e,g):function(){f||(f=ba(b,c,d,e,g),b=c=g=null);return f.apply(this,arguments)}}function Y(a,b,d,e,g,f,h,k,l){function m(a,b,c,d){if(a){c&&(a=S(a,c,d));a.require=t.require;a.directiveName=L;if(O===t||t.$$isolateScope)a=ta(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=S(b,c,d));b.require=t.require;b.directiveName=
L;if(O===t||t.$$isolateScope)b=ta(b,{isolateScope:!0});k.push(b)}}function p(a,e,g,f,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);qa&&(e=E);c||(c=qa?L.parent():L);if(d){var g=l.$$slots[d];if(g)return g(a,b,e,c,ua);if(x(g))throw aa("noslot",d,za(L));}else return l(a,b,e,c,ua)}var n,t,v,s,T,E,V,L;b===g?(f=d,L=d.$$element):(L=z(g),f=new rc(L,d));T=e;O?s=e.$new(!0):H&&(T=e.$parent);l&&(V=m,V.$$boundTransclude=l,V.isSlotFilled=function(a){return!!l.$$slots[a]});w&&(E=ca(L,f,V,w,s,e,O));O&&
(ba.$$addScopeInfo(L,s,!0,!(A&&(A===O||A===O.$$originalDirective))),ba.$$addScopeClass(L,!0),s.$$isolateBindings=O.$$isolateBindings,t=oa(e,f,s,s.$$isolateBindings,O),t.removeWatches&&s.$on("$destroy",t.removeWatches));for(n in E){t=w[n];v=E[n];var Ib=t.$$bindings.bindToController;if(B){v.bindingInfo=Ib?oa(T,f,v.instance,Ib,t):{};var r=v();r!==v.instance&&(v.instance=r,L.data("$"+t.name+"Controller",r),v.bindingInfo.removeWatches&&v.bindingInfo.removeWatches(),v.bindingInfo=oa(T,f,v.instance,Ib,t))}else v.instance=
v(),L.data("$"+t.name+"Controller",v.instance),v.bindingInfo=oa(T,f,v.instance,Ib,t)}q(w,function(a,b){var c=a.require;a.bindToController&&!I(c)&&G(c)&&P(E[b].instance,W(b,c,L,E))});q(E,function(a){var b=a.instance;if(C(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(C(b.$onInit))try{b.$onInit()}catch(e){c(e)}C(b.$doCheck)&&(T.$watch(function(){b.$doCheck()}),b.$doCheck());C(b.$onDestroy)&&T.$on("$destroy",function(){b.$onDestroy()})});n=0;for(t=h.length;n<t;n++)v=h[n],
wa(v,v.isolateScope?s:e,L,f,v.require&&W(v.directiveName,v.require,L,E),V);var ua=e;O&&(O.template||null===O.templateUrl)&&(ua=s);a&&a(ua,g.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)v=k[n],wa(v,v.isolateScope?s:e,L,f,v.require&&W(v.directiveName,v.require,L,E),V);q(E,function(a){a=a.instance;C(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,H=l.newScopeDirective,w=l.controllerDirectives,O=l.newIsolateScopeDirective,A=l.templateDirective,s=l.nonTlbTranscludeDirective,T=!1,E=
!1,qa=l.hasElementTranscludeDirective,v=d.$$element=z(b),t,L,V,r=e,ua,la=!1,u=!1,y,Ca=0,Oa=a.length;Ca<Oa;Ca++){t=a[Ca];var Pa=t.$$start,D=t.$$end;Pa&&(v=rd(b,Pa,D));V=void 0;if(n>t.priority)break;if(y=t.scope)t.templateUrl||(G(y)?($("new/isolated scope",O||H,t,v),O=t):$("new/isolated scope",O,t,v)),H=H||t;L=t.name;if(!la&&(t.replace&&(t.templateUrl||t.template)||t.transclude&&!t.$$tlb)){for(y=Ca+1;la=a[y++];)if(la.transclude&&!la.$$tlb||la.replace&&(la.templateUrl||la.template)){u=!0;break}la=!0}!t.templateUrl&&
t.controller&&(w=w||R(),$("'"+L+"' controller",w[L],t,v),w[L]=t);if(y=t.transclude)if(T=!0,t.$$tlb||($("transclusion",s,t,v),s=t),"element"===y)qa=!0,n=t.priority,V=v,v=d.$$element=z(ba.$$createComment(L,d[L])),b=v[0],ja(g,xa.call(V,0),b),V[0].$$parentNode=V[0].parentNode,r=U(u,V,e,n,f&&f.name,{nonTlbTranscludeDirective:s});else{var F=R();if(G(y)){V=[];var Qa=R(),M=R();q(y,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Qa[a]=b;F[b]=null;M[b]=c});q(v.contents(),function(a){var b=Qa[Da(ya(a))];
b?(M[b]=!0,F[b]=F[b]||[],F[b].push(a)):V.push(a)});q(M,function(a,b){if(!a)throw aa("reqslot",b);});for(var Sa in F)F[Sa]&&(F[Sa]=U(u,F[Sa],e))}else V=z(oc(b)).contents();v.empty();r=U(u,V,e,void 0,void 0,{needsNewScope:t.$$isolateScope||t.$$newScope});r.$$slots=F}if(t.template)if(E=!0,$("template",A,t,v),A=t,y=C(t.template)?t.template(v,d):t.template,y=Ha(y),t.replace){f=t;V=lc.test(y)?sd(fa(t.templateNamespace,Q(y))):[];b=V[0];if(1!==V.length||1!==b.nodeType)throw aa("tplrt",L,"");ja(g,v,b);Oa=
{$attr:{}};y=sc(b,[],Oa);var N=a.splice(Ca+1,a.length-(Ca+1));(O||H)&&Z(y,O,H);a=a.concat(y).concat(N);da(d,Oa);Oa=a.length}else v.html(y);if(t.templateUrl)E=!0,$("template",A,t,v),A=t,t.replace&&(f=t),p=ia(a.splice(Ca,a.length-Ca),v,d,g,T&&r,h,k,{controllerDirectives:w,newScopeDirective:H!==t&&H,newIsolateScopeDirective:O,templateDirective:A,nonTlbTranscludeDirective:s}),Oa=a.length;else if(t.compile)try{ua=t.compile(v,d,r);var tc=t.$$originalDirective||t;C(ua)?m(null,Ta(tc,ua),Pa,D):ua&&m(Ta(tc,
ua.pre),Ta(tc,ua.post),Pa,D)}catch(X){c(X,za(v))}t.terminal&&(p.terminal=!0,n=Math.max(n,t.priority))}p.scope=H&&!0===H.scope;p.transcludeOnThisElement=T;p.templateOnThisElement=E;p.transclude=r;l.hasElementTranscludeDirective=qa;return p}function W(a,b,c,d){var e;if(F(b)){var g=b.match(l);b=b.substring(g[0].length);var f=g[1]||g[3],g="?"===g[2];"^^"===f?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=f?c.inheritedData(h):c.data(h)}if(!e&&!g)throw aa("ctreq",b,a);}else if(I(b))for(e=
[],f=0,g=b.length;f<g;f++)e[f]=W(a,b[f],c,d);else G(b)&&(e={},q(b,function(b,g){e[g]=W(a,b,c,d)}));return e||null}function ca(a,b,c,d,e,g,f){var h=R(),k;for(k in d){var l=d[k],m={$scope:l===f||l.$$isolateScope?e:g,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=V(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function Z(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=$b(a[d],{$$isolateScope:b,$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===
h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(x(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=$b(c,{$$start:k,$$end:l}));if(!c.$$bindings){var H=m=c,K=c.name,t={isolateScope:null,bindToController:null};G(H.scope)&&(!0===H.bindToController?(t.bindToController=d(H.scope,K,!0),t.isolateScope={}):t.isolateScope=d(H.scope,K,!1));G(H.bindToController)&&(t.bindToController=d(H.bindToController,K,!0));if(t.bindToController&&!H.controller)throw aa("noctrl",
K);m=m.$$bindings=t;G(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ea(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function da(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}
function ia(a,b,d,g,f,h,k,l){var m=[],p,n,H=b[0],t=a.shift(),B=$b(t,{templateUrl:null,transclude:null,replace:null,$$originalDirective:t}),v=C(t.templateUrl)?t.templateUrl(b,d):t.templateUrl,O=t.templateNamespace;b.empty();e(v).then(function(c){var e,K;c=Ha(c);if(t.replace){c=lc.test(c)?sd(fa(O,Q(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw aa("tplrt",t.name,v);c={$attr:{}};ja(g,b,e);var w=sc(e,[],c);G(t.scope)&&Z(w,!0);a=w.concat(a);da(d,c)}else e=H,b.html(c);a.unshift(B);p=Y(a,e,d,f,b,t,
h,k,l);q(g,function(a,c){a===e&&(g[c]=b[0])});for(n=Sa(b[0].childNodes,f);m.length;){c=m.shift();K=m.shift();var s=m.shift(),A=m.shift(),w=b[0];if(!c.$$destroyed){if(K!==H){var T=K.className;l.hasElementTranscludeDirective&&t.replace||(w=oc(e));ja(s,z(K),w);Pa(z(w),T)}K=p.transcludeOnThisElement?Qa(c,p.transclude,A):A;p(n,c,w,g,K)}}m=null}).catch(function(a){bc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,c,d,a):(p.transcludeOnThisElement&&(a=Qa(b,p.transclude,e)),p(n,b,c,
d,a)))}}function ka(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function $(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw aa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function ma(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);
a.$watch(d,function(a){c[0].nodeValue=a})}}})}function fa(a,b){a=N(a||"html");switch(a){case "svg":case "math":var c=y.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function pa(a,b){if("srcdoc"===b)return qa.HTML;var c=ya(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return qa.RESOURCE_URL}else if("xlinkHref"===b||"form"===c&&"action"===b||"link"===c&&"href"===b)return qa.RESOURCE_URL}
function va(a,c,d,e,g){var f=pa(a,e),k=h[e]||g,l=b(d,!g,f,k);if(l){if("multiple"===e&&"select"===ya(a))throw aa("selmulti",za(a));if(m.test(e))throw aa("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,g){c=g.$$observers||(g.$$observers=R());var h=g[e];h!==d&&(l=h&&b(h,!0,f,k),d=h);l&&(g[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(g.$$observers&&g.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!==b?g.$updateClass(a,b):g.$set(e,a)}))}}}})}}function ja(a,b,c){var d=
b[0],e=b.length,g=d.parentNode,f,h;if(a)for(f=0,h=a.length;f<h;f++)if(a[f]===d){a[f++]=c;h=f+e-1;for(var k=a.length;f<k;f++,h++)h<k?a[f]=a[h]:delete a[f];a.length-=e-1;a.context===d&&(a.context=c);break}g&&g.replaceChild(c,d);a=y.document.createDocumentFragment();for(f=0;f<e;f++)a.appendChild(b[f]);z.hasData(d)&&(z.data(c,z.data(d)),z(d).off("$destroy"));z.cleanData(a.querySelectorAll("*"));for(f=1;f<e;f++)delete b[f];b[0]=c;b.length=1}function ta(a,b){return P(function(){return a.apply(null,arguments)},
a,b)}function wa(a,b,d,e,g,f){try{a(b,d,e,g,f)}catch(h){c(h,za(d))}}function na(a,b){if(v)throw aa("missingattr",a,b);}function oa(a,c,d,e,g){function f(b,c,e){C(d.$onChanges)&&!cc(c,e)&&(ga||(a.$$postDigest(la),ga=[]),m||(m={},ga.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,n=e.optional,K,B,w,v;switch(e.mode){case "@":n||ra.call(c,m)||(na(m,g.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(F(a)||
La(a))f(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;K=c[m];F(K)?d[h]=b(K)(a):La(K)&&(d[h]=K);l[h]=new Jb(uc,d[h]);k.push(n);break;case "=":if(!ra.call(c,m)){if(n)break;na(m,g.name);c[m]=void 0}if(n&&!c[m])break;B=p(c[m]);v=B.literal?sa:cc;w=B.assign||function(){K=d[h]=B(a);throw aa("nonassign",c[m],m,g.name);};K=d[h]=B(a);n=function(b){v(b,d[h])||(v(b,K)?w(a,b=d[h]):d[h]=b);return K=b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,B.literal);k.push(n);break;case "<":if(!ra.call(c,
m)){if(n)break;na(m,g.name);c[m]=void 0}if(n&&!c[m])break;B=p(c[m]);var O=B.literal,s=d[h]=B(a);l[h]=new Jb(uc,d[h]);n=a.$watch(B,function(a,b){if(b===a){if(b===s||O&&sa(b,s))return;b=s}f(h,a,b);d[h]=a},O);k.push(n);break;case "&":n||ra.call(c,m)||na(m,g.name);B=c.hasOwnProperty(m)?p(c[m]):D;if(B===D&&n)break;d[h]=function(b){return B(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ia=/^\w/,Aa=y.document.createElement("div"),Ja=A,Ka=
s,Ea=E,ga;rc.prototype={$normalize:Da,$addClass:function(a){a&&0<a.length&&L.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&L.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=td(a,b);c&&c.length&&L.addClass(this.$$element,c);(c=td(b,a))&&c.length&&L.removeClass(this.$$element,c)},$set:function(a,b,d,e){var g=md(this.$$element[0],a),f=ud[a],h=a;g?(this.$$element.prop(a,b),e=g):f&&(this[f]=b,h=f);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Xc(a,
"-"));g=ya(this.$$element);if("a"===g&&("href"===a||"xlinkHref"===a)||"img"===g&&"src"===a)this[a]=b=null==b?b:r(b,"src"===a);else if("img"===g&&"srcset"===a&&u(b)){for(var g="",f=Q(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(f)?k:/(,)/,f=f.split(k),k=Math.floor(f.length/2),l=0;l<k;l++)var m=2*l,g=g+r(Q(f[m]),!0),g=g+(" "+Q(f[m+1]));f=Q(f[2*l]).split(/\s/);g+=r(Q(f[0]),!0);2===f.length&&(g+=" "+Q(f[1]));this[a]=b=g}!1!==d&&(null==b?this.$$element.removeAttr(e):Ia.test(e)?this.$$element.attr(e,
b):Oa(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=R()),e=d[a]||(d[a]=[]);e.push(b);O.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||x(c[a])||b(c[a])});return function(){cb(e,b)}}};var Fa=b.startSymbol(),Ga=b.endSymbol(),Ha="{{"===Fa&&"}}"===Ga?ab:function(a){return a.replace(/\{\{/g,Fa).replace(/}}/g,Ga)},Na=/^ngAttr[A-Z]/,Ra=/^(.+)Start$/;ba.$$addBindingInfo=n?function(a,b){var c=
a.data("$binding")||[];I(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:D;ba.$$addBindingClass=n?function(a){Pa(a,"ng-binding")}:D;ba.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:D;ba.$$addScopeClass=n?function(a,b){Pa(a,b?"ng-isolate-scope":"ng-scope")}:D;ba.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return y.document.createComment(c)};return ba}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}
function Da(a){return a.replace(qd,"").replace(vg,function(a,d,c){return c?d.toUpperCase():d})}function td(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function sd(a){a=z(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Ma&&""===d.nodeValue.trim())&&wg.call(a,b,1)}return a}function ug(a,b){if(b&&F(b))return b;if(F(a)){var d=vd.exec(a);if(d)return d[3]}}
function Af(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ha(b,"controller");G(b)?P(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!G(a.$scope))throw M("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,k,h){var l,m,p;k=!0===k;h&&F(h)&&(p=h);if(F(f)){h=f.match(vd);if(!h)throw wd("ctrlfmt",f);m=h[1];p=p||h[3];f=a.hasOwnProperty(m)?a[m]:Zc(g.$scope,m,!0)||(b?Zc(c,m,!0):
void 0);if(!f)throw wd("ctrlreg",m);sb(f,m,!0)}if(k)return k=(I(f)?f[f.length-1]:f).prototype,l=Object.create(k||null),p&&e(g,p,l,m||f.name),P(function(){var a=d.invoke(f,l,g,m);a!==l&&(G(a)||C(a))&&(l=a,p&&e(g,p,l,m||f.name));return l},{instance:l,identifier:p});l=d.instantiate(f,g,m);p&&e(g,p,l,m||f.name);return l}}]}function Bf(){this.$get=["$window",function(a){return z(a.document)}]}function Cf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;
a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function Df(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function vc(a){return G(a)?da(a)?a.toISOString():eb(a):a}function If(){this.$get=function(){return function(a){if(!a)return"";var b=[];Qc(a,function(a,c){null===a||x(a)||C(a)||(I(a)?q(a,function(a){b.push(ia(c)+"="+ia(vc(a)))}):b.push(ia(c)+"="+ia(vc(a))))});return b.join("&")}}}function Jf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||x(a)||(I(a)?q(a,function(a,c){b(a,e+"["+(G(a)?c:"")+"]")}):G(a)&&!da(a)?Qc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ia(e)+"="+ia(vc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function wc(a,b){if(F(a)){var d=a.replace(xg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(xd),e;(e=c)||(e=(e=d.match(yg))&&zg[e[0]].test(d));if(e)try{a=Tc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function yd(a){var b=
R(),d;F(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=N(Q(a.substr(0,d)));a=Q(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):G(a)&&q(a,function(a,d){var f=N(d),g=Q(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function zd(a){var b;return function(d){b||(b=yd(a));return d?(d=b[N(d)],void 0===d&&(d=null),d):b}}function Ad(a,b,d,c){if(C(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function Hf(){var a=this.defaults={transformResponse:[wc],transformRequest:[function(a){return G(a)&&"[object File]"!==
ha.call(a)&&"[object Blob]"!==ha.call(a)&&"[object FormData]"!==ha.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:pa(xc),put:pa(xc),patch:pa(xc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory",
"$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var g=b[d++],f=b[d++];a=a.then(g,f)}b.length=0;return a}function d(a,b){var c,e={};q(a,function(a,d){C(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function g(a){var b=P({},a);b.data=Ad(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!G(b))throw M("$http")("badreq",b);if(!F(p.valueOf(b.url)))throw M("$http")("badreq",b.url);var f=
P({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},b);f.headers=function(b){var c=a.headers,e=P({},b.headers),g,f,h,c=P({},c.common,c[N(b.method)]);a:for(g in c){f=N(g);for(h in e)if(N(h)===f)continue a;e[g]=c[g]}return d(e,pa(b))}(b);f.method=ub(f.method);f.paramSerializer=F(f.paramSerializer)?m.get(f.paramSerializer):f.paramSerializer;e.$$incOutstandingRequestCount();var h=[],k=[];b=
l.resolve(f);q(s,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});b=c(b,h);b=b.then(function(b){var c=b.headers,d=Ad(b.data,zd(c),void 0,b.transformRequest);x(d)&&q(c,function(a,b){"content-type"===N(b)&&delete c[b]});x(b.withCredentials)&&!x(a.withCredentials)&&(b.withCredentials=a.withCredentials);return B(b,d).then(g,g)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(D)})}function B(c,
d){function e(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,c,d,e,g){function f(){m(c,a,d,e,g)}L&&(200<=a&&300>a?L.put(z,[a,c,yd(d),e,g]):L.remove(z));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function m(a,b,d,e,g){b=-1<=b?b:0;(200<=b&&300>b?s.resolve:s.reject)({data:a,status:b,headers:zd(d),config:c,statusText:e,xhrStatus:g})}function t(a){m(a.data,a.status,pa(a.headers()),a.statusText,a.xhrStatus)}
function B(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var s=l.defer(),qa=s.promise,L,r,la=c.headers,y="jsonp"===N(c.method),z=c.url;y?z=p.getTrustedResourceUrl(z):F(z)||(z=p.valueOf(z));z=v(z,c.paramSerializer(c.params));y&&(z=E(z,c.jsonpCallbackParam));n.pendingRequests.push(c);qa.then(B,B);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(L=G(c.cache)?c.cache:G(a.cache)?a.cache:A);L&&(r=L.get(z),u(r)?r&&C(r.then)?r.then(t,t):I(r)?m(r[1],r[0],
pa(r[2]),r[3],r[4]):m(r,200,{},"OK","complete"):L.put(z,qa));x(r)&&((r=J(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(la[c.xsrfHeaderName||a.xsrfHeaderName]=r),f(c.method,z,d,k,la,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return qa}function v(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function E(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=fc(c[1]);q(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",
a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var A=k("$http");a.paramSerializer=F(a.paramSerializer)?m.get(a.paramSerializer):a.paramSerializer;var s=[];q(d,function(a){s.unshift(F(a)?m.get(a):m.invoke(a))});var J=Ag(c);n.pendingRequests=[];(function(a){q(arguments,function(a){n[a]=function(b,c){return n(P({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){n[a]=function(b,c,d){return n(P({},d||
{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Lf(){this.$get=function(){return function(){return new y.XMLHttpRequest}}}function Kf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Bg(a,c,a.defer,b,d[0])}]}function Bg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",
m);e.body.removeChild(f);f=null;var g=-1,B="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),B=a.type,g="error"===a.type?404:200);d&&d(g,B)};f.addEventListener("load",m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,B,v,E){function A(a){H="timeout"===a;r&&r();w&&w.abort()}function s(a,b,c,e,g,f){u(T)&&d.cancel(T);r=w=null;a(b,c,e,g,f)}k=k||a.url();if("jsonp"===N(e))var J=c.createCallback(k),r=f(k,J,function(a,b){var d=200===a&&c.getResponse(J);
s(l,a,d,"",b,"complete");c.removeCallback(J)});else{var w=b(e,k),H=!1;w.open(e,k,!0);q(m,function(a,b){u(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"===ma(k).protocol?404:0);s(l,c,b,w.getAllResponseHeaders(),a,"complete")};w.onerror=function(){s(l,-1,null,null,"","error")};w.ontimeout=function(){s(l,-1,null,null,"","timeout")};w.onabort=function(){s(l,-1,null,null,"",H?"timeout":
"abort")};q(v,function(a,b){w.addEventListener(b,a)});q(E,function(a,b){w.upload.addEventListener(b,a)});n&&(w.withCredentials=!0);if(B)try{w.responseType=B}catch(K){if("json"!==B)throw K;}w.send(x(h)?null:h)}if(0<p)var T=d(function(){A("timeout")},p);else p&&C(p.then)&&p.then(function(){A(u(p.$$timeoutId)?"timeout":"abort")})}}function Ff(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler",
"$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function h(f,h,p,n){function s(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);return n&&!u(a)?a:hc(a)}catch(d){c(Ea.interr(f,d))}}if(!f.length||-1===f.indexOf(a)){var J;h||(h=g(f),J=ka(h),J.exp=f,J.expressions=[],J.$$watchDelegate=k);return J}n=!!n;var q,w,H=0,K=[],T=[];J=f.length;for(var t=[],r=[];H<J;)if(-1!==(q=f.indexOf(a,
H))&&-1!==(w=f.indexOf(b,q+l)))H!==q&&t.push(g(f.substring(H,q))),H=f.substring(q+l,w),K.push(H),T.push(d(H,s)),H=w+m,r.push(t.length),t.push("");else{H!==J&&t.push(g(f.substring(H)));break}p&&1<t.length&&Ea.throwNoconcat(f);if(!h||K.length){var O=function(a){for(var b=0,c=K.length;b<c;b++){if(n&&x(a[b]))return;t[r[b]]=a[b]}return t.join("")};return P(function(a){var b=0,d=K.length,e=Array(d);try{for(;b<d;b++)e[b]=T[b](a);return O(e)}catch(g){c(Ea.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(T,function(d,e){var g=O(d);b.call(this,g,d!==e?c:g,a);c=g})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Gf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,h,l,m){function p(){n?f.apply(null,B):f(A)}var n=4<arguments.length,B=n?xa.call(arguments,4):[],v=b.setInterval,E=b.clearInterval,
A=0,s=u(m)&&!m,J=(s?c:d).defer(),q=J.promise;l=u(l)?l:0;q.$$intervalId=v(function(){s?e.defer(p):a.$evalAsync(p);J.notify(A++);0<l&&A>=l&&(J.resolve(A),E(q.$$intervalId),delete g[q.$$intervalId]);s||a.$apply()},h);g[q.$$intervalId]=J;return q}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].promise.$$state.pur=!0,g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function yc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
fb(a[b].replace(/%2F/g,"/"));return a.join("/")}function Bd(a,b){var d=ma(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||Cg[d.protocol]||null}function Cd(a,b,d){if(Dg.test(a))throw kb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ma(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=fc(a.search);b.$$hash=decodeURIComponent(a.hash);
b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function zc(a,b){return a.slice(0,b.length)===b}function va(a,b){if(zc(b,a))return b.substr(a.length)}function Ka(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function lb(a){return a.replace(/(#.+)|#$/,"$1")}function Ac(a,b,d){this.$$html5=!0;d=d||"";Bd(a,this);this.$$parse=function(a){var d=va(b,a);if(!F(d))throw kb("ipthprfx",a,b);Cd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=gc(this.$$search),
d=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=yc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1);this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=va(a,c))?(g=f,g=d&&u(f=va(d,f))?b+(va("/",f)||f):a+g):u(f=va(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function Bc(a,b,d){Bd(a,this);this.$$parse=function(c){var e=va(a,c)||va(b,c),f;x(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",x(e)&&(a=c,
this.replace())):(f=va(d,e),x(f)&&(f=e));Cd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;zc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=gc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=yc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"");this.$$urlUpdatedByLocation=!0};this.$$parseLinkUrl=function(b,d){return Ka(a)===Ka(b)?(this.$$parse(b),!0):!1}}function Dd(a,b,d){this.$$html5=
!0;Bc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Ka(c)?f=c:(g=va(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=gc(this.$$search),e=this.$$hash?"#"+fb(this.$$hash):"";this.$$url=yc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url;this.$$urlUpdatedByLocation=!0}}function Lb(a){return function(){return this[a]}}function Ed(a,b){return function(d){if(x(d))return this[a];this[a]=
b(d);this.$$compose();return this}}function Nf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){if(La(a))return b.enabled=a,this;if(G(a)){La(a.enabled)&&(b.enabled=a.enabled);La(a.requireBase)&&(b.requireBase=a.requireBase);if(La(a.rewriteLinks)||F(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function k(a,
b,d){var e=l.url(),g=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(f){throw l.url(e),l.$$state=g,f;}}function h(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var p=c.url(),n;if(b.enabled){if(!m&&b.requireBase)throw kb("nobase");n=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(m||"/");m=e.history?Ac:Dd}else n=Ka(p),m=Bc;var B=n.substr(0,Ka(n).lastIndexOf("/")+1);l=new m(n,B,"#"+a);l.$$parseLinkUrl(p,p);l.$$state=c.state();var v=/^\s*(javascript|mailto):/i;
f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var h=z(a.target);"a"!==ya(h[0]);)if(h[0]===f[0]||!(h=h.parent())[0])return;if(!F(e)||!x(h.attr(e))){var e=h.prop("href"),k=h.attr("href")||h.attr("xlink:href");G(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ma(e.animVal).href);v.test(e)||!e||h.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(e,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=
!0))}}});lb(l.absUrl())!==lb(p)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){zc(a,B)?(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,g;a=lb(a);l.$$parse(a);l.$$state=b;g=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(g?(l.$$parse(c),l.$$state=e,k(c,!1,e)):(q=!1,h(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(q||l.$$urlUpdatedByLocation){l.$$urlUpdatedByLocation=!1;var a=lb(c.url()),b=lb(l.absUrl()),g=c.state(),f=l.$$replace,
m=a!==b||l.$$html5&&e.history&&g!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,g).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=g):(m&&k(b,f,g===l.$$state?null:l.$$state),h(a,g)))})}l.$$replace=!1});return l}]}function Of(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){bc(a)&&(a.stack&&f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+
a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||D;return function(){var a=[];q(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ba||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Eg(a){return a+""}function Fg(a,
b){return"undefined"!==typeof a?a:b}function Fd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Gg(a,b){switch(a.type){case r.MemberExpression:if(a.computed)return!1;break;case r.UnaryExpression:return 1;case r.BinaryExpression:return"+"!==a.operator?1:!1;case r.CallExpression:return!1}return void 0===b?Gd:b}function U(a,b,d){var c,e,f=a.isPure=Gg(a,d);switch(a.type){case r.Program:c=!0;q(a.body,function(a){U(a.expression,b,f);c=c&&a.expression.constant});a.constant=c;break;
case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:U(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:U(a.left,b,f);U(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case r.LogicalExpression:U(a.left,b,f);U(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:U(a.test,b,f);U(a.alternate,b,f);
U(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:U(a.object,b,f);a.computed&&U(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case r.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];q(a.arguments,function(a){U(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=
c;a.toWatch=d?e:[a];break;case r.AssignmentExpression:U(a.left,b,f);U(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:c=!0;e=[];q(a.elements,function(a){U(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case r.ObjectExpression:c=!0;e=[];q(a.properties,function(a){U(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(U(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,a.key.toWatch))});a.constant=
c;a.toWatch=e;break;case r.ThisExpression:a.constant=!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Hd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Id(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Jd(a){if(1===a.body.length&&Id(a.body[0].expression))return{type:r.AssignmentExpression,left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Kd(a){this.$filter=
a}function Ld(a){this.$filter=a}function Mb(a,b,d){this.ast=new r(a,d);this.astCompiler=d.csp?new Ld(b):new Kd(b)}function Cc(a){return C(a.valueOf)?a.valueOf():Hg.call(a)}function Pf(){var a=R(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,g;switch(typeof b){case "string":return g=b=b.trim(),d=a[g],d||(d=new Nb(n),d=(new Mb(d,e,n)).parse(b),
d.constant?d.$$watchDelegate=m:d.oneTime?d.$$watchDelegate=d.literal?l:h:d.inputs&&(d.$$watchDelegate=k),a[g]=d),p(d,c);case "function":return p(b,c);default:return p(D,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Cc(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Cc(b));return h},b,c,e)}for(var l=[],m=[],p=0,
n=f.length;p<n;p++)l[p]=g,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Cc(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function g(a){return d(a)}function f(a,c,d){l=a;C(b)&&b(a,c,d);u(a)&&d.$$postDigest(function(){u(l)&&h()})}var h,l;return h=d.inputs?k(a,f,c,d,e):a.$watch(g,f,c)}function l(a,b,c,d){function e(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}var g,f;return g=a.$watch(function(a){return d(a)},
function(a,c,d){f=a;C(b)&&b(a,c,d);e(a)&&d.$$postDigest(function(){e(f)&&g()})},c)}function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,e=c!==l&&c!==h?function(c,e,g,f){g=d&&f?f[0]:a(c,e,g,f);return b(g,c,e)}:function(c,d,e,g){e=a(c,d,e,g);c=b(e,c,d);return u(e)?c:e},d=!a.inputs;c&&c!==k?(e.$$watchDelegate=c,e.inputs=a.inputs):b.$stateful||(e.$$watchDelegate=k,e.inputs=a.inputs?a.inputs:[a]);e.inputs&&(e.inputs=e.inputs.map(function(a){return a.isPure===
Gd?function(b){return a(b)}:a}));return e}var n={csp:Ia().noUnsafeEval,literals:na(b),isIdentifierStart:C(d)&&d,isIdentifierContinue:C(c)&&c};f.$$getAst=function(a){var b=new Nb(n);return(new Mb(b,e,n)).getAst(a).ast};return f}]}function Rf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Md(function(a){b.$evalAsync(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Sf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,
d){return Md(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return u(b)?(a=b,this):a}}function Md(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!J&&u.length;){var a=u.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,
""):x(c)?"undefined":"string"!==typeof c?Fe(c,void 0):c);bc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===J&&0===u.length&&a(g),u.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++J,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,p=k.length;l<p;++l){c.pur=!0;f=k[l][0];e=k[l][c.status];try{C(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(n){m(f,n),n&&!0===n.$$passToExceptionHandler&&b(n)}}}finally{--J,
d&&0===J&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,s("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(G(b)||C(b))f=b.then;C(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&
e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,C(a)?a(d):d)}catch(h){b(h)}}})}function B(a){var b=new f;m(b,a);return b}function v(a,b,c){var d=null;try{C(c)&&(d=c())}catch(e){return B(e)}return d&&C(d.then)?d.then(function(){return b(a)},B):b(a)}function r(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,d)}function A(a){if(!C(a))throw s("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var s=M("$q",TypeError),J=0,u=[];P(f.prototype,
{then:function(a,b,c){if(x(a)&&x(b)&&x(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return v(b,w,a)},function(b){return v(b,B,a)},b)}});var w=r;A.prototype=f.prototype;A.defer=c;A.reject=B;A.when=r;A.resolve=w;A.all=function(a){var b=new f,c=0,d=I(a)?[]:{};q(a,function(a,e){c++;r(a).then(function(a){d[e]=
a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};A.race=function(a){var b=c();q(a,function(a){r(a).then(b.resolve,b.reject)});return b.promise};return A}function ag(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};
f.supported=e;return f}]}function Qf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++qb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=M("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===
Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++qb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(s.$$phase)throw d("inprog",
s.$$phase);s.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function B(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function v(){}function r(){for(;w.length;)try{w.shift()()}catch(a){f(a)}e=null}function A(){null===e&&(e=k.defer(function(){s.$apply(r)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);
d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=C(b)?b:D;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:v,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&
k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,
b){function c(a){e=a;var b,d,g,h;if(!x(e)){if(G(e))if(ja(e))for(f!==p&&(f=p,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==n&&(f=n={},q=0,l++);a=0;for(b in e)ra.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)ra.call(e,b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),p=[],n={},B=!0,q=0;return this.$watch(m,
function(){B?(B=!1,b(e,e,d)):b(e,h,d);if(k)if(G(e))if(ja(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ra.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,h,l,m,n,q,B=b,w,A=[],z,y;p("$digest");k.$$checkUrlChange();this===s&&null!==e&&(k.defer.cancel(e),r());c=null;do{q=!1;w=this;for(n=0;n<J.length;n++){try{y=J[n],l=y.fn,l(y.scope,y.locals)}catch(x){f(x)}c=null}J.length=0;a:do{if(n=!w.$$suspended&&w.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=
n[n.$$digestWatchIndex])if(m=a.get,(g=m(w))!==(h=a.last)&&!(a.eq?sa(g,h):X(g)&&X(h)))q=!0,c=a,a.last=a.eq?na(g,null):g,l=a.fn,l(g,h===v?g:h,w),5>B&&(z=4-B,A[z]||(A[z]=[]),A[z].push({msg:C(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){q=!1;break a}}catch(F){f(F)}if(!(n=!w.$$suspended&&w.$$watchersCount&&w.$$childHead||w!==this&&w.$$nextSibling))for(;w!==this&&!(n=w.$$nextSibling);)w=w.$parent}while(w=n);if((q||J.length)&&!B--)throw s.$$phase=null,d("infdig",
b,A);}while(q||J.length);for(s.$$phase=null;H<u.length;)try{u[H++]()}catch(D){f(D)}u.length=H=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===s&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)B(this,this.$$listenerCount[b],b);a&&a.$$childHead===
this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=D;this.$on=this.$watch=this.$watchGroup=function(){return D};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){s.$$phase||
J.length||k.defer(function(){J.length&&s.$digest()});J.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{s.$$phase=null}}catch(b){f(b)}finally{try{s.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);a=g(a);A()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=
0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],B(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=
null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=
null;return e}};var s=new m,J=s.$$asyncQueue=[],u=s.$$postDigestQueue=[],w=s.$$applyAsyncQueue=[],H=0;return s}]}function Ie(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=ma(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Ig(a){if("self"===
a)return a;if(F(a)){if(-1<a.indexOf("***"))throw wa("iwcard",a);a=Nd(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if($a(a))return new RegExp("^"+a.source+"$");throw wa("imatcher");}function Od(a){var b=[];u(a)&&q(a,function(a){b.push(Ig(a))});return b}function Uf(){this.SCE_CONTEXTS=fa;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Od(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Od(a));return b};
this.$get=["$injector",function(d){function c(a,b){return"self"===a?Pd(b,Qd):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw wa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),k={};k[fa.HTML]=e(g);k[fa.CSS]=e(g);k[fa.URL]=e(g);k[fa.JS]=
e(g);k[fa.RESOURCE_URL]=e(k[fa.URL]);return{trustAs:function(a,b){var c=k.hasOwnProperty(a)?k[a]:null;if(!c)throw wa("icontext",a,b);if(null===b||x(b)||""===b)return b;if("string"!==typeof b)throw wa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||x(e)||""===e)return e;var g=k.hasOwnProperty(d)?k[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===fa.RESOURCE_URL){var g=ma(e.toString()),p,n,q=!1;p=0;for(n=a.length;p<n;p++)if(c(a[p],g)){q=!0;break}if(q)for(p=0,n=b.length;p<
n;p++)if(c(b[p],g)){q=!1;break}if(q)return e;throw wa("insecurl",e.toString());}if(d===fa.HTML)return f(e);throw wa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Tf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw wa("iequirks");var c=pa(fa);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=
function(a,b){return b},c.valueOf=ab);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;q(fa,function(a,b){var d=N(b);c[("parse_as_"+d).replace(Dc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Dc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Dc,wb)]=function(b){return g(a,b)}});return c}]}function Vf(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||
!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(N((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&Ba)return!1;if(x(d[a])){var b=g.createElement("div");
d[a]="on"+a in b}return d[a]},csp:Ia(),transitions:h,animations:l,android:e}}]}function Xf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!F(k)||x(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;I(l)?l=l.filter(function(a){return a!==wc}):l===wc&&(l=null);return c.get(k,P({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){d.put(k,
a.data);return a.data},function(a){h||(a=Jg("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function Yf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ea.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Nd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Zf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){C(f)||(l=h,h=f,f=D);var m=xa.call(arguments,3),p=u(l)&&!l,n=(p?c:d).defer(),
q=n.promise,v;v=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[q.$$timeoutId]}p||a.$apply()},h);q.$$timeoutId=v;g[v]=n;return q}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].promise.$$state.pur=!0,g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function ma(a){if(!F(a))return a;Ba&&(W.setAttribute("href",a),a=W.href);W.setAttribute("href",a);return{href:W.href,protocol:W.protocol?
W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:"/"+W.pathname}}function Ag(a){var b=[Qd].concat(a.map(ma));return function(a){a=ma(a);return b.some(Pd.bind(null,a))}}function Pd(a,b){a=ma(a);b=ma(b);return a.protocol===b.protocol&&a.host===b.host}function $f(){this.$get=ka(y)}function Rd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),x(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function dg(){this.$get=Rd}function gd(a){function b(d,c){if(G(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",
Sd);b("date",Td);b("filter",Kg);b("json",Lg);b("limitTo",Mg);b("lowercase",Ng);b("number",Ud);b("orderBy",Vd);b("uppercase",Og)}function Kg(){return function(a,b,d,c){if(!ja(a)){if(null==a)return a;throw M("filter")("notarray",a);}c=c||"$";var e;switch(Ec(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Pg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Pg(a,b,d,c){var e=G(a)&&d in a;!0===b?b=sa:C(b)||(b=function(a,
b){if(x(a))return!1;if(null===a||null===b)return a===b;if(G(b)||G(a)&&!ac(a))return!1;a=N(""+a);b=N(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!G(f)?ga(f,a[d],b,d,!1):ga(f,a,b,d,c)}}function ga(a,b,d,c,e,f){var g=Ec(a),k=Ec(b);if("string"===k&&"!"===b.charAt(0))return!ga(a,b.substring(1),d,c,e);if(I(a))return a.some(function(a){return ga(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&ga(a[h],b,d,c,!0))return!0;return f?!1:ga(a,b,d,c,!1)}if("object"===
k){for(h in b)if(f=b[h],!C(f)&&!x(f)&&(g=h===c,!ga(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function Ec(a){return null===a?"null":typeof a}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){x(c)&&(c=b.CURRENCY_SYM);x(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Wd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Ud(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==
a?a:Wd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Qg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Xd))&&(a=a.replace(Xd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Fc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Fc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Yd&&(d=d.splice(0,Yd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Rg(a,b,d,c){var e=a.d,f=e.length-a.i;b=x(b)?Math.min(Math.max(d,f),c):+b;d=
b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Wd(a,b,d,c,e){if(!F(a)&&!Y(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";
else{g=Qg(k);Rg(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=
a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Fc+a;d&&(a=a.substr(a.length-b));return e+a}function ca(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function mb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Zd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function $d(a){return function(b){var d=Zd(b.getFullYear());b=+new Date(b.getFullYear(),
b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Gc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Td(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=Sg.test(c)?Z(c):b(c));Y(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Tg.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=dc(f,m),c=ec(c,f,!0));q(k,function(b){h=Ug[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Lg(){return function(a,b){x(b)&&(b=2);return eb(a,b)}}function Mg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(X(b))return a;Y(a)&&(a=a.toString());if(!ja(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Hc(a,d,d+b):0===d?Hc(a,b,a.length):Hc(a,Math.max(0,d+b),d)}}function Hc(a,b,d){return F(a)?a.slice(b,d):xa.call(a,b,d)}function Vd(a){function b(b){return b.map(function(b){var c=1,d=ab;if(C(b))d=b;else if(F(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(G(h)&&(h=a.index),G(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c=d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ja(a))throw M("orderBy")("notarray",a);I(f)||(f=[f]);0===f.length&&
(f=["+"]);var h=b(f),l=g?-1:1,m=C(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(C(e.valueOf)&&(e=e.valueOf(),d(e)))break a;ac(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var g=m(a.predicateValues[d],b.predicateValues[d]);if(g)return g*h[d].descending*
l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){C(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ka(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=Qb;this.$$element=a;this.$$animate=c;ae(this)}function ae(a){a.$$classCache={};
a.$$classCache[be]=!(a.$$classCache[nb]=a.$$element.hasClass(nb))}function ce(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Xc(c,"-"):"";b(a,nb+c,!0===d);b(a,be+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){x(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),de(this.$pending)&&(this.$pending=void 0));La(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=de(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function de(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Ic(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Va(a,b,d,c,e,f){var g=N(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(x(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=Q(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ee[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Rb(a,b){return function(d,c){var e,f;if(da(d))return d;if(F(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Vg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,k,h,l,m){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return u(a)&&!da(a)?q(a)||void 0:a}function q(a,b){var c=k.$options.getOption("timezone");E&&E!==c&&(b=Uc(b,dc(E)));var e=d(a,b);!isNaN(e)&&c&&(e=ec(e,c));return e}
Jc(e,f,g,k);Va(e,f,g,k,h,l);var r,E;k.$$parserName=a;k.$parsers.push(function(a){if(k.$isEmpty(a))return null;if(b.test(a))return q(a,r)});k.$formatters.push(function(a){if(a&&!da(a))throw pb("datefmt",a);if(p(a)){r=a;var b=k.$options.getOption("timezone");b&&(E=b,r=ec(r,b,!0));return m("date")(a,c,b)}E=r=null;return""});if(u(g.min)||g.ngMin){var A;k.$validators.min=function(a){return!p(a)||x(A)||d(a)>=A};g.$observe("min",function(a){A=n(a);k.$validate()})}if(u(g.max)||g.ngMax){var s;k.$validators.max=
function(a){return!p(a)||x(s)||d(a)<=s};g.$observe("max",function(a){s=n(a);k.$validate()})}}}function Jc(a,b,d,c){(c.$$hasNativeValidators=G(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function fe(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Wg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Y(b))throw pb("numfmt",b);b=b.toString()}return b})}function Wa(a){u(a)&&
!Y(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Kc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ge(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Kc(a):0,k=e?Kc(b):0,h=f?Kc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function he(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",
d,c);return a(b)}return e}function Lc(a,b){function d(a,b){if(!a||!a.length)return[];if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e===b[f])continue a;c.push(e)}return c}function c(a){var b=a;I(a)?b=a.map(c).join(" "):G(a)&&(b=Object.keys(a).filter(function(b){return a[b]}).join(" "));return b}function e(a){var b=a;if(I(a))b=a.map(e);else if(G(a)){var c=!1,b=Object.keys(a).filter(function(b){b=a[b];!c&&x(b)&&(c=!0);return b});c&&b.push(void 0)}return b}
a="ngClass"+a;var f;return["$parse",function(g){return{restrict:"AC",link:function(k,h,l){function m(a,b){var c=[];q(a,function(a){if(0<b||s[a])s[a]=(s[a]||0)+b,s[a]===+(0<b)&&c.push(a)});return c.join(" ")}function p(a){if(a===b){var c=z,c=m(c&&c.split(" "),1);l.$addClass(c)}else c=z,c=m(c&&c.split(" "),-1),l.$removeClass(c);u=a}function n(a){a=c(a);a!==z&&r(a)}function r(a){if(u===b){var c=z&&z.split(" "),e=a&&a.split(" "),g=d(c,e),c=d(e,c),g=m(g,-1),c=m(c,1);l.$addClass(c);l.$removeClass(g)}z=
a}var v=l[a].trim(),E=":"===v.charAt(0)&&":"===v.charAt(1),v=g(v,E?e:c),A=E?n:r,s=h.data("$classCounts"),u=!0,z;s||(s=R(),h.data("$classCounts",s));"ngClass"!==a&&(f||(f=g("$index",function(a){return a&1})),k.$watch(f,p));k.$watch(v,A,E)}}}]}function Sb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=
!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=Qb;this.$options=Tb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$currentValidationRunId=
0;Object.defineProperty(this,"$$scope",{value:a});this.$$attr=d;this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;ae(this);Xg(this)}function Xg(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Mc(a){this.$$options=a}function ie(a,b){q(b,function(b,c){u(a[c])||(a[c]=b)})}function Fa(a,b){a.prop("selected",b);a.attr("selected",b)}var Oc={objectMaxDepth:5},
Yg=/^\/(.+)\/([a-z]*)$/,ra=Object.prototype.hasOwnProperty,N=function(a){return F(a)?a.toLowerCase():a},ub=function(a){return F(a)?a.toUpperCase():a},Ba,z,ta,xa=[].slice,wg=[].splice,Zg=[].push,ha=Object.prototype.toString,Rc=Object.getPrototypeOf,oa=M("ng"),ea=y.angular||(y.angular={}),jc,qb=0;Ba=y.document.documentMode;var X=Number.isNaN||function(a){return a!==a};D.$inject=[];ab.$inject=[];var I=Array.isArray,ue=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
Q=function(a){return F(a)?a.trim():a},Nd=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ia=function(){if(!u(Ia.rules)){var a=y.document.querySelector("[ng-csp]")||y.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ia.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ia;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,
noInlineStyle:!1}}}return Ia.rules},rb=function(){if(u(rb.name_))return rb.name_;var a,b,d=Ga.length,c,e;for(b=0;b<d;++b)if(c=Ga[b],a=y.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},we=/:/g,Ga=["ng-","data-ng-","ng:","x-ng-"],ze=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof y.HTMLScriptElement||b instanceof y.SVGScriptElement))return!1;b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;
if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(y.document),Ce=/[A-Z]/g,Yc=!1,Ma=3,He={full:"1.6.10",major:1,minor:6,dot:10,codeName:"crystalline-persuasion"};S.expando="ng339";var ib=S.cache={},ig=1;S._data=function(a){return this.cache[a[this.expando]]||{}};var eg=/-([a-z])/g,$g=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},
mc=M("jqLite"),hg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,lc=/<|&#?\w+;/,fg=/<([\w:-]+)/,gg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,$={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option;$.tbody=$.tfoot=$.colgroup=$.caption=$.thead;$.th=$.td;var ng=y.Node.prototype.contains||
function(a){return!!(this.compareDocumentPosition(a)&16)},Ua=S.prototype={ready:id,toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?z(this[a]):z(this[this.length+a])},length:0,push:Zg,sort:[].sort,splice:[].splice},Gb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Gb[N(a)]=a});var nd={};q("input select option textarea button form details".split(" "),function(a){nd[a]=!0});var ud={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};q({data:qc,removeData:pc,hasData:function(a){for(var b in ib[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)pc(a[b])}},function(a,b){S[b]=a});q({data:qc,inheritedData:Eb,scope:function(a){return z.data(a,"$scope")||Eb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return z.data(a,"$isolateScope")||z.data(a,"$isolateScopeNoTemplate")},controller:kd,injector:function(a){return Eb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace($g,"ms-"));if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c&&a.getAttribute){var c=N(b),e=Gb[c];if(u(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(x(d)){var c=
a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(x(b)){if(a.multiple&&"select"===ya(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(x(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},empty:ld},function(a,b){S.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==ld&&x(2===a.length&&a!==Bb&&a!==kd?b:c)){if(G(b)){for(e=0;e<g;e++)if(a===qc)a(this[e],b);else for(f in b)a(this[e],
f,b[f]);return this}e=a.$dv;g=x(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:pc,on:function(a,b,d,c){if(u(c))throw mc("onargs");if(kc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=kg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],mg),
k(b,void 0,!0)):k(b)}},off:jd,one:function(a,b,d){a=z(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);q(new S(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new S(b);for(var d=0,c=b.length;d<
c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new S(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=z(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;if(c){b=new S(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var e=
d;x(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:oc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:D,type:f,target:a},b.type&&(c=P(c,b)),b=pa(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){S.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<k;g++)x(f)?(f=a(this[g],b,c,e),u(f)&&(f=z(f))):nc(f,a(this[g],b,c,e));return u(f)?f:this}});S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off;var ah=Object.create(null);
od.prototype={_idx:function(a){if(a===this._lastKey)return this._lastIndex;this._lastKey=a;return this._lastIndex=this._keys.indexOf(a)},_transformKey:function(a){return X(a)?ah:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,
1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=od,cg=[function(){this.$get=[function(){return Hb}]}],pg=/^([^(]+?)=>/,qg=/^[^(]*\(\s*([^)]*)\)/m,bh=/,/,ch=/^\s*(_?)(\S+?)\1\s*$/,og=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Aa=M("$injector");gb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||rg(a)),Aa("strictdi",d);b=pd(a);q(b[1].split(bh),function(a){a.replace(ch,function(a,b,d){c.push(d)})})}a.$inject=
c}}else I(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=M("$animate"),uf=function(){this.$get=D},vf=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):I(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=sg(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&
Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:D,on:D,off:D,pin:D,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},sf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",
c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=C(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||
e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(c,d,h,l){d=d&&z(d);h=h&&z(h);d=d||h.parent();b(c,d,h);return a.push(c,"enter",Ja(l))},move:function(c,d,h,l){d=d&&z(d);h=h&&z(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",Ja(l))},leave:function(b,c){return a.push(b,"leave",Ja(c),function(){b.remove()})},addClass:function(b,c,d){d=Ja(d);d.addClass=jb(d.addclass,c);return a.push(b,
"addClass",d)},removeClass:function(b,c,d){d=Ja(d);d.removeClass=jb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=Ja(f);f.addClass=jb(f.addClass,c);f.removeClass=jb(f.removeClass,d);return a.push(b,"setClass",f)},animate:function(b,c,d,f,m){m=Ja(m);m.from=m.from?P(m.from,c):c;m.to=m.to?P(m.to,d):d;m.tempClasses=jb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],xf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||
a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},wf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=
function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:D,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},
pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},tf=function(){this.$get=
["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=na(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},aa=M("$compile"),uc=new function(){};$c.$inject=["$provide","$$sanitizeUriProvider"];
Jb.prototype.isFirstChange=function(){return this.previousValue===uc};var qd=/^((?:x|data)[:\-_])/i,vg=/[:\-_]+(.)/g,wd=M("$controller"),vd=/^(\S+)(\s+as\s+([\w$]+))?$/,Ef=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof z&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},xd="application/json",xc={"Content-Type":xd+";charset=utf-8"},yg=/^\[|^\{(?!\{)/,zg={"[":/]$/,"{":/}$/},xg=/^\)]\}',?\n/,Kb=M("$http"),Ea=ea.$interpolateMinErr=M("$interpolate");Ea.throwNoconcat=
function(a){throw Ea("noconcat",a);};Ea.interr=function(a,b){return Ea("interr",a,b.toString())};var Mf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ea.callbacks,d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},
dh=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Cg={http:80,https:443,ftp:21},kb=M("$location"),Dg=/^\s*[\\/]{2,}/,eh={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Lb("$$absUrl"),url:function(a){if(x(a))return this.$$url;var b=dh.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Ed("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+
a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||Y(a))a=a.toString(),this.$$search=fc(a);else if(G(a))a=na(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw kb("isrcharg");break;default:x(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Ed("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([Dd,Bc,Ac],function(a){a.prototype=Object.create(eh);
a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==Ac||!this.$$html5)throw kb("nostate");this.$$state=x(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Xa=M("$parse"),Hg={}.constructor.prototype.valueOf,Ub=R();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var fh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,lex:function(a){this.text=a;this.index=0;for(this.tokens=
[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,
text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,
this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-
56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Xa("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=N(this.text.charAt(this.index));
if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=
this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=
fh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";
r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Id(a))throw Xa("lval");
a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:r.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=na(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw Xa("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Xa("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Xa("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},$locals:{type:r.LocalsExpression}}};var Gd=2;Kd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(a,b.$filter);var d="",c;this.stage="assign";if(c=Jd(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Hd(a.body);b.stage="inputs";q(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Eg,Fg,Fd);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||D;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:q(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case r.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){q(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];q(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case r.ObjectExpression:l=[];p=!1;q(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(q(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c(b||"s");break;case r.LocalsExpression:this.assign(b,"l");c(b||"l");break;case r.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(Y(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Xa("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Ld.prototype={compile:function(a){var b=this;U(a,b.$filter);var d,c;if(d=Jd(a))c=this.recurse(d);d=Hd(a.body);var e;d&&(e=[],q(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];q(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?D:1===a.body.length?f[0]:function(a,b){var c;q(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return f.identifier(a.name,b,d);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case r.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var q=0;q<g.length;++q)n.push(g[q](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=u(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Fd(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(u(k)?k:0)-(u(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===r.Literal||d.body[0].expression.type===r.ArrayExpression||d.body[0].expression.type===r.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var wa=M("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},
Dc=/_([a-z])/g,Jg=M("$compile"),W=y.document.createElement("a"),Qd=ma(y.location.href);Rd.$inject=["$document"];gd.$inject=["$provide"];var Yd=22,Xd=".",Fc="0";Sd.$inject=["$locale"];Ud.$inject=["$locale"];var Ug={yyyy:ca("FullYear",4,0,!1,!0),yy:ca("FullYear",2,0,!0,!0),y:ca("FullYear",1,0,!1,!0),MMMM:mb("Month"),MMM:mb("Month",!0),MM:ca("Month",2,1),M:ca("Month",1,1),LLLL:mb("Month",!1,!0),dd:ca("Date",2),d:ca("Date",1),HH:ca("Hours",2),H:ca("Hours",1),hh:ca("Hours",2,-12),h:ca("Hours",1,-12),mm:ca("Minutes",
2),m:ca("Minutes",1),ss:ca("Seconds",2),s:ca("Seconds",1),sss:ca("Milliseconds",3),EEEE:mb("Day"),EEE:mb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:$d(2),w:$d(1),G:Gc,GG:Gc,GGG:Gc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Tg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,Sg=/^-?\d+$/;
Td.$inject=["$locale"];var Ng=ka(N),Og=ka(ub);Vd.$inject=["$parse"];var Je=ka({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ha.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Da("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==
e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(ud,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Yg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Da("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ha.call(c.prop("href"))&&
(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Qb={$addControl:D,$$renameControl:function(a,b){a.$name=b},$removeControl:D,$setValidity:D,$setDirty:D,$setPristine:D,$setSubmitted:D};Pb.$inject=["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){q(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){q(this.$$controls,function(a){a.$commitViewValue()})},
$addControl:function(a){Ha(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&this[a.$name]===a&&delete this[a.$name];q(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);q(this.$error,function(b,d){this.$setValidity(d,null,a)},this);q(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);
a.$$parentForm=Qb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Ya);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,Ya,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;q(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){q(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){this.$$animate.addClass(this.$$element,
"ng-submitted");this.$submitted=!0;this.$$parentForm.$setSubmitted()}};ce({clazz:Pb,set:function(a,b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||D}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Ya).addClass(nb);var g=f.name?"name":
a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var q=g?c(p.$name):D;g&&(q(a,p),e.$observe(g,function(b){p.$name!==b&&(q(a,void 0),p.$$parentForm.$$renameControl(p,b),q=c(p.$name),q(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);
q(a,void 0);P(p,Qb)})}}}}}]},Ke=ke(),We=ke(!0),Vg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,gh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,hh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Wg=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,
me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Nc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ee=R();q(["date","datetime-local","month","time","week"],function(a){ee[a]=!0});var pe={text:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Ic(c)},date:ob("date",le,Rb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",me,Rb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",oe,Rb(oe,["HH","mm",
"ss","sss"]),"HH:mm:ss.sss"),week:ob("week",Nc,function(a,b){if(da(a))return a;if(F(a)){Nc.lastIndex=0;var d=Nc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Zd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:ob("month",ne,Rb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Jc(a,b,d,c);fe(c);Va(a,b,d,c,e,f);var g,k;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||
x(g)||a>=g},d.$observe("min",function(a){g=Wa(a);c.$validate()});if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||x(k)||a<=k},d.$observe("max",function(a){k=Wa(a);c.$validate()});if(u(d.step)||d.ngStep){var h;c.$validators.step=function(a,b){return c.$isEmpty(b)||x(h)||ge(b,g||0,h)};d.$observe("step",function(a){h=Wa(a);c.$validate()})}},url:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Ic(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||gh.test(d)}},
email:function(a,b,d,c,e,f){Va(a,b,d,c,e,f);Ic(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||hh.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==Q(d.ngTrim);x(d.name)&&b.attr("name",++qb);b.on("click",function(a){var g;b[0].checked&&(g=d.value,e&&(g=Q(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=Q(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,
d[a]);d.$observe(a,c)}function k(a){p=Wa(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=Wa(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){q=Wa(a);X(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}Jc(a,b,d,c);fe(c);Va(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?0:void 0,n=m?100:void 0,q=m?1:void 0,r=b[0].validity;a=u(d.min);
e=u(d.max);f=u(d.step);var E=c.$render;c.$render=m&&u(r.rangeUnderflow)&&u(r.rangeOverflow)?function(){E();c.$setViewValue(b.val())}:E;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(p)||b>=p},g("min",k));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||x(n)||b<=n},g("max",h));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){return c.$isEmpty(b)||x(q)||ge(b,p||0,q)},g("step",l))},checkbox:function(a,b,d,c,e,
f,g,k){var h=he(k,a,"ngTrueValue",d.ngTrueValue,!0),l=he(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return sa(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:D,button:D,submit:D,reset:D,file:D},ad=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,
f,g,k){k[0]&&(pe[N(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],ih=/^(true|false|\d+)$/,of=function(){function a(a,d,c){var e=u(c)?c:9===Ba?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return ih.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Oe=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,
e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=hc(a)})}}}}],Qe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=x(a)?"":a})}}}}],Pe=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});
d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],nf=ka({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Re=Lc("",!0),Te=Lc("Odd",0),Se=Lc("Even",1),Ue=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ve=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],fd={},jh={blur:!0,focus:!0};
q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=Da("ng-"+a);fd[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b]);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};jh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ye=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,
terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],Ze=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ea.noop,compile:function(c,
e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var q=0,r,E,A,s=function(){E&&(E.remove(),E=null);r&&(r.$destroy(),r=null);A&&(d.leave(A).done(function(a){!1!==a&&(E=null)}),E=A,A=null)};c.$watch(f,function(f){var m=function(a){!1===a||!u(k)||k&&!c.$eval(k)||b()},w=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();p.template=a;a=n(b,function(a){s();d.enter(a,null,e).done(m)});r=b;A=a;r.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||
w!==q||(s(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(s(),p.template=null)})}}}}],qf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ha.call(d[0]).match(/SVG/)?(d.empty(),a(hd(e.template,y.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],$e=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),mf=function(){return{restrict:"A",
priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?Q(e):e;c.$parsers.push(function(a){if(!x(a)){var b=[];a&&q(a.split(g),function(a){a&&b.push(f?Q(a):a)});return b}});c.$formatters.push(function(a){if(I(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},nb="ng-valid",be="ng-invalid",Ya="ng-pristine",Vb="ng-dirty",pb=M("ngModel");Sb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
Sb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);C(c)&&(c=a(b));return c};this.$$ngModelSet=function(a,c){C(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw pb("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:D,$isEmpty:function(a){return x(a)||
""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Ya)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,
Ya);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=
this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;q(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(q(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(h.$asyncValidators,function(e,
g){var h=e(a,b);if(!h||!C(h.then))throw pb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},D):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName||"parse";if(x(h.$$parserValid))f(a,null);else return h.$$parserValid||(q(h.$validators,function(a,
b){f(b,null)}),q(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;if(this.$$parserValid=
x(a)?void 0:!0)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),x(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,
this.$modelValue);q(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");Y(b[a])?b=b[a]:Y(b["default"])&&(b=b["default"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$scope.$root.$$phase?
this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,D))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);
return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ce({clazz:Sb,set:function(a,b){a[b]=!0},unset:function(a,
b){delete a[b]}});var lf=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Sb,priority:1,compile:function(b){b.addClass(Ya).addClass("ng-untouched").addClass(nb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Tb,kh=/(\s+|^)default(\s+|$)/;Mc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=P({},a);q(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=Q(d.replace(kh,function(){a.updateOnDefault=
!0;return" "})))},this);b&&(delete a["*"],ie(a,this.$$options));ie(a,Tb.$$options);return new Mc(a)}};Tb=new Mc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var pf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Tb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},
bindToController:!0,controller:a}},af=Ra({terminal:!0,priority:1E3}),lh=M("ngOptions"),mh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,jf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;
if(!q&&ja(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(mh);if(!p)throw lh("iexp",a,za(b));var n=p[5]||p[7],q=p[6];a=/ as /.test(p[0])&&p[1];var r=p[9];b=d(p[2]?p[1]:n);var E=a&&d(a)||b,A=r&&d(r),s=r?function(a,b){return A(c,b)}:function(a){return Na(a)},u=function(a,b){return s(a,t(a,b))},z=d(p[2]||p[1]),w=d(p[3]||""),H=d(p[4]||""),y=d(p[8]),x={},t=q?function(a,b){x[q]=b;x[n]=a;return x}:function(a){x[n]=a;return x};return{trackBy:r,getTrackByValue:u,
getWatchables:d(y,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=t(l,k),l=s(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=H(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=y(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],q=t(d[p],p),B=E(c,q),p=s(B,q),A=z(c,q),x=w(c,q),q=H(c,q),B=new e(p,B,A,x,q);a.push(B);b[p]=B}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[u(a)]},getViewValueFromOption:function(a){return r?
na(a.viewValue):a.viewValue}}}}}var e=y.document.createElement("option"),f=y.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=D},post:function(d,k,h,l){function m(a){var b=(a=s.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],r=l[1],v=
h.multiple;l=0;for(var E=k.children(),A=E.length;l<A;l++)if(""===E[l].value){n.hasEmptyOption=!0;n.emptyOption=E.eq(l);break}k.empty();l=!!n.emptyOption;z(e.cloneNode(!1)).val("?");var s,x=c(h.ngOptions,k,d),y=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};v?(n.writeValue=function(a){if(s){var b=a&&a.map(m)||[];s.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||
[],b=[];q(a,function(a){(a=s.selectValueMap[a])&&!a.disabled&&b.push(s.getViewValueFromOption(a))});return b},x.trackBy&&d.$watchCollection(function(){if(I(r.$viewValue))return r.$viewValue.map(function(a){return x.getTrackByValue(a)})},function(){r.$render()})):(n.writeValue=function(a){if(s){var b=k[0].options[k[0].selectedIndex],c=s.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),
c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},n.readValue=function(){var a=s.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),s.getViewValueFromOption(a)):null},x.trackBy&&d.$watch(function(){return x.getTrackByValue(r.$viewValue)},function(){r.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=
!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),r.$render(),b.on("$destroy",function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&r.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(x.getWatchables,function(){var a=s&&n.readValue();if(s)for(var b=s.items.length-1;0<=b;b--){var c=s.items[b];u(c.group)?Fb(c.element.parentNode):Fb(c.element)}s=x.getOptions();var d={};s.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=
f.cloneNode(!1),y.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),y.appendChild(b),p(a,b)});k[0].appendChild(y);r.$render();r.$isEmpty(a)||(b=n.readValue(),(x.trackBy||v?sa(a,b):a===b)||(r.$setViewValue(b),r.$render()))})}}}}],bf=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),
p=k.offset||0,n=f.$eval(m)||{},r={},v=b.startSymbol(),E=b.endSymbol(),A=v+l+"-"+p+E,s=ea.noop,u;q(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+N(c[2]),n[c]=g.attr(k.$attr[b]))});q(n,function(a,d){r[d]=b(a.replace(c,A))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===u||e&&X(u)||(s(),e=r[c],x(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),s=D,h()):s=f.$watch(e,h),u=c)})}}}],cf=["$parse","$animate","$compile",function(a,b,d){var c=
M("ngRepeat"),e=function(a,b,c,d,e,m,p){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var k=g.ngRepeat,h=d.$$createComment("end ngRepeat",k),l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",k);var m=l[1],p=l[2],n=l[3],r=l[4],l=m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
if(!l)throw c("iidexp",m);var v=l[3]||l[1],u=l[2];if(n&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(n)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(n)))throw c("badident",n);var A,s,x,z,w={$id:Na};r?A=a(r):(x=function(a,b){return Na(b)},z=function(a){return a});return function(a,d,f,g,l){A&&(s=function(b,c,d){u&&(w[u]=b);w[v]=c;w.$index=d;return A(a,w)});var m=R();a.$watchCollection(p,function(f){var g,p,r=d[0],t,A=R(),w,B,y,C,F,D,G;n&&(a[n]=f);if(ja(f))F=
f,p=s||x;else for(G in p=s||z,F=[],f)ra.call(f,G)&&"$"!==G.charAt(0)&&F.push(G);w=F.length;G=Array(w);for(g=0;g<w;g++)if(B=f===F?g:F[g],y=f[B],C=p(B,y,g),m[C])D=m[C],delete m[C],A[C]=D,G[g]=D;else{if(A[C])throw q(G,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",k,C,y);G[g]={id:C,scope:void 0,clone:void 0};A[C]=!0}for(t in m){D=m[t];C=tb(D.clone);b.leave(C);if(C[0].parentNode)for(g=0,p=C.length;g<p;g++)C[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<w;g++)if(B=f===F?g:F[g],y=f[B],D=G[g],D.scope){t=
r;do t=t.nextSibling;while(t&&t.$$NG_REMOVED);D.clone[0]!==t&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,v,y,u,B,w)}else l(function(a,c){D.scope=c;var d=h.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;A[D.id]=D;e(D.scope,g,v,y,u,B,w)});m=A})}}}}],df=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Xe=["$animate",function(a){return{restrict:"A",
multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ef=Ra(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),ff=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var r=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(r)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],gf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});q(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),hf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),nh=M("ngTransclude"),kf=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw nh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Ma||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Le=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],oh={$setViewValue:D,$render:D},ph=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=oh;e.multiple=!1;e.unknownOption=z(y.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Fa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Fa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+Na(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Fa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Fa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=D});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Fa(z(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=Na(b),a.val(c in e.selectValueMap?c:b),Fa(z(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ha(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r=NaN;f.$observe("value",function(a){var d,f=b.prop("selected");u(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=Na(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
u(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Me=function(){return{restrict:"E",
require:["select","?ngModel"],controller:ph,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){q(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Fa(z(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||sa(g,f.$viewValue)||(g=pa(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=D},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Ne=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;u(d.ngValue)||
(u(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],cd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},bd=function(){return{restrict:"A",require:"?ngModel",link:function(a,
b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw M("ngPattern")("noregexp",f,a,za(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||x(e)||e.test(b)}}}}},ed=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=X(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||
b.length<=e}}}}},dd=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};y.angular.bootstrap?y.console&&console.log("WARNING: Tried to load AngularJS more than once."):(De(),Ge(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM",
"PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,
6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),z(function(){ye(y.document,Wc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.6.1
 * (c) 2010-2016 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular) {'use strict';

/**
 * @ngdoc module
 * @name ngCookies
 * @description
 *
 * # ngCookies
 *
 * The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.
 *
 *
 * <div doc-module-components="ngCookies"></div>
 *
 * See {@link ngCookies.$cookies `$cookies`} for usage.
 */


angular.module('ngCookies', ['ng']).
  /**
   * @ngdoc provider
   * @name $cookiesProvider
   * @description
   * Use `$cookiesProvider` to change the default behavior of the {@link ngCookies.$cookies $cookies} service.
   * */
   provider('$cookies', [/** @this */function $CookiesProvider() {
    /**
     * @ngdoc property
     * @name $cookiesProvider#defaults
     * @description
     *
     * Object containing default options to pass when setting cookies.
     *
     * The object may have following properties:
     *
     * - **path** - `{string}` - The cookie will be available only for this path and its
     *   sub-paths. By default, this is the URL that appears in your `<base>` tag.
     * - **domain** - `{string}` - The cookie will be available only for this domain and
     *   its sub-domains. For security reasons the user agent will not accept the cookie
     *   if the current domain is not a sub-domain of this domain or equal to it.
     * - **expires** - `{string|Date}` - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT"
     *   or a Date object indicating the exact date/time this cookie will expire.
     * - **secure** - `{boolean}` - If `true`, then the cookie will only be available through a
     *   secured connection.
     *
     * Note: By default, the address that appears in your `<base>` tag will be used as the path.
     * This is important so that cookies will be visible for all routes when html5mode is enabled.
     *
     * @example
     *
     * ```js
     * angular.module('cookiesProviderExample', ['ngCookies'])
     *   .config(['$cookiesProvider', function($cookiesProvider) {
     *     // Setting default options
     *     $cookiesProvider.defaults.domain = 'foo.com';
     *     $cookiesProvider.defaults.secure = true;
     *   }]);
     * ```
     **/
    var defaults = this.defaults = {};

    function calcOptions(options) {
      return options ? angular.extend({}, defaults, options) : defaults;
    }

    /**
     * @ngdoc service
     * @name $cookies
     *
     * @description
     * Provides read/write access to browser's cookies.
     *
     * <div class="alert alert-info">
     * Up until Angular 1.3, `$cookies` exposed properties that represented the
     * current browser cookie values. In version 1.4, this behavior has changed, and
     * `$cookies` now provides a standard api of getters, setters etc.
     * </div>
     *
     * Requires the {@link ngCookies `ngCookies`} module to be installed.
     *
     * @example
     *
     * ```js
     * angular.module('cookiesExample', ['ngCookies'])
     *   .controller('ExampleController', ['$cookies', function($cookies) {
     *     // Retrieving a cookie
     *     var favoriteCookie = $cookies.get('myFavorite');
     *     // Setting a cookie
     *     $cookies.put('myFavorite', 'oatmeal');
     *   }]);
     * ```
     */
    this.$get = ['$$cookieReader', '$$cookieWriter', function($$cookieReader, $$cookieWriter) {
      return {
        /**
         * @ngdoc method
         * @name $cookies#get
         *
         * @description
         * Returns the value of given cookie key
         *
         * @param {string} key Id to use for lookup.
         * @returns {string} Raw cookie value.
         */
        get: function(key) {
          return $$cookieReader()[key];
        },

        /**
         * @ngdoc method
         * @name $cookies#getObject
         *
         * @description
         * Returns the deserialized value of given cookie key
         *
         * @param {string} key Id to use for lookup.
         * @returns {Object} Deserialized cookie value.
         */
        getObject: function(key) {
          var value = this.get(key);
          return value ? angular.fromJson(value) : value;
        },

        /**
         * @ngdoc method
         * @name $cookies#getAll
         *
         * @description
         * Returns a key value object with all the cookies
         *
         * @returns {Object} All cookies
         */
        getAll: function() {
          return $$cookieReader();
        },

        /**
         * @ngdoc method
         * @name $cookies#put
         *
         * @description
         * Sets a value for given cookie key
         *
         * @param {string} key Id for the `value`.
         * @param {string} value Raw value to be stored.
         * @param {Object=} options Options object.
         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
         */
        put: function(key, value, options) {
          $$cookieWriter(key, value, calcOptions(options));
        },

        /**
         * @ngdoc method
         * @name $cookies#putObject
         *
         * @description
         * Serializes and sets a value for given cookie key
         *
         * @param {string} key Id for the `value`.
         * @param {Object} value Value to be stored.
         * @param {Object=} options Options object.
         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
         */
        putObject: function(key, value, options) {
          this.put(key, angular.toJson(value), options);
        },

        /**
         * @ngdoc method
         * @name $cookies#remove
         *
         * @description
         * Remove given cookie
         *
         * @param {string} key Id of the key-value pair to delete.
         * @param {Object=} options Options object.
         *    See {@link ngCookies.$cookiesProvider#defaults $cookiesProvider.defaults}
         */
        remove: function(key, options) {
          $$cookieWriter(key, undefined, calcOptions(options));
        }
      };
    }];
  }]);

angular.module('ngCookies').
/**
 * @ngdoc service
 * @name $cookieStore
 * @deprecated
 * sinceVersion="v1.4.0"
 * Please use the {@link ngCookies.$cookies `$cookies`} service instead.
 *
 * @requires $cookies
 *
 * @description
 * Provides a key-value (string-object) storage, that is backed by session cookies.
 * Objects put or retrieved from this storage are automatically serialized or
 * deserialized by angular's toJson/fromJson.
 *
 * Requires the {@link ngCookies `ngCookies`} module to be installed.
 *
 * @example
 *
 * ```js
 * angular.module('cookieStoreExample', ['ngCookies'])
 *   .controller('ExampleController', ['$cookieStore', function($cookieStore) {
 *     // Put cookie
 *     $cookieStore.put('myFavorite','oatmeal');
 *     // Get cookie
 *     var favoriteCookie = $cookieStore.get('myFavorite');
 *     // Removing a cookie
 *     $cookieStore.remove('myFavorite');
 *   }]);
 * ```
 */
 factory('$cookieStore', ['$cookies', function($cookies) {

    return {
      /**
       * @ngdoc method
       * @name $cookieStore#get
       *
       * @description
       * Returns the value of given cookie key
       *
       * @param {string} key Id to use for lookup.
       * @returns {Object} Deserialized cookie value, undefined if the cookie does not exist.
       */
      get: function(key) {
        return $cookies.getObject(key);
      },

      /**
       * @ngdoc method
       * @name $cookieStore#put
       *
       * @description
       * Sets a value for given cookie key
       *
       * @param {string} key Id for the `value`.
       * @param {Object} value Value to be stored.
       */
      put: function(key, value) {
        $cookies.putObject(key, value);
      },

      /**
       * @ngdoc method
       * @name $cookieStore#remove
       *
       * @description
       * Remove given cookie
       *
       * @param {string} key Id of the key-value pair to delete.
       */
      remove: function(key) {
        $cookies.remove(key);
      }
    };

  }]);

/**
 * @name $$cookieWriter
 * @requires $document
 *
 * @description
 * This is a private service for writing cookies
 *
 * @param {string} name Cookie name
 * @param {string=} value Cookie value (if undefined, cookie will be deleted)
 * @param {Object=} options Object with options that need to be stored for the cookie.
 */
function $$CookieWriter($document, $log, $browser) {
  var cookiePath = $browser.baseHref();
  var rawDocument = $document[0];

  function buildCookieString(name, value, options) {
    var path, expires;
    options = options || {};
    expires = options.expires;
    path = angular.isDefined(options.path) ? options.path : cookiePath;
    if (angular.isUndefined(value)) {
      expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
      value = '';
    }
    if (angular.isString(expires)) {
      expires = new Date(expires);
    }

    var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    str += path ? ';path=' + path : '';
    str += options.domain ? ';domain=' + options.domain : '';
    str += expires ? ';expires=' + expires.toUTCString() : '';
    str += options.secure ? ';secure' : '';

    // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
    // - 300 cookies
    // - 20 cookies per unique domain
    // - 4096 bytes per cookie
    var cookieLength = str.length + 1;
    if (cookieLength > 4096) {
      $log.warn('Cookie \'' + name +
        '\' possibly not set or overflowed because it was too large (' +
        cookieLength + ' > 4096 bytes)!');
    }

    return str;
  }

  return function(name, value, options) {
    rawDocument.cookie = buildCookieString(name, value, options);
  };
}

$$CookieWriter.$inject = ['$document', '$log', '$browser'];

angular.module('ngCookies').provider('$$cookieWriter', /** @this */ function $$CookieWriterProvider() {
  this.$get = $$CookieWriter;
});


})(window, window.angular);

/*! ngstorage 0.3.6 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function(a,b){"use strict";return"function"==typeof define&&define.amd?void define("ngStorage",["angular"],function(a){return b(a)}):b(a)}("undefined"==typeof angular?null:angular,function(a){"use strict";function b(b){return["$rootScope","$window","$log","$timeout",function(c,d,e,f){function g(a){var b;try{b=d[a]}catch(c){b=!1}if(b&&"localStorage"===a){var e="__"+Math.round(1e7*Math.random());try{localStorage.setItem(e,e),localStorage.removeItem(e)}catch(c){b=!1}}return b}var h,i,j=g(b)||(e.warn("This browser does not support Web Storage!"),{setItem:function(){},getItem:function(){}}),k={$default:function(b){for(var c in b)a.isDefined(k[c])||(k[c]=b[c]);return k},$reset:function(a){for(var b in k)"$"===b[0]||delete k[b]&&j.removeItem("ngStorage-"+b);return k.$default(a)}};try{j=d[b],j.length}catch(l){e.warn("This browser does not support Web Storage!"),j={}}for(var m,n=0,o=j.length;o>n;n++)(m=j.key(n))&&"ngStorage-"===m.slice(0,10)&&(k[m.slice(10)]=a.fromJson(j.getItem(m)));return h=a.copy(k),c.$watch(function(){var b;i||(i=f(function(){if(i=null,!a.equals(k,h)){b=a.copy(h),a.forEach(k,function(c,d){a.isDefined(c)&&"$"!==d[0]&&j.setItem("ngStorage-"+d,a.toJson(c)),delete b[d]});for(var c in b)j.removeItem("ngStorage-"+c);h=a.copy(k)}},100,!1))}),"localStorage"===b&&d.addEventListener&&d.addEventListener("storage",function(b){"ngStorage-"===b.key.slice(0,10)&&(b.newValue?k[b.key.slice(10)]=a.fromJson(b.newValue):delete k[b.key.slice(10)],h=a.copy(k),c.$apply())}),k}]}a.module("ngStorage",[]).factory("$localStorage",b("localStorage")).factory("$sessionStorage",b("sessionStorage"))});
/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.18
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e(t["@uirouter/angularjs"]={},t.angular)}(this,function(t,e){"use strict";var r=angular,n=e&&e.module?e:r;function i(t){var e=[].slice.apply(arguments,[1]),r=t.length;return function e(n){return n.length>=r?t.apply(null,n):function(){return e(n.concat([].slice.apply(arguments)))}}(e)}function o(){var t=arguments,e=t.length-1;return function(){for(var r=e,n=t[e].apply(this,arguments);r--;)n=t[r].call(this,n);return n}}function a(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.apply(null,[].slice.call(arguments).reverse())}var u=function(t){return function(e){return e&&e[t]}},s=i(function(t,e,r){return r&&r[t]===e}),c=function(t){return a.apply(null,t.split(".").map(u))},f=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return!t.apply(null,e)}};function l(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)&&e.apply(null,r)}}function h(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)||e.apply(null,r)}}var p=function(t){return function(e){return e.reduce(function(e,r){return e&&!!t(r)},!0)}},v=function(t){return function(e){return e.reduce(function(e,r){return e||!!t(r)},!1)}},d=function(t){return function(e){return null!=e&&e.constructor===t||e instanceof t}},m=function(t){return function(e){return t===e}},y=function(t){return function(){return t}};function g(t,e){return function(r){return r[t].apply(r,e)}}function _(t){return function(e){for(var r=0;r<t.length;r++)if(t[r][0](e))return t[r][1](e)}}var w=function(){function t(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return t.is=function(t){return!!/[!,*]+/.exec(t)},t.fromString=function(e){return t.is(e)?new t(e):null},t.prototype.matches=function(t){return this.regexp.test("."+t)},t}(),$=function(){function t(e){return t.create(e||{})}return t.create=function(e){e=t.isStateClass(e)?new e:e;var r=K(K(e,t.prototype));return e.$$state=function(){return r},r.self=e,r.__stateObjectCache={nameGlob:w.fromString(r.name)},r},t.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},t.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},t.prototype.root=function(){return this.parent&&this.parent.root()||this},t.prototype.parameters=function(t){return((t=it(t,{inherit:!0,matchingKeys:null})).inherit&&this.parent&&this.parent.parameters()||[]).concat(vt(this.params)).filter(function(e){return!t.matchingKeys||t.matchingKeys.hasOwnProperty(e.id)})},t.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||lt(vt(this.params),s("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},t.prototype.toString=function(){return this.fqn()},t.isStateClass=function(t){return P(t)&&!0===t.__uiRouterState},t.isState=function(t){return x(t.__stateObjectCache)},t}(),S=Object.prototype.toString,b=function(t){return function(e){return typeof e===t}},R=b("undefined"),E=f(R),C=function(t){return null===t},T=h(C,R),P=b("function"),k=b("number"),O=b("string"),x=function(t){return null!==t&&"object"==typeof t},V=Array.isArray,I=function(t){return"[object Date]"===S.call(t)},j=function(t){return"[object RegExp]"===S.call(t)},A=$.isState;function H(t){if(V(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(f(O)).length||r.filter(f(P)).length)}return P(t)}var D=l(x,a(u("then"),P)),q=function(t){return function(){throw new Error(t+"(): No coreservices implementation for UI-Router is loaded.")}},N={$q:void 0,$injector:void 0},F="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||void 0,U=F.angular||{},L=U.fromJson||JSON.parse.bind(JSON),M=U.toJson||JSON.stringify.bind(JSON),B=U.forEach||function(t,e,r){if(V(t))return t.forEach(e,r);Object.keys(t).forEach(function(r){return e(t[r],r)})},G=Object.assign||xt,W=U.equals||Vt;function z(t){return t}function J(){}function Q(t,e,r,n,i){void 0===i&&(i=!1);var o=function(e){return t()[e].bind(r())};return(n=n||Object.keys(t())).reduce(function(t,r){var n;return t[r]=i?(n=r,function(){return e[n]=o(n),e[n].apply(null,arguments)}):o(r),t},e)}var K=function(t,e){return G(Object.create(t),e)},Y=i(Z);function Z(t,e){return-1!==t.indexOf(e)}var X=i(tt);function tt(t,e){var r=t.indexOf(e);return r>=0&&t.splice(r,1),t}var et=i(rt);function rt(t,e){return t.push(e),e}var nt=function(t){return t.slice().forEach(function(e){"function"==typeof e&&e(),X(t,e)})};function it(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=e.concat({}).reverse(),i=G.apply(null,n);return G({},i,ut(t||{},Object.keys(i)))}var ot=function(t,e){return G(t,e)};function at(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function ut(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function st(t,e){return Object.keys(t).filter(f(Y(e))).reduce(function(e,r){return e[r]=t[r],e},{})}function ct(t,e){return pt(t,u(e))}function ft(t,e){var r=V(t),n=r?[]:{},i=r?function(t){return n.push(t)}:function(t,e){return n[e]=t};return B(t,function(t,r){e(t,r)&&i(t,r)}),n}function lt(t,e){var r;return B(t,function(t,n){r||e(t,n)&&(r=t)}),r}var ht=pt;function pt(t,e,r){return r=r||(V(t)?[]:{}),B(t,function(t,n){return r[n]=e(t,n)}),r}var vt=function(t){return Object.keys(t).map(function(e){return t[e]})},dt=function(t,e){return t&&e},mt=function(t,e){return t||e},yt=function(t,e){return t.concat(e)},gt=function(t,e){return V(e)?t.concat(e.reduce(gt,[])):_t(t,e)};function _t(t,e){return t.push(e),t}var wt=function(t,e){return Y(t,e)?t:_t(t,e)},$t=function(t){return t.reduce(yt,[])},St=function(t){return t.reduce(gt,[])},bt=Et,Rt=Et;function Et(t,e){return void 0===e&&(e="assert failure"),function(r){var n=t(r);if(!n)throw new Error(P(e)?e(r):e);return n}}var Ct=function(t){return Object.keys(t).map(function(e){return[e,t[e]]})};function Tt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];for(var r=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),n=[],i=function(e){switch(t.length){case 1:n.push([t[0][e]]);break;case 2:n.push([t[0][e],t[1][e]]);break;case 3:n.push([t[0][e],t[1][e],t[2][e]]);break;case 4:n.push([t[0][e],t[1][e],t[2][e],t[3][e]]);break;default:n.push(t.map(function(t){return t[e]}))}},o=0;o<r;o++)i(o);return n}function Pt(t,e){var r,n;if(V(e)&&(r=e[0],n=e[1]),!O(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function kt(t){return t.length&&t[t.length-1]||void 0}function Ot(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),e||(e={}),G(e,t)}function xt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function Vt(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!=t&&e!=e)return!0;var r=typeof t;if(r!==typeof e||"object"!==r)return!1;var n,i,o=[t,e];if(p(V)(o))return i=e,(n=t).length===i.length&&Tt(n,i).reduce(function(t,e){return t&&Vt(e[0],e[1])},!0);if(p(I)(o))return t.getTime()===e.getTime();if(p(j)(o))return t.toString()===e.toString();if(p(P)(o))return!0;if([P,V,I,j].map(v).reduce(function(t,e){return t||!!e(o)},!1))return!1;var a={};for(var u in t){if(!Vt(t[u],e[u]))return!1;a[u]=!0}for(var u in e)if(!a[u])return!1;return!0}var It,jt=function(t){return t.catch(function(t){return 0})&&t},At=function(t){return jt(N.$q.reject(t))},Ht=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e,this._evictListeners=[],this.onEvict=et(this._evictListeners)}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&this.evict(),t},t.prototype.evict=function(){var t=this._items.shift();return this._evictListeners.forEach(function(e){return e(t)}),t},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return e>-1&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();(It=t.RejectType||(t.RejectType={}))[It.SUPERSEDED=2]="SUPERSEDED",It[It.ABORTED=3]="ABORTED",It[It.INVALID=4]="INVALID",It[It.IGNORED=5]="IGNORED",It[It.ERROR=6]="ERROR";var Dt=0,qt=function(){function e(t,e,r){this.$id=Dt++,this.type=t,this.message=e,this.detail=r}return e.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&d(e)(t._transitionRejection)},e.superseded=function(r,n){var i=new e(t.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",r);return n&&n.redirected&&(i.redirected=!0),i},e.redirected=function(t){return e.superseded(t,{redirected:!0})},e.invalid=function(r){return new e(t.RejectType.INVALID,"This transition is invalid",r)},e.ignored=function(r){return new e(t.RejectType.IGNORED,"The transition was ignored",r)},e.aborted=function(r){return new e(t.RejectType.ABORTED,"The transition has been aborted",r)},e.errored=function(r){return new e(t.RejectType.ERROR,"The transition errored",r)},e.normalize=function(t){return d(e)(t)?t:e.errored(t)},e.prototype.toString=function(){var t,e=(t=this.detail)&&t.toString!==Object.prototype.toString?t.toString():ke(t);return"Transition Rejection($id: "+this.$id+" type: "+this.type+", message: "+this.message+", detail: "+e+")"},e.prototype.toPromise=function(){return G(At(this),{_transitionRejection:this})},e}();function Nt(t){if(!t)return"ui-view (defunct)";var e=t.creationContext?t.creationContext.name||"(root)":"(none)";return"[ui-view#"+t.id+" "+t.$type+":"+t.fqn+" ("+t.name+"@"+e+")]"}function Ft(e){return k(e)?t.Category[e]:t.Category[t.Category[e]]}var Ut,Lt=Function.prototype.bind.call(console.log,console),Mt=P(console.table)?console.table.bind(console):Lt.bind(console);(Ut=t.Category||(t.Category={}))[Ut.RESOLVE=0]="RESOLVE",Ut[Ut.TRANSITION=1]="TRANSITION",Ut[Ut.HOOK=2]="HOOK",Ut[Ut.UIVIEW=3]="UIVIEW",Ut[Ut.VIEWCONFIG=4]="VIEWCONFIG";var Bt,Gt,Wt=c("$id"),zt=c("router.$id"),Jt=function(t){return"Transition #"+Wt(t)+"-"+zt(t)},Qt=function(){function e(){this._enabled={},this.approximateDigests=0}return e.prototype._set=function(e,r){var n=this;r.length||(r=Object.keys(t.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(e){return t.Category[e]})),r.map(Ft).forEach(function(t){return n._enabled[t]=e})},e.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},e.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},e.prototype.enabled=function(t){return!!this._enabled[Ft(t)]},e.prototype.traceTransitionStart=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Jt(e)+": Started  -> "+ke(e))},e.prototype.traceTransitionIgnored=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Jt(e)+": Ignored  <> "+ke(e))},e.prototype.traceHookInvocation=function(e,r,n){if(this.enabled(t.Category.HOOK)){var i=c("traceData.hookType")(n)||"internal",o=c("traceData.context.state.name")(n)||c("traceData.context")(n)||"unknown",a=Ee(e.registeredHook.callback);console.log(Jt(r)+":   Hook -> "+i+" context: "+o+", "+Se(200,a))}},e.prototype.traceHookResult=function(e,r,n){this.enabled(t.Category.HOOK)&&console.log(Jt(r)+":   <- Hook returned: "+Se(200,ke(e)))},e.prototype.traceResolvePath=function(e,r,n){this.enabled(t.Category.RESOLVE)&&console.log(Jt(n)+":         Resolving "+e+" ("+r+")")},e.prototype.traceResolvableResolved=function(e,r){this.enabled(t.Category.RESOLVE)&&console.log(Jt(r)+":               <- Resolved  "+e+" to: "+Se(200,ke(e.data)))},e.prototype.traceError=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Jt(r)+": <- Rejected "+ke(r)+", reason: "+e)},e.prototype.traceSuccess=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Jt(r)+": <- Success  "+ke(r)+", final state: "+e.name)},e.prototype.traceUIViewEvent=function(e,r,n){void 0===n&&(n=""),this.enabled(t.Category.UIVIEW)&&console.log("ui-view: "+be(30,e)+" "+Nt(r)+n)},e.prototype.traceUIViewConfigUpdated=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Updating",e," with ViewConfig from context='"+r+"'")},e.prototype.traceUIViewFill=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Fill",e," with: "+Se(200,r))},e.prototype.traceViewSync=function(e){if(this.enabled(t.Category.VIEWCONFIG)){var r="uiview component fqn",n=e.map(function(t){var e,n=t.uiView,i=t.viewConfig,o=n&&n.fqn,a=i&&i.viewDecl.$context.name+": ("+i.viewDecl.$name+")";return(e={})[r]=o,e["view config state (view name)"]=a,e}).sort(function(t,e){return(t[r]||"").localeCompare(e[r]||"")});Mt(n)}},e.prototype.traceViewServiceEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+function(t){var e=t.viewDecl,r=e.$context.name||"(root)";return"[View#"+t.$id+" from '"+r+"' state]: target ui-view: '"+e.$uiViewName+"@"+e.$uiViewContextAnchor+"'"}(r))},e.prototype.traceViewServiceUIViewEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+Nt(r))},e}(),Kt=new Qt;(Bt=t.TransitionHookPhase||(t.TransitionHookPhase={}))[Bt.CREATE=0]="CREATE",Bt[Bt.BEFORE=1]="BEFORE",Bt[Bt.RUN=2]="RUN",Bt[Bt.SUCCESS=3]="SUCCESS",Bt[Bt.ERROR=4]="ERROR",(Gt=t.TransitionHookScope||(t.TransitionHookScope={}))[Gt.TRANSITION=0]="TRANSITION",Gt[Gt.STATE=1]="STATE";var Yt=function(){function t(t,e,r,n){this._stateRegistry=t,this._identifier=e,this._identifier=e,this._params=G({},r||{}),this._options=G({},n||{}),this._definition=t.matcher.find(e,this._options.relative)}return t.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},t.prototype.identifier=function(){return this._identifier},t.prototype.params=function(){return this._params},t.prototype.$state=function(){return this._definition},t.prototype.state=function(){return this._definition&&this._definition.self},t.prototype.options=function(){return this._options},t.prototype.exists=function(){return!(!this._definition||!this._definition.self)},t.prototype.valid=function(){return!this.error()},t.prototype.error=function(){var t=this.options().relative;if(!this._definition&&t){var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"}return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'"},t.prototype.toString=function(){return"'"+this.name()+"'"+ke(this.params())},t.prototype.withState=function(e){return new t(this._stateRegistry,e,this._params,this._options)},t.prototype.withParams=function(e,r){void 0===r&&(r=!1);var n=r?e:G({},this._params,e);return new t(this._stateRegistry,this._identifier,n,this._options)},t.prototype.withOptions=function(e,r){void 0===r&&(r=!1);var n=r?e:G({},this._options,e);return new t(this._stateRegistry,this._identifier,this._params,n)},t.isDef=function(t){return t&&t.state&&(O(t.state)||O(t.state.name))},t}(),Zt={current:J,transition:null,traceData:{},bind:null},Xt=function(){function e(e,r,n,i){var o=this;this.transition=e,this.stateContext=r,this.registeredHook=n,this.options=i,this.isSuperseded=function(){return o.type.hookPhase===t.TransitionHookPhase.RUN&&!o.options.transition.isActive()},this.options=it(i,Zt),this.type=n.eventType}return e.chain=function(t,e){return t.reduce(function(t,e){return t.then(function(){return e.invokeHook()})},e||N.$q.when())},e.invokeHooks=function(t,r){for(var n=0;n<t.length;n++){var i=t[n].invokeHook();if(D(i)){var o=t.slice(n+1);return e.chain(o,i).then(r)}}return r()},e.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},e.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},e.prototype.invokeHook=function(){var t=this,e=this.registeredHook;if(!e._deregistered){var r=this.getNotCurrentRejection();if(r)return r;var n=this.options;Kt.traceHookInvocation(this,this.transition,n);var i=function(r){return e.eventType.getErrorHandler(t)(r)},o=function(r){return e.eventType.getResultHandler(t)(r)};try{var a=e.callback.call(n.bind,t.transition,t.stateContext);return!this.type.synchronous&&D(a)?a.catch(function(t){return qt.normalize(t).toPromise()}).then(o,i):o(a)}catch(t){return i(qt.normalize(t))}finally{e.invokeLimit&&++e.invokeCount>=e.invokeLimit&&e.deregister()}}},e.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(D(t)?t.then(function(t){return e.handleHookResult(t)}):(Kt.traceHookResult(t,this.transition,this.options),!1===t?qt.aborted("Hook aborted transition").toPromise():d(Yt)(t)?qt.redirected(t).toPromise():void 0))},e.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?qt.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?qt.aborted().toPromise():this.isSuperseded()?qt.superseded(this.options.current()).toPromise():void 0},e.prototype.toString=function(){var t=this.options,e=this.registeredHook;return(c("traceData.hookType")(t)||"internal")+" context: "+(c("traceData.context.state.name")(t)||c("traceData.context")(t)||"unknown")+", "+Se(200,Ce(e.callback))},e.HANDLE_RESULT=function(t){return function(e){return t.handleHookResult(e)}},e.LOG_REJECTED_RESULT=function(t){return function(e){D(e)&&e.catch(function(e){return t.logError(qt.normalize(e))})}},e.LOG_ERROR=function(t){return function(e){return t.logError(e)}},e.REJECT_ERROR=function(t){return function(t){return At(t)}},e.THROW_ERROR=function(t){return function(t){throw t}},e}();function te(t,e){var r=O(e)?[e]:e;return!!(P(r)?r:function(t){for(var e=r,n=0;n<e.length;n++){var i=new w(e[n]);if(i&&i.matches(t.name)||!i&&e[n]===t.name)return!0}return!1})(t)}var ee=function(){function e(t,e,r,n,i,o){void 0===o&&(o={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.removeHookFromRegistry=i,this.invokeCount=0,this._deregistered=!1,this.priority=o.priority||0,this.bind=o.bind||null,this.invokeLimit=o.invokeLimit}return e.prototype._matchingNodes=function(t,e){if(!0===e)return t;var r=t.filter(function(t){return te(t.state,e)});return r.length?r:null},e.prototype._getDefaultMatchCriteria=function(){return ht(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},e.prototype._getMatchingNodes=function(e){var r=this,n=G(this._getDefaultMatchCriteria(),this.matchCriteria);return vt(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i,o){var a=o.scope===t.TransitionHookScope.STATE,u=e[o.name]||[],s=a?u:[kt(u)];return i[o.name]=r._matchingNodes(s,n[o.name]),i},{})},e.prototype.matches=function(t){var e=this._getMatchingNodes(t);return vt(e).every(z)?e:null},e.prototype.deregister=function(){this.removeHookFromRegistry(this),this._deregistered=!0},e}();function re(t,e,r){var n=(t._registeredHooks=t._registeredHooks||{})[r.name]=[],i=X(n);function o(t,o,a){void 0===a&&(a={});var u=new ee(e,r,o,t,i,a);return n.push(u),u.deregister.bind(u)}return t[r.name]=o,o}var ne=function(){function e(t){this.transition=t}return e.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(yt,[]).filter(z)},e.prototype.buildHooks=function(e){var r=this.transition,n=r.treeChanges(),i=this.getMatchingHooks(e,n);if(!i)return[];var o={transition:r,current:r.options().current};return i.map(function(i){return i.matches(n)[e.criteriaMatchPath.name].map(function(n){var a=G({bind:i.bind,traceData:{hookType:e.name,context:n}},o),u=e.criteriaMatchPath.scope===t.TransitionHookScope.STATE?n.state.self:null,s=new Xt(r,u,i,a);return{hook:i,node:n,transitionHook:s}})}).reduce(yt,[]).sort(function(t){void 0===t&&(t=!1);return function(e,r){var n=t?-1:1,i=(e.node.state.path.length-r.node.state.path.length)*n;return 0!==i?i:r.hook.priority-e.hook.priority}}(e.reverseSort)).map(function(t){return t.transitionHook})},e.prototype.getMatchingHooks=function(e,r){var n=e.hookPhase===t.TransitionHookPhase.CREATE,i=this.transition.router.transitionService;return(n?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(bt(V,"broken event named: "+e.name)).reduce(yt,[]).filter(function(t){return t.matches(r)})},e}();var ie=function(){function t(t){this.pattern=/.*/,this.inherit=!0,G(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new function(t,e){var r=this;function n(t){return V(t)?t:E(t)?[t]:[]}function i(t,r){return function(i){if(V(i)&&0===i.length)return i;var o=n(i),a=pt(o,t);return!0===r?0===ft(a,function(t){return!t}).length:function(t){switch(t.length){case 0:return;case 1:return"auto"===e?t[0]:t;default:return t}}(a)}}function o(t){return function(e,r){var i=n(e),o=n(r);if(i.length!==o.length)return!1;for(var a=0;a<i.length;a++)if(!t(i[a],o[a]))return!1;return!0}}["encode","decode","equals","$normalize"].forEach(function(e){var n=t[e].bind(t),a="equals"===e?o:i;r[e]=a(n)}),G(this,{dynamic:t.dynamic,name:t.name,pattern:t.pattern,inherit:t.inherit,is:i(t.is.bind(t),!0),$arrayMode:e})}(this,t)},t}();var oe,ae=Object.prototype.hasOwnProperty,ue=function(t){return 0===["value","type","squash","array","dynamic"].filter(ae.bind(t||{})).length};(oe=t.DefType||(t.DefType={}))[oe.PATH=0]="PATH",oe[oe.SEARCH=1]="SEARCH",oe[oe.CONFIG=2]="CONFIG";var se=function(){function e(e,r,n,i,o){r=function(e,r,n,i,o){if(e.type&&r&&"string"!==r.name)throw new Error("Param '"+i+"' has two type configurations.");if(e.type&&r&&"string"===r.name&&o.type(e.type))return o.type(e.type);if(r)return r;if(!e.type){var a=n===t.DefType.CONFIG?"any":n===t.DefType.PATH?"path":n===t.DefType.SEARCH?"query":"string";return o.type(a)}return e.type instanceof ie?e.type:o.type(e.type)}(n=function(t){function e(){return t.value}return t=ue(t)&&{value:t}||t,e.__cacheable=!0,G(t,{$$fn:H(t.value)?t.value:e})}(n),r,i,e,o.paramTypes);var a,s,c=(a={array:i===t.DefType.SEARCH&&"auto"},s=e.match(/\[\]$/)?{array:!0}:{},G(a,s,n).array);r=c?r.$asArray(c,i===t.DefType.SEARCH):r;var f=void 0!==n.value||i===t.DefType.SEARCH,l=E(n.dynamic)?!!n.dynamic:!!r.dynamic,h=E(n.raw)?!!n.raw:!!r.raw,p=function(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!E(n)||null==n)return r;if(!0===n||O(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}(n,f,o.defaultSquashPolicy()),v=function(t,e,r,n){var i=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}],o=V(t.replace)?t.replace:[];O(n)&&o.push({from:n,to:void 0});var a=pt(o,u("from"));return ft(i,function(t){return-1===a.indexOf(t.from)}).concat(o)}(n,c,f,p),d=E(n.inherit)?!!n.inherit:!!r.inherit;G(this,{id:e,type:r,location:i,isOptional:f,dynamic:l,raw:h,squash:p,replace:v,inherit:d,array:c,config:n})}return e.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},e.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},e.equals=function(t,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),0===e.changed(t,r,n).length},e.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(dt,!0)},e.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},e.prototype.value=function(t){var e=this;return t=function(t){for(var r=0,n=e.replace;r<n.length;r++){var i=n[r];if(i.from===t)return i.to}return t}(t),R(t)?function(){if(e._defaultValueCache)return e._defaultValueCache.defaultValue;if(!N.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=N.$injector.invoke(e.config.$$fn);if(null!==t&&void 0!==t&&!e.type.is(t))throw new Error("Default value ("+t+") for parameter '"+e.id+"' is not an instance of ParamType ("+e.type.name+")");return e.config.$$fn.__cacheable&&(e._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},e.prototype.isSearch=function(){return this.location===t.DefType.SEARCH},e.prototype.validates=function(t){if((R(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(O(r)&&!this.type.pattern.exec(r))},e.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},e}(),ce=function(){function t(e){if(e instanceof t){var r=e;this.state=r.state,this.paramSchema=r.paramSchema.slice(),this.paramValues=G({},r.paramValues),this.resolvables=r.resolvables.slice(),this.views=r.views&&r.views.slice()}else{var n=e;this.state=n,this.paramSchema=n.parameters({inherit:!1}),this.paramValues={},this.resolvables=n.resolvables.map(function(t){return t.clone()})}}return t.prototype.clone=function(){return new t(this)},t.prototype.applyRawParams=function(t){return this.paramValues=this.paramSchema.reduce(function(e,r){return Pt(e,[(n=r).id,n.value(t[n.id])]);var n},{}),this},t.prototype.parameter=function(t){return lt(this.paramSchema,s("id",t))},t.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},t.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return se.changed(r,this.paramValues,t.paramValues)},t.clone=function(t){return t.clone()},t}(),fe=function(){function t(){}return t.makeTargetState=function(t,e){var r=kt(e).state;return new Yt(t,r,e.map(u("paramValues")).reduce(ot,{}),{})},t.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new ce(t).applyRawParams(e)})},t.buildToPath=function(e,r){var n=t.buildPath(r);return r.options().inherit?t.inheritParams(e,n,Object.keys(r.params())):n},t.applyViewConfigs=function(e,r,n){r.filter(function(t){return Y(n,t.state)}).forEach(function(n){var i=vt(n.state.views||{}),o=t.subPath(r,function(t){return t===n}),a=i.map(function(t){return e.createViewConfig(o,t)});n.views=a.reduce(yt,[])})},t.inheritParams=function(t,e,r){void 0===r&&(r=[]);var n=t.map(function(t){return t.paramSchema}).reduce(yt,[]).filter(function(t){return!t.inherit}).map(u("id"));return e.map(function(e){var i=G({},e&&e.paramValues),o=ut(i,r);i=st(i,r);var a,u,c,f=st((a=t,u=e.state,c=lt(a,s("state",u)),G({},c&&c.paramValues)||{}),n),l=G(i,f,o);return new ce(e.state).applyRawParams(l)})},t.treeChanges=function(e,r,n){for(var i,o,a,u,s,c,f=Math.min(e.length,r.length),l=0;l<f&&e[l].state!==n&&(i=e[l],o=r[l],i.equals(o,t.nonDynamicParams));)l++;u=(a=e).slice(0,l),s=a.slice(l);var h=u.map(function(t,e){var n=t.clone();return n.paramValues=r[e].paramValues,n});return c=r.slice(l),{from:a,to:h.concat(c),retained:u,retainedWithToParams:h,exiting:s,entering:c}},t.matching=function(t,e,r){var n=!1;return Tt(t,e).reduce(function(t,e){var i=e[0],o=e[1];return(n=n||!i.equals(o,r))?t:t.concat(i)},[])},t.equals=function(e,r,n){return e.length===r.length&&t.matching(e,r,n).length===e.length},t.subPath=function(t,e){var r=lt(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},t.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},t.paramValues=function(t){return t.reduce(function(t,e){return G(t,e.paramValues)},{})},t}(),le={when:"LAZY",async:"WAIT"},he=function(){function t(e,r,n,i,o){if(this.resolved=!1,this.promise=void 0,e instanceof t)G(this,e);else if(P(r)){if(T(e))throw new Error("new Resolvable(): token argument is required");if(!P(r))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=e,this.policy=i,this.resolveFn=r,this.deps=n||[],this.data=o,this.resolved=void 0!==o,this.promise=this.resolved?N.$q.when(this.data):void 0}else if(x(e)&&e.token&&(e.hasOwnProperty("resolveFn")||e.hasOwnProperty("data"))){var a=e;return new t(a.token,a.resolveFn,a.deps,a.policy,a.data)}}return t.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||le.when,async:e.async||r.async||le.async}},t.prototype.resolve=function(t,e){var r=this,n=N.$q,i=t.findNode(this),o=i&&i.state,a="RXWAIT"===this.getPolicy(o).async?function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})}:z;return this.promise=n.when().then(function(){return n.all(t.getDependencies(r).map(function(r){return r.get(t,e)}))}).then(function(t){return r.resolveFn.apply(null,t)}).then(a).then(function(t){return r.data=t,r.resolved=!0,r.resolveFn=null,Kt.traceResolvableResolved(r,e),r.data})},t.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},t.prototype.toString=function(){return"Resolvable(token: "+ke(this.token)+", requires: ["+this.deps.map(ke)+"])"},t.prototype.clone=function(){return new t(this)},t.fromData=function(e,r){return new t(e,function(){return r},null,null,r)},t}(),pe={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}},ve=pe.when,de=[ve.EAGER,ve.LAZY],me=[ve.EAGER],ye="Native Injector",ge=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(wt,[])},t.prototype.getResolvable=function(t){return kt(this._path.map(function(t){return t.resolvables}).reduce(yt,[]).filter(function(e){return e.token===t}))},t.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},t.prototype.subContext=function(e){return new t(fe.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var r=lt(this._path,s("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},t.prototype.resolvePath=function(t,e){var r=this;void 0===t&&(t="LAZY");var n=(Y(de,t)?t:"LAZY")===pe.when.EAGER?me:de;Kt.traceResolvePath(this._path,t,e);var i=function(t,e){return function(n){return Y(t,r.getPolicy(n)[e])}},o=this._path.reduce(function(t,o){var a=o.resolvables.filter(i(n,"when")),u=a.filter(i(["NOWAIT"],"async")),s=a.filter(f(i(["NOWAIT"],"async"))),c=r.subContext(o.state),l=function(t){return t.get(c,e).then(function(e){return{token:t.token,value:e}})};return u.forEach(l),t.concat(s.map(l))},[]);return N.$q.all(o)},t.prototype.injector=function(){return this._injector||(this._injector=new _e(this))},t.prototype.findNode=function(t){return lt(this._path,function(e){return Y(e.resolvables,t)})},t.prototype.getDependencies=function(t){var e=this,r=this.findNode(t),n=(fe.subPath(this._path,function(t){return t===r})||this._path).reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(e){return e!==t});return t.deps.map(function(t){var r=n.filter(function(e){return e.token===t});if(r.length)return kt(r);var i=e.injector().getNative(t);if(R(i))throw new Error("Could not find Dependency Injection token: "+ke(t));return new he(t,function(){return i},[],i)})},t}(),_e=function(){function t(t){this.context=t,this.native=this.get(ye)||N.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+ke(e.token));return e.data}return this.getNative(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):N.$q.when(this.native.get(t))},t.prototype.getNative=function(t){return this.native&&this.native.get(t)},t}(),we=u("self"),$e=function(){function e(e,r,n){var i=this;if(this._deferred=N.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new ne(this),this.isActive=function(){return i.router.globals.transition===i},this.router=n,this._targetState=r,!r.valid())throw new Error(r.error());this._options=G({current:y(this)},r.options()),this.$id=n.transitionService._transitionCount++;var o=fe.buildToPath(e,r);this._treeChanges=fe.treeChanges(e,o,this._options.reloadState),this.createTransitionHookRegFns();var a=this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);Xt.invokeHooks(a,function(){return null}),this.applyViewConfigs(n)}return e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(e){return e.hookPhase!==t.TransitionHookPhase.CREATE}).forEach(function(t){return re(e,e.router.transitionService,t)})},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});fe.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},e.prototype.$from=function(){return kt(this._treeChanges.from).state},e.prototype.$to=function(){return kt(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!te(this.$to(),t.to)||t.from&&!te(this.$from(),t.from))},e.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(u("paramValues")).reduce(ot,{}))},e.prototype.injector=function(t,e){void 0===e&&(e="to");var r=this._treeChanges[e];return t&&(r=fe.subPath(r,function(e){return e.state===t||e.state.name===t})),new ge(r).injector()},e.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new ge(this._treeChanges[t]).getTokens()},e.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=d(he)(t)?t:new he(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=lt(n,function(t){return t.state.name===r});new ge(n).addResolvables([t],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return pt(this._treeChanges.entering,u("state")).map(we)},e.prototype.exiting=function(){return pt(this._treeChanges.exiting,u("state")).map(we).reverse()},e.prototype.retained=function(){return pt(this._treeChanges.retained,u("state")).map(we)},e.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return(r=e?r.filter(s("state",e)):r).map(u("views")).filter(z).reduce(yt,[])},e.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},e.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(++e>20)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=G({},this.options(),t.options(),n);t=t.withOptions(i,!0);var o,a=this.router.transitionService.create(this._treeChanges.from,t),u=this._treeChanges.entering,s=a._treeChanges.entering;return fe.matching(s,u,fe.nonDynamicParams).filter(f((o=t.options().reloadState,function(t){return o&&t.state.includes[o.name]}))).forEach(function(t,e){t.resolvables=u[e].resolvables}),a},e.prototype._changedParams=function(){var t=this._treeChanges;if(!this._options.reload&&(!t.exiting.length&&!t.entering.length&&t.to.length===t.from.length&&!Tt(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(mt,!1))){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return Tt(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return se.changed(e,r,n)}).reduce(yt,[])}},e.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(mt,!1)},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var t=this.router.globals.transition,e=this._options.reloadState,r=function(t,r){if(t.length!==r.length)return!1;var n=fe.matching(t,r);return t.length===n.filter(function(t){return!e||!t.state.includes[e.name]}).length},n=this.treeChanges(),i=t&&t.treeChanges();return i&&r(i.to,n.to)&&r(i.exiting,n.exiting)?"SameAsPending":0===n.exiting.length&&0===n.entering.length&&r(n.from,n.to)?"SameAsCurrent":void 0},e.prototype.run=function(){var e=this,r=Xt.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},i=n(t.TransitionHookPhase.BEFORE);return Xt.invokeHooks(i,function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),Kt.traceTransitionStart(e),N.$q.when(void 0)}).then(function(){var e=n(t.TransitionHookPhase.RUN);return Xt.invokeHooks(e,function(){return N.$q.when(void 0)})}).then(function(){Kt.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),r(n(t.TransitionHookPhase.SUCCESS))},function(i){Kt.traceError(i,e),e.success=!1,e._deferred.reject(i),e._error=i,r(n(t.TransitionHookPhase.ERROR))}),this.promise},e.prototype.valid=function(){return!this.error()||void 0!==this.success},e.prototype.abort=function(){R(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var t=this.$to();if(t.self.abstract)return qt.invalid("Cannot transition to abstract state '"+t.name+"'");var e=t.parameters(),r=this.params(),n=e.filter(function(t){return!t.validates(r[t.id])});if(n.length){var i=n.map(function(t){return"["+t.id+":"+ke(r[t.id])+"]"}).join(", "),o="The following parameter values are not valid for state '"+t.name+"': "+i;return qt.invalid(o)}return!1===this.success?this._error:void 0},e.prototype.toString=function(){var t=this.from(),e=this.to(),r=function(t){return null!==t["#"]&&void 0!==t["#"]?t:st(t,["#"])};return"Transition#"+this.$id+"( '"+(x(t)?t.name:t)+"'"+ke(r(this._treeChanges.from.map(u("paramValues")).reduce(ot,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(x(e)?e.name:e)+"'"+ke(r(this.params()))+" )"},e.diToken=e,e}();function Se(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function be(t,e){for(;e.length<t;)e+=" ";return e}function Re(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function Ee(t){var e=Ce(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function Ce(t){var e=V(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}var Te=null,Pe=function(t){var e=qt.isRejectionPromise;return(Te=Te||_([[f(E),y("undefined")],[C,y("null")],[D,y("[Promise]")],[e,function(t){return t._transitionRejection.toString()}],[d(qt),g("toString")],[d($e),g("toString")],[d(he),g("toString")],[H,Ee],[y(!0),z]]))(t)};function ke(t){var e=[];return JSON.stringify(t,function(t,r){return function(t){if(x(t)){if(-1!==e.indexOf(t))return"[circular ref]";e.push(t)}return Pe(t)}(r)}).replace(/\\"/g,'"')}var Oe=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},xe=new RegExp("^(?:[a-z]+:)?//[^/]+/"),Ve=function(t){return t.replace(/\/[^/]*$/,"")},Ie=Oe("#"),je=Oe("?"),Ae=Oe("="),He=function(t){return t?t.replace(/^#/,""):""};function De(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(z)}}function qe(t,e){return O(kt(t))&&O(e)?t.slice(0,-1).concat(kt(t)+e):_t(t,e)}var Ne,Fe=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=ut(t.prototype,["hash","string","query","path","int","bool","date","json","any"]);this.types=K(pt(this.defaultTypes,function(t,e){return new ie(G({name:e},t))}),{})}return t.prototype.dispose=function(){this.types={}},t.prototype.type=function(t,e,r){if(!E(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new ie(G({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");G(this.types[t.name],N.$injector.invoke(t.def))}},t}();Ne=function(t){var e=function(t){return null!=t?t.toString():t},r={encode:e,decode:e,is:d(String),pattern:/.*/,equals:function(t,e){return t==e}};return G({},r,t)},G(Fe.prototype,{string:Ne({}),path:Ne({pattern:/[^/]*/}),query:Ne({}),hash:Ne({inherit:!1}),int:Ne({decode:function(t){return parseInt(t,10)},is:function(t){return!T(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:Ne({encode:function(t){return t?1:0},decode:function(t){return 0!==parseInt(t,10)},is:d(Boolean),pattern:/0|1/}),date:Ne({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(t,e){return["getFullYear","getMonth","getDate"].reduce(function(r,n){return r&&t[n]()===e[n]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:Ne({encode:M,decode:L,is:d(Object),equals:W,pattern:/[^/]*/}),any:Ne({encode:z,decode:z,is:function(){return!0},equals:W})});var Ue=function(){function t(t){void 0===t&&(t={}),G(this,t)}return t.prototype.$inherit=function(t,e,r){var n,i=at(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params)).length)for(var s in n)a.indexOf(n[s])>=0||(a.push(n[s]),o[n[s]]=this[n[s]]);return G({},o,t)},t}();function Le(t){return t.name}function Me(t){return t.self.$$state=function(){return t},t.self}function Be(t){return t.parent&&t.parent.data&&(t.data=t.self.data=K(t.parent.data,t.data)),t.data}var Ge=function(t,e){return function(r){var n=r;n&&n.url&&n.name&&n.name.match(/\.\*\*$/)&&(n.url+="{remainder:any}");var i=function(t){if(!O(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}}(n.url),o=r.parent,a=i?t.compile(i.val,{params:r.params||{},paramMap:function(t,e){return!1===n.reloadOnSearch&&e&&(t=G(t||{},{dynamic:!0})),t}}):n.url;if(!a)return null;if(!t.isMatcher(a))throw new Error("Invalid url '"+a+"' in state '"+r+"'");return i&&i.root?a:(o&&o.navigable||e()).url.append(a)}},We=function(t){return function(e){return!t(e)&&e.url?e:e.parent?e.parent.navigable:null}},ze=function(t){return function(e){var r=e.url&&e.url.parameters({inherit:!1})||[],n=vt(ht(st(e.params||{},r.map(u("id"))),function(e,r){return t.fromConfig(r,null,e)}));return r.concat(n).map(function(t){return[t.id,t]}).reduce(Pt,{})}};function Je(t){return t.parent?t.parent.path.concat(t):[t]}function Qe(t){var e=t.parent?G({},t.parent.includes):{};return e[t.name]=!0,e}function Ke(t){var e,r,n=function(t){return t.provide||t.token},i=_([[u("resolveFn"),function(t){return new he(n(t),t.resolveFn,t.deps,t.policy)}],[u("useFactory"),function(t){return new he(n(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[u("useClass"),function(t){return new he(n(t),function(){return new t.useClass},[],t.policy)}],[u("useValue"),function(t){return new he(n(t),function(){return t.useValue},[],t.policy,t.useValue)}],[u("useExisting"),function(t){return new he(n(t),z,[t.useExisting],t.policy)}]]),o=_([[a(u("val"),O),function(t){return new he(t.token,z,[t.val],t.policy)}],[a(u("val"),V),function(t){return new he(t.token,kt(t.val),t.val.slice(0,-1),t.policy)}],[a(u("val"),P),function(t){return new he(t.token,t.val,(e=t.val,r=N.$injector,e.$inject||r&&r.annotate(e,r.strictDi)||"deferred"),t.policy);var e,r}]]),s=_([[d(he),function(t){return t}],[function(t){return!(!t.token||!t.resolveFn)},i],[function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},i],[function(t){return!!(t&&t.val&&(O(t.val)||V(t.val)||P(t.val)))},o],[y(!0),function(t){throw new Error("Invalid resolve value: "+ke(t))}]]),c=t.resolve;return(V(c)?c:(e=c,r=t.resolvePolicy||{},Object.keys(e||{}).map(function(t){return{token:t,val:e[t],deps:void 0,policy:r[t]}}))).map(s)}var Ye=function(){function t(t,e){this.matcher=t;var r=this,n=function(){return t.find("")},i=function(t){return""===t.name};this.builders={name:[Le],self:[Me],parent:[function(e){return i(e)?null:t.find(r.parentName(e))||n()}],data:[Be],url:[Ge(e,n)],navigable:[We(i)],params:[ze(e.paramFactory)],views:[],path:[Je],includes:[Qe],resolvables:[Ke]}}return t.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return O(t)&&!E(e)?n.length>1?n:n[0]:O(t)&&P(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this.matcher,r=this.builders,n=this.parentName(t);if(n&&!e.find(n,void 0,!1))return null;for(var i in r)if(r.hasOwnProperty(i)){var o=r[i].reduce(function(t,e){return function(r){return e(r,t)}},J);t[i]=o(t)}return t},t.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if("**"===r.pop()&&r.pop(),r.length){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return r.join(".")}return t.parent?O(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=O(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},t}(),Ze=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return 0===(t=t||"").indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=O(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=vt(this._states).filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return a.length>1&&console.log("stateMatcher.find: Found multiple matches for "+i+" using glob: ",a.map(function(t){return t.name})),a[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=n.length,o=0,a=r;o<i;o++)if(""!==n[o]||0!==o){if("^"!==n[o])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(o).join(".");return a.name+(a.name&&u?".":"")+u},t}(),Xe=function(){function t(t,e,r,n,i){this.$registry=t,this.$urlRouter=e,this.states=r,this.builder=n,this.listeners=i,this.queue=[],this.matcher=t.matcher}return t.prototype.dispose=function(){this.queue=[]},t.prototype.register=function(t){var e=this.queue,r=$.create(t),n=r.name;if(!O(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||Y(e.map(u("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},t.prototype.flush=function(){for(var t=this,e=this.queue,r=this.states,n=this.builder,i=[],o=[],a={},u=function(e){return t.states.hasOwnProperty(e)&&t.states[e]},s=function(){i.length&&t.listeners.forEach(function(t){return t("registered",i.map(function(t){return t.self}))})};e.length>0;){var c=e.shift(),f=c.name,l=n.build(c),h=o.indexOf(c);if(l){var p=u(f);if(p&&p.name===f)throw new Error("State '"+f+"' is already defined");var v=u(f+".**");v&&this.$registry.deregister(v),r[f]=c,this.attachRoute(c),h>=0&&o.splice(h,1),i.push(c)}else{var d=a[f];if(a[f]=e.length,h>=0&&d===e.length)return e.push(c),s(),r;h<0&&o.push(c),e.push(c)}}return s(),r},t.prototype.attachRoute=function(t){!t.abstract&&t.url&&this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))},t}(),tr=function(){function t(t){this._router=t,this.states={},this.listeners=[],this.matcher=new Ze(this.states),this.builder=new Ye(this.matcher,t.urlMatcherFactory),this.stateQueue=new Xe(this,t.urlRouter,this.states,this.builder,this.listeners),this._registerRoot()}return t.prototype._registerRoot=function(){(this._root=this.stateQueue.register({name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0})).navigable=null},t.prototype.dispose=function(){var t=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(e){return t.get(e)&&t.deregister(e)})},t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){X(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var e=this,r=this.get().map(function(t){return t.$$state()}),n=function(t){var e=r.filter(function(e){return-1!==t.indexOf(e.parent)});return 0===e.length?e:e.concat(n(e))},i=n([t]),o=[t].concat(i).reverse();return o.forEach(function(t){var r=e._router.urlRouter;r.rules().filter(s("state",t)).forEach(r.removeRule.bind(r)),delete e.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},t.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}();function er(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}var rr=De("/"),nr=function(){function e(t,r,n,i){var o=this;this.config=i,this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.pattern=t,this.config=it(this.config,{params:{},strict:!0,caseInsensitive:!1,paramMap:z});for(var a,u,c,f=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h=[],p=0,v=function(r){if(!e.nameValidator.test(r))throw new Error("Invalid parameter name '"+r+"' in pattern '"+t+"'");if(lt(o._params,s("id",r)))throw new Error("Duplicate parameter name '"+r+"' in pattern '"+t+"'")},d=function(e,n){var i,a=e[2]||e[3],u=n?e[4]:e[4]||("*"===e[1]?"[\\s\\S]*":null);return{id:a,regexp:u,cfg:o.config.params[a],segment:t.substring(p,e.index),type:u?r.type(u)||(i=u,K(r.type(n?"query":"path"),{pattern:new RegExp(i,o.config.caseInsensitive?"i":void 0)})):null}};(a=f.exec(t))&&!((u=d(a,!1)).segment.indexOf("?")>=0);)v(u.id),this._params.push(n.fromPath(u.id,u.type,this.config.paramMap(u.cfg,!1))),this._segments.push(u.segment),h.push([u.segment,kt(this._params)]),p=f.lastIndex;var m=(c=t.substring(p)).indexOf("?");if(m>=0){var y=c.substring(m);if(c=c.substring(0,m),y.length>0)for(p=0;a=l.exec(y);)v((u=d(a,!0)).id),this._params.push(n.fromSearch(u.id,u.type,this.config.paramMap(u.cfg,!0))),p=f.lastIndex}this._segments.push(c),this._compiled=h.map(function(t){return er.apply(null,t)}).concat(er(c))}return e.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},e.pathSegmentsAndParams=function(e){return Tt(e._segments,e._params.filter(function(e){return e.location===t.DefType.PATH}).concat(void 0)).reduce(yt,[]).filter(function(t){return""!==t&&E(t)})},e.queryParams=function(e){return e._params.filter(function(e){return e.location===t.DefType.SEARCH})},e.compare=function(t,r){var n=function(t){return t._cache.weights=t._cache.weights||function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(e.pathSegmentsAndParams).reduce(yt,[]).reduce(qe,[]).map(function(t){return O(t)?rr(t):t}).reduce(yt,[])}(t).map(function(t){return"/"===t?1:O(t)?2:t instanceof se?3:void 0})},i=n(t),o=n(r);!function(t,e,r){for(var n=Math.max(t.length,e.length);t.length<n;)t.push(r);for(;e.length<n;)e.push(r)}(i,o,0);var a,u,s=Tt(i,o);for(u=0;u<s.length;u++)if(0!==(a=s[u][0]-s[u][1]))return a;return 0},e.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},e.prototype.isRoot=function(){return this._cache.path[0]===this},e.prototype.toString=function(){return this.pattern},e.prototype.exec=function(t,e,r,n){var i=this;void 0===e&&(e={}),void 0===n&&(n={});var o,a,s,c=(o=this._cache,a="pattern",s=function(){return new RegExp(["^",$t(i._cache.path.map(u("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)},o[a]=o[a]||s()).exec(t);if(!c)return null;var f,l=this.parameters(),h=l.filter(function(t){return!t.isSearch()}),p=l.filter(function(t){return t.isSearch()}),v=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),d={};if(v!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var m=0;m<v;m++){for(var y=h[m],g=c[m+1],_=0;_<y.replace.length;_++)y.replace[_].from===g&&(g=y.replace[_].to);g&&!0===y.array&&(void 0,g=pt(pt((f=function(t){return t.split("").reverse().join("")})(g).split(/-(?!\\)/),f),function(t){return t.replace(/\\-/g,"-")}).reverse()),E(g)&&(g=y.type.decode(g)),d[y.id]=y.value(g)}return p.forEach(function(t){for(var r=e[t.id],n=0;n<t.replace.length;n++)t.replace[n].from===r&&(r=t.replace[n].to);E(r)&&(r=t.type.decode(r)),d[t.id]=t.value(r)}),r&&(d["#"]=r),d},e.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:$t(this._cache.path.map(function(t){return t._params}))},e.prototype.parameter=function(t,e){var r=this;void 0===e&&(e={});var n=this._cache.parent;return function(){for(var e=0,n=r._params;e<n.length;e++){var i=n[e];if(i.id===t)return i}}()||!1!==e.inherit&&n&&n.parameter(t,e)||null},e.prototype.validates=function(t){return t=t||{},this.parameters().filter(function(e){return t.hasOwnProperty(e.id)}).map(function(e){return r=e,n=t[e.id],!r||r.validates(n);var r,n}).reduce(dt,!0)},e.prototype.format=function(t){void 0===t&&(t={});var r=this._cache.path,n=r.map(e.pathSegmentsAndParams).reduce(yt,[]).map(function(t){return O(t)?t:o(t)}),i=r.map(e.queryParams).reduce(yt,[]).map(o);if(n.concat(i).filter(function(t){return!1===t.isValid}).length)return null;function o(e){var r=e.value(t[e.id]),n=e.validates(r),i=e.isDefaultValue(r);return{param:e,value:r,isValid:n,isDefaultValue:i,squash:!!i&&e.squash,encoded:e.type.encode(r)}}var a=n.reduce(function(t,r){if(O(r))return t+r;var n=r.squash,i=r.encoded,o=r.param;return!0===n?t.match(/\/$/)?t.slice(0,-1):t:O(n)?t+n:!1!==n?t:null==i?t:V(i)?t+pt(i,e.encodeDashes).join("-"):o.raw?t+i:t+encodeURIComponent(i)},""),u=i.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(V(n)||(n=[n]),0!==n.length))return e.raw||(n=pt(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(z).reduce(yt,[]).join("&");return a+(u?"?"+u:"")+(t["#"]?"#"+t["#"]:"")},e.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,e}(),ir=function(){function e(){var e=this;this.paramTypes=new Fe,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this.paramFactory={fromConfig:function(r,n,i){return new se(r,n,i,t.DefType.CONFIG,e)},fromPath:function(r,n,i){return new se(r,n,i,t.DefType.PATH,e)},fromSearch:function(r,n,i){return new se(r,n,i,t.DefType.SEARCH,e)}},this._getConfig=function(t){return G({strict:e._isStrictMode,caseInsensitive:e._isCaseInsensitive},t)},G(this,{UrlMatcher:nr,Param:se})}return e.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=E(t)?t:this._isCaseInsensitive},e.prototype.strictMode=function(t){return this._isStrictMode=E(t)?t:this._isStrictMode},e.prototype.defaultSquashPolicy=function(t){if(E(t)&&!0!==t&&!1!==t&&!O(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=E(t)?t:this._defaultSquashPolicy},e.prototype.compile=function(t,e){return new nr(t,this.paramTypes,this.paramFactory,this._getConfig(e))},e.prototype.isMatcher=function(t){if(!x(t))return!1;var e=!0;return B(nr.prototype,function(r,n){P(r)&&(e=e&&E(t[n])&&P(t[n]))}),e},e.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return E(e)?this:n},e.prototype.$get=function(){return this.paramTypes.enqueue=!1,this.paramTypes._flushTypeQueue(),this},e.prototype.dispose=function(){this.paramTypes.dispose()},e}(),or=function(){function t(t){this.router=t}return t.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},t.prototype.create=function(t,e){var r=this,n=_([[O,function(t){return n(r.compile(t))}],[d(nr),function(t){return r.fromUrlMatcher(t,e)}],[A,function(t){return r.fromState(t,r.router)}],[d(RegExp),function(t){return r.fromRegExp(t,e)}],[P,function(t){return new ar(t,e)}]]),i=n(t);if(!i)throw new Error("invalid 'what' in when()");return i},t.prototype.fromUrlMatcher=function(t,e){var r=e;O(e)&&(e=this.router.urlMatcherFactory.compile(e)),d(nr)(e)&&(r=function(t){return e.format(t)});var n={urlMatcher:t,matchPriority:function(e){var r=t.parameters().filter(function(t){return t.isOptional});return r.length?r.filter(function(t){return e[t.id]}).length/r.length:1e-6},type:"URLMATCHER"};return G(new ar(function(e){var r=t.exec(e.path,e.search,e.hash);return t.validates(r)&&r},r),n)},t.prototype.fromState=function(t,e){var r={state:t,type:"STATE"};return G(this.fromUrlMatcher(t.url,function(r){var n=e.stateService,i=e.globals;n.href(t,r)!==n.href(i.current,i.params)&&n.transitionTo(t,r,{inherit:!0,source:"url"})}),r)},t.prototype.fromRegExp=function(t,e){if(t.global||t.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=O(e)?function(t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}:e,n={regexp:t,type:"REGEXP"};return G(new ar(function(e){return t.exec(e.path)},r),n)},t.isUrlRule=function(t){return t&&["type","match","handler"].every(function(e){return E(t[e])})},t}(),ar=function(){return function(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||z}}();var ur;ur=function(t,e){var r=function(t,e){return(e.priority||0)-(t.priority||0)}(t,e);return 0!==r?r:0!==(r=function(t,e){var r={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1};return(r[t.type]||0)-(r[e.type]||0)}(t,e))?r:0!==(r=function(t,e){return t.urlMatcher&&e.urlMatcher?nr.compare(t.urlMatcher,e.urlMatcher):0}(t,e))?r:function(t,e){var r={STATE:!0,URLMATCHER:!0};return r[t.type]&&r[e.type]?0:(t.$id||0)-(e.$id||0)}(t,e)};var sr=function(){function t(e){this._sortFn=ur,this._rules=[],this.interceptDeferred=!1,this._id=0,this._sorted=!1,this._router=e,this.urlRuleFactory=new or(e),Q(y(t.prototype),this,y(this))}return t.prototype.dispose=function(){this.listen(!1),this._rules=[],delete this._otherwiseFn},t.prototype.sort=function(t){this._rules=this.stableSort(this._rules,this._sortFn=t||this._sortFn),this._sorted=!0},t.prototype.ensureSorted=function(){this._sorted||this.sort()},t.prototype.stableSort=function(t,e){var r=t.map(function(t,e){return{elem:t,idx:e}});return r.sort(function(t,r){var n=e(t.elem,r.elem);return 0===n?t.idx-r.idx:n}),r.map(function(t){return t.elem})},t.prototype.match=function(t){var e=this;this.ensureSorted(),t=G({path:"",search:{},hash:""},t);var r=this.rules();this._otherwiseFn&&r.push(this._otherwiseFn);for(var n,i,o,a=0;a<r.length&&(!n||0===this._sortFn(r[a],n.rule));a++){var u=(i=r[a],void 0,(o=i.match(t,e._router))&&{match:o,rule:i,weight:i.matchPriority(o)});n=!n||u&&u.weight>n.weight?u:n}return n},t.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this._router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);_([[O,function(t){return r.url(t,!0)}],[Yt.isDef,function(t){return n.go(t.state,t.params,t.options)}],[d(Yt),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,e))}},t.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopFn=this._stopFn||this._router.urlService.onChange(function(t){return e.sync(t)});this._stopFn&&this._stopFn(),delete this._stopFn},t.prototype.update=function(t){var e=this._router.locationService;t?this.location=e.url():e.url()!==this.location&&e.url(this.location,!0)},t.prototype.push=function(t,e,r){var n=r&&!!r.replace;this._router.urlService.url(t.format(e||{}),n)},t.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i=this._router.urlService.config,o=i.html5Mode();if(o||null===n||(n="#"+i.hashPrefix()+n),n=function(t,e,r,n){return"/"===n?t:e?Ve(n)+t:r?n.slice(1)+t:t}(n,o,r.absolute,i.baseHref()),!r.absolute||!n)return n;var a=!o&&n?"/":"",u=i.port(),s=80===u||443===u?"":":"+u;return[i.protocol(),"://",i.host(),s,a,n].join("")},t.prototype.rule=function(t){var e=this;if(!or.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},t.prototype.removeRule=function(t){X(this._rules,t)},t.prototype.rules=function(){return this.ensureSorted(),this._rules.slice()},t.prototype.otherwise=function(t){var e=cr(t);this._otherwiseFn=this.urlRuleFactory.create(y(!0),e),this._sorted=!1},t.prototype.initial=function(t){var e=cr(t);this.rule(this.urlRuleFactory.create(function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)},e))},t.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return E(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t}();function cr(t){if(!(P(t)||O(t)||d(Yt)(t)||Yt.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return P(t)?t:y(t)}var fr=function(){function t(){var t=this;this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._listeners=[],this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIViews:function(){return t._uiViews},_activeViewConfigs:function(){return t._viewConfigs},_onSync:function(e){return t._listeners.push(e),function(){return X(t._listeners,e)}}}}return t.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=O(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i="");/^(\^(?:\.\^)*)$/.exec(i)?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name);return{uiViewName:n,uiViewContextAnchor:i}},t.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},t.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},t.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return V(n)?n:[n]},t.prototype.deactivateViewConfig=function(t){Kt.traceViewServiceEvent("<- Removing",t),X(this._viewConfigs,t)},t.prototype.activateViewConfig=function(t){Kt.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},t.prototype.sync=function(){var e=this,r=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(Pt,{});function n(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var o=i(function(t,e,r,n){return e*(t(r)-t(n))}),a=this._uiViews.sort(o(function(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)},1)).map(function(i){var a=e._viewConfigs.filter(t.matches(r,i));return a.length>1&&a.sort(o(n,-1)),{uiView:i,viewConfig:a[0]}}),u=a.map(function(t){return t.viewConfig}),s=this._viewConfigs.filter(function(t){return!Y(u,t)}).map(function(t){return{uiView:void 0,viewConfig:t}});a.forEach(function(t){-1!==e._uiViews.indexOf(t.uiView)&&t.uiView.configUpdated(t.viewConfig)});var c=a.concat(s);this._listeners.forEach(function(t){return t(c)}),Kt.traceViewSync(c)},t.prototype.registerUIView=function(t){Kt.traceViewServiceUIViewEvent("-> Registering",t);var e=this._uiViews;return e.filter(function(e){return e.fqn===t.fqn&&e.$type===t.$type}).length&&Kt.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",t),e.push(t),this.sync(),function(){-1!==e.indexOf(t)?(Kt.traceViewServiceUIViewEvent("<- Deregistering",t),X(e)(t)):Kt.traceViewServiceUIViewEvent("Tried removing non-registered uiView",t)}},t.prototype.available=function(){return this._uiViews.map(u("fqn"))},t.prototype.active=function(){return this._uiViews.filter(u("$config")).map(u("name"))},t.matches=function(t,e){return function(r){if(e.$type!==r.viewDecl.$type)return!1;var n=r.viewDecl,i=n.$uiViewName.split("."),o=e.fqn.split(".");if(!W(i,o.slice(0-i.length)))return!1;var a=1-i.length||void 0,u=o.slice(0,a).join("."),s=t[u].creationContext;return n.$uiViewContextAnchor===(s&&s.name)}},t}(),lr=function(){function t(){this.params=new Ue,this.lastStartedTransitionId=-1,this.transitionHistory=new Ht([],1),this.successfulTransitions=new Ht([],1)}return t.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},t}(),hr=function(t){return t.reduce(function(t,e){return t[e]=q(e),t},{dispose:J})},pr=["url","path","search","hash","onChange"],vr=["port","protocol","host","baseHref","html5Mode","hashPrefix"],dr=["type","caseInsensitive","strictMode","defaultSquashPolicy"],mr=["sort","when","initial","otherwise","rules","rule","removeRule"],yr=["deferIntercept","listen","sync","match"],gr=function(){function t(t,e){void 0===e&&(e=!0),this.router=t,this.rules={},this.config={};var r=function(){return t.locationService};Q(r,this,r,pr,e);var n=function(){return t.locationConfig};Q(n,this.config,n,vr,e);var i=function(){return t.urlMatcherFactory};Q(i,this.config,i,dr);var o=function(){return t.urlRouter};Q(o,this.rules,o,mr),Q(o,this,o,yr)}return t.prototype.url=function(t,e,r){},t.prototype.path=function(){},t.prototype.search=function(){},t.prototype.hash=function(){},t.prototype.onChange=function(t){},t.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},t.prototype.dispose=function(){},t.prototype.sync=function(t){},t.prototype.listen=function(t){},t.prototype.deferIntercept=function(t){},t.prototype.match=function(t){},t.locationServiceStub=hr(pr),t.locationConfigStub=hr(vr),t}(),_r=0,wr=function(){function t(t,e){void 0===t&&(t=gr.locationServiceStub),void 0===e&&(e=gr.locationConfigStub),this.locationService=t,this.locationConfig=e,this.$id=_r++,this._disposed=!1,this._disposables=[],this.trace=Kt,this.viewService=new fr,this.globals=new lr,this.transitionService=new Lr(this),this.urlMatcherFactory=new ir,this.urlRouter=new sr(this),this.stateRegistry=new tr(this),this.stateService=new Mr(this),this.urlService=new gr(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlRouter),this.disposable(t),this.disposable(e)}return t.prototype.disposable=function(t){this._disposables.push(t)},t.prototype.dispose=function(t){var e=this;t&&P(t.dispose)?t.dispose(this):(this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),X(e._disposables,t)}catch(t){}}))},t.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},t.prototype.getPlugin=function(t){return t?this._plugins[t]:vt(this._plugins)},t}();function $r(t){t.addResolvable(he.fromData(wr,t.router),""),t.addResolvable(he.fromData($e,t),""),t.addResolvable(he.fromData("$transition$",t),""),t.addResolvable(he.fromData("$stateParams",t.params()),""),t.entering().forEach(function(e){t.addResolvable(he.fromData("$state$",e),e)})}var Sr=Y(["$transition$",$e]),br=function(t){var e=function(t){return Sr(t.token)?he.fromData(t.token,null):t};vt(t.treeChanges()).reduce(yt,[]).reduce(wt,[]).forEach(function(t){t.resolvables=t.resolvables.map(e)})},Rr=function(t){var e=t.to().redirectTo;if(e){var r=t.router.stateService;return P(e)?N.$q.when(e(t)).then(n):n(e)}function n(e){if(e)return e instanceof Yt?e:O(e)?r.target(e,t.params(),t.options()):e.state||e.params?r.target(e.state||t.to(),e.params||t.params(),t.options()):void 0}};function Er(t){return function(e,r){return(0,r.$$state()[t])(e,r)}}var Cr=Er("onExit"),Tr=Er("onRetain"),Pr=Er("onEnter"),kr=function(t){return new ge(t.treeChanges().to).resolvePath("EAGER",t).then(J)},Or=function(t,e){return new ge(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(J)},xr=function(t){return new ge(t.treeChanges().to).resolvePath("LAZY",t).then(J)},Vr=function(t){var e=N.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(J)},Ir=function(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}},jr=function(t){var e=t.router.globals,r=function(){e.transition===t&&(e.transition=null)};t.onSuccess({},function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,Ot(t.params(),e.params)},{priority:1e4}),t.promise.then(r,r)},Ar=function(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)},Hr=function(t){var e=t.router;var r=t.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(e){return Dr(t,e)});return N.$q.all(r).then(function(){if("url"!==t.originalTransition().options().source){var r=t.targetState();return e.stateService.target(r.identifier(),r.params(),r.options())}var n=e.urlService,i=n.match(n.parts()),o=i&&i.rule;if(o&&"STATE"===o.type){var a=o.state,u=i.match;return e.stateService.target(a,u,t.options())}e.urlService.sync()})};function Dr(t,e){var r=e.$$state().lazyLoad,n=r._promise;if(!n){n=r._promise=N.$q.when(r(t,e)).then(function(e){e&&Array.isArray(e.states)&&e.states.forEach(function(e){return t.router.stateRegistry.register(e)});return e}).then(function(t){return delete e.lazyLoad,delete e.$$state().lazyLoad,delete r._promise,t},function(t){return delete r._promise,N.$q.reject(t)})}return n}var qr=function(){return function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Xt.HANDLE_RESULT),void 0===a&&(a=Xt.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u}}();function Nr(t){var e=t._ignoredReason();if(e){Kt.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),qt.ignored().toPromise()}}function Fr(t){if(!t.valid())throw new Error(t.error().toString())}var Ur={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"},Lr=function(){function e(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=Q(y(this),{},y(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks(),t.globals.successfulTransitions.onEvict(br)}return e.prototype.onCreate=function(t,e,r){},e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.dispose=function(t){vt(this._registeredHooks).forEach(function(t){return t.forEach(function(e){e._deregistered=!0,X(t,e)})})},e.prototype.create=function(t,e){return new $e(t,e,this._router)},e.prototype._defineCoreEvents=function(){var e=t.TransitionHookPhase,r=Xt,n=this._criteriaPaths;this._defineEvent("onCreate",e.CREATE,0,n.to,!1,r.LOG_REJECTED_RESULT,r.THROW_ERROR,!0),this._defineEvent("onBefore",e.BEFORE,0,n.to),this._defineEvent("onStart",e.RUN,0,n.to),this._defineEvent("onExit",e.RUN,100,n.exiting,!0),this._defineEvent("onRetain",e.RUN,200,n.retained),this._defineEvent("onEnter",e.RUN,300,n.entering),this._defineEvent("onFinish",e.RUN,400,n.to),this._defineEvent("onSuccess",e.SUCCESS,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0),this._defineEvent("onError",e.ERROR,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0)},e.prototype._defineCorePaths=function(){var e=t.TransitionHookScope.STATE,r=t.TransitionHookScope.TRANSITION;this._definePathType("to",r),this._definePathType("from",r),this._definePathType("exiting",e),this._definePathType("retained",e),this._definePathType("entering",e)},e.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Xt.HANDLE_RESULT),void 0===a&&(a=Xt.REJECT_ERROR),void 0===u&&(u=!1);var s=new qr(t,e,r,n,i,o,a,u);this._eventTypes.push(s),re(this,this,s)},e.prototype._getEvents=function(t){return(E(t)?this._eventTypes.filter(function(e){return e.hookPhase===t}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0===r?t.hookOrder-e.hookOrder:r})},e.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},e.prototype._getPathTypes=function(){return this._criteriaPaths},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=this.onCreate({},$r),t.ignored=function(t){return t.onBefore({},Nr,{priority:-9999})}(this),t.invalid=function(t){return t.onBefore({},Fr,{priority:-1e4})}(this),t.redirectTo=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},Rr)}(this),t.onExit=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},Cr)}(this),t.onRetain=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},Tr)}(this),t.onEnter=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},Pr)}(this),t.eagerResolve=function(t){return t.onStart({},kr,{priority:1e3})}(this),t.lazyResolve=function(t){return t.onEnter({entering:y(!0)},Or,{priority:1e3})}(this),t.resolveAll=function(t){return t.onFinish({},xr,{priority:1e3})}(this),t.loadViews=function(t){return t.onFinish({},Vr)}(this),t.activateViews=function(t){return t.onSuccess({},Ir)}(this),t.updateGlobals=function(t){return t.onCreate({},jr)}(this),t.updateUrl=function(t){return t.onSuccess({},Ar,{priority:9999})}(this),t.lazyLoad=function(t){return t.onBefore({entering:function(t){return!!t.lazyLoad}},Hr)}(this)},e}(),Mr=function(){function e(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof qt?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var r=Object.keys(e.prototype).filter(f(Y(["current","$current","params","transition"])));Q(y(e.prototype),this,y(this),r)}return Object.defineProperty(e.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.defaultErrorHandler(J),this.invalidCallbacks=[]},e.prototype._handleInvalidTargetState=function(t,e){var r=this,n=fe.makeTargetState(this.router.stateRegistry,t),i=this.router.globals,o=function(){return i.transitionHistory.peekTail()},a=o(),u=new Ht(this.invalidCallbacks.slice()),s=new ge(t).injector(),c=function(t){if(t instanceof Yt){var e=t;return(e=r.target(e.identifier(),e.params(),e.options())).valid()?o()!==a?qt.superseded().toPromise():r.transitionTo(e.identifier(),e.params(),e.options()):qt.invalid(e.error()).toPromise()}};return function t(){var r=u.dequeue();return void 0===r?qt.invalid(e.error()).toPromise():N.$q.when(r(e,n,s)).then(c).then(function(e){return e||t()})}()},e.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){X(this.invalidCallbacks)(t)}.bind(this)},e.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!E(t)||t,inherit:!1,notify:!1})},e.prototype.go=function(t,e,r){var n=it(r,{relative:this.$current,inherit:!0},Ur);return this.transitionTo(t,e,n)},e.prototype.target=function(t,e,r){if(void 0===r&&(r={}),x(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(O(r.reload)?r.reload:r.reload.name)+"'");return new Yt(this.router.stateRegistry,t,e,r)},e.prototype.getCurrentPath=function(){var t=this,e=this.router.globals.successfulTransitions.peekTail();return e?e.treeChanges().to:[new ce(t.router.stateRegistry.root())]},e.prototype.transitionTo=function(e,r,n){var i=this;void 0===r&&(r={}),void 0===n&&(n={});var o=this.router,a=o.globals;n=it(n,Ur);n=G(n,{current:function(){return a.transition}});var u=this.target(e,r,n),s=this.getCurrentPath();if(!u.exists())return this._handleInvalidTargetState(s,u);if(!u.valid())return At(u.error());var c=function(e){return function(r){if(r instanceof qt){var n=o.globals.lastStartedTransitionId===e.$id;if(r.type===t.RejectType.IGNORED)return n&&o.urlRouter.update(),N.$q.when(a.current);var u=r.detail;if(r.type===t.RejectType.SUPERSEDED&&r.redirected&&u instanceof Yt){var s=e.redirect(u);return s.run().catch(c(s))}if(r.type===t.RejectType.ABORTED)return n&&o.urlRouter.update(),N.$q.reject(r)}return i.defaultErrorHandler()(r),N.$q.reject(r)}},f=this.router.transitionService.create(s,u),l=f.run().catch(c(f));return jt(l),G(l,{transition:f})},e.prototype.is=function(t,e,r){r=it(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(E(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return se.equals(i,se.values(i,e),this.params)}},e.prototype.includes=function(t,e,r){r=it(r,{relative:this.$current});var n=O(t)&&w.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(E(i)){if(!E(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return se.equals(a,se.values(a,e),this.params)}},e.prototype.href=function(t,e,r){r=it(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!E(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},e.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},e.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},e.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=fe.makeTargetState(this.router.stateRegistry,n);return Dr(e=e||this.router.transitionService.create(n,i),r)},e}(),Br={when:function(t){return new Promise(function(e,r){return e(t)})},reject:function(t){return new Promise(function(e,r){r(t)})},defer:function(){var t={};return t.promise=new Promise(function(e,r){t.resolve=e,t.reject=r}),t},all:function(t){if(V(t))return Promise.all(t);if(x(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return Br.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},Gr={},Wr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,zr=/([^\s,]+)/g,Jr={get:function(t){return Gr[t]},has:function(t){return null!=Jr.get(t)},invoke:function(t,e,r){var n=G({},Gr,r||{}),i=Jr.annotate(t),o=bt(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return P(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!H(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(V(t))return t.slice(0,-1);var e=t.toString().replace(Wr,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(zr)||[]}},Qr=function(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?V(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t},Kr=function(t){return t.split("&").filter(z).map(Ae).reduce(Qr,{})};function Yr(t){var e=function(t){return t||""},r=Ie(t).map(e),n=r[0],i=r[1],o=je(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}var Zr=function(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(t){var e=r[t];return(V(e)?e:[e]).map(function(e){return t+"="+e})}).reduce(yt,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")};function Xr(t,e,r,n){return function(i){var o=i.locationService=new r(i),a=i.locationConfig=new n(i,e);return{name:t,service:o,configuration:a,dispose:function(t){t.dispose(o),t.dispose(a)}}}}var tn,en=function(){function t(t,e){var r=this;this.fireAfterUpdate=e,this._listeners=[],this._listener=function(t){return r._listeners.forEach(function(e){return e(t)})},this.hash=function(){return Yr(r._get()).hash},this.path=function(){return Yr(r._get()).path},this.search=function(){return Kr(Yr(r._get()).search)},this._location=F.location,this._history=F.history}return t.prototype.url=function(t,e){return void 0===e&&(e=!0),E(t)&&t!==this._get()&&(this._set(null,null,t,e),this.fireAfterUpdate&&this._listeners.forEach(function(e){return e({url:t})})),Zr(this)},t.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return X(e._listeners,t)}},t.prototype.dispose=function(t){nt(this._listeners)},t}(),rn=(tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}tn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),nn=function(t){function e(e){var r=t.call(this,e,!1)||this;return F.addEventListener("hashchange",r._listener,!1),r}return rn(e,t),e.prototype._get=function(){return He(this._location.hash)},e.prototype._set=function(t,e,r,n){this._location.hash=r},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),F.removeEventListener("hashchange",this._listener)},e}(en),on=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),an=function(t){function e(e){return t.call(this,e,!0)||this}return on(e,t),e.prototype._get=function(){return this._url},e.prototype._set=function(t,e,r,n){this._url=r},e}(en),un=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),sn=function(t){function e(e){var r=t.call(this,e,!0)||this;return r._config=e.urlService.config,F.addEventListener("popstate",r._listener,!1),r}return un(e,t),e.prototype._getBasePrefix=function(){return Ve(this._config.baseHref())},e.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;n=je(n)[1],r=Ie(r)[1];var i=this._getBasePrefix(),o=e===this._config.baseHref(),a=e.substr(0,i.length)===i;return(e=o?"/":a?e.substring(i.length):e)+(n?"?"+n:"")+(r?"#"+r:"")},e.prototype._set=function(t,e,r,n){var i=this._getBasePrefix(),o=r&&"/"!==r[0]?"/":"",a=""===r||"/"===r?this._config.baseHref():i+o+r;n?this._history.replaceState(t,e,a):this._history.pushState(t,e,a)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),F.removeEventListener("popstate",this._listener)},e}(en),cn=function(){return function(){var t=this;this.dispose=J,this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return t._port},this.protocol=function(){return t._protocol},this.host=function(){return t._host},this.baseHref=function(){return t._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(e){return E(e)?t._hashPrefix=e:t._hashPrefix}}}(),fn=function(){function t(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}return t.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},t.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},t.prototype.host=function(){return location.hostname},t.prototype.html5Mode=function(){return this._isHtml5},t.prototype.hashPrefix=function(t){return E(t)?this._hashPrefix=t:this._hashPrefix},t.prototype.baseHref=function(t){return E(t)?this._baseHref=t:E(this._baseHref)?this._baseHref:this.applyDocumentBaseHref()},t.prototype.applyDocumentBaseHref=function(){var t=document.getElementsByTagName("base")[0];return this._baseHref=t?t.href.substr(location.origin.length):location.pathname||"/"},t.prototype.dispose=function(){},t}();function ln(t){return N.$injector=Jr,N.$q=Br,{name:"vanilla.services",$q:Br,$injector:Jr,dispose:function(){return null}}}var hn=Xr("vanilla.hashBangLocation",!1,nn,fn),pn=Xr("vanilla.pushStateLocation",!0,sn,fn),vn=Xr("vanilla.memoryLocation",!1,an,cn),dn=function(){function t(){}return t.prototype.dispose=function(t){},t}(),mn=Object.freeze({root:F,fromJson:L,toJson:M,forEach:B,extend:G,equals:W,identity:z,noop:J,createProxyFunctions:Q,inherit:K,inArray:Y,_inArray:Z,removeFrom:X,_removeFrom:tt,pushTo:et,_pushTo:rt,deregAll:nt,defaults:it,mergeR:ot,ancestors:at,pick:ut,omit:st,pluck:ct,filter:ft,find:lt,mapObj:ht,map:pt,values:vt,allTrueR:dt,anyTrueR:mt,unnestR:yt,flattenR:gt,pushR:_t,uniqR:wt,unnest:$t,flatten:St,assertPredicate:bt,assertMap:Rt,assertFn:Et,pairs:Ct,arrayTuples:Tt,applyPairs:Pt,tail:kt,copy:Ot,_extend:xt,silenceUncaughtInPromise:jt,silentRejection:At,notImplemented:q,services:N,Glob:w,curry:i,compose:o,pipe:a,prop:u,propEq:s,parse:c,not:f,and:l,or:h,all:p,any:v,is:d,eq:m,val:y,invoke:g,pattern:_,isUndefined:R,isDefined:E,isNull:C,isNullOrUndefined:T,isFunction:P,isNumber:k,isString:O,isObject:x,isArray:V,isDate:I,isRegExp:j,isState:A,isInjectable:H,isPromise:D,Queue:Ht,maxLength:Se,padString:be,kebobString:Re,functionToString:Ee,fnToString:Ce,stringify:ke,beforeAfterSubstr:Oe,hostRegex:xe,stripLastPathElement:Ve,splitHash:Ie,splitQuery:je,splitEqual:Ae,trimHashVal:He,splitOnDelim:De,joinNeighborsR:qe,get Category(){return t.Category},Trace:Qt,trace:Kt,get DefType(){return t.DefType},Param:se,ParamTypes:Fe,StateParams:Ue,ParamType:ie,PathNode:ce,PathUtils:fe,resolvePolicies:pe,defaultResolvePolicy:le,Resolvable:he,NATIVE_INJECTOR_TOKEN:ye,ResolveContext:ge,resolvablesBuilder:Ke,StateBuilder:Ye,StateObject:$,StateMatcher:Ze,StateQueueManager:Xe,StateRegistry:tr,StateService:Mr,TargetState:Yt,get TransitionHookPhase(){return t.TransitionHookPhase},get TransitionHookScope(){return t.TransitionHookScope},HookBuilder:ne,matchState:te,RegisteredHook:ee,makeEvent:re,get RejectType(){return t.RejectType},Rejection:qt,Transition:$e,TransitionHook:Xt,TransitionEventType:qr,defaultTransOpts:Ur,TransitionService:Lr,UrlMatcher:nr,UrlMatcherFactory:ir,UrlRouter:sr,UrlRuleFactory:or,BaseUrlRule:ar,UrlService:gr,ViewService:fr,UIRouterGlobals:lr,UIRouter:wr,$q:Br,$injector:Jr,BaseLocationServices:en,HashLocationService:nn,MemoryLocationService:an,PushStateLocationService:sn,MemoryLocationConfig:cn,BrowserLocationConfig:fn,keyValsToObjectR:Qr,getParams:Kr,parseUrl:Yr,buildUrl:Zr,locationPluginFactory:Xr,servicesPlugin:ln,hashLocationPlugin:hn,pushStateLocationPlugin:pn,memoryLocationPlugin:vn,UIRouterPluginBase:dn});function yn(){var t=null;return function(e,r){return t=t||N.$injector.get("$templateFactory"),[new $n(e,r,t)]}}var gn=function(t,e){return t.reduce(function(t,r){return t||E(e[r])},!1)};function _n(t){if(!t.parent)return{};var e=["component","bindings","componentProvider"],r=["templateProvider","templateUrl","template","notify","async"].concat(["controller","controllerProvider","controllerAs","resolveAs"]),n=e.concat(r);if(E(t.views)&&gn(n,t))throw new Error("State '"+t.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+n.filter(function(e){return E(t[e])}).join(", "));var i={},o=t.views||{$default:ut(t,n)};return B(o,function(n,o){if(o=o||"$default",O(n)&&(n={component:n}),n=G({},n),gn(e,n)&&gn(r,n))throw new Error("Cannot combine: "+e.join("|")+" with: "+r.join("|")+" in stateview: '"+o+"@"+t.name+"'");n.resolveAs=n.resolveAs||"$resolve",n.$type="ng1",n.$context=t,n.$name=o;var a=fr.normalizeUIViewTarget(n.$context,n.$name);n.$uiViewName=a.uiViewName,n.$uiViewContextAnchor=a.uiViewContextAnchor,i[o]=n}),i}var wn=0,$n=function(){function t(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=wn++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}return t.prototype.load=function(){var t=this,e=N.$q,r=new ge(this.path),n=this.path.reduce(function(t,e){return G(t,e.paramValues)},{}),i={template:e.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:e.when(this.getController(r))};return e.all(i).then(function(e){return Kt.traceViewServiceEvent("Loaded",t),t.controller=e.controller,G(t,e.template),t})},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!H(e))return this.viewDecl.controller;var r=N.$injector.annotate(e),n=V(e)?kt(e):e;return new he("",n,r).get(t)},t}(),Sn=function(){function t(){var t=this;this._useHttp=n.version.minor<3,this.$get=["$http","$templateCache","$injector",function(e,r,n){return t.$templateRequest=n.has&&n.has("$templateRequest")&&n.get("$templateRequest"),t.$http=e,t.$templateCache=r,t}]}return t.prototype.useHttpService=function(t){this._useHttp=t},t.prototype.fromConfig=function(t,e,r){var n=function(t){return N.$q.when(t).then(function(t){return{template:t}})},i=function(t){return N.$q.when(t).then(function(t){return{component:t}})};return E(t.template)?n(this.fromString(t.template,e)):E(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):E(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):E(t.component)?i(t.component):E(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},t.prototype.fromString=function(t,e){return P(t)?t(e):t},t.prototype.fromUrl=function(t,e){return P(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},t.prototype.fromProvider=function(t,e,r){var n=N.$injector.annotate(t),i=V(t)?kt(t):t;return new he("",i,n).get(r)},t.prototype.fromComponentProvider=function(t,e,r){var n=N.$injector.annotate(t),i=V(t)?kt(t):t;return new he("",i,n).get(r)},t.prototype.makeComponentTemplate=function(t,e,r,i){i=i||{};var o=n.version.minor>=3?"::":"",a=function(t){var e=Re(t);return/^(x|data)-/.exec(e)?"x-"+e:e},u=function(t){var e=N.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(bn).reduce(yt,[])}(r).map(function(r){var n=r.name,u=r.type,s=a(n);if(t.attr(s)&&!i[n])return s+"='"+t.attr(s)+"'";var c=i[n]||n;if("@"===u)return s+"='{{"+o+"$resolve."+c+"}}'";if("&"===u){var f=e.getResolvable(c),l=f&&f.data,h=l&&N.$injector.annotate(l)||[];return s+"='$resolve."+c+(V(l)?"["+(l.length-1)+"]":"")+"("+h.join(",")+")'"}return s+"='"+o+"$resolve."+c+"'"}).join(" "),s=a(r);return"<"+s+" "+u+"></"+s+">"},t}();var bn=function(t){return x(t.bindToController)?Rn(t.bindToController):Rn(t.scope)},Rn=function(t){return Object.keys(t||{}).map(function(e){return[e,/^([=<@&])[?]?(.*)/.exec(t[e])]}).filter(function(t){return E(t)&&V(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},En=function(){function t(e,r){this.stateRegistry=e,this.stateService=r,Q(y(t.prototype),this,y(this))}return t.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},t.prototype.state=function(t,e){return x(t)?e=t:e.name=t,this.stateRegistry.register(e),this},t.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},t}(),Cn=function(t){return function(e,r){var n=e[t],i="onExit"===t?"from":"to";return n?function(t,e){var r=new ge(t.treeChanges(i)).subContext(e.$$state()),o=G(Mn(r),{$state$:e,$transition$:t});return N.$injector.invoke(n,this,o)}:void 0}},Tn=function(){function t(t){this._urlListeners=[],this.$locationProvider=t;var e=y(t);Q(e,this,e,["hashPrefix"])}return t.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},t.prototype.dispose=function(){},t.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return X(e._urlListeners)(t)}},t.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=x(t)?t.enabled:t)&&this.$sniffer.history},t.prototype.url=function(t,e,r){return void 0===e&&(e=!1),E(t)&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},t.prototype._runtimeServices=function(t,e,r,n){var i=this;this.$location=e,this.$sniffer=r,t.$on("$locationChangeSuccess",function(t){return i._urlListeners.forEach(function(e){return e(t)})});var o=y(e),a=y(n);Q(o,this,o,["replace","path","search","hash"]),Q(o,this,o,["port","protocol","host"]),Q(a,this,a,["baseHref"])},t}(),Pn=function(){function t(t){this._router=t,this._urlRouter=t.urlRouter}return t.injectableHandler=function(t,e){return function(r){return N.$injector.invoke(e,null,{$match:r,$stateParams:t.globals.params})}},t.prototype.$get=function(){var t=this._urlRouter;return t.update(!0),t.interceptDeferred||t.listen(),t},t.prototype.rule=function(t){var e=this;if(!P(t))throw new Error("'rule' must be a function");var r=new ar(function(){return t(N.$injector,e._router.locationService)},z);return this._urlRouter.rule(r),this},t.prototype.otherwise=function(t){var e=this,r=this._urlRouter;if(O(t))r.otherwise(t);else{if(!P(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(N.$injector,e._router.locationService)})}return this},t.prototype.when=function(e,r){return(V(r)||P(r))&&(r=t.injectableHandler(this._router,r)),this._urlRouter.when(e,r),this},t.prototype.deferIntercept=function(t){this._urlRouter.deferIntercept(t)},t}();n.module("ui.router.angular1",[]);var kn=n.module("ui.router.init",["ng"]),On=n.module("ui.router.util",["ui.router.init"]),xn=n.module("ui.router.router",["ui.router.util"]),Vn=n.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),In=n.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),jn=(n.module("ui.router.compat",["ui.router"]),null);function An(t){(jn=this.router=new wr).stateProvider=new En(jn.stateRegistry,jn.stateService),jn.stateRegistry.decorator("views",_n),jn.stateRegistry.decorator("onExit",Cn("onExit")),jn.stateRegistry.decorator("onRetain",Cn("onRetain")),jn.stateRegistry.decorator("onEnter",Cn("onEnter")),jn.viewService._pluginapi._viewConfigFactory("ng1",yn());var e=jn.locationService=jn.locationConfig=new Tn(t);function r(t,r,n,i,o,a){return e._runtimeServices(i,t,n,r),delete jn.router,delete jn.$get,jn}return Tn.monkeyPatchPathParameterType(jn),jn.router=jn,jn.$get=r,r.$inject=["$location","$browser","$sniffer","$rootScope","$http","$templateCache"],jn}An.$inject=["$locationProvider"];var Hn=function(t){return["$uiRouterProvider",function(e){var r=e.router[t];return r.$get=function(){return r},r}]};function Dn(t,e,r){N.$injector=t,N.$q=e,r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(yt,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(e){return e.deps=t.annotate(e.resolveFn,t.strictDi)})}Dn.$inject=["$injector","$q","$uiRouter"];function qn(t){t.$watch(function(){Kt.approximateDigests++})}qn.$inject=["$rootScope"],kn.provider("$uiRouter",An),xn.provider("$urlRouter",["$uiRouterProvider",function(t){return t.urlRouterProvider=new Pn(t)}]),On.provider("$urlService",Hn("urlService")),On.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return jn.urlMatcherFactory}]),On.provider("$templateFactory",function(){return new Sn}),Vn.provider("$stateRegistry",Hn("stateRegistry")),Vn.provider("$uiRouterGlobals",Hn("globals")),Vn.provider("$transitions",Hn("transitionService")),Vn.provider("$state",["$uiRouterProvider",function(){return G(jn.stateProvider,{$get:function(){return jn.stateService}})}]),Vn.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),In.factory("$view",function(){return jn.viewService}),In.service("$trace",function(){return Kt}),In.run(qn),On.run(["$urlMatcherFactory",function(t){}]),Vn.run(["$state",function(t){}]),xn.run(["$urlRouter",function(t){}]),kn.run(Dn);var Nn,Fn,Un,Ln,Mn=function(t){return t.getTokens().filter(O).map(function(e){var r=t.getResolvable(e);return[e,"NOWAIT"===t.getPolicy(r).async?r.promise:r.data]}).reduce(Pt,{})};function Bn(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function Gn(t){var e=t.parent().inheritedData("$uiView"),r=c("$cfg.path")(e);return r?kt(r).state.name:void 0}function Wn(t,e,r){var n=r.uiState||t.current.name,i=G(function(t,e){return{relative:Gn(t)||e.$current,inherit:!0,source:"sref"}}(e,t),r.uiStateOpts||{}),o=t.href(n,r.uiStateParams,i);return{uiState:n,uiStateParams:r.uiStateParams,uiStateOpts:i,href:o}}function zn(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Jn(t,e,r,n,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||t.attr("target"))){var s=r(function(){t.attr("disabled")||e.go(u.uiState,u.uiStateParams,u.uiStateOpts)});o.preventDefault();var c=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){c--<=0&&r.cancel(s)}}}}function Qn(t,e,r,n){var i;n&&(i=n.events),V(i)||(i=["click"]);for(var o=t.on?"on":"bind",a=0,u=i;a<u.length;a++){var s=u[a];t[o](s,r)}e.$on("$destroy",function(){for(var e=t.off?"off":"unbind",n=0,o=i;n<o.length;n++){var a=o[n];t[e](a,r)}})}function Kn(t){var e=function(e,r,n){return t.is(e,r,n)};return e.$stateful=!0,e}function Yn(t){var e=function(e,r,n){return t.includes(e,r,n)};return e.$stateful=!0,e}function Zn(t,e,r,i,o,a){var u=c("viewDecl.controllerAs"),s=c("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return i.empty(),function(i,c){var f=c.data("$uiView");if(!f)return c.html(a),void t(c.contents())(i);var l=f.$cfg||{viewDecl:{},getTemplate:J},h=l.path&&new ge(l.path);c.html(l.getTemplate(c,h)||a),Kt.traceUIViewFill(f.$uiView,c.html());var p=t(c.contents()),v=l.controller,d=u(l),m=s(l),y=h&&Mn(h);if(i[m]=y,v){var g=e(v,G({},y,{$scope:i,$element:c}));d&&(i[d]=g,i[d][m]=y),c.data("$ngControllerController",g),c.children().data("$ngControllerController",g),ei(o,r,g,i,l)}if(O(l.viewDecl.component))var _=l.viewDecl.component,w=Re(_),$=new RegExp("^(x-|data-)?"+w+"$","i"),S=i.$watch(function(){var t=[].slice.call(c[0].children).filter(function(t){return t&&t.tagName&&$.exec(t.tagName)});return t&&n.element(t).data("$"+_+"Controller")},function(t){t&&(ei(o,r,t,i,l),S())});p(i)}}}}Nn=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){var u,s=zn(i),c=a[1]||a[0],f=null,l={},h=function(){return Wn(r,i,l)},p=Bn(o.uiSref);function v(){var t=h();f&&f(),c&&(f=c.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(s.attr,t.href)}l.uiState=p.state,l.uiStateOpts=o.uiSrefOpts?n.$eval(o.uiSrefOpts):{},p.paramExpr&&(n.$watch(p.paramExpr,function(t){l.uiStateParams=G({},t),v()},!0),l.uiStateParams=G({},n.$eval(p.paramExpr))),v(),n.$on("$destroy",t.stateRegistry.onStatesChanged(v)),n.$on("$destroy",t.transitionService.onSuccess({},v)),s.clickable&&(u=Jn(i,r,e,s,h),Qn(i,n,u,l.uiStateOpts))}}}],Fn=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){var u,s=zn(i),c=a[1]||a[0],f=null,l={},h=function(){return Wn(r,i,l)},p=["uiState","uiStateParams","uiStateOpts"],v=p.reduce(function(t,e){return t[e]=J,t},{});function d(){var t=h();f&&f(),c&&(f=c.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(s.attr,t.href)}p.forEach(function(t){l[t]=o[t]?n.$eval(o[t]):null,o.$observe(t,function(e){v[t](),v[t]=n.$watch(e,function(e){l[t]=e,d()},!0)})}),d(),n.$on("$destroy",t.stateRegistry.onStatesChanged(d)),n.$on("$destroy",t.transitionService.onSuccess({},d)),s.clickable&&(u=Jn(i,r,e,s,h),Qn(i,n,u,l.uiStateOpts))}}}],Un=["$state","$stateParams","$interpolate","$uiRouter",function(t,e,r,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,i,o){var a,u,s,c,f,l=[];a=r(o.uiSrefActiveEq||"",!1)(e);try{u=e.$eval(o.uiSrefActive)}catch(t){}function h(t){t.promise.then(m,J)}function p(){v(u)}function v(t){x(t)&&(l=[],B(t,function(t,r){var n=function(t,r){var n=Bn(t);d(n.state,e.$eval(n.paramExpr),r)};O(t)?n(t,r):V(t)&&B(t,function(t){n(t,r)})}))}function d(e,r,n){var o={state:t.get(e,Gn(i))||{name:e},params:r,activeClass:n};return l.push(o),function(){X(l)(o)}}function m(){var r=function(t){return t.split(/\s/).filter(z)},n=function(t){return t.map(function(t){return t.activeClass}).map(r).reduce(yt,[])},o=n(l).concat(r(a)).reduce(wt,[]),u=n(l.filter(function(e){return t.includes(e.state.name,e.params)})),s=!!l.filter(function(e){return t.is(e.state.name,e.params)}).length?r(a):[],c=u.concat(s).reduce(wt,[]),f=o.filter(function(t){return!Y(c,t)});e.$evalAsync(function(){c.forEach(function(t){return i.addClass(t)}),f.forEach(function(t){return i.removeClass(t)})})}v(u=u||r(o.uiSrefActive||"",!1)(e)),this.$$addStateInfo=function(t,e){if(!(x(u)&&l.length>0)){var r=d(t,e,u);return m(),r}},e.$on("$destroy",(s=n.stateRegistry.onStatesChanged(p),c=n.transitionService.onStart({},h),f=e.$on("$stateChangeSuccess",m),function(){s(),c(),f()})),n.globals.transition&&h(n.globals.transition),m()}]}}],n.module("ui.router.state").directive("uiSref",Nn).directive("uiSrefActive",Un).directive("uiSrefActiveEq",Un).directive("uiState",Fn),Kn.$inject=["$state"],Yn.$inject=["$state"],n.module("ui.router.state").filter("isState",Kn).filter("includedByState",Yn),Ln=["$view","$animate","$uiViewScroll","$interpolate","$q",function(t,e,r,i,o){var a={$cfg:{viewDecl:{$context:t._pluginapi._rootViewContext()}},$uiView:{}},u={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(s,f,l){return function(s,f,h){var p,v,d,m,y,g=h.onload||"",_=h.autoscroll,w={enter:function(t,r,i){n.version.minor>2?e.enter(t,null,r).then(i):e.enter(t,null,r,i)},leave:function(t,r){n.version.minor>2?e.leave(t).then(r):e.leave(t,r)}},$=f.inheritedData("$uiView")||a,S=i(h.uiView||h.name||"")(s)||"$default",b={$type:"ng1",id:u.count++,name:S,fqn:$.$uiView.fqn?$.$uiView.fqn+"."+S:S,config:null,configUpdated:function(t){if(t&&!(t instanceof $n))return;if(e=m,r=t,e===r)return;var e,r;Kt.traceUIViewConfigUpdated(b,t&&t.viewDecl&&t.viewDecl.$context),m=t,R(t)},get creationContext(){var t=c("$cfg.viewDecl.$context")($),e=c("$uiView.creationContext")($);return t||e}};function R(t){var e=s.$new(),n=o.defer(),i=o.defer(),a={$cfg:t,$uiView:b},u={$animEnter:n.promise,$animLeave:i.promise,$$animLeave:i};e.$emit("$viewContentLoading",S);var c=l(e,function(t){t.data("$uiViewAnim",u),t.data("$uiView",a),w.enter(t,f,function(){n.resolve(),d&&d.$emit("$viewContentAnimationEnded"),(E(_)&&!_||s.$eval(_))&&r(t)}),function(){if(p&&(Kt.traceUIViewEvent("Removing (previous) el",p.data("$uiView")),p.remove(),p=null),d&&(Kt.traceUIViewEvent("Destroying scope",b),d.$destroy(),d=null),v){var t=v.data("$uiViewAnim");Kt.traceUIViewEvent("Animate out",t),w.leave(v,function(){t.$$animLeave.resolve(),p=null}),p=v,v=null}}()});v=c,(d=e).$emit("$viewContentLoaded",t||m),d.$eval(g)}Kt.traceUIViewEvent("Linking",b),f.data("$uiView",{$uiView:b}),R(),y=t.registerUIView(b),s.$on("$destroy",function(){Kt.traceUIViewEvent("Destroying/Unregistering",b),y()})}}};return u}],Zn.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var Xn="function"==typeof n.module("ui.router").component,ti=0;function ei(t,e,r,n,i){!P(r.$onInit)||i.viewDecl.component&&Xn||r.$onInit();var o=kt(i.path).state.self,a={bind:r};if(P(r.uiOnParamsChanged)){var u=new ge(i.path).getResolvable("$transition$").data;n.$on("$destroy",e.onSuccess({},function(t){if(t!==u&&-1===t.exiting().indexOf(o)){var e=t.params("to"),n=t.params("from"),i=function(t){return t.paramSchema},a=t.treeChanges("to").map(i).reduce(yt,[]),s=t.treeChanges("from").map(i).reduce(yt,[]),c=a.filter(function(t){var r=s.indexOf(t);return-1===r||!s[r].type.equals(e[t.id],n[t.id])});if(c.length){var f=c.map(function(t){return t.id}),l=ft(e,function(t,e){return-1!==f.indexOf(e)});r.uiOnParamsChanged(l,t)}}},a))}if(P(r.uiCanExit)){var s=ti++,c=function(t){return!!t&&(t._uiCanExitIds&&!0===t._uiCanExitIds[s]||c(t.redirectedFrom()))},f={exiting:o.name};n.$on("$destroy",e.onBefore(f,function(e){var n,i=e._uiCanExitIds=e._uiCanExitIds||{};return c(e)||(n=t.when(r.uiCanExit(e))).then(function(t){return i[s]=!1!==t}),n},a))}}n.module("ui.router.state").directive("uiView",Ln),n.module("ui.router.state").directive("uiView",Zn),n.module("ui.router.state").provider("$uiViewScroll",function(){var t=!1;this.useAnchorScroll=function(){t=!0},this.$get=["$anchorScroll","$timeout",function(e,r){return t?e:function(t){return r(function(){t[0].scrollIntoView()},0,!1)}}]});t.default="ui.router",t.core=mn,t.watchDigests=qn,t.getLocals=Mn,t.getNg1ViewConfigFactory=yn,t.ng1ViewsBuilder=_n,t.Ng1ViewConfig=$n,t.StateProvider=En,t.UrlRouterProvider=Pn,t.root=F,t.fromJson=L,t.toJson=M,t.forEach=B,t.extend=G,t.equals=W,t.identity=z,t.noop=J,t.createProxyFunctions=Q,t.inherit=K,t.inArray=Y,t._inArray=Z,t.removeFrom=X,t._removeFrom=tt,t.pushTo=et,t._pushTo=rt,t.deregAll=nt,t.defaults=it,t.mergeR=ot,t.ancestors=at,t.pick=ut,t.omit=st,t.pluck=ct,t.filter=ft,t.find=lt,t.mapObj=ht,t.map=pt,t.values=vt,t.allTrueR=dt,t.anyTrueR=mt,t.unnestR=yt,t.flattenR=gt,t.pushR=_t,t.uniqR=wt,t.unnest=$t,t.flatten=St,t.assertPredicate=bt,t.assertMap=Rt,t.assertFn=Et,t.pairs=Ct,t.arrayTuples=Tt,t.applyPairs=Pt,t.tail=kt,t.copy=Ot,t._extend=xt,t.silenceUncaughtInPromise=jt,t.silentRejection=At,t.notImplemented=q,t.services=N,t.Glob=w,t.curry=i,t.compose=o,t.pipe=a,t.prop=u,t.propEq=s,t.parse=c,t.not=f,t.and=l,t.or=h,t.all=p,t.any=v,t.is=d,t.eq=m,t.val=y,t.invoke=g,t.pattern=_,t.isUndefined=R,t.isDefined=E,t.isNull=C,t.isNullOrUndefined=T,t.isFunction=P,t.isNumber=k,t.isString=O,t.isObject=x,t.isArray=V,t.isDate=I,t.isRegExp=j,t.isState=A,t.isInjectable=H,t.isPromise=D,t.Queue=Ht,t.maxLength=Se,t.padString=be,t.kebobString=Re,t.functionToString=Ee,t.fnToString=Ce,t.stringify=ke,t.beforeAfterSubstr=Oe,t.hostRegex=xe,t.stripLastPathElement=Ve,t.splitHash=Ie,t.splitQuery=je,t.splitEqual=Ae,t.trimHashVal=He,t.splitOnDelim=De,t.joinNeighborsR=qe,t.Trace=Qt,t.trace=Kt,t.Param=se,t.ParamTypes=Fe,t.StateParams=Ue,t.ParamType=ie,t.PathNode=ce,t.PathUtils=fe,t.resolvePolicies=pe,t.defaultResolvePolicy=le,t.Resolvable=he,t.NATIVE_INJECTOR_TOKEN=ye,t.ResolveContext=ge,t.resolvablesBuilder=Ke,t.StateBuilder=Ye,t.StateObject=$,t.StateMatcher=Ze,t.StateQueueManager=Xe,t.StateRegistry=tr,t.StateService=Mr,t.TargetState=Yt,t.HookBuilder=ne,t.matchState=te,t.RegisteredHook=ee,t.makeEvent=re,t.Rejection=qt,t.Transition=$e,t.TransitionHook=Xt,t.TransitionEventType=qr,t.defaultTransOpts=Ur,t.TransitionService=Lr,t.UrlMatcher=nr,t.UrlMatcherFactory=ir,t.UrlRouter=sr,t.UrlRuleFactory=or,t.BaseUrlRule=ar,t.UrlService=gr,t.ViewService=fr,t.UIRouterGlobals=lr,t.UIRouter=wr,t.$q=Br,t.$injector=Jr,t.BaseLocationServices=en,t.HashLocationService=nn,t.MemoryLocationService=an,t.PushStateLocationService=sn,t.MemoryLocationConfig=cn,t.BrowserLocationConfig=fn,t.keyValsToObjectR=Qr,t.getParams=Kr,t.parseUrl=Yr,t.buildUrl=Zr,t.locationPluginFactory=Xr,t.servicesPlugin=ln,t.hashLocationPlugin=hn,t.pushStateLocationPlugin=pn,t.memoryLocationPlugin=vn,t.UIRouterPluginBase=dn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=angular-ui-router.min.js.map

var app = angular.module('MyApp', ['ngStorage', 'ui.router', 'ngProgress', 'angularUtils.directives.dirPagination', 'uiSlider', 'rzModule', 'angucomplete-alt', 'ngCookies']);//, 'ngPatternRestrict'

var commonUrl = 'https://api.flightsofares.com/api/';
var cdnUrl = '';
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {

    $qProvider.errorOnUnhandledRejections(false);
    $stateProvider.state("home", {
        url: "/",
        templateUrl: "/Templates/home.html",
        controller: "HomeController",
        controllerAs: "homeCtrl"
    }).state("main", {
        url: "/FlightResult.html",
        templateUrl: "/Templates/result.html",
        controller: "MainController",
        controllerAs: "mainCtrl"
    }).state("booking", {
        url: "/Payment.html",
        templateUrl: "/Templates/payment.html",
        controller: "BookingController",
        controllerAs: "bookingCtrl",
        params: {
            BookingDetail: null
        }
    }).state("confirmation", {
        url: "/Confirmation.html",
        templateUrl: "/Templates/confirmation.html",
        controller: "ConfirmationController",
        controllerAs: "confirmationCtrl",
        params: {
            ConfirmationDetail: null
        }
    });
    $locationProvider.html5Mode(true);
});

app.factory('UserService', function ($http) {

    var service = {
        convert: convert,
        saveResult: SaveResult,
        getResult: GetResult
    };
    return service;

    function convert(json) {
        return '?' +
            Object.keys(json).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(json[key]);
            }).join('&');
    };
    function SaveResult(results) {
        var savereq = {
            method: 'POST',
            url: '/api/Flightapi/SaveResult',
            headers: {
                contentType: 'application/json; charset=utf-8'
            },
            data: results
        };
        $http(savereq).then(function (response) { console.log(true); }, function (reason) {
        });
    }
    function GetResult(ID) {
        var getreq = {
            method: 'GET',
            url: '/api/Flightapi/FareMatchRQ?ID=' + ID,
            headers: {
                contentType: 'application/json; charset=utf-8'
            }
        };
        return $http(getreq).then(function (result) {
            return result.data;
        });
    }

});

app.controller('HomeController', function ($scope, $http, $window, $timeout, $sce, $state, $filter, ngProgressFactory, $location, $timeout, $interval, $cookies, UserService) {
    $scope.AirportsDetailedList = [];
    $scope.single = false;
    $scope.round = true;
    $scope.searchCookie = [];
    $scope.SearchCritaria = {
        WebSite: "Travelocompare",
        MetaName: "",
        Origin: null,
        SelectedOrigin: function (selected) {
            if (selected) {
                $scope.SearchCritaria.Origin = selected.originalObject;
            } else {
                $scope.SearchCritaria.Origin = null;
            }
        },
        Destination: null,
        SelectedDestination: function (selected) {
            if (selected) {
                $scope.SearchCritaria.Destination = selected.originalObject;
            } else {
                $scope.SearchCritaria.Destination = null;
            }
        },
        DepartureDate: "",
        ReturnDate: "",
        Class: 1,
        Direct: "0",
        Segments: {
            OutBound: [
                {
                    Origin: "MIA",
                    Destination: "NYC",
                    Date: new Date(),
                }
            ],
            InBound: {
                Origin: "NYC",
                Destination: "MIA",
                Date: new Date(),
            }
        },
        Cabin: {
            Class: 1
        },
        PaxDetail: {
            NoAdult: 1,
            NoSenior: 0,
            NoChild: 0,
            NoInfant: 0,
            NoInfantS: 0
        },
        Skey: null
    };
    $scope.clearInput = function (id) {
        //if (id) {
        //     $scope.$broadcast('angucomplete-alt:clearInput', id);           
        //}
        //else {
        //    $scope.$broadcast('angucomplete-alt:clearInput');
        //}
        $("#" + id + "_value").select();
    }
    $scope.hideBox = function () {
        $('.mobile_error_overlay').addClass('ng-hide');
    };

    $("div.mobile_overlay").click(function () {
        $("#tripParent").hide();
        $scope.hideTravelerBox();
        $($('div.class-type>ul>li')[0]).parent().parent().hide();
        $(".mobile_overlay").css("height", "0");
    });

    $scope.traveltype = function (ttype) {
        $('.traveltype').removeClass('fa fa-check');
        $scope.triptypetab = parseInt(ttype);
        if (ttype == 2) {
            $('input[name=retDt]').attr('disabled', true);
            $($('input[name=retDt]').parent()).addClass('roundtrip');
            $($('input[name=depDt]').parent()).addClass('oneway');

            $(".single").show();
            $('#oneway').addClass('active');
            $('#roundtrip').removeClass('active');

            $('#traveltype1').addClass('fa fa-check');
            $('.trip').html('One way' + '<i class="arrow-icon bi bi-chevron-down"></i>');
            //$('#Jtype').val('oneway');
            $('.one_outer').fadeOut("slow");
        }
        else if (ttype == 1) {
            $('input[name=retDt]').attr('disabled', false);
            $($('input[name=retDt]').parent()).removeClass('roundtrip');
            $($('input[name=depDt]').parent()).removeClass('oneway');
            $(".single").hide();
            $('#oneway').removeClass('active');
            $('#roundtrip').addClass('active');
            $('.trip').html('Round trip' + '<i class="arrow-icon bi bi-chevron-down"></i>');

            $('#traveltype2').addClass('fa fa-check');
            //$('#Jtype').val('roundtrip');
            $('.one_outer').fadeOut("slow");
        }
        else {
            //$('#Jtype').val('0');
            $('.trip').html('One way' + '<i class="arrow-icon bi bi-chevron-down"></i>');
        }
        $("#tripParent").hide();
        $(".mobile_overlay").css("height", "0");
    }

    $scope.addPassenger = function (id) {
        var AdultsRT = $('#AdultsRT').text();
        var ChildrenRT = $('#ChildrenRT').text();
        var InfantsRT = $('#InfantsRT').text();
        var InfantsRTonSeat = $('#InfantsRTonSeat').text();
        var total = +AdultsRT + +ChildrenRT + +InfantsRT + +InfantsRTonSeat;
        if (total < 9) {
            if (id == 'InfantsRT' && InfantsRT < AdultsRT) {
                $("#InfantsRT").text(+InfantsRT + 1);
                $scope.SearchCritaria.PaxDetail.NoInfant = (+InfantsRT + 1);
                //$("#InfantsRT_count").val(+InfantsRT + 1);
            }
            if (id == 'InfantsRTonSeat' && InfantsRTonSeat < AdultsRT) {
                $("#InfantsRTonSeat").text(+InfantsRTonSeat + 1);
                $scope.SearchCritaria.PaxDetail.NoInfantS = (+InfantsRTonSeat + 1);
                // $("#InfantsRTonSeat_count").val(+InfantsRTonSeat + 1);
            }
            if (id == 'AdultsRT') {
                $("#AdultsRT").text(+AdultsRT + 1);
                $scope.SearchCritaria.PaxDetail.NoAdult = (+AdultsRT + 1);
                //$("#AdultsRT_count").val(+AdultsRT + 1);
            }
            if (id == 'ChildrenRT') {
                $("#ChildrenRT").text(+ChildrenRT + 1);
                $scope.finalchild = (+ChildrenRT + 1);
                $scope.SearchCritaria.PaxDetail.NoChild = (+ChildrenRT + 1);
                // $("#ChildrenRT_count").val(+ChildrenRT + 1);
            }
            $($("#" + id).siblings('a.minus')).removeClass('disable');
            $('div.traveler_action_button a.done_Btn.disable').removeClass('disable');
            $scope.getTotalTraveller();
        }
        else {
            return false;
        }

    }
    $scope.removePassenger = function (id) {
        var AdultsRT = $('#AdultsRT').text();
        var ChildrenRT = $('#ChildrenRT').text();
        var InfantsRT = $('#InfantsRT').text();
        var InfantsRTonSeat = $('#InfantsRTonSeat').text();

        var total = +AdultsRT + +ChildrenRT + +InfantsRT + +InfantsRTonSeat;

        var infantvalue = $("#" + id).text();
        if ((id == 'AdultsRT') && (AdultsRT > 1)) {
            $("#" + id).text(infantvalue - 1);
            $scope.SearchCritaria.PaxDetail.NoAdult = (infantvalue - 1);
            //$("#" + id + "_count").val(infantvalue - 1);
        }

        if (id != 'AdultsRT') {
            if (infantvalue > 0) {
                $("#" + id).text(infantvalue - 1);
                if (id == 'ChildrenRT') {
                    $scope.finalchild = (infantvalue - 1);
                    $scope.SearchCritaria.PaxDetail.NoChild = (infantvalue - 1);
                } else if (id == 'InfantsRT') {
                    $scope.SearchCritaria.PaxDetail.Infant = (infantvalue - 1);
                } else if (id == 'InfantsRTonSeat') {
                    $scope.SearchCritaria.PaxDetail.InfantS = (infantvalue - 1);
                }
                // $("#" + id + "_count").val(infantvalue - 1);
                if (infantvalue == 1) {
                    $($("#" + id).siblings('a.minus')).addClass('disable');
                }
            }
        }
        $('div.traveler_action_button a.done_Btn.disable').removeClass('disable');
        $scope.getTotalTraveller();
    }

    $scope.hideTravelerBox = function () {
        $('div.mobile_travelerBox').hide();
        $(".mobile_overlay").css("height", "0");
        $scope.getTotalTraveller();
    }
    $scope.getTotalTraveller = function () {
        var AdultsRT = $('#AdultsRT').text();
        var ChildrenRT = $('#ChildrenRT').text();
        var InfantsRT = $('#InfantsRT').text();
        var InfantsRTonSeat = $('#InfantsRTonSeat').text();

        var total = +AdultsRT + +ChildrenRT + +InfantsRT + +InfantsRTonSeat;
        //  $('.travelerclick').val(total + ' Traveler' + ',' + $("input:radio[name=classtype]:checked").attr('data-text'));
        $("#trvltext").text(total);
    }

    $scope.ResetTravelerBox = function () {
        $("#AdultsRT").text(1);
        $("#ChildrenRT").text(0);
        $("#InfantsRT").text(0);
        $("#InfantsRTonSeat").text(0);
        $scope.SearchCritaria.PaxDetail.NoAdult = 1;
        $scope.SearchCritaria.PaxDetail.NoChild = 0;
        $scope.finalchild = 0;
        $scope.SearchCritaria.PaxDetail.NoInfant = 0;
        $scope.SearchCritaria.PaxDetail.NoInfantS = 0;
        $('div.traveler_action_button a.done_Btn').first().addClass('disable');

        $scope.getTotalTraveller();
    }
    $scope.classTypeChanged = function (val, i) {
        $('div.class-type>ul>li').removeClass('active');
        $($('div.class-type>ul>li')[i]).addClass('active');
        $('div.ct').html($('div.class-type>ul>li')[i].innerText + '<i class="arrow-icon bi bi-chevron-down"></i>');
        $($('div.class-type>ul>li')[i]).parent().parent().hide();
        $(".mobile_overlay").css("height", "0");
        $("#className").val(val);
        $scope.SearchCritaria.Cabin.Class = parseInt(val, 10);

    };

    $scope.isNullOrEmpty = function (value) {
        return (!value || value == undefined || value == "" || value.length == 0);
    }
    $scope.ToDate = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }
        var date = new Date(n.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
        // var date = new Date(n.replace(/-/g,' '))
        return date;
    };
    $scope.triptypetab = 1;
    $scope.setTripTypeTab = function (newTab) {
        $scope.triptypetab = newTab;
        if (newTab === 2) {
            $('input[name=retDt]').attr('disabled', true);
            $($('input[name=retDt]').parent()).addClass('roundtrip');
            $($('input[name=depDt]').parent()).addClass('oneway');
            $('#paxbox').removeClass('paxboxpos');
            // $scope.SearchCritaria.ReturnDate = null;
        } else {
            $('input[name=retDt]').attr('disabled', false);
            $($('input[name=retDt]').parent()).removeClass('roundtrip');
            $($('input[name=depDt]').parent()).removeClass('oneway');
            $('#paxbox').removeClass('paxboxpos');

        }
    };
    $scope.istriptypeSet = function (tabNum) {
        return $scope.triptypetab === tabNum;
    };
    $scope.ToFloat = function (n) {
        return parseFloat(n);
    }
    $scope.finalchild = 0;
    $scope.morepax = false;
    $scope.adtchd = false;
    // $scope.Ismob = false;

    $scope.incrementA = function () {
        if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) < 9) {
            $scope.SearchCritaria.PaxDetail.NoAdult++;
            $scope.morepax = false;
        } else {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        }

    };
    $scope.decrementA = function () {
        if ($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) > 1) {
            // if (!$scope.morepax) {
            if (parseFloat($scope.SearchCritaria.PaxDetail.NoAdult) == parseFloat($scope.SearchCritaria.PaxDetail.NoInfant)) {
                $scope.SearchCritaria.PaxDetail.NoInfant--;
            }
            if (parseFloat($scope.SearchCritaria.PaxDetail.NoAdult) == parseFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) {
                $scope.SearchCritaria.PaxDetail.NoInfantS--;
            }
            $scope.SearchCritaria.PaxDetail.NoAdult--;

            //}
            $scope.morepax = false;
            $scope.adtchd = false;
        }
    };
    $scope.incrementS = function () {
        if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) < 9) {
            $scope.SearchCritaria.PaxDetail.NoSenior++;
            $scope.morepax = false;
        } else {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        }

    };
    $scope.decrementS = function () {
        if ($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) > 0) {
            // if (!$scope.morepax) {
            $scope.SearchCritaria.PaxDetail.NoSenior--;
            // }
            $scope.morepax = false;
            $scope.adtchd = false;
        }
    };
    $scope.incrementC = function () {
        // $scope.FlightSearchRQ.PaxDetail.NoChild++;
        if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) < 9) {
            $scope.finalchild++;
            $scope.morepax = false;
        }
        else {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        }
    };
    $scope.decrementC = function () {
        //$scope.FlightSearchRQ.PaxDetail.NoChild--;        
        if ($scope.finalchild > 0) {
            //if (!$scope.morepax) {
            $scope.finalchild--;
            //}
            $scope.morepax = false;
            $scope.adtchd = false;
        }
    };
    $scope.incrementI = function () {
        if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) < $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult)) && ($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) < 9) {
            $scope.SearchCritaria.PaxDetail.NoInfant++;
            $scope.morepax = false;
        } else if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) == 9) {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        } else {
            $scope.adtchd = true;
            $timeout(function () { $scope.adtchd = false }, 3000);
        }

    };
    $scope.decrementI = function () {
        if ($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) > 0) {
            //if (!$scope.morepax && !$scope.adtchd) {
            $scope.SearchCritaria.PaxDetail.NoInfant--;
            //} else{$scope.adtchd = false; }
            $scope.adtchd = false;
            $scope.morepax = false;
        }

    };
    $scope.incrementIS = function () {
        if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS) < $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult)) && ($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) < 9) {
            $scope.SearchCritaria.PaxDetail.NoInfantS++;
            $scope.morepax = false;
        }
        else if (($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoSenior) + $scope.ToFloat($scope.finalchild) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) + $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) == 9) {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        } else {
            $scope.adtchd = true;
            $timeout(function () { $scope.adtchd = false }, 3000);
        }
    };
    $scope.decrementIS = function () {
        if ($scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS) > 0) {
            //  if (!$scope.morepax && !$scope.adtchd) {
            $scope.SearchCritaria.PaxDetail.NoInfantS--;
            //} else { $scope.adtchd = false; }
            $scope.adtchd = false;
            $scope.morepax = false;
        }
    };
    $scope.NghideModel = function () {
        //var tot = $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) + ($scope.finalchild != undefined ? $scope.ToFloat($scope.finalchild) : 0) + ($scope.SearchCritaria.PaxDetail.NoInfant != undefined ? $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) : 0) + ($scope.SearchCritaria.PaxDetail.NoInfantS != undefined ? $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS) : 0);
        //$('#btm_clk').val(tot + (tot > 1 ? " Travelers," : " Traveler,") + $filter('ClassType')($scope.SearchCritaria.Cabin.Class));
        $scope.morepax = false;
        $scope.adtchd = false;
    };
    $scope.validOrg = true;
    $scope.validDest = true;
    $scope.validDate = true;
    $scope.IsmobileView = false;
    $scope.searchOrgDest = null;
    var loadRequest = {
        method: 'GET',
       // url: cdnUrl + '/airportsdetails/list',
        //url: '/AirportsDetails/List',
		url: '/airports.json',
        headers: {
            contentType: 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }
    };

    $scope.loadData = function () {
        if ($window.innerWidth > 750) {
            $('#mob_desk').val(0);
            //  $scope.Ismob = false;
        } else {
            $scope.IsmobileView = true;
            $('#mob_desk').val(1);
            //$scope.Ismob = true;
        }
        //if ($cookies.getObject('_search2') != null && $cookies.getObject('_search2') != undefined) {
        //    $scope.searchCookie.push($cookies.getObject('_search2').val);
        //}
        //if ($cookies.getObject('_search1') != null && $cookies.getObject('_search1') != undefined) {
        //    $scope.searchCookie.push($cookies.getObject('_search1').val);
        //}
        //if ($cookies.getObject('_search') != null && $cookies.getObject('_search') != undefined) {
        //    $scope.searchCookie.push($cookies.getObject('_search').val);
        //}    
        if (getCookie('_search2') != null && getCookie('_search2') != undefined) {
            $scope.searchCookie.push(JSON.parse(getCookie('_search2')).val);
        }
        if (getCookie('_search1') != null && getCookie('_search1') != undefined) {
            $scope.searchCookie.push(JSON.parse(getCookie('_search1')).val);
        }
        if (getCookie('_search') != null && getCookie('_search') != undefined) {
            $scope.searchCookie.push(JSON.parse(getCookie('_search')).val);
        }
        if (window.localStorage.getItem("searchOrgDest") != undefined && window.localStorage.getItem("searchOrgDest") != null) {
            $scope.searchOrgDest = JSON.parse(window.localStorage.getItem("searchOrgDest"));

        }

        if ($scope.searchCookie.length > 0 && $scope.searchOrgDest != null && ($('input[name=DestCode]').val() == undefined || $('input[name=DestCode]').val() == "")) {
            if ($scope.searchCookie[0].org != null && $scope.searchCookie[0].org != undefined) {
                $scope.SearchCritaria.Origin = $scope.searchOrgDest.org;
                //setTimeout(function () {
                //    $("#ex1_value").addClass('input_clear');
                //    $("#ex1_value").addClass('x');
                //    $("input[name=org1]").addClass('input_clear');
                //    $("input[name=org1]").addClass('x');
                //}, 500);

            }
            if ($scope.searchCookie[0].dest != null && $scope.searchCookie[0].dest != undefined) {
                $scope.SearchCritaria.Destination = $scope.searchOrgDest.dest;
                //setTimeout(function () {
                //    $("#ex2_value").addClass('input_clear');
                //    $("#ex2_value").addClass('x');
                //    $("input[name=dest1]").addClass('input_clear');
                //    $("input[name=dest1]").addClass('x');
                //}, 500);
            }
            $scope.SearchCritaria.DepartureDate = $scope.searchCookie[0].depDt;
            if ($scope.searchCookie[0].retDt != null && $scope.searchCookie[0].retDt != undefined) {
                $scope.SearchCritaria.ReturnDate = $scope.searchCookie[0].retDt;
                $scope.setTripTypeTab(1);
                $scope.traveltype(1);
                $scope.single = false;
                $scope.round = true;
            } else {
                $scope.setTripTypeTab(2);
                $scope.traveltype(2);
                $scope.single = true;
                $scope.round = false;
            }


            setTimeout(function () {
                $("#datepicker2").datepicker("option", "minDate", moment($scope.searchCookie[0].depDt.replace(/-/g, ' ')).format("DD MMM YYYY"));
                $("#datepicker2").datepicker();
                if ($scope.searchCookie[0].retDt != null && $scope.searchCookie[0].retDt != undefined && $scope.searchCookie[0].retDt != "") {
                    $("#datepicker2").datepicker("setDate", moment($scope.searchCookie[0].retDt.replace(/-/g, ' ')).format("DD MMM YYYY"));
                    $('#datepicker2').val($scope.SearchCritaria.ReturnDate);
                }
            }, 300);

        }
        else {
            $scope.setTripTypeTab(1);
            $scope.traveltype(1);
            $scope.single = false;
            $scope.round = true;
            $scope.SearchCritaria.DepartureDate = moment(new Date()).format("MMM-DD-YYYY");
            $scope.ret_date = new Date();
            $scope.ret_date.setDate($scope.ret_date.getDate() + 1);
            $scope.SearchCritaria.ReturnDate = moment($scope.ret_date).format("MMM-DD-YYYY");
        }
        $http(loadRequest).then(function (response) {

            if ($scope.searchCookie.length > 0 && $scope.searchOrgDest == null && ($('input[name=DestCode]').val() == undefined || $('input[name=DestCode]').val() == "")) {
                if ($scope.searchCookie[0].org != null && $scope.searchCookie[0].org != undefined) {
                    var foundOrg = [];
                    foundOrg = jQuery.grep(response.data.Airportlist, function (a) {
                        return a.AirportFullName.split('-')[0].toUpperCase() == $scope.searchCookie[0].org.toUpperCase();
                    });
                    $scope.SearchCritaria.Origin = foundOrg.length > 0 ? foundOrg[0] : null;
                    $("#ex1_value").addClass('input_clear');
                    $("#ex1_value").addClass('x');
                    $("input[name=org1]").addClass('input_clear');
                    $("input[name=org1]").addClass('x');

                }
                if ($scope.searchCookie[0].dest != null && $scope.searchCookie[0].dest != undefined) {
                    var foundDest = [];
                    foundDest = jQuery.grep(response.data.Airportlist, function (a) {
                        return a.AirportFullName.split('-')[0].toUpperCase() == $scope.searchCookie[0].dest.toUpperCase();
                    });
                    $scope.SearchCritaria.Destination = foundDest.length > 0 ? foundDest[0] : null;
                    $("#ex2_value").addClass('input_clear');
                    $("#ex2_value").addClass('x');
                    $("input[name=dest1]").addClass('input_clear');
                    $("input[name=dest1]").addClass('x');

                }
                $scope.SearchCritaria.DepartureDate = $scope.searchCookie[0].depDt;
                if ($scope.searchCookie[0].retDt != null && $scope.searchCookie[0].retDt != undefined) {
                    $scope.SearchCritaria.ReturnDate = $scope.searchCookie[0].retDt;
                    $scope.setTripTypeTab(1);
                    $scope.traveltype(1);
                    $scope.single = false;
                    $scope.round = true;
                } else {
                    $scope.setTripTypeTab(2);
                    $scope.traveltype(2);
                    $scope.single = true;
                    $scope.round = false;
                }
                setTimeout(function () {
                    $("#datepicker2").datepicker("option", "minDate", moment($scope.searchCookie[0].depDt.replace(/-/g, ' ')).format("DD MMM YYYY"));
                    $("#datepicker2").datepicker();
                    if ($scope.searchCookie[0].retDt != null && $scope.searchCookie[0].retDt != undefined && $scope.searchCookie[0].retDt != "") {
                        $("#datepicker2").datepicker("setDate", moment($scope.searchCookie[0].retDt.replace(/-/g, ' ')).format("DD MMM YYYY"));
                        $('#datepicker2').val($scope.SearchCritaria.ReturnDate);
                    }
                }, 300);
            }
            else if ($('input[name=DestCode]').val() != undefined && $('input[name=DestCode]').val() != "") {
                var foundDest = [];
                foundDest = jQuery.grep(response.data.Airportlist, function (a) {
                    return a.AirportFullName.split('-')[0].toUpperCase() == $('input[name=DestCode]').val().toUpperCase();
                });
                $scope.SearchCritaria.Destination = foundDest.length > 0 ? foundDest[0] : null;
                $("#ex2_value").addClass('input_clear');
                $("#ex2_value").addClass('x');
                $("input[name=dest1]").addClass('input_clear');
                $("input[name=dest1]").addClass('x');
            }

            $scope.AirportsDetailedList = response.data.Airportlist;



        },
            function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            });

    };
    $scope.offerSearch = function (id, no) {
        var formval = $('#offerForm_' + no + '_' + id).serialize();
        var formjson = $scope.QueryStringToJSON(formval);
        formjson = formjson.replace('roundtrip', '2');
        formjson = formjson.replace('oneway', '1');
        var obj = JSON.parse(formjson);


        obj.depDt = $filter('date')(Date.parse(obj.depDt), "MMM-dd-yyyy");
        obj.retDt = $filter('date')(Date.parse(obj.retDt), "MMM-dd-yyyy");

        if (new Date(obj.depDt) < new Date()) {
            var d1 = new Date();
            d1.setDate(d1.getDate() + 15);
            obj.depDt = $filter('date')(Date.parse(d1), "MMM-dd-yyyy");
            var d2 = new Date();
            d2.setDate(d2.getDate() + 22);
            obj.retDt = $filter('date')(Date.parse(d2), "MMM-dd-yyyy");
        }

        //// var encjson = btoa(formjson);
        //// var skey = btoa('search' + Math.random());
        //// window.localStorage.setItem(skey, encjson);
        //// window.location.href = '/FlightResult?q=' + skey;
        window.location.href = '/FlightResult.html' + UserService.convert(obj);
        return false;
    }

    $scope.RedirectToURL = function (param) {
        $window.location.href = $location.protocol() + "://" + $window.location.host + "/" + param;
    };
    $scope.RedirectToURLBlank = function (param) {
        window.open($location.protocol() + "://" + $window.location.host + "/" + param, '_blank');
    };
    $scope.QueryStringToJSON = function (location) {
        var pairs = location.slice(1).split('&');
        var result = {};
        pairs.forEach(function (pair) {
            pair = pair.split('=');
            result[pair[0]] = decodeURIComponent(pair[1] || '').replace(/[+]/g, " ");
        });

        return JSON.stringify(result);
    };

    $scope.RecentSearch = function (i) {
        $scope.urlstr = $scope.searchCookie[i];

        if (new Date($scope.urlstr.depDt) < new Date()) {
            var d1 = new Date();
            d1.setDate(d1.getDate() + 7);
            $scope.urlstr.depDt = $filter('date')(Date.parse(d1), "MMM-dd-yyyy");
            var d2 = new Date();
            d2.setDate(d2.getDate() + 10);
            $scope.urlstr.retDt = $filter('date')(Date.parse(d2), "MMM-dd-yyyy");
        }
        //var query = btoa('search' + Math.random());            
        //window.localStorage.setItem(query,btoa(JSON.stringify($scope.urlstr)));

        window.location.href = '/FlightResult.html' + UserService.convert($scope.urlstr);


    };

    $scope.submit = function (IsValid) {
        if (IsValid) {
            if (!$scope.isNullOrEmpty($scope.SearchCritaria.Origin) && !$scope.isNullOrEmpty($scope.SearchCritaria.Destination) && $scope.SearchCritaria.Destination.Code == $scope.SearchCritaria.Origin.Code) {
                return;
            }
            $scope.validOrg = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Origin)) {
                $scope.validOrg = false;
                return;
            }
            $scope.validDest = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Destination)) {
                $scope.validDest = false;
                return;
            }

            var formdata = new FormData;
            if ($scope.istriptypeSet(1) && $scope.isNullOrEmpty($('input[name=retDt]').val())) {
                $('input[name=retDt]').parent().addClass('is-error');
                return;
            }
            $('input[name=retDt]').parent().removeClass('is-error');
            if ($('input[name=depDt]').val() != undefined) {
                $scope.SearchCritaria.DepartureDate = $filter('date')(Date.parse($('input[name=depDt]').val().replace(/-/g, " ")), "MMM-dd-yyyy");// $location.search()['depDt'];           
                $scope.single = true;
                $scope.round = false;

            }
            if ($('input[name=retDt]').val() != undefined && $('input[name=retDt]').val() != null && $('input[name=retDt]').val() != "") {
                $scope.SearchCritaria.ReturnDate = $filter('date')(Date.parse($('input[name=retDt]').val().replace(/-/g, " ")), "MMM-dd-yyyy");//$location.search()['retDt'];           
                $scope.single = false;
                $scope.round = true;
            }

            if (new Date($scope.SearchCritaria.DepartureDate) < new Date($filter('date')(Date.parse(new Date()), "MMM-dd-yyyy"))) {
                $scope.validDate = false;
                return;
            }
            $scope.validDate = true;

            $scope.urlstr = {
                JType: ($scope.triptypetab == 1 ? 2 : 1),
                org: ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code != undefined ? $scope.SearchCritaria.Origin.AirportFullName.split('-')[0] : $scope.SearchCritaria.Origin),
                dest: ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code != undefined ? $scope.SearchCritaria.Destination.AirportFullName.split('-')[0] : $scope.SearchCritaria.Destination),
                orgCity: ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code != undefined ? ($scope.SearchCritaria.Origin.AirportFullName.split(',')[1]).trim() : $scope.SearchCritaria.Origin),
                destCity: ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code != undefined ? ($scope.SearchCritaria.Destination.AirportFullName.split(',')[1]).trim() : $scope.SearchCritaria.Destination),
                depDt: $scope.SearchCritaria.DepartureDate,
                retDt: ($scope.triptypetab == 1 ? $scope.SearchCritaria.ReturnDate : null),
                ct: ($scope.SearchCritaria.Cabin.Class != undefined ? $scope.SearchCritaria.Cabin.Class : 1),
                adt: $scope.SearchCritaria.PaxDetail.NoAdult,//($('input[name=adt]').val() != undefined ? $('input[name=adt]').val() : 1),
                snr: 0,//($('input[name=snr]').val() != undefined ? $('input[name=snr]').val() : 0),
                chd: $scope.SearchCritaria.PaxDetail.NoChild,//($('input[name=chd]').val() != undefined ? $('input[name=chd]').val() : 0),
                inf: $scope.SearchCritaria.PaxDetail.NoInfant,//($('input[name=inf]').val() != undefined ? $('input[name=inf]').val() : 0),
                infs: $scope.SearchCritaria.PaxDetail.NoInfantS,//($('input[name=inf1]').val() != undefined ? $('input[name=inf1]').val() : 0),
                direct: $scope.SearchCritaria.Direct,
                air: ($('form[name=SearchFrom] :input[name=air]').val() != undefined ? $('form[name=SearchFrom] :input[name=air]').val() : '')
            };

            var cookieobj = {
                key: "",
                val: {}
            };

            //var query = btoa('search' + Math.random());            
            //window.localStorage.setItem(query,btoa(JSON.stringify($scope.urlstr)));

            var now = new Date(),
                exp = new Date(now.setMonth(now.getMonth() + 1));

            cookieobj.key = exp;
            cookieobj.val = $scope.urlstr;

            //if ($cookies.getObject('_search') == null || $cookies.getObject('_search') == undefined) {

            //    $cookies.putObject("_search", cookieobj, {
            //        expires: exp
            //    });
            //} else if ($cookies.getObject('_search1') == null || $cookies.getObject('_search1') == undefined) {
            //    $cookies.putObject("_search1", cookieobj, {
            //        expires: exp
            //    });
            //} else if ($cookies.getObject('_search2') == null || $cookies.getObject('_search2') == undefined) {
            //    $cookies.putObject("_search2", cookieobj, {
            //        expires: exp
            //    });
            //}
            //else {

            //    var key1 = $cookies.getObject('_search').key;
            //    var key2 = $cookies.getObject('_search1').key;
            //    var key3 = $cookies.getObject('_search2').key;
            //    if (new Date(key1) < new Date(key2) && new Date(key1) < new Date(key3)) {
            //        $cookies.putObject("_search", cookieobj, {
            //            expires: exp
            //        });
            //    }
            //    else if (new Date(key2) < new Date(key1) && new Date(key2) < new Date(key3)) {
            //        $cookies.putObject("_search1", cookieobj, {
            //            expires: exp
            //        });
            //    } else {
            //        $cookies.putObject("_search2", cookieobj, {
            //            expires: exp
            //        });
            //    }
            //}

            if (getCookie("_search") == null || getCookie("_search") == undefined) {
                setCookie("_search", cookieobj, 30);
            } else if (getCookie("_search1") == null || getCookie("_search1") == undefined) {
                setCookie("_search1", cookieobj, 30);
            } else if (getCookie("_search2") == null || getCookie("_search2") == undefined) {
                setCookie("_search2", cookieobj, 30);
            }
            else {
                var key1 = getCookie("_search").key;
                var key2 = getCookie("_search1").key;
                var key3 = getCookie("_search2").key;
                if (new Date(key1) < new Date(key2) && new Date(key1) < new Date(key3)) {
                    setCookie("_search", cookieobj, 30);
                }
                else if (new Date(key2) < new Date(key1) && new Date(key2) < new Date(key3)) {
                    setCookie("_search1", cookieobj, 30);
                } else {
                    setCookie("_search2", cookieobj, 30);
                }
            }

            var orgdest = {
                org: $scope.SearchCritaria.Origin,
                dest: $scope.SearchCritaria.Destination
            };
            window.localStorage.removeItem("searchOrgDest");
            window.localStorage.setItem("searchOrgDest", JSON.stringify(orgdest));
            if ($('input[name=org]').val() != undefined && $('input[name=dest]').val() != undefined) {
                //window.location.href = '/FlightResult?q=' + query;
                window.location.href = '/FlightResult.html' + UserService.convert($scope.urlstr);
            }
        } else {
            if ($scope.IsmobileView) {
                $('.mobile_error_overlay').removeClass('ng-hide');
            }
        }
    };
});

app.controller('MainController', function ($scope, $http, $window, $document, $sce, $state, $filter, ngProgressFactory, $location, $timeout, $interval, $cookies, UserService) {

    $scope.FinalResult = [];
    $scope.FinishRender = false;
    TimeToRender = 1000;//time to next item in miliseconds

    $scope.currentPage = 1;
    $scope.insuranceDetail = {};
    $scope.backUrl = '';
    $scope.CalculateTotalTrip = function (Itenary, type) {
        var data = Itenary;
        var Sector = $filter('IsReturn')(Itenary.Sectors.Sector, type);
        return "11h 22m";
    };
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.IsWaiting = true;
    $scope.IsExpired = false;
    $scope.IsBanner = false;
    $scope.NoResult = false;
    $scope.single = false;
    $scope.round = true;
    $scope.multi = false;
    $scope.offerimg = false;
    $scope.flagsess = false;
    // Timeout timer value
    var TimeOutTimerValue;

    // Start a timeout
    var TimeOut_Thread;
    var bodyElement = angular.element($document);

    /// Keyboard Events
    bodyElement.bind('keydown', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('keyup', function (e) { $scope.TimeOut_Resetter(e) });

    /// Mouse Events	
    bodyElement.bind('click', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('mousemove', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('DOMMouseScroll', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('mousewheel', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('mousedown', function (e) { $scope.TimeOut_Resetter(e) });

    /// Touch Events
    bodyElement.bind('touchstart', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('touchmove', function (e) { $scope.TimeOut_Resetter(e) });

    /// Common Events
    //  bodyElement.bind('scroll', function (e) { $scope.TimeOut_Resetter(e) });
    bodyElement.bind('focus', function (e) { $scope.TimeOut_Resetter(e) });


    $scope.LogoutByTimer = function () {
        $scope.IsBanner = true;
        $("#ff-theme").addClass("open-model");

    };
    $scope.TimeOut_Resetter = function (e) {
        /// Stop the pending timeout
        $timeout.cancel(TimeOut_Thread);
        if ($scope.flagsess == false && TimeOutTimerValue != undefined) {
            /// Reset the timeout
            TimeOut_Thread = $timeout(function () { $scope.LogoutByTimer() }, TimeOutTimerValue);
        }

    };
    //-----------------------------------------//


    //********Drop down List load
    $scope.AirportsDetailedList = [];



    $scope.reloadPage = function () {
        $window.location.reload();
    };
    //********Drop down List load
    $scope.MinCheapest = 0;
    $scope.count = 0;
    //$scope.flightdata = {
    //    Flights: {},
    //    CheapestFlights: [],
    //    AltDateFlights: [],
    //    AltAirportFlights: [],
    //    Shortest: []
    //};
    $scope.flightdata = {
        Flights: {},
        AltDateFlights: {},
        AltAirportFlights: {},
        Shortest: {
            Itinerary: []
        }
    };
    $scope.specificAirlines = [];
    $scope.CabinClass = [];
    $scope.LeftPanelDepartingFiltersData = [];
    $scope.ClearAllFilter = function () {
        $scope.callpopup();

        $scope.Cfilter.Stops.Nonstop = false;
        $scope.Cfilter.Stops.Onestop = false;
        $scope.Cfilter.Stops.Twostop = false;
        $scope.Cfilter.SetectedCriteria.SelectedDeparture = {};
        $scope.Cfilter.SetectedCriteria.SelectedReturn = {};
        $scope.Cfilter.SetectedCriteria.SelectedUniqueRef = "";

        $scope.min = parseInt($scope.SliderMin) - 1;
        $scope.max = $scope.SliderMax;

        $scope.Depmin = 0;
        $scope.Depmax = 1440;
        $scope.Retmin = 0;
        $scope.Retmax = 1440;

        $scope.Cfilter.depTimeSlider.min = 0;
        $scope.Cfilter.depTimeSlider.max = 1440;
        $scope.Cfilter.retTimeSlider.min = 0;
        $scope.Cfilter.retTimeSlider.max = 1440;

        angular.forEach($scope.Cfilter.DepartingFromOptions, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.LeftPanelConnectingFiltersData, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.LeftPanelDepartingFiltersData, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.LeftPanelArrivalFiltersData, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.LeftPanelReturningFiltersData, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.Cfilter.ReturnFromOptions, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.Cfilter.ArrivalAtOptions, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.Cfilter.ConnectingInOptions, function (obj) {
            obj.Isselected = false;
        });
        angular.forEach($scope.Cfilter.specificAirlines, function (obj) {
            obj.IsSelected = false;
        });

        angular.forEach($scope.Cfilter.CabinClass, function (obj) {
            obj.IsSelected = false;
        });

        $scope.connectingChanged();
        $scope.DeaprtureChanged();
        $scope.arrivingChanged();
        $scope.airlineChange();
        $scope.ReturnChanged();
        $scope.cabinChange();
    };
    $scope.ClearAppliedFilter = function (value, type) {

        if (type == "depart") {
            angular.forEach($scope.LeftPanelDepartingFiltersData, function (obj) {
                if (obj.AirpCode == value)
                    obj.Isselected = false;
            });
            $scope.DeaprtureChanged();

        } else if (type == "return") {
            angular.forEach($scope.LeftPanelReturningFiltersData, function (obj) {
                if (obj.AirpCode == value)
                    obj.Isselected = false;
            });
            $scope.ReturnChanged();
        } else if (type == "airline") {
            angular.forEach($scope.specificAirlines, function (obj) {
                if (obj.Airline == value)
                    obj.IsSelected = false;
            });
            $scope.airlineChange();
        } else {
            if (value == '0') {
                $scope.Cfilter.Stops.Nonstop = false;
            } else if (value == '1') {
                $scope.Cfilter.Stops.Onestop = false;
            } else {
                $scope.Cfilter.Stops.Twostop = false;
            }
        }

    };

    $scope.hideWait = function () {
        $scope.IsExpired = false;
        setTimeout(function () {
            $scope.IsExpired = true;
        }, 600000);
    };
    //********** FilterCriteria
    $scope.Cfilter = {
        Stops: {
            Nonstop: false,
            Onestop: false,
            Twostop: false,
            NonstopMinFare: 0,
            OnestopMinFare: 0,
            TwostopMinFare: 0
        },
        OutboundDepartureTimeZone: [{
            ZoneIndex: 1,
            SelectedTimeZone: false,
            TimeZoneDetails: '05:00 - 11:59',
        },
        {
            ZoneIndex: 2,
            SelectedTimeZone: false,
            TimeZoneDetails: '12:00 - 17:59',
        },
        {
            ZoneIndex: 3,
            SelectedTimeZone: false,
            TimeZoneDetails: '18:00 - 04:59',
        }],
        OutboundArrivalTimeZone: [{
            ZoneIndex: 1,
            SelectedTimeZone: false,
            TimeZoneDetails: '05:00 - 11:59',
        },
        {
            ZoneIndex: 2,
            SelectedTimeZone: false,
            TimeZoneDetails: '12:00 - 17:59',
        },
        {
            ZoneIndex: 3,
            SelectedTimeZone: false,
            TimeZoneDetails: '18:00 - 04:59',
        }],
        InboundDepartureTimeZone: [{
            ZoneIndex: 1,
            SelectedTimeZone: false,
            TimeZoneDetails: '05:00 - 11:59',
        },
        {
            ZoneIndex: 2,
            SelectedTimeZone: false,
            TimeZoneDetails: '12:00 - 17:59',
        },
        {
            ZoneIndex: 3,
            SelectedTimeZone: false,
            TimeZoneDetails: '18:00 - 04:59',
        }],
        InboundArrivalTimeZone: [{
            ZoneIndex: 1,
            SelectedTimeZone: false,
            TimeZoneDetails: '05:00 - 11:59',
        },
        {
            ZoneIndex: 2,
            SelectedTimeZone: false,
            TimeZoneDetails: '12:00 - 17:59',
        },
        {
            ZoneIndex: 3,
            SelectedTimeZone: false,
            TimeZoneDetails: '18:00 - 04:59',
        }],
        SetectedCriteria:
        {
            SelectedDeparture: {},
            SelectedReturn: {},
            SelectedUniqueRef: "",
        },
        priceSlider: {
            min: 10,
            max: 2000,
            ceil: 100,
            floor: 99990,
            step: 1
        },
        depTimeSlider: {
            min: 0,
            max: 1440,
            ceil: 0,
            floor: 1440,
            step: 1
        },
        retTimeSlider: {
            min: 0,
            max: 1440,
            ceil: 0,
            floor: 1440,
            step: 1
        },
        DepartingFromOptions: [],
        ArrivalAtOptions: [],
        ReturnFromOptions: [],
        ConnectingInOptions: [],
        specificAirlines: [],
        CabinClass: [],

    };
    //********** FilterCriteria
    $scope.clearInput = function (id) {
        //if (id) {
        //    $scope.$broadcast('angucomplete-alt:clearInput', id);
        //}
        //else {
        //    $scope.$broadcast('angucomplete-alt:clearInput');
        //}
        $("#" + id + "_value").select();
    }
    $scope.SelectedDestinationfirst = function (selected) {
        if (selected) {
            $scope.SearchCritaria_M.SelectedDestination0 = selected.originalObject;
            $scope.SearchCritaria_M.Destination0 = selected.originalObject;
            $scope.SearchCritaria_M.Origin1 = $scope.SearchCritaria_M.SelectedDestination0;
            $scope.$broadcast('angucomplete-alt:changeInput', 'exm3', $scope.SearchCritaria_M.Origin1);
        } else {
            $scope.SearchCritaria_M.SelectedDestination0 = null;
        }
    }
    $scope.SelectedDestinationsec = function (selected) {
        if (selected) {
            $scope.SearchCritaria_M.SelectedDestination1 = selected.originalObject;
            $scope.SearchCritaria_M.Destination1 = selected.originalObject;
            $scope.SearchCritaria_M.Origin2 = $scope.SearchCritaria_M.SelectedDestination1;
            $scope.$broadcast('angucomplete-alt:changeInput', 'exm5', $scope.SearchCritaria_M.Origin2);
        } else {
            $scope.SearchCritaria_M.SelectedDestination1 = null;
        }
    }
    $scope.clearinp = function () {
        $scope.$broadcast('angucomplete-alt:clearInput', 'exm5');
        $scope.$broadcast('angucomplete-alt:clearInput', 'exm6');
    };
    //************* Price Slider
    var vm = this;
    $scope.MainResponse = [];
    $scope.lastSliderUpdated = '';
    $scope.CustomArr = [];
    $scope.filteredarr = [];
    $scope.Airportslist = [];
    $scope.appliedDep = [];
    $scope.appliedRet = [];
    $scope.appliedAir = [];
    $scope.myChangeListener = function (sliderId) {
        vm.lastSliderUpdated = vm.priceSlider.min;
    };
    $scope.priceSlider = {
        min: 0,
        max: 100,
        options: {
            floor: 0,
            ceil: 100,
            id: 'sliderB',
            step: 1,
            onChange: vm.myChangeListener,
            interval: 500
        }
    };
    $scope.flagtag = false;
    $scope.checksamedepret = false;
    $scope.min = 0;
    $scope.max = 0;
    $scope.Minfare = 0;
    $scope.Maxfare = 0;
    $scope.SliderMin = 0;
    $scope.SliderMax = 0;
    //--------------------
    $scope.DepStart = 0;
    $scope.DepEnd = 1440;
    $scope.Depmin = 0;
    $scope.Depmax = 1440;
    //--------------------
    $scope.RetStart = 0;
    $scope.RetEnd = 1440;
    $scope.Retmin = 0;
    $scope.Retmax = 1440;

    $scope.number = 2;
    $scope.checkno = 2;
    $scope.afterfilter = false;

    $scope.appliedDep = [];
    $scope.appliedRet = [];
    $scope.appliedAir = [];
    //**********Tabbing
    $scope.tab = 1;
    $scope.setTab = function (newTab) {
        $scope.callpopup();
        if (newTab == 2) {
            $scope.flightdata.Flights = $scope.flightdata.AltAirportFlights.Itinerary;
            $scope.filteredarr = $scope.flightdata.Flights;
            $scope.tab = 2;
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
        else if (newTab == 3) {
            $scope.flightdata.Flights = $scope.flightdata.Shortest.Itinerary;
            $scope.filteredarr = $scope.flightdata.Flights;
            $scope.tab = 3;
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
        else if (newTab == 4) {
            $scope.flightdata.Flights = $scope.flightdata.AltDateFlights.Itinerary;
            $scope.filteredarr = $scope.flightdata.Flights;
            $scope.tab = 4;
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
        else {
            $scope.flightdata.Flights = $scope.MainResponse;
            $scope.filteredarr = $scope.flightdata.Flights;
            $scope.tab = 1;
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
        $scope.ClearAllFilter();
    };
    $scope.isSet = function (tabNum) {
        return $scope.tab === tabNum;
    };
    $scope.triptypetab = 1;
    $scope.setTripTypeTab = function (newTab) {
        $scope.triptypetab = newTab;
        if (newTab === 2) {
            $('input[name=retDt]').attr('disabled', true);
            $($('input[name=retDt]').parent()).addClass('roundtrip');
            $('#paxbox').removeClass('paxboxpos');
            //$scope.SearchCritaria.ReturnDate = null;
            $scope.FlightSearchRQ.JourneyType = "O";

        } else {
            $('input[name=retDt]').attr('disabled', false);
            $($('input[name=retDt]').parent()).removeClass('roundtrip');
            $('#paxbox').removeClass('paxboxpos');
            $scope.FlightSearchRQ.JourneyType = "R";
        }
    };
    $scope.istriptypeSet = function (tabNum) {
        return $scope.triptypetab === tabNum;
    };
    //**********Tabbing

    $($(".modifySearchBox").find('.click_div')).click(function () {
        $(this).next().show();
        $($('.modifySearchBox > form > .container > .searchBlock').find('.mobile_overlay')).css("height", "100%");
    });
    $($('.modifySearchBox > form > .container > .searchBlock').find('div.mobile_overlay')).click(function () {
        $("#DtripParent").hide();
        $scope.hideTravelerBox();
        $($('div.Dclass-type>ul>li')[0]).parent().parent().hide();
        $($('.modifySearchBox > form > .container > .searchBlock').find('.mobile_overlay')).css("height", "0");
    });
    $scope.traveltype = function (ttype) {
        $('.traveltype').removeClass('fa fa-check');
        $scope.triptypetab = parseInt(ttype);
        if (ttype == 2) {
            $('input[name=retDt]').attr('disabled', true);
            $($('input[name=retDt]').parent()).addClass('roundtrip');
            $($('input[name=depDt]').parent()).addClass('oneway');

            $(".single").show();
            $('#oneway').addClass('active');
            $('#roundtrip').removeClass('active');

            $('#traveltype1').addClass('fa fa-check');
            $('.trip').html('One way' + '<i class="arrow-icon bi bi-chevron-down"></i>');
            //$('#Jtype').val('oneway');
            $('.one_outer').fadeOut("slow");
        }
        else if (ttype == 1) {
            $('input[name=retDt]').attr('disabled', false);
            $($('input[name=retDt]').parent()).removeClass('roundtrip');
            $($('input[name=depDt]').parent()).removeClass('oneway');
            $(".single").hide();
            $('#oneway').removeClass('active');
            $('#roundtrip').addClass('active');
            $('.trip').html('Round trip' + '<i class="arrow-icon bi bi-chevron-down"></i>');

            $('#traveltype2').addClass('fa fa-check');
            //$('#Jtype').val('roundtrip');
            $('.one_outer').fadeOut("slow");
        }
        else {
            //$('#Jtype').val('0');
            $('.trip').html('One way' + '<i class="arrow-icon bi bi-chevron-down"></i>');
        }
        $("#DtripParent").hide();
        $($('.modifySearchBox > form > .container > .searchBlock').find('.mobile_overlay')).css("height", "0");
    }

    $scope.addPassenger = function (id) {
        var AdultsRT = $('#DAdultsRT').text();
        var ChildrenRT = $('#DChildrenRT').text();
        var InfantsRT = $('#DInfantsRT').text();
        var InfantsRTonSeat = $('#DInfantsRTonSeat').text();
        var total = +AdultsRT + +ChildrenRT + +InfantsRT + +InfantsRTonSeat;
        if (total < 9) {
            if (id == 'DInfantsRT' && InfantsRT < AdultsRT) {
                $("#DInfantsRT").text(+InfantsRT + 1);
                $scope.FlightSearchRQ.PaxDetail.NoInfant = (+InfantsRT + 1);
                //$("#InfantsRT_count").val(+InfantsRT + 1);
            }
            if (id == 'DInfantsRTonSeat' && InfantsRTonSeat < AdultsRT) {
                $("#DInfantsRTonSeat").text(+InfantsRTonSeat + 1);
                $scope.FlightSearchRQ.PaxDetail.NoInfantS = (+InfantsRTonSeat + 1);
                // $("#InfantsRTonSeat_count").val(+InfantsRTonSeat + 1);
            }
            if (id == 'DAdultsRT') {
                $("#DAdultsRT").text(+AdultsRT + 1);
                $scope.FlightSearchRQ.PaxDetail.NoAdult = (+AdultsRT + 1);
                //$("#AdultsRT_count").val(+AdultsRT + 1);
            }
            if (id == 'DChildrenRT') {
                $("#DChildrenRT").text(+ChildrenRT + 1);
                $scope.finalchild = (+ChildrenRT + 1);
                $scope.FlightSearchRQ.PaxDetail.NoChild = (+ChildrenRT + 1);
                // $("#ChildrenRT_count").val(+ChildrenRT + 1);
            }
            $($("#" + id).siblings('a.minus')).removeClass('disable');
            $('div.traveler_action_button a.done_Btn.disable').removeClass('disable');
            $scope.getTotalTraveller();
        }
        else {
            return false;
        }

    }
    $scope.removePassenger = function (id) {
        var AdultsRT = $('#DAdultsRT').text();
        var ChildrenRT = $('#DChildrenRT').text();
        var InfantsRT = $('#DInfantsRT').text();
        var InfantsRTonSeat = $('#DInfantsRTonSeat').text();

        var total = +AdultsRT + +ChildrenRT + +InfantsRT + +InfantsRTonSeat;

        var infantvalue = $("#" + id).text();
        if ((id == 'DAdultsRT') && (AdultsRT > 1)) {
            $("#" + id).text(infantvalue - 1);
            $scope.FlightSearchRQ.PaxDetail.NoAdult = (infantvalue - 1);
            //$("#" + id + "_count").val(infantvalue - 1);
        }

        if (id != 'DAdultsRT') {
            if (infantvalue > 0) {
                $("#" + id).text(infantvalue - 1);
                if (id == 'DChildrenRT') {
                    $scope.finalchild = (infantvalue - 1);
                    $scope.FlightSearchRQ.PaxDetail.NoChild = (infantvalue - 1);
                } else if (id == 'DInfantsRT') {
                    $scope.FlightSearchRQ.PaxDetail.Infant = (infantvalue - 1);
                } else if (id == 'DInfantsRTonSeat') {
                    $scope.FlightSearchRQ.PaxDetail.InfantS = (infantvalue - 1);
                }
                // $("#" + id + "_count").val(infantvalue - 1);
                if (infantvalue == 1) {
                    $($("#" + id).siblings('a.minus')).addClass('disable');
                }
            }
        }
        $('div.traveler_action_button a.done_Btn.disable').removeClass('disable');
        $scope.getTotalTraveller();
    }

    $scope.hideTravelerBox = function () {
        $('div.mobile_travelerBox').hide();
        $($('.modifySearchBox > form > .container > .searchBlock').find('.mobile_overlay')).css("height", "0");
        $scope.getTotalTraveller();
    }
    $scope.getTotalTraveller = function () {
        var AdultsRT = $('#DAdultsRT').text();
        var ChildrenRT = $('#DChildrenRT').text();
        var InfantsRT = $('#DInfantsRT').text();
        var InfantsRTonSeat = $('#DInfantsRTonSeat').text();

        var total = +AdultsRT + +ChildrenRT + +InfantsRT + +InfantsRTonSeat;
        //  $('.travelerclick').val(total + ' Traveler' + ',' + $("input:radio[name=classtype]:checked").attr('data-text'));
        $("#trvltext").text(total > 1 ? "Travelers " + total : "Traveler " + total);
    }

    $scope.ResetTravelerBox = function () {
        $("#DAdultsRT").text(1);
        $("#DChildrenRT").text(0);
        $("#DInfantsRT").text(0);
        $("#DInfantsRTonSeat").text(0);
        $scope.FlightSearchRQ.PaxDetail.NoAdult = 1;
        $scope.FlightSearchRQ.PaxDetail.NoChild = 0;
        $scope.finalchild = 0;
        $scope.FlightSearchRQ.PaxDetail.NoInfant = 0;
        $scope.FlightSearchRQ.PaxDetail.NoInfantS = 0;
        $('div.traveler_action_button a.done_Btn').first().addClass('disable');

        $scope.getTotalTraveller();
    }
    $scope.classTypeChanged = function (val, i) {
        $('div.Dclass-type>ul>li').removeClass('active');
        $($('div.Dclass-type>ul>li')[i]).addClass('active');
        // $('div.Dct').html($('div.class-type>ul>li')[i].innerText + '<i class="arrow-icon bi bi-chevron-down"></i>');
        $($('div.Dclass-type>ul>li')[i]).parent().parent().hide();
        $($('.modifySearchBox > form > .container > .searchBlock').find('.mobile_overlay')).css("height", "0");
        $("#className").val(val);
        $scope.FlightSearchRQ.Cabin.Class = parseInt(val, 10);

    };



    //**********string to Only Int withoutDecimal
    $scope.truncate = function (n) {
        return Math.floor(n);
    };
    $scope.ToFloat = function (n) {
        return parseFloat(n);
    }
    $scope.ToDateSub = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }

        var date = new Date(n.replace(/-/g, ' '))
        return date;
    };
    $scope.ToDate = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }
        var date = new Date(n.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
        // var date = new Date(n.replace(/-/g,' '))
        return date;
    };
    $scope.To12HourTime = function (n) {
        if (n != undefined) {
            var hours = Number(n.match(/^(\d+)/)[1]);
            var minutes = Number(n.match(/:(\d+)/)[1]);
            var AMPM = "";
            if (hours < 12) {
                AMPM = "AM"
            };
            if (hours == 12) {
                AMPM = "PM"
            }
            if (hours > 12) {
                AMPM = "PM"
                hours = hours - 12;
            }
            var sHours = hours.toString();
            var sMinutes = minutes.toString();
            if (hours < 10) sHours = "0" + sHours;
            if (minutes < 10) sMinutes = "0" + sMinutes;
            return (sHours + ":" + sMinutes + " " + AMPM);
        } else { return ""; }
    };

    $scope.To12HourTime_slider = function (n) {
        if (n != undefined) {
            var hours = Math.floor(n / 60);
            var minutes = n % 60;
            var AMPM = "";
            if (hours < 12) {
                AMPM = "AM"
            };
            if (hours == 12) {
                AMPM = "PM"
            }
            if (hours > 12) {
                AMPM = "PM"
                hours = hours - 12;
            }
            var sHours = hours.toString();
            var sMinutes = minutes.toString();
            if (hours < 10) sHours = "0" + sHours;
            if (minutes < 10) sMinutes = "0" + sMinutes;
            return (sHours + ":" + sMinutes + " " + AMPM);
        } else { return ""; }
    };

    $scope.FirstDeparture = function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item != undefined) {
                if ((item.IsReturn != undefined && item.IsReturn == 'FALSE') || (item.isReturn != undefined && item.isReturn.toUpperCase() == 'FALSE')) {
                    filtered.push(item);
                }
            }
        });
        return filtered[0];
    };
    $scope.LastDeparture = function (items) {

        var filtered = [];
        angular.forEach(items, function (item) {
            if (item != undefined) {
                if ((item.IsReturn != undefined && item.IsReturn == 'FALSE') || (item.isReturn != undefined && item.isReturn.toUpperCase() == 'FALSE')) {
                    filtered.push(item);
                }
            }
        });
        return filtered[filtered.length - 1];
    };
    $scope.FirstArrival = function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item != undefined) {
                if ((item.IsReturn != undefined && item.IsReturn == 'TRUE') || (item.isReturn != undefined && item.isReturn.toUpperCase() == 'TRUE')) {
                    filtered.push(item);
                }
            }
        });
        return filtered[0];
    };
    $scope.LastArrival = function (items) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item != undefined) {
                if ((item.IsReturn != undefined && item.IsReturn == 'TRUE') || (item.isReturn != undefined && item.isReturn.toUpperCase() == 'TRUE')) {
                    filtered.push(item);
                }
            }
        });
        return filtered[filtered.length - 1];
    };

    $scope.distinctIsreturn = function (item) {
        var filtered = [];
        angular.forEach(item.Sectors.Sector, function (i, v) {
            if (jQuery.inArray(i.isReturn, filtered) === -1) {
                filtered.push(i.isReturn);
            }
        });
        return filtered;
    };

    $scope.Countsector = function (items, cond) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if ((item.IsReturn != undefined && item.IsReturn == cond.toUpperCase()) || (item.isReturn != undefined && item.isReturn.toUpperCase() == cond.toUpperCase())) {
                filtered.push(item);
            }
        });
        return filtered.length;
    };
    //$scope.SelectedAirline = function (Airlinecode) {
    //    $scope.callpopup();
    //    if (Airlinecode == undefined || Airlinecode == '') {
    //        Airlinecode = '';
    //    }
    //    angular.forEach($scope.specificAirlines, function (obj) {
    //        if (obj.Airline == Airlinecode)
    //            obj.IsSelected = true;
    //        else
    //            obj.IsSelected = false;
    //    });
    //    $scope.Cfilter.SelectedSpecificAirlines = $filter('IsSelected')($scope.specificAirlines, true);
    //};

    $scope.SelectedAirline = function (Airlinecode) {
        $scope.callpopup();
        $scope.checkairsel = false;
        if (Airlinecode == undefined || Airlinecode == '') {
            Airlinecode = '';
        }
        angular.forEach($scope.specificAirlines, function (obj) {
            if (obj.Airline == Airlinecode)
                obj.IsSelected = true;
            else
                obj.IsSelected = false;
        });

        $scope.Cfilter.SelectedSpecificAirlines = $filter('IsSelected')($scope.specificAirlines, true);
        $scope.appliedAir = $scope.Cfilter.SelectedSpecificAirlines;
        $scope.filteredarr = [];
        angular.forEach($scope.flightdata.Flights, function (obj) {
            var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
            if (result) {
                $scope.filteredarr.push(obj);
            }
        });
        $scope.loadresults = [];
        $scope.LoadMoreResults(1);

    };
    $scope.SelectedAirlineStops = function (Airlinecode, Stop) {
        $scope.callpopup();
        $scope.checkairsel = false;
        $scope.Cfilter.Stops.Nonstop = false;
        $scope.Cfilter.Stops.Onestop = false;
        $scope.Cfilter.Stops.Twostop = false;
        if (Airlinecode == undefined || Airlinecode == '') {
            Airlinecode = '';
        }
        angular.forEach($scope.specificAirlines, function (obj) {
            if (obj.Airline == Airlinecode)
                obj.IsSelected = true;
            else
                obj.IsSelected = false;
        });
        if (Stop == 0) {
            $scope.Cfilter.Stops.Nonstop = true;
        }
        //else if (Stop == 1) {
        //    $scope.Cfilter.Stops.Onestop = true;
        //}
        else {
            $scope.Cfilter.Stops.Onestop = true;
            $scope.Cfilter.Stops.Twostop = true;
        }

        $scope.Cfilter.SelectedSpecificAirlines = $filter('IsSelected')($scope.specificAirlines, true);
        $scope.appliedAir = $scope.Cfilter.SelectedSpecificAirlines;
        $scope.filteredarr = [];
        angular.forEach($scope.flightdata.Flights, function (obj) {
            var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
            if (result) {
                $scope.filteredarr.push(obj);
            }
        });
        $scope.loadresults = [];
        $scope.LoadMoreResults(1);

    };
    $scope.SelectedCabinClass = function (Cabin) {
        $scope.callpopup();
        if (Cabin == undefined || Cabin == '') {
            Cabin = '';
        }
        angular.forEach($scope.CabinClass, function (obj) {
            if (obj.Sectors.Sector[0].CabinClass.Des.toUpperCase() == Cabin.toUpperCase())
                obj.IsSelected = true;
            else
                obj.IsSelected = false;
        });
        $scope.Cfilter.SelectedCabinClass = $filter('IsSelected')($scope.CabinClass, true);
    };
    //**********string to Only Int withoutDecimal
    $scope.isObjectEmpty = function (obj) {
        if (obj == null)
            return true;
        return Object.keys(obj).length === 0;
    }
    $scope.isNullOrEmpty = function (value) {
        return (!value || value == undefined || value == "" || value.length == 0);
    }
    //**************Filter
    $scope.loadresults = [];
    $scope.LoadMoreResults = function (n) {
        var n1 = n * 10 - 10;
        var n2 = n * 10 - 1;
        $scope.checkno = Math.ceil($scope.filteredarr.length / 10);
        $.merge($scope.loadresults, $scope.filteredarr.slice(n1, n2 + 1));
        $scope.number = n + 1;
        $scope.count = $scope.filteredarr.length;
        if ($scope.loadresults.length == 0) {
            $scope.afterfilter = true;
        } else {
            $scope.afterfilter = false;
        }
    };

    //-----check model value changed --------//
    $scope.$watch("min", function (newVal, oldVal) {
        if (newVal != 0 && newVal != '0' && oldVal != "0") {
            $scope.Cfilter.priceSlider.min = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("max", function (newVal, oldVal) {
        if (newVal != 0 && newVal != '0' && oldVal != "0") {
            $scope.Cfilter.priceSlider.max = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("Depmin", function (newVal, oldVal) {
        if (newVal != 0 && newVal != '0' && oldVal != "0") {
            $scope.Cfilter.depTimeSlider.min = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("Depmax", function (newVal, oldVal) {
        if (newVal != 1440 && newVal != '1440' && oldVal != "1440") {
            $scope.Cfilter.depTimeSlider.max = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("Retmin", function (newVal, oldVal) {
        if (newVal != 0 && newVal != '0' && oldVal != "0") {
            $scope.Cfilter.retTimeSlider.min = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("Retmax", function (newVal, oldVal) {
        if (newVal != 1440 && newVal != '1440' && oldVal != "1440") {
            $scope.Cfilter.retTimeSlider.max = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });

    $scope.$watch("Cfilter.Stops.Nonstop", function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.Cfilter.Stops.Nonstop = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("Cfilter.Stops.Onestop", function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.Cfilter.Stops.Onestop = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });
    $scope.$watch("Cfilter.Stops.Twostop", function (newVal, oldVal) {
        if (newVal != oldVal) {
            $scope.Cfilter.Stops.Twostop = newVal;
            $scope.filteredarr = [];
            angular.forEach($scope.flightdata.Flights, function (obj) {
                var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
                if (result) {
                    $scope.filteredarr.push(obj);
                }
            });
            $scope.loadresults = [];
            $scope.LoadMoreResults(1);
        }
    });


    $scope.setlocalorgdest = function () {
        //var orgdest = {
        //    org: $scope.SearchCritaria.Origin,
        //    dest: $scope.SearchCritaria.Destination
        //};
        //window.localStorage.removeItem("searchOrgDest");
        //window.localStorage.setItem("searchOrgDest", JSON.stringify(orgdest));
    }


    //-----check model value changed --------//
    $scope.Baggagedetail = {
        NoOfTST: 0,
        PortalID: 79,
        FlightSearch: {
        },
        SelectedContract: {
        },
        FlightBooking: null,
        RequestType: 0,
        TokenDetails: null,
        UniqueRequestId: null,
        IsAgentLogin: false,
        ProviderDetail: null,
        CalanderFareSearchRQ: null
    }
    $scope.SearchCritaria_M = {
        Origin0: null,
        SelectedOrigin0: function (selected) {
            if (selected) {
                $scope.SearchCritaria_M.Origin0 = selected.originalObject;
            } else {
                $scope.SearchCritaria_M.Origin0 = null;
            }
        },
        Destination0: null,
        SelectedDestination0: null,
        //    function (selected) {
        //    if (selected) {
        //        $scope.SearchCritaria_M.Destination0 = selected.originalObject;
        //    } else {
        //        $scope.SearchCritaria_M.Destination0 = null;
        //    }
        //},
        Origin1: null,
        SelectedOrigin1:
            function (selected) {
                if (selected) {
                    $scope.SearchCritaria_M.Origin1 = selected.originalObject;
                } else {
                    $scope.SearchCritaria_M.Origin1 = null;
                }
            },
        Destination1: null,
        SelectedDestination1: null,
        //    function (selected) {
        //    if (selected) {
        //        $scope.SearchCritaria_M.Destination1 = selected.originalObject;
        //    } else {
        //        $scope.SearchCritaria_M.Destination1 = null;
        //    }
        //},
        Origin2: null,
        SelectedOrigin2: function (selected) {
            if (selected) {
                $scope.SearchCritaria_M.Origin2 = selected.originalObject;
            } else {
                $scope.SearchCritaria_M.Origin2 = null;
            }
        },
        Destination2: null,
        SelectedDestination2: function (selected) {
            if (selected) {
                $scope.SearchCritaria_M.Destination2 = selected.originalObject;
            } else {
                $scope.SearchCritaria_M.Destination2 = null;
            }
        },
        DepartureDate0: "",
        DepartureDate1: "",
        DepartureDate2: ""

    };
    $scope.SearchCritaria = {
        WebSite: "TestSite",
        MetaName: "Travelocompare",
        Origin: null,
        SelectedOrigin: function (selected) {
            if (selected) {
                $scope.SearchCritaria.Origin = selected.originalObject;
            } else {
                $scope.SearchCritaria.Origin = null;
            }
        },
        Destination: null,
        SelectedDestination: function (selected) {
            if (selected) {
                $scope.SearchCritaria.Destination = selected.originalObject;
            } else {
                $scope.SearchCritaria.Destination = null;
            }
        },
        DepartureDate: "",
        ReturnDate: "",
        Class: 1,
        Direct: "0",
        Segments: {
            OutBound: [
                {
                    Origin: "MIA",
                    Destination: "NYC",
                    Date: new Date(),
                }
            ],
            InBound: {
                Origin: "NYC",
                Destination: "MIA",
                Date: new Date(),
            }
        },
        PaxDetail: {
            NoAdult: "1",
            NoSenior: "0",
            NoChild: "0",
            NoInfant: "0",
            NoInfantS: "0"
        },
        Cabin: {
            Class: 1
        },
        Skey: null
    };
    $scope.mailsent = false;
    $scope.ModifyChk = false;
    $scope.validOrg = true;
    $scope.validDest = true;
    $scope.submit = function (IsValid) {
        $scope.ModifyChk = false;
        if (IsValid) {

            if ($scope.isNullOrEmpty($scope.SearchCritaria.Origin)) {
                $scope.validOrg = false;
                return;
            }
            $scope.validOrg = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Destination)) {
                $scope.validDest = false;
                return;
            }
            $scope.validDest = true;
            if (!$scope.isNullOrEmpty($scope.SearchCritaria.Origin) && !$scope.isNullOrEmpty($scope.SearchCritaria.Destination) && $scope.SearchCritaria.Destination.Code == $scope.SearchCritaria.Origin.Code) {
                return;
            }
            if ($scope.istriptypeSet(1) && $scope.isNullOrEmpty($scope.SearchCritaria.ReturnDate)) {
                $('input[name=retDt]').addClass('is-error');
                return;
            }

            var formdata = new FormData;

            if ($('input[name=depDt]').val() != undefined) {
                $scope.SearchCritaria.DepartureDate = $filter('date')(Date.parse($('input[name=depDt]').val().replace(/-/g, " ")), "MMM-dd-yyyy");// $location.search()['depDt'];           
                $scope.single = true;
                $scope.round = false;
                $scope.multi = false;
            }
            if ($('input[name=retDt]').val() != undefined && $('input[name=retDt]').val() != null && $('input[name=retDt]').val() != "") {
                $scope.SearchCritaria.ReturnDate = $filter('date')(Date.parse($('input[name=retDt]').val().replace(/-/g, " ")), "MMM-dd-yyyy");//$location.search()['retDt'];           
                $scope.single = false;
                $scope.round = true;
                $scope.multi = false;
            }
            $scope.urlstr = {
                JType: ($scope.triptypetab == 1 ? 2 : 1),
                org: ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code != undefined ? $scope.SearchCritaria.Origin.AirportFullName.split('-')[0] : $scope.SearchCritaria.Origin),
                dest: ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code != undefined ? $scope.SearchCritaria.Destination.AirportFullName.split('-')[0] : $scope.SearchCritaria.Destination),
                orgCity: ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code != undefined ? ($scope.SearchCritaria.Origin.AirportFullName.split(',')[1]).trim() : $scope.SearchCritaria.Origin),
                destCity: ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code != undefined ? ($scope.SearchCritaria.Destination.AirportFullName.split(',')[1]).trim() : $scope.SearchCritaria.Destination),
                depDt: $scope.SearchCritaria.DepartureDate,
                retDt: ($scope.triptypetab == 1 ? $scope.SearchCritaria.ReturnDate : null),
                ct: ($scope.FlightSearchRQ.Cabin.Class != undefined ? $scope.FlightSearchRQ.Cabin.Class : 1),
                adt: ($scope.FlightSearchRQ.PaxDetail.NoAdult != undefined ? $scope.FlightSearchRQ.PaxDetail.NoAdult : 1),
                snr: ($scope.FlightSearchRQ.PaxDetail.NoSenior != undefined ? $scope.FlightSearchRQ.PaxDetail.NoSenior : 0),
                chd: ($scope.FlightSearchRQ.PaxDetail.NoChild != undefined ? $scope.FlightSearchRQ.PaxDetail.NoChild : 0),
                inf: ($scope.FlightSearchRQ.PaxDetail.NoInfant != undefined ? $scope.FlightSearchRQ.PaxDetail.NoInfant : 0),
                infs: ($scope.FlightSearchRQ.PaxDetail.NoInfantS != undefined ? $scope.FlightSearchRQ.PaxDetail.NoInfantS : 0),
                direct: ($location.search()['direct'] == 'true'),
                air: ($('input[name=air]').val() != undefined ? $('input[name=air]').val() : '')
            };
            //var query = btoa('search' + Math.random());
            //window.localStorage.setItem(query, btoa(JSON.stringify($scope.urlstr)));
            //if ($scope.urlstr.JType == ($scope.FlightSearchRQ.JourneyType == "R" ? 2 : 1) && $scope.urlstr.org == $scope.FlightSearchRQ.Segments.Segment[0].Origin && $scope.urlstr.dest == $scope.FlightSearchRQ.Segments.Segment[0].Destination && $scope.urlstr.depDt == $scope.FlightSearchRQ.Segments.Segment[0].Date && $scope.urlstr.retDt == $scope.FlightSearchRQ.Segments.Segment[1].Date
            //    && $scope.ToFloat($scope.urlstr.ct) == $scope.ToFloat($scope.FlightSearchRQ.Cabin.Class) && $scope.ToFloat($scope.urlstr.adt) == $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) && $scope.ToFloat($scope.urlstr.chd) == $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) && $scope.ToFloat($scope.urlstr.inf) == $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) && $scope.ToFloat($scope.urlstr.infs) == $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) {
            //    $scope.ModifyChk = true;
            //}

            if ($scope.urlstr.JType == ($scope.FlightSearchRQ.JourneyType == "R" ? 2 : 1) && $scope.urlstr.org == $scope.FlightSearchRQ.Segments.Segment[0].Origin && $scope.urlstr.dest == $scope.FlightSearchRQ.Segments.Segment[0].Destination && $scope.urlstr.depDt == $scope.FlightSearchRQ.Segments.Segment[0].Date && $scope.urlstr.retDt == $scope.FlightSearchRQ.Segments.Segment[1].Date
                && $scope.ToFloat($scope.urlstr.ct) == $scope.ToFloat($scope.SearchCritaria.Cabin.Class) && $scope.ToFloat($scope.urlstr.adt) == $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoAdult) && $scope.ToFloat($scope.urlstr.chd) == $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoChild) && $scope.ToFloat($scope.urlstr.inf) == $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfant) && $scope.ToFloat($scope.urlstr.infs) == $scope.ToFloat($scope.SearchCritaria.PaxDetail.NoInfantS)) {
                $scope.ModifyChk = true;
            }

            if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code != undefined && ($scope.SearchCritaria.ReturnDate == "" || $scope.SearchCritaria.ReturnDate == null || Object.keys($scope.SearchCritaria.ReturnDate).length === 0)) {
                $scope.setTripTypeTab(2);
            }
            if ($('input[name=org]').val() != undefined && $('input[name=dest]').val() != undefined && !$scope.ModifyChk) {
                //window.location.href = '/FlightResult?q=' + query;
                window.location.href = '/FlightResult.html' + UserService.convert($scope.urlstr);
            }
            else {
                $scope.progressbar.complete();
                $scope.IsWaiting = false;
            }
        }
        else {
            $scope.progressbar.complete();
            $scope.IsWaiting = false;
        }
    };
    $scope.DeaprtureChanged = function () {
        $scope.callpopup();

        var SelectedDepartingFrom = $filter('IsSelected')($scope.LeftPanelDepartingFiltersData, true);

        //var SelectedArrivingAt = $filter('IsSelected')($scope.LeftPanelArrivalFiltersData, true);
        //if (SelectedArrivingAt.length > 0 && SelectedDepartingFrom.length > 0) {
        //    $scope.tab = 1;
        //}
        //else if (
        //    (SelectedArrivingAt.length > 0 && SelectedArrivingAt[0].AirpCode != $scope.SearchCritaria.Destination.Code) ||
        //    (SelectedDepartingFrom.length > 0 && SelectedDepartingFrom[0].AirpCode != $scope.SearchCritaria.Origin.Code)
        //) {
        //    $scope.tab = 3;
        //}
        //else if (SelectedArrivingAt.length > 0 || SelectedDepartingFrom.length > 0) {
        //    $scope.tab = 1;
        //}

        $scope.Cfilter.SelectedDepartingFrom = SelectedDepartingFrom;
        $scope.appliedDep = $scope.Cfilter.SelectedDepartingFrom;
        $scope.filteredarr = [];
        angular.forEach($scope.flightdata.Flights, function (obj) {
            var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
            if (result) {
                $scope.filteredarr.push(obj);
            }
        });
        $scope.loadresults = [];
        $scope.LoadMoreResults(1);
    };

    $scope.ReturnChanged = function () {
        //$scope.callpopup();
        $scope.Cfilter.SelectedReturnFrom = $filter('IsSelected')($scope.LeftPanelReturningFiltersData, true);
        $scope.appliedRet = $scope.Cfilter.SelectedReturnFrom;
        $scope.filteredarr = [];
        angular.forEach($scope.flightdata.Flights, function (obj) {
            var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
            if (result) {
                $scope.filteredarr.push(obj);
            }
        });
        $scope.loadresults = [];
        $scope.LoadMoreResults(1);
    };
    $scope.connectingChanged = function () {
        $scope.callpopup();
        $scope.Cfilter.SelectedConnectingIn = $filter('IsSelected')($scope.Cfilter.ConnectingInOptions, true);
    }
    $scope.arrivingChanged = function () {
        $scope.callpopup();
        var SelectedDepartingFrom = $filter('IsSelected')($scope.LeftPanelDepartingFiltersData, true);
        var SelectedArrivingAt = $filter('IsSelected')($scope.LeftPanelArrivalFiltersData, true);
        if (SelectedDepartingFrom.length > 0 && SelectedArrivingAt.length > 0) {
            $scope.tab = 1;
        }
        else if (
            (SelectedDepartingFrom.length > 0 && SelectedDepartingFrom[0].AirpCode != $scope.SearchCritaria.Origin.Code) ||
            (SelectedArrivingAt.length > 0 && SelectedArrivingAt[0].AirpCode != $scope.SearchCritaria.Destination.Code)
        ) {
            $scope.tab = 3;
        }
        else if (SelectedArrivingAt.length > 0 || SelectedDepartingFrom.length > 0) {
            $scope.tab = 1;
        }

        $scope.Cfilter.SelectedArrivingAt = SelectedArrivingAt;
    }
    $scope.airlineChange = function () {
        // $scope.callpopup();                   

        $scope.Cfilter.SelectedSpecificAirlines = $filter('IsSelected')($scope.specificAirlines, true);
        $scope.appliedAir = $scope.Cfilter.SelectedSpecificAirlines;
        $scope.filteredarr = [];
        angular.forEach($scope.flightdata.Flights, function (obj) {
            var result = $filter('ItineraryFilter')(obj, $scope.Cfilter);
            if (result) {
                $scope.filteredarr.push(obj);
            }
        });
        $scope.loadresults = [];
        $scope.LoadMoreResults(1);
    }
    $scope.cabinChange = function () {
        $scope.callpopup();
        //console.log(this);
        $scope.Cfilter.SelectedCabinClass = $filter('IsSelected')($scope.CabinClass, true);
    }
    $scope.callpopup = function () {
        // $scope.IsWaiting = true;

        $timeout(function () {
            $scope.IsWaiting = false;
            //var scrollTop = $('#resultFound').offset().top;
            //$window.scrollTo({
            //    top: scrollTop,
            //    behavior: "smooth"
            //});
        }, 500);
    }
    $scope.callpopupSessionExpired = function () {
        $scope.IsExpired = true;
    }
    $scope.GetAirportName = function (code) {
        if (code != undefined) {
            var name = code;
            angular.forEach($scope.Airportslist, function (item) {
                if (item.AirportFullName.split('-')[0] == code.toUpperCase()) {
                    name = (item.AirportFullName.split('-')[1]).split(',')[0];
                    return false;
                }
            });
            if (code == name) {
                angular.forEach($scope.AirportsDetailedList, function (item) {
                    if (item.AirportFullName.split('-')[0] == code.toUpperCase()) {
                        name = (item.AirportFullName.split('-')[1]).split(',')[0];
                        $scope.Airportslist.push(item);
                        return false;
                    }
                });
            }
            return name;
        }
        else
            return;
    };

    $scope.firstflag = false;

    $scope.search = function (item) {
        if (item != null && item != undefined) {
            //var departuresectors = $filter('IsReturn')(item.Sectors.Sector, 'FALSE');

            //var arrivalsectors = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');

            //if (departuresectors.length == 1 && (arrivalsectors.length == 1 || arrivalsectors.length == 0) && $scope.Cfilter.Stops.NonstopMinFare == 0) {
            //    $scope.Cfilter.Stops.NonstopMinFare = parseFloat(item.Adult.AdtBFare) + parseFloat(item.Adult.AdTax);

            //}
            //else if ((departuresectors.length == 2 || arrivalsectors.length == 2) && item.Sectors.Sector.length <= 4 && $scope.Cfilter.Stops.OnestopMinFare == 0) {
            //    $scope.Cfilter.Stops.OnestopMinFare = parseFloat(item.Adult.AdtBFare) + parseFloat(item.Adult.AdTax);
            //}
            //else if ((departuresectors.length > 2 || arrivalsectors.length > 2) && $scope.Cfilter.Stops.TwostopMinFare == 0) {
            //    $scope.Cfilter.Stops.TwostopMinFare = parseFloat(item.Adult.AdtBFare) + parseFloat(item.Adult.AdTax);
            //}
            if (item.UniqueRef == "C99") {
                debugger;
            }

            //Innitialize filterdata
            $scope.Cfilter.DepartingFromOptions = $scope.LeftPanelDepartingFiltersData;
            $scope.Cfilter.ArrivalAtOptions = $scope.LeftPanelArrivalFiltersData;
            $scope.Cfilter.specificAirlines = $scope.specificAirlines;
            $scope.Cfilter.CabinClass = $scope.CabinClass;
            $scope.Cfilter.ReturnFromOptions = $scope.LeftPanelReturningFiltersData;
            $scope.Cfilter.priceSlider = {
                min: $scope.min,// $scope.priceSlider.min,
                max: $scope.max,// $scope.priceSlider.max + 5,
                ceil: $scope.priceSlider.options.ceil,
                floor: $scope.priceSlider.options.floor,
                step: 1
            };
            $scope.Cfilter.depTimeSlider = {
                min: $scope.Depmin,
                max: $scope.Depmax,
                ceil: 0,
                floor: 1440,
                step: 1
            };
            $scope.Cfilter.retTimeSlider = {
                min: $scope.Retmin,
                max: $scope.Retmax,
                ceil: 0,
                floor: 1440,
                step: 1
            };


            var result = $filter('ItineraryFilter')(item, $scope.Cfilter);
            setTimeout(function () { $scope.firstflag = true; }, 2000);

            if (result)
                return result;
            return false;
        }
    };
    //**************Filter

    $scope.SelectDeparture = function (item) {
        $scope.callpopup();

        $window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if ($scope.Cfilter.SetectedCriteria.SelectedDeparture && $scope.Cfilter.SetectedCriteria.SelectedDeparture.UniqueRef == item.UniqueRef) {
            $scope.Cfilter.SetectedCriteria.SelectedDeparture = null;
            $scope.Cfilter.SetectedCriteria.SelectedUniqueRef = "";
        } else {
            $scope.Cfilter.SetectedCriteria.SelectedDeparture = item;
            var dep = $filter('IsReturn')(item.Sectors.Sector, 'FALSE');
            $scope.Cfilter.SetectedCriteria.SelectedUniqueRef = "";
            angular.forEach(dep, function (obj) {
                $scope.Cfilter.SetectedCriteria.SelectedUniqueRef = $scope.Cfilter.SetectedCriteria.SelectedUniqueRef + obj.AirlineName + obj.FltNum + obj.Departure.Date + obj.Departure.Time + obj.Arrival.Date + obj.Arrival.Time;
            });
        }



    }

    $scope.SelectReturn = function (item) {
        $scope.callpopup();

        $window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if ($scope.Cfilter.SetectedCriteria.SelectedReturn && $scope.Cfilter.SetectedCriteria.SelectedReturn.UniqueRef == item.UniqueRef) {
            $scope.Cfilter.SetectedCriteria.SelectedReturn = null;
            $scope.Cfilter.SetectedCriteria.SelectedUniqueRef = "";
        } else {

            $scope.Cfilter.SetectedCriteria.SelectedReturn = item;
            //$scope.Cfilter.SetectedCriteria.SelectedUniqueRef = "";
            var dep = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');
            angular.forEach(dep, function (obj) {
                $scope.Cfilter.SetectedCriteria.SelectedUniqueRef = $scope.Cfilter.SetectedCriteria.SelectedUniqueRef + obj.AirlineName + obj.FltNum + obj.Departure.Date + obj.Departure.Time + obj.Arrival.Date + obj.Arrival.Time;
            });
        }

    }

    $scope.SelectedDetails = {};
    $scope.togglecallDetail = function (i) {
        $("#searchcallItem-" + i).toggleClass('show');
    }

    $scope.showFare = function ($event) {
        if ($($($event.currentTarget).next()).css('display') == 'none') {
            // $(".fare_breakup_detail").hide();
            $($event.currentTarget).next().slideDown();
        }
    }
    $scope.hideDeatils = function () {
        $(".flightDetailWrapper").css("width", "0%");
        $(".flightDetailWrapper .flightDetail_popup .detail_footer").css("right", "-200%");
        $("#ff-theme").removeClass("open-model");
    };
    $scope.toggleDeatils = function (i) {
        var arr = $scope.flightdata.Flights;
        $scope.SelectedDetails = $.grep(arr, function (item, index) {
            return item.UniqueRef == i;
        });
        clickTabShow('departTabcontent', 'departTab');
        $(".flightDetailWrapper").css("width", "100%");
        $(".flightDetailWrapper .flightDetail_popup .detail_footer").css("right", "0%");
        $("#ff-theme").addClass("open-model");
    }
    $scope.CheckinBaggage = [];
    $scope.CheckInBag = false;
    $scope.baggageDetails = function (i) {
        $scope.CheckinBaggage = [];
        $scope.CheckInBag = false;
        var arr = $scope.flightdata.Flights;
        var selectedContract = $.grep(arr, function (item, index) {
            return $scope.ToFloat(item.ContractID) == $scope.ToFloat(i);
        });
        var sectors = [];
        $.merge($.merge(sectors, selectedContract[0].FlightSegmentDetails.OutBoundSegment), (selectedContract[0].FlightSegmentDetails.InBoundSegment != null ? selectedContract[0].FlightSegmentDetails.InBoundSegment : []));
        var airlines = '';
        $.each(sectors, function (index, data) {
            if (airlines.indexOf(data.MarketingCarrier.AirlineCode) === -1) {
                airlines += data.MarketingCarrier.AirlineCode + "*";
                return true;
            }
        });
        //$scope.Baggagedetail.SelectedContract = selectedContract[0];
        //$scope.Baggagedetail.FlightSearch = $scope.FlightSearchRQData;

        //var req = {
        //    method: 'POST',            
        //    url: '/api/Flightapi/FareInformativePricing',
        //    headers: {
        //        'Content-Type': 'application/json'                                               
        //    },
        //    data: $scope.Baggagedetail
        //};        

        //$http(req).then(function (response) {
        //    console.log(response.data);
        //},function (reason) {
        //    $scope.progressbar.complete();           
        //    $scope.error = reason.data;            
        //});

        $.ajax({
            type: "GET",
            url: commonUrl + 'flight/GetAirlineBaggage?airlinecode=' + airlines.substring(0, airlines.length - 1),
            dataType: 'JSON',
            success: function (response) {
                $scope.CheckinBaggage = response;
                $scope.CheckInBag = true;
                $scope.$apply();
            },
            error: function (data) {
                $scope.IsWaiting = false;
                $scope.error = data;
                $log.info(data);

            }
        });

        //window.open("/baggage?airlinecode=" + airlines.substring(0, airlines.length - 1), 'Baggage', "resizable=yes,scrollbars=yes,width=400,height=450");
    }

    $scope.HideBagpop = function () {
        $scope.CheckInBag = false;
    }

    $scope.isInView = function (elm) {
        setTimeout(function () {
            var dis = window.innerHeight - ($('#' + elm).offset().top + $('#' + elm).outerHeight() + 7);
            if (dis <= 0) {
                $('html, body').animate({ scrollTop: '+=' + Math.abs(dis) + 'px' }, 'slow');
            }
        }, 400);
    }


    $scope.displaynone = function (i) {
        $("#upperbtn-" + i + ",#upperbtn" + i).css('display', 'none');
    };

    $scope.displayblock = function (i) {
        $("#upperbtn-" + i + ",#upperbtn" + i).css('display', 'block');
    };

    $scope.removeDuplicate = function (name) {
        if (name != undefined && name != null) {
            var myArray = name.split(' ');
            var myNewArray = myArray.filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            });
            return (myNewArray.join()).replace(/,/g, " ");
        }
        return false;
    };
    $scope.IsShowReturn = function (FDetail) {
        if ($scope.Cfilter.SetectedCriteria.SelectedReturn != null && Object.keys($scope.Cfilter.SetectedCriteria.SelectedReturn).length > 0)
            return false;
        if (($filter('IsReturn')(FDetail, 'TRUE')).length <= 0) {
            return false;
        }
        return true;
        //if (FDetail)
    }

    //**********************Post
    // Required Data
    $scope.tag = false;
    $scope.firstcheapest = 0;
    $scope.firsttime = 5;
    $scope.showhide = false;
    $scope.ShowFirstTime = function () {
        if ($scope.showhide == false) {
            $scope.firsttime = $scope.LeftPanelConnectingFiltersData.length;
            $scope.showhide = true;
        } else {
            $scope.firsttime = 5;
            $scope.showhide = false;
        }
    }
    $scope.firstair = 5;
    $scope.showhideair = false;
    $scope.ShowFirstAir = function () {
        if ($scope.showhideair == false) {
            $scope.firstair = $scope.specificAirlines.length;
            $scope.showhideair = true;
        } else {
            $scope.firstair = 5;
            $scope.showhideair = false;
        }
    }

    $scope.FlightSearchRQ = {
        Master: {
            CompanyId: "1",
            AgentId: "",
            BranchId: "",
            CoustmerType: "DIR",
            LangCode: "EN",
            MetaName: ""

        },
        SiteId: "79",
        Direct: "0",
        JourneyType: "O",
        DeviceName: "D",
        Currency: "USD",
        Segments: {
            Segment: [
                {
                    Origin: "MIA",
                    Destination: "JFK",
                    Date: "2018-10-16",                   
                    _id: "1"
                },
                {
                    Origin: "JFK",
                    Destination: "MIA",
                    Date: "2018-10-25",                  
                    _id: "2"
                }
            ]
        },
        PaxDetail: {
            NoAdult: 1,
            NoSenior: 0,
            NoChild: 0,
            NoInfant: 0,
            NoInfantS: 0,
            NoOfAdult: 1,
            NoOfSenior: 0,
            NoOfChild: 0,
            NoOfInfant: 0,
            NoOfInfantS: 0
        },
        Flexi: "0",
        Cabin: {
            Class: 1
        },
        Airlines: {
            Airline: [""],
            Exclude: ["NA"]
        },
        Authentication: {
            HAP: "HP_149615508488445",
            HapPassword: "35rq_17",
            HapType: "LIVE"
        },
        ITINS: "true",
        flightGuid: ""
    };

    $scope.FlightSearchRQData = {
        searchID: 0,
        portalID: 79,
        originCode: "NYC",
        originCityCode: "NYC",
        destCode: "DXB",
        destCityCode: "DXB",
        departureDate: "2021-05-20T00:00:00",
        returnDate: null,
        senior: 0,
        adult: 1,
        child: 0,
        infant: 0,
        infantInLap: 0,
        tripType: 1,
        cabinClass: 1,
        preferredCarrier: null,
        customerIpAddress: "192.168.1.1",
        serverMachineName: null,
        flightGuid: null,
        totalPaxCount: 1,
        flexiblityqualifier: null,
        refundableFaresOnly: false,
        isDirectFlight: false,
        isFlexibalFlight: true,
        appServer: null,
        searchDate: "0001-01-01T00:00:00"
    };

    $scope.hideBanner = function () {
        $scope.IsBanner = false;
        $scope.flagsess = true;
        $("#ff-theme").removeClass("open-model");
        $timeout.cancel(TimeOut_Thread);

    };

    $scope.getGridSize = function () {
        return (window.innerWidth < 600) ? 2 :
            (window.innerWidth < 900) ? 5 : 6;
    }

    $scope.slickslider = function () {
        $('.matrix__slider').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false

                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false


                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: true,
                        dots: false


                    }
                }
            ]
        });
    };

    $scope.getWithExpiry = function (key) {
        const itemStr = localStorage.getItem(key)
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        if (now.getTime() > item.expiry) {
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }

    $scope.lazyLoadingMatrixList = function () {

        var lazyLoadItemsUL = '',
            airlines = [{ "Key": "HR", "Value": "Hahn Air" }, { "Key": "EY", "Value": "Etihad Airways" }, { "Key": "LH", "Value": "Lufthansa" }, { "Key": "AC", "Value": "Air Canada" }, { "Key": "VS", "Value": "Virgin Atlantic" }, { "Key": "UL", "Value": "Srilankan" }, { "Key": "NH", "Value": "ANA" }, { "Key": "QR", "Value": "Qatar Airways" }, { "Key": "EK", "Value": "Emirates Airline" }, { "Key": "QF", "Value": "Qantas Airways" }, { "Key": "BA", "Value": "British Airways" }, { "Key": "UA", "Value": "United Airlines" }, { "Key": "DL", "Value": "Delta Airlines" }, { "Key": "AS", "Value": "Alaska Airlines" }, { "Key": "AZ", "Value": "Alitalia Airlines" }, { "Key": "HA", "Value": "Hawaiian Airlines" }, { "Key": "LX", "Value": "Swiss Airlines" }];

        for (var index = 0; index < airlines.length - 1; index++) {

            if (index == 0) {
                lazyLoadItemsUL += '<div class="item active"><img src="/images1/airline_logo_images/al_logo_' + airlines[index].Key + '.png">  <img src="/images1/airline_logo_images/al_logo_' + airlines[index + 1].Key + '.png"></div>';
            } else {
                lazyLoadItemsUL += '<div class="item"><img src="/images1/airline_logo_images/al_logo_' + airlines[index].Key + '.png">  <img src="/images1/airline_logo_images/al_logo_' + airlines[index + 1].Key + '.png"></div>';
            }

        }

        $('#lazyLoadingItemContainer').prepend(lazyLoadItemsUL);
        setTimeout(function () {
            if ($scope.tag == false) {
                $('#productCarousel').carousel({
                    interval: 2000,
                    pause: "false"
                });
            }
        }, 200);

    }
    $scope.finalchild = 0;
    $scope.urlKey = '';
    $scope.SearchOrg = '';
    $scope.SearchDest = '';
    $scope.SearchDep = '';
    $scope.SearchRet = '';
    $scope.orgnear = false;
    $scope.destnear = false;
    $scope.dataList = [];
    $scope.resKey = '';
    $scope.IsRkey = false;

    /*Search Process get result */

    var cacheRequest = {
        method: 'GET',
        url: '/api/Flightapi/GetCache?key=' + $location.search()['Rkey'],
        headers: {
            contentType: 'application/json'
        }
    };

    $scope.loadData = function () {
        $scope.IsRkey = false;
        var loadRequest = {
            method: 'GET',
            //url: cdnUrl + '/airportsdetails/list',
            // url: '/AirportsDetails/List',
			url: '/airports.json',
            headers: {
                contentType: 'application/json',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*'
            }
        };
        if ($location.search()['Rkey'] != undefined && $location.search()['Rkey'] != null && $location.search()['Rkey'] != '') {
            $scope.IsWaiting = false;
            $scope.IsRkey = true;
        }
        if ($window.innerWidth > 750) {
            $('#mob_desk').val(0);
        } else {
            $('#mob_desk').val(1);
        }
        // var data = $scope.getWithExpiry($location.search()['Rkey']);    
        // $scope.urlKey = btoa('url' + Math.random());
        $scope.mailsent = false;
        $scope.object = {};

        if ($location.search()['depDt'] != undefined) {
            $scope.SearchCritaria.DepartureDate = moment($location.search()['depDt'].replace(/-/g, ' ')).format("MMM-DD-YYYY");// $location.search()['depDt'];
            $scope.SearchDep = moment($scope.SearchCritaria.DepartureDate, "MMM-DD-YYYY").format("ddd, MMM DD");
            $scope.single = true;
            $scope.round = false;
            $scope.multi = false;
            $scope.FlightSearchRQ.Segments.Segment[0].Date = $scope.SearchCritaria.DepartureDate;
        }
        if ($location.search()['retDt'] != undefined && $location.search()['retDt'] != null && $location.search()['retDt'] != "null" && $location.search()['retDt'] != "" && ($location.search()['JType'] == "2" || $location.search()['Type'] == "2")) {
            $scope.SearchCritaria.ReturnDate = moment($location.search()['retDt'].replace(/-/g, ' ')).format("MMM-DD-YYYY");//$location.search()['retDt'];
            $scope.SearchRet = moment($scope.SearchCritaria.ReturnDate, "MMM-DD-YYYY").format("ddd, MMM DD");
            $scope.single = false;
            $scope.round = true;
            $scope.multi = false;
            $scope.FlightSearchRQ.Segments.Segment[1].Date = $scope.SearchCritaria.ReturnDate;
        }
        if ($location.search()['org'] != null && $location.search()['org'] != undefined) {
            $scope.SearchOrg = $location.search()['org'] + (($location.search()['orgCity'] != null && $location.search()['orgCity'] != undefined) ? "-" + $location.search()['orgCity'] : "");
        }
        if ($location.search()['dest'] != null && $location.search()['dest'] != undefined) {
            $scope.SearchDest = $location.search()['dest'] + (($location.search()['destCity'] != null && $location.search()['destCity'] != undefined) ? "-" + $location.search()['destCity'] : "");
        }

        if ($location.search()['Rkey'] != undefined && $location.search()['Rkey'] != null && $location.search()['Rkey'] != '' && $('input[name=response]').val() != "") {
            // $http(cacheRequest).then(function (response) {
            var response = {
                data: null
            };

            response.data = JSON.parse($('input[name=response]').val());
            if (response.data != null) {
                $scope.resKey = $location.search()['Rkey'];
                $scope.urlKey = "url_" + $scope.resKey;
                window.localStorage.setItem($scope.urlKey, window.location.href);
                $scope.dataList = response.data.FlightSearchRS.Itineraries;
            }
            else {
                $scope.resKey = btoa('result' + Math.random());
                $scope.urlKey = "url_" + $scope.resKey;
                var s = window.location.href;
                if (s.indexOf("&Rkey") > -1) {
                    window.localStorage.setItem($scope.urlKey, s.replace("#price", "").replace("#stops", "").replace("#airlines", "").replace("#time", "").substring(0, s.indexOf("&Rkey")) + "&Rkey=" + $scope.resKey);
                } else {
                    window.localStorage.setItem($scope.urlKey, s.replace("#price", "").replace("#stops", "").replace("#airlines", "").replace("#time", "") + "&Rkey=" + $scope.resKey);
                }
            }

            // $http(loadRequest).then(function (response) {

            $scope.AirportsDetailedList = response.data.Airportlist;
            $scope.FlightSearchRQData.customerIpAddress = response.data.FlightSearchRQData.customerIpAddress;//govind

            //************* read query string content start here

            if ($location.search()['org'] != null && $location.search()['org'] != undefined) {
                var foundOrg = [];
                foundOrg = jQuery.grep(response.data.Airportlist, function (a) {
                    return a.AirportFullName.split('-')[0].toUpperCase() == $location.search()['org'].toUpperCase();
                });
                $scope.SearchCritaria.Origin = foundOrg.length > 0 ? foundOrg[0] : null;

                if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code.toUpperCase() !== $location.search()['org'].toUpperCase()) {
                    $scope.orgnear = true;
                }
                $scope.FlightSearchRQ.Segments.Segment[0].Origin = $scope.SearchCritaria.Origin.Code.toUpperCase();
                $("#ex1_value,#ex3_value").addClass('input_clear');
                $("#ex1_value,#ex3_value").addClass('x');
            }

            if ($location.search()['dest'] != null && $location.search()['dest'] != undefined) {
                var foundDest = [];
                foundDest = jQuery.grep(response.data.Airportlist, function (a) {
                    return a.AirportFullName.split('-')[0].toUpperCase() == $location.search()['dest'].toUpperCase();
                });
                $scope.SearchCritaria.Destination = foundDest.length > 0 ? foundDest[0] : null;
                if ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code.toUpperCase() !== $location.search()['dest'].toUpperCase()) {
                    $scope.destnear = true;
                }
                $scope.FlightSearchRQ.Segments.Segment[0].Destination = $scope.SearchCritaria.Destination.Code.toUpperCase();
                $("#ex2_value,#ex4_value").addClass('input_clear');
                $("#ex2_value,#ex4_value").addClass('x');

            }

            if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin != undefined && ($scope.SearchCritaria.ReturnDate == "" || $scope.SearchCritaria.ReturnDate == null || Object.keys($scope.SearchCritaria.ReturnDate).length === 0)) {
                $scope.setTripTypeTab(2);
                $scope.FlightSearchRQData.tripType = 1;
            } else {
                $scope.setTripTypeTab(1);
                $scope.FlightSearchRQData.tripType = 2;
            }
            if (($location.search()['JType'] != undefined && $location.search()['JType'] != "multi") || ($location.search()['Type'] != undefined && $location.search()['Type'] != "multi")) {
                setTimeout(function () {
                    $("#datepicker2").datepicker("option", "minDate", moment($location.search()['depDt'].replace(/-/g, ' ')).format("DD MMM YYYY"));
                    $("#datepicker2").datepicker();
                    if ($location.search()['retDt'] != null && $location.search()['retDt'] != undefined && $location.search()['retDt'] != "") {
                        $("#datepicker2").datepicker("setDate", moment($location.search()['retDt'].replace(/-/g, ' ')).format("DD MMM YYYY"));
                        $('#datepicker2').val($scope.SearchCritaria.ReturnDate);
                    }
                }, 300);
            }

            if ($location.search()['ct'] != undefined) {
                $scope.FlightSearchRQ.Cabin.Class = ($filter('ClassTypeCode')($location.search()['ct']));
                $scope.SearchCritaria.Cabin.Class = ($filter('ClassTypeCode')($location.search()['ct']));
                $scope.FlightSearchRQData.cabinClass = $scope.ToFloat($location.search()['ct']);
                classTypeChanged($scope.FlightSearchRQData.cabinClass, ($scope.FlightSearchRQData.cabinClass == 1 ? 0 : $scope.FlightSearchRQData.cabinClass == 2 ? 1 : $scope.FlightSearchRQData.cabinClass == 4 ? 2 : $scope.FlightSearchRQData.cabinClass == 6 ? 3 : 0));
            }
            if ($location.search()['adt'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoAdult = $location.search()['adt'];
                $scope.SearchCritaria.PaxDetail.NoAdult = $location.search()['adt'];
                $scope.FlightSearchRQData.adult = $scope.ToFloat($location.search()['adt']);

            }
            if ($location.search()['snr'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoSenior = $location.search()['snr'];
                $scope.SearchCritaria.PaxDetail.NoSenior = $location.search()['snr'];
                $scope.FlightSearchRQData.senior = $scope.ToFloat($location.search()['snr']);

            }
            if ($location.search()['chd'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoChild = $location.search()['chd'];
                $scope.SearchCritaria.PaxDetail.NoChild = $location.search()['chd'];
                $scope.FlightSearchRQData.child = $scope.ToFloat($location.search()['chd']);
            }
            if ($location.search()['infs'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoInfantS = $location.search()['infs'];
                $scope.SearchCritaria.PaxDetail.NoInfantS = $location.search()['infs'];
                $scope.FlightSearchRQData.infant = $scope.ToFloat($location.search()['infs']);
            }
            if ($location.search()['inf'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoInfant = $location.search()['inf'];
                $scope.SearchCritaria.PaxDetail.NoInfant = $location.search()['inf'];
                $scope.FlightSearchRQData.infantInLap = $scope.ToFloat($location.search()['inf']);
            }
            if ($location.search()['air'] != undefined && $location.search()['air'] != '') {
                $scope.FlightSearchRQ.Airlines.Airline.push( $location.search()['air']);
                $scope.FlightSearchRQData.preferredCarrier = $location.search()['air'];
            }
            if ($location.search()['direct'] != undefined && $location.search()['direct'] != '') {
                $scope.FlightSearchRQ.Direct = ($location.search()['direct'] == 'true' ?"1":"0");
                $scope.FlightSearchRQData.isDirectFlight = ($location.search()['direct'] == 'true');
            }
            $scope.FlightSearchRQData.searchDate = moment(new Date()).format("YYYY-MM-DD");
            $scope.FlightSearchRQData.flightGuid = $scope.resKey;
            $scope.FlightSearchRQ.flightGuid = $scope.resKey;

            $scope.Airportslist = $.grep($scope.AirportsDetailedList, function (b) {
                return b.Code === $scope.SearchCritaria.Origin.Code || b.Code === $scope.SearchCritaria.Destination.Code;
            });

            if ($scope.dataList != null && $scope.dataList.Itinerary.length > 0) {
                $scope.flightdata.Flights = $scope.dataList;
                $scope.flightdata.CheapestFlights = $scope.dataList;
                $scope.sortprocessArray($scope.flightdata.Flights);
                $scope.specificAirlines = response.data.FlightSearchRS.specificAirlines;

                $scope.SearchCritaria.Skey = response.data.FlightSearchRS.SKey;
                $scope.CheapestSkey = $scope.SearchCritaria.Skey;
                $scope.count = $scope.flightdata.Flights.Itinerary.length;


                if ($scope.flightdata.Flights.Itinerary.length > 0)
                    $scope.Minfare = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax));

                if ($scope.flightdata.Flights.Itinerary.length > 0)
                    $scope.Maxfare = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdTax));


                $scope.MinCheapest = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax));

                //*******Calculate MinFare
                if (response.data.FlightSearchRS.AltDateFlights != null && response.data.FlightSearchRS.AltDateFlights != undefined) {
                    $scope.flightdata.AltDateFlights = response.data.FlightSearchRS.AltDateFlights;
                    if ($scope.flightdata.AltDateFlights.Itinerary.length > 0 && Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax))
                        > Math.trunc($scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdTax))) {
                        $scope.Minfare = Math.trunc($scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdTax));
                    }
                }
                if (response.data.FlightSearchRS.AltAirportFlights != null && response.data.FlightSearchRS.AltAirportFlights != undefined) {
                    $scope.flightdata.AltAirportFlights = response.data.FlightSearchRS.AltAirportFlights;
                    if ($scope.flightdata.AltAirportFlights.Itinerary != undefined && $scope.flightdata.AltAirportFlights.Itinerary.length > 0 && $scope.Minfare > Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdTax))) {
                        $scope.Minfare = Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdTax));
                    }
                }
                //*******Calculate MinFare
                //*******Calculate MaxFare
                if (response.data.FlightSearchRS.AltDateFlights != null && response.data.FlightSearchRS.AltDateFlights != undefined && $scope.flightdata.AltDateFlights.Itinerary != undefined && $scope.flightdata.AltDateFlights.Itinerary.length > 0 && Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdTax))
                    > Math.trunc($scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdTax))) {
                    $scope.Maxfare = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdTax));
                }
                //else if (response.data.FlightSearchRS.AltDateFlights != null && response.data.FlightSearchRS.AltDateFlights != undefined && $scope.flightdata.AltDateFlights.Itinerary != undefined && $scope.flightdata.AltDateFlights.Itinerary.length > 0) {
                //    $scope.Maxfare = (Math.trunc($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdtBFare) + Math.trunc($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdTax));
                //}
                if ($scope.flightdata.AltAirportFlights.Itinerary != null && $scope.flightdata.AltAirportFlights.Itinerary != undefined && $scope.flightdata.AltAirportFlights.Itinerary.length > 0 && $scope.Maxfare < Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdTax))) {
                    $scope.Maxfare = Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdTax));
                }
                //*******Calculate MaxFare


                $.each($scope.flightdata.Flights.Itinerary, function (index, data) {
                    var index1 = -1;

                    var departuresectors = $filter('IsReturn')(data.Sectors.Sector, 'FALSE');
                    var arrivalsectors = $filter('IsReturn')(data.Sectors.Sector, 'TRUE');

                    if (departuresectors.length == 1 && (arrivalsectors.length == 1 || arrivalsectors.length == 0) && $scope.Cfilter.Stops.NonstopMinFare == 0) {
                        $scope.Cfilter.Stops.NonstopMinFare = parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax);
                    }
                    else if ((departuresectors.length == 2 || arrivalsectors.length == 2) && data.Sectors.Sector.length <= 4 && $scope.Cfilter.Stops.OnestopMinFare == 0) {
                        $scope.Cfilter.Stops.OnestopMinFare = parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax);
                    }
                    else if ((departuresectors.length > 2 || arrivalsectors.length > 2) && $scope.Cfilter.Stops.TwostopMinFare == 0) {
                        $scope.Cfilter.Stops.TwostopMinFare = parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax);
                    }


                    $scope.CabinClass.some(function (elem, i) {
                        return elem.name.toUpperCase() === data.Sectors.Sector[0].CabinClass.Des.toUpperCase() ? (index1 = i, true) : false;
                    });
                    if (index1 < 0) {
                        $scope.CabinClass.push({ name: data.Sectors.Sector[0].CabinClass.Des.toUpperCase(), price: parseFloat(parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax)) });
                    }
                    else {
                        var price = $scope.CabinClass[index1].price;
                        $scope.CabinClass[index1].price = parseFloat(parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax)) < parseFloat(price) ? parseFloat(parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax)) : parseFloat(price);
                    }
                });

                //if ($scope.flightdata.Shortest != null && $scope.flightdata.Shortest != undefined && $scope.flightdata.Shortest.length > 0) {
                //    $scope.flightdata.Shortest.sort(function (a, b) {
                //        return parseFloat(parseInt(a.TotalOutBoundFlightDuration.replace('.', '').split(':')[0]) * 60 + parseInt(a.TotalOutBoundFlightDuration.replace('.', '').split(':')[1])) - parseFloat(parseInt(b.TotalOutBoundFlightDuration.replace('.', '').split(':')[0]) * 60 + parseInt(b.TotalOutBoundFlightDuration.replace('.', '').split(':')[1]))
                //    });
                //}
                if ($scope.flightdata.Shortest != null && $scope.flightdata.Shortest.Itinerary != undefined && $scope.flightdata.Shortest.Itinerary.length > 0) {
                    $scope.sortprocessArray($scope.flightdata.Shortest);
                }


                $scope.LeftPanelDepartingFiltersData = $scope.leftPanelFilterData("departing");
                $scope.Cfilter.DepartingFromOptions = $scope.LeftPanelDepartingFiltersData;
                $scope.Cfilter.SelectedDepartingFrom = $filter('IsSelected')($scope.LeftPanelDepartingFiltersData, true);
                $scope.LeftPanelArrivalFiltersData = $scope.leftPanelFilterData("arrival");
                $scope.Cfilter.ArrivalAtOptions = $scope.LeftPanelArrivalFiltersData;
                $scope.Cfilter.SelectedArrivingAt = $filter('IsSelected')($scope.Cfilter.ArrivalAtOptions, true);

                $scope.LeftPanelReturningFiltersData = $scope.leftPanelFilterData("returning");
                $scope.Cfilter.ReturnFromOptions = $scope.LeftPanelReturningFiltersData;
                $scope.Cfilter.SelectedReturnFrom = $filter('IsSelected')($scope.Cfilter.ReturnFromOptions, true);

                $scope.LeftPanelConnectingFiltersData = $scope.leftPanelFilterData("connecting");
                $scope.Cfilter.ConnectingInOptions = $scope.LeftPanelConnectingFiltersData;
                $scope.Cfilter.SelectedConnectingIn = $filter('IsSelected')($scope.Cfilter.ConnectingInOptions, true);
                $scope.Cfilter.SelectedSpecificAirlines = $filter('IsSelected')($scope.specificAirlines, true);
                $scope.Cfilter.CabinClass = $filter('IsSelected')($scope.CabinClass, true);
                $scope.firstcheapest = parseFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + parseFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax);

                //=============new concept
                if ($scope.flightdata.AltAirportFlights != null && $scope.flightdata.AltAirportFlights.Itinerary.length > 0) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltAirportFlights.Itinerary.slice(0, 2));
                }
                if ($scope.flightdata.AltDateFlights != null && $scope.flightdata.AltDateFlights.Itinerary.length > 0) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltDateFlights.Itinerary.slice(0, 2));
                }
                if ($scope.flightdata.CheapestFlights != null && $scope.flightdata.CheapestFlights.Itinerary.length > 0) {
                    $.merge($scope.CustomArr, $scope.flightdata.CheapestFlights.Itinerary)
                }

                $scope.sortprocessArray($scope.CustomArr);
                if ($scope.flightdata.AltAirportFlights != null && $scope.flightdata.AltAirportFlights.Itinerary.length > 2) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltAirportFlights.Itinerary.slice(2));
                }
                if ($scope.flightdata.AltDateFlights != null && $scope.flightdata.AltDateFlights.Itinerary.length > 2) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltDateFlights.Itinerary.slice(2));
                }
                $scope.flightdata.Flights = $scope.CustomArr;
                //=============new concept

                $scope.MainResponse = $scope.flightdata.Flights;
                $scope.filteredarr = $scope.flightdata.Flights;
                $scope.LoadMoreResults(1);

                $scope.flagtag = true;
                $scope.IsWaiting = false;
                $scope.IsRkey = false;
                setTimeout(function () {
                    $scope.slickslider();
                    $scope.min = parseInt($scope.Minfare);
                    $scope.SliderMin = parseInt($scope.min) + 1;
                    $scope.max = parseInt($scope.Maxfare) + 1;//+1
                    $scope.SliderMax = parseInt($scope.max);


                    $scope.Depmin = 0;
                    $scope.Depmax = 1440;
                    $scope.DepStart = 0;
                    $scope.DepEnd = 1440;

                    $scope.Retmin = 0;
                    $scope.Retmax = 1440;
                    $scope.RetStart = 0;
                    $scope.RetEnd = 1440;
                    $scope.$apply();

                }, 400);


                //TimeOutTimerValue = 15000;
                //TimeOut_Thread = $timeout(function () { $scope.LogoutByTimer() }, TimeOutTimerValue);
                $scope.progressbar.complete();
            }
            else {

                if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin != undefined && $scope.SearchCritaria.Destination != undefined) {
                    $scope.IsRkey = false;
                    $scope.SearchFlight();
                }
                else {
                    $scope.progressbar.complete();
                    $scope.IsWaiting = false;
                }
            }
            //},
            //    function (reason) {
            //        $scope.progressbar.complete();
            //        $scope.IsWaiting = false;
            //        $scope.error = reason.data;
            //        $log.info(reason);
            //    });

            //},
            //   function (reason) { });
        }
        else if ($('input[name=AirportData]').val() != null && $('input[name=AirportData]').val() != "") {

            $scope.resKey = btoa('result' + Math.random());
            $scope.urlKey = "url_" + $scope.resKey;
            var s = window.location.href;
            // if (s.indexOf("&Rkey") > -1) {
                // window.localStorage.setItem($scope.urlKey, s.replace("#price", "").replace("#stops", "").replace("#airlines", "").replace("#time", "").substring(0, s.indexOf("&Rkey")) + "&Rkey=" + $scope.resKey);
            // } else {
                window.localStorage.setItem($scope.urlKey, s.replace("#price", "").replace("#stops", "").replace("#airlines", "").replace("#time", ""));
            //}
            var response = {
                data: null
            };

            response.data = JSON.parse($('input[name=AirportData]').val());
            $scope.AirportsDetailedList = response.data.Airportlist;
            $scope.FlightSearchRQData.customerIpAddress = response.data.ClientIp;

            //************* read query string content start here

            if ($location.search()['org'] != null && $location.search()['org'] != undefined) {
                var foundOrg = [];
                foundOrg = jQuery.grep($scope.AirportsDetailedList, function (a) {
                    return a.AirportFullName.split('-')[0].toUpperCase() == $location.search()['org'].toUpperCase();
                });

                $scope.SearchCritaria.Origin = foundOrg.length > 0 ? foundOrg[0] : null;

                if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code.toUpperCase() !== $location.search()['org'].toUpperCase()) {
                    $scope.orgnear = true;
                }
                $scope.FlightSearchRQ.Segments.Segment[0].Origin = $scope.SearchCritaria.Origin.Code.toUpperCase();
                $("#ex1_value,#ex3_value").addClass('input_clear');
                $("#ex1_value,#ex3_value").addClass('x');
            }

            if ($location.search()['dest'] != null && $location.search()['dest'] != undefined) {
                var foundDest = [];
                foundDest = jQuery.grep($scope.AirportsDetailedList, function (a) {
                    return a.AirportFullName.split('-')[0].toUpperCase() == $location.search()['dest'].toUpperCase();
                });

                $scope.SearchCritaria.Destination = foundDest.length > 0 ? foundDest[0] : null;
                if ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code.toUpperCase() !== $location.search()['dest'].toUpperCase()) {
                    $scope.destnear = true;
                }
                $scope.FlightSearchRQ.Segments.Segment[0].Destination = $scope.SearchCritaria.Destination.Code.toUpperCase();
                $("#ex2_value,#ex4_value").addClass('input_clear');
                $("#ex2_value,#ex4_value").addClass('x');

            }

            if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin != undefined && ($scope.SearchCritaria.ReturnDate == "" || $scope.SearchCritaria.ReturnDate == null || Object.keys($scope.SearchCritaria.ReturnDate).length === 0)) {
                $scope.setTripTypeTab(2);
            } else {
                $scope.setTripTypeTab(1);
            }
            if (($location.search()['JType'] != undefined && $location.search()['JType'] != "multi") || ($location.search()['Type'] != undefined && $location.search()['Type'] != "multi")) {
                setTimeout(function () {
                    $("#datepicker2").datepicker("option", "minDate", moment($location.search()['depDt'].replace(/-/g, ' ')).format("DD MMM YYYY"));
                    $("#datepicker2").datepicker();
                    if ($location.search()['retDt'] != null && $location.search()['retDt'] != undefined && $location.search()['retDt'] != "") {
                        $("#datepicker2").datepicker("setDate", moment($location.search()['retDt'].replace(/-/g, ' ')).format("DD MMM YYYY"));
                        $('#datepicker2').val($scope.SearchCritaria.ReturnDate);
                    }
                }, 300);
            }

            if ($location.search()['ct'] != undefined) {
                $scope.FlightSearchRQ.Cabin.Class = ($filter('ClassTypeCode')($location.search()['ct']));
                $scope.SearchCritaria.Cabin.Class = ($filter('ClassTypeCode')($location.search()['ct']));
                $scope.FlightSearchRQData.cabinClass = $scope.ToFloat($location.search()['ct']);
                classTypeChanged($scope.FlightSearchRQData.cabinClass, ($scope.FlightSearchRQData.cabinClass == 1 ? 0 : $scope.FlightSearchRQData.cabinClass == 2 ? 1 : $scope.FlightSearchRQData.cabinClass == 4 ? 2 : $scope.FlightSearchRQData.cabinClass == 6 ? 3 : 0));
            }
            if ($location.search()['adt'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoAdult = $location.search()['adt'];
                $scope.SearchCritaria.PaxDetail.NoAdult = $location.search()['adt'];
                $scope.FlightSearchRQData.adult = $scope.ToFloat($location.search()['adt']);

            }
            if ($location.search()['snr'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoSenior = $location.search()['snr'];
                $scope.SearchCritaria.PaxDetail.NoSenior = $location.search()['snr'];
                $scope.FlightSearchRQData.senior = $scope.ToFloat($location.search()['snr']);

            }
            if ($location.search()['chd'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoChild = $location.search()['chd'];
                $scope.SearchCritaria.PaxDetail.NoChild = $location.search()['chd'];
                $scope.FlightSearchRQData.child = $scope.ToFloat($location.search()['chd']);
            }
            if ($location.search()['infs'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoInfantS = $location.search()['infs'];
                $scope.SearchCritaria.PaxDetail.NoInfantS = $location.search()['infs'];
                $scope.FlightSearchRQData.infant = $scope.ToFloat($location.search()['infs']);
            }
            if ($location.search()['inf'] != undefined) {
                $scope.FlightSearchRQ.PaxDetail.NoInfant = $location.search()['inf'];
                $scope.SearchCritaria.PaxDetail.NoInfant = $location.search()['inf'];
                $scope.FlightSearchRQData.infantInLap = $scope.ToFloat($location.search()['inf']);
            }
            if ($location.search()['air'] != undefined && $location.search()['air'] != '') {
                $scope.FlightSearchRQ.Airlines.Airline.push($location.search()['air']);
                $scope.FlightSearchRQData.preferredCarrier = $location.search()['air'];
            }
            if ($location.search()['direct'] != undefined && $location.search()['direct'] != '') {
                $scope.FlightSearchRQ.Direct = ($location.search()['direct'] == 'true' ? "1" : "0");
                $scope.FlightSearchRQData.isDirectFlight = ($location.search()['direct'] == 'true');
            }
            $scope.FlightSearchRQData.searchDate = moment(new Date()).format("YYYY-MM-DD");
            $scope.FlightSearchRQData.flightGuid = $scope.resKey;
            $scope.FlightSearchRQ.flightGuid = $scope.resKey;

            $scope.Airportslist = $.grep($scope.AirportsDetailedList, function (b) {
                return b.Code === $scope.SearchCritaria.Origin.Code || b.Code === $scope.SearchCritaria.Destination.Code;
            });

            if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin != undefined && $scope.SearchCritaria.Destination != undefined) {
                $scope.IsRkey = false;
                $scope.SearchFlight();
            }
            else {
                $scope.progressbar.complete();
                $scope.IsWaiting = false;
            }
        }
        else {

            $http(loadRequest).then(function (response) {
                $scope.resKey = btoa('result' + Math.random());
                $scope.urlKey = "url_" + $scope.resKey;
                var s = window.location.href;
                // if (s.indexOf("&Rkey") > -1) {
                    // window.localStorage.setItem($scope.urlKey, s.replace("#price", "").replace("#stops", "").replace("#airlines", "").replace("#time", "").substring(0, s.indexOf("&Rkey")) + "&Rkey=" + $scope.resKey);
                // } else {
                    window.localStorage.setItem($scope.urlKey, s.replace("#price", "").replace("#stops", "").replace("#airlines", "").replace("#time", "") );
               // }
                $scope.AirportsDetailedList = response.data.Airportlist;
                $scope.FlightSearchRQData.customerIpAddress = response.data.ClientIp;

                //************* read query string content start here

                if ($location.search()['org'] != null && $location.search()['org'] != undefined) {
                    var foundOrg = [];
                    foundOrg = jQuery.grep(response.data.Airportlist, function (a) {
                        return a.AirportFullName.split('-')[0].toUpperCase() == $location.search()['org'].toUpperCase();
                    });
                    $scope.SearchCritaria.Origin = foundOrg.length > 0 ? foundOrg[0] : null;

                    if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.Code.toUpperCase() !== $location.search()['org'].toUpperCase()) {
                        $scope.orgnear = true;
                    }
                    $scope.FlightSearchRQ.Segments.Segment[0].Origin = $scope.SearchCritaria.Origin.Code.toUpperCase();
                    $("#ex1_value,#ex3_value").addClass('input_clear');
                    $("#ex1_value,#ex3_value").addClass('x');
                }

                if ($location.search()['dest'] != null && $location.search()['dest'] != undefined) {
                    var foundDest = [];
                    foundDest = jQuery.grep(response.data.Airportlist, function (a) {
                        return a.AirportFullName.split('-')[0].toUpperCase() == $location.search()['dest'].toUpperCase();
                    });
                    $scope.SearchCritaria.Destination = foundDest.length > 0 ? foundDest[0] : null;
                    if ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.Code.toUpperCase() !== $location.search()['dest'].toUpperCase()) {
                        $scope.destnear = true;
                    }
                    $scope.FlightSearchRQ.Segments.Segment[0].Destination = $scope.SearchCritaria.Destination.Code.toUpperCase();
                    $("#ex2_value,#ex4_value").addClass('input_clear');
                    $("#ex2_value,#ex4_value").addClass('x');

                }

                if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin != undefined && ($scope.SearchCritaria.ReturnDate == "" || $scope.SearchCritaria.ReturnDate == null || Object.keys($scope.SearchCritaria.ReturnDate).length === 0)) {
                    $scope.setTripTypeTab(2);
                } else {
                    $scope.setTripTypeTab(1);
                }
                if (($location.search()['JType'] != undefined && $location.search()['JType'] != "multi") || ($location.search()['Type'] != undefined && $location.search()['Type'] != "multi")) {
                    setTimeout(function () {
                        $("#datepicker2").datepicker("option", "minDate", moment($location.search()['depDt'].replace(/-/g, ' ')).format("DD MMM YYYY"));
                        $("#datepicker2").datepicker();
                        if ($location.search()['retDt'] != null && $location.search()['retDt'] != undefined && $location.search()['retDt'] != "") {
                            $("#datepicker2").datepicker("setDate", moment($location.search()['retDt'].replace(/-/g, ' ')).format("DD MMM YYYY"));
                            $('#datepicker2').val($scope.SearchCritaria.ReturnDate);
                        }
                    }, 300);
                }

                if ($location.search()['ct'] != undefined) {
                    $scope.FlightSearchRQ.Cabin.Class = ($filter('ClassTypeCode')($location.search()['ct']));
                    $scope.SearchCritaria.Cabin.Class = ($filter('ClassTypeCode')($location.search()['ct']));
                    $scope.FlightSearchRQData.cabinClass = $scope.ToFloat($location.search()['ct']);
                    classTypeChanged($scope.FlightSearchRQData.cabinClass, ($scope.FlightSearchRQData.cabinClass == 1 ? 0 : $scope.FlightSearchRQData.cabinClass == 2 ? 1 : $scope.FlightSearchRQData.cabinClass == 4 ? 2 : $scope.FlightSearchRQData.cabinClass == 6 ? 3 : 0));
                }
                if ($location.search()['adt'] != undefined) {
                    $scope.FlightSearchRQ.PaxDetail.NoAdult = $location.search()['adt'];
                    $scope.SearchCritaria.PaxDetail.NoAdult = $location.search()['adt'];
                    $scope.FlightSearchRQData.adult = $scope.ToFloat($location.search()['adt']);

                }
                if ($location.search()['snr'] != undefined) {
                    $scope.FlightSearchRQ.PaxDetail.NoSenior = $location.search()['snr'];
                    $scope.SearchCritaria.PaxDetail.NoSenior = $location.search()['snr'];
                    $scope.FlightSearchRQData.senior = $scope.ToFloat($location.search()['snr']);

                }
                if ($location.search()['chd'] != undefined) {
                    $scope.FlightSearchRQ.PaxDetail.NoChild = $location.search()['chd'];
                    $scope.SearchCritaria.PaxDetail.NoChild = $location.search()['chd'];
                    $scope.FlightSearchRQData.child = $scope.ToFloat($location.search()['chd']);
                }
                if ($location.search()['infs'] != undefined) {
                    $scope.FlightSearchRQ.PaxDetail.NoInfantS = $location.search()['infs'];
                    $scope.SearchCritaria.PaxDetail.NoInfantS = $location.search()['infs'];
                    $scope.FlightSearchRQData.infant = $scope.ToFloat($location.search()['infs']);
                }
                if ($location.search()['inf'] != undefined) {
                    $scope.FlightSearchRQ.PaxDetail.NoInfant = $location.search()['inf'];
                    $scope.SearchCritaria.PaxDetail.NoInfant = $location.search()['inf'];
                    $scope.FlightSearchRQData.infantInLap = $scope.ToFloat($location.search()['inf']);
                }
                if ($location.search()['air'] != undefined && $location.search()['air'] != '') {
                    $scope.FlightSearchRQ.Airlines.Airline.push( $location.search()['air']);
                    $scope.FlightSearchRQData.preferredCarrier = $location.search()['air'];
                }
                if ($location.search()['direct'] != undefined && $location.search()['direct'] != '') {
                    $scope.FlightSearchRQ.Direct = ($location.search()['direct'] == 'true' ? "1" : "0");
                    $scope.FlightSearchRQData.isDirectFlight = ($location.search()['direct'] == 'true');
                }
                $scope.FlightSearchRQData.searchDate = moment(new Date()).format("YYYY-MM-DD");
                $scope.FlightSearchRQData.flightGuid = $scope.resKey;
                $scope.FlightSearchRQ.flightGuid = $scope.resKey;

                $scope.Airportslist = $.grep($scope.AirportsDetailedList, function (b) {
                    return b.Code === $scope.SearchCritaria.Origin.Code || b.Code === $scope.SearchCritaria.Destination.Code;
                });

                if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin != undefined && $scope.SearchCritaria.Destination != undefined) {
                    $scope.IsRkey = false;
                    $scope.SearchFlight();
                }
                else {
                    $scope.progressbar.complete();
                    $scope.IsWaiting = false;
                }
            },
                function (reason) {
                    $scope.progressbar.complete();
                    $scope.IsWaiting = false;
                    $scope.error = reason.data;
                    $log.info(reason);
                });
        }




    };

    $scope.Seats = function (Sectors) {
        var SeatsArr = [];
        if (Sectors != undefined && Sectors.Sector.length > 0) {
            $.each(Sectors.Sector, function (index, data) {
                SeatsArr.push(parseInt(data.NoSeats));
            });
            return Math.min.apply(Math, SeatsArr);
        }
        return 0;
    }
    $scope.SearchFlightRQ = function () {
        var org = "";
        if ($scope.SearchCritaria.Origin.description == undefined)
            org = $scope.SearchCritaria.Origin.Code;
        else
            org = $scope.SearchCritaria.Origin.description;

        var dest = "";
        if ($scope.SearchCritaria.Destination.description == undefined)
            dest = $scope.SearchCritaria.Destination.Code;
        else
            dest = $scope.SearchCritaria.Destination.description;

        //var landingUrl = $location.protocol() + "://" + $window.location.host + "?" + "org=" + org + "&dest=" + dest
        //    +
        //    "&depDt=" + $filter('myDate')($scope.ToDate($scope.SearchCritaria.DepartureDate), "YYYY-MM-DD") +
        //    "&retDt=" + $filter('myDate')($scope.ToDate($scope.SearchCritaria.ReturnDate), "YYYY-MM-DD") + "&ct=Y";
        var landingUrl = $location.protocol() + "://" + $window.location.host + "?" + "org=" + org + "&dest=" + dest
            +
            "&depDt=" + $filter('date')(Date.parse($scope.SearchCritaria.DepartureDate), "yyyy-MM-dd") +
            "&retDt=" + $filter('date')(Date.parse($scope.SearchCritaria.ReturnDate), "yyyy-MM-dd") + "&ct=Y";

        $window.open(landingUrl, "_self");
    }
    $scope.FlightResults = {
        Flights: null
    };
    $scope.MainDataMergedArray = [];
    $scope.leftPanelFilterData = function (filtertype) {
        var AllfilteredData = [];
        var cheapestFlightData = $scope.flightdata.Flights;
        var AltDates = $scope.flightdata.AltDateFlights.Itinerary != undefined ? $scope.flightdata.AltDateFlights.Itinerary : [];
        var nearByAirport = $scope.flightdata.AltAirportFlights.Itinerary != undefined ? $scope.flightdata.AltAirportFlights.Itinerary : [];

        var allDataMergedArray = [];
        var departingFromArr = [];
        var ArrivalAtArr = [];
        var sectors = [];
        if ($scope.flightdata.AltAirportFlights.Itinerary != undefined) {
            $.merge($.merge($.merge(allDataMergedArray, cheapestFlightData), AltDates), nearByAirport);
        }
        else if ($scope.flightdata.AltDateFlights.Itinerary != undefined) {
            $.merge($.merge(allDataMergedArray, cheapestFlightData), AltDates);
        }
        else {
            $.merge(allDataMergedArray, cheapestFlightData);
        }
        //$scope.MainDataMergedArray = allDataMergedArray;
        $.each(allDataMergedArray, function (index, data) {
            var totalPrice = data.TotalPrice;
            var IsReturn = "";
            if (filtertype == "departing" || filtertype == "arrival") {
                IsReturn = "FALSE";
            }

            var Record = [];
            if (filtertype == "departing" || filtertype == "arrival") {
                Record = $.grep(data.Sectors.Sector, function (n, i) {
                    return (n.IsReturn === "FALSE" || n.isReturn.toUpperCase() === "FALSE" || n.isReturn.toUpperCase() !== "TRUE");
                });
            } else if (filtertype == "returning") {
                Record = $.grep(data.Sectors.Sector, function (n, i) {
                    return (n.IsReturn === "TRUE" || n.isReturn.toUpperCase() === "TRUE" || n.isReturn.toUpperCase() !== "FALSE");
                });
            }
            else if (filtertype == "connecting") {
                var sectorCount = data.Sectors.Sector.length;
                Record = $.grep(data.Sectors.Sector, function (n, i) {
                    return i != 0 && i != (sectorCount - 1);
                });
            }
            if (Record.length > 0) {
                if (filtertype == "departing" || filtertype == "arrival") {

                    if (filtertype == "departing")
                        AllfilteredData.push({
                            TotalPrice: parseFloat(totalPrice), AirpCode: Record[0].Departure.AirpCode, Isselected: false, AirpName: Record[0].Departure.AirpName
                        });
                    else if (filtertype == "arrival")
                        AllfilteredData.push({ TotalPrice: parseFloat(totalPrice), AirpCode: Record[Record.length - 1].Arrival.AirpCode, Isselected: false, AirpName: Record[Record.length - 1].Arrival.AirpName });

                }
                else if (filtertype == "returning") {
                    $.each(Record, function (index, data) {
                        AllfilteredData.push({ TotalPrice: parseFloat(totalPrice), AirpCode: Record[0].Departure.AirpCode, Isselected: false, AirpName: Record[0].Departure.AirpName });
                    });
                }
                else if (filtertype == "connecting") {
                    $.each(Record, function (index, data) {
                        AllfilteredData.push({ TotalPrice: parseFloat(totalPrice), AirpCode: data.Departure.AirpCode, Isselected: false, AirpName: data.Departure.AirpName });

                    });
                }
            }

        });

        var uniqueFilteredData = [];
        var flags = [], output = [], l = AllfilteredData.length, i;
        for (i = 0; i < l; i++) {
            if (flags[AllfilteredData[i].AirpCode] && flags[AllfilteredData[i].TotalPrice]) continue;
            flags[AllfilteredData[i].AirpCode] = true;
            flags[AllfilteredData[i].TotalPrice] = true;
            output.push(AllfilteredData[i]);
        }


        var groups1 = {};
        var groups = {};
        for (var i = 0; i < output.length; i++) {
            var groupName = output[i].AirpCode;
            if (!groups[groupName]) {
                groups[groupName] = [];
            }
            groups[groupName].push(output[i].TotalPrice);
            if (!groups1[groupName]) {
                groups1[groupName] = [];
                groups1[groupName].push(output[i].AirpName);
            }

        }

        myArray = [];
        for (var groupName in groups1) {
            //var grpName = output.filter(function (obj) { return obj.AirpCode == groupName });
            myArray.push({ group: groupName, TotalPrices: groups[groupName], AirpName: groups1[groupName][0] });
        }
        var FilterData = [];

        if (filtertype == "connecting") {
            $.each($scope.LeftPanelDepartingFiltersData, function (i, n) {
                departingFromArr.push(n.AirpCode);
            });
            $.each($scope.LeftPanelArrivalFiltersData, function (i, n) {
                ArrivalAtArr.push(n.AirpCode);
            });
        }
        $.each(myArray, function (index, data) {

            if (filtertype == "connecting") {
                if (!($.inArray(data.group, departingFromArr) + 1 > 0) &&
                    !($.inArray(data.group, ArrivalAtArr) + 1 > 0)) {
                    FilterData.push({ AirpCode: data.group, Price: Math.min.apply(Math, data.TotalPrices), Isselected: false, AirpName: data.AirpName });
                }

            } else {
                FilterData.push({ AirpCode: data.group, Price: Math.min.apply(Math, data.TotalPrices), Isselected: false, AirpName: data.AirpName });
            }

        });

        return FilterData;
    };
    $scope.filFlag = false;
    $scope.myfunction = function (data) {
        if ($scope.filFlag == false) {
            setTimeout(function () {
                $scope.min = parseInt($scope.Minfare);
                $scope.SliderMin = parseInt($scope.min) + 1;
                $scope.max = parseInt($scope.Maxfare) + 1; //+1
                $scope.SliderMax = parseInt($scope.max);


                $scope.Depmin = 0;
                $scope.Depmax = 1440;
                $scope.DepStart = 0;
                $scope.DepEnd = 1440;

                $scope.Retmin = 0;
                $scope.Retmax = 1440;
                $scope.RetStart = 0;
                $scope.RetEnd = 1440;
                $scope.filFlag = true;
                $scope.$apply();
            }, 400);
        }

    };

    $scope.timeperiod = 2000;
    $scope.finaltimeperiod = 5000;
    $scope.time = 0;


    $scope.SearchFlight = function () {
        $scope.sortKey = 'Price';
        $scope.progressbar.start();
        if (!$scope.flagtag) {
            $scope.IsWaiting = true;
        }
        $scope.Cfilter.SelectedUniqueRef = null;
        $scope.Cfilter.SetectedCriteria.SelectedDeparture = null;
        $scope.Cfilter.SetectedCriteria.SelectedReturn = null;
        //**********************

        if ($scope.SearchCritaria.Origin == undefined || $scope.SearchCritaria.Destination == undefined) {
            alert('Please select Origin and Destination from List');
            $scope.progressbar.complete();
            $scope.IsWaiting = false;
            return;
        }
        else if ($scope.SearchCritaria.DepartureDate == undefined || $scope.SearchCritaria.DepartureDate == "") {
            alert('Please select Depart Date');
            $scope.progressbar.complete();
            $scope.IsWaiting = false;
            return;
        }
        else if ($scope.SearchCritaria.ReturnDate != "" && $scope.SearchCritaria.ReturnDate != undefined) {

            $scope.FlightSearchRQ.Segments =
            {
                Segment: [
                    {
                        Origin: $scope.SearchCritaria.Origin.AirportFullName.split('-')[0],
                        Destination: $scope.SearchCritaria.Destination.AirportFullName.split('-')[0],
                        Date: $scope.SearchCritaria.DepartureDate,
                        //OrgCity: $scope.SearchCritaria.Origin.Code,
                        //DestCity: $scope.SearchCritaria.Destination.Code,
                        _id: '1'
                    },
                    {
                        Origin: $scope.SearchCritaria.Destination.AirportFullName.split('-')[0],
                        Destination: $scope.SearchCritaria.Origin.AirportFullName.split('-')[0],
                        Date: $scope.SearchCritaria.ReturnDate,
                        //OrgCity: $scope.SearchCritaria.Destination.Code,
                        //DestCity: $scope.SearchCritaria.Origin.Code,
                        _id: '2'
                    }
                ]
            };
            $scope.FlightSearchRQ.JourneyType = "R";
            $scope.setTripTypeTab(1);
        }
        else {
            $scope.FlightSearchRQ.Segments =
            {
                Segment: [
                    {
                        Origin: $scope.SearchCritaria.Origin.AirportFullName.split('-')[0],
                        Destination: $scope.SearchCritaria.Destination.AirportFullName.split('-')[0],
                        Date: $scope.SearchCritaria.DepartureDate,
                        //OrgCity: $scope.SearchCritaria.Origin.Code,
                        //DestCity: $scope.SearchCritaria.Destination.Code,
                        _id: '1'
                    }
                ]
            };
            $scope.FlightSearchRQ.JourneyType = "O";
            $scope.setTripTypeTab(2);
        }

        $($('div.class-type ul').find('[data-class=' + $scope.FlightSearchRQ.Cabin.Class + ']')).trigger('click');

        if ($scope.FlightSearchRQ.PaxDetail.NoAdult == "0" || $scope.FlightSearchRQ.PaxDetail.NoAdult == 0 || $scope.FlightSearchRQ.PaxDetail.NoAdult == undefined) {
            alert('Please select atleast 1 Adult');
            $scope.progressbar.complete();
            $scope.IsWaiting = false;
            return;
        };
        if ($scope.FlightSearchRQ.PaxDetail.NoInfantS != "0" && $scope.FlightSearchRQ.PaxDetail.NoInfantS != undefined) {
            $scope.FlightSearchRQ.PaxDetail.NoChild = (parseFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + parseFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)).toString();
        }
        //$scope.FlightSearchRQData.totalPaxCount = $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + ($scope.FlightSearchRQ.PaxDetail.NoSenior != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) : 0) + ($scope.FlightSearchRQ.PaxDetail.NoChild != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) : 0) + ($scope.FlightSearchRQ.PaxDetail.NoInfant != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) : 0) + ($scope.FlightSearchRQ.PaxDetail.NoInfantS != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS) : 0);
        $scope.FlightSearchRQ.Master.MetaName = $scope.SearchCritaria.MetaName;
        $scope.SearchFlight.PaxDetail = $scope.FlightSearchRQ.PaxDetail;
        $scope.SearchFlight.Class = $scope.FlightSearchRQ.Cabin.Class;
        $scope.Cfilter.Stops = {
            Nonstop: false,
            Onestop: false,
            Twostop: false,
            NonstopMinFare: 0,
            OnestopMinFare: 0,
            TwostopMinFare: 0
        };
        //***************************                                    

        $.ajax({
            type: "POST",
            url: commonUrl + 'FLightApi/SearchFlight',
            //url: 'http://localhost:55268/api/FLightApi/SearchFlight',
            dataType: 'JSON',
            data: $scope.FlightSearchRQ,
            success: function (response) {

                if (response == null) {
                    $scope.progressbar.complete();
                    $scope.NoResult = true;
                    $scope.IsWaiting = false;
                }
                if (response.Itineraries.Itinerary.length <= 0) {
                    $scope.progressbar.complete();
                    $scope.NoResult = true;
                    $scope.IsWaiting = false;
                }
                setTimeout(function () {
                    $scope.IsBanner = false;
                    $scope.IsExpired = true;
                    $("#ff-theme").addClass("open-model");
                    $scope.$apply();
                }, 1200000);//

                $scope.flightdata.Flights = response.Itineraries;
                $scope.flightdata.CheapestFlights = response.Itineraries;

                $.each($scope.flightdata.Flights.Itinerary, function (index, item) {

                    var departuresectors = $filter('IsReturn')(item.Sectors.Sector, 'FALSE');
                    var arrivalsectors = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');
                    if (departuresectors.length == 1 && arrivalsectors.length == 1 && $scope.FlightSearchRQ.JourneyType == "R") {
                        $scope.flightdata.Shortest.Itinerary.push(item);
                    } else if (departuresectors.length == 1 && $scope.FlightSearchRQ.JourneyType == "O") {
                        $scope.flightdata.Shortest.Itinerary.push(item);
                    }
                });
                if (response.AltDateFlights != null && response.AltDateFlights != undefined) {

                    $scope.flightdata.AltDateFlights = response.AltDateFlights;
                    $scope.sortprocessArray($scope.flightdata.AltDateFlights);
                    $.each($scope.flightdata.AltDateFlights.Itinerary, function (index, item) {
                        var departuresectors = $filter('IsReturn')(item.Sectors.Sector, 'FALSE');
                        var arrivalsectors = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');
                        if (departuresectors.length == 1 && arrivalsectors.length == 1 && $scope.FlightSearchRQ.JourneyType == "R") {
                            $scope.flightdata.Shortest.Itinerary.push(item);
                        } else if (departuresectors.length == 1 && $scope.FlightSearchRQ.JourneyType == "O") {
                            $scope.flightdata.Shortest.Itinerary.push(item);
                        }

                    });
                }
                if (response.AltAirportFlights != null && response.AltAirportFlights != undefined) {
                    $scope.flightdata.AltAirportFlights = response.AltAirportFlights;
                    $scope.sortprocessArray($scope.flightdata.AltAirportFlights);
                    $.each($scope.flightdata.AltAirportFlights.Itinerary, function (index, item) {
                        var departuresectors = $filter('IsReturn')(item.Sectors.Sector, 'FALSE');
                        var arrivalsectors = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');
                        if (departuresectors.length == 1 && arrivalsectors.length == 1 && $scope.FlightSearchRQ.JourneyType == "R") {
                            $scope.flightdata.Shortest.Itinerary.push(item);
                        } else if (departuresectors.length == 1 && $scope.FlightSearchRQ.JourneyType == "O") {
                            $scope.flightdata.Shortest.Itinerary.push(item);
                        }

                    });
                }
                $scope.sortprocessArray($scope.flightdata.Flights);
                $scope.specificAirlines = response.specificAirlines;

                $scope.SearchCritaria.Skey = response.SKey;
                $scope.CheapestSkey = $scope.SearchCritaria.Skey;
                $scope.count = $scope.flightdata.Flights.Itinerary.length;

                if ($scope.flightdata.Flights.Itinerary.length > 0)
                    $scope.Minfare = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax));

                if ($scope.flightdata.Flights.Itinerary.length > 0)
                    $scope.Maxfare = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdTax));

                $scope.MinCheapest = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax));

                //*******Calculate MinFare
                if (response.AltDateFlights != null && response.AltDateFlights != undefined) {
                    if ($scope.flightdata.AltDateFlights.Itinerary.length > 0 && Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax))
                        > Math.trunc($scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdTax))) {
                        $scope.Minfare = Math.trunc($scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[0].Adult.AdTax));
                    }
                }
                if (response.AltAirportFlights != null && response.AltAirportFlights != undefined) {
                    if ($scope.flightdata.AltAirportFlights.Itinerary != undefined && $scope.flightdata.AltAirportFlights.Itinerary.length > 0 && $scope.Minfare > Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdTax))) {
                        $scope.Minfare = Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[0].Adult.AdTax));
                    }
                }
                //*******Calculate MinFare
                //*******Calculate MaxFare
                if (response.AltDateFlights != null && response.AltDateFlights != undefined && $scope.flightdata.AltDateFlights.Itinerary != undefined && $scope.flightdata.AltDateFlights.Itinerary.length > 0 && Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdTax))
                    > Math.trunc($scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdTax))) {
                    $scope.Maxfare = Math.trunc($scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.Flights.Itinerary[$scope.flightdata.Flights.Itinerary.length - 1].Adult.AdTax));
                }
                //else if (response.AltDateFlights != null && response.AltDateFlights != undefined && $scope.flightdata.AltDateFlights.Itinerary != undefined && $scope.flightdata.AltDateFlights.Itinerary.length > 0) {
                //    $scope.Maxfare = (Math.trunc($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdtBFare) + Math.trunc($scope.flightdata.AltDateFlights.Itinerary[$scope.flightdata.AltDateFlights.Itinerary.length - 1].Adult.AdTax));
                //}
                if ($scope.flightdata.AltAirportFlights.Itinerary != null && $scope.flightdata.AltAirportFlights.Itinerary != undefined && $scope.flightdata.AltAirportFlights.Itinerary.length > 0 && $scope.Maxfare < Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdTax))) {
                    $scope.Maxfare = Math.trunc($scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdtBFare) + $scope.ToFloat($scope.flightdata.AltAirportFlights.Itinerary[$scope.flightdata.AltAirportFlights.Itinerary.length - 1].Adult.AdTax));
                }
                //*******Calculate MaxFare

                $.each($scope.flightdata.Flights.Itinerary, function (index, data) {
                    var index1 = -1;

                    var departuresectors = $filter('IsReturn')(data.Sectors.Sector, 'FALSE');
                    var arrivalsectors = $filter('IsReturn')(data.Sectors.Sector, 'TRUE');

                    if (departuresectors.length == 1 && (arrivalsectors.length == 1 || arrivalsectors.length == 0) && $scope.Cfilter.Stops.NonstopMinFare == 0) {
                        $scope.Cfilter.Stops.NonstopMinFare = parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax);
                    }
                    else if ((departuresectors.length == 2 || arrivalsectors.length == 2) && data.Sectors.Sector.length <= 4 && $scope.Cfilter.Stops.OnestopMinFare == 0) {
                        $scope.Cfilter.Stops.OnestopMinFare = parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax);
                    }
                    else if ((departuresectors.length > 2 || arrivalsectors.length > 2) && $scope.Cfilter.Stops.TwostopMinFare == 0) {
                        $scope.Cfilter.Stops.TwostopMinFare = parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax);
                    }


                    $scope.CabinClass.some(function (elem, i) {
                        return elem.name.toUpperCase() === data.Sectors.Sector[0].CabinClass.Des.toUpperCase() ? (index1 = i, true) : false;
                    });
                    if (index1 < 0) {
                        $scope.CabinClass.push({ name: data.Sectors.Sector[0].CabinClass.Des.toUpperCase(), price: parseFloat(parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax)) });
                    }
                    else {
                        var price = $scope.CabinClass[index1].price;
                        $scope.CabinClass[index1].price = parseFloat(parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax)) < parseFloat(price) ? parseFloat(parseFloat(data.Adult.AdtBFare) + parseFloat(data.Adult.AdTax)) : parseFloat(price);
                    }
                });

                //if ($scope.flightdata.Shortest != null && $scope.flightdata.Shortest != undefined && $scope.flightdata.Shortest.length > 0) {
                //    $scope.flightdata.Shortest.sort(function (a, b) {
                //        return parseFloat(parseInt(a.TotalOutBoundFlightDuration.replace('.', '').split(':')[0]) * 60 + parseInt(a.TotalOutBoundFlightDuration.replace('.', '').split(':')[1])) - parseFloat(parseInt(b.TotalOutBoundFlightDuration.replace('.', '').split(':')[0]) * 60 + parseInt(b.TotalOutBoundFlightDuration.replace('.', '').split(':')[1]))
                //    });
                //}
                if ($scope.flightdata.Shortest != null && $scope.flightdata.Shortest.Itinerary != undefined && $scope.flightdata.Shortest.Itinerary.length > 0) {
                    $scope.sortprocessArray($scope.flightdata.Shortest);
                }


                $scope.LeftPanelDepartingFiltersData = $scope.leftPanelFilterData("departing");
                $scope.Cfilter.DepartingFromOptions = $scope.LeftPanelDepartingFiltersData;
                $scope.Cfilter.SelectedDepartingFrom = $filter('IsSelected')($scope.LeftPanelDepartingFiltersData, true);
                $scope.LeftPanelArrivalFiltersData = $scope.leftPanelFilterData("arrival");
                $scope.Cfilter.ArrivalAtOptions = $scope.LeftPanelArrivalFiltersData;
                $scope.Cfilter.SelectedArrivingAt = $filter('IsSelected')($scope.Cfilter.ArrivalAtOptions, true);

                $scope.LeftPanelReturningFiltersData = $scope.leftPanelFilterData("returning");
                $scope.Cfilter.ReturnFromOptions = $scope.LeftPanelReturningFiltersData;
                $scope.Cfilter.SelectedReturnFrom = $filter('IsSelected')($scope.Cfilter.ReturnFromOptions, true);

                $scope.LeftPanelConnectingFiltersData = $scope.leftPanelFilterData("connecting");
                $scope.Cfilter.ConnectingInOptions = $scope.LeftPanelConnectingFiltersData;
                $scope.Cfilter.SelectedConnectingIn = $filter('IsSelected')($scope.Cfilter.ConnectingInOptions, true);
                $scope.Cfilter.SelectedSpecificAirlines = $filter('IsSelected')($scope.specificAirlines, true);
                $scope.Cfilter.CabinClass = $filter('IsSelected')($scope.CabinClass, true);
                $scope.firstcheapest = parseFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdtBFare) + parseFloat($scope.flightdata.Flights.Itinerary[0].Adult.AdTax);//$scope.flightdata.Flights.Itinerary[0].TotalPrice;


                //=============new concept
                if ($scope.flightdata.AltAirportFlights != null && $scope.flightdata.AltAirportFlights.Itinerary.length > 0) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltAirportFlights.Itinerary.slice(0, 2));
                }
                if ($scope.flightdata.AltDateFlights != null && $scope.flightdata.AltDateFlights.Itinerary.length > 0) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltDateFlights.Itinerary.slice(0, 2));
                }
                if ($scope.flightdata.CheapestFlights != null && $scope.flightdata.CheapestFlights.Itinerary.length > 0) {
                    $.merge($scope.CustomArr, $scope.flightdata.CheapestFlights.Itinerary)
                }

                $scope.sortprocessArray($scope.CustomArr);
                if ($scope.flightdata.AltAirportFlights != null && $scope.flightdata.AltAirportFlights.Itinerary.length > 2) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltAirportFlights.Itinerary.slice(2));
                }
                if ($scope.flightdata.AltDateFlights != null && $scope.flightdata.AltDateFlights.Itinerary.length > 2) {
                    $.merge($scope.CustomArr, $scope.flightdata.AltDateFlights.Itinerary.slice(2));
                }
                $scope.flightdata.Flights = $scope.CustomArr;
                //=============new concept
                $scope.MainResponse = $scope.flightdata.Flights;
                $scope.filteredarr = $scope.flightdata.Flights;
                $scope.LoadMoreResults(1);
               


                // setTimeout(function () {
                $scope.flagtag = true;
                $scope.IsWaiting = false;
                //$('[data-toggle="tooltip"]').tooltip();
                // $scope.tag = true;               
                // }, 100);


                setTimeout(function () {
                    $scope.slickslider();
                    $scope.min = parseInt($scope.Minfare);
                    $scope.SliderMin = parseInt($scope.min) + 1;
                    $scope.max = parseInt($scope.Maxfare) + 1;//+1
                    $scope.SliderMax = parseInt($scope.max);


                    $scope.Depmin = 0;
                    $scope.Depmax = 1440;
                    $scope.DepStart = 0;
                    $scope.DepEnd = 1440;

                    $scope.Retmin = 0;
                    $scope.Retmax = 1440;
                    $scope.RetStart = 0;
                    $scope.RetEnd = 1440;
                    $scope.$apply();

                }, 400);
                TimeOutTimerValue = 50000;
                TimeOut_Thread = $timeout(function () { $scope.LogoutByTimer() }, TimeOutTimerValue);
                //setTimeout(function () { $scope.Result(); }, TimeToRender); 
               
                $scope.progressbar.complete();
                console.clear();
            },
            error: function (data) {
                $scope.progressbar.complete();
                $scope.$apply();
                
            }
        });

    };

    $scope.Result = function () {
        dif = 10;
        currentRow = $scope.FinalResult.length;
        if (dif > 0) {
            $scope.FinalResult.push($scope.flightdata.Flights[currentRow]);
            dif--;
        }
        if (10 > $scope.FinalResult.length) {
            setTimeout(function () { $scope.Result(); }, TimeToRender);
        } else {
            var items = $scope.flightdata.Flights.slice(11, $scope.flightdata.Flights.length);
            $scope.FinalResult = [].concat($scope.FinalResult, items)
            console.log('Finish Load');
            $scope.FinishRender = true;
        }

        $scope.min = parseInt($scope.Minfare);
        $scope.SliderMin = parseInt($scope.min) + 1;
        $scope.max = parseInt($scope.Maxfare) + 1;//+1
        $scope.SliderMax = parseInt($scope.max);

        //refresh
        $scope.$apply();
    }
    $scope.getFinalResult = function () {
        $scope.FinalResult = $scope.flightdata.Flights;
        return $scope.FinalResult;
    }
    /*Search Process get result */

    $scope.discount = [];
    $scope.hidesession = function () {
        $('div.offsession').css('display', 'none');
    };
    $scope.sortprocessArray = async function (array) {
        if (array.Itinerary != undefined && array.Itinerary != null) {
            array.Itinerary.sort(
                (a, b) => parseFloat(parseFloat(a.Adult.AdtBFare) + parseFloat(a.Adult.AdTax)) - parseFloat(parseFloat(b.Adult.AdtBFare) + parseFloat(b.Adult.AdTax))
            );
        } else {
            array.sort(
                (a, b) => parseFloat(parseFloat(a.Adult.AdtBFare) + parseFloat(a.Adult.AdTax)) - parseFloat(parseFloat(b.Adult.AdtBFare) + parseFloat(b.Adult.AdTax))
            );
        }
        //console.log('Done!');
    }
    $scope.RedirectToURL = function (param) {
        $window.location.href = $location.protocol() + "://" + $window.location.host + "/" + param;
    };
    $scope.RedirectToURLBlank = function (param) {
        window.open($location.protocol() + "://" + $window.location.host + "/" + param, '_blank');
    };
    $scope.morepax = false;
    $scope.adtchd = false;
    $scope.incrementA = function () {
        if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) < 9) {
            $scope.FlightSearchRQ.PaxDetail.NoAdult++;
            $scope.morepax = false;
        } else {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        }

    };
    $scope.decrementA = function () {
        if ($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) > 1) {
            // if (!$scope.morepax) {
            if (parseFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) == parseFloat($scope.FlightSearchRQ.PaxDetail.NoInfant)) {
                $scope.FlightSearchRQ.PaxDetail.NoInfant--;
            }
            if (parseFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) == parseFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) {
                $scope.FlightSearchRQ.PaxDetail.NoInfantS--;
            }
            $scope.FlightSearchRQ.PaxDetail.NoAdult--;
            // }
            $scope.morepax = false;
            $scope.adtchd = false;
        }
    };

    $scope.incrementS = function () {
        if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) < 9) {
            $scope.FlightSearchRQ.PaxDetail.NoSenior++;
            $scope.morepax = false;
        } else {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        }

    };
    $scope.decrementS = function () {
        if ($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) > 0) {
            // if (!$scope.morepax) {
            $scope.FlightSearchRQ.PaxDetail.NoSenior--;
            // }
            $scope.morepax = false;
            $scope.adtchd = false;
        }
    };

    $scope.incrementC = function () {
        // $scope.FlightSearchRQ.PaxDetail.NoChild++;
        if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) < 9) {
            $scope.FlightSearchRQ.PaxDetail.NoChild++;
            $scope.morepax = false;
        } else {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        }
    };
    $scope.decrementC = function () {
        //$scope.FlightSearchRQ.PaxDetail.NoChild--;
        if ($scope.FlightSearchRQ.PaxDetail.NoChild > 0) {
            //if (!$scope.morepax) {
            $scope.FlightSearchRQ.PaxDetail.NoChild--;
            //}
            $scope.morepax = false;
            $scope.adtchd = false;
        }
    };

    $scope.incrementI = function () {
        if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) < $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult)) && ($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) < 9) {
            $scope.FlightSearchRQ.PaxDetail.NoInfant++;
            $scope.morepax = false;
        } else if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) == 9) {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        } else {
            $scope.adtchd = true;
            $timeout(function () { $scope.adtchd = false }, 3000);
        }

    };
    $scope.decrementI = function () {
        if ($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) > 0) {
            // if (!$scope.morepax && !$scope.adtchd) {
            $scope.FlightSearchRQ.PaxDetail.NoInfant--;
            //  } else { $scope.adtchd = false; }
            $scope.adtchd = false;
            $scope.morepax = false;

        }

    };

    $scope.incrementIS = function () {
        if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS) < $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult)) && ($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) < 9) {
            $scope.FlightSearchRQ.PaxDetail.NoInfantS++;
            $scope.morepax = false;
        }
        else if (($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoSenior) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) + $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS)) == 9) {
            $scope.morepax = true;
            $timeout(function () { $scope.morepax = false }, 3000);
        } else {
            $scope.adtchd = true;
            $timeout(function () { $scope.adtchd = false }, 3000);
        }

    };
    $scope.decrementIS = function () {
        if ($scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS) > 0) {
            //   if (!$scope.morepax && !$scope.adtchd) {
            $scope.FlightSearchRQ.PaxDetail.NoInfantS--;
            //  } else { $scope.adtchd = false; }
            $scope.adtchd = false;
            $scope.morepax = false;
        }
    };
    //*******************time slot*************************//
    $scope.TakeoffSlot = [];
    $scope.Takeoff = function (slot) {
        var i = $.inArray(slot, $scope.TakeoffSlot);
        if (i > -1) {
            $scope.TakeoffSlot.splice(i, 1);
        } else {
            $scope.TakeoffSlot.push(slot);
        }

    };
    $scope.LandingSlot = [];
    $scope.Landing = function (slot) {

        var i = $.inArray(slot, $scope.LandingSlot);
        if (i > -1) {
            $scope.LandingSlot.splice(i, 1);
        } else {
            $scope.LandingSlot.push(slot);
        }
    };
    $scope.DepartureTimeSlot = function (Itinerary) {

        if ($scope.TakeoffSlot.length > 0) {
            if ($scope.TakeoffSlot.length == 1) {
                return (parseFloat($scope.TakeoffSlot[0].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[0].split('-')[1]));
            }
            else if ($scope.TakeoffSlot.length == 2) {
                return ((parseFloat($scope.TakeoffSlot[0].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[0].split('-')[1])) || (parseFloat($scope.TakeoffSlot[1].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[1].split('-')[1])));
            }
            else if ($scope.TakeoffSlot.length == 3) {
                return ((parseFloat($scope.TakeoffSlot[0].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[0].split('-')[1])) || (parseFloat($scope.TakeoffSlot[1].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[1].split('-')[1])) || (parseFloat($scope.TakeoffSlot[2].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[2].split('-')[1])));
            }
            else if ($scope.TakeoffSlot.length == 4) {
                return ((parseFloat($scope.TakeoffSlot[0].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[0].split('-')[1])) || (parseFloat($scope.TakeoffSlot[1].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[1].split('-')[1])) || (parseFloat($scope.TakeoffSlot[2].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[2].split('-')[1])) || (parseFloat($scope.TakeoffSlot[3].split('-')[0]) <= parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) && parseFloat($scope.FirstDeparture(Itinerary.Sectors.Sector).Departure.Time.replace(':', '')) <= parseFloat($scope.TakeoffSlot[3].split('-')[1])));
            }
        } else { return Itinerary; }

    };
    $scope.ArrivalTimeSlot = function (Itinerary) {

        if ($scope.LandingSlot.length > 0) {
            if ($scope.LandingSlot.length == 1) {
                return (parseFloat($scope.LandingSlot[0].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[0].split('-')[1]));
            }
            else if ($scope.LandingSlot.length == 2) {
                return ((parseFloat($scope.LandingSlot[0].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[0].split('-')[1])) || (parseFloat($scope.LandingSlot[1].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[1].split('-')[1])));
            }
            else if ($scope.LandingSlot.length == 3) {
                return ((parseFloat($scope.LandingSlot[0].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[0].split('-')[1])) || (parseFloat($scope.LandingSlot[1].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[1].split('-')[1])) || (parseFloat($scope.LandingSlot[2].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[2].split('-')[1])));
            }
            else if ($scope.LandingSlot.length == 4) {
                return ((parseFloat($scope.LandingSlot[0].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[0].split('-')[1])) || (parseFloat($scope.LandingSlot[1].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[1].split('-')[1])) || (parseFloat($scope.LandingSlot[2].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[2].split('-')[1])) || (parseFloat($scope.LandingSlot[3].split('-')[0]) <= parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) && parseFloat($scope.LastDeparture(Itinerary.Sectors.Sector).Arrival.Time.replace(':', '')) <= parseFloat($scope.LandingSlot[3].split('-')[1])));
            }
        } else { return Itinerary; }

    };
    $scope.SameDepArr = function (Itinerary) {
        var Sectors = $filter('IsReturn')(Itinerary.Sectors.Sector, "FALSE");
        if ($scope.checksamedepret) {
            if (Sectors[0].Departure.AirpCode == $scope.FlightSearchRQ.Segments.Segment[0].Origin && Sectors[Sectors.length - 1].Arrival.AirpCode == $scope.FlightSearchRQ.Segments.Segment[0].Destination) {
                return Itinerary;
            }
        } else { return Itinerary; }

    };
    $scope.topFunction = function () {
        //document.body.scrollTop = 0, "slow";
        //document.documentElement.scrollTop = 0, "slow";
        $("html , body").animate({ scrollTop: 0 }, 600);
    }
    $scope.NghideModel = function () {
        //var tot = $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoAdult) + ($scope.FlightSearchRQ.PaxDetail.NoChild != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoChild) : 0) + ($scope.FlightSearchRQ.PaxDetail.NoInfant != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfant) : 0) + ($scope.FlightSearchRQ.PaxDetail.NoInfantS != undefined ? $scope.ToFloat($scope.FlightSearchRQ.PaxDetail.NoInfantS) : 0);
        //$('#btm_clk').val(tot + (tot > 1 ? " Travelers," : " Traveler,") + $filter('ClassType')($scope.FlightSearchRQ.Cabin.Class));
        $scope.adtchd = false;
        $scope.morepax = false;

    };
    $scope.listOfOptions = [{ text: "Sort by Duration", value: '' }, { text: "Short to Long Duration", value: true }, { text: "Long to Short Duration", value: false }];
    $scope.listOfPrice = [{ text: "Price", value: '' }, { text: "Price: Low to High", value: false }, { text: "Price: High to Low", value: true }];
    $scope.sort = function (key, bOrder) {
        $scope.sortReverse = true;
        var keyname = key;
        if (key == 'Price') {
            //if (bOrder == 'False') {
            //    $scope.sortReverse = false;
            //}
            //else {
            //    $scope.sortReverse = true;
            //}
            $scope.sortReverse = $scope.sortPrice;
        } else if (key == 'Airline') {
            $scope.sortAirline = !$scope.sortAirline;
            $scope.sortReverse = $scope.sortAirline;
        }
        else if (key == 'Duration') {
            //  $scope.sortDuration = !$scope.sortDuration;
            $scope.sortReverse = $scope.sortDuration;
        }
        $scope.sortKey = keyname;
    };
    $scope.sorterFunc = function (Item) {
        if ($scope.sortKey === 'Price') {
            return (parseFloat(Item.GrandTotal));
        } else if ($scope.sortKey === 'Airline') {
            //return Item.Valcarrier;
            return Item.Sectors.Sector[0].AirlineName;
        }
        else if ($scope.sortKey === 'Duration') {
            if (Item != undefined && Item.Sectors !== undefined && Item.Sectors.Sector.length > 0) {
                var milisecondsDiff = 0;
                var Sectors = $filter('IsReturn')(Item.Sectors.Sector, 'FALSE');
                angular.forEach(Sectors, function (obj, key) {

                    if (key + 1 === Sectors.length) {
                        var actualTimeSplit = obj.ActualTime.split(":").map(Number);
                        milisecondsDiff = actualTimeSplit[0] * 1000 * 60 * 60 + actualTimeSplit[1] * 1000 * 60;
                    }
                });

                var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
                return calulatedTime = parseFloat(calulatedTime.replace(':', ''));

            }
        }
    };
    $scope.getNumber = function (num) {
        return new Array(num);
    }
    //********************************************//
    $scope.priceRange = function (Item) {
        if (Item != null && Item != undefined) {
            var Totalamt = (parseFloat(Item.Adult.AdtBFare) + parseFloat(Item.Adult.AdTax)).toFixed(2);
            return (parseInt(Totalamt) >= parseInt($scope.min) && parseInt(Totalamt) <= parseInt($scope.max));

        }
    };
    //**********************Post
    //************* Go to
    $scope.goToBooking = function (AirlineDetail) {
        //var bookingDetail = { AirlineDetail: AirlineDetail, SearchCritaria: $scope.FlightSearchRQ };
        //$state.go("booking", { BookingDetail: bookingDetail });
        // $scope.callpopup();
        //if (AirlineDetail.UniqueRef.indexOf('C') > -1 && parseFloat(AirlineDetail.IndexNumber) < 101) {
        //if (AirlineDetail.Provider.toUpperCase() !== "1S") {
        //    $scope.SearchCritaria.Skey = $scope.CheapestSkey;
        //} else { $scope.SearchCritaria.Skey = $scope.OtherSkey; }


        var bookingUrl = $location.protocol() + "://" + $window.location.host + "/Payment.html?" +
            "Skey=" + $scope.SearchCritaria.Skey + "&Ikey=";
        // var Uniuqueref = bookingUrl + AirlineDetail.UniqueRef;
        var Uniuqueref = bookingUrl + AirlineDetail.UniqueRef + "&q=" + $scope.urlKey;
        //$window.open(Uniuqueref, "_blank");
        $scope.IsWaiting = false;
        $scope.IsRkey = true;
        var selectedContract = $.grep($scope.MainResponse, function (element, index) {
            return (element.UniqueRef == AirlineDetail.UniqueRef);
        });
		
		 $window.location.href = Uniuqueref + "&_guid=" + $scope.FlightSearchRQ.flightGuid;
		
        
    };
    //************* Go to
    $scope.setvalues = function () {
        $scope.formattedDate = $filter('myDate')($scope.ToDate($scope.SearchCritaria.ReturnDate), "DD-MM-YYYY");
        alert($scope.formattedDate);
        var d = new Date($scope.SearchCritaria.ReturnDate);
        var datestring = ("0" + (d.getMonth() + 1)).slice(-2) + "/" + ("0" + d.getDate()).slice(-2) + "/" + + d.getFullYear();
        $scope.formattedDate = datestring;
        // alert($scope.formattedDate);
    };
    $scope.relocate = function () {
        var dest = $scope.SearchCritaria.Destination;
        $scope.SearchCritaria.Destination = $scope.SearchCritaria.Origin;
        $scope.SearchCritaria.Origin = dest;
    }
});

app.controller('BookingController', function ($scope, $http, $window, $timeout, $document, $state, $location, $rootScope, $stateParams, $filter, ngProgressFactory, $localStorage, UserService) { //

    $scope.ccinfo = { type: undefined };
    $scope.RQcriteria = {
        Skey: null,
        Ikey: null,
        Bkey: null,
        curr: null
    };
    if ($location.search()['Skey'] !== undefined)
        $scope.RQcriteria.Skey = $location.search()['Skey'];
    if ($location.search()['Ikey'] !== undefined)
        $scope.RQcriteria.Ikey = $location.search()['Ikey'];
    if ($location.search()['curr'] !== undefined)
        $scope.RQcriteria.curr = $location.search()['curr'];

    // $scope.emailFormat = /[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    $scope.emailFormat = /^[_A-Za-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    $scope.removebtn = false;
    $scope.promomsg = ''; $scope.couponcode = '';
    $scope.sessionexpired = false;
    $scope.timeexpired = false;
    $scope.flagsess = false;
    $scope.Iswaiting = false;
    $scope.CheckYouthavail = function () {
        var flag = false;
        angular.forEach($scope.TravlerDetail.Adult, function (item, key) {
            if (moment().diff(moment(item.DOB.dd, 'MMM-DD-YYYY'), 'years', true) >= 18) {
                flag = true;
            }
        });
        return flag;
    };
    $scope.select = true;
    $scope.selectca = false;
    $scope.IsExitpop = false;


    $scope.RemoveCoupon = function () {
        $scope.couponcode = '';
        $scope.removebtn = false;
        $scope.promomsg = "";
    };
    $scope.ApplyCoupon = function () {
        if ($scope.couponcode != '') {
            if ($scope.couponcode == 'XXXX') {
                $scope.promomsg = "success";
            } else {
                $scope.promomsg = "error";
            }
            $scope.removebtn = true;
        }

    };

    $scope.RedirectToURL = function (param) {
        if (param == "") {
            $scope.IsExitpop = true;
        } else {
            $window.location.href = $location.protocol() + "://" + $window.location.host + "/" + param;
        }
    };
    $scope.RedirectToURLBlank = function (param) {
        window.open($location.protocol() + "://" + $window.location.host + "/" + param, '_blank');
    };
    $scope.GotoHome = function () {
        $window.location.href = $location.protocol() + "://" + $window.location.host;
    };
    $scope.GottoResult = function () {
        $window.location.href = $scope.backUrl;
    };
    $scope.hideExitpopup = function () {
        $scope.IsExitpop = false;
    };
    $scope.toggleDeatils = function (i) {
        var id = 'searchResultsItem-' + i;
        var obj = $('div.fl_detailss');

        if ($(obj).attr('id') != id) {
            $(obj).hide(400);
            $(obj).siblings().find('div.rulebx').find('i.fa-caret-up').toggleClass('fa-caret-down fa-caret-up');
            //$($(obj).parent().parent().prevObject).removeClass('active');
        } else {
            if ($(obj).css('display') == 'none') {
                $(obj).show(400);
                $(obj).siblings().find('div.rulebx').find('i.fa-caret-down').toggleClass('fa-caret-down fa-caret-up');
                //  $($(obj).parent().parent().prevObject).addClass('active');
            } else {
                $(obj).hide(400);
                $(obj).siblings().find('div.rulebx').find('i.fa-caret-up').toggleClass('fa-caret-down fa-caret-up');
                //$($(obj).parent().parent().prevObject).removeClass('active');
            }
        }

    }
    //************* Go to

    $scope.StateList = [];
    $scope.CountrySelected = function () {
        //  console.log($scope.BillingContactDetail.Country);
        $scope.BillingContactDetail.State = "";
        if ($scope.BillingContactDetail.Country == "Canada" || $scope.BillingContactDetail.Country == "United States") {

            //var loadRequest = {
            //    method: 'GET',
            //    url: '/AirportsDetails/statesbycountry?code=' + $scope.BillingContactDetail.Country,
            //    headers: {
            //        contentType: 'application/json'
            //    }
            //};
            //$http(loadRequest).then(function (response) {
            //    $scope.StateList = response.data;
            //},
            //    function (reason) {
            //        $scope.error = reason.data;
            //        $log.info(reason);
            //    });
            if ($scope.BillingContactDetail.Country == "Canada") {
                $scope.select = false;
                $scope.selectca = true;
            }
            else if ($scope.BillingContactDetail.Country == "United States") {
                $scope.select = true;
                $scope.selectca = false;

            }

        }
        else {
            $scope.selectca = false;
            $scope.select = false;
        }
    }


    $scope.setTravelProtection = function (value) {
        $scope.insuranceDetail.InsSelected = value;
        if (value == "YES" && $scope.insuranceQuote.Status.Success == "true") {

            $scope.insuranceDetail.AdtInsurance = $scope.insuranceQuote.PolicyInformation.Premium.StandardPremiumDistribution.Travelers.Traveler[0].TravelerPremium;

            if ($scope.fareMatchRQ.PaxDetail.NoChild > 0) {
                $scope.insuranceDetail.ChdInsurance = $scope.insuranceQuote.PolicyInformation.Premium.StandardPremiumDistribution.Travelers.Traveler[+($scope.fareMatchRQ.PaxDetail.NoOfAdult)].TravelerPremium;
                if ($scope.fareMatchRQ.PaxDetail.NoInfant > 0) {

                    $scope.insuranceDetail.InfInsurance = $scope.insuranceQuote.PolicyInformation.Premium.StandardPremiumDistribution.Travelers.Traveler[+($scope.fareMatchRQ.PaxDetail.NoOfAdult) + +($scope.fareMatchRQ.PaxDetail.NoChild)].TravelerPremium;

                } else {
                    $scope.insuranceDetail.InfInsurance = 0;
                }
            } else {
                $scope.insuranceDetail.ChdInsurance = 0;
                if ($scope.fareMatchRQ.PaxDetail.NoInfant > 0) {

                    $scope.insuranceDetail.InfInsurance = $scope.insuranceQuote.PolicyInformation.Premium.StandardPremiumDistribution.Travelers.Traveler[+($scope.fareMatchRQ.PaxDetail.NoOfAdult)].TravelerPremium;

                } else {
                    $scope.insuranceDetail.InfInsurance = 0;
                }
            }


            $scope.insuranceDetail.TotalInsurance = $scope.insuranceQuote.PolicyInformation.Premium.TotalPremiumAmount;
        } else {
            $scope.insuranceDetail.AdtInsurance = 0;
            $scope.insuranceDetail.ChdInsurance = 0;
            $scope.insuranceDetail.InfInsurance = 0;
            $scope.insuranceDetail.TotalInsurance = 0;
        }

    }

    $scope.ToDate = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }
        var date = new Date(n.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
        return date;
    };

    $scope.To12HourTime = function (n) {
        if (n != undefined) {
            var hours = Number(n.match(/^(\d+)/)[1]);
            var minutes = Number(n.match(/:(\d+)/)[1]);
            var AMPM = "";
            if (hours < 12) {
                AMPM = "AM"
            };
            if (hours == 12) {
                AMPM = "PM"
            }
            if (hours > 12) {
                AMPM = "PM"
                hours = hours - 12;
            }
            var sHours = hours.toString();
            var sMinutes = minutes.toString();
            if (hours < 10) sHours = "0" + sHours;
            if (minutes < 10) sMinutes = "0" + sMinutes;
            return (sHours + ":" + sMinutes + " " + AMPM);
        }
    };


    $scope.isObjectEmpty = function (obj) {
        if (obj == null)
            return true;
        return Object.keys(obj).length === 0;
    }

    $scope.Gender = [{ text: "Gender", value: "" }, { text: "Male", value: "M" },
    { text: "Female", value: "F" }]

    $scope.Title = [{ text: "Title", value: "" }, { text: "Mr", value: "Mr" }, { text: "Ms", value: "Ms" }, { text: "Mrs", value: "Mrs" }, { text: "Miss", value: "Miss" }, { text: "Dr", value: "Dr" }];
    $scope.Ctitle = [{ text: "Title", value: "" }, { text: "Master", value: "Master" }, { text: "Miss", value: "Miss" }];
    $scope.Month = [{ text: "Month", value: "" }, { text: "Jan", value: "01" }, { text: "Feb", value: "02" }, { text: "Mar", value: "03" }, { text: "Apr", value: "04" }, { text: "May", value: "05" }, { text: "Jun", value: "06" }, { text: "Jul", value: "07" }, { text: "Aug", value: "08" }, { text: "Sep", value: "09" }, { text: "Oct", value: "10" }, { text: "Nov", value: "11" }, { text: "Dec", value: "12" }];
    //$scope.Date = [];
    //$scope.Date.push({ text: "Date", value: "" });
    //for (var i = 1; i < 31; i++) {
    //    $scope.Date.push({ text: String(i).padStart(2, '0'), value: String(i).padStart(2, '0') });
    //}

    $scope.Year = [];
    $scope.Year.push({ text: "Year", value: "" });
    var n = new Date().getFullYear();
    var month = (new Date).getMonth() + 1;
    for (var i = parseInt(n, 10); i < (parseInt(n, 10) + 10); i++) {
        $scope.Year.push({ text: i.toString(), value: i.toString() });
    }
    $scope.Exp_MM_YY = n.toString() + (month.toString().length == 1 ? "0" + month.toString() : month.toString());


    //$scope.SnrYY = [];
    //$scope.SnrYY.push({ text: "Year", value: "" });
    //var yr = new Date().getFullYear();
    //yr = parseInt(yr, 10) - 65;
    //for (var i = parseInt(yr, 10); i > (parseInt(yr, 10) - 33); i--) {
    //    $scope.SnrYY.push({ text: i.toString(), value: i.toString() });
    //}
    //$scope.AdtYY = [];
    //$scope.AdtYY.push({ text: "Year", value: "" });
    //var yr = new Date().getFullYear();
    //yr = parseInt(yr, 10) - 18;
    //for (var i = parseInt(yr, 10); i > (parseInt(yr, 10) - 47); i--) {
    //    $scope.AdtYY.push({ text: i.toString(), value: i.toString() });
    //}
    //$scope.ChdYY = [];
    //$scope.ChdYY.push({ text: "Year", value: "" });
    //var yr = new Date().getFullYear();
    //yr = parseInt(yr, 10) - 2;
    //for (var i = parseInt(yr, 10); i > (parseInt(yr, 10) - 14); i--) {
    //    $scope.ChdYY.push({ text: i.toString(), value: i.toString() });
    //}
    //$scope.InfYY = [];
    //$scope.InfYY.push({ text: "Year", value: "" });
    //var yr = new Date().getFullYear();
    //yr = parseInt(yr, 10);
    //for (var i = parseInt(yr, 10); i > (parseInt(yr, 10) - 2); i--) {
    //    $scope.InfYY.push({ text: i.toString(), value: i.toString() });
    //}

    $scope.PaymentMetohd = [{ text: "CardType", value: "" }, { text: "Visa", value: "VI" }, { text: "Master Card", value: "MC" }, { text: "American Express", value: "AX" }, { text: "Diners Club", value: "Diners Club" }, { text: "Discover", value: "DS" }];
    //------------Start Parse to int function
    $scope.parseToInt = function (myAcc) {
        return parseInt(myAcc);
    }

    $scope.ToFloat = function (n) {
        return parseFloat(n);
    }
    //------------End 
    $scope.Seats = function (Sectors) {
        var SeatsArr = [];
        if (Sectors != undefined && Sectors.Sector.length > 0) {
            $.each(Sectors.Sector, function (index, data) {
                SeatsArr.push(parseInt(data.NoSeats));
            });
            return Math.min.apply(Math, SeatsArr);
        }
        return 0;
    }


    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.FlightDetails = {};
    //Obsolute
    //$scope.FlightDetails = $stateParams.BookingDetail.AirlineDetail;
    //$scope.SearchCritaria = $stateParams.BookingDetail.SearchCritaria;
    $scope.ISDcodes = {};
    $scope.IsOneWay = false;
    $scope.loader = false;
    $scope.IsPriceChanged = false;
    $scope.SEATNOTAVAIL = false;
    // $scope.terms = false;
    $scope.Pricediff = 0;
    $scope.datapost = [];
    $scope.kayakclickid = null;
    $scope.orgnear = false;
    $scope.destnear = false;
    $scope.RQcriteria = {
        Skey: null,
        Ikey: null,
        Bkey: null,
    };

    $scope.TravlerDetail = { Adult: [], Senior: [], Child: [], Infant: [], InfantS: [] };

    $scope.fareMatchRQ =
    {
        FlightDetail: {
            Flight: {}
        },
        ClientDetail: {
            ClientId: "ADT1",
            Title: "",
            FirstName: "",
            LastName: "",
            Age: "",
            DOB: "",
            Gender: "M",
            Email: "",
            Mobile: "",
            Phone: "",
            Meal: "",
            Seat: "",
            Address: "",
            Passport: "",
            PassportIS: "",
            PassportEX: "",
            Passportcity: "",
            Passportcountry: "",
            Nationality: ""
        },
        PaxDetail: {
            Adult: [],
            Senior: [],
            Child: [],
            Infant: [],
            InfantS: [],
            NoAdult: "0",
            NoSenior: "0",
            NoChild: "0",
            NoInfant: "0",
            NoInfantS: "0",
            NoOfAdult: "0",
            NoOfSenior: "0",
            NoOfChild: "0",
            NoOfInfant: "0",
            NoOfInfantS: "0",
            AdditionalDetails: {
                LocalId: []
            }
        },
        SearchDetail: {          
        },
        TermCondition: null,
        WebsiteName: "travelocompare"
    };

    $scope.FlightBook = {
        NoOfTST: 0,
        PortalID: 79,
        FlightSearch: {},
        SelectedContract: {},
        FlightBooking: {
            SelectedContract: {},
            TravellerDetails: [],
            BillingDetails: {
                TransactionID: 0,
                CCHolderName: "",
                CardNumber: "",
                CVVNumber: "",
                ExpiryMonth: 0,
                ExpiryYear: 0,
                Country: "",
                State: "",
                ZipCode: "",
                AddressLine1: "",
                AddressLine2: "",
                AddressLine3: "",
                City: "",
                BillingPhone: "",
                BillingPhoneCode: "",
                ContactPhone: "",
                ContactPhoneCode: "",
                Email: "",
                CardType: 1,
                PaymentPaidFor: 0,
                TotalAmount: 0.0
            }
        },
        RequestType: 0,
        TokenDetails: {},
        UniqueRequestId: null,
        IsAgentLogin: false,
        ProviderDetail: null,
        CalanderFareSearchRQ: null,
        Pnr: ""
    }
    $scope.FareMatch = {
        FlightSearchRS: {
            Itineraries: {},
            AltDateFlights: {},
            AltAirportFlights: {},
            SpecificAirline: [],
            Skey:""
        },
        FlightSearchRQData: null,
        Airportlist: null,
        TravellerDetails: null,
       //"BillingDetails": null,
        SelectedContract: null,
        BookRS: null
       //"FareInformativePricingRS": null
    };

    $scope.BillingContactDetail = {
        Country: "United States",
        Address1: "",
        Address2: "",
        City: "",
        State: "",
        Zip: "",
        PhoneNumber: "",
        Email: "",
        ConfirmEmail: "",
        ISDCode: ['+1']
    };
    $scope.object = null;
    $scope.FlightDetail = null;
    const removeEmptyOrNull = (obj) => {
        Object.keys(obj).forEach(k =>
            (obj[k] && typeof obj[k] === 'object') && removeEmptyOrNull(obj[k]) ||
            (!obj[k] && obj[k] !== undefined) && delete obj[k]
        );
        return obj;
    };
    $scope.loadData = function () {

        $scope.QuoteDetail = {};
        $scope.insuranceDetail = {};      


      if (window.localStorage.getItem($location.search()['q']) != undefined && window.localStorage.getItem($location.search()['q']) != null) {
            $scope.backUrl = window.localStorage.getItem($location.search()['q']);
            //window.localStorage.removeItem($location.search()['q']);
        }

        if ($location.search()['Skey'] != undefined)
            $scope.RQcriteria.Skey = $location.search()['Skey'];
        if ($location.search()['Ikey'] != undefined)
            $scope.RQcriteria.Ikey = $location.search()['Ikey'];
      
        if ($location.search()['Cid'] != undefined)
            $scope.kayakclickid = $location.search()['Cid'];

        var target='https://api.flightsofares.com/api/FlightApi/GetSelectedBookingRQ?Skey=' + $scope.RQcriteria.Skey + '&Ikey=' + $scope.RQcriteria.Ikey;
          if ($location.search()['source'] != undefined)
           target+= '&Source='+atob($location.search()['source']);
        var loadRequest = {
            method: 'GET',
            url: target,
           //url: 'http://localhost:55265/api/FlightApi/GetSelectedBookingRQ?SKey=' + $scope.RQcriteria.Skey + '&Ikey=' + $scope.RQcriteria.Ikey,
            headers: {
                contentType: 'application/json'
            },
            data: $scope.RQcriteria.Rkey
        };



        
        $http(loadRequest).then(function (response) {
       
        if (response.data == null) {
            $scope.progressbar.complete();
            $scope.callpopupSessionExpired();
        }
        $scope.Iswaiting = true;
       
        
        $scope.fareMatchRQ.SearchDetail.AirSearchQuery = response.data.SearchDetail.AirSearchQuery;
        $scope.fareMatchRQ.FlightDetail = response.data.FlightDetail;

        $scope.fareMatchRQ.SearchDetail.AirSearchQuery.PaxDetail = removeEmptyOrNull(response.data.SearchDetail.AirSearchQuery.PaxDetail);
        //$scope.fareMatchRQ.FlightDetail.Flight = response.data.RateRuleDetailsRS.FlightDetail.Itinerary;
        //$scope.FlightBook.FlightSearch = response.data.FlightSearchRQData;
        //$scope.FlightBook.SelectedContract = response.data.RateRuleDetailsRS.FlightDetail.Itinerary;
        //$scope.FlightBook.FlightBooking.SelectedContract = response.data.RateRuleDetailsRS.FlightDetail.Itinerary;
        //$scope.FlightBook.TokenDetails = response.data.RateRuleDetailsRS.AmadeusSessionToken;

        //$scope.Airportslist = response.data.Airportlist;
        $scope.FlightDetails = $scope.fareMatchRQ.FlightDetail;

        //if ($scope.fareMatchRQ.SearchDetail.AirSearchQuery != null && $scope.fareMatchRQ.SearchDetail.AirSearchQuery.Segments.Segment[0].Origin.toUpperCase() !== $scope.fareMatchRQ.SearchDetail.AirSearchQuery.Segments.Segment[0].OrgCity.toUpperCase()) {
        //    $scope.orgnear = true;
        //}
        //if ($scope.fareMatchRQ.SearchDetail.AirSearchQuery != null && $scope.fareMatchRQ.SearchDetail.AirSearchQuery.Segments.Segment[0].Destination.toUpperCase() !== $scope.fareMatchRQ.SearchDetail.AirSearchQuery.Segments.Segment[0].DestCity.toUpperCase()) {
        //    $scope.destnear = true;
        //}

        $scope.IsOneWay = true;
        if ($scope.fareMatchRQ.SearchDetail.AirSearchQuery.JourneyType == "R" || $scope.fareMatchRQ.SearchDetail.AirSearchQuery.JourneyType == "2") {
            $scope.IsOneWay = false;
        }
        //Operation ************

        $scope.fareMatchRQ.PaxDetail.NoAdult = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoAdult;
        $scope.fareMatchRQ.PaxDetail.NoSenior = '0';//response.data.SearchDetail.AirSearchQuery.PaxDetail.NoSenior;
        $scope.fareMatchRQ.PaxDetail.NoChild = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoChild;
        $scope.fareMatchRQ.PaxDetail.NoInfant = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoInfant;
        $scope.fareMatchRQ.PaxDetail.NoInfantS = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoInfantS;

        $scope.fareMatchRQ.PaxDetail.NoOfAdult = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoAdult;
        $scope.fareMatchRQ.PaxDetail.NoOfSenior = '0';//response.data.SearchDetail.AirSearchQuery.PaxDetail.NoSenior;
        $scope.fareMatchRQ.PaxDetail.NoOfChild = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoChild;
        $scope.fareMatchRQ.PaxDetail.NoOfInfant = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoInfant;
        $scope.fareMatchRQ.PaxDetail.NoOfInfantS = response.data.SearchDetail.AirSearchQuery.PaxDetail.NoInfantS;


        var index = 1;
        for (var i = 0; i < parseInt($scope.fareMatchRQ.PaxDetail.NoAdult); i++) {

            var obj = {
                Index: index,
                FirstName: "",
                MiddleName: "",
                LastName: "",
                Title: "",
                DOB: {
                    month: "",
                    dd: "",
                    yyyy: ""
                },
                Gender: "1",
                Travler: "Adult",
                Email: "",

            }
            $scope.TravlerDetail.Adult.push(obj);
            index++;
        }
        ////bind senior travler
        for (var i = 0; i < parseInt($scope.fareMatchRQ.PaxDetail.NoSenior); i++) {

            var obj = {
                Index: index,
                FirstName: "",
                MiddleName: "",
                LastName: "",
                Title: "",
                DOB: {
                    month: "",
                    dd: "",
                    yyyy: ""
                },
                Gender: "1",

                Travler: "Senior"
            }
            $scope.TravlerDetail.Senior.push(obj);
            index++;
        }
        ////bind child travler
        for (var i = 0; i < parseInt($scope.fareMatchRQ.PaxDetail.NoChild); i++) {

            var obj = {
                Index: index,
                FirstName: "",
                MiddleName: "",
                LastName: "",
                Title: "",
                DOB: {
                    month: "",
                    dd: "",
                    yyyy: ""
                },
                Gender: "1",

                Travler: "Child"
            }
            $scope.TravlerDetail.Child.push(obj);
            index++;
        }
        //// bind Infant travler
        for (var i = 0; i < parseInt($scope.fareMatchRQ.PaxDetail.NoInfant); i++) {

            var obj = {
                Index: index,
                FirstName: "",
                MiddleName: "",
                LastName: "",
                Title: "",
                DOB: {
                    month: "",
                    dd: "",
                    yyyy: ""
                },
                Gender: "1",

                Travler: "Infant"
            }
            $scope.TravlerDetail.Infant.push(obj);
            index++;
        }
        //// bind InfantS travler
        for (var i = 0; i < parseInt($scope.fareMatchRQ.PaxDetail.NoInfantS); i++) {

            var obj = {
                Index: index,
                FirstName: "",
                MiddleName: "",
                LastName: "",
                Title: "",
                DOB: {
                    month: "",
                    dd: "",
                    yyyy: ""
                },
                Gender: "1",
                Travler: "InfantS"
            }
            $scope.TravlerDetail.InfantS.push(obj);
            index++;
        }

        $scope.SetStates();
        //  $scope.insuranceDetail.InsSelected = 'NO';
        $scope.progressbar.complete();

        $scope.$apply();
        },
         function (reason) {
              $scope.progressbar.complete();
                $scope.error = reason.data;
               $log.info(reason);
         });

        //setTimeout(function () { $scope.callfunction(); }, 2000);
    };

    $scope.backUrl = $location.protocol() + "://" + $window.location.host + "?";

    $scope.SetStates = function () {
        var RequestUS = {
            method: 'GET',
            url: '/AirportsDetails/statesbycountry?code=United States',
            headers: {
                contentType: 'application/json'
            }
        };
        $http(RequestUS).then(function (response) {
            $scope.StateList = response.data;
        },
            function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            });

        var RequestCA = {
            method: 'GET',
            url: '/AirportsDetails/statesbycountry?code=Canada',
            headers: {
                contentType: 'application/json'
            }
        };
        $http(RequestCA).then(function (response) {
            $scope.StateListCA = response.data;
        },
            function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            });

    };


    //-----------------------------------------//        


    // Timeout timer value
    var TimeOutTimerValue = 1140000;

    // Start a timeout
    var TimeOut_Thread = $timeout(function () { $scope.LogoutByTimer() }, TimeOutTimerValue);
    //var bodyElement = angular.element($document);

    ///// Keyboard Events
    //bodyElement.bind('keydown', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('keyup', function (e) { $scope.TimeOut_Resetter(e) });

    ///// Mouse Events	
    //bodyElement.bind('click', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('mousemove', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('DOMMouseScroll', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('mousewheel', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('mousedown', function (e) { $scope.TimeOut_Resetter(e) });

    ///// Touch Events
    //bodyElement.bind('touchstart', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('touchmove', function (e) { $scope.TimeOut_Resetter(e) });

    ///// Common Events
    //bodyElement.bind('scroll', function (e) { $scope.TimeOut_Resetter(e) });
    //bodyElement.bind('focus', function (e) { $scope.TimeOut_Resetter(e) });

    var x;
    $scope.timer = function () {
        if ($scope.timeexpired == true) {
            $scope.flagsess = true;
            document.getElementById('minutes').innerText = '';
            document.getElementById('seconds').innerText = ''
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            var d1 = new Date(),
                countDown = new Date(d1);
            countDown.setMinutes(d1.getMinutes() + 1);
            clearInterval(x);
            x = setInterval(function () {

                let now = new Date().getTime(),
                    distance = countDown.getTime() - now;

                if (distance > 0) {
                    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
                        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

                } else {
                    $scope.flagsess = false;
                    //  do session popup show
                    $('div.timer').css('display', 'none');
                    $('div.session').css('display', 'block');
                }
            }, second);
        }
    };

    $scope.LogoutByTimer = function () {
        $scope.timeexpired = true;
        $scope.timer();
    };

    $scope.TimeOut_ResetterClick = function () {
        $scope.timeexpired = false;
        $scope.flagsess = false;
        /// Stop the pending timeout
        $timeout.cancel(TimeOut_Thread);

        /// Reset the timeout
        TimeOut_Thread = $timeout(function () { $scope.LogoutByTimer() }, TimeOutTimerValue);
    };
    $scope.TimeOut_Resetter = function (e) {
        //$scope.timeexpired = false;  
        /// Stop the pending timeout
        $timeout.cancel(TimeOut_Thread);
        if ($scope.flagsess == false) {
            /// Reset the timeout
            TimeOut_Thread = $timeout(function () { $scope.LogoutByTimer() }, TimeOutTimerValue);
        }
    };
    //-----------------------------------------//

    $scope.GetAirportName = function (code) {
        if (code != undefined) {
            var name = code;
            angular.forEach($scope.Airportslist, function (item) {
                if (item.AirportFullName.split('-')[0] == code.toUpperCase()) {
                    name = (item.AirportFullName.split('-')[1]).split(',')[0];
                    return false;
                }
            });
            return name;
        }
        else
            return;
    };
    //Obsolute
    //$scope.fareMatchRQ.FlightDetail.Itinerary = $scope.FlightDetails;
    //$scope.fareMatchRQ.SearchDetail.FlightSearchRQ = $scope.SearchCritaria;
    $scope.cardName = function (code) {
        if (code == "AX") {
            return "American Express";
        } else if (code == "DS") {
            return "Discovery";
        } else if (code == "CA") {
            return "Master card";
        } else if (code == "VI") {
            return "Visa";
        } else if (code == "TP") {
            return "Universal Air Travel card";
        } else { return code; }
    };


    $scope.Countsector = function (items, cond) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.IsReturn == cond.toUpperCase() || item.isReturn.toUpperCase() == cond.toUpperCase()) {
                filtered.push(item);
            }
        });
        return filtered.length;
    };
    $scope.DepartReturn = function (items, cond) {

        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.IsReturn == cond.toUpperCase() || item.isReturn.toUpperCase() == cond.toUpperCase()) {
                filtered.push(item);
            }
        });
        return filtered;
    };
    $scope.CardDetail = {
        PaymentMethod: "",
        CardNumber: "",
        CarHolderName: "",
        ExpiryMonth: "",
        ExpiryYear: "",
        CardVerificationNumber: ""
    };

    $scope.findISD = function (name) {
        var arr = $filter('filter')($scope.ISDcodes, function (item) {
            return item.CountryName.toLowerCase() == name.toLowerCase();
        });
        $scope.BillingContactDetail.ISDCode = [];
        $.each(arr, function () {
            if (this.ISDCode != undefined && this.ISDCode != null)
                $scope.BillingContactDetail.ISDCode.push(this.ISDCode);
        })

    }
    // bind adult travler
    var isShift = false;
    var seperator = "-";
    //$scope.callfunction = function () {
    //    var inputs = angular.element(document.getElementsByClassName("dte"));
    //    //Loop through all INPUT elements.
    //    for (var i = 0; i < inputs.length; i++) {
    //        //Check whether the INPUT element is TextBox.
    //        if (inputs[i].type == "text") {
    //            //Check whether Date Format Validation is required.
    //            if (inputs[i].className.indexOf("dte") != -1) {

    //                //Set Max Length.
    //                inputs[i].setAttribute("maxlength", 10);

    //                //Only allow Numeric Keys.
    //                inputs[i].onkeydown = function (e) {
    //                    return $scope.IsNumeric(this, e);
    //                };
    //                //Validate Date as User types.
    //                inputs[i].onkeyup = function (e) {
    //                    $scope.ValidateDateFormat(this, e.keyCode);
    //                };
    //            }

    //        }
    //    }
    //};
    $scope.IsNumeric = function (input, e) {
        var keyCode = e.keyCode;
        if (keyCode == 16) {
            isShift = true;
        }
        //Allow only Numeric Keys.
        if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
            if ((input.value.length == 2 || input.value.length == 5) && keyCode != 8) {
                input.value += seperator;
            }

            return true;
        }
        else {
            return false;
        }
    };
    $scope.GoToResult = function () {
        window.location.href = $scope.backUrl;
    }

    $scope.ValidateDateFormat = function (input, keyCode) {
        var dateString = input.value;
        if (keyCode == 16) {
            isShift = false;
        }
        if (input.value.length == 10) {
            if ($(input).attr('name').indexOf("IDOB") > -1) {

                var mindate = new Date();
                mindate = new Date((mindate.getFullYear() - 2), mindate.getMonth() + 1, mindate.getDate());
                var maxdate = new Date();
                var date = new Date(input.value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3"));
                if (mindate <= date && date < maxdate) {
                    return true;
                } else {
                    alert("Infant Age should not greater than 2 year!");

                    $("input[name=" + $(input).attr('name') + "]").val('');
                    return false;
                }
            }
            else if ($(input).attr('name').indexOf("CDOB") > -1) {
                var mindate = new Date();
                mindate = new Date((mindate.getFullYear() - 2), mindate.getMonth(), mindate.getDate());
                var maxdate = new Date();
                maxdate = new Date((maxdate.getFullYear() - 12), maxdate.getMonth(), maxdate.getDate());
                var date = new Date(input.value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3"));
                if (maxdate <= date && date < mindate) {
                    return true;
                } else {
                    alert("Child Age should not greater than 12 year!");
                    $("input[name=" + $(input).attr('name') + "]").val('');
                    return false;
                }

            }

        }

        var regex = /(0[1-9]|1[0-2])\/(((0|1)[0-9]|2[0-9]|3[0-1])\/((19|20)\d\d))$/;
    };

    $scope.BookFlight = function (IsValid) {
        if (IsValid)//&& $scope.terms
        {
            $scope.loader = true;
            $scope.progressbar.start();
            $scope.fareMatchRQ.WebsiteName = 'travelocompare';
            var infants = $scope.TravlerDetail.Infant.length;

            angular.forEach($scope.TravlerDetail.Adult, function (item, key) {
                var index = key;
                var obj = {
                    LocalId: "ADT" + (key + 1),
                    Type: "ADT",
                    Title: $scope.GetTitle(item.Gender),
                    FirstName: item.FirstName,
                    //FirstName: (item.FirstName + " " + item.MiddleName),
                    MiddleName: item.MiddleName,
                    LastName: item.LastName,//$filter('NoSpace')(item.LastName + " " + item.MiddleName),
                    Age: "",
                    DOB: (item.DOB.dd).split('-')[1] + "-" + (item.DOB.dd).split('-')[0] + "-" + (item.DOB.dd).split('-')[2],// + "-" + item.DOB.month + "-" + item.DOB.yyyy,
                    Gender: item.Gender,
                    Email: item.Email,
                    Phone: "",
                    Meal: "0",
                    Seat: "0",
                    FreqFlyerNo: {
                        Airline: ""
                    }
                };
                if (infants > 0 && (key + 1) <= infants) {
                    obj.InfAsso = "INF" + (key + 1);
                }

                $scope.fareMatchRQ.PaxDetail.Adult.push(obj);
                $scope.fareMatchRQ.PaxDetail.AdditionalDetails.LocalId.push(obj.LocalId);

                if (key == 0) {
                    $scope.fareMatchRQ.ClientDetail = {
                        ClientId: "ADT1",
                        Title: $scope.GetTitle(item.Gender),
                        FirstName: item.FirstName,
                        LastName: item.LastName,
                        Age: "",
                        DOB: (item.DOB.dd).split('-')[1] + "-" + (item.DOB.dd).split('-')[0] + "-" + (item.DOB.dd).split('-')[2],// + "-" + item.DOB.month + "-" + item.DOB.yyyy,
                        Gender: item.Gender,
                        Email: $scope.BillingContactDetail.Email,
                        Mobile: $scope.BillingContactDetail.PhoneNumber,
                        Phone: $scope.BillingContactDetail.PhoneNumber.toString(),
                        Meal: "",
                        Seat: "",
                        Address: $scope.BillingContactDetail.Country + ", " + $scope.BillingContactDetail.State + ", " + $scope.BillingContactDetail.City + ", " + $scope.BillingContactDetail.Address1 + ", " + $scope.BillingContactDetail.Address2 + ", " + $scope.BillingContactDetail.Zip

                    };
                }
            });
            var mm = 0;
            angular.forEach($scope.TravlerDetail.Child, function (item, key) {
                var obj = {
                    LocalId: "CHD" + (mm + 1),
                    Type: "CHD",
                    Title: $scope.GetSpouse(item.Gender),//"Master",
                    FirstName: item.FirstName,
                    //FirstName: (item.FirstName + " " + item.MiddleName),
                    MiddleName: item.MiddleName,
                    LastName: item.LastName,//$filter('NoSpace')(item.LastName + " " + item.MiddleName),
                    Age: "",
                    DOB: (item.DOB.dd).split('-')[1] + "-" + (item.DOB.dd).split('-')[0] + "-" + (item.DOB.dd).split('-')[2],// + "-" + item.DOB.month + "-" + item.DOB.yyyy,
                    Gender: item.Gender,
                    //Email: "NA",
                    //Phone: "NA",
                    Meal: "0",
                    Seat: "0",
                    FreqFlyerNo: {
                        Airline: ""
                    }
                   
                };
                $scope.fareMatchRQ.PaxDetail.Child.push(obj);
                $scope.fareMatchRQ.PaxDetail.AdditionalDetails.LocalId.push(obj.LocalId);
                mm++;
            });
            angular.forEach($scope.TravlerDetail.InfantS, function (item, key) {
                var obj = {
                    LocalId: "CHD" + (mm + 1),
                    Type: "CHD",
                    Title: $scope.GetSpouse(item.Gender),//"Master",
                    FirstName: item.FirstName,
                   //FirstName: (item.FirstName + " " + item.MiddleName),
                    MiddleName: item.MiddleName,
                    LastName: item.LastName,//$filter('NoSpace')(item.LastName + " " + item.MiddleName),
                    Age: "",
                    DOB: (item.DOB.dd).split('-')[1] + "-" + (item.DOB.dd).split('-')[0] + "-" + (item.DOB.dd).split('-')[2],// + "-" + item.DOB.month + "-" + item.DOB.yyyy,
                    Gender: item.Gender,
                    //Email: "NA",
                    //Phone: "NA",
                    Meal: "0",
                    Seat: "0",
                    FreqFlyerNo: {
                        Airline: ""
                    }
                };
                $scope.fareMatchRQ.PaxDetail.Child.push(obj);
                $scope.fareMatchRQ.PaxDetail.AdditionalDetails.LocalId.push(obj.LocalId);
            });
            angular.forEach($scope.TravlerDetail.Infant, function (item, key) {
                var obj = {
                    LocalId: "INF" + (key + 1),
                    Type: "INF",
                    Title: $scope.GetSpouse(item.Gender),//"Master",
                    FirstName: item.FirstName,
                    //FirstName: (item.FirstName + " " + item.MiddleName),
                    MiddleName: item.MiddleName,
                    LastName: item.LastName,//$filter('NoSpace')(item.LastName + " " + item.MiddleName),
                    Age: "",
                    DOB: (item.DOB.dd).split('-')[1] + "-" + (item.DOB.dd).split('-')[0] + "-" + (item.DOB.dd).split('-')[2],// + "-" + item.DOB.month + "-" + item.DOB.yyyy,
                    Gender: item.Gender,
                    //Email: "NA",
                    //Phone: "NA",
                    Meal: "0",
                    Seat: "0",
                    FreqFlyerNo: {
                        Airline: ""
                    }
                    //InfAsso: "INF" + (key + 1)
                }
                $scope.fareMatchRQ.PaxDetail.Infant.push(obj);
                $scope.fareMatchRQ.PaxDetail.AdditionalDetails.LocalId.push(obj.LocalId);
            });
            $scope.CardDetail.CardNumber = $scope.CardDetail.CardNumber.replace(/ /g, "");
            $scope.CardDetail.CardVerificationNumber = $scope.CardDetail.CardVerificationNumber.toString();
            var _fareMatchRQ = $scope.fareMatchRQ;
            var BillingInfo = {
                FareMatchRQ: _fareMatchRQ,
                BillingContactDetail: $scope.BillingContactDetail,
                CardDetail: $scope.CardDetail,
                Skey: $scope.RQcriteria.Skey,
                Token: ''
            };

           //kaushik// BillingInfo.FareMatchRQ.PaxDetail.NoChild = ($scope.ToFloat($scope.fareMatchRQ.PaxDetail.NoChild) + $scope.ToFloat($scope.fareMatchRQ.PaxDetail.NoInfantS)).toString();         



            //$scope.FlightBook.FlightBooking.BillingDetails.AddressLine1 = $scope.BillingContactDetail.Address1;
            //$scope.FlightBook.FlightBooking.BillingDetails.AddressLine2 = $scope.BillingContactDetail.Address2;
            //$scope.FlightBook.FlightBooking.BillingDetails.City = $scope.BillingContactDetail.City;
            //$scope.FlightBook.FlightBooking.BillingDetails.ZipCode = $scope.BillingContactDetail.Zip;
            //$scope.FlightBook.FlightBooking.BillingDetails.Email = $scope.BillingContactDetail.Email;
            //$scope.FlightBook.FlightBooking.BillingDetails.BillingPhone = $scope.BillingContactDetail.PhoneNumber.toString();
            //$scope.FlightBook.FlightBooking.BillingDetails.State = $scope.BillingContactDetail.State;
            //$scope.FlightBook.FlightBooking.BillingDetails.Country = $scope.BillingContactDetail.Country;

            //$scope.FlightBook.FlightBooking.BillingDetails.CCHolderName = $scope.CardDetail.CarHolderName;//$scope.CardDetail.PaymentMethod
            //$scope.FlightBook.FlightBooking.BillingDetails.CardNumber = $scope.CardDetail.CardNumber;
            //$scope.FlightBook.FlightBooking.BillingDetails.CVVNumber = $scope.CardDetail.CardVerificationNumber.toString();
            //$scope.FlightBook.FlightBooking.BillingDetails.ExpiryMonth = parseInt($scope.CardDetail.ExpiryMonth);
            //$scope.FlightBook.FlightBooking.BillingDetails.ExpiryYear = parseInt($scope.CardDetail.ExpiryYear);
            //$scope.FlightBook.FlightBooking.BillingDetails.CardType = $filter('CardType')($('input[name=cardType]').val());


            $scope.FareMatch.FlightSearchRQData = $scope.fareMatchRQ.SearchDetail.AirSearchQuery;
            $scope.FareMatch.TravellerDetails = $scope.fareMatchRQ.PaxDetail;// $scope.FlightBook.FlightBooking.TravellerDetails;
           // $scope.FareMatch.BillingDetails = $scope.FlightBook.FlightBooking.BillingDetails;
            //$scope.FareMatch.Airportlist = $scope.Airportslist;
           
            $.ajax({
                type: "POST",
               url: commonUrl + 'BookFlight/BookFlight',
                dataType: 'JSON',
                data: BillingInfo,
                success: function (response) {
                    //$scope.FlightBook.Pnr = response.PNR;                 

                    $scope.FareMatch.BookRS = response;
                    $scope.FareMatch.BookRS.SearchDetail.AirSearchQuery.Direct = (($scope.FareMatch.BookRS.SearchDetail.AirSearchQuery.Direct.toLowerCase() == "false" || $scope.FareMatch.BookRS.SearchDetail.AirSearchQuery.Direct == false) ? "0" :"1");
                    $scope.FareMatch.SelectedContract = $scope.fareMatchRQ.FlightDetail.Itinerary;

                    if (response.FlightDetail.Itinerary.PNRInfo.PNRNo == null && response.FlightDetail.Itinerary.PNRInfo.Error.toLowerCase().trim().indexOf('booking decliened') > -1) {
                        alert("Error in  Flight  Booking");
                        window.location.reload();
                    }
                    else {
                        $scope.goToConfirmation(response);
                    }
                    $scope.progressbar.complete();
                    $scope.$apply();
                },
                error: function (reason) {
                    $scope.loader = false;
                    $scope.error = reason.data;
                    $scope.progressbar.complete();
                    $scope.$apply();
                }

            });
            
        }
        else {
            $($($($('div.is-error').first()).children())[0]).focus();
            $scope.loader = false;
        }
    };



    $scope.goToConfirmation = function (confirmationdetail) {
        //$state.go("confirmation", { ConfirmationDetail: confirmationdetail });
        if (confirmationdetail == null) {
            $window.location.href = $scope.backUrl;
        }
        else {
            var ConfirmationUrl = $location.protocol() + "://" + $window.location.host + "/Confirmation.html?" +
                "Bkey=" + confirmationdetail.Bkey + "&guid=" + $location.search()['_guid'];
            //"Bkey=" + confirmationdetail.Bkey;

           $window.location.href = ConfirmationUrl;

        }
    };

    $scope.GetTitle = function (Gender) {
        if (Gender == "M" || Gender == "1")
            return "Mr";
        else
            return "Ms";
    };
    $scope.GetSpouse = function (Gender) {
        if (Gender == "M" || Gender == "1")
            return "Master";
        else
            return "Miss";
    };

});
//Booking Controller End
app.controller('ConfirmationController', function ($scope, $http, $window, $stateParams, $location, $filter, ngProgressFactory, $localStorage) {

    $scope.To12HourTime = function (n) {
        if (n != undefined) {
            var hours = Number(n.match(/^(\d+)/)[1]);
            var minutes = Number(n.match(/:(\d+)/)[1]);
            var AMPM = "";
            if (hours < 12) {
                AMPM = "AM"
            };
            if (hours == 12) {
                AMPM = "PM"
            }
            if (hours > 12) {
                AMPM = "PM"
                hours = hours - 12;
            }
            var sHours = hours.toString();
            var sMinutes = minutes.toString();
            if (hours < 10) sHours = "0" + sHours;
            if (minutes < 10) sMinutes = "0" + sMinutes;
            return (sHours + ":" + sMinutes + " " + AMPM);
        }
    };
    $scope.RedirectToURL = function (param) {
        $window.location.href = $location.protocol() + "://" + $window.location.host + "/" + param;
    };
    $scope.progressbar = ngProgressFactory.createInstance();
    $scope.progressbar.start();
    $scope.Iswaiting = false;
    $scope.Bkey = null;
    $scope.kayakclickid = null;
    $scope.fareMatchRQ = {};
    $scope.Itinerary = {};
    $scope.PaxDetail = {};
    $scope.CardNumber = {};
    $scope.orgnear = false;
    $scope.destnear = false;
    $scope.ToFloat = function (n) {
        return parseFloat(n);
    }
    $scope.distinctIsreturn = function (item) {
        var filtered = [];
        angular.forEach(item.Sectors.Sector, function (i, v) {
            if (jQuery.inArray(i.isReturn, filtered) === -1) {
                filtered.push(i.isReturn);
            }
        });
        return filtered;
    };
    $scope.callpopupSessionExpired = function () {
        //$scope.IsExpired = true;
        $window.location.href = $location.protocol() + "://" + $window.location.host;
    }
    $scope.ToDate = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }
        var date = new Date(n.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
        return date;
    };

    $scope.ToDateMM = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }
        var date = new Date(n.replace(/(\d{2})-(\d{2})-(\d{4})/, "$1/$2/$3"))
        return date;
    };
    $scope.GetAirportName = function (code) {
        if (code != undefined) {
            var name = code;
            angular.forEach($scope.Airportslist, function (item) {
                if (item.AirportFullName.split('-')[0] == code.toUpperCase()) {
                    name = (item.AirportFullName.split('-')[1]).split(',')[0];
                    return false;
                }
            });
            return name;
        }
        else
            return;
    };

    $scope.Countsector = function (items, cond) {
        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.IsReturn == cond.toUpperCase() || item.isReturn.toUpperCase() == cond.toUpperCase()) {
                filtered.push(item);
            }
        });
        return filtered.length;
    };
    $scope.DepartReturn = function (items, cond) {

        var filtered = [];
        angular.forEach(items, function (item) {
            if (item.IsReturn == cond.toUpperCase() || item.isReturn.toUpperCase() == cond.toUpperCase()) {
                filtered.push(item);
            }
        });
        return filtered;
    };
    // $scope.CardNumber = $localStorage.cardnumber;
    $scope.isObjectEmpty = function (obj) {
        if (obj == null)
            return true;
        return Object.keys(obj).length === 0;
    }
    $scope.loadData = function () {
        if ($location.search()['Bkey'] != undefined)
            $scope.Bkey = $location.search()['Bkey'];

         var loadRequest = {
            method: 'POST',
            // url: 'http://localhost:55265/api/FLightApi/GetSelectedBookingRS?Bkey=' + $scope.Bkey,
            url: 'https://api.flightsofares.com/api/FlightApi/GetSelectedBookingRS?Bkey=' + $scope.Bkey,
            headers: {
                contentType: 'application/json'
            },
            data: $scope.Bkey
        };
       
         $http(loadRequest).then(function (response) {              
           

            if (response.data == null) {
                $scope.progressbar.complete();
                //alert('No record found');
                $scope.callpopupSessionExpired();
            }
            $scope.Iswaiting = true;
            $scope.fareMatchRQ = response.data;
           // $scope.fareMatchRQ.FlightSearchRQData.PaxDetail.NoChild = ($scope.ToFloat($scope.fareMatchRQ.FlightSearchRQData.PaxDetail.NoChild) - $scope.ToFloat($scope.fareMatchRQ.FlightSearchRQData.PaxDetail.NoInfantS)).toString();
            $scope.Flight = $scope.fareMatchRQ.FlightDetail.Itinerary;
            $scope.PaxDetail = $scope.fareMatchRQ.PaxDetail;
           // $scope.Airportslist = $scope.fareMatchRQ.Airportlist;
            //if ($scope.fareMatchRQ.FlightSearchRQData != null && $scope.fareMatchRQ.FlightSearchRQData.Segments.Segment[0].Origin.toUpperCase() !== $scope.fareMatchRQ.FlightSearchRQData.Segments.Segment[0].OrgCity.toUpperCase()) {
            //    $scope.orgnear = true;
            //}
            //if ($scope.fareMatchRQ.FlightSearchRQData != null && $scope.fareMatchRQ.FlightSearchRQData.Segments.Segment[0].Destination.toUpperCase() !== $scope.fareMatchRQ.FlightSearchRQData.Segments.Segment[0].DestCity.toUpperCase()) {
            //    $scope.destnear = true;
            //}
           
            $scope.progressbar.complete();
            },
            function (reason) {
                   $scope.progressbar.complete();
                    $scope.error = reason.data;

                 $log.info(reason);
          });
       

    };
    $scope.CurrentDate = new Date();
});

//Enquiry Controller
app.controller('EnquiryController', function ($scope, $http, $filter, $timeout) {
    $scope.AirportsDetailedList = [];
    $scope.searchCookie = [];
    $scope.Iswaiting = false;
    $scope.emailFormat = /^[_A-Za-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    $scope.SearchCritaria = {
        Product: 'FLIGHT',
        Origin: null,
        SelectedOrigin: function (selected) {
            if (selected) {
                $scope.SearchCritaria.Origin = selected.originalObject;
            } else {
                $scope.SearchCritaria.Origin = null;
            }
        },
        Destination: null,
        SelectedDestination: function (selected) {
            if (selected) {
                $scope.SearchCritaria.Destination = selected.originalObject;
            } else {
                $scope.SearchCritaria.Destination = null;
            }
        },
        DepartureDate: "",
        ReturnDate: "",
        CheckIn: "",
        CheckOut: "",
        Rooms: 1,
        Guest: 1,
        FullName: "",
        Contact: "",
        Email: "",
        Description: "",
        TimeFrame: ""
    };
    $scope.clearInput = function (id) {
        $("#" + id + "_value").val('');
        $("#" + id + "_value").removeClass('x');

    }
    $scope.isNullOrEmpty = function (value) {
        return (!value || value == undefined || value == "" || value.length == 0);
    }
    $scope.ToDate = function (n) {
        if (n == "" || n == null || Object.keys(n).length === 0) {
            return new Date();
        }
        var date = new Date(n.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
        // var date = new Date(n.replace(/-/g,' '))
        return date;
    };

    $scope.ToFloat = function (n) {
        return parseFloat(n);
    }

    $scope.message = false;
    $scope.searchOrgDest = null;
    $scope.ResetForm = function () {
        $scope.SearchCritaria.Product = 'FLIGHT';
        $scope.SearchCritaria.Origin = null;
        $scope.clearInput('ex3');
        $scope.SearchCritaria.Destination = null;
        $scope.clearInput('ex4');
        $scope.SearchCritaria.DepartureDate = "";
        $scope.SearchCritaria.ReturnDate = "";
        $scope.SearchCritaria.CheckIn = "";
        $scope.SearchCritaria.CheckOut = "";
        $scope.SearchCritaria.Rooms = 1;
        $scope.SearchCritaria.Guest = 1;
        $scope.SearchCritaria.FullName = "";
        $scope.SearchCritaria.Contact = "";
        $scope.SearchCritaria.Email = "";
        $scope.SearchCritaria.Description = "";
        $scope.SearchCritaria.TimeFrame = "";
        $scope.message = false;
    };

    var loadRequest = {
        method: 'GET',
        //url: cdnUrl + '/airportsdetails/list',
        //url: '/AirportsDetails/List',
		url: '/airports.json',
        headers: {
            contentType: 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }
    };
    $scope.loadEnquiry = function () {

        $http(loadRequest).then(function (response) {

            $scope.AirportsDetailedList = response.data.Airportlist;
            if ($('input[name=DestCode]').val() != undefined && $('input[name=DestCode]').val() != "") {
                var foundDest = [];
                foundDest = jQuery.grep($scope.AirportsDetailedList, function (a) {
                    return a.AirportFullName.split('-')[0].toUpperCase() == $('input[name=DestCode]').val().toUpperCase();
                });
                $scope.SearchCritaria.Destination = foundDest.length > 0 ? foundDest[0] : null;

            }
        },
            function (reason) {
                $scope.error = reason.data;
                $log.info(reason);
            });

    };

    var enquiry = {
        Product: "",
        Origin: "",
        Destination: "",
        DepartureDate: "",
        ReturnDate: "",
        FullName: "",
        Email: "",
        Contact: "",
        Rooms: "",
        Guest: "",
        TimeFrame: ""
    };

    $scope.IncreaseRoom = function () {
        if ($scope.SearchCritaria.Rooms < 8) {
            $scope.SearchCritaria.Rooms++;
        }
    }
    $scope.DecreaseRoom = function () {
        if ($scope.SearchCritaria.Rooms > 1) {
            $scope.SearchCritaria.Rooms--;
        }
    }

    $scope.PlusGuest = function () {
        if ($scope.SearchCritaria.Guest < $scope.ToFloat($scope.SearchCritaria.Rooms) * 3) {
            $scope.SearchCritaria.Guest++;
        }
    }
    $scope.MinusGuest = function () {
        if ($scope.SearchCritaria.Guest > 1) {
            $scope.SearchCritaria.Guest--;
        }
    }

    $scope.submitFlt = function (IsValid) {
        if (IsValid) {
            $scope.Iswaiting = true;
            if (!$scope.isNullOrEmpty($scope.SearchCritaria.Origin) && !$scope.isNullOrEmpty($scope.SearchCritaria.Destination) && $scope.SearchCritaria.Destination.Code == $scope.SearchCritaria.Origin.Code) {
                return;
            }
            $scope.validOrg = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Origin)) {
                $scope.validOrg = false;
                return;
            }
            $scope.validDest = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Destination)) {
                $scope.validDest = false;
                return;
            }
            if ($scope.SearchCritaria.Origin != null && $scope.SearchCritaria.Origin.AirportFullName != undefined) {
                enquiry.Origin = $scope.SearchCritaria.Origin.AirportFullName;
            }
            if ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.AirportFullName != undefined) {
                enquiry.Destination = $scope.SearchCritaria.Destination.AirportFullName;
            }

            if ($('input[id=datepicker3]').val() != undefined) {
                $scope.SearchCritaria.DepartureDate = $filter('date')(Date.parse($('input[id=datepicker3]').val().replace(/-/g, " ")), "MMM-dd-yyyy");// $location.search()['depDt'];                          
                enquiry.DepartureDate = $scope.SearchCritaria.DepartureDate;
            }
            if ($('input[id=datepicker4]').val() != undefined && $('input[id=datepicker4]').val() != null && $('input[id=datepicker4]').val() != "") {
                $scope.SearchCritaria.ReturnDate = $filter('date')(Date.parse($('input[id=datepicker4]').val().replace(/-/g, " ")), "MMM-dd-yyyy");//$location.search()['retDt'];           
                enquiry.ReturnDate = $scope.SearchCritaria.ReturnDate;
            }


            enquiry.Product = $scope.SearchCritaria.Product;
            enquiry.FullName = $scope.SearchCritaria.FullName;
            enquiry.Contact = $scope.SearchCritaria.Contact.toString();
            enquiry.Email = $scope.SearchCritaria.Email;
            enquiry.Description = $scope.SearchCritaria.Description;

            var savereq = {
                method: 'POST',
                url: '/api/Flightapi/Enquiry',
                headers: {
                    contentType: 'application/json'
                },
                data: enquiry
            };
            $http(savereq).then(function (response) {
                if (response.data) {
                    $scope.message = true;
                    $scope.Iswaiting = false;
                    $timeout(function () { $scope.ResetForm() }, 3000);
                }
                $scope.EnquiryFromFlt.$setPristine();

            }, function (reason) {
                $scope.Iswaiting = false;
                $scope.message = false;
            });
        }
    };

    $scope.submitHtl = function (IsValid) {
        if (IsValid) {
            $scope.Iswaiting = true;

            $scope.validDest = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Destination)) {
                $scope.validDest = false;
                return;
            }

            if ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.AirportFullName != undefined) {
                enquiry.Destination = $scope.SearchCritaria.Destination.AirportFullName;
            }

            if ($('input[id=datepicker5]').val() != undefined) {
                $scope.SearchCritaria.CheckIn = $filter('date')(Date.parse($('input[id=datepicker5]').val().replace(/-/g, " ")), "MMM-dd-yyyy");// $location.search()['depDt'];                          
                enquiry.DepartureDate = $scope.SearchCritaria.CheckIn;
            }
            if ($('input[id=datepicker6]').val() != undefined && $('input[id=datepicker6]').val() != null && $('input[id=datepicker6]').val() != "") {
                $scope.SearchCritaria.CheckOut = $filter('date')(Date.parse($('input[id=datepicker6]').val().replace(/-/g, " ")), "MMM-dd-yyyy");//$location.search()['retDt'];           
                enquiry.ReturnDate = $scope.SearchCritaria.CheckOut;
            }
            enquiry.Rooms = $scope.SearchCritaria.Rooms.toString();
            enquiry.Guest = $scope.SearchCritaria.Guest.toString();
            enquiry.Product = $scope.SearchCritaria.Product;
            enquiry.FullName = $scope.SearchCritaria.FullName;
            enquiry.Contact = $scope.SearchCritaria.Contact.toString();
            enquiry.Email = $scope.SearchCritaria.Email;
            enquiry.Description = $scope.SearchCritaria.Description;

            var savereq = {
                method: 'POST',
                url: '/api/Flightapi/Enquiry',
                headers: {
                    contentType: 'application/json'
                },
                data: enquiry
            };
            $http(savereq).then(function (response) {
                if (response.data) {
                    $scope.message = true;
                    $scope.Iswaiting = false;
                    $timeout(function () { $scope.ResetForm() }, 3000);
                }
                $scope.EnquiryFromHtl.$setPristine();

            }, function (reason) {
                $scope.Iswaiting = false;
                $scope.message = false;
            });
        }
    };

    $scope.submitPkg = function (IsValid) {
        if (IsValid) {
            $scope.Iswaiting = true;

            $scope.validDest = true;
            if ($scope.isNullOrEmpty($scope.SearchCritaria.Destination)) {
                $scope.validDest = false;
                return;
            }
            if ($scope.SearchCritaria.Destination != null && $scope.SearchCritaria.Destination.AirportFullName != undefined) {
                enquiry.Destination = $scope.SearchCritaria.Destination.AirportFullName;
            }

            enquiry.Product = $scope.SearchCritaria.Product;
            enquiry.FullName = $scope.SearchCritaria.FullName;
            enquiry.Contact = $scope.SearchCritaria.Contact.toString();
            enquiry.Email = $scope.SearchCritaria.Email;
            enquiry.Description = $scope.SearchCritaria.Description;
            enquiry.TimeFrame = $scope.SearchCritaria.TimeFrame;
            var savereq = {
                method: 'POST',
                url: '/api/Flightapi/Enquiry',
                headers: {
                    contentType: 'application/json'
                },
                data: enquiry
            };
            $http(savereq).then(function (response) {
                if (response.data) {
                    $scope.message = true;
                    $scope.Iswaiting = false;
                    $timeout(function () { $scope.ResetForm() }, 3000);
                }
                $scope.EnquiryFromPkg.$setPristine();

            }, function (reason) {
                $scope.Iswaiting = false;
                $scope.message = false;
            });
        }
    };

    $scope.RedirectToURL = function (param) {
        $window.location.href = $location.protocol() + "://" + $window.location.host + "/" + param;
    };

});


app.filter('ItineraryFilter', ['$filter', function ($filter) {

    return function (item, condition) {
        if (item != undefined && item != null) {
            var departuresectors = $filter('IsReturn')(item.Sectors.Sector, 'FALSE');
            var returnsectors = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');
            if (item.Sectors.Sector[0] != undefined && item.Sectors.Sector[0].isReturn.toUpperCase() != "TRUE" && item.Sectors.Sector[0].isReturn.toUpperCase() != "FALSE") {
                departuresectors = $filter('IsReturn')(item.Sectors.Sector, '0');
            }


            var SelectedDepartingFrom = condition.SelectedDepartingFrom;
            if (SelectedDepartingFrom != undefined && SelectedDepartingFrom.length > 0) {
                var index = SelectedDepartingFrom.map(function (deaprtures) {
                    return deaprtures.AirpCode;
                }).indexOf(departuresectors[0].Departure.AirpCode);
                if (index == -1)
                    return false;
            }

            var SelectedArrivingAt = condition.SelectedArrivingAt;
            if (SelectedArrivingAt != undefined && SelectedArrivingAt.length > 0) {
                var index = SelectedArrivingAt.map(function (Arrivals) {
                    return Arrivals.AirpCode;
                }).indexOf(departuresectors[departuresectors.length - 1].Arrival.AirpCode);
                if (index == -1)
                    return false;
            }
            if (returnsectors != null && returnsectors.length > 0) {
                var SelectedReturnFrom = condition.SelectedReturnFrom;
                if (SelectedReturnFrom != undefined && SelectedReturnFrom.length > 0) {
                    var index = SelectedReturnFrom.map(function (Retrun) {
                        return Retrun.AirpCode;
                    }).indexOf(returnsectors[0].Departure.AirpCode);
                    if (index == -1)
                        return false;
                }
            }
            var sectors = [];
            $.merge($.merge(sectors, departuresectors), (returnsectors != null ? returnsectors : []));
            var SelectedConnectingIn = condition.SelectedConnectingIn;
            if (SelectedConnectingIn != undefined && SelectedConnectingIn.length > 0) {

                var connectionReq = SelectedConnectingIn.map(function (connectiongs) {
                    return connectiongs.AirpCode;
                });

                var connectionExist = sectors.map(function (sec) {
                    return sec.Arrival.AirpCode;
                });

                var common = $.grep(connectionReq, function (element) {
                    return $.inArray(element, connectionExist) !== -1;
                });
                if (common.length == 0)
                    return false;
            }

            var SelectedSpecificAirlines = condition.SelectedSpecificAirlines;
            if (SelectedSpecificAirlines != undefined && SelectedSpecificAirlines.length > 0) {
                var index = SelectedSpecificAirlines.map(function (Airlines) {
                    return Airlines.Airline;
                }).indexOf(departuresectors[0].AirlineName);
                if (index == -1)
                    return false;
            }

            var SelectedCabinClass = condition.SelectedCabinClass;
            if (SelectedCabinClass != undefined && SelectedCabinClass.length > 0) {
                var index = SelectedCabinClass.map(function (Flight) {
                    return Flight.name;
                }).indexOf(departuresectors[0].CabinClass.Des.toUpperCase());
                if (index == -1)
                    return false;
            }

            if (condition.SetectedCriteria.SelectedUniqueRef != undefined && condition.SetectedCriteria.SelectedUniqueRef != "") {
                if (item.UniqueRef.indexOf(condition.SetectedCriteria.SelectedUniqueRef) == -1)
                    return false;
            }
            if ((parseFloat(item.Adult.AdtBFare) + parseFloat(item.Adult.AdTax)) < condition.priceSlider.min || (parseFloat(item.Adult.AdtBFare) + parseFloat(item.Adult.AdTax)) > condition.priceSlider.max)
                return false;
            if (condition.Stops.Nonstop == true || condition.Stops.Onestop == true || condition.Stops.Twostop == true) {
                var arrivalsectors = $filter('IsReturn')(item.Sectors.Sector, 'TRUE');

                if (departuresectors.length == 1 && (arrivalsectors.length == 1 || arrivalsectors.length == 0) && condition.Stops.Nonstop == false) {
                    return false;
                }
                else if ((departuresectors.length == 2 || arrivalsectors.length == 2) && item.Sectors.Sector.length <= 4 && condition.Stops.Onestop == false) {
                    return false;
                }
                else if ((departuresectors.length > 2 || arrivalsectors.length > 2) && condition.Stops.Twostop == false) {
                    return false;
                }
            }
            var deptimearr = item.Sectors.Sector[0].Departure.Time.split(':');
            if (parseFloat(parseFloat(deptimearr[0]) * 60 + parseFloat(deptimearr[1])) < condition.depTimeSlider.min || parseFloat(parseFloat(deptimearr[0]) * 60 + parseFloat(deptimearr[1])) > condition.depTimeSlider.max)
                return false;
            if (returnsectors != null && returnsectors.length > 0) {
                var rettimearr = returnsectors[0].Departure.Time.split(':');
                if (parseFloat(parseFloat(rettimearr[0]) * 60 + parseFloat(rettimearr[1])) < condition.retTimeSlider.min || parseFloat(parseFloat(rettimearr[0]) * 60 + parseFloat(rettimearr[1])) > condition.retTimeSlider.max)
                    return false;
            }
            //if (condition.OutboundDepartureTimeZone[0].SelectedTimeZone == true && (parseInt(item.Sectors.Sector[0].Departure.Time.split(':')[0]) < 5 || parseInt(item.Sectors.Sector[0].Departure.Time.split(':')[0]) > 12)) {
            //    return false;
            //}
            //if (condition.OutboundDepartureTimeZone[1].SelectedTimeZone == true && (parseInt(item.Sectors.Sector[0].Departure.Time.split(':')[0]) < 12 || parseInt(item.Sectors.Sector[0].Departure.Time.split(':')[0]) > 18)) {
            //    return false;
            //}
            //if (condition.OutboundDepartureTimeZone[2].SelectedTimeZone == true && (parseInt(item.Sectors.Sector[0].Departure.Time.split(':')[0]) < 18 || parseInt(item.Sectors.Sector[0].Departure.Time.split(':')[0]) > 24)) {
            //    return false;
            //}
        }
        return true;
    };
}]);
app.filter('IsReturn', function () {

    return function (inputs, ReturnType) {
        var filtered = [];
        angular.forEach(inputs, function (item) {
            //|| (item.IsReturn != undefined && item.IsReturn == ReturnType)
            if (item.isReturn != undefined && item.isReturn.toUpperCase() == ReturnType) {
                filtered.push(item);
            }
        });
        return filtered;
    }
});
app.filter('IsSelected', function () {
    return function (inputs, ReturnType) {
        var filtered = [];
        angular.forEach(inputs, function (item) {
            if (item.Isselected == ReturnType || item.IsSelected == ReturnType) {
                filtered.push(item);
            }
        });
        return filtered;
    }
});
app.filter('FilterSpecificFlight', function () {

    return function (items, condition) {
        var filtered = [];

        if (condition === undefined || condition === '') {
            return items;
        }

        return filtered;
    };

});
app.filter('FilterReturnType', function () {

    return function (items, condition) {
        var filtered = [];

        if (condition === undefined || condition === '') {
            return items;
        }

        angular.forEach(items, function (item) {
            if ((item.IsReturn != undefined && item.IsReturn == condition.IsReturn) || (item.isReturn != undefined && item.isReturn.toUpperCase() == condition.IsReturn)) {
                filtered.push(item);
            }
        });

        return filtered;
    };

});
app.filter('range', function () {
    return function (input, total) {
        total = parseInt(total);
        for (var i = 0; i < total; i++)
            input.push(i);
        return input;
    };
});
app.filter('myfilter', function () {

    return function (items, condition) {
        var filtered = [];

        if (condition === undefined || condition === '') {
            return items;
        }

        angular.forEach(items, function (item) {
            if (item.TotalPrice >= condition.min && item.TotalPrice <= condition.max) {
                filtered.push(item);
            }
        });

        return filtered;
    };
});
app.filter("getDiff", function () {

    return function (FDetail) {

        var elapsedTimeSplit = FDetail.ActualTime.split(":").map(Number);
        //var milisecondsDiff = elapsedTimeSplit[0]*1000*60*60+elapsedTimeSplit[1]*1000*60;
        /* var startDate = new Date(FDetail.Departure.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + FDetail.Departure.Time);
        var endDate = new Date(FDetail.Arrival.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + FDetail.Arrival.Time);
        var milisecondsDiff = endDate - startDate; */

        // var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });

        // var splitinFormatedTime = calulatedTime.split(':');

        return FDetail.CabinClass.Des + ' ' + elapsedTimeSplit[0] + 'h' + ' ' + elapsedTimeSplit[1] + 'm';

    }
});
app.filter("getcabinclass", function () {

    return function (FDetail) {
        if (FDetail != undefined) {
            var elapsedTimeSplit = FDetail.ActualTime.split(":").map(Number);
            //var milisecondsDiff = elapsedTimeSplit[0]*1000*60*60+elapsedTimeSplit[1]*1000*60;
            /* var startDate = new Date(FDetail.Departure.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + FDetail.Departure.Time);
            var endDate = new Date(FDetail.Arrival.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + FDetail.Arrival.Time);
            var milisecondsDiff = endDate - startDate; */

            // var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });

            // var splitinFormatedTime = calulatedTime.split(':');

            return FDetail.CabinClass.Des;
        }

    }
});
app.filter("flightTime", ['$filter', function ($filter) {
    return function (flight, type) {
        if (flight != undefined && flight.Sectors != undefined && flight.Sectors.Sector.length > 0) {
            var milisecondsDiff = 0;
            var Sector = $filter('IsReturn')(flight.Sectors.Sector, type);
            angular.forEach(Sector, function (obj) {
                /* var startDate = new Date(obj.Departure.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + obj.Departure.Time);
                var endDate = new Date(obj.Arrival.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + obj.Arrival.Time);
                
                 */

                var elapsedTimeSplit = obj.ActualTime.split(":").map(Number);
                var miliseconds = elapsedTimeSplit[0] * 1000 * 60 * 60 + elapsedTimeSplit[1] * 1000 * 60;
                milisecondsDiff = milisecondsDiff + miliseconds;
            });

            var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });

            var splitinFormatedTime = calulatedTime.split(':');

            return 'Flight: ' + ' ' + splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm';
        }
        return null;

    }
}]);
app.filter("layoverTime", ['$filter', function ($filter) {
    return function (flight, type, Ind) {
        if (flight != undefined && flight.Sectors != undefined && flight.Sectors.Sector.length > 0) {
            var milisecondsDiff = 0;
            var Sectors = $filter('IsReturn')(flight.Sectors.Sector, type);
            var Sector = Sectors[Ind];
            if (Sectors.length <= Ind + 1) {
                return null;
            }
            else {
                var NextSector = Sectors[Ind + 1];
                var startDate = new Date(Sector.Arrival.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + Sector.Arrival.Time);
                var endDate = new Date(NextSector.Departure.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + NextSector.Departure.Time);
                var miliseconds = endDate - startDate;
                milisecondsDiff = milisecondsDiff + miliseconds;
                var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
                var splitinFormatedTime = calulatedTime.split(':');
                if (parseFloat(splitinFormatedTime[0]) > 3)
                    //  return ' Layover: ' + ' ' + splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm (Long connection)';
                    return splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm';
                else
                    // return ' Layover: ' + ' ' + splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm';
                    return splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm';
            }
        }
        return null;

    }
}]);
app.filter("totalTripDuration", ['$filter', function ($filter) {
    return function (flight, type) {
        if (flight != undefined && flight.Sectors != undefined && flight.Sectors.Sector.length > 0) {
            var milisecondsDiff = 0;
            var totmilisecondsDiff = 0;
            var sup = flight.Provider;
            var Sectors = $filter('IsReturn')(flight.Sectors.Sector, type);
            angular.forEach(Sectors, function (obj, key) {

                // var startDate = new Date(obj.Departure.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + obj.Departure.Time);
                //var endDate = new Date(obj.Arrival.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + obj.Arrival.Time);
                //var Elapsedmiliseconds = endDate - startDate;
                //milisecondsDiff = milisecondsDiff + Elapsedmiliseconds;
                //govind uncomment start//
                if (Sectors.length > key + 1 && sup != '1A') {
                    var NextSector = Sectors[key + 1];
                    var startDate1 = new Date(obj.Arrival.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + obj.Arrival.Time);
                    var endDate1 = new Date(NextSector.Departure.Date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3") + ' ' + NextSector.Departure.Time);
                    var miliseconds = endDate1 - startDate1;
                    totmilisecondsDiff = totmilisecondsDiff + miliseconds;
                }
                //govind uncomment//

                if (key + 1 == Sectors.length) {
                    var actualTimeSplit = obj.ActualTime.split(":").map(Number);
                    milisecondsDiff = actualTimeSplit[0] * 1000 * 60 * 60 + actualTimeSplit[1] * 1000 * 60;
                }
            });
            totmilisecondsDiff = totmilisecondsDiff + milisecondsDiff;
            var totcaltime = Math.floor(totmilisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(totmilisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(totmilisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
            var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });

            var splitinFormatedTime = calulatedTime.split(':');
            var splitintottime = totcaltime.split(':');
            //return splitintottime[0] + 'h' + ' ' + splitintottime[1] + 'm' + '(FlightTime:'+ splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm)';
            return splitintottime[0] + 'h' + ' ' + splitintottime[1] + 'm';
        }
        return null;

    }
}]);
app.filter("totalFlightTime", ['$filter', function ($filter) {

    return function (flight, type) {
        if (flight != undefined && flight.Sectors != undefined && flight.Sectors.Sector.length > 0) {
            var milisecondsDiff = 0;
            var totmilisecondsDiff = 0;
            var Sectors = $filter('IsReturn')(flight.Sectors.Sector, type);
            angular.forEach(Sectors, function (obj, key) {


                if (key + 1 == Sectors.length) {
                    var actualTimeSplit = obj.ActualTime.split(":").map(Number);
                    milisecondsDiff = actualTimeSplit[0] * 1000 * 60 * 60 + actualTimeSplit[1] * 1000 * 60;
                }
            });

            var calulatedTime = Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 }) + ":" + (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2 });
            var splitinFormatedTime = calulatedTime.split(':');
            return splitinFormatedTime[0] + 'h' + ' ' + splitinFormatedTime[1] + 'm';

        }
        return null;

    }
}]);
app.filter('NoSpace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
app.filter('MatrixCurrency', ['$filter', function ($filter) {

    return function (item, currencyType) {
        if (item == "" || item == null) {      // || Object.keys(item).length === 0
            return "--";
        }
        else {
            var result = $filter('currency')(item, currencyType, 2);
            return result;
        }
    };
}]);
app.directive('datepicker', function () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $(function () {
                element.datepicker({
                    dateFormat: 'M-dd-yy',
                    mindate: new Date(),
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});
app.directive('datepickeradt', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $(function () {
                var date = new Date();
                date = new Date(date.setFullYear(date.getFullYear() - 11));
                var date1 = new Date();
                date1 = new Date(date1.setFullYear(date1.getFullYear() - 100));
                element.datepicker({
                    dateFormat: 'M-dd-yy',
                    minDate: moment(date1).format("MMM-DD-YYYY"),
                    maxDate: moment(date).format("MMM-DD-YYYY"),
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});
app.directive('datepickerchd', function () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $(function () {
                var date = new Date();
                date = new Date(date.setFullYear(date.getFullYear() - 2));
                var date1 = new Date();
                date1 = new Date(date1.setFullYear(date1.getFullYear() - 11));
                element.datepicker({
                    dateFormat: 'M-dd-yy',
                    minDate: moment(date1).format("MMM-DD-YYYY"),
                    maxDate: moment(date).format("MMM-DD-YYYY"),
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});
app.directive('datepickerinf', function () {

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelCtrl) {
            $(function () {
                var date = new Date();
                var date1 = new Date();
                date1 = new Date(date1.setFullYear(date1.getFullYear() - 2));
                element.datepicker({
                    dateFormat: 'M-dd-yy',
                    minDate: moment(date1).format("MMM-DD-YYYY"),
                    maxDate: moment(date).format("MMM-DD-YYYY"),
                    changeMonth: true,
                    changeYear: true,
                    onSelect: function (date) {
                        ngModelCtrl.$setViewValue(date);
                        scope.$apply();
                    }
                });
            });
        }
    }
});

app.filter('ClassType', function () {

    return function (inputs) {
        if (inputs == "Y" || inputs == "M" || inputs == "1" || inputs == "E")
            return "Economy";
        else if (inputs == "S" || inputs == "W" || inputs == "2" || inputs == "P")
            return "Premium Economy";
        else if (inputs == "C" || inputs == "4" || inputs == "B")
            return "Business";
        else if (inputs == "F" || inputs == "6" || inputs == "F")
            return "First";
        else
            return "";
    }
});
app.filter('ClassTypeCode', function () {

    return function (inputs) {
        if (inputs == "1")
            return "Y";
        else if (inputs == "2")
            return "W";
        else if (inputs == "4")
            return "C";
        else if (inputs == "6")
            return "F";
        else
            return "Y";
    }
});
app.filter('GenderType', function () {

    return function (inputs) {
        if (inputs == "M" || inputs == "1")
            return "Male";
        else if (inputs == "F" || inputs == "2")
            return "Female";
        else
            return "";
    }
});
app.filter('To24HourTime', function () {

    return function (n) {
        var hours = Number(n.match(/^(\d+)/)[1]);
        var minutes = Number(n.match(/:(\d+)/)[1]);
        var AMPM = n.match(/\s(.*)$/)[1];
        if (AMPM == "PM" && hours < 12) hours = hours + 12;
        if (AMPM == "AM" && hours == 12) hours = hours - 12;
        var sHours = hours.toString();
        var sMinutes = minutes.toString();
        if (hours < 10) sHours = "0" + sHours;
        if (minutes < 10) sMinutes = "0" + sMinutes;
        return sHours + ":" + sMinutes;
    }
});
app.filter('triptimeformat', function () {
    return function (inputs) {
        return (inputs !== undefined ? inputs.split(':')[0] + "h " + inputs.split(':')[1] + "m" : "");
        // return (inputs !== undefined ? ((inputs.split(':')[0]).indexOf('.') > -1 ? parseInt((inputs.split(':')[0]).split('.')[0]) * 24 + parseInt((inputs.split(':')[0]).split('.')[1]) : inputs.split(':')[0]) + "h " + inputs.split(':')[1] + "m" : "");
    }
});
app.filter('ClassCode', function () {

    return function (inputs) {
        if (inputs.toLowerCase().indexOf("economy") > -1)
            return "Y";
        else if (inputs.toLowerCase().indexOf("premium") > -1)
            return "W";/*S*/
        else if (inputs.toLowerCase().indexOf("business") > -1)
            return "C";
        else if (inputs.toLowerCase().indexOf("first") > -1)
            return "F";
        else
            return inputs.toUpperCase();
    }
});
app.filter('CardType', function () {

    return function (inputs) {
        if (inputs.toLowerCase().indexOf("visa") > -1)
            return 1;
        else if (inputs.toLowerCase().indexOf("mastercard") > -1)
            return 2;
        else if (inputs.toLowerCase().indexOf("americanexpress ") > -1)
            return 3;
        else if (inputs.toLowerCase().indexOf("discover") > -1)
            return 4;
        else
            return inputs.toUpperCase();
    }
});

app.filter('BookingStatus', function () {

    return function (inputs) {
        if (inputs == 0)
            return 'None';
        else if (inputs == 1)
            return 'InProgress';
        else if (inputs == 2)
            return 'PriceChanged';
        else if (inputs == 3)
            return 'SoldoutOrUnavailable';
        else if (inputs == 4)
            return 'Confirmed';
        else if (inputs == 5)
            return 'Pending';
        else if (inputs == 6)
            return 'BookWithLowerPrice';
        else if (inputs == 7)
            return 'Error';
        else if (inputs == 8)
            return 'Cancel';

    }
});


app.filter('IsEqualtoDepDt', ['$filter', function ($filter) {
    return function (value, compareValue) {
        let DepDt_ = $filter('ConvertToDate')(value);
        let DepDt = $filter('ConvertToDate')(compareValue);
        if (DepDt_.valueOf() === DepDt.valueOf())
            return true;
        else
            return false;
    };
}]);
app.filter('ConvertToDate', function () {

    return function (Value) {
        var date = new Date(Value.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
        return date;
    };
});
app.directive('onlyDigits', function () {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attr, ctrl) {
            function inputValue(val) {
                if (val) {
                    var digits = val.replace(/[^0-9]/g, '');

                    if (digits !== val) {
                        ctrl.$setViewValue(digits);
                        ctrl.$render();
                    }
                    return parseInt(digits, 10);
                }
                return undefined;
            }
            ctrl.$parsers.push(inputValue);
        }
    };
});

angular.module('MyApp').directive("compareTo", function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
                ngModel.$validate();
            });
        }
    };
});
angular.module('MyApp').directive('creditCardType', function () {
    var directive =
    {
        require: 'ngModel'
        , link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (value) {
                scope.ccinfo.type =
                    (/^5[1-5]/.test(value)) ? "mastercard"
                        : (/^4/.test(value)) ? "visa"
                            : (/^3[47]/.test(value)) ? 'amex'
                                : (/^6011|65|64[4-9]|622(1(2[6-9]|[3-9]\d)|[2-8]\d{2}|9([01]\d|2[0-5]))/.test(value)) ? 'discover'
                                    : undefined
                ctrl.$setValidity('invalid', !!scope.ccinfo.type)
                scope.CardDetail.PaymentMethod = (scope.ccinfo.type == 'mastercard' ? 'MC' : (scope.ccinfo.type == 'visa' ? 'VI' : (scope.ccinfo.type == 'amex' ? 'AX' : (scope.ccinfo.type == 'discover' ? 'DS' : ''))))
                if (value.replace(/ /g, '').length >= 15) {
                    scope.$apply(function () {
                        ctrl.$setViewValue(elm.val());
                        ctrl.$setPristine();
                        elm.trigger('blur');
                    });
                }
                return value
            })
        }
    }
    return directive
});
app.directive('infinitescroll', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var previousScroll = 0;
            var currentScroll = 0;
            element.bind('scroll', function () {
                currentScroll = $(this).scrollTop();
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 20) {
                    $("#myBtn").css('display', 'block');
                }
                else {
                    $("#myBtn").css('display', 'none');
                }

                if ($(this).scrollTop() > 135) {
                    $('#task_flyout').addClass('fixedprice');
                    $('#Filter_hide').addClass('fixedfilter');
                    $('.rslt-offer').css('position', 'fixed');
                    $('.rslt-offer').css('top', '1%');
                    //$('#Filter_hide').addClass('fixedfilter');
                } else {
                    $('#task_flyout').removeClass('fixedprice');
                    $('#Filter_hide').removeClass('fixedfilter');
                    //$('#Filter_hide').removeClass('fixedfilter');
                    $('.rslt-offer').css('position', 'unset');
                }
                if (($(this).scrollTop() + $(this).innerHeight() + 10 >= $(this)[0].scrollHeight) && $('.resultpp').length > 3) {
                    $('.fixedfilter').css('top', '-7%!important');
                } else {
                    $('.fixedfilter').css('top', '1%!important');
                }
                if ($('.resultpp').length < 3) {
                    $('#Filter_hide').css('position', 'relative');
                    $('#Filter_hide').css('height', 'auto');
                    $('.rslt-offer').css('position', 'unset');
                } else {
                    $('#Filter_hide').removeAttr("style");
                }
                if ($(window).width() > 767) {
                    if (currentScroll > previousScroll && currentScroll > 200) {
                        $('.modisrch').removeClass('fixmody');
                        $('.searchhh').hide();

                    } else {
                        $('.modisrch').addClass('fixmody');
                        $('.searchhh').show();
                    }

                    if (currentScroll < 200) {
                        $('.modisrch').removeClass('fixmody');
                        $('.searchhh').hide();
                    }
                }

                scope.$apply(attrs.infinitescroll);
                scope.$apply();
                previousScroll = currentScroll;
            })
        }
    }
})
angular.module('MyApp').filter('myDate', function () {
    return function (input, frmat) {
        var result = moment(input, "yyyy-MM-dd HH:mm:ss.SSS Z").format(frmat);
        return result;
    };
});
angular.module('MyApp').filter('numberFixedLen', function () {
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + num;
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    };
});


app.directive('allowPattern', function () {
    return {
        restrict: "A",
        compile: function (tElement, tAttrs) {
            return function (scope, element, attrs) {
                // I handle key events
                element.bind("keypress", function (event) {
                    var keyCode = event.which || event.keyCode; // I safely get the keyCode pressed from the event.
                    var keyCodeChar = String.fromCharCode(keyCode); // I determine the char from the keyCode.

                    // If the keyCode char does not match the allowed Regex Pattern, then don't allow the input into the field.
                    if (!keyCodeChar.match(new RegExp(attrs.allowPattern, "i"))) {
                        event.preventDefault();
                        return false;
                    }

                });
            };
        }
    };
});

app.filter('unsafe', function ($sce) { return $sce.trustAsHtml; });
app.filter('refnumFixedLen', function () {
    return function (num) {
        return parseInt(num);
    };

});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (JSON.stringify(value) || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}





/*
ngprogress 1.1.2 - slim, site-wide progressbar for AngularJS 
(C) 2013 - Victor Bjelkholm 
License: MIT 
Source: https://github.com/VictorBjelkholm/ngProgress 
Date Compiled: 2015-07-27 
*/
angular.module('ngProgress.provider', ['ngProgress.directive'])
    .service('ngProgress', function () {
        'use strict';
				return ['$document', '$window', '$compile', '$rootScope', '$timeout', function($document, $window, $compile, $rootScope, $timeout) {
						this.autoStyle = true;
						this.count = 0;
            this.height = '2px';
						this.$scope = $rootScope.$new();
						this.color = 'firebrick';
						this.parent = $document.find('body')[0];
						this.count = 0;

            // Compile the directive
            this.progressbarEl = $compile('<ng-progress></ng-progress>')(this.$scope);
            // Add the element to body
            this.parent.appendChild(this.progressbarEl[0]);
            // Set the initial height
            this.$scope.count = this.count;
            // If height or color isn't undefined, set the height, background-color and color.
            if (this.height !== undefined) {
                this.progressbarEl.eq(0).children().css('height', this.height);
            }
            if (this.color !== undefined) {
                this.progressbarEl.eq(0).children().css('background-color', this.color);
                this.progressbarEl.eq(0).children().css('color', this.color);
            }
            // The ID for the interval controlling start()
            this.intervalCounterId = 0;

                // Starts the animation and adds between 0 - 5 percent to loading
                // each 400 milliseconds. Should always be finished with progressbar.complete()
                // to hide it
                this.start = function () {
                    // TODO Use requestAnimationFrame instead of setInterval
                    // https://developer.mozilla.org/en-US/docs/Web/API/window.requestAnimationFrame
                    this.show();
                    var self = this;
                    clearInterval(this.intervalCounterId);
                    this.intervalCounterId = setInterval(function () {
                        if (isNaN(self.count)) {
                            clearInterval(self.intervalCounterId);
                            self.count = 0;
                            self.hide();
                        } else {
                            self.remaining = 100 - self.count;
                            self.count = self.count + (0.15 * Math.pow(1 - Math.sqrt(self.remaining), 2));
                            self.updateCount(self.count);
                        }
                    }, 200);
                };
                this.updateCount = function (new_count) {
                    this.$scope.count = new_count;
                    if(!this.$scope.$$phase) {
                        this.$scope.$apply();
                    }
                };
                // Sets the height of the progressbar. Use any valid CSS value
                // Eg '10px', '1em' or '1%'
                this.setHeight = function (new_height) {
                    if (new_height !== undefined) {
                        this.height = new_height;
                        this.$scope.height = this.height;
                        if(!this.$scope.$$phase) {
                            this.$scope.$apply();
                        }
                    }
                    return this.height;
                };
                // Sets the color of the progressbar and it's shadow. Use any valid HTML
                // color
                this.setColor = function(new_color) {
                    if (new_color !== undefined) {
                        this.color = new_color;
                        this.$scope.color = this.color;
                        if(!this.$scope.$$phase) {
                            this.$scope.$apply();
                        }
                    }
                    return this.color;
                };
                this.hide = function() {
                    this.progressbarEl.children().css('opacity', '0');
                    var self = this;
                    self.animate(function () {
                        self.progressbarEl.children().css('width', '0%');
                        self.animate(function () {
                            self.show();
                        }, 500);
                    }, 500);
                };
                this.show = function () {
                    var self = this;
                    self.animate(function () {
                        self.progressbarEl.children().css('opacity', '1');
                    }, 100);
                };
                // Cancel any prior animations before running new ones.
                // Multiple simultaneous animations just look weird.
                this.animate = function(fn, time) {
                    if(this.animation !== undefined) { $timeout.cancel(this.animation); }
                    this.animation = $timeout(fn, time);
                };
                // Returns on how many percent the progressbar is at. Should'nt be needed
                this.status = function () {
                    return this.count;
                };
                // Stops the progressbar at it's current location
                this.stop = function () {
                    clearInterval(this.intervalCounterId);
                };
                // Set's the progressbar percentage. Use a number between 0 - 100.
                // If 100 is provided, complete will be called.
                this.set = function (new_count) {
                    this.show();
                    this.updateCount(new_count);
                    this.count = new_count;
                    clearInterval(this.intervalCounterId);
                    return this.count;
                };
                this.css = function (args) {
                    return this.progressbarEl.children().css(args);
                };
                // Resets the progressbar to percetage 0 and therefore will be hided after
                // it's rollbacked
                this.reset = function () {
                    clearInterval(this.intervalCounterId);
                    this.count = 0;
                    this.updateCount(this.count);
                    return 0;
                };
                // Jumps to 100% progress and fades away progressbar.
                this.complete = function () {
                    this.count = 100;
                    this.updateCount(this.count);
                    var self = this;
                    clearInterval(this.intervalCounterId);
                    $timeout(function () {
                        self.hide();
                        $timeout(function () {
                            self.count = 0;
                            self.updateCount(self.count);
                        }, 500);
                    }, 1000);
                    return this.count;
                };
                // Set the parent of the directive, sometimes body is not sufficient
                this.setParent = function(newParent) {
                    if(newParent === null || newParent === undefined) {
                        throw new Error('Provide a valid parent of type HTMLElement');
                    }

                    if(this.parent !== null && this.parent !== undefined) {
                        this.parent.removeChild(this.progressbarEl[0]);
                    }

                    this.parent = newParent;
                    this.parent.appendChild(this.progressbarEl[0]);
                };
                // Gets the current element the progressbar is attached to
                this.getDomElement = function () {
                    return this.progressbarEl;
                };
                this.setAbsolute = function() {
                    this.progressbarEl.css('position', 'absolute');
                };
            }];
    })
.factory('ngProgressFactory', ['$injector', 'ngProgress', function($injector, ngProgress) {
    var service = {
        createInstance: function () {
            return $injector.instantiate(ngProgress);
        }
    };
    return service;
}]);
angular.module('ngProgress.directive', [])
    .directive('ngProgress', ["$window", "$rootScope", function ($window, $rootScope) {
        var directiveObj = {
            // Replace the directive
            replace: true,
            // Only use as a element
            restrict: 'E',
            link: function ($scope, $element, $attrs, $controller) {
                // Watch the count on the $rootScope. As soon as count changes to something that
                // isn't undefined or null, change the counter on $scope and also the width of
                // the progressbar. The same goes for color and height on the $rootScope
                $scope.$watch('count', function (newVal) {
                    if (newVal !== undefined || newVal !== null) {
                        $scope.counter = newVal;
                        $element.eq(0).children().css('width', newVal + '%');
                    }
                });
                $scope.$watch('color', function (newVal) {
                    if (newVal !== undefined || newVal !== null) {
                        $scope.color = newVal;
                        $element.eq(0).children().css('background-color', newVal);
                        $element.eq(0).children().css('color', newVal);
                    }
                });
                $scope.$watch('height', function (newVal) {
                    if (newVal !== undefined || newVal !== null) {
                        $scope.height = newVal;
                        $element.eq(0).children().css('height', newVal);
                    }
                });
            },
            // The actual html that will be used
            template: '<div id="ngProgress-container"><div id="ngProgress"></div></div>'
        };
        return directiveObj;
    }]);

angular.module('ngProgress', ['ngProgress.directive', 'ngProgress.provider']);
/*! Copyright (c) 2014 Hidenari Nozaki and contributors | Licensed under the MIT license */ !function (e, t) { "use strict"; "undefined" != typeof module && module.exports ? module.exports = t(require("angular")) : "function" == typeof define && define.amd ? define(["angular"], t) : t(e.angular) }(window, function (e) { "use strict"; e.module("angucomplete-alt", []).directive("angucompleteAlt", ["$q", "$parse", "$http", "$sce", "$timeout", "$templateCache", "$interpolate", function (e, t, n, r, l, i, o) { var a = "/angucomplete-alt/index.html"; function s(t, i, o, a) { var s, c, u, d, g, p = i.find("input"), h = 3, f = null, m = "autocomplete-required", v = null, S = null, x = !1, w = i[0].querySelector(".angucomplete-dropdown"), b = !1, _ = null; function C(e, n) { e && ("object" == typeof e ? (t.searchStr = R(e), D({ originalObject: e })) : "string" == typeof e && e.length > 0 ? t.searchStr = e : console && console.error && console.error("Tried to set " + (n ? "initial" : "") + " value of angucomplete to", e, "which is an invalid value"), q(!0)) } function y(e) { _ = null, t.hideResults(e), document.body.removeEventListener("click", y) } function I(e) { return e.which ? e.which : e.keyCode } function D(e) { "function" == typeof t.selectedObject ? (t.selectedObject(e, t.selectedObjectData), void 0 != e && void 0 != e.title && "org1" == t.inputName ? (void 0 != document.getElementById("mob_desk") && "1" == document.getElementById("mob_desk").value && void 0 != document.getElementById("org_mob") && (setmobfield("fromDes", "", "org_mob"), l(function () { $("#close1").click(), $("#toCode").click() }, 200)), $("#ex2_value").focus()) : void 0 != e && void 0 != e.title && "dest1" == t.inputName && (void 0 != document.getElementById("mob_desk") && "1" == document.getElementById("mob_desk").value && void 0 != document.getElementById("dest_mob") && (setmobfield("toDes", "", "dest_mob"), l(function () { $("#close2").click() }, 200)), $("#datepicker").focus())) : t.selectedObject = e, e ? q(!0) : q(!1) } function R(e) { return t.titleField.split(",").map(function (t) { return F(e, t) }).join(" ") } function F(e, t) { var n, r, l; if (t) { n = t.split("."), l = e; for (var i = 0; i < n.length; i++)r = l[n[i]] } else r = e; return r } function O(e, t) { var n, r, l; if (t) { n = t.split("."), l = e; for (var i = 0; i < n.length; i++)r = l[n[i]].split("-")[0] } else r = e; return r } function j(e, n) { var l, i, o; if (o = RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"), e) return e.match && e.replace || (e = e.toString()), l = (i = e.match(o)) ? e.replace(o, '<span class="' + t.matchClass + '">' + i[0] + "</span>") : e, r.trustAsHtml(l) } function q(e) { t.notEmpty = e, v = t.searchStr, t.fieldRequired && a && t.inputName && a[t.inputName].$setValidity(m, e) } function k(e) { if (t.overrideSuggestions && !(t.selectedObject && t.selectedObject.originalObject === t.searchStr)) { var n; e && e.preventDefault(), l.cancel(f), T(), D({ originalObject: n = t.searchStr }), t.clearSelected && (t.searchStr = null), V() } } function N() { return i[0].querySelectorAll(".angucomplete-row")[t.currentIndex] } function U(e) { w.scrollTop = w.scrollTop + e } function A() { var e = t.results[t.currentIndex]; t.matchClass ? p.val(R(e.originalObject)) : p.val(e.title) } function E(e) { return function (n, r, l, i) { r || l || i || !n.data || (n = n.data), t.searching = !1, z(F(c(n), t.remoteUrlDataField), e) } } function H(e, n, r, l) { t.searching = x, n || r || l || (n = e.status), 0 !== n && -1 !== n && (t.remoteUrlErrorCallback ? t.remoteUrlErrorCallback(e, n, r, l) : console && console.error && console.error("http error")) } function T() { S && S.resolve() } function B(r) { var l = {}, i = t.remoteUrl + encodeURIComponent(r); t.remoteUrlRequestFormatter && (l = { params: t.remoteUrlRequestFormatter(r) }, i = t.remoteUrl), t.remoteUrlRequestWithCredentials && (l.withCredentials = !0), T(), S = e.defer(), l.timeout = S.promise, x = !0, n.get(i, l).then(E(r)).catch(H).finally(function () { x = !1 }) } function L(n) { T(), S = e.defer(), t.remoteApiHandler(n, S.promise).then(E(n)).catch(H) } function V() { t.showDropdown = !1, t.results = [], w && (w.scrollTop = 0) } function W() { t.showDropdown = d, t.currentIndex = t.focusFirst ? 0 : -1, t.results = [] } function M(e) { e && !(e.length < h) && (t.localData ? t.$apply(function () { var n; n = void 0 !== t.localSearch() ? t.localSearch()(e, t.localData) : function e(n) { var r, l, i, o = t.searchFields.split(","), a = []; for (void 0 !== t.parseInput() && (n = t.parseInput()(n)), r = 0; r < t.localData.length; r++)l = !1, 3 == n.length && (i = F(t.localData[r], o[0]) || "", l = l || i.toString().toLowerCase() == n.toString().toLowerCase()), l || (i = O(t.localData[r], o[1]) || "", l = l || i.toString().toLowerCase() == n.toString().toLowerCase()), l && (a[a.length] = t.localData[r]); if (0 == a.length) for (r = 0; r < t.localData.length; r++)l = !1, i = F(t.localData[r], o[1]) || "", (l = l || i.toString().toLowerCase().indexOf(n.toString().toLowerCase()) >= 0) && (a[a.length] = t.localData[r]); return a.splice(0, 60).sort(function (e, t) { return t.Total - e.Total }) }(e), t.searching = !1, z(n, e) }) : t.remoteApiHandler ? L(e) : B(e)) } function z(e, n) { var r, l, i, o, a, s; if (e && e.length > 0) for (r = 0, t.results = []; r < e.length; r++)t.titleField && "" !== t.titleField && (o = a = R(e[r])), l = "", t.descriptionField && (l = s = F(e[r], t.descriptionField)), i = "", t.imageField && (i = F(e[r], t.imageField)), t.matchClass && (a = j(o, n), s = j(l, n)), t.results[t.results.length] = { title: a, description: s, image: i, originalObject: e[r] }; else t.results = []; t.autoMatch && 1 === t.results.length && function e(n, r, l) { if (!l) return !1; for (var i in r) if (r[i].toLowerCase() === l.toLowerCase()) return t.selectResult(n), !0; return !1 }(t.results[0], { title: o, desc: l || "" }, t.searchStr) ? t.showDropdown = !1 : 0 !== t.results.length || g ? t.showDropdown = !0 : t.showDropdown = !1 } function Y() { t.localData ? (t.searching = !1, z(t.localData, "")) : t.remoteApiHandler ? (t.searching = !0, L("")) : (t.searching = !0, B("")) } i.on("mousedown", function (e) { e.target.id ? (_ = e.target.id) === t.id + "_dropdown" && document.body.addEventListener("click", y) : _ = e.target.className }), t.currentIndex = t.focusFirst ? 0 : null, t.searching = !1, u = t.$watch("initialValue", function (e) { e && (u(), C(e, !0)) }), t.$watch("fieldRequired", function (e, n) { e !== n && (e ? v && -1 !== t.currentIndex ? q(!0) : q(!1) : a[t.inputName].$setValidity(m, !0)) }), t.$on("angucomplete-alt:clearInput", function (e, n) { n && n !== t.id || (t.searchStr = null, D(), q(!1), V()) }), t.$on("angucomplete-alt:changeInput", function (e, n, r) { n && n === t.id && C(r) }), t.onFocusHandler = function () { t.focusIn && t.focusIn(), 0 !== h || t.searchStr && 0 !== t.searchStr.length || (t.currentIndex = t.focusFirst ? 0 : t.currentIndex, t.showDropdown = !0, Y()) }, t.hideResults = function () { _ && (_ === t.id + "_dropdown" || _.indexOf("angucomplete") >= 0) ? _ = null : (s = l(function () { V(), t.$apply(function () { t.searchStr && t.searchStr.length > 0 && p.val(t.searchStr) }) }, 200), T(), t.focusOut && t.focusOut(), t.overrideSuggestions && t.searchStr && t.searchStr.length > 0 && -1 === t.currentIndex && k()) }, t.resetHideResults = function () { s && l.cancel(s) }, t.hoverRow = function (e) { t.currentIndex = e }, t.selectResult = function (e) { t.matchClass && (e.title = R(e.originalObject), e.description = F(e.originalObject, t.descriptionField)), t.clearSelected ? t.searchStr = null : t.searchStr = e.title, D(e), V() }, t.inputChangeHandler = function (e) { return void 0 != e && e.length < h ? (T(), V()) : void 0 != e && 0 === e.length && 0 === h && Y(), t.inputChanged && (e = t.inputChanged(e)), e }, t.fieldRequiredClass && "" !== t.fieldRequiredClass && (m = t.fieldRequiredClass), t.minlength && "" !== t.minlength && (h = parseInt(t.minlength, 10)), t.pause || (t.pause = 500), t.clearSelected || (t.clearSelected = !1), t.overrideSuggestions || (t.overrideSuggestions = !1), t.fieldRequired && a && (t.initialValue ? q(!0) : q(!1)), t.inputType = o.type ? o.type : "text", t.textSearching = o.textSearching ? o.textSearching : "Searching...", t.textNoResults = o.textNoResults ? o.textNoResults : "No results found", d = "false" !== t.textSearching, g = "false" !== t.textNoResults, t.maxlength = o.maxlength ? o.maxlength : 524288, p.on("keydown", function e(n) { var r, l, i = I(n), o = null, a = null; 13 === i && t.results ? (t.currentIndex >= 0 && t.currentIndex < t.results.length ? (n.preventDefault(), t.selectResult(t.results[t.currentIndex])) : (k(n), V()), t.$apply()) : 40 === i && t.results ? (n.preventDefault(), t.currentIndex + 1 < t.results.length && t.showDropdown && (t.$apply(function () { t.currentIndex++, A() }), b && (o = N(), w.getBoundingClientRect().top + parseInt(getComputedStyle(w).maxHeight, 10) < o.getBoundingClientRect().bottom)) && U((l = getComputedStyle(r = o), r.offsetHeight + parseInt(l.marginTop, 10) + parseInt(l.marginBottom, 10)))) : 38 === i && t.results ? (n.preventDefault(), t.currentIndex >= 1 ? (t.$apply(function () { t.currentIndex--, A() }), b && (a = N().getBoundingClientRect().top - (w.getBoundingClientRect().top + parseInt(getComputedStyle(w).paddingTop, 10))) < 0 && U(a - 1)) : 0 === t.currentIndex && t.$apply(function () { t.currentIndex = -1, p.val(t.searchStr) })) : 9 === i ? t.results && t.results.length > 0 && t.showDropdown ? -1 === t.currentIndex && t.overrideSuggestions ? k() : (-1 === t.currentIndex && (t.currentIndex = 0), t.selectResult(t.results[t.currentIndex]), t.$digest()) : t.searchStr && t.searchStr.length > 0 && k() : 27 === i && n.preventDefault() }), p.on("keyup", function e(n) { var r = I(n); if (37 !== r && 39 !== r) { if (38 === r || 13 === r) n.preventDefault(); else if (40 === r) n.preventDefault(), !t.showDropdown && t.searchStr && t.searchStr.length >= h && (W(), t.searching = !0, M(t.searchStr)); else if (27 === r) V(), t.$apply(function () { p.val(t.searchStr) }); else { if (0 === h && !t.searchStr) return; t.searchStr && "" !== t.searchStr ? t.searchStr.length >= h && (W(), f && l.cancel(f), t.searching = !0, f = l(function () { M(t.searchStr) }, t.pause)) : t.showDropdown = !1, v && v !== t.searchStr && !t.clearSelected && t.$apply(function () { D() }) } } }); var G = "remoteUrlResponseFormatter"; c = function (e) { return t[G] ? t[G](e) : e }, l(function () { var e = getComputedStyle(w); b = e.maxHeight && "auto" === e.overflowY }) } return i.put(a, '<div class="angucomplete-holder" ng-class="{\'angucomplete-dropdown-visible\': showDropdown}">  <input id="{{id}}_value" name="{{inputName}}" tabindex="{{fieldTabindex}}" class="inputField location" required=required ng-class="{\'angucomplete-input-not-empty\': notEmpty}" ng-model="searchStr" ng-disabled="disableInput" type="{{inputType}}" placeholder="{{placeholder}}" maxlength="{{maxlength}}" ng-focus="onFocusHandler()" class="{{inputClass}}" ng-focus="resetHideResults()" ng-blur="hideResults($event)" autocapitalize="off" autocorrect="off" autocomplete="off" ng-change="inputChangeHandler(searchStr)"/> <span class="label_name">{{id=="ex1"|| id=="ex3"?"Leaving From":"Where To"}}</span><span class="icons bi bi-geo-alt"></span><i class="bottom_line"></i>  <div id="{{id}}_dropdown" class="angucomplete-dropdown" ng-show="showDropdown">    <div class="angucomplete-searching" ng-show="searching" ng-bind="textSearching"></div>    <div class="angucomplete-searching" ng-show="!searching && (!results || results.length == 0)" ng-bind="textNoResults"></div>    <div class="angucomplete-row" ng-repeat="result in results" ng-click="selectResult(result)" ng-mouseenter="hoverRow($index)" ng-class="{\'angucomplete-selected-row\': $index == currentIndex,\'airpotssuggest\':(result.originalObject.AirportFullName.indexOf(\'All Airports\')>-1?true:false),\'childsuggest\':(result.originalObject.AirportFullName.indexOf(\'All Airports\') ==-1 && result.originalObject.Total > 0 && results.length>1  ?true:false)}">      <div ng-if="imageField" class="angucomplete-image-holder">        <img ng-if="result.image && result.image != \'\'" ng-src="{{result.image}}" class="angucomplete-image"/>        <div ng-if="!result.image && result.image != \'\'" class="angucomplete-image-default"></div>      </div>      <div class="angucomplete-title" ng-if="matchClass" ng-bind-html="result.title"></div>      <div class="angucomplete-title" ng-if="!matchClass">{{ result.title }}</div>      <div ng-if="matchClass && result.description && result.description != \'\'" class="angucomplete-description" ng-bind-html="result.description"></div>      <div ng-if="!matchClass && result.description && result.description != \'\'" class="angucomplete-description">{{result.description}}</div>    </div>  </div></div>'), { restrict: "EA", require: "^?form", scope: { selectedObject: "=", selectedObjectData: "=", disableInput: "=", initialValue: "=", localData: "=", localSearch: "&", remoteUrlRequestFormatter: "=", remoteUrlRequestWithCredentials: "@", remoteUrlResponseFormatter: "=", remoteUrlErrorCallback: "=", remoteApiHandler: "=", id: "@", type: "@", placeholder: "@", textSearching: "@", textNoResults: "@", remoteUrl: "@", remoteUrlDataField: "@", titleField: "@", descriptionField: "@", imageField: "@", inputClass: "@", pause: "@", searchFields: "@", minlength: "@", matchClass: "@", clearSelected: "@", overrideSuggestions: "@", fieldRequired: "=", fieldRequiredClass: "@", inputChanged: "=", autoMatch: "@", focusOut: "&", focusIn: "&", fieldTabindex: "@", inputName: "@", focusFirst: "@", parseInput: "&" }, templateUrl: function (e, t) { return t.templateUrl || a }, compile: function (e) { var t = o.startSymbol(), n = o.endSymbol(); if (!("{{" === t && "}}" === n)) { var r = e.html().replace(/\{\{/g, t).replace(/\}\}/g, n); e.html(r) } return s } } }]) });
/*! angularjs-slider - v5.8.7 - 
 (c) Rafal Zajac <rzajac@gmail.com>, Valentin Hervieu <valentin@hervieu.me>, Jussi Saarivirta <jusasi@gmail.com>, Angelin Sirbu <angelin.sirbu@gmail.com> - 
 https://github.com/angular-slider/angularjs-slider - 
 2016-11-09 */
/*jslint unparam: true */
/*global angular: false, console: false, define, module */
(function (root, factory) {
    'use strict';
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['angular'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        // to support bundler like browserify
        var angularObj = require('angular');
        if ((!angularObj || !angularObj.module) && typeof angular != 'undefined') {
            angularObj = angular;
        }
        module.exports = factory(angularObj);
    } else {
        // Browser globals (root is window)
        factory(root.angular);
    }

}(this, function (angular) {
    'use strict';
    var module = angular.module('rzModule', [])

        .factory('RzSliderOptions', function () {
            var defaultOptions = {
                floor: 0,
                ceil: null, //defaults to rz-slider-model
                step: 1,
                precision: 0,
                minRange: null,
                maxRange: null,
                pushRange: false,
                minLimit: null,
                maxLimit: null,
                id: null,
                translate: null,
                getLegend: null,
                stepsArray: null,
                bindIndexForStepsArray: false,
                draggableRange: false,
                draggableRangeOnly: false,
                showSelectionBar: false,
                showSelectionBarEnd: false,
                showSelectionBarFromValue: null,
                hidePointerLabels: false,
                hideLimitLabels: false,
                autoHideLimitLabels: true,
                readOnly: false,
                disabled: false,
                interval: 350,
                showTicks: false,
                showTicksValues: false,
                ticksArray: null,
                ticksTooltip: null,
                ticksValuesTooltip: null,
                vertical: false,
                getSelectionBarColor: null,
                getTickColor: null,
                getPointerColor: null,
                keyboardSupport: true,
                scale: 1,
                enforceStep: true,
                enforceRange: false,
                noSwitching: false,
                onlyBindHandles: false,
                onStart: null,
                onChange: null,
                onEnd: null,
                rightToLeft: false,
                boundPointerLabels: true,
                mergeRangeLabelsIfSame: false,
                customTemplateScope: null,
                logScale: false,
                customValueToPosition: null,
                customPositionToValue: null
            };
            var globalOptions = {};

            var factory = {};
            /**
             * `options({})` allows global configuration of all sliders in the
             * application.
             *
             *   var app = angular.module( 'App', ['rzModule'], function( RzSliderOptions ) {
             *     // show ticks for all sliders
             *     RzSliderOptions.options( { showTicks: true } );
             *   });
             */
            factory.options = function (value) {
                angular.extend(globalOptions, value);
            };

            factory.getOptions = function (options) {
                return angular.extend({}, defaultOptions, globalOptions, options);
            };

            return factory;
        })

        .factory('rzThrottle', ['$timeout', function ($timeout) {
            /**
             * rzThrottle
             *
             * Taken from underscore project
             *
             * @param {Function} func
             * @param {number} wait
             * @param {ThrottleOptions} options
             * @returns {Function}
             */
            return function (func, wait, options) {
                'use strict';
                /* istanbul ignore next */
                var getTime = (Date.now || function () {
                    return new Date().getTime();
                });
                var context, args, result;
                var timeout = null;
                var previous = 0;
                options = options || {};
                var later = function () {
                    previous = getTime();
                    timeout = null;
                    result = func.apply(context, args);
                    context = args = null;
                };
                return function () {
                    var now = getTime();
                    var remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        $timeout.cancel(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                        context = args = null;
                    } else if (!timeout && options.trailing !== false) {
                        timeout = $timeout(later, remaining);
                    }
                    return result;
                };
            }
        }])

        .factory('RzSlider', ['$timeout', '$document', '$window', '$compile', 'RzSliderOptions', 'rzThrottle', function ($timeout, $document, $window, $compile, RzSliderOptions, rzThrottle) {
            'use strict';

            /**
             * Slider
             *
             * @param {ngScope} scope            The AngularJS scope
             * @param {Element} sliderElem The slider directive element wrapped in jqLite
             * @constructor
             */
            var Slider = function (scope, sliderElem) {
                /**
                 * The slider's scope
                 *
                 * @type {ngScope}
                 */
                this.scope = scope;

                /**
                 * The slider inner low value (linked to rzSliderModel)
                 * @type {number}
                 */
                this.lowValue = 0;

                /**
                 * The slider inner high value (linked to rzSliderHigh)
                 * @type {number}
                 */
                this.highValue = 0;

                /**
                 * Slider element wrapped in jqLite
                 *
                 * @type {jqLite}
                 */
                this.sliderElem = sliderElem;

                /**
                 * Slider type
                 *
                 * @type {boolean} Set to true for range slider
                 */
                this.range = this.scope.rzSliderModel !== undefined && this.scope.rzSliderHigh !== undefined;

                /**
                 * Values recorded when first dragging the bar
                 *
                 * @type {Object}
                 */
                this.dragging = {
                    active: false,
                    value: 0,
                    difference: 0,
                    position: 0,
                    lowLimit: 0,
                    highLimit: 0
                };

                /**
                 * property that handle position (defaults to left for horizontal)
                 * @type {string}
                 */
                this.positionProperty = 'left';

                /**
                 * property that handle dimension (defaults to width for horizontal)
                 * @type {string}
                 */
                this.dimensionProperty = 'width';

                /**
                 * Half of the width or height of the slider handles
                 *
                 * @type {number}
                 */
                this.handleHalfDim = 0;

                /**
                 * Maximum position the slider handle can have
                 *
                 * @type {number}
                 */
                this.maxPos = 0;

                /**
                 * Precision
                 *
                 * @type {number}
                 */
                this.precision = 0;

                /**
                 * Step
                 *
                 * @type {number}
                 */
                this.step = 1;

                /**
                 * The name of the handle we are currently tracking
                 *
                 * @type {string}
                 */
                this.tracking = '';

                /**
                 * Minimum value (floor) of the model
                 *
                 * @type {number}
                 */
                this.minValue = 0;

                /**
                 * Maximum value (ceiling) of the model
                 *
                 * @type {number}
                 */
                this.maxValue = 0;


                /**
                 * The delta between min and max value
                 *
                 * @type {number}
                 */
                this.valueRange = 0;


                /**
                 * If showTicks/showTicksValues options are number.
                 * In this case, ticks values should be displayed below the slider.
                 * @type {boolean}
                 */
                this.intermediateTicks = false;

                /**
                 * Set to true if init method already executed
                 *
                 * @type {boolean}
                 */
                this.initHasRun = false;

                /**
                 * Used to call onStart on the first keydown event
                 *
                 * @type {boolean}
                 */
                this.firstKeyDown = false;

                /**
                 * Internal flag to prevent watchers to be called when the sliders value are modified internally.
                 * @type {boolean}
                 */
                this.internalChange = false;

                /**
                 * Internal flag to keep track of the visibility of combo label
                 * @type {boolean}
                 */
                this.cmbLabelShown = false;

                /**
                 * Internal variable to keep track of the focus element
                 */
                this.currentFocusElement = null;

                // Slider DOM elements wrapped in jqLite
                this.fullBar = null; // The whole slider bar
                this.selBar = null; // Highlight between two handles
                this.minH = null; // Left slider handle
                this.maxH = null; // Right slider handle
                this.flrLab = null; // Floor label
                this.ceilLab = null; // Ceiling label
                this.minLab = null; // Label above the low value
                this.maxLab = null; // Label above the high value
                this.cmbLab = null; // Combined label
                this.ticks = null; // The ticks

                // Initialize slider
                this.init();
            };

            // Add instance methods
            Slider.prototype = {

                /**
                 * Initialize slider
                 *
                 * @returns {undefined}
                 */
                init: function () {
                    var thrLow, thrHigh,
                        self = this;

                    var calcDimFn = function () {
                        self.calcViewDimensions();
                    };

                    this.applyOptions();
                    this.syncLowValue();
                    if (this.range)
                        this.syncHighValue();
                    this.initElemHandles();
                    this.manageElementsStyle();
                    this.setDisabledState();
                    this.calcViewDimensions();
                    this.setMinAndMax();
                    this.addAccessibility();
                    this.updateCeilLab();
                    this.updateFloorLab();
                    this.initHandles();
                    this.manageEventsBindings();

                    // Recalculate slider view dimensions
                    this.scope.$on('reCalcViewDimensions', calcDimFn);

                    // Recalculate stuff if view port dimensions have changed
                    angular.element($window).on('resize', calcDimFn);

                    this.initHasRun = true;

                    // Watch for changes to the model
                    thrLow = rzThrottle(function () {
                        self.onLowHandleChange();
                    }, self.options.interval);

                    thrHigh = rzThrottle(function () {
                        self.onHighHandleChange();
                    }, self.options.interval);

                    this.scope.$on('rzSliderForceRender', function () {
                        self.resetLabelsValue();
                        thrLow();
                        if (self.range) {
                            thrHigh();
                        }
                        self.resetSlider();
                    });

                    // Watchers (order is important because in case of simultaneous change,
                    // watchers will be called in the same order)
                    this.scope.$watch('rzSliderOptions()', function (newValue, oldValue) {
                        if (newValue === oldValue)
                            return;
                        self.applyOptions(); // need to be called before synchronizing the values
                        self.syncLowValue();
                        if (self.range)
                            self.syncHighValue();
                        self.resetSlider();
                    }, true);

                    this.scope.$watch('rzSliderModel', function (newValue, oldValue) {
                        if (self.internalChange)
                            return;
                        if (newValue === oldValue)
                            return;
                        thrLow();
                    });

                    this.scope.$watch('rzSliderHigh', function (newValue, oldValue) {
                        if (self.internalChange)
                            return;
                        if (newValue === oldValue)
                            return;
                        if (newValue != null)
                            thrHigh();
                        if (self.range && newValue == null || !self.range && newValue != null) {
                            self.applyOptions();
                            self.resetSlider();
                        }
                    });

                    this.scope.$on('$destroy', function () {
                        self.unbindEvents();
                        angular.element($window).off('resize', calcDimFn);
                        self.currentFocusElement = null;
                    });
                },

                findStepIndex: function (modelValue) {
                    var index = 0;
                    for (var i = 0; i < this.options.stepsArray.length; i++) {
                        var step = this.options.stepsArray[i];
                        if (step === modelValue) {
                            index = i;
                            break;
                        }
                        else if (angular.isDate(step)) {
                            if (step.getTime() === modelValue.getTime()) {
                                index = i;
                                break;
                            }
                        }
                        else if (angular.isObject(step)) {
                            if (angular.isDate(step.value) && step.value.getTime() === modelValue.getTime() || step.value === modelValue) {
                                index = i;
                                break;
                            }
                        }
                    }
                    return index;
                },

                syncLowValue: function () {
                    if (this.options.stepsArray) {
                        if (!this.options.bindIndexForStepsArray)
                            this.lowValue = this.findStepIndex(this.scope.rzSliderModel);
                        else
                            this.lowValue = this.scope.rzSliderModel
                    }
                    else
                        this.lowValue = this.scope.rzSliderModel;
                },

                syncHighValue: function () {
                    if (this.options.stepsArray) {
                        if (!this.options.bindIndexForStepsArray)
                            this.highValue = this.findStepIndex(this.scope.rzSliderHigh);
                        else
                            this.highValue = this.scope.rzSliderHigh
                    }
                    else
                        this.highValue = this.scope.rzSliderHigh;
                },

                getStepValue: function (sliderValue) {
                    var step = this.options.stepsArray[sliderValue];
                    if (angular.isDate(step))
                        return step;
                    if (angular.isObject(step))
                        return step.value;
                    return step;
                },

                applyLowValue: function () {
                    if (this.options.stepsArray) {
                        if (!this.options.bindIndexForStepsArray)
                            this.scope.rzSliderModel = this.getStepValue(this.lowValue);
                        else
                            this.scope.rzSliderModel = this.lowValue
                    }
                    else
                        this.scope.rzSliderModel = this.lowValue;
                },

                applyHighValue: function () {
                    if (this.options.stepsArray) {
                        if (!this.options.bindIndexForStepsArray)
                            this.scope.rzSliderHigh = this.getStepValue(this.highValue);
                        else
                            this.scope.rzSliderHigh = this.highValue
                    }
                    else
                        this.scope.rzSliderHigh = this.highValue;
                },

                /*
                 * Reflow the slider when the low handle changes (called with throttle)
                 */
                onLowHandleChange: function () {
                    this.syncLowValue();
                    if (this.range)
                        this.syncHighValue();
                    this.setMinAndMax();
                    this.updateLowHandle(this.valueToPosition(this.lowValue));
                    this.updateSelectionBar();
                    this.updateTicksScale();
                    this.updateAriaAttributes();
                    if (this.range) {
                        this.updateCmbLabel();
                    }
                },

                /*
                 * Reflow the slider when the high handle changes (called with throttle)
                 */
                onHighHandleChange: function () {
                    this.syncLowValue();
                    this.syncHighValue();
                    this.setMinAndMax();
                    this.updateHighHandle(this.valueToPosition(this.highValue));
                    this.updateSelectionBar();
                    this.updateTicksScale();
                    this.updateCmbLabel();
                    this.updateAriaAttributes();
                },

                /**
                 * Read the user options and apply them to the slider model
                 */
                applyOptions: function () {
                    var sliderOptions;
                    if (this.scope.rzSliderOptions)
                        sliderOptions = this.scope.rzSliderOptions();
                    else
                        sliderOptions = {};

                    this.options = RzSliderOptions.getOptions(sliderOptions);

                    if (this.options.step <= 0)
                        this.options.step = 1;

                    this.range = this.scope.rzSliderModel !== undefined && this.scope.rzSliderHigh !== undefined;
                    this.options.draggableRange = this.range && this.options.draggableRange;
                    this.options.draggableRangeOnly = this.range && this.options.draggableRangeOnly;
                    if (this.options.draggableRangeOnly) {
                        this.options.draggableRange = true;
                    }

                    this.options.showTicks = this.options.showTicks || this.options.showTicksValues || !!this.options.ticksArray;
                    this.scope.showTicks = this.options.showTicks; //scope is used in the template
                    if (angular.isNumber(this.options.showTicks) || this.options.ticksArray)
                        this.intermediateTicks = true;

                    this.options.showSelectionBar = this.options.showSelectionBar || this.options.showSelectionBarEnd
                        || this.options.showSelectionBarFromValue !== null;

                    if (this.options.stepsArray) {
                        this.parseStepsArray();
                    } else {
                        if (this.options.translate)
                            this.customTrFn = this.options.translate;
                        else
                            this.customTrFn = function (value) {
                                return String(value);
                            };

                        this.getLegend = this.options.getLegend;
                    }

                    if (this.options.vertical) {
                        this.positionProperty = 'bottom';
                        this.dimensionProperty = 'height';
                    }

                    if (this.options.customTemplateScope)
                        this.scope.custom = this.options.customTemplateScope;
                },

                parseStepsArray: function () {
                    this.options.floor = 0;
                    this.options.ceil = this.options.stepsArray.length - 1;
                    this.options.step = 1;

                    if (this.options.translate) {
                        this.customTrFn = this.options.translate;
                    }
                    else {
                        this.customTrFn = function (modelValue) {
                            if (this.options.bindIndexForStepsArray)
                                return this.getStepValue(modelValue);
                            return modelValue;
                        };
                    }

                    this.getLegend = function (index) {
                        var step = this.options.stepsArray[index];
                        if (angular.isObject(step))
                            return step.legend;
                        return null;
                    };
                },

                /**
                 * Resets slider
                 *
                 * @returns {undefined}
                 */
                resetSlider: function () {
                    this.manageElementsStyle();
                    this.addAccessibility();
                    this.setMinAndMax();
                    this.updateCeilLab();
                    this.updateFloorLab();
                    this.unbindEvents();
                    this.manageEventsBindings();
                    this.setDisabledState();
                    this.calcViewDimensions();
                    this.refocusPointerIfNeeded();
                },

                refocusPointerIfNeeded: function () {
                    if (this.currentFocusElement) {
                        this.onPointerFocus(this.currentFocusElement.pointer, this.currentFocusElement.ref);
                        this.focusElement(this.currentFocusElement.pointer)
                    }
                },

                /**
                 * Set the slider children to variables for easy access
                 *
                 * Run only once during initialization
                 *
                 * @returns {undefined}
                 */
                initElemHandles: function () {
                    // Assign all slider elements to object properties for easy access
                    angular.forEach(this.sliderElem.children(), function (elem, index) {
                        var jElem = angular.element(elem);

                        switch (index) {
                            case 0:
                                this.fullBar = jElem;
                                break;
                            case 1:
                                this.selBar = jElem;
                                break;
                            case 2:
                                this.minH = jElem;
                                break;
                            case 3:
                                this.maxH = jElem;
                                break;
                            case 4:
                                this.flrLab = jElem;
                                break;
                            case 5:
                                this.ceilLab = jElem;
                                break;
                            case 6:
                                this.minLab = jElem;
                                break;
                            case 7:
                                this.maxLab = jElem;
                                break;
                            case 8:
                                this.cmbLab = jElem;
                                break;
                            case 9:
                                this.ticks = jElem;
                                break;
                        }

                    }, this);

                    // Initialize position cache properties
                    this.selBar.rzsp = 0;
                    this.minH.rzsp = 0;
                    this.maxH.rzsp = 0;
                    this.flrLab.rzsp = 0;
                    this.ceilLab.rzsp = 0;
                    this.minLab.rzsp = 0;
                    this.maxLab.rzsp = 0;
                    this.cmbLab.rzsp = 0;
                },

                /**
                 * Update each elements style based on options
                 */
                manageElementsStyle: function () {

                    if (!this.range)
                        this.maxH.css('display', 'none');
                    else
                        this.maxH.css('display', '');


                    this.alwaysHide(this.flrLab, this.options.showTicksValues || this.options.hideLimitLabels);
                    this.alwaysHide(this.ceilLab, this.options.showTicksValues || this.options.hideLimitLabels);

                    var hideLabelsForTicks = this.options.showTicksValues && !this.intermediateTicks;
                    this.alwaysHide(this.minLab, hideLabelsForTicks || this.options.hidePointerLabels);
                    this.alwaysHide(this.maxLab, hideLabelsForTicks || !this.range || this.options.hidePointerLabels);
                    this.alwaysHide(this.cmbLab, hideLabelsForTicks || !this.range || this.options.hidePointerLabels);
                    this.alwaysHide(this.selBar, !this.range && !this.options.showSelectionBar);

                    if (this.options.vertical)
                        this.sliderElem.addClass('rz-vertical');

                    if (this.options.draggableRange)
                        this.selBar.addClass('rz-draggable');
                    else
                        this.selBar.removeClass('rz-draggable');

                    if (this.intermediateTicks && this.options.showTicksValues)
                        this.ticks.addClass('rz-ticks-values-under');
                },

                alwaysHide: function (el, hide) {
                    el.rzAlwaysHide = hide;
                    if (hide)
                        this.hideEl(el);
                    else
                        this.showEl(el)
                },

                /**
                 * Manage the events bindings based on readOnly and disabled options
                 *
                 * @returns {undefined}
                 */
                manageEventsBindings: function () {
                    if (this.options.disabled || this.options.readOnly)
                        this.unbindEvents();
                    else
                        this.bindEvents();
                },

                /**
                 * Set the disabled state based on rzSliderDisabled
                 *
                 * @returns {undefined}
                 */
                setDisabledState: function () {
                    if (this.options.disabled) {
                        this.sliderElem.attr('disabled', 'disabled');
                    } else {
                        this.sliderElem.attr('disabled', null);
                    }
                },

                /**
                 * Reset label values
                 *
                 * @return {undefined}
                 */
                resetLabelsValue: function () {
                    this.minLab.rzsv = undefined;
                    this.maxLab.rzsv = undefined;
                },

                /**
                 * Initialize slider handles positions and labels
                 *
                 * Run only once during initialization and every time view port changes size
                 *
                 * @returns {undefined}
                 */
                initHandles: function () {
                    this.updateLowHandle(this.valueToPosition(this.lowValue));

                    /*
                     the order here is important since the selection bar should be
                     updated after the high handle but before the combined label
                     */
                    if (this.range)
                        this.updateHighHandle(this.valueToPosition(this.highValue));
                    this.updateSelectionBar();
                    if (this.range)
                        this.updateCmbLabel();

                    this.updateTicksScale();
                },

                /**
                 * Translate value to human readable format
                 *
                 * @param {number|string} value
                 * @param {jqLite} label
                 * @param {String} which
                 * @param {boolean} [useCustomTr]
                 * @returns {undefined}
                 */
                translateFn: function (value, label, which, useCustomTr) {
                    useCustomTr = useCustomTr === undefined ? true : useCustomTr;

                    var valStr = '',
                        getDimension = false,
                        noLabelInjection = label.hasClass('no-label-injection');

                    if (useCustomTr) {
                        if (this.options.stepsArray && !this.options.bindIndexForStepsArray)
                            value = this.getStepValue(value);
                        valStr = String(this.customTrFn(value, this.options.id, which));
                    }
                    else {
                        valStr = String(value)
                    }

                    if (label.rzsv === undefined || label.rzsv.length !== valStr.length || (label.rzsv.length > 0 && label.rzsd === 0)) {
                        getDimension = true;
                        label.rzsv = valStr;
                    }

                    if (!noLabelInjection) {
                        label.html(valStr);
                    }
                    ;

                    this.scope[which + 'Label'] = valStr;

                    // Update width only when length of the label have changed
                    if (getDimension) {
                        this.getDimension(label);
                    }
                },

                /**
                 * Set maximum and minimum values for the slider and ensure the model and high
                 * value match these limits
                 * @returns {undefined}
                 */
                setMinAndMax: function () {

                    this.step = +this.options.step;
                    this.precision = +this.options.precision;

                    this.minValue = this.options.floor;
                    if (this.options.logScale && this.minValue === 0)
                        throw Error("Can't use floor=0 with logarithmic scale");

                    if (this.options.enforceStep) {
                        this.lowValue = this.roundStep(this.lowValue);
                        if (this.range)
                            this.highValue = this.roundStep(this.highValue);
                    }

                    if (this.options.ceil != null)
                        this.maxValue = this.options.ceil;
                    else
                        this.maxValue = this.options.ceil = this.range ? this.highValue : this.lowValue;

                    if (this.options.enforceRange) {
                        this.lowValue = this.sanitizeValue(this.lowValue);
                        if (this.range)
                            this.highValue = this.sanitizeValue(this.highValue);
                    }

                    this.applyLowValue();
                    if (this.range)
                        this.applyHighValue();

                    this.valueRange = this.maxValue - this.minValue;
                },

                /**
                 * Adds accessibility attributes
                 *
                 * Run only once during initialization
                 *
                 * @returns {undefined}
                 */
                addAccessibility: function () {
                    this.minH.attr('role', 'slider');
                    this.updateAriaAttributes();
                    if (this.options.keyboardSupport && !(this.options.readOnly || this.options.disabled))
                        this.minH.attr('tabindex', '0');
                    else
                        this.minH.attr('tabindex', '');
                    if (this.options.vertical)
                        this.minH.attr('aria-orientation', 'vertical');

                    if (this.range) {
                        this.maxH.attr('role', 'slider');
                        if (this.options.keyboardSupport && !(this.options.readOnly || this.options.disabled))
                            this.maxH.attr('tabindex', '0');
                        else
                            this.maxH.attr('tabindex', '');
                        if (this.options.vertical)
                            this.maxH.attr('aria-orientation', 'vertical');
                    }
                },

                /**
                 * Updates aria attributes according to current values
                 */
                updateAriaAttributes: function () {
                    this.minH.attr({
                        'aria-valuenow': this.scope.rzSliderModel,
                        'aria-valuetext': this.customTrFn(this.scope.rzSliderModel, this.options.id, 'model'),
                        'aria-valuemin': this.minValue,
                        'aria-valuemax': this.maxValue
                    });
                    if (this.range) {
                        this.maxH.attr({
                            'aria-valuenow': this.scope.rzSliderHigh,
                            'aria-valuetext': this.customTrFn(this.scope.rzSliderHigh, this.options.id, 'high'),
                            'aria-valuemin': this.minValue,
                            'aria-valuemax': this.maxValue
                        });
                    }
                },

                /**
                 * Calculate dimensions that are dependent on view port size
                 *
                 * Run once during initialization and every time view port changes size.
                 *
                 * @returns {undefined}
                 */
                calcViewDimensions: function () {
                    var handleWidth = this.getDimension(this.minH);

                    this.handleHalfDim = handleWidth / 2;
                    this.barDimension = this.getDimension(this.fullBar);

                    this.maxPos = this.barDimension - handleWidth;

                    this.getDimension(this.sliderElem);
                    this.sliderElem.rzsp = this.sliderElem[0].getBoundingClientRect()[this.positionProperty];

                    if (this.initHasRun) {
                        this.updateFloorLab();
                        this.updateCeilLab();
                        this.initHandles();
                        var self = this;
                        $timeout(function () {
                            self.updateTicksScale();
                        });
                    }
                },

                /**
                 * Update the ticks position
                 *
                 * @returns {undefined}
                 */
                updateTicksScale: function () {
                    if (!this.options.showTicks) return;

                    var ticksArray = this.options.ticksArray || this.getTicksArray(),
                        translate = this.options.vertical ? 'translateY' : 'translateX',
                        self = this;

                    if (this.options.rightToLeft)
                        ticksArray.reverse();

                    this.scope.ticks = ticksArray.map(function (value) {
                        var position = self.valueToPosition(value);

                        if (self.options.vertical)
                            position = self.maxPos - position;

                        var tick = {
                            selected: self.isTickSelected(value),
                            style: {
                                transform: translate + '(' + Math.round(position) + 'px)'
                            }
                        };
                        if (tick.selected && self.options.getSelectionBarColor) {
                            tick.style['background-color'] = self.getSelectionBarColor();
                        }
                        if (!tick.selected && self.options.getTickColor) {
                            tick.style['background-color'] = self.getTickColor(value);
                        }
                        if (self.options.ticksTooltip) {
                            tick.tooltip = self.options.ticksTooltip(value);
                            tick.tooltipPlacement = self.options.vertical ? 'right' : 'top';
                        }
                        if (self.options.showTicksValues) {
                            tick.value = self.getDisplayValue(value, 'tick-value');
                            if (self.options.ticksValuesTooltip) {
                                tick.valueTooltip = self.options.ticksValuesTooltip(value);
                                tick.valueTooltipPlacement = self.options.vertical ? 'right' : 'top';
                            }
                        }
                        if (self.getLegend) {
                            var legend = self.getLegend(value, self.options.id);
                            if (legend)
                                tick.legend = legend;
                        }
                        return tick;
                    });
                },

                getTicksArray: function () {
                    var step = this.step,
                        ticksArray = [];
                    if (this.intermediateTicks)
                        step = this.options.showTicks;
                    for (var value = this.minValue; value <= this.maxValue; value += step) {
                        ticksArray.push(value);
                    }
                    return ticksArray;
                },

                isTickSelected: function (value) {
                    if (!this.range) {
                        if (this.options.showSelectionBarFromValue !== null) {
                            var center = this.options.showSelectionBarFromValue;
                            if (this.lowValue > center && value >= center && value <= this.lowValue)
                                return true;
                            else if (this.lowValue < center && value <= center && value >= this.lowValue)
                                return true;
                        }
                        else if (this.options.showSelectionBarEnd) {
                            if (value >= this.lowValue)
                                return true;
                        }
                        else if (this.options.showSelectionBar && value <= this.lowValue)
                            return true;
                    }
                    if (this.range && value >= this.lowValue && value <= this.highValue)
                        return true;
                    return false;
                },

                /**
                 * Update position of the floor label
                 *
                 * @returns {undefined}
                 */
                updateFloorLab: function () {
                    this.translateFn(this.minValue, this.flrLab, 'floor');
                    this.getDimension(this.flrLab);
                    var position = this.options.rightToLeft ? this.barDimension - this.flrLab.rzsd : 0;
                    this.setPosition(this.flrLab, position);
                },

                /**
                 * Update position of the ceiling label
                 *
                 * @returns {undefined}
                 */
                updateCeilLab: function () {
                    this.translateFn(this.maxValue, this.ceilLab, 'ceil');
                    this.getDimension(this.ceilLab);
                    var position = this.options.rightToLeft ? 0 : this.barDimension - this.ceilLab.rzsd;
                    this.setPosition(this.ceilLab, position);
                },

                /**
                 * Update slider handles and label positions
                 *
                 * @param {string} which
                 * @param {number} newPos
                 */
                updateHandles: function (which, newPos) {
                    if (which === 'lowValue')
                        this.updateLowHandle(newPos);
                    else
                        this.updateHighHandle(newPos);

                    this.updateSelectionBar();
                    this.updateTicksScale();
                    if (this.range)
                        this.updateCmbLabel();
                },

                /**
                 * Helper function to work out the position for handle labels depending on RTL or not
                 *
                 * @param {string} labelName maxLab or minLab
                 * @param newPos
                 *
                 * @returns {number}
                 */
                getHandleLabelPos: function (labelName, newPos) {
                    var labelRzsd = this[labelName].rzsd,
                        nearHandlePos = newPos - labelRzsd / 2 + this.handleHalfDim,
                        endOfBarPos = this.barDimension - labelRzsd;

                    if (!this.options.boundPointerLabels)
                        return nearHandlePos;

                    if (this.options.rightToLeft && labelName === 'minLab' || !this.options.rightToLeft && labelName === 'maxLab') {
                        return Math.min(nearHandlePos, endOfBarPos);
                    } else {
                        return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
                    }
                },

                /**
                 * Update low slider handle position and label
                 *
                 * @param {number} newPos
                 * @returns {undefined}
                 */
                updateLowHandle: function (newPos) {
                    this.setPosition(this.minH, newPos);
                    this.translateFn(this.lowValue, this.minLab, 'model');
                    this.setPosition(this.minLab, this.getHandleLabelPos('minLab', newPos));

                    if (this.options.getPointerColor) {
                        var pointercolor = this.getPointerColor('min');
                        this.scope.minPointerStyle = {
                            backgroundColor: pointercolor
                        };
                    }

                    if (this.options.autoHideLimitLabels) {
                        this.shFloorCeil();
                    }
                },

                /**
                 * Update high slider handle position and label
                 *
                 * @param {number} newPos
                 * @returns {undefined}
                 */
                updateHighHandle: function (newPos) {
                    this.setPosition(this.maxH, newPos);
                    this.translateFn(this.highValue, this.maxLab, 'high');
                    this.setPosition(this.maxLab, this.getHandleLabelPos('maxLab', newPos));

                    if (this.options.getPointerColor) {
                        var pointercolor = this.getPointerColor('max');
                        this.scope.maxPointerStyle = {
                            backgroundColor: pointercolor
                        };
                    }
                    if (this.options.autoHideLimitLabels) {
                        this.shFloorCeil();
                    }

                },

                /**
                 * Show/hide floor/ceiling label
                 *
                 * @returns {undefined}
                 */
                shFloorCeil: function () {
                    // Show based only on hideLimitLabels if pointer labels are hidden
                    if (this.options.hidePointerLabels) {
                        return;
                    }
                    var flHidden = false,
                        clHidden = false,
                        isMinLabAtFloor = this.isLabelBelowFloorLab(this.minLab),
                        isMinLabAtCeil = this.isLabelAboveCeilLab(this.minLab),
                        isMaxLabAtCeil = this.isLabelAboveCeilLab(this.maxLab),
                        isCmbLabAtFloor = this.isLabelBelowFloorLab(this.cmbLab),
                        isCmbLabAtCeil = this.isLabelAboveCeilLab(this.cmbLab);

                    if (isMinLabAtFloor) {
                        flHidden = true;
                        this.hideEl(this.flrLab);
                    } else {
                        flHidden = false;
                        this.showEl(this.flrLab);
                    }

                    if (isMinLabAtCeil) {
                        clHidden = true;
                        this.hideEl(this.ceilLab);
                    } else {
                        clHidden = false;
                        this.showEl(this.ceilLab);
                    }

                    if (this.range) {
                        var hideCeil = this.cmbLabelShown ? isCmbLabAtCeil : isMaxLabAtCeil;
                        var hideFloor = this.cmbLabelShown ? isCmbLabAtFloor : isMinLabAtFloor;

                        if (hideCeil) {
                            this.hideEl(this.ceilLab);
                        } else if (!clHidden) {
                            this.showEl(this.ceilLab);
                        }

                        // Hide or show floor label
                        if (hideFloor) {
                            this.hideEl(this.flrLab);
                        } else if (!flHidden) {
                            this.showEl(this.flrLab);
                        }
                    }
                },

                isLabelBelowFloorLab: function (label) {
                    var isRTL = this.options.rightToLeft,
                        pos = label.rzsp,
                        dim = label.rzsd,
                        floorPos = this.flrLab.rzsp,
                        floorDim = this.flrLab.rzsd;
                    return isRTL ?
                        pos + dim >= floorPos - 2 :
                        pos <= floorPos + floorDim + 2;
                },

                isLabelAboveCeilLab: function (label) {
                    var isRTL = this.options.rightToLeft,
                        pos = label.rzsp,
                        dim = label.rzsd,
                        ceilPos = this.ceilLab.rzsp,
                        ceilDim = this.ceilLab.rzsd;
                    return isRTL ?
                        pos <= ceilPos + ceilDim + 2 :
                        pos + dim >= ceilPos - 2;
                },

                /**
                 * Update slider selection bar, combined label and range label
                 *
                 * @returns {undefined}
                 */
                updateSelectionBar: function () {
                    var position = 0,
                        dimension = 0,
                        isSelectionBarFromRight = this.options.rightToLeft ? !this.options.showSelectionBarEnd : this.options.showSelectionBarEnd,
                        positionForRange = this.options.rightToLeft ? this.maxH.rzsp + this.handleHalfDim : this.minH.rzsp + this.handleHalfDim;

                    if (this.range) {
                        dimension = Math.abs(this.maxH.rzsp - this.minH.rzsp);
                        position = positionForRange;
                    }
                    else {
                        if (this.options.showSelectionBarFromValue !== null) {
                            var center = this.options.showSelectionBarFromValue,
                                centerPosition = this.valueToPosition(center),
                                isModelGreaterThanCenter = this.options.rightToLeft ? this.lowValue <= center : this.lowValue > center;
                            if (isModelGreaterThanCenter) {
                                dimension = this.minH.rzsp - centerPosition;
                                position = centerPosition + this.handleHalfDim;
                            }
                            else {
                                dimension = centerPosition - this.minH.rzsp;
                                position = this.minH.rzsp + this.handleHalfDim;
                            }
                        }
                        else if (isSelectionBarFromRight) {
                            dimension = Math.abs(this.maxPos - this.minH.rzsp) + this.handleHalfDim;
                            position = this.minH.rzsp + this.handleHalfDim;
                        } else {
                            dimension = Math.abs(this.maxH.rzsp - this.minH.rzsp) + this.handleHalfDim;
                            position = 0;
                        }
                    }
                    this.setDimension(this.selBar, dimension);
                    this.setPosition(this.selBar, position);
                    if (this.options.getSelectionBarColor) {
                        var color = this.getSelectionBarColor();
                        this.scope.barStyle = {
                            backgroundColor: color
                        };
                    }
                },

                /**
                 * Wrapper around the getSelectionBarColor of the user to pass to
                 * correct parameters
                 */
                getSelectionBarColor: function () {
                    if (this.range)
                        return this.options.getSelectionBarColor(this.scope.rzSliderModel, this.scope.rzSliderHigh);
                    return this.options.getSelectionBarColor(this.scope.rzSliderModel);
                },

                /**
                 * Wrapper around the getPointerColor of the user to pass to
                 * correct parameters
                 */
                getPointerColor: function (pointerType) {
                    if (pointerType === 'max') {
                        return this.options.getPointerColor(this.scope.rzSliderHigh, pointerType);
                    }
                    return this.options.getPointerColor(this.scope.rzSliderModel, pointerType);
                },

                /**
                 * Wrapper around the getTickColor of the user to pass to
                 * correct parameters
                 */
                getTickColor: function (value) {
                    return this.options.getTickColor(value);
                },

                /**
                 * Update combined label position and value
                 *
                 * @returns {undefined}
                 */
                updateCmbLabel: function () {
                    var isLabelOverlap = null;
                    if (this.options.rightToLeft) {
                        isLabelOverlap = this.minLab.rzsp - this.minLab.rzsd - 10 <= this.maxLab.rzsp;
                    } else {
                        isLabelOverlap = this.minLab.rzsp + this.minLab.rzsd + 10 >= this.maxLab.rzsp;
                    }

                    if (isLabelOverlap) {
                        var lowTr = this.getDisplayValue(this.lowValue, 'model'),
                            highTr = this.getDisplayValue(this.highValue, 'high'),
                            labelVal = '';
                        if (this.options.mergeRangeLabelsIfSame && lowTr === highTr) {
                            labelVal = lowTr;
                        } else {
                            labelVal = this.options.rightToLeft ? highTr + ' - ' + lowTr : lowTr + ' - ' + highTr;
                        }

                        this.translateFn(labelVal, this.cmbLab, 'cmb', false);
                        var pos = this.options.boundPointerLabels ? Math.min(
                            Math.max(
                                this.selBar.rzsp + this.selBar.rzsd / 2 - this.cmbLab.rzsd / 2,
                                0
                            ),
                            this.barDimension - this.cmbLab.rzsd
                        ) : this.selBar.rzsp + this.selBar.rzsd / 2 - this.cmbLab.rzsd / 2;

                        this.setPosition(this.cmbLab, pos);
                        this.cmbLabelShown = true;
                        this.hideEl(this.minLab);
                        this.hideEl(this.maxLab);
                        this.showEl(this.cmbLab);
                    } else {
                        this.cmbLabelShown = false;
                        this.showEl(this.maxLab);
                        this.showEl(this.minLab);
                        this.hideEl(this.cmbLab);
                    }
                    if (this.options.autoHideLimitLabels) {
                        this.shFloorCeil();
                    }
                },

                /**
                 * Return the translated value if a translate function is provided else the original value
                 * @param value
                 * @param which if it's min or max handle
                 * @returns {*}
                 */
                getDisplayValue: function (value, which) {
                    if (this.options.stepsArray && !this.options.bindIndexForStepsArray) {
                        value = this.getStepValue(value);
                    }
                    return this.customTrFn(value, this.options.id, which);
                },

                /**
                 * Round value to step and precision based on minValue
                 *
                 * @param {number} value
                 * @param {number} customStep a custom step to override the defined step
                 * @returns {number}
                 */
                roundStep: function (value, customStep) {
                    var step = customStep ? customStep : this.step,
                        steppedDifference = parseFloat((value - this.minValue) / step).toPrecision(12);
                    steppedDifference = Math.round(+steppedDifference) * step;
                    var newValue = (this.minValue + steppedDifference).toFixed(this.precision);
                    return +newValue;
                },

                /**
                 * Hide element
                 *
                 * @param element
                 * @returns {jqLite} The jqLite wrapped DOM element
                 */
                hideEl: function (element) {
                    return element.css({
                        visibility: 'hidden'
                    });
                },

                /**
                 * Show element
                 *
                 * @param element The jqLite wrapped DOM element
                 * @returns {jqLite} The jqLite
                 */
                showEl: function (element) {
                    if (!!element.rzAlwaysHide) {
                        return element;
                    }

                    return element.css({
                        visibility: 'visible'
                    });
                },

                /**
                 * Set element left/top position depending on whether slider is horizontal or vertical
                 *
                 * @param {jqLite} elem The jqLite wrapped DOM element
                 * @param {number} pos
                 * @returns {number}
                 */
                setPosition: function (elem, pos) {
                    elem.rzsp = pos;
                    var css = {};
                    css[this.positionProperty] = Math.round(pos) + 'px';
                    elem.css(css);
                    return pos;
                },

                /**
                 * Get element width/height depending on whether slider is horizontal or vertical
                 *
                 * @param {jqLite} elem The jqLite wrapped DOM element
                 * @returns {number}
                 */
                getDimension: function (elem) {
                    var val = elem[0].getBoundingClientRect();
                    if (this.options.vertical)
                        elem.rzsd = (val.bottom - val.top) * this.options.scale;
                    else
                        elem.rzsd = (val.right - val.left) * this.options.scale;
                    return elem.rzsd;
                },

                /**
                 * Set element width/height depending on whether slider is horizontal or vertical
                 *
                 * @param {jqLite} elem  The jqLite wrapped DOM element
                 * @param {number} dim
                 * @returns {number}
                 */
                setDimension: function (elem, dim) {
                    elem.rzsd = dim;
                    var css = {};
                    css[this.dimensionProperty] = Math.round(dim) + 'px';
                    elem.css(css);
                    return dim;
                },

                /**
                 * Returns a value that is within slider range
                 *
                 * @param {number} val
                 * @returns {number}
                 */
                sanitizeValue: function (val) {
                    return Math.min(Math.max(val, this.minValue), this.maxValue);
                },

                /**
                 * Translate value to pixel position
                 *
                 * @param {number} val
                 * @returns {number}
                 */
                valueToPosition: function (val) {
                    var fn = this.linearValueToPosition;
                    if (this.options.customValueToPosition)
                        fn = this.options.customValueToPosition;
                    else if (this.options.logScale)
                        fn = this.logValueToPosition;

                    val = this.sanitizeValue(val);
                    var percent = fn(val, this.minValue, this.maxValue) || 0;
                    if (this.options.rightToLeft)
                        percent = 1 - percent;
                    return percent * this.maxPos;
                },

                linearValueToPosition: function (val, minVal, maxVal) {
                    var range = maxVal - minVal;
                    return (val - minVal) / range;
                },

                logValueToPosition: function (val, minVal, maxVal) {
                    val = Math.log(val);
                    minVal = Math.log(minVal);
                    maxVal = Math.log(maxVal);
                    var range = maxVal - minVal;
                    return (val - minVal) / range;
                },

                /**
                 * Translate position to model value
                 *
                 * @param {number} position
                 * @returns {number}
                 */
                positionToValue: function (position) {
                    var percent = position / this.maxPos;
                    if (this.options.rightToLeft)
                        percent = 1 - percent;
                    var fn = this.linearPositionToValue;
                    if (this.options.customPositionToValue)
                        fn = this.options.customPositionToValue;
                    else if (this.options.logScale)
                        fn = this.logPositionToValue;
                    return fn(percent, this.minValue, this.maxValue) || 0;
                },

                linearPositionToValue: function (percent, minVal, maxVal) {
                    return percent * (maxVal - minVal) + minVal;
                },

                logPositionToValue: function (percent, minVal, maxVal) {
                    minVal = Math.log(minVal);
                    maxVal = Math.log(maxVal);
                    var value = percent * (maxVal - minVal) + minVal;
                    return Math.exp(value);
                },

                // Events
                /**
                 * Get the X-coordinate or Y-coordinate of an event
                 *
                 * @param {Object} event  The event
                 * @returns {number}
                 */
                getEventXY: function (event) {
                    /* http://stackoverflow.com/a/12336075/282882 */
                    //noinspection JSLint
                    var clientXY = this.options.vertical ? 'clientY' : 'clientX';
                    if (event[clientXY] !== undefined) {
                        return event[clientXY];
                    }

                    return event.originalEvent === undefined ?
                        event.touches[0][clientXY] : event.originalEvent.touches[0][clientXY];
                },

                /**
                 * Compute the event position depending on whether the slider is horizontal or vertical
                 * @param event
                 * @returns {number}
                 */
                getEventPosition: function (event) {
                    var sliderPos = this.sliderElem.rzsp,
                        eventPos = 0;
                    if (this.options.vertical)
                        eventPos = -this.getEventXY(event) + sliderPos;
                    else
                        eventPos = this.getEventXY(event) - sliderPos;
                    return eventPos * this.options.scale - this.handleHalfDim; // #346 handleHalfDim is already scaled
                },

                /**
                 * Get event names for move and event end
                 *
                 * @param {Event}    event    The event
                 *
                 * @return {{moveEvent: string, endEvent: string}}
                 */
                getEventNames: function (event) {
                    var eventNames = {
                        moveEvent: '',
                        endEvent: ''
                    };

                    if (event.touches || (event.originalEvent !== undefined && event.originalEvent.touches)) {
                        eventNames.moveEvent = 'touchmove';
                        eventNames.endEvent = 'touchend';
                    } else {
                        eventNames.moveEvent = 'mousemove';
                        eventNames.endEvent = 'mouseup';
                    }

                    return eventNames;
                },

                /**
                 * Get the handle closest to an event.
                 *
                 * @param event {Event} The event
                 * @returns {jqLite} The handle closest to the event.
                 */
                getNearestHandle: function (event) {
                    if (!this.range) {
                        return this.minH;
                    }
                    var position = this.getEventPosition(event),
                        distanceMin = Math.abs(position - this.minH.rzsp),
                        distanceMax = Math.abs(position - this.maxH.rzsp);
                    if (distanceMin < distanceMax)
                        return this.minH;
                    else if (distanceMin > distanceMax)
                        return this.maxH;
                    else if (!this.options.rightToLeft)
                        //if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
                        return position < this.minH.rzsp ? this.minH : this.maxH;
                    else
                        //reverse in rtl
                        return position > this.minH.rzsp ? this.minH : this.maxH;
                },

                /**
                 * Wrapper function to focus an angular element
                 *
                 * @param el {AngularElement} the element to focus
                 */
                focusElement: function (el) {
                    var DOM_ELEMENT = 0;
                    el[DOM_ELEMENT].focus();
                },

                /**
                 * Bind mouse and touch events to slider handles
                 *
                 * @returns {undefined}
                 */
                bindEvents: function () {
                    var barTracking, barStart, barMove;

                    if (this.options.draggableRange) {
                        barTracking = 'rzSliderDrag';
                        barStart = this.onDragStart;
                        barMove = this.onDragMove;
                    } else {
                        barTracking = 'lowValue';
                        barStart = this.onStart;
                        barMove = this.onMove;
                    }

                    if (!this.options.onlyBindHandles) {
                        this.selBar.on('mousedown', angular.bind(this, barStart, null, barTracking));
                        this.selBar.on('mousedown', angular.bind(this, barMove, this.selBar));
                    }

                    if (this.options.draggableRangeOnly) {
                        this.minH.on('mousedown', angular.bind(this, barStart, null, barTracking));
                        this.maxH.on('mousedown', angular.bind(this, barStart, null, barTracking));
                    } else {
                        this.minH.on('mousedown', angular.bind(this, this.onStart, this.minH, 'lowValue'));
                        if (this.range) {
                            this.maxH.on('mousedown', angular.bind(this, this.onStart, this.maxH, 'highValue'));
                        }
                        if (!this.options.onlyBindHandles) {
                            this.fullBar.on('mousedown', angular.bind(this, this.onStart, null, null));
                            this.fullBar.on('mousedown', angular.bind(this, this.onMove, this.fullBar));
                            this.ticks.on('mousedown', angular.bind(this, this.onStart, null, null));
                            this.ticks.on('mousedown', angular.bind(this, this.onTickClick, this.ticks));
                        }
                    }

                    if (!this.options.onlyBindHandles) {
                        this.selBar.on('touchstart', angular.bind(this, barStart, null, barTracking));
                        this.selBar.on('touchstart', angular.bind(this, barMove, this.selBar));
                    }
                    if (this.options.draggableRangeOnly) {
                        this.minH.on('touchstart', angular.bind(this, barStart, null, barTracking));
                        this.maxH.on('touchstart', angular.bind(this, barStart, null, barTracking));
                    } else {
                        this.minH.on('touchstart', angular.bind(this, this.onStart, this.minH, 'lowValue'));
                        if (this.range) {
                            this.maxH.on('touchstart', angular.bind(this, this.onStart, this.maxH, 'highValue'));
                        }
                        if (!this.options.onlyBindHandles) {
                            this.fullBar.on('touchstart', angular.bind(this, this.onStart, null, null));
                            this.fullBar.on('touchstart', angular.bind(this, this.onMove, this.fullBar));
                            this.ticks.on('touchstart', angular.bind(this, this.onStart, null, null));
                            this.ticks.on('touchstart', angular.bind(this, this.onTickClick, this.ticks));
                        }
                    }

                    if (this.options.keyboardSupport) {
                        this.minH.on('focus', angular.bind(this, this.onPointerFocus, this.minH, 'lowValue'));
                        if (this.range) {
                            this.maxH.on('focus', angular.bind(this, this.onPointerFocus, this.maxH, 'highValue'));
                        }
                    }
                },

                /**
                 * Unbind mouse and touch events to slider handles
                 *
                 * @returns {undefined}
                 */
                unbindEvents: function () {
                    this.minH.off();
                    this.maxH.off();
                    this.fullBar.off();
                    this.selBar.off();
                    this.ticks.off();
                },

                /**
                 * onStart event handler
                 *
                 * @param {?Object} pointer The jqLite wrapped DOM element; if null, the closest handle is used
                 * @param {?string} ref     The name of the handle being changed; if null, the closest handle's value is modified
                 * @param {Event}   event   The event
                 * @returns {undefined}
                 */
                onStart: function (pointer, ref, event) {
                    var ehMove, ehEnd,
                        eventNames = this.getEventNames(event);

                    event.stopPropagation();
                    event.preventDefault();

                    // We have to do this in case the HTML where the sliders are on
                    // have been animated into view.
                    this.calcViewDimensions();

                    if (pointer) {
                        this.tracking = ref;
                    } else {
                        pointer = this.getNearestHandle(event);
                        this.tracking = pointer === this.minH ? 'lowValue' : 'highValue';
                    }

                    pointer.addClass('rz-active');

                    if (this.options.keyboardSupport)
                        this.focusElement(pointer);

                    ehMove = angular.bind(this, this.dragging.active ? this.onDragMove : this.onMove, pointer);
                    ehEnd = angular.bind(this, this.onEnd, ehMove);

                    $document.on(eventNames.moveEvent, ehMove);
                    $document.one(eventNames.endEvent, ehEnd);
                    this.callOnStart();
                },

                /**
                 * onMove event handler
                 *
                 * @param {jqLite} pointer
                 * @param {Event}  event The event
                 * @param {boolean}  fromTick if the event occured on a tick or not
                 * @returns {undefined}
                 */
                onMove: function (pointer, event, fromTick) {
                    var newPos = this.getEventPosition(event),
                        newValue,
                        ceilValue = this.options.rightToLeft ? this.minValue : this.maxValue,
                        flrValue = this.options.rightToLeft ? this.maxValue : this.minValue;

                    if (newPos <= 0) {
                        newValue = flrValue;
                    } else if (newPos >= this.maxPos) {
                        newValue = ceilValue;
                    } else {
                        newValue = this.positionToValue(newPos);
                        if (fromTick && angular.isNumber(this.options.showTicks))
                            newValue = this.roundStep(newValue, this.options.showTicks);
                        else
                            newValue = this.roundStep(newValue);
                    }
                    this.positionTrackingHandle(newValue);
                },

                /**
                 * onEnd event handler
                 *
                 * @param {Event}    event    The event
                 * @param {Function} ehMove   The the bound move event handler
                 * @returns {undefined}
                 */
                onEnd: function (ehMove, event) {
                    var moveEventName = this.getEventNames(event).moveEvent;

                    if (!this.options.keyboardSupport) {
                        this.minH.removeClass('rz-active');
                        this.maxH.removeClass('rz-active');
                        this.tracking = '';
                    }
                    this.dragging.active = false;

                    $document.off(moveEventName, ehMove);
                    this.callOnEnd();
                },

                onTickClick: function (pointer, event) {
                    this.onMove(pointer, event, true);
                },

                onPointerFocus: function (pointer, ref) {
                    this.tracking = ref;
                    pointer.one('blur', angular.bind(this, this.onPointerBlur, pointer));
                    pointer.on('keydown', angular.bind(this, this.onKeyboardEvent));
                    pointer.on('keyup', angular.bind(this, this.onKeyUp));
                    this.firstKeyDown = true;
                    pointer.addClass('rz-active');

                    this.currentFocusElement = {
                        pointer: pointer,
                        ref: ref
                    };
                },

                onKeyUp: function () {
                    this.firstKeyDown = true;
                    this.callOnEnd();
                },

                onPointerBlur: function (pointer) {
                    pointer.off('keydown');
                    pointer.off('keyup');
                    this.tracking = '';
                    pointer.removeClass('rz-active');
                    this.currentFocusElement = null
                },

                /**
                 * Key actions helper function
                 *
                 * @param {number} currentValue value of the slider
                 *
                 * @returns {?Object} action value mappings
                 */
                getKeyActions: function (currentValue) {
                    var increaseStep = currentValue + this.step,
                        decreaseStep = currentValue - this.step,
                        increasePage = currentValue + this.valueRange / 10,
                        decreasePage = currentValue - this.valueRange / 10;

                    //Left to right default actions
                    var actions = {
                        'UP': increaseStep,
                        'DOWN': decreaseStep,
                        'LEFT': decreaseStep,
                        'RIGHT': increaseStep,
                        'PAGEUP': increasePage,
                        'PAGEDOWN': decreasePage,
                        'HOME': this.minValue,
                        'END': this.maxValue
                    };
                    //right to left means swapping right and left arrows
                    if (this.options.rightToLeft) {
                        actions.LEFT = increaseStep;
                        actions.RIGHT = decreaseStep;
                        // right to left and vertical means we also swap up and down
                        if (this.options.vertical) {
                            actions.UP = decreaseStep;
                            actions.DOWN = increaseStep;
                        }
                    }
                    return actions;
                },

                onKeyboardEvent: function (event) {
                    var currentValue = this[this.tracking],
                        keyCode = event.keyCode || event.which,
                        keys = {
                            38: 'UP',
                            40: 'DOWN',
                            37: 'LEFT',
                            39: 'RIGHT',
                            33: 'PAGEUP',
                            34: 'PAGEDOWN',
                            36: 'HOME',
                            35: 'END'
                        },
                        actions = this.getKeyActions(currentValue),
                        key = keys[keyCode],
                        action = actions[key];
                    if (action == null || this.tracking === '') return;
                    event.preventDefault();

                    if (this.firstKeyDown) {
                        this.firstKeyDown = false;
                        this.callOnStart();
                    }

                    var self = this;
                    $timeout(function () {
                        var newValue = self.roundStep(self.sanitizeValue(action));
                        if (!self.options.draggableRangeOnly) {
                            self.positionTrackingHandle(newValue);
                        }
                        else {
                            var difference = self.highValue - self.lowValue,
                                newMinValue, newMaxValue;
                            if (self.tracking === 'lowValue') {
                                newMinValue = newValue;
                                newMaxValue = newValue + difference;
                                if (newMaxValue > self.maxValue) {
                                    newMaxValue = self.maxValue;
                                    newMinValue = newMaxValue - difference;
                                }
                            } else {
                                newMaxValue = newValue;
                                newMinValue = newValue - difference;
                                if (newMinValue < self.minValue) {
                                    newMinValue = self.minValue;
                                    newMaxValue = newMinValue + difference;
                                }
                            }
                            self.positionTrackingBar(newMinValue, newMaxValue);
                        }
                    });
                },

                /**
                 * onDragStart event handler
                 *
                 * Handles dragging of the middle bar.
                 *
                 * @param {Object} pointer The jqLite wrapped DOM element
                 * @param {string} ref     One of the refLow, refHigh values
                 * @param {Event}  event   The event
                 * @returns {undefined}
                 */
                onDragStart: function (pointer, ref, event) {
                    var position = this.getEventPosition(event);
                    this.dragging = {
                        active: true,
                        value: this.positionToValue(position),
                        difference: this.highValue - this.lowValue,
                        lowLimit: this.options.rightToLeft ? this.minH.rzsp - position : position - this.minH.rzsp,
                        highLimit: this.options.rightToLeft ? position - this.maxH.rzsp : this.maxH.rzsp - position
                    };

                    this.onStart(pointer, ref, event);
                },

                /**
                 * getValue helper function
                 *
                 * gets max or min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
                 *
                 * @param {string} type 'max' || 'min' The value we are calculating
                 * @param {number} newPos  The new position
                 * @param {boolean} outOfBounds Is the new position above or below the max/min?
                 * @param {boolean} isAbove Is the new position above the bar if out of bounds?
                 *
                 * @returns {number}
                 */
                getValue: function (type, newPos, outOfBounds, isAbove) {
                    var isRTL = this.options.rightToLeft,
                        value = null;

                    if (type === 'min') {
                        if (outOfBounds) {
                            if (isAbove) {
                                value = isRTL ? this.minValue : this.maxValue - this.dragging.difference;
                            } else {
                                value = isRTL ? this.maxValue - this.dragging.difference : this.minValue;
                            }
                        } else {
                            value = isRTL ? this.positionToValue(newPos + this.dragging.lowLimit) : this.positionToValue(newPos - this.dragging.lowLimit)
                        }
                    } else {
                        if (outOfBounds) {
                            if (isAbove) {
                                value = isRTL ? this.minValue + this.dragging.difference : this.maxValue;
                            } else {
                                value = isRTL ? this.maxValue : this.minValue + this.dragging.difference;
                            }
                        } else {
                            if (isRTL) {
                                value = this.positionToValue(newPos + this.dragging.lowLimit) + this.dragging.difference
                            } else {
                                value = this.positionToValue(newPos - this.dragging.lowLimit) + this.dragging.difference;
                            }
                        }
                    }
                    return this.roundStep(value);
                },

                /**
                 * onDragMove event handler
                 *
                 * Handles dragging of the middle bar.
                 *
                 * @param {jqLite} pointer
                 * @param {Event}  event The event
                 * @returns {undefined}
                 */
                onDragMove: function (pointer, event) {
                    var newPos = this.getEventPosition(event),
                        newMinValue, newMaxValue,
                        ceilLimit, flrLimit,
                        isUnderFlrLimit, isOverCeilLimit,
                        flrH, ceilH;

                    if (this.options.rightToLeft) {
                        ceilLimit = this.dragging.lowLimit;
                        flrLimit = this.dragging.highLimit;
                        flrH = this.maxH;
                        ceilH = this.minH;
                    } else {
                        ceilLimit = this.dragging.highLimit;
                        flrLimit = this.dragging.lowLimit;
                        flrH = this.minH;
                        ceilH = this.maxH;
                    }
                    isUnderFlrLimit = newPos <= flrLimit;
                    isOverCeilLimit = newPos >= this.maxPos - ceilLimit;

                    if (isUnderFlrLimit) {
                        if (flrH.rzsp === 0)
                            return;
                        newMinValue = this.getValue('min', newPos, true, false);
                        newMaxValue = this.getValue('max', newPos, true, false);
                    } else if (isOverCeilLimit) {
                        if (ceilH.rzsp === this.maxPos)
                            return;
                        newMaxValue = this.getValue('max', newPos, true, true);
                        newMinValue = this.getValue('min', newPos, true, true);
                    } else {
                        newMinValue = this.getValue('min', newPos, false);
                        newMaxValue = this.getValue('max', newPos, false);
                    }
                    this.positionTrackingBar(newMinValue, newMaxValue);
                },

                /**
                 * Set the new value and position for the entire bar
                 *
                 * @param {number} newMinValue   the new minimum value
                 * @param {number} newMaxValue   the new maximum value
                 */
                positionTrackingBar: function (newMinValue, newMaxValue) {

                    if (this.options.minLimit != null && newMinValue < this.options.minLimit) {
                        newMinValue = this.options.minLimit;
                        newMaxValue = newMinValue + this.dragging.difference;
                    }
                    if (this.options.maxLimit != null && newMaxValue > this.options.maxLimit) {
                        newMaxValue = this.options.maxLimit;
                        newMinValue = newMaxValue - this.dragging.difference;
                    }

                    this.lowValue = newMinValue;
                    this.highValue = newMaxValue;
                    this.applyLowValue();
                    if (this.range)
                        this.applyHighValue();
                    this.applyModel();
                    this.updateHandles('lowValue', this.valueToPosition(newMinValue));
                    this.updateHandles('highValue', this.valueToPosition(newMaxValue));
                },

                /**
                 * Set the new value and position to the current tracking handle
                 *
                 * @param {number} newValue new model value
                 */
                positionTrackingHandle: function (newValue) {
                    var valueChanged = false;

                    newValue = this.applyMinMaxLimit(newValue);
                    if (this.range) {
                        if (this.options.pushRange) {
                            newValue = this.applyPushRange(newValue);
                            valueChanged = true;
                        }
                        else {
                            if (this.options.noSwitching) {
                                if (this.tracking === 'lowValue' && newValue > this.highValue)
                                    newValue = this.applyMinMaxRange(this.highValue);
                                else if (this.tracking === 'highValue' && newValue < this.lowValue)
                                    newValue = this.applyMinMaxRange(this.lowValue);
                            }
                            newValue = this.applyMinMaxRange(newValue);
                            /* This is to check if we need to switch the min and max handles */
                            if (this.tracking === 'lowValue' && newValue > this.highValue) {
                                this.lowValue = this.highValue;
                                this.applyLowValue();
                                this.updateHandles(this.tracking, this.maxH.rzsp);
                                this.updateAriaAttributes();
                                this.tracking = 'highValue';
                                this.minH.removeClass('rz-active');
                                this.maxH.addClass('rz-active');
                                if (this.options.keyboardSupport)
                                    this.focusElement(this.maxH);
                                valueChanged = true;
                            }
                            else if (this.tracking === 'highValue' && newValue < this.lowValue) {
                                this.highValue = this.lowValue;
                                this.applyHighValue();
                                this.updateHandles(this.tracking, this.minH.rzsp);
                                this.updateAriaAttributes();
                                this.tracking = 'lowValue';
                                this.maxH.removeClass('rz-active');
                                this.minH.addClass('rz-active');
                                if (this.options.keyboardSupport)
                                    this.focusElement(this.minH);
                                valueChanged = true;
                            }
                        }
                    }

                    if (this[this.tracking] !== newValue) {
                        this[this.tracking] = newValue;
                        if (this.tracking === 'lowValue')
                            this.applyLowValue();
                        else
                            this.applyHighValue();
                        this.updateHandles(this.tracking, this.valueToPosition(newValue));
                        this.updateAriaAttributes();
                        valueChanged = true;
                    }

                    if (valueChanged)
                        this.applyModel();
                },

                applyMinMaxLimit: function (newValue) {
                    if (this.options.minLimit != null && newValue < this.options.minLimit)
                        return this.options.minLimit;
                    if (this.options.maxLimit != null && newValue > this.options.maxLimit)
                        return this.options.maxLimit;
                    return newValue;
                },

                applyMinMaxRange: function (newValue) {
                    var oppositeValue = this.tracking === 'lowValue' ? this.highValue : this.lowValue,
                        difference = Math.abs(newValue - oppositeValue);
                    if (this.options.minRange != null) {
                        if (difference < this.options.minRange) {
                            if (this.tracking === 'lowValue')
                                return this.highValue - this.options.minRange;
                            else
                                return this.lowValue + this.options.minRange;
                        }
                    }
                    if (this.options.maxRange != null) {
                        if (difference > this.options.maxRange) {
                            if (this.tracking === 'lowValue')
                                return this.highValue - this.options.maxRange;
                            else
                                return this.lowValue + this.options.maxRange;
                        }
                    }
                    return newValue;
                },

                applyPushRange: function (newValue) {
                    var difference = this.tracking === 'lowValue' ? this.highValue - newValue : newValue - this.lowValue,
                        minRange = this.options.minRange !== null ? this.options.minRange : this.options.step,
                        maxRange = this.options.maxRange;
                    // if smaller than minRange
                    if (difference < minRange) {
                        if (this.tracking === 'lowValue') {
                            this.highValue = Math.min(newValue + minRange, this.maxValue);
                            newValue = this.highValue - minRange;
                            this.applyHighValue();
                            this.updateHandles('highValue', this.valueToPosition(this.highValue));
                        }
                        else {
                            this.lowValue = Math.max(newValue - minRange, this.minValue);
                            newValue = this.lowValue + minRange;
                            this.applyLowValue();
                            this.updateHandles('lowValue', this.valueToPosition(this.lowValue));
                        }
                        this.updateAriaAttributes();
                    }
                    // if greater than maxRange
                    else if (maxRange !== null && difference > maxRange) {
                        if (this.tracking === 'lowValue') {
                            this.highValue = newValue + maxRange;
                            this.applyHighValue();
                            this.updateHandles('highValue', this.valueToPosition(this.highValue));
                        }
                        else {
                            this.lowValue = newValue - maxRange;
                            this.applyLowValue();
                            this.updateHandles('lowValue', this.valueToPosition(this.lowValue));
                        }
                        this.updateAriaAttributes();
                    }
                    return newValue;
                },

                /**
                 * Apply the model values using scope.$apply.
                 * We wrap it with the internalChange flag to avoid the watchers to be called
                 */
                applyModel: function () {
                    this.internalChange = true;
                    this.scope.$apply();
                    this.callOnChange();
                    this.internalChange = false;
                },

                /**
                 * Call the onStart callback if defined
                 * The callback call is wrapped in a $evalAsync to ensure that its result will be applied to the scope.
                 *
                 * @returns {undefined}
                 */
                callOnStart: function () {
                    if (this.options.onStart) {
                        var self = this,
                            pointerType = this.tracking === 'lowValue' ? 'min' : 'max';
                        this.scope.$evalAsync(function () {
                            self.options.onStart(self.options.id, self.scope.rzSliderModel, self.scope.rzSliderHigh, pointerType);
                        });
                    }
                },

                /**
                 * Call the onChange callback if defined
                 * The callback call is wrapped in a $evalAsync to ensure that its result will be applied to the scope.
                 *
                 * @returns {undefined}
                 */
                callOnChange: function () {
                    if (this.options.onChange) {
                        var self = this,
                            pointerType = this.tracking === 'lowValue' ? 'min' : 'max';
                        this.scope.$evalAsync(function () {
                            self.options.onChange(self.options.id, self.scope.rzSliderModel, self.scope.rzSliderHigh, pointerType);
                        });
                    }
                },

                /**
                 * Call the onEnd callback if defined
                 * The callback call is wrapped in a $evalAsync to ensure that its result will be applied to the scope.
                 *
                 * @returns {undefined}
                 */
                callOnEnd: function () {
                    if (this.options.onEnd) {
                        var self = this,
                            pointerType = this.tracking === 'lowValue' ? 'min' : 'max';
                        this.scope.$evalAsync(function () {
                            self.options.onEnd(self.options.id, self.scope.rzSliderModel, self.scope.rzSliderHigh, pointerType);
                        });
                    }
                    this.scope.$emit('slideEnded');
                }
            };

            return Slider;
        }])

        .directive('rzslider', ['RzSlider', function (RzSlider) {
            'use strict';

            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    rzSliderModel: '=?',
                    rzSliderHigh: '=?',
                    rzSliderOptions: '&?',
                    rzSliderTplUrl: '@'
                },

                /**
                 * Return template URL
                 *
                 * @param {jqLite} elem
                 * @param {Object} attrs
                 * @return {string}
                 */
                templateUrl: function (elem, attrs) {
                    //noinspection JSUnresolvedVariable
                    return attrs.rzSliderTplUrl || 'rzSliderTpl.html';
                },

                link: function (scope, elem) {
                    scope.slider = new RzSlider(scope, elem); //attach on scope so we can test it
                }
            };
        }]);

    // IDE assist

    /**
     * @name ngScope
     *
     * @property {number} rzSliderModel
     * @property {number} rzSliderHigh
     * @property {Object} rzSliderOptions
     */

    /**
     * @name jqLite
     *
     * @property {number|undefined} rzsp rzslider label position position
     * @property {number|undefined} rzsd rzslider element dimension
     * @property {string|undefined} rzsv rzslider label value/text
     * @property {Function} css
     * @property {Function} text
     */

    /**
     * @name Event
     * @property {Array} touches
     * @property {Event} originalEvent
     */

    /**
     * @name ThrottleOptions
     *
     * @property {boolean} leading
     * @property {boolean} trailing
     */

    module.run(['$templateCache', function ($templateCache) {
        'use strict';

        $templateCache.put('rzSliderTpl.html',
            "<div class=rzslider><span class=rz-bar-wrapper><span class=rz-bar></span></span> <span class=rz-bar-wrapper><span class=\"rz-bar rz-selection\" ng-style=barStyle></span></span> <span class=\"rz-pointer rz-pointer-min\" ng-style=minPointerStyle></span> <span class=\"rz-pointer rz-pointer-max\" ng-style=maxPointerStyle></span> <span class=\"rz-bubble rz-limit rz-floor\"></span> <span class=\"rz-bubble rz-limit rz-ceil\"></span> <span class=rz-bubble></span> <span class=rz-bubble></span> <span class=rz-bubble></span><ul ng-show=showTicks class=rz-ticks><li ng-repeat=\"t in ticks track by $index\" class=rz-tick ng-class=\"{'rz-selected': t.selected}\" ng-style=t.style ng-attr-uib-tooltip=\"{{ t.tooltip }}\" ng-attr-tooltip-placement={{t.tooltipPlacement}} ng-attr-tooltip-append-to-body=\"{{ t.tooltip ? true : undefined}}\"><span ng-if=\"t.value != null\" class=rz-tick-value ng-attr-uib-tooltip=\"{{ t.valueTooltip }}\" ng-attr-tooltip-placement={{t.valueTooltipPlacement}}>{{ t.value }}</span> <span ng-if=\"t.legend != null\" class=rz-tick-legend>{{ t.legend }}</span></li></ul></div>"
        );

    }]);

    return module.name
}));

/**
 * dirPagination - AngularJS module for paginating (almost) anything.
 *
 *
 * Credits
 * =======
 *
 * Daniel Tabuenca: https://groups.google.com/d/msg/angular/an9QpzqIYiM/r8v-3W1X5vcJ
 * for the idea on how to dynamically invoke the ng-repeat directive.
 *
 * I borrowed a couple of lines and a few attribute names from the AngularUI Bootstrap project:
 * https://github.com/angular-ui/bootstrap/blob/master/src/pagination/pagination.js
 *
 * Copyright 2014 Michael Bromley <michael@michaelbromley.co.uk>
 */

(function () {

    /**
     * Config
     */
    var moduleName = 'angularUtils.directives.dirPagination';
    var DEFAULT_ID = '__default';

    /**
     * Module
     */
    angular.module(moduleName, [])
        .directive('dirPaginate', ['$compile', '$parse', 'paginationService', dirPaginateDirective])
        .directive('dirPaginateNoCompile', noCompileDirective)
        .directive('dirPaginationControls', ['paginationService', 'paginationTemplate', dirPaginationControlsDirective])
        .filter('itemsPerPage', ['paginationService', itemsPerPageFilter])
        .service('paginationService', paginationService)
        .provider('paginationTemplate', paginationTemplateProvider)
        .run(['$templateCache', dirPaginationControlsTemplateInstaller]);

    function dirPaginateDirective($compile, $parse, paginationService) {

        return {
            terminal: true,
            multiElement: true,
            priority: 100,
            compile: dirPaginationCompileFn
        };

        function dirPaginationCompileFn(tElement, tAttrs) {

            var expression = tAttrs.dirPaginate;
            // regex taken directly from https://github.com/angular/angular.js/blob/v1.4.x/src/ng/directive/ngRepeat.js#L339
            var match = expression.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

            var filterPattern = /\|\s*itemsPerPage\s*:\s*(.*\(\s*\w*\)|([^\)]*?(?=\s+as\s+))|[^\)]*)/;
            if (match[2].match(filterPattern) === null) {
                throw 'pagination directive: the \'itemsPerPage\' filter must be set.';
            }
            var itemsPerPageFilterRemoved = match[2].replace(filterPattern, '');
            var collectionGetter = $parse(itemsPerPageFilterRemoved);

            addNoCompileAttributes(tElement);

            // If any value is specified for paginationId, we register the un-evaluated expression at this stage for the benefit of any
            // dir-pagination-controls directives that may be looking for this ID.
            var rawId = tAttrs.paginationId || DEFAULT_ID;
            paginationService.registerInstance(rawId);

            return function dirPaginationLinkFn(scope, element, attrs) {

                // Now that we have access to the `scope` we can interpolate any expression given in the paginationId attribute and
                // potentially register a new ID if it evaluates to a different value than the rawId.
                var paginationId = $parse(attrs.paginationId)(scope) || attrs.paginationId || DEFAULT_ID;

                // (TODO: this seems sound, but I'm reverting as many bug reports followed it's introduction in 0.11.0.
                // Needs more investigation.)
                // In case rawId != paginationId we deregister using rawId for the sake of general cleanliness
                // before registering using paginationId
                // paginationService.deregisterInstance(rawId);
                paginationService.registerInstance(paginationId);

                var repeatExpression = getRepeatExpression(expression, paginationId);
                addNgRepeatToElement(element, attrs, repeatExpression);

                removeTemporaryAttributes(element);
                var compiled = $compile(element);

                var currentPageGetter = makeCurrentPageGetterFn(scope, attrs, paginationId);
                paginationService.setCurrentPageParser(paginationId, currentPageGetter, scope);

                if (typeof attrs.totalItems !== 'undefined') {
                    paginationService.setAsyncModeTrue(paginationId);
                    scope.$watch(function () {
                        return $parse(attrs.totalItems)(scope);
                    }, function (result) {
                        if (0 <= result) {
                            paginationService.setCollectionLength(paginationId, result);
                        }
                    });
                } else {
                    paginationService.setAsyncModeFalse(paginationId);
                    scope.$watchCollection(function () {
                        return collectionGetter(scope);
                    }, function (collection) {
                        if (collection) {
                            var collectionLength = (collection instanceof Array) ? collection.length : Object.keys(collection).length;
                            paginationService.setCollectionLength(paginationId, collectionLength);
                        }
                    });
                }

                // Delegate to the link function returned by the new compilation of the ng-repeat
                compiled(scope);

                // (TODO: Reverting this due to many bug reports in v 0.11.0. Needs investigation as the
                // principle is sound)
                // When the scope is destroyed, we make sure to remove the reference to it in paginationService
                // so that it can be properly garbage collected
                // scope.$on('$destroy', function destroyDirPagination() {
                //     paginationService.deregisterInstance(paginationId);
                // });
            };
        }

        /**
         * If a pagination id has been specified, we need to check that it is present as the second argument passed to
         * the itemsPerPage filter. If it is not there, we add it and return the modified expression.
         *
         * @param expression
         * @param paginationId
         * @returns {*}
         */
        function getRepeatExpression(expression, paginationId) {
            var repeatExpression,
                idDefinedInFilter = !!expression.match(/(\|\s*itemsPerPage\s*:[^|]*:[^|]*)/);

            if (paginationId !== DEFAULT_ID && !idDefinedInFilter) {
                repeatExpression = expression.replace(/(\|\s*itemsPerPage\s*:\s*[^|\s]*)/, "$1 : '" + paginationId + "'");
            } else {
                repeatExpression = expression;
            }

            return repeatExpression;
        }

        /**
         * Adds the ng-repeat directive to the element. In the case of multi-element (-start, -end) it adds the
         * appropriate multi-element ng-repeat to the first and last element in the range.
         * @param element
         * @param attrs
         * @param repeatExpression
         */
        function addNgRepeatToElement(element, attrs, repeatExpression) {
            if (element[0].hasAttribute('dir-paginate-start') || element[0].hasAttribute('data-dir-paginate-start')) {
                // using multiElement mode (dir-paginate-start, dir-paginate-end)
                attrs.$set('ngRepeatStart', repeatExpression);
                element.eq(element.length - 1).attr('ng-repeat-end', true);
            } else {
                attrs.$set('ngRepeat', repeatExpression);
            }
        }

        /**
         * Adds the dir-paginate-no-compile directive to each element in the tElement range.
         * @param tElement
         */
        function addNoCompileAttributes(tElement) {
            angular.forEach(tElement, function (el) {
                if (el.nodeType === 1) {
                    angular.element(el).attr('dir-paginate-no-compile', true);
                }
            });
        }

        /**
         * Removes the variations on dir-paginate (data-, -start, -end) and the dir-paginate-no-compile directives.
         * @param element
         */
        function removeTemporaryAttributes(element) {
            angular.forEach(element, function (el) {
                if (el.nodeType === 1) {
                    angular.element(el).removeAttr('dir-paginate-no-compile');
                }
            });
            element.eq(0).removeAttr('dir-paginate-start').removeAttr('dir-paginate').removeAttr('data-dir-paginate-start').removeAttr('data-dir-paginate');
            element.eq(element.length - 1).removeAttr('dir-paginate-end').removeAttr('data-dir-paginate-end');
        }

        /**
         * Creates a getter function for the current-page attribute, using the expression provided or a default value if
         * no current-page expression was specified.
         *
         * @param scope
         * @param attrs
         * @param paginationId
         * @returns {*}
         */
        function makeCurrentPageGetterFn(scope, attrs, paginationId) {
            var currentPageGetter;
            if (attrs.currentPage) {
                currentPageGetter = $parse(attrs.currentPage);
            } else {
                // If the current-page attribute was not set, we'll make our own.
                // Replace any non-alphanumeric characters which might confuse
                // the $parse service and give unexpected results.
                // See https://github.com/michaelbromley/angularUtils/issues/233
                var defaultCurrentPage = (paginationId + '__currentPage').replace(/\W/g, '_');
                scope[defaultCurrentPage] = 1;
                currentPageGetter = $parse(defaultCurrentPage);
            }
            return currentPageGetter;
        }
    }

    /**
     * This is a helper directive that allows correct compilation when in multi-element mode (ie dir-paginate-start, dir-paginate-end).
     * It is dynamically added to all elements in the dir-paginate compile function, and it prevents further compilation of
     * any inner directives. It is then removed in the link function, and all inner directives are then manually compiled.
     */
    function noCompileDirective() {
        return {
            priority: 5000,
            terminal: true
        };
    }

    function dirPaginationControlsTemplateInstaller($templateCache) {
        $templateCache.put('angularUtils.directives.dirPagination.template', '<ul class="pagination" ng-if="1 < pages.length || !autoHide"><li ng-if="boundaryLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(1)">&laquo;</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by tracker(pageNumber, $index)" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' || ( ! autoHide && pages.length === 1 ) }"><a href="" ng-click="setCurrent(pageNumber)">{{ pageNumber }}</a></li><li ng-if="directionLinks" ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if="boundaryLinks"  ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.last)">&raquo;</a></li></ul>');
    }

    function dirPaginationControlsDirective(paginationService, paginationTemplate) {

        var numberRegex = /^\d+$/;

        var DDO = {
            restrict: 'AE',
            scope: {
                maxSize: '=?',
                onPageChange: '&?',
                paginationId: '=?',
                autoHide: '=?'
            },
            link: dirPaginationControlsLinkFn
        };

        // We need to check the paginationTemplate service to see whether a template path or
        // string has been specified, and add the `template` or `templateUrl` property to
        // the DDO as appropriate. The order of priority to decide which template to use is
        // (highest priority first):
        // 1. paginationTemplate.getString()
        // 2. attrs.templateUrl
        // 3. paginationTemplate.getPath()
        var templateString = paginationTemplate.getString();
        if (templateString !== undefined) {
            DDO.template = templateString;
        } else {
            DDO.templateUrl = function (elem, attrs) {
                return attrs.templateUrl || paginationTemplate.getPath();
            };
        }
        return DDO;

        function dirPaginationControlsLinkFn(scope, element, attrs) {

            // rawId is the un-interpolated value of the pagination-id attribute. This is only important when the corresponding dir-paginate directive has
            // not yet been linked (e.g. if it is inside an ng-if block), and in that case it prevents this controls directive from assuming that there is
            // no corresponding dir-paginate directive and wrongly throwing an exception.
            var rawId = attrs.paginationId || DEFAULT_ID;
            var paginationId = scope.paginationId || attrs.paginationId || DEFAULT_ID;

            if (!paginationService.isRegistered(paginationId) && !paginationService.isRegistered(rawId)) {
                var idMessage = (paginationId !== DEFAULT_ID) ? ' (id: ' + paginationId + ') ' : ' ';
                if (window.console) {
                    console.warn('Pagination directive: the pagination controls' + idMessage + 'cannot be used without the corresponding pagination directive, which was not found at link time.');
                }
            }

            if (!scope.maxSize) { scope.maxSize = 9; }
            scope.autoHide = scope.autoHide === undefined ? true : scope.autoHide;
            scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : true;
            scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : false;

            var paginationRange = Math.max(scope.maxSize, 5);
            scope.pages = [];
            scope.pagination = {
                last: 1,
                current: 1
            };
            scope.range = {
                lower: 1,
                upper: 1,
                total: 1
            };

            scope.$watch('maxSize', function (val) {
                if (val) {
                    paginationRange = Math.max(scope.maxSize, 5);
                    generatePagination();
                }
            });

            scope.$watch(function () {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getCollectionLength(paginationId) + 1) * paginationService.getItemsPerPage(paginationId);
                }
            }, function (length) {
                if (0 < length) {
                    generatePagination();
                }
            });

            scope.$watch(function () {
                if (paginationService.isRegistered(paginationId)) {
                    return (paginationService.getItemsPerPage(paginationId));
                }
            }, function (current, previous) {
                if (current != previous && typeof previous !== 'undefined') {
                    goToPage(scope.pagination.current);
                }
            });

            scope.$watch(function () {
                if (paginationService.isRegistered(paginationId)) {
                    return paginationService.getCurrentPage(paginationId);
                }
            }, function (currentPage, previousPage) {
                if (currentPage != previousPage) {
                    goToPage(currentPage);
                }
            });

            scope.setCurrent = function (num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    num = parseInt(num, 10);
                    paginationService.setCurrentPage(paginationId, num);
                }
            };

            /**
             * Custom "track by" function which allows for duplicate "..." entries on long lists,
             * yet fixes the problem of wrongly-highlighted links which happens when using
             * "track by $index" - see https://github.com/michaelbromley/angularUtils/issues/153
             * @param id
             * @param index
             * @returns {string}
             */
            scope.tracker = function (id, index) {
                return id + '_' + index;
            };

            function goToPage(num) {
                if (paginationService.isRegistered(paginationId) && isValidPageNumber(num)) {
                    var oldPageNumber = scope.pagination.current;

                    scope.pages = generatePagesArray(num, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = num;
                    updateRangeValues();

                    // if a callback has been set, then call it with the page number as the first argument
                    // and the previous page number as a second argument
                    if (scope.onPageChange) {
                        scope.onPageChange({
                            newPageNumber: num,
                            oldPageNumber: oldPageNumber
                        });
                    }
                }
            }

            function generatePagination() {
                if (paginationService.isRegistered(paginationId)) {
                    var page = parseInt(paginationService.getCurrentPage(paginationId)) || 1;
                    scope.pages = generatePagesArray(page, paginationService.getCollectionLength(paginationId), paginationService.getItemsPerPage(paginationId), paginationRange);
                    scope.pagination.current = page;
                    scope.pagination.last = scope.pages[scope.pages.length - 1];
                    if (scope.pagination.last < scope.pagination.current) {
                        scope.setCurrent(scope.pagination.last);
                    } else {
                        updateRangeValues();
                    }
                }
            }

            /**
             * This function updates the values (lower, upper, total) of the `scope.range` object, which can be used in the pagination
             * template to display the current page range, e.g. "showing 21 - 40 of 144 results";
             */
            function updateRangeValues() {
                if (paginationService.isRegistered(paginationId)) {
                    var currentPage = paginationService.getCurrentPage(paginationId),
                        itemsPerPage = paginationService.getItemsPerPage(paginationId),
                        totalItems = paginationService.getCollectionLength(paginationId);

                    scope.range.lower = (currentPage - 1) * itemsPerPage + 1;
                    scope.range.upper = Math.min(currentPage * itemsPerPage, totalItems);
                    scope.range.total = totalItems;
                }
            }
            function isValidPageNumber(num) {
                return (numberRegex.test(num) && (0 < num && num <= scope.pagination.last));
            }
        }

        /**
         * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
         * links used in pagination
         *
         * @param currentPage
         * @param rowsPerPage
         * @param paginationRange
         * @param collectionLength
         * @returns {Array}
         */
        function generatePagesArray(currentPage, collectionLength, rowsPerPage, paginationRange) {
            var pages = [];
            var totalPages = Math.ceil(collectionLength / rowsPerPage);
            var halfWay = Math.ceil(paginationRange / 2);
            var position;

            if (currentPage <= halfWay) {
                position = 'start';
            } else if (totalPages - halfWay < currentPage) {
                position = 'end';
            } else {
                position = 'middle';
            }

            var ellipsesNeeded = paginationRange < totalPages;
            var i = 1;
            while (i <= totalPages && i <= paginationRange) {
                var pageNumber = calculatePageNumber(i, currentPage, paginationRange, totalPages);

                var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
                var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
                if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                    pages.push('...');
                } else {
                    pages.push(pageNumber);
                }
                i++;
            }
            return pages;
        }

        /**
         * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
         *
         * @param i
         * @param currentPage
         * @param paginationRange
         * @param totalPages
         * @returns {*}
         */
        function calculatePageNumber(i, currentPage, paginationRange, totalPages) {
            var halfWay = Math.ceil(paginationRange / 2);
            if (i === paginationRange) {
                return totalPages;
            } else if (i === 1) {
                return i;
            } else if (paginationRange < totalPages) {
                if (totalPages - halfWay < currentPage) {
                    return totalPages - paginationRange + i;
                } else if (halfWay < currentPage) {
                    return currentPage - halfWay + i;
                } else {
                    return i;
                }
            } else {
                return i;
            }
        }
    }

    /**
     * This filter slices the collection into pages based on the current page number and number of items per page.
     * @param paginationService
     * @returns {Function}
     */
    function itemsPerPageFilter(paginationService) {

        return function (collection, itemsPerPage, paginationId) {
            if (typeof (paginationId) === 'undefined') {
                paginationId = DEFAULT_ID;
            }
            if (!paginationService.isRegistered(paginationId)) {
                throw 'pagination directive: the itemsPerPage id argument (id: ' + paginationId + ') does not match a registered pagination-id.';
            }
            var end;
            var start;
            if (angular.isObject(collection)) {
                itemsPerPage = parseInt(itemsPerPage) || 9999999999;
                if (paginationService.isAsyncMode(paginationId)) {
                    start = 0;
                } else {
                    start = (paginationService.getCurrentPage(paginationId) - 1) * itemsPerPage;
                }
                end = start + itemsPerPage;
                paginationService.setItemsPerPage(paginationId, itemsPerPage);

                if (collection instanceof Array) {
                    // the array just needs to be sliced
                    return collection.slice(start, end);
                } else {
                    // in the case of an object, we need to get an array of keys, slice that, then map back to
                    // the original object.
                    var slicedObject = {};
                    angular.forEach(keys(collection).slice(start, end), function (key) {
                        slicedObject[key] = collection[key];
                    });
                    return slicedObject;
                }
            } else {
                return collection;
            }
        };
    }

    /**
     * Shim for the Object.keys() method which does not exist in IE < 9
     * @param obj
     * @returns {Array}
     */
    function keys(obj) {
        if (!Object.keys) {
            var objKeys = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    objKeys.push(i);
                }
            }
            return objKeys;
        } else {
            return Object.keys(obj);
        }
    }

    /**
     * This service allows the various parts of the module to communicate and stay in sync.
     */
    function paginationService() {

        var instances = {};
        var lastRegisteredInstance;

        this.registerInstance = function (instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.deregisterInstance = function (instanceId) {
            delete instances[instanceId];
        };

        this.isRegistered = function (instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function () {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function (instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function (instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function (instanceId) {
            var parser = instances[instanceId].currentPageParser;
            return parser ? parser(instances[instanceId].context) : 1;
        };

        this.setItemsPerPage = function (instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function (instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function (instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function (instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function (instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.setAsyncModeFalse = function (instanceId) {
            instances[instanceId].asyncMode = false;
        };

        this.isAsyncMode = function (instanceId) {
            return instances[instanceId].asyncMode;
        };
    }

    /**
     * This provider allows global configuration of the template path used by the dir-pagination-controls directive.
     */
    function paginationTemplateProvider() {

        var templatePath = 'angularUtils.directives.dirPagination.template';
        var templateString;

        /**
         * Set a templateUrl to be used by all instances of <dir-pagination-controls>
         * @param {String} path
         */
        this.setPath = function (path) {
            templatePath = path;
        };

        /**
         * Set a string of HTML to be used as a template by all instances
         * of <dir-pagination-controls>. If both a path *and* a string have been set,
         * the string takes precedence.
         * @param {String} str
         */
        this.setString = function (str) {
            templateString = str;
        };

        this.$get = function () {
            return {
                getPath: function () {
                    return templatePath;
                },
                getString: function () {
                    return templateString;
                }
            };
        };
    }
})();
// Generated by CoffeeScript 1.6.2
(function() {
  var MODULE_NAME, SLIDER_TAG, angularize, bindHtml, gap, halfWidth, hide, inputEvents, module, offset, offsetLeft, pixelize, qualifiedDirectiveDefinition, roundStep, show, sliderDirective, width;

  MODULE_NAME = 'uiSlider';

  SLIDER_TAG = 'slider';

  angularize = function(element) {
    return angular.element(element);
  };

  pixelize = function(position) {
    return "" + position + "px";
  };

  hide = function(element) {
    return element.css({
      opacity: 0
    });
  };

  show = function(element) {
    return element.css({
      opacity: 1
    });
  };

  offset = function(element, position) {
    return element.css({
      left: position
    });
  };

  halfWidth = function(element) {
    return element[0].offsetWidth / 2;
  };

  offsetLeft = function(element) {
    return element[0].offsetLeft;
  };

  width = function(element) {
    return element[0].offsetWidth;
  };

  gap = function(element1, element2) {
    return offsetLeft(element2) - offsetLeft(element1) - width(element1);
  };

  bindHtml = function(element, html) {
    return element.attr('ng-bind-html-unsafe', html);
  };

  roundStep = function(value, precision, step, floor) {
    var decimals, remainder, roundedValue, steppedValue;

    if (floor == null) {
      floor = 0;
    }
    if (step == null) {
      step = 1 / Math.pow(10, precision);
    }
    remainder = (value - floor) % step;
    steppedValue = remainder > (step / 2) ? value + step - remainder : value - remainder;
    decimals = Math.pow(10, precision);
    roundedValue = steppedValue * decimals / decimals;
    return roundedValue.toFixed(precision);
  };

  inputEvents = {
    mouse: {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    },
    touch: {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    }
  };

    sliderDirective = function ($timeout,$window) {
    return {
      restrict: 'EA',
      scope: {
        floor: '@',
        ceiling: '@',
        step: '@',
        precision: '@',
        ngModel: '=?',
        ngModelLow: '=?',
        ngModelHigh: '=?',
        translate: '&'
      },
      template: '<span class="bar"></span><span class="bar selection"></span><span class="pointer"></span><span class="pointer"></span><span class="bubble selection"></span><span ng-bind-html-unsafe="translate({value: floor})" class="bubble limit"></span><span ng-bind-html-unsafe="translate({value: ceiling})" class="bubble limit"></span><span class="bubble"></span><span class="bubble"></span><span class="bubble"></span>',
      compile: function(element, attributes) {
        var ceilBub, cmbBub, e, flrBub, fullBar, highBub, lowBub, maxPtr, minPtr, range, refHigh, refLow, selBar, selBub, watchables, _i, _len, _ref, _ref1;

        if (attributes.translate) {
          attributes.$set('translate', "" + attributes.translate + "(value)");
        }
        range = (attributes.ngModel == null) && ((attributes.ngModelLow != null) && (attributes.ngModelHigh != null));
        _ref = (function() {
          var _i, _len, _ref, _results;

          _ref = element.children();
          _results = [];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            e = _ref[_i];
            _results.push(angularize(e));
          }
          return _results;
        })(), fullBar = _ref[0], selBar = _ref[1], minPtr = _ref[2], maxPtr = _ref[3], selBub = _ref[4], flrBub = _ref[5], ceilBub = _ref[6], lowBub = _ref[7], highBub = _ref[8], cmbBub = _ref[9];
        refLow = range ? 'ngModelLow' : 'ngModel';
        refHigh = 'ngModelHigh';
        bindHtml(selBub, "'Range: ' + translate({value: diff})");
        bindHtml(lowBub, "translate({value: " + refLow + "})");
        bindHtml(highBub, "translate({value: " + refHigh + "})");
        bindHtml(cmbBub, "translate({value: " + refLow + "}) + ' - ' + translate({value: " + refHigh + "})");
        if (!range) {
          _ref1 = [selBar, maxPtr, selBub, highBub, cmbBub];
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
            element = _ref1[_i];
            element.remove();
          }
        }
        watchables = [refLow, 'floor', 'ceiling'];
        if (range) {
          watchables.push(refHigh);
        }
        return {
          post: function(scope, element, attributes) {
            var barWidth, boundToInputs, dimensions, maxOffset, maxValue, minOffset, minValue, ngDocument, offsetRange, pointerHalfWidth, updateDOM, valueRange, w, _j, _len1;

            boundToInputs = false;
            ngDocument = angularize(document);
            if (!attributes.translate) {
              scope.translate = function(value) {
                return value.value;
              };
            }
            pointerHalfWidth = barWidth = minOffset = maxOffset = minValue = maxValue = valueRange = offsetRange = void 0;
            dimensions = function() {
              var value, _j, _len1, _ref2, _ref3;

              if ((_ref2 = scope.precision) == null) {
                scope.precision = 0;
              }
              if ((_ref3 = scope.step) == null) {
                scope.step = 1;
              }
              for (_j = 0, _len1 = watchables.length; _j < _len1; _j++) {
                value = watchables[_j];
                scope[value] = roundStep(parseFloat(scope[value]), parseInt(scope.precision), parseFloat(scope.step), parseFloat(scope.floor));
              }
              scope.diff = roundStep(scope[refHigh] - scope[refLow], parseInt(scope.precision), parseFloat(scope.step), parseFloat(scope.floor));
              pointerHalfWidth = halfWidth(minPtr);
              barWidth = width(fullBar);
              minOffset = 0;
              maxOffset = barWidth - width(minPtr);
              minValue = parseFloat(attributes.floor);
              maxValue = parseFloat(attributes.ceiling);
              valueRange = maxValue - minValue;
              return offsetRange = maxOffset - minOffset;
            };
            updateDOM = function() {
              var adjustBubbles, bindToInputEvents, fitToBar, percentOffset, percentToOffset, percentValue, setBindings, setPointers;

              dimensions();
              percentOffset = function(offset) {
                return ((offset - minOffset) / offsetRange) * 100;
              };
              percentValue = function(value) {
                return ((value - minValue) / valueRange) * 100;
              };
              percentToOffset = function(percent) {
                return pixelize(percent * offsetRange / 100);
              };
              fitToBar = function(element) {
                return offset(element, pixelize(Math.min(Math.max(0, offsetLeft(element)), barWidth - width(element))));
              };
              setPointers = function() {
                var newHighValue, newLowValue;

                offset(ceilBub, pixelize(barWidth - width(ceilBub)));
                newLowValue = percentValue(scope[refLow]);
                offset(minPtr, percentToOffset(newLowValue));
                offset(lowBub, pixelize(offsetLeft(minPtr) - (halfWidth(lowBub)) + pointerHalfWidth));
                if (range) {
                  newHighValue = percentValue(scope[refHigh]);
                  offset(maxPtr, percentToOffset(newHighValue));
                  offset(highBub, pixelize(offsetLeft(maxPtr) - (halfWidth(highBub)) + pointerHalfWidth));
                  offset(selBar, pixelize(offsetLeft(minPtr) + pointerHalfWidth));
                  selBar.css({
                    width: percentToOffset(newHighValue - newLowValue)
                  });
                  offset(selBub, pixelize(offsetLeft(selBar) + halfWidth(selBar) - halfWidth(selBub)));
                  return offset(cmbBub, pixelize(offsetLeft(selBar) + halfWidth(selBar) - halfWidth(cmbBub)));
                }
              };
              adjustBubbles = function() {
                var bubToAdjust;

                fitToBar(lowBub);
                bubToAdjust = highBub;
                if (range) {
                  fitToBar(highBub);
                  fitToBar(selBub);
                  if (gap(lowBub, highBub) < 10) {
                    hide(lowBub);
                    hide(highBub);
                    fitToBar(cmbBub);
                    show(cmbBub);
                    bubToAdjust = cmbBub;
                  } else {
                    show(lowBub);
                    show(highBub);
                    hide(cmbBub);
                    bubToAdjust = highBub;
                  }
                }
                if (gap(flrBub, lowBub) < 5) {
                  hide(flrBub);
                } else {
                  if (range) {
                    if (gap(flrBub, bubToAdjust) < 5) {
                      hide(flrBub);
                    } else {
                      show(flrBub);
                    }
                  } else {
                    show(flrBub);
                  }
                }
                if (gap(lowBub, ceilBub) < 5) {
                  return hide(ceilBub);
                } else {
                  if (range) {
                    if (gap(bubToAdjust, ceilBub) < 5) {
                      return hide(ceilBub);
                    } else {
                      return show(ceilBub);
                    }
                  } else {
                    return show(ceilBub);
                  }
                }
              };
              bindToInputEvents = function(pointer, ref, events) {
                var onEnd, onMove, onStart;

                onEnd = function() {
                  pointer.removeClass('active');
                  ngDocument.unbind(events.move);
                  return ngDocument.unbind(events.end);
                };
                  onMove = function (customEvent) {
                  var eventX, newOffset, newPercent, newValue;
                      myEvent = $window.event || customEvent;
                      eventX = myEvent.clientX || myEvent.touches[0].clientX;
                  newOffset = eventX - element[0].getBoundingClientRect().left - pointerHalfWidth;
                  newOffset = Math.max(Math.min(newOffset, maxOffset), minOffset);
                  newPercent = percentOffset(newOffset);
                  newValue = minValue + (valueRange * newPercent / 100.0);
                  if (range) {
                    if (ref === refLow) {
                      if (newValue > scope[refHigh]) {
                        ref = refHigh;
                        minPtr.removeClass('active');
                        maxPtr.addClass('active');
                      }
                    } else {
                      if (newValue < scope[refLow]) {
                        ref = refLow;
                        maxPtr.removeClass('active');
                        minPtr.addClass('active');
                      }
                    }
                  }
                  newValue = roundStep(newValue, parseInt(scope.precision), parseFloat(scope.step), parseFloat(scope.floor));
                  scope[ref] = newValue;
                  return scope.$apply();
                };
                onStart = function(event) {
                  pointer.addClass('active');
                  dimensions();
                  event.stopPropagation();
                  event.preventDefault();
                  ngDocument.bind(events.move, onMove);
                  return ngDocument.bind(events.end, onEnd);
                };
                return pointer.bind(events.start, onStart);
              };
              setBindings = function() {
                var bind, inputMethod, _j, _len1, _ref2, _results;

                boundToInputs = true;
                bind = function(method) {
                  bindToInputEvents(minPtr, refLow, inputEvents[method]);
                  return bindToInputEvents(maxPtr, refHigh, inputEvents[method]);
                };
                _ref2 = ['touch', 'mouse'];
                _results = [];
                for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                  inputMethod = _ref2[_j];
                  _results.push(bind(inputMethod));
                }
                return _results;
              };
              setPointers();
              adjustBubbles();
              if (!boundToInputs) {
                return setBindings();
              }
            };
            $timeout(updateDOM);
            for (_j = 0, _len1 = watchables.length; _j < _len1; _j++) {
              w = watchables[_j];
              scope.$watch(w, updateDOM);
            }
            return window.addEventListener("resize", updateDOM);
          }
        };
      }
    };
  };

    qualifiedDirectiveDefinition = ['$timeout', '$window', sliderDirective];

  module = function(window, angular) {
    return angular.module(MODULE_NAME, []).directive(SLIDER_TAG, qualifiedDirectiveDefinition);
  };

  module(window, window.angular);

}).call(this);