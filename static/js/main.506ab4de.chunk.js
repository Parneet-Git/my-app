(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(15);var s=function(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show text-center"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return e.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg))};function m(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," shadow")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},l.a.createElement("b",null,e.title)),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item text-light mt-2 ms-2 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input me-1",onClick:e.toggleMode,"aria-checked":"false",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"light"===e.mode?"Dark":"Light"," Mode")),l.a.createElement("li",{className:"nav-item text-light mt-2 ms-2 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-input rounded-circle p-0 border-0 me-1",style:{height:"20px",width:"20px"},type:"color",name:"color-picker",onChange:e.changeColor,id:"colorPicker"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Change Button Color")))),l.a.createElement("div",{className:"form-check form-switch text-light text-".concat("light"===e.mode?"dark":"light")})))}function i(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"text-".concat("light"===e.mode?"dark":"light")},e.heading),l.a.createElement("div",{className:"mb-3 my-3 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("textarea",{className:"form-control text-".concat("light"===e.mode?"dark":"light"," bg-").concat(e.mode),value:r,onChange:function(e){c(e.target.value)},id:"myBox",rows:e.rows}),l.a.createElement("button",{className:"btn btn-primary border-0 my-3",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Text converted to upper case!","success")},style:{backgroundColor:e.btnColor}},"Convert to Upper-Case"),l.a.createElement("button",{className:"btn btn-primary border-0 my-3 ms-3",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Text converted to lower case!","success")},style:{backgroundColor:e.btnColor}},"Convert to Lower-Case"),l.a.createElement("button",{type:"submit",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=r,window.speechSynthesis.speak(e)},className:"btn btn-primary border-0 mx-2 my-2",style:{backgroundColor:e.btnColor}},"Speak"),l.a.createElement("button",{type:"submit",onClick:function(){var t=r.match(/[0-9/ /]/g).join("");c(t),e.showAlert("All Numbers has been extracted!","success")},className:"btn btn-primary border-0",style:{backgroundColor:e.btnColor}},"Extract Nums"),l.a.createElement("button",{type:"submit",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Text copied!","success")},className:"btn btn-primary border-0 ms-2",style:{backgroundColor:e.btnColor}},"Copy Text"))),l.a.createElement("div",{className:"container text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("h1",null,"Your Text Summary"),l.a.createElement("p",null,r.trim().split(" ").length," words and ",r.length," characters"),l.a.createElement("p",null,Math.ceil(.008*r.trim().split(" ").length)," minutes to read this text"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter you text to preview")))}var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=Object(n.useState)("#000000"),g=Object(o.a)(h,2),p=g[0],v=g[1],E=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(r("dark"),document.body.style.backgroundColor="#353535",E("Dark Mode has been set","success")):(r("light"),document.body.style.backgroundColor="white",E("Light Mode has been set","success"))},changeColor:function(e){var t=document.getElementById("colorPicker");v(t.value)}}),l.a.createElement(s,{alert:d}),l.a.createElement("div",{className:"container mt-3"},l.a.createElement(i,{showAlert:E,heading:"Enter the text to analyze",rows:5,mode:a,btnColor:p})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.506ab4de.chunk.js.map