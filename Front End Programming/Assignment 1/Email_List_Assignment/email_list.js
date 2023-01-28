"use strict";

const checker = (selector) => document.querySelector(selector);

const joinList = () => {
  //get entry from text boxes
  const email1 = checker("#email_1").value;
  const email2 = checker("#email_2").value;
  const firstName = checker("#first_name").value;

  //validate user entry
  let isValid = true;
  if (email1 == "") {
    checker("#email_1_error").textContent = "E-mail is required.";
    isValid = false;
  } else {
    checker("#email_1_error").textContent = "";
  }
  if (email1 != email2) {
    checker("#email_2_error").textContent = "E-mails must match.";
    isValid = false;
  } else {
    checker("#email_2_error").textContent = "";
  }

  if (firstName == "") {
    checker("#first_name_error").textContent = "Name is required.";
    console.log("here");
    isValid = false;
  } else {
    checker("#first_name_error").textContent = "";
  }

  //submits the form if entries are valid
  if (isValid) {
    checker("#email_form").submit();
  }
};
const clearForm = () => {
  //clear text boxes
  checker("#email_1").value = "";
  checker("#email_2").value = "";
  checker("#first_name").value = "";

  //clear error fields
  checker("#email_1_error").textContent = "*";
  checker("#email_2_error").textContent = "*";
  checker("#first_name_error").textContent = "*";

  //sets focus on first text box after clearing
  checker("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  //connects click events to the buttons
  checker("#join_list").addEventListener("click", joinList);
  checker("#empty_form").addEventListener("click", clearForm);

  //focuses first text box after content loads
  checker("#email_1").focus();
});
