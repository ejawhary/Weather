class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'Abu Dhabi';
  }

  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem('city');
    }

    return {
      city: this.city
    }
  }

  setLocationData(city, state) {
    localStorage.setItem('city', city);
  }
}