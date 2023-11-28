var Jh=Object.defineProperty;var Xh=(e,t,n)=>t in e?Jh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>(Xh(e,typeof t!="symbol"?t+"":t,n),n),Bc=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var De=(e,t,n)=>(Bc(e,t,"read from private field"),n?n.call(e):t.get(e)),tn=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},jc=(e,t,n,r)=>(Bc(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var mi,z,pd,gn,Vc,fd,is,hd,tr={},md=[],Zh=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,jo=Array.isArray;function Bt(e,t){for(var n in t)e[n]=t[n];return e}function gd(e){var t=e.parentNode;t&&t.removeChild(e)}function C(e,t,n){var r,i,o,a={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?mi.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return qr(e,a,r,i,null)}function qr(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++pd,__i:-1};return i==null&&z.vnode!=null&&z.vnode(o),o}function zs(){return{current:null}}function j(e){return e.children}function ct(e,t){this.props=e,this.context=t}function Gr(e,t){if(t==null)return e.__?Gr(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Gr(e):null}function vd(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return vd(e)}}function os(e){(!e.__d&&(e.__d=!0)&&gn.push(e)&&!yo.__r++||Vc!==z.debounceRendering)&&((Vc=z.debounceRendering)||fd)(yo)}function yo(){var e,t,n,r,i,o,a,s,c;for(gn.sort(is);e=gn.shift();)e.__d&&(t=gn.length,r=void 0,i=void 0,o=void 0,s=(a=(n=e).__v).__e,(c=n.__P)&&(r=[],i=[],(o=Bt({},a)).__v=a.__v+1,Hs(c,o,a,n.__n,c.ownerSVGElement!==void 0,a.__h!=null?[s]:null,r,s??Gr(a),a.__h,i),o.__.__k[o.__i]=o,_d(r,o,i),o.__e!=s&&vd(o)),gn.length>t&&gn.sort(is));yo.__r=0}function yd(e,t,n,r,i,o,a,s,c,u,p){var d,h,f,m,g,x,v,b,y,_=0,w=r&&r.__k||md,E=w.length,k=E,T=t.length;for(n.__k=[],d=0;d<T;d++)(m=n.__k[d]=(m=t[d])==null||typeof m=="boolean"||typeof m=="function"?null:m.constructor==String||typeof m=="number"||typeof m=="bigint"?qr(null,m,null,null,m):jo(m)?qr(j,{children:m},null,null,null):m.__b>0?qr(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)!=null?(m.__=n,m.__b=n.__b+1,m.__i=d,(b=em(m,w,v=d+_,k))===-1?f=tr:(f=w[b]||tr,w[b]=void 0,k--),Hs(e,m,f,i,o,a,s,c,u,p),g=m.__e,(h=m.ref)&&f.ref!=h&&(f.ref&&Ws(f.ref,null,m),p.push(h,m.__c||g,m)),x==null&&g!=null&&(x=g),(y=f===tr||f.__v===null)?b==-1&&_--:b!==v&&(b===v+1?_++:b>v?k>T-v?_+=b-v:_--:_=b<v&&b==v-1?b-v:0),v=d+_,typeof m.type=="function"?(b!==v||f.__k===m.__k?c=bd(m,c,e):m.__d!==void 0?c=m.__d:g&&(c=g.nextSibling),m.__d=void 0):g&&(c=b!==v||y?xd(e,g,c):g.nextSibling),typeof n.type=="function"&&(n.__d=c)):(f=w[d])&&f.key==null&&f.__e&&(f.__e==c&&(c=Gr(f),typeof n.type=="function"&&(n.__d=c)),as(f,f,!1),w[d]=null);for(n.__e=x,d=E;d--;)w[d]!=null&&(typeof n.type=="function"&&w[d].__e!=null&&w[d].__e==c&&(n.__d=w[d].__e.nextSibling),as(w[d],w[d]))}function bd(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?bd(r,t,n):xd(n,r.__e,t));return t}function Vt(e,t){return t=t||[],e==null||typeof e=="boolean"||(jo(e)?e.some(function(n){Vt(n,t)}):t.push(e)),t}function xd(e,t,n){return t!=n&&e.insertBefore(t,n||null),t.nextSibling}function em(e,t,n,r){var i=e.key,o=e.type,a=n-1,s=n+1,c=t[n];if(c===null||c&&i==c.key&&o===c.type)return n;if(r>(c!=null?1:0))for(;a>=0||s<t.length;){if(a>=0){if((c=t[a])&&i==c.key&&o===c.type)return a;a--}if(s<t.length){if((c=t[s])&&i==c.key&&o===c.type)return s;s++}}return-1}function tm(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||bo(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||bo(e,o,t[o],n[o],r)}function zc(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Zh.test(t)?n:n+"px"}function bo(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||zc(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||zc(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,o?Wc:Hc,o)):e.removeEventListener(t,o?Wc:Hc,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Hc(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(z.event?z.event(e):e)}function Wc(e){return this.l[e.type+!0](z.event?z.event(e):e)}function Hs(e,t,n,r,i,o,a,s,c,u){var p,d,h,f,m,g,x,v,b,y,_,w,E,k,T,R=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(c=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(p=z.__b)&&p(t);e:if(typeof R=="function")try{if(v=t.props,b=(p=R.contextType)&&r[p.__c],y=p?b?b.props.value:p.__:r,n.__c?x=(d=t.__c=n.__c).__=d.__E:("prototype"in R&&R.prototype.render?t.__c=d=new R(v,y):(t.__c=d=new ct(v,y),d.constructor=R,d.render=rm),b&&b.sub(d),d.props=v,d.state||(d.state={}),d.context=y,d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),R.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Bt({},d.__s)),Bt(d.__s,R.getDerivedStateFromProps(v,d.__s))),f=d.props,m=d.state,d.__v=t,h)R.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(R.getDerivedStateFromProps==null&&v!==f&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(v,y),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(v,d.__s,y)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=v,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(P){P&&(P.__=t)}),_=0;_<d._sb.length;_++)d.__h.push(d._sb[_]);d._sb=[],d.__h.length&&a.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(v,d.__s,y),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(f,m,g)})}if(d.context=y,d.props=v,d.__P=e,d.__e=!1,w=z.__r,E=0,"prototype"in R&&R.prototype.render){for(d.state=d.__s,d.__d=!1,w&&w(t),p=d.render(d.props,d.state,d.context),k=0;k<d._sb.length;k++)d.__h.push(d._sb[k]);d._sb=[]}else do d.__d=!1,w&&w(t),p=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++E<25);d.state=d.__s,d.getChildContext!=null&&(r=Bt(Bt({},r),d.getChildContext())),h||d.getSnapshotBeforeUpdate==null||(g=d.getSnapshotBeforeUpdate(f,m)),yd(e,jo(T=p!=null&&p.type===j&&p.key==null?p.props.children:p)?T:[T],t,n,r,i,o,a,s,c,u),d.base=t.__e,t.__h=null,d.__h.length&&a.push(d),x&&(d.__E=d.__=null)}catch(P){t.__v=null,c||o!=null?(t.__e=s,t.__h=!!c,o[o.indexOf(s)]=null):(t.__e=n.__e,t.__k=n.__k),z.__e(P,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=nm(n.__e,t,n,r,i,o,a,c,u);(p=z.diffed)&&p(t)}function _d(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Ws(n[r],n[++r],n[++r]);z.__c&&z.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){z.__e(o,i.__v)}})}function nm(e,t,n,r,i,o,a,s,c){var u,p,d,h=n.props,f=t.props,m=t.type,g=0;if(m==="svg"&&(i=!0),o!=null){for(;g<o.length;g++)if((u=o[g])&&"setAttribute"in u==!!m&&(m?u.localName===m:u.nodeType===3)){e=u,o[g]=null;break}}if(e==null){if(m===null)return document.createTextNode(f);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,f.is&&f),o=null,s=!1}if(m===null)h===f||s&&e.data===f||(e.data=f);else{if(o=o&&mi.call(e.childNodes),p=(h=n.props||tr).dangerouslySetInnerHTML,d=f.dangerouslySetInnerHTML,!s){if(o!=null)for(h={},g=0;g<e.attributes.length;g++)h[e.attributes[g].name]=e.attributes[g].value;(d||p)&&(d&&(p&&d.__html==p.__html||d.__html===e.innerHTML)||(e.innerHTML=d&&d.__html||""))}if(tm(e,f,h,i,s),d)t.__k=[];else if(yd(e,jo(g=t.props.children)?g:[g],t,n,r,i&&m!=="foreignObject",o,a,o?o[0]:n.__k&&Gr(n,0),s,c),o!=null)for(g=o.length;g--;)o[g]!=null&&gd(o[g]);s||("value"in f&&(g=f.value)!==void 0&&(g!==e.value||m==="progress"&&!g||m==="option"&&g!==h.value)&&bo(e,"value",g,h.value,!1),"checked"in f&&(g=f.checked)!==void 0&&g!==e.checked&&bo(e,"checked",g,h.checked,!1))}return e}function Ws(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){z.__e(r,n)}}function as(e,t,n){var r,i;if(z.unmount&&z.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ws(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){z.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&as(r[i],t,n||typeof e.type!="function");n||e.__e==null||gd(e.__e),e.__=e.__e=e.__d=void 0}function rm(e,t,n){return this.constructor(e,n)}function Yr(e,t,n){var r,i,o,a;z.__&&z.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],a=[],Hs(t,e=(!r&&n||t).__k=C(j,null,[e]),i||tr,tr,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?mi.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r,a),_d(o,e,a)}function wd(e,t){Yr(e,t,wd)}function im(e,t,n){var r,i,o,a,s=Bt({},e.props);for(o in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o]===void 0&&a!==void 0?a[o]:t[o];return arguments.length>2&&(s.children=arguments.length>3?mi.call(arguments,2):n),qr(e.type,s,r||e.key,i||e.ref,null)}function Ot(e,t){var n={__c:t="__cC"+hd++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&i.some(function(s){s.__e=!0,os(s)})},this.sub=function(a){i.push(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){i.splice(i.indexOf(a),1),s&&s.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}mi=md.slice,z={__e:function(e,t,n,r){for(var i,o,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(s){e=s}throw e}},pd=0,ct.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Bt({},this.state),typeof e=="function"&&(e=e(Bt({},n),this.props)),e&&Bt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),os(this))},ct.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),os(this))},ct.prototype.render=j,gn=[],fd=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,is=function(e,t){return e.__v.__b-t.__v.__b},yo.__r=0,hd=0;var Ht,be,ka,Gc,dr=0,Ed=[],Hi=[],Yc=z.__b,Qc=z.__r,Kc=z.diffed,Jc=z.__c,Xc=z.unmount;function Rn(e,t){z.__h&&z.__h(be,e,dr||t),dr=0;var n=be.__H||(be.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Hi}),n.__[e]}function ee(e){return dr=1,Gs(Nd,e)}function Gs(e,t,n){var r=Rn(Ht++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Nd(void 0,t),function(s){var c=r.__N?r.__N[0]:r.__[0],u=r.t(c,s);c!==u&&(r.__N=[u,r.__[1]],r.__c.setState({}))}],r.__c=be,!be.u)){var i=function(s,c,u){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(h){return h.__c});if(p.every(function(h){return!h.__N}))return!o||o.call(this,s,c,u);var d=!1;return p.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(d=!0)}}),!(!d&&r.__c.props===s)&&(!o||o.call(this,s,c,u))};be.u=!0;var o=be.shouldComponentUpdate,a=be.componentWillUpdate;be.componentWillUpdate=function(s,c,u){if(this.__e){var p=o;o=void 0,i(s,c,u),o=p}a&&a.call(this,s,c,u)},be.shouldComponentUpdate=i}return r.__N||r.__}function te(e,t){var n=Rn(Ht++,3);!z.__s&&Ys(n.__H,t)&&(n.__=e,n.i=t,be.__H.__h.push(n))}function hn(e,t){var n=Rn(Ht++,4);!z.__s&&Ys(n.__H,t)&&(n.__=e,n.i=t,be.__h.push(n))}function se(e){return dr=5,ce(function(){return{current:e}},[])}function kd(e,t,n){dr=6,hn(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ce(e,t){var n=Rn(Ht++,7);return Ys(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ue(e,t){return dr=8,ce(function(){return e},t)}function Lt(e){var t=be.context[e.__c],n=Rn(Ht++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(be)),t.props.value):e.__}function Td(e,t){z.useDebugValue&&z.useDebugValue(t?t(e):e)}function om(e){var t=Rn(Ht++,10),n=ee();return t.__=e,be.componentDidCatch||(be.componentDidCatch=function(r,i){t.__&&t.__(r,i),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Sd(){var e=Rn(Ht++,11);if(!e.__){for(var t=be.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function am(){for(var e;e=Ed.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Wi),e.__H.__h.forEach(ss),e.__H.__h=[]}catch(t){e.__H.__h=[],z.__e(t,e.__v)}}z.__b=function(e){be=null,Yc&&Yc(e)},z.__r=function(e){Qc&&Qc(e),Ht=0;var t=(be=e.__c).__H;t&&(ka===be?(t.__h=[],be.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Hi,n.__N=n.i=void 0})):(t.__h.forEach(Wi),t.__h.forEach(ss),t.__h=[],Ht=0)),ka=be},z.diffed=function(e){Kc&&Kc(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ed.push(t)!==1&&Gc===z.requestAnimationFrame||((Gc=z.requestAnimationFrame)||sm)(am)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Hi&&(n.__=n.__V),n.i=void 0,n.__V=Hi})),ka=be=null},z.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Wi),n.__h=n.__h.filter(function(r){return!r.__||ss(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],z.__e(r,n.__v)}}),Jc&&Jc(e,t)},z.unmount=function(e){Xc&&Xc(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Wi(r)}catch(i){t=i}}),n.__H=void 0,t&&z.__e(t,n.__v))};var Zc=typeof requestAnimationFrame=="function";function sm(e){var t,n=function(){clearTimeout(r),Zc&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Zc&&(t=requestAnimationFrame(n))}function Wi(e){var t=be,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),be=t}function ss(e){var t=be;e.__c=e.__(),be=t}function Ys(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Nd(e,t){return typeof t=="function"?t(e):t}function Id(e,t){for(var n in t)e[n]=t[n];return e}function cs(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function xo(e){this.props=e}function _o(e,t){function n(i){var o=this.props.ref,a=o==i.ref;return!a&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!a:cs(this.props,i)}function r(i){return this.shouldComponentUpdate=n,C(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(xo.prototype=new ct).isPureReactComponent=!0,xo.prototype.shouldComponentUpdate=function(e,t){return cs(this.props,e)||cs(this.state,t)};var el=z.__b;z.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),el&&el(e)};var cm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function me(e){function t(n){var r=Id({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=cm,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var tl=function(e,t){return e==null?null:Vt(Vt(e).map(t))},It={map:tl,forEach:tl,count:function(e){return e?Vt(e).length:0},only:function(e){var t=Vt(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Vt},lm=z.__e;z.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}lm(e,t,n,r)};var nl=z.unmount;function Cd(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=Id({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Cd(r,t,n)})),e}function Od(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Od(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function nr(){this.__u=0,this.t=null,this.__b=null}function Ad(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Qs(e){var t,n,r;function i(o){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return C(n,o)}return i.displayName="Lazy",i.__f=!0,i}function Xn(){this.u=null,this.o=null}z.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),nl&&nl(e)},(nr.prototype=new ct).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=Ad(r.__v),o=!1,a=function(){o||(o=!0,n.__R=null,i?i(s):s())};n.__R=a;var s=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=Od(u,u.__c.__P,u.__c.__O)}var p;for(r.setState({__a:r.__b=null});p=r.t.pop();)p.forceUpdate()}},c=t.__h===!0;r.__u++||c||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},nr.prototype.componentWillUnmount=function(){this.t=[]},nr.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Cd(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&C(j,null,e.fallback);return i&&(i.__h=null),[C(j,null,t.__a?null:e.children),i]};var rl=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function um(e){return this.getChildContext=function(){return e.context},e.children}function dm(e){var t=this,n=e.i;t.componentWillUnmount=function(){Yr(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),Yr(C(um,{context:t.context},e.__v),t.l)}function Vo(e,t){var n=C(dm,{__v:e,i:t});return n.containerInfo=t,n}(Xn.prototype=new ct).__a=function(e){var t=this,n=Ad(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),rl(t,e,r)):i()};n?n(o):o()}},Xn.prototype.render=function(e){this.u=null,this.o=new Map;var t=Vt(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Xn.prototype.componentDidUpdate=Xn.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){rl(e,n,t)})};var $d=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,pm=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,fm=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,hm=/[A-Z0-9]/g,mm=typeof document<"u",gm=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Ks(e,t,n){return t.__k==null&&(t.textContent=""),Yr(e,t),typeof n=="function"&&n(),e?e.__c:null}function Rd(e,t,n){return wd(e,t),typeof n=="function"&&n(),e?e.__c:null}ct.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(ct.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var il=z.event;function vm(){}function ym(){return this.cancelBubble}function bm(){return this.defaultPrevented}z.event=function(e){return il&&(e=il(e)),e.persist=vm,e.isPropagationStopped=ym,e.isDefaultPrevented=bm,e.nativeEvent=e};var Js,xm={enumerable:!1,configurable:!0,get:function(){return this.class}},ol=z.vnode;z.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var o in n){var a=n[o];if(!(o==="value"&&"defaultValue"in n&&a==null||mm&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&a===!0?a="":s==="ondoubleclick"?o="ondblclick":s!=="onchange"||r!=="input"&&r!=="textarea"||gm(n.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":fm.test(o)?o=s:r.indexOf("-")===-1&&pm.test(o)?o=o.replace(hm,"-$&").toLowerCase():a===null&&(a=void 0):s=o="oninput",s==="oninput"&&i[o=s]&&(o="oninputCapture"),i[o]=a}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Vt(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=Vt(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",xm)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=$d,ol&&ol(e)};var al=z.__r;z.__r=function(e){al&&al(e),Js=e.__c};var sl=z.diffed;z.diffed=function(e){sl&&sl(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Js=null};var Pd={ReactCurrentDispatcher:{current:{readContext:function(e){return Js.__n[e.__c].props.value}}}},_m="17.0.2";function Dd(e){return C.bind(null,e)}function At(e){return!!e&&e.$$typeof===$d}function Ld(e){return At(e)&&e.type===j}function gi(e){return At(e)?im.apply(null,arguments):e}function Md(e){return!!e.__k&&(Yr(null,e),!0)}function Fd(e){return e&&(e.base||e.nodeType===1&&e)||null}var Ud=function(e,t){return e(t)},zo=function(e,t){return e(t)},qd=j;function vi(e){e()}function Bd(e){return e}function jd(){return[!1,vi]}var Vd=hn,zd=At;function Hd(e,t){var n=t(),r=ee({h:{__:n,v:t}}),i=r[0].h,o=r[1];return hn(function(){i.__=n,i.v=t,Ta(i)&&o({h:i})},[e,n,t]),te(function(){return Ta(i)&&o({h:i}),e(function(){Ta(i)&&o({h:i})})},[e]),n}function Ta(e){var t,n,r=e.v,i=e.__;try{var o=r();return!((t=i)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var Oe={useState:ee,useId:Sd,useReducer:Gs,useEffect:te,useLayoutEffect:hn,useInsertionEffect:Vd,useTransition:jd,useDeferredValue:Bd,useSyncExternalStore:Hd,startTransition:vi,useRef:se,useImperativeHandle:kd,useMemo:ce,useCallback:ue,useContext:Lt,useDebugValue:Td,version:"17.0.2",Children:It,render:Ks,hydrate:Rd,unmountComponentAtNode:Md,createPortal:Vo,createElement:C,createContext:Ot,createFactory:Dd,cloneElement:gi,createRef:zs,Fragment:j,isValidElement:At,isElement:zd,isFragment:Ld,findDOMNode:Fd,Component:ct,PureComponent:xo,memo:_o,forwardRef:me,flushSync:zo,unstable_batchedUpdates:Ud,StrictMode:qd,Suspense:nr,SuspenseList:Xn,lazy:Qs,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Pd};const Wd=Object.freeze(Object.defineProperty({__proto__:null,Children:It,Component:ct,Fragment:j,PureComponent:xo,StrictMode:qd,Suspense:nr,SuspenseList:Xn,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Pd,cloneElement:gi,createContext:Ot,createElement:C,createFactory:Dd,createPortal:Vo,createRef:zs,default:Oe,findDOMNode:Fd,flushSync:zo,forwardRef:me,hydrate:Rd,isElement:zd,isFragment:Ld,isValidElement:At,lazy:Qs,memo:_o,render:Ks,startTransition:vi,unmountComponentAtNode:Md,unstable_batchedUpdates:Ud,useCallback:ue,useContext:Lt,useDebugValue:Td,useDeferredValue:Bd,useEffect:te,useErrorBoundary:om,useId:Sd,useImperativeHandle:kd,useInsertionEffect:Vd,useLayoutEffect:hn,useMemo:ce,useReducer:Gs,useRef:se,useState:ee,useSyncExternalStore:Hd,useTransition:jd,version:_m},Symbol.toStringTag,{value:"Module"}));function Gd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function wm(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Yd={exports:{}},Qd={};const Kd=wm(Wd);var Jd={exports:{}},Xd={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pr=Kd;function Em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var km=typeof Object.is=="function"?Object.is:Em,Tm=pr.useState,Sm=pr.useEffect,Nm=pr.useLayoutEffect,Im=pr.useDebugValue;function Cm(e,t){var n=t(),r=Tm({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return Nm(function(){i.value=n,i.getSnapshot=t,Sa(i)&&o({inst:i})},[e,n,t]),Sm(function(){return Sa(i)&&o({inst:i}),e(function(){Sa(i)&&o({inst:i})})},[e]),Im(n),n}function Sa(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!km(e,n)}catch{return!0}}function Om(e,t){return t()}var Am=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Om:Cm;Xd.useSyncExternalStore=pr.useSyncExternalStore!==void 0?pr.useSyncExternalStore:Am;Jd.exports=Xd;var $m=Jd.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Kd,Rm=$m;function Pm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dm=typeof Object.is=="function"?Object.is:Pm,Lm=Rm.useSyncExternalStore,Mm=Ho.useRef,Fm=Ho.useEffect,Um=Ho.useMemo,qm=Ho.useDebugValue;Qd.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=Mm(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Um(function(){function c(f){if(!u){if(u=!0,p=f,f=r(f),i!==void 0&&a.hasValue){var m=a.value;if(i(m,f))return d=m}return d=f}if(m=d,Dm(p,f))return m;var g=r(f);return i!==void 0&&i(m,g)?m:(p=f,d=g)}var u=!1,p,d,h=n===void 0?null:n;return[function(){return c(t())},h===null?void 0:function(){return c(h())}]},[t,n,r,i]);var s=Lm(e,o[0],o[1]);return Fm(function(){a.hasValue=!0,a.value=s},[s]),qm(s),s};Yd.exports=Qd;var Bm=Yd.exports;/**
 * @tanstack/store/src/index.ts
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */class jm{constructor(t,n){X(this,"listeners",new Set);X(this,"_batching",!1);X(this,"_flushing",0);X(this,"_nextPriority",null);X(this,"subscribe",t=>{var r,i;this.listeners.add(t);const n=(i=(r=this.options)==null?void 0:r.onSubscribe)==null?void 0:i.call(r,t,this);return()=>{this.listeners.delete(t),n==null||n()}});X(this,"setState",(t,n)=>{var o,a,s,c,u;const r=this.state;this.state=(o=this.options)!=null&&o.updateFn?this.options.updateFn(r)(t):t(r);const i=(n==null?void 0:n.priority)??((a=this.options)==null?void 0:a.defaultPriority)??"high";this._nextPriority===null?this._nextPriority=i:this._nextPriority==="high"?this._nextPriority=i:this._nextPriority=((s=this.options)==null?void 0:s.defaultPriority)??"high",(u=(c=this.options)==null?void 0:c.onUpdate)==null||u.call(c,{priority:this._nextPriority}),this._flush()});X(this,"_flush",()=>{if(this._batching)return;const t=++this._flushing;this.listeners.forEach(n=>{this._flushing===t&&n({priority:this._nextPriority??"high"})})});X(this,"batch",t=>{if(this._batching)return t();this._batching=!0,t(),this._batching=!1,this._flush()});this.state=t,this.options=n}}/**
 * @tanstack/react-store/src/index.tsx
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vm(e,t=n=>n){return Bm.useSyncExternalStoreWithSelector(e.subscribe,()=>e.state,()=>e.state,t,zm)}function zm(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}var Hm=!0,Na="Invariant failed";function qt(e,t){if(!e){if(Hm)throw new Error(Na);var n=typeof t=="function"?t():t,r=n?"".concat(Na,": ").concat(n):Na;throw new Error(r)}}var Wm=!0;function Xs(e,t){if(!Wm){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}/**
 * @tanstack/router-core/src/index.ts
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const cl="pushstate",ll="popstate",Zd="beforeunload",ep=e=>(e.preventDefault(),e.returnValue=""),ul=()=>{removeEventListener(Zd,ep,{capture:!0})};function tp(e){let t=e.getLocation(),n=()=>{},r=new Set,i=[],o=[];const a=()=>{var u,p;if(i.length){(u=i[0])==null||u.call(i,a,()=>{i=[],ul()});return}for(;o.length;)(p=o.shift())==null||p();e.subscriber||c()},s=u=>{o.push(u),a()},c=()=>{t=e.getLocation(),r.forEach(u=>u())};return{get location(){return t},subscribe:u=>(r.size===0&&(n=typeof e.subscriber=="function"?e.subscriber(c):()=>{}),r.add(u),()=>{r.delete(u),r.size===0&&n()}),push:(u,p)=>{s(()=>{e.pushState(u,p)})},replace:(u,p)=>{s(()=>{e.replaceState(u,p)})},go:u=>{s(()=>{e.go(u)})},back:()=>{s(()=>{e.back()})},forward:()=>{s(()=>{e.forward()})},createHref:u=>e.createHref(u),block:u=>(i.push(u),i.length===1&&addEventListener(Zd,ep,{capture:!0}),()=>{i=i.filter(p=>p!==u),i.length||ul()})}}function Gm(e){const t=(e==null?void 0:e.getHref)??(()=>`${window.location.pathname}${window.location.search}${window.location.hash}`),n=(e==null?void 0:e.createHref)??(i=>i);return tp({getLocation:()=>np(t(),history.state),subscriber:i=>{window.addEventListener(cl,i),window.addEventListener(ll,i);var o=window.history.pushState;window.history.pushState=function(){let s=o.apply(history,arguments);return i(),s};var a=window.history.replaceState;return window.history.replaceState=function(){let s=a.apply(history,arguments);return i(),s},()=>{window.history.pushState=o,window.history.replaceState=a,window.removeEventListener(cl,i),window.removeEventListener(ll,i)}},pushState:(i,o)=>{window.history.pushState({...o,key:wo()},"",n(i))},replaceState:(i,o)=>{window.history.replaceState({...o,key:wo()},"",n(i))},back:()=>window.history.back(),forward:()=>window.history.forward(),go:i=>window.history.go(i),createHref:i=>n(i)})}function Ym(e={initialEntries:["/"]}){const t=e.initialEntries;let n=e.initialIndex??t.length-1,r={};return tp({getLocation:()=>np(t[n],r),subscriber:!1,pushState:(o,a)=>{r={...a,key:wo()},t.push(o),n++},replaceState:(o,a)=>{r={...a,key:wo()},t[n]=o},back:()=>{n--},forward:()=>{n=Math.min(n+1,t.length-1)},go:o=>window.history.go(o),createHref:o=>o})}function np(e,t){let n=e.indexOf("#"),r=e.indexOf("?");return{href:e,pathname:e.substring(0,n>0?r>0?Math.min(n,r):n:r>0?r:e.length),hash:n>-1?e.substring(n):"",search:r>-1?e.slice(r,n===-1?void 0:n):"",state:t}}function wo(){return(Math.random()+1).toString(36).substring(7)}function Zs(e){return e[e.length-1]}function Qm(e){return typeof e=="function"}function vn(e,t){return Qm(e)?e(t):e}function rp(e,t){return t.reduce((n,r)=>(n[r]=e[r],n),{})}function Pr(e,t){if(e===t)return e;const n=t,r=Array.isArray(e)&&Array.isArray(n);if(r||Eo(e)&&Eo(n)){const i=r?e.length:Object.keys(e).length,o=r?n:Object.keys(n),a=o.length,s=r?[]:{};let c=0;for(let u=0;u<a;u++){const p=r?u:o[u];s[p]=Pr(e[p],n[p]),s[p]===e[p]&&c++}return i===a&&c===i?e:s}return n}function Eo(e){if(!dl(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!dl(n)||!n.hasOwnProperty("isPrototypeOf"))}function dl(e){return Object.prototype.toString.call(e)==="[object Object]"}function ko(e,t){return e===t?!0:typeof e!=typeof t?!1:Eo(e)&&Eo(t)?!Object.keys(t).some(n=>!ko(e[n],t[n])):Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((n,r)=>ko(n,t[r])):!1}function xn(e){return Wo(e.filter(Boolean).join("/"))}function Wo(e){return e.replace(/\/{2,}/g,"/")}function Km(e){return e==="/"?e:e.replace(/^\/{1,}/,"")}function ls(e){return e==="/"?e:e.replace(/\/{1,}$/,"")}function us(e){return ls(Km(e))}function pl(e,t,n){t=t.replace(new RegExp(`^${e}`),"/"),n=n.replace(new RegExp(`^${e}`),"/");let r=fr(t);const i=fr(n);i.forEach((a,s)=>{var c;if(a.value==="/")s?s===i.length-1&&r.push(a):r=[a];else if(a.value==="..")r.length>1&&((c=Zs(r))==null?void 0:c.value)==="/"&&r.pop(),r.pop();else{if(a.value===".")return;r.push(a)}});const o=xn([e,...r.map(a=>a.value)]);return Wo(o)}function fr(e){if(!e)return[];e=Wo(e);const t=[];if(e.slice(0,1)==="/"&&(e=e.substring(1),t.push({type:"pathname",value:"/"})),!e)return t;const n=e.split("/").filter(Boolean);return t.push(...n.map(r=>r==="$"||r==="*"?{type:"wildcard",value:r}:r.charAt(0)==="$"?{type:"param",value:r}:{type:"pathname",value:r})),e.slice(-1)==="/"&&(e=e.substring(1),t.push({type:"pathname",value:"/"})),t}function Ia(e,t,n=!1){const r=fr(e);return xn(r.map(i=>{if(i.type==="wildcard"){const o=t[i.value];return n?`${i.value}${o??""}`:o}return i.type==="param"?t[i.value.substring(1)]??"":i.value}))}function fl(e,t,n){const r=Jm(e,t,n);if(!(n.to&&!r))return r??{}}function Jm(e,t,n){t=e!="/"?t.substring(e.length):t;const r=`${n.to??"$"}`,i=fr(t),o=fr(r);t.startsWith("/")||i.unshift({type:"pathname",value:"/"}),r.startsWith("/")||o.unshift({type:"pathname",value:"/"});const a={};return(()=>{for(let c=0;c<Math.max(i.length,o.length);c++){const u=i[c],p=o[c],d=c>=i.length-1,h=c>=o.length-1;if(p){if(p.type==="wildcard")return u!=null&&u.value?(a["*"]=xn(i.slice(c).map(f=>f.value)),!0):!1;if(p.type==="pathname"){if(p.value==="/"&&!(u!=null&&u.value))return!0;if(u){if(n.caseSensitive){if(p.value!==u.value)return!1}else if(p.value.toLowerCase()!==u.value.toLowerCase())return!1}}if(!u)return!1;if(p.type==="param"){if((u==null?void 0:u.value)==="/")return!1;u.value.charAt(0)!=="$"&&(a[p.value.substring(1)]=u.value)}}if(!d&&h)return!!n.fuzzy}return!0})()?a:void 0}function Xm(e,t){var n,r,i,o="";for(n in e)if((i=e[n])!==void 0)if(Array.isArray(i))for(r=0;r<i.length;r++)o&&(o+="&"),o+=encodeURIComponent(n)+"="+encodeURIComponent(i[r]);else o&&(o+="&"),o+=encodeURIComponent(n)+"="+encodeURIComponent(i);return(t||"")+o}function hl(e){if(!e)return"";var t=decodeURIComponent(e);return t==="false"?!1:t==="true"?!0:+t*0===0&&+t+""===t?+t:t}function Zm(e){for(var t,n,r={},i=e.split("&");t=i.shift();)t=t.split("="),n=t.shift(),r[n]!==void 0?r[n]=[].concat(r[n],hl(t.shift())):r[n]=hl(t.shift());return r}const nn="__root__",qo=class qo{constructor(t){X(this,"init",t=>{var c,u;this.originalIndex=t.originalIndex,this.router=t.router;const n=this.options,r=!(n!=null&&n.path)&&!(n!=null&&n.id);this.parentRoute=(u=(c=this.options)==null?void 0:c.getParentRoute)==null?void 0:u.call(c),r?this.path=nn:qt(this.parentRoute,"Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");let i=r?nn:n.path;i&&i!=="/"&&(i=us(i));const o=(n==null?void 0:n.id)||i;let a=r?nn:xn([this.parentRoute.id===nn?"":this.parentRoute.id,o]);i===nn&&(i="/"),a!==nn&&(a=xn(["/",a]));const s=a===nn?"/":xn([this.parentRoute.fullPath,i]);this.path=i,this.id=a,this.fullPath=s,this.to=s});X(this,"addChildren",t=>(this.children=t,this));X(this,"update",t=>(Object.assign(this.options,t),this));this.options=t||{},this.isRoot=!(t!=null&&t.getParentRoute),qo.__onInit(this)}};X(qo,"__onInit",t=>{});let J=qo;class eg extends J{constructor(t){super(t)}}const tg=rg(JSON.parse),ng=ig(JSON.stringify,JSON.parse);function rg(e){return t=>{t.substring(0,1)==="?"&&(t=t.substring(1));let n=Zm(t);for(let r in n){const i=n[r];if(typeof i=="string")try{n[r]=e(i)}catch{}}return n}}function ig(e,t){function n(r){if(typeof r=="object"&&r!==null)try{return e(r)}catch{}else if(typeof r=="string"&&typeof t=="function")try{return t(r),e(r)}catch{}return r}return r=>{r={...r},r&&Object.keys(r).forEach(o=>{const a=r[o];typeof a>"u"||a===void 0?delete r[o]:Array.isArray(a)?r[o]=a.map(n):r[o]=n(a)});const i=Xm(r).toString();return i?`?${i}`:""}}const ml=["component","errorComponent","pendingComponent"];var cr,pi,lr,Bo,fi,hi,ur;class og{constructor(t){tn(this,cr,void 0);X(this,"subscribers",new Set);X(this,"subscribe",(t,n)=>{const r={eventType:t,fn:n};return this.subscribers.add(r),()=>{this.subscribers.delete(r)}});tn(this,pi,t=>{this.subscribers.forEach(n=>{n.eventType===t.type&&n.fn(t)})});X(this,"reset",()=>{this.__store.setState(t=>Object.assign(t,gl()))});X(this,"mount",()=>{this.safeLoad()});X(this,"update",t=>{if(this.options={...this.options,...t,context:{...this.options.context,...t==null?void 0:t.context}},!this.history||this.options.history&&this.options.history!==this.history){De(this,cr)&&De(this,cr).call(this),this.history=this.options.history??(ag?Ym():Gm());const i=De(this,fi).call(this);this.__store.setState(o=>({...o,resolvedLocation:i,location:i})),jc(this,cr,this.history.subscribe(()=>{this.safeLoad({next:De(this,fi).call(this,this.state.location)})}))}const{basepath:n,routeTree:r}=this.options;return this.basepath=`/${us(n??"")??""}`,r&&r!==this.routeTree&&De(this,Bo).call(this,r),this});X(this,"buildNext",t=>{const n=De(this,hi).call(this,t),r=this.matchRoutes(n.pathname,n.search);return De(this,hi).call(this,{...t,__matches:r})});X(this,"cancelMatches",()=>{this.state.matches.forEach(t=>{this.cancelMatch(t.id)})});X(this,"cancelMatch",t=>{var n,r;(r=(n=this.getRouteMatch(t))==null?void 0:n.abortController)==null||r.abort()});X(this,"safeLoad",async t=>{try{return this.load(t)}catch{}});X(this,"latestLoadPromise",Promise.resolve());X(this,"load",async t=>{const n=new Promise(async(r,i)=>{const o=this.state.resolvedLocation,a=!!(t!=null&&t.next&&o.href!==t.next.href);let s;const c=()=>this.latestLoadPromise!==n?this.latestLoadPromise:void 0;let u;De(this,pi).call(this,{type:"onBeforeLoad",from:o,to:(t==null?void 0:t.next)??this.state.location,pathChanged:a}),this.__store.batch(()=>{t!=null&&t.next&&this.__store.setState(p=>({...p,location:t.next})),u=this.matchRoutes(this.state.location.pathname,this.state.location.search,{throwOnError:t==null?void 0:t.throwOnError,debug:!0}),this.__store.setState(p=>({...p,status:"pending",pendingMatchIds:u.map(d=>d.id),matchesById:De(this,lr).call(this,p.matchesById,u)}))});try{try{await this.loadMatches(u)}catch{}if(s=c())return s;this.__store.setState(p=>({...p,status:"idle",resolvedLocation:p.location,matchIds:p.pendingMatchIds,pendingMatchIds:[]})),De(this,pi).call(this,{type:"onLoad",from:o,to:this.state.location,pathChanged:a}),r()}catch(p){if(s=c())return s;i(p)}});return this.latestLoadPromise=n,this.latestLoadPromise});tn(this,lr,(t,n)=>{const r={...t};let i=!1;return n.forEach(o=>{r[o.id]||(i=!0,r[o.id]=o)}),i?r:t});X(this,"getRoute",t=>{const n=this.routesById[t];return qt(n,`Route with id "${t}" not found`),n});X(this,"preloadRoute",async(t=this.state.location)=>{const n=this.buildNext(t),r=this.matchRoutes(n.pathname,n.search,{throwOnError:!0});return this.__store.setState(i=>({...i,matchesById:De(this,lr).call(this,i.matchesById,r)})),await this.loadMatches(r,{preload:!0,maxAge:t.maxAge}),r});X(this,"cleanMatches",()=>{const t=Date.now(),n=Object.values(this.state.matchesById).filter(r=>{const i=this.getRoute(r.routeId);return!this.state.matchIds.includes(r.id)&&!this.state.pendingMatchIds.includes(r.id)&&r.preloadInvalidAt<t&&(i.options.gcMaxAge?r.updatedAt+i.options.gcMaxAge<t:!0)}).map(r=>r.id);n.length&&this.__store.setState(r=>{const i={...r.matchesById};return n.forEach(o=>{delete i[o]}),{...r,matchesById:i}})});X(this,"matchRoutes",(t,n,r)=>{let i={},a=this.flatRoutes.find(p=>{const d=fl(this.basepath,ls(t),{to:p.fullPath,caseSensitive:p.options.caseSensitive??this.options.caseSensitive});return d?(i=d,!0):!1})||this.routesById.__root__,s=[a];for(;a!=null&&a.parentRoute;)a=a.parentRoute,a&&s.unshift(a);const c=s.map(p=>{let d;if(p.options.parseParams)try{const h=p.options.parseParams(i);Object.assign(i,h)}catch(h){if(d=new lg(h.message,{cause:h}),r!=null&&r.throwOnError)throw d;return d}}),u=s.map((p,d)=>{const h=Ia(p.path,i),f=p.options.key?p.options.key({params:i,search:n})??"":"",m=f?JSON.stringify(f):"",g=Ia(p.id,i,!0)+m,x=this.getRouteMatch(g);if(x)return{...x};const v=!!(p.options.loader||ml.some(y=>{var _;return(_=p.options[y])==null?void 0:_.preload}));return{id:g,key:m,routeId:p.id,params:i,pathname:xn([this.basepath,h]),updatedAt:Date.now(),invalidAt:9999999999999,preloadInvalidAt:9999999999999,routeSearch:{},search:{},status:v?"pending":"success",isFetching:!1,invalid:!1,error:void 0,paramsError:c[d],searchError:void 0,loaderData:void 0,loadPromise:Promise.resolve(),routeContext:void 0,context:void 0,abortController:new AbortController,fetchedAt:0}});return u.forEach((p,d)=>{const h=u[d-1],f=this.getRoute(p.routeId),m=(()=>{const x={search:(h==null?void 0:h.search)??n,routeSearch:(h==null?void 0:h.routeSearch)??n};try{const v=typeof f.options.validateSearch=="object"?f.options.validateSearch.parse:f.options.validateSearch,b=(v==null?void 0:v(x.search))??{},y={...x.search,...b};return{routeSearch:Pr(p.routeSearch,b),search:Pr(p.search,y)}}catch(v){if(p.searchError=new cg(v.message,{cause:v}),r!=null&&r.throwOnError)throw p.searchError;return x}})();Object.assign(p,{...m});const g=(()=>{var x,v,b,y;try{const _=((v=(x=f.options).getContext)==null?void 0:v.call(x,{parentContext:(h==null?void 0:h.routeContext)??{},context:(h==null?void 0:h.context)??(this==null?void 0:this.options.context)??{},params:p.params,search:p.search}))||{};return{context:{...(h==null?void 0:h.context)??(this==null?void 0:this.options.context),..._},routeContext:_}}catch(_){throw(y=(b=f.options).onError)==null||y.call(b,_),_}})();Object.assign(p,{...g})}),u});X(this,"loadMatches",async(t,n)=>{var a,s;this.cleanMatches(),n!=null&&n.preload||t.forEach(c=>{this.setRouteMatch(c.id,u=>({...u,routeSearch:c.routeSearch,search:c.search,routeContext:c.routeContext,context:c.context,error:c.error,paramsError:c.paramsError,searchError:c.searchError,params:c.params}))});let r;try{for(const[c,u]of t.entries()){const p=this.getRoute(u.routeId),d=(f,m)=>{var g,x;if(f.routerCode=m,r=r??c,Ca(f))throw f;try{(x=(g=p.options).onError)==null||x.call(g,f)}catch(v){if(f=v,Ca(v))throw v}this.setRouteMatch(u.id,v=>({...v,error:f,status:"error",updatedAt:Date.now()}))};u.paramsError&&d(u.paramsError,"PARSE_PARAMS"),u.searchError&&d(u.searchError,"VALIDATE_SEARCH");let h=!1;try{await((s=(a=p.options).beforeLoad)==null?void 0:s.call(a,{...u,preload:!!(n!=null&&n.preload)}))}catch(f){d(f,"BEFORE_LOAD"),h=!0}if(h)break}}catch(c){throw n!=null&&n.preload||this.navigate(c),c}const i=t.slice(0,r),o=[];i.forEach((c,u)=>{o.push((async()=>{var v;const p=o[u-1],d=this.getRoute(c.routeId);if(c.isFetching||c.status==="success"&&!this.getIsInvalid({matchId:c.id,preload:n==null?void 0:n.preload}))return(v=this.getRouteMatch(c.id))==null?void 0:v.loadPromise;const h=Date.now(),f=()=>{const b=this.getRouteMatch(c.id);return b&&b.fetchedAt!==h?b.loadPromise:void 0},m=b=>Ca(b)?(n!=null&&n.preload||this.navigate(b),!0):!1,g=async()=>{var y,_,w,E;let b;try{const k=Promise.all(ml.map(async F=>{const D=d.options[F];D!=null&&D.preload&&await D.preload()})),T=(_=(y=d.options).loader)==null?void 0:_.call(y,{...c,preload:!!(n!=null&&n.preload),parentMatchPromise:p}),[R,P]=await Promise.all([k,T]);if(b=f())return await b;this.setRouteMatchData(c.id,()=>P,n)}catch(k){if(b=f())return await b;if(m(k))return;try{(E=(w=d.options).onError)==null||E.call(w,k)}catch(T){if(k=T,m(T))return}this.setRouteMatch(c.id,T=>({...T,error:k,status:"error",isFetching:!1,updatedAt:Date.now()}))}};let x;this.__store.batch(()=>{this.setRouteMatch(c.id,b=>({...b,isFetching:!0,fetchedAt:h,invalid:!1})),x=g(),this.setRouteMatch(c.id,b=>({...b,loadPromise:x}))}),await x})())}),await Promise.all(o)});X(this,"reload",()=>this.navigate({fromCurrent:!0,replace:!0,search:!0}));X(this,"resolvePath",(t,n)=>pl(this.basepath,t,Wo(n)));X(this,"navigate",async({from:t,to:n="",search:r,hash:i,replace:o,params:a})=>{const s=String(n),c=typeof t>"u"?t:String(t);let u;try{new URL(`${s}`),u=!0}catch{}return qt(!u,"Attempting to navigate to external url with this.navigate!"),De(this,ur).call(this,{from:c,to:s,search:r,hash:i,replace:o,params:a})});X(this,"matchRoute",(t,n)=>{t={...t,to:t.to?this.resolvePath(t.from??"",t.to):void 0};const r=this.buildNext(t);if(n!=null&&n.pending&&this.state.status!=="pending")return!1;const i=n!=null&&n.pending?this.state.location:this.state.resolvedLocation;if(!i)return!1;const o=fl(this.basepath,i.pathname,{...n,to:r.pathname});return o?(n==null?void 0:n.includeSearch)??!0?ko(i.search,r.search)?o:!1:o:!1});X(this,"buildLink",({from:t,to:n=".",search:r,params:i,hash:o,target:a,replace:s,activeOptions:c,preload:u,preloadDelay:p,disabled:d,state:h})=>{try{return new URL(`${n}`),{type:"external",href:n}}catch{}const f={from:t,to:n,search:r,params:i,hash:o,replace:s,state:h},m=this.buildNext(f);u=u??this.options.defaultPreload;const g=p??this.options.defaultPreloadDelay??0,x=this.state.location.pathname.split("/"),b=m.pathname.split("/").every((D,H)=>D===x[H]),y=c!=null&&c.exact?this.state.location.pathname===m.pathname:b,_=c!=null&&c.includeHash?this.state.location.hash===m.hash:!0,w=(c==null?void 0:c.includeSearch)??!0?ko(this.state.location.search,m.search):!0;return{type:"internal",next:m,handleFocus:D=>{u&&this.preloadRoute(f).catch(H=>{console.warn(H),console.warn("Error preloading route! ☝️")})},handleClick:D=>{!d&&!sg(D)&&!D.defaultPrevented&&(!a||a==="_self")&&D.button===0&&(D.preventDefault(),De(this,ur).call(this,f))},handleEnter:D=>{const H=D.target||{};if(u){if(H.preloadTimeout)return;H.preloadTimeout=setTimeout(()=>{H.preloadTimeout=null,this.preloadRoute(f).catch(I=>{console.warn(I),console.warn("Error preloading route! ☝️")})},g)}},handleLeave:D=>{const H=D.target||{};H.preloadTimeout&&(clearTimeout(H.preloadTimeout),H.preloadTimeout=null)},handleTouchStart:D=>{this.preloadRoute(f).catch(H=>{console.warn(H),console.warn("Error preloading route! ☝️")})},isActive:y&&_&&w,disabled:d}});X(this,"dehydrate",()=>({state:{dehydratedMatches:this.state.matches.map(t=>rp(t,["fetchedAt","invalid","invalidAt","id","loaderData","status","updatedAt"]))}}));X(this,"hydrate",async t=>{var a,s;let n=t;typeof document<"u"&&(n=window.__TSR_DEHYDRATED__),qt(n,"Expected to find a __TSR_DEHYDRATED__ property on window... but we did not. Did you forget to render <DehydrateRouter /> in your app?");const r=n;this.dehydratedData=r.payload,(s=(a=this.options).hydrate)==null||s.call(a,r.payload);const{dehydratedMatches:i}=r.router.state;let o=this.matchRoutes(this.state.location.pathname,this.state.location.search).map(c=>{const u=i.find(p=>p.id===c.id);return qt(u,`Could not find a client-side match for dehydrated match with id: ${c.id}!`),u?{...c,...u}:c});this.__store.setState(c=>({...c,matches:o,matchesById:De(this,lr).call(this,c.matchesById,o)}))});X(this,"injectedHtml",[]);X(this,"injectHtml",async t=>{this.injectedHtml.push(t)});X(this,"dehydrateData",(t,n)=>{if(typeof document>"u"){const r=typeof t=="string"?t:JSON.stringify(t);return this.injectHtml(async()=>{const i=`__TSR_DEHYDRATED__${r}`,o=typeof n=="function"?await n():n;return`<script id='${i}' suppressHydrationWarning>window["__TSR_DEHYDRATED__${ug(r)}"] = ${JSON.stringify(o)}
        // ;(() => {
        //   var el = document.getElementById('${i}')
        //   el.parentElement.removeChild(el)
        // })()
        <\/script>`}),()=>this.hydrateData(t)}return()=>{}});X(this,"hydrateData",t=>{if(typeof document<"u"){const n=typeof t=="string"?t:JSON.stringify(t);return window[`__TSR_DEHYDRATED__${n}`]}});tn(this,Bo,t=>{this.routeTree=t,this.routesById={},this.routesByPath={},this.flatRoutes=[];const n=r=>{r.forEach((i,o)=>{i.init({originalIndex:o,router:this});const a=this.routesById[i.id];if(qt(!a,`Duplicate routes found with id: ${String(i.id)}`),this.routesById[i.id]=i,!i.isRoot&&i.path){const c=ls(i.fullPath);(!this.routesByPath[c]||i.fullPath.endsWith("/"))&&(this.routesByPath[c]=i)}const s=i.children;s!=null&&s.length&&n(s)})};n([t]),this.flatRoutes=Object.values(this.routesByPath).map((r,i)=>{var c;const o=us(r.fullPath),a=fr(o);for(;a.length>1&&((c=a[0])==null?void 0:c.value)==="/";)a.shift();const s=a.map(u=>u.type==="param"?.5:u.type==="wildcard"?.25:1);return{child:r,trimmed:o,parsed:a,index:i,score:s}}).sort((r,i)=>{let o=r.trimmed==="/"?1:i.trimmed==="/"?-1:0;if(o!==0)return o;const a=Math.min(r.score.length,i.score.length);if(r.score.length!==i.score.length)return i.score.length-r.score.length;for(let s=0;s<a;s++)if(r.score[s]!==i.score[s])return i.score[s]-r.score[s];for(let s=0;s<a;s++)if(r.parsed[s].value!==i.parsed[s].value)return r.parsed[s].value>i.parsed[s].value?1:-1;return r.trimmed!==i.trimmed?r.trimmed>i.trimmed?1:-1:r.index-i.index}).map((r,i)=>(r.child.rank=i,r.child))});tn(this,fi,t=>{let{pathname:n,search:r,hash:i,state:o}=this.history.location;const a=this.options.parseSearch(r);return{pathname:n,searchStr:r,search:Pr(t==null?void 0:t.search,a),hash:i.split("#").reverse()[0]??"",href:`${n}${r}${i}`,state:o,key:(o==null?void 0:o.key)||"__init__"}});tn(this,hi,(t={})=>{var v,b,y,_;t.fromCurrent=t.fromCurrent??t.to==="";const n=t.fromCurrent?this.state.location.pathname:t.from??this.state.location.pathname;let r=pl(this.basepath??"/",n,`${t.to??""}`);const i=this.matchRoutes(this.state.location.pathname,this.state.location.search),o={...(v=Zs(i))==null?void 0:v.params};let a=(t.params??!0)===!0?o:vn(t.params,o);a&&((b=t.__matches)==null||b.map(w=>this.getRoute(w.routeId).options.stringifyParams).filter(Boolean).forEach(w=>{a={...a,...w(a)}})),r=Ia(r,a??{});const s=((y=t.__matches)==null?void 0:y.map(w=>this.getRoute(w.routeId).options.preSearchFilters??[]).flat().filter(Boolean))??[],c=((_=t.__matches)==null?void 0:_.map(w=>this.getRoute(w.routeId).options.postSearchFilters??[]).flat().filter(Boolean))??[],u=s!=null&&s.length?s==null?void 0:s.reduce((w,E)=>E(w),this.state.location.search):this.state.location.search,p=t.search===!0?u:t.search?vn(t.search,u)??{}:s!=null&&s.length?u:{},d=c!=null&&c.length?c.reduce((w,E)=>E(w),p):p,h=Pr(this.state.location.search,d),f=this.options.stringifySearch(h),m=t.hash===!0?this.state.location.hash:vn(t.hash,this.state.location.hash),g=m?`#${m}`:"",x=t.state===!0?this.state.location.state:vn(t.state,this.state.location.state);return{pathname:r,search:h,searchStr:f,state:x,hash:m,href:this.history.createHref(`${r}${f}${g}`),key:t.key}});tn(this,ur,async t=>{const n=this.buildNext(t),r=""+Date.now()+Math.random();this.navigateTimeout&&clearTimeout(this.navigateTimeout);let i="replace";t.replace||(i="push"),this.state.location.href===n.href&&!n.key&&(i="replace");const a=`${n.pathname}${n.searchStr}${n.hash?`#${n.hash}`:""}`;return this.history[i==="push"?"push":"replace"](a,{id:r,...n.state}),this.latestLoadPromise});X(this,"getRouteMatch",t=>this.state.matchesById[t]);X(this,"setRouteMatch",(t,n)=>{this.__store.setState(r=>(r.matchesById[t]||console.warn(`No match found with id: ${t}`),{...r,matchesById:{...r.matchesById,[t]:n(r.matchesById[t])}}))});X(this,"setRouteMatchData",(t,n,r)=>{const i=this.getRouteMatch(t);if(!i)return;const o=this.getRoute(i.routeId),a=(r==null?void 0:r.updatedAt)??Date.now(),s=a+((r==null?void 0:r.maxAge)??o.options.preloadMaxAge??this.options.defaultPreloadMaxAge??5e3),c=a+((r==null?void 0:r.maxAge)??o.options.maxAge??this.options.defaultMaxAge??9999999999999);this.setRouteMatch(t,u=>({...u,error:void 0,status:"success",isFetching:!1,updatedAt:Date.now(),loaderData:vn(n,u.loaderData),preloadInvalidAt:s,invalidAt:c})),this.state.matches.find(u=>u.id===t)});X(this,"invalidate",async t=>{if(t!=null&&t.matchId){this.setRouteMatch(t.matchId,i=>({...i,invalid:!0}));const n=this.state.matches.findIndex(i=>i.id===t.matchId),r=this.state.matches[n+1];if(r)return this.invalidate({matchId:r.id,reload:!1})}else this.__store.batch(()=>{Object.values(this.state.matchesById).forEach(n=>{this.setRouteMatch(n.id,r=>({...r,invalid:!0}))})});if((t==null?void 0:t.reload)??!0)return this.reload()});X(this,"getIsInvalid",t=>{if(!(t!=null&&t.matchId))return!!this.state.matches.find(i=>this.getIsInvalid({matchId:i.id,preload:t==null?void 0:t.preload}));const n=this.getRouteMatch(t==null?void 0:t.matchId);if(!n)return!1;const r=Date.now();return n.invalid||(t!=null&&t.preload?n.preloadInvalidAt:n.invalidAt)<r});this.options={defaultPreloadDelay:50,context:void 0,...t,stringifySearch:(t==null?void 0:t.stringifySearch)??ng,parseSearch:(t==null?void 0:t.parseSearch)??tg},this.__store=new jm(gl(),{onUpdate:()=>{const r=this.state,i=this.__store.state,o=r.matchesById!==i.matchesById;let a,s;o||(a=r.matchIds.length!==i.matchIds.length||r.matchIds.some((c,u)=>c!==i.matchIds[u]),s=r.pendingMatchIds.length!==i.pendingMatchIds.length||r.pendingMatchIds.some((c,u)=>c!==i.pendingMatchIds[u])),(o||a)&&(i.matches=i.matchIds.map(c=>i.matchesById[c])),(o||s)&&(i.pendingMatches=i.pendingMatchIds.map(c=>i.matchesById[c])),i.isFetching=[...i.matches,...i.pendingMatches].some(c=>c.isFetching),this.state=i},defaultPriority:"low"}),this.state=this.__store.state,this.update(t);const n=this.buildNext({hash:!0,fromCurrent:!0,search:!0,state:!0});this.state.location.href!==n.href&&De(this,ur).call(this,{...n,replace:!0})}}cr=new WeakMap,pi=new WeakMap,lr=new WeakMap,Bo=new WeakMap,fi=new WeakMap,hi=new WeakMap,ur=new WeakMap;const ag=typeof window>"u"||!window.document.createElement;function gl(){return{status:"idle",isFetching:!1,resolvedLocation:null,location:null,matchesById:{},matchIds:[],pendingMatchIds:[],matches:[],pendingMatches:[],lastUpdated:Date.now()}}function sg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ca(e){return!!(e!=null&&e.isRedirect)}class cg extends Error{}class lg extends Error{}function ug(e){return e.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/"/g,'\\"')}/**
 * @tanstack/react-router/src/index.tsx
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},To.apply(this,arguments)}J.__onInit=e=>{Object.assign(e,{useMatch:(t={})=>Br({...t,from:e.id}),useLoader:(t={})=>fg({...t,from:e.id}),useContext:(t={})=>Br({...t,from:e.id,select:n=>{var r;return((r=t==null?void 0:t.select)==null?void 0:r.call(t,n.context))??n.context}}),useRouteContext:(t={})=>Br({...t,from:e.id,select:n=>{var r;return((r=t==null?void 0:t.select)==null?void 0:r.call(t,n.routeContext))??n.routeContext}}),useSearch:(t={})=>ap({...t,from:e.id}),useParams:(t={})=>Et({...t,from:e.id})})};function yi(e,t){let n;const r=()=>(n||(n=e()),n),i=Qs(async()=>({default:(await r())[t??"default"]}));return i.preload=r,i}function ip(e){const t=Xt(),{type:n,children:r,target:i,activeProps:o=()=>({className:"active"}),inactiveProps:a=()=>({}),activeOptions:s,disabled:c,hash:u,search:p,params:d,to:h=".",preload:f,preloadDelay:m,replace:g,style:x,className:v,onClick:b,onFocus:y,onMouseEnter:_,onMouseLeave:w,onTouchStart:E,...k}=e,T=t.buildLink(e);if(T.type==="external"){const{href:G}=T;return{href:G}}const{handleClick:R,handleFocus:P,handleEnter:F,handleLeave:D,handleTouchStart:H,isActive:I,next:M}=T,O=G=>{(e.startTransition??!0)&&(vi||(oe=>oe))(()=>{R(G)})},L=G=>oe=>{oe.persist&&oe.persist(),G.filter(Boolean).forEach(Ue=>{oe.defaultPrevented||Ue(oe)})},W=I?vn(o,{})??{}:{},re=I?{}:vn(a,{})??{};return{...W,...re,...k,href:c?void 0:M.href,onClick:L([b,O]),onFocus:L([y,P]),onMouseEnter:L([_,F]),onMouseLeave:L([w,D]),onTouchStart:L([E,H]),target:i,style:{...x,...W.style,...re.style},className:[v,W.className,re.className].filter(Boolean).join(" ")||void 0,...c?{role:"link","aria-disabled":!0}:void 0,"data-status":I?"active":void 0}}const he=me((e,t)=>{const n=ip(e);return C("a",To({ref:t},n,{children:typeof e.children=="function"?e.children({isActive:n["data-status"]==="active"}):e.children}))});function Oa(e){const t=Xt();return hn(()=>{t.navigate(e)},[]),null}const Go=Ot(null),op=Ot(null);function Wt(e){const t=Xt();return Vm(t.__store,e==null?void 0:e.select)}function dg({router:e,...t}){e.update(t),te(()=>{let r;return vi(()=>{r=e.mount()}),r},[e]);const n=e.options.Wrap||j;return C(n,null,C(op.Provider,{value:e},C(pg,null)))}function pg(){const e=Xt(),t=Wt({select:n=>n.pendingMatches.some(i=>{const o=e.getRoute(i.routeId);return!!(o!=null&&o.options.pendingComponent)})?n.pendingMatchIds:n.matchIds});return C(Go.Provider,{value:[void 0,...t]},C(sp,{errorComponent:ec,route:e.getRoute(nn),onCatch:()=>{Xs(!1,"Error in router! Consider setting an 'errorComponent' in your RootRoute! 👍")}},C(Pn,null)))}function Xt(){const e=Lt(op);return Xs(e,"useRouter must be used inside a <Router> component!"),e}function Br(e){var a;const t=Xt(),n=Lt(Go)[0],r=(a=t.getRouteMatch(n))==null?void 0:a.routeId,i=Wt({select:s=>{const c=s.matches;return(e!=null&&e.from?c.find(p=>p.routeId===(e==null?void 0:e.from)):c.find(p=>p.id===n)).routeId}});return((e==null?void 0:e.strict)??!0)&&qt(r==i,`useMatch("${i}") is being called in a component that is meant to render the '${r}' route. Did you mean to 'useMatch("${i}", { strict: false })' or 'useRoute("${i}")' instead?`),Wt({select:s=>{var p;const c=s.matches,u=e!=null&&e.from?c.find(d=>d.routeId===(e==null?void 0:e.from)):c.find(d=>d.id===n);return qt(u,`Could not find ${e!=null&&e.from?`an active match from "${e.from}"`:"a nearest match!"}`),((p=e==null?void 0:e.select)==null?void 0:p.call(e,u))??u}})}function fg(e){return Br({...e,select:t=>{var n;return((n=e==null?void 0:e.select)==null?void 0:n.call(e,t.loaderData))??t.loaderData}})}function ap(e){return Br({...e,select:t=>{var n;return((n=e==null?void 0:e.select)==null?void 0:n.call(e,t.search))??t.search}})}function Et(e){return Wt({select:t=>{var r,i;const n=(r=Zs(t.matches))==null?void 0:r.params;return((i=e==null?void 0:e.select)==null?void 0:i.call(e,n))??n}})}function bi(e){const t=Xt();return ue(n=>t.navigate({...e,...n}),[])}function Pn(){const e=Lt(Go).slice(1);return e[0]?C(mg,{matchIds:e}):null}const hg=()=>null;function mg({matchIds:e}){const t=Xt(),n=e[0],r=t.getRouteMatch(n).routeId,i=t.getRoute(r),o=i.options.pendingComponent??t.options.defaultPendingComponent??hg,a=i.options.errorComponent??t.options.defaultErrorComponent??ec,s=i.options.wrapInSuspense??!i.isRoot?nr:vl,c=a?sp:vl;return C(Go.Provider,{value:e},C(s,{fallback:C(o,{useMatch:i.useMatch,useContext:i.useContext,useRouteContext:i.useRouteContext,useSearch:i.useSearch,useParams:i.useParams})},C(c,{key:i.id,errorComponent:a,route:i,onCatch:()=>{Xs(!1,`Error in route match: ${n}`)}},C(gg,{matchId:n,PendingComponent:o}))))}function gg({matchId:e,PendingComponent:t}){const n=Xt(),r=Wt({select:o=>{const a=o.matchesById[e];return rp(a,["status","loadPromise","routeId","error"])}}),i=n.getRoute(r.routeId);if(r.status==="error")throw r.error;if(r.status==="pending")return C(t,{useLoader:i.useLoader,useMatch:i.useMatch,useContext:i.useContext,useRouteContext:i.useRouteContext,useSearch:i.useSearch,useParams:i.useParams});if(r.status==="success"){let o=i.options.component??n.options.defaultComponent;return o?C(o,{useLoader:i.useLoader,useMatch:i.useMatch,useContext:i.useContext,useRouteContext:i.useRouteContext,useSearch:i.useSearch,useParams:i.useParams}):C(Pn,null)}qt(!1,"Idle routeMatch status encountered during rendering! You should never see this. File an issue!")}function vl(e){return C(j,null,e.children)}class sp extends ct{constructor(){super(...arguments);X(this,"state",{error:!1,info:void 0})}componentDidCatch(n,r){this.props.onCatch(n,r),this.setState({error:n,info:r})}render(){return C(vg,To({},this.props,{errorState:this.state,reset:()=>this.setState({})}))}}function vg(e){const t=Wt({select:a=>a.resolvedLocation.key}),[n,r]=ee(e.errorState),i=e.errorComponent??ec,o=se("");return te(()=>{n&&t!==o.current&&r({}),o.current=t},[n,t]),te(()=>{e.errorState.error&&r(e.errorState)},[e.errorState.error]),e.errorState.error&&n.error?C(i,{...n,useMatch:e.route.useMatch,useContext:e.route.useContext,useRouteContext:e.route.useRouteContext,useSearch:e.route.useSearch,useParams:e.route.useParams}):e.children}function ec({error:e}){const[t,n]=ee(!1);return C("div",{style:{padding:".5rem",maxWidth:"100%"}},C("div",{style:{display:"flex",alignItems:"center",gap:".5rem"}},C("strong",{style:{fontSize:"1rem"}},"Something went wrong!"),C("button",{style:{appearance:"none",fontSize:".6em",border:"1px solid currentColor",padding:".1rem .2rem",fontWeight:"bold",borderRadius:".25rem"},onClick:()=>n(r=>!r)},t?"Hide Error":"Show Error")),C("div",{style:{height:".25rem"}}),t?C("div",null,C("pre",{style:{fontSize:".7em",border:"1px solid red",borderRadius:".25rem",padding:".3rem",color:"red",overflow:"auto"}},e.message?C("code",null,e.message):null)):null)}function Gi(e,t){if(!!!e)throw new Error(t)}function yg(e){return typeof e=="object"&&e!==null}function bg(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}const xg=/\r\n|[\n\r]/g;function ds(e,t){let n=0,r=1;for(const i of e.body.matchAll(xg)){if(typeof i.index=="number"||bg(!1),i.index>=t)break;n=i.index+i[0].length,r+=1}return{line:r,column:t+1-n}}function _g(e){return cp(e.source,ds(e.source,e.start))}function cp(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=t.line===1?n:0,c=t.column+s,u=`${e.name}:${a}:${c}
`,p=r.split(/\r\n|[\n\r]/g),d=p[i];if(d.length>120){const h=Math.floor(c/80),f=c%80,m=[];for(let g=0;g<d.length;g+=80)m.push(d.slice(g,g+80));return u+yl([[`${a} |`,m[0]],...m.slice(1,h+1).map(g=>["|",g]),["|","^".padStart(f)],["|",m[h+1]]])}return u+yl([[`${a-1} |`,p[i-1]],[`${a} |`,d],["|","^".padStart(c)],[`${a+1} |`,p[i+1]]])}function yl(e){const t=e.filter(([r,i])=>i!==void 0),n=Math.max(...t.map(([r])=>r.length));return t.map(([r,i])=>r.padStart(n)+(i?" "+i:"")).join(`
`)}function wg(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}let Yi=class lp extends Error{constructor(t,...n){var r,i,o;const{nodes:a,source:s,positions:c,path:u,originalError:p,extensions:d}=wg(n);super(t),this.name="GraphQLError",this.path=u??void 0,this.originalError=p??void 0,this.nodes=bl(Array.isArray(a)?a:a?[a]:void 0);const h=bl((r=this.nodes)===null||r===void 0?void 0:r.map(m=>m.loc).filter(m=>m!=null));this.source=s??(h==null||(i=h[0])===null||i===void 0?void 0:i.source),this.positions=c??(h==null?void 0:h.map(m=>m.start)),this.locations=c&&s?c.map(m=>ds(s,m)):h==null?void 0:h.map(m=>ds(m.source,m.start));const f=yg(p==null?void 0:p.extensions)?p==null?void 0:p.extensions:void 0;this.extensions=(o=d??f)!==null&&o!==void 0?o:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,lp):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(t+=`

`+_g(n.loc));else if(this.source&&this.locations)for(const n of this.locations)t+=`

`+cp(this.source,n);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}};function bl(e){return e===void 0||e.length===0?void 0:e}function $e(e,t,n){return new Yi(`Syntax Error: ${n}`,{source:e,positions:[t]})}let Eg=class{constructor(t,n,r){this.start=t.start,this.end=n.end,this.startToken=t,this.endToken=n,this.source=r}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}},up=class{constructor(t,n,r,i,o,a){this.kind=t,this.start=n,this.end=r,this.line=i,this.column=o,this.value=a,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}};const dp={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},kg=new Set(Object.keys(dp));function xl(e){const t=e==null?void 0:e.kind;return typeof t=="string"&&kg.has(t)}var Zn;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(Zn||(Zn={}));var ps;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(ps||(ps={}));var Y;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(Y||(Y={}));function fs(e){return e===9||e===32}function Qr(e){return e>=48&&e<=57}function pp(e){return e>=97&&e<=122||e>=65&&e<=90}function fp(e){return pp(e)||e===95}function Tg(e){return pp(e)||Qr(e)||e===95}function Sg(e){var t;let n=Number.MAX_SAFE_INTEGER,r=null,i=-1;for(let a=0;a<e.length;++a){var o;const s=e[a],c=Ng(s);c!==s.length&&(r=(o=r)!==null&&o!==void 0?o:a,i=a,a!==0&&c<n&&(n=c))}return e.map((a,s)=>s===0?a:a.slice(n)).slice((t=r)!==null&&t!==void 0?t:0,i+1)}function Ng(e){let t=0;for(;t<e.length&&fs(e.charCodeAt(t));)++t;return t}function Ig(e,t){const n=e.replace(/"""/g,'\\"""'),r=n.split(/\r\n|[\n\r]/g),i=r.length===1,o=r.length>1&&r.slice(1).every(f=>f.length===0||fs(f.charCodeAt(0))),a=n.endsWith('\\"""'),s=e.endsWith('"')&&!a,c=e.endsWith("\\"),u=s||c,p=!(t!=null&&t.minimize)&&(!i||e.length>70||u||o||a);let d="";const h=i&&fs(e.charCodeAt(0));return(p&&!h||o)&&(d+=`
`),d+=n,(p||u)&&(d+=`
`),'"""'+d+'"""'}var N;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(N||(N={}));let Cg=class{constructor(t){const n=new up(N.SOF,0,0,0,0);this.source=t,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==N.EOF)do if(t.next)t=t.next;else{const n=Ag(this,t.end);t.next=n,n.prev=t,t=n}while(t.kind===N.COMMENT);return t}};function Og(e){return e===N.BANG||e===N.DOLLAR||e===N.AMP||e===N.PAREN_L||e===N.PAREN_R||e===N.SPREAD||e===N.COLON||e===N.EQUALS||e===N.AT||e===N.BRACKET_L||e===N.BRACKET_R||e===N.BRACE_L||e===N.PIPE||e===N.BRACE_R}function xr(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function Yo(e,t){return hp(e.charCodeAt(t))&&mp(e.charCodeAt(t+1))}function hp(e){return e>=55296&&e<=56319}function mp(e){return e>=56320&&e<=57343}function kn(e,t){const n=e.source.body.codePointAt(t);if(n===void 0)return N.EOF;if(n>=32&&n<=126){const r=String.fromCodePoint(n);return r==='"'?`'"'`:`"${r}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function Ie(e,t,n,r,i){const o=e.line,a=1+n-e.lineStart;return new up(t,n,r,o,a,i)}function Ag(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const o=n.charCodeAt(i);switch(o){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:n.charCodeAt(i+1)===10?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return $g(e,i);case 33:return Ie(e,N.BANG,i,i+1);case 36:return Ie(e,N.DOLLAR,i,i+1);case 38:return Ie(e,N.AMP,i,i+1);case 40:return Ie(e,N.PAREN_L,i,i+1);case 41:return Ie(e,N.PAREN_R,i,i+1);case 46:if(n.charCodeAt(i+1)===46&&n.charCodeAt(i+2)===46)return Ie(e,N.SPREAD,i,i+3);break;case 58:return Ie(e,N.COLON,i,i+1);case 61:return Ie(e,N.EQUALS,i,i+1);case 64:return Ie(e,N.AT,i,i+1);case 91:return Ie(e,N.BRACKET_L,i,i+1);case 93:return Ie(e,N.BRACKET_R,i,i+1);case 123:return Ie(e,N.BRACE_L,i,i+1);case 124:return Ie(e,N.PIPE,i,i+1);case 125:return Ie(e,N.BRACE_R,i,i+1);case 34:return n.charCodeAt(i+1)===34&&n.charCodeAt(i+2)===34?Fg(e,i):Pg(e,i)}if(Qr(o)||o===45)return Rg(e,i,o);if(fp(o))return Ug(e,i);throw $e(e.source,i,o===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:xr(o)||Yo(n,i)?`Unexpected character: ${kn(e,i)}.`:`Invalid character: ${kn(e,i)}.`)}return Ie(e,N.EOF,r,r)}function $g(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(o===10||o===13)break;if(xr(o))++i;else if(Yo(n,i))i+=2;else break}return Ie(e,N.COMMENT,t,i,n.slice(t+1,i))}function Rg(e,t,n){const r=e.source.body;let i=t,o=n,a=!1;if(o===45&&(o=r.charCodeAt(++i)),o===48){if(o=r.charCodeAt(++i),Qr(o))throw $e(e.source,i,`Invalid number, unexpected digit after 0: ${kn(e,i)}.`)}else i=Aa(e,i,o),o=r.charCodeAt(i);if(o===46&&(a=!0,o=r.charCodeAt(++i),i=Aa(e,i,o),o=r.charCodeAt(i)),(o===69||o===101)&&(a=!0,o=r.charCodeAt(++i),(o===43||o===45)&&(o=r.charCodeAt(++i)),i=Aa(e,i,o),o=r.charCodeAt(i)),o===46||fp(o))throw $e(e.source,i,`Invalid number, expected digit but got: ${kn(e,i)}.`);return Ie(e,a?N.FLOAT:N.INT,t,i,r.slice(t,i))}function Aa(e,t,n){if(!Qr(n))throw $e(e.source,t,`Invalid number, expected digit but got: ${kn(e,t)}.`);const r=e.source.body;let i=t+1;for(;Qr(r.charCodeAt(i));)++i;return i}function Pg(e,t){const n=e.source.body,r=n.length;let i=t+1,o=i,a="";for(;i<r;){const s=n.charCodeAt(i);if(s===34)return a+=n.slice(o,i),Ie(e,N.STRING,t,i+1,a);if(s===92){a+=n.slice(o,i);const c=n.charCodeAt(i+1)===117?n.charCodeAt(i+2)===123?Dg(e,i):Lg(e,i):Mg(e,i);a+=c.value,i+=c.size,o=i;continue}if(s===10||s===13)break;if(xr(s))++i;else if(Yo(n,i))i+=2;else throw $e(e.source,i,`Invalid character within String: ${kn(e,i)}.`)}throw $e(e.source,i,"Unterminated string.")}function Dg(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const o=n.charCodeAt(t+i++);if(o===125){if(i<5||!xr(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|Dr(o),r<0)break}throw $e(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)}function Lg(e,t){const n=e.source.body,r=_l(n,t+2);if(xr(r))return{value:String.fromCodePoint(r),size:6};if(hp(r)&&n.charCodeAt(t+6)===92&&n.charCodeAt(t+7)===117){const i=_l(n,t+8);if(mp(i))return{value:String.fromCodePoint(r,i),size:12}}throw $e(e.source,t,`Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)}function _l(e,t){return Dr(e.charCodeAt(t))<<12|Dr(e.charCodeAt(t+1))<<8|Dr(e.charCodeAt(t+2))<<4|Dr(e.charCodeAt(t+3))}function Dr(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Mg(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw $e(e.source,t,`Invalid character escape sequence: "${n.slice(t,t+2)}".`)}function Fg(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,o=t+3,a=o,s="";const c=[];for(;o<r;){const u=n.charCodeAt(o);if(u===34&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34){s+=n.slice(a,o),c.push(s);const p=Ie(e,N.BLOCK_STRING,t,o+3,Sg(c).join(`
`));return e.line+=c.length-1,e.lineStart=i,p}if(u===92&&n.charCodeAt(o+1)===34&&n.charCodeAt(o+2)===34&&n.charCodeAt(o+3)===34){s+=n.slice(a,o),a=o+1,o+=4;continue}if(u===10||u===13){s+=n.slice(a,o),c.push(s),u===13&&n.charCodeAt(o+1)===10?o+=2:++o,s="",a=o,i=o;continue}if(xr(u))++o;else if(Yo(n,o))o+=2;else throw $e(e.source,o,`Invalid character within String: ${kn(e,o)}.`)}throw $e(e.source,o,"Unterminated string.")}function Ug(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const o=n.charCodeAt(i);if(Tg(o))++i;else break}return Ie(e,N.NAME,t,i,n.slice(t,i))}const qg=10,gp=2;function tc(e){return Qo(e,[])}function Qo(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return Bg(e,t);default:return String(e)}}function Bg(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const n=[...t,e];if(jg(e)){const r=e.toJSON();if(r!==e)return typeof r=="string"?r:Qo(r,n)}else if(Array.isArray(e))return zg(e,n);return Vg(e,n)}function jg(e){return typeof e.toJSON=="function"}function Vg(e,t){const n=Object.entries(e);return n.length===0?"{}":t.length>gp?"["+Hg(e)+"]":"{ "+n.map(([i,o])=>i+": "+Qo(o,t)).join(", ")+" }"}function zg(e,t){if(e.length===0)return"[]";if(t.length>gp)return"[Array]";const n=Math.min(qg,e.length),r=e.length-n,i=[];for(let o=0;o<n;++o)i.push(Qo(e[o],t));return r===1?i.push("... 1 more item"):r>1&&i.push(`... ${r} more items`),"["+i.join(", ")+"]"}function Hg(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}const Wg=globalThis.process?function(t,n){return t instanceof n}:function(t,n){if(t instanceof n)return!0;if(typeof t=="object"&&t!==null){var r;const i=n.prototype[Symbol.toStringTag],o=Symbol.toStringTag in t?t[Symbol.toStringTag]:(r=t.constructor)===null||r===void 0?void 0:r.name;if(i===o){const a=tc(t);throw new Error(`Cannot use ${i} "${a}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};let vp=class{constructor(t,n="GraphQL request",r={line:1,column:1}){typeof t=="string"||Gi(!1,`Body must be a string. Received: ${tc(t)}.`),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||Gi(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Gi(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};function Gg(e){return Wg(e,vp)}function Yg(e,t){return new Qg(e,t).parseDocument()}let Qg=class{constructor(t,n={}){const r=Gg(t)?t:new vp(t);this._lexer=new Cg(r),this._options=n,this._tokenCounter=0}parseName(){const t=this.expectToken(N.NAME);return this.node(t,{kind:Y.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:Y.DOCUMENT,definitions:this.many(N.SOF,this.parseDefinition,N.EOF)})}parseDefinition(){if(this.peek(N.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),n=t?this._lexer.lookahead():this._lexer.token;if(n.kind===N.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw $e(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(N.BRACE_L))return this.node(t,{kind:Y.OPERATION_DEFINITION,operation:Zn.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let r;return this.peek(N.NAME)&&(r=this.parseName()),this.node(t,{kind:Y.OPERATION_DEFINITION,operation:n,name:r,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(N.NAME);switch(t.value){case"query":return Zn.QUERY;case"mutation":return Zn.MUTATION;case"subscription":return Zn.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(N.PAREN_L,this.parseVariableDefinition,N.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:Y.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(N.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(N.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(N.DOLLAR),this.node(t,{kind:Y.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:Y.SELECTION_SET,selections:this.many(N.BRACE_L,this.parseSelection,N.BRACE_R)})}parseSelection(){return this.peek(N.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,n=this.parseName();let r,i;return this.expectOptionalToken(N.COLON)?(r=n,i=this.parseName()):i=n,this.node(t,{kind:Y.FIELD,alias:r,name:i,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(N.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const n=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(N.PAREN_L,n,N.PAREN_R)}parseArgument(t=!1){const n=this._lexer.token,r=this.parseName();return this.expectToken(N.COLON),this.node(n,{kind:Y.ARGUMENT,name:r,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(N.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(N.NAME)?this.node(t,{kind:Y.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:Y.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:Y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:Y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const n=this._lexer.token;switch(n.kind){case N.BRACKET_L:return this.parseList(t);case N.BRACE_L:return this.parseObject(t);case N.INT:return this.advanceLexer(),this.node(n,{kind:Y.INT,value:n.value});case N.FLOAT:return this.advanceLexer(),this.node(n,{kind:Y.FLOAT,value:n.value});case N.STRING:case N.BLOCK_STRING:return this.parseStringLiteral();case N.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:Y.BOOLEAN,value:!0});case"false":return this.node(n,{kind:Y.BOOLEAN,value:!1});case"null":return this.node(n,{kind:Y.NULL});default:return this.node(n,{kind:Y.ENUM,value:n.value})}case N.DOLLAR:if(t)if(this.expectToken(N.DOLLAR),this._lexer.token.kind===N.NAME){const r=this._lexer.token.value;throw $e(this._lexer.source,n.start,`Unexpected variable "$${r}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:Y.STRING,value:t.value,block:t.kind===N.BLOCK_STRING})}parseList(t){const n=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:Y.LIST,values:this.any(N.BRACKET_L,n,N.BRACKET_R)})}parseObject(t){const n=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:Y.OBJECT,fields:this.any(N.BRACE_L,n,N.BRACE_R)})}parseObjectField(t){const n=this._lexer.token,r=this.parseName();return this.expectToken(N.COLON),this.node(n,{kind:Y.OBJECT_FIELD,name:r,value:this.parseValueLiteral(t)})}parseDirectives(t){const n=[];for(;this.peek(N.AT);)n.push(this.parseDirective(t));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const n=this._lexer.token;return this.expectToken(N.AT),this.node(n,{kind:Y.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let n;if(this.expectOptionalToken(N.BRACKET_L)){const r=this.parseTypeReference();this.expectToken(N.BRACKET_R),n=this.node(t,{kind:Y.LIST_TYPE,type:r})}else n=this.parseNamedType();return this.expectOptionalToken(N.BANG)?this.node(t,{kind:Y.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:Y.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(N.STRING)||this.peek(N.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const r=this.parseConstDirectives(),i=this.many(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);return this.node(t,{kind:Y.SCHEMA_DEFINITION,description:n,directives:r,operationTypes:i})}parseOperationTypeDefinition(){const t=this._lexer.token,n=this.parseOperationType();this.expectToken(N.COLON);const r=this.parseNamedType();return this.node(t,{kind:Y.OPERATION_TYPE_DEFINITION,operation:n,type:r})}parseScalarTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const r=this.parseName(),i=this.parseConstDirectives();return this.node(t,{kind:Y.SCALAR_TYPE_DEFINITION,description:n,name:r,directives:i})}parseObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:Y.OBJECT_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:a})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(N.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseFieldDefinition,N.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName(),i=this.parseArgumentDefs();this.expectToken(N.COLON);const o=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(t,{kind:Y.FIELD_DEFINITION,description:n,name:r,arguments:i,type:o,directives:a})}parseArgumentDefs(){return this.optionalMany(N.PAREN_L,this.parseInputValueDef,N.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseName();this.expectToken(N.COLON);const i=this.parseTypeReference();let o;this.expectOptionalToken(N.EQUALS)&&(o=this.parseConstValueLiteral());const a=this.parseConstDirectives();return this.node(t,{kind:Y.INPUT_VALUE_DEFINITION,description:n,name:r,type:i,defaultValue:o,directives:a})}parseInterfaceTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const r=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseConstDirectives(),a=this.parseFieldsDefinition();return this.node(t,{kind:Y.INTERFACE_TYPE_DEFINITION,description:n,name:r,interfaces:i,directives:o,fields:a})}parseUnionTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseUnionMemberTypes();return this.node(t,{kind:Y.UNION_TYPE_DEFINITION,description:n,name:r,directives:i,types:o})}parseUnionMemberTypes(){return this.expectOptionalToken(N.EQUALS)?this.delimitedMany(N.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseEnumValuesDefinition();return this.node(t,{kind:Y.ENUM_TYPE_DEFINITION,description:n,name:r,directives:i,values:o})}parseEnumValuesDefinition(){return this.optionalMany(N.BRACE_L,this.parseEnumValueDefinition,N.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,n=this.parseDescription(),r=this.parseEnumValueName(),i=this.parseConstDirectives();return this.node(t,{kind:Y.ENUM_VALUE_DEFINITION,description:n,name:r,directives:i})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw $e(this._lexer.source,this._lexer.token.start,`${Pi(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const r=this.parseName(),i=this.parseConstDirectives(),o=this.parseInputFieldsDefinition();return this.node(t,{kind:Y.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:r,directives:i,fields:o})}parseInputFieldsDefinition(){return this.optionalMany(N.BRACE_L,this.parseInputValueDef,N.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===N.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.optionalMany(N.BRACE_L,this.parseOperationTypeDefinition,N.BRACE_R);if(n.length===0&&r.length===0)throw this.unexpected();return this.node(t,{kind:Y.SCHEMA_EXTENSION,directives:n,operationTypes:r})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();if(r.length===0)throw this.unexpected();return this.node(t,{kind:Y.SCALAR_TYPE_EXTENSION,name:n,directives:r})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:Y.OBJECT_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();if(r.length===0&&i.length===0&&o.length===0)throw this.unexpected();return this.node(t,{kind:Y.INTERFACE_TYPE_EXTENSION,name:n,interfaces:r,directives:i,fields:o})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:Y.UNION_TYPE_EXTENSION,name:n,directives:r,types:i})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:Y.ENUM_TYPE_EXTENSION,name:n,directives:r,values:i})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();if(r.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:Y.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:r,fields:i})}parseDirectiveDefinition(){const t=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(N.AT);const r=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const a=this.parseDirectiveLocations();return this.node(t,{kind:Y.DIRECTIVE_DEFINITION,description:n,name:r,arguments:i,repeatable:o,locations:a})}parseDirectiveLocations(){return this.delimitedMany(N.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(ps,n.value))return n;throw this.unexpected(t)}node(t,n){return this._options.noLocation!==!0&&(n.loc=new Eg(t,this._lexer.lastToken,this._lexer.source)),n}peek(t){return this._lexer.token.kind===t}expectToken(t){const n=this._lexer.token;if(n.kind===t)return this.advanceLexer(),n;throw $e(this._lexer.source,n.start,`Expected ${yp(t)}, found ${Pi(n)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const n=this._lexer.token;if(n.kind===N.NAME&&n.value===t)this.advanceLexer();else throw $e(this._lexer.source,n.start,`Expected "${t}", found ${Pi(n)}.`)}expectOptionalKeyword(t){const n=this._lexer.token;return n.kind===N.NAME&&n.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const n=t??this._lexer.token;return $e(this._lexer.source,n.start,`Unexpected ${Pi(n)}.`)}any(t,n,r){this.expectToken(t);const i=[];for(;!this.expectOptionalToken(r);)i.push(n.call(this));return i}optionalMany(t,n,r){if(this.expectOptionalToken(t)){const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}return[]}many(t,n,r){this.expectToken(t);const i=[];do i.push(n.call(this));while(!this.expectOptionalToken(r));return i}delimitedMany(t,n){this.expectOptionalToken(t);const r=[];do r.push(n.call(this));while(this.expectOptionalToken(t));return r}advanceLexer(){const{maxTokens:t}=this._options,n=this._lexer.advance();if(t!==void 0&&n.kind!==N.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw $e(this._lexer.source,n.start,`Document contains more that ${t} tokens. Parsing aborted.`)}};function Pi(e){const t=e.value;return yp(e.kind)+(t!=null?` "${t}"`:"")}function yp(e){return Og(e)?`"${e}"`:e}function Kg(e){return`"${e.replace(Jg,Xg)}"`}const Jg=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Xg(e){return Zg[e.charCodeAt(0)]}const Zg=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],ev=Object.freeze({});function bp(e,t,n=dp){const r=new Map;for(const v of Object.values(Y))r.set(v,tv(t,v));let i,o=Array.isArray(e),a=[e],s=-1,c=[],u=e,p,d;const h=[],f=[];do{s++;const v=s===a.length,b=v&&c.length!==0;if(v){if(p=f.length===0?void 0:h[h.length-1],u=d,d=f.pop(),b)if(o){u=u.slice();let _=0;for(const[w,E]of c){const k=w-_;E===null?(u.splice(k,1),_++):u[k]=E}}else{u=Object.defineProperties({},Object.getOwnPropertyDescriptors(u));for(const[_,w]of c)u[_]=w}s=i.index,a=i.keys,c=i.edits,o=i.inArray,i=i.prev}else if(d){if(p=o?s:a[s],u=d[p],u==null)continue;h.push(p)}let y;if(!Array.isArray(u)){var m,g;xl(u)||Gi(!1,`Invalid AST Node: ${tc(u)}.`);const _=v?(m=r.get(u.kind))===null||m===void 0?void 0:m.leave:(g=r.get(u.kind))===null||g===void 0?void 0:g.enter;if(y=_==null?void 0:_.call(t,u,p,d,h,f),y===ev)break;if(y===!1){if(!v){h.pop();continue}}else if(y!==void 0&&(c.push([p,y]),!v))if(xl(y))u=y;else{h.pop();continue}}if(y===void 0&&b&&c.push([p,u]),v)h.pop();else{var x;i={inArray:o,index:s,keys:a,edits:c,prev:i},o=Array.isArray(u),a=o?u:(x=n[u.kind])!==null&&x!==void 0?x:[],s=-1,c=[],d&&f.push(d),d=u}}while(i!==void 0);return c.length!==0?c[c.length-1][1]:e}function tv(e,t){const n=e[t];return typeof n=="object"?n:typeof n=="function"?{enter:n,leave:void 0}:{enter:e.enter,leave:e.leave}}function nv(e){return bp(e,iv)}const rv=80,iv={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>q(e.definitions,`

`)},OperationDefinition:{leave(e){const t=ae("(",q(e.variableDefinitions,", "),")"),n=q([e.operation,q([e.name,t]),q(e.directives," ")]," ");return(n==="query"?"":n+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:n,directives:r})=>e+": "+t+ae(" = ",n)+ae(" ",q(r," "))},SelectionSet:{leave:({selections:e})=>gt(e)},Field:{leave({alias:e,name:t,arguments:n,directives:r,selectionSet:i}){const o=ae("",e,": ")+t;let a=o+ae("(",q(n,", "),")");return a.length>rv&&(a=o+ae(`(
`,Qi(q(n,`
`)),`
)`)),q([a,q(r," "),i]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+ae(" ",q(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:n})=>q(["...",ae("on ",e),q(t," "),n]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:n,directives:r,selectionSet:i})=>`fragment ${e}${ae("(",q(n,", "),")")} on ${t} ${ae("",q(r," ")," ")}`+i},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?Ig(e):Kg(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+q(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+q(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+ae("(",q(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:n})=>ae("",e,`
`)+q(["schema",q(t," "),gt(n)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:n})=>ae("",e,`
`)+q(["scalar",t,q(n," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>ae("",e,`
`)+q(["type",t,ae("implements ",q(n," & ")),q(r," "),gt(i)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:n,type:r,directives:i})=>ae("",e,`
`)+t+(wl(n)?ae(`(
`,Qi(q(n,`
`)),`
)`):ae("(",q(n,", "),")"))+": "+r+ae(" ",q(i," "))},InputValueDefinition:{leave:({description:e,name:t,type:n,defaultValue:r,directives:i})=>ae("",e,`
`)+q([t+": "+n,ae("= ",r),q(i," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:n,directives:r,fields:i})=>ae("",e,`
`)+q(["interface",t,ae("implements ",q(n," & ")),q(r," "),gt(i)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:n,types:r})=>ae("",e,`
`)+q(["union",t,q(n," "),ae("= ",q(r," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:n,values:r})=>ae("",e,`
`)+q(["enum",t,q(n," "),gt(r)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:n})=>ae("",e,`
`)+q([t,q(n," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:n,fields:r})=>ae("",e,`
`)+q(["input",t,q(n," "),gt(r)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:n,repeatable:r,locations:i})=>ae("",e,`
`)+"directive @"+t+(wl(n)?ae(`(
`,Qi(q(n,`
`)),`
)`):ae("(",q(n,", "),")"))+(r?" repeatable":"")+" on "+q(i," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>q(["extend schema",q(e," "),gt(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>q(["extend scalar",e,q(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>q(["extend type",e,ae("implements ",q(t," & ")),q(n," "),gt(r)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:n,fields:r})=>q(["extend interface",e,ae("implements ",q(t," & ")),q(n," "),gt(r)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:n})=>q(["extend union",e,q(t," "),ae("= ",q(n," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:n})=>q(["extend enum",e,q(t," "),gt(n)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:n})=>q(["extend input",e,q(t," "),gt(n)]," ")}};function q(e,t=""){var n;return(n=e==null?void 0:e.filter(r=>r).join(t))!==null&&n!==void 0?n:""}function gt(e){return ae(`{
`,Qi(q(e,`
`)),`
}`)}function ae(e,t,n=""){return t!=null&&t!==""?e+t+n:""}function Qi(e){return ae("  ",e.replace(/\n/g,`
  `))}function wl(e){var t;return(t=e==null?void 0:e.some(n=>n.includes(`
`)))!==null&&t!==void 0?t:!1}var nc=()=>{},Ge=nc;function pt(e){return{tag:0,0:e}}function xi(e){return{tag:1,0:e}}var El=()=>typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator",ov=()=>typeof Symbol=="function"&&Symbol.observable||"@@observable",av=e=>e;function le(e){return t=>n=>{var r=Ge;t(i=>{i===0?n(0):i.tag===0?(r=i[0],n(i)):e(i[0])?n(i):r(0)})}}function He(e){return t=>n=>t(r=>{r===0||r.tag===0?n(r):n(xi(e(r[0])))})}function _i(e){return t=>n=>{var r=[],i=Ge,o=!1,a=!1;t(s=>{a||(s===0?(a=!0,r.length||n(0)):s.tag===0?i=s[0]:(o=!1,function(u){var p=Ge;u(d=>{if(d===0){if(r.length){var h=r.indexOf(p);h>-1&&(r=r.slice()).splice(h,1),r.length||(a?n(0):o||(o=!0,i(0)))}}else d.tag===0?(r.push(p=d[0]),p(0)):r.length&&(n(d),p(0))})}(e(s[0])),o||(o=!0,i(0))))}),n(pt(s=>{if(s===1){a||(a=!0,i(1));for(var c=0,u=r,p=r.length;c<p;c++)u[c](1);r.length=0}else{!a&&!o?(o=!0,i(0)):o=!1;for(var d=0,h=r,f=r.length;d<f;d++)h[d](0)}}))}}function sv(e){return _i(av)(e)}function wt(e){return sv(dv(e))}function Kr(e){return t=>n=>{var r=!1;t(i=>{if(!r)if(i===0)r=!0,n(0),e();else if(i.tag===0){var o=i[0];n(pt(a=>{a===1?(r=!0,o(1),e()):o(a)}))}else n(i)})}}function $t(e){return t=>n=>{var r=!1;t(i=>{if(!r)if(i===0)r=!0,n(0);else if(i.tag===0){var o=i[0];n(pt(a=>{a===1&&(r=!0),o(a)}))}else e(i[0]),n(i)})}}function Jr(e){return t=>n=>t(r=>{r===0?n(0):r.tag===0?(n(r),e()):n(r)})}function lt(e){var t=[],n=Ge,r=!1;return i=>{t.push(i),t.length===1&&e(o=>{if(o===0){for(var a=0,s=t,c=t.length;a<c;a++)s[a](0);t.length=0}else if(o.tag===0)n=o[0];else{r=!1;for(var u=0,p=t,d=t.length;u<d;u++)p[u](o)}}),i(pt(o=>{if(o===1){var a=t.indexOf(i);a>-1&&(t=t.slice()).splice(a,1),t.length||n(1)}else r||(r=!0,n(0))}))}}function xp(e){return t=>n=>{var r=Ge,i=Ge,o=!1,a=!1,s=!1,c=!1;t(u=>{c||(u===0?(c=!0,s||n(0)):u.tag===0?r=u[0]:(s&&(i(1),i=Ge),o?o=!1:(o=!0,r(0)),function(d){s=!0,d(h=>{s&&(h===0?(s=!1,c?n(0):o||(o=!0,r(0))):h.tag===0?(a=!1,(i=h[0])(0)):(n(h),a?a=!1:i(0)))})}(e(u[0]))))}),n(pt(u=>{u===1?(c||(c=!0,r(1)),s&&(s=!1,i(1))):(!c&&!o&&(o=!0,r(0)),s&&!a&&(a=!0,i(0)))}))}}function Xr(e){return t=>n=>{var r=Ge,i=!1,o=0;t(a=>{i||(a===0?(i=!0,n(0)):a.tag===0?e<=0?(i=!0,n(0),a[0](1)):r=a[0]:o++<e?(n(a),!i&&o>=e&&(i=!0,n(0),r(1))):n(a))}),n(pt(a=>{a===1&&!i?(i=!0,r(1)):a===0&&!i&&o<e&&r(0)}))}}function _r(e){return t=>n=>{var r=Ge,i=Ge,o=!1;t(a=>{o||(a===0?(o=!0,i(1),n(0)):a.tag===0?(r=a[0],e(s=>{s===0||(s.tag===0?(i=s[0])(0):(o=!0,i(1),r(1),n(0)))})):n(a))}),n(pt(a=>{a===1&&!o?(o=!0,r(1),i(1)):o||r(0)}))}}function cv(e,t){return n=>r=>{var i=Ge,o=!1;n(a=>{o||(a===0?(o=!0,r(0)):a.tag===0?(i=a[0],r(a)):e(a[0])?r(a):(o=!0,t&&r(a),r(0),i(1)))})}}function lv(e){return t=>{var n=e[El()]&&e[El()]()||e,r=!1,i=!1,o=!1,a;t(pt(async s=>{if(s===1)r=!0,n.return&&n.return();else if(i)o=!0;else{for(o=i=!0;o&&!r;)if((a=await n.next()).done)r=!0,n.return&&await n.return(),t(0);else try{o=!1,t(xi(a.value))}catch(c){if(n.throw)(r=!!(await n.throw(c)).done)&&t(0);else throw c}i=!1}}))}}function uv(e){return e[Symbol.asyncIterator]?lv(e):t=>{var n=e[Symbol.iterator](),r=!1,i=!1,o=!1,a;t(pt(s=>{if(s===1)r=!0,n.return&&n.return();else if(i)o=!0;else{for(o=i=!0;o&&!r;)if((a=n.next()).done)r=!0,n.return&&n.return(),t(0);else try{o=!1,t(xi(a.value))}catch(c){if(n.throw)(r=!!n.throw(c).done)&&t(0);else throw c}i=!1}}))}}var dv=uv;function Zr(e){return t=>{var n=!1;t(pt(r=>{r===1?n=!0:n||(n=!0,t(xi(e)),t(0))}))}}function Dn(e){return t=>{var n=!1,r=e({next(i){n||t(xi(i))},complete(){n||(n=!0,t(0))}});t(pt(i=>{i===1&&!n&&(n=!0,r())}))}}function rc(){var e,t;return{source:lt(Dn(n=>(e=n.next,t=n.complete,nc))),next(n){e&&e(n)},complete(){t&&t()}}}var kl=e=>{var t=!1;e(pt(n=>{n===1?t=!0:t||(t=!0,e(0))}))};function pv(e){return Dn(t=>(e.then(n=>{Promise.resolve(n).then(()=>{t.next(n),t.complete()})}),nc))}function _t(e){return t=>{var n=Ge,r=!1;return t(i=>{i===0?r=!0:i.tag===0?(n=i[0])(0):r||(e(i[0]),n(0))}),{unsubscribe(){r||(r=!0,n(1))}}}}function _p(e){_t(t=>{})(e)}function wp(e){return new Promise(t=>{var n=Ge,r;e(i=>{i===0?Promise.resolve(r).then(t):i.tag===0?(n=i[0])(0):(r=i[0],n(0))})})}function ic(e){return{subscribe(t,n,r){var i=typeof t=="object"?t:{next:t,error:n,complete:r},o=Ge,a=!1;e(c=>{a||(c===0?(a=!0,i.complete&&i.complete()):c.tag===0?(o=c[0])(0):(i.next(c[0]),o(0)))});var s={closed:!1,unsubscribe(){s.closed=!0,a=!0,o(1)}};return s},[ov()](){return this}}}var Ko=(...e)=>{for(var t=e[0],n=1,r=e.length;n<r;n++)t=e[n](t);return t},fv=e=>e instanceof Yi?e:typeof e=="object"&&e.message?new Yi(e.message,e.nodes,e.source,e.positions,e.path,e,e.extensions||{}):new Yi(e);let oc=class extends Error{constructor(t){var n=(t.graphQLErrors||[]).map(fv),r=((i,o)=>{var a="";if(i)return`[Network] ${i.message}`;if(o)for(var s of o)a&&(a+=`
`),a+=`[GraphQL] ${s.message}`;return a})(t.networkError,n);super(r),this.name="CombinedError",this.message=r,this.graphQLErrors=n,this.networkError=t.networkError,this.response=t.response}toString(){return this.message}};var hs=(e,t)=>{for(var n=typeof t=="number"?0|t:5381,r=0,i=0|e.length;r<i;r++)n=(n<<5)+n+e.charCodeAt(r);return n},Ki=new Set,Tl=new WeakMap,Lr=e=>{if(e===null||Ki.has(e))return"null";if(typeof e!="object")return JSON.stringify(e)||"";if(e.toJSON)return Lr(e.toJSON());if(Array.isArray(e)){var t="[";for(var n of e)t!=="["&&(t+=","),t+=(n=Lr(n)).length>0?n:"null";return t+="]"}var r=Object.keys(e).sort();if(!r.length&&e.constructor&&e.constructor!==Object){var i=Tl.get(e)||Math.random().toString(36).slice(2);return Tl.set(e,i),`{"__key":"${i}"}`}Ki.add(e);var o="{";for(var a of r){var s=Lr(e[a]);s&&(o.length>1&&(o+=","),o+=Lr(a)+":"+s)}return Ki.delete(e),o+="}"},ms=e=>(Ki.clear(),Lr(e)),hv=/("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,mv=/(#[^\n\r]+)?(?:\n|\r\n?|$)+/g,gv=(e,t)=>t%2==0?e.replace(mv,`
`):e,Sl=e=>e.split(hv).map(gv).join("").trim(),Nl=new Map,Ji=new Map,wi=e=>{var t;return typeof e=="string"?t=Sl(e):e.loc&&Ji.get(e.__key)===e?t=e.loc.source.body:(t=Nl.get(e)||Sl(nv(e)),Nl.set(e,t)),typeof e!="string"&&!e.loc&&(e.loc={start:0,end:t.length,source:{body:t,name:"gql",locationOffset:{line:1,column:1}}}),t},Il=e=>{var t=hs(wi(e));if(typeof e=="object"&&"definitions"in e){var n=Ep(e);n&&(t=hs(`
# ${n}`,t))}return t},So=e=>{var t,n;return typeof e=="string"?(t=Il(e),n=Ji.get(t)||Yg(e,{noLocation:!0})):(t=e.__key||Il(e),n=Ji.get(t)||e),n.loc||wi(n),n.__key=t,Ji.set(t,n),n},$a=(e,t)=>{t||(t={});var n=So(e),r=ms(t),i=n.__key;return r!=="{}"&&(i=hs(r,i)),{key:i,query:n,variables:t}},Ep=e=>{for(var t of e.definitions)if(t.kind===Y.OPERATION_DEFINITION&&t.name)return t.name.value},Xi=(e,t,n)=>{if(!("data"in t)&&!("errors"in t)||"incremental"in t)throw new Error("No Content");var r=e.kind==="subscription";return{operation:e,data:t.data,error:Array.isArray(t.errors)?new oc({graphQLErrors:t.errors,response:n}):void 0,extensions:typeof t.extensions=="object"&&t.extensions||void 0,hasNext:t.hasNext==null?r:t.hasNext}},vv=(e,t,n)=>{var r,i=!!e.extensions||!!t.extensions,o={...e.extensions,...t.extensions},a=e.error?e.error.graphQLErrors:[],s=t.incremental;if("path"in t&&(s=[{data:t.data,path:t.path}]),s){r={...e.data};for(var c of s){Array.isArray(c.errors)&&a.push(...c.errors),c.extensions&&(Object.assign(o,c.extensions),i=!0);for(var u=c.path[0],p=r,d=1,h=c.path.length;d<h;u=c.path[d++])p=p[u]=Array.isArray(p[u])?[...p[u]]:{...p[u]};if(Array.isArray(c.items))for(var f=+u>=0?u:0,m=0,g=c.items.length;m<g;m++)p[f+m]=c.items[m];else c.data!==void 0&&(p[u]=p[u]&&c.data?{...p[u],...c.data}:c.data)}}else r=t.data||e.data;return{operation:e.operation,data:r,error:a.length?new oc({graphQLErrors:a,response:n}):void 0,extensions:i?o:void 0,hasNext:!!t.hasNext}},gs=(e,t,n)=>({operation:e,data:void 0,error:new oc({networkError:t,response:n}),extensions:void 0});function yv(e){return{query:wi(e.query),operationName:Ep(e.query),variables:e.variables||void 0,extensions:void 0}}var bv=(e,t)=>{var n=e.kind==="query"&&e.context.preferGetMethod;if(!n||!t)return e.context.url;var r=new URL(e.context.url),i=r.searchParams;t.operationName&&i.set("operationName",t.operationName),t.query&&i.set("query",t.query),t.variables&&i.set("variables",ms(t.variables)),t.extensions&&i.set("extensions",ms(t.extensions));var o=r.toString();return o.length>2047&&n!=="force"?(e.context.preferGetMethod=!1,e.context.url):o},xv=(e,t)=>{var n=e.kind==="query"&&!!e.context.preferGetMethod,r={accept:"multipart/mixed, application/graphql-response+json, application/graphql+json, application/json"};n||(r["content-type"]="application/json");var i=(typeof e.context.fetchOptions=="function"?e.context.fetchOptions():e.context.fetchOptions)||{};if(i.headers)for(var o in i.headers)r[o.toLowerCase()]=i.headers[o];return{...i,body:!n&&t?JSON.stringify(t):void 0,method:n?"GET":"POST",headers:r}},_v=typeof TextDecoder<"u"?new TextDecoder:null,wv=/content-type:[^\r\n]*application\/json/i,Ev=/boundary="?([^=";]+)"?/i,kv=(e,t,n)=>{var r=n.redirect==="manual"?400:300,i=e.context.fetch;return Dn(({next:o,complete:a})=>{var s=typeof AbortController<"u"?new AbortController:null;s&&(n.signal=s.signal);var c=!1,u=(f,m,g)=>{var x=g.headers&&g.headers.get("Content-Type")||"";if(/text\//i.test(x))return g.text().then(F=>{f(gs(m,new Error(F),g))});if(!/multipart\/mixed/i.test(x))return g.text().then(F=>{f(Xi(m,JSON.parse(F),g))});var v="---",b=x.match(Ev);b&&(v="--"+b[1]);var y,_=()=>{};if(g[Symbol.asyncIterator]){var w=g[Symbol.asyncIterator]();y=w.next.bind(w)}else if("body"in g&&g.body){var E=g.body.getReader();_=()=>E.cancel(),y=()=>E.read()}else throw new TypeError("Streaming requests unsupported");var k="",T=!0,R=null,P=null;return y().then(function F(D){if(D.done)c=!0;else{var H=(oe=D.value).constructor.name==="Buffer"?oe.toString():_v.decode(oe),I=H.indexOf(v);for(I>-1?I+=k.length:I=k.indexOf(v),k+=H;I>-1;){var M=k.slice(0,I),O=k.slice(I+v.length);if(T)T=!1;else{var L=M.indexOf(`\r
\r
`)+4,W=M.slice(0,L),re=M.slice(L,M.lastIndexOf(`\r
`)),G=void 0;if(wv.test(W))try{G=JSON.parse(re),R=P=P?vv(P,G,g):Xi(m,G,g)}catch{}if(O.slice(0,2)==="--"||G&&!G.hasNext){if(!P)return f(Xi(m,{},g));break}}I=(k=O).indexOf(v)}}var oe;if(R&&(f(R),R=null),!D.done&&(!P||P.hasNext))return y().then(F)}).finally(_)},p=!1,d=!1,h;return Promise.resolve().then(()=>{if(!p)return(i||fetch)(t,n)}).then(f=>{if(f)return d=(h=f).status<200||h.status>=r,u(o,e,h)}).then(a).catch(f=>{if(c)throw f;var m=gs(e,d&&h.statusText?new Error(h.statusText):f,h);o(m),a()}),()=>{p=!0,s&&s.abort()}})},vs=(e,t)=>{if(Array.isArray(e))for(var n of e)vs(n,t);else if(typeof e=="object"&&e!==null)for(var r in e)r==="__typename"&&typeof e[r]=="string"?t.add(e[r]):vs(e[r],t);return t},Cl=e=>{if(!e.selectionSet)return e;for(var t of e.selectionSet.selections)if(t.kind===Y.FIELD&&t.name.value==="__typename"&&!t.alias)return e;return{...e,selectionSet:{...e.selectionSet,selections:[...e.selectionSet.selections,{kind:Y.FIELD,name:{kind:Y.NAME,value:"__typename"}}]}}},Ol=new Map,Tv=e=>{var t=So(e),n=Ol.get(t.__key);return n||(n=bp(t,{Field:Cl,InlineFragment:Cl}),Object.defineProperty(n,"__key",{value:t.__key,enumerable:!1}),Ol.set(t.__key,n)),n},ys=(e,t)=>{if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(i=>ys(i));if(e&&typeof e=="object"&&(t||"__typename"in e)){var n={};for(var r in e)r==="__typename"?Object.defineProperty(n,"__typename",{enumerable:!1,value:e.__typename}):n[r]=ys(e[r]);return n}else return e};function Al(e){return e.toPromise=()=>new Promise(t=>{var n=_t(r=>{!r.stale&&!r.hasNext&&Promise.resolve().then(()=>{n.unsubscribe(),t(r)})})(e)}),e}function Tn(e,t,n){return n||(n=t.context),{key:t.key,query:t.query,variables:t.variables,kind:e,context:n}}var $l=(e,t)=>Tn(e.kind,e,{...e.context,meta:{...e.context.meta,...t}}),Sv=()=>{},Rl=(e,t,n)=>{for(var r of n)if(r.kind===Y.FRAGMENT_DEFINITION){var i=r.name.value,o=wi(r);e.has(i)||(e.set(i,o),t.push(r))}else t.push(r)};function Jo(){for(var e=new Map,t=[],n=[],r=Array.isArray(arguments[0])?arguments[0][0]:arguments[0]||"",i=1;i<arguments.length;i++){var o=arguments[i];o&&o.definitions?n.push(...o.definitions):r+=o,r+=arguments[0][i]}return Rl(e,t,So(r).definitions),Rl(e,t,n),So({kind:Y.DOCUMENT,definitions:t})}var Ra=({kind:e})=>e!=="mutation"&&e!=="query",kp=({forward:e,client:t,dispatchDebug:n})=>{var r=new Map,i=new Map,o=s=>{var c=Tn(s.kind,s);return c.query=Tv(s.query),c},a=s=>{var{key:c,kind:u,context:{requestPolicy:p}}=s;return u==="query"&&p!=="network-only"&&(p==="cache-only"||r.has(c))};return s=>{var c=lt(s),u=He(d=>{var h=r.get(d.key),f={...h,operation:$l(d,{cacheOutcome:h?"hit":"miss"})};return d.context.requestPolicy==="cache-and-network"&&(f.stale=!0,Pl(t,d)),f})(le(d=>!Ra(d)&&a(d))(c)),p=$t(d=>{var{operation:h}=d;if(h){var f=(k=>[...vs(k,new Set)])(d.data).concat(h.context.additionalTypenames||[]);if(d.operation.kind==="mutation"){for(var m=new Set,g=0;g<f.length;g++){var x=f[g],v=i.get(x);v||i.set(x,v=new Set);for(var b of v.values())m.add(b);v.clear()}for(var y of m.values())r.has(y)&&(h=r.get(y).operation,r.delete(y),Pl(t,h))}else if(h.kind==="query"&&d.data){r.set(h.key,d);for(var _=0;_<f.length;_++){var w=f[_],E=i.get(w);E||i.set(w,E=new Set),E.add(h.key)}}}})(e(le(d=>d.kind!=="query"||d.context.requestPolicy!=="cache-only")(He(d=>$l(d,{cacheOutcome:"miss"}))(wt([He(o)(le(d=>!Ra(d)&&!a(d))(c)),le(d=>Ra(d))(c)])))));return wt([u,p])}},Pl=(e,t)=>e.reexecuteOperation(Tn(t.kind,t,{...t.context,requestPolicy:"network-only"})),Nv=({forwardSubscription:e,enableAllOperations:t,isSubscriptionOperation:n})=>({client:r,forward:i})=>{var o=n||(a=>{var{kind:s}=a;return s==="subscription"||!!t&&(s==="query"||s==="mutation")});return a=>{var s=lt(a),c=_i(p=>{var{key:d}=p,h=le(f=>f.kind==="teardown"&&f.key===d)(s);return _r(h)((f=>{var m=e({key:f.key.toString(36),query:wi(f.query),variables:f.variables,context:{...f.context}});return Dn(({next:g,complete:x})=>{var v=!1,b;return Promise.resolve().then(()=>{v||(b=m.subscribe({next:y=>g(Xi(f,y)),error:y=>g(gs(f,y)),complete:()=>{v||(v=!0,f.kind==="subscription"&&r.reexecuteOperation(Tn("teardown",f,f.context)),x())}}))}),()=>{v=!0,b&&b.unsubscribe()}})})(p))})(le(o)(s)),u=i(le(p=>!o(p))(s));return wt([c,u])}},Tp=({forward:e,dispatchDebug:t})=>{var n=new Set,r=o=>{var{key:a,kind:s}=o;if(s==="teardown"||s==="mutation")return n.delete(a),!0;var c=n.has(a);return n.add(a),!c},i=({operation:o,hasNext:a})=>{a||n.delete(o.key)};return o=>{var a=le(r)(o);return $t(i)(e(a))}},Sp=({forward:e,dispatchDebug:t})=>n=>{var r=lt(n),i=_i(a=>{var{key:s}=a,c=yv(a),u=bv(a,c),p=xv(a,c),d=_r(le(h=>h.kind==="teardown"&&h.key===s)(r))(kv(a,u,p));return d})(le(a=>a.kind==="query"||a.kind==="mutation")(r)),o=e(le(a=>a.kind!=="query"&&a.kind!=="mutation")(r));return wt([i,o])},Iv=e=>({client:t,forward:n,dispatchDebug:r})=>e.reduceRight((i,o)=>o({client:t,forward:i,dispatchDebug(a){}}),n),Cv=[Tp,kp,Sp],Ov=({dispatchDebug:e})=>t=>le(()=>!1)($t(n=>{if(n.kind!=="teardown"&&!1)var r})(t)),Av=function e(t){var n=0,r=new Map,i=new Map,o=[],a={url:t.url,fetchOptions:t.fetchOptions,fetch:t.fetch,preferGetMethod:!!t.preferGetMethod,requestPolicy:t.requestPolicy||"cache-first"},{source:s,next:c}=rc(),u=!1;function p(v){if(v&&c(v),!u){for(u=!0;u&&(v=o.shift());)c(v);u=!1}}var d=v=>{var b=le(y=>y.operation.kind===v.kind&&y.operation.key===v.key&&(!y.operation.context._instance||y.operation.context._instance===v.context._instance))(x);return t.maskTypename&&(b=He(y=>({...y,data:ys(y.data,!0)}))(b)),v.kind==="mutation"?Xr(1)(Jr(()=>c(v))(b)):lt(Kr(()=>{r.delete(v.key),i.delete(v.key);for(var y=o.length-1;y>=0;y--)o[y].key===v.key&&o.splice(y,1);c(Tn("teardown",v,v.context))})($t(y=>{r.set(v.key,y)})(xp(y=>v.kind!=="query"||y.stale?Zr(y):wt([Zr(y),He(()=>({...y,stale:!0}))(Xr(1)(le(_=>_.kind==="query"&&_.key===v.key&&_.context.requestPolicy!=="cache-only")(s)))]))(_r(le(y=>y.kind==="teardown"&&y.key===v.key)(s))(b)))))},h=this instanceof e?this:Object.create(e.prototype),f=Object.assign(h,{suspense:!!t.suspense,operations$:s,reexecuteOperation(v){(v.kind==="mutation"||i.has(v.key))&&(o.push(v),Promise.resolve().then(p))},createRequestOperation(v,b,y){return y||(y={}),Tn(v,b,{_instance:v==="mutation"?n=n+1|0:void 0,...a,...y,requestPolicy:y.requestPolicy||a.requestPolicy,suspense:y.suspense||y.suspense!==!1&&f.suspense})},executeRequestOperation(v){return v.kind==="mutation"?d(v):Dn(b=>{var y=i.get(v.key);y||i.set(v.key,y=d(v));var _=v.context.requestPolicy==="cache-and-network"||v.context.requestPolicy==="network-only";return _t(b.next)(Kr(()=>{u=!1,b.complete()})(Jr(()=>{var w=r.get(v.key);if(v.kind==="subscription")return p(v);_&&p(v),w!=null&&w===r.get(v.key)?b.next(_?{...w,stale:!0}:w):_||p(v)})(y))).unsubscribe})},executeQuery(v,b){var y=f.createRequestOperation("query",v,b);return f.executeRequestOperation(y)},executeSubscription(v,b){var y=f.createRequestOperation("subscription",v,b);return f.executeRequestOperation(y)},executeMutation(v,b){var y=f.createRequestOperation("mutation",v,b);return f.executeRequestOperation(y)},query(v,b,y){return(!y||typeof y.suspense!="boolean")&&(y={...y,suspense:!1}),Al(f.executeQuery($a(v,b),y))},readQuery(v,b,y){var _=null;return _t(w=>{_=w})(f.query(v,b,y)).unsubscribe(),_},subscription:(v,b,y)=>f.executeSubscription($a(v,b),y),mutation:(v,b,y)=>Al(f.executeMutation($a(v,b),y))}),m=Sv,g=Iv(t.exchanges!==void 0?t.exchanges:Cv),x=lt(g({client:f,dispatchDebug:m,forward:Ov({dispatchDebug:m})})(s));return _p(x),f},$v={NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType"};let Rv=class extends Error{constructor(t,n,r,i,o,a,s){super(t),this.name="GraphQLError",this.message=t,o&&(this.path=o),n&&(this.nodes=Array.isArray(n)?n:[n]),r&&(this.source=r),i&&(this.positions=i),a&&(this.originalError=a);var c=s;if(!c&&a){var u=a.extensions;u&&typeof u=="object"&&(c=u)}this.extensions=c||{}}toJSON(){return{...this,message:this.message}}toString(){return this.message}get[Symbol.toStringTag](){return"GraphQLError"}};var we,ne;function Ce(e){return new Rv(`Syntax Error: Unexpected token at ${ne} in ${e}`)}function Je(e){if(e.lastIndex=ne,e.test(we))return we.slice(ne,ne=e.lastIndex)}var Di=/ +(?=[^\s])/y;function Pv(e){for(var t=e.split(`
`),n="",r=0,i=0,o=t.length-1,a=0;a<t.length;a++)Di.lastIndex=0,Di.test(t[a])&&(a&&(!r||Di.lastIndex<r)&&(r=Di.lastIndex),i=i||a,o=a);for(var s=i;s<=o;s++)s!==i&&(n+=`
`),n+=t[s].slice(r).replace(/\\"""/g,'"""');return n}function ie(){for(var e=0|we.charCodeAt(ne++);e===9||e===10||e===13||e===32||e===35||e===44||e===65279;e=0|we.charCodeAt(ne++))if(e===35)for(;(e=we.charCodeAt(ne++))!==10&&e!==13;);ne--}var Np=/[_A-Za-z]\w*/y;function Rt(){var e;if(e=Je(Np))return{kind:"Name",value:e}}var Dv=/(?:null|true|false)/y,Ip=/\$[_A-Za-z]\w*/y,Lv=/-?\d+/y,Mv=/(?:\.\d+)?[eE][+-]?\d+|\.\d+/y,Fv=/\\/g,Uv=/"""(?:"""|(?:[\s\S]*?[^\\])""")/y,qv=/"(?:"|[^\r\n]*?[^\\]")/y;function No(e){var t,n;if(n=Je(Dv))t=n==="null"?{kind:"NullValue"}:{kind:"BooleanValue",value:n==="true"};else if(!e&&(n=Je(Ip)))t={kind:"Variable",name:{kind:"Name",value:n.slice(1)}};else if(n=Je(Lv)){var r=n;(n=Je(Mv))?t={kind:"FloatValue",value:r+n}:t={kind:"IntValue",value:r}}else if(n=Je(Np))t={kind:"EnumValue",value:n};else if(n=Je(Uv))t={kind:"StringValue",value:Pv(n.slice(3,-3)),block:!0};else if(n=Je(qv))t={kind:"StringValue",value:Fv.test(n)?JSON.parse(n):n.slice(1,-1),block:!1};else if(t=function(o){var a;if(we.charCodeAt(ne)===91){ne++,ie();for(var s=[];a=No(o);)s.push(a);if(we.charCodeAt(ne++)!==93)throw Ce("ListValue");return ie(),{kind:"ListValue",values:s}}}(e)||function(o){if(we.charCodeAt(ne)===123){ne++,ie();for(var a=[],s;s=Rt();){if(ie(),we.charCodeAt(ne++)!==58)throw Ce("ObjectField");ie();var c=No(o);if(!c)throw Ce("ObjectField");a.push({kind:"ObjectField",name:s,value:c})}if(we.charCodeAt(ne++)!==125)throw Ce("ObjectValue");return ie(),{kind:"ObjectValue",fields:a}}}(e))return t;return ie(),t}function Cp(e){var t=[];if(ie(),we.charCodeAt(ne)===40){ne++,ie();for(var n;n=Rt();){if(ie(),we.charCodeAt(ne++)!==58)throw Ce("Argument");ie();var r=No(e);if(!r)throw Ce("Argument");t.push({kind:"Argument",name:n,value:r})}if(!t.length||we.charCodeAt(ne++)!==41)throw Ce("Argument");ie()}return t}function hr(e){var t=[];for(ie();we.charCodeAt(ne)===64;){ne++;var n=Rt();if(!n)throw Ce("Directive");ie(),t.push({kind:"Directive",name:n,arguments:Cp(e)})}return t}function Bv(){var e=Rt();if(e){ie();var t;if(we.charCodeAt(ne)===58){if(ne++,ie(),t=e,!(e=Rt()))throw Ce("Field");ie()}return{kind:"Field",alias:t,name:e,arguments:Cp(!1),directives:hr(!1),selectionSet:Xo()}}}function Op(){var e;if(ie(),we.charCodeAt(ne)===91){ne++,ie();var t=Op();if(!t||we.charCodeAt(ne++)!==93)throw Ce("ListType");e={kind:"ListType",type:t}}else if(e=Rt())e={kind:"NamedType",name:e};else throw Ce("NamedType");return ie(),we.charCodeAt(ne)===33?(ne++,ie(),{kind:"NonNullType",type:e}):e}var jv=/on/y;function Ap(){if(Je(jv)){ie();var e=Rt();if(!e)throw Ce("NamedType");return ie(),{kind:"NamedType",name:e}}}var Vv=/\.\.\./y;function zv(){if(Je(Vv)){ie();var e=ne,t;if((t=Rt())&&t.value!=="on")return{kind:"FragmentSpread",name:t,directives:hr(!1)};ne=e;var n=Ap(),r=hr(!1),i=Xo();if(!i)throw Ce("InlineFragment");return{kind:"InlineFragment",typeCondition:n,directives:r,selectionSet:i}}}function Xo(){var e;if(ie(),we.charCodeAt(ne)===123){ne++,ie();for(var t=[];e=zv()||Bv();)t.push(e);if(!t.length||we.charCodeAt(ne++)!==125)throw Ce("SelectionSet");return ie(),{kind:"SelectionSet",selections:t}}}var Hv=/fragment/y;function Wv(){if(Je(Hv)){ie();var e=Rt();if(!e)throw Ce("FragmentDefinition");ie();var t=Ap();if(!t)throw Ce("FragmentDefinition");var n=hr(!1),r=Xo();if(!r)throw Ce("FragmentDefinition");return{kind:"FragmentDefinition",name:e,typeCondition:t,directives:n,selectionSet:r}}}var Gv=/(?:query|mutation|subscription)/y;function Yv(){var e,t,n=[],r=[];(e=Je(Gv))&&(ie(),t=Rt(),n=function(){var a,s=[];if(ie(),we.charCodeAt(ne)===40){for(ne++,ie();a=Je(Ip);){if(ie(),we.charCodeAt(ne++)!==58)throw Ce("VariableDefinition");var c=Op(),u=void 0;if(we.charCodeAt(ne)===61&&(ne++,ie(),!(u=No(!0))))throw Ce("VariableDefinition");ie(),s.push({kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:a.slice(1)}},type:c,defaultValue:u,directives:hr(!0)})}if(we.charCodeAt(ne++)!==41)throw Ce("VariableDefinition");ie()}return s}(),r=hr(!1));var i=Xo();if(i)return{kind:"OperationDefinition",operation:e||"query",name:t,variableDefinitions:n,directives:r,selectionSet:i}}function Qv(e,t){return we=typeof e.body=="string"?e.body:e,ne=0,function(){var r;ie();for(var i=[];r=Wv()||Yv();)i.push(r);return{kind:"Document",definitions:i}}()}function Kv(e){return JSON.stringify(e)}function Jv(e){return`"""
`+e.replace(/"""/g,'\\"""')+`
"""`}var it=e=>!(!e||!e.length),Le={OperationDefinition(e){if(e.operation==="query"&&!e.name&&!it(e.variableDefinitions)&&!it(e.directives))return Le.SelectionSet(e.selectionSet);var t=e.operation;return e.name&&(t+=" "+e.name.value),it(e.variableDefinitions)&&(e.name||(t+=" "),t+="("+e.variableDefinitions.map(Le.VariableDefinition).join(", ")+")"),it(e.directives)&&(t+=" "+e.directives.map(Le.Directive).join(" ")),t+" "+Le.SelectionSet(e.selectionSet)},VariableDefinition(e){var t=Le.Variable(e.variable)+": "+ot(e.type);return e.defaultValue&&(t+=" = "+ot(e.defaultValue)),it(e.directives)&&(t+=" "+e.directives.map(Le.Directive).join(" ")),t},Field(e){var t=(e.alias?e.alias.value+": ":"")+e.name.value;if(it(e.arguments)){var n=e.arguments.map(Le.Argument),r=t+"("+n.join(", ")+")";t=r.length>80?t+`(
  `+n.join(`
`).replace(/\n/g,`
  `)+`
)`:r}return it(e.directives)&&(t+=" "+e.directives.map(Le.Directive).join(" ")),e.selectionSet?t+" "+Le.SelectionSet(e.selectionSet):t},StringValue:e=>e.block?Jv(e.value):Kv(e.value),BooleanValue:e=>""+e.value,NullValue:e=>"null",IntValue:e=>e.value,FloatValue:e=>e.value,EnumValue:e=>e.value,Name:e=>e.value,Variable:e=>"$"+e.name.value,ListValue:e=>"["+e.values.map(ot).join(", ")+"]",ObjectValue:e=>"{"+e.fields.map(Le.ObjectField).join(", ")+"}",ObjectField:e=>e.name.value+": "+ot(e.value),Document:e=>it(e.definitions)?e.definitions.map(ot).join(`

`):"",SelectionSet:e=>`{
  `+e.selections.map(ot).join(`
`).replace(/\n/g,`
  `)+`
}`,Argument:e=>e.name.value+": "+ot(e.value),FragmentSpread(e){var t="..."+e.name.value;return it(e.directives)&&(t+=" "+e.directives.map(Le.Directive).join(" ")),t},InlineFragment(e){var t="...";return e.typeCondition&&(t+=" on "+e.typeCondition.name.value),it(e.directives)&&(t+=" "+e.directives.map(Le.Directive).join(" ")),t+" "+ot(e.selectionSet)},FragmentDefinition(e){var t="fragment "+e.name.value;return t+=" on "+e.typeCondition.name.value,it(e.directives)&&(t+=" "+e.directives.map(Le.Directive).join(" ")),t+" "+ot(e.selectionSet)},Directive(e){var t="@"+e.name.value;return it(e.arguments)&&(t+="("+e.arguments.map(Le.Argument).join(", ")+")"),t},NamedType:e=>e.name.value,ListType:e=>"["+ot(e.type)+"]",NonNullType:e=>ot(e.type)+"!"};function ot(e){return Le[e.kind]?Le[e.kind](e):""}var bs=(e,t)=>{for(var n=0|(t||5381),r=0,i=0|e.length;r<i;r++)n=(n<<5)+n+e.charCodeAt(r);return n},Zi=new Set,Dl=new WeakMap,Jn=e=>{if(e===null||Zi.has(e))return"null";if(typeof e!="object")return JSON.stringify(e)||"";if(e.toJSON)return Jn(e.toJSON());if(Array.isArray(e)){var t="[";for(var n of e)t.length>1&&(t+=","),t+=Jn(n)||"null";return t+="]"}else if(Ll!==Io&&e instanceof Ll||Ml!==Io&&e instanceof Ml)return"null";var r=Object.keys(e).sort();if(!r.length&&e.constructor&&e.constructor!==Object){var i=Dl.get(e)||Math.random().toString(36).slice(2);return Dl.set(e,i),Jn({__key:i})}Zi.add(e);var o="{";for(var a of r){var s=Jn(e[a]);s&&(o.length>1&&(o+=","),o+=Jn(a)+":"+s)}return Zi.delete(e),o+="}"},Xv=e=>(Zi.clear(),Jn(e));class Io{}var Ll=typeof File<"u"?File:Io,Ml=typeof Blob<"u"?Blob:Io,Zv=/("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,ey=/(?:#[^\n\r]+)?(?:[\r\n]+|$)/g,ty=(e,t)=>t%2==0?e.replace(ey,`
`):e,Fl=e=>e.split(Zv).map(ty).join("").trim(),Ul=new Map,eo=new Map,$p=e=>{var t;return typeof e=="string"?t=Fl(e):e.loc&&eo.get(e.__key)===e?t=e.loc.source.body:(t=Ul.get(e)||Fl(ot(e)),Ul.set(e,t)),typeof e!="string"&&!e.loc&&(e.loc={start:0,end:t.length,source:{body:t,name:"gql",locationOffset:{line:1,column:1}}}),t},ql=e=>{var t=bs($p(e));if(e.definitions){var n=iy(e);n&&(t=bs(`
# ${n}`,t))}return t},ny=e=>{var t,n;return typeof e=="string"?(t=ql(e),n=eo.get(t)||Qv(e)):(t=e.__key||ql(e),n=eo.get(t)||e),n.loc||$p(n),n.__key=t,eo.set(t,n),n},ry=(e,t,n)=>{var r=t||{},i=ny(e),o=Xv(r),a=i.__key;return o!=="{}"&&(a=bs(o,a)),{key:a,query:i,variables:r,extensions:n}},iy=e=>{for(var t of e.definitions)if(t.kind===$v.OPERATION_DEFINITION)return t.name?t.name.value:void 0};typeof TextDecoder<"u"&&new TextDecoder;function oy(e,t,n){return{...t,kind:e,context:t.context?{...t.context,...n}:n||t.context}}const Pa=(e,t)=>oy(e.kind,e,{...e.context,authAttempt:t});function ay({addAuthToOperation:e,getAuth:t,didAuthError:n,willAuthError:r}){return({client:i,forward:o})=>{const a=new Map,{source:s,next:c}=rc();let u=null;return p=>{function d(_,w,E){const k=i.createRequestOperation("mutation",ry(_,w),E);return wp(Xr(1)(le(T=>T.operation.key===k.key)(Jr(()=>c(k))(y))))}const h=_=>{u=_,f=void 0,a.forEach(c),a.clear()};let f=Promise.resolve().then(()=>t({authState:u,mutate:d})).then(h);const m=_=>{_=Pa(_,!0),a.set(_.key,_),f||(f=t({authState:u,mutate:d}).then(h).catch(()=>h(null)))},g=lt(p),x=le(_=>_.kind==="teardown")(g),v=le(_=>_.kind!=="teardown")(g),b=He(_=>e({operation:_,authState:u}))(wt([s,_i(_=>{if(a.has(_.key))return kl;if(!f&&r&&r({operation:_,authState:u}))return m(_),kl;if(!f)return Zr(Pa(_,!1));const w=le(E=>E.kind==="teardown"&&E.key===_.key)(g);return _r(w)(He(()=>Pa(_,!1))(pv(f)))})(v)])),y=lt(o(wt([b,x])));return le(({error:_,operation:w})=>_&&n&&n({error:_,authState:u})&&!w.context.authAttempt?(m(w),!1):!0)(y)}}}function We(e){return e===null?"null":Array.isArray(e)?"array":typeof e}function mn(e){return We(e)==="object"}function sy(e){return Array.isArray(e)&&e.length>0&&e.every(t=>"message"in t)}function Bl(e,t){return e.length<124?e:t}const cy="graphql-transport-ws";var Ke;(function(e){e[e.InternalServerError=4500]="InternalServerError",e[e.InternalClientError=4005]="InternalClientError",e[e.BadRequest=4400]="BadRequest",e[e.BadResponse=4004]="BadResponse",e[e.Unauthorized=4401]="Unauthorized",e[e.Forbidden=4403]="Forbidden",e[e.SubprotocolNotAcceptable=4406]="SubprotocolNotAcceptable",e[e.ConnectionInitialisationTimeout=4408]="ConnectionInitialisationTimeout",e[e.ConnectionAcknowledgementTimeout=4504]="ConnectionAcknowledgementTimeout",e[e.SubscriberAlreadyExists=4409]="SubscriberAlreadyExists",e[e.TooManyInitialisationRequests=4429]="TooManyInitialisationRequests"})(Ke||(Ke={}));var Ne;(function(e){e.ConnectionInit="connection_init",e.ConnectionAck="connection_ack",e.Ping="ping",e.Pong="pong",e.Subscribe="subscribe",e.Next="next",e.Error="error",e.Complete="complete"})(Ne||(Ne={}));function Rp(e){if(!mn(e))throw new Error(`Message is expected to be an object, but got ${We(e)}`);if(!e.type)throw new Error("Message is missing the 'type' property");if(typeof e.type!="string")throw new Error(`Message is expects the 'type' property to be a string, but got ${We(e.type)}`);switch(e.type){case Ne.ConnectionInit:case Ne.ConnectionAck:case Ne.Ping:case Ne.Pong:{if(e.payload!=null&&!mn(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);break}case Ne.Subscribe:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${We(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!mn(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${We(e.payload)}`);if(typeof e.payload.query!="string")throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${We(e.payload.query)}`);if(e.payload.variables!=null&&!mn(e.payload.variables))throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${We(e.payload.variables)}`);if(e.payload.operationName!=null&&We(e.payload.operationName)!=="string")throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${We(e.payload.operationName)}`);if(e.payload.extensions!=null&&!mn(e.payload.extensions))throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${We(e.payload.extensions)}`);break}case Ne.Next:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${We(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!mn(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${We(e.payload)}`);break}case Ne.Error:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${We(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);if(!sy(e.payload))throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);break}case Ne.Complete:{if(typeof e.id!="string")throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${We(e.id)}`);if(!e.id)throw new Error(`"${e.type}" message requires a non-empty 'id' property`);break}default:throw new Error(`Invalid message 'type' property "${e.type}"`)}return e}function ly(e,t){return Rp(typeof e=="string"?JSON.parse(e,t):e)}function Rr(e,t){return Rp(e),JSON.stringify(e,t)}var rr=globalThis&&globalThis.__await||function(e){return this instanceof rr?(this.v=e,this):new rr(e)},uy=globalThis&&globalThis.__asyncGenerator||function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(h){r[h]&&(i[h]=function(f){return new Promise(function(m,g){o.push([h,f,m,g])>1||s(h,f)})})}function s(h,f){try{c(r[h](f))}catch(m){d(o[0][3],m)}}function c(h){h.value instanceof rr?Promise.resolve(h.value.v).then(u,p):d(o[0][2],h)}function u(h){s("next",h)}function p(h){s("throw",h)}function d(h,f){h(f),o.shift(),o.length&&s(o[0][0],o[0][1])}};function dy(e){const{url:t,connectionParams:n,lazy:r=!0,onNonLazyError:i=console.error,lazyCloseTimeout:o=0,keepAlive:a=0,disablePong:s,connectionAckWaitTimeout:c=0,retryAttempts:u=5,retryWait:p=async function(M){let O=1e3;for(let L=0;L<M;L++)O*=2;await new Promise(L=>setTimeout(L,O+Math.floor(Math.random()*(3e3-300)+300)))},shouldRetry:d=Li,isFatalConnectionProblem:h,on:f,webSocketImpl:m,generateID:g=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,M=>{const O=Math.random()*16|0;return(M=="x"?O:O&3|8).toString(16)})},jsonMessageReplacer:x,jsonMessageReviver:v}=e;let b;if(m){if(!fy(m))throw new Error("Invalid WebSocket implementation provided");b=m}else typeof WebSocket<"u"?b=WebSocket:typeof global<"u"?b=global.WebSocket||global.MozWebSocket:typeof window<"u"&&(b=window.WebSocket||window.MozWebSocket);if(!b)throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");const y=b,_=(()=>{const I=(()=>{const O={};return{on(L,W){return O[L]=W,()=>{delete O[L]}},emit(L){var W;"id"in L&&((W=O[L.id])===null||W===void 0||W.call(O,L))}}})(),M={connecting:f!=null&&f.connecting?[f.connecting]:[],opened:f!=null&&f.opened?[f.opened]:[],connected:f!=null&&f.connected?[f.connected]:[],ping:f!=null&&f.ping?[f.ping]:[],pong:f!=null&&f.pong?[f.pong]:[],message:f!=null&&f.message?[I.emit,f.message]:[I.emit],closed:f!=null&&f.closed?[f.closed]:[],error:f!=null&&f.error?[f.error]:[]};return{onMessage:I.on,on(O,L){const W=M[O];return W.push(L),()=>{W.splice(W.indexOf(L),1)}},emit(O,...L){for(const W of[...M[O]])W(...L)}}})();function w(I){const M=[_.on("error",O=>{M.forEach(L=>L()),I(O)}),_.on("closed",O=>{M.forEach(L=>L()),I(O)})]}let E,k=0,T,R=!1,P=0,F=!1;async function D(){clearTimeout(T);const[I,M]=await(E??(E=new Promise((W,re)=>(async()=>{if(R){if(await p(P),!k)return E=void 0,re({code:1e3,reason:"All Subscriptions Gone"});P++}_.emit("connecting");const G=new y(typeof t=="function"?await t():t,cy);let oe,Ue;function mt(){isFinite(a)&&a>0&&(clearTimeout(Ue),Ue=setTimeout(()=>{G.readyState===y.OPEN&&(G.send(Rr({type:Ne.Ping})),_.emit("ping",!1,void 0))},a))}w(ve=>{E=void 0,clearTimeout(oe),clearTimeout(Ue),re(ve),Li(ve)&&ve.code===4499&&(G.close(4499,"Terminated"),G.onerror=null,G.onclose=null)}),G.onerror=ve=>_.emit("error",ve),G.onclose=ve=>_.emit("closed",ve),G.onopen=async()=>{try{_.emit("opened",G);const ve=typeof n=="function"?await n():n;if(G.readyState!==y.OPEN)return;G.send(Rr(ve?{type:Ne.ConnectionInit,payload:ve}:{type:Ne.ConnectionInit},x)),isFinite(c)&&c>0&&(oe=setTimeout(()=>{G.close(Ke.ConnectionAcknowledgementTimeout,"Connection acknowledgement timeout")},c)),mt()}catch(ve){_.emit("error",ve),G.close(Ke.InternalClientError,Bl(ve instanceof Error?ve.message:new Error(ve).message,"Internal client error"))}};let qe=!1;G.onmessage=({data:ve})=>{try{const de=ly(ve,v);if(_.emit("message",de),de.type==="ping"||de.type==="pong"){_.emit(de.type,!0,de.payload),de.type==="pong"?mt():s||(G.send(Rr(de.payload?{type:Ne.Pong,payload:de.payload}:{type:Ne.Pong})),_.emit("pong",!1,de.payload));return}if(qe)return;if(de.type!==Ne.ConnectionAck)throw new Error(`First message cannot be of type ${de.type}`);clearTimeout(oe),qe=!0,_.emit("connected",G,de.payload),R=!1,P=0,W([G,new Promise((Z,ye)=>w(ye))])}catch(de){G.onmessage=null,_.emit("error",de),G.close(Ke.BadResponse,Bl(de instanceof Error?de.message:new Error(de).message,"Bad response"))}}})())));I.readyState===y.CLOSING&&await M;let O=()=>{};const L=new Promise(W=>O=W);return[I,O,Promise.race([L.then(()=>{if(!k){const W=()=>I.close(1e3,"Normal Closure");isFinite(o)&&o>0?T=setTimeout(()=>{I.readyState===y.OPEN&&W()},o):W()}}),M])]}function H(I){if(Li(I)&&(py(I.code)||[Ke.InternalServerError,Ke.InternalClientError,Ke.BadRequest,Ke.BadResponse,Ke.Unauthorized,Ke.SubprotocolNotAcceptable,Ke.SubscriberAlreadyExists,Ke.TooManyInitialisationRequests].includes(I.code)))throw I;if(F)return!1;if(Li(I)&&I.code===1e3)return k>0;if(!u||P>=u||!d(I)||h!=null&&h(I))throw I;return R=!0}return r||(async()=>{for(k++;;)try{const[,,I]=await D();await I}catch(I){try{if(!H(I))return}catch(M){return i==null?void 0:i(M)}}})(),{on:_.on,subscribe(I,M){const O=g(I);let L=!1,W=!1,re=()=>{k--,L=!0};return(async()=>{for(k++;;)try{const[G,oe,Ue]=await D();if(L)return oe();const mt=_.onMessage(O,qe=>{switch(qe.type){case Ne.Next:{M.next(qe.payload);return}case Ne.Error:{W=!0,L=!0,M.error(qe.payload),re();return}case Ne.Complete:{L=!0,re();return}}});G.send(Rr({id:O,type:Ne.Subscribe,payload:I},x)),re=()=>{!L&&G.readyState===y.OPEN&&G.send(Rr({id:O,type:Ne.Complete},x)),k--,L=!0,oe()},await Ue.finally(mt);return}catch(G){if(!H(G))return}})().then(()=>{W||M.complete()}).catch(G=>{M.error(G)}),()=>{L||re()}},iterate(I){const M=[],O={done:!1,error:null,resolve:()=>{}},L=this.subscribe(I,{next(re){M.push(re),O.resolve()},error(re){O.done=!0,O.error=re,O.resolve()},complete(){O.done=!0,O.resolve()}}),W=function(){return uy(this,arguments,function*(){for(;;){for(M.length||(yield rr(new Promise(oe=>O.resolve=oe)));M.length;)yield yield rr(M.shift());if(O.error)throw O.error;if(O.done)return yield rr(void 0)}})}();return W.throw=async re=>(O.done||(O.done=!0,O.error=re,O.resolve()),{done:!0,value:void 0}),W.return=async()=>(L(),{done:!0,value:void 0}),W},async dispose(){if(F=!0,E){const[I]=await E;I.close(1e3,"Normal Closure")}},terminate(){E&&_.emit("closed",{code:4499,reason:"Terminated",wasClean:!1})}}}function Li(e){return mn(e)&&"code"in e&&"reason"in e}function py(e){return[1e3,1001,1006,1005,1012,1013,1014].includes(e)?!1:e>=1e3&&e<=1999}function fy(e){return typeof e=="function"&&"constructor"in e&&"CLOSED"in e&&"CLOSING"in e&&"CONNECTING"in e&&"OPEN"in e}var hy=Object.defineProperty,my=(e,t,n)=>t in e?hy(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Me=(e,t,n)=>(my(e,typeof t!="symbol"?t+"":t,n),n),gy=class{constructor(t){Me(this,"_isConnected"),Me(this,"_messageHandler"),Me(this,"_messageHandlerWrapper"),Me(this,"_options"),this._options=t,this._isConnected=!1,this._messageHandler=()=>{},this._messageHandlerWrapper=n=>{var r;(r=this._options)!=null&&r.allowedOrigins&&!this._options.allowedOrigins.includes(n.origin)||this._messageHandler(n.data)}}get isConnected(){return this._isConnected}connect(){window.addEventListener("message",this._messageHandlerWrapper),this._isConnected=!0}disconnect(){window.removeEventListener("message",this._messageHandlerWrapper),this._isConnected=!1}sendMessage(t){var r,i,o;let n;if((r=this._options)!=null&&r.providerWindow?n=this._options.providerWindow:(i=this._options)!=null&&i.useDirectParent?n=window.parent:n=window.top,!n)throw new Error("No parent window to send message to");(o=this._options)!=null&&o.allowedOrigins?this._options.allowedOrigins.forEach(a=>{n.postMessage(t,a)}):n.postMessage(t,"*")}onMessage(t){this._messageHandler=t}};function Pp(){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,t=>t.toString(16).padStart(2,"0")).join("")}var wr=(e=>(e.RPC_REQUEST="rpc-request",e.RPC_RESPONSE="rpc-response",e.RPC_CALLBACK_CALL="rpc-callback-call",e.RPC_CONNECT_REQUEST="rpc-connect-request",e.RPC_CONNECT_RESPONSE="rpc-connect-response",e))(wr||{});function vy({namespace:e}){return{_transframe:!0,type:wr.RPC_CONNECT_REQUEST,namespace:e}}function yy({requestId:e,method:t,payload:n,namespace:r}){return{_transframe:!0,type:wr.RPC_REQUEST,requestId:e??Pp(),method:t,payload:n,namespace:r}}function by(e){return{_transframeCallback:!0,callbackId:e}}function Zo(e){return(e==null?void 0:e._transframe)===!0}function xy(e){return Zo(e)&&e.type===wr.RPC_RESPONSE}function _y(e){return Zo(e)&&e.type===wr.RPC_CALLBACK_CALL}function wy(e){return Zo(e)&&e.type===wr.RPC_CONNECT_RESPONSE}var Ey=3e3,ky=50,Ty=60,Sy=class{constructor(t,n){var r;this._interface=t,Me(this,"_options"),Me(this,"_api"),Me(this,"_requestCallbacks",new Map),Me(this,"_rpcCallbacks",new Map),Me(this,"_availableMethods",new Set),Me(this,"_isConnected",!1),Me(this,"_isConnecting",!1),Me(this,"_apiCallQueue",[]),Me(this,"_buildApi",()=>new Proxy({},{get:(o,a,s)=>["Symbol(Symbol.toPrimitive)","then"].includes(String(a))?Reflect.get(o,a,s):(...c)=>this.call(a,...c)})),Me(this,"connect",async()=>{var a;if(this._isConnecting||this._isConnected)return;this._interface.connect();const i=vy({namespace:(a=this._options)==null?void 0:a.namespace});this._isConnecting=!0;const o=await new Promise((s,c)=>{this._requestCallbacks.set("connect",[s,c]);let u=0;const p=()=>{this._interface.sendMessage(i),u++};p();const d=setInterval(()=>{var h;this._isConnected?clearInterval(d):u<Ty?p():(clearInterval(d),this._requestCallbacks.delete("connect"),this._isConnected=!1,this._isConnecting=!1,this._apiCallQueue.forEach(([,f])=>{var m;return f(new Error(`Failed to call api method: could not connect to provider ${((m=this._options)==null?void 0:m.namespace)??""}`))}),c(new Error(`Could not connect to provider ${((h=this._options)==null?void 0:h.namespace)??""}`)))},ky)});this._availableMethods.clear(),o.forEach(s=>this._availableMethods.add(s)),this._isConnected=!0,this._isConnecting=!1,this._processApiCallQueue()}),Me(this,"_messageHandler",i=>{var o;if(Zo(i)&&i.namespace===((o=this._options)==null?void 0:o.namespace)){if(xy(i)){const[a,s]=this._requestCallbacks.get(i.requestId)??[];if(!(a&&s))return;i.error?s(i.result):a(i.result),this._requestCallbacks.delete(i.requestId)}else if(_y(i)){const a=this._rpcCallbacks.get(i.callbackId);if(!a)return;a(...i.payload)}else if(wy(i)){const[a,s]=this._requestCallbacks.get("connect")??[];if(!(a&&s))return;a(i.methods),this._requestCallbacks.delete("connect")}}}),Me(this,"call",async(i,...o)=>{var p;if(!this._isConnected&&!this._isConnecting)throw new Error("Cannot call any api methods: Not connected to provider");this._isConnecting&&await new Promise((d,h)=>{this._apiCallQueue.push([d,h])});const a=String(i);if(!this.hasMethod(a))throw new Error(`Method ${a} is not available`);const s=o.map(d=>{if(typeof d=="function"){const h=Pp();return this._rpcCallbacks.set(h,d),by(h)}else return d}),c=yy({method:a,payload:s,namespace:(p=this._options)==null?void 0:p.namespace});return this._interface.sendMessage(c),await Promise.race([new Promise((d,h)=>{this._requestCallbacks.set(c.requestId,[d,h])}),new Promise((d,h)=>{var f;setTimeout(()=>{h(new Error("RPC request timed out. Check that you can connect to the provider and that the method exists."))},((f=this._options)==null?void 0:f.apiCallTimeout)??Ey)})])}),this._options=n,this._api=this._buildApi(),this._interface.onMessage(this._messageHandler),((r=this._options)==null?void 0:r.connectImmediately)!==!1&&this.connect()}_processApiCallQueue(){this._apiCallQueue.forEach(([t])=>t()),this._apiCallQueue=[]}get api(){return this._api}get isConnected(){return this._isConnected&&this._interface.isConnected}hasMethod(t){return this._availableMethods.has(t)}};function Ny(e){if(!("window"in globalThis))throw new Error('Transframe: global "window" not available. Cannot initialize a consumer.');return new Sy(new gy(e),e)}var Iy="https://mycelium.staging.bio/graphql",Da;function Dp(){return Da||(Da=Ny({namespace:"truffle-injected-unprivileged-embed-api-v1",useDirectParent:!0})),Da}async function Cy(){return await Dp().call("userGetAccessToken")}function jl(e={}){const t=e.url||Iy,n=dy({url:t.replace("http","ws"),retryAttempts:99999,retryWait:async r=>{const i=Math.min((r+1)*400,5e3);await new Promise(o=>setTimeout(o,i))},shouldRetry:()=>!0});return new Av({url:t,exchanges:[Tp,kp,ay({async getAuth({authState:r}){const i=r??{};if(i.userAccessToken||(i.userAccessToken=e.userAccessToken||await Cy()),e.orgId)i.orgId=e.orgId;else{const o=JSON.parse(atob(i.userAccessToken.split(".")[1]));i.orgId=o.orgId}return i},addAuthToOperation({authState:r,operation:i}){const o=r,a=typeof i.context.fetchOptions=="function"?i.context.fetchOptions():i.context.fetchOptions||{},s={};return o.userAccessToken&&(s["x-access-token"]=o.userAccessToken),o.orgId&&(s["x-org-id"]=o.orgId),Tn(i.kind,i,{...i.context,fetchOptions:{...a,headers:{...a.headers,...s}}})},didAuthError({error:r}){var o;return(o=r==null?void 0:r.graphQLErrors)==null?void 0:o.some(a=>{var s;return((s=a.extensions)==null?void 0:s.code)===401})},willAuthError(){return!1}}),Sp,Nv({forwardSubscription(r){return{subscribe:i=>({unsubscribe:n.subscribe(r,i)})}}})],...e.urqlOptions})}var ac=class{constructor(e){this._observable=e,this._observers=[],this._subscription=null,this._hasGottenFirstValue=!1}_subscribeToObservable(){this._subscription=this._observable.subscribe({next:e=>{this._hasGottenFirstValue=!0,this._latestValue=e,this._observers.forEach(t=>{t.next(e)})},error:e=>{this._observers.forEach(t=>{var n;(n=t.error)==null||n.call(t,e)})},complete:()=>{this._observers.forEach(e=>{var t;(t=e.complete)==null||t.call(e)})}})}subscribe(e){this._subscription||this._subscribeToObservable(),this._observers.push(e),this._hasGottenFirstValue&&e.next(this._latestValue);let t=!1;return{unsubscribe:()=>{var n;this._observers=this._observers.filter(r=>r!==e),t=!0,this._observers.length===0&&((n=this._subscription)==null||n.unsubscribe(),this._subscription=null)},get closed(){return t}}}switch(e){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._observable=e,this._subscribeToObservable()}},Oy=Jo`
  query SDKMeQuery {
    me {
      id
      name
      avatarImage {
        cdn
        prefix
        ext
        variations {
          postfix
          width
          height
        }
        aspectRatio
      }
    }
  }
`;Jo`
  mutation SDKUserAnonCreate {
    userLoginAnon {
      accessToken
    }
  }
`;var Ay=class{constructor(e){this._gqlClient=e,this._observable=new ac(this._getUserObservable())}_getUserObservable(){return Ko(this._gqlClient.query(Oy,{}),He(e=>{var t;return(t=e.data)==null?void 0:t.me}),ic)}get gqlClient(){return this._gqlClient}set gqlClient(e){this._gqlClient=e;const t=this._getUserObservable();this._observable.switch(t)}get observable(){return this._observable}},$y=Jo`
  query SDKOrgQuery($id: ID, $slug: String) {
    org(input: { id: $id, slug: $slug }) {
      id
      slug
      name
    }
  }
`,Ry=class{constructor(e,t){this._gqlClient=e,this._orgInput=t,this._observable=new ac(this._getOrgObservable())}_getOrgObservable(){return Ko(this._gqlClient.query($y,this._orgInput),He(e=>{var t;return(t=e.data)==null?void 0:t.org}),ic)}get gqlClient(){return this._gqlClient}set gqlClient(e){this._gqlClient=e}get observable(){return this._observable}},Py=Jo`
  query SDKOrgUserQuery($id: ID, $userId: ID, $orgId: ID) {
    orgUser(input: { id: $id, userId: $userId, orgId: $orgId }) {
      id
      name
      # TODO: refactor this into a role client object
      roleConnection {
        nodes {
          id
          slug
          name
          permissionConnection {
            nodes {
              id
              filters
              action
              value
            }
          }
        }
      }
      # TODO: refactor this into a powerup client object
      activePowerupConnection {
        nodes {
          powerup {
            id
            slug
            jsx
            componentRels {
              props
            }
          }
        }
      }
    }
  }
`,Dy=class{constructor(e,t){this._gqlClient=e,this._input=t,this._observable=new ac(this._getOrgUserObservable())}_getOrgUserObservable(){return Ko(this._gqlClient.query(Py,this._input),He(e=>{var t;return(t=e.data)==null?void 0:t.orgUser}),ic)}get observable(){return this._observable}get gqlClient(){return this._gqlClient}set gqlClient(e){this._gqlClient=e;const t=this._getOrgUserObservable();this._observable.switch(t)}},Ly=class{constructor(e){this._isAuthenticated=!1;const t=n=>{this._gqlClient=jl(n),this._user.gqlClient=this._gqlClient,this._orgUser.gqlClient=this._gqlClient,this._org.gqlClient=this._gqlClient};e!=null&&e.userAccessToken||Dp().call("userOnAccessTokenChanged",n=>{t({userAccessToken:n,...e})},{immediate:!1}).catch(()=>console.warn("[@trufflehq/sdk] Failed to listen for access token changes")),this._gqlClient=jl(e),this._user=new Ay(this._gqlClient),this._orgUser=new Dy(this._gqlClient),this._org=new Ry(this._gqlClient)}get isAuthenticated(){return this._isAuthenticated}get gqlClient(){return this._gqlClient}get user(){return this._user}get org(){return this._org}get orgUser(){return this._orgUser}};const My=Object.prototype.hasOwnProperty;function Re(e){return Array.isArray(e)}function Lp(e){return typeof e=="string"}function st(e){return!!e&&typeof e=="object"&&!Re(e)}function Pt(e){return typeof e=="function"}function Nt(e){const t=typeof e;return e!==void 0&&t!=="object"&&t!=="function"}function Mp(e){return typeof e=="boolean"}function Sn(e){return e instanceof Promise}function sn(e){if(!e)return!1;if(Re(e))return e.length===0;for(const t in e)if(My.call(e,t))return!1;return!0}const Fy=new Set(["boolean","string","number"]);function Uy(e){return Fy.has(typeof e)}function ea(e){return!!e.parent}let jr=0;const Fp=[],cn={current:void 0,inRemoteChange:!1};function qy(){Fp.push(cn.current),jr++,cn.current={}}function By(){jr--,jr<0&&(jr=0),cn.current=Fp.pop()}function to(e,t){if(jr){const n=cn.current;if(n){n.nodes||(n.nodes=new Map);const r=n.nodes.get(e);r?(r.track=r.track||t,r.num++):n.nodes.set(e,{node:e,track:t,num:1})}}}const jy=Symbol.toPrimitive,ta=Symbol("isObservable"),sc=Symbol("isEvent"),cc=Symbol("getNode"),Er=Symbol("delete"),Co=Symbol("opaque"),lc=Symbol("optimized"),Vy=new Map,Vl=new Map;function Up(e){const t=e.root,n=t.activate;n&&(t.activate=void 0,n())}function qp(e,t){return to(e,t),na(e)}function na(e){return Up(e),bt(e)}const zl=[];function bt(e){let t=0,n=e;for(;ea(n);)zl[t++]=n.key,n=n.parent;let r=e.root._;for(let i=t-1;r&&i>=0;i--){const o=zl[i];r=r instanceof Map||r instanceof WeakMap?r.get(o):r[o]}return r}function mr(e,t){var n;let r=(n=e.children)===null||n===void 0?void 0:n.get(t);return r||(r={root:e.root,parent:e,key:t},e.children||(e.children=new Map),e.children.set(t,r)),r}function Bp(e){let t=bt(e);if(!t)if(ea(e)){const n=Bp(e.parent);t=n[e.key]={}}else t=e.root._={};return t}function zy(e,t){let n=st(e)?"id"in e?"id":"key"in e?"key":"_id"in e?"_id":"__id"in e?"__id":void 0:void 0;if(!n&&t.parent){const r=bt(t.parent)[t.key+"_keyExtractor"];r&&Pt(r)&&(n=r)}return n}let Vr,zr=0,La=!1,Ma=!1,xs=[],ei=new Map;function Hy(){ei.size>0&&Ln(!0)}function Wy(e,t){let n=e?JSON.parse(JSON.stringify(e)):{};for(let r=0;r<t.length;r++){const{path:i,prevAtPath:o}=t[r];let a=n;if(i.length>0){let s;for(s=0;s<i.length-1;s++)a=a[i[s]];a[i[s]]=o}else n=o}return n}function Gy(e,t){return function(){return Wy(e,t)}}function Hr(e,t,n,r,i){const o=new Map;uc(o,e,t,[],[],t,n,!0,r,i),jp(o,!0);const a=ei.get(e);a?a.value=t:ei.set(e,{value:t,prev:n,level:r,whenOptimizedOnlyIf:i}),zr<=0&&Vp()}function Yy(e,t,n,r,i,o,a,s,c,u){if(s?t.listenersImmediate:t.listeners){const p={path:r,pathTypes:i,valueAtPath:o,prevAtPath:a},d=e.get(t);d&&r.length>0?d.changes.push(p):e.set(t,{level:c,value:n,whenOptimizedOnlyIf:u,changes:[p]})}}function uc(e,t,n,r,i,o,a,s,c,u){if(Yy(e,t,n,r,i,o,a,s,c,u),t.parent){const p=t.parent;if(p){const d=bt(p);uc(e,p,d,[t.key].concat(r),[Re(n)?"array":"object"].concat(i),o,a,s,c+1,u)}}}function jp(e,t){const n=new Set;e.forEach(({changes:r,level:i,value:o,whenOptimizedOnlyIf:a},s)=>{const c=t?s.listenersImmediate:s.listeners;if(c){let u;const p=Array.from(c);for(let d=0;d<p.length;d++){const h=p[d],{track:f,noArgs:m,listener:g}=h;n.has(g)||(f===!0||f==="shallow"?i<=0:f!==lc||a&&i<=0)&&(!m&&!u&&(u={value:o,getPrevious:Gy(o,r),changes:r}),f||n.add(g),g(u))}}})}function Vp(){const e=ei;ei=new Map;const t=new Map;e.forEach(({value:n,prev:r,level:i,whenOptimizedOnlyIf:o},a)=>{uc(t,a,n,[],[],n,r,!1,i,o)}),jp(t,!1)}function dc(e,t){t&&xs.push(t),Ei();try{e()}finally{Ln()}}function Ei(){zr++,Vr||(Vr=setTimeout(Hy,0))}function Ln(e){if(zr--,zr<=0||e)if(La)Ma=!0;else{Vr&&(clearTimeout(Vr),Vr=void 0),zr=0;const t=xs;t.length&&(xs=[]),La=!0,Vp(),La=!1;for(let n=0;n<t.length;n++)t[n]();Ma&&(Ma=!1,Ln(!0))}}function ra(e){return e&&!!e[ta]}function zp(e,t){let n=e;return Pt(n)&&(n=t?n(t):n()),ra(n)?n.get():n}function Hp(e){return e[cc]}function Oo(e){return e&&(e[Co]=!0),e}function Fa(e,t){var n;const r=(n=Hp(e))===null||n===void 0?void 0:n.root;r&&(r.locked=t)}function Wp(e,t,n,r,i,o){let a=e,s=i;if(t.length>0)for(let c=0;c<t.length;c++){const u=t[c];if(c===t.length-1)a[u]!==r&&(a[u]=r);else if(a[u]===Er){s&&(a[u]=s[u],o==null||o(t.slice(0,c+1),a[u]));break}else(a[u]===void 0||a[u]===null)&&(a[u]=n[c]==="array"?[]:{});a=a[u],s&&(s=s[u])}else e=r;return e}function Hl(e,t,n,r){let i=e,o=n;for(let a=0;a<t.length;a++){const s=t[a];i=i[s],o=o[s]}o===Er?i.delete():r==="assign"&&i.assign&&st(i.peek())?i.assign(o):i.set(o)}function Gp(e,...t){Ei();const n=Yp(e,...t);return Ln(),n}function Yp(e,...t){var n;if(!t.length)return e;for(let r=0;r<t.length;r++){const i=t[r],o=ra(e),a=o?e.peek():e,s=Re(a);if(!s&&st(a)&&st(i)&&!sn(a)||s&&Re(i)&&a.length>0)for(const u in i){const p=i[u];if(p===Er)o&&(!((n=e[u])===null||n===void 0)&&n.delete)?e[u].delete():delete e[u];else{const d=st(p),h=!d&&Re(p),f=e[u];(d||h)&&f&&(o||!sn(f))?!o&&(!f||(d?!st(f):!Re(f)))?e[u]=p:Yp(f,p):o?f.set(p):e[u]=p}}else i!==void 0&&(o?e.set(i):e=i)}return e}function Qp(e,t,n){let r;if(e.length>0){let i=r={};for(let o=0;o<e.length;o++){const a=e[o];i[a]=o===e.length-1?t:n[o]==="array"?[]:{},i=i[a]}}else r=t;return r}function Kp(e,t){let n=t;for(let r=0;r<e.length;r++){const i=e[r];n=n[i]}return n}function Qy(e){return!!e&&(!st(e)&&!Re(e)||!sn(e))}function pc(e,t,n={}){const{initial:r,immediate:i,noArgs:o}=n;let{trackingType:a}=n;a==="optimize"&&(a=lc);let s=i?e.listenersImmediate:e.listeners;s||(s=new Set,i?e.listenersImmediate=s:e.listeners=s),Up(e);const c={listener:t,track:a,noArgs:o};s.add(c);let u=e.parent;for(;u&&!u.descendantHasListener;)u.descendantHasListener=!0,u=u.parent;if(r){const p=bt(e);t({value:p,changes:[{path:[],pathTypes:[],prevAtPath:p,valueAtPath:p}],getPrevious:()=>{}})}return()=>s.delete(c)}function Wl(e,t,n,r){let i=[];return e==null||e.forEach(o=>{const{node:a,track:s}=o;i.push(pc(a,t,{trackingType:s,immediate:r,noArgs:n}))}),()=>{if(i){for(let o=0;o<i.length;o++)i[o]();i=void 0}}}function Jp(e,t,n,r,i){let o,a,s,c,u,p=t,d=!0;return ra(e)?(a=e.peek(),s=e.onChange(t,{noArgs:!0}),u=i&&e.onChange(t,{noArgs:!0})):(qy(),a=e&&zp(e,n),c=cn.current,o=c.nodes,By()),n!=null&&n.cancel||(s=Wl(o,p,d,r==null?void 0:r.immediate),u=i&&(()=>Wl(o,p,d))),{value:a,dispose:s,resubscribe:u}}const Ky=new Set(["copyWithin","fill","from","pop","push","reverse","shift","sort","splice","unshift"]),Jy=new Set(["every","filter","find","findIndex","forEach","includes","join","map","some"]),Xy=new Set(["filter","find"]),Gl=new Map,Xp=new Map([["get",qp],["set",ia],["peek",na],["onChange",pc],["assign",nb],["delete",rb],["toggle",tb]]);function Zy(e,t,n,...r){var i;const o=Re(t)&&t.slice()||t,a=t[n].apply(t,r);if(e){const s=ea(e),c=s?e.key:"_",u=s?bt(e.parent):e.root;u[c]=o,ti((i=e.parent)!==null&&i!==void 0?i:e,s?c:void 0,t)}return a}function _s(e,t,n){if(st(t)&&t[Co]||st(n)&&n[Co]){const f=t!==n;return f&&(e.listeners||e.listenersImmediate)&&Hr(e,t,n,0),f}const r=Re(t);let i,o;const a=t instanceof Map,s=t?a?Array.from(t.keys()):Object.keys(t):[],c=n?a?Array.from(n.keys()):Object.keys(n):[];let u,p,d=!1,h;if(r&&Re(n)){if(n.length>0){const f=n[0];if(f!==void 0&&(u=zy(f,e),u&&(p=Pt(u),i=new Map,o=[],e.children)))for(let m=0;m<n.length;m++){const g=n[m];if(g){const x=e.children.get(m+"");if(x){const v=p?u(g):g[u];i.set(v,x)}}}}}else if(n&&(!t||t.hasOwnProperty)){const f=c.length;for(let m=0;m<f;m++){const g=c[m];if(!s.includes(g)){d=!0;const x=mr(e,g),v=a?n.get(g):n[g];v!==void 0&&(Nt(v)||_s(x,void 0,v),(x.listeners||x.listenersImmediate)&&Hr(x,void 0,v,0))}}}if(t&&!Nt(t)){const f=s.length;d=d||(s==null?void 0:s.length)!==(c==null?void 0:c.length);const m=d;let g=!1;if(e.descendantHasListener||!d){for(let x=0;x<f;x++){const v=s[x],b=a?t.get(v):t[v],y=a?n==null?void 0:n.get(v):n==null?void 0:n[v];let _=b!==y;if(_){const w=u&&b?p?u(b):b[u]:void 0;let E=mr(e,v);if(r&&w!==void 0){const k=w!==void 0?i==null?void 0:i.get(w):void 0;if(!k)_=!1,d=!0;else if(k!==void 0&&k.key!==v){const T=n[k.key];m&&(E=k,e.children.delete(E.key),E.key=v,o.push([v,E])),g=!0,_=T!==b}}if(_)if(Nt(b))d=!0;else{const k=(!d||E.descendantHasListener)&&_s(E,b,y);d=d||k}(_||!m)&&(E.listeners||E.listenersImmediate)&&Hr(E,b,y,0,!m)}}if(o)for(let x=0;x<o.length;x++){const[v,b]=o[x];e.children.set(v,b)}}h=d||g}else n!==void 0&&(h=!0);return h??!1}function jt(e,t){return t!==void 0&&(e=mr(e,t)),e.proxy||(e.proxy=new Proxy(e,eb))}const eb={get(e,t){if(t===jy)throw new Error("[legend-state] observable is not a primitive.");if(t===ta)return!0;if(t===sc)return!1;if(t===cc)return e;const n=na(e);if(n instanceof Map||n instanceof WeakMap||n instanceof Set||n instanceof WeakSet){const s=ib(e,t,n);if(s!==void 0)return s}const r=Xp.get(t);if(r)return function(s,c,u){switch(arguments.length){case 0:return r(e);case 1:return r(e,s);case 2:return r(e,s,c);default:return r(e,s,c,u)}};const i=Gl.get(t);if(i)return i.get(e);const o=Nt(n);if((n==null||o)&&Vl.size&&(e.isActivatedPrimitive||Vy.has(t))){e.isActivatedPrimitive=!0;const s=Vl.get(t);if(s!==void 0)return Pt(s)?s(jt(e)):s}const a=n==null?void 0:n[t];if(st(n)&&n[Co])return a;if(Pt(a)){if(Re(n)){if(Ky.has(t))return(...s)=>Zy(e,n,t,...s);if(Jy.has(t))return to(e),function(s,c){function u(p,d,h){return s(jt(e,d+""),d,h)}if(Xy.has(t)){const p=t==="find",d=[];for(let h=0;h<n.length;h++)if(u(n[h],h,n)){const f=jt(e,h+"");if(p)return f;d.push(f)}return p?void 0:d}else return n[t](u,c)}}return a.bind(n)}return Nt(a)&&Re(n)&&t==="length"?(to(e,!0),a):jt(e,t)},getPrototypeOf(e){const t=bt(e);return t!==null&&typeof t=="object"?Reflect.getPrototypeOf(t):null},ownKeys(e){const t=bt(e);if(Nt(t))return[];const n=t?Reflect.ownKeys(t):[];return to(e,!0),Re(t)&&n[n.length-1]==="length"&&n.splice(n.length-1,1),n},getOwnPropertyDescriptor(e,t){const n=bt(e);return Nt(n)?void 0:Reflect.getOwnPropertyDescriptor(n,t)},set(e,t,n){if(e.isSetting)return Reflect.set(e,t,n);if(e.isAssigning)return ti(e,t,n),!0;const r=Gl.get(t);return r?r.set(e,n):!1},deleteProperty(e,t){return e.isSetting?Reflect.deleteProperty(e,t):!1},has(e,t){const n=bt(e);return Reflect.has(n,t)}};function ia(e,t){return e.parent?ti(e.parent,e.key,t):ti(e,void 0,t)}function tb(e){const t=bt(e);if(t===void 0||Mp(t))return ia(e,!t),!t}function ti(e,t,n,r){if(e.root.locked&&!e.root.set)throw new Error("[legend-state] Modified locked observable");const i=n===Er;i&&(n=void 0);const o=!e.parent&&t===void 0;o&&(t="_");const a=o?e:mr(e,t),s=o?e.root:Bp(e),c=s[t],u=Pt(n);n=!e.isAssigning&&u?n(c):st(n)&&(n!=null&&n[ta])?n.peek():n;const p=Nt(n)||n instanceof Date;try{e.isSetting=(e.isSetting||0)+1,i?delete s[t]:s[t]=n}finally{e.isSetting--}return e.root.locked&&e.root.set&&e.root.set(e.root._),n!==c&&no(e,n,c,a,p,o,r),u?n:o?jt(e):jt(e,t)}function nb(e,t){const n=jt(e);Ei(),Nt(e.root._)&&(e.root._={}),e.isAssigning=(e.isAssigning||0)+1;try{Object.assign(n,t)}finally{e.isAssigning--}return Ln(),n}function rb(e,t){t===void 0&&ea(e)&&(t=e.key,e=e.parent),ti(e,t,Er,-1)}function ib(e,t,n){const r=n==null?void 0:n[t];if(Pt(r))return function(i,o,a){const s=arguments.length;if(t==="get"){if(s>0&&typeof i!="boolean"&&i!==lc)return jt(e,i)}else if(t==="set"){if(s===2){const u=n.get(i),p=n.set(i,o);return u!==o&&no(mr(e,i),o,u),p}}else if(t==="delete"){if(s>0){const u=n.get?n.get(i):i,p=n.delete(i);return p&&no(mr(e,i),void 0,u),p}}else if(t==="clear"){const u=new Map(n),p=n.size;n.clear(),p&&no(e,n,u);return}else if(t==="add"){const u=new Set(n),p=n.add(i);return n.has(t)||Hr(e,p,u,0),p}const c=Xp.get(t);if(c)switch(s){case 0:return c(e);case 1:return c(e,i);case 2:return c(e,i,o);default:return c(e,i,o,a)}else return n[t](i,o)}}function no(e,t,n,r,i,o,a){r||(r=e),Ei();let s=i,c=!1;(!i||n&&!Nt(n))&&(s=_s(r,t,n),Re(t)&&(c=(t==null?void 0:t.length)!==(n==null?void 0:n.length))),(i||!t||sn(t)?t!==n:s)&&Hr(i&&o?e:r,t,n,a??n===void 0?-1:s?0:1,c),Ln()}function Mt(e){this._node=e,this.set=this.set.bind(this),this.toggle=this.toggle.bind(this)}Object.defineProperty(Mt.prototype,cc,{configurable:!0,get(){return this._node}});Object.defineProperty(Mt.prototype,ta,{configurable:!0,value:!0});Object.defineProperty(Mt.prototype,sc,{configurable:!0,value:!1});Mt.prototype.peek=function(){return na(this._node)};Mt.prototype.get=function(){return qp(this._node)};Mt.prototype.set=function(e){return ia(this._node,e)};Mt.prototype.toggle=function(){const e=this.peek();return(e===void 0||Mp(e))&&this.set(!e),!e};Mt.prototype.delete=function(){return this.set(void 0),this};Mt.prototype.onChange=function(e,t){return pc(this._node,e,t)};function ob(e,t){const n=Sn(e),i={root:{_:n?void 0:e}},o=t||Uy(e)?new Mt(i):jt(i);return n&&(e.catch(a=>{o.set({error:a})}),e.then(a=>{o.set(a)})),o}function Ee(e){return ob(e)}function Zp(e,t,n){let r;Pt(t)?r=t:n=t;let i;const o={num:0},a=function(){o.onCleanup&&(o.onCleanup(),o.onCleanup=void 0),Ei(),delete o.value,i==null||i();const{dispose:s,value:c}=Jp(e,a,o,n);i=s,o.value=c,o.onCleanupReaction&&(o.onCleanupReaction(),o.onCleanupReaction=void 0),r&&(o.num>0||!(e!=null&&e[sc]))&&o.previous!==o.value&&r(o),o.previous=o.value,o.num++,Ln()};return a(),()=>{var s,c;(s=o.onCleanup)===null||s===void 0||s.call(o),o.onCleanup=void 0,(c=o.onCleanupReaction)===null||c===void 0||c.call(o),o.onCleanupReaction=void 0,i()}}function je(e,t){const n=Ee();Fa(n,!0);const r=Hp(n),i=function(o){o!==n.peek()&&(Fa(n,!1),ia(r,o),Fa(n,!0))};return r.root.activate=()=>{Zp(e,({value:o})=>{Sn(o)?o.then(a=>i(a)):i(o)},{immediate:!0})},t&&(r.root.set=o=>{dc(()=>t(o))}),n}function ab(e,t,n){let r;function i(o){const a=zp(e);(n?Qy(a):a)&&(r=a,t==null||t(a),o.cancel=!0)}return Zp(i),r!==void 0?Promise.resolve(r):new Promise(a=>{if(t){const s=t;t=c=>{const u=s(c);a(u)}}else t=a})}function Ct(e,t){return ab(e,t,!1)}var ef={exports:{}},Ua={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yl;function sb(){if(Yl)return Ua;Yl=1;var e=Oe;function t(d,h){return d===h&&(d!==0||1/d===1/h)||d!==d&&h!==h}var n=typeof Object.is=="function"?Object.is:t,r=e.useState,i=e.useEffect,o=e.useLayoutEffect,a=e.useDebugValue;function s(d,h){var f=h(),m=r({inst:{value:f,getSnapshot:h}}),g=m[0].inst,x=m[1];return o(function(){g.value=f,g.getSnapshot=h,c(g)&&x({inst:g})},[d,f,h]),i(function(){return c(g)&&x({inst:g}),d(function(){c(g)&&x({inst:g})})},[d]),a(f),f}function c(d){var h=d.getSnapshot;d=d.value;try{var f=h();return!n(d,f)}catch{return!0}}function u(d,h){return h()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u:s;return Ua.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:p,Ua}(function(e){e.exports=sb()})(ef);function cb(){let e=0,t,n;const r=()=>{e++,t==null||t()};return{subscribe:i=>(t=i,()=>{n==null||n(),n=void 0}),getVersion:()=>e,run:i=>{n==null||n();const{value:o,dispose:a,resubscribe:s}=Jp(i,r,void 0,void 0,!0);return n=a,o}}}function Ql(e){const t=se();t.current||(t.current=cb());const{subscribe:n,getVersion:r,run:i}=t.current,o=i(e);return ef.exports.useSyncExternalStore(n,r,r),o}const Kl=typeof Symbol=="function"&&Symbol.for;function lb(e,t,n,r){const i=Kl?Symbol.for("react.forward_ref"):typeof me=="function"&&me(h=>null).$$typeof,o=Kl?Symbol.for("react.memo"):typeof me=="function"&&_o(h=>null).$$typeof;if(e.__legend_proxied)return e;let a=!1,s=!1,c=e;o&&c.$$typeof===o&&c.type&&(s=!0,c=c.type),i&&c.$$typeof===i&&(a=!0,c=c.render);const u={apply(h,f,m){if(n){const g=m[0],x={},v=Object.keys(g);for(let b=0;b<v.length;b++){const y=v[b],_=g[y];if(y.startsWith("$")||y.endsWith("$")){const w=y.endsWith("$")?y.slice(0,-1):y.slice(1);x[w]=Ql(_);const E=r==null?void 0:r[w];if(E&&ra(_)){E.defaultValue!==void 0&&x[w]===void 0&&(x[w]=E.defaultValue);const k=T=>{var R;_.set(E.getValue(T)),(R=g[E.handler])===null||R===void 0||R.call(g,T)};x[E.handler]=ue(k,[g[E.handler],r])}delete x[y]}else x[y]===void 0&&(x[y]=_)}m[0]=x}return t?Ql(()=>Reflect.apply(h,f,m)):Reflect.apply(h,f,m)}},p=new Proxy(c,u);let d;return a?(d=me(p),d.__legend_proxied=!0):d=p,t||s?_o(d):d}function V(e){return lb(e,!0)}function tf(e,t,n){!n&&Re(t)&&(n=t,t=void 0);const r=se({});return r.current.compute=e,r.current.set=t,ce(()=>je(()=>Pt(r.current.compute)?r.current.compute():r.current.compute,t?i=>r.current.set(i):void 0),n||[])}function K(e){return ce(()=>Ee(Pt(e)?e():e),[])}const ir={};function ub(e){Object.assign(ir,e)}function nf(e,t,n){const r={};let i=r;for(let s=0;s<e.length;s++)i=i[e[s]]=s===e.length-1?null:t[s]==="array"?[]:{};let o=yn(r,n);const a=[];for(let s=0;s<e.length;s++){const c=Object.keys(o)[0];a.push(c),o=o[c]}return a}function yn(e,t){let n=e;if(e){if(e===Er)return e;if(Lp(e))return t[e];n={};const r=Object.keys(t).length===1&&t._dict;for(const i in e){let o=e[i];if(r)n[i]=yn(o,r);else{const a=t[i];if(a===void 0)i!=="@"&&(n[i]=o);else if(a!==null){if(o!=null){if(t[i+"_val"]){const s=t[i+"_val"];Re(o)?o=o.map(c=>s[c]):o=s[o]}else if(t[i+"_arr"]&&Re(o)){const s=t[i+"_arr"];o=o.map(c=>yn(c,s))}else if(st(o)){if(t[i+"_obj"])o=yn(o,t[i+"_obj"]);else if(t[i+"_dict"]){const s=t[i+"_dict"],c={};for(const u in o)c[u]=yn(o[u],s);o=c}}}n[a]=o}}}}return n}function db(e,t,n,r){const i=Qp(t,e,n),o=yn(i,r),a=nf(t,n,r);return{path:a,obj:Kp(a,o)}}const Jl=new WeakMap;function Ao(e){const t=Jl.get(e);if(t)return t;const n={};for(const r in e){const i=e[r];if(r==="_dict")n[r]=Ao(i);else if(r.endsWith("_obj")||r.endsWith("_dict")||r.endsWith("_arr")||r.endsWith("_val")){const o=e[r.replace(/_obj|_dict|_arr|_val$/,"")],a=r.match(/_obj|_dict|_arr|_val$/)[0];n[o+a]=Ao(i)}else typeof i=="string"&&(n[i]=r)}return Jl.set(e,n),n}const or=new WeakMap,qa=Ee({inRemoteSync:!1});let ws=!1;const $o=new WeakMap,Es=new Set;function oa(e){return Lp(e)?{table:e,config:{name:e}}:{table:e.name,config:e}}function ks(e,t){return Sn(e)?e.then(t):t(e)}function Xl(e,t,n,{adjustData:r,fieldTransforms:i}){if(i||r!=null&&r.save){const o=()=>{if(i){const{obj:a,path:s}=db(e,t,n,i);e=a,t=s}return{value:e,path:t}};if(r!=null&&r.save){const a=Qp(t,e,n),s=r.save(a);return ks(s,u=>(e=Kp(t,u),o()))}return o()}return{value:e,path:t}}function fc(e,{adjustData:t,fieldTransforms:n}){if(n){const r=Ao(n);e=yn(e,r)}return t!=null&&t.load&&(e=t.load(e)),e}async function rf(e,t,n,r,i){const o=Array.from(Es);o.length>0&&await Promise.all(o);const{persistenceLocal:a}=t,s=r.local,{table:c,config:u}=oa(s),p=$o.get(e),{modified:d,pending:h}=i;if(h||d&&(!p||d!==p.modified)){const m=Object.assign({},p,i);$o.set(e,m),await a.updateMetadata(c,m,u),d&&n.dateModified.set(d)}}function of(e,t,n,r,i){t.timeoutSaveMetadata&&clearTimeout(t.timeoutSaveMetadata),t.timeoutSaveMetadata=setTimeout(()=>rf(e,t,n,r,i),30)}let Ro=[];async function pb(){const e=Ro;Ro=[],(await Promise.all(e.map(fb))).forEach(hb)}async function fb(e){const{obsState:t,changes:n,localState:r,persistOptions:i,inRemoteChange:o,isApplyingPending:a}=e,s=i.local,{config:c}=oa(s),u=i.remote,p=s&&!c.readonly&&!a&&t.isEnabledLocal.peek(),d=!o&&u&&!u.readonly&&t.isEnabledRemote.peek();if(p||d){if(p&&!t.isLoadedLocal.peek()){console.error("[legend-state] WARNING: An observable was changed before being loaded from persistence",s);return}const h=[],f=[],m=new Set;let g=[];for(let x=n.length-1;x>=0;x--){const{path:v}=n[x];let b=!1;if(m.size>0){for(let y=1;y<v.length;y++)if(m.has((y===v.length-1?v:v.slice(0,y+1)).join("/"))){b=!0;break}}if(!b){const y=v.join("/");m.add(y);const{prevAtPath:_,valueAtPath:w,pathTypes:E}=n[x];if(p){const k=Xl(w,v,E,c);g.push(ks(k,({path:T,value:R})=>{T.includes(void 0)||h.push({path:T,pathTypes:E,prevAtPath:_,valueAtPath:R,pathStr:y})}))}if(d){const k=Xl(w,v,E,u);g.push(ks(k,({path:T,value:R})=>{T.includes(void 0)||(r.pendingChanges||(r.pendingChanges={}),r.pendingChanges[y]||(r.pendingChanges[y]={p:_??null,t:E}),r.pendingChanges[y].v=w,f.push({path:T,pathTypes:E,prevAtPath:_,valueAtPath:R,pathStr:y}))}))}}}return g=g.filter(Boolean),g.length>0&&await Promise.all(g),{queuedChange:e,changesLocal:h,changesRemote:f}}}async function hb(e){var t,n;if(!e)return;const{queuedChange:r,changesLocal:i,changesRemote:o}=e,{obs:a,obsState:s,localState:c,persistOptions:u}=r,{persistenceLocal:p,persistenceRemote:d}=c,h=u.local,{table:f,config:m}=oa(h),g=u.remote;if(o.length>0&&await rf(a,c,s,u,{pending:c.pendingChanges}),i.length>0){let x=p.set(f,i,m);x&&(x=x.then(()=>{Es.delete(x)}),Es.add(x),await x)}if(o.length>0){await Ct(()=>s.isLoadedRemote.get()||g.allowSaveIfError&&s.remoteError.get());const x=await Promise.all(o.map(async v=>{const{path:b,valueAtPath:y,prevAtPath:_,pathTypes:w,pathStr:E}=v;return d.save({obs:a,state:s,options:u,path:b,pathTypes:w,valueAtPath:y,prevAtPath:_}).then(({changes:k,dateModified:T})=>({changes:k,dateModified:T,pathStr:E}))}));if(x.filter(Boolean).length>0){if(h){const v={},b=(t=p.getMetadata(f,m))===null||t===void 0?void 0:t.pending;let y=[];for(let _=0;_<x.length;_++){const w=x[_];if(w){const{changes:E,dateModified:k,pathStr:T}=w;b!=null&&b[T]&&(delete b[T],delete c.pendingChanges[T],v.pending=b),k&&(v.modified=k),E&&!sn(E)&&y.push(fc(E,u.remote))}}y.length>0&&(y.some(_=>Sn(_))&&(y=await Promise.all(y)),Ts(()=>Gp(a,...y))),h&&!sn(v)&&of(a,c,s,u,v)}(n=c.onSaveRemote)===null||n===void 0||n.call(c)}}}function Zl(e,t,n,r,{changes:i}){if(!ws){const o=cn.inRemoteChange,a=n.isApplyingPending;Ro.push({obs:e,obsState:t,localState:n,persistOptions:r,changes:i,inRemoteChange:o,isApplyingPending:a}),Ro.length===1&&queueMicrotask(pb)}}function Ts(e){Ct(()=>!qa.inRemoteSync.get(),()=>{qa.inRemoteSync.set(!0),cn.inRemoteChange=!0,dc(e,()=>{cn.inRemoteChange=!1,qa.inRemoteSync.set(!1)})})}async function mb(e,t,n,r){var i,o;const{local:a}=t,s=t.persistLocal||ir.persistLocal;if(a){const{table:c,config:u}=oa(a);if(!s)throw new Error("Local persistence is not configured");if(!or.has(s)){const m=new s,g={persist:m,initialized:Ee(!1)};if(or.set(s,g),m.initialize){const x=(i=m.initialize)===null||i===void 0?void 0:i.call(m,ir.persistLocalOptions);Sn(x)&&await x}g.initialized.set(!0)}const{persist:p,initialized:d}=or.get(s);if(r.persistenceLocal=p,d.get()||await Ct(d),p.loadTable){const m=p.loadTable(c,u);m&&await m}let h=p.getTable(c,u);const f=p.getMetadata(c,u);if(f&&($o.set(e,f),r.pendingChanges=f.pending,n.dateModified.set(f.modified)),h!=null){let{adjustData:m,fieldTransforms:g}=u;if(g){const x=(o=p.getTableTransformed)===null||o===void 0?void 0:o.call(p,c,u);x&&(h=x,g=void 0)}h=fc(h,{adjustData:m,fieldTransforms:g}),Sn(h)&&(h=await h),dc(()=>{ws=!0,Gp(e,h)},()=>{ws=!1})}n.peek().clearLocal=()=>Promise.all([p.deleteTable(c,u),p.deleteMetadata(c,u)])}n.isLoadedLocal.set(!0)}function gb(e,t){const{remote:n,local:r}=t,i=t.persistRemote||(ir==null?void 0:ir.persistRemote),o={},a=Ee({isLoadedLocal:!1,isLoadedRemote:!1,isEnabledLocal:!0,isEnabledRemote:!0,clearLocal:void 0,sync:()=>Promise.resolve(),getPendingChanges:()=>o.pendingChanges});if(r&&mb(e,t,a,o),n){if(!i)throw new Error("Remote persistence is not configured");or.has(i)||or.set(i,{persist:new i}),o.persistenceRemote=or.get(i).persist;let s=!1;const c=async()=>{var u,p;if(!s){s=!0,o.onSaveRemote=(u=t.remote)===null||u===void 0?void 0:u.onSaveRemote;const d=(p=$o.get(e))===null||p===void 0?void 0:p.modified;o.persistenceRemote.listen({state:a,obs:e,options:t,dateModified:d,onLoad:()=>{a.isLoadedRemote.set(!0)},onChange:async({value:f,path:m,pathTypes:g,mode:x,dateModified:v})=>{if(f!==void 0){f=fc(f,n),Sn(f)&&(f=await f);const b=n.fieldTransforms&&Ao(n.fieldTransforms);if(m.length&&b&&(m=nf(m,g,b)),x==="dateModified")v&&!sn(f)&&Ts(()=>{Hl(e,m,f,"assign")});else{const y=o.pendingChanges;y&&Object.keys(y).forEach(_=>{const w=_.split("/").filter(T=>T!==""),{v:E,t:k}=y[_];f=Wp(f,w,k,E,e.peek(),(T,R)=>{delete y[_],y[T.join("/")]={p:null,v:R,t:k.slice(0,T.length)}})}),Ts(()=>{Hl(e,m,f,x)})}}v&&r&&of(e,o,a,t,{modified:v})}}),await Ct(()=>a.isLoadedRemote.get()||n.allowSaveIfError&&a.remoteError.get());const h=o.pendingChanges;if(h&&!sn(h)){o.isApplyingPending=!0;const f=Object.keys(h),m=[];for(let g=0;g<f.length;g++){const x=f[g],v=x.split("/").filter(w=>w!==""),{p:b,v:y,t:_}=h[x];m.push({path:v,valueAtPath:y,prevAtPath:b,pathTypes:_})}Zl(e,a,o,t,{value:e.peek(),getPrevious:()=>{},changes:m}),o.isApplyingPending=!1}}};n.manual?a.assign({sync:c}):Ct(()=>!r||a.isLoadedLocal.get(),c)}return Ct(a.isLoadedLocal,()=>{e.onChange(Zl.bind(this,e,a,o,t))}),a}const Ba="__m";class vb{constructor(){this.data={}}getTable(t){if(!(typeof localStorage>"u")){if(this.data[t]===void 0)try{const n=localStorage.getItem(t);this.data[t]=n?JSON.parse(n):void 0}catch{console.error("[legend-state] ObservablePersistLocalStorage failed to parse",t)}return this.data[t]}}getMetadata(t){return this.getTable(t+Ba)}get(t,n){const r=this.getTable(t);return r==null?void 0:r[n]}set(t,n){this.data[t]||(this.data[t]={});for(let r=0;r<n.length;r++){const{path:i,valueAtPath:o,pathTypes:a}=n[r];this.data[t]=Wp(this.data[t],i,a,o)}this.save(t)}updateMetadata(t,n){return this.setValue(t+Ba,n)}deleteTable(t){delete this.data[t],localStorage.removeItem(t)}deleteMetadata(t){this.deleteTable(t+Ba)}setValue(t,n){this.data[t]=n,this.save(t)}save(t){if(typeof localStorage>"u")return;const n=this.data[t];n!=null?localStorage.setItem(t,JSON.stringify(n)):localStorage.removeItem(t)}}var er=(e=>(e.Staging="staging",e.Production="production",e.Local="local",e.Unknown="unknown",e))(er||{});function hc(e){switch(xt()){case"local":return`http://localhost:5173/oauth/callback/${e}`;case"staging":return`https://app.staging.bio/oauth/callback/${e}`;case"production":return`https://app.truffle.vip/oauth/callback/${e}`;default:throw new Error(`Unknown env: ${xt()}`)}}function eu(e){switch(xt()){case"local":return`http://localhost:5173/oauth-callback/${e}`;case"staging":return`https://app.staging.bio/oauth-callback/${e}`;case"production":return`https://app.truffle.vip/oauth-callback/${e}`;default:throw new Error(`Unknown env: ${xt()}`)}}function ge(){const e=xt();switch(e){case"local":return"http://localhost:50420/graphql";case"staging":return"https://mycelium.staging.bio/graphql";case"production":return"https://mycelium.truffle.vip/graphql";default:throw new Error(`Unknown env: ${e}`)}}function aa(){const e=xt();switch(e){case"local":return"http://localhost:3000/graphql";case"staging":return"https://mothertree.staging.bio/graphql";case"production":return"https://mothertree.truffle.vip/graphql";default:throw new Error(`Unknown env: ${e}`)}}function xt(){const e=window.location.origin;return e.includes("truffle.vip")?"production":e.includes("staging.bio")||e.includes(".app-truffle-vip.pages.dev")?"staging":e.includes("localhost")||e.includes("192.168")?"local":"unknown"}function Ss(e,t,n={}){let r=`${e}=${t};`;n.expires&&(r+=` expires=${n.expires.toUTCString()};`),n.path&&(r+=` path=${n.path};`),n.sameSite&&(r+=` sameSite=${n.sameSite};`),n.secure&&(r+=" secure;"),document.cookie=r}function mc(e){const t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:""}var yb=Object.defineProperty,bb=(e,t,n)=>t in e?yb(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xe=(e,t,n)=>(bb(e,typeof t!="symbol"?t+"":t,n),n),xb=class{constructor(e){xe(this,"_isConnected"),xe(this,"_messageHandler"),xe(this,"_messageHandlerWrapper"),xe(this,"_options"),this._options=e,this._isConnected=!1,this._messageHandler=()=>{},this._messageHandlerWrapper=t=>{var n;(n=this._options)!=null&&n.allowedOrigins&&!this._options.allowedOrigins.includes(t.origin)||this._messageHandler(t.data)}}get isConnected(){return this._isConnected}connect(){window.addEventListener("message",this._messageHandlerWrapper),this._isConnected=!0}disconnect(){window.removeEventListener("message",this._messageHandlerWrapper),this._isConnected=!1}sendMessage(e){var n,r,i;let t;if((n=this._options)!=null&&n.providerWindow?t=this._options.providerWindow:(r=this._options)!=null&&r.useDirectParent?t=window.parent:t=window.top,!t)throw new Error("No parent window to send message to");(i=this._options)!=null&&i.allowedOrigins?this._options.allowedOrigins.forEach(o=>{t.postMessage(e,o)}):t.postMessage(e,"*")}onMessage(e){this._messageHandler=e}},_b=class{constructor(t){xe(this,"_isListening",!1),xe(this,"_messageHandler",()=>{}),xe(this,"_frameIdMap",new Map),xe(this,"_options"),xe(this,"_messageHandlerWrapper",n=>{var s;if((s=this._options)!=null&&s.allowedOrigins&&!this._options.allowedOrigins.includes(n.origin))return;const r=n.source;if(!r)throw new Error("Somehow the event source is null");const o={fromId:this._frameIdMap.get(n.source),event:n},a=c=>{r.postMessage(c,n.origin)};this._messageHandler(n.data,a,o)}),this._options=t}get isListening(){return this._isListening}listen(){window.addEventListener("message",this._messageHandlerWrapper),this._isListening=!0}close(){window.removeEventListener("message",this._messageHandlerWrapper),this._isListening=!1}onMessage(t){this._messageHandler=t}registerFrame(t,n){if(!(t!=null&&t.contentWindow))throw new Error("Frame must have a contentWindow");this._frameIdMap.set(t.contentWindow,n)}};function gc(){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,t=>t.toString(16).padStart(2,"0")).join("")}var kt=(e=>(e.RPC_REQUEST="rpc-request",e.RPC_RESPONSE="rpc-response",e.RPC_CALLBACK_CALL="rpc-callback-call",e.RPC_CONNECT_REQUEST="rpc-connect-request",e.RPC_CONNECT_RESPONSE="rpc-connect-response",e))(kt||{});function wb({namespace:e}){return{_transframe:!0,type:kt.RPC_CONNECT_REQUEST,namespace:e}}function Eb({namespace:e,methods:t}){return{_transframe:!0,type:kt.RPC_CONNECT_RESPONSE,namespace:e,methods:t}}function kb({requestId:e,method:t,payload:n,namespace:r}){return{_transframe:!0,type:kt.RPC_REQUEST,requestId:e??gc(),method:t,payload:n,namespace:r}}function Tb({requestId:e,result:t,error:n=!1,namespace:r}){return{_transframe:!0,type:kt.RPC_RESPONSE,requestId:e,result:t,error:n,namespace:r}}function Sb(e){return{_transframeCallback:!0,callbackId:e}}function Nb({callbackId:e,payload:t,namespace:n}){return{_transframe:!0,type:kt.RPC_CALLBACK_CALL,callbackId:e,payload:t,namespace:n}}function Mn(e){return(e==null?void 0:e._transframe)===!0}function Ib(e){return Mn(e)&&e.type===kt.RPC_REQUEST}function Cb(e){return Mn(e)&&e.type===kt.RPC_RESPONSE}function Ob(e){return Mn(e)&&e.type===kt.RPC_CALLBACK_CALL}function Ab(e){return(e==null?void 0:e._transframeCallback)===!0}function $b(e){return Mn(e)&&e.type===kt.RPC_CONNECT_REQUEST}function Rb(e){return Mn(e)&&e.type===kt.RPC_CONNECT_RESPONSE}var Pb=3e3,Db=50,Lb=60,Mb=class{constructor(e,t){var n;this._interface=e,xe(this,"_options"),xe(this,"_api"),xe(this,"_requestCallbacks",new Map),xe(this,"_rpcCallbacks",new Map),xe(this,"_availableMethods",new Set),xe(this,"_isConnected",!1),xe(this,"_isConnecting",!1),xe(this,"_apiCallQueue",[]),xe(this,"_buildApi",()=>new Proxy({},{get:(i,o,a)=>["Symbol(Symbol.toPrimitive)","then"].includes(String(o))?Reflect.get(i,o,a):(...s)=>this.call(o,...s)})),xe(this,"connect",async()=>{var o;if(this._isConnecting||this._isConnected)return;this._interface.connect();const r=wb({namespace:(o=this._options)==null?void 0:o.namespace});this._isConnecting=!0;const i=await new Promise((a,s)=>{this._requestCallbacks.set("connect",[a,s]);let c=0;const u=()=>{this._interface.sendMessage(r),c++};u();const p=setInterval(()=>{var d;this._isConnected?clearInterval(p):c<Lb?u():(clearInterval(p),this._requestCallbacks.delete("connect"),this._isConnected=!1,this._isConnecting=!1,this._apiCallQueue.forEach(([,h])=>{var f;return h(new Error(`Failed to call api method: could not connect to provider ${((f=this._options)==null?void 0:f.namespace)??""}`))}),s(new Error(`Could not connect to provider ${((d=this._options)==null?void 0:d.namespace)??""}`)))},Db)});this._availableMethods.clear(),i.forEach(a=>this._availableMethods.add(a)),this._isConnected=!0,this._isConnecting=!1,this._processApiCallQueue()}),xe(this,"_messageHandler",r=>{var i;if(Mn(r)&&r.namespace===((i=this._options)==null?void 0:i.namespace)){if(Cb(r)){const[o,a]=this._requestCallbacks.get(r.requestId)??[];if(!(o&&a))return;r.error?a(r.result):o(r.result),this._requestCallbacks.delete(r.requestId)}else if(Ob(r)){const o=this._rpcCallbacks.get(r.callbackId);if(!o)return;o(...r.payload)}else if(Rb(r)){const[o,a]=this._requestCallbacks.get("connect")??[];if(!(o&&a))return;o(r.methods),this._requestCallbacks.delete("connect")}}}),xe(this,"call",async(r,...i)=>{var u;if(!this._isConnected&&!this._isConnecting)throw new Error("Cannot call any api methods: Not connected to provider");this._isConnecting&&await new Promise((p,d)=>{this._apiCallQueue.push([p,d])});const o=String(r);if(!this.hasMethod(o))throw new Error(`Method ${o} is not available`);const a=i.map(p=>{if(typeof p=="function"){const d=gc();return this._rpcCallbacks.set(d,p),Sb(d)}else return p}),s=kb({method:o,payload:a,namespace:(u=this._options)==null?void 0:u.namespace});return this._interface.sendMessage(s),await Promise.race([new Promise((p,d)=>{this._requestCallbacks.set(s.requestId,[p,d])}),new Promise((p,d)=>{var h;setTimeout(()=>{d(new Error("RPC request timed out. Check that you can connect to the provider and that the method exists."))},((h=this._options)==null?void 0:h.apiCallTimeout)??Pb)})])}),this._options=t,this._api=this._buildApi(),this._interface.onMessage(this._messageHandler),((n=this._options)==null?void 0:n.connectImmediately)!==!1&&this.connect()}_processApiCallQueue(){this._apiCallQueue.forEach(([e])=>e()),this._apiCallQueue=[]}get api(){return this._api}get isConnected(){return this._isConnected&&this._interface.isConnected}hasMethod(e){return this._availableMethods.has(e)}},Fb=class{constructor(t,n){this._interface=t,xe(this,"_options"),xe(this,"registerFrame",(r,i)=>(i??(i=gc()),this._interface.registerFrame(r,i),i)),xe(this,"listen",()=>{this._interface.listen()}),xe(this,"close",()=>{this._interface.close()}),xe(this,"_messageHandler",async(r,i,o)=>{if(Mn(r)&&r.namespace===this._options.namespace&&!(this._options.strictMode&&o.fromId==null)){if(Ib(r)){const a=r.payload.map(d=>{if(Ab(d)){const h=d.callbackId;return(...m)=>{const g=Nb({callbackId:h,payload:m,namespace:this._options.namespace});i(g)}}else return d}),s=this._options.api[r.method];if(!s)return;let c=!1,u;try{u=await s(o,...a)}catch(d){c=!0,u=d}const p=Tb({requestId:r.requestId,result:u,error:c,namespace:this._options.namespace});i(p)}else if($b(r)){const a=Object.keys(this._options.api),s=Eb({methods:a,namespace:r.namespace});i(s)}}}),this._options=n,this._interface.onMessage(this._messageHandler),(this._options.listenImmediately??!0)&&this.listen()}get isListening(){return this._interface.isListening}get api(){return this._options.api}};function af(e){if(!("window"in globalThis))throw new Error('Transframe: global "window" not available. Cannot initialize a provider.');return new Fb(new _b(e),e)}function sa(e){if(!("window"in globalThis))throw new Error('Transframe: global "window" not available. Cannot initialize a consumer.');return new Mb(new xb(e),e)}const sf=sa({providerWindow:window,namespace:"truffle-privileged-api-v1",connectImmediately:!1});sf.connect().catch(e=>{});const ln=sf.api;function Pe(e,t="value"){return n=>e.set(n.target[t])}function tu(){return new Date(Date.now()+31536e6)}function Ub(e,t=navigator.language){const n=typeof e=="string"?new Date(e).getTime():typeof e=="number"?e:e.getTime(),r=Math.round((n-Date.now())/1e3),i=[60,3600,86400,86400*7,86400*30,86400*365,1/0],o=["second","minute","hour","day","week","month","year"],a=i.findIndex(u=>u>Math.abs(r)),s=a?i[a-1]:1;return new Intl.RelativeTimeFormat(t,{numeric:"always",style:"short"}).format(Math.floor(r/s),o[a])}const cf="globalAccessToken",nu="savedAnonAccessToken",qb=1e3;async function Bb(){let e=mc(cf);if(e)Vb(e);else try{e=await jb()}catch{e=await uf()}return e}function jb(){return Promise.race([ln.getGlobalUserAccessToken(),new Promise((e,t)=>{setTimeout(()=>{t(new Error("Timed out waiting for access token"))},qb)})])}function Vb(e){try{ln.getGlobalUserAccessToken().then(t=>{t!==e&&lf(e)})}catch{}}async function lf(e,{shouldSkipExtension:t=!1}={}){return e=e||await uf(),t||ln.setGlobalUserAccessToken(e).catch(n=>{}),df(cf,e),e}async function zb(){const e=`
    mutation UserAnonCreate {
      userLoginAnon {
        accessToken
      }
    }
  `,{data:t,error:n}=await fetch(ge(),{method:"POST",body:JSON.stringify({query:e})}).then(r=>r.json());if(!(t!=null&&t.userLoginAnon))throw new Error("Failed to get anonymous access token",{cause:n});return t.userLoginAnon.accessToken}async function uf(){let e=mc(nu);return e||(e=await zb(),df(nu,e)),e}function df(e,t){Ss(e,t,{expires:tu(),secure:xt()!==er.Local,sameSite:xt()===er.Local?"lax":"none",path:"/"}),Ss(e,t,{expires:tu(),secure:xt()!==er.Local,sameSite:xt()===er.Local?"lax":"none",path:"/auth"})}const tt=Ee(Bb()),pf=je(()=>{const e=tt.get();if(!e)return{};const[t,n,r]=e.split(".");return JSON.parse(atob(n))}),Fn=je(()=>!pf.get().isAnon);je(()=>!!pf.get().userId);function ff(){return Ct(tt)}async function ki(e,{shouldSkipExtension:t=!1}={}){const n=await lf(e,{shouldSkipExtension:t});tt.set(n)}ln.onGlobalUserAccessTokenChanged(e=>{ki(e,{shouldSkipExtension:!0})}).catch(()=>null);const kr=je(()=>Oo(new Ly({url:aa(),userAccessToken:tt.get()})));function an(){return kr.peek()}function ro(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ro=function(n){return typeof n}:ro=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ro(e)}function Hb(e){return ro(e)=="object"&&e!==null}var hf=typeof Symbol=="function"&&Symbol.toStringTag!=null?Symbol.toStringTag:"@@toStringTag";function Ns(e,t){for(var n=/\r\n|[\n\r]/g,r=1,i=t+1,o;(o=n.exec(e.body))&&o.index<t;)r+=1,i=t+1-(o.index+o[0].length);return{line:r,column:i}}function Wb(e){return mf(e.source,Ns(e.source,e.start))}function mf(e,t){var n=e.locationOffset.column-1,r=io(n)+e.body,i=t.line-1,o=e.locationOffset.line-1,a=t.line+o,s=t.line===1?n:0,c=t.column+s,u="".concat(e.name,":").concat(a,":").concat(c,`
`),p=r.split(/\r\n|[\n\r]/g),d=p[i];if(d.length>120){for(var h=Math.floor(c/80),f=c%80,m=[],g=0;g<d.length;g+=80)m.push(d.slice(g,g+80));return u+ru([["".concat(a),m[0]]].concat(m.slice(1,h+1).map(function(x){return["",x]}),[[" ",io(f-1)+"^"],["",m[h+1]]]))}return u+ru([["".concat(a-1),p[i-1]],["".concat(a),d],["",io(c-1)+"^"],["".concat(a+1),p[i+1]]])}function ru(e){var t=e.filter(function(r){r[0];var i=r[1];return i!==void 0}),n=Math.max.apply(Math,t.map(function(r){var i=r[0];return i.length}));return t.map(function(r){var i=r[0],o=r[1];return Gb(n,i)+(o?" | "+o:" |")}).join(`
`)}function io(e){return Array(e+1).join(" ")}function Gb(e,t){return io(e-t.length)+t}function oo(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?oo=function(n){return typeof n}:oo=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},oo(e)}function iu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Yb(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iu(Object(n),!0).forEach(function(r){Qb(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qb(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kb(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ou(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Jb(e,t,n){return t&&ou(e.prototype,t),n&&ou(e,n),e}function Xb(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ni(e,t)}function Zb(e){var t=vf();return function(){var r=ri(e),i;if(t){var o=ri(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return gf(this,i)}}function gf(e,t){return t&&(oo(t)==="object"||typeof t=="function")?t:Mr(e)}function Mr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Is(e){var t=typeof Map=="function"?new Map:void 0;return Is=function(r){if(r===null||!e0(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return ao(r,arguments,ri(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),ni(i,r)},Is(e)}function ao(e,t,n){return vf()?ao=Reflect.construct:ao=function(i,o,a){var s=[null];s.push.apply(s,o);var c=Function.bind.apply(i,s),u=new c;return a&&ni(u,a.prototype),u},ao.apply(null,arguments)}function vf(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function e0(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function ni(e,t){return ni=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},ni(e,t)}function ri(e){return ri=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},ri(e)}var so=function(e){Xb(n,e);var t=Zb(n);function n(r,i,o,a,s,c,u){var p,d,h,f;Kb(this,n),f=t.call(this,r),f.name="GraphQLError",f.originalError=c??void 0,f.nodes=au(Array.isArray(i)?i:i?[i]:void 0);for(var m=[],g=0,x=(v=f.nodes)!==null&&v!==void 0?v:[];g<x.length;g++){var v,b=x[g],y=b.loc;y!=null&&m.push(y)}m=au(m),f.source=o??((p=m)===null||p===void 0?void 0:p[0].source),f.positions=a??((d=m)===null||d===void 0?void 0:d.map(function(w){return w.start})),f.locations=a&&o?a.map(function(w){return Ns(o,w)}):(h=m)===null||h===void 0?void 0:h.map(function(w){return Ns(w.source,w.start)}),f.path=s??void 0;var _=c==null?void 0:c.extensions;return u==null&&Hb(_)?f.extensions=Yb({},_):f.extensions=u??{},Object.defineProperties(Mr(f),{message:{enumerable:!0},locations:{enumerable:f.locations!=null},path:{enumerable:f.path!=null},extensions:{enumerable:f.extensions!=null&&Object.keys(f.extensions).length>0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),c!=null&&c.stack?(Object.defineProperty(Mr(f),"stack",{value:c.stack,writable:!0,configurable:!0}),gf(f)):(Error.captureStackTrace?Error.captureStackTrace(Mr(f),n):Object.defineProperty(Mr(f),"stack",{value:Error().stack,writable:!0,configurable:!0}),f)}return Jb(n,[{key:"toString",value:function(){return t0(this)}},{key:hf,get:function(){return"Object"}}]),n}(Is(Error));function au(e){return e===void 0||e.length===0?void 0:e}function t0(e){var t=e.message;if(e.nodes)for(var n=0,r=e.nodes;n<r.length;n++){var i=r[n];i.loc&&(t+=`

`+Wb(i.loc))}else if(e.source&&e.locations)for(var o=0,a=e.locations;o<a.length;o++){var s=a[o];t+=`

`+mf(e.source,s)}return t}function Ze(e,t,n){return new so("Syntax Error: ".concat(n),void 0,e,[t])}var Q=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"});function n0(e,t){var n=!!e;if(!n)throw new Error(t??"Unexpected invariant triggered.")}var r0=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):void 0;const Cs=r0;function yf(e){var t=e.prototype.toJSON;typeof t=="function"||n0(0),e.prototype.inspect=t,Cs&&(e.prototype[Cs]=t)}var bf=function(){function e(n,r,i){this.start=n.start,this.end=r.end,this.startToken=n,this.endToken=r,this.source=i}var t=e.prototype;return t.toJSON=function(){return{start:this.start,end:this.end}},e}();yf(bf);var Se=function(){function e(n,r,i,o,a,s,c){this.kind=n,this.start=r,this.end=i,this.line=o,this.column=a,this.value=c,this.prev=s,this.next=null}var t=e.prototype;return t.toJSON=function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}},e}();yf(Se);function su(e){return e!=null&&typeof e.kind=="string"}var S=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function co(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?co=function(n){return typeof n}:co=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},co(e)}var i0=10,xf=2;function _f(e){return ca(e,[])}function ca(e,t){switch(co(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return e===null?"null":o0(e,t);default:return String(e)}}function o0(e,t){if(t.indexOf(e)!==-1)return"[Circular]";var n=[].concat(t,[e]),r=c0(e);if(r!==void 0){var i=r.call(e);if(i!==e)return typeof i=="string"?i:ca(i,n)}else if(Array.isArray(e))return s0(e,n);return a0(e,n)}function a0(e,t){var n=Object.keys(e);if(n.length===0)return"{}";if(t.length>xf)return"["+l0(e)+"]";var r=n.map(function(i){var o=ca(e[i],t);return i+": "+o});return"{ "+r.join(", ")+" }"}function s0(e,t){if(e.length===0)return"[]";if(t.length>xf)return"[Array]";for(var n=Math.min(i0,e.length),r=e.length-n,i=[],o=0;o<n;++o)i.push(ca(e[o],t));return r===1?i.push("... 1 more item"):r>1&&i.push("... ".concat(r," more items")),"["+i.join(", ")+"]"}function c0(e){var t=e[String(Cs)];if(typeof t=="function")return t;if(typeof e.inspect=="function")return e.inspect}function l0(e){var t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){var n=e.constructor.name;if(typeof n=="string"&&n!=="")return n}return t}function ja(e,t){var n=!!e;if(!n)throw new Error(t)}const u0=function(t,n){return t instanceof n};function cu(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d0(e,t,n){return t&&cu(e.prototype,t),n&&cu(e,n),e}var wf=function(){function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"GraphQL request",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{line:1,column:1};typeof t=="string"||ja(0,"Body must be a string. Received: ".concat(_f(t),".")),this.body=t,this.name=n,this.locationOffset=r,this.locationOffset.line>0||ja(0,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||ja(0,"column in locationOffset is 1-indexed and must be positive.")}return d0(e,[{key:hf,get:function(){return"Source"}}]),e}();function p0(e){return u0(e,wf)}var f0=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function h0(e){var t=e.split(/\r\n|[\n\r]/g),n=m0(e);if(n!==0)for(var r=1;r<t.length;r++)t[r]=t[r].slice(n);for(var i=0;i<t.length&&lu(t[i]);)++i;for(var o=t.length;o>i&&lu(t[o-1]);)--o;return t.slice(i,o).join(`
`)}function lu(e){for(var t=0;t<e.length;++t)if(e[t]!==" "&&e[t]!=="	")return!1;return!0}function m0(e){for(var t,n=!0,r=!0,i=0,o=null,a=0;a<e.length;++a)switch(e.charCodeAt(a)){case 13:e.charCodeAt(a+1)===10&&++a;case 10:n=!1,r=!0,i=0;break;case 9:case 32:++i;break;default:r&&!n&&(o===null||i<o)&&(o=i),r=!1}return(t=o)!==null&&t!==void 0?t:0}function g0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=e.indexOf(`
`)===-1,i=e[0]===" "||e[0]==="	",o=e[e.length-1]==='"',a=e[e.length-1]==="\\",s=!r||o||a||n,c="";return s&&!(r&&i)&&(c+=`
`+t),c+=t?e.replace(/\n/g,`
`+t):e,s&&(c+=`
`),'"""'+c.replace(/"""/g,'\\"""')+'"""'}var v0=function(){function e(n){var r=new Se(S.SOF,0,0,0,0,null);this.source=n,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){this.lastToken=this.token;var r=this.token=this.lookahead();return r},t.lookahead=function(){var r=this.token;if(r.kind!==S.EOF)do{var i;r=(i=r.next)!==null&&i!==void 0?i:r.next=b0(this,r)}while(r.kind===S.COMMENT);return r},e}();function y0(e){return e===S.BANG||e===S.DOLLAR||e===S.AMP||e===S.PAREN_L||e===S.PAREN_R||e===S.SPREAD||e===S.COLON||e===S.EQUALS||e===S.AT||e===S.BRACKET_L||e===S.BRACKET_R||e===S.BRACE_L||e===S.PIPE||e===S.BRACE_R}function Nn(e){return isNaN(e)?S.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function b0(e,t){for(var n=e.source,r=n.body,i=r.length,o=t.end;o<i;){var a=r.charCodeAt(o),s=e.line,c=1+o-e.lineStart;switch(a){case 65279:case 9:case 32:case 44:++o;continue;case 10:++o,++e.line,e.lineStart=o;continue;case 13:r.charCodeAt(o+1)===10?o+=2:++o,++e.line,e.lineStart=o;continue;case 33:return new Se(S.BANG,o,o+1,s,c,t);case 35:return _0(n,o,s,c,t);case 36:return new Se(S.DOLLAR,o,o+1,s,c,t);case 38:return new Se(S.AMP,o,o+1,s,c,t);case 40:return new Se(S.PAREN_L,o,o+1,s,c,t);case 41:return new Se(S.PAREN_R,o,o+1,s,c,t);case 46:if(r.charCodeAt(o+1)===46&&r.charCodeAt(o+2)===46)return new Se(S.SPREAD,o,o+3,s,c,t);break;case 58:return new Se(S.COLON,o,o+1,s,c,t);case 61:return new Se(S.EQUALS,o,o+1,s,c,t);case 64:return new Se(S.AT,o,o+1,s,c,t);case 91:return new Se(S.BRACKET_L,o,o+1,s,c,t);case 93:return new Se(S.BRACKET_R,o,o+1,s,c,t);case 123:return new Se(S.BRACE_L,o,o+1,s,c,t);case 124:return new Se(S.PIPE,o,o+1,s,c,t);case 125:return new Se(S.BRACE_R,o,o+1,s,c,t);case 34:return r.charCodeAt(o+1)===34&&r.charCodeAt(o+2)===34?k0(n,o,s,c,t,e):E0(n,o,s,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return w0(n,o,a,s,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return S0(n,o,s,c,t)}throw Ze(n,o,x0(a))}var u=e.line,p=1+o-e.lineStart;return new Se(S.EOF,i,i,u,p,t)}function x0(e){return e<32&&e!==9&&e!==10&&e!==13?"Cannot contain the invalid character ".concat(Nn(e),"."):e===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:"Cannot parse the unexpected character ".concat(Nn(e),".")}function _0(e,t,n,r,i){var o=e.body,a,s=t;do a=o.charCodeAt(++s);while(!isNaN(a)&&(a>31||a===9));return new Se(S.COMMENT,t,s,n,r,i,o.slice(t+1,s))}function w0(e,t,n,r,i,o){var a=e.body,s=n,c=t,u=!1;if(s===45&&(s=a.charCodeAt(++c)),s===48){if(s=a.charCodeAt(++c),s>=48&&s<=57)throw Ze(e,c,"Invalid number, unexpected digit after 0: ".concat(Nn(s),"."))}else c=Va(e,c,s),s=a.charCodeAt(c);if(s===46&&(u=!0,s=a.charCodeAt(++c),c=Va(e,c,s),s=a.charCodeAt(c)),(s===69||s===101)&&(u=!0,s=a.charCodeAt(++c),(s===43||s===45)&&(s=a.charCodeAt(++c)),c=Va(e,c,s),s=a.charCodeAt(c)),s===46||N0(s))throw Ze(e,c,"Invalid number, expected digit but got: ".concat(Nn(s),"."));return new Se(u?S.FLOAT:S.INT,t,c,r,i,o,a.slice(t,c))}function Va(e,t,n){var r=e.body,i=t,o=n;if(o>=48&&o<=57){do o=r.charCodeAt(++i);while(o>=48&&o<=57);return i}throw Ze(e,i,"Invalid number, expected digit but got: ".concat(Nn(o),"."))}function E0(e,t,n,r,i){for(var o=e.body,a=t+1,s=a,c=0,u="";a<o.length&&!isNaN(c=o.charCodeAt(a))&&c!==10&&c!==13;){if(c===34)return u+=o.slice(s,a),new Se(S.STRING,t,a+1,n,r,i,u);if(c<32&&c!==9)throw Ze(e,a,"Invalid character within String: ".concat(Nn(c),"."));if(++a,c===92){switch(u+=o.slice(s,a-1),c=o.charCodeAt(a),c){case 34:u+='"';break;case 47:u+="/";break;case 92:u+="\\";break;case 98:u+="\b";break;case 102:u+="\f";break;case 110:u+=`
`;break;case 114:u+="\r";break;case 116:u+="	";break;case 117:{var p=T0(o.charCodeAt(a+1),o.charCodeAt(a+2),o.charCodeAt(a+3),o.charCodeAt(a+4));if(p<0){var d=o.slice(a+1,a+5);throw Ze(e,a,"Invalid character escape sequence: \\u".concat(d,"."))}u+=String.fromCharCode(p),a+=4;break}default:throw Ze(e,a,"Invalid character escape sequence: \\".concat(String.fromCharCode(c),"."))}++a,s=a}}throw Ze(e,a,"Unterminated string.")}function k0(e,t,n,r,i,o){for(var a=e.body,s=t+3,c=s,u=0,p="";s<a.length&&!isNaN(u=a.charCodeAt(s));){if(u===34&&a.charCodeAt(s+1)===34&&a.charCodeAt(s+2)===34)return p+=a.slice(c,s),new Se(S.BLOCK_STRING,t,s+3,n,r,i,h0(p));if(u<32&&u!==9&&u!==10&&u!==13)throw Ze(e,s,"Invalid character within String: ".concat(Nn(u),"."));u===10?(++s,++o.line,o.lineStart=s):u===13?(a.charCodeAt(s+1)===10?s+=2:++s,++o.line,o.lineStart=s):u===92&&a.charCodeAt(s+1)===34&&a.charCodeAt(s+2)===34&&a.charCodeAt(s+3)===34?(p+=a.slice(c,s)+'"""',s+=4,c=s):++s}throw Ze(e,s,"Unterminated string.")}function T0(e,t,n,r){return Mi(e)<<12|Mi(t)<<8|Mi(n)<<4|Mi(r)}function Mi(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function S0(e,t,n,r,i){for(var o=e.body,a=o.length,s=t+1,c=0;s!==a&&!isNaN(c=o.charCodeAt(s))&&(c===95||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++s;return new Se(S.NAME,t,s,n,r,i,o.slice(t,s))}function N0(e){return e===95||e>=65&&e<=90||e>=97&&e<=122}function I0(e,t){var n=new C0(e,t);return n.parseDocument()}var C0=function(){function e(n,r){var i=p0(n)?n:new wf(n);this._lexer=new v0(i),this._options=r}var t=e.prototype;return t.parseName=function(){var r=this.expectToken(S.NAME);return{kind:Q.NAME,value:r.value,loc:this.loc(r)}},t.parseDocument=function(){var r=this._lexer.token;return{kind:Q.DOCUMENT,definitions:this.many(S.SOF,this.parseDefinition,S.EOF),loc:this.loc(r)}},t.parseDefinition=function(){if(this.peek(S.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(S.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var r=this._lexer.token;if(this.peek(S.BRACE_L))return{kind:Q.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(r)};var i=this.parseOperationType(),o;return this.peek(S.NAME)&&(o=this.parseName()),{kind:Q.OPERATION_DEFINITION,operation:i,name:o,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(r)}},t.parseOperationType=function(){var r=this.expectToken(S.NAME);switch(r.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(r)},t.parseVariableDefinitions=function(){return this.optionalMany(S.PAREN_L,this.parseVariableDefinition,S.PAREN_R)},t.parseVariableDefinition=function(){var r=this._lexer.token;return{kind:Q.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(S.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(S.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(r)}},t.parseVariable=function(){var r=this._lexer.token;return this.expectToken(S.DOLLAR),{kind:Q.VARIABLE,name:this.parseName(),loc:this.loc(r)}},t.parseSelectionSet=function(){var r=this._lexer.token;return{kind:Q.SELECTION_SET,selections:this.many(S.BRACE_L,this.parseSelection,S.BRACE_R),loc:this.loc(r)}},t.parseSelection=function(){return this.peek(S.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var r=this._lexer.token,i=this.parseName(),o,a;return this.expectOptionalToken(S.COLON)?(o=i,a=this.parseName()):a=i,{kind:Q.FIELD,alias:o,name:a,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(S.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(r)}},t.parseArguments=function(r){var i=r?this.parseConstArgument:this.parseArgument;return this.optionalMany(S.PAREN_L,i,S.PAREN_R)},t.parseArgument=function(){var r=this._lexer.token,i=this.parseName();return this.expectToken(S.COLON),{kind:Q.ARGUMENT,name:i,value:this.parseValueLiteral(!1),loc:this.loc(r)}},t.parseConstArgument=function(){var r=this._lexer.token;return{kind:Q.ARGUMENT,name:this.parseName(),value:(this.expectToken(S.COLON),this.parseValueLiteral(!0)),loc:this.loc(r)}},t.parseFragment=function(){var r=this._lexer.token;this.expectToken(S.SPREAD);var i=this.expectOptionalKeyword("on");return!i&&this.peek(S.NAME)?{kind:Q.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(r)}:{kind:Q.INLINE_FRAGMENT,typeCondition:i?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(r)}},t.parseFragmentDefinition=function(){var r,i=this._lexer.token;return this.expectKeyword("fragment"),((r=this._options)===null||r===void 0?void 0:r.experimentalFragmentVariables)===!0?{kind:Q.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(i)}:{kind:Q.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(i)}},t.parseFragmentName=function(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(r){var i=this._lexer.token;switch(i.kind){case S.BRACKET_L:return this.parseList(r);case S.BRACE_L:return this.parseObject(r);case S.INT:return this._lexer.advance(),{kind:Q.INT,value:i.value,loc:this.loc(i)};case S.FLOAT:return this._lexer.advance(),{kind:Q.FLOAT,value:i.value,loc:this.loc(i)};case S.STRING:case S.BLOCK_STRING:return this.parseStringLiteral();case S.NAME:switch(this._lexer.advance(),i.value){case"true":return{kind:Q.BOOLEAN,value:!0,loc:this.loc(i)};case"false":return{kind:Q.BOOLEAN,value:!1,loc:this.loc(i)};case"null":return{kind:Q.NULL,loc:this.loc(i)};default:return{kind:Q.ENUM,value:i.value,loc:this.loc(i)}}case S.DOLLAR:if(!r)return this.parseVariable();break}throw this.unexpected()},t.parseStringLiteral=function(){var r=this._lexer.token;return this._lexer.advance(),{kind:Q.STRING,value:r.value,block:r.kind===S.BLOCK_STRING,loc:this.loc(r)}},t.parseList=function(r){var i=this,o=this._lexer.token,a=function(){return i.parseValueLiteral(r)};return{kind:Q.LIST,values:this.any(S.BRACKET_L,a,S.BRACKET_R),loc:this.loc(o)}},t.parseObject=function(r){var i=this,o=this._lexer.token,a=function(){return i.parseObjectField(r)};return{kind:Q.OBJECT,fields:this.any(S.BRACE_L,a,S.BRACE_R),loc:this.loc(o)}},t.parseObjectField=function(r){var i=this._lexer.token,o=this.parseName();return this.expectToken(S.COLON),{kind:Q.OBJECT_FIELD,name:o,value:this.parseValueLiteral(r),loc:this.loc(i)}},t.parseDirectives=function(r){for(var i=[];this.peek(S.AT);)i.push(this.parseDirective(r));return i},t.parseDirective=function(r){var i=this._lexer.token;return this.expectToken(S.AT),{kind:Q.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(r),loc:this.loc(i)}},t.parseTypeReference=function(){var r=this._lexer.token,i;return this.expectOptionalToken(S.BRACKET_L)?(i=this.parseTypeReference(),this.expectToken(S.BRACKET_R),i={kind:Q.LIST_TYPE,type:i,loc:this.loc(r)}):i=this.parseNamedType(),this.expectOptionalToken(S.BANG)?{kind:Q.NON_NULL_TYPE,type:i,loc:this.loc(r)}:i},t.parseNamedType=function(){var r=this._lexer.token;return{kind:Q.NAMED_TYPE,name:this.parseName(),loc:this.loc(r)}},t.parseTypeSystemDefinition=function(){var r=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(r.kind===S.NAME)switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(r)},t.peekDescription=function(){return this.peek(S.STRING)||this.peek(S.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("schema");var o=this.parseDirectives(!0),a=this.many(S.BRACE_L,this.parseOperationTypeDefinition,S.BRACE_R);return{kind:Q.SCHEMA_DEFINITION,description:i,directives:o,operationTypes:a,loc:this.loc(r)}},t.parseOperationTypeDefinition=function(){var r=this._lexer.token,i=this.parseOperationType();this.expectToken(S.COLON);var o=this.parseNamedType();return{kind:Q.OPERATION_TYPE_DEFINITION,operation:i,type:o,loc:this.loc(r)}},t.parseScalarTypeDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("scalar");var o=this.parseName(),a=this.parseDirectives(!0);return{kind:Q.SCALAR_TYPE_DEFINITION,description:i,name:o,directives:a,loc:this.loc(r)}},t.parseObjectTypeDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("type");var o=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseDirectives(!0),c=this.parseFieldsDefinition();return{kind:Q.OBJECT_TYPE_DEFINITION,description:i,name:o,interfaces:a,directives:s,fields:c,loc:this.loc(r)}},t.parseImplementsInterfaces=function(){var r;if(!this.expectOptionalKeyword("implements"))return[];if(((r=this._options)===null||r===void 0?void 0:r.allowLegacySDLImplementsInterfaces)===!0){var i=[];this.expectOptionalToken(S.AMP);do i.push(this.parseNamedType());while(this.expectOptionalToken(S.AMP)||this.peek(S.NAME));return i}return this.delimitedMany(S.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var r;return((r=this._options)===null||r===void 0?void 0:r.allowLegacySDLEmptyFields)===!0&&this.peek(S.BRACE_L)&&this._lexer.lookahead().kind===S.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(S.BRACE_L,this.parseFieldDefinition,S.BRACE_R)},t.parseFieldDefinition=function(){var r=this._lexer.token,i=this.parseDescription(),o=this.parseName(),a=this.parseArgumentDefs();this.expectToken(S.COLON);var s=this.parseTypeReference(),c=this.parseDirectives(!0);return{kind:Q.FIELD_DEFINITION,description:i,name:o,arguments:a,type:s,directives:c,loc:this.loc(r)}},t.parseArgumentDefs=function(){return this.optionalMany(S.PAREN_L,this.parseInputValueDef,S.PAREN_R)},t.parseInputValueDef=function(){var r=this._lexer.token,i=this.parseDescription(),o=this.parseName();this.expectToken(S.COLON);var a=this.parseTypeReference(),s;this.expectOptionalToken(S.EQUALS)&&(s=this.parseValueLiteral(!0));var c=this.parseDirectives(!0);return{kind:Q.INPUT_VALUE_DEFINITION,description:i,name:o,type:a,defaultValue:s,directives:c,loc:this.loc(r)}},t.parseInterfaceTypeDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("interface");var o=this.parseName(),a=this.parseImplementsInterfaces(),s=this.parseDirectives(!0),c=this.parseFieldsDefinition();return{kind:Q.INTERFACE_TYPE_DEFINITION,description:i,name:o,interfaces:a,directives:s,fields:c,loc:this.loc(r)}},t.parseUnionTypeDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("union");var o=this.parseName(),a=this.parseDirectives(!0),s=this.parseUnionMemberTypes();return{kind:Q.UNION_TYPE_DEFINITION,description:i,name:o,directives:a,types:s,loc:this.loc(r)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(S.EQUALS)?this.delimitedMany(S.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("enum");var o=this.parseName(),a=this.parseDirectives(!0),s=this.parseEnumValuesDefinition();return{kind:Q.ENUM_TYPE_DEFINITION,description:i,name:o,directives:a,values:s,loc:this.loc(r)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(S.BRACE_L,this.parseEnumValueDefinition,S.BRACE_R)},t.parseEnumValueDefinition=function(){var r=this._lexer.token,i=this.parseDescription(),o=this.parseName(),a=this.parseDirectives(!0);return{kind:Q.ENUM_VALUE_DEFINITION,description:i,name:o,directives:a,loc:this.loc(r)}},t.parseInputObjectTypeDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("input");var o=this.parseName(),a=this.parseDirectives(!0),s=this.parseInputFieldsDefinition();return{kind:Q.INPUT_OBJECT_TYPE_DEFINITION,description:i,name:o,directives:a,fields:s,loc:this.loc(r)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(S.BRACE_L,this.parseInputValueDef,S.BRACE_R)},t.parseTypeSystemExtension=function(){var r=this._lexer.lookahead();if(r.kind===S.NAME)switch(r.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(r)},t.parseSchemaExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var i=this.parseDirectives(!0),o=this.optionalMany(S.BRACE_L,this.parseOperationTypeDefinition,S.BRACE_R);if(i.length===0&&o.length===0)throw this.unexpected();return{kind:Q.SCHEMA_EXTENSION,directives:i,operationTypes:o,loc:this.loc(r)}},t.parseScalarTypeExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var i=this.parseName(),o=this.parseDirectives(!0);if(o.length===0)throw this.unexpected();return{kind:Q.SCALAR_TYPE_EXTENSION,name:i,directives:o,loc:this.loc(r)}},t.parseObjectTypeExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var i=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseDirectives(!0),s=this.parseFieldsDefinition();if(o.length===0&&a.length===0&&s.length===0)throw this.unexpected();return{kind:Q.OBJECT_TYPE_EXTENSION,name:i,interfaces:o,directives:a,fields:s,loc:this.loc(r)}},t.parseInterfaceTypeExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var i=this.parseName(),o=this.parseImplementsInterfaces(),a=this.parseDirectives(!0),s=this.parseFieldsDefinition();if(o.length===0&&a.length===0&&s.length===0)throw this.unexpected();return{kind:Q.INTERFACE_TYPE_EXTENSION,name:i,interfaces:o,directives:a,fields:s,loc:this.loc(r)}},t.parseUnionTypeExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var i=this.parseName(),o=this.parseDirectives(!0),a=this.parseUnionMemberTypes();if(o.length===0&&a.length===0)throw this.unexpected();return{kind:Q.UNION_TYPE_EXTENSION,name:i,directives:o,types:a,loc:this.loc(r)}},t.parseEnumTypeExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var i=this.parseName(),o=this.parseDirectives(!0),a=this.parseEnumValuesDefinition();if(o.length===0&&a.length===0)throw this.unexpected();return{kind:Q.ENUM_TYPE_EXTENSION,name:i,directives:o,values:a,loc:this.loc(r)}},t.parseInputObjectTypeExtension=function(){var r=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var i=this.parseName(),o=this.parseDirectives(!0),a=this.parseInputFieldsDefinition();if(o.length===0&&a.length===0)throw this.unexpected();return{kind:Q.INPUT_OBJECT_TYPE_EXTENSION,name:i,directives:o,fields:a,loc:this.loc(r)}},t.parseDirectiveDefinition=function(){var r=this._lexer.token,i=this.parseDescription();this.expectKeyword("directive"),this.expectToken(S.AT);var o=this.parseName(),a=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var c=this.parseDirectiveLocations();return{kind:Q.DIRECTIVE_DEFINITION,description:i,name:o,arguments:a,repeatable:s,locations:c,loc:this.loc(r)}},t.parseDirectiveLocations=function(){return this.delimitedMany(S.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var r=this._lexer.token,i=this.parseName();if(f0[i.value]!==void 0)return i;throw this.unexpected(r)},t.loc=function(r){var i;if(((i=this._options)===null||i===void 0?void 0:i.noLocation)!==!0)return new bf(r,this._lexer.lastToken,this._lexer.source)},t.peek=function(r){return this._lexer.token.kind===r},t.expectToken=function(r){var i=this._lexer.token;if(i.kind===r)return this._lexer.advance(),i;throw Ze(this._lexer.source,i.start,"Expected ".concat(Ef(r),", found ").concat(za(i),"."))},t.expectOptionalToken=function(r){var i=this._lexer.token;if(i.kind===r)return this._lexer.advance(),i},t.expectKeyword=function(r){var i=this._lexer.token;if(i.kind===S.NAME&&i.value===r)this._lexer.advance();else throw Ze(this._lexer.source,i.start,'Expected "'.concat(r,'", found ').concat(za(i),"."))},t.expectOptionalKeyword=function(r){var i=this._lexer.token;return i.kind===S.NAME&&i.value===r?(this._lexer.advance(),!0):!1},t.unexpected=function(r){var i=r??this._lexer.token;return Ze(this._lexer.source,i.start,"Unexpected ".concat(za(i),"."))},t.any=function(r,i,o){this.expectToken(r);for(var a=[];!this.expectOptionalToken(o);)a.push(i.call(this));return a},t.optionalMany=function(r,i,o){if(this.expectOptionalToken(r)){var a=[];do a.push(i.call(this));while(!this.expectOptionalToken(o));return a}return[]},t.many=function(r,i,o){this.expectToken(r);var a=[];do a.push(i.call(this));while(!this.expectOptionalToken(o));return a},t.delimitedMany=function(r,i){this.expectOptionalToken(r);var o=[];do o.push(i.call(this));while(this.expectOptionalToken(r));return o},e}();function za(e){var t=e.value;return Ef(e.kind)+(t!=null?' "'.concat(t,'"'):"")}function Ef(e){return y0(e)?'"'.concat(e,'"'):e}var O0={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},A0=Object.freeze({});function kf(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:O0,r=void 0,i=Array.isArray(e),o=[e],a=-1,s=[],c=void 0,u=void 0,p=void 0,d=[],h=[],f=e;do{a++;var m=a===o.length,g=m&&s.length!==0;if(m){if(u=h.length===0?void 0:d[d.length-1],c=p,p=h.pop(),g){if(i)c=c.slice();else{for(var x={},v=0,b=Object.keys(c);v<b.length;v++){var y=b[v];x[y]=c[y]}c=x}for(var _=0,w=0;w<s.length;w++){var E=s[w][0],k=s[w][1];i&&(E-=_),i&&k===null?(c.splice(E,1),_++):c[E]=k}}a=r.index,o=r.keys,s=r.edits,i=r.inArray,r=r.prev}else{if(u=p?i?a:o[a]:void 0,c=p?p[u]:f,c==null)continue;p&&d.push(u)}var T=void 0;if(!Array.isArray(c)){if(!su(c))throw new Error("Invalid AST Node: ".concat(_f(c),"."));var R=$0(t,c.kind,m);if(R){if(T=R.call(t,c,u,p,d,h),T===A0)break;if(T===!1){if(!m){d.pop();continue}}else if(T!==void 0&&(s.push([u,T]),!m))if(su(T))c=T;else{d.pop();continue}}}if(T===void 0&&g&&s.push([u,c]),m)d.pop();else{var P;r={inArray:i,index:a,keys:o,edits:s,prev:r},i=Array.isArray(c),o=i?c:(P=n[c.kind])!==null&&P!==void 0?P:[],a=-1,s=[],p&&h.push(p),p=c}}while(r!==void 0);return s.length!==0&&(f=s[s.length-1][1]),f}function $0(e,t,n){var r=e[t];if(r){if(!n&&typeof r=="function")return r;var i=n?r.leave:r.enter;if(typeof i=="function")return i}else{var o=n?e.leave:e.enter;if(o){if(typeof o=="function")return o;var a=o[t];if(typeof a=="function")return a}}}function R0(e){return kf(e,{leave:D0})}var P0=80,D0={Name:function(t){return t.value},Variable:function(t){return"$"+t.name},Document:function(t){return U(t.definitions,`

`)+`
`},OperationDefinition:function(t){var n=t.operation,r=t.name,i=ke("(",U(t.variableDefinitions,", "),")"),o=U(t.directives," "),a=t.selectionSet;return!r&&!o&&!i&&n==="query"?a:U([n,U([r,i]),o,a]," ")},VariableDefinition:function(t){var n=t.variable,r=t.type,i=t.defaultValue,o=t.directives;return n+": "+r+ke(" = ",i)+ke(" ",U(o," "))},SelectionSet:function(t){var n=t.selections;return yt(n)},Field:function(t){var n=t.alias,r=t.name,i=t.arguments,o=t.directives,a=t.selectionSet,s=ke("",n,": ")+r,c=s+ke("(",U(i,", "),")");return c.length>P0&&(c=s+ke(`(
`,lo(U(i,`
`)),`
)`)),U([c,U(o," "),a]," ")},Argument:function(t){var n=t.name,r=t.value;return n+": "+r},FragmentSpread:function(t){var n=t.name,r=t.directives;return"..."+n+ke(" ",U(r," "))},InlineFragment:function(t){var n=t.typeCondition,r=t.directives,i=t.selectionSet;return U(["...",ke("on ",n),U(r," "),i]," ")},FragmentDefinition:function(t){var n=t.name,r=t.typeCondition,i=t.variableDefinitions,o=t.directives,a=t.selectionSet;return"fragment ".concat(n).concat(ke("(",U(i,", "),")")," ")+"on ".concat(r," ").concat(ke("",U(o," ")," "))+a},IntValue:function(t){var n=t.value;return n},FloatValue:function(t){var n=t.value;return n},StringValue:function(t,n){var r=t.value,i=t.block;return i?g0(r,n==="description"?"":"  "):JSON.stringify(r)},BooleanValue:function(t){var n=t.value;return n?"true":"false"},NullValue:function(){return"null"},EnumValue:function(t){var n=t.value;return n},ListValue:function(t){var n=t.values;return"["+U(n,", ")+"]"},ObjectValue:function(t){var n=t.fields;return"{"+U(n,", ")+"}"},ObjectField:function(t){var n=t.name,r=t.value;return n+": "+r},Directive:function(t){var n=t.name,r=t.arguments;return"@"+n+ke("(",U(r,", "),")")},NamedType:function(t){var n=t.name;return n},ListType:function(t){var n=t.type;return"["+n+"]"},NonNullType:function(t){var n=t.type;return n+"!"},SchemaDefinition:vt(function(e){var t=e.directives,n=e.operationTypes;return U(["schema",U(t," "),yt(n)]," ")}),OperationTypeDefinition:function(t){var n=t.operation,r=t.type;return n+": "+r},ScalarTypeDefinition:vt(function(e){var t=e.name,n=e.directives;return U(["scalar",t,U(n," ")]," ")}),ObjectTypeDefinition:vt(function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return U(["type",t,ke("implements ",U(n," & ")),U(r," "),yt(i)]," ")}),FieldDefinition:vt(function(e){var t=e.name,n=e.arguments,r=e.type,i=e.directives;return t+(uu(n)?ke(`(
`,lo(U(n,`
`)),`
)`):ke("(",U(n,", "),")"))+": "+r+ke(" ",U(i," "))}),InputValueDefinition:vt(function(e){var t=e.name,n=e.type,r=e.defaultValue,i=e.directives;return U([t+": "+n,ke("= ",r),U(i," ")]," ")}),InterfaceTypeDefinition:vt(function(e){var t=e.name,n=e.interfaces,r=e.directives,i=e.fields;return U(["interface",t,ke("implements ",U(n," & ")),U(r," "),yt(i)]," ")}),UnionTypeDefinition:vt(function(e){var t=e.name,n=e.directives,r=e.types;return U(["union",t,U(n," "),r&&r.length!==0?"= "+U(r," | "):""]," ")}),EnumTypeDefinition:vt(function(e){var t=e.name,n=e.directives,r=e.values;return U(["enum",t,U(n," "),yt(r)]," ")}),EnumValueDefinition:vt(function(e){var t=e.name,n=e.directives;return U([t,U(n," ")]," ")}),InputObjectTypeDefinition:vt(function(e){var t=e.name,n=e.directives,r=e.fields;return U(["input",t,U(n," "),yt(r)]," ")}),DirectiveDefinition:vt(function(e){var t=e.name,n=e.arguments,r=e.repeatable,i=e.locations;return"directive @"+t+(uu(n)?ke(`(
`,lo(U(n,`
`)),`
)`):ke("(",U(n,", "),")"))+(r?" repeatable":"")+" on "+U(i," | ")}),SchemaExtension:function(t){var n=t.directives,r=t.operationTypes;return U(["extend schema",U(n," "),yt(r)]," ")},ScalarTypeExtension:function(t){var n=t.name,r=t.directives;return U(["extend scalar",n,U(r," ")]," ")},ObjectTypeExtension:function(t){var n=t.name,r=t.interfaces,i=t.directives,o=t.fields;return U(["extend type",n,ke("implements ",U(r," & ")),U(i," "),yt(o)]," ")},InterfaceTypeExtension:function(t){var n=t.name,r=t.interfaces,i=t.directives,o=t.fields;return U(["extend interface",n,ke("implements ",U(r," & ")),U(i," "),yt(o)]," ")},UnionTypeExtension:function(t){var n=t.name,r=t.directives,i=t.types;return U(["extend union",n,U(r," "),i&&i.length!==0?"= "+U(i," | "):""]," ")},EnumTypeExtension:function(t){var n=t.name,r=t.directives,i=t.values;return U(["extend enum",n,U(r," "),yt(i)]," ")},InputObjectTypeExtension:function(t){var n=t.name,r=t.directives,i=t.fields;return U(["extend input",n,U(r," "),yt(i)]," ")}};function vt(e){return function(t){return U([t.description,e(t)],`
`)}}function U(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(t=e==null?void 0:e.filter(function(r){return r}).join(n))!==null&&t!==void 0?t:""}function yt(e){return ke(`{
`,lo(U(e,`
`)),`
}`)}function ke(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";return t!=null&&t!==""?e+t+n:""}function lo(e){return ke("  ",e.replace(/\n/g,`
  `))}function L0(e){return e.indexOf(`
`)!==-1}function uu(e){return e!=null&&e.some(L0)}var M0=e=>e instanceof so?e:typeof e=="object"&&e.message?new so(e.message,e.nodes,e.source,e.positions,e.path,e,e.extensions||{}):new so(e);class vc extends Error{constructor(t){var n=(t.graphQLErrors||[]).map(M0),r=((i,o)=>{var a="";if(i)return`[Network] ${i.message}`;if(o)for(var s of o)a&&(a+=`
`),a+=`[GraphQL] ${s.message}`;return a})(t.networkError,n);super(r),this.name="CombinedError",this.message=r,this.graphQLErrors=n,this.networkError=t.networkError,this.response=t.response}toString(){return this.message}}var Os=(e,t)=>{for(var n=typeof t=="number"?0|t:5381,r=0,i=0|e.length;r<i;r++)n=(n<<5)+n+e.charCodeAt(r);return n},uo=new Set,du=new WeakMap,Fr=e=>{if(e===null||uo.has(e))return"null";if(typeof e!="object")return JSON.stringify(e)||"";if(e.toJSON)return Fr(e.toJSON());if(Array.isArray(e)){var t="[";for(var n of e)t!=="["&&(t+=","),t+=(n=Fr(n)).length>0?n:"null";return t+="]"}var r=Object.keys(e).sort();if(!r.length&&e.constructor&&e.constructor!==Object){var i=du.get(e)||Math.random().toString(36).slice(2);return du.set(e,i),`{"__key":"${i}"}`}uo.add(e);var o="{";for(var a of r){var s=Fr(e[a]);s&&(o.length>1&&(o+=","),o+=Fr(a)+":"+s)}return uo.delete(e),o+="}"},As=e=>(uo.clear(),Fr(e)),F0=/("{3}[\s\S]*"{3}|"(?:\\.|[^"])*")/g,U0=/(#[^\n\r]+)?(?:\n|\r\n?|$)+/g,q0=(e,t)=>t%2==0?e.replace(U0,`
`):e,pu=e=>e.split(F0).map(q0).join("").trim(),fu=new Map,po=new Map,la=e=>{var t;return typeof e=="string"?t=pu(e):e.loc&&po.get(e.__key)===e?t=e.loc.source.body:(t=fu.get(e)||pu(R0(e)),fu.set(e,t)),typeof e!="string"&&!e.loc&&(e.loc={start:0,end:t.length,source:{body:t,name:"gql",locationOffset:{line:1,column:1}}}),t},hu=e=>{var t=Os(la(e));if(typeof e=="object"&&"definitions"in e){var n=Tf(e);n&&(t=Os(`
# ${n}`,t))}return t},Po=e=>{var t,n;return typeof e=="string"?(t=hu(e),n=po.get(t)||I0(e,{noLocation:!0})):(t=e.__key||hu(e),n=po.get(t)||e),n.loc||la(n),n.__key=t,po.set(t,n),n},ar=(e,t)=>{t||(t={});var n=Po(e),r=As(t),i=n.__key;return r!=="{}"&&(i=Os(r,i)),{key:i,query:n,variables:t}},Tf=e=>{for(var t of e.definitions)if(t.kind===Q.OPERATION_DEFINITION&&t.name)return t.name.value},Ha=(e,t,n)=>{if(!("data"in t)&&!("errors"in t)||"incremental"in t)throw new Error("No Content");var r=e.kind==="subscription";return{operation:e,data:t.data,error:Array.isArray(t.errors)?new vc({graphQLErrors:t.errors,response:n}):void 0,extensions:typeof t.extensions=="object"&&t.extensions||void 0,hasNext:t.hasNext==null?r:t.hasNext}},B0=(e,t,n)=>{var r,i=!!e.extensions||!!t.extensions,o={...e.extensions,...t.extensions},a=e.error?e.error.graphQLErrors:[],s=t.incremental;if("path"in t&&(s=[{data:t.data,path:t.path}]),s){r={...e.data};for(var c of s){Array.isArray(c.errors)&&a.push(...c.errors),c.extensions&&(Object.assign(o,c.extensions),i=!0);for(var u=c.path[0],p=r,d=1,h=c.path.length;d<h;u=c.path[d++])p=p[u]=Array.isArray(p[u])?[...p[u]]:{...p[u]};if(Array.isArray(c.items))for(var f=+u>=0?u:0,m=0,g=c.items.length;m<g;m++)p[f+m]=c.items[m];else c.data!==void 0&&(p[u]=p[u]&&c.data?{...p[u],...c.data}:c.data)}}else r=t.data||e.data;return{operation:e.operation,data:r,error:a.length?new vc({graphQLErrors:a,response:n}):void 0,extensions:i?o:void 0,hasNext:!!t.hasNext}},mu=(e,t,n)=>({operation:e,data:void 0,error:new vc({networkError:t,response:n}),extensions:void 0});function j0(e){return{query:la(e.query),operationName:Tf(e.query),variables:e.variables||void 0,extensions:void 0}}var V0=(e,t)=>{var n=e.kind==="query"&&e.context.preferGetMethod;if(!n||!t)return e.context.url;var r=new URL(e.context.url),i=r.searchParams;t.operationName&&i.set("operationName",t.operationName),t.query&&i.set("query",t.query),t.variables&&i.set("variables",As(t.variables)),t.extensions&&i.set("extensions",As(t.extensions));var o=r.toString();return o.length>2047&&n!=="force"?(e.context.preferGetMethod=!1,e.context.url):o},z0=(e,t)=>{var n=e.kind==="query"&&!!e.context.preferGetMethod,r={accept:"multipart/mixed, application/graphql-response+json, application/graphql+json, application/json"};n||(r["content-type"]="application/json");var i=(typeof e.context.fetchOptions=="function"?e.context.fetchOptions():e.context.fetchOptions)||{};if(i.headers)for(var o in i.headers)r[o.toLowerCase()]=i.headers[o];return{...i,body:!n&&t?JSON.stringify(t):void 0,method:n?"GET":"POST",headers:r}},H0=typeof TextDecoder<"u"?new TextDecoder:null,W0=/content-type:[^\r\n]*application\/json/i,G0=/boundary="?([^=";]+)"?/i,Y0=(e,t,n)=>{var r=n.redirect==="manual"?400:300,i=e.context.fetch;return Dn(({next:o,complete:a})=>{var s=typeof AbortController<"u"?new AbortController:null;s&&(n.signal=s.signal);var c=!1,u=(f,m,g)=>{var x=g.headers&&g.headers.get("Content-Type")||"";if(/text\//i.test(x))return g.text().then(F=>{f(mu(m,new Error(F),g))});if(!/multipart\/mixed/i.test(x))return g.text().then(F=>{f(Ha(m,JSON.parse(F),g))});var v="---",b=x.match(G0);b&&(v="--"+b[1]);var y,_=()=>{};if(g[Symbol.asyncIterator]){var w=g[Symbol.asyncIterator]();y=w.next.bind(w)}else if("body"in g&&g.body){var E=g.body.getReader();_=()=>E.cancel(),y=()=>E.read()}else throw new TypeError("Streaming requests unsupported");var k="",T=!0,R=null,P=null;return y().then(function F(D){if(D.done)c=!0;else{var H=(oe=D.value).constructor.name==="Buffer"?oe.toString():H0.decode(oe),I=H.indexOf(v);for(I>-1?I+=k.length:I=k.indexOf(v),k+=H;I>-1;){var M=k.slice(0,I),O=k.slice(I+v.length);if(T)T=!1;else{var L=M.indexOf(`\r
\r
`)+4,W=M.slice(0,L),re=M.slice(L,M.lastIndexOf(`\r
`)),G=void 0;if(W0.test(W))try{G=JSON.parse(re),R=P=P?B0(P,G,g):Ha(m,G,g)}catch{}if(O.slice(0,2)==="--"||G&&!G.hasNext){if(!P)return f(Ha(m,{},g));break}}I=(k=O).indexOf(v)}}var oe;if(R&&(f(R),R=null),!D.done&&(!P||P.hasNext))return y().then(F)}).finally(_)},p=!1,d=!1,h;return Promise.resolve().then(()=>{if(!p)return(i||fetch)(t,n)}).then(f=>{if(f)return d=(h=f).status<200||h.status>=r,u(o,e,h)}).then(a).catch(f=>{if(c)throw f;var m=mu(e,d&&h.statusText?new Error(h.statusText):f,h);o(m),a()}),()=>{p=!0,s&&s.abort()}})},$s=(e,t)=>{if(Array.isArray(e))for(var n of e)$s(n,t);else if(typeof e=="object"&&e!==null)for(var r in e)r==="__typename"&&typeof e[r]=="string"?t.add(e[r]):$s(e[r],t);return t},gu=e=>{if(!e.selectionSet)return e;for(var t of e.selectionSet.selections)if(t.kind===Q.FIELD&&t.name.value==="__typename"&&!t.alias)return e;return{...e,selectionSet:{...e.selectionSet,selections:[...e.selectionSet.selections,{kind:Q.FIELD,name:{kind:Q.NAME,value:"__typename"}}]}}},vu=new Map,Q0=e=>{var t=Po(e),n=vu.get(t.__key);return n||(n=kf(t,{Field:gu,InlineFragment:gu}),Object.defineProperty(n,"__key",{value:t.__key,enumerable:!1}),vu.set(t.__key,n)),n},Rs=(e,t)=>{if(!e||typeof e!="object")return e;if(Array.isArray(e))return e.map(i=>Rs(i));if(e&&typeof e=="object"&&(t||"__typename"in e)){var n={};for(var r in e)r==="__typename"?Object.defineProperty(n,"__typename",{enumerable:!1,value:e.__typename}):n[r]=Rs(e[r]);return n}else return e};function yu(e){return e.toPromise=()=>new Promise(t=>{var n=_t(r=>{!r.stale&&!r.hasNext&&Promise.resolve().then(()=>{n.unsubscribe(),t(r)})})(e)}),e}function ii(e,t,n){return n||(n=t.context),{key:t.key,query:t.query,variables:t.variables,kind:e,context:n}}var bu=(e,t)=>ii(e.kind,e,{...e.context,meta:{...e.context.meta,...t}}),K0=()=>{},xu=(e,t,n)=>{for(var r of n)if(r.kind===Q.FRAGMENT_DEFINITION){var i=r.name.value,o=la(r);e.has(i)||(e.set(i,o),t.push(r))}else t.push(r)};function B(){for(var e=new Map,t=[],n=[],r=Array.isArray(arguments[0])?arguments[0][0]:arguments[0]||"",i=1;i<arguments.length;i++){var o=arguments[i];o&&o.definitions?n.push(...o.definitions):r+=o,r+=arguments[0][i]}return xu(e,t,Po(r).definitions),xu(e,t,n),Po({kind:Q.DOCUMENT,definitions:t})}var Wa=({kind:e})=>e!=="mutation"&&e!=="query",J0=({forward:e,client:t,dispatchDebug:n})=>{var r=new Map,i=new Map,o=s=>{var c=ii(s.kind,s);return c.query=Q0(s.query),c},a=s=>{var{key:c,kind:u,context:{requestPolicy:p}}=s;return u==="query"&&p!=="network-only"&&(p==="cache-only"||r.has(c))};return s=>{var c=lt(s),u=He(d=>{var h=r.get(d.key),f={...h,operation:bu(d,{cacheOutcome:h?"hit":"miss"})};return d.context.requestPolicy==="cache-and-network"&&(f.stale=!0,_u(t,d)),f})(le(d=>!Wa(d)&&a(d))(c)),p=$t(d=>{var{operation:h}=d;if(h){var f=(k=>[...$s(k,new Set)])(d.data).concat(h.context.additionalTypenames||[]);if(d.operation.kind==="mutation"){for(var m=new Set,g=0;g<f.length;g++){var x=f[g],v=i.get(x);v||i.set(x,v=new Set);for(var b of v.values())m.add(b);v.clear()}for(var y of m.values())r.has(y)&&(h=r.get(y).operation,r.delete(y),_u(t,h))}else if(h.kind==="query"&&d.data){r.set(h.key,d);for(var _=0;_<f.length;_++){var w=f[_],E=i.get(w);E||i.set(w,E=new Set),E.add(h.key)}}}})(e(le(d=>d.kind!=="query"||d.context.requestPolicy!=="cache-only")(He(d=>bu(d,{cacheOutcome:"miss"}))(wt([He(o)(le(d=>!Wa(d)&&!a(d))(c)),le(d=>Wa(d))(c)])))));return wt([u,p])}},_u=(e,t)=>e.reexecuteOperation(ii(t.kind,t,{...t.context,requestPolicy:"network-only"})),X0=({forward:e,dispatchDebug:t})=>{var n=new Set,r=o=>{var{key:a,kind:s}=o;if(s==="teardown"||s==="mutation")return n.delete(a),!0;var c=n.has(a);return n.add(a),!c},i=({operation:o,hasNext:a})=>{a||n.delete(o.key)};return o=>{var a=le(r)(o);return $t(i)(e(a))}},Z0=({forward:e,dispatchDebug:t})=>n=>{var r=lt(n),i=_i(a=>{var{key:s}=a,c=j0(a),u=V0(a,c),p=z0(a,c),d=_r(le(h=>h.kind==="teardown"&&h.key===s)(r))(Y0(a,u,p));return d})(le(a=>a.kind==="query"||a.kind==="mutation")(r)),o=e(le(a=>a.kind!=="query"&&a.kind!=="mutation")(r));return wt([i,o])},ex=e=>({client:t,forward:n,dispatchDebug:r})=>e.reduceRight((i,o)=>o({client:t,forward:i,dispatchDebug(a){}}),n),tx=[X0,J0,Z0],nx=({dispatchDebug:e})=>t=>le(()=>!1)($t(n=>{if(n.kind!=="teardown"&&!1)var r})(t)),rx=function e(t){var n=0,r=new Map,i=new Map,o=[],a={url:t.url,fetchOptions:t.fetchOptions,fetch:t.fetch,preferGetMethod:!!t.preferGetMethod,requestPolicy:t.requestPolicy||"cache-first"},{source:s,next:c}=rc(),u=!1;function p(v){if(v&&c(v),!u){for(u=!0;u&&(v=o.shift());)c(v);u=!1}}var d=v=>{var b=le(y=>y.operation.kind===v.kind&&y.operation.key===v.key&&(!y.operation.context._instance||y.operation.context._instance===v.context._instance))(x);return t.maskTypename&&(b=He(y=>({...y,data:Rs(y.data,!0)}))(b)),v.kind==="mutation"?Xr(1)(Jr(()=>c(v))(b)):lt(Kr(()=>{r.delete(v.key),i.delete(v.key);for(var y=o.length-1;y>=0;y--)o[y].key===v.key&&o.splice(y,1);c(ii("teardown",v,v.context))})($t(y=>{r.set(v.key,y)})(xp(y=>v.kind!=="query"||y.stale?Zr(y):wt([Zr(y),He(()=>({...y,stale:!0}))(Xr(1)(le(_=>_.kind==="query"&&_.key===v.key&&_.context.requestPolicy!=="cache-only")(s)))]))(_r(le(y=>y.kind==="teardown"&&y.key===v.key)(s))(b)))))},h=this instanceof e?this:Object.create(e.prototype),f=Object.assign(h,{suspense:!!t.suspense,operations$:s,reexecuteOperation(v){(v.kind==="mutation"||i.has(v.key))&&(o.push(v),Promise.resolve().then(p))},createRequestOperation(v,b,y){return y||(y={}),ii(v,b,{_instance:v==="mutation"?n=n+1|0:void 0,...a,...y,requestPolicy:y.requestPolicy||a.requestPolicy,suspense:y.suspense||y.suspense!==!1&&f.suspense})},executeRequestOperation(v){return v.kind==="mutation"?d(v):Dn(b=>{var y=i.get(v.key);y||i.set(v.key,y=d(v));var _=v.context.requestPolicy==="cache-and-network"||v.context.requestPolicy==="network-only";return _t(b.next)(Kr(()=>{u=!1,b.complete()})(Jr(()=>{var w=r.get(v.key);if(v.kind==="subscription")return p(v);_&&p(v),w!=null&&w===r.get(v.key)?b.next(_?{...w,stale:!0}:w):_||p(v)})(y))).unsubscribe})},executeQuery(v,b){var y=f.createRequestOperation("query",v,b);return f.executeRequestOperation(y)},executeSubscription(v,b){var y=f.createRequestOperation("subscription",v,b);return f.executeRequestOperation(y)},executeMutation(v,b){var y=f.createRequestOperation("mutation",v,b);return f.executeRequestOperation(y)},query(v,b,y){return(!y||typeof y.suspense!="boolean")&&(y={...y,suspense:!1}),yu(f.executeQuery(ar(v,b),y))},readQuery(v,b,y){var _=null;return _t(w=>{_=w})(f.query(v,b,y)).unsubscribe(),_},subscription:(v,b,y)=>f.executeSubscription(ar(v,b),y),mutation:(v,b,y)=>yu(f.executeMutation(ar(v,b),y))}),m=K0,g=ex(t.exchanges!==void 0?t.exchanges:tx),x=lt(g({client:f,dispatchDebug:m,forward:nx({dispatchDebug:m})})(s));return _p(x),f},ua=rx,ix=ua({url:"/graphql"}),da=Ot(ix),ox=da.Provider;da.Consumer;da.displayName="UrqlContext";var Sf=()=>{var e=Lt(da);return e},Ps={fetching:!1,stale:!1,error:void 0,data:void 0,extensions:void 0,operation:void 0},Ga=(e,t)=>{var n={...e,...t,data:t.data!==void 0||t.error?t.data:e.data,fetching:!!t.fetching,stale:!!t.stale};return((r,i)=>{if(typeof r!="object"||typeof i!="object")return r!==i;for(var o in r)if(!(o in i))return!0;for(var a in i)if(r[a]!==i[a])return!0;return!1})(e,n)?n:e},ax=(e,t)=>{for(var n=0,r=t.length;n<r;n++)if(e[n]!==t[n])return!0;return!1};function Fe(e){var t=se(!0),n=Sf(),[r,i]=ee(Ps),o=ue((a,s)=>(i({...Ps,fetching:!0}),wp(n.executeMutation(ar(e,a),s||{})).then(c=>(t.current&&i({fetching:!1,stale:!!c.stale,data:c.data,error:c.error,extensions:c.extensions,operation:c.operation}),c))),[n,e,i]);return te(()=>(t.current=!0,()=>{t.current=!1}),[]),[r,o]}function sx(e,t){var n=se(void 0);return ce(()=>{var r=ar(e,t);return n.current!==void 0&&n.current.key===r.key?n.current:(n.current=r,r)},[e,t])}function ut(e){var t=Sf(),n=(h=>{if(!h._react){var f=new Set,m=new Map;h.operations$&&_t(g=>{g.kind==="teardown"&&f.has(g.key)&&(f.delete(g.key),m.delete(g.key))})(h.operations$),h._react={get:g=>m.get(g),set(g,x){f.delete(g),m.set(g,x)},dispose(g){f.add(g)}}}return h._react})(t),r=((h,f)=>h.suspense&&(!f||f.suspense!==!1))(t,e.context),i=sx(e.query,e.variables),o=ce(()=>{if(e.pause)return null;var h=t.executeQuery(i,{requestPolicy:e.requestPolicy,...e.context});return r?$t(f=>{n.set(i.key,f)})(h):h},[n,t,i,r,e.pause,e.requestPolicy,e.context]),a=ue((h,f)=>{if(!h)return{fetching:!1};var m=n.get(i.key);if(m){if(f&&m!=null&&"then"in m)throw m}else{var g,x=_t(b=>{m=b,g&&g(m)})(cv(()=>f&&!g||!m)(h));if(m==null&&f){var v=new Promise(b=>{g=b});throw n.set(i.key,v),v}else x.unsubscribe()}return m||{fetching:!0}},[n,i]),s=[t,i,e.requestPolicy,e.context,e.pause],[c,u]=ee(()=>[o,Ga(Ps,a(o,r)),s]),p=c[1];o!==c[0]&&ax(c[2],s)&&u([o,p=Ga(c[1],a(o,r)),s]),te(()=>{var h=c[0],f=c[2][1],m=!1,g=v=>{m=!0,u(b=>{var y=Ga(b[1],v);return b[1]!==y?[b[0],y,b[2]]:b})};if(h){var x=_t(g)(Kr(()=>{g({fetching:!1})})(h));return m||g({fetching:!0}),()=>{n.dispose(f.key),x.unsubscribe()}}else g({fetching:!1})},[n,c[0],c[2][1]]);var d=ue(h=>{var f={requestPolicy:e.requestPolicy,...e.context,...h};u(m=>[r?$t(g=>{n.set(i.key,g)})(t.executeQuery(i,f)):t.executeQuery(i,f),m[1],s])},[t,n,i,r,a,e.requestPolicy,e.context]);return[p,d]}var cx=0;function l(e,t,n,r,i,o){var a,s,c={};for(s in t)s=="ref"?a=t[s]:c[s]=t[s];var u={type:e,props:c,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--cx,__i:-1,__source:i,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(s in a)c[s]===void 0&&(c[s]=a[s]);return z.vnode&&z.vnode(u),u}const lx=V(({children:e})=>l(ox,{value:kr.get().gqlClient,children:e}));var Un=(e=>(e.Toast="toast",e.Modal="modal",e.Page="page",e))(Un||{});const bn=Ee([]),Ds=Ee(),fo=Ee(!1),Tr=e=>{switch(console.log("creating error"),console.error(e.message),e.type){case"toast":bn.set([...bn.peek(),e]),setTimeout(()=>{bn.set(bn.peek().filter(t=>t!==e))},3e3);break;case"modal":Ds.set(e),fo.set(!0);break}},wu=[],ux=window.location.origin.includes("localhost");function A(e){!ux&&wu.includes(e)||(document.adoptedStyleSheets=[...document.adoptedStyleSheets,e],wu.push(e))}function $(e,...t){var i;let n="";e.forEach((o,a)=>{const s=t[a];n+=o,s&&(n+=s)});const r=new CSSStyleSheet;return(i=r.replaceSync)==null||i.call(r,n),r}const dx=$`.c-toast {
  position: fixed;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
}
.c-toast > .toast-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  color: white;
  padding: 1em;
  border-radius: 0.5em;
  cursor: pointer;
  animation: fadeInOut 2s forwards;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  10%, 90% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
}`,px=V(()=>(A(dx),l("div",{className:"c-toast",children:bn.get().map((e,t)=>l("div",{className:"toast-item",children:e.title},t))}))),fx=$`* {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
}

html,
body,
#app,
.root-layout {
  --truffle-bg-color: #101010;
  --de-emphasized-text: #9f9f9f;
  --truffle-primary-color: #f357a1;
  --nav-height: 64px;
  height: 100%;
}

body {
  margin: 0;
}

.root-layout {
  background: var(--truffle-bg-color);
  color: #fff;
}
.root-layout > .container {
  max-width: 1440px;
  margin: 0 auto;
  overflow: auto;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* TODO: get rid of this, replace with a layout file in /getting-started */
.t-centered-page {
  height: 100%;
  padding: 20px 0px;
  box-sizing: border-box;
  background: var(--truffle-bg-color);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.t-button {
  background: #f357a1;
  border-radius: 4px;
  color: white;
  padding: 12px 20px;
  border: none;
  font-size: 16px;
  color: white;
  text-decoration: none;
}
.t-button:hover {
  cursor: pointer;
  /* ask rachel what color for hover */
}
.t-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.t-button-dark {
  border-radius: 2px;
  color: white;
  border: 1px solid white;
  padding: 4px 10px;
  background: var(--truffle-bg-color);
}

.t-label {
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 8px;
}

.t-divider {
  margin: 0px;
  padding: 0px;
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
}

.t-caps-title {
  color: var(--de-emphasized-text, #9f9f9f);
  font-size: 12px;
  font-family: Inter;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 7px 0px;
  margin-bottom: 4px;
}

.t-input {
  background: #303030;
  border-radius: 4px;
  border: none;
  font-weight: 500;
  color: white;
  padding: 12px 14px;
}
.t-input:focus {
  outline: 1px solid #f357a1;
}

.t-link {
  color: white;
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  transition: ease-in-out 0.2s;
}
.t-link:hover {
  cursor: pointer;
  color: #f357a1;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #444;
  border-radius: 4px;
}`,hx=$`.c-error-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.c-error-modal > .curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--truffle-bg-color);
  opacity: 0.7;
  z-index: 1;
}
.c-error-modal > .modal {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Inter";
  font-style: normal;
  line-height: 20px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #000000;
  color: white;
  width: 400px;
  padding: 30px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.c-error-modal > .modal > .header {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.c-error-modal > .modal > .header > .close-button {
  font-size: 24px;
  cursor: pointer;
}
.c-error-modal > .modal > .title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 0.5em;
}
.c-error-modal > .modal > .code {
  font-style: italic;
  font-size: 0.75em;
  font-weight: 300;
}
.c-error-modal > .modal > .code,
.c-error-modal > .modal .subtitle {
  text-align: center;
  margin-bottom: 1em;
}
.c-error-modal > .modal > button {
  background: #f357a1;
  border-radius: 4px;
  color: white;
  padding: 12px 20px;
  border: none;
  font-size: 16px;
  width: 150px;
}
.c-error-modal > .modal > button:hover {
  cursor: pointer;
}`,mx=V(()=>{if(A(hx),!fo.get()||!Ds.get())return null;const{title:e,subtitle:t,code:n,buttonText:r,action:i}=Ds.get(),o=()=>{i(),fo.set(!1)};return l("div",{className:"c-error-modal",children:[l("div",{className:"curtain",onClick:()=>{fo.set(!1)}}),l("div",{className:"modal",children:[l("div",{className:"header",children:l("span",{className:"close-button",onClick:o,children:"×"})}),l("h2",{className:"title",children:e}),n&&l("div",{className:"code",children:["Error Code: ",n]}),l("div",{className:"subtitle",children:t}),l("button",{onClick:o,children:r})]})]})}),Nf=$`:root {
  --color-brand-100: #fcd7e8;
  --color-brand-200: #fab7d7;
  --color-brand-300: #f795c4;
  --color-brand-400: #f575b2;
  --color-brand-50: #feeef6;
  --color-brand-500: #f357a1;
  --color-brand-600: #cf4a89;
  --color-brand-700: #ad3e72;
  --color-brand-800: #8b325c;
  --color-brand-900: #6d2748;
  --color-critical-100: #f0c4c6;
  --color-critical-200: #e9a8aa;
  --color-critical-300: #e08083;
  --color-critical-400: #d9686b;
  --color-critical-50: #faeced;
  --color-critical-500: #d04246;
  --color-critical-600: #bd3c40;
  --color-critical-700: #942f32;
  --color-critical-800: #722427;
  --color-critical-900: #571c1d;
  --color-mono-100: #f5f5f5;
  --color-mono-200: #dadada;
  --color-mono-300: #bfbfbf;
  --color-mono-400: #a5a5a5;
  --color-mono-50: #ffffff;
  --color-mono-500: #8a8a8a;
  --color-mono-600: #676767;
  --color-mono-700: #555555;
  --color-mono-800: #3a3a3a;
  --color-mono-900: #202020;
  --color-mono-950: #121212;
  --color-mono-alpha-950: #121212cc;
  --color-success-100: #cbe5cd;
  --color-success-200: #b2d9b5;
  --color-success-300: #8fc793;
  --color-success-400: #79bd7e;
  --color-success-50: #eef7ef;
  --color-success-500: #58ac5e;
  --color-success-600: #509d56;
  --color-success-700: #3e7a43;
  --color-success-800: #305f34;
  --color-success-900: #254827;
  --color-warning-100: #f7e4c3;
  --color-warning-200: #f3d7a6;
  --color-warning-300: #eec57d;
  --color-warning-400: #eaba64;
  --color-warning-50: #fcf6ec;
  --color-warning-500: #e5a93d;
  --color-warning-600: #d09a38;
  --color-warning-700: #a3782b;
  --color-warning-800: #7e5d22;
  --color-warning-900: #60471a;
}

[data-theme=Light] {
  /* colors */
  --color-background-action: #f357a1;
  --color-background-action-critical: #d04246;
  --color-background-action-critical-hover: #942f32;
  --color-background-action-disabled: #fcd7e8;
  --color-background-action-hover: #cf4a89;
  --color-background-action-secondary: #bfbfbf;
  --color-background-action-secondary-hover: #a5a5a5;
  --color-background-brand: #f357a1;
  --color-background-brand-hover: #cf4a89;
  --color-background-divider: #dadada;
  --color-background-error: #d04246;
  --color-background-error-highlight: #faeced;
  --color-background-inverse: #121212;
  --color-background-page: #ffffff;
  --color-background-success: #58ac5e;
  --color-background-success-highlight: #eef7ef;
  --color-background-surface: #ffffff;
  --color-background-surface-secondary: #dadada;
  --color-background-surface-subtle: #f5f5f5;
  --color-background-warning: #e5a93d;
  --color-background-warning-highlight: #fcf6ec;
  --color-border-action: #f357a1;
  --color-border-brand: #f357a1;
  --color-border-container: #f5f5f5;
  --color-border-container-strong: #dadada;
  --color-border-error: #bd3c40;
  --color-border-success: #509d56;
  --color-border-warning: #d09a38;
  --color-icon-brand: #f357a1;
  --color-icon-brand-hover: #cf4a89;
  --color-icon-error: #d04246;
  --color-icon-primary: #121212;
  --color-icon-subtle: #555555;
  --color-icon-subtle-hover: #121212;
  --color-icon-success: #509d56;
  --color-icon-warning: #d09a38;
  --color-text-action: #ffffff;
  --color-text-action-inactive: #121212;
  --color-text-action-secondary: #121212;
  --color-text-body: #121212;
  --color-text-brand: #f357a1;
  --color-text-error: #bd3c40;
  --color-text-inverse: #ffffff;
  --color-text-link: #121212;
  --color-text-subtle: #555555;
  --color-text-success: #509d56;
  --color-text-warning: #a3782b;
}

[data-theme=Dark] {
  /* colors */
  --color-background-action: #f357a1;
  --color-background-action-critical: #d04246;
  --color-background-action-critical-hover: #942f32;
  --color-background-action-disabled: #6d2748;
  --color-background-action-hover: #cf4a89;
  --color-background-action-secondary: #555555;
  --color-background-action-secondary-hover: #676767;
  --color-background-brand: #f357a1;
  --color-background-brand-hover: #cf4a89;
  --color-background-divider: #3a3a3a;
  --color-background-error: #d04246;
  --color-background-error-highlight: #571c1d;
  --color-background-inverse: #ffffff;
  --color-background-page: #121212;
  --color-background-success: #58ac5e;
  --color-background-success-highlight: #254827;
  --color-background-surface: #121212;
  --color-background-surface-secondary: #3a3a3a;
  --color-background-surface-subtle: #202020;
  --color-background-warning: #e5a93d;
  --color-background-warning-highlight: #60471a;
  --color-border-action: #f357a1;
  --color-border-brand: #f357a1;
  --color-border-container: #3a3a3a;
  --color-border-container-strong: #555555;
  --color-border-error: #d9686b;
  --color-border-success: #79bd7e;
  --color-border-warning: #eaba64;
  --color-icon-brand: #f357a1;
  --color-icon-brand-hover: #cf4a89;
  --color-icon-error: #d04246;
  --color-icon-primary: #ffffff;
  --color-icon-subtle: #bfbfbf;
  --color-icon-subtle-hover: #ffffff;
  --color-icon-success: #79bd7e;
  --color-icon-warning: #eaba64;
  --color-text-action: #ffffff;
  --color-text-action-inactive: #ffffff;
  --color-text-action-secondary: #ffffff;
  --color-text-body: #ffffff;
  --color-text-brand: #f357a1;
  --color-text-error: #d9686b;
  --color-text-inverse: #121212;
  --color-text-link: #ffffff;
  --color-text-subtle: #bfbfbf;
  --color-text-success: #79bd7e;
  --color-text-warning: #eaba64;
}`,Ti=$`/*BORDER RADIUS*/
:root {
  --border-radius-xs: 2px;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-xl: 16px;
  --border-radius-2xl: 20px;
  --border-radius-round: 50%;
}

/* SPACING & SIZING */
:root {
  --sizing-3xs: 16px;
  --sizing-2xs: 20px;
  --sizing-xs: 24px;
  --sizing-sm: 32px;
  --sizing-md: 40px;
  --sizing-lg: 48px;
  --sizing-xl: 64px;
  --sizing-2xl: 96px;
  --sizing-3xl: 124px;
  --spacing-4xs: 1px;
  --spacing-3xs: 2px;
  --spacing-2xs: 4px;
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 40px;
  --spacing-3xl: 48px;
  --spacing-4xl: 64px;
  --spacing-5xl: 96px;
  --spacing-layout-2xs: 16px;
  --spacing-layout-xs: 24px;
  --spacing-layout-sm: 32px;
  --spacing-layout-md: 48px;
  --spacing-layout-lg: 64px;
  --spacing-layout-xl: 96px;
  --spacing-layout-2xl: 128px;
}`,pa=$`/* FONTS */
/* reset text styles */
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
label {
  all: unset;
  display: block;
}

/* bring back cursors */
a {
  cursor: pointer;
}

:root {
  /* body font sizes */
  --body-lg: 20px;
  --body-md: 16px;
  --body-sm: 14px;
  /* action font sizes */
  --action-chonk: 20px;
  --action-lg: 16px;
  --action-md: 14px;
  --action-sm: 12px;
  /* overline font sizes */
  --overline-md: 14px;
  --overline-sm: 12px;
  /* caption font sizes */
  --caption-md: 12px;
  /* heading font sizes */
  --heading-3xl: 48px;
  --heading-2xl: 40px;
  --heading-xl: 32px;
  --heading-lg: 24px;
  --heading-md: 20px;
  --heading-sm: 16px;
  --heading-xs: 14px;
  /* link font sizes */
  --link-md: 16px;
  --link-sm: 14px;
  --link-xs: 12px;
  /* font weight */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semi-bold: 600;
  --weight-bold: 700;
}`,fa=e=>{const{mb:t,mt:n,mx:r,my:i,ml:o,mr:a,...s}=e;return{marginStyles:gx({mb:t,mt:n,mx:r,my:i,ml:o,mr:a}),rest:s}},zn=e=>e?`var(--spacing-${e})`:0,gx=({mb:e,mt:t,mx:n,my:r,ml:i,mr:o})=>vx({margin:n||r?`${zn(r)} ${zn(n)}`:0,marginBottom:zn(e),marginTop:zn(t),marginLeft:zn(i),marginRight:zn(o)});function vx(e){return Object.fromEntries(Object.entries(e).filter(([t,n])=>n!==0))}const yx=$`/* action styles */
.c-action {
  font-family: Inter;
  font-style: normal;
  font-weight: var(--weight-semi-bold);
}
.c-action.size-chonk {
  font-size: var(--action-chonk);
  letter-spacing: 0.25px;
  line-height: 20px;
}
.c-action.size-lg {
  font-size: var(--action-lg);
  letter-spacing: 0.5px;
  line-height: 20px;
}
.c-action.size-md {
  font-size: var(--action-md);
  letter-spacing: 0.25px;
  line-height: 20px;
}
.c-action.size-sm {
  font-size: var(--action-sm);
  letter-spacing: 0.5px;
  line-height: 12px;
}`;var If={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var o=arguments[i];if(o){var a=typeof o;if(a==="string"||a==="number")r.push(o);else if(Array.isArray(o)){if(o.length){var s=n.apply(null,o);s&&r.push(s)}}else if(a==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){r.push(o.toString());continue}for(var c in o)t.call(o,c)&&o[c]&&r.push(c)}}}return r.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(If);var bx=If.exports;const qn=Gd(bx),xx=({as:e="span",size:t="md",textAlign:n,children:r,htmlFor:i,...o})=>{A(pa),A(Ti),A(yx);const{marginStyles:a}=fa(o);return l(j,{children:C(e,{className:qn("c-action",`size-${t}`),style:{textAlign:n,...a},htmlFor:i},r)})},_x=$`.c-button {
  display: flex;
  align-items: center;
  color: var(--color-text-link);
  background-color: transparent;
  border-width: 1px;
  -webkit-box-sizing: border-box;
  /* SIZES */
  /* COLORS */
  /* VARIANTS */
}
.c-button.full-width {
  width: 100%;
}
.c-button.size-sm {
  height: var(--sizing-sm);
  border-radius: var(--border-radius-xs);
  padding: 0 var(--spacing-sm);
  gap: var(--spacing-2xs);
}
.c-button.size-md {
  height: var(--sizing-md);
  border-radius: var(--border-radius-xs);
  padding: 0 var(--spacing-md);
  gap: var(--spacing-xs);
}
.c-button.size-lg {
  height: var(--sizing-lg);
  border-radius: var(--border-radius-xs);
  padding: 0 var(--sizing-2xs);
  gap: var(--spacing-2xs);
}
.c-button.size-xl {
  height: var(--sizing-xl);
  border-radius: var(--border-radius-sm);
  padding: 0 var(--spacing-md);
  gap: var(--spacing-xs);
}
.c-button.size-2xl {
  height: var(--sizing-xl);
  border-radius: var(--border-radius-sm);
  padding: 0 var(--spacing-lg);
  gap: var(--spacing-xs);
}
.c-button.color-brand {
  background-color: var(--color-background-action);
  border-color: var(--color-border-brand);
}
.c-button.color-brand:hover:not(.disabled) {
  background-color: var(--color-background-action-hover);
  border-color: var(--color-background-action-hover);
}
.c-button.color-neutral {
  background-color: var(--color-background-surface-secondary);
  border-color: var(--color-border-container);
}
.c-button.color-danger {
  background-color: var(--color-background-action-critical);
  border-color: var(--color-border-error);
}
.c-button.button-outlined {
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  background: transparent;
}
.c-button.button-outlined:hover:not(.disabled) {
  background-color: var(--color-background-action);
  color: var(--color-text-action);
}
.c-button.button-ghost {
  background-color: transparent;
  border-color: transparent;
}
.c-button.button-ghost:hover:not(.disabled) {
  background-color: transparent;
  text-decoration: underline;
  border-color: transparent;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}
.c-button.button-ghost.color-brand {
  color: var(--color-text-brand);
}
.c-button.button-ghost.color-danger {
  color: var(--color-text-error);
}
.c-button.button-ghost.disabled {
  color: var(--color-text-subtle);
}
.c-button.disabled {
  color: var(--color-text-subtle);
  background-color: var(--color-background-surface-secondary);
  border-color: var(--color-background-surface-secondary);
}`,In=Oe.forwardRef(({variant:e="filled",className:t,fullWidth:n,size:r="md",color:i="brand",disabled:o,iconBefore:a,iconAfter:s,onClick:c,children:u,...p},d)=>{A(Nf),A(_x);const h={sm:"sm",md:"md",lg:"md",xl:"lg","2xl":"chonk"};return l("button",{onClick:c,disabled:o,ref:d,className:qn("c-button",`button-${e}`,`color-${i}`,`size-${r}`,{"full-width":n},{disabled:o},t),...p,children:[a||null,u.type?l(xx,{size:h[r],children:u}):u,s||null]})});In.displayName="Button";const wx=$`.c-input_c-text-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.c-input_c-text-input > .input-item {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-background-surface-secondary);
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  border: 2px solid var(--color-background-surface-secondary);
  color: var(--color-text-body);
  font-size: 16px;
  line-height: 24px;
}
.c-input_c-text-input > .input-item:focus {
  outline: none;
  border-color: var(--color-border-action);
}
.c-input_c-text-input > .input-item.with-icon {
  padding-left: 36px;
}
.c-input_c-text-input > .icon-container {
  position: absolute;
  bottom: 7px;
  left: 12px;
}`,Ex=$`.c-caption {
  font-family: Inter;
  font-style: normal;
  font-size: var(--caption-md);
  line-height: 16px;
  letter-spacing: 0.5px;
  /* default to non bold styles */
  font-weight: var(--weight-regular);
}
.c-caption.bold {
  font-weight: var(--weight-bold);
}`,Cf=({as:e="span",weight:t,textAlign:n,children:r,...i})=>{A(pa),A(Ti),A(Ex);const{marginStyles:o}=fa(i);return l(j,{children:C(e,{className:qn("c-caption",{bold:t==="bold"}),style:{textAlign:n,...o}},r)})},Ls=Oe.forwardRef(({type:e,name:t,className:n,label:r,icon:i,defaultValue:o,value:a,onChange:s,...c},u)=>(A(wx),l("div",{className:"c-input_c-text-input",children:[l(Cf,{as:"label",htmlFor:t,children:r}),i?l("div",{className:"icon-container",children:i}):null,l("input",{defaultValue:o,onChange:s,id:t,name:t,value:a,ref:u,type:e,className:qn("input-item",n,{"with-icon":i}),...c})]})));Ls.displayName="TextInput";const kx=$`.c-input_c-file-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.c-input_c-file-input > .input-item {
  display: none;
}
.c-input_c-file-input > .upload-button {
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
.c-input_c-file-input > .upload-button.remove-background {
  background: none;
}

.c-file-input_c-upload-icon {
  height: 32px;
}

.c-file-input_c-input-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}`,Tx="/assets/file_upload-215daa9e.svg",Of=({name:e,label:t,defaultValue:n,onChange:r,...i})=>{A(kx);const o=se(),[a,s]=ee(null);te(()=>{n&&s(n)},[]);const c=u=>{u.target.files&&u.target.files[0]&&s(URL.createObjectURL(u.target.files[0])),r&&r(u)};return l("div",{className:"c-input_c-file-input",children:[l(Cf,{as:"label",htmlFor:e,children:t}),l(In,{onClick:u=>{u.preventDefault(),o.current.click()},className:qn("upload-button",a?"remove-background":null),children:l("img",{src:a||Tx,className:a?"c-file-input_c-input-image":"c-file-input_c-upload-icon"})}),l("input",{defaultValue:n,onChange:c,name:e,id:e,ref:o,type:"file",className:"input-item",...i})]})};Of.displayName="FileInput";function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}function Ve(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Sx(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function Af(...e){return t=>e.forEach(n=>Sx(n,t))}function nt(...e){return ue(Af(...e),e)}function yc(e,t=[]){let n=[];function r(o,a){const s=Ot(a),c=n.length;n=[...n,a];function u(d){const{scope:h,children:f,...m}=d,g=(h==null?void 0:h[e][c])||s,x=ce(()=>m,Object.values(m));return C(g.Provider,{value:x},f)}function p(d,h){const f=(h==null?void 0:h[e][c])||s,m=Lt(f);if(m)return m;if(a!==void 0)return a;throw new Error(`\`${d}\` must be used within \`${o}\``)}return u.displayName=o+"Provider",[u,p]}const i=()=>{const o=n.map(a=>Ot(a));return function(s){const c=(s==null?void 0:s[e])||o;return ce(()=>({[`__scope${e}`]:{...s,[e]:c}}),[s,c])}};return i.scopeName=e,[r,Nx(i,...t)]}function Nx(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((s,{useScope:c,scopeName:u})=>{const d=c(o)[`__scope${u}`];return{...s,...d}},{});return ce(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}const oi=me((e,t)=>{const{children:n,...r}=e,i=It.toArray(n),o=i.find(Cx);if(o){const a=o.props.children,s=i.map(c=>c===o?It.count(a)>1?It.only(null):At(a)?a.props.children:null:c);return C(Ms,Te({},r,{ref:t}),At(a)?gi(a,void 0,s):null)}return C(Ms,Te({},r,{ref:t}),n)});oi.displayName="Slot";const Ms=me((e,t)=>{const{children:n,...r}=e;return At(n)?gi(n,{...Ox(r,n.props),ref:t?Af(t,n.ref):n.ref}):It.count(n)>1?It.only(null):null});Ms.displayName="SlotClone";const Ix=({children:e})=>C(j,null,e);function Cx(e){return At(e)&&e.type===Ix}function Ox(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}const Ax=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],ft=Ax.reduce((e,t)=>{const n=me((r,i)=>{const{asChild:o,...a}=r,s=o?oi:t;return te(()=>{window[Symbol.for("radix-ui")]=!0},[]),C(s,Te({},a,{ref:i}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function $x(e,t){e&&zo(()=>e.dispatchEvent(t))}function Rx(e){const t=e+"CollectionProvider",[n,r]=yc(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=f=>{const{scope:m,children:g}=f,x=Oe.useRef(null),v=Oe.useRef(new Map).current;return Oe.createElement(i,{scope:m,itemMap:v,collectionRef:x},g)},s=e+"CollectionSlot",c=Oe.forwardRef((f,m)=>{const{scope:g,children:x}=f,v=o(s,g),b=nt(m,v.collectionRef);return Oe.createElement(oi,{ref:b},x)}),u=e+"CollectionItemSlot",p="data-radix-collection-item",d=Oe.forwardRef((f,m)=>{const{scope:g,children:x,...v}=f,b=Oe.useRef(null),y=nt(m,b),_=o(u,g);return Oe.useEffect(()=>(_.itemMap.set(b,{ref:b,...v}),()=>void _.itemMap.delete(b))),Oe.createElement(oi,{[p]:"",ref:y},x)});function h(f){const m=o(e+"CollectionConsumer",f);return Oe.useCallback(()=>{const x=m.collectionRef.current;if(!x)return[];const v=Array.from(x.querySelectorAll(`[${p}]`));return Array.from(m.itemMap.values()).sort((_,w)=>v.indexOf(_.ref.current)-v.indexOf(w.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:a,Slot:c,ItemSlot:d},h,r]}const un=globalThis!=null&&globalThis.document?hn:()=>{},Px=Wd["useId".toString()]||(()=>{});let Dx=0;function $f(e){const[t,n]=ee(Px());return un(()=>{e||n(r=>r??String(Dx++))},[e]),e||(t?`radix-${t}`:"")}function Gt(e){const t=se(e);return te(()=>{t.current=e}),ce(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Eu({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,i]=Lx({defaultProp:t,onChange:n}),o=e!==void 0,a=o?e:r,s=Gt(n),c=ue(u=>{if(o){const d=typeof u=="function"?u(e):u;d!==e&&s(d)}else i(u)},[o,e,i,s]);return[a,c]}function Lx({defaultProp:e,onChange:t}){const n=ee(e),[r]=n,i=se(r),o=Gt(t);return te(()=>{i.current!==r&&(o(r),i.current=r)},[r,i,o]),n}const Mx=Ot(void 0);function Fx(e){const t=Lt(Mx);return e||t||"ltr"}function Ux(e){const[t,n]=ee(void 0);return un(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let a,s;if("borderBoxSize"in o){const c=o.borderBoxSize,u=Array.isArray(c)?c[0]:c;a=u.inlineSize,s=u.blockSize}else a=e.offsetWidth,s=e.offsetHeight;n({width:a,height:s})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function qx(e){const t=se({value:e,previous:e});return ce(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}$`.c-radio {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.c-radio > span {
  color: var(--color-mono-300);
}
.c-radio > .row {
  flex-direction: row;
  flex-wrap: wrap;
}
.c-radio > .column {
  flex-direction: column;
}
.c-radio > .radio-group-root {
  margin-top: 24px;
  display: flex;
  gap: 16px;
}`;const Bx=$`/* heading styles */
.c-heading {
  font-family: Inter;
  font-style: normal;
}
.c-heading.size-3xl {
  font-size: var(--heading-3xl);
  font-weight: var(--weight-bold);
  letter-spacing: 0px;
  line-height: 58px;
}
.c-heading.size-2xl {
  font-size: var(--heading-2xl);
  font-weight: var(--weight-bold);
  letter-spacing: 0px;
  line-height: 48px;
}
.c-heading.size-xl {
  font-size: var(--heading-xl);
  font-weight: var(--weight-bold);
  letter-spacing: 0px;
  line-height: 40px;
}
.c-heading.size-lg {
  font-size: var(--heading-lg);
  font-weight: var(--weight-bold);
  letter-spacing: 0px;
  line-height: 30px;
}
.c-heading.size-md {
  font-size: var(--heading-md);
  font-weight: var(--weight-bold);
  letter-spacing: 0.15px;
  line-height: 24px;
}
.c-heading.size-sm {
  font-size: var(--heading-sm);
  font-weight: var(--weight-semi-bold);
  letter-spacing: 0.15px;
  line-height: 20px;
}
.c-heading.size-xs {
  font-size: var(--heading-xs);
  font-weight: var(--weight-semi-bold);
  letter-spacing: 0.15px;
  line-height: 18px;
}`,ai=({as:e,size:t="lg",textAlign:n,children:r,...i})=>{A(pa),A(Ti),A(Bx);const{marginStyles:o}=fa(i);return l(j,{children:C(e,{className:qn("c-heading",`size-${t}`),style:{textAlign:n,...o}},r)})};$`/* body styles */
.c-body {
  font-family: Inter;
  font-style: normal;
}
.c-body.size-lg {
  font-size: var(--body-lg);
  font-weight: var(--weight-regular);
  letter-spacing: 0.5px;
  line-height: 30px;
}
.c-body.size-md {
  font-size: var(--body-md);
  font-weight: var(--weight-regular);
  letter-spacing: 0.5px;
  line-height: 24px;
}
.c-body.size-sm {
  font-size: var(--body-sm);
  font-weight: var(--weight-regular);
  letter-spacing: 0.25px;
  line-height: 14px;
}`;$`
  .c-radio_c-radio-item_c-radio-input-item {
    background: none;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    border: 2px solid var(--color-mono-300);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    padding: 0;

    > .radio-input-indicator::after {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: var(--color-icon-brand);
    }
  }

  .c-radio_c-radio-item_c-radio-input-item[data-state='checked'] {
    border-color: var(--color-border-brand);
  }

  .c-radio_c-radio-item_c-radio-input-item[data-state='unchecked'] + .item-label-container {
    color: var(--truffle-mono);
  }

  .c-radio_c-radio-item_c-radio-input-item[data-state='checked'] + .item-label-container {
    color: --var(--color-text-action);
  }
`;$`.c-radio_c-radio-item {
  padding: 6px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.c-radio_c-radio-item > .column {
  display: flex;
  flex-direction: column;
}
.c-radio_c-radio-item > .column > .radio-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.c-radio_c-radio-item > .column > .radio-row > .item-label-container {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 4px;
  flex-shrink: 1;
}
.c-radio_c-radio-item.outline {
  border: 1px solid var(--color-border-container-strong);
}
.c-radio_c-radio-item.outline:has(.c-radio_c-radio-item_c-radio-input-item[data-state=checked]) {
  border-color: var(--color-border-brand);
  background-color: color-mix(in lch, var(--color-background-brand) 16%, var(--color-background-page));
}`;function ku(e,[t,n]){return Math.min(n,Math.max(t,e))}function jx(e,t=globalThis==null?void 0:globalThis.document){const n=Gt(e);te(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Fs="dismissableLayer.update",Vx="dismissableLayer.pointerDownOutside",zx="dismissableLayer.focusOutside";let Tu;const Hx=Ot({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Wx=me((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:a,onInteractOutside:s,onDismiss:c,...u}=e,p=Lt(Hx),[d,h]=ee(null),f=(n=d==null?void 0:d.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,m]=ee({}),g=nt(t,T=>h(T)),x=Array.from(p.layers),[v]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),b=x.indexOf(v),y=d?x.indexOf(d):-1,_=p.layersWithOutsidePointerEventsDisabled.size>0,w=y>=b,E=Gx(T=>{const R=T.target,P=[...p.branches].some(F=>F.contains(R));!w||P||(o==null||o(T),s==null||s(T),T.defaultPrevented||c==null||c())},f),k=Yx(T=>{const R=T.target;[...p.branches].some(F=>F.contains(R))||(a==null||a(T),s==null||s(T),T.defaultPrevented||c==null||c())},f);return jx(T=>{y===p.layers.size-1&&(i==null||i(T),!T.defaultPrevented&&c&&(T.preventDefault(),c()))},f),te(()=>{if(d)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(Tu=f.body.style.pointerEvents,f.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(d)),p.layers.add(d),Su(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(f.body.style.pointerEvents=Tu)}},[d,f,r,p]),te(()=>()=>{d&&(p.layers.delete(d),p.layersWithOutsidePointerEventsDisabled.delete(d),Su())},[d,p]),te(()=>{const T=()=>m({});return document.addEventListener(Fs,T),()=>document.removeEventListener(Fs,T)},[]),C(ft.div,Te({},u,{ref:g,style:{pointerEvents:_?w?"auto":"none":void 0,...e.style},onFocusCapture:Ve(e.onFocusCapture,k.onFocusCapture),onBlurCapture:Ve(e.onBlurCapture,k.onBlurCapture),onPointerDownCapture:Ve(e.onPointerDownCapture,E.onPointerDownCapture)}))});function Gx(e,t=globalThis==null?void 0:globalThis.document){const n=Gt(e),r=se(!1),i=se(()=>{});return te(()=>{const o=s=>{if(s.target&&!r.current){let u=function(){Rf(Vx,n,c,{discrete:!0})};const c={originalEvent:s};s.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=u,t.addEventListener("click",i.current,{once:!0})):u()}else t.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Yx(e,t=globalThis==null?void 0:globalThis.document){const n=Gt(e),r=se(!1);return te(()=>{const i=o=>{o.target&&!r.current&&Rf(zx,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Su(){const e=new CustomEvent(Fs);document.dispatchEvent(e)}function Rf(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?$x(i,o):i.dispatchEvent(o)}let Ya=0;function Qx(){te(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:Nu()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:Nu()),Ya++,()=>{Ya===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),Ya--}},[])}function Nu(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const Qa="focusScope.autoFocusOnMount",Ka="focusScope.autoFocusOnUnmount",Iu={bubbles:!1,cancelable:!0},Kx=me((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=e,[s,c]=ee(null),u=Gt(i),p=Gt(o),d=se(null),h=nt(t,g=>c(g)),f=se({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;te(()=>{if(r){let g=function(y){if(f.paused||!s)return;const _=y.target;s.contains(_)?d.current=_:rn(d.current,{select:!0})},x=function(y){if(f.paused||!s)return;const _=y.relatedTarget;_!==null&&(s.contains(_)||rn(d.current,{select:!0}))},v=function(y){if(document.activeElement===document.body)for(const w of y)w.removedNodes.length>0&&rn(s)};document.addEventListener("focusin",g),document.addEventListener("focusout",x);const b=new MutationObserver(v);return s&&b.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",g),document.removeEventListener("focusout",x),b.disconnect()}}},[r,s,f.paused]),te(()=>{if(s){Ou.add(f);const g=document.activeElement;if(!s.contains(g)){const v=new CustomEvent(Qa,Iu);s.addEventListener(Qa,u),s.dispatchEvent(v),v.defaultPrevented||(Jx(n_(Pf(s)),{select:!0}),document.activeElement===g&&rn(s))}return()=>{s.removeEventListener(Qa,u),setTimeout(()=>{const v=new CustomEvent(Ka,Iu);s.addEventListener(Ka,p),s.dispatchEvent(v),v.defaultPrevented||rn(g??document.body,{select:!0}),s.removeEventListener(Ka,p),Ou.remove(f)},0)}}},[s,u,p,f]);const m=ue(g=>{if(!n&&!r||f.paused)return;const x=g.key==="Tab"&&!g.altKey&&!g.ctrlKey&&!g.metaKey,v=document.activeElement;if(x&&v){const b=g.currentTarget,[y,_]=Xx(b);y&&_?!g.shiftKey&&v===_?(g.preventDefault(),n&&rn(y,{select:!0})):g.shiftKey&&v===y&&(g.preventDefault(),n&&rn(_,{select:!0})):v===b&&g.preventDefault()}},[n,r,f.paused]);return C(ft.div,Te({tabIndex:-1},a,{ref:h,onKeyDown:m}))});function Jx(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(rn(r,{select:t}),document.activeElement!==n)return}function Xx(e){const t=Pf(e),n=Cu(t,e),r=Cu(t.reverse(),e);return[n,r]}function Pf(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Cu(e,t){for(const n of e)if(!Zx(n,{upTo:t}))return n}function Zx(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function e_(e){return e instanceof HTMLInputElement&&"select"in e}function rn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&e_(e)&&t&&e.select()}}const Ou=t_();function t_(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Au(e,t),e.unshift(t)},remove(t){var n;e=Au(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function Au(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function n_(e){return e.filter(t=>t.tagName!=="A")}const r_=["top","right","bottom","left"],dn=Math.min,Xe=Math.max,Do=Math.round,Fi=Math.floor,pn=e=>({x:e,y:e}),i_={left:"right",right:"left",bottom:"top",top:"bottom"},o_={start:"end",end:"start"};function Us(e,t,n){return Xe(e,dn(t,n))}function Yt(e,t){return typeof e=="function"?e(t):e}function Qt(e){return e.split("-")[0]}function Sr(e){return e.split("-")[1]}function bc(e){return e==="x"?"y":"x"}function xc(e){return e==="y"?"height":"width"}function Nr(e){return["top","bottom"].includes(Qt(e))?"y":"x"}function _c(e){return bc(Nr(e))}function a_(e,t,n){n===void 0&&(n=!1);const r=Sr(e),i=_c(e),o=xc(i);let a=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Lo(a)),[a,Lo(a)]}function s_(e){const t=Lo(e);return[qs(e),t,qs(t)]}function qs(e){return e.replace(/start|end/g,t=>o_[t])}function c_(e,t,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?o:a;default:return[]}}function l_(e,t,n,r){const i=Sr(e);let o=c_(Qt(e),n==="start",r);return i&&(o=o.map(a=>a+"-"+i),t&&(o=o.concat(o.map(qs)))),o}function Lo(e){return e.replace(/left|right|bottom|top/g,t=>i_[t])}function u_(e){return{top:0,right:0,bottom:0,left:0,...e}}function Df(e){return typeof e!="number"?u_(e):{top:e,right:e,bottom:e,left:e}}function Mo(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function $u(e,t,n){let{reference:r,floating:i}=e;const o=Nr(t),a=_c(t),s=xc(a),c=Qt(t),u=o==="y",p=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,h=r[s]/2-i[s]/2;let f;switch(c){case"top":f={x:p,y:r.y-i.height};break;case"bottom":f={x:p,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-i.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Sr(t)){case"start":f[a]-=h*(n&&u?-1:1);break;case"end":f[a]+=h*(n&&u?-1:1);break}return f}const d_=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,s=o.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:p,y:d}=$u(u,r,c),h=r,f={},m=0;for(let g=0;g<s.length;g++){const{name:x,fn:v}=s[g],{x:b,y,data:_,reset:w}=await v({x:p,y:d,initialPlacement:r,placement:h,strategy:i,middlewareData:f,rects:u,platform:a,elements:{reference:e,floating:t}});if(p=b??p,d=y??d,f={...f,[x]:{...f[x],..._}},w&&m<=50){m++,typeof w=="object"&&(w.placement&&(h=w.placement),w.rects&&(u=w.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):w.rects),{x:p,y:d}=$u(u,h,c)),g=-1;continue}}return{x:p,y:d,placement:h,strategy:i,middlewareData:f}};async function si(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:a,elements:s,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=Yt(t,e),m=Df(f),x=s[h?d==="floating"?"reference":"floating":d],v=Mo(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(x)))==null||n?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(s.floating)),boundary:u,rootBoundary:p,strategy:c})),b=d==="floating"?{...a.floating,x:r,y:i}:a.reference,y=await(o.getOffsetParent==null?void 0:o.getOffsetParent(s.floating)),_=await(o.isElement==null?void 0:o.isElement(y))?await(o.getScale==null?void 0:o.getScale(y))||{x:1,y:1}:{x:1,y:1},w=Mo(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:b,offsetParent:y,strategy:c}):b);return{top:(v.top-w.top+m.top)/_.y,bottom:(w.bottom-v.bottom+m.bottom)/_.y,left:(v.left-w.left+m.left)/_.x,right:(w.right-v.right+m.right)/_.x}}const Ru=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:a,elements:s,middlewareData:c}=t,{element:u,padding:p=0}=Yt(e,t)||{};if(u==null)return{};const d=Df(p),h={x:n,y:r},f=_c(i),m=xc(f),g=await a.getDimensions(u),x=f==="y",v=x?"top":"left",b=x?"bottom":"right",y=x?"clientHeight":"clientWidth",_=o.reference[m]+o.reference[f]-h[f]-o.floating[m],w=h[f]-o.reference[f],E=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let k=E?E[y]:0;(!k||!await(a.isElement==null?void 0:a.isElement(E)))&&(k=s.floating[y]||o.floating[m]);const T=_/2-w/2,R=k/2-g[m]/2-1,P=dn(d[v],R),F=dn(d[b],R),D=P,H=k-g[m]-F,I=k/2-g[m]/2+T,M=Us(D,I,H),O=!c.arrow&&Sr(i)!=null&&I!=M&&o.reference[m]/2-(I<D?P:F)-g[m]/2<0,L=O?I<D?I-D:I-H:0;return{[f]:h[f]+L,data:{[f]:M,centerOffset:I-M-L,...O&&{alignmentOffset:L}},reset:O}}}),p_=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:a,initialPlacement:s,platform:c,elements:u}=t,{mainAxis:p=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...x}=Yt(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const v=Qt(i),b=Qt(s)===s,y=await(c.isRTL==null?void 0:c.isRTL(u.floating)),_=h||(b||!g?[Lo(s)]:s_(s));!h&&m!=="none"&&_.push(...l_(s,g,m,y));const w=[s,..._],E=await si(t,x),k=[];let T=((r=o.flip)==null?void 0:r.overflows)||[];if(p&&k.push(E[v]),d){const D=a_(i,a,y);k.push(E[D[0]],E[D[1]])}if(T=[...T,{placement:i,overflows:k}],!k.every(D=>D<=0)){var R,P;const D=(((R=o.flip)==null?void 0:R.index)||0)+1,H=w[D];if(H)return{data:{index:D,overflows:T},reset:{placement:H}};let I=(P=T.filter(M=>M.overflows[0]<=0).sort((M,O)=>M.overflows[1]-O.overflows[1])[0])==null?void 0:P.placement;if(!I)switch(f){case"bestFit":{var F;const M=(F=T.map(O=>[O.placement,O.overflows.filter(L=>L>0).reduce((L,W)=>L+W,0)]).sort((O,L)=>O[1]-L[1])[0])==null?void 0:F[0];M&&(I=M);break}case"initialPlacement":I=s;break}if(i!==I)return{reset:{placement:I}}}return{}}}};function Pu(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Du(e){return r_.some(t=>e[t]>=0)}const f_=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=Yt(e,t);switch(r){case"referenceHidden":{const o=await si(t,{...i,elementContext:"reference"}),a=Pu(o,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Du(a)}}}case"escaped":{const o=await si(t,{...i,altBoundary:!0}),a=Pu(o,n.floating);return{data:{escapedOffsets:a,escaped:Du(a)}}}default:return{}}}}};async function h_(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),a=Qt(n),s=Sr(n),c=Nr(n)==="y",u=["left","top"].includes(a)?-1:1,p=o&&c?-1:1,d=Yt(t,e);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return s&&typeof m=="number"&&(f=s==="end"?m*-1:m),c?{x:f*p,y:h*u}:{x:h*u,y:f*p}}const m_=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){const{x:n,y:r}=t,i=await h_(t,e);return{x:n+i.x,y:r+i.y,data:i}}}},g_=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:s={fn:x=>{let{x:v,y:b}=x;return{x:v,y:b}}},...c}=Yt(e,t),u={x:n,y:r},p=await si(t,c),d=Nr(Qt(i)),h=bc(d);let f=u[h],m=u[d];if(o){const x=h==="y"?"top":"left",v=h==="y"?"bottom":"right",b=f+p[x],y=f-p[v];f=Us(b,f,y)}if(a){const x=d==="y"?"top":"left",v=d==="y"?"bottom":"right",b=m+p[x],y=m-p[v];m=Us(b,m,y)}const g=s.fn({...t,[h]:f,[d]:m});return{...g,data:{x:g.x-n,y:g.y-r}}}}},v_=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:a}=t,{offset:s=0,mainAxis:c=!0,crossAxis:u=!0}=Yt(e,t),p={x:n,y:r},d=Nr(i),h=bc(d);let f=p[h],m=p[d];const g=Yt(s,t),x=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(c){const y=h==="y"?"height":"width",_=o.reference[h]-o.floating[y]+x.mainAxis,w=o.reference[h]+o.reference[y]-x.mainAxis;f<_?f=_:f>w&&(f=w)}if(u){var v,b;const y=h==="y"?"width":"height",_=["top","left"].includes(Qt(i)),w=o.reference[d]-o.floating[y]+(_&&((v=a.offset)==null?void 0:v[d])||0)+(_?0:x.crossAxis),E=o.reference[d]+o.reference[y]+(_?0:((b=a.offset)==null?void 0:b[d])||0)-(_?x.crossAxis:0);m<w?m=w:m>E&&(m=E)}return{[h]:f,[d]:m}}}},y_=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:r,platform:i,elements:o}=t,{apply:a=()=>{},...s}=Yt(e,t),c=await si(t,s),u=Qt(n),p=Sr(n),d=Nr(n)==="y",{width:h,height:f}=r.floating;let m,g;u==="top"||u==="bottom"?(m=u,g=p===(await(i.isRTL==null?void 0:i.isRTL(o.floating))?"start":"end")?"left":"right"):(g=u,m=p==="end"?"top":"bottom");const x=f-c[m],v=h-c[g],b=!t.middlewareData.shift;let y=x,_=v;if(d){const E=h-c.left-c.right;_=p||b?dn(v,E):E}else{const E=f-c.top-c.bottom;y=p||b?dn(x,E):E}if(b&&!p){const E=Xe(c.left,0),k=Xe(c.right,0),T=Xe(c.top,0),R=Xe(c.bottom,0);d?_=h-2*(E!==0||k!==0?E+k:Xe(c.left,c.right)):y=f-2*(T!==0||R!==0?T+R:Xe(c.top,c.bottom))}await a({...t,availableWidth:_,availableHeight:y});const w=await i.getDimensions(o.floating);return h!==w.width||f!==w.height?{reset:{rects:!0}}:{}}}};function fn(e){return Lf(e)?(e.nodeName||"").toLowerCase():"#document"}function et(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Zt(e){var t;return(t=(Lf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Lf(e){return e instanceof Node||e instanceof et(e).Node}function Kt(e){return e instanceof Element||e instanceof et(e).Element}function Dt(e){return e instanceof HTMLElement||e instanceof et(e).HTMLElement}function Lu(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof et(e).ShadowRoot}function Si(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=dt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function b_(e){return["table","td","th"].includes(fn(e))}function wc(e){const t=Ec(),n=dt(e);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function x_(e){let t=gr(e);for(;Dt(t)&&!ha(t);){if(wc(t))return t;t=gr(t)}return null}function Ec(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ha(e){return["html","body","#document"].includes(fn(e))}function dt(e){return et(e).getComputedStyle(e)}function ma(e){return Kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function gr(e){if(fn(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Lu(e)&&e.host||Zt(e);return Lu(t)?t.host:t}function Mf(e){const t=gr(e);return ha(t)?e.ownerDocument?e.ownerDocument.body:e.body:Dt(t)&&Si(t)?t:Mf(t)}function ci(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Mf(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=et(i);return o?t.concat(a,a.visualViewport||[],Si(i)?i:[],a.frameElement&&n?ci(a.frameElement):[]):t.concat(i,ci(i,[],n))}function Ff(e){const t=dt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Dt(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,s=Do(n)!==o||Do(r)!==a;return s&&(n=o,r=a),{width:n,height:r,$:s}}function kc(e){return Kt(e)?e:e.contextElement}function sr(e){const t=kc(e);if(!Dt(t))return pn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Ff(t);let a=(o?Do(n.width):n.width)/r,s=(o?Do(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!s||!Number.isFinite(s))&&(s=1),{x:a,y:s}}const __=pn(0);function Uf(e){const t=et(e);return!Ec()||!t.visualViewport?__:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function w_(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==et(e)?!1:t}function Cn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=kc(e);let a=pn(1);t&&(r?Kt(r)&&(a=sr(r)):a=sr(e));const s=w_(o,n,r)?Uf(o):pn(0);let c=(i.left+s.x)/a.x,u=(i.top+s.y)/a.y,p=i.width/a.x,d=i.height/a.y;if(o){const h=et(o),f=r&&Kt(r)?et(r):r;let m=h.frameElement;for(;m&&r&&f!==h;){const g=sr(m),x=m.getBoundingClientRect(),v=dt(m),b=x.left+(m.clientLeft+parseFloat(v.paddingLeft))*g.x,y=x.top+(m.clientTop+parseFloat(v.paddingTop))*g.y;c*=g.x,u*=g.y,p*=g.x,d*=g.y,c+=b,u+=y,m=et(m).frameElement}}return Mo({width:p,height:d,x:c,y:u})}function E_(e){let{rect:t,offsetParent:n,strategy:r}=e;const i=Dt(n),o=Zt(n);if(n===o)return t;let a={scrollLeft:0,scrollTop:0},s=pn(1);const c=pn(0);if((i||!i&&r!=="fixed")&&((fn(n)!=="body"||Si(o))&&(a=ma(n)),Dt(n))){const u=Cn(n);s=sr(n),c.x=u.x+n.clientLeft,c.y=u.y+n.clientTop}return{width:t.width*s.x,height:t.height*s.y,x:t.x*s.x-a.scrollLeft*s.x+c.x,y:t.y*s.y-a.scrollTop*s.y+c.y}}function k_(e){return Array.from(e.getClientRects())}function qf(e){return Cn(Zt(e)).left+ma(e).scrollLeft}function T_(e){const t=Zt(e),n=ma(e),r=e.ownerDocument.body,i=Xe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Xe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+qf(e);const s=-n.scrollTop;return dt(r).direction==="rtl"&&(a+=Xe(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:s}}function S_(e,t){const n=et(e),r=Zt(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,s=0,c=0;if(i){o=i.width,a=i.height;const u=Ec();(!u||u&&t==="fixed")&&(s=i.offsetLeft,c=i.offsetTop)}return{width:o,height:a,x:s,y:c}}function N_(e,t){const n=Cn(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Dt(e)?sr(e):pn(1),a=e.clientWidth*o.x,s=e.clientHeight*o.y,c=i*o.x,u=r*o.y;return{width:a,height:s,x:c,y:u}}function Mu(e,t,n){let r;if(t==="viewport")r=S_(e,n);else if(t==="document")r=T_(Zt(e));else if(Kt(t))r=N_(t,n);else{const i=Uf(e);r={...t,x:t.x-i.x,y:t.y-i.y}}return Mo(r)}function Bf(e,t){const n=gr(e);return n===t||!Kt(n)||ha(n)?!1:dt(n).position==="fixed"||Bf(n,t)}function I_(e,t){const n=t.get(e);if(n)return n;let r=ci(e,[],!1).filter(s=>Kt(s)&&fn(s)!=="body"),i=null;const o=dt(e).position==="fixed";let a=o?gr(e):e;for(;Kt(a)&&!ha(a);){const s=dt(a),c=wc(a);!c&&s.position==="fixed"&&(i=null),(o?!c&&!i:!c&&s.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Si(a)&&!c&&Bf(e,a))?r=r.filter(p=>p!==a):i=s,a=gr(a)}return t.set(e,r),r}function C_(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?I_(t,this._c):[].concat(n),r],s=a[0],c=a.reduce((u,p)=>{const d=Mu(t,p,i);return u.top=Xe(d.top,u.top),u.right=dn(d.right,u.right),u.bottom=dn(d.bottom,u.bottom),u.left=Xe(d.left,u.left),u},Mu(t,s,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function O_(e){return Ff(e)}function A_(e,t,n){const r=Dt(t),i=Zt(t),o=n==="fixed",a=Cn(e,!0,o,t);let s={scrollLeft:0,scrollTop:0};const c=pn(0);if(r||!r&&!o)if((fn(t)!=="body"||Si(i))&&(s=ma(t)),r){const u=Cn(t,!0,o,t);c.x=u.x+t.clientLeft,c.y=u.y+t.clientTop}else i&&(c.x=qf(i));return{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Fu(e,t){return!Dt(e)||dt(e).position==="fixed"?null:t?t(e):e.offsetParent}function jf(e,t){const n=et(e);if(!Dt(e))return n;let r=Fu(e,t);for(;r&&b_(r)&&dt(r).position==="static";)r=Fu(r,t);return r&&(fn(r)==="html"||fn(r)==="body"&&dt(r).position==="static"&&!wc(r))?n:r||x_(e)||n}const $_=async function(e){let{reference:t,floating:n,strategy:r}=e;const i=this.getOffsetParent||jf,o=this.getDimensions;return{reference:A_(t,await i(n),r),floating:{x:0,y:0,...await o(n)}}};function R_(e){return dt(e).direction==="rtl"}const P_={convertOffsetParentRelativeRectToViewportRelativeRect:E_,getDocumentElement:Zt,getClippingRect:C_,getOffsetParent:jf,getElementRects:$_,getClientRects:k_,getDimensions:O_,getScale:sr,isElement:Kt,isRTL:R_};function D_(e,t){let n=null,r;const i=Zt(e);function o(){clearTimeout(r),n&&n.disconnect(),n=null}function a(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),o();const{left:u,top:p,width:d,height:h}=e.getBoundingClientRect();if(s||t(),!d||!h)return;const f=Fi(p),m=Fi(i.clientWidth-(u+d)),g=Fi(i.clientHeight-(p+h)),x=Fi(u),b={rootMargin:-f+"px "+-m+"px "+-g+"px "+-x+"px",threshold:Xe(0,dn(1,c))||1};let y=!0;function _(w){const E=w[0].intersectionRatio;if(E!==c){if(!y)return a();E?a(!1,E):r=setTimeout(()=>{a(!1,1e-7)},100)}y=!1}try{n=new IntersectionObserver(_,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(_,b)}n.observe(e)}return a(!0),o}function L_(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=kc(e),p=i||o?[...u?ci(u):[],...ci(t)]:[];p.forEach(v=>{i&&v.addEventListener("scroll",n,{passive:!0}),o&&v.addEventListener("resize",n)});const d=u&&s?D_(u,n):null;let h=-1,f=null;a&&(f=new ResizeObserver(v=>{let[b]=v;b&&b.target===u&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{f&&f.observe(t)})),n()}),u&&!c&&f.observe(u),f.observe(t));let m,g=c?Cn(e):null;c&&x();function x(){const v=Cn(e);g&&(v.x!==g.x||v.y!==g.y||v.width!==g.width||v.height!==g.height)&&n(),g=v,m=requestAnimationFrame(x)}return n(),()=>{p.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),d&&d(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const M_=(e,t,n)=>{const r=new Map,i={platform:P_,...n},o={...i.platform,_c:r};return d_(e,t,{...i,platform:o})},F_=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Ru({element:r.current,padding:i}).fn(n):{}:r?Ru({element:r,padding:i}).fn(n):{}}}};var ho=typeof document<"u"?hn:te;function Fo(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Fo(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!Fo(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function Vf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Uu(e,t){const n=Vf(e);return Math.round(t*n)/n}function qu(e){const t=se(e);return ho(()=>{t.current=e}),t}function U_(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:a}={},transform:s=!0,whileElementsMounted:c,open:u}=e,[p,d]=ee({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[h,f]=ee(r);Fo(h,r)||f(r);const[m,g]=ee(null),[x,v]=ee(null),b=ue(O=>{O!=E.current&&(E.current=O,g(O))},[g]),y=ue(O=>{O!==k.current&&(k.current=O,v(O))},[v]),_=o||m,w=a||x,E=se(null),k=se(null),T=se(p),R=qu(c),P=qu(i),F=ue(()=>{if(!E.current||!k.current)return;const O={placement:t,strategy:n,middleware:h};P.current&&(O.platform=P.current),M_(E.current,k.current,O).then(L=>{const W={...L,isPositioned:!0};D.current&&!Fo(T.current,W)&&(T.current=W,zo(()=>{d(W)}))})},[h,t,n,P]);ho(()=>{u===!1&&T.current.isPositioned&&(T.current.isPositioned=!1,d(O=>({...O,isPositioned:!1})))},[u]);const D=se(!1);ho(()=>(D.current=!0,()=>{D.current=!1}),[]),ho(()=>{if(_&&(E.current=_),w&&(k.current=w),_&&w){if(R.current)return R.current(_,w,F);F()}},[_,w,F,R]);const H=ce(()=>({reference:E,floating:k,setReference:b,setFloating:y}),[b,y]),I=ce(()=>({reference:_,floating:w}),[_,w]),M=ce(()=>{const O={position:n,left:0,top:0};if(!I.floating)return O;const L=Uu(I.floating,p.x),W=Uu(I.floating,p.y);return s?{...O,transform:"translate("+L+"px, "+W+"px)",...Vf(I.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:L,top:W}},[n,s,I.floating,p.x,p.y]);return ce(()=>({...p,update:F,refs:H,elements:I,floatingStyles:M}),[p,F,H,I,M])}const zf="Popper",[Hf,Wf]=yc(zf),[q_,Gf]=Hf(zf),B_=e=>{const{__scopePopper:t,children:n}=e,[r,i]=ee(null);return C(q_,{scope:t,anchor:r,onAnchorChange:i},n)},j_="PopperAnchor",V_=me((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=Gf(j_,n),a=se(null),s=nt(t,a);return te(()=>{o.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:C(ft.div,Te({},i,{ref:s}))}),Yf="PopperContent",[z_,fC]=Hf(Yf),H_=me((e,t)=>{var n,r,i,o,a,s,c,u;const{__scopePopper:p,side:d="bottom",sideOffset:h=0,align:f="center",alignOffset:m=0,arrowPadding:g=0,avoidCollisions:x=!0,collisionBoundary:v=[],collisionPadding:b=0,sticky:y="partial",hideWhenDetached:_=!1,updatePositionStrategy:w="optimized",onPlaced:E,...k}=e,T=Gf(Yf,p),[R,P]=ee(null),F=nt(t,Ft=>P(Ft)),[D,H]=ee(null),I=Ux(D),M=(n=I==null?void 0:I.width)!==null&&n!==void 0?n:0,O=(r=I==null?void 0:I.height)!==null&&r!==void 0?r:0,L=d+(f!=="center"?"-"+f:""),W=typeof b=="number"?b:{top:0,right:0,bottom:0,left:0,...b},re=Array.isArray(v)?v:[v],G=re.length>0,oe={padding:W,boundary:re.filter(W_),altBoundary:G},{refs:Ue,floatingStyles:mt,placement:qe,isPositioned:ve,middlewareData:de}=U_({strategy:"fixed",placement:L,whileElementsMounted:(...Ft)=>L_(...Ft,{animationFrame:w==="always"}),elements:{reference:T.anchor},middleware:[m_({mainAxis:h+O,alignmentAxis:m}),x&&g_({mainAxis:!0,crossAxis:!1,limiter:y==="partial"?v_():void 0,...oe}),x&&p_({...oe}),y_({...oe,apply:({elements:Ft,rects:Vn,availableWidth:$r,availableHeight:Yh})=>{const{width:Qh,height:Kh}=Vn.reference,Ri=Ft.floating.style;Ri.setProperty("--radix-popper-available-width",`${$r}px`),Ri.setProperty("--radix-popper-available-height",`${Yh}px`),Ri.setProperty("--radix-popper-anchor-width",`${Qh}px`),Ri.setProperty("--radix-popper-anchor-height",`${Kh}px`)}}),D&&F_({element:D,padding:g}),G_({arrowWidth:M,arrowHeight:O}),_&&f_({strategy:"referenceHidden",...oe})]}),[Z,ye]=Qf(qe),Ae=Gt(E);un(()=>{ve&&(Ae==null||Ae())},[ve,Ae]);const _e=(i=de.arrow)===null||i===void 0?void 0:i.x,pe=(o=de.arrow)===null||o===void 0?void 0:o.y,fe=((a=de.arrow)===null||a===void 0?void 0:a.centerOffset)!==0,[Ye,Qe]=ee();return un(()=>{R&&Qe(window.getComputedStyle(R).zIndex)},[R]),C("div",{ref:Ue.setFloating,"data-radix-popper-content-wrapper":"",style:{...mt,transform:ve?mt.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Ye,"--radix-popper-transform-origin":[(s=de.transformOrigin)===null||s===void 0?void 0:s.x,(c=de.transformOrigin)===null||c===void 0?void 0:c.y].join(" ")},dir:e.dir},C(z_,{scope:p,placedSide:Z,onArrowChange:H,arrowX:_e,arrowY:pe,shouldHideArrow:fe},C(ft.div,Te({"data-side":Z,"data-align":ye},k,{ref:F,style:{...k.style,animation:ve?void 0:"none",opacity:(u=de.hide)!==null&&u!==void 0&&u.referenceHidden?0:void 0}}))))});function W_(e){return e!==null}const G_=e=>({name:"transformOrigin",options:e,fn(t){var n,r,i,o,a;const{placement:s,rects:c,middlewareData:u}=t,d=((n=u.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,h=d?0:e.arrowWidth,f=d?0:e.arrowHeight,[m,g]=Qf(s),x={start:"0%",center:"50%",end:"100%"}[g],v=((r=(i=u.arrow)===null||i===void 0?void 0:i.x)!==null&&r!==void 0?r:0)+h/2,b=((o=(a=u.arrow)===null||a===void 0?void 0:a.y)!==null&&o!==void 0?o:0)+f/2;let y="",_="";return m==="bottom"?(y=d?x:`${v}px`,_=`${-f}px`):m==="top"?(y=d?x:`${v}px`,_=`${c.floating.height+f}px`):m==="right"?(y=`${-f}px`,_=d?x:`${b}px`):m==="left"&&(y=`${c.floating.width+f}px`,_=d?x:`${b}px`),{data:{x:y,y:_}}}});function Qf(e){const[t,n="center"]=e.split("-");return[t,n]}const Y_=B_,Q_=V_,K_=H_,J_=me((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...i}=e;return r?Oe.createPortal(C(ft.div,Te({},i,{ref:t})),r):null}),X_=me((e,t)=>C(ft.span,Te({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}})));var Z_=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Hn=new WeakMap,Ui=new WeakMap,qi={},Ja=0,Kf=function(e){return e&&(e.host||Kf(e.parentNode))},ew=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Kf(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},tw=function(e,t,n,r){var i=ew(t,Array.isArray(e)?e:[e]);qi[n]||(qi[n]=new WeakMap);var o=qi[n],a=[],s=new Set,c=new Set(i),u=function(d){!d||s.has(d)||(s.add(d),u(d.parentNode))};i.forEach(u);var p=function(d){!d||c.has(d)||Array.prototype.forEach.call(d.children,function(h){if(s.has(h))p(h);else{var f=h.getAttribute(r),m=f!==null&&f!=="false",g=(Hn.get(h)||0)+1,x=(o.get(h)||0)+1;Hn.set(h,g),o.set(h,x),a.push(h),g===1&&m&&Ui.set(h,!0),x===1&&h.setAttribute(n,"true"),m||h.setAttribute(r,"true")}})};return p(t),s.clear(),Ja++,function(){a.forEach(function(d){var h=Hn.get(d)-1,f=o.get(d)-1;Hn.set(d,h),o.set(d,f),h||(Ui.has(d)||d.removeAttribute(r),Ui.delete(d)),f||d.removeAttribute(n)}),Ja--,Ja||(Hn=new WeakMap,Hn=new WeakMap,Ui=new WeakMap,qi={})}},nw=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=t||Z_(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),tw(r,i,n,"aria-hidden")):function(){return null}},Tt=function(){return Tt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Tt.apply(this,arguments)};function Jf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function rw(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var mo="right-scroll-bar-position",go="width-before-scroll-bar",iw="with-scroll-bars-hidden",ow="--removed-body-scroll-bar-size";function aw(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function sw(e,t){var n=ee(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}function cw(e,t){return sw(t||null,function(n){return e.forEach(function(r){return aw(r,n)})})}function lw(e){return e}function uw(e,t){t===void 0&&(t=lw);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var a=t(o,r);return n.push(a),function(){n=n.filter(function(s){return s!==a})}},assignSyncMedium:function(o){for(r=!0;n.length;){var a=n;n=[],a.forEach(o)}n={push:function(s){return o(s)},filter:function(){return n}}},assignMedium:function(o){r=!0;var a=[];if(n.length){var s=n;n=[],s.forEach(o),a=n}var c=function(){var p=a;a=[],p.forEach(o)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(p){a.push(p),u()},filter:function(p){return a=a.filter(p),n}}}};return i}function dw(e){e===void 0&&(e={});var t=uw(null);return t.options=Tt({async:!0,ssr:!1},e),t}var Xf=function(e){var t=e.sideCar,n=Jf(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return C(r,Tt({},n))};Xf.isSideCarExport=!0;function pw(e,t){return e.useMedium(t),Xf}var Zf=dw(),Xa=function(){},ga=me(function(e,t){var n=se(null),r=ee({onScrollCapture:Xa,onWheelCapture:Xa,onTouchMoveCapture:Xa}),i=r[0],o=r[1],a=e.forwardProps,s=e.children,c=e.className,u=e.removeScrollBar,p=e.enabled,d=e.shards,h=e.sideCar,f=e.noIsolation,m=e.inert,g=e.allowPinchZoom,x=e.as,v=x===void 0?"div":x,b=Jf(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),y=h,_=cw([n,t]),w=Tt(Tt({},b),i);return C(j,null,p&&C(y,{sideCar:Zf,removeScrollBar:u,shards:d,noIsolation:f,inert:m,setCallbacks:o,allowPinchZoom:!!g,lockRef:n}),a?gi(It.only(s),Tt(Tt({},w),{ref:_})):C(v,Tt({},w,{className:c,ref:_}),s))});ga.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};ga.classNames={fullWidth:go,zeroRight:mo};var Bu,fw=function(){if(Bu)return Bu;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function hw(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=fw();return t&&e.setAttribute("nonce",t),e}function mw(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function gw(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var vw=function(){var e=0,t=null;return{add:function(n){e==0&&(t=hw())&&(mw(t,n),gw(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},yw=function(){var e=vw();return function(t,n){te(function(){return e.add(t),function(){e.remove()}},[t&&n])}},eh=function(){var e=yw(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},bw={left:0,top:0,right:0,gap:0},Za=function(e){return parseInt(e||"",10)||0},xw=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[Za(n),Za(r),Za(i)]},_w=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return bw;var t=xw(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ww=eh(),Ew=function(e,t,n,r){var i=e.left,o=e.top,a=e.right,s=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(iw,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(s,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(s,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(mo,` {
    right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(go,` {
    margin-right: `).concat(s,"px ").concat(r,`;
  }
  
  .`).concat(mo," .").concat(mo,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(go," .").concat(go,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(ow,": ").concat(s,`px;
  }
`)},kw=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r,o=ce(function(){return _w(i)},[i]);return C(ww,{styles:Ew(o,!t,i,n?"":"!important")})},Bs=!1;if(typeof window<"u")try{var Bi=Object.defineProperty({},"passive",{get:function(){return Bs=!0,!0}});window.addEventListener("test",Bi,Bi),window.removeEventListener("test",Bi,Bi)}catch{Bs=!1}var Wn=Bs?{passive:!1}:!1,Tw=function(e){return e.tagName==="TEXTAREA"},th=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Tw(e)&&n[t]==="visible")},Sw=function(e){return th(e,"overflowY")},Nw=function(e){return th(e,"overflowX")},ju=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=nh(e,n);if(r){var i=rh(e,n),o=i[1],a=i[2];if(o>a)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},Iw=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Cw=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},nh=function(e,t){return e==="v"?Sw(t):Nw(t)},rh=function(e,t){return e==="v"?Iw(t):Cw(t)},Ow=function(e,t){return e==="h"&&t==="rtl"?-1:1},Aw=function(e,t,n,r,i){var o=Ow(e,window.getComputedStyle(t).direction),a=o*r,s=n.target,c=t.contains(s),u=!1,p=a>0,d=0,h=0;do{var f=rh(e,s),m=f[0],g=f[1],x=f[2],v=g-x-o*m;(m||v)&&nh(e,s)&&(d+=v,h+=m),s=s.parentNode}while(!c&&s!==document.body||c&&(t.contains(s)||t===s));return(p&&(i&&d===0||!i&&a>d)||!p&&(i&&h===0||!i&&-a>h))&&(u=!0),u},ji=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Vu=function(e){return[e.deltaX,e.deltaY]},zu=function(e){return e&&"current"in e?e.current:e},$w=function(e,t){return e[0]===t[0]&&e[1]===t[1]},Rw=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Pw=0,Gn=[];function Dw(e){var t=se([]),n=se([0,0]),r=se(),i=ee(Pw++)[0],o=ee(function(){return eh()})[0],a=se(e);te(function(){a.current=e},[e]),te(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var g=rw([e.lockRef.current],(e.shards||[]).map(zu),!0).filter(Boolean);return g.forEach(function(x){return x.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),g.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var s=ue(function(g,x){if("touches"in g&&g.touches.length===2)return!a.current.allowPinchZoom;var v=ji(g),b=n.current,y="deltaX"in g?g.deltaX:b[0]-v[0],_="deltaY"in g?g.deltaY:b[1]-v[1],w,E=g.target,k=Math.abs(y)>Math.abs(_)?"h":"v";if("touches"in g&&k==="h"&&E.type==="range")return!1;var T=ju(k,E);if(!T)return!0;if(T?w=k:(w=k==="v"?"h":"v",T=ju(k,E)),!T)return!1;if(!r.current&&"changedTouches"in g&&(y||_)&&(r.current=w),!w)return!0;var R=r.current||w;return Aw(R,x,g,R==="h"?y:_,!0)},[]),c=ue(function(g){var x=g;if(!(!Gn.length||Gn[Gn.length-1]!==o)){var v="deltaY"in x?Vu(x):ji(x),b=t.current.filter(function(w){return w.name===x.type&&w.target===x.target&&$w(w.delta,v)})[0];if(b&&b.should){x.cancelable&&x.preventDefault();return}if(!b){var y=(a.current.shards||[]).map(zu).filter(Boolean).filter(function(w){return w.contains(x.target)}),_=y.length>0?s(x,y[0]):!a.current.noIsolation;_&&x.cancelable&&x.preventDefault()}}},[]),u=ue(function(g,x,v,b){var y={name:g,delta:x,target:v,should:b};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(_){return _!==y})},1)},[]),p=ue(function(g){n.current=ji(g),r.current=void 0},[]),d=ue(function(g){u(g.type,Vu(g),g.target,s(g,e.lockRef.current))},[]),h=ue(function(g){u(g.type,ji(g),g.target,s(g,e.lockRef.current))},[]);te(function(){return Gn.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:h}),document.addEventListener("wheel",c,Wn),document.addEventListener("touchmove",c,Wn),document.addEventListener("touchstart",p,Wn),function(){Gn=Gn.filter(function(g){return g!==o}),document.removeEventListener("wheel",c,Wn),document.removeEventListener("touchmove",c,Wn),document.removeEventListener("touchstart",p,Wn)}},[]);var f=e.removeScrollBar,m=e.inert;return C(j,null,m?C(o,{styles:Rw(i)}):null,f?C(kw,{gapMode:"margin"}):null)}const Lw=pw(Zf,Dw);var ih=me(function(e,t){return C(ga,Tt({},e,{ref:t,sideCar:Lw}))});ih.classNames=ga.classNames;const Mw=ih,Fw=[" ","Enter","ArrowUp","ArrowDown"],Uw=[" ","Enter"],va="Select",[ya,Tc,qw]=Rx(va),[Ir,hC]=yc(va,[qw,Wf]),Sc=Wf(),[Bw,Cr]=Ir(va),[jw,Vw]=Ir(va),zw=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:i,onOpenChange:o,value:a,defaultValue:s,onValueChange:c,dir:u,name:p,autoComplete:d,disabled:h,required:f}=e,m=Sc(t),[g,x]=ee(null),[v,b]=ee(null),[y,_]=ee(!1),w=Fx(u),[E=!1,k]=Eu({prop:r,defaultProp:i,onChange:o}),[T,R]=Eu({prop:a,defaultProp:s,onChange:c}),P=se(null),F=g?!!g.closest("form"):!0,[D,H]=ee(new Set),I=Array.from(D).map(M=>M.props.value).join(";");return C(Y_,m,C(Bw,{required:f,scope:t,trigger:g,onTriggerChange:x,valueNode:v,onValueNodeChange:b,valueNodeHasChildren:y,onValueNodeHasChildrenChange:_,contentId:$f(),value:T,onValueChange:R,open:E,onOpenChange:k,dir:w,triggerPointerDownPosRef:P,disabled:h},C(ya.Provider,{scope:t},C(jw,{scope:e.__scopeSelect,onNativeOptionAdd:ue(M=>{H(O=>new Set(O).add(M))},[]),onNativeOptionRemove:ue(M=>{H(O=>{const L=new Set(O);return L.delete(M),L})},[])},n)),F?C(ah,{key:I,"aria-hidden":!0,required:f,tabIndex:-1,name:p,autoComplete:d,value:T,onChange:M=>R(M.target.value),disabled:h},T===void 0?C("option",{value:""}):null,Array.from(D)):null))},Hw="SelectTrigger",Ww=me((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...i}=e,o=Sc(n),a=Cr(Hw,n),s=a.disabled||r,c=nt(t,a.onTriggerChange),u=Tc(n),[p,d,h]=sh(m=>{const g=u().filter(b=>!b.disabled),x=g.find(b=>b.value===a.value),v=ch(g,m,x);v!==void 0&&a.onValueChange(v.value)}),f=()=>{s||(a.onOpenChange(!0),h())};return C(Q_,Te({asChild:!0},o),C(ft.button,Te({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:s,"data-disabled":s?"":void 0,"data-placeholder":aE(a.value)?"":void 0},i,{ref:c,onClick:Ve(i.onClick,m=>{m.currentTarget.focus()}),onPointerDown:Ve(i.onPointerDown,m=>{const g=m.target;g.hasPointerCapture(m.pointerId)&&g.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&(f(),a.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)},m.preventDefault())}),onKeyDown:Ve(i.onKeyDown,m=>{const g=p.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&d(m.key),!(g&&m.key===" ")&&Fw.includes(m.key)&&(f(),m.preventDefault())})})))}),Gw=me((e,t)=>{const{__scopeSelect:n,children:r,...i}=e;return C(ft.span,Te({"aria-hidden":!0},i,{ref:t}),r||"▼")}),Yw=e=>C(J_,Te({asChild:!0},e)),vr="SelectContent",Qw=me((e,t)=>{const n=Cr(vr,e.__scopeSelect),[r,i]=ee();if(un(()=>{i(new DocumentFragment)},[]),!n.open){const o=r;return o?Vo(C(oh,{scope:e.__scopeSelect},C(ya.Slot,{scope:e.__scopeSelect},C("div",null,e.children))),o):null}return C(Kw,Te({},e,{ref:t}))}),Ut=10,[oh,ba]=Ir(vr),Kw=me((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:i,onEscapeKeyDown:o,onPointerDownOutside:a,side:s,sideOffset:c,align:u,alignOffset:p,arrowPadding:d,collisionBoundary:h,collisionPadding:f,sticky:m,hideWhenDetached:g,avoidCollisions:x,...v}=e,b=Cr(vr,n),[y,_]=ee(null),[w,E]=ee(null),k=nt(t,Z=>_(Z)),[T,R]=ee(null),[P,F]=ee(null),D=Tc(n),[H,I]=ee(!1),M=se(!1);te(()=>{if(y)return nw(y)},[y]),Qx();const O=ue(Z=>{const[ye,...Ae]=D().map(fe=>fe.ref.current),[_e]=Ae.slice(-1),pe=document.activeElement;for(const fe of Z)if(fe===pe||(fe==null||fe.scrollIntoView({block:"nearest"}),fe===ye&&w&&(w.scrollTop=0),fe===_e&&w&&(w.scrollTop=w.scrollHeight),fe==null||fe.focus(),document.activeElement!==pe))return},[D,w]),L=ue(()=>O([T,y]),[O,T,y]);te(()=>{H&&L()},[H,L]);const{onOpenChange:W,triggerPointerDownPosRef:re}=b;te(()=>{if(y){let Z={x:0,y:0};const ye=_e=>{var pe,fe,Ye,Qe;Z={x:Math.abs(Math.round(_e.pageX)-((pe=(fe=re.current)===null||fe===void 0?void 0:fe.x)!==null&&pe!==void 0?pe:0)),y:Math.abs(Math.round(_e.pageY)-((Ye=(Qe=re.current)===null||Qe===void 0?void 0:Qe.y)!==null&&Ye!==void 0?Ye:0))}},Ae=_e=>{Z.x<=10&&Z.y<=10?_e.preventDefault():y.contains(_e.target)||W(!1),document.removeEventListener("pointermove",ye),re.current=null};return re.current!==null&&(document.addEventListener("pointermove",ye),document.addEventListener("pointerup",Ae,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",ye),document.removeEventListener("pointerup",Ae,{capture:!0})}}},[y,W,re]),te(()=>{const Z=()=>W(!1);return window.addEventListener("blur",Z),window.addEventListener("resize",Z),()=>{window.removeEventListener("blur",Z),window.removeEventListener("resize",Z)}},[W]);const[G,oe]=sh(Z=>{const ye=D().filter(pe=>!pe.disabled),Ae=ye.find(pe=>pe.ref.current===document.activeElement),_e=ch(ye,Z,Ae);_e&&setTimeout(()=>_e.ref.current.focus())}),Ue=ue((Z,ye,Ae)=>{const _e=!M.current&&!Ae;(b.value!==void 0&&b.value===ye||_e)&&(R(Z),_e&&(M.current=!0))},[b.value]),mt=ue(()=>y==null?void 0:y.focus(),[y]),qe=ue((Z,ye,Ae)=>{const _e=!M.current&&!Ae;(b.value!==void 0&&b.value===ye||_e)&&F(Z)},[b.value]),ve=r==="popper"?Hu:Jw,de=ve===Hu?{side:s,sideOffset:c,align:u,alignOffset:p,arrowPadding:d,collisionBoundary:h,collisionPadding:f,sticky:m,hideWhenDetached:g,avoidCollisions:x}:{};return C(oh,{scope:n,content:y,viewport:w,onViewportChange:E,itemRefCallback:Ue,selectedItem:T,onItemLeave:mt,itemTextRefCallback:qe,focusSelectedItem:L,selectedItemText:P,position:r,isPositioned:H,searchRef:G},C(Mw,{as:oi,allowPinchZoom:!0},C(Kx,{asChild:!0,trapped:b.open,onMountAutoFocus:Z=>{Z.preventDefault()},onUnmountAutoFocus:Ve(i,Z=>{var ye;(ye=b.trigger)===null||ye===void 0||ye.focus({preventScroll:!0}),Z.preventDefault()})},C(Wx,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:Z=>Z.preventDefault(),onDismiss:()=>b.onOpenChange(!1)},C(ve,Te({role:"listbox",id:b.contentId,"data-state":b.open?"open":"closed",dir:b.dir,onContextMenu:Z=>Z.preventDefault()},v,de,{onPlaced:()=>I(!0),ref:k,style:{display:"flex",flexDirection:"column",outline:"none",...v.style},onKeyDown:Ve(v.onKeyDown,Z=>{const ye=Z.ctrlKey||Z.altKey||Z.metaKey;if(Z.key==="Tab"&&Z.preventDefault(),!ye&&Z.key.length===1&&oe(Z.key),["ArrowUp","ArrowDown","Home","End"].includes(Z.key)){let _e=D().filter(pe=>!pe.disabled).map(pe=>pe.ref.current);if(["ArrowUp","End"].includes(Z.key)&&(_e=_e.slice().reverse()),["ArrowUp","ArrowDown"].includes(Z.key)){const pe=Z.target,fe=_e.indexOf(pe);_e=_e.slice(fe+1)}setTimeout(()=>O(_e)),Z.preventDefault()}})}))))))}),Jw=me((e,t)=>{const{__scopeSelect:n,onPlaced:r,...i}=e,o=Cr(vr,n),a=ba(vr,n),[s,c]=ee(null),[u,p]=ee(null),d=nt(t,k=>p(k)),h=Tc(n),f=se(!1),m=se(!0),{viewport:g,selectedItem:x,selectedItemText:v,focusSelectedItem:b}=a,y=ue(()=>{if(o.trigger&&o.valueNode&&s&&u&&g&&x&&v){const k=o.trigger.getBoundingClientRect(),T=u.getBoundingClientRect(),R=o.valueNode.getBoundingClientRect(),P=v.getBoundingClientRect();if(o.dir!=="rtl"){const pe=P.left-T.left,fe=R.left-pe,Ye=k.left-fe,Qe=k.width+Ye,Ft=Math.max(Qe,T.width),Vn=window.innerWidth-Ut,$r=ku(fe,[Ut,Vn-Ft]);s.style.minWidth=Qe+"px",s.style.left=$r+"px"}else{const pe=T.right-P.right,fe=window.innerWidth-R.right-pe,Ye=window.innerWidth-k.right-fe,Qe=k.width+Ye,Ft=Math.max(Qe,T.width),Vn=window.innerWidth-Ut,$r=ku(fe,[Ut,Vn-Ft]);s.style.minWidth=Qe+"px",s.style.right=$r+"px"}const F=h(),D=window.innerHeight-Ut*2,H=g.scrollHeight,I=window.getComputedStyle(u),M=parseInt(I.borderTopWidth,10),O=parseInt(I.paddingTop,10),L=parseInt(I.borderBottomWidth,10),W=parseInt(I.paddingBottom,10),re=M+O+H+W+L,G=Math.min(x.offsetHeight*5,re),oe=window.getComputedStyle(g),Ue=parseInt(oe.paddingTop,10),mt=parseInt(oe.paddingBottom,10),qe=k.top+k.height/2-Ut,ve=D-qe,de=x.offsetHeight/2,Z=x.offsetTop+de,ye=M+O+Z,Ae=re-ye;if(ye<=qe){const pe=x===F[F.length-1].ref.current;s.style.bottom="0px";const fe=u.clientHeight-g.offsetTop-g.offsetHeight,Ye=Math.max(ve,de+(pe?mt:0)+fe+L),Qe=ye+Ye;s.style.height=Qe+"px"}else{const pe=x===F[0].ref.current;s.style.top="0px";const Ye=Math.max(qe,M+g.offsetTop+(pe?Ue:0)+de)+Ae;s.style.height=Ye+"px",g.scrollTop=ye-qe+g.offsetTop}s.style.margin=`${Ut}px 0`,s.style.minHeight=G+"px",s.style.maxHeight=D+"px",r==null||r(),requestAnimationFrame(()=>f.current=!0)}},[h,o.trigger,o.valueNode,s,u,g,x,v,o.dir,r]);un(()=>y(),[y]);const[_,w]=ee();un(()=>{u&&w(window.getComputedStyle(u).zIndex)},[u]);const E=ue(k=>{k&&m.current===!0&&(y(),b==null||b(),m.current=!1)},[y,b]);return C(Xw,{scope:n,contentWrapper:s,shouldExpandOnScrollRef:f,onScrollButtonChange:E},C("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:_}},C(ft.div,Te({},i,{ref:d,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}}))))}),Hu=me((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:i=Ut,...o}=e,a=Sc(n);return C(K_,Te({},a,o,{ref:t,align:r,collisionPadding:i,style:{boxSizing:"border-box",...o.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[Xw,Zw]=Ir(vr,{}),Wu="SelectViewport",eE=me((e,t)=>{const{__scopeSelect:n,...r}=e,i=ba(Wu,n),o=Zw(Wu,n),a=nt(t,i.onViewportChange),s=se(0);return C(j,null,C("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),C(ya.Slot,{scope:n},C(ft.div,Te({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:Ve(r.onScroll,c=>{const u=c.currentTarget,{contentWrapper:p,shouldExpandOnScrollRef:d}=o;if(d!=null&&d.current&&p){const h=Math.abs(s.current-u.scrollTop);if(h>0){const f=window.innerHeight-Ut*2,m=parseFloat(p.style.minHeight),g=parseFloat(p.style.height),x=Math.max(m,g);if(x<f){const v=x+h,b=Math.min(f,v),y=v-b;p.style.height=b+"px",p.style.bottom==="0px"&&(u.scrollTop=y>0?y:0,p.style.justifyContent="flex-end")}}}s.current=u.scrollTop})}))))}),tE="SelectGroup";Ir(tE);const js="SelectItem",[nE,rE]=Ir(js),iE=me((e,t)=>{const{__scopeSelect:n,value:r,disabled:i=!1,textValue:o,...a}=e,s=Cr(js,n),c=ba(js,n),u=s.value===r,[p,d]=ee(o??""),[h,f]=ee(!1),m=nt(t,v=>{var b;return(b=c.itemRefCallback)===null||b===void 0?void 0:b.call(c,v,r,i)}),g=$f(),x=()=>{i||(s.onValueChange(r),s.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return C(nE,{scope:n,value:r,disabled:i,textId:g,isSelected:u,onItemTextChange:ue(v=>{d(b=>{var y;return b||((y=v==null?void 0:v.textContent)!==null&&y!==void 0?y:"").trim()})},[])},C(ya.ItemSlot,{scope:n,value:r,disabled:i,textValue:p},C(ft.div,Te({role:"option","aria-labelledby":g,"data-highlighted":h?"":void 0,"aria-selected":u&&h,"data-state":u?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1},a,{ref:m,onFocus:Ve(a.onFocus,()=>f(!0)),onBlur:Ve(a.onBlur,()=>f(!1)),onPointerUp:Ve(a.onPointerUp,x),onPointerMove:Ve(a.onPointerMove,v=>{if(i){var b;(b=c.onItemLeave)===null||b===void 0||b.call(c)}else v.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Ve(a.onPointerLeave,v=>{if(v.currentTarget===document.activeElement){var b;(b=c.onItemLeave)===null||b===void 0||b.call(c)}}),onKeyDown:Ve(a.onKeyDown,v=>{var b;((b=c.searchRef)===null||b===void 0?void 0:b.current)!==""&&v.key===" "||(Uw.includes(v.key)&&x(),v.key===" "&&v.preventDefault())})}))))}),Vi="SelectItemText",oE=me((e,t)=>{const{__scopeSelect:n,className:r,style:i,...o}=e,a=Cr(Vi,n),s=ba(Vi,n),c=rE(Vi,n),u=Vw(Vi,n),[p,d]=ee(null),h=nt(t,v=>d(v),c.onItemTextChange,v=>{var b;return(b=s.itemTextRefCallback)===null||b===void 0?void 0:b.call(s,v,c.value,c.disabled)}),f=p==null?void 0:p.textContent,m=ce(()=>C("option",{key:c.value,value:c.value,disabled:c.disabled},f),[c.disabled,c.value,f]),{onNativeOptionAdd:g,onNativeOptionRemove:x}=u;return un(()=>(g(m),()=>x(m)),[g,x,m]),C(j,null,C(ft.span,Te({id:c.textId},o,{ref:h})),c.isSelected&&a.valueNode&&!a.valueNodeHasChildren?Vo(o.children,a.valueNode):null)});function aE(e){return e===""||e===void 0}const ah=me((e,t)=>{const{value:n,...r}=e,i=se(null),o=nt(t,i),a=qx(n);return te(()=>{const s=i.current,c=window.HTMLSelectElement.prototype,p=Object.getOwnPropertyDescriptor(c,"value").set;if(a!==n&&p){const d=new Event("change",{bubbles:!0});p.call(s,n),s.dispatchEvent(d)}},[a,n]),C(X_,{asChild:!0},C("select",Te({},r,{ref:o,defaultValue:n})))});ah.displayName="BubbleSelect";function sh(e){const t=Gt(e),n=se(""),r=se(0),i=ue(a=>{const s=n.current+a;t(s),function c(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>c(""),1e3))}(s)},[t]),o=ue(()=>{n.current="",window.clearTimeout(r.current)},[]);return te(()=>()=>window.clearTimeout(r.current),[]),[n,i,o]}function ch(e,t,n){const i=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,o=n?e.indexOf(n):-1;let a=sE(e,Math.max(o,0));i.length===1&&(a=a.filter(u=>u!==n));const c=a.find(u=>u.textValue.toLowerCase().startsWith(i.toLowerCase()));return c!==n?c:void 0}function sE(e,t){return e.map((n,r)=>e[(t+r)%e.length])}const lh=zw,uh=Ww,cE=Gw,lE=Yw,dh=Qw,uE=eE,ph=iE,dE=oE,pE=$`.c-select_c-select-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 6px 16px;
  font-size: 14px;
  font-weight: 500;
  gap: 4px;
  border: 2px solid var(--color-border-container-strong);
  background: none;
  color: var(--color-text-action);
}
.c-select_c-select-trigger > .select-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}`,fE="/assets/keyboard_arrow-39d281a6.svg",hE=Oe.forwardRef(({children:e,...t},n)=>(A(pE),l(uh,{ref:n,className:"c-select_c-select-trigger",...t,children:[e,l(cE,{asChild:!0,className:"select-icon",children:l("img",{src:fE})})]})));hE.displayName=uh.displayName;const mE=$`.c-select_c-select-content {
  border-radius: 6px;
  background: var(--color-background-surface);
}
.c-select_c-select-content > .select-viewport {
  padding: 8px;
  border: 2px solid var(--color-border-container-strong);
  border-radius: 4px;
}`,gE=Oe.forwardRef(({children:e,position:t="popper",...n},r)=>(A(mE),l(lE,{children:l(dh,{ref:r,...n,className:"c-select_c-select-content",position:t,children:l(uE,{className:"select-viewport",children:e})})})));gE.displayName=dh.displayName;const vE=$`.c-select_c-select-content_c-select-item {
  font-size: 13px;
  line-height: 1;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 6px 8px;
  position: relative;
  user-select: none;
}
.c-select_c-select-content_c-select-item[data-disabled] {
  color: var(--color-text-subtle);
  pointer-events: none;
}
.c-select_c-select-content_c-select-item[data-highlighted] {
  outline: none;
  background-color: var(--color-background-action-hover);
}`,yE=Oe.forwardRef(({children:e,...t},n)=>(A(vE),l(ph,{ref:n,className:"c-select_c-select-content_c-select-item",...t,children:l(dE,{children:e})})));yE.displayName=ph.displayName;const bE=Oe.forwardRef(({children:e,...t},n)=>l(lh,{...t,children:e}));bE.displayName=lh.displayName;$`.c-body-sm > .c-link,
.c-body-md > .c-link,
.c-body-lg > .c-link,
.c-caption > .c-link {
  font-weight: var(--weight-medium);
}

.c-link {
  display: inline;
}
.c-link.underline-never {
  text-decoration: none;
  cursor: pointer;
}
.c-link.underline-always {
  text-decoration: underline;
  cursor: pointer;
}
.c-link.underline-hover {
  text-decoration: none;
  cursor: pointer;
}
.c-link.underline-hover:hover {
  text-decoration: underline;
}`;const xE=$`.c-overline {
  font-family: Inter;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: var(--weight-bold);
}
.c-overline.size-md {
  font-size: var(--overline-md);
  line-height: 18px;
}
.c-overline.size-sm {
  font-size: var(--overline-sm);
  line-height: 16px;
}`,Gu=({as:e="span",size:t="md",textAlign:n,children:r,...i})=>{A(pa),A(Ti),A(xE);const{marginStyles:o}=fa(i);return l(j,{children:C(e,{className:qn("c-overline",`size-${t}`),style:{textAlign:n,...o}},r)})};ub({persistLocal:vb});const _E=()=>(A(fx),A(Ti),A(Nf),l(j,{children:[l(lx,{children:l(Pn,{})}),l(px,{}),l(mx,{})]})),en=new eg({component:_E}),wE=$`.c-nav {
  z-index: 100;
  box-sizing: border-box;
  background: var(--truffle-bg-color);
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.c-nav > .nav-container {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-height);
  width: 100%;
  padding: 16px 1em;
  box-sizing: border-box;
}
.c-nav > .nav-container > .logo {
  display: flex;
  align-items: center;
}
.c-nav > .nav-container > .logo > .logo-img {
  height: calc(100% - 32px);
  width: auto;
}
.c-nav > .nav-container > .logo > .beta-tag {
  margin-left: 20px;
  width: 45px;
}
.c-nav > .nav-container > .nav-links {
  display: flex;
}
.c-nav > .nav-container > .nav-links > .nav-item {
  list-style-type: none;
}
.c-nav > .nav-container > .nav-links > .nav-item > .nav-link {
  color: white;
  text-decoration: none;
  margin-left: 1em;
}
.c-nav > .nav-container > .nav-links > .nav-item > .nav-link:hover {
  color: #ddd;
}`,EE="/assets/logo-61fde850.svg",kE="/assets/beta-tag-0884d03b.png",fh=({shouldHideLinks:e})=>{A(wE);const n=Wt().location.pathname.includes("/creator");return l("nav",{className:"c-nav",children:l("div",{className:"nav-container",children:[l("div",{className:"logo",children:[l("img",{className:"logo-img",src:EE,alt:"Truffle Logo"}),n&&l("img",{className:"beta-tag",src:kE,alt:"Beta"})]}),e?void 0:l("ul",{className:"nav-links",children:[Fn.get()?void 0:l("li",{className:"nav-item",children:l(he,{to:"/login",className:"nav-link",children:"Login"})}),l("li",{className:"nav-item",children:l(he,{to:"/creator",className:"nav-link",children:"Creators"})}),l("li",{className:"nav-item",children:l(he,{to:"/profile/global",className:"nav-link",children:"Profile"})})]})]})})},rt=new J({getParentRoute:()=>en,id:"nav-layout",component:function(){return l(j,{children:l("div",{className:"root-layout",children:l("div",{className:"container",children:[l(fh,{}),l(Pn,{})]})})})}}),TE=new J({getParentRoute:()=>rt,path:"/",component:()=>l(j,{})}),SE=$`.c-auth {
  display: flex;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  flex-direction: column;
}
.c-auth > .title {
  font-size: 24px;
  margin: 0;
  margin-bottom: 32px;
}
.c-auth > .oauth-buttons {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.c-auth > .sep {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 32px 0;
}
.c-auth > .sep > .line {
  flex-grow: 1;
  height: 1px;
  background: #363636;
}
.c-auth > .sep > .or {
  padding: 0 10px;
  font-size: 14px;
  color: white;
}
.c-auth > .alternative {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  font-weight: 500;
  margin-top: 16px;
}
.c-auth > .alternative > .link {
  color: #ffffff;
  font-weight: 700;
  text-decoration: underline;
  display: inline;
  cursor: pointer;
}
.c-auth > .privacy {
  color: #fff;
  margin-top: 16px;
  font-size: 12px;
}`;var NE=Object.defineProperty,IE=(e,t,n)=>t in e?NE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,St=(e,t,n)=>(IE(e,typeof t!="symbol"?t+"":t,n),n),CE=class{constructor(e){St(this,"_isListening",!1),St(this,"_messageHandler",()=>{}),St(this,"_frameIdMap",new Map),St(this,"_options"),St(this,"_messageHandlerWrapper",t=>{var a;if((a=this._options)!=null&&a.allowedOrigins&&!this._options.allowedOrigins.includes(t.origin))return;const n=t.source;if(!n)throw new Error("Somehow the event source is null");const i={fromId:this._frameIdMap.get(t.source),event:t},o=s=>{n.postMessage(s,t.origin)};this._messageHandler(t.data,o,i)}),this._options=e}get isListening(){return this._isListening}listen(){window.addEventListener("message",this._messageHandlerWrapper),this._isListening=!0}close(){window.removeEventListener("message",this._messageHandlerWrapper),this._isListening=!1}onMessage(e){this._messageHandler=e}registerFrame(e,t){if(!(e!=null&&e.contentWindow))throw new Error("Frame must have a contentWindow");this._frameIdMap.set(e.contentWindow,t)}};function OE(){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,t=>t.toString(16).padStart(2,"0")).join("")}var Or=(e=>(e.RPC_REQUEST="rpc-request",e.RPC_RESPONSE="rpc-response",e.RPC_CALLBACK_CALL="rpc-callback-call",e.RPC_CONNECT_REQUEST="rpc-connect-request",e.RPC_CONNECT_RESPONSE="rpc-connect-response",e))(Or||{});function AE({namespace:e,methods:t}){return{_transframe:!0,type:Or.RPC_CONNECT_RESPONSE,namespace:e,methods:t}}function $E({requestId:e,result:t,error:n=!1,namespace:r}){return{_transframe:!0,type:Or.RPC_RESPONSE,requestId:e,result:t,error:n,namespace:r}}function RE({callbackId:e,payload:t,namespace:n}){return{_transframe:!0,type:Or.RPC_CALLBACK_CALL,callbackId:e,payload:t,namespace:n}}function Nc(e){return(e==null?void 0:e._transframe)===!0}function PE(e){return Nc(e)&&e.type===Or.RPC_REQUEST}function DE(e){return(e==null?void 0:e._transframeCallback)===!0}function LE(e){return Nc(e)&&e.type===Or.RPC_CONNECT_REQUEST}var ME=class{constructor(e,t){this._interface=e,St(this,"_options"),St(this,"registerFrame",(n,r)=>(r??(r=OE()),this._interface.registerFrame(n,r),r)),St(this,"listen",()=>{this._interface.listen()}),St(this,"close",()=>{this._interface.close()}),St(this,"_messageHandler",async(n,r,i)=>{if(Nc(n)&&n.namespace===this._options.namespace&&!(this._options.strictMode&&i.fromId==null)){if(PE(n)){const o=n.payload.map(p=>{if(DE(p)){const d=p.callbackId;return(...f)=>{const m=RE({callbackId:d,payload:f,namespace:this._options.namespace});r(m)}}else return p}),a=this._options.api[n.method];if(!a)return;let s=!1,c;try{c=await a(i,...o)}catch(p){s=!0,c=p}const u=$E({requestId:n.requestId,result:c,error:s,namespace:this._options.namespace});r(u)}else if(LE(n)){const o=Object.keys(this._options.api),a=AE({methods:o,namespace:n.namespace});r(a)}}}),this._options=t,this._interface.onMessage(this._messageHandler),(this._options.listenImmediately??!0)&&this.listen()}get isListening(){return this._interface.isListening}get api(){return this._options.api}};function FE(e){if(!("window"in globalThis))throw new Error('Transframe: global "window" not available. Cannot initialize a provider.');return new ME(new CE(e),e)}const Ic="truffle-oauth-callback";function Cc(e,t){return(n,r={})=>{r.redirectUri??(r.redirectUri=t.redirectUri),r.scopes??(r.scopes=t.scopes),r.clientId??(r.clientId=t.clientId),r.windowFeatures??(r.windowFeatures=t.windowFeatures),r.target??(r.target=t.target),r.additionalParams={...t.additionalParams,...r.additionalParams};const i=btoa(JSON.stringify(n)),o=Object.entries(r.additionalParams).reduce((s,[c,u])=>`${s}&${c}=${encodeURIComponent(u)}`,""),a=`${e}?response_type=code&client_id=${r.clientId}&redirect_uri=${r.redirectUri}&scope=${r.scopes}&state=${i}`+o;return new Promise((s,c)=>{const u=window.open(a,r.target,r.windowFeatures);let p=!1;const d=FE({allowedOrigins:[new URL(r.redirectUri).origin],namespace:Ic,api:{oAuthCallback:(f,m)=>{p||(p=!0,m!=null&&m.error?c(m.error):s(m),d.close())}}}),h=setInterval(()=>{if(p){clearInterval(h);return}u!=null&&u.closed&&(p=!0,c({message:"The user closed the oauth window.",code:"user_closed_window"}),clearInterval(h),d.close())},10)})}}const UE=Cc("https://discord.com/api/oauth2/authorize",{redirectUri:"https://app.truffle.vip/oauth/callback/discord",scopes:"identify email",clientId:"897162826173521971",windowFeatures:"width=500,height=850,top=100,left=100",target:"_blank",additionalParams:{prompt:"consent"}}),hh=Cc("https://accounts.google.com/o/oauth2/v2/auth",{redirectUri:"https://app.truffle.vip/oauth/callback/youtube",scopes:"https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/userinfo.email",clientId:"710684531554-58ngiqv3jreg88ns30s3vkptb401rja1.apps.googleusercontent.com",windowFeatures:"width=500,height=850,top=100,left=100",target:"_blank",additionalParams:{include_granted_scopes:"true",access_type:"offline"}}),mh=Cc("https://id.twitch.tv/oauth2/authorize",{redirectUri:"https://app.truffle.vip/oauth/callback/twitch",scopes:"user:read:email",clientId:"fb6q8h4kvaaqmwbt3hntmv19ckz6fx",windowFeatures:"",target:"_blank",additionalParams:{force_verify:"false"}}),qE=$`.c-oauth-button-icon {
  margin: 0;
  padding: 0;
  border-radius: 4px;
  background: #1f1f1f;
  font-size: 16px;
  font-weight: 400;
  border: none;
  color: white;
  transition: 0.2s ease-in-out;
  width: 48px;
  height: 48px;
  border-radius: 4px;
}
.c-oauth-button-icon.youtube {
  background: #eb4433;
  background-image: url("https://cdn.bio/assets/icons/global/light/youtube.svg");
  background-position: center;
  background-size: 100% 100%;
}
.c-oauth-button-icon.twitch {
  background: #925aef;
  background-image: url("https://cdn.bio/assets/icons/global/light/twitch.svg");
  background-position: center;
  background-size: 100% 100%;
}
.c-oauth-button-icon.discord {
  background: #586aea;
  background-image: url("https://cdn.bio/assets/icons/global/light/discord.svg");
  background-position: center;
  background-size: 100% 100%;
}

.c-oauth-button {
  border-radius: 4px;
  background: #1f1f1f;
  height: 48px;
  font-size: 16px;
  font-weight: 400;
  border: none;
  color: white;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  vertical-align: middle;
  padding: 16px;
}
.c-oauth-button:hover {
  background: #2f2f2f;
  cursor: pointer;
}
.c-oauth-button:before {
  content: "";
  align-self: left;
  background-repeat: no-repeat;
  background-size: 1.5em;
  background-position: left;
  width: 1.5em;
  height: 1.5em;
  transform: translateX(1.5em);
  margin-left: -1.5em;
  vertical-align: middle;
}
.c-oauth-button:after {
  content: "";
  width: 1.5em;
  height: 1.5em;
  margin-left: -1.5em;
}
.c-oauth-button.youtube:before {
  background-image: url("https://cdn.bio/assets/icons/youtube.svg");
}
.c-oauth-button.twitch:before {
  background-image: url("https://cdn.bio/assets/icons/twitch.svg");
}`,Oc=({type:e,isIcon:t,redirectUri:n,additionalParams:r,serviceName:i,oauthFlow:o,callback:a,entityType:s,entityId:c})=>{A(qE);const u=e==="login",p=async()=>{const d={accessToken:tt.peek(),action:"close",shouldLogin:e==="login",useAutoAction:!0,entityType:s,entityId:c};try{const h=await o(d,{redirectUri:n,additionalParams:r});h!=null&&h.accessToken&&e==="login"&&ki(h.accessToken),a==null||a(null,h)}catch(h){console.error(h),h instanceof Error?a==null||a(h):a==null||a(new Error("Unknown error"))}};return l("button",{className:`c-oauth-button${t?"-icon":""} ${i.toLowerCase()}`,onClick:p,children:!t&&(u?`Log in with ${i}`:`Connect your ${i}`)})},gh=({type:e,isIcon:t,callback:n,entityType:r,entityId:i})=>{const o={...e==="login"?void 0:{prompt:"consent"}};return l(Oc,{type:e,serviceName:"YouTube",isIcon:t,redirectUri:hc("youtube"),additionalParams:o,oauthFlow:hh,callback:n,entityType:r,entityId:i})},vh=({type:e,isIcon:t,callback:n,entityType:r,entityId:i})=>{const o={force_verify:e==="login"?"false":"true"};return l(Oc,{type:e,isIcon:t,serviceName:"Twitch",redirectUri:hc("twitch"),additionalParams:o,oauthFlow:mh,callback:n,entityType:r,entityId:i})},BE=$`.c-basic-auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.c-basic-auth-form > .input-field {
  display: flex;
  flex-direction: column;
}
.c-basic-auth-form > .input-field > .t-label {
  margin: 0;
  margin-bottom: 8px;
}
.c-basic-auth-form > .submit {
  margin-top: 20px;
}`,jE=V(({mode:e,onAuth:t})=>{A(BE);const n=K(""),r=K(""),i=K("");let o;return e==="join"?o="Create Account":o="Login",l("form",{onSubmit:async s=>{var u,p;s.preventDefault();let c;if(e==="join"){const d=await WE(n.peek(),r.peek(),i.peek());c=(u=d==null?void 0:d.userJoin)==null?void 0:u.accessToken}else{const d=await zE(n.peek(),i.peek());c=(p=d==null?void 0:d.userLogin)==null?void 0:p.accessToken}c?(ki(c),t==null||t()):alert("There was an error logging in")},className:"c-basic-auth-form",children:[l("div",{className:"input-field",children:[l("label",{className:"t-label",children:"Email"}),l("input",{placeholder:"Email",type:"email",value:n.get(),onInput:Pe(n),className:"t-input"})]}),e==="join"?l("div",{className:"input-field",children:[l("label",{className:"t-label",children:"Name"}),l("input",{placeholder:"Name",type:"text",value:r.get(),onInput:Pe(r),className:"t-input"})]}):void 0,l("div",{className:"input-field",children:[l("label",{className:"t-label",children:"Password"}),l("input",{placeholder:"Password",type:"password",value:i.get(),onInput:Pe(i),className:"t-input"})]}),l("button",{className:"t-button submit",type:"submit",children:o})]})}),VE=B`
  mutation UserLogin($input: UserLoginInput!) {
    userLogin(input: $input) {
      accessToken
    }
  }
`;async function zE(e,t){const n=ua({url:aa(),fetchOptions:{headers:{"x-access-token":tt.peek()}}}),{data:r}=await n.mutation(VE,{input:{emailAndPassword:{email:e,password:t}}}).toPromise();return r}const HE=B`
  mutation EmailJoin($email: String!, $name: String!, $password: String!) {
    userJoin(input: { email: $email, name: $name, password: $password }) {
      accessToken
    }
  }
`;async function WE(e,t,n){const{data:r}=await kr.get().gqlClient.mutation(HE,{email:e,name:t,password:n},{url:ge()}).toPromise();return r}const GE=()=>l("button",{className:"c-logout-button",onClick:()=>{ki(void 0)},children:"Logout"});var Bn=(e=>(e.Join="join",e.Login="login",e))(Bn||{});const Ar=V(({mode:e,onAuth:t,joinPath:n,loginPath:r})=>{A(SE);const i=K(e),o=bi();t=t||(()=>{o({to:"/getting-started"})});let a;if(i.get()==="join"?a="Sign up for Truffle":a="Log in to Truffle",Fn.get())return l(j,{children:[l("h1",{className:"title",children:"You're already logged in!"}),l(GE,{})]});const s=()=>{n?o({to:n}):i.set("join")},c=()=>{r?o({to:r}):i.set("login")};return l("div",{className:"c-auth",children:[l("h1",{className:"title",children:a}),l("div",{className:"oauth-buttons",children:[l(gh,{type:"login",callback:t}),l(vh,{type:"login",callback:t})]}),l("h2",{className:"sep",children:[l("span",{className:"line"}),l("span",{className:"or",children:"Or"}),l("span",{className:"line"})]}),l(jE,{mode:i.get(),onAuth:t}),i.get()==="join"?l("div",{className:"alternative",children:["Already have an account?"," ",l("div",{className:"link",onClick:c,children:"Sign in"})]}):l("div",{className:"alternative",children:["Don't have an account?"," ",l("div",{className:"link",onClick:s,children:"Sign up"})]}),l("a",{href:"https://truffle.vip/policies",target:"_blank",className:"privacy",rel:"noreferrer",children:"Privacy Policy"})]})}),YE=$`.p-join {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`,QE=V(()=>(A(YE),l("div",{className:"p-join",children:l(Ar,{mode:Bn.Join,joinPath:"/join",loginPath:"/login"})}))),KE=new J({getParentRoute:()=>rt,path:"/join",component:QE}),JE=$`.p-login {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}`,XE=V(()=>(A(JE),l("div",{className:"p-login",children:l(Ar,{mode:Bn.Login,joinPath:"/join",loginPath:"/login"})}))),ZE=new J({getParentRoute:()=>rt,path:"/login",component:XE}),li={METHOD_NOT_FOUND:-32601,INVALID_ORIGIN:100,DEFAULT:-1},xa={};xa[li.METHOD_NOT_FOUND]="Method not found";xa[li.INVALID_ORIGIN]="Invalid origin";xa[li.DEFAULT]="Error";const ek=3e3,tk=function(){let e=null,t=null,n=new Promise((r,i)=>(e=r,t=i,t));return n.resolve=e,n.reject=t,n},yh=class{constructor({postMessage:e,timeout:t=ek}={}){this.postMessage=e,this.timeout=t,this.pendingRequests={},this.callbackFunctions={},this.call=this.call.bind(this),this.resolve=this.resolve.bind(this),this.resolveRPCResponse=this.resolveRPCResponse.bind(this)}call(e,t,n={}){let{timeout:r=this.timeout}=n,i=tk(),o=[];for(const s of Array.from(t||[]))if(typeof s=="function"){const c=ok();this.callbackFunctions[c.callbackId]=s,o.push(c)}else o.push(s);const a=ak({method:e,params:o});this.pendingRequests[a.id]={reject:i.reject,resolve:i.resolve,isAcknowledged:!1};try{this.postMessage(JSON.stringify(a),"*")}catch(s){return i.reject(s),i}return setTimeout(()=>{if(!this.pendingRequests[a.id].isAcknowledged)return i.reject(new Error("Message Timeout"))},r),i}resolve(e){switch(!1){case!sk(e):return this.resolveRPCRequestAcknowledgement(e);case!bh(e):return this.resolveRPCResponse(e);case!ck(e):return this.resolveRPCCallbackResponse(e);default:throw new Error("Unknown response type")}}resolveRPCResponse(e){const t=this.pendingRequests[e.id];if(t==null)throw new Error("Request not found");t.isAcknowledged=!0;const{result:n,error:r}=e;return r?t.reject(r.data||new Error(r.message)):n!=null?t.resolve(n):t.resolve(null),null}resolveRPCRequestAcknowledgement(e){const t=this.pendingRequests[e.id];if(t==null)throw new Error("Request not found");return t.isAcknowledged=!0,null}resolveRPCCallbackResponse(e){const t=this.callbackFunctions[e.callbackId];if(t==null)throw new Error("Callback not found");return t(...e.params||[]),null}};function nk({params:e,callbackId:t}){return{_browserComms:!0,callbackId:t,params:e}}function rk({requestId:e}){return{_browserComms:!0,id:e,acknowledge:!0}}function es({requestId:e,result:t=null,rPCError:n=null}){return{_browserComms:!0,id:e,result:t,error:n}}function Yu({code:e,data:t=null}){const n=xa[e];return{_browserComms:!0,code:e,message:n,data:t}}function Qu(e){return e==null?void 0:e._browserComms}function ik(e){return(e==null?void 0:e.id)!=null&&e.method!=null}function bh(e){return(e==null?void 0:e.id)&&(e.result!==void 0||e.error!==void 0)}function ok(){return{_browserComms:!0,_browserCommsGunCallback:!0,callbackId:xh()}}function ak({method:e,params:t}){if(t==null)throw new Error("Must provide params");for(const n of Array.from(t))if(typeof n=="function")throw new Error("Functions are not allowed. Use RPCCallback instead.");return{_browserComms:!0,id:xh(),method:e,params:t}}function sk(e){return(e==null?void 0:e.acknowledge)===!0}function ck(e){return(e==null?void 0:e.callbackId)&&e.params!=null}function lk(e){return e==null?void 0:e._browserCommsGunCallback}function xh(){let e=new Date().getTime(),t=typeof performance<"u"&&performance.now&&performance.now()*1e3||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){let r=Math.random()*16;return e>0?(r=(e+r)%16|0,e=Math.floor(e/16)):(r=(t+r)%16|0,t=Math.floor(t/16)),(n==="x"?r:r&3|8).toString(16)})}const uk=1e4,dk=5e3,Yn=typeof document<"u"?window:typeof self<"u"?self:null,pk=class{constructor(e={}){var o,a,s,c;const{timeout:t,shouldConnectToServiceWorker:n,handshakeTimeout:r=uk,isParentValidFn:i=()=>!0}=e;this.handshakeTimeout=r,this.isParentValidFn=i,this.isListening=!1,this.isNotTopWindow=typeof document<"u"&&window.self!==window.top,this.hasParent=((o=globalThis==null?void 0:globalThis.window)==null?void 0:o.ReactNativeWebView)||this.isNotTopWindow,this.isNotTopWindow?this.parent=(a=globalThis==null?void 0:globalThis.window)==null?void 0:a.parent:this.parent=((s=globalThis==null?void 0:globalThis.window)==null?void 0:s.ReactNativeWebView)||((c=globalThis==null?void 0:globalThis.window)==null?void 0:c.parent),this.client=new yh({timeout:t,postMessage:(u,p)=>{var d,h,f;(d=globalThis==null?void 0:globalThis.window)!=null&&d.ReactNativeWebView&&!this.isNotTopWindow?(h=this.parent)==null||h.postMessage(u):(f=this.parent)==null||f.postMessage(u,p)}}),this.waitForSw=n&&hk(),this.registeredMethods={ping:()=>Object.keys(this.registeredMethods)},this.parentsRegisteredMethods=[],this.parentHasMethod=this.parentHasMethod.bind(this),this.setParent=this.setParent.bind(this),this.listen=this.listen.bind(this),this.close=this.close.bind(this),this.call=this.call.bind(this),this.onRequest=this.onRequest.bind(this),this.onMessage=this.onMessage.bind(this),this.on=this.on.bind(this)}setParent(e){this.parent=e,this.hasParent=!0}listen(){var e;this.isListening=!0,(e=Yn.addEventListener)==null||e.call(Yn,"message",this.onMessage,!0),this.waitForParentPing=this.hasParent&&this.client.call("ping",null,{timeout:this.handshakeTimeout}).then(t=>{this.parentsRegisteredMethods=this.parentsRegisteredMethods.concat(t)}).catch(()=>null),this.waitForSwPing=this.waitForSw&&this.waitForSw.then(()=>{var t;return(t=this.sw)==null?void 0:t.call("ping",null,{timeout:this.handshakeTimeout})}).then(t=>{this.parentsRegisteredMethods=this.parentsRegisteredMethods.concat(t)}).catch(()=>null)}close(){return this.isListening=!0,Yn==null?void 0:Yn.removeEventListener("message",this.onMessage)}parentHasMethod(e){return this.parentsRegisteredMethods.indexOf(e)!==-1}async call(e,...t){if(!this.isListening)return new Promise((r,i)=>i(new Error("Must call listen() before call()")));const n=(r,i)=>{const o=this.registeredMethods[r];if(!o)throw new Error("Method not found: "+r);return o(...i)};if(this.waitForSw&&await this.waitForSw,!this.hasParent&&!this.sw)return n(e,t);{let r=null;if(this.waitForParentPing&&await this.waitForParentPing,this.waitForSwPing&&await this.waitForSwPing,this.parentHasMethod(e)){let i;try{if(!this.hasParent)throw new Error("No parent");i=await this.client.call(e,t)}catch(o){try{if(r=o,this.sw)try{i=await this.sw.call(e,t)}catch{return n(e,t)}else return n(e,t)}catch(a){throw a.message==="Method not found"&&r?r:a}}if(e==="ping"){const o=n(e,t);i=(i||[]).concat(o)}return i}else return n(e,t)}}async onRequest(e,t,n){const r=[];for(const i of Array.from(t.params||[]))lk(i)?(o=>r.push((...a)=>e(nk({params:a,callbackId:o.callbackId}))))(i):r.push(i);e(rk({requestId:t.id}));try{const i=await this.call(t.method,...Array.from(r),{e:n});return e(es({requestId:t.id,result:i}))}catch(i){return e(es({requestId:t.id,rPCError:Yu({code:li.DEFAULT,data:i})}))}}onMessage(e,{isServiceWorker:t,reply:n}={}){try{const r=typeof e.data=="string"?JSON.parse(e.data):e.data;if(!Qu(r))return;if(n=n||function(i){var o;return typeof document<"u"&&window!==null?(o=e.source)==null?void 0:o.postMessage(JSON.stringify(i),"*"):e.ports[0].postMessage(JSON.stringify(i))},ik(r))return this.onRequest(n,r,e);if(Qu(r)){let i;if(this.isParentValidFn(e.origin))return i=t?this.sw:this.client,i.resolve(r);if(bh(r))return i=t?this.sw:this.client,i.resolve(es({requestId:r.id,rPCError:Yu({code:li.INVALID_ORIGIN})}));throw new Error("Invalid origin")}else throw new Error("Unknown RPCEntity type")}catch{}}on(e,t){this.registeredMethods[e]=t}},fk=pk;function hk(){return new Promise((e,t)=>{var r;const n=setTimeout(e,dk);return(r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.ready.catch(function(){return console.log("caught sw error"),null}).then(i=>{const o=i==null?void 0:i.active;return o&&(this.sw=new yh({timeout:this.timeout,postMessage:(a,s)=>{const c=new MessageChannel;if(c)return c.port1.onmessage=u=>this.onMessage(u,{isServiceWorker:!0}),o.postMessage(a,[c.port2])}})),clearTimeout(n),e()})})}const mk=fk,Ku="truffle",gk={APP:"app",WEB:"web"};var ud,dd;const Ur=typeof document>"u"||((dd=(ud=globalThis==null?void 0:globalThis.process)==null?void 0:ud.release)==null?void 0:dd.name)==="node"||(globalThis==null?void 0:globalThis.Deno);class vk{isChrome(){var t;return(t=globalThis==null?void 0:globalThis.navigator)==null?void 0:t.userAgent.match(/chrome/i)}networkInformationOnOnline(t){return window.addEventListener("online",t)}networkInformationOnOffline(t){return window.addEventListener("offline",t)}constructor(){this.call=(...t)=>Ur?console.log("Comms called server-side"):this.jumper.call(...t).catch(n=>{var r,i;return(i=(r=n.message)==null?void 0:r.startsWith)!=null&&i.call(r,"Method not found")||console.log(n),null}),this.callWithError=(...t)=>Ur?console.log("Comms called server-side"):this.jumper.call(...Array.from(t||[])),this.listen=()=>{if(Ur)throw new Error("Comms called server-side");return this.jumper.listen(),this.jumper.on("auth.getStatus",this.authGetStatus),this.jumper.on("env.getPlatform",this.getPlatform),this.jumper.on("app.onResume",this.appOnResume),this.jumper.on("networkInformation.onOnline",this.networkInformationOnOnline),this.jumper.on("networkInformation.onOffline",this.networkInformationOnOffline),this.jumper.on("networkInformation.onOnline",this.networkInformationOnOnline),this.jumper.on("storage.get",this.storageGet),this.jumper.on("storage.set",this.storageSet),this.jumper.on("browser.openWindow",({url:t,target:n,options:r})=>window==null?void 0:window.open(t,n,r))},this.authGetStatus=async()=>{const t=await this.model.user.getMe().take(1).toPromise();return{accessToken:t.id,userId:t.id}},this.getPlatform=t=>{switch(!1){default:return gk.WEB}},this.appOnResume=t=>(this.appResumeHandler&&window.removeEventListener("visibilitychange",this.appResumeHandler),this.appResumeHandler=function(){if(!document.hidden)return t()},window.addEventListener("visibilitychange",this.appResumeHandler)),this.storageGet=({key:t})=>window.localStorage.getItem(`${Ku}:${t}`),this.storageSet=({key:t,value:n})=>{window.localStorage.setItem(`${Ku}:${t}`,n)},Ur||(this.jumper=new mk({shouldConnectToServiceWorker:!1}),this.appResumeHandler=null)}}const On=new vk;Ur||(window._isTruffleJumperListening=!0,On.listen());const yk=$`.p-login-dialog {
  width: 100%;
  height: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
  background: var(--truffle-bg-color);
  color: #fff;
}`,bk=V(()=>{A(yk);const e=()=>{On.call("comms.postMessage","user.accessTokenUpdated"),On.call("comms.postMessage","user.invalidate")};return l("div",{className:"p-login-dialog",children:l(Ar,{mode:Bn.Login,onAuth:e,loginPath:"/login-dialog",joinPath:"/join-dialog"})})}),xk=new J({getParentRoute:()=>en,path:"/login-dialog",component:bk}),_k=$`.p-join-dialog {
  width: 100%;
  height: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
  background: var(--truffle-bg-color);
  color: #fff;
}`,wk=V(()=>{A(_k);const e=()=>{On.call("comms.postMessage","user.accessTokenUpdated"),On.call("comms.postMessage","user.invalidate")};return l("div",{className:"p-join-dialog",children:l(Ar,{mode:Bn.Join,onAuth:e,loginPath:"/login-dialog",joinPath:"/join-dialog"})})}),Ek=new J({getParentRoute:()=>en,path:"/join-dialog",component:wk}),kk=B`
  query AppMeQuery {
    me {
      id
      name
      email

      avatarImage {
        prefix
        cdn
        ext
        variations {
          height
          postfix
          width
        }
      }

      orgUsers {
        nodes {
          id
          name
          bio
          org {
            id
            name
            slug
          }
          roleConnection {
            nodes {
              id
              slug
              name
            }
          }
        }
      }

      connectionConnection {
        nodes {
          id
          orgId
          sourceType
          sourceId
        }
      }
    }
  }
`,Tk=B`
  mutation AppUserUpsert($input: UserUpsertInput!) {
    userUpsert(input: $input) {
      user {
        id
      }
    }
  }
`,Sk=B`
  mutation AppOrgUserUpsert($input: OrgUserUpsertInput!) {
    orgUserUpsert(input: $input) {
      orgUser {
        id
        org {
          id
          name
          slug
        }
      }
    }
  }
`,Nk=B`
  mutation AppConnectionDelete($id: ID!) {
    connectionDelete(input: { id: $id }) {
      id
    }
  }
`;function jn(){const[{data:e,fetching:t,error:n},r]=ut({query:kk,context:ce(()=>({url:ge()}),[])});return{user:e==null?void 0:e.me,fetching:t,error:n,refetchUser:r}}function _h(){const[e,t]=Fe(Tk);return{upsertUser:t,upsertUserResult:e}}function wh(){const[e,t]=Fe(Sk);return{upsertOrgUser:t,upsertOrgUserResult:e}}function Ik(){const[e,t]=Fe(Nk);return{deleteConnection:t,deleteConnectionResult:e}}const Ck=$`.c-nav {
  position: sticky;
  top: 0px;
}

.p-profile {
  background: none;
  --sidebar-width: 240px;
}
.p-profile > main {
  margin-left: calc(var(--sidebar-width));
  margin-right: 40px;
}
.p-profile > .settings-sidebar {
  top: 0px;
  position: fixed;
  height: calc(100% - var(--nav-height));
  background: #1f1f1f;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;
  margin-top: 64px;
  padding-top: 28px;
  width: var(--sidebar-width);
  gap: 15px;
  overflow-y: auto;
}
.p-profile > .settings-sidebar > .t-caps-title {
  margin: 0px;
}
.p-profile > .settings-sidebar > .bottom-spacer {
  flex-grow: 1;
  background: none;
}
.p-profile > .settings-sidebar > .sidebar-item {
  font-weight: 400;
  padding: 0;
  display: block;
  font-size: 16px;
  text-decoration: none;
  color: white;
}
.p-profile > .settings-sidebar > .sidebar-item[data-status=active] {
  color: var(--primary, #f357a1);
}
.p-profile > .settings-sidebar > .sidebar-item[data-status=active]::before {
  content: " ";
  position: absolute;
  left: 2px;
  background: var(--primary, #f357a1);
  width: 4px;
  height: 24px;
  border-radius: 0px 4px 4px 0px;
  transform: translate(-50%, 0%);
}`,Ok=V(()=>{A(Ck);const{user:e}=jn(),n=Wt().location.pathname.startsWith("/profile/sidebar");return!Fn.get()&&!n?l(j,{children:"Not logged in"}):e?l("div",{className:"p-profile",children:[l("nav",{className:"settings-sidebar",children:[l("h3",{className:"t-caps-title",children:"User settings"}),l(he,{className:"sidebar-item",to:"/profile/global",children:"My account"}),l("div",{className:"t-divider"}),l("h3",{className:"t-caps-title",children:"Extension settings"}),l(he,{className:"sidebar-item",to:"/profile/sidebar",children:"Sidebar access"}),l("div",{className:"t-divider"}),l("h3",{className:"t-caps-title",children:"Community settings"}),l(he,{className:"sidebar-item",to:"/profile/orgs",children:"My communities"}),l("div",{className:"t-divider bottom-spacer"}),l(he,{className:"sidebar-item",to:"/login",onClick:()=>ki(void 0),children:"Logout"})]}),l("main",{children:l(Pn,{})})]}):l(j,{children:"Loading..."})}),_a=new J({getParentRoute:()=>rt,path:"/profile",component:Ok}),Ak=B`
  query AppOrgQuery($slug: String, $id: ID) {
    org(input: { slug: $slug, id: $id }) {
      id
      name
      slug
      socials
      orgUser {
        id
        name
        bio
        roleConnection {
          nodes {
            id
            slug
            name
          }
        }
      }
    }
  }
`,$k=B`
  query AppOrgUserConnectionQuery($orgId: ID!, $nameQueryStr: String, $sort: JSON, $query: ESQuery) {
    orgUserConnection(input: { orgId: $orgId, nameQueryStr: $nameQueryStr, sort: $sort, query: $query }) {
      nodes {
        id
        name
        email
        # this is to get the orgUser's roles
        roleConnection {
          nodes {
            id
            slug
            name
          }
        }
      }
    }

    # this is to get all roles that exist in the org
    roleConnection(input: { orgId: $orgId }) {
      nodes {
        id
        slug
        name
      }
    }
  }
`,Rk=B`
  mutation AppOrgUserRolesUpsertMutation($orgUserId: ID!, $roleIds: [ID!]!) {
    orgUserSetRoleIds(input: { id: $orgUserId, roleIds: $roleIds }) {
      orgUser {
        id
      }
    }
  }
`,Pk=B`
  mutation AppOrgUpsertMutation($input: OrgUpsertInput!) {
    orgUpsert(input: $input) {
      org {
        id
      }
    }
  }
`;function Ni({slug:e,id:t}){const[{data:n,fetching:r,error:i}]=ut({query:Ak,variables:{slug:e,id:t},context:ce(()=>({url:ge()}),[])});return{org:ce(()=>n==null?void 0:n.org,[n]),fetching:r,error:i}}function Dk({orgId:e,nameQueryStr:t,roleId:n}){const[{data:r,fetching:i,error:o},a]=ut({query:$k,variables:{orgId:e,nameQueryStr:t,sort:[{name:{order:"asc"}}],query:n&&{bool:{filter:[{bool:{should:[{match:{roleIds:n}}]}}]}}},context:ce(()=>({url:ge(),fetchOptions:{headers:{"x-org-id":e}}}),[e])}),s=ce(()=>{var u;return((u=r==null?void 0:r.orgUserConnection)==null?void 0:u.nodes)||[]},[r]),c=ce(()=>r==null?void 0:r.roleConnection.nodes,[r]);return{orgUserList:s,roleList:c,fetching:i,error:o,refetch:a}}function Lk(){const[{fetching:e,error:t},n]=Fe(Rk);return{orgUserRoleUpsert:n,fetching:e,error:t}}function Eh(){const[{fetching:e,error:t},n]=Fe(Pk);return{orgUpsert:n,fetching:e,error:t}}function kh(e){var t,n;return(n=(t=e.channelConnection)==null?void 0:t.nodes.find(r=>{var i;return(i=r.data)==null?void 0:i.avatarFileUrl}))==null?void 0:n.data.avatarFileUrl}function Mk(e){var t,n;return(n=(t=e.channelConnection)==null?void 0:t.nodes.find(r=>{var i;return(i=r.data)==null?void 0:i.bannerFileUrl}))==null?void 0:n.data.bannerFileUrl}const Fk=$`.p-org .org-nav {
  margin: 20px;
  display: flex;
  gap: 10px;
}
.p-org > .quick-actions-link-container > a {
  color: lightblue;
}`,Uk=()=>{A(Fk);const{slug:e}=Et(),{org:t,fetching:n,error:r}=Ni({slug:e});return n?l("div",{children:"Loading..."}):r?l("div",{children:["Error: ",l("pre",{children:r.message})]}):t?l("div",{className:"p-org",children:[l("h1",{children:t.name}),l("div",{children:[l("strong",{children:"Org ID: "}),t.id]}),l("div",{children:[l("strong",{children:"Org slug: "}),t.slug]}),l("br",{}),l("div",{className:"quick-actions-link-container",children:l("a",{href:`${window.origin}/quick-actions/${t.id}`,target:"_blank",rel:"noreferrer",children:"Quick Actions"})}),l("div",{className:"org-nav",children:[l(he,{from:`/${_n.path}`,to:"members",children:"Members"}),l(he,{from:`/${_n.path}`,to:"roles",children:"Roles"}),l(he,{from:`/${_n.path}`,to:"embeds",children:"Embeds"})]}),l(Pn,{})]}):l(j,{})},_n=new J({getParentRoute:()=>rt,path:"orgs/$slug",component:Uk}),qk="/assets/error-8e38e2e9.svg",Bk=$`.p-error > img {
  width: 310px;
  margin-bottom: 14px;
}
.p-error > h1 {
  font-size: 2em;
  margin-bottom: 8px;
}
.p-error > h2 {
  font-size: 1.5em;
  margin-bottom: 40px;
}
.p-error > button {
  background: #ed4860;
  border-radius: 4px;
  padding: 12px 20px;
  text-align: center;
  border: none;
  color: white;
}
.p-error > button:hover {
  cursor: pointer;
}`,jk=()=>(A(Bk),l("div",{className:"p-error t-centered-page",children:[l("img",{src:qk,alt:""}),l("h1",{children:"404"}),l("h2",{children:"Page Not Found"}),l("button",{children:"Go Back"})]})),Vk=new J({getParentRoute:()=>rt,path:"/error",component:jk}),Th=sa({namespace:"truffle-hud-privileged-api-v1",connectImmediately:!1});Th.connect().catch(e=>{console.log("error connecting",e,window.location.href)});const at=Th.api,zk=B`
  query ($input: EmbedInput) {
    embed(input: $input) {
      id
      orgId
      url
      packageInstallId
      isLoginRequired
    }
  }
`,Ac=Ee(),Sh=je(async()=>{const e=Ac.get();return e?an().gqlClient.query(zk,{input:{id:e,apiVersion:2}},{url:ge()}).toPromise().then(t=>{var n;return((n=t.data)==null?void 0:n.embed)??null}):null}),Hk=e=>{$c.set(e)},$c=Ee(at.pageInfoGet(Hk)),Wk=je(async()=>{const e=Ac.get();if(!e||Sh.get())return null;$c.get();const t=await at.embedGetDevEmbeds();return(t==null?void 0:t.find(n=>n.id===e))??null}),Rc=je(()=>Sh.get()??Wk.get()),Ju=new Map;async function Pc(e,{shouldIgnoreCache:t=!1}={}){const n=Rc.get();if(!n)return console.error("no embed$ value");if(n.authToken)return n.authToken;const r=Ju.get(e);if(r&&!t)return r;const i=n.packageInstallId?await Qk(n.packageInstallId):void 0;return Ju.set(e,i),i}let vo=[];function Gk(e,t,n={}){return vo.push(t),n.immediate&&Pc(e).then(t),()=>{vo=vo.filter(r=>r!==t)}}tt.onChange(async()=>{const e=Rc.get();if(!e)return;const t=await Pc(e.packageInstallId,{shouldIgnoreCache:!0});vo.forEach(n=>n(t))});async function Yk(e){var n;const t=await kr.get().gqlClient.query(`
      query ExtensionFetchPackageToken($packageInstallId: ID!) {
        packageInstallUserAccessToken(input: {
          packageInstallId: $packageInstallId
        })
      }
    `,{packageInstallId:e},{url:ge()}).toPromise();if(t.error)throw t.error;return(n=t.data)==null?void 0:n.packageInstallUserAccessToken}async function Qk(e){const t=await ln.storageBucketGet("auth","packageInstallAccessTokens")||{};let n=t[e];return n||(n=await Yk(e),t[e]=n,await ln.storageBucketSet("auth","packageInstallAccessTokens",t)),n}const Kk={userGetAccessToken:async({fromId:e})=>{if(e)return Pc(e)},userOnAccessTokenChanged:async({fromId:e},t,n)=>{e&&Gk(e,t,n)},embedSetStyles:(e,t)=>{at.embedSetStyles(t)},embedSetContainer:(e,t,n="append")=>{at.embedSetContainer(t,n)},embedShowToast:(e,t,n)=>{at.embedShowToast(t,n)},embedWindowGetVisibility:async()=>!!await at.embedWindowGetVisibility(),embedWindowSetVisibility:(e,t)=>{at.embedWindowSetVisibility({isVisible:t})},pageInfoGet:()=>$c.peek()},Jk=af({namespace:"truffle-injected-unprivileged-embed-api-v1",api:Kk,strictMode:!0}),Xk=$`.p-embed {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.p-embed > .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 24px;
  box-sizing: border-box;
  z-index: 10;
  background: rgba(38, 38, 38, 0.4392156863);
  backdrop-filter: blur(2px);
  display: flex;
}
.p-embed > .overlay > .content {
  width: 100%;
  max-height: 100%;
  max-width: 400px;
  margin: auto;
  border-radius: 4px;
  background: #171717;
  padding: 32px 16px;
  box-sizing: border-box;
  overflow: auto;
  background: var(--truffle-bg-color);
  color: #fff;
}
.p-embed > .iframe {
  width: 100%;
  height: 100%;
  border: none;
}`;$`.p-sidebar_p-creator_p-home {
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p-sidebar_p-creator_p-home > .scrollable {
  width: 100%;
  flex: 1;
  overflow: scroll;
}
.p-sidebar_p-creator_p-home > .scrollable > .banner {
  height: 178px;
  background-color: #000;
  background-size: auto 100%;
  background-position: center;
  position: relative;
}
.p-sidebar_p-creator_p-home > .scrollable > .banner > .header {
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  background: linear-gradient(180deg, #171717 0%, transparent 100%);
}
.p-sidebar_p-creator_p-home > .scrollable > .banner > .actions {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  display: flex;
  gap: 12px;
}
.p-sidebar_p-creator_p-home > .follow {
  margin-top: auto;
  width: 100%;
}`;const Zk=$`.p-sidebar_p-creator_c-follow {
  width: 100%;
  padding: 20px 12px;
  box-sizing: border-box;
}
.p-sidebar_p-creator_c-follow > .icon {
  width: 56px;
  height: 56px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  margin-bottom: 12px;
  background-color: #333;
  background-size: 100%;
}
.p-sidebar_p-creator_c-follow > .icon::after {
  content: " ";
  position: absolute;
  background-image: url("https://cdn.bio/assets/images/features/sidebar/follow-outline.svg");
  background-size: 100% auto;
  width: 74px;
  height: 100%;
  top: 0;
  left: -8px;
}
.p-sidebar_p-creator_c-follow > .description {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}
.p-sidebar_p-creator_c-follow > .button {
  width: 100%;
  outline: none;
  border: none;
  background: #f357a1;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: block;
  cursor: pointer;
}
.p-sidebar_p-creator_c-follow > .button:hover {
  background: rgba(243, 87, 161, 0.8666666667);
}`,e1=B`
  mutation DatapointIncrementUnique($input: DatapointIncrementUniqueInput!) {
    datapointIncrementUnique(input: $input) {
      isUpdated
    }
  }
`,t1=B`
  mutation DatapointIncrementMetric($input: DatapointIncrementMetricInput!) {
    datapointIncrementMetric(input: $input) {
      isUpdated
    }
  }
`,mC=async({orgId:e,metricSlug:t,dimensionValues:n})=>{kr.get().gqlClient.mutation(e1,{input:{metricSlug:t,dimensionValues:n}},{url:ge(),fetchOptions:{headers:{"x-org-id":e}}}).toPromise()},n1=async({orgId:e,metricSlug:t,count:n=1,dimensionValues:r})=>{kr.get().gqlClient.mutation(t1,{input:{metricSlug:t,count:n,dimensionValues:r}},{url:ge(),fetchOptions:{headers:{"x-org-id":e}}}).toPromise()},r1=B`
  mutation ($input: OrgMemberCreateInput!) {
    orgMemberCreate(input: $input) {
      orgMember {
        id
      }
    }
  }
`,Nh=({org:e,followToText:t="continue"})=>{var s,c;A(Zk);const[n,r]=Fe(r1),i=Fn.get(),o=()=>{r({input:{orgId:e.id}}),n1({metricSlug:"creator-hub-follows",orgId:e.id})},a=()=>{window.open("https://app.truffle.vip/login","_blank")};return l("div",{className:"p-sidebar_p-creator_c-follow",children:[l("div",{className:"icon",style:{backgroundImage:`url(${(c=(s=e.channelConnection.nodes[0])==null?void 0:s.data)==null?void 0:c.avatarFileUrl})`}}),l("div",{className:"description",children:["Follow ",e.name," to ",t]}),l("button",{className:"button",onClick:i?o:a,children:i?n.fetching?"Loading...":`Follow ${e.name}`:"Login to follow"})]})},i1=B`query ($input: OrgInput) {
  org(input: $input) {
    id
    name
    channelConnection {
      nodes {
        id
        data
      }
    }
    orgMember {
      id
    }
  }
}
`,o1=V(()=>{var s,c;A(Xk);const e=Rc.get(),t=se(null);te(()=>{t.current&&(e!=null&&e.id)&&Jk.registerFrame(t.current,e.id)},[t,e==null?void 0:e.id]);const[n]=ut({query:i1,variables:{input:{id:e==null?void 0:e.orgId}},context:ce(()=>({additionalTypenames:["OrgUser"]}),[])});if(!e)return l(j,{});const r=Fn.get(),i=(s=n.data)==null?void 0:s.org,o=!!((c=i==null?void 0:i.orgMember)!=null&&c.id),a=()=>{On.call("comms.postMessage","user.accessTokenUpdated"),On.call("comms.postMessage","user.invalidate")};return l("div",{className:"p-embed",children:[e.isLoginRequired&&!r?l("div",{className:"overlay",children:l("div",{className:"content",children:l(Ar,{mode:Bn.Login,onAuth:a})})}):e.isLoginRequired&&i&&!o?l("div",{className:"overlay",children:l("div",{className:"content",children:l(Nh,{org:i})})}):void 0,l("iframe",{ref:t,src:e.url,className:"iframe"})]})}),a1=new J({getParentRoute:()=>en,path:"/embed/$embedId",component:o1,loader:({params:e})=>{Ac.set(e.embedId)}}),s1=$`.c-debug {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}
.c-debug > .onboard-test {
  display: flex;
  gap: 20px;
}
.c-debug > .input-field {
  display: flex;
  flex-direction: column;
}`,c1=$`.p-start > h1 {
  font-weight: 600;
  font-size: 28px;
  margin: 0;
  margin-bottom: 8px;
}
.p-start > p {
  margin: 0;
  margin-bottom: 40px;
  font-weight: 400;
}`,l1=()=>{A(c1);const{user:e}=jn(),{nextStep:t,completeStep:n}=Ci();return e?(console.log("nextStep",t()),l("div",{className:"p-start t-centered-page",children:[l("h1",{children:["Sweet Name, ",e.name,"!"]}),l("p",{children:"Let's set up a few features real quick."}),l(he,{to:t(),onClick:n,className:"t-button",children:"Let's Go!"})]})):l(j,{children:"Loading..."})},u1=$`.p-setup-profile > .container {
  display: flex;
  flex-direction: row;
  gap: 64px;
}
.p-setup-profile > .container > .chat {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.p-setup-profile > .container > .chat > h2 {
  font-size: 12px;
  font-weight: 600;
  color: #cfcfcf;
  text-transform: uppercase;
  margin: 0;
}
.p-setup-profile > .container > .profile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
}
.p-setup-profile > .container > .profile > .username {
  display: flex;
  flex-direction: column;
}
.p-setup-profile > .container > .profile > .username > label {
  color: #cfcfcf;
}
.p-setup-profile > .container > .profile > button {
  width: fit-content;
  margin-left: auto;
}`,d1="/assets/down-arrow-4855e18a.svg",p1="/assets/more-6fa8b2ec.svg",f1="/assets/blossom-5df94d98.svg",h1="/assets/bud-bf0db97a.svg",m1="/assets/coots-58ad24a4.svg",g1="/assets/stanzsheesh-d25ce0fb.svg",v1="/assets/gachi-ae558656.svg",y1=$`.c-chat {
  border-radius: 11px;
  border: 1px solid #454545;
  width: 340px;
  box-sizing: border-box;
  user-select: none;
  position: relative;
}
.c-chat > .star-top-right-large {
  position: absolute;
  width: 26px;
  top: 4px;
  right: -14px;
}
.c-chat > .star-top-right-small {
  position: absolute;
  width: 18px;
  top: -11px;
  right: 11px;
}
.c-chat > .star-bottom-right {
  position: absolute;
  width: 26px;
  bottom: -22px;
  right: 3px;
}
.c-chat > .star-bottom-left {
  position: absolute;
  width: 18px;
  bottom: -6px;
  left: 7px;
}
.c-chat > .header {
  padding: 15px;
  display: flex;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  background: #1e1e1e;
}
.c-chat > .header > p {
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin: 0;
}
.c-chat > .header > .down-arrow {
  margin-left: 12px;
}
.c-chat > .header .more {
  margin-left: auto;
  margin-right: 12px;
}
.c-chat > .chat {
  border-bottom-left-radius: 11px;
  border-bottom-right-radius: 11px;
  padding: 13px 28px 18px;
  background: #161717;
}
.c-chat > .chat > .message {
  display: flex;
  margin-bottom: 10px;
}
.c-chat > .chat > .message > .username {
  display: flex;
  font-weight: 500;
  font-size: 13px;
  align-items: center;
}
.c-chat > .chat > .message > .username > .blue-gradient {
  background: linear-gradient(269.25deg, #a69eff 4.87%, #22badb 94.08%), #517ff2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.c-chat > .chat > .message > .username > .teal-red-gradient {
  background: linear-gradient(90.02deg, #63d6c9 0.02%, #f18726 44.29%, #eb3575 95.71%), #f67c48;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.c-chat > .chat > .message > .username > .pink {
  color: #f2518b;
}
.c-chat > .chat > .message > .username > .blue-green {
  color: #1aab91;
}
.c-chat > .chat > .message > .username > .purple {
  color: #695ee8;
}
.c-chat > .chat > .message > .username > .teal {
  color: #1fb7c0;
}
.c-chat > .chat > .message > .username > .green {
  color: #33be73;
}
.c-chat > .chat > .message > .username > .orange {
  color: #f18726;
}
.c-chat > .chat > .message > .username > p {
  font-family: "Roboto", sans-serif;
  margin: 0;
  white-space: nowrap;
}
.c-chat > .chat > .message > .username > img {
  margin-right: 4px;
}
.c-chat > .chat > .message > .content {
  margin-left: 8px;
  display: flex;
  align-items: center;
}
.c-chat > .chat > .message > .content > p {
  margin: 0;
  font-weight: 400;
  font-size: 14px;
}
.c-chat > .chat > .message > .content > img {
  margin-left: 4px;
}
.c-chat > .chat > .message:last-child {
  margin-bottom: 0;
}`,ts="/assets/star-solid-2aad3a37.svg",b1="/assets/star-border-30d5877f.svg",x1=V(({name$:e})=>(A(y1),l("div",{className:"c-chat",children:[l("img",{className:"star-top-right-small",src:ts,alt:""}),l("img",{className:"star-top-right-large",src:ts,alt:""}),l("img",{className:"star-bottom-right",src:b1,alt:""}),l("img",{className:"star-bottom-left",src:ts,alt:""}),l("div",{className:"header",children:[l("p",{children:"Top chat"}),l("img",{className:"down-arrow",src:d1,alt:"Down Arrow"}),l("img",{className:"more",src:p1,alt:""})]}),l("div",{className:"chat",children:[l("div",{className:"message",children:[l("div",{className:"username",children:[l("img",{src:h1,alt:"Lud Bud Flair"}),l("p",{className:"blue-gradient",children:"Austin:"})]}),l("div",{className:"content",children:l("p",{children:"well hello again"})})]}),l("div",{className:"message",children:[l("div",{className:"username",children:l("p",{className:"teal-red-gradient",children:"IAmRoot:"})}),l("div",{className:"content",children:l("img",{src:v1,alt:"Gachi Emote"})})]}),l("div",{className:"message",children:[l("div",{className:"username",children:[l("img",{src:m1,alt:"Coots Flair"}),l("p",{className:"pink",children:"Suop:"})]}),l("div",{className:"content",children:l("p",{children:"ty!"})})]}),l("div",{className:"message",children:[l("div",{className:"username",children:[l("img",{src:f1,alt:"Blossom Flair"}),l("p",{className:"blue-green",children:"Fyko:"})]}),l("div",{className:"content",children:l("p",{children:"yooooooooooooooo"})})]}),l("div",{className:"message",children:[l("div",{className:"username",children:l("p",{className:"purple",children:"123madskillz:"})}),l("div",{className:"content",children:[l("p",{children:"hihihihi"}),l("img",{src:g1,alt:"Stanz Sheesh"})]})]}),l("div",{className:"message",children:[l("div",{className:"username",children:l("p",{className:"teal",children:[e.get(),":"]})}),l("div",{className:"content",children:l("p",{children:"I just got Truffle!"})})]}),l("div",{className:"message",children:[l("div",{className:"username",children:l("p",{className:"green",children:"fay:"})}),l("div",{className:"content",children:l("p",{children:"poggies. DO THE DANCE!!!!!"})})]}),l("div",{className:"message",children:[l("div",{className:"username",children:l("p",{className:"orange",children:"Rachel:"})}),l("div",{className:"content",children:l("p",{children:"OMG!"})})]})]})]}))),zi=Ee(""),_1=V(()=>{A(u1);const{user:e}=jn(),{upsertUser:t}=_h(),{nextStep:n,completeStep:r}=Ci(),i=bi(),o=async()=>{const a=await t({input:{name:zi.peek()}},{url:ge()});a.error?(alert("There was an error saving your profile"),console.error("Error saving profile",a.error)):(r(),i({to:n()}))};return e?(te(()=>{zi.set(e.name)},[e]),l("div",{className:"p-setup-profile t-centered-page",children:[l("div",{className:"onboard-header",children:[l("h1",{children:"Youtube chat upgrade"}),l("p",{children:"Your Youtube chat is about to get upgraded with fun colors, flair, and EMOTES! What do you want to go by in chat?"})]}),l("div",{className:"container",children:[l("div",{className:"chat",children:[l("h2",{children:"Trufflefied Youtube chat Preview"}),l(x1,{name$:zi})]}),l("div",{className:"profile",children:[l("div",{className:"username",children:[l("label",{className:"t-label",children:"Chat username"}),l("input",{type:"text",className:"t-input",value:e.name,onInput:Pe(zi)})]}),l("button",{onClick:o,className:"t-button",children:"Save"})]})]})]})):l(j,{children:"Loading..."})}),w1=$`.p-livestream-preview > .container {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  gap: 32px;
}
.p-livestream-preview > .container > img {
  width: 100%;
  aspect-ratio: 100/67;
}
.p-livestream-preview > .container > .next-button {
  min-width: 150px;
  text-align: center;
  margin: auto;
}`,E1=()=>{A(w1);const{nextStep:e,completeStep:t}=Ci();return l("div",{className:"p-livestream-preview t-centered-page",children:[l("div",{className:"onboard-header",children:[l("h1",{children:"Livestream thumbnail"}),l("p",{children:"If a streamer you’re watching uses Truffle, you can see when they’re live while on their Youtube channel."})]}),l("div",{className:"container",children:[l("img",{src:"https://cdn.bio/assets/images/features/onboard/livestream_thumbnail.png",alt:""}),l(he,{to:e(),onClick:t,className:"t-button next-button",children:"Next"})]})]})},k1=$`.p-new-tab > .container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  gap: 32px;
}
.p-new-tab > .container > img {
  width: 100%;
  aspect-ratio: 800/479;
}
.p-new-tab > .container > .buttons {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.p-new-tab > .container > .buttons > .install-button {
  min-width: 150px;
  margin: auto;
}
.p-new-tab > .container > .buttons > .install-button:before {
  content: "";
  background-repeat: no-repeat;
  background-size: 1.5em;
  background-position: center;
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  margin-right: 0.5em;
  vertical-align: middle;
  background-image: url("https://cdn.bio/assets/icons/open_in_new.svg");
}
.p-new-tab > .container > .buttons > .skip-button {
  background: #3a3a3a;
  min-width: 150px;
  text-align: center;
}`,T1=()=>{A(k1);const{nextStep:e,completeStep:t}=Ci();return l("div",{className:"p-new-tab t-centered-page",children:[l("div",{className:"onboard-header",children:[l("h1",{children:"Truffle New Tab Extension"}),l("p",{children:"See your favorite Youtube and Twitch channels on your new tab. To enable this, install the separate new tab extension"})]}),l("div",{className:"container",children:[l("img",{src:"https://cdn.bio/assets/images/features/onboard/content_dash.png",alt:""}),l("div",{className:"buttons",children:[l("a",{href:"https://chrome.google.com/webstore/detail/truffle-new-tab-content-d/pmnmpgjfacmjcnfigcmgfipemjpggmeg?hl=en&authuser=0",target:"_blank",className:"t-button install-button",rel:"noreferrer",children:"Install new tab extension"}),l(he,{to:e(),onClick:t,className:"t-button skip-button",children:"Skip"})]})]})]})},An=[{id:"start",title:"Start",depends_on:[],path:"/getting-started/start",component:l1},{id:"chat-profile",title:"Chat Profile",depends_on:[],path:"/getting-started/chat-profile",component:_1},{id:"livestream-preview",title:"Livestream Preview",depends_on:["new-tab"],path:"/getting-started/livestream-preview",component:E1},{id:"new-tab",title:"New Tab",depends_on:[],path:"/getting-started/new-tab",component:T1}],Ih="truffle-onboard",wn=()=>{const e=mc(Ih);return e?JSON.parse(decodeURIComponent(e)):[]},Ii=e=>{const t=new Date;t.setFullYear(t.getFullYear()+1),Ss(Ih,encodeURIComponent(JSON.stringify(e)),{expires:t,path:"/"})},Ch=(e,t)=>{let n=[...t];e&&An.some(i=>i.id===e)&&!t.includes(e)&&(n=[...n,e]);const r=An.find(i=>!n.includes(i.id)&&i.depends_on.every(o=>n.includes(o)));return r?r.path:"/getting-started/finish"},Oh=e=>{const t=wn();t.includes(e)?console.log(`Step "${e}" already completed.`):(t.push(e),Ii(t),console.log(`Step "${e}" completed.`))},S1=e=>{const t=An.find(n=>n.path===e);if(t)return t.id},N1=e=>{let t=wn();t=t.filter(n=>n!==e),Ii(t)},Ah=()=>{Ii([])},$h=()=>wn(),I1=e=>An.filter(t=>!e.includes(t.id)),C1=()=>{wn().length===0&&Ii([])},Ci=()=>{const t=ip({}).href||"",n=S1(t);return{nextStep:()=>{const o=$h();return Ch(n,o)},completeStep:()=>{console.log("complete step",n),n&&Oh(n)}}},O1=()=>{Tr({type:Un.Toast,message:"This is a test toast",title:"Test Toast"})},A1=()=>{Tr({type:Un.Modal,message:"This is a test modal",title:"Test Toast",action(){console.log("action")},buttonText:"Test Button",subtitle:"This is a test subtitle",code:1234})},$1=()=>{Tr({type:Un.Page,message:"This is a test redirect error",title:"Test Page",action(){console.log("action")},buttonText:"Test Button",subtitle:"This is a test subtitle",code:1234})},Xu=Ee(!1),Qn=Ee(An[0].id),R1=V(()=>(console.log("errors",bn.get()),A(s1),l(j,{children:l("div",{className:"c-debug",children:[l("button",{onClick:()=>{O1(),console.log("errors",bn.get())},children:"Trigger Test Error"}),l("button",{onClick:()=>{A1()},children:"Trigger Test Modal"}),l("button",{onClick:()=>{$1()},children:"Trigger page error"}),l("div",{children:l("button",{className:"t-button",children:"Test Button"})}),l("div",{className:"input-field",children:[l("label",{htmlFor:"test",className:"t-label",children:"Test Label"}),l("input",{type:"text",name:"",id:"test",className:"t-input"})]}),l("div",{children:l("a",{href:"",className:"t-link",children:"Test Link"})}),l("div",{className:"onboard-test",children:[l("button",{onClick:()=>{console.log("Onboard Cookie",wn())},className:"t-button",children:"Get Cookie"}),l("button",{onClick:()=>{Ii([]),console.log("Set Cookie to empty array")},className:"t-button",children:"Set Cookie"}),l("button",{onClick:()=>{console.log("Next Path",Ch("chat-profile",wn()))},className:"t-button",children:"Get Next Path"}),l("select",{value:Qn.get(),onChange:e=>{var t;return Qn.set(((t=e.target)==null?void 0:t.value)||"")},children:An.map(e=>l("option",{value:e.id,children:e.title},e.id))}),l("button",{onClick:()=>{Oh(Qn.get()),console.log(`Completed ${Qn.get()} step`)},className:"t-button",children:"Complete Selected Step"}),l("button",{onClick:()=>{N1(Qn.get()),console.log(`Uncompleted ${Qn.get()} step`)},className:"t-button",children:"Uncomplete Selected Step"}),l("button",{onClick:()=>{Ah(),console.log("Cleared all steps")},className:"t-button",children:"Clear All Steps"}),l("button",{onClick:()=>{console.log("Completed Steps",$h())},className:"t-button",children:"Get Completed Steps"}),l("button",{onClick:()=>{console.log("Uncompleted Steps",I1(wn()))},className:"t-button",children:"Get Uncompleted Steps"}),l("button",{onClick:()=>{C1(),console.log("Initialized step array")},className:"t-button",children:"Initialize Step Array"})]}),l("div",{children:l("button",{className:"t-button",onClick:()=>{Xu.set(!Xu.get())},children:"toggle signup"})})]})}))),P1=new J({getParentRoute:()=>rt,path:"/debug",component:R1}),D1=$`.c-loading {
  background-image: url(https://cdn.bio/assets/images/features/sidebar/truffle-icon.svg);
  background-size: 100%;
  width: 48px;
  height: 48px;
  margin: auto;
  animation: loading 1s infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,Oi=()=>(A(D1),l("div",{className:"c-loading"})),L1=$`.c-member-edit-form {
  border: 1px solid black;
  margin-bottom: 5px;
  padding: 5px;
}`,M1=V(({member:e,roleList:t,orgId:n,onRolesUpdated:r})=>{A(L1);const i=K(""),o=!!i.get(),{orgUserRoleUpsert:a}=Lk(),s=async(p,d)=>{const{error:h}=await a({orgUserId:e.id,roleIds:p},{url:ge(),fetchOptions:{headers:{"x-org-id":n}}});h?console.error(h):(alert(d),r==null||r())},c=()=>{const p=i.peek();if(p==="null")return;const d=e.roleConnection.nodes.map(h=>h.id).concat(p);s(d,"Role added")},u=p=>{const d=e.roleConnection.nodes.map(h=>h.id).filter(h=>h!==p);s(d,"Role deleted")};return l("div",{className:"c-member-edit-form",children:[l("h3",{children:e.name}),l("div",{children:e.email}),l("h4",{children:"Roles"}),l("ul",{children:e.roleConnection.nodes.map(p=>l("li",{children:[l("span",{children:[p.name," "]}),l("button",{onClick:()=>u(p.id),children:"Delete"})]},p.id))}),l("div",{children:[l("select",{value:i.get(),onInput:Pe(i),children:[l("option",{disabled:!0,selected:!0,value:"",children:"Role"}),t.map(p=>l("option",{value:p.id,children:p.name},p.id))]}),l("button",{disabled:!o,onClick:c,children:"Add"})]})]})}),F1=V(({orgId:e})=>{const t=K(""),n=K(""),r=()=>{n.set(t.peek())},i=K(""),{orgUserList:o,roleList:a,fetching:s,error:c,refetch:u}=Dk({orgId:e,nameQueryStr:n.get(),roleId:i.get()});return s?l(Oi,{}):c?l("div",{children:["Error: ",l("pre",{children:c.message})]}):o&&a?l("div",{className:"c-org-user-list",children:[l("div",{children:[l("label",{children:"Filter by role "}),l("select",{value:i.get(),onInput:Pe(i),children:[l("option",{selected:!0,value:"",children:"All roles"}),a.map(p=>l("option",{value:p.id,children:p.name},p.id))]})]}),l("div",{children:l("label",{children:[l("strong",{children:"Search: "}),l("input",{type:"text",value:t.get(),onInput:Pe(t)}),l("button",{onClick:r,children:"Search"})]})}),l("ul",{children:o.map(p=>l("li",{children:l(M1,{orgId:e,member:p,roleList:a,onRolesUpdated:u})},p.id))})]}):l(j,{})}),U1=()=>{const{slug:e}=Et(),{org:t,fetching:n,error:r}=Ni({slug:e});return n?l("div",{children:"Loading..."}):r?l("div",{children:["Error: ",l("pre",{children:r.message})]}):t?l("div",{className:"p-member",children:[l("h1",{children:"Members"}),l(F1,{orgId:t.id})]}):l(j,{})},q1=new J({getParentRoute:()=>_n,path:"members",component:U1}),B1=["youtube","youtubeVideo","youtubeLive","youtubeLiveUpcoming","youtubeLiveNow","youtubeLiveVod","youtubeChatFrame","twitch","twitchEmbed","quickActions"],Rh=["published","disabled","experimental"],j1=B`
  query AppEmbedQuery($orgId: ID!, $contentPageType: String, $statuses: [String]) {
    embedConnection(input: { apiVersion: 2, orgId: $orgId, contentPageType: $contentPageType, statuses: $statuses }) {
      nodes {
        id
        url
        orgId
        slug
        minPlatformVersion
        maxPlatformVersion
        contentPageType
        packageId
        packageInstallId
        deviceType
        status
        defaultLayoutConfigSteps {
          action
          value
        }
      }
    }
  }
`,V1=B`
  mutation AppEmbedUpsertMutation($id: ID!, $url: String, $contentPageType: String, $status: String) {
    embedUpsert(input: { apiVersion: 2, id: $id, url: $url, contentPageType: $contentPageType, status: $status }) {
      embed {
        id
      }
    }
  }
`,z1=B`
  mutation AppEmbedDeleteMutation($id: ID!) {
    embedDelete(input: { id: $id }) {
      embed {
        id
      }
    }
  }
`;function H1({orgId:e,contentPageType:t}){const[{data:n,fetching:r,error:i}]=ut({query:j1,variables:{orgId:e,contentPageType:t,statuses:Rh},context:ce(()=>({url:ge()}),[])});return{embeds:ce(()=>n==null?void 0:n.embedConnection.nodes,[n]),fetching:r,error:i}}function W1(){const[e,t]=Fe(V1),[n,r]=Fe(z1);return{upsertEmbed:t,deleteEmbed:r}}const Ph=V(({value$:e})=>l("select",{value:e.get(),onInput:Pe(e),children:[l("option",{selected:!0,value:"all",children:"All"}),B1.map(t=>l("option",{value:t,children:t},t))]})),G1=$`.c-embed-edit-form > div {
  margin: 5px 0;
}
.c-embed-edit-form > .actions {
  display: flex;
  /**
   * this looks terrible, but this makes
   * the save button far enough away from
   * the delete button to avoid accidental
   * clicks on the delete button
   * justify-content: space-between; */
}`,Y1=V(({embed:e})=>{A(G1);const t=K(e.contentPageType),n=K(e.url),r=K(e.status),{upsertEmbed:i,deleteEmbed:o}=W1(),a=async()=>{const{error:c}=await i({id:e.id,contentPageType:t.peek(),url:n.peek(),status:r.peek()},{url:ge(),fetchOptions:{headers:{"x-org-id":e.orgId}}});c?(console.error(c),alert("Error saving embed")):alert("Embed saved")},s=async()=>{if(confirm("ARE YOU SURE you want to delete this embed? This cannot be undone! You probably want to disable the embed instead...")){const{error:c}=await o({id:e.id},{url:ge(),fetchOptions:{headers:{"x-org-id":e.orgId}}});c?(console.error(c),alert("Error deleting embed")):alert("Embed deleted")}};return l("div",{className:"c-embed-edit-form",children:[l("h3",{children:e.slug}),l("div",{children:[l("strong",{children:"ID: "}),l("span",{children:e.id})]}),l("div",{children:[l("strong",{children:"URL: "}),l("input",{type:"text",value:n.get(),onInput:Pe(n)})]}),l("div",{children:[l("strong",{children:"Content page type: "}),l(Ph,{value$:t})]}),l("div",{children:[l("strong",{children:"Status: "}),l("select",{value:r.get(),onInput:Pe(r),children:Rh.map(c=>l("option",{value:c,children:c},c))})]}),l("div",{className:"actions",children:[l("button",{onClick:a,children:"Save"}),l("button",{onClick:s,children:"Delete"})]})]})}),Q1=$`.c-embed-list > ul > .embed-list-item {
  border: 1px solid black;
  margin-bottom: 5px;
  padding: 5px;
}`,K1=({orgId:e,contentPageType:t})=>{A(Q1);const{embeds:n,fetching:r,error:i}=H1({orgId:e,contentPageType:t&&t!=="all"?t:void 0});return r?l("div",{className:"c-embed-list",children:"Loading..."}):i?l("div",{className:"c-embed-list",children:["Error: ",i.message]}):n?l("div",{className:"c-embed-list",children:l("ul",{children:n.map(o=>l("li",{className:"embed-list-item",children:l(Y1,{embed:o})},o.id))})}):l(j,{})},J1=V(()=>{const e=K("all"),{slug:t}=Et(),{org:n,fetching:r,error:i}=Ni({slug:t});return r?l("div",{children:"Loading..."}):i?l("div",{children:["Error: ",l("pre",{children:i.message})]}):n?l("div",{className:"p-org-embed",children:[l("h1",{children:"Embeds"}),l("div",{children:[l("label",{children:"Content page type "}),l(Ph,{value$:e}),l(K1,{contentPageType:e.get(),orgId:n.id})]})]}):l(j,{})}),X1=new J({getParentRoute:()=>_n,path:"embeds",component:J1}),Z1=({orgId:e})=>{const{roles:t,fetching:n,error:r}=rT(e);return n?l("div",{children:"Loading..."}):r?l("div",{children:["Error: ",l("pre",{children:r.message})]}):t?l("div",{className:"c-org-roles-list",children:[l("ul",{children:t.map(i=>l(eT,{role:i,orgId:e},i.id))}),l(tT,{orgId:e})]}):l(j,{})},eT=({role:e,orgId:t})=>{const{executeDeleteRoleMutation:n}=oT(),r=async()=>{if(!confirm(`Are you sure you want to delete role ${e.name}?`))return;const{error:o}=await n({roleId:e.id},{url:ge(),fetchOptions:{headers:{"x-org-id":t}}});alert(o?`Error deleting role: ${o.message}`:`Role deleted: ${e.name}`)};return l("li",{className:"c-role-list-item",children:l("p",{children:[l("div",{children:[l("strong",{children:"ID:"})," ",e.id]}),l("div",{children:[l("strong",{children:"Name:"})," ",e.name]}),l("div",{children:[l("strong",{children:"Slug:"})," ",e.slug]}),l("button",{onClick:r,children:"Delete"})]})})},tT=V(({orgId:e})=>{const t=K(""),{executeRoleUpsertMutation:n}=sT(),r=async()=>{const{error:i}=await n({input:{name:t.peek()}},{url:ge(),fetchOptions:{headers:{"x-org-id":e}}});i?alert(`Error adding role: ${i.message}`):t.set("")};return l("div",{className:"c-new-role",children:[l("h3",{children:"New Role"}),l("div",{children:l("label",{children:["Name:",l("input",{type:"text",value:t.get(),onInput:Pe(t)})]})}),l("div",{children:l("button",{disabled:!t,onClick:r,children:"Add"})})]})}),nT=B`
  query AppOrgRoleConnectionQuery {
    roleConnection(input: {}) {
      nodes {
        id
        name
        slug
      }
    }
  }
`;function rT(e){const[t]=ut({query:nT,variables:{orgId:e},context:ce(()=>({url:ge(),fetchOptions:{headers:{"x-org-id":e}}}),[e])}),{data:n,fetching:r,error:i}=t;return{roles:n==null?void 0:n.roleConnection.nodes,fetching:r,error:i}}const iT=B`
  mutation AppOrgRoleDeleteMutation($roleId: ID!) {
    roleDeleteById(input: { id: $roleId }) {
      role {
        id
      }
    }
  }
`;function oT(){const[e,t]=Fe(iT);return{result:e,executeDeleteRoleMutation:t}}const aT=B`
  mutation AppOrgRoleUpsertMutation($input: RoleUpsertInput!) {
    roleUpsert(input: $input) {
      role {
        id
      }
    }
  }
`;function sT(){const[e,t]=Fe(aT);return{result:e,executeRoleUpsertMutation:t}}const cT=()=>{const{slug:e}=Et(),{org:t,fetching:n,error:r}=Ni({slug:e});return n?l("div",{children:"Loading..."}):r?l("div",{children:["Error: ",l("pre",{children:r.message})]}):t?l("div",{className:"p-roles",children:[l("h1",{children:"Roles"}),l(Z1,{orgId:t.id})]}):l(j,{})},lT=new J({getParentRoute:()=>_n,path:"roles",component:cT}),uT="modulepreload",dT=function(e){return"/"+e},Zu={},Ai=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=dT(o),o in Zu)return;Zu[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const d=i[p];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${s}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":uT,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((p,d)=>{u.addEventListener("load",p),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o})},$n=new J({getParentRoute:()=>en,path:"/sidebar",component:yi(()=>Ai(()=>import("./sidebar-c6185a78.js"),[]).then(({SidebarPage:e})=>({default:e})))}),pT=new J({getParentRoute:()=>$n,path:"about",component:yi(()=>Ai(()=>import("./about-0298e7d5.js"),[]).then(({AboutPage:e})=>({default:e})))}),wa=new J({getParentRoute:()=>$n,path:"creator/$orgSlug",component:yi(()=>Ai(()=>import("./creator.layout-660b5286.js"),[]).then(({SidebarCreatorLayout:e})=>({default:e})))}),Dh=Ot(null),Lh=({context:e})=>l(Dh.Provider,{value:e,children:l(Pn,{})});function ht(){return Lt(Dh)}const fT=$`.p-sidebar_p-creator_p-home {
  flex: 1;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p-sidebar_p-creator_p-home > .scrollable {
  width: 100%;
  flex: 1;
  overflow: scroll;
}
.p-sidebar_p-creator_p-home > .scrollable > .banner {
  height: 178px;
  background-color: #000;
  background-size: auto 100%;
  background-position: center;
  position: relative;
}
.p-sidebar_p-creator_p-home > .scrollable > .banner > .header {
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  background: linear-gradient(180deg, #171717 0%, transparent 100%);
}
.p-sidebar_p-creator_p-home > .scrollable > .banner > .actions {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  display: flex;
  gap: 12px;
}
.p-sidebar_p-creator_p-home > .follow {
  margin-top: auto;
  width: 100%;
}`;$`.p-sidebar_p-creator_c-follow {
  width: 100%;
  padding: 20px 12px;
  box-sizing: border-box;
}
.p-sidebar_p-creator_c-follow > .icon {
  width: 56px;
  height: 56px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  margin-bottom: 12px;
  background-color: #333;
  background-size: 100%;
}
.p-sidebar_p-creator_c-follow > .icon::after {
  content: " ";
  position: absolute;
  background-image: url("https://cdn.bio/assets/images/features/sidebar/follow-outline.svg");
  background-size: 100% auto;
  width: 74px;
  height: 100%;
  top: 0;
  left: -8px;
}
.p-sidebar_p-creator_c-follow > .description {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
}
.p-sidebar_p-creator_c-follow > .button {
  width: 100%;
  outline: none;
  border: none;
  background: #f357a1;
  color: #fff;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: block;
  cursor: pointer;
}
.p-sidebar_p-creator_c-follow > .button:hover {
  background: rgba(243, 87, 161, 0.8666666667);
}`;const hT=$`.p-sidebar_p-creator_p-settings {
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
}
.p-sidebar_p-creator_p-settings > .actions {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  display: flex;
  gap: 12px;
}
.p-sidebar_p-creator_p-settings > .unfollow {
  text-decoration: underline;
  cursor: pointer;
}`,mT=B`
  mutation ($input: OrgMemberDeleteInput!) {
    orgMemberDelete(input: $input) {
      orgMember {
        id
      }
    }
  }
`,gT=()=>{A(hT);const{org:e}=ht(),t=Xt(),[n,r]=Fe(mT),i=async()=>{await r({input:{orgId:e.id}}),t.navigate({from:$n.path,to:"/sidebar"})};return l("div",{className:"p-sidebar_p-creator_p-settings",children:[l("div",{className:"actions",children:l(he,{className:"close",from:"/",to:`${$n.path}`,children:l(vT,{})})}),l("h2",{className:"title",children:"Settings"}),l("div",{className:"unfollow",onClick:i,children:"Unfollow"})]})},vT=()=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M15.8333 5.34175L14.6583 4.16675L9.99999 8.82508L5.34166 4.16675L4.16666 5.34175L8.82499 10.0001L4.16666 14.6584L5.34166 15.8334L9.99999 11.1751L14.6583 15.8334L15.8333 14.6584L11.175 10.0001L15.8333 5.34175Z",fill:"white"})}),Mh=new J({getParentRoute:()=>wa,path:"/settings",component:gT}),yT=$`.p-sidebar_p-creator_c-live {
  width: 100%;
  background: #171717;
}
.p-sidebar_p-creator_c-live > .container {
  padding: 16px 12px 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.p-sidebar_p-creator_c-live > .container > .live-info {
  min-width: 0;
}
.p-sidebar_p-creator_c-live > .container > .live-info > .platform {
  position: relative;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 2px;
}
.p-sidebar_p-creator_c-live > .container > .live-info > .platform:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -12px;
  width: 7px;
  height: 7px;
  background-color: #e53333;
  border-radius: 50%;
  transform: translateY(-50%);
}
.p-sidebar_p-creator_c-live > .container > .live-info > .title {
  margin: 0 0 2px 0;
  font-weight: 500;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.p-sidebar_p-creator_c-live > .container > .live-info > .category {
  font-weight: 400;
  margin: 0 0 2px 0;
  margin-top: 2px;
  font-size: 12px;
  color: #b9b9b9;
}
.p-sidebar_p-creator_c-live > .container > .live-info > .view-count {
  color: #d33e3e;
  font-weight: 400;
  font-size: 12px;
}
.p-sidebar_p-creator_c-live > .container > .live-info > .view-count:before {
  content: "";
  position: relative;
  background-image: url("https://cdn.bio/assets/icons/view-count.svg");
  width: 12px;
  height: 12px;
  display: inline-block;
  margin-right: 4px;
}
.p-sidebar_p-creator_c-live > .container > .watch-now-button {
  flex-shrink: 0;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 12px;
  border: 1px solid #e53333;
  border-radius: 4px;
  padding: 6px 10px 7px 10px;
  transition: background 0.2s ease-in-out;
}
.p-sidebar_p-creator_c-live > .container > .watch-now-button:hover {
  cursor: pointer;
  background: #e53333;
}`,bT=({platform:e,title:t,url:n,category:r,viewCount:i})=>{A(yT);const o=new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short"}).format(i);return l("div",{className:"p-sidebar_p-creator_c-live",children:l("div",{className:"container",children:[l("div",{className:"live-info",children:[l("div",{className:"platform",children:["live on ",e]}),l("h2",{className:"title",title:t,children:t}),r&&l("h3",{className:"category",children:r}),l("div",{className:"view-count",children:o})]}),l("a",{href:n,className:"watch-now-button",target:"_top",rel:"noreferrer",children:"Watch"})]})})},xT=$`.p-sidebar_p-creator_c-socials {
  width: 100%;
  background: #262626;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.p-sidebar_p-creator_c-socials > .socials {
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}
.p-sidebar_p-creator_c-socials > .socials > .social {
  width: 32px;
  height: 32px;
  background-size: 100%;
}`,_T={twitch:"https://cdn.bio/assets/icons/global/light/twitch.svg",youtube:"https://cdn.bio/assets/icons/global/light/youtube.svg",twitter:"https://cdn.bio/assets/icons/global/light/twitter.svg",instagram:"https://cdn.bio/assets/icons/global/light/instagram.svg",tiktok:"https://cdn.bio/assets/icons/global/light/tiktok.svg",discord:"https://cdn.bio/assets/icons/global/light/discord.svg"},wT=({socials:e})=>(A(xT),e?l("div",{className:"p-sidebar_p-creator_c-socials",children:l("div",{className:"socials",children:Object.keys(e).map(t=>{const n=t;return l("a",{className:"social",href:e[n],target:"_blank",rel:"noopener noreferrer",style:{backgroundImage:`url(${_T[n]})`}},n)})})}):l(j,{})),ET=$`.p-sidebar_p-creator_c-recent-videos {
  width: 100%;
}
.p-sidebar_p-creator_c-recent-videos > .container > .title {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  padding: 12px 12px 4px 12px;
}
.p-sidebar_p-creator_c-recent-videos > .container > .videos {
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
}`,kT=$`.p-sidebar_p-creator_c-recent-videos_c-recent-video {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  color: #fff;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video:hover {
  background: #333;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .thumbnail {
  width: 128px;
  aspect-ratio: 16/9;
  margin-right: 8px;
  flex-shrink: 0;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .info {
  flex-direction: column;
  display: flex;
  min-width: 0;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .info > .title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 2px;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .info > .author {
  color: #a8a8a8;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .info > .metadata {
  display: flex;
  font-size: 12px;
  font-weight: 400;
  color: #a8a8a8;
  margin-top: auto;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .info > .metadata > .views {
  font-weight: 400;
  margin-right: 4px;
}
.p-sidebar_p-creator_c-recent-videos_c-recent-video > .info > .metadata > .date {
  font-weight: 400;
  margin-left: 4px;
}`,TT=V(({channelPostsWithChannel:e})=>(A(ET),l("div",{className:"p-sidebar_p-creator_c-recent-videos",children:l("div",{className:"container",children:[l("h2",{className:"title",children:"Recent Videos"}),l("div",{className:"videos",children:e.map(t=>l(ST,{channelPostWithChannel:t},t.id))})]})}))),ST=({channelPostWithChannel:e})=>{var n;A(kT);const t=e.data.viewCount==null?0:new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short"}).format(e.data.viewCount);return l("a",{className:"p-sidebar_p-creator_c-recent-videos_c-recent-video",href:e.data.url,title:e.title,target:"_top",rel:"noreferrer",children:[l("img",{className:"thumbnail",src:(n=e.data)==null?void 0:n.thumbnailFileUrl,alt:e.title}),l("div",{className:"info",children:[l("div",{className:"title",children:e.title}),l("a",{href:e.channel.data.url,className:"author",target:"_top",children:e.channel.name||e.channel.sourceName}),l("div",{className:"metadata",children:[l("div",{className:"views",children:[t," views"]}),l("div",{children:" · "}),l("div",{className:"date",children:Ub(e.postTime||"")})]})]})]})};function En({query:e,variables:t,pause:n,opts:r}){const i=K(!!n),o=K(t);te(()=>{t&&o.set(t),n!==i.get()&&i.set(!!n)},[n,JSON.stringify(t)]);const{operationResult$:a,data$:s,error$:c,reexecute:u}=ce(()=>Dc({query:e,variables$:o,isPaused$:i,opts:r}),[]);return[{operationResult$:a,data$:s,error$:c},u]}function Dc({query:e,variables:t,variables$:n,isPaused$:r,opts:i}){const o=an().gqlClient,a=Ee(),s=Ee(),c=Ee();let u;const p=d=>{u==null||u.unsubscribe(),u=Ko(o.executeQuery(ar(e,d),i),_t(h=>{a.set(Oo(h)),s.set(h.data),c.set(h.error)}))};return n||r?je(()=>({isPaused:r?r==null?void 0:r.get():!1,variables:n?n.get():t})).onChange(({value:{variables:h,isPaused:f}})=>{!f&&p(h)},{immediate:!0,initial:!0}):p(t),{operationResult$:a,data$:s,error$:c,reexecute:({requestPolicy:d}={})=>{const h=a.get().operation;h.context.requestPolicy=d||h.context.requestPolicy,o.reexecuteOperation(h)}}}async function ze({query:e,variables:t,context:n}){return an().gqlClient.mutation(e,t,n).toPromise()}const Lc=Ee();gb(Lc,{local:"lastReadChannelPostIds"});const NT=1e3*60*3,IT=B`
  query @cache {
    me {
      id
      orgMemberConnection {
        nodes {
          id
          org {
            id
            slug
            name
            channelConnection {
              nodes {
                id
                sourceType
                sourceId
                data
              }
            }
          }
        }
      }
    }
  }
`,CT=B`
  query ($input: ChannelInput) {
    channel(input: $input) {
      id
      orgId
      sourceType
      sourceId
      sourceName
      data
      org {
        id
        name
        slug
      }
    }
  }
`;function gC(){return ce(()=>OT(),[])}let ed;function OT(){const e=h=>{t.set(h)},t=Ee(at.pageInfoGet(e)),n=at.environmentGetInfo().catch(()=>null),r=Ee(Promise.race([n,new Promise(h=>setTimeout(()=>h(null),500))])),i=je(()=>{var x;const h=r.get(),f=h&&((x=h.truffleVersion)==null?void 0:x.split(".")),m=f&&f[0]==="4"&&f[1]==="3"&&f[2]<="3";if(h===null||(h==null?void 0:h.isExperimental)&&m||(h==null?void 0:h.isExperimentalSidebar))return Dc({query:IT})}),o=je(()=>{const{data$:h,reexecute:f}=i.get()||{};return h&&f&&(clearInterval(ed),ed=setInterval(()=>{var g,x,v;const m=h.get();m&&((v=(x=(g=m.me)==null?void 0:g.orgMemberConnection)==null?void 0:x.nodes)==null?void 0:v.length)===0||f({requestPolicy:"network-only"})},NT)),h}),a=je(()=>{const h=t.get();return h!=null&&h.contentPageOwnerRef?an().gqlClient.query(CT,{input:{contentPageType:h==null?void 0:h.contentPageType,contentPageOwnerRef:h==null?void 0:h.contentPageOwnerRef,shouldCreateOrg:!0}}).toPromise().then(f=>{var m;return(m=f.data)==null?void 0:m.channel}):void 0});a.onChange(({value:h,getPrevious:f})=>{const m=f();Vs.state.matches.find(x=>x.routeId===wa.id)&&(h||m)&&Vs.navigate({to:"/sidebar"})});const s=B`
    query GetEmbedConnection($input: EmbedConnectionInput) {
      embedConnection(input: $input) {
        nodes {
          id
          name
          iconUrl
          slug
          orgId
          url
          packageId
          packageInstallId
          isLoginRequired
          windowProps
          defaultLayoutConfigSteps {
            action
            value
          }
          iframeUrl
          sourceType
          sourceId
          defaultStyles
          parentQuerySelector
        }
      }
    }
  `,c=je(async()=>{const h=t.get();if(!(h!=null&&h.contentPageOwnerRef))return[];const f=await n;return an().gqlClient.query(s,{input:{apiVersion:2,contentPageType:h.contentPageType,contentPageOwnerRef:h.contentPageOwnerRef,deviceType:(f==null?void 0:f.deviceType)||"desktop",statuses:f!=null&&f.isExperimental?["experimental","published"]:["published"],truffleVersion:f==null?void 0:f.truffleVersion}},{url:ge()}).toPromise().then(m=>{var g,x;return((x=(g=m.data)==null?void 0:g.embedConnection)==null?void 0:x.nodes)||[]})}),u=je(async()=>(t.get(),at.embedGetDevEmbeds())),p=je(async()=>[...c.get()||[],...u.get()||[]]);p.onChange(({value:h})=>{at.embedSetAll(h)});const d=B`
    mutation DatapointIncrementUnique($input: DatapointIncrementUniqueInput!) {
      datapointIncrementUnique(input: $input) {
        isUpdated
      }
    }
  `;return at.embedOnFocus(async h=>{an().gqlClient.mutation(d,{input:{metricSlug:"embed-engaged-users",orgId:h.orgId,dimensionValues:{embed:h.slug||h.id}}},{url:ge()}).toPromise()}),{orgMembersResponse$:o,channel$:a,embeds$:p,lastReadChannelPostIds$:Lc,environmentInfo$:r}}const AT=()=>{var a,s,c,u,p,d,h,f,m,g,x,v,b,y,_,w,E,k,T,R;A(fT);const{org:e,orgMember:t}=ht(),n=(s=(a=e.channelConnection)==null?void 0:a.nodes)==null?void 0:s.find(P=>P.sourceType==="youtube"),r=(u=(c=e.channelConnection)==null?void 0:c.nodes)==null?void 0:u.find(P=>{var F;return(F=P.data)==null?void 0:F.isLive}),i=(d=(p=r==null?void 0:r.channelPostConnection)==null?void 0:p.nodes)==null?void 0:d.find(P=>{var F;return(F=P.data)==null?void 0:F.isLive}),o=(f=(h=e.channelConnection)==null?void 0:h.nodes)==null?void 0:f.filter(P=>P.sourceType!=="twitch"&&P.sourceType!=="patreon").map(P=>{var F;return(F=P.channelPostConnection)==null?void 0:F.nodes.map(D=>({...D,channel:P}))}).filter(Boolean).flat().sort((P,F)=>{const D=new Date(P.postTime);return new Date(F.postTime).getTime()-D.getTime()});return te(()=>{var F,D;const P={};(D=(F=e.channelConnection)==null?void 0:F.nodes)==null||D.forEach(H=>{var I,M,O;P[H.id]=(O=(M=(I=H.channelPostConnection)==null?void 0:I.nodes)==null?void 0:M[0])==null?void 0:O.id}),Lc.set(H=>({...H,...P}))},[e.id]),l("div",{className:"p-sidebar_p-creator_p-home",children:[l("div",{className:"scrollable",children:[l("div",{className:"banner",style:{backgroundImage:`url(${(v=(x=(g=(m=e.channelConnection)==null?void 0:m.nodes)==null?void 0:g[0])==null?void 0:x.data)==null?void 0:v.bannerFileUrl})`},children:[l("div",{className:"header",children:e.name}),l("div",{className:"actions",children:[l(he,{className:"settings",to:`${Mh.path}`,children:l($T,{})}),l(he,{className:"close",from:"/",to:`${$n.path}`,children:l(RT,{})})]})]}),i?l(bT,{platform:r==null?void 0:r.sourceType,title:((y=(b=i==null?void 0:i.data)==null?void 0:b.liveData)==null?void 0:y.title)||"",url:((w=(_=i==null?void 0:i.data)==null?void 0:_.liveData)==null?void 0:w.url)||"",category:(k=(E=i==null?void 0:i.data)==null?void 0:E.liveData)==null?void 0:k.category,viewCount:((R=(T=i==null?void 0:i.data)==null?void 0:T.liveData)==null?void 0:R.ccv)||0}):void 0,l(wT,{socials:e.socials}),n?l(TT,{channelPostsWithChannel:o}):void 0]}),t!=null&&t.id?void 0:l("div",{className:"follow",children:l(Nh,{org:e,followToText:"add to sidebar and get updates"})})]})},$T=()=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M15.95 10.7833C15.9833 10.5333 16 10.275 16 10C16 9.73333 15.9833 9.46667 15.9417 9.21667L17.6333 7.9C17.7833 7.78333 17.825 7.55833 17.7333 7.39167L16.1333 4.625C16.0333 4.44167 15.825 4.38333 15.6417 4.44167L13.65 5.24167C13.2333 4.925 12.7917 4.65833 12.3 4.45833L12 2.34167C11.9667 2.14167 11.8 2 11.6 2H8.39999C8.19999 2 8.04166 2.14167 8.00832 2.34167L7.70832 4.45833C7.21666 4.65833 6.76666 4.93333 6.35832 5.24167L4.36666 4.44167C4.18332 4.375 3.97499 4.44167 3.87499 4.625L2.28332 7.39167C2.18332 7.56667 2.21666 7.78333 2.38332 7.9L4.07499 9.21667C4.03332 9.46667 3.99999 9.74167 3.99999 10C3.99999 10.2583 4.01666 10.5333 4.05832 10.7833L2.36666 12.1C2.21666 12.2167 2.17499 12.4417 2.26666 12.6083L3.86666 15.375C3.96666 15.5583 4.17499 15.6167 4.35832 15.5583L6.34999 14.7583C6.76666 15.075 7.20832 15.3417 7.69999 15.5417L7.99999 17.6583C8.04166 17.8583 8.19999 18 8.39999 18H11.6C11.8 18 11.9667 17.8583 11.9917 17.6583L12.2917 15.5417C12.7833 15.3417 13.2333 15.075 13.6417 14.7583L15.6333 15.5583C15.8167 15.625 16.025 15.5583 16.125 15.375L17.725 12.6083C17.825 12.425 17.7833 12.2167 17.625 12.1L15.95 10.7833ZM9.99999 13C8.34999 13 6.99999 11.65 6.99999 10C6.99999 8.35 8.34999 7 9.99999 7C11.65 7 13 8.35 13 10C13 11.65 11.65 13 9.99999 13Z",fill:"white"})}),RT=()=>l("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l("path",{d:"M15.8333 5.34175L14.6583 4.16675L9.99999 8.82508L5.34166 4.16675L4.16666 5.34175L8.82499 10.0001L4.16666 14.6584L5.34166 15.8334L9.99999 11.1751L14.6583 15.8334L15.8333 14.6584L11.175 10.0001L15.8333 5.34175Z",fill:"white"})}),PT=new J({getParentRoute:()=>wa,path:"/",component:AT}),DT=new J({getParentRoute:()=>$n,path:"follow",component:yi(()=>Ai(()=>import("./follow-96dc01dc.js"),[]).then(({FollowPage:e})=>({default:e})))}),LT=$`.c-edit-org-user-form > .heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.c-edit-org-user-form > .form-field-container {
  display: flex;
  justify-content: space-between;
}
.c-edit-org-user-form > .form-field-container > input {
  margin: 0px;
  padding: 0px;
  background: none;
  color: white;
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.08px;
}`,MT=V(({orgUser:e})=>{A(LT);const t=K(e.name),n=K(e.bio),r=ce(()=>e.roleConnection.nodes.some(a=>a.slug==="admin"),[e]),{upsertOrgUser:i}=wh();if(!e)return l("div",{children:"Missing orgUser"});const o=async()=>{const a=await i({input:{orgId:e.org.id,name:t.peek(),bio:n.peek()}},{url:ge()});a.error?(alert("There was an error saving your profile"),console.error("Error saving profile",a.error)):alert("Profile saved!")};return e.org?l("div",{className:"c-edit-org-user-form",children:[l("div",{className:"heading",children:[l("h2",{children:[e.org.name," community settings"]}),r&&l("div",{children:l(he,{className:"t-button",to:"/creator/$slug/home",params:{slug:e.org.slug},children:"Dashboard"})})]}),l("h3",{className:"t-caps-title",children:"Display name"}),l("div",{className:"form-field-container",children:[l("input",{placeholder:"no display name set",type:"text",value:t.get(),onInput:Pe(t)}),l("button",{className:"t-button-dark",onClick:o,children:"Save"})]}),l("div",{className:"dev-info",children:[l("h3",{className:"t-caps-title",children:"dev info"}),"Org ID: ",e.org.id,l("br",{}),"Slug: ",e.org.slug]})]}):l("div",{className:"c-edit-org-user-form",children:"Missing org!"})}),FT=$`.c-join-org-form {
  padding: 5px;
  max-width: 300px;
}`,UT=()=>{A(FT);const e=K(""),{upsertOrgUser:t}=wh(),n=async()=>{const{data:r,error:i}=await t({input:{orgId:e.peek()}},{url:ge()});alert(i?i.message:r?`Successfully joined ${r.orgUserUpsert.orgUser.org.name}!`:"Unknown error")};return l("div",{className:"c-join-org-form",children:[l("h2",{children:"Join org"}),l("div",{children:[l("label",{children:"Org ID: "}),l("input",{type:"text",value:e.get(),onInput:Pe(e)}),l("button",{onClick:n,children:"Join"})]})]})},qT=$`.p-org-profile {
  display: flex;
}
.p-org-profile > .creator-list-sidebar {
  position: sticky;
  top: 0px;
  width: 240px;
  padding-top: 20px;
  border-right: 1px solid #2d2d2d;
  height: 100vh;
}
.p-org-profile > .creator-list-sidebar > .t-caps-title {
  margin-left: 12px;
  margin-bottom: 20px;
}
.p-org-profile > .creator-list-sidebar > .creator-item {
  margin-left: 12px;
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 24px;
  cursor: pointer;
}
.p-org-profile > .creator-list-sidebar > .creator-item.selected {
  color: var(--primary, #f357a1);
}
.p-org-profile > .creator-list-sidebar > .creator-item.selected::before {
  content: " ";
  position: absolute;
  left: 2px;
  background: var(--primary, #f357a1);
  width: 4px;
  height: 24px;
  border-radius: 0px 4px 4px 0px;
  transform: translate(-50%, 0%);
}
.p-org-profile > .per-org-settings {
  flex: 1 1 0;
  margin: 12px 0px;
  margin-left: 40px;
}
.p-org-profile > .per-org-settings > .t-caps-title {
  margin: 7px 0px;
  margin-bottom: 4px;
}`,BT=V(()=>{A(qT);const e=K(0),{user:t}=jn();if(!t)return l(j,{children:"Loading..."});const n=t.orgUsers.nodes[e.get()];return l("div",{className:"p-org-profile",children:[l("div",{className:"creator-list-sidebar",children:[l("h3",{className:"t-caps-title",children:["My communities (",t.orgUsers.nodes.length,")"]}),t.orgUsers.nodes.map((r,i)=>r.org?l("div",{className:`creator-item ${e.get()===i?"selected":""}`,onClick:()=>e.set(i),children:r.org.name||r.org.slug||r.org.id},r.org.id):void 0)]}),l("div",{className:"per-org-settings",children:[l(MT,{orgUser:n}),l(UT,{})]})]})}),jT=new J({getParentRoute:()=>_a,path:"/orgs",component:BT}),VT=$`.c-edit-me-form {
  max-width: 440px;
  margin: 12px 0px;
  margin-bottom: 30px;
}
.c-edit-me-form > .form-field-container {
  display: flex;
  justify-content: space-between;
}
.c-edit-me-form > .form-field-container > input {
  margin: 0px;
  padding: 0px;
  background: none;
  color: white;
  border: none;
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.08px;
}
.c-edit-me-form > .t-divider {
  margin: 18px 0px;
}`,zT=V(({user:e})=>{A(VT);const{upsertUser:t}=_h(),n=K(e.name),r=async()=>{const i=await t({input:{name:n.peek()}},{url:ge()});i.error?(alert("There was an error saving your profile"),console.error("Error saving profile",i.error)):alert("Profile saved!")};return l("div",{className:"c-edit-me-form",children:[l("h3",{className:"t-caps-title",children:"Display name"}),l("div",{className:"form-field-container",children:[l("input",{className:"t-input",placeholder:"no display name set",type:"text",value:n.get(),onInput:Pe(n)}),l("button",{className:"t-button-dark",onClick:r,children:"Save"})]}),l("div",{className:"t-divider"}),l("h3",{className:"t-caps-title",children:"Email:"}),l("div",{className:"form-field-container",children:l("input",{className:"t-input",placeholder:"not connected to email",type:"text",value:e.email,disabled:!0})})]})}),Mc="/assets/close-cc90917c.svg",HT=$`.c-connection-form {
  border: solid 1px white;
  border-radius: 4px;
  display: flex;
  spacing: 10px;
  margin: 10px 0px;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
}
.c-connection-form > .icon {
  margin: 0px;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}
.c-connection-form > .text-container {
  flex-grow: 1;
  margin-left: 24px;
  letter-spacing: 0.5px;
}
.c-connection-form > .text-container > .connected {
  color: #38f155;
  font-weight: 400;
  font-size: 12px;
}
.c-connection-form > .text-container > .connection-name > a,
.c-connection-form > .text-container > .connection-name > a:active {
  font-size: 16px;
  weight: 500;
  color: white;
}
.c-connection-form > .text-container > .connection-name > a:visited {
  color: #9f9f9f;
}
.c-connection-form .delete-connection {
  cursor: pointer;
  margin: 0;
  padding: 0;
  margin-right: 12px;
  background: none;
  border: none;
  height: 100%;
}
.c-connection-form .delete-connection > img {
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;
}
.c-connection-form.youtube {
  border: 1px solid #eb4433;
}
.c-connection-form.youtube > .icon {
  background: #eb4433;
  background-image: url("https://cdn.bio/assets/icons/global/light/youtube.svg");
  background-position: center;
  background-size: 100% 100%;
}
.c-connection-form.twitch {
  border: 1px solid #925aef;
}
.c-connection-form.twitch > .icon {
  background: #925aef;
  background-image: url("https://cdn.bio/assets/icons/global/light/twitch.svg");
  background-position: center;
  background-size: 100% 100%;
}
.c-connection-form.discord {
  border: 1px solid #586aea;
}
.c-connection-form.discord > .icon {
  background: #586aea;
  background-image: url("https://cdn.bio/assets/icons/global/light/discord.svg");
  background-position: center;
  background-size: 100% 100%;
}`,WT=e=>{switch(e.sourceType){case"youtube":return l("a",{href:`https://www.youtube.com/channel/${e.sourceId}`,children:e.sourceId});default:return`ID: ${e.sourceId}`}},GT=({connection:e})=>{A(HT);const{deleteConnection:t}=Ik(),n=async()=>{if(confirm("Are you sure you want to delete this connection?")){const{error:r}=await t({id:e.id});r?(console.error(r),alert("An error occurred while deleting the connection.")):alert("Connection deleted.")}};return l("div",{className:`c-connection-form ${e.sourceType}`,children:[l("div",{className:"icon"}),l("div",{className:"text-container",children:[l("div",{className:"connection-name",children:WT(e)}),l("div",{className:"connected",children:"connected"})]}),l("button",{className:"delete-connection",onClick:n,children:l("img",{src:Mc})})]})},YT=({type:e,isIcon:t,callback:n,entityType:r,entityId:i})=>{const o={prompt:e==="login"?"none":"consent"};return l(Oc,{type:e,serviceName:"Discord",redirectUri:hc("discord"),isIcon:t,additionalParams:o,oauthFlow:UE,callback:n,entityType:r,entityId:i})},QT=$`.c-connect-account-buttons > .icon-container {
  display: flex;
  flex-direction: row;
  gap: 6px;
}`,KT=[gh,vh,YT],JT=({refetchUser:e,entityType:t,entityId:n})=>(A(QT),l("div",{className:"c-connect-account-buttons",children:l("div",{className:"icon-container",children:KT.map(r=>l(j,{children:[l(r,{type:"link",isIcon:!0,callback:i=>{e({requestPolicy:"network-only"})},entityType:t,entityId:n}),l("br",{})]}))})})),XT=$`.p-global-profile {
  margin-left: 40px;
  max-width: 680px;
  margin-top: 32px;
}
.p-global-profile > .connection-container {
  background: #1f1f1f;
  padding: 24px;
  padding-top: 12px;
}
.p-global-profile > .connection-container > h2 {
  color: #fff;
  font-size: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.p-global-profile > .connection-container > .t-divider {
  margin: 24px 0px;
}
.p-global-profile > .connection-container > .connection-list > ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}`,ZT=()=>{const{user:e,refetchUser:t}=jn();return A(XT),e?l("div",{className:"p-global-profile",children:[l("h2",{children:"My account"}),l(zT,{user:e}),l("div",{className:"connection-container",children:[l("h2",{children:"Connections"}),l(JT,{refetchUser:t}),l("div",{className:"t-divider"}),l(eS,{user:e})]})]}):l(j,{children:"Loading..."})},eS=({user:e})=>{const t=e.connectionConnection.nodes,n=Array.from(new Map(t.map(r=>[JSON.stringify([r.sourceId,r.sourceType]),r])).values());return l("div",{className:"connection-list",children:l("ul",{children:n.map(r=>l("li",{children:l(GT,{connection:r})}))})})},tS=new J({getParentRoute:()=>_a,path:"/global",component:ZT}),nS=$`.p-creator_p-shop {
  width: 100%;
  padding-left: 40px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.p-creator_p-shop > .header-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.p-creator_p-shop > .item-list-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.p-creator_p-shop > .item-list-container > .item-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}`;function Fh(e){return e.assets.find(t=>t.entityType==="countable"&&["org-member","user"].includes(t.senders[0].entityType))}const Uo="0d312ab0-5c27-11ee-b969-d9a937e22338",rS=xt()===er.Production?"f22e6f20-95a3-11ec-9b9a-db4521a06a30":"c803bc70-6bdb-11eb-a8c3-3441a1187d5e";function Fc(e,t){var o;const n=t==null?void 0:t.find(a=>a.sourceType===e.sourceType),r=n==null?void 0:n.urlTemplate;return r||console.warn(`No url template for emote ${e.sourceType}`),(o=e.urlParams)==null?void 0:o.reduce((a,s)=>a.replace("{}",s),r??"")}const Uh=[{sourceType:"custom",urlTemplate:"https://cdn.bio/ugc/emote/{}.large.png"},{sourceType:"bttv",urlTemplate:"https://cdn.betterttv.net/emote/{}/1x"},{sourceType:"7tv",urlTemplate:"https://cdn.7tv.app/emote/{}/{}"}],iS=$`.c-asset-count {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 4px 0 4px 0;
  color: var(--text-primary);
}`,oS=({assetTemplate:e})=>{var t;return A(iS),l("div",{className:"c-asset-count",children:[e.entityId===Uo?l("img",{className:"c-asset-count",src:"https://cdn.bio/assets/images/features/sparks/icon.svg"}):l("img",{className:"c-asset-count",src:"/channel-points.svg"}),(t=e.count)==null?void 0:t.toLocaleString()]})},aS=$`.c-shop-collectible {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  padding: 20px 10px;
  border-radius: 4px;
  min-width: 120px;
  max-width: 150px;
  background-color: #202020;
  /* FIXME: use theme colors */
}
.c-shop-collectible > .c-collectible {
  flex-direction: column;
  align-items: center;
}
.c-shop-collectible > .c-collectible > .img {
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgba(0, 0, 0, 0);
  margin: auto;
  margin-bottom: 8px;
  background-position: center;
}
.c-shop-collectible > .title {
  text-align: center;
  text-overflow: ellipsis;
}
.c-shop-collectible > .price-container {
  width: fit-content;
  margin-top: 4px;
  display: flex;
}
.c-shop-collectible > .price-container > .price-icon {
  height: 18px;
  width: 18px;
  margin-right: 6px;
}

.c-shop-item:hover {
  background-color: var(--hover-opacity);
}`,sS=({onClick:e,collectible:t})=>{var o,a,s,c,u;A(aS);const n=t.entityType==="emote"&&t.entity?Fc(t.entity,Uh):"",r=(c=(s=(a=(o=t==null?void 0:t.productVariantConnection)==null?void 0:o.nodes)==null?void 0:a[0])==null?void 0:s.action)==null?void 0:c.inputsTemplate,i=r?Fh(r):null;return l("div",{className:"c-shop-collectible",onClick:e,children:[l("div",{className:"c-collectible",children:[l("div",{className:"img",style:{backgroundImage:`url(${n})`}}),l("span",{className:"text-subtitle-2 title",children:(u=t.entity)==null?void 0:u.name})]}),i?l(oS,{assetTemplate:i}):void 0]})},cS=$`.c-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.c-modal > .curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  z-index: 1;
}
.c-modal > .modal {
  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-style: normal;
  line-height: 20px;
  border-radius: 8px;
  background: #222;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  padding: 24px;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.c-modal > .modal > .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-modal > .modal > .header > .title {
  margin: 0;
  font-size: 2em;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.c-modal > .modal > .header > .close-button {
  font-size: 24px;
  cursor: pointer;
}`,Uc=V(({children:e,closeModal:t,title:n,isVisible$:r,allowClose:i=!0})=>{A(cS);const o=i?t:void 0;return l(j,{children:r.get()&&l("div",{className:"c-modal",children:[l("div",{className:"curtain",onClick:o}),l("div",{className:"modal",children:[l("div",{className:"header",children:[l("h2",{className:"title",children:n||""}),i&&l("span",{className:"close-button",onClick:t,children:"×"})]}),e]})]})})}),lS=$`.c-creator-shop-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90vw;
  width: 478px;
  height: 100%;
  border-radius: 4px;
}
.c-creator-shop-modal > .button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
  margin-top: 40px;
}
.c-creator-shop-modal > .button-container > .choice-button {
  width: 100%;
}
.c-creator-shop-modal > .form-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-top: 40px;
}
.c-creator-shop-modal > .form-container > .price-wrapper {
  width: 160px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.c-creator-shop-modal > .form-container > .price-wrapper > .input {
  min-width: 100px;
}
.c-creator-shop-modal > .form-container > .price-wrapper > select {
  margin: auto;
  background: #000;
  color: #fff;
}
.c-creator-shop-modal > .form-container > .submit-button {
  margin-top: 12px;
}`,td=B`
  mutation EmoteUpsert($input: EmoteUpsertInput!) {
    emoteUpsert(input: $input) {
      emote {
        id
      }
    }
  }
`,uS=B`
  mutation EmoteFileCreate($input: EmoteFileCreateInput!) {
    emoteFileCreate(input: $input) {
      fileId
      uploadUrl
    }
  }
`,nd=B`
  mutation CollectibleUpsert($input: CollectibleUpsertInput!) {
    collectibleUpsert(input: $input) {
      collectible {
        id
        countableId
      }
    }
  }
`,dS=B`
  mutation ProductUpsert($input: ProductUpsertInput!) {
    productUpsert(input: $input) {
      product {
        id
        productVariantConnection {
          nodes {
            id
          }
        }
      }
    }
  }
`,pS=B`
  mutation ProductDelete($input: ProductDeleteInput!) {
    productDelete(input: $input) {
      product {
        id
      }
    }
  }
`,fS=B`
  query Countable($input: CountableInput) {
    countable(input: $input) {
      id
    }
  }
`,hS=V(({org:e,state$:t,existingCollectible$:n})=>{var x,v,b,y,_,w,E,k,T,R;A(lS);const[r]=ut({query:fS,variables:{input:{orgIdAndSlug:{orgId:e.id,slug:"points"}}}}),i=n.get(),o=K(null),a=K(!1),s=e.id,c=(x=r.data)==null?void 0:x.countable.id,p=((y=(b=(v=i==null?void 0:i.productVariantConnection)==null?void 0:v.nodes[0])==null?void 0:b.action)==null?void 0:y.inputsTemplate)?Fh((E=(w=(_=i==null?void 0:i.productVariantConnection)==null?void 0:_.nodes[0])==null?void 0:w.action)==null?void 0:E.inputsTemplate):null,d=p==null?void 0:p.count,h=(i==null?void 0:i.entityType)==="emote"&&i.entity?Fc(i.entity,Uh):"",f=async P=>{if(P.preventDefault(),a.get())return;if(!c){o.set("No channel points found for this org");return}o.set(null);const F=Number(P.target.price.value),D=P.target.countableId.value;if(isNaN(F)||F<1){o.set("Price must be a number greater than 0");return}a.set(!0);try{await vS({existingCollectible:i,orgId:s,countableId:D,name:P.target.emoteName.value||"",sendAssetCount:Number(P.target.price.value),file:P.target.emoteImage.files[0]}),a.set(!1),t.set(!1),n.set(null)}catch(H){console.error(H),a.set(!1),H instanceof Error&&o.set(H.message)}},m=`${i!=null&&i.entityType?"Update":"Add"} emote`,g=(R=(T=(k=i==null?void 0:i.productVariantConnection)==null?void 0:k.nodes)==null?void 0:T[0])==null?void 0:R.productId;return l(Uc,{title:`${i!=null&&i.entityType?"Edit":"Add an"} emote`,closeModal:()=>{t.set(!1),n.set(null)},isVisible$:t,children:l("div",{className:"c-creator-shop-modal",children:[(o==null?void 0:o.get())&&l("div",{className:"error",children:o==null?void 0:o.get()}),l("form",{className:"form-container",onSubmit:f,children:[l(Of,{label:"Emote image",name:"emoteImage",defaultValue:h}),l(Ls,{label:"Emote name",name:"emoteName",defaultValue:i==null?void 0:i.entity.name}),l("div",{className:"price-wrapper",children:[l("div",{className:"input",children:l(Ls,{label:"Price",type:"number",name:"price",defaultValue:d!==null?`${d}`:void 0,icon:l("img",{src:"/channel-points.svg",alt:"channel-points-icon"})})}),l("select",{name:"countableId",children:[l("option",{value:c,children:"Channel Points"}),l("option",{value:Uo,children:"Sparks"})]})]}),g?l(In,{color:"danger",fullWidth:!0,onClick:async()=>{confirm("Are you sure you want to delete this item?")&&(a.set(!0),await gS(g),a.set(!1),n.set(null),t.set(!1))},size:"lg",disabled:a.get(),children:"Delete emote"}):void 0,l(In,{fullWidth:!0,type:"submit",className:"submit-button",size:"lg",disabled:a.get(),children:a.get()?"Loading...":m})]})]})})});async function mS({uploadUrl:e,file:t}){await fetch(e,{method:"POST",body:t,mode:"no-cors",headers:{"Content-Type":"multipart/form-data"}}),await new Promise(n=>setTimeout(n,3e3))}async function gS(e){await ze({query:pS,variables:{input:{id:e}}})}async function vS({existingCollectible:e,orgId:t,countableId:n,sendAssetCount:r,name:i,file:o}){var g,x,v,b,y,_,w,E,k,T,R,P,F,D,H,I,M,O,L;let a=(e==null?void 0:e.entityType)==="emote"?e.entity.id:void 0;const s=await ze({query:td,variables:{input:{id:a,orgId:t,name:i}}});if(a=(x=(g=s.data)==null?void 0:g.emoteUpsert)==null?void 0:x.emote.id,!a){const W=((v=s.error)==null?void 0:v.message)||"Unknown error";throw new Error(`There was an error creating the emote: ${W}`)}if(o){const W=await ze({query:uS,variables:{input:{emoteId:a,orgId:t}}}),{fileId:re,uploadUrl:G}=((b=W.data)==null?void 0:b.emoteFileCreate)||{};if(!re||!G)throw new Error("There was an error creating file for the emote");try{await mS({uploadUrl:G,file:o})}catch{throw new Error("There was an error uploading the emote")}const oe=await ze({query:td,variables:{input:{id:a,urlParams:[re,"png"],isCollectibleRequired:!0}}});if(oe.error)throw new Error(`There was an error updating the emote: ${oe.error.message}`)}const c=await ze({query:nd,variables:{input:{id:e==null?void 0:e.id,orgId:t,entityType:"emote",entityId:a,slug:i.replace(/\s/g,"")}}});if(c.error)throw new Error(`There was an error creating the collectible: ${c.error.message}`);const u=(y=c.data)==null?void 0:y.collectibleUpsert.collectible.id,p=(_=c.data)==null?void 0:_.collectibleUpsert.collectible.countableId;if(!u)throw new Error("There was an error creating the collectible");const d=await ze({query:dS,variables:{input:{id:(k=(E=(w=e==null?void 0:e.productVariantConnection)==null?void 0:w.nodes)==null?void 0:E[0])==null?void 0:k.productId,name:i,category:"points",orgId:t,rank:0,productVariants:[{id:(P=(R=(T=e==null?void 0:e.productVariantConnection)==null?void 0:T.nodes)==null?void 0:R[0])==null?void 0:P.id,name:i,action:{id:(I=(H=(D=(F=e==null?void 0:e.productVariantConnection)==null?void 0:F.nodes)==null?void 0:D[0])==null?void 0:H.action)==null?void 0:I.id,name:i,description:i,operation:"exchange",inputsTemplate:{assets:[{entityType:"countable",entityId:n,count:r,senders:[{entityType:n===Uo?"user":"org-member",entityId:n===Uo?"{{USE_USER_ID}}":"{{USE_ORG_MEMBER_ID}}",share:1}],receivers:[{entityType:"org",entityId:t,share:1}]},{entityType:"countable",entityId:p,count:1,senders:[{entityType:"org",entityId:t,share:1}],receivers:[{entityType:"org-member",entityId:"{{USE_ORG_MEMBER_ID}}",share:1}]}]}}}]}}}),h=(M=d.data)==null?void 0:M.productUpsert.product.id,f=(O=d.data)==null?void 0:O.productUpsert.product.productVariantConnection.nodes.map(W=>W.id);if(!h)throw new Error("There was an error creating the product");if(!((L=(await ze({query:nd,variables:{input:{id:u,data:{productVariantIds:f}}}})).data)!=null&&L.collectibleUpsert.collectible.id))throw new Error("There was an error updating the collectible");return{emoteId:a,collectibleId:u,productId:h}}const yS=$`.l-creator {
  background: none;
  --sidebar-width: 240px;
}
.l-creator > main {
  margin-left: calc(var(--sidebar-width));
  margin-right: 40px;
}
.l-creator > .settings-sidebar {
  top: 0px;
  position: fixed;
  height: 100%;
  background: #1f1f1f;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 16px;
  margin-top: 64px;
  padding-top: 28px;
  width: var(--sidebar-width);
  gap: 15px;
  overflow-y: auto;
}
.l-creator > .settings-sidebar > .t-caps-title {
  margin: 0px;
}
.l-creator > .settings-sidebar > .sidebar-item {
  font-weight: 400;
  padding: 0;
  display: block;
  font-size: 16px;
  text-decoration: none;
  color: white;
}
.l-creator > .settings-sidebar > .sidebar-item[data-status=active] {
  color: var(--primary, #f357a1);
}
.l-creator > .settings-sidebar > .sidebar-item[data-status=active]::before {
  content: " ";
  position: absolute;
  left: 2px;
  background: var(--primary, #f357a1);
  width: 4px;
  height: 24px;
  border-radius: 0px 4px 4px 0px;
  transform: translate(-50%, 0%);
}
.l-creator > .settings-sidebar > .sidebar-item.logout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.l-creator > main {
  padding: 40px;
}`,bS=V(()=>{A(yS),Wt();const{orgSlug:e}=Et(),{org:t,fetching:n,error:r}=Ni({slug:e});return n?l(Oi,{}):r||!t?l("div",{children:["Error: ",l("pre",{children:(r==null?void 0:r.message)||"Org not found"})]}):t?l("div",{className:"l-creator",children:[l("nav",{className:"settings-sidebar",children:[l("div",{className:"sidebar-header",children:"Creator Dasboard"}),l("div",{className:"t-divider"}),l(he,{className:"sidebar-item",from:Be.path,to:"home",children:"Home"}),l(he,{className:"sidebar-item",from:Be.path,to:"general",children:"General"}),l(he,{className:"sidebar-item",from:Be.path,to:"apps",children:"Apps"}),l(he,{className:"sidebar-item",from:Be.path,to:"channels",children:"Connected Channels"}),l(he,{className:"sidebar-item",from:Be.path,to:"emotes",children:"Global emotes"}),l(he,{className:"sidebar-item",from:Be.path,to:"shop",children:"Shop"}),l(he,{className:"sidebar-item",from:Be.path,to:"economy",children:"Economy"})]}),l("main",{children:l(Lh,{context:{org:t}})})]}):l(j,{})}),xS=$`.p-creator {
  padding: 48px;
}
.p-creator > .onboard-button {
  text-decoration: none;
  display: inline-block;
  margin-bottom: 32px;
}
.p-creator > .orgs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
}
.p-creator > .orgs > .org {
  text-decoration: none;
}`,_S=$`.c-tile {
  display: flex;
  padding: 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  flex: 0 0 260px;
  align-self: stretch;
  border-radius: 4px;
  background: #1f1f1f;
}
.c-tile > .icon {
  width: 48px;
  height: 48px;
  background-color: #f357a1;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.c-tile > .icon > img {
  width: var(--icon-size);
  height: var(--icon-size);
  display: block;
}
.c-tile > .info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
}
.c-tile > .info > .heading {
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.035px;
}
.c-tile > .info > .message {
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.035px;
}`,ui=({iconUrl:e,iconSize:t,heading:n,message:r,onClick:i,buttonText:o,buttonOnClick:a})=>(A(_S),l("div",{className:"c-tile",onClick:i,style:{cursor:i?"pointer":"inherit"},children:[l("div",{className:"icon",style:{"--icon-size":t},children:l("img",{src:e})}),l("div",{className:"info",children:[l("div",{className:"heading",children:n}),l("div",{className:"message",children:r})]}),o&&l("div",{className:"button",children:l(In,{variant:"filled",onClick:s=>{s.stopPropagation(),a&&a()},children:o})})]})),wS=$`.p-creator_p-home > main {
  display: flex;
  flex-direction: column;
  gap: 31px;
}
.p-creator_p-home > main > .hello-heading {
  color: #fff;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.p-creator_p-home > main > .welcome-message {
  border-radius: 4px;
  background: #1f1f1f;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  align-self: stretch;
}
.p-creator_p-home > main > .welcome-message > .heading {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 100% */
  letter-spacing: 0.05px;
}
.p-creator_p-home > main > .welcome-message > .message {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
  letter-spacing: 0.04px;
}
.p-creator_p-home > main > .finish-setting-up {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.p-creator_p-home > main > .finish-setting-up > .label {
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.035px;
  text-transform: uppercase;
}
.p-creator_p-home > main > .finish-setting-up > .container {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
}
.p-creator_p-home > main > .finish-setting-up > .container > a {
  display: block;
  text-decoration: none;
}`,ES=()=>{A(wS);const{user:e}=jn(),{org:t}=ht(),n=t.slug;return l("div",{className:"p-creator_p-home",children:l("main",{children:[l("section",{className:"hello-heading",children:["Hi, ",e==null?void 0:e.name]}),l("section",{className:"welcome-message",children:[l("div",{className:"heading",children:"Welcome to Truffle!"}),l("div",{className:"message",children:"We're still getting everything setup, so this will be a little barren for a bit"})]}),l("section",{className:"finish-setting-up",children:[l("div",{className:"label",children:"Finish getting set up"}),l("div",{className:"container",children:[l(he,{to:`/creator/${n}/emotes`,children:l(ui,{iconUrl:"https://cdn.bio/assets/icons/global/light/happy_face.svg",iconSize:"32px",heading:"Sync emotes and badges",message:"Connect with bttv and 7tv"})}),l("a",{href:"https://discord.gg/Pq3gHDKVYF",target:"_blank",rel:"noreferrer",children:l(ui,{iconUrl:"https://cdn.bio/assets/icons/global/light/discord.svg",iconSize:"48px",heading:"Join the community discord",message:"We <3 feedback!"})})]})]})]})})},qh=new J({getParentRoute:()=>Be,path:"/home",component:ES}),kS=$`.p-creator-onboard {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  padding: 10px;
}`,TS=V(({children:e})=>Fn.get()?e:l(Ar,{mode:Bn.Login,onAuth:()=>null})),SS=B`
  query AppCreatorOnboardOrgQuery($input: OrgInput) {
    org(input: $input) {
      id
      name
      slug
      socials
      channelConnection {
        nodes {
          id
          data
          sourceType
          sourceId
          sourceName
        }
      }
    }
  }
`,NS=()=>{A(kS);const{orgSlug:e}=Et(),[{data$:t}]=En({query:SS,variables:{input:{slug:e}},pause:!e}),n=tf(()=>{var r;return(r=t.get())==null?void 0:r.org});return l("div",{className:"p-creator-onboard",children:l(TS,{children:l(Lh,{context:{org$:n}})})})},$i=new J({getParentRoute:()=>rt,path:"/creator-onboard",component:NS}),IS=$`.p-creator-onboard-start {
  margin: 0 auto;
  max-width: 540px;
  text-align: center;
}
.p-creator-onboard-start > .snuffle-img {
  width: 258px;
  margin: 0 0 67px 0;
}
.p-creator-onboard-start > .heading {
  margin: 0 0 8px 0;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: 0.07px;
}
.p-creator-onboard-start > .tagline {
  margin: 0 0 24px 0;
  color: var(--de-emphasized-text);
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.p-creator-onboard-start > .name {
  margin-bottom: 24px;
}
.p-creator-onboard-start > .t-button {
  display: block;
  width: 232px;
  text-align: center;
  margin: auto;
  text-transform: uppercase;
  box-sizing: border-box;
}`,CS=B`
  mutation OrgUpsert($input: OrgUpsertInput!) {
    orgUpsert(input: $input) {
      org {
        id
        slug
      }
    }
  }
`,OS=V(()=>{A(IS);const e=bi(),t=K(""),n=K(!1),r=async()=>{var a,s,c;if(n.peek())return;n.set(!0);const i=await ze({query:CS,variables:{input:{name:t.get()}}}),o=(c=(s=(a=i==null?void 0:i.data)==null?void 0:a.orgUpsert)==null?void 0:s.org)==null?void 0:c.slug;n.set(!1),o&&e({to:"/creator-onboard/$orgSlug/connect-channels",params:{orgSlug:o}})};return l("div",{className:"p-creator-onboard-start",children:[l("img",{className:"snuffle-img",src:"https://cdn.bio/assets/images/onboarding/creator-onboarding/snuffle_rainbow.svg",alt:"Cute Snuffle"}),l("h1",{className:"heading",children:"Create a community"}),l("p",{className:"tagline",children:"Create a place on Truffle for your fans to engage with you and your content"}),l("div",{className:"name",children:l("input",{className:"t-input",type:"text",placeholder:"Set a name for your community",value:t.get(),onInput:Pe(t)})}),l("button",{disabled:!t.get()||n.get(),onClick:r,className:"t-button",children:n.get()?"Loading...":"Let's Go!"})]})}),Bh=new J({getParentRoute:()=>$i,path:"start",component:OS}),AS=V(()=>{A(xS);const{user:e,fetching:t}=jn();if(t)return l(Oi,{});const n=e==null?void 0:e.orgUsers.nodes.filter(r=>r.roleConnection.nodes.some(i=>i.slug==="admin"||i.slug==="mod"));return l("div",{className:"p-creator",children:[l(he,{to:Bh.fullPath,className:"onboard-button",children:l(In,{variant:"filled",children:"Add a community"})}),l("div",{className:"orgs",children:n==null?void 0:n.map(r=>{var i,o;return l(he,{className:"org",to:qh.fullPath,params:{orgSlug:(i=r.org)==null?void 0:i.slug},children:l(ui,{heading:(o=r.org)==null?void 0:o.name})},r.id)})})]})}),Be=new J({getParentRoute:()=>rt,path:"/creator/$orgSlug",component:bS}),$S=new J({getParentRoute:()=>rt,path:"/creator",component:AS}),RS=B`
  query CollectibleConnection($input: CollectibleConnectionInput) {
    collectibleConnection(input: $input) {
      nodes {
        id
        entity {
          ... on Emote {
            id
            name
            sourceType
            urlParams
          }
        }
        entityType
        productVariantConnection {
          nodes {
            id
            productId
            action {
              id
              inputsTemplate
            }
          }
        }
      }
    }
  }
`,PS=()=>{var i;A(nS);const e=K({open:!1,editItem:null}),{org:t}=ht(),[n]=ut({query:RS,variables:{input:{orgId:t.id}}}),r=(((i=n.data)==null?void 0:i.collectibleConnection.nodes)||[]).filter(o=>o.productVariantConnection.nodes.length>0);return l(j,{children:[l("div",{className:"p-creator_p-shop",children:[l("div",{className:"header-row",children:[l(ai,{size:"lg",as:"h2",children:"Shop"}),l(In,{onClick:()=>e.open.set(!0),variant:"primary",children:"Add Item"})]}),l("div",{className:"item-list-container",children:[l(ai,{size:"sm",as:"h3",children:"Emotes"}),l("div",{className:"item-list",children:r.map(o=>o.entity?l(sS,{collectible:o,onClick:()=>{e.editItem.set(o),e.open.set(!0)}},o.id):l(j,{}))})]})]}),l(hS,{org:t,state$:e.open,existingCollectible$:e.editItem})]})},DS=new J({getParentRoute:()=>Be,path:"/shop",component:PS});var LS=function(t){return MS(t)&&!FS(t)};function MS(e){return!!e&&typeof e=="object"}function FS(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||BS(e)}var US=typeof Symbol=="function"&&Symbol.for,qS=US?Symbol.for("react.element"):60103;function BS(e){return e.$$typeof===qS}function jS(e){return Array.isArray(e)?[]:{}}function di(e,t){return t.clone!==!1&&t.isMergeableObject(e)?yr(jS(e),e,t):e}function VS(e,t,n){return e.concat(t).map(function(r){return di(r,n)})}function zS(e,t){if(!t.customMerge)return yr;var n=t.customMerge(e);return typeof n=="function"?n:yr}function HS(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function rd(e){return Object.keys(e).concat(HS(e))}function jh(e,t){try{return t in e}catch{return!1}}function WS(e,t){return jh(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function GS(e,t,n){var r={};return n.isMergeableObject(e)&&rd(e).forEach(function(i){r[i]=di(e[i],n)}),rd(t).forEach(function(i){WS(e,i)||(jh(e,i)&&n.isMergeableObject(t[i])?r[i]=zS(i,n)(e[i],t[i],n):r[i]=di(t[i],n))}),r}function yr(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||VS,n.isMergeableObject=n.isMergeableObject||LS,n.cloneUnlessOtherwiseSpecified=di;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):GS(e,t,n):di(t,n)}yr.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return yr(r,i,n)},{})};var YS=yr,QS=YS;const KS=Gd(QS),id={sidebarWidth:72,expandedSidebarWidth:72+320,allowedSites:"all",activationSettings:{isTwoStep:!1,twoStepMode:"hover",screenSide:"left",activationZoneWidth:14,sidebarTimeout:0,leaveWindowTimeout:500}},br=Ee(Promise.race([ln.storageBucketGet("sidebar","config").then(e=>KS(id,e||{})),new Promise(e=>setTimeout(()=>e(id),1e3))])),JS=$`.p-sidebar-settings {
  margin-left: 40px;
}
.p-sidebar-settings > .t-divider {
  margin: 20px 0px;
}`,XS=$`.c-settings-info .settings-header {
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 4px;
}
.c-settings-info .settings-description {
  color: var(--de-emphasized-text, #9f9f9f);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;
  margin-bottom: 20px;
}`,Wr=({header:e,description:t})=>(A(XS),l("div",{className:"c-settings-info",children:[l("div",{className:"settings-header",children:e}),l("div",{className:"settings-description",children:t})]})),ZS=$`.c-radio-form {
  --radio-selected-color: #f357a1;
  --radio-default-color: #9f9f9f;
  display: flex;
}
.c-radio-form.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.c-radio-form.horizontal {
  flex-direction: row;
}
.c-radio-form.horizontal > .radio-container {
  margin: 8px;
}
.c-radio-form.centered > .radio-container {
  display: flex;
  align-items: center;
}
.c-radio-form.vertical {
  flex-direction: column;
  gap: 16px;
}
.c-radio-form.vertical > .radio-container {
  margin-left: 16px;
}
.c-radio-form.boxed {
  gap: 16px;
}
.c-radio-form.boxed > .radio-container {
  margin: 0px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--radio-default-color);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  flex-grow: 1;
}
.c-radio-form.boxed > .radio-container.checked {
  background: rgba(243, 87, 161, 0.16);
  border-color: #f357a1;
}
.c-radio-form > .radio-container {
  color: var(--de-emphasized-text, #9f9f9f);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.08px;
}
.c-radio-form > .radio-container.checked {
  color: var(--light-text, #fff);
}
.c-radio-form > .radio-container > .radio-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  margin-right: 8px;
  appearance: none;
  border-radius: 50%;
  border: 2px solid var(--radio-default-color);
}
.c-radio-form > .radio-container > .radio-button::after {
  content: "";
  display: block;
  padding: 5px;
  margin: 3px;
  border-radius: 50%;
  border: none;
  background: none;
}
.c-radio-form > .radio-container > .radio-button:checked {
  border-color: var(--radio-selected-color);
}
.c-radio-form > .radio-container > .radio-button:checked::after {
  padding: 5px;
  background: var(--radio-selected-color);
  margin: 3px;
}
.c-radio-form > .radio-container > .radio-button:hover {
  cursor: pointer;
  filter: opacity(0.85);
}`,Ea=V(({name:e,value$:t,valueFn:n,style:r={direction:"horizontal",isBoxed:!1,isCentered:!0},disabled:i,children:o})=>{A(ZS);const a=It.toArray(o),s=`c-radio-form 
    ${r.direction} 
    ${r.isCentered?"centered":""} 
    ${r.isBoxed?"boxed":""}`;return l("div",{className:`${s} ${i?"disabled":""}`,children:It.map(a,c=>{if(!At(c))return;if(c.type!==Jt)return c;if(c.props.value===void 0)throw new Error("Radio must have a value prop");const{value:u,children:p}=c.props;return l(eN,{value$:t,value:u,valueFn:n,name:e,children:p})})})}),eN=V(({value$:e,value:t,valueFn:n,name:r,children:i})=>{const o=n?n(t):t,a=e.get()===o;return l("label",{className:`radio-container ${a?"checked":""}`,children:[l("input",{type:"radio",className:"radio-button",name:r,value:t,checked:a,onChange:()=>{e.set(o)}}),i]})}),Jt=({value:e,children:t})=>l("div",{children:"Radio component must live inside a RadioForm"}),tN="/assets/mouseover-ad1a380a.svg",nN="/assets/mouseover-and-hover-click-ccd146cc.svg",rN=$`.c-is-two-step-form > .c-radio-form > .radio-container > .image-container {
  margin: 20px 0px;
  overflow: hidden;
  height: 25vw;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 4px;
}
.c-is-two-step-form > .c-radio-form > .radio-container > .image-container > img {
  width: 300%;
}`,iN=()=>l(Ea,{style:{direction:"vertical",isBoxed:!1,isCentered:!0},name:"allowedSites",value$:br.allowedSites,children:[l(Jt,{value:"all",children:"All sites"}),l(Jt,{value:"social",children:"Social media sites only"})]}),oN=()=>l(Ea,{style:{direction:"vertical",isBoxed:!1,isCentered:!0},name:"sidebarPosition",value$:br.activationSettings.screenSide,children:[l(Jt,{value:"left",children:"Left"}),l(Jt,{value:"right",children:"Right"})]}),aN=({config$:e})=>l(Ea,{name:"twoStepMode",value$:e.activationSettings.twoStepMode,disabled:!e.activationSettings.isTwoStep.get(),children:[l(Jt,{value:"hover",children:"Hover"}),l(Jt,{value:"click",children:"Click"})]}),sN=()=>(A(rN),l("div",{className:"c-is-two-step-form",children:l(Ea,{name:"isTwoStep",value$:br.activationSettings.isTwoStep,valueFn:e=>e==="true",style:{direction:"horizontal",isBoxed:!0,isCentered:!1},children:[l(Jt,{value:"false",children:[l("div",{className:"image-container",children:l("img",{src:tN})}),l(Wr,{header:"Mouseover",description:"Open the sidebar by moving the mouse over the left or right edge of the browser window"})]}),l(Jt,{value:"true",children:[l("div",{className:"image-container",children:l("img",{src:nN})}),l(Wr,{header:"Mouseover + Icon hover or click",description:"Move the mouse over the left or right edge of the browser window. Hover or click on the Truffle icon that appears at the top left or right of the screen to open the sidebar"}),l("div",{className:"hover-or-click-radios",children:l(aN,{config$:br})})]})]})}));br.onChange(({value:e,getPrevious:t})=>{t()&&ln.storageBucketSet("sidebar","config",e)});const cN=V(()=>(A(JS),br.get()?l("div",{className:"p-sidebar-settings",children:[l("h2",{children:"Sidebar Settings"}),l(Wr,{header:"Sidebar access",description:"Which sites do you want to be able to access the sidebar on?"}),l(iN,{}),l("div",{className:"t-divider"}),l(Wr,{header:"Sidebar position",description:"Select which side of the screen the sidebar appears from"}),l(oN,{}),l("div",{className:"t-divider"}),l(Wr,{header:"Open sidebar",description:"Choose how you want to open the sidebar"}),l(sN,{})]}):l(j,{children:"Loading..."}))),lN=new J({getParentRoute:()=>_a,path:"/sidebar",component:cN});function Vh(e){return e.graphQLErrors[0]}const od=`${window.location.origin}${window.location.pathname}`,uN={youtube:"Youtube",twitch:"Twitch",discord:"Discord"},dN=B`
  mutation AppLinkThirdPartyAccount($sourceType: String!, $code: String!, $redirectUri: String!) {
    linkThirdPartyAccount(input: { sourceType: $sourceType, code: $code, redirectUri: $redirectUri }) {
      thirdPartyUser
    }
  }
`,pN=B`
  mutation AppLoginOAuth($input: UserLoginInput!) {
    userLogin(input: $input) {
      accessToken
    }
  }
`,fN=V(()=>{const{sourceType:e}=Et(),t=e&&uN[e],n=K(null),r=K(null),i=K(null),o=K(null);return te(()=>{if(!e||!t)return;const s=sa({namespace:Ic,providerWindow:window.opener}).api.oAuthCallback,c=new URLSearchParams(window.location.search),u=c.get("state"),p=u&&JSON.parse(atob(u));if(!p){r.set("Hmmm... something's not right (the state is missing or invalid)."),s({error:{code:"invalid_state",message:"The state is missing or invalid."}}),i.set("close");return}const d=()=>i.set(p.action==="redirect"&&p.redirectUrl?p.redirectUrl:"close"),h=c.get("error");if(h){const m=c.get("error_description");h==="access_denied"?r.set(`Oh? It looks like you didn't grant us permission to link your ${t} account.`):r.set(m||`Something went wrong. Try again maybe? 🤷 (the oauth flow returned ${h})`),s({error:{code:`oauth_${h}`,message:m}}),d();return}p.accessToken===tt.peek()||console.warn("accessToken mismatch"),(async()=>{var b,y,_;o.set(p.shouldLogin?"logging_in":"linking");const m=ua({url:aa(),fetchOptions:{headers:{"x-access-token":tt.peek()}}}),g=c.get("code");if(!g){r.set("Hmmm... something's not right (the code is missing)."),s({error:{code:"oauth_invalid_code",message:"The code is missing."}}),d();return}const x=await m.mutation(p.shouldLogin?pN:dN,{input:p.shouldLogin?{oauth:{sourceType:e,code:g,redirectUri:od}}:{sourceType:e,code:g,redirectUri:od}}).toPromise();if(o.set(null),x.error){const w=Vh(x.error);console.error("Error from mothertree:",w);const E=(w==null?void 0:w.message)||"An unknown error occurred.",k=((b=w==null?void 0:w.extensions)==null?void 0:b.code)||"unknown_error";switch(s({error:{message:E,code:k}}),k){case"connection_exists_error":{r.set(`This ${t} account is already linked to a Truffle account.`);break}case"no_youtube_channel":{r.set("Oops! It looks like you don't have a YouTube channel. You need a YouTube channel before you can link your account to Truffle.");break}default:{r.set(`Oops! An error occurred. Please try again. (error code: ${k}: ${E})`);break}}d();return}const v=(_=(y=x.data)==null?void 0:y.userLogin)==null?void 0:_.accessToken;await s({accessToken:v}),p.useAutoAction?p.action==="redirect"&&p.redirectUrl?window.location.href=p.redirectUrl:window.close():d()})()},[]),!e||!t?l("div",{children:"This is not a valid oauth callback page :("}):l("div",{className:"p-oauth-callback",children:[l("h1",{children:["Truffle + ",t]}),l(mN,{state$:o,serviceName:t}),l(gN,{message$:n}),l(vN,{message$:r}),l(hN,{action$:i})]})}),hN=V(({action$:e})=>{const t=e.get();return t?l("div",{className:"actions",children:t==="close"?l("button",{onClick:()=>window.close(),children:"Close"}):l("a",{href:t,children:"Continue"})}):l(j,{})}),mN=V(({state$:e,serviceName:t})=>{const n=e.get();return n?l("div",{className:"loading-state",children:[n==="linking"&&`Linking ${t} account...`,n==="logging_in"&&`Logging in with ${t}...`]}):l(j,{})}),gN=V(({message$:e})=>{const t=e.get();return t?l("div",{className:"info-message",children:t}):l(j,{})}),vN=V(({message$:e})=>{const t=e.get();return t?l("div",{className:"error-message",children:t}):l(j,{})}),yN=new J({getParentRoute:()=>rt,path:"oauth/callback/$sourceType",component:fN}),ad=`${window.location.origin}${window.location.pathname}`,bN={youtube:"Youtube",twitch:"Twitch",discord:"Discord"},xN=B`
  mutation AppThirdPartyAccountLink($input: ThirdPartyAccountLinkInput!) {
    thirdPartyAccountLink(input: $input) {
      thirdPartyAccount {
        id
      }
    }
  }
`,_N=B`
  mutation AppLoginOAuth($input: UserLoginInput!) {
    userLogin(input: $input) {
      accessToken
    }
  }
`,wN=V(()=>{const{thirdPartyType:e}=Et(),t=e&&bN[e],n=K(null),r=K(null),i=K(null),o=K(null);return te(()=>{if(!e||!t)return;const s=sa({namespace:Ic,providerWindow:window.opener}).api.oAuthCallback,c=new URLSearchParams(window.location.search),u=c.get("state"),p=u&&JSON.parse(atob(u));if(!p){r.set("Hmmm... something's not right (the state is missing or invalid)."),s({error:{code:"invalid_state",message:"The state is missing or invalid."}}),i.set("close");return}const d=()=>i.set(p.action==="redirect"&&p.redirectUrl?p.redirectUrl:"close"),h=c.get("error");if(h){const m=c.get("error_description");h==="access_denied"?r.set(`Oh? It looks like you didn't grant us permission to link your ${t} account.`):r.set(m||`Something went wrong. Try again maybe? 🤷 (the oauth flow returned ${h})`),s({error:{code:`oauth_${h}`,message:m}}),d();return}p.accessToken===tt.peek()||console.warn("accessToken mismatch"),(async()=>{var b,y,_;o.set(p.shouldLogin?"logging_in":"linking");const m=ua({url:aa(),fetchOptions:{headers:{"x-access-token":tt.peek()}}}),g=c.get("code");if(!g){r.set("Hmmm... something's not right (the code is missing)."),s({error:{code:"oauth_invalid_code",message:"The code is missing."}}),d();return}const x=await m.mutation(p.shouldLogin?_N:xN,{input:p.shouldLogin?{oauth:{sourceType:e,code:g,redirectUri:ad}}:{thirdPartyType:e,entityType:p.entityType,entityId:p.entityId,code:g,redirectUri:ad}}).toPromise();if(o.set(null),x.error){const w=Vh(x.error);console.error("Error from mothertree:",w);const E=(w==null?void 0:w.message)||"An unknown error occurred.",k=((b=w==null?void 0:w.extensions)==null?void 0:b.code)||"unknown_error";switch(s({error:{message:E,code:k}}),k){case"no_youtube_channel":{r.set("Oops! It looks like you don't have a YouTube channel. You need a YouTube channel before you can link your account to Truffle.");break}default:{r.set(`Oops! An error occurred. Please try again. (error code: ${k}: ${E})`);break}}d();return}const v=(_=(y=x.data)==null?void 0:y.userLogin)==null?void 0:_.accessToken;await s({accessToken:v}),p.useAutoAction?p.action==="redirect"&&p.redirectUrl?window.location.href=p.redirectUrl:window.close():d()})()},[]),!e||!t?l("div",{children:"This is not a valid oauth callback page :("}):l("div",{className:"p-oauth-callback",children:[l("h1",{children:["Truffle + ",t]}),l(kN,{state$:o,serviceName:t}),l(TN,{message$:n}),l(SN,{message$:r}),l(EN,{action$:i})]})}),EN=V(({action$:e})=>{const t=e.get();return t?l("div",{className:"actions",children:t==="close"?l("button",{onClick:()=>window.close(),children:"Close"}):l("a",{href:t,children:"Continue"})}):l(j,{})}),kN=V(({state$:e,serviceName:t})=>{const n=e.get();return n?l("div",{className:"loading-state",children:[n==="linking"&&`Linking ${t} account...`,n==="logging_in"&&`Logging in with ${t}...`]}):l(j,{})}),TN=V(({message$:e})=>{const t=e.get();return t?l("div",{className:"info-message",children:t}):l(j,{})}),SN=V(({message$:e})=>{const t=e.get();return t?l("div",{className:"error-message",children:t}):l(j,{})}),NN=new J({getParentRoute:()=>rt,path:"oauth-callback/$thirdPartyType",component:wN}),IN=new J({getParentRoute:()=>en,path:"/sparks-shop",component:yi(()=>Ai(()=>import("./sparks-shop-260ead2d.js"),[]).then(({SparksShopPage:e})=>({default:e})))}),CN=$`.onboard-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 540px;
  margin-bottom: 40px;
}
.onboard-header > h1 {
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
}
.onboard-header > p {
  color: #cfcfcf;
  font-weight: 400;
  font-size: 20px;
  margin: 0;
}`,ON=$`.p-finish > .header {
  text-align: center;
}
.p-finish > .header > .title {
  font-size: 1.75em;
  margin-bottom: 8px;
}
.p-finish > .header > .subtitle {
  font-size: 1.25em;
  margin-top: 0px;
  margin-bottom: 40px;
  color: #cfcfcf;
  font-weight: 400;
}
.p-finish > .cards {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.p-finish > .cards > .card {
  background: #262626;
  width: 300px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
}
.p-finish > .cards > .card > h3 {
  font-weight: 700;
  font-size: 1.25em;
  text-align: center;
  margin-bottom: 8px;
}
.p-finish > .cards > .card > .twitter-header {
  margin-top: 0px;
  color: #8ed4ea;
}
.p-finish > .cards > .card > .discord-header {
  margin-top: 0px;
  color: #a997df;
}
.p-finish > .cards > .card > p {
  font-size: 1em;
  text-align: center;
  color: white;
  font-weight: 400;
  height: 75px;
}
.p-finish > .cards > .card > a {
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-weight: 700;
  color: #101010;
  text-decoration: none;
}
.p-finish > .cards > .card > a:before {
  content: "";
  background-repeat: no-repeat;
  background-size: 1.5em;
  background-position: center;
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  margin-right: 0.5em;
  vertical-align: middle;
}
.p-finish > .cards > .card > .twitter-button {
  background: #8ed4ea;
}
.p-finish > .cards > .card > .twitter-button:before {
  background-image: url("/twitter.svg");
}
.p-finish > .cards > .card > .discord-button {
  background: #a997df;
}
.p-finish > .cards > .card > .discord-button:before {
  background-image: url("/discord.svg");
}`,AN=()=>(A(ON),l("div",{className:"p-finish t-centered-page",children:[l("div",{className:"header",children:[l("h1",{className:"title",children:"You're all set up!"}),l("h2",{className:"subtitle",children:"In the meantime, check out Truffle’s Twitter account and join our Discord"})]}),l("div",{className:"cards",children:[l("div",{className:"card",children:[l("h3",{className:"twitter-header",children:"Stay updated on everything Truffle"}),l("p",{children:"Follow us on Twitter to find out about new features, give input, and see what Snuffle is up to"}),l("a",{href:"https://twitter.com/trufflevip",target:"_blank",className:"twitter-button",rel:"noreferrer",children:"Follow On Twitter"})]}),l("div",{className:"card",children:[l("h3",{className:"discord-header",children:"Share your thoughts! We love feedback"}),l("p",{children:"Join the Truffle community Discord"}),l("a",{href:"https://discord.gg/eGC3ywbQNt",target:"_blank",className:"discord-button",rel:"noreferrer",children:"Join the server"})]})]})]})),zh=V(()=>{var i;const{nextStep:e}=Ci(),{step:t}=Et(),{reset:n}=ap({from:qc.id});if(console.log("reset",n),A(CN),!Fn.get())return l(Oa,{to:"/login"});if(n)return Ah(),l(Oa,{to:e()});let r=(i=An.find(o=>o.id===t))==null?void 0:i.component;return t==="finish"&&(r=AN),r?l(j,{children:[l(fh,{shouldHideLinks:t!=="finish"}),l(r,{})]}):l(Oa,{to:e()})}),qc=new J({getParentRoute:()=>en,path:"/getting-started",component:zh,validateSearch:e=>({reset:e.reset})}),$N=new J({getParentRoute:()=>qc,path:"$step",component:zh}),RN=$`.p-quick-actions {
  width: 100vw;
  height: 100vh;
  background: var(--truffle-bg-color);
  color: #fff;
}
.p-quick-actions > .tile-container {
  --breakpoint: 350px;
  padding: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 8px;
}
@media (max-width: var(--breakpoint)) {
  .p-quick-actions > .tile-container {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
}
.p-quick-actions > .tile-container > .tile {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 4px;
  background: var(--bg-color);
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}
.p-quick-actions > .tile-container > .tile:hover {
  opacity: 0.8;
}
.p-quick-actions > .tile-container > .tile > .icon-container {
  display: flex;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
@media (max-width: var(--breakpoint)) {
  .p-quick-actions > .tile-container > .tile > .icon-container {
    padding: 16px;
  }
}
.p-quick-actions > .tile-container > .tile > .icon-container > img {
  all: unset;
  width: 48px;
}
.p-quick-actions > .tile-container > .tile > .label-container {
  padding: 12px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 0px 0px 4px 4px;
  overflow: hidden;
  color: #fff;
  text-align: center;
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: rgba(0, 0, 0, 0.4);
}
@media (max-width: var(--breakpoint)) {
  .p-quick-actions > .tile-container > .tile > .label-container {
    display: none;
  }
}
.p-quick-actions > .no-quick-actions {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
}
.p-quick-actions > .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  visibility: var(--current-visibility);
}
.p-quick-actions > .modal-container > .modal {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #272727;
  color: #fff;
  width: 95%;
  height: 95%;
  animation: var(--current-animation);
}
@keyframes animatebottom {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.p-quick-actions > .modal-container > .modal > .title-bar {
  display: flex;
  padding: 12px 12px 12px 20px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.p-quick-actions > .modal-container > .modal > .title-bar > .title {
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
}
.p-quick-actions > .modal-container > .modal > .title-bar > .close-button {
  cursor: pointer;
}
.p-quick-actions > .modal-container > .modal > .embed-frame {
  display: block;
  width: 100%;
  flex: 1 0 0;
  border: none;
  border-radius: 0 0 8px 8px;
}
.p-quick-actions > .loading-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.p-quick-actions > .loading-icon > object {
  width: 200px;
}`,PN=B`
  query AppQuickActionsEmbedQuery($orgId: ID!) {
    embedConnection(input: { apiVersion: 2, orgId: $orgId, contentPageType: "quickActions" }) {
      nodes {
        id
        packageInstallId
        iconUrl
        url
        tileProps
      }
    }
  }
`,DN=B`
  query ExtensionFetchPackageToken($packageInstallId: ID!) {
    packageInstallUserAccessToken(input: { packageInstallId: $packageInstallId })
  }
`,zt=Ee([]),sd=Ee(!0),on=Ee(-1),ns=new Map;function LN(){return{embedTransframeApi:ce(()=>af({namespace:"truffle-injected-unprivileged-embed-api-v1",api:{async userGetAccessToken(t){await ff();const n=zt.peek().find(o=>o.id===t.fromId);if(!n)return;if(ns.has(n.packageInstallId))return ns.get(n.packageInstallId);const{data:r,error:i}=await an().gqlClient.query(DN,{packageInstallId:n.packageInstallId},{url:ge()}).toPromise();if(i){console.error("error fetching package token",i);return}return ns.set(n.packageInstallId,r.packageInstallUserAccessToken),r.packageInstallUserAccessToken},embedWindowGetVisibility(t){const n=zt[on.peek()].peek();return t.fromId===n.id},embedWindowSetVisibility(t,n){const r=zt[on.peek()].peek();t.fromId===r.id&&!n&&on.set(-1)}},strictMode:!0}),[])}}const MN=V(()=>{A(RN);const{orgId:e}=Et(),[{data:t}]=ut({query:PN,variables:{orgId:e},context:ce(()=>({url:ge()}),[])});te(()=>{var r;t&&(zt.set((r=t==null?void 0:t.embedConnection)==null?void 0:r.nodes),sd.set(!1))},[t]);const n=zt.get().length===0;return l("div",{className:"p-quick-actions",children:sd.get()?l(BN,{}):l(j,{children:[n?l("p",{className:"no-quick-actions",children:"oop... looks like you don't have any quick actions!"}):l(FN,{}),l(qN,{})]})})}),FN=V(()=>{const e=t=>()=>{on.set(t)};return l("div",{className:"tile-container",children:zt.map((t,n)=>l(UN,{iconUrl:t.iconUrl.peek(),bgColor:t.tileProps.bgColor.peek(),onClick:e(n),children:t.tileProps.title.peek()}))})}),UN=({onClick:e,iconUrl:t,bgColor:n="#fff",children:r})=>l("div",{className:"tile",onClick:e,style:{"--bg-color":n},children:[l("div",{className:"icon-container",children:l("img",{src:t})}),l("div",{className:"label-container",children:r})]}),qN=V(()=>{const e=on.get()!==-1,t=zt[on.get()],{embedTransframeApi:n}=LN(),r=tf(()=>zt.map((i,o)=>{const a=zs();return{ref:Oo(a),element:Oo(l("iframe",{className:"embed-frame",src:i.url.peek(),loading:"eager",ref:a,style:{display:o===on.get()?"block":"none"}}))}}));return te(()=>{r.peek().forEach((i,o)=>{const a=i.ref.current;if(!a)return;const s=zt[o].peek();a.addEventListener("load",()=>n.registerFrame(a,s.id))})}),l("div",{className:"modal-container",style:{"--current-visibility":e?"visible":"hidden","--current-animation":e?"animatebottom 0.4s cubic-bezier(0.4, 0.71, 0.18, 0.99)":"none"},children:l("div",{className:"modal",children:[l("div",{className:"title-bar",children:[l("div",{className:"title",children:t.tileProps.title.get()}),l("div",{className:"close-button",onClick:()=>on.set(-1),children:l("img",{src:Mc})})]}),r.map(i=>i.peek().element)]})})}),BN=()=>l("div",{className:"loading-icon",children:l("object",{data:"https://cdn.bio/assets/images/landing/snuffle.svg?1",type:"image/svg+xml",children:l("img",{src:"https://cdn.bio/assets/images/landing/snuffle.svg?1"})})}),jN=new J({getParentRoute:()=>en,path:"/quick-actions/$orgId",component:MN}),VN=$`.p-creator-onboard_p-connect-channels {
  margin: 0 auto;
  max-width: 540px;
}
.p-creator-onboard_p-connect-channels > .continue-button {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.p-creator-onboard_p-connect-channels > .continue-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,zN=$`.c-org_c-channels {
  text-align: center;
}
.c-org_c-channels > .main-heading {
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: 0.07px;
}
.c-org_c-channels > .instructions {
  margin: 0 0 32px 0;
  color: var(--de-emphasized-text);
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.c-org_c-channels .icon-button:before {
  content: "";
  background-repeat: no-repeat;
  background-size: 1.5em;
  background-position: center;
  width: 1.5em;
  height: 1.5em;
  display: inline-block;
  margin-right: 0.5em;
  vertical-align: middle;
}
.c-org_c-channels > .t-button {
  width: 100%;
}
.c-org_c-channels > .youtube-button {
  margin: 0 0 12px 0;
  background: #303030;
}
.c-org_c-channels > .youtube-button:before {
  background-image: url("https://cdn.bio/assets/icons/youtube.svg");
}
.c-org_c-channels > .twitch-button {
  margin: 0 0 24px 0;
  background: #303030;
}
.c-org_c-channels > .twitch-button:before {
  background-image: url("https://cdn.bio/assets/icons/twitch.svg");
}
.c-org_c-channels > hr {
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0 0 24px 0;
}
.c-org_c-channels > .channels-heading {
  margin: 0 0 24px 0;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: left;
}
.c-org_c-channels > .channels-info {
  margin: 0 0 24px 0;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
}
.c-org_c-channels > .third-party-accounts {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 24px 0;
}
.c-org_c-channels > .continue-button {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.c-org_c-channels > .continue-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.c-org_c-channels_c-third-party-account {
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 0;
  background: #303030;
}
.c-org_c-channels_c-third-party-account > .name-container {
  display: flex;
  align-items: center;
}
.c-org_c-channels_c-third-party-account > .name-container > img {
  background-color: #9147ff;
  border-radius: 50%;
  background-size: 40px;
  width: 40px;
  height: 40px;
  margin-right: 16px;
}
.c-org_c-channels_c-third-party-account > .name-container > .text-container {
  text-align: left;
}
.c-org_c-channels_c-third-party-account > .name-container > .text-container > .name {
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.c-org_c-channels_c-third-party-account > .name-container > .text-container > .channel-count {
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.c-org_c-channels_c-third-party-account > .delete-button {
  cursor: pointer;
}

.c-org_c-channels_c-channel-list {
  margin: 0;
  padding: 20px 16px 16px 16px;
  background: #1f1f1f;
}
.c-org_c-channels_c-channel-list > .list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  text-align: left;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item > .left > .info {
  display: flex;
  align-items: center;
  gap: 15px;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item > .left > .info > img {
  width: 32px;
  border-radius: 50%;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item > .left > .warning {
  font-size: 12px;
  margin-top: 12px;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item > .right > button {
  padding: 6px 16px;
  min-width: 72px;
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item > .right > .linked-button {
  background: #303030;
  cursor: default;
}
.c-org_c-channels_c-channel-list > .list > .channel-list-item > .right > .link-button {
  background: transparent;
  border: 1px solid #f357a1;
}`,Hh={youtube:{thirdPartyType:"youtube",platformIconUrl:"https://cdn.bio/assets/icons/global/light/youtube.svg",platformIconBgColor:"#FF0000",getChannelName:e=>e.snippet.title,getChannelIconUrl:e=>e.snippet.thumbnails.default.url,getAccountName:e=>e.thirdPartyUser.snippet.customUrl},twitch:{thirdPartyType:"twitch",platformIconUrl:"https://cdn.bio/assets/icons/global/light/twitch.svg",platformIconBgColor:"#9147ff",getChannelName:e=>e.display_name,getChannelIconUrl:e=>e.profile_image_url,getAccountName:e=>e.thirdPartyUser.email}},HN=B`
  query ($input: ThirdPartyAccountConnectionInput) {
    thirdPartyAccountConnection(input: $input) {
      nodes {
        id
        thirdPartyType
        thirdPartyId
        entityId
        data
        availableChannels {
          sourceType
          sourceId
          sourceName
          data
          channel {
            orgId
            org {
              creatorUserId
              slug
            }
          }
        }
      }
    }
  }
`,WN=B`
  mutation ($input: ChannelLinkInput!) {
    channelLink(input: $input) {
      id
      orgId
    }
  }
`,GN=B`
  mutation AppThirdPartyAccountDelete($id: ID!) {
    thirdPartyAccountDelete(input: { id: $id }) {
      id
    }
  }
`,YN=V(({availableChannel:e,orgId:t})=>{var p,d,h,f;const n=Hh[e.sourceType],[,r]=Fe(WN),i=(d=(p=e==null?void 0:e.channel)==null?void 0:p.org)==null?void 0:d.creatorUserId,o=i&&i!=="00000000-0000-0000-0000-000000000000",a=o&&e.channel.orgId!==t,s=!o||a,c=K(!1),u=async()=>{if(!s||c.get()||a&&!confirm(`This channel is already linked to another Truffle community.

Are you sure you want to link it to this community?

Doing so will merge the other community into this one`))return;c.set(!0);const{data:m,error:g}=await r({input:{orgId:t,sourceType:e.sourceType,sourceId:e.sourceId,sourceName:e.sourceName}});if(c.set(!1),g){console.error(g);const x=g.graphQLErrors[0].extensions.code;let v;switch(x){case"channel_already_linked":{v="Uh-oh. It looks like this channel is already linked to another Truffle community";break}default:{v="An unknown error occurred while linking the channel 🤷";break}}Tr({type:Un.Modal,title:"oop",subtitle:v,message:v,action:()=>null,buttonText:"Ok"})}};return l("li",{className:"channel-list-item",children:[l("div",{className:"left",children:[l("div",{className:"info",children:[l("img",{src:n.getChannelIconUrl(e.data)}),l("div",{children:n.getChannelName(e.data)})]}),a?l("div",{className:"warning",children:["NOTE: This channel is linked to a different community: ",(f=(h=e.channel)==null?void 0:h.org)==null?void 0:f.slug]}):null]}),l("div",{className:"right",children:l("button",{onClick:u,className:`t-button ${s?"link-button":"linked-button"}`,children:c.get()?"...":s?"Link":"Linked"})})]})}),QN=({availableChannels:e,orgId:t})=>l("div",{className:"c-org_c-channels_c-channel-list",children:l("ul",{className:"list",children:e.map(n=>l(YN,{availableChannel:n,orgId:t},n.sourceId))})}),KN=({thirdPartyAccount:e})=>{const t=Hh[e.thirdPartyType],[n,r]=Fe(GN),i=async()=>{if(confirm("Are you sure you want to delete this account?")){const{error:o}=await r({id:e.id});o?(console.error(o),alert("An error occurred while deleting the account.")):alert("ThirdPartyAccount deleted.")}};return l("div",{children:[l("div",{className:"c-org_c-channels_c-third-party-account",children:[l("div",{className:"name-container",children:[l("img",{src:t.platformIconUrl,style:{background:t.platformIconBgColor},alt:t.thirdPartyType}),l("div",{className:"text-container",children:[l("div",{className:"name",children:t.getAccountName(e.data)}),l("div",{className:"channel-count",children:[e.availableChannels.length," channel",e.availableChannels.length>1&&"s"]})]})]}),l("img",{className:"delete-button",src:Mc,onClick:i})]}),l(QN,{orgId:e.entityId,availableChannels:e.availableChannels})]})},Wh=V(({hasLinkedAChannel$:e,org:t})=>{A(zN);const[{data:n,fetching:r},i]=ut({query:HN,variables:{input:{entityType:"org",entityId:t.id}}}),o=n==null?void 0:n.thirdPartyAccountConnection,a=o==null?void 0:o.nodes.filter(d=>{var h;return(h=d.availableChannels)==null?void 0:h.length}),s=a==null?void 0:a.some(d=>d.thirdPartyType==="youtube"),c=a==null?void 0:a.some(d=>d.thirdPartyType==="twitch");if(te(()=>{if(r)return;const d=a==null?void 0:a.find(h=>h.availableChannels.some(f=>f.channel&&f.channel.orgId===t.id));e==null||e.set(!!d)},[r,a]),r)return l(Oi,{});const u=async()=>{await hh({accessToken:tt.peek(),action:"close",shouldLogin:!1,useAutoAction:!0,entityType:"org",entityId:t.id},{redirectUri:eu("youtube"),additionalParams:{prompt:"consent"}}),i({requestPolicy:"network-only"})},p=async()=>{await mh({accessToken:tt.peek(),action:"close",shouldLogin:!1,useAutoAction:!0,entityType:"org",entityId:t.id},{redirectUri:eu("twitch"),additionalParams:{force_verify:"true"}}),i({requestPolicy:"network-only"})};return l("div",{className:"c-org_c-channels",children:[l("h1",{className:"main-heading",children:"Connect your channels"}),l("p",{className:"instructions",children:`Connect your account and link channels to show when you're live or have
        a new video. You can add multiple accounts`}),l("button",{className:"t-button icon-button youtube-button",onClick:u,children:["Connect",s&&" another"," Youtube account"]}),l("button",{className:"t-button icon-button twitch-button",onClick:p,children:["Connect",c&&" another"," Twitch account"]}),l("hr",{}),l("h2",{className:"channels-heading",children:"My Channels"}),l("p",{className:"channels-info",children:"Your audience will only get recommendations and see recent videos from the channels you link"}),l("div",{className:"third-party-accounts",children:a==null?void 0:a.map(d=>d.data?l(KN,{thirdPartyAccount:d},d.id):void 0)})]})}),JN=V(()=>{A(VN);const e=bi(),{org$:t}=ht(),n=K(!1),r=t.get(),i=()=>{e({to:"/creator-onboard/$orgSlug/hub-setup",params:{orgSlug:t.slug.get()}})};return l("div",{className:"p-creator-onboard_p-connect-channels",children:[r?l(Wh,{org:r,hasLinkedAChannel$:n}):null,l("button",{disabled:!n.get(),onClick:i,className:"t-button continue-button",children:"Continue"})]})}),XN=new J({getParentRoute:()=>$i,path:"$orgSlug/connect-channels",component:JN}),ZN=$`.p-creator-onboard_p-hub-setup {
  margin: 0 auto 42px auto;
}
.p-creator-onboard_p-hub-setup > .top-info {
  max-width: 540px;
  margin: 0 auto 42px auto;
}
.p-creator-onboard_p-hub-setup > .top-info > .heading {
  margin: 0 0 8px 0;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: 0.07px;
}
.p-creator-onboard_p-hub-setup > .top-info > .description {
  color: var(--de-emphasized-text);
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.p-creator-onboard_p-hub-setup > .form-container {
  display: flex;
  justify-content: center;
  gap: 54px;
}
.p-creator-onboard_p-hub-setup > .form-container > .settings-container > .continue-button {
  text-align: center;
  width: 100%;
  margin-top: 20px;
}
.p-creator-onboard_p-hub-setup > .form-container > .settings-container > .continue-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`,eI="truffle",tI="create-react-project",cd="site",nI="@truffle/channel-points-shop-app",rI=B`
  query AppPackageQuery($slug: String!) {
    package(input: { slug: $slug }) {
      id
      latestPackageVersionId
    }
  }
`,iI=B`
  query CountableQuery($input: CountableInput) {
    countable(input: $input) {
      id
    }
  }
`,oI=B`
  mutation AppPackageFork($input: PackageForkInput!) {
    packageFork(input: $input) {
      package {
        id
        latestPackageVersionId
      }
    }
  }
`,aI=B`
  mutation AppPackageInstallCreate($input: PackageInstallCreateInput!) {
    packageInstallCreate(input: $input) {
      packageInstall {
        id
        installStatus
        packageId
      }
      userErrors
    }
  }
`,sI=B`
  mutation CountableUpsertMutation($input: CountableUpsertInput!) {
    countableUpsert(input: $input) {
      countable {
        id
      }
    }
  }
`,rs=B`
  mutation ActionUpsertMutation($input: ActionUpsertInput!) {
    actionUpsert(input: $input) {
      action {
        id
      }
    }
  }
`;async function cI(e,t){const{data:n,error:r}=await an().gqlClient.query(rI,{slug:e},{url:ge(),fetchOptions:{headers:{"x-org-id":t}}}).toPromise();if(r)throw r;return n==null?void 0:n.package}async function lI(e,t){const{data:n,error:r}=await ze({query:oI,variables:{input:t},context:{url:ge(),fetchOptions:{headers:{"x-org-id":e}}}});if(r)throw r;return n==null?void 0:n.packageFork.package}async function uI(e,t){const{data:n,error:r}=await ze({query:aI,variables:{input:t},context:{url:ge(),fetchOptions:{headers:{"x-org-id":e}}}});if(r)throw r;return n==null?void 0:n.packageInstallCreate.packageInstall}async function dI(e){let t=await cI(cd,e);return t||(t=await lI(e,{fromOrgSlug:eI,fromPackageSlug:tI,toPackageSlug:cd})),t}async function pI(e,t){var p,d,h;const n=await uI(e,{packageVersionId:t,installedPackageVersionPath:nI,isForceInstall:!0});if(!n)throw new Error("Failed to install package");const{data$:r}=await Dc({query:iI,variables:{input:{orgIdAndSlug:{orgId:e,slug:"points"}}}});if(await Ct(()=>r.get()!==void 0),r.get().countable)return console.log("Points countable already exists, aborting install"),n;const o=(p=(await ze({query:sI,variables:{input:{orgId:e,slug:"points",name:"Points",category:"currency-virtual"}}})).data)==null?void 0:p.countableUpsert.countable.id,s=(d=(await ze({query:rs,variables:{input:{orgId:e,appId:n.packageId,slug:"claim-points-conditional",name:"Claim points conditional",description:"Claim points conditional",operation:"conditional",inputsTemplate:{rules:{">":[{"-":[{getDate:[]},{or:[{timeUuidToDate:{var:"transactions.0.id"}},0]}]},3e5]},dataSources:[{key:"transactions",method:"getTransactions",inputsTemplate:{}}]}}}})).data)==null?void 0:d.actionUpsert.action.id,u=(h=(await ze({query:rs,variables:{input:{orgId:e,appId:n.packageId,slug:"claim-points-exchange",name:"Claim points exchange",description:"Claim points exchange",operation:"exchange",inputsTemplate:{assets:[{entityType:"countable",entityId:o,count:"20",senders:[{entityType:"org",entityId:"{{USE_ORG_ID}}",share:1}],receivers:[{entityType:"org-member",entityId:"{{USE_ORG_MEMBER_ID}}",share:1}]}]}}}})).data)==null?void 0:h.actionUpsert.action.id;return await ze({query:rs,variables:{input:{orgId:e,appId:n.packageId,slug:"claim-points",name:"Claim points workflow",description:"Claim points workflow",operation:"workflow",isDirectExecutionAllowed:!0,inputsTemplate:{strategy:"sequential",actionIds:[s,u]}}}}),n}const fI=$`
  .c-creator-general-form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > section {
      > h2 {
        margin: 0 0 10px 0;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 20px; /* 142.857% */
        letter-spacing: 0.035px;
        text-transform: uppercase;
      }
    }

    > .icon-setting {
      > img {
        width: 80px;
        border-radius: 4px;
      }
    }

    > .banner-setting {
      > img {
        width: 320px;
        border-radius: 4px;
      }
    }

    > .social-links-setting {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > .social-link-input {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 12px;

        background: #303030;
        border-radius: 4px;

        > .left {
          > img {
            width: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
          }
        }

        > .right {
          > label {
            display: block;
            padding: 0;
            margin: 0;

            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 24px; /* 171.429% */
            letter-spacing: 0.07px;
          }

          > input,
          > input:focus {
            display: block;
            background: transparent;
            border: none;
            outline: none;
            padding: 0;
            margin: 0;

            color: #fff;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px; /* 150% */
            letter-spacing: 0.08px;
          }
        }
      }
    }
  }
`,Kn=({platformName:e,iconUrl:t,value$:n})=>{const r=`${e}-input`;return l("div",{className:"social-link-input",children:[l("div",{className:"left",children:l("img",{src:t,alt:e})}),l("div",{className:"right",children:[l("label",{htmlFor:r,children:e}),l("input",{placeholder:"enter url",type:"text",name:r,value:n.get(),onInput:Pe(n)})]})]})},Gh=V(({editableOrg$:e,socials$:t})=>{A(fI);const n=e.get()?kh(e.get()):"",r=e.get()?Mk(e.get()):"";return l("div",{className:"c-creator-general-form",children:[n&&l("section",{className:"icon-setting",children:[l("h2",{children:"Extension Icon"}),l("img",{src:n})]}),l("section",{className:"community-name-setting",children:[l("h2",{children:"Community Name"}),l("input",{className:"t-input",type:"text",value:e.name.get(),onInput:Pe(e.name)})]}),r&&l("section",{className:"banner-setting",children:[l("h2",{children:"Community Banner"}),l("img",{src:r})]}),l("section",{className:"social-links-setting",children:[l("h2",{children:"Socials"}),l(Kn,{value$:t.youtube,platformName:"Youtube",iconUrl:"https://cdn.bio/assets/icons/global/light/youtube.svg"}),l(Kn,{value$:t.twitch,platformName:"Twitch",iconUrl:"https://cdn.bio/assets/icons/global/light/twitch.svg"}),l(Kn,{value$:t.twitter,platformName:"Twitter",iconUrl:"https://cdn.bio/assets/icons/global/light/twitter.svg"}),l(Kn,{value$:t.tiktok,platformName:"Tiktok",iconUrl:"https://cdn.bio/assets/icons/global/light/tiktok.svg"}),l(Kn,{value$:t.instagram,platformName:"Instagram",iconUrl:"https://cdn.bio/assets/icons/global/light/instagram.svg"}),l(Kn,{value$:t.discord,platformName:"Discord",iconUrl:"https://cdn.bio/assets/icons/global/light/discord.svg"})]})]})}),hI="/assets/creator-hub-preview-58715074.png",mI=V(()=>{A(ZN);const e=bi(),{org$:t}=ht(),n=K(async()=>await Ct(()=>t.get())),r=K(async()=>(await Ct(t),(n==null?void 0:n.socials.get())??{})),{orgUpsert:i}=Eh(),o=K(!1),a=async()=>{if(o.peek())return;o.set(!0);const{error:s}=await i({input:{id:n.id.peek(),name:n.name.peek(),socials:r.peek()}});if(s){Tr({type:Un.Modal,title:"AHHHH",subtitle:"Something went wrong. Maybe try again?",message:s.message,action:()=>null,buttonText:"Ok"}),o.set(!1);return}try{const c=await dI(t.id.get());if(!c)throw new Error("Failed to create default site package");console.log("Created default site package",c);const u=await pI(t.id.get(),c.latestPackageVersionId);if(!u)throw new Error("Failed to install Mogul Menu");console.log("Installed Channel Points Shop App",u)}catch(c){console.error(c)}o.set(!1),e({to:"/creator-onboard/$orgSlug/complete",params:{orgSlug:t.slug.peek()}})};return l("div",{className:"p-creator-onboard_p-hub-setup",children:[l("section",{className:"top-info",children:[l("h1",{className:"heading",children:"Welcome to your creator hub"}),l("p",{className:"description",children:`This is where fans will see everything about your community - if you're
        live, when there's a new video and more! Customize your community icon,
        banner, name, and socials`})]}),l("section",{className:"form-container",children:[l("section",{className:"preview-container",children:l("section",{children:[l("h2",{children:"Creator Hub Preview"}),l("img",{src:hI,alt:"Creator hub"})]})}),l("section",{className:"settings-container",children:[l(Gh,{editableOrg$:n,socials$:r}),l("button",{disabled:o.get(),className:"t-button continue-button",onClick:a,children:"Continue"})]})]})]})}),gI=new J({getParentRoute:()=>$i,path:"$orgSlug/hub-setup",component:mI}),vI=$`.p-creator-onboard_p-complete {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.p-creator-onboard_p-complete > .creator-icon {
  position: relative;
}
.p-creator-onboard_p-complete > .creator-icon > img {
  width: 96px;
  height: 96px;
  margin: 0 0 13px 0;
  border-radius: 50%;
  flex-shrink: 0;
}
.p-creator-onboard_p-complete > .creator-icon:after {
  content: "";
  position: absolute;
  top: -14px;
  left: -14px;
  width: 124px;
  height: 124px;
  display: block;
  background-image: url("/stars.svg");
  background-repeat: no-repeat;
  background-size: 124px 124px;
  background-position: center;
}
.p-creator-onboard_p-complete > .heading {
  margin: 0 0 8px 0;
  text-align: center;
  font-family: Inter;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
  letter-spacing: 0.07px;
}
.p-creator-onboard_p-complete > .subheading {
  margin: 0 0 24px 0;
  color: var(--de-emphasized-text);
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.p-creator-onboard_p-complete > .subheading > .follower-count {
  color: #f357a1;
  font-weight: 600;
}`,yI=V(()=>{A(vI);const{org$:e}=ht(),t=e.get(),n=t?kh(t):"";return l("div",{className:"p-creator-onboard_p-complete",children:[l("div",{className:"creator-icon",children:l("img",{src:n,alt:"Creator icon",className:"creator-icon"})}),l("h1",{className:"heading",children:"Your community has been created!"}),l("br",{}),l(he,{to:`/creator/${e.slug.get()}/home`,className:"t-button",children:"Take me to the dashboard"})]})}),bI=new J({getParentRoute:()=>$i,path:"$orgSlug/complete",component:yI}),xI=$``,ld=B`
  query Countable($countableInput: CountableInput, $counterInput: CountableCounterInput) {
    countable(input: $countableInput) {
      id
      counter(input: $counterInput) {
        id
        count
      }
    }
  }
`,_I=V(()=>{var o,a,s,c,u,p;A(xI);const{org:e}=ht(),[{data$:t}]=En({query:ld,variables:{countableInput:{orgIdAndSlug:{orgId:rS,slug:"sparks"}},counterInput:{entityType:"org",entityId:e==null?void 0:e.id}},pause:!e}),[{data$:n}]=En({query:ld,variables:{countableInput:{orgIdAndSlug:{orgId:e==null?void 0:e.id,slug:"points"}},counterInput:{entityType:"org",entityId:e==null?void 0:e.id}},pause:!e}),r=((s=(a=(o=t.get())==null?void 0:o.countable)==null?void 0:a.counter)==null?void 0:s.count)??0,i=Math.abs(((p=(u=(c=n.get())==null?void 0:c.countable)==null?void 0:u.counter)==null?void 0:p.count)??0);return l("div",{className:"p-creator_p-economy",children:[l("h2",{children:"Economy"}),l("ul",{children:[l("li",{children:["Sparks: ",r]}),l("li",{children:["Channel point circulating: ",i]})]}),l("p",{children:"We're still working on infrastructure for Sparks payouts, so for now just shoot over an email to austin@truffle.vip or Discord to @austinhallock :)"}),l("p",{children:`For "channel points circulating", try to keep that number as low as possible. It's the total number of unspent channel points that exist for your channels. It's best to pretend you're the US government back when it was on the gold standard and don't overinflate the economy :)`})]})}),wI=new J({getParentRoute:()=>Be,path:"/economy",component:_I}),EI=$`.p-creator_p-emotes > .heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.p-creator_p-emotes > .caps-title {
  all: unset;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.035px;
  text-transform: uppercase;
}
.p-creator_p-emotes > .grid-container {
  margin-top: 16px;
  margin-bottom: 32px;
}
.p-creator_p-emotes > .grid-container > .icon-grid {
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-wrap: wrap;
}
.p-creator_p-emotes > .grid-container > .icon-grid > .grid-item {
  border-radius: 4px;
  background: #1f1f1f;
  flex-grow: 0;
  display: flex;
  height: 120px;
  width: 120px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  flex: none;
}
.p-creator_p-emotes > .grid-container > .icon-grid > .grid-item > img {
  width: 56px;
  height: 56px;
}
.p-creator_p-emotes > .grid-container > .icon-grid > .grid-item > p {
  all: unset;
  overflow: hidden;
  max-width: 90px;
  color: #fff;
  text-align: center;
  text-overflow: ellipsis;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.056px;
}
.p-creator_p-emotes > .grid-container > .empty-message {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.p-creator_p-emotes > .grid-container > .empty-message > p {
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}`,kI=$`.c-emote-upload-modal-inner {
  width: 432px;
}
.c-emote-upload-modal-inner > p {
  all: unset;
  display: block;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 8px;
  margin-bottom: 24px;
}
.c-emote-upload-modal-inner > .url-import-form {
  width: 100%;
  display: flex;
}
.c-emote-upload-modal-inner > .url-import-form > input {
  width: 100%;
}
.c-emote-upload-modal-inner > .url-import-form > button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.c-emote-upload-modal-inner > .t-divider {
  margin: 24px 0;
}
.c-emote-upload-modal-inner > .emote-connections {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.c-emote-upload-modal-inner > .emote-connections > h3 {
  all: unset;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.035px;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection {
  padding: 13px 16px;
  border-radius: 4px;
  background: #303030;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .connection-info > h3 {
  all: unset;
  display: block;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.07px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .connection-info > p {
  all: unset;
  display: block;
  color: #fff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.08px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .buttons {
  display: flex;
  gap: 8px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .buttons > button {
  margin: 0;
  text-transform: none;
  border: 0;
  padding: 6px 10px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .buttons > .delete-button {
  background: none;
  cursor: pointer;
  color: #e85858;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: 0.07px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .buttons > .resync-button {
  cursor: pointer;
  border-radius: 2px;
  background: #595959;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.07px;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .buttons > .resync-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.c-emote-upload-modal-inner > .emote-connections > .emote-connection > .buttons > .resync-button:hover {
  background: #6e6e6e;
}`,TI={bttv_user:"BTTV user emotes","7tv_user":"7TV user emotes","7tv_emote_set":"7TV emote set"},SI=B`
  mutation ($input: EmoteImportCreateInput!) {
    emoteImportCreate(input: $input) {
      emoteImport {
        id
      }
    }
  }
`,NI=B`
  mutation ($id: ID!) {
    emoteImportDelete(input: { id: $id }) {
      emoteImport {
        id
      }
    }
  }
`,II=B`
  mutation ($id: ID!) {
    emoteImportResync(input: { importId: $id }) {
      emoteImport {
        id
      }
    }
  }
`,CI=V(({isVisible$:e,emoteImports:t,orgId:n,onUpdate:r})=>{A(kI);const i=K(),[{fetching:o},a]=Fe(SI),[,s]=Fe(NI),[{fetching:c},u]=Fe(II),p=async()=>{const{error:f}=await a({input:{importUrl:i.peek(),orgId:n}});f?alert(`Error creating emote import: ${f.message}`):(i.set(""),r==null||r())},d=async f=>{const{error:m}=await s({id:f});m?alert(`Error deleting emote import: ${m.message}`):r==null||r()},h=async f=>{if(c)return;const{error:m}=await u({id:f});m?alert(`Error resyncing emote import: ${m.message}`):r==null||r()};return l(Uc,{title:"Import emotes",closeModal:()=>e.set(!1),isVisible$:e,children:l("div",{className:"c-emote-upload-modal-inner",children:[l("p",{children:"Enter a url from BTTV or 7tv to import emotes"}),l("div",{className:"url-import-form",children:[l("input",{className:"t-input",type:"text",placeholder:"enter a BTTV/7tv url",value:i.get(),onInput:Pe(i)}),l("button",{className:"t-button",onClick:p,disabled:!i.get()||o,children:"Import"})]}),l("div",{className:"t-divider"}),(t==null?void 0:t.length)>0&&l("div",{className:"emote-connections",children:[l("h3",{children:"Imported"}),t.map(f=>l("div",{className:"emote-connection",children:[l("div",{className:"connection-info",children:[l("h3",{children:TI[f.sourceType]}),l("p",{children:f.sourceName})]}),l("div",{className:"buttons",children:[l("button",{className:"delete-button",onClick:()=>d(f.id),children:"Delete"}),l("button",{className:"resync-button",disabled:!!c,onClick:()=>h(f.id),children:"Resync"})]})]},f.id))]})]})})}),OI=B`
  query AppEmotesQuery($input: EmoteConnectionInput) {
    emoteConnection(input: $input) {
      nodes {
        sourceId
        sourceType
        name
        urlParams
      }
    }
    emoteSources {
      sourceType
      urlTemplate
    }
  }
`,AI=B`
  query AppEmoteImportQuery($orgId: ID!) {
    emoteImportConnection(input: { orgId: $orgId }) {
      nodes {
        id
        orgId
        sourceId
        sourceName
        sourceType
      }
    }
  }
`,$I=()=>{A(EI);const{org:e}=ht(),[{data:t},n]=ut({query:AI,variables:{orgId:e==null?void 0:e.id},pause:!e}),[{data:r},i]=ut({query:OI,variables:{input:{orgId:e==null?void 0:e.id}},pause:!e}),o=ce(()=>{var c,u;return r?(u=(c=r.emoteConnection)==null?void 0:c.nodes)==null?void 0:u.map(p=>({id:p.id,name:p.name,url:Fc(p,r.emoteSources)})):[]},[r]),a=K({emoteImport:!1});if(!e)return l(Oi,{});const s=()=>a.emoteImport.set(!0);return l("div",{className:"p-creator_p-emotes",children:[l("div",{className:"heading",children:[l("h2",{children:"Emotes and badges"}),l("button",{className:"t-button",onClick:s,children:"Import"})]}),l("h3",{className:"caps-title",children:"Emotes"}),l("section",{className:"grid-container emote-grid",children:[l(RI,{items:o,children:[l("p",{children:"No emotes yet. Get started by importing emotes from bttv and/or 7tv"}),l("button",{className:"t-button",onClick:s,children:"Import emotes"})]}),l(CI,{orgId:e.id,isVisible$:a.emoteImport,emoteImports:(t==null?void 0:t.emoteImportConnection.nodes)??[],onUpdate:()=>{n({requestPolicy:"network-only"}),i({requestPolicy:"network-only"})}})]})]})},RI=({items:e,children:t})=>e.length===0?l("div",{className:"empty-message",children:t}):l("div",{className:"icon-grid",children:e.map(n=>l("div",{className:"grid-item",children:[l("img",{src:n.url,alt:n.name}),l("p",{className:"item-name",children:n.name})]},n.id))}),PI=new J({getParentRoute:()=>Be,path:"/emotes",component:$I}),DI=$`.p-creator_p-general {
  max-width: 420px;
}
.p-creator_p-general > .save-button {
  margin-top: 20px;
  width: 100%;
}`,LI=V(()=>{A(DI);const{org:e}=ht(),t=K(()=>e),n=K(()=>e.socials??{}),{orgUpsert:r}=Eh(),i=K(!1),o=async()=>{if(i.peek())return;i.set(!0);const{error:a}=await r({input:{id:e.id,name:t.name.get(),socials:n.get()}});a&&Tr({type:Un.Modal,title:"AHHHH",subtitle:"Something went wrong. Maybe try again?",message:a.message,action:()=>null,buttonText:"Ok"}),i.set(!1)};return l("div",{className:"p-creator_p-general",children:[l(Gh,{editableOrg$:t,socials$:n}),l("button",{disabled:i.get(),className:"t-button save-button",onClick:o,children:"Save"})]})}),MI=new J({getParentRoute:()=>Be,path:"/general",component:LI}),FI=$`.p-creator_p-channels {
  max-width: 540px;
  margin: 0 auto;
}`,UI=B`
  query AppCreatorDashChannelsQuery($orgSlug: String!) {
    org(input: { slug: $orgSlug }) {
      id
      name
      slug
      socials
      channelConnection {
        nodes {
          id
          data
          sourceType
          sourceId
          sourceName
        }
      }
    }
  }
`,qI=V(()=>{A(FI);const{org:e}=ht(),[{data$:t}]=En({query:UI,variables:{orgSlug:e.slug}});return t.get()?l("div",{className:"p-creator_p-channels",children:l(Wh,{org:e})}):l(j,{})}),BI=new J({getParentRoute:()=>Be,path:"/channels",component:qI}),jI=$`.p-creators_p-apps > .apps-container {
  padding: 12px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-bottom: 24px;
}`,VI=$`.p-creators_p-apps_p-app-management-modal-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 416px;
  width: 80vw;
  max-width: 1136px;
}
.p-creators_p-apps_p-app-management-modal-container > .app-info {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
}
.p-creators_p-apps_p-app-management-modal-container > .app-info > .icon {
  width: var(--sizing-lg);
  height: var(--sizing-lg);
  background-color: #f357a1;
  border-radius: var(--border-radius-sm);
  display: flex;
  justify-content: center;
  align-items: center;
}
.p-creators_p-apps_p-app-management-modal-container > .app-info > .icon > img {
  width: var(--icon-size);
  height: var(--icon-size);
  display: block;
}
.p-creators_p-apps_p-app-management-modal-container > .app-info > .info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
}
.p-creators_p-apps_p-app-management-modal-container > .app-embed > iframe {
  width: 100%;
  height: 60vh;
  border: none;
}`,zI=B`
  query AppAppInstallConnectionQuery($input: AppInstallConnectionInput) {
    appInstallConnection(input: $input) {
      nodes {
        id
        appId
        orgId
        installedVersion
        app {
          path
          name
        }
      }
    }
  }
`,HI=B`
  query AppConnectionQuery($input: AppConnectionInput) {
    appConnection(input: $input) {
      nodes {
        id
        name
      }
    }
  }
`,WI=B`
  query AppAppManagementEmbedQuery($orgId: ID!) {
    embedConnection(input: { apiVersion: 2, orgId: $orgId, contentPageType: "appManagement" }) {
      nodes {
        id
        packageInstallId
      }
    }
  }
`,GI=B`
  mutation AppInstallUpsert($input: AppInstallUpsertInput!) {
    appInstallUpsert(input: $input) {
      appInstall {
        id
      }
    }
  }
`,YI=V(({isVisible$:e,appInstall$:t,embed$:n})=>(A(VI),l(Uc,{isVisible$:e,title:"App Management",closeModal:()=>e.set(!1),children:l("div",{className:"p-creators_p-apps_p-app-management-modal-container",children:[l("div",{className:"app-info",children:[l("div",{className:"icon",children:l("img",{src:"https://cdn.bio/assets/icons/global/light/add_on.svg"})}),l("div",{className:"info",children:[l(ai,{as:"h3",size:"md",children:t.app.name.get()}),l(ai,{as:"h3",size:"xs",children:t.app.path.get()})]})]}),l("div",{className:"app-embed",children:!!n.get()&&l("iframe",{src:`/embed/${n.id.get()}`})})]})}))),QI=V(()=>{var p,d,h;A(jI);const{org:e}=ht(),t=K(!1),n=K(),r=K(),[{data$:i}]=En({query:zI,variables:{input:{orgId:e.id}},opts:{additionalTypenames:["AppInstall"]}}),[{data$:o}]=En({query:WI,variables:{orgId:e.id},opts:{url:ge()}}),[{data$:a}]=En({query:HI,variables:{input:{status:"published"}}}),s=f=>{var g;t.set(!0),n.set(f);const m=(g=o.embedConnection.nodes.peek())==null?void 0:g.find(x=>x.packageInstallId===f.id);r.set(m)},c=((p=i.get())==null?void 0:p.appInstallConnection.nodes)||[],u=((h=(d=a.get())==null?void 0:d.appConnection.nodes)==null?void 0:h.filter(f=>!c.some(m=>m.appId===f.id)))||[];return l("div",{className:"p-creators_p-apps",children:[l(ai,{as:"h1",mb:"xl",children:"Apps"}),c!=null&&c.length?l(j,{children:[l(Gu,{as:"h2",size:"md",children:"My apps"}),l("div",{className:"apps-container",children:c==null?void 0:c.map(f=>l(ui,{iconUrl:"https://cdn.bio/assets/icons/global/light/add_on.svg",iconSize:"32px",heading:f.app.name,message:f.app.path,onClick:()=>s(f)},f.id))})]}):void 0,u!=null&&u.length?l(j,{children:[l(Gu,{as:"h2",size:"md",children:"Other apps"}),l("div",{className:"apps-container",children:u==null?void 0:u.map(f=>l(KI,{app:f,org:e},f.id))})]}):void 0,l(YI,{isVisible$:t,appInstall$:n,embed$:r})]})}),KI=V(({app:e,org:t})=>{const n=K(!1),r=async()=>{if(n.get())return;n.set(!0);const{data:i,error:o}=await ze({query:GI,variables:{input:{appLocator:{id:e.id},orgId:t.id}}});o&&alert(`There was an error installing: ${JSON.stringify(o)}`),n.set(!1)};return l(ui,{iconUrl:"https://cdn.bio/assets/icons/global/light/add_on.svg",iconSize:"32px",heading:e.name,message:e.name,buttonText:n.get()?"Installing...":"Install",buttonOnClick:()=>{r()}},e.id)}),JI=new J({getParentRoute:()=>Be,path:"/apps",component:QI}),XI=window.self!==window.top;XI&&(window.history.pushState=window.history.replaceState);const ZI=en.addChildren([xk,Ek,jN,a1,IN,qc.addChildren([$N]),rt.addChildren([TE,ZE,KE,_a.addChildren([tS,jT,lN]),_n.addChildren([q1,lT,X1]),NN,yN,Vk,P1,$i.addChildren([Bh,XN,gI,bI]),Be.addChildren([qh,MI,JI,BI,wI,PI,DS]),$S]),$n.addChildren([pT,wa.addChildren([PT,Mh]),DT])]),Vs=new og({routeTree:ZI}),eC=()=>l(dg,{router:Vs});ff().then(()=>{Ks(l(eC,{}),document.getElementById("app"))});export{xt as A,er as E,ce as F,he as L,Lh as O,rS as T,br as a,V as b,$ as c,K as d,tf as e,Et as f,gC as g,Wt as h,B as i,ut as j,j as k,n1 as l,mC as m,Gd as n,l as o,te as p,ln as q,Ee as r,$n as s,at as t,A as u,gb as v,ht as w,Fe as x,an as y,Oe as z};
