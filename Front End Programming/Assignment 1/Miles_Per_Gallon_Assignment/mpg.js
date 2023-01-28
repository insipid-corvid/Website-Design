"use strict";

const checker = (selector) => document.querySelector(selector);

const getError = (lbl) => `${lbl} must be a valid number greater than zero`;

const selectAndFocus = (selector) => {
  const elem = checker(selector);
  elem.focus();
  elem.select();
};

const processEntries = () => {
  const miles = parseFloat(checker("#miles").value);
  const gallons = parseFloat(checker("#gallons").value);

  if (isNaN(miles) || miles <= 0) {
    alert(getError("Miles driven"));
    selectAndFocus("#miles");
  } else if (isNaN(gallons) || gallons <= 0) {
    alert(getError("Gallons used"));
  } else {
    checker("#mpg").value = (miles / gallons).toFixed(2);
  }
};

var clearEntries = () => {
  checker("#miles").value = "";
  checker("#gallons").value = "";
  checker("#mpg").value = "";
};

var clearMiles = () => {
  checker("#miles").value = "";
};

var clearGallons = () => {
  checker("#gallons").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
  checker("#submit").addEventListener("click", processEntries);
  checker("#mpg").addEventListener("dblclick", clearEntries);
  checker("#miles").focus();
  checker("#miles").addEventListener("focus", clearMiles);
  checker("#gallons").addEventListener("focus", clearGallons);
});
