import{l as p,y as U,g as C,E as G}from"./index-46f7a500.js";var q=/[\s\n\\/='"\0<>]/,z=/^(xlink|xmlns|xml)([A-Z])/,J=/^accessK|^auto[A-Z]|^ch|^col|cont|cross|dateT|encT|form[A-Z]|frame|hrefL|inputM|maxL|minL|noV|playsI|readO|rowS|spellC|src[A-Z]|tabI|item[A-Z]/,Q=/^ac|^ali|arabic|basel|cap|clipPath$|clipRule$|color|dominant|enable|fill|flood|font|glyph[^R]|horiz|image|letter|lighting|marker[^WUH]|overline|panose|pointe|paint|rendering|shape|stop|strikethrough|stroke|text[^L]|transform|underline|unicode|units|^v[^i]|^w|^xH/,X=/["&<]/;function D(e){if(e.length===0||X.test(e)===!1)return e;for(var r=0,t=0,a="",i="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}t!==r&&(a+=e.slice(r,t)),a+=i,r=t+1}return t!==r&&(a+=e.slice(r,t)),a}var B={},Y=new Set(["animation-iteration-count","border-image-outset","border-image-slice","border-image-width","box-flex","box-flex-group","box-ordinal-group","column-count","fill-opacity","flex","flex-grow","flex-negative","flex-order","flex-positive","flex-shrink","flood-opacity","font-weight","grid-column","grid-row","line-clamp","line-height","opacity","order","orphans","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-miterlimit","stroke-opacity","stroke-width","tab-size","widows","z-index","zoom"]),N=/[A-Z]/g;function I(e){var r="";for(var t in e){var a=e[t];if(a!=null&&a!==""){var i=t[0]=="-"?t:B[t]||(B[t]=t.replace(N,"-$&").toLowerCase()),d=";";typeof a!="number"||i.startsWith("--")||Y.has(i)||(d="px;"),r=r+i+":"+a+d}}return r||void 0}var Z,g,S,v,F=[],M=Array.isArray,$=Object.assign;function ee(e,r){var t=p.__s;p.__s=!0,Z=p.__b,g=p.diffed,S=p.__r,v=p.unmount;var a=U(C,null);a.__k=[e];try{return y(e,r||V,!1,void 0,a)}finally{p.__c&&p.__c(e,F),p.__s=t,F.length=0}}function O(){this.__d=!0}var V={};function P(e,r){var t,a=e.type,i=!0;return e.__c?(i=!1,(t=e.__c).state=t.__s):t=new a(e.props,r),e.__c=t,t.__v=e,t.props=e.props,t.context=r,t.__d=!0,t.state==null&&(t.state=V),t.__s==null&&(t.__s=t.state),a.getDerivedStateFromProps?t.state=$({},t.state,a.getDerivedStateFromProps(t.props,t.state)):i&&t.componentWillMount?(t.componentWillMount(),t.state=t.__s!==t.state?t.__s:t.state):!i&&t.componentWillUpdate&&t.componentWillUpdate(),S&&S(e),t.render(t.props,t.state,r)}function y(e,r,t,a,i){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":D(e+"");if(M(e)){var d="";i.__k=e;for(var x=0;x<e.length;x++){var f=e[x];f!=null&&typeof f!="boolean"&&(d+=y(f,r,t,a,i))}return d}if(e.constructor!==void 0)return"";e.__=i,Z&&Z(e);var _,o,u,s=e.type,c=e.props,A=r;if(typeof s=="function"){if(s===C){if(c.tpl){for(var L="",w=0;w<c.tpl.length;w++)if(L+=c.tpl[w],c.exprs&&w<c.exprs.length){var b=c.exprs[w];if(b==null)continue;typeof b!="object"||b.constructor!==void 0&&!M(b)?L+=b:L+=y(b,r,t,a,e)}return L}if(c.UNSTABLE_comment)return"<!--"+D(c.UNSTABLE_comment||"")+"-->";o=c.children}else{if((_=s.contextType)!=null){var H=r[_.__c];A=H?H.props.value:_.__}if(s.prototype&&typeof s.prototype.render=="function")o=P(e,A),u=e.__c;else{e.__c=u={__v:e,props:c,context:A,setState:O,forceUpdate:O,__d:!0,__h:[]};for(var K=0;u.__d&&K++<25;)u.__d=!1,S&&S(e),o=s.call(u,c,A);u.__d=!0}if(u.getChildContext!=null&&(r=$({},r,u.getChildContext())),(s.getDerivedStateFromError||u.componentDidCatch)&&p.errorBoundaries){var T="";o=o!=null&&o.type===C&&o.key==null?o.props.children:o;try{return T=y(o,r,t,a,e)}catch(j){return s.getDerivedStateFromError&&(u.__s=s.getDerivedStateFromError(j)),u.componentDidCatch&&u.componentDidCatch(j,{}),u.__d&&(o=P(e,r),(u=e.__c).getChildContext!=null&&(r=$({},r,u.getChildContext())),T=y(o=o!=null&&o.type===C&&o.key==null?o.props.children:o,r,t,a,e)),T}finally{g&&g(e),e.__=void 0,v&&v(e)}}}var W=y(o=o!=null&&o.type===C&&o.key==null?o.props.children:o,r,t,a,e);return g&&g(e),e.__=void 0,v&&v(e),W}var h,m="<"+s,k="";for(var n in c){var l=c[n];switch(n){case"children":h=l;continue;case"key":case"ref":case"__self":case"__source":continue;case"htmlFor":if("for"in c)continue;n="for";break;case"className":if("class"in c)continue;n="class";break;case"defaultChecked":n="checked";break;case"defaultSelected":n="selected";break;case"defaultValue":case"value":switch(n="value",s){case"textarea":h=l;continue;case"select":a=l;continue;case"option":a!=l||"selected"in c||(m+=" selected")}break;case"dangerouslySetInnerHTML":k=l&&l.__html;continue;case"style":typeof l=="object"&&(l=I(l));break;case"acceptCharset":n="accept-charset";break;case"httpEquiv":n="http-equiv";break;default:if(z.test(n))n=n.replace(z,"$1:$2").toLowerCase();else{if(q.test(n))continue;n[4]!=="-"&&n!=="draggable"||l==null?t?Q.test(n)&&(n=n==="panose1"?"panose-1":n.replace(/([A-Z])/g,"-$1").toLowerCase()):J.test(n)&&(n=n.toLowerCase()):l+=""}}l!=null&&l!==!1&&typeof l!="function"&&(m=l===!0||l===""?m+" "+n:m+" "+n+'="'+D(l+"")+'"')}if(q.test(s))throw new Error(s+" is not a valid HTML tag name in "+m+">");return k||(typeof h=="string"?k=D(h):h!=null&&h!==!1&&h!==!0&&(k=y(h,r,s==="svg"||s!=="foreignObject"&&t,a,e))),g&&g(e),e.__=void 0,v&&v(e),!k&&te.has(s)?m+"/>":m+">"+k+"</"+s+">"}var te=new Set(["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"]);let E;const R=p.vnode;p.vnode=e=>{R&&R(e),E&&E(e)};async function ae(e,r){r=r||{};const t=r.maxDepth||10,a=r.props;let i=0;typeof e=="function"?e=U(e,a):a&&(e=G(e,a));const d=()=>{if(!(++i>t))try{return ee(e)}catch(f){if(f&&f.then)return f.then(d);throw f}};let x=new Set;E=({type:f,props:_})=>{f==="a"&&_&&_.href&&(!_.target||_.target==="_self")&&x.add(_.href)};try{let f=await d();return f+='<script type="isodata"><\/script>',{html:f,links:x}}finally{E=null}}export{ae as default};
