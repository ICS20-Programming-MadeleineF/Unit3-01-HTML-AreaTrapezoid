// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of a trapezoid.
 */
function calculate() {
  // input
  let baseA = parseFloat(document.getElementById('base-a-of-trapezoid').value)
  let baseB = parseFloat(document.getElementById('base-b-of-trapezoid').value) 
  let height = parseFloat(document.getElementById('height-of-trapezoid').value)
  
  // process
  const area = [(baseA + baseB) /2] * height
  
  // output
  document.getElementById('area').innerHTML = 'The area of the trapezoid is: ' + area.toFixed(2) + ' cm²'
}