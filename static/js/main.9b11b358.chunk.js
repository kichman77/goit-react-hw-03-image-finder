(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports={btn:"Button_btn__3xaJM"}},26:function(e,t,a){},27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),c=a.n(r),s=(a(26),a(9)),l=a(4),i=a(5),u=a(7),d=a(6),m=(a(27),a(19)),h=a.n(m),p=function(e,t,a){var n="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("18623552-aad7218af3511e8a6a5692c49","&image_type=photo&orientation=horizontal&per_page=").concat(a);return h.a.get(n).then((function(e){return e.data})).then((function(e){return e.hits})).then((function(e){return e}))},j=a(0),b=function(e){var t=e.getQueryValue;return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",name:"search",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},g=a(70),f=function(e){var t=e.src,a=e.source,n=e.openModal;return Object(j.jsx)("li",{onClick:function(){return n(a)},className:"ImageGalleryItem",children:Object(j.jsx)("img",{src:t,alt:"img",className:"ImageGalleryItem-image"})})},y=function(e){var t=e.galleryItems,a=e.openModal;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.webformatURL,n=e.largeImageURL;return Object(j.jsx)(f,{openModal:a,src:t,source:n},Object(g.a)())}))})},v=(a(47),a(20)),O=a.n(v),x=function(){return Object(j.jsx)(O.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.closeModal;window.addEventListener("click",e),window.addEventListener("keydown",e)}},{key:"componentDidUpdate",value:function(){var e=this.props.closeModal;window.addEventListener("click",e),window.addEventListener("keydown",e)}},{key:"componentWillUnmount",value:function(){var e=this.props.closeModal;window.removeEventListener("click",e),window.removeEventListener("keydown",e)}},{key:"render",value:function(){var e=this.props.source;return Object(j.jsx)("div",{className:"Overlay",children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:e,alt:"img"})})})}}]),a}(n.Component),M=a(21),k=a.n(M),I=function(e){var t=e.getFetchData;return Object(j.jsx)("button",{onClick:t,className:k.a.btn,type:"button",children:"Load more"})},S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",page:1,perPage:12,galleryItems:[],source:"",modal:!1,loader:!1,loadMore:!1},e.getQueryValue=function(t){t.preventDefault(),e.setState({query:t.target.elements.search.value,galleryItems:[]}),t.target.elements.search.value=""},e.getFetchData=function(){var t=e.state,a=t.query,n=t.page,o=t.perPage;return e.setState({loader:!0}),p(a,n,o).then((function(t){t.length>0&&e.setState((function(e){return{galleryItems:[].concat(Object(s.a)(e.galleryItems),Object(s.a)(t)),page:e.page+1,loadMore:!0}})),n>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).finally((function(){return e.setState({loader:!1})}))},e.openModal=function(t){return e.setState({source:t,modal:!0})},e.closeModal=function(t){"Escape"!==t.code&&"IMG"===t.target.nodeName||e.setState({source:"",modal:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.getFetchData()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.getQueryValue,t=this.openModal,a=this.closeModal,n=this.getFetchData,o=this.state,r=o.galleryItems,c=o.modal,s=o.source,l=o.loader,i=o.loadMore;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{getQueryValue:e}),Object(j.jsx)(y,{galleryItems:r,openModal:t}),l&&Object(j.jsx)(x,{}),c&&Object(j.jsx)(w,{closeModal:a,source:s}),i&&r.length>0&&Object(j.jsx)(I,{getFetchData:n})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9b11b358.chunk.js.map