(this["webpackJsonpphoto-shopper"]=this["webpackJsonpphoto-shopper"]||[]).push([[0],{22:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),i=(n(27),n(8)),l=n(20),u=n(21),m=n(4),s=r.a.createContext();function f(e){var t=e.children,n=Object(a.useState)([]),c=Object(m.a)(n,2),o=c[0],i=c[1],f=Object(a.useState)([]),v=Object(m.a)(f,2),d=v[0],E=v[1];return Object(a.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Provider,{value:{allPhotos:o,toggleFavorite:function(e){var t=o.map((function(t){return t.id===e?Object(u.a)({},t,{isFavorite:!t.isFavorite}):t}));i(t)},cartItems:d,addToCart:function(e){E((function(t){return[].concat(Object(l.a)(t),[e])}))},removeFromCart:function(e){E((function(t){return t.filter((function(t){return t.id!==e}))}))},clearCart:function(){E([])}}},t))}var v=function(){var e=Object(a.useContext)(s).cartItems.length>0?"ri-shopping-cart-fill":"ri-shopping-cart-line";return r.a.createElement("header",null,r.a.createElement(i.b,{to:"/Photo-Shopper"},r.a.createElement("h2",null,"Photo Shopper")),r.a.createElement(i.b,{to:"/Photo-Shopper/cart"},r.a.createElement("i",{className:"".concat(e," ri-fw ri-2x")})))};var d=function(){var e=Object(a.useState)(!1),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useRef)(null);function o(){r(!0)}function i(){r(!1)}return Object(a.useEffect)((function(){return c.current.addEventListener("mouseenter",o),c.current.addEventListener("mouseleave",i),function(){c.current.removeEventListener("mouseenter",o),c.current.removeEventListener("mouseleave",i)}}),[]),[n,c]};var E=function(e){var t=e.item,n=d(),c=Object(m.a)(n,2),o=c[0],i=c[1],l=Object(a.useContext)(s).removeFromCart,u=o?"fill":"line";return r.a.createElement("div",{className:"cart-item"},r.a.createElement("i",{className:"ri-delete-bin-".concat(u),ref:i,onClick:function(){return l(t.id)}}),r.a.createElement("img",{src:t.url,width:"130px"}),r.a.createElement("p",null,"$5.99"))};var h=function(){var e=Object(a.useState)("Place Order"),t=Object(m.a)(e,2),n=t[0],c=t[1],o=Object(a.useContext)(s),i=o.cartItems,l=o.clearCart,u=i.map((function(e){return r.a.createElement(E,{key:e.id,item:e})})),f=(5.99*i.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"),u,r.a.createElement("p",{className:"total-cost"},"Total: ",f),r.a.createElement("div",{className:"order-button"},i.length>0?r.a.createElement("button",{onClick:function(){c("Ordering..."),setTimeout((function(){console.log("Order placed!"),c("Place Order"),l()}),3e3)}},n):r.a.createElement("h2",null,"You have no items in your cart")))};var p=function(e){var t=e.className,n=e.img,c=Object(a.useContext)(s),o=c.toggleFavorite,i=c.addToCart,l=c.cartItems,u=c.removeFromCart,f=d(),v=Object(m.a)(f,2),E=v[0],h=v[1];return r.a.createElement("div",{className:"".concat(t," image-container"),ref:h},r.a.createElement("img",{src:n.url,className:"image-grid"}),n.isFavorite?r.a.createElement("i",{className:"ri-heart-fill favorite",onClick:function(){return o(n.id)}}):E?r.a.createElement("i",{className:"ri-heart-line favorite",onClick:function(){return o(n.id)}}):void 0,l.some((function(e){return e.id===n.id}))?r.a.createElement("i",{className:"ri-shopping-cart-fill cart",onClick:function(){return u(n.id)}}):E?r.a.createElement("i",{className:"ri-add-circle-line cart",onClick:function(){return i(n)}}):void 0)};var b=function(){var e=Object(a.useContext)(s).allPhotos.map((function(e,t){return r.a.createElement(p,{key:e.id,img:e,className:(n=t,n%5===0?"big":n%6===0?"wide":void 0)});var n}));return r.a.createElement("main",{className:"photos"},e)},g=(n(33),n(6));var O=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/Photo-Shopper"},r.a.createElement(b,null)),r.a.createElement(g.a,{path:"/Photo-Shopper/cart"},r.a.createElement(h,null))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null,r.a.createElement(i.a,null,r.a.createElement(O,null)))),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b797ad0c.chunk.js.map