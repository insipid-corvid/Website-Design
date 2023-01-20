"use strict";

pickup_date.focus()

$(document).ready( () => {

	const reservation_form = document.getElementById('reservation_form');
	const pickup_date = document.getElementById('pickup_date');
	const days = document.getElementById('day_count');
	const vehicle_type = document.getElementById('vehicle_type');
	const engine_type = document.getElementById('engine_type');
	const colour = document.getElementById('colour');
	const convertible = document.getElementById("convertible");
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const phone = document.getElementById('phone_number');
	const form = document.getElementById('form')
	

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		;
		validateForm();
	});

	
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
		function validateForm() {
			//remove white space from the values
			let pickup_date_value = pickup_date.value.trim();
			let days_value = days.value.trim();
			let name_value = name.value.trim();
			let email_value = email.value.trim();
			let phone_value = phone.value.trim();

			//converts the day value into a number
			let days_value_parsed = parseInt(days_value, 10);
			console.log(days_value_parsed);

			//determine if the input is valid
			if(pickup_date_value === ''){
				document.getElementById('pickup_error').innerHTML = 'Pick-up date is required.'
				
			}else{
				document.getElementById('pickup_error').innerHTML = ''

			}

			if(days_value_parsed === ''){
				document.getElementById('day_count_error').innerHTML = 'Number of days is required.'
				console.log('here');
			} 
			//Determine if day count is a number
			else if(days_value_parsed == 'NaN') {
				document.getElementById('day_count_error').innerHTML = "Must be a number"
				
			} else {
				document.getElementById('day_count_error').innerHTML = ''
			}

			if(name_value === ''){
				document.getElementById('name_error').innerHTML = 'Name is required.'

			} else {
				document.getElementById('name_error').innerHTML = ''

			}

			if(email_value === ''){
				document.getElementById('email_error').innerHTML = 'Email is required.'
				
			} else {
				document.getElementById('email_error').innerHTML = ''
				
			}
		
			if(phone_value === ''){
				document.getElementById('phone_error').innerHTML = 'Phone number is required.'
				
			} else {
				document.getElementById('phone_error').innerHTML = ''
				
			}
		};
	
		
}); // end ready