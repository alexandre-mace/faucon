(this.webpackJsonpfaucon=this.webpackJsonpfaucon||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('["Astroturfing","Amn\xe9sie collective","Fakelore","Redwashing","Propagande","D\xe9magogie","Surcharge informationnelle"]')},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(1),o=t.n(i),a=t(4),l=t.n(a),c=(t(11),t(2)),s=(t(12),t(5)),u=window.matchMedia("(max-width: 600px)"),d=function(e){return e.responseXML.querySelectorAll("h1")[0].innerText},f=function(e){var n,t=e.responseXML.querySelectorAll("h2:not(#mw-toc-heading)"),r=[],i=t[0];for(i.innerText.includes("de navigation")&&(i=t[1]),n=0;n<8;n++){if(i&&"P"===i.tagName){for(;null!==i&&"P"===i.tagName;)r.push(i),i=i.previousElementSibling;return r=r.map((function(e){return e.innerText})).reverse()}if(u.matches&&i.previousElementSibling&&"SECTION"===i.previousElementSibling.tagName){var o=i.previousElementSibling.lastChild;for(n=0;n<5;n++){if(o&&"P"===o.tagName)return Array.from(o.parentNode.childNodes).filter((function(e){return"P"===e.tagName})).map((function(e){return e.innerText}));o=o.previousElementSibling}}i=null===i.previousElementSibling?i.parentNode:i.previousElementSibling}return r},m=function(e){var n=e.responseXML.querySelector("#Articles_connexes");if(null!==n){var t,r=n.parentNode;for(t=0;t<8;t++){if(r&&r.className&&r.className.includes("colonnes")&&r.childNodes[1]&&"UL"===r.childNodes[1].tagName)return Array.from(r.childNodes[1].childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if(r&&"UL"===r.tagName)return Array.from(r.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if(u.matches&&"SECTION"===r.tagName&&Array.from(r.childNodes).length>0){if(console.log(r),Array.from(r.childNodes).filter((function(e){return"UL"===e.tagName})).length>0)return Array.from(Array.from(r.childNodes).filter((function(e){return"UL"===e.tagName}))[0].childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if(Array.from(r.childNodes).filter((function(e){return e.className.includes("colonnes")})).length>0)return Array.from(Array.from(r.childNodes).filter((function(e){return e.className.includes("colonnes")}))[0].firstChild.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}))}r=r.nextSibling}return[]}if(null!==(n=e.responseXML.querySelector("#Voir_aussi"))){var i=n.parentNode;for(t=0;t<5;t++){if(i&&"UL"===i.tagName)return Array.from(i.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));i=null===i.nextSibling?i.parentNode:i.nextSibling}}return[]},h=function(e,n){var t=new XMLHttpRequest;t.open("GET","https://eerie-alien-18238.herokuapp.com/https://fr.wikipedia.org/wiki/"+e.replaceAll(" ","_"),!0),t.responseType="document",t.onload=function(e){if(4===t.readyState){if(200!==t.status)return console.error(t.status,t.statusText),void n({title:"Page non atteignable",description:["D\xe9sol\xe9, Faucon n'a pas pu trouver la page."],relateds:[]});if("undefined"!==typeof n){var r=d(t),i=f(t),o=m(t);return void n({title:r,description:i,relateds:o})}}},t.onerror=function(e){console.error(t.status,t.statusText)},t.send(null)},p=function(e,n){return h(e,n)};Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var g=function(){var e=Object(i.useState)(0),n=Object(c.a)(e,2),t=n[0],o=n[1],a=Object(i.useState)(s),l=Object(c.a)(a,1)[0],u=Object(i.useState)(null),d=Object(c.a)(u,2),f=d[0],m=d[1];return Object(i.useEffect)((function(){var e=null===f||"undefined"===typeof f?l:l.filter((function(e){return e!==f.title}));p(e.random(),m)}),[t,l]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{id:"maintitle",children:"Faucon"}),Object(r.jsxs)("div",{className:"count",children:[Object(r.jsx)("span",{children:t})," d\xe9sinformations comprises."]}),Object(r.jsx)("p",{id:"subtitle",children:"S'informer sur la d\xe9sinformation"})]}),f&&Object(r.jsxs)("main",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"definition-title",children:f.title}),Object(r.jsx)("div",{className:"definition-source",children:Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:f.sourceUrl,children:f.sourceName})}),f.description.map((function(e,n){return Object(r.jsx)("div",{className:"definition-content",children:e},n)})),f.relateds.length>0&&Object(r.jsx)("div",{className:"definition-related-title",children:"Connexes"}),f.relateds.map((function(e,n){return Object(r.jsx)("div",{className:"definition-related",onClick:function(){m(p(e,m))},children:e},n)}))]}),Object(r.jsx)("button",{className:"action-button",onClick:function(){o(t+1)},children:"Compris"})]})]})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),o(e),a(e)}))};l.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),N()}],[[13,1,2]]]);
//# sourceMappingURL=main.8153134e.chunk.js.map