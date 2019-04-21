import React from 'react';
const Form = (props)=>{
	render(){
	return(
		<form onSubmit = {this.props.loadWeather}>
		<input type = "text" name="city" placeholder="City..." />
		<input type = "text" name="country" placeholder="Country.." />
		<button> Find Weather </button>
		</form>

		)
}
}

export default Form;