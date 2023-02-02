"use strict";

const names = ["Tim", "Betsy", "Fred", "Lucy"];
const scores = [77, 98, 50, 100];

const $ = (selector) => document.querySelector(selector);

const addScore = () => {
  // clears the text area
  $("#scores_display").value = "";

  // get user entries
  const name = $("#name").value;
  const score = parseInt($("#score").value);
  let isValid = true;

  // check entries for validity
  if (name == "") {
    $("#name").nextElementSibling.textContent = "This field is required.";
    isValid = false;
  } else {
    $("#name").nextElementSibling.textContent = "";
  }

  if (isNaN(score) || score < 0 || score > 100) {
    $("#score").nextElementSibling.textContent =
      "You must enter a valid score.";
    isValid = false;
  } else {
    $("#score").nextElementSibling.textContent = "";
  }

  if (isValid) {
    names[names.length] = name;
    scores[scores.length] = score;
    $("#name").value = "";
    $("#score").value = "";
  }
  $("#name").focus();
};

const showScore = () => {
  let textOutput = "";
  // adds the array to the text variable
  for (let i = 0; i < names.length; i++) {
    textOutput = textOutput + names[i] + " = " + scores[i] + "\n";
  }
  // writes the array to the text area
  $("#scores_display").value = textOutput;
};
document.addEventListener("DOMContentLoaded", () => {
  $("#add").addEventListener("click", addScore);
  $("#name").focus();
  $("#display_scores").addEventListener("click", showScore);
});
