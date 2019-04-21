import React from 'react';
const Form = (props)=>{
	return(
		<form onSubmit = {props.loadweather}>
		<input type = "text" name="city" placeholder="City..." />
		<input type = "text" name="country" placeholder="Country.." />
		<button> Find Weather </button>
		</form>

		)
}

export default Form;