export class Airports {

    private currentInfoWindow: google.maps.InfoWindow;

    constructor() {

    }

    public showMap() {

        let airportLocation = { lat: 10, lng: 0 };

        let map = new google.maps.Map(document.getElementById('map-container'), {
            zoom: 3,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            disableDefaultUI: true
        });

        // https://developers.google.com/fusiontables/docs/samples/dynamic_styling_template
        let airportsLayer = new google.maps.FusionTablesLayer({
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

        google.maps.event.addListener(airportsLayer, 'click', (e) => {

            console.log(e.row);

            var data = {
                name: e.row.Name.value,
                code: e.row.Code.value,
                available: e.row.Available.value,
                runwayCount: e.row.RunwayCount.value,
                runwaySurfaceType: e.row.RunwaySurfaceType.value
            }

            var template = $.templates("#airport-info-window-template");
            var htmlOutput = template.render(data);

            var point = new google.maps.LatLng(e.row.Latitude.value, e.row.Longitude.value);
            var html = htmlOutput;

            if (this.currentInfoWindow && this.currentInfoWindow.close) {
                this.currentInfoWindow.close();
            }

            this.currentInfoWindow = new google.maps.InfoWindow({
                content: html,
                position: point,
                pixelOffset: e.pixelOffset
            });

            this.currentInfoWindow.open(map);
        });
    }
}