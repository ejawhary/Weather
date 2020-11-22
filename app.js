// INIT STORAGE CLASS
const storage = new Storage();
// GET STORED DATA
const weatherLocation = storage.getLocationData();
// init weather object
const weather = new Weather(weatherLocation.city);
// INIT UI OBJECT
const ui = new UI(); 

// CHANGE LOCATION EVENT
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // change location
  weather.changeLocation(city);
  // set location
  storage.setLocationData(city);

  loadWeather();

  // CLOSE MODAL
  $('#locModal').modal('hide')
})
// CHANGE CITY


// Load weather on DOM loaded
document.addEventListener('DOMContentLoaded', loadWeather); 

function loadWeather() {
  // FETCH CITY ID THEN FEACH WEATHER FOR CITY 
  weather.getCity()
  .then(results => {
    return ui.paintLocation(results.full),
    weather.getWeather(results.id)
      .then(weatherData => ui.paintWeather(weatherData[0])) 
  })
  .catch(err => console.log(err))
};

