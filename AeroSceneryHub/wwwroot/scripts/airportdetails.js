"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AirportDetails = /** @class */ (function () {
    function AirportDetails() {
    }
    AirportDetails.prototype.showMap = function (latitude, longitude) {
        var airportLocation = { lat: latitude, lng: longitude };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    };
    return AirportDetails;
}());
exports.AirportDetails = AirportDetails;
//# sourceMappingURL=airportdetails.js.map