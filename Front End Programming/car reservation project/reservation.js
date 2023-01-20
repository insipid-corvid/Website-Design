"use strict";

pickup_date.focus()

$(document).ready( () => {

	const reservation_form = document.getElementById(reservation_form);
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
		
		console.log('here test');
		checkInputs();
	});

	
		const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		
		function checkInputs() {
			//remove white space from the values
			const pickup_date_value = pickup_date.value.trim();
			const days_value = days.value.trim();
			const name_value = name.value.trim();
			const email_value = email.value.trim();
			const phone_value = phone.value.trim();

			if(pickup_date_value === ''){
				setError(pickup_date, "Please select a pickup date");
			} else {
				setSuccess(pickup_date);
			}

			if(days_value === ''){
				setError(days, "Please select a number of days");
			} else {
				setSuccess(days);
			}

			if(name_value === ''){
				setError(name, "Please enter your name");
			} else {
				setSuccess(name);
			}

			if(email_value === ''){
				setError(email, "Email address is required");
			} else if (validEmail(email_value)){
				setError(email, 'Please provide a valid email address');
			} else {
				setSuccess(email);
			}
		
			if(phone_value === ''){
				setError(phone, "Please select a number of days");
			} else {
				setSuccess(phone);
			}
		};
	
		
}); // end ready