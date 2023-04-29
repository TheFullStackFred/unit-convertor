import {
  FEET_PER_METER,
  LITERS_PER_GALLON,
  KILOGRAMS_PER_POUND
} from './constants.js'

// Select DOM elements
const inputEl = document.querySelector('#input')
const convertBtn = document.querySelector('#convert-btn')
const lengthEl = document.querySelector('#length')
const volumeEl = document.querySelector('#volume')
const massEl = document.querySelector('#mass')

// Add event listener to convert button
convertBtn.addEventListener('click', function () {
  // Get input value and validate it
  const valueToConvert = inputEl.valueAsNumber
  if (isNaN(valueToConvert)) {
    alert('Please enter a valid number.')
    return
  }

  // Convert length
  const feet = convertLength(valueToConvert, FEET_PER_METER)
  const meters = convertLength(valueToConvert, 1 / FEET_PER_METER)

  // Convert volume
  const liters = convertVolume(valueToConvert, LITERS_PER_GALLON)
  const gallons = convertVolume(valueToConvert, 1 / LITERS_PER_GALLON)

  // Convert mass
  const kilos = convertMass(valueToConvert, KILOGRAMS_PER_POUND)
  const pounds = convertMass(valueToConvert, 1 / KILOGRAMS_PER_POUND)

  // Display results
  lengthEl.textContent = `${valueToConvert} meters = ${feet.toFixed(
    3
  )} feet | ${valueToConvert} feet = ${meters.toFixed(3)} meters`
  volumeEl.textContent = `${valueToConvert} liters = ${gallons.toFixed(
    3
  )} gallons | ${valueToConvert} gallons = ${liters.toFixed(3)} liters`
  massEl.textContent = `${valueToConvert} kilos = ${pounds.toFixed(
    3
  )} pounds | ${valueToConvert} pounds = ${kilos.toFixed(3)} kilos`
})

// Convert length from meters to feet and vice versa
function convertLength(value, conversionFactor) {
  return value * conversionFactor
}

// Convert volume from liters to gallons and vice versa
function convertVolume(value, conversionFactor) {
  return value * conversionFactor
}

// Convert mass from kilograms to pounds and vice versa
function convertMass(value, conversionFactor) {
  return value * conversionFactor
}
