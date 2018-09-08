"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var airportdetails_1 = require("./airportdetails");
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
            'airports': function () {
                //this.airportDetails = new AirportDetails();
            },
            '*': function () {
                //let dashboards = new Dashboards();
            }
        })
            .resolve();
    }
    return Main;
}());
exports.Main = Main;
window.aerosceneryHub = new Main();
//# sourceMappingURL=main.js.map