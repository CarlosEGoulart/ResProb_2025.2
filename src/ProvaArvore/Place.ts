export default class Place {
  private continent: string;
  private country?: string;
  private city?: string;

  constructor(continent: string, country?: string, city?: string) {
    this.continent = continent;
    this.country = country;
    this.city = city;
  }

  public getContinent() {
    return this.continent;
  }

  public getCountry() {
    return this.country;
  }

  public getCity() {
    return this.city;
  }

  public setContinent(continent: string): void {
    this.continent = continent;
  }
  
  public setCountry(country: string): void {
    this.country = country;
  }

  public setCity(city: string): void {
    this.city = city;
  }
}
