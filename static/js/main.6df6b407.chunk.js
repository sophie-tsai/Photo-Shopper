(this["webpackJsonpphoto-shopper"]=this["webpackJsonpphoto-shopper"]||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(28),a(6)),l=a(7),u=a(15),s=a(22),m=a(2);function f(e){return fetch(e).then((function(e){return e.json()})).then((function(t){var a=t;return e.includes("search")&&(a=t.results),a.map((function(e){return function(e){return{id:e.id,url:e.urls.regular,alt:e.alt_description,photographer:e.user.name,isFavorite:!1}}(e)}))}))}function h(e){return f("https://api.unsplash.com/photos?&per_page=30&page=".concat(e,"&client_id=").concat("py_AVXff_HcNI2VvUQFKlxwxEF4V-aCDHsK-FRfCwoo"))}function p(e,t){return f("https://api.unsplash.com/search/photos?&query=".concat(e,"&per_page=30&page=").concat(t,"&order_by=popular&client_id=").concat("py_AVXff_HcNI2VvUQFKlxwxEF4V-aCDHsK-FRfCwoo"))}var d=r.a.createContext();function v(e){var t=e.children,a=Object(n.useState)([]),c=Object(m.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)([]),f=Object(m.a)(l,2),v=f[0],E=f[1],g=Object(n.useState)([]),b=Object(m.a)(g,2),O=b[0],j=b[1],N=Object(n.useState)(""),S=Object(m.a)(N,2),C=S[0],x=S[1],y=Object(n.useState)(""),P=Object(m.a)(y,2),I=P[0],k=P[1],F=Object(n.useState)(1),w=Object(m.a)(F,2),_=w[0],K=w[1],H=Object(n.useState)(1),U=Object(m.a)(H,2),J=U[0],V=U[1];function A(e,t){"cart"!==t?j((function(t){return[].concat(Object(u.a)(t),[e])})):E((function(t){return[].concat(Object(u.a)(t),[e])}))}return Object(n.useEffect)((function(){if(h(J).then((function(e){return i(e)})),V((function(e){return e+1})),localStorage.cartStorage){var e=JSON.parse(localStorage.cartStorage);E(e)}if(localStorage.heartStorage){var t=JSON.parse(localStorage.heartStorage);j(t)}}),[]),Object(n.useEffect)((function(){localStorage.cartStorage=JSON.stringify(v)}),[v]),Object(n.useEffect)((function(){localStorage.heartStorage=JSON.stringify(O)}),[O]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Provider,{value:{allPhotos:o,toggleFavorite:function(e){var t=o.map((function(t){return t.id===e?(A(t,"loved"),Object(s.a)({},t,{isFavorite:!t.isFavorite})):t}));i(t)},cartItems:v,addItem:A,removeItem:function(e,t){"cart"!==t?j((function(t){return t.filter((function(t){return t.id!==e}))})):E((function(t){return t.filter((function(t){return t.id!==e}))}))},clearCart:function(){E([])},searchAndUpdate:function(e,t){K(1),i([]),p(e,_).then((function(e){return i(e)})).then(k(t)),K((function(e){return e+1}))},searchKeyWords:C,setSearchKeyWords:x,currentPage:I,setCurrentPage:k,heartItems:O,queryNextPage:function(){if(C)return p(C,_).then((function(e){return i(e)})),void K((function(e){return e+1}));h(J).then((function(e){return i(e)})),V((function(e){return e+1}))},queryPage:_}},t))}a(29);var E=function(){var e=Object(n.useContext)(d),t=e.cartItems,a=e.searchAndUpdate,c=e.searchKeyWords,o=e.setSearchKeyWords,u=e.heartItems,s=Object(i.g)().pathname,m=t.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line",f=u.length>0?"ri-heart-fill":"ri-heart-line";return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"headerContainer"},r.a.createElement("div",{className:"headerTextDiv"},r.a.createElement(l.b,{to:"/Photo-Shopper/"},r.a.createElement("span",{className:"headerText"},"PhotoShopper"))),r.a.createElement("div",{className:"searchbar"},r.a.createElement("input",{type:"text",name:"search",placeholder:"search beautiful images",value:c,onChange:function(e){var t=e.target.value;o(t)},onKeyUp:function(e){13===e.keyCode&&a(c,s)}})),r.a.createElement("div",{className:"icon-container"},r.a.createElement("div",{className:"heart-icon"},r.a.createElement(l.b,{to:"/Photo-Shopper/Heart"},r.a.createElement("i",{className:"".concat(f," header-icon ri-fw ri-2x")}))),r.a.createElement("div",{className:"cart-icon"},r.a.createElement(l.b,{to:"/Photo-Shopper/Cart"},r.a.createElement("i",{className:"".concat(m," header-icon ri-fw ri-2x")}))))))};var g=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useRef)(null);function o(){r(!0)}function i(){r(!1)}return Object(n.useEffect)((function(){return c.current.addEventListener("mouseenter",o),c.current.addEventListener("mouseleave",i),function(){c.current.removeEventListener("mouseenter",o),c.current.removeEventListener("mouseleave",i)}}),[]),[a,c]};var b=function(e){var t=e.item,a=g(),c=Object(m.a)(a,2),o=c[0],i=c[1],l=Object(n.useContext)(d).removeItem,u=o?"fill":"line";return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:"ri-delete-bin-".concat(u),ref:i,onClick:function(){return l(t.id,"cart")}}),r.a.createElement("img",{src:t.url,alt:t.alt,width:"160px"}),r.a.createElement("p",null,"$9.99"))};a(35);var O=function(){var e=Object(n.useState)("Place Order"),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useContext)(d),i=o.cartItems,l=o.clearCart,u=i.map((function(e){return r.a.createElement(b,{key:e.id,item:e})})),s=(9.99*i.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check Out"),u,i.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"total-cost"},"Total: ",s),r.a.createElement("div",{className:"order-button"},r.a.createElement("button",{onClick:function(){c("Ordering..."),setTimeout((function(){console.log("Order placed!"),c("Place Order"),l()}),3e3)}},a))):r.a.createElement("h2",{className:"empty"},"You have no items in your cart"))};var j=function(e){var t=g(),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useContext)(d).removeItem,l=e.item,u=c?"fill":"line";return r.a.createElement("div",{className:"heart-item"},r.a.createElement("i",{className:"ri-close-circle-".concat(u),ref:o,onClick:function(){return i(l.id,"heart")}}),r.a.createElement("img",{src:l.url,alt:l.url,width:"160px"}),r.a.createElement("span",null,"by ",l.photographer))};a(36);var N=function(){var e=Object(n.useContext)(d).heartItems,t=e.map((function(e){return r.a.createElement(j,{key:e.id,item:e})}));return r.a.createElement("div",{className:"heart-page"},r.a.createElement("h1",null,"Your Favorites"),t,0===e.length&&r.a.createElement("h2",{className:"empty"},"Hm, it's empty!"))};var S=function(e){var t=e.className,a=e.img,c=Object(n.useContext)(d),o=c.toggleFavorite,i=c.addItem,l=c.cartItems,u=c.removeItem,s=c.heartItems,f=g(),h=Object(m.a)(f,2),p=h[0],v=h[1];return r.a.createElement("div",{className:"".concat(t," image-container"),ref:v},r.a.createElement("img",{src:a.url,alt:a.alt,className:"image-grid"}),s.some((function(e){return e.id===a.id}))?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){o(a.id),u(a.id,"heart")}}):p?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return o(a.id)}}):void 0,l.some((function(e){return e.id===a.id}))?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return u(a.id,"cart")}}):p?r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return i(a,"cart")}}):void 0)},C=a(21),x=a.n(C);a(37);var y=function(){var e=Object(n.useContext)(d),t=e.allPhotos,a=e.queryNextPage,c=Object(n.useCallback)((function(e){null!==e&&x.a.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:"https://maxst.icons8.com/vue-static/landings/animated-icons/icons/iphone-spinner-1/iphone-spinner-1.json"})}),[]),o=t.map((function(e){return r.a.createElement(S,{key:e.id,img:e})}));return r.a.createElement("div",{className:"photos-container"},0===t.length?r.a.createElement("div",{ref:c,className:"loading-div"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("main",{className:"photos"},o),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{className:"next-page",onClick:a},"next page"))))};a(38);var P=function(){var e=Object(n.useContext)(d),t=e.currentPage,a=e.setCurrentPage;return Object(n.useEffect)((function(){a("")}),[t]),r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(i.d,null,"/Photo-Shopper/Cart"===t&&r.a.createElement(i.a,{exact:!0,to:"/Photo-Shopper/"}),r.a.createElement(i.b,{exact:!0,path:"/Photo-Shopper/"},r.a.createElement(y,null)),r.a.createElement(i.b,{exact:!0,path:"/Photo-Shopper/Heart"},r.a.createElement(N,null)),r.a.createElement(i.b,{exact:!0,path:"/Photo-Shopper/Cart"},r.a.createElement(O,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(l.a,null,r.a.createElement(P,null)))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.6df6b407.chunk.js.map