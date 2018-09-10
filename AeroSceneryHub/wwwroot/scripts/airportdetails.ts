export class AirportDetails {

    constructor() {

    }

    public showMap(latitude: number, longitude: number) {

        let airportLocation = { lat: latitude, lng: longitude };

        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: airportLocation,
            mapTypeId: google.maps.MapTypeId.SATELLITE
        });
    }
}