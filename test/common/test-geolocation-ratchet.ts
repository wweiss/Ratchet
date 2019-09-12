import { expect } from 'chai';
import {BooleanRatchet} from "../../src/common/boolean-ratchet";
import {GeolocationRatchet} from '../../src/common/geolocation-ratchet';
import {RequireRatchet} from '../../src/common/require-ratchet';

describe('#geolocationRatchet', function() {
    it('should generate the right distance', function() {
        const whLat: number = 38.8976805;
        const whLng: number = -77.0387238;

        const senLat: number = 38.8956636;
        const senLng: number = -77.0269061;

        let result: number = GeolocationRatchet.distanceBetweenLocations(whLat, whLng, senLat, senLng);

        result = parseFloat(result.toFixed(4));
        expect(result).to.equal(.6506);
    });

    it('should generate the right offset', function() {
        const lat: number = 37.26383;
        const miles: number = 1;

        const result1: number = GeolocationRatchet.degreeOfLatLngInMiles(lat);
        expect(result1).to.equal(55.0509);

        const result2: number = GeolocationRatchet.degreeOfLatLngInMiles(0);
        expect(result2).to.equal(69.172);

        const result3: number = GeolocationRatchet.degreeOfLatLngInMiles(lat*-1);
        expect(result3).to.equal(55.0509);

    });


    it('should generate the right offset', function() {
        const lat: number = 37.26383;
        const miles: number = 1;

        const result1: number = GeolocationRatchet.milesInDegLatLng(miles, lat);
        expect(result1).to.equal(1/55.0509);

        const result2: number = GeolocationRatchet.milesInDegLatLng(miles, 0);
        expect(result2).to.equal(1/69.172);

        const result3: number = GeolocationRatchet.milesInDegLatLng(miles, lat*-1);
        expect(result3).to.equal(1/55.0509);

    });
});


