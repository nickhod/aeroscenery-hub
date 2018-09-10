"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var airportdetails_1 = require("./airportdetails");
var cultivationgridsquares_1 = require("./cultivationgridsquares");
var cultivationgridsquaredetails_1 = require("./cultivationgridsquaredetails");
var airports_1 = require("./airports");
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        var root = null;
        var useHash = false; // Defaults to: false
        //var hash = '#!'; // Defaults to: '#'
        Navigo.MATCH_REGEXP_FLAGS = "i";
        var router = new Navigo(root, useHash);
        console.log("router");
        router
            .on({
            'airports/*': function () {
                _this.airportDetails = new airportdetails_1.AirportDetails();
            },
            'cultivation/*': function () {
                _this.cultivationGridSquareDetails = new cultivationgridsquaredetails_1.CultivationGridSquareDetails();
            },
            'cultivation': function () {
                _this.cultivationGridSquares = new cultivationgridsquares_1.CultivationGridSquares();
            },
            '*': function () {
                _this.airports = new airports_1.Airports;
            }
        })
            .resolve();
    }
    return Main;
}());
exports.Main = Main;
window.aerosceneryHub = new Main();
//# sourceMappingURL=main.js.map