(this.webpackJsonpkaeru_weather=this.webpackJsonpkaeru_weather||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(3),r=n.n(o),i=n(1),s=n.n(i),l=n(4),u=n(5),m=n(6),p=n(8),d=n(7),h=function(){return c.a.createElement("div",{id:"app"},c.a.createElement("div",null,"Loading..."))},f=function(e){var t=e.country,n=e.city,a=e.temp,o=e.icon,r=e.description;return c.a.createElement("div",{id:"app"},c.a.createElement("div",{className:"location"},c.a.createElement("h1",{className:"location-timezone"},c.a.createElement("span",{className:"city"},n),c.a.createElement("span",null,"\xa0"),c.a.createElement("span",{className:"country"},t)),c.a.createElement("p",{className:"icon"},o&&c.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(o,".png"),alt:"weather icon"}))),c.a.createElement("div",{className:"temperature"},c.a.createElement("div",{className:"degree-section"},c.a.createElement("h2",{className:"degree"},a),c.a.createElement("span",null,"\xb0C")),c.a.createElement("div",{className:"temperature-description"},r)))},v=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).geocodeRequest=function(){return new Promise((function(e,t){navigator.geolocation.getCurrentPosition(e,t)}))},a.weatherRequest=function(){var e=Object(l.a)(s.a.mark((function e(t,n){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://api.openweathermap.org/data/2.5/weather","metric","abf7bb42eee05588c0f5ed53510c5de5",c="".concat("http://api.openweathermap.org/data/2.5/weather","?lat=").concat(t,"&lon=").concat(n,"&units=").concat("metric","&appid=").concat("abf7bb42eee05588c0f5ed53510c5de5"),e.next=6,fetch(c).then((function(e){return e.json()})).then((function(e){a.setState({country:e.sys.country,city:e.name,temp:e.main.temp,icon:e.weather[0].icon,description:e.weather[0].description,lat:t,lon:n})})).catch((function(e){a.setErr(t,n),console.log(e)}));case 6:case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),a.state={city:"Time",country:"Zone",temp:"0",description:"It's freezing",icon:void 0,lat:void 0,lon:void 0},a}return Object(m.a)(n,[{key:"setErr",value:function(e,t){this.setState({country:"Time",city:"Zone",temp:"???",description:"Error",icon:void 0,lat:e,lon:t})}},{key:"componentDidMount",value:function(){var e=this;this.geocodeRequest().then((function(t){e.weatherRequest(t.coords.latitude,t.coords.longitude)})).catch((function(t){e.setErr(e.state.lat,e.state.lon),console.log(t)})),this.timerID=setInterval((function(){return e.weatherRequest(e.state.lat,e.state.lon)}),6e6)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state,t=e.country,n=e.city,a=e.temp,o=e.icon,r=e.description,i=e.lat,s=e.lon;return i&&s?c.a.createElement(f,{country:t,city:n,temp:a,icon:o,description:r}):c.a.createElement(h,null)}}]),n}(c.a.Component);n(15);var w=function(){return c.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6d94ec26.chunk.js.map