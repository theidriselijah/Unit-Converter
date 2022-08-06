/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
let numberToConvert = document.getElementById("number-to-convert")
let lengthConversion = document.getElementById("length-conversion")
let volumeConversion = document.getElementById("volume-conversion")
let massConverstion = document.getElementById("mass-conversion")

convertBtn.addEventListener("click", function() {
    let number = Number(numberToConvert.value)
    
    let metersToFeet = number * 3.281
    let feetToMeters = number / 3.281
    
    lengthConversion.textContent = `${number} meters = ${metersToFeet.toFixed(3)} feet | ${number} feet = ${feetToMeters.toFixed(3)} meters`
    
    let litersToGallons = number * 0.264
    let gallonsToLiters = number / 0.264
    
    volumeConversion.textContent = `${number} liters = ${litersToGallons.toFixed(3)} gallons | ${number} gallons = ${gallonsToLiters.toFixed(3)} liters`
    
    let kilosToPounds = number * 2.204
    let poundsToKilos = number / 2.204
    
    massConverstion.textContent = `${number} kilos = ${kilosToPounds.toFixed(3)} pounds | ${number} pounds = ${poundsToKilos.toFixed(3)} kilos`
})