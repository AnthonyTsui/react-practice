import React from 'react';
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather"

const apik ="cf40c34f21ef9f48e5f30172da1b3334";


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

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apik}`);
		const response = await api_call.json();

    if(response.main === undefined){
      this.setState({
        error:"We could not find the location, please try another..."
      })
    }
    else 
    {
      if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity:response.main.humidity,
        description: response.weather[0].description,
        error:""
      })
    }
      else{
        this.setState({
          error:"Please input a city and country..."
        })
      }
    }

    

    
		console.log(response);
	}
  render() {
    return (
      <div>
       <div className="wrapper">
        <div className="main">
         <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Titles />
            </div>
            <div className="col-xs-7 form-container">
              <Form loadWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
           </div>
          </div>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
