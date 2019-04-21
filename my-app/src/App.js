import React from 'react';
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather"

//const api_key ="cf40c34f21ef9f48e5f30172da1b3334";


class App extends React.Component {
  state = {
    temperature:undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error:undefined

  }

	getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.city.value;
		e.preventDefault();

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=cf40c34f21ef9f48e5f30172da1b3334`);
		const response = await api_call.json();
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity:response.main.humidity,
      description: response.weather[0].description,
      error:""
    })
		console.log(response);
	}
  render() {
    return (
      <div >
        <Titles />
        <Form loadWeather = {this.getWeather} />
        <Weather
          temperature = {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
    );
  }
}

export default App;
