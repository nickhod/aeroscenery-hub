!function(e){var n={};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(1),r=o(2),a=o(3),i=o(4),u=function(){return function(){var e=this;Navigo.MATCH_REGEXP_FLAGS="i";var n=new Navigo(null,!1);console.log("router"),n.on({"airports/*":function(){e.airportDetails=new t.AirportDetails},"cultivation/*":function(){e.cultivationGridSquareDetails=new a.CultivationGridSquareDetails},cultivation:function(){e.cultivationGridSquares=new r.CultivationGridSquares},"*":function(){e.airports=new i.Airports}}).resolve()}}();n.Main=u,window.aerosceneryHub=new u},function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(){}return e.prototype.showMap=function(e,n){var o={lat:e,lng:n};new google.maps.Map(document.getElementById("map"),{zoom:15,center:o,mapTypeId:google.maps.MapTypeId.SATELLITE})},e}();n.AirportDetails=t},function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(){}return e.prototype.showMap=function(){var e=this;$.ajax({url:"/lib/google-maps-gridlines/google-maps-gridlines.js",dataType:"script",success:function(){e.gridLinesLoaded()},async:!0,cache:!0})},e.prototype.gridLinesLoaded=function(){var e=new google.maps.Map(document.getElementById("map-container"),{zoom:3,center:{lat:10,lng:0},mapTypeId:google.maps.MapTypeId.HYBRID,disableDefaultUI:!0});new Graticule(e)},e}();n.CultivationGridSquares=t},function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){return function(){}}();n.CultivationGridSquareDetails=t},function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=function(){function e(){}return e.prototype.showMap=function(){var e=this,n=new google.maps.Map(document.getElementById("map-container"),{zoom:3,center:{lat:10,lng:0},mapTypeId:google.maps.MapTypeId.HYBRID,disableDefaultUI:!0}),o=new google.maps.FusionTablesLayer({query:{select:"'Geocodable address'",from:"1KD7cUPVJTpN49_m2gvAzAY8c_C6SVA3AE8qPs3WA"},styles:[{markerOptions:{iconName:"measle_grey"}},{where:"Available > 0",markerOptions:{iconName:"small_red"}}],suppressInfoWindows:!0});o.setMap(n),google.maps.event.addListener(o,"click",function(o){console.log(o.row);var t={name:o.row.Name.value,code:o.row.Code.value,available:o.row.Available.value,runwayCount:o.row.RunwayCount.value,runwaySurfaceType:o.row.RunwaySurfaceType.value},r=$.templates("#airport-info-window-template").render(t),a=new google.maps.LatLng(o.row.Latitude.value,o.row.Longitude.value),i=r;e.currentInfoWindow&&e.currentInfoWindow.close&&e.currentInfoWindow.close(),e.currentInfoWindow=new google.maps.InfoWindow({content:i,position:a,pixelOffset:o.pixelOffset}),e.currentInfoWindow.open(n)})},e}();n.Airports=t}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vd3d3cm9vdC9zY3JpcHRzL2FpcnBvcnRkZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3d3d3Jvb3Qvc2NyaXB0cy9jdWx0aXZhdGlvbmdyaWRzcXVhcmVzLmpzIiwid2VicGFjazovLy8uL3d3d3Jvb3Qvc2NyaXB0cy9jdWx0aXZhdGlvbmdyaWRzcXVhcmVkZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3d3d3Jvb3Qvc2NyaXB0cy9haXJwb3J0cy5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImFpcnBvcnRkZXRhaWxzXzEiLCJjdWx0aXZhdGlvbmdyaWRzcXVhcmVzXzEiLCJjdWx0aXZhdGlvbmdyaWRzcXVhcmVkZXRhaWxzXzEiLCJhaXJwb3J0c18xIiwiTWFpbiIsIl90aGlzIiwidGhpcyIsIk5hdmlnbyIsIk1BVENIX1JFR0VYUF9GTEFHUyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJvbiIsImFpcnBvcnRzLyoiLCJhaXJwb3J0RGV0YWlscyIsIkFpcnBvcnREZXRhaWxzIiwiY3VsdGl2YXRpb24vKiIsImN1bHRpdmF0aW9uR3JpZFNxdWFyZURldGFpbHMiLCJDdWx0aXZhdGlvbkdyaWRTcXVhcmVEZXRhaWxzIiwiY3VsdGl2YXRpb24iLCJjdWx0aXZhdGlvbkdyaWRTcXVhcmVzIiwiQ3VsdGl2YXRpb25HcmlkU3F1YXJlcyIsIioiLCJhaXJwb3J0cyIsIkFpcnBvcnRzIiwicmVzb2x2ZSIsIndpbmRvdyIsImFlcm9zY2VuZXJ5SHViIiwic2hvd01hcCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiYWlycG9ydExvY2F0aW9uIiwibGF0IiwibG5nIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ6b29tIiwiY2VudGVyIiwibWFwVHlwZUlkIiwiTWFwVHlwZUlkIiwiU0FURUxMSVRFIiwiJCIsImFqYXgiLCJ1cmwiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJncmlkTGluZXNMb2FkZWQiLCJhc3luYyIsImNhY2hlIiwibWFwIiwiSFlCUklEIiwiZGlzYWJsZURlZmF1bHRVSSIsIkdyYXRpY3VsZSIsImFpcnBvcnRzTGF5ZXIiLCJGdXNpb25UYWJsZXNMYXllciIsInF1ZXJ5Iiwic2VsZWN0IiwiZnJvbSIsInN0eWxlcyIsIm1hcmtlck9wdGlvbnMiLCJpY29uTmFtZSIsIndoZXJlIiwic3VwcHJlc3NJbmZvV2luZG93cyIsInNldE1hcCIsImV2ZW50IiwiYWRkTGlzdGVuZXIiLCJlIiwicm93IiwiZGF0YSIsIk5hbWUiLCJjb2RlIiwiQ29kZSIsImF2YWlsYWJsZSIsIkF2YWlsYWJsZSIsInJ1bndheUNvdW50IiwiUnVud2F5Q291bnQiLCJydW53YXlTdXJmYWNlVHlwZSIsIlJ1bndheVN1cmZhY2VUeXBlIiwiaHRtbE91dHB1dCIsInRlbXBsYXRlcyIsInJlbmRlciIsInBvaW50IiwiTGF0TG5nIiwiTGF0aXR1ZGUiLCJMb25naXR1ZGUiLCJodG1sIiwiY3VycmVudEluZm9XaW5kb3ciLCJjbG9zZSIsIkluZm9XaW5kb3ciLCJjb250ZW50IiwicG9zaXRpb24iLCJwaXhlbE9mZnNldCIsIm9wZW4iXSwibWFw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ZCxHQUNBbEIsT0FBQUMsS0FBQWdDLE1BQUFDLFlBQUFaLEVBQUEsaUJBQUFhLEdBQ0EzRCxRQUFBQyxJQUFBMEQsRUFBQUMsS0FDQSxJQUFBQyxHQUNBaEcsS0FBQThGLEVBQUFDLElBQUFFLEtBQUF2RixNQUNBd0YsS0FBQUosRUFBQUMsSUFBQUksS0FBQXpGLE1BQ0EwRixVQUFBTixFQUFBQyxJQUFBTSxVQUFBM0YsTUFDQTRGLFlBQUFSLEVBQUFDLElBQUFRLFlBQUE3RixNQUNBOEYsa0JBQUFWLEVBQUFDLElBQUFVLGtCQUFBL0YsT0FHQWdHLEVBREFyQyxFQUFBc0MsVUFBQSxpQ0FDQUMsT0FBQVosR0FDQWEsRUFBQSxJQUFBbEQsT0FBQUMsS0FBQWtELE9BQUFoQixFQUFBQyxJQUFBZ0IsU0FBQXJHLE1BQUFvRixFQUFBQyxJQUFBaUIsVUFBQXRHLE9BQ0F1RyxFQUFBUCxFQUNBNUUsRUFBQW9GLG1CQUFBcEYsRUFBQW9GLGtCQUFBQyxPQUNBckYsRUFBQW9GLGtCQUFBQyxRQUVBckYsRUFBQW9GLGtCQUFBLElBQUF2RCxPQUFBQyxLQUFBd0QsWUFDQUMsUUFBQUosRUFDQUssU0FBQVQsRUFDQVUsWUFBQXpCLEVBQUF5QixjQUVBekYsRUFBQW9GLGtCQUFBTSxLQUFBM0MsTUFHQTVCLEVBdkRBLEdBeURBMUQsRUFBQTBEIiwiZmlsZSI6ImFlcm9zY2VuZXJ5LWh1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhaXJwb3J0ZGV0YWlsc18xID0gcmVxdWlyZShcIi4vYWlycG9ydGRldGFpbHNcIik7XHJcbnZhciBjdWx0aXZhdGlvbmdyaWRzcXVhcmVzXzEgPSByZXF1aXJlKFwiLi9jdWx0aXZhdGlvbmdyaWRzcXVhcmVzXCIpO1xyXG52YXIgY3VsdGl2YXRpb25ncmlkc3F1YXJlZGV0YWlsc18xID0gcmVxdWlyZShcIi4vY3VsdGl2YXRpb25ncmlkc3F1YXJlZGV0YWlsc1wiKTtcclxudmFyIGFpcnBvcnRzXzEgPSByZXF1aXJlKFwiLi9haXJwb3J0c1wiKTtcclxudmFyIE1haW4gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHJvb3QgPSBudWxsO1xyXG4gICAgICAgIHZhciB1c2VIYXNoID0gZmFsc2U7IC8vIERlZmF1bHRzIHRvOiBmYWxzZVxyXG4gICAgICAgIC8vdmFyIGhhc2ggPSAnIyEnOyAvLyBEZWZhdWx0cyB0bzogJyMnXHJcbiAgICAgICAgTmF2aWdvLk1BVENIX1JFR0VYUF9GTEFHUyA9IFwiaVwiO1xyXG4gICAgICAgIHZhciByb3V0ZXIgPSBuZXcgTmF2aWdvKHJvb3QsIHVzZUhhc2gpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm91dGVyXCIpO1xyXG4gICAgICAgIHJvdXRlclxyXG4gICAgICAgICAgICAub24oe1xyXG4gICAgICAgICAgICAnYWlycG9ydHMvKic6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmFpcnBvcnREZXRhaWxzID0gbmV3IGFpcnBvcnRkZXRhaWxzXzEuQWlycG9ydERldGFpbHMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2N1bHRpdmF0aW9uLyonOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5jdWx0aXZhdGlvbkdyaWRTcXVhcmVEZXRhaWxzID0gbmV3IGN1bHRpdmF0aW9uZ3JpZHNxdWFyZWRldGFpbHNfMS5DdWx0aXZhdGlvbkdyaWRTcXVhcmVEZXRhaWxzKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdjdWx0aXZhdGlvbic6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmN1bHRpdmF0aW9uR3JpZFNxdWFyZXMgPSBuZXcgY3VsdGl2YXRpb25ncmlkc3F1YXJlc18xLkN1bHRpdmF0aW9uR3JpZFNxdWFyZXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJyonOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5haXJwb3J0cyA9IG5ldyBhaXJwb3J0c18xLkFpcnBvcnRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnJlc29sdmUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBNYWluO1xyXG59KCkpO1xyXG5leHBvcnRzLk1haW4gPSBNYWluO1xyXG53aW5kb3cuYWVyb3NjZW5lcnlIdWIgPSBuZXcgTWFpbigpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1tYWluLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBBaXJwb3J0RGV0YWlscyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFpcnBvcnREZXRhaWxzKCkge1xyXG4gICAgfVxyXG4gICAgQWlycG9ydERldGFpbHMucHJvdG90eXBlLnNob3dNYXAgPSBmdW5jdGlvbiAobGF0aXR1ZGUsIGxvbmdpdHVkZSkge1xyXG4gICAgICAgIHZhciBhaXJwb3J0TG9jYXRpb24gPSB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9uZ2l0dWRlIH07XHJcbiAgICAgICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIHpvb206IDE1LFxyXG4gICAgICAgICAgICBjZW50ZXI6IGFpcnBvcnRMb2NhdGlvbixcclxuICAgICAgICAgICAgbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuU0FURUxMSVRFXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFpcnBvcnREZXRhaWxzO1xyXG59KCkpO1xyXG5leHBvcnRzLkFpcnBvcnREZXRhaWxzID0gQWlycG9ydERldGFpbHM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFpcnBvcnRkZXRhaWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDdWx0aXZhdGlvbkdyaWRTcXVhcmVzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3VsdGl2YXRpb25HcmlkU3F1YXJlcygpIHtcclxuICAgIH1cclxuICAgIEN1bHRpdmF0aW9uR3JpZFNxdWFyZXMucHJvdG90eXBlLnNob3dNYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiL2xpYi9nb29nbGUtbWFwcy1ncmlkbGluZXMvZ29vZ2xlLW1hcHMtZ3JpZGxpbmVzLmpzXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnc2NyaXB0JyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZ3JpZExpbmVzTG9hZGVkKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEN1bHRpdmF0aW9uR3JpZFNxdWFyZXMucHJvdG90eXBlLmdyaWRMaW5lc0xvYWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYWlycG9ydExvY2F0aW9uID0geyBsYXQ6IDEwLCBsbmc6IDAgfTtcclxuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLCB7XHJcbiAgICAgICAgICAgIHpvb206IDMsXHJcbiAgICAgICAgICAgIGNlbnRlcjogYWlycG9ydExvY2F0aW9uLFxyXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5IWUJSSUQsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgZ3JpZGxpbmVzID0gbmV3IEdyYXRpY3VsZShtYXApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDdWx0aXZhdGlvbkdyaWRTcXVhcmVzO1xyXG59KCkpO1xyXG5leHBvcnRzLkN1bHRpdmF0aW9uR3JpZFNxdWFyZXMgPSBDdWx0aXZhdGlvbkdyaWRTcXVhcmVzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdWx0aXZhdGlvbmdyaWRzcXVhcmVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBDdWx0aXZhdGlvbkdyaWRTcXVhcmVEZXRhaWxzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ3VsdGl2YXRpb25HcmlkU3F1YXJlRGV0YWlscygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBDdWx0aXZhdGlvbkdyaWRTcXVhcmVEZXRhaWxzO1xyXG59KCkpO1xyXG5leHBvcnRzLkN1bHRpdmF0aW9uR3JpZFNxdWFyZURldGFpbHMgPSBDdWx0aXZhdGlvbkdyaWRTcXVhcmVEZXRhaWxzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1jdWx0aXZhdGlvbmdyaWRzcXVhcmVkZXRhaWxzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBBaXJwb3J0cyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFpcnBvcnRzKCkge1xyXG4gICAgfVxyXG4gICAgQWlycG9ydHMucHJvdG90eXBlLnNob3dNYXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgYWlycG9ydExvY2F0aW9uID0geyBsYXQ6IDEwLCBsbmc6IDAgfTtcclxuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwLWNvbnRhaW5lcicpLCB7XHJcbiAgICAgICAgICAgIHpvb206IDMsXHJcbiAgICAgICAgICAgIGNlbnRlcjogYWlycG9ydExvY2F0aW9uLFxyXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5IWUJSSUQsXHJcbiAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9mdXNpb250YWJsZXMvZG9jcy9zYW1wbGVzL2R5bmFtaWNfc3R5bGluZ190ZW1wbGF0ZVxyXG4gICAgICAgIHZhciBhaXJwb3J0c0xheWVyID0gbmV3IGdvb2dsZS5tYXBzLkZ1c2lvblRhYmxlc0xheWVyKHtcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdDogJ1xcJ0dlb2NvZGFibGUgYWRkcmVzc1xcJycsXHJcbiAgICAgICAgICAgICAgICBmcm9tOiAnMUtEN2NVUFZKVHBONDlfbTJndkF6QVk4Y19DNlNWQTNBRThxUHMzV0EnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0eWxlczogW3tcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25OYW1lOiBcIm1lYXNsZV9ncmV5XCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hlcmU6ICdBdmFpbGFibGUgPiAwJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJrZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25OYW1lOiBcInNtYWxsX3JlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHN1cHByZXNzSW5mb1dpbmRvd3M6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICBhaXJwb3J0c0xheWVyLnNldE1hcChtYXApO1xyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGFpcnBvcnRzTGF5ZXIsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucm93KTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBlLnJvdy5OYW1lLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY29kZTogZS5yb3cuQ29kZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZTogZS5yb3cuQXZhaWxhYmxlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcnVud2F5Q291bnQ6IGUucm93LlJ1bndheUNvdW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgcnVud2F5U3VyZmFjZVR5cGU6IGUucm93LlJ1bndheVN1cmZhY2VUeXBlLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9ICQudGVtcGxhdGVzKFwiI2FpcnBvcnQtaW5mby13aW5kb3ctdGVtcGxhdGVcIik7XHJcbiAgICAgICAgICAgIHZhciBodG1sT3V0cHV0ID0gdGVtcGxhdGUucmVuZGVyKGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGUucm93LkxhdGl0dWRlLnZhbHVlLCBlLnJvdy5Mb25naXR1ZGUudmFsdWUpO1xyXG4gICAgICAgICAgICB2YXIgaHRtbCA9IGh0bWxPdXRwdXQ7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5jdXJyZW50SW5mb1dpbmRvdyAmJiBfdGhpcy5jdXJyZW50SW5mb1dpbmRvdy5jbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudEluZm9XaW5kb3cuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50SW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGh0bWwsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9pbnQsXHJcbiAgICAgICAgICAgICAgICBwaXhlbE9mZnNldDogZS5waXhlbE9mZnNldFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgX3RoaXMuY3VycmVudEluZm9XaW5kb3cub3BlbihtYXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBBaXJwb3J0cztcclxufSgpKTtcclxuZXhwb3J0cy5BaXJwb3J0cyA9IEFpcnBvcnRzO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1haXJwb3J0cy5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9