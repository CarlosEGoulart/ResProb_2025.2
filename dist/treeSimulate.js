"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Simulate {
    constructor(continent, country, city) {
        this.continent = continent;
        this.country = country;
        this.city = city;
        this.worldTree = {};
    }
    world(cntnt, cnty, city) {
        const countryName = cnty || "";
        const cityName = city || "";
        if (!this.worldTree[cntnt]) {
            this.worldTree[cntnt] = {};
        }
        const continentNode = this.worldTree[cntnt];
        if (countryName !== "") {
            if (!continentNode[countryName]) {
                continentNode[countryName] = [];
            }
            if (cityName !== "") {
                const cityList = continentNode[countryName];
                let cityExists = false;
                for (let i = 0; i < cityList.length; i++) {
                    if (cityList[i] === cityName) {
                        cityExists = true;
                        break;
                    }
                }
                if (!cityExists) {
                    cityList.push(cityName);
                }
            }
        }
        this.continent.push(cntnt);
        this.country.push(countryName);
        this.city.push(cityName);
    }
    toString() {
        let output = "";
        const worldGroup = this.worldTree;
        for (const continentName in worldGroup) {
            output += `\n${continentName}\n`;
            const continent = worldGroup[continentName];
            for (const countryName in continent) {
                if (countryName !== "") {
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
exports.default = Simulate;
let test = new Simulate([], [], []);
test.world("América do Sul", "Colombia");
test.world("América do Sul", "Brasil", "Curitiba");
test.world("América do Sul", "Brasil", "Florianopolis");
test.world("América do Sul", "Argentina");
test.world("Europa", "Inglaterra", "Londres");
test.world("Europa", "Inglaterra", "Lancaster");
test.world("Europa", "Italia", "Roma");
test.world("Asia");
console.log(test.toString());
