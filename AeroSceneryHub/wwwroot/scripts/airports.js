"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airports = /** @class */ (function () {
    function Airports() {
    }
    Airports.prototype.showMap = function () {
        var airportLocation = { lat: 10, lng: 0 };
        var map = new google.maps.Map(document.getElementById('map-container'), {
            zoom: 3,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true
        });
    };
    return Airports;
}());
exports.Airports = Airports;
//# sourceMappingURL=airports.js.map