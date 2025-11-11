"use strict";
//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class World {
    constructor() {
        this.worldTree = {};
    }
    add(Place) {
        const continent = Place.getContinent();
        const country = Place.getCountry() || '';
        const city = Place.getCity() || '';
        if (this.worldTree[continent]) {
            if (country !== '') {
                if (this.worldTree[continent][country]) {
                    if (city !== '') {
                        if (this.worldTree[continent][country].includes(city)) {
                            return false;
                        }
                    }
                    else {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
        }
        if (!this.worldTree[continent]) {
            this.worldTree[continent] = {};
        }
        if (country !== '') {
            if (!this.worldTree[continent][country]) {
                this.worldTree[continent][country] = [];
            }
            if (city !== '') {
                this.worldTree[continent][country].push(city);
            }
        }
        return true;
    }
    toString() {
        let output = '';
        for (const continentName in this.worldTree) {
            output += `\n${continentName}\n`;
            const continent = this.worldTree[continentName];
            for (const countryName in continent) {
                if (countryName !== '') {
                    output += ` \n--${countryName}\n`;
                    continent[countryName].forEach((cityName) => {
                        output += `----${cityName}\n`;
                    });
                }
            }
        }
        return output;
    }
}
exports.default = World;
