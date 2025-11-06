export default class Simulate {
    public continent: string[];
    public country: string[];
    public city: string[];
    private worldTree: any; 

    constructor(continent: string[], country: string[], city: string[]){
        this.continent = continent;
        this.country = country;
        this.city = city;
        this.worldTree = {};
    }

    public world(cntnt: string, cnty?: string, city?: string): void {
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

    public toString(): string {
        let output = "";
        const worldGroup = this.worldTree; 

        for (const continentName in worldGroup) {
            output += `\n${continentName}\n`;
            
            const continent = worldGroup[continentName];
            for (const countryName in continent) {
                if (countryName !== "") {
                    output += ` \n--${countryName}\n`;
                    
                    continent[countryName].forEach((cityName: string) => {
                        output += `----${cityName}\n`;
                    });
                }
            }
        }

        return output;
    }
}


let test = new Simulate([], [], []); 

test.world("América do Sul", "Colombia");
test.world("América do Sul", "Brasil", "Curitiba");
test.world("América do Sul", "Brasil", "Florianopolis");
test.world("América do Sul", "Argentina");
test.world("Europa", "Inglaterra", "Londres");
test.world("Europa", "Inglaterra", "Lancaster");
test.world("Europa", "Italia", "Roma");
test.world("Asia")

console.log(test.toString());