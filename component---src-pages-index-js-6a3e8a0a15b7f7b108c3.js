(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,s=r(a("PJYZ")),n=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=c(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:s}),d.default.createElement("source",{media:i,srcSet:a,sizes:s}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,s=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(s?'sizes="'+s+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',n=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+n+o+a+r+t+s+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,s=d.default.createElement(R,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),s):s},R=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,s=e.style,n=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:n,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))}));R.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)(a)),a.handleRef=a.handleRef.bind((0,s.default)(a)),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,s=void 0===i?{}:i,n=e.imgStyle,o=void 0===n?{}:n,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,L=e.loading,I=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:V?1:0,transition:C?"opacity "+b+"ms":"none"},o),T="boolean"==typeof h?"lightgray":h,k={transitionDelay:b+"ms"},x=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&k,{},o,{},f),P={title:t,alt:this.state.isVisible?"":a,style:x,className:g,itemProp:v};if(p){var q=p,W=q[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),T&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&k)}),W.base64&&d.default.createElement(z,{src:W.base64,spreadProps:P,imageVariants:q,generateSources:w}),W.tracedSVG&&d.default.createElement(z,{src:W.tracedSVG,spreadProps:P,imageVariants:q,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(q),d.default.createElement(R,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:L},W,{imageVariants:q}))}}))}if(m){var j=m,G=j[0],B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},s);return"inherit"===s.display&&delete B.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},T&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:T,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},C&&k)}),G.base64&&d.default.createElement(z,{src:G.base64,spreadProps:P,imageVariants:j,generateSources:w}),G.tracedSVG&&d.default.createElement(z,{src:G.tracedSVG,spreadProps:P,imageVariants:j,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,S(j),d.default.createElement(R,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:L},G,{imageVariants:j}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});V.propTypes={resolutions:C,sizes:N,fixed:u.default.oneOfType([C,u.default.arrayOf(C)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var T=V;t.default=T},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var r=a("q1tI"),i=a.n(r),s=a("Wbzz"),n=a("9eSz"),o=a.n(n),l=a("hTlr"),d=a("vrFN");t.default=function(e){return i.a.createElement(l.a,null,i.a.createElement(d.a,{title:"Home"}),i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(o.a,{fluid:e.data.placeholderImage.childImageSharp.fluid})),i.a.createElement(s.Link,{to:"/blog/"},"Blog"))};var u="3768655285"}}]);
//# sourceMappingURL=component---src-pages-index-js-6a3e8a0a15b7f7b108c3.js.map