"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Place {
    constructor(continent, country, city) {
        this.continent = continent;
        this.country = country;
        this.city = city;
    }
    getContinent() {
        return this.continent;
    }
    getCountry() {
        return this.country;
    }
    getCity() {
        return this.city;
    }
    setContinent(continent) {
        this.continent = continent;
    }
    setCountry(country) {
        this.country = country;
    }
    setCity(city) {
        this.city = city;
    }
}
exports.default = Place;
