"use strict";

//sets the cursor to the pickup date text field
pickup_date.focus();

$(document).ready(() => {
  //initializing constants
  const reservation_form = document.getElementById("reservation_form");
  const pickup_date = document.getElementById("pickup_date");
  const days = document.getElementById("day_count");
  const vehicle_type = document.getElementById("vehicle_type");
  const engine_type = document.getElementById("engine_type");
  const colour = document.getElementById("colour");
  const convertible = document.getElementById("convertible");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone_number");
  const form = document.getElementById("form");
  const email_pattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  //checks for when the user presses the submit button
  form.addEventListener("submit", (e) => {
    validateForm();

    function validateForm() {
      //remove white space from the values
      let pickup_date_value = pickup_date.value.trim();
      let days_value = days.value.trim();
      let name_value = name.value.trim();
      let email_value = email.value.trim();
      let phone_value = phone.value.trim();

      //writes the trimmed input back into the text field
      document.getElementById("pickup_date").value = pickup_date_value;
      document.getElementById("day_count").value = days_value;
      document.getElementById("name").value = name_value;
      document.getElementById("email").value = email_value;
      document.getElementById("phone_number").value = phone_value;

      //converts the day value into a number
      let days_value_parsed = parseInt(days_value, 10);

      //calls all the individual validation functions
      validatePickup();
      validateDays();
      validateName();
      validateEmail(email_value);
      validatePhone();

      function validatePickup() {
        if (pickup_date_value === "") {
          //prevents the document from being submitted
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("pickup_error").innerHTML =
            "Pick-up date is required.";
          return false;
        } else {
          //clears the error message field
          document.getElementById("pickup_error").innerHTML = "";
          return true;
        }
      }
      function validateDays() {
        if (days_value === "") {
          //prevents the document from being submitted
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("day_count_error").innerHTML =
            "Number of days is required.";
          return false;
        }
        //determine if day count is a number
        else if (days_value != days_value_parsed) {
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("day_count_error").innerHTML =
            "Must be a whole number";
          return false;
        } else {
          //clears the error message field
          document.getElementById("day_count_error").innerHTML = "";
          return true;
        }
      }
      function validateName() {
        if (name_value === "") {
          //prevents the document from being submitted
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("name_error").innerHTML = "Name is required.";
          return false;
        } else {
          //clears the error message field
          document.getElementById("name_error").innerHTML = "";
          return true;
        }
      }
      function validateEmail(email_value) {
        if (email_value === "") {
          //prevents the document from being submitted
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("email_error").innerHTML =
            "Email is required.";
          return false;

          //checks if the email entered is valid
        } else if (email_value.match(email_pattern)) {
          //clears the error message field
          document.getElementById("email_error").innerHTML = "";
          return true;
        } else {
          //prevents the document from being submitted
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("email_error").innerHTML =
            "Please enter a valid Email";
          return false;
        }
      }
      function validatePhone() {
        if (phone_value === "") {
          //prevents the document from being submitted
          e.preventDefault();

          //writes the error message back into the form
          document.getElementById("phone_error").innerHTML =
            "Phone number is required.";
          return false;
        } else {
          //clears the error message field
          document.getElementById("phone_error").innerHTML = "";
          return true;
        }
      }
    }
  });
}); // end ready
