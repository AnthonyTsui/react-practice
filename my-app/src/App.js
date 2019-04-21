import React from 'react';
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather"

const api_key ="cf40c34f21ef9f48e5f30172da1b3334";


class App extends React.Component {
	getWeather = async (e) => {
		e.preventDefault();

		const api_call = await fetch (`http://api.openweather.org/data/2.5/weather?q=london,uk&appid=${api_key}`);
		const response = await api_call.json();
		console.log(response);
	}
  render() {
    return (
      <div >
        <Titles />
        <Form loadWeather = {this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
