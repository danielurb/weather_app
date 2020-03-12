class Forecast {
  constructor() {
    this.key = 'FmdAhoo6EsZGAKhYTpNXHxYdQtHPS2z3';
    this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city);
    const weather = await this.getWeather(cityDets.Key);
    return { cityDets, weather };
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`;
    const responce = await fetch(this.cityURI + query);
    const data = await responce.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`;
    const responce = await fetch(this.weatherURI + query);
    const data = await responce.json();
    return data[0];
  }
}
