"use strict";

const c = (selector) => document.querySelector(selector);

const joinList = () => {
  //get entry from text boxes
  const email1 = c("#email_1").value;
  const email2 = c("#email_2").value;
  const firstName = c("#first_name").value;

  //validate user entry
  let isValid = true;
  if (email1 == "") {
    c("#email_1_error").textContent = "E-mail is required.";
    isValid = false;
  } else {
    c("#email_1_error").textContent = "";
  }
  if (email1 != email2) {
    c("#email_2_error").textContent = "E-mails must match.";
    isValid = false;
  } else {
    c("#email_2_error").textContent = "";
  }

  if (firstName == "") {
    c("#first_name_error").textContent = "Name is required.";
    console.log("here");
    isValid = false;
  } else {
    c("#first_name_error").textContent = "";
  }

  //submits the form if entries are valid
  if (isValid) {
    c("#email_form").submit();
  }
};
const clearForm = () => {
  //clear text boxes
  c("#email_1").value = "";
  c("#email_2").value = "";
  c("#first_name").value = "";

  //clear error fields
  c("#email_1_error").textContent = "*";
  c("#email_2_error").textContent = "*";
  c("#first_name_error").textContent = "*";

  //sets focus on first text box after clearing
  c("#email_1").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  //connects click events to the buttons
  c("#join_list").addEventListener("click", joinList);
  c("#empty_form").addEventListener("click", clearForm);

  //focuses first text box after content loads
  c("#email_1").focus();
});
