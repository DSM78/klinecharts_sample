(this["webpackJsonpreact-sample"]=this["webpackJsonpreact-sample"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(5),i=n.n(r),o=n(1),l=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800,a=[],c=60*Math.floor(e/60/1e3)*1e3,r=t,i=[],o=0;o<n;o++){r=r+20*Math.random()-10;for(var l=0;l<4;l++)i[l]=12*(Math.random()-.5)+r;i.sort();var u=+Math.round(3*Math.random()).toFixed(0),s=+Math.round(2*Math.random()).toFixed(0);s===u&&s++;var d=50*Math.random()+10,m={open:i[u],low:i[0],high:i[3],close:i[s],volume:d,timestamp:c};c-=6e4,m.turnover=(m.open+m.close+m.high+m.low)/4*d,a.unshift(m)}return a};function u(e){var t=e.title,n=e.children;return c.a.createElement("div",{className:"k-line-chart-container"},c.a.createElement("h3",{className:"k-line-chart-title"},t),n)}var s=[{key:"candle_solid",text:"\u8721\u70db\u5b9e\u5fc3"},{key:"candle_stroke",text:"\u8721\u70db\u7a7a\u5fc3"},{key:"candle_up_stroke",text:"\u8721\u70db\u6da8\u7a7a\u5fc3"},{key:"candle_down_stroke",text:"\u8721\u70db\u8dcc\u7a7a\u5fc3"},{key:"ohlc",text:"OHLC"},{key:"area",text:"\u9762\u79ef\u56fe"}];function d(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){return e.current=Object(o.init)("real-time-k-line"),e.current.applyNewData(l()),function(){Object(o.dispose)("real-time-k-line")}}),[]),c.a.createElement(u,{title:"\u56fe\u8868\u7c7b\u578b"},c.a.createElement("div",{id:"real-time-k-line",className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},s.map((function(t){var n=t.key,a=t.text;return c.a.createElement("button",{key:n,onClick:function(t){e.current&&e.current.setStyleOptions({candle:{type:n}})}},a)}))))}var m=["\ud83c\udf4f","\ud83c\udf4e","\ud83c\udf50","\ud83c\udf4a","\ud83c\udf4b","\ud83c\udf4c","\ud83c\udf49","\ud83c\udf47","\ud83c\udf53","\ud83c\udf48","\ud83c\udf52","\ud83c\udf51","\ud83c\udf4d","\ud83e\udd65","\ud83e\udd5d","\ud83e\udd6d","\ud83e\udd51","\ud83c\udf4f"],f={name:"EMOJI",plots:[{key:"emoji"}],calcTechnicalIndicator:function(e){var t=[];return e.forEach((function(e){t.push({emoji:e.close,text:m[Math.floor(17*Math.random())]})})),t},render:function(e){var t=e.ctx,n=e.dataSource,a=e.viewport,c=e.xAxis,r=e.yAxis;t.font="".concat(a.barSpace,"px Helvetica Neue"),t.textAlign="center";for(var i=n.from;i<n.to;i++){var o=n.technicalIndicatorDataList[i],l=c.convertToPixel(i),u=r.convertToPixel(o.emoji);t.fillText(o.text,l,u)}}},p=["MA","EMA","SAR"],h=["VOL","MACD","KDJ"];function k(){var e=Object(a.useRef)(),t=Object(a.useRef)();return Object(a.useEffect)((function(){return e.current=Object(o.init)("technical-indicator-k-line"),e.current.addTechnicalIndicatorTemplate(f),t.current=e.current.createTechnicalIndicator("VOL",!1),e.current.applyNewData(l()),function(){Object(o.dispose)("technical-indicator-k-line")}}),[]),c.a.createElement(u,{title:"\u6280\u672f\u6307\u6807"},c.a.createElement("div",{id:"technical-indicator-k-line",className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},c.a.createElement("span",{style:{paddingRight:10}},"\u4e3b\u56fe\u6307\u6807"),p.map((function(t){return c.a.createElement("button",{key:t,onClick:function(n){e.current&&e.current.createTechnicalIndicator(t,!1,{id:"candle_pane"})}},t)})),c.a.createElement("button",{onClick:function(t){e.current&&e.current.createTechnicalIndicator("EMOJI",!0,{id:"candle_pane"})}},"\u81ea\u5b9a\u4e49"),c.a.createElement("span",{style:{paddingRight:10,paddingLeft:12}},"\u526f\u56fe\u6307\u6807"),h.map((function(n){return c.a.createElement("button",{key:n,onClick:function(a){e.current&&e.current.createTechnicalIndicator(n,!1,{id:t.current})}},n)})),c.a.createElement("button",{onClick:function(n){e.current&&e.current.createTechnicalIndicator("EMOJI",!1,{id:t.current})}},"\u81ea\u5b9a\u4e49")))}var y=n(3);var v=[{key:"dark",text:"\u6df1\u8272"},{key:"light",text:"\u6d45\u8272"}];function b(){var e=Object(a.useRef)(),t=Object(a.useState)("light"),n=Object(y.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){return e.current=Object(o.init)("custom-style-k-line"),e.current.applyNewData(l()),function(){Object(o.dispose)("custom-style-k-line")}}),[]),Object(a.useEffect)((function(){e.current.setStyleOptions(function(e){var t="dark"===e?"#929AA5":"#76808F",n="dark"===e?"#292929":"#ededed",a="dark"===e?"#333333":"#DDDDDD",c="dark"===e?"#333333":"#DDDDDD",r="dark"===e?"#373a40":"#686d76";return{grid:{horizontal:{color:n},vertical:{color:n}},candle:{priceMark:{high:{color:t},low:{color:t}},tooltip:{text:{color:t}}},technicalIndicator:{tooltip:{text:{color:t}}},xAxis:{axisLine:{color:a},tickLine:{color:a},tickText:{color:t}},yAxis:{axisLine:{color:a},tickLine:{color:a},tickText:{color:t}},separator:{color:a},crosshair:{horizontal:{line:{color:c},text:{backgroundColor:r}},vertical:{line:{color:c},text:{backgroundColor:r}}}}}(r))}),[r]),c.a.createElement(u,{title:"\u81ea\u5b9a\u4e49\u4e3b\u9898"},c.a.createElement("div",{id:"custom-style-k-line",style:"dark"===r?{backgroundColor:"#1f2126"}:{},className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},v.map((function(e){var t=e.key,n=e.text;return c.a.createElement("button",{key:t,onClick:function(e){i(t)}},n)}))))}var E=[{key:"zh-CN",text:"\u7b80\u4f53\u4e2d\u6587"},{key:"zh-HK",text:"\u7e41\u4f53\u4e2d\u6587"},{key:"en-US",text:"English"}];function x(){var e=Object(a.useRef)(),t=Object(a.useState)("zh-CN"),n=Object(y.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){return e.current=Object(o.init)("language-k-line"),e.current.applyNewData(l()),function(){Object(o.dispose)("language-k-line")}}),[]),Object(a.useEffect)((function(){e.current&&e.current.setStyleOptions(function(e){return{candle:{tooltip:{labels:"zh-CN"===e?["\u65f6\u95f4\uff1a","\u5f00\uff1a","\u6536\uff1a","\u9ad8\uff1a","\u4f4e\uff1a","\u6210\u4ea4\u91cf\uff1a"]:"zh-HK"===e?["\u6642\u9593\uff1a","\u958b\uff1a","\u6536\uff1a","\u9ad8\uff1a","\u4f4e\uff1a","\u6210\u4ea4\u91cf\uff1a"]:["T: ","O: ","C: ","H: ","L: ","V: "]}}}}(r))}),[r]),c.a.createElement(u,{title:"\u591a\u8bed\u8a00"},c.a.createElement("div",{id:"language-k-line",className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},E.map((function(e){var t=e.key,n=e.text;return c.a.createElement("button",{key:t,onClick:function(e){i(t)}},n)}))))}var g=[{key:"always",text:"\u603b\u662f\u663e\u793a"},{key:"follow_cross",text:"\u8ddf\u968f\u5341\u5b57\u5149\u6807"},{key:"none",text:"\u4e0d\u663e\u793a"}];function O(){var e=Object(a.useRef)(),t=Object(a.useState)("standard"),n=Object(y.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)("always"),d=Object(y.a)(s,2),m=d[0],f=d[1],p=Object(a.useState)("always"),h=Object(y.a)(p,2),k=h[0],v=h[1];return Object(a.useEffect)((function(){return e.current=Object(o.init)("tooltip-k-line"),e.current.createTechnicalIndicator("MA",!1,{id:"candle_pane"}),e.current.createTechnicalIndicator("KDJ",!1,{height:80}),e.current.applyNewData(l()),function(){Object(o.dispose)("tooltip-k-line")}}),[]),Object(a.useEffect)((function(){e.current&&e.current.setStyleOptions(function(e,t,n){return{candle:{tooltip:{showType:e,showRule:t,labels:["\u5f00\u76d8\u4ef7\uff1a","\u6536\u76d8\u4ef7\uff1a","\u6da8\u8dcc\u5e45\uff1a"],values:function(e){var t=(e.close-e.open)/e.open*100;return[{value:e.open.toFixed(2)},{value:e.close.toFixed(2)},{value:"".concat(t.toFixed(2),"%"),color:t<0?"#EF5350":"#26A69A"}]}}},technicalIndicator:{tooltip:{showRule:n}}}}(r,m,k))}),[r,m,k]),c.a.createElement(u,{title:"\u5341\u5b57\u5149\u6807\u6587\u5b57\u63d0\u793a"},c.a.createElement("div",{id:"tooltip-k-line",className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},c.a.createElement("span",{style:{paddingRight:10}},"\u4e3b\u56fe\u663e\u793a\u7c7b\u578b"),c.a.createElement("button",{onClick:function(e){i("standard")}},"\u9ed8\u8ba4"),c.a.createElement("button",{onClick:function(e){i("rect")}},"\u77e9\u5f62\u6846")),c.a.createElement("div",{className:"k-line-chart-menu-container"},c.a.createElement("span",{style:{paddingRight:10}},"k\u7ebf\u63d0\u793a\u663e\u793a\u89c4\u5219"),g.map((function(e){var t=e.key,n=e.text;return c.a.createElement("button",{key:t,onClick:function(e){f(t)}},n)}))),c.a.createElement("div",{className:"k-line-chart-menu-container"},c.a.createElement("span",{style:{paddingRight:10}},"\u6307\u6807\u63d0\u793a\u663e\u793a\u89c4\u5219"),g.map((function(e){var t=e.key,n=e.text;return c.a.createElement("button",{key:t,onClick:function(e){v(t)}},n)}))))}var j=[{key:"Asia/Shanghai",text:"\u4e0a\u6d77"},{key:"Europe/Berlin",text:"\u67cf\u6797"},{key:"America/Chicago",text:"\u829d\u52a0\u54e5"}];function w(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){return e.current=Object(o.init)("timezone-k-line"),e.current.applyNewData(l()),function(){Object(o.dispose)("timezone-k-line")}}),[]),c.a.createElement(u,{title:"\u65f6\u533a\u8bbe\u7f6e"},c.a.createElement("div",{id:"timezone-k-line",className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},j.map((function(t){var n=t.key,a=t.text;return c.a.createElement("button",{key:n,onClick:function(t){e.current&&e.current.setTimezone(n)}},a)}))))}var S=n(2),D=n(6),C={name:"rect",totalStep:3,checkEventCoordinateOnShape:function(e){var t=e.dataSource,n=e.eventCoordinate;return Object(D.checkCoordinateOnSegment)(t[0],t[1],n)},createShapeDataSource:function(e){var t=e.coordinates;return 2===t.length?[{type:"line",isDraw:!1,isCheck:!0,dataSource:[[Object(S.a)({},t[0]),{x:t[1].x,y:t[0].y}],[{x:t[1].x,y:t[0].y},Object(S.a)({},t[1])],[Object(S.a)({},t[1]),{x:t[0].x,y:t[1].y}],[{x:t[0].x,y:t[1].y},Object(S.a)({},t[0])]]},{type:"polygon",isDraw:!0,isCheck:!1,styles:{style:"fill"},dataSource:[[Object(S.a)({},t[0]),{x:t[1].x,y:t[0].y},Object(S.a)({},t[1]),{x:t[0].x,y:t[1].y}]]},{type:"polygon",isDraw:!0,isCheck:!1,dataSource:[[Object(S.a)({},t[0]),{x:t[1].x,y:t[0].y},Object(S.a)({},t[1]),{x:t[0].x,y:t[1].y}]]}]:[]}},N={name:"circle",totalStep:3,checkEventCoordinateOnShape:function(e){var t=e.dataSource,n=e.eventCoordinate,a=Math.abs(t.x-n.x),c=Math.abs(t.y-n.y),r=Math.sqrt(a*a+c*c);return Math.abs(r-t.radius)<3},createShapeDataSource:function(e){var t=e.coordinates;if(2===t.length){var n=Math.abs(t[0].x-t[1].x),a=Math.abs(t[0].y-t[1].y),c=Math.sqrt(n*n+a*a);return[{type:"arc",isDraw:!0,isCheck:!1,styles:{style:"fill"},dataSource:[Object(S.a)(Object(S.a)({},t[0]),{},{radius:c,startAngle:0,endAngle:2*Math.PI})]},{type:"arc",isDraw:!0,isCheck:!0,dataSource:[Object(S.a)(Object(S.a)({},t[0]),{},{radius:c,startAngle:0,endAngle:2*Math.PI})]}]}return[]}},T=[{key:"priceLine",text:"\u4ef7\u683c\u7ebf"},{key:"priceChannelLine",text:"\u4ef7\u683c\u901a\u9053\u7ebf"},{key:"parallelStraightLine",text:"\u5e73\u884c\u76f4\u7ebf"},{key:"fibonacciLine",text:"\u6590\u6ce2\u90a3\u5951\u56de\u8c03"},{key:"rect",text:"\u81ea\u5b9a\u4e49\u77e9\u5f62"},{key:"circle",text:"\u81ea\u5b9a\u4e49\u5706"}];function M(){var e=Object(a.useRef)();return Object(a.useEffect)((function(){return e.current=Object(o.init)("draw-shape-k-line"),e.current.addShapeTemplate([C,N]),e.current.applyNewData(l()),function(){Object(o.dispose)("draw-shape-k-line")}}),[]),c.a.createElement(u,{title:"\u7ed8\u56fe"},c.a.createElement("div",{id:"draw-shape-k-line",className:"k-line-chart"}),c.a.createElement("div",{className:"k-line-chart-menu-container"},T.map((function(t){var n=t.key,a=t.text;return c.a.createElement("button",{key:n,onClick:function(t){e.current&&e.current.createShape(n)}},a)})),c.a.createElement("button",{onClick:function(){e.current&&e.current.removeShape()}},"\u6e05\u9664")))}function A(){function e(e,t,n){e.font="12px Roboto",e.fillStyle="#2d6187",e.strokeStyle="#2d6187";var a=e.measureText(n).width,c=t.x,r=t.y+6;e.beginPath(),e.moveTo(c,r),r+=5,e.lineTo(c-4,r),e.lineTo(c+4,r),e.closePath(),e.fill();var i=c-a/2-6,o=r,l=a+12;e.beginPath(),e.moveTo(i+2,o),e.arcTo(i+l,o,i+l,o+28,2),e.arcTo(i+l,o+28,i,o+28,2),e.arcTo(i,o+28,i,o,2),e.arcTo(i,o,i+l,o,2),e.closePath(),e.fill(),e.fillStyle="#fff",e.textBaseline="middle",e.textAlign="center",e.fillText(n,c,r+14)}return Object(a.useEffect)((function(){var t=Object(o.init)("custom-candle-mark-k-line"),n=l();return t.applyNewData(n),t.createAnnotation([{point:{timestamp:n[n.length-10].timestamp},drawExtend:function(t){e(t.ctx,t.coordinate,"\u8fd9\u662f\u4e00\u4e2a\u56fa\u5b9a\u663e\u793a\u6807\u8bb0")}},{point:{timestamp:n[n.length-20].timestamp},styles:{symbol:{type:"circle"}}},{point:{timestamp:n[n.length-22].timestamp},styles:{symbol:{type:"rect"}}},{point:{timestamp:n[n.length-40].timestamp},drawExtend:function(t){var n=t.ctx,a=t.coordinate;t.isActive&&e(n,a,"\u8fd9\u662f\u4e00\u4e2a\u9f20\u6807\u79fb\u5165\u663e\u793a\u6807\u8bb0")}},{point:{timestamp:n[n.length-46].timestamp},styles:{symbol:{type:"triangle"}}},{point:{timestamp:n[n.length-45].timestamp,price:n[n.length-45].high},styles:{symbol:{position:"point",offset:[0,-30]}}}]),function(){Object(o.dispose)("custom-candle-mark-k-line")}}),[]),c.a.createElement(u,{title:"\u81ea\u5b9a\u4e49\u8721\u70db\u56fe\u6807\u8bb0"},c.a.createElement("div",{id:"custom-candle-mark-k-line",className:"k-line-chart"}))}function R(){return Object(a.useEffect)((function(){var e=Object(o.init)("load-more-k-line");return e.applyNewData(l(Date.now(),5e3,200),!0),e.loadMore((function(t){console.log(t),setTimeout((function(){var n=e.getDataList()[0];e.applyMoreData(l(t,n.close,100),!0)}),2e3)})),function(){Object(o.dispose)("load-more-k-line")}}),[]),c.a.createElement(u,{title:"\u52a0\u8f7d\u5386\u53f2\u6570\u636e"},c.a.createElement("div",{id:"load-more-k-line",className:"k-line-chart"}))}function I(){return Object(a.useEffect)((function(){var e=Object(o.init)("update-k-line");return e.applyNewData(l()),function e(t){setTimeout((function(){if(t){var n=t.getDataList(),a=n[n.length-1],c=l(a.timestamp,a.close,1)[0];c.timestamp+=6e4,t.updateData(c)}e(t)}),1e3)}(e),function(){Object(o.dispose)("update-k-line")}}),[]),c.a.createElement(u,{title:"\u5b9e\u65f6\u66f4\u65b0"},c.a.createElement("div",{id:"update-k-line",className:"k-line-chart"}))}n(13);function L(){return c.a.createElement("div",{className:"app"},c.a.createElement(d,null),c.a.createElement(k,null),c.a.createElement(b,null),c.a.createElement(x,null),c.a.createElement(O,null),c.a.createElement(w,null),c.a.createElement(M,null),c.a.createElement(A,null),c.a.createElement(R,null),c.a.createElement(I,null))}var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(14);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):P(t,e)}))}}()},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.246bf26f.chunk.js.map