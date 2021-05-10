// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

// Defining function that actives when user presses "Calculate Area" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const abase = parseInt(document.getElementById("abase-entered").value)
  const bbase = parseInt(document.getElementById("bbase-entered").value)
  const height = parseInt(document.getElementById("height-entered").value)

  // Making calculations
  const area = ((abase + bbase)/2)*height

  // Output calculations
  document.getElementById('area').innerHTML = "Area is: " + area + "mm²"
}