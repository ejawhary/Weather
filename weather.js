class Weather {
  constructor(city) {
    this.apiKey = 'WgJ56xZqmL9wiqLogy9oty244mOpl6AG';
    this.city = city;    
  }

  // fetch city info from get location api
  async getCity() {
    const response = await fetch(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.apiKey}&q=${this.city}`);

    const responseData = await response.json();
    const full = responseData[0];
    const id = responseData[0].Key;
    const city = responseData[0].EnglishName;
    const country = responseData[0].Country.EnglishName;
    const code = responseData[0].Country.ID;

    return {
      full,
      id, 
      city, 
      country,
      code
    }
  };

  // Fetch weather form current condition api
  async getWeather(id) {
    const response = await fetch(`https://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${this.apiKey}&language=en-gb&details=true`);

    const responseData = await response.json();
    return responseData;      
  }

  

  // change weather location
  changeLocation(city) {
    this.city = city;
  }
}
