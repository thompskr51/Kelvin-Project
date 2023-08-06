// forecast in kelvin
const kelvin = 373
// forecast in celsius
const celsius = kelvin - 273
// forecast in fahrenheit
var fahrenheit = celsius * (9/5) + 32
// fahrenheit rounded down to the closest integer
fahrenheit = Math.floor(fahrenheit)
// forecast in newton
var newton = celsius * (33/100)
// newton rounded down to the cloest integer
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees Fahrenheit.`); 
