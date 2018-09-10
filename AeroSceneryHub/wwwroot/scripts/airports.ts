export class Airports {
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
    }
}