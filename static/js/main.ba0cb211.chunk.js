(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],[,function(e,t,a){e.exports={recipe:"recipe_recipe__ue-8s",image:"recipe_image__7bRnZ",try:"recipe_try__10Gc7"}},,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),l=(a(12),a(3)),o=a.n(l),s=a(6),u=a(2),m=a(1),p=a.n(m),f=function(e){var t=e.title,a=e.calories,n=e.image,c=e.ingredients,i=e.url;return r.a.createElement("div",{className:p.a.recipe},r.a.createElement("h1",null,t),r.a.createElement("img",{className:p.a.image,src:n,alt:""}),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("p",null,r.a.createElement("b",null,"Calories : "),a),r.a.createElement("a",{className:p.a.try,href:i},"Try it.!"))};a(14);var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),m=l[0],p=l[1],h=Object(n.useState)("chicken"),d=Object(u.a)(h,2),b=d[0],E=d[1];Object(n.useEffect)((function(){g()}),[b]);var g=function(){var e=Object(s.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(b,"&app_id=").concat("21a1ba30","&app_key=").concat("e63e2d27d9fd6290ad5d6cd717d72f8a"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.hits),console.log(a.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(m),p("")},className:"search-form"},r.a.createElement("input",{className:"search-bar",type:"text",value:m,onChange:function(e){p(e.target.value)}}),r.a.createElement("button",{className:"search-button",type:"submit"},"Search")),r.a.createElement("div",{className:"recipes"},a.map((function(e){return r.a.createElement(f,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})}))),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("b",null,"Owner : Sachith Mayantha Fernando"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ba0cb211.chunk.js.map