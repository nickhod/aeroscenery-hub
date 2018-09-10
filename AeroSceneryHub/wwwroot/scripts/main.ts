import { AirportDetails } from "./airportdetails";
import { CultivationGridSquares } from "./cultivationgridsquares";
import { CultivationGridSquareDetails } from "./cultivationgridsquaredetails";
import { Airports } from "./airports";

declare var Navigo: any;

export class Main {

    public airportDetails: AirportDetails;
    public airports: Airports;
    public cultivationGridSquareDetails: CultivationGridSquareDetails;
    public cultivationGridSquares: CultivationGridSquares;

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
                'cultivation/*': () => {
                    this.cultivationGridSquareDetails = new CultivationGridSquareDetails();
                },
                'cultivation': () => {
                    this.cultivationGridSquares = new CultivationGridSquares();
                },
                '*': () => {
                    this.airports = new Airports;

                }
            })
            .resolve();
    }
}

(<any>window).aerosceneryHub = new Main();