(this.webpackJsonpfaucon=this.webpackJsonpfaucon||[]).push([[0],{13:function(e){e.exports=JSON.parse('["Astroturfing","Amn\xe9sie collective","Fakelore","Redwashing","Propagande","D\xe9magogie","Surcharge informationnelle","Biais cognitif","Raisonnement fallacieux","Sophisme","Enthym\xe8me","Syllogisme","Induction (logique)","Quasi-syllogisme","Ancrage (psychologie)","Effet Stroop"]')},19:function(e,n,t){},20:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t(1),a=t.n(i),o=t(12),s=t.n(o),c=(t(19),t(2)),l=(t(20),function(e){return e.replace(/\[\d+]/g,"").replace(/,{2,}/g,"")}),u=t(13),f=function(e){return"https://fr.wikipedia.org/wiki/"+e.replaceAll(" ","_")},d=function(e){return e.responseXML.querySelectorAll("h1")[0].innerText},m=function(e){return e.responseXML.querySelectorAll(".bandeau-niveau-grave").length>0},j=function(e){var n,t=e.responseXML.querySelectorAll("h2:not(#mw-toc-heading)"),r=[],i=t[0];for(i.innerText.includes("de navigation")&&(i=t[1]),n=0;n<8;n++){if(i&&"P"===i.tagName){for(;null!==i&&"P"===i.tagName;)r.push(i),i=i.previousElementSibling;return r=r.map((function(e){return e.innerText})).reverse()}if(i.previousElementSibling&&"SECTION"===i.previousElementSibling.tagName){var a=i.previousElementSibling.lastChild;for(n=0;n<5;n++){if(a&&"P"===a.tagName)return Array.from(a.parentNode.childNodes).filter((function(e){return"P"===e.tagName})).map((function(e){return e.innerText}));a=a.previousElementSibling}}i=null===i.previousElementSibling?i.parentNode:i.previousElementSibling}return r},h=function(e){var n=e.responseXML.querySelector("#Articles_connexes");if(null!==n){var t,r=n.parentNode;for(t=0;t<8;t++){if(r&&r.className&&r.className.includes("colonnes")&&r.childNodes[1]&&"UL"===r.childNodes[1].tagName)return Array.from(r.childNodes[1].childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if(r&&"UL"===r.tagName)return Array.from(r.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if("SECTION"===r.tagName&&Array.from(r.childNodes).length>0){if(Array.from(r.childNodes).filter((function(e){return"UL"===e.tagName})).length>0)return Array.from(Array.from(r.childNodes).filter((function(e){return"UL"===e.tagName}))[0].childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if(Array.from(r.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")})).length>0)return Array.from(Array.from(r.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")}))[0].firstChild.nextSibling.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}))}r=null===r.nextSibling?r.parentNode:r.nextSibling}return[]}if(null!==(n=e.responseXML.querySelector("#Voir_aussi"))){var i=n.parentNode;for(t=0;t<5;t++){if(i&&"UL"===i.tagName)return Array.from(i.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if("SECTION"===i.tagName&&Array.from(i.childNodes).length>0){if(Array.from(i.childNodes).filter((function(e){return"UL"===e.tagName})).length>0)return Array.from(Array.from(i.childNodes).filter((function(e){return"UL"===e.tagName}))[0].childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}));if(Array.from(i.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")})).length>0)return Array.from(Array.from(i.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")}))[0].firstChild.childNodes).filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).map((function(e){return e.innerText}))}i=null===i.nextSibling?i.parentNode:i.nextSibling}}return[]},g=function(e,n){var t=new XMLHttpRequest;t.open("GET","https://eerie-alien-18238.herokuapp.com/"+f(e),!0),t.responseType="document",t.onload=function(e){if(4===t.readyState){if(200!==t.status)return console.error(t.status,t.statusText),void n({title:"Page non atteignable",description:["D\xe9sol\xe9, Faucon n'a pas pu trouver la page."],relateds:[],hasSevereWarning:!1});if("undefined"!==typeof n){var r=d(t),i=j(t),a=h(t),o=m(t);return void n({title:r,description:i,relateds:a,hasSevereWarning:o})}}},t.onerror=function(e){console.error(t.status,t.statusText)},t.send(null)},p=function(e,n){return g(e,n)},b=function(e){setTimeout((function(){e(!1)}),0)},N=window.matchMedia("(max-width: 600px)"),x=(N.matches,1),O=N.matches?20:50;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var v=function(e){var n=e.count,t=e.setCount,a=e.loading,o=e.setLoading,s=Object(i.useState)(u),d=Object(c.a)(s,1)[0],m=Object(i.useState)(!0),j=Object(c.a)(m,2),h=j[0],g=j[1],N=Object(i.useState)([]),v=Object(c.a)(N,2),S=v[0],y=v[1],T=Object(i.useState)({status:!1}),A=Object(c.a)(T,2),L=A[0],w=A[1],E=Object(i.useState)(null),k=Object(c.a)(E,2),C=k[0],I=k[1],P=Object(i.useState)(!0),M=Object(c.a)(P,2),q=M[0],F=M[1];return Object(i.useEffect)((function(){!1===q&&b(o)}),[q]),Object(i.useEffect)((function(){if(h){var e=null===C||"undefined"===typeof C?d:d.filter((function(e){return e!==C.title}));I(null),!0!==a&&o(!0),!0!==q&&F(!0);var n=e.random();p(n,I),y(S.concat([n])),g(!1)}}),[h,d]),Object(i.useEffect)((function(){L.status&&(I(null),o(!0),F(!0),p(L.related,I),y(S.concat([L.related])),w({status:!1}))}),[L,d]),Object(i.useEffect)((function(){null!==C&&F(!1)}),[C,F]),Object(r.jsx)("main",{className:C?"main":"main-min",children:C&&!(h||L.status)&&!a&&Object(r.jsxs)(r.Fragment,{children:[C.hasSevereWarning&&Object(r.jsxs)("div",{className:"definition-warning",children:[Object(r.jsx)("span",{role:"img","aria-label":"warning",children:"\u26a0\ufe0f\ufe0f"})," Attention, la d\xe9finition est issue d'un article qui comporte un risque sur la v\xe9racit\xe9 des informations expos\xe9es."]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"definition-title",children:C.title}),Object(r.jsx)("div",{className:"definition-source",children:Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:f(C.title),children:"Source"})}),C.description.map((function(e,n){return Object(r.jsx)("div",{className:"definition-content",children:l(e)},n)})),Object(r.jsx)("div",{className:"related-wrapper",children:C.relateds.slice(0,10).filter((function(e){return!S.includes(e)})).map((function(e,i){return Object(r.jsx)("div",{style:{fontSize:Math.random()*x+1+"rem",transform:"translateY("+-Math.random()*O+"px)"},className:"definition-related",onClick:function(){t(n+1),w({status:!0,related:e})},children:e},i)}))})]}),Object(r.jsx)("button",{className:"action-button",onClick:function(){"Page non atteignable"!==C.title&&t(n+1),g(!0)},children:"Nouvelle d\xe9finition"})]})})},S=t(3),y=t.n(S),T=function(){return Object(r.jsx)("div",{className:"loader",children:Object(r.jsxs)(y.a,{loop:!0,children:["Faucon",Object(r.jsx)(y.a.Delay,{ms:1e3}),Object(r.jsx)(y.a.Backspace,{count:6}),Object(r.jsx)(y.a.Delay,{ms:200})]})})},A=function(e){var n=e.setInformationMode;return Object(r.jsxs)("main",{className:"main",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"definition-title",children:"Comment \xe7a marche ?"}),Object(r.jsxs)("div",{className:"definition-content mt-1",children:["Faucon se sert de wikip\xe9dia pour obtenir ses donn\xe9es. ",Object(r.jsx)("br",{}),"\xc0 chaque chargement de d\xe9finition, une requ\xeate fant\xf4me est g\xe9n\xe9r\xe9e sur le site wikipedia en formattant l'url. La r\xe9ponse HTML est pars\xe9e, le titre, la description et les articles connexes sont extraits. Ils sont pr\xe9sent\xe9s dans l'interface qui permet de d\xe9couvrir la d\xe9finition et de parcourir \xe0 nouveau d'autres d\xe9finitions afin de cr\xe9er une navigation sans fin. Le langage utilis\xe9 pour le parsing est Javascript."]})]}),Object(r.jsx)("button",{className:"action-button",onClick:function(){return n(!1)},children:"Retour"})]})};var L=function(){var e=Object(i.useState)(0),n=Object(c.a)(e,2),t=n[0],a=n[1],o=Object(i.useState)(!0),s=Object(c.a)(o,2),l=s[0],u=s[1],f=Object(i.useState)(!1),d=Object(c.a)(f,2),m=d[0],j=d[1];return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[t]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{id:"maintitle",children:"Faucon"}),Object(r.jsxs)("div",{className:"count",children:[Object(r.jsx)("span",{children:t})," sujets \xe9tudi\xe9s. ",Object(r.jsx)("span",{className:"information",children:Object(r.jsx)("img",{onClick:function(){return j(!0)},src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/facebook/230/information-source_2139.png",alt:""})})]}),Object(r.jsx)("p",{id:"subtitle",children:"S'informer sur la d\xe9sinformation"})]}),l&&Object(r.jsx)(T,{}),!m&&Object(r.jsx)(v,{count:t,setCount:a,loading:l,setLoading:u}),m&&Object(r.jsx)(A,{setInformationMode:j})]})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),a(e),o(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(L,{})}),document.getElementById("root")),w()}},[[42,1,2]]]);
//# sourceMappingURL=main.5d213907.chunk.js.map