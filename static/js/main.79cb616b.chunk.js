(this.webpackJsonplpecommerce=this.webpackJsonplpecommerce||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},34:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(24),r=c.n(a),s=(c(31),c(9)),o=c(10),j=c(12),l=c(11),d=c(3),u=c(5),b=(c(32),c(0)),h=Object(n.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,i=e.children;return Object(b.jsx)(h.Provider,{value:Object(n.useReducer)(t,c),children:i})},p=function(){return Object(n.useContext)(h)};c(34);var x=function(e){var t=Object(n.useState)(!0),c=Object(d.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(!1),s=Object(d.a)(r,2),o=s[0],j=s[1],l=Object(n.useState)([]),h=Object(d.a)(l,2),O=h[0],x=h[1],m=p(),f=Object(d.a)(m,2),v=(f[0].basket,f[1]);Object(n.useEffect)((function(){g()}),[]);var g=function(){var t=e.match.params.id;fetch("https://fakestoreapi.com/products/".concat(t)).then((function(e){return e.json()})).then((function(e){x(e),a(!1)})).catch((function(e){a(!1),j(!0)}))};return Object(b.jsxs)("div",{className:"details",children:[i&&Object(b.jsx)("p",{children:"Loading..."}),o&&Object(b.jsx)("p",{children:o}),Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("img",{src:O.image,alt:""}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h3",{children:O.title}),Object(b.jsxs)("span",{children:["$",O.price]}),Object(b.jsx)("p",{children:O.description}),Object(b.jsx)("button",{onClick:function(){v({type:"ADD_TO_BASKET",item:{id:O.id,title:O.title,image:O.image,price:O.price}})},children:"Add to Basket"}),Object(b.jsx)("button",{onClick:function(){v({type:"REMOVE_FROM_BASKET",id:O.id})},children:"Delete From Basket"}),Object(b.jsx)(u.b,{to:"/checkout",className:"cart",children:"View Basket"})]})]},O.id)]})};var m=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(!1),r=Object(d.a)(a,2),s=r[0],o=r[1],j=Object(n.useState)([]),l=Object(d.a)(j,2),h=(l[0],l[1],Object(n.useState)([])),O=Object(d.a)(h,2),x=O[0],m=O[1],f=p(),v=Object(d.a)(f,2),g=(v[0].basket,v[1]);Object(n.useEffect)((function(){k()}),[]);var k=function(){fetch("https://fakestoreapi.com/products?limite=21").then((function(e){return e.json()})).then((function(e){m(e),i(!1)})).catch((function(e){i(!1),o(!0)}))};return Object(b.jsxs)("div",{id:"product",children:[c&&Object(b.jsx)("p",{children:"Loading..."}),s&&Object(b.jsx)("p",{children:s}),x.map((function(e,t){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)(u.b,{to:"/product/".concat(e.id),children:Object(b.jsx)("img",{src:e.image,alt:""})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h3",{children:Object(b.jsx)(u.b,{to:"/product/".concat(e.id),children:e.title})}),Object(b.jsxs)("span",{children:["$",e.price]}),Object(b.jsx)("button",{onClick:function(){return t=e.id,c=e.title,n=e.image,i=e.price,void g({type:"ADD_TO_BASKET",item:{id:t,title:c,image:n,price:i}});var t,c,n,i},children:"Add to Basket"}),Object(b.jsx)("button",{onClick:function(){return t=e.id,void g({type:"REMOVE_FROM_BASKET",id:t});var t},children:"Remove From Basket"})]},e.id)]},e.id)}))]})},f=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Customer Service"}),Object(b.jsx)("lu",{children:Object(b.jsx)("li",{children:"Call 1-800-345-0000"})})]})}}]),c}(n.Component),v=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"JP Super Store"}),Object(b.jsx)("lu",{children:Object(b.jsx)("li",{children:"JP Super Store's, Inc. (originally Federated Department Stores, Inc.) is an American holding company founded by Xavier Warren in 1929. Upon its establishment, Federated held ownership of the regional department store chains Abraham & Straus, Lazarus, Filene's, and Shillito's. Bloomingdale's joined Federated Department Stores the following year. Throughout its early history, frequent acquisitions and divestitures saw the company operate a number of nameplates. In 1994, Federated took over the department store chain JP's. With the acquisition of The May Department Stores Company in 2005, the regional nameplates were retired and replaced by the JP's and Bloomingdale's brands nationwide by 2006. Ultimately, Federated itself was renamed JP's, Inc. in 2007. JP's, Inc. has been headquartered within JP's Herald Square in New York City since 2020, and was headquartered in Cincinnati, Ohio from 2005\u20132020. It operates the subsidiaries JP's, Bloomingdale's, and the beauty store chain Bluemercury, all of which have a flagship store located in the New York City borough of Manhattan. As of May 1, 2021, the company operated 725 locations (787 boxes, including 545 full-line boxes) in the United States, Guam, and Puerto Rico.[2] Its namesake locations and related operations account for 90% of its revenue. According to Deloitte, JP's, Inc. is the world's largest fashion goods retailer and the 36th largest retailer overall, based on the company's reported 2010 retail sales revenue of $25 billion (equivalent to $29.7 billion in 2020).[3]"})})]})}}]),c}(n.Component),g=(c(40),c(2));var k=function(){Object(g.f)();var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)(""),r=Object(d.a)(a,2),s=r[0],o=r[1];return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign-in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("h5",{children:"Password "}),Object(b.jsx)("input",{type:"password",value:s,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault()},className:"login__signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By Signing-in your agree to JP Super Store Conditions of Use & Sale. Please see out Privacy Notice,our Cookies Notice and our Interest-Base Ads Notice."}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault()},className:"login__registerButton",children:"Create your JP Super Store account"})]})})},y=(c(41),c.p+"static/media/pexels-kenneth-carpina-1616097.c7659dfc.jpg"),S=(c(42),c(26)),_=c.n(S),C=c(22),N=c(13),B=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(N.a)(Object(N.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(C.a)(e.basket);return c>=0?n.splice(c,1):console.warn("Cant remove product (id. ".concat(t.id,") as its not in basket! ")),Object(N.a)(Object(N.a)({},e),{},{basket:n});case"SET_USER":return Object(N.a)(Object(N.a)({},e),{},{user:t.user});default:return e}};var E=function(){var e=Object(g.f)(),t=p(),c=Object(d.a)(t,2),n=c[0].basket;return c[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(_.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",n.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:B(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})};var w=function(){var e=p(),t=Object(d.a)(e,2),c=t[0],n=c.basket,i=(c.user,t[1]);return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:y,alt:"kenneth"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),n.map((function(e,t){return Object(b.jsxs)("div",{className:"checkout__item",children:[Object(b.jsx)("img",{className:"checkout__image",src:e.image}),Object(b.jsx)("p",{className:"checkoutProduct__title",children:e.title}),Object(b.jsxs)("p",{className:"checkoutproduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:e.price})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{onClick:function(){return t=e.id,void i({type:"REMOVE_FROM_BASKET",id:t});var t},children:"Remove From Basket"})})]},e.id)}))]})]}),Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(E,{})})]})},T=c.p+"static/media/pexels-cottonbro-4829075.03013bd6.jpg",A=(c(44),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"central",children:Object(b.jsx)("div",{className:"central-img",children:Object(b.jsx)("img",{src:T,alt:"cottobro"})})})}}]),c}(n.Component)),F=c.p+"static/media/shopping-cart-solid.d146d6c3.svg";c(45);var D=function(){var e=p(),t=Object(d.a)(e,1)[0].basket;return Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"logo",children:Object(b.jsx)("h1",{children:Object(b.jsx)(u.b,{to:"/",children:"JP Super Store"})})}),Object(b.jsxs)("nav",{children:[Object(b.jsxs)("ul",{className:"toggle",children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(u.b,{to:"/",children:"Home"})," "]}),Object(b.jsxs)("li",{children:[Object(b.jsx)(u.b,{to:"/products",children:"Product"})," "]}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/contact",children:"Contact"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/about",children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(u.b,{to:"/login",children:"Login"})})]}),Object(b.jsxs)("div",{className:"nav-cart",children:[Object(b.jsx)("span",{children:null===t||void 0===t?void 0:t.length}),Object(b.jsx)(u.b,{to:"/checkout",children:Object(b.jsx)("img",{src:F,alt:"",width:"20"})})]})]})]})};var I=function(){return Object(b.jsx)("div",{children:"Payment Process"})},J=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(D,{}),Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{path:"/",exact:!0,component:A}),Object(b.jsx)(g.a,{path:"/contact",component:f}),Object(b.jsx)(g.a,{path:"/about",component:v}),Object(b.jsx)(g.a,{path:"/login",component:k}),Object(b.jsx)(g.a,{path:"/payment",component:I}),Object(b.jsx)(g.a,{path:"/checkout",component:w}),Object(b.jsx)(g.a,{path:"/products",exact:!0,component:m}),Object(b.jsx)(g.a,{path:"/product/:id",component:x})]})]})}}]),c}(n.Component),M=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"app",children:Object(b.jsx)(J,{})})}}]),c}(n.Component),R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{basket:[]},reducer:P,children:Object(b.jsx)(M,{})})}),document.getElementById("root")),R()}},[[46,1,2]]]);
//# sourceMappingURL=main.79cb616b.chunk.js.map