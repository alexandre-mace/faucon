(this.webpackJsonpfaucon=this.webpackJsonpfaucon||[]).push([[0],{13:function(e){e.exports=JSON.parse('["Astroturfing","Amn\xe9sie collective","Fakelore","Redwashing","Propagande","D\xe9magogie","Surcharge informationnelle","Biais cognitif","Raisonnement fallacieux","Sophisme","Enthym\xe8me","Syllogisme","Induction (logique)","Quasi-syllogisme","Ancrage (psychologie)","Effet Stroop"]')},19:function(e,t,n){},20:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n.n(i),s=n(12),o=n.n(s),c=(n(19),n(2)),l=(n(20),function(e){return e.replace(/\[\d+]/g,"").replace(/,{2,}/g,"")}),u=n(13),d=function(e){return"https://fr.wikipedia.org/wiki/"+e.replaceAll(" ","_")},f=function(e){return e.responseXML.querySelectorAll("h1")[0].innerText},m=function(e){return e.responseXML.querySelectorAll(".bandeau-niveau-grave").length>0},h=function(e){var t,n=e.responseXML.querySelectorAll("h2:not(#mw-toc-heading)"),r=[],i=n[0];for(i.innerText.includes("de navigation")&&(i=n[1]),t=0;t<8;t++){if(i&&"P"===i.tagName){for(;null!==i&&"P"===i.tagName;)r.push(i),i=i.previousElementSibling;return r=r.map((function(e){return e.innerText})).reverse()}if(i.previousElementSibling&&"SECTION"===i.previousElementSibling.tagName){var a=i.previousElementSibling.lastChild;for(t=0;t<5;t++){if(a&&"P"===a.tagName)return Array.from(a.parentNode.childNodes).filter((function(e){return"P"===e.tagName})).map((function(e){return e.innerText}));a=a.previousElementSibling}}i=null===i.previousElementSibling?i.parentNode:i.previousElementSibling}return r},j=function(e){var t=e.responseXML.querySelector("#Articles_connexes");if(null!==t){var n,r=t.parentNode;for(n=0;n<8;n++){if(r&&r.className&&r.className.includes("colonnes")&&r.childNodes[1]&&"UL"===r.childNodes[1].tagName){var i=Array.from(r.childNodes[1].childNodes);return g(i)}if(r&&"UL"===r.tagName){var a=Array.from(r.childNodes);return g(a)}if("SECTION"===r.tagName&&Array.from(r.childNodes).length>0){if(Array.from(r.childNodes).filter((function(e){return"UL"===e.tagName})).length>0){var s=Array.from(Array.from(r.childNodes).filter((function(e){return"UL"===e.tagName}))[0].childNodes);return g(s)}if(Array.from(r.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")})).length>0){var o=Array.from(Array.from(r.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")}))[0].firstChild.nextSibling.childNodes);return g(o)}}r=null===r.nextSibling?r.parentNode:r.nextSibling}return[]}if(null!==(t=e.responseXML.querySelector("#Voir_aussi"))){var c=t.parentNode;for(n=0;n<5;n++){if(c&&"UL"===c.tagName){var l=Array.from(c.childNodes);return g(l)}if("SECTION"===c.tagName&&Array.from(c.childNodes).length>0){if(Array.from(c.childNodes).filter((function(e){return"UL"===e.tagName})).length>0){var u=Array.from(Array.from(c.childNodes).filter((function(e){return"UL"===e.tagName}))[0].childNodes);return g(u)}if(Array.from(c.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")})).length>0){var d=Array.from(Array.from(c.childNodes).filter((function(e){return e.className&&e.className.includes("colonnes")}))[0].firstChild.childNodes);return g(d)}}c=null===c.nextSibling?c.parentNode:c.nextSibling}}return[]},g=function(e){return e.filter((function(e){return"LI"===e.tagName})).filter((function(e){return!e.innerText.includes("Portail")})).filter((function(e){return e.getElementsByTagName("a").length>0})).map((function(e){return e.getElementsByTagName("a")[0].getAttribute("href")})).map((function(e){return e.replace("/wiki/","")})).map((function(e){return decodeURI(e)})).map((function(e){return e.replaceAll("_"," ")}))},b=function(e,t){var n=new XMLHttpRequest;n.open("GET","https://cors-3000.herokuapp.com/"+d(e),!0),n.responseType="document",n.onload=function(e){if(4===n.readyState){if(200!==n.status)return console.error(n.status,n.statusText),void t({title:"Page non atteignable",description:["D\xe9sol\xe9, Faucon n'a pas pu trouver la page."],relateds:[],hasSevereWarning:!1});if("undefined"!==typeof t){var r=f(n),i=h(n),a=j(n),s=m(n);return void t({title:r,description:i,relateds:a,hasSevereWarning:s})}}},n.onerror=function(e){console.error(n.status,n.statusText)},n.send(null)},p=function(e,t){return b(e,t)},N=function(e){setTimeout((function(){e(!1)}),0)},O=window.matchMedia("(max-width: 600px)"),v=(O.matches,1),x=O.matches?20:50;Array.prototype.random=function(){return this[Math.floor(Math.random()*this.length)]};var S=function(e){var t=e.count,n=e.setCount,a=e.loading,s=e.setLoading,o=Object(i.useState)(u),f=Object(c.a)(o,1)[0],m=Object(i.useState)(!0),h=Object(c.a)(m,2),j=h[0],g=h[1],b=Object(i.useState)([]),O=Object(c.a)(b,2),S=O[0],y=O[1],A=Object(i.useState)({status:!1}),E=Object(c.a)(A,2),L=E[0],w=E[1],T=Object(i.useState)(null),k=Object(c.a)(T,2),C=k[0],M=k[1],q=Object(i.useState)(!0),F=Object(c.a)(q,2),I=F[0],P=F[1];return Object(i.useEffect)((function(){!1===I&&N(s)}),[I]),Object(i.useEffect)((function(){if(j){var e=null===C||"undefined"===typeof C?f:f.filter((function(e){return e!==C.title}));M(null),!0!==a&&s(!0),!0!==I&&P(!0);var t=e.random();p(t,M),y(S.concat([t])),g(!1)}}),[j,f]),Object(i.useEffect)((function(){L.status&&(M(null),s(!0),P(!0),p(L.related,M),y(S.concat([L.related])),w({status:!1}))}),[L,f]),Object(i.useEffect)((function(){null!==C&&P(!1)}),[C,P]),Object(r.jsx)("main",{className:C?"main":"main-min",children:C&&!(j||L.status)&&!a&&Object(r.jsxs)(r.Fragment,{children:[C.hasSevereWarning&&Object(r.jsxs)("div",{className:"definition-warning",children:[Object(r.jsx)("span",{role:"img","aria-label":"warning",children:"\u26a0\ufe0f\ufe0f"})," Attention, la d\xe9finition est issue d'un article qui comporte un risque sur la v\xe9racit\xe9 des informations expos\xe9es."]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"definition-title",children:C.title}),Object(r.jsx)("div",{className:"definition-source",children:Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:d(C.title),children:"Source"})}),C.description.map((function(e,t){return Object(r.jsx)("div",{className:"definition-content",children:l(e)},t)})),Object(r.jsx)("div",{className:"related-wrapper",children:C.relateds.slice(0,10).filter((function(e){return!S.includes(e)})).map((function(e,i){return Object(r.jsx)("div",{style:{fontSize:Math.random()*v+1+"rem",transform:"translateY("+-Math.random()*x+"px)"},className:"definition-related",onClick:function(){n(t+1),w({status:!0,related:e})},children:e},i)}))})]}),Object(r.jsx)("button",{className:"action-button",onClick:function(){"Page non atteignable"!==C.title&&n(t+1),g(!0)},children:"Nouvelle d\xe9finition"})]})})},y=n(3),A=n.n(y),E=function(){return Object(r.jsx)("div",{className:"loader",children:Object(r.jsxs)(A.a,{loop:!0,children:["Faucon",Object(r.jsx)(A.a.Delay,{ms:1e3}),Object(r.jsx)(A.a.Backspace,{count:6}),Object(r.jsx)(A.a.Delay,{ms:200})]})})},L=function(e){var t=e.setInformationMode;return Object(r.jsxs)("main",{className:"main",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"definition-title",children:"Comment \xe7a marche ?"}),Object(r.jsxs)("div",{className:"definition-content mt-1",children:["Faucon se sert de wikip\xe9dia pour obtenir ses donn\xe9es. ",Object(r.jsx)("br",{}),"\xc0 chaque chargement de d\xe9finition, une requ\xeate fant\xf4me est g\xe9n\xe9r\xe9e sur le site wikipedia en formattant l'url. La r\xe9ponse HTML est pars\xe9e, le titre, la description et les articles connexes sont extraits. Ils sont pr\xe9sent\xe9s dans l'interface qui permet de d\xe9couvrir la d\xe9finition et de parcourir \xe0 nouveau d'autres d\xe9finitions afin de cr\xe9er une navigation sans fin. Le langage utilis\xe9 pour le parsing est Javascript."]})]}),Object(r.jsx)("button",{className:"action-button",onClick:function(){return t(!1)},children:"Retour"})]})};var w=function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],s=Object(i.useState)(!0),o=Object(c.a)(s,2),l=o[0],u=o[1],d=Object(i.useState)(!1),f=Object(c.a)(d,2),m=f[0],h=f[1];return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[n]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("div",{id:"maintitle",children:"Faucon"}),Object(r.jsxs)("div",{className:"count",children:[Object(r.jsx)("span",{children:n})," sujets \xe9tudi\xe9s. ",Object(r.jsx)("span",{className:"information",children:Object(r.jsx)("img",{onClick:function(){return h(!0)},src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/facebook/230/information-source_2139.png",alt:""})})]}),Object(r.jsx)("p",{id:"subtitle",children:"S'informer sur la d\xe9sinformation"})]}),l&&!m&&Object(r.jsx)(E,{}),!m&&Object(r.jsx)(S,{count:n,setCount:a,loading:l,setLoading:u}),m&&Object(r.jsx)(L,{setInformationMode:h})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),i(e),a(e),s(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),T()}},[[42,1,2]]]);
//# sourceMappingURL=main.95079193.chunk.js.map