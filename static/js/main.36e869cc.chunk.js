(this["webpackJsonpphoto-shopper"]=this["webpackJsonpphoto-shopper"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),l=a.n(c),o=(a(23),a(7));var m=function(e){var t=e.className,a=e.img;return r.a.createElement("div",{className:"".concat(t," image-container")},r.a.createElement("img",{src:a.url,className:"image-grid"}))};var u=a(17),i=r.a.createContext();function s(e){var t=e.children,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Provider,{value:{allPhotos:l}},t))}var E=function(){var e=Object(n.useContext)(i).allPhotos.map((function(e,t){return r.a.createElement(m,{key:e.id,img:e,className:(a=t,a%5===0?"big":a%6===0?"wide":void 0)});var a}));return r.a.createElement("main",{className:"photos"},e)};var h=function(){return r.a.createElement("header",null,r.a.createElement(o.b,{to:"/"},r.a.createElement("h2",null,"Photo Shopper")),r.a.createElement(o.b,{to:"/cart"},r.a.createElement("i",{className:"ri-shopping-cart-line ri-fw ri-2x"})))};var p=function(){return r.a.createElement("main",{className:"cart-page"},r.a.createElement("h1",null,"Check out"))},f=(a(29),a(5));var v=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(f.a,{path:"/cart"},r.a.createElement(p,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null,r.a.createElement(o.a,null,r.a.createElement(v,null)))),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.36e869cc.chunk.js.map