declare var Graticule;

export class CultivationGridSquares {
    constructor() {

    }

    public showMap() {

        $.ajax({
            url: "/lib/google-maps-gridlines/google-maps-gridlines.js",
            dataType: 'script',
            success: () => {
                this.gridLinesLoaded();
            },
            async: true,
            cache: true
        });

    }

    private gridLinesLoaded() {
        let airportLocation = { lat: 10, lng: 0 };

        let map = new google.maps.Map(document.getElementById('map-container'), {
            zoom: 3,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true
        });

        let gridlines = new Graticule(map);
    }
}