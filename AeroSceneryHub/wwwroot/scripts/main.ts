import { AirportDetails } from "./airportdetails";

declare var Navigo: any;

export class Main {

    public airportDetails: AirportDetails;

    constructor() {


        var root = null;
        var useHash = false; // Defaults to: false
        //var hash = '#!'; // Defaults to: '#'

        Navigo.MATCH_REGEXP_FLAGS = "i";

        var router = new Navigo(root, useHash);

        console.log("router");
        router
            .on({
                'airports/*': () => {
                    this.airportDetails = new AirportDetails();
                },
                'airports': () => {
                    //this.airportDetails = new AirportDetails();
                },
                '*': () => {
                    //let dashboards = new Dashboards();

                }
            })
            .resolve();
    }
}

(<any>window).aerosceneryHub = new Main();