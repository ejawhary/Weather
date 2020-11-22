class UI {
  constructor() {
    this.location = document.getElementById('location')
    this.desc = document.getElementById('desc')
    this.temp = document.getElementById('temp')
    this.icon = document.getElementById('icon')
    this.realFeel = document.getElementById('real-feel')
    this.precip = document.getElementById('precip')
    this.wind = document.getElementById('wind')
    this.hum = document.getElementById('hum')
    this.uvIndex = document.getElementById('uv-index')
  
  }

  paintLocation(location) {
    this.location.textContent = location.EnglishName + ', ' + location.Country.EnglishName;
  }

  paintWeather(weather) {
    console.log(weather);
    this.desc.textContent = weather.WeatherText;
    this.temp.textContent = `${weather.Temperature.Metric.Value}°${weather.Temperature.Metric.Unit} (${weather.Temperature.Imperial.Value}°${weather.Temperature.Imperial.Unit})`;
    this.icon.setAttribute('src', `/img/icons/${weather.WeatherIcon}.png`);
    this.realFeel.textContent = `Feels like: ${weather.RealFeelTemperature.Metric.Value}°${weather.RealFeelTemperature.Metric.Unit} (${weather.Temperature.Imperial.Value}°${weather.Temperature.Imperial.Unit})`;
    let precipiataion;
    if(weather.PrecipitationType === null) {
      precipiataion = 'None';
    } else {
      precipiataion = weather.PrecipitationType;
    }
    this.precip.textContent = `Precipitation: ${precipiataion}`;
    this.wind.textContent = `Wind from: ${weather.Wind.Direction.English} ${weather.Wind.Direction.Degrees}° ${weather.Wind.Speed.Metric.Value}${weather.Wind.Speed.Metric.Unit}`;
    this.hum.textContent = `Humudity: ${weather.RelativeHumidity}%`;
    this.uvIndex.textContent = `UV Index: ${weather.UVIndexText}`
  }
}