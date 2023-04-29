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
  const feet = convertValue(valueToConvert, FEET_PER_METER)
  const meters = convertValue(valueToConvert, 1 / FEET_PER_METER)

  // Convert volume
  const liters = convertValue(valueToConvert, LITERS_PER_GALLON)
  const gallons = convertValue(valueToConvert, 1 / LITERS_PER_GALLON)

  // Convert mass
  const kilos = convertValue(valueToConvert, KILOGRAMS_PER_POUND)
  const pounds = convertValue(valueToConvert, 1 / KILOGRAMS_PER_POUND)

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

// Convert all values
function convertValue(value, conversionFactor) {
  return value * conversionFactor
}
