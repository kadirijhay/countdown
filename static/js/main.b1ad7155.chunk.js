(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),l=n.n(r);n(14);var i=function(){return o.a.createElement("header",null,o.a.createElement("p",null,"#100DaysOfCode ",o.a.createElement("br",null),"COUNTDOWN TIMER"))};var c=function(){return o.a.createElement("footer",null,o.a.createElement("hr",null),o.a.createElement("h3",null,"Challenge organized by ",o.a.createElement("a",{href:"https://twitter.com/gdgogbomoso"},"GDG Ogbomoso")),o.a.createElement("span",null,"Code written by ",o.a.createElement("a",{href:"https://twitter.com/kadirijhay"},"Jude Kadiri")))},s=n(3),u=n(4),h=n(6),d=n(5),m=n(7),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={day:"",daysToGo:"",hoursToGo:"",minutesToGo:"",secondsToGo:""},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){var t=(new Date).getTime(),n=t-new Date("May 20, 2019, 00:00").getTime(),a=Math.ceil(n/864e5),o=new Date("August 27, 2019, 23:59").getTime()-t,r=Math.floor(o/864e5),l=Math.floor(o%864e5/36e5),i=Math.floor(o%36e5/6e4),c=Math.floor(o%6e4/1e3);e.setState({day:a,daysToGo:r,hoursToGo:l,minutesToGo:i,secondsToGo:c})},1e3)}},{key:"render",value:function(){var e,t={color:"red",border:"none"};return e=this.state.day<=100?this.state.day:100,o.a.createElement("div",{className:"countdown"},o.a.createElement("h1",null,"DAY ",o.a.createElement("span",{style:{color:"#003E73"}},e)),o.a.createElement("h2",null,"Challenge Started: May 20th, 2019"),this.state.day>=100?o.a.createElement("div",null,o.a.createElement("h1",{style:t},"Challenge has ended!"),o.a.createElement("h3",null,"Challenge ended August 27th, 2019")):o.a.createElement("div",{className:"timer"},o.a.createElement("h3",null,"You have:"),o.a.createElement("h2",null,o.a.createElement("span",{style:t},this.state.daysToGo),"D :",o.a.createElement("span",{style:t}," ",this.state.hoursToGo),"H :",o.a.createElement("span",{style:t}," ",this.state.minutesToGo),"M :",o.a.createElement("span",{style:t}," ",this.state.secondsToGo),"S"),o.a.createElement("h3",null,"to go")))}}]),t}(o.a.Component);n(15);var g=function(){return o.a.createElement("div",null,o.a.createElement(i,null),o.a.createElement(f,null),o.a.createElement(c,null))},v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");v?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(t,e)})}}()},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.b1ad7155.chunk.js.map