import React from 'react';
import './css/Weather.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city : "Time",
      country : "Zone",
      temp : "0",
      description : "It's freezing",
      icon: undefined,
      lat: undefined,
      lon: undefined,
      loadong:false,
    };
  }

  setErr(lat,lon){
    this.setState({
      country : "Time",
      city : "Zone",
      temp : "???",
      description : "Error",
      icon: undefined,
      lat: lat,
      lon: lon,
      loadong:false,
    });
  }

  geocodeRequest = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  weatherRequest = async (lat,lon) => {
    const URL_BASE="http://api.openweathermap.org/data/2.5/weather";
    const UNITS="metric";
    const API_KEY="abf7bb42eee05588c0f5ed53510c5de5";
    const url=`${URL_BASE}?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`;
    await fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        country: data.sys.country,
        city: data.name,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        lat: lat,
        lon: lon,
        loadong:false,
      });
    })
    .catch((err) => {
      this.setErr(lat,lon);
      console.log(err);
    });;
      
  }

  componentDidMount() {
    this.geocodeRequest()
    .then((position) => {
      this.weatherRequest(position.coords.latitude, position.coords.longitude)
    })
    .catch((err) => {
      this.setErr(this.state.lat,this.state.lon);
      console.log(err);
    });
    this.timerID = setInterval(        
      () => 
      this.weatherRequest(this.state.lat, this.state.lon),
      6000000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { country, city, temp, icon, description, lat, lon } = this.state;
    if (!lat || !lon) {
      return (
        <div id="app">
          <div>Loading...</div>
        </div>
      );      
    }
    else {
      return (
        <div id="app">
          <div className="location">
            <h1 className="location-timezone">
              <span className="city">{city}</span>
              <span>&nbsp;</span>
              <span className="country">{country}</span>
            </h1>
            <p className="icon">
              {icon && (
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
              )}
            </p>
          </div>
          <div className="temperature">
              <div className="degree-section">
                <h2 className="degree">{temp}</h2>
                <span>°C</span>
              </div>
              <div className="temperature-description">{description}</div>
          </div>
        </div>
      );
    }
  }
}

export default App;