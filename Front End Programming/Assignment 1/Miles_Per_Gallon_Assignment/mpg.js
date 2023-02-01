"use strict";

const c = (selector) => document.querySelector(selector);

const getError = (lbl) => `${lbl} must be a valid number greater than zero`;

const selectAndFocus = (selector) => {
  const elem = c(selector);
  elem.focus();
  elem.select();
};

const processEntries = () => {
  const miles = parseFloat(c("#miles").value);
  const gallons = parseFloat(c("#gallons").value);

  if (isNaN(miles) || miles <= 0) {
    alert(getError("Miles driven"));
    selectAndFocus("#miles");
  } else if (isNaN(gallons) || gallons <= 0) {
    alert(getError("Gallons used"));
  } else {
    c("#mpg").value = (miles / gallons).toFixed(2);
  }
};

let clearEntries = () => {
  c("#miles").value = "";
  c("#gallons").value = "";
  c("#mpg").value = "";
};

let clearMiles = () => {
  c("#miles").value = "";
};

let clearGallons = () => {
  c("#gallons").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
  c("#submit").addEventListener("click", processEntries);
  c("#mpg").addEventListener("dblclick", clearEntries);
  c("#miles").focus();
  c("#miles").addEventListener("focus", clearMiles);
  c("#gallons").addEventListener("focus", clearGallons);
});
