"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CultivationGridSquares = /** @class */ (function () {
    function CultivationGridSquares() {
    }
    CultivationGridSquares.prototype.showMap = function () {
        var _this = this;
        $.ajax({
            url: "/lib/google-maps-gridlines/google-maps-gridlines.js",
            dataType: 'script',
            success: function () {
                _this.gridLinesLoaded();
            },
            async: true,
            cache: true
        });
    };
    CultivationGridSquares.prototype.gridLinesLoaded = function () {
        var airportLocation = { lat: 10, lng: 0 };
        var map = new google.maps.Map(document.getElementById('map-container'), {
            zoom: 3,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true
        });
        var gridlines = new Graticule(map);
    };
    return CultivationGridSquares;
}());
exports.CultivationGridSquares = CultivationGridSquares;
//# sourceMappingURL=cultivationgridsquares.js.map