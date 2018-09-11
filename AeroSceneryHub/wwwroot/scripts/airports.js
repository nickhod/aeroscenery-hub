"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airports = /** @class */ (function () {
    function Airports() {
    }
    Airports.prototype.showMap = function () {
        var _this = this;
        var airportLocation = { lat: 10, lng: 0 };
        var map = new google.maps.Map(document.getElementById('map-container'), {
            zoom: 3,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true
        });
        // https://developers.google.com/fusiontables/docs/samples/dynamic_styling_template
        var airportsLayer = new google.maps.FusionTablesLayer({
            query: {
                select: '\'Geocodable address\'',
                from: '1KD7cUPVJTpN49_m2gvAzAY8c_C6SVA3AE8qPs3WA'
            },
            styles: [{
                    markerOptions: {
                        iconName: "measle_grey"
                    }
                }, {
                    where: 'Available > 0',
                    markerOptions: {
                        iconName: "small_red"
                    }
                }],
            suppressInfoWindows: true
        });
        airportsLayer.setMap(map);
        google.maps.event.addListener(airportsLayer, 'click', function (e) {
            console.log(e.row);
            var data = {
                name: e.row.Name.value,
                code: e.row.Code.value,
                available: e.row.Available.value,
                runwayCount: e.row.RunwayCount.value,
                runwaySurfaceType: e.row.RunwaySurfaceType.value
            };
            var template = $.templates("#airport-info-window-template");
            var htmlOutput = template.render(data);
            var point = new google.maps.LatLng(e.row.Latitude.value, e.row.Longitude.value);
            var html = htmlOutput;
            if (_this.currentInfoWindow && _this.currentInfoWindow.close) {
                _this.currentInfoWindow.close();
            }
            _this.currentInfoWindow = new google.maps.InfoWindow({
                content: html,
                position: point,
                pixelOffset: e.pixelOffset
            });
            _this.currentInfoWindow.open(map);
        });
    };
    return Airports;
}());
exports.Airports = Airports;
//# sourceMappingURL=airports.js.map